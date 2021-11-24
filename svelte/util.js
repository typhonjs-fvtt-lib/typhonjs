import{group_outros as e,transition_out as t,check_outros as o}from"/modules/typhonjs/svelte/internal.js";function ownKeys(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach((function(t){_defineProperty(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function hasGetter(e,t){if(null==e)return!1;const o=Object.getPrototypeOf(e),n=Object.getOwnPropertyDescriptor(o,t);return!(void 0===n||void 0===n.get)}function hasAccessor(e,t){if(null==e)return!1;const o=Object.getPrototypeOf(e),n=Object.getOwnPropertyDescriptor(o,t);return!(void 0===n||void 0===n.get||void 0===n.set)}function hasSetter(e,t){if(null==e)return!1;const o=Object.getPrototypeOf(e),n=Object.getOwnPropertyDescriptor(o,t);return!(void 0===n||void 0===n.set)}function isSvelteComponent(e){return null!=e&&"function"==typeof e&&(void 0!==typeof window?"function"==typeof e.prototype.$destroy&&"function"==typeof e.prototype.$on:"function"==typeof e.render)}async function outroAndDestroy(n){return new Promise((r=>{n.$$.fragment&&n.$$.fragment.o?(e(),t(n.$$.fragment,0,0,(()=>{n.$destroy(),r()})),o()):(n.$destroy(),r())}))}function parseSvelteConfig(e,t){if("object"!=typeof e)throw new TypeError(`parseSvelteConfig - 'config' is not an object:\n${JSON.stringify(e)}.`);if(!isSvelteComponent(e.class))throw new TypeError(`parseSvelteConfig - 'class' is not a Svelte component constructor for config:\n${JSON.stringify(e)}.`);if(void 0!==e.hydrate&&"boolean"!=typeof e.hydrate)throw new TypeError(`parseSvelteConfig - 'hydrate' is not a boolean for config:\n${JSON.stringify(e)}.`);if(void 0!==e.intro&&"boolean"!=typeof e.intro)throw new TypeError(`parseSvelteConfig - 'intro' is not a boolean for config:\n${JSON.stringify(e)}.`);if(!(void 0===e.target||"string"==typeof e.target||e.target instanceof HTMLElement||e.target instanceof ShadowRoot||e.target instanceof DocumentFragment))throw new TypeError(`parseSvelteConfig - 'target' is not a string, HTMLElement, ShadowRoot, or DocumentFragment for config:\n${JSON.stringify(e)}.`);if(!(void 0===e.anchor||"string"==typeof e.anchor||e.anchor instanceof HTMLElement||e.anchor instanceof ShadowRoot||e.anchor instanceof DocumentFragment))throw new TypeError(`parseSvelteConfig - 'anchor' is not a string, HTMLElement, ShadowRoot, or DocumentFragment for config:\n${JSON.stringify(e)}.`);if(void 0!==e.context&&"function"!=typeof e.context&&!(e.context instanceof Map)&&"object"!=typeof e.context)throw new TypeError(`parseSvelteConfig - 'context' is not a Map, function or object for config:\n${JSON.stringify(e)}.`);if(void 0!==e.selectorTarget&&"string"!=typeof e.selectorTarget)throw new TypeError(`parseSvelteConfig - 'selectorTarget' is not a string for config:\n${JSON.stringify(e)}.`);if(void 0!==e.options&&"object"!=typeof e.options)throw new TypeError(`parseSvelteConfig - 'options' is not an object for config:\n${JSON.stringify(e)}.`);if(void 0!==e.options){if(void 0!==e.options.injectApp&&"boolean"!=typeof e.options.injectApp)throw new TypeError(`parseSvelteConfig - 'options.injectApp' is not a boolean for config:\n${JSON.stringify(e)}.`);if(void 0!==e.options.injectEventbus&&"boolean"!=typeof e.options.injectEventbus)throw new TypeError(`parseSvelteConfig - 'options.injectEventbus' is not a boolean for config:\n${JSON.stringify(e)}.`);if(void 0!==e.options.selectorElement&&"string"!=typeof e.options.selectorElement)throw new TypeError(`parseSvelteConfig - 'selectorElement' is not a string for config:\n${JSON.stringify(e)}.`)}const o=_objectSpread2({},e);delete o.options;let n={};if("function"==typeof o.context){const r=o.context;delete o.context;const i=r.call(t);if("object"!=typeof i)throw new Error(`parseSvelteConfig - 'context' is a function that did not return an object for config:\n${JSON.stringify(e)}`);n=_objectSpread2({},i)}else o.context instanceof Map?(n=Object.fromEntries(o.context),delete o.context):"object"==typeof o.context&&(n=o.context,delete o.context);if(o.props=s_PROCESS_PROPS(o.props,t,e),Array.isArray(o.children)){const r=[];for(let n=0;n<o.children.length;n++){const i=o.children[n];if(!isSvelteComponent(i.class))throw new Error(`parseSvelteConfig - 'class' is not a Svelte component for child[${n}] for config:\n${JSON.stringify(e)}`);i.props=s_PROCESS_PROPS(i.props,t,e),r.push(i)}r.length>0&&(n.children=r),delete o.children}else if("object"==typeof o.children){if(!isSvelteComponent(o.children.class))throw new Error(`parseSvelteConfig - 'class' is not a Svelte component for children object for config:\n${JSON.stringify(e)}`);o.children.props=s_PROCESS_PROPS(o.children.props,t,e),n.children=[o.children],delete o.children}return o.context instanceof Map||(o.context=new Map),o.context.set("external",n),o}function s_PROCESS_PROPS(e,t,o){if("function"==typeof e){const n=e.call(t);if("object"==typeof n)return n;throw new Error(`parseSvelteConfig - 'props' is a function that did not return an object for config:\n${JSON.stringify(o)}`)}if("object"==typeof e)return e;if(void 0!==e)throw new Error(`parseSvelteConfig - 'props' is not a function or an object for config:\n${JSON.stringify(o)}`);return{}}const n=["elementRoot"];function isApplicationShell(e){if(null==e)return!1;const t=Object.getPrototypeOf(e);for(const e of n){const o=Object.getOwnPropertyDescriptor(t,e);if(void 0===o||void 0===o.get||void 0===o.set)return!1}return!0}Object.freeze(n);export{hasAccessor,hasGetter,hasSetter,isApplicationShell,isSvelteComponent,outroAndDestroy,parseSvelteConfig};
//# sourceMappingURL=util.js.map
