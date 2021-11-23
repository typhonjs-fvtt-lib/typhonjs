import path                from 'path';

import resolve             from '@rollup/plugin-node-resolve';
import { generateTSDef }   from '@typhonjs-build-test/esm-d-ts';
import { getFileList }     from '@typhonjs-utils/file-util';
import fs                  from 'fs-extra';
import { rollup }          from 'rollup';
import sourcemaps          from 'rollup-plugin-sourcemaps';
import { terser }          from 'rollup-plugin-terser';
import upath               from 'upath';

import {
   createSvelteLibConfig,
   createSvelteNPMConfig } from './.rollup/local/index.js';

import terserConfig        from './terser.config.js';

const s_COMPRESS = true;     // Compresses the module lib output. Not the NPM distribution bundles.
const s_SOURCEMAPS = true;

// Defines whether source maps are generated / loaded from the .env file.
const sourcemap = s_SOURCEMAPS;

// Defines potential output plugins to use conditionally if the .env file indicates the bundles should be
// minified / mangled.
const outputPlugins = s_COMPRESS ? [terser(terserConfig)] : [];

const s_MODULES_DOMPURIFY_LIB = [
   {
      input: '.build/dompurify/DOMPurify.js',
      plugins: [
         resolve({ browser: true }),
         sourcemaps()
      ],
      output: {
         file: 'dompurify/DOMPurify.js',
         format: 'es',
         plugins: outputPlugins,
         preferConst: true,
         sourcemap,
         // sourcemapPathTransform: (sourcePath) => sourcePath.replace(relativePath, `.`)
      }
   },
   {
      input: '.build/dompurify/plugin/system/index.js',
      plugins: [
         resolve({ browser: true }),
         sourcemaps()
      ],
      output: {
         file: 'dompurify/plugin/system.js',
         format: 'es',
         plugins: outputPlugins,
         preferConst: true,
         sourcemap,
         // sourcemapPathTransform: (sourcePath) => sourcePath.replace(relativePath, `.`)
      }
   }
];

const s_MODULES_DOMPURIFY_NPM = [
   {
      input: {
         input: '.build/dompurify/DOMPurify.js',
         plugins: [
            resolve({ browser: true }),
            sourcemaps()
         ]
      },
      output: {
         output: {
            file: '_dist/dompurify/index.js',
            format: 'es',
            preferConst: true,
            sourcemap,
            // sourcemapPathTransform: (sourcePath) => sourcePath.replace(relativePath, `.`)
         }
      }
   },
   {
      input: {
         input: '.build/dompurify/plugin/system/index.js',
         plugins: [
            resolve({ browser: true }),
            sourcemaps()
         ]
      },
      output: {
         output: {
            file: '_dist/dompurify/plugin/system/index.js',
            format: 'es',
            preferConst: true,
            sourcemap,
            // sourcemapPathTransform: (sourcePath) => sourcePath.replace(relativePath, `.`)
         }
      }
   }
];

const s_MODULES_PLUGIN_LIB = [
   {
      input: '.build/plugin/manager.js',
      plugins: [
         resolve({ browser: true }),
         sourcemaps()
      ],
      output: {
         file: 'plugin/manager.js',
         format: 'es',
         plugins: outputPlugins,
         preferConst: true,
         sourcemap,
         // sourcemapPathTransform: (sourcePath) => sourcePath.replace(relativePath, `.`)
      }
   }
];

const s_MODULES_PLUGIN_NPM = [
   {
      input: {
         input: '.build/plugin/manager.js',
         plugins: [
            resolve({ browser: true }),
            sourcemaps()
         ]
      },
      output: {
         dtsFile: '.build/plugin/manager.js',
         output: {
            file: '_dist/plugin/manager/index.js',
            format: 'es',
            preferConst: true,
            sourcemap,
            // sourcemapPathTransform: (sourcePath) => sourcePath.replace(relativePath, `.`)
         }
      }
   }
];

const s_MODULES_TINYMCE_LIB = [
   {
      input: '.build/tinymce/initializePlugins.js',
      plugins: [
         resolve({ browser: true }),
         sourcemaps()
      ],
      output: {
         dir: 'tinymce',
         format: 'es',
         inlineDynamicImports: true,
         plugins: outputPlugins,
         preferConst: true,
         sourcemap,
         // sourcemapPathTransform: (sourcePath) => sourcePath.replace(relativePath, `.`)
      }
   }
];

const s_MODULES_TINYMCE_NPM = [
   {
      input: {
         input: '.build/tinymce/initializePlugins.js',
         plugins: [
            resolve({ browser: true }),
            sourcemaps()
         ]
      },
      output: {
         file: './_dist/tinymce/initializePlugins.js',
         output: {
            dir: '_dist/tinymce',
            format: 'es',
            inlineDynamicImports: true,
            preferConst: true,
            sourcemap,
            // sourcemapPathTransform: (sourcePath) => sourcePath.replace(relativePath, `.`)
         }
      }
   }
];

const rollupPluginsNPM = [
   ...s_MODULES_DOMPURIFY_NPM,
   ...s_MODULES_PLUGIN_NPM,
   ...createSvelteNPMConfig({ sourcemap: s_SOURCEMAPS, outputPlugins: [] }),
   ...s_MODULES_TINYMCE_NPM
];

for (const config of rollupPluginsNPM)
{
   const bundle = await rollup(config.input);

   await bundle.write(config.output);

   // closes the bundle
   await bundle.close();

   const dtsFile = config.output.dtsFile || config.output.output.file || config.output.file;
   const outFile = config.output.output.file || config.output.file;

   await generateTSDef({
      main: dtsFile,
      output: upath.changeExt(outFile, '.d.ts')
   });

   fs.writeJSONSync(`${path.dirname(outFile)}/package.json`, {
      main: './index.js',
      module: './index.js',
      type: 'module',
      types: './index.d.ts'
   });
}

// Handle @typhonjs-fvtt/svelte/application & application/legacy by copying the source and converting all import
// package references.
fs.emptyDirSync('./_dist/svelte/application');
fs.copySync('./node_modules/@typhonjs-fvtt/svelte/src/application', './_dist/svelte/application');
const appFiles = await getFileList({ dir: './_dist/svelte/application' });
for (const appFile of appFiles)
{
   const fileData = fs.readFileSync(appFile, 'utf-8').toString();
   fs.writeFileSync(appFile, fileData.replaceAll('@typhonjs-fvtt/svelte/', '@typhonjs-fvtt/runtime/svelte/'));
}

// We use rollup as per normal to generate the library bundles.
export default () =>
{
   return [
      ...s_MODULES_DOMPURIFY_LIB,
      ...s_MODULES_PLUGIN_LIB,
      ...createSvelteLibConfig({ sourcemap: s_SOURCEMAPS, outputPlugins }),
      ...s_MODULES_TINYMCE_LIB
   ];
}
