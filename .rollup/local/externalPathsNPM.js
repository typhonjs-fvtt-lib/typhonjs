export const externalPathsNPM = {
   '@typhonjs-fvtt/svelte/action/dom': '@typhonjs-fvtt/runtime/svelte/action/dom',
   '@typhonjs-fvtt/svelte/animate': '@typhonjs-fvtt/runtime/svelte/animate',
   '@typhonjs-fvtt/svelte/animate/action': '@typhonjs-fvtt/runtime/svelte/animate/action',
   '@typhonjs-fvtt/svelte/application': '@typhonjs-fvtt/runtime/svelte/application',
   '@typhonjs-fvtt/svelte/application/dialog': '@typhonjs-fvtt/runtime/svelte/application/dialog',
   '@typhonjs-fvtt/svelte/application/legacy': '@typhonjs-fvtt/runtime/svelte/application/legacy',
   '@typhonjs-fvtt/svelte/component/core': '@typhonjs-fvtt/runtime/svelte/component/core',
   '@typhonjs-fvtt/svelte/component/dialog': '@typhonjs-fvtt/runtime/svelte/component/dialog',
   '@typhonjs-fvtt/svelte/gsap': '@typhonjs-fvtt/runtime/svelte/gsap',
   '@typhonjs-fvtt/svelte/gsap/plugin': '@typhonjs-fvtt/runtime/svelte/gsap/plugin',
   '@typhonjs-fvtt/svelte/gsap/plugin/bonus': '@typhonjs-fvtt/runtime/svelte/gsap/plugin/bonus',
   '@typhonjs-fvtt/svelte/helper': '@typhonjs-fvtt/runtime/svelte/helper',
   '@typhonjs-fvtt/svelte/store/derived': '@typhonjs-fvtt/runtime/svelte/store/derived',
   '@typhonjs-fvtt/svelte/store/dom': '@typhonjs-fvtt/runtime/svelte/store/dom',
   '@typhonjs-fvtt/svelte/store/fvtt': '@typhonjs-fvtt/runtime/svelte/store/fvtt',
   '@typhonjs-fvtt/svelte/store/position': '@typhonjs-fvtt/runtime/svelte/store/position',
   '@typhonjs-fvtt/svelte/store/storage/web': '@typhonjs-fvtt/runtime/svelte/store/storage/web',
   '@typhonjs-fvtt/svelte/store/storage/web/plugin': '@typhonjs-fvtt/runtime/svelte/store/storage/web/plugin',
   '@typhonjs-fvtt/svelte/transition': '@typhonjs-fvtt/runtime/svelte/transition',
   '@typhonjs-fvtt/svelte/util': '@typhonjs-fvtt/runtime/svelte/util',

   '@typhonjs-svelte/runtime-base/data/compress': '@typhonjs-fvtt/runtime/data/compress',
   '@typhonjs-svelte/runtime-base/data/format/base64': '@typhonjs-fvtt/runtime/data/format/base64',
   '@typhonjs-svelte/runtime-base/data/format/json5': '@typhonjs-fvtt/runtime/data/format/json5',
   '@typhonjs-svelte/runtime-base/data/format/msgpack': '@typhonjs-fvtt/runtime/data/format/msgpack',
   '@typhonjs-svelte/runtime-base/data/format/msgpack/compress': '@typhonjs-fvtt/runtime/data/format/msgpack/compress',
   '@typhonjs-svelte/runtime-base/data/format/unicode': '@typhonjs-fvtt/runtime/data/format/unicode',
   // Has default export '@typhonjs-svelte/runtime-base/data/struct/cache/quick-lru': '@typhonjs-fvtt/runtime/data/struct/cache/quick-lru',
   '@typhonjs-svelte/runtime-base/data/struct/hash/array': '@typhonjs-fvtt/runtime/data/struct/hash/array',
   '@typhonjs-svelte/runtime-base/data/struct/search/trie': '@typhonjs-fvtt/runtime/data/struct/search/trie',
   '@typhonjs-svelte/runtime-base/data/struct/search/trie/query': '@typhonjs-fvtt/runtime/data/struct/search/trie/query',
   '@typhonjs-svelte/runtime-base/data/struct/store/reducer': '@typhonjs-fvtt/runtime/data/struct/store/reducer',
   '@typhonjs-svelte/runtime-base/data/struct/store/reducer/array-object': '@typhonjs-fvtt/runtime/data/struct/store/reducer/array-object',
   '@typhonjs-svelte/runtime-base/math/gl-matrix': '@typhonjs-fvtt/runtime/math/gl-matrix',
   '@typhonjs-svelte/runtime-base/math/interpolate': '@typhonjs-fvtt/runtime/math/interpolate',
   '@typhonjs-svelte/runtime-base/math/physics': '@typhonjs-fvtt/runtime/math/physics',
   '@typhonjs-svelte/runtime-base/math/util': '@typhonjs-fvtt/runtime/math/util',
   '@typhonjs-svelte/runtime-base/plugin/manager': '@typhonjs-fvtt/runtime/plugin/manager',
   '@typhonjs-svelte/runtime-base/plugin/manager/eventbus': '@typhonjs-fvtt/runtime/plugin/manager/eventbus',
   '@typhonjs-svelte/runtime-base/plugin/manager/eventbus/buses': '@typhonjs-fvtt/runtime/plugin/manager/eventbus/buses',
   '@typhonjs-svelte/runtime-base/util': '@typhonjs-fvtt/runtime/util',
   '@typhonjs-svelte/runtime-base/util/async': '@typhonjs-fvtt/runtime/util/async',
   '@typhonjs-svelte/runtime-base/util/browser': '@typhonjs-fvtt/runtime/util/browser',
   '@typhonjs-svelte/runtime-base/util/object': '@typhonjs-fvtt/runtime/util/object',
   '@typhonjs-svelte/runtime-base/util/store': '@typhonjs-fvtt/runtime/util/store',

   'colord': '@typhonjs-fvtt/runtime/color/colord',
   'colord/plugins/a11y': '@typhonjs-fvtt/runtime/color/colord/plugins/a11y',
   'colord/plugins/cmyk': '@typhonjs-fvtt/runtime/color/colord/plugins/cmyk',
   'colord/plugins/harmonies': '@typhonjs-fvtt/runtime/color/colord/plugins/harmonies',
   'colord/plugins/hwb': '@typhonjs-fvtt/runtime/color/colord/plugins/hwb',
   'colord/plugins/lab': '@typhonjs-fvtt/runtime/color/colord/plugins/lab',
   'colord/plugins/lch': '@typhonjs-fvtt/runtime/color/colord/plugins/lch',
   'colord/plugins/minify': '@typhonjs-fvtt/runtime/color/colord/plugins/minify',
   'colord/plugins/mix': '@typhonjs-fvtt/runtime/color/colord/plugins/mix',
   'colord/plugins/names': '@typhonjs-fvtt/runtime/color/colord/plugins/names',
   'colord/plugins/xyz': '@typhonjs-fvtt/runtime/color/colord/plugins/xyz',

   // Exclude as external, but do not translate module references.
   'svelte': 'svelte',
   'svelte/animate': 'svelte/animate',
   'svelte/easing': 'svelte/easing',
   'svelte/internal': 'svelte/internal',
   'svelte/motion': 'svelte/motion',
   'svelte/store': 'svelte/store',
   'svelte/transition': 'svelte/transition'
};