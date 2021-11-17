import{group_outros as t,transition_out as o,check_outros as e}from"/modules/typhonjs/svelte/internal.js";function n(t,o){if(null==t)return!1;const e=Object.getPrototypeOf(t),n=Object.getOwnPropertyDescriptor(e,o);return!(void 0===n||void 0===n.get)}function r(t,o){if(null==t)return!1;const e=Object.getPrototypeOf(t),n=Object.getOwnPropertyDescriptor(e,o);return!(void 0===n||void 0===n.get||void 0===n.set)}function i(t,o){if(null==t)return!1;const e=Object.getPrototypeOf(t),n=Object.getOwnPropertyDescriptor(e,o);return!(void 0===n||void 0===n.set)}function f(t){return null!=t&&"function"==typeof t&&(void 0!==typeof window?"function"==typeof t.prototype.$destroy&&"function"==typeof t.prototype.$on:"function"==typeof t.render)}async function c(n){return new Promise((r=>{n.$$.fragment&&n.$$.fragment.o?(t(),o(n.$$.fragment,0,0,(()=>{n.$destroy(),r()})),e()):(n.$destroy(),r())}))}function s(t,o){if("object"!=typeof t)throw new TypeError(`parseSvelteConfig - 'config' is not an object:\n${JSON.stringify(t)}.`);if(!f(t.class))throw new TypeError(`parseSvelteConfig - 'class' is not a Svelte component constructor for config:\n${JSON.stringify(t)}.`);if(void 0!==t.hydrate&&"boolean"!=typeof t.hydrate)throw new TypeError(`parseSvelteConfig - 'hydrate' is not a boolean for config:\n${JSON.stringify(t)}.`);if(void 0!==t.intro&&"boolean"!=typeof t.intro)throw new TypeError(`parseSvelteConfig - 'intro' is not a boolean for config:\n${JSON.stringify(t)}.`);if(!(void 0===t.target||"string"==typeof t.target||t.target instanceof HTMLElement||t.target instanceof ShadowRoot||t.target instanceof DocumentFragment))throw new TypeError(`parseSvelteConfig - 'target' is not a string, HTMLElement, ShadowRoot, or DocumentFragment for config:\n${JSON.stringify(t)}.`);if(!(void 0===t.anchor||"string"==typeof t.anchor||t.anchor instanceof HTMLElement||t.anchor instanceof ShadowRoot||t.anchor instanceof DocumentFragment))throw new TypeError(`parseSvelteConfig - 'anchor' is not a string, HTMLElement, ShadowRoot, or DocumentFragment for config:\n${JSON.stringify(t)}.`);if(void 0!==t.context&&"function"!=typeof t.context&&!(t.context instanceof Map)&&"object"!=typeof t.context)throw new TypeError(`parseSvelteConfig - 'context' is not a Map, function or object for config:\n${JSON.stringify(t)}.`);if(void 0!==t.selectorTarget&&"string"!=typeof t.selectorTarget)throw new TypeError(`parseSvelteConfig - 'selectorTarget' is not a string for config:\n${JSON.stringify(t)}.`);if(void 0!==t.options&&"object"!=typeof t.options)throw new TypeError(`parseSvelteConfig - 'options' is not an object for config:\n${JSON.stringify(t)}.`);if(void 0!==t.options){if(void 0!==t.options.injectApp&&"boolean"!=typeof t.options.injectApp)throw new TypeError(`parseSvelteConfig - 'options.injectApp' is not a boolean for config:\n${JSON.stringify(t)}.`);if(void 0!==t.options.injectEventbus&&"boolean"!=typeof t.options.injectEventbus)throw new TypeError(`parseSvelteConfig - 'options.injectEventbus' is not a boolean for config:\n${JSON.stringify(t)}.`);if(void 0!==t.options.selectorElement&&"string"!=typeof t.options.selectorElement)throw new TypeError(`parseSvelteConfig - 'selectorElement' is not a string for config:\n${JSON.stringify(t)}.`)}const e={...t};delete e.options;let n={};if("function"==typeof e.context){const r=e.context;delete e.context;const i=r.call(o);if("object"!=typeof i)throw new Error(`parseSvelteConfig - 'context' is a function that did not return an object for config:\n${JSON.stringify(t)}`);n={...i}}else e.context instanceof Map?(n=Object.fromEntries(e.context),delete e.context):"object"==typeof e.context&&(n=e.context,delete e.context);if(e.props=p(e.props,o,t),Array.isArray(e.children)){const r=[];for(let n=0;n<e.children.length;n++){const i=e.children[n];if(!f(i.class))throw new Error(`parseSvelteConfig - 'class' is not a Svelte component for child[${n}] for config:\n${JSON.stringify(t)}`);i.props=p(i.props,o,t),r.push(i)}r.length>0&&(n.children=r),delete e.children}else if("object"==typeof e.children){if(!f(e.children.class))throw new Error(`parseSvelteConfig - 'class' is not a Svelte component for children object for config:\n${JSON.stringify(t)}`);e.children.props=p(e.children.props,o,t),n.children=[e.children],delete e.children}return e.context instanceof Map||(e.context=new Map),e.context.set("external",n),e}function p(t,o,e){if("function"==typeof t){const n=t.call(o);if("object"==typeof n)return n;throw new Error(`parseSvelteConfig - 'props' is a function that did not return an object for config:\n${JSON.stringify(e)}`)}if("object"==typeof t)return t;if(void 0!==t)throw new Error(`parseSvelteConfig - 'props' is not a function or an object for config:\n${JSON.stringify(e)}`);return{}}const a=["elementRoot"];function l(t){if(null==t)return!1;const o=Object.getPrototypeOf(t);for(const t of a){const e=Object.getOwnPropertyDescriptor(o,t);if(void 0===e||void 0===e.get||void 0===e.set)return!1}return!0}Object.freeze(a);export{r as hasAccessor,n as hasGetter,i as hasSetter,l as isApplicationShell,f as isSvelteComponent,c as outroAndDestroy,s as parseSvelteConfig};
