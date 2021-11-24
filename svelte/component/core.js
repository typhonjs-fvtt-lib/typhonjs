import{SvelteComponent as t,init as n,safe_not_equal as e,flush as i,empty as o,insert as s,group_outros as r,transition_out as a,check_outros as l,transition_in as c,detach as p,element as u,attr as $,noop as d,create_component as f,mount_component as h,get_spread_update as g,get_spread_object as m,destroy_component as _,destroy_each as b,assign as T,create_slot as y,listen as O,update_slot_base as x,get_all_dirty_from_scope as v,get_slot_changes as k,add_render_callback as w,create_in_transition as C,create_out_transition as j,binding_callbacks as z,text as A,append as R,set_data as I,space as S,action_destroyer as E,is_function as J,run_all as H,component_subscribe as L,add_resize_listener as D,null_to_empty as M,set_style as N,create_bidirectional_transition as P,globals as B,current_component as G,HtmlTag as U,stop_propagation as X,prevent_default as W,update_keyed_each as q,destroy_block as F,bind as Y,add_flush_callback as Q}from"/modules/typhonjs/svelte/internal.js";import{getContext as K,setContext as V,createEventDispatcher as Z}from"/modules/typhonjs/svelte/index.js";import{s_DEFAULT_TRANSITION as tt,s_DEFAULT_TRANSITION_OPTIONS as nt,slideFade as et}from"/modules/typhonjs/svelte/transition.js";import{draggable as it}from"/modules/typhonjs/svelte/action.js";import{localize as ot}from"/modules/typhonjs/svelte/helper.js";import{outroAndDestroy as st,isSvelteComponent as rt,parseSvelteConfig as at}from"/modules/typhonjs/svelte/util.js";import{fade as lt}from"/modules/typhonjs/svelte/transition.js";function get_each_context$3(t,n,e){const i=t.slice();return i[2]=n[e],i}function create_if_block_1$3(t){let n;return{c(){n=u("p"),n.textContent="Container warning: No children.",$(n,"class","svelte-1s361pr")},m(t,e){s(t,n,e)},p:d,i:d,o:d,d(t){t&&p(n)}}}function create_if_block$4(t){let n,e,i=t[1],u=[];for(let n=0;n<i.length;n+=1)u[n]=create_each_block$3(get_each_context$3(t,i,n));const out=t=>a(u[t],1,1,(()=>{u[t]=null}));return{c(){for(let t=0;t<u.length;t+=1)u[t].c();n=o()},m(t,i){for(let n=0;n<u.length;n+=1)u[n].m(t,i);s(t,n,i),e=!0},p(t,e){if(2&e){let o;for(i=t[1],o=0;o<i.length;o+=1){const s=get_each_context$3(t,i,o);u[o]?(u[o].p(s,e),c(u[o],1)):(u[o]=create_each_block$3(s),u[o].c(),c(u[o],1),u[o].m(n.parentNode,n))}for(r(),o=i.length;o<u.length;o+=1)out(o);l()}},i(t){if(!e){for(let t=0;t<i.length;t+=1)c(u[t]);e=!0}},o(t){u=u.filter(Boolean);for(let t=0;t<u.length;t+=1)a(u[t]);e=!1},d(t){b(u,t),t&&p(n)}}}function create_each_block$3(t){let n,e,i;const u=[t[2].props];var $=t[2].class;function switch_props(t){let n={};for(let t=0;t<u.length;t+=1)n=T(n,u[t]);return{props:n}}return $&&(n=new $(switch_props())),{c(){n&&f(n.$$.fragment),e=o()},m(t,o){n&&h(n,t,o),s(t,e,o),i=!0},p(t,i){const o=2&i?g(u,[m(t[2].props)]):{};if($!==($=t[2].class)){if(n){r();const t=n;a(t.$$.fragment,1,0,(()=>{_(t,1)})),l()}$?(n=new $(switch_props()),f(n.$$.fragment),c(n.$$.fragment,1),h(n,e.parentNode,e)):n=null}else $&&n.$set(o)},i(t){i||(n&&c(n.$$.fragment,t),i=!0)},o(t){n&&a(n.$$.fragment,t),i=!1},d(t){t&&p(e),n&&_(n,t)}}}function create_fragment$a(t){let n,e,i,u,$;const d=[create_if_block$4,create_if_block_1$3],f=[];function select_block_type(t,e){return(null==n||2&e)&&(n=!!Array.isArray(t[1])),n?0:t[0]?1:-1}return~(e=select_block_type(t,-1))&&(i=f[e]=d[e](t)),{c(){i&&i.c(),u=o()},m(t,n){~e&&f[e].m(t,n),s(t,u,n),$=!0},p(t,[n]){let o=e;e=select_block_type(t,n),e===o?~e&&f[e].p(t,n):(i&&(r(),a(f[o],1,1,(()=>{f[o]=null})),l()),~e?(i=f[e],i?i.p(t,n):(i=f[e]=d[e](t),i.c()),c(i,1),i.m(u.parentNode,u)):i=null)},i(t){$||(c(i),$=!0)},o(t){a(i),$=!1},d(t){~e&&f[e].d(t),t&&p(u)}}}function instance$a(t,n,e){let{warn:i=!1}=n,{children:o}=n;return t.$$set=t=>{"warn"in t&&e(0,i=t.warn),"children"in t&&e(1,o=t.children)},[i,o]}class TJSContainer extends t{constructor(t){super(),n(this,t,instance$a,create_fragment$a,e,{warn:0,children:1})}get warn(){return this.$$.ctx[0]}set warn(t){this.$$set({warn:t}),i()}get children(){return this.$$.ctx[1]}set children(t){this.$$set({children:t}),i()}}function create_fragment$9(t){let n,e;return n=new TJSContainer({props:{children:t[0],warn:!0}}),{c(){f(n.$$.fragment)},m(t,i){h(n,t,i),e=!0},p:d,i(t){e||(c(n.$$.fragment,t),e=!0)},o(t){a(n.$$.fragment,t),e=!1},d(t){_(n,t)}}}function instance$9(t,n,e){let{children:i}=n;const o=K("external"),s=Array.isArray(i)?i:"object"==typeof o?o.children:void 0;return t.$$set=t=>{"children"in t&&e(1,i=t.children)},[s,i]}class TJSComponentShell extends t{constructor(t){super(),n(this,t,instance$9,create_fragment$9,e,{children:1})}get children(){return this.$$.ctx[1]}set children(t){this.$$set({children:t}),i()}}function create_fragment$8(t){let n,e,i,o,r,l;const d=t[17].default,f=y(d,t,t[16],null);return{c(){n=u("div"),f&&f.c(),$(n,"id",t[4]),$(n,"tabindex","0"),$(n,"class","tjs-glass-pane svelte-71db55")},m(e,i){s(e,n,i),f&&f.m(n,null),t[18](n),o=!0,r||(l=O(n,"keydown",t[6]),r=!0)},p(e,[i]){t=e,f&&f.p&&(!o||65536&i)&&x(f,d,t,t[16],o?k(d,t[16],i,null):v(t[16]),null),(!o||16&i)&&$(n,"id",t[4])},i(s){o||(c(f,s),w((()=>{i&&i.end(1),e=C(n,t[0],t[2]),e.start()})),o=!0)},o(s){a(f,s),e&&e.invalidate(),i=j(n,t[1],t[3]),o=!1},d(e){e&&p(n),f&&f.d(e),t[18](null),e&&i&&i.end(),r=!1,l()}}}function instance$8(t,n,e){let i,o,s,{$$slots:r={},$$scope:a}=n,{id:l}=n,{zIndex:c=Number.MAX_SAFE_INTEGER}=n,{background:p="#50505080"}=n,{captureInput:u=!0}=n,{preventDefault:$=!0}=n,{stopPropagation:d=!0}=n,{transition:f}=n,{inTransition:h=tt}=n,{outTransition:g=tt}=n,{transitionOptions:m}=n,{inTransitionOptions:_=nt}=n,{outTransitionOptions:b=nt}=n;return t.$$set=t=>{"id"in t&&e(4,l=t.id),"zIndex"in t&&e(7,c=t.zIndex),"background"in t&&e(8,p=t.background),"captureInput"in t&&e(9,u=t.captureInput),"preventDefault"in t&&e(10,$=t.preventDefault),"stopPropagation"in t&&e(11,d=t.stopPropagation),"transition"in t&&e(12,f=t.transition),"inTransition"in t&&e(0,h=t.inTransition),"outTransition"in t&&e(1,g=t.outTransition),"transitionOptions"in t&&e(13,m=t.transitionOptions),"inTransitionOptions"in t&&e(2,_=t.inTransitionOptions),"outTransitionOptions"in t&&e(3,b=t.outTransitionOptions),"$$scope"in t&&e(16,a=t.$$scope)},t.$$.update=()=>{if(32&t.$$.dirty&&i&&(e(5,i.style.maxWidth="100%",i),e(5,i.style.maxHeight="100%",i),e(5,i.style.width="100%",i),e(5,i.style.height="100%",i)),544&t.$$.dirty&&i&&(u&&i.focus(),e(5,i.style.pointerEvents=u?"auto":"none",i)),288&t.$$.dirty&&i&&e(5,i.style.background=p,i),160&t.$$.dirty&&i&&e(5,i.style.zIndex=c,i),20480&t.$$.dirty&&o!==f){const t=tt!==f&&"function"==typeof f?f:tt;e(0,h=t),e(1,g=t),e(14,o=t)}if(40960&t.$$.dirty&&s!==m){const t=m!==nt&&"object"==typeof m?m:nt;e(2,_=t),e(3,b=t),e(15,s=t)}1&t.$$.dirty&&"function"!=typeof h&&e(0,h=tt),2&t.$$.dirty&&"function"!=typeof g&&e(1,g=tt),4&t.$$.dirty&&"object"!=typeof _&&e(2,_=nt),8&t.$$.dirty&&"object"!=typeof b&&e(3,b=nt)},[h,g,_,b,l,i,function(t){u&&($&&t.preventDefault(),d&&t.stopPropagation())},c,p,u,$,d,f,m,o,s,a,r,function(t){z[t?"unshift":"push"]((()=>{i=t,e(5,i),e(9,u),e(8,p),e(7,c)}))}]}class TJSGlassPane extends t{constructor(t){super(),n(this,t,instance$8,create_fragment$8,e,{id:4,zIndex:7,background:8,captureInput:9,preventDefault:10,stopPropagation:11,transition:12,inTransition:0,outTransition:1,transitionOptions:13,inTransitionOptions:2,outTransitionOptions:3})}get id(){return this.$$.ctx[4]}set id(t){this.$$set({id:t}),i()}get zIndex(){return this.$$.ctx[7]}set zIndex(t){this.$$set({zIndex:t}),i()}get background(){return this.$$.ctx[8]}set background(t){this.$$set({background:t}),i()}get captureInput(){return this.$$.ctx[9]}set captureInput(t){this.$$set({captureInput:t}),i()}get preventDefault(){return this.$$.ctx[10]}set preventDefault(t){this.$$set({preventDefault:t}),i()}get stopPropagation(){return this.$$.ctx[11]}set stopPropagation(t){this.$$set({stopPropagation:t}),i()}get transition(){return this.$$.ctx[12]}set transition(t){this.$$set({transition:t}),i()}get inTransition(){return this.$$.ctx[0]}set inTransition(t){this.$$set({inTransition:t}),i()}get outTransition(){return this.$$.ctx[1]}set outTransition(t){this.$$set({outTransition:t}),i()}get transitionOptions(){return this.$$.ctx[13]}set transitionOptions(t){this.$$set({transitionOptions:t}),i()}get inTransitionOptions(){return this.$$.ctx[2]}set inTransitionOptions(t){this.$$set({inTransitionOptions:t}),i()}get outTransitionOptions(){return this.$$.ctx[3]}set outTransitionOptions(t){this.$$set({outTransitionOptions:t}),i()}}function create_fragment$7(t){let n,e,i,o,r,a,l,c,f=ot(t[0].label)+"";return{c(){n=u("a"),e=u("i"),r=A(f),$(e,"class",i=t[0].icon),$(e,"title",o=ot(t[0].title)),$(n,"class",a="header-button "+t[0].class)},m(i,o){s(i,n,o),R(n,e),R(n,r),l||(c=O(n,"click",t[1]),l=!0)},p(t,[s]){1&s&&i!==(i=t[0].icon)&&$(e,"class",i),1&s&&o!==(o=ot(t[0].title))&&$(e,"title",o),1&s&&f!==(f=ot(t[0].label)+"")&&I(r,f),1&s&&a!==(a="header-button "+t[0].class)&&$(n,"class",a)},i:d,o:d,d(t){t&&p(n),l=!1,c()}}}function instance$7(t,n,e){let{button:i}=n;return t.$$set=t=>{"button"in t&&e(0,i=t.button)},[i,function(){"function"==typeof i.onclick&&(i.onclick.call(i),e(0,i))}]}class TJSHeaderButton extends t{constructor(t){super(),n(this,t,instance$7,create_fragment$7,e,{button:0})}get button(){return this.$$.ctx[0]}set button(t){this.$$set({button:t}),i()}}function get_each_context$2(t,n,e){const i=t.slice();return i[12]=n[e],i}function create_each_block$2(t){let n,e;return n=new TJSHeaderButton({props:{button:t[12]}}),{c(){f(n.$$.fragment)},m(t,i){h(n,t,i),e=!0},p(t,e){const i={};8&e&&(i.button=t[12]),n.$set(i)},i(t){e||(c(n.$$.fragment,t),e=!0)},o(t){a(n.$$.fragment,t),e=!1},d(t){_(n,t)}}}function create_fragment$6(t){let n,e,i,o,d,f,h,g,m,_=ot(t[2])+"",T=t[3],y=[];for(let n=0;n<T.length;n+=1)y[n]=create_each_block$2(get_each_context$2(t,T,n));const out=t=>a(y[t],1,1,(()=>{y[t]=null}));return{c(){n=u("header"),e=u("h4"),i=A(_),o=S();for(let t=0;t<y.length;t+=1)y[t].c();$(e,"class","window-title"),$(n,"class","window-header flexrow")},m(r,a){s(r,n,a),R(n,e),R(e,i),R(n,o);for(let t=0;t<y.length;t+=1)y[t].m(n,null);h=!0,g||(m=[O(n,"pointerdown",t[5]),E(d=it.call(null,n,{positionable:t[4],booleanStore:t[0]})),E(f=t[10].call(null,n,t[1]))],g=!0)},p(t,[e]){if((!h||4&e)&&_!==(_=ot(t[2])+"")&&I(i,_),8&e){let i;for(T=t[3],i=0;i<T.length;i+=1){const o=get_each_context$2(t,T,i);y[i]?(y[i].p(o,e),c(y[i],1)):(y[i]=create_each_block$2(o),y[i].c(),c(y[i],1),y[i].m(n,null))}for(r(),i=T.length;i<y.length;i+=1)out(i);l()}d&&J(d.update)&&1&e&&d.update.call(null,{positionable:t[4],booleanStore:t[0]}),f&&J(f.update)&&2&e&&f.update.call(null,t[1])},i(t){if(!h){for(let t=0;t<T.length;t+=1)c(y[t]);h=!0}},o(t){y=y.filter(Boolean);for(let t=0;t<y.length;t+=1)a(y[t]);h=!1},d(t){t&&p(n),b(y,t),g=!1,H(m)}}}function instance$6(t,n,e){let i,o,s,r;const a=K("external"),l=a.foundryApp,c=a.storeAppOptions.title;L(t,c,(t=>e(2,s=t)));const p=a.storeAppOptions.draggable;L(t,p,(t=>e(0,i=t)));const u=a.storeUIOptions.headerButtons;L(t,u,(t=>e(3,r=t)));const $=a.storeAppOptions.minimizable;return L(t,$,(t=>e(1,o=t))),[i,o,s,r,l,()=>{"boolean"==typeof l.options.popOut&&l.options.popOut&&l.bringToTop.call(l)},c,p,u,$,function(t,n){const e=l._onToggleMinimize.bind(l);function activateListeners(){t.addEventListener("dblclick",e)}function removeListeners(){t.removeEventListener("dblclick",e)}return n&&activateListeners(),{update:t=>{t?activateListeners():removeListeners()},destroy:()=>removeListeners()}}]}class TJSApplicationHeader extends t{constructor(t){super(),n(this,t,instance$6,create_fragment$6,e,{})}}function create_fragment$5(t){let n,e,i,o;return{c(){n=u("div"),n.innerHTML='<i class="fas fa-arrows-alt-h"></i>',$(n,"class","window-resizable-handle")},m(r,a){s(r,n,a),t[7](n),i||(o=E(e=t[4].call(null,n,t[1])),i=!0)},p(t,[n]){e&&J(e.update)&&2&n&&e.update.call(null,t[1])},i:d,o:d,d(e){e&&p(n),t[7](null),i=!1,o()}}}function instance$5(t,n,e){let i,o,{isResizable:s=!1}=n;const r=K("external"),a=K("getElementRoot"),l=r.foundryApp,c=r.storeAppOptions.resizable;L(t,c,(t=>e(1,o=t)));const p=r.storeUIOptions.minimized;let u;return L(t,p,(t=>e(6,i=t))),t.$$set=t=>{"isResizable"in t&&e(5,s=t.isResizable)},t.$$.update=()=>{if(97&t.$$.dirty&&u){e(0,u.style.display=s&&!i?"block":"none",u);const t=a();t&&t.classList[s?"add":"remove"]("resizable")}},[u,o,c,p,function(t,n){let i=null,o={},r=0,c=n;const p={resizeDown:["pointerdown",t=>function(t){t.preventDefault();const n=Date.now();n-r<1e3/60||(r=n,i=foundry.utils.duplicate(l.position),"auto"===i.height&&(i.height=a().clientHeight),"auto"===i.width&&(i.width=a().clientWidth),o={x:t.clientX,y:t.clientY},globalThis.addEventListener(...p.resizeMove),globalThis.addEventListener(...p.resizeUp))}(t),!1],resizeMove:["pointermove",t=>{return(n=t).preventDefault(),void(c&&l.setPosition({width:i.width+(n.clientX-o.x),height:i.height+(n.clientY-o.y)}));var n},!1],resizeUp:["pointerup",t=>{return(n=t).preventDefault(),globalThis.removeEventListener(...p.resizeMove),globalThis.removeEventListener(...p.resizeUp),void l._onResize(n);var n},!1]};function activateListeners(){c=!0,t.addEventListener(...p.resizeDown),e(5,s=!0),t.style.display="block"}function removeListeners(){c=!1,t.removeEventListener(...p.resizeDown),t.removeEventListener(...p.resizeMove),t.removeEventListener(...p.resizeUp),t.style.display="none",e(5,s=!1)}return c?activateListeners():t.style.display="none",{update:t=>{t?activateListeners():removeListeners()},destroy:()=>removeListeners()}},s,i,function(t){z[t?"unshift":"push"]((()=>{u=t,e(0,u),e(5,s),e(6,i)}))}]}class ResizableHandle extends t{constructor(t){super(),n(this,t,instance$5,create_fragment$5,e,{isResizable:5})}}function create_else_block_1$1(t){let n,e,i,o,r,l,d,g,m,b,T,y,O,x;e=new TJSApplicationHeader({});const v=[create_if_block_2$1,create_else_block_2$1],k=[];return r=function(t,n){return Array.isArray(t[9])?0:1}(t),l=k[r]=v[r](t),g=new ResizableHandle({}),{c(){n=u("div"),f(e.$$.fragment),i=S(),o=u("section"),l.c(),d=S(),f(g.$$.fragment),$(o,"class","window-content"),$(n,"id",m=t[7].id),$(n,"class",b="app window-app "+t[7].options.classes.join(" ")+" svelte-3vt5in"),$(n,"data-appid",T=t[7].appId)},m(a,l){s(a,n,l),h(e,n,null),R(n,i),R(n,o),k[r].m(o,null),t[21](o),R(n,d),h(g,n,null),t[22](n),x=!0},p(e,i){t=e,l.p(t,i),(!x||128&i&&m!==(m=t[7].id))&&$(n,"id",m),(!x||128&i&&b!==(b="app window-app "+t[7].options.classes.join(" ")+" svelte-3vt5in"))&&$(n,"class",b),(!x||128&i&&T!==(T=t[7].appId))&&$(n,"data-appid",T)},i(i){x||(c(e.$$.fragment,i),c(l),c(g.$$.fragment,i),w((()=>{O&&O.end(1),y=C(n,t[0],t[2]),y.start()})),x=!0)},o(i){a(e.$$.fragment,i),a(l),a(g.$$.fragment,i),y&&y.invalidate(),O=j(n,t[1],t[3]),x=!1},d(i){i&&p(n),_(e),k[r].d(),t[21](null),_(g),t[22](null),i&&O&&O.end()}}}function create_if_block$3(t){let n,e,i,o,r,l,d,g,m,b,T,y,O,x,v,k;e=new TJSApplicationHeader({});const z=[create_if_block_1$2,create_else_block$2],A=[];return r=function(t,n){return Array.isArray(t[9])?0:1}(t),l=A[r]=z[r](t),m=new ResizableHandle({}),{c(){n=u("div"),f(e.$$.fragment),i=S(),o=u("section"),l.c(),g=S(),f(m.$$.fragment),$(o,"class","window-content"),w((()=>t[18].call(o))),$(n,"id",b=t[7].id),$(n,"class",T="app window-app "+t[7].options.classes.join(" ")+" svelte-3vt5in"),$(n,"data-appid",y=t[7].appId),w((()=>t[19].call(n)))},m(a,l){s(a,n,l),h(e,n,null),R(n,i),R(n,o),A[r].m(o,null),t[17](o),d=D(o,t[18].bind(o)),R(n,g),h(m,n,null),O=D(n,t[19].bind(n)),t[20](n),k=!0},p(e,i){t=e,l.p(t,i),(!k||128&i&&b!==(b=t[7].id))&&$(n,"id",b),(!k||128&i&&T!==(T="app window-app "+t[7].options.classes.join(" ")+" svelte-3vt5in"))&&$(n,"class",T),(!k||128&i&&y!==(y=t[7].appId))&&$(n,"data-appid",y)},i(i){k||(c(e.$$.fragment,i),c(l),c(m.$$.fragment,i),w((()=>{v&&v.end(1),x=C(n,t[0],t[2]),x.start()})),k=!0)},o(i){a(e.$$.fragment,i),a(l),a(m.$$.fragment,i),x&&x.invalidate(),v=j(n,t[1],t[3]),k=!1},d(i){i&&p(n),_(e),A[r].d(),t[17](null),d(),_(m),O(),t[20](null),i&&v&&v.end()}}}function create_else_block_2$1(t){let n;const e=t[16].default,i=y(e,t,t[15],null);return{c(){i&&i.c()},m(t,e){i&&i.m(t,e),n=!0},p(t,o){i&&i.p&&(!n||32768&o)&&x(i,e,t,t[15],n?k(e,t[15],o,null):v(t[15]),null)},i(t){n||(c(i,t),n=!0)},o(t){a(i,t),n=!1},d(t){i&&i.d(t)}}}function create_if_block_2$1(t){let n,e;return n=new TJSContainer({props:{children:t[9]}}),{c(){f(n.$$.fragment)},m(t,i){h(n,t,i),e=!0},p:d,i(t){e||(c(n.$$.fragment,t),e=!0)},o(t){a(n.$$.fragment,t),e=!1},d(t){_(n,t)}}}function create_else_block$2(t){let n;const e=t[16].default,i=y(e,t,t[15],null);return{c(){i&&i.c()},m(t,e){i&&i.m(t,e),n=!0},p(t,o){i&&i.p&&(!n||32768&o)&&x(i,e,t,t[15],n?k(e,t[15],o,null):v(t[15]),null)},i(t){n||(c(i,t),n=!0)},o(t){a(i,t),n=!1},d(t){i&&i.d(t)}}}function create_if_block_1$2(t){let n,e;return n=new TJSContainer({props:{children:t[9]}}),{c(){f(n.$$.fragment)},m(t,i){h(n,t,i),e=!0},p:d,i(t){e||(c(n.$$.fragment,t),e=!0)},o(t){a(n.$$.fragment,t),e=!1},d(t){_(n,t)}}}function create_fragment$4(t){let n,e,i,r;const l=[create_if_block$3,create_else_block_1$1],u=[];return n=function(t,n){return t[8]?0:1}(t),e=u[n]=l[n](t),{c(){e.c(),i=o()},m(t,e){u[n].m(t,e),s(t,i,e),r=!0},p(t,[n]){e.p(t,n)},i(t){r||(c(e),r=!0)},o(t){a(e),r=!1},d(t){u[n].d(t),t&&p(i)}}}function instance$4(t,n,e){let{$$slots:i={},$$scope:o}=n,{elementContent:s}=n,{elementRoot:r}=n,{children:a}=n,{heightChanged:l=!1}=n;const c=!!l;V("getElementContent",(()=>s)),V("getElementRoot",(()=>r));const p=K("external"),u=p.foundryApp,$=Array.isArray(a)?a:"object"==typeof p?p.children:void 0;let d,f,{transition:h}=n,{inTransition:g=tt}=n,{outTransition:m=tt}=n,{transitionOptions:_}=n,{inTransitionOptions:b=nt}=n,{outTransitionOptions:T=nt}=n;return t.$$set=t=>{"elementContent"in t&&e(4,s=t.elementContent),"elementRoot"in t&&e(5,r=t.elementRoot),"children"in t&&e(10,a=t.children),"heightChanged"in t&&e(6,l=t.heightChanged),"transition"in t&&e(11,h=t.transition),"inTransition"in t&&e(0,g=t.inTransition),"outTransition"in t&&e(1,m=t.outTransition),"transitionOptions"in t&&e(12,_=t.transitionOptions),"inTransitionOptions"in t&&e(2,b=t.inTransitionOptions),"outTransitionOptions"in t&&e(3,T=t.outTransitionOptions),"$$scope"in t&&e(15,o=t.$$scope)},t.$$.update=()=>{if(10240&t.$$.dirty&&d!==h){const t=tt!==h&&"function"==typeof h?h:tt;e(0,g=t),e(1,m=t),e(13,d=t)}if(20480&t.$$.dirty&&f!==_){const t=_!==nt&&"object"==typeof _?_:nt;e(2,b=t),e(3,T=t),e(14,f=t)}1&t.$$.dirty&&"function"!=typeof g&&e(0,g=tt),130&t.$$.dirty&&("function"!=typeof m&&e(1,m=tt),u&&"boolean"==typeof u?.options?.jqueryCloseAnimation&&e(7,u.options.jqueryCloseAnimation=m===tt,u)),4&t.$$.dirty&&"object"!=typeof b&&e(2,b=nt),8&t.$$.dirty&&"object"!=typeof T&&e(3,T=nt)},[g,m,b,T,s,r,l,u,c,$,a,h,_,d,f,o,i,function(t){z[t?"unshift":"push"]((()=>{s=t,e(4,s)}))},function(){l=this.clientHeight,e(6,l)},function(){l=this.clientHeight,e(6,l)},function(t){z[t?"unshift":"push"]((()=>{r=t,e(5,r)}))},function(t){z[t?"unshift":"push"]((()=>{s=t,e(4,s)}))},function(t){z[t?"unshift":"push"]((()=>{r=t,e(5,r)}))}]}class ApplicationShell extends t{constructor(t){super(),n(this,t,instance$4,create_fragment$4,e,{elementContent:4,elementRoot:5,children:10,heightChanged:6,transition:11,inTransition:0,outTransition:1,transitionOptions:12,inTransitionOptions:2,outTransitionOptions:3})}get elementContent(){return this.$$.ctx[4]}set elementContent(t){this.$$set({elementContent:t}),i()}get elementRoot(){return this.$$.ctx[5]}set elementRoot(t){this.$$set({elementRoot:t}),i()}get children(){return this.$$.ctx[10]}set children(t){this.$$set({children:t}),i()}get heightChanged(){return this.$$.ctx[6]}set heightChanged(t){this.$$set({heightChanged:t}),i()}get transition(){return this.$$.ctx[11]}set transition(t){this.$$set({transition:t}),i()}get inTransition(){return this.$$.ctx[0]}set inTransition(t){this.$$set({inTransition:t}),i()}get outTransition(){return this.$$.ctx[1]}set outTransition(t){this.$$set({outTransition:t}),i()}get transitionOptions(){return this.$$.ctx[12]}set transitionOptions(t){this.$$set({transitionOptions:t}),i()}get inTransitionOptions(){return this.$$.ctx[2]}set inTransitionOptions(t){this.$$set({inTransitionOptions:t}),i()}get outTransitionOptions(){return this.$$.ctx[3]}set outTransitionOptions(t){this.$$set({outTransitionOptions:t}),i()}}function create_else_block_1(t){let n,e,i,o,r,l,d,g,m,b,T,y,O,x;e=new TJSApplicationHeader({});const v=[create_if_block_2,create_else_block_2],k=[];return r=function(t,n){return Array.isArray(t[9])?0:1}(t),l=k[r]=v[r](t),g=new ResizableHandle({}),{c(){n=u("div"),f(e.$$.fragment),i=S(),o=u("section"),l.c(),d=S(),f(g.$$.fragment),$(o,"class","window-content"),$(n,"id",m=t[7].id),$(n,"class",b="tjs-app tjs-window-app "+t[7].options.classes.join(" ")),$(n,"data-appid",T=t[7].appId)},m(a,l){s(a,n,l),h(e,n,null),R(n,i),R(n,o),k[r].m(o,null),t[21](o),R(n,d),h(g,n,null),t[22](n),x=!0},p(e,i){t=e,l.p(t,i),(!x||128&i&&m!==(m=t[7].id))&&$(n,"id",m),(!x||128&i&&b!==(b="tjs-app tjs-window-app "+t[7].options.classes.join(" ")))&&$(n,"class",b),(!x||128&i&&T!==(T=t[7].appId))&&$(n,"data-appid",T)},i(i){x||(c(e.$$.fragment,i),c(l),c(g.$$.fragment,i),w((()=>{O&&O.end(1),y=C(n,t[0],t[2]),y.start()})),x=!0)},o(i){a(e.$$.fragment,i),a(l),a(g.$$.fragment,i),y&&y.invalidate(),O=j(n,t[1],t[3]),x=!1},d(i){i&&p(n),_(e),k[r].d(),t[21](null),_(g),t[22](null),i&&O&&O.end()}}}function create_if_block$2(t){let n,e,i,o,r,l,d,g,m,b,T,y,O,x,v,k;e=new TJSApplicationHeader({});const z=[create_if_block_1$1,create_else_block$1],A=[];return r=function(t,n){return Array.isArray(t[9])?0:1}(t),l=A[r]=z[r](t),m=new ResizableHandle({}),{c(){n=u("div"),f(e.$$.fragment),i=S(),o=u("section"),l.c(),g=S(),f(m.$$.fragment),$(o,"class","window-content"),w((()=>t[18].call(o))),$(n,"id",b=t[7].id),$(n,"class",T="tjs-app tjs-window-app "+t[7].options.classes.join(" ")),$(n,"data-appid",y=t[7].appId),w((()=>t[19].call(n)))},m(a,l){s(a,n,l),h(e,n,null),R(n,i),R(n,o),A[r].m(o,null),t[17](o),d=D(o,t[18].bind(o)),R(n,g),h(m,n,null),O=D(n,t[19].bind(n)),t[20](n),k=!0},p(e,i){t=e,l.p(t,i),(!k||128&i&&b!==(b=t[7].id))&&$(n,"id",b),(!k||128&i&&T!==(T="tjs-app tjs-window-app "+t[7].options.classes.join(" ")))&&$(n,"class",T),(!k||128&i&&y!==(y=t[7].appId))&&$(n,"data-appid",y)},i(i){k||(c(e.$$.fragment,i),c(l),c(m.$$.fragment,i),w((()=>{v&&v.end(1),x=C(n,t[0],t[2]),x.start()})),k=!0)},o(i){a(e.$$.fragment,i),a(l),a(m.$$.fragment,i),x&&x.invalidate(),v=j(n,t[1],t[3]),k=!1},d(i){i&&p(n),_(e),A[r].d(),t[17](null),d(),_(m),O(),t[20](null),i&&v&&v.end()}}}function create_else_block_2(t){let n;const e=t[16].default,i=y(e,t,t[15],null);return{c(){i&&i.c()},m(t,e){i&&i.m(t,e),n=!0},p(t,o){i&&i.p&&(!n||32768&o)&&x(i,e,t,t[15],n?k(e,t[15],o,null):v(t[15]),null)},i(t){n||(c(i,t),n=!0)},o(t){a(i,t),n=!1},d(t){i&&i.d(t)}}}function create_if_block_2(t){let n,e;return n=new TJSContainer({props:{children:t[9]}}),{c(){f(n.$$.fragment)},m(t,i){h(n,t,i),e=!0},p:d,i(t){e||(c(n.$$.fragment,t),e=!0)},o(t){a(n.$$.fragment,t),e=!1},d(t){_(n,t)}}}function create_else_block$1(t){let n;const e=t[16].default,i=y(e,t,t[15],null);return{c(){i&&i.c()},m(t,e){i&&i.m(t,e),n=!0},p(t,o){i&&i.p&&(!n||32768&o)&&x(i,e,t,t[15],n?k(e,t[15],o,null):v(t[15]),null)},i(t){n||(c(i,t),n=!0)},o(t){a(i,t),n=!1},d(t){i&&i.d(t)}}}function create_if_block_1$1(t){let n,e;return n=new TJSContainer({props:{children:t[9]}}),{c(){f(n.$$.fragment)},m(t,i){h(n,t,i),e=!0},p:d,i(t){e||(c(n.$$.fragment,t),e=!0)},o(t){a(n.$$.fragment,t),e=!1},d(t){_(n,t)}}}function create_fragment$3(t){let n,e,i,r;const l=[create_if_block$2,create_else_block_1],u=[];return n=function(t,n){return t[8]?0:1}(t),e=u[n]=l[n](t),{c(){e.c(),i=o()},m(t,e){u[n].m(t,e),s(t,i,e),r=!0},p(t,[n]){e.p(t,n)},i(t){r||(c(e),r=!0)},o(t){a(e),r=!1},d(t){u[n].d(t),t&&p(i)}}}function instance$3(t,n,e){let{$$slots:i={},$$scope:o}=n,{elementContent:s}=n,{elementRoot:r}=n,{children:a}=n,{heightChanged:l=!1}=n;const c=!!l;V("getElementContent",(()=>s)),V("getElementRoot",(()=>r));const p=K("external"),u=p.foundryApp,$=Array.isArray(a)?a:"object"==typeof p?p.children:void 0;let d,f,{transition:h}=n,{inTransition:g=tt}=n,{outTransition:m=tt}=n,{transitionOptions:_}=n,{inTransitionOptions:b=nt}=n,{outTransitionOptions:T=nt}=n;return t.$$set=t=>{"elementContent"in t&&e(4,s=t.elementContent),"elementRoot"in t&&e(5,r=t.elementRoot),"children"in t&&e(10,a=t.children),"heightChanged"in t&&e(6,l=t.heightChanged),"transition"in t&&e(11,h=t.transition),"inTransition"in t&&e(0,g=t.inTransition),"outTransition"in t&&e(1,m=t.outTransition),"transitionOptions"in t&&e(12,_=t.transitionOptions),"inTransitionOptions"in t&&e(2,b=t.inTransitionOptions),"outTransitionOptions"in t&&e(3,T=t.outTransitionOptions),"$$scope"in t&&e(15,o=t.$$scope)},t.$$.update=()=>{if(10240&t.$$.dirty&&d!==h){const t=tt!==h&&"function"==typeof h?h:tt;e(0,g=t),e(1,m=t),e(13,d=t)}if(20480&t.$$.dirty&&f!==_){const t=_!==nt&&"object"==typeof _?_:nt;e(2,b=t),e(3,T=t),e(14,f=t)}1&t.$$.dirty&&"function"!=typeof g&&e(0,g=tt),130&t.$$.dirty&&("function"!=typeof m&&e(1,m=tt),u&&"boolean"==typeof u?.options?.jqueryCloseAnimation&&e(7,u.options.jqueryCloseAnimation=m===tt,u)),4&t.$$.dirty&&"object"!=typeof b&&e(2,b=nt),8&t.$$.dirty&&"object"!=typeof T&&e(3,T=nt)},[g,m,b,T,s,r,l,u,c,$,a,h,_,d,f,o,i,function(t){z[t?"unshift":"push"]((()=>{s=t,e(4,s)}))},function(){l=this.clientHeight,e(6,l)},function(){l=this.clientHeight,e(6,l)},function(t){z[t?"unshift":"push"]((()=>{r=t,e(5,r)}))},function(t){z[t?"unshift":"push"]((()=>{s=t,e(4,s)}))},function(t){z[t?"unshift":"push"]((()=>{r=t,e(5,r)}))}]}class TJSApplicationShell extends t{constructor(t){super(),n(this,t,instance$3,create_fragment$3,e,{elementContent:4,elementRoot:5,children:10,heightChanged:6,transition:11,inTransition:0,outTransition:1,transitionOptions:12,inTransitionOptions:2,outTransitionOptions:3})}get elementContent(){return this.$$.ctx[4]}set elementContent(t){this.$$set({elementContent:t}),i()}get elementRoot(){return this.$$.ctx[5]}set elementRoot(t){this.$$set({elementRoot:t}),i()}get children(){return this.$$.ctx[10]}set children(t){this.$$set({children:t}),i()}get heightChanged(){return this.$$.ctx[6]}set heightChanged(t){this.$$set({heightChanged:t}),i()}get transition(){return this.$$.ctx[11]}set transition(t){this.$$set({transition:t}),i()}get inTransition(){return this.$$.ctx[0]}set inTransition(t){this.$$set({inTransition:t}),i()}get outTransition(){return this.$$.ctx[1]}set outTransition(t){this.$$set({outTransition:t}),i()}get transitionOptions(){return this.$$.ctx[12]}set transitionOptions(t){this.$$set({transitionOptions:t}),i()}get inTransitionOptions(){return this.$$.ctx[2]}set inTransitionOptions(t){this.$$set({inTransitionOptions:t}),i()}get outTransitionOptions(){return this.$$.ctx[3]}set outTransitionOptions(t){this.$$set({outTransitionOptions:t}),i()}}const{document:ct}=B;function get_each_context$1(t,n,e){const i=t.slice();return i[15]=n[e],i}function create_each_block$1(t){let n,e,i,o,r,a,l=ot(t[15].label)+"";function click_handler(){return t[10](t[15])}return{c(){n=u("li"),e=u("i"),o=A(l),$(e,"class",i=M(t[15].icon)+" svelte-thdn97"),$(n,"class","tjs-context-item svelte-thdn97")},m(t,i){s(t,n,i),R(n,e),R(n,o),r||(a=O(n,"click",click_handler),r=!0)},p(n,s){t=n,2&s&&i!==(i=M(t[15].icon)+" svelte-thdn97")&&$(e,"class",i),2&s&&l!==(l=ot(t[15].label)+"")&&I(o,l)},d(t){t&&p(n),r=!1,a()}}}function create_fragment$2(t){let n,e,i,o,r,a,l,c=t[1],d=[];for(let n=0;n<c.length;n+=1)d[n]=create_each_block$1(get_each_context$1(t,c,n));return{c(){n=S(),e=u("nav"),i=u("ol");for(let t=0;t<d.length;t+=1)d[t].c();$(i,"class","tjs-context-items svelte-thdn97"),$(e,"id",t[0]),$(e,"class","tjs-context-menu svelte-thdn97"),N(e,"z-index",t[2])},m(o,c){s(o,n,c),s(o,e,c),R(e,i);for(let t=0;t<d.length;t+=1)d[t].m(i,null);t[11](e),r=!0,a||(l=O(ct.body,"pointerdown",t[6]),a=!0)},p(t,[n]){if(34&n){let e;for(c=t[1],e=0;e<c.length;e+=1){const o=get_each_context$1(t,c,e);d[e]?d[e].p(o,n):(d[e]=create_each_block$1(o),d[e].c(),d[e].m(i,null))}for(;e<d.length;e+=1)d[e].d(1);d.length=c.length}(!r||1&n)&&$(e,"id",t[0]),(!r||4&n)&&N(e,"z-index",t[2])},i(n){r||(w((()=>{o||(o=P(e,t[4],{},!0)),o.run(1)})),r=!0)},o(n){o||(o=P(e,t[4],{},!1)),o.run(0),r=!1},d(i){i&&p(n),i&&p(e),b(d,i),t[11](null),i&&o&&o.end(),a=!1,l()}}}function instance$2(t,n,e){let i,{id:o=""}=n,{x:s=0}=n,{y:r=0}=n,{items:a=[]}=n,{zIndex:l=1e4}=n,{transitionOptions:c}=n;const p=G,u=Z();let $=!1;function onClick(t){"function"==typeof t&&t(),$||(u("close"),$=!0,st(p))}return t.$$set=t=>{"id"in t&&e(0,o=t.id),"x"in t&&e(7,s=t.x),"y"in t&&e(8,r=t.y),"items"in t&&e(1,a=t.items),"zIndex"in t&&e(2,l=t.zIndex),"transitionOptions"in t&&e(9,c=t.transitionOptions)},[o,a,l,i,function(t){const n=r+t.clientHeight>document.body.clientHeight,e=s+t.clientWidth>document.body.clientWidth;return t.style.top=n?null:`${r}px`,t.style.bottom=n?document.body.clientHeight-r+"px":null,t.style.left=e?null:`${s}px`,t.style.right=e?document.body.clientWidth-s+"px":null,et(t,c)},onClick,async function(t){t.target===i||i.contains(t.target)||Math.floor(t.pageX)===s&&Math.floor(t.pageY)===r||$||(u("close"),$=!0,st(p))},s,r,c,t=>onClick(t.onclick),function(t){z[t?"unshift":"push"]((()=>{i=t,e(3,i)}))}]}class TJSContextMenu extends t{constructor(t){super(),n(this,t,instance$2,create_fragment$2,e,{id:0,x:7,y:8,items:1,zIndex:2,transitionOptions:9})}}function get_each_context(t,n,e){const i=t.slice();return i[9]=n[e],i}function create_if_block_1(t){let n,e,i;const u=[t[3]];var $=t[2];function switch_props(t){let n={};for(let t=0;t<u.length;t+=1)n=T(n,u[t]);return{props:n}}return $&&(n=new $(switch_props())),{c(){n&&f(n.$$.fragment),e=o()},m(t,o){n&&h(n,t,o),s(t,e,o),i=!0},p(t,i){const o=8&i?g(u,[m(t[3])]):{};if($!==($=t[2])){if(n){r();const t=n;a(t.$$.fragment,1,0,(()=>{_(t,1)})),l()}$?(n=new $(switch_props()),f(n.$$.fragment),c(n.$$.fragment,1),h(n,e.parentNode,e)):n=null}else $&&n.$set(o)},i(t){i||(n&&c(n.$$.fragment,t),i=!0)},o(t){n&&a(n.$$.fragment,t),i=!1},d(t){t&&p(e),n&&_(n,t)}}}function create_if_block$1(t){let n,e;return{c(){n=new U,e=o(),n.a=e},m(i,o){n.m(t[0],i,o),s(i,e,o)},p(t,e){1&e&&n.p(t[0])},i:d,o:d,d(t){t&&p(e),t&&n.d()}}}function create_each_block(t,n){let e,i,o,r,a,l,c,d,f=n[9].icon+"",h=n[9].label+"";function click_handler(){return n[7](n[9])}return{key:t,first:null,c(){e=u("button"),i=new U,o=S(),r=new U,a=S(),i.a=o,r.a=a,$(e,"class",l="dialog-button "+n[9].cssClass),this.first=e},m(t,n){s(t,e,n),i.m(f,e),R(e,o),r.m(h,e),R(e,a),c||(d=O(e,"click",click_handler),c=!0)},p(t,o){n=t,2&o&&f!==(f=n[9].icon+"")&&i.p(f),2&o&&h!==(h=n[9].label+"")&&r.p(h),2&o&&l!==(l="dialog-button "+n[9].cssClass)&&$(e,"class",l)},d(t){t&&p(e),c=!1,d()}}}function create_fragment$1(t){let n,e,i,o,d,f,h,g,m,_=[],b=new Map;const T=[create_if_block$1,create_if_block_1],y=[];function select_block_type(t,n){return"string"==typeof t[0]?0:t[2]?1:-1}~(i=select_block_type(t))&&(o=y[i]=T[i](t));let x=t[1];const get_key=t=>t[9].id;for(let n=0;n<x.length;n+=1){let e=get_each_context(t,x,n),i=get_key(e);b.set(i,_[n]=create_each_block(i,e))}return{c(){n=S(),e=u("div"),o&&o.c(),d=S(),f=u("div");for(let t=0;t<_.length;t+=1)_[t].c();$(e,"class","dialog-content"),$(f,"class","dialog-buttons svelte-14xg9ru")},m(o,r){s(o,n,r),s(o,e,r),~i&&y[i].m(e,null),s(o,d,r),s(o,f,r);for(let t=0;t<_.length;t+=1)_[t].m(f,null);h=!0,g||(m=O(document.body,"keydown",X(W(t[5]))),g=!0)},p(t,[n]){let s=i;i=select_block_type(t),i===s?~i&&y[i].p(t,n):(o&&(r(),a(y[s],1,1,(()=>{y[s]=null})),l()),~i?(o=y[i],o?o.p(t,n):(o=y[i]=T[i](t),o.c()),c(o,1),o.m(e,null)):o=null),18&n&&(x=t[1],_=q(_,n,get_key,1,t,x,b,f,F,create_each_block,null,get_each_context))},i(t){h||(c(o),h=!0)},o(t){a(o),h=!1},d(t){t&&p(n),t&&p(e),~i&&y[i].d(),t&&p(d),t&&p(f);for(let t=0;t<_.length;t+=1)_[t].d();g=!1,m()}}}function instance$1(t,n,e){let i,o,s,{data:r={}}=n,a={},l=K("external").foundryApp;function onClick(t){try{"function"==typeof t.callback&&t.callback(l.options.jQuery?l.element:l.element[0]),l.close()}catch(t){throw ui.notifications.error(t),new Error(t)}}return t.$$set=t=>{"data"in t&&e(6,r=t.data)},t.$$.update=()=>{if(64&t.$$.dirty&&e(1,i="object"!=typeof r.buttons?[]:Object.keys(r.buttons).reduce(((t,n)=>{const e=r.buttons[n];return!1!==e.condition&&t.push({...e,id:n,cssClass:[n,r.default===n?"default":""].filterJoin(" ")}),t}),[])),65&t.$$.dirty){e(0,o=r.content);try{if(rt(o))e(2,s=o),e(3,a={});else if("object"==typeof o){const t=at(o,l);e(2,s=t.class),e(3,a=t.props??{});const n=t?.context?.get("external")?.children;Array.isArray(n)&&e(3,a.children=n,a)}else e(2,s=void 0),e(3,a={})}catch(t){e(2,s=void 0),e(3,a={}),e(0,o=t.message),console.error(t)}}},[o,i,s,a,onClick,function(t){switch(t.key){case"Escape":return l.close();case"Enter":onClick(r.buttons[r.default])}},r,t=>onClick(t)]}class DialogContent extends t{constructor(t){super(),n(this,t,instance$1,create_fragment$1,e,{data:6})}}function create_else_block(t){let n,e,i;const o=[t[4]];function applicationshell_elementRoot_binding_1(n){t[8](n)}let s={$$slots:{default:[create_default_slot_2]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=T(s,o[t]);return void 0!==t[0]&&(s.elementRoot=t[0]),n=new ApplicationShell({props:s}),z.push((()=>Y(n,"elementRoot",applicationshell_elementRoot_binding_1))),{c(){f(n.$$.fragment)},m(t,e){h(n,t,e),i=!0},p(t,i){const s=16&i?g(o,[m(t[4])]):{};2050&i&&(s.$$scope={dirty:i,ctx:t}),!e&&1&i&&(e=!0,s.elementRoot=t[0],Q((()=>e=!1))),n.$set(s)},i(t){i||(c(n.$$.fragment,t),i=!0)},o(t){a(n.$$.fragment,t),i=!1},d(t){_(n,t)}}}function create_if_block(t){let n,e;const i=[{id:t[2].id},{stopPropagation:!1},t[5],{zIndex:t[6]}];let o={$$slots:{default:[create_default_slot]},$$scope:{ctx:t}};for(let t=0;t<i.length;t+=1)o=T(o,i[t]);return n=new TJSGlassPane({props:o}),{c(){f(n.$$.fragment)},m(t,i){h(n,t,i),e=!0},p(t,e){const o=100&e?g(i,[4&e&&{id:t[2].id},i[1],32&e&&m(t[5]),64&e&&{zIndex:t[6]}]):{};2067&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(c(n.$$.fragment,t),e=!0)},o(t){a(n.$$.fragment,t),e=!1},d(t){_(n,t)}}}function create_default_slot_2(t){let n,e;return n=new DialogContent({props:{data:t[1]}}),{c(){f(n.$$.fragment)},m(t,i){h(n,t,i),e=!0},p(t,e){const i={};2&e&&(i.data=t[1]),n.$set(i)},i(t){e||(c(n.$$.fragment,t),e=!0)},o(t){a(n.$$.fragment,t),e=!1},d(t){_(n,t)}}}function create_default_slot_1(t){let n,e;return n=new DialogContent({props:{data:t[1]}}),{c(){f(n.$$.fragment)},m(t,i){h(n,t,i),e=!0},p(t,e){const i={};2&e&&(i.data=t[1]),n.$set(i)},i(t){e||(c(n.$$.fragment,t),e=!0)},o(t){a(n.$$.fragment,t),e=!1},d(t){_(n,t)}}}function create_default_slot(t){let n,e,i;const o=[t[4]];function applicationshell_elementRoot_binding(n){t[7](n)}let s={$$slots:{default:[create_default_slot_1]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=T(s,o[t]);return void 0!==t[0]&&(s.elementRoot=t[0]),n=new ApplicationShell({props:s}),z.push((()=>Y(n,"elementRoot",applicationshell_elementRoot_binding))),{c(){f(n.$$.fragment)},m(t,e){h(n,t,e),i=!0},p(t,i){const s=16&i?g(o,[m(t[4])]):{};2050&i&&(s.$$scope={dirty:i,ctx:t}),!e&&1&i&&(e=!0,s.elementRoot=t[0],Q((()=>e=!1))),n.$set(s)},i(t){i||(c(n.$$.fragment,t),i=!0)},o(t){a(n.$$.fragment,t),i=!1},d(t){_(n,t)}}}function create_fragment(t){let n,e,i,u;const $=[create_if_block,create_else_block],d=[];function select_block_type(t,n){return t[3]?0:1}return n=select_block_type(t),e=d[n]=$[n](t),{c(){e.c(),i=o()},m(t,e){d[n].m(t,e),s(t,i,e),u=!0},p(t,[o]){let s=n;n=select_block_type(t),n===s?d[n].p(t,o):(r(),a(d[s],1,1,(()=>{d[s]=null})),l(),e=d[n],e?e.p(t,o):(e=d[n]=$[n](t),e.c()),c(e,1),e.m(i.parentNode,i))},i(t){u||(c(e),u=!0)},o(t){a(e),u=!1},d(t){d[n].d(t),t&&p(i)}}}function instance(t,n,e){let{elementRoot:i}=n,{data:o={}}=n;const s=K("external").foundryApp,r=lt,a={duration:200};let l;const c={transition:void 0,inTransition:void 0,outTransition:void 0,transitionOptions:void 0,inTransitionOptions:void 0,outTransitionOptions:void 0},p={background:void 0,transition:void 0,inTransition:void 0,outTransition:void 0,transitionOptions:void 0,inTransitionOptions:void 0,outTransitionOptions:void 0};let u;return void 0===l&&(l="boolean"==typeof o?.modal&&o.modal),t.$$set=t=>{"elementRoot"in t&&e(0,i=t.elementRoot),"data"in t&&e(1,o=t.data)},t.$$.update=()=>{if(78&t.$$.dirty&&"object"==typeof o){const t=Number.isInteger(o.zIndex)||null===o.zIndex?o.zIndex:l?Number.MAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER-1;u!==t&&e(6,u=t);const n=o.draggable??!0;s.draggable!==n&&e(2,s.draggable=n,s);const i=o.popOut??!0;s.popOut!==i&&e(2,s.popOut=i,s);const r=o.resizable??!1;s.resizable!==r&&e(2,s.resizable=r,s);const a=o.title??"Dialog";a!==s?.options?.title&&e(2,s.title=a,s),s.zIndex!==u&&e(2,s.zIndex=u,s)}if(18&t.$$.dirty&&"object"==typeof o?.transition){const t=o.transition;t?.transition!==c.transition&&e(4,c.transition=t.transition,c),t?.inTransition!==c.inTransition&&e(4,c.inTransition=t.inTransition,c),t?.outTransition!==c.outTransition&&e(4,c.outTransition=t.outTransition,c),t?.transitionOptions!==c.transitionOptions&&e(4,c.transitionOptions=t.transitionOptions,c),t?.inTransitionOptions!==c.inTransitionOptions&&e(4,c.inTransitionOptions=t.inTransitionOptions,c),t?.outTransitionOptions!==c.outTransitionOptions&&e(4,c.outTransitionOptions=t.outTransitionOptions,c)}if(34&t.$$.dirty){const t="string"==typeof o?.modalOptions?.background?o.modalOptions.background:"#50505080";t!==p.background&&e(5,p.background=t,p)}if(34&t.$$.dirty)if("object"==typeof o?.modalOptions?.transition){const t=o.modalOptions.transition;t?.transition!==p.transition&&e(5,p.transition="function"==typeof t?.transition?t.transition:r,p),t?.inTransition!==p.inTransition&&e(5,p.inTransition=t.inTransition,p),t?.outTransition!==p.outTransition&&e(5,p.outTransition=t.outTransition,p),t?.transitionOptions!==p.transitionOptions&&e(5,p.transitionOptions="object"==typeof t?.transitionOptions?t.transitionOptions:a,p),t?.inTransitionOptions!==p.inTransitionOptions&&e(5,p.inTransitionOptions=t.inTransitionOptions,p),t?.outTransitionOptions!==p.outTransitionOptions&&e(5,p.outTransitionOptions=t.outTransitionOptions,p)}else{const t="function"==typeof o?.modalOptions?.transition?.transition?o.modalOptions.transition.transition:r;t!==p.transition&&e(5,p.transition=t,p);const n="object"==typeof o?.modalOptions?.transitionOptions?o.modalOptions.transitionOptions:a;n!==p.transitionOptions&&e(5,p.transitionOptions=n,p)}},[i,o,s,l,c,p,u,function(t){i=t,e(0,i)},function(t){i=t,e(0,i)}]}class DialogShell extends t{constructor(t){super(),n(this,t,instance,create_fragment,e,{elementRoot:0,data:1})}get elementRoot(){return this.$$.ctx[0]}set elementRoot(t){this.$$set({elementRoot:t}),i()}get data(){return this.$$.ctx[1]}set data(t){this.$$set({data:t}),i()}}export{ApplicationShell,DialogContent,DialogShell,TJSApplicationHeader,TJSApplicationShell,TJSComponentShell,TJSContainer,TJSContextMenu,TJSGlassPane,TJSHeaderButton};
//# sourceMappingURL=core.js.map
