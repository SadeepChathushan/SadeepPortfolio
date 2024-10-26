(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function W2(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Yp={exports:{}},wl={},qp={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bo=Symbol.for("react.element"),X2=Symbol.for("react.portal"),j2=Symbol.for("react.fragment"),Y2=Symbol.for("react.strict_mode"),q2=Symbol.for("react.profiler"),K2=Symbol.for("react.provider"),Z2=Symbol.for("react.context"),$2=Symbol.for("react.forward_ref"),Q2=Symbol.for("react.suspense"),J2=Symbol.for("react.memo"),e1=Symbol.for("react.lazy"),kd=Symbol.iterator;function t1(t){return t===null||typeof t!="object"?null:(t=kd&&t[kd]||t["@@iterator"],typeof t=="function"?t:null)}var Kp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zp=Object.assign,$p={};function bs(t,e,n){this.props=t,this.context=e,this.refs=$p,this.updater=n||Kp}bs.prototype.isReactComponent={};bs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qp(){}Qp.prototype=bs.prototype;function Cf(t,e,n){this.props=t,this.context=e,this.refs=$p,this.updater=n||Kp}var wf=Cf.prototype=new Qp;wf.constructor=Cf;Zp(wf,bs.prototype);wf.isPureReactComponent=!0;var Bd=Array.isArray,Jp=Object.prototype.hasOwnProperty,Tf={current:null},e0={key:!0,ref:!0,__self:!0,__source:!0};function t0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Jp.call(e,i)&&!e0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:bo,type:t,key:s,ref:o,props:r,_owner:Tf.current}}function n1(t,e){return{$$typeof:bo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rf(t){return typeof t=="object"&&t!==null&&t.$$typeof===bo}function i1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zd=/\/+/g;function Zl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?i1(""+t.key):e.toString(36)}function La(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case bo:case X2:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Zl(o,0):i,Bd(r)?(n="",t!=null&&(n=t.replace(zd,"$&/")+"/"),La(r,e,n,"",function(c){return c})):r!=null&&(Rf(r)&&(r=n1(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(zd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Bd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Zl(s,a);o+=La(s,e,n,l,r)}else if(l=t1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Zl(s,a++),o+=La(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Wo(t,e,n){if(t==null)return t;var i=[],r=0;return La(t,i,"","",function(s){return e.call(n,s,r++)}),i}function r1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Gt={current:null},ba={transition:null},s1={ReactCurrentDispatcher:Gt,ReactCurrentBatchConfig:ba,ReactCurrentOwner:Tf};function n0(){throw Error("act(...) is not supported in production builds of React.")}Oe.Children={map:Wo,forEach:function(t,e,n){Wo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wo(t,function(){e++}),e},toArray:function(t){return Wo(t,function(e){return e})||[]},only:function(t){if(!Rf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Oe.Component=bs;Oe.Fragment=j2;Oe.Profiler=q2;Oe.PureComponent=Cf;Oe.StrictMode=Y2;Oe.Suspense=Q2;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s1;Oe.act=n0;Oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Zp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Tf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Jp.call(e,l)&&!e0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:bo,type:t.type,key:r,ref:s,props:i,_owner:o}};Oe.createContext=function(t){return t={$$typeof:Z2,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:K2,_context:t},t.Consumer=t};Oe.createElement=t0;Oe.createFactory=function(t){var e=t0.bind(null,t);return e.type=t,e};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(t){return{$$typeof:$2,render:t}};Oe.isValidElement=Rf;Oe.lazy=function(t){return{$$typeof:e1,_payload:{_status:-1,_result:t},_init:r1}};Oe.memo=function(t,e){return{$$typeof:J2,type:t,compare:e===void 0?null:e}};Oe.startTransition=function(t){var e=ba.transition;ba.transition={};try{t()}finally{ba.transition=e}};Oe.unstable_act=n0;Oe.useCallback=function(t,e){return Gt.current.useCallback(t,e)};Oe.useContext=function(t){return Gt.current.useContext(t)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(t){return Gt.current.useDeferredValue(t)};Oe.useEffect=function(t,e){return Gt.current.useEffect(t,e)};Oe.useId=function(){return Gt.current.useId()};Oe.useImperativeHandle=function(t,e,n){return Gt.current.useImperativeHandle(t,e,n)};Oe.useInsertionEffect=function(t,e){return Gt.current.useInsertionEffect(t,e)};Oe.useLayoutEffect=function(t,e){return Gt.current.useLayoutEffect(t,e)};Oe.useMemo=function(t,e){return Gt.current.useMemo(t,e)};Oe.useReducer=function(t,e,n){return Gt.current.useReducer(t,e,n)};Oe.useRef=function(t){return Gt.current.useRef(t)};Oe.useState=function(t){return Gt.current.useState(t)};Oe.useSyncExternalStore=function(t,e,n){return Gt.current.useSyncExternalStore(t,e,n)};Oe.useTransition=function(){return Gt.current.useTransition()};Oe.version="18.3.1";qp.exports=Oe;var vs=qp.exports;const Ui=W2(vs);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o1=vs,a1=Symbol.for("react.element"),l1=Symbol.for("react.fragment"),c1=Object.prototype.hasOwnProperty,u1=o1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f1={key:!0,ref:!0,__self:!0,__source:!0};function i0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)c1.call(e,i)&&!f1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:a1,type:t,key:s,ref:o,props:r,_owner:u1.current}}wl.Fragment=l1;wl.jsx=i0;wl.jsxs=i0;Yp.exports=wl;var J=Yp.exports,$c={},r0={exports:{}},un={},s0={exports:{}},o0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,j){var K=D.length;D.push(j);e:for(;0<K;){var oe=K-1>>>1,ye=D[oe];if(0<r(ye,j))D[oe]=j,D[K]=ye,K=oe;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var j=D[0],K=D.pop();if(K!==j){D[0]=K;e:for(var oe=0,ye=D.length,ze=ye>>>1;oe<ze;){var V=2*(oe+1)-1,ne=D[V],de=V+1,ue=D[de];if(0>r(ne,K))de<ye&&0>r(ue,ne)?(D[oe]=ue,D[de]=K,oe=de):(D[oe]=ne,D[V]=K,oe=V);else if(de<ye&&0>r(ue,K))D[oe]=ue,D[de]=K,oe=de;else break e}}return j}function r(D,j){var K=D.sortIndex-j.sortIndex;return K!==0?K:D.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,d=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=D)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function M(D){if(x=!1,g(D),!v)if(n(l)!==null)v=!0,H(P);else{var j=n(c);j!==null&&te(M,j.startTime-D)}}function P(D,j){v=!1,x&&(x=!1,u(b),b=-1),p=!0;var K=d;try{for(g(j),h=n(l);h!==null&&(!(h.expirationTime>j)||D&&!L());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,d=h.priorityLevel;var ye=oe(h.expirationTime<=j);j=t.unstable_now(),typeof ye=="function"?h.callback=ye:h===n(l)&&i(l),g(j)}else i(l);h=n(l)}if(h!==null)var ze=!0;else{var V=n(c);V!==null&&te(M,V.startTime-j),ze=!1}return ze}finally{h=null,d=K,p=!1}}var C=!1,w=null,b=-1,A=5,y=-1;function L(){return!(t.unstable_now()-y<A)}function G(){if(w!==null){var D=t.unstable_now();y=D;var j=!0;try{j=w(!0,D)}finally{j?z():(C=!1,w=null)}}else C=!1}var z;if(typeof _=="function")z=function(){_(G)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,$=W.port2;W.port1.onmessage=G,z=function(){$.postMessage(null)}}else z=function(){m(G,0)};function H(D){w=D,C||(C=!0,z())}function te(D,j){b=m(function(){D(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,H(P))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var K=d;d=j;try{return D()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,j){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var K=d;d=D;try{return j()}finally{d=K}},t.unstable_scheduleCallback=function(D,j,K){var oe=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?oe+K:oe):K=oe,D){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=K+ye,D={id:f++,callback:j,priorityLevel:D,startTime:K,expirationTime:ye,sortIndex:-1},K>oe?(D.sortIndex=K,e(c,D),n(l)===null&&D===n(c)&&(x?(u(b),b=-1):x=!0,te(M,K-oe))):(D.sortIndex=ye,e(l,D),v||p||(v=!0,H(P))),D},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(D){var j=d;return function(){var K=d;d=j;try{return D.apply(this,arguments)}finally{d=K}}}})(o0);s0.exports=o0;var d1=s0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h1=vs,cn=d1;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a0=new Set,ho={};function Tr(t,e){xs(t,e),xs(t+"Capture",e)}function xs(t,e){for(ho[t]=e,t=0;t<e.length;t++)a0.add(e[t])}var fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=Object.prototype.hasOwnProperty,p1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hd={},Vd={};function m1(t){return Qc.call(Vd,t)?!0:Qc.call(Hd,t)?!1:p1.test(t)?Vd[t]=!0:(Hd[t]=!0,!1)}function g1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _1(t,e,n,i){if(e===null||typeof e>"u"||g1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Dt[t]=new Wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Dt[e]=new Wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Dt[t]=new Wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Dt[t]=new Wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Dt[t]=new Wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Dt[t]=new Wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Dt[t]=new Wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Dt[t]=new Wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Dt[t]=new Wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pf=/[\-:]([a-z])/g;function Lf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pf,Lf);Dt[e]=new Wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pf,Lf);Dt[e]=new Wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pf,Lf);Dt[e]=new Wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Dt[t]=new Wt(t,1,!1,t.toLowerCase(),null,!1,!1)});Dt.xlinkHref=new Wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Dt[t]=new Wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function bf(t,e,n,i){var r=Dt.hasOwnProperty(e)?Dt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_1(e,n,r,i)&&(n=null),i||r===null?m1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var gi=h1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xo=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),Df=Symbol.for("react.strict_mode"),Jc=Symbol.for("react.profiler"),l0=Symbol.for("react.provider"),c0=Symbol.for("react.context"),If=Symbol.for("react.forward_ref"),eu=Symbol.for("react.suspense"),tu=Symbol.for("react.suspense_list"),Uf=Symbol.for("react.memo"),Ti=Symbol.for("react.lazy"),u0=Symbol.for("react.offscreen"),Gd=Symbol.iterator;function Fs(t){return t===null||typeof t!="object"?null:(t=Gd&&t[Gd]||t["@@iterator"],typeof t=="function"?t:null)}var at=Object.assign,$l;function $s(t){if($l===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$l=e&&e[1]||""}return`
`+$l+t}var Ql=!1;function Jl(t,e){if(!t||Ql)return"";Ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ql=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$s(t):""}function v1(t){switch(t.tag){case 5:return $s(t.type);case 16:return $s("Lazy");case 13:return $s("Suspense");case 19:return $s("SuspenseList");case 0:case 2:case 15:return t=Jl(t.type,!1),t;case 11:return t=Jl(t.type.render,!1),t;case 1:return t=Jl(t.type,!0),t;default:return""}}function nu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $r:return"Fragment";case Zr:return"Portal";case Jc:return"Profiler";case Df:return"StrictMode";case eu:return"Suspense";case tu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case c0:return(t.displayName||"Context")+".Consumer";case l0:return(t._context.displayName||"Context")+".Provider";case If:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Uf:return e=t.displayName||null,e!==null?e:nu(t.type)||"Memo";case Ti:e=t._payload,t=t._init;try{return nu(t(e))}catch{}}return null}function x1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nu(e);case 8:return e===Df?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function f0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function S1(t){var e=f0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function jo(t){t._valueTracker||(t._valueTracker=S1(t))}function d0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=f0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function qa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function iu(t,e){var n=e.checked;return at({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Xi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function h0(t,e){e=e.checked,e!=null&&bf(t,"checked",e,!1)}function ru(t,e){h0(t,e);var n=Xi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?su(t,e.type,n):e.hasOwnProperty("defaultValue")&&su(t,e.type,Xi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function su(t,e,n){(e!=="number"||qa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qs=Array.isArray;function cs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Xi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ou(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return at({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(Qs(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xi(n)}}function p0(t,e){var n=Xi(e.value),i=Xi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Yd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function m0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function au(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?m0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Yo,g0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Yo=Yo||document.createElement("div"),Yo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Yo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function po(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var no={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},y1=["Webkit","ms","Moz","O"];Object.keys(no).forEach(function(t){y1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),no[e]=no[t]})});function _0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||no.hasOwnProperty(t)&&no[t]?(""+e).trim():e+"px"}function v0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=_0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var M1=at({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lu(t,e){if(e){if(M1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function cu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uu=null;function Nf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fu=null,us=null,fs=null;function qd(t){if(t=Uo(t)){if(typeof fu!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=bl(e),fu(t.stateNode,t.type,e))}}function x0(t){us?fs?fs.push(t):fs=[t]:us=t}function S0(){if(us){var t=us,e=fs;if(fs=us=null,qd(t),e)for(t=0;t<e.length;t++)qd(e[t])}}function y0(t,e){return t(e)}function M0(){}var ec=!1;function E0(t,e,n){if(ec)return t(e,n);ec=!0;try{return y0(t,e,n)}finally{ec=!1,(us!==null||fs!==null)&&(M0(),S0())}}function mo(t,e){var n=t.stateNode;if(n===null)return null;var i=bl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var du=!1;if(fi)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){du=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{du=!1}function E1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var io=!1,Ka=null,Za=!1,hu=null,A1={onError:function(t){io=!0,Ka=t}};function C1(t,e,n,i,r,s,o,a,l){io=!1,Ka=null,E1.apply(A1,arguments)}function w1(t,e,n,i,r,s,o,a,l){if(C1.apply(this,arguments),io){if(io){var c=Ka;io=!1,Ka=null}else throw Error(ee(198));Za||(Za=!0,hu=c)}}function Rr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function A0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kd(t){if(Rr(t)!==t)throw Error(ee(188))}function T1(t){var e=t.alternate;if(!e){if(e=Rr(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Kd(r),t;if(s===i)return Kd(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function C0(t){return t=T1(t),t!==null?w0(t):null}function w0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=w0(t);if(e!==null)return e;t=t.sibling}return null}var T0=cn.unstable_scheduleCallback,Zd=cn.unstable_cancelCallback,R1=cn.unstable_shouldYield,P1=cn.unstable_requestPaint,dt=cn.unstable_now,L1=cn.unstable_getCurrentPriorityLevel,Ff=cn.unstable_ImmediatePriority,R0=cn.unstable_UserBlockingPriority,$a=cn.unstable_NormalPriority,b1=cn.unstable_LowPriority,P0=cn.unstable_IdlePriority,Tl=null,Wn=null;function D1(t){if(Wn&&typeof Wn.onCommitFiberRoot=="function")try{Wn.onCommitFiberRoot(Tl,t,void 0,(t.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:N1,I1=Math.log,U1=Math.LN2;function N1(t){return t>>>=0,t===0?32:31-(I1(t)/U1|0)|0}var qo=64,Ko=4194304;function Js(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qa(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Js(a):(s&=o,s!==0&&(i=Js(s)))}else o=n&~r,o!==0?i=Js(o):s!==0&&(i=Js(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-In(e),r=1<<n,i|=t[n],e&=~r;return i}function F1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function O1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-In(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=F1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function pu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function L0(){var t=qo;return qo<<=1,!(qo&4194240)&&(qo=64),t}function tc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Do(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-In(e),t[e]=n}function k1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-In(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Of(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-In(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var $e=0;function b0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var D0,kf,I0,U0,N0,mu=!1,Zo=[],Ni=null,Fi=null,Oi=null,go=new Map,_o=new Map,Pi=[],B1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $d(t,e){switch(t){case"focusin":case"focusout":Ni=null;break;case"dragenter":case"dragleave":Fi=null;break;case"mouseover":case"mouseout":Oi=null;break;case"pointerover":case"pointerout":go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(e.pointerId)}}function ks(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Uo(e),e!==null&&kf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function z1(t,e,n,i,r){switch(e){case"focusin":return Ni=ks(Ni,t,e,n,i,r),!0;case"dragenter":return Fi=ks(Fi,t,e,n,i,r),!0;case"mouseover":return Oi=ks(Oi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return go.set(s,ks(go.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,_o.set(s,ks(_o.get(s)||null,t,e,n,i,r)),!0}return!1}function F0(t){var e=hr(t.target);if(e!==null){var n=Rr(e);if(n!==null){if(e=n.tag,e===13){if(e=A0(n),e!==null){t.blockedOn=e,N0(t.priority,function(){I0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Da(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);uu=i,n.target.dispatchEvent(i),uu=null}else return e=Uo(n),e!==null&&kf(e),t.blockedOn=n,!1;e.shift()}return!0}function Qd(t,e,n){Da(t)&&n.delete(e)}function H1(){mu=!1,Ni!==null&&Da(Ni)&&(Ni=null),Fi!==null&&Da(Fi)&&(Fi=null),Oi!==null&&Da(Oi)&&(Oi=null),go.forEach(Qd),_o.forEach(Qd)}function Bs(t,e){t.blockedOn===e&&(t.blockedOn=null,mu||(mu=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,H1)))}function vo(t){function e(r){return Bs(r,t)}if(0<Zo.length){Bs(Zo[0],t);for(var n=1;n<Zo.length;n++){var i=Zo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ni!==null&&Bs(Ni,t),Fi!==null&&Bs(Fi,t),Oi!==null&&Bs(Oi,t),go.forEach(e),_o.forEach(e),n=0;n<Pi.length;n++)i=Pi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Pi.length&&(n=Pi[0],n.blockedOn===null);)F0(n),n.blockedOn===null&&Pi.shift()}var ds=gi.ReactCurrentBatchConfig,Ja=!0;function V1(t,e,n,i){var r=$e,s=ds.transition;ds.transition=null;try{$e=1,Bf(t,e,n,i)}finally{$e=r,ds.transition=s}}function G1(t,e,n,i){var r=$e,s=ds.transition;ds.transition=null;try{$e=4,Bf(t,e,n,i)}finally{$e=r,ds.transition=s}}function Bf(t,e,n,i){if(Ja){var r=gu(t,e,n,i);if(r===null)fc(t,e,i,el,n),$d(t,i);else if(z1(r,t,e,n,i))i.stopPropagation();else if($d(t,i),e&4&&-1<B1.indexOf(t)){for(;r!==null;){var s=Uo(r);if(s!==null&&D0(s),s=gu(t,e,n,i),s===null&&fc(t,e,i,el,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else fc(t,e,i,null,n)}}var el=null;function gu(t,e,n,i){if(el=null,t=Nf(i),t=hr(t),t!==null)if(e=Rr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=A0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return el=t,null}function O0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(L1()){case Ff:return 1;case R0:return 4;case $a:case b1:return 16;case P0:return 536870912;default:return 16}default:return 16}}var Di=null,zf=null,Ia=null;function k0(){if(Ia)return Ia;var t,e=zf,n=e.length,i,r="value"in Di?Di.value:Di.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ia=r.slice(t,1<i?1-i:void 0)}function Ua(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $o(){return!0}function Jd(){return!1}function fn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$o:Jd,this.isPropagationStopped=Jd,this}return at(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),e}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hf=fn(Ds),Io=at({},Ds,{view:0,detail:0}),W1=fn(Io),nc,ic,zs,Rl=at({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(nc=t.screenX-zs.screenX,ic=t.screenY-zs.screenY):ic=nc=0,zs=t),nc)},movementY:function(t){return"movementY"in t?t.movementY:ic}}),eh=fn(Rl),X1=at({},Rl,{dataTransfer:0}),j1=fn(X1),Y1=at({},Io,{relatedTarget:0}),rc=fn(Y1),q1=at({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),K1=fn(q1),Z1=at({},Ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$1=fn(Z1),Q1=at({},Ds,{data:0}),th=fn(Q1),J1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ng(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tg[t])?!!e[t]:!1}function Vf(){return ng}var ig=at({},Io,{key:function(t){if(t.key){var e=J1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ua(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?eg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vf,charCode:function(t){return t.type==="keypress"?Ua(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ua(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rg=fn(ig),sg=at({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nh=fn(sg),og=at({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vf}),ag=fn(og),lg=at({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),cg=fn(lg),ug=at({},Rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fg=fn(ug),dg=[9,13,27,32],Gf=fi&&"CompositionEvent"in window,ro=null;fi&&"documentMode"in document&&(ro=document.documentMode);var hg=fi&&"TextEvent"in window&&!ro,B0=fi&&(!Gf||ro&&8<ro&&11>=ro),ih=" ",rh=!1;function z0(t,e){switch(t){case"keyup":return dg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function H0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qr=!1;function pg(t,e){switch(t){case"compositionend":return H0(e);case"keypress":return e.which!==32?null:(rh=!0,ih);case"textInput":return t=e.data,t===ih&&rh?null:t;default:return null}}function mg(t,e){if(Qr)return t==="compositionend"||!Gf&&z0(t,e)?(t=k0(),Ia=zf=Di=null,Qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return B0&&e.locale!=="ko"?null:e.data;default:return null}}var gg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gg[t.type]:e==="textarea"}function V0(t,e,n,i){x0(i),e=tl(e,"onChange"),0<e.length&&(n=new Hf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var so=null,xo=null;function _g(t){J0(t,0)}function Pl(t){var e=ts(t);if(d0(e))return t}function vg(t,e){if(t==="change")return e}var G0=!1;if(fi){var sc;if(fi){var oc="oninput"in document;if(!oc){var oh=document.createElement("div");oh.setAttribute("oninput","return;"),oc=typeof oh.oninput=="function"}sc=oc}else sc=!1;G0=sc&&(!document.documentMode||9<document.documentMode)}function ah(){so&&(so.detachEvent("onpropertychange",W0),xo=so=null)}function W0(t){if(t.propertyName==="value"&&Pl(xo)){var e=[];V0(e,xo,t,Nf(t)),E0(_g,e)}}function xg(t,e,n){t==="focusin"?(ah(),so=e,xo=n,so.attachEvent("onpropertychange",W0)):t==="focusout"&&ah()}function Sg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pl(xo)}function yg(t,e){if(t==="click")return Pl(e)}function Mg(t,e){if(t==="input"||t==="change")return Pl(e)}function Eg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nn=typeof Object.is=="function"?Object.is:Eg;function So(t,e){if(Nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Qc.call(e,r)||!Nn(t[r],e[r]))return!1}return!0}function lh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ch(t,e){var n=lh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lh(n)}}function X0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?X0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function j0(){for(var t=window,e=qa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qa(t.document)}return e}function Wf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ag(t){var e=j0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&X0(n.ownerDocument.documentElement,n)){if(i!==null&&Wf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ch(n,s);var o=ch(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Cg=fi&&"documentMode"in document&&11>=document.documentMode,Jr=null,_u=null,oo=null,vu=!1;function uh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vu||Jr==null||Jr!==qa(i)||(i=Jr,"selectionStart"in i&&Wf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),oo&&So(oo,i)||(oo=i,i=tl(_u,"onSelect"),0<i.length&&(e=new Hf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Jr)))}function Qo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var es={animationend:Qo("Animation","AnimationEnd"),animationiteration:Qo("Animation","AnimationIteration"),animationstart:Qo("Animation","AnimationStart"),transitionend:Qo("Transition","TransitionEnd")},ac={},Y0={};fi&&(Y0=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function Ll(t){if(ac[t])return ac[t];if(!es[t])return t;var e=es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Y0)return ac[t]=e[n];return t}var q0=Ll("animationend"),K0=Ll("animationiteration"),Z0=Ll("animationstart"),$0=Ll("transitionend"),Q0=new Map,fh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,e){Q0.set(t,e),Tr(e,[t])}for(var lc=0;lc<fh.length;lc++){var cc=fh[lc],wg=cc.toLowerCase(),Tg=cc[0].toUpperCase()+cc.slice(1);Ki(wg,"on"+Tg)}Ki(q0,"onAnimationEnd");Ki(K0,"onAnimationIteration");Ki(Z0,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki($0,"onTransitionEnd");xs("onMouseEnter",["mouseout","mouseover"]);xs("onMouseLeave",["mouseout","mouseover"]);xs("onPointerEnter",["pointerout","pointerover"]);xs("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rg=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function dh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,w1(i,e,void 0,t),t.currentTarget=null}function J0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;dh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;dh(r,a,c),s=l}}}if(Za)throw t=hu,Za=!1,hu=null,t}function et(t,e){var n=e[Eu];n===void 0&&(n=e[Eu]=new Set);var i=t+"__bubble";n.has(i)||(em(e,t,2,!1),n.add(i))}function uc(t,e,n){var i=0;e&&(i|=4),em(n,t,i,e)}var Jo="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[Jo]){t[Jo]=!0,a0.forEach(function(n){n!=="selectionchange"&&(Rg.has(n)||uc(n,!1,t),uc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Jo]||(e[Jo]=!0,uc("selectionchange",!1,e))}}function em(t,e,n,i){switch(O0(e)){case 1:var r=V1;break;case 4:r=G1;break;default:r=Bf}n=r.bind(null,e,n,t),r=void 0,!du||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function fc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=hr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}E0(function(){var c=s,f=Nf(n),h=[];e:{var d=Q0.get(t);if(d!==void 0){var p=Hf,v=t;switch(t){case"keypress":if(Ua(n)===0)break e;case"keydown":case"keyup":p=rg;break;case"focusin":v="focus",p=rc;break;case"focusout":v="blur",p=rc;break;case"beforeblur":case"afterblur":p=rc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=eh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=j1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ag;break;case q0:case K0:case Z0:p=K1;break;case $0:p=cg;break;case"scroll":p=W1;break;case"wheel":p=fg;break;case"copy":case"cut":case"paste":p=$1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=nh}var x=(e&4)!==0,m=!x&&t==="scroll",u=x?d!==null?d+"Capture":null:d;x=[];for(var _=c,g;_!==null;){g=_;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,u!==null&&(M=mo(_,u),M!=null&&x.push(Mo(_,M,g)))),m)break;_=_.return}0<x.length&&(d=new p(d,v,null,n,f),h.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==uu&&(v=n.relatedTarget||n.fromElement)&&(hr(v)||v[di]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?hr(v):null,v!==null&&(m=Rr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=eh,M="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=nh,M="onPointerLeave",u="onPointerEnter",_="pointer"),m=p==null?d:ts(p),g=v==null?d:ts(v),d=new x(M,_+"leave",p,n,f),d.target=m,d.relatedTarget=g,M=null,hr(f)===c&&(x=new x(u,_+"enter",v,n,f),x.target=g,x.relatedTarget=m,M=x),m=M,p&&v)t:{for(x=p,u=v,_=0,g=x;g;g=Lr(g))_++;for(g=0,M=u;M;M=Lr(M))g++;for(;0<_-g;)x=Lr(x),_--;for(;0<g-_;)u=Lr(u),g--;for(;_--;){if(x===u||u!==null&&x===u.alternate)break t;x=Lr(x),u=Lr(u)}x=null}else x=null;p!==null&&hh(h,d,p,x,!1),v!==null&&m!==null&&hh(h,m,v,x,!0)}}e:{if(d=c?ts(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var P=vg;else if(sh(d))if(G0)P=Mg;else{P=Sg;var C=xg}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(P=yg);if(P&&(P=P(t,c))){V0(h,P,n,f);break e}C&&C(t,d,c),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&su(d,"number",d.value)}switch(C=c?ts(c):window,t){case"focusin":(sh(C)||C.contentEditable==="true")&&(Jr=C,_u=c,oo=null);break;case"focusout":oo=_u=Jr=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,uh(h,n,f);break;case"selectionchange":if(Cg)break;case"keydown":case"keyup":uh(h,n,f)}var w;if(Gf)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Qr?z0(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(B0&&n.locale!=="ko"&&(Qr||b!=="onCompositionStart"?b==="onCompositionEnd"&&Qr&&(w=k0()):(Di=f,zf="value"in Di?Di.value:Di.textContent,Qr=!0)),C=tl(c,b),0<C.length&&(b=new th(b,t,null,n,f),h.push({event:b,listeners:C}),w?b.data=w:(w=H0(n),w!==null&&(b.data=w)))),(w=hg?pg(t,n):mg(t,n))&&(c=tl(c,"onBeforeInput"),0<c.length&&(f=new th("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=w))}J0(h,e)})}function Mo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=mo(t,n),s!=null&&i.unshift(Mo(t,s,r)),s=mo(t,e),s!=null&&i.push(Mo(t,s,r))),t=t.return}return i}function Lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=mo(n,s),l!=null&&o.unshift(Mo(n,l,a))):r||(l=mo(n,s),l!=null&&o.push(Mo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Pg=/\r\n?/g,Lg=/\u0000|\uFFFD/g;function ph(t){return(typeof t=="string"?t:""+t).replace(Pg,`
`).replace(Lg,"")}function ea(t,e,n){if(e=ph(e),ph(t)!==e&&n)throw Error(ee(425))}function nl(){}var xu=null,Su=null;function yu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mu=typeof setTimeout=="function"?setTimeout:void 0,bg=typeof clearTimeout=="function"?clearTimeout:void 0,mh=typeof Promise=="function"?Promise:void 0,Dg=typeof queueMicrotask=="function"?queueMicrotask:typeof mh<"u"?function(t){return mh.resolve(null).then(t).catch(Ig)}:Mu;function Ig(t){setTimeout(function(){throw t})}function dc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),vo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);vo(e)}function ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function gh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Is=Math.random().toString(36).slice(2),Hn="__reactFiber$"+Is,Eo="__reactProps$"+Is,di="__reactContainer$"+Is,Eu="__reactEvents$"+Is,Ug="__reactListeners$"+Is,Ng="__reactHandles$"+Is;function hr(t){var e=t[Hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[di]||n[Hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gh(t);t!==null;){if(n=t[Hn])return n;t=gh(t)}return e}t=n,n=t.parentNode}return null}function Uo(t){return t=t[Hn]||t[di],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function bl(t){return t[Eo]||null}var Au=[],ns=-1;function Zi(t){return{current:t}}function nt(t){0>ns||(t.current=Au[ns],Au[ns]=null,ns--)}function Je(t,e){ns++,Au[ns]=t.current,t.current=e}var ji={},Bt=Zi(ji),Kt=Zi(!1),Sr=ji;function Ss(t,e){var n=t.type.contextTypes;if(!n)return ji;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Zt(t){return t=t.childContextTypes,t!=null}function il(){nt(Kt),nt(Bt)}function _h(t,e,n){if(Bt.current!==ji)throw Error(ee(168));Je(Bt,e),Je(Kt,n)}function tm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,x1(t)||"Unknown",r));return at({},n,i)}function rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ji,Sr=Bt.current,Je(Bt,t),Je(Kt,Kt.current),!0}function vh(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=tm(t,e,Sr),i.__reactInternalMemoizedMergedChildContext=t,nt(Kt),nt(Bt),Je(Bt,t)):nt(Kt),Je(Kt,n)}var ri=null,Dl=!1,hc=!1;function nm(t){ri===null?ri=[t]:ri.push(t)}function Fg(t){Dl=!0,nm(t)}function $i(){if(!hc&&ri!==null){hc=!0;var t=0,e=$e;try{var n=ri;for($e=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ri=null,Dl=!1}catch(r){throw ri!==null&&(ri=ri.slice(t+1)),T0(Ff,$i),r}finally{$e=e,hc=!1}}return null}var is=[],rs=0,sl=null,ol=0,mn=[],gn=0,yr=null,oi=1,ai="";function ar(t,e){is[rs++]=ol,is[rs++]=sl,sl=t,ol=e}function im(t,e,n){mn[gn++]=oi,mn[gn++]=ai,mn[gn++]=yr,yr=t;var i=oi;t=ai;var r=32-In(i)-1;i&=~(1<<r),n+=1;var s=32-In(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,oi=1<<32-In(e)+r|n<<r|i,ai=s+t}else oi=1<<s|n<<r|i,ai=t}function Xf(t){t.return!==null&&(ar(t,1),im(t,1,0))}function jf(t){for(;t===sl;)sl=is[--rs],is[rs]=null,ol=is[--rs],is[rs]=null;for(;t===yr;)yr=mn[--gn],mn[gn]=null,ai=mn[--gn],mn[gn]=null,oi=mn[--gn],mn[gn]=null}var ln=null,an=null,it=!1,Ln=null;function rm(t,e){var n=vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function xh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ln=t,an=ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ln=t,an=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=yr!==null?{id:oi,overflow:ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ln=t,an=null,!0):!1;default:return!1}}function Cu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wu(t){if(it){var e=an;if(e){var n=e;if(!xh(t,e)){if(Cu(t))throw Error(ee(418));e=ki(n.nextSibling);var i=ln;e&&xh(t,e)?rm(i,n):(t.flags=t.flags&-4097|2,it=!1,ln=t)}}else{if(Cu(t))throw Error(ee(418));t.flags=t.flags&-4097|2,it=!1,ln=t}}}function Sh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ln=t}function ta(t){if(t!==ln)return!1;if(!it)return Sh(t),it=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yu(t.type,t.memoizedProps)),e&&(e=an)){if(Cu(t))throw sm(),Error(ee(418));for(;e;)rm(t,e),e=ki(e.nextSibling)}if(Sh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){an=ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}an=null}}else an=ln?ki(t.stateNode.nextSibling):null;return!0}function sm(){for(var t=an;t;)t=ki(t.nextSibling)}function ys(){an=ln=null,it=!1}function Yf(t){Ln===null?Ln=[t]:Ln.push(t)}var Og=gi.ReactCurrentBatchConfig;function Hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function na(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function yh(t){var e=t._init;return e(t._payload)}function om(t){function e(u,_){if(t){var g=u.deletions;g===null?(u.deletions=[_],u.flags|=16):g.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=Vi(u,_),u.index=0,u.sibling=null,u}function s(u,_,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<_?(u.flags|=2,_):g):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,g,M){return _===null||_.tag!==6?(_=Sc(g,u.mode,M),_.return=u,_):(_=r(_,g),_.return=u,_)}function l(u,_,g,M){var P=g.type;return P===$r?f(u,_,g.props.children,M,g.key):_!==null&&(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ti&&yh(P)===_.type)?(M=r(_,g.props),M.ref=Hs(u,_,g),M.return=u,M):(M=Ha(g.type,g.key,g.props,null,u.mode,M),M.ref=Hs(u,_,g),M.return=u,M)}function c(u,_,g,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=yc(g,u.mode,M),_.return=u,_):(_=r(_,g.children||[]),_.return=u,_)}function f(u,_,g,M,P){return _===null||_.tag!==7?(_=xr(g,u.mode,M,P),_.return=u,_):(_=r(_,g),_.return=u,_)}function h(u,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Sc(""+_,u.mode,g),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Xo:return g=Ha(_.type,_.key,_.props,null,u.mode,g),g.ref=Hs(u,null,_),g.return=u,g;case Zr:return _=yc(_,u.mode,g),_.return=u,_;case Ti:var M=_._init;return h(u,M(_._payload),g)}if(Qs(_)||Fs(_))return _=xr(_,u.mode,g,null),_.return=u,_;na(u,_)}return null}function d(u,_,g,M){var P=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:a(u,_,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Xo:return g.key===P?l(u,_,g,M):null;case Zr:return g.key===P?c(u,_,g,M):null;case Ti:return P=g._init,d(u,_,P(g._payload),M)}if(Qs(g)||Fs(g))return P!==null?null:f(u,_,g,M,null);na(u,g)}return null}function p(u,_,g,M,P){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(g)||null,a(_,u,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Xo:return u=u.get(M.key===null?g:M.key)||null,l(_,u,M,P);case Zr:return u=u.get(M.key===null?g:M.key)||null,c(_,u,M,P);case Ti:var C=M._init;return p(u,_,g,C(M._payload),P)}if(Qs(M)||Fs(M))return u=u.get(g)||null,f(_,u,M,P,null);na(_,M)}return null}function v(u,_,g,M){for(var P=null,C=null,w=_,b=_=0,A=null;w!==null&&b<g.length;b++){w.index>b?(A=w,w=null):A=w.sibling;var y=d(u,w,g[b],M);if(y===null){w===null&&(w=A);break}t&&w&&y.alternate===null&&e(u,w),_=s(y,_,b),C===null?P=y:C.sibling=y,C=y,w=A}if(b===g.length)return n(u,w),it&&ar(u,b),P;if(w===null){for(;b<g.length;b++)w=h(u,g[b],M),w!==null&&(_=s(w,_,b),C===null?P=w:C.sibling=w,C=w);return it&&ar(u,b),P}for(w=i(u,w);b<g.length;b++)A=p(w,u,b,g[b],M),A!==null&&(t&&A.alternate!==null&&w.delete(A.key===null?b:A.key),_=s(A,_,b),C===null?P=A:C.sibling=A,C=A);return t&&w.forEach(function(L){return e(u,L)}),it&&ar(u,b),P}function x(u,_,g,M){var P=Fs(g);if(typeof P!="function")throw Error(ee(150));if(g=P.call(g),g==null)throw Error(ee(151));for(var C=P=null,w=_,b=_=0,A=null,y=g.next();w!==null&&!y.done;b++,y=g.next()){w.index>b?(A=w,w=null):A=w.sibling;var L=d(u,w,y.value,M);if(L===null){w===null&&(w=A);break}t&&w&&L.alternate===null&&e(u,w),_=s(L,_,b),C===null?P=L:C.sibling=L,C=L,w=A}if(y.done)return n(u,w),it&&ar(u,b),P;if(w===null){for(;!y.done;b++,y=g.next())y=h(u,y.value,M),y!==null&&(_=s(y,_,b),C===null?P=y:C.sibling=y,C=y);return it&&ar(u,b),P}for(w=i(u,w);!y.done;b++,y=g.next())y=p(w,u,b,y.value,M),y!==null&&(t&&y.alternate!==null&&w.delete(y.key===null?b:y.key),_=s(y,_,b),C===null?P=y:C.sibling=y,C=y);return t&&w.forEach(function(G){return e(u,G)}),it&&ar(u,b),P}function m(u,_,g,M){if(typeof g=="object"&&g!==null&&g.type===$r&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Xo:e:{for(var P=g.key,C=_;C!==null;){if(C.key===P){if(P=g.type,P===$r){if(C.tag===7){n(u,C.sibling),_=r(C,g.props.children),_.return=u,u=_;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ti&&yh(P)===C.type){n(u,C.sibling),_=r(C,g.props),_.ref=Hs(u,C,g),_.return=u,u=_;break e}n(u,C);break}else e(u,C);C=C.sibling}g.type===$r?(_=xr(g.props.children,u.mode,M,g.key),_.return=u,u=_):(M=Ha(g.type,g.key,g.props,null,u.mode,M),M.ref=Hs(u,_,g),M.return=u,u=M)}return o(u);case Zr:e:{for(C=g.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(u,_.sibling),_=r(_,g.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=yc(g,u.mode,M),_.return=u,u=_}return o(u);case Ti:return C=g._init,m(u,_,C(g._payload),M)}if(Qs(g))return v(u,_,g,M);if(Fs(g))return x(u,_,g,M);na(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,g),_.return=u,u=_):(n(u,_),_=Sc(g,u.mode,M),_.return=u,u=_),o(u)):n(u,_)}return m}var Ms=om(!0),am=om(!1),al=Zi(null),ll=null,ss=null,qf=null;function Kf(){qf=ss=ll=null}function Zf(t){var e=al.current;nt(al),t._currentValue=e}function Tu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function hs(t,e){ll=t,qf=ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(qt=!0),t.firstContext=null)}function yn(t){var e=t._currentValue;if(qf!==t)if(t={context:t,memoizedValue:e,next:null},ss===null){if(ll===null)throw Error(ee(308));ss=t,ll.dependencies={lanes:0,firstContext:t}}else ss=ss.next=t;return e}var pr=null;function $f(t){pr===null?pr=[t]:pr.push(t)}function lm(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,$f(e)):(n.next=r.next,r.next=n),e.interleaved=n,hi(t,i)}function hi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ri=!1;function Qf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ui(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ve&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,hi(t,n)}return r=i.interleaved,r===null?(e.next=e,$f(i)):(e.next=r.next,r.next=e),i.interleaved=e,hi(t,n)}function Na(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Of(t,n)}}function Mh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cl(t,e,n,i){var r=t.updateQueue;Ri=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(d=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){h=v.call(p,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,d=typeof v=="function"?v.call(p,h,d):v,d==null)break e;h=at({},h,d);break e;case 2:Ri=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=h):f=f.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Er|=o,t.lanes=o,t.memoizedState=h}}function Eh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var No={},Xn=Zi(No),Ao=Zi(No),Co=Zi(No);function mr(t){if(t===No)throw Error(ee(174));return t}function Jf(t,e){switch(Je(Co,e),Je(Ao,t),Je(Xn,No),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:au(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=au(e,t)}nt(Xn),Je(Xn,e)}function Es(){nt(Xn),nt(Ao),nt(Co)}function um(t){mr(Co.current);var e=mr(Xn.current),n=au(e,t.type);e!==n&&(Je(Ao,t),Je(Xn,n))}function ed(t){Ao.current===t&&(nt(Xn),nt(Ao))}var st=Zi(0);function ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pc=[];function td(){for(var t=0;t<pc.length;t++)pc[t]._workInProgressVersionPrimary=null;pc.length=0}var Fa=gi.ReactCurrentDispatcher,mc=gi.ReactCurrentBatchConfig,Mr=0,ot=null,St=null,wt=null,fl=!1,ao=!1,wo=0,kg=0;function It(){throw Error(ee(321))}function nd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Nn(t[n],e[n]))return!1;return!0}function id(t,e,n,i,r,s){if(Mr=s,ot=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fa.current=t===null||t.memoizedState===null?Vg:Gg,t=n(i,r),ao){s=0;do{if(ao=!1,wo=0,25<=s)throw Error(ee(301));s+=1,wt=St=null,e.updateQueue=null,Fa.current=Wg,t=n(i,r)}while(ao)}if(Fa.current=dl,e=St!==null&&St.next!==null,Mr=0,wt=St=ot=null,fl=!1,e)throw Error(ee(300));return t}function rd(){var t=wo!==0;return wo=0,t}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?ot.memoizedState=wt=t:wt=wt.next=t,wt}function Mn(){if(St===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=wt===null?ot.memoizedState:wt.next;if(e!==null)wt=e,St=t;else{if(t===null)throw Error(ee(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},wt===null?ot.memoizedState=wt=t:wt=wt.next=t}return wt}function To(t,e){return typeof e=="function"?e(t):e}function gc(t){var e=Mn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=St,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Mr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,ot.lanes|=f,Er|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Nn(i,e.memoizedState)||(qt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ot.lanes|=s,Er|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _c(t){var e=Mn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Nn(s,e.memoizedState)||(qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function fm(){}function dm(t,e){var n=ot,i=Mn(),r=e(),s=!Nn(i.memoizedState,r);if(s&&(i.memoizedState=r,qt=!0),i=i.queue,sd(mm.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||wt!==null&&wt.memoizedState.tag&1){if(n.flags|=2048,Ro(9,pm.bind(null,n,i,r,e),void 0,null),Tt===null)throw Error(ee(349));Mr&30||hm(n,e,r)}return r}function hm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function pm(t,e,n,i){e.value=n,e.getSnapshot=i,gm(e)&&_m(t)}function mm(t,e,n){return n(function(){gm(e)&&_m(t)})}function gm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Nn(t,n)}catch{return!0}}function _m(t){var e=hi(t,1);e!==null&&Un(e,t,1,-1)}function Ah(t){var e=kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:t},e.queue=t,t=t.dispatch=Hg.bind(null,ot,t),[e.memoizedState,t]}function Ro(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function vm(){return Mn().memoizedState}function Oa(t,e,n,i){var r=kn();ot.flags|=t,r.memoizedState=Ro(1|e,n,void 0,i===void 0?null:i)}function Il(t,e,n,i){var r=Mn();i=i===void 0?null:i;var s=void 0;if(St!==null){var o=St.memoizedState;if(s=o.destroy,i!==null&&nd(i,o.deps)){r.memoizedState=Ro(e,n,s,i);return}}ot.flags|=t,r.memoizedState=Ro(1|e,n,s,i)}function Ch(t,e){return Oa(8390656,8,t,e)}function sd(t,e){return Il(2048,8,t,e)}function xm(t,e){return Il(4,2,t,e)}function Sm(t,e){return Il(4,4,t,e)}function ym(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Mm(t,e,n){return n=n!=null?n.concat([t]):null,Il(4,4,ym.bind(null,e,t),n)}function od(){}function Em(t,e){var n=Mn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&nd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Am(t,e){var n=Mn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&nd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Cm(t,e,n){return Mr&21?(Nn(n,e)||(n=L0(),ot.lanes|=n,Er|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,qt=!0),t.memoizedState=n)}function Bg(t,e){var n=$e;$e=n!==0&&4>n?n:4,t(!0);var i=mc.transition;mc.transition={};try{t(!1),e()}finally{$e=n,mc.transition=i}}function wm(){return Mn().memoizedState}function zg(t,e,n){var i=Hi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Tm(t))Rm(e,n);else if(n=lm(t,e,n,i),n!==null){var r=Vt();Un(n,t,i,r),Pm(n,e,i)}}function Hg(t,e,n){var i=Hi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tm(t))Rm(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Nn(a,o)){var l=e.interleaved;l===null?(r.next=r,$f(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=lm(t,e,r,i),n!==null&&(r=Vt(),Un(n,t,i,r),Pm(n,e,i))}}function Tm(t){var e=t.alternate;return t===ot||e!==null&&e===ot}function Rm(t,e){ao=fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Pm(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Of(t,n)}}var dl={readContext:yn,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},Vg={readContext:yn,useCallback:function(t,e){return kn().memoizedState=[t,e===void 0?null:e],t},useContext:yn,useEffect:Ch,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Oa(4194308,4,ym.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Oa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Oa(4,2,t,e)},useMemo:function(t,e){var n=kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=kn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=zg.bind(null,ot,t),[i.memoizedState,t]},useRef:function(t){var e=kn();return t={current:t},e.memoizedState=t},useState:Ah,useDebugValue:od,useDeferredValue:function(t){return kn().memoizedState=t},useTransition:function(){var t=Ah(!1),e=t[0];return t=Bg.bind(null,t[1]),kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ot,r=kn();if(it){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Tt===null)throw Error(ee(349));Mr&30||hm(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ch(mm.bind(null,i,s,t),[t]),i.flags|=2048,Ro(9,pm.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=kn(),e=Tt.identifierPrefix;if(it){var n=ai,i=oi;n=(i&~(1<<32-In(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kg++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Gg={readContext:yn,useCallback:Em,useContext:yn,useEffect:sd,useImperativeHandle:Mm,useInsertionEffect:xm,useLayoutEffect:Sm,useMemo:Am,useReducer:gc,useRef:vm,useState:function(){return gc(To)},useDebugValue:od,useDeferredValue:function(t){var e=Mn();return Cm(e,St.memoizedState,t)},useTransition:function(){var t=gc(To)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:fm,useSyncExternalStore:dm,useId:wm,unstable_isNewReconciler:!1},Wg={readContext:yn,useCallback:Em,useContext:yn,useEffect:sd,useImperativeHandle:Mm,useInsertionEffect:xm,useLayoutEffect:Sm,useMemo:Am,useReducer:_c,useRef:vm,useState:function(){return _c(To)},useDebugValue:od,useDeferredValue:function(t){var e=Mn();return St===null?e.memoizedState=t:Cm(e,St.memoizedState,t)},useTransition:function(){var t=_c(To)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:fm,useSyncExternalStore:dm,useId:wm,unstable_isNewReconciler:!1};function Rn(t,e){if(t&&t.defaultProps){e=at({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ru(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:at({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ul={isMounted:function(t){return(t=t._reactInternals)?Rr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Vt(),r=Hi(t),s=ui(i,r);s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(Un(e,t,r,i),Na(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Vt(),r=Hi(t),s=ui(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(Un(e,t,r,i),Na(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Vt(),i=Hi(t),r=ui(n,i);r.tag=2,e!=null&&(r.callback=e),e=Bi(t,r,i),e!==null&&(Un(e,t,i,n),Na(e,t,i))}};function wh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!So(n,i)||!So(r,s):!0}function Lm(t,e,n){var i=!1,r=ji,s=e.contextType;return typeof s=="object"&&s!==null?s=yn(s):(r=Zt(e)?Sr:Bt.current,i=e.contextTypes,s=(i=i!=null)?Ss(t,r):ji),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ul,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Th(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ul.enqueueReplaceState(e,e.state,null)}function Pu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Qf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=yn(s):(s=Zt(e)?Sr:Bt.current,r.context=Ss(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ru(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ul.enqueueReplaceState(r,r.state,null),cl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,e){try{var n="",i=e;do n+=v1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function vc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Lu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Xg=typeof WeakMap=="function"?WeakMap:Map;function bm(t,e,n){n=ui(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){pl||(pl=!0,zu=i),Lu(t,e)},n}function Dm(t,e,n){n=ui(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Lu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Lu(t,e),typeof i!="function"&&(zi===null?zi=new Set([this]):zi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Xg;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=s_.bind(null,t,e,n),e.then(t,t))}function Ph(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ui(-1,1),e.tag=2,Bi(n,e,1))),n.lanes|=1),t)}var jg=gi.ReactCurrentOwner,qt=!1;function Ht(t,e,n,i){e.child=t===null?am(e,null,n,i):Ms(e,t.child,n,i)}function bh(t,e,n,i,r){n=n.render;var s=e.ref;return hs(e,r),i=id(t,e,n,i,s,r),n=rd(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,pi(t,e,r)):(it&&n&&Xf(e),e.flags|=1,Ht(t,e,i,r),e.child)}function Dh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!pd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Im(t,e,s,i,r)):(t=Ha(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:So,n(o,i)&&t.ref===e.ref)return pi(t,e,r)}return e.flags|=1,t=Vi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Im(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(So(s,i)&&t.ref===e.ref)if(qt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(qt=!0);else return e.lanes=t.lanes,pi(t,e,r)}return bu(t,e,n,i,r)}function Um(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Je(as,on),on|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Je(as,on),on|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Je(as,on),on|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Je(as,on),on|=i;return Ht(t,e,r,n),e.child}function Nm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bu(t,e,n,i,r){var s=Zt(n)?Sr:Bt.current;return s=Ss(e,s),hs(e,r),n=id(t,e,n,i,s,r),i=rd(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,pi(t,e,r)):(it&&i&&Xf(e),e.flags|=1,Ht(t,e,n,r),e.child)}function Ih(t,e,n,i,r){if(Zt(n)){var s=!0;rl(e)}else s=!1;if(hs(e,r),e.stateNode===null)ka(t,e),Lm(e,n,i),Pu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=yn(c):(c=Zt(n)?Sr:Bt.current,c=Ss(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Th(e,o,i,c),Ri=!1;var d=e.memoizedState;o.state=d,cl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Kt.current||Ri?(typeof f=="function"&&(Ru(e,n,f,i),l=e.memoizedState),(a=Ri||wh(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,cm(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Rn(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=yn(l):(l=Zt(n)?Sr:Bt.current,l=Ss(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Th(e,o,i,l),Ri=!1,d=e.memoizedState,o.state=d,cl(e,i,o,r);var v=e.memoizedState;a!==h||d!==v||Kt.current||Ri?(typeof p=="function"&&(Ru(e,n,p,i),v=e.memoizedState),(c=Ri||wh(e,n,c,i,d,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Du(t,e,n,i,s,r)}function Du(t,e,n,i,r,s){Nm(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&vh(e,n,!1),pi(t,e,s);i=e.stateNode,jg.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ms(e,t.child,null,s),e.child=Ms(e,null,a,s)):Ht(t,e,a,s),e.memoizedState=i.state,r&&vh(e,n,!0),e.child}function Fm(t){var e=t.stateNode;e.pendingContext?_h(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_h(t,e.context,!1),Jf(t,e.containerInfo)}function Uh(t,e,n,i,r){return ys(),Yf(r),e.flags|=256,Ht(t,e,n,i),e.child}var Iu={dehydrated:null,treeContext:null,retryLane:0};function Uu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Om(t,e,n){var i=e.pendingProps,r=st.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Je(st,r&1),t===null)return wu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ol(o,i,0,null),t=xr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Uu(n),e.memoizedState=Iu,t):ad(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Yg(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Vi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Vi(a,s):(s=xr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Uu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Iu,i}return s=t.child,t=s.sibling,i=Vi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ad(t,e){return e=Ol({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ia(t,e,n,i){return i!==null&&Yf(i),Ms(e,t.child,null,n),t=ad(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Yg(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=vc(Error(ee(422))),ia(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ol({mode:"visible",children:i.children},r,0,null),s=xr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ms(e,t.child,null,o),e.child.memoizedState=Uu(o),e.memoizedState=Iu,s);if(!(e.mode&1))return ia(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=vc(s,i,void 0),ia(t,e,o,i)}if(a=(o&t.childLanes)!==0,qt||a){if(i=Tt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,hi(t,r),Un(i,t,r,-1))}return hd(),i=vc(Error(ee(421))),ia(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=o_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,an=ki(r.nextSibling),ln=e,it=!0,Ln=null,t!==null&&(mn[gn++]=oi,mn[gn++]=ai,mn[gn++]=yr,oi=t.id,ai=t.overflow,yr=e),e=ad(e,i.children),e.flags|=4096,e)}function Nh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Tu(t.return,e,n)}function xc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function km(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Ht(t,e,i.children,n),i=st.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Nh(t,n,e);else if(t.tag===19)Nh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Je(st,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ul(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),xc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ul(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}xc(e,!0,n,null,s);break;case"together":xc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ka(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Er|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=Vi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function qg(t,e,n){switch(e.tag){case 3:Fm(e),ys();break;case 5:um(e);break;case 1:Zt(e.type)&&rl(e);break;case 4:Jf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Je(al,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Je(st,st.current&1),e.flags|=128,null):n&e.child.childLanes?Om(t,e,n):(Je(st,st.current&1),t=pi(t,e,n),t!==null?t.sibling:null);Je(st,st.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return km(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Je(st,st.current),i)break;return null;case 22:case 23:return e.lanes=0,Um(t,e,n)}return pi(t,e,n)}var Bm,Nu,zm,Hm;Bm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nu=function(){};zm=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,mr(Xn.current);var s=null;switch(n){case"input":r=iu(t,r),i=iu(t,i),s=[];break;case"select":r=at({},r,{value:void 0}),i=at({},i,{value:void 0}),s=[];break;case"textarea":r=ou(t,r),i=ou(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=nl)}lu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ho.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ho.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&et("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Hm=function(t,e,n,i){n!==i&&(e.flags|=4)};function Vs(t,e){if(!it)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Kg(t,e,n){var i=e.pendingProps;switch(jf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(e),null;case 1:return Zt(e.type)&&il(),Ut(e),null;case 3:return i=e.stateNode,Es(),nt(Kt),nt(Bt),td(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ta(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ln!==null&&(Gu(Ln),Ln=null))),Nu(t,e),Ut(e),null;case 5:ed(e);var r=mr(Co.current);if(n=e.type,t!==null&&e.stateNode!=null)zm(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Ut(e),null}if(t=mr(Xn.current),ta(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Hn]=e,i[Eo]=s,t=(e.mode&1)!==0,n){case"dialog":et("cancel",i),et("close",i);break;case"iframe":case"object":case"embed":et("load",i);break;case"video":case"audio":for(r=0;r<eo.length;r++)et(eo[r],i);break;case"source":et("error",i);break;case"img":case"image":case"link":et("error",i),et("load",i);break;case"details":et("toggle",i);break;case"input":Wd(i,s),et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},et("invalid",i);break;case"textarea":jd(i,s),et("invalid",i)}lu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ea(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ea(i.textContent,a,t),r=["children",""+a]):ho.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&et("scroll",i)}switch(n){case"input":jo(i),Xd(i,s,!0);break;case"textarea":jo(i),Yd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=nl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=m0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Hn]=e,t[Eo]=i,Bm(t,e,!1,!1),e.stateNode=t;e:{switch(o=cu(n,i),n){case"dialog":et("cancel",t),et("close",t),r=i;break;case"iframe":case"object":case"embed":et("load",t),r=i;break;case"video":case"audio":for(r=0;r<eo.length;r++)et(eo[r],t);r=i;break;case"source":et("error",t),r=i;break;case"img":case"image":case"link":et("error",t),et("load",t),r=i;break;case"details":et("toggle",t),r=i;break;case"input":Wd(t,i),r=iu(t,i),et("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=at({},i,{value:void 0}),et("invalid",t);break;case"textarea":jd(t,i),r=ou(t,i),et("invalid",t);break;default:r=i}lu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?v0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&g0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&po(t,l):typeof l=="number"&&po(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ho.hasOwnProperty(s)?l!=null&&s==="onScroll"&&et("scroll",t):l!=null&&bf(t,s,l,o))}switch(n){case"input":jo(t),Xd(t,i,!1);break;case"textarea":jo(t),Yd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Xi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?cs(t,!!i.multiple,s,!1):i.defaultValue!=null&&cs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=nl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ut(e),null;case 6:if(t&&e.stateNode!=null)Hm(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=mr(Co.current),mr(Xn.current),ta(e)){if(i=e.stateNode,n=e.memoizedProps,i[Hn]=e,(s=i.nodeValue!==n)&&(t=ln,t!==null))switch(t.tag){case 3:ea(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ea(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Hn]=e,e.stateNode=i}return Ut(e),null;case 13:if(nt(st),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(it&&an!==null&&e.mode&1&&!(e.flags&128))sm(),ys(),e.flags|=98560,s=!1;else if(s=ta(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Hn]=e}else ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ut(e),s=!1}else Ln!==null&&(Gu(Ln),Ln=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||st.current&1?Mt===0&&(Mt=3):hd())),e.updateQueue!==null&&(e.flags|=4),Ut(e),null);case 4:return Es(),Nu(t,e),t===null&&yo(e.stateNode.containerInfo),Ut(e),null;case 10:return Zf(e.type._context),Ut(e),null;case 17:return Zt(e.type)&&il(),Ut(e),null;case 19:if(nt(st),s=e.memoizedState,s===null)return Ut(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Vs(s,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ul(t),o!==null){for(e.flags|=128,Vs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Je(st,st.current&1|2),e.child}t=t.sibling}s.tail!==null&&dt()>Cs&&(e.flags|=128,i=!0,Vs(s,!1),e.lanes=4194304)}else{if(!i)if(t=ul(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!it)return Ut(e),null}else 2*dt()-s.renderingStartTime>Cs&&n!==1073741824&&(e.flags|=128,i=!0,Vs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=dt(),e.sibling=null,n=st.current,Je(st,i?n&1|2:n&1),e):(Ut(e),null);case 22:case 23:return dd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?on&1073741824&&(Ut(e),e.subtreeFlags&6&&(e.flags|=8192)):Ut(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function Zg(t,e){switch(jf(e),e.tag){case 1:return Zt(e.type)&&il(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Es(),nt(Kt),nt(Bt),td(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ed(e),null;case 13:if(nt(st),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return nt(st),null;case 4:return Es(),null;case 10:return Zf(e.type._context),null;case 22:case 23:return dd(),null;case 24:return null;default:return null}}var ra=!1,Ot=!1,$g=typeof WeakSet=="function"?WeakSet:Set,he=null;function os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ft(t,e,i)}else n.current=null}function Fu(t,e,n){try{n()}catch(i){ft(t,e,i)}}var Fh=!1;function Qg(t,e){if(xu=Ja,t=j0(),Wf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++f===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Su={focusedElem:t,selectionRange:n},Ja=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:Rn(e.type,x),m);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(M){ft(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return v=Fh,Fh=!1,v}function lo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Fu(e,n,s)}r=r.next}while(r!==i)}}function Nl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ou(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Vm(t){var e=t.alternate;e!==null&&(t.alternate=null,Vm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Hn],delete e[Eo],delete e[Eu],delete e[Ug],delete e[Ng])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Gm(t){return t.tag===5||t.tag===3||t.tag===4}function Oh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Gm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ku(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nl));else if(i!==4&&(t=t.child,t!==null))for(ku(t,e,n),t=t.sibling;t!==null;)ku(t,e,n),t=t.sibling}function Bu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Bu(t,e,n),t=t.sibling;t!==null;)Bu(t,e,n),t=t.sibling}var Lt=null,Pn=!1;function vi(t,e,n){for(n=n.child;n!==null;)Wm(t,e,n),n=n.sibling}function Wm(t,e,n){if(Wn&&typeof Wn.onCommitFiberUnmount=="function")try{Wn.onCommitFiberUnmount(Tl,n)}catch{}switch(n.tag){case 5:Ot||os(n,e);case 6:var i=Lt,r=Pn;Lt=null,vi(t,e,n),Lt=i,Pn=r,Lt!==null&&(Pn?(t=Lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Lt.removeChild(n.stateNode));break;case 18:Lt!==null&&(Pn?(t=Lt,n=n.stateNode,t.nodeType===8?dc(t.parentNode,n):t.nodeType===1&&dc(t,n),vo(t)):dc(Lt,n.stateNode));break;case 4:i=Lt,r=Pn,Lt=n.stateNode.containerInfo,Pn=!0,vi(t,e,n),Lt=i,Pn=r;break;case 0:case 11:case 14:case 15:if(!Ot&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Fu(n,e,o),r=r.next}while(r!==i)}vi(t,e,n);break;case 1:if(!Ot&&(os(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ft(n,e,a)}vi(t,e,n);break;case 21:vi(t,e,n);break;case 22:n.mode&1?(Ot=(i=Ot)||n.memoizedState!==null,vi(t,e,n),Ot=i):vi(t,e,n);break;default:vi(t,e,n)}}function kh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $g),e.forEach(function(i){var r=a_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function An(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Lt=a.stateNode,Pn=!1;break e;case 3:Lt=a.stateNode.containerInfo,Pn=!0;break e;case 4:Lt=a.stateNode.containerInfo,Pn=!0;break e}a=a.return}if(Lt===null)throw Error(ee(160));Wm(s,o,r),Lt=null,Pn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){ft(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Xm(e,t),e=e.sibling}function Xm(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(An(e,t),On(t),i&4){try{lo(3,t,t.return),Nl(3,t)}catch(x){ft(t,t.return,x)}try{lo(5,t,t.return)}catch(x){ft(t,t.return,x)}}break;case 1:An(e,t),On(t),i&512&&n!==null&&os(n,n.return);break;case 5:if(An(e,t),On(t),i&512&&n!==null&&os(n,n.return),t.flags&32){var r=t.stateNode;try{po(r,"")}catch(x){ft(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&h0(r,s),cu(a,o);var c=cu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?v0(r,h):f==="dangerouslySetInnerHTML"?g0(r,h):f==="children"?po(r,h):bf(r,f,h,c)}switch(a){case"input":ru(r,s);break;case"textarea":p0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?cs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?cs(r,!!s.multiple,s.defaultValue,!0):cs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Eo]=s}catch(x){ft(t,t.return,x)}}break;case 6:if(An(e,t),On(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){ft(t,t.return,x)}}break;case 3:if(An(e,t),On(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{vo(e.containerInfo)}catch(x){ft(t,t.return,x)}break;case 4:An(e,t),On(t);break;case 13:An(e,t),On(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ud=dt())),i&4&&kh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ot=(c=Ot)||f,An(e,t),Ot=c):An(e,t),On(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(he=t,f=t.child;f!==null;){for(h=he=f;he!==null;){switch(d=he,p=d.child,d.tag){case 0:case 11:case 14:case 15:lo(4,d,d.return);break;case 1:os(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){ft(i,n,x)}}break;case 5:os(d,d.return);break;case 22:if(d.memoizedState!==null){zh(h);continue}}p!==null?(p.return=d,he=p):zh(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_0("display",o))}catch(x){ft(t,t.return,x)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){ft(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:An(e,t),On(t),i&4&&kh(t);break;case 21:break;default:An(e,t),On(t)}}function On(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Gm(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(po(r,""),i.flags&=-33);var s=Oh(t);Bu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Oh(t);ku(t,a,o);break;default:throw Error(ee(161))}}catch(l){ft(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Jg(t,e,n){he=t,jm(t)}function jm(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ra;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ot;a=ra;var c=Ot;if(ra=o,(Ot=l)&&!c)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?Hh(r):l!==null?(l.return=o,he=l):Hh(r);for(;s!==null;)he=s,jm(s),s=s.sibling;he=r,ra=a,Ot=c}Bh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):Bh(t)}}function Bh(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||Nl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ot)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Rn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Eh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Eh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&vo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Ot||e.flags&512&&Ou(e)}catch(d){ft(e,e.return,d)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function zh(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function Hh(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nl(4,e)}catch(l){ft(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ft(e,r,l)}}var s=e.return;try{Ou(e)}catch(l){ft(e,s,l)}break;case 5:var o=e.return;try{Ou(e)}catch(l){ft(e,o,l)}}}catch(l){ft(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var e_=Math.ceil,hl=gi.ReactCurrentDispatcher,ld=gi.ReactCurrentOwner,Sn=gi.ReactCurrentBatchConfig,Ve=0,Tt=null,xt=null,bt=0,on=0,as=Zi(0),Mt=0,Po=null,Er=0,Fl=0,cd=0,co=null,jt=null,ud=0,Cs=1/0,ii=null,pl=!1,zu=null,zi=null,sa=!1,Ii=null,ml=0,uo=0,Hu=null,Ba=-1,za=0;function Vt(){return Ve&6?dt():Ba!==-1?Ba:Ba=dt()}function Hi(t){return t.mode&1?Ve&2&&bt!==0?bt&-bt:Og.transition!==null?(za===0&&(za=L0()),za):(t=$e,t!==0||(t=window.event,t=t===void 0?16:O0(t.type)),t):1}function Un(t,e,n,i){if(50<uo)throw uo=0,Hu=null,Error(ee(185));Do(t,n,i),(!(Ve&2)||t!==Tt)&&(t===Tt&&(!(Ve&2)&&(Fl|=n),Mt===4&&Li(t,bt)),$t(t,i),n===1&&Ve===0&&!(e.mode&1)&&(Cs=dt()+500,Dl&&$i()))}function $t(t,e){var n=t.callbackNode;O1(t,e);var i=Qa(t,t===Tt?bt:0);if(i===0)n!==null&&Zd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Zd(n),e===1)t.tag===0?Fg(Vh.bind(null,t)):nm(Vh.bind(null,t)),Dg(function(){!(Ve&6)&&$i()}),n=null;else{switch(b0(i)){case 1:n=Ff;break;case 4:n=R0;break;case 16:n=$a;break;case 536870912:n=P0;break;default:n=$a}n=e2(n,Ym.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ym(t,e){if(Ba=-1,za=0,Ve&6)throw Error(ee(327));var n=t.callbackNode;if(ps()&&t.callbackNode!==n)return null;var i=Qa(t,t===Tt?bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=gl(t,i);else{e=i;var r=Ve;Ve|=2;var s=Km();(Tt!==t||bt!==e)&&(ii=null,Cs=dt()+500,vr(t,e));do try{i_();break}catch(a){qm(t,a)}while(!0);Kf(),hl.current=s,Ve=r,xt!==null?e=0:(Tt=null,bt=0,e=Mt)}if(e!==0){if(e===2&&(r=pu(t),r!==0&&(i=r,e=Vu(t,r))),e===1)throw n=Po,vr(t,0),Li(t,i),$t(t,dt()),n;if(e===6)Li(t,i);else{if(r=t.current.alternate,!(i&30)&&!t_(r)&&(e=gl(t,i),e===2&&(s=pu(t),s!==0&&(i=s,e=Vu(t,s))),e===1))throw n=Po,vr(t,0),Li(t,i),$t(t,dt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:lr(t,jt,ii);break;case 3:if(Li(t,i),(i&130023424)===i&&(e=ud+500-dt(),10<e)){if(Qa(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Vt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Mu(lr.bind(null,t,jt,ii),e);break}lr(t,jt,ii);break;case 4:if(Li(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-In(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*e_(i/1960))-i,10<i){t.timeoutHandle=Mu(lr.bind(null,t,jt,ii),i);break}lr(t,jt,ii);break;case 5:lr(t,jt,ii);break;default:throw Error(ee(329))}}}return $t(t,dt()),t.callbackNode===n?Ym.bind(null,t):null}function Vu(t,e){var n=co;return t.current.memoizedState.isDehydrated&&(vr(t,e).flags|=256),t=gl(t,e),t!==2&&(e=jt,jt=n,e!==null&&Gu(e)),t}function Gu(t){jt===null?jt=t:jt.push.apply(jt,t)}function t_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Nn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Li(t,e){for(e&=~cd,e&=~Fl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-In(e),i=1<<n;t[n]=-1,e&=~i}}function Vh(t){if(Ve&6)throw Error(ee(327));ps();var e=Qa(t,0);if(!(e&1))return $t(t,dt()),null;var n=gl(t,e);if(t.tag!==0&&n===2){var i=pu(t);i!==0&&(e=i,n=Vu(t,i))}if(n===1)throw n=Po,vr(t,0),Li(t,e),$t(t,dt()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,lr(t,jt,ii),$t(t,dt()),null}function fd(t,e){var n=Ve;Ve|=1;try{return t(e)}finally{Ve=n,Ve===0&&(Cs=dt()+500,Dl&&$i())}}function Ar(t){Ii!==null&&Ii.tag===0&&!(Ve&6)&&ps();var e=Ve;Ve|=1;var n=Sn.transition,i=$e;try{if(Sn.transition=null,$e=1,t)return t()}finally{$e=i,Sn.transition=n,Ve=e,!(Ve&6)&&$i()}}function dd(){on=as.current,nt(as)}function vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,bg(n)),xt!==null)for(n=xt.return;n!==null;){var i=n;switch(jf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&il();break;case 3:Es(),nt(Kt),nt(Bt),td();break;case 5:ed(i);break;case 4:Es();break;case 13:nt(st);break;case 19:nt(st);break;case 10:Zf(i.type._context);break;case 22:case 23:dd()}n=n.return}if(Tt=t,xt=t=Vi(t.current,null),bt=on=e,Mt=0,Po=null,cd=Fl=Er=0,jt=co=null,pr!==null){for(e=0;e<pr.length;e++)if(n=pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}pr=null}return t}function qm(t,e){do{var n=xt;try{if(Kf(),Fa.current=dl,fl){for(var i=ot.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}fl=!1}if(Mr=0,wt=St=ot=null,ao=!1,wo=0,ld.current=null,n===null||n.return===null){Mt=1,Po=e,xt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Ph(o);if(p!==null){p.flags&=-257,Lh(p,o,a,s,e),p.mode&1&&Rh(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){Rh(s,c,e),hd();break e}l=Error(ee(426))}}else if(it&&a.mode&1){var m=Ph(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Lh(m,o,a,s,e),Yf(As(l,a));break e}}s=l=As(l,a),Mt!==4&&(Mt=2),co===null?co=[s]:co.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=bm(s,l,e);Mh(s,u);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(zi===null||!zi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Dm(s,a,e);Mh(s,M);break e}}s=s.return}while(s!==null)}$m(n)}catch(P){e=P,xt===n&&n!==null&&(xt=n=n.return);continue}break}while(!0)}function Km(){var t=hl.current;return hl.current=dl,t===null?dl:t}function hd(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),Tt===null||!(Er&268435455)&&!(Fl&268435455)||Li(Tt,bt)}function gl(t,e){var n=Ve;Ve|=2;var i=Km();(Tt!==t||bt!==e)&&(ii=null,vr(t,e));do try{n_();break}catch(r){qm(t,r)}while(!0);if(Kf(),Ve=n,hl.current=i,xt!==null)throw Error(ee(261));return Tt=null,bt=0,Mt}function n_(){for(;xt!==null;)Zm(xt)}function i_(){for(;xt!==null&&!R1();)Zm(xt)}function Zm(t){var e=Jm(t.alternate,t,on);t.memoizedProps=t.pendingProps,e===null?$m(t):xt=e,ld.current=null}function $m(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Zg(n,e),n!==null){n.flags&=32767,xt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,xt=null;return}}else if(n=Kg(n,e,on),n!==null){xt=n;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);Mt===0&&(Mt=5)}function lr(t,e,n){var i=$e,r=Sn.transition;try{Sn.transition=null,$e=1,r_(t,e,n,i)}finally{Sn.transition=r,$e=i}return null}function r_(t,e,n,i){do ps();while(Ii!==null);if(Ve&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(k1(t,s),t===Tt&&(xt=Tt=null,bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sa||(sa=!0,e2($a,function(){return ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Sn.transition,Sn.transition=null;var o=$e;$e=1;var a=Ve;Ve|=4,ld.current=null,Qg(t,n),Xm(n,t),Ag(Su),Ja=!!xu,Su=xu=null,t.current=n,Jg(n),P1(),Ve=a,$e=o,Sn.transition=s}else t.current=n;if(sa&&(sa=!1,Ii=t,ml=r),s=t.pendingLanes,s===0&&(zi=null),D1(n.stateNode),$t(t,dt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(pl)throw pl=!1,t=zu,zu=null,t;return ml&1&&t.tag!==0&&ps(),s=t.pendingLanes,s&1?t===Hu?uo++:(uo=0,Hu=t):uo=0,$i(),null}function ps(){if(Ii!==null){var t=b0(ml),e=Sn.transition,n=$e;try{if(Sn.transition=null,$e=16>t?16:t,Ii===null)var i=!1;else{if(t=Ii,Ii=null,ml=0,Ve&6)throw Error(ee(331));var r=Ve;for(Ve|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(he=c;he!==null;){var f=he;switch(f.tag){case 0:case 11:case 15:lo(8,f,s)}var h=f.child;if(h!==null)h.return=f,he=h;else for(;he!==null;){f=he;var d=f.sibling,p=f.return;if(Vm(f),f===c){he=null;break}if(d!==null){d.return=p,he=d;break}he=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:lo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,he=u;break e}he=s.return}}var _=t.current;for(he=_;he!==null;){o=he;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,he=g;else e:for(o=_;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Nl(9,a)}}catch(P){ft(a,a.return,P)}if(a===o){he=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,he=M;break e}he=a.return}}if(Ve=r,$i(),Wn&&typeof Wn.onPostCommitFiberRoot=="function")try{Wn.onPostCommitFiberRoot(Tl,t)}catch{}i=!0}return i}finally{$e=n,Sn.transition=e}}return!1}function Gh(t,e,n){e=As(n,e),e=bm(t,e,1),t=Bi(t,e,1),e=Vt(),t!==null&&(Do(t,1,e),$t(t,e))}function ft(t,e,n){if(t.tag===3)Gh(t,t,n);else for(;e!==null;){if(e.tag===3){Gh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(zi===null||!zi.has(i))){t=As(n,t),t=Dm(e,t,1),e=Bi(e,t,1),t=Vt(),e!==null&&(Do(e,1,t),$t(e,t));break}}e=e.return}}function s_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Vt(),t.pingedLanes|=t.suspendedLanes&n,Tt===t&&(bt&n)===n&&(Mt===4||Mt===3&&(bt&130023424)===bt&&500>dt()-ud?vr(t,0):cd|=n),$t(t,e)}function Qm(t,e){e===0&&(t.mode&1?(e=Ko,Ko<<=1,!(Ko&130023424)&&(Ko=4194304)):e=1);var n=Vt();t=hi(t,e),t!==null&&(Do(t,e,n),$t(t,n))}function o_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Qm(t,n)}function a_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),Qm(t,n)}var Jm;Jm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Kt.current)qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return qt=!1,qg(t,e,n);qt=!!(t.flags&131072)}else qt=!1,it&&e.flags&1048576&&im(e,ol,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ka(t,e),t=e.pendingProps;var r=Ss(e,Bt.current);hs(e,n),r=id(null,e,i,t,r,n);var s=rd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zt(i)?(s=!0,rl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Qf(e),r.updater=Ul,e.stateNode=r,r._reactInternals=e,Pu(e,i,t,n),e=Du(null,e,i,!0,s,n)):(e.tag=0,it&&s&&Xf(e),Ht(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ka(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=c_(i),t=Rn(i,t),r){case 0:e=bu(null,e,i,t,n);break e;case 1:e=Ih(null,e,i,t,n);break e;case 11:e=bh(null,e,i,t,n);break e;case 14:e=Dh(null,e,i,Rn(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),bu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),Ih(t,e,i,r,n);case 3:e:{if(Fm(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,cm(t,e),cl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=As(Error(ee(423)),e),e=Uh(t,e,i,n,r);break e}else if(i!==r){r=As(Error(ee(424)),e),e=Uh(t,e,i,n,r);break e}else for(an=ki(e.stateNode.containerInfo.firstChild),ln=e,it=!0,Ln=null,n=am(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ys(),i===r){e=pi(t,e,n);break e}Ht(t,e,i,n)}e=e.child}return e;case 5:return um(e),t===null&&wu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,yu(i,r)?o=null:s!==null&&yu(i,s)&&(e.flags|=32),Nm(t,e),Ht(t,e,o,n),e.child;case 6:return t===null&&wu(e),null;case 13:return Om(t,e,n);case 4:return Jf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ms(e,null,i,n):Ht(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),bh(t,e,i,r,n);case 7:return Ht(t,e,e.pendingProps,n),e.child;case 8:return Ht(t,e,e.pendingProps.children,n),e.child;case 12:return Ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Je(al,i._currentValue),i._currentValue=o,s!==null)if(Nn(s.value,o)){if(s.children===r.children&&!Kt.current){e=pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ui(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Tu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Tu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ht(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,hs(e,n),r=yn(r),i=i(r),e.flags|=1,Ht(t,e,i,n),e.child;case 14:return i=e.type,r=Rn(i,e.pendingProps),r=Rn(i.type,r),Dh(t,e,i,r,n);case 15:return Im(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),ka(t,e),e.tag=1,Zt(i)?(t=!0,rl(e)):t=!1,hs(e,n),Lm(e,i,r),Pu(e,i,r,n),Du(null,e,i,!0,t,n);case 19:return km(t,e,n);case 22:return Um(t,e,n)}throw Error(ee(156,e.tag))};function e2(t,e){return T0(t,e)}function l_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(t,e,n,i){return new l_(t,e,n,i)}function pd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function c_(t){if(typeof t=="function")return pd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===If)return 11;if(t===Uf)return 14}return 2}function Vi(t,e){var n=t.alternate;return n===null?(n=vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ha(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")pd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $r:return xr(n.children,r,s,e);case Df:o=8,r|=8;break;case Jc:return t=vn(12,n,e,r|2),t.elementType=Jc,t.lanes=s,t;case eu:return t=vn(13,n,e,r),t.elementType=eu,t.lanes=s,t;case tu:return t=vn(19,n,e,r),t.elementType=tu,t.lanes=s,t;case u0:return Ol(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case l0:o=10;break e;case c0:o=9;break e;case If:o=11;break e;case Uf:o=14;break e;case Ti:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=vn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function xr(t,e,n,i){return t=vn(7,t,i,e),t.lanes=n,t}function Ol(t,e,n,i){return t=vn(22,t,i,e),t.elementType=u0,t.lanes=n,t.stateNode={isHidden:!1},t}function Sc(t,e,n){return t=vn(6,t,null,e),t.lanes=n,t}function yc(t,e,n){return e=vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function u_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tc(0),this.expirationTimes=tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function md(t,e,n,i,r,s,o,a,l){return t=new u_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qf(s),t}function f_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function t2(t){if(!t)return ji;t=t._reactInternals;e:{if(Rr(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(Zt(n))return tm(t,n,e)}return e}function n2(t,e,n,i,r,s,o,a,l){return t=md(n,i,!0,t,r,s,o,a,l),t.context=t2(null),n=t.current,i=Vt(),r=Hi(n),s=ui(i,r),s.callback=e??null,Bi(n,s,r),t.current.lanes=r,Do(t,r,i),$t(t,i),t}function kl(t,e,n,i){var r=e.current,s=Vt(),o=Hi(r);return n=t2(n),e.context===null?e.context=n:e.pendingContext=n,e=ui(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Bi(r,e,o),t!==null&&(Un(t,r,o,s),Na(t,r,o)),o}function _l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gd(t,e){Wh(t,e),(t=t.alternate)&&Wh(t,e)}function d_(){return null}var i2=typeof reportError=="function"?reportError:function(t){console.error(t)};function _d(t){this._internalRoot=t}Bl.prototype.render=_d.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));kl(t,e,null,null)};Bl.prototype.unmount=_d.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ar(function(){kl(null,t,null,null)}),e[di]=null}};function Bl(t){this._internalRoot=t}Bl.prototype.unstable_scheduleHydration=function(t){if(t){var e=U0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pi.length&&e!==0&&e<Pi[n].priority;n++);Pi.splice(n,0,t),n===0&&F0(t)}};function vd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xh(){}function h_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=_l(o);s.call(c)}}var o=n2(e,i,t,0,null,!1,!1,"",Xh);return t._reactRootContainer=o,t[di]=o.current,yo(t.nodeType===8?t.parentNode:t),Ar(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=_l(l);a.call(c)}}var l=md(t,0,!1,null,null,!1,!1,"",Xh);return t._reactRootContainer=l,t[di]=l.current,yo(t.nodeType===8?t.parentNode:t),Ar(function(){kl(e,l,n,i)}),l}function Hl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=_l(o);a.call(l)}}kl(e,o,t,r)}else o=h_(n,e,t,r,i);return _l(o)}D0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Js(e.pendingLanes);n!==0&&(Of(e,n|1),$t(e,dt()),!(Ve&6)&&(Cs=dt()+500,$i()))}break;case 13:Ar(function(){var i=hi(t,1);if(i!==null){var r=Vt();Un(i,t,1,r)}}),gd(t,1)}};kf=function(t){if(t.tag===13){var e=hi(t,134217728);if(e!==null){var n=Vt();Un(e,t,134217728,n)}gd(t,134217728)}};I0=function(t){if(t.tag===13){var e=Hi(t),n=hi(t,e);if(n!==null){var i=Vt();Un(n,t,e,i)}gd(t,e)}};U0=function(){return $e};N0=function(t,e){var n=$e;try{return $e=t,e()}finally{$e=n}};fu=function(t,e,n){switch(e){case"input":if(ru(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=bl(i);if(!r)throw Error(ee(90));d0(i),ru(i,r)}}}break;case"textarea":p0(t,n);break;case"select":e=n.value,e!=null&&cs(t,!!n.multiple,e,!1)}};y0=fd;M0=Ar;var p_={usingClientEntryPoint:!1,Events:[Uo,ts,bl,x0,S0,fd]},Gs={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},m_={bundleType:Gs.bundleType,version:Gs.version,rendererPackageName:Gs.rendererPackageName,rendererConfig:Gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=C0(t),t===null?null:t.stateNode},findFiberByHostInstance:Gs.findFiberByHostInstance||d_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oa.isDisabled&&oa.supportsFiber)try{Tl=oa.inject(m_),Wn=oa}catch{}}un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p_;un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vd(e))throw Error(ee(200));return f_(t,e,null,n)};un.createRoot=function(t,e){if(!vd(t))throw Error(ee(299));var n=!1,i="",r=i2;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=md(t,1,!1,null,null,n,!1,i,r),t[di]=e.current,yo(t.nodeType===8?t.parentNode:t),new _d(e)};un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=C0(e),t=t===null?null:t.stateNode,t};un.flushSync=function(t){return Ar(t)};un.hydrate=function(t,e,n){if(!zl(e))throw Error(ee(200));return Hl(null,t,e,!0,n)};un.hydrateRoot=function(t,e,n){if(!vd(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=i2;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=n2(e,null,t,1,n??null,r,!1,s,o),t[di]=e.current,yo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Bl(e)};un.render=function(t,e,n){if(!zl(e))throw Error(ee(200));return Hl(null,t,e,!1,n)};un.unmountComponentAtNode=function(t){if(!zl(t))throw Error(ee(40));return t._reactRootContainer?(Ar(function(){Hl(null,null,t,!1,function(){t._reactRootContainer=null,t[di]=null})}),!0):!1};un.unstable_batchedUpdates=fd;un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!zl(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return Hl(t,e,n,!1,i)};un.version="18.3.1-next-f1338f8080-20240426";function r2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r2)}catch(t){console.error(t)}}r2(),r0.exports=un;var g_=r0.exports,jh=g_;$c.createRoot=jh.createRoot,$c.hydrateRoot=jh.hydrateRoot;const __="_App_1h2gu_3",v_="_App_1h2gu_3",x_={App:__,app:v_},S_="_container_6kszd_3",y_="_text_6kszd_15",M_="_links_6kszd_27",E_="_link_6kszd_27",xi={container:S_,text:y_,links:M_,link:E_},A_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJhSURBVHgB7ZlPiE1RHMd/18hMzQJJQhaDwpKSZpLFpMhaSP5sSCkrK4tR/uxsJSElyVhjLIRYmrLQiJkaYzOR1IiExryfz+ncq+e9e2733XfvvLM4n/p0X+edc+7v+9695757n0ggEAgEAsWJXG+o6lY2B3A1LpDOUsNpHI6iaDT3KEIMYU39w9Q0lFZzlBJiM5tX4i+K6/hmpuob0w6ZH/hH/GUm9j+agpB0gs0uHBf/eIH91Pg19wgOsR48h7+088zgCYykKAzeiE+1cwzjSikD80ngUfys88cH3CNVwMTL8JZWuzTP4iXszaihO0+xN/ETHs7oM4jjWj6japf/tH0uUnt9+4kPJEeQsbqJn+GGjInPxhO3y3c8jV2OffXj67r+Y60GMZhVy6xe3Y7+6/GJFmcE+xxzL8bLONcwplCQhAkczBh3SO0hmZePuC9jvr047RjbVhCDOclv4wrHWHMiXtPsxaAW91nqmGMN3tds2g6S8AWPq+MCRfsOfJMy7i1ud4zpwlP4Lcf+SwuS8Bw3OeYxi8EZtYeQ0aw4rvNsi9oVKy+lBzH8xovYIy3CmF6114xZbY1KgiRM4k7JCX1343stRlOQMu/81uJjdnJXHYtBHGA53uHlI+yTkqjiFtbcHr9T+2v13/xqf68dE3t7cFBKZqFUwxK8ikco/krcdhIHpCKqCpIwIBUWX0+nn46URgjiGyGIb4QgvpEWZE78p6nGtCBT4j+TjQ1pQa6L/9xobEh79vuQzQWxT719w9R0nhpHGt/I+qNnG5v9uEr8+aPnHiFeSiAQCAQCJfMX+AMr/K5EcJAAAAAASUVORK5CYII=",C_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAONSURBVHgB7ZlLSFVBGMe/m6/KZySKBmVREm1yVS2lVgUSQUVEC4uWUiRBZES1aJPVLsplURDtKoiQUrKgIiqi7EUPlUwDix6mpuHXfzonuM6dM4/rHG1xf/DjXs6c+Wa+c8/MOTOXKEOGDDoS5BFmnomPVbAGVsMyWAKz4CAcgK9gJ+xIJBLf6H8Bnc+BW+BlOMz2jMEOuBMW0nSBxnPhbviBJ89XeASW0FSCBmvhG/ZPP9xIcYNGsuAxOM7xcpaD8RZLEgWwlaeO+7CUfBImcZennifekuFgVrrJ08c9mGfq5wyLXJrh6oiy0/A6/EnpMwpvwZNwRFG+MmwnfXAl1nL0wH6ZdF4hbIRf2J4hDqbcuUlxOjTnr6d0QMXZsEcT+KKiTjls4+Bh9xhegi2h4vtD+Au+gNWK+uc07fXCAnIFlfaznpaIejnJV1lRLiaOooiyM4Y2m6LizogIOAsfjaRHWRfvT2Pwc1QllA3C7xHFWaRnL/qWT7adAVuhadorJ/+Y2pwD7Z/8yPoGm+kmzyBml0W77bbBijgYrCb2kGcQc5dFu6Ns87bMwZRrQjykvK5lktpvt2i/Tq6nGiPLycxhDFimeDhkcU5KH1WJLCE9vbCV4uM2NI2/pfIBVSJlpEcsUccpJsJf+o7htAr5gCqRYtLTRfHTYyhPeaCqEonr3vdJrnxAlcgw6VlA8VNlKB+SD6gS6SM9Yr1uepVImzB2reG0fvmAKpG3pKeSXF4T3NlMisEs8Z5M4Iqss3ggiVfqSvIMYs4LY5vYZhOsmIPXABNiPT2fPIFYFWFMGxbaBm2zDOhlH0rECGPZ0OkSeDu7IbZu6tlh65OD5XF9WNeFJpdE8uGAFOAK3AEfaRoRt2S9RfwGtrt9ZUbYdWyiwgEpyG94FOZx9HrlGlu8FXOwb/yU3WkhVzj4VbqlQGJHZQUshR8VDdU4xN/AbvzgdGdKVKzj1O2g42GZSOhT0nHz3D4xdl7YOVsmt5BDgFNSwHcwOywTv0xD6DJyBHUe2OXw91a22UzUNibuZ3k6tp859LHbLZIQF87b/m8JT5wmxe0mBn4xTQKLRPrgYvIJB5sS8t8KYjp8Bp/Dq+SIIREx0VRTHCBwNjzB6v1gu20askpEHI9j3yylA2vg6xgSEX+m7uMYlwmqTvz7M7THQyLiYXseVtF0ESa0CR4kR1DnAmyGiyhDhgwZbPgDeZo0Py9W4vMAAAAASUVORK5CYII=",w_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHISURBVHgB7Zq/SgNBEMbnguBFTMAHELHwDewEbcRGY6FBsbe00RewSkp9CK1sBLVQRAVBK5/AxkL81yZgEIv1C0kRN3OXm0u4myT7g48Je7Ob+bI3l1wSIofDEQtjTAG6gyomfeo13EIFqYmy0UuJq9njdgLhjHSz6nneeetAhknaI/3s2gPcjlQRxkk3VexIvnWAM2KoD4CRf7VnaEAYWiPv0Bo1eigHFaEvUoC0RxZwat5b+UsIV5Qwdo9IjfiY/2Pl+wg1Sphum32eGZsjBUiNHGMHNqBcU+sYOyIFuPcRbQynES8AYc4ltAVNQaPQBDQL7UOf1CvCbgSizAnJ+YAWKfy589CpiQClaGSGIoC8EehaakR01bJPI25OUI4ELDeJ8Az5FLGWVJq9/qqHHUeNrwgnJCBRIzCwA73h4S/iC7Qdkt7d7bbkvOTmhORsBixbDMifjlMLW1SPjTwGLPsQkO9Lakms2ZHyjZBlDtUwZazTup1qSbJHssJxEe6zljacEW04I9pwRrQxMEbctyja4IxUST8Ve4Az8kT6aauRM3JA+jm0B9qMoIcuEMqkl1Kzxmjg4rViGj/Sa/nDwA20TA6HIxZ/fJauS3Fx+WYAAAAASUVORK5CYII=",T_="/SadeepPortfolio/assets/IMG_0360-0zx5WnAu.jpg",R_="/SadeepPortfolio/assets/D_UCSC-9-iBTxR1.png",P_="/SadeepPortfolio/assets/SSC-cWtBteWQ.png",L_="/SadeepPortfolio/assets/UCSC-BmAnkN-y.png",b_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEOSURBVHgB7ZdtDoMgDIa7XWDLPIBX1RPOnaijERJmWsZHhcT0SfhjYnnziBQADMMwjCwQ8ebGExqhGlQLtHFFFzc2NyaoxL37cuNNtUALb47CBSjkDIXQOz5cYFEx6T/Jhr8UmYzMxXw0lkyYYBJC/jXJmAvhqpdKaqIikwlzxUskN2S2yW7mhImTJrubY0KKJoeZY0JKJseZY0JyJseaY0LOQkgVc3fQATOf9QX5v/W4Jsd8YpT/1qqOox1O3OewouNoh5PMxRt1de9uDZfdIbqbxIoO0c0kNvTW003ifmBt6q0Jk+0HVtyP/GupOabOfAhJNfUuT75gU2+NTK6gDepdOx94xrXTMAzjonwB63HGEH1flEQAAAAASUVORK5CYII=",D_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACkSURBVHgB7dWxDcIwFATQMxsg6PEK7AEbwHrZAVGwyqegooA2lXMpHFkpHSXfxT3p5Pyk+UWsA0REVhXKIaW053FjDvDxYZ4hBMsvpgW5XOTxYiJ8GXPmkv9x2BUfLvBfbhSZex7KBRPa0eeHcsGOecOfMY88zC/JiceVOcLHl+n4//0g0gg1SQWDmmQ5NUktNYk0R01SwaAmWU5NUktNIiJbGwBK00gfRw3LTgAAAABJRU5ErkJggg==",I_="/SadeepPortfolio/assets/Amoral1-Bi2Vv-HY.png",U_="/SadeepPortfolio/assets/MaternEase-DWs9io-w.jpg",N_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='url(%23paint0_linear_158_100)'%20rx='60'/%3e%3cg%20filter='url(%23filter0_d_158_100)'%3e%3cpath%20fill='url(%23paint1_linear_158_100)'%20d='M131.97%20196.157C161.646%20196.157%20179.529%20181.626%20179.529%20157.66C179.529%20139.543%20166.77%20126.428%20147.823%20124.351V123.597C161.743%20121.332%20172.666%20108.405%20172.666%2093.9689C172.666%2073.3992%20156.427%2060%20131.68%2060H76V196.157H131.97ZM97.6533%2077.2674H126.46C142.12%2077.2674%20151.013%2084.2497%20151.013%2096.8935C151.013%20110.387%20140.67%20117.935%20121.917%20117.935H97.6533V77.2674V77.2674ZM97.6533%20178.89V134.071H126.266C146.76%20134.071%20157.393%20141.619%20157.393%20156.339C157.393%20171.058%20147.05%20178.89%20127.523%20178.89H97.6533V178.89Z'/%3e%3cpath%20stroke='%23fff'%20stroke-width='2'%20d='M131.97%20196.157C161.646%20196.157%20179.529%20181.626%20179.529%20157.66C179.529%20139.543%20166.77%20126.428%20147.823%20124.351V123.597C161.743%20121.332%20172.666%20108.405%20172.666%2093.9689C172.666%2073.3992%20156.427%2060%20131.68%2060H76V196.157H131.97ZM97.6533%2077.2674H126.46C142.12%2077.2674%20151.013%2084.2497%20151.013%2096.8935C151.013%20110.387%20140.67%20117.935%20121.917%20117.935H97.6533V77.2674V77.2674ZM97.6533%20178.89V134.071H126.266C146.76%20134.071%20157.393%20141.619%20157.393%20156.339C157.393%20171.058%20147.05%20178.89%20127.523%20178.89H97.6533V178.89Z'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_158_100'%20width='137.529'%20height='170.157'%20x='59'%20y='47'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20result='hardAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='4'/%3e%3cfeGaussianBlur%20stdDeviation='8'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.15%200'/%3e%3cfeBlend%20in2='BackgroundImageFix'%20mode='normal'%20result='effect1_dropShadow_158_100'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow_158_100'%20mode='normal'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_158_100'%20x1='0'%20x2='256'%20y1='0'%20y2='256'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%239013FE'/%3e%3cstop%20offset='1'%20stop-color='%236B11F4'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_158_100'%20x1='85.793'%20x2='148.541'%20y1='68.962'%20y2='175.084'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23fff'/%3e%3cstop%20offset='1'%20stop-color='%23F1E5FC'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",F_="data:image/svg+xml,%3csvg%20width='256'%20height='256'%20viewBox='0%200%20256%20256'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='256'%20height='256'%20rx='60'%20fill='%23394AAB'/%3e%3cpath%20d='M134.001%2033C169.144%2033%20199.828%2052.0863%20216.262%2080.4561L216.102%2080.183L174.753%20103.991C166.607%2090.1977%20151.672%2080.8892%20134.54%2080.6975L134.001%2080.6945C107.875%2080.6945%2086.6945%20101.874%2086.6945%20127.999C86.6945%20136.543%2088.9723%20144.552%2092.9335%20151.469C101.088%20165.704%20116.416%20175.306%20134.001%20175.306C151.693%20175.306%20167.109%20165.582%20175.222%20151.195L175.025%20151.54L216.311%20175.458C200.057%20203.588%20169.794%20222.615%20135.059%20222.994L134.001%20223C98.746%20223%2067.9753%20203.796%2051.582%20175.276C43.5791%20161.353%2039%20145.212%2039%20127.999C39%2075.5334%2081.5323%2033%20134.001%2033Z'%20fill='white'/%3e%3c/svg%3e",O_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%2300599C'%20rx='60'/%3e%3cpath%20fill='%23fff'%20d='M110.759%20210.517C65.1254%20210.517%2028%20173.392%2028%20127.759C28%2082.1254%2065.1254%2045%20110.759%2045C140.204%2045%20167.667%2060.8458%20182.427%2086.3533L146.611%20107.079C139.224%2094.3111%20125.485%2086.3793%20110.759%2086.3793C87.9416%2086.3793%2069.3793%20104.942%2069.3793%20127.759C69.3793%20150.575%2087.9416%20169.138%20110.759%20169.138C125.486%20169.138%20139.225%20161.206%20146.613%20148.436L182.429%20169.161C167.669%20194.671%20140.206%20210.517%20110.759%20210.517Z'/%3e%3cpath%20fill='%23fff'%20d='M193.517%20123.161H184.321V113.965H175.127V123.161H165.931V132.356H175.127V141.552H184.321V132.356H193.517V123.161Z'/%3e%3cpath%20fill='%23fff'%20d='M228%20123.161H218.804V113.965H209.61V123.161H200.414V132.356H209.61V141.552H218.804V132.356H228V123.161Z'/%3e%3c/svg%3e",k_="data:image/svg+xml,%3csvg%20width='256'%20height='256'%20viewBox='0%200%20256%20256'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='256'%20height='256'%20rx='60'%20fill='%230277BD'/%3e%3cpath%20d='M53.7527%20102.651L56.6155%20134.593H128.096V102.651H53.7527Z'%20fill='%23EBEBEB'/%3e%3cpath%20d='M128.095%2038H127.985H48L50.9036%2069.9423H128.095V38Z'%20fill='%23EBEBEB'/%3e%3cpath%20d='M128.095%20218.841V185.608L127.955%20185.645L92.3813%20176.04L90.1072%20150.564H72.821H58.0425L62.5175%20200.718L127.948%20218.882L128.095%20218.841Z'%20fill='%23EBEBEB'/%3e%3cpath%20d='M167.318%20134.593L163.61%20176.019L127.985%20185.635V218.866L193.468%20200.718L193.948%20195.321L201.454%20111.229L202.233%20102.651L208%2038H127.985V69.9423H172.994L170.088%20102.651H127.985V134.593H167.318Z'%20fill='white'/%3e%3c/svg%3e",B_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%235865F2'%20rx='60'/%3e%3cg%20clip-path='url(%23clip0_158_82)'%3e%3cpath%20fill='%23fff'%20d='M197.308%2064.7966C184.561%2058.9476%20170.892%2054.6383%20156.599%2052.1701C156.339%2052.1225%20156.079%2052.2415%20155.945%2052.4796C154.187%2055.6064%20152.239%2059.6856%20150.876%2062.8918C135.503%2060.5904%20120.21%2060.5904%20105.153%2062.8918C103.789%2059.6143%20101.771%2055.6064%20100.005%2052.4796C99.8707%2052.2495%2099.6107%2052.1305%2099.3504%2052.1701C85.0659%2054.6304%2071.3963%2058.9397%2058.6411%2064.7966C58.5307%2064.8442%2058.4361%2064.9236%2058.3732%2065.0267C32.4449%20103.763%2025.3421%20141.547%2028.8265%20178.863C28.8423%20179.046%2028.9447%20179.22%2029.0867%20179.331C46.1934%20191.894%2062.7642%20199.521%2079.0273%20204.576C79.2876%20204.655%2079.5634%20204.56%2079.729%20204.346C83.5761%20199.092%2087.0054%20193.553%2089.9456%20187.728C90.1192%20187.386%2089.9535%20186.982%2089.5989%20186.847C84.1594%20184.783%2078.98%20182.268%2073.9977%20179.411C73.6037%20179.181%2073.5721%20178.617%2073.9347%20178.347C74.9831%20177.561%2076.0318%20176.744%2077.033%20175.919C77.2141%20175.768%2077.4665%20175.736%2077.6794%20175.831C110.411%20190.775%20145.846%20190.775%20178.191%20175.831C178.404%20175.728%20178.657%20175.76%20178.846%20175.911C179.847%20176.736%20180.895%20177.561%20181.952%20178.347C182.314%20178.617%20182.291%20179.181%20181.897%20179.411C176.914%20182.323%20171.735%20184.783%20166.288%20186.839C165.933%20186.974%20165.775%20187.386%20165.949%20187.728C168.952%20193.545%20172.381%20199.084%20176.157%20204.338C176.315%20204.56%20176.599%20204.655%20176.859%20204.576C193.201%20199.521%20209.772%20191.894%20226.879%20179.331C227.028%20179.22%20227.123%20179.053%20227.139%20178.871C231.309%20135.73%20220.154%2098.2554%20197.568%2065.0346C197.513%2064.9236%20197.419%2064.8442%20197.308%2064.7966ZM94.8335%20156.142C84.9792%20156.142%2076.8594%20147.095%2076.8594%20135.984C76.8594%20124.873%2084.8217%20115.826%2094.8335%20115.826C104.924%20115.826%20112.965%20124.953%20112.807%20135.984C112.807%20147.095%20104.845%20156.142%2094.8335%20156.142ZM161.29%20156.142C151.435%20156.142%20143.316%20147.095%20143.316%20135.984C143.316%20124.873%20151.278%20115.826%20161.29%20115.826C171.38%20115.826%20179.421%20124.953%20179.264%20135.984C179.264%20147.095%20171.38%20156.142%20161.29%20156.142Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_158_82'%3e%3crect%20width='200'%20height='154.93'%20fill='%23fff'%20transform='translate(28%2051)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",z_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23242938'%20rx='60'/%3e%3cg%20clip-path='url(%23clip0_4_180)'%3e%3cpath%20fill='%230ACF83'%20d='M94.3467%20228C112.747%20228%20127.68%20213.067%20127.68%20194.667V161.333H94.3467C75.9467%20161.333%2061.0133%20176.267%2061.0133%20194.667C61.0133%20213.067%2075.9467%20228%2094.3467%20228Z'/%3e%3cpath%20fill='%23A259FF'%20d='M61.0133%20128C61.0133%20109.6%2075.9467%2094.6667%2094.3467%2094.6667H127.68V161.333H94.3467C75.9467%20161.333%2061.0133%20146.4%2061.0133%20128Z'/%3e%3cpath%20fill='%23F24E1E'%20d='M61.0133%2061.3333C61.0133%2042.9333%2075.9467%2028%2094.3467%2028H127.68V94.6667H94.3467C75.9467%2094.6667%2061.0133%2079.7333%2061.0133%2061.3333Z'/%3e%3cpath%20fill='%23FF7262'%20d='M127.68%2028H161.013C179.413%2028%20194.347%2042.9333%20194.347%2061.3333C194.347%2079.7333%20179.413%2094.6667%20161.013%2094.6667H127.68V28Z'/%3e%3cpath%20fill='%231ABCFE'%20d='M194.347%20128C194.347%20146.4%20179.413%20161.333%20161.013%20161.333C142.613%20161.333%20127.68%20146.4%20127.68%20128C127.68%20109.6%20142.613%2094.6667%20161.013%2094.6667C179.413%2094.6667%20194.347%20109.6%20194.347%20128Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4_180'%3e%3crect%20width='133.36'%20height='200'%20fill='%23fff'%20transform='translate(61%2028)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",H_="data:image/svg+xml,%3csvg%20width='256'%20height='256'%20viewBox='0%200%20256%20256'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='256'%20height='256'%20rx='60'%20fill='%23242938'/%3e%3cpath%20d='M128.001%2030C72.7791%2030%2028%2074.7708%2028%20130.001C28%20174.184%2056.6533%20211.668%2096.3867%20224.891C101.384%20225.817%20103.219%20222.722%20103.219%20220.081C103.219%20217.696%20103.126%20209.819%20103.083%20201.463C75.2631%20207.512%2069.3927%20189.664%2069.3927%20189.664C64.8437%20178.105%2058.2894%20175.032%2058.2894%20175.032C49.2163%20168.825%2058.9733%20168.953%2058.9733%20168.953C69.0151%20169.658%2074.3026%20179.258%2074.3026%20179.258C83.2217%20194.546%2097.6965%20190.126%20103.403%20187.571C104.301%20181.107%20106.892%20176.696%20109.752%20174.199C87.5405%20171.67%2064.1913%20163.095%2064.1913%20124.778C64.1913%20113.86%2068.0977%20104.939%2074.4947%2097.9362C73.4564%2095.4175%2070.0335%2085.2465%2075.4635%2071.4722C75.4635%2071.4722%2083.8609%2068.7845%20102.971%2081.7226C110.948%2079.5069%20119.502%2078.3958%20128.001%2078.3577C136.499%2078.3958%20145.061%2079.5069%20153.052%2081.7226C172.139%2068.7845%20180.525%2071.4722%20180.525%2071.4722C185.968%2085.2465%20182.544%2095.4175%20181.505%2097.9362C187.917%20104.939%20191.797%20113.86%20191.797%20124.778C191.797%20163.187%20168.403%20171.644%20146.135%20174.119C149.722%20177.223%20152.918%20183.308%20152.918%20192.638C152.918%20206.018%20152.802%20216.787%20152.802%20220.081C152.802%20222.742%20154.602%20225.86%20159.671%20224.878C199.383%20211.64%20228%20174.169%20228%20130.001C228%2074.7708%20183.227%2030%20128.001%2030ZM65.4536%20172.453C65.2333%20172.95%2064.4517%20173.099%2063.7396%20172.758C63.0143%20172.432%2062.6069%20171.754%2062.8421%20171.256C63.0574%20170.744%2063.8406%20170.602%2064.5643%20170.945C65.2913%20171.271%2065.7053%20171.955%2065.4536%20172.453ZM70.3725%20176.842C69.8956%20177.285%2068.9633%20177.079%2068.3307%20176.38C67.6766%20175.683%2067.554%20174.751%2068.0376%20174.302C68.5294%20173.86%2069.4336%20174.067%2070.0893%20174.764C70.7434%20175.47%2070.8709%20176.395%2070.3725%20176.842ZM73.7471%20182.458C73.1344%20182.884%2072.1325%20182.485%2071.5132%20181.595C70.9004%20180.706%2070.9004%20179.64%2071.5264%20179.212C72.1474%20178.785%2073.1344%20179.169%2073.762%20180.052C74.373%20180.956%2074.373%20182.023%2073.7471%20182.458ZM79.4542%20188.962C78.9061%20189.566%2077.7386%20189.404%2076.8841%20188.579C76.0098%20187.773%2075.7663%20186.629%2076.3161%20186.024C76.8709%20185.418%2078.045%20185.589%2078.9061%20186.407C79.7738%20187.211%2080.0387%20188.364%2079.4542%20188.962ZM86.8301%20191.157C86.5883%20191.941%2085.4639%20192.297%2084.3312%20191.964C83.2002%20191.621%2082.46%20190.704%2082.6885%20189.912C82.9237%20189.124%2084.053%20188.753%2085.194%20189.109C86.3234%20189.45%2087.0652%20190.361%2086.8301%20191.157ZM95.2242%20192.089C95.2523%20192.913%2094.2919%20193.597%2093.1029%20193.612C91.9073%20193.639%2090.9402%20192.971%2090.9269%20192.16C90.9269%20191.327%2091.8659%20190.65%2093.0615%20190.63C94.2505%20190.607%2095.2242%20191.269%2095.2242%20192.089ZM103.47%20191.773C103.613%20192.577%20102.787%20193.404%20101.606%20193.624C100.445%20193.836%2099.3702%20193.339%2099.2229%20192.541C99.0788%20191.716%2099.92%20190.89%20101.079%20190.676C102.262%20190.471%20103.32%20190.955%20103.47%20191.773Z'%20fill='white'/%3e%3c/svg%3e",V_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23242938'%20rx='60'/%3e%3cpath%20fill='%2300D8FF'%20d='M128.001%20146.951C138.305%20146.951%20146.657%20138.598%20146.657%20128.295C146.657%20117.992%20138.305%20109.639%20128.001%20109.639C117.698%20109.639%20109.345%20117.992%20109.345%20128.295C109.345%20138.598%20117.698%20146.951%20128.001%20146.951Z'/%3e%3cpath%20fill-rule='evenodd'%20stroke='%2300D8FF'%20stroke-width='8.911'%20d='M128.002%2090.3633C153.05%2090.3633%20176.319%2093.9575%20193.864%2099.9976C215.003%20107.275%20228%20118.306%20228%20128.295C228%20138.704%20214.226%20150.423%20191.525%20157.944C174.363%20163.63%20151.779%20166.598%20128.002%20166.598C103.624%20166.598%2080.5389%20163.812%2063.1834%20157.881C41.2255%20150.376%2028%20138.506%2028%20128.295C28%20118.387%2040.4096%20107.441%2061.2515%20100.175C78.8617%2094.0353%20102.705%2090.3633%20127.998%2090.3633H128.002Z'%20clip-rule='evenodd'/%3e%3cpath%20fill-rule='evenodd'%20stroke='%2300D8FF'%20stroke-width='8.911'%20d='M94.9811%20109.438C107.495%2087.7402%20122.232%2069.3783%20136.23%2057.1971C153.094%2042.5206%20169.144%2036.7728%20177.796%2041.7623C186.813%2046.9623%20190.084%2064.7496%20185.259%2088.1712C181.614%20105.879%20172.9%20126.925%20161.021%20147.523C148.842%20168.641%20134.897%20187.247%20121.09%20199.315C103.619%20214.587%2086.7284%20220.114%2077.8833%20215.013C69.3003%20210.067%2066.0181%20193.846%2070.1356%20172.161C73.6145%20153.838%2082.3451%20131.349%2094.977%20109.438L94.9811%20109.438Z'%20clip-rule='evenodd'/%3e%3cpath%20fill-rule='evenodd'%20stroke='%2300D8FF'%20stroke-width='8.911'%20d='M95.0123%20147.578C82.4633%20125.904%2073.9194%20103.962%2070.3531%2085.7517C66.0602%2063.8109%2069.0954%2047.0355%2077.7401%2042.0315C86.7485%2036.8163%20103.792%2042.866%20121.674%2058.7437C135.194%2070.7479%20149.077%2088.8052%20160.99%20109.383C173.204%20130.481%20182.358%20151.856%20185.919%20169.844C190.425%20192.608%20186.778%20210.001%20177.941%20215.116C169.367%20220.08%20153.676%20214.825%20136.945%20200.427C122.809%20188.263%20107.685%20169.468%2095.0123%20147.578Z'%20clip-rule='evenodd'/%3e%3c/svg%3e",G_="data:image/svg+xml,%3csvg%20width='256'%20height='256'%20viewBox='0%200%20256%20256'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='256'%20height='256'%20rx='60'%20fill='%23242938'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M65.1865%20102.421C66.9311%20104.826%2081.6418%20109.362%20103.585%20114.086C125.529%20118.292%20148.349%20134.898%20166.097%20129.777C178.101%20126.307%20191.124%2095.3864%20191.124%2090.794V90.3225C191.124%2087.1163%20188.719%2084.542%20184.636%2082.4014C167.898%2073.8484%20164.729%2070.6988%20158.524%2072.4056C126.312%2081.2981%2069.4394%2076.7528%2065.1865%20102.421Z'%20fill='%23380D09'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M65.1865%20165.206C66.9311%20167.648%2081.6418%20172.146%20103.585%20176.88C128.103%20181.35%20149.424%20195.919%20167.181%20190.79C179.185%20187.319%20191.124%20158.181%20191.124%20153.579V153.126C191.124%20149.93%20188.719%20147.346%20184.636%20145.215C171.868%20138.425%20154.997%20130.947%20148.802%20132.654C116.533%20141.527%2073.4%20143.479%2065.1865%20165.206Z'%20fill='%23380D09'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M65.0073%20115.916V116.368C64.9976%20116.217%2064.9976%20116.066%2065.0073%20115.916V115.916Z'%20fill='%23555555'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M167.134%2040.1364C137.467%2048.7082%2090.4021%2053.5458%2065.0449%2053.5458V101.969C65.053%20102.135%2065.116%20102.294%2065.2241%20102.421C82.5281%20102.421%20135.949%2096.7633%20168.18%2087.8991C173.802%2086.4684%20179.313%2084.6374%20184.673%2082.4203C188.615%2080.6475%20191.161%2078.7803%20191.161%2076.8378V28C191.123%2032.6018%20179.138%2036.6756%20167.134%2040.1364V40.1364Z'%20fill='%23DE3423'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M167.134%20102.931C149.377%20108.051%20125.416%20111.861%20103.585%20114.086C88.931%20115.586%2075.2387%20116.368%2065.0449%20116.368V164.753C65.053%20164.92%2065.116%20165.079%2065.2241%20165.206C82.5281%20165.206%20135.949%20159.548%20168.18%20150.693C173.8%20149.258%20179.312%20147.428%20184.673%20145.214C188.615%20143.432%20191.161%20141.575%20191.161%20139.632V90.7942C191.123%2095.3866%20179.138%2099.4603%20167.134%20102.931V102.931Z'%20fill='%23DE3423'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M167.134%20165.762C149.377%20170.883%20125.416%20174.683%20103.585%20176.918C88.9123%20178.417%2075.2011%20179.2%2065.0073%20179.2V228C82.1321%20228%20135.826%20222.389%20168.143%20213.487C180.053%20210.206%20191.124%20206.471%20191.124%20202.416V153.579C191.124%20158.218%20179.138%20162.254%20167.134%20165.762V165.762Z'%20fill='%23DE3423'/%3e%3c/svg%3e",W_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23242938'%20rx='60'/%3e%3cpath%20fill='%235FB832'%20d='M209.545%20171.821C184.93%20204.618%20132.347%20193.547%2098.6353%20195.139C98.6353%20195.139%2092.6673%20195.471%2086.6563%20196.461C86.6563%20196.461%2088.9292%20195.491%2091.8279%20194.492C115.506%20186.304%20126.695%20184.659%20141.082%20177.269C168.114%20163.421%20195.018%20133.259%20200.492%20101.925C190.202%20132.061%20158.909%20157.998%20130.415%20168.53C110.911%20175.727%2075.6419%20182.731%2075.6368%20182.734C75.6533%20182.759%2074.2312%20181.996%2074.2113%20181.979C50.2253%20170.309%2049.5332%20118.359%2093.0965%20101.613C112.197%2094.2661%20130.466%2098.3015%20151.114%2093.387C173.136%2088.151%20198.642%2071.644%20209.009%2050.063C220.631%2084.5351%20234.592%20138.467%20209.545%20171.821V171.821ZM209.973%2039.3809C207.043%2046.343%20203.466%2052.6167%20199.344%2058.2281C181.197%2039.6038%20155.868%2027.9999%20127.871%2027.9999C72.7989%2027.9999%2028%2072.8039%2028%20127.866C28%20156.731%2040.3209%20182.764%2059.9644%20201.012L62.1514%20202.949C58.4993%20199.971%2057.9377%20194.608%2060.8977%20190.952C63.8759%20187.295%2069.2444%20186.728%2072.8983%20189.69C76.562%20192.658%2077.1202%20198.035%2074.1538%20201.697C71.1984%20205.361%2065.8202%20205.914%2062.1614%20202.958L63.6497%20204.276C81.0254%20218.906%20103.424%20227.743%20127.871%20227.743C180.511%20227.743%20223.736%20186.778%20227.436%20135.073C230.176%20109.757%20222.699%2077.6106%20209.973%2039.3809Z'/%3e%3c/svg%3e",X_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23242938'%20rx='60'/%3e%3cpath%20fill='%232489CA'%20d='M33.7158%20100.208C33.7158%20100.208%2028.9814%2096.795%2034.6627%2092.2381L47.8994%2080.402C47.8994%2080.402%2051.6869%2076.4172%2055.6915%2079.8891L177.84%20172.368V216.714C177.84%20216.714%20177.781%20223.678%20168.844%20222.908L33.7158%20100.208Z'/%3e%3cpath%20fill='%231070B3'%20d='M65.1997%20128.792L33.7157%20157.415C33.7157%20157.415%2030.4805%20159.822%2033.7157%20164.123L48.3333%20177.418C48.3333%20177.418%2051.8052%20181.147%2056.9341%20176.905L90.3119%20151.596L65.1997%20128.792Z'/%3e%3cpath%20fill='%230877B9'%20d='M120.474%20129.029L178.215%2084.9391L177.84%2040.83C177.84%2040.83%20175.374%2031.2033%20167.148%2036.2139L90.312%20106.145L120.474%20129.029Z'/%3e%3cpath%20fill='%233C99D4'%20d='M168.844%20222.968C172.198%20226.4%20176.262%20225.276%20176.262%20225.276L221.259%20203.103C227.019%20199.177%20226.21%20194.305%20226.21%20194.305V61.8982C226.21%2056.0788%20220.252%2054.0667%20220.252%2054.0667L181.253%2035.267C172.731%2030%20167.148%2036.2139%20167.148%2036.2139C167.148%2036.2139%20174.328%2031.0455%20177.84%2040.83V215.905C177.84%20217.109%20177.583%20218.292%20177.071%20219.358C176.045%20221.429%20173.816%20223.362%20168.47%20222.553L168.844%20222.968Z'/%3e%3c/svg%3e",j_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAiZSURBVHgB7Vzdb1xHFT9n7trrpFl/JJHb4IjGCWlALR+ChGIaVZCKhyK1qHxVPCABT5AgpPIXROK5EkIkPCEeKhXKQwlC4rOEqJSWtCqCBjWtm8Rx47Vrr3e9u1577fXeOT2zayWufe/MmXptX2f7k652d+7ZuzO/e+bM+Zi7CKsweLb8KAD+HtocmuiB0VPdL65sU2uFam/BB4AgWMitbltDFmHqHfgAUKwFk6vb1pD19lRPiV+WoJ1BUC/8aE95dfMasuA0arZZeWhnKMhHN0cinIU2BhFNRrXHkKXa2m4hYCmqPZosjGa2jTAT1RhJFqthDtoYhJCNao/WLIL29rUIh6Oao8lSagLaGKSXRqPaI8kKAKagjYGUktuspbDW1gY+lVKRq2EqqrEr2FFcohAk2MlXuGc3QtIxXCCYr8tkFzshUlkiyZqv7ih0dFVAgv3dCM882glJx1d+V4M38iSSzdwYmY5qj5yGYz/GKiKIvPi5GmwLFKpi0crrp++LHJWK+wYRFkCAOaFqbzUKVZlWEWCsj6ksXyuBALM1Alk3tg5zS5xGEHYSLZ5APFlEoyBAqJudSTLy8inI0NNxZyyaBcMgRCXhdquwIL+ZHOrEjjuWLDbw4yBENeGpwjmP/pGOH3cq7gTPrhmp9/TMmyEM7LolTctH4z3daqSV5yhCdmU7rWpffqNvvr2lLQ8PBnCoN763Mz6aFahYmxVLFutc4WbPHPjVJZkDu1H4dL+ykjValpOlwtDfwNeJtk0wnU7Zz18rycnSgLHeeCxZaQ0iPysJ6O60Gwyfaag0+K+GQQqLsA3QySmS3V12mXmf1XpXJjalHkvWcF/GpCkS758brepO2zWrsAAisP6F178Dsc54vJ/1TWSrjTOQcPSxVnUou0xeOA3R5N4RY4XtP7MNjHzGoVUhyZ1mdlfGbOet6wgCXeHA8hOwxTB0sJMMio9g+bV5IPSl7d8tehh3M17beStZhJgFIX5yPMVTAiGlmtOi8Rosv/LAUkGzPcCmjFo1eFzxPnjPZ2y8f7/pxVzVwyFV9vHayQKYlnby2F0KBnuTlzEtCo27Affeum3BarOIlqZBiIn5ZGYexioeDilpq29pJSuAQJTTMhguCGOjTUbWZ9cG2rct2DULAnFlOjubTM3KV31uYmh1leyuA9bEG0SKi5BITHsk/nhBKdvOW8lS1CV2SqfmIZEwaW8pMOy01kutZKWhIiYrl1ADX/aIC8PcpNXsONf6wbOzJqDuccmZgPbgsutAKxJ7N19pbUIw9vNq+ajPYOJCgHOP2WuWx5+uSW/k1MjJzJ02AUcmqIHLfHzOJVTjSFJaxGwVMo5KuLkJM1VxXHjFJaNcAnyVMUgoehxx4XhFXgLjNLUzf+ckizSVIaHYvcN+PuvhkDJbzs0wzmnIcZl45/J9e/E9hYvVGOeE7aXp1jmv++6wa1Zx0SMu5DXKJeO2WZov4p6sDXz9SADf+lgQe/6P10J44nzryOpzZEhzfu6Mc+V30qCVFrsPrlz3gZ7WBtr7dtm776NZbJudmuUkK6BAXLhwVX7v3Nlasj7qWA1LHlGF0u4d2k6yQiBxyONyAHs536VayNdAxn4xH0eZc1nOkNutWUGnOJguOXJHJpnnKltJ0ZVq7jq0wWcahnqpBa5DUC+zdzcHAkwKDGpPGlqCfsGU9tjjMB9Ch3MGOcnard8wjIuMfJmD1tBxM798SK3bdu1h/+qxw4FVRpN8q5F5SCI7nXGOUdTrwTOzr7Hkx11yuzhM+/vjndCbdochr+U0HwQvjGl4ng9tITnNvAx9SMHx/QqO3oVwuM/k8V3GneALv64JN93SyyMnu+93SUliQ0OpKYk5yTIlJ7MC9TqmmilAfLJf8QHw7XsDqDNT/5kk+FdWw4UbGt4qUCMof+RQ0CDHOLvplJ825lir5sUlYhRFKSKyfAoXJeM+dPsNzGjJZ/eZQ8ETR5uah+tcB0qLXkG9yMyIfHPuuHjfw6TXlsTY31s3fHYjcqFC9JCEjCwCcZWnvLi5aZo45L2Kq7L4V0QWJzo8yIJEIF/1yjiIohSZgSeckJaEf/pq2DDSDwwo+OKHVWPl2iyMlAj+cDWEl8cJXs/7ZBz0DYmc0MDTFemQFzjb9u9xc2h48pVmGuVeXs2+xhkJs6r1tzA+NB76i1mC566HvJKSX+C8AmFHhzNLaiAiKxWmsqFMB9dgYo4ax3OjzdSMCX6Nxn1+IGDXARs+lBRmv/1l1piLEwTnhkN4u0W1ylTnHSLNkt3m31JwIF9ZZEPvMTQ3zAaRh+42xCnWOtXQvJUwLsSVooZXmBzjuL7EGrtQb/kCokemnuyA06ediTbxnBg8U57mNX0PbCD2cxbhQfbSj7D2Dc8YB5U2vNJtoqLrJzN7JbLiyYWIM3zhDSVrjIl5+vImbxMnEKeghAnjxtNSt+W/iLADLE5uislC0rflQ+ZEKN5nIyZLK9gWW729obT44XkPzdo+DxH4gFdccSZYTBagEj8ltp2gAEU+VlNWLEh/YSv/N7hNQGiSunSeQhKPyTv2OPJLyiwtzt3P6vsIon6YV8nDsF2AOIEangoxvIA7ul+6/l2/R27WHagdPls8qCk4xonh77EvNsTkZSA5YDL0RYLUswHhn66e2imeclFobUqA1+FDZ2eHeOX8Kk/ZB/nyx2BzwYlkfYm7cYFU+NTeY73/f/Uotuw52w3Nnwz+fOZuUMGXuPMnEIkLAngQWg2CcVL0V55iFwOCZ6/+ILNh/6Ozacmmj/yM0vWOyhBb1iGF9BDbvBPv//fpz1rDP7lo+/wsLPw3d6pf9vcm68SWPRJxzy/mB2ph/SjbuRPci29w0754aRwlpHMcmrxQq9M/sj/s3pLQKzHPjxw4U/kUr65c28HHWXM+w0H7/3hq/UahPn/t+z2J+POzdwGpdUAgymxDRQAAAABJRU5ErkJggg==",Y_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAbqSURBVHgB5Zx5jBRFFMa/1zO7KIiuElcjEl1JVBAV1HjFiywg4OIZDeAFxisajJxyMy53WA4BE9EEiJxCIsHlPgwYEUGCEExA/1BERUBFbpGd6efXyGo0Sqaqq3Rm95d09THT19evaqrf1z0Cx+j9Rc2RljYI0AkqjbikCJCE0UaKSoDia2BIGqr7ua/tHM+FYplMmL4TDhE4QjsU3QkJynmQdyAudmL9w0FhNkIMkgnTvoQDAsREmzYt1A4NRnFTa5wI5RJBZ57hNu3V9SU4ILZYaPz9Akr2CnIVQV1exNe0R9fRiEkssbTDuTN4NO2RDwj6aM+n+iIG1mKxjerGI3gMeYUO1x5PlsISK7G0bdGlXHU48g+eb1CuvR6vBwvsIqtAnmdZH/mI4FZo4YOwwFgsvR4F3OMLyGc08wwsMI+shsU3Il+j6k9u0xefaABDzMUK05cj3xERnKFNYIhNm1WCGkFwCQwxF0twFmoCKgUwxCayDqAmEIZHYIiFWMFe1AQSsg+GmIuV0S2oCUi4A4aYi3Ws/laWPyOfEayVihn+I0vW7DzO1vFN5DMavgUL7G53JDGR5S/IS3QH6pfMgQVWYsl7P+7maDDyDVVll6G3pFIhLLBO0Ujl/gr2hGchnwiCYTJu2iJYEi9Tejz5HMsVyAcUI6ViaqzaEEssWbH3KCr3t+WBDEPuUkXTohsjqj9iEjsHL9GNw6L9g2hEXcWZDcgZhNaYLMCJsImMnzYZDnBmhVWj91zQDFL1NLd8PWcbhVJ4viJZ12Qbck7DquCCplXZfj9kY8QWO5PUzD5o8DlE1zPapzGavoFDknDM4rP2RFfgOxU0ZNheedJdMSSswpSyCun2r19YqS0oRhskcB2Vuov7KD71ydlcXsD6UsjpRshVsZZ10qsyinIK1TYSyHnIRizXZhRoKKfacR91KMzf60YDzpdyeWRKDMAqXcr5USiVD+CA+L4hWdxZu/O4NzCl9qBNJGXFSu1FoT7k1P0c6mS5VjsKt5aivQ4HxBZraScdK4pxFMvKMcmKVTqaF2EMp86BHS9wGyvYKY1Vk2KJtaSjjqJIPeCT1Zpi2QfxaY3VmIcYWItV2Vnb82r7te1X6J2sRkPgjgcYYdb9LSuxFt6r9ROKifBNgOlwT29UakNYYCUWe00PcdQYPlmtXVheCvcU8efByve0yzoInoV/usAXAZ7GPC00XMtcrGUP63kc3QKPHK5DB0lps/ujmPFl/LSceWQleA/omc8uws0cGVtVRghawBDzZx0CXAjPMLKsGmBDLoIhxmKF6t9kzYjnqIoQ3kcaYm5YhDgBzwSKDHwjOAxDzCNLsAueqXcC/o3c0Pw8jMUKMjA2J025cRdWcnQMfvkChhiL1X6+/MCsyEfwSGGaqWDBevjjAFphHQyx6pSykX8DvlHMgD8msWethutY9uATWMg9+a2OpZjJ0smbEX9BsZt9xamwwEqs9rPkEFd8Cj4RiX4Rn4drBGPRUnbCAusUTbs5sp6BPAg+aSUreXIpuCKq2qUYD0tiJf/azZVh7EoMhU9K5VWWIxCXEJVs0rvYtFXVxE4rl82Wwdx7lFDL2royppUMwO9R/BNsiEyLNrgPKbF6xqEaJ4bFPXNkZDqNKzj5NqL3/nzQWoYxOm7hED0Bk81JR99Zw+EORmc/KmYdUdU4d6yWd9ErM8dRRt+wlBtvxkUXwxB2TSaXzT2tb3g1IssN9AwDplr0j30c4nRke23iL94qtGR/UOKLVI1zk/XunsOPourXuuxf8CDDTDKTPJwIg8j5yT6Ko9Obe5rPW8s2ltEw5uT8Ji2gY5hAiRyHR9yJtTF1GZKZKaiqokMcJHHKAU0nMicHI0xj4QaJ2kt/beYpnLRZ2Dy4G5MqOyhSK+rjPFpzhfhifZoawXaBTo/6z0H9z8QTa3OqnCL1Qy3BXqwtqTJmAgeiFmEn1ryHE1CddNIUq0XYidW4SUf4MUBzGsvn4IPnUAsxF2tdqph3DrejFmIu1pmB8RugNQWLanjifNRSzMXS4D94mVyd3fy6xFyswL/JikCOIgexeDkz8zV8o7oHOYiFWPW2e68m6eQm5CDmYt3Un6ldMTYoDdiFr7Z9jBzErlOqYvUmaFaILMEj8/0/GGKBnVgH8S4F2wbnyEEkClLIUezEapk6gkTY3XnbJTISVw/I2b9CsE/RXFu+GkgMgDtmovmQ2H8155N4yb8WQ0YyGhycIJ3n5tIVOU78tHLzVF9Wx5dh/zxVBYIjD0BSfvxGh7hL3m0dWIIwSStfH81uBf2ETV5vXDd0LfIE95nOSLR00AZB0DH6F1PaWufx9iVyTg9wb99Cw3cQJN5nRG5EnvEbvQfmdcYxgDQAAAAASUVORK5CYII=",q_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23F4F2ED'%20rx='60'/%3e%3cpath%20fill='%234E7896'%20d='M101.634%20182.619C101.634%20182.619%2093.9548%20187.293%20106.979%20188.63C122.707%20190.634%20131.023%20190.299%20148.386%20186.962C148.386%20186.962%20153.06%20189.971%20159.406%20192.306C120.331%20209.002%2070.9089%20191.304%20101.634%20182.619ZM96.6252%20160.914C96.6252%20160.914%2088.2753%20167.26%20101.299%20168.593C118.327%20170.262%20131.69%20170.597%20154.732%20165.926C154.732%20165.926%20157.741%20169.267%20162.747%20170.936C115.664%20184.961%2062.8975%20172.269%2096.6252%20160.917V160.914ZM188.795%20198.984C188.795%20198.984%20194.471%20203.658%20182.449%20207.334C160.073%20214.012%2088.6104%20216.019%2068.5735%20207.334C61.564%20204.325%2074.9197%20199.982%2079.2587%20199.319C83.6012%20198.317%2085.9366%20198.317%2085.9366%20198.317C78.2569%20192.973%2034.8424%20209.337%2063.8959%20214.046C143.709%20227.073%20209.499%20208.37%20188.792%20199.018L188.795%20198.984ZM105.307%20138.203C105.307%20138.203%2068.9052%20146.888%2092.2793%20149.89C102.298%20151.223%20122%20150.892%20140.368%20149.555C155.396%20148.221%20170.458%20145.548%20170.458%20145.548C170.458%20145.548%20165.113%20147.886%20161.441%20150.222C124.342%20159.915%2053.2107%20155.573%2073.5827%20145.554C90.9526%20137.204%20105.307%20138.203%20105.307%20138.203V138.203ZM170.423%20174.604C207.83%20155.234%20190.46%20136.534%20178.438%20138.873C175.429%20139.54%20174.096%20140.207%20174.096%20140.207C174.096%20140.207%20175.097%20138.203%20177.436%20137.54C201.145%20129.19%20219.849%20162.586%20169.757%20175.61C169.757%20175.61%20170.092%20175.275%20170.423%20174.608V174.604ZM108.979%20227.364C145.046%20229.703%20200.147%20226.03%20201.484%20208.995C201.484%20208.995%20198.817%20215.673%20171.764%20220.683C141.042%20226.359%20102.968%20225.692%2080.5957%20222.016C80.5957%20222.016%2085.2698%20226.023%20108.982%20227.36L108.979%20227.364Z'/%3e%3cpath%20fill='%23F58219'%20d='M147.685%2028C147.685%2028%20168.389%2049.0388%20127.983%2080.7594C95.5891%20106.472%20120.632%20121.168%20127.983%20137.861C108.948%20120.833%2095.2609%20105.802%20104.606%2091.7762C118.331%2071.0828%20156.062%2061.0644%20147.685%2028ZM137%20123.842C146.683%20134.862%20134.333%20144.881%20134.333%20144.881C134.333%20144.881%20159.044%20132.195%20147.692%20116.494C137.338%20101.466%20129.324%2094.1184%20172.738%2069.0689C172.738%2069.0689%20104.277%2086.0968%20137.007%20123.835L137%20123.842Z'/%3e%3c/svg%3e",K_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23242938'%20rx='60'/%3e%3cpath%20fill='%23fff'%20d='M101.634%20182.619C101.634%20182.619%2093.9548%20187.293%20106.979%20188.63C122.707%20190.634%20131.023%20190.299%20148.386%20186.962C148.386%20186.962%20153.06%20189.971%20159.406%20192.306C120.331%20209.002%2070.9089%20191.304%20101.634%20182.619ZM96.6252%20160.914C96.6252%20160.914%2088.2753%20167.26%20101.299%20168.593C118.327%20170.262%20131.69%20170.597%20154.732%20165.926C154.732%20165.926%20157.741%20169.267%20162.747%20170.936C115.664%20184.961%2062.8975%20172.269%2096.6252%20160.917V160.914ZM188.795%20198.984C188.795%20198.984%20194.471%20203.658%20182.449%20207.334C160.073%20214.012%2088.6104%20216.019%2068.5735%20207.334C61.564%20204.325%2074.9197%20199.982%2079.2587%20199.319C83.6012%20198.317%2085.9366%20198.317%2085.9366%20198.317C78.2569%20192.973%2034.8424%20209.337%2063.8959%20214.046C143.709%20227.073%20209.499%20208.37%20188.792%20199.018L188.795%20198.984ZM105.307%20138.203C105.307%20138.203%2068.9052%20146.888%2092.2793%20149.89C102.298%20151.223%20122%20150.892%20140.368%20149.555C155.396%20148.221%20170.458%20145.548%20170.458%20145.548C170.458%20145.548%20165.113%20147.886%20161.441%20150.222C124.342%20159.915%2053.2107%20155.573%2073.5827%20145.554C90.9526%20137.204%20105.307%20138.203%20105.307%20138.203V138.203ZM170.423%20174.604C207.83%20155.234%20190.46%20136.534%20178.438%20138.873C175.429%20139.54%20174.096%20140.207%20174.096%20140.207C174.096%20140.207%20175.097%20138.203%20177.436%20137.54C201.145%20129.19%20219.849%20162.586%20169.757%20175.61C169.757%20175.61%20170.092%20175.275%20170.423%20174.608V174.604ZM108.979%20227.364C145.046%20229.703%20200.147%20226.03%20201.484%20208.995C201.484%20208.995%20198.817%20215.673%20171.764%20220.683C141.042%20226.359%20102.968%20225.692%2080.5957%20222.016C80.5957%20222.016%2085.2698%20226.023%20108.982%20227.36L108.979%20227.364Z'/%3e%3cpath%20fill='%23F58219'%20d='M147.685%2028C147.685%2028%20168.389%2049.0388%20127.983%2080.7594C95.5891%20106.472%20120.632%20121.168%20127.983%20137.861C108.948%20120.833%2095.2609%20105.802%20104.606%2091.7762C118.331%2071.0828%20156.062%2061.0644%20147.685%2028ZM137%20123.842C146.683%20134.862%20134.333%20144.881%20134.333%20144.881C134.333%20144.881%20159.044%20132.195%20147.692%20116.494C137.338%20101.466%20129.324%2094.1184%20172.738%2069.0689C172.738%2069.0689%20104.278%2086.0968%20137.007%20123.835L137%20123.842Z'/%3e%3c/svg%3e",Z_="data:image/svg+xml,%3csvg%20width='256'%20height='256'%20viewBox='0%200%20256%20256'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='256'%20height='256'%20rx='60'%20fill='%23F0DB4F'/%3e%3cpath%20d='M67.3117%20213.932L86.9027%20202.076C90.6821%20208.777%2094.1202%20214.447%20102.367%20214.447C110.272%20214.447%20115.256%20211.355%20115.256%20199.327V117.529H139.314V199.667C139.314%20224.584%20124.708%20235.926%20103.398%20235.926C84.1533%20235.926%2072.9819%20225.959%2067.3113%20213.93'%20fill='%23323330'/%3e%3cpath%20d='M152.381%20211.354L171.969%20200.013C177.126%20208.434%20183.828%20214.62%20195.684%20214.62C205.653%20214.62%20212.009%20209.636%20212.009%20202.762C212.009%20194.514%20205.479%20191.592%20194.481%20186.782L188.468%20184.203C171.111%20176.815%20159.597%20167.535%20159.597%20147.945C159.597%20129.901%20173.345%20116.153%20194.826%20116.153C210.12%20116.153%20221.118%20121.481%20229.022%20135.4L210.291%20147.429C206.166%20140.04%20201.7%20137.119%20194.826%20137.119C187.78%20137.119%20183.312%20141.587%20183.312%20147.429C183.312%20154.646%20187.78%20157.568%20198.09%20162.037L204.104%20164.614C224.553%20173.379%20236.067%20182.313%20236.067%20202.418C236.067%20224.072%20219.055%20235.928%20196.2%20235.928C173.861%20235.928%20159.426%20225.274%20152.381%20211.354'%20fill='%23323330'/%3e%3c/svg%3e",$_="/SadeepPortfolio/assets/linuxD-XQ1i1LZL.svg",Q_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='100'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23F4F2ED'%20rx='60'/%3e%3cg%20clip-path='url(%23clip0_7_150)'%3e%3cpath%20fill='%2300678C'%20fill-rule='evenodd'%20d='M203.801%20178.21C194.011%20177.938%20186.416%20178.941%20180.051%20181.619C178.218%20182.355%20175.277%20182.355%20175.035%20184.662C176.015%20185.63%20176.133%20187.214%20176.992%20188.556C178.459%20190.991%20181.033%20194.271%20183.357%20195.973L191.191%20201.571C195.965%20204.488%20201.351%20206.193%20206.002%20209.113C208.696%20210.817%20211.388%20213.007%20214.082%20214.834C215.454%20215.807%20216.285%20217.392%20218%20217.997V217.629C217.144%20216.538%20216.897%20214.957%20216.044%20213.735L212.367%20210.209C208.82%20205.465%20204.41%20201.325%20199.636%20197.922C195.718%20195.245%20187.152%20191.596%20185.56%20187.097L185.319%20186.824C188.008%20186.552%20191.191%20185.605%20193.764%20184.875C197.929%20183.784%20201.721%20184.024%20206.002%20182.93L211.882%20181.226V180.135C209.678%20177.946%20208.087%20175.025%20205.763%20172.959C199.521%20167.606%20192.661%20162.373%20185.56%20157.994C181.766%20155.562%20176.868%20153.977%20172.829%20151.913C171.356%20151.182%20168.911%20150.817%20168.055%20149.601C165.846%20146.929%20164.625%20143.397%20163.034%20140.232L152.997%20119.064C150.794%20114.319%20149.444%20109.574%20146.755%20105.195C134.144%2084.5124%20120.431%2071.9828%2099.375%2059.6932C94.8477%2057.1382%2089.4616%2056.0393%2083.7353%2054.7032L74.5546%2054.2124C72.5928%2053.3616%2070.6364%2051.0493%2068.9216%2049.9531C61.9441%2045.5739%2043.9475%2036.0847%2038.8029%2048.5897C35.4966%2056.4974%2043.7006%2064.2824%2046.4855%2068.299C48.5708%2071.0966%2051.2597%2074.2597%2052.7332%2077.4228C53.5563%2079.4897%2053.8307%2081.682%2054.6895%2083.8717C56.6458%2089.2243%2058.4842%2095.1878%2061.0551%20100.178C62.427%20102.733%2063.8675%20105.413%2065.5824%20107.723C66.5619%20109.086%2068.2768%20109.67%2068.6417%20111.859C66.9268%20114.294%2066.8089%20117.94%2065.8293%20120.986C61.42%20134.734%2063.1349%20151.766%2069.377%20161.888C71.3389%20164.928%2075.9622%20171.622%2082.2345%20169.065C87.744%20166.875%2086.5148%20159.941%2088.1062%20153.857C88.4766%20152.399%2088.2297%20151.425%2088.9623%20150.449V150.722L93.9834%20160.819C97.7781%20166.78%20104.391%20172.986%20109.897%20177.125C112.833%20179.315%20115.16%20183.089%20118.831%20184.425V184.057H118.59C117.854%20182.966%20116.751%20182.475%20115.772%20181.624C113.569%20179.435%20111.121%20176.757%20109.406%20174.325C104.267%20167.513%2099.7399%20159.968%2095.6983%20152.183C93.7365%20148.412%2092.0216%20144.275%2090.4357%20140.504C89.6949%20139.043%2089.6949%20136.85%2088.4739%20136.125C86.6355%20138.797%2083.9466%20141.115%2082.5939%20144.398C80.2672%20149.628%2080.0257%20156.077%2079.1697%20162.769C78.6758%20162.891%2078.8953%20162.769%2078.6758%20163.041C74.7631%20162.071%2073.4132%20158.051%2071.9453%20154.648C68.274%20146.01%2067.6594%20132.141%2070.8422%20122.164C71.6983%20119.609%2075.375%20111.579%2073.9071%20109.146C73.1662%20106.834%2070.7242%20105.498%2069.3743%20103.671C67.7829%20101.359%2066.0735%2098.4409%2064.9705%2095.8859C62.0346%2089.0689%2060.5667%2081.5293%2057.3812%2074.7151C55.9077%2071.552%2053.3396%2068.2662%2051.257%2065.3486C48.9303%2062.0628%2046.3648%2059.7505%2044.5265%2055.8593C43.9146%2054.4959%2043.0585%2052.3309%2044.0381%2050.8693C44.2795%2049.8959%2044.7734%2049.5059%2045.7475%2049.2878C47.3389%2047.9244%2051.8716%2049.6532%2053.463%2050.3785C57.9903%2052.2054%2061.7849%2053.907%2065.5796%2056.4592C67.2945%2057.6754%2069.1329%2059.9877%2071.3361%2060.5985H73.9098C77.8279%2061.4493%2082.2317%2060.8712%2085.9002%2061.9619C92.3893%2064.0343%2098.2637%2067.0719%20103.532%2070.3604C119.567%2080.4577%20132.792%2094.8143%20141.725%20111.971C143.193%20114.769%20143.805%20117.324%20145.155%20120.244C147.729%20126.208%20150.912%20132.289%20153.477%20138.132C156.051%20143.85%20158.498%20149.694%20162.17%20154.438C164.008%20156.993%20171.35%20158.329%20174.654%20159.668C177.104%20160.759%20180.896%20161.741%20183.105%20163.077C187.264%20165.632%20191.427%20168.552%20195.342%20171.35C197.298%20172.806%20203.423%20175.849%20203.787%20178.276L203.801%20178.21ZM78.9584%2072.4873C77.267%2072.4724%2075.5809%2072.6769%2073.9427%2073.0954V73.3681H74.1842C75.1637%2075.315%2076.8786%2076.6538%2078.1023%2078.3581L80.9202%2084.1989L81.1616%2083.9262C82.8765%2082.71%2083.7353%2080.7631%2083.7353%2077.8454C83%2076.9947%2082.8793%2076.1412%2082.2674%2075.2904C81.5321%2074.0743%2079.9407%2073.4635%2078.9584%2072.4928V72.4873Z'%20clip-rule='evenodd'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_7_150'%3e%3crect%20width='180'%20height='180'%20fill='%23fff'%20transform='translate(38%2038)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",J_="/SadeepPortfolio/assets/node-BuugxZfd.png",ev="/SadeepPortfolio/assets/php-Ch9CcwMG.png",tv="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23F4F2ED'%20rx='60'/%3e%3cpath%20fill='%23000'%20d='M49.158%20100.246H77.566C85.904%20100.316%2091.946%20102.72%2095.692%20107.454C99.438%20112.188%20100.674%20118.654%2099.402%20126.852C98.908%20130.598%2097.812%20134.272%2096.116%20137.876C94.49%20141.48%2092.23%20144.73%2089.332%20147.628C85.798%20151.302%2082.018%20153.634%2077.99%20154.624C73.962%20155.614%2069.792%20156.108%2065.482%20156.108H52.762L48.734%20176.248H34L49.158%20100.246V100.246ZM61.56%20112.33L55.2%20144.13C55.624%20144.2%2056.048%20144.236%2056.472%20144.236C56.966%20144.236%2057.462%20144.236%2057.956%20144.236C64.74%20144.306%2070.394%20143.636%2074.916%20142.222C79.438%20140.738%2082.478%20135.58%2084.032%20126.746C85.304%20119.326%2084.032%20115.05%2080.216%20113.92C76.47%20112.79%2071.772%20112.26%2066.118%20112.33C65.27%20112.4%2064.458%20112.436%2063.68%20112.436C62.974%20112.436%2062.232%20112.436%2061.454%20112.436L61.56%20112.33'/%3e%3cpath%20fill='%23000'%20d='M116.186%2080H130.814L126.68%20100.246H139.824C147.032%20100.388%20152.402%20101.872%20155.936%20104.698C159.54%20107.524%20160.6%20112.896%20159.116%20120.81L152.014%20156.108H137.174L143.958%20122.4C144.664%20118.866%20144.452%20116.358%20143.322%20114.874C142.192%20113.39%20139.754%20112.648%20136.008%20112.648L124.242%20112.542L115.55%20156.108H100.922L116.186%2080Z'/%3e%3cpath%20fill='%23000'%20d='M174.824%20100.246H203.232C211.57%20100.316%20217.612%20102.72%20221.358%20107.454C225.104%20112.188%20226.34%20118.654%20225.068%20126.852C224.574%20130.598%20223.478%20134.272%20221.782%20137.876C220.156%20141.48%20217.896%20144.73%20214.998%20147.628C211.464%20151.302%20207.684%20153.634%20203.656%20154.624C199.628%20155.614%20195.458%20156.108%20191.148%20156.108H178.428L174.4%20176.248H159.666L174.824%20100.246V100.246ZM187.226%20112.33L180.866%20144.13C181.29%20144.2%20181.714%20144.236%20182.138%20144.236C182.632%20144.236%20183.128%20144.236%20183.622%20144.236C190.406%20144.306%20196.06%20143.636%20200.582%20142.222C205.104%20140.738%20208.144%20135.58%20209.698%20126.746C210.97%20119.326%20209.698%20115.05%20205.882%20113.92C202.136%20112.79%20197.438%20112.26%20191.784%20112.33C190.936%20112.4%20190.124%20112.436%20189.346%20112.436C188.64%20112.436%20187.898%20112.436%20187.12%20112.436L187.226%20112.33'/%3e%3c/svg%3e",nv="/SadeepPortfolio/assets/react-DnG5Nebg.png",jn=t=>new URL(Object.assign({"/assets/Contact/emailIcon.png":A_,"/assets/Contact/githubIcon.png":C_,"/assets/Contact/linkedinIcon.png":w_,"/assets/hero/IMG_0360.jpg":T_,"/assets/logo/D_UCSC.png":R_,"/assets/logo/SSC.png":P_,"/assets/logo/UCSC.png":L_,"/assets/nav/closeIcon.png":b_,"/assets/nav/menuIcon.png":D_,"/assets/projects/Amoral1.png":I_,"/assets/projects/MaternEase.jpg":U_,"/assets/skills/Bootstrap.svg":N_,"/assets/skills/C.svg":F_,"/assets/skills/CPP.svg":O_,"/assets/skills/CSS.svg":k_,"/assets/skills/Discord.svg":B_,"/assets/skills/Figma-Dark.svg":z_,"/assets/skills/Github-Dark.svg":H_,"/assets/skills/React-Dark.svg":V_,"/assets/skills/Scala-Dark.svg":G_,"/assets/skills/Spring.svg":W_,"/assets/skills/VSCode-Dark.svg":X_,"/assets/skills/css.png":j_,"/assets/skills/figma.png":Y_,"/assets/skills/java.svg":q_,"/assets/skills/javaD.svg":K_,"/assets/skills/js.svg":Z_,"/assets/skills/linuxD.svg":$_,"/assets/skills/mysql.svg":Q_,"/assets/skills/node.png":J_,"/assets/skills/php.png":ev,"/assets/skills/php.svg":tv,"/assets/skills/react.png":nv})[`/assets/${t}`],import.meta.url).href,iv=()=>J.jsxs("footer",{id:"contact",className:xi.container,children:[J.jsxs("div",{className:xi.text,children:[J.jsx("h2",{children:"Contact"}),J.jsx("p",{children:"Feel free to reach out!"})]}),J.jsxs("ul",{className:xi.links,children:[J.jsxs("li",{className:xi.link,children:[J.jsx("img",{src:jn("Contact/emailIcon.png"),alt:"Email icon"}),J.jsx("a",{href:"mailto:chathushan43sadeep@gmail.com",children:"chathushan43sadeep@gmail.com "})]}),J.jsxs("li",{className:xi.link,children:[J.jsx("img",{src:jn("Contact/linkedinIcon.png"),alt:"Linkedin icon"}),J.jsx("a",{href:"https://www.linkedin.com/in/sadeep-chathushan-a9a675281/",children:"linkedin.com/Sadeep-Chathushan "})]}),J.jsxs("li",{className:xi.link,children:[J.jsx("img",{src:jn("Contact/githubIcon.png"),alt:"Github icon"}),J.jsx("a",{href:"https://github.com/SadeepChathushan",children:"github.com/SadeepChathushan "})]})]}),J.jsx("div",{className:xi.topBlur}),J.jsx("div",{className:xi.bottomBlur})]}),rv="_container_wnvc6_3",sv="_fadeIn_wnvc6_1",ov="_title_wnvc6_18",av="_content_wnvc6_40",lv="_skill_wnvc6_47",cv="_skillImageContainer_wnvc6_58",uv="_skillTitle_wnvc6_73",fv="_topBlur_wnvc6_86",dv="_bottomBlur_wnvc6_95",br={container:rv,fadeIn:sv,title:ov,content:av,skill:lv,skillImageContainer:cv,skillTitle:uv,topBlur:fv,bottomBlur:dv},hv=[{title:"React",imageSrc:"skills/React-Dark.svg"},{title:"Spring",imageSrc:"skills/Spring.svg"},{title:"PHP",imageSrc:"skills/php.svg"},{title:"Java",imageSrc:"skills/javaD.svg"},{title:"JavaScript",imageSrc:"skills/js.svg"},{title:"MySQL",imageSrc:"skills/mysql.svg"}],pv=()=>J.jsxs("section",{className:br.container,id:"experience",children:[J.jsx("h2",{className:br.title,children:"Skills & Technologies"}),J.jsx("div",{className:br.content,children:hv.map((t,e)=>J.jsxs("div",{className:br.skill,children:[J.jsx("div",{className:br.skillImageContainer,children:J.jsx("img",{src:jn(t.imageSrc),alt:t.title})}),J.jsx("p",{className:br.skillTitle,children:t.title})]},e))})]});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xd="168",mv=0,Yh=1,gv=2,s2=1,_v=2,ni=3,Yi=0,Qt=1,si=2,Gi=0,ms=1,qh=2,Kh=3,Zh=4,vv=5,fr=100,xv=101,Sv=102,yv=103,Mv=104,Ev=200,Av=201,Cv=202,wv=203,Wu=204,Xu=205,Tv=206,Rv=207,Pv=208,Lv=209,bv=210,Dv=211,Iv=212,Uv=213,Nv=214,Fv=0,Ov=1,kv=2,vl=3,Bv=4,zv=5,Hv=6,Vv=7,o2=0,Gv=1,Wv=2,Wi=0,Xv=1,jv=2,Yv=3,qv=4,Kv=5,Zv=6,$v=7,a2=300,ws=301,Ts=302,ju=303,Yu=304,Vl=306,qu=1e3,gr=1001,Ku=1002,xn=1003,Qv=1004,aa=1005,bn=1006,Mc=1007,_r=1008,mi=1009,l2=1010,c2=1011,Lo=1012,Sd=1013,Cr=1014,li=1015,Fo=1016,yd=1017,Md=1018,Rs=1020,u2=35902,f2=1021,d2=1022,Dn=1023,h2=1024,p2=1025,gs=1026,Ps=1027,m2=1028,Ed=1029,g2=1030,Ad=1031,Cd=1033,Va=33776,Ga=33777,Wa=33778,Xa=33779,Zu=35840,$u=35841,Qu=35842,Ju=35843,ef=36196,tf=37492,nf=37496,rf=37808,sf=37809,of=37810,af=37811,lf=37812,cf=37813,uf=37814,ff=37815,df=37816,hf=37817,pf=37818,mf=37819,gf=37820,_f=37821,ja=36492,vf=36494,xf=36495,_2=36283,Sf=36284,yf=36285,Mf=36286,Jv=3200,ex=3201,v2=0,tx=1,bi="",Bn="srgb",Qi="srgb-linear",wd="display-p3",Gl="display-p3-linear",xl="linear",tt="srgb",Sl="rec709",yl="p3",Dr=7680,$h=519,nx=512,ix=513,rx=514,x2=515,sx=516,ox=517,ax=518,lx=519,Qh=35044,Jh="300 es",ci=2e3,Ml=2001;class Us{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ec=Math.PI/180,Ef=180/Math.PI;function Oo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[t&255]+Nt[t>>8&255]+Nt[t>>16&255]+Nt[t>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[n&63|128]+Nt[n>>8&255]+"-"+Nt[n>>16&255]+Nt[n>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function cx(t,e){return(t%e+e)%e}function Ac(t,e,n){return(1-n)*t+n*e}function Ws(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Xt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,n=0){Ge.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,n,i,r,s,o,a,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],p=i[5],v=i[8],x=r[0],m=r[3],u=r[6],_=r[1],g=r[4],M=r[7],P=r[2],C=r[5],w=r[8];return s[0]=o*x+a*_+l*P,s[3]=o*m+a*g+l*C,s[6]=o*u+a*M+l*w,s[1]=c*x+f*_+h*P,s[4]=c*m+f*g+h*C,s[7]=c*u+f*M+h*w,s[2]=d*x+p*_+v*P,s[5]=d*m+p*g+v*C,s[8]=d*u+p*M+v*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,d=a*l-f*s,p=c*s-o*l,v=n*h+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=h*x,e[1]=(r*c-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Cc.makeScale(e,n)),this}rotate(e){return this.premultiply(Cc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Cc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cc=new Ne;function S2(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function El(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ux(){const t=El("canvas");return t.style.display="block",t}const ep={};function fo(t){t in ep||(ep[t]=!0,console.warn(t))}function fx(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const tp=new Ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),np=new Ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xs={[Qi]:{transfer:xl,primaries:Sl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Bn]:{transfer:tt,primaries:Sl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Gl]:{transfer:xl,primaries:yl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(np),fromReference:t=>t.applyMatrix3(tp)},[wd]:{transfer:tt,primaries:yl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(np),fromReference:t=>t.applyMatrix3(tp).convertLinearToSRGB()}},dx=new Set([Qi,Gl]),Ke={enabled:!0,_workingColorSpace:Qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!dx.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Xs[e].toReference,r=Xs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Xs[t].primaries},getTransfer:function(t){return t===bi?xl:Xs[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Xs[e].luminanceCoefficients)}};function _s(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function wc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ir;class hx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ir===void 0&&(Ir=El("canvas")),Ir.width=e.width,Ir.height=e.height;const i=Ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ir}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=El("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=_s(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(_s(n[i]/255)*255):n[i]=_s(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let px=0;class y2{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=Oo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Tc(r[o].image)):s.push(Tc(r[o]))}else s=Tc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Tc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?hx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mx=0;class Jt extends Us{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=gr,r=gr,s=bn,o=_r,a=Dn,l=mi,c=Jt.DEFAULT_ANISOTROPY,f=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=Oo(),this.name="",this.source=new y2(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==a2)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qu:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case Ku:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qu:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case Ku:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=a2;Jt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,n=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],p=l[5],v=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,M=(p+1)/2,P=(u+1)/2,C=(f+d)/4,w=(h+x)/4,b=(v+m)/4;return g>M&&g>P?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=C/i,s=w/i):M>P?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=b/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=w/s,r=b/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-v)*(m-v)+(h-x)*(h-x)+(d-f)*(d-f));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(h-x)/_,this.z=(d-f)/_,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gx extends Us{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new y2(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends gx{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class M2 extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _x extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ko{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(h!==x||l!==d||c!==p||f!==v){let m=1-a;const u=l*d+c*p+f*v+h*x,_=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const P=Math.sqrt(g),C=Math.atan2(P,u*_);m=Math.sin(m*C)/P,a=Math.sin(a*C)/P}const M=a*_;if(l=l*m+d*M,c=c*m+p*M,f=f*m+v*M,h=h*m+x*M,m===1-a){const P=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=P,c*=P,f*=P,h*=P}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+f*h+l*p-c*d,e[n+1]=l*v+f*d+c*h-a*p,e[n+2]=c*v+f*p+a*d-l*h,e[n+3]=f*v-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*f*h+c*p*v,this._y=c*p*h-d*f*v,this._z=c*f*v+d*p*h,this._w=c*f*h-d*p*v;break;case"YXZ":this._x=d*f*h+c*p*v,this._y=c*p*h-d*f*v,this._z=c*f*v-d*p*h,this._w=c*f*h+d*p*v;break;case"ZXY":this._x=d*f*h-c*p*v,this._y=c*p*h+d*f*v,this._z=c*f*v+d*p*h,this._w=c*f*h-d*p*v;break;case"ZYX":this._x=d*f*h-c*p*v,this._y=c*p*h+d*f*v,this._z=c*f*v-d*p*h,this._w=c*f*h+d*p*v;break;case"YZX":this._x=d*f*h+c*p*v,this._y=c*p*h+d*f*v,this._z=c*f*v-d*p*h,this._w=c*f*h-d*p*v;break;case"XZY":this._x=d*f*h-c*p*v,this._y=c*p*h-d*f*v,this._z=c*f*v+d*p*h,this._w=c*f*h+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-n)*f)/c,d=Math.sin(n*f)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ip.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ip.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rc.copy(this).projectOnVector(e),this.sub(Rc)}reflect(e){return this.sub(Rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rc=new k,ip=new ko;class Bo{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Cn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Cn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Cn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(s,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),la.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),la.copy(i.boundingBox)),la.applyMatrix4(e.matrixWorld),this.union(la)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),ca.subVectors(this.max,js),Ur.subVectors(e.a,js),Nr.subVectors(e.b,js),Fr.subVectors(e.c,js),Si.subVectors(Nr,Ur),yi.subVectors(Fr,Nr),tr.subVectors(Ur,Fr);let n=[0,-Si.z,Si.y,0,-yi.z,yi.y,0,-tr.z,tr.y,Si.z,0,-Si.x,yi.z,0,-yi.x,tr.z,0,-tr.x,-Si.y,Si.x,0,-yi.y,yi.x,0,-tr.y,tr.x,0];return!Pc(n,Ur,Nr,Fr,ca)||(n=[1,0,0,0,1,0,0,0,1],!Pc(n,Ur,Nr,Fr,ca))?!1:(ua.crossVectors(Si,yi),n=[ua.x,ua.y,ua.z],Pc(n,Ur,Nr,Fr,ca))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $n=[new k,new k,new k,new k,new k,new k,new k,new k],Cn=new k,la=new Bo,Ur=new k,Nr=new k,Fr=new k,Si=new k,yi=new k,tr=new k,js=new k,ca=new k,ua=new k,nr=new k;function Pc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){nr.fromArray(t,s);const a=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),l=e.dot(nr),c=n.dot(nr),f=i.dot(nr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const vx=new Bo,Ys=new k,Lc=new k;class Td{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):vx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const n=Ys.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ys,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(Lc)),this.expandByPoint(Ys.copy(e.center).sub(Lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new k,bc=new k,fa=new k,Mi=new k,Dc=new k,da=new k,Ic=new k;class xx{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,n),Qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){bc.copy(e).add(n).multiplyScalar(.5),fa.copy(n).sub(e).normalize(),Mi.copy(this.origin).sub(bc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(fa),a=Mi.dot(this.direction),l=-Mi.dot(fa),c=Mi.lengthSq(),f=Math.abs(1-o*o);let h,d,p,v;if(f>0)if(h=o*l-a,d=o*a-l,v=s*f,h>=0)if(d>=-v)if(d<=v){const x=1/f;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(bc).addScaledVector(fa,d),p}intersectSphere(e,n){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,n,i,r,s){Dc.subVectors(n,e),da.subVectors(i,e),Ic.crossVectors(Dc,da);let o=this.direction.dot(Ic),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);const l=a*this.direction.dot(da.crossVectors(Mi,da));if(l<0)return null;const c=a*this.direction.dot(Dc.cross(Mi));if(c<0||l+c>o)return null;const f=-a*Mi.dot(Ic);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,i,r,s,o,a,l,c,f,h,d,p,v,x,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,d,p,v,x,m)}set(e,n,i,r,s,o,a,l,c,f,h,d,p,v,x,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=p,u[7]=v,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Or.setFromMatrixColumn(e,0).length(),s=1/Or.setFromMatrixColumn(e,1).length(),o=1/Or.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,p=o*h,v=a*f,x=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=p+v*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,p=l*h,v=c*f,x=c*h;n[0]=d+x*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=p*a-v,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,p=l*h,v=c*f,x=c*h;n[0]=d-x*a,n[4]=-o*h,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*f,n[9]=x-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,p=o*h,v=a*f,x=a*h;n[0]=l*f,n[4]=v*c-p,n[8]=d*c+x,n[1]=l*h,n[5]=x*c+d,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*f,n[4]=x-d*h,n[8]=v*h+p,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*h+v,n[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+x,n[5]=o*f,n[9]=p*h-v,n[2]=v*h-p,n[6]=a*f,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sx,e,yx)}lookAt(e,n,i){const r=this.elements;return nn.subVectors(e,n),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Ei.crossVectors(i,nn),Ei.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Ei.crossVectors(i,nn)),Ei.normalize(),ha.crossVectors(nn,Ei),r[0]=Ei.x,r[4]=ha.x,r[8]=nn.x,r[1]=Ei.y,r[5]=ha.y,r[9]=nn.y,r[2]=Ei.z,r[6]=ha.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],p=i[13],v=i[2],x=i[6],m=i[10],u=i[14],_=i[3],g=i[7],M=i[11],P=i[15],C=r[0],w=r[4],b=r[8],A=r[12],y=r[1],L=r[5],G=r[9],z=r[13],W=r[2],$=r[6],H=r[10],te=r[14],D=r[3],j=r[7],K=r[11],oe=r[15];return s[0]=o*C+a*y+l*W+c*D,s[4]=o*w+a*L+l*$+c*j,s[8]=o*b+a*G+l*H+c*K,s[12]=o*A+a*z+l*te+c*oe,s[1]=f*C+h*y+d*W+p*D,s[5]=f*w+h*L+d*$+p*j,s[9]=f*b+h*G+d*H+p*K,s[13]=f*A+h*z+d*te+p*oe,s[2]=v*C+x*y+m*W+u*D,s[6]=v*w+x*L+m*$+u*j,s[10]=v*b+x*G+m*H+u*K,s[14]=v*A+x*z+m*te+u*oe,s[3]=_*C+g*y+M*W+P*D,s[7]=_*w+g*L+M*$+P*j,s[11]=_*b+g*G+M*H+P*K,s[15]=_*A+g*z+M*te+P*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],p=e[14],v=e[3],x=e[7],m=e[11],u=e[15];return v*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*p-i*l*p)+x*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*f-s*l*f)+m*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*f-i*c*f)+u*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],p=e[11],v=e[12],x=e[13],m=e[14],u=e[15],_=h*m*c-x*d*c+x*l*p-a*m*p-h*l*u+a*d*u,g=v*d*c-f*m*c-v*l*p+o*m*p+f*l*u-o*d*u,M=f*x*c-v*h*c+v*a*p-o*x*p-f*a*u+o*h*u,P=v*h*l-f*x*l-v*a*d+o*x*d+f*a*m-o*h*m,C=n*_+i*g+r*M+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=_*w,e[1]=(x*d*s-h*m*s-x*r*p+i*m*p+h*r*u-i*d*u)*w,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*u+i*l*u)*w,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*p-i*l*p)*w,e[4]=g*w,e[5]=(f*m*s-v*d*s+v*r*p-n*m*p-f*r*u+n*d*u)*w,e[6]=(v*l*s-o*m*s-v*r*c+n*m*c+o*r*u-n*l*u)*w,e[7]=(o*d*s-f*l*s+f*r*c-n*d*c-o*r*p+n*l*p)*w,e[8]=M*w,e[9]=(v*h*s-f*x*s-v*i*p+n*x*p+f*i*u-n*h*u)*w,e[10]=(o*x*s-v*a*s+v*i*c-n*x*c-o*i*u+n*a*u)*w,e[11]=(f*a*s-o*h*s-f*i*c+n*h*c+o*i*p-n*a*p)*w,e[12]=P*w,e[13]=(f*x*r-v*h*r+v*i*d-n*x*d-f*i*m+n*h*m)*w,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*m-n*a*m)*w,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,d=s*c,p=s*f,v=s*h,x=o*f,m=o*h,u=a*h,_=l*c,g=l*f,M=l*h,P=i.x,C=i.y,w=i.z;return r[0]=(1-(x+u))*P,r[1]=(p+M)*P,r[2]=(v-g)*P,r[3]=0,r[4]=(p-M)*C,r[5]=(1-(d+u))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(v+g)*w,r[9]=(m-_)*w,r[10]=(1-(d+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Or.set(r[0],r[1],r[2]).length();const o=Or.set(r[4],r[5],r[6]).length(),a=Or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],wn.copy(this);const c=1/s,f=1/o,h=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=f,wn.elements[5]*=f,wn.elements[6]*=f,wn.elements[8]*=h,wn.elements[9]*=h,wn.elements[10]*=h,n.setFromRotationMatrix(wn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ci){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,v;if(a===ci)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Ml)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ci){const l=this.elements,c=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*c,p=(i+r)*f;let v,x;if(a===ci)v=(o+s)*h,x=-2*h;else if(a===Ml)v=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Or=new k,wn=new ht,Sx=new k(0,0,0),yx=new k(1,1,1),Ei=new k,ha=new k,nn=new k,rp=new ht,sp=new ko;class Kn{constructor(e=0,n=0,i=0,r=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return rp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return sp.setFromEuler(this),this.setFromQuaternion(sp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class E2{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mx=0;const op=new k,kr=new ko,Jn=new ht,pa=new k,qs=new k,Ex=new k,Ax=new ko,ap=new k(1,0,0),lp=new k(0,1,0),cp=new k(0,0,1),up={type:"added"},Cx={type:"removed"},Br={type:"childadded",child:null},Uc={type:"childremoved",child:null};class kt extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=Oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new k,n=new Kn,i=new ko,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ne}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new E2,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return kr.setFromAxisAngle(e,n),this.quaternion.multiply(kr),this}rotateOnWorldAxis(e,n){return kr.setFromAxisAngle(e,n),this.quaternion.premultiply(kr),this}rotateX(e){return this.rotateOnAxis(ap,e)}rotateY(e){return this.rotateOnAxis(lp,e)}rotateZ(e){return this.rotateOnAxis(cp,e)}translateOnAxis(e,n){return op.copy(e).applyQuaternion(this.quaternion),this.position.add(op.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ap,e)}translateY(e){return this.translateOnAxis(lp,e)}translateZ(e){return this.translateOnAxis(cp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?pa.copy(e):pa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(qs,pa,this.up):Jn.lookAt(pa,qs,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),kr.setFromRotationMatrix(Jn),this.quaternion.premultiply(kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(up),Br.child=e,this.dispatchEvent(Br),Br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Cx),Uc.child=e,this.dispatchEvent(Uc),Uc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(up),Br.child=e,this.dispatchEvent(Br),Br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,Ex),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,Ax,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new k(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new k,ei=new k,Nc=new k,ti=new k,zr=new k,Hr=new k,fp=new k,Fc=new k,Oc=new k,kc=new k;class Vn{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Tn.subVectors(e,n),r.cross(Tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Tn.subVectors(r,n),ei.subVectors(i,n),Nc.subVectors(e,n);const o=Tn.dot(Tn),a=Tn.dot(ei),l=Tn.dot(Nc),c=ei.dot(ei),f=ei.dot(Nc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*f)*d,v=(o*f-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l)}static isFrontFacing(e,n,i,r){return Tn.subVectors(i,n),ei.subVectors(e,n),Tn.cross(ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Tn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Vn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;zr.subVectors(r,i),Hr.subVectors(s,i),Fc.subVectors(e,i);const l=zr.dot(Fc),c=Hr.dot(Fc);if(l<=0&&c<=0)return n.copy(i);Oc.subVectors(e,r);const f=zr.dot(Oc),h=Hr.dot(Oc);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(zr,o);kc.subVectors(e,s);const p=zr.dot(kc),v=Hr.dot(kc);if(v>=0&&p<=v)return n.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Hr,a);const m=f*v-p*h;if(m<=0&&h-f>=0&&p-v>=0)return fp.subVectors(s,r),a=(h-f)/(h-f+(p-v)),n.copy(r).addScaledVector(fp,a);const u=1/(m+x+d);return o=x*u,a=d*u,n.copy(i).addScaledVector(zr,o).addScaledVector(Hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const A2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},ma={h:0,s:0,l:0};function Bc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=cx(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Bc(o,s,e+1/3),this.g=Bc(o,s,e),this.b=Bc(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,n=Bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bn){const i=A2[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}copyLinearToSRGB(e){return this.r=wc(e.r),this.g=wc(e.g),this.b=wc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return Ke.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Yt(Ft.r*255,0,255))*65536+Math.round(Yt(Ft.g*255,0,255))*256+Math.round(Yt(Ft.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Ft.copy(this),n);const i=Ft.r,r=Ft.g,s=Ft.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Bn){Ke.fromWorkingColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,r=Ft.b;return e!==Bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+n,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ai),e.getHSL(ma);const i=Ac(Ai.h,ma.h,n),r=Ac(Ai.s,ma.s,n),s=Ac(Ai.l,ma.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new We;We.NAMES=A2;let wx=0;class zo extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=Oo(),this.name="",this.type="Material",this.blending=ms,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wu,this.blendDst=Xu,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wu&&(i.blendSrc=this.blendSrc),this.blendDst!==Xu&&(i.blendDst=this.blendDst),this.blendEquation!==fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$h&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class C2 extends zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=o2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new k,ga=new Ge;class Yn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Qh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return fo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ga.fromBufferAttribute(this,n),ga.applyMatrix3(e),this.setXY(n,ga.x,ga.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix3(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix4(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyNormalMatrix(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.transformDirection(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ws(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ws(n,this.array)),n}setX(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ws(n,this.array)),n}setY(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ws(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ws(n,this.array)),n}setW(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qh&&(e.usage=this.usage),e}}class w2 extends Yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class T2 extends Yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class qn extends Yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Tx=0;const hn=new ht,zc=new kt,Vr=new k,rn=new Bo,Ks=new Bo,Ct=new k;class Ji extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=Oo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(S2(e)?T2:w2)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,n,i){return hn.makeTranslation(e,n,i),this.applyMatrix4(hn),this}scale(e,n,i){return hn.makeScale(e,n,i),this.applyMatrix4(hn),this}lookAt(e){return zc.lookAt(e),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Td);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(rn.min,Ks.min),rn.expandByPoint(Ct),Ct.addVectors(rn.max,Ks.max),rn.expandByPoint(Ct)):(rn.expandByPoint(Ks.min),rn.expandByPoint(Ks.max))}rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ct.fromBufferAttribute(a,c),l&&(Vr.fromBufferAttribute(e,c),Ct.add(Vr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new k,l[b]=new k;const c=new k,f=new k,h=new k,d=new Ge,p=new Ge,v=new Ge,x=new k,m=new k;function u(b,A,y){c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,A),h.fromBufferAttribute(i,y),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,A),v.fromBufferAttribute(s,y),f.sub(c),h.sub(c),p.sub(d),v.sub(d);const L=1/(p.x*v.y-v.x*p.y);isFinite(L)&&(x.copy(f).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-v.x).multiplyScalar(L),a[b].add(x),a[A].add(x),a[y].add(x),l[b].add(m),l[A].add(m),l[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let b=0,A=_.length;b<A;++b){const y=_[b],L=y.start,G=y.count;for(let z=L,W=L+G;z<W;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const g=new k,M=new k,P=new k,C=new k;function w(b){P.fromBufferAttribute(r,b),C.copy(P);const A=a[b];g.copy(A),g.sub(P.multiplyScalar(P.dot(A))).normalize(),M.crossVectors(C,A);const L=M.dot(l[b])<0?-1:1;o.setXYZW(b,g.x,g.y,g.z,L)}for(let b=0,A=_.length;b<A;++b){const y=_[b],L=y.start,G=y.count;for(let z=L,W=L+G;z<W;z+=3)w(e.getX(z+0)),w(e.getX(z+1)),w(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,f=new k,h=new k;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*f;for(let u=0;u<f;u++)d[v++]=c[p++]}return new Yn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ji,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const d=c[f],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dp=new ht,ir=new xx,_a=new Td,hp=new k,Gr=new k,Wr=new k,Xr=new k,Hc=new k,va=new k,xa=new Ge,Sa=new Ge,ya=new Ge,pp=new k,mp=new k,gp=new k,Ma=new k,Ea=new k;class Gn extends kt{constructor(e=new Ji,n=new C2){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){va.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(Hc.fromBufferAttribute(h,e),o?va.addScaledVector(Hc,f):va.addScaledVector(Hc.sub(n),f))}n.add(va)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(_a.containsPoint(ir.origin)===!1&&(ir.intersectSphere(_a,hp)===null||ir.origin.distanceToSquared(hp)>(e.far-e.near)**2))&&(dp.copy(s).invert(),ir.copy(e.ray).applyMatrix4(dp),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],u=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,P=g;M<P;M+=3){const C=a.getX(M),w=a.getX(M+1),b=a.getX(M+2);r=Aa(this,u,e,i,c,f,h,C,w,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){const _=a.getX(m),g=a.getX(m+1),M=a.getX(m+2);r=Aa(this,o,e,i,c,f,h,_,g,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],u=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,P=g;M<P;M+=3){const C=M,w=M+1,b=M+2;r=Aa(this,u,e,i,c,f,h,C,w,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){const _=m,g=m+1,M=m+2;r=Aa(this,o,e,i,c,f,h,_,g,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Rx(t,e,n,i,r,s,o,a){let l;if(e.side===Qt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Yi,a),l===null)return null;Ea.copy(a),Ea.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ea);return c<n.near||c>n.far?null:{distance:c,point:Ea.clone(),object:t}}function Aa(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Gr),t.getVertexPosition(l,Wr),t.getVertexPosition(c,Xr);const f=Rx(t,e,n,i,Gr,Wr,Xr,Ma);if(f){r&&(xa.fromBufferAttribute(r,a),Sa.fromBufferAttribute(r,l),ya.fromBufferAttribute(r,c),f.uv=Vn.getInterpolation(Ma,Gr,Wr,Xr,xa,Sa,ya,new Ge)),s&&(xa.fromBufferAttribute(s,a),Sa.fromBufferAttribute(s,l),ya.fromBufferAttribute(s,c),f.uv1=Vn.getInterpolation(Ma,Gr,Wr,Xr,xa,Sa,ya,new Ge)),o&&(pp.fromBufferAttribute(o,a),mp.fromBufferAttribute(o,l),gp.fromBufferAttribute(o,c),f.normal=Vn.getInterpolation(Ma,Gr,Wr,Xr,pp,mp,gp,new k),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new k,materialIndex:0};Vn.getNormal(Gr,Wr,Xr,h.normal),f.face=h}return f}class Ho extends Ji{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let d=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new qn(c,3)),this.setAttribute("normal",new qn(f,3)),this.setAttribute("uv",new qn(h,2));function v(x,m,u,_,g,M,P,C,w,b,A){const y=M/w,L=P/b,G=M/2,z=P/2,W=C/2,$=w+1,H=b+1;let te=0,D=0;const j=new k;for(let K=0;K<H;K++){const oe=K*L-z;for(let ye=0;ye<$;ye++){const ze=ye*y-G;j[x]=ze*_,j[m]=oe*g,j[u]=W,c.push(j.x,j.y,j.z),j[x]=0,j[m]=0,j[u]=C>0?1:-1,f.push(j.x,j.y,j.z),h.push(ye/w),h.push(1-K/b),te+=1}}for(let K=0;K<b;K++)for(let oe=0;oe<w;oe++){const ye=d+oe+$*K,ze=d+oe+$*(K+1),V=d+(oe+1)+$*(K+1),ne=d+(oe+1)+$*K;l.push(ye,ze,ne),l.push(ze,V,ne),D+=6}a.addGroup(p,D,A),p+=D,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function zt(t){const e={};for(let n=0;n<t.length;n++){const i=Ls(t[n]);for(const r in i)e[r]=i[r]}return e}function Px(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function R2(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Lx={clone:Ls,merge:zt};var bx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bx,this.fragmentShader=Dx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=Px(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class P2 extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=ci}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new k,_p=new Ge,vp=new Ge;class _n extends P2{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ef*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ec*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ef*2*Math.atan(Math.tan(Ec*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,n){return this.getViewBounds(e,_p,vp),n.subVectors(vp,_p)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ec*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const jr=-90,Yr=1;class Ix extends kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(jr,Yr,e,n);r.layers=this.layers,this.add(r);const s=new _n(jr,Yr,e,n);s.layers=this.layers,this.add(s);const o=new _n(jr,Yr,e,n);o.layers=this.layers,this.add(o);const a=new _n(jr,Yr,e,n);a.layers=this.layers,this.add(a);const l=new _n(jr,Yr,e,n);l.layers=this.layers,this.add(l);const c=new _n(jr,Yr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ml)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class L2 extends Jt{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:ws,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ux extends wr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new L2(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ho(5,5,5),s=new qi({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:Gi});s.uniforms.tEquirect.value=n;const o=new Gn(r,s),a=n.minFilter;return n.minFilter===_r&&(n.minFilter=bn),new Ix(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Vc=new k,Nx=new k,Fx=new Ne;class cr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Vc.subVectors(i,n).cross(Nx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Vc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Fx.getNormalMatrix(e),r=this.coplanarPoint(Vc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new Td,Ca=new k;class Rd{constructor(e=new cr,n=new cr,i=new cr,r=new cr,s=new cr,o=new cr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ci){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],h=r[6],d=r[7],p=r[8],v=r[9],x=r[10],m=r[11],u=r[12],_=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,m-p,M-u).normalize(),i[1].setComponents(l+s,d+c,m+p,M+u).normalize(),i[2].setComponents(l+o,d+f,m+v,M+_).normalize(),i[3].setComponents(l-o,d-f,m-v,M-_).normalize(),i[4].setComponents(l-a,d-h,m-x,M-g).normalize(),n===ci)i[5].setComponents(l+a,d+h,m+x,M+g).normalize();else if(n===Ml)i[5].setComponents(a,h,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ca.x=r.normal.x>0?e.max.x:e.min.x,Ca.y=r.normal.y>0?e.max.y:e.min.y,Ca.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function b2(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Ox(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const f=l.array,h=l._updateRange,d=l.updateRanges;if(t.bindBuffer(c,a),h.count===-1&&d.length===0&&t.bufferSubData(c,0,f),d.length!==0){for(let p=0,v=d.length;p<v;p++){const x=d[p];t.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(c,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Wl extends Ji{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,d=n/l,p=[],v=[],x=[],m=[];for(let u=0;u<f;u++){const _=u*d-o;for(let g=0;g<c;g++){const M=g*h-s;v.push(M,-_,0),x.push(0,0,1),m.push(g/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const g=_+c*u,M=_+c*(u+1),P=_+1+c*(u+1),C=_+1+c*u;p.push(g,M,C),p.push(M,P,C)}this.setIndex(p),this.setAttribute("position",new qn(v,3)),this.setAttribute("normal",new qn(x,3)),this.setAttribute("uv",new qn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.width,e.height,e.widthSegments,e.heightSegments)}}var kx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bx=`#ifdef USE_ALPHAHASH
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
#endif`,zx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wx=`#ifdef USE_AOMAP
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
#endif`,Xx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jx=`#ifdef USE_BATCHING
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
#endif`,Yx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$x=`#ifdef USE_IRIDESCENCE
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
#endif`,Qx=`#ifdef USE_BUMPMAP
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
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,aS=`#define PI 3.141592653589793
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
} // validated`,lS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cS=`vec3 transformedNormal = objectNormal;
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
#endif`,uS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pS="gl_FragColor = linearToOutputTexel( gl_FragColor );",mS=`
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
}`,gS=`#ifdef USE_ENVMAP
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
#endif`,_S=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vS=`#ifdef USE_ENVMAP
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
#endif`,xS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SS=`#ifdef USE_ENVMAP
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
#endif`,yS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ES=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CS=`#ifdef USE_GRADIENTMAP
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
}`,wS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PS=`uniform bool receiveShadow;
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
#endif`,LS=`#ifdef USE_ENVMAP
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
#endif`,bS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,US=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NS=`PhysicalMaterial material;
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
#endif`,FS=`struct PhysicalMaterial {
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
}`,OS=`
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
#endif`,kS=`#if defined( RE_IndirectDiffuse )
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
#endif`,BS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,YS=`#if defined( USE_POINTS_UV )
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
#endif`,qS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$S=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JS=`#ifdef USE_MORPHTARGETS
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
#endif`,e3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o3=`#ifdef USE_NORMALMAP
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
#endif`,a3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,h3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,M3=`float getShadowMask() {
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
}`,E3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A3=`#ifdef USE_SKINNING
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
#endif`,C3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w3=`#ifdef USE_SKINNING
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
#endif`,T3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b3=`#ifdef USE_TRANSMISSION
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
#endif`,D3=`#ifdef USE_TRANSMISSION
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
#endif`,I3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const O3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k3=`uniform sampler2D t2D;
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
}`,B3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,H3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G3=`#include <common>
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
}`,W3=`#if DEPTH_PACKING == 3200
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
}`,X3=`#define DISTANCE
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
}`,j3=`#define DISTANCE
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
}`,Y3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K3=`uniform float scale;
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
}`,Z3=`uniform vec3 diffuse;
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
}`,$3=`#include <common>
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
}`,Q3=`uniform vec3 diffuse;
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
}`,J3=`#define LAMBERT
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
}`,ey=`#define LAMBERT
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
}`,ty=`#define MATCAP
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
}`,ny=`#define MATCAP
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
}`,iy=`#define NORMAL
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
}`,ry=`#define NORMAL
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
}`,sy=`#define PHONG
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
}`,oy=`#define PHONG
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
}`,ay=`#define STANDARD
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
}`,ly=`#define STANDARD
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
}`,cy=`#define TOON
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
}`,uy=`#define TOON
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
}`,fy=`uniform float size;
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
}`,dy=`uniform vec3 diffuse;
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
}`,hy=`#include <common>
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
}`,py=`uniform vec3 color;
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
}`,my=`uniform float rotation;
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
}`,gy=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:kx,alphahash_pars_fragment:Bx,alphamap_fragment:zx,alphamap_pars_fragment:Hx,alphatest_fragment:Vx,alphatest_pars_fragment:Gx,aomap_fragment:Wx,aomap_pars_fragment:Xx,batching_pars_vertex:jx,batching_vertex:Yx,begin_vertex:qx,beginnormal_vertex:Kx,bsdfs:Zx,iridescence_fragment:$x,bumpmap_pars_fragment:Qx,clipping_planes_fragment:Jx,clipping_planes_pars_fragment:eS,clipping_planes_pars_vertex:tS,clipping_planes_vertex:nS,color_fragment:iS,color_pars_fragment:rS,color_pars_vertex:sS,color_vertex:oS,common:aS,cube_uv_reflection_fragment:lS,defaultnormal_vertex:cS,displacementmap_pars_vertex:uS,displacementmap_vertex:fS,emissivemap_fragment:dS,emissivemap_pars_fragment:hS,colorspace_fragment:pS,colorspace_pars_fragment:mS,envmap_fragment:gS,envmap_common_pars_fragment:_S,envmap_pars_fragment:vS,envmap_pars_vertex:xS,envmap_physical_pars_fragment:LS,envmap_vertex:SS,fog_vertex:yS,fog_pars_vertex:MS,fog_fragment:ES,fog_pars_fragment:AS,gradientmap_pars_fragment:CS,lightmap_pars_fragment:wS,lights_lambert_fragment:TS,lights_lambert_pars_fragment:RS,lights_pars_begin:PS,lights_toon_fragment:bS,lights_toon_pars_fragment:DS,lights_phong_fragment:IS,lights_phong_pars_fragment:US,lights_physical_fragment:NS,lights_physical_pars_fragment:FS,lights_fragment_begin:OS,lights_fragment_maps:kS,lights_fragment_end:BS,logdepthbuf_fragment:zS,logdepthbuf_pars_fragment:HS,logdepthbuf_pars_vertex:VS,logdepthbuf_vertex:GS,map_fragment:WS,map_pars_fragment:XS,map_particle_fragment:jS,map_particle_pars_fragment:YS,metalnessmap_fragment:qS,metalnessmap_pars_fragment:KS,morphinstance_vertex:ZS,morphcolor_vertex:$S,morphnormal_vertex:QS,morphtarget_pars_vertex:JS,morphtarget_vertex:e3,normal_fragment_begin:t3,normal_fragment_maps:n3,normal_pars_fragment:i3,normal_pars_vertex:r3,normal_vertex:s3,normalmap_pars_fragment:o3,clearcoat_normal_fragment_begin:a3,clearcoat_normal_fragment_maps:l3,clearcoat_pars_fragment:c3,iridescence_pars_fragment:u3,opaque_fragment:f3,packing:d3,premultiplied_alpha_fragment:h3,project_vertex:p3,dithering_fragment:m3,dithering_pars_fragment:g3,roughnessmap_fragment:_3,roughnessmap_pars_fragment:v3,shadowmap_pars_fragment:x3,shadowmap_pars_vertex:S3,shadowmap_vertex:y3,shadowmask_pars_fragment:M3,skinbase_vertex:E3,skinning_pars_vertex:A3,skinning_vertex:C3,skinnormal_vertex:w3,specularmap_fragment:T3,specularmap_pars_fragment:R3,tonemapping_fragment:P3,tonemapping_pars_fragment:L3,transmission_fragment:b3,transmission_pars_fragment:D3,uv_pars_fragment:I3,uv_pars_vertex:U3,uv_vertex:N3,worldpos_vertex:F3,background_vert:O3,background_frag:k3,backgroundCube_vert:B3,backgroundCube_frag:z3,cube_vert:H3,cube_frag:V3,depth_vert:G3,depth_frag:W3,distanceRGBA_vert:X3,distanceRGBA_frag:j3,equirect_vert:Y3,equirect_frag:q3,linedashed_vert:K3,linedashed_frag:Z3,meshbasic_vert:$3,meshbasic_frag:Q3,meshlambert_vert:J3,meshlambert_frag:ey,meshmatcap_vert:ty,meshmatcap_frag:ny,meshnormal_vert:iy,meshnormal_frag:ry,meshphong_vert:sy,meshphong_frag:oy,meshphysical_vert:ay,meshphysical_frag:ly,meshtoon_vert:cy,meshtoon_frag:uy,points_vert:fy,points_frag:dy,shadow_vert:hy,shadow_frag:py,sprite_vert:my,sprite_frag:gy},le={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},zn={basic:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new We(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:zt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:zt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new We(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:zt([le.points,le.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:zt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:zt([le.common,le.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:zt([le.sprite,le.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:zt([le.common,le.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:zt([le.lights,le.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};zn.physical={uniforms:zt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const wa={r:0,b:0,g:0},sr=new Kn,_y=new ht;function vy(t,e,n,i,r,s,o){const a=new We(0);let l=s===!0?0:1,c,f,h=null,d=0,p=null;function v(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?n:e).get(g)),g}function x(_){let g=!1;const M=v(_);M===null?u(a,l):M&&M.isColor&&(u(M,1),g=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,g){const M=v(g);M&&(M.isCubeTexture||M.mapping===Vl)?(f===void 0&&(f=new Gn(new Ho(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Ls(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),sr.copy(g.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(_y.makeRotationFromEuler(sr)),f.material.toneMapped=Ke.getTransfer(M.colorSpace)!==tt,(h!==M||d!==M.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,h=M,d=M.version,p=t.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Gn(new Wl(2,2),new qi({name:"BackgroundMaterial",uniforms:Ls(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(M.colorSpace)!==tt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,g){_.getRGB(wa,R2(t)),i.buffers.color.setClear(wa.r,wa.g,wa.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(_,g=1){a.set(_),l=g,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(a,l)},render:x,addToRenderList:m}}function xy(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(y,L,G,z,W){let $=!1;const H=h(z,G,L);s!==H&&(s=H,c(s.object)),$=p(y,z,G,W),$&&v(y,z,G,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,M(y,L,G,z),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function f(y){return t.deleteVertexArray(y)}function h(y,L,G){const z=G.wireframe===!0;let W=i[y.id];W===void 0&&(W={},i[y.id]=W);let $=W[L.id];$===void 0&&($={},W[L.id]=$);let H=$[z];return H===void 0&&(H=d(l()),$[z]=H),H}function d(y){const L=[],G=[],z=[];for(let W=0;W<n;W++)L[W]=0,G[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:z,object:y,attributes:{},index:null}}function p(y,L,G,z){const W=s.attributes,$=L.attributes;let H=0;const te=G.getAttributes();for(const D in te)if(te[D].location>=0){const K=W[D];let oe=$[D];if(oe===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor)),K===void 0||K.attribute!==oe||oe&&K.data!==oe.data)return!0;H++}return s.attributesNum!==H||s.index!==z}function v(y,L,G,z){const W={},$=L.attributes;let H=0;const te=G.getAttributes();for(const D in te)if(te[D].location>=0){let K=$[D];K===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(K=y.instanceColor));const oe={};oe.attribute=K,K&&K.data&&(oe.data=K.data),W[D]=oe,H++}s.attributes=W,s.attributesNum=H,s.index=z}function x(){const y=s.newAttributes;for(let L=0,G=y.length;L<G;L++)y[L]=0}function m(y){u(y,0)}function u(y,L){const G=s.newAttributes,z=s.enabledAttributes,W=s.attributeDivisors;G[y]=1,z[y]===0&&(t.enableVertexAttribArray(y),z[y]=1),W[y]!==L&&(t.vertexAttribDivisor(y,L),W[y]=L)}function _(){const y=s.newAttributes,L=s.enabledAttributes;for(let G=0,z=L.length;G<z;G++)L[G]!==y[G]&&(t.disableVertexAttribArray(G),L[G]=0)}function g(y,L,G,z,W,$,H){H===!0?t.vertexAttribIPointer(y,L,G,W,$):t.vertexAttribPointer(y,L,G,z,W,$)}function M(y,L,G,z){x();const W=z.attributes,$=G.getAttributes(),H=L.defaultAttributeValues;for(const te in $){const D=$[te];if(D.location>=0){let j=W[te];if(j===void 0&&(te==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),te==="instanceColor"&&y.instanceColor&&(j=y.instanceColor)),j!==void 0){const K=j.normalized,oe=j.itemSize,ye=e.get(j);if(ye===void 0)continue;const ze=ye.buffer,V=ye.type,ne=ye.bytesPerElement,de=V===t.INT||V===t.UNSIGNED_INT||j.gpuType===Sd;if(j.isInterleavedBufferAttribute){const ue=j.data,we=ue.stride,be=j.offset;if(ue.isInstancedInterleavedBuffer){for(let ke=0;ke<D.locationSize;ke++)u(D.location+ke,ue.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ke=0;ke<D.locationSize;ke++)m(D.location+ke);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let ke=0;ke<D.locationSize;ke++)g(D.location+ke,oe/D.locationSize,V,K,we*ne,(be+oe/D.locationSize*ke)*ne,de)}else{if(j.isInstancedBufferAttribute){for(let ue=0;ue<D.locationSize;ue++)u(D.location+ue,j.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ue=0;ue<D.locationSize;ue++)m(D.location+ue);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let ue=0;ue<D.locationSize;ue++)g(D.location+ue,oe/D.locationSize,V,K,oe*ne,oe/D.locationSize*ue*ne,de)}}else if(H!==void 0){const K=H[te];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(D.location,K);break;case 3:t.vertexAttrib3fv(D.location,K);break;case 4:t.vertexAttrib4fv(D.location,K);break;default:t.vertexAttrib1fv(D.location,K)}}}}_()}function P(){b();for(const y in i){const L=i[y];for(const G in L){const z=L[G];for(const W in z)f(z[W].object),delete z[W];delete L[G]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const L=i[y.id];for(const G in L){const z=L[G];for(const W in z)f(z[W].object),delete z[W];delete L[G]}delete i[y.id]}function w(y){for(const L in i){const G=i[L];if(G[y.id]===void 0)continue;const z=G[y.id];for(const W in z)f(z[W].object),delete z[W];delete G[y.id]}}function b(){A(),o=!0,s!==r&&(s=r,c(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:A,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Sy(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,h){h!==0&&(t.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function a(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let p=0;for(let v=0;v<h;v++)p+=f[v];n.update(p,i,1)}function l(c,f,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],f[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,d,0,h);let v=0;for(let x=0;x<h;x++)v+=f[x];for(let x=0;x<d.length;x++)n.update(v,i,d[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function yy(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Dn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const w=C===Fo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==mi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==li&&!w)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),u=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:u,maxVaryings:_,maxFragmentUniforms:g,vertexTextures:M,maxSamples:P}}function My(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new cr,a=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,p){const v=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||v===null||v.length===0||s&&!m)s?f(null):c();else{const _=s?0:i,g=_*4;let M=u.clippingState||null;l.value=M,M=f(v,d,g,p);for(let P=0;P!==g;++P)M[P]=n[P];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,p,v){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const u=p+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let g=0,M=p;g!==x;++g,M+=4)o.copy(h[g]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Ey(t){let e=new WeakMap;function n(o,a){return a===ju?o.mapping=ws:a===Yu&&(o.mapping=Ts),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ju||a===Yu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ux(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class D2 extends P2{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ls=4,xp=[.125,.215,.35,.446,.526,.582],dr=20,Gc=new D2,Sp=new We;let Wc=null,Xc=0,jc=0,Yc=!1;const ur=(1+Math.sqrt(5))/2,qr=1/ur,yp=[new k(-ur,qr,0),new k(ur,qr,0),new k(-qr,0,ur),new k(qr,0,ur),new k(0,ur,-qr),new k(0,ur,qr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Mp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ap(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wc,Xc,jc),this._renderer.xr.enabled=Yc,e.scissorTest=!1,Ta(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ws||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Fo,format:Dn,colorSpace:Qi,depthBuffer:!1},r=Ep(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ep(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ay(s)),this._blurMaterial=Cy(s,e,n)}return r}_compileMaterial(e){const n=new Gn(this._lodPlanes[0],e);this._renderer.compile(n,Gc)}_sceneToCubeUV(e,n,i,r){const a=new _n(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Sp),f.toneMapping=Wi,f.autoClear=!1;const p=new C2({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),v=new Gn(new Ho,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Sp),x=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const g=this._cubeSize;Ta(r,_*g,u>2?g:0,g,g),f.setRenderTarget(r),x&&f.render(v,a),f.render(e,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ws||e.mapping===Ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ap());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Gn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ta(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Gc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=yp[(r-s-1)%yp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Gn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*dr-1),x=s/v,m=isFinite(s)?1+Math.floor(f*x):dr;m>dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${dr}`);const u=[];let _=0;for(let w=0;w<dr;++w){const b=w/x,A=Math.exp(-b*b/2);u.push(A),w===0?_+=A:w<m&&(_+=2*A)}for(let w=0;w<u.length;w++)u[w]=u[w]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=v,d.mipInt.value=g-i;const M=this._sizeLods[r],P=3*M*(r>g-ls?r-g+ls:0),C=4*(this._cubeSize-M);Ta(n,P,C,3*M,2*M),l.setRenderTarget(n),l.render(h,Gc)}}function Ay(t){const e=[],n=[],i=[];let r=t;const s=t-ls+1+xp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ls?l=xp[o-t+ls-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,v=6,x=3,m=2,u=1,_=new Float32Array(x*v*p),g=new Float32Array(m*v*p),M=new Float32Array(u*v*p);for(let C=0;C<p;C++){const w=C%3*2/3-1,b=C>2?0:-1,A=[w,b,0,w+2/3,b,0,w+2/3,b+1,0,w,b,0,w+2/3,b+1,0,w,b+1,0];_.set(A,x*v*C),g.set(d,m*v*C);const y=[C,C,C,C,C,C];M.set(y,u*v*C)}const P=new Ji;P.setAttribute("position",new Yn(_,x)),P.setAttribute("uv",new Yn(g,m)),P.setAttribute("faceIndex",new Yn(M,u)),e.push(P),r>ls&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ep(t,e,n){const i=new wr(t,e,n);return i.texture.mapping=Vl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ta(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Cy(t,e,n){const i=new Float32Array(dr),r=new k(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pd(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Ap(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pd(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Cp(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Pd(){return`

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
	`}function wy(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ju||l===Yu,f=l===ws||l===Ts;if(c||f){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Mp(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new Mp(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Ty(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&fo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ry(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let m=0,u=x.length;m<u;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const x=p[v];for(let m=0,u=x.length;m<u;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,v=h.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let g=0,M=_.length;g<M;g+=3){const P=_[g+0],C=_[g+1],w=_[g+2];d.push(P,C,C,w,w,P)}}else if(v!==void 0){const _=v.array;x=v.version;for(let g=0,M=_.length/3-1;g<M;g+=3){const P=g+0,C=g+1,w=g+2;d.push(P,C,C,w,w,P)}}else return;const m=new(S2(d)?T2:w2)(d,1);m.version=x;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function f(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function Py(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,d*o,v),n.update(p,i,v))}function f(d,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,v);let m=0;for(let u=0;u<v;u++)m+=p[u];n.update(m,i,1)}function h(d,p,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/o,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,x,0,v);let u=0;for(let _=0;_<v;_++)u+=p[_];for(let _=0;_<x.length;_++)n.update(u,i,x[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function Ly(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function by(t,e,n){const i=new WeakMap,r=new yt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let A=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let g=0;p===!0&&(g=1),v===!0&&(g=2),x===!0&&(g=3);let M=a.attributes.position.count*g,P=1;M>e.maxTextureSize&&(P=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const C=new Float32Array(M*P*4*h),w=new M2(C,M,P,h);w.type=li,w.needsUpdate=!0;const b=g*4;for(let y=0;y<h;y++){const L=m[y],G=u[y],z=_[y],W=M*P*4*y;for(let $=0;$<L.count;$++){const H=$*b;p===!0&&(r.fromBufferAttribute(L,$),C[W+H+0]=r.x,C[W+H+1]=r.y,C[W+H+2]=r.z,C[W+H+3]=0),v===!0&&(r.fromBufferAttribute(G,$),C[W+H+4]=r.x,C[W+H+5]=r.y,C[W+H+6]=r.z,C[W+H+7]=0),x===!0&&(r.fromBufferAttribute(z,$),C[W+H+8]=r.x,C[W+H+9]=r.y,C[W+H+10]=r.z,C[W+H+11]=z.itemSize===4?r.w:1)}}d={count:h,texture:w,size:new Ge(M,P)},i.set(a,d),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function Dy(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class I2 extends Jt{constructor(e,n,i,r,s,o,a,l,c,f=gs){if(f!==gs&&f!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===gs&&(i=Cr),i===void 0&&f===Ps&&(i=Rs),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:xn,this.minFilter=l!==void 0?l:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const U2=new Jt,wp=new I2(1,1),N2=new M2,F2=new _x,O2=new L2,Tp=[],Rp=[],Pp=new Float32Array(16),Lp=new Float32Array(9),bp=new Float32Array(4);function Ns(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Tp[r];if(s===void 0&&(s=new Float32Array(r),Tp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Et(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xl(t,e){let n=Rp[e];n===void 0&&(n=new Int32Array(e),Rp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Iy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Uy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function Ny(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Et(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function Fy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function Oy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(Et(n,i))return;bp.set(i),t.uniformMatrix2fv(this.addr,!1,bp),At(n,i)}}function ky(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(Et(n,i))return;Lp.set(i),t.uniformMatrix3fv(this.addr,!1,Lp),At(n,i)}}function By(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(Et(n,i))return;Pp.set(i),t.uniformMatrix4fv(this.addr,!1,Pp),At(n,i)}}function zy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Hy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function Vy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function Gy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function Wy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Xy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function jy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function Yy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function qy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(wp.compareFunction=x2,s=wp):s=U2,n.setTexture2D(e||s,r)}function Ky(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||F2,r)}function Zy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||O2,r)}function $y(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||N2,r)}function Qy(t){switch(t){case 5126:return Iy;case 35664:return Uy;case 35665:return Ny;case 35666:return Fy;case 35674:return Oy;case 35675:return ky;case 35676:return By;case 5124:case 35670:return zy;case 35667:case 35671:return Hy;case 35668:case 35672:return Vy;case 35669:case 35673:return Gy;case 5125:return Wy;case 36294:return Xy;case 36295:return jy;case 36296:return Yy;case 35678:case 36198:case 36298:case 36306:case 35682:return qy;case 35679:case 36299:case 36307:return Ky;case 35680:case 36300:case 36308:case 36293:return Zy;case 36289:case 36303:case 36311:case 36292:return $y}}function Jy(t,e){t.uniform1fv(this.addr,e)}function eM(t,e){const n=Ns(e,this.size,2);t.uniform2fv(this.addr,n)}function tM(t,e){const n=Ns(e,this.size,3);t.uniform3fv(this.addr,n)}function nM(t,e){const n=Ns(e,this.size,4);t.uniform4fv(this.addr,n)}function iM(t,e){const n=Ns(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function rM(t,e){const n=Ns(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function sM(t,e){const n=Ns(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function oM(t,e){t.uniform1iv(this.addr,e)}function aM(t,e){t.uniform2iv(this.addr,e)}function lM(t,e){t.uniform3iv(this.addr,e)}function cM(t,e){t.uniform4iv(this.addr,e)}function uM(t,e){t.uniform1uiv(this.addr,e)}function fM(t,e){t.uniform2uiv(this.addr,e)}function dM(t,e){t.uniform3uiv(this.addr,e)}function hM(t,e){t.uniform4uiv(this.addr,e)}function pM(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||U2,s[o])}function mM(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||F2,s[o])}function gM(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||O2,s[o])}function _M(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||N2,s[o])}function vM(t){switch(t){case 5126:return Jy;case 35664:return eM;case 35665:return tM;case 35666:return nM;case 35674:return iM;case 35675:return rM;case 35676:return sM;case 5124:case 35670:return oM;case 35667:case 35671:return aM;case 35668:case 35672:return lM;case 35669:case 35673:return cM;case 5125:return uM;case 36294:return fM;case 36295:return dM;case 36296:return hM;case 35678:case 36198:case 36298:case 36306:case 35682:return pM;case 35679:case 36299:case 36307:return mM;case 35680:case 36300:case 36308:case 36293:return gM;case 36289:case 36303:case 36311:case 36292:return _M}}class xM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Qy(n.type)}}class SM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=vM(n.type)}}class yM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const qc=/(\w+)(\])?(\[|\.)?/g;function Dp(t,e){t.seq.push(e),t.map[e.id]=e}function MM(t,e,n){const i=t.name,r=i.length;for(qc.lastIndex=0;;){const s=qc.exec(i),o=qc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Dp(n,c===void 0?new xM(a,t,e):new SM(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new yM(a),Dp(n,h)),n=h}}}class Ya{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);MM(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Ip(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const EM=37297;let AM=0;function CM(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function wM(t){const e=Ke.getPrimaries(Ke.workingColorSpace),n=Ke.getPrimaries(t);let i;switch(e===n?i="":e===yl&&n===Sl?i="LinearDisplayP3ToLinearSRGB":e===Sl&&n===yl&&(i="LinearSRGBToLinearDisplayP3"),t){case Qi:case Gl:return[i,"LinearTransferOETF"];case Bn:case wd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Up(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+CM(t.getShaderSource(e),o)}else return r}function TM(t,e){const n=wM(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function RM(t,e){let n;switch(e){case Xv:n="Linear";break;case jv:n="Reinhard";break;case Yv:n="Cineon";break;case qv:n="ACESFilmic";break;case Zv:n="AgX";break;case $v:n="Neutral";break;case Kv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ra=new k;function PM(){Ke.getLuminanceCoefficients(Ra);const t=Ra.x.toFixed(4),e=Ra.y.toFixed(4),n=Ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LM(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function bM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function DM(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function to(t){return t!==""}function Np(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Af(t){return t.replace(IM,NM)}const UM=new Map;function NM(t,e){let n=Ue[e];if(n===void 0){const i=UM.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Af(n)}const FM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Op(t){return t.replace(FM,OM)}function OM(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kp(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function kM(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===s2?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===_v?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function BM(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ws:case Ts:e="ENVMAP_TYPE_CUBE";break;case Vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zM(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function HM(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case o2:e="ENVMAP_BLENDING_MULTIPLY";break;case Gv:e="ENVMAP_BLENDING_MIX";break;case Wv:e="ENVMAP_BLENDING_ADD";break}return e}function VM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function GM(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=kM(n),c=BM(n),f=zM(n),h=HM(n),d=VM(n),p=LM(n),v=bM(s),x=r.createProgram();let m,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(to).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(to).join(`
`),u.length>0&&(u+=`
`)):(m=[kp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),u=[kp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?Ue.tonemapping_pars_fragment:"",n.toneMapping!==Wi?RM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,TM("linearToOutputTexel",n.outputColorSpace),PM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(to).join(`
`)),o=Af(o),o=Np(o,n),o=Fp(o,n),a=Af(a),a=Np(a,n),a=Fp(a,n),o=Op(o),a=Op(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=_+m+o,M=_+u+a,P=Ip(r,r.VERTEX_SHADER,g),C=Ip(r,r.FRAGMENT_SHADER,M);r.attachShader(x,P),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function w(L){if(t.debug.checkShaderErrors){const G=r.getProgramInfoLog(x).trim(),z=r.getShaderInfoLog(P).trim(),W=r.getShaderInfoLog(C).trim();let $=!0,H=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,P,C);else{const te=Up(r,P,"vertex"),D=Up(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+te+`
`+D)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||W==="")&&(H=!1);H&&(L.diagnostics={runnable:$,programLog:G,vertexShader:{log:z,prefix:m},fragmentShader:{log:W,prefix:u}})}r.deleteShader(P),r.deleteShader(C),b=new Ya(r,x),A=DM(r,x)}let b;this.getUniforms=function(){return b===void 0&&w(this),b};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,EM)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=AM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=C,this}let WM=0;class XM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new jM(e),n.set(e,i)),i}}class jM{constructor(e){this.id=WM++,this.code=e,this.usedTimes=0}}function YM(t,e,n,i,r,s,o){const a=new E2,l=new XM,c=new Set,f=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,y,L,G,z){const W=G.fog,$=z.geometry,H=A.isMeshStandardMaterial?G.environment:null,te=(A.isMeshStandardMaterial?n:e).get(A.envMap||H),D=te&&te.mapping===Vl?te.image.height:null,j=v[A.type];A.precision!==null&&(p=r.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const K=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,oe=K!==void 0?K.length:0;let ye=0;$.morphAttributes.position!==void 0&&(ye=1),$.morphAttributes.normal!==void 0&&(ye=2),$.morphAttributes.color!==void 0&&(ye=3);let ze,V,ne,de;if(j){const Xe=zn[j];ze=Xe.vertexShader,V=Xe.fragmentShader}else ze=A.vertexShader,V=A.fragmentShader,l.update(A),ne=l.getVertexShaderID(A),de=l.getFragmentShaderID(A);const ue=t.getRenderTarget(),we=z.isInstancedMesh===!0,be=z.isBatchedMesh===!0,ke=!!A.map,lt=!!A.matcap,R=!!te,pt=!!A.aoMap,Ze=!!A.lightMap,Qe=!!A.bumpMap,Me=!!A.normalMap,mt=!!A.displacementMap,Pe=!!A.emissiveMap,De=!!A.metalnessMap,T=!!A.roughnessMap,S=A.anisotropy>0,B=A.clearcoat>0,q=A.dispersion>0,Q=A.iridescence>0,Z=A.sheen>0,Ee=A.transmission>0,ce=S&&!!A.anisotropyMap,me=B&&!!A.clearcoatMap,Ie=B&&!!A.clearcoatNormalMap,ie=B&&!!A.clearcoatRoughnessMap,pe=Q&&!!A.iridescenceMap,Be=Q&&!!A.iridescenceThicknessMap,Re=Z&&!!A.sheenColorMap,ge=Z&&!!A.sheenRoughnessMap,Le=!!A.specularMap,Fe=!!A.specularColorMap,rt=!!A.specularIntensityMap,I=Ee&&!!A.transmissionMap,re=Ee&&!!A.thicknessMap,X=!!A.gradientMap,Y=!!A.alphaMap,ae=A.alphaTest>0,Ae=!!A.alphaHash,He=!!A.extensions;let gt=Wi;A.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(gt=t.toneMapping);const Rt={shaderID:j,shaderType:A.type,shaderName:A.name,vertexShader:ze,fragmentShader:V,defines:A.defines,customVertexShaderID:ne,customFragmentShaderID:de,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:be,batchingColor:be&&z._colorsTexture!==null,instancing:we,instancingColor:we&&z.instanceColor!==null,instancingMorph:we&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?t.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Qi,alphaToCoverage:!!A.alphaToCoverage,map:ke,matcap:lt,envMap:R,envMapMode:R&&te.mapping,envMapCubeUVHeight:D,aoMap:pt,lightMap:Ze,bumpMap:Qe,normalMap:Me,displacementMap:d&&mt,emissiveMap:Pe,normalMapObjectSpace:Me&&A.normalMapType===tx,normalMapTangentSpace:Me&&A.normalMapType===v2,metalnessMap:De,roughnessMap:T,anisotropy:S,anisotropyMap:ce,clearcoat:B,clearcoatMap:me,clearcoatNormalMap:Ie,clearcoatRoughnessMap:ie,dispersion:q,iridescence:Q,iridescenceMap:pe,iridescenceThicknessMap:Be,sheen:Z,sheenColorMap:Re,sheenRoughnessMap:ge,specularMap:Le,specularColorMap:Fe,specularIntensityMap:rt,transmission:Ee,transmissionMap:I,thicknessMap:re,gradientMap:X,opaque:A.transparent===!1&&A.blending===ms&&A.alphaToCoverage===!1,alphaMap:Y,alphaTest:ae,alphaHash:Ae,combine:A.combine,mapUv:ke&&x(A.map.channel),aoMapUv:pt&&x(A.aoMap.channel),lightMapUv:Ze&&x(A.lightMap.channel),bumpMapUv:Qe&&x(A.bumpMap.channel),normalMapUv:Me&&x(A.normalMap.channel),displacementMapUv:mt&&x(A.displacementMap.channel),emissiveMapUv:Pe&&x(A.emissiveMap.channel),metalnessMapUv:De&&x(A.metalnessMap.channel),roughnessMapUv:T&&x(A.roughnessMap.channel),anisotropyMapUv:ce&&x(A.anisotropyMap.channel),clearcoatMapUv:me&&x(A.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&x(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&x(A.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&x(A.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&x(A.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&x(A.sheenColorMap.channel),sheenRoughnessMapUv:ge&&x(A.sheenRoughnessMap.channel),specularMapUv:Le&&x(A.specularMap.channel),specularColorMapUv:Fe&&x(A.specularColorMap.channel),specularIntensityMapUv:rt&&x(A.specularIntensityMap.channel),transmissionMapUv:I&&x(A.transmissionMap.channel),thicknessMapUv:re&&x(A.thicknessMap.channel),alphaMapUv:Y&&x(A.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Me||S),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(ke||Y),fog:!!W,useFog:A.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ye,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:gt,decodeVideoTexture:ke&&A.map.isVideoTexture===!0&&Ke.getTransfer(A.map.colorSpace)===tt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===si,flipSided:A.side===Qt,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:He&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&A.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function u(A){const y=[];if(A.shaderID?y.push(A.shaderID):(y.push(A.customVertexShaderID),y.push(A.customFragmentShaderID)),A.defines!==void 0)for(const L in A.defines)y.push(L),y.push(A.defines[L]);return A.isRawShaderMaterial===!1&&(_(y,A),g(y,A),y.push(t.outputColorSpace)),y.push(A.customProgramCacheKey),y.join()}function _(A,y){A.push(y.precision),A.push(y.outputColorSpace),A.push(y.envMapMode),A.push(y.envMapCubeUVHeight),A.push(y.mapUv),A.push(y.alphaMapUv),A.push(y.lightMapUv),A.push(y.aoMapUv),A.push(y.bumpMapUv),A.push(y.normalMapUv),A.push(y.displacementMapUv),A.push(y.emissiveMapUv),A.push(y.metalnessMapUv),A.push(y.roughnessMapUv),A.push(y.anisotropyMapUv),A.push(y.clearcoatMapUv),A.push(y.clearcoatNormalMapUv),A.push(y.clearcoatRoughnessMapUv),A.push(y.iridescenceMapUv),A.push(y.iridescenceThicknessMapUv),A.push(y.sheenColorMapUv),A.push(y.sheenRoughnessMapUv),A.push(y.specularMapUv),A.push(y.specularColorMapUv),A.push(y.specularIntensityMapUv),A.push(y.transmissionMapUv),A.push(y.thicknessMapUv),A.push(y.combine),A.push(y.fogExp2),A.push(y.sizeAttenuation),A.push(y.morphTargetsCount),A.push(y.morphAttributeCount),A.push(y.numDirLights),A.push(y.numPointLights),A.push(y.numSpotLights),A.push(y.numSpotLightMaps),A.push(y.numHemiLights),A.push(y.numRectAreaLights),A.push(y.numDirLightShadows),A.push(y.numPointLightShadows),A.push(y.numSpotLightShadows),A.push(y.numSpotLightShadowsWithMaps),A.push(y.numLightProbes),A.push(y.shadowMapType),A.push(y.toneMapping),A.push(y.numClippingPlanes),A.push(y.numClipIntersection),A.push(y.depthPacking)}function g(A,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),A.push(a.mask)}function M(A){const y=v[A.type];let L;if(y){const G=zn[y];L=Lx.clone(G.uniforms)}else L=A.uniforms;return L}function P(A,y){let L;for(let G=0,z=f.length;G<z;G++){const W=f[G];if(W.cacheKey===y){L=W,++L.usedTimes;break}}return L===void 0&&(L=new GM(t,y,A,s),f.push(L)),L}function C(A){if(--A.usedTimes===0){const y=f.indexOf(A);f[y]=f[f.length-1],f.pop(),A.destroy()}}function w(A){l.remove(A)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:P,releaseProgram:C,releaseShaderCache:w,programs:f,dispose:b}}function qM(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function KM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Bp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function zp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,p,v,x,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:d,material:p,groupOrder:v,renderOrder:h.renderOrder,z:x,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=p,u.groupOrder=v,u.renderOrder=h.renderOrder,u.z=x,u.group=m),e++,u}function a(h,d,p,v,x,m){const u=o(h,d,p,v,x,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(h,d,p,v,x,m){const u=o(h,d,p,v,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,d){n.length>1&&n.sort(h||KM),i.length>1&&i.sort(d||Bp),r.length>1&&r.sort(d||Bp)}function f(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function ZM(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new zp,t.set(i,[o])):r>=s.length?(o=new zp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function $M(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new We};break;case"SpotLight":n={position:new k,direction:new k,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function QM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let JM=0;function eE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function tE(t){const e=new $M,n=QM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new ht,o=new ht;function a(c){let f=0,h=0,d=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,v=0,x=0,m=0,u=0,_=0,g=0,M=0,P=0,C=0,w=0;c.sort(eE);for(let A=0,y=c.length;A<y;A++){const L=c[A],G=L.color,z=L.intensity,W=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=G.r*z,h+=G.g*z,d+=G.b*z;else if(L.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],z);w++}else if(L.isDirectionalLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const te=L.shadow,D=n.get(L);D.shadowIntensity=te.intensity,D.shadowBias=te.bias,D.shadowNormalBias=te.normalBias,D.shadowRadius=te.radius,D.shadowMapSize=te.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=L.shadow.matrix,_++}i.directional[p]=H,p++}else if(L.isSpotLight){const H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(G).multiplyScalar(z),H.distance=W,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[x]=H;const te=L.shadow;if(L.map&&(i.spotLightMap[P]=L.map,P++,te.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[x]=te.matrix,L.castShadow){const D=n.get(L);D.shadowIntensity=te.intensity,D.shadowBias=te.bias,D.shadowNormalBias=te.normalBias,D.shadowRadius=te.radius,D.shadowMapSize=te.mapSize,i.spotShadow[x]=D,i.spotShadowMap[x]=$,M++}x++}else if(L.isRectAreaLight){const H=e.get(L);H.color.copy(G).multiplyScalar(z),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=H,m++}else if(L.isPointLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const te=L.shadow,D=n.get(L);D.shadowIntensity=te.intensity,D.shadowBias=te.bias,D.shadowNormalBias=te.normalBias,D.shadowRadius=te.radius,D.shadowMapSize=te.mapSize,D.shadowCameraNear=te.camera.near,D.shadowCameraFar=te.camera.far,i.pointShadow[v]=D,i.pointShadowMap[v]=$,i.pointShadowMatrix[v]=L.shadow.matrix,g++}i.point[v]=H,v++}else if(L.isHemisphereLight){const H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(z),H.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[u]=H,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const b=i.hash;(b.directionalLength!==p||b.pointLength!==v||b.spotLength!==x||b.rectAreaLength!==m||b.hemiLength!==u||b.numDirectionalShadows!==_||b.numPointShadows!==g||b.numSpotShadows!==M||b.numSpotMaps!==P||b.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=M+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,b.directionalLength=p,b.pointLength=v,b.spotLength=x,b.rectAreaLength=m,b.hemiLength=u,b.numDirectionalShadows=_,b.numPointShadows=g,b.numSpotShadows=M,b.numSpotMaps=P,b.numLightProbes=w,i.version=JM++)}function l(c,f){let h=0,d=0,p=0,v=0,x=0;const m=f.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const g=c[u];if(g.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(g.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(g.width*.5,0,0),M.halfHeight.set(0,g.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(g.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),d++}else if(g.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Hp(t){const e=new tE(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function nE(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Hp(t),e.set(r,[a])):s>=o.length?(a=new Hp(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class iE extends zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rE extends zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oE=`uniform sampler2D shadow_pass;
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
}`;function aE(t,e,n){let i=new Rd;const r=new Ge,s=new Ge,o=new yt,a=new iE({depthPacking:ex}),l=new rE,c={},f=n.maxTextureSize,h={[Yi]:Qt,[Qt]:Yi,[si]:si},d=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:sE,fragmentShader:oE}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new Ji;v.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Gn(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=s2;let u=this.type;this.render=function(C,w,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const A=t.getRenderTarget(),y=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),G=t.state;G.setBlending(Gi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=u!==ni&&this.type===ni,W=u===ni&&this.type!==ni;for(let $=0,H=C.length;$<H;$++){const te=C[$],D=te.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const j=D.getFrameExtents();if(r.multiply(j),s.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/j.x),r.x=s.x*j.x,D.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/j.y),r.y=s.y*j.y,D.mapSize.y=s.y)),D.map===null||z===!0||W===!0){const oe=this.type!==ni?{minFilter:xn,magFilter:xn}:{};D.map!==null&&D.map.dispose(),D.map=new wr(r.x,r.y,oe),D.map.texture.name=te.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const K=D.getViewportCount();for(let oe=0;oe<K;oe++){const ye=D.getViewport(oe);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),G.viewport(o),D.updateMatrices(te,oe),i=D.getFrustum(),M(w,b,D.camera,te,this.type)}D.isPointLightShadow!==!0&&this.type===ni&&_(D,b),D.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(A,y,L)};function _(C,w){const b=e.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new wr(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(w,null,b,d,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(w,null,b,p,x,null)}function g(C,w,b,A){let y=null;const L=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)y=L;else if(y=b.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=y.uuid,z=w.uuid;let W=c[G];W===void 0&&(W={},c[G]=W);let $=W[z];$===void 0&&($=y.clone(),W[z]=$,w.addEventListener("dispose",P)),y=$}if(y.visible=w.visible,y.wireframe=w.wireframe,A===ni?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:h[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,b.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const G=t.properties.get(y);G.light=b}return y}function M(C,w,b,A,y){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===ni)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);const z=e.update(C),W=C.material;if(Array.isArray(W)){const $=z.groups;for(let H=0,te=$.length;H<te;H++){const D=$[H],j=W[D.materialIndex];if(j&&j.visible){const K=g(C,j,A,y);C.onBeforeShadow(t,C,w,b,z,K,D),t.renderBufferDirect(b,null,z,K,C,D),C.onAfterShadow(t,C,w,b,z,K,D)}}}else if(W.visible){const $=g(C,W,A,y);C.onBeforeShadow(t,C,w,b,z,$,null),t.renderBufferDirect(b,null,z,$,C,null),C.onAfterShadow(t,C,w,b,z,$,null)}}const G=C.children;for(let z=0,W=G.length;z<W;z++)M(G[z],w,b,A,y)}function P(C){C.target.removeEventListener("dispose",P);for(const b in c){const A=c[b],y=C.target.uuid;y in A&&(A[y].dispose(),delete A[y])}}}function lE(t){function e(){let I=!1;const re=new yt;let X=null;const Y=new yt(0,0,0,0);return{setMask:function(ae){X!==ae&&!I&&(t.colorMask(ae,ae,ae,ae),X=ae)},setLocked:function(ae){I=ae},setClear:function(ae,Ae,He,gt,Rt){Rt===!0&&(ae*=gt,Ae*=gt,He*=gt),re.set(ae,Ae,He,gt),Y.equals(re)===!1&&(t.clearColor(ae,Ae,He,gt),Y.copy(re))},reset:function(){I=!1,X=null,Y.set(-1,0,0,0)}}}function n(){let I=!1,re=null,X=null,Y=null;return{setTest:function(ae){ae?de(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(ae){re!==ae&&!I&&(t.depthMask(ae),re=ae)},setFunc:function(ae){if(X!==ae){switch(ae){case Fv:t.depthFunc(t.NEVER);break;case Ov:t.depthFunc(t.ALWAYS);break;case kv:t.depthFunc(t.LESS);break;case vl:t.depthFunc(t.LEQUAL);break;case Bv:t.depthFunc(t.EQUAL);break;case zv:t.depthFunc(t.GEQUAL);break;case Hv:t.depthFunc(t.GREATER);break;case Vv:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}X=ae}},setLocked:function(ae){I=ae},setClear:function(ae){Y!==ae&&(t.clearDepth(ae),Y=ae)},reset:function(){I=!1,re=null,X=null,Y=null}}}function i(){let I=!1,re=null,X=null,Y=null,ae=null,Ae=null,He=null,gt=null,Rt=null;return{setTest:function(Xe){I||(Xe?de(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(Xe){re!==Xe&&!I&&(t.stencilMask(Xe),re=Xe)},setFunc:function(Xe,Zn,Fn){(X!==Xe||Y!==Zn||ae!==Fn)&&(t.stencilFunc(Xe,Zn,Fn),X=Xe,Y=Zn,ae=Fn)},setOp:function(Xe,Zn,Fn){(Ae!==Xe||He!==Zn||gt!==Fn)&&(t.stencilOp(Xe,Zn,Fn),Ae=Xe,He=Zn,gt=Fn)},setLocked:function(Xe){I=Xe},setClear:function(Xe){Rt!==Xe&&(t.clearStencil(Xe),Rt=Xe)},reset:function(){I=!1,re=null,X=null,Y=null,ae=null,Ae=null,He=null,gt=null,Rt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},f={},h=new WeakMap,d=[],p=null,v=!1,x=null,m=null,u=null,_=null,g=null,M=null,P=null,C=new We(0,0,0),w=0,b=!1,A=null,y=null,L=null,G=null,z=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,H=0;const te=t.getParameter(t.VERSION);te.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(te)[1]),$=H>=1):te.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),$=H>=2);let D=null,j={};const K=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),ye=new yt().fromArray(K),ze=new yt().fromArray(oe);function V(I,re,X,Y){const ae=new Uint8Array(4),Ae=t.createTexture();t.bindTexture(I,Ae),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let He=0;He<X;He++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(re,0,t.RGBA,1,1,Y,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(re+He,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return Ae}const ne={};ne[t.TEXTURE_2D]=V(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=V(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=V(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=V(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(t.DEPTH_TEST),s.setFunc(vl),Qe(!1),Me(Yh),de(t.CULL_FACE),pt(Gi);function de(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function ue(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function we(I,re){return f[I]!==re?(t.bindFramebuffer(I,re),f[I]=re,I===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=re),I===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=re),!0):!1}function be(I,re){let X=d,Y=!1;if(I){X=h.get(re),X===void 0&&(X=[],h.set(re,X));const ae=I.textures;if(X.length!==ae.length||X[0]!==t.COLOR_ATTACHMENT0){for(let Ae=0,He=ae.length;Ae<He;Ae++)X[Ae]=t.COLOR_ATTACHMENT0+Ae;X.length=ae.length,Y=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,Y=!0);Y&&t.drawBuffers(X)}function ke(I){return p!==I?(t.useProgram(I),p=I,!0):!1}const lt={[fr]:t.FUNC_ADD,[xv]:t.FUNC_SUBTRACT,[Sv]:t.FUNC_REVERSE_SUBTRACT};lt[yv]=t.MIN,lt[Mv]=t.MAX;const R={[Ev]:t.ZERO,[Av]:t.ONE,[Cv]:t.SRC_COLOR,[Wu]:t.SRC_ALPHA,[bv]:t.SRC_ALPHA_SATURATE,[Pv]:t.DST_COLOR,[Tv]:t.DST_ALPHA,[wv]:t.ONE_MINUS_SRC_COLOR,[Xu]:t.ONE_MINUS_SRC_ALPHA,[Lv]:t.ONE_MINUS_DST_COLOR,[Rv]:t.ONE_MINUS_DST_ALPHA,[Dv]:t.CONSTANT_COLOR,[Iv]:t.ONE_MINUS_CONSTANT_COLOR,[Uv]:t.CONSTANT_ALPHA,[Nv]:t.ONE_MINUS_CONSTANT_ALPHA};function pt(I,re,X,Y,ae,Ae,He,gt,Rt,Xe){if(I===Gi){v===!0&&(ue(t.BLEND),v=!1);return}if(v===!1&&(de(t.BLEND),v=!0),I!==vv){if(I!==x||Xe!==b){if((m!==fr||g!==fr)&&(t.blendEquation(t.FUNC_ADD),m=fr,g=fr),Xe)switch(I){case ms:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qh:t.blendFunc(t.ONE,t.ONE);break;case Kh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Zh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ms:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Kh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Zh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}u=null,_=null,M=null,P=null,C.set(0,0,0),w=0,x=I,b=Xe}return}ae=ae||re,Ae=Ae||X,He=He||Y,(re!==m||ae!==g)&&(t.blendEquationSeparate(lt[re],lt[ae]),m=re,g=ae),(X!==u||Y!==_||Ae!==M||He!==P)&&(t.blendFuncSeparate(R[X],R[Y],R[Ae],R[He]),u=X,_=Y,M=Ae,P=He),(gt.equals(C)===!1||Rt!==w)&&(t.blendColor(gt.r,gt.g,gt.b,Rt),C.copy(gt),w=Rt),x=I,b=!1}function Ze(I,re){I.side===si?ue(t.CULL_FACE):de(t.CULL_FACE);let X=I.side===Qt;re&&(X=!X),Qe(X),I.blending===ms&&I.transparent===!1?pt(Gi):pt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const Y=I.stencilWrite;o.setTest(Y),Y&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Pe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(I){A!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),A=I)}function Me(I){I!==mv?(de(t.CULL_FACE),I!==y&&(I===Yh?t.cullFace(t.BACK):I===gv?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),y=I}function mt(I){I!==L&&($&&t.lineWidth(I),L=I)}function Pe(I,re,X){I?(de(t.POLYGON_OFFSET_FILL),(G!==re||z!==X)&&(t.polygonOffset(re,X),G=re,z=X)):ue(t.POLYGON_OFFSET_FILL)}function De(I){I?de(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function T(I){I===void 0&&(I=t.TEXTURE0+W-1),D!==I&&(t.activeTexture(I),D=I)}function S(I,re,X){X===void 0&&(D===null?X=t.TEXTURE0+W-1:X=D);let Y=j[X];Y===void 0&&(Y={type:void 0,texture:void 0},j[X]=Y),(Y.type!==I||Y.texture!==re)&&(D!==X&&(t.activeTexture(X),D=X),t.bindTexture(I,re||ne[I]),Y.type=I,Y.texture=re)}function B(){const I=j[D];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Be(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(I){ye.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),ye.copy(I))}function ge(I){ze.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),ze.copy(I))}function Le(I,re){let X=l.get(re);X===void 0&&(X=new WeakMap,l.set(re,X));let Y=X.get(I);Y===void 0&&(Y=t.getUniformBlockIndex(re,I.name),X.set(I,Y))}function Fe(I,re){const Y=l.get(re).get(I);a.get(re)!==Y&&(t.uniformBlockBinding(re,Y,I.__bindingPointIndex),a.set(re,Y))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},D=null,j={},f={},h=new WeakMap,d=[],p=null,v=!1,x=null,m=null,u=null,_=null,g=null,M=null,P=null,C=new We(0,0,0),w=0,b=!1,A=null,y=null,L=null,G=null,z=null,ye.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:de,disable:ue,bindFramebuffer:we,drawBuffers:be,useProgram:ke,setBlending:pt,setMaterial:Ze,setFlipSided:Qe,setCullFace:Me,setLineWidth:mt,setPolygonOffset:Pe,setScissorTest:De,activeTexture:T,bindTexture:S,unbindTexture:B,compressedTexImage2D:q,compressedTexImage3D:Q,texImage2D:pe,texImage3D:Be,updateUBOMapping:Le,uniformBlockBinding:Fe,texStorage2D:Ie,texStorage3D:ie,texSubImage2D:Z,texSubImage3D:Ee,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:Re,viewport:ge,reset:rt}}function Vp(t,e,n,i){const r=cE(i);switch(n){case f2:return t*e;case h2:return t*e;case p2:return t*e*2;case m2:return t*e/r.components*r.byteLength;case Ed:return t*e/r.components*r.byteLength;case g2:return t*e*2/r.components*r.byteLength;case Ad:return t*e*2/r.components*r.byteLength;case d2:return t*e*3/r.components*r.byteLength;case Dn:return t*e*4/r.components*r.byteLength;case Cd:return t*e*4/r.components*r.byteLength;case Va:case Ga:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wa:case Xa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $u:case Ju:return Math.max(t,16)*Math.max(e,8)/4;case Zu:case Qu:return Math.max(t,8)*Math.max(e,8)/2;case ef:case tf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case nf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case rf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case of:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case af:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case lf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case cf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case uf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ff:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case df:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case hf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case pf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case mf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case gf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case _f:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ja:case vf:case xf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case _2:case Sf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case yf:case Mf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function cE(t){switch(t){case mi:case l2:return{byteLength:1,components:1};case Lo:case c2:case Fo:return{byteLength:2,components:1};case yd:case Md:return{byteLength:2,components:4};case Cr:case Sd:case li:return{byteLength:4,components:1};case u2:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function uE(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,f=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,S){return p?new OffscreenCanvas(T,S):El("canvas")}function x(T,S,B){let q=1;const Q=De(T);if((Q.width>B||Q.height>B)&&(q=B/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Z=Math.floor(q*Q.width),Ee=Math.floor(q*Q.height);h===void 0&&(h=v(Z,Ee));const ce=S?v(Z,Ee):h;return ce.width=Z,ce.height=Ee,ce.getContext("2d").drawImage(T,0,0,Z,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+Ee+")."),ce}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps&&T.minFilter!==xn&&T.minFilter!==bn}function u(T){t.generateMipmap(T)}function _(T,S,B,q,Q=!1){if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z=S;if(S===t.RED&&(B===t.FLOAT&&(Z=t.R32F),B===t.HALF_FLOAT&&(Z=t.R16F),B===t.UNSIGNED_BYTE&&(Z=t.R8)),S===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.R8UI),B===t.UNSIGNED_SHORT&&(Z=t.R16UI),B===t.UNSIGNED_INT&&(Z=t.R32UI),B===t.BYTE&&(Z=t.R8I),B===t.SHORT&&(Z=t.R16I),B===t.INT&&(Z=t.R32I)),S===t.RG&&(B===t.FLOAT&&(Z=t.RG32F),B===t.HALF_FLOAT&&(Z=t.RG16F),B===t.UNSIGNED_BYTE&&(Z=t.RG8)),S===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.RG8UI),B===t.UNSIGNED_SHORT&&(Z=t.RG16UI),B===t.UNSIGNED_INT&&(Z=t.RG32UI),B===t.BYTE&&(Z=t.RG8I),B===t.SHORT&&(Z=t.RG16I),B===t.INT&&(Z=t.RG32I)),S===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),S===t.RGBA){const Ee=Q?xl:Ke.getTransfer(q);B===t.FLOAT&&(Z=t.RGBA32F),B===t.HALF_FLOAT&&(Z=t.RGBA16F),B===t.UNSIGNED_BYTE&&(Z=Ee===tt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function g(T,S){let B;return T?S===null||S===Cr||S===Rs?B=t.DEPTH24_STENCIL8:S===li?B=t.DEPTH32F_STENCIL8:S===Lo&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Cr||S===Rs?B=t.DEPTH_COMPONENT24:S===li?B=t.DEPTH_COMPONENT32F:S===Lo&&(B=t.DEPTH_COMPONENT16),B}function M(T,S){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==xn&&T.minFilter!==bn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function P(T){const S=T.target;S.removeEventListener("dispose",P),w(S),S.isVideoTexture&&f.delete(S)}function C(T){const S=T.target;S.removeEventListener("dispose",C),A(S)}function w(T){const S=i.get(T);if(S.__webglInit===void 0)return;const B=T.source,q=d.get(B);if(q){const Q=q[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(T),Object.keys(q).length===0&&d.delete(B)}i.remove(T)}function b(T){const S=i.get(T);t.deleteTexture(S.__webglTexture);const B=T.source,q=d.get(B);delete q[S.__cacheKey],o.memory.textures--}function A(T){const S=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let Q=0;Q<S.__webglFramebuffer[q].length;Q++)t.deleteFramebuffer(S.__webglFramebuffer[q][Q]);else t.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)t.deleteFramebuffer(S.__webglFramebuffer[q]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=T.textures;for(let q=0,Q=B.length;q<Q;q++){const Z=i.get(B[q]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(B[q])}i.remove(T)}let y=0;function L(){y=0}function G(){const T=y;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),y+=1,T}function z(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function W(T,S){const B=i.get(T);if(T.isVideoTexture&&mt(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(B,T,S);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+S)}function $(T,S){const B=i.get(T);if(T.version>0&&B.__version!==T.version){ze(B,T,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+S)}function H(T,S){const B=i.get(T);if(T.version>0&&B.__version!==T.version){ze(B,T,S);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+S)}function te(T,S){const B=i.get(T);if(T.version>0&&B.__version!==T.version){V(B,T,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+S)}const D={[qu]:t.REPEAT,[gr]:t.CLAMP_TO_EDGE,[Ku]:t.MIRRORED_REPEAT},j={[xn]:t.NEAREST,[Qv]:t.NEAREST_MIPMAP_NEAREST,[aa]:t.NEAREST_MIPMAP_LINEAR,[bn]:t.LINEAR,[Mc]:t.LINEAR_MIPMAP_NEAREST,[_r]:t.LINEAR_MIPMAP_LINEAR},K={[nx]:t.NEVER,[lx]:t.ALWAYS,[ix]:t.LESS,[x2]:t.LEQUAL,[rx]:t.EQUAL,[ax]:t.GEQUAL,[sx]:t.GREATER,[ox]:t.NOTEQUAL};function oe(T,S){if(S.type===li&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===bn||S.magFilter===Mc||S.magFilter===aa||S.magFilter===_r||S.minFilter===bn||S.minFilter===Mc||S.minFilter===aa||S.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,D[S.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,D[S.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,D[S.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,j[S.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,j[S.minFilter]),S.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,K[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===xn||S.minFilter!==aa&&S.minFilter!==_r||S.type===li&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ye(T,S){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",P));const q=S.source;let Q=d.get(q);Q===void 0&&(Q={},d.set(q,Q));const Z=z(S);if(Z!==T.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[Z].usedTimes++;const Ee=Q[T.__cacheKey];Ee!==void 0&&(Q[T.__cacheKey].usedTimes--,Ee.usedTimes===0&&b(S)),T.__cacheKey=Z,T.__webglTexture=Q[Z].texture}return B}function ze(T,S,B){let q=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=t.TEXTURE_3D);const Q=ye(T,S),Z=S.source;n.bindTexture(q,T.__webglTexture,t.TEXTURE0+B);const Ee=i.get(Z);if(Z.version!==Ee.__version||Q===!0){n.activeTexture(t.TEXTURE0+B);const ce=Ke.getPrimaries(Ke.workingColorSpace),me=S.colorSpace===bi?null:Ke.getPrimaries(S.colorSpace),Ie=S.colorSpace===bi||ce===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ie=x(S.image,!1,r.maxTextureSize);ie=Pe(S,ie);const pe=s.convert(S.format,S.colorSpace),Be=s.convert(S.type);let Re=_(S.internalFormat,pe,Be,S.colorSpace,S.isVideoTexture);oe(q,S);let ge;const Le=S.mipmaps,Fe=S.isVideoTexture!==!0,rt=Ee.__version===void 0||Q===!0,I=Z.dataReady,re=M(S,ie);if(S.isDepthTexture)Re=g(S.format===Ps,S.type),rt&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,Re,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Re,ie.width,ie.height,0,pe,Be,null));else if(S.isDataTexture)if(Le.length>0){Fe&&rt&&n.texStorage2D(t.TEXTURE_2D,re,Re,Le[0].width,Le[0].height);for(let X=0,Y=Le.length;X<Y;X++)ge=Le[X],Fe?I&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ge.width,ge.height,pe,Be,ge.data):n.texImage2D(t.TEXTURE_2D,X,Re,ge.width,ge.height,0,pe,Be,ge.data);S.generateMipmaps=!1}else Fe?(rt&&n.texStorage2D(t.TEXTURE_2D,re,Re,ie.width,ie.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,pe,Be,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Re,ie.width,ie.height,0,pe,Be,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Fe&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,Re,Le[0].width,Le[0].height,ie.depth);for(let X=0,Y=Le.length;X<Y;X++)if(ge=Le[X],S.format!==Dn)if(pe!==null)if(Fe){if(I)if(S.layerUpdates.size>0){const ae=Vp(ge.width,ge.height,S.format,S.type);for(const Ae of S.layerUpdates){const He=ge.data.subarray(Ae*ae/ge.data.BYTES_PER_ELEMENT,(Ae+1)*ae/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,Ae,ge.width,ge.height,1,pe,He,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,ie.depth,pe,ge.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,Re,ge.width,ge.height,ie.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,ie.depth,pe,Be,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,Re,ge.width,ge.height,ie.depth,0,pe,Be,ge.data)}else{Fe&&rt&&n.texStorage2D(t.TEXTURE_2D,re,Re,Le[0].width,Le[0].height);for(let X=0,Y=Le.length;X<Y;X++)ge=Le[X],S.format!==Dn?pe!==null?Fe?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,ge.width,ge.height,pe,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,X,Re,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?I&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ge.width,ge.height,pe,Be,ge.data):n.texImage2D(t.TEXTURE_2D,X,Re,ge.width,ge.height,0,pe,Be,ge.data)}else if(S.isDataArrayTexture)if(Fe){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,Re,ie.width,ie.height,ie.depth),I)if(S.layerUpdates.size>0){const X=Vp(ie.width,ie.height,S.format,S.type);for(const Y of S.layerUpdates){const ae=ie.data.subarray(Y*X/ie.data.BYTES_PER_ELEMENT,(Y+1)*X/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Y,ie.width,ie.height,1,pe,Be,ae)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,pe,Be,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,ie.width,ie.height,ie.depth,0,pe,Be,ie.data);else if(S.isData3DTexture)Fe?(rt&&n.texStorage3D(t.TEXTURE_3D,re,Re,ie.width,ie.height,ie.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,pe,Be,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Re,ie.width,ie.height,ie.depth,0,pe,Be,ie.data);else if(S.isFramebufferTexture){if(rt)if(Fe)n.texStorage2D(t.TEXTURE_2D,re,Re,ie.width,ie.height);else{let X=ie.width,Y=ie.height;for(let ae=0;ae<re;ae++)n.texImage2D(t.TEXTURE_2D,ae,Re,X,Y,0,pe,Be,null),X>>=1,Y>>=1}}else if(Le.length>0){if(Fe&&rt){const X=De(Le[0]);n.texStorage2D(t.TEXTURE_2D,re,Re,X.width,X.height)}for(let X=0,Y=Le.length;X<Y;X++)ge=Le[X],Fe?I&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,pe,Be,ge):n.texImage2D(t.TEXTURE_2D,X,Re,pe,Be,ge);S.generateMipmaps=!1}else if(Fe){if(rt){const X=De(ie);n.texStorage2D(t.TEXTURE_2D,re,Re,X.width,X.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,Be,ie)}else n.texImage2D(t.TEXTURE_2D,0,Re,pe,Be,ie);m(S)&&u(q),Ee.__version=Z.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function V(T,S,B){if(S.image.length!==6)return;const q=ye(T,S),Q=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+B);const Z=i.get(Q);if(Q.version!==Z.__version||q===!0){n.activeTexture(t.TEXTURE0+B);const Ee=Ke.getPrimaries(Ke.workingColorSpace),ce=S.colorSpace===bi?null:Ke.getPrimaries(S.colorSpace),me=S.colorSpace===bi||Ee===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ie=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,pe=[];for(let Y=0;Y<6;Y++)!Ie&&!ie?pe[Y]=x(S.image[Y],!0,r.maxCubemapSize):pe[Y]=ie?S.image[Y].image:S.image[Y],pe[Y]=Pe(S,pe[Y]);const Be=pe[0],Re=s.convert(S.format,S.colorSpace),ge=s.convert(S.type),Le=_(S.internalFormat,Re,ge,S.colorSpace),Fe=S.isVideoTexture!==!0,rt=Z.__version===void 0||q===!0,I=Q.dataReady;let re=M(S,Be);oe(t.TEXTURE_CUBE_MAP,S);let X;if(Ie){Fe&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,re,Le,Be.width,Be.height);for(let Y=0;Y<6;Y++){X=pe[Y].mipmaps;for(let ae=0;ae<X.length;ae++){const Ae=X[ae];S.format!==Dn?Re!==null?Fe?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,0,0,Ae.width,Ae.height,Re,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,Le,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,0,0,Ae.width,Ae.height,Re,ge,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,Le,Ae.width,Ae.height,0,Re,ge,Ae.data)}}}else{if(X=S.mipmaps,Fe&&rt){X.length>0&&re++;const Y=De(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,re,Le,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ie){Fe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,pe[Y].width,pe[Y].height,Re,ge,pe[Y].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Le,pe[Y].width,pe[Y].height,0,Re,ge,pe[Y].data);for(let ae=0;ae<X.length;ae++){const He=X[ae].image[Y].image;Fe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,0,0,He.width,He.height,Re,ge,He.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,Le,He.width,He.height,0,Re,ge,He.data)}}else{Fe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Re,ge,pe[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Le,Re,ge,pe[Y]);for(let ae=0;ae<X.length;ae++){const Ae=X[ae];Fe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,0,0,Re,ge,Ae.image[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,Le,Re,ge,Ae.image[Y])}}}m(S)&&u(t.TEXTURE_CUBE_MAP),Z.__version=Q.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function ne(T,S,B,q,Q,Z){const Ee=s.convert(B.format,B.colorSpace),ce=s.convert(B.type),me=_(B.internalFormat,Ee,ce,B.colorSpace);if(!i.get(S).__hasExternalTextures){const ie=Math.max(1,S.width>>Z),pe=Math.max(1,S.height>>Z);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,Z,me,ie,pe,S.depth,0,Ee,ce,null):n.texImage2D(Q,Z,me,ie,pe,0,Ee,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),Me(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,Q,i.get(B).__webglTexture,0,Qe(S)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,Q,i.get(B).__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(T,S,B){if(t.bindRenderbuffer(t.RENDERBUFFER,T),S.depthBuffer){const q=S.depthTexture,Q=q&&q.isDepthTexture?q.type:null,Z=g(S.stencilBuffer,Q),Ee=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=Qe(S);Me(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,Z,S.width,S.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,Z,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Z,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,T)}else{const q=S.textures;for(let Q=0;Q<q.length;Q++){const Z=q[Q],Ee=s.convert(Z.format,Z.colorSpace),ce=s.convert(Z.type),me=_(Z.internalFormat,Ee,ce,Z.colorSpace),Ie=Qe(S);B&&Me(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,me,S.width,S.height):Me(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ie,me,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,me,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const q=i.get(S.depthTexture).__webglTexture,Q=Qe(S);if(S.depthTexture.format===gs)Me(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(S.depthTexture.format===Ps)Me(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function we(T){const S=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=q}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ue(S.__webglFramebuffer,T)}else if(B){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=t.createRenderbuffer(),de(S.__webglDepthbuffer[q],T,!1);else{const Q=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,Z)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),de(S.__webglDepthbuffer,T,!1);else{const q=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,Q)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(T,S,B){const q=i.get(T);S!==void 0&&ne(q.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&we(T)}function ke(T){const S=T.texture,B=i.get(T),q=i.get(S);T.addEventListener("dispose",C);const Q=T.textures,Z=T.isWebGLCubeRenderTarget===!0,Ee=Q.length>1;if(Ee||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=S.version,o.memory.textures++),Z){B.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ce]=[];for(let me=0;me<S.mipmaps.length;me++)B.__webglFramebuffer[ce][me]=t.createFramebuffer()}else B.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)B.__webglFramebuffer[ce]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ce=0,me=Q.length;ce<me;ce++){const Ie=i.get(Q[ce]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=t.createTexture(),o.memory.textures++)}if(T.samples>0&&Me(T)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ce=0;ce<Q.length;ce++){const me=Q[ce];B.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);const Ie=s.convert(me.format,me.colorSpace),ie=s.convert(me.type),pe=_(me.internalFormat,Ie,ie,me.colorSpace,T.isXRRenderTarget===!0),Be=Qe(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,pe,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,B.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),de(B.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),oe(t.TEXTURE_CUBE_MAP,S);for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)ne(B.__webglFramebuffer[ce][me],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else ne(B.__webglFramebuffer[ce],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(S)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ce=0,me=Q.length;ce<me;ce++){const Ie=Q[ce],ie=i.get(Ie);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),oe(t.TEXTURE_2D,Ie),ne(B.__webglFramebuffer,T,Ie,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),m(Ie)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ce=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,q.__webglTexture),oe(ce,S),S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)ne(B.__webglFramebuffer[me],T,S,t.COLOR_ATTACHMENT0,ce,me);else ne(B.__webglFramebuffer,T,S,t.COLOR_ATTACHMENT0,ce,0);m(S)&&u(ce),n.unbindTexture()}T.depthBuffer&&we(T)}function lt(T){const S=T.textures;for(let B=0,q=S.length;B<q;B++){const Q=S[B];if(m(Q)){const Z=T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ee=i.get(Q).__webglTexture;n.bindTexture(Z,Ee),u(Z),n.unbindTexture()}}}const R=[],pt=[];function Ze(T){if(T.samples>0){if(Me(T)===!1){const S=T.textures,B=T.width,q=T.height;let Q=t.COLOR_BUFFER_BIT;const Z=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(T),ce=S.length>1;if(ce)for(let me=0;me<S.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let me=0;me<S.length;me++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);const Ie=i.get(S[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ie,0)}t.blitFramebuffer(0,0,B,q,0,0,B,q,Q,t.NEAREST),l===!0&&(R.length=0,pt.length=0,R.push(t.COLOR_ATTACHMENT0+me),T.depthBuffer&&T.resolveDepthBuffer===!1&&(R.push(Z),pt.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,pt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,R))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let me=0;me<S.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);const Ie=i.get(S[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,Ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const S=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Qe(T){return Math.min(r.maxSamples,T.samples)}function Me(T){const S=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function mt(T){const S=o.render.frame;f.get(T)!==S&&(f.set(T,S),T.update())}function Pe(T,S){const B=T.colorSpace,q=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Qi&&B!==bi&&(Ke.getTransfer(B)===tt?(q!==Dn||Q!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function De(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=L,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=H,this.setTextureCube=te,this.rebindTextures=be,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Me}function fE(t,e){function n(i,r=bi){let s;const o=Ke.getTransfer(r);if(i===mi)return t.UNSIGNED_BYTE;if(i===yd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Md)return t.UNSIGNED_SHORT_5_5_5_1;if(i===u2)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===l2)return t.BYTE;if(i===c2)return t.SHORT;if(i===Lo)return t.UNSIGNED_SHORT;if(i===Sd)return t.INT;if(i===Cr)return t.UNSIGNED_INT;if(i===li)return t.FLOAT;if(i===Fo)return t.HALF_FLOAT;if(i===f2)return t.ALPHA;if(i===d2)return t.RGB;if(i===Dn)return t.RGBA;if(i===h2)return t.LUMINANCE;if(i===p2)return t.LUMINANCE_ALPHA;if(i===gs)return t.DEPTH_COMPONENT;if(i===Ps)return t.DEPTH_STENCIL;if(i===m2)return t.RED;if(i===Ed)return t.RED_INTEGER;if(i===g2)return t.RG;if(i===Ad)return t.RG_INTEGER;if(i===Cd)return t.RGBA_INTEGER;if(i===Va||i===Ga||i===Wa||i===Xa)if(o===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Va)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Va)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ga)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zu||i===$u||i===Qu||i===Ju)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Zu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$u)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ju)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ef||i===tf||i===nf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ef||i===tf)return o===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===nf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===rf||i===sf||i===of||i===af||i===lf||i===cf||i===uf||i===ff||i===df||i===hf||i===pf||i===mf||i===gf||i===_f)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===rf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===of)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===af)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ff)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===df)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_f)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ja||i===vf||i===xf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ja)return o===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_2||i===Sf||i===yf||i===Mf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ja)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class dE extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pa extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hE={type:"move"};class Kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Pa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const pE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mE=`
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

}`;class gE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Jt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new qi({vertexShader:pE,fragmentShader:mE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Gn(new Wl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _E extends Us{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,p=null,v=null;const x=new gE,m=n.getContextAttributes();let u=null,_=null;const g=[],M=[],P=new Ge;let C=null;const w=new _n;w.layers.enable(1),w.viewport=new yt;const b=new _n;b.layers.enable(2),b.viewport=new yt;const A=[w,b],y=new dE;y.layers.enable(1),y.layers.enable(2);let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ne=g[V];return ne===void 0&&(ne=new Kc,g[V]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(V){let ne=g[V];return ne===void 0&&(ne=new Kc,g[V]=ne),ne.getGripSpace()},this.getHand=function(V){let ne=g[V];return ne===void 0&&(ne=new Kc,g[V]=ne),ne.getHandSpace()};function z(V){const ne=M.indexOf(V.inputSource);if(ne===-1)return;const de=g[ne];de!==void 0&&(de.update(V.inputSource,V.frame,c||o),de.dispatchEvent({type:V.type,data:V.inputSource}))}function W(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",$);for(let V=0;V<g.length;V++){const ne=M[V];ne!==null&&(M[V]=null,g[V].disconnect(ne))}L=null,G=null,x.reset(),e.setRenderTarget(u),p=null,d=null,h=null,r=null,_=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",W),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new wr(p.framebufferWidth,p.framebufferHeight,{format:Dn,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,de=null,ue=null;m.depth&&(ue=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?Ps:gs,de=m.stencil?Rs:Cr);const we={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(we),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new wr(d.textureWidth,d.textureHeight,{format:Dn,type:mi,depthTexture:new I2(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(V){for(let ne=0;ne<V.removed.length;ne++){const de=V.removed[ne],ue=M.indexOf(de);ue>=0&&(M[ue]=null,g[ue].disconnect(de))}for(let ne=0;ne<V.added.length;ne++){const de=V.added[ne];let ue=M.indexOf(de);if(ue===-1){for(let be=0;be<g.length;be++)if(be>=M.length){M.push(de),ue=be;break}else if(M[be]===null){M[be]=de,ue=be;break}if(ue===-1)break}const we=g[ue];we&&we.connect(de)}}const H=new k,te=new k;function D(V,ne,de){H.setFromMatrixPosition(ne.matrixWorld),te.setFromMatrixPosition(de.matrixWorld);const ue=H.distanceTo(te),we=ne.projectionMatrix.elements,be=de.projectionMatrix.elements,ke=we[14]/(we[10]-1),lt=we[14]/(we[10]+1),R=(we[9]+1)/we[5],pt=(we[9]-1)/we[5],Ze=(we[8]-1)/we[0],Qe=(be[8]+1)/be[0],Me=ke*Ze,mt=ke*Qe,Pe=ue/(-Ze+Qe),De=Pe*-Ze;if(ne.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(De),V.translateZ(Pe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),we[10]===-1)V.projectionMatrix.copy(ne.projectionMatrix),V.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const T=ke+Pe,S=lt+Pe,B=Me-De,q=mt+(ue-De),Q=R*lt/S*T,Z=pt*lt/S*T;V.projectionMatrix.makePerspective(B,q,Q,Z,T,S),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function j(V,ne){ne===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ne.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let ne=V.near,de=V.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(de=x.depthFar)),y.near=b.near=w.near=ne,y.far=b.far=w.far=de,(L!==y.near||G!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,G=y.far);const ue=V.parent,we=y.cameras;j(y,ue);for(let be=0;be<we.length;be++)j(we[be],ue);we.length===2?D(y,w,b):y.projectionMatrix.copy(w.projectionMatrix),K(V,y,ue)};function K(V,ne,de){de===null?V.matrix.copy(ne.matrixWorld):(V.matrix.copy(de.matrixWorld),V.matrix.invert(),V.matrix.multiply(ne.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ne.projectionMatrix),V.projectionMatrixInverse.copy(ne.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ef*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let oe=null;function ye(V,ne){if(f=ne.getViewerPose(c||o),v=ne,f!==null){const de=f.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ue=!1;de.length!==y.cameras.length&&(y.cameras.length=0,ue=!0);for(let be=0;be<de.length;be++){const ke=de[be];let lt=null;if(p!==null)lt=p.getViewport(ke);else{const pt=h.getViewSubImage(d,ke);lt=pt.viewport,be===0&&(e.setRenderTargetTextures(_,pt.colorTexture,d.ignoreDepthValues?void 0:pt.depthStencilTexture),e.setRenderTarget(_))}let R=A[be];R===void 0&&(R=new _n,R.layers.enable(be),R.viewport=new yt,A[be]=R),R.matrix.fromArray(ke.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(ke.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(lt.x,lt.y,lt.width,lt.height),be===0&&(y.matrix.copy(R.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ue===!0&&y.cameras.push(R)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")){const be=h.getDepthInformation(de[0]);be&&be.isValid&&be.texture&&x.init(e,be,r.renderState)}}for(let de=0;de<g.length;de++){const ue=M[de],we=g[de];ue!==null&&we!==void 0&&we.update(ue,ne,c||o)}oe&&oe(V,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),v=null}const ze=new b2;ze.setAnimationLoop(ye),this.setAnimationLoop=function(V){oe=V},this.dispose=function(){}}}const or=new Kn,vE=new ht;function xE(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,R2(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,_,g,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),v(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,_,g):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Qt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Qt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const _=e.get(u),g=_.envMap,M=_.envMapRotation;g&&(m.envMap.value=g,or.copy(M),or.x*=-1,or.y*=-1,or.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),m.envMapRotation.value.setFromMatrix4(vE.makeRotationFromEuler(or)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,g){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=g*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Qt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const _=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function SE(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const M=g.program;i.uniformBlockBinding(_,M)}function c(_,g){let M=r[_.id];M===void 0&&(v(_),M=f(_),r[_.id]=M,_.addEventListener("dispose",m));const P=g.program;i.updateUBOMapping(_,P);const C=e.render.frame;s[_.id]!==C&&(d(_),s[_.id]=C)}function f(_){const g=h();_.__bindingPointIndex=g;const M=t.createBuffer(),P=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const g=r[_.id],M=_.uniforms,P=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,w=M.length;C<w;C++){const b=Array.isArray(M[C])?M[C]:[M[C]];for(let A=0,y=b.length;A<y;A++){const L=b[A];if(p(L,C,A,P)===!0){const G=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let $=0;$<z.length;$++){const H=z[$],te=x(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,G+W,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,W),W+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,M,P){const C=_.value,w=g+"_"+M;if(P[w]===void 0)return typeof C=="number"||typeof C=="boolean"?P[w]=C:P[w]=C.clone(),!0;{const b=P[w];if(typeof C=="number"||typeof C=="boolean"){if(b!==C)return P[w]=C,!0}else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function v(_){const g=_.uniforms;let M=0;const P=16;for(let w=0,b=g.length;w<b;w++){const A=Array.isArray(g[w])?g[w]:[g[w]];for(let y=0,L=A.length;y<L;y++){const G=A[y],z=Array.isArray(G.value)?G.value:[G.value];for(let W=0,$=z.length;W<$;W++){const H=z[W],te=x(H),D=M%P,j=D%te.boundary,K=D+j;M+=j,K!==0&&P-K<te.storage&&(M+=P-K),G.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=te.storage}}}const C=M%P;return C>0&&(M+=P-C),_.__size=M,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const M=o.indexOf(g.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class yE{constructor(e={}){const{canvas:n=ux(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bn,this.toneMapping=Wi,this.toneMappingExposure=1;const g=this;let M=!1,P=0,C=0,w=null,b=-1,A=null;const y=new yt,L=new yt;let G=null;const z=new We(0);let W=0,$=n.width,H=n.height,te=1,D=null,j=null;const K=new yt(0,0,$,H),oe=new yt(0,0,$,H);let ye=!1;const ze=new Rd;let V=!1,ne=!1;const de=new ht,ue=new k,we=new yt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function lt(){return w===null?te:1}let R=i;function pt(E,U){return n.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${xd}`),n.addEventListener("webglcontextlost",X,!1),n.addEventListener("webglcontextrestored",Y,!1),n.addEventListener("webglcontextcreationerror",ae,!1),R===null){const U="webgl2";if(R=pt(U,E),R===null)throw pt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ze,Qe,Me,mt,Pe,De,T,S,B,q,Q,Z,Ee,ce,me,Ie,ie,pe,Be,Re,ge,Le,Fe,rt;function I(){Ze=new Ty(R),Ze.init(),Le=new fE(R,Ze),Qe=new yy(R,Ze,e,Le),Me=new lE(R),mt=new Ly(R),Pe=new qM,De=new uE(R,Ze,Me,Pe,Qe,Le,mt),T=new Ey(g),S=new wy(g),B=new Ox(R),Fe=new xy(R,B),q=new Ry(R,B,mt,Fe),Q=new Dy(R,q,B,mt),Be=new by(R,Qe,De),Ie=new My(Pe),Z=new YM(g,T,S,Ze,Qe,Fe,Ie),Ee=new xE(g,Pe),ce=new ZM,me=new nE(Ze),pe=new vy(g,T,S,Me,Q,d,l),ie=new aE(g,Q,Qe),rt=new SE(R,mt,Qe,Me),Re=new Sy(R,Ze,mt),ge=new Py(R,Ze,mt),mt.programs=Z.programs,g.capabilities=Qe,g.extensions=Ze,g.properties=Pe,g.renderLists=ce,g.shadowMap=ie,g.state=Me,g.info=mt}I();const re=new _E(g,R);this.xr=re,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=Ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(E){E!==void 0&&(te=E,this.setSize($,H,!1))},this.getSize=function(E){return E.set($,H)},this.setSize=function(E,U,F=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=E,H=U,n.width=Math.floor(E*te),n.height=Math.floor(U*te),F===!0&&(n.style.width=E+"px",n.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set($*te,H*te).floor()},this.setDrawingBufferSize=function(E,U,F){$=E,H=U,te=F,n.width=Math.floor(E*F),n.height=Math.floor(U*F),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,U,F,O){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,U,F,O),Me.viewport(y.copy(K).multiplyScalar(te).round())},this.getScissor=function(E){return E.copy(oe)},this.setScissor=function(E,U,F,O){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,U,F,O),Me.scissor(L.copy(oe).multiplyScalar(te).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(E){Me.setScissorTest(ye=E)},this.setOpaqueSort=function(E){D=E},this.setTransparentSort=function(E){j=E},this.getClearColor=function(E){return E.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(E=!0,U=!0,F=!0){let O=0;if(E){let N=!1;if(w!==null){const se=w.texture.format;N=se===Cd||se===Ad||se===Ed}if(N){const se=w.texture.type,fe=se===mi||se===Cr||se===Lo||se===Rs||se===yd||se===Md,_e=pe.getClearColor(),ve=pe.getClearAlpha(),Ce=_e.r,Te=_e.g,xe=_e.b;fe?(p[0]=Ce,p[1]=Te,p[2]=xe,p[3]=ve,R.clearBufferuiv(R.COLOR,0,p)):(v[0]=Ce,v[1]=Te,v[2]=xe,v[3]=ve,R.clearBufferiv(R.COLOR,0,v))}else O|=R.COLOR_BUFFER_BIT}U&&(O|=R.DEPTH_BUFFER_BIT),F&&(O|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",X,!1),n.removeEventListener("webglcontextrestored",Y,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),ce.dispose(),me.dispose(),Pe.dispose(),T.dispose(),S.dispose(),Q.dispose(),Fe.dispose(),rt.dispose(),Z.dispose(),re.dispose(),re.removeEventListener("sessionstart",Fn),re.removeEventListener("sessionend",bd),er.stop()};function X(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=mt.autoReset,U=ie.enabled,F=ie.autoUpdate,O=ie.needsUpdate,N=ie.type;I(),mt.autoReset=E,ie.enabled=U,ie.autoUpdate=F,ie.needsUpdate=O,ie.type=N}function ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ae(E){const U=E.target;U.removeEventListener("dispose",Ae),He(U)}function He(E){gt(E),Pe.remove(E)}function gt(E){const U=Pe.get(E).programs;U!==void 0&&(U.forEach(function(F){Z.releaseProgram(F)}),E.isShaderMaterial&&Z.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,F,O,N,se){U===null&&(U=be);const fe=N.isMesh&&N.matrixWorld.determinant()<0,_e=z2(E,U,F,O,N);Me.setMaterial(O,fe);let ve=F.index,Ce=1;if(O.wireframe===!0){if(ve=q.getWireframeAttribute(F),ve===void 0)return;Ce=2}const Te=F.drawRange,xe=F.attributes.position;let je=Te.start*Ce,ct=(Te.start+Te.count)*Ce;se!==null&&(je=Math.max(je,se.start*Ce),ct=Math.min(ct,(se.start+se.count)*Ce)),ve!==null?(je=Math.max(je,0),ct=Math.min(ct,ve.count)):xe!=null&&(je=Math.max(je,0),ct=Math.min(ct,xe.count));const ut=ct-je;if(ut<0||ut===1/0)return;Fe.setup(N,O,_e,F,ve);let en,Ye=Re;if(ve!==null&&(en=B.get(ve),Ye=ge,Ye.setIndex(en)),N.isMesh)O.wireframe===!0?(Me.setLineWidth(O.wireframeLinewidth*lt()),Ye.setMode(R.LINES)):Ye.setMode(R.TRIANGLES);else if(N.isLine){let Se=O.linewidth;Se===void 0&&(Se=1),Me.setLineWidth(Se*lt()),N.isLineSegments?Ye.setMode(R.LINES):N.isLineLoop?Ye.setMode(R.LINE_LOOP):Ye.setMode(R.LINE_STRIP)}else N.isPoints?Ye.setMode(R.POINTS):N.isSprite&&Ye.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ye.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))Ye.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Se=N._multiDrawStarts,Pt=N._multiDrawCounts,qe=N._multiDrawCount,En=ve?B.get(ve).bytesPerElement:1,Pr=Pe.get(O).currentProgram.getUniforms();for(let tn=0;tn<qe;tn++)Pr.setValue(R,"_gl_DrawID",tn),Ye.render(Se[tn]/En,Pt[tn])}else if(N.isInstancedMesh)Ye.renderInstances(je,ut,N.count);else if(F.isInstancedBufferGeometry){const Se=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Pt=Math.min(F.instanceCount,Se);Ye.renderInstances(je,ut,Pt)}else Ye.render(je,ut)};function Rt(E,U,F){E.transparent===!0&&E.side===si&&E.forceSinglePass===!1?(E.side=Qt,E.needsUpdate=!0,Go(E,U,F),E.side=Yi,E.needsUpdate=!0,Go(E,U,F),E.side=si):Go(E,U,F)}this.compile=function(E,U,F=null){F===null&&(F=E),m=me.get(F),m.init(U),_.push(m),F.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),E!==F&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const O=new Set;return E.traverse(function(N){const se=N.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){const _e=se[fe];Rt(_e,F,N),O.add(_e)}else Rt(se,F,N),O.add(se)}),_.pop(),m=null,O},this.compileAsync=function(E,U,F=null){const O=this.compile(E,U,F);return new Promise(N=>{function se(){if(O.forEach(function(fe){Pe.get(fe).currentProgram.isReady()&&O.delete(fe)}),O.size===0){N(E);return}setTimeout(se,10)}Ze.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Xe=null;function Zn(E){Xe&&Xe(E)}function Fn(){er.stop()}function bd(){er.start()}const er=new b2;er.setAnimationLoop(Zn),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(E){Xe=E,re.setAnimationLoop(E),E===null?er.stop():er.start()},re.addEventListener("sessionstart",Fn),re.addEventListener("sessionend",bd),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,U,w),m=me.get(E,_.length),m.init(U),_.push(m),de.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ze.setFromProjectionMatrix(de),ne=this.localClippingEnabled,V=Ie.init(this.clippingPlanes,ne),x=ce.get(E,u.length),x.init(),u.push(x),re.enabled===!0&&re.isPresenting===!0){const se=g.xr.getDepthSensingMesh();se!==null&&jl(se,U,-1/0,g.sortObjects)}jl(E,U,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(D,j),ke=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,ke&&pe.addToRenderList(x,E),this.info.render.frame++,V===!0&&Ie.beginShadows();const F=m.state.shadowsArray;ie.render(F,E,U),V===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=x.opaque,N=x.transmissive;if(m.setupLights(),U.isArrayCamera){const se=U.cameras;if(N.length>0)for(let fe=0,_e=se.length;fe<_e;fe++){const ve=se[fe];Id(O,N,E,ve)}ke&&pe.render(E);for(let fe=0,_e=se.length;fe<_e;fe++){const ve=se[fe];Dd(x,E,ve,ve.viewport)}}else N.length>0&&Id(O,N,E,U),ke&&pe.render(E),Dd(x,E,U);w!==null&&(De.updateMultisampleRenderTarget(w),De.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(g,E,U),Fe.resetDefaultState(),b=-1,A=null,_.pop(),_.length>0?(m=_[_.length-1],V===!0&&Ie.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function jl(E,U,F,O){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)F=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ze.intersectsSprite(E)){O&&we.setFromMatrixPosition(E.matrixWorld).applyMatrix4(de);const fe=Q.update(E),_e=E.material;_e.visible&&x.push(E,fe,_e,F,we.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ze.intersectsObject(E))){const fe=Q.update(E),_e=E.material;if(O&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),we.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),we.copy(fe.boundingSphere.center)),we.applyMatrix4(E.matrixWorld).applyMatrix4(de)),Array.isArray(_e)){const ve=fe.groups;for(let Ce=0,Te=ve.length;Ce<Te;Ce++){const xe=ve[Ce],je=_e[xe.materialIndex];je&&je.visible&&x.push(E,fe,je,F,we.z,xe)}}else _e.visible&&x.push(E,fe,_e,F,we.z,null)}}const se=E.children;for(let fe=0,_e=se.length;fe<_e;fe++)jl(se[fe],U,F,O)}function Dd(E,U,F,O){const N=E.opaque,se=E.transmissive,fe=E.transparent;m.setupLightsView(F),V===!0&&Ie.setGlobalState(g.clippingPlanes,F),O&&Me.viewport(y.copy(O)),N.length>0&&Vo(N,U,F),se.length>0&&Vo(se,U,F),fe.length>0&&Vo(fe,U,F),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Id(E,U,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[O.id]===void 0&&(m.state.transmissionRenderTarget[O.id]=new wr(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?Fo:mi,minFilter:_r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const se=m.state.transmissionRenderTarget[O.id],fe=O.viewport||y;se.setSize(fe.z,fe.w);const _e=g.getRenderTarget();g.setRenderTarget(se),g.getClearColor(z),W=g.getClearAlpha(),W<1&&g.setClearColor(16777215,.5),g.clear(),ke&&pe.render(F);const ve=g.toneMapping;g.toneMapping=Wi;const Ce=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),m.setupLightsView(O),V===!0&&Ie.setGlobalState(g.clippingPlanes,O),Vo(E,F,O),De.updateMultisampleRenderTarget(se),De.updateRenderTargetMipmap(se),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let xe=0,je=U.length;xe<je;xe++){const ct=U[xe],ut=ct.object,en=ct.geometry,Ye=ct.material,Se=ct.group;if(Ye.side===si&&ut.layers.test(O.layers)){const Pt=Ye.side;Ye.side=Qt,Ye.needsUpdate=!0,Ud(ut,F,O,en,Ye,Se),Ye.side=Pt,Ye.needsUpdate=!0,Te=!0}}Te===!0&&(De.updateMultisampleRenderTarget(se),De.updateRenderTargetMipmap(se))}g.setRenderTarget(_e),g.setClearColor(z,W),Ce!==void 0&&(O.viewport=Ce),g.toneMapping=ve}function Vo(E,U,F){const O=U.isScene===!0?U.overrideMaterial:null;for(let N=0,se=E.length;N<se;N++){const fe=E[N],_e=fe.object,ve=fe.geometry,Ce=O===null?fe.material:O,Te=fe.group;_e.layers.test(F.layers)&&Ud(_e,U,F,ve,Ce,Te)}}function Ud(E,U,F,O,N,se){E.onBeforeRender(g,U,F,O,N,se),E.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(g,U,F,O,E,se),N.transparent===!0&&N.side===si&&N.forceSinglePass===!1?(N.side=Qt,N.needsUpdate=!0,g.renderBufferDirect(F,U,O,N,E,se),N.side=Yi,N.needsUpdate=!0,g.renderBufferDirect(F,U,O,N,E,se),N.side=si):g.renderBufferDirect(F,U,O,N,E,se),E.onAfterRender(g,U,F,O,N,se)}function Go(E,U,F){U.isScene!==!0&&(U=be);const O=Pe.get(E),N=m.state.lights,se=m.state.shadowsArray,fe=N.state.version,_e=Z.getParameters(E,N.state,se,U,F),ve=Z.getProgramCacheKey(_e);let Ce=O.programs;O.environment=E.isMeshStandardMaterial?U.environment:null,O.fog=U.fog,O.envMap=(E.isMeshStandardMaterial?S:T).get(E.envMap||O.environment),O.envMapRotation=O.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ce===void 0&&(E.addEventListener("dispose",Ae),Ce=new Map,O.programs=Ce);let Te=Ce.get(ve);if(Te!==void 0){if(O.currentProgram===Te&&O.lightsStateVersion===fe)return Fd(E,_e),Te}else _e.uniforms=Z.getUniforms(E),E.onBeforeCompile(_e,g),Te=Z.acquireProgram(_e,ve),Ce.set(ve,Te),O.uniforms=_e.uniforms;const xe=O.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(xe.clippingPlanes=Ie.uniform),Fd(E,_e),O.needsLights=V2(E),O.lightsStateVersion=fe,O.needsLights&&(xe.ambientLightColor.value=N.state.ambient,xe.lightProbe.value=N.state.probe,xe.directionalLights.value=N.state.directional,xe.directionalLightShadows.value=N.state.directionalShadow,xe.spotLights.value=N.state.spot,xe.spotLightShadows.value=N.state.spotShadow,xe.rectAreaLights.value=N.state.rectArea,xe.ltc_1.value=N.state.rectAreaLTC1,xe.ltc_2.value=N.state.rectAreaLTC2,xe.pointLights.value=N.state.point,xe.pointLightShadows.value=N.state.pointShadow,xe.hemisphereLights.value=N.state.hemi,xe.directionalShadowMap.value=N.state.directionalShadowMap,xe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,xe.spotShadowMap.value=N.state.spotShadowMap,xe.spotLightMatrix.value=N.state.spotLightMatrix,xe.spotLightMap.value=N.state.spotLightMap,xe.pointShadowMap.value=N.state.pointShadowMap,xe.pointShadowMatrix.value=N.state.pointShadowMatrix),O.currentProgram=Te,O.uniformsList=null,Te}function Nd(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Ya.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Fd(E,U){const F=Pe.get(E);F.outputColorSpace=U.outputColorSpace,F.batching=U.batching,F.batchingColor=U.batchingColor,F.instancing=U.instancing,F.instancingColor=U.instancingColor,F.instancingMorph=U.instancingMorph,F.skinning=U.skinning,F.morphTargets=U.morphTargets,F.morphNormals=U.morphNormals,F.morphColors=U.morphColors,F.morphTargetsCount=U.morphTargetsCount,F.numClippingPlanes=U.numClippingPlanes,F.numIntersection=U.numClipIntersection,F.vertexAlphas=U.vertexAlphas,F.vertexTangents=U.vertexTangents,F.toneMapping=U.toneMapping}function z2(E,U,F,O,N){U.isScene!==!0&&(U=be),De.resetTextureUnits();const se=U.fog,fe=O.isMeshStandardMaterial?U.environment:null,_e=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Qi,ve=(O.isMeshStandardMaterial?S:T).get(O.envMap||fe),Ce=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Te=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),xe=!!F.morphAttributes.position,je=!!F.morphAttributes.normal,ct=!!F.morphAttributes.color;let ut=Wi;O.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ut=g.toneMapping);const en=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ye=en!==void 0?en.length:0,Se=Pe.get(O),Pt=m.state.lights;if(V===!0&&(ne===!0||E!==A)){const dn=E===A&&O.id===b;Ie.setState(O,E,dn)}let qe=!1;O.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Pt.state.version||Se.outputColorSpace!==_e||N.isBatchedMesh&&Se.batching===!1||!N.isBatchedMesh&&Se.batching===!0||N.isBatchedMesh&&Se.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Se.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Se.instancing===!1||!N.isInstancedMesh&&Se.instancing===!0||N.isSkinnedMesh&&Se.skinning===!1||!N.isSkinnedMesh&&Se.skinning===!0||N.isInstancedMesh&&Se.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Se.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Se.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Se.instancingMorph===!1&&N.morphTexture!==null||Se.envMap!==ve||O.fog===!0&&Se.fog!==se||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Ie.numPlanes||Se.numIntersection!==Ie.numIntersection)||Se.vertexAlphas!==Ce||Se.vertexTangents!==Te||Se.morphTargets!==xe||Se.morphNormals!==je||Se.morphColors!==ct||Se.toneMapping!==ut||Se.morphTargetsCount!==Ye)&&(qe=!0):(qe=!0,Se.__version=O.version);let En=Se.currentProgram;qe===!0&&(En=Go(O,U,N));let Pr=!1,tn=!1,Yl=!1;const _t=En.getUniforms(),_i=Se.uniforms;if(Me.useProgram(En.program)&&(Pr=!0,tn=!0,Yl=!0),O.id!==b&&(b=O.id,tn=!0),Pr||A!==E){_t.setValue(R,"projectionMatrix",E.projectionMatrix),_t.setValue(R,"viewMatrix",E.matrixWorldInverse);const dn=_t.map.cameraPosition;dn!==void 0&&dn.setValue(R,ue.setFromMatrixPosition(E.matrixWorld)),Qe.logarithmicDepthBuffer&&_t.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&_t.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),A!==E&&(A=E,tn=!0,Yl=!0)}if(N.isSkinnedMesh){_t.setOptional(R,N,"bindMatrix"),_t.setOptional(R,N,"bindMatrixInverse");const dn=N.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),_t.setValue(R,"boneTexture",dn.boneTexture,De))}N.isBatchedMesh&&(_t.setOptional(R,N,"batchingTexture"),_t.setValue(R,"batchingTexture",N._matricesTexture,De),_t.setOptional(R,N,"batchingIdTexture"),_t.setValue(R,"batchingIdTexture",N._indirectTexture,De),_t.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&_t.setValue(R,"batchingColorTexture",N._colorsTexture,De));const ql=F.morphAttributes;if((ql.position!==void 0||ql.normal!==void 0||ql.color!==void 0)&&Be.update(N,F,En),(tn||Se.receiveShadow!==N.receiveShadow)&&(Se.receiveShadow=N.receiveShadow,_t.setValue(R,"receiveShadow",N.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(_i.envMap.value=ve,_i.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&U.environment!==null&&(_i.envMapIntensity.value=U.environmentIntensity),tn&&(_t.setValue(R,"toneMappingExposure",g.toneMappingExposure),Se.needsLights&&H2(_i,Yl),se&&O.fog===!0&&Ee.refreshFogUniforms(_i,se),Ee.refreshMaterialUniforms(_i,O,te,H,m.state.transmissionRenderTarget[E.id]),Ya.upload(R,Nd(Se),_i,De)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ya.upload(R,Nd(Se),_i,De),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&_t.setValue(R,"center",N.center),_t.setValue(R,"modelViewMatrix",N.modelViewMatrix),_t.setValue(R,"normalMatrix",N.normalMatrix),_t.setValue(R,"modelMatrix",N.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const dn=O.uniformsGroups;for(let Kl=0,G2=dn.length;Kl<G2;Kl++){const Od=dn[Kl];rt.update(Od,En),rt.bind(Od,En)}}return En}function H2(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function V2(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,U,F){Pe.get(E.texture).__webglTexture=U,Pe.get(E.depthTexture).__webglTexture=F;const O=Pe.get(E);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const F=Pe.get(E);F.__webglFramebuffer=U,F.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,F=0){w=E,P=U,C=F;let O=!0,N=null,se=!1,fe=!1;if(E){const ve=Pe.get(E);if(ve.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(R.FRAMEBUFFER,null),O=!1;else if(ve.__webglFramebuffer===void 0)De.setupRenderTarget(E);else if(ve.__hasExternalTextures)De.rebindTextures(E,Pe.get(E.texture).__webglTexture,Pe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const xe=E.depthTexture;if(ve.__boundDepthTexture!==xe){if(xe!==null&&Pe.has(xe)&&(E.width!==xe.image.width||E.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(E)}}const Ce=E.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(fe=!0);const Te=Pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Te[U])?N=Te[U][F]:N=Te[U],se=!0):E.samples>0&&De.useMultisampledRTT(E)===!1?N=Pe.get(E).__webglMultisampledFramebuffer:Array.isArray(Te)?N=Te[F]:N=Te,y.copy(E.viewport),L.copy(E.scissor),G=E.scissorTest}else y.copy(K).multiplyScalar(te).floor(),L.copy(oe).multiplyScalar(te).floor(),G=ye;if(Me.bindFramebuffer(R.FRAMEBUFFER,N)&&O&&Me.drawBuffers(E,N),Me.viewport(y),Me.scissor(L),Me.setScissorTest(G),se){const ve=Pe.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve.__webglTexture,F)}else if(fe){const ve=Pe.get(E.texture),Ce=U||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,ve.__webglTexture,F||0,Ce)}b=-1},this.readRenderTargetPixels=function(E,U,F,O,N,se,fe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){Me.bindFramebuffer(R.FRAMEBUFFER,_e);try{const ve=E.texture,Ce=ve.format,Te=ve.type;if(!Qe.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-O&&F>=0&&F<=E.height-N&&R.readPixels(U,F,O,N,Le.convert(Ce),Le.convert(Te),se)}finally{const ve=w!==null?Pe.get(w).__webglFramebuffer:null;Me.bindFramebuffer(R.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(E,U,F,O,N,se,fe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){Me.bindFramebuffer(R.FRAMEBUFFER,_e);try{const ve=E.texture,Ce=ve.format,Te=ve.type;if(!Qe.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-O&&F>=0&&F<=E.height-N){const xe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,xe),R.bufferData(R.PIXEL_PACK_BUFFER,se.byteLength,R.STREAM_READ),R.readPixels(U,F,O,N,Le.convert(Ce),Le.convert(Te),0),R.flush();const je=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);await fx(R,je,4);try{R.bindBuffer(R.PIXEL_PACK_BUFFER,xe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,se)}finally{R.deleteBuffer(xe),R.deleteSync(je)}return se}}finally{const ve=w!==null?Pe.get(w).__webglFramebuffer:null;Me.bindFramebuffer(R.FRAMEBUFFER,ve)}}},this.copyFramebufferToTexture=function(E,U=null,F=0){E.isTexture!==!0&&(fo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const O=Math.pow(2,-F),N=Math.floor(E.image.width*O),se=Math.floor(E.image.height*O),fe=U!==null?U.x:0,_e=U!==null?U.y:0;De.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,F,0,0,fe,_e,N,se),Me.unbindTexture()},this.copyTextureToTexture=function(E,U,F=null,O=null,N=0){E.isTexture!==!0&&(fo("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1],U=arguments[2],N=arguments[3]||0,F=null);let se,fe,_e,ve,Ce,Te;F!==null?(se=F.max.x-F.min.x,fe=F.max.y-F.min.y,_e=F.min.x,ve=F.min.y):(se=E.image.width,fe=E.image.height,_e=0,ve=0),O!==null?(Ce=O.x,Te=O.y):(Ce=0,Te=0);const xe=Le.convert(U.format),je=Le.convert(U.type);De.setTexture2D(U,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const ct=R.getParameter(R.UNPACK_ROW_LENGTH),ut=R.getParameter(R.UNPACK_IMAGE_HEIGHT),en=R.getParameter(R.UNPACK_SKIP_PIXELS),Ye=R.getParameter(R.UNPACK_SKIP_ROWS),Se=R.getParameter(R.UNPACK_SKIP_IMAGES),Pt=E.isCompressedTexture?E.mipmaps[N]:E.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Pt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Pt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,_e),R.pixelStorei(R.UNPACK_SKIP_ROWS,ve),E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,N,Ce,Te,se,fe,xe,je,Pt.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,N,Ce,Te,Pt.width,Pt.height,xe,Pt.data):R.texSubImage2D(R.TEXTURE_2D,N,Ce,Te,se,fe,xe,je,Pt),R.pixelStorei(R.UNPACK_ROW_LENGTH,ct),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ut),R.pixelStorei(R.UNPACK_SKIP_PIXELS,en),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ye),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Se),N===0&&U.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(E,U,F=null,O=null,N=0){E.isTexture!==!0&&(fo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0);let se,fe,_e,ve,Ce,Te,xe,je,ct;const ut=E.isCompressedTexture?E.mipmaps[N]:E.image;F!==null?(se=F.max.x-F.min.x,fe=F.max.y-F.min.y,_e=F.max.z-F.min.z,ve=F.min.x,Ce=F.min.y,Te=F.min.z):(se=ut.width,fe=ut.height,_e=ut.depth,ve=0,Ce=0,Te=0),O!==null?(xe=O.x,je=O.y,ct=O.z):(xe=0,je=0,ct=0);const en=Le.convert(U.format),Ye=Le.convert(U.type);let Se;if(U.isData3DTexture)De.setTexture3D(U,0),Se=R.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)De.setTexture2DArray(U,0),Se=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const Pt=R.getParameter(R.UNPACK_ROW_LENGTH),qe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),En=R.getParameter(R.UNPACK_SKIP_PIXELS),Pr=R.getParameter(R.UNPACK_SKIP_ROWS),tn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ut.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ut.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ve),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ce),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Te),E.isDataTexture||E.isData3DTexture?R.texSubImage3D(Se,N,xe,je,ct,se,fe,_e,en,Ye,ut.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(Se,N,xe,je,ct,se,fe,_e,en,ut.data):R.texSubImage3D(Se,N,xe,je,ct,se,fe,_e,en,Ye,ut),R.pixelStorei(R.UNPACK_ROW_LENGTH,Pt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,qe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,En),R.pixelStorei(R.UNPACK_SKIP_ROWS,Pr),R.pixelStorei(R.UNPACK_SKIP_IMAGES,tn),N===0&&U.generateMipmaps&&R.generateMipmap(Se),Me.unbindTexture()},this.initRenderTarget=function(E){Pe.get(E).__webglFramebuffer===void 0&&De.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?De.setTextureCube(E,0):E.isData3DTexture?De.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?De.setTexture2DArray(E,0):De.setTexture2D(E,0),Me.unbindTexture()},this.resetState=function(){P=0,C=0,w=null,Me.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===wd?"display-p3":"srgb",n.unpackColorSpace=Ke.workingColorSpace===Gl?"display-p3":"srgb"}}class ME extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Ld extends Ji{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],h=new k,d=new k,p=[],v=[],x=[],m=[];for(let u=0;u<=i;u++){const _=[],g=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let P=0;P<=n;P++){const C=P/n;h.x=-e*Math.cos(r+C*s)*Math.sin(o+g*a),h.y=e*Math.cos(o+g*a),h.z=e*Math.sin(r+C*s)*Math.sin(o+g*a),v.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(C+M,1-g),_.push(c++)}f.push(_)}for(let u=0;u<i;u++)for(let _=0;_<n;_++){const g=f[u][_+1],M=f[u][_],P=f[u+1][_],C=f[u+1][_+1];(u!==0||o>0)&&p.push(g,M,C),(u!==i-1||l<Math.PI)&&p.push(M,P,C)}this.setIndex(p),this.setAttribute("position",new qn(v,3)),this.setAttribute("normal",new qn(x,3)),this.setAttribute("uv",new qn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ld(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class EE extends zo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=v2,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class AE extends kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Zc=new ht,Gp=new k,Wp=new k;class CE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rd,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Gp.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gp),Wp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Wp),n.updateMatrixWorld(),Zc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wE extends CE{constructor(){super(new D2(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class TE extends AE{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new wE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xd);const RE="_container_1c2ns_3",PE="_title_1c2ns_18",LE="_fadeIn_1c2ns_1",bE="_content_1c2ns_34",DE="_aboutItemText_1c2ns_41",Zs={container:RE,title:PE,fadeIn:LE,content:bE,aboutItemText:DE},IE=()=>{const t=vs.useRef(null);return vs.useEffect(()=>{const e=new ME,n=new _n(75,1,.1,1e3),i=new yE({antialias:!0});i.setSize(300,300),t.current.appendChild(i.domElement);const r=new Ld(5,32,32),s=new EE({color:30719,wireframe:!0}),o=new Gn(r,s);e.add(o);const a=new TE(16777215,1);a.position.set(5,10,5).normalize(),e.add(a),n.position.z=10;const l=function(){requestAnimationFrame(l),o.rotation.x+=.01,o.rotation.y+=.01,i.render(e,n)};return l(),()=>{t.current.removeChild(i.domElement)}},[]),J.jsxs("section",{className:Zs.container,id:"about",children:[J.jsx("h2",{className:Zs.title,children:"About"}),J.jsxs("div",{className:Zs.content,children:[J.jsx("div",{ref:t,className:Zs.animation}),J.jsxs("div",{className:Zs.aboutItemText,children:[J.jsx("p",{children:"I am a motivated Computer Science undergraduate with a strong passion for Software Engineering, specializing in full-stack development."}),J.jsx("p",{children:"I work hard and am a quick learner, always striving to improve and maintain my knowledge."}),J.jsx("p",{children:"I thrive at solving complex challenges and quickly adapting to new technologies."})]})]})]})},UE="_container_eik22_4",NE="_content_eik22_19",FE="_fadeIn_eik22_1",OE="_title_eik22_28",kE="_slideIn_eik22_1",BE="_description_eik22_39",zE="_contactBtn_eik22_47",HE="_heroImg_eik22_68",VE="_floatIn_eik22_1",GE="_topBlur_eik22_87",WE="_bottomBlur_eik22_87",XE="_socialIcons_eik22_112",jE="_socialIcon_eik22_112",YE="_circleBackground_eik22_192",wi={container:UE,content:NE,fadeIn:FE,title:OE,slideIn:kE,description:BE,contactBtn:zE,heroImg:HE,floatIn:VE,topBlur:GE,bottomBlur:WE,socialIcons:XE,socialIcon:jE,circleBackground:YE},qE=()=>J.jsxs("section",{className:wi.container,children:[J.jsxs("div",{className:wi.content,children:[J.jsx("h1",{className:wi.title,children:"Sadeep Chathushan Nalindika"}),J.jsx("p",{className:wi.description,children:"I'm currently an undergraduate Computer Science student at the University of Colombo, deeply passionate about both backend and frontend development."}),J.jsx("a",{href:"mailto:chathushan43sadeep@gmail.com.com",className:wi.contactBtn,children:"Contact Me"})]}),J.jsx("img",{src:jn("hero/IMG_0360.jpg"),alt:"Hero image of me",className:wi.heroImg}),J.jsx("div",{className:wi.topBlur}),J.jsx("div",{className:wi.bottomBlur})]}),KE="_navbar_1gs4d_4",ZE="_title_1gs4d_14",$E="_menu_1gs4d_21",QE="_menuItems_1gs4d_26",JE="_menuBtn_1gs4d_39",eA="_menuOpen_1gs4d_78",Kr={navbar:KE,title:ZE,menu:$E,menuItems:QE,menuBtn:JE,menuOpen:eA},tA=()=>{const[t,e]=vs.useState(!1);return J.jsxs("nav",{className:Kr.navbar,children:[J.jsx("a",{className:Kr.title,href:"/",children:"Portfolio"}),J.jsxs("div",{className:Kr.menu,children:[J.jsx("img",{className:Kr.menuBtn,src:jn(t?"nav/closeIcon.png":"nav/menuIcon.png"),alt:"menu-button",onClick:()=>e(!t)}),J.jsxs("ul",{className:`${Kr.menuItems} ${t&&Kr.menuOpen}`,onClick:()=>e(!1),children:[J.jsx("li",{children:J.jsx("a",{href:"#about",children:"About"})}),J.jsx("li",{children:J.jsx("a",{href:"#experience",children:"Skills"})}),J.jsx("li",{children:J.jsx("a",{href:"#projects",children:"Projects"})}),J.jsx("li",{children:J.jsx("a",{href:"#education",children:"Education"})}),J.jsx("li",{children:J.jsx("a",{href:"#contact",children:"Contact"})})]})]})]})},nA="_container_6buwy_3",iA="_title_6buwy_11",rA="_fadeIn_6buwy_1",sA="_educationItem_6buwy_32",oA="_timeLocation_6buwy_38",aA="_institutionDetails_6buwy_44",lA="_logo_6buwy_50",cA="_detailsText_6buwy_56",uA="_divider_6buwy_71",sn={container:nA,title:iA,fadeIn:rA,educationItem:sA,timeLocation:oA,institutionDetails:aA,logo:lA,detailsText:cA,divider:uA},fA=()=>J.jsxs("section",{className:sn.container,id:"education",children:[J.jsx("h2",{className:sn.title,children:"Education"}),J.jsxs("div",{className:sn.educationItem,children:[J.jsxs("div",{className:sn.timeLocation,children:[J.jsx("p",{children:"2022 - Present"}),J.jsx("p",{children:"Colombo, Sri Lanka"})]}),J.jsxs("div",{className:sn.institutionDetails,children:[J.jsx("img",{src:jn("logo/UCSC.png"),alt:"University Logo",className:sn.logo})," ",J.jsxs("div",{className:sn.detailsText,children:[J.jsx("h3",{children:"University of Colombo School of Computing"}),J.jsx("p",{children:"Bachelor of Science in Computer Science"}),J.jsx("p",{children:"Current GPA: 2.3/4.00"})]})]})]}),J.jsx("div",{className:sn.divider})," ",J.jsxs("div",{className:sn.educationItem,children:[J.jsxs("div",{className:sn.timeLocation,children:[J.jsx("p",{children:"2010 - 2019"}),J.jsx("p",{children:"Matara, Sri Lanka"})]}),J.jsxs("div",{className:sn.institutionDetails,children:[J.jsx("img",{src:jn("logo/SSC.png"),alt:"School Logo",className:sn.logo})," ",J.jsxs("div",{className:sn.detailsText,children:[J.jsx("h3",{children:"St.Servatius College, Matara"}),J.jsx("p",{children:"G.C.E. Advanced Level"}),J.jsx("p",{children:"Combined Maths: A, Chemistry: C, Physics: S"})]})]})]})]}),dA="_container_oe4zx_2",hA="_fadeIn_oe4zx_1",pA="_title_oe4zx_16",mA="_content_oe4zx_30",gA="_projectCard_oe4zx_37",_A="_projectImageContainer_oe4zx_51",vA="_projectImage_oe4zx_51",xA="_projectTitle_oe4zx_69",SA="_projectDescription_oe4zx_76",yA="_githubLink_oe4zx_82",MA="_githubIcon_oe4zx_95",EA="_techStack_oe4zx_101",AA="_techBadge_oe4zx_107",pn={container:dA,fadeIn:hA,title:pA,content:mA,projectCard:gA,projectImageContainer:_A,projectImage:vA,projectTitle:xA,projectDescription:SA,githubLink:yA,githubIcon:MA,techStack:EA,techBadge:AA};var k2={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Xp=Ui.createContext&&Ui.createContext(k2),CA=["attr","size","title"];function wA(t,e){if(t==null)return{};var n=TA(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function TA(t,e){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function Al(){return Al=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Al.apply(this,arguments)}function jp(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Cl(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?jp(Object(n),!0).forEach(function(i){RA(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):jp(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function RA(t,e,n){return e=PA(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function PA(t){var e=LA(t,"string");return typeof e=="symbol"?e:e+""}function LA(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function B2(t){return t&&t.map((e,n)=>Ui.createElement(e.tag,Cl({key:n},e.attr),B2(e.child)))}function bA(t){return e=>Ui.createElement(DA,Al({attr:Cl({},t.attr)},e),B2(t.child))}function DA(t){var e=n=>{var{attr:i,size:r,title:s}=t,o=wA(t,CA),a=r||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Ui.createElement("svg",Al({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,o,{className:l,style:Cl(Cl({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Ui.createElement("title",null,s),t.children)};return Xp!==void 0?Ui.createElement(Xp.Consumer,null,n=>e(n)):e(k2)}function IA(t){return bA({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(t)}const UA=()=>{const t=[{title:"Amoral Clothing - Online Commerce and Workforce Management System",description:"This website will revolutionize the management of online orders, deliveries, stock inventory and T-shirt design, providing an all-in-one platform that enhances operational efficiency and customer satisfaction. It will feature a streamlined order and delivery system, stock management module and a customizable T-shirt design tool. Additionally, the platform will generate insightful reports, offering valuable data to drive informed decision-making and strategic growth for businesses.",image:"projects/Amoral1.png",techStack:["HTML","CSS","JavaScript","MySQL","CanvasJs","Google Map API"],githubLink:"https://github.com/Dilum-IR/Project_Amoral"},{title:"MaternEase - Web-based Maternity and Child Clinic Management System",description:"A web-based application designed to transform maternity and child clinic management in Sri Lanka. MaternEase introduces efficient appointment scheduling to reduce wait times and improve clinic operations, enhancing healthcare delivery for expectant mothers and children.",image:"projects/MaternEase.jpg",techStack:["React","React Vite","Spring Boot","MySQL","Tailwind CSS","Ant Design","Flowbite"],githubLink:"https://github.com/orgs/MaternEase/repositories"}];return J.jsxs("section",{className:pn.container,id:"projects",children:[J.jsx("h2",{className:pn.title,children:"Projects"}),J.jsx("div",{className:pn.content,children:t.map((e,n)=>J.jsxs("div",{className:pn.projectCard,children:[J.jsx("div",{className:pn.projectImageContainer,children:J.jsx("img",{src:jn(e.image),alt:e.title,className:pn.projectImage})}),J.jsx("h3",{className:pn.projectTitle,children:e.title}),J.jsx("p",{className:pn.projectDescription,children:e.description}),J.jsx("div",{className:pn.techStack,children:e.techStack.map((i,r)=>J.jsx("span",{className:pn.techBadge,children:i},r))}),J.jsxs("a",{href:e.githubLink,target:"_blank",rel:"noopener noreferrer",className:pn.githubLink,children:[J.jsx(IA,{className:pn.githubIcon})," "]})]},n))})]})};function NA(){return J.jsxs("div",{className:x_.App,children:[J.jsx(tA,{}),J.jsx(qE,{}),J.jsx(IE,{}),J.jsx(pv,{}),J.jsx(UA,{}),J.jsx(fA,{}),J.jsx(iv,{})]})}$c.createRoot(document.getElementById("root")).render(J.jsx(Ui.StrictMode,{children:J.jsx(NA,{})}));
