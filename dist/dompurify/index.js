/*! @license DOMPurify 2.3.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.3/LICENSE */
var e=Object.hasOwnProperty,t=Object.setPrototypeOf,n=Object.isFrozen,r=Object.getPrototypeOf,o=Object.getOwnPropertyDescriptor,i=Object.freeze,a=Object.seal,l=Object.create,c="undefined"!=typeof Reflect&&Reflect,s=c.apply,u=c.construct;s||(s=function(e,t,n){return e.apply(t,n)}),i||(i=function(e){return e}),a||(a=function(e){return e}),u||(u=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var m,f=x(Array.prototype.forEach),p=x(Array.prototype.pop),d=x(Array.prototype.push),h=x(String.prototype.toLowerCase),g=x(String.prototype.match),y=x(String.prototype.replace),v=x(String.prototype.indexOf),b=x(String.prototype.trim),T=x(RegExp.prototype.test),A=(m=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u(m,t)});function x(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return s(e,t,r)}}function w(e,r){t&&t(e,null);for(var o=r.length;o--;){var i=r[o];if("string"==typeof i){var a=h(i);a!==i&&(n(r)||(r[o]=a),i=a)}e[i]=!0}return e}function S(t){var n=l(null),r=void 0;for(r in t)s(e,t,[r])&&(n[r]=t[r]);return n}function E(e,t){for(;null!==e;){var n=o(e,t);if(n){if(n.get)return x(n.get);if("function"==typeof n.value)return x(n.value)}e=r(e)}return function(e){return console.warn("fallback value for",e),null}}var R=i(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),_=i(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),D=i(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),N=i(["animate","color-profile","cursor","discard","fedropshadow","feimage","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),k=i(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),O=i(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),M=i(["#text"]),L=i(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),F=i(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),I=i(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),C=i(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),z=a(/\{\{[\s\S]*|[\s\S]*\}\}/gm),H=a(/<%[\s\S]*|[\s\S]*%>/gm),U=a(/^data-[\-\w.\u00B7-\uFFFF]/),P=a(/^aria-[\-\w]+$/),B=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),j=a(/^(?:\w+script|data):/i),W=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function q(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var Y=function(){return"undefined"==typeof window?null:window},V=function(e,t){if("object"!==(void 0===e?"undefined":G(e))||"function"!=typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}},K=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y(),n=function(t){return e(t)};if(n.version="2.3.3",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,o=t.document,a=t.DocumentFragment,l=t.HTMLTemplateElement,c=t.Node,s=t.Element,u=t.NodeFilter,m=t.NamedNodeMap,x=void 0===m?t.NamedNodeMap||t.MozNamedAttrMap:m,K=t.Text,X=t.Comment,$=t.DOMParser,Z=t.trustedTypes,J=s.prototype,Q=E(J,"cloneNode"),ee=E(J,"nextSibling"),te=E(J,"childNodes"),ne=E(J,"parentNode");if("function"==typeof l){var re=o.createElement("template");re.content&&re.content.ownerDocument&&(o=re.content.ownerDocument)}var oe=V(Z,r),ie=oe&&ze?oe.createHTML(""):"",ae=o,le=ae.implementation,ce=ae.createNodeIterator,se=ae.createDocumentFragment,ue=ae.getElementsByTagName,me=r.importNode,fe={};try{fe=S(o).documentMode?o.documentMode:{}}catch(e){}var pe={};n.isSupported="function"==typeof ne&&le&&void 0!==le.createHTMLDocument&&9!==fe;var de=z,he=H,ge=U,ye=P,ve=j,be=W,Te=B,Ae=null,xe=w({},[].concat(q(R),q(_),q(D),q(k),q(M))),we=null,Se=w({},[].concat(q(L),q(F),q(I),q(C))),Ee=null,Re=null,_e=!0,De=!0,Ne=!1,ke=!1,Oe=!1,Me=!1,Le=!1,Fe=!1,Ie=!1,Ce=!0,ze=!1,He=!0,Ue=!0,Pe=!1,Be={},je=null,We=w({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Ge=null,qe=w({},["audio","video","img","source","image","track"]),Ye=null,Ve=w({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ke="http://www.w3.org/1998/Math/MathML",Xe="http://www.w3.org/2000/svg",$e="http://www.w3.org/1999/xhtml",Ze=$e,Je=!1,Qe=void 0,et=["application/xhtml+xml","text/html"],tt="text/html",nt=void 0,rt=null,ot=o.createElement("form"),it=function(e){rt&&rt===e||(e&&"object"===(void 0===e?"undefined":G(e))||(e={}),e=S(e),Ae="ALLOWED_TAGS"in e?w({},e.ALLOWED_TAGS):xe,we="ALLOWED_ATTR"in e?w({},e.ALLOWED_ATTR):Se,Ye="ADD_URI_SAFE_ATTR"in e?w(S(Ve),e.ADD_URI_SAFE_ATTR):Ve,Ge="ADD_DATA_URI_TAGS"in e?w(S(qe),e.ADD_DATA_URI_TAGS):qe,je="FORBID_CONTENTS"in e?w({},e.FORBID_CONTENTS):We,Ee="FORBID_TAGS"in e?w({},e.FORBID_TAGS):{},Re="FORBID_ATTR"in e?w({},e.FORBID_ATTR):{},Be="USE_PROFILES"in e&&e.USE_PROFILES,_e=!1!==e.ALLOW_ARIA_ATTR,De=!1!==e.ALLOW_DATA_ATTR,Ne=e.ALLOW_UNKNOWN_PROTOCOLS||!1,ke=e.SAFE_FOR_TEMPLATES||!1,Oe=e.WHOLE_DOCUMENT||!1,Fe=e.RETURN_DOM||!1,Ie=e.RETURN_DOM_FRAGMENT||!1,Ce=!1!==e.RETURN_DOM_IMPORT,ze=e.RETURN_TRUSTED_TYPE||!1,Le=e.FORCE_BODY||!1,He=!1!==e.SANITIZE_DOM,Ue=!1!==e.KEEP_CONTENT,Pe=e.IN_PLACE||!1,Te=e.ALLOWED_URI_REGEXP||Te,Ze=e.NAMESPACE||$e,Qe=Qe=-1===et.indexOf(e.PARSER_MEDIA_TYPE)?tt:e.PARSER_MEDIA_TYPE,nt="application/xhtml+xml"===Qe?function(e){return e}:h,ke&&(De=!1),Ie&&(Fe=!0),Be&&(Ae=w({},[].concat(q(M))),we=[],!0===Be.html&&(w(Ae,R),w(we,L)),!0===Be.svg&&(w(Ae,_),w(we,F),w(we,C)),!0===Be.svgFilters&&(w(Ae,D),w(we,F),w(we,C)),!0===Be.mathMl&&(w(Ae,k),w(we,I),w(we,C))),e.ADD_TAGS&&(Ae===xe&&(Ae=S(Ae)),w(Ae,e.ADD_TAGS)),e.ADD_ATTR&&(we===Se&&(we=S(we)),w(we,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&w(Ye,e.ADD_URI_SAFE_ATTR),e.FORBID_CONTENTS&&(je===We&&(je=S(je)),w(je,e.FORBID_CONTENTS)),Ue&&(Ae["#text"]=!0),Oe&&w(Ae,["html","head","body"]),Ae.table&&(w(Ae,["tbody"]),delete Ee.tbody),i&&i(e),rt=e)},at=w({},["mi","mo","mn","ms","mtext"]),lt=w({},["foreignobject","desc","title","annotation-xml"]),ct=w({},_);w(ct,D),w(ct,N);var st=w({},k);w(st,O);var ut=function(e){var t=ne(e);t&&t.tagName||(t={namespaceURI:$e,tagName:"template"});var n=h(e.tagName),r=h(t.tagName);if(e.namespaceURI===Xe)return t.namespaceURI===$e?"svg"===n:t.namespaceURI===Ke?"svg"===n&&("annotation-xml"===r||at[r]):Boolean(ct[n]);if(e.namespaceURI===Ke)return t.namespaceURI===$e?"math"===n:t.namespaceURI===Xe?"math"===n&&lt[r]:Boolean(st[n]);if(e.namespaceURI===$e){if(t.namespaceURI===Xe&&!lt[r])return!1;if(t.namespaceURI===Ke&&!at[r])return!1;var o=w({},["title","style","font","a","script"]);return!st[n]&&(o[n]||!ct[n])}return!1},mt=function(e){d(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ie}catch(t){e.remove()}}},ft=function(e,t){try{d(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){d(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!we[e])if(Fe||Ie)try{mt(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},pt=function(e){var t=void 0,n=void 0;if(Le)e="<remove></remove>"+e;else{var r=g(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===Qe&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var i=oe?oe.createHTML(e):e;if(Ze===$e)try{t=(new $).parseFromString(i,Qe)}catch(e){}if(!t||!t.documentElement){t=le.createDocument(Ze,"template",null);try{t.documentElement.innerHTML=Je?"":i}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(o.createTextNode(n),a.childNodes[0]||null),Ze===$e?ue.call(t,Oe?"html":"body")[0]:Oe?t.documentElement:a},dt=function(e){return ce.call(e.ownerDocument||e,e,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null,!1)},ht=function(e){return!(e instanceof K||e instanceof X||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof x&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI&&"function"==typeof e.insertBefore)},gt=function(e){return"object"===(void 0===c?"undefined":G(c))?e instanceof c:e&&"object"===(void 0===e?"undefined":G(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},yt=function(e,t,r){pe[e]&&f(pe[e],(function(e){e.call(n,t,r,rt)}))},vt=function(e){var t=void 0;if(yt("beforeSanitizeElements",e,null),ht(e))return mt(e),!0;if(g(e.nodeName,/[\u0080-\uFFFF]/))return mt(e),!0;var r=nt(e.nodeName);if(yt("uponSanitizeElement",e,{tagName:r,allowedTags:Ae}),!gt(e.firstElementChild)&&(!gt(e.content)||!gt(e.content.firstElementChild))&&T(/<[/\w]/g,e.innerHTML)&&T(/<[/\w]/g,e.textContent))return mt(e),!0;if("select"===r&&T(/<template/i,e.innerHTML))return mt(e),!0;if(!Ae[r]||Ee[r]){if(Ue&&!je[r]){var o=ne(e)||e.parentNode,i=te(e)||e.childNodes;if(i&&o)for(var a=i.length-1;a>=0;--a)o.insertBefore(Q(i[a],!0),ee(e))}return mt(e),!0}return e instanceof s&&!ut(e)?(mt(e),!0):"noscript"!==r&&"noembed"!==r||!T(/<\/no(script|embed)/i,e.innerHTML)?(ke&&3===e.nodeType&&(t=e.textContent,t=y(t,de," "),t=y(t,he," "),e.textContent!==t&&(d(n.removed,{element:e.cloneNode()}),e.textContent=t)),yt("afterSanitizeElements",e,null),!1):(mt(e),!0)},bt=function(e,t,n){if(He&&("id"===t||"name"===t)&&(n in o||n in ot))return!1;if(De&&!Re[t]&&T(ge,t));else if(_e&&T(ye,t));else{if(!we[t]||Re[t])return!1;if(Ye[t]);else if(T(Te,y(n,be,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==v(n,"data:")||!Ge[e])if(Ne&&!T(ve,y(n,be,"")));else if(n)return!1}return!0},Tt=function(e){var t=void 0,r=void 0,o=void 0,i=void 0;yt("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:we};for(i=a.length;i--;){var c=t=a[i],s=c.name,u=c.namespaceURI;if(r=b(t.value),o=nt(s),l.attrName=o,l.attrValue=r,l.keepAttr=!0,l.forceKeepAttr=void 0,yt("uponSanitizeAttribute",e,l),r=l.attrValue,!l.forceKeepAttr&&(ft(s,e),l.keepAttr))if(T(/\/>/i,r))ft(s,e);else{ke&&(r=y(r,de," "),r=y(r,he," "));var m=nt(e.nodeName);if(bt(m,o,r))try{u?e.setAttributeNS(u,s,r):e.setAttribute(s,r),p(n.removed)}catch(e){}}}yt("afterSanitizeAttributes",e,null)}},At=function e(t){var n=void 0,r=dt(t);for(yt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)yt("uponSanitizeShadowNode",n,null),vt(n)||(n.content instanceof a&&e(n.content),Tt(n));yt("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e,o){var i=void 0,l=void 0,s=void 0,u=void 0,m=void 0;if((Je=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!gt(e)){if("function"!=typeof e.toString)throw A("toString is not a function");if("string"!=typeof(e=e.toString()))throw A("dirty is not a string, aborting")}if(!n.isSupported){if("object"===G(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(gt(e))return t.toStaticHTML(e.outerHTML)}return e}if(Me||it(o),n.removed=[],"string"==typeof e&&(Pe=!1),Pe);else if(e instanceof c)1===(l=(i=pt("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?i=l:i.appendChild(l);else{if(!Fe&&!ke&&!Oe&&-1===e.indexOf("<"))return oe&&ze?oe.createHTML(e):e;if(!(i=pt(e)))return Fe?null:ie}i&&Le&&mt(i.firstChild);for(var f=dt(Pe?e:i);s=f.nextNode();)3===s.nodeType&&s===u||vt(s)||(s.content instanceof a&&At(s.content),Tt(s),u=s);if(u=null,Pe)return e;if(Fe){if(Ie)for(m=se.call(i.ownerDocument);i.firstChild;)m.appendChild(i.firstChild);else m=i;return Ce&&(m=me.call(r,m,!0)),m}var p=Oe?i.outerHTML:i.innerHTML;return ke&&(p=y(p,de," "),p=y(p,he," ")),oe&&ze?oe.createHTML(p):p},n.setConfig=function(e){it(e),Me=!0},n.clearConfig=function(){rt=null,Me=!1},n.isValidAttribute=function(e,t,n){rt||it({});var r=nt(e),o=nt(t);return bt(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(pe[e]=pe[e]||[],d(pe[e],t))},n.removeHook=function(e){pe[e]&&p(pe[e])},n.removeHooks=function(e){pe[e]&&(pe[e]=[])},n.removeAllHooks=function(){pe={}},n}();const X=new RegExp("^(https://www.youtube.com/embed/|https://player.vimeo.com/)");K.addHook("uponSanitizeElement",((e,t)=>{if("iframe"===t.tagName){const t=e.getAttribute("src")||"";if(!X.test(t))return e.parentNode.removeChild(e)}})),K.sanitizeWithVideo=e=>K.sanitize(e,{ADD_TAGS:["iframe"],ADD_ATTR:["allow","allowfullscreen","frameborder","scrolling"],FORCE_BODY:!0});export{K as default};
