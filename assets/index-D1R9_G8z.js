(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function F2(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Hp={exports:{}},Ml={},Vp={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Po=Symbol.for("react.element"),O2=Symbol.for("react.portal"),B2=Symbol.for("react.fragment"),k2=Symbol.for("react.strict_mode"),z2=Symbol.for("react.profiler"),H2=Symbol.for("react.provider"),V2=Symbol.for("react.context"),G2=Symbol.for("react.forward_ref"),W2=Symbol.for("react.suspense"),X2=Symbol.for("react.memo"),j2=Symbol.for("react.lazy"),Ud=Symbol.iterator;function Y2(t){return t===null||typeof t!="object"?null:(t=Ud&&t[Ud]||t["@@iterator"],typeof t=="function"?t:null)}var Gp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wp=Object.assign,Xp={};function Ps(t,e,n){this.props=t,this.context=e,this.refs=Xp,this.updater=n||Gp}Ps.prototype.isReactComponent={};Ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function jp(){}jp.prototype=Ps.prototype;function yf(t,e,n){this.props=t,this.context=e,this.refs=Xp,this.updater=n||Gp}var Mf=yf.prototype=new jp;Mf.constructor=yf;Wp(Mf,Ps.prototype);Mf.isPureReactComponent=!0;var Nd=Array.isArray,Yp=Object.prototype.hasOwnProperty,Ef={current:null},qp={key:!0,ref:!0,__self:!0,__source:!0};function Kp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Yp.call(e,i)&&!qp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Po,type:t,key:s,ref:o,props:r,_owner:Ef.current}}function q2(t,e){return{$$typeof:Po,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Af(t){return typeof t=="object"&&t!==null&&t.$$typeof===Po}function K2(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Fd=/\/+/g;function jl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?K2(""+t.key):e.toString(36)}function Ra(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Po:case O2:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+jl(o,0):i,Nd(r)?(n="",t!=null&&(n=t.replace(Fd,"$&/")+"/"),Ra(r,e,n,"",function(c){return c})):r!=null&&(Af(r)&&(r=q2(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Fd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Nd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+jl(s,a);o+=Ra(s,e,n,l,r)}else if(l=Y2(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+jl(s,a++),o+=Ra(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Vo(t,e,n){if(t==null)return t;var i=[],r=0;return Ra(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Z2(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Gt={current:null},Pa={transition:null},Q2={ReactCurrentDispatcher:Gt,ReactCurrentBatchConfig:Pa,ReactCurrentOwner:Ef};function Zp(){throw Error("act(...) is not supported in production builds of React.")}Oe.Children={map:Vo,forEach:function(t,e,n){Vo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Vo(t,function(){e++}),e},toArray:function(t){return Vo(t,function(e){return e})||[]},only:function(t){if(!Af(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Oe.Component=Ps;Oe.Fragment=B2;Oe.Profiler=z2;Oe.PureComponent=yf;Oe.StrictMode=k2;Oe.Suspense=W2;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q2;Oe.act=Zp;Oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Wp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ef.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Yp.call(e,l)&&!qp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Po,type:t.type,key:r,ref:s,props:i,_owner:o}};Oe.createContext=function(t){return t={$$typeof:V2,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:H2,_context:t},t.Consumer=t};Oe.createElement=Kp;Oe.createFactory=function(t){var e=Kp.bind(null,t);return e.type=t,e};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(t){return{$$typeof:G2,render:t}};Oe.isValidElement=Af;Oe.lazy=function(t){return{$$typeof:j2,_payload:{_status:-1,_result:t},_init:Z2}};Oe.memo=function(t,e){return{$$typeof:X2,type:t,compare:e===void 0?null:e}};Oe.startTransition=function(t){var e=Pa.transition;Pa.transition={};try{t()}finally{Pa.transition=e}};Oe.unstable_act=Zp;Oe.useCallback=function(t,e){return Gt.current.useCallback(t,e)};Oe.useContext=function(t){return Gt.current.useContext(t)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(t){return Gt.current.useDeferredValue(t)};Oe.useEffect=function(t,e){return Gt.current.useEffect(t,e)};Oe.useId=function(){return Gt.current.useId()};Oe.useImperativeHandle=function(t,e,n){return Gt.current.useImperativeHandle(t,e,n)};Oe.useInsertionEffect=function(t,e){return Gt.current.useInsertionEffect(t,e)};Oe.useLayoutEffect=function(t,e){return Gt.current.useLayoutEffect(t,e)};Oe.useMemo=function(t,e){return Gt.current.useMemo(t,e)};Oe.useReducer=function(t,e,n){return Gt.current.useReducer(t,e,n)};Oe.useRef=function(t){return Gt.current.useRef(t)};Oe.useState=function(t){return Gt.current.useState(t)};Oe.useSyncExternalStore=function(t,e,n){return Gt.current.useSyncExternalStore(t,e,n)};Oe.useTransition=function(){return Gt.current.useTransition()};Oe.version="18.3.1";Vp.exports=Oe;var gs=Vp.exports;const J2=F2(gs);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $2=gs,e1=Symbol.for("react.element"),t1=Symbol.for("react.fragment"),n1=Object.prototype.hasOwnProperty,i1=$2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r1={key:!0,ref:!0,__self:!0,__source:!0};function Qp(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)n1.call(e,i)&&!r1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:e1,type:t,key:s,ref:o,props:r,_owner:i1.current}}Ml.Fragment=t1;Ml.jsx=Qp;Ml.jsxs=Qp;Hp.exports=Ml;var se=Hp.exports,Yc={},Jp={exports:{}},un={},$p={exports:{}},e0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,j){var K=I.length;I.push(j);e:for(;0<K;){var oe=K-1>>>1,ye=I[oe];if(0<r(ye,j))I[oe]=j,I[K]=ye,K=oe;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var j=I[0],K=I.pop();if(K!==j){I[0]=K;e:for(var oe=0,ye=I.length,ze=ye>>>1;oe<ze;){var V=2*(oe+1)-1,te=I[V],de=V+1,ue=I[de];if(0>r(te,K))de<ye&&0>r(ue,te)?(I[oe]=ue,I[de]=K,oe=de):(I[oe]=te,I[V]=K,oe=V);else if(de<ye&&0>r(ue,K))I[oe]=ue,I[de]=K,oe=de;else break e}}return j}function r(I,j){var K=I.sortIndex-j.sortIndex;return K!==0?K:I.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,d=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=I)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function M(I){if(x=!1,g(I),!v)if(n(l)!==null)v=!0,H(P);else{var j=n(c);j!==null&&ee(M,j.startTime-I)}}function P(I,j){v=!1,x&&(x=!1,u(b),b=-1),p=!0;var K=d;try{for(g(j),h=n(l);h!==null&&(!(h.expirationTime>j)||I&&!L());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,d=h.priorityLevel;var ye=oe(h.expirationTime<=j);j=t.unstable_now(),typeof ye=="function"?h.callback=ye:h===n(l)&&i(l),g(j)}else i(l);h=n(l)}if(h!==null)var ze=!0;else{var V=n(c);V!==null&&ee(M,V.startTime-j),ze=!1}return ze}finally{h=null,d=K,p=!1}}var C=!1,w=null,b=-1,A=5,y=-1;function L(){return!(t.unstable_now()-y<A)}function G(){if(w!==null){var I=t.unstable_now();y=I;var j=!0;try{j=w(!0,I)}finally{j?z():(C=!1,w=null)}}else C=!1}var z;if(typeof _=="function")z=function(){_(G)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,Q=W.port2;W.port1.onmessage=G,z=function(){Q.postMessage(null)}}else z=function(){m(G,0)};function H(I){w=I,C||(C=!0,z())}function ee(I,j){b=m(function(){I(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,H(P))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var K=d;d=j;try{return I()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,j){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var K=d;d=I;try{return j()}finally{d=K}},t.unstable_scheduleCallback=function(I,j,K){var oe=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?oe+K:oe):K=oe,I){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=K+ye,I={id:f++,callback:j,priorityLevel:I,startTime:K,expirationTime:ye,sortIndex:-1},K>oe?(I.sortIndex=K,e(c,I),n(l)===null&&I===n(c)&&(x?(u(b),b=-1):x=!0,ee(M,K-oe))):(I.sortIndex=ye,e(l,I),v||p||(v=!0,H(P))),I},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(I){var j=d;return function(){var K=d;d=j;try{return I.apply(this,arguments)}finally{d=K}}}})(e0);$p.exports=e0;var s1=$p.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o1=gs,cn=s1;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var t0=new Set,uo={};function Cr(t,e){_s(t,e),_s(t+"Capture",e)}function _s(t,e){for(uo[t]=e,t=0;t<e.length;t++)t0.add(e[t])}var ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qc=Object.prototype.hasOwnProperty,a1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Od={},Bd={};function l1(t){return qc.call(Bd,t)?!0:qc.call(Od,t)?!1:a1.test(t)?Bd[t]=!0:(Od[t]=!0,!1)}function c1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function u1(t,e,n,i){if(e===null||typeof e>"u"||c1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new Wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new Wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new Wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new Wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new Wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new Wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new Wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new Wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new Wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cf=/[\-:]([a-z])/g;function wf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cf,wf);It[e]=new Wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cf,wf);It[e]=new Wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cf,wf);It[e]=new Wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new Wt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new Wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new Wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Tf(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(u1(e,n,r,i)&&(n=null),i||r===null?l1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var mi=o1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Go=Symbol.for("react.element"),qr=Symbol.for("react.portal"),Kr=Symbol.for("react.fragment"),Rf=Symbol.for("react.strict_mode"),Kc=Symbol.for("react.profiler"),n0=Symbol.for("react.provider"),i0=Symbol.for("react.context"),Pf=Symbol.for("react.forward_ref"),Zc=Symbol.for("react.suspense"),Qc=Symbol.for("react.suspense_list"),Lf=Symbol.for("react.memo"),wi=Symbol.for("react.lazy"),r0=Symbol.for("react.offscreen"),kd=Symbol.iterator;function Us(t){return t===null||typeof t!="object"?null:(t=kd&&t[kd]||t["@@iterator"],typeof t=="function"?t:null)}var at=Object.assign,Yl;function Ks(t){if(Yl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yl=e&&e[1]||""}return`
`+Yl+t}var ql=!1;function Kl(t,e){if(!t||ql)return"";ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ql=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ks(t):""}function f1(t){switch(t.tag){case 5:return Ks(t.type);case 16:return Ks("Lazy");case 13:return Ks("Suspense");case 19:return Ks("SuspenseList");case 0:case 2:case 15:return t=Kl(t.type,!1),t;case 11:return t=Kl(t.type.render,!1),t;case 1:return t=Kl(t.type,!0),t;default:return""}}function Jc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Kr:return"Fragment";case qr:return"Portal";case Kc:return"Profiler";case Rf:return"StrictMode";case Zc:return"Suspense";case Qc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case i0:return(t.displayName||"Context")+".Consumer";case n0:return(t._context.displayName||"Context")+".Provider";case Pf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lf:return e=t.displayName||null,e!==null?e:Jc(t.type)||"Memo";case wi:e=t._payload,t=t._init;try{return Jc(t(e))}catch{}}return null}function d1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jc(e);case 8:return e===Rf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function s0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function h1(t){var e=s0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wo(t){t._valueTracker||(t._valueTracker=h1(t))}function o0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=s0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ja(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $c(t,e){var n=e.checked;return at({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Gi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function a0(t,e){e=e.checked,e!=null&&Tf(t,"checked",e,!1)}function eu(t,e){a0(t,e);var n=Gi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?tu(t,e.type,n):e.hasOwnProperty("defaultValue")&&tu(t,e.type,Gi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function tu(t,e,n){(e!=="number"||ja(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Zs=Array.isArray;function as(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Gi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function nu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return at({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(Zs(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gi(n)}}function l0(t,e){var n=Gi(e.value),i=Gi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Gd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function c0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function iu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?c0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xo,u0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xo=Xo||document.createElement("div"),Xo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function fo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},p1=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(t){p1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),eo[e]=eo[t]})});function f0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||eo.hasOwnProperty(t)&&eo[t]?(""+e).trim():e+"px"}function d0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=f0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var m1=at({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ru(t,e){if(e){if(m1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function su(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ou=null;function bf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var au=null,ls=null,cs=null;function Wd(t){if(t=Io(t)){if(typeof au!="function")throw Error($(280));var e=t.stateNode;e&&(e=Tl(e),au(t.stateNode,t.type,e))}}function h0(t){ls?cs?cs.push(t):cs=[t]:ls=t}function p0(){if(ls){var t=ls,e=cs;if(cs=ls=null,Wd(t),e)for(t=0;t<e.length;t++)Wd(e[t])}}function m0(t,e){return t(e)}function g0(){}var Zl=!1;function _0(t,e,n){if(Zl)return t(e,n);Zl=!0;try{return m0(t,e,n)}finally{Zl=!1,(ls!==null||cs!==null)&&(g0(),p0())}}function ho(t,e){var n=t.stateNode;if(n===null)return null;var i=Tl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var lu=!1;if(ui)try{var Ns={};Object.defineProperty(Ns,"passive",{get:function(){lu=!0}}),window.addEventListener("test",Ns,Ns),window.removeEventListener("test",Ns,Ns)}catch{lu=!1}function g1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var to=!1,Ya=null,qa=!1,cu=null,_1={onError:function(t){to=!0,Ya=t}};function v1(t,e,n,i,r,s,o,a,l){to=!1,Ya=null,g1.apply(_1,arguments)}function x1(t,e,n,i,r,s,o,a,l){if(v1.apply(this,arguments),to){if(to){var c=Ya;to=!1,Ya=null}else throw Error($(198));qa||(qa=!0,cu=c)}}function wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function v0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xd(t){if(wr(t)!==t)throw Error($(188))}function S1(t){var e=t.alternate;if(!e){if(e=wr(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Xd(r),t;if(s===i)return Xd(r),e;s=s.sibling}throw Error($(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error($(189))}}if(n.alternate!==i)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function x0(t){return t=S1(t),t!==null?S0(t):null}function S0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=S0(t);if(e!==null)return e;t=t.sibling}return null}var y0=cn.unstable_scheduleCallback,jd=cn.unstable_cancelCallback,y1=cn.unstable_shouldYield,M1=cn.unstable_requestPaint,dt=cn.unstable_now,E1=cn.unstable_getCurrentPriorityLevel,If=cn.unstable_ImmediatePriority,M0=cn.unstable_UserBlockingPriority,Ka=cn.unstable_NormalPriority,A1=cn.unstable_LowPriority,E0=cn.unstable_IdlePriority,El=null,Gn=null;function C1(t){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(El,t,void 0,(t.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:R1,w1=Math.log,T1=Math.LN2;function R1(t){return t>>>=0,t===0?32:31-(w1(t)/T1|0)|0}var jo=64,Yo=4194304;function Qs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Za(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Qs(a):(s&=o,s!==0&&(i=Qs(s)))}else o=n&~r,o!==0?i=Qs(o):s!==0&&(i=Qs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-In(e),r=1<<n,i|=t[n],e&=~r;return i}function P1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function L1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-In(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=P1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function uu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function A0(){var t=jo;return jo<<=1,!(jo&4194240)&&(jo=64),t}function Ql(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Lo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-In(e),t[e]=n}function b1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-In(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Df(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-In(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function C0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var w0,Uf,T0,R0,P0,fu=!1,qo=[],Di=null,Ui=null,Ni=null,po=new Map,mo=new Map,Ri=[],I1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yd(t,e){switch(t){case"focusin":case"focusout":Di=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Ni=null;break;case"pointerover":case"pointerout":po.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(e.pointerId)}}function Fs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Io(e),e!==null&&Uf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function D1(t,e,n,i,r){switch(e){case"focusin":return Di=Fs(Di,t,e,n,i,r),!0;case"dragenter":return Ui=Fs(Ui,t,e,n,i,r),!0;case"mouseover":return Ni=Fs(Ni,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return po.set(s,Fs(po.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,mo.set(s,Fs(mo.get(s)||null,t,e,n,i,r)),!0}return!1}function L0(t){var e=fr(t.target);if(e!==null){var n=wr(e);if(n!==null){if(e=n.tag,e===13){if(e=v0(n),e!==null){t.blockedOn=e,P0(t.priority,function(){T0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function La(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=du(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ou=i,n.target.dispatchEvent(i),ou=null}else return e=Io(n),e!==null&&Uf(e),t.blockedOn=n,!1;e.shift()}return!0}function qd(t,e,n){La(t)&&n.delete(e)}function U1(){fu=!1,Di!==null&&La(Di)&&(Di=null),Ui!==null&&La(Ui)&&(Ui=null),Ni!==null&&La(Ni)&&(Ni=null),po.forEach(qd),mo.forEach(qd)}function Os(t,e){t.blockedOn===e&&(t.blockedOn=null,fu||(fu=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,U1)))}function go(t){function e(r){return Os(r,t)}if(0<qo.length){Os(qo[0],t);for(var n=1;n<qo.length;n++){var i=qo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Di!==null&&Os(Di,t),Ui!==null&&Os(Ui,t),Ni!==null&&Os(Ni,t),po.forEach(e),mo.forEach(e),n=0;n<Ri.length;n++)i=Ri[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ri.length&&(n=Ri[0],n.blockedOn===null);)L0(n),n.blockedOn===null&&Ri.shift()}var us=mi.ReactCurrentBatchConfig,Qa=!0;function N1(t,e,n,i){var r=Qe,s=us.transition;us.transition=null;try{Qe=1,Nf(t,e,n,i)}finally{Qe=r,us.transition=s}}function F1(t,e,n,i){var r=Qe,s=us.transition;us.transition=null;try{Qe=4,Nf(t,e,n,i)}finally{Qe=r,us.transition=s}}function Nf(t,e,n,i){if(Qa){var r=du(t,e,n,i);if(r===null)ac(t,e,i,Ja,n),Yd(t,i);else if(D1(r,t,e,n,i))i.stopPropagation();else if(Yd(t,i),e&4&&-1<I1.indexOf(t)){for(;r!==null;){var s=Io(r);if(s!==null&&w0(s),s=du(t,e,n,i),s===null&&ac(t,e,i,Ja,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ac(t,e,i,null,n)}}var Ja=null;function du(t,e,n,i){if(Ja=null,t=bf(i),t=fr(t),t!==null)if(e=wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=v0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ja=t,null}function b0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(E1()){case If:return 1;case M0:return 4;case Ka:case A1:return 16;case E0:return 536870912;default:return 16}default:return 16}}var bi=null,Ff=null,ba=null;function I0(){if(ba)return ba;var t,e=Ff,n=e.length,i,r="value"in bi?bi.value:bi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ba=r.slice(t,1<i?1-i:void 0)}function Ia(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ko(){return!0}function Kd(){return!1}function fn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ko:Kd,this.isPropagationStopped=Kd,this}return at(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),e}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Of=fn(Ls),bo=at({},Ls,{view:0,detail:0}),O1=fn(bo),Jl,$l,Bs,Al=at({},bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bs&&(Bs&&t.type==="mousemove"?(Jl=t.screenX-Bs.screenX,$l=t.screenY-Bs.screenY):$l=Jl=0,Bs=t),Jl)},movementY:function(t){return"movementY"in t?t.movementY:$l}}),Zd=fn(Al),B1=at({},Al,{dataTransfer:0}),k1=fn(B1),z1=at({},bo,{relatedTarget:0}),ec=fn(z1),H1=at({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),V1=fn(H1),G1=at({},Ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),W1=fn(G1),X1=at({},Ls,{data:0}),Qd=fn(X1),j1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=q1[t])?!!e[t]:!1}function Bf(){return K1}var Z1=at({},bo,{key:function(t){if(t.key){var e=j1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ia(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Y1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bf,charCode:function(t){return t.type==="keypress"?Ia(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ia(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Q1=fn(Z1),J1=at({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jd=fn(J1),$1=at({},bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bf}),eg=fn($1),tg=at({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),ng=fn(tg),ig=at({},Al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rg=fn(ig),sg=[9,13,27,32],kf=ui&&"CompositionEvent"in window,no=null;ui&&"documentMode"in document&&(no=document.documentMode);var og=ui&&"TextEvent"in window&&!no,D0=ui&&(!kf||no&&8<no&&11>=no),$d=" ",eh=!1;function U0(t,e){switch(t){case"keyup":return sg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function N0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function ag(t,e){switch(t){case"compositionend":return N0(e);case"keypress":return e.which!==32?null:(eh=!0,$d);case"textInput":return t=e.data,t===$d&&eh?null:t;default:return null}}function lg(t,e){if(Zr)return t==="compositionend"||!kf&&U0(t,e)?(t=I0(),ba=Ff=bi=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return D0&&e.locale!=="ko"?null:e.data;default:return null}}var cg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function th(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cg[t.type]:e==="textarea"}function F0(t,e,n,i){h0(i),e=$a(e,"onChange"),0<e.length&&(n=new Of("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var io=null,_o=null;function ug(t){Y0(t,0)}function Cl(t){var e=$r(t);if(o0(e))return t}function fg(t,e){if(t==="change")return e}var O0=!1;if(ui){var tc;if(ui){var nc="oninput"in document;if(!nc){var nh=document.createElement("div");nh.setAttribute("oninput","return;"),nc=typeof nh.oninput=="function"}tc=nc}else tc=!1;O0=tc&&(!document.documentMode||9<document.documentMode)}function ih(){io&&(io.detachEvent("onpropertychange",B0),_o=io=null)}function B0(t){if(t.propertyName==="value"&&Cl(_o)){var e=[];F0(e,_o,t,bf(t)),_0(ug,e)}}function dg(t,e,n){t==="focusin"?(ih(),io=e,_o=n,io.attachEvent("onpropertychange",B0)):t==="focusout"&&ih()}function hg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cl(_o)}function pg(t,e){if(t==="click")return Cl(e)}function mg(t,e){if(t==="input"||t==="change")return Cl(e)}function gg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Un=typeof Object.is=="function"?Object.is:gg;function vo(t,e){if(Un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!qc.call(e,r)||!Un(t[r],e[r]))return!1}return!0}function rh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sh(t,e){var n=rh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rh(n)}}function k0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?k0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function z0(){for(var t=window,e=ja();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ja(t.document)}return e}function zf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _g(t){var e=z0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&k0(n.ownerDocument.documentElement,n)){if(i!==null&&zf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=sh(n,s);var o=sh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vg=ui&&"documentMode"in document&&11>=document.documentMode,Qr=null,hu=null,ro=null,pu=!1;function oh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pu||Qr==null||Qr!==ja(i)||(i=Qr,"selectionStart"in i&&zf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ro&&vo(ro,i)||(ro=i,i=$a(hu,"onSelect"),0<i.length&&(e=new Of("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Qr)))}function Zo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Jr={animationend:Zo("Animation","AnimationEnd"),animationiteration:Zo("Animation","AnimationIteration"),animationstart:Zo("Animation","AnimationStart"),transitionend:Zo("Transition","TransitionEnd")},ic={},H0={};ui&&(H0=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function wl(t){if(ic[t])return ic[t];if(!Jr[t])return t;var e=Jr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in H0)return ic[t]=e[n];return t}var V0=wl("animationend"),G0=wl("animationiteration"),W0=wl("animationstart"),X0=wl("transitionend"),j0=new Map,ah="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yi(t,e){j0.set(t,e),Cr(e,[t])}for(var rc=0;rc<ah.length;rc++){var sc=ah[rc],xg=sc.toLowerCase(),Sg=sc[0].toUpperCase()+sc.slice(1);Yi(xg,"on"+Sg)}Yi(V0,"onAnimationEnd");Yi(G0,"onAnimationIteration");Yi(W0,"onAnimationStart");Yi("dblclick","onDoubleClick");Yi("focusin","onFocus");Yi("focusout","onBlur");Yi(X0,"onTransitionEnd");_s("onMouseEnter",["mouseout","mouseover"]);_s("onMouseLeave",["mouseout","mouseover"]);_s("onPointerEnter",["pointerout","pointerover"]);_s("onPointerLeave",["pointerout","pointerover"]);Cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Js));function lh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,x1(i,e,void 0,t),t.currentTarget=null}function Y0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;lh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;lh(r,a,c),s=l}}}if(qa)throw t=cu,qa=!1,cu=null,t}function et(t,e){var n=e[xu];n===void 0&&(n=e[xu]=new Set);var i=t+"__bubble";n.has(i)||(q0(e,t,2,!1),n.add(i))}function oc(t,e,n){var i=0;e&&(i|=4),q0(n,t,i,e)}var Qo="_reactListening"+Math.random().toString(36).slice(2);function xo(t){if(!t[Qo]){t[Qo]=!0,t0.forEach(function(n){n!=="selectionchange"&&(yg.has(n)||oc(n,!1,t),oc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qo]||(e[Qo]=!0,oc("selectionchange",!1,e))}}function q0(t,e,n,i){switch(b0(e)){case 1:var r=N1;break;case 4:r=F1;break;default:r=Nf}n=r.bind(null,e,n,t),r=void 0,!lu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ac(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=fr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}_0(function(){var c=s,f=bf(n),h=[];e:{var d=j0.get(t);if(d!==void 0){var p=Of,v=t;switch(t){case"keypress":if(Ia(n)===0)break e;case"keydown":case"keyup":p=Q1;break;case"focusin":v="focus",p=ec;break;case"focusout":v="blur",p=ec;break;case"beforeblur":case"afterblur":p=ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=k1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=eg;break;case V0:case G0:case W0:p=V1;break;case X0:p=ng;break;case"scroll":p=O1;break;case"wheel":p=rg;break;case"copy":case"cut":case"paste":p=W1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Jd}var x=(e&4)!==0,m=!x&&t==="scroll",u=x?d!==null?d+"Capture":null:d;x=[];for(var _=c,g;_!==null;){g=_;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,u!==null&&(M=ho(_,u),M!=null&&x.push(So(_,M,g)))),m)break;_=_.return}0<x.length&&(d=new p(d,v,null,n,f),h.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==ou&&(v=n.relatedTarget||n.fromElement)&&(fr(v)||v[fi]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?fr(v):null,v!==null&&(m=wr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=Zd,M="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Jd,M="onPointerLeave",u="onPointerEnter",_="pointer"),m=p==null?d:$r(p),g=v==null?d:$r(v),d=new x(M,_+"leave",p,n,f),d.target=m,d.relatedTarget=g,M=null,fr(f)===c&&(x=new x(u,_+"enter",v,n,f),x.target=g,x.relatedTarget=m,M=x),m=M,p&&v)t:{for(x=p,u=v,_=0,g=x;g;g=Rr(g))_++;for(g=0,M=u;M;M=Rr(M))g++;for(;0<_-g;)x=Rr(x),_--;for(;0<g-_;)u=Rr(u),g--;for(;_--;){if(x===u||u!==null&&x===u.alternate)break t;x=Rr(x),u=Rr(u)}x=null}else x=null;p!==null&&ch(h,d,p,x,!1),v!==null&&m!==null&&ch(h,m,v,x,!0)}}e:{if(d=c?$r(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var P=fg;else if(th(d))if(O0)P=mg;else{P=hg;var C=dg}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(P=pg);if(P&&(P=P(t,c))){F0(h,P,n,f);break e}C&&C(t,d,c),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&tu(d,"number",d.value)}switch(C=c?$r(c):window,t){case"focusin":(th(C)||C.contentEditable==="true")&&(Qr=C,hu=c,ro=null);break;case"focusout":ro=hu=Qr=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,oh(h,n,f);break;case"selectionchange":if(vg)break;case"keydown":case"keyup":oh(h,n,f)}var w;if(kf)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Zr?U0(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(D0&&n.locale!=="ko"&&(Zr||b!=="onCompositionStart"?b==="onCompositionEnd"&&Zr&&(w=I0()):(bi=f,Ff="value"in bi?bi.value:bi.textContent,Zr=!0)),C=$a(c,b),0<C.length&&(b=new Qd(b,t,null,n,f),h.push({event:b,listeners:C}),w?b.data=w:(w=N0(n),w!==null&&(b.data=w)))),(w=og?ag(t,n):lg(t,n))&&(c=$a(c,"onBeforeInput"),0<c.length&&(f=new Qd("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=w))}Y0(h,e)})}function So(t,e,n){return{instance:t,listener:e,currentTarget:n}}function $a(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ho(t,n),s!=null&&i.unshift(So(t,s,r)),s=ho(t,e),s!=null&&i.push(So(t,s,r))),t=t.return}return i}function Rr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ch(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ho(n,s),l!=null&&o.unshift(So(n,l,a))):r||(l=ho(n,s),l!=null&&o.push(So(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Mg=/\r\n?/g,Eg=/\u0000|\uFFFD/g;function uh(t){return(typeof t=="string"?t:""+t).replace(Mg,`
`).replace(Eg,"")}function Jo(t,e,n){if(e=uh(e),uh(t)!==e&&n)throw Error($(425))}function el(){}var mu=null,gu=null;function _u(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vu=typeof setTimeout=="function"?setTimeout:void 0,Ag=typeof clearTimeout=="function"?clearTimeout:void 0,fh=typeof Promise=="function"?Promise:void 0,Cg=typeof queueMicrotask=="function"?queueMicrotask:typeof fh<"u"?function(t){return fh.resolve(null).then(t).catch(wg)}:vu;function wg(t){setTimeout(function(){throw t})}function lc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),go(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);go(e)}function Fi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var bs=Math.random().toString(36).slice(2),zn="__reactFiber$"+bs,yo="__reactProps$"+bs,fi="__reactContainer$"+bs,xu="__reactEvents$"+bs,Tg="__reactListeners$"+bs,Rg="__reactHandles$"+bs;function fr(t){var e=t[zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fi]||n[zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dh(t);t!==null;){if(n=t[zn])return n;t=dh(t)}return e}t=n,n=t.parentNode}return null}function Io(t){return t=t[zn]||t[fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $r(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function Tl(t){return t[yo]||null}var Su=[],es=-1;function qi(t){return{current:t}}function nt(t){0>es||(t.current=Su[es],Su[es]=null,es--)}function $e(t,e){es++,Su[es]=t.current,t.current=e}var Wi={},kt=qi(Wi),Kt=qi(!1),vr=Wi;function vs(t,e){var n=t.type.contextTypes;if(!n)return Wi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Zt(t){return t=t.childContextTypes,t!=null}function tl(){nt(Kt),nt(kt)}function hh(t,e,n){if(kt.current!==Wi)throw Error($(168));$e(kt,e),$e(Kt,n)}function K0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error($(108,d1(t)||"Unknown",r));return at({},n,i)}function nl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Wi,vr=kt.current,$e(kt,t),$e(Kt,Kt.current),!0}function ph(t,e,n){var i=t.stateNode;if(!i)throw Error($(169));n?(t=K0(t,e,vr),i.__reactInternalMemoizedMergedChildContext=t,nt(Kt),nt(kt),$e(kt,t)):nt(Kt),$e(Kt,n)}var ni=null,Rl=!1,cc=!1;function Z0(t){ni===null?ni=[t]:ni.push(t)}function Pg(t){Rl=!0,Z0(t)}function Ki(){if(!cc&&ni!==null){cc=!0;var t=0,e=Qe;try{var n=ni;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ni=null,Rl=!1}catch(r){throw ni!==null&&(ni=ni.slice(t+1)),y0(If,Ki),r}finally{Qe=e,cc=!1}}return null}var ts=[],ns=0,il=null,rl=0,pn=[],mn=0,xr=null,ri=1,si="";function sr(t,e){ts[ns++]=rl,ts[ns++]=il,il=t,rl=e}function Q0(t,e,n){pn[mn++]=ri,pn[mn++]=si,pn[mn++]=xr,xr=t;var i=ri;t=si;var r=32-In(i)-1;i&=~(1<<r),n+=1;var s=32-In(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ri=1<<32-In(e)+r|n<<r|i,si=s+t}else ri=1<<s|n<<r|i,si=t}function Hf(t){t.return!==null&&(sr(t,1),Q0(t,1,0))}function Vf(t){for(;t===il;)il=ts[--ns],ts[ns]=null,rl=ts[--ns],ts[ns]=null;for(;t===xr;)xr=pn[--mn],pn[mn]=null,si=pn[--mn],pn[mn]=null,ri=pn[--mn],pn[mn]=null}var ln=null,an=null,it=!1,Pn=null;function J0(t,e){var n=_n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ln=t,an=Fi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ln=t,an=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xr!==null?{id:ri,overflow:si}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ln=t,an=null,!0):!1;default:return!1}}function yu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mu(t){if(it){var e=an;if(e){var n=e;if(!mh(t,e)){if(yu(t))throw Error($(418));e=Fi(n.nextSibling);var i=ln;e&&mh(t,e)?J0(i,n):(t.flags=t.flags&-4097|2,it=!1,ln=t)}}else{if(yu(t))throw Error($(418));t.flags=t.flags&-4097|2,it=!1,ln=t}}}function gh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ln=t}function $o(t){if(t!==ln)return!1;if(!it)return gh(t),it=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_u(t.type,t.memoizedProps)),e&&(e=an)){if(yu(t))throw $0(),Error($(418));for(;e;)J0(t,e),e=Fi(e.nextSibling)}if(gh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){an=Fi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}an=null}}else an=ln?Fi(t.stateNode.nextSibling):null;return!0}function $0(){for(var t=an;t;)t=Fi(t.nextSibling)}function xs(){an=ln=null,it=!1}function Gf(t){Pn===null?Pn=[t]:Pn.push(t)}var Lg=mi.ReactCurrentBatchConfig;function ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var i=n.stateNode}if(!i)throw Error($(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function ea(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _h(t){var e=t._init;return e(t._payload)}function em(t){function e(u,_){if(t){var g=u.deletions;g===null?(u.deletions=[_],u.flags|=16):g.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=zi(u,_),u.index=0,u.sibling=null,u}function s(u,_,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<_?(u.flags|=2,_):g):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,g,M){return _===null||_.tag!==6?(_=gc(g,u.mode,M),_.return=u,_):(_=r(_,g),_.return=u,_)}function l(u,_,g,M){var P=g.type;return P===Kr?f(u,_,g.props.children,M,g.key):_!==null&&(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===wi&&_h(P)===_.type)?(M=r(_,g.props),M.ref=ks(u,_,g),M.return=u,M):(M=ka(g.type,g.key,g.props,null,u.mode,M),M.ref=ks(u,_,g),M.return=u,M)}function c(u,_,g,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=_c(g,u.mode,M),_.return=u,_):(_=r(_,g.children||[]),_.return=u,_)}function f(u,_,g,M,P){return _===null||_.tag!==7?(_=_r(g,u.mode,M,P),_.return=u,_):(_=r(_,g),_.return=u,_)}function h(u,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=gc(""+_,u.mode,g),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Go:return g=ka(_.type,_.key,_.props,null,u.mode,g),g.ref=ks(u,null,_),g.return=u,g;case qr:return _=_c(_,u.mode,g),_.return=u,_;case wi:var M=_._init;return h(u,M(_._payload),g)}if(Zs(_)||Us(_))return _=_r(_,u.mode,g,null),_.return=u,_;ea(u,_)}return null}function d(u,_,g,M){var P=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:a(u,_,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Go:return g.key===P?l(u,_,g,M):null;case qr:return g.key===P?c(u,_,g,M):null;case wi:return P=g._init,d(u,_,P(g._payload),M)}if(Zs(g)||Us(g))return P!==null?null:f(u,_,g,M,null);ea(u,g)}return null}function p(u,_,g,M,P){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(g)||null,a(_,u,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Go:return u=u.get(M.key===null?g:M.key)||null,l(_,u,M,P);case qr:return u=u.get(M.key===null?g:M.key)||null,c(_,u,M,P);case wi:var C=M._init;return p(u,_,g,C(M._payload),P)}if(Zs(M)||Us(M))return u=u.get(g)||null,f(_,u,M,P,null);ea(_,M)}return null}function v(u,_,g,M){for(var P=null,C=null,w=_,b=_=0,A=null;w!==null&&b<g.length;b++){w.index>b?(A=w,w=null):A=w.sibling;var y=d(u,w,g[b],M);if(y===null){w===null&&(w=A);break}t&&w&&y.alternate===null&&e(u,w),_=s(y,_,b),C===null?P=y:C.sibling=y,C=y,w=A}if(b===g.length)return n(u,w),it&&sr(u,b),P;if(w===null){for(;b<g.length;b++)w=h(u,g[b],M),w!==null&&(_=s(w,_,b),C===null?P=w:C.sibling=w,C=w);return it&&sr(u,b),P}for(w=i(u,w);b<g.length;b++)A=p(w,u,b,g[b],M),A!==null&&(t&&A.alternate!==null&&w.delete(A.key===null?b:A.key),_=s(A,_,b),C===null?P=A:C.sibling=A,C=A);return t&&w.forEach(function(L){return e(u,L)}),it&&sr(u,b),P}function x(u,_,g,M){var P=Us(g);if(typeof P!="function")throw Error($(150));if(g=P.call(g),g==null)throw Error($(151));for(var C=P=null,w=_,b=_=0,A=null,y=g.next();w!==null&&!y.done;b++,y=g.next()){w.index>b?(A=w,w=null):A=w.sibling;var L=d(u,w,y.value,M);if(L===null){w===null&&(w=A);break}t&&w&&L.alternate===null&&e(u,w),_=s(L,_,b),C===null?P=L:C.sibling=L,C=L,w=A}if(y.done)return n(u,w),it&&sr(u,b),P;if(w===null){for(;!y.done;b++,y=g.next())y=h(u,y.value,M),y!==null&&(_=s(y,_,b),C===null?P=y:C.sibling=y,C=y);return it&&sr(u,b),P}for(w=i(u,w);!y.done;b++,y=g.next())y=p(w,u,b,y.value,M),y!==null&&(t&&y.alternate!==null&&w.delete(y.key===null?b:y.key),_=s(y,_,b),C===null?P=y:C.sibling=y,C=y);return t&&w.forEach(function(G){return e(u,G)}),it&&sr(u,b),P}function m(u,_,g,M){if(typeof g=="object"&&g!==null&&g.type===Kr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Go:e:{for(var P=g.key,C=_;C!==null;){if(C.key===P){if(P=g.type,P===Kr){if(C.tag===7){n(u,C.sibling),_=r(C,g.props.children),_.return=u,u=_;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===wi&&_h(P)===C.type){n(u,C.sibling),_=r(C,g.props),_.ref=ks(u,C,g),_.return=u,u=_;break e}n(u,C);break}else e(u,C);C=C.sibling}g.type===Kr?(_=_r(g.props.children,u.mode,M,g.key),_.return=u,u=_):(M=ka(g.type,g.key,g.props,null,u.mode,M),M.ref=ks(u,_,g),M.return=u,u=M)}return o(u);case qr:e:{for(C=g.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(u,_.sibling),_=r(_,g.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=_c(g,u.mode,M),_.return=u,u=_}return o(u);case wi:return C=g._init,m(u,_,C(g._payload),M)}if(Zs(g))return v(u,_,g,M);if(Us(g))return x(u,_,g,M);ea(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,g),_.return=u,u=_):(n(u,_),_=gc(g,u.mode,M),_.return=u,u=_),o(u)):n(u,_)}return m}var Ss=em(!0),tm=em(!1),sl=qi(null),ol=null,is=null,Wf=null;function Xf(){Wf=is=ol=null}function jf(t){var e=sl.current;nt(sl),t._currentValue=e}function Eu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function fs(t,e){ol=t,Wf=is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(qt=!0),t.firstContext=null)}function Sn(t){var e=t._currentValue;if(Wf!==t)if(t={context:t,memoizedValue:e,next:null},is===null){if(ol===null)throw Error($(308));is=t,ol.dependencies={lanes:0,firstContext:t}}else is=is.next=t;return e}var dr=null;function Yf(t){dr===null?dr=[t]:dr.push(t)}function nm(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Yf(e)):(n.next=r.next,r.next=n),e.interleaved=n,di(t,i)}function di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ti=!1;function qf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function im(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Oi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ve&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,di(t,n)}return r=i.interleaved,r===null?(e.next=e,Yf(i)):(e.next=r.next,r.next=e),i.interleaved=e,di(t,n)}function Da(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Df(t,n)}}function vh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function al(t,e,n,i){var r=t.updateQueue;Ti=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(d=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){h=v.call(p,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,d=typeof v=="function"?v.call(p,h,d):v,d==null)break e;h=at({},h,d);break e;case 2:Ti=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=h):f=f.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);yr|=o,t.lanes=o,t.memoizedState=h}}function xh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error($(191,r));r.call(i)}}}var Do={},Wn=qi(Do),Mo=qi(Do),Eo=qi(Do);function hr(t){if(t===Do)throw Error($(174));return t}function Kf(t,e){switch($e(Eo,e),$e(Mo,t),$e(Wn,Do),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:iu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=iu(e,t)}nt(Wn),$e(Wn,e)}function ys(){nt(Wn),nt(Mo),nt(Eo)}function rm(t){hr(Eo.current);var e=hr(Wn.current),n=iu(e,t.type);e!==n&&($e(Mo,t),$e(Wn,n))}function Zf(t){Mo.current===t&&(nt(Wn),nt(Mo))}var st=qi(0);function ll(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var uc=[];function Qf(){for(var t=0;t<uc.length;t++)uc[t]._workInProgressVersionPrimary=null;uc.length=0}var Ua=mi.ReactCurrentDispatcher,fc=mi.ReactCurrentBatchConfig,Sr=0,ot=null,St=null,wt=null,cl=!1,so=!1,Ao=0,bg=0;function Dt(){throw Error($(321))}function Jf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Un(t[n],e[n]))return!1;return!0}function $f(t,e,n,i,r,s){if(Sr=s,ot=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ua.current=t===null||t.memoizedState===null?Ng:Fg,t=n(i,r),so){s=0;do{if(so=!1,Ao=0,25<=s)throw Error($(301));s+=1,wt=St=null,e.updateQueue=null,Ua.current=Og,t=n(i,r)}while(so)}if(Ua.current=ul,e=St!==null&&St.next!==null,Sr=0,wt=St=ot=null,cl=!1,e)throw Error($(300));return t}function ed(){var t=Ao!==0;return Ao=0,t}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?ot.memoizedState=wt=t:wt=wt.next=t,wt}function yn(){if(St===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=wt===null?ot.memoizedState:wt.next;if(e!==null)wt=e,St=t;else{if(t===null)throw Error($(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},wt===null?ot.memoizedState=wt=t:wt=wt.next=t}return wt}function Co(t,e){return typeof e=="function"?e(t):e}function dc(t){var e=yn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var i=St,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Sr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,ot.lanes|=f,yr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Un(i,e.memoizedState)||(qt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ot.lanes|=s,yr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hc(t){var e=yn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Un(s,e.memoizedState)||(qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function sm(){}function om(t,e){var n=ot,i=yn(),r=e(),s=!Un(i.memoizedState,r);if(s&&(i.memoizedState=r,qt=!0),i=i.queue,td(cm.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||wt!==null&&wt.memoizedState.tag&1){if(n.flags|=2048,wo(9,lm.bind(null,n,i,r,e),void 0,null),Tt===null)throw Error($(349));Sr&30||am(n,e,r)}return r}function am(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function lm(t,e,n,i){e.value=n,e.getSnapshot=i,um(e)&&fm(t)}function cm(t,e,n){return n(function(){um(e)&&fm(t)})}function um(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Un(t,n)}catch{return!0}}function fm(t){var e=di(t,1);e!==null&&Dn(e,t,1,-1)}function Sh(t){var e=On();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:t},e.queue=t,t=t.dispatch=Ug.bind(null,ot,t),[e.memoizedState,t]}function wo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function dm(){return yn().memoizedState}function Na(t,e,n,i){var r=On();ot.flags|=t,r.memoizedState=wo(1|e,n,void 0,i===void 0?null:i)}function Pl(t,e,n,i){var r=yn();i=i===void 0?null:i;var s=void 0;if(St!==null){var o=St.memoizedState;if(s=o.destroy,i!==null&&Jf(i,o.deps)){r.memoizedState=wo(e,n,s,i);return}}ot.flags|=t,r.memoizedState=wo(1|e,n,s,i)}function yh(t,e){return Na(8390656,8,t,e)}function td(t,e){return Pl(2048,8,t,e)}function hm(t,e){return Pl(4,2,t,e)}function pm(t,e){return Pl(4,4,t,e)}function mm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gm(t,e,n){return n=n!=null?n.concat([t]):null,Pl(4,4,mm.bind(null,e,t),n)}function nd(){}function _m(t,e){var n=yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function vm(t,e){var n=yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function xm(t,e,n){return Sr&21?(Un(n,e)||(n=A0(),ot.lanes|=n,yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,qt=!0),t.memoizedState=n)}function Ig(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=fc.transition;fc.transition={};try{t(!1),e()}finally{Qe=n,fc.transition=i}}function Sm(){return yn().memoizedState}function Dg(t,e,n){var i=ki(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ym(t))Mm(e,n);else if(n=nm(t,e,n,i),n!==null){var r=Vt();Dn(n,t,i,r),Em(n,e,i)}}function Ug(t,e,n){var i=ki(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ym(t))Mm(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Un(a,o)){var l=e.interleaved;l===null?(r.next=r,Yf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=nm(t,e,r,i),n!==null&&(r=Vt(),Dn(n,t,i,r),Em(n,e,i))}}function ym(t){var e=t.alternate;return t===ot||e!==null&&e===ot}function Mm(t,e){so=cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Em(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Df(t,n)}}var ul={readContext:Sn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},Ng={readContext:Sn,useCallback:function(t,e){return On().memoizedState=[t,e===void 0?null:e],t},useContext:Sn,useEffect:yh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Na(4194308,4,mm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Na(4194308,4,t,e)},useInsertionEffect:function(t,e){return Na(4,2,t,e)},useMemo:function(t,e){var n=On();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=On();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Dg.bind(null,ot,t),[i.memoizedState,t]},useRef:function(t){var e=On();return t={current:t},e.memoizedState=t},useState:Sh,useDebugValue:nd,useDeferredValue:function(t){return On().memoizedState=t},useTransition:function(){var t=Sh(!1),e=t[0];return t=Ig.bind(null,t[1]),On().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ot,r=On();if(it){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),Tt===null)throw Error($(349));Sr&30||am(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,yh(cm.bind(null,i,s,t),[t]),i.flags|=2048,wo(9,lm.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=On(),e=Tt.identifierPrefix;if(it){var n=si,i=ri;n=(i&~(1<<32-In(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ao++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=bg++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Fg={readContext:Sn,useCallback:_m,useContext:Sn,useEffect:td,useImperativeHandle:gm,useInsertionEffect:hm,useLayoutEffect:pm,useMemo:vm,useReducer:dc,useRef:dm,useState:function(){return dc(Co)},useDebugValue:nd,useDeferredValue:function(t){var e=yn();return xm(e,St.memoizedState,t)},useTransition:function(){var t=dc(Co)[0],e=yn().memoizedState;return[t,e]},useMutableSource:sm,useSyncExternalStore:om,useId:Sm,unstable_isNewReconciler:!1},Og={readContext:Sn,useCallback:_m,useContext:Sn,useEffect:td,useImperativeHandle:gm,useInsertionEffect:hm,useLayoutEffect:pm,useMemo:vm,useReducer:hc,useRef:dm,useState:function(){return hc(Co)},useDebugValue:nd,useDeferredValue:function(t){var e=yn();return St===null?e.memoizedState=t:xm(e,St.memoizedState,t)},useTransition:function(){var t=hc(Co)[0],e=yn().memoizedState;return[t,e]},useMutableSource:sm,useSyncExternalStore:om,useId:Sm,unstable_isNewReconciler:!1};function Tn(t,e){if(t&&t.defaultProps){e=at({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Au(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:at({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ll={isMounted:function(t){return(t=t._reactInternals)?wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Vt(),r=ki(t),s=li(i,r);s.payload=e,n!=null&&(s.callback=n),e=Oi(t,s,r),e!==null&&(Dn(e,t,r,i),Da(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Vt(),r=ki(t),s=li(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Oi(t,s,r),e!==null&&(Dn(e,t,r,i),Da(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Vt(),i=ki(t),r=li(n,i);r.tag=2,e!=null&&(r.callback=e),e=Oi(t,r,i),e!==null&&(Dn(e,t,i,n),Da(e,t,i))}};function Mh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!vo(n,i)||!vo(r,s):!0}function Am(t,e,n){var i=!1,r=Wi,s=e.contextType;return typeof s=="object"&&s!==null?s=Sn(s):(r=Zt(e)?vr:kt.current,i=e.contextTypes,s=(i=i!=null)?vs(t,r):Wi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ll,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Eh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ll.enqueueReplaceState(e,e.state,null)}function Cu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},qf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Sn(s):(s=Zt(e)?vr:kt.current,r.context=vs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Au(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ll.enqueueReplaceState(r,r.state,null),al(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ms(t,e){try{var n="",i=e;do n+=f1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function pc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Bg=typeof WeakMap=="function"?WeakMap:Map;function Cm(t,e,n){n=li(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){dl||(dl=!0,Fu=i),wu(t,e)},n}function wm(t,e,n){n=li(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){wu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wu(t,e),typeof i!="function"&&(Bi===null?Bi=new Set([this]):Bi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ah(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Bg;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Jg.bind(null,t,e,n),e.then(t,t))}function Ch(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=li(-1,1),e.tag=2,Oi(n,e,1))),n.lanes|=1),t)}var kg=mi.ReactCurrentOwner,qt=!1;function Ht(t,e,n,i){e.child=t===null?tm(e,null,n,i):Ss(e,t.child,n,i)}function Th(t,e,n,i,r){n=n.render;var s=e.ref;return fs(e,r),i=$f(t,e,n,i,s,r),n=ed(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hi(t,e,r)):(it&&n&&Hf(e),e.flags|=1,Ht(t,e,i,r),e.child)}function Rh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!ud(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Tm(t,e,s,i,r)):(t=ka(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(o,i)&&t.ref===e.ref)return hi(t,e,r)}return e.flags|=1,t=zi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Tm(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(vo(s,i)&&t.ref===e.ref)if(qt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(qt=!0);else return e.lanes=t.lanes,hi(t,e,r)}return Tu(t,e,n,i,r)}function Rm(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(ss,on),on|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,$e(ss,on),on|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,$e(ss,on),on|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,$e(ss,on),on|=i;return Ht(t,e,r,n),e.child}function Pm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Tu(t,e,n,i,r){var s=Zt(n)?vr:kt.current;return s=vs(e,s),fs(e,r),n=$f(t,e,n,i,s,r),i=ed(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hi(t,e,r)):(it&&i&&Hf(e),e.flags|=1,Ht(t,e,n,r),e.child)}function Ph(t,e,n,i,r){if(Zt(n)){var s=!0;nl(e)}else s=!1;if(fs(e,r),e.stateNode===null)Fa(t,e),Am(e,n,i),Cu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Sn(c):(c=Zt(n)?vr:kt.current,c=vs(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Eh(e,o,i,c),Ti=!1;var d=e.memoizedState;o.state=d,al(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Kt.current||Ti?(typeof f=="function"&&(Au(e,n,f,i),l=e.memoizedState),(a=Ti||Mh(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,im(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Tn(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Sn(l):(l=Zt(n)?vr:kt.current,l=vs(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Eh(e,o,i,l),Ti=!1,d=e.memoizedState,o.state=d,al(e,i,o,r);var v=e.memoizedState;a!==h||d!==v||Kt.current||Ti?(typeof p=="function"&&(Au(e,n,p,i),v=e.memoizedState),(c=Ti||Mh(e,n,c,i,d,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Ru(t,e,n,i,s,r)}function Ru(t,e,n,i,r,s){Pm(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&ph(e,n,!1),hi(t,e,s);i=e.stateNode,kg.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ss(e,t.child,null,s),e.child=Ss(e,null,a,s)):Ht(t,e,a,s),e.memoizedState=i.state,r&&ph(e,n,!0),e.child}function Lm(t){var e=t.stateNode;e.pendingContext?hh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hh(t,e.context,!1),Kf(t,e.containerInfo)}function Lh(t,e,n,i,r){return xs(),Gf(r),e.flags|=256,Ht(t,e,n,i),e.child}var Pu={dehydrated:null,treeContext:null,retryLane:0};function Lu(t){return{baseLanes:t,cachePool:null,transitions:null}}function bm(t,e,n){var i=e.pendingProps,r=st.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),$e(st,r&1),t===null)return Mu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dl(o,i,0,null),t=_r(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Lu(n),e.memoizedState=Pu,t):id(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return zg(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=zi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=zi(a,s):(s=_r(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Lu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Pu,i}return s=t.child,t=s.sibling,i=zi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function id(t,e){return e=Dl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ta(t,e,n,i){return i!==null&&Gf(i),Ss(e,t.child,null,n),t=id(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zg(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=pc(Error($(422))),ta(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Dl({mode:"visible",children:i.children},r,0,null),s=_r(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ss(e,t.child,null,o),e.child.memoizedState=Lu(o),e.memoizedState=Pu,s);if(!(e.mode&1))return ta(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error($(419)),i=pc(s,i,void 0),ta(t,e,o,i)}if(a=(o&t.childLanes)!==0,qt||a){if(i=Tt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,di(t,r),Dn(i,t,r,-1))}return cd(),i=pc(Error($(421))),ta(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=$g.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,an=Fi(r.nextSibling),ln=e,it=!0,Pn=null,t!==null&&(pn[mn++]=ri,pn[mn++]=si,pn[mn++]=xr,ri=t.id,si=t.overflow,xr=e),e=id(e,i.children),e.flags|=4096,e)}function bh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Eu(t.return,e,n)}function mc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Im(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Ht(t,e,i.children,n),i=st.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bh(t,n,e);else if(t.tag===19)bh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if($e(st,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ll(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),mc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ll(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}mc(e,!0,n,null,s);break;case"together":mc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function hi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=zi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Hg(t,e,n){switch(e.tag){case 3:Lm(e),xs();break;case 5:rm(e);break;case 1:Zt(e.type)&&nl(e);break;case 4:Kf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;$e(sl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?($e(st,st.current&1),e.flags|=128,null):n&e.child.childLanes?bm(t,e,n):($e(st,st.current&1),t=hi(t,e,n),t!==null?t.sibling:null);$e(st,st.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Im(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),$e(st,st.current),i)break;return null;case 22:case 23:return e.lanes=0,Rm(t,e,n)}return hi(t,e,n)}var Dm,bu,Um,Nm;Dm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bu=function(){};Um=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,hr(Wn.current);var s=null;switch(n){case"input":r=$c(t,r),i=$c(t,i),s=[];break;case"select":r=at({},r,{value:void 0}),i=at({},i,{value:void 0}),s=[];break;case"textarea":r=nu(t,r),i=nu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=el)}ru(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(uo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(uo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&et("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Nm=function(t,e,n,i){n!==i&&(e.flags|=4)};function zs(t,e){if(!it)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Vg(t,e,n){var i=e.pendingProps;switch(Vf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(e),null;case 1:return Zt(e.type)&&tl(),Ut(e),null;case 3:return i=e.stateNode,ys(),nt(Kt),nt(kt),Qf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&($o(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Pn!==null&&(ku(Pn),Pn=null))),bu(t,e),Ut(e),null;case 5:Zf(e);var r=hr(Eo.current);if(n=e.type,t!==null&&e.stateNode!=null)Um(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error($(166));return Ut(e),null}if(t=hr(Wn.current),$o(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[zn]=e,i[yo]=s,t=(e.mode&1)!==0,n){case"dialog":et("cancel",i),et("close",i);break;case"iframe":case"object":case"embed":et("load",i);break;case"video":case"audio":for(r=0;r<Js.length;r++)et(Js[r],i);break;case"source":et("error",i);break;case"img":case"image":case"link":et("error",i),et("load",i);break;case"details":et("toggle",i);break;case"input":zd(i,s),et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},et("invalid",i);break;case"textarea":Vd(i,s),et("invalid",i)}ru(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Jo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Jo(i.textContent,a,t),r=["children",""+a]):uo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&et("scroll",i)}switch(n){case"input":Wo(i),Hd(i,s,!0);break;case"textarea":Wo(i),Gd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=el)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=c0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[zn]=e,t[yo]=i,Dm(t,e,!1,!1),e.stateNode=t;e:{switch(o=su(n,i),n){case"dialog":et("cancel",t),et("close",t),r=i;break;case"iframe":case"object":case"embed":et("load",t),r=i;break;case"video":case"audio":for(r=0;r<Js.length;r++)et(Js[r],t);r=i;break;case"source":et("error",t),r=i;break;case"img":case"image":case"link":et("error",t),et("load",t),r=i;break;case"details":et("toggle",t),r=i;break;case"input":zd(t,i),r=$c(t,i),et("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=at({},i,{value:void 0}),et("invalid",t);break;case"textarea":Vd(t,i),r=nu(t,i),et("invalid",t);break;default:r=i}ru(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?d0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&u0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&fo(t,l):typeof l=="number"&&fo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(uo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&et("scroll",t):l!=null&&Tf(t,s,l,o))}switch(n){case"input":Wo(t),Hd(t,i,!1);break;case"textarea":Wo(t),Gd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Gi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?as(t,!!i.multiple,s,!1):i.defaultValue!=null&&as(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=el)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ut(e),null;case 6:if(t&&e.stateNode!=null)Nm(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error($(166));if(n=hr(Eo.current),hr(Wn.current),$o(e)){if(i=e.stateNode,n=e.memoizedProps,i[zn]=e,(s=i.nodeValue!==n)&&(t=ln,t!==null))switch(t.tag){case 3:Jo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Jo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[zn]=e,e.stateNode=i}return Ut(e),null;case 13:if(nt(st),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(it&&an!==null&&e.mode&1&&!(e.flags&128))$0(),xs(),e.flags|=98560,s=!1;else if(s=$o(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[zn]=e}else xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ut(e),s=!1}else Pn!==null&&(ku(Pn),Pn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||st.current&1?Mt===0&&(Mt=3):cd())),e.updateQueue!==null&&(e.flags|=4),Ut(e),null);case 4:return ys(),bu(t,e),t===null&&xo(e.stateNode.containerInfo),Ut(e),null;case 10:return jf(e.type._context),Ut(e),null;case 17:return Zt(e.type)&&tl(),Ut(e),null;case 19:if(nt(st),s=e.memoizedState,s===null)return Ut(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)zs(s,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ll(t),o!==null){for(e.flags|=128,zs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return $e(st,st.current&1|2),e.child}t=t.sibling}s.tail!==null&&dt()>Es&&(e.flags|=128,i=!0,zs(s,!1),e.lanes=4194304)}else{if(!i)if(t=ll(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!it)return Ut(e),null}else 2*dt()-s.renderingStartTime>Es&&n!==1073741824&&(e.flags|=128,i=!0,zs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=dt(),e.sibling=null,n=st.current,$e(st,i?n&1|2:n&1),e):(Ut(e),null);case 22:case 23:return ld(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?on&1073741824&&(Ut(e),e.subtreeFlags&6&&(e.flags|=8192)):Ut(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function Gg(t,e){switch(Vf(e),e.tag){case 1:return Zt(e.type)&&tl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ys(),nt(Kt),nt(kt),Qf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Zf(e),null;case 13:if(nt(st),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return nt(st),null;case 4:return ys(),null;case 10:return jf(e.type._context),null;case 22:case 23:return ld(),null;case 24:return null;default:return null}}var na=!1,Ot=!1,Wg=typeof WeakSet=="function"?WeakSet:Set,he=null;function rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ft(t,e,i)}else n.current=null}function Iu(t,e,n){try{n()}catch(i){ft(t,e,i)}}var Ih=!1;function Xg(t,e){if(mu=Qa,t=z0(),zf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++f===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(gu={focusedElem:t,selectionRange:n},Qa=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:Tn(e.type,x),m);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(M){ft(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return v=Ih,Ih=!1,v}function oo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Iu(e,n,s)}r=r.next}while(r!==i)}}function bl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Du(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Fm(t){var e=t.alternate;e!==null&&(t.alternate=null,Fm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[zn],delete e[yo],delete e[xu],delete e[Tg],delete e[Rg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Om(t){return t.tag===5||t.tag===3||t.tag===4}function Dh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Om(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=el));else if(i!==4&&(t=t.child,t!==null))for(Uu(t,e,n),t=t.sibling;t!==null;)Uu(t,e,n),t=t.sibling}function Nu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Nu(t,e,n),t=t.sibling;t!==null;)Nu(t,e,n),t=t.sibling}var Lt=null,Rn=!1;function _i(t,e,n){for(n=n.child;n!==null;)Bm(t,e,n),n=n.sibling}function Bm(t,e,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(El,n)}catch{}switch(n.tag){case 5:Ot||rs(n,e);case 6:var i=Lt,r=Rn;Lt=null,_i(t,e,n),Lt=i,Rn=r,Lt!==null&&(Rn?(t=Lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Lt.removeChild(n.stateNode));break;case 18:Lt!==null&&(Rn?(t=Lt,n=n.stateNode,t.nodeType===8?lc(t.parentNode,n):t.nodeType===1&&lc(t,n),go(t)):lc(Lt,n.stateNode));break;case 4:i=Lt,r=Rn,Lt=n.stateNode.containerInfo,Rn=!0,_i(t,e,n),Lt=i,Rn=r;break;case 0:case 11:case 14:case 15:if(!Ot&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Iu(n,e,o),r=r.next}while(r!==i)}_i(t,e,n);break;case 1:if(!Ot&&(rs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ft(n,e,a)}_i(t,e,n);break;case 21:_i(t,e,n);break;case 22:n.mode&1?(Ot=(i=Ot)||n.memoizedState!==null,_i(t,e,n),Ot=i):_i(t,e,n);break;default:_i(t,e,n)}}function Uh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Wg),e.forEach(function(i){var r=e_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function En(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Lt=a.stateNode,Rn=!1;break e;case 3:Lt=a.stateNode.containerInfo,Rn=!0;break e;case 4:Lt=a.stateNode.containerInfo,Rn=!0;break e}a=a.return}if(Lt===null)throw Error($(160));Bm(s,o,r),Lt=null,Rn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){ft(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)km(e,t),e=e.sibling}function km(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(En(e,t),Fn(t),i&4){try{oo(3,t,t.return),bl(3,t)}catch(x){ft(t,t.return,x)}try{oo(5,t,t.return)}catch(x){ft(t,t.return,x)}}break;case 1:En(e,t),Fn(t),i&512&&n!==null&&rs(n,n.return);break;case 5:if(En(e,t),Fn(t),i&512&&n!==null&&rs(n,n.return),t.flags&32){var r=t.stateNode;try{fo(r,"")}catch(x){ft(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&a0(r,s),su(a,o);var c=su(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?d0(r,h):f==="dangerouslySetInnerHTML"?u0(r,h):f==="children"?fo(r,h):Tf(r,f,h,c)}switch(a){case"input":eu(r,s);break;case"textarea":l0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?as(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?as(r,!!s.multiple,s.defaultValue,!0):as(r,!!s.multiple,s.multiple?[]:"",!1))}r[yo]=s}catch(x){ft(t,t.return,x)}}break;case 6:if(En(e,t),Fn(t),i&4){if(t.stateNode===null)throw Error($(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){ft(t,t.return,x)}}break;case 3:if(En(e,t),Fn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{go(e.containerInfo)}catch(x){ft(t,t.return,x)}break;case 4:En(e,t),Fn(t);break;case 13:En(e,t),Fn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(od=dt())),i&4&&Uh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ot=(c=Ot)||f,En(e,t),Ot=c):En(e,t),Fn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(he=t,f=t.child;f!==null;){for(h=he=f;he!==null;){switch(d=he,p=d.child,d.tag){case 0:case 11:case 14:case 15:oo(4,d,d.return);break;case 1:rs(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){ft(i,n,x)}}break;case 5:rs(d,d.return);break;case 22:if(d.memoizedState!==null){Fh(h);continue}}p!==null?(p.return=d,he=p):Fh(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=f0("display",o))}catch(x){ft(t,t.return,x)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){ft(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:En(e,t),Fn(t),i&4&&Uh(t);break;case 21:break;default:En(e,t),Fn(t)}}function Fn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Om(n)){var i=n;break e}n=n.return}throw Error($(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(fo(r,""),i.flags&=-33);var s=Dh(t);Nu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Dh(t);Uu(t,a,o);break;default:throw Error($(161))}}catch(l){ft(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jg(t,e,n){he=t,zm(t)}function zm(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||na;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ot;a=na;var c=Ot;if(na=o,(Ot=l)&&!c)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?Oh(r):l!==null?(l.return=o,he=l):Oh(r);for(;s!==null;)he=s,zm(s),s=s.sibling;he=r,na=a,Ot=c}Nh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):Nh(t)}}function Nh(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||bl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ot)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Tn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&go(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Ot||e.flags&512&&Du(e)}catch(d){ft(e,e.return,d)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function Fh(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function Oh(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{bl(4,e)}catch(l){ft(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ft(e,r,l)}}var s=e.return;try{Du(e)}catch(l){ft(e,s,l)}break;case 5:var o=e.return;try{Du(e)}catch(l){ft(e,o,l)}}}catch(l){ft(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var Yg=Math.ceil,fl=mi.ReactCurrentDispatcher,rd=mi.ReactCurrentOwner,xn=mi.ReactCurrentBatchConfig,Ve=0,Tt=null,xt=null,bt=0,on=0,ss=qi(0),Mt=0,To=null,yr=0,Il=0,sd=0,ao=null,jt=null,od=0,Es=1/0,ti=null,dl=!1,Fu=null,Bi=null,ia=!1,Ii=null,hl=0,lo=0,Ou=null,Oa=-1,Ba=0;function Vt(){return Ve&6?dt():Oa!==-1?Oa:Oa=dt()}function ki(t){return t.mode&1?Ve&2&&bt!==0?bt&-bt:Lg.transition!==null?(Ba===0&&(Ba=A0()),Ba):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:b0(t.type)),t):1}function Dn(t,e,n,i){if(50<lo)throw lo=0,Ou=null,Error($(185));Lo(t,n,i),(!(Ve&2)||t!==Tt)&&(t===Tt&&(!(Ve&2)&&(Il|=n),Mt===4&&Pi(t,bt)),Qt(t,i),n===1&&Ve===0&&!(e.mode&1)&&(Es=dt()+500,Rl&&Ki()))}function Qt(t,e){var n=t.callbackNode;L1(t,e);var i=Za(t,t===Tt?bt:0);if(i===0)n!==null&&jd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&jd(n),e===1)t.tag===0?Pg(Bh.bind(null,t)):Z0(Bh.bind(null,t)),Cg(function(){!(Ve&6)&&Ki()}),n=null;else{switch(C0(i)){case 1:n=If;break;case 4:n=M0;break;case 16:n=Ka;break;case 536870912:n=E0;break;default:n=Ka}n=qm(n,Hm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Hm(t,e){if(Oa=-1,Ba=0,Ve&6)throw Error($(327));var n=t.callbackNode;if(ds()&&t.callbackNode!==n)return null;var i=Za(t,t===Tt?bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=pl(t,i);else{e=i;var r=Ve;Ve|=2;var s=Gm();(Tt!==t||bt!==e)&&(ti=null,Es=dt()+500,gr(t,e));do try{Zg();break}catch(a){Vm(t,a)}while(!0);Xf(),fl.current=s,Ve=r,xt!==null?e=0:(Tt=null,bt=0,e=Mt)}if(e!==0){if(e===2&&(r=uu(t),r!==0&&(i=r,e=Bu(t,r))),e===1)throw n=To,gr(t,0),Pi(t,i),Qt(t,dt()),n;if(e===6)Pi(t,i);else{if(r=t.current.alternate,!(i&30)&&!qg(r)&&(e=pl(t,i),e===2&&(s=uu(t),s!==0&&(i=s,e=Bu(t,s))),e===1))throw n=To,gr(t,0),Pi(t,i),Qt(t,dt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error($(345));case 2:or(t,jt,ti);break;case 3:if(Pi(t,i),(i&130023424)===i&&(e=od+500-dt(),10<e)){if(Za(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Vt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=vu(or.bind(null,t,jt,ti),e);break}or(t,jt,ti);break;case 4:if(Pi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-In(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Yg(i/1960))-i,10<i){t.timeoutHandle=vu(or.bind(null,t,jt,ti),i);break}or(t,jt,ti);break;case 5:or(t,jt,ti);break;default:throw Error($(329))}}}return Qt(t,dt()),t.callbackNode===n?Hm.bind(null,t):null}function Bu(t,e){var n=ao;return t.current.memoizedState.isDehydrated&&(gr(t,e).flags|=256),t=pl(t,e),t!==2&&(e=jt,jt=n,e!==null&&ku(e)),t}function ku(t){jt===null?jt=t:jt.push.apply(jt,t)}function qg(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Un(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pi(t,e){for(e&=~sd,e&=~Il,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-In(e),i=1<<n;t[n]=-1,e&=~i}}function Bh(t){if(Ve&6)throw Error($(327));ds();var e=Za(t,0);if(!(e&1))return Qt(t,dt()),null;var n=pl(t,e);if(t.tag!==0&&n===2){var i=uu(t);i!==0&&(e=i,n=Bu(t,i))}if(n===1)throw n=To,gr(t,0),Pi(t,e),Qt(t,dt()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,or(t,jt,ti),Qt(t,dt()),null}function ad(t,e){var n=Ve;Ve|=1;try{return t(e)}finally{Ve=n,Ve===0&&(Es=dt()+500,Rl&&Ki())}}function Mr(t){Ii!==null&&Ii.tag===0&&!(Ve&6)&&ds();var e=Ve;Ve|=1;var n=xn.transition,i=Qe;try{if(xn.transition=null,Qe=1,t)return t()}finally{Qe=i,xn.transition=n,Ve=e,!(Ve&6)&&Ki()}}function ld(){on=ss.current,nt(ss)}function gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ag(n)),xt!==null)for(n=xt.return;n!==null;){var i=n;switch(Vf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&tl();break;case 3:ys(),nt(Kt),nt(kt),Qf();break;case 5:Zf(i);break;case 4:ys();break;case 13:nt(st);break;case 19:nt(st);break;case 10:jf(i.type._context);break;case 22:case 23:ld()}n=n.return}if(Tt=t,xt=t=zi(t.current,null),bt=on=e,Mt=0,To=null,sd=Il=yr=0,jt=ao=null,dr!==null){for(e=0;e<dr.length;e++)if(n=dr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}dr=null}return t}function Vm(t,e){do{var n=xt;try{if(Xf(),Ua.current=ul,cl){for(var i=ot.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}cl=!1}if(Sr=0,wt=St=ot=null,so=!1,Ao=0,rd.current=null,n===null||n.return===null){Mt=1,To=e,xt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Ch(o);if(p!==null){p.flags&=-257,wh(p,o,a,s,e),p.mode&1&&Ah(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){Ah(s,c,e),cd();break e}l=Error($(426))}}else if(it&&a.mode&1){var m=Ch(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),wh(m,o,a,s,e),Gf(Ms(l,a));break e}}s=l=Ms(l,a),Mt!==4&&(Mt=2),ao===null?ao=[s]:ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Cm(s,l,e);vh(s,u);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Bi===null||!Bi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=wm(s,a,e);vh(s,M);break e}}s=s.return}while(s!==null)}Xm(n)}catch(P){e=P,xt===n&&n!==null&&(xt=n=n.return);continue}break}while(!0)}function Gm(){var t=fl.current;return fl.current=ul,t===null?ul:t}function cd(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),Tt===null||!(yr&268435455)&&!(Il&268435455)||Pi(Tt,bt)}function pl(t,e){var n=Ve;Ve|=2;var i=Gm();(Tt!==t||bt!==e)&&(ti=null,gr(t,e));do try{Kg();break}catch(r){Vm(t,r)}while(!0);if(Xf(),Ve=n,fl.current=i,xt!==null)throw Error($(261));return Tt=null,bt=0,Mt}function Kg(){for(;xt!==null;)Wm(xt)}function Zg(){for(;xt!==null&&!y1();)Wm(xt)}function Wm(t){var e=Ym(t.alternate,t,on);t.memoizedProps=t.pendingProps,e===null?Xm(t):xt=e,rd.current=null}function Xm(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Gg(n,e),n!==null){n.flags&=32767,xt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,xt=null;return}}else if(n=Vg(n,e,on),n!==null){xt=n;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);Mt===0&&(Mt=5)}function or(t,e,n){var i=Qe,r=xn.transition;try{xn.transition=null,Qe=1,Qg(t,e,n,i)}finally{xn.transition=r,Qe=i}return null}function Qg(t,e,n,i){do ds();while(Ii!==null);if(Ve&6)throw Error($(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(b1(t,s),t===Tt&&(xt=Tt=null,bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ia||(ia=!0,qm(Ka,function(){return ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xn.transition,xn.transition=null;var o=Qe;Qe=1;var a=Ve;Ve|=4,rd.current=null,Xg(t,n),km(n,t),_g(gu),Qa=!!mu,gu=mu=null,t.current=n,jg(n),M1(),Ve=a,Qe=o,xn.transition=s}else t.current=n;if(ia&&(ia=!1,Ii=t,hl=r),s=t.pendingLanes,s===0&&(Bi=null),C1(n.stateNode),Qt(t,dt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(dl)throw dl=!1,t=Fu,Fu=null,t;return hl&1&&t.tag!==0&&ds(),s=t.pendingLanes,s&1?t===Ou?lo++:(lo=0,Ou=t):lo=0,Ki(),null}function ds(){if(Ii!==null){var t=C0(hl),e=xn.transition,n=Qe;try{if(xn.transition=null,Qe=16>t?16:t,Ii===null)var i=!1;else{if(t=Ii,Ii=null,hl=0,Ve&6)throw Error($(331));var r=Ve;for(Ve|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(he=c;he!==null;){var f=he;switch(f.tag){case 0:case 11:case 15:oo(8,f,s)}var h=f.child;if(h!==null)h.return=f,he=h;else for(;he!==null;){f=he;var d=f.sibling,p=f.return;if(Fm(f),f===c){he=null;break}if(d!==null){d.return=p,he=d;break}he=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,he=u;break e}he=s.return}}var _=t.current;for(he=_;he!==null;){o=he;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,he=g;else e:for(o=_;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:bl(9,a)}}catch(P){ft(a,a.return,P)}if(a===o){he=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,he=M;break e}he=a.return}}if(Ve=r,Ki(),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(El,t)}catch{}i=!0}return i}finally{Qe=n,xn.transition=e}}return!1}function kh(t,e,n){e=Ms(n,e),e=Cm(t,e,1),t=Oi(t,e,1),e=Vt(),t!==null&&(Lo(t,1,e),Qt(t,e))}function ft(t,e,n){if(t.tag===3)kh(t,t,n);else for(;e!==null;){if(e.tag===3){kh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Bi===null||!Bi.has(i))){t=Ms(n,t),t=wm(e,t,1),e=Oi(e,t,1),t=Vt(),e!==null&&(Lo(e,1,t),Qt(e,t));break}}e=e.return}}function Jg(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Vt(),t.pingedLanes|=t.suspendedLanes&n,Tt===t&&(bt&n)===n&&(Mt===4||Mt===3&&(bt&130023424)===bt&&500>dt()-od?gr(t,0):sd|=n),Qt(t,e)}function jm(t,e){e===0&&(t.mode&1?(e=Yo,Yo<<=1,!(Yo&130023424)&&(Yo=4194304)):e=1);var n=Vt();t=di(t,e),t!==null&&(Lo(t,e,n),Qt(t,n))}function $g(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jm(t,n)}function e_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error($(314))}i!==null&&i.delete(e),jm(t,n)}var Ym;Ym=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Kt.current)qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return qt=!1,Hg(t,e,n);qt=!!(t.flags&131072)}else qt=!1,it&&e.flags&1048576&&Q0(e,rl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Fa(t,e),t=e.pendingProps;var r=vs(e,kt.current);fs(e,n),r=$f(null,e,i,t,r,n);var s=ed();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zt(i)?(s=!0,nl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,qf(e),r.updater=Ll,e.stateNode=r,r._reactInternals=e,Cu(e,i,t,n),e=Ru(null,e,i,!0,s,n)):(e.tag=0,it&&s&&Hf(e),Ht(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Fa(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=n_(i),t=Tn(i,t),r){case 0:e=Tu(null,e,i,t,n);break e;case 1:e=Ph(null,e,i,t,n);break e;case 11:e=Th(null,e,i,t,n);break e;case 14:e=Rh(null,e,i,Tn(i.type,t),n);break e}throw Error($(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Tn(i,r),Tu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Tn(i,r),Ph(t,e,i,r,n);case 3:e:{if(Lm(e),t===null)throw Error($(387));i=e.pendingProps,s=e.memoizedState,r=s.element,im(t,e),al(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ms(Error($(423)),e),e=Lh(t,e,i,n,r);break e}else if(i!==r){r=Ms(Error($(424)),e),e=Lh(t,e,i,n,r);break e}else for(an=Fi(e.stateNode.containerInfo.firstChild),ln=e,it=!0,Pn=null,n=tm(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xs(),i===r){e=hi(t,e,n);break e}Ht(t,e,i,n)}e=e.child}return e;case 5:return rm(e),t===null&&Mu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,_u(i,r)?o=null:s!==null&&_u(i,s)&&(e.flags|=32),Pm(t,e),Ht(t,e,o,n),e.child;case 6:return t===null&&Mu(e),null;case 13:return bm(t,e,n);case 4:return Kf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ss(e,null,i,n):Ht(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Tn(i,r),Th(t,e,i,r,n);case 7:return Ht(t,e,e.pendingProps,n),e.child;case 8:return Ht(t,e,e.pendingProps.children,n),e.child;case 12:return Ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,$e(sl,i._currentValue),i._currentValue=o,s!==null)if(Un(s.value,o)){if(s.children===r.children&&!Kt.current){e=hi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=li(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Eu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Eu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ht(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,fs(e,n),r=Sn(r),i=i(r),e.flags|=1,Ht(t,e,i,n),e.child;case 14:return i=e.type,r=Tn(i,e.pendingProps),r=Tn(i.type,r),Rh(t,e,i,r,n);case 15:return Tm(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Tn(i,r),Fa(t,e),e.tag=1,Zt(i)?(t=!0,nl(e)):t=!1,fs(e,n),Am(e,i,r),Cu(e,i,r,n),Ru(null,e,i,!0,t,n);case 19:return Im(t,e,n);case 22:return Rm(t,e,n)}throw Error($(156,e.tag))};function qm(t,e){return y0(t,e)}function t_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(t,e,n,i){return new t_(t,e,n,i)}function ud(t){return t=t.prototype,!(!t||!t.isReactComponent)}function n_(t){if(typeof t=="function")return ud(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pf)return 11;if(t===Lf)return 14}return 2}function zi(t,e){var n=t.alternate;return n===null?(n=_n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ka(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")ud(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Kr:return _r(n.children,r,s,e);case Rf:o=8,r|=8;break;case Kc:return t=_n(12,n,e,r|2),t.elementType=Kc,t.lanes=s,t;case Zc:return t=_n(13,n,e,r),t.elementType=Zc,t.lanes=s,t;case Qc:return t=_n(19,n,e,r),t.elementType=Qc,t.lanes=s,t;case r0:return Dl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case n0:o=10;break e;case i0:o=9;break e;case Pf:o=11;break e;case Lf:o=14;break e;case wi:o=16,i=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=_n(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function _r(t,e,n,i){return t=_n(7,t,i,e),t.lanes=n,t}function Dl(t,e,n,i){return t=_n(22,t,i,e),t.elementType=r0,t.lanes=n,t.stateNode={isHidden:!1},t}function gc(t,e,n){return t=_n(6,t,null,e),t.lanes=n,t}function _c(t,e,n){return e=_n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function i_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ql(0),this.expirationTimes=Ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ql(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function fd(t,e,n,i,r,s,o,a,l){return t=new i_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=_n(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qf(s),t}function r_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Km(t){if(!t)return Wi;t=t._reactInternals;e:{if(wr(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(Zt(n))return K0(t,n,e)}return e}function Zm(t,e,n,i,r,s,o,a,l){return t=fd(n,i,!0,t,r,s,o,a,l),t.context=Km(null),n=t.current,i=Vt(),r=ki(n),s=li(i,r),s.callback=e??null,Oi(n,s,r),t.current.lanes=r,Lo(t,r,i),Qt(t,i),t}function Ul(t,e,n,i){var r=e.current,s=Vt(),o=ki(r);return n=Km(n),e.context===null?e.context=n:e.pendingContext=n,e=li(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Oi(r,e,o),t!==null&&(Dn(t,r,o,s),Da(t,r,o)),o}function ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function dd(t,e){zh(t,e),(t=t.alternate)&&zh(t,e)}function s_(){return null}var Qm=typeof reportError=="function"?reportError:function(t){console.error(t)};function hd(t){this._internalRoot=t}Nl.prototype.render=hd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));Ul(t,e,null,null)};Nl.prototype.unmount=hd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mr(function(){Ul(null,t,null,null)}),e[fi]=null}};function Nl(t){this._internalRoot=t}Nl.prototype.unstable_scheduleHydration=function(t){if(t){var e=R0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ri.length&&e!==0&&e<Ri[n].priority;n++);Ri.splice(n,0,t),n===0&&L0(t)}};function pd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hh(){}function o_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=ml(o);s.call(c)}}var o=Zm(e,i,t,0,null,!1,!1,"",Hh);return t._reactRootContainer=o,t[fi]=o.current,xo(t.nodeType===8?t.parentNode:t),Mr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=ml(l);a.call(c)}}var l=fd(t,0,!1,null,null,!1,!1,"",Hh);return t._reactRootContainer=l,t[fi]=l.current,xo(t.nodeType===8?t.parentNode:t),Mr(function(){Ul(e,l,n,i)}),l}function Ol(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ml(o);a.call(l)}}Ul(e,o,t,r)}else o=o_(n,e,t,r,i);return ml(o)}w0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qs(e.pendingLanes);n!==0&&(Df(e,n|1),Qt(e,dt()),!(Ve&6)&&(Es=dt()+500,Ki()))}break;case 13:Mr(function(){var i=di(t,1);if(i!==null){var r=Vt();Dn(i,t,1,r)}}),dd(t,1)}};Uf=function(t){if(t.tag===13){var e=di(t,134217728);if(e!==null){var n=Vt();Dn(e,t,134217728,n)}dd(t,134217728)}};T0=function(t){if(t.tag===13){var e=ki(t),n=di(t,e);if(n!==null){var i=Vt();Dn(n,t,e,i)}dd(t,e)}};R0=function(){return Qe};P0=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};au=function(t,e,n){switch(e){case"input":if(eu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Tl(i);if(!r)throw Error($(90));o0(i),eu(i,r)}}}break;case"textarea":l0(t,n);break;case"select":e=n.value,e!=null&&as(t,!!n.multiple,e,!1)}};m0=ad;g0=Mr;var a_={usingClientEntryPoint:!1,Events:[Io,$r,Tl,h0,p0,ad]},Hs={findFiberByHostInstance:fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},l_={bundleType:Hs.bundleType,version:Hs.version,rendererPackageName:Hs.rendererPackageName,rendererConfig:Hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=x0(t),t===null?null:t.stateNode},findFiberByHostInstance:Hs.findFiberByHostInstance||s_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ra.isDisabled&&ra.supportsFiber)try{El=ra.inject(l_),Gn=ra}catch{}}un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a_;un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pd(e))throw Error($(200));return r_(t,e,null,n)};un.createRoot=function(t,e){if(!pd(t))throw Error($(299));var n=!1,i="",r=Qm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=fd(t,1,!1,null,null,n,!1,i,r),t[fi]=e.current,xo(t.nodeType===8?t.parentNode:t),new hd(e)};un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=x0(e),t=t===null?null:t.stateNode,t};un.flushSync=function(t){return Mr(t)};un.hydrate=function(t,e,n){if(!Fl(e))throw Error($(200));return Ol(null,t,e,!0,n)};un.hydrateRoot=function(t,e,n){if(!pd(t))throw Error($(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Qm;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Zm(e,null,t,1,n??null,r,!1,s,o),t[fi]=e.current,xo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Nl(e)};un.render=function(t,e,n){if(!Fl(e))throw Error($(200));return Ol(null,t,e,!1,n)};un.unmountComponentAtNode=function(t){if(!Fl(t))throw Error($(40));return t._reactRootContainer?(Mr(function(){Ol(null,null,t,!1,function(){t._reactRootContainer=null,t[fi]=null})}),!0):!1};un.unstable_batchedUpdates=ad;un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Fl(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return Ol(t,e,n,!1,i)};un.version="18.3.1-next-f1338f8080-20240426";function Jm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jm)}catch(t){console.error(t)}}Jm(),Jp.exports=un;var c_=Jp.exports,Vh=c_;Yc.createRoot=Vh.createRoot,Yc.hydrateRoot=Vh.hydrateRoot;const u_="_App_1h2gu_3",f_="_App_1h2gu_3",d_={App:u_,app:f_},h_="_container_j3sxd_5",p_="_text_j3sxd_29",m_="_links_j3sxd_53",g_="_link_j3sxd_53",vi={container:h_,text:p_,links:m_,link:g_},__="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJhSURBVHgB7ZlPiE1RHMd/18hMzQJJQhaDwpKSZpLFpMhaSP5sSCkrK4tR/uxsJSElyVhjLIRYmrLQiJkaYzOR1IiExryfz+ncq+e9e2733XfvvLM4n/p0X+edc+7v+9695757n0ggEAgEAsWJXG+o6lY2B3A1LpDOUsNpHI6iaDT3KEIMYU39w9Q0lFZzlBJiM5tX4i+K6/hmpuob0w6ZH/hH/GUm9j+agpB0gs0uHBf/eIH91Pg19wgOsR48h7+088zgCYykKAzeiE+1cwzjSikD80ngUfys88cH3CNVwMTL8JZWuzTP4iXszaihO0+xN/ETHs7oM4jjWj6japf/tH0uUnt9+4kPJEeQsbqJn+GGjInPxhO3y3c8jV2OffXj67r+Y60GMZhVy6xe3Y7+6/GJFmcE+xxzL8bLONcwplCQhAkczBh3SO0hmZePuC9jvr047RjbVhCDOclv4wrHWHMiXtPsxaAW91nqmGMN3tds2g6S8AWPq+MCRfsOfJMy7i1ud4zpwlP4Lcf+SwuS8Bw3OeYxi8EZtYeQ0aw4rvNsi9oVKy+lBzH8xovYIy3CmF6114xZbY1KgiRM4k7JCX1343stRlOQMu/81uJjdnJXHYtBHGA53uHlI+yTkqjiFtbcHr9T+2v13/xqf68dE3t7cFBKZqFUwxK8ikco/krcdhIHpCKqCpIwIBUWX0+nn46URgjiGyGIb4QgvpEWZE78p6nGtCBT4j+TjQ1pQa6L/9xobEh79vuQzQWxT719w9R0nhpHGt/I+qNnG5v9uEr8+aPnHiFeSiAQCAQCJfMX+AMr/K5EcJAAAAAASUVORK5CYII=",v_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAONSURBVHgB7ZlLSFVBGMe/m6/KZySKBmVREm1yVS2lVgUSQUVEC4uWUiRBZES1aJPVLsplURDtKoiQUrKgIiqi7EUPlUwDix6mpuHXfzonuM6dM4/rHG1xf/DjXs6c+Wa+c8/MOTOXKEOGDDoS5BFmnomPVbAGVsMyWAKz4CAcgK9gJ+xIJBLf6H8Bnc+BW+BlOMz2jMEOuBMW0nSBxnPhbviBJ89XeASW0FSCBmvhG/ZPP9xIcYNGsuAxOM7xcpaD8RZLEgWwlaeO+7CUfBImcZennifekuFgVrrJ08c9mGfq5wyLXJrh6oiy0/A6/EnpMwpvwZNwRFG+MmwnfXAl1nL0wH6ZdF4hbIRf2J4hDqbcuUlxOjTnr6d0QMXZsEcT+KKiTjls4+Bh9xhegi2h4vtD+Au+gNWK+uc07fXCAnIFlfaznpaIejnJV1lRLiaOooiyM4Y2m6LizogIOAsfjaRHWRfvT2Pwc1QllA3C7xHFWaRnL/qWT7adAVuhadorJ/+Y2pwD7Z/8yPoGm+kmzyBml0W77bbBijgYrCb2kGcQc5dFu6Ns87bMwZRrQjykvK5lktpvt2i/Tq6nGiPLycxhDFimeDhkcU5KH1WJLCE9vbCV4uM2NI2/pfIBVSJlpEcsUccpJsJf+o7htAr5gCqRYtLTRfHTYyhPeaCqEonr3vdJrnxAlcgw6VlA8VNlKB+SD6gS6SM9Yr1uepVImzB2reG0fvmAKpG3pKeSXF4T3NlMisEs8Z5M4Iqss3ggiVfqSvIMYs4LY5vYZhOsmIPXABNiPT2fPIFYFWFMGxbaBm2zDOhlH0rECGPZ0OkSeDu7IbZu6tlh65OD5XF9WNeFJpdE8uGAFOAK3AEfaRoRt2S9RfwGtrt9ZUbYdWyiwgEpyG94FOZx9HrlGlu8FXOwb/yU3WkhVzj4VbqlQGJHZQUshR8VDdU4xN/AbvzgdGdKVKzj1O2g42GZSOhT0nHz3D4xdl7YOVsmt5BDgFNSwHcwOywTv0xD6DJyBHUe2OXw91a22UzUNibuZ3k6tp859LHbLZIQF87b/m8JT5wmxe0mBn4xTQKLRPrgYvIJB5sS8t8KYjp8Bp/Dq+SIIREx0VRTHCBwNjzB6v1gu20askpEHI9j3yylA2vg6xgSEX+m7uMYlwmqTvz7M7THQyLiYXseVtF0ESa0CR4kR1DnAmyGiyhDhgwZbPgDeZo0Py9W4vMAAAAASUVORK5CYII=",x_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHISURBVHgB7Zq/SgNBEMbnguBFTMAHELHwDewEbcRGY6FBsbe00RewSkp9CK1sBLVQRAVBK5/AxkL81yZgEIv1C0kRN3OXm0u4myT7g48Je7Ob+bI3l1wSIofDEQtjTAG6gyomfeo13EIFqYmy0UuJq9njdgLhjHSz6nneeetAhknaI/3s2gPcjlQRxkk3VexIvnWAM2KoD4CRf7VnaEAYWiPv0Bo1eigHFaEvUoC0RxZwat5b+UsIV5Qwdo9IjfiY/2Pl+wg1Sphum32eGZsjBUiNHGMHNqBcU+sYOyIFuPcRbQynES8AYc4ltAVNQaPQBDQL7UOf1CvCbgSizAnJ+YAWKfy589CpiQClaGSGIoC8EehaakR01bJPI25OUI4ELDeJ8Az5FLGWVJq9/qqHHUeNrwgnJCBRIzCwA73h4S/iC7Qdkt7d7bbkvOTmhORsBixbDMifjlMLW1SPjTwGLPsQkO9Lakms2ZHyjZBlDtUwZazTup1qSbJHssJxEe6zljacEW04I9pwRrQxMEbctyja4IxUST8Ve4Az8kT6aauRM3JA+jm0B9qMoIcuEMqkl1Kzxmjg4rViGj/Sa/nDwA20TA6HIxZ/fJauS3Fx+WYAAAAASUVORK5CYII=",S_="/SadeepPortfolio/assets/Hero1-BvW22hey.png",y_="/SadeepPortfolio/assets/IMG_0360-0zx5WnAu.jpg",M_="/SadeepPortfolio/assets/D_UCSC-9-iBTxR1.png",E_="/SadeepPortfolio/assets/SSC-cWtBteWQ.png",A_="/SadeepPortfolio/assets/UCSC-BmAnkN-y.png",C_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEOSURBVHgB7ZdtDoMgDIa7XWDLPIBX1RPOnaijERJmWsZHhcT0SfhjYnnziBQADMMwjCwQ8ebGExqhGlQLtHFFFzc2NyaoxL37cuNNtUALb47CBSjkDIXQOz5cYFEx6T/Jhr8UmYzMxXw0lkyYYBJC/jXJmAvhqpdKaqIikwlzxUskN2S2yW7mhImTJrubY0KKJoeZY0JKJseZY0JyJseaY0LOQkgVc3fQATOf9QX5v/W4Jsd8YpT/1qqOox1O3OewouNoh5PMxRt1de9uDZfdIbqbxIoO0c0kNvTW003ifmBt6q0Jk+0HVtyP/GupOabOfAhJNfUuT75gU2+NTK6gDepdOx94xrXTMAzjonwB63HGEH1flEQAAAAASUVORK5CYII=",w_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACkSURBVHgB7dWxDcIwFATQMxsg6PEK7AEbwHrZAVGwyqegooA2lXMpHFkpHSXfxT3p5Pyk+UWsA0REVhXKIaW053FjDvDxYZ4hBMsvpgW5XOTxYiJ8GXPmkv9x2BUfLvBfbhSZex7KBRPa0eeHcsGOecOfMY88zC/JiceVOcLHl+n4//0g0gg1SQWDmmQ5NUktNYk0R01SwaAmWU5NUktNIiJbGwBK00gfRw3LTgAAAABJRU5ErkJggg==",T_="/SadeepPortfolio/assets/sss-CbemYTQK.jpg",R_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='url(%23paint0_linear_158_100)'%20rx='60'/%3e%3cg%20filter='url(%23filter0_d_158_100)'%3e%3cpath%20fill='url(%23paint1_linear_158_100)'%20d='M131.97%20196.157C161.646%20196.157%20179.529%20181.626%20179.529%20157.66C179.529%20139.543%20166.77%20126.428%20147.823%20124.351V123.597C161.743%20121.332%20172.666%20108.405%20172.666%2093.9689C172.666%2073.3992%20156.427%2060%20131.68%2060H76V196.157H131.97ZM97.6533%2077.2674H126.46C142.12%2077.2674%20151.013%2084.2497%20151.013%2096.8935C151.013%20110.387%20140.67%20117.935%20121.917%20117.935H97.6533V77.2674V77.2674ZM97.6533%20178.89V134.071H126.266C146.76%20134.071%20157.393%20141.619%20157.393%20156.339C157.393%20171.058%20147.05%20178.89%20127.523%20178.89H97.6533V178.89Z'/%3e%3cpath%20stroke='%23fff'%20stroke-width='2'%20d='M131.97%20196.157C161.646%20196.157%20179.529%20181.626%20179.529%20157.66C179.529%20139.543%20166.77%20126.428%20147.823%20124.351V123.597C161.743%20121.332%20172.666%20108.405%20172.666%2093.9689C172.666%2073.3992%20156.427%2060%20131.68%2060H76V196.157H131.97ZM97.6533%2077.2674H126.46C142.12%2077.2674%20151.013%2084.2497%20151.013%2096.8935C151.013%20110.387%20140.67%20117.935%20121.917%20117.935H97.6533V77.2674V77.2674ZM97.6533%20178.89V134.071H126.266C146.76%20134.071%20157.393%20141.619%20157.393%20156.339C157.393%20171.058%20147.05%20178.89%20127.523%20178.89H97.6533V178.89Z'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_158_100'%20width='137.529'%20height='170.157'%20x='59'%20y='47'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20result='hardAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='4'/%3e%3cfeGaussianBlur%20stdDeviation='8'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.15%200'/%3e%3cfeBlend%20in2='BackgroundImageFix'%20mode='normal'%20result='effect1_dropShadow_158_100'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow_158_100'%20mode='normal'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_158_100'%20x1='0'%20x2='256'%20y1='0'%20y2='256'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%239013FE'/%3e%3cstop%20offset='1'%20stop-color='%236B11F4'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_158_100'%20x1='85.793'%20x2='148.541'%20y1='68.962'%20y2='175.084'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23fff'/%3e%3cstop%20offset='1'%20stop-color='%23F1E5FC'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",P_="data:image/svg+xml,%3csvg%20width='256'%20height='256'%20viewBox='0%200%20256%20256'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='256'%20height='256'%20rx='60'%20fill='%23394AAB'/%3e%3cpath%20d='M134.001%2033C169.144%2033%20199.828%2052.0863%20216.262%2080.4561L216.102%2080.183L174.753%20103.991C166.607%2090.1977%20151.672%2080.8892%20134.54%2080.6975L134.001%2080.6945C107.875%2080.6945%2086.6945%20101.874%2086.6945%20127.999C86.6945%20136.543%2088.9723%20144.552%2092.9335%20151.469C101.088%20165.704%20116.416%20175.306%20134.001%20175.306C151.693%20175.306%20167.109%20165.582%20175.222%20151.195L175.025%20151.54L216.311%20175.458C200.057%20203.588%20169.794%20222.615%20135.059%20222.994L134.001%20223C98.746%20223%2067.9753%20203.796%2051.582%20175.276C43.5791%20161.353%2039%20145.212%2039%20127.999C39%2075.5334%2081.5323%2033%20134.001%2033Z'%20fill='white'/%3e%3c/svg%3e",L_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%2300599C'%20rx='60'/%3e%3cpath%20fill='%23fff'%20d='M110.759%20210.517C65.1254%20210.517%2028%20173.392%2028%20127.759C28%2082.1254%2065.1254%2045%20110.759%2045C140.204%2045%20167.667%2060.8458%20182.427%2086.3533L146.611%20107.079C139.224%2094.3111%20125.485%2086.3793%20110.759%2086.3793C87.9416%2086.3793%2069.3793%20104.942%2069.3793%20127.759C69.3793%20150.575%2087.9416%20169.138%20110.759%20169.138C125.486%20169.138%20139.225%20161.206%20146.613%20148.436L182.429%20169.161C167.669%20194.671%20140.206%20210.517%20110.759%20210.517Z'/%3e%3cpath%20fill='%23fff'%20d='M193.517%20123.161H184.321V113.965H175.127V123.161H165.931V132.356H175.127V141.552H184.321V132.356H193.517V123.161Z'/%3e%3cpath%20fill='%23fff'%20d='M228%20123.161H218.804V113.965H209.61V123.161H200.414V132.356H209.61V141.552H218.804V132.356H228V123.161Z'/%3e%3c/svg%3e",b_="data:image/svg+xml,%3csvg%20width='256'%20height='256'%20viewBox='0%200%20256%20256'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='256'%20height='256'%20rx='60'%20fill='%230277BD'/%3e%3cpath%20d='M53.7527%20102.651L56.6155%20134.593H128.096V102.651H53.7527Z'%20fill='%23EBEBEB'/%3e%3cpath%20d='M128.095%2038H127.985H48L50.9036%2069.9423H128.095V38Z'%20fill='%23EBEBEB'/%3e%3cpath%20d='M128.095%20218.841V185.608L127.955%20185.645L92.3813%20176.04L90.1072%20150.564H72.821H58.0425L62.5175%20200.718L127.948%20218.882L128.095%20218.841Z'%20fill='%23EBEBEB'/%3e%3cpath%20d='M167.318%20134.593L163.61%20176.019L127.985%20185.635V218.866L193.468%20200.718L193.948%20195.321L201.454%20111.229L202.233%20102.651L208%2038H127.985V69.9423H172.994L170.088%20102.651H127.985V134.593H167.318Z'%20fill='white'/%3e%3c/svg%3e",I_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%235865F2'%20rx='60'/%3e%3cg%20clip-path='url(%23clip0_158_82)'%3e%3cpath%20fill='%23fff'%20d='M197.308%2064.7966C184.561%2058.9476%20170.892%2054.6383%20156.599%2052.1701C156.339%2052.1225%20156.079%2052.2415%20155.945%2052.4796C154.187%2055.6064%20152.239%2059.6856%20150.876%2062.8918C135.503%2060.5904%20120.21%2060.5904%20105.153%2062.8918C103.789%2059.6143%20101.771%2055.6064%20100.005%2052.4796C99.8707%2052.2495%2099.6107%2052.1305%2099.3504%2052.1701C85.0659%2054.6304%2071.3963%2058.9397%2058.6411%2064.7966C58.5307%2064.8442%2058.4361%2064.9236%2058.3732%2065.0267C32.4449%20103.763%2025.3421%20141.547%2028.8265%20178.863C28.8423%20179.046%2028.9447%20179.22%2029.0867%20179.331C46.1934%20191.894%2062.7642%20199.521%2079.0273%20204.576C79.2876%20204.655%2079.5634%20204.56%2079.729%20204.346C83.5761%20199.092%2087.0054%20193.553%2089.9456%20187.728C90.1192%20187.386%2089.9535%20186.982%2089.5989%20186.847C84.1594%20184.783%2078.98%20182.268%2073.9977%20179.411C73.6037%20179.181%2073.5721%20178.617%2073.9347%20178.347C74.9831%20177.561%2076.0318%20176.744%2077.033%20175.919C77.2141%20175.768%2077.4665%20175.736%2077.6794%20175.831C110.411%20190.775%20145.846%20190.775%20178.191%20175.831C178.404%20175.728%20178.657%20175.76%20178.846%20175.911C179.847%20176.736%20180.895%20177.561%20181.952%20178.347C182.314%20178.617%20182.291%20179.181%20181.897%20179.411C176.914%20182.323%20171.735%20184.783%20166.288%20186.839C165.933%20186.974%20165.775%20187.386%20165.949%20187.728C168.952%20193.545%20172.381%20199.084%20176.157%20204.338C176.315%20204.56%20176.599%20204.655%20176.859%20204.576C193.201%20199.521%20209.772%20191.894%20226.879%20179.331C227.028%20179.22%20227.123%20179.053%20227.139%20178.871C231.309%20135.73%20220.154%2098.2554%20197.568%2065.0346C197.513%2064.9236%20197.419%2064.8442%20197.308%2064.7966ZM94.8335%20156.142C84.9792%20156.142%2076.8594%20147.095%2076.8594%20135.984C76.8594%20124.873%2084.8217%20115.826%2094.8335%20115.826C104.924%20115.826%20112.965%20124.953%20112.807%20135.984C112.807%20147.095%20104.845%20156.142%2094.8335%20156.142ZM161.29%20156.142C151.435%20156.142%20143.316%20147.095%20143.316%20135.984C143.316%20124.873%20151.278%20115.826%20161.29%20115.826C171.38%20115.826%20179.421%20124.953%20179.264%20135.984C179.264%20147.095%20171.38%20156.142%20161.29%20156.142Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_158_82'%3e%3crect%20width='200'%20height='154.93'%20fill='%23fff'%20transform='translate(28%2051)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",D_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23242938'%20rx='60'/%3e%3cg%20clip-path='url(%23clip0_4_180)'%3e%3cpath%20fill='%230ACF83'%20d='M94.3467%20228C112.747%20228%20127.68%20213.067%20127.68%20194.667V161.333H94.3467C75.9467%20161.333%2061.0133%20176.267%2061.0133%20194.667C61.0133%20213.067%2075.9467%20228%2094.3467%20228Z'/%3e%3cpath%20fill='%23A259FF'%20d='M61.0133%20128C61.0133%20109.6%2075.9467%2094.6667%2094.3467%2094.6667H127.68V161.333H94.3467C75.9467%20161.333%2061.0133%20146.4%2061.0133%20128Z'/%3e%3cpath%20fill='%23F24E1E'%20d='M61.0133%2061.3333C61.0133%2042.9333%2075.9467%2028%2094.3467%2028H127.68V94.6667H94.3467C75.9467%2094.6667%2061.0133%2079.7333%2061.0133%2061.3333Z'/%3e%3cpath%20fill='%23FF7262'%20d='M127.68%2028H161.013C179.413%2028%20194.347%2042.9333%20194.347%2061.3333C194.347%2079.7333%20179.413%2094.6667%20161.013%2094.6667H127.68V28Z'/%3e%3cpath%20fill='%231ABCFE'%20d='M194.347%20128C194.347%20146.4%20179.413%20161.333%20161.013%20161.333C142.613%20161.333%20127.68%20146.4%20127.68%20128C127.68%20109.6%20142.613%2094.6667%20161.013%2094.6667C179.413%2094.6667%20194.347%20109.6%20194.347%20128Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4_180'%3e%3crect%20width='133.36'%20height='200'%20fill='%23fff'%20transform='translate(61%2028)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",U_="data:image/svg+xml,%3csvg%20width='256'%20height='256'%20viewBox='0%200%20256%20256'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='256'%20height='256'%20rx='60'%20fill='%23242938'/%3e%3cpath%20d='M128.001%2030C72.7791%2030%2028%2074.7708%2028%20130.001C28%20174.184%2056.6533%20211.668%2096.3867%20224.891C101.384%20225.817%20103.219%20222.722%20103.219%20220.081C103.219%20217.696%20103.126%20209.819%20103.083%20201.463C75.2631%20207.512%2069.3927%20189.664%2069.3927%20189.664C64.8437%20178.105%2058.2894%20175.032%2058.2894%20175.032C49.2163%20168.825%2058.9733%20168.953%2058.9733%20168.953C69.0151%20169.658%2074.3026%20179.258%2074.3026%20179.258C83.2217%20194.546%2097.6965%20190.126%20103.403%20187.571C104.301%20181.107%20106.892%20176.696%20109.752%20174.199C87.5405%20171.67%2064.1913%20163.095%2064.1913%20124.778C64.1913%20113.86%2068.0977%20104.939%2074.4947%2097.9362C73.4564%2095.4175%2070.0335%2085.2465%2075.4635%2071.4722C75.4635%2071.4722%2083.8609%2068.7845%20102.971%2081.7226C110.948%2079.5069%20119.502%2078.3958%20128.001%2078.3577C136.499%2078.3958%20145.061%2079.5069%20153.052%2081.7226C172.139%2068.7845%20180.525%2071.4722%20180.525%2071.4722C185.968%2085.2465%20182.544%2095.4175%20181.505%2097.9362C187.917%20104.939%20191.797%20113.86%20191.797%20124.778C191.797%20163.187%20168.403%20171.644%20146.135%20174.119C149.722%20177.223%20152.918%20183.308%20152.918%20192.638C152.918%20206.018%20152.802%20216.787%20152.802%20220.081C152.802%20222.742%20154.602%20225.86%20159.671%20224.878C199.383%20211.64%20228%20174.169%20228%20130.001C228%2074.7708%20183.227%2030%20128.001%2030ZM65.4536%20172.453C65.2333%20172.95%2064.4517%20173.099%2063.7396%20172.758C63.0143%20172.432%2062.6069%20171.754%2062.8421%20171.256C63.0574%20170.744%2063.8406%20170.602%2064.5643%20170.945C65.2913%20171.271%2065.7053%20171.955%2065.4536%20172.453ZM70.3725%20176.842C69.8956%20177.285%2068.9633%20177.079%2068.3307%20176.38C67.6766%20175.683%2067.554%20174.751%2068.0376%20174.302C68.5294%20173.86%2069.4336%20174.067%2070.0893%20174.764C70.7434%20175.47%2070.8709%20176.395%2070.3725%20176.842ZM73.7471%20182.458C73.1344%20182.884%2072.1325%20182.485%2071.5132%20181.595C70.9004%20180.706%2070.9004%20179.64%2071.5264%20179.212C72.1474%20178.785%2073.1344%20179.169%2073.762%20180.052C74.373%20180.956%2074.373%20182.023%2073.7471%20182.458ZM79.4542%20188.962C78.9061%20189.566%2077.7386%20189.404%2076.8841%20188.579C76.0098%20187.773%2075.7663%20186.629%2076.3161%20186.024C76.8709%20185.418%2078.045%20185.589%2078.9061%20186.407C79.7738%20187.211%2080.0387%20188.364%2079.4542%20188.962ZM86.8301%20191.157C86.5883%20191.941%2085.4639%20192.297%2084.3312%20191.964C83.2002%20191.621%2082.46%20190.704%2082.6885%20189.912C82.9237%20189.124%2084.053%20188.753%2085.194%20189.109C86.3234%20189.45%2087.0652%20190.361%2086.8301%20191.157ZM95.2242%20192.089C95.2523%20192.913%2094.2919%20193.597%2093.1029%20193.612C91.9073%20193.639%2090.9402%20192.971%2090.9269%20192.16C90.9269%20191.327%2091.8659%20190.65%2093.0615%20190.63C94.2505%20190.607%2095.2242%20191.269%2095.2242%20192.089ZM103.47%20191.773C103.613%20192.577%20102.787%20193.404%20101.606%20193.624C100.445%20193.836%2099.3702%20193.339%2099.2229%20192.541C99.0788%20191.716%2099.92%20190.89%20101.079%20190.676C102.262%20190.471%20103.32%20190.955%20103.47%20191.773Z'%20fill='white'/%3e%3c/svg%3e",N_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23E14E1D'%20rx='60'/%3e%3cpath%20fill='%23fff'%20d='M48%2038L56.6098%20134.593H167.32L163.605%20176.023L127.959%20185.661L92.38%20176.037L90.0012%20149.435H57.9389L62.5236%20200.716L127.951%20218.888L193.461%20200.716L202.244%20102.655H85.8241L82.901%2069.9448H205.041H205.139L208%2038H48Z'/%3e%3cpath%20fill='%23EBEBEB'%20d='M128%2038H48L56.6098%20134.593H128V102.655H85.8241L82.901%2069.9448H128V38Z'/%3e%3cpath%20fill='%23EBEBEB'%20d='M128%20185.647L127.959%20185.661L92.38%20176.037L90.0012%20149.435H57.9388L62.5236%20200.716L127.951%20218.888L128%20218.874V185.647Z'/%3e%3c/svg%3e",F_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23242938'%20rx='60'/%3e%3cpath%20fill='%2300D8FF'%20d='M128.001%20146.951C138.305%20146.951%20146.657%20138.598%20146.657%20128.295C146.657%20117.992%20138.305%20109.639%20128.001%20109.639C117.698%20109.639%20109.345%20117.992%20109.345%20128.295C109.345%20138.598%20117.698%20146.951%20128.001%20146.951Z'/%3e%3cpath%20fill-rule='evenodd'%20stroke='%2300D8FF'%20stroke-width='8.911'%20d='M128.002%2090.3633C153.05%2090.3633%20176.319%2093.9575%20193.864%2099.9976C215.003%20107.275%20228%20118.306%20228%20128.295C228%20138.704%20214.226%20150.423%20191.525%20157.944C174.363%20163.63%20151.779%20166.598%20128.002%20166.598C103.624%20166.598%2080.5389%20163.812%2063.1834%20157.881C41.2255%20150.376%2028%20138.506%2028%20128.295C28%20118.387%2040.4096%20107.441%2061.2515%20100.175C78.8617%2094.0353%20102.705%2090.3633%20127.998%2090.3633H128.002Z'%20clip-rule='evenodd'/%3e%3cpath%20fill-rule='evenodd'%20stroke='%2300D8FF'%20stroke-width='8.911'%20d='M94.9811%20109.438C107.495%2087.7402%20122.232%2069.3783%20136.23%2057.1971C153.094%2042.5206%20169.144%2036.7728%20177.796%2041.7623C186.813%2046.9623%20190.084%2064.7496%20185.259%2088.1712C181.614%20105.879%20172.9%20126.925%20161.021%20147.523C148.842%20168.641%20134.897%20187.247%20121.09%20199.315C103.619%20214.587%2086.7284%20220.114%2077.8833%20215.013C69.3003%20210.067%2066.0181%20193.846%2070.1356%20172.161C73.6145%20153.838%2082.3451%20131.349%2094.977%20109.438L94.9811%20109.438Z'%20clip-rule='evenodd'/%3e%3cpath%20fill-rule='evenodd'%20stroke='%2300D8FF'%20stroke-width='8.911'%20d='M95.0123%20147.578C82.4633%20125.904%2073.9194%20103.962%2070.3531%2085.7517C66.0602%2063.8109%2069.0954%2047.0355%2077.7401%2042.0315C86.7485%2036.8163%20103.792%2042.866%20121.674%2058.7437C135.194%2070.7479%20149.077%2088.8052%20160.99%20109.383C173.204%20130.481%20182.358%20151.856%20185.919%20169.844C190.425%20192.608%20186.778%20210.001%20177.941%20215.116C169.367%20220.08%20153.676%20214.825%20136.945%20200.427C122.809%20188.263%20107.685%20169.468%2095.0123%20147.578Z'%20clip-rule='evenodd'/%3e%3c/svg%3e",O_="data:image/svg+xml,%3csvg%20width='256'%20height='256'%20viewBox='0%200%20256%20256'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='256'%20height='256'%20rx='60'%20fill='%23242938'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M65.1865%20102.421C66.9311%20104.826%2081.6418%20109.362%20103.585%20114.086C125.529%20118.292%20148.349%20134.898%20166.097%20129.777C178.101%20126.307%20191.124%2095.3864%20191.124%2090.794V90.3225C191.124%2087.1163%20188.719%2084.542%20184.636%2082.4014C167.898%2073.8484%20164.729%2070.6988%20158.524%2072.4056C126.312%2081.2981%2069.4394%2076.7528%2065.1865%20102.421Z'%20fill='%23380D09'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M65.1865%20165.206C66.9311%20167.648%2081.6418%20172.146%20103.585%20176.88C128.103%20181.35%20149.424%20195.919%20167.181%20190.79C179.185%20187.319%20191.124%20158.181%20191.124%20153.579V153.126C191.124%20149.93%20188.719%20147.346%20184.636%20145.215C171.868%20138.425%20154.997%20130.947%20148.802%20132.654C116.533%20141.527%2073.4%20143.479%2065.1865%20165.206Z'%20fill='%23380D09'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M65.0073%20115.916V116.368C64.9976%20116.217%2064.9976%20116.066%2065.0073%20115.916V115.916Z'%20fill='%23555555'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M167.134%2040.1364C137.467%2048.7082%2090.4021%2053.5458%2065.0449%2053.5458V101.969C65.053%20102.135%2065.116%20102.294%2065.2241%20102.421C82.5281%20102.421%20135.949%2096.7633%20168.18%2087.8991C173.802%2086.4684%20179.313%2084.6374%20184.673%2082.4203C188.615%2080.6475%20191.161%2078.7803%20191.161%2076.8378V28C191.123%2032.6018%20179.138%2036.6756%20167.134%2040.1364V40.1364Z'%20fill='%23DE3423'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M167.134%20102.931C149.377%20108.051%20125.416%20111.861%20103.585%20114.086C88.931%20115.586%2075.2387%20116.368%2065.0449%20116.368V164.753C65.053%20164.92%2065.116%20165.079%2065.2241%20165.206C82.5281%20165.206%20135.949%20159.548%20168.18%20150.693C173.8%20149.258%20179.312%20147.428%20184.673%20145.214C188.615%20143.432%20191.161%20141.575%20191.161%20139.632V90.7942C191.123%2095.3866%20179.138%2099.4603%20167.134%20102.931V102.931Z'%20fill='%23DE3423'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M167.134%20165.762C149.377%20170.883%20125.416%20174.683%20103.585%20176.918C88.9123%20178.417%2075.2011%20179.2%2065.0073%20179.2V228C82.1321%20228%20135.826%20222.389%20168.143%20213.487C180.053%20210.206%20191.124%20206.471%20191.124%20202.416V153.579C191.124%20158.218%20179.138%20162.254%20167.134%20165.762V165.762Z'%20fill='%23DE3423'/%3e%3c/svg%3e",B_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23242938'%20rx='60'/%3e%3cpath%20fill='%235FB832'%20d='M209.545%20171.821C184.93%20204.618%20132.347%20193.547%2098.6353%20195.139C98.6353%20195.139%2092.6673%20195.471%2086.6563%20196.461C86.6563%20196.461%2088.9292%20195.491%2091.8279%20194.492C115.506%20186.304%20126.695%20184.659%20141.082%20177.269C168.114%20163.421%20195.018%20133.259%20200.492%20101.925C190.202%20132.061%20158.909%20157.998%20130.415%20168.53C110.911%20175.727%2075.6419%20182.731%2075.6368%20182.734C75.6533%20182.759%2074.2312%20181.996%2074.2113%20181.979C50.2253%20170.309%2049.5332%20118.359%2093.0965%20101.613C112.197%2094.2661%20130.466%2098.3015%20151.114%2093.387C173.136%2088.151%20198.642%2071.644%20209.009%2050.063C220.631%2084.5351%20234.592%20138.467%20209.545%20171.821V171.821ZM209.973%2039.3809C207.043%2046.343%20203.466%2052.6167%20199.344%2058.2281C181.197%2039.6038%20155.868%2027.9999%20127.871%2027.9999C72.7989%2027.9999%2028%2072.8039%2028%20127.866C28%20156.731%2040.3209%20182.764%2059.9644%20201.012L62.1514%20202.949C58.4993%20199.971%2057.9377%20194.608%2060.8977%20190.952C63.8759%20187.295%2069.2444%20186.728%2072.8983%20189.69C76.562%20192.658%2077.1202%20198.035%2074.1538%20201.697C71.1984%20205.361%2065.8202%20205.914%2062.1614%20202.958L63.6497%20204.276C81.0254%20218.906%20103.424%20227.743%20127.871%20227.743C180.511%20227.743%20223.736%20186.778%20227.436%20135.073C230.176%20109.757%20222.699%2077.6106%20209.973%2039.3809Z'/%3e%3c/svg%3e",k_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23242938'%20rx='60'/%3e%3cpath%20fill='%232489CA'%20d='M33.7158%20100.208C33.7158%20100.208%2028.9814%2096.795%2034.6627%2092.2381L47.8994%2080.402C47.8994%2080.402%2051.6869%2076.4172%2055.6915%2079.8891L177.84%20172.368V216.714C177.84%20216.714%20177.781%20223.678%20168.844%20222.908L33.7158%20100.208Z'/%3e%3cpath%20fill='%231070B3'%20d='M65.1997%20128.792L33.7157%20157.415C33.7157%20157.415%2030.4805%20159.822%2033.7157%20164.123L48.3333%20177.418C48.3333%20177.418%2051.8052%20181.147%2056.9341%20176.905L90.3119%20151.596L65.1997%20128.792Z'/%3e%3cpath%20fill='%230877B9'%20d='M120.474%20129.029L178.215%2084.9391L177.84%2040.83C177.84%2040.83%20175.374%2031.2033%20167.148%2036.2139L90.312%20106.145L120.474%20129.029Z'/%3e%3cpath%20fill='%233C99D4'%20d='M168.844%20222.968C172.198%20226.4%20176.262%20225.276%20176.262%20225.276L221.259%20203.103C227.019%20199.177%20226.21%20194.305%20226.21%20194.305V61.8982C226.21%2056.0788%20220.252%2054.0667%20220.252%2054.0667L181.253%2035.267C172.731%2030%20167.148%2036.2139%20167.148%2036.2139C167.148%2036.2139%20174.328%2031.0455%20177.84%2040.83V215.905C177.84%20217.109%20177.583%20218.292%20177.071%20219.358C176.045%20221.429%20173.816%20223.362%20168.47%20222.553L168.844%20222.968Z'/%3e%3c/svg%3e",z_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAiZSURBVHgB7Vzdb1xHFT9n7trrpFl/JJHb4IjGCWlALR+ChGIaVZCKhyK1qHxVPCABT5AgpPIXROK5EkIkPCEeKhXKQwlC4rOEqJSWtCqCBjWtm8Rx47Vrr3e9u1577fXeOT2zayWufe/MmXptX2f7k652d+7ZuzO/e+bM+Zi7CKsweLb8KAD+HtocmuiB0VPdL65sU2uFam/BB4AgWMitbltDFmHqHfgAUKwFk6vb1pD19lRPiV+WoJ1BUC/8aE95dfMasuA0arZZeWhnKMhHN0cinIU2BhFNRrXHkKXa2m4hYCmqPZosjGa2jTAT1RhJFqthDtoYhJCNao/WLIL29rUIh6Oao8lSagLaGKSXRqPaI8kKAKagjYGUktuspbDW1gY+lVKRq2EqqrEr2FFcohAk2MlXuGc3QtIxXCCYr8tkFzshUlkiyZqv7ih0dFVAgv3dCM882glJx1d+V4M38iSSzdwYmY5qj5yGYz/GKiKIvPi5GmwLFKpi0crrp++LHJWK+wYRFkCAOaFqbzUKVZlWEWCsj6ksXyuBALM1Alk3tg5zS5xGEHYSLZ5APFlEoyBAqJudSTLy8inI0NNxZyyaBcMgRCXhdquwIL+ZHOrEjjuWLDbw4yBENeGpwjmP/pGOH3cq7gTPrhmp9/TMmyEM7LolTctH4z3daqSV5yhCdmU7rWpffqNvvr2lLQ8PBnCoN763Mz6aFahYmxVLFutc4WbPHPjVJZkDu1H4dL+ykjValpOlwtDfwNeJtk0wnU7Zz18rycnSgLHeeCxZaQ0iPysJ6O60Gwyfaag0+K+GQQqLsA3QySmS3V12mXmf1XpXJjalHkvWcF/GpCkS758brepO2zWrsAAisP6F178Dsc54vJ/1TWSrjTOQcPSxVnUou0xeOA3R5N4RY4XtP7MNjHzGoVUhyZ1mdlfGbOet6wgCXeHA8hOwxTB0sJMMio9g+bV5IPSl7d8tehh3M17beStZhJgFIX5yPMVTAiGlmtOi8Rosv/LAUkGzPcCmjFo1eFzxPnjPZ2y8f7/pxVzVwyFV9vHayQKYlnby2F0KBnuTlzEtCo27Affeum3BarOIlqZBiIn5ZGYexioeDilpq29pJSuAQJTTMhguCGOjTUbWZ9cG2rct2DULAnFlOjubTM3KV31uYmh1leyuA9bEG0SKi5BITHsk/nhBKdvOW8lS1CV2SqfmIZEwaW8pMOy01kutZKWhIiYrl1ADX/aIC8PcpNXsONf6wbOzJqDuccmZgPbgsutAKxJ7N19pbUIw9vNq+ajPYOJCgHOP2WuWx5+uSW/k1MjJzJ02AUcmqIHLfHzOJVTjSFJaxGwVMo5KuLkJM1VxXHjFJaNcAnyVMUgoehxx4XhFXgLjNLUzf+ckizSVIaHYvcN+PuvhkDJbzs0wzmnIcZl45/J9e/E9hYvVGOeE7aXp1jmv++6wa1Zx0SMu5DXKJeO2WZov4p6sDXz9SADf+lgQe/6P10J44nzryOpzZEhzfu6Mc+V30qCVFrsPrlz3gZ7WBtr7dtm776NZbJudmuUkK6BAXLhwVX7v3Nlasj7qWA1LHlGF0u4d2k6yQiBxyONyAHs536VayNdAxn4xH0eZc1nOkNutWUGnOJguOXJHJpnnKltJ0ZVq7jq0wWcahnqpBa5DUC+zdzcHAkwKDGpPGlqCfsGU9tjjMB9Ch3MGOcnard8wjIuMfJmD1tBxM798SK3bdu1h/+qxw4FVRpN8q5F5SCI7nXGOUdTrwTOzr7Hkx11yuzhM+/vjndCbdochr+U0HwQvjGl4ng9tITnNvAx9SMHx/QqO3oVwuM/k8V3GneALv64JN93SyyMnu+93SUliQ0OpKYk5yTIlJ7MC9TqmmilAfLJf8QHw7XsDqDNT/5kk+FdWw4UbGt4qUCMof+RQ0CDHOLvplJ825lir5sUlYhRFKSKyfAoXJeM+dPsNzGjJZ/eZQ8ETR5uah+tcB0qLXkG9yMyIfHPuuHjfw6TXlsTY31s3fHYjcqFC9JCEjCwCcZWnvLi5aZo45L2Kq7L4V0QWJzo8yIJEIF/1yjiIohSZgSeckJaEf/pq2DDSDwwo+OKHVWPl2iyMlAj+cDWEl8cJXs/7ZBz0DYmc0MDTFemQFzjb9u9xc2h48pVmGuVeXs2+xhkJs6r1tzA+NB76i1mC566HvJKSX+C8AmFHhzNLaiAiKxWmsqFMB9dgYo4ax3OjzdSMCX6Nxn1+IGDXARs+lBRmv/1l1piLEwTnhkN4u0W1ylTnHSLNkt3m31JwIF9ZZEPvMTQ3zAaRh+42xCnWOtXQvJUwLsSVooZXmBzjuL7EGrtQb/kCokemnuyA06ediTbxnBg8U57mNX0PbCD2cxbhQfbSj7D2Dc8YB5U2vNJtoqLrJzN7JbLiyYWIM3zhDSVrjIl5+vImbxMnEKeghAnjxtNSt+W/iLADLE5uislC0rflQ+ZEKN5nIyZLK9gWW729obT44XkPzdo+DxH4gFdccSZYTBagEj8ltp2gAEU+VlNWLEh/YSv/N7hNQGiSunSeQhKPyTv2OPJLyiwtzt3P6vsIon6YV8nDsF2AOIEangoxvIA7ul+6/l2/R27WHagdPls8qCk4xonh77EvNsTkZSA5YDL0RYLUswHhn66e2imeclFobUqA1+FDZ2eHeOX8Kk/ZB/nyx2BzwYlkfYm7cYFU+NTeY73/f/Uotuw52w3Nnwz+fOZuUMGXuPMnEIkLAngQWg2CcVL0V55iFwOCZ6/+ILNh/6Ozacmmj/yM0vWOyhBb1iGF9BDbvBPv//fpz1rDP7lo+/wsLPw3d6pf9vcm68SWPRJxzy/mB2ph/SjbuRPci29w0754aRwlpHMcmrxQq9M/sj/s3pLQKzHPjxw4U/kUr65c28HHWXM+w0H7/3hq/UahPn/t+z2J+POzdwGpdUAgymxDRQAAAABJRU5ErkJggg==",H_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAbqSURBVHgB5Zx5jBRFFMa/1zO7KIiuElcjEl1JVBAV1HjFiywg4OIZDeAFxisajJxyMy53WA4BE9EEiJxCIsHlPgwYEUGCEExA/1BERUBFbpGd6efXyGo0Sqaqq3Rm95d09THT19evaqrf1z0Cx+j9Rc2RljYI0AkqjbikCJCE0UaKSoDia2BIGqr7ua/tHM+FYplMmL4TDhE4QjsU3QkJynmQdyAudmL9w0FhNkIMkgnTvoQDAsREmzYt1A4NRnFTa5wI5RJBZ57hNu3V9SU4ILZYaPz9Akr2CnIVQV1exNe0R9fRiEkssbTDuTN4NO2RDwj6aM+n+iIG1mKxjerGI3gMeYUO1x5PlsISK7G0bdGlXHU48g+eb1CuvR6vBwvsIqtAnmdZH/mI4FZo4YOwwFgsvR4F3OMLyGc08wwsMI+shsU3Il+j6k9u0xefaABDzMUK05cj3xERnKFNYIhNm1WCGkFwCQwxF0twFmoCKgUwxCayDqAmEIZHYIiFWMFe1AQSsg+GmIuV0S2oCUi4A4aYi3Ws/laWPyOfEayVihn+I0vW7DzO1vFN5DMavgUL7G53JDGR5S/IS3QH6pfMgQVWYsl7P+7maDDyDVVll6G3pFIhLLBO0Ujl/gr2hGchnwiCYTJu2iJYEi9Tejz5HMsVyAcUI6ViaqzaEEssWbH3KCr3t+WBDEPuUkXTohsjqj9iEjsHL9GNw6L9g2hEXcWZDcgZhNaYLMCJsImMnzYZDnBmhVWj91zQDFL1NLd8PWcbhVJ4viJZ12Qbck7DquCCplXZfj9kY8QWO5PUzD5o8DlE1zPapzGavoFDknDM4rP2RFfgOxU0ZNheedJdMSSswpSyCun2r19YqS0oRhskcB2Vuov7KD71ydlcXsD6UsjpRshVsZZ10qsyinIK1TYSyHnIRizXZhRoKKfacR91KMzf60YDzpdyeWRKDMAqXcr5USiVD+CA+L4hWdxZu/O4NzCl9qBNJGXFSu1FoT7k1P0c6mS5VjsKt5aivQ4HxBZraScdK4pxFMvKMcmKVTqaF2EMp86BHS9wGyvYKY1Vk2KJtaSjjqJIPeCT1Zpi2QfxaY3VmIcYWItV2Vnb82r7te1X6J2sRkPgjgcYYdb9LSuxFt6r9ROKifBNgOlwT29UakNYYCUWe00PcdQYPlmtXVheCvcU8efByve0yzoInoV/usAXAZ7GPC00XMtcrGUP63kc3QKPHK5DB0lps/ujmPFl/LSceWQleA/omc8uws0cGVtVRghawBDzZx0CXAjPMLKsGmBDLoIhxmKF6t9kzYjnqIoQ3kcaYm5YhDgBzwSKDHwjOAxDzCNLsAueqXcC/o3c0Pw8jMUKMjA2J025cRdWcnQMfvkChhiL1X6+/MCsyEfwSGGaqWDBevjjAFphHQyx6pSykX8DvlHMgD8msWethutY9uATWMg9+a2OpZjJ0smbEX9BsZt9xamwwEqs9rPkEFd8Cj4RiX4Rn4drBGPRUnbCAusUTbs5sp6BPAg+aSUreXIpuCKq2qUYD0tiJf/azZVh7EoMhU9K5VWWIxCXEJVs0rvYtFXVxE4rl82Wwdx7lFDL2royppUMwO9R/BNsiEyLNrgPKbF6xqEaJ4bFPXNkZDqNKzj5NqL3/nzQWoYxOm7hED0Bk81JR99Zw+EORmc/KmYdUdU4d6yWd9ErM8dRRt+wlBtvxkUXwxB2TSaXzT2tb3g1IssN9AwDplr0j30c4nRke23iL94qtGR/UOKLVI1zk/XunsOPourXuuxf8CDDTDKTPJwIg8j5yT6Ko9Obe5rPW8s2ltEw5uT8Ji2gY5hAiRyHR9yJtTF1GZKZKaiqokMcJHHKAU0nMicHI0xj4QaJ2kt/beYpnLRZ2Dy4G5MqOyhSK+rjPFpzhfhifZoawXaBTo/6z0H9z8QTa3OqnCL1Qy3BXqwtqTJmAgeiFmEn1ryHE1CddNIUq0XYidW4SUf4MUBzGsvn4IPnUAsxF2tdqph3DrejFmIu1pmB8RugNQWLanjifNRSzMXS4D94mVyd3fy6xFyswL/JikCOIgexeDkz8zV8o7oHOYiFWPW2e68m6eQm5CDmYt3Un6ldMTYoDdiFr7Z9jBzErlOqYvUmaFaILMEj8/0/GGKBnVgH8S4F2wbnyEEkClLIUezEapk6gkTY3XnbJTISVw/I2b9CsE/RXFu+GkgMgDtmovmQ2H8155N4yb8WQ0YyGhycIJ3n5tIVOU78tHLzVF9Wx5dh/zxVBYIjD0BSfvxGh7hL3m0dWIIwSStfH81uBf2ETV5vXDd0LfIE95nOSLR00AZB0DH6F1PaWufx9iVyTg9wb99Cw3cQJN5nRG5EnvEbvQfmdcYxgDQAAAAASUVORK5CYII=",V_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAh4SURBVHgB7Vx9jBxlGf89735eez1aasXrB7RohNqmTaQiscakVRRQDEaCRiH+gUHbP0yMJv57+gd/KR/y4VkTjYQoSqJGxZJgsJGDWjwbKrGhhdbS0m5v78rdcR+7ezs7L8/sJuWyO/M+78zO3u4k90smO3nnmd2Z3z5f7/O8MwQf6IfwAAj7eTeHbmBsFVBcha6AtEZKD9Pwxf3Nh1TzgH4Y9zBR30W3iOo2NBEctU/vG7yj+VALWXCxGcsAHL2jeaiVLIUpLAPIuBPNQ61kEd7GMoAanWgeaiXLwVtYBtjJl5qHWsnK4xyWwZqVHW8eaiWrsmyGdayamm4eSrcIbcAMLqIGzjYgfuFmoH8jPEcXJ9xMDm5fFnFDzU9Cjb9pJzw626I0vnfJudYkf6yGCVvvBW68n6NGP+JGeX4W5dIs4ga5LvLPPYrckacFQV2hXxTyzcPKXxjTMEFlgF0/7AhRnYRWCpXdd0Nn8oIkTfiN+pPlwvy3pthEcmuQROhsH19/xixE2ldZgjTL7OSrc5xilJFEqLkpUHnGLKTJ9/79ydK4BAlzycwwqGLhC0n7aoIKEJenPLMJTcfKFmS55KssQWZYgIRKMqeQVFuQhVJOCAcPnIUEJ/7QvhSg+WlZSNNJv+EgnzUJCQvvIImgypwspFD0H/YflclKqhnOW1y3q0JEQ2AcEhYSSpZj47NQ8hsOIku2sYUZJBGpwusWUjVfx5b2lc3wZFr6A5xkkUW1KnIjTyJ96ogsnHZ8zdCfrCrkkFGW3ZovnljPWmn++jx3d/Ld6u54SK/gPKuVL18zpO9wVYtzdJgwcwaRkB1AT4N0jR58K5TP8tIHs9+av8AyGqGR6aLG2CHQZILJIpidkuuwuUbwW/m16GkQRSALFn6rGiEx7fXSjtaBFReTGcoz5WqEKU9uNXoaBotKG06Si9ULFvOsZmz8LJtwzShSe18atUG5BWAL0i5SZ1+FmirYCAe2Ak1kjUHy36UJhMaWLzU2A6qdqMEzYQO/3Ad1/rhZzsX/gw4Fm2HNJotP0GSauP7+0dst5CjwpoLJSlmQlbQyDWuXCEKguQST5dhoVgSf1UVQyeJ6yQ2sEASTlbaoPFQiTnm6BKpWZKEaBUbDYLJcmwJg0jTLIonOVOeDDgWTpSCXFEuy8vUSqGQRkKhWDDpkcvAWHR65VN9LUJPnZSFXR4iG++uaVYUJCdMsNSO1Q7Wmn02HnxsS1VNSs1NKmM+C1Ikms+sxTaQ9mFN0h31hzSLC9AC8Fdu0UBKEzBmAmSybyfTEUSQBVm17pcdMh9MwQ/aIz30VuOl+YOXViAtqZgHp2eAmgHvFINzVH0AYWEVCl4zdDIksOdcqs6Ueug9xIss1+KyhBl/+9LdQ3n03wsCqEw1tFJJ8Vk82B3VfhDq+TfaulXGpVTLJyq1AWIjOvS7kthENXfRkbqD7rkBYqJJN214bEzGzz0pzidWmgfPhe4Cd3+MrElYYeyWSmdPs4+5tK6HVKcnV+sCmmJjWRkbNv+rgkrjAe+Ba4FPDsMbAFuCTj3IU/QoiIx9+4a8q20TDTFs+S36AYOCDCI0rt6EduLmVCAv1TlEWSpujgFmzslwANPcWuKYlLz9twYpBYO8TwNmDwLmDVsuXdHYFqjtvgbPlBs6x1iMsaOqiLKTTbfisBfZZkhlWIsSAVB649suNzavjF0aYuGeAk0/yBTuXxbyoV922F9Wte+BcvcNi/XowrAp/NG28GTNZGzkaFuAVrg3l53m0BW/twzW3NbZPPAhcHIHz+hFU+nfA2bSd/+x4HqhV8iI2jeNzxrmwkSy6CzX9MDz9Ddb7OCsP3sMIG/bCWXMjqnG3wqRVyik9TYfgmEQkB+/xfcZ43NMs12I1XZchPijg4gQEyGQBchip9HZdq+6vpBU/0kIY2JGV+P4hlaxmbWLRwIYsmYkeX19KJYvl3HBjIIssyjQ93riwaq66Sly4YePgZbKO/7wu2KvI/ev3spCCmAPJM1LNuZb0VO/554HfbQe27+MkYw+wpr3pTBxITV5A+rV/InfsWajiKfkEV4tTO5ksiyhRh7cg9/APGvtrdzaWFW1g4tbtwlIhNfYG0qdHkT3xAlJn/xvqXM6zxChgQ1b4vODSscY2OgS8/2PAplu5jPN1rtNvRNzweoGZ//0dmZMv1hesketE+yKtxEmuTWGovU5q8d+N7T8/amjZNV8APsTlmf7oDQ6v+ZAb/RMyp16GunAc5FTRNgIeQVkMG82ais13j482Nk/j1u5g0r4GbGbyVm0RT/UIyh79M7InX0Lq3KuIHSQ/MiK+kEE/gD6m9CgTdj06hTVb2Uy/weZ6M7D6+suvKlAz48iceBHZV55B6sJr6BhIn0J+5TZ65A1jacLq7RU8mb6BPx7j7ePoNK78CGorPwd65RibWAcJeg+HkXW+T48XX5IEQ73qQ/8UN7GG3cK7d/G2FZ1Cp9/MptzT7NCfRqb6V3p8fMT2tMjvRWHz3MVO8fO8+014la840QmyyC2A6Fd8zc/iqusO09Ch0GEzlpfI6EewmzWO+/i4kz/D9dX9EBtZNAVV+y2T9BQGCyM0BIsVuIZvQ8yomyrhPibt1sjEtUfWFCeYXNjHMAZzL9PQmdje1hE7WYuhH8LN/AuemXIqj3XWJ4YmizUo5f6D/5xhrL/u+SgmZvUrWALox9CPKu7gm7mdJ6wycVZk1U3sBWRwEOvo1zRUaLMZIGNJyFoM1rarmLC97D3u5F//IvwS42CyNEeyv0HRX9Dv/pF+PGbRDIwPS07WYuifYBNHpz18FV57+rbLB5rJUu5hKPUbrgw8RQcKER4YigddJWsxOBXZwMR9hne/jWL/LhQHeNLnHuCa9R/owITF41ydx7uXcd3RUR+hVAAAAABJRU5ErkJggg==",G_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23F4F2ED'%20rx='60'/%3e%3cpath%20fill='%234E7896'%20d='M101.634%20182.619C101.634%20182.619%2093.9548%20187.293%20106.979%20188.63C122.707%20190.634%20131.023%20190.299%20148.386%20186.962C148.386%20186.962%20153.06%20189.971%20159.406%20192.306C120.331%20209.002%2070.9089%20191.304%20101.634%20182.619ZM96.6252%20160.914C96.6252%20160.914%2088.2753%20167.26%20101.299%20168.593C118.327%20170.262%20131.69%20170.597%20154.732%20165.926C154.732%20165.926%20157.741%20169.267%20162.747%20170.936C115.664%20184.961%2062.8975%20172.269%2096.6252%20160.917V160.914ZM188.795%20198.984C188.795%20198.984%20194.471%20203.658%20182.449%20207.334C160.073%20214.012%2088.6104%20216.019%2068.5735%20207.334C61.564%20204.325%2074.9197%20199.982%2079.2587%20199.319C83.6012%20198.317%2085.9366%20198.317%2085.9366%20198.317C78.2569%20192.973%2034.8424%20209.337%2063.8959%20214.046C143.709%20227.073%20209.499%20208.37%20188.792%20199.018L188.795%20198.984ZM105.307%20138.203C105.307%20138.203%2068.9052%20146.888%2092.2793%20149.89C102.298%20151.223%20122%20150.892%20140.368%20149.555C155.396%20148.221%20170.458%20145.548%20170.458%20145.548C170.458%20145.548%20165.113%20147.886%20161.441%20150.222C124.342%20159.915%2053.2107%20155.573%2073.5827%20145.554C90.9526%20137.204%20105.307%20138.203%20105.307%20138.203V138.203ZM170.423%20174.604C207.83%20155.234%20190.46%20136.534%20178.438%20138.873C175.429%20139.54%20174.096%20140.207%20174.096%20140.207C174.096%20140.207%20175.097%20138.203%20177.436%20137.54C201.145%20129.19%20219.849%20162.586%20169.757%20175.61C169.757%20175.61%20170.092%20175.275%20170.423%20174.608V174.604ZM108.979%20227.364C145.046%20229.703%20200.147%20226.03%20201.484%20208.995C201.484%20208.995%20198.817%20215.673%20171.764%20220.683C141.042%20226.359%20102.968%20225.692%2080.5957%20222.016C80.5957%20222.016%2085.2698%20226.023%20108.982%20227.36L108.979%20227.364Z'/%3e%3cpath%20fill='%23F58219'%20d='M147.685%2028C147.685%2028%20168.389%2049.0388%20127.983%2080.7594C95.5891%20106.472%20120.632%20121.168%20127.983%20137.861C108.948%20120.833%2095.2609%20105.802%20104.606%2091.7762C118.331%2071.0828%20156.062%2061.0644%20147.685%2028ZM137%20123.842C146.683%20134.862%20134.333%20144.881%20134.333%20144.881C134.333%20144.881%20159.044%20132.195%20147.692%20116.494C137.338%20101.466%20129.324%2094.1184%20172.738%2069.0689C172.738%2069.0689%20104.277%2086.0968%20137.007%20123.835L137%20123.842Z'/%3e%3c/svg%3e",W_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23242938'%20rx='60'/%3e%3cpath%20fill='%23fff'%20d='M101.634%20182.619C101.634%20182.619%2093.9548%20187.293%20106.979%20188.63C122.707%20190.634%20131.023%20190.299%20148.386%20186.962C148.386%20186.962%20153.06%20189.971%20159.406%20192.306C120.331%20209.002%2070.9089%20191.304%20101.634%20182.619ZM96.6252%20160.914C96.6252%20160.914%2088.2753%20167.26%20101.299%20168.593C118.327%20170.262%20131.69%20170.597%20154.732%20165.926C154.732%20165.926%20157.741%20169.267%20162.747%20170.936C115.664%20184.961%2062.8975%20172.269%2096.6252%20160.917V160.914ZM188.795%20198.984C188.795%20198.984%20194.471%20203.658%20182.449%20207.334C160.073%20214.012%2088.6104%20216.019%2068.5735%20207.334C61.564%20204.325%2074.9197%20199.982%2079.2587%20199.319C83.6012%20198.317%2085.9366%20198.317%2085.9366%20198.317C78.2569%20192.973%2034.8424%20209.337%2063.8959%20214.046C143.709%20227.073%20209.499%20208.37%20188.792%20199.018L188.795%20198.984ZM105.307%20138.203C105.307%20138.203%2068.9052%20146.888%2092.2793%20149.89C102.298%20151.223%20122%20150.892%20140.368%20149.555C155.396%20148.221%20170.458%20145.548%20170.458%20145.548C170.458%20145.548%20165.113%20147.886%20161.441%20150.222C124.342%20159.915%2053.2107%20155.573%2073.5827%20145.554C90.9526%20137.204%20105.307%20138.203%20105.307%20138.203V138.203ZM170.423%20174.604C207.83%20155.234%20190.46%20136.534%20178.438%20138.873C175.429%20139.54%20174.096%20140.207%20174.096%20140.207C174.096%20140.207%20175.097%20138.203%20177.436%20137.54C201.145%20129.19%20219.849%20162.586%20169.757%20175.61C169.757%20175.61%20170.092%20175.275%20170.423%20174.608V174.604ZM108.979%20227.364C145.046%20229.703%20200.147%20226.03%20201.484%20208.995C201.484%20208.995%20198.817%20215.673%20171.764%20220.683C141.042%20226.359%20102.968%20225.692%2080.5957%20222.016C80.5957%20222.016%2085.2698%20226.023%20108.982%20227.36L108.979%20227.364Z'/%3e%3cpath%20fill='%23F58219'%20d='M147.685%2028C147.685%2028%20168.389%2049.0388%20127.983%2080.7594C95.5891%20106.472%20120.632%20121.168%20127.983%20137.861C108.948%20120.833%2095.2609%20105.802%20104.606%2091.7762C118.331%2071.0828%20156.062%2061.0644%20147.685%2028ZM137%20123.842C146.683%20134.862%20134.333%20144.881%20134.333%20144.881C134.333%20144.881%20159.044%20132.195%20147.692%20116.494C137.338%20101.466%20129.324%2094.1184%20172.738%2069.0689C172.738%2069.0689%20104.278%2086.0968%20137.007%20123.835L137%20123.842Z'/%3e%3c/svg%3e",X_="data:image/svg+xml,%3csvg%20width='256'%20height='256'%20viewBox='0%200%20256%20256'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='256'%20height='256'%20rx='60'%20fill='%23F0DB4F'/%3e%3cpath%20d='M67.3117%20213.932L86.9027%20202.076C90.6821%20208.777%2094.1202%20214.447%20102.367%20214.447C110.272%20214.447%20115.256%20211.355%20115.256%20199.327V117.529H139.314V199.667C139.314%20224.584%20124.708%20235.926%20103.398%20235.926C84.1533%20235.926%2072.9819%20225.959%2067.3113%20213.93'%20fill='%23323330'/%3e%3cpath%20d='M152.381%20211.354L171.969%20200.013C177.126%20208.434%20183.828%20214.62%20195.684%20214.62C205.653%20214.62%20212.009%20209.636%20212.009%20202.762C212.009%20194.514%20205.479%20191.592%20194.481%20186.782L188.468%20184.203C171.111%20176.815%20159.597%20167.535%20159.597%20147.945C159.597%20129.901%20173.345%20116.153%20194.826%20116.153C210.12%20116.153%20221.118%20121.481%20229.022%20135.4L210.291%20147.429C206.166%20140.04%20201.7%20137.119%20194.826%20137.119C187.78%20137.119%20183.312%20141.587%20183.312%20147.429C183.312%20154.646%20187.78%20157.568%20198.09%20162.037L204.104%20164.614C224.553%20173.379%20236.067%20182.313%20236.067%20202.418C236.067%20224.072%20219.055%20235.928%20196.2%20235.928C173.861%20235.928%20159.426%20225.274%20152.381%20211.354'%20fill='%23323330'/%3e%3c/svg%3e",j_="/SadeepPortfolio/assets/linux-rHtTTlLN.svg",Y_="/SadeepPortfolio/assets/linuxD-XQ1i1LZL.svg",q_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='100'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23F4F2ED'%20rx='60'/%3e%3cg%20clip-path='url(%23clip0_7_150)'%3e%3cpath%20fill='%2300678C'%20fill-rule='evenodd'%20d='M203.801%20178.21C194.011%20177.938%20186.416%20178.941%20180.051%20181.619C178.218%20182.355%20175.277%20182.355%20175.035%20184.662C176.015%20185.63%20176.133%20187.214%20176.992%20188.556C178.459%20190.991%20181.033%20194.271%20183.357%20195.973L191.191%20201.571C195.965%20204.488%20201.351%20206.193%20206.002%20209.113C208.696%20210.817%20211.388%20213.007%20214.082%20214.834C215.454%20215.807%20216.285%20217.392%20218%20217.997V217.629C217.144%20216.538%20216.897%20214.957%20216.044%20213.735L212.367%20210.209C208.82%20205.465%20204.41%20201.325%20199.636%20197.922C195.718%20195.245%20187.152%20191.596%20185.56%20187.097L185.319%20186.824C188.008%20186.552%20191.191%20185.605%20193.764%20184.875C197.929%20183.784%20201.721%20184.024%20206.002%20182.93L211.882%20181.226V180.135C209.678%20177.946%20208.087%20175.025%20205.763%20172.959C199.521%20167.606%20192.661%20162.373%20185.56%20157.994C181.766%20155.562%20176.868%20153.977%20172.829%20151.913C171.356%20151.182%20168.911%20150.817%20168.055%20149.601C165.846%20146.929%20164.625%20143.397%20163.034%20140.232L152.997%20119.064C150.794%20114.319%20149.444%20109.574%20146.755%20105.195C134.144%2084.5124%20120.431%2071.9828%2099.375%2059.6932C94.8477%2057.1382%2089.4616%2056.0393%2083.7353%2054.7032L74.5546%2054.2124C72.5928%2053.3616%2070.6364%2051.0493%2068.9216%2049.9531C61.9441%2045.5739%2043.9475%2036.0847%2038.8029%2048.5897C35.4966%2056.4974%2043.7006%2064.2824%2046.4855%2068.299C48.5708%2071.0966%2051.2597%2074.2597%2052.7332%2077.4228C53.5563%2079.4897%2053.8307%2081.682%2054.6895%2083.8717C56.6458%2089.2243%2058.4842%2095.1878%2061.0551%20100.178C62.427%20102.733%2063.8675%20105.413%2065.5824%20107.723C66.5619%20109.086%2068.2768%20109.67%2068.6417%20111.859C66.9268%20114.294%2066.8089%20117.94%2065.8293%20120.986C61.42%20134.734%2063.1349%20151.766%2069.377%20161.888C71.3389%20164.928%2075.9622%20171.622%2082.2345%20169.065C87.744%20166.875%2086.5148%20159.941%2088.1062%20153.857C88.4766%20152.399%2088.2297%20151.425%2088.9623%20150.449V150.722L93.9834%20160.819C97.7781%20166.78%20104.391%20172.986%20109.897%20177.125C112.833%20179.315%20115.16%20183.089%20118.831%20184.425V184.057H118.59C117.854%20182.966%20116.751%20182.475%20115.772%20181.624C113.569%20179.435%20111.121%20176.757%20109.406%20174.325C104.267%20167.513%2099.7399%20159.968%2095.6983%20152.183C93.7365%20148.412%2092.0216%20144.275%2090.4357%20140.504C89.6949%20139.043%2089.6949%20136.85%2088.4739%20136.125C86.6355%20138.797%2083.9466%20141.115%2082.5939%20144.398C80.2672%20149.628%2080.0257%20156.077%2079.1697%20162.769C78.6758%20162.891%2078.8953%20162.769%2078.6758%20163.041C74.7631%20162.071%2073.4132%20158.051%2071.9453%20154.648C68.274%20146.01%2067.6594%20132.141%2070.8422%20122.164C71.6983%20119.609%2075.375%20111.579%2073.9071%20109.146C73.1662%20106.834%2070.7242%20105.498%2069.3743%20103.671C67.7829%20101.359%2066.0735%2098.4409%2064.9705%2095.8859C62.0346%2089.0689%2060.5667%2081.5293%2057.3812%2074.7151C55.9077%2071.552%2053.3396%2068.2662%2051.257%2065.3486C48.9303%2062.0628%2046.3648%2059.7505%2044.5265%2055.8593C43.9146%2054.4959%2043.0585%2052.3309%2044.0381%2050.8693C44.2795%2049.8959%2044.7734%2049.5059%2045.7475%2049.2878C47.3389%2047.9244%2051.8716%2049.6532%2053.463%2050.3785C57.9903%2052.2054%2061.7849%2053.907%2065.5796%2056.4592C67.2945%2057.6754%2069.1329%2059.9877%2071.3361%2060.5985H73.9098C77.8279%2061.4493%2082.2317%2060.8712%2085.9002%2061.9619C92.3893%2064.0343%2098.2637%2067.0719%20103.532%2070.3604C119.567%2080.4577%20132.792%2094.8143%20141.725%20111.971C143.193%20114.769%20143.805%20117.324%20145.155%20120.244C147.729%20126.208%20150.912%20132.289%20153.477%20138.132C156.051%20143.85%20158.498%20149.694%20162.17%20154.438C164.008%20156.993%20171.35%20158.329%20174.654%20159.668C177.104%20160.759%20180.896%20161.741%20183.105%20163.077C187.264%20165.632%20191.427%20168.552%20195.342%20171.35C197.298%20172.806%20203.423%20175.849%20203.787%20178.276L203.801%20178.21ZM78.9584%2072.4873C77.267%2072.4724%2075.5809%2072.6769%2073.9427%2073.0954V73.3681H74.1842C75.1637%2075.315%2076.8786%2076.6538%2078.1023%2078.3581L80.9202%2084.1989L81.1616%2083.9262C82.8765%2082.71%2083.7353%2080.7631%2083.7353%2077.8454C83%2076.9947%2082.8793%2076.1412%2082.2674%2075.2904C81.5321%2074.0743%2079.9407%2073.4635%2078.9584%2072.4928V72.4873Z'%20clip-rule='evenodd'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_7_150'%3e%3crect%20width='180'%20height='180'%20fill='%23fff'%20transform='translate(38%2038)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",K_="/SadeepPortfolio/assets/node-BuugxZfd.png",Z_="/SadeepPortfolio/assets/php-Ch9CcwMG.png",Q_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23F4F2ED'%20rx='60'/%3e%3cpath%20fill='%23000'%20d='M49.158%20100.246H77.566C85.904%20100.316%2091.946%20102.72%2095.692%20107.454C99.438%20112.188%20100.674%20118.654%2099.402%20126.852C98.908%20130.598%2097.812%20134.272%2096.116%20137.876C94.49%20141.48%2092.23%20144.73%2089.332%20147.628C85.798%20151.302%2082.018%20153.634%2077.99%20154.624C73.962%20155.614%2069.792%20156.108%2065.482%20156.108H52.762L48.734%20176.248H34L49.158%20100.246V100.246ZM61.56%20112.33L55.2%20144.13C55.624%20144.2%2056.048%20144.236%2056.472%20144.236C56.966%20144.236%2057.462%20144.236%2057.956%20144.236C64.74%20144.306%2070.394%20143.636%2074.916%20142.222C79.438%20140.738%2082.478%20135.58%2084.032%20126.746C85.304%20119.326%2084.032%20115.05%2080.216%20113.92C76.47%20112.79%2071.772%20112.26%2066.118%20112.33C65.27%20112.4%2064.458%20112.436%2063.68%20112.436C62.974%20112.436%2062.232%20112.436%2061.454%20112.436L61.56%20112.33'/%3e%3cpath%20fill='%23000'%20d='M116.186%2080H130.814L126.68%20100.246H139.824C147.032%20100.388%20152.402%20101.872%20155.936%20104.698C159.54%20107.524%20160.6%20112.896%20159.116%20120.81L152.014%20156.108H137.174L143.958%20122.4C144.664%20118.866%20144.452%20116.358%20143.322%20114.874C142.192%20113.39%20139.754%20112.648%20136.008%20112.648L124.242%20112.542L115.55%20156.108H100.922L116.186%2080Z'/%3e%3cpath%20fill='%23000'%20d='M174.824%20100.246H203.232C211.57%20100.316%20217.612%20102.72%20221.358%20107.454C225.104%20112.188%20226.34%20118.654%20225.068%20126.852C224.574%20130.598%20223.478%20134.272%20221.782%20137.876C220.156%20141.48%20217.896%20144.73%20214.998%20147.628C211.464%20151.302%20207.684%20153.634%20203.656%20154.624C199.628%20155.614%20195.458%20156.108%20191.148%20156.108H178.428L174.4%20176.248H159.666L174.824%20100.246V100.246ZM187.226%20112.33L180.866%20144.13C181.29%20144.2%20181.714%20144.236%20182.138%20144.236C182.632%20144.236%20183.128%20144.236%20183.622%20144.236C190.406%20144.306%20196.06%20143.636%20200.582%20142.222C205.104%20140.738%20208.144%20135.58%20209.698%20126.746C210.97%20119.326%20209.698%20115.05%20205.882%20113.92C202.136%20112.79%20197.438%20112.26%20191.784%20112.33C190.936%20112.4%20190.124%20112.436%20189.346%20112.436C188.64%20112.436%20187.898%20112.436%20187.12%20112.436L187.226%20112.33'/%3e%3c/svg%3e",J_="/SadeepPortfolio/assets/react-DnG5Nebg.png",ci=t=>new URL(Object.assign({"/assets/Contact/emailIcon.png":__,"/assets/Contact/githubIcon.png":v_,"/assets/Contact/linkedinIcon.png":x_,"/assets/hero/Hero1.png":S_,"/assets/hero/IMG_0360.jpg":y_,"/assets/logo/D_UCSC.png":M_,"/assets/logo/SSC.png":E_,"/assets/logo/UCSC.png":A_,"/assets/nav/closeIcon.png":C_,"/assets/nav/menuIcon.png":w_,"/assets/nav/sss.jpg":T_,"/assets/skills/Bootstrap.svg":R_,"/assets/skills/C.svg":P_,"/assets/skills/CPP.svg":L_,"/assets/skills/CSS.svg":b_,"/assets/skills/Discord.svg":I_,"/assets/skills/Figma-Dark.svg":D_,"/assets/skills/Github-Dark.svg":U_,"/assets/skills/HTML.svg":N_,"/assets/skills/React-Dark.svg":F_,"/assets/skills/Scala-Dark.svg":O_,"/assets/skills/Spring.svg":B_,"/assets/skills/VSCode-Dark.svg":k_,"/assets/skills/css.png":z_,"/assets/skills/figma.png":H_,"/assets/skills/html.png":V_,"/assets/skills/java.svg":G_,"/assets/skills/javaD.svg":W_,"/assets/skills/js.svg":X_,"/assets/skills/linux.svg":j_,"/assets/skills/linuxD.svg":Y_,"/assets/skills/mysql.svg":q_,"/assets/skills/node.png":K_,"/assets/skills/php.png":Z_,"/assets/skills/php.svg":Q_,"/assets/skills/react.png":J_})[`/assets/${t}`],import.meta.url).href,$_=()=>se.jsxs("footer",{id:"contact",className:vi.container,children:[se.jsxs("div",{className:vi.text,children:[se.jsx("h2",{children:"Contact"}),se.jsx("p",{children:"Feel free to reach out!"})]}),se.jsxs("ul",{className:vi.links,children:[se.jsxs("li",{className:vi.link,children:[se.jsx("img",{src:ci("Contact/emailIcon.png"),alt:"Email icon"}),se.jsx("a",{href:"mailto:chathushan43sadeep@gmail.com",children:"chathushan43sadeep@gmail.com "})]}),se.jsxs("li",{className:vi.link,children:[se.jsx("img",{src:ci("Contact/linkedinIcon.png"),alt:"Linkedin icon"}),se.jsx("a",{href:"https://www.linkedin.com/in/sadeep-chathushan-a9a675281/",children:"linkedin.com/Sadeep-Chathushan "})]}),se.jsxs("li",{className:vi.link,children:[se.jsx("img",{src:ci("Contact/githubIcon.png"),alt:"Github icon"}),se.jsx("a",{href:"https://github.com/SadeepChathushan",children:"github.com/SadeepChathushan "})]})]}),se.jsx("div",{className:vi.topBlur}),se.jsx("div",{className:vi.bottomBlur})]}),ev="_container_wnvc6_3",tv="_fadeIn_wnvc6_1",nv="_title_wnvc6_18",iv="_content_wnvc6_40",rv="_skill_wnvc6_47",sv="_skillImageContainer_wnvc6_58",ov="_skillTitle_wnvc6_73",av="_topBlur_wnvc6_86",lv="_bottomBlur_wnvc6_95",Pr={container:ev,fadeIn:tv,title:nv,content:iv,skill:rv,skillImageContainer:sv,skillTitle:ov,topBlur:av,bottomBlur:lv},cv=[{title:"React",imageSrc:"skills/React-Dark.svg"},{title:"Spring",imageSrc:"skills/Spring.svg"},{title:"PHP",imageSrc:"skills/php.svg"},{title:"Java",imageSrc:"skills/javaD.svg"},{title:"JavaScript",imageSrc:"skills/js.svg"},{title:"MySQL",imageSrc:"skills/mysql.svg"}],uv=()=>se.jsxs("section",{className:Pr.container,id:"experience",children:[se.jsx("h2",{className:Pr.title,children:"Skills & Technologies"}),se.jsx("div",{className:Pr.content,children:cv.map((t,e)=>se.jsxs("div",{className:Pr.skill,children:[se.jsx("div",{className:Pr.skillImageContainer,children:se.jsx("img",{src:ci(t.imageSrc),alt:t.title})}),se.jsx("p",{className:Pr.skillTitle,children:t.title})]},e))})]});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const md="168",fv=0,Gh=1,dv=2,$m=1,hv=2,ei=3,Xi=0,Jt=1,ii=2,Hi=0,hs=1,Wh=2,Xh=3,jh=4,pv=5,cr=100,mv=101,gv=102,_v=103,vv=104,xv=200,Sv=201,yv=202,Mv=203,zu=204,Hu=205,Ev=206,Av=207,Cv=208,wv=209,Tv=210,Rv=211,Pv=212,Lv=213,bv=214,Iv=0,Dv=1,Uv=2,gl=3,Nv=4,Fv=5,Ov=6,Bv=7,e2=0,kv=1,zv=2,Vi=0,Hv=1,Vv=2,Gv=3,Wv=4,Xv=5,jv=6,Yv=7,t2=300,As=301,Cs=302,Vu=303,Gu=304,Bl=306,Wu=1e3,pr=1001,Xu=1002,vn=1003,qv=1004,sa=1005,Ln=1006,vc=1007,mr=1008,pi=1009,n2=1010,i2=1011,Ro=1012,gd=1013,Er=1014,oi=1015,Uo=1016,_d=1017,vd=1018,ws=1020,r2=35902,s2=1021,o2=1022,bn=1023,a2=1024,l2=1025,ps=1026,Ts=1027,c2=1028,xd=1029,u2=1030,Sd=1031,yd=1033,za=33776,Ha=33777,Va=33778,Ga=33779,ju=35840,Yu=35841,qu=35842,Ku=35843,Zu=36196,Qu=37492,Ju=37496,$u=37808,ef=37809,tf=37810,nf=37811,rf=37812,sf=37813,of=37814,af=37815,lf=37816,cf=37817,uf=37818,ff=37819,df=37820,hf=37821,Wa=36492,pf=36494,mf=36495,f2=36283,gf=36284,_f=36285,vf=36286,Kv=3200,Zv=3201,d2=0,Qv=1,Li="",Bn="srgb",Zi="srgb-linear",Md="display-p3",kl="display-p3-linear",_l="linear",tt="srgb",vl="rec709",xl="p3",Lr=7680,Yh=519,Jv=512,$v=513,ex=514,h2=515,tx=516,nx=517,ix=518,rx=519,qh=35044,Kh="300 es",ai=2e3,Sl=2001;class Is{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xc=Math.PI/180,xf=180/Math.PI;function No(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[t&255]+Nt[t>>8&255]+Nt[t>>16&255]+Nt[t>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[n&63|128]+Nt[n>>8&255]+"-"+Nt[n>>16&255]+Nt[n>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function sx(t,e){return(t%e+e)%e}function Sc(t,e,n){return(1-n)*t+n*e}function Vs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Xt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,n=0){Ge.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,n,i,r,s,o,a,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],p=i[5],v=i[8],x=r[0],m=r[3],u=r[6],_=r[1],g=r[4],M=r[7],P=r[2],C=r[5],w=r[8];return s[0]=o*x+a*_+l*P,s[3]=o*m+a*g+l*C,s[6]=o*u+a*M+l*w,s[1]=c*x+f*_+h*P,s[4]=c*m+f*g+h*C,s[7]=c*u+f*M+h*w,s[2]=d*x+p*_+v*P,s[5]=d*m+p*g+v*C,s[8]=d*u+p*M+v*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,d=a*l-f*s,p=c*s-o*l,v=n*h+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=h*x,e[1]=(r*c-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(yc.makeScale(e,n)),this}rotate(e){return this.premultiply(yc.makeRotation(-e)),this}translate(e,n){return this.premultiply(yc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yc=new Ne;function p2(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function yl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ox(){const t=yl("canvas");return t.style.display="block",t}const Zh={};function co(t){t in Zh||(Zh[t]=!0,console.warn(t))}function ax(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Qh=new Ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jh=new Ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gs={[Zi]:{transfer:_l,primaries:vl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Bn]:{transfer:tt,primaries:vl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[kl]:{transfer:_l,primaries:xl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Jh),fromReference:t=>t.applyMatrix3(Qh)},[Md]:{transfer:tt,primaries:xl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Jh),fromReference:t=>t.applyMatrix3(Qh).convertLinearToSRGB()}},lx=new Set([Zi,kl]),Ke={enabled:!0,_workingColorSpace:Zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!lx.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Gs[e].toReference,r=Gs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Gs[t].primaries},getTransfer:function(t){return t===Li?_l:Gs[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Gs[e].luminanceCoefficients)}};function ms(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Mc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let br;class cx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{br===void 0&&(br=yl("canvas")),br.width=e.width,br.height=e.height;const i=br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=br}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=yl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ms(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ms(n[i]/255)*255):n[i]=ms(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ux=0;class m2{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=No(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ec(r[o].image)):s.push(Ec(r[o]))}else s=Ec(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ec(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?cx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fx=0;class $t extends Is{constructor(e=$t.DEFAULT_IMAGE,n=$t.DEFAULT_MAPPING,i=pr,r=pr,s=Ln,o=mr,a=bn,l=pi,c=$t.DEFAULT_ANISOTROPY,f=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=No(),this.name="",this.source=new m2(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==t2)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wu:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case Xu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wu:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case Xu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=t2;$t.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,n=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],p=l[5],v=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,M=(p+1)/2,P=(u+1)/2,C=(f+d)/4,w=(h+x)/4,b=(v+m)/4;return g>M&&g>P?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=C/i,s=w/i):M>P?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=b/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=w/s,r=b/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-v)*(m-v)+(h-x)*(h-x)+(d-f)*(d-f));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(h-x)/_,this.z=(d-f)/_,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dx extends Is{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new m2(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends dx{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class g2 extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hx extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(h!==x||l!==d||c!==p||f!==v){let m=1-a;const u=l*d+c*p+f*v+h*x,_=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const P=Math.sqrt(g),C=Math.atan2(P,u*_);m=Math.sin(m*C)/P,a=Math.sin(a*C)/P}const M=a*_;if(l=l*m+d*M,c=c*m+p*M,f=f*m+v*M,h=h*m+x*M,m===1-a){const P=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=P,c*=P,f*=P,h*=P}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+f*h+l*p-c*d,e[n+1]=l*v+f*d+c*h-a*p,e[n+2]=c*v+f*p+a*d-l*h,e[n+3]=f*v-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*f*h+c*p*v,this._y=c*p*h-d*f*v,this._z=c*f*v+d*p*h,this._w=c*f*h-d*p*v;break;case"YXZ":this._x=d*f*h+c*p*v,this._y=c*p*h-d*f*v,this._z=c*f*v-d*p*h,this._w=c*f*h+d*p*v;break;case"ZXY":this._x=d*f*h-c*p*v,this._y=c*p*h+d*f*v,this._z=c*f*v+d*p*h,this._w=c*f*h-d*p*v;break;case"ZYX":this._x=d*f*h-c*p*v,this._y=c*p*h+d*f*v,this._z=c*f*v-d*p*h,this._w=c*f*h+d*p*v;break;case"YZX":this._x=d*f*h+c*p*v,this._y=c*p*h+d*f*v,this._z=c*f*v-d*p*h,this._w=c*f*h-d*p*v;break;case"XZY":this._x=d*f*h-c*p*v,this._y=c*p*h-d*f*v,this._z=c*f*v+d*p*h,this._w=c*f*h+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-n)*f)/c,d=Math.sin(n*f)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($h.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($h.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ac.copy(this).projectOnVector(e),this.sub(Ac)}reflect(e){return this.sub(Ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ac=new B,$h=new Fo;class Oo{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(An.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(An.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=An.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(s,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oa.copy(i.boundingBox)),oa.applyMatrix4(e.matrixWorld),this.union(oa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),aa.subVectors(this.max,Ws),Ir.subVectors(e.a,Ws),Dr.subVectors(e.b,Ws),Ur.subVectors(e.c,Ws),xi.subVectors(Dr,Ir),Si.subVectors(Ur,Dr),$i.subVectors(Ir,Ur);let n=[0,-xi.z,xi.y,0,-Si.z,Si.y,0,-$i.z,$i.y,xi.z,0,-xi.x,Si.z,0,-Si.x,$i.z,0,-$i.x,-xi.y,xi.x,0,-Si.y,Si.x,0,-$i.y,$i.x,0];return!Cc(n,Ir,Dr,Ur,aa)||(n=[1,0,0,0,1,0,0,0,1],!Cc(n,Ir,Dr,Ur,aa))?!1:(la.crossVectors(xi,Si),n=[la.x,la.y,la.z],Cc(n,Ir,Dr,Ur,aa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new B,new B,new B,new B,new B,new B,new B,new B],An=new B,oa=new Oo,Ir=new B,Dr=new B,Ur=new B,xi=new B,Si=new B,$i=new B,Ws=new B,aa=new B,la=new B,er=new B;function Cc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){er.fromArray(t,s);const a=r.x*Math.abs(er.x)+r.y*Math.abs(er.y)+r.z*Math.abs(er.z),l=e.dot(er),c=n.dot(er),f=i.dot(er);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const px=new Oo,Xs=new B,wc=new B;class Ed{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):px.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const n=Xs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Xs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(wc)),this.expandByPoint(Xs.copy(e.center).sub(wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new B,Tc=new B,ca=new B,yi=new B,Rc=new B,ua=new B,Pc=new B;class mx{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Zn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,n),Zn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Tc.copy(e).add(n).multiplyScalar(.5),ca.copy(n).sub(e).normalize(),yi.copy(this.origin).sub(Tc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ca),a=yi.dot(this.direction),l=-yi.dot(ca),c=yi.lengthSq(),f=Math.abs(1-o*o);let h,d,p,v;if(f>0)if(h=o*l-a,d=o*a-l,v=s*f,h>=0)if(d>=-v)if(d<=v){const x=1/f;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Tc).addScaledVector(ca,d),p}intersectSphere(e,n){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),r=Zn.dot(Zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,n,i,r,s){Rc.subVectors(n,e),ua.subVectors(i,e),Pc.crossVectors(Rc,ua);let o=this.direction.dot(Pc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);const l=a*this.direction.dot(ua.crossVectors(yi,ua));if(l<0)return null;const c=a*this.direction.dot(Rc.cross(yi));if(c<0||l+c>o)return null;const f=-a*yi.dot(Pc);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,i,r,s,o,a,l,c,f,h,d,p,v,x,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,d,p,v,x,m)}set(e,n,i,r,s,o,a,l,c,f,h,d,p,v,x,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=p,u[7]=v,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Nr.setFromMatrixColumn(e,0).length(),s=1/Nr.setFromMatrixColumn(e,1).length(),o=1/Nr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,p=o*h,v=a*f,x=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=p+v*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,p=l*h,v=c*f,x=c*h;n[0]=d+x*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=p*a-v,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,p=l*h,v=c*f,x=c*h;n[0]=d-x*a,n[4]=-o*h,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*f,n[9]=x-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,p=o*h,v=a*f,x=a*h;n[0]=l*f,n[4]=v*c-p,n[8]=d*c+x,n[1]=l*h,n[5]=x*c+d,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*f,n[4]=x-d*h,n[8]=v*h+p,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*h+v,n[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+x,n[5]=o*f,n[9]=p*h-v,n[2]=v*h-p,n[6]=a*f,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gx,e,_x)}lookAt(e,n,i){const r=this.elements;return nn.subVectors(e,n),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Mi.crossVectors(i,nn),Mi.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Mi.crossVectors(i,nn)),Mi.normalize(),fa.crossVectors(nn,Mi),r[0]=Mi.x,r[4]=fa.x,r[8]=nn.x,r[1]=Mi.y,r[5]=fa.y,r[9]=nn.y,r[2]=Mi.z,r[6]=fa.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],p=i[13],v=i[2],x=i[6],m=i[10],u=i[14],_=i[3],g=i[7],M=i[11],P=i[15],C=r[0],w=r[4],b=r[8],A=r[12],y=r[1],L=r[5],G=r[9],z=r[13],W=r[2],Q=r[6],H=r[10],ee=r[14],I=r[3],j=r[7],K=r[11],oe=r[15];return s[0]=o*C+a*y+l*W+c*I,s[4]=o*w+a*L+l*Q+c*j,s[8]=o*b+a*G+l*H+c*K,s[12]=o*A+a*z+l*ee+c*oe,s[1]=f*C+h*y+d*W+p*I,s[5]=f*w+h*L+d*Q+p*j,s[9]=f*b+h*G+d*H+p*K,s[13]=f*A+h*z+d*ee+p*oe,s[2]=v*C+x*y+m*W+u*I,s[6]=v*w+x*L+m*Q+u*j,s[10]=v*b+x*G+m*H+u*K,s[14]=v*A+x*z+m*ee+u*oe,s[3]=_*C+g*y+M*W+P*I,s[7]=_*w+g*L+M*Q+P*j,s[11]=_*b+g*G+M*H+P*K,s[15]=_*A+g*z+M*ee+P*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],p=e[14],v=e[3],x=e[7],m=e[11],u=e[15];return v*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*p-i*l*p)+x*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*f-s*l*f)+m*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*f-i*c*f)+u*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],p=e[11],v=e[12],x=e[13],m=e[14],u=e[15],_=h*m*c-x*d*c+x*l*p-a*m*p-h*l*u+a*d*u,g=v*d*c-f*m*c-v*l*p+o*m*p+f*l*u-o*d*u,M=f*x*c-v*h*c+v*a*p-o*x*p-f*a*u+o*h*u,P=v*h*l-f*x*l-v*a*d+o*x*d+f*a*m-o*h*m,C=n*_+i*g+r*M+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=_*w,e[1]=(x*d*s-h*m*s-x*r*p+i*m*p+h*r*u-i*d*u)*w,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*u+i*l*u)*w,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*p-i*l*p)*w,e[4]=g*w,e[5]=(f*m*s-v*d*s+v*r*p-n*m*p-f*r*u+n*d*u)*w,e[6]=(v*l*s-o*m*s-v*r*c+n*m*c+o*r*u-n*l*u)*w,e[7]=(o*d*s-f*l*s+f*r*c-n*d*c-o*r*p+n*l*p)*w,e[8]=M*w,e[9]=(v*h*s-f*x*s-v*i*p+n*x*p+f*i*u-n*h*u)*w,e[10]=(o*x*s-v*a*s+v*i*c-n*x*c-o*i*u+n*a*u)*w,e[11]=(f*a*s-o*h*s-f*i*c+n*h*c+o*i*p-n*a*p)*w,e[12]=P*w,e[13]=(f*x*r-v*h*r+v*i*d-n*x*d-f*i*m+n*h*m)*w,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*m-n*a*m)*w,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,d=s*c,p=s*f,v=s*h,x=o*f,m=o*h,u=a*h,_=l*c,g=l*f,M=l*h,P=i.x,C=i.y,w=i.z;return r[0]=(1-(x+u))*P,r[1]=(p+M)*P,r[2]=(v-g)*P,r[3]=0,r[4]=(p-M)*C,r[5]=(1-(d+u))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(v+g)*w,r[9]=(m-_)*w,r[10]=(1-(d+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Nr.set(r[0],r[1],r[2]).length();const o=Nr.set(r[4],r[5],r[6]).length(),a=Nr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const c=1/s,f=1/o,h=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=f,Cn.elements[5]*=f,Cn.elements[6]*=f,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,n.setFromRotationMatrix(Cn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ai){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,v;if(a===ai)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Sl)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ai){const l=this.elements,c=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*c,p=(i+r)*f;let v,x;if(a===ai)v=(o+s)*h,x=-2*h;else if(a===Sl)v=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Nr=new B,Cn=new ht,gx=new B(0,0,0),_x=new B(1,1,1),Mi=new B,fa=new B,nn=new B,ep=new ht,tp=new Fo;class Yn{constructor(e=0,n=0,i=0,r=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ep,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return tp.setFromEuler(this),this.setFromQuaternion(tp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class _2{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vx=0;const np=new B,Fr=new Fo,Qn=new ht,da=new B,js=new B,xx=new B,Sx=new Fo,ip=new B(1,0,0),rp=new B(0,1,0),sp=new B(0,0,1),op={type:"added"},yx={type:"removed"},Or={type:"childadded",child:null},Lc={type:"childremoved",child:null};class Bt extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new B,n=new Yn,i=new Fo,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ne}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _2,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fr.setFromAxisAngle(e,n),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,n){return Fr.setFromAxisAngle(e,n),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(ip,e)}rotateY(e){return this.rotateOnAxis(rp,e)}rotateZ(e){return this.rotateOnAxis(sp,e)}translateOnAxis(e,n){return np.copy(e).applyQuaternion(this.quaternion),this.position.add(np.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ip,e)}translateY(e){return this.translateOnAxis(rp,e)}translateZ(e){return this.translateOnAxis(sp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?da.copy(e):da.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(js,da,this.up):Qn.lookAt(da,js,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),Fr.setFromRotationMatrix(Qn),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(op),Or.child=e,this.dispatchEvent(Or),Or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(yx),Lc.child=e,this.dispatchEvent(Lc),Lc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(op),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,e,xx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,Sx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Bt.DEFAULT_UP=new B(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new B,Jn=new B,bc=new B,$n=new B,Br=new B,kr=new B,ap=new B,Ic=new B,Dc=new B,Uc=new B;class Hn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),wn.subVectors(e,n),r.cross(wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){wn.subVectors(r,n),Jn.subVectors(i,n),bc.subVectors(e,n);const o=wn.dot(wn),a=wn.dot(Jn),l=wn.dot(bc),c=Jn.dot(Jn),f=Jn.dot(bc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*f)*d,v=(o*f-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static isFrontFacing(e,n,i,r){return wn.subVectors(i,n),Jn.subVectors(e,n),wn.cross(Jn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),wn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Hn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Br.subVectors(r,i),kr.subVectors(s,i),Ic.subVectors(e,i);const l=Br.dot(Ic),c=kr.dot(Ic);if(l<=0&&c<=0)return n.copy(i);Dc.subVectors(e,r);const f=Br.dot(Dc),h=kr.dot(Dc);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Br,o);Uc.subVectors(e,s);const p=Br.dot(Uc),v=kr.dot(Uc);if(v>=0&&p<=v)return n.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(kr,a);const m=f*v-p*h;if(m<=0&&h-f>=0&&p-v>=0)return ap.subVectors(s,r),a=(h-f)/(h-f+(p-v)),n.copy(r).addScaledVector(ap,a);const u=1/(m+x+d);return o=x*u,a=d*u,n.copy(i).addScaledVector(Br,o).addScaledVector(kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const v2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},ha={h:0,s:0,l:0};function Nc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=sx(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Nc(o,s,e+1/3),this.g=Nc(o,s,e),this.b=Nc(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,n=Bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bn){const i=v2[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=Mc(e.r),this.g=Mc(e.g),this.b=Mc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return Ke.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Yt(Ft.r*255,0,255))*65536+Math.round(Yt(Ft.g*255,0,255))*256+Math.round(Yt(Ft.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Ft.copy(this),n);const i=Ft.r,r=Ft.g,s=Ft.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Bn){Ke.fromWorkingColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,r=Ft.b;return e!==Bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+n,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ei),e.getHSL(ha);const i=Sc(Ei.h,ha.h,n),r=Sc(Ei.s,ha.s,n),s=Sc(Ei.l,ha.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new We;We.NAMES=v2;let Mx=0;class Bo extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=No(),this.name="",this.type="Material",this.blending=hs,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zu,this.blendDst=Hu,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=gl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zu&&(i.blendSrc=this.blendSrc),this.blendDst!==Hu&&(i.blendDst=this.blendDst),this.blendEquation!==cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class x2 extends Bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=e2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new B,pa=new Ge;class Xn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=qh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return co("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)pa.fromBufferAttribute(this,n),pa.applyMatrix3(e),this.setXY(n,pa.x,pa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix3(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix4(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyNormalMatrix(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.transformDirection(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Vs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qh&&(e.usage=this.usage),e}}class S2 extends Xn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class y2 extends Xn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class jn extends Xn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Ex=0;const hn=new ht,Fc=new Bt,zr=new B,rn=new Oo,Ys=new Oo,Ct=new B;class Qi extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(p2(e)?y2:S2)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,n,i){return hn.makeTranslation(e,n,i),this.applyMatrix4(hn),this}scale(e,n,i){return hn.makeScale(e,n,i),this.applyMatrix4(hn),this}lookAt(e){return Fc.lookAt(e),Fc.updateMatrix(),this.applyMatrix4(Fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new jn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ed);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(rn.min,Ys.min),rn.expandByPoint(Ct),Ct.addVectors(rn.max,Ys.max),rn.expandByPoint(Ct)):(rn.expandByPoint(Ys.min),rn.expandByPoint(Ys.max))}rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ct.fromBufferAttribute(a,c),l&&(zr.fromBufferAttribute(e,c),Ct.add(zr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new B,l[b]=new B;const c=new B,f=new B,h=new B,d=new Ge,p=new Ge,v=new Ge,x=new B,m=new B;function u(b,A,y){c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,A),h.fromBufferAttribute(i,y),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,A),v.fromBufferAttribute(s,y),f.sub(c),h.sub(c),p.sub(d),v.sub(d);const L=1/(p.x*v.y-v.x*p.y);isFinite(L)&&(x.copy(f).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-v.x).multiplyScalar(L),a[b].add(x),a[A].add(x),a[y].add(x),l[b].add(m),l[A].add(m),l[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let b=0,A=_.length;b<A;++b){const y=_[b],L=y.start,G=y.count;for(let z=L,W=L+G;z<W;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const g=new B,M=new B,P=new B,C=new B;function w(b){P.fromBufferAttribute(r,b),C.copy(P);const A=a[b];g.copy(A),g.sub(P.multiplyScalar(P.dot(A))).normalize(),M.crossVectors(C,A);const L=M.dot(l[b])<0?-1:1;o.setXYZW(b,g.x,g.y,g.z,L)}for(let b=0,A=_.length;b<A;++b){const y=_[b],L=y.start,G=y.count;for(let z=L,W=L+G;z<W;z+=3)w(e.getX(z+0)),w(e.getX(z+1)),w(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,f=new B,h=new B;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*f;for(let u=0;u<f;u++)d[v++]=c[p++]}return new Xn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Qi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const d=c[f],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lp=new ht,tr=new mx,ma=new Ed,cp=new B,Hr=new B,Vr=new B,Gr=new B,Oc=new B,ga=new B,_a=new Ge,va=new Ge,xa=new Ge,up=new B,fp=new B,dp=new B,Sa=new B,ya=new B;class Vn extends Bt{constructor(e=new Qi,n=new x2){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ga.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(Oc.fromBufferAttribute(h,e),o?ga.addScaledVector(Oc,f):ga.addScaledVector(Oc.sub(n),f))}n.add(ga)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ma.copy(i.boundingSphere),ma.applyMatrix4(s),tr.copy(e.ray).recast(e.near),!(ma.containsPoint(tr.origin)===!1&&(tr.intersectSphere(ma,cp)===null||tr.origin.distanceToSquared(cp)>(e.far-e.near)**2))&&(lp.copy(s).invert(),tr.copy(e.ray).applyMatrix4(lp),!(i.boundingBox!==null&&tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,tr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],u=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,P=g;M<P;M+=3){const C=a.getX(M),w=a.getX(M+1),b=a.getX(M+2);r=Ma(this,u,e,i,c,f,h,C,w,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){const _=a.getX(m),g=a.getX(m+1),M=a.getX(m+2);r=Ma(this,o,e,i,c,f,h,_,g,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],u=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,P=g;M<P;M+=3){const C=M,w=M+1,b=M+2;r=Ma(this,u,e,i,c,f,h,C,w,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){const _=m,g=m+1,M=m+2;r=Ma(this,o,e,i,c,f,h,_,g,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Ax(t,e,n,i,r,s,o,a){let l;if(e.side===Jt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Xi,a),l===null)return null;ya.copy(a),ya.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ya);return c<n.near||c>n.far?null:{distance:c,point:ya.clone(),object:t}}function Ma(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Hr),t.getVertexPosition(l,Vr),t.getVertexPosition(c,Gr);const f=Ax(t,e,n,i,Hr,Vr,Gr,Sa);if(f){r&&(_a.fromBufferAttribute(r,a),va.fromBufferAttribute(r,l),xa.fromBufferAttribute(r,c),f.uv=Hn.getInterpolation(Sa,Hr,Vr,Gr,_a,va,xa,new Ge)),s&&(_a.fromBufferAttribute(s,a),va.fromBufferAttribute(s,l),xa.fromBufferAttribute(s,c),f.uv1=Hn.getInterpolation(Sa,Hr,Vr,Gr,_a,va,xa,new Ge)),o&&(up.fromBufferAttribute(o,a),fp.fromBufferAttribute(o,l),dp.fromBufferAttribute(o,c),f.normal=Hn.getInterpolation(Sa,Hr,Vr,Gr,up,fp,dp,new B),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};Hn.getNormal(Hr,Vr,Gr,h.normal),f.face=h}return f}class ko extends Qi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let d=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new jn(c,3)),this.setAttribute("normal",new jn(f,3)),this.setAttribute("uv",new jn(h,2));function v(x,m,u,_,g,M,P,C,w,b,A){const y=M/w,L=P/b,G=M/2,z=P/2,W=C/2,Q=w+1,H=b+1;let ee=0,I=0;const j=new B;for(let K=0;K<H;K++){const oe=K*L-z;for(let ye=0;ye<Q;ye++){const ze=ye*y-G;j[x]=ze*_,j[m]=oe*g,j[u]=W,c.push(j.x,j.y,j.z),j[x]=0,j[m]=0,j[u]=C>0?1:-1,f.push(j.x,j.y,j.z),h.push(ye/w),h.push(1-K/b),ee+=1}}for(let K=0;K<b;K++)for(let oe=0;oe<w;oe++){const ye=d+oe+Q*K,ze=d+oe+Q*(K+1),V=d+(oe+1)+Q*(K+1),te=d+(oe+1)+Q*K;l.push(ye,ze,te),l.push(ze,V,te),I+=6}a.addGroup(p,I,A),p+=I,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function zt(t){const e={};for(let n=0;n<t.length;n++){const i=Rs(t[n]);for(const r in i)e[r]=i[r]}return e}function Cx(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function M2(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const wx={clone:Rs,merge:zt};var Tx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tx,this.fragmentShader=Rx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=Cx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class E2 extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=ai}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new B,hp=new Ge,pp=new Ge;class gn extends E2{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=xf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xf*2*Math.atan(Math.tan(xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,n){return this.getViewBounds(e,hp,pp),n.subVectors(pp,hp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(xc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Wr=-90,Xr=1;class Px extends Bt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(Wr,Xr,e,n);r.layers=this.layers,this.add(r);const s=new gn(Wr,Xr,e,n);s.layers=this.layers,this.add(s);const o=new gn(Wr,Xr,e,n);o.layers=this.layers,this.add(o);const a=new gn(Wr,Xr,e,n);a.layers=this.layers,this.add(a);const l=new gn(Wr,Xr,e,n);l.layers=this.layers,this.add(l);const c=new gn(Wr,Xr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class A2 extends $t{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:As,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lx extends Ar{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new A2(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ln}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ko(5,5,5),s=new ji({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:Hi});s.uniforms.tEquirect.value=n;const o=new Vn(r,s),a=n.minFilter;return n.minFilter===mr&&(n.minFilter=Ln),new Px(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Bc=new B,bx=new B,Ix=new Ne;class ar{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Bc.subVectors(i,n).cross(bx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Bc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ix.getNormalMatrix(e),r=this.coplanarPoint(Bc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const nr=new Ed,Ea=new B;class Ad{constructor(e=new ar,n=new ar,i=new ar,r=new ar,s=new ar,o=new ar){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ai){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],h=r[6],d=r[7],p=r[8],v=r[9],x=r[10],m=r[11],u=r[12],_=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,m-p,M-u).normalize(),i[1].setComponents(l+s,d+c,m+p,M+u).normalize(),i[2].setComponents(l+o,d+f,m+v,M+_).normalize(),i[3].setComponents(l-o,d-f,m-v,M-_).normalize(),i[4].setComponents(l-a,d-h,m-x,M-g).normalize(),n===ai)i[5].setComponents(l+a,d+h,m+x,M+g).normalize();else if(n===Sl)i[5].setComponents(a,h,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(e){return nr.center.set(0,0,0),nr.radius=.7071067811865476,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ea.x=r.normal.x>0?e.max.x:e.min.x,Ea.y=r.normal.y>0?e.max.y:e.min.y,Ea.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function C2(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Dx(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const f=l.array,h=l._updateRange,d=l.updateRanges;if(t.bindBuffer(c,a),h.count===-1&&d.length===0&&t.bufferSubData(c,0,f),d.length!==0){for(let p=0,v=d.length;p<v;p++){const x=d[p];t.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(c,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class zl extends Qi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,d=n/l,p=[],v=[],x=[],m=[];for(let u=0;u<f;u++){const _=u*d-o;for(let g=0;g<c;g++){const M=g*h-s;v.push(M,-_,0),x.push(0,0,1),m.push(g/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const g=_+c*u,M=_+c*(u+1),P=_+1+c*(u+1),C=_+1+c*u;p.push(g,M,C),p.push(M,P,C)}this.setIndex(p),this.setAttribute("position",new jn(v,3)),this.setAttribute("normal",new jn(x,3)),this.setAttribute("uv",new jn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ux=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nx=`#ifdef USE_ALPHAHASH
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
#endif`,Fx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ox=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zx=`#ifdef USE_AOMAP
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
#endif`,Hx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yx=`#ifdef USE_IRIDESCENCE
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
#endif`,qx=`#ifdef USE_BUMPMAP
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
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,iS=`#define PI 3.141592653589793
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
} // validated`,rS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sS=`vec3 transformedNormal = objectNormal;
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
#endif`,oS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uS="gl_FragColor = linearToOutputTexel( gl_FragColor );",fS=`
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
}`,dS=`#ifdef USE_ENVMAP
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
#endif`,hS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pS=`#ifdef USE_ENVMAP
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
#endif`,mS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gS=`#ifdef USE_ENVMAP
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
#endif`,_S=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yS=`#ifdef USE_GRADIENTMAP
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
}`,MS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ES=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CS=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,wS=`#ifdef USE_ENVMAP
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
#endif`,TS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bS=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,IS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,DS=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,US=`#if defined( RE_IndirectDiffuse )
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
#endif`,NS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,GS=`#if defined( USE_POINTS_UV )
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
#endif`,WS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,ZS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,JS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n3=`#ifdef USE_NORMALMAP
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
#endif`,i3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,c3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,g3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,v3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,x3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S3=`#ifdef USE_SKINNING
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
#endif`,y3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,M3=`#ifdef USE_SKINNING
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
#endif`,E3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w3=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,T3=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,R3=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,P3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const D3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U3=`uniform sampler2D t2D;
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
}`,N3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,O3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k3=`#include <common>
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
}`,z3=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,H3=`#define DISTANCE
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
}`,V3=`#define DISTANCE
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
}`,G3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X3=`uniform float scale;
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
}`,j3=`uniform vec3 diffuse;
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
}`,Y3=`#include <common>
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
}`,q3=`uniform vec3 diffuse;
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
}`,K3=`#define LAMBERT
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
}`,Z3=`#define LAMBERT
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
}`,Q3=`#define MATCAP
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
}`,J3=`#define MATCAP
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
}`,$3=`#define NORMAL
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
}`,ey=`#define NORMAL
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
}`,ty=`#define PHONG
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
}`,ny=`#define PHONG
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
}`,iy=`#define STANDARD
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
}`,ry=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,sy=`#define TOON
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
}`,oy=`#define TOON
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
}`,ay=`uniform float size;
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
}`,ly=`uniform vec3 diffuse;
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
}`,cy=`#include <common>
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
}`,uy=`uniform vec3 color;
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
}`,fy=`uniform float rotation;
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
}`,dy=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:Ux,alphahash_pars_fragment:Nx,alphamap_fragment:Fx,alphamap_pars_fragment:Ox,alphatest_fragment:Bx,alphatest_pars_fragment:kx,aomap_fragment:zx,aomap_pars_fragment:Hx,batching_pars_vertex:Vx,batching_vertex:Gx,begin_vertex:Wx,beginnormal_vertex:Xx,bsdfs:jx,iridescence_fragment:Yx,bumpmap_pars_fragment:qx,clipping_planes_fragment:Kx,clipping_planes_pars_fragment:Zx,clipping_planes_pars_vertex:Qx,clipping_planes_vertex:Jx,color_fragment:$x,color_pars_fragment:eS,color_pars_vertex:tS,color_vertex:nS,common:iS,cube_uv_reflection_fragment:rS,defaultnormal_vertex:sS,displacementmap_pars_vertex:oS,displacementmap_vertex:aS,emissivemap_fragment:lS,emissivemap_pars_fragment:cS,colorspace_fragment:uS,colorspace_pars_fragment:fS,envmap_fragment:dS,envmap_common_pars_fragment:hS,envmap_pars_fragment:pS,envmap_pars_vertex:mS,envmap_physical_pars_fragment:wS,envmap_vertex:gS,fog_vertex:_S,fog_pars_vertex:vS,fog_fragment:xS,fog_pars_fragment:SS,gradientmap_pars_fragment:yS,lightmap_pars_fragment:MS,lights_lambert_fragment:ES,lights_lambert_pars_fragment:AS,lights_pars_begin:CS,lights_toon_fragment:TS,lights_toon_pars_fragment:RS,lights_phong_fragment:PS,lights_phong_pars_fragment:LS,lights_physical_fragment:bS,lights_physical_pars_fragment:IS,lights_fragment_begin:DS,lights_fragment_maps:US,lights_fragment_end:NS,logdepthbuf_fragment:FS,logdepthbuf_pars_fragment:OS,logdepthbuf_pars_vertex:BS,logdepthbuf_vertex:kS,map_fragment:zS,map_pars_fragment:HS,map_particle_fragment:VS,map_particle_pars_fragment:GS,metalnessmap_fragment:WS,metalnessmap_pars_fragment:XS,morphinstance_vertex:jS,morphcolor_vertex:YS,morphnormal_vertex:qS,morphtarget_pars_vertex:KS,morphtarget_vertex:ZS,normal_fragment_begin:QS,normal_fragment_maps:JS,normal_pars_fragment:$S,normal_pars_vertex:e3,normal_vertex:t3,normalmap_pars_fragment:n3,clearcoat_normal_fragment_begin:i3,clearcoat_normal_fragment_maps:r3,clearcoat_pars_fragment:s3,iridescence_pars_fragment:o3,opaque_fragment:a3,packing:l3,premultiplied_alpha_fragment:c3,project_vertex:u3,dithering_fragment:f3,dithering_pars_fragment:d3,roughnessmap_fragment:h3,roughnessmap_pars_fragment:p3,shadowmap_pars_fragment:m3,shadowmap_pars_vertex:g3,shadowmap_vertex:_3,shadowmask_pars_fragment:v3,skinbase_vertex:x3,skinning_pars_vertex:S3,skinning_vertex:y3,skinnormal_vertex:M3,specularmap_fragment:E3,specularmap_pars_fragment:A3,tonemapping_fragment:C3,tonemapping_pars_fragment:w3,transmission_fragment:T3,transmission_pars_fragment:R3,uv_pars_fragment:P3,uv_pars_vertex:L3,uv_vertex:b3,worldpos_vertex:I3,background_vert:D3,background_frag:U3,backgroundCube_vert:N3,backgroundCube_frag:F3,cube_vert:O3,cube_frag:B3,depth_vert:k3,depth_frag:z3,distanceRGBA_vert:H3,distanceRGBA_frag:V3,equirect_vert:G3,equirect_frag:W3,linedashed_vert:X3,linedashed_frag:j3,meshbasic_vert:Y3,meshbasic_frag:q3,meshlambert_vert:K3,meshlambert_frag:Z3,meshmatcap_vert:Q3,meshmatcap_frag:J3,meshnormal_vert:$3,meshnormal_frag:ey,meshphong_vert:ty,meshphong_frag:ny,meshphysical_vert:iy,meshphysical_frag:ry,meshtoon_vert:sy,meshtoon_frag:oy,points_vert:ay,points_frag:ly,shadow_vert:cy,shadow_frag:uy,sprite_vert:fy,sprite_frag:dy},le={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},kn={basic:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new We(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:zt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:zt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new We(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:zt([le.points,le.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:zt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:zt([le.common,le.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:zt([le.sprite,le.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:zt([le.common,le.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:zt([le.lights,le.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};kn.physical={uniforms:zt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Aa={r:0,b:0,g:0},ir=new Yn,hy=new ht;function py(t,e,n,i,r,s,o){const a=new We(0);let l=s===!0?0:1,c,f,h=null,d=0,p=null;function v(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?n:e).get(g)),g}function x(_){let g=!1;const M=v(_);M===null?u(a,l):M&&M.isColor&&(u(M,1),g=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,g){const M=v(g);M&&(M.isCubeTexture||M.mapping===Bl)?(f===void 0&&(f=new Vn(new ko(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Rs(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),ir.copy(g.backgroundRotation),ir.x*=-1,ir.y*=-1,ir.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(hy.makeRotationFromEuler(ir)),f.material.toneMapped=Ke.getTransfer(M.colorSpace)!==tt,(h!==M||d!==M.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,h=M,d=M.version,p=t.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Vn(new zl(2,2),new ji({name:"BackgroundMaterial",uniforms:Rs(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(M.colorSpace)!==tt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,g){_.getRGB(Aa,M2(t)),i.buffers.color.setClear(Aa.r,Aa.g,Aa.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(_,g=1){a.set(_),l=g,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(a,l)},render:x,addToRenderList:m}}function my(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(y,L,G,z,W){let Q=!1;const H=h(z,G,L);s!==H&&(s=H,c(s.object)),Q=p(y,z,G,W),Q&&v(y,z,G,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,M(y,L,G,z),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function f(y){return t.deleteVertexArray(y)}function h(y,L,G){const z=G.wireframe===!0;let W=i[y.id];W===void 0&&(W={},i[y.id]=W);let Q=W[L.id];Q===void 0&&(Q={},W[L.id]=Q);let H=Q[z];return H===void 0&&(H=d(l()),Q[z]=H),H}function d(y){const L=[],G=[],z=[];for(let W=0;W<n;W++)L[W]=0,G[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:z,object:y,attributes:{},index:null}}function p(y,L,G,z){const W=s.attributes,Q=L.attributes;let H=0;const ee=G.getAttributes();for(const I in ee)if(ee[I].location>=0){const K=W[I];let oe=Q[I];if(oe===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor)),K===void 0||K.attribute!==oe||oe&&K.data!==oe.data)return!0;H++}return s.attributesNum!==H||s.index!==z}function v(y,L,G,z){const W={},Q=L.attributes;let H=0;const ee=G.getAttributes();for(const I in ee)if(ee[I].location>=0){let K=Q[I];K===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(K=y.instanceColor));const oe={};oe.attribute=K,K&&K.data&&(oe.data=K.data),W[I]=oe,H++}s.attributes=W,s.attributesNum=H,s.index=z}function x(){const y=s.newAttributes;for(let L=0,G=y.length;L<G;L++)y[L]=0}function m(y){u(y,0)}function u(y,L){const G=s.newAttributes,z=s.enabledAttributes,W=s.attributeDivisors;G[y]=1,z[y]===0&&(t.enableVertexAttribArray(y),z[y]=1),W[y]!==L&&(t.vertexAttribDivisor(y,L),W[y]=L)}function _(){const y=s.newAttributes,L=s.enabledAttributes;for(let G=0,z=L.length;G<z;G++)L[G]!==y[G]&&(t.disableVertexAttribArray(G),L[G]=0)}function g(y,L,G,z,W,Q,H){H===!0?t.vertexAttribIPointer(y,L,G,W,Q):t.vertexAttribPointer(y,L,G,z,W,Q)}function M(y,L,G,z){x();const W=z.attributes,Q=G.getAttributes(),H=L.defaultAttributeValues;for(const ee in Q){const I=Q[ee];if(I.location>=0){let j=W[ee];if(j===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(j=y.instanceColor)),j!==void 0){const K=j.normalized,oe=j.itemSize,ye=e.get(j);if(ye===void 0)continue;const ze=ye.buffer,V=ye.type,te=ye.bytesPerElement,de=V===t.INT||V===t.UNSIGNED_INT||j.gpuType===gd;if(j.isInterleavedBufferAttribute){const ue=j.data,we=ue.stride,be=j.offset;if(ue.isInstancedInterleavedBuffer){for(let Be=0;Be<I.locationSize;Be++)u(I.location+Be,ue.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Be=0;Be<I.locationSize;Be++)m(I.location+Be);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let Be=0;Be<I.locationSize;Be++)g(I.location+Be,oe/I.locationSize,V,K,we*te,(be+oe/I.locationSize*Be)*te,de)}else{if(j.isInstancedBufferAttribute){for(let ue=0;ue<I.locationSize;ue++)u(I.location+ue,j.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ue=0;ue<I.locationSize;ue++)m(I.location+ue);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let ue=0;ue<I.locationSize;ue++)g(I.location+ue,oe/I.locationSize,V,K,oe*te,oe/I.locationSize*ue*te,de)}}else if(H!==void 0){const K=H[ee];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(I.location,K);break;case 3:t.vertexAttrib3fv(I.location,K);break;case 4:t.vertexAttrib4fv(I.location,K);break;default:t.vertexAttrib1fv(I.location,K)}}}}_()}function P(){b();for(const y in i){const L=i[y];for(const G in L){const z=L[G];for(const W in z)f(z[W].object),delete z[W];delete L[G]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const L=i[y.id];for(const G in L){const z=L[G];for(const W in z)f(z[W].object),delete z[W];delete L[G]}delete i[y.id]}function w(y){for(const L in i){const G=i[L];if(G[y.id]===void 0)continue;const z=G[y.id];for(const W in z)f(z[W].object),delete z[W];delete G[y.id]}}function b(){A(),o=!0,s!==r&&(s=r,c(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:A,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function gy(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,h){h!==0&&(t.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function a(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let p=0;for(let v=0;v<h;v++)p+=f[v];n.update(p,i,1)}function l(c,f,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],f[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,d,0,h);let v=0;for(let x=0;x<h;x++)v+=f[x];for(let x=0;x<d.length;x++)n.update(v,i,d[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _y(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==bn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const w=C===Uo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==pi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==oi&&!w)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),u=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:u,maxVaryings:_,maxFragmentUniforms:g,vertexTextures:M,maxSamples:P}}function vy(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ar,a=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,p){const v=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||v===null||v.length===0||s&&!m)s?f(null):c();else{const _=s?0:i,g=_*4;let M=u.clippingState||null;l.value=M,M=f(v,d,g,p);for(let P=0;P!==g;++P)M[P]=n[P];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,p,v){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const u=p+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let g=0,M=p;g!==x;++g,M+=4)o.copy(h[g]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function xy(t){let e=new WeakMap;function n(o,a){return a===Vu?o.mapping=As:a===Gu&&(o.mapping=Cs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vu||a===Gu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Lx(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class w2 extends E2{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const os=4,mp=[.125,.215,.35,.446,.526,.582],ur=20,kc=new w2,gp=new We;let zc=null,Hc=0,Vc=0,Gc=!1;const lr=(1+Math.sqrt(5))/2,jr=1/lr,_p=[new B(-lr,jr,0),new B(lr,jr,0),new B(-jr,0,lr),new B(jr,0,lr),new B(0,lr,-jr),new B(0,lr,jr),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class vp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){zc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zc,Hc,Vc),this._renderer.xr.enabled=Gc,e.scissorTest=!1,Ca(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===As||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Uo,format:bn,colorSpace:Zi,depthBuffer:!1},r=xp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sy(s)),this._blurMaterial=yy(s,e,n)}return r}_compileMaterial(e){const n=new Vn(this._lodPlanes[0],e);this._renderer.compile(n,kc)}_sceneToCubeUV(e,n,i,r){const a=new gn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(gp),f.toneMapping=Vi,f.autoClear=!1;const p=new x2({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),v=new Vn(new ko,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(gp),x=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const g=this._cubeSize;Ca(r,_*g,u>2?g:0,g,g),f.setRenderTarget(r),x&&f.render(v,a),f.render(e,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===As||e.mapping===Cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Vn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ca(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,kc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=_p[(r-s-1)%_p.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Vn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ur-1),x=s/v,m=isFinite(s)?1+Math.floor(f*x):ur;m>ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ur}`);const u=[];let _=0;for(let w=0;w<ur;++w){const b=w/x,A=Math.exp(-b*b/2);u.push(A),w===0?_+=A:w<m&&(_+=2*A)}for(let w=0;w<u.length;w++)u[w]=u[w]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=v,d.mipInt.value=g-i;const M=this._sizeLods[r],P=3*M*(r>g-os?r-g+os:0),C=4*(this._cubeSize-M);Ca(n,P,C,3*M,2*M),l.setRenderTarget(n),l.render(h,kc)}}function Sy(t){const e=[],n=[],i=[];let r=t;const s=t-os+1+mp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-os?l=mp[o-t+os-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,v=6,x=3,m=2,u=1,_=new Float32Array(x*v*p),g=new Float32Array(m*v*p),M=new Float32Array(u*v*p);for(let C=0;C<p;C++){const w=C%3*2/3-1,b=C>2?0:-1,A=[w,b,0,w+2/3,b,0,w+2/3,b+1,0,w,b,0,w+2/3,b+1,0,w,b+1,0];_.set(A,x*v*C),g.set(d,m*v*C);const y=[C,C,C,C,C,C];M.set(y,u*v*C)}const P=new Qi;P.setAttribute("position",new Xn(_,x)),P.setAttribute("uv",new Xn(g,m)),P.setAttribute("faceIndex",new Xn(M,u)),e.push(P),r>os&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function xp(t,e,n){const i=new Ar(t,e,n);return i.texture.mapping=Bl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ca(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function yy(t,e,n){const i=new Float32Array(ur),r=new B(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Cd(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Sp(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cd(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function yp(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Cd(){return`

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
	`}function My(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vu||l===Gu,f=l===As||l===Cs;if(c||f){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new vp(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new vp(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Ey(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&co("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ay(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let m=0,u=x.length;m<u;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const x=p[v];for(let m=0,u=x.length;m<u;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,v=h.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let g=0,M=_.length;g<M;g+=3){const P=_[g+0],C=_[g+1],w=_[g+2];d.push(P,C,C,w,w,P)}}else if(v!==void 0){const _=v.array;x=v.version;for(let g=0,M=_.length/3-1;g<M;g+=3){const P=g+0,C=g+1,w=g+2;d.push(P,C,C,w,w,P)}}else return;const m=new(p2(d)?y2:S2)(d,1);m.version=x;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function f(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function Cy(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,d*o,v),n.update(p,i,v))}function f(d,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,v);let m=0;for(let u=0;u<v;u++)m+=p[u];n.update(m,i,1)}function h(d,p,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/o,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,x,0,v);let u=0;for(let _=0;_<v;_++)u+=p[_];for(let _=0;_<x.length;_++)n.update(u,i,x[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function wy(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Ty(t,e,n){const i=new WeakMap,r=new yt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let A=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let g=0;p===!0&&(g=1),v===!0&&(g=2),x===!0&&(g=3);let M=a.attributes.position.count*g,P=1;M>e.maxTextureSize&&(P=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const C=new Float32Array(M*P*4*h),w=new g2(C,M,P,h);w.type=oi,w.needsUpdate=!0;const b=g*4;for(let y=0;y<h;y++){const L=m[y],G=u[y],z=_[y],W=M*P*4*y;for(let Q=0;Q<L.count;Q++){const H=Q*b;p===!0&&(r.fromBufferAttribute(L,Q),C[W+H+0]=r.x,C[W+H+1]=r.y,C[W+H+2]=r.z,C[W+H+3]=0),v===!0&&(r.fromBufferAttribute(G,Q),C[W+H+4]=r.x,C[W+H+5]=r.y,C[W+H+6]=r.z,C[W+H+7]=0),x===!0&&(r.fromBufferAttribute(z,Q),C[W+H+8]=r.x,C[W+H+9]=r.y,C[W+H+10]=r.z,C[W+H+11]=z.itemSize===4?r.w:1)}}d={count:h,texture:w,size:new Ge(M,P)},i.set(a,d),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function Ry(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class T2 extends $t{constructor(e,n,i,r,s,o,a,l,c,f=ps){if(f!==ps&&f!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ps&&(i=Er),i===void 0&&f===Ts&&(i=ws),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const R2=new $t,Mp=new T2(1,1),P2=new g2,L2=new hx,b2=new A2,Ep=[],Ap=[],Cp=new Float32Array(16),wp=new Float32Array(9),Tp=new Float32Array(4);function Ds(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ep[r];if(s===void 0&&(s=new Float32Array(r),Ep[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Et(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Hl(t,e){let n=Ap[e];n===void 0&&(n=new Int32Array(e),Ap[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Py(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Ly(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function by(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Et(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function Iy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function Dy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(Et(n,i))return;Tp.set(i),t.uniformMatrix2fv(this.addr,!1,Tp),At(n,i)}}function Uy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(Et(n,i))return;wp.set(i),t.uniformMatrix3fv(this.addr,!1,wp),At(n,i)}}function Ny(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(Et(n,i))return;Cp.set(i),t.uniformMatrix4fv(this.addr,!1,Cp),At(n,i)}}function Fy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Oy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function By(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function ky(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function zy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Hy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function Vy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function Gy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function Wy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Mp.compareFunction=h2,s=Mp):s=R2,n.setTexture2D(e||s,r)}function Xy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||L2,r)}function jy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||b2,r)}function Yy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||P2,r)}function qy(t){switch(t){case 5126:return Py;case 35664:return Ly;case 35665:return by;case 35666:return Iy;case 35674:return Dy;case 35675:return Uy;case 35676:return Ny;case 5124:case 35670:return Fy;case 35667:case 35671:return Oy;case 35668:case 35672:return By;case 35669:case 35673:return ky;case 5125:return zy;case 36294:return Hy;case 36295:return Vy;case 36296:return Gy;case 35678:case 36198:case 36298:case 36306:case 35682:return Wy;case 35679:case 36299:case 36307:return Xy;case 35680:case 36300:case 36308:case 36293:return jy;case 36289:case 36303:case 36311:case 36292:return Yy}}function Ky(t,e){t.uniform1fv(this.addr,e)}function Zy(t,e){const n=Ds(e,this.size,2);t.uniform2fv(this.addr,n)}function Qy(t,e){const n=Ds(e,this.size,3);t.uniform3fv(this.addr,n)}function Jy(t,e){const n=Ds(e,this.size,4);t.uniform4fv(this.addr,n)}function $y(t,e){const n=Ds(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function eM(t,e){const n=Ds(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function tM(t,e){const n=Ds(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function nM(t,e){t.uniform1iv(this.addr,e)}function iM(t,e){t.uniform2iv(this.addr,e)}function rM(t,e){t.uniform3iv(this.addr,e)}function sM(t,e){t.uniform4iv(this.addr,e)}function oM(t,e){t.uniform1uiv(this.addr,e)}function aM(t,e){t.uniform2uiv(this.addr,e)}function lM(t,e){t.uniform3uiv(this.addr,e)}function cM(t,e){t.uniform4uiv(this.addr,e)}function uM(t,e,n){const i=this.cache,r=e.length,s=Hl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||R2,s[o])}function fM(t,e,n){const i=this.cache,r=e.length,s=Hl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||L2,s[o])}function dM(t,e,n){const i=this.cache,r=e.length,s=Hl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||b2,s[o])}function hM(t,e,n){const i=this.cache,r=e.length,s=Hl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||P2,s[o])}function pM(t){switch(t){case 5126:return Ky;case 35664:return Zy;case 35665:return Qy;case 35666:return Jy;case 35674:return $y;case 35675:return eM;case 35676:return tM;case 5124:case 35670:return nM;case 35667:case 35671:return iM;case 35668:case 35672:return rM;case 35669:case 35673:return sM;case 5125:return oM;case 36294:return aM;case 36295:return lM;case 36296:return cM;case 35678:case 36198:case 36298:case 36306:case 35682:return uM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return dM;case 36289:case 36303:case 36311:case 36292:return hM}}class mM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=qy(n.type)}}class gM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=pM(n.type)}}class _M{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Wc=/(\w+)(\])?(\[|\.)?/g;function Rp(t,e){t.seq.push(e),t.map[e.id]=e}function vM(t,e,n){const i=t.name,r=i.length;for(Wc.lastIndex=0;;){const s=Wc.exec(i),o=Wc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Rp(n,c===void 0?new mM(a,t,e):new gM(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new _M(a),Rp(n,h)),n=h}}}class Xa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);vM(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Pp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const xM=37297;let SM=0;function yM(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function MM(t){const e=Ke.getPrimaries(Ke.workingColorSpace),n=Ke.getPrimaries(t);let i;switch(e===n?i="":e===xl&&n===vl?i="LinearDisplayP3ToLinearSRGB":e===vl&&n===xl&&(i="LinearSRGBToLinearDisplayP3"),t){case Zi:case kl:return[i,"LinearTransferOETF"];case Bn:case Md:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Lp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+yM(t.getShaderSource(e),o)}else return r}function EM(t,e){const n=MM(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function AM(t,e){let n;switch(e){case Hv:n="Linear";break;case Vv:n="Reinhard";break;case Gv:n="Cineon";break;case Wv:n="ACESFilmic";break;case jv:n="AgX";break;case Yv:n="Neutral";break;case Xv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const wa=new B;function CM(){Ke.getLuminanceCoefficients(wa);const t=wa.x.toFixed(4),e=wa.y.toFixed(4),n=wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wM(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function TM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function RM(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function $s(t){return t!==""}function bp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ip(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sf(t){return t.replace(PM,bM)}const LM=new Map;function bM(t,e){let n=Ue[e];if(n===void 0){const i=LM.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sf(n)}const IM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dp(t){return t.replace(IM,DM)}function DM(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Up(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
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
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function UM(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===$m?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===hv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function NM(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case As:case Cs:e="ENVMAP_TYPE_CUBE";break;case Bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FM(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function OM(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case e2:e="ENVMAP_BLENDING_MULTIPLY";break;case kv:e="ENVMAP_BLENDING_MIX";break;case zv:e="ENVMAP_BLENDING_ADD";break}return e}function BM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function kM(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=UM(n),c=NM(n),f=FM(n),h=OM(n),d=BM(n),p=wM(n),v=TM(s),x=r.createProgram();let m,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter($s).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter($s).join(`
`),u.length>0&&(u+=`
`)):(m=[Up(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),u=[Up(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Vi?"#define TONE_MAPPING":"",n.toneMapping!==Vi?Ue.tonemapping_pars_fragment:"",n.toneMapping!==Vi?AM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,EM("linearToOutputTexel",n.outputColorSpace),CM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($s).join(`
`)),o=Sf(o),o=bp(o,n),o=Ip(o,n),a=Sf(a),a=bp(a,n),a=Ip(a,n),o=Dp(o),a=Dp(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=_+m+o,M=_+u+a,P=Pp(r,r.VERTEX_SHADER,g),C=Pp(r,r.FRAGMENT_SHADER,M);r.attachShader(x,P),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function w(L){if(t.debug.checkShaderErrors){const G=r.getProgramInfoLog(x).trim(),z=r.getShaderInfoLog(P).trim(),W=r.getShaderInfoLog(C).trim();let Q=!0,H=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,P,C);else{const ee=Lp(r,P,"vertex"),I=Lp(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+ee+`
`+I)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||W==="")&&(H=!1);H&&(L.diagnostics={runnable:Q,programLog:G,vertexShader:{log:z,prefix:m},fragmentShader:{log:W,prefix:u}})}r.deleteShader(P),r.deleteShader(C),b=new Xa(r,x),A=RM(r,x)}let b;this.getUniforms=function(){return b===void 0&&w(this),b};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,xM)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=SM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=C,this}let zM=0;class HM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new VM(e),n.set(e,i)),i}}class VM{constructor(e){this.id=zM++,this.code=e,this.usedTimes=0}}function GM(t,e,n,i,r,s,o){const a=new _2,l=new HM,c=new Set,f=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,y,L,G,z){const W=G.fog,Q=z.geometry,H=A.isMeshStandardMaterial?G.environment:null,ee=(A.isMeshStandardMaterial?n:e).get(A.envMap||H),I=ee&&ee.mapping===Bl?ee.image.height:null,j=v[A.type];A.precision!==null&&(p=r.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const K=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,oe=K!==void 0?K.length:0;let ye=0;Q.morphAttributes.position!==void 0&&(ye=1),Q.morphAttributes.normal!==void 0&&(ye=2),Q.morphAttributes.color!==void 0&&(ye=3);let ze,V,te,de;if(j){const Xe=kn[j];ze=Xe.vertexShader,V=Xe.fragmentShader}else ze=A.vertexShader,V=A.fragmentShader,l.update(A),te=l.getVertexShaderID(A),de=l.getFragmentShaderID(A);const ue=t.getRenderTarget(),we=z.isInstancedMesh===!0,be=z.isBatchedMesh===!0,Be=!!A.map,lt=!!A.matcap,R=!!ee,pt=!!A.aoMap,Ze=!!A.lightMap,Je=!!A.bumpMap,Me=!!A.normalMap,mt=!!A.displacementMap,Pe=!!A.emissiveMap,Ie=!!A.metalnessMap,T=!!A.roughnessMap,S=A.anisotropy>0,k=A.clearcoat>0,q=A.dispersion>0,J=A.iridescence>0,Z=A.sheen>0,Ee=A.transmission>0,ce=S&&!!A.anisotropyMap,me=k&&!!A.clearcoatMap,De=k&&!!A.clearcoatNormalMap,ne=k&&!!A.clearcoatRoughnessMap,pe=J&&!!A.iridescenceMap,ke=J&&!!A.iridescenceThicknessMap,Re=Z&&!!A.sheenColorMap,ge=Z&&!!A.sheenRoughnessMap,Le=!!A.specularMap,Fe=!!A.specularColorMap,rt=!!A.specularIntensityMap,D=Ee&&!!A.transmissionMap,ie=Ee&&!!A.thicknessMap,X=!!A.gradientMap,Y=!!A.alphaMap,ae=A.alphaTest>0,Ae=!!A.alphaHash,He=!!A.extensions;let gt=Vi;A.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(gt=t.toneMapping);const Rt={shaderID:j,shaderType:A.type,shaderName:A.name,vertexShader:ze,fragmentShader:V,defines:A.defines,customVertexShaderID:te,customFragmentShaderID:de,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:be,batchingColor:be&&z._colorsTexture!==null,instancing:we,instancingColor:we&&z.instanceColor!==null,instancingMorph:we&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?t.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Zi,alphaToCoverage:!!A.alphaToCoverage,map:Be,matcap:lt,envMap:R,envMapMode:R&&ee.mapping,envMapCubeUVHeight:I,aoMap:pt,lightMap:Ze,bumpMap:Je,normalMap:Me,displacementMap:d&&mt,emissiveMap:Pe,normalMapObjectSpace:Me&&A.normalMapType===Qv,normalMapTangentSpace:Me&&A.normalMapType===d2,metalnessMap:Ie,roughnessMap:T,anisotropy:S,anisotropyMap:ce,clearcoat:k,clearcoatMap:me,clearcoatNormalMap:De,clearcoatRoughnessMap:ne,dispersion:q,iridescence:J,iridescenceMap:pe,iridescenceThicknessMap:ke,sheen:Z,sheenColorMap:Re,sheenRoughnessMap:ge,specularMap:Le,specularColorMap:Fe,specularIntensityMap:rt,transmission:Ee,transmissionMap:D,thicknessMap:ie,gradientMap:X,opaque:A.transparent===!1&&A.blending===hs&&A.alphaToCoverage===!1,alphaMap:Y,alphaTest:ae,alphaHash:Ae,combine:A.combine,mapUv:Be&&x(A.map.channel),aoMapUv:pt&&x(A.aoMap.channel),lightMapUv:Ze&&x(A.lightMap.channel),bumpMapUv:Je&&x(A.bumpMap.channel),normalMapUv:Me&&x(A.normalMap.channel),displacementMapUv:mt&&x(A.displacementMap.channel),emissiveMapUv:Pe&&x(A.emissiveMap.channel),metalnessMapUv:Ie&&x(A.metalnessMap.channel),roughnessMapUv:T&&x(A.roughnessMap.channel),anisotropyMapUv:ce&&x(A.anisotropyMap.channel),clearcoatMapUv:me&&x(A.clearcoatMap.channel),clearcoatNormalMapUv:De&&x(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&x(A.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&x(A.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&x(A.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&x(A.sheenColorMap.channel),sheenRoughnessMapUv:ge&&x(A.sheenRoughnessMap.channel),specularMapUv:Le&&x(A.specularMap.channel),specularColorMapUv:Fe&&x(A.specularColorMap.channel),specularIntensityMapUv:rt&&x(A.specularIntensityMap.channel),transmissionMapUv:D&&x(A.transmissionMap.channel),thicknessMapUv:ie&&x(A.thicknessMap.channel),alphaMapUv:Y&&x(A.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Me||S),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Q.attributes.uv&&(Be||Y),fog:!!W,useFog:A.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ye,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:gt,decodeVideoTexture:Be&&A.map.isVideoTexture===!0&&Ke.getTransfer(A.map.colorSpace)===tt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ii,flipSided:A.side===Jt,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:He&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&A.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function u(A){const y=[];if(A.shaderID?y.push(A.shaderID):(y.push(A.customVertexShaderID),y.push(A.customFragmentShaderID)),A.defines!==void 0)for(const L in A.defines)y.push(L),y.push(A.defines[L]);return A.isRawShaderMaterial===!1&&(_(y,A),g(y,A),y.push(t.outputColorSpace)),y.push(A.customProgramCacheKey),y.join()}function _(A,y){A.push(y.precision),A.push(y.outputColorSpace),A.push(y.envMapMode),A.push(y.envMapCubeUVHeight),A.push(y.mapUv),A.push(y.alphaMapUv),A.push(y.lightMapUv),A.push(y.aoMapUv),A.push(y.bumpMapUv),A.push(y.normalMapUv),A.push(y.displacementMapUv),A.push(y.emissiveMapUv),A.push(y.metalnessMapUv),A.push(y.roughnessMapUv),A.push(y.anisotropyMapUv),A.push(y.clearcoatMapUv),A.push(y.clearcoatNormalMapUv),A.push(y.clearcoatRoughnessMapUv),A.push(y.iridescenceMapUv),A.push(y.iridescenceThicknessMapUv),A.push(y.sheenColorMapUv),A.push(y.sheenRoughnessMapUv),A.push(y.specularMapUv),A.push(y.specularColorMapUv),A.push(y.specularIntensityMapUv),A.push(y.transmissionMapUv),A.push(y.thicknessMapUv),A.push(y.combine),A.push(y.fogExp2),A.push(y.sizeAttenuation),A.push(y.morphTargetsCount),A.push(y.morphAttributeCount),A.push(y.numDirLights),A.push(y.numPointLights),A.push(y.numSpotLights),A.push(y.numSpotLightMaps),A.push(y.numHemiLights),A.push(y.numRectAreaLights),A.push(y.numDirLightShadows),A.push(y.numPointLightShadows),A.push(y.numSpotLightShadows),A.push(y.numSpotLightShadowsWithMaps),A.push(y.numLightProbes),A.push(y.shadowMapType),A.push(y.toneMapping),A.push(y.numClippingPlanes),A.push(y.numClipIntersection),A.push(y.depthPacking)}function g(A,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),A.push(a.mask)}function M(A){const y=v[A.type];let L;if(y){const G=kn[y];L=wx.clone(G.uniforms)}else L=A.uniforms;return L}function P(A,y){let L;for(let G=0,z=f.length;G<z;G++){const W=f[G];if(W.cacheKey===y){L=W,++L.usedTimes;break}}return L===void 0&&(L=new kM(t,y,A,s),f.push(L)),L}function C(A){if(--A.usedTimes===0){const y=f.indexOf(A);f[y]=f[f.length-1],f.pop(),A.destroy()}}function w(A){l.remove(A)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:P,releaseProgram:C,releaseShaderCache:w,programs:f,dispose:b}}function WM(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function XM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Np(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Fp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,p,v,x,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:d,material:p,groupOrder:v,renderOrder:h.renderOrder,z:x,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=p,u.groupOrder=v,u.renderOrder=h.renderOrder,u.z=x,u.group=m),e++,u}function a(h,d,p,v,x,m){const u=o(h,d,p,v,x,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(h,d,p,v,x,m){const u=o(h,d,p,v,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,d){n.length>1&&n.sort(h||XM),i.length>1&&i.sort(d||Np),r.length>1&&r.sort(d||Np)}function f(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function jM(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Fp,t.set(i,[o])):r>=s.length?(o=new Fp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function YM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new We};break;case"SpotLight":n={position:new B,direction:new B,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function qM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let KM=0;function ZM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function QM(t){const e=new YM,n=qM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new ht,o=new ht;function a(c){let f=0,h=0,d=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,v=0,x=0,m=0,u=0,_=0,g=0,M=0,P=0,C=0,w=0;c.sort(ZM);for(let A=0,y=c.length;A<y;A++){const L=c[A],G=L.color,z=L.intensity,W=L.distance,Q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=G.r*z,h+=G.g*z,d+=G.b*z;else if(L.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],z);w++}else if(L.isDirectionalLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,I=n.get(L);I.shadowIntensity=ee.intensity,I.shadowBias=ee.bias,I.shadowNormalBias=ee.normalBias,I.shadowRadius=ee.radius,I.shadowMapSize=ee.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=L.shadow.matrix,_++}i.directional[p]=H,p++}else if(L.isSpotLight){const H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(G).multiplyScalar(z),H.distance=W,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[x]=H;const ee=L.shadow;if(L.map&&(i.spotLightMap[P]=L.map,P++,ee.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[x]=ee.matrix,L.castShadow){const I=n.get(L);I.shadowIntensity=ee.intensity,I.shadowBias=ee.bias,I.shadowNormalBias=ee.normalBias,I.shadowRadius=ee.radius,I.shadowMapSize=ee.mapSize,i.spotShadow[x]=I,i.spotShadowMap[x]=Q,M++}x++}else if(L.isRectAreaLight){const H=e.get(L);H.color.copy(G).multiplyScalar(z),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=H,m++}else if(L.isPointLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const ee=L.shadow,I=n.get(L);I.shadowIntensity=ee.intensity,I.shadowBias=ee.bias,I.shadowNormalBias=ee.normalBias,I.shadowRadius=ee.radius,I.shadowMapSize=ee.mapSize,I.shadowCameraNear=ee.camera.near,I.shadowCameraFar=ee.camera.far,i.pointShadow[v]=I,i.pointShadowMap[v]=Q,i.pointShadowMatrix[v]=L.shadow.matrix,g++}i.point[v]=H,v++}else if(L.isHemisphereLight){const H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(z),H.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[u]=H,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const b=i.hash;(b.directionalLength!==p||b.pointLength!==v||b.spotLength!==x||b.rectAreaLength!==m||b.hemiLength!==u||b.numDirectionalShadows!==_||b.numPointShadows!==g||b.numSpotShadows!==M||b.numSpotMaps!==P||b.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=M+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,b.directionalLength=p,b.pointLength=v,b.spotLength=x,b.rectAreaLength=m,b.hemiLength=u,b.numDirectionalShadows=_,b.numPointShadows=g,b.numSpotShadows=M,b.numSpotMaps=P,b.numLightProbes=w,i.version=KM++)}function l(c,f){let h=0,d=0,p=0,v=0,x=0;const m=f.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const g=c[u];if(g.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(g.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(g.width*.5,0,0),M.halfHeight.set(0,g.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(g.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),d++}else if(g.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Op(t){const e=new QM(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function JM(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Op(t),e.set(r,[a])):s>=o.length?(a=new Op(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class $M extends Bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eE extends Bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nE=`uniform sampler2D shadow_pass;
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
}`;function iE(t,e,n){let i=new Ad;const r=new Ge,s=new Ge,o=new yt,a=new $M({depthPacking:Zv}),l=new eE,c={},f=n.maxTextureSize,h={[Xi]:Jt,[Jt]:Xi,[ii]:ii},d=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:tE,fragmentShader:nE}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new Qi;v.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Vn(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$m;let u=this.type;this.render=function(C,w,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const A=t.getRenderTarget(),y=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),G=t.state;G.setBlending(Hi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=u!==ei&&this.type===ei,W=u===ei&&this.type!==ei;for(let Q=0,H=C.length;Q<H;Q++){const ee=C[Q],I=ee.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const j=I.getFrameExtents();if(r.multiply(j),s.copy(I.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/j.x),r.x=s.x*j.x,I.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/j.y),r.y=s.y*j.y,I.mapSize.y=s.y)),I.map===null||z===!0||W===!0){const oe=this.type!==ei?{minFilter:vn,magFilter:vn}:{};I.map!==null&&I.map.dispose(),I.map=new Ar(r.x,r.y,oe),I.map.texture.name=ee.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const K=I.getViewportCount();for(let oe=0;oe<K;oe++){const ye=I.getViewport(oe);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),G.viewport(o),I.updateMatrices(ee,oe),i=I.getFrustum(),M(w,b,I.camera,ee,this.type)}I.isPointLightShadow!==!0&&this.type===ei&&_(I,b),I.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(A,y,L)};function _(C,w){const b=e.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ar(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(w,null,b,d,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(w,null,b,p,x,null)}function g(C,w,b,A){let y=null;const L=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)y=L;else if(y=b.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=y.uuid,z=w.uuid;let W=c[G];W===void 0&&(W={},c[G]=W);let Q=W[z];Q===void 0&&(Q=y.clone(),W[z]=Q,w.addEventListener("dispose",P)),y=Q}if(y.visible=w.visible,y.wireframe=w.wireframe,A===ei?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:h[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,b.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const G=t.properties.get(y);G.light=b}return y}function M(C,w,b,A,y){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===ei)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);const z=e.update(C),W=C.material;if(Array.isArray(W)){const Q=z.groups;for(let H=0,ee=Q.length;H<ee;H++){const I=Q[H],j=W[I.materialIndex];if(j&&j.visible){const K=g(C,j,A,y);C.onBeforeShadow(t,C,w,b,z,K,I),t.renderBufferDirect(b,null,z,K,C,I),C.onAfterShadow(t,C,w,b,z,K,I)}}}else if(W.visible){const Q=g(C,W,A,y);C.onBeforeShadow(t,C,w,b,z,Q,null),t.renderBufferDirect(b,null,z,Q,C,null),C.onAfterShadow(t,C,w,b,z,Q,null)}}const G=C.children;for(let z=0,W=G.length;z<W;z++)M(G[z],w,b,A,y)}function P(C){C.target.removeEventListener("dispose",P);for(const b in c){const A=c[b],y=C.target.uuid;y in A&&(A[y].dispose(),delete A[y])}}}function rE(t){function e(){let D=!1;const ie=new yt;let X=null;const Y=new yt(0,0,0,0);return{setMask:function(ae){X!==ae&&!D&&(t.colorMask(ae,ae,ae,ae),X=ae)},setLocked:function(ae){D=ae},setClear:function(ae,Ae,He,gt,Rt){Rt===!0&&(ae*=gt,Ae*=gt,He*=gt),ie.set(ae,Ae,He,gt),Y.equals(ie)===!1&&(t.clearColor(ae,Ae,He,gt),Y.copy(ie))},reset:function(){D=!1,X=null,Y.set(-1,0,0,0)}}}function n(){let D=!1,ie=null,X=null,Y=null;return{setTest:function(ae){ae?de(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(ae){ie!==ae&&!D&&(t.depthMask(ae),ie=ae)},setFunc:function(ae){if(X!==ae){switch(ae){case Iv:t.depthFunc(t.NEVER);break;case Dv:t.depthFunc(t.ALWAYS);break;case Uv:t.depthFunc(t.LESS);break;case gl:t.depthFunc(t.LEQUAL);break;case Nv:t.depthFunc(t.EQUAL);break;case Fv:t.depthFunc(t.GEQUAL);break;case Ov:t.depthFunc(t.GREATER);break;case Bv:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}X=ae}},setLocked:function(ae){D=ae},setClear:function(ae){Y!==ae&&(t.clearDepth(ae),Y=ae)},reset:function(){D=!1,ie=null,X=null,Y=null}}}function i(){let D=!1,ie=null,X=null,Y=null,ae=null,Ae=null,He=null,gt=null,Rt=null;return{setTest:function(Xe){D||(Xe?de(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(Xe){ie!==Xe&&!D&&(t.stencilMask(Xe),ie=Xe)},setFunc:function(Xe,qn,Nn){(X!==Xe||Y!==qn||ae!==Nn)&&(t.stencilFunc(Xe,qn,Nn),X=Xe,Y=qn,ae=Nn)},setOp:function(Xe,qn,Nn){(Ae!==Xe||He!==qn||gt!==Nn)&&(t.stencilOp(Xe,qn,Nn),Ae=Xe,He=qn,gt=Nn)},setLocked:function(Xe){D=Xe},setClear:function(Xe){Rt!==Xe&&(t.clearStencil(Xe),Rt=Xe)},reset:function(){D=!1,ie=null,X=null,Y=null,ae=null,Ae=null,He=null,gt=null,Rt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},f={},h=new WeakMap,d=[],p=null,v=!1,x=null,m=null,u=null,_=null,g=null,M=null,P=null,C=new We(0,0,0),w=0,b=!1,A=null,y=null,L=null,G=null,z=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,H=0;const ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Q=H>=1):ee.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Q=H>=2);let I=null,j={};const K=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),ye=new yt().fromArray(K),ze=new yt().fromArray(oe);function V(D,ie,X,Y){const ae=new Uint8Array(4),Ae=t.createTexture();t.bindTexture(D,Ae),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let He=0;He<X;He++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,t.RGBA,1,1,Y,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(ie+He,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return Ae}const te={};te[t.TEXTURE_2D]=V(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=V(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=V(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=V(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(t.DEPTH_TEST),s.setFunc(gl),Je(!1),Me(Gh),de(t.CULL_FACE),pt(Hi);function de(D){c[D]!==!0&&(t.enable(D),c[D]=!0)}function ue(D){c[D]!==!1&&(t.disable(D),c[D]=!1)}function we(D,ie){return f[D]!==ie?(t.bindFramebuffer(D,ie),f[D]=ie,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ie),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ie),!0):!1}function be(D,ie){let X=d,Y=!1;if(D){X=h.get(ie),X===void 0&&(X=[],h.set(ie,X));const ae=D.textures;if(X.length!==ae.length||X[0]!==t.COLOR_ATTACHMENT0){for(let Ae=0,He=ae.length;Ae<He;Ae++)X[Ae]=t.COLOR_ATTACHMENT0+Ae;X.length=ae.length,Y=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,Y=!0);Y&&t.drawBuffers(X)}function Be(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const lt={[cr]:t.FUNC_ADD,[mv]:t.FUNC_SUBTRACT,[gv]:t.FUNC_REVERSE_SUBTRACT};lt[_v]=t.MIN,lt[vv]=t.MAX;const R={[xv]:t.ZERO,[Sv]:t.ONE,[yv]:t.SRC_COLOR,[zu]:t.SRC_ALPHA,[Tv]:t.SRC_ALPHA_SATURATE,[Cv]:t.DST_COLOR,[Ev]:t.DST_ALPHA,[Mv]:t.ONE_MINUS_SRC_COLOR,[Hu]:t.ONE_MINUS_SRC_ALPHA,[wv]:t.ONE_MINUS_DST_COLOR,[Av]:t.ONE_MINUS_DST_ALPHA,[Rv]:t.CONSTANT_COLOR,[Pv]:t.ONE_MINUS_CONSTANT_COLOR,[Lv]:t.CONSTANT_ALPHA,[bv]:t.ONE_MINUS_CONSTANT_ALPHA};function pt(D,ie,X,Y,ae,Ae,He,gt,Rt,Xe){if(D===Hi){v===!0&&(ue(t.BLEND),v=!1);return}if(v===!1&&(de(t.BLEND),v=!0),D!==pv){if(D!==x||Xe!==b){if((m!==cr||g!==cr)&&(t.blendEquation(t.FUNC_ADD),m=cr,g=cr),Xe)switch(D){case hs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wh:t.blendFunc(t.ONE,t.ONE);break;case Xh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case hs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Xh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}u=null,_=null,M=null,P=null,C.set(0,0,0),w=0,x=D,b=Xe}return}ae=ae||ie,Ae=Ae||X,He=He||Y,(ie!==m||ae!==g)&&(t.blendEquationSeparate(lt[ie],lt[ae]),m=ie,g=ae),(X!==u||Y!==_||Ae!==M||He!==P)&&(t.blendFuncSeparate(R[X],R[Y],R[Ae],R[He]),u=X,_=Y,M=Ae,P=He),(gt.equals(C)===!1||Rt!==w)&&(t.blendColor(gt.r,gt.g,gt.b,Rt),C.copy(gt),w=Rt),x=D,b=!1}function Ze(D,ie){D.side===ii?ue(t.CULL_FACE):de(t.CULL_FACE);let X=D.side===Jt;ie&&(X=!X),Je(X),D.blending===hs&&D.transparent===!1?pt(Hi):pt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const Y=D.stencilWrite;o.setTest(Y),Y&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Pe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Je(D){A!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),A=D)}function Me(D){D!==fv?(de(t.CULL_FACE),D!==y&&(D===Gh?t.cullFace(t.BACK):D===dv?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),y=D}function mt(D){D!==L&&(Q&&t.lineWidth(D),L=D)}function Pe(D,ie,X){D?(de(t.POLYGON_OFFSET_FILL),(G!==ie||z!==X)&&(t.polygonOffset(ie,X),G=ie,z=X)):ue(t.POLYGON_OFFSET_FILL)}function Ie(D){D?de(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function T(D){D===void 0&&(D=t.TEXTURE0+W-1),I!==D&&(t.activeTexture(D),I=D)}function S(D,ie,X){X===void 0&&(I===null?X=t.TEXTURE0+W-1:X=I);let Y=j[X];Y===void 0&&(Y={type:void 0,texture:void 0},j[X]=Y),(Y.type!==D||Y.texture!==ie)&&(I!==X&&(t.activeTexture(X),I=X),t.bindTexture(D,ie||te[D]),Y.type=D,Y.texture=ie)}function k(){const D=j[I];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ke(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(D){ye.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),ye.copy(D))}function ge(D){ze.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ze.copy(D))}function Le(D,ie){let X=l.get(ie);X===void 0&&(X=new WeakMap,l.set(ie,X));let Y=X.get(D);Y===void 0&&(Y=t.getUniformBlockIndex(ie,D.name),X.set(D,Y))}function Fe(D,ie){const Y=l.get(ie).get(D);a.get(ie)!==Y&&(t.uniformBlockBinding(ie,Y,D.__bindingPointIndex),a.set(ie,Y))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},I=null,j={},f={},h=new WeakMap,d=[],p=null,v=!1,x=null,m=null,u=null,_=null,g=null,M=null,P=null,C=new We(0,0,0),w=0,b=!1,A=null,y=null,L=null,G=null,z=null,ye.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:de,disable:ue,bindFramebuffer:we,drawBuffers:be,useProgram:Be,setBlending:pt,setMaterial:Ze,setFlipSided:Je,setCullFace:Me,setLineWidth:mt,setPolygonOffset:Pe,setScissorTest:Ie,activeTexture:T,bindTexture:S,unbindTexture:k,compressedTexImage2D:q,compressedTexImage3D:J,texImage2D:pe,texImage3D:ke,updateUBOMapping:Le,uniformBlockBinding:Fe,texStorage2D:De,texStorage3D:ne,texSubImage2D:Z,texSubImage3D:Ee,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:Re,viewport:ge,reset:rt}}function Bp(t,e,n,i){const r=sE(i);switch(n){case s2:return t*e;case a2:return t*e;case l2:return t*e*2;case c2:return t*e/r.components*r.byteLength;case xd:return t*e/r.components*r.byteLength;case u2:return t*e*2/r.components*r.byteLength;case Sd:return t*e*2/r.components*r.byteLength;case o2:return t*e*3/r.components*r.byteLength;case bn:return t*e*4/r.components*r.byteLength;case yd:return t*e*4/r.components*r.byteLength;case za:case Ha:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Va:case Ga:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yu:case Ku:return Math.max(t,16)*Math.max(e,8)/4;case ju:case qu:return Math.max(t,8)*Math.max(e,8)/2;case Zu:case Qu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ju:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $u:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ef:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case tf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case nf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case rf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case sf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case of:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case af:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case lf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case cf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case uf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ff:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case df:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case hf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Wa:case pf:case mf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case f2:case gf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case _f:case vf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function sE(t){switch(t){case pi:case n2:return{byteLength:1,components:1};case Ro:case i2:case Uo:return{byteLength:2,components:1};case _d:case vd:return{byteLength:2,components:4};case Er:case gd:case oi:return{byteLength:4,components:1};case r2:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function oE(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,f=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,S){return p?new OffscreenCanvas(T,S):yl("canvas")}function x(T,S,k){let q=1;const J=Ie(T);if((J.width>k||J.height>k)&&(q=k/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Z=Math.floor(q*J.width),Ee=Math.floor(q*J.height);h===void 0&&(h=v(Z,Ee));const ce=S?v(Z,Ee):h;return ce.width=Z,ce.height=Ee,ce.getContext("2d").drawImage(T,0,0,Z,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+Ee+")."),ce}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps&&T.minFilter!==vn&&T.minFilter!==Ln}function u(T){t.generateMipmap(T)}function _(T,S,k,q,J=!1){if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z=S;if(S===t.RED&&(k===t.FLOAT&&(Z=t.R32F),k===t.HALF_FLOAT&&(Z=t.R16F),k===t.UNSIGNED_BYTE&&(Z=t.R8)),S===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(Z=t.R8UI),k===t.UNSIGNED_SHORT&&(Z=t.R16UI),k===t.UNSIGNED_INT&&(Z=t.R32UI),k===t.BYTE&&(Z=t.R8I),k===t.SHORT&&(Z=t.R16I),k===t.INT&&(Z=t.R32I)),S===t.RG&&(k===t.FLOAT&&(Z=t.RG32F),k===t.HALF_FLOAT&&(Z=t.RG16F),k===t.UNSIGNED_BYTE&&(Z=t.RG8)),S===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(Z=t.RG8UI),k===t.UNSIGNED_SHORT&&(Z=t.RG16UI),k===t.UNSIGNED_INT&&(Z=t.RG32UI),k===t.BYTE&&(Z=t.RG8I),k===t.SHORT&&(Z=t.RG16I),k===t.INT&&(Z=t.RG32I)),S===t.RGB&&k===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),S===t.RGBA){const Ee=J?_l:Ke.getTransfer(q);k===t.FLOAT&&(Z=t.RGBA32F),k===t.HALF_FLOAT&&(Z=t.RGBA16F),k===t.UNSIGNED_BYTE&&(Z=Ee===tt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function g(T,S){let k;return T?S===null||S===Er||S===ws?k=t.DEPTH24_STENCIL8:S===oi?k=t.DEPTH32F_STENCIL8:S===Ro&&(k=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Er||S===ws?k=t.DEPTH_COMPONENT24:S===oi?k=t.DEPTH_COMPONENT32F:S===Ro&&(k=t.DEPTH_COMPONENT16),k}function M(T,S){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==vn&&T.minFilter!==Ln?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function P(T){const S=T.target;S.removeEventListener("dispose",P),w(S),S.isVideoTexture&&f.delete(S)}function C(T){const S=T.target;S.removeEventListener("dispose",C),A(S)}function w(T){const S=i.get(T);if(S.__webglInit===void 0)return;const k=T.source,q=d.get(k);if(q){const J=q[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(T),Object.keys(q).length===0&&d.delete(k)}i.remove(T)}function b(T){const S=i.get(T);t.deleteTexture(S.__webglTexture);const k=T.source,q=d.get(k);delete q[S.__cacheKey],o.memory.textures--}function A(T){const S=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let J=0;J<S.__webglFramebuffer[q].length;J++)t.deleteFramebuffer(S.__webglFramebuffer[q][J]);else t.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)t.deleteFramebuffer(S.__webglFramebuffer[q]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=T.textures;for(let q=0,J=k.length;q<J;q++){const Z=i.get(k[q]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(k[q])}i.remove(T)}let y=0;function L(){y=0}function G(){const T=y;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),y+=1,T}function z(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function W(T,S){const k=i.get(T);if(T.isVideoTexture&&mt(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(k,T,S);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+S)}function Q(T,S){const k=i.get(T);if(T.version>0&&k.__version!==T.version){ze(k,T,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+S)}function H(T,S){const k=i.get(T);if(T.version>0&&k.__version!==T.version){ze(k,T,S);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+S)}function ee(T,S){const k=i.get(T);if(T.version>0&&k.__version!==T.version){V(k,T,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+S)}const I={[Wu]:t.REPEAT,[pr]:t.CLAMP_TO_EDGE,[Xu]:t.MIRRORED_REPEAT},j={[vn]:t.NEAREST,[qv]:t.NEAREST_MIPMAP_NEAREST,[sa]:t.NEAREST_MIPMAP_LINEAR,[Ln]:t.LINEAR,[vc]:t.LINEAR_MIPMAP_NEAREST,[mr]:t.LINEAR_MIPMAP_LINEAR},K={[Jv]:t.NEVER,[rx]:t.ALWAYS,[$v]:t.LESS,[h2]:t.LEQUAL,[ex]:t.EQUAL,[ix]:t.GEQUAL,[tx]:t.GREATER,[nx]:t.NOTEQUAL};function oe(T,S){if(S.type===oi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ln||S.magFilter===vc||S.magFilter===sa||S.magFilter===mr||S.minFilter===Ln||S.minFilter===vc||S.minFilter===sa||S.minFilter===mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,I[S.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,I[S.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,I[S.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,j[S.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,j[S.minFilter]),S.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,K[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===vn||S.minFilter!==sa&&S.minFilter!==mr||S.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ye(T,S){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",P));const q=S.source;let J=d.get(q);J===void 0&&(J={},d.set(q,J));const Z=z(S);if(Z!==T.__cacheKey){J[Z]===void 0&&(J[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),J[Z].usedTimes++;const Ee=J[T.__cacheKey];Ee!==void 0&&(J[T.__cacheKey].usedTimes--,Ee.usedTimes===0&&b(S)),T.__cacheKey=Z,T.__webglTexture=J[Z].texture}return k}function ze(T,S,k){let q=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=t.TEXTURE_3D);const J=ye(T,S),Z=S.source;n.bindTexture(q,T.__webglTexture,t.TEXTURE0+k);const Ee=i.get(Z);if(Z.version!==Ee.__version||J===!0){n.activeTexture(t.TEXTURE0+k);const ce=Ke.getPrimaries(Ke.workingColorSpace),me=S.colorSpace===Li?null:Ke.getPrimaries(S.colorSpace),De=S.colorSpace===Li||ce===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ne=x(S.image,!1,r.maxTextureSize);ne=Pe(S,ne);const pe=s.convert(S.format,S.colorSpace),ke=s.convert(S.type);let Re=_(S.internalFormat,pe,ke,S.colorSpace,S.isVideoTexture);oe(q,S);let ge;const Le=S.mipmaps,Fe=S.isVideoTexture!==!0,rt=Ee.__version===void 0||J===!0,D=Z.dataReady,ie=M(S,ne);if(S.isDepthTexture)Re=g(S.format===Ts,S.type),rt&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,Re,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,Re,ne.width,ne.height,0,pe,ke,null));else if(S.isDataTexture)if(Le.length>0){Fe&&rt&&n.texStorage2D(t.TEXTURE_2D,ie,Re,Le[0].width,Le[0].height);for(let X=0,Y=Le.length;X<Y;X++)ge=Le[X],Fe?D&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ge.width,ge.height,pe,ke,ge.data):n.texImage2D(t.TEXTURE_2D,X,Re,ge.width,ge.height,0,pe,ke,ge.data);S.generateMipmaps=!1}else Fe?(rt&&n.texStorage2D(t.TEXTURE_2D,ie,Re,ne.width,ne.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne.width,ne.height,pe,ke,ne.data)):n.texImage2D(t.TEXTURE_2D,0,Re,ne.width,ne.height,0,pe,ke,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Fe&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,Re,Le[0].width,Le[0].height,ne.depth);for(let X=0,Y=Le.length;X<Y;X++)if(ge=Le[X],S.format!==bn)if(pe!==null)if(Fe){if(D)if(S.layerUpdates.size>0){const ae=Bp(ge.width,ge.height,S.format,S.type);for(const Ae of S.layerUpdates){const He=ge.data.subarray(Ae*ae/ge.data.BYTES_PER_ELEMENT,(Ae+1)*ae/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,Ae,ge.width,ge.height,1,pe,He,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,ne.depth,pe,ge.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,Re,ge.width,ge.height,ne.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,ne.depth,pe,ke,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,Re,ge.width,ge.height,ne.depth,0,pe,ke,ge.data)}else{Fe&&rt&&n.texStorage2D(t.TEXTURE_2D,ie,Re,Le[0].width,Le[0].height);for(let X=0,Y=Le.length;X<Y;X++)ge=Le[X],S.format!==bn?pe!==null?Fe?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,ge.width,ge.height,pe,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,X,Re,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?D&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ge.width,ge.height,pe,ke,ge.data):n.texImage2D(t.TEXTURE_2D,X,Re,ge.width,ge.height,0,pe,ke,ge.data)}else if(S.isDataArrayTexture)if(Fe){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,Re,ne.width,ne.height,ne.depth),D)if(S.layerUpdates.size>0){const X=Bp(ne.width,ne.height,S.format,S.type);for(const Y of S.layerUpdates){const ae=ne.data.subarray(Y*X/ne.data.BYTES_PER_ELEMENT,(Y+1)*X/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Y,ne.width,ne.height,1,pe,ke,ae)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,pe,ke,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,ne.width,ne.height,ne.depth,0,pe,ke,ne.data);else if(S.isData3DTexture)Fe?(rt&&n.texStorage3D(t.TEXTURE_3D,ie,Re,ne.width,ne.height,ne.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,pe,ke,ne.data)):n.texImage3D(t.TEXTURE_3D,0,Re,ne.width,ne.height,ne.depth,0,pe,ke,ne.data);else if(S.isFramebufferTexture){if(rt)if(Fe)n.texStorage2D(t.TEXTURE_2D,ie,Re,ne.width,ne.height);else{let X=ne.width,Y=ne.height;for(let ae=0;ae<ie;ae++)n.texImage2D(t.TEXTURE_2D,ae,Re,X,Y,0,pe,ke,null),X>>=1,Y>>=1}}else if(Le.length>0){if(Fe&&rt){const X=Ie(Le[0]);n.texStorage2D(t.TEXTURE_2D,ie,Re,X.width,X.height)}for(let X=0,Y=Le.length;X<Y;X++)ge=Le[X],Fe?D&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,pe,ke,ge):n.texImage2D(t.TEXTURE_2D,X,Re,pe,ke,ge);S.generateMipmaps=!1}else if(Fe){if(rt){const X=Ie(ne);n.texStorage2D(t.TEXTURE_2D,ie,Re,X.width,X.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,ke,ne)}else n.texImage2D(t.TEXTURE_2D,0,Re,pe,ke,ne);m(S)&&u(q),Ee.__version=Z.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function V(T,S,k){if(S.image.length!==6)return;const q=ye(T,S),J=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+k);const Z=i.get(J);if(J.version!==Z.__version||q===!0){n.activeTexture(t.TEXTURE0+k);const Ee=Ke.getPrimaries(Ke.workingColorSpace),ce=S.colorSpace===Li?null:Ke.getPrimaries(S.colorSpace),me=S.colorSpace===Li||Ee===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const De=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,pe=[];for(let Y=0;Y<6;Y++)!De&&!ne?pe[Y]=x(S.image[Y],!0,r.maxCubemapSize):pe[Y]=ne?S.image[Y].image:S.image[Y],pe[Y]=Pe(S,pe[Y]);const ke=pe[0],Re=s.convert(S.format,S.colorSpace),ge=s.convert(S.type),Le=_(S.internalFormat,Re,ge,S.colorSpace),Fe=S.isVideoTexture!==!0,rt=Z.__version===void 0||q===!0,D=J.dataReady;let ie=M(S,ke);oe(t.TEXTURE_CUBE_MAP,S);let X;if(De){Fe&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ie,Le,ke.width,ke.height);for(let Y=0;Y<6;Y++){X=pe[Y].mipmaps;for(let ae=0;ae<X.length;ae++){const Ae=X[ae];S.format!==bn?Re!==null?Fe?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,0,0,Ae.width,Ae.height,Re,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,Le,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,0,0,Ae.width,Ae.height,Re,ge,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,Le,Ae.width,Ae.height,0,Re,ge,Ae.data)}}}else{if(X=S.mipmaps,Fe&&rt){X.length>0&&ie++;const Y=Ie(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ie,Le,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ne){Fe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,pe[Y].width,pe[Y].height,Re,ge,pe[Y].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Le,pe[Y].width,pe[Y].height,0,Re,ge,pe[Y].data);for(let ae=0;ae<X.length;ae++){const He=X[ae].image[Y].image;Fe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,0,0,He.width,He.height,Re,ge,He.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,Le,He.width,He.height,0,Re,ge,He.data)}}else{Fe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Re,ge,pe[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Le,Re,ge,pe[Y]);for(let ae=0;ae<X.length;ae++){const Ae=X[ae];Fe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,0,0,Re,ge,Ae.image[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,Le,Re,ge,Ae.image[Y])}}}m(S)&&u(t.TEXTURE_CUBE_MAP),Z.__version=J.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function te(T,S,k,q,J,Z){const Ee=s.convert(k.format,k.colorSpace),ce=s.convert(k.type),me=_(k.internalFormat,Ee,ce,k.colorSpace);if(!i.get(S).__hasExternalTextures){const ne=Math.max(1,S.width>>Z),pe=Math.max(1,S.height>>Z);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,Z,me,ne,pe,S.depth,0,Ee,ce,null):n.texImage2D(J,Z,me,ne,pe,0,Ee,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),Me(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,J,i.get(k).__webglTexture,0,Je(S)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,J,i.get(k).__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(T,S,k){if(t.bindRenderbuffer(t.RENDERBUFFER,T),S.depthBuffer){const q=S.depthTexture,J=q&&q.isDepthTexture?q.type:null,Z=g(S.stencilBuffer,J),Ee=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=Je(S);Me(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,Z,S.width,S.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,Z,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Z,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,T)}else{const q=S.textures;for(let J=0;J<q.length;J++){const Z=q[J],Ee=s.convert(Z.format,Z.colorSpace),ce=s.convert(Z.type),me=_(Z.internalFormat,Ee,ce,Z.colorSpace),De=Je(S);k&&Me(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,De,me,S.width,S.height):Me(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,De,me,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,me,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const q=i.get(S.depthTexture).__webglTexture,J=Je(S);if(S.depthTexture.format===ps)Me(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(S.depthTexture.format===Ts)Me(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function we(T){const S=i.get(T),k=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=q}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ue(S.__webglFramebuffer,T)}else if(k){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=t.createRenderbuffer(),de(S.__webglDepthbuffer[q],T,!1);else{const J=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,Z)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),de(S.__webglDepthbuffer,T,!1);else{const q=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,J)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(T,S,k){const q=i.get(T);S!==void 0&&te(q.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&we(T)}function Be(T){const S=T.texture,k=i.get(T),q=i.get(S);T.addEventListener("dispose",C);const J=T.textures,Z=T.isWebGLCubeRenderTarget===!0,Ee=J.length>1;if(Ee||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=S.version,o.memory.textures++),Z){k.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ce]=[];for(let me=0;me<S.mipmaps.length;me++)k.__webglFramebuffer[ce][me]=t.createFramebuffer()}else k.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)k.__webglFramebuffer[ce]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ce=0,me=J.length;ce<me;ce++){const De=i.get(J[ce]);De.__webglTexture===void 0&&(De.__webglTexture=t.createTexture(),o.memory.textures++)}if(T.samples>0&&Me(T)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ce=0;ce<J.length;ce++){const me=J[ce];k.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[ce]);const De=s.convert(me.format,me.colorSpace),ne=s.convert(me.type),pe=_(me.internalFormat,De,ne,me.colorSpace,T.isXRRenderTarget===!0),ke=Je(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,pe,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,k.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),de(k.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),oe(t.TEXTURE_CUBE_MAP,S);for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)te(k.__webglFramebuffer[ce][me],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else te(k.__webglFramebuffer[ce],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(S)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ce=0,me=J.length;ce<me;ce++){const De=J[ce],ne=i.get(De);n.bindTexture(t.TEXTURE_2D,ne.__webglTexture),oe(t.TEXTURE_2D,De),te(k.__webglFramebuffer,T,De,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),m(De)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ce=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,q.__webglTexture),oe(ce,S),S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)te(k.__webglFramebuffer[me],T,S,t.COLOR_ATTACHMENT0,ce,me);else te(k.__webglFramebuffer,T,S,t.COLOR_ATTACHMENT0,ce,0);m(S)&&u(ce),n.unbindTexture()}T.depthBuffer&&we(T)}function lt(T){const S=T.textures;for(let k=0,q=S.length;k<q;k++){const J=S[k];if(m(J)){const Z=T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ee=i.get(J).__webglTexture;n.bindTexture(Z,Ee),u(Z),n.unbindTexture()}}}const R=[],pt=[];function Ze(T){if(T.samples>0){if(Me(T)===!1){const S=T.textures,k=T.width,q=T.height;let J=t.COLOR_BUFFER_BIT;const Z=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(T),ce=S.length>1;if(ce)for(let me=0;me<S.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let me=0;me<S.length;me++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);const De=i.get(S[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,De,0)}t.blitFramebuffer(0,0,k,q,0,0,k,q,J,t.NEAREST),l===!0&&(R.length=0,pt.length=0,R.push(t.COLOR_ATTACHMENT0+me),T.depthBuffer&&T.resolveDepthBuffer===!1&&(R.push(Z),pt.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,pt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,R))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let me=0;me<S.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);const De=i.get(S[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const S=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Je(T){return Math.min(r.maxSamples,T.samples)}function Me(T){const S=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function mt(T){const S=o.render.frame;f.get(T)!==S&&(f.set(T,S),T.update())}function Pe(T,S){const k=T.colorSpace,q=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Zi&&k!==Li&&(Ke.getTransfer(k)===tt?(q!==bn||J!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Ie(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=L,this.setTexture2D=W,this.setTexture2DArray=Q,this.setTexture3D=H,this.setTextureCube=ee,this.rebindTextures=be,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Me}function aE(t,e){function n(i,r=Li){let s;const o=Ke.getTransfer(r);if(i===pi)return t.UNSIGNED_BYTE;if(i===_d)return t.UNSIGNED_SHORT_4_4_4_4;if(i===vd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===r2)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===n2)return t.BYTE;if(i===i2)return t.SHORT;if(i===Ro)return t.UNSIGNED_SHORT;if(i===gd)return t.INT;if(i===Er)return t.UNSIGNED_INT;if(i===oi)return t.FLOAT;if(i===Uo)return t.HALF_FLOAT;if(i===s2)return t.ALPHA;if(i===o2)return t.RGB;if(i===bn)return t.RGBA;if(i===a2)return t.LUMINANCE;if(i===l2)return t.LUMINANCE_ALPHA;if(i===ps)return t.DEPTH_COMPONENT;if(i===Ts)return t.DEPTH_STENCIL;if(i===c2)return t.RED;if(i===xd)return t.RED_INTEGER;if(i===u2)return t.RG;if(i===Sd)return t.RG_INTEGER;if(i===yd)return t.RGBA_INTEGER;if(i===za||i===Ha||i===Va||i===Ga)if(o===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===za)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===za)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ha)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Va)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ga)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ju||i===Yu||i===qu||i===Ku)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ju)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ku)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zu||i===Qu||i===Ju)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Zu||i===Qu)return o===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ju)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===$u||i===ef||i===tf||i===nf||i===rf||i===sf||i===of||i===af||i===lf||i===cf||i===uf||i===ff||i===df||i===hf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===$u)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ef)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===of)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===af)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ff)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===df)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wa||i===pf||i===mf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Wa)return o===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===f2||i===gf||i===_f||i===vf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Wa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===gf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_f)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ws?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class lE extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ta extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cE={type:"move"};class Xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ta,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ta,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ta,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ta;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const uE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new $t,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ji({vertexShader:uE,fragmentShader:fE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Vn(new zl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hE extends Is{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,p=null,v=null;const x=new dE,m=n.getContextAttributes();let u=null,_=null;const g=[],M=[],P=new Ge;let C=null;const w=new gn;w.layers.enable(1),w.viewport=new yt;const b=new gn;b.layers.enable(2),b.viewport=new yt;const A=[w,b],y=new lE;y.layers.enable(1),y.layers.enable(2);let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let te=g[V];return te===void 0&&(te=new Xc,g[V]=te),te.getTargetRaySpace()},this.getControllerGrip=function(V){let te=g[V];return te===void 0&&(te=new Xc,g[V]=te),te.getGripSpace()},this.getHand=function(V){let te=g[V];return te===void 0&&(te=new Xc,g[V]=te),te.getHandSpace()};function z(V){const te=M.indexOf(V.inputSource);if(te===-1)return;const de=g[te];de!==void 0&&(de.update(V.inputSource,V.frame,c||o),de.dispatchEvent({type:V.type,data:V.inputSource}))}function W(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Q);for(let V=0;V<g.length;V++){const te=M[V];te!==null&&(M[V]=null,g[V].disconnect(te))}L=null,G=null,x.reset(),e.setRenderTarget(u),p=null,d=null,h=null,r=null,_=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Ar(p.framebufferWidth,p.framebufferHeight,{format:bn,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,de=null,ue=null;m.depth&&(ue=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=m.stencil?Ts:ps,de=m.stencil?ws:Er);const we={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(we),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Ar(d.textureWidth,d.textureHeight,{format:bn,type:pi,depthTexture:new T2(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Q(V){for(let te=0;te<V.removed.length;te++){const de=V.removed[te],ue=M.indexOf(de);ue>=0&&(M[ue]=null,g[ue].disconnect(de))}for(let te=0;te<V.added.length;te++){const de=V.added[te];let ue=M.indexOf(de);if(ue===-1){for(let be=0;be<g.length;be++)if(be>=M.length){M.push(de),ue=be;break}else if(M[be]===null){M[be]=de,ue=be;break}if(ue===-1)break}const we=g[ue];we&&we.connect(de)}}const H=new B,ee=new B;function I(V,te,de){H.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(de.matrixWorld);const ue=H.distanceTo(ee),we=te.projectionMatrix.elements,be=de.projectionMatrix.elements,Be=we[14]/(we[10]-1),lt=we[14]/(we[10]+1),R=(we[9]+1)/we[5],pt=(we[9]-1)/we[5],Ze=(we[8]-1)/we[0],Je=(be[8]+1)/be[0],Me=Be*Ze,mt=Be*Je,Pe=ue/(-Ze+Je),Ie=Pe*-Ze;if(te.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ie),V.translateZ(Pe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),we[10]===-1)V.projectionMatrix.copy(te.projectionMatrix),V.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const T=Be+Pe,S=lt+Pe,k=Me-Ie,q=mt+(ue-Ie),J=R*lt/S*T,Z=pt*lt/S*T;V.projectionMatrix.makePerspective(k,q,J,Z,T,S),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function j(V,te){te===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(te.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let te=V.near,de=V.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(de=x.depthFar)),y.near=b.near=w.near=te,y.far=b.far=w.far=de,(L!==y.near||G!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,G=y.far);const ue=V.parent,we=y.cameras;j(y,ue);for(let be=0;be<we.length;be++)j(we[be],ue);we.length===2?I(y,w,b):y.projectionMatrix.copy(w.projectionMatrix),K(V,y,ue)};function K(V,te,de){de===null?V.matrix.copy(te.matrixWorld):(V.matrix.copy(de.matrixWorld),V.matrix.invert(),V.matrix.multiply(te.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(te.projectionMatrix),V.projectionMatrixInverse.copy(te.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=xf*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let oe=null;function ye(V,te){if(f=te.getViewerPose(c||o),v=te,f!==null){const de=f.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ue=!1;de.length!==y.cameras.length&&(y.cameras.length=0,ue=!0);for(let be=0;be<de.length;be++){const Be=de[be];let lt=null;if(p!==null)lt=p.getViewport(Be);else{const pt=h.getViewSubImage(d,Be);lt=pt.viewport,be===0&&(e.setRenderTargetTextures(_,pt.colorTexture,d.ignoreDepthValues?void 0:pt.depthStencilTexture),e.setRenderTarget(_))}let R=A[be];R===void 0&&(R=new gn,R.layers.enable(be),R.viewport=new yt,A[be]=R),R.matrix.fromArray(Be.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Be.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(lt.x,lt.y,lt.width,lt.height),be===0&&(y.matrix.copy(R.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ue===!0&&y.cameras.push(R)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")){const be=h.getDepthInformation(de[0]);be&&be.isValid&&be.texture&&x.init(e,be,r.renderState)}}for(let de=0;de<g.length;de++){const ue=M[de],we=g[de];ue!==null&&we!==void 0&&we.update(ue,te,c||o)}oe&&oe(V,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),v=null}const ze=new C2;ze.setAnimationLoop(ye),this.setAnimationLoop=function(V){oe=V},this.dispose=function(){}}}const rr=new Yn,pE=new ht;function mE(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,M2(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,_,g,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),v(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,_,g):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Jt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Jt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const _=e.get(u),g=_.envMap,M=_.envMapRotation;g&&(m.envMap.value=g,rr.copy(M),rr.x*=-1,rr.y*=-1,rr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),m.envMapRotation.value.setFromMatrix4(pE.makeRotationFromEuler(rr)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,g){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=g*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Jt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const _=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gE(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const M=g.program;i.uniformBlockBinding(_,M)}function c(_,g){let M=r[_.id];M===void 0&&(v(_),M=f(_),r[_.id]=M,_.addEventListener("dispose",m));const P=g.program;i.updateUBOMapping(_,P);const C=e.render.frame;s[_.id]!==C&&(d(_),s[_.id]=C)}function f(_){const g=h();_.__bindingPointIndex=g;const M=t.createBuffer(),P=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const g=r[_.id],M=_.uniforms,P=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,w=M.length;C<w;C++){const b=Array.isArray(M[C])?M[C]:[M[C]];for(let A=0,y=b.length;A<y;A++){const L=b[A];if(p(L,C,A,P)===!0){const G=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let Q=0;Q<z.length;Q++){const H=z[Q],ee=x(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,G+W,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,W),W+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,M,P){const C=_.value,w=g+"_"+M;if(P[w]===void 0)return typeof C=="number"||typeof C=="boolean"?P[w]=C:P[w]=C.clone(),!0;{const b=P[w];if(typeof C=="number"||typeof C=="boolean"){if(b!==C)return P[w]=C,!0}else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function v(_){const g=_.uniforms;let M=0;const P=16;for(let w=0,b=g.length;w<b;w++){const A=Array.isArray(g[w])?g[w]:[g[w]];for(let y=0,L=A.length;y<L;y++){const G=A[y],z=Array.isArray(G.value)?G.value:[G.value];for(let W=0,Q=z.length;W<Q;W++){const H=z[W],ee=x(H),I=M%P,j=I%ee.boundary,K=I+j;M+=j,K!==0&&P-K<ee.storage&&(M+=P-K),G.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=ee.storage}}}const C=M%P;return C>0&&(M+=P-C),_.__size=M,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const M=o.indexOf(g.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class _E{constructor(e={}){const{canvas:n=ox(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bn,this.toneMapping=Vi,this.toneMappingExposure=1;const g=this;let M=!1,P=0,C=0,w=null,b=-1,A=null;const y=new yt,L=new yt;let G=null;const z=new We(0);let W=0,Q=n.width,H=n.height,ee=1,I=null,j=null;const K=new yt(0,0,Q,H),oe=new yt(0,0,Q,H);let ye=!1;const ze=new Ad;let V=!1,te=!1;const de=new ht,ue=new B,we=new yt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function lt(){return w===null?ee:1}let R=i;function pt(E,U){return n.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${md}`),n.addEventListener("webglcontextlost",X,!1),n.addEventListener("webglcontextrestored",Y,!1),n.addEventListener("webglcontextcreationerror",ae,!1),R===null){const U="webgl2";if(R=pt(U,E),R===null)throw pt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ze,Je,Me,mt,Pe,Ie,T,S,k,q,J,Z,Ee,ce,me,De,ne,pe,ke,Re,ge,Le,Fe,rt;function D(){Ze=new Ey(R),Ze.init(),Le=new aE(R,Ze),Je=new _y(R,Ze,e,Le),Me=new rE(R),mt=new wy(R),Pe=new WM,Ie=new oE(R,Ze,Me,Pe,Je,Le,mt),T=new xy(g),S=new My(g),k=new Dx(R),Fe=new my(R,k),q=new Ay(R,k,mt,Fe),J=new Ry(R,q,k,mt),ke=new Ty(R,Je,Ie),De=new vy(Pe),Z=new GM(g,T,S,Ze,Je,Fe,De),Ee=new mE(g,Pe),ce=new jM,me=new JM(Ze),pe=new py(g,T,S,Me,J,d,l),ne=new iE(g,J,Je),rt=new gE(R,mt,Je,Me),Re=new gy(R,Ze,mt),ge=new Cy(R,Ze,mt),mt.programs=Z.programs,g.capabilities=Je,g.extensions=Ze,g.properties=Pe,g.renderLists=ce,g.shadowMap=ne,g.state=Me,g.info=mt}D();const ie=new hE(g,R);this.xr=ie,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=Ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(E){E!==void 0&&(ee=E,this.setSize(Q,H,!1))},this.getSize=function(E){return E.set(Q,H)},this.setSize=function(E,U,F=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=E,H=U,n.width=Math.floor(E*ee),n.height=Math.floor(U*ee),F===!0&&(n.style.width=E+"px",n.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(Q*ee,H*ee).floor()},this.setDrawingBufferSize=function(E,U,F){Q=E,H=U,ee=F,n.width=Math.floor(E*F),n.height=Math.floor(U*F),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,U,F,O){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,U,F,O),Me.viewport(y.copy(K).multiplyScalar(ee).round())},this.getScissor=function(E){return E.copy(oe)},this.setScissor=function(E,U,F,O){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,U,F,O),Me.scissor(L.copy(oe).multiplyScalar(ee).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(E){Me.setScissorTest(ye=E)},this.setOpaqueSort=function(E){I=E},this.setTransparentSort=function(E){j=E},this.getClearColor=function(E){return E.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(E=!0,U=!0,F=!0){let O=0;if(E){let N=!1;if(w!==null){const re=w.texture.format;N=re===yd||re===Sd||re===xd}if(N){const re=w.texture.type,fe=re===pi||re===Er||re===Ro||re===ws||re===_d||re===vd,_e=pe.getClearColor(),ve=pe.getClearAlpha(),Ce=_e.r,Te=_e.g,xe=_e.b;fe?(p[0]=Ce,p[1]=Te,p[2]=xe,p[3]=ve,R.clearBufferuiv(R.COLOR,0,p)):(v[0]=Ce,v[1]=Te,v[2]=xe,v[3]=ve,R.clearBufferiv(R.COLOR,0,v))}else O|=R.COLOR_BUFFER_BIT}U&&(O|=R.DEPTH_BUFFER_BIT),F&&(O|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",X,!1),n.removeEventListener("webglcontextrestored",Y,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),ce.dispose(),me.dispose(),Pe.dispose(),T.dispose(),S.dispose(),J.dispose(),Fe.dispose(),rt.dispose(),Z.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Nn),ie.removeEventListener("sessionend",Td),Ji.stop()};function X(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=mt.autoReset,U=ne.enabled,F=ne.autoUpdate,O=ne.needsUpdate,N=ne.type;D(),mt.autoReset=E,ne.enabled=U,ne.autoUpdate=F,ne.needsUpdate=O,ne.type=N}function ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ae(E){const U=E.target;U.removeEventListener("dispose",Ae),He(U)}function He(E){gt(E),Pe.remove(E)}function gt(E){const U=Pe.get(E).programs;U!==void 0&&(U.forEach(function(F){Z.releaseProgram(F)}),E.isShaderMaterial&&Z.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,F,O,N,re){U===null&&(U=be);const fe=N.isMesh&&N.matrixWorld.determinant()<0,_e=I2(E,U,F,O,N);Me.setMaterial(O,fe);let ve=F.index,Ce=1;if(O.wireframe===!0){if(ve=q.getWireframeAttribute(F),ve===void 0)return;Ce=2}const Te=F.drawRange,xe=F.attributes.position;let je=Te.start*Ce,ct=(Te.start+Te.count)*Ce;re!==null&&(je=Math.max(je,re.start*Ce),ct=Math.min(ct,(re.start+re.count)*Ce)),ve!==null?(je=Math.max(je,0),ct=Math.min(ct,ve.count)):xe!=null&&(je=Math.max(je,0),ct=Math.min(ct,xe.count));const ut=ct-je;if(ut<0||ut===1/0)return;Fe.setup(N,O,_e,F,ve);let en,Ye=Re;if(ve!==null&&(en=k.get(ve),Ye=ge,Ye.setIndex(en)),N.isMesh)O.wireframe===!0?(Me.setLineWidth(O.wireframeLinewidth*lt()),Ye.setMode(R.LINES)):Ye.setMode(R.TRIANGLES);else if(N.isLine){let Se=O.linewidth;Se===void 0&&(Se=1),Me.setLineWidth(Se*lt()),N.isLineSegments?Ye.setMode(R.LINES):N.isLineLoop?Ye.setMode(R.LINE_LOOP):Ye.setMode(R.LINE_STRIP)}else N.isPoints?Ye.setMode(R.POINTS):N.isSprite&&Ye.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ye.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))Ye.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Se=N._multiDrawStarts,Pt=N._multiDrawCounts,qe=N._multiDrawCount,Mn=ve?k.get(ve).bytesPerElement:1,Tr=Pe.get(O).currentProgram.getUniforms();for(let tn=0;tn<qe;tn++)Tr.setValue(R,"_gl_DrawID",tn),Ye.render(Se[tn]/Mn,Pt[tn])}else if(N.isInstancedMesh)Ye.renderInstances(je,ut,N.count);else if(F.isInstancedBufferGeometry){const Se=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Pt=Math.min(F.instanceCount,Se);Ye.renderInstances(je,ut,Pt)}else Ye.render(je,ut)};function Rt(E,U,F){E.transparent===!0&&E.side===ii&&E.forceSinglePass===!1?(E.side=Jt,E.needsUpdate=!0,Ho(E,U,F),E.side=Xi,E.needsUpdate=!0,Ho(E,U,F),E.side=ii):Ho(E,U,F)}this.compile=function(E,U,F=null){F===null&&(F=E),m=me.get(F),m.init(U),_.push(m),F.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),E!==F&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const O=new Set;return E.traverse(function(N){const re=N.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const _e=re[fe];Rt(_e,F,N),O.add(_e)}else Rt(re,F,N),O.add(re)}),_.pop(),m=null,O},this.compileAsync=function(E,U,F=null){const O=this.compile(E,U,F);return new Promise(N=>{function re(){if(O.forEach(function(fe){Pe.get(fe).currentProgram.isReady()&&O.delete(fe)}),O.size===0){N(E);return}setTimeout(re,10)}Ze.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Xe=null;function qn(E){Xe&&Xe(E)}function Nn(){Ji.stop()}function Td(){Ji.start()}const Ji=new C2;Ji.setAnimationLoop(qn),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(E){Xe=E,ie.setAnimationLoop(E),E===null?Ji.stop():Ji.start()},ie.addEventListener("sessionstart",Nn),ie.addEventListener("sessionend",Td),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(U),U=ie.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,U,w),m=me.get(E,_.length),m.init(U),_.push(m),de.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ze.setFromProjectionMatrix(de),te=this.localClippingEnabled,V=De.init(this.clippingPlanes,te),x=ce.get(E,u.length),x.init(),u.push(x),ie.enabled===!0&&ie.isPresenting===!0){const re=g.xr.getDepthSensingMesh();re!==null&&Vl(re,U,-1/0,g.sortObjects)}Vl(E,U,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(I,j),Be=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Be&&pe.addToRenderList(x,E),this.info.render.frame++,V===!0&&De.beginShadows();const F=m.state.shadowsArray;ne.render(F,E,U),V===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=x.opaque,N=x.transmissive;if(m.setupLights(),U.isArrayCamera){const re=U.cameras;if(N.length>0)for(let fe=0,_e=re.length;fe<_e;fe++){const ve=re[fe];Pd(O,N,E,ve)}Be&&pe.render(E);for(let fe=0,_e=re.length;fe<_e;fe++){const ve=re[fe];Rd(x,E,ve,ve.viewport)}}else N.length>0&&Pd(O,N,E,U),Be&&pe.render(E),Rd(x,E,U);w!==null&&(Ie.updateMultisampleRenderTarget(w),Ie.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(g,E,U),Fe.resetDefaultState(),b=-1,A=null,_.pop(),_.length>0?(m=_[_.length-1],V===!0&&De.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function Vl(E,U,F,O){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)F=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ze.intersectsSprite(E)){O&&we.setFromMatrixPosition(E.matrixWorld).applyMatrix4(de);const fe=J.update(E),_e=E.material;_e.visible&&x.push(E,fe,_e,F,we.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ze.intersectsObject(E))){const fe=J.update(E),_e=E.material;if(O&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),we.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),we.copy(fe.boundingSphere.center)),we.applyMatrix4(E.matrixWorld).applyMatrix4(de)),Array.isArray(_e)){const ve=fe.groups;for(let Ce=0,Te=ve.length;Ce<Te;Ce++){const xe=ve[Ce],je=_e[xe.materialIndex];je&&je.visible&&x.push(E,fe,je,F,we.z,xe)}}else _e.visible&&x.push(E,fe,_e,F,we.z,null)}}const re=E.children;for(let fe=0,_e=re.length;fe<_e;fe++)Vl(re[fe],U,F,O)}function Rd(E,U,F,O){const N=E.opaque,re=E.transmissive,fe=E.transparent;m.setupLightsView(F),V===!0&&De.setGlobalState(g.clippingPlanes,F),O&&Me.viewport(y.copy(O)),N.length>0&&zo(N,U,F),re.length>0&&zo(re,U,F),fe.length>0&&zo(fe,U,F),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Pd(E,U,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[O.id]===void 0&&(m.state.transmissionRenderTarget[O.id]=new Ar(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?Uo:pi,minFilter:mr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const re=m.state.transmissionRenderTarget[O.id],fe=O.viewport||y;re.setSize(fe.z,fe.w);const _e=g.getRenderTarget();g.setRenderTarget(re),g.getClearColor(z),W=g.getClearAlpha(),W<1&&g.setClearColor(16777215,.5),g.clear(),Be&&pe.render(F);const ve=g.toneMapping;g.toneMapping=Vi;const Ce=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),m.setupLightsView(O),V===!0&&De.setGlobalState(g.clippingPlanes,O),zo(E,F,O),Ie.updateMultisampleRenderTarget(re),Ie.updateRenderTargetMipmap(re),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let xe=0,je=U.length;xe<je;xe++){const ct=U[xe],ut=ct.object,en=ct.geometry,Ye=ct.material,Se=ct.group;if(Ye.side===ii&&ut.layers.test(O.layers)){const Pt=Ye.side;Ye.side=Jt,Ye.needsUpdate=!0,Ld(ut,F,O,en,Ye,Se),Ye.side=Pt,Ye.needsUpdate=!0,Te=!0}}Te===!0&&(Ie.updateMultisampleRenderTarget(re),Ie.updateRenderTargetMipmap(re))}g.setRenderTarget(_e),g.setClearColor(z,W),Ce!==void 0&&(O.viewport=Ce),g.toneMapping=ve}function zo(E,U,F){const O=U.isScene===!0?U.overrideMaterial:null;for(let N=0,re=E.length;N<re;N++){const fe=E[N],_e=fe.object,ve=fe.geometry,Ce=O===null?fe.material:O,Te=fe.group;_e.layers.test(F.layers)&&Ld(_e,U,F,ve,Ce,Te)}}function Ld(E,U,F,O,N,re){E.onBeforeRender(g,U,F,O,N,re),E.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(g,U,F,O,E,re),N.transparent===!0&&N.side===ii&&N.forceSinglePass===!1?(N.side=Jt,N.needsUpdate=!0,g.renderBufferDirect(F,U,O,N,E,re),N.side=Xi,N.needsUpdate=!0,g.renderBufferDirect(F,U,O,N,E,re),N.side=ii):g.renderBufferDirect(F,U,O,N,E,re),E.onAfterRender(g,U,F,O,N,re)}function Ho(E,U,F){U.isScene!==!0&&(U=be);const O=Pe.get(E),N=m.state.lights,re=m.state.shadowsArray,fe=N.state.version,_e=Z.getParameters(E,N.state,re,U,F),ve=Z.getProgramCacheKey(_e);let Ce=O.programs;O.environment=E.isMeshStandardMaterial?U.environment:null,O.fog=U.fog,O.envMap=(E.isMeshStandardMaterial?S:T).get(E.envMap||O.environment),O.envMapRotation=O.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ce===void 0&&(E.addEventListener("dispose",Ae),Ce=new Map,O.programs=Ce);let Te=Ce.get(ve);if(Te!==void 0){if(O.currentProgram===Te&&O.lightsStateVersion===fe)return Id(E,_e),Te}else _e.uniforms=Z.getUniforms(E),E.onBeforeCompile(_e,g),Te=Z.acquireProgram(_e,ve),Ce.set(ve,Te),O.uniforms=_e.uniforms;const xe=O.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(xe.clippingPlanes=De.uniform),Id(E,_e),O.needsLights=U2(E),O.lightsStateVersion=fe,O.needsLights&&(xe.ambientLightColor.value=N.state.ambient,xe.lightProbe.value=N.state.probe,xe.directionalLights.value=N.state.directional,xe.directionalLightShadows.value=N.state.directionalShadow,xe.spotLights.value=N.state.spot,xe.spotLightShadows.value=N.state.spotShadow,xe.rectAreaLights.value=N.state.rectArea,xe.ltc_1.value=N.state.rectAreaLTC1,xe.ltc_2.value=N.state.rectAreaLTC2,xe.pointLights.value=N.state.point,xe.pointLightShadows.value=N.state.pointShadow,xe.hemisphereLights.value=N.state.hemi,xe.directionalShadowMap.value=N.state.directionalShadowMap,xe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,xe.spotShadowMap.value=N.state.spotShadowMap,xe.spotLightMatrix.value=N.state.spotLightMatrix,xe.spotLightMap.value=N.state.spotLightMap,xe.pointShadowMap.value=N.state.pointShadowMap,xe.pointShadowMatrix.value=N.state.pointShadowMatrix),O.currentProgram=Te,O.uniformsList=null,Te}function bd(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Xa.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Id(E,U){const F=Pe.get(E);F.outputColorSpace=U.outputColorSpace,F.batching=U.batching,F.batchingColor=U.batchingColor,F.instancing=U.instancing,F.instancingColor=U.instancingColor,F.instancingMorph=U.instancingMorph,F.skinning=U.skinning,F.morphTargets=U.morphTargets,F.morphNormals=U.morphNormals,F.morphColors=U.morphColors,F.morphTargetsCount=U.morphTargetsCount,F.numClippingPlanes=U.numClippingPlanes,F.numIntersection=U.numClipIntersection,F.vertexAlphas=U.vertexAlphas,F.vertexTangents=U.vertexTangents,F.toneMapping=U.toneMapping}function I2(E,U,F,O,N){U.isScene!==!0&&(U=be),Ie.resetTextureUnits();const re=U.fog,fe=O.isMeshStandardMaterial?U.environment:null,_e=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Zi,ve=(O.isMeshStandardMaterial?S:T).get(O.envMap||fe),Ce=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Te=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),xe=!!F.morphAttributes.position,je=!!F.morphAttributes.normal,ct=!!F.morphAttributes.color;let ut=Vi;O.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ut=g.toneMapping);const en=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ye=en!==void 0?en.length:0,Se=Pe.get(O),Pt=m.state.lights;if(V===!0&&(te===!0||E!==A)){const dn=E===A&&O.id===b;De.setState(O,E,dn)}let qe=!1;O.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Pt.state.version||Se.outputColorSpace!==_e||N.isBatchedMesh&&Se.batching===!1||!N.isBatchedMesh&&Se.batching===!0||N.isBatchedMesh&&Se.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Se.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Se.instancing===!1||!N.isInstancedMesh&&Se.instancing===!0||N.isSkinnedMesh&&Se.skinning===!1||!N.isSkinnedMesh&&Se.skinning===!0||N.isInstancedMesh&&Se.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Se.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Se.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Se.instancingMorph===!1&&N.morphTexture!==null||Se.envMap!==ve||O.fog===!0&&Se.fog!==re||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==De.numPlanes||Se.numIntersection!==De.numIntersection)||Se.vertexAlphas!==Ce||Se.vertexTangents!==Te||Se.morphTargets!==xe||Se.morphNormals!==je||Se.morphColors!==ct||Se.toneMapping!==ut||Se.morphTargetsCount!==Ye)&&(qe=!0):(qe=!0,Se.__version=O.version);let Mn=Se.currentProgram;qe===!0&&(Mn=Ho(O,U,N));let Tr=!1,tn=!1,Gl=!1;const _t=Mn.getUniforms(),gi=Se.uniforms;if(Me.useProgram(Mn.program)&&(Tr=!0,tn=!0,Gl=!0),O.id!==b&&(b=O.id,tn=!0),Tr||A!==E){_t.setValue(R,"projectionMatrix",E.projectionMatrix),_t.setValue(R,"viewMatrix",E.matrixWorldInverse);const dn=_t.map.cameraPosition;dn!==void 0&&dn.setValue(R,ue.setFromMatrixPosition(E.matrixWorld)),Je.logarithmicDepthBuffer&&_t.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&_t.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),A!==E&&(A=E,tn=!0,Gl=!0)}if(N.isSkinnedMesh){_t.setOptional(R,N,"bindMatrix"),_t.setOptional(R,N,"bindMatrixInverse");const dn=N.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),_t.setValue(R,"boneTexture",dn.boneTexture,Ie))}N.isBatchedMesh&&(_t.setOptional(R,N,"batchingTexture"),_t.setValue(R,"batchingTexture",N._matricesTexture,Ie),_t.setOptional(R,N,"batchingIdTexture"),_t.setValue(R,"batchingIdTexture",N._indirectTexture,Ie),_t.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&_t.setValue(R,"batchingColorTexture",N._colorsTexture,Ie));const Wl=F.morphAttributes;if((Wl.position!==void 0||Wl.normal!==void 0||Wl.color!==void 0)&&ke.update(N,F,Mn),(tn||Se.receiveShadow!==N.receiveShadow)&&(Se.receiveShadow=N.receiveShadow,_t.setValue(R,"receiveShadow",N.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(gi.envMap.value=ve,gi.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&U.environment!==null&&(gi.envMapIntensity.value=U.environmentIntensity),tn&&(_t.setValue(R,"toneMappingExposure",g.toneMappingExposure),Se.needsLights&&D2(gi,Gl),re&&O.fog===!0&&Ee.refreshFogUniforms(gi,re),Ee.refreshMaterialUniforms(gi,O,ee,H,m.state.transmissionRenderTarget[E.id]),Xa.upload(R,bd(Se),gi,Ie)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Xa.upload(R,bd(Se),gi,Ie),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&_t.setValue(R,"center",N.center),_t.setValue(R,"modelViewMatrix",N.modelViewMatrix),_t.setValue(R,"normalMatrix",N.normalMatrix),_t.setValue(R,"modelMatrix",N.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const dn=O.uniformsGroups;for(let Xl=0,N2=dn.length;Xl<N2;Xl++){const Dd=dn[Xl];rt.update(Dd,Mn),rt.bind(Dd,Mn)}}return Mn}function D2(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function U2(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,U,F){Pe.get(E.texture).__webglTexture=U,Pe.get(E.depthTexture).__webglTexture=F;const O=Pe.get(E);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const F=Pe.get(E);F.__webglFramebuffer=U,F.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,F=0){w=E,P=U,C=F;let O=!0,N=null,re=!1,fe=!1;if(E){const ve=Pe.get(E);if(ve.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(R.FRAMEBUFFER,null),O=!1;else if(ve.__webglFramebuffer===void 0)Ie.setupRenderTarget(E);else if(ve.__hasExternalTextures)Ie.rebindTextures(E,Pe.get(E.texture).__webglTexture,Pe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const xe=E.depthTexture;if(ve.__boundDepthTexture!==xe){if(xe!==null&&Pe.has(xe)&&(E.width!==xe.image.width||E.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(E)}}const Ce=E.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(fe=!0);const Te=Pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Te[U])?N=Te[U][F]:N=Te[U],re=!0):E.samples>0&&Ie.useMultisampledRTT(E)===!1?N=Pe.get(E).__webglMultisampledFramebuffer:Array.isArray(Te)?N=Te[F]:N=Te,y.copy(E.viewport),L.copy(E.scissor),G=E.scissorTest}else y.copy(K).multiplyScalar(ee).floor(),L.copy(oe).multiplyScalar(ee).floor(),G=ye;if(Me.bindFramebuffer(R.FRAMEBUFFER,N)&&O&&Me.drawBuffers(E,N),Me.viewport(y),Me.scissor(L),Me.setScissorTest(G),re){const ve=Pe.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve.__webglTexture,F)}else if(fe){const ve=Pe.get(E.texture),Ce=U||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,ve.__webglTexture,F||0,Ce)}b=-1},this.readRenderTargetPixels=function(E,U,F,O,N,re,fe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){Me.bindFramebuffer(R.FRAMEBUFFER,_e);try{const ve=E.texture,Ce=ve.format,Te=ve.type;if(!Je.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-O&&F>=0&&F<=E.height-N&&R.readPixels(U,F,O,N,Le.convert(Ce),Le.convert(Te),re)}finally{const ve=w!==null?Pe.get(w).__webglFramebuffer:null;Me.bindFramebuffer(R.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(E,U,F,O,N,re,fe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){Me.bindFramebuffer(R.FRAMEBUFFER,_e);try{const ve=E.texture,Ce=ve.format,Te=ve.type;if(!Je.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-O&&F>=0&&F<=E.height-N){const xe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,xe),R.bufferData(R.PIXEL_PACK_BUFFER,re.byteLength,R.STREAM_READ),R.readPixels(U,F,O,N,Le.convert(Ce),Le.convert(Te),0),R.flush();const je=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);await ax(R,je,4);try{R.bindBuffer(R.PIXEL_PACK_BUFFER,xe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,re)}finally{R.deleteBuffer(xe),R.deleteSync(je)}return re}}finally{const ve=w!==null?Pe.get(w).__webglFramebuffer:null;Me.bindFramebuffer(R.FRAMEBUFFER,ve)}}},this.copyFramebufferToTexture=function(E,U=null,F=0){E.isTexture!==!0&&(co("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const O=Math.pow(2,-F),N=Math.floor(E.image.width*O),re=Math.floor(E.image.height*O),fe=U!==null?U.x:0,_e=U!==null?U.y:0;Ie.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,F,0,0,fe,_e,N,re),Me.unbindTexture()},this.copyTextureToTexture=function(E,U,F=null,O=null,N=0){E.isTexture!==!0&&(co("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1],U=arguments[2],N=arguments[3]||0,F=null);let re,fe,_e,ve,Ce,Te;F!==null?(re=F.max.x-F.min.x,fe=F.max.y-F.min.y,_e=F.min.x,ve=F.min.y):(re=E.image.width,fe=E.image.height,_e=0,ve=0),O!==null?(Ce=O.x,Te=O.y):(Ce=0,Te=0);const xe=Le.convert(U.format),je=Le.convert(U.type);Ie.setTexture2D(U,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const ct=R.getParameter(R.UNPACK_ROW_LENGTH),ut=R.getParameter(R.UNPACK_IMAGE_HEIGHT),en=R.getParameter(R.UNPACK_SKIP_PIXELS),Ye=R.getParameter(R.UNPACK_SKIP_ROWS),Se=R.getParameter(R.UNPACK_SKIP_IMAGES),Pt=E.isCompressedTexture?E.mipmaps[N]:E.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Pt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Pt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,_e),R.pixelStorei(R.UNPACK_SKIP_ROWS,ve),E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,N,Ce,Te,re,fe,xe,je,Pt.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,N,Ce,Te,Pt.width,Pt.height,xe,Pt.data):R.texSubImage2D(R.TEXTURE_2D,N,Ce,Te,re,fe,xe,je,Pt),R.pixelStorei(R.UNPACK_ROW_LENGTH,ct),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ut),R.pixelStorei(R.UNPACK_SKIP_PIXELS,en),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ye),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Se),N===0&&U.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(E,U,F=null,O=null,N=0){E.isTexture!==!0&&(co("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0);let re,fe,_e,ve,Ce,Te,xe,je,ct;const ut=E.isCompressedTexture?E.mipmaps[N]:E.image;F!==null?(re=F.max.x-F.min.x,fe=F.max.y-F.min.y,_e=F.max.z-F.min.z,ve=F.min.x,Ce=F.min.y,Te=F.min.z):(re=ut.width,fe=ut.height,_e=ut.depth,ve=0,Ce=0,Te=0),O!==null?(xe=O.x,je=O.y,ct=O.z):(xe=0,je=0,ct=0);const en=Le.convert(U.format),Ye=Le.convert(U.type);let Se;if(U.isData3DTexture)Ie.setTexture3D(U,0),Se=R.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Ie.setTexture2DArray(U,0),Se=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const Pt=R.getParameter(R.UNPACK_ROW_LENGTH),qe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Mn=R.getParameter(R.UNPACK_SKIP_PIXELS),Tr=R.getParameter(R.UNPACK_SKIP_ROWS),tn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ut.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ut.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ve),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ce),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Te),E.isDataTexture||E.isData3DTexture?R.texSubImage3D(Se,N,xe,je,ct,re,fe,_e,en,Ye,ut.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(Se,N,xe,je,ct,re,fe,_e,en,ut.data):R.texSubImage3D(Se,N,xe,je,ct,re,fe,_e,en,Ye,ut),R.pixelStorei(R.UNPACK_ROW_LENGTH,Pt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,qe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Mn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Tr),R.pixelStorei(R.UNPACK_SKIP_IMAGES,tn),N===0&&U.generateMipmaps&&R.generateMipmap(Se),Me.unbindTexture()},this.initRenderTarget=function(E){Pe.get(E).__webglFramebuffer===void 0&&Ie.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ie.setTextureCube(E,0):E.isData3DTexture?Ie.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ie.setTexture2DArray(E,0):Ie.setTexture2D(E,0),Me.unbindTexture()},this.resetState=function(){P=0,C=0,w=null,Me.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Md?"display-p3":"srgb",n.unpackColorSpace=Ke.workingColorSpace===kl?"display-p3":"srgb"}}class vE extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class wd extends Qi{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],h=new B,d=new B,p=[],v=[],x=[],m=[];for(let u=0;u<=i;u++){const _=[],g=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let P=0;P<=n;P++){const C=P/n;h.x=-e*Math.cos(r+C*s)*Math.sin(o+g*a),h.y=e*Math.cos(o+g*a),h.z=e*Math.sin(r+C*s)*Math.sin(o+g*a),v.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(C+M,1-g),_.push(c++)}f.push(_)}for(let u=0;u<i;u++)for(let _=0;_<n;_++){const g=f[u][_+1],M=f[u][_],P=f[u+1][_],C=f[u+1][_+1];(u!==0||o>0)&&p.push(g,M,C),(u!==i-1||l<Math.PI)&&p.push(M,P,C)}this.setIndex(p),this.setAttribute("position",new jn(v,3)),this.setAttribute("normal",new jn(x,3)),this.setAttribute("uv",new jn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xE extends Bo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=d2,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class SE extends Bt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const jc=new ht,kp=new B,zp=new B;class yE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ad,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;kp.setFromMatrixPosition(e.matrixWorld),n.position.copy(kp),zp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(zp),n.updateMatrixWorld(),jc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ME extends yE{constructor(){super(new w2(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class EE extends SE{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new ME}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:md}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=md);const AE="_container_1c2ns_3",CE="_title_1c2ns_18",wE="_fadeIn_1c2ns_1",TE="_content_1c2ns_34",RE="_aboutItemText_1c2ns_41",qs={container:AE,title:CE,fadeIn:wE,content:TE,aboutItemText:RE},PE=()=>{const t=gs.useRef(null);return gs.useEffect(()=>{const e=new vE,n=new gn(75,1,.1,1e3),i=new _E({antialias:!0});i.setSize(300,300),t.current.appendChild(i.domElement);const r=new wd(5,32,32),s=new xE({color:30719,wireframe:!0}),o=new Vn(r,s);e.add(o);const a=new EE(16777215,1);a.position.set(5,10,5).normalize(),e.add(a),n.position.z=10;const l=function(){requestAnimationFrame(l),o.rotation.x+=.01,o.rotation.y+=.01,i.render(e,n)};return l(),()=>{t.current.removeChild(i.domElement)}},[]),se.jsxs("section",{className:qs.container,id:"about",children:[se.jsx("h2",{className:qs.title,children:"About"}),se.jsxs("div",{className:qs.content,children:[se.jsx("div",{ref:t,className:qs.animation}),se.jsxs("div",{className:qs.aboutItemText,children:[se.jsx("p",{children:"I am a motivated Computer Science undergraduate with a strong passion for Software Engineering, specializing in full-stack development."}),se.jsx("p",{children:"I work hard and am a quick learner, always striving to improve and maintain my knowledge."}),se.jsx("p",{children:"I thrive at solving complex challenges and quickly adapting to new technologies."})]})]})]})},LE="_container_eik22_4",bE="_content_eik22_19",IE="_fadeIn_eik22_1",DE="_title_eik22_28",UE="_slideIn_eik22_1",NE="_description_eik22_39",FE="_contactBtn_eik22_47",OE="_heroImg_eik22_68",BE="_floatIn_eik22_1",kE="_topBlur_eik22_87",zE="_bottomBlur_eik22_87",HE="_socialIcons_eik22_112",VE="_socialIcon_eik22_112",GE="_circleBackground_eik22_192",Ci={container:LE,content:bE,fadeIn:IE,title:DE,slideIn:UE,description:NE,contactBtn:FE,heroImg:OE,floatIn:BE,topBlur:kE,bottomBlur:zE,socialIcons:HE,socialIcon:VE,circleBackground:GE},WE=()=>se.jsxs("section",{className:Ci.container,children:[se.jsxs("div",{className:Ci.content,children:[se.jsx("h1",{className:Ci.title,children:"Sadeep Chathushan Nalindika"}),se.jsx("p",{className:Ci.description,children:"I'm currently an undergraduate Computer Science student at the University of Colombo, deeply passionate about both backend and frontend development."}),se.jsx("a",{href:"mailto:chathushan43sadeep@gmail.com.com",className:Ci.contactBtn,children:"Contact Me"})]}),se.jsx("img",{src:ci("hero/IMG_0360.jpg"),alt:"Hero image of me",className:Ci.heroImg}),se.jsx("div",{className:Ci.topBlur}),se.jsx("div",{className:Ci.bottomBlur})]}),XE="_navbar_1o0ew_7",jE="_title_1o0ew_27",YE="_menu_1o0ew_41",qE="_menuItems_1o0ew_51",KE="_menuBtn_1o0ew_77",ZE="_menuOpen_1o0ew_155",Yr={navbar:XE,title:jE,menu:YE,menuItems:qE,menuBtn:KE,menuOpen:ZE},QE=()=>{const[t,e]=gs.useState(!1);return se.jsxs("nav",{className:Yr.navbar,children:[se.jsx("a",{className:Yr.title,href:"/",children:"Portfolio"}),se.jsxs("div",{className:Yr.menu,children:[se.jsx("img",{className:Yr.menuBtn,src:ci(t?"nav/closeIcon.png":"nav/menuIcon.png"),alt:"menu-button",onClick:()=>e(!t)}),se.jsxs("ul",{className:`${Yr.menuItems} ${t&&Yr.menuOpen}`,onClick:()=>e(!1),children:[se.jsx("li",{children:se.jsx("a",{href:"#about",children:"About"})}),se.jsx("li",{children:se.jsx("a",{href:"#experience",children:"Skills"})}),se.jsx("li",{children:se.jsx("a",{href:"#projects",children:"Projects"})}),se.jsx("li",{children:se.jsx("a",{href:"#contact",children:"Contact"})})]})]})]})},JE="_container_1barz_5",$E="_title_1barz_21",eA="_fadeIn_1barz_1",tA="_educationItem_1barz_63",nA="_timeLocation_1barz_75",iA="_institutionDetails_1barz_87",rA="_logo_1barz_99",sA="_detailsText_1barz_111",oA="_divider_1barz_141",sn={container:JE,title:$E,fadeIn:eA,educationItem:tA,timeLocation:nA,institutionDetails:iA,logo:rA,detailsText:sA,divider:oA},aA=()=>se.jsxs("section",{className:sn.container,children:[se.jsx("h2",{className:sn.title,children:"Education"}),se.jsxs("div",{className:sn.educationItem,children:[se.jsxs("div",{className:sn.timeLocation,children:[se.jsx("p",{children:"2022 - Present"}),se.jsx("p",{children:"Colombo, Sri Lanka"})]}),se.jsxs("div",{className:sn.institutionDetails,children:[se.jsx("img",{src:ci("logo/UCSC.png"),alt:"University Logo",className:sn.logo})," ",se.jsxs("div",{className:sn.detailsText,children:[se.jsx("h3",{children:"University of Colombo School of Computing"}),se.jsx("p",{children:"Bachelor of Science in Computer Science"}),se.jsx("p",{children:"Current GPA: 2.3/4.00"})]})]})]}),se.jsx("div",{className:sn.divider})," ",se.jsxs("div",{className:sn.educationItem,children:[se.jsxs("div",{className:sn.timeLocation,children:[se.jsx("p",{children:"2010 - 2019"}),se.jsx("p",{children:"Matara, Sri Lanka"})]}),se.jsxs("div",{className:sn.institutionDetails,children:[se.jsx("img",{src:ci("logo/SSC.png"),alt:"School Logo",className:sn.logo})," ",se.jsxs("div",{className:sn.detailsText,children:[se.jsx("h3",{children:"St.Servatius College, Matara"}),se.jsx("p",{children:"G.C.E. Advanced Level"}),se.jsx("p",{children:"Combined Maths: A, Chemistry: C, Physics: S"})]})]})]})]});function lA(){return se.jsxs("div",{className:d_.App,children:[se.jsx(QE,{}),se.jsx(WE,{}),se.jsx(PE,{}),se.jsx(uv,{}),se.jsx(aA,{}),se.jsx($_,{})]})}Yc.createRoot(document.getElementById("root")).render(se.jsx(J2.StrictMode,{children:se.jsx(lA,{})}));
