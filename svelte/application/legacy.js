import{SvelteApplication as e}from"/modules/typhonjs/svelte/application.js";import{ApplicationShell as t}from"/modules/typhonjs/svelte/component/core.js";import{writable as i,derived as s}from"/modules/typhonjs/svelte/store.js";import{outroAndDestroy as n,isApplicationShell as l,hasGetter as r,parseSvelteConfig as a}from"/modules/typhonjs/svelte/util.js";function ownKeys(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(i),!0).forEach((function(t){_defineProperty(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ownKeys(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _classPrivateFieldGet(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,_classExtractFieldDescriptor(e,t,"get"))}function _classPrivateFieldSet(e,t,i){return function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}}(e,_classExtractFieldDescriptor(e,t,"set"),i),i}function _classExtractFieldDescriptor(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}function _classPrivateMethodGet(e,t,i){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return i}function _checkPrivateRedeclaration(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classPrivateFieldInitSpec(e,t,i){_checkPrivateRedeclaration(e,t),t.set(e,i)}function _classPrivateMethodInitSpec(e,t){_checkPrivateRedeclaration(e,t),t.add(e)}var o=new WeakMap;class HandlebarsApplication extends e{constructor(e){super(e),_classPrivateFieldInitSpec(this,o,{writable:!0,value:void 0}),this.popOut&&(this.options.svelte=foundry.utils.mergeObject("object"==typeof this.options.svelte?this.options.svelte:{},{class:t,intro:!0,target:document.body}))}async _render(e,t){_classPrivateFieldSet(this,o,this.options.popOut),this.options.popOut=!1,await super._render(e,t),this.options.popOut=_classPrivateFieldGet(this,o)}_injectHTML(e){var t,i;super._injectHTML(e),null!==(t=this.svelte)&&void 0!==t&&null!==(i=t.applicationShell)&&void 0!==i&&i.elementContent&&this.svelte.applicationShell.elementContent.appendChild(...e)}_replaceHTML(e,t){var i,s;if(e.length)if(super._replaceHTML(e,t),null!==(i=this.svelte)&&void 0!==i&&null!==(s=i.applicationShell)&&void 0!==s&&s.elementContent){const e=this.svelte.applicationShell.elementContent;for(;e.firstChild&&!e.lastChild.remove(););e.appendChild(...t),this.title=this.title}else e.replaceWith(t),this._element=t,this.elementTarget=t[0]}}var c=new WeakMap,p=new WeakMap;class GetSvelteData{constructor(e,t){_classPrivateFieldInitSpec(this,c,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,p,{writable:!0,value:void 0}),_classPrivateFieldSet(this,c,e),_classPrivateFieldSet(this,p,t)}get applicationShell(){return _classPrivateFieldGet(this,c)[0]}component(e){const t=_classPrivateFieldGet(this,p)[e];return"object"==typeof t?null==t?void 0:t.component:void 0}*componentEntries(){for(let e=0;e<_classPrivateFieldGet(this,p).length;e++)yield[e,_classPrivateFieldGet(this,p)[e].component]}*componentValues(){for(let e=0;e<_classPrivateFieldGet(this,p).length;e++)yield _classPrivateFieldGet(this,p)[e].component}data(e){return _classPrivateFieldGet(this,p)[e]}dataEntries(){return _classPrivateFieldGet(this,p).entries()}dataValues(){return _classPrivateFieldGet(this,p).values()}get length(){return _classPrivateFieldGet(this,p).length}}Object.freeze(GetSvelteData);var h=new WeakMap,d=new WeakMap,u=new WeakMap,v=new WeakMap,f=new WeakMap,m=new WeakMap,_=new WeakMap,g=new WeakMap,b=new WeakMap,P=new WeakMap,F=new WeakMap,y=new WeakSet,w=new WeakSet,S=new WeakSet;class SvelteFormApplication extends FormApplication{constructor(e,t){super(e,t),_classPrivateMethodInitSpec(this,S),_classPrivateMethodInitSpec(this,w),_classPrivateMethodInitSpec(this,y),_classPrivateFieldInitSpec(this,d,{get:_get_applicationShell,set:void 0}),_classPrivateFieldInitSpec(this,h,{writable:!0,value:[null]}),_classPrivateFieldInitSpec(this,u,{writable:!0,value:null}),_classPrivateFieldInitSpec(this,v,{writable:!0,value:null}),_classPrivateFieldInitSpec(this,f,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,m,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,g,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,b,{writable:!0,value:[]}),_classPrivateFieldInitSpec(this,P,{writable:!0,value:[]}),_classPrivateFieldInitSpec(this,F,{writable:!0,value:new GetSvelteData(_classPrivateFieldGet(this,h),_classPrivateFieldGet(this,P))}),_classPrivateMethodGet(this,y,_storesInitialize2).call(this)}static get defaultOptions(){return foundry.utils.mergeObject(super.defaultOptions,{draggable:!0,headerButtonNoLabel:!1,jqueryCloseAnimation:!0,zIndex:null})}get draggable(){return this.options.draggable}get elementContent(){return _classPrivateFieldGet(this,v)}get elementTarget(){return _classPrivateFieldGet(this,u)}get minimizable(){return this.options.minimizable}get popOut(){return super.popOut}get resizable(){return this.options.resizable}get svelte(){return _classPrivateFieldGet(this,F)}get title(){return super.title}get zIndex(){return this.options.zIndex}set draggable(e){"boolean"==typeof e&&this.setOptions("draggable",e)}set elementContent(e){if(!(e instanceof HTMLElement))throw new TypeError("SvelteFormApplication - set elementContent error: 'content' is not an HTMLElement.");_classPrivateFieldSet(this,v,e)}set elementTarget(e){if(!(e instanceof HTMLElement))throw new TypeError("SvelteFormApplication - set elementTarget error: 'target' is not an HTMLElement.");_classPrivateFieldSet(this,u,e)}set minimizable(e){"boolean"==typeof e&&this.setOptions("minimizable",e)}set popOut(e){"boolean"==typeof e&&this.setOptions("popOut",e)}set resizable(e){"boolean"==typeof e&&this.setOptions("resizable",e)}set title(e){"string"==typeof e&&this.setOptions("title",e)}set zIndex(e){this.setOptions("zIndex",Number.isInteger(e)?e:null)}async close(e={}){const t=Application.RENDER_STATES;if(!e.force&&![t.RENDERED,t.ERROR].includes(this._state))return;_classPrivateMethodGet(this,S,_storesUnsubscribe2).call(this),this._state=t.CLOSING;const i=$(_classPrivateFieldGet(this,u));if(!i)return this._state=t.CLOSED;for(const e of this.constructor._getInheritanceChain())Hooks.call(`close${e.name}`,this,i);("boolean"!=typeof this.options.jqueryCloseAnimation||this.options.jqueryCloseAnimation)&&(i[0].style.minHeight="0",await new Promise((e=>{i.slideUp(200,(()=>e()))})));const s=[];for(const e of _classPrivateFieldGet(this,P)){s.push(n(e.component));const t=e.config.eventbus;"object"==typeof t&&"function"==typeof t.off&&(t.off(),e.config.eventbus=void 0)}await Promise.all(s),_classPrivateFieldGet(this,P).length=0,i.remove(),_classPrivateFieldGet(this,h)[0]=null,this._element=null,_classPrivateFieldSet(this,v,null),_classPrivateFieldSet(this,u,null),delete ui.windows[this.appId],this._minimized=!1,this._scrollPositions=null,this._state=t.CLOSED,_classPrivateFieldGet(this,g).call(this,(e=>foundry.utils.mergeObject(e,{minimized:this._minimized})))}getOptions(e,t){return function(e,t,i){if("object"!=typeof e)return i;if("string"!=typeof t)return i;const s=t.split(".");for(let t=0;t<s.length;t++){if(void 0===e[s[t]]||null===e[s[t]])return i;e=e[s[t]]}return e}(this.options,e,t)}_injectHTML(e){if(this.popOut&&0===e.length&&Array.isArray(this.options.svelte))throw new Error("SvelteApplication - _injectHTML - A popout app with no template can only support one Svelte component.");if(this.updateHeaderButtons(),Array.isArray(this.options.svelte))for(const t of this.options.svelte){const i=s_LOAD_CONFIG(this,e,t,_classPrivateFieldGet(this,f),_classPrivateFieldGet(this,_));if(l(i.component)){if(null!==_classPrivateFieldGet(this,d))throw new Error(`SvelteApplication - _injectHTML - An application shell is already mounted; offending config: \n                    ${JSON.stringify(t)}`);_classPrivateFieldGet(this,h)[0]=i.component}_classPrivateFieldGet(this,P).push(i)}else if("object"==typeof this.options.svelte){const t=s_LOAD_CONFIG(this,e,this.options.svelte,_classPrivateFieldGet(this,f),_classPrivateFieldGet(this,_));if(l(t.component)){if(null!==_classPrivateFieldGet(this,d))throw new Error(`SvelteApplication - _injectHTML - An application shell is already mounted; offending config: \n                 ${JSON.stringify(this.options.svelte)}`);_classPrivateFieldGet(this,h)[0]=t.component}_classPrivateFieldGet(this,P).push(t)}const t=e.length&&e[0]instanceof DocumentFragment;let i=!0;for(const e of _classPrivateFieldGet(this,P))if(!e.injectHTML){i=!1;break}if(i&&super._injectHTML(e),null!==_classPrivateFieldGet(this,d))this._element=$(_classPrivateFieldGet(this,d).elementRoot),_classPrivateFieldSet(this,v,r(_classPrivateFieldGet(this,d),"elementContent")?_classPrivateFieldGet(this,d).elementContent:null),_classPrivateFieldSet(this,u,r(_classPrivateFieldGet(this,d),"elementTarget")?_classPrivateFieldGet(this,d).elementTarget:null);else if(t)for(const e of _classPrivateFieldGet(this,P))if(e.element instanceof HTMLElement){this._element=$(e.element);break}if(null===_classPrivateFieldGet(this,u)){const e="string"==typeof this.options.selectorTarget?this._element.find(this.options.selectorTarget):this._element;_classPrivateFieldSet(this,u,e[0])}if(null===_classPrivateFieldGet(this,u)||void 0===_classPrivateFieldGet(this,u)||0===_classPrivateFieldGet(this,u).length)throw new Error(`SvelteApplication - _injectHTML: Target element '${this.options.selectorTarget}' not found.`);setTimeout((()=>_classPrivateMethodGet(this,w,_storesSubscribe2).call(this)),0),this.onSvelteMount({element:this._element[0],elementContent:_classPrivateFieldGet(this,v),elementTarget:_classPrivateFieldGet(this,u)})}async maximize(){if(this.popOut&&![!1,null].includes(this._minimized))return _classPrivateFieldGet(this,g).call(this,(e=>foundry.utils.mergeObject(e,{minimized:!1}))),super.maximize()}async minimize(){if(this.rendered&&this.popOut&&![!0,null].includes(this._minimized))return _classPrivateFieldGet(this,g).call(this,(e=>foundry.utils.mergeObject(e,{minimized:!0}))),super.minimize()}mergeOptions(e){_classPrivateFieldGet(this,m).call(this,(t=>foundry.utils.mergeObject(t,e)))}onSvelteMount({element:e,elementContent:t,elementTarget:i}){}_replaceHTML(e,t){e.length&&this.updateHeaderButtons()}async _renderInner(e){const t="string"==typeof this.template?await renderTemplate(this.template,e):document.createDocumentFragment();return $(t)}setOptions(e,t){const i=function(e,t,i,s="set",n=!0){if("object"!=typeof e)throw new TypeError("safeSet Error: 'data' is not an 'object'.");if("string"!=typeof t)throw new TypeError("safeSet Error: 'accessor' is not a 'string'.");const l=t.split(".");for(let t=0;t<l.length;t++){if(Array.isArray(e)){const e=+l[t];if(!Number.isInteger(e)||e<0)return!1}if(t===l.length-1)switch(s){case"add":e[l[t]]+=i;break;case"div":e[l[t]]/=i;break;case"mult":e[l[t]]*=i;break;case"set":e[l[t]]=i;break;case"set-undefined":void 0===e[l[t]]&&(e[l[t]]=i);break;case"sub":e[l[t]]-=i}else{if(n&&void 0===e[l[t]]&&(e[l[t]]={}),null===e[l[t]]||"object"!=typeof e[l[t]])return!1;e=e[l[t]]}}return!0}(this.options,e,t);i&&_classPrivateFieldGet(this,m).call(this,(()=>this.options))}setPosition({left:e,top:t,width:i,height:s,scale:n,noHeight:l=!1,noWidth:r=!1}={}){const a=this.elementTarget,o=this.position,c=globalThis.getComputedStyle(a);if(!a.style.width||i){const t=i||a.offsetWidth,s=parseInt(c.minWidth)||MIN_WINDOW_WIDTH,n=a.style.maxWidth||globalThis.innerWidth;o.width=i=Math.clamped(t,s,n),r||(a.style.width=`${i}px`),i+o.left>globalThis.innerWidth&&(e=o.left)}if(i=a.offsetWidth,!a.style.height||s){const e=s||a.offsetHeight+1,i=parseInt(c.minHeight)||MIN_WINDOW_HEIGHT,n=a.style.maxHeight||globalThis.innerHeight;o.height=s=Math.clamped(e,i,n),l||(a.style.height=`${s}px`),s+o.top>globalThis.innerHeight+1&&(t=o.top-1)}if(s=a.offsetHeight,!a.style.left||Number.isFinite(e)){const t=Number.isFinite(e)?e:(globalThis.innerWidth-i)/2,s=Math.max(globalThis.innerWidth-i,0);o.left=e=Math.clamped(t,0,s),a.style.left=`${e}px`}if(!a.style.top||Number.isFinite(t)){const e=Number.isFinite(t)?t:(globalThis.innerHeight-s)/2,i=Math.max(globalThis.innerHeight-s,0);o.top=t=Math.clamped(e,0,i),a.style.top=`${o.top}px`}return n&&(o.scale=Math.max(n,0),a.style.transform=1===n?"":`scale(${n})`),o}updateHeaderButtons(){const e=this._getHeaderButtons();if("boolean"==typeof this.options.headerButtonNoLabel&&this.options.headerButtonNoLabel)for(const t of e)t.label=void 0;_classPrivateFieldGet(this,g).call(this,(t=>(t.headerButtons=e,t)))}}function _get_applicationShell(){return _classPrivateFieldGet(this,h)[0]}function _storesInitialize2(){const e=i(this.options);_classPrivateFieldSet(this,m,e.update);const t={subscribe:e.subscribe,draggable:s(e,((e,t)=>t(e.draggable))),minimizable:s(e,((e,t)=>t(e.minimizable))),popOut:s(e,((e,t)=>t(e.popOut))),resizable:s(e,((e,t)=>t(e.resizable))),title:s(e,((e,t)=>t(e.title))),zIndex:s(e,((e,t)=>t(Number.isInteger(e.zIndex)?e.zIndex:null)))};Object.freeze(t),_classPrivateFieldSet(this,f,t);const n=i({headerButtons:[],minimized:this._minimized});_classPrivateFieldSet(this,g,n.update);const l={subscribe:n.subscribe,headerButtons:s(n,((e,t)=>t(e.headerButtons))),minimized:s(n,((e,t)=>t(e.minimized)))};Object.freeze(l),_classPrivateFieldSet(this,_,l)}function _storesSubscribe2(){_classPrivateFieldGet(this,b).push(_classPrivateFieldGet(this,f).popOut.subscribe((e=>{e&&this.rendered?ui.windows[this.appId]=this:delete ui.windows[this.appId]}))),_classPrivateFieldGet(this,b).push(_classPrivateFieldGet(this,f).zIndex.subscribe((e=>{null!==this._element&&(this._element[0].style.zIndex=e)})))}function _storesUnsubscribe2(){_classPrivateFieldGet(this,b).forEach((e=>e())),_classPrivateFieldSet(this,b,[])}function s_LOAD_CONFIG(e,t,i,s,n){const r="object"==typeof i.options?i.options:{};let o;if(o=i.target instanceof HTMLElement?i.target:"string"==typeof i.target?t.find(i.target).get(0):document.createDocumentFragment(),void 0===o)throw new Error(`SvelteApplication - s_LOAD_CONFIG - could not find target selector: ${i.target} for config:\n${JSON.stringify(i)}`);const c=i.class,p=a(_objectSpread2(_objectSpread2({},i),{},{target:o}),e),h=p.context.get("external");let d;h.foundryApp=e,h.storeAppOptions=s,h.storeUIOptions=n,"object"==typeof e._eventbus&&"function"==typeof e._eventbus.createProxy&&(d=e._eventbus.createProxy(),h.eventbus=d);const u=new c(p);let v;if(p.eventbus=d,l(u)&&(v=u.elementRoot),i.target instanceof DocumentFragment&&o.firstElementChild)void 0===v&&(v=o.firstElementChild),t.append(o);else if(i.target instanceof HTMLElement&&void 0===v){if(i.target instanceof HTMLElement&&"string"!=typeof r.selectorElement)throw new Error(`SvelteApplication - s_LOAD_CONFIG - HTMLElement target with no 'selectorElement' defined for config:\n${JSON.stringify(i)}`);if(v=o.querySelector(r.selectorElement),null==v)throw new Error(`SvelteApplication - s_LOAD_CONFIG - HTMLElement target - could not find 'selectorElement' for config:\n${JSON.stringify(i)}`)}const f={config:p,component:u,element:v,injectHTML:!(i.target instanceof HTMLElement)};return Object.freeze(f),f}var O=new WeakMap;class HandlebarsFormApplication extends SvelteFormApplication{constructor(e,i){super(e,i),_classPrivateFieldInitSpec(this,O,{writable:!0,value:void 0}),this.popOut&&(this.options.svelte=foundry.utils.mergeObject("object"==typeof this.options.svelte?this.options.svelte:{},{class:t,intro:!0,target:document.body}))}async _render(e,t){_classPrivateFieldSet(this,O,this.options.popOut),this.options.popOut=!1,await super._render(e,t),this.options.popOut=_classPrivateFieldGet(this,O)}async _renderInner(e){const t=await super._renderInner(e);return this.form=t.filter(((e,t)=>t instanceof HTMLFormElement))[0],this.form||(this.form=t.find("form")[0]),t}_injectHTML(e){var t,i;super._injectHTML(e),null!==(t=this.svelte)&&void 0!==t&&null!==(i=t.applicationShell)&&void 0!==i&&i.elementContent&&this.svelte.applicationShell.elementContent.appendChild(...e)}_replaceHTML(e,t){var i,s;if(e.length)if(super._replaceHTML(e,t),null!==(i=this.svelte)&&void 0!==i&&null!==(s=i.applicationShell)&&void 0!==s&&s.elementContent){const e=this.svelte.applicationShell.elementContent;for(;e.firstChild&&!e.lastChild.remove(););e.appendChild(...t),this.title=this.title}else e.replaceWith(t),this._element=t,this.elementTarget=t[0]}}export{HandlebarsApplication,HandlebarsFormApplication};
//# sourceMappingURL=legacy.js.map
