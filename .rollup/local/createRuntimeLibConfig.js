import resolve             from '@rollup/plugin-node-resolve';
import virtual             from '@rollup/plugin-virtual';

import {
   typhonjsRuntime,
   typhonjsRuntimeOut }    from './index.js';

const bundleMap = {
   // Handled separately (default export):
   // 'data/struct/cache/quick-lru': ['@typhonjs-svelte/runtime-base/data/struct/cache/quick-lru'],
   'data/compress': ['@typhonjs-svelte/runtime-base/data/compress'],
   'data/format/base64': ['@typhonjs-svelte/runtime-base/data/format/base64'],
   'data/format/json5': ['@typhonjs-svelte/runtime-base/data/format/json5'],
   'data/format/msgpack': ['@typhonjs-svelte/runtime-base/data/format/msgpack'],
   'data/format/msgpack/compress': ['@typhonjs-svelte/runtime-base/data/format/msgpack/compress'],
   'data/format/unicode': ['@typhonjs-svelte/runtime-base/data/format/unicode'],
   'data/struct/hash/array': ['@typhonjs-svelte/runtime-base/data/struct/hash/array'],
   'data/struct/search/trie': ['@typhonjs-svelte/runtime-base/data/struct/search/trie'],
   'data/struct/search/trie/query': ['@typhonjs-svelte/runtime-base/data/struct/search/trie/query'],
   'data/struct/store/reducer': ['@typhonjs-svelte/runtime-base/data/struct/store/reducer'],
   'math/gl-matrix': ['@typhonjs-svelte/runtime-base/math/gl-matrix'],
   'math/interpolate': ['@typhonjs-svelte/runtime-base/math/interpolate'],
   'math/physics': ['@typhonjs-svelte/runtime-base/math/physics'],
   'math/util': ['@typhonjs-svelte/runtime-base/math/util'],
   'plugin/manager': ['@typhonjs-svelte/runtime-base/plugin/manager'],
   'plugin/manager/eventbus': ['@typhonjs-svelte/runtime-base/plugin/manager/eventbus'],
   'plugin/manager/eventbus/buses': ['@typhonjs-svelte/runtime-base/plugin/manager/eventbus/buses'],
   'util': ['@typhonjs-svelte/runtime-base/util'],
   'util/async': ['@typhonjs-svelte/runtime-base/util/async'],
   'util/browser': ['@typhonjs-svelte/runtime-base/util/browser'],
   'util/object': ['@typhonjs-svelte/runtime-base/util/object']
};

export function createRuntimeLibConfig({ sourcemap, outputPlugins = [] })
{
   const isLib = true;

   const config = [
      {
         input: 'pack',
         output: {
            file: `remote/data/struct/cache/quick-lru.js`,
            format: 'es',
            generatedCode: { constBindings: true },
            plugins: outputPlugins,
            sourcemap
         },
         plugins: [
            virtual({
               pack: `export { default } from '@typhonjs-svelte/runtime-base/data/struct/cache/quick-lru';`
            }),
            typhonjsRuntime({ isLib, exclude: ['@typhonjs-svelte/runtime-base/data/struct/cache/quick-lru'] }),
            resolve({ browser: true }),
         ]
      }
   ];

   for (const [key, value] of Object.entries(bundleMap))
   {
      const pack = value.map((entry) => `export * from '${entry}';`).join('\n');

      config.push({
         input: 'pack',
         output: {
            file: `remote/${key}.js`,
            format: 'es',
            generatedCode: { constBindings: true },
            plugins: outputPlugins,
            sourcemap
         },
         plugins: [
            virtual({ pack }),
            typhonjsRuntime({ isLib, exclude: value }),
            resolve({ browser: true }),
         ]
      });
   }

   return config;
}