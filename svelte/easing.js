const t=t=>t;function n(t){const n=2.5949095;return(t*=2)<1?t*t*((n+1)*t-n)*.5:.5*((t-=2)*t*((n+1)*t+n)+2)}function r(t){const n=1.70158;return t*t*((n+1)*t-n)}function u(t){const n=1.70158;return--t*t*((n+1)*t+n)+1}function o(t){const n=t*t;return t<4/11?7.5625*n:t<8/11?9.075*n-9.9*t+3.4:t<.9?4356/361*n-35442/1805*t+16061/1805:10.8*t*t-20.52*t+10.72}function c(t){return t<.5?.5*(1-o(1-2*t)):.5*o(2*t-1)+.5}function i(t){return 1-o(1-t)}function e(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}function a(t){return 1-Math.sqrt(1-t*t)}function h(t){return Math.sqrt(1- --t*t)}function M(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function f(t){return t*t*t}function s(t){const n=t-1;return n*n*n+1}function p(t){return t<.5?.5*Math.sin(13*Math.PI/2*2*t)*Math.pow(2,10*(2*t-1)):.5*Math.sin(-13*Math.PI/2*(2*t-1+1))*Math.pow(2,-10*(2*t-1))+1}function w(t){return Math.sin(13*t*Math.PI/2)*Math.pow(2,10*(t-1))}function P(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1}function I(t){return 0===t||1===t?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-20*t)+1}function q(t){return 0===t?t:Math.pow(2,10*(t-1))}function l(t){return 1===t?t:1-Math.pow(2,-10*t)}function b(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)}function m(t){return t*t}function v(t){return-t*(t-2)}function x(t){return t<.5?8*Math.pow(t,4):-8*Math.pow(t-1,4)+1}function d(t){return Math.pow(t,4)}function g(t){return Math.pow(t-1,3)*(1-t)+1}function j(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}function k(t){return t*t*t*t*t}function y(t){return--t*t*t*t*t+1}function z(t){return-.5*(Math.cos(Math.PI*t)-1)}function A(t){const n=Math.cos(t*Math.PI*.5);return Math.abs(n)<1e-14?1:1-n}function B(t){return Math.sin(t*Math.PI/2)}Promise.resolve();export{r as backIn,n as backInOut,u as backOut,i as bounceIn,c as bounceInOut,o as bounceOut,a as circIn,e as circInOut,h as circOut,f as cubicIn,M as cubicInOut,s as cubicOut,w as elasticIn,p as elasticInOut,P as elasticOut,q as expoIn,I as expoInOut,l as expoOut,t as linear,m as quadIn,b as quadInOut,v as quadOut,d as quartIn,x as quartInOut,g as quartOut,k as quintIn,j as quintInOut,y as quintOut,A as sineIn,z as sineInOut,B as sineOut};
//# sourceMappingURL=easing.js.map
