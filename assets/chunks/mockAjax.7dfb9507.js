import{cb as T,cc as q,bD as N}from"../app.8dda268f.js";var P={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(l,L){(function(t,i){l.exports=i()})(T,function(){var t={};t.version="0.2.0";var i=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};t.configure=function(e){var r,n;for(r in e)n=e[r],n!==void 0&&e.hasOwnProperty(r)&&(i[r]=n);return this},t.status=null,t.set=function(e){var r=t.isStarted();e=v(e,i.minimum,1),t.status=e===1?null:e;var n=t.render(!r),o=n.querySelector(i.barSelector),a=i.speed,f=i.easing;return n.offsetWidth,E(function(s){i.positionUsing===""&&(i.positionUsing=t.getPositioningCSS()),g(o,x(e,a,f)),e===1?(g(n,{transition:"none",opacity:1}),n.offsetWidth,setTimeout(function(){g(n,{transition:"all "+a+"ms linear",opacity:0}),setTimeout(function(){t.remove(),s()},a)},a)):setTimeout(s,a)}),this},t.isStarted=function(){return typeof t.status=="number"},t.start=function(){t.status||t.set(0);var e=function(){setTimeout(function(){t.status&&(t.trickle(),e())},i.trickleSpeed)};return i.trickle&&e(),this},t.done=function(e){return!e&&!t.status?this:t.inc(.3+.5*Math.random()).set(1)},t.inc=function(e){var r=t.status;return r?(typeof e!="number"&&(e=(1-r)*v(Math.random()*r,.1,.95)),r=v(r+e,0,.994),t.set(r)):t.start()},t.trickle=function(){return t.inc(Math.random()*i.trickleRate)},function(){var e=0,r=0;t.promise=function(n){return!n||n.state()==="resolved"?this:(r===0&&t.start(),e++,r++,n.always(function(){r--,r===0?(e=0,t.done()):t.set((e-r)/e)}),this)}}(),t.render=function(e){if(t.isRendered())return document.getElementById("nprogress");S(document.documentElement,"nprogress-busy");var r=document.createElement("div");r.id="nprogress",r.innerHTML=i.template;var n=r.querySelector(i.barSelector),o=e?"-100":m(t.status||0),a=document.querySelector(i.parent),f;return g(n,{transition:"all 0 linear",transform:"translate3d("+o+"%,0,0)"}),i.showSpinner||(f=r.querySelector(i.spinnerSelector),f&&C(f)),a!=document.body&&S(a,"nprogress-custom-parent"),a.appendChild(r),r},t.remove=function(){k(document.documentElement,"nprogress-busy"),k(document.querySelector(i.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&C(e)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var e=document.body.style,r="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return r+"Perspective"in e?"translate3d":r+"Transform"in e?"translate":"margin"};function v(e,r,n){return e<r?r:e>n?n:e}function m(e){return(-1+e)*100}function x(e,r,n){var o;return i.positionUsing==="translate3d"?o={transform:"translate3d("+m(e)+"%,0,0)"}:i.positionUsing==="translate"?o={transform:"translate("+m(e)+"%,0)"}:o={"margin-left":m(e)+"%"},o.transition="all "+r+"ms "+n,o}var E=function(){var e=[];function r(){var n=e.shift();n&&n(r)}return function(n){e.push(n),e.length==1&&r()}}(),g=function(){var e=["Webkit","O","Moz","ms"],r={};function n(s){return s.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(u,c){return c.toUpperCase()})}function o(s){var u=document.body.style;if(s in u)return s;for(var c=e.length,p=s.charAt(0).toUpperCase()+s.slice(1),d;c--;)if(d=e[c]+p,d in u)return d;return s}function a(s){return s=n(s),r[s]||(r[s]=o(s))}function f(s,u,c){u=a(u),s.style[u]=c}return function(s,u){var c=arguments,p,d;if(c.length==2)for(p in u)d=u[p],d!==void 0&&u.hasOwnProperty(p)&&f(s,p,d);else f(s,c[1],c[2])}}();function h(e,r){var n=typeof e=="string"?e:y(e);return n.indexOf(" "+r+" ")>=0}function S(e,r){var n=y(e),o=n+r;h(n,r)||(e.className=o.substring(1))}function k(e,r){var n=y(e),o;h(e,r)&&(o=n.replace(" "+r+" "," "),e.className=o.substring(1,o.length-1))}function y(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function C(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return t})})(P);var U=P.exports;const w=q(U);const b=N.create({baseURL:"/mock",timeout:5e3});b.interceptors.request.use(l=>(w.start(),l));b.interceptors.response.use(l=>(w.done(),l.data),l=>Promise.reject(new Error(l)));const O=b;export{O as m};