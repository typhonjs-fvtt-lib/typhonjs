const identity=t=>t;function backInOut(t){const n=2.5949095;return(t*=2)<1?t*t*((n+1)*t-n)*.5:.5*((t-=2)*t*((n+1)*t+n)+2)}function backIn(t){const n=1.70158;return t*t*((n+1)*t-n)}function backOut(t){const n=1.70158;return--t*t*((n+1)*t+n)+1}function bounceOut(t){const n=t*t;return t<4/11?7.5625*n:t<8/11?9.075*n-9.9*t+3.4:t<.9?4356/361*n-35442/1805*t+16061/1805:10.8*t*t-20.52*t+10.72}function bounceInOut(t){return t<.5?.5*(1-bounceOut(1-2*t)):.5*bounceOut(2*t-1)+.5}function bounceIn(t){return 1-bounceOut(1-t)}function circInOut(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}function circIn(t){return 1-Math.sqrt(1-t*t)}function circOut(t){return Math.sqrt(1- --t*t)}function cubicInOut(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function cubicIn(t){return t*t*t}function cubicOut(t){const n=t-1;return n*n*n+1}function elasticInOut(t){return t<.5?.5*Math.sin(13*Math.PI/2*2*t)*Math.pow(2,10*(2*t-1)):.5*Math.sin(-13*Math.PI/2*(2*t-1+1))*Math.pow(2,-10*(2*t-1))+1}function elasticIn(t){return Math.sin(13*t*Math.PI/2)*Math.pow(2,10*(t-1))}function elasticOut(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1}function expoInOut(t){return 0===t||1===t?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-20*t)+1}function expoIn(t){return 0===t?t:Math.pow(2,10*(t-1))}function expoOut(t){return 1===t?t:1-Math.pow(2,-10*t)}function quadInOut(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)}function quadIn(t){return t*t}function quadOut(t){return-t*(t-2)}function quartInOut(t){return t<.5?8*Math.pow(t,4):-8*Math.pow(t-1,4)+1}function quartIn(t){return Math.pow(t,4)}function quartOut(t){return Math.pow(t-1,3)*(1-t)+1}function quintInOut(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}function quintIn(t){return t*t*t*t*t}function quintOut(t){return--t*t*t*t*t+1}function sineInOut(t){return-.5*(Math.cos(Math.PI*t)-1)}function sineIn(t){const n=Math.cos(t*Math.PI*.5);return Math.abs(n)<1e-14?1:1-n}function sineOut(t){return Math.sin(t*Math.PI/2)}Promise.resolve();export{backIn,backInOut,backOut,bounceIn,bounceInOut,bounceOut,circIn,circInOut,circOut,cubicIn,cubicInOut,cubicOut,elasticIn,elasticInOut,elasticOut,expoIn,expoInOut,expoOut,identity as linear,quadIn,quadInOut,quadOut,quartIn,quartInOut,quartOut,quintIn,quintInOut,quintOut,sineIn,sineInOut,sineOut};
//# sourceMappingURL=easing.js.map
