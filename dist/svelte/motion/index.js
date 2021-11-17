function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}const r="undefined"!=typeof window;let o=r?()=>window.performance.now():()=>Date.now(),s=r?t=>requestAnimationFrame(t):t;const i=new Set;function f(t){i.forEach((e=>{e.c(t)||(i.delete(e),e.f())})),0!==i.size&&s(f)}function c(t){let e;return 0===i.size&&s(f),{promise:new Promise((n=>{i.add(e={c:t,f:n})})),abort(){i.delete(e)}}}Promise.resolve();const u=[];function a(e,n=t){let r;const o=new Set;function s(t){if(s=t,((n=e)!=n?s==s:n!==s||n&&"object"==typeof n||"function"==typeof n)&&(e=t,r)){const t=!u.length;for(const t of o)t[1](),u.push(t,e);if(t){for(let t=0;t<u.length;t+=2)u[t][0](u[t+1]);u.length=0}}var n,s}return{set:s,update:function(t){s(t(e))},subscribe:function(i,f=t){const c=[i,f];return o.add(c),1===o.size&&(r=n(s)||t),i(e),()=>{o.delete(c),0===o.size&&(r(),r=null)}}}}function l(t){return"[object Date]"===Object.prototype.toString.call(t)}function p(t,e,n,r){if("number"==typeof n||l(n)){const o=r-n,s=(n-e)/(t.dt||1/60),i=(s+(t.opts.stiffness*o-t.opts.damping*s)*t.inv_mass)*t.dt;return Math.abs(i)<t.opts.precision&&Math.abs(o)<t.opts.precision?r:(t.settled=!1,l(n)?new Date(n.getTime()+i):n+i)}if(Array.isArray(n))return n.map(((o,s)=>p(t,e[s],n[s],r[s])));if("object"==typeof n){const o={};for(const s in n)o[s]=p(t,e[s],n[s],r[s]);return o}throw new Error(`Cannot spring ${typeof n} values`)}function d(t,e={}){const n=a(t),{stiffness:r=.15,damping:s=.8,precision:i=.01}=e;let f,u,l,d=t,m=t,b=1,y=0,w=!1;function h(e,r={}){m=e;const s=l={};if(null==t||r.hard||g.stiffness>=1&&g.damping>=1)return w=!0,f=o(),d=e,n.set(t=m),Promise.resolve();if(r.soft){const t=!0===r.soft?.5:+r.soft;y=1/(60*t),b=0}return u||(f=o(),w=!1,u=c((e=>{if(w)return w=!1,u=null,!1;b=Math.min(b+y,1);const r={inv_mass:b,opts:g,settled:!0,dt:60*(e-f)/1e3},o=p(r,d,t,m);return f=e,d=t,n.set(t=o),r.settled&&(u=null),!r.settled}))),new Promise((t=>{u.promise.then((()=>{s===l&&t()}))}))}const g={set:h,update:(e,n)=>h(e(m,t),n),subscribe:n.subscribe,stiffness:r,damping:s,precision:i};return g}function m(t,e){if(t===e||t!=t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const n=e.map(((e,n)=>m(t[n],e)));return t=>n.map((e=>e(t)))}if("object"===n){if(!t||!e)throw new Error("Object cannot be null");if(l(t)&&l(e)){t=t.getTime();const n=(e=e.getTime())-t;return e=>new Date(t+e*n)}const n=Object.keys(e),r={};return n.forEach((n=>{r[n]=m(t[n],e[n])})),t=>{const e={};return n.forEach((n=>{e[n]=r[n](t)})),e}}if("number"===n){const n=e-t;return e=>t+e*n}throw new Error(`Cannot interpolate ${n} values`)}function b(t,r={}){const s=a(t);let i,f=t;function u(u,a){if(null==t)return s.set(t=u),Promise.resolve();f=u;let l=i,p=!1,{delay:d=0,duration:b=400,easing:y=e,interpolate:w=m}=n(n({},r),a);if(0===b)return l&&(l.abort(),l=null),s.set(t=f),Promise.resolve();const h=o()+d;let g;return i=c((e=>{if(e<h)return!0;p||(g=w(t,u),"function"==typeof b&&(b=b(t,u)),p=!0),l&&(l.abort(),l=null);const n=e-h;return n>b?(s.set(t=u),!1):(s.set(t=g(y(n/b))),!0)})),i.promise}return{set:u,update:(e,n)=>u(e(f,t),n),subscribe:s.subscribe}}export{d as spring,b as tweened};
