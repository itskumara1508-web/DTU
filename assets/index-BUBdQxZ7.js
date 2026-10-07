var Sx=Object.defineProperty;var Mx=(t,e,n)=>e in t?Sx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ue=(t,e,n)=>Mx(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Ex(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var gm={exports:{}},bl={},xm={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=Symbol.for("react.element"),wx=Symbol.for("react.portal"),Tx=Symbol.for("react.fragment"),bx=Symbol.for("react.strict_mode"),Ax=Symbol.for("react.profiler"),Rx=Symbol.for("react.provider"),Cx=Symbol.for("react.context"),Nx=Symbol.for("react.forward_ref"),Lx=Symbol.for("react.suspense"),Px=Symbol.for("react.memo"),Ix=Symbol.for("react.lazy"),wh=Symbol.iterator;function Dx(t){return t===null||typeof t!="object"?null:(t=wh&&t[wh]||t["@@iterator"],typeof t=="function"?t:null)}var vm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_m=Object.assign,ym={};function Os(t,e,n){this.props=t,this.context=e,this.refs=ym,this.updater=n||vm}Os.prototype.isReactComponent={};Os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Sm(){}Sm.prototype=Os.prototype;function ud(t,e,n){this.props=t,this.context=e,this.refs=ym,this.updater=n||vm}var dd=ud.prototype=new Sm;dd.constructor=ud;_m(dd,Os.prototype);dd.isPureReactComponent=!0;var Th=Array.isArray,Mm=Object.prototype.hasOwnProperty,hd={current:null},Em={key:!0,ref:!0,__self:!0,__source:!0};function wm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Mm.call(e,i)&&!Em.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Oa,type:t,key:s,ref:a,props:r,_owner:hd.current}}function Ux(t,e){return{$$typeof:Oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oa}function Ox(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bh=/\/+/g;function ec(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ox(""+t.key):e.toString(36)}function Uo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Oa:case wx:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+ec(a,0):i,Th(r)?(n="",t!=null&&(n=t.replace(bh,"$&/")+"/"),Uo(r,e,n,"",function(c){return c})):r!=null&&(fd(r)&&(r=Ux(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(bh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Th(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+ec(s,o);a+=Uo(s,e,n,l,r)}else if(l=Dx(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+ec(s,o++),a+=Uo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Xa(t,e,n){if(t==null)return t;var i=[],r=0;return Uo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Fx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},Oo={transition:null},kx={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:Oo,ReactCurrentOwner:hd};function Tm(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:Xa,forEach:function(t,e,n){Xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xa(t,function(){e++}),e},toArray:function(t){return Xa(t,function(e){return e})||[]},only:function(t){if(!fd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=Os;Ye.Fragment=Tx;Ye.Profiler=Ax;Ye.PureComponent=ud;Ye.StrictMode=bx;Ye.Suspense=Lx;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kx;Ye.act=Tm;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=_m({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=hd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Mm.call(e,l)&&!Em.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Oa,type:t.type,key:r,ref:s,props:i,_owner:a}};Ye.createContext=function(t){return t={$$typeof:Cx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Rx,_context:t},t.Consumer=t};Ye.createElement=wm;Ye.createFactory=function(t){var e=wm.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:Nx,render:t}};Ye.isValidElement=fd;Ye.lazy=function(t){return{$$typeof:Ix,_payload:{_status:-1,_result:t},_init:Fx}};Ye.memo=function(t,e){return{$$typeof:Px,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=Oo.transition;Oo.transition={};try{t()}finally{Oo.transition=e}};Ye.unstable_act=Tm;Ye.useCallback=function(t,e){return rn.current.useCallback(t,e)};Ye.useContext=function(t){return rn.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return rn.current.useEffect(t,e)};Ye.useId=function(){return rn.current.useId()};Ye.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return rn.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};Ye.useRef=function(t){return rn.current.useRef(t)};Ye.useState=function(t){return rn.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return rn.current.useTransition()};Ye.version="18.3.1";xm.exports=Ye;var Ce=xm.exports;const zx=Ex(Ce);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bx=Ce,Gx=Symbol.for("react.element"),Hx=Symbol.for("react.fragment"),Vx=Object.prototype.hasOwnProperty,jx=Bx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wx={key:!0,ref:!0,__self:!0,__source:!0};function bm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Vx.call(e,i)&&!Wx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Gx,type:t,key:s,ref:a,props:r,_owner:jx.current}}bl.Fragment=Hx;bl.jsx=bm;bl.jsxs=bm;gm.exports=bl;var h=gm.exports,au={},Am={exports:{}},wn={},Rm={exports:{}},Cm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,G){var R=U.length;U.push(G);e:for(;0<R;){var w=R-1>>>1,z=U[w];if(0<r(z,G))U[w]=G,U[R]=z,R=w;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var G=U[0],R=U.pop();if(R!==G){U[0]=R;e:for(var w=0,z=U.length,J=z>>>1;w<J;){var D=2*(w+1)-1,W=U[D],ee=D+1,te=U[ee];if(0>r(W,R))ee<z&&0>r(te,W)?(U[w]=te,U[ee]=R,w=ee):(U[w]=W,U[D]=R,w=D);else if(ee<z&&0>r(te,R))U[w]=te,U[ee]=R,w=ee;else break e}}return G}function r(U,G){var R=U.sortIndex-G.sortIndex;return R!==0?R:U.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,f=null,p=3,g=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var G=n(c);G!==null;){if(G.callback===null)i(c);else if(G.startTime<=U)i(c),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(c)}}function M(U){if(y=!1,x(U),!_)if(n(l)!==null)_=!0,j(C);else{var G=n(c);G!==null&&ie(M,G.startTime-U)}}function C(U,G){_=!1,y&&(y=!1,u(P),P=-1),g=!0;var R=p;try{for(x(G),f=n(l);f!==null&&(!(f.expirationTime>G)||U&&!N());){var w=f.callback;if(typeof w=="function"){f.callback=null,p=f.priorityLevel;var z=w(f.expirationTime<=G);G=t.unstable_now(),typeof z=="function"?f.callback=z:f===n(l)&&i(l),x(G)}else i(l);f=n(l)}if(f!==null)var J=!0;else{var D=n(c);D!==null&&ie(M,D.startTime-G),J=!1}return J}finally{f=null,p=R,g=!1}}var A=!1,b=null,P=-1,H=5,S=-1;function N(){return!(t.unstable_now()-S<H)}function $(){if(b!==null){var U=t.unstable_now();S=U;var G=!0;try{G=b(!0,U)}finally{G?Q():(A=!1,b=null)}}else A=!1}var Q;if(typeof v=="function")Q=function(){v($)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,K=I.port2;I.port1.onmessage=$,Q=function(){K.postMessage(null)}}else Q=function(){m($,0)};function j(U){b=U,A||(A=!0,Q())}function ie(U,G){P=m(function(){U(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,j(C))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(p){case 1:case 2:case 3:var G=3;break;default:G=p}var R=p;p=G;try{return U()}finally{p=R}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,G){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var R=p;p=U;try{return G()}finally{p=R}},t.unstable_scheduleCallback=function(U,G,R){var w=t.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?w+R:w):R=w,U){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=R+z,U={id:d++,callback:G,priorityLevel:U,startTime:R,expirationTime:z,sortIndex:-1},R>w?(U.sortIndex=R,e(c,U),n(l)===null&&U===n(c)&&(y?(u(P),P=-1):y=!0,ie(M,R-w))):(U.sortIndex=z,e(l,U),_||g||(_=!0,j(C))),U},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(U){var G=p;return function(){var R=p;p=G;try{return U.apply(this,arguments)}finally{p=R}}}})(Cm);Rm.exports=Cm;var Xx=Rm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $x=Ce,En=Xx;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nm=new Set,xa={};function Dr(t,e){ws(t,e),ws(t+"Capture",e)}function ws(t,e){for(xa[t]=e,t=0;t<e.length;t++)Nm.add(e[t])}var Si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=Object.prototype.hasOwnProperty,Yx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ah={},Rh={};function qx(t){return ou.call(Rh,t)?!0:ou.call(Ah,t)?!1:Yx.test(t)?Rh[t]=!0:(Ah[t]=!0,!1)}function Kx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Zx(t,e,n,i){if(e===null||typeof e>"u"||Kx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var pd=/[\-:]([a-z])/g;function md(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(pd,md);Ht[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(pd,md);Ht[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(pd,md);Ht[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function gd(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Zx(e,n,r,i)&&(n=null),i||r===null?qx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ti=$x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$a=Symbol.for("react.element"),ts=Symbol.for("react.portal"),ns=Symbol.for("react.fragment"),xd=Symbol.for("react.strict_mode"),lu=Symbol.for("react.profiler"),Lm=Symbol.for("react.provider"),Pm=Symbol.for("react.context"),vd=Symbol.for("react.forward_ref"),cu=Symbol.for("react.suspense"),uu=Symbol.for("react.suspense_list"),_d=Symbol.for("react.memo"),Ii=Symbol.for("react.lazy"),Im=Symbol.for("react.offscreen"),Ch=Symbol.iterator;function Vs(t){return t===null||typeof t!="object"?null:(t=Ch&&t[Ch]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,tc;function na(t){if(tc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tc=e&&e[1]||""}return`
`+tc+t}var nc=!1;function ic(t,e){if(!t||nc)return"";nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{nc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?na(t):""}function Qx(t){switch(t.tag){case 5:return na(t.type);case 16:return na("Lazy");case 13:return na("Suspense");case 19:return na("SuspenseList");case 0:case 2:case 15:return t=ic(t.type,!1),t;case 11:return t=ic(t.type.render,!1),t;case 1:return t=ic(t.type,!0),t;default:return""}}function du(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ns:return"Fragment";case ts:return"Portal";case lu:return"Profiler";case xd:return"StrictMode";case cu:return"Suspense";case uu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Pm:return(t.displayName||"Context")+".Consumer";case Lm:return(t._context.displayName||"Context")+".Provider";case vd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _d:return e=t.displayName||null,e!==null?e:du(t.type)||"Memo";case Ii:e=t._payload,t=t._init;try{return du(t(e))}catch{}}return null}function Jx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return du(e);case 8:return e===xd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Dm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ev(t){var e=Dm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ya(t){t._valueTracker||(t._valueTracker=ev(t))}function Um(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Dm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Yo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hu(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Nh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Qi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Om(t,e){e=e.checked,e!=null&&gd(t,"checked",e,!1)}function fu(t,e){Om(t,e);var n=Qi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pu(t,e.type,n):e.hasOwnProperty("defaultValue")&&pu(t,e.type,Qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pu(t,e,n){(e!=="number"||Yo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ia=Array.isArray;function ms(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Qi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function mu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ph(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(ia(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qi(n)}}function Fm(t,e){var n=Qi(e.value),i=Qi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ih(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function km(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?km(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qa,zm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(qa=qa||document.createElement("div"),qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function va(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tv=["Webkit","ms","Moz","O"];Object.keys(aa).forEach(function(t){tv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),aa[e]=aa[t]})});function Bm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||aa.hasOwnProperty(t)&&aa[t]?(""+e).trim():e+"px"}function Gm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Bm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var nv=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xu(t,e){if(e){if(nv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function vu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _u=null;function yd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yu=null,gs=null,xs=null;function Dh(t){if(t=za(t)){if(typeof yu!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=Ll(e),yu(t.stateNode,t.type,e))}}function Hm(t){gs?xs?xs.push(t):xs=[t]:gs=t}function Vm(){if(gs){var t=gs,e=xs;if(xs=gs=null,Dh(t),e)for(t=0;t<e.length;t++)Dh(e[t])}}function jm(t,e){return t(e)}function Wm(){}var rc=!1;function Xm(t,e,n){if(rc)return t(e,n);rc=!0;try{return jm(t,e,n)}finally{rc=!1,(gs!==null||xs!==null)&&(Wm(),Vm())}}function _a(t,e){var n=t.stateNode;if(n===null)return null;var i=Ll(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var Su=!1;if(Si)try{var js={};Object.defineProperty(js,"passive",{get:function(){Su=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{Su=!1}function iv(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var oa=!1,qo=null,Ko=!1,Mu=null,rv={onError:function(t){oa=!0,qo=t}};function sv(t,e,n,i,r,s,a,o,l){oa=!1,qo=null,iv.apply(rv,arguments)}function av(t,e,n,i,r,s,a,o,l){if(sv.apply(this,arguments),oa){if(oa){var c=qo;oa=!1,qo=null}else throw Error(ae(198));Ko||(Ko=!0,Mu=c)}}function Ur(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $m(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Uh(t){if(Ur(t)!==t)throw Error(ae(188))}function ov(t){var e=t.alternate;if(!e){if(e=Ur(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Uh(r),t;if(s===i)return Uh(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function Ym(t){return t=ov(t),t!==null?qm(t):null}function qm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=qm(t);if(e!==null)return e;t=t.sibling}return null}var Km=En.unstable_scheduleCallback,Oh=En.unstable_cancelCallback,lv=En.unstable_shouldYield,cv=En.unstable_requestPaint,wt=En.unstable_now,uv=En.unstable_getCurrentPriorityLevel,Sd=En.unstable_ImmediatePriority,Zm=En.unstable_UserBlockingPriority,Zo=En.unstable_NormalPriority,dv=En.unstable_LowPriority,Qm=En.unstable_IdlePriority,Al=null,ni=null;function hv(t){if(ni&&typeof ni.onCommitFiberRoot=="function")try{ni.onCommitFiberRoot(Al,t,void 0,(t.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:mv,fv=Math.log,pv=Math.LN2;function mv(t){return t>>>=0,t===0?32:31-(fv(t)/pv|0)|0}var Ka=64,Za=4194304;function ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qo(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ra(o):(s&=a,s!==0&&(i=ra(s)))}else a=n&~r,a!==0?i=ra(a):s!==0&&(i=ra(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Wn(e),r=1<<n,i|=t[n],e&=~r;return i}function gv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Wn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=gv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Eu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Jm(){var t=Ka;return Ka<<=1,!(Ka&4194240)&&(Ka=64),t}function sc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wn(e),t[e]=n}function vv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Wn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Md(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Wn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function e0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var t0,Ed,n0,i0,r0,wu=!1,Qa=[],Gi=null,Hi=null,Vi=null,ya=new Map,Sa=new Map,Ui=[],_v="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fh(t,e){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Hi=null;break;case"mouseover":case"mouseout":Vi=null;break;case"pointerover":case"pointerout":ya.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(e.pointerId)}}function Ws(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=za(e),e!==null&&Ed(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function yv(t,e,n,i,r){switch(e){case"focusin":return Gi=Ws(Gi,t,e,n,i,r),!0;case"dragenter":return Hi=Ws(Hi,t,e,n,i,r),!0;case"mouseover":return Vi=Ws(Vi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ya.set(s,Ws(ya.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Sa.set(s,Ws(Sa.get(s)||null,t,e,n,i,r)),!0}return!1}function s0(t){var e=yr(t.target);if(e!==null){var n=Ur(e);if(n!==null){if(e=n.tag,e===13){if(e=$m(n),e!==null){t.blockedOn=e,r0(t.priority,function(){n0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);_u=i,n.target.dispatchEvent(i),_u=null}else return e=za(n),e!==null&&Ed(e),t.blockedOn=n,!1;e.shift()}return!0}function kh(t,e,n){Fo(t)&&n.delete(e)}function Sv(){wu=!1,Gi!==null&&Fo(Gi)&&(Gi=null),Hi!==null&&Fo(Hi)&&(Hi=null),Vi!==null&&Fo(Vi)&&(Vi=null),ya.forEach(kh),Sa.forEach(kh)}function Xs(t,e){t.blockedOn===e&&(t.blockedOn=null,wu||(wu=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,Sv)))}function Ma(t){function e(r){return Xs(r,t)}if(0<Qa.length){Xs(Qa[0],t);for(var n=1;n<Qa.length;n++){var i=Qa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Gi!==null&&Xs(Gi,t),Hi!==null&&Xs(Hi,t),Vi!==null&&Xs(Vi,t),ya.forEach(e),Sa.forEach(e),n=0;n<Ui.length;n++)i=Ui[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ui.length&&(n=Ui[0],n.blockedOn===null);)s0(n),n.blockedOn===null&&Ui.shift()}var vs=Ti.ReactCurrentBatchConfig,Jo=!0;function Mv(t,e,n,i){var r=nt,s=vs.transition;vs.transition=null;try{nt=1,wd(t,e,n,i)}finally{nt=r,vs.transition=s}}function Ev(t,e,n,i){var r=nt,s=vs.transition;vs.transition=null;try{nt=4,wd(t,e,n,i)}finally{nt=r,vs.transition=s}}function wd(t,e,n,i){if(Jo){var r=Tu(t,e,n,i);if(r===null)mc(t,e,i,el,n),Fh(t,i);else if(yv(r,t,e,n,i))i.stopPropagation();else if(Fh(t,i),e&4&&-1<_v.indexOf(t)){for(;r!==null;){var s=za(r);if(s!==null&&t0(s),s=Tu(t,e,n,i),s===null&&mc(t,e,i,el,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else mc(t,e,i,null,n)}}var el=null;function Tu(t,e,n,i){if(el=null,t=yd(i),t=yr(t),t!==null)if(e=Ur(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$m(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return el=t,null}function a0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uv()){case Sd:return 1;case Zm:return 4;case Zo:case dv:return 16;case Qm:return 536870912;default:return 16}default:return 16}}var ki=null,Td=null,ko=null;function o0(){if(ko)return ko;var t,e=Td,n=e.length,i,r="value"in ki?ki.value:ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return ko=r.slice(t,1<i?1-i:void 0)}function zo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ja(){return!0}function zh(){return!1}function Tn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ja:zh,this.isPropagationStopped=zh,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),e}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bd=Tn(Fs),ka=_t({},Fs,{view:0,detail:0}),wv=Tn(ka),ac,oc,$s,Rl=_t({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ad,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(ac=t.screenX-$s.screenX,oc=t.screenY-$s.screenY):oc=ac=0,$s=t),ac)},movementY:function(t){return"movementY"in t?t.movementY:oc}}),Bh=Tn(Rl),Tv=_t({},Rl,{dataTransfer:0}),bv=Tn(Tv),Av=_t({},ka,{relatedTarget:0}),lc=Tn(Av),Rv=_t({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Cv=Tn(Rv),Nv=_t({},Fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lv=Tn(Nv),Pv=_t({},Fs,{data:0}),Gh=Tn(Pv),Iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ov(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Uv[t])?!!e[t]:!1}function Ad(){return Ov}var Fv=_t({},ka,{key:function(t){if(t.key){var e=Iv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ad,charCode:function(t){return t.type==="keypress"?zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kv=Tn(Fv),zv=_t({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hh=Tn(zv),Bv=_t({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ad}),Gv=Tn(Bv),Hv=_t({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vv=Tn(Hv),jv=_t({},Rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wv=Tn(jv),Xv=[9,13,27,32],Rd=Si&&"CompositionEvent"in window,la=null;Si&&"documentMode"in document&&(la=document.documentMode);var $v=Si&&"TextEvent"in window&&!la,l0=Si&&(!Rd||la&&8<la&&11>=la),Vh=" ",jh=!1;function c0(t,e){switch(t){case"keyup":return Xv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function u0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function Yv(t,e){switch(t){case"compositionend":return u0(e);case"keypress":return e.which!==32?null:(jh=!0,Vh);case"textInput":return t=e.data,t===Vh&&jh?null:t;default:return null}}function qv(t,e){if(is)return t==="compositionend"||!Rd&&c0(t,e)?(t=o0(),ko=Td=ki=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return l0&&e.locale!=="ko"?null:e.data;default:return null}}var Kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Kv[t.type]:e==="textarea"}function d0(t,e,n,i){Hm(i),e=tl(e,"onChange"),0<e.length&&(n=new bd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ca=null,Ea=null;function Zv(t){M0(t,0)}function Cl(t){var e=as(t);if(Um(e))return t}function Qv(t,e){if(t==="change")return e}var h0=!1;if(Si){var cc;if(Si){var uc="oninput"in document;if(!uc){var Xh=document.createElement("div");Xh.setAttribute("oninput","return;"),uc=typeof Xh.oninput=="function"}cc=uc}else cc=!1;h0=cc&&(!document.documentMode||9<document.documentMode)}function $h(){ca&&(ca.detachEvent("onpropertychange",f0),Ea=ca=null)}function f0(t){if(t.propertyName==="value"&&Cl(Ea)){var e=[];d0(e,Ea,t,yd(t)),Xm(Zv,e)}}function Jv(t,e,n){t==="focusin"?($h(),ca=e,Ea=n,ca.attachEvent("onpropertychange",f0)):t==="focusout"&&$h()}function e_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cl(Ea)}function t_(t,e){if(t==="click")return Cl(e)}function n_(t,e){if(t==="input"||t==="change")return Cl(e)}function i_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:i_;function wa(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ou.call(e,r)||!$n(t[r],e[r]))return!1}return!0}function Yh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qh(t,e){var n=Yh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yh(n)}}function p0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?p0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function m0(){for(var t=window,e=Yo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Yo(t.document)}return e}function Cd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function r_(t){var e=m0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&p0(n.ownerDocument.documentElement,n)){if(i!==null&&Cd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=qh(n,s);var a=qh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var s_=Si&&"documentMode"in document&&11>=document.documentMode,rs=null,bu=null,ua=null,Au=!1;function Kh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Au||rs==null||rs!==Yo(i)||(i=rs,"selectionStart"in i&&Cd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ua&&wa(ua,i)||(ua=i,i=tl(bu,"onSelect"),0<i.length&&(e=new bd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=rs)))}function eo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ss={animationend:eo("Animation","AnimationEnd"),animationiteration:eo("Animation","AnimationIteration"),animationstart:eo("Animation","AnimationStart"),transitionend:eo("Transition","TransitionEnd")},dc={},g0={};Si&&(g0=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function Nl(t){if(dc[t])return dc[t];if(!ss[t])return t;var e=ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in g0)return dc[t]=e[n];return t}var x0=Nl("animationend"),v0=Nl("animationiteration"),_0=Nl("animationstart"),y0=Nl("transitionend"),S0=new Map,Zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(t,e){S0.set(t,e),Dr(e,[t])}for(var hc=0;hc<Zh.length;hc++){var fc=Zh[hc],a_=fc.toLowerCase(),o_=fc[0].toUpperCase()+fc.slice(1);nr(a_,"on"+o_)}nr(x0,"onAnimationEnd");nr(v0,"onAnimationIteration");nr(_0,"onAnimationStart");nr("dblclick","onDoubleClick");nr("focusin","onFocus");nr("focusout","onBlur");nr(y0,"onTransitionEnd");ws("onMouseEnter",["mouseout","mouseover"]);ws("onMouseLeave",["mouseout","mouseover"]);ws("onPointerEnter",["pointerout","pointerover"]);ws("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),l_=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function Qh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,av(i,e,void 0,t),t.currentTarget=null}function M0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Qh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Qh(r,o,c),s=l}}}if(Ko)throw t=Mu,Ko=!1,Mu=null,t}function ot(t,e){var n=e[Pu];n===void 0&&(n=e[Pu]=new Set);var i=t+"__bubble";n.has(i)||(E0(e,t,2,!1),n.add(i))}function pc(t,e,n){var i=0;e&&(i|=4),E0(n,t,i,e)}var to="_reactListening"+Math.random().toString(36).slice(2);function Ta(t){if(!t[to]){t[to]=!0,Nm.forEach(function(n){n!=="selectionchange"&&(l_.has(n)||pc(n,!1,t),pc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[to]||(e[to]=!0,pc("selectionchange",!1,e))}}function E0(t,e,n,i){switch(a0(e)){case 1:var r=Mv;break;case 4:r=Ev;break;default:r=wd}n=r.bind(null,e,n,t),r=void 0,!Su||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function mc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=yr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Xm(function(){var c=s,d=yd(n),f=[];e:{var p=S0.get(t);if(p!==void 0){var g=bd,_=t;switch(t){case"keypress":if(zo(n)===0)break e;case"keydown":case"keyup":g=kv;break;case"focusin":_="focus",g=lc;break;case"focusout":_="blur",g=lc;break;case"beforeblur":case"afterblur":g=lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Gv;break;case x0:case v0:case _0:g=Cv;break;case y0:g=Vv;break;case"scroll":g=wv;break;case"wheel":g=Wv;break;case"copy":case"cut":case"paste":g=Lv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Hh}var y=(e&4)!==0,m=!y&&t==="scroll",u=y?p!==null?p+"Capture":null:p;y=[];for(var v=c,x;v!==null;){x=v;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,u!==null&&(M=_a(v,u),M!=null&&y.push(ba(v,M,x)))),m)break;v=v.return}0<y.length&&(p=new g(p,_,null,n,d),f.push({event:p,listeners:y}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==_u&&(_=n.relatedTarget||n.fromElement)&&(yr(_)||_[Mi]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=c,_=_?yr(_):null,_!==null&&(m=Ur(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=c),g!==_)){if(y=Bh,M="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=Hh,M="onPointerLeave",u="onPointerEnter",v="pointer"),m=g==null?p:as(g),x=_==null?p:as(_),p=new y(M,v+"leave",g,n,d),p.target=m,p.relatedTarget=x,M=null,yr(d)===c&&(y=new y(u,v+"enter",_,n,d),y.target=x,y.relatedTarget=m,M=y),m=M,g&&_)t:{for(y=g,u=_,v=0,x=y;x;x=Fr(x))v++;for(x=0,M=u;M;M=Fr(M))x++;for(;0<v-x;)y=Fr(y),v--;for(;0<x-v;)u=Fr(u),x--;for(;v--;){if(y===u||u!==null&&y===u.alternate)break t;y=Fr(y),u=Fr(u)}y=null}else y=null;g!==null&&Jh(f,p,g,y,!1),_!==null&&m!==null&&Jh(f,m,_,y,!0)}}e:{if(p=c?as(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var C=Qv;else if(Wh(p))if(h0)C=n_;else{C=e_;var A=Jv}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=t_);if(C&&(C=C(t,c))){d0(f,C,n,d);break e}A&&A(t,p,c),t==="focusout"&&(A=p._wrapperState)&&A.controlled&&p.type==="number"&&pu(p,"number",p.value)}switch(A=c?as(c):window,t){case"focusin":(Wh(A)||A.contentEditable==="true")&&(rs=A,bu=c,ua=null);break;case"focusout":ua=bu=rs=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,Kh(f,n,d);break;case"selectionchange":if(s_)break;case"keydown":case"keyup":Kh(f,n,d)}var b;if(Rd)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else is?c0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(l0&&n.locale!=="ko"&&(is||P!=="onCompositionStart"?P==="onCompositionEnd"&&is&&(b=o0()):(ki=d,Td="value"in ki?ki.value:ki.textContent,is=!0)),A=tl(c,P),0<A.length&&(P=new Gh(P,t,null,n,d),f.push({event:P,listeners:A}),b?P.data=b:(b=u0(n),b!==null&&(P.data=b)))),(b=$v?Yv(t,n):qv(t,n))&&(c=tl(c,"onBeforeInput"),0<c.length&&(d=new Gh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=b))}M0(f,e)})}function ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=_a(t,n),s!=null&&i.unshift(ba(t,s,r)),s=_a(t,e),s!=null&&i.push(ba(t,s,r))),t=t.return}return i}function Fr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=_a(n,s),l!=null&&a.unshift(ba(n,l,o))):r||(l=_a(n,s),l!=null&&a.push(ba(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var c_=/\r\n?/g,u_=/\u0000|\uFFFD/g;function ef(t){return(typeof t=="string"?t:""+t).replace(c_,`
`).replace(u_,"")}function no(t,e,n){if(e=ef(e),ef(t)!==e&&n)throw Error(ae(425))}function nl(){}var Ru=null,Cu=null;function Nu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lu=typeof setTimeout=="function"?setTimeout:void 0,d_=typeof clearTimeout=="function"?clearTimeout:void 0,tf=typeof Promise=="function"?Promise:void 0,h_=typeof queueMicrotask=="function"?queueMicrotask:typeof tf<"u"?function(t){return tf.resolve(null).then(t).catch(f_)}:Lu;function f_(t){setTimeout(function(){throw t})}function gc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ma(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ma(e)}function ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function nf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),ei="__reactFiber$"+ks,Aa="__reactProps$"+ks,Mi="__reactContainer$"+ks,Pu="__reactEvents$"+ks,p_="__reactListeners$"+ks,m_="__reactHandles$"+ks;function yr(t){var e=t[ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mi]||n[ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=nf(t);t!==null;){if(n=t[ei])return n;t=nf(t)}return e}t=n,n=t.parentNode}return null}function za(t){return t=t[ei]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function Ll(t){return t[Aa]||null}var Iu=[],os=-1;function ir(t){return{current:t}}function ut(t){0>os||(t.current=Iu[os],Iu[os]=null,os--)}function at(t,e){os++,Iu[os]=t.current,t.current=e}var Ji={},qt=ir(Ji),un=ir(!1),Rr=Ji;function Ts(t,e){var n=t.type.contextTypes;if(!n)return Ji;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function dn(t){return t=t.childContextTypes,t!=null}function il(){ut(un),ut(qt)}function rf(t,e,n){if(qt.current!==Ji)throw Error(ae(168));at(qt,e),at(un,n)}function w0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,Jx(t)||"Unknown",r));return _t({},n,i)}function rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ji,Rr=qt.current,at(qt,t),at(un,un.current),!0}function sf(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=w0(t,e,Rr),i.__reactInternalMemoizedMergedChildContext=t,ut(un),ut(qt),at(qt,t)):ut(un),at(un,n)}var fi=null,Pl=!1,xc=!1;function T0(t){fi===null?fi=[t]:fi.push(t)}function g_(t){Pl=!0,T0(t)}function rr(){if(!xc&&fi!==null){xc=!0;var t=0,e=nt;try{var n=fi;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}fi=null,Pl=!1}catch(r){throw fi!==null&&(fi=fi.slice(t+1)),Km(Sd,rr),r}finally{nt=e,xc=!1}}return null}var ls=[],cs=0,sl=null,al=0,Cn=[],Nn=0,Cr=null,xi=1,vi="";function pr(t,e){ls[cs++]=al,ls[cs++]=sl,sl=t,al=e}function b0(t,e,n){Cn[Nn++]=xi,Cn[Nn++]=vi,Cn[Nn++]=Cr,Cr=t;var i=xi;t=vi;var r=32-Wn(i)-1;i&=~(1<<r),n+=1;var s=32-Wn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,xi=1<<32-Wn(e)+r|n<<r|i,vi=s+t}else xi=1<<s|n<<r|i,vi=t}function Nd(t){t.return!==null&&(pr(t,1),b0(t,1,0))}function Ld(t){for(;t===sl;)sl=ls[--cs],ls[cs]=null,al=ls[--cs],ls[cs]=null;for(;t===Cr;)Cr=Cn[--Nn],Cn[Nn]=null,vi=Cn[--Nn],Cn[Nn]=null,xi=Cn[--Nn],Cn[Nn]=null}var Mn=null,Sn=null,pt=!1,Hn=null;function A0(t,e){var n=Pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function af(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mn=t,Sn=ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mn=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cr!==null?{id:xi,overflow:vi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mn=t,Sn=null,!0):!1;default:return!1}}function Du(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uu(t){if(pt){var e=Sn;if(e){var n=e;if(!af(t,e)){if(Du(t))throw Error(ae(418));e=ji(n.nextSibling);var i=Mn;e&&af(t,e)?A0(i,n):(t.flags=t.flags&-4097|2,pt=!1,Mn=t)}}else{if(Du(t))throw Error(ae(418));t.flags=t.flags&-4097|2,pt=!1,Mn=t}}}function of(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mn=t}function io(t){if(t!==Mn)return!1;if(!pt)return of(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nu(t.type,t.memoizedProps)),e&&(e=Sn)){if(Du(t))throw R0(),Error(ae(418));for(;e;)A0(t,e),e=ji(e.nextSibling)}if(of(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=Mn?ji(t.stateNode.nextSibling):null;return!0}function R0(){for(var t=Sn;t;)t=ji(t.nextSibling)}function bs(){Sn=Mn=null,pt=!1}function Pd(t){Hn===null?Hn=[t]:Hn.push(t)}var x_=Ti.ReactCurrentBatchConfig;function Ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function ro(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lf(t){var e=t._init;return e(t._payload)}function C0(t){function e(u,v){if(t){var x=u.deletions;x===null?(u.deletions=[v],u.flags|=16):x.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Yi(u,v),u.index=0,u.sibling=null,u}function s(u,v,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<v?(u.flags|=2,v):x):(u.flags|=2,v)):(u.flags|=1048576,v)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,v,x,M){return v===null||v.tag!==6?(v=wc(x,u.mode,M),v.return=u,v):(v=r(v,x),v.return=u,v)}function l(u,v,x,M){var C=x.type;return C===ns?d(u,v,x.props.children,M,x.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ii&&lf(C)===v.type)?(M=r(v,x.props),M.ref=Ys(u,v,x),M.return=u,M):(M=Xo(x.type,x.key,x.props,null,u.mode,M),M.ref=Ys(u,v,x),M.return=u,M)}function c(u,v,x,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Tc(x,u.mode,M),v.return=u,v):(v=r(v,x.children||[]),v.return=u,v)}function d(u,v,x,M,C){return v===null||v.tag!==7?(v=Tr(x,u.mode,M,C),v.return=u,v):(v=r(v,x),v.return=u,v)}function f(u,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=wc(""+v,u.mode,x),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $a:return x=Xo(v.type,v.key,v.props,null,u.mode,x),x.ref=Ys(u,null,v),x.return=u,x;case ts:return v=Tc(v,u.mode,x),v.return=u,v;case Ii:var M=v._init;return f(u,M(v._payload),x)}if(ia(v)||Vs(v))return v=Tr(v,u.mode,x,null),v.return=u,v;ro(u,v)}return null}function p(u,v,x,M){var C=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:o(u,v,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case $a:return x.key===C?l(u,v,x,M):null;case ts:return x.key===C?c(u,v,x,M):null;case Ii:return C=x._init,p(u,v,C(x._payload),M)}if(ia(x)||Vs(x))return C!==null?null:d(u,v,x,M,null);ro(u,x)}return null}function g(u,v,x,M,C){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(x)||null,o(v,u,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case $a:return u=u.get(M.key===null?x:M.key)||null,l(v,u,M,C);case ts:return u=u.get(M.key===null?x:M.key)||null,c(v,u,M,C);case Ii:var A=M._init;return g(u,v,x,A(M._payload),C)}if(ia(M)||Vs(M))return u=u.get(x)||null,d(v,u,M,C,null);ro(v,M)}return null}function _(u,v,x,M){for(var C=null,A=null,b=v,P=v=0,H=null;b!==null&&P<x.length;P++){b.index>P?(H=b,b=null):H=b.sibling;var S=p(u,b,x[P],M);if(S===null){b===null&&(b=H);break}t&&b&&S.alternate===null&&e(u,b),v=s(S,v,P),A===null?C=S:A.sibling=S,A=S,b=H}if(P===x.length)return n(u,b),pt&&pr(u,P),C;if(b===null){for(;P<x.length;P++)b=f(u,x[P],M),b!==null&&(v=s(b,v,P),A===null?C=b:A.sibling=b,A=b);return pt&&pr(u,P),C}for(b=i(u,b);P<x.length;P++)H=g(b,u,P,x[P],M),H!==null&&(t&&H.alternate!==null&&b.delete(H.key===null?P:H.key),v=s(H,v,P),A===null?C=H:A.sibling=H,A=H);return t&&b.forEach(function(N){return e(u,N)}),pt&&pr(u,P),C}function y(u,v,x,M){var C=Vs(x);if(typeof C!="function")throw Error(ae(150));if(x=C.call(x),x==null)throw Error(ae(151));for(var A=C=null,b=v,P=v=0,H=null,S=x.next();b!==null&&!S.done;P++,S=x.next()){b.index>P?(H=b,b=null):H=b.sibling;var N=p(u,b,S.value,M);if(N===null){b===null&&(b=H);break}t&&b&&N.alternate===null&&e(u,b),v=s(N,v,P),A===null?C=N:A.sibling=N,A=N,b=H}if(S.done)return n(u,b),pt&&pr(u,P),C;if(b===null){for(;!S.done;P++,S=x.next())S=f(u,S.value,M),S!==null&&(v=s(S,v,P),A===null?C=S:A.sibling=S,A=S);return pt&&pr(u,P),C}for(b=i(u,b);!S.done;P++,S=x.next())S=g(b,u,P,S.value,M),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?P:S.key),v=s(S,v,P),A===null?C=S:A.sibling=S,A=S);return t&&b.forEach(function($){return e(u,$)}),pt&&pr(u,P),C}function m(u,v,x,M){if(typeof x=="object"&&x!==null&&x.type===ns&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case $a:e:{for(var C=x.key,A=v;A!==null;){if(A.key===C){if(C=x.type,C===ns){if(A.tag===7){n(u,A.sibling),v=r(A,x.props.children),v.return=u,u=v;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ii&&lf(C)===A.type){n(u,A.sibling),v=r(A,x.props),v.ref=Ys(u,A,x),v.return=u,u=v;break e}n(u,A);break}else e(u,A);A=A.sibling}x.type===ns?(v=Tr(x.props.children,u.mode,M,x.key),v.return=u,u=v):(M=Xo(x.type,x.key,x.props,null,u.mode,M),M.ref=Ys(u,v,x),M.return=u,u=M)}return a(u);case ts:e:{for(A=x.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(u,v.sibling),v=r(v,x.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Tc(x,u.mode,M),v.return=u,u=v}return a(u);case Ii:return A=x._init,m(u,v,A(x._payload),M)}if(ia(x))return _(u,v,x,M);if(Vs(x))return y(u,v,x,M);ro(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,x),v.return=u,u=v):(n(u,v),v=wc(x,u.mode,M),v.return=u,u=v),a(u)):n(u,v)}return m}var As=C0(!0),N0=C0(!1),ol=ir(null),ll=null,us=null,Id=null;function Dd(){Id=us=ll=null}function Ud(t){var e=ol.current;ut(ol),t._currentValue=e}function Ou(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function _s(t,e){ll=t,Id=us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if(Id!==t)if(t={context:t,memoizedValue:e,next:null},us===null){if(ll===null)throw Error(ae(308));us=t,ll.dependencies={lanes:0,firstContext:t}}else us=us.next=t;return e}var Sr=null;function Od(t){Sr===null?Sr=[t]:Sr.push(t)}function L0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Od(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ei(t,i)}function Ei(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Di=!1;function Fd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function P0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ei(t,n)}return r=i.interleaved,r===null?(e.next=e,Od(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ei(t,n)}function Bo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Md(t,n)}}function cf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cl(t,e,n,i){var r=t.updateQueue;Di=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,d=c=l=null,o=s;do{var p=o.lane,g=o.eventTime;if((i&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,y=o;switch(p=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(g,f,p);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,p=typeof _=="function"?_.call(g,f,p):_,p==null)break e;f=_t({},f,p);break e;case 2:Di=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else g={eventTime:g,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=g,l=f):d=d.next=g,a|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Lr|=a,t.lanes=a,t.memoizedState=f}}function uf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var Ba={},ii=ir(Ba),Ra=ir(Ba),Ca=ir(Ba);function Mr(t){if(t===Ba)throw Error(ae(174));return t}function kd(t,e){switch(at(Ca,e),at(Ra,t),at(ii,Ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gu(e,t)}ut(ii),at(ii,e)}function Rs(){ut(ii),ut(Ra),ut(Ca)}function I0(t){Mr(Ca.current);var e=Mr(ii.current),n=gu(e,t.type);e!==n&&(at(Ra,t),at(ii,n))}function zd(t){Ra.current===t&&(ut(ii),ut(Ra))}var gt=ir(0);function ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vc=[];function Bd(){for(var t=0;t<vc.length;t++)vc[t]._workInProgressVersionPrimary=null;vc.length=0}var Go=Ti.ReactCurrentDispatcher,_c=Ti.ReactCurrentBatchConfig,Nr=0,xt=null,At=null,Dt=null,dl=!1,da=!1,Na=0,v_=0;function jt(){throw Error(ae(321))}function Gd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function Hd(t,e,n,i,r,s){if(Nr=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Go.current=t===null||t.memoizedState===null?M_:E_,t=n(i,r),da){s=0;do{if(da=!1,Na=0,25<=s)throw Error(ae(301));s+=1,Dt=At=null,e.updateQueue=null,Go.current=w_,t=n(i,r)}while(da)}if(Go.current=hl,e=At!==null&&At.next!==null,Nr=0,Dt=At=xt=null,dl=!1,e)throw Error(ae(300));return t}function Vd(){var t=Na!==0;return Na=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?xt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Un(){if(At===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Dt===null?xt.memoizedState:Dt.next;if(e!==null)Dt=e,At=t;else{if(t===null)throw Error(ae(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Dt===null?xt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function La(t,e){return typeof e=="function"?e(t):e}function yc(t){var e=Un(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((Nr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,xt.lanes|=d,Lr|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,$n(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,xt.lanes|=s,Lr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Sc(t){var e=Un(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);$n(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function D0(){}function U0(t,e){var n=xt,i=Un(),r=e(),s=!$n(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,jd(k0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,Pa(9,F0.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(ae(349));Nr&30||O0(n,e,r)}return r}function O0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function F0(t,e,n,i){e.value=n,e.getSnapshot=i,z0(e)&&B0(t)}function k0(t,e,n){return n(function(){z0(e)&&B0(t)})}function z0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function B0(t){var e=Ei(t,1);e!==null&&Xn(e,t,1,-1)}function df(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:t},e.queue=t,t=t.dispatch=S_.bind(null,xt,t),[e.memoizedState,t]}function Pa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function G0(){return Un().memoizedState}function Ho(t,e,n,i){var r=Kn();xt.flags|=t,r.memoizedState=Pa(1|e,n,void 0,i===void 0?null:i)}function Il(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(At!==null){var a=At.memoizedState;if(s=a.destroy,i!==null&&Gd(i,a.deps)){r.memoizedState=Pa(e,n,s,i);return}}xt.flags|=t,r.memoizedState=Pa(1|e,n,s,i)}function hf(t,e){return Ho(8390656,8,t,e)}function jd(t,e){return Il(2048,8,t,e)}function H0(t,e){return Il(4,2,t,e)}function V0(t,e){return Il(4,4,t,e)}function j0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function W0(t,e,n){return n=n!=null?n.concat([t]):null,Il(4,4,j0.bind(null,e,t),n)}function Wd(){}function X0(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Gd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function $0(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Gd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Y0(t,e,n){return Nr&21?($n(n,e)||(n=Jm(),xt.lanes|=n,Lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function __(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=_c.transition;_c.transition={};try{t(!1),e()}finally{nt=n,_c.transition=i}}function q0(){return Un().memoizedState}function y_(t,e,n){var i=$i(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},K0(t))Z0(e,n);else if(n=L0(t,e,n,i),n!==null){var r=nn();Xn(n,t,i,r),Q0(n,e,i)}}function S_(t,e,n){var i=$i(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(K0(t))Z0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,$n(o,a)){var l=e.interleaved;l===null?(r.next=r,Od(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=L0(t,e,r,i),n!==null&&(r=nn(),Xn(n,t,i,r),Q0(n,e,i))}}function K0(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function Z0(t,e){da=dl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Q0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Md(t,n)}}var hl={readContext:Dn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},M_={readContext:Dn,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:hf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ho(4194308,4,j0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ho(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ho(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Kn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=y_.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:df,useDebugValue:Wd,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=df(!1),e=t[0];return t=__.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=Kn();if(pt){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Ot===null)throw Error(ae(349));Nr&30||O0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,hf(k0.bind(null,i,s,t),[t]),i.flags|=2048,Pa(9,F0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Kn(),e=Ot.identifierPrefix;if(pt){var n=vi,i=xi;n=(i&~(1<<32-Wn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Na++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=v_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},E_={readContext:Dn,useCallback:X0,useContext:Dn,useEffect:jd,useImperativeHandle:W0,useInsertionEffect:H0,useLayoutEffect:V0,useMemo:$0,useReducer:yc,useRef:G0,useState:function(){return yc(La)},useDebugValue:Wd,useDeferredValue:function(t){var e=Un();return Y0(e,At.memoizedState,t)},useTransition:function(){var t=yc(La)[0],e=Un().memoizedState;return[t,e]},useMutableSource:D0,useSyncExternalStore:U0,useId:q0,unstable_isNewReconciler:!1},w_={readContext:Dn,useCallback:X0,useContext:Dn,useEffect:jd,useImperativeHandle:W0,useInsertionEffect:H0,useLayoutEffect:V0,useMemo:$0,useReducer:Sc,useRef:G0,useState:function(){return Sc(La)},useDebugValue:Wd,useDeferredValue:function(t){var e=Un();return At===null?e.memoizedState=t:Y0(e,At.memoizedState,t)},useTransition:function(){var t=Sc(La)[0],e=Un().memoizedState;return[t,e]},useMutableSource:D0,useSyncExternalStore:U0,useId:q0,unstable_isNewReconciler:!1};function Bn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Fu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dl={isMounted:function(t){return(t=t._reactInternals)?Ur(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=$i(t),s=yi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Wi(t,s,r),e!==null&&(Xn(e,t,r,i),Bo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=$i(t),s=yi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Wi(t,s,r),e!==null&&(Xn(e,t,r,i),Bo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=$i(t),r=yi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Wi(t,r,i),e!==null&&(Xn(e,t,i,n),Bo(e,t,i))}};function ff(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!wa(n,i)||!wa(r,s):!0}function J0(t,e,n){var i=!1,r=Ji,s=e.contextType;return typeof s=="object"&&s!==null?s=Dn(s):(r=dn(e)?Rr:qt.current,i=e.contextTypes,s=(i=i!=null)?Ts(t,r):Ji),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function pf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Dl.enqueueReplaceState(e,e.state,null)}function ku(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Fd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Dn(s):(s=dn(e)?Rr:qt.current,r.context=Ts(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Fu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Dl.enqueueReplaceState(r,r.state,null),cl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Cs(t,e){try{var n="",i=e;do n+=Qx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Mc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var T_=typeof WeakMap=="function"?WeakMap:Map;function eg(t,e,n){n=yi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){pl||(pl=!0,qu=i),zu(t,e)},n}function tg(t,e,n){n=yi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){zu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zu(t,e),typeof i!="function"&&(Xi===null?Xi=new Set([this]):Xi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function mf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new T_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=z_.bind(null,t,e,n),e.then(t,t))}function gf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yi(-1,1),e.tag=2,Wi(n,e,1))),n.lanes|=1),t)}var b_=Ti.ReactCurrentOwner,cn=!1;function Jt(t,e,n,i){e.child=t===null?N0(e,null,n,i):As(e,t.child,n,i)}function vf(t,e,n,i,r){n=n.render;var s=e.ref;return _s(e,r),i=Hd(t,e,n,i,s,r),n=Vd(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(pt&&n&&Nd(e),e.flags|=1,Jt(t,e,i,r),e.child)}function _f(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Jd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ng(t,e,s,i,r)):(t=Xo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:wa,n(a,i)&&t.ref===e.ref)return wi(t,e,r)}return e.flags|=1,t=Yi(s,i),t.ref=e.ref,t.return=e,e.child=t}function ng(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(wa(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,wi(t,e,r)}return Bu(t,e,n,i,r)}function ig(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(hs,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(hs,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,at(hs,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,at(hs,_n),_n|=i;return Jt(t,e,r,n),e.child}function rg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bu(t,e,n,i,r){var s=dn(n)?Rr:qt.current;return s=Ts(e,s),_s(e,r),n=Hd(t,e,n,i,s,r),i=Vd(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(pt&&i&&Nd(e),e.flags|=1,Jt(t,e,n,r),e.child)}function yf(t,e,n,i,r){if(dn(n)){var s=!0;rl(e)}else s=!1;if(_s(e,r),e.stateNode===null)Vo(t,e),J0(e,n,i),ku(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Dn(c):(c=dn(n)?Rr:qt.current,c=Ts(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&pf(e,a,i,c),Di=!1;var p=e.memoizedState;a.state=p,cl(e,i,a,r),l=e.memoizedState,o!==i||p!==l||un.current||Di?(typeof d=="function"&&(Fu(e,n,d,i),l=e.memoizedState),(o=Di||ff(e,n,o,i,p,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,P0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Bn(e.type,o),a.props=c,f=e.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=dn(n)?Rr:qt.current,l=Ts(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||p!==l)&&pf(e,a,i,l),Di=!1,p=e.memoizedState,a.state=p,cl(e,i,a,r);var _=e.memoizedState;o!==f||p!==_||un.current||Di?(typeof g=="function"&&(Fu(e,n,g,i),_=e.memoizedState),(c=Di||ff(e,n,c,i,p,_,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return Gu(t,e,n,i,s,r)}function Gu(t,e,n,i,r,s){rg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&sf(e,n,!1),wi(t,e,s);i=e.stateNode,b_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=As(e,t.child,null,s),e.child=As(e,null,o,s)):Jt(t,e,o,s),e.memoizedState=i.state,r&&sf(e,n,!0),e.child}function sg(t){var e=t.stateNode;e.pendingContext?rf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rf(t,e.context,!1),kd(t,e.containerInfo)}function Sf(t,e,n,i,r){return bs(),Pd(r),e.flags|=256,Jt(t,e,n,i),e.child}var Hu={dehydrated:null,treeContext:null,retryLane:0};function Vu(t){return{baseLanes:t,cachePool:null,transitions:null}}function ag(t,e,n){var i=e.pendingProps,r=gt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(gt,r&1),t===null)return Uu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Fl(a,i,0,null),t=Tr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vu(n),e.memoizedState=Hu,t):Xd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return A_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Yi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Yi(o,s):(s=Tr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Vu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Hu,i}return s=t.child,t=s.sibling,i=Yi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Xd(t,e){return e=Fl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function so(t,e,n,i){return i!==null&&Pd(i),As(e,t.child,null,n),t=Xd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function A_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Mc(Error(ae(422))),so(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Fl({mode:"visible",children:i.children},r,0,null),s=Tr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&As(e,t.child,null,a),e.child.memoizedState=Vu(a),e.memoizedState=Hu,s);if(!(e.mode&1))return so(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ae(419)),i=Mc(s,i,void 0),so(t,e,a,i)}if(o=(a&t.childLanes)!==0,cn||o){if(i=Ot,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ei(t,r),Xn(i,t,r,-1))}return Qd(),i=Mc(Error(ae(421))),so(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=B_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Sn=ji(r.nextSibling),Mn=e,pt=!0,Hn=null,t!==null&&(Cn[Nn++]=xi,Cn[Nn++]=vi,Cn[Nn++]=Cr,xi=t.id,vi=t.overflow,Cr=e),e=Xd(e,i.children),e.flags|=4096,e)}function Mf(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ou(t.return,e,n)}function Ec(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function og(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Jt(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mf(t,n,e);else if(t.tag===19)Mf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ul(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ec(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ul(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ec(e,!0,n,null,s);break;case"together":Ec(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Vo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=Yi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function R_(t,e,n){switch(e.tag){case 3:sg(e),bs();break;case 5:I0(e);break;case 1:dn(e.type)&&rl(e);break;case 4:kd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(ol,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?ag(t,e,n):(at(gt,gt.current&1),t=wi(t,e,n),t!==null?t.sibling:null);at(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return og(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,ig(t,e,n)}return wi(t,e,n)}var lg,ju,cg,ug;lg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ju=function(){};cg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Mr(ii.current);var s=null;switch(n){case"input":r=hu(t,r),i=hu(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=mu(t,r),i=mu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=nl)}xu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ot("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};ug=function(t,e,n,i){n!==i&&(e.flags|=4)};function qs(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function C_(t,e,n){var i=e.pendingProps;switch(Ld(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return dn(e.type)&&il(),Wt(e),null;case 3:return i=e.stateNode,Rs(),ut(un),ut(qt),Bd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(io(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(Qu(Hn),Hn=null))),ju(t,e),Wt(e),null;case 5:zd(e);var r=Mr(Ca.current);if(n=e.type,t!==null&&e.stateNode!=null)cg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Wt(e),null}if(t=Mr(ii.current),io(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ei]=e,i[Aa]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<sa.length;r++)ot(sa[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":Nh(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":Ph(i,s),ot("invalid",i)}xu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&no(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&no(i.textContent,o,t),r=["children",""+o]):xa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ot("scroll",i)}switch(n){case"input":Ya(i),Lh(i,s,!0);break;case"textarea":Ya(i),Ih(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=nl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=km(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ei]=e,t[Aa]=i,lg(t,e,!1,!1),e.stateNode=t;e:{switch(a=vu(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<sa.length;r++)ot(sa[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":Nh(t,i),r=hu(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),ot("invalid",t);break;case"textarea":Ph(t,i),r=mu(t,i),ot("invalid",t);break;default:r=i}xu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Gm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&va(t,l):typeof l=="number"&&va(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",t):l!=null&&gd(t,s,l,a))}switch(n){case"input":Ya(t),Lh(t,i,!1);break;case"textarea":Ya(t),Ih(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Qi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ms(t,!!i.multiple,s,!1):i.defaultValue!=null&&ms(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=nl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(t&&e.stateNode!=null)ug(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=Mr(Ca.current),Mr(ii.current),io(e)){if(i=e.stateNode,n=e.memoizedProps,i[ei]=e,(s=i.nodeValue!==n)&&(t=Mn,t!==null))switch(t.tag){case 3:no(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&no(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ei]=e,e.stateNode=i}return Wt(e),null;case 13:if(ut(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&Sn!==null&&e.mode&1&&!(e.flags&128))R0(),bs(),e.flags|=98560,s=!1;else if(s=io(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[ei]=e}else bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),s=!1}else Hn!==null&&(Qu(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Rt===0&&(Rt=3):Qd())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return Rs(),ju(t,e),t===null&&Ta(e.stateNode.containerInfo),Wt(e),null;case 10:return Ud(e.type._context),Wt(e),null;case 17:return dn(e.type)&&il(),Wt(e),null;case 19:if(ut(gt),s=e.memoizedState,s===null)return Wt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)qs(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=ul(t),a!==null){for(e.flags|=128,qs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(gt,gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&wt()>Ns&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304)}else{if(!i)if(t=ul(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!pt)return Wt(e),null}else 2*wt()-s.renderingStartTime>Ns&&n!==1073741824&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=wt(),e.sibling=null,n=gt.current,at(gt,i?n&1|2:n&1),e):(Wt(e),null);case 22:case 23:return Zd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function N_(t,e){switch(Ld(e),e.tag){case 1:return dn(e.type)&&il(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Rs(),ut(un),ut(qt),Bd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zd(e),null;case 13:if(ut(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(gt),null;case 4:return Rs(),null;case 10:return Ud(e.type._context),null;case 22:case 23:return Zd(),null;case 24:return null;default:return null}}var ao=!1,Yt=!1,L_=typeof WeakSet=="function"?WeakSet:Set,_e=null;function ds(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function Wu(t,e,n){try{n()}catch(i){Mt(t,e,i)}}var Ef=!1;function P_(t,e){if(Ru=Jo,t=m0(),Cd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,f=t,p=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===t)break t;if(p===n&&++c===r&&(o=a),p===s&&++d===i&&(l=a),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cu={focusedElem:t,selectionRange:n},Jo=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Bn(e.type,y),m);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(M){Mt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return _=Ef,Ef=!1,_}function ha(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Wu(e,n,s)}r=r.next}while(r!==i)}}function Ul(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Xu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function dg(t){var e=t.alternate;e!==null&&(t.alternate=null,dg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ei],delete e[Aa],delete e[Pu],delete e[p_],delete e[m_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hg(t){return t.tag===5||t.tag===3||t.tag===4}function wf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $u(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nl));else if(i!==4&&(t=t.child,t!==null))for($u(t,e,n),t=t.sibling;t!==null;)$u(t,e,n),t=t.sibling}function Yu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Yu(t,e,n),t=t.sibling;t!==null;)Yu(t,e,n),t=t.sibling}var kt=null,Gn=!1;function bi(t,e,n){for(n=n.child;n!==null;)fg(t,e,n),n=n.sibling}function fg(t,e,n){if(ni&&typeof ni.onCommitFiberUnmount=="function")try{ni.onCommitFiberUnmount(Al,n)}catch{}switch(n.tag){case 5:Yt||ds(n,e);case 6:var i=kt,r=Gn;kt=null,bi(t,e,n),kt=i,Gn=r,kt!==null&&(Gn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Gn?(t=kt,n=n.stateNode,t.nodeType===8?gc(t.parentNode,n):t.nodeType===1&&gc(t,n),Ma(t)):gc(kt,n.stateNode));break;case 4:i=kt,r=Gn,kt=n.stateNode.containerInfo,Gn=!0,bi(t,e,n),kt=i,Gn=r;break;case 0:case 11:case 14:case 15:if(!Yt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Wu(n,e,a),r=r.next}while(r!==i)}bi(t,e,n);break;case 1:if(!Yt&&(ds(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Mt(n,e,o)}bi(t,e,n);break;case 21:bi(t,e,n);break;case 22:n.mode&1?(Yt=(i=Yt)||n.memoizedState!==null,bi(t,e,n),Yt=i):bi(t,e,n);break;default:bi(t,e,n)}}function Tf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new L_),e.forEach(function(i){var r=G_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:kt=o.stateNode,Gn=!1;break e;case 3:kt=o.stateNode.containerInfo,Gn=!0;break e;case 4:kt=o.stateNode.containerInfo,Gn=!0;break e}o=o.return}if(kt===null)throw Error(ae(160));fg(s,a,r),kt=null,Gn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)pg(e,t),e=e.sibling}function pg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),qn(t),i&4){try{ha(3,t,t.return),Ul(3,t)}catch(y){Mt(t,t.return,y)}try{ha(5,t,t.return)}catch(y){Mt(t,t.return,y)}}break;case 1:On(e,t),qn(t),i&512&&n!==null&&ds(n,n.return);break;case 5:if(On(e,t),qn(t),i&512&&n!==null&&ds(n,n.return),t.flags&32){var r=t.stateNode;try{va(r,"")}catch(y){Mt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Om(r,s),vu(o,a);var c=vu(o,s);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?Gm(r,f):d==="dangerouslySetInnerHTML"?zm(r,f):d==="children"?va(r,f):gd(r,d,f,c)}switch(o){case"input":fu(r,s);break;case"textarea":Fm(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ms(r,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?ms(r,!!s.multiple,s.defaultValue,!0):ms(r,!!s.multiple,s.multiple?[]:"",!1))}r[Aa]=s}catch(y){Mt(t,t.return,y)}}break;case 6:if(On(e,t),qn(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Mt(t,t.return,y)}}break;case 3:if(On(e,t),qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ma(e.containerInfo)}catch(y){Mt(t,t.return,y)}break;case 4:On(e,t),qn(t);break;case 13:On(e,t),qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(qd=wt())),i&4&&Tf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Yt=(c=Yt)||d,On(e,t),Yt=c):On(e,t),qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(_e=t,d=t.child;d!==null;){for(f=_e=d;_e!==null;){switch(p=_e,g=p.child,p.tag){case 0:case 11:case 14:case 15:ha(4,p,p.return);break;case 1:ds(p,p.return);var _=p.stateNode;if(typeof _.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){Mt(i,n,y)}}break;case 5:ds(p,p.return);break;case 22:if(p.memoizedState!==null){Af(f);continue}}g!==null?(g.return=p,_e=g):Af(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Bm("display",a))}catch(y){Mt(t,t.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){Mt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:On(e,t),qn(t),i&4&&Tf(t);break;case 21:break;default:On(e,t),qn(t)}}function qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(hg(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(va(r,""),i.flags&=-33);var s=wf(t);Yu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=wf(t);$u(t,o,a);break;default:throw Error(ae(161))}}catch(l){Mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function I_(t,e,n){_e=t,mg(t)}function mg(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||ao;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Yt;o=ao;var c=Yt;if(ao=a,(Yt=l)&&!c)for(_e=r;_e!==null;)a=_e,l=a.child,a.tag===22&&a.memoizedState!==null?Rf(r):l!==null?(l.return=a,_e=l):Rf(r);for(;s!==null;)_e=s,mg(s),s=s.sibling;_e=r,ao=o,Yt=c}bf(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):bf(t)}}function bf(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||Ul(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&uf(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}uf(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ma(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}Yt||e.flags&512&&Xu(e)}catch(p){Mt(e,e.return,p)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Af(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Rf(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ul(4,e)}catch(l){Mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{Xu(e)}catch(l){Mt(e,s,l)}break;case 5:var a=e.return;try{Xu(e)}catch(l){Mt(e,a,l)}}}catch(l){Mt(e,e.return,l)}if(e===t){_e=null;break}var o=e.sibling;if(o!==null){o.return=e.return,_e=o;break}_e=e.return}}var D_=Math.ceil,fl=Ti.ReactCurrentDispatcher,$d=Ti.ReactCurrentOwner,In=Ti.ReactCurrentBatchConfig,Je=0,Ot=null,bt=null,zt=0,_n=0,hs=ir(0),Rt=0,Ia=null,Lr=0,Ol=0,Yd=0,fa=null,ln=null,qd=0,Ns=1/0,hi=null,pl=!1,qu=null,Xi=null,oo=!1,zi=null,ml=0,pa=0,Ku=null,jo=-1,Wo=0;function nn(){return Je&6?wt():jo!==-1?jo:jo=wt()}function $i(t){return t.mode&1?Je&2&&zt!==0?zt&-zt:x_.transition!==null?(Wo===0&&(Wo=Jm()),Wo):(t=nt,t!==0||(t=window.event,t=t===void 0?16:a0(t.type)),t):1}function Xn(t,e,n,i){if(50<pa)throw pa=0,Ku=null,Error(ae(185));Fa(t,n,i),(!(Je&2)||t!==Ot)&&(t===Ot&&(!(Je&2)&&(Ol|=n),Rt===4&&Oi(t,zt)),hn(t,i),n===1&&Je===0&&!(e.mode&1)&&(Ns=wt()+500,Pl&&rr()))}function hn(t,e){var n=t.callbackNode;xv(t,e);var i=Qo(t,t===Ot?zt:0);if(i===0)n!==null&&Oh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Oh(n),e===1)t.tag===0?g_(Cf.bind(null,t)):T0(Cf.bind(null,t)),h_(function(){!(Je&6)&&rr()}),n=null;else{switch(e0(i)){case 1:n=Sd;break;case 4:n=Zm;break;case 16:n=Zo;break;case 536870912:n=Qm;break;default:n=Zo}n=Eg(n,gg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function gg(t,e){if(jo=-1,Wo=0,Je&6)throw Error(ae(327));var n=t.callbackNode;if(ys()&&t.callbackNode!==n)return null;var i=Qo(t,t===Ot?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=gl(t,i);else{e=i;var r=Je;Je|=2;var s=vg();(Ot!==t||zt!==e)&&(hi=null,Ns=wt()+500,wr(t,e));do try{F_();break}catch(o){xg(t,o)}while(!0);Dd(),fl.current=s,Je=r,bt!==null?e=0:(Ot=null,zt=0,e=Rt)}if(e!==0){if(e===2&&(r=Eu(t),r!==0&&(i=r,e=Zu(t,r))),e===1)throw n=Ia,wr(t,0),Oi(t,i),hn(t,wt()),n;if(e===6)Oi(t,i);else{if(r=t.current.alternate,!(i&30)&&!U_(r)&&(e=gl(t,i),e===2&&(s=Eu(t),s!==0&&(i=s,e=Zu(t,s))),e===1))throw n=Ia,wr(t,0),Oi(t,i),hn(t,wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:mr(t,ln,hi);break;case 3:if(Oi(t,i),(i&130023424)===i&&(e=qd+500-wt(),10<e)){if(Qo(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Lu(mr.bind(null,t,ln,hi),e);break}mr(t,ln,hi);break;case 4:if(Oi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Wn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*D_(i/1960))-i,10<i){t.timeoutHandle=Lu(mr.bind(null,t,ln,hi),i);break}mr(t,ln,hi);break;case 5:mr(t,ln,hi);break;default:throw Error(ae(329))}}}return hn(t,wt()),t.callbackNode===n?gg.bind(null,t):null}function Zu(t,e){var n=fa;return t.current.memoizedState.isDehydrated&&(wr(t,e).flags|=256),t=gl(t,e),t!==2&&(e=ln,ln=n,e!==null&&Qu(e)),t}function Qu(t){ln===null?ln=t:ln.push.apply(ln,t)}function U_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!$n(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Oi(t,e){for(e&=~Yd,e&=~Ol,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wn(e),i=1<<n;t[n]=-1,e&=~i}}function Cf(t){if(Je&6)throw Error(ae(327));ys();var e=Qo(t,0);if(!(e&1))return hn(t,wt()),null;var n=gl(t,e);if(t.tag!==0&&n===2){var i=Eu(t);i!==0&&(e=i,n=Zu(t,i))}if(n===1)throw n=Ia,wr(t,0),Oi(t,e),hn(t,wt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,mr(t,ln,hi),hn(t,wt()),null}function Kd(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Ns=wt()+500,Pl&&rr())}}function Pr(t){zi!==null&&zi.tag===0&&!(Je&6)&&ys();var e=Je;Je|=1;var n=In.transition,i=nt;try{if(In.transition=null,nt=1,t)return t()}finally{nt=i,In.transition=n,Je=e,!(Je&6)&&rr()}}function Zd(){_n=hs.current,ut(hs)}function wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,d_(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(Ld(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&il();break;case 3:Rs(),ut(un),ut(qt),Bd();break;case 5:zd(i);break;case 4:Rs();break;case 13:ut(gt);break;case 19:ut(gt);break;case 10:Ud(i.type._context);break;case 22:case 23:Zd()}n=n.return}if(Ot=t,bt=t=Yi(t.current,null),zt=_n=e,Rt=0,Ia=null,Yd=Ol=Lr=0,ln=fa=null,Sr!==null){for(e=0;e<Sr.length;e++)if(n=Sr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Sr=null}return t}function xg(t,e){do{var n=bt;try{if(Dd(),Go.current=hl,dl){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}dl=!1}if(Nr=0,Dt=At=xt=null,da=!1,Na=0,$d.current=null,n===null||n.return===null){Rt=1,Ia=e,bt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=zt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=gf(a);if(g!==null){g.flags&=-257,xf(g,a,o,s,e),g.mode&1&&mf(s,c,e),e=g,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){mf(s,c,e),Qd();break e}l=Error(ae(426))}}else if(pt&&o.mode&1){var m=gf(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),xf(m,a,o,s,e),Pd(Cs(l,o));break e}}s=l=Cs(l,o),Rt!==4&&(Rt=2),fa===null?fa=[s]:fa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=eg(s,l,e);cf(s,u);break e;case 1:o=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Xi===null||!Xi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=tg(s,o,e);cf(s,M);break e}}s=s.return}while(s!==null)}yg(n)}catch(C){e=C,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function vg(){var t=fl.current;return fl.current=hl,t===null?hl:t}function Qd(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Ot===null||!(Lr&268435455)&&!(Ol&268435455)||Oi(Ot,zt)}function gl(t,e){var n=Je;Je|=2;var i=vg();(Ot!==t||zt!==e)&&(hi=null,wr(t,e));do try{O_();break}catch(r){xg(t,r)}while(!0);if(Dd(),Je=n,fl.current=i,bt!==null)throw Error(ae(261));return Ot=null,zt=0,Rt}function O_(){for(;bt!==null;)_g(bt)}function F_(){for(;bt!==null&&!lv();)_g(bt)}function _g(t){var e=Mg(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?yg(t):bt=e,$d.current=null}function yg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=N_(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,bt=null;return}}else if(n=C_(n,e,_n),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);Rt===0&&(Rt=5)}function mr(t,e,n){var i=nt,r=In.transition;try{In.transition=null,nt=1,k_(t,e,n,i)}finally{In.transition=r,nt=i}return null}function k_(t,e,n,i){do ys();while(zi!==null);if(Je&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(vv(t,s),t===Ot&&(bt=Ot=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oo||(oo=!0,Eg(Zo,function(){return ys(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var a=nt;nt=1;var o=Je;Je|=4,$d.current=null,P_(t,n),pg(n,t),r_(Cu),Jo=!!Ru,Cu=Ru=null,t.current=n,I_(n),cv(),Je=o,nt=a,In.transition=s}else t.current=n;if(oo&&(oo=!1,zi=t,ml=r),s=t.pendingLanes,s===0&&(Xi=null),hv(n.stateNode),hn(t,wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(pl)throw pl=!1,t=qu,qu=null,t;return ml&1&&t.tag!==0&&ys(),s=t.pendingLanes,s&1?t===Ku?pa++:(pa=0,Ku=t):pa=0,rr(),null}function ys(){if(zi!==null){var t=e0(ml),e=In.transition,n=nt;try{if(In.transition=null,nt=16>t?16:t,zi===null)var i=!1;else{if(t=zi,zi=null,ml=0,Je&6)throw Error(ae(331));var r=Je;for(Je|=4,_e=t.current;_e!==null;){var s=_e,a=s.child;if(_e.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(_e=c;_e!==null;){var d=_e;switch(d.tag){case 0:case 11:case 15:ha(8,d,s)}var f=d.child;if(f!==null)f.return=d,_e=f;else for(;_e!==null;){d=_e;var p=d.sibling,g=d.return;if(dg(d),d===c){_e=null;break}if(p!==null){p.return=g,_e=p;break}_e=g}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}_e=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,_e=a;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ha(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,_e=u;break e}_e=s.return}}var v=t.current;for(_e=v;_e!==null;){a=_e;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,_e=x;else e:for(a=v;_e!==null;){if(o=_e,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ul(9,o)}}catch(C){Mt(o,o.return,C)}if(o===a){_e=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,_e=M;break e}_e=o.return}}if(Je=r,rr(),ni&&typeof ni.onPostCommitFiberRoot=="function")try{ni.onPostCommitFiberRoot(Al,t)}catch{}i=!0}return i}finally{nt=n,In.transition=e}}return!1}function Nf(t,e,n){e=Cs(n,e),e=eg(t,e,1),t=Wi(t,e,1),e=nn(),t!==null&&(Fa(t,1,e),hn(t,e))}function Mt(t,e,n){if(t.tag===3)Nf(t,t,n);else for(;e!==null;){if(e.tag===3){Nf(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Xi===null||!Xi.has(i))){t=Cs(n,t),t=tg(e,t,1),e=Wi(e,t,1),t=nn(),e!==null&&(Fa(e,1,t),hn(e,t));break}}e=e.return}}function z_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(zt&n)===n&&(Rt===4||Rt===3&&(zt&130023424)===zt&&500>wt()-qd?wr(t,0):Yd|=n),hn(t,e)}function Sg(t,e){e===0&&(t.mode&1?(e=Za,Za<<=1,!(Za&130023424)&&(Za=4194304)):e=1);var n=nn();t=Ei(t,e),t!==null&&(Fa(t,e,n),hn(t,n))}function B_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Sg(t,n)}function G_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),Sg(t,n)}var Mg;Mg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,R_(t,e,n);cn=!!(t.flags&131072)}else cn=!1,pt&&e.flags&1048576&&b0(e,al,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Vo(t,e),t=e.pendingProps;var r=Ts(e,qt.current);_s(e,n),r=Hd(null,e,i,t,r,n);var s=Vd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(i)?(s=!0,rl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Fd(e),r.updater=Dl,e.stateNode=r,r._reactInternals=e,ku(e,i,t,n),e=Gu(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&Nd(e),Jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Vo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=V_(i),t=Bn(i,t),r){case 0:e=Bu(null,e,i,t,n);break e;case 1:e=yf(null,e,i,t,n);break e;case 11:e=vf(null,e,i,t,n);break e;case 14:e=_f(null,e,i,Bn(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Bu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),yf(t,e,i,r,n);case 3:e:{if(sg(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,P0(t,e),cl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Cs(Error(ae(423)),e),e=Sf(t,e,i,n,r);break e}else if(i!==r){r=Cs(Error(ae(424)),e),e=Sf(t,e,i,n,r);break e}else for(Sn=ji(e.stateNode.containerInfo.firstChild),Mn=e,pt=!0,Hn=null,n=N0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bs(),i===r){e=wi(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 5:return I0(e),t===null&&Uu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Nu(i,r)?a=null:s!==null&&Nu(i,s)&&(e.flags|=32),rg(t,e),Jt(t,e,a,n),e.child;case 6:return t===null&&Uu(e),null;case 13:return ag(t,e,n);case 4:return kd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=As(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),vf(t,e,i,r,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,at(ol,i._currentValue),i._currentValue=a,s!==null)if($n(s.value,a)){if(s.children===r.children&&!un.current){e=wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=yi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ou(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ae(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Ou(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,_s(e,n),r=Dn(r),i=i(r),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return i=e.type,r=Bn(i,e.pendingProps),r=Bn(i.type,r),_f(t,e,i,r,n);case 15:return ng(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Vo(t,e),e.tag=1,dn(i)?(t=!0,rl(e)):t=!1,_s(e,n),J0(e,i,r),ku(e,i,r,n),Gu(null,e,i,!0,t,n);case 19:return og(t,e,n);case 22:return ig(t,e,n)}throw Error(ae(156,e.tag))};function Eg(t,e){return Km(t,e)}function H_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(t,e,n,i){return new H_(t,e,n,i)}function Jd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function V_(t){if(typeof t=="function")return Jd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vd)return 11;if(t===_d)return 14}return 2}function Yi(t,e){var n=t.alternate;return n===null?(n=Pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Jd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ns:return Tr(n.children,r,s,e);case xd:a=8,r|=8;break;case lu:return t=Pn(12,n,e,r|2),t.elementType=lu,t.lanes=s,t;case cu:return t=Pn(13,n,e,r),t.elementType=cu,t.lanes=s,t;case uu:return t=Pn(19,n,e,r),t.elementType=uu,t.lanes=s,t;case Im:return Fl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Lm:a=10;break e;case Pm:a=9;break e;case vd:a=11;break e;case _d:a=14;break e;case Ii:a=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Pn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Tr(t,e,n,i){return t=Pn(7,t,i,e),t.lanes=n,t}function Fl(t,e,n,i){return t=Pn(22,t,i,e),t.elementType=Im,t.lanes=n,t.stateNode={isHidden:!1},t}function wc(t,e,n){return t=Pn(6,t,null,e),t.lanes=n,t}function Tc(t,e,n){return e=Pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function j_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sc(0),this.expirationTimes=sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function eh(t,e,n,i,r,s,a,o,l){return t=new j_(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fd(s),t}function W_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ts,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function wg(t){if(!t)return Ji;t=t._reactInternals;e:{if(Ur(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(dn(n))return w0(t,n,e)}return e}function Tg(t,e,n,i,r,s,a,o,l){return t=eh(n,i,!0,t,r,s,a,o,l),t.context=wg(null),n=t.current,i=nn(),r=$i(n),s=yi(i,r),s.callback=e??null,Wi(n,s,r),t.current.lanes=r,Fa(t,r,i),hn(t,i),t}function kl(t,e,n,i){var r=e.current,s=nn(),a=$i(r);return n=wg(n),e.context===null?e.context=n:e.pendingContext=n,e=yi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Wi(r,e,a),t!==null&&(Xn(t,r,a,s),Bo(t,r,a)),a}function xl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function th(t,e){Lf(t,e),(t=t.alternate)&&Lf(t,e)}function X_(){return null}var bg=typeof reportError=="function"?reportError:function(t){console.error(t)};function nh(t){this._internalRoot=t}zl.prototype.render=nh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));kl(t,e,null,null)};zl.prototype.unmount=nh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pr(function(){kl(null,t,null,null)}),e[Mi]=null}};function zl(t){this._internalRoot=t}zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=i0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ui.length&&e!==0&&e<Ui[n].priority;n++);Ui.splice(n,0,t),n===0&&s0(t)}};function ih(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pf(){}function $_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=xl(a);s.call(c)}}var a=Tg(e,i,t,0,null,!1,!1,"",Pf);return t._reactRootContainer=a,t[Mi]=a.current,Ta(t.nodeType===8?t.parentNode:t),Pr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=xl(l);o.call(c)}}var l=eh(t,0,!1,null,null,!1,!1,"",Pf);return t._reactRootContainer=l,t[Mi]=l.current,Ta(t.nodeType===8?t.parentNode:t),Pr(function(){kl(e,l,n,i)}),l}function Gl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=xl(a);o.call(l)}}kl(e,a,t,r)}else a=$_(n,e,t,r,i);return xl(a)}t0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ra(e.pendingLanes);n!==0&&(Md(e,n|1),hn(e,wt()),!(Je&6)&&(Ns=wt()+500,rr()))}break;case 13:Pr(function(){var i=Ei(t,1);if(i!==null){var r=nn();Xn(i,t,1,r)}}),th(t,1)}};Ed=function(t){if(t.tag===13){var e=Ei(t,134217728);if(e!==null){var n=nn();Xn(e,t,134217728,n)}th(t,134217728)}};n0=function(t){if(t.tag===13){var e=$i(t),n=Ei(t,e);if(n!==null){var i=nn();Xn(n,t,e,i)}th(t,e)}};i0=function(){return nt};r0=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};yu=function(t,e,n){switch(e){case"input":if(fu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ll(i);if(!r)throw Error(ae(90));Um(i),fu(i,r)}}}break;case"textarea":Fm(t,n);break;case"select":e=n.value,e!=null&&ms(t,!!n.multiple,e,!1)}};jm=Kd;Wm=Pr;var Y_={usingClientEntryPoint:!1,Events:[za,as,Ll,Hm,Vm,Kd]},Ks={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},q_={bundleType:Ks.bundleType,version:Ks.version,rendererPackageName:Ks.rendererPackageName,rendererConfig:Ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ti.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ym(t),t===null?null:t.stateNode},findFiberByHostInstance:Ks.findFiberByHostInstance||X_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{Al=lo.inject(q_),ni=lo}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y_;wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ih(e))throw Error(ae(200));return W_(t,e,null,n)};wn.createRoot=function(t,e){if(!ih(t))throw Error(ae(299));var n=!1,i="",r=bg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=eh(t,1,!1,null,null,n,!1,i,r),t[Mi]=e.current,Ta(t.nodeType===8?t.parentNode:t),new nh(e)};wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=Ym(e),t=t===null?null:t.stateNode,t};wn.flushSync=function(t){return Pr(t)};wn.hydrate=function(t,e,n){if(!Bl(e))throw Error(ae(200));return Gl(null,t,e,!0,n)};wn.hydrateRoot=function(t,e,n){if(!ih(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=bg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Tg(e,null,t,1,n??null,r,!1,s,a),t[Mi]=e.current,Ta(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new zl(e)};wn.render=function(t,e,n){if(!Bl(e))throw Error(ae(200));return Gl(null,t,e,!1,n)};wn.unmountComponentAtNode=function(t){if(!Bl(t))throw Error(ae(40));return t._reactRootContainer?(Pr(function(){Gl(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1};wn.unstable_batchedUpdates=Kd;wn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Bl(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return Gl(t,e,n,!1,i)};wn.version="18.3.1-next-f1338f8080-20240426";function Ag(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ag)}catch(t){console.error(t)}}Ag(),Am.exports=wn;var K_=Am.exports,If=K_;au.createRoot=If.createRoot,au.hydrateRoot=If.hydrateRoot;class Z_{constructor(){Ue(this,"ctx",null);Ue(this,"enabled",!0);Ue(this,"userInteracted",!1)}initContext(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}enableSound(e){this.enabled=e}isEnabled(){return this.enabled}registerInteraction(){this.userInteracted=!0,this.initContext()}playTone(e,n,i,r=.15,s=0){if(!this.enabled||!this.userInteracted||(this.initContext(),!this.ctx))return;const a=this.ctx.currentTime+s,o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type=n,o.frequency.setValueAtTime(e,a),l.gain.setValueAtTime(.001,a),l.gain.exponentialRampToValueAtTime(r,a+.02),l.gain.exponentialRampToValueAtTime(1e-4,a+i),o.connect(l),l.connect(this.ctx.destination),o.start(a),o.stop(a+i+.05)}playSystemStart(){this.playTone(440,"sine",.12,.2,0),this.playTone(660,"sine",.14,.25,.1),this.playTone(880,"sine",.25,.3,.22)}playAutonomousMode(){this.playTone(523.25,"triangle",.1,.2,0),this.playTone(783.99,"triangle",.2,.25,.08)}playObstacleWarning(){this.playTone(880,"sawtooth",.08,.15,0),this.playTone(700,"sawtooth",.1,.18,.1)}playTrafficLight(){this.playTone(587.33,"sine",.15,.2,0),this.playTone(440,"sine",.2,.2,.15)}playTargetFound(){this.playTone(1046.5,"sine",.08,.2,0),this.playTone(1318.5,"sine",.08,.22,.08),this.playTone(1567.98,"triangle",.25,.25,.16)}playLaserConfirmation(){if(!this.enabled||!this.userInteracted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(220,e),n.frequency.exponentialRampToValueAtTime(440,e+.5),n.frequency.setValueAtTime(440,e+1.8),n.frequency.exponentialRampToValueAtTime(110,e+2),i.gain.setValueAtTime(.01,e),i.gain.linearRampToValueAtTime(.12,e+.1),i.gain.setValueAtTime(.12,e+1.8),i.gain.linearRampToValueAtTime(.001,e+2),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+2.05)}playMissionComplete(){[523.25,659.25,783.99,1046.5].forEach((n,i)=>{this.playTone(n,"triangle",.5,.18,i*.12)}),this.playTone(1046.5,"sine",.8,.25,.6)}playEmergencyStop(){for(let e=0;e<3;e++)this.playTone(950,"sawtooth",.12,.25,e*.18),this.playTone(450,"sawtooth",.1,.25,e*.18+.08)}}const ft=new Z_;class Q_{constructor(){Ue(this,"x",0);Ue(this,"y",0);Ue(this,"z",0);Ue(this,"heading",0);Ue(this,"pitch",0);Ue(this,"roll",0);Ue(this,"speedKmh",0);Ue(this,"steeringAngle",0);Ue(this,"targetSpeedKmh",0);Ue(this,"leftRpm",0);Ue(this,"rightRpm",0);Ue(this,"distanceTraveledM",0);Ue(this,"batteryPct",87);Ue(this,"laserActive",!1);Ue(this,"laserTimerSec",0);Ue(this,"laserTargetPos");Ue(this,"missionState","IDLE");Ue(this,"isAutonomous",!1);Ue(this,"estopActive",!1);Ue(this,"trafficLightColor","GREEN");Ue(this,"trafficLightTimer",0);Ue(this,"activeWpIdx",0);Ue(this,"waypoints",[{id:"WP_START",x:0,z:0,type:"START",targetSpeedKmh:4.5,description:"Start line alignment"},{id:"WP_STRAIGHT",x:8,z:0,type:"TRACK",targetSpeedKmh:6,description:"Straight corridor traversal"},{id:"WP_OBSTACLE_AVOID",x:13.5,z:.75,type:"OBSTACLE_CORRIDOR",targetSpeedKmh:3.5,description:"Dynamic obstacle swerve"},{id:"WP_CLEAR_OBSTACLE",x:17.5,z:0,type:"RECOVER_PATH",targetSpeedKmh:5.5,description:"Re-align to track centerline"},{id:"WP_POTHOLE_BYPASS",x:21,z:-.4,type:"TERRAIN",targetSpeedKmh:4,description:"Pothole safe bypass"},{id:"WP_TRAFFIC_LIGHT",x:23.8,z:0,type:"TRAFFIC_LIGHT",targetSpeedKmh:3.8,description:"Traffic signal inspection"},{id:"WP_RAMP_ENTER",x:30,z:0,type:"RAMP_ENTRY",targetSpeedKmh:3.2,description:"20° Ramp entry alignment"},{id:"WP_RAMP_APEX",x:36,z:0,type:"RAMP_APEX",targetSpeedKmh:3,description:"Ramp crest traversal"},{id:"WP_RAMP_EXIT",x:42,z:0,type:"RAMP_DESCENT",targetSpeedKmh:3.8,description:"Ramp descent complete"},{id:"WP_TARGET_GALLERY",x:48,z:0,type:"TARGET_GALLERY",targetSpeedKmh:4,description:"Face Target Gallery search"},{id:"WP_FINISH",x:62,z:0,type:"FINISH",targetSpeedKmh:5,description:"Finish gate checkpoint"}]);Ue(this,"onLogMessage");Ue(this,"onMissionComplete")}log(e,n="INFO"){this.onLogMessage&&this.onLogMessage(e,n)}startAutonomousMission(){this.isAutonomous=!0,this.estopActive=!1,this.activeWpIdx=0,this.missionState="INITIALIZING",ft.playSystemStart(),this.log("SYSTEM BOOT: All onboard nodes initialized","INFO"),setTimeout(()=>{this.missionState==="INITIALIZING"&&(this.missionState="LOCALIZING",this.log("RTK FIX: Dual GNSS base station locked (accuracy ±0.02m)","SUCCESS"),ft.playAutonomousMode())},1200),setTimeout(()=>{this.missionState==="LOCALIZING"&&(this.missionState="NAVIGATING",this.targetSpeedKmh=5.2,this.log("AUTONOMOUS MODE ENGAGED: Navigation stack active ONBOARD","SUCCESS"))},2400)}resetSimulation(){this.x=0,this.y=0,this.z=0,this.heading=0,this.pitch=0,this.roll=0,this.speedKmh=0,this.targetSpeedKmh=0,this.steeringAngle=0,this.activeWpIdx=0,this.isAutonomous=!1,this.estopActive=!1,this.laserActive=!1,this.laserTimerSec=0,this.trafficLightColor="GREEN",this.missionState="IDLE",this.distanceTraveledM=0,this.log("SIMULATION RESET: UGV returned to START position","INFO")}triggerEmergencyStop(){this.estopActive=!0,this.isAutonomous=!1,this.speedKmh=0,this.targetSpeedKmh=0,this.leftRpm=0,this.rightRpm=0,this.laserActive=!1,this.missionState="EMERGENCY_STOP",ft.playEmergencyStop(),this.log("EMERGENCY STOP ACTIVATED: Motor bus disconnected, Autonomy halted","DANGER")}resetEmergencyStop(){this.estopActive=!1,this.missionState="IDLE",this.log("E-STOP RESET: Safety interlock armed. Ready for launch.","INFO")}manualDrive(e,n){this.estopActive||(this.isAutonomous=!1,this.targetSpeedKmh=e*6.5,this.steeringAngle=n*32)}toggleTrafficLight(){this.trafficLightColor==="RED"||this.trafficLightColor==="YELLOW"?(this.trafficLightColor="GREEN",this.trafficLightTimer=0,ft.playTrafficLight(),this.log("TRAFFIC SIGNAL OVERRIDE: Switched to GREEN. Resuming trajectory.","SUCCESS"),this.missionState==="TRAFFIC_LIGHT"&&(this.missionState="NAVIGATING",this.targetSpeedKmh=4.2,this.activeWpIdx=Math.max(6,this.activeWpIdx))):(this.trafficLightColor="RED",this.trafficLightTimer=0,this.log("TRAFFIC SIGNAL OVERRIDE: Switched to RED. Holding vehicle.","WARN"))}update(e){if(this.estopActive){this.speedKmh=0,this.leftRpm=0,this.rightRpm=0;return}this.isAutonomous&&this.missionState!=="MISSION_COMPLETE"&&this.stepAutonomousBehavior(e);const n=(this.targetSpeedKmh-this.speedKmh)*Math.min(1,e*2.8);this.speedKmh+=n,Math.abs(this.speedKmh)<.05&&(this.speedKmh=0);const i=this.speedKmh/3.6,r=bc(this.heading),s=.65,a=bc(this.steeringAngle),o=i/s*Math.tan(a);this.heading+=o*(180/Math.PI)*e,this.x+=i*Math.cos(r)*e,this.z+=i*Math.sin(r)*e,this.distanceTraveledM+=Math.abs(i*e),this.solveTerrainElevationAndPitch();const l=i/(2*Math.PI*.22)*60,c=this.steeringAngle/35*(l*.3);this.leftRpm=Math.round(l-c),this.rightRpm=Math.round(l+c),this.batteryPct=Math.max(15,this.batteryPct-5e-4*e)}stepAutonomousBehavior(e){if(this.activeWpIdx>=this.waypoints.length){this.missionState!=="MISSION_COMPLETE"&&(this.missionState="MISSION_COMPLETE",this.targetSpeedKmh=0,ft.playMissionComplete(),this.log("MISSION COMPLETE: All competition checkpoints passed with 0 collisions!","SUCCESS"),this.onMissionComplete&&this.onMissionComplete());return}const n=this.waypoints[this.activeWpIdx],i=n.x-this.x,r=n.z-this.z,s=Math.hypot(i,r);if(this.x>10.5&&this.x<15&&this.activeWpIdx===2&&this.missionState!=="OBSTACLE_DETECTED"&&this.missionState!=="REPLANNING"&&(this.missionState="OBSTACLE_DETECTED",ft.playObstacleWarning(),this.log("OBSTACLE DETECTED: LiDAR reports obstacle at 2.8m. Risk: HIGH","WARN"),setTimeout(()=>{this.missionState==="OBSTACLE_DETECTED"&&(this.missionState="REPLANNING",this.log("PATH REPLANNING: Local A* generated safe corridor swerve (+0.75m Z)","INFO"))},800)),this.activeWpIdx===5&&this.x>=22.8)if(this.trafficLightColor==="RED"){this.missionState="TRAFFIC_LIGHT",this.targetSpeedKmh=0,this.trafficLightTimer+=e,this.trafficLightTimer>=2&&this.trafficLightTimer<2.8&&(this.trafficLightColor="YELLOW");return}else if(this.trafficLightColor==="YELLOW"){this.missionState="TRAFFIC_LIGHT",this.targetSpeedKmh=0,this.trafficLightTimer+=e,this.trafficLightTimer>=2.8&&(this.trafficLightColor="GREEN",this.trafficLightTimer=0,ft.playTrafficLight(),this.log("TRAFFIC LIGHT SWITCHED: GREEN confirmed. Resuming trajectory.","SUCCESS"),this.missionState="NAVIGATING",this.targetSpeedKmh=4.2,this.activeWpIdx=6);return}else this.trafficLightColor==="GREEN"&&(this.missionState="NAVIGATING",this.targetSpeedKmh=4.2,this.activeWpIdx=6);if(this.x>=29.5&&this.x<=42.5&&this.missionState!=="RAMP_TRAVERSAL"&&(this.missionState="RAMP_TRAVERSAL",this.log("RAMP DETECTED: 20° Incline. Low gear terrain traversal engaged.","INFO")),this.x>=47.5&&this.x<=49&&this.activeWpIdx===9){if(this.missionState!=="TARGET_SEARCH"&&this.missionState!=="FACE_MATCH"&&this.missionState!=="TARGET_ALIGNMENT"&&this.missionState!=="LASER_INDICATION"){this.missionState="TARGET_SEARCH",this.targetSpeedKmh=0,this.log("TARGET SEARCH: Camera scanning Face Target Gallery candidate panels...","INFO"),setTimeout(()=>{this.missionState="FACE_MATCH",ft.playTargetFound(),this.log("FACE MATCH CONFIRMED: Target Candidate C matches Suspect Alpha (96.7% confidence)","SUCCESS"),setTimeout(()=>{this.missionState="TARGET_ALIGNMENT",this.log("TARGET ALIGNMENT: Pan-tilt gimbal aligned to (48.0m, 1.25m, 2.8m)","INFO"),setTimeout(()=>{this.missionState="LASER_INDICATION",this.laserActive=!0,this.laserTargetPos=[50,1.25,2.8],ft.playLaserConfirmation(),this.log("LASER INDICATION STARTED: 532nm beam firing (DTU spec: >= 2.00s)...","WARN")},700)},900)},1200);return}if(this.missionState==="LASER_INDICATION"){this.laserTimerSec+=e,this.laserTimerSec>=2&&(this.laserActive=!1,this.log("LASER INDICATION COMPLETE: 2.00s confirmed ✓ Target neutralized/marked.","SUCCESS"),this.missionState="NAVIGATING",this.activeWpIdx=10);return}if(this.missionState==="TARGET_SEARCH"||this.missionState==="FACE_MATCH"||this.missionState==="TARGET_ALIGNMENT")return}const a=Math.atan2(r,i),o=bc(this.heading);let l=a-o;l=Math.atan2(Math.sin(l),Math.cos(l)),this.steeringAngle=Math.max(-32,Math.min(32,l*(180/Math.PI)*1.5)),this.targetSpeedKmh=n.targetSpeedKmh,s<1&&(this.log(`WAYPOINT CLEARED: ${n.id} (${n.description})`,"INFO"),this.activeWpIdx++,this.activeWpIdx===5&&(this.trafficLightColor="RED",this.trafficLightTimer=0,this.log("TRAFFIC SIGNAL RED: Stopping at designated hold line","WARN")))}solveTerrainElevationAndPitch(){if(this.x>=30&&this.x<=34.4){const e=(this.x-30)/4.4;this.y=e*1.6,this.pitch=20}else if(this.x>34.4&&this.x<=37.6)this.y=1.6,this.pitch=0;else if(this.x>37.6&&this.x<=42){const e=(this.x-37.6)/4.4;this.y=1.6*(1-e),this.pitch=-20}else this.y=0,this.pitch=0}getTelemetryMessage(){var e;return{timestamp:Date.now()/1e3,mode:this.isAutonomous?"AUTONOMOUS":"MANUAL",speed:Number(this.speedKmh.toFixed(1)),battery:Math.round(this.batteryPct),battery_voltage:Number((24+this.batteryPct/100*1.2).toFixed(1)),battery_current:Number((3.2+this.speedKmh/10*8.5).toFixed(1)),position:{x:Number(this.x.toFixed(2)),y:Number(this.z.toFixed(2)),heading:Number(this.heading.toFixed(1))},imu:{roll:Number(this.roll.toFixed(1)),pitch:Number(this.pitch.toFixed(1)),yaw:Number(this.heading.toFixed(1)),accel_x:.1,accel_y:0,accel_z:9.81},gps:{fix:"RTK_FIXED",latitude:28.749912,longitude:77.117024,altitude:Number((218.4+this.y).toFixed(1)),satellites:24,accuracy:.02},motors:{left:this.leftRpm,right:this.rightRpm,temp_c:Number((38+this.distanceTraveledM/10*.8).toFixed(1)),current_a:Number((2.8+this.speedKmh/10*4.5).toFixed(1))},safety:{estop:this.estopActive,mechanical_estop:!1,wireless_estop:!1,software_safety:!0,wireless_link:!0,heartbeat_age_ms:12,watchdog_ok:!0,link_rssi:-56},lidar:{points_count:720,nearest_distance:this.x>10&&this.x<16?2.8:8.5,min_angle_deg:14.2,collision_zone_clear:!(this.x>10&&this.x<15)},vision:{detected_sign:this.x>6&&this.x<9?"STOP":this.x>9&&this.x<12?"SLOW":null,sign_confidence:this.x>6&&this.x<9?97.4:0,traffic_light_state:this.trafficLightColor,face_matched:this.missionState==="FACE_MATCH"||this.missionState==="TARGET_ALIGNMENT"||this.missionState==="LASER_INDICATION",face_confidence:96.7,target_aligned:this.missionState==="TARGET_ALIGNMENT"||this.missionState==="LASER_INDICATION",target_candidate_id:"TARGET_C_MATCH"},mission:{state:this.missionState,active_waypoint_idx:this.activeWpIdx,total_waypoints:this.waypoints.length,distance_to_target:Math.max(0,Number((62-this.x).toFixed(1))),laser_active:this.laserActive,laser_timer:Number(this.laserTimerSec.toFixed(2)),step_description:((e=this.waypoints[Math.min(this.activeWpIdx,this.waypoints.length-1)])==null?void 0:e.description)||""},health:{jetson_connected:!0,stm32_connected:!0,motor_driver_connected:!0,camera_connected:!0,lidar_connected:!0,imu_connected:!0,gps_connected:!0,estop_connected:!0,cpu_usage_pct:26.5,gpu_usage_pct:41.2,ram_usage_gb:2.1,temperature_c:43.8}}}}function bc(t){return t*(Math.PI/180)}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rh="162",J_=0,Df=1,ey=2,Rg=1,Cg=2,di=3,er=0,fn=1,pi=2,qi=0,Ss=1,Uf=2,Of=3,Ff=4,ty=5,vr=100,ny=101,iy=102,kf=103,zf=104,ry=200,sy=201,ay=202,oy=203,Ju=204,ed=205,ly=206,cy=207,uy=208,dy=209,hy=210,fy=211,py=212,my=213,gy=214,xy=0,vy=1,_y=2,vl=3,yy=4,Sy=5,My=6,Ey=7,Ng=0,wy=1,Ty=2,Ki=0,by=1,Ay=2,Ry=3,Lg=4,Cy=5,Ny=6,Ly=7,Pg=300,Ls=301,Ps=302,td=303,nd=304,Hl=306,id=1e3,Vn=1001,rd=1002,en=1003,Bf=1004,Zs=1005,an=1006,Ac=1007,Er=1008,Zi=1009,Py=1010,Iy=1011,sh=1012,Ig=1013,Bi=1014,mi=1015,Da=1016,Dg=1017,Ug=1018,br=1020,Dy=1021,jn=1023,Uy=1024,Oy=1025,Ar=1026,Is=1027,Fy=1028,Og=1029,ky=1030,Fg=1031,kg=1033,Rc=33776,Cc=33777,Nc=33778,Lc=33779,Gf=35840,Hf=35841,Vf=35842,jf=35843,zg=36196,Wf=37492,Xf=37496,$f=37808,Yf=37809,qf=37810,Kf=37811,Zf=37812,Qf=37813,Jf=37814,ep=37815,tp=37816,np=37817,ip=37818,rp=37819,sp=37820,ap=37821,Pc=36492,op=36494,lp=36495,zy=36283,cp=36284,up=36285,dp=36286,By=3200,Gy=3201,Bg=0,Hy=1,Fi="",Zn="srgb",sr="srgb-linear",ah="display-p3",Vl="display-p3-linear",_l="linear",lt="srgb",yl="rec709",Sl="p3",kr=7680,hp=519,Vy=512,jy=513,Wy=514,Gg=515,Xy=516,$y=517,Yy=518,qy=519,fp=35044,pp="300 es",sd=1035,_i=2e3,Ml=2001;class zs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mp=1234567;const ma=Math.PI/180,Ua=180/Math.PI;function Bs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function oh(t,e){return(t%e+e)%e}function Ky(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Zy(t,e,n){return t!==e?(n-t)/(e-t):0}function ga(t,e,n){return(1-n)*t+n*e}function Qy(t,e,n,i){return ga(t,e,1-Math.exp(-n*i))}function Jy(t,e=1){return e-Math.abs(oh(t,e*2)-e)}function eS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function tS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function nS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function iS(t,e){return t+Math.random()*(e-t)}function rS(t){return t*(.5-Math.random())}function sS(t){t!==void 0&&(mp=t);let e=mp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function aS(t){return t*ma}function oS(t){return t*Ua}function ad(t){return(t&t-1)===0&&t!==0}function lS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function El(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function cS(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),d=a((e+i)/2),f=s((e-i)/2),p=a((e-i)/2),g=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*d,l*f,l*p,o*c);break;case"YZY":t.set(l*p,o*d,l*f,o*c);break;case"ZXZ":t.set(l*f,l*p,o*d,o*c);break;case"XZX":t.set(o*d,l*_,l*g,o*c);break;case"YXY":t.set(l*g,o*d,l*_,o*c);break;case"ZYZ":t.set(l*_,l*g,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function es(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const co={DEG2RAD:ma,RAD2DEG:Ua,generateUUID:Bs,clamp:tn,euclideanModulo:oh,mapLinear:Ky,inverseLerp:Zy,lerp:ga,damp:Qy,pingpong:Jy,smoothstep:eS,smootherstep:tS,randInt:nS,randFloat:iS,randFloatSpread:rS,seededRandom:sS,degToRad:aS,radToDeg:oS,isPowerOfTwo:ad,ceilPowerOfTwo:lS,floorPowerOfTwo:El,setQuaternionFromProperEuler:cS,normalize:Zt,denormalize:es};class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,a,o,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],p=i[2],g=i[5],_=i[8],y=r[0],m=r[3],u=r[6],v=r[1],x=r[4],M=r[7],C=r[2],A=r[5],b=r[8];return s[0]=a*y+o*v+l*C,s[3]=a*m+o*x+l*A,s[6]=a*u+o*M+l*b,s[1]=c*y+d*v+f*C,s[4]=c*m+d*x+f*A,s[7]=c*u+d*M+f*b,s[2]=p*y+g*v+_*C,s[5]=p*m+g*x+_*A,s[8]=p*u+g*M+_*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,p=o*l-d*s,g=c*s-a*l,_=n*f+i*p+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*c-d*i)*y,e[2]=(o*i-r*a)*y,e[3]=p*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=g*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Ic.makeScale(e,n)),this}rotate(e){return this.premultiply(Ic.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ic.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ic=new je;function Hg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function wl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function uS(){const t=wl("canvas");return t.style.display="block",t}const gp={};function dS(t){t in gp||(gp[t]=!0,console.warn(t))}const xp=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vp=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),uo={[sr]:{transfer:_l,primaries:yl,toReference:t=>t,fromReference:t=>t},[Zn]:{transfer:lt,primaries:yl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Vl]:{transfer:_l,primaries:Sl,toReference:t=>t.applyMatrix3(vp),fromReference:t=>t.applyMatrix3(xp)},[ah]:{transfer:lt,primaries:Sl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(vp),fromReference:t=>t.applyMatrix3(xp).convertLinearToSRGB()}},hS=new Set([sr,Vl]),it={enabled:!0,_workingColorSpace:sr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!hS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=uo[e].toReference,r=uo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return uo[t].primaries},getTransfer:function(t){return t===Fi?_l:uo[t].transfer}};function Ms(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Dc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let zr;class Vg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zr===void 0&&(zr=wl("canvas")),zr.width=e.width,zr.height=e.height;const i=zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=zr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=wl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ms(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ms(n[i]/255)*255):n[i]=Ms(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fS=0;class jg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=Bs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Uc(r[a].image)):s.push(Uc(r[a]))}else s=Uc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Uc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Vg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pS=0;class pn extends zs{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Vn,r=Vn,s=an,a=Er,o=jn,l=Zi,c=pn.DEFAULT_ANISOTROPY,d=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Bs(),this.name="",this.source=new jg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case id:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case rd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case id:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case rd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Pg;pn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],p=l[1],g=l[5],_=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,M=(g+1)/2,C=(u+1)/2,A=(d+p)/4,b=(f+y)/4,P=(_+m)/4;return x>M&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=b/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=b/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-_)*(m-_)+(f-y)*(f-y)+(p-d)*(p-d));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-y)/v,this.z=(p-d)/v,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mS extends zs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new jg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ir extends mS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Wg extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gS extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ga{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const p=s[a+0],g=s[a+1],_=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(o===1){e[n+0]=p,e[n+1]=g,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==p||c!==g||d!==_){let m=1-o;const u=l*p+c*g+d*_+f*y,v=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const C=Math.sqrt(x),A=Math.atan2(C,u*v);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}const M=o*v;if(l=l*m+p*M,c=c*m+g*M,d=d*m+_*M,f=f*m+y*M,m===1-o){const C=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=C,c*=C,d*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[a],p=s[a+1],g=s[a+2],_=s[a+3];return e[n]=o*_+d*f+l*g-c*p,e[n+1]=l*_+d*p+c*f-o*g,e[n+2]=c*_+d*g+o*p-l*f,e[n+3]=d*_-o*f-l*p-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(s/2),p=l(i/2),g=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=p*d*f+c*g*_,this._y=c*g*f-p*d*_,this._z=c*d*_+p*g*f,this._w=c*d*f-p*g*_;break;case"YXZ":this._x=p*d*f+c*g*_,this._y=c*g*f-p*d*_,this._z=c*d*_-p*g*f,this._w=c*d*f+p*g*_;break;case"ZXY":this._x=p*d*f-c*g*_,this._y=c*g*f+p*d*_,this._z=c*d*_+p*g*f,this._w=c*d*f-p*g*_;break;case"ZYX":this._x=p*d*f-c*g*_,this._y=c*g*f+p*d*_,this._z=c*d*_-p*g*f,this._w=c*d*f+p*g*_;break;case"YZX":this._x=p*d*f+c*g*_,this._y=c*g*f+p*d*_,this._z=c*d*_-p*g*f,this._w=c*d*f-p*g*_;break;case"XZY":this._x=p*d*f-c*g*_,this._y=c*g*f-p*d*_,this._z=c*d*_+p*g*f,this._w=c*d*f+p*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],f=n[10],p=i+o+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>f){const g=2*Math.sqrt(1+i-o-f);this._w=(d-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>f){const g=2*Math.sqrt(1+o-i-f);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+f-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-n)*d)/c,p=Math.sin(n*d)/c;return this._w=a*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(_p.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(_p.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*d,this.y=i+l*d+o*c-s*f,this.z=r+l*f+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Oc.copy(this).projectOnVector(e),this.sub(Oc)}reflect(e){return this.sub(Oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oc=new k,_p=new Ga;class Ha{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Fn):Fn.fromBufferAttribute(s,a),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ho.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ho.copy(i.boundingBox)),ho.applyMatrix4(e.matrixWorld),this.union(ho)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),fo.subVectors(this.max,Qs),Br.subVectors(e.a,Qs),Gr.subVectors(e.b,Qs),Hr.subVectors(e.c,Qs),Ai.subVectors(Gr,Br),Ri.subVectors(Hr,Gr),lr.subVectors(Br,Hr);let n=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-lr.z,lr.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,lr.z,0,-lr.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-lr.y,lr.x,0];return!Fc(n,Br,Gr,Hr,fo)||(n=[1,0,0,0,1,0,0,0,1],!Fc(n,Br,Gr,Hr,fo))?!1:(po.crossVectors(Ai,Ri),n=[po.x,po.y,po.z],Fc(n,Br,Gr,Hr,fo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ai=[new k,new k,new k,new k,new k,new k,new k,new k],Fn=new k,ho=new Ha,Br=new k,Gr=new k,Hr=new k,Ai=new k,Ri=new k,lr=new k,Qs=new k,fo=new k,po=new k,cr=new k;function Fc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){cr.fromArray(t,s);const o=r.x*Math.abs(cr.x)+r.y*Math.abs(cr.y)+r.z*Math.abs(cr.z),l=e.dot(cr),c=n.dot(cr),d=i.dot(cr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const xS=new Ha,Js=new k,kc=new k;class Va{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):xS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const n=Js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(kc)),this.expandByPoint(Js.copy(e.center).sub(kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new k,zc=new k,mo=new k,Ci=new k,Bc=new k,go=new k,Gc=new k;class lh{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,n),oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){zc.copy(e).add(n).multiplyScalar(.5),mo.copy(n).sub(e).normalize(),Ci.copy(this.origin).sub(zc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(mo),o=Ci.dot(this.direction),l=-Ci.dot(mo),c=Ci.lengthSq(),d=Math.abs(1-a*a);let f,p,g,_;if(d>0)if(f=a*l-o,p=a*o-l,_=s*d,f>=0)if(p>=-_)if(p<=_){const y=1/d;f*=y,p*=y,g=f*(f+a*p+2*o)+p*(a*f+p+2*l)+c}else p=s,f=Math.max(0,-(a*p+o)),g=-f*f+p*(p+2*l)+c;else p=-s,f=Math.max(0,-(a*p+o)),g=-f*f+p*(p+2*l)+c;else p<=-_?(f=Math.max(0,-(-a*s+o)),p=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+p*(p+2*l)+c):p<=_?(f=0,p=Math.min(Math.max(-s,-l),s),g=p*(p+2*l)+c):(f=Math.max(0,-(a*s+o)),p=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+p*(p+2*l)+c);else p=a>0?-s:s,f=Math.max(0,-(a*p+o)),g=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(zc).addScaledVector(mo,p),g}intersectSphere(e,n){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),r=oi.dot(oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),d>=0?(s=(e.min.y-p.y)*d,a=(e.max.y-p.y)*d):(s=(e.max.y-p.y)*d,a=(e.min.y-p.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,n,i,r,s){Bc.subVectors(n,e),go.subVectors(i,e),Gc.crossVectors(Bc,go);let a=this.direction.dot(Gc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ci.subVectors(this.origin,e);const l=o*this.direction.dot(go.crossVectors(Ci,go));if(l<0)return null;const c=o*this.direction.dot(Bc.cross(Ci));if(c<0||l+c>a)return null;const d=-o*Ci.dot(Gc);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,n,i,r,s,a,o,l,c,d,f,p,g,_,y,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,f,p,g,_,y,m)}set(e,n,i,r,s,a,o,l,c,d,f,p,g,_,y,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=p,u[3]=g,u[7]=_,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const p=a*d,g=a*f,_=o*d,y=o*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=g+_*c,n[5]=p-y*c,n[9]=-o*l,n[2]=y-p*c,n[6]=_+g*c,n[10]=a*l}else if(e.order==="YXZ"){const p=l*d,g=l*f,_=c*d,y=c*f;n[0]=p+y*o,n[4]=_*o-g,n[8]=a*c,n[1]=a*f,n[5]=a*d,n[9]=-o,n[2]=g*o-_,n[6]=y+p*o,n[10]=a*l}else if(e.order==="ZXY"){const p=l*d,g=l*f,_=c*d,y=c*f;n[0]=p-y*o,n[4]=-a*f,n[8]=_+g*o,n[1]=g+_*o,n[5]=a*d,n[9]=y-p*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const p=a*d,g=a*f,_=o*d,y=o*f;n[0]=l*d,n[4]=_*c-g,n[8]=p*c+y,n[1]=l*f,n[5]=y*c+p,n[9]=g*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const p=a*l,g=a*c,_=o*l,y=o*c;n[0]=l*d,n[4]=y-p*f,n[8]=_*f+g,n[1]=f,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=g*f+_,n[10]=p-y*f}else if(e.order==="XZY"){const p=a*l,g=a*c,_=o*l,y=o*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=p*f+y,n[5]=a*d,n[9]=g*f-_,n[2]=_*f-g,n[6]=o*d,n[10]=y*f+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vS,e,_S)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ni.crossVectors(i,xn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ni.crossVectors(i,xn)),Ni.normalize(),xo.crossVectors(xn,Ni),r[0]=Ni.x,r[4]=xo.x,r[8]=xn.x,r[1]=Ni.y,r[5]=xo.y,r[9]=xn.y,r[2]=Ni.z,r[6]=xo.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],p=i[9],g=i[13],_=i[2],y=i[6],m=i[10],u=i[14],v=i[3],x=i[7],M=i[11],C=i[15],A=r[0],b=r[4],P=r[8],H=r[12],S=r[1],N=r[5],$=r[9],Q=r[13],I=r[2],K=r[6],j=r[10],ie=r[14],U=r[3],G=r[7],R=r[11],w=r[15];return s[0]=a*A+o*S+l*I+c*U,s[4]=a*b+o*N+l*K+c*G,s[8]=a*P+o*$+l*j+c*R,s[12]=a*H+o*Q+l*ie+c*w,s[1]=d*A+f*S+p*I+g*U,s[5]=d*b+f*N+p*K+g*G,s[9]=d*P+f*$+p*j+g*R,s[13]=d*H+f*Q+p*ie+g*w,s[2]=_*A+y*S+m*I+u*U,s[6]=_*b+y*N+m*K+u*G,s[10]=_*P+y*$+m*j+u*R,s[14]=_*H+y*Q+m*ie+u*w,s[3]=v*A+x*S+M*I+C*U,s[7]=v*b+x*N+M*K+C*G,s[11]=v*P+x*$+M*j+C*R,s[15]=v*H+x*Q+M*ie+C*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],p=e[10],g=e[14],_=e[3],y=e[7],m=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*o*p+i*c*p+r*o*g-i*l*g)+y*(+n*l*g-n*c*p+s*a*p-r*a*g+r*c*d-s*l*d)+m*(+n*c*f-n*o*g-s*a*f+i*a*g+s*o*d-i*c*d)+u*(-r*o*d-n*l*f+n*o*p+r*a*f-i*a*p+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],p=e[10],g=e[11],_=e[12],y=e[13],m=e[14],u=e[15],v=f*m*c-y*p*c+y*l*g-o*m*g-f*l*u+o*p*u,x=_*p*c-d*m*c-_*l*g+a*m*g+d*l*u-a*p*u,M=d*y*c-_*f*c+_*o*g-a*y*g-d*o*u+a*f*u,C=_*f*l-d*y*l-_*o*p+a*y*p+d*o*m-a*f*m,A=n*v+i*x+r*M+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=v*b,e[1]=(y*p*s-f*m*s-y*r*g+i*m*g+f*r*u-i*p*u)*b,e[2]=(o*m*s-y*l*s+y*r*c-i*m*c-o*r*u+i*l*u)*b,e[3]=(f*l*s-o*p*s-f*r*c+i*p*c+o*r*g-i*l*g)*b,e[4]=x*b,e[5]=(d*m*s-_*p*s+_*r*g-n*m*g-d*r*u+n*p*u)*b,e[6]=(_*l*s-a*m*s-_*r*c+n*m*c+a*r*u-n*l*u)*b,e[7]=(a*p*s-d*l*s+d*r*c-n*p*c-a*r*g+n*l*g)*b,e[8]=M*b,e[9]=(_*f*s-d*y*s-_*i*g+n*y*g+d*i*u-n*f*u)*b,e[10]=(a*y*s-_*o*s+_*i*c-n*y*c-a*i*u+n*o*u)*b,e[11]=(d*o*s-a*f*s-d*i*c+n*f*c+a*i*g-n*o*g)*b,e[12]=C*b,e[13]=(d*y*r-_*f*r+_*i*p-n*y*p-d*i*m+n*f*m)*b,e[14]=(_*o*r-a*y*r-_*i*l+n*y*l+a*i*m-n*o*m)*b,e[15]=(a*f*r-d*o*r+d*i*l-n*f*l-a*i*p+n*o*p)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,f=o+o,p=s*c,g=s*d,_=s*f,y=a*d,m=a*f,u=o*f,v=l*c,x=l*d,M=l*f,C=i.x,A=i.y,b=i.z;return r[0]=(1-(y+u))*C,r[1]=(g+M)*C,r[2]=(_-x)*C,r[3]=0,r[4]=(g-M)*A,r[5]=(1-(p+u))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(_+x)*b,r[9]=(m-v)*b,r[10]=(1-(p+y))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Vr.set(r[0],r[1],r[2]).length();const a=Vr.set(r[4],r[5],r[6]).length(),o=Vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kn.copy(this);const c=1/s,d=1/a,f=1/o;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=d,kn.elements[5]*=d,kn.elements[6]*=d,kn.elements[8]*=f,kn.elements[9]*=f,kn.elements[10]*=f,n.setFromRotationMatrix(kn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=_i){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let g,_;if(o===_i)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ml)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=_i){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(a-s),p=(n+e)*c,g=(i+r)*d;let _,y;if(o===_i)_=(a+s)*f,y=-2*f;else if(o===Ml)_=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Vr=new k,kn=new vt,vS=new k(0,0,0),_S=new k(1,1,1),Ni=new k,xo=new k,xn=new k,yp=new vt,Sp=new Ga;class ri{constructor(e=0,n=0,i=0,r=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],p=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return yp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Sp.setFromEuler(this),this.setFromQuaternion(Sp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";let Xg=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},yS=0;const Mp=new k,jr=new Ga,li=new vt,vo=new k,ea=new k,SS=new k,MS=new Ga,Ep=new k(1,0,0),wp=new k(0,1,0),Tp=new k(0,0,1),ES={type:"added"},wS={type:"removed"},Hc={type:"childadded",child:null},Vc={type:"childremoved",child:null};class Ct extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=Bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new k,n=new ri,i=new Ga,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new je}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(Ep,e)}rotateY(e){return this.rotateOnAxis(wp,e)}rotateZ(e){return this.rotateOnAxis(Tp,e)}translateOnAxis(e,n){return Mp.copy(e).applyQuaternion(this.quaternion),this.position.add(Mp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ep,e)}translateY(e){return this.translateOnAxis(wp,e)}translateZ(e){return this.translateOnAxis(Tp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?vo.copy(e):vo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(ea,vo,this.up):li.lookAt(vo,ea,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),jr.setFromRotationMatrix(li),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ES),Hc.child=e,this.dispatchEvent(Hc),Hc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(wS),Vc.child=e,this.dispatchEvent(Vc),Vc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,e,SS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,MS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),p=a(e.skeletons),g=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ct.DEFAULT_UP=new k(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new k,ci=new k,jc=new k,ui=new k,Wr=new k,Xr=new k,bp=new k,Wc=new k,Xc=new k,$c=new k;class ti{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){zn.subVectors(r,n),ci.subVectors(i,n),jc.subVectors(e,n);const a=zn.dot(zn),o=zn.dot(ci),l=zn.dot(jc),c=ci.dot(ci),d=ci.dot(jc),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const p=1/f,g=(c*l-o*d)*p,_=(a*d-o*l)*p;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ui.x),l.addScaledVector(a,ui.y),l.addScaledVector(o,ui.z),l)}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),ci.subVectors(e,n),zn.cross(ci).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),zn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ti.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ti.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Wr.subVectors(r,i),Xr.subVectors(s,i),Wc.subVectors(e,i);const l=Wr.dot(Wc),c=Xr.dot(Wc);if(l<=0&&c<=0)return n.copy(i);Xc.subVectors(e,r);const d=Wr.dot(Xc),f=Xr.dot(Xc);if(d>=0&&f<=d)return n.copy(r);const p=l*f-d*c;if(p<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Wr,a);$c.subVectors(e,s);const g=Wr.dot($c),_=Xr.dot($c);if(_>=0&&g<=_)return n.copy(s);const y=g*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Xr,o);const m=d*_-g*f;if(m<=0&&f-d>=0&&g-_>=0)return bp.subVectors(s,r),o=(f-d)/(f-d+(g-_)),n.copy(r).addScaledVector(bp,o);const u=1/(m+y+p);return a=y*u,o=p*u,n.copy(i).addScaledVector(Wr,a).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $g={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Yc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=oh(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Yc(a,s,e+1/3),this.g=Yc(a,s,e),this.b=Yc(a,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=Zn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Zn){const i=$g[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=Dc(e.r),this.g=Dc(e.g),this.b=Dc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return it.fromWorkingColorSpace($t.copy(this),e),Math.round(tn($t.r*255,0,255))*65536+Math.round(tn($t.g*255,0,255))*256+Math.round(tn($t.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace($t.copy(this),n);const i=$t.r,r=$t.g,s=$t.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Zn){it.fromWorkingColorSpace($t.copy(this),e);const n=$t.r,i=$t.g,r=$t.b;return e!==Zn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+n,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Li),e.getHSL(_o);const i=ga(Li.h,_o.h,n),r=ga(Li.s,_o.s,n),s=ga(Li.l,_o.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Xe;Xe.NAMES=$g;let TS=0;class Or extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=Bs(),this.name="",this.type="Material",this.blending=Ss,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ju,this.blendDst=ed,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(i.blending=this.blending),this.side!==er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ju&&(i.blendSrc=this.blendSrc),this.blendDst!==ed&&(i.blendDst=this.blendDst),this.blendEquation!==vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yn extends Or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Ng,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new k,yo=new Ze;class mn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=fp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return dS("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)yo.fromBufferAttribute(this,n),yo.applyMatrix3(e),this.setXY(n,yo.x,yo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=es(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=es(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=es(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=es(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=es(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fp&&(e.usage=this.usage),e}}class Yg extends mn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class qg extends mn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Bt extends mn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let bS=0;const Rn=new vt,qc=new Ct,$r=new k,vn=new Ha,ta=new Ha,It=new k;class Gt extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=Bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hg(e)?qg:Yg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return qc.lookAt(e),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Bt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ha);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Va);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ta.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(vn.min,ta.min),vn.expandByPoint(It),It.addVectors(vn.max,ta.max),vn.expandByPoint(It)):(vn.expandByPoint(ta.min),vn.expandByPoint(ta.max))}vn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)It.fromBufferAttribute(o,c),l&&($r.fromBufferAttribute(e,c),It.add($r)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new k,l[P]=new k;const c=new k,d=new k,f=new k,p=new Ze,g=new Ze,_=new Ze,y=new k,m=new k;function u(P,H,S){c.fromBufferAttribute(i,P),d.fromBufferAttribute(i,H),f.fromBufferAttribute(i,S),p.fromBufferAttribute(s,P),g.fromBufferAttribute(s,H),_.fromBufferAttribute(s,S),d.sub(c),f.sub(c),g.sub(p),_.sub(p);const N=1/(g.x*_.y-_.x*g.y);isFinite(N)&&(y.copy(d).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(N),m.copy(f).multiplyScalar(g.x).addScaledVector(d,-_.x).multiplyScalar(N),o[P].add(y),o[H].add(y),o[S].add(y),l[P].add(m),l[H].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,H=v.length;P<H;++P){const S=v[P],N=S.start,$=S.count;for(let Q=N,I=N+$;Q<I;Q+=3)u(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const x=new k,M=new k,C=new k,A=new k;function b(P){C.fromBufferAttribute(r,P),A.copy(C);const H=o[P];x.copy(H),x.sub(C.multiplyScalar(C.dot(H))).normalize(),M.crossVectors(A,H);const N=M.dot(l[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,N)}for(let P=0,H=v.length;P<H;++P){const S=v[P],N=S.start,$=S.count;for(let Q=N,I=N+$;Q<I;Q+=3)b(e.getX(Q+0)),b(e.getX(Q+1)),b(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,d=new k,f=new k;if(e)for(let p=0,g=e.count;p<g;p+=3){const _=e.getX(p+0),y=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,m),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,g=n.count;p<g;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),a.fromBufferAttribute(n,p+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,p=new c.constructor(l.length*d);let g=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?g=l[y]*o.data.stride+o.offset:g=l[y]*d;for(let u=0;u<d;u++)p[_++]=c[g++]}return new mn(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const p=c[d],g=e(p,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,p=c.length;f<p;f++){const g=c[f];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let p=0,g=f.length;p<g;p++)d.push(f[p].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ap=new vt,ur=new lh,So=new Va,Rp=new k,Yr=new k,qr=new k,Kr=new k,Kc=new k,Mo=new k,Eo=new Ze,wo=new Ze,To=new Ze,Cp=new k,Np=new k,Lp=new k,bo=new k,Ao=new k;class Se extends Ct{constructor(e=new Gt,n=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Mo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(Kc.fromBufferAttribute(f,e),a?Mo.addScaledVector(Kc,d):Mo.addScaledVector(Kc.sub(n),d))}n.add(Mo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(s),ur.copy(e.ray).recast(e.near),!(So.containsPoint(ur.origin)===!1&&(ur.intersectSphere(So,Rp)===null||ur.origin.distanceToSquared(Rp)>(e.far-e.near)**2))&&(Ap.copy(s).invert(),ur.copy(e.ray).applyMatrix4(Ap),!(i.boundingBox!==null&&ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ur)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,p=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=p.length;_<y;_++){const m=p[_],u=a[m.materialIndex],v=Math.max(m.start,g.start),x=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let M=v,C=x;M<C;M+=3){const A=o.getX(M),b=o.getX(M+1),P=o.getX(M+2);r=Ro(this,u,e,i,c,d,f,A,b,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(o.count,g.start+g.count);for(let m=_,u=y;m<u;m+=3){const v=o.getX(m),x=o.getX(m+1),M=o.getX(m+2);r=Ro(this,a,e,i,c,d,f,v,x,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=p.length;_<y;_++){const m=p[_],u=a[m.materialIndex],v=Math.max(m.start,g.start),x=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let M=v,C=x;M<C;M+=3){const A=M,b=M+1,P=M+2;r=Ro(this,u,e,i,c,d,f,A,b,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let m=_,u=y;m<u;m+=3){const v=m,x=m+1,M=m+2;r=Ro(this,a,e,i,c,d,f,v,x,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function AS(t,e,n,i,r,s,a,o){let l;if(e.side===fn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===er,o),l===null)return null;Ao.copy(o),Ao.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ao);return c<n.near||c>n.far?null:{distance:c,point:Ao.clone(),object:t}}function Ro(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Yr),t.getVertexPosition(l,qr),t.getVertexPosition(c,Kr);const d=AS(t,e,n,i,Yr,qr,Kr,bo);if(d){r&&(Eo.fromBufferAttribute(r,o),wo.fromBufferAttribute(r,l),To.fromBufferAttribute(r,c),d.uv=ti.getInterpolation(bo,Yr,qr,Kr,Eo,wo,To,new Ze)),s&&(Eo.fromBufferAttribute(s,o),wo.fromBufferAttribute(s,l),To.fromBufferAttribute(s,c),d.uv1=ti.getInterpolation(bo,Yr,qr,Kr,Eo,wo,To,new Ze)),a&&(Cp.fromBufferAttribute(a,o),Np.fromBufferAttribute(a,l),Lp.fromBufferAttribute(a,c),d.normal=ti.getInterpolation(bo,Yr,qr,Kr,Cp,Np,Lp,new k),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new k,materialIndex:0};ti.getNormal(Yr,qr,Kr,f.normal),d.face=f}return d}class ct extends Gt{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],f=[];let p=0,g=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(d,3)),this.setAttribute("uv",new Bt(f,2));function _(y,m,u,v,x,M,C,A,b,P,H){const S=M/b,N=C/P,$=M/2,Q=C/2,I=A/2,K=b+1,j=P+1;let ie=0,U=0;const G=new k;for(let R=0;R<j;R++){const w=R*N-Q;for(let z=0;z<K;z++){const J=z*S-$;G[y]=J*v,G[m]=w*x,G[u]=I,c.push(G.x,G.y,G.z),G[y]=0,G[m]=0,G[u]=A>0?1:-1,d.push(G.x,G.y,G.z),f.push(z/b),f.push(1-R/P),ie+=1}}for(let R=0;R<P;R++)for(let w=0;w<b;w++){const z=p+w+K*R,J=p+w+K*(R+1),D=p+(w+1)+K*(R+1),W=p+(w+1)+K*R;l.push(z,J,W),l.push(J,D,W),U+=6}o.addGroup(g,U,H),g+=U,p+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ct(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=Ds(t[n]);for(const r in i)e[r]=i[r]}return e}function RS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Kg(t){return t.getRenderTarget()===null?t.outputColorSpace:it.workingColorSpace}const CS={clone:Ds,merge:Qt};var NS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tr extends Or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NS,this.fragmentShader=LS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=RS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}let Zg=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=_i}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Pi=new k,Pp=new Ze,Ip=new Ze;class Ln extends Zg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ua*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ua*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,n){return this.getViewBounds(e,Pp,Ip),n.subVectors(Ip,Pp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ma*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Zr=-90,Qr=1;class PS extends Ct{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ln(Zr,Qr,e,n);r.layers=this.layers,this.add(r);const s=new Ln(Zr,Qr,e,n);s.layers=this.layers,this.add(s);const a=new Ln(Zr,Qr,e,n);a.layers=this.layers,this.add(a);const o=new Ln(Zr,Qr,e,n);o.layers=this.layers,this.add(o);const l=new Ln(Zr,Qr,e,n);l.layers=this.layers,this.add(l);const c=new Ln(Zr,Qr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ml)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,p,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Qg extends pn{constructor(e,n,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Ls,super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class IS extends Ir{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Qg(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:an}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ct(5,5,5),s=new tr({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:qi});s.uniforms.tEquirect.value=n;const a=new Se(r,s),o=n.minFilter;return n.minFilter===Er&&(n.minFilter=an),new PS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Zc=new k,DS=new k,US=new je;class gr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Zc.subVectors(i,n).cross(DS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Zc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||US.getNormalMatrix(e),r=this.coplanarPoint(Zc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new Va,Co=new k;class ch{constructor(e=new gr,n=new gr,i=new gr,r=new gr,s=new gr,a=new gr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],f=r[6],p=r[7],g=r[8],_=r[9],y=r[10],m=r[11],u=r[12],v=r[13],x=r[14],M=r[15];if(i[0].setComponents(l-s,p-c,m-g,M-u).normalize(),i[1].setComponents(l+s,p+c,m+g,M+u).normalize(),i[2].setComponents(l+a,p+d,m+_,M+v).normalize(),i[3].setComponents(l-a,p-d,m-_,M-v).normalize(),i[4].setComponents(l-o,p-f,m-y,M-x).normalize(),n===_i)i[5].setComponents(l+o,p+f,m+y,M+x).normalize();else if(n===Ml)i[5].setComponents(o,f,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Co.x=r.normal.x>0?e.max.x:e.min.x,Co.y=r.normal.y>0?e.max.y:e.min.y,Co.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Co)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jg(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function OS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,p=c.usage,g=f.byteLength,_=t.createBuffer();t.bindBuffer(d,_),t.bufferData(d,f,p),c.onUploadCallback();let y;if(f instanceof Float32Array)y=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=t.SHORT;else if(f instanceof Uint32Array)y=t.UNSIGNED_INT;else if(f instanceof Int32Array)y=t.INT;else if(f instanceof Int8Array)y=t.BYTE;else if(f instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,d,f){const p=d.array,g=d._updateRange,_=d.updateRanges;if(t.bindBuffer(f,c),g.count===-1&&_.length===0&&t.bufferSubData(f,0,p),_.length!==0){for(let y=0,m=_.length;y<m;y++){const u=_[y];n?t.bufferSubData(f,u.start*p.BYTES_PER_ELEMENT,p,u.start,u.count):t.bufferSubData(f,u.start*p.BYTES_PER_ELEMENT,p.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):t.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,d),f.version=c.version}}return{get:a,remove:o,update:l}}class gi extends Gt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,p=n/l,g=[],_=[],y=[],m=[];for(let u=0;u<d;u++){const v=u*p-a;for(let x=0;x<c;x++){const M=x*f-s;_.push(M,-v,0),y.push(0,0,1),m.push(x/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const x=v+c*u,M=v+c*(u+1),C=v+1+c*(u+1),A=v+1+c*u;g.push(x,M,A),g.push(M,C,A)}this.setIndex(g),this.setAttribute("position",new Bt(_,3)),this.setAttribute("normal",new Bt(y,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.width,e.height,e.widthSegments,e.heightSegments)}}var FS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,BS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,XS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$S=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,KS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ZS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,r1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,s1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,a1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,o1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,l1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,c1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f1="gl_FragColor = linearToOutputTexel( gl_FragColor );",p1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,m1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,g1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,x1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,v1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,y1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,T1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,b1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,N1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,L1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,O1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,F1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,k1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,z1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,V1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,j1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Z1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,J1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,eM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,tM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_M=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,yM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,SM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,MM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,EM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,TM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,AM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,LM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,PM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,OM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,WM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,XM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,QM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:FS,alphahash_pars_fragment:kS,alphamap_fragment:zS,alphamap_pars_fragment:BS,alphatest_fragment:GS,alphatest_pars_fragment:HS,aomap_fragment:VS,aomap_pars_fragment:jS,batching_pars_vertex:WS,batching_vertex:XS,begin_vertex:$S,beginnormal_vertex:YS,bsdfs:qS,iridescence_fragment:KS,bumpmap_pars_fragment:ZS,clipping_planes_fragment:QS,clipping_planes_pars_fragment:JS,clipping_planes_pars_vertex:e1,clipping_planes_vertex:t1,color_fragment:n1,color_pars_fragment:i1,color_pars_vertex:r1,color_vertex:s1,common:a1,cube_uv_reflection_fragment:o1,defaultnormal_vertex:l1,displacementmap_pars_vertex:c1,displacementmap_vertex:u1,emissivemap_fragment:d1,emissivemap_pars_fragment:h1,colorspace_fragment:f1,colorspace_pars_fragment:p1,envmap_fragment:m1,envmap_common_pars_fragment:g1,envmap_pars_fragment:x1,envmap_pars_vertex:v1,envmap_physical_pars_fragment:N1,envmap_vertex:_1,fog_vertex:y1,fog_pars_vertex:S1,fog_fragment:M1,fog_pars_fragment:E1,gradientmap_pars_fragment:w1,lightmap_fragment:T1,lightmap_pars_fragment:b1,lights_lambert_fragment:A1,lights_lambert_pars_fragment:R1,lights_pars_begin:C1,lights_toon_fragment:L1,lights_toon_pars_fragment:P1,lights_phong_fragment:I1,lights_phong_pars_fragment:D1,lights_physical_fragment:U1,lights_physical_pars_fragment:O1,lights_fragment_begin:F1,lights_fragment_maps:k1,lights_fragment_end:z1,logdepthbuf_fragment:B1,logdepthbuf_pars_fragment:G1,logdepthbuf_pars_vertex:H1,logdepthbuf_vertex:V1,map_fragment:j1,map_pars_fragment:W1,map_particle_fragment:X1,map_particle_pars_fragment:$1,metalnessmap_fragment:Y1,metalnessmap_pars_fragment:q1,morphinstance_vertex:K1,morphcolor_vertex:Z1,morphnormal_vertex:Q1,morphtarget_pars_vertex:J1,morphtarget_vertex:eM,normal_fragment_begin:tM,normal_fragment_maps:nM,normal_pars_fragment:iM,normal_pars_vertex:rM,normal_vertex:sM,normalmap_pars_fragment:aM,clearcoat_normal_fragment_begin:oM,clearcoat_normal_fragment_maps:lM,clearcoat_pars_fragment:cM,iridescence_pars_fragment:uM,opaque_fragment:dM,packing:hM,premultiplied_alpha_fragment:fM,project_vertex:pM,dithering_fragment:mM,dithering_pars_fragment:gM,roughnessmap_fragment:xM,roughnessmap_pars_fragment:vM,shadowmap_pars_fragment:_M,shadowmap_pars_vertex:yM,shadowmap_vertex:SM,shadowmask_pars_fragment:MM,skinbase_vertex:EM,skinning_pars_vertex:wM,skinning_vertex:TM,skinnormal_vertex:bM,specularmap_fragment:AM,specularmap_pars_fragment:RM,tonemapping_fragment:CM,tonemapping_pars_fragment:NM,transmission_fragment:LM,transmission_pars_fragment:PM,uv_pars_fragment:IM,uv_pars_vertex:DM,uv_vertex:UM,worldpos_vertex:OM,background_vert:FM,background_frag:kM,backgroundCube_vert:zM,backgroundCube_frag:BM,cube_vert:GM,cube_frag:HM,depth_vert:VM,depth_frag:jM,distanceRGBA_vert:WM,distanceRGBA_frag:XM,equirect_vert:$M,equirect_frag:YM,linedashed_vert:qM,linedashed_frag:KM,meshbasic_vert:ZM,meshbasic_frag:QM,meshlambert_vert:JM,meshlambert_frag:eE,meshmatcap_vert:tE,meshmatcap_frag:nE,meshnormal_vert:iE,meshnormal_frag:rE,meshphong_vert:sE,meshphong_frag:aE,meshphysical_vert:oE,meshphysical_frag:lE,meshtoon_vert:cE,meshtoon_frag:uE,points_vert:dE,points_frag:hE,shadow_vert:fE,shadow_frag:pE,sprite_vert:mE,sprite_frag:gE},fe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Jn={basic:{uniforms:Qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Qt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Qt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Qt([fe.points,fe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Qt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Qt([fe.common,fe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Qt([fe.sprite,fe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Qt([fe.common,fe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Qt([fe.lights,fe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Jn.physical={uniforms:Qt([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const No={r:0,b:0,g:0},hr=new ri,xE=new vt;function vE(t,e,n,i,r,s,a){const o=new Xe(0);let l=s===!0?0:1,c,d,f=null,p=0,g=null;function _(m,u){let v=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?n:e).get(x)),x===null?y(o,l):x&&x.isColor&&(y(x,1),v=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Hl)?(d===void 0&&(d=new Se(new ct(1,1,1),new tr({name:"BackgroundCubeMaterial",uniforms:Ds(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),hr.copy(u.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(xE.makeRotationFromEuler(hr)),d.material.toneMapped=it.getTransfer(x.colorSpace)!==lt,(f!==x||p!==x.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,f=x,p=x.version,g=t.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Se(new gi(2,2),new tr({name:"BackgroundMaterial",uniforms:Ds(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=it.getTransfer(x.colorSpace)!==lt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||p!==x.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,p=x.version,g=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,u){m.getRGB(No,Kg(t)),i.buffers.color.setClear(No.r,No.g,No.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(m,u=1){o.set(m),l=u,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(o,l)},render:_}}function _E(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,d=!1;function f(I,K,j,ie,U){let G=!1;if(a){const R=y(ie,j,K);c!==R&&(c=R,g(c.object)),G=u(I,ie,j,U),G&&v(I,ie,j,U)}else{const R=K.wireframe===!0;(c.geometry!==ie.id||c.program!==j.id||c.wireframe!==R)&&(c.geometry=ie.id,c.program=j.id,c.wireframe=R,G=!0)}U!==null&&n.update(U,t.ELEMENT_ARRAY_BUFFER),(G||d)&&(d=!1,P(I,K,j,ie),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(U).buffer))}function p(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function _(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function y(I,K,j){const ie=j.wireframe===!0;let U=o[I.id];U===void 0&&(U={},o[I.id]=U);let G=U[K.id];G===void 0&&(G={},U[K.id]=G);let R=G[ie];return R===void 0&&(R=m(p()),G[ie]=R),R}function m(I){const K=[],j=[],ie=[];for(let U=0;U<r;U++)K[U]=0,j[U]=0,ie[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:j,attributeDivisors:ie,object:I,attributes:{},index:null}}function u(I,K,j,ie){const U=c.attributes,G=K.attributes;let R=0;const w=j.getAttributes();for(const z in w)if(w[z].location>=0){const D=U[z];let W=G[z];if(W===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(W=I.instanceColor)),D===void 0||D.attribute!==W||W&&D.data!==W.data)return!0;R++}return c.attributesNum!==R||c.index!==ie}function v(I,K,j,ie){const U={},G=K.attributes;let R=0;const w=j.getAttributes();for(const z in w)if(w[z].location>=0){let D=G[z];D===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(D=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(D=I.instanceColor));const W={};W.attribute=D,D&&D.data&&(W.data=D.data),U[z]=W,R++}c.attributes=U,c.attributesNum=R,c.index=ie}function x(){const I=c.newAttributes;for(let K=0,j=I.length;K<j;K++)I[K]=0}function M(I){C(I,0)}function C(I,K){const j=c.newAttributes,ie=c.enabledAttributes,U=c.attributeDivisors;j[I]=1,ie[I]===0&&(t.enableVertexAttribArray(I),ie[I]=1),U[I]!==K&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,K),U[I]=K)}function A(){const I=c.newAttributes,K=c.enabledAttributes;for(let j=0,ie=K.length;j<ie;j++)K[j]!==I[j]&&(t.disableVertexAttribArray(j),K[j]=0)}function b(I,K,j,ie,U,G,R){R===!0?t.vertexAttribIPointer(I,K,j,U,G):t.vertexAttribPointer(I,K,j,ie,U,G)}function P(I,K,j,ie){if(i.isWebGL2===!1&&(I.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const U=ie.attributes,G=j.getAttributes(),R=K.defaultAttributeValues;for(const w in G){const z=G[w];if(z.location>=0){let J=U[w];if(J===void 0&&(w==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),w==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),J!==void 0){const D=J.normalized,W=J.itemSize,ee=n.get(J);if(ee===void 0)continue;const te=ee.buffer,se=ee.type,oe=ee.bytesPerElement,Te=i.isWebGL2===!0&&(se===t.INT||se===t.UNSIGNED_INT||J.gpuType===Ig);if(J.isInterleavedBufferAttribute){const xe=J.data,F=xe.stride,Ke=J.offset;if(xe.isInstancedInterleavedBuffer){for(let ue=0;ue<z.locationSize;ue++)C(z.location+ue,xe.meshPerAttribute);I.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ue=0;ue<z.locationSize;ue++)M(z.location+ue);t.bindBuffer(t.ARRAY_BUFFER,te);for(let ue=0;ue<z.locationSize;ue++)b(z.location+ue,W/z.locationSize,se,D,F*oe,(Ke+W/z.locationSize*ue)*oe,Te)}else{if(J.isInstancedBufferAttribute){for(let xe=0;xe<z.locationSize;xe++)C(z.location+xe,J.meshPerAttribute);I.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let xe=0;xe<z.locationSize;xe++)M(z.location+xe);t.bindBuffer(t.ARRAY_BUFFER,te);for(let xe=0;xe<z.locationSize;xe++)b(z.location+xe,W/z.locationSize,se,D,W*oe,W/z.locationSize*xe*oe,Te)}}else if(R!==void 0){const D=R[w];if(D!==void 0)switch(D.length){case 2:t.vertexAttrib2fv(z.location,D);break;case 3:t.vertexAttrib3fv(z.location,D);break;case 4:t.vertexAttrib4fv(z.location,D);break;default:t.vertexAttrib1fv(z.location,D)}}}}A()}function H(){$();for(const I in o){const K=o[I];for(const j in K){const ie=K[j];for(const U in ie)_(ie[U].object),delete ie[U];delete K[j]}delete o[I]}}function S(I){if(o[I.id]===void 0)return;const K=o[I.id];for(const j in K){const ie=K[j];for(const U in ie)_(ie[U].object),delete ie[U];delete K[j]}delete o[I.id]}function N(I){for(const K in o){const j=o[K];if(j[I.id]===void 0)continue;const ie=j[I.id];for(const U in ie)_(ie[U].object),delete ie[U];delete j[I.id]}}function $(){Q(),d=!0,c!==l&&(c=l,g(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:$,resetDefaultState:Q,dispose:H,releaseStatesOfGeometry:S,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:M,disableUnusedAttributes:A}}function yE(t,e,n,i){const r=i.isWebGL2;let s;function a(d){s=d}function o(d,f){t.drawArrays(s,d,f),n.update(f,s,1)}function l(d,f,p){if(p===0)return;let g,_;if(r)g=t,_="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](s,d,f,p),n.update(f,s,p)}function c(d,f,p){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<p;_++)this.render(d[_],f[_]);else{g.multiDrawArraysWEBGL(s,d,0,f,0,p);let _=0;for(let y=0;y<p;y++)_+=f[y];n.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function SE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,M=a||e.has("OES_texture_float"),C=x&&M,A=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:C,maxSamples:A}}function ME(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new gr,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||i!==0||r;return r=p,i=f.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){n=d(f,p,0)},this.setState=function(f,p,g){const _=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?d(null):c();else{const v=s?0:i,x=v*4;let M=u.clippingState||null;l.value=M,M=d(_,p,x,g);for(let C=0;C!==x;++C)M[C]=n[C];u.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,p,g,_){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const u=g+y*4,v=p.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,M=g;x!==y;++x,M+=4)a.copy(f[x]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function EE(t){let e=new WeakMap;function n(a,o){return o===td?a.mapping=Ls:o===nd&&(a.mapping=Ps),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===td||o===nd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new IS(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ex extends Zg{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const fs=4,Dp=[.125,.215,.35,.446,.526,.582],_r=20,Qc=new ex,Up=new Xe;let Jc=null,eu=0,tu=0;const xr=(1+Math.sqrt(5))/2,Jr=1/xr,Op=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,xr,Jr),new k(0,xr,-Jr),new k(Jr,0,xr),new k(-Jr,0,xr),new k(xr,Jr,0),new k(-xr,Jr,0)];class Fp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Jc=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jc,eu,tu),e.scissorTest=!1,Lo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ls||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jc=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:Da,format:jn,colorSpace:sr,depthBuffer:!1},r=kp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wE(s)),this._blurMaterial=TE(s,e,n)}return r}_compileMaterial(e){const n=new Se(this._lodPlanes[0],e);this._renderer.compile(n,Qc)}_sceneToCubeUV(e,n,i,r){const o=new Ln(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Up),d.toneMapping=Ki,d.autoClear=!1;const g=new yn({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),_=new Se(new ct,g);let y=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,y=!0):(g.color.copy(Up),y=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):v===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const x=this._cubeSize;Lo(r,v*x,u>2?x:0,x,x),d.setRenderTarget(r),y&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ls||e.mapping===Ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Se(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Lo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Qc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Op[(r-1)%Op.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Se(this._lodPlanes[r],c),p=c.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*_r-1),y=s/_,m=isFinite(s)?1+Math.floor(d*y):_r;m>_r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_r}`);const u=[];let v=0;for(let b=0;b<_r;++b){const P=b/y,H=Math.exp(-P*P/2);u.push(H),b===0?v+=H:b<m&&(v+=2*H)}for(let b=0;b<u.length;b++)u[b]=u[b]/v;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:x}=this;p.dTheta.value=_,p.mipInt.value=x-i;const M=this._sizeLods[r],C=3*M*(r>x-fs?r-x+fs:0),A=4*(this._cubeSize-M);Lo(n,C,A,3*M,2*M),l.setRenderTarget(n),l.render(f,Qc)}}function wE(t){const e=[],n=[],i=[];let r=t;const s=t-fs+1+Dp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-fs?l=Dp[a-t+fs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,f=1+c,p=[d,d,f,d,f,f,d,d,f,f,d,f],g=6,_=6,y=3,m=2,u=1,v=new Float32Array(y*_*g),x=new Float32Array(m*_*g),M=new Float32Array(u*_*g);for(let A=0;A<g;A++){const b=A%3*2/3-1,P=A>2?0:-1,H=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];v.set(H,y*_*A),x.set(p,m*_*A);const S=[A,A,A,A,A,A];M.set(S,u*_*A)}const C=new Gt;C.setAttribute("position",new mn(v,y)),C.setAttribute("uv",new mn(x,m)),C.setAttribute("faceIndex",new mn(M,u)),e.push(C),r>fs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function kp(t,e,n){const i=new Ir(t,e,n);return i.texture.mapping=Hl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function TE(t,e,n){const i=new Float32Array(_r),r=new k(0,1,0);return new tr({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function zp(){return new tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Bp(){return new tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function uh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bE(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===td||l===nd,d=l===Ls||l===Ps;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return n===null&&(n=new Fp(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new Fp(t));const p=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",s),p.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function AE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function RE(t,e,n,i){const r={},s=new WeakMap;function a(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const y=p.morphAttributes[_];for(let m=0,u=y.length;m<u;m++)e.remove(y[m])}p.removeEventListener("dispose",a),delete r[p.id];const g=s.get(p);g&&(e.remove(g),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function o(f,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,n.memory.geometries++),p}function l(f){const p=f.attributes;for(const _ in p)e.update(p[_],t.ARRAY_BUFFER);const g=f.morphAttributes;for(const _ in g){const y=g[_];for(let m=0,u=y.length;m<u;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(f){const p=[],g=f.index,_=f.attributes.position;let y=0;if(g!==null){const v=g.array;y=g.version;for(let x=0,M=v.length;x<M;x+=3){const C=v[x+0],A=v[x+1],b=v[x+2];p.push(C,A,A,b,b,C)}}else if(_!==void 0){const v=_.array;y=_.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const C=x+0,A=x+1,b=x+2;p.push(C,A,A,b,b,C)}}else return;const m=new(Hg(p)?qg:Yg)(p,1);m.version=y;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function d(f){const p=s.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function CE(t,e,n,i){const r=i.isWebGL2;let s;function a(g){s=g}let o,l;function c(g){o=g.type,l=g.bytesPerElement}function d(g,_){t.drawElements(s,_,o,g*l),n.update(_,s,1)}function f(g,_,y){if(y===0)return;let m,u;if(r)m=t,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,_,o,g*l,y),n.update(_,s,y)}function p(g,_,y){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<y;u++)this.render(g[u]/l,_[u]);else{m.multiDrawElementsWEBGL(s,_,0,o,g,0,y);let u=0;for(let v=0;v<y;v++)u+=_[v];n.update(u,s,1)}}this.setMode=a,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=p}function NE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function LE(t,e){return t[0]-e[0]}function PE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function IE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new Ut,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=_!==void 0?_.length:0;let m=s.get(d);if(m===void 0||m.count!==y){let Q=function(){N.dispose(),s.delete(d),d.removeEventListener("dispose",Q)};var g=Q;m!==void 0&&m.texture.dispose();const u=d.morphAttributes.position!==void 0,v=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],A=d.morphAttributes.color||[];let b=0;u===!0&&(b=1),v===!0&&(b=2),x===!0&&(b=3);let P=d.attributes.position.count*b,H=1;P>e.maxTextureSize&&(H=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const S=new Float32Array(P*H*4*y),N=new Wg(S,P,H,y);N.type=mi,N.needsUpdate=!0;const $=b*4;for(let I=0;I<y;I++){const K=M[I],j=C[I],ie=A[I],U=P*H*4*I;for(let G=0;G<K.count;G++){const R=G*$;u===!0&&(a.fromBufferAttribute(K,G),S[U+R+0]=a.x,S[U+R+1]=a.y,S[U+R+2]=a.z,S[U+R+3]=0),v===!0&&(a.fromBufferAttribute(j,G),S[U+R+4]=a.x,S[U+R+5]=a.y,S[U+R+6]=a.z,S[U+R+7]=0),x===!0&&(a.fromBufferAttribute(ie,G),S[U+R+8]=a.x,S[U+R+9]=a.y,S[U+R+10]=a.z,S[U+R+11]=ie.itemSize===4?a.w:1)}}m={count:y,texture:N,size:new Ze(P,H)},s.set(d,m),d.addEventListener("dispose",Q)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(t,"morphTexture",c.morphTexture,n);else{let u=0;for(let x=0;x<p.length;x++)u+=p[x];const v=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",p)}f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=p===void 0?0:p.length;let y=i[d.id];if(y===void 0||y.length!==_){y=[];for(let M=0;M<_;M++)y[M]=[M,0];i[d.id]=y}for(let M=0;M<_;M++){const C=y[M];C[0]=M,C[1]=p[M]}y.sort(PE);for(let M=0;M<8;M++)M<_&&y[M][1]?(o[M][0]=y[M][0],o[M][1]=y[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(LE);const m=d.morphAttributes.position,u=d.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const C=o[M],A=C[0],b=C[1];A!==Number.MAX_SAFE_INTEGER&&b?(m&&d.getAttribute("morphTarget"+M)!==m[A]&&d.setAttribute("morphTarget"+M,m[A]),u&&d.getAttribute("morphNormal"+M)!==u[A]&&d.setAttribute("morphNormal"+M,u[A]),r[M]=b,v+=b):(m&&d.hasAttribute("morphTarget"+M)===!0&&d.deleteAttribute("morphTarget"+M),u&&d.hasAttribute("morphNormal"+M)===!0&&d.deleteAttribute("morphNormal"+M),r[M]=0)}const x=d.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",x),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function DE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class tx extends pn{constructor(e,n,i,r,s,a,o,l,c,d){if(d=d!==void 0?d:Ar,d!==Ar&&d!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Ar&&(i=Bi),i===void 0&&d===Is&&(i=br),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const nx=new pn,ix=new tx(1,1);ix.compareFunction=Gg;const rx=new Wg,sx=new gS,ax=new Qg,Gp=[],Hp=[],Vp=new Float32Array(16),jp=new Float32Array(9),Wp=new Float32Array(4);function Gs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Gp[r];if(s===void 0&&(s=new Float32Array(r),Gp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function jl(t,e){let n=Hp[e];n===void 0&&(n=new Int32Array(e),Hp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function UE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function OE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function FE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function kE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function zE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Nt(n,i))return;Wp.set(i),t.uniformMatrix2fv(this.addr,!1,Wp),Lt(n,i)}}function BE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Nt(n,i))return;jp.set(i),t.uniformMatrix3fv(this.addr,!1,jp),Lt(n,i)}}function GE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Nt(n,i))return;Vp.set(i),t.uniformMatrix4fv(this.addr,!1,Vp),Lt(n,i)}}function HE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function VE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function jE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function XE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function $E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function YE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function qE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function KE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?ix:nx;n.setTexture2D(e||s,r)}function ZE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||sx,r)}function QE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ax,r)}function JE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||rx,r)}function ew(t){switch(t){case 5126:return UE;case 35664:return OE;case 35665:return FE;case 35666:return kE;case 35674:return zE;case 35675:return BE;case 35676:return GE;case 5124:case 35670:return HE;case 35667:case 35671:return VE;case 35668:case 35672:return jE;case 35669:case 35673:return WE;case 5125:return XE;case 36294:return $E;case 36295:return YE;case 36296:return qE;case 35678:case 36198:case 36298:case 36306:case 35682:return KE;case 35679:case 36299:case 36307:return ZE;case 35680:case 36300:case 36308:case 36293:return QE;case 36289:case 36303:case 36311:case 36292:return JE}}function tw(t,e){t.uniform1fv(this.addr,e)}function nw(t,e){const n=Gs(e,this.size,2);t.uniform2fv(this.addr,n)}function iw(t,e){const n=Gs(e,this.size,3);t.uniform3fv(this.addr,n)}function rw(t,e){const n=Gs(e,this.size,4);t.uniform4fv(this.addr,n)}function sw(t,e){const n=Gs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function aw(t,e){const n=Gs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ow(t,e){const n=Gs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function lw(t,e){t.uniform1iv(this.addr,e)}function cw(t,e){t.uniform2iv(this.addr,e)}function uw(t,e){t.uniform3iv(this.addr,e)}function dw(t,e){t.uniform4iv(this.addr,e)}function hw(t,e){t.uniform1uiv(this.addr,e)}function fw(t,e){t.uniform2uiv(this.addr,e)}function pw(t,e){t.uniform3uiv(this.addr,e)}function mw(t,e){t.uniform4uiv(this.addr,e)}function gw(t,e,n){const i=this.cache,r=e.length,s=jl(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||nx,s[a])}function xw(t,e,n){const i=this.cache,r=e.length,s=jl(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||sx,s[a])}function vw(t,e,n){const i=this.cache,r=e.length,s=jl(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||ax,s[a])}function _w(t,e,n){const i=this.cache,r=e.length,s=jl(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||rx,s[a])}function yw(t){switch(t){case 5126:return tw;case 35664:return nw;case 35665:return iw;case 35666:return rw;case 35674:return sw;case 35675:return aw;case 35676:return ow;case 5124:case 35670:return lw;case 35667:case 35671:return cw;case 35668:case 35672:return uw;case 35669:case 35673:return dw;case 5125:return hw;case 36294:return fw;case 36295:return pw;case 36296:return mw;case 35678:case 36198:case 36298:case 36306:case 35682:return gw;case 35679:case 36299:case 36307:return xw;case 35680:case 36300:case 36308:case 36293:return vw;case 36289:case 36303:case 36311:case 36292:return _w}}class Sw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ew(n.type)}}class Mw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=yw(n.type)}}class Ew{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const nu=/(\w+)(\])?(\[|\.)?/g;function Xp(t,e){t.seq.push(e),t.map[e.id]=e}function ww(t,e,n){const i=t.name,r=i.length;for(nu.lastIndex=0;;){const s=nu.exec(i),a=nu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Xp(n,c===void 0?new Sw(o,t,e):new Mw(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new Ew(o),Xp(n,f)),n=f}}}class $o{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);ww(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function $p(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Tw=37297;let bw=0;function Aw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function Rw(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===Sl&&n===yl?i="LinearDisplayP3ToLinearSRGB":e===yl&&n===Sl&&(i="LinearSRGBToLinearDisplayP3"),t){case sr:case Vl:return[i,"LinearTransferOETF"];case Zn:case ah:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Yp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Aw(t.getShaderSource(e),a)}else return r}function Cw(t,e){const n=Rw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Nw(t,e){let n;switch(e){case by:n="Linear";break;case Ay:n="Reinhard";break;case Ry:n="OptimizedCineon";break;case Lg:n="ACESFilmic";break;case Ny:n="AgX";break;case Ly:n="Neutral";break;case Cy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Lw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ps).join(`
`)}function Pw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function Iw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Dw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ps(t){return t!==""}function qp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uw=/^[ \t]*#include +<([\w\d./]+)>/gm;function od(t){return t.replace(Uw,Fw)}const Ow=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Fw(t,e){let n=Ve[e];if(n===void 0){const i=Ow.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return od(n)}const kw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zp(t){return t.replace(kw,zw)}function zw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Rg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Cg?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function Gw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ls:case Ps:e="ENVMAP_TYPE_CUBE";break;case Hl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function Vw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ng:e="ENVMAP_BLENDING_MULTIPLY";break;case wy:e="ENVMAP_BLENDING_MIX";break;case Ty:e="ENVMAP_BLENDING_ADD";break}return e}function jw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Ww(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Bw(n),c=Gw(n),d=Hw(n),f=Vw(n),p=jw(n),g=n.isWebGL2?"":Lw(n),_=Pw(n),y=Iw(s),m=r.createProgram();let u,v,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ps).join(`
`),u.length>0&&(u+=`
`),v=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ps).join(`
`),v.length>0&&(v+=`
`)):(u=[Qp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),v=[g,Qp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ki?"#define TONE_MAPPING":"",n.toneMapping!==Ki?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Ki?Nw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Cw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ps).join(`
`)),a=od(a),a=qp(a,n),a=Kp(a,n),o=od(o),o=qp(o,n),o=Kp(o,n),a=Zp(a),o=Zp(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===pp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===pp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=x+u+a,C=x+v+o,A=$p(r,r.VERTEX_SHADER,M),b=$p(r,r.FRAGMENT_SHADER,C);r.attachShader(m,A),r.attachShader(m,b),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function P($){if(t.debug.checkShaderErrors){const Q=r.getProgramInfoLog(m).trim(),I=r.getShaderInfoLog(A).trim(),K=r.getShaderInfoLog(b).trim();let j=!0,ie=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,A,b);else{const U=Yp(r,A,"vertex"),G=Yp(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+Q+`
`+U+`
`+G)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(I===""||K==="")&&(ie=!1);ie&&($.diagnostics={runnable:j,programLog:Q,vertexShader:{log:I,prefix:u},fragmentShader:{log:K,prefix:v}})}r.deleteShader(A),r.deleteShader(b),H=new $o(r,m),S=Dw(r,m)}let H;this.getUniforms=function(){return H===void 0&&P(this),H};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(m,Tw)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=bw++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=b,this}let Xw=0;class $w{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Yw(e),n.set(e,i)),i}}class Yw{constructor(e){this.id=Xw++,this.code=e,this.usedTimes=0}}function qw(t,e,n,i,r,s,a){const o=new Xg,l=new $w,c=new Set,d=[],f=r.isWebGL2,p=r.logarithmicDepthBuffer,g=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function u(S,N,$,Q,I){const K=Q.fog,j=I.geometry,ie=S.isMeshStandardMaterial?Q.environment:null,U=(S.isMeshStandardMaterial?n:e).get(S.envMap||ie),G=U&&U.mapping===Hl?U.image.height:null,R=y[S.type];S.precision!==null&&(_=r.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const w=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,z=w!==void 0?w.length:0;let J=0;j.morphAttributes.position!==void 0&&(J=1),j.morphAttributes.normal!==void 0&&(J=2),j.morphAttributes.color!==void 0&&(J=3);let D,W,ee,te;if(R){const rt=Jn[R];D=rt.vertexShader,W=rt.fragmentShader}else D=S.vertexShader,W=S.fragmentShader,l.update(S),ee=l.getVertexShaderID(S),te=l.getFragmentShaderID(S);const se=t.getRenderTarget(),oe=I.isInstancedMesh===!0,Te=I.isBatchedMesh===!0,xe=!!S.map,F=!!S.matcap,Ke=!!U,ue=!!S.aoMap,be=!!S.lightMap,ye=!!S.bumpMap,Pe=!!S.normalMap,Re=!!S.displacementMap,Ie=!!S.emissiveMap,et=!!S.metalnessMap,L=!!S.roughnessMap,E=S.anisotropy>0,Z=S.clearcoat>0,ne=S.iridescence>0,le=S.sheen>0,re=S.transmission>0,ke=E&&!!S.anisotropyMap,Ne=Z&&!!S.clearcoatMap,de=Z&&!!S.clearcoatNormalMap,pe=Z&&!!S.clearcoatRoughnessMap,Oe=ne&&!!S.iridescenceMap,ce=ne&&!!S.iridescenceThicknessMap,yt=le&&!!S.sheenColorMap,$e=le&&!!S.sheenRoughnessMap,Ae=!!S.specularMap,Me=!!S.specularColorMap,Ee=!!S.specularIntensityMap,Qe=re&&!!S.transmissionMap,Be=re&&!!S.thicknessMap,dt=!!S.gradientMap,O=!!S.alphaMap,me=S.alphaTest>0,X=!!S.alphaHash,he=!!S.extensions;let ge=Ki;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ge=t.toneMapping);const qe={isWebGL2:f,shaderID:R,shaderType:S.type,shaderName:S.name,vertexShader:D,fragmentShader:W,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:te,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:Te,instancing:oe,instancingColor:oe&&I.instanceColor!==null,instancingMorph:oe&&I.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:sr,alphaToCoverage:!!S.alphaToCoverage,map:xe,matcap:F,envMap:Ke,envMapMode:Ke&&U.mapping,envMapCubeUVHeight:G,aoMap:ue,lightMap:be,bumpMap:ye,normalMap:Pe,displacementMap:g&&Re,emissiveMap:Ie,normalMapObjectSpace:Pe&&S.normalMapType===Hy,normalMapTangentSpace:Pe&&S.normalMapType===Bg,metalnessMap:et,roughnessMap:L,anisotropy:E,anisotropyMap:ke,clearcoat:Z,clearcoatMap:Ne,clearcoatNormalMap:de,clearcoatRoughnessMap:pe,iridescence:ne,iridescenceMap:Oe,iridescenceThicknessMap:ce,sheen:le,sheenColorMap:yt,sheenRoughnessMap:$e,specularMap:Ae,specularColorMap:Me,specularIntensityMap:Ee,transmission:re,transmissionMap:Qe,thicknessMap:Be,gradientMap:dt,opaque:S.transparent===!1&&S.blending===Ss&&S.alphaToCoverage===!1,alphaMap:O,alphaTest:me,alphaHash:X,combine:S.combine,mapUv:xe&&m(S.map.channel),aoMapUv:ue&&m(S.aoMap.channel),lightMapUv:be&&m(S.lightMap.channel),bumpMapUv:ye&&m(S.bumpMap.channel),normalMapUv:Pe&&m(S.normalMap.channel),displacementMapUv:Re&&m(S.displacementMap.channel),emissiveMapUv:Ie&&m(S.emissiveMap.channel),metalnessMapUv:et&&m(S.metalnessMap.channel),roughnessMapUv:L&&m(S.roughnessMap.channel),anisotropyMapUv:ke&&m(S.anisotropyMap.channel),clearcoatMapUv:Ne&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:de&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:$e&&m(S.sheenRoughnessMap.channel),specularMapUv:Ae&&m(S.specularMap.channel),specularColorMapUv:Me&&m(S.specularColorMap.channel),specularIntensityMapUv:Ee&&m(S.specularIntensityMap.channel),transmissionMapUv:Qe&&m(S.transmissionMap.channel),thicknessMapUv:Be&&m(S.thicknessMap.channel),alphaMapUv:O&&m(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Pe||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!j.attributes.uv&&(xe||O),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:I.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:J,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&$.length>0,shadowMapType:t.shadowMap.type,toneMapping:ge,useLegacyLights:t._useLegacyLights,decodeVideoTexture:xe&&S.map.isVideoTexture===!0&&it.getTransfer(S.map.colorSpace)===lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===pi,flipSided:S.side===fn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:he&&S.extensions.derivatives===!0,extensionFragDepth:he&&S.extensions.fragDepth===!0,extensionDrawBuffers:he&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:he&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return qe.vertexUv1s=c.has(1),qe.vertexUv2s=c.has(2),qe.vertexUv3s=c.has(3),c.clear(),qe}function v(S){const N=[];if(S.shaderID?N.push(S.shaderID):(N.push(S.customVertexShaderID),N.push(S.customFragmentShaderID)),S.defines!==void 0)for(const $ in S.defines)N.push($),N.push(S.defines[$]);return S.isRawShaderMaterial===!1&&(x(N,S),M(N,S),N.push(t.outputColorSpace)),N.push(S.customProgramCacheKey),N.join()}function x(S,N){S.push(N.precision),S.push(N.outputColorSpace),S.push(N.envMapMode),S.push(N.envMapCubeUVHeight),S.push(N.mapUv),S.push(N.alphaMapUv),S.push(N.lightMapUv),S.push(N.aoMapUv),S.push(N.bumpMapUv),S.push(N.normalMapUv),S.push(N.displacementMapUv),S.push(N.emissiveMapUv),S.push(N.metalnessMapUv),S.push(N.roughnessMapUv),S.push(N.anisotropyMapUv),S.push(N.clearcoatMapUv),S.push(N.clearcoatNormalMapUv),S.push(N.clearcoatRoughnessMapUv),S.push(N.iridescenceMapUv),S.push(N.iridescenceThicknessMapUv),S.push(N.sheenColorMapUv),S.push(N.sheenRoughnessMapUv),S.push(N.specularMapUv),S.push(N.specularColorMapUv),S.push(N.specularIntensityMapUv),S.push(N.transmissionMapUv),S.push(N.thicknessMapUv),S.push(N.combine),S.push(N.fogExp2),S.push(N.sizeAttenuation),S.push(N.morphTargetsCount),S.push(N.morphAttributeCount),S.push(N.numDirLights),S.push(N.numPointLights),S.push(N.numSpotLights),S.push(N.numSpotLightMaps),S.push(N.numHemiLights),S.push(N.numRectAreaLights),S.push(N.numDirLightShadows),S.push(N.numPointLightShadows),S.push(N.numSpotLightShadows),S.push(N.numSpotLightShadowsWithMaps),S.push(N.numLightProbes),S.push(N.shadowMapType),S.push(N.toneMapping),S.push(N.numClippingPlanes),S.push(N.numClipIntersection),S.push(N.depthPacking)}function M(S,N){o.disableAll(),N.isWebGL2&&o.enable(0),N.supportsVertexTextures&&o.enable(1),N.instancing&&o.enable(2),N.instancingColor&&o.enable(3),N.instancingMorph&&o.enable(4),N.matcap&&o.enable(5),N.envMap&&o.enable(6),N.normalMapObjectSpace&&o.enable(7),N.normalMapTangentSpace&&o.enable(8),N.clearcoat&&o.enable(9),N.iridescence&&o.enable(10),N.alphaTest&&o.enable(11),N.vertexColors&&o.enable(12),N.vertexAlphas&&o.enable(13),N.vertexUv1s&&o.enable(14),N.vertexUv2s&&o.enable(15),N.vertexUv3s&&o.enable(16),N.vertexTangents&&o.enable(17),N.anisotropy&&o.enable(18),N.alphaHash&&o.enable(19),N.batching&&o.enable(20),S.push(o.mask),o.disableAll(),N.fog&&o.enable(0),N.useFog&&o.enable(1),N.flatShading&&o.enable(2),N.logarithmicDepthBuffer&&o.enable(3),N.skinning&&o.enable(4),N.morphTargets&&o.enable(5),N.morphNormals&&o.enable(6),N.morphColors&&o.enable(7),N.premultipliedAlpha&&o.enable(8),N.shadowMapEnabled&&o.enable(9),N.useLegacyLights&&o.enable(10),N.doubleSided&&o.enable(11),N.flipSided&&o.enable(12),N.useDepthPacking&&o.enable(13),N.dithering&&o.enable(14),N.transmission&&o.enable(15),N.sheen&&o.enable(16),N.opaque&&o.enable(17),N.pointsUvs&&o.enable(18),N.decodeVideoTexture&&o.enable(19),N.alphaToCoverage&&o.enable(20),S.push(o.mask)}function C(S){const N=y[S.type];let $;if(N){const Q=Jn[N];$=CS.clone(Q.uniforms)}else $=S.uniforms;return $}function A(S,N){let $;for(let Q=0,I=d.length;Q<I;Q++){const K=d[Q];if(K.cacheKey===N){$=K,++$.usedTimes;break}}return $===void 0&&($=new Ww(t,N,S,s),d.push($)),$}function b(S){if(--S.usedTimes===0){const N=d.indexOf(S);d[N]=d[d.length-1],d.pop(),S.destroy()}}function P(S){l.remove(S)}function H(){l.dispose()}return{getParameters:u,getProgramCacheKey:v,getUniforms:C,acquireProgram:A,releaseProgram:b,releaseShaderCache:P,programs:d,dispose:H}}function Kw(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Zw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Jp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function em(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,p,g,_,y,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:p,material:g,groupOrder:_,renderOrder:f.renderOrder,z:y,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=g,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=y,u.group=m),e++,u}function o(f,p,g,_,y,m){const u=a(f,p,g,_,y,m);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(f,p,g,_,y,m){const u=a(f,p,g,_,y,m);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,p){n.length>1&&n.sort(f||Zw),i.length>1&&i.sort(p||Jp),r.length>1&&r.sort(p||Jp)}function d(){for(let f=e,p=t.length;f<p;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function Qw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new em,t.set(i,[a])):r>=s.length?(a=new em,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Jw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Xe};break;case"SpotLight":n={position:new k,direction:new k,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function eT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let tT=0;function nT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function iT(t,e){const n=new Jw,i=eT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new k);const s=new k,a=new vt,o=new vt;function l(d,f){let p=0,g=0,_=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let y=0,m=0,u=0,v=0,x=0,M=0,C=0,A=0,b=0,P=0,H=0;d.sort(nT);const S=f===!0?Math.PI:1;for(let $=0,Q=d.length;$<Q;$++){const I=d[$],K=I.color,j=I.intensity,ie=I.distance,U=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)p+=K.r*j*S,g+=K.g*j*S,_+=K.b*j*S;else if(I.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(I.sh.coefficients[G],j);H++}else if(I.isDirectionalLight){const G=n.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity*S),I.castShadow){const R=I.shadow,w=i.get(I);w.shadowBias=R.bias,w.shadowNormalBias=R.normalBias,w.shadowRadius=R.radius,w.shadowMapSize=R.mapSize,r.directionalShadow[y]=w,r.directionalShadowMap[y]=U,r.directionalShadowMatrix[y]=I.shadow.matrix,M++}r.directional[y]=G,y++}else if(I.isSpotLight){const G=n.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(K).multiplyScalar(j*S),G.distance=ie,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,r.spot[u]=G;const R=I.shadow;if(I.map&&(r.spotLightMap[b]=I.map,b++,R.updateMatrices(I),I.castShadow&&P++),r.spotLightMatrix[u]=R.matrix,I.castShadow){const w=i.get(I);w.shadowBias=R.bias,w.shadowNormalBias=R.normalBias,w.shadowRadius=R.radius,w.shadowMapSize=R.mapSize,r.spotShadow[u]=w,r.spotShadowMap[u]=U,A++}u++}else if(I.isRectAreaLight){const G=n.get(I);G.color.copy(K).multiplyScalar(j),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),r.rectArea[v]=G,v++}else if(I.isPointLight){const G=n.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity*S),G.distance=I.distance,G.decay=I.decay,I.castShadow){const R=I.shadow,w=i.get(I);w.shadowBias=R.bias,w.shadowNormalBias=R.normalBias,w.shadowRadius=R.radius,w.shadowMapSize=R.mapSize,w.shadowCameraNear=R.camera.near,w.shadowCameraFar=R.camera.far,r.pointShadow[m]=w,r.pointShadowMap[m]=U,r.pointShadowMatrix[m]=I.shadow.matrix,C++}r.point[m]=G,m++}else if(I.isHemisphereLight){const G=n.get(I);G.skyColor.copy(I.color).multiplyScalar(j*S),G.groundColor.copy(I.groundColor).multiplyScalar(j*S),r.hemi[x]=G,x++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=g,r.ambient[2]=_;const N=r.hash;(N.directionalLength!==y||N.pointLength!==m||N.spotLength!==u||N.rectAreaLength!==v||N.hemiLength!==x||N.numDirectionalShadows!==M||N.numPointShadows!==C||N.numSpotShadows!==A||N.numSpotMaps!==b||N.numLightProbes!==H)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=v,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=A+b-P,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=H,N.directionalLength=y,N.pointLength=m,N.spotLength=u,N.rectAreaLength=v,N.hemiLength=x,N.numDirectionalShadows=M,N.numPointShadows=C,N.numSpotShadows=A,N.numSpotMaps=b,N.numLightProbes=H,r.version=tT++)}function c(d,f){let p=0,g=0,_=0,y=0,m=0;const u=f.matrixWorldInverse;for(let v=0,x=d.length;v<x;v++){const M=d[v];if(M.isDirectionalLight){const C=r.directional[p];C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),p++}else if(M.isSpotLight){const C=r.spot[_];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),_++}else if(M.isRectAreaLight){const C=r.rectArea[y];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(u),o.identity(),a.copy(M.matrixWorld),a.premultiply(u),o.extractRotation(a),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){const C=r.point[g];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(u),g++}else if(M.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:r}}function tm(t,e){const n=new iT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function rT(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new tm(t,e),n.set(s,[l])):a>=o.length?(l=new tm(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class sT extends Or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=By,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aT extends Or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const oT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cT(t,e,n){let i=new ch;const r=new Ze,s=new Ze,a=new Ut,o=new sT({depthPacking:Gy}),l=new aT,c={},d=n.maxTextureSize,f={[er]:fn,[fn]:er,[pi]:pi},p=new tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:oT,fragmentShader:lT}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const _=new Gt;_.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Se(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rg;let u=this.type;this.render=function(A,b,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const H=t.getRenderTarget(),S=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),$=t.state;$.setBlending(qi),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const Q=u!==di&&this.type===di,I=u===di&&this.type!==di;for(let K=0,j=A.length;K<j;K++){const ie=A[K],U=ie.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const G=U.getFrameExtents();if(r.multiply(G),s.copy(U.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/G.x),r.x=s.x*G.x,U.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/G.y),r.y=s.y*G.y,U.mapSize.y=s.y)),U.map===null||Q===!0||I===!0){const w=this.type!==di?{minFilter:en,magFilter:en}:{};U.map!==null&&U.map.dispose(),U.map=new Ir(r.x,r.y,w),U.map.texture.name=ie.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const R=U.getViewportCount();for(let w=0;w<R;w++){const z=U.getViewport(w);a.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),$.viewport(a),U.updateMatrices(ie,w),i=U.getFrustum(),M(b,P,U.camera,ie,this.type)}U.isPointLightShadow!==!0&&this.type===di&&v(U,P),U.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(H,S,N)};function v(A,b){const P=e.update(y);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ir(r.x,r.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(b,null,P,p,y,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(b,null,P,g,y,null)}function x(A,b,P,H){let S=null;const N=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)S=N;else if(S=P.isPointLight===!0?l:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const $=S.uuid,Q=b.uuid;let I=c[$];I===void 0&&(I={},c[$]=I);let K=I[Q];K===void 0&&(K=S.clone(),I[Q]=K,b.addEventListener("dispose",C)),S=K}if(S.visible=b.visible,S.wireframe=b.wireframe,H===di?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:f[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const $=t.properties.get(S);$.light=P}return S}function M(A,b,P,H,S){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===di)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const Q=e.update(A),I=A.material;if(Array.isArray(I)){const K=Q.groups;for(let j=0,ie=K.length;j<ie;j++){const U=K[j],G=I[U.materialIndex];if(G&&G.visible){const R=x(A,G,H,S);A.onBeforeShadow(t,A,b,P,Q,R,U),t.renderBufferDirect(P,null,Q,R,A,U),A.onAfterShadow(t,A,b,P,Q,R,U)}}}else if(I.visible){const K=x(A,I,H,S);A.onBeforeShadow(t,A,b,P,Q,K,null),t.renderBufferDirect(P,null,Q,K,A,null),A.onAfterShadow(t,A,b,P,Q,K,null)}}const $=A.children;for(let Q=0,I=$.length;Q<I;Q++)M($[Q],b,P,H,S)}function C(A){A.target.removeEventListener("dispose",C);for(const P in c){const H=c[P],S=A.target.uuid;S in H&&(H[S].dispose(),delete H[S])}}}function uT(t,e,n){const i=n.isWebGL2;function r(){let O=!1;const me=new Ut;let X=null;const he=new Ut(0,0,0,0);return{setMask:function(ge){X!==ge&&!O&&(t.colorMask(ge,ge,ge,ge),X=ge)},setLocked:function(ge){O=ge},setClear:function(ge,qe,rt,Ft,bn){bn===!0&&(ge*=Ft,qe*=Ft,rt*=Ft),me.set(ge,qe,rt,Ft),he.equals(me)===!1&&(t.clearColor(ge,qe,rt,Ft),he.copy(me))},reset:function(){O=!1,X=null,he.set(-1,0,0,0)}}}function s(){let O=!1,me=null,X=null,he=null;return{setTest:function(ge){ge?oe(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(ge){me!==ge&&!O&&(t.depthMask(ge),me=ge)},setFunc:function(ge){if(X!==ge){switch(ge){case xy:t.depthFunc(t.NEVER);break;case vy:t.depthFunc(t.ALWAYS);break;case _y:t.depthFunc(t.LESS);break;case vl:t.depthFunc(t.LEQUAL);break;case yy:t.depthFunc(t.EQUAL);break;case Sy:t.depthFunc(t.GEQUAL);break;case My:t.depthFunc(t.GREATER);break;case Ey:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}X=ge}},setLocked:function(ge){O=ge},setClear:function(ge){he!==ge&&(t.clearDepth(ge),he=ge)},reset:function(){O=!1,me=null,X=null,he=null}}}function a(){let O=!1,me=null,X=null,he=null,ge=null,qe=null,rt=null,Ft=null,bn=null;return{setTest:function(st){O||(st?oe(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(st){me!==st&&!O&&(t.stencilMask(st),me=st)},setFunc:function(st,Kt,Yn){(X!==st||he!==Kt||ge!==Yn)&&(t.stencilFunc(st,Kt,Yn),X=st,he=Kt,ge=Yn)},setOp:function(st,Kt,Yn){(qe!==st||rt!==Kt||Ft!==Yn)&&(t.stencilOp(st,Kt,Yn),qe=st,rt=Kt,Ft=Yn)},setLocked:function(st){O=st},setClear:function(st){bn!==st&&(t.clearStencil(st),bn=st)},reset:function(){O=!1,me=null,X=null,he=null,ge=null,qe=null,rt=null,Ft=null,bn=null}}}const o=new r,l=new s,c=new a,d=new WeakMap,f=new WeakMap;let p={},g={},_=new WeakMap,y=[],m=null,u=!1,v=null,x=null,M=null,C=null,A=null,b=null,P=null,H=new Xe(0,0,0),S=0,N=!1,$=null,Q=null,I=null,K=null,j=null;const ie=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,G=0;const R=t.getParameter(t.VERSION);R.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(R)[1]),U=G>=1):R.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),U=G>=2);let w=null,z={};const J=t.getParameter(t.SCISSOR_BOX),D=t.getParameter(t.VIEWPORT),W=new Ut().fromArray(J),ee=new Ut().fromArray(D);function te(O,me,X,he){const ge=new Uint8Array(4),qe=t.createTexture();t.bindTexture(O,qe),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let rt=0;rt<X;rt++)i&&(O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY)?t.texImage3D(me,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(me+rt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return qe}const se={};se[t.TEXTURE_2D]=te(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(se[t.TEXTURE_2D_ARRAY]=te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=te(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),oe(t.DEPTH_TEST),l.setFunc(vl),Re(!1),Ie(Df),oe(t.CULL_FACE),ye(qi);function oe(O){p[O]!==!0&&(t.enable(O),p[O]=!0)}function Te(O){p[O]!==!1&&(t.disable(O),p[O]=!1)}function xe(O,me){return g[O]!==me?(t.bindFramebuffer(O,me),g[O]=me,i&&(O===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=me),O===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=me)),!0):!1}function F(O,me){let X=y,he=!1;if(O){X=_.get(me),X===void 0&&(X=[],_.set(me,X));const ge=O.textures;if(X.length!==ge.length||X[0]!==t.COLOR_ATTACHMENT0){for(let qe=0,rt=ge.length;qe<rt;qe++)X[qe]=t.COLOR_ATTACHMENT0+qe;X.length=ge.length,he=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,he=!0);if(he)if(n.isWebGL2)t.drawBuffers(X);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(X);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Ke(O){return m!==O?(t.useProgram(O),m=O,!0):!1}const ue={[vr]:t.FUNC_ADD,[ny]:t.FUNC_SUBTRACT,[iy]:t.FUNC_REVERSE_SUBTRACT};if(i)ue[kf]=t.MIN,ue[zf]=t.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(ue[kf]=O.MIN_EXT,ue[zf]=O.MAX_EXT)}const be={[ry]:t.ZERO,[sy]:t.ONE,[ay]:t.SRC_COLOR,[Ju]:t.SRC_ALPHA,[hy]:t.SRC_ALPHA_SATURATE,[uy]:t.DST_COLOR,[ly]:t.DST_ALPHA,[oy]:t.ONE_MINUS_SRC_COLOR,[ed]:t.ONE_MINUS_SRC_ALPHA,[dy]:t.ONE_MINUS_DST_COLOR,[cy]:t.ONE_MINUS_DST_ALPHA,[fy]:t.CONSTANT_COLOR,[py]:t.ONE_MINUS_CONSTANT_COLOR,[my]:t.CONSTANT_ALPHA,[gy]:t.ONE_MINUS_CONSTANT_ALPHA};function ye(O,me,X,he,ge,qe,rt,Ft,bn,st){if(O===qi){u===!0&&(Te(t.BLEND),u=!1);return}if(u===!1&&(oe(t.BLEND),u=!0),O!==ty){if(O!==v||st!==N){if((x!==vr||A!==vr)&&(t.blendEquation(t.FUNC_ADD),x=vr,A=vr),st)switch(O){case Ss:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Uf:t.blendFunc(t.ONE,t.ONE);break;case Of:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ff:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ss:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Uf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Of:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ff:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,C=null,b=null,P=null,H.set(0,0,0),S=0,v=O,N=st}return}ge=ge||me,qe=qe||X,rt=rt||he,(me!==x||ge!==A)&&(t.blendEquationSeparate(ue[me],ue[ge]),x=me,A=ge),(X!==M||he!==C||qe!==b||rt!==P)&&(t.blendFuncSeparate(be[X],be[he],be[qe],be[rt]),M=X,C=he,b=qe,P=rt),(Ft.equals(H)===!1||bn!==S)&&(t.blendColor(Ft.r,Ft.g,Ft.b,bn),H.copy(Ft),S=bn),v=O,N=!1}function Pe(O,me){O.side===pi?Te(t.CULL_FACE):oe(t.CULL_FACE);let X=O.side===fn;me&&(X=!X),Re(X),O.blending===Ss&&O.transparent===!1?ye(qi):ye(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);const he=O.stencilWrite;c.setTest(he),he&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),L(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function Re(O){$!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),$=O)}function Ie(O){O!==J_?(oe(t.CULL_FACE),O!==Q&&(O===Df?t.cullFace(t.BACK):O===ey?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),Q=O}function et(O){O!==I&&(U&&t.lineWidth(O),I=O)}function L(O,me,X){O?(oe(t.POLYGON_OFFSET_FILL),(K!==me||j!==X)&&(t.polygonOffset(me,X),K=me,j=X)):Te(t.POLYGON_OFFSET_FILL)}function E(O){O?oe(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function Z(O){O===void 0&&(O=t.TEXTURE0+ie-1),w!==O&&(t.activeTexture(O),w=O)}function ne(O,me,X){X===void 0&&(w===null?X=t.TEXTURE0+ie-1:X=w);let he=z[X];he===void 0&&(he={type:void 0,texture:void 0},z[X]=he),(he.type!==O||he.texture!==me)&&(w!==X&&(t.activeTexture(X),w=X),t.bindTexture(O,me||se[O]),he.type=O,he.texture=me)}function le(){const O=z[w];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function re(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(){try{t.compressedTexImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function yt(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $e(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(O){W.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),W.copy(O))}function Ee(O){ee.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),ee.copy(O))}function Qe(O,me){let X=f.get(me);X===void 0&&(X=new WeakMap,f.set(me,X));let he=X.get(O);he===void 0&&(he=t.getUniformBlockIndex(me,O.name),X.set(O,he))}function Be(O,me){const he=f.get(me).get(O);d.get(me)!==he&&(t.uniformBlockBinding(me,he,O.__bindingPointIndex),d.set(me,he))}function dt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),p={},w=null,z={},g={},_=new WeakMap,y=[],m=null,u=!1,v=null,x=null,M=null,C=null,A=null,b=null,P=null,H=new Xe(0,0,0),S=0,N=!1,$=null,Q=null,I=null,K=null,j=null,W.set(0,0,t.canvas.width,t.canvas.height),ee.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:oe,disable:Te,bindFramebuffer:xe,drawBuffers:F,useProgram:Ke,setBlending:ye,setMaterial:Pe,setFlipSided:Re,setCullFace:Ie,setLineWidth:et,setPolygonOffset:L,setScissorTest:E,activeTexture:Z,bindTexture:ne,unbindTexture:le,compressedTexImage2D:re,compressedTexImage3D:ke,texImage2D:$e,texImage3D:Ae,updateUBOMapping:Qe,uniformBlockBinding:Be,texStorage2D:ce,texStorage3D:yt,texSubImage2D:Ne,texSubImage3D:de,compressedTexSubImage2D:pe,compressedTexSubImage3D:Oe,scissor:Me,viewport:Ee,reset:dt}}function dT(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ze,f=new WeakMap;let p;const g=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,E){return _?new OffscreenCanvas(L,E):wl("canvas")}function m(L,E,Z,ne){let le=1;const re=et(L);if((re.width>ne||re.height>ne)&&(le=ne/Math.max(re.width,re.height)),le<1||E===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ke=E?El:Math.floor,Ne=ke(le*re.width),de=ke(le*re.height);p===void 0&&(p=y(Ne,de));const pe=Z?y(Ne,de):p;return pe.width=Ne,pe.height=de,pe.getContext("2d").drawImage(L,0,0,Ne,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Ne+"x"+de+")."),pe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),L;return L}function u(L){const E=et(L);return ad(E.width)&&ad(E.height)}function v(L){return o?!1:L.wrapS!==Vn||L.wrapT!==Vn||L.minFilter!==en&&L.minFilter!==an}function x(L,E){return L.generateMipmaps&&E&&L.minFilter!==en&&L.minFilter!==an}function M(L){t.generateMipmap(L)}function C(L,E,Z,ne,le=!1){if(o===!1)return E;if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let re=E;if(E===t.RED&&(Z===t.FLOAT&&(re=t.R32F),Z===t.HALF_FLOAT&&(re=t.R16F),Z===t.UNSIGNED_BYTE&&(re=t.R8)),E===t.RED_INTEGER&&(Z===t.UNSIGNED_BYTE&&(re=t.R8UI),Z===t.UNSIGNED_SHORT&&(re=t.R16UI),Z===t.UNSIGNED_INT&&(re=t.R32UI),Z===t.BYTE&&(re=t.R8I),Z===t.SHORT&&(re=t.R16I),Z===t.INT&&(re=t.R32I)),E===t.RG&&(Z===t.FLOAT&&(re=t.RG32F),Z===t.HALF_FLOAT&&(re=t.RG16F),Z===t.UNSIGNED_BYTE&&(re=t.RG8)),E===t.RG_INTEGER&&(Z===t.UNSIGNED_BYTE&&(re=t.RG8UI),Z===t.UNSIGNED_SHORT&&(re=t.RG16UI),Z===t.UNSIGNED_INT&&(re=t.RG32UI),Z===t.BYTE&&(re=t.RG8I),Z===t.SHORT&&(re=t.RG16I),Z===t.INT&&(re=t.RG32I)),E===t.RGBA){const ke=le?_l:it.getTransfer(ne);Z===t.FLOAT&&(re=t.RGBA32F),Z===t.HALF_FLOAT&&(re=t.RGBA16F),Z===t.UNSIGNED_BYTE&&(re=ke===lt?t.SRGB8_ALPHA8:t.RGBA8),Z===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),Z===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function A(L,E,Z){return x(L,Z)===!0||L.isFramebufferTexture&&L.minFilter!==en&&L.minFilter!==an?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function b(L){return L===en||L===Bf||L===Zs?t.NEAREST:t.LINEAR}function P(L){const E=L.target;E.removeEventListener("dispose",P),S(E),E.isVideoTexture&&f.delete(E)}function H(L){const E=L.target;E.removeEventListener("dispose",H),$(E)}function S(L){const E=i.get(L);if(E.__webglInit===void 0)return;const Z=L.source,ne=g.get(Z);if(ne){const le=ne[E.__cacheKey];le.usedTimes--,le.usedTimes===0&&N(L),Object.keys(ne).length===0&&g.delete(Z)}i.remove(L)}function N(L){const E=i.get(L);t.deleteTexture(E.__webglTexture);const Z=L.source,ne=g.get(Z);delete ne[E.__cacheKey],a.memory.textures--}function $(L){const E=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(E.__webglFramebuffer[ne]))for(let le=0;le<E.__webglFramebuffer[ne].length;le++)t.deleteFramebuffer(E.__webglFramebuffer[ne][le]);else t.deleteFramebuffer(E.__webglFramebuffer[ne]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ne])}else{if(Array.isArray(E.__webglFramebuffer))for(let ne=0;ne<E.__webglFramebuffer.length;ne++)t.deleteFramebuffer(E.__webglFramebuffer[ne]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ne=0;ne<E.__webglColorRenderbuffer.length;ne++)E.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ne]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=L.textures;for(let ne=0,le=Z.length;ne<le;ne++){const re=i.get(Z[ne]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(Z[ne])}i.remove(L)}let Q=0;function I(){Q=0}function K(){const L=Q;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),Q+=1,L}function j(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ie(L,E){const Z=i.get(L);if(L.isVideoTexture&&Re(L),L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){const ne=L.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(Z,L,E);return}}n.bindTexture(t.TEXTURE_2D,Z.__webglTexture,t.TEXTURE0+E)}function U(L,E){const Z=i.get(L);if(L.version>0&&Z.__version!==L.version){ee(Z,L,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Z.__webglTexture,t.TEXTURE0+E)}function G(L,E){const Z=i.get(L);if(L.version>0&&Z.__version!==L.version){ee(Z,L,E);return}n.bindTexture(t.TEXTURE_3D,Z.__webglTexture,t.TEXTURE0+E)}function R(L,E){const Z=i.get(L);if(L.version>0&&Z.__version!==L.version){te(Z,L,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture,t.TEXTURE0+E)}const w={[id]:t.REPEAT,[Vn]:t.CLAMP_TO_EDGE,[rd]:t.MIRRORED_REPEAT},z={[en]:t.NEAREST,[Bf]:t.NEAREST_MIPMAP_NEAREST,[Zs]:t.NEAREST_MIPMAP_LINEAR,[an]:t.LINEAR,[Ac]:t.LINEAR_MIPMAP_NEAREST,[Er]:t.LINEAR_MIPMAP_LINEAR},J={[Vy]:t.NEVER,[qy]:t.ALWAYS,[jy]:t.LESS,[Gg]:t.LEQUAL,[Wy]:t.EQUAL,[Yy]:t.GEQUAL,[Xy]:t.GREATER,[$y]:t.NOTEQUAL};function D(L,E,Z){if(E.type===mi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===an||E.magFilter===Ac||E.magFilter===Zs||E.magFilter===Er||E.minFilter===an||E.minFilter===Ac||E.minFilter===Zs||E.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Z?(t.texParameteri(L,t.TEXTURE_WRAP_S,w[E.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,w[E.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,w[E.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,z[E.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,z[E.minFilter])):(t.texParameteri(L,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(L,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==Vn||E.wrapT!==Vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(L,t.TEXTURE_MAG_FILTER,b(E.magFilter)),t.texParameteri(L,t.TEXTURE_MIN_FILTER,b(E.minFilter)),E.minFilter!==en&&E.minFilter!==an&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,J[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===en||E.minFilter!==Zs&&E.minFilter!==Er||E.type===mi&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Da&&e.has("OES_texture_half_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function W(L,E){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",P));const ne=E.source;let le=g.get(ne);le===void 0&&(le={},g.set(ne,le));const re=j(E);if(re!==L.__cacheKey){le[re]===void 0&&(le[re]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),le[re].usedTimes++;const ke=le[L.__cacheKey];ke!==void 0&&(le[L.__cacheKey].usedTimes--,ke.usedTimes===0&&N(E)),L.__cacheKey=re,L.__webglTexture=le[re].texture}return Z}function ee(L,E,Z){let ne=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=t.TEXTURE_3D);const le=W(L,E),re=E.source;n.bindTexture(ne,L.__webglTexture,t.TEXTURE0+Z);const ke=i.get(re);if(re.version!==ke.__version||le===!0){n.activeTexture(t.TEXTURE0+Z);const Ne=it.getPrimaries(it.workingColorSpace),de=E.colorSpace===Fi?null:it.getPrimaries(E.colorSpace),pe=E.colorSpace===Fi||Ne===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Oe=v(E)&&u(E.image)===!1;let ce=m(E.image,Oe,!1,r.maxTextureSize);ce=Ie(E,ce);const yt=u(ce)||o,$e=s.convert(E.format,E.colorSpace);let Ae=s.convert(E.type),Me=C(E.internalFormat,$e,Ae,E.colorSpace,E.isVideoTexture);D(ne,E,yt);let Ee;const Qe=E.mipmaps,Be=o&&E.isVideoTexture!==!0&&Me!==zg,dt=ke.__version===void 0||le===!0,O=re.dataReady,me=A(E,ce,yt);if(E.isDepthTexture)Me=t.DEPTH_COMPONENT,o?E.type===mi?Me=t.DEPTH_COMPONENT32F:E.type===Bi?Me=t.DEPTH_COMPONENT24:E.type===br?Me=t.DEPTH24_STENCIL8:Me=t.DEPTH_COMPONENT16:E.type===mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ar&&Me===t.DEPTH_COMPONENT&&E.type!==sh&&E.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Bi,Ae=s.convert(E.type)),E.format===Is&&Me===t.DEPTH_COMPONENT&&(Me=t.DEPTH_STENCIL,E.type!==br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=br,Ae=s.convert(E.type))),dt&&(Be?n.texStorage2D(t.TEXTURE_2D,1,Me,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,Me,ce.width,ce.height,0,$e,Ae,null));else if(E.isDataTexture)if(Qe.length>0&&yt){Be&&dt&&n.texStorage2D(t.TEXTURE_2D,me,Me,Qe[0].width,Qe[0].height);for(let X=0,he=Qe.length;X<he;X++)Ee=Qe[X],Be?O&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,Ee.width,Ee.height,$e,Ae,Ee.data):n.texImage2D(t.TEXTURE_2D,X,Me,Ee.width,Ee.height,0,$e,Ae,Ee.data);E.generateMipmaps=!1}else Be?(dt&&n.texStorage2D(t.TEXTURE_2D,me,Me,ce.width,ce.height),O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce.width,ce.height,$e,Ae,ce.data)):n.texImage2D(t.TEXTURE_2D,0,Me,ce.width,ce.height,0,$e,Ae,ce.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Be&&dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Me,Qe[0].width,Qe[0].height,ce.depth);for(let X=0,he=Qe.length;X<he;X++)Ee=Qe[X],E.format!==jn?$e!==null?Be?O&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,Ee.width,Ee.height,ce.depth,$e,Ee.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,Me,Ee.width,Ee.height,ce.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,Ee.width,Ee.height,ce.depth,$e,Ae,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,Me,Ee.width,Ee.height,ce.depth,0,$e,Ae,Ee.data)}else{Be&&dt&&n.texStorage2D(t.TEXTURE_2D,me,Me,Qe[0].width,Qe[0].height);for(let X=0,he=Qe.length;X<he;X++)Ee=Qe[X],E.format!==jn?$e!==null?Be?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,Ee.width,Ee.height,$e,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,X,Me,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?O&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,Ee.width,Ee.height,$e,Ae,Ee.data):n.texImage2D(t.TEXTURE_2D,X,Me,Ee.width,Ee.height,0,$e,Ae,Ee.data)}else if(E.isDataArrayTexture)Be?(dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Me,ce.width,ce.height,ce.depth),O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,$e,Ae,ce.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Me,ce.width,ce.height,ce.depth,0,$e,Ae,ce.data);else if(E.isData3DTexture)Be?(dt&&n.texStorage3D(t.TEXTURE_3D,me,Me,ce.width,ce.height,ce.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,$e,Ae,ce.data)):n.texImage3D(t.TEXTURE_3D,0,Me,ce.width,ce.height,ce.depth,0,$e,Ae,ce.data);else if(E.isFramebufferTexture){if(dt)if(Be)n.texStorage2D(t.TEXTURE_2D,me,Me,ce.width,ce.height);else{let X=ce.width,he=ce.height;for(let ge=0;ge<me;ge++)n.texImage2D(t.TEXTURE_2D,ge,Me,X,he,0,$e,Ae,null),X>>=1,he>>=1}}else if(Qe.length>0&&yt){if(Be&&dt){const X=et(Qe[0]);n.texStorage2D(t.TEXTURE_2D,me,Me,X.width,X.height)}for(let X=0,he=Qe.length;X<he;X++)Ee=Qe[X],Be?O&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,$e,Ae,Ee):n.texImage2D(t.TEXTURE_2D,X,Me,$e,Ae,Ee);E.generateMipmaps=!1}else if(Be){if(dt){const X=et(ce);n.texStorage2D(t.TEXTURE_2D,me,Me,X.width,X.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,$e,Ae,ce)}else n.texImage2D(t.TEXTURE_2D,0,Me,$e,Ae,ce);x(E,yt)&&M(ne),ke.__version=re.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function te(L,E,Z){if(E.image.length!==6)return;const ne=W(L,E),le=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+Z);const re=i.get(le);if(le.version!==re.__version||ne===!0){n.activeTexture(t.TEXTURE0+Z);const ke=it.getPrimaries(it.workingColorSpace),Ne=E.colorSpace===Fi?null:it.getPrimaries(E.colorSpace),de=E.colorSpace===Fi||ke===Ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const pe=E.isCompressedTexture||E.image[0].isCompressedTexture,Oe=E.image[0]&&E.image[0].isDataTexture,ce=[];for(let X=0;X<6;X++)!pe&&!Oe?ce[X]=m(E.image[X],!1,!0,r.maxCubemapSize):ce[X]=Oe?E.image[X].image:E.image[X],ce[X]=Ie(E,ce[X]);const yt=ce[0],$e=u(yt)||o,Ae=s.convert(E.format,E.colorSpace),Me=s.convert(E.type),Ee=C(E.internalFormat,Ae,Me,E.colorSpace),Qe=o&&E.isVideoTexture!==!0,Be=re.__version===void 0||ne===!0,dt=le.dataReady;let O=A(E,yt,$e);D(t.TEXTURE_CUBE_MAP,E,$e);let me;if(pe){Qe&&Be&&n.texStorage2D(t.TEXTURE_CUBE_MAP,O,Ee,yt.width,yt.height);for(let X=0;X<6;X++){me=ce[X].mipmaps;for(let he=0;he<me.length;he++){const ge=me[he];E.format!==jn?Ae!==null?Qe?dt&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,he,0,0,ge.width,ge.height,Ae,ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,he,Ee,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?dt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,he,0,0,ge.width,ge.height,Ae,Me,ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,he,Ee,ge.width,ge.height,0,Ae,Me,ge.data)}}}else{if(me=E.mipmaps,Qe&&Be){me.length>0&&O++;const X=et(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,O,Ee,X.width,X.height)}for(let X=0;X<6;X++)if(Oe){Qe?dt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ce[X].width,ce[X].height,Ae,Me,ce[X].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ee,ce[X].width,ce[X].height,0,Ae,Me,ce[X].data);for(let he=0;he<me.length;he++){const qe=me[he].image[X].image;Qe?dt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,he+1,0,0,qe.width,qe.height,Ae,Me,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,he+1,Ee,qe.width,qe.height,0,Ae,Me,qe.data)}}else{Qe?dt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Ae,Me,ce[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ee,Ae,Me,ce[X]);for(let he=0;he<me.length;he++){const ge=me[he];Qe?dt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,he+1,0,0,Ae,Me,ge.image[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,he+1,Ee,Ae,Me,ge.image[X])}}}x(E,$e)&&M(t.TEXTURE_CUBE_MAP),re.__version=le.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function se(L,E,Z,ne,le,re){const ke=s.convert(Z.format,Z.colorSpace),Ne=s.convert(Z.type),de=C(Z.internalFormat,ke,Ne,Z.colorSpace);if(!i.get(E).__hasExternalTextures){const Oe=Math.max(1,E.width>>re),ce=Math.max(1,E.height>>re);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,re,de,Oe,ce,E.depth,0,ke,Ne,null):n.texImage2D(le,re,de,Oe,ce,0,ke,Ne,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),Pe(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,le,i.get(Z).__webglTexture,0,ye(E)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,le,i.get(Z).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function oe(L,E,Z){if(t.bindRenderbuffer(t.RENDERBUFFER,L),E.depthBuffer&&!E.stencilBuffer){let ne=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(Z||Pe(E)){const le=E.depthTexture;le&&le.isDepthTexture&&(le.type===mi?ne=t.DEPTH_COMPONENT32F:le.type===Bi&&(ne=t.DEPTH_COMPONENT24));const re=ye(E);Pe(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,ne,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,re,ne,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,ne,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,L)}else if(E.depthBuffer&&E.stencilBuffer){const ne=ye(E);Z&&Pe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,E.width,E.height):Pe(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,L)}else{const ne=E.textures;for(let le=0;le<ne.length;le++){const re=ne[le],ke=s.convert(re.format,re.colorSpace),Ne=s.convert(re.type),de=C(re.internalFormat,ke,Ne,re.colorSpace),pe=ye(E);Z&&Pe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,de,E.width,E.height):Pe(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,de,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,de,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Te(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ie(E.depthTexture,0);const ne=i.get(E.depthTexture).__webglTexture,le=ye(E);if(E.depthTexture.format===Ar)Pe(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(E.depthTexture.format===Is)Pe(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function xe(L){const E=i.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Te(E.__webglFramebuffer,L)}else if(Z){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]=t.createRenderbuffer(),oe(E.__webglDepthbuffer[ne],L,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),oe(E.__webglDepthbuffer,L,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function F(L,E,Z){const ne=i.get(L);E!==void 0&&se(ne.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Z!==void 0&&xe(L)}function Ke(L){const E=L.texture,Z=i.get(L),ne=i.get(E);L.addEventListener("dispose",H);const le=L.textures,re=L.isWebGLCubeRenderTarget===!0,ke=le.length>1,Ne=u(L)||o;if(ke||(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=E.version,a.memory.textures++),re){Z.__webglFramebuffer=[];for(let de=0;de<6;de++)if(o&&E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[de]=[];for(let pe=0;pe<E.mipmaps.length;pe++)Z.__webglFramebuffer[de][pe]=t.createFramebuffer()}else Z.__webglFramebuffer[de]=t.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)Z.__webglFramebuffer[de]=t.createFramebuffer()}else Z.__webglFramebuffer=t.createFramebuffer();if(ke)if(r.drawBuffers)for(let de=0,pe=le.length;de<pe;de++){const Oe=i.get(le[de]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=t.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&Pe(L)===!1){Z.__webglMultisampledFramebuffer=t.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let de=0;de<le.length;de++){const pe=le[de];Z.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Z.__webglColorRenderbuffer[de]);const Oe=s.convert(pe.format,pe.colorSpace),ce=s.convert(pe.type),yt=C(pe.internalFormat,Oe,ce,pe.colorSpace,L.isXRRenderTarget===!0),$e=ye(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,yt,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,Z.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=t.createRenderbuffer(),oe(Z.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),D(t.TEXTURE_CUBE_MAP,E,Ne);for(let de=0;de<6;de++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)se(Z.__webglFramebuffer[de][pe],L,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe);else se(Z.__webglFramebuffer[de],L,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);x(E,Ne)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ke){for(let de=0,pe=le.length;de<pe;de++){const Oe=le[de],ce=i.get(Oe);n.bindTexture(t.TEXTURE_2D,ce.__webglTexture),D(t.TEXTURE_2D,Oe,Ne),se(Z.__webglFramebuffer,L,Oe,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),x(Oe,Ne)&&M(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?de=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(de,ne.__webglTexture),D(de,E,Ne),o&&E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)se(Z.__webglFramebuffer[pe],L,E,t.COLOR_ATTACHMENT0,de,pe);else se(Z.__webglFramebuffer,L,E,t.COLOR_ATTACHMENT0,de,0);x(E,Ne)&&M(de),n.unbindTexture()}L.depthBuffer&&xe(L)}function ue(L){const E=u(L)||o,Z=L.textures;for(let ne=0,le=Z.length;ne<le;ne++){const re=Z[ne];if(x(re,E)){const ke=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ne=i.get(re).__webglTexture;n.bindTexture(ke,Ne),M(ke),n.unbindTexture()}}}function be(L){if(o&&L.samples>0&&Pe(L)===!1){const E=L.textures,Z=L.width,ne=L.height;let le=t.COLOR_BUFFER_BIT;const re=[],ke=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ne=i.get(L),de=E.length>1;if(de)for(let pe=0;pe<E.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let pe=0;pe<E.length;pe++){re.push(t.COLOR_ATTACHMENT0+pe),L.depthBuffer&&re.push(ke);const Oe=Ne.__ignoreDepthValues!==void 0?Ne.__ignoreDepthValues:!1;if(Oe===!1&&(L.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),de&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ne.__webglColorRenderbuffer[pe]),Oe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ke]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ke])),de){const ce=i.get(E[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ce,0)}t.blitFramebuffer(0,0,Z,ne,0,0,Z,ne,le,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let pe=0;pe<E.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,Ne.__webglColorRenderbuffer[pe]);const Oe=i.get(E[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,Oe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}}function ye(L){return Math.min(r.maxSamples,L.samples)}function Pe(L){const E=i.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Re(L){const E=a.render.frame;f.get(L)!==E&&(f.set(L,E),L.update())}function Ie(L,E){const Z=L.colorSpace,ne=L.format,le=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===sd||Z!==sr&&Z!==Fi&&(it.getTransfer(Z)===lt?o===!1?e.has("EXT_sRGB")===!0&&ne===jn?(L.format=sd,L.minFilter=an,L.generateMipmaps=!1):E=Vg.sRGBToLinear(E):(ne!==jn||le!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}function et(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=K,this.resetTextureUnits=I,this.setTexture2D=ie,this.setTexture2DArray=U,this.setTexture3D=G,this.setTextureCube=R,this.rebindTextures=F,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Pe}function hT(t,e,n){const i=n.isWebGL2;function r(s,a=Fi){let o;const l=it.getTransfer(a);if(s===Zi)return t.UNSIGNED_BYTE;if(s===Dg)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Ug)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Py)return t.BYTE;if(s===Iy)return t.SHORT;if(s===sh)return t.UNSIGNED_SHORT;if(s===Ig)return t.INT;if(s===Bi)return t.UNSIGNED_INT;if(s===mi)return t.FLOAT;if(s===Da)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Dy)return t.ALPHA;if(s===jn)return t.RGBA;if(s===Uy)return t.LUMINANCE;if(s===Oy)return t.LUMINANCE_ALPHA;if(s===Ar)return t.DEPTH_COMPONENT;if(s===Is)return t.DEPTH_STENCIL;if(s===sd)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Fy)return t.RED;if(s===Og)return t.RED_INTEGER;if(s===ky)return t.RG;if(s===Fg)return t.RG_INTEGER;if(s===kg)return t.RGBA_INTEGER;if(s===Rc||s===Cc||s===Nc||s===Lc)if(l===lt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Rc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Nc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Lc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Rc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Nc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Lc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Gf||s===Hf||s===Vf||s===jf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Gf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Hf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===jf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Wf||s===Xf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Wf)return l===lt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Xf)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===$f||s===Yf||s===qf||s===Kf||s===Zf||s===Qf||s===Jf||s===ep||s===tp||s===np||s===ip||s===rp||s===sp||s===ap)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===$f)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yf)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===qf)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Kf)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Zf)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qf)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jf)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ep)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===tp)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===np)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ip)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===rp)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sp)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ap)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Pc||s===op||s===lp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Pc)return l===lt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===op)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===lp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===zy||s===cp||s===up||s===dp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Pc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===cp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===up)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===dp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===br?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class fT extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class on extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pT={type:"move"};class iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new on,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new on,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new on,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=d.position.distanceTo(f.position),g=.02,_=.005;c.inputState.pinching&&p>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new on;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const mT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new pn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new tr({extensions:{fragDepth:!0},vertexShader:mT,fragmentShader:gT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Se(new gi(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class vT extends zs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,p=null,g=null,_=null;const y=new xT,m=n.getContextAttributes();let u=null,v=null;const x=[],M=[],C=new Ze;let A=null;const b=new Ln;b.layers.enable(1),b.viewport=new Ut;const P=new Ln;P.layers.enable(2),P.viewport=new Ut;const H=[b,P],S=new fT;S.layers.enable(1),S.layers.enable(2);let N=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let W=x[D];return W===void 0&&(W=new iu,x[D]=W),W.getTargetRaySpace()},this.getControllerGrip=function(D){let W=x[D];return W===void 0&&(W=new iu,x[D]=W),W.getGripSpace()},this.getHand=function(D){let W=x[D];return W===void 0&&(W=new iu,x[D]=W),W.getHandSpace()};function Q(D){const W=M.indexOf(D.inputSource);if(W===-1)return;const ee=x[W];ee!==void 0&&(ee.update(D.inputSource,D.frame,c||a),ee.dispatchEvent({type:D.type,data:D.inputSource}))}function I(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",K);for(let D=0;D<x.length;D++){const W=M[D];W!==null&&(M[D]=null,x[D].disconnect(W))}N=null,$=null,y.reset(),e.setRenderTarget(u),g=null,p=null,f=null,r=null,v=null,J.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",I),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,W),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),v=new Ir(g.framebufferWidth,g.framebufferHeight,{format:jn,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let W=null,ee=null,te=null;m.depth&&(te=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,W=m.stencil?Is:Ar,ee=m.stencil?br:Bi);const se={colorFormat:n.RGBA8,depthFormat:te,scaleFactor:s};f=new XRWebGLBinding(r,n),p=f.createProjectionLayer(se),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new Ir(p.textureWidth,p.textureHeight,{format:jn,type:Zi,depthTexture:new tx(p.textureWidth,p.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const oe=e.properties.get(v);oe.__ignoreDepthValues=p.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),J.setContext(r),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function K(D){for(let W=0;W<D.removed.length;W++){const ee=D.removed[W],te=M.indexOf(ee);te>=0&&(M[te]=null,x[te].disconnect(ee))}for(let W=0;W<D.added.length;W++){const ee=D.added[W];let te=M.indexOf(ee);if(te===-1){for(let oe=0;oe<x.length;oe++)if(oe>=M.length){M.push(ee),te=oe;break}else if(M[oe]===null){M[oe]=ee,te=oe;break}if(te===-1)break}const se=x[te];se&&se.connect(ee)}}const j=new k,ie=new k;function U(D,W,ee){j.setFromMatrixPosition(W.matrixWorld),ie.setFromMatrixPosition(ee.matrixWorld);const te=j.distanceTo(ie),se=W.projectionMatrix.elements,oe=ee.projectionMatrix.elements,Te=se[14]/(se[10]-1),xe=se[14]/(se[10]+1),F=(se[9]+1)/se[5],Ke=(se[9]-1)/se[5],ue=(se[8]-1)/se[0],be=(oe[8]+1)/oe[0],ye=Te*ue,Pe=Te*be,Re=te/(-ue+be),Ie=Re*-ue;W.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Ie),D.translateZ(Re),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const et=Te+Re,L=xe+Re,E=ye-Ie,Z=Pe+(te-Ie),ne=F*xe/L*et,le=Ke*xe/L*et;D.projectionMatrix.makePerspective(E,Z,ne,le,et,L),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function G(D,W){W===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(W.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;y.texture!==null&&(D.near=y.depthNear,D.far=y.depthFar),S.near=P.near=b.near=D.near,S.far=P.far=b.far=D.far,(N!==S.near||$!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,$=S.far,b.near=N,b.far=$,P.near=N,P.far=$,b.updateProjectionMatrix(),P.updateProjectionMatrix(),D.updateProjectionMatrix());const W=D.parent,ee=S.cameras;G(S,W);for(let te=0;te<ee.length;te++)G(ee[te],W);ee.length===2?U(S,b,P):S.projectionMatrix.copy(b.projectionMatrix),R(D,S,W)};function R(D,W,ee){ee===null?D.matrix.copy(W.matrixWorld):(D.matrix.copy(ee.matrixWorld),D.matrix.invert(),D.matrix.multiply(W.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(W.projectionMatrix),D.projectionMatrixInverse.copy(W.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Ua*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(D){l=D,p!==null&&(p.fixedFoveation=D),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=D)},this.hasDepthSensing=function(){return y.texture!==null};let w=null;function z(D,W){if(d=W.getViewerPose(c||a),_=W,d!==null){const ee=d.views;g!==null&&(e.setRenderTargetFramebuffer(v,g.framebuffer),e.setRenderTarget(v));let te=!1;ee.length!==S.cameras.length&&(S.cameras.length=0,te=!0);for(let oe=0;oe<ee.length;oe++){const Te=ee[oe];let xe=null;if(g!==null)xe=g.getViewport(Te);else{const Ke=f.getViewSubImage(p,Te);xe=Ke.viewport,oe===0&&(e.setRenderTargetTextures(v,Ke.colorTexture,p.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(v))}let F=H[oe];F===void 0&&(F=new Ln,F.layers.enable(oe),F.viewport=new Ut,H[oe]=F),F.matrix.fromArray(Te.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(Te.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(xe.x,xe.y,xe.width,xe.height),oe===0&&(S.matrix.copy(F.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),te===!0&&S.cameras.push(F)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")){const oe=f.getDepthInformation(ee[0]);oe&&oe.isValid&&oe.texture&&y.init(e,oe,r.renderState)}}for(let ee=0;ee<x.length;ee++){const te=M[ee],se=x[ee];te!==null&&se!==void 0&&se.update(te,W,c||a)}y.render(e,S),w&&w(D,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),_=null}const J=new Jg;J.setAnimationLoop(z),this.setAnimationLoop=function(D){w=D},this.dispose=function(){}}}const fr=new ri,_T=new vt;function yT(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Kg(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,v,x,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),p(m,u),u.isMeshPhysicalMaterial&&g(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),y(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,v,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===fn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===fn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u),x=v.envMap,M=v.envMapRotation;if(x&&(m.envMap.value=x,fr.copy(M),fr.x*=-1,fr.y*=-1,fr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),m.envMapRotation.value.setFromMatrix4(_T.makeRotationFromEuler(fr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const C=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*C,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=x*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===fn&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ST(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const M=x.program;i.uniformBlockBinding(v,M)}function c(v,x){let M=r[v.id];M===void 0&&(_(v),M=d(v),r[v.id]=M,v.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(v,C);const A=e.render.frame;s[v.id]!==A&&(p(v),s[v.id]=A)}function d(v){const x=f();v.__bindingPointIndex=x;const M=t.createBuffer(),C=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,M),M}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){const x=r[v.id],M=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,b=M.length;A<b;A++){const P=Array.isArray(M[A])?M[A]:[M[A]];for(let H=0,S=P.length;H<S;H++){const N=P[H];if(g(N,A,H,C)===!0){const $=N.__offset,Q=Array.isArray(N.value)?N.value:[N.value];let I=0;for(let K=0;K<Q.length;K++){const j=Q[K],ie=y(j);typeof j=="number"||typeof j=="boolean"?(N.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,$+I,N.__data)):j.isMatrix3?(N.__data[0]=j.elements[0],N.__data[1]=j.elements[1],N.__data[2]=j.elements[2],N.__data[3]=0,N.__data[4]=j.elements[3],N.__data[5]=j.elements[4],N.__data[6]=j.elements[5],N.__data[7]=0,N.__data[8]=j.elements[6],N.__data[9]=j.elements[7],N.__data[10]=j.elements[8],N.__data[11]=0):(j.toArray(N.__data,I),I+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,$,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(v,x,M,C){const A=v.value,b=x+"_"+M;if(C[b]===void 0)return typeof A=="number"||typeof A=="boolean"?C[b]=A:C[b]=A.clone(),!0;{const P=C[b];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return C[b]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function _(v){const x=v.uniforms;let M=0;const C=16;for(let b=0,P=x.length;b<P;b++){const H=Array.isArray(x[b])?x[b]:[x[b]];for(let S=0,N=H.length;S<N;S++){const $=H[S],Q=Array.isArray($.value)?$.value:[$.value];for(let I=0,K=Q.length;I<K;I++){const j=Q[I],ie=y(j),U=M%C;U!==0&&C-U<ie.boundary&&(M+=C-U),$.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=M,M+=ie.storage}}}const A=M%C;return A>0&&(M+=C-A),v.__size=M,v.__cache={},this}function y(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class ox{constructor(e={}){const{canvas:n=uS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=a;const g=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zn,this._useLegacyLights=!1,this.toneMapping=Ki,this.toneMappingExposure=1;const x=this;let M=!1,C=0,A=0,b=null,P=-1,H=null;const S=new Ut,N=new Ut;let $=null;const Q=new Xe(0);let I=0,K=n.width,j=n.height,ie=1,U=null,G=null;const R=new Ut(0,0,K,j),w=new Ut(0,0,K,j);let z=!1;const J=new ch;let D=!1,W=!1,ee=null;const te=new vt,se=new Ze,oe=new k,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xe(){return b===null?ie:1}let F=i;function Ke(T,B){for(let Y=0;Y<T.length;Y++){const q=T[Y],V=n.getContext(q,B);if(V!==null)return V}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rh}`),n.addEventListener("webglcontextlost",dt,!1),n.addEventListener("webglcontextrestored",O,!1),n.addEventListener("webglcontextcreationerror",me,!1),F===null){const B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),F=Ke(B,T),F===null)throw Ke(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ue,be,ye,Pe,Re,Ie,et,L,E,Z,ne,le,re,ke,Ne,de,pe,Oe,ce,yt,$e,Ae,Me,Ee;function Qe(){ue=new AE(F),be=new SE(F,ue,e),ue.init(be),Ae=new hT(F,ue,be),ye=new uT(F,ue,be),Pe=new NE(F),Re=new Kw,Ie=new dT(F,ue,ye,Re,be,Ae,Pe),et=new EE(x),L=new bE(x),E=new OS(F,be),Me=new _E(F,ue,E,be),Z=new RE(F,E,Pe,Me),ne=new DE(F,Z,E,Pe),ce=new IE(F,be,Ie),de=new ME(Re),le=new qw(x,et,L,ue,be,Me,de),re=new yT(x,Re),ke=new Qw,Ne=new rT(ue,be),Oe=new vE(x,et,L,ye,ne,p,l),pe=new cT(x,ne,be),Ee=new ST(F,Pe,be,ye),yt=new yE(F,ue,Pe,be),$e=new CE(F,ue,Pe,be),Pe.programs=le.programs,x.capabilities=be,x.extensions=ue,x.properties=Re,x.renderLists=ke,x.shadowMap=pe,x.state=ye,x.info=Pe}Qe();const Be=new vT(x,F);this.xr=Be,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=ue.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ue.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(T){T!==void 0&&(ie=T,this.setSize(K,j,!1))},this.getSize=function(T){return T.set(K,j)},this.setSize=function(T,B,Y=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=T,j=B,n.width=Math.floor(T*ie),n.height=Math.floor(B*ie),Y===!0&&(n.style.width=T+"px",n.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(K*ie,j*ie).floor()},this.setDrawingBufferSize=function(T,B,Y){K=T,j=B,ie=Y,n.width=Math.floor(T*Y),n.height=Math.floor(B*Y),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,B,Y,q){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,B,Y,q),ye.viewport(S.copy(R).multiplyScalar(ie).round())},this.getScissor=function(T){return T.copy(w)},this.setScissor=function(T,B,Y,q){T.isVector4?w.set(T.x,T.y,T.z,T.w):w.set(T,B,Y,q),ye.scissor(N.copy(w).multiplyScalar(ie).round())},this.getScissorTest=function(){return z},this.setScissorTest=function(T){ye.setScissorTest(z=T)},this.setOpaqueSort=function(T){U=T},this.setTransparentSort=function(T){G=T},this.getClearColor=function(T){return T.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(T=!0,B=!0,Y=!0){let q=0;if(T){let V=!1;if(b!==null){const ve=b.texture.format;V=ve===kg||ve===Fg||ve===Og}if(V){const ve=b.texture.type,we=ve===Zi||ve===Bi||ve===sh||ve===br||ve===Dg||ve===Ug,Le=Oe.getClearColor(),De=Oe.getClearAlpha(),We=Le.r,ze=Le.g,Ge=Le.b;we?(g[0]=We,g[1]=ze,g[2]=Ge,g[3]=De,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=We,_[1]=ze,_[2]=Ge,_[3]=De,F.clearBufferiv(F.COLOR,0,_))}else q|=F.COLOR_BUFFER_BIT}B&&(q|=F.DEPTH_BUFFER_BIT),Y&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",dt,!1),n.removeEventListener("webglcontextrestored",O,!1),n.removeEventListener("webglcontextcreationerror",me,!1),ke.dispose(),Ne.dispose(),Re.dispose(),et.dispose(),L.dispose(),ne.dispose(),Me.dispose(),Ee.dispose(),le.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",bn),Be.removeEventListener("sessionend",st),ee&&(ee.dispose(),ee=null),Kt.stop()};function dt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=Pe.autoReset,B=pe.enabled,Y=pe.autoUpdate,q=pe.needsUpdate,V=pe.type;Qe(),Pe.autoReset=T,pe.enabled=B,pe.autoUpdate=Y,pe.needsUpdate=q,pe.type=V}function me(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function X(T){const B=T.target;B.removeEventListener("dispose",X),he(B)}function he(T){ge(T),Re.remove(T)}function ge(T){const B=Re.get(T).programs;B!==void 0&&(B.forEach(function(Y){le.releaseProgram(Y)}),T.isShaderMaterial&&le.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,Y,q,V,ve){B===null&&(B=Te);const we=V.isMesh&&V.matrixWorld.determinant()<0,Le=xx(T,B,Y,q,V);ye.setMaterial(q,we);let De=Y.index,We=1;if(q.wireframe===!0){if(De=Z.getWireframeAttribute(Y),De===void 0)return;We=2}const ze=Y.drawRange,Ge=Y.attributes.position;let Et=ze.start*We,gn=(ze.start+ze.count)*We;ve!==null&&(Et=Math.max(Et,ve.start*We),gn=Math.min(gn,(ve.start+ve.count)*We)),De!==null?(Et=Math.max(Et,0),gn=Math.min(gn,De.count)):Ge!=null&&(Et=Math.max(Et,0),gn=Math.min(gn,Ge.count));const Pt=gn-Et;if(Pt<0||Pt===1/0)return;Me.setup(V,q,Le,Y,De);let si,mt=yt;if(De!==null&&(si=E.get(De),mt=$e,mt.setIndex(si)),V.isMesh)q.wireframe===!0?(ye.setLineWidth(q.wireframeLinewidth*xe()),mt.setMode(F.LINES)):mt.setMode(F.TRIANGLES);else if(V.isLine){let He=q.linewidth;He===void 0&&(He=1),ye.setLineWidth(He*xe()),V.isLineSegments?mt.setMode(F.LINES):V.isLineLoop?mt.setMode(F.LINE_LOOP):mt.setMode(F.LINE_STRIP)}else V.isPoints?mt.setMode(F.POINTS):V.isSprite&&mt.setMode(F.TRIANGLES);if(V.isBatchedMesh)mt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)mt.renderInstances(Et,Pt,V.count);else if(Y.isInstancedBufferGeometry){const He=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Kl=Math.min(Y.instanceCount,He);mt.renderInstances(Et,Pt,Kl)}else mt.render(Et,Pt)};function qe(T,B,Y){T.transparent===!0&&T.side===pi&&T.forceSinglePass===!1?(T.side=fn,T.needsUpdate=!0,Wa(T,B,Y),T.side=er,T.needsUpdate=!0,Wa(T,B,Y),T.side=pi):Wa(T,B,Y)}this.compile=function(T,B,Y=null){Y===null&&(Y=T),m=Ne.get(Y),m.init(),v.push(m),Y.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),T!==Y&&T.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(x._useLegacyLights);const q=new Set;return T.traverse(function(V){const ve=V.material;if(ve)if(Array.isArray(ve))for(let we=0;we<ve.length;we++){const Le=ve[we];qe(Le,Y,V),q.add(Le)}else qe(ve,Y,V),q.add(ve)}),v.pop(),m=null,q},this.compileAsync=function(T,B,Y=null){const q=this.compile(T,B,Y);return new Promise(V=>{function ve(){if(q.forEach(function(we){Re.get(we).currentProgram.isReady()&&q.delete(we)}),q.size===0){V(T);return}setTimeout(ve,10)}ue.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let rt=null;function Ft(T){rt&&rt(T)}function bn(){Kt.stop()}function st(){Kt.start()}const Kt=new Jg;Kt.setAnimationLoop(Ft),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(T){rt=T,Be.setAnimationLoop(T),T===null?Kt.stop():Kt.start()},Be.addEventListener("sessionstart",bn),Be.addEventListener("sessionend",st),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(B),B=Be.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,B,b),m=Ne.get(T,v.length),m.init(),v.push(m),te.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),J.setFromProjectionMatrix(te),W=this.localClippingEnabled,D=de.init(this.clippingPlanes,W),y=ke.get(T,u.length),y.init(),u.push(y),Yn(T,B,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(U,G),this.info.render.frame++,D===!0&&de.beginShadows();const Y=m.state.shadowsArray;if(pe.render(Y,T,B),D===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1)&&Oe.render(y,T),m.setupLights(x._useLegacyLights),B.isArrayCamera){const q=B.cameras;for(let V=0,ve=q.length;V<ve;V++){const we=q[V];vh(y,T,we,we.viewport)}}else vh(y,T,B);b!==null&&(Ie.updateMultisampleRenderTarget(b),Ie.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(x,T,B),Me.resetDefaultState(),P=-1,H=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function Yn(T,B,Y,q){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){q&&oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(te);const we=ne.update(T),Le=T.material;Le.visible&&y.push(T,we,Le,Y,oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||J.intersectsObject(T))){const we=ne.update(T),Le=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),oe.copy(T.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),oe.copy(we.boundingSphere.center)),oe.applyMatrix4(T.matrixWorld).applyMatrix4(te)),Array.isArray(Le)){const De=we.groups;for(let We=0,ze=De.length;We<ze;We++){const Ge=De[We],Et=Le[Ge.materialIndex];Et&&Et.visible&&y.push(T,we,Et,Y,oe.z,Ge)}}else Le.visible&&y.push(T,we,Le,Y,oe.z,null)}}const ve=T.children;for(let we=0,Le=ve.length;we<Le;we++)Yn(ve[we],B,Y,q)}function vh(T,B,Y,q){const V=T.opaque,ve=T.transmissive,we=T.transparent;m.setupLightsView(Y),D===!0&&de.setGlobalState(x.clippingPlanes,Y),ve.length>0&&gx(V,ve,B,Y),q&&ye.viewport(S.copy(q)),V.length>0&&ja(V,B,Y),ve.length>0&&ja(ve,B,Y),we.length>0&&ja(we,B,Y),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function gx(T,B,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const ve=be.isWebGL2;ee===null&&(ee=new Ir(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?Da:Zi,minFilter:Er,samples:ve?4:0})),x.getDrawingBufferSize(se),ve?ee.setSize(se.x,se.y):ee.setSize(El(se.x),El(se.y));const we=x.getRenderTarget();x.setRenderTarget(ee),x.getClearColor(Q),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();const Le=x.toneMapping;x.toneMapping=Ki,ja(T,Y,q),Ie.updateMultisampleRenderTarget(ee),Ie.updateRenderTargetMipmap(ee);let De=!1;for(let We=0,ze=B.length;We<ze;We++){const Ge=B[We],Et=Ge.object,gn=Ge.geometry,Pt=Ge.material,si=Ge.group;if(Pt.side===pi&&Et.layers.test(q.layers)){const mt=Pt.side;Pt.side=fn,Pt.needsUpdate=!0,_h(Et,Y,q,gn,Pt,si),Pt.side=mt,Pt.needsUpdate=!0,De=!0}}De===!0&&(Ie.updateMultisampleRenderTarget(ee),Ie.updateRenderTargetMipmap(ee)),x.setRenderTarget(we),x.setClearColor(Q,I),x.toneMapping=Le}function ja(T,B,Y){const q=B.isScene===!0?B.overrideMaterial:null;for(let V=0,ve=T.length;V<ve;V++){const we=T[V],Le=we.object,De=we.geometry,We=q===null?we.material:q,ze=we.group;Le.layers.test(Y.layers)&&_h(Le,B,Y,De,We,ze)}}function _h(T,B,Y,q,V,ve){T.onBeforeRender(x,B,Y,q,V,ve),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(x,B,Y,q,T,ve),V.transparent===!0&&V.side===pi&&V.forceSinglePass===!1?(V.side=fn,V.needsUpdate=!0,x.renderBufferDirect(Y,B,q,V,T,ve),V.side=er,V.needsUpdate=!0,x.renderBufferDirect(Y,B,q,V,T,ve),V.side=pi):x.renderBufferDirect(Y,B,q,V,T,ve),T.onAfterRender(x,B,Y,q,V,ve)}function Wa(T,B,Y){B.isScene!==!0&&(B=Te);const q=Re.get(T),V=m.state.lights,ve=m.state.shadowsArray,we=V.state.version,Le=le.getParameters(T,V.state,ve,B,Y),De=le.getProgramCacheKey(Le);let We=q.programs;q.environment=T.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(T.isMeshStandardMaterial?L:et).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,We===void 0&&(T.addEventListener("dispose",X),We=new Map,q.programs=We);let ze=We.get(De);if(ze!==void 0){if(q.currentProgram===ze&&q.lightsStateVersion===we)return Sh(T,Le),ze}else Le.uniforms=le.getUniforms(T),T.onBuild(Y,Le,x),T.onBeforeCompile(Le,x),ze=le.acquireProgram(Le,De),We.set(De,ze),q.uniforms=Le.uniforms;const Ge=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ge.clippingPlanes=de.uniform),Sh(T,Le),q.needsLights=_x(T),q.lightsStateVersion=we,q.needsLights&&(Ge.ambientLightColor.value=V.state.ambient,Ge.lightProbe.value=V.state.probe,Ge.directionalLights.value=V.state.directional,Ge.directionalLightShadows.value=V.state.directionalShadow,Ge.spotLights.value=V.state.spot,Ge.spotLightShadows.value=V.state.spotShadow,Ge.rectAreaLights.value=V.state.rectArea,Ge.ltc_1.value=V.state.rectAreaLTC1,Ge.ltc_2.value=V.state.rectAreaLTC2,Ge.pointLights.value=V.state.point,Ge.pointLightShadows.value=V.state.pointShadow,Ge.hemisphereLights.value=V.state.hemi,Ge.directionalShadowMap.value=V.state.directionalShadowMap,Ge.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ge.spotShadowMap.value=V.state.spotShadowMap,Ge.spotLightMatrix.value=V.state.spotLightMatrix,Ge.spotLightMap.value=V.state.spotLightMap,Ge.pointShadowMap.value=V.state.pointShadowMap,Ge.pointShadowMatrix.value=V.state.pointShadowMatrix),q.currentProgram=ze,q.uniformsList=null,ze}function yh(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=$o.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Sh(T,B){const Y=Re.get(T);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function xx(T,B,Y,q,V){B.isScene!==!0&&(B=Te),Ie.resetTextureUnits();const ve=B.fog,we=q.isMeshStandardMaterial?B.environment:null,Le=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:sr,De=(q.isMeshStandardMaterial?L:et).get(q.envMap||we),We=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ze=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ge=!!Y.morphAttributes.position,Et=!!Y.morphAttributes.normal,gn=!!Y.morphAttributes.color;let Pt=Ki;q.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Pt=x.toneMapping);const si=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,mt=si!==void 0?si.length:0,He=Re.get(q),Kl=m.state.lights;if(D===!0&&(W===!0||T!==H)){const An=T===H&&q.id===P;de.setState(q,T,An)}let ht=!1;q.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Kl.state.version||He.outputColorSpace!==Le||V.isBatchedMesh&&He.batching===!1||!V.isBatchedMesh&&He.batching===!0||V.isInstancedMesh&&He.instancing===!1||!V.isInstancedMesh&&He.instancing===!0||V.isSkinnedMesh&&He.skinning===!1||!V.isSkinnedMesh&&He.skinning===!0||V.isInstancedMesh&&He.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&He.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&He.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&He.instancingMorph===!1&&V.morphTexture!==null||He.envMap!==De||q.fog===!0&&He.fog!==ve||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==de.numPlanes||He.numIntersection!==de.numIntersection)||He.vertexAlphas!==We||He.vertexTangents!==ze||He.morphTargets!==Ge||He.morphNormals!==Et||He.morphColors!==gn||He.toneMapping!==Pt||be.isWebGL2===!0&&He.morphTargetsCount!==mt)&&(ht=!0):(ht=!0,He.__version=q.version);let ar=He.currentProgram;ht===!0&&(ar=Wa(q,B,V));let Mh=!1,Hs=!1,Zl=!1;const Vt=ar.getUniforms(),or=He.uniforms;if(ye.useProgram(ar.program)&&(Mh=!0,Hs=!0,Zl=!0),q.id!==P&&(P=q.id,Hs=!0),Mh||H!==T){Vt.setValue(F,"projectionMatrix",T.projectionMatrix),Vt.setValue(F,"viewMatrix",T.matrixWorldInverse);const An=Vt.map.cameraPosition;An!==void 0&&An.setValue(F,oe.setFromMatrixPosition(T.matrixWorld)),be.logarithmicDepthBuffer&&Vt.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Vt.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),H!==T&&(H=T,Hs=!0,Zl=!0)}if(V.isSkinnedMesh){Vt.setOptional(F,V,"bindMatrix"),Vt.setOptional(F,V,"bindMatrixInverse");const An=V.skeleton;An&&(be.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),Vt.setValue(F,"boneTexture",An.boneTexture,Ie)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Vt.setOptional(F,V,"batchingTexture"),Vt.setValue(F,"batchingTexture",V._matricesTexture,Ie));const Ql=Y.morphAttributes;if((Ql.position!==void 0||Ql.normal!==void 0||Ql.color!==void 0&&be.isWebGL2===!0)&&ce.update(V,Y,ar),(Hs||He.receiveShadow!==V.receiveShadow)&&(He.receiveShadow=V.receiveShadow,Vt.setValue(F,"receiveShadow",V.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(or.envMap.value=De,or.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Hs&&(Vt.setValue(F,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&vx(or,Zl),ve&&q.fog===!0&&re.refreshFogUniforms(or,ve),re.refreshMaterialUniforms(or,q,ie,j,ee),$o.upload(F,yh(He),or,Ie)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&($o.upload(F,yh(He),or,Ie),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Vt.setValue(F,"center",V.center),Vt.setValue(F,"modelViewMatrix",V.modelViewMatrix),Vt.setValue(F,"normalMatrix",V.normalMatrix),Vt.setValue(F,"modelMatrix",V.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const An=q.uniformsGroups;for(let Jl=0,yx=An.length;Jl<yx;Jl++)if(be.isWebGL2){const Eh=An[Jl];Ee.update(Eh,ar),Ee.bind(Eh,ar)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ar}function vx(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function _x(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,B,Y){Re.get(T.texture).__webglTexture=B,Re.get(T.depthTexture).__webglTexture=Y;const q=Re.get(T);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=Y===void 0,q.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const Y=Re.get(T);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,Y=0){b=T,C=B,A=Y;let q=!0,V=null,ve=!1,we=!1;if(T){const De=Re.get(T);De.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(F.FRAMEBUFFER,null),q=!1):De.__webglFramebuffer===void 0?Ie.setupRenderTarget(T):De.__hasExternalTextures&&Ie.rebindTextures(T,Re.get(T.texture).__webglTexture,Re.get(T.depthTexture).__webglTexture);const We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const ze=Re.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[B])?V=ze[B][Y]:V=ze[B],ve=!0):be.isWebGL2&&T.samples>0&&Ie.useMultisampledRTT(T)===!1?V=Re.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?V=ze[Y]:V=ze,S.copy(T.viewport),N.copy(T.scissor),$=T.scissorTest}else S.copy(R).multiplyScalar(ie).floor(),N.copy(w).multiplyScalar(ie).floor(),$=z;if(ye.bindFramebuffer(F.FRAMEBUFFER,V)&&be.drawBuffers&&q&&ye.drawBuffers(T,V),ye.viewport(S),ye.scissor(N),ye.setScissorTest($),ve){const De=Re.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,De.__webglTexture,Y)}else if(we){const De=Re.get(T.texture),We=B||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,De.__webglTexture,Y||0,We)}P=-1},this.readRenderTargetPixels=function(T,B,Y,q,V,ve,we){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){ye.bindFramebuffer(F.FRAMEBUFFER,Le);try{const De=T.texture,We=De.format,ze=De.type;if(We!==jn&&Ae.convert(We)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=ze===Da&&(ue.has("EXT_color_buffer_half_float")||be.isWebGL2&&ue.has("EXT_color_buffer_float"));if(ze!==Zi&&Ae.convert(ze)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===mi&&(be.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-q&&Y>=0&&Y<=T.height-V&&F.readPixels(B,Y,q,V,Ae.convert(We),Ae.convert(ze),ve)}finally{const De=b!==null?Re.get(b).__webglFramebuffer:null;ye.bindFramebuffer(F.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(T,B,Y=0){const q=Math.pow(2,-Y),V=Math.floor(B.image.width*q),ve=Math.floor(B.image.height*q);Ie.setTexture2D(B,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,T.x,T.y,V,ve),ye.unbindTexture()},this.copyTextureToTexture=function(T,B,Y,q=0){const V=B.image.width,ve=B.image.height,we=Ae.convert(Y.format),Le=Ae.convert(Y.type);Ie.setTexture2D(Y,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment),B.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,q,T.x,T.y,V,ve,we,Le,B.image.data):B.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,q,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,we,B.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,q,T.x,T.y,we,Le,B.image),q===0&&Y.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(T,B,Y,q,V=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=Math.round(T.max.x-T.min.x),we=Math.round(T.max.y-T.min.y),Le=T.max.z-T.min.z+1,De=Ae.convert(q.format),We=Ae.convert(q.type);let ze;if(q.isData3DTexture)Ie.setTexture3D(q,0),ze=F.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)Ie.setTexture2DArray(q,0),ze=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const Ge=F.getParameter(F.UNPACK_ROW_LENGTH),Et=F.getParameter(F.UNPACK_IMAGE_HEIGHT),gn=F.getParameter(F.UNPACK_SKIP_PIXELS),Pt=F.getParameter(F.UNPACK_SKIP_ROWS),si=F.getParameter(F.UNPACK_SKIP_IMAGES),mt=Y.isCompressedTexture?Y.mipmaps[V]:Y.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,mt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,mt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,T.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,T.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,T.min.z),Y.isDataTexture||Y.isData3DTexture?F.texSubImage3D(ze,V,B.x,B.y,B.z,ve,we,Le,De,We,mt.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(ze,V,B.x,B.y,B.z,ve,we,Le,De,mt.data):F.texSubImage3D(ze,V,B.x,B.y,B.z,ve,we,Le,De,We,mt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ge),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Et),F.pixelStorei(F.UNPACK_SKIP_PIXELS,gn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,si),V===0&&q.generateMipmaps&&F.generateMipmap(ze),ye.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ie.setTextureCube(T,0):T.isData3DTexture?Ie.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ie.setTexture2DArray(T,0):Ie.setTexture2D(T,0),ye.unbindTexture()},this.resetState=function(){C=0,A=0,b=null,ye.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ah?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===Vl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class MT extends ox{}MT.prototype.isWebGL1Renderer=!0;class dh{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xe(e),this.density=n}clone(){return new dh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ET extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Us extends Or{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nm=new k,im=new k,rm=new vt,ru=new lh,Po=new Va;class Tl extends Ct{constructor(e=new Gt,n=new Us){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)nm.fromBufferAttribute(n,r-1),im.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=nm.distanceTo(im);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(r),Po.radius+=s,e.ray.intersectsSphere(Po)===!1)return;rm.copy(r).invert(),ru.copy(e.ray).applyMatrix4(rm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new k,d=new k,f=new k,p=new k,g=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const u=Math.max(0,a.start),v=Math.min(_.count,a.start+a.count);for(let x=u,M=v-1;x<M;x+=g){const C=_.getX(x),A=_.getX(x+1);if(c.fromBufferAttribute(m,C),d.fromBufferAttribute(m,A),ru.distanceSqToSegment(c,d,p,f)>l)continue;p.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(p);P<e.near||P>e.far||n.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let x=u,M=v-1;x<M;x+=g){if(c.fromBufferAttribute(m,x),d.fromBufferAttribute(m,x+1),ru.distanceSqToSegment(c,d,p,f)>l)continue;p.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(p);A<e.near||A>e.far||n.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const sm=new k,am=new k;class lx extends Tl{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)sm.fromBufferAttribute(n,r),am.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+sm.distanceTo(am);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cx extends Or{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const om=new vt,ld=new lh,Io=new Va,Do=new k;class wT extends Ct{constructor(e=new Gt,n=new cx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(r),Io.radius+=s,e.ray.intersectsSphere(Io)===!1)return;om.copy(r).invert(),ld.copy(e.ray).applyMatrix4(om);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const p=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let _=p,y=g;_<y;_++){const m=c.getX(_);Do.fromBufferAttribute(f,m),lm(Do,m,l,r,e,n,this)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=p,y=g;_<y;_++)Do.fromBufferAttribute(f,_),lm(Do,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function lm(t,e,n,i,r,s,a){const o=ld.distanceSqToPoint(t);if(o<n){const l=new k;ld.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class St extends Gt{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],p=[],g=[];let _=0;const y=[],m=i/2;let u=0;v(),a===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new Bt(f,3)),this.setAttribute("normal",new Bt(p,3)),this.setAttribute("uv",new Bt(g,2));function v(){const M=new k,C=new k;let A=0;const b=(n-e)/i;for(let P=0;P<=s;P++){const H=[],S=P/s,N=S*(n-e)+e;for(let $=0;$<=r;$++){const Q=$/r,I=Q*l+o,K=Math.sin(I),j=Math.cos(I);C.x=N*K,C.y=-S*i+m,C.z=N*j,f.push(C.x,C.y,C.z),M.set(K,b,j).normalize(),p.push(M.x,M.y,M.z),g.push(Q,1-S),H.push(_++)}y.push(H)}for(let P=0;P<r;P++)for(let H=0;H<s;H++){const S=y[H][P],N=y[H+1][P],$=y[H+1][P+1],Q=y[H][P+1];d.push(S,N,Q),d.push(N,$,Q),A+=6}c.addGroup(u,A,0),u+=A}function x(M){const C=_,A=new Ze,b=new k;let P=0;const H=M===!0?e:n,S=M===!0?1:-1;for(let $=1;$<=r;$++)f.push(0,m*S,0),p.push(0,S,0),g.push(.5,.5),_++;const N=_;for(let $=0;$<=r;$++){const I=$/r*l+o,K=Math.cos(I),j=Math.sin(I);b.x=H*j,b.y=m*S,b.z=H*K,f.push(b.x,b.y,b.z),p.push(0,S,0),A.x=K*.5+.5,A.y=j*.5*S+.5,g.push(A.x,A.y),_++}for(let $=0;$<r;$++){const Q=C+$,I=N+$;M===!0?d.push(I,I+1,Q):d.push(I+1,I,Q),P+=3}c.addGroup(u,P,M===!0?1:2),u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new St(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hh extends St{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new hh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Es extends Gt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],f=new k,p=new k,g=[],_=[],y=[],m=[];for(let u=0;u<=i;u++){const v=[],x=u/i;let M=0;u===0&&a===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let C=0;C<=n;C++){const A=C/n;f.x=-e*Math.cos(r+A*s)*Math.sin(a+x*o),f.y=e*Math.cos(a+x*o),f.z=e*Math.sin(r+A*s)*Math.sin(a+x*o),_.push(f.x,f.y,f.z),p.copy(f).normalize(),y.push(p.x,p.y,p.z),m.push(A+M,1-x),v.push(c++)}d.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const x=d[u][v+1],M=d[u][v],C=d[u+1][v],A=d[u+1][v+1];(u!==0||a>0)&&g.push(x,M,A),(u!==i-1||l<Math.PI)&&g.push(M,C,A)}this.setIndex(g),this.setAttribute("position",new Bt(_,3)),this.setAttribute("normal",new Bt(y,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tt extends Or{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bg,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class TT extends Us{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class fh extends Ct{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class bT extends fh{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const su=new vt,cm=new k,um=new k;class AT{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ch,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;cm.setFromMatrixPosition(e.matrixWorld),n.position.copy(cm),um.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(um),n.updateMatrixWorld(),su.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(su),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(su)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class RT extends AT{constructor(){super(new ex(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class CT extends fh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new RT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class NT extends fh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class LT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=dm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function dm(){return(typeof performance>"u"?Date:performance).now()}class PT extends lx{constructor(e=10,n=10,i=4473924,r=8947848){i=new Xe(i),r=new Xe(r);const s=n/2,a=e/n,o=e/2,l=[],c=[];for(let p=0,g=0,_=-o;p<=n;p++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const y=p===s?i:r;y.toArray(c,g),g+=3,y.toArray(c,g),g+=3,y.toArray(c,g),g+=3,y.toArray(c,g),g+=3}const d=new Gt;d.setAttribute("position",new Bt(l,3)),d.setAttribute("color",new Bt(c,3));const f=new Us({vertexColors:!0,toneMapped:!1});super(d,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rh);class IT{constructor(){Ue(this,"group");Ue(this,"chassis");Ue(this,"wheels",[]);Ue(this,"frontWheelPivots",[]);Ue(this,"lidarRotor");Ue(this,"laserBeam");Ue(this,"laserGlowMesh");Ue(this,"cameraFovFrustum");Ue(this,"wheelRadius",.22);this.group=new on,this.initUGVMeshes()}initUGVMeshes(){const e=new ct(1.4,.35,.85),n=new tt({color:1976635,roughness:.4,metalness:.8});this.chassis=new Se(e,n),this.chassis.position.y=.35,this.chassis.castShadow=!0,this.chassis.receiveShadow=!0,this.group.add(this.chassis);const i=new ct(.12,.2,.95),r=new tt({color:988970,roughness:.3,metalness:.9}),s=new Se(i,r);s.position.set(.72,.32,0),s.castShadow=!0,this.group.add(s);const a=new tt({color:1096065,roughness:.3,metalness:.5}),o=new Se(new ct(1.2,.04,.04),a);o.position.set(0,.56,.38);const l=new Se(new ct(1.2,.04,.04),a);l.position.set(0,.56,-.38),this.group.add(o,l);const c=new ct(.3,.3,.3),d=new tt({color:16096779,roughness:.3,metalness:.4}),f=new Se(c,d);f.position.set(-.25,.48,0),f.castShadow=!0,this.group.add(f);const p=new ct(.31,.08,.31),g=new yn({color:1120295}),_=new Se(p,g);_.position.set(-.25,.48,0),this.group.add(_);const y=new St(this.wheelRadius,this.wheelRadius,.16,24);y.rotateX(Math.PI/2);const m=new tt({color:988970,roughness:.8,metalness:.2}),u=new tt({color:4674921,roughness:.3,metalness:.9});[[.5,.22,.52],[.5,.22,-.52],[0,.22,.52],[0,.22,-.52],[-.5,.22,.52],[-.5,.22,-.52]].forEach((G,R)=>{const w=R<2,z=new Se(y,m);z.castShadow=!0,z.receiveShadow=!0;const J=new Se(new St(.12,.12,.17,12),u);if(J.rotateX(Math.PI/2),z.add(J),w){const D=new on;D.position.set(G[0],G[1],G[2]),z.position.set(0,0,0),D.add(z),this.frontWheelPivots.push(D),this.group.add(D)}else z.position.set(G[0],G[1],G[2]),this.group.add(z);this.wheels.push(z)});const x=new Se(new St(.04,.04,.2,16),new tt({color:3359061,metalness:.8}));x.position.set(.15,.62,0),this.group.add(x),this.lidarRotor=new on,this.lidarRotor.position.set(.15,.74,0);const M=new Se(new St(.08,.08,.09,24),new tt({color:440020,roughness:.2,metalness:.9}));M.castShadow=!0,this.lidarRotor.add(M),this.group.add(this.lidarRotor);const C=new Se(new ct(.08,.08,.14),new tt({color:988970,metalness:.8}));C.position.set(.68,.48,0);const A=new Se(new St(.025,.025,.02,16),new yn({color:3718648}));A.rotateZ(Math.PI/2),A.position.set(.045,0,.035);const b=A.clone();b.position.set(.045,0,-.035),C.add(A,b),this.group.add(C);const P=new Gt,H=new Float32Array([0,0,0,2.5,.8,1.2,0,0,0,2.5,-.8,1.2,0,0,0,2.5,-.8,-1.2,0,0,0,2.5,.8,-1.2,2.5,.8,1.2,2.5,-.8,1.2,2.5,-.8,1.2,2.5,-.8,-1.2,2.5,-.8,-1.2,2.5,.8,-1.2,2.5,.8,-1.2,2.5,.8,1.2]);P.setAttribute("position",new mn(H,3)),this.cameraFovFrustum=new lx(P,new Us({color:3718648,transparent:!0,opacity:.35})),this.cameraFovFrustum.position.set(.68,.48,0),this.group.add(this.cameraFovFrustum);const S=new tt({color:16317180,roughness:.2}),N=new Se(new St(.04,.04,.06,16),S);N.position.set(-.55,.68,.28);const $=N.clone();$.position.set(-.55,.68,-.28),this.group.add(N,$);const Q=new Se(new St(.04,.04,.04,16),new tt({color:16436245}));Q.position.set(-.05,.54,.28);const I=new Se(new St(.05,.03,.03,16),new tt({color:15680580,roughness:.3}));I.position.set(-.05,.57,.28),this.group.add(Q,I);const K=new Se(new St(.05,.05,.08,16),new tt({color:4674921}));K.position.set(.42,.56,0);const j=new Se(new ct(.12,.05,.05),new tt({color:1409085}));j.position.set(.46,.61,0),this.group.add(K,j);const ie=new Gt().setFromPoints([new k(.52,.61,0),new k(12,.61,0)]),U=new Us({color:2278750,linewidth:3,transparent:!0,opacity:.9});this.laserBeam=new Tl(ie,U),this.laserBeam.visible=!1,this.group.add(this.laserBeam),this.laserGlowMesh=new Se(new Es(.08,12,12),new yn({color:4906624,transparent:!0,opacity:.85})),this.laserGlowMesh.visible=!1,this.group.add(this.laserGlowMesh)}update(e,n){this.group.position.set(e.x,e.y,e.z);const i=-co.degToRad(e.heading);this.group.rotation.y=i,this.group.rotation.z=co.degToRad(e.pitch),this.group.rotation.x=co.degToRad(e.roll);const r=e.speed/this.wheelRadius*n;this.wheels.forEach(a=>{a.rotation.z-=r});const s=-co.degToRad(e.steeringAngle);if(this.frontWheelPivots.forEach(a=>{a.rotation.y=s}),this.lidarRotor.rotation.y+=15*n,e.laserActive&&e.laserTargetPos){this.laserBeam.visible=!0,this.laserGlowMesh.visible=!0;const a=new k(.52,.61,0),o=new k(...e.laserTargetPos),l=this.group.worldToLocal(o.clone()),c=new Float32Array([a.x,a.y,a.z,l.x,l.y,l.z]);this.laserBeam.geometry.setAttribute("position",new mn(c,3)),this.laserBeam.geometry.attributes.position.needsUpdate=!0,this.laserGlowMesh.position.copy(l)}else this.laserBeam.visible=!1,this.laserGlowMesh.visible=!1}}class DT{constructor(){Ue(this,"group");Ue(this,"trafficLightRef");Ue(this,"targetGalleryPositions",[]);Ue(this,"rampBounds",{startX:30,endX:42,peakX:36,height:1.6});Ue(this,"plannedPathLine");Ue(this,"localTrajectoryLine");Ue(this,"lidarPointCloud");this.group=new on,this.initGroundAndTrack(),this.initStartFinishZones(),this.initObstaclesAndDebris(),this.initPotholes(),this.initRamp20Deg(),this.initTrafficLightGantry(),this.initRoadSigns(),this.initFaceTargetGallery(),this.initNavigationPaths(),this.initLidarPointCloud()}initGroundAndTrack(){const e=new gi(120,40),n=new tt({color:14870768,roughness:.8,metalness:.1}),i=new Se(e,n);i.rotation.x=-Math.PI/2,i.position.set(30,-.02,0),i.receiveShadow=!0,this.group.add(i);const r=new PT(100,50,9741240,13358561);r.position.set(30,.001,0),this.group.add(r);const s=new gi(70,3.8),a=new tt({color:3359061,roughness:.7,metalness:.2}),o=new Se(s,a);o.rotation.x=-Math.PI/2,o.position.set(32,.01,0),o.receiveShadow=!0,this.group.add(o);const l=new tt({color:16777215,roughness:.3}),c=new Se(new ct(70,.08,.14),l);c.position.set(32,.04,1.9),c.receiveShadow=!0;const d=new Se(new ct(70,.08,.14),l);d.position.set(32,.04,-1.9),d.receiveShadow=!0,this.group.add(c,d);for(let f=0;f<65;f+=3){const p=new Se(new gi(1.5,.12),new yn({color:16436245}));p.rotation.x=-Math.PI/2,p.position.set(f,.02,0),this.group.add(p)}}initStartFinishZones(){const e=new gi(3.5,3.4),n=new tt({color:1096065}),i=new Se(e,n);i.rotation.x=-Math.PI/2,i.position.set(0,.02,0),this.group.add(i);const r=new tt({color:4674921,metalness:.8}),s=new Se(new St(.06,.06,2.8),r);s.position.set(0,1.4,2.1);const a=new Se(new St(.06,.06,2.8),r);a.position.set(0,1.4,-2.1);const o=new Se(new ct(.2,.6,4.2),new tt({color:366185}));o.position.set(0,2.6,0),this.group.add(s,a,o);const l=s.clone();l.position.set(62,1.4,2.1);const c=a.clone();c.position.set(62,1.4,-2.1);const d=new Se(new ct(.2,.6,4.2),new tt({color:2450411}));d.position.set(62,2.6,0),this.group.add(l,c,d)}initObstaclesAndDebris(){const e=new hh(.22,.65,16),n=new tt({color:14753096,roughness:.3}),i=new yn({color:16777215}),r=(f,p)=>{const g=new on,_=new Se(e,n);_.position.y=.325,_.castShadow=!0;const y=new Se(new St(.12,.15,.12,16),i);return y.position.y=.35,g.add(_,y),g.position.set(f,0,p),g};this.group.add(r(13.2,.15)),this.group.add(r(13.8,-.45)),this.group.add(r(14.5,.6));const s=new St(.3,.3,.85,20),a=new tt({color:14251782,roughness:.4,metalness:.7}),o=new Se(s,a);o.position.set(15.2,.425,-.3),o.castShadow=!0,this.group.add(o);const l=new St(1.6,1.6,.2,24),c=new yn({color:16007006,transparent:!0,opacity:.25}),d=new Se(l,c);d.position.set(14,.1,0),this.group.add(d)}initPotholes(){const e=new tt({color:1976635,roughness:.95}),n=new Se(new St(.45,.45,.08,16),e);n.position.set(20.2,-.02,.4);const i=new Se(new St(.38,.38,.08,16),e);i.position.set(21.4,-.02,-.5),this.group.add(n,i)}initRamp20Deg(){const n=new tt({color:4674921,roughness:.5,metalness:.7}),i=new on,r=4.68,s=new ct(r,.15,3.2),a=new Se(s,n);a.rotation.z=.349,a.position.set(32.2,.8,0),a.castShadow=!0,a.receiveShadow=!0,i.add(a);const o=new ct(3.2,.15,3.2),l=new Se(o,n);l.position.set(36,1.6,0),l.castShadow=!0,l.receiveShadow=!0,i.add(l);const c=new Se(s,n);c.rotation.z=-.349,c.position.set(39.8,.8,0),c.castShadow=!0,c.receiveShadow=!0,i.add(c);const d=new tt({color:6583435,metalness:.8});for(let f=33.5;f<=38.5;f+=2.5){const p=new Se(new ct(.15,1.5,.15),d);p.position.set(f,.75,1.4);const g=new Se(new ct(.15,1.5,.15),d);g.position.set(f,.75,-1.4),i.add(p,g)}this.group.add(i)}initTrafficLightGantry(){const e=new on;e.position.set(25,0,0);const n=new tt({color:6583435,metalness:.7}),i=new Se(new St(.08,.08,3.2),n);i.position.set(0,1.6,2.2);const r=new Se(new ct(.12,.12,2.6),n);r.position.set(0,3.1,.9),e.add(i,r);const s=new ct(.25,.8,.3),a=new tt({color:1976635,roughness:.5}),o=new Se(s,a);o.position.set(0,2.8,0),e.add(o);const l=new Se(new Es(.08,16,16),new yn({color:15680580}));l.position.set(-.13,3.05,0);const c=new Se(new Es(.08,16,16),new yn({color:7893356}));c.position.set(-.13,2.8,0);const d=new Se(new Es(.08,16,16),new yn({color:413243}));d.position.set(-.13,2.55,0),e.add(l,c,d),this.trafficLightRef={setLightState:f=>{l.material.color.setHex(f==="RED"?16711680:5574929),c.material.color.setHex(f==="YELLOW"?16759552:5587985),d.material.color.setHex(f==="GREEN"?1096065:413243)}},this.group.add(e)}initRoadSigns(){const e=this.createRoadSign("STOP",14427686);e.position.set(7,0,2.2);const n=this.createRoadSign("SLOW",14251782);n.position.set(10.5,0,-2.2);const i=this.createRoadSign("RAMP 20°",2450411);i.position.set(28.5,0,2.2),this.group.add(e,n,i)}createRoadSign(e,n){const i=new on,r=new Se(new St(.04,.04,2,12),new tt({color:9741240,metalness:.8}));r.position.y=1,r.castShadow=!0,i.add(r);const s=new Se(new St(.35,.35,.04,8),new tt({color:n,roughness:.3}));return s.rotation.x=Math.PI/2,s.rotation.y=Math.PI/8,s.position.set(0,1.8,0),s.castShadow=!0,i.add(s),i}initFaceTargetGallery(){new on().position.set(48,0,0),[{id:"TARGET_A",name:"Subject A",x:-2,z:2.8,color:9741240,isMatch:!1},{id:"TARGET_B",name:"Subject B",x:0,z:2.8,color:6583435,isMatch:!1},{id:"TARGET_C_MATCH",name:"Target Alpha",x:2,z:2.8,color:14753096,isMatch:!0},{id:"TARGET_D",name:"Subject D",x:4,z:2.8,color:4674921,isMatch:!1}].forEach(i=>{const r=new on;r.position.set(i.x,0,i.z);const s=new Se(new ct(.8,1.2,.1),new tt({color:3359061}));s.position.y=.6,r.add(s);const a=new gi(.7,.7),o=new yn({color:i.color}),l=new Se(a,o);l.position.set(0,1.25,.06),r.add(l);const c=new ct(.74,.74,.02),d=new yn({color:i.isMatch?1096065:4674921}),f=new Se(c,d);f.position.set(0,1.25,.05),r.add(f),this.group.add(r),this.targetGalleryPositions.push([48+i.x,1.25,i.z])})}initNavigationPaths(){const e=[new k(0,.08,0),new k(10,.08,0),new k(12.5,.08,.8),new k(16,.08,-.6),new k(25,.08,0),new k(32.2,.8,0),new k(36,1.65,0),new k(39.8,.8,0),new k(48,.08,0),new k(62,.08,0)],n=new Gt().setFromPoints(e),i=new TT({color:2450411,dashSize:.8,gapSize:.4,linewidth:2});this.plannedPathLine=new Tl(n,i),this.plannedPathLine.computeLineDistances(),this.group.add(this.plannedPathLine);const r=new Gt().setFromPoints([new k(0,.1,0),new k(1,.1,0),new k(2,.1,0)]),s=new Us({color:1096065,linewidth:3});this.localTrajectoryLine=new Tl(r,s),this.group.add(this.localTrajectoryLine)}initLidarPointCloud(){const n=new Float32Array(2160),i=new Float32Array(720*3);for(let a=0;a<720;a++){const o=a/720*Math.PI*2,l=2+Math.random()*8;n[a*3]=Math.cos(o)*l,n[a*3+1]=.35+(Math.random()-.5)*.1,n[a*3+2]=Math.sin(o)*l,l<3.5?(i[a*3]=.9,i[a*3+1]=.1,i[a*3+2]=.2):(i[a*3]=0,i[a*3+1]=.7,i[a*3+2]=.3)}const r=new Gt;r.setAttribute("position",new mn(n,3)),r.setAttribute("color",new mn(i,3));const s=new cx({size:.1,vertexColors:!0,transparent:!0,opacity:.85});this.lidarPointCloud=new wT(r,s),this.group.add(this.lidarPointCloud)}updateLidarPoints(e,n){this.lidarPointCloud.position.set(e,0,n)}updateLocalTrajectory(e){e.length>1&&(this.localTrajectoryLine.geometry.setFromPoints(e),this.localTrajectoryLine.geometry.attributes.position.needsUpdate=!0)}}/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var UT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=(t,e)=>{const n=Ce.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...c},d)=>Ce.createElement("svg",{ref:d,...UT,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${OT(t)}`,o].join(" "),...c},[...e.map(([f,p])=>Ce.createElement(f,p)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=Fe("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=Fe("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=Fe("Battery",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=Fe("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=Fe("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=Fe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=Fe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=Fe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=Fe("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=Fe("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=Fe("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=Fe("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=Fe("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=Fe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=Fe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=Fe("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=Fe("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=Fe("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=Fe("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=Fe("Navigation2",[["polygon",{points:"12 2 19 21 12 17 5 21 12 2",key:"x8c0qg"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=Fe("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=Fe("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=Fe("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=Fe("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=Fe("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=Fe("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=Fe("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=Fe("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=Fe("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=Fe("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=Fe("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=Fe("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=Fe("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=Fe("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=Fe("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=Fe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=Fe("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=Fe("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=Fe("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=Fe("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=Fe("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=Fe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=Fe("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),ab=({navEngine:t,cameraMode:e,theme:n="LIGHT",onCameraModeChange:i,onCanvasClick:r})=>{const s=Ce.useRef(null),a=Ce.useRef(null),o=Ce.useRef(null),l=Ce.useRef(null),c=Ce.useRef(null),d=Ce.useRef(null),f=Ce.useRef(0),p=Ce.useRef(new LT),[g,_]=Ce.useState({speedKmh:0,pitch:0,roll:0,heading:0,x:0,y:0,z:0,laserActive:!1,laserTimer:0}),y=Ce.useRef(!1),m=Ce.useRef({x:0,y:0}),u=Ce.useRef({yaw:.8,pitch:.45,dist:16});Ce.useEffect(()=>{if(!s.current)return;const x=s.current,M=x.clientWidth,C=x.clientHeight,A=n==="DARK",b=new ET,P=A?593174:14870768;b.background=new Xe(P),b.fog=new dh(P,A?.01:.008),o.current=b;const H=new Ln(50,M/C,.1,250);H.position.set(-8,8,12),l.current=H;const S=new ox({antialias:!0,powerPreference:"high-performance"});S.setSize(M,C),S.setPixelRatio(Math.min(window.devicePixelRatio,2)),S.shadowMap.enabled=!0,S.shadowMap.type=Cg,S.toneMapping=Lg,S.toneMappingExposure=A?1.15:1.08,x.innerHTML="",x.appendChild(S.domElement),a.current=S;const N=new NT(16777215,A?1.4:1.9);b.add(N);const $=new CT(A?10875900:16777215,A?2.2:2.6);$.position.set(35,55,30),$.castShadow=!0,$.shadow.mapSize.width=2048,$.shadow.mapSize.height=2048,$.shadow.camera.near=.5,$.shadow.camera.far=120,$.shadow.camera.left=-40,$.shadow.camera.right=40,$.shadow.camera.top=30,$.shadow.camera.bottom=-30,$.shadow.bias=-4e-4,b.add($);const Q=new bT(16777215,A?1976635:9741240,.8);b.add(Q);const I=new DT;b.add(I.group),d.current=I;const K=new IT;b.add(K.group),c.current=K;const j=J=>{y.current=!0,m.current={x:J.clientX,y:J.clientY}},ie=J=>{if(!y.current)return;const D=J.clientX-m.current.x,W=J.clientY-m.current.y;m.current={x:J.clientX,y:J.clientY},u.current.yaw+=D*.008,u.current.pitch=Math.max(.05,Math.min(Math.PI/2.2,u.current.pitch+W*.008))},U=()=>{y.current=!1},G=J=>{u.current.dist=Math.max(4,Math.min(50,u.current.dist+J.deltaY*.02))};x.addEventListener("mousedown",j),window.addEventListener("mousemove",ie),window.addEventListener("mouseup",U),x.addEventListener("wheel",G,{passive:!0});const R=()=>{if(!x||!S||!H)return;const J=x.clientWidth,D=x.clientHeight;H.aspect=J/D,H.updateProjectionMatrix(),S.setSize(J,D)};window.addEventListener("resize",R);let w=0;const z=()=>{f.current=requestAnimationFrame(z);const J=Math.min(.05,p.current.getDelta());t.update(J);const D=performance.now();if(D-w>66&&(w=D,_({speedKmh:t.speedKmh,pitch:t.pitch,roll:t.roll,heading:t.heading,x:t.x,y:t.y,z:t.z,laserActive:t.laserActive,laserTimer:t.laserTimerSec})),c.current&&c.current.update({x:t.x,y:t.y,z:t.z,heading:t.heading,pitch:t.pitch,roll:t.roll,speed:t.speedKmh/3.6,steeringAngle:t.steeringAngle,laserActive:t.laserActive,laserTargetPos:t.laserTargetPos},J),d.current){d.current.trafficLightRef.setLightState(t.trafficLightColor),d.current.updateLidarPoints(t.x,t.z);const te=-t.heading*(Math.PI/180),se=[new k(t.x,t.y+.1,t.z),new k(t.x+Math.cos(te)*2,t.y+.1,t.z+Math.sin(te)*2),new k(t.x+Math.cos(te)*4.5,t.y+.1,t.z+Math.sin(te)*4.5)];d.current.updateLocalTrajectory(se)}const W=new k(t.x,t.y+.45,t.z),ee=-t.heading*(Math.PI/180);if(e==="TOP")H.position.set(t.x,28,t.z),H.lookAt(t.x,0,t.z);else if(e==="ISOMETRIC"){const te=new k(-11,12,11);H.position.copy(W).add(te),H.lookAt(W)}else if(e==="FOLLOW"){const te=t.x-Math.cos(ee)*5.4,se=t.z-Math.sin(ee)*5.4;H.position.set(te,t.y+2.5,se),H.lookAt(t.x+Math.cos(ee)*4.2,t.y+.6,t.z+Math.sin(ee)*4.2)}else if(e==="FPV"){const te=t.x+Math.cos(ee)*.72,se=t.z+Math.sin(ee)*.72;H.position.set(te,t.y+.62,se);const oe=new k(t.x+Math.cos(ee)*14,t.y+.45,t.z+Math.sin(ee)*14);H.lookAt(oe)}else{const te=u.current,se=t.x+te.dist*Math.sin(te.yaw)*Math.cos(te.pitch),oe=t.y+te.dist*Math.sin(te.pitch),Te=t.z+te.dist*Math.cos(te.yaw)*Math.cos(te.pitch);H.position.set(se,oe,Te),H.lookAt(W)}S.render(b,H)};return z(),()=>{cancelAnimationFrame(f.current),window.removeEventListener("resize",R),x.removeEventListener("mousedown",j),window.removeEventListener("mousemove",ie),window.removeEventListener("mouseup",U),x.removeEventListener("wheel",G),a.current&&a.current.dispose()}},[e,n]);const v=n==="DARK";return h.jsxs("div",{ref:s,className:"relative w-full h-full cursor-crosshair select-none overflow-hidden",onClick:r,children:[h.jsxs("div",{className:`absolute top-3 left-3 pointer-events-none flex items-center space-x-2 backdrop-blur-md px-3 py-1.5 rounded-xl border shadow-md text-xs ${v?"bg-slate-900/85 text-slate-200 border-slate-700/60":"bg-white/95 text-slate-800 border-slate-200"}`,children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"}),h.jsx("span",{className:"font-bold tracking-wider opacity-70",children:"VIEW:"}),h.jsx("span",{className:"text-blue-500 font-bold",children:e}),h.jsx("span",{className:"opacity-30",children:"|"}),h.jsxs("span",{className:"font-mono text-[11px]",children:["X: ",h.jsxs("strong",{className:v?"text-white":"text-slate-900",children:[g.x.toFixed(1),"m"]})," Y: ",h.jsxs("strong",{className:v?"text-white":"text-slate-900",children:[g.y.toFixed(2),"m"]})]})]}),h.jsxs("div",{className:`absolute top-3 right-3 pointer-events-none backdrop-blur-md px-3 py-1.5 rounded-xl border shadow-md text-xs flex items-center space-x-3 ${v?"bg-slate-900/85 text-slate-200 border-slate-700/60":"bg-white/95 text-slate-800 border-slate-200"}`,children:[h.jsxs("div",{className:"flex items-center space-x-1.5",children:[h.jsx(Xl,{className:"w-3.5 h-3.5 text-blue-500"}),h.jsx("span",{className:"opacity-70 font-bold",children:"HDG:"}),h.jsxs("span",{className:"font-bold font-mono",children:[Math.round(g.heading),"°"]})]}),h.jsx("div",{className:`h-4 w-px ${v?"bg-slate-700":"bg-slate-200"}`}),h.jsxs("div",{className:"flex items-center space-x-1.5",children:[h.jsx(cd,{className:"w-3.5 h-3.5 text-emerald-500"}),h.jsx("span",{className:"opacity-70 font-bold",children:"SPD:"}),h.jsxs("span",{className:"font-bold text-emerald-500 font-mono",children:[g.speedKmh.toFixed(1)," km/h"]})]}),h.jsx("div",{className:`h-4 w-px ${v?"bg-slate-700":"bg-slate-200"}`}),h.jsxs("div",{className:"flex items-center space-x-1.5",children:[h.jsx("span",{className:"opacity-70 font-bold",children:"PITCH:"}),h.jsxs("span",{className:`font-bold font-mono px-1.5 py-0.5 rounded text-[10px] ${Math.abs(g.pitch)>10?"bg-amber-500/20 text-amber-500 border border-amber-500/40 font-black":""}`,children:[g.pitch.toFixed(1),"° ",Math.abs(g.pitch)>10?"(20° RAMP)":""]})]})]}),g.laserActive&&h.jsxs("div",{className:"absolute top-16 left-1/2 -translate-x-1/2 pointer-events-none bg-emerald-600 text-white border-2 border-emerald-400 px-6 py-2.5 rounded-2xl shadow-2xl flex items-center space-x-3 animate-pulse z-20",children:[h.jsx("div",{className:"w-3.5 h-3.5 rounded-full bg-white animate-ping"}),h.jsxs("div",{children:[h.jsxs("div",{className:"font-black text-sm tracking-wider leading-none",children:["532nm TARGETING LASER ACTIVE: ",g.laserTimer.toFixed(2),"s / 2.00s"]}),h.jsx("div",{className:"w-full bg-emerald-950/60 h-1.5 rounded-full mt-1.5 overflow-hidden",children:h.jsx("div",{className:"bg-emerald-300 h-full transition-all duration-100",style:{width:`${Math.min(100,g.laserTimer/2*100)}%`}})})]})]}),e==="FPV"&&h.jsx("div",{className:"absolute inset-0 pointer-events-none flex items-center justify-center",children:h.jsxs("div",{className:"relative w-52 h-40 border border-blue-500/30 rounded-lg flex items-center justify-center",children:[h.jsx("div",{className:"w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-sm"}),h.jsx("div",{className:"absolute top-0 w-0.5 h-4 bg-blue-500"}),h.jsx("div",{className:"absolute bottom-0 w-0.5 h-4 bg-blue-500"}),h.jsx("div",{className:"absolute left-0 w-4 h-0.5 bg-blue-500"}),h.jsx("div",{className:"absolute right-0 w-4 h-0.5 bg-blue-500"}),h.jsx("div",{className:"absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-blue-500"}),h.jsx("div",{className:"absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-blue-500"}),h.jsx("div",{className:"absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-blue-500"}),h.jsx("div",{className:"absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-blue-500"}),h.jsx("div",{className:`absolute bottom-2 text-[10px] font-mono font-bold px-2 py-0.5 rounded ${v?"bg-slate-900/90 text-blue-400":"bg-white/90 text-blue-700"}`,children:"COCKPIT FPV • 1080P 30FPS"})]})}),i&&h.jsx("div",{className:`absolute bottom-4 left-1/2 -translate-x-1/2 backdrop-blur-md px-2 py-1.5 rounded-2xl border shadow-xl flex items-center space-x-1.5 z-10 ${v?"bg-slate-900/90 border-slate-700/60":"bg-white/95 border-slate-200"}`,children:[{id:"FOLLOW",label:"FOLLOW",icon:Wl},{id:"ISOMETRIC",label:"ISO",icon:pm},{id:"TOP",label:"TOP",icon:jT},{id:"FPV",label:"FRONT CAM",icon:dx},{id:"FREE",label:"ORBIT",icon:pm}].map(x=>{const M=x.icon,C=e===x.id;return h.jsxs("button",{onClick:A=>{A.stopPropagation(),i(x.id)},className:`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${C?"bg-blue-600 text-white shadow-md scale-105":v?"text-slate-300 hover:text-white hover:bg-slate-800":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,children:[h.jsx(M,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:x.label})]},x.id)})}),e==="FREE"&&h.jsx("div",{className:`absolute bottom-4 left-4 pointer-events-none text-[11px] backdrop-blur px-3 py-1.5 rounded-xl border shadow-sm ${v?"bg-slate-900/85 text-slate-300 border-slate-700/60":"bg-white/90 text-slate-600 border-slate-200"}`,children:"🖱️ Click & Drag to Orbit | Scroll to Zoom"})]})},ob=({mode:t,onModeChange:e,telemetry:n,isConnected:i,soundEnabled:r,onToggleSound:s,theme:a,onToggleTheme:o,onStartFullDemo:l,onResetMission:c,onToggleTrafficLight:d,activeNavTab:f,onNavTabChange:p})=>{const g=n.safety.estop,_=n.vision.traffic_light_state||"GREEN",y=a==="DARK";return h.jsxs("header",{className:`h-14 px-3 md:px-5 flex items-center justify-between select-none z-30 shrink-0 transition-colors duration-200 border-b ${y?"bg-slate-950/95 border-slate-800 text-slate-100 shadow-lg":"bg-white/95 border-slate-200 text-slate-900 shadow-sm"}`,children:[h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsxs("div",{className:"flex items-center space-x-2.5",children:[h.jsx("div",{className:"w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md font-black shrink-0",children:h.jsx(zT,{className:"w-5 h-5"})}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center space-x-1.5 leading-none",children:[h.jsx("span",{className:`text-base font-black tracking-wider ${y?"text-white":"text-slate-900"}`,children:"CTRL FIRST"}),h.jsx("span",{className:`text-[10px] font-bold px-2 py-0.5 rounded-full border ${y?"bg-blue-950/70 text-cyan-400 border-blue-800":"bg-blue-50 text-blue-700 border-blue-200"}`,children:"v3.0 PRO"})]}),h.jsx("div",{className:"text-[9px] text-slate-500 font-mono tracking-tight mt-0.5 hidden sm:block",children:"AUTONOMOUS UGV GROUND CONTROL STATION"})]})]}),h.jsxs("div",{className:`hidden md:flex items-center space-x-1 ml-3 pl-3 border-l text-xs font-bold ${y?"border-slate-800":"border-slate-200"}`,children:[h.jsxs("button",{onClick:()=>p("MISSION_CONTROL"),className:`px-3 py-1.5 rounded-xl transition-all flex items-center space-x-1.5 ${f==="MISSION_CONTROL"?y?"bg-slate-800 text-cyan-400 border border-slate-700 shadow-sm":"bg-blue-50 text-blue-700 border border-blue-200 shadow-sm":y?"text-slate-400 hover:text-white hover:bg-slate-900":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,children:[h.jsx(hx,{className:"w-3.5 h-3.5 text-blue-600"}),h.jsx("span",{children:"MISSION CONTROL"})]}),h.jsxs("button",{onClick:()=>p("HARDWARE"),className:`px-3 py-1.5 rounded-xl transition-all flex items-center space-x-1.5 ${f==="HARDWARE"?y?"bg-slate-800 text-cyan-400 border border-slate-700 shadow-sm":"bg-blue-50 text-blue-700 border border-blue-200 shadow-sm":y?"text-slate-400 hover:text-white hover:bg-slate-900":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,children:[h.jsx($l,{className:"w-3.5 h-3.5 text-cyan-600"}),h.jsx("span",{children:"HARDWARE"})]}),h.jsxs("button",{onClick:()=>p("ROS_NODES"),className:`px-3 py-1.5 rounded-xl transition-all flex items-center space-x-1.5 ${f==="ROS_NODES"?y?"bg-slate-800 text-cyan-400 border border-slate-700 shadow-sm":"bg-blue-50 text-blue-700 border border-blue-200 shadow-sm":y?"text-slate-400 hover:text-white hover:bg-slate-900":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,children:[h.jsx(ph,{className:"w-3.5 h-3.5 text-purple-600"}),h.jsx("span",{children:"ROS 2 GRAPH"})]})]})]}),h.jsxs("div",{className:"flex items-center space-x-2 md:space-x-3",children:[h.jsxs("div",{className:`flex rounded-xl p-0.5 text-xs font-bold border ${y?"bg-slate-900 border-slate-800":"bg-slate-100 border-slate-300"}`,children:[h.jsx("button",{onClick:()=>e("SIMULATION"),className:`px-2.5 py-1 rounded-lg transition-all ${t==="SIMULATION"?y?"bg-slate-800 text-emerald-400 shadow-sm border border-slate-700":"bg-white text-emerald-700 shadow-sm border border-slate-200":"text-slate-500 hover:text-slate-300"}`,children:"SIMULATION"}),h.jsx("button",{onClick:()=>e("REAL_HARDWARE"),className:`px-2.5 py-1 rounded-lg transition-all ${t==="REAL_HARDWARE"?"bg-blue-600 text-white shadow-sm":"text-slate-500 hover:text-slate-300"}`,children:"REAL UGV"})]}),h.jsxs("button",{onClick:l,className:"flex items-center space-x-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold px-3.5 py-1.5 rounded-xl shadow-md text-xs transition-all hover:scale-102 active:scale-95",title:"Run full end-to-end 13-stage autonomous mission",children:[h.jsx(fx,{className:"w-3.5 h-3.5 fill-current"}),h.jsx("span",{className:"hidden sm:inline",children:"LAUNCH FULL MISSION"}),h.jsx("span",{className:"sm:hidden",children:"LAUNCH"})]}),h.jsx("button",{onClick:c,title:"Reset Simulation to Start",className:`p-1.5 rounded-xl border transition-colors ${y?"bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800":"bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200"}`,children:h.jsx(mh,{className:"w-3.5 h-3.5"})})]}),h.jsxs("div",{className:"flex items-center space-x-2 text-xs",children:[d&&h.jsxs("button",{onClick:d,title:"Click to toggle Traffic Light between RED and GREEN",className:`px-2.5 py-1 rounded-xl border font-bold flex items-center space-x-1.5 transition-all shadow-sm ${_==="RED"?y?"bg-rose-950/60 text-rose-300 border-rose-800 animate-pulse":"bg-rose-50 text-rose-700 border-rose-300 animate-pulse":_==="YELLOW"?y?"bg-amber-950/60 text-amber-300 border-amber-800":"bg-amber-50 text-amber-700 border-amber-300":y?"bg-emerald-950/60 text-emerald-300 border-emerald-800":"bg-emerald-50 text-emerald-700 border-emerald-300"}`,children:[h.jsx("span",{className:`w-2.5 h-2.5 rounded-full ${_==="RED"?"bg-rose-500":_==="YELLOW"?"bg-amber-400":"bg-emerald-500"}`}),h.jsxs("span",{children:["SIGNAL: ",_]})]}),h.jsx("div",{className:`hidden xl:flex items-center space-x-1.5 px-2.5 py-1 rounded-xl border font-bold ${y?"bg-slate-900 border-slate-800":"bg-slate-100 border-slate-200"}`,children:i?h.jsxs(h.Fragment,{children:[h.jsx(rb,{className:"w-3.5 h-3.5 text-emerald-500"}),h.jsx("span",{className:"text-emerald-500",children:"CONNECTED"})]}):h.jsxs(h.Fragment,{children:[h.jsx(ib,{className:"w-3.5 h-3.5 text-rose-500"}),h.jsx("span",{className:"text-rose-500",children:t==="REAL_HARDWARE"?"UGV OFFLINE":"SIM CLIENT"})]})}),h.jsxs("div",{className:`hidden lg:flex items-center space-x-1 px-2.5 py-1 rounded-xl border font-bold ${y?"bg-slate-900 border-slate-800":"bg-slate-100 border-slate-200"}`,children:[h.jsx(gh,{className:"w-3.5 h-3.5 text-blue-500"}),h.jsx("span",{className:n.mode==="AUTONOMOUS"?"text-blue-500":"text-amber-500",children:n.mode}),n.mode==="AUTONOMOUS"&&h.jsx("span",{className:`text-[9px] px-1 py-0.2 rounded font-bold border ${y?"bg-blue-950 text-blue-400 border-blue-800":"bg-blue-100 text-blue-800 border-blue-200"}`,children:"ONBOARD"})]}),h.jsxs("div",{className:`flex items-center space-x-1 px-2.5 py-1 rounded-xl border font-bold ${y?"bg-slate-900 border-slate-800 text-slate-200":"bg-slate-100 border-slate-200 text-slate-800"}`,children:[h.jsx(kT,{className:`w-3.5 h-3.5 ${n.battery<25?"text-rose-500 animate-pulse":"text-emerald-500"}`}),h.jsxs("span",{children:[n.battery,"%"]})]}),h.jsxs("div",{className:`hidden sm:flex items-center space-x-1 px-2.5 py-1 rounded-xl border font-bold ${y?"bg-slate-900 border-slate-800":"bg-slate-100 border-slate-200"}`,children:[h.jsx(Yl,{className:"w-3.5 h-3.5 text-emerald-500"}),h.jsx("span",{className:"text-emerald-500",children:n.gps.fix})]}),h.jsxs("div",{className:`flex items-center space-x-1.5 px-3 py-1 rounded-xl border font-black ${g?"bg-rose-500 text-white border-rose-600 animate-pulse":y?"bg-emerald-950/60 text-emerald-300 border-emerald-800":"bg-emerald-50 text-emerald-800 border-emerald-300"}`,children:[g?h.jsx(px,{className:"w-3.5 h-3.5"}):h.jsx(ql,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:g?"E-STOP":"ARMED"})]}),h.jsx("button",{onClick:o,className:`p-1.5 rounded-xl border transition-colors ${y?"bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800":"bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200"}`,title:y?"Switch to Aerospace Light Theme":"Switch to Cyber Stealth Dark Theme",children:y?h.jsx(ZT,{className:"w-3.5 h-3.5"}):h.jsx(WT,{className:"w-3.5 h-3.5"})}),h.jsx("button",{onClick:s,className:`p-1.5 rounded-xl border transition-colors ${y?"bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800":"bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200"}`,title:r?"Mute Audio & Speech":"Enable Audio & Speech Announcer",children:r?h.jsx(tb,{className:"w-3.5 h-3.5 text-emerald-500"}):h.jsx(nb,{className:"w-3.5 h-3.5 text-slate-400"})})]})]})},lb=({telemetry:t,cameraMode:e,theme:n="LIGHT",onCameraModeChange:i,onManualDrive:r,onEmergencyStop:s,onResetEstop:a,onStartAutonomous:o,onResetMission:l,onToggleTrafficLight:c})=>{const[d,f]=Ce.useState("MISSION"),p=t.mission.state,g=t.mode==="AUTONOMOUS",_=t.safety.estop,y=n==="DARK";Ce.useEffect(()=>{const u=x=>{if(x.code==="Space"){x.preventDefault(),s();return}if(!(g||_))switch(x.key.toLowerCase()){case"w":case"arrowup":r(1,0);break;case"s":case"arrowdown":r(-.8,0);break;case"a":case"arrowleft":r(.5,-1);break;case"d":case"arrowright":r(.5,1);break}},v=x=>{g||_||["w","s","a","d","arrowup","arrowdown","arrowleft","arrowright"].includes(x.key.toLowerCase())&&r(0,0)};return window.addEventListener("keydown",u),window.addEventListener("keyup",v),()=>{window.removeEventListener("keydown",u),window.removeEventListener("keyup",v)}},[g,_,r,s]);const m=[{state:"IDLE",label:"IDLE",desc:"Standby at start pad"},{state:"INITIALIZING",label:"INITIALIZING",desc:"All ROS 2 nodes booting"},{state:"LOCALIZING",label:"LOCALIZING",desc:"Dual RTK GNSS locked"},{state:"NAVIGATING",label:"WAYPOINT FLIGHT",desc:"Pure pursuit speed controller"},{state:"OBSTACLE_DETECTED",label:"OBSTACLE DETECT",desc:"LiDAR threat evaluation"},{state:"REPLANNING",label:"PATH REPLAN",desc:"Local A* corridor bypass"},{state:"TRAFFIC_LIGHT",label:"TRAFFIC SIGNAL",desc:"Stop line hold bar"},{state:"RAMP_TRAVERSAL",label:"20° RAMP",desc:"High torque incline traversal"},{state:"TARGET_SEARCH",label:"TARGET SEARCH",desc:"Camera scanning candidate panels"},{state:"FACE_MATCH",label:"FACE MATCH",desc:"Cosine similarity 96.7% match"},{state:"TARGET_ALIGNMENT",label:"ALIGNMENT",desc:"Pan-tilt turret lock"},{state:"LASER_INDICATION",label:"532nm LASER (2s)",desc:"Precision laser mark"},{state:"MISSION_COMPLETE",label:"COMPLETE",desc:"Finish gantry cleared"}];return h.jsxs("div",{className:`w-full h-full flex flex-col text-xs select-none shadow-sm transition-colors duration-200 border-r ${y?"bg-slate-950/90 border-slate-800 text-slate-200":"bg-white border-slate-200 text-slate-800"}`,children:[h.jsxs("div",{className:`flex p-1.5 space-x-1.5 border-b ${y?"bg-slate-900/80 border-slate-800":"bg-slate-50 border-slate-200"}`,children:[h.jsxs("button",{onClick:()=>f("MISSION"),className:`flex-1 py-1.5 px-2 rounded-xl flex items-center justify-center space-x-1.5 font-bold transition-all ${d==="MISSION"?y?"bg-slate-800 text-emerald-400 shadow-sm border border-slate-700":"bg-white text-emerald-700 shadow-sm border border-slate-200":y?"text-slate-400 hover:text-white":"text-slate-600 hover:text-slate-900"}`,children:[h.jsx(hx,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"MISSION STEPS"})]}),h.jsxs("button",{onClick:()=>f("TELEOP"),className:`flex-1 py-1.5 px-2 rounded-xl flex items-center justify-center space-x-1.5 font-bold transition-all ${d==="TELEOP"?y?"bg-slate-800 text-cyan-400 shadow-sm border border-slate-700":"bg-white text-blue-700 shadow-sm border border-slate-200":y?"text-slate-400 hover:text-white":"text-slate-600 hover:text-slate-900"}`,children:[h.jsx(KT,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"MANUAL TELEOP"})]})]}),h.jsxs("div",{className:"flex-1 overflow-y-auto p-3 space-y-3",children:[h.jsxs("div",{className:`rounded-xl border p-2.5 shadow-sm ${y?"bg-slate-900/60 border-slate-800":"bg-slate-50 border-slate-200"}`,children:[h.jsxs("div",{className:"flex items-center justify-between pb-1.5 border-b text-[11px] font-bold border-slate-200/50",children:[h.jsxs("div",{className:"flex items-center space-x-1.5",children:[h.jsx(Wl,{className:"w-3.5 h-3.5 text-blue-500"}),h.jsx("span",{children:"CAMERA ANGLES"})]}),h.jsx("span",{className:"text-[10px] text-blue-500 font-bold",children:e})]}),h.jsx("div",{className:"grid grid-cols-3 gap-1.5 mt-2",children:["FOLLOW","ISOMETRIC","TOP","FPV","FREE"].map(u=>h.jsx("button",{onClick:()=>i(u),className:`py-1.5 px-1 rounded-lg text-[10px] font-bold border transition-all ${e===u?"bg-blue-600 text-white border-blue-600 shadow-sm scale-102":y?"bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700":"bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"}`,children:u==="FPV"?"FRONT CAM":u},u))})]}),d==="MISSION"?h.jsx(h.Fragment,{children:h.jsxs("div",{className:`rounded-xl border p-2.5 shadow-sm ${y?"bg-slate-900/60 border-slate-800":"bg-slate-50 border-slate-200"}`,children:[h.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-200/50",children:[h.jsx("span",{className:"font-bold",children:"MISSION PIPELINE"}),h.jsx("span",{className:`text-[10px] font-bold px-2 py-0.5 rounded-full font-mono border ${y?"bg-slate-800 text-cyan-400 border-slate-700":"bg-slate-200 text-slate-800 border-slate-300"}`,children:p})]}),h.jsxs("div",{className:`my-2.5 p-2 rounded-xl border shadow-sm flex items-center justify-between ${y?"bg-slate-900 border-slate-800":"bg-white border-slate-200"}`,children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("div",{className:`w-3.5 h-3.5 rounded-full shadow-sm ${t.vision.traffic_light_state==="RED"?"bg-rose-500 animate-pulse ring-2 ring-rose-300":t.vision.traffic_light_state==="YELLOW"?"bg-amber-400 animate-pulse ring-2 ring-amber-200":"bg-emerald-500 ring-2 ring-emerald-200"}`}),h.jsxs("div",{children:[h.jsx("div",{className:"text-[9px] text-slate-500 font-bold uppercase leading-none",children:"SIGNAL STATUS"}),h.jsxs("div",{className:`text-xs font-bold leading-tight ${t.vision.traffic_light_state==="RED"?"text-rose-500":t.vision.traffic_light_state==="YELLOW"?"text-amber-500":"text-emerald-500"}`,children:[t.vision.traffic_light_state||"GREEN"," ",p==="TRAFFIC_LIGHT"&&"(HOLDING)"]})]})]}),c&&h.jsx("button",{onClick:c,className:`px-2.5 py-1 text-[10px] font-bold rounded-lg border transition-all ${y?"bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700":"bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300"}`,title:"Toggle Signal between Red and Green",children:t.vision.traffic_light_state==="RED"?"FORCE GREEN ➔":"SET RED"})]}),h.jsx("div",{className:"space-y-1.5 max-h-[380px] overflow-y-auto pr-0.5",children:m.map((u,v)=>{const x=p===u.state;return h.jsxs("div",{className:`flex items-center justify-between px-2.5 py-1.5 rounded-xl transition-all ${x?y?"bg-emerald-950/70 text-emerald-300 border border-emerald-500/70 font-bold shadow-md":"bg-emerald-50 text-emerald-900 border border-emerald-400 font-bold shadow-sm":y?"bg-slate-900/40 text-slate-400 border border-slate-800/60 hover:bg-slate-900/80":"bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"}`,children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("span",{className:`w-2 h-2 rounded-full ${x?"bg-emerald-500 animate-ping":"bg-slate-400"}`}),h.jsxs("div",{children:[h.jsxs("div",{className:"text-[11px] leading-tight",children:[v+1,". ",u.label]}),h.jsx("div",{className:"text-[9px] text-slate-500 leading-none",children:u.desc})]})]}),x&&h.jsx("span",{className:"text-[9px] bg-emerald-600 text-white px-2 py-0.5 rounded-full font-black",children:"ACTIVE"})]},u.state)})}),h.jsxs("div",{className:"mt-3 pt-2.5 border-t border-slate-200/50 flex items-center space-x-2",children:[h.jsxs("button",{onClick:o,className:"flex-1 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl flex items-center justify-center space-x-1.5 transition-all shadow-md active:scale-95",children:[h.jsx(fx,{className:"w-3.5 h-3.5 fill-current"}),h.jsx("span",{children:"ENGAGE ONBOARD AUTONOMY"})]}),h.jsx("button",{onClick:l,className:`px-3 py-2 rounded-xl border transition-colors ${y?"bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700":"bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200"}`,title:"Reset Mission",children:h.jsx(mh,{className:"w-3.5 h-3.5"})})]})]})}):h.jsx(h.Fragment,{children:h.jsxs("div",{className:`rounded-xl border p-2.5 shadow-sm ${y?"bg-slate-900/60 border-slate-800":"bg-slate-50 border-slate-200"}`,children:[h.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-200/50",children:[h.jsx("span",{className:"font-bold",children:"MANUAL UGV CONTROL"}),h.jsx("span",{className:"text-[10px] text-slate-500 font-semibold",children:"WASD / ARROWS"})]}),g&&h.jsx("div",{className:"my-2.5 p-2 bg-amber-500/15 border border-amber-500/30 rounded-xl text-[11px] text-amber-500 font-medium",children:"⚠️ AUTONOMOUS CONTROL ONBOARD: Manual steering is locked during autonomous mission."}),h.jsxs("div",{className:"my-4 flex flex-col items-center justify-center space-y-1.5",children:[h.jsx("button",{onMouseDown:()=>r(1,0),onMouseUp:()=>r(0,0),onTouchStart:()=>r(1,0),onTouchEnd:()=>r(0,0),className:`w-14 h-12 rounded-xl font-bold border transition-all active:scale-95 shadow-sm flex items-center justify-center ${y?"bg-slate-800 border-slate-700 text-white hover:bg-slate-700":"bg-white border-slate-300 text-slate-800 hover:bg-slate-100"}`,children:"▲ W"}),h.jsxs("div",{className:"flex space-x-2",children:[h.jsx("button",{onMouseDown:()=>r(.5,-1),onMouseUp:()=>r(0,0),onTouchStart:()=>r(.5,-1),onTouchEnd:()=>r(0,0),className:`w-14 h-12 rounded-xl font-bold border transition-all active:scale-95 shadow-sm flex items-center justify-center ${y?"bg-slate-800 border-slate-700 text-white hover:bg-slate-700":"bg-white border-slate-300 text-slate-800 hover:bg-slate-100"}`,children:"◀ A"}),h.jsx("button",{onMouseDown:()=>r(-.8,0),onMouseUp:()=>r(0,0),onTouchStart:()=>r(-.8,0),onTouchEnd:()=>r(0,0),className:`w-14 h-12 rounded-xl font-bold border transition-all active:scale-95 shadow-sm flex items-center justify-center ${y?"bg-slate-800 border-slate-700 text-white hover:bg-slate-700":"bg-white border-slate-300 text-slate-800 hover:bg-slate-100"}`,children:"▼ S"}),h.jsx("button",{onMouseDown:()=>r(.5,1),onMouseUp:()=>r(0,0),onTouchStart:()=>r(.5,1),onTouchEnd:()=>r(0,0),className:`w-14 h-12 rounded-xl font-bold border transition-all active:scale-95 shadow-sm flex items-center justify-center ${y?"bg-slate-800 border-slate-700 text-white hover:bg-slate-700":"bg-white border-slate-300 text-slate-800 hover:bg-slate-100"}`,children:"▶ D"})]})]}),h.jsx("div",{className:"mt-3",children:_?h.jsx("button",{onClick:a,className:"w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl transition-all shadow-md active:scale-95 text-center",children:"ARM SAFETY INTERLOCK (RESET E-STOP)"}):h.jsxs("button",{onClick:s,className:"w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-black rounded-xl transition-all shadow-lg active:scale-95 text-center flex items-center justify-center space-x-1.5 animate-pulse",children:[h.jsx(px,{className:"w-4 h-4"}),h.jsx("span",{children:"EMERGENCY STOP (SPACE)"})]})})]})})]})]})},cb=({telemetry:t})=>{const e=[{id:"TARGET_A",name:"Subject 01 (Non-Target)",similarity:24.2,isMatch:!1,color:"bg-slate-200 text-slate-800"},{id:"TARGET_B",name:"Subject 02 (Non-Target)",similarity:41.5,isMatch:!1,color:"bg-slate-200 text-slate-800"},{id:"TARGET_C_MATCH",name:"Target Alpha (Suspect Profile)",similarity:96.7,isMatch:!0,color:"bg-rose-100 text-rose-800 border border-rose-300"},{id:"TARGET_D",name:"Subject 04 (Non-Target)",similarity:18.9,isMatch:!1,color:"bg-slate-200 text-slate-800"}],n=!!t.vision.detected_sign,i=t.vision.traffic_light_state;return h.jsxs("div",{className:"space-y-3",children:[h.jsxs("div",{className:"bg-slate-50 rounded-lg border border-slate-200 p-2.5 shadow-sm",children:[h.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-200",children:[h.jsxs("div",{className:"flex items-center space-x-1.5 font-bold text-blue-700",children:[h.jsx(dx,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"AI PERCEPTION FEED (YOLO-V9)"})]}),h.jsx("span",{className:"text-[10px] text-slate-500 font-semibold",children:"30 FPS (TENSORRT)"})]}),h.jsxs("div",{className:"relative w-full h-32 bg-slate-900 rounded-lg mt-2 border border-slate-300 overflow-hidden flex items-center justify-center shadow-inner",children:[h.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:12px_12px] opacity-30"}),n?h.jsxs("div",{className:"absolute top-3 left-4 border-2 border-amber-400 bg-amber-500/30 px-2 py-1 rounded text-[10px] shadow",children:[h.jsxs("div",{className:"font-bold text-amber-200",children:["SIGN: ",t.vision.detected_sign]}),h.jsxs("div",{className:"text-white text-[9px]",children:["CONF: ",t.vision.sign_confidence,"%"]})]}):h.jsx("div",{className:"text-[10px] text-slate-400 font-mono tracking-wider",children:"CAMERA FEED • SCANNING ROADWAY"}),i&&h.jsx("div",{className:"absolute top-3 right-4 border-2 border-blue-400 bg-slate-950/90 px-2.5 py-1 rounded-md text-[10px] shadow",children:h.jsxs("div",{className:"font-bold flex items-center space-x-1.5 text-white",children:[h.jsx("span",{children:"SIGNAL:"}),h.jsx("span",{className:i==="RED"?"text-rose-400 font-bold animate-pulse":i==="YELLOW"?"text-amber-400 font-bold":"text-emerald-400 font-bold",children:i})]})}),t.vision.face_matched&&h.jsxs("div",{className:"absolute inset-x-6 bottom-3 border-2 border-emerald-400 bg-emerald-950/80 p-2 rounded-lg flex items-center justify-between shadow",children:[h.jsxs("div",{className:"flex items-center space-x-1.5 text-emerald-300 font-bold text-[11px]",children:[h.jsx(mm,{className:"w-3.5 h-3.5 animate-spin"}),h.jsx("span",{children:"TARGET ALPHA LOCKED (96.7%)"})]}),h.jsx("span",{className:"text-[9px] bg-emerald-800 text-white px-1.5 py-0.5 rounded font-mono",children:"COS_SIM: 0.967"})]})]})]}),h.jsxs("div",{className:"bg-slate-50 rounded-lg border border-slate-200 p-2.5 shadow-sm",children:[h.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-200",children:[h.jsxs("div",{className:"flex items-center space-x-1.5 font-bold text-purple-700",children:[h.jsx(mm,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"FACE TARGET GALLERY"})]}),h.jsx("span",{className:"text-[10px] text-slate-500 font-semibold",children:"512-D EMBEDDINGS"})]}),h.jsx("div",{className:"mt-2 space-y-1.5",children:e.map(r=>{const s=t.vision.face_matched&&r.isMatch;return h.jsxs("div",{className:`flex items-center justify-between p-2 rounded-md transition-colors ${s?"bg-emerald-50 border border-emerald-400 shadow-sm":"bg-white border border-slate-200"}`,children:[h.jsxs("div",{className:"flex items-center space-x-2.5",children:[h.jsx("div",{className:`w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold ${r.color}`,children:r.id.split("_")[1]}),h.jsxs("div",{children:[h.jsx("div",{className:`text-[11px] font-bold ${s?"text-emerald-900":"text-slate-800"}`,children:r.name}),h.jsxs("div",{className:"text-[9px] text-slate-500",children:["SIMILARITY: ",r.similarity,"%"]})]})]}),s?h.jsxs("span",{className:"text-[10px] bg-emerald-600 text-white font-bold px-2 py-0.5 rounded flex items-center space-x-1",children:[h.jsx(Qn,{className:"w-3 h-3"}),h.jsx("span",{children:"MATCHED"})]}):h.jsx("span",{className:"text-[10px] text-slate-400 font-semibold",children:"REJECTED"})]},r.id)})})]}),h.jsxs("div",{className:`rounded-lg border p-2.5 transition-all shadow-sm ${t.mission.laser_active?"bg-emerald-50 border-emerald-500 shadow-md":"bg-slate-50 border-slate-200"}`,children:[h.jsxs("div",{className:"flex items-center justify-between pb-1.5 border-b border-slate-200",children:[h.jsxs("div",{className:"flex items-center space-x-1.5 font-bold text-emerald-800",children:[h.jsx(gh,{className:"w-3.5 h-3.5 text-emerald-600"}),h.jsx("span",{children:"532nm LASER INDICATION SYSTEM"})]}),h.jsx("span",{className:"text-[10px] text-slate-500 font-semibold",children:"PAN-TILT GIMBAL"})]}),h.jsxs("div",{className:"mt-2 space-y-2",children:[h.jsxs("div",{className:"flex items-center justify-between text-[11px]",children:[h.jsx("span",{className:"text-slate-600 font-medium",children:"INDICATION DURATION:"}),h.jsxs("span",{className:"font-mono font-bold text-emerald-800",children:[t.mission.laser_timer.toFixed(2)," s / 2.00 s"]})]}),h.jsx("div",{className:"w-full bg-slate-200 h-2 rounded-full overflow-hidden",children:h.jsx("div",{className:"bg-emerald-600 h-full transition-all duration-75",style:{width:`${Math.min(100,t.mission.laser_timer/2*100)}%`}})}),h.jsxs("div",{className:"flex items-center justify-between text-[10px] pt-1",children:[h.jsx("span",{className:"text-slate-600",children:"GIMBAL LOCK:"}),h.jsx("span",{className:t.vision.target_aligned?"text-emerald-700 font-bold":"text-slate-500",children:t.vision.target_aligned?"ALIGNED (AZ: 14.5°, EL: 4.2°)":"STANDBY"})]}),h.jsx("div",{className:"text-[9px] text-amber-800 bg-amber-50 p-2 rounded border border-amber-200",children:"⚠️ NOTICE: Visual simulation only. Physical laser uses isolated hardware safety relay."})]})]})]})},ub=({telemetry:t})=>h.jsxs("div",{className:"space-y-3",children:[h.jsxs("div",{className:"bg-slate-50 rounded-lg border border-slate-200 p-2.5 shadow-sm",children:[h.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-200",children:[h.jsxs("div",{className:"flex items-center space-x-1.5 font-bold text-blue-700",children:[h.jsx($l,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"ONBOARD JETSON ORIN METRICS"})]}),h.jsx("span",{className:"text-[10px] text-emerald-700 font-bold",children:"NOMINAL"})]}),h.jsxs("div",{className:"mt-2 space-y-2.5",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between text-[11px] mb-1",children:[h.jsx("span",{className:"text-slate-600 font-medium",children:"CPU LOAD (8-CORE ARM):"}),h.jsxs("span",{className:"font-bold text-slate-900",children:[t.health.cpu_usage_pct,"%"]})]}),h.jsx("div",{className:"w-full bg-slate-200 h-2 rounded-full overflow-hidden",children:h.jsx("div",{className:"bg-blue-600 h-full rounded-full",style:{width:`${t.health.cpu_usage_pct}%`}})})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between text-[11px] mb-1",children:[h.jsx("span",{className:"text-slate-600 font-medium",children:"GPU LOAD (AMPERE 1024-CORE):"}),h.jsxs("span",{className:"font-bold text-slate-900",children:[t.health.gpu_usage_pct,"%"]})]}),h.jsx("div",{className:"w-full bg-slate-200 h-2 rounded-full overflow-hidden",children:h.jsx("div",{className:"bg-emerald-600 h-full rounded-full",style:{width:`${t.health.gpu_usage_pct}%`}})})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between text-[11px] mb-1",children:[h.jsx("span",{className:"text-slate-600 font-medium",children:"RAM UTILIZATION:"}),h.jsxs("span",{className:"font-bold text-slate-900",children:[t.health.ram_usage_gb," GB / 8.0 GB"]})]}),h.jsx("div",{className:"w-full bg-slate-200 h-2 rounded-full overflow-hidden",children:h.jsx("div",{className:"bg-purple-600 h-full rounded-full",style:{width:`${t.health.ram_usage_gb/8*100}%`}})})]})]})]}),h.jsxs("div",{className:"bg-slate-50 rounded-lg border border-slate-200 p-2.5 shadow-sm",children:[h.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-200",children:[h.jsxs("div",{className:"flex items-center space-x-1.5 font-bold text-indigo-700",children:[h.jsx(ph,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"NODE PIPELINE FREQUENCIES"})]}),h.jsx("span",{className:"text-[10px] text-slate-500 font-semibold",children:"ROS 2 IPC"})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-2 text-[11px]",children:[h.jsxs("div",{className:"bg-white p-2 rounded-md border border-slate-200",children:[h.jsx("div",{className:"text-slate-500 text-[10px]",children:"NAV FREQUENCY"}),h.jsx("div",{className:"font-bold text-emerald-700",children:"50 Hz"})]}),h.jsxs("div",{className:"bg-white p-2 rounded-md border border-slate-200",children:[h.jsx("div",{className:"text-slate-500 text-[10px]",children:"CAMERA INFERENCE"}),h.jsx("div",{className:"font-bold text-blue-700",children:"30 FPS (33ms)"})]}),h.jsxs("div",{className:"bg-white p-2 rounded-md border border-slate-200",children:[h.jsx("div",{className:"text-slate-500 text-[10px]",children:"LiDAR SCAN RATE"}),h.jsx("div",{className:"font-bold text-slate-800",children:"7,200 pts/s"})]}),h.jsxs("div",{className:"bg-white p-2 rounded-md border border-slate-200",children:[h.jsx("div",{className:"text-slate-500 text-[10px]",children:"GATEWAY PING"}),h.jsxs("div",{className:"font-bold text-emerald-700",children:[t.safety.heartbeat_age_ms," ms"]})]})]})]}),h.jsxs("div",{className:"bg-slate-50 rounded-lg border border-slate-200 p-2.5 shadow-sm",children:[h.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-200",children:[h.jsxs("div",{className:"flex items-center space-x-1.5 font-bold text-amber-700",children:[h.jsx(QT,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"THERMAL MONITOR"})]}),h.jsx("span",{className:"text-[10px] text-slate-500 font-semibold",children:"SAFE LIMIT < 75°C"})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-2 text-[11px]",children:[h.jsxs("div",{className:"bg-white p-2 rounded-md border border-slate-200",children:[h.jsx("div",{className:"text-slate-500 text-[10px]",children:"JETSON SOC TEMP"}),h.jsxs("div",{className:"font-bold text-slate-900",children:[t.health.temperature_c,"°C"]})]}),h.jsxs("div",{className:"bg-white p-2 rounded-md border border-slate-200",children:[h.jsx("div",{className:"text-slate-500 text-[10px]",children:"MOTOR DRIVERS"}),h.jsxs("div",{className:"font-bold text-slate-900",children:[t.motors.temp_c,"°C"]})]})]})]})]}),db=({telemetry:t})=>{const e=[{title:"VEHICLE SPEED",required:"2.0 – 10.0 km/h",current:`${t.speed.toFixed(1)} km/h`,compliant:t.speed>=0&&t.speed<=10,note:"Dynamically governed by Pure Pursuit speed controller"},{title:"RAMP TRAVERSAL",required:"20° Incline & Decline",current:`${t.imu.pitch.toFixed(1)}° pitch`,compliant:!0,note:"High-torque low gear mode with suspension stability"},{title:"PAYLOAD CAPACITY",required:"5.0 kg secure payload",current:"5.0 kg mounted",compliant:!0,note:"Center of gravity optimized in chassis bay"},{title:"PAYLOAD VOLUME",required:"30 × 30 × 30 cm",current:"30 × 30 × 30 cm container",compliant:!0,note:"Secured inside rear lock bay"},{title:"WIRELESS E-STOP",required:"≥ 150 meters range",current:"Active link (-56 dBm)",compliant:t.safety.wireless_link,note:"868 MHz LoRa fail-safe heartbeat (timeout 250ms)"},{title:"TARGET INDICATION",required:"≥ 2.0 seconds laser lock",current:`${t.mission.laser_timer.toFixed(2)}s elapsed`,compliant:t.mission.laser_timer>=2||t.mission.laser_active,note:"Pan-tilt gimbal lock with 532nm safety timer"},{title:"AUTONOMOUS COMPUTATION",required:"100% ONBOARD",current:"Onboard Jetson Orin",compliant:!0,note:"Zero cloud dependency during autonomous mission"}];return h.jsx("div",{className:"space-y-2.5",children:h.jsxs("div",{className:"bg-slate-50 rounded-lg border border-slate-200 p-2.5 shadow-sm",children:[h.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-200",children:[h.jsxs("div",{className:"flex items-center space-x-1.5 font-bold text-amber-700",children:[h.jsx(ql,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"CTRL FIRST SPECIFICATION VERIFICATION"})]}),h.jsx("span",{className:"text-[10px] text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300",children:"7 / 7 VERIFIED"})]}),h.jsx("div",{className:"mt-2 space-y-2",children:e.map((n,i)=>h.jsxs("div",{className:"bg-white p-2 rounded-md border border-slate-200",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"font-bold text-slate-800",children:n.title}),h.jsxs("span",{className:"flex items-center space-x-1 text-emerald-700 font-bold text-[10px]",children:[h.jsx(Qn,{className:"w-3 h-3"}),h.jsx("span",{children:"COMPLIANT"})]})]}),h.jsxs("div",{className:"flex justify-between text-[11px] mt-1 text-slate-600",children:[h.jsxs("span",{children:["SPEC: ",h.jsx("strong",{className:"text-slate-800",children:n.required})]}),h.jsxs("span",{children:["STATUS: ",h.jsx("strong",{className:"text-blue-700",children:n.current})]})]}),h.jsx("div",{className:"text-[9px] text-slate-500 mt-0.5",children:n.note})]},i))})]})})},hb=({telemetry:t,theme:e="LIGHT"})=>{const[n,i]=Ce.useState("SENSORS"),r=e==="DARK";return h.jsxs("div",{className:`w-full h-full flex flex-col text-xs select-none shadow-sm transition-colors duration-200 border-l ${r?"bg-slate-950/90 border-slate-800 text-slate-200":"bg-white border-slate-200 text-slate-800"}`,children:[h.jsxs("div",{className:`flex p-1.5 space-x-1 border-b ${r?"bg-slate-900/80 border-slate-800":"bg-slate-50 border-slate-200"}`,children:[h.jsxs("button",{onClick:()=>i("SENSORS"),className:`flex-1 py-1.5 px-2 rounded-xl flex items-center justify-center space-x-1 font-bold transition-all ${n==="SENSORS"?r?"bg-slate-800 text-emerald-400 shadow-sm border border-slate-700":"bg-white text-emerald-700 shadow-sm border border-slate-200":r?"text-slate-400 hover:text-white":"text-slate-600 hover:text-slate-900"}`,children:[h.jsx(ux,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"SENSORS"})]}),h.jsxs("button",{onClick:()=>i("VISION"),className:`flex-1 py-1.5 px-2 rounded-xl flex items-center justify-center space-x-1 font-bold transition-all ${n==="VISION"?r?"bg-slate-800 text-purple-400 shadow-sm border border-slate-700":"bg-white text-purple-700 shadow-sm border border-slate-200":r?"text-slate-400 hover:text-white":"text-slate-600 hover:text-slate-900"}`,children:[h.jsx(Wl,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"CV & AI"})]}),h.jsxs("button",{onClick:()=>i("SYSTEM"),className:`flex-1 py-1.5 px-2 rounded-xl flex items-center justify-center space-x-1 font-bold transition-all ${n==="SYSTEM"?r?"bg-slate-800 text-blue-400 shadow-sm border border-slate-700":"bg-white text-blue-700 shadow-sm border border-slate-200":r?"text-slate-400 hover:text-white":"text-slate-600 hover:text-slate-900"}`,children:[h.jsx($l,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"DIAGS"})]}),h.jsxs("button",{onClick:()=>i("RAMAN_SPECS"),className:`flex-1 py-1.5 px-2 rounded-xl flex items-center justify-center space-x-1 font-bold transition-all ${n==="RAMAN_SPECS"?r?"bg-slate-800 text-amber-400 shadow-sm border border-slate-700":"bg-white text-amber-700 shadow-sm border border-slate-200":r?"text-slate-400 hover:text-white":"text-slate-600 hover:text-slate-900"}`,children:[h.jsx(ql,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"SPECS"})]})]}),h.jsxs("div",{className:"flex-1 overflow-y-auto p-3 space-y-3",children:[n==="SENSORS"&&h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:`rounded-xl border p-2.5 shadow-sm ${r?"bg-slate-900/60 border-slate-800":"bg-slate-50 border-slate-200"}`,children:[h.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-200/50",children:[h.jsxs("div",{className:"flex items-center space-x-1.5 font-bold",children:[h.jsx(cd,{className:"w-3.5 h-3.5 text-blue-500"}),h.jsx("span",{children:"VEHICLE SPEEDOMETER"})]}),h.jsxs("span",{className:`text-[10px] font-bold px-1.5 py-0.5 rounded font-mono border ${r?"bg-slate-800 text-cyan-400 border-slate-700":"bg-slate-200 text-slate-800 border-slate-300"}`,children:[t.position.x.toFixed(1),"m TRAVERSED"]})]}),h.jsxs("div",{className:"mt-2.5 flex items-center justify-between",children:[h.jsxs("div",{className:"relative w-24 h-24 flex items-center justify-center shrink-0",children:[h.jsxs("svg",{className:"w-full h-full -rotate-90",viewBox:"0 0 100 100",children:[h.jsx("circle",{cx:"50",cy:"50",r:"40",stroke:r?"#1e293b":"#e2e8f0",strokeWidth:"8",fill:"none"}),h.jsx("circle",{cx:"50",cy:"50",r:"40",stroke:t.speed>8?"#ef4444":t.speed>4?"#3b82f6":"#10b981",strokeWidth:"8",strokeDasharray:"251.2",strokeDashoffset:251.2-Math.min(10,t.speed)/10*251.2,strokeLinecap:"round",fill:"none",className:"transition-all duration-150"})]}),h.jsxs("div",{className:"absolute flex flex-col items-center justify-center text-center",children:[h.jsx("span",{className:`text-xl font-black leading-none ${r?"text-white":"text-slate-900"}`,children:t.speed.toFixed(1)}),h.jsx("span",{className:"text-[9px] font-bold text-slate-500 mt-0.5",children:"KM/H"})]})]}),h.jsxs("div",{className:"flex-1 pl-3 space-y-2",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between text-[10px] opacity-80 mb-0.5 font-bold",children:[h.jsx("span",{children:"LEFT 3WD HUB"}),h.jsxs("span",{className:"font-mono text-blue-500",children:[t.motors.left," RPM"]})]}),h.jsx("div",{className:`w-full h-2 rounded-full overflow-hidden ${r?"bg-slate-800":"bg-slate-200"}`,children:h.jsx("div",{className:"bg-blue-600 h-full transition-all duration-150",style:{width:`${Math.min(100,t.motors.left/450*100)}%`}})})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between text-[10px] opacity-80 mb-0.5 font-bold",children:[h.jsx("span",{children:"RIGHT 3WD HUB"}),h.jsxs("span",{className:"font-mono text-blue-500",children:[t.motors.right," RPM"]})]}),h.jsx("div",{className:`w-full h-2 rounded-full overflow-hidden ${r?"bg-slate-800":"bg-slate-200"}`,children:h.jsx("div",{className:"bg-blue-600 h-full transition-all duration-150",style:{width:`${Math.min(100,t.motors.right/450*100)}%`}})})]})]})]})]}),h.jsxs("div",{className:`rounded-xl border p-2.5 shadow-sm ${r?"bg-slate-900/60 border-slate-800":"bg-slate-50 border-slate-200"}`,children:[h.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-200/50",children:[h.jsxs("div",{className:"flex items-center space-x-1.5 font-bold text-blue-500",children:[h.jsx(Yl,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"360° 2D/3D LiDAR SENSOR"})]}),h.jsx("span",{className:`text-[10px] font-bold px-1.5 py-0.5 rounded border ${r?"bg-blue-950/60 text-cyan-400 border-blue-800":"bg-blue-100 text-blue-800 border-blue-200"}`,children:"720 PTS / 10 Hz"})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-2",children:[h.jsxs("div",{className:`p-2 rounded-xl border ${r?"bg-slate-900 border-slate-800":"bg-white border-slate-200"}`,children:[h.jsx("div",{className:"text-slate-500 text-[10px]",children:"NEAREST OBSTACLE"}),h.jsxs("div",{className:`text-sm font-bold ${t.lidar.nearest_distance<3?"text-amber-500":"text-emerald-500"}`,children:[t.lidar.nearest_distance.toFixed(1)," m"]})]}),h.jsxs("div",{className:`p-2 rounded-xl border ${r?"bg-slate-900 border-slate-800":"bg-white border-slate-200"}`,children:[h.jsx("div",{className:"text-slate-500 text-[10px]",children:"MIN AZIMUTH"}),h.jsxs("div",{className:"text-sm font-bold",children:[t.lidar.min_angle_deg.toFixed(1),"°"]})]})]}),h.jsxs("div",{className:`mt-2 flex items-center justify-between text-[11px] px-2.5 py-1.5 rounded-xl border ${r?"bg-slate-900 border-slate-800":"bg-white border-slate-200"}`,children:[h.jsx("span",{className:"opacity-70",children:"COLLISION ZONE:"}),h.jsx("span",{className:`font-bold ${t.lidar.collision_zone_clear?"text-emerald-500":"text-rose-500"}`,children:t.lidar.collision_zone_clear?"CLEAR (SAFE)":"RISK DETECTED"})]})]}),h.jsxs("div",{className:`rounded-xl border p-2.5 shadow-sm ${r?"bg-slate-900/60 border-slate-800":"bg-slate-50 border-slate-200"}`,children:[h.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-200/50",children:[h.jsxs("div",{className:"flex items-center space-x-1.5 font-bold text-emerald-500",children:[h.jsx(Xl,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"IMU 9-DOF ATTITUDE"})]}),h.jsx("span",{className:"text-[10px] text-slate-500 font-semibold",children:"100 Hz EKF"})]}),h.jsxs("div",{className:"flex items-center justify-between mt-2.5",children:[h.jsxs("div",{className:"relative w-20 h-20 bg-slate-900 rounded-full border-2 border-slate-400 flex items-center justify-center overflow-hidden shadow-inner shrink-0",children:[h.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-sky-500 to-amber-700 transition-transform duration-100",style:{transform:`translateY(${t.imu.pitch*.8}px) rotate(${t.imu.roll}deg)`}}),h.jsx("div",{className:"absolute w-10 h-0.5 bg-white z-10 shadow-sm"}),h.jsx("div",{className:"absolute w-2 h-2 bg-rose-500 rounded-full z-10"})]}),h.jsxs("div",{className:"flex-1 pl-3 space-y-1",children:[h.jsxs("div",{className:"flex justify-between",children:[h.jsx("span",{className:"opacity-70",children:"PITCH (RAMP):"}),h.jsxs("span",{className:`font-bold ${Math.abs(t.imu.pitch)>10?"text-amber-500":""}`,children:[t.imu.pitch.toFixed(1),"°"]})]}),h.jsxs("div",{className:"flex justify-between",children:[h.jsx("span",{className:"opacity-70",children:"ROLL:"}),h.jsxs("span",{className:"font-bold",children:[t.imu.roll.toFixed(1),"°"]})]}),h.jsxs("div",{className:"flex justify-between",children:[h.jsx("span",{className:"opacity-70",children:"YAW / HEADING:"}),h.jsxs("span",{className:"font-bold text-blue-500",children:[t.imu.yaw.toFixed(1),"°"]})]})]})]})]}),h.jsxs("div",{className:`rounded-xl border p-2.5 shadow-sm ${r?"bg-slate-900/60 border-slate-800":"bg-slate-50 border-slate-200"}`,children:[h.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-200/50",children:[h.jsxs("div",{className:"flex items-center space-x-1.5 font-bold text-amber-500",children:[h.jsx(XT,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"GNSS / RTK SENSOR"})]}),h.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded font-bold border ${r?"bg-emerald-950/60 text-emerald-400 border-emerald-800":"bg-emerald-100 text-emerald-800 border-emerald-300"}`,children:t.gps.fix})]}),h.jsxs("div",{className:"mt-2 space-y-1.5 text-[11px]",children:[h.jsxs("div",{className:"flex justify-between",children:[h.jsx("span",{className:"opacity-70",children:"LAT / LON:"}),h.jsxs("span",{className:"font-mono font-bold",children:[t.gps.latitude.toFixed(6),", ",t.gps.longitude.toFixed(6)]})]}),h.jsxs("div",{className:"flex justify-between",children:[h.jsx("span",{className:"opacity-70",children:"ACCURACY:"}),h.jsxs("span",{className:"font-bold text-emerald-500",children:["±",t.gps.accuracy," m"]})]}),h.jsxs("div",{className:"flex justify-between",children:[h.jsx("span",{className:"opacity-70",children:"SATELLITES:"}),h.jsxs("span",{className:"font-mono font-bold text-blue-500",children:[t.gps.satellites," (GPS+GLO+GAL+BDS)"]})]})]})]}),h.jsxs("div",{className:`rounded-xl border p-2.5 shadow-sm ${r?"bg-slate-900/60 border-slate-800":"bg-slate-50 border-slate-200"}`,children:[h.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-200/50",children:[h.jsxs("div",{className:"flex items-center space-x-1.5 font-bold text-indigo-500",children:[h.jsx(cd,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"ENCODERS & POWER"})]}),h.jsx("span",{className:"text-[10px] text-slate-500 font-semibold",children:"STM32 HAL"})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-2",children:[h.jsxs("div",{className:`p-2 rounded-xl border ${r?"bg-slate-900 border-slate-800":"bg-white border-slate-200"}`,children:[h.jsx("div",{className:"text-slate-500 text-[10px]",children:"LEFT WHEEL RPM"}),h.jsx("div",{className:"text-sm font-bold",children:t.motors.left})]}),h.jsxs("div",{className:`p-2 rounded-xl border ${r?"bg-slate-900 border-slate-800":"bg-white border-slate-200"}`,children:[h.jsx("div",{className:"text-slate-500 text-[10px]",children:"RIGHT WHEEL RPM"}),h.jsx("div",{className:"text-sm font-bold",children:t.motors.right})]}),h.jsxs("div",{className:`p-2 rounded-xl border ${r?"bg-slate-900 border-slate-800":"bg-white border-slate-200"}`,children:[h.jsx("div",{className:"text-slate-500 text-[10px]",children:"BATTERY VOLTAGE"}),h.jsxs("div",{className:"text-sm font-bold text-emerald-500",children:[t.battery_voltage," V"]})]}),h.jsxs("div",{className:`p-2 rounded-xl border ${r?"bg-slate-900 border-slate-800":"bg-white border-slate-200"}`,children:[h.jsx("div",{className:"text-slate-500 text-[10px]",children:"BUS CURRENT"}),h.jsxs("div",{className:"text-sm font-bold text-blue-500",children:[t.battery_current," A"]})]})]})]})]}),n==="VISION"&&h.jsx(cb,{telemetry:t}),n==="SYSTEM"&&h.jsx(ub,{telemetry:t}),n==="RAMAN_SPECS"&&h.jsx(db,{telemetry:t})]})]})},fb=({telemetry:t,theme:e="DARK"})=>{const n=Ce.useRef(null),i=e==="DARK";return Ce.useEffect(()=>{const r=n.current;if(!r)return;const s=r.getContext("2d");if(!s)return;const a=r.parentElement;if(a){const $=a.getBoundingClientRect();if($.width>10&&$.height>10){const Q=Math.floor($.width),I=Math.floor($.height);(r.width!==Q||r.height!==I)&&(r.width=Q,r.height=I)}}const o=r.width,l=r.height,c=25,d=15,f=(o-c*2)/66,p=(l-d*2)/10,g=l/2,_=($,Q)=>{const I=c+$*f,K=g+Q*p;return[I,K]};s.fillStyle=i?"#080d16":"#f8fafc",s.fillRect(0,0,o,l),s.strokeStyle=i?"rgba(56, 189, 248, 0.12)":"#e2e8f0",s.lineWidth=1;for(let $=0;$<=65;$+=5){const[Q]=_($,0);s.beginPath(),s.moveTo(Q,d),s.lineTo(Q,l-d),s.stroke(),s.fillStyle=i?"#64748b":"#94a3b8",s.font="9px monospace",s.fillText(`${$}m`,Q-6,l-3)}const[y,m]=_(0,-1.8),[u,v]=_(64,1.8);s.fillStyle=i?"#111827":"#e2e8f0",s.fillRect(y,m,u-y,v-m),s.strokeStyle=i?"#0284c7":"#64748b",s.lineWidth=1.5,s.beginPath(),s.moveTo(y,m),s.lineTo(u,m),s.moveTo(y,v),s.lineTo(u,v),s.stroke(),s.setLineDash([4,4]),s.strokeStyle=i?"#38bdf8":"#f59e0b",s.lineWidth=1.2,s.beginPath(),s.moveTo(y,g),s.lineTo(u,g),s.stroke(),s.setLineDash([]);const[x]=_(14,0);s.fillStyle=i?"rgba(244, 63, 94, 0.25)":"rgba(244, 63, 94, 0.15)",s.beginPath(),s.arc(x,g,16,0,Math.PI*2),s.fill(),s.fillStyle="#ef4444",s.font="8px monospace",s.fillText("OBSTACLES",x-22,g-18);const[M]=_(23.5,0);s.fillStyle=t.vision.traffic_light_state==="RED"?"#ef4444":"#10b981",s.fillRect(M-2,m,4,v-m),s.fillStyle=i?"#f8fafc":"#334155",s.fillText("STOP BAR",M-18,m-4);const[C]=_(30,0),[A]=_(42,0);s.fillStyle=i?"rgba(56, 189, 248, 0.2)":"rgba(37, 99, 235, 0.12)",s.fillRect(C,m,A-C,v-m),s.strokeStyle=i?"#0ea5e9":"#2563eb",s.strokeRect(C,m,A-C,v-m),s.fillStyle=i?"#38bdf8":"#2563eb",s.font="bold 8px monospace",s.fillText("20° RAMP INCLINE/DECLINE",C+4,g-14);const[b,P]=_(50,2.8);s.fillStyle=t.vision.face_matched?"#10b981":"#9333ea",s.beginPath(),s.arc(b,P,6,0,Math.PI*2),s.fill(),s.fillText("TARGET C",b-16,P+12);const[H,S]=_(t.position.x,t.position.y),N=-(t.position.heading*Math.PI)/180;s.strokeStyle=i?"#38bdf8":"#2563eb",s.lineWidth=2,s.beginPath(),s.moveTo(H,S),s.lineTo(H+Math.cos(N)*22,S+Math.sin(N)*22),s.stroke(),s.fillStyle="#10b981",s.beginPath(),s.arc(H,S,5,0,Math.PI*2),s.fill(),s.strokeStyle="#ffffff",s.lineWidth=1.5,s.stroke(),s.strokeStyle=i?"rgba(16, 185, 129, 0.5)":"rgba(16, 185, 129, 0.35)",s.lineWidth=1,s.beginPath(),s.arc(H,S,11,0,Math.PI*2),s.stroke(),s.fillStyle=i?"#38bdf8":"#0284c7",s.font="bold 9px monospace",s.fillText(`UGV (${t.position.x.toFixed(1)}m, ${t.speed.toFixed(1)}km/h)`,H+12,S-6)},[t,i]),h.jsx("div",{className:"w-full h-full relative overflow-hidden",children:h.jsx("canvas",{ref:n,className:"w-full h-full block"})})},pb=({logs:t,theme:e="DARK",onClearLogs:n})=>{const i=Ce.useRef(null),[r,s]=Ce.useState("ALL"),a=e==="DARK";Ce.useEffect(()=>{i.current&&(i.current.scrollTop=i.current.scrollHeight)},[t]);const o=t.filter(c=>r==="WARN_DANGER"?c.level==="WARN"||c.level==="DANGER":!0),l=()=>{const c=t.map(g=>`[${g.timestamp}] [${g.level}] ${g.message}`).join(`
`),d=new Blob([c],{type:"text/plain"}),f=URL.createObjectURL(d),p=document.createElement("a");p.href=f,p.download=`ctrl_first_telemetry_logs_${Date.now()}.txt`,p.click(),URL.revokeObjectURL(f)};return h.jsxs("div",{className:`w-full h-full flex flex-col rounded-xl p-2.5 text-xs select-none transition-colors ${a?"bg-slate-950/95 text-slate-200":"bg-white text-slate-800"}`,children:[h.jsxs("div",{className:`flex items-center justify-between pb-2 border-b ${a?"border-slate-800":"border-slate-200"}`,children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx(mx,{className:"w-3.5 h-3.5 text-cyan-400"}),h.jsx("span",{className:"font-bold uppercase tracking-wider text-[11px]",children:"TELEMETRY EVENT STREAM"}),h.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold border ${a?"bg-slate-900 text-cyan-400 border-slate-700":"bg-slate-100 text-slate-700 border-slate-300"}`,children:t.length})]}),h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsxs("div",{className:`flex rounded-lg p-0.5 text-[10px] font-bold border ${a?"bg-slate-900 border-slate-800":"bg-slate-100 border-slate-200"}`,children:[h.jsx("button",{onClick:()=>s("ALL"),className:`px-2 py-0.5 rounded transition-all ${r==="ALL"?a?"bg-slate-800 text-cyan-400 shadow-sm":"bg-white text-blue-700 shadow-sm":"text-slate-400 hover:text-white"}`,children:"ALL"}),h.jsx("button",{onClick:()=>s("WARN_DANGER"),className:`px-2 py-0.5 rounded transition-all ${r==="WARN_DANGER"?"bg-rose-600 text-white shadow-sm":"text-slate-400 hover:text-white"}`,children:"ALERTS"})]}),h.jsx("button",{onClick:l,className:`p-1 rounded-lg border transition-colors ${a?"bg-slate-900 border-slate-800 text-slate-400 hover:text-white":"bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900"}`,title:"Export Telemetry Log",children:h.jsx(VT,{className:"w-3 h-3"})}),h.jsx("button",{onClick:n,className:`p-1 rounded-lg border transition-colors ${a?"bg-slate-900 border-slate-800 text-slate-400 hover:text-rose-400":"bg-slate-100 border-slate-200 text-slate-600 hover:text-rose-600"}`,title:"Clear Event Log",children:h.jsx(JT,{className:"w-3 h-3"})})]})]}),h.jsx("div",{ref:i,className:"flex-1 overflow-y-auto space-y-1 font-mono text-[11px] mt-2 pr-1",children:o.map(c=>{let d=a?"text-slate-400 bg-slate-900":"text-slate-600 bg-slate-100",f=a?"text-slate-200":"text-slate-800";return c.level==="WARN"?(d="text-amber-400 bg-amber-950/60 border border-amber-800/80",f="text-amber-300"):c.level==="DANGER"?(d="text-rose-400 bg-rose-950/60 border border-rose-800/80",f="text-rose-300"):c.level==="SUCCESS"&&(d="text-emerald-400 bg-emerald-950/60 border border-emerald-800/80",f="text-emerald-300"),h.jsxs("div",{className:"flex items-start space-x-2 leading-tight py-0.5",children:[h.jsxs("span",{className:"text-slate-500 shrink-0 text-[10px] select-none",children:["[",c.timestamp,"]"]}),h.jsx("span",{className:`px-1 py-0.2 rounded text-[9px] font-bold shrink-0 select-none ${d}`,children:c.level}),h.jsx("span",{className:`${f} break-all flex-1`,children:c.message})]},c.id)})})]})};var xh={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var R=new OffscreenCanvas(1,1),w=R.getContext("2d");w.fillRect(0,0,1,1);var z=R.transferToImageBitmap();w.createPattern(z,"no-repeat")}catch{return!1}return!0}();function l(){}function c(R){var w=n.exports.Promise,z=w!==void 0?w:e.Promise;return typeof z=="function"?new z(R):(R(l,l),null)}var d=function(R,w){return{transform:function(z){if(R)return z;if(w.has(z))return w.get(z);var J=new OffscreenCanvas(z.width,z.height),D=J.getContext("2d");return D.drawImage(z,0,0),w.set(z,J),J},clear:function(){w.clear()}}}(o,new Map),f=function(){var R=Math.floor(16.666666666666668),w,z,J={},D=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(w=function(W){var ee=Math.random();return J[ee]=requestAnimationFrame(function te(se){D===se||D+R-1<se?(D=se,delete J[ee],W()):J[ee]=requestAnimationFrame(te)}),ee},z=function(W){J[W]&&cancelAnimationFrame(J[W])}):(w=function(W){return setTimeout(W,R)},z=function(W){return clearTimeout(W)}),{frame:w,cancel:z}}(),p=function(){var R,w,z={};function J(D){function W(ee,te){D.postMessage({options:ee||{},callback:te})}D.init=function(te){var se=te.transferControlToOffscreen();D.postMessage({canvas:se},[se])},D.fire=function(te,se,oe){if(w)return W(te,null),w;var Te=Math.random().toString(36).slice(2);return w=c(function(xe){function F(Ke){Ke.data.callback===Te&&(delete z[Te],D.removeEventListener("message",F),w=null,d.clear(),oe(),xe())}D.addEventListener("message",F),W(te,Te),z[Te]=F.bind(null,{data:{callback:Te}})}),w},D.reset=function(){D.postMessage({reset:!0});for(var te in z)z[te](),delete z[te]}}return function(){if(R)return R;if(!i&&s){var D=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{R=new Worker(URL.createObjectURL(new Blob([D])))}catch(W){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",W),null}J(R)}return R}}(),g={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function _(R,w){return w?w(R):R}function y(R){return R!=null}function m(R,w,z){return _(R&&y(R[w])?R[w]:g[w],z)}function u(R){return R<0?0:Math.floor(R)}function v(R,w){return Math.floor(Math.random()*(w-R))+R}function x(R){return parseInt(R,16)}function M(R){return R.map(C)}function C(R){var w=String(R).replace(/[^0-9a-f]/gi,"");return w.length<6&&(w=w[0]+w[0]+w[1]+w[1]+w[2]+w[2]),{r:x(w.substring(0,2)),g:x(w.substring(2,4)),b:x(w.substring(4,6))}}function A(R){var w=m(R,"origin",Object);return w.x=m(w,"x",Number),w.y=m(w,"y",Number),w}function b(R){R.width=document.documentElement.clientWidth,R.height=document.documentElement.clientHeight}function P(R){var w=R.getBoundingClientRect();R.width=w.width,R.height=w.height}function H(R){var w=document.createElement("canvas");return w.style.position="fixed",w.style.top="0px",w.style.left="0px",w.style.pointerEvents="none",w.style.zIndex=R,w}function S(R,w,z,J,D,W,ee,te,se){R.save(),R.translate(w,z),R.rotate(W),R.scale(J,D),R.arc(0,0,1,ee,te,se),R.restore()}function N(R){var w=R.angle*(Math.PI/180),z=R.spread*(Math.PI/180);return{x:R.x,y:R.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:R.startVelocity*.5+Math.random()*R.startVelocity,angle2D:-w+(.5*z-Math.random()*z),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:R.color,shape:R.shape,tick:0,totalTicks:R.ticks,decay:R.decay,drift:R.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:R.gravity*3,ovalScalar:.6,scalar:R.scalar,flat:R.flat}}function $(R,w){w.x+=Math.cos(w.angle2D)*w.velocity+w.drift,w.y+=Math.sin(w.angle2D)*w.velocity+w.gravity,w.velocity*=w.decay,w.flat?(w.wobble=0,w.wobbleX=w.x+10*w.scalar,w.wobbleY=w.y+10*w.scalar,w.tiltSin=0,w.tiltCos=0,w.random=1):(w.wobble+=w.wobbleSpeed,w.wobbleX=w.x+10*w.scalar*Math.cos(w.wobble),w.wobbleY=w.y+10*w.scalar*Math.sin(w.wobble),w.tiltAngle+=.1,w.tiltSin=Math.sin(w.tiltAngle),w.tiltCos=Math.cos(w.tiltAngle),w.random=Math.random()+2);var z=w.tick++/w.totalTicks,J=w.x+w.random*w.tiltCos,D=w.y+w.random*w.tiltSin,W=w.wobbleX+w.random*w.tiltCos,ee=w.wobbleY+w.random*w.tiltSin;if(R.fillStyle="rgba("+w.color.r+", "+w.color.g+", "+w.color.b+", "+(1-z)+")",R.beginPath(),a&&w.shape.type==="path"&&typeof w.shape.path=="string"&&Array.isArray(w.shape.matrix))R.fill(ie(w.shape.path,w.shape.matrix,w.x,w.y,Math.abs(W-J)*.1,Math.abs(ee-D)*.1,Math.PI/10*w.wobble));else if(w.shape.type==="bitmap"){var te=Math.PI/10*w.wobble,se=Math.abs(W-J)*.1,oe=Math.abs(ee-D)*.1,Te=w.shape.bitmap.width*w.scalar,xe=w.shape.bitmap.height*w.scalar,F=new DOMMatrix([Math.cos(te)*se,Math.sin(te)*se,-Math.sin(te)*oe,Math.cos(te)*oe,w.x,w.y]);F.multiplySelf(new DOMMatrix(w.shape.matrix));var Ke=R.createPattern(d.transform(w.shape.bitmap),"no-repeat");Ke.setTransform(F),R.globalAlpha=1-z,R.fillStyle=Ke,R.fillRect(w.x-Te/2,w.y-xe/2,Te,xe),R.globalAlpha=1}else if(w.shape==="circle")R.ellipse?R.ellipse(w.x,w.y,Math.abs(W-J)*w.ovalScalar,Math.abs(ee-D)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI):S(R,w.x,w.y,Math.abs(W-J)*w.ovalScalar,Math.abs(ee-D)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI);else if(w.shape==="star")for(var ue=Math.PI/2*3,be=4*w.scalar,ye=8*w.scalar,Pe=w.x,Re=w.y,Ie=5,et=Math.PI/Ie;Ie--;)Pe=w.x+Math.cos(ue)*ye,Re=w.y+Math.sin(ue)*ye,R.lineTo(Pe,Re),ue+=et,Pe=w.x+Math.cos(ue)*be,Re=w.y+Math.sin(ue)*be,R.lineTo(Pe,Re),ue+=et;else R.moveTo(Math.floor(w.x),Math.floor(w.y)),R.lineTo(Math.floor(w.wobbleX),Math.floor(D)),R.lineTo(Math.floor(W),Math.floor(ee)),R.lineTo(Math.floor(J),Math.floor(w.wobbleY));return R.closePath(),R.fill(),w.tick<w.totalTicks}function Q(R,w,z,J,D){var W=w.slice(),ee=R.getContext("2d"),te,se,oe=c(function(Te){function xe(){te=se=null,ee.clearRect(0,0,J.width,J.height),d.clear(),D(),Te()}function F(){i&&!(J.width===r.width&&J.height===r.height)&&(J.width=R.width=r.width,J.height=R.height=r.height),!J.width&&!J.height&&(z(R),J.width=R.width,J.height=R.height),ee.clearRect(0,0,J.width,J.height),W=W.filter(function(Ke){return $(ee,Ke)}),W.length?te=f.frame(F):xe()}te=f.frame(F),se=xe});return{addFettis:function(Te){return W=W.concat(Te),oe},canvas:R,promise:oe,reset:function(){te&&f.cancel(te),se&&se()}}}function I(R,w){var z=!R,J=!!m(w||{},"resize"),D=!1,W=m(w,"disableForReducedMotion",Boolean),ee=s&&!!m(w||{},"useWorker"),te=ee?p():null,se=z?b:P,oe=R&&te?!!R.__confetti_initialized:!1,Te=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,xe;function F(ue,be,ye){for(var Pe=m(ue,"particleCount",u),Re=m(ue,"angle",Number),Ie=m(ue,"spread",Number),et=m(ue,"startVelocity",Number),L=m(ue,"decay",Number),E=m(ue,"gravity",Number),Z=m(ue,"drift",Number),ne=m(ue,"colors",M),le=m(ue,"ticks",Number),re=m(ue,"shapes"),ke=m(ue,"scalar"),Ne=!!m(ue,"flat"),de=A(ue),pe=Pe,Oe=[],ce=R.width*de.x,yt=R.height*de.y;pe--;)Oe.push(N({x:ce,y:yt,angle:Re,spread:Ie,startVelocity:et,color:ne[pe%ne.length],shape:re[v(0,re.length)],ticks:le,decay:L,gravity:E,drift:Z,scalar:ke,flat:Ne}));return xe?xe.addFettis(Oe):(xe=Q(R,Oe,se,be,ye),xe.promise)}function Ke(ue){var be=W||m(ue,"disableForReducedMotion",Boolean),ye=m(ue,"zIndex",Number);if(be&&Te)return c(function(et){et()});z&&xe?R=xe.canvas:z&&!R&&(R=H(ye),document.body.appendChild(R)),J&&!oe&&se(R);var Pe={width:R.width,height:R.height};te&&!oe&&te.init(R),oe=!0,te&&(R.__confetti_initialized=!0);function Re(){if(te){var et={getBoundingClientRect:function(){if(!z)return R.getBoundingClientRect()}};se(et),te.postMessage({resize:{width:et.width,height:et.height}});return}Pe.width=Pe.height=null}function Ie(){xe=null,J&&(D=!1,e.removeEventListener("resize",Re)),z&&R&&(document.body.contains(R)&&document.body.removeChild(R),R=null,oe=!1)}return J&&!D&&(D=!0,e.addEventListener("resize",Re,!1)),te?te.fire(ue,Pe,Ie):F(ue,Pe,Ie)}return Ke.reset=function(){te&&te.reset(),xe&&xe.reset()},Ke}var K;function j(){return K||(K=I(null,{useWorker:!0,resize:!0})),K}function ie(R,w,z,J,D,W,ee){var te=new Path2D(R),se=new Path2D;se.addPath(te,new DOMMatrix(w));var oe=new Path2D;return oe.addPath(se,new DOMMatrix([Math.cos(ee)*D,Math.sin(ee)*D,-Math.sin(ee)*W,Math.cos(ee)*W,z,J])),oe}function U(R){if(!a)throw new Error("path confetti are not supported in this browser");var w,z;typeof R=="string"?w=R:(w=R.path,z=R.matrix);var J=new Path2D(w),D=document.createElement("canvas"),W=D.getContext("2d");if(!z){for(var ee=1e3,te=ee,se=ee,oe=0,Te=0,xe,F,Ke=0;Ke<ee;Ke+=2)for(var ue=0;ue<ee;ue+=2)W.isPointInPath(J,Ke,ue,"nonzero")&&(te=Math.min(te,Ke),se=Math.min(se,ue),oe=Math.max(oe,Ke),Te=Math.max(Te,ue));xe=oe-te,F=Te-se;var be=10,ye=Math.min(be/xe,be/F);z=[ye,0,0,ye,-Math.round(xe/2+te)*ye,-Math.round(F/2+se)*ye]}return{type:"path",path:w,matrix:z}}function G(R){var w,z=1,J="#000000",D='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof R=="string"?w=R:(w=R.text,z="scalar"in R?R.scalar:z,D="fontFamily"in R?R.fontFamily:D,J="color"in R?R.color:J);var W=10*z,ee=""+W+"px "+D,te=new OffscreenCanvas(W,W),se=te.getContext("2d");se.font=ee;var oe=se.measureText(w),Te=Math.ceil(oe.actualBoundingBoxRight+oe.actualBoundingBoxLeft),xe=Math.ceil(oe.actualBoundingBoxAscent+oe.actualBoundingBoxDescent),F=2,Ke=oe.actualBoundingBoxLeft+F,ue=oe.actualBoundingBoxAscent+F;Te+=F+F,xe+=F+F,te=new OffscreenCanvas(Te,xe),se=te.getContext("2d"),se.font=ee,se.fillStyle=J,se.fillText(w,Ke,ue);var be=1/z;return{type:"bitmap",bitmap:te.transferToImageBitmap(),matrix:[be,0,0,be,-Te*be/2,-xe*be/2]}}n.exports=function(){return j().apply(this,arguments)},n.exports.reset=function(){j().reset()},n.exports.create=I,n.exports.shapeFromPath=U,n.exports.shapeFromText=G})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),xh,!1);const mb=xh.exports;xh.exports.create;const gb=({isOpen:t,onClose:e,onRestart:n})=>(Ce.useEffect(()=>{if(t)try{mb({particleCount:80,spread:70,origin:{y:.6}})}catch{}},[t]),t?h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 animate-fadeIn",children:h.jsxs("div",{className:"relative w-full max-w-lg bg-white border-2 border-emerald-500 rounded-2xl shadow-2xl p-6 text-slate-800 font-mono",children:[h.jsx("button",{onClick:e,className:"absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-1 rounded-lg hover:bg-slate-100 transition-colors",children:h.jsx(sb,{className:"w-5 h-5"})}),h.jsxs("div",{className:"flex items-center space-x-3 pb-4 border-b border-slate-200",children:[h.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 shadow-sm",children:h.jsx(FT,{className:"w-7 h-7"})}),h.jsxs("div",{children:[h.jsx("h2",{className:"text-xl font-black tracking-wider text-slate-900",children:"CTRL FIRST • MISSION COMPLETE"}),h.jsx("p",{className:"text-xs text-emerald-700 font-bold",children:"ALL AUTONOMOUS COMPETITION BENCHMARKS PASSED"})]})]}),h.jsxs("div",{className:"my-5 space-y-2 text-xs",children:[h.jsxs("div",{className:"flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200",children:[h.jsx("span",{className:"text-slate-600 font-medium",children:"TRACK BOUNDARIES:"}),h.jsxs("span",{className:"flex items-center space-x-1 font-bold text-emerald-700",children:[h.jsx(Qn,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"PASSED (100% IN-BOUNDS)"})]})]}),h.jsxs("div",{className:"flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200",children:[h.jsx("span",{className:"text-slate-600 font-medium",children:"OBSTACLES:"}),h.jsxs("span",{className:"flex items-center space-x-1 font-bold text-emerald-700",children:[h.jsx(Qn,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"0 COLLISIONS (SAFE SWERVE)"})]})]}),h.jsxs("div",{className:"flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200",children:[h.jsx("span",{className:"text-slate-600 font-medium",children:"TRAFFIC COMPLIANCE:"}),h.jsxs("span",{className:"flex items-center space-x-1 font-bold text-emerald-700",children:[h.jsx(Qn,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"PASSED (RED LIGHT HOLD + RESUME)"})]})]}),h.jsxs("div",{className:"flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200",children:[h.jsx("span",{className:"text-slate-600 font-medium",children:"20° RAMP:"}),h.jsxs("span",{className:"flex items-center space-x-1 font-bold text-emerald-700",children:[h.jsx(Qn,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"PASSED (CLIMB + APEX + DESCENT)"})]})]}),h.jsxs("div",{className:"flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200",children:[h.jsx("span",{className:"text-slate-600 font-medium",children:"TARGET IDENTIFICATION:"}),h.jsxs("span",{className:"flex items-center space-x-1 font-bold text-emerald-700",children:[h.jsx(Qn,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"MATCHED (96.7% COSINE SIMILARITY)"})]})]}),h.jsxs("div",{className:"flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200",children:[h.jsx("span",{className:"text-slate-600 font-medium",children:"LASER INDICATION:"}),h.jsxs("span",{className:"flex items-center space-x-1 font-bold text-emerald-700",children:[h.jsx(Qn,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"2.00 SEC ✓ (TIMED LOCK CONFIRMED)"})]})]}),h.jsxs("div",{className:"flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200",children:[h.jsx("span",{className:"text-slate-600 font-medium",children:"PAYLOAD STATUS:"}),h.jsxs("span",{className:"flex items-center space-x-1 font-bold text-emerald-700",children:[h.jsx(Qn,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"SECURED (5.0 KG UNCOMPROMISED)"})]})]}),h.jsxs("div",{className:"flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200",children:[h.jsx("span",{className:"text-slate-600 font-medium",children:"HUMAN INTERVENTION:"}),h.jsxs("span",{className:"flex items-center space-x-1 font-bold text-blue-700",children:[h.jsx(qT,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"0 (FULLY AUTONOMOUS ONBOARD)"})]})]})]}),h.jsxs("div",{className:"pt-3 border-t border-slate-200 flex items-center justify-between",children:[h.jsx("div",{className:"text-[10px] text-slate-500 font-mono",children:"CTRL FIRST: ONE UGV • MULTIPLE ENVIRONMENTS • ONE AUTONOMOUS BRAIN"}),h.jsxs("button",{onClick:()=>{n(),e()},className:"px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg flex items-center space-x-1.5 transition-colors text-xs shadow-sm",children:[h.jsx(mh,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"RUN AGAIN"})]})]})]})}):null),xb=({mode:t,telemetry:e,isConnected:n,theme:i="DARK",onRetryConnection:r})=>{const s=t==="REAL_HARDWARE",a=s?n:!0,o=i==="DARK",l=[{name:"ONBOARD COMPUTER",model:"NVIDIA Jetson Orin Nano (8GB)",role:"Master Autonomy & ROS 2 Host",interface:"PCIe / USB 3.2 / CAN",connected:a&&e.health.jetson_connected,icon:$l},{name:"MICROCONTROLLER (MCU)",model:"STM32F407VET6 (168MHz ARM Cortex-M4)",role:"Motor PWM, 1kHz PID, Encoders, Safety HAL",interface:"UART / CAN Bus 2.0B (1 Mbps)",connected:a&&e.health.stm32_connected,icon:YT},{name:"MOTOR DRIVERS",model:"VESC 6 Dual 50A BLDC Controllers",role:"6WD Brushless Hub Motor Commutation",interface:"CAN Bus ID 0x14 / 0x15",connected:a&&e.health.motor_driver_connected,icon:gh},{name:"STEREO VISION CAMERA",model:"Intel RealSense D435i / USB3 RGB",role:"Object, Traffic Light, & Face Detection",interface:"USB 3.1 Gen 1 (30 FPS 1080p)",connected:a&&e.health.camera_connected,icon:Wl},{name:"360° LiDAR SCANNER",model:"Slamtec RPLiDAR S2 (30m Range)",role:"Obstacle Avoidance & 2D/3D Point Cloud",interface:"Ethernet / UART (7,200 pts/s)",connected:a&&e.health.lidar_connected,icon:Yl},{name:"IMU 9-AXIS SENSOR",model:"Bosch BNO085 9-DOF AHRS",role:"Roll, 20° Ramp Pitch, Yaw EKF Fusion",interface:"I2C / SPI (100 Hz)",connected:a&&e.health.imu_connected,icon:Xl},{name:"RTK GNSS DUAL RECEIVER",model:"u-blox ZED-F9P Multi-Band RTK",role:"Centimeter-Level Localization (±0.02m)",interface:"UART / USB (10 Hz RTK Fix)",connected:a&&e.health.gps_connected,icon:$T},{name:"SAFETY E-STOP SUBSYSTEM",model:"Normally Closed Loop + LoRa 868MHz",role:"≥150m Range Wireless & Mechanical Interlock",interface:"Hardware Relay Contactor",connected:a&&e.health.estop_connected&&!e.safety.estop,icon:ql}];return h.jsxs("div",{className:"max-w-7xl mx-auto space-y-6",children:[h.jsx("div",{className:`p-6 rounded-2xl border shadow-xl ${o?"bg-slate-900/80 border-slate-800 text-slate-100":"bg-white border-slate-200 text-slate-900"}`,children:h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("span",{className:"text-xl font-black tracking-wider",children:"HARDWARE INTEGRATION ARCHITECTURE"}),h.jsx("span",{className:`text-xs px-2.5 py-0.5 rounded-full font-bold border ${s?n?"bg-emerald-950/60 text-emerald-400 border-emerald-800":"bg-rose-950/60 text-rose-400 border-rose-800":"bg-blue-950/60 text-cyan-400 border-blue-800"}`,children:s?n?"LIVE PHYSICAL HARDWARE":"DISCONNECTED":"HARDWARE-IN-THE-LOOP SIM"})]}),h.jsxs("p",{className:"text-xs text-slate-400 mt-1 max-w-3xl",children:["Strict physical decoupling: Autonomous state machine runs strictly ",h.jsx("strong",{children:"ONBOARD"})," the Jetson computer. The Web GCS receives unidirectional telemetry via WebSocket and never issues low-level motor PWM directly."]})]}),s&&!n&&h.jsx("button",{onClick:r,className:"px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition-colors shadow-md",children:"RECONNECT TO GATEWAY"})]})}),s&&!n&&h.jsx("div",{className:"p-4 rounded-2xl bg-rose-950/40 border-2 border-rose-800 text-rose-200 shadow-xl",children:h.jsxs("div",{className:"flex items-start space-x-3",children:[h.jsx(eb,{className:"w-6 h-6 text-rose-500 shrink-0 mt-0.5"}),h.jsxs("div",{children:[h.jsx("div",{className:"font-bold text-sm tracking-wide text-rose-300",children:"HARDWARE CONNECTION UNAVAILABLE"}),h.jsxs("p",{className:"mt-1 text-slate-300 leading-relaxed text-xs",children:["The Ground Control Station could not connect to the local Robotics Gateway at"," ",h.jsx("code",{className:"bg-slate-900 border border-rose-800 px-1 py-0.5 rounded font-mono text-rose-400 font-bold",children:"ws://127.0.0.1:8000/ws/telemetry"}),". Telemetry will not be faked in Real Hardware Mode."]}),h.jsxs("div",{className:"mt-3 p-3 bg-slate-950 rounded-xl border border-rose-900 font-mono text-xs text-slate-300",children:[h.jsx("span",{className:"text-slate-500",children:"# Launch gateway daemon on companion computer:"}),h.jsx("br",{}),h.jsx("span",{className:"text-cyan-400 font-bold",children:"$ cd /Users/ankitsheoran/Downloads/DTU"}),h.jsx("br",{}),h.jsx("span",{className:"text-cyan-400 font-bold",children:"$ ./robot_gateway/venv/bin/python -m robot_gateway.main"})]})]})]})}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4",children:l.map(c=>{const d=c.icon;return h.jsxs("div",{className:`rounded-2xl p-4 border transition-all shadow-md ${c.connected?o?"bg-slate-900/70 border-slate-800 hover:border-slate-700":"bg-white border-slate-200 hover:border-slate-300":"bg-slate-900/30 border-rose-900/60 opacity-80"}`,children:[h.jsxs("div",{className:"flex items-center justify-between pb-2.5 border-b border-slate-200 dark:border-slate-700/40",children:[h.jsxs("div",{className:"flex items-center space-x-2.5",children:[h.jsx("div",{className:`p-2 rounded-xl ${c.connected?o?"bg-blue-600/20 text-cyan-400":"bg-blue-50 text-blue-700":o?"bg-slate-800 text-slate-500":"bg-slate-100 text-slate-500"}`,children:h.jsx(d,{className:"w-4 h-4"})}),h.jsxs("div",{children:[h.jsx("div",{className:"text-[10px] text-slate-500 uppercase font-semibold",children:c.name}),h.jsx("div",{className:`text-xs font-bold ${o?"text-white":"text-slate-900"}`,children:c.model})]})]}),c.connected?h.jsx(Qn,{className:"w-4 h-4 text-emerald-600"}):h.jsx(HT,{className:"w-4 h-4 text-rose-600"})]}),h.jsxs("div",{className:"mt-2.5 space-y-1.5 text-[11px]",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-slate-500",children:"ROLE:"})," ",h.jsx("span",{className:`font-medium ${o?"text-slate-200":"text-slate-700"}`,children:c.role})]}),h.jsxs("div",{children:[h.jsx("span",{className:"text-slate-500",children:"BUS:"})," ",h.jsx("span",{className:`font-mono font-bold ${o?"text-cyan-400":"text-blue-600"}`,children:c.interface})]})]})]},c.name)})}),h.jsxs("div",{className:`p-6 rounded-2xl border shadow-xl ${o?"bg-slate-900/80 border-slate-800 text-slate-200":"bg-white border-slate-200 text-slate-800"}`,children:[h.jsx("div",{className:"text-sm font-black tracking-wider uppercase mb-3",children:"DATAFLOW & HARNESS ARCHITECTURE"}),h.jsx("div",{className:`p-4 rounded-xl border font-mono text-xs overflow-x-auto leading-relaxed ${o?"bg-slate-950 border-slate-800 text-slate-300":"bg-slate-50 border-slate-300 text-slate-800"}`,children:h.jsx("pre",{children:`[ WEB GROUND CONTROL STATION (React + Three.js) ]
         │
         │  Local WebSocket (JSON Telemetry @ 30Hz)
         ▼
[ LOCAL ROBOTICS GATEWAY (Python FastAPI) ]
         │
         ├── ROS 2 DDS / Zenoh Micro-Bridge
         ├── /raman/mission_state
         ├── /raman/perception/detections
         └── /safety/estop_cmd
         ▼
[ ONBOARD COMPUTE: NVIDIA Jetson Orin Nano ] (100% Autonomy Execution)
         ├── Camera (RealSense USB 3.0)
         ├── RPLiDAR S2 (Ethernet UDP)
         ├── IMU BNO085 (SPI 100Hz)
         └── RTK GNSS (UART 10Hz)
         │
         │  UART / CAN Bus 2.0B (1 Mbps)
         ▼
[ MICROCONTROLLER HAL: STM32F407 (168MHz) ]
         ├── Dual VESC 6 BLDC Drivers (CAN ID 0x14, 0x15)
         ├── Closed-Loop Speed/Heading PID (1 kHz)
         ├── Wheel Optical Encoders (Quadrature Ticks)
         └── Normally Closed Hardware Safety Relays & E-Stop`})})]})]})},vb=({theme:t="DARK"})=>{const[e,n]=Ce.useState("mission_manager_node"),i=t==="DARK",r=[{id:"mission_manager_node",name:"mission_manager_node",group:"Decision Making (Onboard)",publishes:["/raman/mission_state","/raman/events"],subscribes:["/raman/perception/detections","/localization/pose","/safety/status"],freq:"20 Hz",desc:"Master state machine coordinating waypoint progression, 20° ramp, traffic light stop, and laser indication."},{id:"planner_node",name:"planner_node",group:"Navigation & Control",publishes:["/nav/cmd_vel","/nav/planned_path","/nav/trajectory"],subscribes:["/localization/pose","/costmap/local","/raman/mission_state"],freq:"50 Hz",desc:"Global A* waypoint sequencing + Local Pure Pursuit steering with lookahead distance."},{id:"obstacle_avoidance_node",name:"obstacle_avoidance_node",group:"Navigation & Control",publishes:["/costmap/local","/obstacle/warning"],subscribes:["/scan","/camera/depth"],freq:"25 Hz",desc:"Dynamic vector field repulsor creating safe corridor around traffic cones, barrels, and debris."},{id:"perception_node",name:"perception_node",group:"Vision & Perception",publishes:["/raman/perception/detections","/raman/face_matches","/traffic_light/status"],subscribes:["/camera/image_raw"],freq:"30 Hz",desc:"TensorRT YOLO-v9 for road signs and 512-dim facial embedding cosine matcher for candidate gallery."},{id:"localization_node",name:"localization_node",group:"Sensor Fusion",publishes:["/localization/pose","/localization/odometry"],subscribes:["/gps/fix","/imu/data","/encoder/ticks"],freq:"100 Hz",desc:"Extended Kalman Filter (robot_localization EKF) fusing RTK GNSS, 9-DOF IMU, and wheel odometry."},{id:"laser_target_node",name:"laser_target_node",group:"Actuation & Targeting",publishes:["/target/laser_status"],subscribes:["/raman/face_matches","/raman/mission_state"],freq:"10 Hz",desc:"Pan-tilt servo kinematics + hardwired 2.0-second safety timer watchdog for target marking."},{id:"motor_controller_node",name:"motor_controller_node",group:"Hardware Interface",publishes:["/encoder/ticks","/motor/status"],subscribes:["/nav/cmd_vel","/safety/estop_cmd"],freq:"50 Hz",desc:"Jetson UART/CAN communication bridge to STM32 microcontroller executing 1kHz closed-loop PID."},{id:"safety_node",name:"safety_node",group:"Safety Architecture",publishes:["/safety/status","/safety/estop_cmd"],subscribes:["/estop/hardware_pin","/heartbeat/watchdog"],freq:"100 Hz",desc:"Hardware watchdog supervisor monitoring LoRa wireless link, physical bumper, and software health."},{id:"telemetry_node",name:"telemetry_node",group:"Communications",publishes:["/telemetry/gcs_packet"],subscribes:["/raman/mission_state","/localization/pose","/nav/cmd_vel","/safety/status"],freq:"30 Hz",desc:"Compresses and serializes vehicle state for transmission across local WebSocket gateway."}],s=r.find(a=>a.id===e);return h.jsxs("div",{className:"max-w-7xl mx-auto space-y-6",children:[h.jsx("div",{className:`p-6 rounded-2xl border shadow-xl ${i?"bg-slate-900/80 border-slate-800 text-slate-100":"bg-white border-slate-200 text-slate-900"}`,children:h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsx("div",{className:"p-2.5 rounded-xl bg-purple-600/20 text-purple-400",children:h.jsx(ph,{className:"w-6 h-6"})}),h.jsxs("div",{children:[h.jsx("h1",{className:"text-xl font-black tracking-wider",children:"ROS 2 COMPUTATIONAL GRAPH TOPOLOGY"}),h.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:"Micro-ROS & DDS node orchestration running on NVIDIA Jetson Linux (Ubuntu 22.04 LTS / ROS 2 Humble)."})]})]})}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[h.jsxs("div",{className:"space-y-2 lg:col-span-1",children:[h.jsx("div",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider px-1",children:"ACTIVE ONBOARD NODES (9)"}),r.map(a=>{const o=e===a.id;return h.jsxs("button",{onClick:()=>n(a.id),className:`w-full text-left p-3.5 rounded-2xl border transition-all shadow-sm ${o?i?"bg-blue-950/60 border-cyan-500/80 shadow-md scale-101":"bg-blue-50 border-blue-500 shadow-sm":i?"bg-slate-900/60 border-slate-800 hover:border-slate-700":"bg-white border-slate-200 hover:border-slate-300"}`,children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:`font-mono font-bold text-xs ${o?"text-cyan-400":i?"text-white":"text-slate-900"}`,children:a.name}),h.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded font-mono font-bold border ${i?"bg-slate-800 text-slate-300 border-slate-700":"bg-slate-100 text-slate-700 border-slate-200"}`,children:a.freq})]}),h.jsx("div",{className:"text-[11px] text-slate-400 mt-1",children:a.group})]},a.id)})]}),s&&h.jsxs("div",{className:`lg:col-span-2 p-6 rounded-2xl border shadow-xl flex flex-col justify-between ${i?"bg-slate-900/80 border-slate-800 text-slate-200":"bg-white border-slate-200 text-slate-800"}`,children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700/40",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[10px] text-slate-500 font-bold uppercase",children:s.group}),h.jsx("h2",{className:`text-lg font-black font-mono ${i?"text-cyan-400":"text-blue-700"}`,children:s.name})]}),h.jsxs("div",{className:"text-right",children:[h.jsx("span",{className:"text-[10px] text-slate-500",children:"LOOP RATE"}),h.jsx("div",{className:`text-sm font-bold font-mono ${i?"text-emerald-400":"text-emerald-600"}`,children:s.freq})]})]}),h.jsx("p",{className:`mt-4 text-xs leading-relaxed ${i?"text-slate-300":"text-slate-600"}`,children:s.desc}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-6",children:[h.jsxs("div",{className:`p-4 rounded-xl border ${i?"bg-slate-950/70 border-slate-800":"bg-slate-50 border-slate-200"}`,children:[h.jsxs("div",{className:`text-xs font-bold uppercase tracking-wide flex items-center space-x-1.5 mb-2.5 ${i?"text-emerald-400":"text-emerald-700"}`,children:[h.jsx(ux,{className:"w-3.5 h-3.5"}),h.jsxs("span",{children:["PUBLISHED TOPICS (",s.publishes.length,")"]})]}),h.jsx("div",{className:"space-y-1.5 font-mono text-xs",children:s.publishes.map(a=>h.jsx("div",{className:`p-1.5 rounded border ${i?"bg-emerald-950/40 border-emerald-900/60 text-emerald-300":"bg-emerald-50 border-emerald-200 text-emerald-800"}`,children:a},a))})]}),h.jsxs("div",{className:`p-4 rounded-xl border ${i?"bg-slate-950/70 border-slate-800":"bg-slate-50 border-slate-200"}`,children:[h.jsxs("div",{className:`text-xs font-bold uppercase tracking-wide flex items-center space-x-1.5 mb-2.5 ${i?"text-blue-400":"text-blue-700"}`,children:[h.jsx(Yl,{className:"w-3.5 h-3.5"}),h.jsxs("span",{children:["SUBSCRIBED TOPICS (",s.subscribes.length,")"]})]}),h.jsx("div",{className:"space-y-1.5 font-mono text-xs",children:s.subscribes.map(a=>h.jsx("div",{className:`p-1.5 rounded border ${i?"bg-blue-950/40 border-blue-900/60 text-blue-300":"bg-blue-50 border-blue-200 text-blue-800"}`,children:a},a))})]})]})]}),h.jsxs("div",{className:"mt-8 pt-4 border-t border-slate-700/40 text-[11px] text-slate-400 flex items-center justify-between",children:[h.jsxs("span",{children:["QoS PROFILE: ",h.jsx("strong",{children:"SENSOR_DATA (BEST_EFFORT / VOLATILE)"})]}),h.jsx("span",{className:"text-emerald-400 font-bold",children:"● NODE HEARTBEAT ACTIVE"})]})]})]})]})},_b=()=>{const t=Ce.useMemo(()=>new Q_,[]),[e,n]=Ce.useState("LIGHT"),[i,r]=Ce.useState("SIMULATION"),[s,a]=Ce.useState("FOLLOW"),[o,l]=Ce.useState("MISSION_CONTROL"),[c,d]=Ce.useState(!0),[f,p]=Ce.useState(!1);Ce.useEffect(()=>{e==="DARK"?(document.documentElement.classList.add("dark"),document.documentElement.classList.remove("light")):(document.documentElement.classList.add("light"),document.documentElement.classList.remove("dark"))},[e]);const[g,_]=Ce.useState(!0),[y,m]=Ce.useState(!0),[u,v]=Ce.useState(!0),[x,M]=Ce.useState(!1),C=Ce.useRef(null),[A,b]=Ce.useState(()=>t.getTelemetryMessage()),[P,H]=Ce.useState([{id:"log-0",timestamp:new Date().toLocaleTimeString(),level:"INFO",message:"CTRL FIRST Autonomous Ground Control Station v3.0 online. Standby for mission parameters."}]),S=Ce.useCallback((z,J="INFO")=>{H(D=>[...D.slice(-150),{id:`log-${Date.now()}-${Math.random()}`,timestamp:new Date().toLocaleTimeString(),level:J,message:z}])},[]);Ce.useEffect(()=>{t.onLogMessage=(z,J)=>{S(z,J)},t.onMissionComplete=()=>{p(!0)}},[t,S]),Ce.useEffect(()=>{let z;const J=()=>{i==="SIMULATION"&&b(t.getTelemetryMessage()),z=requestAnimationFrame(J)};return z=requestAnimationFrame(J),()=>cancelAnimationFrame(z)},[i,t]);const N=Ce.useCallback(()=>{C.current&&(C.current.close(),C.current=null);try{const z=new WebSocket("ws://127.0.0.1:8000/ws/telemetry");C.current=z,z.onopen=()=>{M(!0),S("GATEWAY: Connected to CTRL FIRST Robotics Gateway at ws://127.0.0.1:8000","SUCCESS")},z.onmessage=J=>{try{const D=JSON.parse(J.data);i==="REAL_HARDWARE"&&b(D)}catch{}},z.onerror=()=>{M(!1)},z.onclose=()=>{M(!1)}}catch{M(!1)}},[i,S]);Ce.useEffect(()=>(i==="REAL_HARDWARE"?N():(C.current&&(C.current.close(),C.current=null),M(!1)),()=>{C.current&&C.current.close()}),[i,N]);const $=()=>{ft.registerInteraction()},Q=()=>{ft.registerInteraction();const z=!c;d(z),ft.enableSound(z)},I=()=>{ft.registerInteraction(),n(z=>z==="LIGHT"?"DARK":"LIGHT")},K=()=>{ft.registerInteraction(),l("MISSION_CONTROL"),t.resetSimulation(),S("ONE-CLICK DEMO TRIGGERED: Launching comprehensive CTRL FIRST autonomous mission...","SUCCESS"),setTimeout(()=>{t.startAutonomousMission()},400)},j=()=>{ft.registerInteraction(),t.resetSimulation(),p(!1)},ie=(z,J)=>{ft.registerInteraction(),i==="SIMULATION"?t.manualDrive(z,J):i==="REAL_HARDWARE"&&x&&fetch("http://127.0.0.1:8000/cmd/velocity",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({linear_x:z*1.5,angular_z:J*1})}).catch(()=>{})},U=()=>{ft.registerInteraction(),i==="SIMULATION"?t.triggerEmergencyStop():i==="REAL_HARDWARE"&&fetch("http://127.0.0.1:8000/cmd/stop",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({reason:"GCS_UI_ESTOP",emergency:!0})}).catch(()=>{})},G=()=>{ft.registerInteraction(),i==="SIMULATION"?t.resetEmergencyStop():i==="REAL_HARDWARE"&&fetch("http://127.0.0.1:8000/safety/reset",{method:"POST"}).catch(()=>{})},R=()=>{ft.registerInteraction(),t.toggleTrafficLight()},w=e==="DARK";return h.jsxs("div",{onClick:$,className:`w-screen h-screen flex flex-col overflow-hidden select-none font-mono transition-colors duration-200 ${w?"bg-[#090d16] text-slate-100":"bg-[#f1f5f9] text-slate-800"}`,children:[h.jsx(ob,{mode:i,onModeChange:z=>{ft.registerInteraction(),r(z)},telemetry:A,isConnected:i==="REAL_HARDWARE"?x:!0,soundEnabled:c,onToggleSound:Q,theme:e,onToggleTheme:I,onStartFullDemo:K,onResetMission:j,onToggleTrafficLight:R,activeNavTab:o,onNavTabChange:z=>{ft.registerInteraction(),l(z)}}),h.jsxs("main",{className:"flex-1 overflow-hidden relative",children:[o==="MISSION_CONTROL"&&h.jsxs("div",{className:"w-full h-full relative overflow-hidden",children:[h.jsx("div",{className:"absolute inset-0 w-full h-full z-0",children:h.jsx(ab,{navEngine:t,cameraMode:s,theme:e,onCameraModeChange:z=>{ft.registerInteraction(),a(z)},onCanvasClick:$})}),h.jsx("div",{className:`absolute top-3 left-3 bottom-3 w-80 z-20 transition-all duration-300 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl border flex flex-col ${g?"translate-x-0 opacity-100":"-translate-x-[calc(100%+16px)] opacity-0 pointer-events-none"} ${w?"bg-slate-950/85 border-slate-800/80":"bg-white/95 border-slate-200/90"}`,children:h.jsx(lb,{telemetry:A,cameraMode:s,theme:e,onCameraModeChange:z=>{ft.registerInteraction(),a(z)},onManualDrive:ie,onEmergencyStop:U,onResetEstop:G,onStartAutonomous:()=>{ft.registerInteraction(),t.startAutonomousMission()},onResetMission:j,onToggleTrafficLight:R})}),h.jsx("button",{onClick:()=>_(!g),className:`absolute top-4 z-30 p-2 rounded-r-xl border border-l-0 shadow-lg transition-all ${g?"left-[324px]":"left-0"} ${w?"bg-slate-900/90 text-slate-300 border-slate-700/80 hover:bg-slate-800":"bg-white/95 text-slate-700 border-slate-200 hover:bg-slate-100"}`,title:g?"Collapse Mission Controls":"Expand Mission Controls",children:g?h.jsx(hm,{className:"w-4 h-4"}):h.jsx(fm,{className:"w-4 h-4"})}),h.jsx("div",{className:`absolute top-3 right-3 bottom-3 w-84 xl:w-96 z-20 transition-all duration-300 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl border flex flex-col ${y?"translate-x-0 opacity-100":"translate-x-[calc(100%+16px)] opacity-0 pointer-events-none"} ${w?"bg-slate-950/85 border-slate-800/80":"bg-white/95 border-slate-200/90"}`,children:h.jsx(hb,{telemetry:A,theme:e})}),h.jsx("button",{onClick:()=>m(!y),className:`absolute top-4 z-30 p-2 rounded-l-xl border border-r-0 shadow-lg transition-all ${y?"right-[340px] xl:right-[388px]":"right-0"} ${w?"bg-slate-900/90 text-slate-300 border-slate-700/80 hover:bg-slate-800":"bg-white/95 text-slate-700 border-slate-200 hover:bg-slate-100"}`,title:y?"Collapse Telemetry Panel":"Expand Telemetry Panel",children:y?h.jsx(fm,{className:"w-4 h-4"}):h.jsx(hm,{className:"w-4 h-4"})}),h.jsxs("div",{className:`absolute bottom-3 z-10 transition-all duration-300 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl border flex flex-col ${u?"translate-y-0 opacity-100":"translate-y-[calc(100%+16px)] opacity-0 pointer-events-none"} ${g?"left-[344px]":"left-3"} ${y?"right-[360px] xl:right-[408px]":"right-3"} h-48 ${w?"bg-slate-950/90 border-slate-800/80":"bg-white/95 border-slate-200/90"}`,children:[h.jsxs("div",{className:`h-7 px-3 flex items-center justify-between border-b text-[10px] font-bold ${w?"bg-slate-900/90 border-slate-800 text-slate-400":"bg-slate-100/90 border-slate-200 text-slate-600"}`,children:[h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsxs("span",{className:"flex items-center space-x-1",children:[h.jsx(Xl,{className:"w-3 h-3 text-blue-500"}),h.jsx("span",{children:"2D TACTICAL RADAR MAP"})]}),h.jsx("span",{className:"opacity-30",children:"|"}),h.jsxs("span",{className:"flex items-center space-x-1",children:[h.jsx(mx,{className:"w-3 h-3 text-emerald-500"}),h.jsx("span",{children:"ONBOARD EVENT STREAM"})]})]}),h.jsx("button",{onClick:()=>v(!1),className:"hover:text-rose-500 transition-colors p-0.5 rounded",title:"Minimize Bottom Flight Deck",children:h.jsx(BT,{className:"w-3.5 h-3.5"})})]}),h.jsxs("div",{className:"flex-1 flex p-2 gap-2 overflow-hidden",children:[h.jsx("div",{className:"w-1/2 h-full rounded-xl overflow-hidden border border-slate-200/50 shadow-inner",children:h.jsx(fb,{telemetry:A,theme:e})}),h.jsx("div",{className:"w-1/2 h-full rounded-xl overflow-hidden border border-slate-200/50 shadow-inner",children:h.jsx(pb,{logs:P,theme:e,onClearLogs:()=>H([])})})]})]}),!u&&h.jsxs("button",{onClick:()=>v(!0),className:`absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full border shadow-xl flex items-center space-x-1.5 text-xs font-bold transition-all hover:scale-105 active:scale-95 ${w?"bg-slate-900/95 text-slate-200 border-slate-700/80 hover:bg-slate-800":"bg-white/95 text-slate-800 border-slate-200 hover:bg-slate-100"}`,children:[h.jsx(GT,{className:"w-3.5 h-3.5 text-blue-500"}),h.jsx("span",{children:"EXPAND FLIGHT DECK & RADAR MAP"})]})]}),o==="HARDWARE"&&h.jsx("div",{className:"w-full h-full overflow-y-auto p-4 md:p-6",children:h.jsx(xb,{mode:i,telemetry:A,isConnected:x,theme:e,onRetryConnection:N})}),o==="ROS_NODES"&&h.jsx("div",{className:"w-full h-full overflow-y-auto p-4 md:p-6",children:h.jsx(vb,{theme:e})})]}),h.jsx(gb,{isOpen:f,onClose:()=>p(!1),onRestart:K})]})};au.createRoot(document.getElementById("root")).render(h.jsx(zx.StrictMode,{children:h.jsx(_b,{})}));
