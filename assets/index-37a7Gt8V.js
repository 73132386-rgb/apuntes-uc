function cu(e,r){for(var t=0;t<r.length;t++){const a=r[t];if(typeof a!="string"&&!Array.isArray(a)){for(const n in a)if(n!=="default"&&!(n in e)){const i=Object.getOwnPropertyDescriptor(a,n);i&&Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:()=>a[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();function du(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $s={exports:{}},To={},Us={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sa=Symbol.for("react.element"),uu=Symbol.for("react.portal"),pu=Symbol.for("react.fragment"),mu=Symbol.for("react.strict_mode"),fu=Symbol.for("react.profiler"),gu=Symbol.for("react.provider"),hu=Symbol.for("react.context"),xu=Symbol.for("react.forward_ref"),vu=Symbol.for("react.suspense"),bu=Symbol.for("react.memo"),yu=Symbol.for("react.lazy"),wl=Symbol.iterator;function wu(e){return e===null||typeof e!="object"?null:(e=wl&&e[wl]||e["@@iterator"],typeof e=="function"?e:null)}var Hs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vs=Object.assign,Gs={};function Mt(e,r,t){this.props=e,this.context=r,this.refs=Gs,this.updater=t||Hs}Mt.prototype.isReactComponent={};Mt.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};Mt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qs(){}qs.prototype=Mt.prototype;function Si(e,r,t){this.props=e,this.context=r,this.refs=Gs,this.updater=t||Hs}var Ci=Si.prototype=new qs;Ci.constructor=Si;Vs(Ci,Mt.prototype);Ci.isPureReactComponent=!0;var jl=Array.isArray,Ws=Object.prototype.hasOwnProperty,Ni={current:null},Ks={key:!0,ref:!0,__self:!0,__source:!0};function Qs(e,r,t){var a,n={},i=null,l=null;if(r!=null)for(a in r.ref!==void 0&&(l=r.ref),r.key!==void 0&&(i=""+r.key),r)Ws.call(r,a)&&!Ks.hasOwnProperty(a)&&(n[a]=r[a]);var s=arguments.length-2;if(s===1)n.children=t;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];n.children=c}if(e&&e.defaultProps)for(a in s=e.defaultProps,s)n[a]===void 0&&(n[a]=s[a]);return{$$typeof:Sa,type:e,key:i,ref:l,props:n,_owner:Ni.current}}function ju(e,r){return{$$typeof:Sa,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function Ei(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sa}function ku(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return r[t]})}var kl=/\/+/g;function rn(e,r){return typeof e=="object"&&e!==null&&e.key!=null?ku(""+e.key):r.toString(36)}function Ka(e,r,t,a,n){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Sa:case uu:l=!0}}if(l)return l=e,n=n(l),e=a===""?"."+rn(l,0):a,jl(n)?(t="",e!=null&&(t=e.replace(kl,"$&/")+"/"),Ka(n,r,t,"",function(u){return u})):n!=null&&(Ei(n)&&(n=ju(n,t+(!n.key||l&&l.key===n.key?"":(""+n.key).replace(kl,"$&/")+"/")+e)),r.push(n)),1;if(l=0,a=a===""?".":a+":",jl(e))for(var s=0;s<e.length;s++){i=e[s];var c=a+rn(i,s);l+=Ka(i,r,t,c,n)}else if(c=wu(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=a+rn(i,s++),l+=Ka(i,r,t,c,n);else if(i==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function Pa(e,r,t){if(e==null)return e;var a=[],n=0;return Ka(e,a,"","",function(i){return r.call(t,i,n++)}),a}function Iu(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},Qa={transition:null},Su={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:Qa,ReactCurrentOwner:Ni};function Ys(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:Pa,forEach:function(e,r,t){Pa(e,function(){r.apply(this,arguments)},t)},count:function(e){var r=0;return Pa(e,function(){r++}),r},toArray:function(e){return Pa(e,function(r){return r})||[]},only:function(e){if(!Ei(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Mt;O.Fragment=pu;O.Profiler=fu;O.PureComponent=Si;O.StrictMode=mu;O.Suspense=vu;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Su;O.act=Ys;O.cloneElement=function(e,r,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Vs({},e.props),n=e.key,i=e.ref,l=e._owner;if(r!=null){if(r.ref!==void 0&&(i=r.ref,l=Ni.current),r.key!==void 0&&(n=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in r)Ws.call(r,c)&&!Ks.hasOwnProperty(c)&&(a[c]=r[c]===void 0&&s!==void 0?s[c]:r[c])}var c=arguments.length-2;if(c===1)a.children=t;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];a.children=s}return{$$typeof:Sa,type:e.type,key:n,ref:i,props:a,_owner:l}};O.createContext=function(e){return e={$$typeof:hu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gu,_context:e},e.Consumer=e};O.createElement=Qs;O.createFactory=function(e){var r=Qs.bind(null,e);return r.type=e,r};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:xu,render:e}};O.isValidElement=Ei;O.lazy=function(e){return{$$typeof:yu,_payload:{_status:-1,_result:e},_init:Iu}};O.memo=function(e,r){return{$$typeof:bu,type:e,compare:r===void 0?null:r}};O.startTransition=function(e){var r=Qa.transition;Qa.transition={};try{e()}finally{Qa.transition=r}};O.unstable_act=Ys;O.useCallback=function(e,r){return we.current.useCallback(e,r)};O.useContext=function(e){return we.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return we.current.useDeferredValue(e)};O.useEffect=function(e,r){return we.current.useEffect(e,r)};O.useId=function(){return we.current.useId()};O.useImperativeHandle=function(e,r,t){return we.current.useImperativeHandle(e,r,t)};O.useInsertionEffect=function(e,r){return we.current.useInsertionEffect(e,r)};O.useLayoutEffect=function(e,r){return we.current.useLayoutEffect(e,r)};O.useMemo=function(e,r){return we.current.useMemo(e,r)};O.useReducer=function(e,r,t){return we.current.useReducer(e,r,t)};O.useRef=function(e){return we.current.useRef(e)};O.useState=function(e){return we.current.useState(e)};O.useSyncExternalStore=function(e,r,t){return we.current.useSyncExternalStore(e,r,t)};O.useTransition=function(){return we.current.useTransition()};O.version="18.3.1";Us.exports=O;var y=Us.exports;const Xs=du(y),Cu=cu({__proto__:null,default:Xs},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nu=y,Eu=Symbol.for("react.element"),zu=Symbol.for("react.fragment"),_u=Object.prototype.hasOwnProperty,Pu=Nu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mu={key:!0,ref:!0,__self:!0,__source:!0};function Js(e,r,t){var a,n={},i=null,l=null;t!==void 0&&(i=""+t),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(l=r.ref);for(a in r)_u.call(r,a)&&!Mu.hasOwnProperty(a)&&(n[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps,r)n[a]===void 0&&(n[a]=r[a]);return{$$typeof:Eu,type:e,key:i,ref:l,props:n,_owner:Pu.current}}To.Fragment=zu;To.jsx=Js;To.jsxs=Js;$s.exports=To;var o=$s.exports,_n={},Zs={exports:{}},Re={},ec={exports:{}},rc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(z,L){var D=z.length;z.push(L);e:for(;0<D;){var U=D-1>>>1,G=z[U];if(0<n(G,L))z[U]=L,z[D]=G,D=U;else break e}}function t(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var L=z[0],D=z.pop();if(D!==L){z[0]=D;e:for(var U=0,G=z.length,cr=G>>>1;U<cr;){var Fe=2*(U+1)-1,dr=z[Fe],_e=Fe+1,k=z[_e];if(0>n(dr,D))_e<G&&0>n(k,dr)?(z[U]=k,z[_e]=D,U=_e):(z[U]=dr,z[Fe]=D,U=Fe);else if(_e<G&&0>n(k,D))z[U]=k,z[_e]=D,U=_e;else break e}}return L}function n(z,L){var D=z.sortIndex-L.sortIndex;return D!==0?D:z.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var c=[],u=[],g=1,h=null,v=3,x=!1,I=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(z){for(var L=t(u);L!==null;){if(L.callback===null)a(u);else if(L.startTime<=z)a(u),L.sortIndex=L.expirationTime,r(c,L);else break;L=t(u)}}function b(z){if(w=!1,p(z),!I)if(t(c)!==null)I=!0,De(S);else{var L=t(u);L!==null&&ke(b,L.startTime-z)}}function S(z,L){I=!1,w&&(w=!1,m(R),R=-1),x=!0;var D=v;try{for(p(L),h=t(c);h!==null&&(!(h.expirationTime>L)||z&&!ae());){var U=h.callback;if(typeof U=="function"){h.callback=null,v=h.priorityLevel;var G=U(h.expirationTime<=L);L=e.unstable_now(),typeof G=="function"?h.callback=G:h===t(c)&&a(c),p(L)}else a(c);h=t(c)}if(h!==null)var cr=!0;else{var Fe=t(u);Fe!==null&&ke(b,Fe.startTime-L),cr=!1}return cr}finally{h=null,v=D,x=!1}}var T=!1,j=null,R=-1,P=5,F=-1;function ae(){return!(e.unstable_now()-F<P)}function qe(){if(j!==null){var z=e.unstable_now();F=z;var L=!0;try{L=j(!0,z)}finally{L?sr():(T=!1,j=null)}}else T=!1}var sr;if(typeof d=="function")sr=function(){d(qe)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,rr=nt.port2;nt.port1.onmessage=qe,sr=function(){rr.postMessage(null)}}else sr=function(){E(qe,0)};function De(z){j=z,T||(T=!0,sr())}function ke(z,L){R=E(function(){z(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){I||x||(I=!0,De(S))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(z){switch(v){case 1:case 2:case 3:var L=3;break;default:L=v}var D=v;v=L;try{return z()}finally{v=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,L){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var D=v;v=z;try{return L()}finally{v=D}},e.unstable_scheduleCallback=function(z,L,D){var U=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?U+D:U):D=U,z){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=D+G,z={id:g++,callback:L,priorityLevel:z,startTime:D,expirationTime:G,sortIndex:-1},D>U?(z.sortIndex=D,r(u,z),t(c)===null&&z===t(u)&&(w?(m(R),R=-1):w=!0,ke(b,D-U))):(z.sortIndex=G,r(c,z),I||x||(I=!0,De(S))),z},e.unstable_shouldYield=ae,e.unstable_wrapCallback=function(z){var L=v;return function(){var D=v;v=L;try{return z.apply(this,arguments)}finally{v=D}}}})(rc);ec.exports=rc;var Au=ec.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu=y,Te=Au;function C(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tc=new Set,la={};function at(e,r){St(e,r),St(e+"Capture",r)}function St(e,r){for(la[e]=r,e=0;e<r.length;e++)tc.add(r[e])}var xr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pn=Object.prototype.hasOwnProperty,Ru=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Il={},Sl={};function Lu(e){return Pn.call(Sl,e)?!0:Pn.call(Il,e)?!1:Ru.test(e)?Sl[e]=!0:(Il[e]=!0,!1)}function Du(e,r,t,a){if(t!==null&&t.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fu(e,r,t,a){if(r===null||typeof r>"u"||Du(e,r,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function je(e,r,t,a,n,i,l){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=n,this.mustUseProperty=t,this.propertyName=e,this.type=r,this.sanitizeURL=i,this.removeEmptyString=l}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];me[r]=new je(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var zi=/[\-:]([a-z])/g;function _i(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(zi,_i);me[r]=new je(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(zi,_i);me[r]=new je(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(zi,_i);me[r]=new je(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pi(e,r,t,a){var n=me.hasOwnProperty(r)?me[r]:null;(n!==null?n.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Fu(r,t,n,a)&&(t=null),a||n===null?Lu(r)&&(t===null?e.removeAttribute(r):e.setAttribute(r,""+t)):n.mustUseProperty?e[n.propertyName]=t===null?n.type===3?!1:"":t:(r=n.attributeName,a=n.attributeNamespace,t===null?e.removeAttribute(r):(n=n.type,t=n===3||n===4&&t===!0?"":""+t,a?e.setAttributeNS(a,r,t):e.setAttribute(r,t))))}var wr=Tu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ma=Symbol.for("react.element"),lt=Symbol.for("react.portal"),st=Symbol.for("react.fragment"),Mi=Symbol.for("react.strict_mode"),Mn=Symbol.for("react.profiler"),ac=Symbol.for("react.provider"),oc=Symbol.for("react.context"),Ai=Symbol.for("react.forward_ref"),An=Symbol.for("react.suspense"),Tn=Symbol.for("react.suspense_list"),Ti=Symbol.for("react.memo"),kr=Symbol.for("react.lazy"),nc=Symbol.for("react.offscreen"),Cl=Symbol.iterator;function Dt(e){return e===null||typeof e!="object"?null:(e=Cl&&e[Cl]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,tn;function Wt(e){if(tn===void 0)try{throw Error()}catch(t){var r=t.stack.trim().match(/\n( *(at )?)/);tn=r&&r[1]||""}return`
`+tn+e}var an=!1;function on(e,r){if(!e||an)return"";an=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(u){var a=u}Reflect.construct(e,[],r)}else{try{r.call()}catch(u){a=u}e.call(r.prototype)}else{try{throw Error()}catch(u){a=u}e()}}catch(u){if(u&&a&&typeof u.stack=="string"){for(var n=u.stack.split(`
`),i=a.stack.split(`
`),l=n.length-1,s=i.length-1;1<=l&&0<=s&&n[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(n[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||n[l]!==i[s]){var c=`
`+n[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=s);break}}}finally{an=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Wt(e):""}function Bu(e){switch(e.tag){case 5:return Wt(e.type);case 16:return Wt("Lazy");case 13:return Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 2:case 15:return e=on(e.type,!1),e;case 11:return e=on(e.type.render,!1),e;case 1:return e=on(e.type,!0),e;default:return""}}function Rn(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case st:return"Fragment";case lt:return"Portal";case Mn:return"Profiler";case Mi:return"StrictMode";case An:return"Suspense";case Tn:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case oc:return(e.displayName||"Context")+".Consumer";case ac:return(e._context.displayName||"Context")+".Provider";case Ai:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ti:return r=e.displayName||null,r!==null?r:Rn(e.type)||"Memo";case kr:r=e._payload,e=e._init;try{return Rn(e(r))}catch{}}return null}function Ou(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rn(r);case 8:return r===Mi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Dr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ic(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function $u(e){var r=ic(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),a=""+e[r];if(!e.hasOwnProperty(r)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var n=t.get,i=t.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return n.call(this)},set:function(l){a=""+l,i.call(this,l)}}),Object.defineProperty(e,r,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(l){a=""+l},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Aa(e){e._valueTracker||(e._valueTracker=$u(e))}function lc(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var t=r.getValue(),a="";return e&&(a=ic(e)?e.checked?"true":"false":e.value),e=a,e!==t?(r.setValue(e),!0):!1}function io(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ln(e,r){var t=r.checked;return Z({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Nl(e,r){var t=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;t=Dr(r.value!=null?r.value:t),e._wrapperState={initialChecked:a,initialValue:t,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function sc(e,r){r=r.checked,r!=null&&Pi(e,"checked",r,!1)}function Dn(e,r){sc(e,r);var t=Dr(r.value),a=r.type;if(t!=null)a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Fn(e,r.type,t):r.hasOwnProperty("defaultValue")&&Fn(e,r.type,Dr(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function El(e,r,t){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,t||r===e.value||(e.value=r),e.defaultValue=r}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Fn(e,r,t){(r!=="number"||io(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Kt=Array.isArray;function bt(e,r,t,a){if(e=e.options,r){r={};for(var n=0;n<t.length;n++)r["$"+t[n]]=!0;for(t=0;t<e.length;t++)n=r.hasOwnProperty("$"+e[t].value),e[t].selected!==n&&(e[t].selected=n),n&&a&&(e[t].defaultSelected=!0)}else{for(t=""+Dr(t),r=null,n=0;n<e.length;n++){if(e[n].value===t){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}r!==null||e[n].disabled||(r=e[n])}r!==null&&(r.selected=!0)}}function Bn(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(C(91));return Z({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zl(e,r){var t=r.value;if(t==null){if(t=r.children,r=r.defaultValue,t!=null){if(r!=null)throw Error(C(92));if(Kt(t)){if(1<t.length)throw Error(C(93));t=t[0]}r=t}r==null&&(r=""),t=r}e._wrapperState={initialValue:Dr(t)}}function cc(e,r){var t=Dr(r.value),a=Dr(r.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),r.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),a!=null&&(e.defaultValue=""+a)}function _l(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function dc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function On(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?dc(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ta,uc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,t,a,n){MSApp.execUnsafeLocalFunction(function(){return e(r,t,a,n)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(Ta=Ta||document.createElement("div"),Ta.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ta.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function sa(e,r){if(r){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=r;return}}e.textContent=r}var Jt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uu=["Webkit","ms","Moz","O"];Object.keys(Jt).forEach(function(e){Uu.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),Jt[r]=Jt[e]})});function pc(e,r,t){return r==null||typeof r=="boolean"||r===""?"":t||typeof r!="number"||r===0||Jt.hasOwnProperty(e)&&Jt[e]?(""+r).trim():r+"px"}function mc(e,r){e=e.style;for(var t in r)if(r.hasOwnProperty(t)){var a=t.indexOf("--")===0,n=pc(t,r[t],a);t==="float"&&(t="cssFloat"),a?e.setProperty(t,n):e[t]=n}}var Hu=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $n(e,r){if(r){if(Hu[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(C(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(C(61))}if(r.style!=null&&typeof r.style!="object")throw Error(C(62))}}function Un(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hn=null;function Ri(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vn=null,yt=null,wt=null;function Pl(e){if(e=Ea(e)){if(typeof Vn!="function")throw Error(C(280));var r=e.stateNode;r&&(r=Bo(r),Vn(e.stateNode,e.type,r))}}function fc(e){yt?wt?wt.push(e):wt=[e]:yt=e}function gc(){if(yt){var e=yt,r=wt;if(wt=yt=null,Pl(e),r)for(e=0;e<r.length;e++)Pl(r[e])}}function hc(e,r){return e(r)}function xc(){}var nn=!1;function vc(e,r,t){if(nn)return e(r,t);nn=!0;try{return hc(e,r,t)}finally{nn=!1,(yt!==null||wt!==null)&&(xc(),gc())}}function ca(e,r){var t=e.stateNode;if(t===null)return null;var a=Bo(t);if(a===null)return null;t=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(C(231,r,typeof t));return t}var Gn=!1;if(xr)try{var Ft={};Object.defineProperty(Ft,"passive",{get:function(){Gn=!0}}),window.addEventListener("test",Ft,Ft),window.removeEventListener("test",Ft,Ft)}catch{Gn=!1}function Vu(e,r,t,a,n,i,l,s,c){var u=Array.prototype.slice.call(arguments,3);try{r.apply(t,u)}catch(g){this.onError(g)}}var Zt=!1,lo=null,so=!1,qn=null,Gu={onError:function(e){Zt=!0,lo=e}};function qu(e,r,t,a,n,i,l,s,c){Zt=!1,lo=null,Vu.apply(Gu,arguments)}function Wu(e,r,t,a,n,i,l,s,c){if(qu.apply(this,arguments),Zt){if(Zt){var u=lo;Zt=!1,lo=null}else throw Error(C(198));so||(so=!0,qn=u)}}function ot(e){var r=e,t=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(t=r.return),e=r.return;while(e)}return r.tag===3?t:null}function bc(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Ml(e){if(ot(e)!==e)throw Error(C(188))}function Ku(e){var r=e.alternate;if(!r){if(r=ot(e),r===null)throw Error(C(188));return r!==e?null:e}for(var t=e,a=r;;){var n=t.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){t=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===t)return Ml(n),e;if(i===a)return Ml(n),r;i=i.sibling}throw Error(C(188))}if(t.return!==a.return)t=n,a=i;else{for(var l=!1,s=n.child;s;){if(s===t){l=!0,t=n,a=i;break}if(s===a){l=!0,a=n,t=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===t){l=!0,t=i,a=n;break}if(s===a){l=!0,a=i,t=n;break}s=s.sibling}if(!l)throw Error(C(189))}}if(t.alternate!==a)throw Error(C(190))}if(t.tag!==3)throw Error(C(188));return t.stateNode.current===t?e:r}function yc(e){return e=Ku(e),e!==null?wc(e):null}function wc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=wc(e);if(r!==null)return r;e=e.sibling}return null}var jc=Te.unstable_scheduleCallback,Al=Te.unstable_cancelCallback,Qu=Te.unstable_shouldYield,Yu=Te.unstable_requestPaint,re=Te.unstable_now,Xu=Te.unstable_getCurrentPriorityLevel,Li=Te.unstable_ImmediatePriority,kc=Te.unstable_UserBlockingPriority,co=Te.unstable_NormalPriority,Ju=Te.unstable_LowPriority,Ic=Te.unstable_IdlePriority,Ro=null,ir=null;function Zu(e){if(ir&&typeof ir.onCommitFiberRoot=="function")try{ir.onCommitFiberRoot(Ro,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:tp,ep=Math.log,rp=Math.LN2;function tp(e){return e>>>=0,e===0?32:31-(ep(e)/rp|0)|0}var Ra=64,La=4194304;function Qt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function uo(e,r){var t=e.pendingLanes;if(t===0)return 0;var a=0,n=e.suspendedLanes,i=e.pingedLanes,l=t&268435455;if(l!==0){var s=l&~n;s!==0?a=Qt(s):(i&=l,i!==0&&(a=Qt(i)))}else l=t&~n,l!==0?a=Qt(l):i!==0&&(a=Qt(i));if(a===0)return 0;if(r!==0&&r!==a&&!(r&n)&&(n=a&-a,i=r&-r,n>=i||n===16&&(i&4194240)!==0))return r;if(a&4&&(a|=t&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=a;0<r;)t=31-Xe(r),n=1<<t,a|=e[t],r&=~n;return a}function ap(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function op(e,r){for(var t=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Xe(i),s=1<<l,c=n[l];c===-1?(!(s&t)||s&a)&&(n[l]=ap(s,r)):c<=r&&(e.expiredLanes|=s),i&=~s}}function Wn(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sc(){var e=Ra;return Ra<<=1,!(Ra&4194240)&&(Ra=64),e}function ln(e){for(var r=[],t=0;31>t;t++)r.push(e);return r}function Ca(e,r,t){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Xe(r),e[r]=t}function np(e,r){var t=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<t;){var n=31-Xe(t),i=1<<n;r[n]=0,a[n]=-1,e[n]=-1,t&=~i}}function Di(e,r){var t=e.entangledLanes|=r;for(e=e.entanglements;t;){var a=31-Xe(t),n=1<<a;n&r|e[a]&r&&(e[a]|=r),t&=~n}}var V=0;function Cc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Nc,Fi,Ec,zc,_c,Kn=!1,Da=[],zr=null,_r=null,Pr=null,da=new Map,ua=new Map,Sr=[],ip="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tl(e,r){switch(e){case"focusin":case"focusout":zr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":da.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(r.pointerId)}}function Bt(e,r,t,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:r,domEventName:t,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},r!==null&&(r=Ea(r),r!==null&&Fi(r)),e):(e.eventSystemFlags|=a,r=e.targetContainers,n!==null&&r.indexOf(n)===-1&&r.push(n),e)}function lp(e,r,t,a,n){switch(r){case"focusin":return zr=Bt(zr,e,r,t,a,n),!0;case"dragenter":return _r=Bt(_r,e,r,t,a,n),!0;case"mouseover":return Pr=Bt(Pr,e,r,t,a,n),!0;case"pointerover":var i=n.pointerId;return da.set(i,Bt(da.get(i)||null,e,r,t,a,n)),!0;case"gotpointercapture":return i=n.pointerId,ua.set(i,Bt(ua.get(i)||null,e,r,t,a,n)),!0}return!1}function Pc(e){var r=Gr(e.target);if(r!==null){var t=ot(r);if(t!==null){if(r=t.tag,r===13){if(r=bc(t),r!==null){e.blockedOn=r,_c(e.priority,function(){Ec(t)});return}}else if(r===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ya(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var t=Qn(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);Hn=a,t.target.dispatchEvent(a),Hn=null}else return r=Ea(t),r!==null&&Fi(r),e.blockedOn=t,!1;r.shift()}return!0}function Rl(e,r,t){Ya(e)&&t.delete(r)}function sp(){Kn=!1,zr!==null&&Ya(zr)&&(zr=null),_r!==null&&Ya(_r)&&(_r=null),Pr!==null&&Ya(Pr)&&(Pr=null),da.forEach(Rl),ua.forEach(Rl)}function Ot(e,r){e.blockedOn===r&&(e.blockedOn=null,Kn||(Kn=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,sp)))}function pa(e){function r(n){return Ot(n,e)}if(0<Da.length){Ot(Da[0],e);for(var t=1;t<Da.length;t++){var a=Da[t];a.blockedOn===e&&(a.blockedOn=null)}}for(zr!==null&&Ot(zr,e),_r!==null&&Ot(_r,e),Pr!==null&&Ot(Pr,e),da.forEach(r),ua.forEach(r),t=0;t<Sr.length;t++)a=Sr[t],a.blockedOn===e&&(a.blockedOn=null);for(;0<Sr.length&&(t=Sr[0],t.blockedOn===null);)Pc(t),t.blockedOn===null&&Sr.shift()}var jt=wr.ReactCurrentBatchConfig,po=!0;function cp(e,r,t,a){var n=V,i=jt.transition;jt.transition=null;try{V=1,Bi(e,r,t,a)}finally{V=n,jt.transition=i}}function dp(e,r,t,a){var n=V,i=jt.transition;jt.transition=null;try{V=4,Bi(e,r,t,a)}finally{V=n,jt.transition=i}}function Bi(e,r,t,a){if(po){var n=Qn(e,r,t,a);if(n===null)xn(e,r,a,mo,t),Tl(e,a);else if(lp(n,e,r,t,a))a.stopPropagation();else if(Tl(e,a),r&4&&-1<ip.indexOf(e)){for(;n!==null;){var i=Ea(n);if(i!==null&&Nc(i),i=Qn(e,r,t,a),i===null&&xn(e,r,a,mo,t),i===n)break;n=i}n!==null&&a.stopPropagation()}else xn(e,r,a,null,t)}}var mo=null;function Qn(e,r,t,a){if(mo=null,e=Ri(a),e=Gr(e),e!==null)if(r=ot(e),r===null)e=null;else if(t=r.tag,t===13){if(e=bc(r),e!==null)return e;e=null}else if(t===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return mo=e,null}function Mc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xu()){case Li:return 1;case kc:return 4;case co:case Ju:return 16;case Ic:return 536870912;default:return 16}default:return 16}}var Nr=null,Oi=null,Xa=null;function Ac(){if(Xa)return Xa;var e,r=Oi,t=r.length,a,n="value"in Nr?Nr.value:Nr.textContent,i=n.length;for(e=0;e<t&&r[e]===n[e];e++);var l=t-e;for(a=1;a<=l&&r[t-a]===n[i-a];a++);return Xa=n.slice(e,1<a?1-a:void 0)}function Ja(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Fa(){return!0}function Ll(){return!1}function Le(e){function r(t,a,n,i,l){this._reactName=t,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Fa:Ll,this.isPropagationStopped=Ll,this}return Z(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Fa)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Fa)},persist:function(){},isPersistent:Fa}),r}var At={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$i=Le(At),Na=Z({},At,{view:0,detail:0}),up=Le(Na),sn,cn,$t,Lo=Z({},Na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ui,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$t&&($t&&e.type==="mousemove"?(sn=e.screenX-$t.screenX,cn=e.screenY-$t.screenY):cn=sn=0,$t=e),sn)},movementY:function(e){return"movementY"in e?e.movementY:cn}}),Dl=Le(Lo),pp=Z({},Lo,{dataTransfer:0}),mp=Le(pp),fp=Z({},Na,{relatedTarget:0}),dn=Le(fp),gp=Z({},At,{animationName:0,elapsedTime:0,pseudoElement:0}),hp=Le(gp),xp=Z({},At,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vp=Le(xp),bp=Z({},At,{data:0}),Fl=Le(bp),yp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kp(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=jp[e])?!!r[e]:!1}function Ui(){return kp}var Ip=Z({},Na,{key:function(e){if(e.key){var r=yp[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Ja(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ui,charCode:function(e){return e.type==="keypress"?Ja(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ja(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sp=Le(Ip),Cp=Z({},Lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bl=Le(Cp),Np=Z({},Na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ui}),Ep=Le(Np),zp=Z({},At,{propertyName:0,elapsedTime:0,pseudoElement:0}),_p=Le(zp),Pp=Z({},Lo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mp=Le(Pp),Ap=[9,13,27,32],Hi=xr&&"CompositionEvent"in window,ea=null;xr&&"documentMode"in document&&(ea=document.documentMode);var Tp=xr&&"TextEvent"in window&&!ea,Tc=xr&&(!Hi||ea&&8<ea&&11>=ea),Ol=" ",$l=!1;function Rc(e,r){switch(e){case"keyup":return Ap.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ct=!1;function Rp(e,r){switch(e){case"compositionend":return Lc(r);case"keypress":return r.which!==32?null:($l=!0,Ol);case"textInput":return e=r.data,e===Ol&&$l?null:e;default:return null}}function Lp(e,r){if(ct)return e==="compositionend"||!Hi&&Rc(e,r)?(e=Ac(),Xa=Oi=Nr=null,ct=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Tc&&r.locale!=="ko"?null:r.data;default:return null}}var Dp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ul(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Dp[e.type]:r==="textarea"}function Dc(e,r,t,a){fc(a),r=fo(r,"onChange"),0<r.length&&(t=new $i("onChange","change",null,t,a),e.push({event:t,listeners:r}))}var ra=null,ma=null;function Fp(e){Kc(e,0)}function Do(e){var r=pt(e);if(lc(r))return e}function Bp(e,r){if(e==="change")return r}var Fc=!1;if(xr){var un;if(xr){var pn="oninput"in document;if(!pn){var Hl=document.createElement("div");Hl.setAttribute("oninput","return;"),pn=typeof Hl.oninput=="function"}un=pn}else un=!1;Fc=un&&(!document.documentMode||9<document.documentMode)}function Vl(){ra&&(ra.detachEvent("onpropertychange",Bc),ma=ra=null)}function Bc(e){if(e.propertyName==="value"&&Do(ma)){var r=[];Dc(r,ma,e,Ri(e)),vc(Fp,r)}}function Op(e,r,t){e==="focusin"?(Vl(),ra=r,ma=t,ra.attachEvent("onpropertychange",Bc)):e==="focusout"&&Vl()}function $p(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Do(ma)}function Up(e,r){if(e==="click")return Do(r)}function Hp(e,r){if(e==="input"||e==="change")return Do(r)}function Vp(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var er=typeof Object.is=="function"?Object.is:Vp;function fa(e,r){if(er(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var t=Object.keys(e),a=Object.keys(r);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var n=t[a];if(!Pn.call(r,n)||!er(e[n],r[n]))return!1}return!0}function Gl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ql(e,r){var t=Gl(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=r&&a>=r)return{node:t,offset:r-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Gl(t)}}function Oc(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Oc(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function $c(){for(var e=window,r=io();r instanceof e.HTMLIFrameElement;){try{var t=typeof r.contentWindow.location.href=="string"}catch{t=!1}if(t)e=r.contentWindow;else break;r=io(e.document)}return r}function Vi(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Gp(e){var r=$c(),t=e.focusedElem,a=e.selectionRange;if(r!==t&&t&&t.ownerDocument&&Oc(t.ownerDocument.documentElement,t)){if(a!==null&&Vi(t)){if(r=a.start,e=a.end,e===void 0&&(e=r),"selectionStart"in t)t.selectionStart=r,t.selectionEnd=Math.min(e,t.value.length);else if(e=(r=t.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var n=t.textContent.length,i=Math.min(a.start,n);a=a.end===void 0?i:Math.min(a.end,n),!e.extend&&i>a&&(n=a,a=i,i=n),n=ql(t,i);var l=ql(t,a);n&&l&&(e.rangeCount!==1||e.anchorNode!==n.node||e.anchorOffset!==n.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(r=r.createRange(),r.setStart(n.node,n.offset),e.removeAllRanges(),i>a?(e.addRange(r),e.extend(l.node,l.offset)):(r.setEnd(l.node,l.offset),e.addRange(r)))}}for(r=[],e=t;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<r.length;t++)e=r[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qp=xr&&"documentMode"in document&&11>=document.documentMode,dt=null,Yn=null,ta=null,Xn=!1;function Wl(e,r,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Xn||dt==null||dt!==io(a)||(a=dt,"selectionStart"in a&&Vi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ta&&fa(ta,a)||(ta=a,a=fo(Yn,"onSelect"),0<a.length&&(r=new $i("onSelect","select",null,r,t),e.push({event:r,listeners:a}),r.target=dt)))}function Ba(e,r){var t={};return t[e.toLowerCase()]=r.toLowerCase(),t["Webkit"+e]="webkit"+r,t["Moz"+e]="moz"+r,t}var ut={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionend:Ba("Transition","TransitionEnd")},mn={},Uc={};xr&&(Uc=document.createElement("div").style,"AnimationEvent"in window||(delete ut.animationend.animation,delete ut.animationiteration.animation,delete ut.animationstart.animation),"TransitionEvent"in window||delete ut.transitionend.transition);function Fo(e){if(mn[e])return mn[e];if(!ut[e])return e;var r=ut[e],t;for(t in r)if(r.hasOwnProperty(t)&&t in Uc)return mn[e]=r[t];return e}var Hc=Fo("animationend"),Vc=Fo("animationiteration"),Gc=Fo("animationstart"),qc=Fo("transitionend"),Wc=new Map,Kl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(e,r){Wc.set(e,r),at(r,[e])}for(var fn=0;fn<Kl.length;fn++){var gn=Kl[fn],Wp=gn.toLowerCase(),Kp=gn[0].toUpperCase()+gn.slice(1);Br(Wp,"on"+Kp)}Br(Hc,"onAnimationEnd");Br(Vc,"onAnimationIteration");Br(Gc,"onAnimationStart");Br("dblclick","onDoubleClick");Br("focusin","onFocus");Br("focusout","onBlur");Br(qc,"onTransitionEnd");St("onMouseEnter",["mouseout","mouseover"]);St("onMouseLeave",["mouseout","mouseover"]);St("onPointerEnter",["pointerout","pointerover"]);St("onPointerLeave",["pointerout","pointerover"]);at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));at("onBeforeInput",["compositionend","keypress","textInput","paste"]);at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yt));function Ql(e,r,t){var a=e.type||"unknown-event";e.currentTarget=t,Wu(a,r,void 0,e),e.currentTarget=null}function Kc(e,r){r=(r&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],n=a.event;a=a.listeners;e:{var i=void 0;if(r)for(var l=a.length-1;0<=l;l--){var s=a[l],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==i&&n.isPropagationStopped())break e;Ql(n,s,u),i=c}else for(l=0;l<a.length;l++){if(s=a[l],c=s.instance,u=s.currentTarget,s=s.listener,c!==i&&n.isPropagationStopped())break e;Ql(n,s,u),i=c}}}if(so)throw e=qn,so=!1,qn=null,e}function K(e,r){var t=r[ti];t===void 0&&(t=r[ti]=new Set);var a=e+"__bubble";t.has(a)||(Qc(r,e,2,!1),t.add(a))}function hn(e,r,t){var a=0;r&&(a|=4),Qc(t,e,a,r)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function ga(e){if(!e[Oa]){e[Oa]=!0,tc.forEach(function(t){t!=="selectionchange"&&(Qp.has(t)||hn(t,!1,e),hn(t,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Oa]||(r[Oa]=!0,hn("selectionchange",!1,r))}}function Qc(e,r,t,a){switch(Mc(r)){case 1:var n=cp;break;case 4:n=dp;break;default:n=Bi}t=n.bind(null,r,t,e),n=void 0,!Gn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(r,t,{capture:!0,passive:n}):e.addEventListener(r,t,!0):n!==void 0?e.addEventListener(r,t,{passive:n}):e.addEventListener(r,t,!1)}function xn(e,r,t,a,n){var i=a;if(!(r&1)&&!(r&2)&&a!==null)e:for(;;){if(a===null)return;var l=a.tag;if(l===3||l===4){var s=a.stateNode.containerInfo;if(s===n||s.nodeType===8&&s.parentNode===n)break;if(l===4)for(l=a.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===n||c.nodeType===8&&c.parentNode===n))return;l=l.return}for(;s!==null;){if(l=Gr(s),l===null)return;if(c=l.tag,c===5||c===6){a=i=l;continue e}s=s.parentNode}}a=a.return}vc(function(){var u=i,g=Ri(t),h=[];e:{var v=Wc.get(e);if(v!==void 0){var x=$i,I=e;switch(e){case"keypress":if(Ja(t)===0)break e;case"keydown":case"keyup":x=Sp;break;case"focusin":I="focus",x=dn;break;case"focusout":I="blur",x=dn;break;case"beforeblur":case"afterblur":x=dn;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Dl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=mp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Ep;break;case Hc:case Vc:case Gc:x=hp;break;case qc:x=_p;break;case"scroll":x=up;break;case"wheel":x=Mp;break;case"copy":case"cut":case"paste":x=vp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Bl}var w=(r&4)!==0,E=!w&&e==="scroll",m=w?v!==null?v+"Capture":null:v;w=[];for(var d=u,p;d!==null;){p=d;var b=p.stateNode;if(p.tag===5&&b!==null&&(p=b,m!==null&&(b=ca(d,m),b!=null&&w.push(ha(d,b,p)))),E)break;d=d.return}0<w.length&&(v=new x(v,I,null,t,g),h.push({event:v,listeners:w}))}}if(!(r&7)){e:{if(v=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",v&&t!==Hn&&(I=t.relatedTarget||t.fromElement)&&(Gr(I)||I[vr]))break e;if((x||v)&&(v=g.window===g?g:(v=g.ownerDocument)?v.defaultView||v.parentWindow:window,x?(I=t.relatedTarget||t.toElement,x=u,I=I?Gr(I):null,I!==null&&(E=ot(I),I!==E||I.tag!==5&&I.tag!==6)&&(I=null)):(x=null,I=u),x!==I)){if(w=Dl,b="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Bl,b="onPointerLeave",m="onPointerEnter",d="pointer"),E=x==null?v:pt(x),p=I==null?v:pt(I),v=new w(b,d+"leave",x,t,g),v.target=E,v.relatedTarget=p,b=null,Gr(g)===u&&(w=new w(m,d+"enter",I,t,g),w.target=p,w.relatedTarget=E,b=w),E=b,x&&I)r:{for(w=x,m=I,d=0,p=w;p;p=it(p))d++;for(p=0,b=m;b;b=it(b))p++;for(;0<d-p;)w=it(w),d--;for(;0<p-d;)m=it(m),p--;for(;d--;){if(w===m||m!==null&&w===m.alternate)break r;w=it(w),m=it(m)}w=null}else w=null;x!==null&&Yl(h,v,x,w,!1),I!==null&&E!==null&&Yl(h,E,I,w,!0)}}e:{if(v=u?pt(u):window,x=v.nodeName&&v.nodeName.toLowerCase(),x==="select"||x==="input"&&v.type==="file")var S=Bp;else if(Ul(v))if(Fc)S=Hp;else{S=$p;var T=Op}else(x=v.nodeName)&&x.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(S=Up);if(S&&(S=S(e,u))){Dc(h,S,t,g);break e}T&&T(e,v,u),e==="focusout"&&(T=v._wrapperState)&&T.controlled&&v.type==="number"&&Fn(v,"number",v.value)}switch(T=u?pt(u):window,e){case"focusin":(Ul(T)||T.contentEditable==="true")&&(dt=T,Yn=u,ta=null);break;case"focusout":ta=Yn=dt=null;break;case"mousedown":Xn=!0;break;case"contextmenu":case"mouseup":case"dragend":Xn=!1,Wl(h,t,g);break;case"selectionchange":if(qp)break;case"keydown":case"keyup":Wl(h,t,g)}var j;if(Hi)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ct?Rc(e,t)&&(R="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(Tc&&t.locale!=="ko"&&(ct||R!=="onCompositionStart"?R==="onCompositionEnd"&&ct&&(j=Ac()):(Nr=g,Oi="value"in Nr?Nr.value:Nr.textContent,ct=!0)),T=fo(u,R),0<T.length&&(R=new Fl(R,e,null,t,g),h.push({event:R,listeners:T}),j?R.data=j:(j=Lc(t),j!==null&&(R.data=j)))),(j=Tp?Rp(e,t):Lp(e,t))&&(u=fo(u,"onBeforeInput"),0<u.length&&(g=new Fl("onBeforeInput","beforeinput",null,t,g),h.push({event:g,listeners:u}),g.data=j))}Kc(h,r)})}function ha(e,r,t){return{instance:e,listener:r,currentTarget:t}}function fo(e,r){for(var t=r+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;n.tag===5&&i!==null&&(n=i,i=ca(e,t),i!=null&&a.unshift(ha(e,i,n)),i=ca(e,r),i!=null&&a.push(ha(e,i,n))),e=e.return}return a}function it(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yl(e,r,t,a,n){for(var i=r._reactName,l=[];t!==null&&t!==a;){var s=t,c=s.alternate,u=s.stateNode;if(c!==null&&c===a)break;s.tag===5&&u!==null&&(s=u,n?(c=ca(t,i),c!=null&&l.unshift(ha(t,c,s))):n||(c=ca(t,i),c!=null&&l.push(ha(t,c,s)))),t=t.return}l.length!==0&&e.push({event:r,listeners:l})}var Yp=/\r\n?/g,Xp=/\u0000|\uFFFD/g;function Xl(e){return(typeof e=="string"?e:""+e).replace(Yp,`
`).replace(Xp,"")}function $a(e,r,t){if(r=Xl(r),Xl(e)!==r&&t)throw Error(C(425))}function go(){}var Jn=null,Zn=null;function ei(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var ri=typeof setTimeout=="function"?setTimeout:void 0,Jp=typeof clearTimeout=="function"?clearTimeout:void 0,Jl=typeof Promise=="function"?Promise:void 0,Zp=typeof queueMicrotask=="function"?queueMicrotask:typeof Jl<"u"?function(e){return Jl.resolve(null).then(e).catch(em)}:ri;function em(e){setTimeout(function(){throw e})}function vn(e,r){var t=r,a=0;do{var n=t.nextSibling;if(e.removeChild(t),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(a===0){e.removeChild(n),pa(r);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=n}while(t);pa(r)}function Mr(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Zl(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(r===0)return e;r--}else t==="/$"&&r++}e=e.previousSibling}return null}var Tt=Math.random().toString(36).slice(2),nr="__reactFiber$"+Tt,xa="__reactProps$"+Tt,vr="__reactContainer$"+Tt,ti="__reactEvents$"+Tt,rm="__reactListeners$"+Tt,tm="__reactHandles$"+Tt;function Gr(e){var r=e[nr];if(r)return r;for(var t=e.parentNode;t;){if(r=t[vr]||t[nr]){if(t=r.alternate,r.child!==null||t!==null&&t.child!==null)for(e=Zl(e);e!==null;){if(t=e[nr])return t;e=Zl(e)}return r}e=t,t=e.parentNode}return null}function Ea(e){return e=e[nr]||e[vr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Bo(e){return e[xa]||null}var ai=[],mt=-1;function Or(e){return{current:e}}function Q(e){0>mt||(e.current=ai[mt],ai[mt]=null,mt--)}function W(e,r){mt++,ai[mt]=e.current,e.current=r}var Fr={},ve=Or(Fr),Ne=Or(!1),Jr=Fr;function Ct(e,r){var t=e.type.contextTypes;if(!t)return Fr;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var n={},i;for(i in t)n[i]=r[i];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=n),n}function Ee(e){return e=e.childContextTypes,e!=null}function ho(){Q(Ne),Q(ve)}function es(e,r,t){if(ve.current!==Fr)throw Error(C(168));W(ve,r),W(Ne,t)}function Yc(e,r,t){var a=e.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var n in a)if(!(n in r))throw Error(C(108,Ou(e)||"Unknown",n));return Z({},t,a)}function xo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fr,Jr=ve.current,W(ve,e),W(Ne,Ne.current),!0}function rs(e,r,t){var a=e.stateNode;if(!a)throw Error(C(169));t?(e=Yc(e,r,Jr),a.__reactInternalMemoizedMergedChildContext=e,Q(Ne),Q(ve),W(ve,e)):Q(Ne),W(Ne,t)}var pr=null,Oo=!1,bn=!1;function Xc(e){pr===null?pr=[e]:pr.push(e)}function am(e){Oo=!0,Xc(e)}function $r(){if(!bn&&pr!==null){bn=!0;var e=0,r=V;try{var t=pr;for(V=1;e<t.length;e++){var a=t[e];do a=a(!0);while(a!==null)}pr=null,Oo=!1}catch(n){throw pr!==null&&(pr=pr.slice(e+1)),jc(Li,$r),n}finally{V=r,bn=!1}}return null}var ft=[],gt=0,vo=null,bo=0,Oe=[],$e=0,Zr=null,fr=1,gr="";function Hr(e,r){ft[gt++]=bo,ft[gt++]=vo,vo=e,bo=r}function Jc(e,r,t){Oe[$e++]=fr,Oe[$e++]=gr,Oe[$e++]=Zr,Zr=e;var a=fr;e=gr;var n=32-Xe(a)-1;a&=~(1<<n),t+=1;var i=32-Xe(r)+n;if(30<i){var l=n-n%5;i=(a&(1<<l)-1).toString(32),a>>=l,n-=l,fr=1<<32-Xe(r)+n|t<<n|a,gr=i+e}else fr=1<<i|t<<n|a,gr=e}function Gi(e){e.return!==null&&(Hr(e,1),Jc(e,1,0))}function qi(e){for(;e===vo;)vo=ft[--gt],ft[gt]=null,bo=ft[--gt],ft[gt]=null;for(;e===Zr;)Zr=Oe[--$e],Oe[$e]=null,gr=Oe[--$e],Oe[$e]=null,fr=Oe[--$e],Oe[$e]=null}var Ae=null,Me=null,Y=!1,Ye=null;function Zc(e,r){var t=Ue(5,null,null,0);t.elementType="DELETED",t.stateNode=r,t.return=e,r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)}function ts(e,r){switch(e.tag){case 5:var t=e.type;return r=r.nodeType!==1||t.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,Ae=e,Me=Mr(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,Ae=e,Me=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(t=Zr!==null?{id:fr,overflow:gr}:null,e.memoizedState={dehydrated:r,treeContext:t,retryLane:1073741824},t=Ue(18,null,null,0),t.stateNode=r,t.return=e,e.child=t,Ae=e,Me=null,!0):!1;default:return!1}}function oi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ni(e){if(Y){var r=Me;if(r){var t=r;if(!ts(e,r)){if(oi(e))throw Error(C(418));r=Mr(t.nextSibling);var a=Ae;r&&ts(e,r)?Zc(a,t):(e.flags=e.flags&-4097|2,Y=!1,Ae=e)}}else{if(oi(e))throw Error(C(418));e.flags=e.flags&-4097|2,Y=!1,Ae=e}}}function as(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ae=e}function Ua(e){if(e!==Ae)return!1;if(!Y)return as(e),Y=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!ei(e.type,e.memoizedProps)),r&&(r=Me)){if(oi(e))throw ed(),Error(C(418));for(;r;)Zc(e,r),r=Mr(r.nextSibling)}if(as(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(r===0){Me=Mr(e.nextSibling);break e}r--}else t!=="$"&&t!=="$!"&&t!=="$?"||r++}e=e.nextSibling}Me=null}}else Me=Ae?Mr(e.stateNode.nextSibling):null;return!0}function ed(){for(var e=Me;e;)e=Mr(e.nextSibling)}function Nt(){Me=Ae=null,Y=!1}function Wi(e){Ye===null?Ye=[e]:Ye.push(e)}var om=wr.ReactCurrentBatchConfig;function Ut(e,r,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(C(309));var a=t.stateNode}if(!a)throw Error(C(147,e));var n=a,i=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===i?r.ref:(r=function(l){var s=n.refs;l===null?delete s[i]:s[i]=l},r._stringRef=i,r)}if(typeof e!="string")throw Error(C(284));if(!t._owner)throw Error(C(290,e))}return e}function Ha(e,r){throw e=Object.prototype.toString.call(r),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function os(e){var r=e._init;return r(e._payload)}function rd(e){function r(m,d){if(e){var p=m.deletions;p===null?(m.deletions=[d],m.flags|=16):p.push(d)}}function t(m,d){if(!e)return null;for(;d!==null;)r(m,d),d=d.sibling;return null}function a(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function n(m,d){return m=Lr(m,d),m.index=0,m.sibling=null,m}function i(m,d,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<d?(m.flags|=2,d):p):(m.flags|=2,d)):(m.flags|=1048576,d)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,d,p,b){return d===null||d.tag!==6?(d=Cn(p,m.mode,b),d.return=m,d):(d=n(d,p),d.return=m,d)}function c(m,d,p,b){var S=p.type;return S===st?g(m,d,p.props.children,b,p.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===kr&&os(S)===d.type)?(b=n(d,p.props),b.ref=Ut(m,d,p),b.return=m,b):(b=no(p.type,p.key,p.props,null,m.mode,b),b.ref=Ut(m,d,p),b.return=m,b)}function u(m,d,p,b){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Nn(p,m.mode,b),d.return=m,d):(d=n(d,p.children||[]),d.return=m,d)}function g(m,d,p,b,S){return d===null||d.tag!==7?(d=Yr(p,m.mode,b,S),d.return=m,d):(d=n(d,p),d.return=m,d)}function h(m,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Cn(""+d,m.mode,p),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ma:return p=no(d.type,d.key,d.props,null,m.mode,p),p.ref=Ut(m,null,d),p.return=m,p;case lt:return d=Nn(d,m.mode,p),d.return=m,d;case kr:var b=d._init;return h(m,b(d._payload),p)}if(Kt(d)||Dt(d))return d=Yr(d,m.mode,p,null),d.return=m,d;Ha(m,d)}return null}function v(m,d,p,b){var S=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:s(m,d,""+p,b);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ma:return p.key===S?c(m,d,p,b):null;case lt:return p.key===S?u(m,d,p,b):null;case kr:return S=p._init,v(m,d,S(p._payload),b)}if(Kt(p)||Dt(p))return S!==null?null:g(m,d,p,b,null);Ha(m,p)}return null}function x(m,d,p,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return m=m.get(p)||null,s(d,m,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ma:return m=m.get(b.key===null?p:b.key)||null,c(d,m,b,S);case lt:return m=m.get(b.key===null?p:b.key)||null,u(d,m,b,S);case kr:var T=b._init;return x(m,d,p,T(b._payload),S)}if(Kt(b)||Dt(b))return m=m.get(p)||null,g(d,m,b,S,null);Ha(d,b)}return null}function I(m,d,p,b){for(var S=null,T=null,j=d,R=d=0,P=null;j!==null&&R<p.length;R++){j.index>R?(P=j,j=null):P=j.sibling;var F=v(m,j,p[R],b);if(F===null){j===null&&(j=P);break}e&&j&&F.alternate===null&&r(m,j),d=i(F,d,R),T===null?S=F:T.sibling=F,T=F,j=P}if(R===p.length)return t(m,j),Y&&Hr(m,R),S;if(j===null){for(;R<p.length;R++)j=h(m,p[R],b),j!==null&&(d=i(j,d,R),T===null?S=j:T.sibling=j,T=j);return Y&&Hr(m,R),S}for(j=a(m,j);R<p.length;R++)P=x(j,m,R,p[R],b),P!==null&&(e&&P.alternate!==null&&j.delete(P.key===null?R:P.key),d=i(P,d,R),T===null?S=P:T.sibling=P,T=P);return e&&j.forEach(function(ae){return r(m,ae)}),Y&&Hr(m,R),S}function w(m,d,p,b){var S=Dt(p);if(typeof S!="function")throw Error(C(150));if(p=S.call(p),p==null)throw Error(C(151));for(var T=S=null,j=d,R=d=0,P=null,F=p.next();j!==null&&!F.done;R++,F=p.next()){j.index>R?(P=j,j=null):P=j.sibling;var ae=v(m,j,F.value,b);if(ae===null){j===null&&(j=P);break}e&&j&&ae.alternate===null&&r(m,j),d=i(ae,d,R),T===null?S=ae:T.sibling=ae,T=ae,j=P}if(F.done)return t(m,j),Y&&Hr(m,R),S;if(j===null){for(;!F.done;R++,F=p.next())F=h(m,F.value,b),F!==null&&(d=i(F,d,R),T===null?S=F:T.sibling=F,T=F);return Y&&Hr(m,R),S}for(j=a(m,j);!F.done;R++,F=p.next())F=x(j,m,R,F.value,b),F!==null&&(e&&F.alternate!==null&&j.delete(F.key===null?R:F.key),d=i(F,d,R),T===null?S=F:T.sibling=F,T=F);return e&&j.forEach(function(qe){return r(m,qe)}),Y&&Hr(m,R),S}function E(m,d,p,b){if(typeof p=="object"&&p!==null&&p.type===st&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ma:e:{for(var S=p.key,T=d;T!==null;){if(T.key===S){if(S=p.type,S===st){if(T.tag===7){t(m,T.sibling),d=n(T,p.props.children),d.return=m,m=d;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===kr&&os(S)===T.type){t(m,T.sibling),d=n(T,p.props),d.ref=Ut(m,T,p),d.return=m,m=d;break e}t(m,T);break}else r(m,T);T=T.sibling}p.type===st?(d=Yr(p.props.children,m.mode,b,p.key),d.return=m,m=d):(b=no(p.type,p.key,p.props,null,m.mode,b),b.ref=Ut(m,d,p),b.return=m,m=b)}return l(m);case lt:e:{for(T=p.key;d!==null;){if(d.key===T)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){t(m,d.sibling),d=n(d,p.children||[]),d.return=m,m=d;break e}else{t(m,d);break}else r(m,d);d=d.sibling}d=Nn(p,m.mode,b),d.return=m,m=d}return l(m);case kr:return T=p._init,E(m,d,T(p._payload),b)}if(Kt(p))return I(m,d,p,b);if(Dt(p))return w(m,d,p,b);Ha(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(t(m,d.sibling),d=n(d,p),d.return=m,m=d):(t(m,d),d=Cn(p,m.mode,b),d.return=m,m=d),l(m)):t(m,d)}return E}var Et=rd(!0),td=rd(!1),yo=Or(null),wo=null,ht=null,Ki=null;function Qi(){Ki=ht=wo=null}function Yi(e){var r=yo.current;Q(yo),e._currentValue=r}function ii(e,r,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),e===t)break;e=e.return}}function kt(e,r){wo=e,Ki=ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(Ce=!0),e.firstContext=null)}function Ve(e){var r=e._currentValue;if(Ki!==e)if(e={context:e,memoizedValue:r,next:null},ht===null){if(wo===null)throw Error(C(308));ht=e,wo.dependencies={lanes:0,firstContext:e}}else ht=ht.next=e;return r}var qr=null;function Xi(e){qr===null?qr=[e]:qr.push(e)}function ad(e,r,t,a){var n=r.interleaved;return n===null?(t.next=t,Xi(r)):(t.next=n.next,n.next=t),r.interleaved=t,br(e,a)}function br(e,r){e.lanes|=r;var t=e.alternate;for(t!==null&&(t.lanes|=r),t=e,e=e.return;e!==null;)e.childLanes|=r,t=e.alternate,t!==null&&(t.childLanes|=r),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Ir=!1;function Ji(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function od(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function hr(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function Ar(e,r,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,H&2){var n=a.pending;return n===null?r.next=r:(r.next=n.next,n.next=r),a.pending=r,br(e,t)}return n=a.interleaved,n===null?(r.next=r,Xi(a)):(r.next=n.next,n.next=r),a.interleaved=r,br(e,t)}function Za(e,r,t){if(r=r.updateQueue,r!==null&&(r=r.shared,(t&4194240)!==0)){var a=r.lanes;a&=e.pendingLanes,t|=a,r.lanes=t,Di(e,t)}}function ns(e,r){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var n=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?n=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?n=i=r:i=i.next=r}else n=i=r;t={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,effects:a.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=r:e.next=r,t.lastBaseUpdate=r}function jo(e,r,t,a){var n=e.updateQueue;Ir=!1;var i=n.firstBaseUpdate,l=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var c=s,u=c.next;c.next=null,l===null?i=u:l.next=u,l=c;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==l&&(s===null?g.firstBaseUpdate=u:s.next=u,g.lastBaseUpdate=c))}if(i!==null){var h=n.baseState;l=0,g=u=c=null,s=i;do{var v=s.lane,x=s.eventTime;if((a&v)===v){g!==null&&(g=g.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var I=e,w=s;switch(v=r,x=t,w.tag){case 1:if(I=w.payload,typeof I=="function"){h=I.call(x,h,v);break e}h=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=w.payload,v=typeof I=="function"?I.call(x,h,v):I,v==null)break e;h=Z({},h,v);break e;case 2:Ir=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,v=n.effects,v===null?n.effects=[s]:v.push(s))}else x={eventTime:x,lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(u=g=x,c=h):g=g.next=x,l|=v;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;v=s,s=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);if(g===null&&(c=h),n.baseState=c,n.firstBaseUpdate=u,n.lastBaseUpdate=g,r=n.shared.interleaved,r!==null){n=r;do l|=n.lane,n=n.next;while(n!==r)}else i===null&&(n.shared.lanes=0);rt|=l,e.lanes=l,e.memoizedState=h}}function is(e,r,t){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var a=e[r],n=a.callback;if(n!==null){if(a.callback=null,a=t,typeof n!="function")throw Error(C(191,n));n.call(a)}}}var za={},lr=Or(za),va=Or(za),ba=Or(za);function Wr(e){if(e===za)throw Error(C(174));return e}function Zi(e,r){switch(W(ba,r),W(va,e),W(lr,za),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:On(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=On(r,e)}Q(lr),W(lr,r)}function zt(){Q(lr),Q(va),Q(ba)}function nd(e){Wr(ba.current);var r=Wr(lr.current),t=On(r,e.type);r!==t&&(W(va,e),W(lr,t))}function el(e){va.current===e&&(Q(lr),Q(va))}var X=Or(0);function ko(e){for(var r=e;r!==null;){if(r.tag===13){var t=r.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var yn=[];function rl(){for(var e=0;e<yn.length;e++)yn[e]._workInProgressVersionPrimary=null;yn.length=0}var eo=wr.ReactCurrentDispatcher,wn=wr.ReactCurrentBatchConfig,et=0,J=null,ne=null,le=null,Io=!1,aa=!1,ya=0,nm=0;function ge(){throw Error(C(321))}function tl(e,r){if(r===null)return!1;for(var t=0;t<r.length&&t<e.length;t++)if(!er(e[t],r[t]))return!1;return!0}function al(e,r,t,a,n,i){if(et=i,J=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,eo.current=e===null||e.memoizedState===null?cm:dm,e=t(a,n),aa){i=0;do{if(aa=!1,ya=0,25<=i)throw Error(C(301));i+=1,le=ne=null,r.updateQueue=null,eo.current=um,e=t(a,n)}while(aa)}if(eo.current=So,r=ne!==null&&ne.next!==null,et=0,le=ne=J=null,Io=!1,r)throw Error(C(300));return e}function ol(){var e=ya!==0;return ya=0,e}function ar(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?J.memoizedState=le=e:le=le.next=e,le}function Ge(){if(ne===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var r=le===null?J.memoizedState:le.next;if(r!==null)le=r,ne=e;else{if(e===null)throw Error(C(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},le===null?J.memoizedState=le=e:le=le.next=e}return le}function wa(e,r){return typeof r=="function"?r(e):r}function jn(e){var r=Ge(),t=r.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var a=ne,n=a.baseQueue,i=t.pending;if(i!==null){if(n!==null){var l=n.next;n.next=i.next,i.next=l}a.baseQueue=n=i,t.pending=null}if(n!==null){i=n.next,a=a.baseState;var s=l=null,c=null,u=i;do{var g=u.lane;if((et&g)===g)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),a=u.hasEagerState?u.eagerState:e(a,u.action);else{var h={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=h,l=a):c=c.next=h,J.lanes|=g,rt|=g}u=u.next}while(u!==null&&u!==i);c===null?l=a:c.next=s,er(a,r.memoizedState)||(Ce=!0),r.memoizedState=a,r.baseState=l,r.baseQueue=c,t.lastRenderedState=a}if(e=t.interleaved,e!==null){n=e;do i=n.lane,J.lanes|=i,rt|=i,n=n.next;while(n!==e)}else n===null&&(t.lanes=0);return[r.memoizedState,t.dispatch]}function kn(e){var r=Ge(),t=r.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var a=t.dispatch,n=t.pending,i=r.memoizedState;if(n!==null){t.pending=null;var l=n=n.next;do i=e(i,l.action),l=l.next;while(l!==n);er(i,r.memoizedState)||(Ce=!0),r.memoizedState=i,r.baseQueue===null&&(r.baseState=i),t.lastRenderedState=i}return[i,a]}function id(){}function ld(e,r){var t=J,a=Ge(),n=r(),i=!er(a.memoizedState,n);if(i&&(a.memoizedState=n,Ce=!0),a=a.queue,nl(dd.bind(null,t,a,e),[e]),a.getSnapshot!==r||i||le!==null&&le.memoizedState.tag&1){if(t.flags|=2048,ja(9,cd.bind(null,t,a,n,r),void 0,null),ce===null)throw Error(C(349));et&30||sd(t,r,n)}return n}function sd(e,r,t){e.flags|=16384,e={getSnapshot:r,value:t},r=J.updateQueue,r===null?(r={lastEffect:null,stores:null},J.updateQueue=r,r.stores=[e]):(t=r.stores,t===null?r.stores=[e]:t.push(e))}function cd(e,r,t,a){r.value=t,r.getSnapshot=a,ud(r)&&pd(e)}function dd(e,r,t){return t(function(){ud(r)&&pd(e)})}function ud(e){var r=e.getSnapshot;e=e.value;try{var t=r();return!er(e,t)}catch{return!0}}function pd(e){var r=br(e,1);r!==null&&Je(r,e,1,-1)}function ls(e){var r=ar();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:e},r.queue=e,e=e.dispatch=sm.bind(null,J,e),[r.memoizedState,e]}function ja(e,r,t,a){return e={tag:e,create:r,destroy:t,deps:a,next:null},r=J.updateQueue,r===null?(r={lastEffect:null,stores:null},J.updateQueue=r,r.lastEffect=e.next=e):(t=r.lastEffect,t===null?r.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,r.lastEffect=e)),e}function md(){return Ge().memoizedState}function ro(e,r,t,a){var n=ar();J.flags|=e,n.memoizedState=ja(1|r,t,void 0,a===void 0?null:a)}function $o(e,r,t,a){var n=Ge();a=a===void 0?null:a;var i=void 0;if(ne!==null){var l=ne.memoizedState;if(i=l.destroy,a!==null&&tl(a,l.deps)){n.memoizedState=ja(r,t,i,a);return}}J.flags|=e,n.memoizedState=ja(1|r,t,i,a)}function ss(e,r){return ro(8390656,8,e,r)}function nl(e,r){return $o(2048,8,e,r)}function fd(e,r){return $o(4,2,e,r)}function gd(e,r){return $o(4,4,e,r)}function hd(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function xd(e,r,t){return t=t!=null?t.concat([e]):null,$o(4,4,hd.bind(null,r,e),t)}function il(){}function vd(e,r){var t=Ge();r=r===void 0?null:r;var a=t.memoizedState;return a!==null&&r!==null&&tl(r,a[1])?a[0]:(t.memoizedState=[e,r],e)}function bd(e,r){var t=Ge();r=r===void 0?null:r;var a=t.memoizedState;return a!==null&&r!==null&&tl(r,a[1])?a[0]:(e=e(),t.memoizedState=[e,r],e)}function yd(e,r,t){return et&21?(er(t,r)||(t=Sc(),J.lanes|=t,rt|=t,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=t)}function im(e,r){var t=V;V=t!==0&&4>t?t:4,e(!0);var a=wn.transition;wn.transition={};try{e(!1),r()}finally{V=t,wn.transition=a}}function wd(){return Ge().memoizedState}function lm(e,r,t){var a=Rr(e);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},jd(e))kd(r,t);else if(t=ad(e,r,t,a),t!==null){var n=ye();Je(t,e,a,n),Id(t,r,a)}}function sm(e,r,t){var a=Rr(e),n={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(jd(e))kd(r,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=r.lastRenderedReducer,i!==null))try{var l=r.lastRenderedState,s=i(l,t);if(n.hasEagerState=!0,n.eagerState=s,er(s,l)){var c=r.interleaved;c===null?(n.next=n,Xi(r)):(n.next=c.next,c.next=n),r.interleaved=n;return}}catch{}finally{}t=ad(e,r,n,a),t!==null&&(n=ye(),Je(t,e,a,n),Id(t,r,a))}}function jd(e){var r=e.alternate;return e===J||r!==null&&r===J}function kd(e,r){aa=Io=!0;var t=e.pending;t===null?r.next=r:(r.next=t.next,t.next=r),e.pending=r}function Id(e,r,t){if(t&4194240){var a=r.lanes;a&=e.pendingLanes,t|=a,r.lanes=t,Di(e,t)}}var So={readContext:Ve,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},cm={readContext:Ve,useCallback:function(e,r){return ar().memoizedState=[e,r===void 0?null:r],e},useContext:Ve,useEffect:ss,useImperativeHandle:function(e,r,t){return t=t!=null?t.concat([e]):null,ro(4194308,4,hd.bind(null,r,e),t)},useLayoutEffect:function(e,r){return ro(4194308,4,e,r)},useInsertionEffect:function(e,r){return ro(4,2,e,r)},useMemo:function(e,r){var t=ar();return r=r===void 0?null:r,e=e(),t.memoizedState=[e,r],e},useReducer:function(e,r,t){var a=ar();return r=t!==void 0?t(r):r,a.memoizedState=a.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=lm.bind(null,J,e),[a.memoizedState,e]},useRef:function(e){var r=ar();return e={current:e},r.memoizedState=e},useState:ls,useDebugValue:il,useDeferredValue:function(e){return ar().memoizedState=e},useTransition:function(){var e=ls(!1),r=e[0];return e=im.bind(null,e[1]),ar().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,t){var a=J,n=ar();if(Y){if(t===void 0)throw Error(C(407));t=t()}else{if(t=r(),ce===null)throw Error(C(349));et&30||sd(a,r,t)}n.memoizedState=t;var i={value:t,getSnapshot:r};return n.queue=i,ss(dd.bind(null,a,i,e),[e]),a.flags|=2048,ja(9,cd.bind(null,a,i,t,r),void 0,null),t},useId:function(){var e=ar(),r=ce.identifierPrefix;if(Y){var t=gr,a=fr;t=(a&~(1<<32-Xe(a)-1)).toString(32)+t,r=":"+r+"R"+t,t=ya++,0<t&&(r+="H"+t.toString(32)),r+=":"}else t=nm++,r=":"+r+"r"+t.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},dm={readContext:Ve,useCallback:vd,useContext:Ve,useEffect:nl,useImperativeHandle:xd,useInsertionEffect:fd,useLayoutEffect:gd,useMemo:bd,useReducer:jn,useRef:md,useState:function(){return jn(wa)},useDebugValue:il,useDeferredValue:function(e){var r=Ge();return yd(r,ne.memoizedState,e)},useTransition:function(){var e=jn(wa)[0],r=Ge().memoizedState;return[e,r]},useMutableSource:id,useSyncExternalStore:ld,useId:wd,unstable_isNewReconciler:!1},um={readContext:Ve,useCallback:vd,useContext:Ve,useEffect:nl,useImperativeHandle:xd,useInsertionEffect:fd,useLayoutEffect:gd,useMemo:bd,useReducer:kn,useRef:md,useState:function(){return kn(wa)},useDebugValue:il,useDeferredValue:function(e){var r=Ge();return ne===null?r.memoizedState=e:yd(r,ne.memoizedState,e)},useTransition:function(){var e=kn(wa)[0],r=Ge().memoizedState;return[e,r]},useMutableSource:id,useSyncExternalStore:ld,useId:wd,unstable_isNewReconciler:!1};function Ke(e,r){if(e&&e.defaultProps){r=Z({},r),e=e.defaultProps;for(var t in e)r[t]===void 0&&(r[t]=e[t]);return r}return r}function li(e,r,t,a){r=e.memoizedState,t=t(a,r),t=t==null?r:Z({},r,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Uo={isMounted:function(e){return(e=e._reactInternals)?ot(e)===e:!1},enqueueSetState:function(e,r,t){e=e._reactInternals;var a=ye(),n=Rr(e),i=hr(a,n);i.payload=r,t!=null&&(i.callback=t),r=Ar(e,i,n),r!==null&&(Je(r,e,n,a),Za(r,e,n))},enqueueReplaceState:function(e,r,t){e=e._reactInternals;var a=ye(),n=Rr(e),i=hr(a,n);i.tag=1,i.payload=r,t!=null&&(i.callback=t),r=Ar(e,i,n),r!==null&&(Je(r,e,n,a),Za(r,e,n))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var t=ye(),a=Rr(e),n=hr(t,a);n.tag=2,r!=null&&(n.callback=r),r=Ar(e,n,a),r!==null&&(Je(r,e,a,t),Za(r,e,a))}};function cs(e,r,t,a,n,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,l):r.prototype&&r.prototype.isPureReactComponent?!fa(t,a)||!fa(n,i):!0}function Sd(e,r,t){var a=!1,n=Fr,i=r.contextType;return typeof i=="object"&&i!==null?i=Ve(i):(n=Ee(r)?Jr:ve.current,a=r.contextTypes,i=(a=a!=null)?Ct(e,n):Fr),r=new r(t,i),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Uo,e.stateNode=r,r._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),r}function ds(e,r,t,a){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(t,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(t,a),r.state!==e&&Uo.enqueueReplaceState(r,r.state,null)}function si(e,r,t,a){var n=e.stateNode;n.props=t,n.state=e.memoizedState,n.refs={},Ji(e);var i=r.contextType;typeof i=="object"&&i!==null?n.context=Ve(i):(i=Ee(r)?Jr:ve.current,n.context=Ct(e,i)),n.state=e.memoizedState,i=r.getDerivedStateFromProps,typeof i=="function"&&(li(e,r,i,t),n.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(r=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),r!==n.state&&Uo.enqueueReplaceState(n,n.state,null),jo(e,t,n,a),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308)}function _t(e,r){try{var t="",a=r;do t+=Bu(a),a=a.return;while(a);var n=t}catch(i){n=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:r,stack:n,digest:null}}function In(e,r,t){return{value:e,source:null,stack:t??null,digest:r??null}}function ci(e,r){try{console.error(r.value)}catch(t){setTimeout(function(){throw t})}}var pm=typeof WeakMap=="function"?WeakMap:Map;function Cd(e,r,t){t=hr(-1,t),t.tag=3,t.payload={element:null};var a=r.value;return t.callback=function(){No||(No=!0,bi=a),ci(e,r)},t}function Nd(e,r,t){t=hr(-1,t),t.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var n=r.value;t.payload=function(){return a(n)},t.callback=function(){ci(e,r)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){ci(e,r),typeof a!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var l=r.stack;this.componentDidCatch(r.value,{componentStack:l!==null?l:""})}),t}function us(e,r,t){var a=e.pingCache;if(a===null){a=e.pingCache=new pm;var n=new Set;a.set(r,n)}else n=a.get(r),n===void 0&&(n=new Set,a.set(r,n));n.has(t)||(n.add(t),e=Cm.bind(null,e,r,t),r.then(e,e))}function ps(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function ms(e,r,t,a,n){return e.mode&1?(e.flags|=65536,e.lanes=n,e):(e===r?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(r=hr(-1,1),r.tag=2,Ar(t,r,1))),t.lanes|=1),e)}var mm=wr.ReactCurrentOwner,Ce=!1;function be(e,r,t,a){r.child=e===null?td(r,null,t,a):Et(r,e.child,t,a)}function fs(e,r,t,a,n){t=t.render;var i=r.ref;return kt(r,n),a=al(e,r,t,a,i,n),t=ol(),e!==null&&!Ce?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~n,yr(e,r,n)):(Y&&t&&Gi(r),r.flags|=1,be(e,r,a,n),r.child)}function gs(e,r,t,a,n){if(e===null){var i=t.type;return typeof i=="function"&&!fl(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(r.tag=15,r.type=i,Ed(e,r,i,a,n)):(e=no(t.type,null,a,r,r.mode,n),e.ref=r.ref,e.return=r,r.child=e)}if(i=e.child,!(e.lanes&n)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:fa,t(l,a)&&e.ref===r.ref)return yr(e,r,n)}return r.flags|=1,e=Lr(i,a),e.ref=r.ref,e.return=r,r.child=e}function Ed(e,r,t,a,n){if(e!==null){var i=e.memoizedProps;if(fa(i,a)&&e.ref===r.ref)if(Ce=!1,r.pendingProps=a=i,(e.lanes&n)!==0)e.flags&131072&&(Ce=!0);else return r.lanes=e.lanes,yr(e,r,n)}return di(e,r,t,a,n)}function zd(e,r,t){var a=r.pendingProps,n=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(vt,Pe),Pe|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,W(vt,Pe),Pe|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=i!==null?i.baseLanes:t,W(vt,Pe),Pe|=a}else i!==null?(a=i.baseLanes|t,r.memoizedState=null):a=t,W(vt,Pe),Pe|=a;return be(e,r,n,t),r.child}function _d(e,r){var t=r.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(r.flags|=512,r.flags|=2097152)}function di(e,r,t,a,n){var i=Ee(t)?Jr:ve.current;return i=Ct(r,i),kt(r,n),t=al(e,r,t,a,i,n),a=ol(),e!==null&&!Ce?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~n,yr(e,r,n)):(Y&&a&&Gi(r),r.flags|=1,be(e,r,t,n),r.child)}function hs(e,r,t,a,n){if(Ee(t)){var i=!0;xo(r)}else i=!1;if(kt(r,n),r.stateNode===null)to(e,r),Sd(r,t,a),si(r,t,a,n),a=!0;else if(e===null){var l=r.stateNode,s=r.memoizedProps;l.props=s;var c=l.context,u=t.contextType;typeof u=="object"&&u!==null?u=Ve(u):(u=Ee(t)?Jr:ve.current,u=Ct(r,u));var g=t.getDerivedStateFromProps,h=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==a||c!==u)&&ds(r,l,a,u),Ir=!1;var v=r.memoizedState;l.state=v,jo(r,a,l,n),c=r.memoizedState,s!==a||v!==c||Ne.current||Ir?(typeof g=="function"&&(li(r,t,g,a),c=r.memoizedState),(s=Ir||cs(r,t,s,a,v,c,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(r.flags|=4194308)):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=c),l.props=a,l.state=c,l.context=u,a=s):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{l=r.stateNode,od(e,r),s=r.memoizedProps,u=r.type===r.elementType?s:Ke(r.type,s),l.props=u,h=r.pendingProps,v=l.context,c=t.contextType,typeof c=="object"&&c!==null?c=Ve(c):(c=Ee(t)?Jr:ve.current,c=Ct(r,c));var x=t.getDerivedStateFromProps;(g=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||v!==c)&&ds(r,l,a,c),Ir=!1,v=r.memoizedState,l.state=v,jo(r,a,l,n);var I=r.memoizedState;s!==h||v!==I||Ne.current||Ir?(typeof x=="function"&&(li(r,t,x,a),I=r.memoizedState),(u=Ir||cs(r,t,u,a,v,I,c)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,I,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,I,c)),typeof l.componentDidUpdate=="function"&&(r.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=I),l.props=a,l.state=I,l.context=c,a=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(r.flags|=1024),a=!1)}return ui(e,r,t,a,i,n)}function ui(e,r,t,a,n,i){_d(e,r);var l=(r.flags&128)!==0;if(!a&&!l)return n&&rs(r,t,!1),yr(e,r,i);a=r.stateNode,mm.current=r;var s=l&&typeof t.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,e!==null&&l?(r.child=Et(r,e.child,null,i),r.child=Et(r,null,s,i)):be(e,r,s,i),r.memoizedState=a.state,n&&rs(r,t,!0),r.child}function Pd(e){var r=e.stateNode;r.pendingContext?es(e,r.pendingContext,r.pendingContext!==r.context):r.context&&es(e,r.context,!1),Zi(e,r.containerInfo)}function xs(e,r,t,a,n){return Nt(),Wi(n),r.flags|=256,be(e,r,t,a),r.child}var pi={dehydrated:null,treeContext:null,retryLane:0};function mi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Md(e,r,t){var a=r.pendingProps,n=X.current,i=!1,l=(r.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(n&2)!==0),s?(i=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(n|=1),W(X,n&1),e===null)return ni(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(l=a.children,e=a.fallback,i?(a=r.mode,i=r.child,l={mode:"hidden",children:l},!(a&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Go(l,a,0,null),e=Yr(e,a,t,null),i.return=r,e.return=r,i.sibling=e,r.child=i,r.child.memoizedState=mi(t),r.memoizedState=pi,e):ll(r,l));if(n=e.memoizedState,n!==null&&(s=n.dehydrated,s!==null))return fm(e,r,l,a,s,n,t);if(i){i=a.fallback,l=r.mode,n=e.child,s=n.sibling;var c={mode:"hidden",children:a.children};return!(l&1)&&r.child!==n?(a=r.child,a.childLanes=0,a.pendingProps=c,r.deletions=null):(a=Lr(n,c),a.subtreeFlags=n.subtreeFlags&14680064),s!==null?i=Lr(s,i):(i=Yr(i,l,t,null),i.flags|=2),i.return=r,a.return=r,a.sibling=i,r.child=a,a=i,i=r.child,l=e.child.memoizedState,l=l===null?mi(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~t,r.memoizedState=pi,a}return i=e.child,e=i.sibling,a=Lr(i,{mode:"visible",children:a.children}),!(r.mode&1)&&(a.lanes=t),a.return=r,a.sibling=null,e!==null&&(t=r.deletions,t===null?(r.deletions=[e],r.flags|=16):t.push(e)),r.child=a,r.memoizedState=null,a}function ll(e,r){return r=Go({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Va(e,r,t,a){return a!==null&&Wi(a),Et(r,e.child,null,t),e=ll(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function fm(e,r,t,a,n,i,l){if(t)return r.flags&256?(r.flags&=-257,a=In(Error(C(422))),Va(e,r,l,a)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(i=a.fallback,n=r.mode,a=Go({mode:"visible",children:a.children},n,0,null),i=Yr(i,n,l,null),i.flags|=2,a.return=r,i.return=r,a.sibling=i,r.child=a,r.mode&1&&Et(r,e.child,null,l),r.child.memoizedState=mi(l),r.memoizedState=pi,i);if(!(r.mode&1))return Va(e,r,l,null);if(n.data==="$!"){if(a=n.nextSibling&&n.nextSibling.dataset,a)var s=a.dgst;return a=s,i=Error(C(419)),a=In(i,a,void 0),Va(e,r,l,a)}if(s=(l&e.childLanes)!==0,Ce||s){if(a=ce,a!==null){switch(l&-l){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(a.suspendedLanes|l)?0:n,n!==0&&n!==i.retryLane&&(i.retryLane=n,br(e,n),Je(a,e,n,-1))}return ml(),a=In(Error(C(421))),Va(e,r,l,a)}return n.data==="$?"?(r.flags|=128,r.child=e.child,r=Nm.bind(null,e),n._reactRetry=r,null):(e=i.treeContext,Me=Mr(n.nextSibling),Ae=r,Y=!0,Ye=null,e!==null&&(Oe[$e++]=fr,Oe[$e++]=gr,Oe[$e++]=Zr,fr=e.id,gr=e.overflow,Zr=r),r=ll(r,a.children),r.flags|=4096,r)}function vs(e,r,t){e.lanes|=r;var a=e.alternate;a!==null&&(a.lanes|=r),ii(e.return,r,t)}function Sn(e,r,t,a,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:n}:(i.isBackwards=r,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=t,i.tailMode=n)}function Ad(e,r,t){var a=r.pendingProps,n=a.revealOrder,i=a.tail;if(be(e,r,a.children,t),a=X.current,a&2)a=a&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vs(e,t,r);else if(e.tag===19)vs(e,t,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(W(X,a),!(r.mode&1))r.memoizedState=null;else switch(n){case"forwards":for(t=r.child,n=null;t!==null;)e=t.alternate,e!==null&&ko(e)===null&&(n=t),t=t.sibling;t=n,t===null?(n=r.child,r.child=null):(n=t.sibling,t.sibling=null),Sn(r,!1,n,t,i);break;case"backwards":for(t=null,n=r.child,r.child=null;n!==null;){if(e=n.alternate,e!==null&&ko(e)===null){r.child=n;break}e=n.sibling,n.sibling=t,t=n,n=e}Sn(r,!0,t,null,i);break;case"together":Sn(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function to(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function yr(e,r,t){if(e!==null&&(r.dependencies=e.dependencies),rt|=r.lanes,!(t&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(C(153));if(r.child!==null){for(e=r.child,t=Lr(e,e.pendingProps),r.child=t,t.return=r;e.sibling!==null;)e=e.sibling,t=t.sibling=Lr(e,e.pendingProps),t.return=r;t.sibling=null}return r.child}function gm(e,r,t){switch(r.tag){case 3:Pd(r),Nt();break;case 5:nd(r);break;case 1:Ee(r.type)&&xo(r);break;case 4:Zi(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,n=r.memoizedProps.value;W(yo,a._currentValue),a._currentValue=n;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(W(X,X.current&1),r.flags|=128,null):t&r.child.childLanes?Md(e,r,t):(W(X,X.current&1),e=yr(e,r,t),e!==null?e.sibling:null);W(X,X.current&1);break;case 19:if(a=(t&r.childLanes)!==0,e.flags&128){if(a)return Ad(e,r,t);r.flags|=128}if(n=r.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),W(X,X.current),a)break;return null;case 22:case 23:return r.lanes=0,zd(e,r,t)}return yr(e,r,t)}var Td,fi,Rd,Ld;Td=function(e,r){for(var t=r.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break;for(;t.sibling===null;){if(t.return===null||t.return===r)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};fi=function(){};Rd=function(e,r,t,a){var n=e.memoizedProps;if(n!==a){e=r.stateNode,Wr(lr.current);var i=null;switch(t){case"input":n=Ln(e,n),a=Ln(e,a),i=[];break;case"select":n=Z({},n,{value:void 0}),a=Z({},a,{value:void 0}),i=[];break;case"textarea":n=Bn(e,n),a=Bn(e,a),i=[];break;default:typeof n.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=go)}$n(t,a);var l;t=null;for(u in n)if(!a.hasOwnProperty(u)&&n.hasOwnProperty(u)&&n[u]!=null)if(u==="style"){var s=n[u];for(l in s)s.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(la.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in a){var c=a[u];if(s=n!=null?n[u]:void 0,a.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in c)c.hasOwnProperty(l)&&s[l]!==c[l]&&(t||(t={}),t[l]=c[l])}else t||(i||(i=[]),i.push(u,t)),t=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(la.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&K("scroll",e),i||s===c||(i=[])):(i=i||[]).push(u,c))}t&&(i=i||[]).push("style",t);var u=i;(r.updateQueue=u)&&(r.flags|=4)}};Ld=function(e,r,t,a){t!==a&&(r.flags|=4)};function Ht(e,r){if(!Y)switch(e.tailMode){case"hidden":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function he(e){var r=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(r)for(var n=e.child;n!==null;)t|=n.lanes|n.childLanes,a|=n.subtreeFlags&14680064,a|=n.flags&14680064,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)t|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=t,r}function hm(e,r,t){var a=r.pendingProps;switch(qi(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(r),null;case 1:return Ee(r.type)&&ho(),he(r),null;case 3:return a=r.stateNode,zt(),Q(Ne),Q(ve),rl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ua(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Ye!==null&&(ji(Ye),Ye=null))),fi(e,r),he(r),null;case 5:el(r);var n=Wr(ba.current);if(t=r.type,e!==null&&r.stateNode!=null)Rd(e,r,t,a,n),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(C(166));return he(r),null}if(e=Wr(lr.current),Ua(r)){a=r.stateNode,t=r.type;var i=r.memoizedProps;switch(a[nr]=r,a[xa]=i,e=(r.mode&1)!==0,t){case"dialog":K("cancel",a),K("close",a);break;case"iframe":case"object":case"embed":K("load",a);break;case"video":case"audio":for(n=0;n<Yt.length;n++)K(Yt[n],a);break;case"source":K("error",a);break;case"img":case"image":case"link":K("error",a),K("load",a);break;case"details":K("toggle",a);break;case"input":Nl(a,i),K("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!i.multiple},K("invalid",a);break;case"textarea":zl(a,i),K("invalid",a)}$n(t,i),n=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?a.textContent!==s&&(i.suppressHydrationWarning!==!0&&$a(a.textContent,s,e),n=["children",s]):typeof s=="number"&&a.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&$a(a.textContent,s,e),n=["children",""+s]):la.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&K("scroll",a)}switch(t){case"input":Aa(a),El(a,i,!0);break;case"textarea":Aa(a),_l(a);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(a.onclick=go)}a=n,r.updateQueue=a,a!==null&&(r.flags|=4)}else{l=n.nodeType===9?n:n.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=l.createElement(t,{is:a.is}):(e=l.createElement(t),t==="select"&&(l=e,a.multiple?l.multiple=!0:a.size&&(l.size=a.size))):e=l.createElementNS(e,t),e[nr]=r,e[xa]=a,Td(e,r,!1,!1),r.stateNode=e;e:{switch(l=Un(t,a),t){case"dialog":K("cancel",e),K("close",e),n=a;break;case"iframe":case"object":case"embed":K("load",e),n=a;break;case"video":case"audio":for(n=0;n<Yt.length;n++)K(Yt[n],e);n=a;break;case"source":K("error",e),n=a;break;case"img":case"image":case"link":K("error",e),K("load",e),n=a;break;case"details":K("toggle",e),n=a;break;case"input":Nl(e,a),n=Ln(e,a),K("invalid",e);break;case"option":n=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},n=Z({},a,{value:void 0}),K("invalid",e);break;case"textarea":zl(e,a),n=Bn(e,a),K("invalid",e);break;default:n=a}$n(t,n),s=n;for(i in s)if(s.hasOwnProperty(i)){var c=s[i];i==="style"?mc(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&uc(e,c)):i==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&sa(e,c):typeof c=="number"&&sa(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(la.hasOwnProperty(i)?c!=null&&i==="onScroll"&&K("scroll",e):c!=null&&Pi(e,i,c,l))}switch(t){case"input":Aa(e),El(e,a,!1);break;case"textarea":Aa(e),_l(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Dr(a.value));break;case"select":e.multiple=!!a.multiple,i=a.value,i!=null?bt(e,!!a.multiple,i,!1):a.defaultValue!=null&&bt(e,!!a.multiple,a.defaultValue,!0);break;default:typeof n.onClick=="function"&&(e.onclick=go)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return he(r),null;case 6:if(e&&r.stateNode!=null)Ld(e,r,e.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(C(166));if(t=Wr(ba.current),Wr(lr.current),Ua(r)){if(a=r.stateNode,t=r.memoizedProps,a[nr]=r,(i=a.nodeValue!==t)&&(e=Ae,e!==null))switch(e.tag){case 3:$a(a.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$a(a.nodeValue,t,(e.mode&1)!==0)}i&&(r.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[nr]=r,r.stateNode=a}return he(r),null;case 13:if(Q(X),a=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Me!==null&&r.mode&1&&!(r.flags&128))ed(),Nt(),r.flags|=98560,i=!1;else if(i=Ua(r),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=r.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[nr]=r}else Nt(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;he(r),i=!1}else Ye!==null&&(ji(Ye),Ye=null),i=!0;if(!i)return r.flags&65536?r:null}return r.flags&128?(r.lanes=t,r):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(r.child.flags|=8192,r.mode&1&&(e===null||X.current&1?ie===0&&(ie=3):ml())),r.updateQueue!==null&&(r.flags|=4),he(r),null);case 4:return zt(),fi(e,r),e===null&&ga(r.stateNode.containerInfo),he(r),null;case 10:return Yi(r.type._context),he(r),null;case 17:return Ee(r.type)&&ho(),he(r),null;case 19:if(Q(X),i=r.memoizedState,i===null)return he(r),null;if(a=(r.flags&128)!==0,l=i.rendering,l===null)if(a)Ht(i,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(l=ko(e),l!==null){for(r.flags|=128,Ht(i,!1),a=l.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=t,t=r.child;t!==null;)i=t,e=a,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return W(X,X.current&1|2),r.child}e=e.sibling}i.tail!==null&&re()>Pt&&(r.flags|=128,a=!0,Ht(i,!1),r.lanes=4194304)}else{if(!a)if(e=ko(l),e!==null){if(r.flags|=128,a=!0,t=e.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),Ht(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Y)return he(r),null}else 2*re()-i.renderingStartTime>Pt&&t!==1073741824&&(r.flags|=128,a=!0,Ht(i,!1),r.lanes=4194304);i.isBackwards?(l.sibling=r.child,r.child=l):(t=i.last,t!==null?t.sibling=l:r.child=l,i.last=l)}return i.tail!==null?(r=i.tail,i.rendering=r,i.tail=r.sibling,i.renderingStartTime=re(),r.sibling=null,t=X.current,W(X,a?t&1|2:t&1),r):(he(r),null);case 22:case 23:return pl(),a=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(r.flags|=8192),a&&r.mode&1?Pe&1073741824&&(he(r),r.subtreeFlags&6&&(r.flags|=8192)):he(r),null;case 24:return null;case 25:return null}throw Error(C(156,r.tag))}function xm(e,r){switch(qi(r),r.tag){case 1:return Ee(r.type)&&ho(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return zt(),Q(Ne),Q(ve),rl(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return el(r),null;case 13:if(Q(X),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(C(340));Nt()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Q(X),null;case 4:return zt(),null;case 10:return Yi(r.type._context),null;case 22:case 23:return pl(),null;case 24:return null;default:return null}}var Ga=!1,xe=!1,vm=typeof WeakSet=="function"?WeakSet:Set,M=null;function xt(e,r){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){ee(e,r,a)}else t.current=null}function gi(e,r,t){try{t()}catch(a){ee(e,r,a)}}var bs=!1;function bm(e,r){if(Jn=po,e=$c(),Vi(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,s=-1,c=-1,u=0,g=0,h=e,v=null;r:for(;;){for(var x;h!==t||n!==0&&h.nodeType!==3||(s=l+n),h!==i||a!==0&&h.nodeType!==3||(c=l+a),h.nodeType===3&&(l+=h.nodeValue.length),(x=h.firstChild)!==null;)v=h,h=x;for(;;){if(h===e)break r;if(v===t&&++u===n&&(s=l),v===i&&++g===a&&(c=l),(x=h.nextSibling)!==null)break;h=v,v=h.parentNode}h=x}t=s===-1||c===-1?null:{start:s,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(Zn={focusedElem:e,selectionRange:t},po=!1,M=r;M!==null;)if(r=M,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,M=e;else for(;M!==null;){r=M;try{var I=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var w=I.memoizedProps,E=I.memoizedState,m=r.stateNode,d=m.getSnapshotBeforeUpdate(r.elementType===r.type?w:Ke(r.type,w),E);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=r.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(b){ee(r,r.return,b)}if(e=r.sibling,e!==null){e.return=r.return,M=e;break}M=r.return}return I=bs,bs=!1,I}function oa(e,r,t){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var n=a=a.next;do{if((n.tag&e)===e){var i=n.destroy;n.destroy=void 0,i!==void 0&&gi(r,t,i)}n=n.next}while(n!==a)}}function Ho(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var t=r=r.next;do{if((t.tag&e)===e){var a=t.create;t.destroy=a()}t=t.next}while(t!==r)}}function hi(e){var r=e.ref;if(r!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof r=="function"?r(e):r.current=e}}function Dd(e){var r=e.alternate;r!==null&&(e.alternate=null,Dd(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[nr],delete r[xa],delete r[ti],delete r[rm],delete r[tm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fd(e){return e.tag===5||e.tag===3||e.tag===4}function ys(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xi(e,r,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,r?t.nodeType===8?t.parentNode.insertBefore(e,r):t.insertBefore(e,r):(t.nodeType===8?(r=t.parentNode,r.insertBefore(e,t)):(r=t,r.appendChild(e)),t=t._reactRootContainer,t!=null||r.onclick!==null||(r.onclick=go));else if(a!==4&&(e=e.child,e!==null))for(xi(e,r,t),e=e.sibling;e!==null;)xi(e,r,t),e=e.sibling}function vi(e,r,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,r?t.insertBefore(e,r):t.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(vi(e,r,t),e=e.sibling;e!==null;)vi(e,r,t),e=e.sibling}var ue=null,Qe=!1;function jr(e,r,t){for(t=t.child;t!==null;)Bd(e,r,t),t=t.sibling}function Bd(e,r,t){if(ir&&typeof ir.onCommitFiberUnmount=="function")try{ir.onCommitFiberUnmount(Ro,t)}catch{}switch(t.tag){case 5:xe||xt(t,r);case 6:var a=ue,n=Qe;ue=null,jr(e,r,t),ue=a,Qe=n,ue!==null&&(Qe?(e=ue,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ue.removeChild(t.stateNode));break;case 18:ue!==null&&(Qe?(e=ue,t=t.stateNode,e.nodeType===8?vn(e.parentNode,t):e.nodeType===1&&vn(e,t),pa(e)):vn(ue,t.stateNode));break;case 4:a=ue,n=Qe,ue=t.stateNode.containerInfo,Qe=!0,jr(e,r,t),ue=a,Qe=n;break;case 0:case 11:case 14:case 15:if(!xe&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){n=a=a.next;do{var i=n,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&gi(t,r,l),n=n.next}while(n!==a)}jr(e,r,t);break;case 1:if(!xe&&(xt(t,r),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(s){ee(t,r,s)}jr(e,r,t);break;case 21:jr(e,r,t);break;case 22:t.mode&1?(xe=(a=xe)||t.memoizedState!==null,jr(e,r,t),xe=a):jr(e,r,t);break;default:jr(e,r,t)}}function ws(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new vm),r.forEach(function(a){var n=Em.bind(null,e,a);t.has(a)||(t.add(a),a.then(n,n))})}}function We(e,r){var t=r.deletions;if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];try{var i=e,l=r,s=l;e:for(;s!==null;){switch(s.tag){case 5:ue=s.stateNode,Qe=!1;break e;case 3:ue=s.stateNode.containerInfo,Qe=!0;break e;case 4:ue=s.stateNode.containerInfo,Qe=!0;break e}s=s.return}if(ue===null)throw Error(C(160));Bd(i,l,n),ue=null,Qe=!1;var c=n.alternate;c!==null&&(c.return=null),n.return=null}catch(u){ee(n,r,u)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Od(r,e),r=r.sibling}function Od(e,r){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(r,e),tr(e),a&4){try{oa(3,e,e.return),Ho(3,e)}catch(w){ee(e,e.return,w)}try{oa(5,e,e.return)}catch(w){ee(e,e.return,w)}}break;case 1:We(r,e),tr(e),a&512&&t!==null&&xt(t,t.return);break;case 5:if(We(r,e),tr(e),a&512&&t!==null&&xt(t,t.return),e.flags&32){var n=e.stateNode;try{sa(n,"")}catch(w){ee(e,e.return,w)}}if(a&4&&(n=e.stateNode,n!=null)){var i=e.memoizedProps,l=t!==null?t.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&sc(n,i),Un(s,l);var u=Un(s,i);for(l=0;l<c.length;l+=2){var g=c[l],h=c[l+1];g==="style"?mc(n,h):g==="dangerouslySetInnerHTML"?uc(n,h):g==="children"?sa(n,h):Pi(n,g,h,u)}switch(s){case"input":Dn(n,i);break;case"textarea":cc(n,i);break;case"select":var v=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?bt(n,!!i.multiple,x,!1):v!==!!i.multiple&&(i.defaultValue!=null?bt(n,!!i.multiple,i.defaultValue,!0):bt(n,!!i.multiple,i.multiple?[]:"",!1))}n[xa]=i}catch(w){ee(e,e.return,w)}}break;case 6:if(We(r,e),tr(e),a&4){if(e.stateNode===null)throw Error(C(162));n=e.stateNode,i=e.memoizedProps;try{n.nodeValue=i}catch(w){ee(e,e.return,w)}}break;case 3:if(We(r,e),tr(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{pa(r.containerInfo)}catch(w){ee(e,e.return,w)}break;case 4:We(r,e),tr(e);break;case 13:We(r,e),tr(e),n=e.child,n.flags&8192&&(i=n.memoizedState!==null,n.stateNode.isHidden=i,!i||n.alternate!==null&&n.alternate.memoizedState!==null||(dl=re())),a&4&&ws(e);break;case 22:if(g=t!==null&&t.memoizedState!==null,e.mode&1?(xe=(u=xe)||g,We(r,e),xe=u):We(r,e),tr(e),a&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(M=e,g=e.child;g!==null;){for(h=M=g;M!==null;){switch(v=M,x=v.child,v.tag){case 0:case 11:case 14:case 15:oa(4,v,v.return);break;case 1:xt(v,v.return);var I=v.stateNode;if(typeof I.componentWillUnmount=="function"){a=v,t=v.return;try{r=a,I.props=r.memoizedProps,I.state=r.memoizedState,I.componentWillUnmount()}catch(w){ee(a,t,w)}}break;case 5:xt(v,v.return);break;case 22:if(v.memoizedState!==null){ks(h);continue}}x!==null?(x.return=v,M=x):ks(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{n=h.stateNode,u?(i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,c=h.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=pc("display",l))}catch(w){ee(e,e.return,w)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){ee(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:We(r,e),tr(e),a&4&&ws(e);break;case 21:break;default:We(r,e),tr(e)}}function tr(e){var r=e.flags;if(r&2){try{e:{for(var t=e.return;t!==null;){if(Fd(t)){var a=t;break e}t=t.return}throw Error(C(160))}switch(a.tag){case 5:var n=a.stateNode;a.flags&32&&(sa(n,""),a.flags&=-33);var i=ys(e);vi(e,i,n);break;case 3:case 4:var l=a.stateNode.containerInfo,s=ys(e);xi(e,s,l);break;default:throw Error(C(161))}}catch(c){ee(e,e.return,c)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function ym(e,r,t){M=e,$d(e)}function $d(e,r,t){for(var a=(e.mode&1)!==0;M!==null;){var n=M,i=n.child;if(n.tag===22&&a){var l=n.memoizedState!==null||Ga;if(!l){var s=n.alternate,c=s!==null&&s.memoizedState!==null||xe;s=Ga;var u=xe;if(Ga=l,(xe=c)&&!u)for(M=n;M!==null;)l=M,c=l.child,l.tag===22&&l.memoizedState!==null?Is(n):c!==null?(c.return=l,M=c):Is(n);for(;i!==null;)M=i,$d(i),i=i.sibling;M=n,Ga=s,xe=u}js(e)}else n.subtreeFlags&8772&&i!==null?(i.return=n,M=i):js(e)}}function js(e){for(;M!==null;){var r=M;if(r.flags&8772){var t=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:xe||Ho(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!xe)if(t===null)a.componentDidMount();else{var n=r.elementType===r.type?t.memoizedProps:Ke(r.type,t.memoizedProps);a.componentDidUpdate(n,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var i=r.updateQueue;i!==null&&is(r,i,a);break;case 3:var l=r.updateQueue;if(l!==null){if(t=null,r.child!==null)switch(r.child.tag){case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}is(r,l,t)}break;case 5:var s=r.stateNode;if(t===null&&r.flags&4){t=s;var c=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var u=r.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&pa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}xe||r.flags&512&&hi(r)}catch(v){ee(r,r.return,v)}}if(r===e){M=null;break}if(t=r.sibling,t!==null){t.return=r.return,M=t;break}M=r.return}}function ks(e){for(;M!==null;){var r=M;if(r===e){M=null;break}var t=r.sibling;if(t!==null){t.return=r.return,M=t;break}M=r.return}}function Is(e){for(;M!==null;){var r=M;try{switch(r.tag){case 0:case 11:case 15:var t=r.return;try{Ho(4,r)}catch(c){ee(r,t,c)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var n=r.return;try{a.componentDidMount()}catch(c){ee(r,n,c)}}var i=r.return;try{hi(r)}catch(c){ee(r,i,c)}break;case 5:var l=r.return;try{hi(r)}catch(c){ee(r,l,c)}}}catch(c){ee(r,r.return,c)}if(r===e){M=null;break}var s=r.sibling;if(s!==null){s.return=r.return,M=s;break}M=r.return}}var wm=Math.ceil,Co=wr.ReactCurrentDispatcher,sl=wr.ReactCurrentOwner,He=wr.ReactCurrentBatchConfig,H=0,ce=null,oe=null,pe=0,Pe=0,vt=Or(0),ie=0,ka=null,rt=0,Vo=0,cl=0,na=null,Se=null,dl=0,Pt=1/0,ur=null,No=!1,bi=null,Tr=null,qa=!1,Er=null,Eo=0,ia=0,yi=null,ao=-1,oo=0;function ye(){return H&6?re():ao!==-1?ao:ao=re()}function Rr(e){return e.mode&1?H&2&&pe!==0?pe&-pe:om.transition!==null?(oo===0&&(oo=Sc()),oo):(e=V,e!==0||(e=window.event,e=e===void 0?16:Mc(e.type)),e):1}function Je(e,r,t,a){if(50<ia)throw ia=0,yi=null,Error(C(185));Ca(e,t,a),(!(H&2)||e!==ce)&&(e===ce&&(!(H&2)&&(Vo|=t),ie===4&&Cr(e,pe)),ze(e,a),t===1&&H===0&&!(r.mode&1)&&(Pt=re()+500,Oo&&$r()))}function ze(e,r){var t=e.callbackNode;op(e,r);var a=uo(e,e===ce?pe:0);if(a===0)t!==null&&Al(t),e.callbackNode=null,e.callbackPriority=0;else if(r=a&-a,e.callbackPriority!==r){if(t!=null&&Al(t),r===1)e.tag===0?am(Ss.bind(null,e)):Xc(Ss.bind(null,e)),Zp(function(){!(H&6)&&$r()}),t=null;else{switch(Cc(a)){case 1:t=Li;break;case 4:t=kc;break;case 16:t=co;break;case 536870912:t=Ic;break;default:t=co}t=Qd(t,Ud.bind(null,e))}e.callbackPriority=r,e.callbackNode=t}}function Ud(e,r){if(ao=-1,oo=0,H&6)throw Error(C(327));var t=e.callbackNode;if(It()&&e.callbackNode!==t)return null;var a=uo(e,e===ce?pe:0);if(a===0)return null;if(a&30||a&e.expiredLanes||r)r=zo(e,a);else{r=a;var n=H;H|=2;var i=Vd();(ce!==e||pe!==r)&&(ur=null,Pt=re()+500,Qr(e,r));do try{Im();break}catch(s){Hd(e,s)}while(!0);Qi(),Co.current=i,H=n,oe!==null?r=0:(ce=null,pe=0,r=ie)}if(r!==0){if(r===2&&(n=Wn(e),n!==0&&(a=n,r=wi(e,n))),r===1)throw t=ka,Qr(e,0),Cr(e,a),ze(e,re()),t;if(r===6)Cr(e,a);else{if(n=e.current.alternate,!(a&30)&&!jm(n)&&(r=zo(e,a),r===2&&(i=Wn(e),i!==0&&(a=i,r=wi(e,i))),r===1))throw t=ka,Qr(e,0),Cr(e,a),ze(e,re()),t;switch(e.finishedWork=n,e.finishedLanes=a,r){case 0:case 1:throw Error(C(345));case 2:Vr(e,Se,ur);break;case 3:if(Cr(e,a),(a&130023424)===a&&(r=dl+500-re(),10<r)){if(uo(e,0)!==0)break;if(n=e.suspendedLanes,(n&a)!==a){ye(),e.pingedLanes|=e.suspendedLanes&n;break}e.timeoutHandle=ri(Vr.bind(null,e,Se,ur),r);break}Vr(e,Se,ur);break;case 4:if(Cr(e,a),(a&4194240)===a)break;for(r=e.eventTimes,n=-1;0<a;){var l=31-Xe(a);i=1<<l,l=r[l],l>n&&(n=l),a&=~i}if(a=n,a=re()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*wm(a/1960))-a,10<a){e.timeoutHandle=ri(Vr.bind(null,e,Se,ur),a);break}Vr(e,Se,ur);break;case 5:Vr(e,Se,ur);break;default:throw Error(C(329))}}}return ze(e,re()),e.callbackNode===t?Ud.bind(null,e):null}function wi(e,r){var t=na;return e.current.memoizedState.isDehydrated&&(Qr(e,r).flags|=256),e=zo(e,r),e!==2&&(r=Se,Se=t,r!==null&&ji(r)),e}function ji(e){Se===null?Se=e:Se.push.apply(Se,e)}function jm(e){for(var r=e;;){if(r.flags&16384){var t=r.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var n=t[a],i=n.getSnapshot;n=n.value;try{if(!er(i(),n))return!1}catch{return!1}}}if(t=r.child,r.subtreeFlags&16384&&t!==null)t.return=r,r=t;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Cr(e,r){for(r&=~cl,r&=~Vo,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var t=31-Xe(r),a=1<<t;e[t]=-1,r&=~a}}function Ss(e){if(H&6)throw Error(C(327));It();var r=uo(e,0);if(!(r&1))return ze(e,re()),null;var t=zo(e,r);if(e.tag!==0&&t===2){var a=Wn(e);a!==0&&(r=a,t=wi(e,a))}if(t===1)throw t=ka,Qr(e,0),Cr(e,r),ze(e,re()),t;if(t===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Vr(e,Se,ur),ze(e,re()),null}function ul(e,r){var t=H;H|=1;try{return e(r)}finally{H=t,H===0&&(Pt=re()+500,Oo&&$r())}}function tt(e){Er!==null&&Er.tag===0&&!(H&6)&&It();var r=H;H|=1;var t=He.transition,a=V;try{if(He.transition=null,V=1,e)return e()}finally{V=a,He.transition=t,H=r,!(H&6)&&$r()}}function pl(){Pe=vt.current,Q(vt)}function Qr(e,r){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Jp(t)),oe!==null)for(t=oe.return;t!==null;){var a=t;switch(qi(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&ho();break;case 3:zt(),Q(Ne),Q(ve),rl();break;case 5:el(a);break;case 4:zt();break;case 13:Q(X);break;case 19:Q(X);break;case 10:Yi(a.type._context);break;case 22:case 23:pl()}t=t.return}if(ce=e,oe=e=Lr(e.current,null),pe=Pe=r,ie=0,ka=null,cl=Vo=rt=0,Se=na=null,qr!==null){for(r=0;r<qr.length;r++)if(t=qr[r],a=t.interleaved,a!==null){t.interleaved=null;var n=a.next,i=t.pending;if(i!==null){var l=i.next;i.next=n,a.next=l}t.pending=a}qr=null}return e}function Hd(e,r){do{var t=oe;try{if(Qi(),eo.current=So,Io){for(var a=J.memoizedState;a!==null;){var n=a.queue;n!==null&&(n.pending=null),a=a.next}Io=!1}if(et=0,le=ne=J=null,aa=!1,ya=0,sl.current=null,t===null||t.return===null){ie=1,ka=r,oe=null;break}e:{var i=e,l=t.return,s=t,c=r;if(r=pe,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,g=s,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var v=g.alternate;v?(g.updateQueue=v.updateQueue,g.memoizedState=v.memoizedState,g.lanes=v.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=ps(l);if(x!==null){x.flags&=-257,ms(x,l,s,i,r),x.mode&1&&us(i,u,r),r=x,c=u;var I=r.updateQueue;if(I===null){var w=new Set;w.add(c),r.updateQueue=w}else I.add(c);break e}else{if(!(r&1)){us(i,u,r),ml();break e}c=Error(C(426))}}else if(Y&&s.mode&1){var E=ps(l);if(E!==null){!(E.flags&65536)&&(E.flags|=256),ms(E,l,s,i,r),Wi(_t(c,s));break e}}i=c=_t(c,s),ie!==4&&(ie=2),na===null?na=[i]:na.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,r&=-r,i.lanes|=r;var m=Cd(i,c,r);ns(i,m);break e;case 1:s=c;var d=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Tr===null||!Tr.has(p)))){i.flags|=65536,r&=-r,i.lanes|=r;var b=Nd(i,s,r);ns(i,b);break e}}i=i.return}while(i!==null)}qd(t)}catch(S){r=S,oe===t&&t!==null&&(oe=t=t.return);continue}break}while(!0)}function Vd(){var e=Co.current;return Co.current=So,e===null?So:e}function ml(){(ie===0||ie===3||ie===2)&&(ie=4),ce===null||!(rt&268435455)&&!(Vo&268435455)||Cr(ce,pe)}function zo(e,r){var t=H;H|=2;var a=Vd();(ce!==e||pe!==r)&&(ur=null,Qr(e,r));do try{km();break}catch(n){Hd(e,n)}while(!0);if(Qi(),H=t,Co.current=a,oe!==null)throw Error(C(261));return ce=null,pe=0,ie}function km(){for(;oe!==null;)Gd(oe)}function Im(){for(;oe!==null&&!Qu();)Gd(oe)}function Gd(e){var r=Kd(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,r===null?qd(e):oe=r,sl.current=null}function qd(e){var r=e;do{var t=r.alternate;if(e=r.return,r.flags&32768){if(t=xm(t,r),t!==null){t.flags&=32767,oe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,oe=null;return}}else if(t=hm(t,r,Pe),t!==null){oe=t;return}if(r=r.sibling,r!==null){oe=r;return}oe=r=e}while(r!==null);ie===0&&(ie=5)}function Vr(e,r,t){var a=V,n=He.transition;try{He.transition=null,V=1,Sm(e,r,t,a)}finally{He.transition=n,V=a}return null}function Sm(e,r,t,a){do It();while(Er!==null);if(H&6)throw Error(C(327));t=e.finishedWork;var n=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(np(e,i),e===ce&&(oe=ce=null,pe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||qa||(qa=!0,Qd(co,function(){return It(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=He.transition,He.transition=null;var l=V;V=1;var s=H;H|=4,sl.current=null,bm(e,t),Od(t,e),Gp(Zn),po=!!Jn,Zn=Jn=null,e.current=t,ym(t),Yu(),H=s,V=l,He.transition=i}else e.current=t;if(qa&&(qa=!1,Er=e,Eo=n),i=e.pendingLanes,i===0&&(Tr=null),Zu(t.stateNode),ze(e,re()),r!==null)for(a=e.onRecoverableError,t=0;t<r.length;t++)n=r[t],a(n.value,{componentStack:n.stack,digest:n.digest});if(No)throw No=!1,e=bi,bi=null,e;return Eo&1&&e.tag!==0&&It(),i=e.pendingLanes,i&1?e===yi?ia++:(ia=0,yi=e):ia=0,$r(),null}function It(){if(Er!==null){var e=Cc(Eo),r=He.transition,t=V;try{if(He.transition=null,V=16>e?16:e,Er===null)var a=!1;else{if(e=Er,Er=null,Eo=0,H&6)throw Error(C(331));var n=H;for(H|=4,M=e.current;M!==null;){var i=M,l=i.child;if(M.flags&16){var s=i.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(M=u;M!==null;){var g=M;switch(g.tag){case 0:case 11:case 15:oa(8,g,i)}var h=g.child;if(h!==null)h.return=g,M=h;else for(;M!==null;){g=M;var v=g.sibling,x=g.return;if(Dd(g),g===u){M=null;break}if(v!==null){v.return=x,M=v;break}M=x}}}var I=i.alternate;if(I!==null){var w=I.child;if(w!==null){I.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}M=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,M=l;else e:for(;M!==null;){if(i=M,i.flags&2048)switch(i.tag){case 0:case 11:case 15:oa(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,M=m;break e}M=i.return}}var d=e.current;for(M=d;M!==null;){l=M;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,M=p;else e:for(l=d;M!==null;){if(s=M,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ho(9,s)}}catch(S){ee(s,s.return,S)}if(s===l){M=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,M=b;break e}M=s.return}}if(H=n,$r(),ir&&typeof ir.onPostCommitFiberRoot=="function")try{ir.onPostCommitFiberRoot(Ro,e)}catch{}a=!0}return a}finally{V=t,He.transition=r}}return!1}function Cs(e,r,t){r=_t(t,r),r=Cd(e,r,1),e=Ar(e,r,1),r=ye(),e!==null&&(Ca(e,1,r),ze(e,r))}function ee(e,r,t){if(e.tag===3)Cs(e,e,t);else for(;r!==null;){if(r.tag===3){Cs(r,e,t);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Tr===null||!Tr.has(a))){e=_t(t,e),e=Nd(r,e,1),r=Ar(r,e,1),e=ye(),r!==null&&(Ca(r,1,e),ze(r,e));break}}r=r.return}}function Cm(e,r,t){var a=e.pingCache;a!==null&&a.delete(r),r=ye(),e.pingedLanes|=e.suspendedLanes&t,ce===e&&(pe&t)===t&&(ie===4||ie===3&&(pe&130023424)===pe&&500>re()-dl?Qr(e,0):cl|=t),ze(e,r)}function Wd(e,r){r===0&&(e.mode&1?(r=La,La<<=1,!(La&130023424)&&(La=4194304)):r=1);var t=ye();e=br(e,r),e!==null&&(Ca(e,r,t),ze(e,t))}function Nm(e){var r=e.memoizedState,t=0;r!==null&&(t=r.retryLane),Wd(e,t)}function Em(e,r){var t=0;switch(e.tag){case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(t=n.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(C(314))}a!==null&&a.delete(r),Wd(e,t)}var Kd;Kd=function(e,r,t){if(e!==null)if(e.memoizedProps!==r.pendingProps||Ne.current)Ce=!0;else{if(!(e.lanes&t)&&!(r.flags&128))return Ce=!1,gm(e,r,t);Ce=!!(e.flags&131072)}else Ce=!1,Y&&r.flags&1048576&&Jc(r,bo,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;to(e,r),e=r.pendingProps;var n=Ct(r,ve.current);kt(r,t),n=al(null,r,a,e,n,t);var i=ol();return r.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ee(a)?(i=!0,xo(r)):i=!1,r.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,Ji(r),n.updater=Uo,r.stateNode=n,n._reactInternals=r,si(r,a,e,t),r=ui(null,r,a,!0,i,t)):(r.tag=0,Y&&i&&Gi(r),be(null,r,n,t),r=r.child),r;case 16:a=r.elementType;e:{switch(to(e,r),e=r.pendingProps,n=a._init,a=n(a._payload),r.type=a,n=r.tag=_m(a),e=Ke(a,e),n){case 0:r=di(null,r,a,e,t);break e;case 1:r=hs(null,r,a,e,t);break e;case 11:r=fs(null,r,a,e,t);break e;case 14:r=gs(null,r,a,Ke(a.type,e),t);break e}throw Error(C(306,a,""))}return r;case 0:return a=r.type,n=r.pendingProps,n=r.elementType===a?n:Ke(a,n),di(e,r,a,n,t);case 1:return a=r.type,n=r.pendingProps,n=r.elementType===a?n:Ke(a,n),hs(e,r,a,n,t);case 3:e:{if(Pd(r),e===null)throw Error(C(387));a=r.pendingProps,i=r.memoizedState,n=i.element,od(e,r),jo(r,a,null,t);var l=r.memoizedState;if(a=l.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},r.updateQueue.baseState=i,r.memoizedState=i,r.flags&256){n=_t(Error(C(423)),r),r=xs(e,r,a,t,n);break e}else if(a!==n){n=_t(Error(C(424)),r),r=xs(e,r,a,t,n);break e}else for(Me=Mr(r.stateNode.containerInfo.firstChild),Ae=r,Y=!0,Ye=null,t=td(r,null,a,t),r.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Nt(),a===n){r=yr(e,r,t);break e}be(e,r,a,t)}r=r.child}return r;case 5:return nd(r),e===null&&ni(r),a=r.type,n=r.pendingProps,i=e!==null?e.memoizedProps:null,l=n.children,ei(a,n)?l=null:i!==null&&ei(a,i)&&(r.flags|=32),_d(e,r),be(e,r,l,t),r.child;case 6:return e===null&&ni(r),null;case 13:return Md(e,r,t);case 4:return Zi(r,r.stateNode.containerInfo),a=r.pendingProps,e===null?r.child=Et(r,null,a,t):be(e,r,a,t),r.child;case 11:return a=r.type,n=r.pendingProps,n=r.elementType===a?n:Ke(a,n),fs(e,r,a,n,t);case 7:return be(e,r,r.pendingProps,t),r.child;case 8:return be(e,r,r.pendingProps.children,t),r.child;case 12:return be(e,r,r.pendingProps.children,t),r.child;case 10:e:{if(a=r.type._context,n=r.pendingProps,i=r.memoizedProps,l=n.value,W(yo,a._currentValue),a._currentValue=l,i!==null)if(er(i.value,l)){if(i.children===n.children&&!Ne.current){r=yr(e,r,t);break e}}else for(i=r.child,i!==null&&(i.return=r);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var c=s.firstContext;c!==null;){if(c.context===a){if(i.tag===1){c=hr(-1,t&-t),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?c.next=c:(c.next=g.next,g.next=c),u.pending=c}}i.lanes|=t,c=i.alternate,c!==null&&(c.lanes|=t),ii(i.return,t,r),s.lanes|=t;break}c=c.next}}else if(i.tag===10)l=i.type===r.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(C(341));l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),ii(l,t,r),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===r){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}be(e,r,n.children,t),r=r.child}return r;case 9:return n=r.type,a=r.pendingProps.children,kt(r,t),n=Ve(n),a=a(n),r.flags|=1,be(e,r,a,t),r.child;case 14:return a=r.type,n=Ke(a,r.pendingProps),n=Ke(a.type,n),gs(e,r,a,n,t);case 15:return Ed(e,r,r.type,r.pendingProps,t);case 17:return a=r.type,n=r.pendingProps,n=r.elementType===a?n:Ke(a,n),to(e,r),r.tag=1,Ee(a)?(e=!0,xo(r)):e=!1,kt(r,t),Sd(r,a,n),si(r,a,n,t),ui(null,r,a,!0,e,t);case 19:return Ad(e,r,t);case 22:return zd(e,r,t)}throw Error(C(156,r.tag))};function Qd(e,r){return jc(e,r)}function zm(e,r,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,r,t,a){return new zm(e,r,t,a)}function fl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _m(e){if(typeof e=="function")return fl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ai)return 11;if(e===Ti)return 14}return 2}function Lr(e,r){var t=e.alternate;return t===null?(t=Ue(e.tag,r,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=r,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,r=e.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function no(e,r,t,a,n,i){var l=2;if(a=e,typeof e=="function")fl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case st:return Yr(t.children,n,i,r);case Mi:l=8,n|=8;break;case Mn:return e=Ue(12,t,r,n|2),e.elementType=Mn,e.lanes=i,e;case An:return e=Ue(13,t,r,n),e.elementType=An,e.lanes=i,e;case Tn:return e=Ue(19,t,r,n),e.elementType=Tn,e.lanes=i,e;case nc:return Go(t,n,i,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ac:l=10;break e;case oc:l=9;break e;case Ai:l=11;break e;case Ti:l=14;break e;case kr:l=16,a=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return r=Ue(l,t,r,n),r.elementType=e,r.type=a,r.lanes=i,r}function Yr(e,r,t,a){return e=Ue(7,e,a,r),e.lanes=t,e}function Go(e,r,t,a){return e=Ue(22,e,a,r),e.elementType=nc,e.lanes=t,e.stateNode={isHidden:!1},e}function Cn(e,r,t){return e=Ue(6,e,null,r),e.lanes=t,e}function Nn(e,r,t){return r=Ue(4,e.children!==null?e.children:[],e.key,r),r.lanes=t,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Pm(e,r,t,a,n){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ln(0),this.expirationTimes=ln(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ln(0),this.identifierPrefix=a,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function gl(e,r,t,a,n,i,l,s,c){return e=new Pm(e,r,t,s,c),r===1?(r=1,i===!0&&(r|=8)):r=0,i=Ue(3,null,null,r),e.current=i,i.stateNode=e,i.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ji(i),e}function Mm(e,r,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lt,key:a==null?null:""+a,children:e,containerInfo:r,implementation:t}}function Yd(e){if(!e)return Fr;e=e._reactInternals;e:{if(ot(e)!==e||e.tag!==1)throw Error(C(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ee(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(C(171))}if(e.tag===1){var t=e.type;if(Ee(t))return Yc(e,t,r)}return r}function Xd(e,r,t,a,n,i,l,s,c){return e=gl(t,a,!0,e,n,i,l,s,c),e.context=Yd(null),t=e.current,a=ye(),n=Rr(t),i=hr(a,n),i.callback=r??null,Ar(t,i,n),e.current.lanes=n,Ca(e,n,a),ze(e,a),e}function qo(e,r,t,a){var n=r.current,i=ye(),l=Rr(n);return t=Yd(t),r.context===null?r.context=t:r.pendingContext=t,r=hr(i,l),r.payload={element:e},a=a===void 0?null:a,a!==null&&(r.callback=a),e=Ar(n,r,l),e!==null&&(Je(e,n,l,i),Za(e,n,l)),l}function _o(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ns(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<r?t:r}}function hl(e,r){Ns(e,r),(e=e.alternate)&&Ns(e,r)}function Am(){return null}var Jd=typeof reportError=="function"?reportError:function(e){console.error(e)};function xl(e){this._internalRoot=e}Wo.prototype.render=xl.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(C(409));qo(e,r,null,null)};Wo.prototype.unmount=xl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;tt(function(){qo(null,e,null,null)}),r[vr]=null}};function Wo(e){this._internalRoot=e}Wo.prototype.unstable_scheduleHydration=function(e){if(e){var r=zc();e={blockedOn:null,target:e,priority:r};for(var t=0;t<Sr.length&&r!==0&&r<Sr[t].priority;t++);Sr.splice(t,0,e),t===0&&Pc(e)}};function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Es(){}function Tm(e,r,t,a,n){if(n){if(typeof a=="function"){var i=a;a=function(){var u=_o(l);i.call(u)}}var l=Xd(r,a,e,0,null,!1,!1,"",Es);return e._reactRootContainer=l,e[vr]=l.current,ga(e.nodeType===8?e.parentNode:e),tt(),l}for(;n=e.lastChild;)e.removeChild(n);if(typeof a=="function"){var s=a;a=function(){var u=_o(c);s.call(u)}}var c=gl(e,0,!1,null,null,!1,!1,"",Es);return e._reactRootContainer=c,e[vr]=c.current,ga(e.nodeType===8?e.parentNode:e),tt(function(){qo(r,c,t,a)}),c}function Qo(e,r,t,a,n){var i=t._reactRootContainer;if(i){var l=i;if(typeof n=="function"){var s=n;n=function(){var c=_o(l);s.call(c)}}qo(r,l,e,n)}else l=Tm(t,r,e,n,a);return _o(l)}Nc=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var t=Qt(r.pendingLanes);t!==0&&(Di(r,t|1),ze(r,re()),!(H&6)&&(Pt=re()+500,$r()))}break;case 13:tt(function(){var a=br(e,1);if(a!==null){var n=ye();Je(a,e,1,n)}}),hl(e,1)}};Fi=function(e){if(e.tag===13){var r=br(e,134217728);if(r!==null){var t=ye();Je(r,e,134217728,t)}hl(e,134217728)}};Ec=function(e){if(e.tag===13){var r=Rr(e),t=br(e,r);if(t!==null){var a=ye();Je(t,e,r,a)}hl(e,r)}};zc=function(){return V};_c=function(e,r){var t=V;try{return V=e,r()}finally{V=t}};Vn=function(e,r,t){switch(r){case"input":if(Dn(e,t),r=t.name,t.type==="radio"&&r!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<t.length;r++){var a=t[r];if(a!==e&&a.form===e.form){var n=Bo(a);if(!n)throw Error(C(90));lc(a),Dn(a,n)}}}break;case"textarea":cc(e,t);break;case"select":r=t.value,r!=null&&bt(e,!!t.multiple,r,!1)}};hc=ul;xc=tt;var Rm={usingClientEntryPoint:!1,Events:[Ea,pt,Bo,fc,gc,ul]},Vt={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lm={bundleType:Vt.bundleType,version:Vt.version,rendererPackageName:Vt.rendererPackageName,rendererConfig:Vt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yc(e),e===null?null:e.stateNode},findFiberByHostInstance:Vt.findFiberByHostInstance||Am,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wa.isDisabled&&Wa.supportsFiber)try{Ro=Wa.inject(Lm),ir=Wa}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rm;Re.createPortal=function(e,r){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vl(r))throw Error(C(200));return Mm(e,r,null,t)};Re.createRoot=function(e,r){if(!vl(e))throw Error(C(299));var t=!1,a="",n=Jd;return r!=null&&(r.unstable_strictMode===!0&&(t=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(n=r.onRecoverableError)),r=gl(e,1,!1,null,null,t,!1,a,n),e[vr]=r.current,ga(e.nodeType===8?e.parentNode:e),new xl(r)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=yc(r),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return tt(e)};Re.hydrate=function(e,r,t){if(!Ko(r))throw Error(C(200));return Qo(null,e,r,!0,t)};Re.hydrateRoot=function(e,r,t){if(!vl(e))throw Error(C(405));var a=t!=null&&t.hydratedSources||null,n=!1,i="",l=Jd;if(t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),r=Xd(r,null,e,1,t??null,n,!1,i,l),e[vr]=r.current,ga(e),a)for(e=0;e<a.length;e++)t=a[e],n=t._getVersion,n=n(t._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[t,n]:r.mutableSourceEagerHydrationData.push(t,n);return new Wo(r)};Re.render=function(e,r,t){if(!Ko(r))throw Error(C(200));return Qo(null,e,r,!1,t)};Re.unmountComponentAtNode=function(e){if(!Ko(e))throw Error(C(40));return e._reactRootContainer?(tt(function(){Qo(null,null,e,!1,function(){e._reactRootContainer=null,e[vr]=null})}),!0):!1};Re.unstable_batchedUpdates=ul;Re.unstable_renderSubtreeIntoContainer=function(e,r,t,a){if(!Ko(t))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Qo(e,r,t,!1,a)};Re.version="18.3.1-next-f1338f8080-20240426";function Zd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zd)}catch(e){console.error(e)}}Zd(),Zs.exports=Re;var eu=Zs.exports,zs=eu;_n.createRoot=zs.createRoot,_n.hydrateRoot=zs.hydrateRoot;const Po={pdf:{label:"PDF",icon:"📄",color:"#ef4444",bg:"rgba(239,68,68,0.1)",border:"rgba(239,68,68,0.25)"},word:{label:"Word",icon:"📝",color:"#2563eb",bg:"rgba(37,99,235,0.1)",border:"rgba(37,99,235,0.25)"},ppt:{label:"PPT",icon:"📊",color:"#d97706",bg:"rgba(217,119,6,0.1)",border:"rgba(217,119,6,0.25)"},excel:{label:"Excel",icon:"📈",color:"#16a34a",bg:"rgba(22,163,74,0.1)",border:"rgba(22,163,74,0.25)"},imagen:{label:"Imagen",icon:"🖼️",color:"#7c3aed",bg:"rgba(124,58,237,0.1)",border:"rgba(124,58,237,0.25)"},zip:{label:"ZIP",icon:"🗜️",color:"#6b7280",bg:"rgba(107,114,128,0.1)",border:"rgba(107,114,128,0.25)"}},A={algoritmos:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",sql:"https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",software:"https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&q=80",programacion:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",redes:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",ia:"https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",ciberseguridad:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",calculo:"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",estadistica:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",estructuras:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",arquitectura:"https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",diseno_interiores:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",construccion:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",produccion:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",minas:"https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?w=800&q=80",ambiental:"https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80",mecatronica:"https://images.unsplash.com/photo-1561144257-e32e8506c92b?w=800&q=80",marketing:"https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",economia:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",ecommerce:"https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",contabilidad:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",finanzas:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",rrhh:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",gestion_publica:"https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=800&q=80",negocios_int:"https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",gestion:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",auditoria:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",anatomia:"https://images.unsplash.com/photo-1530210124550-912dc1381cb8?w=800&q=80",histologia:"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",farmacologia:"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",enfermeria:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",odontologia:"https://images.unsplash.com/photo-1588776814546-1ffbb5d7d2a6?w=800&q=80",farmacia:"https://images.unsplash.com/photo-1563213126-a4273aed2016?w=800&q=80",terapia_fisica:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",laboratorio:"https://images.unsplash.com/photo-1587613865763-4b8b0d19d80f?w=800&q=80",radiologia:"https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80",derecho:"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",derecho2:"https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80",psicologia:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",neurociencia:"https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",comunicacion:"https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",educacion:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",innovacion_educ:"https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80"},N={calculo:"https://arxiv.org/pdf/math/0602132",algoritmos:"https://arxiv.org/pdf/1811.00710",redes:"https://arxiv.org/pdf/1903.10982",ia:"https://arxiv.org/pdf/1702.01412",ml:"https://arxiv.org/pdf/2108.09830",ciberseguridad:"https://arxiv.org/pdf/2001.07213",bd:"https://arxiv.org/pdf/1903.12287",estructuras:"https://arxiv.org/pdf/1905.02984",geotecnia:"https://arxiv.org/pdf/2001.05506",ambiental:"https://arxiv.org/pdf/1911.09071",agua:"https://arxiv.org/pdf/2103.01936",manufactura:"https://arxiv.org/pdf/1908.01507",logistica:"https://arxiv.org/pdf/2012.09214",mineria:"https://arxiv.org/pdf/1906.05433",economia:"https://arxiv.org/pdf/2109.14729",marketing:"https://arxiv.org/pdf/2005.12566",gestion:"https://arxiv.org/pdf/1911.09071",finanzas:"https://arxiv.org/pdf/2003.01901",contabilidad:"https://arxiv.org/pdf/2101.09076",rrhh:"https://arxiv.org/pdf/2104.09865",comercio_int:"https://arxiv.org/pdf/2103.03644",medicina:"https://arxiv.org/pdf/2101.09076",farmacologia:"https://arxiv.org/pdf/2009.13570",salud_publica:"https://arxiv.org/pdf/2005.08587",bioquimica:"https://arxiv.org/pdf/1911.08265",radiologia_img:"https://arxiv.org/pdf/2105.04906",terapia_fisica_p:"https://arxiv.org/pdf/2104.09865",derecho:"https://arxiv.org/pdf/1911.09071",derechos_hum:"https://arxiv.org/pdf/2003.01901",psicologia:"https://arxiv.org/pdf/2101.07810",neurociencia:"https://arxiv.org/pdf/1905.10985",comunicacion:"https://arxiv.org/pdf/2105.11084",educacion_digital:"https://arxiv.org/pdf/2104.09865",generico:"https://arxiv.org/pdf/1706.03762",generico2:"https://arxiv.org/pdf/2005.14165"},Ze=[{id:1,nombre:"Facultad de Ciencias de la Empresa",color:"#4f46e5",icono:"💼"},{id:2,nombre:"Facultad de Ingeniería",color:"#0891b2",icono:"🔧"},{id:3,nombre:"Facultad de Ciencias de la Salud",color:"#16a34a",icono:"🩺"},{id:4,nombre:"Facultad de Derecho",color:"#d97706",icono:"⚖️"},{id:5,nombre:"Facultad de Psicología",color:"#7c3aed",icono:"🧠"},{id:6,nombre:"Facultad de Ciencias Sociales y Humanidades",color:"#be185d",icono:"🎓"}],te=[{id:1,nombre:"Administración",codigo:"ADM",facultadId:1,ciclos:10,color:"#4f46e5"},{id:2,nombre:"Administración y Finanzas",codigo:"AFI",facultadId:1,ciclos:10,color:"#4338ca"},{id:3,nombre:"Administración y Gestión del Talento Humano",codigo:"AGT",facultadId:1,ciclos:10,color:"#6366f1"},{id:4,nombre:"Administración y Gestión Pública",codigo:"AGP",facultadId:1,ciclos:10,color:"#818cf8"},{id:5,nombre:"Administración y Marketing",codigo:"AMK",facultadId:1,ciclos:10,color:"#a5b4fc"},{id:6,nombre:"Administración y Negocios Digitales",codigo:"AND",facultadId:1,ciclos:10,color:"#3730a3"},{id:7,nombre:"Administración y Negocios Internacionales",codigo:"ANI",facultadId:1,ciclos:10,color:"#312e81"},{id:8,nombre:"Contabilidad y Finanzas",codigo:"COF",facultadId:1,ciclos:10,color:"#dc2626"},{id:9,nombre:"Economía",codigo:"ECO",facultadId:1,ciclos:10,color:"#b91c1c"},{id:10,nombre:"Arquitectura",codigo:"ARQ",facultadId:2,ciclos:10,color:"#92400e"},{id:11,nombre:"Arquitectura y Diseño de Interiores",codigo:"ADI",facultadId:2,ciclos:10,color:"#b45309"},{id:12,nombre:"Ciencia de la Computación",codigo:"CCO",facultadId:2,ciclos:10,color:"#0891b2"},{id:13,nombre:"Ingeniería Ambiental",codigo:"IAM",facultadId:2,ciclos:10,color:"#15803d"},{id:14,nombre:"Ingeniería Civil",codigo:"ICI",facultadId:2,ciclos:10,color:"#155e75"},{id:15,nombre:"Ingeniería de Minas",codigo:"IMN",facultadId:2,ciclos:10,color:"#7c3aed"},{id:16,nombre:"Ingeniería de Sistemas e Informática",codigo:"ISI",facultadId:2,ciclos:10,color:"#0284c7"},{id:17,nombre:"Ingeniería Eléctrica",codigo:"IEL",facultadId:2,ciclos:10,color:"#0e7490"},{id:18,nombre:"Ingeniería Empresarial",codigo:"IEM",facultadId:2,ciclos:10,color:"#6d28d9"},{id:19,nombre:"Ingeniería Industrial",codigo:"IIN",facultadId:2,ciclos:10,color:"#1d4ed8"},{id:20,nombre:"Ingeniería Mecánica",codigo:"IMC",facultadId:2,ciclos:10,color:"#1e40af"},{id:21,nombre:"Ingeniería Mecatrónica",codigo:"IMT",facultadId:2,ciclos:10,color:"#06b6d4"},{id:22,nombre:"Medicina Humana",codigo:"MED",facultadId:3,ciclos:12,color:"#16a34a"},{id:23,nombre:"Enfermería",codigo:"ENF",facultadId:3,ciclos:10,color:"#15803d"},{id:24,nombre:"Odontología",codigo:"ODO",facultadId:3,ciclos:10,color:"#14532d"},{id:25,nombre:"Farmacia y Bioquímica",codigo:"FAB",facultadId:3,ciclos:10,color:"#047857"},{id:26,nombre:"Tecnología Médica – Terapia Física y Rehabilitación",codigo:"TMT",facultadId:3,ciclos:10,color:"#065f46"},{id:27,nombre:"Tecnología Médica – Laboratorio Clínico y Anatomía Patológica",codigo:"TML",facultadId:3,ciclos:10,color:"#0f766e"},{id:28,nombre:"Tecnología Médica – Radiología",codigo:"TMR",facultadId:3,ciclos:10,color:"#134e4a"},{id:29,nombre:"Derecho",codigo:"DER",facultadId:4,ciclos:10,color:"#d97706"},{id:30,nombre:"Psicología",codigo:"PSI",facultadId:5,ciclos:10,color:"#7c3aed"},{id:31,nombre:"Ciencias de la Comunicación",codigo:"CCC",facultadId:6,ciclos:10,color:"#be185d"},{id:32,nombre:"Educación con Especialidad en Innovación y Aprendizaje Digital",codigo:"EIA",facultadId:6,ciclos:10,color:"#9d174d"}],Xr=[{id:1,nombre:"Ing. Miguel Ángel Quispe Poma",area:"Ingeniería de Software y Algoritmos",carreraId:16,rating:4.8,apuntes:18,foto:null,iniciales:"MQ"},{id:2,nombre:"Ing. Rebeca Torres Lazo",area:"Redes y Base de Datos",carreraId:16,rating:4.6,apuntes:12,foto:null,iniciales:"RT"},{id:3,nombre:"Mg. Fernando Huanca Ríos",area:"Ciberseguridad e IA",carreraId:12,rating:4.7,apuntes:9,foto:null,iniciales:"FH"},{id:4,nombre:"Dr. Julio César Apaza Vega",area:"Ciencias Exactas e Industrial",carreraId:19,rating:4.9,apuntes:22,foto:null,iniciales:"JA"},{id:5,nombre:"Mg. Sandra Villanueva Cruz",area:"Gestión Industrial y Calidad",carreraId:19,rating:4.5,apuntes:10,foto:null,iniciales:"SV"},{id:6,nombre:"Ing. Roberto Palomino Asto",area:"Estructuras y Construcción",carreraId:14,rating:4.7,apuntes:14,foto:null,iniciales:"RP"},{id:7,nombre:"Mg. Valeria Contreras Medina",area:"Marketing Digital y Negocios",carreraId:5,rating:4.8,apuntes:16,foto:null,iniciales:"VC"},{id:8,nombre:"Dr. Carlos Mendoza Ríos",area:"Economía y Finanzas",carreraId:9,rating:4.8,apuntes:13,foto:null,iniciales:"CM"},{id:9,nombre:"Mg. Andrea Solís Paredes",area:"Gestión de Proyectos y Emprendimiento",carreraId:6,rating:4.6,apuntes:8,foto:null,iniciales:"AS"},{id:10,nombre:"CPC Patricia Flores Rojas",area:"Contabilidad General y Costos",carreraId:8,rating:4.5,apuntes:11,foto:null,iniciales:"PF"},{id:11,nombre:"Mg. Luis Tello Huamán",area:"Auditoría y Finanzas Corporativas",carreraId:8,rating:4.6,apuntes:7,foto:null,iniciales:"LT"},{id:12,nombre:"Dr. Luis Vargas Castillo",area:"Derecho Civil y Laboral",carreraId:29,rating:4.7,apuntes:15,foto:null,iniciales:"LV"},{id:13,nombre:"Mg. Claudia Ríos Espinoza",area:"Derecho Constitucional y Penal",carreraId:29,rating:4.9,apuntes:20,foto:null,iniciales:"CR"},{id:14,nombre:"Dr. Ricardo Huamán Porras",area:"Anatomía y Ciencias Básicas – Medicina",carreraId:22,rating:4.9,apuntes:25,foto:null,iniciales:"RH"},{id:15,nombre:"Dra. Mariana Landa Castañeda",area:"Fisiología, Bioquímica y Farmacología",carreraId:22,rating:4.8,apuntes:19,foto:null,iniciales:"ML"},{id:16,nombre:"Ps. Diana Quispe Rosales",area:"Psicología Clínica y Neurociencias",carreraId:30,rating:4.7,apuntes:11,foto:null,iniciales:"DQ"},{id:17,nombre:"Mg. Jorge Tapia Mendoza",area:"Recursos Humanos y Comportamiento Org.",carreraId:3,rating:4.6,apuntes:9,foto:null,iniciales:"JT"},{id:18,nombre:"Mg. Rosa Elena Cárdenas Vera",area:"Gestión Pública y Políticas de Estado",carreraId:4,rating:4.5,apuntes:8,foto:null,iniciales:"RC"},{id:19,nombre:"Dr. Alberto Salas Huanca",area:"Comercio Exterior y Negocios Globales",carreraId:7,rating:4.7,apuntes:10,foto:null,iniciales:"AS"},{id:20,nombre:"Arq. Carmen Delgado Meza",area:"Diseño Arquitectónico y Urbanismo",carreraId:10,rating:4.8,apuntes:13,foto:null,iniciales:"CD"},{id:21,nombre:"Arq. Héctor Llanos Quispe",area:"Diseño de Interiores y BIM",carreraId:11,rating:4.6,apuntes:11,foto:null,iniciales:"HL"},{id:22,nombre:"Mg. Ana Lucía Poma Torres",area:"Gestión Ambiental y SGA",carreraId:13,rating:4.7,apuntes:12,foto:null,iniciales:"AP"},{id:23,nombre:"Ing. César Villafuerte Lara",area:"Explotación Minera y Seguridad",carreraId:15,rating:4.6,apuntes:10,foto:null,iniciales:"CV"},{id:24,nombre:"Ing. Pablo Rojas Ccencho",area:"Mecánica de Fluidos y Termodinámica",carreraId:20,rating:4.7,apuntes:8,foto:null,iniciales:"PR"},{id:25,nombre:"Mg. Víctor Soto Medina",area:"Robótica y Automatización",carreraId:21,rating:4.8,apuntes:11,foto:null,iniciales:"VS"},{id:26,nombre:"Ing. Marco Ticse Flores",area:"Circuitos Eléctricos y Sistemas de Potencia",carreraId:17,rating:4.6,apuntes:9,foto:null,iniciales:"MT"},{id:27,nombre:"Lic. Enf. Norma Huamaní Segura",area:"Enfermería Clínica y Cuidados Intensivos",carreraId:23,rating:4.7,apuntes:14,foto:null,iniciales:"NH"},{id:28,nombre:"Mg. Odont. Paola Berrocal Arias",area:"Odontología Restauradora y Periodoncia",carreraId:24,rating:4.8,apuntes:10,foto:null,iniciales:"PB"},{id:29,nombre:"Q.F. Rodrigo Mamani Quispe",area:"Farmacotecnia y Bioquímica Clínica",carreraId:25,rating:4.7,apuntes:9,foto:null,iniciales:"RM"},{id:30,nombre:"Tec. Med. Lucía Condori Huanca",area:"Terapia Física y Biomecánica",carreraId:26,rating:4.6,apuntes:8,foto:null,iniciales:"LC"},{id:31,nombre:"Tec. Med. Carlos Ore Huamán",area:"Laboratorio Clínico y Hematología",carreraId:27,rating:4.5,apuntes:7,foto:null,iniciales:"CO"},{id:32,nombre:"Tec. Med. Silvia Paucar Valenzuela",area:"Radiología e Imagen Diagnóstica",carreraId:28,rating:4.7,apuntes:9,foto:null,iniciales:"SP"},{id:33,nombre:"Lic. Gabriela Núñez Arroyo",area:"Periodismo Digital y Comunicación Estratégica",carreraId:31,rating:4.7,apuntes:10,foto:null,iniciales:"GN"},{id:34,nombre:"Mg. Enrique Sánchez Palacios",area:"Tecnología Educativa e Innovación Pedagógica",carreraId:32,rating:4.8,apuntes:9,foto:null,iniciales:"ES"}],se=[{id:1,nombre:"Programación Funcional",codigo:"CCO-301",carreraId:12,ciclo:3,creditos:4,docenteId:3,color:"#0891b2"},{id:2,nombre:"Inteligencia Artificial Avanzada",codigo:"CCO-601",carreraId:12,ciclo:6,creditos:5,docenteId:3,color:"#0891b2"},{id:3,nombre:"Computación Paralela",codigo:"CCO-701",carreraId:12,ciclo:7,creditos:4,docenteId:3,color:"#0891b2"},{id:4,nombre:"Algoritmos y Programación",codigo:"ISI-101",carreraId:16,ciclo:1,creditos:4,docenteId:1,color:"#0284c7"},{id:5,nombre:"Fundamentos de Base de Datos",codigo:"ISI-201",carreraId:16,ciclo:2,creditos:4,docenteId:2,color:"#0284c7"},{id:6,nombre:"Estructuras de Datos",codigo:"ISI-301",carreraId:16,ciclo:3,creditos:5,docenteId:1,color:"#0284c7"},{id:7,nombre:"Ingeniería de Software",codigo:"ISI-401",carreraId:16,ciclo:4,creditos:4,docenteId:1,color:"#0284c7"},{id:8,nombre:"Redes y Comunicaciones",codigo:"ISI-402",carreraId:16,ciclo:4,creditos:4,docenteId:2,color:"#0284c7"},{id:9,nombre:"Inteligencia Artificial",codigo:"ISI-601",carreraId:16,ciclo:6,creditos:4,docenteId:3,color:"#0284c7"},{id:10,nombre:"Seguridad Informática",codigo:"ISI-701",carreraId:16,ciclo:7,creditos:4,docenteId:3,color:"#0284c7"},{id:11,nombre:"Cálculo Diferencial",codigo:"IIN-101",carreraId:19,ciclo:1,creditos:5,docenteId:4,color:"#1d4ed8"},{id:12,nombre:"Estadística Aplicada",codigo:"IIN-201",carreraId:19,ciclo:2,creditos:4,docenteId:4,color:"#1d4ed8"},{id:13,nombre:"Investigación Operativa",codigo:"IIN-301",carreraId:19,ciclo:3,creditos:4,docenteId:5,color:"#1d4ed8"},{id:14,nombre:"Gestión de la Producción",codigo:"IIN-401",carreraId:19,ciclo:4,creditos:4,docenteId:5,color:"#1d4ed8"},{id:15,nombre:"Gestión de Calidad Total",codigo:"IIN-501",carreraId:19,ciclo:5,creditos:4,docenteId:4,color:"#1d4ed8"},{id:16,nombre:"Logística y Cadena de Suministro",codigo:"IIN-601",carreraId:19,ciclo:6,creditos:4,docenteId:5,color:"#1d4ed8"},{id:17,nombre:"Mecánica de Suelos",codigo:"ICI-301",carreraId:14,ciclo:3,creditos:4,docenteId:6,color:"#155e75"},{id:18,nombre:"Análisis Estructural",codigo:"ICI-401",carreraId:14,ciclo:4,creditos:5,docenteId:6,color:"#155e75"},{id:19,nombre:"Diseño en Concreto Armado",codigo:"ICI-601",carreraId:14,ciclo:6,creditos:5,docenteId:6,color:"#155e75"},{id:20,nombre:"Hidráulica e Hidrología",codigo:"ICI-501",carreraId:14,ciclo:5,creditos:4,docenteId:6,color:"#155e75"},{id:21,nombre:"Diseño Arquitectónico I",codigo:"ARQ-101",carreraId:10,ciclo:1,creditos:5,docenteId:20,color:"#92400e"},{id:22,nombre:"Historia de la Arquitectura",codigo:"ARQ-201",carreraId:10,ciclo:2,creditos:3,docenteId:20,color:"#92400e"},{id:23,nombre:"Urbanismo y Planificación",codigo:"ARQ-501",carreraId:10,ciclo:5,creditos:4,docenteId:20,color:"#92400e"},{id:24,nombre:"Diseño de Interiores I",codigo:"ADI-201",carreraId:11,ciclo:2,creditos:5,docenteId:21,color:"#b45309"},{id:25,nombre:"Iluminación y Color en Interiores",codigo:"ADI-401",carreraId:11,ciclo:4,creditos:4,docenteId:21,color:"#b45309"},{id:26,nombre:"Gestión Ambiental",codigo:"IAM-301",carreraId:13,ciclo:3,creditos:4,docenteId:22,color:"#15803d"},{id:27,nombre:"Evaluación de Impacto Ambiental",codigo:"IAM-501",carreraId:13,ciclo:5,creditos:4,docenteId:22,color:"#15803d"},{id:28,nombre:"Tratamiento de Aguas Residuales",codigo:"IAM-401",carreraId:13,ciclo:4,creditos:4,docenteId:22,color:"#15803d"},{id:29,nombre:"Geomecánica",codigo:"IMN-301",carreraId:15,ciclo:3,creditos:4,docenteId:23,color:"#7c3aed"},{id:30,nombre:"Ventilación de Minas",codigo:"IMN-501",carreraId:15,ciclo:5,creditos:4,docenteId:23,color:"#7c3aed"},{id:31,nombre:"Seguridad y Salud Minera",codigo:"IMN-601",carreraId:15,ciclo:6,creditos:4,docenteId:23,color:"#7c3aed"},{id:32,nombre:"Mecánica de Fluidos",codigo:"IMC-301",carreraId:20,ciclo:3,creditos:4,docenteId:24,color:"#1e40af"},{id:33,nombre:"Termodinámica",codigo:"IMC-401",carreraId:20,ciclo:4,creditos:4,docenteId:24,color:"#1e40af"},{id:34,nombre:"Robótica Industrial",codigo:"IMT-501",carreraId:21,ciclo:5,creditos:4,docenteId:25,color:"#06b6d4"},{id:35,nombre:"Control Automático",codigo:"IMT-401",carreraId:21,ciclo:4,creditos:4,docenteId:25,color:"#06b6d4"},{id:36,nombre:"Circuitos Eléctricos I",codigo:"IEL-101",carreraId:17,ciclo:1,creditos:4,docenteId:26,color:"#0e7490"},{id:37,nombre:"Sistemas de Potencia",codigo:"IEL-501",carreraId:17,ciclo:5,creditos:4,docenteId:26,color:"#0e7490"},{id:38,nombre:"Gestión por Procesos",codigo:"IEM-301",carreraId:18,ciclo:3,creditos:4,docenteId:9,color:"#6d28d9"},{id:39,nombre:"Transformación Digital",codigo:"IEM-501",carreraId:18,ciclo:5,creditos:4,docenteId:9,color:"#6d28d9"},{id:40,nombre:"Fundamentos de Administración",codigo:"ADM-101",carreraId:1,ciclo:1,creditos:4,docenteId:7,color:"#4f46e5"},{id:41,nombre:"Comportamiento Organizacional",codigo:"ADM-201",carreraId:1,ciclo:2,creditos:4,docenteId:7,color:"#4f46e5"},{id:42,nombre:"Planeamiento Estratégico",codigo:"ADM-501",carreraId:1,ciclo:5,creditos:4,docenteId:7,color:"#4f46e5"},{id:43,nombre:"Matemática Financiera",codigo:"AFI-201",carreraId:2,ciclo:2,creditos:4,docenteId:8,color:"#4338ca"},{id:44,nombre:"Análisis e Interpretación de EEFF",codigo:"AFI-401",carreraId:2,ciclo:4,creditos:4,docenteId:11,color:"#4338ca"},{id:45,nombre:"Gestión de Inversiones",codigo:"AFI-601",carreraId:2,ciclo:6,creditos:4,docenteId:8,color:"#4338ca"},{id:46,nombre:"Reclutamiento y Selección de Personal",codigo:"AGT-301",carreraId:3,ciclo:3,creditos:4,docenteId:17,color:"#6366f1"},{id:47,nombre:"Capacitación y Desarrollo Organizacional",codigo:"AGT-401",carreraId:3,ciclo:4,creditos:4,docenteId:17,color:"#6366f1"},{id:48,nombre:"Compensaciones y Remuneraciones",codigo:"AGT-501",carreraId:3,ciclo:5,creditos:4,docenteId:17,color:"#6366f1"},{id:49,nombre:"Teoría del Estado y Políticas Públicas",codigo:"AGP-201",carreraId:4,ciclo:2,creditos:4,docenteId:18,color:"#818cf8"},{id:50,nombre:"Contrataciones del Estado",codigo:"AGP-401",carreraId:4,ciclo:4,creditos:4,docenteId:18,color:"#818cf8"},{id:51,nombre:"Gestión Municipal y Regional",codigo:"AGP-501",carreraId:4,ciclo:5,creditos:4,docenteId:18,color:"#818cf8"},{id:52,nombre:"Marketing Estratégico",codigo:"AMK-301",carreraId:5,ciclo:3,creditos:4,docenteId:7,color:"#a5b4fc"},{id:53,nombre:"Comportamiento del Consumidor",codigo:"AMK-401",carreraId:5,ciclo:4,creditos:4,docenteId:7,color:"#a5b4fc"},{id:54,nombre:"Investigación de Mercados",codigo:"AMK-501",carreraId:5,ciclo:5,creditos:4,docenteId:7,color:"#a5b4fc"},{id:55,nombre:"Microeconomía",codigo:"AND-201",carreraId:6,ciclo:2,creditos:4,docenteId:8,color:"#3730a3"},{id:56,nombre:"Marketing Digital",codigo:"AND-301",carreraId:6,ciclo:3,creditos:4,docenteId:7,color:"#3730a3"},{id:57,nombre:"Macroeconomía",codigo:"AND-302",carreraId:6,ciclo:3,creditos:4,docenteId:8,color:"#3730a3"},{id:58,nombre:"E-Commerce y Negocios Digitales",codigo:"AND-401",carreraId:6,ciclo:4,creditos:4,docenteId:7,color:"#3730a3"},{id:59,nombre:"Gestión de Proyectos",codigo:"AND-501",carreraId:6,ciclo:5,creditos:4,docenteId:9,color:"#3730a3"},{id:60,nombre:"Comercio Exterior y Aduanas",codigo:"ANI-301",carreraId:7,ciclo:3,creditos:4,docenteId:19,color:"#312e81"},{id:61,nombre:"Negociación Internacional",codigo:"ANI-401",carreraId:7,ciclo:4,creditos:4,docenteId:19,color:"#312e81"},{id:62,nombre:"Logística Internacional",codigo:"ANI-501",carreraId:7,ciclo:5,creditos:4,docenteId:19,color:"#312e81"},{id:63,nombre:"Contabilidad General",codigo:"COF-101",carreraId:8,ciclo:1,creditos:4,docenteId:10,color:"#dc2626"},{id:64,nombre:"Contabilidad de Costos",codigo:"COF-201",carreraId:8,ciclo:2,creditos:4,docenteId:10,color:"#dc2626"},{id:65,nombre:"Contabilidad Financiera",codigo:"COF-301",carreraId:8,ciclo:3,creditos:4,docenteId:11,color:"#dc2626"},{id:66,nombre:"Auditoría Financiera",codigo:"COF-601",carreraId:8,ciclo:6,creditos:4,docenteId:11,color:"#dc2626"},{id:67,nombre:"Microeconomía Avanzada",codigo:"ECO-301",carreraId:9,ciclo:3,creditos:4,docenteId:8,color:"#b91c1c"},{id:68,nombre:"Econometría",codigo:"ECO-501",carreraId:9,ciclo:5,creditos:4,docenteId:8,color:"#b91c1c"},{id:69,nombre:"Economía Peruana y Regional",codigo:"ECO-401",carreraId:9,ciclo:4,creditos:4,docenteId:8,color:"#b91c1c"},{id:70,nombre:"Introducción al Derecho",codigo:"DER-101",carreraId:29,ciclo:1,creditos:4,docenteId:12,color:"#d97706"},{id:71,nombre:"Derecho Civil I – Acto Jurídico",codigo:"DER-201",carreraId:29,ciclo:2,creditos:4,docenteId:12,color:"#d97706"},{id:72,nombre:"Derecho Constitucional",codigo:"DER-301",carreraId:29,ciclo:3,creditos:4,docenteId:13,color:"#d97706"},{id:73,nombre:"Derecho Penal General",codigo:"DER-302",carreraId:29,ciclo:3,creditos:4,docenteId:13,color:"#d97706"},{id:74,nombre:"Derecho Laboral",codigo:"DER-501",carreraId:29,ciclo:5,creditos:4,docenteId:12,color:"#d97706"},{id:75,nombre:"Anatomía Humana",codigo:"MED-101",carreraId:22,ciclo:1,creditos:6,docenteId:14,color:"#16a34a"},{id:76,nombre:"Histología y Embriología",codigo:"MED-201",carreraId:22,ciclo:2,creditos:5,docenteId:14,color:"#16a34a"},{id:77,nombre:"Bioquímica Médica",codigo:"MED-202",carreraId:22,ciclo:2,creditos:5,docenteId:15,color:"#16a34a"},{id:78,nombre:"Fisiopatología",codigo:"MED-401",carreraId:22,ciclo:4,creditos:5,docenteId:15,color:"#16a34a"},{id:79,nombre:"Farmacología",codigo:"MED-501",carreraId:22,ciclo:5,creditos:5,docenteId:15,color:"#16a34a"},{id:80,nombre:"Fundamentos de Enfermería",codigo:"ENF-101",carreraId:23,ciclo:1,creditos:5,docenteId:27,color:"#15803d"},{id:81,nombre:"Enfermería en Salud del Adulto",codigo:"ENF-301",carreraId:23,ciclo:3,creditos:5,docenteId:27,color:"#15803d"},{id:82,nombre:"Cuidados Intensivos en Enfermería",codigo:"ENF-601",carreraId:23,ciclo:6,creditos:4,docenteId:27,color:"#15803d"},{id:83,nombre:"Anatomía Dental",codigo:"ODO-101",carreraId:24,ciclo:1,creditos:4,docenteId:28,color:"#14532d"},{id:84,nombre:"Odontología Restauradora I",codigo:"ODO-301",carreraId:24,ciclo:3,creditos:5,docenteId:28,color:"#14532d"},{id:85,nombre:"Periodoncia",codigo:"ODO-501",carreraId:24,ciclo:5,creditos:4,docenteId:28,color:"#14532d"},{id:86,nombre:"Química Orgánica Farmacéutica",codigo:"FAB-201",carreraId:25,ciclo:2,creditos:4,docenteId:29,color:"#047857"},{id:87,nombre:"Farmacotecnia",codigo:"FAB-401",carreraId:25,ciclo:4,creditos:5,docenteId:29,color:"#047857"},{id:88,nombre:"Bioquímica Clínica",codigo:"FAB-501",carreraId:25,ciclo:5,creditos:4,docenteId:29,color:"#047857"},{id:89,nombre:"Biomecánica y Kinesiología",codigo:"TMT-201",carreraId:26,ciclo:2,creditos:4,docenteId:30,color:"#065f46"},{id:90,nombre:"Fisioterapia Musculoesquelética",codigo:"TMT-401",carreraId:26,ciclo:4,creditos:5,docenteId:30,color:"#065f46"},{id:91,nombre:"Electroterapia y Agentes Físicos",codigo:"TMT-501",carreraId:26,ciclo:5,creditos:4,docenteId:30,color:"#065f46"},{id:92,nombre:"Hematología Clínica",codigo:"TML-301",carreraId:27,ciclo:3,creditos:4,docenteId:31,color:"#0f766e"},{id:93,nombre:"Microbiología Clínica",codigo:"TML-401",carreraId:27,ciclo:4,creditos:5,docenteId:31,color:"#0f766e"},{id:94,nombre:"Radiología Convencional",codigo:"TMR-201",carreraId:28,ciclo:2,creditos:4,docenteId:32,color:"#134e4a"},{id:95,nombre:"Tomografía Computarizada",codigo:"TMR-501",carreraId:28,ciclo:5,creditos:4,docenteId:32,color:"#134e4a"},{id:96,nombre:"Psicología General",codigo:"PSI-101",carreraId:30,ciclo:1,creditos:4,docenteId:16,color:"#7c3aed"},{id:97,nombre:"Neurociencias y Conducta",codigo:"PSI-201",carreraId:30,ciclo:2,creditos:4,docenteId:16,color:"#7c3aed"},{id:98,nombre:"Psicología del Desarrollo",codigo:"PSI-301",carreraId:30,ciclo:3,creditos:4,docenteId:16,color:"#7c3aed"},{id:99,nombre:"Psicología Clínica",codigo:"PSI-501",carreraId:30,ciclo:5,creditos:4,docenteId:16,color:"#7c3aed"},{id:100,nombre:"Teoría de la Comunicación",codigo:"CCC-101",carreraId:31,ciclo:1,creditos:4,docenteId:33,color:"#be185d"},{id:101,nombre:"Periodismo Digital",codigo:"CCC-301",carreraId:31,ciclo:3,creditos:4,docenteId:33,color:"#be185d"},{id:102,nombre:"Comunicación Corporativa",codigo:"CCC-501",carreraId:31,ciclo:5,creditos:4,docenteId:33,color:"#be185d"},{id:103,nombre:"Tecnología Educativa",codigo:"EIA-201",carreraId:32,ciclo:2,creditos:4,docenteId:34,color:"#9d174d"},{id:104,nombre:"Diseño Instruccional Digital",codigo:"EIA-401",carreraId:32,ciclo:4,creditos:4,docenteId:34,color:"#9d174d"},{id:105,nombre:"Gamificación en el Aprendizaje",codigo:"EIA-501",carreraId:32,ciclo:5,creditos:4,docenteId:34,color:"#9d174d"}],mr=[{id:1,titulo:"Resumen: Complejidad de Algoritmos",cursoId:6,docenteId:1,tipo:"Resumen",semana:4,descargas:312,likes:118,vistas:890,autor:"Estudiante UC",premium:!1,fecha:"2026-04-08",previewImg:A.algoritmos,descripcion:"Análisis de complejidad temporal y espacial con notación Big-O. Incluye ejemplos prácticos de algoritmos de búsqueda y ordenamiento con tablas comparativas.",temas:["Big-O","Complejidad temporal","Algoritmos de búsqueda","Quicksort","Mergesort"],archivos:[{nombre:"Resumen_Complejidad_Algoritmos.pdf",tipo:"pdf",tamaño:"1.2 MB",paginas:8,url:N.algoritmos},{nombre:"Tablas_Comparativas.xlsx",tipo:"excel",tamaño:"340 KB",hojas:3,url:null},{nombre:"Capturas_ejercicios.zip",tipo:"zip",tamaño:"2.1 MB",archivos:12,url:null}]},{id:2,titulo:"Guía: SQL Avanzado con Ejercicios",cursoId:5,docenteId:2,tipo:"Guía",semana:5,descargas:278,likes:95,vistas:740,autor:"Estudiante UC",premium:!0,fecha:"2026-04-15",previewImg:A.sql,descripcion:"Guía completa de SQL avanzado: JOINs, subconsultas, funciones de ventana, índices y optimización de consultas. 25 ejercicios resueltos paso a paso.",temas:["JOINs","Subconsultas","Funciones de ventana","Índices","Optimización"],archivos:[{nombre:"Guia_SQL_Avanzado.pdf",tipo:"pdf",tamaño:"3.4 MB",paginas:45,url:N.bd},{nombre:"Ejercicios_SQL.docx",tipo:"word",tamaño:"890 KB",paginas:18,url:null},{nombre:"Scripts_SQL_Ejercicios.zip",tipo:"zip",tamaño:"56 KB",archivos:25,url:null},{nombre:"Esquemas_ER_Diagramas.png",tipo:"imagen",tamaño:"1.8 MB",dimensiones:"3200×2400",url:"https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&q=90"}]},{id:3,titulo:"Mapa conceptual: Patrones de Diseño GoF",cursoId:7,docenteId:1,tipo:"Mapa",semana:6,descargas:201,likes:74,vistas:520,autor:"Estudiante UC",premium:!1,fecha:"2026-04-20",previewImg:A.software,descripcion:"Los 23 patrones de diseño GoF clasificados en Creacionales, Estructurales y de Comportamiento. Ejemplos en Java y Python.",temas:["Patrones GoF","Singleton","Factory","Observer","Decorator"],archivos:[{nombre:"Mapa_Patrones_Diseño.pdf",tipo:"pdf",tamaño:"2.1 MB",paginas:12,url:N.algoritmos},{nombre:"Diagrama_Patrones.png",tipo:"imagen",tamaño:"4.2 MB",dimensiones:"5000×3500",url:"https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=1200&q=90"},{nombre:"Slides_Patrones.pptx",tipo:"ppt",tamaño:"5.6 MB",diapositivas:32,url:null}]},{id:4,titulo:"Apuntes: Ciberseguridad – OWASP Top 10",cursoId:10,docenteId:3,tipo:"Apunte",semana:5,descargas:265,likes:99,vistas:730,autor:"Estudiante UC",premium:!1,fecha:"2026-04-22",previewImg:A.ciberseguridad,descripcion:"Resumen de las 10 vulnerabilidades más críticas según OWASP 2024. Ejemplos de ataques reales y contramedidas para cada categoría.",temas:["Inyección SQL","XSS","CSRF","Autenticación rota","OWASP"],archivos:[{nombre:"OWASP_Top10_Resumen.pdf",tipo:"pdf",tamaño:"2.8 MB",paginas:20,url:N.ciberseguridad},{nombre:"Checklist_Seguridad.xlsx",tipo:"excel",tamaño:"180 KB",hojas:3,url:null},{nombre:"Demo_Ataques.zip",tipo:"zip",tamaño:"3.4 MB",archivos:8,url:null}]},{id:5,titulo:"Apuntes: Cálculo Integral – Semana 3",cursoId:11,docenteId:4,tipo:"Apunte",semana:3,descargas:389,likes:142,vistas:1100,autor:"Estudiante UC",premium:!1,fecha:"2026-03-28",previewImg:A.calculo,descripcion:"Apuntes manuscritos digitalizados + resumen tipado. Cubre integrales indefinidas y técnicas de integración con 30 ejercicios resueltos.",temas:["Integrales indefinidas","Sustitución","Integración por partes","Fracciones parciales"],archivos:[{nombre:"Apuntes_Calculo_S3.pdf",tipo:"pdf",tamaño:"5.8 MB",paginas:22,url:N.calculo},{nombre:"Ejercicios_Resueltos_S3.docx",tipo:"word",tamaño:"1.2 MB",paginas:14,url:null},{nombre:"Tabla_Integrales.png",tipo:"imagen",tamaño:"980 KB",dimensiones:"2480×3508",url:"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=90"}]},{id:6,titulo:"Resumen ejecutivo: Investigación Operativa",cursoId:13,docenteId:4,tipo:"Resumen",semana:7,descargas:245,likes:89,vistas:670,autor:"Estudiante UC",premium:!1,fecha:"2026-04-25",previewImg:A.estadistica,descripcion:"Modelos de IO: Programación Lineal, Simplex, Transporte, Asignación y Redes. Plantillas Excel resolubles directamente.",temas:["Programación Lineal","Método Simplex","Modelo de Transporte","Asignación"],archivos:[{nombre:"Resumen_IO_Completo.pdf",tipo:"pdf",tamaño:"2.8 MB",paginas:30,url:N.manufactura},{nombre:"Plantilla_Simplex.xlsx",tipo:"excel",tamaño:"245 KB",hojas:5,url:null},{nombre:"Plantilla_Transporte.xlsx",tipo:"excel",tamaño:"180 KB",hojas:3,url:null},{nombre:"Slides_IO_Clase.pptx",tipo:"ppt",tamaño:"4.1 MB",diapositivas:48,url:null}]},{id:7,titulo:"Guía: Logística y Cadena de Suministro",cursoId:16,docenteId:5,tipo:"Guía",semana:6,descargas:198,likes:73,vistas:560,autor:"Estudiante UC",premium:!1,fecha:"2026-04-30",previewImg:A.produccion,descripcion:"Modelos de inventario EOQ y POQ, gestión de almacenes, indicadores KPI logísticos y casos peruanos de Supply Chain.",temas:["EOQ","POQ","Gestión de almacenes","KPI logísticos","SCM"],archivos:[{nombre:"Guia_Logistica_SCM.pdf",tipo:"pdf",tamaño:"3.2 MB",paginas:36,url:N.logistica},{nombre:"Plantilla_EOQ.xlsx",tipo:"excel",tamaño:"210 KB",hojas:4,url:null},{nombre:"Casos_Empresas_Peru.docx",tipo:"word",tamaño:"680 KB",paginas:12,url:null}]},{id:8,titulo:"Esquema: Análisis Estructural – Vigas",cursoId:18,docenteId:6,tipo:"Esquema",semana:5,descargas:167,likes:63,vistas:430,autor:"Estudiante UC",premium:!0,fecha:"2026-04-18",previewImg:A.estructuras,descripcion:"Análisis de vigas simplemente apoyadas y en voladizo. Diagramas de fuerza cortante y momento flector con procedimiento paso a paso.",temas:["Vigas simplemente apoyadas","Voladizo","Fuerza cortante","Momento flector","SAP2000"],archivos:[{nombre:"Esquema_Vigas_Completo.pdf",tipo:"pdf",tamaño:"4.5 MB",paginas:28,url:N.estructuras},{nombre:"Diagramas_Vigas.png",tipo:"imagen",tamaño:"6.2 MB",dimensiones:"4000×2800",url:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=90"},{nombre:"Modelo_SAP2000.zip",tipo:"zip",tamaño:"1.4 MB",archivos:6,url:null}]},{id:9,titulo:"Apuntes: Hidráulica – Flujo en Canales",cursoId:20,docenteId:6,tipo:"Apunte",semana:4,descargas:145,likes:54,vistas:390,autor:"Estudiante UC",premium:!1,fecha:"2026-05-02",previewImg:A.construccion,descripcion:"Flujo uniforme en canales, ecuación de Manning, perfil hidráulico y estructuras de control. Casos aplicados a la sierra peruana.",temas:["Ecuación de Manning","Flujo uniforme","Canal trapezoidal","Perfil hidráulico"],archivos:[{nombre:"Hidraulica_Canales.pdf",tipo:"pdf",tamaño:"3.1 MB",paginas:26,url:N.agua},{nombre:"Plantilla_Manning.xlsx",tipo:"excel",tamaño:"165 KB",hojas:3,url:null},{nombre:"Ejercicios_Canales.docx",tipo:"word",tamaño:"480 KB",paginas:10,url:null}]},{id:10,titulo:"Guía: Historia de la Arquitectura Peruana",cursoId:22,docenteId:20,tipo:"Guía",semana:3,descargas:178,likes:65,vistas:490,autor:"Estudiante UC",premium:!1,fecha:"2026-04-10",previewImg:A.arquitectura,descripcion:"Evolución arquitectónica del Perú: épocas preincaica, inca, colonial, republicana y contemporánea. Análisis de obras clave con planos.",temas:["Arquitectura inca","Colonial","Republicana","Modernismo peruano","Casos de estudio"],archivos:[{nombre:"Historia_Arq_Peruana.pdf",tipo:"pdf",tamaño:"5.2 MB",paginas:44,url:N.generico},{nombre:"Fotografia_Obras.zip",tipo:"zip",tamaño:"18 MB",archivos:35,url:null},{nombre:"Linea_Tiempo_Arq.png",tipo:"imagen",tamaño:"4.8 MB",dimensiones:"6000×2400",url:"https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=90"}]},{id:11,titulo:"Apuntes: Diseño de Interiores – Ergonomía",cursoId:25,docenteId:21,tipo:"Apunte",semana:4,descargas:132,likes:49,vistas:360,autor:"Estudiante UC",premium:!1,fecha:"2026-04-28",previewImg:A.diseno_interiores,descripcion:"Principios ergonómicos aplicados al diseño de interiores: dimensiones humanas, circulación, accesibilidad universal y norma A.120.",temas:["Ergonomía","Antropometría","Accesibilidad","Normativa A.120","Neufert"],archivos:[{nombre:"Ergonomia_Interiores.pdf",tipo:"pdf",tamaño:"4.1 MB",paginas:32,url:N.generico2},{nombre:"Dimensiones_Neufert.xlsx",tipo:"excel",tamaño:"290 KB",hojas:5,url:null},{nombre:"Moodboard_Referencia.png",tipo:"imagen",tamaño:"5.6 MB",dimensiones:"4000×3000",url:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=90"}]},{id:12,titulo:"Guía: Evaluación de Impacto Ambiental",cursoId:27,docenteId:22,tipo:"Guía",semana:5,descargas:189,likes:70,vistas:510,autor:"Estudiante UC",premium:!1,fecha:"2026-04-20",previewImg:A.ambiental,descripcion:"Marco legal de la EIA en Perú. Matrices de Leopold e índice de Battelle. Caso práctico de proyecto minero en Junín.",temas:["EIA","Matriz de Leopold","Legislación ambiental peruana","SENACE","Línea base"],archivos:[{nombre:"Guia_EIA_Peru.pdf",tipo:"pdf",tamaño:"4.6 MB",paginas:50,url:N.ambiental},{nombre:"Matriz_Leopold.xlsx",tipo:"excel",tamaño:"320 KB",hojas:4,url:null},{nombre:"Caso_Practico_Junin.docx",tipo:"word",tamaño:"760 KB",paginas:18,url:null}]},{id:13,titulo:"Resumen: Geomecánica – Clasificación RMR",cursoId:29,docenteId:23,tipo:"Resumen",semana:4,descargas:156,likes:58,vistas:420,autor:"Estudiante UC",premium:!1,fecha:"2026-04-15",previewImg:A.minas,descripcion:"Clasificación geomecánica RMR de Bieniawski y Q de Barton. Aplicación en diseño de sostenimiento de labores subterráneas.",temas:["RMR","Q de Barton","Sostenimiento","Macizo rocoso","Túneles"],archivos:[{nombre:"Geomecanica_RMR.pdf",tipo:"pdf",tamaño:"3.5 MB",paginas:30,url:N.mineria},{nombre:"Tablas_Clasificacion.xlsx",tipo:"excel",tamaño:"220 KB",hojas:3,url:null},{nombre:"Slides_Geomecanica.pptx",tipo:"ppt",tamaño:"6.1 MB",diapositivas:40,url:null}]},{id:14,titulo:"Guía: Marketing Digital – Métricas KPI",cursoId:56,docenteId:7,tipo:"Guía",semana:4,descargas:334,likes:126,vistas:960,autor:"Estudiante UC",premium:!1,fecha:"2026-04-10",previewImg:A.marketing,descripcion:"KPIs más importantes: CAC, LTV, ROAS, CTR, CPC. Plantilla de dashboard en Excel y casos reales de empresas peruanas.",temas:["KPIs","CAC","ROAS","Google Analytics 4","Meta Ads","Dashboard"],archivos:[{nombre:"Guia_KPIs_Marketing.pdf",tipo:"pdf",tamaño:"2.2 MB",paginas:24,url:N.marketing},{nombre:"Dashboard_KPIs.xlsx",tipo:"excel",tamaño:"560 KB",hojas:6,url:null},{nombre:"Presentacion_Clase.pptx",tipo:"ppt",tamaño:"8.3 MB",diapositivas:40,url:null},{nombre:"Infografia_KPIs.png",tipo:"imagen",tamaño:"2.4 MB",dimensiones:"3508×4961",url:"https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=90"}]},{id:15,titulo:"Resumen: Microeconomía – Elasticidad",cursoId:55,docenteId:8,tipo:"Resumen",semana:5,descargas:289,likes:104,vistas:820,autor:"Estudiante UC",premium:!1,fecha:"2026-04-12",previewImg:A.economia,descripcion:"Elasticidad precio, ingreso y cruzada de la demanda. Fórmulas, interpretación económica y ejercicios tipo examen.",temas:["Elasticidad precio","Elasticidad ingreso","Elasticidad cruzada","Bienes Giffen"],archivos:[{nombre:"Resumen_Elasticidad.pdf",tipo:"pdf",tamaño:"1.8 MB",paginas:16,url:N.economia},{nombre:"Ejercicios_Elasticidad.docx",tipo:"word",tamaño:"720 KB",paginas:12,url:null},{nombre:"Graficas_Elasticidad.png",tipo:"imagen",tamaño:"1.1 MB",dimensiones:"2000×1500",url:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=90"}]},{id:16,titulo:"Mapa: E-Commerce – Modelos de Negocio",cursoId:58,docenteId:7,tipo:"Mapa",semana:3,descargas:198,likes:71,vistas:540,autor:"Estudiante UC",premium:!1,fecha:"2026-04-05",previewImg:A.ecommerce,descripcion:"Comparativa de modelos B2B, B2C, C2C y D2C. Casos de éxito peruanos y latinoamericanos. Canvas de modelo de negocio editable.",temas:["B2B","B2C","C2C","Marketplace","Business Model Canvas"],archivos:[{nombre:"Mapa_Ecommerce.pdf",tipo:"pdf",tamaño:"3.1 MB",paginas:18,url:N.gestion},{nombre:"Business_Canvas_Editable.pptx",tipo:"ppt",tamaño:"2.4 MB",diapositivas:10,url:null},{nombre:"Comparativa_Modelos.xlsx",tipo:"excel",tamaño:"290 KB",hojas:4,url:null}]},{id:17,titulo:"Guía: Reclutamiento y Selección 2.0",cursoId:46,docenteId:17,tipo:"Guía",semana:4,descargas:167,likes:62,vistas:470,autor:"Estudiante UC",premium:!1,fecha:"2026-04-18",previewImg:A.rrhh,descripcion:"Proceso de reclutamiento digital: LinkedIn Recruiter, ATS, entrevistas por competencias y assessment centers. Formatos editables.",temas:["LinkedIn Recruiter","ATS","Entrevista por competencias","Assessment center","Employer branding"],archivos:[{nombre:"Reclutamiento_Digital.pdf",tipo:"pdf",tamaño:"2.4 MB",paginas:28,url:N.rrhh},{nombre:"Formato_Entrevista.docx",tipo:"word",tamaño:"340 KB",paginas:4,url:null},{nombre:"Rubrica_Competencias.xlsx",tipo:"excel",tamaño:"190 KB",hojas:3,url:null}]},{id:18,titulo:"Resumen: Contrataciones del Estado – OSCE",cursoId:50,docenteId:18,tipo:"Resumen",semana:5,descargas:142,likes:53,vistas:400,autor:"Estudiante UC",premium:!1,fecha:"2026-04-22",previewImg:A.gestion_publica,descripcion:"Ley N° 30225 y su reglamento. Procedimientos clásicos de selección: licitación, concurso público, adjudicación simplificada y comparación de precios.",temas:["Ley 30225","Licitación pública","OSCE","SEACE","Adjudicación simplificada"],archivos:[{nombre:"Contrataciones_Estado.pdf",tipo:"pdf",tamaño:"2.8 MB",paginas:32,url:N.gestion},{nombre:"Flujograma_Procesos.pptx",tipo:"ppt",tamaño:"3.6 MB",diapositivas:24,url:null},{nombre:"Resumen_Ley30225.docx",tipo:"word",tamaño:"420 KB",paginas:8,url:null}]},{id:19,titulo:"Guía: Incoterms 2020 y Comercio Exterior",cursoId:60,docenteId:19,tipo:"Guía",semana:3,descargas:245,likes:89,vistas:680,autor:"Estudiante UC",premium:!1,fecha:"2026-04-08",previewImg:A.negocios_int,descripcion:"Los 11 Incoterms 2020 explicados con ejemplos prácticos, reparto de costos y riesgos. Casos de exportación desde Perú.",temas:["Incoterms 2020","EXW","FOB","CIF","DAP","DDP","Exportación"],archivos:[{nombre:"Guia_Incoterms_2020.pdf",tipo:"pdf",tamaño:"2.6 MB",paginas:24,url:N.comercio_int},{nombre:"Tabla_Incoterms.xlsx",tipo:"excel",tamaño:"210 KB",hojas:3,url:null},{nombre:"Mapa_Incoterms.png",tipo:"imagen",tamaño:"3.2 MB",dimensiones:"4961×3508",url:"https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=90"}]},{id:20,titulo:"Apuntes: Plan de Cuentas PCGE Comentado",cursoId:63,docenteId:10,tipo:"Apunte",semana:2,descargas:412,likes:157,vistas:1230,autor:"Estudiante UC",premium:!1,fecha:"2026-03-30",previewImg:A.contabilidad,descripcion:"Plan de Cuentas del PCGE con ejemplos de asientos contables para cada cuenta principal. Comparativa con NIIF y casos prácticos.",temas:["PCGE","Activos","Pasivos","Patrimonio","NIIF","Asientos contables"],archivos:[{nombre:"Plan_Cuentas_PCGE.pdf",tipo:"pdf",tamaño:"4.8 MB",paginas:62,url:N.contabilidad},{nombre:"Plan_Cuentas_Resumido.xlsx",tipo:"excel",tamaño:"410 KB",hojas:8,url:null},{nombre:"Asientos_Ejemplos.docx",tipo:"word",tamaño:"1.4 MB",paginas:25,url:null}]},{id:21,titulo:"Guía: Análisis e Interpretación de EEFF",cursoId:44,docenteId:11,tipo:"Guía",semana:5,descargas:198,likes:74,vistas:580,autor:"Estudiante UC",premium:!1,fecha:"2026-04-24",previewImg:A.finanzas,descripcion:"Ratios financieros de liquidez, rentabilidad, solvencia y gestión. Análisis vertical, horizontal y Du Pont con caso empresa peruana.",temas:["Ratios financieros","Análisis vertical","Du Pont","Liquidez","ROE"],archivos:[{nombre:"Analisis_EEFF.pdf",tipo:"pdf",tamaño:"3.2 MB",paginas:36,url:N.finanzas},{nombre:"Plantilla_Ratios.xlsx",tipo:"excel",tamaño:"480 KB",hojas:6,url:null},{nombre:"Caso_Empresa_Peru.docx",tipo:"word",tamaño:"560 KB",paginas:10,url:null}]},{id:22,titulo:"Resumen: Acto Jurídico y Nulidades",cursoId:71,docenteId:12,tipo:"Resumen",semana:5,descargas:223,likes:82,vistas:610,autor:"Estudiante UC",premium:!1,fecha:"2026-04-14",previewImg:A.derecho,descripcion:"Libro II del Código Civil peruano: vicios de la voluntad, simulación, nulidad vs anulabilidad. Jurisprudencia del TC.",temas:["Acto jurídico","Vicios del consentimiento","Nulidad","Anulabilidad"],archivos:[{nombre:"Resumen_Acto_Juridico.pdf",tipo:"pdf",tamaño:"2.4 MB",paginas:28,url:N.derecho},{nombre:"Cuadro_Nulidades.docx",tipo:"word",tamaño:"560 KB",paginas:8,url:null},{nombre:"Jurisprudencia_TC.pdf",tipo:"pdf",tamaño:"1.8 MB",paginas:15,url:N.derechos_hum}]},{id:23,titulo:"Esquema: Derechos Fundamentales – Art. 2",cursoId:72,docenteId:13,tipo:"Esquema",semana:4,descargas:178,likes:67,vistas:490,autor:"Estudiante UC",premium:!1,fecha:"2026-04-08",previewImg:A.derecho2,descripcion:"Artículo 2° de la Constitución Política del Perú sistematizado. Derechos fundamentales clasificados con sentencias del TC.",temas:["Constitución Política","Derechos fundamentales","Tribunal Constitucional"],archivos:[{nombre:"Esquema_Art2_Constitucion.pdf",tipo:"pdf",tamaño:"2.0 MB",paginas:20,url:N.derecho},{nombre:"Mapa_Derechos.png",tipo:"imagen",tamaño:"3.4 MB",dimensiones:"4961×3508",url:"https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=90"},{nombre:"Sentencias_TC_Clave.pdf",tipo:"pdf",tamaño:"3.1 MB",paginas:35,url:N.derechos_hum}]},{id:24,titulo:"Resumen: Derecho Laboral – Beneficios Sociales",cursoId:74,docenteId:12,tipo:"Resumen",semana:8,descargas:145,likes:54,vistas:420,autor:"Estudiante UC",premium:!1,fecha:"2026-05-02",previewImg:A.derecho,descripcion:"Beneficios sociales en el régimen laboral peruano: CTS, gratificaciones, vacaciones, utilidades y ESSALUD. Calculadora en Excel.",temas:["CTS","Gratificaciones","Vacaciones truncas","ESSALUD","AFP vs ONP"],archivos:[{nombre:"Resumen_Beneficios_Laborales.pdf",tipo:"pdf",tamaño:"1.6 MB",paginas:18,url:N.derecho},{nombre:"Calculadora_CTS_Gratif.xlsx",tipo:"excel",tamaño:"310 KB",hojas:5,url:null},{nombre:"Cuadro_Comparativo_Regimenes.docx",tipo:"word",tamaño:"480 KB",paginas:6,url:null}]},{id:25,titulo:"Apuntes: Anatomía – Sistema Nervioso",cursoId:75,docenteId:14,tipo:"Apunte",semana:7,descargas:498,likes:191,vistas:1450,autor:"Estudiante UC",premium:!1,fecha:"2026-04-18",previewImg:A.anatomia,descripcion:"Sistema nervioso central y periférico: neuroanatomía, vías sensitivas y motoras, pares craneales. Imágenes de atlas con anotaciones.",temas:["SNC","SNP","Pares craneales","Vías sensitivas","Neuroanatomía"],archivos:[{nombre:"Anatomia_SN_Apuntes.pdf",tipo:"pdf",tamaño:"8.2 MB",paginas:54,url:N.medicina},{nombre:"Esquema_Pares_Craneales.png",tipo:"imagen",tamaño:"5.6 MB",dimensiones:"5000×3500",url:"https://images.unsplash.com/photo-1530210124550-912dc1381cb8?w=1200&q=90"},{nombre:"Flashcards_Neuroanatomia.pptx",tipo:"ppt",tamaño:"14.3 MB",diapositivas:80,url:null}]},{id:26,titulo:"Guía ilustrada: Histología – Tejidos Básicos",cursoId:76,docenteId:14,tipo:"Guía",semana:6,descargas:367,likes:139,vistas:1080,autor:"Estudiante UC",premium:!0,fecha:"2026-04-28",previewImg:A.histologia,descripcion:"Los 4 tejidos básicos con microfotografías de microscopio óptico y electrónico. 43 imágenes anotadas para práctica de identificación.",temas:["Tejido epitelial","Tejido conectivo","Tejido muscular","Tejido nervioso"],archivos:[{nombre:"Guia_Histologia_Tejidos.pdf",tipo:"pdf",tamaño:"45 MB",paginas:68,url:N.medicina},{nombre:"Microfotografias_Pack.zip",tipo:"zip",tamaño:"120 MB",archivos:43,url:null},{nombre:"Flashcards_Histologia.pptx",tipo:"ppt",tamaño:"18.4 MB",diapositivas:86,url:null}]},{id:27,titulo:"Guía: Farmacología – Antimicrobianos",cursoId:79,docenteId:15,tipo:"Guía",semana:6,descargas:423,likes:162,vistas:1290,autor:"Estudiante UC",premium:!0,fecha:"2026-04-30",previewImg:A.farmacologia,descripcion:"Antimicrobianos: mecanismos de acción, espectro, resistencia bacteriana y uso clínico. Clasificación por familias con dosis habituales.",temas:["Betalactámicos","Macrólidos","Fluoroquinolonas","Resistencia bacteriana"],archivos:[{nombre:"Guia_Antimicrobianos.pdf",tipo:"pdf",tamaño:"6.8 MB",paginas:74,url:N.farmacologia},{nombre:"Tabla_Antibioticos.xlsx",tipo:"excel",tamaño:"520 KB",hojas:6,url:null},{nombre:"Flashcards_Farma.pptx",tipo:"ppt",tamaño:"10.2 MB",diapositivas:64,url:null},{nombre:"Mapa_Mecanismos_Accion.png",tipo:"imagen",tamaño:"4.8 MB",dimensiones:"5000×3500",url:"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=90"}]},{id:28,titulo:"Apuntes: Proceso de Atención de Enfermería (PAE)",cursoId:81,docenteId:27,tipo:"Apunte",semana:3,descargas:312,likes:118,vistas:890,autor:"Estudiante UC",premium:!1,fecha:"2026-04-12",previewImg:A.enfermeria,descripcion:"Las 5 etapas del PAE: valoración, diagnóstico NANDA, planificación, ejecución y evaluación. Casos clínicos resueltos.",temas:["PAE","Diagnóstico NANDA","Taxonomía II","Cuidados de enfermería","NIC/NOC"],archivos:[{nombre:"PAE_Completo.pdf",tipo:"pdf",tamaño:"3.8 MB",paginas:40,url:N.salud_publica},{nombre:"Diagnosticos_NANDA.xlsx",tipo:"excel",tamaño:"380 KB",hojas:5,url:null},{nombre:"Casos_Clinicos_ENF.docx",tipo:"word",tamaño:"640 KB",paginas:15,url:null}]},{id:29,titulo:"Guía: Anatomía Dental y Morfología",cursoId:83,docenteId:28,tipo:"Guía",semana:2,descargas:256,likes:94,vistas:740,autor:"Estudiante UC",premium:!1,fecha:"2026-04-06",previewImg:A.odontologia,descripcion:"Morfología de los 32 dientes permanentes y 20 deciduos. Características macroscópicas, ángulos y facetas con fotografías clínicas.",temas:["Morfología dental","Dientes permanentes","Dentición decidua","Incisivos","Molares"],archivos:[{nombre:"Anatomia_Dental.pdf",tipo:"pdf",tamaño:"12.4 MB",paginas:86,url:N.medicina},{nombre:"Atlas_Morfologia.zip",tipo:"zip",tamaño:"45 MB",archivos:64,url:null},{nombre:"Cuadro_Caracteristicas.xlsx",tipo:"excel",tamaño:"310 KB",hojas:4,url:null},{nombre:"Foto_Modelos_Yeso.png",tipo:"imagen",tamaño:"4.2 MB",dimensiones:"3508×2480",url:"https://images.unsplash.com/photo-1588776814546-1ffbb5d7d2a6?w=1200&q=90"}]},{id:30,titulo:"Apuntes: Farmacotecnia – Formas Farmacéuticas",cursoId:87,docenteId:29,tipo:"Apunte",semana:4,descargas:189,likes:69,vistas:530,autor:"Estudiante UC",premium:!1,fecha:"2026-04-20",previewImg:A.farmacia,descripcion:"Formas farmacéuticas sólidas, líquidas y semisólidas. Procesos de fabricación, controles de calidad y biofarmacia.",temas:["Comprimidos","Cápsulas","Emulsiones","Cremas","BPM"],archivos:[{nombre:"Formas_Farmaceuticas.pdf",tipo:"pdf",tamaño:"5.6 MB",paginas:60,url:N.farmacologia},{nombre:"Controles_Calidad.xlsx",tipo:"excel",tamaño:"290 KB",hojas:4,url:null},{nombre:"Slides_BPM.pptx",tipo:"ppt",tamaño:"7.2 MB",diapositivas:48,url:null}]},{id:31,titulo:"Guía: Biomecánica de la Columna Vertebral",cursoId:89,docenteId:30,tipo:"Guía",semana:5,descargas:178,likes:65,vistas:490,autor:"Estudiante UC",premium:!1,fecha:"2026-04-18",previewImg:A.terapia_fisica,descripcion:"Anatomía funcional de la columna, biomecánica del movimiento espinal, patologías frecuentes y protocolos de rehabilitación fisioterapéutica.",temas:["Columna vertebral","Biomecánica","Lumbalgia","Hernias discales","Rehabilitación"],archivos:[{nombre:"Biomecanica_Columna.pdf",tipo:"pdf",tamaño:"4.2 MB",paginas:44,url:N.terapia_fisica_p},{nombre:"Protocolos_Rehab.docx",tipo:"word",tamaño:"580 KB",paginas:16,url:null},{nombre:"Imagenes_Columna.png",tipo:"imagen",tamaño:"3.8 MB",dimensiones:"3508×4961",url:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=90"}]},{id:32,titulo:"Resumen: Hematología – Interpretación del Hemograma",cursoId:92,docenteId:31,tipo:"Resumen",semana:4,descargas:234,likes:87,vistas:670,autor:"Estudiante UC",premium:!1,fecha:"2026-04-15",previewImg:A.laboratorio,descripcion:"Valores de referencia del hemograma completo. Interpretación de anemias, leucocitosis, trombocitopenia y morfología eritrocitaria.",temas:["Hemograma","Anemias","Leucocitosis","Morfología eritrocitaria","VCM/HCM"],archivos:[{nombre:"Interpretacion_Hemograma.pdf",tipo:"pdf",tamaño:"2.8 MB",paginas:28,url:N.bioquimica},{nombre:"Tabla_Valores_Ref.xlsx",tipo:"excel",tamaño:"160 KB",hojas:3,url:null},{nombre:"Casos_Clinicos_Hema.docx",tipo:"word",tamaño:"540 KB",paginas:12,url:null}]},{id:33,titulo:"Apuntes: Radiología – Física de los Rayos X",cursoId:94,docenteId:32,tipo:"Apunte",semana:2,descargas:145,likes:54,vistas:400,autor:"Estudiante UC",premium:!1,fecha:"2026-04-08",previewImg:A.radiologia,descripcion:"Producción de rayos X, interacción con la materia, formación de imagen y protección radiológica. Normativa IPEN y OIEA.",temas:["Tubo de rayos X","kV y mAs","Radioprotección","IPEN","Dosis absorbida"],archivos:[{nombre:"Fisica_RayosX.pdf",tipo:"pdf",tamaño:"3.6 MB",paginas:36,url:N.radiologia_img},{nombre:"Imagenes_Equipos.png",tipo:"imagen",tamaño:"4.1 MB",dimensiones:"3508×2480",url:"https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1200&q=90"},{nombre:"Tabla_Radioproteccion.xlsx",tipo:"excel",tamaño:"190 KB",hojas:3,url:null}]},{id:34,titulo:"Mapa: Psicología del Desarrollo – Piaget vs Vygotsky",cursoId:98,docenteId:16,tipo:"Mapa",semana:5,descargas:201,likes:76,vistas:580,autor:"Estudiante UC",premium:!1,fecha:"2026-04-20",previewImg:A.psicologia,descripcion:"Estadios del desarrollo cognitivo según Piaget vs Vygotsky. Comparativa de teorías y aplicaciones en educación.",temas:["Piaget","Vygotsky","Estadios cognitivos","ZDP","Constructivismo"],archivos:[{nombre:"Mapa_Piaget_Vygotsky.pdf",tipo:"pdf",tamaño:"2.8 MB",paginas:22,url:N.psicologia},{nombre:"Infografia_Etapas.png",tipo:"imagen",tamaño:"3.2 MB",dimensiones:"4961×3508",url:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=90"},{nombre:"Comparativa_Teorias.docx",tipo:"word",tamaño:"680 KB",paginas:10,url:null}]},{id:35,titulo:"Resumen: Neurociencias – Plasticidad Neural",cursoId:97,docenteId:16,tipo:"Resumen",semana:6,descargas:167,likes:63,vistas:470,autor:"Estudiante UC",premium:!1,fecha:"2026-04-26",previewImg:A.neurociencia,descripcion:"Mecanismos de plasticidad sináptica, LTP y LTD. Bases neurales del aprendizaje y la memoria. Aplicaciones terapéuticas y educativas.",temas:["Plasticidad sináptica","LTP","Hipocampo","Neurotransmisores","Aprendizaje neural"],archivos:[{nombre:"Plasticidad_Neural.pdf",tipo:"pdf",tamaño:"3.4 MB",paginas:30,url:N.neurociencia},{nombre:"Esquema_Sinapsis.png",tipo:"imagen",tamaño:"2.8 MB",dimensiones:"3508×2480",url:"https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=90"},{nombre:"Casos_Clinicos_Neuro.docx",tipo:"word",tamaño:"480 KB",paginas:8,url:null}]},{id:36,titulo:"Guía: Periodismo Digital y Fact-Checking",cursoId:101,docenteId:33,tipo:"Guía",semana:4,descargas:145,likes:53,vistas:410,autor:"Estudiante UC",premium:!1,fecha:"2026-04-18",previewImg:A.comunicacion,descripcion:"Herramientas de verificación de noticias: Google Fact Check, TinEye, InVID. Deontología periodística y cobertura de redes sociales.",temas:["Fact-checking","Desinformación","Google Fact Check","Redes sociales","Deontología"],archivos:[{nombre:"Periodismo_Digital.pdf",tipo:"pdf",tamaño:"2.4 MB",paginas:24,url:N.comunicacion},{nombre:"Guia_Fact_Checking.docx",tipo:"word",tamaño:"420 KB",paginas:8,url:null},{nombre:"Herramientas_Verificacion.xlsx",tipo:"excel",tamaño:"180 KB",hojas:2,url:null}]},{id:37,titulo:"Guía: Gamificación en el Aula – Kahoot y Mentimeter",cursoId:105,docenteId:34,tipo:"Guía",semana:3,descargas:134,likes:50,vistas:380,autor:"Estudiante UC",premium:!1,fecha:"2026-04-14",previewImg:A.innovacion_educ,descripcion:"Diseño de actividades gamificadas con Kahoot, Mentimeter, Quizizz y Classcraft. Fundamentos teóricos y casos aplicados en educación superior.",temas:["Gamificación","Kahoot","Quizizz","Mentimeter","Aprendizaje activo"],archivos:[{nombre:"Gamificacion_Aula.pdf",tipo:"pdf",tamaño:"2.8 MB",paginas:28,url:N.educacion_digital},{nombre:"Plantilla_Sesion.pptx",tipo:"ppt",tamaño:"4.6 MB",diapositivas:20,url:null},{nombre:"Rubrica_Gamificacion.docx",tipo:"word",tamaño:"320 KB",paginas:4,url:null}]},{id:38,titulo:"Apuntes: Robótica – Cinemática del Robot",cursoId:34,docenteId:25,tipo:"Apunte",semana:5,descargas:198,likes:74,vistas:560,autor:"Estudiante UC",premium:!1,fecha:"2026-04-22",previewImg:A.mecatronica,descripcion:"Cinemática directa e inversa de robots industriales. Matrices de Denavit-Hartenberg y workspace. Simulación en ROS y MATLAB.",temas:["Denavit-Hartenberg","Cinemática directa","Cinemática inversa","ROS","MATLAB"],archivos:[{nombre:"Cinematica_Robot.pdf",tipo:"pdf",tamaño:"4.2 MB",paginas:38,url:N.generico},{nombre:"Simulacion_MATLAB.zip",tipo:"zip",tamaño:"8.6 MB",archivos:6,url:null},{nombre:"Tablas_DH.xlsx",tipo:"excel",tamaño:"210 KB",hojas:3,url:null}]},{id:39,titulo:"Código: Árboles Binarios en Python",cursoId:6,docenteId:1,tipo:"Código",semana:9,descargas:356,likes:134,vistas:990,autor:"Estudiante UC",premium:!0,fecha:"2026-05-05",previewImg:A.programacion,descripcion:"Implementación completa de BST, AVL y Árbol Rojo-Negro en Python con visualización gráfica. Operaciones con complejidad analizada.",temas:["BST","AVL","Árbol Rojo-Negro","Recorridos","matplotlib"],archivos:[{nombre:"Arboles_Binarios_Python.pdf",tipo:"pdf",tamaño:"3.2 MB",paginas:38,url:N.algoritmos},{nombre:"codigo_arboles.zip",tipo:"zip",tamaño:"48 KB",archivos:8,url:null},{nombre:"Explicacion_AVL.pptx",tipo:"ppt",tamaño:"4.8 MB",diapositivas:28,url:null}]},{id:40,titulo:"Apuntes: Gestión de Proyectos – PMI / PMBOK",cursoId:59,docenteId:9,tipo:"Apunte",semana:3,descargas:189,likes:70,vistas:530,autor:"Estudiante UC",premium:!1,fecha:"2026-04-06",previewImg:A.gestion,descripcion:"Las 10 áreas de conocimiento del PMI y los 5 grupos de procesos. EDT, cronograma, matriz de riesgos y acta de constitución.",temas:["PMI","PMBOK","EDT","Gestión de riesgos","Cronograma"],archivos:[{nombre:"Apuntes_PMI_PMBOK.pdf",tipo:"pdf",tamaño:"4.1 MB",paginas:48,url:N.gestion},{nombre:"Plantilla_EDT.xlsx",tipo:"excel",tamaño:"220 KB",hojas:3,url:null},{nombre:"Plantilla_Acta_Proyecto.docx",tipo:"word",tamaño:"410 KB",paginas:4,url:null},{nombre:"Matriz_Riesgos.xlsx",tipo:"excel",tamaño:"180 KB",hojas:2,url:null}]}],Be=[{id:1,titulo:"Parcial I – Algoritmos y Prog. 2026-I",cursoId:4,docenteId:1,tipo:"Parcial",año:2026,semestre:"I",resuelto:!0,descargas:534,likes:205,vistas:1560,premium:!1,fecha:"2026-04-10",previewImg:A.algoritmos,descripcion:"4 preguntas: análisis de pseudocódigo, diseño de algoritmos iterativos/recursivos y cálculo de complejidad. Duración: 100 min.",temas:["Pseudocódigo","Recursividad","Big-O","Búsqueda binaria"],duracion:"100 min",preguntas:4,puntaje_total:20,archivos:[{nombre:"Parcial1_ISI101_2026I.pdf",tipo:"pdf",tamaño:"1.1 MB",paginas:4,url:N.algoritmos},{nombre:"Parcial1_ISI101_Solucion.pdf",tipo:"pdf",tamaño:"2.3 MB",paginas:8,url:N.generico}]},{id:2,titulo:"Final – Estructuras de Datos 2025-II",cursoId:6,docenteId:1,tipo:"Final",año:2025,semestre:"II",resuelto:!0,descargas:612,likes:238,vistas:1820,premium:!0,fecha:"2025-12-12",previewImg:A.programacion,descripcion:"Listas enlazadas, pilas, colas, árboles AVL y grafos. Solución completa con código Python comentado.",temas:["Listas enlazadas","Pilas y colas","Árboles AVL","Grafos","Dijkstra"],duracion:"120 min",preguntas:5,puntaje_total:20,archivos:[{nombre:"Final_ISI301_2025II.pdf",tipo:"pdf",tamaño:"1.4 MB",paginas:6,url:N.algoritmos},{nombre:"Final_ISI301_Solucion.pdf",tipo:"pdf",tamaño:"3.8 MB",paginas:14,url:N.generico},{nombre:"Codigo_Soluciones_Python.zip",tipo:"zip",tamaño:"28 KB",archivos:5,url:null}]},{id:3,titulo:"Parcial II – Ing. de Software 2026-I",cursoId:7,docenteId:1,tipo:"Parcial",año:2026,semestre:"I",resuelto:!1,descargas:289,likes:103,vistas:870,premium:!1,fecha:"2026-05-08",previewImg:A.software,descripcion:"Metodologías ágiles, diagramas UML y patrones de diseño. Sin solución disponible aún.",temas:["Scrum","Diagramas UML","Casos de uso","Patrones de diseño"],duracion:"90 min",preguntas:3,puntaje_total:20,archivos:[{nombre:"Parcial2_ISI401_2026I.pdf",tipo:"pdf",tamaño:"980 KB",paginas:3,url:N.generico}]},{id:4,titulo:"Final – Redes y Comunicaciones 2025-II",cursoId:8,docenteId:2,tipo:"Final",año:2025,semestre:"II",resuelto:!0,descargas:401,likes:152,vistas:1180,premium:!1,fecha:"2025-12-18",previewImg:A.redes,descripcion:"Modelo OSI/TCP-IP, subnetting, protocolos de enrutamiento y configuración. Simulaciones en Packet Tracer incluidas.",temas:["Modelo OSI","TCP/IP","Subnetting VLSM","OSPF","Packet Tracer"],duracion:"110 min",preguntas:5,puntaje_total:20,archivos:[{nombre:"Final_ISI402_2025II.pdf",tipo:"pdf",tamaño:"1.6 MB",paginas:5,url:N.redes},{nombre:"Final_ISI402_Solucion.pdf",tipo:"pdf",tamaño:"3.2 MB",paginas:10,url:N.generico},{nombre:"Simulacion_PacketTracer.zip",tipo:"zip",tamaño:"1.8 MB",archivos:3,url:null}]},{id:5,titulo:"Parcial I – Inteligencia Artificial 2026-I",cursoId:9,docenteId:3,tipo:"Parcial",año:2026,semestre:"I",resuelto:!0,descargas:345,likes:132,vistas:1020,premium:!1,fecha:"2026-04-20",previewImg:A.ia,descripcion:"Búsqueda heurística A*, lógica proposicional, regresión lineal y clasificación con Naive Bayes. Solución con código Python.",temas:["A* Heurístico","Regresión lineal","Naive Bayes","Lógica proposicional"],duracion:"100 min",preguntas:4,puntaje_total:20,archivos:[{nombre:"Parcial1_ISI601_2026I.pdf",tipo:"pdf",tamaño:"1.2 MB",paginas:4,url:N.ia},{nombre:"Parcial1_ISI601_Solucion.pdf",tipo:"pdf",tamaño:"3.1 MB",paginas:10,url:N.ml},{nombre:"Notebooks_IA.zip",tipo:"zip",tamaño:"1.2 MB",archivos:3,url:null}]},{id:6,titulo:"Parcial I – Cálculo Diferencial 2026-I",cursoId:11,docenteId:4,tipo:"Parcial",año:2026,semestre:"I",resuelto:!0,descargas:678,likes:261,vistas:1990,premium:!1,fecha:"2026-04-16",previewImg:A.calculo,descripcion:"Límites, continuidad y derivadas. 4 problemas con desarrollo completo. Solución paso a paso con todas las reglas aplicadas.",temas:["Límites","Continuidad","Derivadas","Regla de la cadena"],duracion:"100 min",preguntas:4,puntaje_total:20,archivos:[{nombre:"Parcial1_IIN101_2026I.pdf",tipo:"pdf",tamaño:"1.3 MB",paginas:4,url:N.calculo},{nombre:"Parcial1_IIN101_Solucion.pdf",tipo:"pdf",tamaño:"4.1 MB",paginas:12,url:N.generico},{nombre:"Formulario_Derivadas.pdf",tipo:"pdf",tamaño:"560 KB",paginas:2,url:N.generico2}]},{id:7,titulo:"Final – Investigación Operativa 2025-II",cursoId:13,docenteId:4,tipo:"Final",año:2025,semestre:"II",resuelto:!0,descargas:389,likes:148,vistas:1140,premium:!0,fecha:"2025-12-10",previewImg:A.estadistica,descripcion:"PL gráfico y simplex, transporte, asignación húngara y CPM/PERT. Solución con tablas simplex completas.",temas:["Simplex","Método Gráfico","Transporte","Método Húngaro","CPM/PERT"],duracion:"120 min",preguntas:5,puntaje_total:20,archivos:[{nombre:"Final_IIN301_2025II.pdf",tipo:"pdf",tamaño:"1.8 MB",paginas:6,url:N.manufactura},{nombre:"Final_IIN301_Solucion.pdf",tipo:"pdf",tamaño:"5.2 MB",paginas:18,url:N.generico},{nombre:"Tablas_Simplex.xlsx",tipo:"excel",tamaño:"380 KB",hojas:5,url:null}]},{id:8,titulo:"Parcial I – Mecánica de Suelos 2026-I",cursoId:17,docenteId:6,tipo:"Parcial",año:2026,semestre:"I",resuelto:!1,descargas:234,likes:87,vistas:670,premium:!1,fecha:"2026-04-22",previewImg:A.estructuras,descripcion:"Clasificación de suelos SUCS, límites de Atterberg y compactación Proctor. Sin solución. Datos de laboratorio incluidos.",temas:["Clasificación SUCS","Límites de Atterberg","Proctor estándar","CBR"],duracion:"90 min",preguntas:3,puntaje_total:20,archivos:[{nombre:"Parcial1_ICI301_2026I.pdf",tipo:"pdf",tamaño:"1.2 MB",paginas:3,url:N.geotecnia},{nombre:"Datos_Lab_Examen.xlsx",tipo:"excel",tamaño:"145 KB",hojas:2,url:null}]},{id:9,titulo:"Parcial I – Marketing Digital 2026-I",cursoId:56,docenteId:7,tipo:"Parcial",año:2026,semestre:"I",resuelto:!0,descargas:456,likes:174,vistas:1320,premium:!1,fecha:"2026-04-18",previewImg:A.marketing,descripcion:"SEM, SEO, redes sociales y analítica web. Caso práctico campaña Google Ads con solución detallada.",temas:["SEO","SEM","Google Ads","Meta Business","Google Analytics 4"],duracion:"80 min",preguntas:3,puntaje_total:20,archivos:[{nombre:"Parcial1_AND301_2026I.pdf",tipo:"pdf",tamaño:"1.4 MB",paginas:3,url:N.marketing},{nombre:"Parcial1_AND301_Solucion.pdf",tipo:"pdf",tamaño:"2.8 MB",paginas:7,url:N.generico},{nombre:"Caso_GoogleAds_Datos.xlsx",tipo:"excel",tamaño:"210 KB",hojas:3,url:null}]},{id:10,titulo:"Parcial I – Microeconomía 2026-I",cursoId:55,docenteId:8,tipo:"Parcial",año:2026,semestre:"I",resuelto:!0,descargas:523,likes:199,vistas:1560,premium:!1,fecha:"2026-04-12",previewImg:A.economia,descripcion:"Oferta, demanda, elasticidades y equilibrio de mercado. 4 problemas con gráficos y solución algebraica.",temas:["Oferta y demanda","Equilibrio de mercado","Elasticidad precio"],duracion:"100 min",preguntas:4,puntaje_total:20,archivos:[{nombre:"Parcial1_AND201_2026I.pdf",tipo:"pdf",tamaño:"1.2 MB",paginas:4,url:N.economia},{nombre:"Parcial1_AND201_Solucion.pdf",tipo:"pdf",tamaño:"3.4 MB",paginas:10,url:N.generico}]},{id:11,titulo:"Parcial I – Contrataciones del Estado 2026-I",cursoId:50,docenteId:18,tipo:"Parcial",año:2026,semestre:"I",resuelto:!0,descargas:198,likes:72,vistas:560,premium:!1,fecha:"2026-04-24",previewImg:A.gestion_publica,descripcion:"Tipos de procedimientos de selección, umbrales UIT 2026, plazos y documentación requerida. Solución con fundamento legal.",temas:["Ley 30225","Procedimientos de selección","SEACE","Plazos","Bases del proceso"],duracion:"90 min",preguntas:3,puntaje_total:20,archivos:[{nombre:"Parcial1_AGP401_2026I.pdf",tipo:"pdf",tamaño:"1.1 MB",paginas:3,url:N.gestion},{nombre:"Parcial1_AGP401_Solucion.pdf",tipo:"pdf",tamaño:"2.2 MB",paginas:7,url:N.generico}]},{id:12,titulo:"Parcial II – Compensaciones y Remuneraciones 2026-I",cursoId:48,docenteId:17,tipo:"Parcial",año:2026,semestre:"I",resuelto:!1,descargas:145,likes:53,vistas:410,premium:!1,fecha:"2026-05-06",previewImg:A.rrhh,descripcion:"Estructura salarial, bandas de compensación, beneficios no monetarios y gestión por competencias. Sin solución oficial.",temas:["Bandas salariales","Compensación variable","Beneficios","Hay Group","Korn Ferry"],duracion:"80 min",preguntas:3,puntaje_total:20,archivos:[{nombre:"Parcial2_AGT501_2026I.pdf",tipo:"pdf",tamaño:"980 KB",paginas:3,url:N.rrhh}]},{id:13,titulo:"Parcial II – Contabilidad General 2026-I",cursoId:63,docenteId:10,tipo:"Parcial",año:2026,semestre:"I",resuelto:!1,descargas:345,likes:130,vistas:1020,premium:!1,fecha:"2026-05-06",previewImg:A.contabilidad,descripcion:"Registro de operaciones, ajustes contables y estados financieros básicos. Sin solución oficial.",temas:["Asientos contables","Ajustes","Balance General","Estado de Resultados"],duracion:"90 min",preguntas:4,puntaje_total:20,archivos:[{nombre:"Parcial2_COF101_2026I.pdf",tipo:"pdf",tamaño:"1.4 MB",paginas:4,url:N.contabilidad},{nombre:"Hoja_Trabajo_Escaneada.pdf",tipo:"pdf",tamaño:"5.8 MB",paginas:3,url:N.generico}]},{id:14,titulo:"Final – Auditoría Financiera 2025-II",cursoId:66,docenteId:11,tipo:"Final",año:2025,semestre:"II",resuelto:!0,descargas:267,likes:98,vistas:800,premium:!0,fecha:"2025-12-16",previewImg:A.auditoria,descripcion:"Planificación, riesgo de auditoría, evidencia, papeles de trabajo e informe. Caso práctico empresa comercial con solución.",temas:["Riesgo de auditoría","Evidencia","NIA","Informe del auditor"],duracion:"120 min",preguntas:4,puntaje_total:20,archivos:[{nombre:"Final_COF601_2025II.pdf",tipo:"pdf",tamaño:"1.9 MB",paginas:5,url:N.finanzas},{nombre:"Final_COF601_Solucion.pdf",tipo:"pdf",tamaño:"4.4 MB",paginas:14,url:N.generico2},{nombre:"Papeles_Trabajo_Modelo.xlsx",tipo:"excel",tamaño:"680 KB",hojas:8,url:null}]},{id:15,titulo:"Parcial I – Derecho Constitucional 2026-I",cursoId:72,docenteId:13,tipo:"Parcial",año:2026,semestre:"I",resuelto:!0,descargas:378,likes:143,vistas:1120,premium:!1,fecha:"2026-04-20",previewImg:A.derecho,descripcion:"Fuentes del derecho, estructura del Estado y derechos fundamentales. Análisis de casos con sentencias del TC.",temas:["Fuentes del Derecho","Estructura del Estado","Derechos fundamentales"],duracion:"90 min",preguntas:3,puntaje_total:20,archivos:[{nombre:"Parcial1_DER301_2026I.pdf",tipo:"pdf",tamaño:"1.1 MB",paginas:3,url:N.derecho},{nombre:"Parcial1_DER301_Solucion.pdf",tipo:"pdf",tamaño:"2.6 MB",paginas:8,url:N.derechos_hum}]},{id:16,titulo:"Final – Derecho Civil I 2025-II",cursoId:71,docenteId:12,tipo:"Final",año:2025,semestre:"II",resuelto:!0,descargas:412,likes:157,vistas:1230,premium:!0,fecha:"2025-12-11",previewImg:A.derecho2,descripcion:"5 casos sobre acto jurídico, vicios del consentimiento, nulidades y representación con doctrina.",temas:["Acto jurídico","Representación","Nulidad","Dolo y error"],duracion:"120 min",preguntas:5,puntaje_total:20,archivos:[{nombre:"Final_DER201_2025II.pdf",tipo:"pdf",tamaño:"1.6 MB",paginas:5,url:N.derecho},{nombre:"Final_DER201_Solucion.pdf",tipo:"pdf",tamaño:"5.6 MB",paginas:18,url:N.generico}]},{id:17,titulo:"Parcial I – Anatomía Humana 2026-I",cursoId:75,docenteId:14,tipo:"Parcial",año:2026,semestre:"I",resuelto:!0,descargas:789,likes:301,vistas:2340,premium:!1,fecha:"2026-04-14",previewImg:A.anatomia,descripcion:"Sistema musculoesquelético: identificación de estructuras, origen/inserción muscular y correlación clínica. Solución con atlas.",temas:["Sistema musculoesquelético","Músculos del miembro superior","Plexo braquial"],duracion:"90 min",preguntas:4,puntaje_total:20,archivos:[{nombre:"Parcial1_MED101_2026I.pdf",tipo:"pdf",tamaño:"2.4 MB",paginas:5,url:N.medicina},{nombre:"Parcial1_MED101_Solucion.pdf",tipo:"pdf",tamaño:"8.6 MB",paginas:12,url:N.generico}]},{id:18,titulo:"Final – Histología y Embriología 2025-II",cursoId:76,docenteId:14,tipo:"Final",año:2025,semestre:"II",resuelto:!0,descargas:634,likes:245,vistas:1890,premium:!0,fecha:"2025-12-09",previewImg:A.histologia,descripcion:"Identificación de 20 microfotografías, embriología semanas 1-8 y correlaciones clínicas. Solución completa con imágenes.",temas:["Identificación histológica","Embriología semanas 1-8","Malformaciones congénitas"],duracion:"120 min",preguntas:6,puntaje_total:20,archivos:[{nombre:"Final_MED201_2025II.pdf",tipo:"pdf",tamaño:"3.8 MB",paginas:6,url:N.medicina},{nombre:"Final_MED201_Solucion.pdf",tipo:"pdf",tamaño:"28.4 MB",paginas:16,url:N.generico},{nombre:"Microfotografias_Examen.zip",tipo:"zip",tamaño:"48 MB",archivos:20,url:null}]},{id:19,titulo:"Parcial II – Farmacología 2026-I",cursoId:79,docenteId:15,tipo:"Parcial",año:2026,semestre:"I",resuelto:!1,descargas:512,likes:196,vistas:1540,premium:!1,fecha:"2026-05-10",previewImg:A.farmacologia,descripcion:"Antiinfecciosos, antiinflamatorios y medicamentos del SNC. Sin solución oficial aún. Prontuario incluido.",temas:["Antiinfecciosos","AINEs","Glucocorticoides","Ansiolíticos"],duracion:"100 min",preguntas:4,puntaje_total:20,archivos:[{nombre:"Parcial2_MED501_2026I.pdf",tipo:"pdf",tamaño:"1.8 MB",paginas:4,url:N.farmacologia},{nombre:"Prontuario_Farmacologico.pdf",tipo:"pdf",tamaño:"4.2 MB",paginas:28,url:N.medicina}]},{id:20,titulo:"Parcial I – Enfermería Salud del Adulto 2026-I",cursoId:81,docenteId:27,tipo:"Parcial",año:2026,semestre:"I",resuelto:!0,descargas:267,likes:99,vistas:760,premium:!1,fecha:"2026-04-16",previewImg:A.enfermeria,descripcion:"PAE aplicado a paciente con diabetes e insuficiencia cardíaca. Diagnósticos NANDA, intervenciones NIC y resultados NOC. Solución completa.",temas:["PAE","NANDA","NIC","NOC","Diabetes mellitus","ICC"],duracion:"90 min",preguntas:2,puntaje_total:20,archivos:[{nombre:"Parcial1_ENF301_2026I.pdf",tipo:"pdf",tamaño:"1.3 MB",paginas:3,url:N.salud_publica},{nombre:"Parcial1_ENF301_Solucion.pdf",tipo:"pdf",tamaño:"2.8 MB",paginas:9,url:N.medicina}]},{id:21,titulo:"Parcial I – Psicología General 2026-I",cursoId:96,docenteId:16,tipo:"Parcial",año:2026,semestre:"I",resuelto:!0,descargas:289,likes:108,vistas:870,premium:!1,fecha:"2026-04-17",previewImg:A.psicologia,descripcion:"Escuelas psicológicas, percepción, atención y memoria. Análisis de casos con referencias bibliográficas.",temas:["Escuelas psicológicas","Percepción","Atención selectiva","Memoria de trabajo"],duracion:"80 min",preguntas:3,puntaje_total:20,archivos:[{nombre:"Parcial1_PSI101_2026I.pdf",tipo:"pdf",tamaño:"980 KB",paginas:3,url:N.psicologia},{nombre:"Parcial1_PSI101_Solucion.pdf",tipo:"pdf",tamaño:"2.1 MB",paginas:7,url:N.generico2}]},{id:22,titulo:"Final – Neurociencias y Conducta 2025-II",cursoId:97,docenteId:16,tipo:"Final",año:2025,semestre:"II",resuelto:!0,descargas:234,likes:89,vistas:720,premium:!1,fecha:"2025-12-14",previewImg:A.neurociencia,descripcion:"Sistemas neurales, neurotransmisores y bases neurológicas de la conducta. Solución con esquemas del SN.",temas:["Neurotransmisores","Sistema límbico","Corteza cerebral","Neuroplasticidad"],duracion:"100 min",preguntas:4,puntaje_total:20,archivos:[{nombre:"Final_PSI201_2025II.pdf",tipo:"pdf",tamaño:"1.6 MB",paginas:4,url:N.neurociencia},{nombre:"Final_PSI201_Solucion.pdf",tipo:"pdf",tamaño:"4.2 MB",paginas:12,url:N.generico2},{nombre:"Esquemas_SN_Solucion.png",tipo:"imagen",tamaño:"3.8 MB",dimensiones:"5000×3500",url:"https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=90"}]},{id:23,titulo:"Parcial I – Periodismo Digital 2026-I",cursoId:101,docenteId:33,tipo:"Parcial",año:2026,semestre:"I",resuelto:!0,descargas:134,likes:49,vistas:380,premium:!1,fecha:"2026-04-19",previewImg:A.comunicacion,descripcion:"Géneros periodísticos digitales, hipertextualidad e interactividad. Redacción de nota web y análisis de cobertura de medios peruanos.",temas:["Géneros periodísticos","Nota web","Hipertextualidad","Medios peruanos"],duracion:"80 min",preguntas:3,puntaje_total:20,archivos:[{nombre:"Parcial1_CCC301_2026I.pdf",tipo:"pdf",tamaño:"980 KB",paginas:3,url:N.comunicacion},{nombre:"Parcial1_CCC301_Solucion.pdf",tipo:"pdf",tamaño:"1.8 MB",paginas:6,url:N.generico}]},{id:24,titulo:"Parcial I – Tecnología Educativa 2026-I",cursoId:103,docenteId:34,tipo:"Parcial",año:2026,semestre:"I",resuelto:!1,descargas:112,likes:41,vistas:320,premium:!1,fecha:"2026-04-21",previewImg:A.educacion,descripcion:"TPACK, aprendizaje invertido, LMS Moodle y evaluación digital formativa. Sin solución oficial.",temas:["TPACK","Flipped classroom","Moodle","Evaluación formativa","E-learning"],duracion:"80 min",preguntas:3,puntaje_total:20,archivos:[{nombre:"Parcial1_EIA201_2026I.pdf",tipo:"pdf",tamaño:"890 KB",paginas:3,url:N.educacion_digital}]},{id:25,titulo:"Parcial I – Diseño Arquitectónico I 2026-I",cursoId:21,docenteId:20,tipo:"Parcial",año:2026,semestre:"I",resuelto:!1,descargas:145,likes:53,vistas:410,premium:!1,fecha:"2026-04-23",previewImg:A.arquitectura,descripcion:"Partido arquitectónico, escala, proporción y análisis de sitio. Entrega de láminas A2 con planta, corte y elevación. Sin solución.",temas:["Partido arquitectónico","Análisis de sitio","Planta / Corte / Elevación","Escala"],duracion:"Taller 3h",preguntas:1,puntaje_total:20,archivos:[{nombre:"Enunciado_Diseño1_2026I.pdf",tipo:"pdf",tamaño:"2.1 MB",paginas:4,url:N.generico}]}],Dm=[{id:"free",nombre:"Gratuito",precio:0,periodo:"siempre",descripcion:"Perfecto para empezar",color:"#6b7280",features:[{texto:"5 descargas por mes",incluido:!0},{texto:"Acceso a apuntes básicos",incluido:!0},{texto:"Ver exámenes sin solución",incluido:!0},{texto:"Búsqueda por curso",incluido:!0},{texto:"Exámenes resueltos",incluido:!1},{texto:"Apuntes premium",incluido:!1},{texto:"Descargas ilimitadas",incluido:!1},{texto:"Acceso anticipado",incluido:!1}]},{id:"premium",nombre:"Premium",precio:5,periodo:"mes",descripcion:"Para el estudiante serio",color:"#4f46e5",popular:!0,features:[{texto:"Descargas ilimitadas",incluido:!0},{texto:"Todos los apuntes",incluido:!0},{texto:"Exámenes resueltos",incluido:!0},{texto:"Búsqueda avanzada",incluido:!0},{texto:"Apuntes premium",incluido:!0},{texto:"Subir y ganar puntos",incluido:!0},{texto:"Acceso anticipado",incluido:!1},{texto:"Insignias exclusivas",incluido:!1}]},{id:"pro",nombre:"Pro Anual",precio:40,periodo:"año",descripcion:"El mejor valor para tu carrera",color:"#d97706",features:[{texto:"Todo lo de Premium",incluido:!0},{texto:"Acceso anticipado",incluido:!0},{texto:"Insignias exclusivas",incluido:!0},{texto:"Soporte prioritario",incluido:!0},{texto:"Guías de examen exclusivas",incluido:!0},{texto:"Mentoring entre estudiantes",incluido:!0},{texto:"Sin publicidad",incluido:!0},{texto:"2 meses gratis vs mensual",incluido:!0}]}],or={apuntes:4200,examenes:2380,estudiantes:14600,cursos:480,docentes:260,carreras:32},Fm={nombre:"Brad",apellido:"UC",carrera:"Administración y Negocios Digitales",carreraId:6,facultadId:1,ciclo:3,plan:"free",puntos:120,descargas:3,descargasMax:5};Object.fromEntries(te.map(e=>[e.id,e]));Object.fromEntries(Ze.map(e=>[e.id,e]));function ru(e){if(!e.url){window.dispatchEvent(new CustomEvent("demo-no-url",{detail:{nombre:e.nombre}}));return}window.open(e.url,"_blank","noopener")}const tu=y.createContext(null);function Bm({children:e}){const[r,t]=y.useState(null),[a,n]=y.useState(!1),i=(s,c)=>{n(!0),setTimeout(()=>{t({...Fm,email:s}),n(!1)},800)},l=()=>t(null);return o.jsx(tu.Provider,{value:{user:r,login:i,logout:l,isLoading:a},children:e})}function Rt(){return y.useContext(tu)}const _s=[{key:"home",label:"Inicio",icon:"🏠"},{key:"cursos",label:"Cursos",icon:"📖"},{key:"apuntes",label:"Apuntes",icon:"📝"},{key:"examenes",label:"Exámenes",icon:"📋"},{key:"docentes",label:"Docentes",icon:"👨‍🏫"},{key:"planes",label:"Planes",icon:"⭐",highlight:!0}];function Om({open:e}){return o.jsxs("span",{className:"panel-icon","aria-hidden":"true",children:[o.jsx("span",{className:`pi-bar ${e?"pi-tall":"pi-short"}`}),o.jsx("span",{className:`pi-bar ${e?"pi-short":"pi-tall"}`}),o.jsx("span",{className:`pi-bar ${e?"pi-tall":"pi-short"}`})]})}function $m(){return o.jsx("span",{className:"dots-grid","aria-hidden":"true",children:[...Array(9)].map((e,r)=>o.jsx("span",{className:"dot"},r))})}function Um({page:e,navigate:r,sidebarOpen:t,setSidebarOpen:a,showSidebar:n}){const{user:i,logout:l}=Rt(),[s,c]=y.useState(!1),[u,g]=y.useState(!1),[h,v]=y.useState(!1),[x,I]=y.useState(!1),w=y.useRef(null);y.useEffect(()=>{const d=()=>g(window.scrollY>8);return window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[]),y.useEffect(()=>{const d=p=>{w.current&&!w.current.contains(p.target)&&v(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[]);const E=d=>{r(d),c(!1),v(!1)},m=()=>a(d=>!d);return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        /* ════════════════════════════════
           HEADER BASE
        ════════════════════════════════ */
        .nav-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 200;
          background: rgba(10, 10, 18, 0.93);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          transition: box-shadow 0.25s ease;
        }
        .nav-header.scrolled {
          box-shadow: 0 4px 32px rgba(0,0,0,0.45);
        }
        .nav-inner {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 20px;
          height: 64px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* ════════════════════════════════
           BOTÓN PANEL — abre/cierra sidebar lateral
           Visible en TODAS las resoluciones cuando
           showSidebar=true (páginas con sidebar).
           Usa icono de barras verticales (≠ hamburguesa).
        ════════════════════════════════ */
        .nav-panel-btn {
          display: none; /* oculto si no tiene clase show-panel */
          align-items: center;
          justify-content: center;
          width: 38px; height: 38px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 10px;
          color: var(--text-secondary);
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.15s;
          position: relative;
        }
        /* Activo cuando la página tiene sidebar — en TODOS los breakpoints */
        .nav-panel-btn.show-panel {
          display: flex;
        }
        .nav-panel-btn:hover {
          background: var(--bg-card);
          color: var(--text-primary);
          border-color: rgba(255,255,255,0.18);
        }
        /* Resaltado sutil cuando el sidebar está abierto */
        .nav-panel-btn.panel-active {
          background: var(--indigo-dim);
          border-color: rgba(99,102,241,0.3);
          color: var(--indigo-light);
        }

        /* Icono de barras verticales */
        .panel-icon {
          display: flex;
          align-items: flex-end;
          gap: 3px;
          height: 18px;
        }
        .pi-bar {
          width: 3px;
          border-radius: 2px;
          background: currentColor;
          transition: height 0.22s ease;
        }
        .pi-tall  { height: 14px; }
        .pi-short { height: 9px; }

        /* Tooltip del botón panel */
        .panel-tooltip {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 7px;
          padding: 4px 10px;
          font-size: 0.72rem;
          color: var(--text-secondary);
          white-space: nowrap;
          pointer-events: none;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          z-index: 300;
        }
        /* Flecha del tooltip */
        .panel-tooltip::before {
          content: '';
          position: absolute;
          bottom: 100%; left: 50%;
          transform: translateX(-50%);
          border: 5px solid transparent;
          border-bottom-color: var(--border);
        }

        /* ════════════════════════════════
           LOGO
        ════════════════════════════════ */
        .nav-logo-btn {
          display: flex;
          align-items: center;
          gap: 9px;
          background: none;
          border: none;
          cursor: pointer;
          flex-shrink: 0;
          padding: 0;
        }
        .nav-logo-icon {
          width: 34px; height: 34px;
          background: linear-gradient(135deg, var(--indigo) 0%, #7c3aed 100%);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem;
          box-shadow: 0 0 16px rgba(99,102,241,0.35);
          flex-shrink: 0;
        }
        .nav-logo-text {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          white-space: nowrap;
        }
        .nav-logo-text span { color: var(--indigo-light); }
        .nav-badge {
          font-size: 0.6rem;
          font-weight: 700;
          background: rgba(99,102,241,0.12);
          color: var(--indigo-light);
          border: 1px solid rgba(99,102,241,0.28);
          border-radius: 100px;
          padding: 2px 9px;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* ════════════════════════════════
           LINKS DESKTOP
        ════════════════════════════════ */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2px;
          flex: 1;
          justify-content: center;
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          padding: 7px 13px;
          border-radius: 9px;
          transition: all 0.15s;
          font-family: var(--font-body);
          white-space: nowrap;
          position: relative;
        }
        .nav-link:hover { color: var(--text-primary); background: var(--bg-elevated); }
        .nav-link.active {
          color: var(--text-primary);
          background: var(--bg-elevated);
          font-weight: 600;
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 20%; right: 20%;
          height: 2px;
          background: var(--indigo-light);
          border-radius: 2px;
        }
        .nav-link-highlight {
          background: linear-gradient(135deg, rgba(99,102,241,0.15), rgba(124,58,237,0.15));
          border: 1px solid rgba(99,102,241,0.25);
          color: var(--indigo-light) !important;
        }
        .nav-link-highlight:hover {
          background: linear-gradient(135deg, rgba(99,102,241,0.25), rgba(124,58,237,0.25)) !important;
          border-color: rgba(99,102,241,0.45);
        }
        .nav-pro-dot {
          width: 6px; height: 6px;
          background: linear-gradient(135deg, #f59e0b, #ef4444);
          border-radius: 50%;
          animation: pulse-dot 2s infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.6; transform: scale(1.4); }
        }

        /* ════════════════════════════════
           AUTH DESKTOP
        ════════════════════════════════ */
        .nav-auth {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }
        .nav-btn-secondary {
          background: none;
          border: 1px solid var(--border);
          border-radius: 9px;
          padding: 7px 16px;
          color: var(--text-secondary);
          font-size: 0.85rem;
          cursor: pointer;
          font-family: var(--font-body);
          transition: all 0.15s;
          white-space: nowrap;
        }
        .nav-btn-secondary:hover {
          background: var(--bg-elevated);
          color: var(--text-primary);
          border-color: rgba(255,255,255,0.2);
        }
        .nav-btn-primary {
          background: linear-gradient(135deg, var(--indigo), #7c3aed);
          border: none;
          border-radius: 9px;
          padding: 7px 16px;
          color: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          font-family: var(--font-body);
          transition: all 0.2s;
          white-space: nowrap;
          box-shadow: 0 0 16px rgba(99,102,241,0.3);
        }
        .nav-btn-primary:hover {
          opacity: 0.9;
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(99,102,241,0.4);
        }

        /* ════════════════════════════════
           USER MENU DESKTOP
        ════════════════════════════════ */
        .nav-user-wrap { position: relative; }
        .nav-user-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 100px;
          padding: 4px 12px 4px 4px;
          cursor: pointer;
          transition: all 0.15s;
          user-select: none;
        }
        .nav-user-chip:hover {
          border-color: rgba(99,102,241,0.4);
          background: var(--bg-card);
        }
        .nav-user-avatar {
          width: 28px; height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--indigo), #7c3aed);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
        }
        .nav-user-name {
          font-size: 0.84rem;
          color: var(--text-secondary);
          font-weight: 500;
          max-width: 90px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .nav-user-chevron {
          font-size: 0.65rem;
          color: var(--text-muted);
          margin-left: 2px;
          transition: transform 0.2s;
        }
        .nav-user-chevron.open { transform: rotate(180deg); }
        .nav-user-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          min-width: 200px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 8px;
          box-shadow: 0 16px 40px rgba(0,0,0,0.4);
          animation: dropdown-in 0.15s ease;
          z-index: 300;
        }
        @keyframes dropdown-in {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-user-info {
          padding: 8px 12px 12px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 6px;
        }
        .nav-user-info-name {
          font-weight: 700; font-size: 0.9rem;
          color: var(--text-primary); margin-bottom: 2px;
        }
        .nav-user-info-meta { font-size: 0.75rem; color: var(--text-muted); }
        .nav-user-info-plan {
          display: inline-block;
          margin-top: 6px;
          font-size: 0.7rem; font-weight: 600;
          background: rgba(99,102,241,0.12);
          color: var(--indigo-light);
          border: 1px solid rgba(99,102,241,0.25);
          border-radius: 100px;
          padding: 2px 9px;
        }
        .nav-dropdown-item {
          display: flex;
          align-items: center;
          gap: 9px;
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-family: var(--font-body);
          padding: 8px 12px;
          border-radius: 9px;
          transition: all 0.12s;
          text-align: left;
        }
        .nav-dropdown-item:hover { background: var(--bg-elevated); color: var(--text-primary); }
        .nav-dropdown-item.danger { color: #ef4444; }
        .nav-dropdown-item.danger:hover { background: rgba(239,68,68,0.08); color: #ef4444; }
        .nav-dropdown-sep { height: 1px; background: var(--border); margin: 6px 0; }

        /* ════════════════════════════════
           BOTÓN MENÚ MOBILE
           Grilla de 9 puntos — abre el drawer de navegación.
           Visible solo en mobile/tablet (≤900px).
           DISTINTO al botón de panel (barras verticales).
        ════════════════════════════════ */
        .nav-mobile-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 38px; height: 38px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 10px;
          color: var(--text-secondary);
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.15s;
          /* No margin-left:auto para que conviva con el botón de panel */
        }
        .nav-mobile-toggle:hover { background: var(--bg-card); color: var(--text-primary); }

        /* Grilla 3×3 */
        .dots-grid {
          display: grid;
          grid-template-columns: repeat(3, 5px);
          gap: 3px;
        }
        .dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: currentColor;
        }
        .nav-mobile-toggle .close-x {
          display: none;
          font-size: 1rem;
          line-height: 1;
        }
        .nav-mobile-toggle.open .dots-grid { display: none; }
        .nav-mobile-toggle.open .close-x   { display: block; }

        /* ════════════════════════════════
           DRAWER MOBILE — links de navegación
        ════════════════════════════════ */
        .nav-mobile-drawer {
          display: none;
          flex-direction: column;
          border-top: 1px solid var(--border);
          background: var(--bg-card);
          max-height: calc(100vh - 64px);
          overflow-y: auto;
        }
        .nav-mobile-drawer.open {
          display: flex;
          animation: drawer-in 0.2s ease;
        }
        @keyframes drawer-in {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-mobile-links {
          padding: 10px 14px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .nav-mobile-link {
          display: flex;
          align-items: center;
          gap: 12px;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-family: var(--font-body);
          padding: 10px 12px;
          border-radius: 11px;
          transition: all 0.15s;
          text-align: left;
          width: 100%;
          font-weight: 500;
        }
        .nav-mobile-link:hover { background: var(--bg-elevated); color: var(--text-primary); }
        .nav-mobile-link.active {
          background: var(--indigo-dim);
          color: var(--indigo-light);
          font-weight: 600;
        }
        .nav-mobile-link.highlight { color: var(--indigo-light); }

        /* Chip/pastilla del ícono en el drawer */
        .nav-mobile-link-icon {
          width: 34px; height: 34px;
          border-radius: 9px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.05rem;
          flex-shrink: 0;
          transition: background 0.15s, border-color 0.15s;
        }
        .nav-mobile-link.active .nav-mobile-link-icon {
          background: var(--indigo-dim);
          border-color: rgba(99,102,241,0.3);
        }
        .nav-mobile-link.highlight .nav-mobile-link-icon {
          background: rgba(99,102,241,0.1);
          border-color: rgba(99,102,241,0.25);
        }

        /* Auth mobile */
        .nav-mobile-auth {
          padding: 10px 14px 18px;
          border-top: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .nav-mobile-user-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 13px;
          background: var(--bg-elevated);
          border-radius: 12px;
          margin-bottom: 2px;
        }
        .nav-mobile-avatar {
          width: 38px; height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--indigo), #7c3aed);
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; font-weight: 700; color: #fff;
          flex-shrink: 0;
        }
        .nav-mobile-user-info { flex: 1; min-width: 0; }
        .nav-mobile-user-name { font-weight: 700; font-size: 0.9rem; color: var(--text-primary); }
        .nav-mobile-user-meta { font-size: 0.75rem; color: var(--text-muted); }
        .nav-mobile-points {
          font-size: 0.75rem; font-weight: 600;
          color: var(--amber);
          background: var(--amber-dim);
          border: 1px solid rgba(245,158,11,0.2);
          border-radius: 100px;
          padding: 3px 9px;
          white-space: nowrap;
        }
        .nav-mobile-btn-primary {
          display: block; width: 100%;
          background: linear-gradient(135deg, var(--indigo), #7c3aed);
          border: none; border-radius: 11px;
          padding: 12px; color: #fff;
          font-size: 0.9rem; font-weight: 600;
          cursor: pointer; font-family: var(--font-body); text-align: center;
        }
        .nav-mobile-btn-secondary {
          display: block; width: 100%;
          background: none;
          border: 1px solid var(--border); border-radius: 11px;
          padding: 11px; color: var(--text-secondary);
          font-size: 0.9rem;
          cursor: pointer; font-family: var(--font-body); text-align: center;
        }
        .nav-mobile-logout {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          width: 100%;
          background: rgba(239,68,68,0.08);
          border: 1px solid rgba(239,68,68,0.2); border-radius: 11px;
          padding: 11px; color: #ef4444;
          font-size: 0.9rem;
          cursor: pointer; font-family: var(--font-body);
        }

        /* ════════════════════════════════
           RESPONSIVE
        ════════════════════════════════ */
        @media (max-width: 900px) {
          /* Ocultar links y auth de desktop */
          .nav-links  { display: none; }
          .nav-auth   { display: none; }
          .nav-badge  { display: none; }
          /* Mostrar toggle de nav mobile */
          .nav-mobile-toggle { display: flex; }
          /* El botón de panel ya es visible si show-panel está activo —
             En mobile queda a la izquierda del logo, visible para abrir el sidebar */
        }
        @media (max-width: 480px) {
          .nav-inner { padding: 0 14px; gap: 8px; }
          .nav-logo-text { font-size: 1rem; }
        }
      `}),o.jsxs("header",{className:`nav-header${u?" scrolled":""}`,children:[o.jsxs("div",{className:"nav-inner",children:[o.jsxs("button",{className:["nav-panel-btn",n?"show-panel":"",n&&t?"panel-active":""].join(" ").trim(),onClick:m,onMouseEnter:()=>I(!0),onMouseLeave:()=>I(!1),"aria-label":t?"Ocultar panel lateral":"Mostrar panel lateral",children:[o.jsx(Om,{open:t}),x&&o.jsx("span",{className:"panel-tooltip",children:t?"Ocultar panel":"Mostrar panel"})]}),o.jsxs("button",{className:"nav-logo-btn",onClick:()=>E("home"),children:[o.jsx("div",{className:"nav-logo-icon",children:"📚"}),o.jsxs("span",{className:"nav-logo-text",children:["Apuntes",o.jsx("span",{children:"UC"})]})]}),o.jsx("span",{className:"nav-badge",children:"Continental"}),o.jsx("nav",{className:"nav-links","aria-label":"Navegación principal",children:_s.map(d=>o.jsxs("button",{onClick:()=>E(d.key),className:["nav-link",e===d.key?"active":"",d.highlight?"nav-link-highlight":""].join(" ").trim(),children:[d.key==="planes"&&o.jsx("span",{className:"nav-pro-dot"}),d.label]},d.key))}),o.jsx("div",{className:"nav-auth",children:i?o.jsxs("div",{className:"nav-user-wrap",ref:w,children:[o.jsxs("div",{className:"nav-user-chip",onClick:()=>v(d=>!d),role:"button",tabIndex:0,"aria-expanded":h,children:[o.jsx("div",{className:"nav-user-avatar",children:i.nombre[0]}),o.jsx("span",{className:"nav-user-name",children:i.nombre}),o.jsx("span",{className:`nav-user-chevron${h?" open":""}`,children:"▼"})]}),h&&o.jsxs("div",{className:"nav-user-dropdown",children:[o.jsxs("div",{className:"nav-user-info",children:[o.jsxs("div",{className:"nav-user-info-name",children:[i.nombre," ",i.apellido]}),o.jsx("div",{className:"nav-user-info-meta",children:i.carrera}),o.jsxs("div",{className:"nav-user-info-meta",children:["Ciclo ",i.ciclo," · ",i.descargas,"/",i.descargasMax," descargas"]}),o.jsx("span",{className:"nav-user-info-plan",children:i.plan==="free"?"Plan Gratuito":i.plan==="premium"?"⭐ Premium":"🏆 Pro"})]}),o.jsx("button",{className:"nav-dropdown-item",onClick:()=>E("planes"),children:"⭐ Mejorar plan"}),o.jsx("div",{className:"nav-dropdown-sep"}),o.jsx("button",{className:"nav-dropdown-item danger",onClick:()=>{l(),v(!1)},children:"← Cerrar sesión"})]})]}):o.jsxs(o.Fragment,{children:[o.jsx("button",{className:"nav-btn-secondary",onClick:()=>E("login"),children:"Ingresar"}),o.jsx("button",{className:"nav-btn-primary",onClick:()=>E("planes"),children:"Empezar gratis"})]})}),o.jsxs("button",{className:`nav-mobile-toggle${s?" open":""}`,onClick:()=>c(d=>!d),"aria-label":s?"Cerrar menú":"Abrir menú de navegación","aria-expanded":s,children:[o.jsx($m,{}),o.jsx("span",{className:"close-x",children:"✕"})]})]}),o.jsxs("div",{className:`nav-mobile-drawer${s?" open":""}`,children:[o.jsx("div",{className:"nav-mobile-links",children:_s.map(d=>o.jsxs("button",{onClick:()=>E(d.key),className:["nav-mobile-link",e===d.key?"active":"",d.highlight?"highlight":""].join(" ").trim(),children:[o.jsx("span",{className:"nav-mobile-link-icon",children:d.icon}),d.label,d.highlight&&o.jsx("span",{style:{marginLeft:"auto",fontSize:"0.68rem",color:"var(--indigo-light)",fontWeight:700,letterSpacing:"0.05em"},children:"POPULAR"})]},d.key))}),o.jsx("div",{className:"nav-mobile-auth",children:i?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"nav-mobile-user-card",children:[o.jsx("div",{className:"nav-mobile-avatar",children:i.nombre[0]}),o.jsxs("div",{className:"nav-mobile-user-info",children:[o.jsxs("div",{className:"nav-mobile-user-name",children:[i.nombre," ",i.apellido]}),o.jsxs("div",{className:"nav-mobile-user-meta",children:["Ciclo ",i.ciclo," · ",i.carrera.split(" ").slice(0,2).join(" ")]})]}),o.jsxs("span",{className:"nav-mobile-points",children:["⭐ ",i.puntos]})]}),i.plan==="free"&&o.jsx("button",{className:"nav-mobile-btn-primary",onClick:()=>E("planes"),children:"⚡ Mejorar a Premium — S/. 5/mes"}),o.jsx("button",{className:"nav-mobile-logout",onClick:()=>{l(),c(!1)},children:"← Cerrar sesión"})]}):o.jsxs(o.Fragment,{children:[o.jsx("button",{className:"nav-mobile-btn-primary",onClick:()=>E("planes"),children:"Empezar gratis"}),o.jsx("button",{className:"nav-mobile-btn-secondary",onClick:()=>E("login"),children:"Ya tengo cuenta"})]})})]})]})]})}const Hm=[{key:"home",icon:"🏠",label:"Inicio"},{key:"cursos",icon:"📖",label:"Todos los cursos"},{key:"apuntes",icon:"📝",label:"Apuntes"},{key:"examenes",icon:"📋",label:"Exámenes"},{key:"docentes",icon:"👨‍🏫",label:"Docentes"}],Vm=[{id:1,nombre:"Ing. Sistemas",color:"#0891b2",emoji:"💻"},{id:11,nombre:"Adm. Negocios Dig.",color:"#4f46e5",emoji:"💼"},{id:19,nombre:"Medicina Humana",color:"#16a34a",emoji:"🩺"},{id:18,nombre:"Derecho",color:"#d97706",emoji:"⚖️"},{id:2,nombre:"Ing. Industrial",color:"#0e7490",emoji:"⚙️"},{id:16,nombre:"Contabilidad",color:"#dc2626",emoji:"📊"},{id:22,nombre:"Psicología",color:"#0f766e",emoji:"🧠"},{id:3,nombre:"Ing. Civil",color:"#155e75",emoji:"🏗️"}];function Gm({page:e,navigate:r,open:t,onClose:a,show:n}){const{user:i}=Rt();y.useEffect(()=>{const c=window.innerWidth<=900;return document.body.style.overflow=c&&n&&t?"hidden":"",()=>{document.body.style.overflow=""}},[t,n]);const l=c=>{r(c),a()},s=n&&t;return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        /* ════════════════════════════════════════════════
           SIDEBAR WRAPPER
           En desktop: ocupa espacio real en el layout flex.
           Anima su width para empujar/jalar el contenido.
           En mobile/tablet: width siempre 0, el aside
           flota como drawer encima del contenido.

           Cuando show=false (página sin sidebar), el wrapper
           colapsa a width:0 igual que cuando está cerrado.
        ════════════════════════════════════════════════ */
        .sidebar-wrap {
          width: 256px;
          flex-shrink: 0;
          position: relative;
          transition: width 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .sidebar-wrap.sb-closed {
          width: 0;
        }

        /* ════════════════════════════════════════════════
           OVERLAY — visible en mobile/tablet cuando abierto
        ════════════════════════════════════════════════ */
        .sidebar-overlay {
          display: none; /* se activa por media query */
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          z-index: 149;
          backdrop-filter: blur(2px);
          animation: overlay-in 0.2s ease;
        }
        @keyframes overlay-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ════════════════════════════════════════════════
           ASIDE — siempre fixed, siempre 256px de ancho.
           En desktop se muestra/oculta con opacity+visibility.
           En mobile/tablet se desliza con translateX.
        ════════════════════════════════════════════════ */
        .sidebar {
          position: fixed;
          top: 64px;
          left: 0;
          bottom: 0;
          width: 256px;
          background: var(--bg-card);
          border-right: 1px solid var(--border);
          overflow-y: auto;
          overflow-x: hidden;
          padding: 16px 0 100px;
          z-index: 150;
          display: flex;
          flex-direction: column;
          scrollbar-width: thin;
          scrollbar-color: var(--border) transparent;
          /* Desktop: transición suave de visibilidad */
          transition:
            transform  0.28s cubic-bezier(0.4, 0, 0.2, 1),
            opacity    0.28s cubic-bezier(0.4, 0, 0.2, 1),
            visibility 0.28s;
        }
        .sidebar::-webkit-scrollbar { width: 4px; }
        .sidebar::-webkit-scrollbar-track { background: transparent; }
        .sidebar::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }

        /* Desktop abierto y visible */
        .sidebar {
          transform: translateX(0);
          opacity: 1;
          visibility: visible;
        }
        /* Desktop cerrado (wrapper width:0) — el aside se oculta visualmente */
        .sidebar-wrap.sb-closed .sidebar {
          opacity: 0;
          visibility: hidden;
        }

        /* ─── User card ─── */
        .sb-user-card {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 16px;
          margin: 0 10px 8px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.15s;
          text-align: left;
          width: calc(100% - 20px);
        }
        .sb-user-card:hover {
          border-color: rgba(99,102,241,0.35);
          background: rgba(99,102,241,0.05);
        }
        .sb-user-avatar {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--indigo), #7c3aed);
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 0.95rem; color: #fff;
          flex-shrink: 0;
          box-shadow: 0 0 12px rgba(99,102,241,0.3);
        }
        .sb-user-info { flex: 1; min-width: 0; }
        .sb-user-name {
          font-weight: 700; font-size: 0.85rem;
          color: var(--text-primary);
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .sb-user-meta {
          font-size: 0.72rem; color: var(--text-muted); margin-top: 1px;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .sb-points-badge {
          font-size: 0.7rem; font-weight: 700;
          color: var(--amber);
          background: var(--amber-dim);
          border: 1px solid rgba(245,158,11,0.2);
          border-radius: 100px;
          padding: 3px 8px;
          flex-shrink: 0;
        }

        /* ─── Downloads bar ─── */
        .sb-downloads {
          margin: 0 10px 16px;
          padding: 10px 14px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 12px;
        }
        .sb-downloads-label {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 6px;
        }
        .sb-downloads-text { font-size: 0.72rem; color: var(--text-muted); }
        .sb-downloads-count { font-size: 0.72rem; font-weight: 700; color: var(--text-secondary); }
        .sb-progress-track {
          height: 5px; background: var(--bg-card);
          border-radius: 100px; overflow: hidden;
        }
        .sb-progress-fill {
          height: 100%; border-radius: 100px;
          background: linear-gradient(90deg, var(--indigo), #7c3aed);
          transition: width 0.4s ease;
        }

        /* ─── Section label ─── */
        .sb-section { padding: 8px 10px 4px; }
        .sb-section-label {
          font-size: 0.65rem; font-weight: 800;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--text-muted); padding: 0 8px; margin-bottom: 4px;
        }

        /* ─── Nav items ─── */
        .sb-nav-item {
          display: flex; align-items: center; gap: 10px;
          width: 100%; padding: 9px 12px; border-radius: 10px;
          background: none; border: none; cursor: pointer;
          color: var(--text-secondary); font-size: 0.875rem; font-weight: 500;
          text-align: left; transition: all 0.14s; font-family: var(--font-body);
        }
        .sb-nav-item:hover { background: var(--bg-elevated); color: var(--text-primary); }
        .sb-nav-item.active {
          background: var(--indigo-dim); color: var(--indigo-light); font-weight: 600;
        }
        .sb-nav-icon { font-size: 1rem; width: 22px; text-align: center; flex-shrink: 0; }

        /* ─── Divider ─── */
        .sb-divider { height: 1px; background: var(--border); margin: 10px 16px; }

        /* ─── Stats ─── */
        .sb-stats {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 6px; padding: 0 10px; margin-bottom: 6px;
        }
        .sb-stat {
          background: var(--bg-elevated); border: 1px solid var(--border);
          border-radius: 10px; padding: 8px 10px; text-align: center;
        }
        .sb-stat-value {
          font-size: 0.95rem; font-weight: 800; color: var(--text-primary);
          font-family: var(--font-display); line-height: 1;
        }
        .sb-stat-label { font-size: 0.65rem; color: var(--text-muted); margin-top: 2px; }

        /* ─── Carreras ─── */
        .sb-carreras-grid { display: flex; flex-direction: column; gap: 2px; }
        .sb-carrera-item {
          display: flex; align-items: center; gap: 9px;
          background: none; border: none; cursor: pointer;
          color: var(--text-muted); font-size: 0.8rem; text-align: left;
          padding: 6px 12px; border-radius: 9px;
          font-family: var(--font-body); transition: all 0.14s; width: 100%;
        }
        .sb-carrera-item:hover { background: var(--bg-elevated); color: var(--text-primary); }
        .sb-carrera-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
        .sb-carrera-name {
          flex: 1; min-width: 0;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }

        /* ─── Upgrade ─── */
        .sb-upgrade {
          margin: auto 10px 0;
          padding: 16px 14px;
          background: linear-gradient(135deg, rgba(99,102,241,0.12), rgba(124,58,237,0.12));
          border: 1px solid rgba(99,102,241,0.22);
          border-radius: 14px;
          display: flex; flex-direction: column; gap: 10px;
        }
        .sb-upgrade-title {
          font-weight: 700; font-size: 0.88rem; color: var(--text-primary);
          display: flex; align-items: center; gap: 7px;
        }
        .sb-upgrade-desc {
          font-size: 0.75rem; color: var(--text-secondary);
          line-height: 1.5; margin-top: -4px;
        }
        .sb-upgrade-btn {
          background: linear-gradient(135deg, var(--indigo), #7c3aed);
          border: none; border-radius: 9px; padding: 9px 14px;
          color: #fff; font-size: 0.82rem; font-weight: 700;
          cursor: pointer; font-family: var(--font-body); text-align: center;
          box-shadow: 0 4px 14px rgba(99,102,241,0.3); transition: all 0.15s;
        }
        .sb-upgrade-btn:hover { opacity: 0.9; transform: translateY(-1px); }

        /* ════════════════════════════════════════════════
           MOBILE / TABLET (≤900px)
           El wrapper siempre tiene width:0 — no empuja nada.
           El aside se desliza desde la izquierda como drawer.
           El overlay se muestra cuando está abierto.
        ════════════════════════════════════════════════ */
        @media (max-width: 900px) {
          /* Wrapper siempre width:0 — no ocupa espacio en el layout */
          .sidebar-wrap,
          .sidebar-wrap.sb-closed {
            width: 0 !important;
            transition: none;
          }

          /* Overlay visible */
          .sidebar-overlay { display: block; }

          /* Aside: cerrado por defecto (fuera de pantalla por la izquierda) */
          .sidebar,
          .sidebar-wrap.sb-closed .sidebar {
            transform: translateX(-256px);
            opacity: 1;           /* siempre opaco, solo se desplaza */
            visibility: visible;  /* siempre accesible para la animación */
          }

          /* Aside abierto: se desliza dentro */
          .sidebar.sb-drawer-open {
            transform: translateX(0);
            box-shadow: 8px 0 40px rgba(0,0,0,0.5);
          }
        }

        @media (max-width: 480px) {
          .sidebar { width: 280px; }
          .sidebar,
          .sidebar-wrap.sb-closed .sidebar { transform: translateX(-280px); }
        }
      `}),s&&o.jsx("div",{className:"sidebar-overlay",onClick:a,"aria-hidden":"true"}),o.jsx("div",{className:`sidebar-wrap${s?"":" sb-closed"}`,children:o.jsxs("aside",{className:`sidebar${s?" sb-drawer-open":""}`,"aria-label":"Menú lateral","aria-hidden":!s,children:[i?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sb-user-card",onClick:()=>l("planes"),children:[o.jsx("div",{className:"sb-user-avatar",children:i.nombre[0]}),o.jsxs("div",{className:"sb-user-info",children:[o.jsxs("div",{className:"sb-user-name",children:[i.nombre," ",i.apellido]}),o.jsxs("div",{className:"sb-user-meta",children:[i.carrera.split(" ").slice(0,3).join(" ")," · Ciclo ",i.ciclo]})]}),o.jsxs("div",{className:"sb-points-badge",children:["⭐ ",i.puntos]})]}),o.jsxs("div",{className:"sb-downloads",children:[o.jsxs("div",{className:"sb-downloads-label",children:[o.jsx("span",{className:"sb-downloads-text",children:"Descargas del mes"}),o.jsxs("span",{className:"sb-downloads-count",children:[i.descargas,"/",i.descargasMax]})]}),o.jsx("div",{className:"sb-progress-track",children:o.jsx("div",{className:"sb-progress-fill",style:{width:`${i.descargas/i.descargasMax*100}%`}})})]})]}):o.jsx("div",{style:{padding:"14px 10px 8px"},children:o.jsx("button",{onClick:()=>l("login"),style:{width:"100%",padding:"11px",background:"var(--bg-elevated)",border:"1px dashed rgba(99,102,241,0.3)",borderRadius:"12px",color:"var(--indigo-light)",fontSize:"0.85rem",fontWeight:600,cursor:"pointer",fontFamily:"var(--font-body)"},children:"→ Inicia sesión para guardar tu progreso"})}),o.jsxs("div",{className:"sb-section",children:[o.jsx("div",{className:"sb-section-label",children:"Navegación"}),Hm.map(c=>o.jsxs("button",{onClick:()=>l(c.key),className:`sb-nav-item${e===c.key?" active":""}`,children:[o.jsx("span",{className:"sb-nav-icon",children:c.icon}),o.jsx("span",{children:c.label})]},c.key))]}),o.jsx("div",{className:"sb-divider"}),o.jsx("div",{className:"sb-section",children:o.jsx("div",{className:"sb-section-label",children:"Comunidad UC"})}),o.jsxs("div",{className:"sb-stats",children:[o.jsxs("div",{className:"sb-stat",children:[o.jsx("div",{className:"sb-stat-value",children:or.apuntes.toLocaleString()}),o.jsx("div",{className:"sb-stat-label",children:"Apuntes"})]}),o.jsxs("div",{className:"sb-stat",children:[o.jsx("div",{className:"sb-stat-value",children:or.examenes.toLocaleString()}),o.jsx("div",{className:"sb-stat-label",children:"Exámenes"})]}),o.jsxs("div",{className:"sb-stat",children:[o.jsx("div",{className:"sb-stat-value",children:or.estudiantes.toLocaleString()}),o.jsx("div",{className:"sb-stat-label",children:"Estudiantes"})]}),o.jsxs("div",{className:"sb-stat",children:[o.jsx("div",{className:"sb-stat-value",children:or.carreras}),o.jsx("div",{className:"sb-stat-label",children:"Carreras"})]})]}),o.jsx("div",{className:"sb-divider"}),o.jsxs("div",{className:"sb-section",children:[o.jsx("div",{className:"sb-section-label",children:"Carreras populares"}),o.jsx("div",{className:"sb-carreras-grid",children:Vm.map(c=>o.jsxs("button",{onClick:()=>l("cursos"),className:"sb-carrera-item",title:c.nombre,children:[o.jsx("div",{className:"sb-carrera-dot",style:{background:c.color}}),o.jsx("span",{style:{marginRight:2},children:c.emoji}),o.jsx("span",{className:"sb-carrera-name",children:c.nombre})]},c.id))})]}),(!i||(i==null?void 0:i.plan)==="free")&&o.jsxs("div",{className:"sb-upgrade",children:[o.jsxs("div",{className:"sb-upgrade-title",children:[o.jsx("span",{children:"⚡"})," Pasa a Premium"]}),o.jsx("div",{className:"sb-upgrade-desc",children:"Exámenes resueltos, apuntes premium y descargas ilimitadas por solo S/. 5/mes."}),o.jsx("button",{className:"sb-upgrade-btn",onClick:()=>l("planes"),children:"Ver planes →"})]})]})})]})}const qm={Plataforma:[{label:"Inicio",key:"home"},{label:"Cursos",key:"cursos"},{label:"Apuntes",key:"apuntes"},{label:"Exámenes",key:"examenes"},{label:"Docentes",key:"docentes"}],Planes:[{label:"Plan Gratuito",key:"planes"},{label:"Plan Premium",key:"planes"},{label:"Plan Pro Anual",key:"planes"}],Universidad:[{label:"UC Huancayo",href:"https://ucontinental.edu.pe/campus-huancayo/"},{label:"Conecta UC",href:"https://conecta.continental.edu.pe/"},{label:"Repositorio UC",href:"https://repositorio.continental.edu.pe/"},{label:"Fab Lab Continental",href:"https://ucontinental.edu.pe/"}],Soporte:[{label:"Contacto",href:"#"},{label:"Reportar error",href:"#"},{label:"Privacidad",href:"#"},{label:"Términos de uso",href:"#"}]},Wm=[{value:"2,840+",label:"Apuntes compartidos"},{value:"1,560+",label:"Exámenes disponibles"},{value:"8,900+",label:"Estudiantes activos"},{value:"5★",label:"QS Stars Aprendizaje Online"}],Km=[{label:"TikTok",icon:"🎵",href:"#"},{label:"Instagram",icon:"📸",href:"#"},{label:"Facebook",icon:"👥",href:"#"},{label:"WhatsApp",icon:"💬",href:"#"}];function Qm({navigate:e,sidebarOpen:r,showSidebar:t}){return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        .footer {
          position: relative;
          z-index: 1;

          isolation: isolate;

          background: var(--bg-card);
          border-top: 1px solid var(--border);

          margin-top: auto;

          /* ✅ IMPORTANTE */
          margin-left: 0;

          overflow: hidden;

          transition:
            margin-left 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* ✅ EMPUJA FOOTER */
        .footer.footer-sidebar-open {
          margin-left: 256px;
        }

        /* ─────────────────────────────
           Stats
        ───────────────────────────── */

        .footer-stats {
          border-bottom: 1px solid var(--border);
          padding: 32px 24px;
        }

        .footer-stats-inner {
          max-width: 1320px;

          margin: 0 auto;

          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .footer-stat {
          text-align: center;

          padding: 0 16px;

          border-right: 1px solid var(--border);
        }

        .footer-stat:last-child {
          border-right: none;
        }

        .footer-stat-value {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 800;

          color: var(--text-primary);

          margin-bottom: 4px;
        }

        .footer-stat-label {
          font-size: 0.78rem;

          color: var(--text-muted);
        }

        /* ─────────────────────────────
           Main
        ───────────────────────────── */

        .footer-main {
          max-width: 1320px;

          margin: 0 auto;

          padding: 48px 24px 32px;

          display: grid;
          grid-template-columns: 320px 1fr;

          gap: 64px;
        }

        /* ─────────────────────────────
           Brand
        ───────────────────────────── */

        .footer-logo-btn {
          display: flex;
          align-items: center;
          gap: 10px;

          background: none;
          border: none;

          cursor: pointer;

          padding: 0;

          margin-bottom: 18px;
        }

        .footer-logo-icon {
          width: 38px;
          height: 38px;

          border-radius: 12px;

          background:
            linear-gradient(
              135deg,
              var(--indigo),
              #7c3aed
            );

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 1.1rem;

          box-shadow:
            0 0 16px rgba(99,102,241,0.35);
        }

        .footer-logo-text {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 800;

          color: var(--text-primary);
        }

        .footer-logo-text span {
          color: var(--indigo-light);
        }

        .footer-tagline {
          font-size: 0.88rem;
          line-height: 1.7;

          color: var(--text-muted);

          margin-bottom: 22px;
        }

        /* ─────────────────────────────
           Socials
        ───────────────────────────── */

        .footer-socials {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;

          margin-bottom: 24px;
        }

        .footer-social {
          display: flex;
          align-items: center;
          gap: 6px;

          padding: 7px 12px;

          border-radius: 10px;
          border: 1px solid var(--border);

          text-decoration: none;

          color: var(--text-secondary);

          font-size: 0.8rem;

          transition: all 0.15s ease;
        }

        .footer-social:hover {
          background: var(--bg-elevated);

          color: var(--text-primary);

          border-color:
            rgba(255,255,255,0.16);
        }

        /* ─────────────────────────────
           Badge
        ───────────────────────────── */

        .footer-uc-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          padding: 8px 12px;

          border-radius: 10px;

          background: var(--bg-elevated);

          border: 1px solid var(--border);

          color: var(--text-muted);

          font-size: 0.76rem;

          line-height: 1.5;
        }

        .footer-uc-dot {
          width: 8px;
          height: 8px;

          border-radius: 50%;

          background: #16a34a;

          animation: footer-blink 2s infinite;
        }

        @keyframes footer-blink {
          0%,100% { opacity: 1; }
          50% { opacity: .4; }
        }

        /* ─────────────────────────────
           Links
        ───────────────────────────── */

        .footer-links {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0,1fr));

          gap: 32px;

          min-width: 0;
        }

        .footer-col {
          min-width: 0;
        }

        .footer-col-title {
          font-size: 0.74rem;
          font-weight: 800;

          letter-spacing: 0.1em;
          text-transform: uppercase;

          color: var(--text-muted);

          margin-bottom: 14px;
        }

        .footer-link-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-link {
          background: none;
          border: none;

          padding: 0;

          text-align: left;

          text-decoration: none;

          color: var(--text-secondary);

          font-size: 0.88rem;
          line-height: 1.45;

          cursor: pointer;

          transition: color .15s ease;

          font-family: var(--font-body);

          word-break: break-word;
        }

        .footer-link:hover {
          color: var(--text-primary);
        }

        /* ─────────────────────────────
           Bottom
        ───────────────────────────── */

        .footer-bottom {
          max-width: 1320px;

          margin: 0 auto;

          padding: 18px 24px;

          border-top: 1px solid var(--border);

          display: flex;
          justify-content: space-between;
          align-items: center;

          gap: 12px;

          flex-wrap: wrap;
        }

        .footer-bottom-left {
          display: flex;
          align-items: center;
          gap: 16px;

          flex-wrap: wrap;
        }

        .footer-copyright {
          font-size: 0.8rem;

          color: var(--text-secondary);
        }

        .footer-legal-links {
          display: flex;
          gap: 12px;

          flex-wrap: wrap;
        }

        .footer-legal-link {
          background: none;
          border: none;

          padding: 0;

          cursor: pointer;

          font-size: 0.78rem;

          color: var(--text-muted);

          transition: color .15s ease;
        }

        .footer-legal-link:hover {
          color: var(--text-secondary);
        }

        .footer-made-with {
          font-size: 0.8rem;

          color: var(--text-muted);

          white-space: nowrap;
        }

        /* ─────────────────────────────
           Responsive
        ───────────────────────────── */

        @media (max-width: 1100px) {

          .footer-main {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .footer-links {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-stats-inner {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-stat {
            border-right: none;
            border-bottom: 1px solid var(--border);

            padding: 20px 12px;
          }

          .footer-stat:nth-child(odd) {
            border-right: 1px solid var(--border);
          }

          .footer-stat:nth-child(3),
          .footer-stat:nth-child(4) {
            border-bottom: none;
          }
        }

        @media (max-width: 900px) {

          /* ✅ MOBILE */
          .footer.footer-sidebar-open {
            margin-left: 0;
          }
        }

        @media (max-width: 680px) {

          .footer-stats {
            padding: 22px 16px;
          }

          .footer-main {
            padding: 32px 16px 26px;
          }

          .footer-bottom {
            padding: 16px;
          }

          .footer-links {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .footer-bottom-left {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .footer-legal-links {
            display: none;
          }
        }

        @media (max-width: 480px) {

          .footer-stat-value {
            font-size: 1.3rem;
          }

          .footer-social {
            padding: 6px 10px;
          }

          .footer-made-with {
            white-space: normal;
          }
        }
      `}),o.jsxs("footer",{className:`footer ${t&&r?"footer-sidebar-open":""}`,children:[o.jsx("div",{className:"footer-stats",children:o.jsx("div",{className:"footer-stats-inner",children:Wm.map(a=>o.jsxs("div",{className:"footer-stat",children:[o.jsx("div",{className:"footer-stat-value",children:a.value}),o.jsx("div",{className:"footer-stat-label",children:a.label})]},a.label))})}),o.jsxs("div",{className:"footer-main",children:[o.jsxs("div",{children:[o.jsxs("button",{className:"footer-logo-btn",onClick:()=>e("home"),children:[o.jsx("div",{className:"footer-logo-icon",children:"📚"}),o.jsxs("div",{className:"footer-logo-text",children:["Apuntes",o.jsx("span",{children:"UC"})]})]}),o.jsx("p",{className:"footer-tagline",children:"La plataforma académica de la Universidad Continental. Comparte apuntes, accede a exámenes pasados y aprende junto a miles de estudiantes."}),o.jsx("div",{className:"footer-socials",children:Km.map(a=>o.jsxs("a",{href:a.href,className:"footer-social",children:[o.jsx("span",{children:a.icon}),a.label]},a.label))}),o.jsxs("div",{className:"footer-uc-badge",children:[o.jsx("div",{className:"footer-uc-dot"}),"Sede Huancayo · Av. San Carlos 1980"]})]}),o.jsx("div",{className:"footer-links",children:Object.entries(qm).map(([a,n])=>o.jsxs("div",{className:"footer-col",children:[o.jsx("div",{className:"footer-col-title",children:a}),o.jsx("div",{className:"footer-link-list",children:n.map(i=>i.key?o.jsx("button",{className:"footer-link",onClick:()=>e(i.key),children:i.label},i.label):o.jsxs("a",{href:i.href,className:"footer-link",target:"_blank",rel:"noopener noreferrer",children:[i.label," ↗"]},i.label))})]},a))})]}),o.jsxs("div",{className:"footer-bottom",children:[o.jsxs("div",{className:"footer-bottom-left",children:[o.jsx("div",{className:"footer-copyright",children:"© 2026 ApuntesUC · Proyecto estudiantil"}),o.jsxs("div",{className:"footer-legal-links",children:[o.jsx("button",{className:"footer-legal-link",children:"Términos"}),o.jsx("button",{className:"footer-legal-link",children:"Privacidad"}),o.jsx("button",{className:"footer-legal-link",children:"Cookies"})]})]}),o.jsx("div",{className:"footer-made-with",children:"Hecho por estudiantes 💜"})]})]})]})}const Ym={Resumen:"📄",Mapa:"🗺️",Guía:"📘",Apunte:"📝",Esquema:"📊",Código:"💻"},Gt=[{nombre:"Alianza del Pacífico",abrev:"A. Pacífico",icono:"🌏",color:"#4f46e5"},{nombre:"Alianza Universitaria SAP",abrev:"SAP Univ.",icono:"💼",color:"#0070d2"},{nombre:"Arzobispado de Huancayo",abrev:"Arzobispado",icono:"⛪",color:"#7c3aed"},{nombre:"Asociación Don Bosco",abrev:"Don Bosco",icono:"🎓",color:"#059669"},{nombre:"Caja Huancayo",abrev:"CMAC HYO",icono:"🏦",color:"#d97706"},{nombre:"Cámara de Comercio de Huancayo",abrev:"CCH",icono:"🏛️",color:"#0284c7"},{nombre:"Centro Digital Continental",abrev:"CDC",icono:"💻",color:"#7c3aed"},{nombre:"Electrocentro S.A.",abrev:"Electrocentro",icono:"⚡",color:"#f59e0b"},{nombre:"Hospital Daniel Alcides Carrión",abrev:"H. D.A.C.",icono:"🏥",color:"#dc2626"},{nombre:"Hospital El Carmen",abrev:"H. El Carmen",icono:"🏥",color:"#db2777"},{nombre:"IEEE",abrev:"IEEE",icono:"⚙️",color:"#00629b"},{nombre:"Minera Chinalco",abrev:"Chinalco",icono:"⛏️",color:"#374151"},{nombre:"Project Management Institute",abrev:"PMI",icono:"📊",color:"#0c7c59"},{nombre:"Red Asistencial Junín – EsSalud",abrev:"EsSalud",icono:"🩺",color:"#2563eb"},{nombre:"Red de Salud Valle del Mantaro",abrev:"R. Mantaro",icono:"🌿",color:"#16a34a"},{nombre:"Universidad de British Columbia",abrev:"UBC",icono:"🍁",color:"#c41230"},{nombre:"Universidad de la Costa",abrev:"U. Costa",icono:"🇨🇴",color:"#0057a8"},{nombre:"Univ. Tecnológica de Guangdong",abrev:"UTG China",icono:"🇨🇳",color:"#de2910"}];function qt(){const e=y.useRef(null),[r,t]=y.useState(!1);return y.useEffect(()=>{const a=e.current;if(!a)return;const n=new IntersectionObserver(([i])=>{i.isIntersecting&&(t(!0),n.disconnect())},{threshold:.12});return n.observe(a),()=>n.disconnect()},[]),[e,r]}function Ps({children:e,gap:r=16}){const t=y.useRef(null),a=y.useRef(!1),n=y.useRef(0),i=y.useRef(0),l=u=>{a.current=!0,n.current=u.pageX-t.current.offsetLeft,i.current=t.current.scrollLeft,t.current.style.cursor="grabbing",t.current.style.userSelect="none"},s=()=>{a.current=!1,t.current&&(t.current.style.cursor="grab",t.current.style.userSelect="")},c=u=>{if(!a.current)return;u.preventDefault();const h=(u.pageX-t.current.offsetLeft-n.current)*1.4;t.current.scrollLeft=i.current-h};return o.jsxs("div",{style:{position:"relative"},children:[o.jsx("div",{ref:t,onMouseDown:l,onMouseLeave:s,onMouseUp:s,onMouseMove:c,style:{display:"flex",gap:r,overflowX:"auto",scrollSnapType:"x mandatory",cursor:"grab",paddingBottom:8,scrollbarWidth:"none",msOverflowStyle:"none",WebkitOverflowScrolling:"touch"},children:e}),o.jsx("div",{style:{position:"absolute",top:0,left:0,width:32,height:"100%",background:"linear-gradient(to right, var(--bg-page,#0f0f13), transparent)",pointerEvents:"none"}}),o.jsx("div",{style:{position:"absolute",top:0,right:0,width:48,height:"100%",background:"linear-gradient(to left, var(--bg-page,#0f0f13), transparent)",pointerEvents:"none"}})]})}function Xm({items:e,speed:r=.5}){const t=y.useRef(null),a=y.useRef(null),n=y.useRef(null),i=y.useRef(0),l=y.useRef(!1);return y.useEffect(()=>{const s=()=>{if(!l.current&&t.current){i.current-=r;const c=t.current.scrollWidth;Math.abs(i.current)>=c&&(i.current=0),[t,a].forEach(u=>{u.current&&(u.current.style.transform=`translateX(${i.current}px)`)})}n.current=requestAnimationFrame(s)};return n.current=requestAnimationFrame(s),()=>cancelAnimationFrame(n.current)},[r]),o.jsxs("div",{style:{overflow:"hidden",position:"relative"},onMouseEnter:()=>{l.current=!0},onMouseLeave:()=>{l.current=!1},children:[o.jsxs("div",{style:{display:"flex",gap:12,width:"max-content",alignItems:"center"},children:[o.jsx("div",{ref:t,style:{display:"flex",gap:12,willChange:"transform",alignItems:"center"},children:e}),o.jsx("div",{ref:a,style:{display:"flex",gap:12,willChange:"transform",alignItems:"center"},children:e})]}),o.jsx("div",{style:{position:"absolute",top:0,left:0,width:80,height:"100%",background:"linear-gradient(to right, var(--bg-page,#0f0f13), transparent)",pointerEvents:"none",zIndex:2}}),o.jsx("div",{style:{position:"absolute",top:0,right:0,width:80,height:"100%",background:"linear-gradient(to left, var(--bg-page,#0f0f13), transparent)",pointerEvents:"none",zIndex:2}})]})}function Jm({items:e,speed:r=.45}){const t=y.useRef(null),a=y.useRef(null),n=y.useRef(null),i=y.useRef(0),l=y.useRef(!1);return y.useEffect(()=>{const s=()=>{if(!l.current&&t.current){i.current+=r;const c=t.current.scrollWidth;i.current>=c&&(i.current=0),t.current&&(t.current.style.transform=`translateX(${i.current-c}px)`),a.current&&(a.current.style.transform=`translateX(${i.current}px)`)}n.current=requestAnimationFrame(s)};return n.current=requestAnimationFrame(s),()=>cancelAnimationFrame(n.current)},[r]),o.jsxs("div",{style:{overflow:"hidden",position:"relative"},onMouseEnter:()=>{l.current=!0},onMouseLeave:()=>{l.current=!1},children:[o.jsxs("div",{style:{display:"flex",gap:12,width:"max-content",alignItems:"center"},children:[o.jsx("div",{ref:t,style:{display:"flex",gap:12,willChange:"transform",alignItems:"center"},children:e}),o.jsx("div",{ref:a,style:{display:"flex",gap:12,willChange:"transform",alignItems:"center"},children:e})]}),o.jsx("div",{style:{position:"absolute",top:0,left:0,width:80,height:"100%",background:"linear-gradient(to right, var(--bg-page,#0f0f13), transparent)",pointerEvents:"none",zIndex:2}}),o.jsx("div",{style:{position:"absolute",top:0,right:0,width:80,height:"100%",background:"linear-gradient(to left, var(--bg-page,#0f0f13), transparent)",pointerEvents:"none",zIndex:2}})]})}function Ms({c:e}){const[r,t]=y.useState(!1);return o.jsxs("div",{onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),title:e.nombre,style:{display:"flex",alignItems:"center",gap:10,padding:"10px 18px",borderRadius:100,background:r?`${e.color}18`:"var(--bg-card)",border:`1px solid ${r?e.color+"55":"var(--border)"}`,transition:"all .22s cubic-bezier(.4,0,.2,1)",transform:r?"translateY(-2px)":"none",boxShadow:r?`0 6px 20px ${e.color}22`:"none",cursor:"default",userSelect:"none",flexShrink:0,whiteSpace:"nowrap"},children:[o.jsx("span",{style:{width:30,height:30,borderRadius:"50%",background:`${e.color}22`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem",flexShrink:0,border:`1px solid ${e.color}33`},children:e.icono}),o.jsx("span",{style:{fontSize:".78rem",fontWeight:700,color:r?"var(--text-primary)":"var(--text-secondary)",letterSpacing:".01em",transition:"color .18s"},children:e.abrev})]})}function Zm({navigate:e}){const[r,t]=y.useState(!1);y.useEffect(()=>{const p=setTimeout(()=>t(!0),60);return()=>clearTimeout(p)},[]);const[a,n]=qt(),[i,l]=qt(),[s,c]=qt(),[u,g]=qt(),[h,v]=qt(),x=[...Be].sort((p,b)=>b.descargas-p.descargas).slice(0,8),I=[...mr].sort((p,b)=>b.likes-p.likes).slice(0,6),w=Gt.slice(0,Math.ceil(Gt.length/2)),E=Gt.slice(Math.ceil(Gt.length/2)),m=w.map((p,b)=>o.jsx(Ms,{c:p},b)),d=E.map((p,b)=>o.jsx(Ms,{c:p},b));return o.jsxs("div",{className:`hr${r?" hr-on":""}`,children:[o.jsx("style",{children:`
        /* ── root & tokens ── */
        .hr { --d: 0.07s; }
        .hr-fade { opacity:0; transform:translateY(20px); transition:opacity .6s ease,transform .6s ease; }
        .hr-on .hr-fade { opacity:1; transform:none; }
        .hr-on .d1{transition-delay:calc(var(--d)*1)}
        .hr-on .d2{transition-delay:calc(var(--d)*2)}
        .hr-on .d3{transition-delay:calc(var(--d)*3)}
        .hr-on .d4{transition-delay:calc(var(--d)*4)}
        .hr-on .d5{transition-delay:calc(var(--d)*5)}
        .hr-on .d6{transition-delay:calc(var(--d)*6)}
        .hr-reveal { opacity:0; transform:translateY(24px); transition:opacity .55s ease,transform .55s ease; }
        .hr-reveal.visible { opacity:1; transform:none; }

        /* ── hero ── */
        .hr-hero {
          position:relative; min-height:92vh;
          display:flex; align-items:center; justify-content:center;
          padding:100px 24px 80px; overflow:hidden; text-align:center;
        }
        .hr-hero-bg {
          position:absolute; inset:0; pointer-events:none;
          background:
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,.28) 0%, transparent 65%),
            radial-gradient(ellipse 45% 35% at 85% 70%, rgba(124,58,237,.1) 0%, transparent 55%),
            radial-gradient(ellipse 30% 25% at 10% 80%, rgba(16,185,129,.06) 0%, transparent 50%);
        }
        .hr-grid {
          position:absolute; inset:0; pointer-events:none;
          background-image:
            linear-gradient(rgba(99,102,241,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,.035) 1px, transparent 1px);
          background-size:56px 56px;
          mask-image:radial-gradient(ellipse 85% 75% at 50% 40%, black 25%, transparent 75%);
        }
        .hr-orb {
          position:absolute; border-radius:50%; filter:blur(80px); pointer-events:none; opacity:.18;
        }
        .hr-orb-1 { width:500px; height:500px; top:-120px; left:50%; transform:translateX(-50%); background:radial-gradient(circle, #6366f1 0%, transparent 70%); }
        .hr-orb-2 { width:280px; height:280px; bottom:80px; right:8%; background:radial-gradient(circle, #7c3aed 0%, transparent 70%); }
        .hr-orb-3 { width:200px; height:200px; bottom:120px; left:5%; background:radial-gradient(circle, #10b981 0%, transparent 70%); opacity:.1; }

        .hr-inner { position:relative; z-index:1; max-width:820px; margin:0 auto; }

        .hr-badge {
          display:inline-flex; align-items:center; gap:8px;
          padding:6px 18px; border-radius:100px;
          font-size:.76rem; font-weight:700; letter-spacing:.05em;
          background:rgba(99,102,241,.12); border:1px solid rgba(99,102,241,.3);
          color:var(--indigo-light); margin-bottom:28px;
        }
        .hr-badge-dot {
          width:7px; height:7px; border-radius:50%; background:var(--indigo-light);
          animation:pulse-dot 2.2s ease infinite;
        }
        @keyframes pulse-dot { 0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(129,140,248,.55)} 50%{opacity:.7;box-shadow:0 0 0 6px rgba(129,140,248,0)} }

        .hr-h1 {
          font-family:var(--font-display); font-weight:900;
          font-size:clamp(2.2rem,6vw,4rem); line-height:1.08; letter-spacing:-.035em;
          color:var(--text-primary); margin-bottom:22px;
        }
        .hr-h1 .accent {
          background:linear-gradient(128deg,#818cf8 0%,#a78bfa 45%,#c084fc 100%);
          -webkit-background-clip:text; background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .hr-sub {
          color:var(--text-secondary);
          font-size:clamp(1rem,2.2vw,1.12rem);
          max-width:560px; margin:0 auto 40px; line-height:1.8;
        }

        .hr-cta {
          display:flex; gap:12px; justify-content:center; flex-wrap:wrap; margin-bottom:64px;
        }
        .btn-prim {
          background:linear-gradient(135deg,#4f46e5,#7c3aed);
          border:none; border-radius:14px; padding:14px 32px;
          color:#fff; font-family:var(--font-display); font-weight:700; font-size:.96rem;
          cursor:pointer; transition:all .22s;
          box-shadow:0 4px 24px rgba(99,102,241,.38);
          display:flex; align-items:center; gap:8px;
        }
        .btn-prim:hover { transform:translateY(-3px); box-shadow:0 10px 32px rgba(99,102,241,.5); }
        .btn-sec {
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:14px; padding:14px 32px;
          color:var(--text-primary); font-family:var(--font-display); font-weight:600; font-size:.96rem;
          cursor:pointer; transition:all .2s; display:flex; align-items:center; gap:8px;
        }
        .btn-sec:hover { background:var(--bg-card); border-color:rgba(255,255,255,.22); transform:translateY(-2px); }

        /* ── stats ── */
        .hr-stats {
          display:grid; grid-template-columns:repeat(6,1fr);
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:20px; overflow:hidden;
          box-shadow:0 8px 40px rgba(0,0,0,.18);
        }
        .hr-stat {
          display:flex; flex-direction:column; align-items:center;
          gap:4px; padding:20px 6px;
          border-right:1px solid var(--border); transition:background .18s;
          cursor:default;
        }
        .hr-stat:last-child { border-right:none; }
        .hr-stat:hover { background:var(--bg-elevated); }
        .hr-stat-ico { font-size:1.2rem; }
        .hr-stat-val {
          font-family:var(--font-display); font-weight:900;
          font-size:clamp(1.1rem,2vw,1.5rem); color:var(--text-primary); line-height:1;
        }
        .hr-stat-lbl {
          font-size:.62rem; font-weight:700; color:var(--text-muted);
          text-transform:uppercase; letter-spacing:.08em;
        }

        /* ── section shell ── */
        .hr-section { padding:80px 24px; max-width:1380px; margin:0 auto; }
        .hr-section-dark {
          background:var(--bg-card);
          border-top:1px solid var(--border); border-bottom:1px solid var(--border);
        }
        .hr-section-dark .hr-section { padding-top:72px; padding-bottom:72px; }

        .hr-sec-head {
          display:flex; align-items:flex-end; justify-content:space-between;
          gap:12px; margin-bottom:32px; flex-wrap:wrap;
        }
        .hr-sec-title {
          font-family:var(--font-display); font-weight:800;
          font-size:clamp(1.3rem,3vw,1.75rem);
          color:var(--text-primary); margin-bottom:4px; letter-spacing:-.025em;
        }
        .hr-sec-sub { font-size:.875rem; color:var(--text-muted); }
        .hr-see-all {
          background:none; border:1px solid var(--border); border-radius:10px;
          padding:7px 18px; color:var(--indigo-light);
          font-family:var(--font-body); font-weight:600; font-size:.82rem;
          cursor:pointer; transition:all .15s; white-space:nowrap;
        }
        .hr-see-all:hover { background:var(--indigo-dim); border-color:rgba(99,102,241,.4); }

        /* ── exam slider cards ── */
        .exam-slide {
          flex:0 0 300px; scroll-snap-align:start;
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:18px; padding:20px;
          cursor:pointer; transition:all .22s;
          display:flex; flex-direction:column;
          border-top:3px solid transparent;
        }
        .exam-slide:hover {
          transform:translateY(-4px);
          box-shadow:0 14px 36px rgba(0,0,0,.28);
        }
        .exam-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:14px; gap:6px; flex-wrap:wrap; }
        .chip-tipo {
          padding:3px 11px; border-radius:100px;
          font-size:.68rem; font-weight:800; letter-spacing:.06em; text-transform:uppercase;
        }
        .chip-parcial { background:rgba(99,102,241,.15); color:var(--indigo-light); }
        .chip-final   { background:rgba(244,63,94,.12); color:#fb7185; }
        .chip-small {
          font-size:.65rem; font-weight:700; border-radius:100px; padding:2px 8px;
        }
        .chip-ok      { background:var(--emerald-dim); color:var(--emerald); border:1px solid rgba(16,185,129,.3); }
        .chip-premium { background:var(--amber-dim); color:var(--amber); border:1px solid rgba(245,158,11,.3); }
        .exam-title {
          font-family:var(--font-display); font-weight:700;
          font-size:.93rem; line-height:1.38; margin-bottom:12px; color:var(--text-primary);
          display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;
        }
        .exam-curso {
          display:flex; align-items:center; gap:8px; margin-bottom:14px;
        }
        .dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; }
        .exam-curso-name { font-size:.8rem; color:var(--text-secondary); font-weight:500; min-width:0; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .exam-meta {
          display:flex; gap:12px; font-size:.76rem; color:var(--text-muted);
          margin-top:auto; padding-top:14px; border-top:1px solid var(--border);
          align-items:center;
        }
        .exam-date { margin-left:auto; font-size:.7rem; }

        /* ── apuntes grid ── */
        .ap-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        .ap-card {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:16px; padding:20px; cursor:pointer;
          transition:all .2s; display:flex; flex-direction:column;
        }
        .ap-card:hover { border-color:rgba(99,102,241,.3); transform:translateY(-3px); box-shadow:0 8px 24px rgba(0,0,0,.2); }
        .ap-type-row { display:flex; align-items:center; gap:7px; margin-bottom:10px; }
        .ap-type-lbl { font-size:.67rem; font-weight:800; color:var(--text-muted); text-transform:uppercase; letter-spacing:.08em; }
        .ap-title { font-family:var(--font-display); font-weight:700; font-size:.9rem; line-height:1.4; margin-bottom:6px; color:var(--text-primary); }
        .ap-curso { font-size:.78rem; color:var(--text-secondary); margin-bottom:12px; }
        .ap-meta { display:flex; gap:12px; font-size:.76rem; color:var(--text-muted); margin-top:auto; }

        /* ── carreras slider ── */
        .car-slide {
          flex:0 0 200px; scroll-snap-align:start;
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:16px; padding:20px 16px;
          cursor:pointer; transition:all .22s; text-align:center;
          display:flex; flex-direction:column; align-items:center; gap:10px;
        }
        .car-slide:hover { transform:translateY(-4px); box-shadow:0 10px 28px rgba(0,0,0,.22); }
        .car-ico { font-size:1.8rem; }
        .car-name { font-family:var(--font-display); font-weight:700; font-size:.8rem; color:var(--text-primary); line-height:1.3; }
        .car-fac { font-size:.65rem; color:var(--text-muted); font-weight:600; }
        .car-bar { width:100%; height:3px; border-radius:2px; margin-top:4px; }

        /* ── colaboraciones ── */
        .colab-section {
          padding:64px 0 72px;
          border-top:1px solid var(--border); border-bottom:1px solid var(--border);
          overflow:hidden;
        }
        .colab-header { max-width:1380px; margin:0 auto 32px; padding:0 24px; }
        .colab-count-badge {
          display:inline-flex; align-items:center; gap:6px;
          background:rgba(99,102,241,.1); border:1px solid rgba(99,102,241,.25);
          border-radius:100px; padding:4px 14px;
          font-size:.75rem; font-weight:700; color:var(--indigo-light);
        }
        .colab-marquee-row { padding:6px 0; }

        /* ── divider line between rows ── */
        .colab-divider {
          width:100%; height:1px;
          background:linear-gradient(90deg,transparent,var(--border),transparent);
          margin:10px 0;
        }

        /* ── steps ── */
        .hr-steps { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
        .hr-step {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:20px; padding:28px 22px;
          position:relative; overflow:hidden; transition:all .22s;
        }
        .hr-step:hover { border-color:rgba(99,102,241,.3); transform:translateY(-3px); box-shadow:0 10px 28px rgba(0,0,0,.2); }
        .hr-step-n {
          font-family:var(--font-display); font-size:.67rem; font-weight:800;
          color:var(--indigo-light); letter-spacing:.12em; text-transform:uppercase; margin-bottom:14px;
        }
        .hr-step-ico { font-size:2rem; margin-bottom:14px; display:block; }
        .hr-step-title { font-family:var(--font-display); font-weight:800; font-size:.95rem; margin-bottom:8px; color:var(--text-primary); }
        .hr-step-desc { color:var(--text-secondary); font-size:.84rem; line-height:1.7; }
        .hr-step-ghost {
          position:absolute; right:-6px; bottom:-14px;
          font-family:var(--font-display); font-weight:900; font-size:5.5rem;
          color:rgba(99,102,241,.05); pointer-events:none; line-height:1; user-select:none;
        }

        /* ── cta banner ── */
        .hr-banner {
          background:linear-gradient(135deg,rgba(99,102,241,.12) 0%,rgba(124,58,237,.08) 50%,rgba(99,102,241,.04) 100%);
          border-top:1px solid rgba(99,102,241,.18); border-bottom:1px solid rgba(99,102,241,.18);
          padding:96px 24px; text-align:center;
        }
        .hr-banner-title {
          font-family:var(--font-display); font-weight:900;
          font-size:clamp(1.7rem,4vw,2.4rem); letter-spacing:-.025em; margin-bottom:14px;
          color:var(--text-primary);
        }
        .hr-banner-sub {
          color:var(--text-secondary); font-size:1rem;
          max-width:500px; margin:0 auto 36px; line-height:1.75;
        }
        .hr-banner-btns { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }

        .hr-avs { display:flex; align-items:center; justify-content:center; gap:6px; margin-bottom:20px; }
        .hr-av {
          width:38px; height:38px; border-radius:50%;
          border:2.5px solid var(--bg-card);
          display:flex; align-items:center; justify-content:center;
          font-size:.72rem; font-weight:800; color:#fff;
          margin-left:-10px; flex-shrink:0;
        }
        .hr-av:first-child { margin-left:0; }
        .hr-av-ct {
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:100px; padding:4px 14px;
          font-size:.78rem; font-weight:600; color:var(--text-secondary);
          margin-left:8px;
        }

        /* ── responsive ── */
        @media(max-width:1100px) {
          .hr-stats { grid-template-columns:repeat(3,1fr); }
          .hr-stat:nth-child(3){ border-right:none; }
          .hr-stat:nth-child(4){ border-top:1px solid var(--border); }
          .hr-steps { grid-template-columns:repeat(2,1fr); }
          .ap-grid { grid-template-columns:repeat(2,1fr); }
        }
        @media(max-width:720px) {
          .hr-hero { min-height:auto; padding:88px 18px 60px; }
          .hr-stats { grid-template-columns:repeat(2,1fr); }
          .hr-stat:nth-child(2){ border-right:none; }
          .hr-stat:nth-child(3){ border-top:1px solid var(--border); border-right:1px solid var(--border); }
          .hr-stat:nth-child(5){ border-right:none; }
          .hr-section { padding:56px 16px; }
          .hr-steps { grid-template-columns:1fr; }
          .ap-grid { grid-template-columns:1fr; }
          .exam-slide { flex:0 0 268px; }
          .car-slide { flex:0 0 156px; }
          .hr-banner { padding:64px 16px; }
        }
        @media(max-width:480px) {
          .hr-stats { grid-template-columns:repeat(3,1fr); }
          .hr-stat { padding:14px 4px; }
          .hr-stat-val { font-size:1.05rem; }
          .hr-stat-lbl { font-size:.55rem; }
          .hr-stat:nth-child(3){ border-right:1px solid var(--border); }
          .hr-stat:nth-child(4){ border-top:1px solid var(--border); border-right:none; }
          .hr-stat:nth-child(5){ border-top:1px solid var(--border); border-right:1px solid var(--border); }
          .hr-stat:nth-child(6){ border-top:1px solid var(--border); }
        }
      `}),o.jsxs("section",{className:"hr-hero",children:[o.jsx("div",{className:"hr-hero-bg"}),o.jsx("div",{className:"hr-grid"}),o.jsx("div",{className:"hr-orb hr-orb-1"}),o.jsx("div",{className:"hr-orb hr-orb-2"}),o.jsx("div",{className:"hr-orb hr-orb-3"}),o.jsxs("div",{className:"hr-inner",children:[o.jsx("div",{className:"hr-fade hr-on d1",style:{transitionDelay:".07s"},children:o.jsxs("div",{className:"hr-badge",children:[o.jsx("span",{className:"hr-badge-dot"}),"Plataforma académica · Universidad Continental"]})}),o.jsxs("h1",{className:"hr-h1 hr-fade d2",children:["El conocimiento de",o.jsx("br",{}),o.jsx("span",{className:"accent",children:"toda la UC, en un solo lugar"})]}),o.jsx("p",{className:"hr-sub hr-fade d3",children:"Accede a apuntes, exámenes anteriores y materiales de todos los ciclos y carreras. Compartido por estudiantes, para estudiantes."}),o.jsxs("div",{className:"hr-cta hr-fade d4",children:[o.jsx("button",{className:"btn-prim",onClick:()=>e("examenes"),children:"📋 Ver exámenes"}),o.jsx("button",{className:"btn-sec",onClick:()=>e("apuntes"),children:"📝 Explorar apuntes →"})]}),o.jsx("div",{className:"hr-stats hr-fade d5",children:[{lbl:"Apuntes",val:or.apuntes.toLocaleString(),ico:"📝"},{lbl:"Exámenes",val:or.examenes.toLocaleString(),ico:"📋"},{lbl:"Estudiantes",val:or.estudiantes.toLocaleString(),ico:"👥"},{lbl:"Cursos",val:or.cursos.toLocaleString(),ico:"📚"},{lbl:"Docentes",val:or.docentes.toLocaleString(),ico:"👨‍🏫"},{lbl:"Carreras",val:or.carreras.toLocaleString(),ico:"🏛️"}].map(p=>o.jsxs("div",{className:"hr-stat",children:[o.jsx("span",{className:"hr-stat-ico",children:p.ico}),o.jsx("span",{className:"hr-stat-val",children:p.val}),o.jsx("span",{className:"hr-stat-lbl",children:p.lbl})]},p.lbl))})]})]}),o.jsx("section",{className:"hr-section",ref:a,children:o.jsxs("div",{className:`hr-reveal${n?" visible":""}`,children:[o.jsxs("div",{className:"hr-sec-head",children:[o.jsxs("div",{children:[o.jsx("div",{className:"hr-sec-title",children:"Exámenes recientes"}),o.jsx("div",{className:"hr-sec-sub",children:"Los más descargados — arrastra para ver más"})]}),o.jsx("button",{className:"hr-see-all",onClick:()=>e("examenes"),children:"Ver todos →"})]}),o.jsx(Ps,{gap:16,children:x.map(p=>{const b=se.find(S=>S.id===p.cursoId);return o.jsxs("div",{className:"exam-slide",style:{borderTopColor:(b==null?void 0:b.color)||"transparent"},onClick:()=>e("examenes",{cursoId:String(p.cursoId)}),onMouseEnter:S=>{S.currentTarget.style.borderColor=`${(b==null?void 0:b.color)||"#6366f1"}55`,S.currentTarget.style.borderTopColor=(b==null?void 0:b.color)||"#6366f1"},onMouseLeave:S=>{S.currentTarget.style.borderColor="var(--border)",S.currentTarget.style.borderTopColor=(b==null?void 0:b.color)||"transparent"},children:[o.jsxs("div",{className:"exam-top",children:[o.jsx("span",{className:`chip-tipo ${p.tipo==="Final"?"chip-final":"chip-parcial"}`,children:p.tipo}),o.jsxs("div",{style:{display:"flex",gap:5},children:[p.resuelto&&o.jsx("span",{className:"chip-small chip-ok",children:"✓"}),p.premium&&o.jsx("span",{className:"chip-small chip-premium",children:"⭐"})]})]}),o.jsx("div",{className:"exam-title",children:p.titulo}),b&&o.jsxs("div",{className:"exam-curso",children:[o.jsx("span",{className:"dot",style:{background:b.color}}),o.jsx("span",{className:"exam-curso-name",children:b.nombre})]}),o.jsxs("div",{className:"exam-meta",children:[o.jsxs("span",{children:["⬇️ ",p.descargas.toLocaleString()]}),o.jsxs("span",{children:["❤️ ",p.likes]}),o.jsxs("span",{className:"exam-date",children:[p.año,"-",p.semestre]})]})]},p.id)})})]})}),o.jsx("div",{className:"hr-section-dark",ref:i,children:o.jsx("div",{className:"hr-section",children:o.jsxs("div",{className:`hr-reveal${l?" visible":""}`,children:[o.jsxs("div",{className:"hr-sec-head",children:[o.jsxs("div",{children:[o.jsx("div",{className:"hr-sec-title",children:"Apuntes destacados"}),o.jsx("div",{className:"hr-sec-sub",children:"Material verificado por la comunidad"})]}),o.jsx("button",{className:"hr-see-all",onClick:()=>e("apuntes"),children:"Ver todos →"})]}),o.jsx("div",{className:"ap-grid",children:I.map(p=>{const b=se.find(S=>S.id===p.cursoId);return o.jsxs("div",{className:"ap-card",onClick:()=>e("apuntes",{cursoId:String(p.cursoId),tipo:p.tipo}),children:[o.jsxs("div",{className:"ap-type-row",children:[o.jsx("span",{style:{fontSize:"1rem"},children:Ym[p.tipo]||"📄"}),o.jsx("span",{className:"ap-type-lbl",children:p.tipo}),p.premium&&o.jsx("span",{className:"chip-small chip-premium",style:{marginLeft:"auto"},children:"⭐ PRO"})]}),o.jsx("div",{className:"ap-title",children:p.titulo}),b&&o.jsx("div",{className:"ap-curso",children:b.nombre}),o.jsxs("div",{className:"ap-meta",children:[o.jsxs("span",{children:["⬇️ ",p.descargas.toLocaleString()]}),o.jsxs("span",{children:["❤️ ",p.likes]}),o.jsxs("span",{style:{marginLeft:"auto",fontSize:".7rem"},children:["Sem. ",p.semana]})]})]},p.id)})})]})})}),o.jsx("section",{className:"hr-section",ref:s,children:o.jsxs("div",{className:`hr-reveal${c?" visible":""}`,children:[o.jsxs("div",{className:"hr-sec-head",children:[o.jsxs("div",{children:[o.jsx("div",{className:"hr-sec-title",children:"Explora por carrera"}),o.jsx("div",{className:"hr-sec-sub",children:"Encuentra material específico para tu programa"})]}),o.jsx("button",{className:"hr-see-all",onClick:()=>e("cursos"),children:"Ver cursos →"})]}),o.jsx(Ps,{gap:14,children:te.map(p=>o.jsxs("div",{className:"car-slide",onClick:()=>e("examenes",{carreraId:String(p.id)}),onMouseEnter:b=>{b.currentTarget.style.borderColor=`${p.color}60`},onMouseLeave:b=>{b.currentTarget.style.borderColor="var(--border)"},children:[o.jsx("span",{className:"car-ico",children:p.icono||"🎓"}),o.jsx("div",{className:"car-name",children:p.nombre}),o.jsx("div",{className:"car-bar",style:{background:`linear-gradient(90deg, ${p.color}, ${p.color}44)`}})]},p.id))})]})}),o.jsx("div",{className:"colab-section",ref:u,children:o.jsxs("div",{className:`hr-reveal${g?" visible":""}`,children:[o.jsx("div",{className:"colab-header",children:o.jsxs("div",{className:"hr-sec-head",style:{marginBottom:0},children:[o.jsxs("div",{children:[o.jsx("div",{className:"hr-sec-title",children:"Alianzas y colaboraciones"}),o.jsx("div",{className:"hr-sec-sub",children:"Instituciones que impulsan la UC sede Huancayo"})]}),o.jsxs("div",{className:"colab-count-badge",children:["🤝 ",Gt.length," alianzas"]})]})}),o.jsx("div",{className:"colab-marquee-row",children:o.jsx(Xm,{items:m,speed:.5})}),o.jsx("div",{className:"colab-divider"}),o.jsx("div",{className:"colab-marquee-row",children:o.jsx(Jm,{items:d,speed:.42})})]})}),o.jsx("div",{className:"hr-section-dark",children:o.jsxs("div",{className:"hr-section",children:[o.jsxs("div",{style:{textAlign:"center",marginBottom:44},children:[o.jsx("div",{className:"hr-sec-title",children:"¿Cómo funciona?"}),o.jsx("div",{className:"hr-sec-sub",style:{marginTop:4},children:"Simple, rápido y colaborativo"})]}),o.jsx("div",{className:"hr-steps",children:[{n:"01",ico:"🔍",title:"Busca tu curso",desc:"Filtra por carrera, ciclo o docente y encuentra exactamente lo que necesitas."},{n:"02",ico:"⬇️",title:"Descarga al instante",desc:"Accede a apuntes y exámenes. Algunos son gratuitos, otros requieren cuenta premium."},{n:"03",ico:"📤",title:"Comparte y gana",desc:"Sube tus propios materiales, acumula puntos y desbloquea contenido exclusivo."},{n:"04",ico:"🏆",title:"Destácate",desc:"Asciende en el ranking y obtén beneficios para los estudiantes más activos."}].map(p=>o.jsxs("div",{className:"hr-step",children:[o.jsx("div",{className:"hr-step-n",children:p.n}),o.jsx("span",{className:"hr-step-ico",children:p.ico}),o.jsx("div",{className:"hr-step-title",children:p.title}),o.jsx("div",{className:"hr-step-desc",children:p.desc}),o.jsx("div",{className:"hr-step-ghost",children:p.n})]},p.n))})]})}),o.jsx("div",{className:"hr-banner",ref:h,children:o.jsxs("div",{className:`hr-reveal${v?" visible":""}`,children:[o.jsxs("div",{className:"hr-avs",children:[[["B","#4f46e5"],["M","#7c3aed"],["K","#0d9488"],["A","#d97706"],["R","#e11d48"]].map(([p,b],S)=>o.jsx("div",{className:"hr-av",style:{background:b},children:p},S)),o.jsx("span",{className:"hr-av-ct",children:"+8,900 estudiantes"})]}),o.jsx("h2",{className:"hr-banner-title",children:"¿Listo para aprobar con nota más alta?"}),o.jsx("p",{className:"hr-banner-sub",children:"Únete a más de 4,000 estudiantes de la Continental que ya usan ApuntesUC."}),o.jsxs("div",{className:"hr-banner-btns",children:[o.jsx("button",{className:"btn-prim",onClick:()=>e("login"),children:"🚀 Iniciar Sesión"}),o.jsx("button",{className:"btn-sec",onClick:()=>e("planes"),children:"⭐ Ver planes premium"})]})]})})]})}function ef({navigate:e}){const[r,t]=y.useState(""),[a,n]=y.useState("all"),[i,l]=y.useState("all"),[s,c]=y.useState("all"),u=y.useMemo(()=>s==="all"?[...new Set(se.map(x=>x.carreraId))].map(x=>te.find(I=>I.id===x)).filter(Boolean):te.filter(x=>String(x.facultadId)===s),[s]),g=y.useMemo(()=>se.filter(x=>{const I=r.toLowerCase(),w=x.nombre.toLowerCase().includes(I)||x.codigo.toLowerCase().includes(I),E=a==="all"||String(x.carreraId)===a,m=i==="all"||String(x.ciclo)===i,d=s==="all"||(()=>{const p=te.find(b=>b.id===x.carreraId);return p?String(p.facultadId)===s:!1})();return w&&E&&m&&d}),[r,a,i,s]),h=()=>{t(""),n("all"),l("all"),c("all")},v=r||a!=="all"||i!=="all"||s!=="all";return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        .cur-page { animation: cur-up 0.35s ease both; }
        @keyframes cur-up { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:none; } }

        .cur-header {
          display: flex; align-items: flex-start;
          justify-content: space-between; gap: 16px;
          margin-bottom: 28px; flex-wrap: wrap;
        }
        .cur-title {
          font-family: var(--font-display); font-weight: 900;
          font-size: clamp(1.5rem, 4vw, 2rem);
          color: var(--text-primary); margin-bottom: 4px; letter-spacing: -0.02em;
        }
        .cur-sub { font-size: 0.875rem; color: var(--text-muted); }
        .cur-count {
          background: var(--bg-elevated); border: 1px solid var(--border);
          border-radius: 100px; padding: 6px 16px;
          font-size: 0.82rem; font-weight: 600; color: var(--text-secondary);
          white-space: nowrap; align-self: flex-start; margin-top: 6px;
        }
        .cur-count span { color: var(--indigo-light); font-weight: 800; }

        .cur-filters { display: flex; gap: 10px; margin-bottom: 16px; flex-wrap: wrap; }
        .cur-search-wrap { position: relative; flex: 1; min-width: 200px; }
        .cur-search-icon { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); font-size: 0.9rem; pointer-events: none; }
        .cur-search {
          width: 100%; background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 11px; padding: 10px 14px 10px 36px;
          color: var(--text-primary); font-size: 0.875rem; font-family: var(--font-body);
          outline: none; transition: border-color 0.18s;
        }
        .cur-search:focus { border-color: rgba(99,102,241,0.5); }
        .cur-search::placeholder { color: var(--text-muted); }
        .cur-select {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 11px; padding: 10px 14px;
          color: var(--text-secondary); font-size: 0.875rem; font-family: var(--font-body);
          outline: none; cursor: pointer; transition: border-color 0.18s;
        }
        .cur-select:focus { border-color: rgba(99,102,241,0.5); }
        .cur-select.active { border-color: rgba(99,102,241,0.5); color: var(--indigo-light); background: var(--indigo-dim); }
        .cur-reset {
          background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.25);
          border-radius: 11px; padding: 10px 14px;
          color: #ef4444; font-size: 0.82rem; font-weight: 600;
          font-family: var(--font-body); cursor: pointer; white-space: nowrap; transition: all 0.15s;
        }
        .cur-reset:hover { background: rgba(239,68,68,0.14); }

        .cur-chips { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 28px; }
        .cur-chip {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 100px; padding: 5px 14px;
          font-size: 0.78rem; font-weight: 500; color: var(--text-muted);
          cursor: pointer; font-family: var(--font-body); transition: all 0.15s; white-space: nowrap;
          display: flex; align-items: center; gap: 6px;
        }
        .cur-chip:hover { background: var(--bg-elevated); color: var(--text-secondary); }
        .cur-chip.active { background: var(--indigo-dim); border-color: rgba(99,102,241,0.4); color: var(--indigo-light); }
        .cur-chip-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }

        .cur-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(288px, 1fr)); gap: 20px; }

        .cur-card {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 16px; padding: 20px;
          cursor: pointer; transition: all 0.22s;
          display: flex; flex-direction: column;
          border-top: 3px solid transparent;
          position: relative; overflow: hidden;
          animation: cur-card-in 0.3s ease both;
        }
        @keyframes cur-card-in {
          from { opacity:0; transform:scale(0.97) translateY(8px); }
          to   { opacity:1; transform:none; }
        }
        .cur-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.22); }
        .cur-card-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px; }
        .cur-code {
          font-size: 0.7rem; font-weight: 800; letter-spacing: 0.07em;
          border-radius: 7px; padding: 3px 9px; font-family: var(--font-display);
        }
        .cur-creds {
          font-size: 0.72rem; font-weight: 700;
          background: var(--bg-elevated); border: 1px solid var(--border);
          border-radius: 100px; padding: 2px 9px; color: var(--text-muted);
        }
        .cur-nombre {
          font-family: var(--font-display); font-weight: 800;
          font-size: 0.98rem; line-height: 1.3; margin-bottom: 6px; color: var(--text-primary);
        }
        .cur-carrera { color: var(--text-muted); font-size: 0.78rem; margin-bottom: 14px; }
        .cur-meta { display: flex; align-items: center; gap: 8px; margin-bottom: 16px; flex-wrap: wrap; }
        .cur-ciclo {
          background: var(--bg-elevated); border: 1px solid var(--border);
          border-radius: 100px; padding: 2px 10px;
          font-size: 0.7rem; font-weight: 700; color: var(--text-secondary);
        }
        .cur-docente { display: flex; align-items: center; gap: 6px; font-size: 0.76rem; color: var(--text-muted); }
        .cur-doc-av {
          width: 20px; height: 20px; border-radius: 50%;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 0.58rem; font-weight: 800; color: #fff; flex-shrink: 0;
        }
        .cur-actions { display: flex; gap: 8px; margin-top: auto; }
        .cur-action-btn {
          flex: 1; background: var(--bg-elevated); border: 1px solid var(--border);
          border-radius: 9px; padding: 8px 4px;
          font-size: 0.76rem; font-weight: 600; color: var(--text-secondary);
          cursor: pointer; font-family: var(--font-body); transition: all 0.15s; text-align: center;
        }
        .cur-action-btn:hover { background: var(--indigo-dim); color: var(--indigo-light); border-color: rgba(99,102,241,0.35); }

        .cur-empty {
          text-align: center; padding: 80px 24px; color: var(--text-muted);
          display: flex; flex-direction: column; gap: 12px; align-items: center;
        }
        .cur-empty-icon { font-size: 3rem; }
        .cur-empty-title { font-size: 1.05rem; font-weight: 700; color: var(--text-secondary); }

        @media (max-width: 640px) {
          .cur-filters { gap: 8px; }
          .cur-select { flex: 1; min-width: 0; }
          .cur-grid { grid-template-columns: 1fr; }
        }
      `}),o.jsxs("div",{className:"cur-page page-container",children:[o.jsxs("div",{className:"cur-header",children:[o.jsxs("div",{children:[o.jsx("h1",{className:"cur-title",children:"Cursos"}),o.jsxs("p",{className:"cur-sub",children:[se.length," cursos disponibles en la plataforma"]})]}),o.jsxs("span",{className:"cur-count",children:[o.jsx("span",{children:g.length})," resultados"]})]}),o.jsxs("div",{className:"cur-filters",children:[o.jsxs("div",{className:"cur-search-wrap",children:[o.jsx("span",{className:"cur-search-icon",children:"🔍"}),o.jsx("input",{className:"cur-search",placeholder:"Buscar curso o código...",value:r,onChange:x=>t(x.target.value)})]}),o.jsxs("select",{className:`cur-select${s!=="all"?" active":""}`,value:s,onChange:x=>{c(x.target.value),n("all")},children:[o.jsx("option",{value:"all",children:"Todas las facultades"}),Ze.map(x=>o.jsxs("option",{value:String(x.id),children:[x.icono," ",x.nombre]},x.id))]}),o.jsxs("select",{className:`cur-select${a!=="all"?" active":""}`,value:a,onChange:x=>n(x.target.value),children:[o.jsx("option",{value:"all",children:"Todas las carreras"}),u.map(x=>o.jsx("option",{value:String(x.id),children:x.nombre},x.id))]}),o.jsxs("select",{className:`cur-select${i!=="all"?" active":""}`,value:i,onChange:x=>l(x.target.value),children:[o.jsx("option",{value:"all",children:"Todos los ciclos"}),[1,2,3,4,5,6,7,8,9,10].map(x=>o.jsxs("option",{value:x,children:["Ciclo ",x]},x))]}),v&&o.jsx("button",{className:"cur-reset",onClick:h,children:"✕ Limpiar"})]}),o.jsxs("div",{className:"cur-chips",children:[o.jsx("button",{className:`cur-chip${a==="all"?" active":""}`,onClick:()=>n("all"),children:"Todas"}),u.slice(0,8).map(x=>o.jsxs("button",{className:`cur-chip${a===String(x.id)?" active":""}`,onClick:()=>n(String(x.id)),children:[o.jsx("span",{className:"cur-chip-dot",style:{background:x.color}}),x.codigo]},x.id))]}),g.length===0?o.jsxs("div",{className:"cur-empty",children:[o.jsx("div",{className:"cur-empty-icon",children:"🔍"}),o.jsx("div",{className:"cur-empty-title",children:"No encontramos cursos con esos filtros"}),o.jsx("div",{children:"Prueba cambiando la búsqueda o los filtros"}),o.jsx("button",{className:"cur-reset",onClick:h,style:{marginTop:8},children:"✕ Limpiar filtros"})]}):o.jsx("div",{className:"cur-grid",children:g.map((x,I)=>{const w=Xr.find(m=>m.id===x.docenteId),E=te.find(m=>m.id===x.carreraId);return o.jsx(rf,{curso:x,docente:w,carrera:E,navigate:e,delay:Math.min(I*.03,.24)},x.id)})})]})]})}function rf({curso:e,docente:r,carrera:t,navigate:a,delay:n}){return o.jsxs("div",{className:"cur-card",style:{borderTopColor:e.color,animationDelay:`${n}s`},onClick:()=>a("examenes",{carreraId:String(e.carreraId)}),onMouseEnter:i=>{i.currentTarget.style.borderColor=`${e.color}55`,i.currentTarget.style.borderTopColor=e.color},onMouseLeave:i=>{i.currentTarget.style.borderColor="var(--border)",i.currentTarget.style.borderTopColor=e.color},children:[o.jsxs("div",{className:"cur-card-top",children:[o.jsx("span",{className:"cur-code",style:{background:`${e.color}20`,color:e.color,border:`1px solid ${e.color}40`},children:e.codigo}),o.jsxs("span",{className:"cur-creds",children:[e.creditos," cr."]})]}),o.jsx("h3",{className:"cur-nombre",children:e.nombre}),o.jsx("p",{className:"cur-carrera",children:(t==null?void 0:t.nombre)??"—"}),o.jsxs("div",{className:"cur-meta",children:[o.jsxs("span",{className:"cur-ciclo",children:["Ciclo ",e.ciclo]}),r&&o.jsxs("span",{className:"cur-docente",children:[o.jsx("span",{className:"cur-doc-av",children:r.iniciales}),r.nombre.split(" ").slice(1,3).join(" ")]})]}),o.jsxs("div",{className:"cur-actions",children:[o.jsx("button",{className:"cur-action-btn",onClick:i=>{i.stopPropagation(),a("apuntes",{carreraId:String(e.carreraId)})},children:"📝 Apuntes"}),o.jsx("button",{className:"cur-action-btn",onClick:i=>{i.stopPropagation(),a("examenes",{carreraId:String(e.carreraId)})},children:"📋 Exámenes"})]})]})}function au({open:e,onClose:r,title:t,children:a,size:n="md"}){if(y.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[e]),y.useEffect(()=>{if(!e)return;const l=s=>{s.key==="Escape"&&r()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[e,r]),!e)return null;const i=n==="lg"?680:n==="sm"?400:540;return eu.createPortal(o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        @keyframes modal-overlay-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modal-slide-up {
          from { opacity: 0; transform: translateY(24px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }

        /* ── Overlay ── */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.78);
          backdrop-filter: blur(7px);
          -webkit-backdrop-filter: blur(7px);
          /* z-index muy alto para superar Navbar (normalmente ~100) y Sidebar */
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 16px;
          animation: modal-overlay-in 0.18s ease;
          /* Permitir que el overlay mismo no scrollee */
          overflow: hidden;
        }

        /* ── Caja del modal ── */
        .modal-box {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 22px;
          width: 100%;
          /* flex column para que header/footer sean fijos y body scrollee */
          display: flex;
          flex-direction: column;
          /* Altura máxima: viewport menos padding del overlay */
          max-height: calc(100vh - 48px);
          animation: modal-slide-up 0.24s cubic-bezier(0.34, 1.4, 0.64, 1);
          box-shadow:
            0 32px 80px rgba(0, 0, 0, 0.55),
            0 0 0 1px rgba(255, 255, 255, 0.05);
          /* Evitar que el box crezca más allá del viewport */
          overflow: hidden;
        }

        /* ── Header (fijo, no scrollea) ── */
        .modal-header {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 22px 24px 18px;
          border-bottom: 1px solid var(--border);
          flex-shrink: 0;
        }
        .modal-title-wrap { flex: 1; min-width: 0; }
        .modal-title {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.05rem;
          color: var(--text-primary);
          line-height: 1.35;
          margin: 0;
          /* Título largo: wrappea en lugar de desbordarse */
          word-break: break-word;
        }

        /* ── Botón cerrar ── */
        .modal-close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          min-width: 32px;   /* evitar que se comprima */
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 9px;
          cursor: pointer;
          color: var(--text-muted);
          font-size: 0.85rem;
          flex-shrink: 0;
          transition: all 0.15s;
          margin-top: 1px;
        }
        .modal-close:hover {
          background: var(--bg-card);
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.2);
        }

        /* ── Body (el único que scrollea) ── */
        .modal-body {
          padding: 22px 24px 24px;
          overflow-y: auto;   /* ✅ solo el body scrollea */
          flex: 1;            /* ocupa todo el espacio restante */
          /* scrollbar fina y elegante */
          scrollbar-width: thin;
          scrollbar-color: var(--border) transparent;
          /* Mínima altura para que no colapse */
          min-height: 0;
        }
        .modal-body::-webkit-scrollbar        { width: 4px; }
        .modal-body::-webkit-scrollbar-track  { background: transparent; }
        .modal-body::-webkit-scrollbar-thumb  { background: var(--border); border-radius: 4px; }

        /* ── Footer opcional ── */
        .modal-footer {
          padding: 16px 24px;
          border-top: 1px solid var(--border);
          flex-shrink: 0;
        }

        /* ── Mobile: sheet desde abajo ── */
        @media (max-width: 520px) {
          .modal-overlay {
            align-items: flex-end;
            padding: 0;
          }
          .modal-box {
            border-radius: 22px 22px 0 0;
            max-height: 90vh;
            /* En mobile la animación viene desde abajo */
            animation: modal-slide-mobile 0.28s cubic-bezier(0.34, 1.2, 0.64, 1);
          }
          @keyframes modal-slide-mobile {
            from { opacity: 0; transform: translateY(40px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        }
      `}),o.jsx("div",{className:"modal-overlay",onMouseDown:r,children:o.jsxs("div",{className:"modal-box",style:{maxWidth:i},onMouseDown:l=>l.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("div",{className:"modal-title-wrap",children:o.jsx("h3",{className:"modal-title",children:t})}),o.jsx("button",{className:"modal-close",onClick:r,"aria-label":"Cerrar modal",children:"✕"})]}),o.jsx("div",{className:"modal-body",children:a})]})})]}),document.body)}const En=["Todos","Resumen","Guía","Apunte","Mapa","Esquema","Código"],Xt={Resumen:"📄",Mapa:"🗺️",Guía:"📘",Apunte:"📝",Esquema:"📊",Código:"💻"},tf=[{value:"fecha",label:"Más recientes"},{value:"descargas",label:"Más descargados"},{value:"likes",label:"Más valorados"},{value:"vistas",label:"Más vistos"}];function af({msg:e,onDone:r}){return y.useEffect(()=>{const t=setTimeout(r,3e3);return()=>clearTimeout(t)},[r]),o.jsxs("div",{style:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",background:"var(--bg-elevated)",border:"1px solid var(--border)",borderRadius:12,padding:"11px 20px",zIndex:1e4,fontSize:"0.82rem",color:"var(--text-secondary)",fontWeight:600,boxShadow:"0 8px 28px rgba(0,0,0,0.35)",display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{children:"🔒"}),e]})}function of({archivo:e}){const r=Po[e.tipo]||Po.pdf,t=e.paginas?`${e.paginas} págs.`:e.diapositivas?`${e.diapositivas} slides`:e.hojas?`${e.hojas} hojas`:e.archivos?`${e.archivos} archivos`:e.dimensiones??"",a=!!e.url;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,background:"var(--bg-elevated)",border:"1px solid var(--border)",borderRadius:11,padding:"9px 13px"},children:[o.jsx("span",{style:{width:34,height:34,borderRadius:8,flexShrink:0,background:r.bg,border:`1px solid ${r.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem"},children:r.icon}),o.jsxs("div",{style:{flex:1,minWidth:0},children:[o.jsx("div",{style:{fontSize:"0.8rem",fontWeight:600,color:"var(--text-primary)"},children:e.nombre}),o.jsxs("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",marginTop:1},children:[r.label," · ",e.tamaño,t?` · ${t}`:""]})]}),o.jsx("button",{onClick:()=>ru(e),style:{flexShrink:0,background:a?"var(--indigo-dim)":"var(--bg-card)",border:`1px solid ${a?"rgba(99,102,241,0.35)":"var(--border)"}`,borderRadius:7,padding:"4px 10px",color:a?"var(--indigo-light)":"var(--text-muted)",fontSize:"0.7rem",fontWeight:700,cursor:a?"pointer":"not-allowed"},children:a?"📄 Abrir":"🔒 Demo"})]})}function nf({ap:e,curso:r,docente:t,onOpen:a,delay:n}){var l,s;const i=r?Ze.find(c=>{var u;return c.id===((u=te.find(g=>g.id===r.carreraId))==null?void 0:u.facultadId)}):null;return o.jsxs("div",{className:"ap-card",style:{animationDelay:`${n}s`},onClick:a,children:[e.previewImg&&o.jsxs("div",{className:"ap-card-img-wrap",children:[o.jsx("img",{src:e.previewImg,alt:e.titulo,className:"ap-card-img",loading:"lazy"}),o.jsx("div",{className:"ap-card-img-overlay"}),r&&o.jsxs("span",{className:"ap-card-ciclo-badge",children:["Ciclo ",r.ciclo]}),e.premium&&o.jsx("span",{className:"ap-card-premium-img-badge",children:"⭐ PRO"})]}),o.jsxs("div",{className:"ap-card-body",children:[o.jsxs("div",{className:"ap-card-top",children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[o.jsx("span",{style:{fontSize:"0.88rem"},children:Xt[e.tipo]||"📄"}),o.jsx("span",{className:"ap-tipo-lbl",children:e.tipo})]}),i&&o.jsx("span",{className:"ap-fac-chip",style:{background:`${i.color}18`,color:i.color,borderColor:`${i.color}35`},children:i.icono})]}),o.jsx("h3",{className:"ap-titulo",children:e.titulo}),r&&o.jsxs("div",{className:"ap-curso-row",children:[o.jsx("span",{className:"ap-curso-dot",style:{background:r.color}}),o.jsx("span",{className:"ap-curso-name",children:r.nombre})]}),t&&o.jsxs("div",{className:"ap-docente-row",children:[o.jsx("span",{className:"ap-doc-av",children:t.iniciales}),o.jsx("span",{className:"ap-doc-name",children:t.nombre.split(" ").slice(0,3).join(" ")})]}),((l=e.temas)==null?void 0:l.length)>0&&o.jsxs("div",{className:"ap-temas-preview",children:[e.temas.slice(0,2).map(c=>o.jsx("span",{className:"ap-tema-mini",children:c},c)),e.temas.length>2&&o.jsxs("span",{className:"ap-tema-mini ap-tema-more",children:["+",e.temas.length-2]})]}),o.jsxs("div",{className:"ap-meta",children:[o.jsxs("span",{children:["⬇️ ",e.descargas.toLocaleString()]}),o.jsxs("span",{children:["❤️ ",e.likes]}),((s=e.archivos)==null?void 0:s.length)>0&&o.jsxs("span",{children:["📎 ",e.archivos.length]}),o.jsx("span",{className:"ap-meta-date",children:e.fecha})]})]}),e.premium&&o.jsxs("div",{className:"ap-lock-overlay",children:[o.jsx("span",{style:{fontSize:"1.4rem",marginBottom:4},children:"🔒"}),o.jsx("span",{className:"ap-lock-text",children:"Solo Premium"})]})]})}function lf({navigate:e,initialFilter:r={}}){var Fe,dr,_e;const{user:t}=Rt(),[a,n]=y.useState(!1),[i,l]=y.useState(""),[s,c]=y.useState(r.tipo&&En.includes(r.tipo)?r.tipo:"Todos"),[u,g]=y.useState("all"),[h,v]=y.useState(r.carreraId??"all"),[x,I]=y.useState(r.docenteId??"all"),[w,E]=y.useState(r.cursoId??"all"),[m,d]=y.useState("all"),[p,b]=y.useState(!1),[S,T]=y.useState("fecha"),[j,R]=y.useState(null),[P,F]=y.useState(null),[ae,qe]=y.useState("grid");y.useEffect(()=>{const k=f=>F(f.detail.nombre);return window.addEventListener("demo-no-url",k),()=>window.removeEventListener("demo-no-url",k)},[]);const sr=y.useMemo(()=>u==="all"?te:te.filter(k=>k.facultadId===Number(u)),[u]),nt=y.useMemo(()=>[...new Set(se.map(f=>f.ciclo))].sort((f,_)=>f-_),[]),rr=y.useMemo(()=>{let k=mr.filter(f=>{var _a;const _=se.find(Ur=>Ur.id===f.cursoId),B=_?te.find(Ur=>Ur.id===_.carreraId):null,de=f.titulo.toLowerCase().includes(i.toLowerCase())||((_a=f.temas)==null?void 0:_a.some(Ur=>Ur.toLowerCase().includes(i.toLowerCase())))||(_==null?void 0:_.nombre.toLowerCase().includes(i.toLowerCase())),Ie=s==="Todos"||f.tipo===s,fe=w==="all"||String(f.cursoId)===w,Yo=u==="all"||B&&B.facultadId===Number(u),Xo=h==="all"||_&&String(_.carreraId)===h,Jo=m==="all"||_&&String(_.ciclo)===m,Zo=!p||!f.premium,en=x==="all"||String(f.docenteId)===x;return de&&Ie&&fe&&Yo&&Xo&&Jo&&Zo&&en});return k=[...k].sort((f,_)=>S==="fecha"?_.fecha.localeCompare(f.fecha):S==="descargas"?_.descargas-f.descargas:S==="likes"?_.likes-f.likes:S==="vistas"?(_.vistas||0)-(f.vistas||0):0),k},[i,s,w,u,h,m,p,S,x]),De=y.useMemo(()=>{const k={};return En.forEach(f=>{k[f]=f==="Todos"?mr.length:mr.filter(_=>_.tipo===f).length}),k},[]),ke=i||s!=="Todos"||u!=="all"||h!=="all"||w!=="all"||m!=="all"||p||x!=="all",z=y.useCallback(()=>{l(""),c("Todos"),g("all"),v("all"),E("all"),d("all"),b(!1),I("all")},[]),L=j?se.find(k=>k.id===j.cursoId):null,D=L?te.find(k=>k.id===L.carreraId):null,U=D?Ze.find(k=>k.id===D.facultadId):null,G=j?Xr.find(k=>k.id===j.docenteId):null,cr=(j==null?void 0:j.premium)&&!t;return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        .ap-page { animation: ap-in 0.35s ease both; }
        @keyframes ap-in { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:none} }
        @keyframes ap-card-in { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }

        .ap-header {
          display:flex; align-items:flex-start; justify-content:space-between;
          gap:16px; margin-bottom:28px; flex-wrap:wrap;
        }
        .ap-title {
          font-family:var(--font-display); font-weight:900;
          font-size:clamp(1.6rem,4vw,2.1rem);
          color:var(--text-primary); margin-bottom:4px; letter-spacing:-0.03em;
        }
        .ap-sub { font-size:0.875rem; color:var(--text-muted); }
        .ap-header-actions { display:flex; gap:8px; flex-wrap:wrap; align-self:flex-start; }
        .ap-upload-btn {
          background:linear-gradient(135deg,#059669,#10b981);
          border:none; border-radius:11px; padding:10px 20px;
          color:#fff; font-family:var(--font-display); font-weight:700;
          font-size:0.875rem; cursor:pointer; transition:all 0.2s;
          box-shadow:0 4px 14px rgba(5,150,105,0.3); white-space:nowrap;
        }
        .ap-upload-btn:hover { transform:translateY(-2px); box-shadow:0 6px 20px rgba(5,150,105,0.4); }

        .ap-stats-bar { display:flex; gap:10px; flex-wrap:wrap; margin-bottom:24px; }
        .ap-stat-chip {
          display:flex; align-items:center; gap:6px;
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:100px; padding:6px 14px;
          font-size:0.76rem; font-weight:600; color:var(--text-secondary);
        }
        .ap-stat-chip span { font-weight:800; color:var(--text-primary); }

        .ap-filters-wrap {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:16px; padding:16px 18px; margin-bottom:20px;
          display:flex; flex-direction:column; gap:12px;
        }
        .ap-filters-row { display:flex; gap:10px; flex-wrap:wrap; align-items:center; }
        .ap-search-wrap { position:relative; flex:2; min-width:200px; }
        .ap-search-icon { position:absolute; left:12px; top:50%; transform:translateY(-50%); pointer-events:none; font-size:0.9rem; }
        .ap-search {
          width:100%; background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:10px; padding:9px 14px 9px 36px;
          color:var(--text-primary); font-size:0.875rem; font-family:var(--font-body);
          outline:none; transition:border-color 0.18s;
        }
        .ap-search:focus { border-color:rgba(99,102,241,0.5); }
        .ap-search::placeholder { color:var(--text-muted); }
        .ap-select {
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:10px; padding:9px 14px; flex:1; min-width:130px;
          color:var(--text-secondary); font-size:0.84rem; font-family:var(--font-body);
          outline:none; cursor:pointer; transition:border-color 0.18s;
        }
        .ap-select.active { border-color:rgba(99,102,241,0.5); color:var(--indigo-light); background:var(--indigo-dim); }
        .ap-toggle {
          display:flex; align-items:center; gap:7px;
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:10px; padding:9px 14px;
          font-size:0.8rem; font-weight:600; color:var(--text-secondary);
          cursor:pointer; font-family:var(--font-body); white-space:nowrap;
          transition:all 0.15s; user-select:none;
        }
        .ap-toggle.on { background:rgba(16,185,129,0.1); border-color:rgba(16,185,129,0.35); color:var(--emerald); }
        .ap-reset {
          background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.25);
          border-radius:10px; padding:9px 14px;
          color:#ef4444; font-size:0.8rem; font-weight:600;
          font-family:var(--font-body); cursor:pointer; white-space:nowrap; transition:all 0.15s;
        }
        .ap-reset:hover { background:rgba(239,68,68,0.14); }

        .ap-fac-row { display:flex; gap:7px; flex-wrap:wrap; }
        .ap-fac-btn {
          display:flex; align-items:center; gap:5px;
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:9px; padding:5px 12px;
          font-size:0.76rem; font-weight:600; color:var(--text-muted);
          cursor:pointer; font-family:var(--font-body); transition:all 0.15s; white-space:nowrap;
        }
        .ap-fac-btn.active { color:#fff; border-color:transparent; }
        .ap-fac-btn:hover:not(.active) { background:var(--bg-card); color:var(--text-secondary); }

        .ap-active-filter-banner {
          display:flex; align-items:center; gap:10px; flex-wrap:wrap;
          background:var(--indigo-dim); border:1px solid rgba(99,102,241,0.3);
          border-radius:12px; padding:10px 16px; margin-bottom:16px;
          font-size:0.82rem; color:var(--indigo-light);
        }
        .ap-active-filter-banner strong { color:var(--indigo-light); }
        .ap-clear-filter-btn {
          background:rgba(99,102,241,0.2); border:1px solid rgba(99,102,241,0.35);
          border-radius:7px; padding:3px 10px; font-size:0.76rem; font-weight:700;
          color:var(--indigo-light); cursor:pointer; font-family:var(--font-body);
          margin-left:auto; white-space:nowrap;
        }

        .ap-pills { display:flex; gap:7px; flex-wrap:wrap; margin-bottom:20px; }
        .ap-pill {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:100px; padding:5px 14px;
          font-size:0.78rem; font-weight:500; color:var(--text-muted);
          cursor:pointer; font-family:var(--font-body); transition:all 0.15s;
          display:flex; align-items:center; gap:5px;
        }
        .ap-pill:hover { background:var(--bg-elevated); color:var(--text-secondary); }
        .ap-pill.active { background:var(--indigo-dim); border-color:rgba(99,102,241,0.4); color:var(--indigo-light); }
        .ap-pill-count {
          background:rgba(99,102,241,0.15); color:var(--indigo-light);
          border-radius:100px; padding:1px 6px; font-size:0.68rem; font-weight:700;
        }
        .ap-pill:not(.active) .ap-pill-count { background:var(--bg-elevated); color:var(--text-muted); }

        .ap-toolbar { display:flex; align-items:center; gap:10px; margin-bottom:20px; flex-wrap:wrap; }
        .ap-result-count { font-size:0.82rem; color:var(--text-muted); flex:1; }
        .ap-result-count strong { color:var(--text-secondary); }
        .ap-sort-select {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:9px; padding:6px 12px;
          color:var(--text-secondary); font-size:0.8rem; font-family:var(--font-body); outline:none; cursor:pointer;
        }
        .ap-view-btns { display:flex; gap:4px; }
        .ap-view-btn {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:8px; padding:6px 10px; cursor:pointer;
          font-size:0.85rem; transition:all 0.15s; color:var(--text-muted);
        }
        .ap-view-btn.active { background:var(--indigo-dim); border-color:rgba(99,102,241,0.35); color:var(--indigo-light); }

        .ap-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(268px,1fr)); gap:18px; }

        .ap-list { display:flex; flex-direction:column; gap:10px; }
        .ap-list-row {
          display:flex; gap:14px; align-items:center;
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:14px; padding:14px 18px; cursor:pointer;
          transition:all 0.18s; animation:ap-card-in 0.25s ease both;
        }
        .ap-list-row:hover { border-color:rgba(99,102,241,0.35); transform:translateX(3px); }
        .ap-list-thumb { width:48px; height:48px; border-radius:10px; object-fit:cover; flex-shrink:0; }
        .ap-list-thumb-placeholder { width:48px; height:48px; border-radius:10px; flex-shrink:0; background:var(--bg-elevated); border:1px solid var(--border); display:flex; align-items:center; justify-content:center; font-size:1.4rem; }
        .ap-list-main { flex:1; min-width:0; }
        .ap-list-title { font-family:var(--font-display); font-weight:700; font-size:0.9rem; color:var(--text-primary); margin-bottom:4px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .ap-list-sub { font-size:0.75rem; color:var(--text-muted); display:flex; align-items:center; gap:6px; }
        .ap-list-dot { width:6px; height:6px; border-radius:50%; flex-shrink:0; }
        .ap-list-stats { display:flex; gap:12px; font-size:0.78rem; color:var(--text-muted); flex-shrink:0; }
        .ap-list-badge { display:flex; gap:6px; flex-shrink:0; }

        .ap-card {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:16px; cursor:pointer;
          transition:all 0.22s; position:relative; overflow:hidden;
          display:flex; flex-direction:column;
          animation:ap-card-in 0.3s ease both;
        }
        .ap-card:hover { border-color:rgba(99,102,241,0.35); transform:translateY(-3px); box-shadow:0 10px 28px rgba(0,0,0,0.2); }
        .ap-card-img-wrap { overflow:hidden; border-radius:14px 14px 0 0; flex-shrink:0; position:relative; }
        .ap-card-img { width:100%; height:118px; object-fit:cover; border-radius:14px 14px 0 0; display:block; transition:transform 0.3s ease; }
        .ap-card:hover .ap-card-img { transform:scale(1.05); }
        .ap-card-img-overlay { position:absolute; inset:0; background:linear-gradient(to bottom,transparent 40%,rgba(10,10,15,0.65) 100%); pointer-events:none; }
        .ap-card-ciclo-badge {
          position:absolute; bottom:8px; left:10px;
          background:rgba(0,0,0,0.55); backdrop-filter:blur(6px);
          border:1px solid rgba(255,255,255,0.12); border-radius:100px; padding:2px 9px;
          font-size:0.68rem; font-weight:700; color:rgba(255,255,255,0.85);
        }
        .ap-card-premium-img-badge {
          position:absolute; top:8px; right:8px;
          background:rgba(245,158,11,0.85); backdrop-filter:blur(6px);
          border-radius:100px; padding:2px 9px; font-size:0.68rem; font-weight:800; color:#fff;
        }
        .ap-card-body { padding:14px 16px 16px; display:flex; flex-direction:column; flex:1; }
        .ap-card-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:9px; }
        .ap-tipo-lbl { font-size:0.68rem; font-weight:800; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.07em; }
        .ap-fac-chip { font-size:0.72rem; font-weight:700; border-radius:7px; padding:2px 8px; border:1px solid; white-space:nowrap; }
        .ap-titulo { font-family:var(--font-display); font-weight:700; font-size:0.9rem; line-height:1.4; margin-bottom:9px; color:var(--text-primary); }
        .ap-curso-row { display:flex; align-items:center; gap:7px; margin-bottom:7px; }
        .ap-curso-dot { width:7px; height:7px; border-radius:50%; flex-shrink:0; }
        .ap-curso-name { font-size:0.76rem; color:var(--text-secondary); font-weight:500; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .ap-docente-row { display:flex; align-items:center; gap:6px; margin-bottom:9px; }
        .ap-doc-av {
          width:20px; height:20px; border-radius:50%;
          background:linear-gradient(135deg,#4f46e5,#7c3aed);
          display:inline-flex; align-items:center; justify-content:center;
          font-size:0.56rem; font-weight:800; color:#fff; flex-shrink:0;
        }
        .ap-doc-name { font-size:0.74rem; color:var(--text-muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .ap-temas-preview { display:flex; gap:5px; flex-wrap:wrap; margin-bottom:10px; }
        .ap-tema-mini {
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:100px; padding:2px 8px; font-size:0.66rem; color:var(--text-muted); font-weight:500;
        }
        .ap-tema-more { background:var(--indigo-dim); color:var(--indigo-light); border-color:rgba(99,102,241,0.3); }
        .ap-meta { display:flex; gap:10px; font-size:0.76rem; color:var(--text-muted); margin-top:auto; align-items:center; }
        .ap-meta-date { margin-left:auto; font-size:0.68rem; }
        .ap-lock-overlay {
          position:absolute; inset:0;
          background:linear-gradient(to top,rgba(10,10,15,0.92) 0%,rgba(10,10,15,0.5) 55%,transparent 100%);
          display:flex; flex-direction:column; align-items:center; justify-content:flex-end;
          padding:16px; opacity:0; transition:opacity 0.2s; pointer-events:none;
        }
        .ap-card:hover .ap-lock-overlay { opacity:1; }
        .ap-lock-text { font-size:0.8rem; font-weight:700; color:#fff; text-align:center; }

        .ap-empty { text-align:center; padding:80px 24px; color:var(--text-muted); display:flex; flex-direction:column; gap:12px; align-items:center; }

        .ap-modal-preview { width:100%; height:155px; object-fit:cover; border-radius:12px; margin-bottom:4px; display:block; }
        .ap-modal-chips { display:flex; gap:7px; flex-wrap:wrap; }
        .ap-modal-chip { padding:4px 12px; border-radius:100px; font-size:0.78rem; font-weight:600; }
        .ap-modal-desc { font-size:0.875rem; color:var(--text-secondary); line-height:1.65; background:var(--bg-elevated); border-radius:12px; padding:12px 14px; border:1px solid var(--border); }
        .ap-modal-section { margin-bottom:16px; }
        .ap-modal-section-label { font-size:0.65rem; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-muted); margin-bottom:8px; }
        .ap-modal-meta-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
        .ap-modal-meta-item { background:var(--bg-elevated); border:1px solid var(--border); border-radius:11px; padding:10px 12px; }
        .ap-modal-meta-label { font-size:0.66rem; color:var(--text-muted); font-weight:700; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:3px; }
        .ap-modal-meta-value { font-size:0.84rem; font-weight:600; color:var(--text-primary); }
        .ap-temas-list { display:flex; gap:6px; flex-wrap:wrap; }
        .ap-tema-chip { background:var(--bg-elevated); border:1px solid var(--border); border-radius:100px; padding:3px 10px; font-size:0.74rem; color:var(--text-secondary); font-weight:500; }
        .ap-archivos-list { display:flex; flex-direction:column; gap:8px; }
        .ap-stats-row { display:flex; gap:14px; padding:12px 0; border-top:1px solid var(--border); border-bottom:1px solid var(--border); font-size:0.84rem; color:var(--text-muted); flex-wrap:wrap; }
        .ap-dl-btn {
          width:100%; background:linear-gradient(135deg,var(--indigo),#7c3aed);
          border:none; border-radius:12px; padding:13px;
          color:#fff; font-family:var(--font-display); font-weight:700;
          font-size:0.95rem; cursor:pointer; transition:all 0.2s;
          box-shadow:0 4px 16px rgba(99,102,241,0.3);
        }
        .ap-dl-btn:hover { transform:translateY(-1px); box-shadow:0 6px 22px rgba(99,102,241,0.4); }
        .ap-premium-wall {
          background:var(--amber-dim); border:1px solid rgba(245,158,11,0.25);
          border-radius:14px; padding:22px; text-align:center;
          display:flex; flex-direction:column; gap:10px; align-items:center;
          font-size:0.875rem; color:var(--amber);
        }
        .ap-premium-cta {
          background:linear-gradient(135deg,var(--amber),#ef4444);
          border:none; border-radius:9px; padding:9px 22px;
          color:#fff; font-weight:700; font-size:0.875rem; cursor:pointer; font-family:var(--font-body);
        }

        @media(max-width:700px){
          .ap-grid { grid-template-columns:1fr 1fr; }
          .ap-filters-row { gap:7px; }
          .ap-modal-meta-grid { grid-template-columns:1fr; }
        }
        @media(max-width:480px){
          .ap-grid { grid-template-columns:1fr; }
          .ap-stats-bar { display:none; }
          .ap-list-stats { display:none; }
        }
      `}),P&&o.jsx(af,{msg:P,onDone:()=>F(null)}),o.jsxs("div",{className:"ap-page page-container",children:[o.jsxs("div",{className:"ap-header",children:[o.jsxs("div",{children:[o.jsx("h1",{className:"ap-title",children:"Apuntes"}),o.jsx("p",{className:"ap-sub",children:"Material compartido por estudiantes y docentes de la UC"})]}),o.jsx("div",{className:"ap-header-actions",children:o.jsx("button",{className:"ap-upload-btn",onClick:()=>e("planes"),children:"⬆️ Subir apunte"})})]}),o.jsxs("div",{className:"ap-stats-bar",children:[o.jsxs("div",{className:"ap-stat-chip",children:["📚 ",o.jsx("span",{children:mr.length})," apuntes"]}),o.jsxs("div",{className:"ap-stat-chip",children:["🏫 ",o.jsx("span",{children:Ze.length})," facultades"]}),o.jsxs("div",{className:"ap-stat-chip",children:["🎓 ",o.jsx("span",{children:te.length})," carreras"]}),o.jsxs("div",{className:"ap-stat-chip",style:{color:"var(--emerald)"},children:["✓ ",o.jsx("span",{style:{color:"var(--emerald)"},children:mr.filter(k=>!k.premium).length})," gratis"]}),o.jsxs("div",{className:"ap-stat-chip",style:{color:"var(--amber)"},children:["⭐ ",o.jsx("span",{style:{color:"var(--amber)"},children:mr.filter(k=>k.premium).length})," premium"]})]}),(w!=="all"||h!=="all")&&(()=>{const k=w!=="all"?se.find(_=>String(_.id)===w):null,f=h!=="all"?te.find(_=>String(_.id)===h):null;return o.jsxs("div",{className:"ap-active-filter-banner",children:[o.jsx("span",{children:"🔍 Filtrando por:"}),k&&o.jsxs("strong",{children:["📚 ",k.nombre]}),f&&o.jsxs("strong",{children:["🎓 ",f.nombre]}),o.jsx("button",{className:"ap-clear-filter-btn",onClick:z,children:"✕ Quitar filtro"})]})})(),o.jsxs("div",{className:"ap-filters-wrap",children:[o.jsxs("div",{className:"ap-filters-row",children:[o.jsxs("div",{className:"ap-search-wrap",children:[o.jsx("span",{className:"ap-search-icon",children:"🔍"}),o.jsx("input",{className:"ap-search",placeholder:"Buscar por título, tema, curso...",value:i,onChange:k=>l(k.target.value)})]}),o.jsxs("select",{className:`ap-select${h!=="all"?" active":""}`,value:h,onChange:k=>{v(k.target.value),E("all")},children:[o.jsx("option",{value:"all",children:"Todas las carreras"}),sr.map(k=>o.jsx("option",{value:String(k.id),children:k.nombre},k.id))]}),o.jsxs("select",{className:`ap-select${m!=="all"?" active":""}`,value:m,onChange:k=>d(k.target.value),children:[o.jsx("option",{value:"all",children:"Todos los ciclos"}),nt.map(k=>o.jsxs("option",{value:String(k),children:["Ciclo ",k]},k))]}),o.jsxs("button",{className:`ap-toggle${p?" on":""}`,onClick:()=>b(k=>!k),children:[p?"✓":"○"," Solo gratis"]}),ke&&o.jsx("button",{className:"ap-reset",onClick:z,children:"✕ Limpiar"})]}),o.jsxs("div",{className:"ap-fac-row",children:[o.jsx("button",{className:`ap-fac-btn${u==="all"?" active":""}`,style:u==="all"?{background:"var(--indigo-dim)",color:"var(--indigo-light)",borderColor:"rgba(99,102,241,0.4)"}:{},onClick:()=>{g("all"),v("all"),E("all")},children:"Todas"}),Ze.map(k=>o.jsxs("button",{className:`ap-fac-btn${u===String(k.id)?" active":""}`,style:u===String(k.id)?{background:k.color}:{},onClick:()=>{g(String(k.id)),v("all"),E("all")},children:[k.icono," ",k.nombre.replace("Facultad de ","").replace("Facultad ","")]},k.id))]})]}),o.jsx("div",{className:"ap-pills",children:En.map(k=>o.jsxs("button",{className:`ap-pill${s===k?" active":""}`,onClick:()=>c(k),children:[k!=="Todos"&&Xt[k]," ",k,o.jsx("span",{className:"ap-pill-count",children:De[k]})]},k))}),o.jsxs("div",{className:"ap-toolbar",children:[o.jsxs("span",{className:"ap-result-count",children:[o.jsx("strong",{children:rr.length})," apunte",rr.length!==1?"s":""," encontrado",rr.length!==1?"s":""]}),o.jsx("select",{className:"ap-sort-select",value:S,onChange:k=>T(k.target.value),children:tf.map(k=>o.jsx("option",{value:k.value,children:k.label},k.value))}),o.jsxs("div",{className:"ap-view-btns",children:[o.jsx("button",{className:`ap-view-btn${ae==="grid"?" active":""}`,onClick:()=>qe("grid"),children:"⊞"}),o.jsx("button",{className:`ap-view-btn${ae==="list"?" active":""}`,onClick:()=>qe("list"),children:"☰"})]})]}),rr.length===0?o.jsxs("div",{className:"ap-empty",children:[o.jsx("span",{style:{fontSize:"2.5rem"},children:"📭"}),o.jsx("p",{style:{fontWeight:700,color:"var(--text-secondary)"},children:"Sin resultados"}),o.jsx("p",{children:"Prueba con otros filtros o términos de búsqueda"}),ke&&o.jsx("button",{className:"ap-reset",onClick:z,children:"✕ Limpiar filtros"})]}):ae==="grid"?o.jsx("div",{className:"ap-grid",children:rr.map((k,f)=>{const _=se.find(de=>de.id===k.cursoId),B=Xr.find(de=>de.id===k.docenteId);return o.jsx(nf,{ap:k,curso:_,docente:B,onOpen:()=>R(k),delay:Math.min(f*.03,.3)},k.id)})}):o.jsx("div",{className:"ap-list",children:rr.map((k,f)=>{var de;const _=se.find(Ie=>Ie.id===k.cursoId),B=Xr.find(Ie=>Ie.id===k.docenteId);return o.jsxs("div",{className:"ap-list-row",style:{animationDelay:`${Math.min(f*.03,.3)}s`},onClick:()=>R(k),children:[k.previewImg?o.jsx("img",{src:k.previewImg,alt:k.titulo,className:"ap-list-thumb",loading:"lazy"}):o.jsx("div",{className:"ap-list-thumb-placeholder",children:Xt[k.tipo]||"📄"}),o.jsxs("div",{className:"ap-list-main",children:[o.jsx("div",{className:"ap-list-title",children:k.titulo}),o.jsx("div",{className:"ap-list-sub",children:_&&o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"ap-list-dot",style:{background:_.color}}),_.nombre,B&&` · ${B.nombre.split(" ").slice(0,3).join(" ")}`]})})]}),o.jsxs("div",{className:"ap-list-badge",children:[o.jsxs("span",{style:{fontSize:"0.68rem",fontWeight:700,borderRadius:100,padding:"3px 9px",background:"var(--indigo-dim)",color:"var(--indigo-light)",border:"1px solid rgba(99,102,241,0.3)"},children:[Xt[k.tipo]," ",k.tipo]}),k.premium&&o.jsx("span",{style:{fontSize:"0.68rem",fontWeight:700,borderRadius:100,padding:"3px 9px",background:"var(--amber-dim)",color:"var(--amber)",border:"1px solid rgba(245,158,11,0.3)"},children:"⭐ PRO"})]}),o.jsxs("div",{className:"ap-list-stats",children:[o.jsxs("span",{children:["⬇️ ",k.descargas.toLocaleString()]}),o.jsxs("span",{children:["❤️ ",k.likes]}),o.jsxs("span",{children:["📎 ",((de=k.archivos)==null?void 0:de.length)||0]})]})]},k.id)})}),o.jsx(au,{open:!!j,onClose:()=>R(null),title:j==null?void 0:j.titulo,children:j&&o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[j.previewImg&&o.jsx("img",{src:j.previewImg,alt:j.titulo,className:"ap-modal-preview",loading:"lazy"}),o.jsxs("div",{className:"ap-modal-chips",children:[o.jsxs("span",{className:"ap-modal-chip",style:{background:"var(--indigo-dim)",color:"var(--indigo-light)",border:"1px solid rgba(99,102,241,0.3)"},children:[Xt[j.tipo]," ",j.tipo]}),j.premium&&o.jsx("span",{className:"ap-modal-chip",style:{background:"var(--amber-dim)",color:"var(--amber)",border:"1px solid rgba(245,158,11,0.3)"},children:"⭐ Premium"}),U&&o.jsxs("span",{className:"ap-modal-chip",style:{background:`${U.color}18`,color:U.color,border:`1px solid ${U.color}35`},children:[U.icono," ",U.nombre.replace("Facultad de ","").replace("Facultad ","")]}),L&&o.jsx("span",{className:"ap-modal-chip",style:{background:`${L.color}18`,color:L.color,border:`1px solid ${L.color}40`},children:L.codigo})]}),o.jsxs("div",{className:"ap-stats-row",children:[o.jsxs("span",{children:["⬇️ ",o.jsx("strong",{style:{color:"var(--text-secondary)"},children:j.descargas.toLocaleString()})]}),o.jsxs("span",{children:["❤️ ",o.jsx("strong",{style:{color:"var(--text-secondary)"},children:j.likes})]}),o.jsxs("span",{children:["👁️ ",o.jsx("strong",{style:{color:"var(--text-secondary)"},children:(j.vistas||0).toLocaleString()})]}),o.jsxs("span",{style:{marginLeft:"auto",fontSize:"0.76rem",color:"var(--text-muted)"},children:["Semana ",j.semana," · ",j.fecha]})]}),j.descripcion&&o.jsxs("div",{className:"ap-modal-section",children:[o.jsx("div",{className:"ap-modal-section-label",children:"Descripción"}),o.jsx("div",{className:"ap-modal-desc",children:j.descripcion})]}),o.jsxs("div",{className:"ap-modal-section",children:[o.jsx("div",{className:"ap-modal-section-label",children:"Información"}),o.jsxs("div",{className:"ap-modal-meta-grid",children:[L&&o.jsxs("div",{className:"ap-modal-meta-item",children:[o.jsx("div",{className:"ap-modal-meta-label",children:"Curso"}),o.jsx("div",{className:"ap-modal-meta-value",style:{fontSize:"0.78rem"},children:L.nombre})]}),D&&o.jsxs("div",{className:"ap-modal-meta-item",children:[o.jsx("div",{className:"ap-modal-meta-label",children:"Carrera"}),o.jsx("div",{className:"ap-modal-meta-value",style:{fontSize:"0.78rem"},children:D.nombre})]}),G&&o.jsxs("div",{className:"ap-modal-meta-item",children:[o.jsx("div",{className:"ap-modal-meta-label",children:"Docente"}),o.jsx("div",{className:"ap-modal-meta-value",style:{fontSize:"0.78rem"},children:G.nombre.split(" ").slice(0,3).join(" ")})]}),L&&o.jsxs("div",{className:"ap-modal-meta-item",children:[o.jsx("div",{className:"ap-modal-meta-label",children:"Ciclo / Créditos"}),o.jsxs("div",{className:"ap-modal-meta-value",children:["Ciclo ",L.ciclo," · ",L.creditos," cr."]})]})]})]}),((Fe=j.temas)==null?void 0:Fe.length)>0&&o.jsxs("div",{className:"ap-modal-section",children:[o.jsx("div",{className:"ap-modal-section-label",children:"Temas cubiertos"}),o.jsx("div",{className:"ap-temas-list",children:j.temas.map(k=>o.jsx("span",{className:"ap-tema-chip",children:k},k))})]}),((dr=j.archivos)==null?void 0:dr.length)>0&&o.jsxs("div",{className:"ap-modal-section",children:[o.jsxs("div",{className:"ap-modal-section-label",children:["Archivos adjuntos · ",j.archivos.length," ",j.archivos.length===1?"archivo":"archivos"]}),o.jsx("div",{className:"ap-archivos-list",children:j.archivos.map((k,f)=>o.jsx(of,{archivo:k},f))})]}),cr?o.jsxs("div",{className:"ap-premium-wall",children:[o.jsx("span",{style:{fontSize:"1.6rem"},children:"🔒"}),o.jsx("p",{style:{fontWeight:700},children:"Contenido exclusivo para Premium"}),o.jsx("p",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:"Accede a este y todos los apuntes premium por S/. 5/mes"}),o.jsx("button",{className:"ap-premium-cta",onClick:()=>{R(null),e("planes")},children:"Ver planes →"})]}):o.jsxs("button",{className:"ap-dl-btn",onClick:()=>{var f;const k=(f=j.archivos)==null?void 0:f.find(_=>_.url&&_.tipo==="pdf");k?window.open(k.url,"_blank","noopener"):F(j.titulo)},children:["⬇️ Descargar ",((_e=j.archivos)==null?void 0:_e.length)>1?`(${j.archivos.length} archivos)`:"apunte"]})]})})]})]})}const sf=[{value:"fecha",label:"Más recientes"},{value:"descargas",label:"Más descargados"},{value:"likes",label:"Más valorados"},{value:"vistas",label:"Más vistos"}];function cf({archivo:e}){const r=Po[e.tipo]||Po.pdf,t=e.paginas?`${e.paginas} págs.`:e.diapositivas?`${e.diapositivas} slides`:e.hojas?`${e.hojas} hojas`:e.archivos?`${e.archivos} archivos`:e.dimensiones??"",a=!!e.url;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,background:"var(--bg-elevated)",border:"1px solid var(--border)",borderRadius:11,padding:"9px 13px"},children:[e.tipo==="imagen"&&e.url?o.jsx("img",{src:e.url,alt:e.nombre,style:{width:34,height:34,borderRadius:8,objectFit:"cover",flexShrink:0,border:`1px solid ${r.border}`},loading:"lazy"}):o.jsx("span",{style:{width:34,height:34,borderRadius:8,flexShrink:0,background:r.bg,border:`1px solid ${r.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem"},children:r.icon}),o.jsxs("div",{style:{flex:1,minWidth:0},children:[o.jsx("div",{style:{fontSize:"0.8rem",fontWeight:600,color:"var(--text-primary)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.nombre}),o.jsxs("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",marginTop:1},children:[r.label," · ",e.tamaño,t?` · ${t}`:""]})]}),o.jsx("button",{onClick:()=>ru(e),style:{flexShrink:0,background:a?"var(--indigo-dim)":"var(--bg-card)",border:`1px solid ${a?"rgba(99,102,241,0.35)":"var(--border)"}`,borderRadius:7,padding:"4px 10px",color:a?"var(--indigo-light)":"var(--text-muted)",fontSize:"0.7rem",fontWeight:700,cursor:a?"pointer":"not-allowed",fontFamily:"var(--font-body)",opacity:a?1:.5,whiteSpace:"nowrap"},children:a?"📄 Abrir":"🔒 Demo"})]})}function df({navigate:e,initialFilter:r={}}){var dr,_e,k;const{user:t}=Rt(),[a,n]=y.useState(""),[i,l]=y.useState(r.tipo??"all"),[s,c]=y.useState("all"),[u,g]=y.useState(r.carreraId??"all"),[h,v]=y.useState(r.docenteId??"all"),[x,I]=y.useState(r.cursoId??"all"),[w,E]=y.useState("all"),[m,d]=y.useState("all"),[p,b]=y.useState(!1),[S,T]=y.useState(!1),[j,R]=y.useState("fecha"),[P,F]=y.useState(null),[ae,qe]=y.useState("table"),sr=y.useMemo(()=>[...new Set(Be.map(f=>`${f.año}-${f.semestre}`))].sort((f,_)=>_.localeCompare(f)),[]),nt=y.useMemo(()=>s==="all"?te:te.filter(f=>f.facultadId===Number(s)),[s]),rr=y.useMemo(()=>[...new Set(se.map(_=>_.ciclo))].sort((_,B)=>_-B),[]),De=y.useMemo(()=>{let f=Be.filter(_=>{var yl;const B=se.find(Lt=>Lt.id===_.cursoId),de=B?te.find(Lt=>Lt.id===B.carreraId):null,Ie=_.titulo.toLowerCase().includes(a.toLowerCase())||((yl=_.temas)==null?void 0:yl.some(Lt=>Lt.toLowerCase().includes(a.toLowerCase())))||(B==null?void 0:B.nombre.toLowerCase().includes(a.toLowerCase())),fe=i==="all"||_.tipo===i,Yo=x==="all"||String(_.cursoId)===x,Xo=s==="all"||de&&de.facultadId===Number(s),Jo=u==="all"||B&&String(B.carreraId)===u,Zo=w==="all"||B&&String(B.ciclo)===w,en=m==="all"||`${_.año}-${_.semestre}`===m,_a=!p||_.resuelto,Ur=!S||!_.premium,su=h==="all"||String(_.docenteId)===h;return Ie&&fe&&Yo&&Xo&&Jo&&Zo&&en&&_a&&Ur&&su});return f=[...f].sort((_,B)=>j==="fecha"?B.fecha.localeCompare(_.fecha):j==="descargas"?B.descargas-_.descargas:j==="likes"?B.likes-_.likes:j==="vistas"?(B.vistas||0)-(_.vistas||0):0),f},[a,i,x,s,u,w,m,p,S,j,h]),ke=y.useMemo(()=>({total:Be.length,parciales:Be.filter(f=>f.tipo==="Parcial").length,finales:Be.filter(f=>f.tipo==="Final").length,resueltos:Be.filter(f=>f.resuelto).length,premium:Be.filter(f=>f.premium).length}),[]),z=a||i!=="all"||s!=="all"||u!=="all"||x!=="all"||w!=="all"||m!=="all"||p||S||h!=="all",L=y.useCallback(()=>{n(""),l("all"),c("all"),g("all"),I("all"),E("all"),d("all"),b(!1),T(!1),v("all")},[]),D=P?se.find(f=>f.id===P.cursoId):null,U=D?te.find(f=>f.id===D.carreraId):null,G=U?Ze.find(f=>f.id===U.facultadId):null,cr=P?Xr.find(f=>f.id===P.docenteId):null,Fe=(P==null?void 0:P.premium)&&!t;return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        .ex-page { animation:ex-in 0.35s ease both; }
        @keyframes ex-in { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:none} }
        @keyframes ex-card-in { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none} }

        .ex-header {
          display:flex; align-items:flex-start; justify-content:space-between;
          gap:16px; margin-bottom:28px; flex-wrap:wrap;
        }
        .ex-title {
          font-family:var(--font-display); font-weight:900;
          font-size:clamp(1.6rem,4vw,2.1rem);
          color:var(--text-primary); margin-bottom:4px; letter-spacing:-0.03em;
        }
        .ex-sub { font-size:0.875rem; color:var(--text-muted); }

        .ex-stats-bar { display:flex; gap:10px; flex-wrap:wrap; margin-bottom:24px; }
        .ex-stat-chip {
          display:flex; align-items:center; gap:6px;
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:100px; padding:6px 14px;
          font-size:0.76rem; font-weight:600; color:var(--text-secondary);
        }
        .ex-stat-chip span { font-weight:800; color:var(--text-primary); }

        .ex-filters-wrap {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:16px; padding:16px 18px; margin-bottom:20px;
          display:flex; flex-direction:column; gap:12px;
        }
        .ex-filters-row { display:flex; gap:10px; flex-wrap:wrap; align-items:center; }
        .ex-search-wrap { position:relative; flex:2; min-width:200px; }
        .ex-search-icon { position:absolute; left:12px; top:50%; transform:translateY(-50%); pointer-events:none; font-size:0.9rem; }
        .ex-search {
          width:100%; background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:10px; padding:9px 14px 9px 36px;
          color:var(--text-primary); font-size:0.875rem; font-family:var(--font-body);
          outline:none; transition:border-color 0.18s;
        }
        .ex-search:focus { border-color:rgba(99,102,241,0.5); }
        .ex-search::placeholder { color:var(--text-muted); }
        .ex-select {
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:10px; padding:9px 14px; flex:1; min-width:130px;
          color:var(--text-secondary); font-size:0.84rem; font-family:var(--font-body);
          outline:none; cursor:pointer; transition:border-color 0.18s;
        }
        .ex-select.active { border-color:rgba(99,102,241,0.5); color:var(--indigo-light); background:var(--indigo-dim); }
        .ex-toggle {
          display:flex; align-items:center; gap:7px;
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:10px; padding:9px 14px;
          font-size:0.8rem; font-weight:600; color:var(--text-secondary);
          cursor:pointer; font-family:var(--font-body); white-space:nowrap;
          transition:all 0.15s; user-select:none;
        }
        .ex-toggle.on { background:rgba(16,185,129,0.1); border-color:rgba(16,185,129,0.35); color:var(--emerald); }
        .ex-reset {
          background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.25);
          border-radius:10px; padding:9px 14px;
          color:#ef4444; font-size:0.8rem; font-weight:600;
          font-family:var(--font-body); cursor:pointer; white-space:nowrap; transition:all 0.15s;
        }
        .ex-reset:hover { background:rgba(239,68,68,0.14); }

        .ex-fac-row { display:flex; gap:7px; flex-wrap:wrap; }
        .ex-fac-btn {
          display:flex; align-items:center; gap:5px;
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:9px; padding:5px 12px;
          font-size:0.76rem; font-weight:600; color:var(--text-muted);
          cursor:pointer; font-family:var(--font-body); transition:all 0.15s; white-space:nowrap;
        }
        .ex-fac-btn.active { color:#fff; border-color:transparent; }
        .ex-fac-btn:hover:not(.active) { background:var(--bg-card); color:var(--text-secondary); }

        .ex-tipo-tabs { display:flex; gap:7px; margin-bottom:20px; }
        .ex-tipo-tab {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:100px; padding:6px 16px;
          font-size:0.8rem; font-weight:600; color:var(--text-muted);
          cursor:pointer; font-family:var(--font-body); transition:all 0.15s;
          display:flex; align-items:center; gap:6px;
        }
        .ex-tipo-tab:hover { background:var(--bg-elevated); color:var(--text-secondary); }
        .ex-tipo-tab.all.active { background:var(--indigo-dim); border-color:rgba(99,102,241,0.4); color:var(--indigo-light); }
        .ex-tipo-tab.parcial.active { background:rgba(99,102,241,0.14); border-color:rgba(99,102,241,0.4); color:var(--indigo-light); }
        .ex-tipo-tab.final.active   { background:rgba(244,63,94,0.12); border-color:rgba(244,63,94,0.4); color:#fb7185; }
        .ex-tab-count { background:var(--bg-elevated); border-radius:100px; padding:1px 7px; font-size:0.68rem; }
        .ex-tipo-tab.active .ex-tab-count { background:rgba(255,255,255,0.12); }

        .ex-active-filter-banner {
          display:flex; align-items:center; gap:10px; flex-wrap:wrap;
          background:var(--indigo-dim); border:1px solid rgba(99,102,241,0.3);
          border-radius:12px; padding:10px 16px; margin-bottom:16px;
          font-size:0.82rem; color:var(--indigo-light);
        }
        .ex-active-filter-banner strong { color:var(--indigo-light); }
        .ex-clear-filter-btn {
          background:rgba(99,102,241,0.2); border:1px solid rgba(99,102,241,0.35);
          border-radius:7px; padding:3px 10px; font-size:0.76rem; font-weight:700;
          color:var(--indigo-light); cursor:pointer; font-family:var(--font-body);
          margin-left:auto; white-space:nowrap;
        }

        .ex-toolbar { display:flex; align-items:center; gap:10px; margin-bottom:16px; flex-wrap:wrap; }
        .ex-result-count { font-size:0.82rem; color:var(--text-muted); flex:1; }
        .ex-result-count strong { color:var(--text-secondary); }
        .ex-sort-select {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:9px; padding:6px 12px;
          color:var(--text-secondary); font-size:0.8rem; font-family:var(--font-body); outline:none; cursor:pointer;
        }
        .ex-view-btns { display:flex; gap:4px; }
        .ex-view-btn {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:8px; padding:6px 10px; cursor:pointer;
          font-size:0.85rem; transition:all 0.15s; color:var(--text-muted);
        }
        .ex-view-btn.active { background:var(--indigo-dim); border-color:rgba(99,102,241,0.35); color:var(--indigo-light); }

        .ex-badge {
          display:inline-block; padding:3px 10px; border-radius:100px;
          font-size:0.68rem; font-weight:700; letter-spacing:0.04em; text-transform:uppercase;
        }
        .ex-badge-parcial { background:rgba(99,102,241,0.14); color:var(--indigo-light); }
        .ex-badge-final   { background:rgba(244,63,94,0.12); color:#fb7185; }
        .ex-badge-ok      { background:var(--emerald-dim); color:var(--emerald); border:1px solid rgba(16,185,129,0.3); }
        .ex-badge-no      { background:var(--bg-elevated); color:var(--text-muted); border:1px solid var(--border); }
        .ex-badge-premium { background:var(--amber-dim); color:var(--amber); border:1px solid rgba(245,158,11,0.3); }

        .ex-table { background:var(--bg-card); border:1px solid var(--border); border-radius:18px; overflow:hidden; }
        .ex-thead {
          display:flex; gap:10px; padding:11px 20px;
          background:var(--bg-elevated); border-bottom:1px solid var(--border);
          font-size:0.67rem; font-weight:800; letter-spacing:0.09em; text-transform:uppercase; color:var(--text-muted);
        }
        .ex-row {
          display:flex; gap:10px; padding:13px 20px;
          border-bottom:1px solid var(--border); align-items:center;
          transition:background 0.15s; cursor:pointer;
        }
        .ex-row:last-child { border-bottom:none; }
        .ex-row:hover { background:var(--bg-elevated); }
        .ex-col-main { flex:3; display:flex; flex-direction:column; gap:4px; min-width:0; }
        .ex-col-1    { flex:1; text-align:center; }
        .ex-col-sm   { flex:0.8; text-align:center; font-size:0.78rem; color:var(--text-muted); }
        .ex-col-dl   { flex:0.7; text-align:right; font-size:0.78rem; color:var(--text-muted); }
        .ex-col-act  { flex:0.8; text-align:right; }
        .ex-row-title {
          font-family:var(--font-display); font-weight:700;
          font-size:0.875rem; color:var(--text-primary);
          white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
        }
        .ex-row-meta { display:flex; align-items:center; gap:6px; font-size:0.74rem; color:var(--text-muted); }
        .ex-row-dot  { width:7px; height:7px; border-radius:50%; flex-shrink:0; }
        .ex-row-fac  { font-size:0.68rem; font-weight:700; }
        .ex-view-btn-sm {
          background:var(--indigo-dim); border:1px solid rgba(99,102,241,0.3);
          border-radius:8px; padding:5px 12px;
          color:var(--indigo-light); font-size:0.76rem; font-weight:700;
          cursor:pointer; font-family:var(--font-body); transition:all 0.15s; white-space:nowrap;
        }
        .ex-view-btn-sm:hover { background:rgba(99,102,241,0.25); }
        .ex-view-btn-sm.premium { background:var(--amber-dim); border-color:rgba(245,158,11,0.3); color:var(--amber); }

        .ex-cards { display:none; flex-direction:column; gap:12px; }
        .ex-card {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:16px; overflow:hidden; cursor:pointer;
          transition:all 0.2s; animation:ex-card-in 0.25s ease both;
          display:flex; flex-direction:column;
        }
        .ex-card:hover { border-color:rgba(99,102,241,0.35); transform:translateY(-2px); box-shadow:0 8px 24px rgba(0,0,0,0.18); }
        .ex-card-img { width:100%; height:90px; object-fit:cover; display:block; flex-shrink:0; }
        .ex-card-body { padding:14px 16px 16px; display:flex; flex-direction:column; gap:9px; }
        .ex-card-top { display:flex; gap:6px; flex-wrap:wrap; align-items:center; }
        .ex-card-title { font-family:var(--font-display); font-weight:700; font-size:0.9rem; color:var(--text-primary); line-height:1.35; }
        .ex-card-meta { display:flex; align-items:center; gap:6px; font-size:0.75rem; color:var(--text-muted); }
        .ex-card-footer { display:flex; align-items:center; justify-content:space-between; gap:8px; }
        .ex-card-stats { display:flex; gap:10px; font-size:0.78rem; color:var(--text-muted); }
        .ex-card-temas { display:flex; gap:5px; flex-wrap:wrap; }
        .ex-card-tema {
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:100px; padding:2px 8px; font-size:0.65rem; color:var(--text-muted);
        }

        .ex-empty { text-align:center; padding:72px 24px; color:var(--text-muted); display:flex; flex-direction:column; gap:12px; align-items:center; }

        .ex-modal-preview { width:100%; height:140px; object-fit:cover; border-radius:12px; margin-bottom:4px; display:block; }
        .ex-modal-chips { display:flex; gap:7px; flex-wrap:wrap; }
        .ex-modal-chip { padding:4px 12px; border-radius:100px; font-size:0.78rem; font-weight:600; }
        .ex-modal-section { margin-bottom:16px; }
        .ex-modal-section-label { font-size:0.65rem; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-muted); margin-bottom:8px; }
        .ex-modal-meta-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
        .ex-modal-meta-item { background:var(--bg-elevated); border:1px solid var(--border); border-radius:11px; padding:10px 12px; }
        .ex-modal-meta-label { font-size:0.66rem; color:var(--text-muted); font-weight:700; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:3px; }
        .ex-modal-meta-value { font-size:0.84rem; font-weight:600; color:var(--text-primary); }
        .ex-modal-temas { display:flex; gap:6px; flex-wrap:wrap; }
        .ex-modal-tema { background:var(--bg-elevated); border:1px solid var(--border); border-radius:100px; padding:3px 10px; font-size:0.74rem; color:var(--text-secondary); font-weight:500; }
        .ex-modal-desc { font-size:0.875rem; color:var(--text-secondary); line-height:1.65; background:var(--bg-elevated); border-radius:12px; padding:12px 14px; border:1px solid var(--border); }
        .ex-modal-stats-row { display:flex; gap:14px; padding:12px 0; border-top:1px solid var(--border); border-bottom:1px solid var(--border); font-size:0.84rem; color:var(--text-muted); flex-wrap:wrap; }
        .ex-archivos-list { display:flex; flex-direction:column; gap:8px; }

        .ex-dl-btn {
          width:100%; background:linear-gradient(135deg,var(--indigo),#7c3aed);
          border:none; border-radius:12px; padding:13px;
          color:#fff; font-family:var(--font-display); font-weight:700;
          font-size:0.95rem; cursor:pointer; transition:all 0.2s;
          box-shadow:0 4px 16px rgba(99,102,241,0.3);
        }
        .ex-dl-btn:hover { transform:translateY(-1px); box-shadow:0 6px 22px rgba(99,102,241,0.4); }
        .ex-premium-wall {
          background:var(--amber-dim); border:1px solid rgba(245,158,11,0.25);
          border-radius:14px; padding:22px; text-align:center;
          display:flex; flex-direction:column; gap:10px; align-items:center;
          font-size:0.875rem; color:var(--amber);
        }
        .ex-premium-cta {
          background:linear-gradient(135deg,var(--amber),#ef4444);
          border:none; border-radius:9px; padding:9px 22px;
          color:#fff; font-weight:700; font-size:0.875rem;
          cursor:pointer; font-family:var(--font-body);
        }

        @media(max-width:780px){
          .ex-table { display:none; }
          .ex-cards { display:flex; }
          .ex-view-btns { display:none; }
        }
        @media(max-width:500px){
          .ex-stats-bar { display:none; }
          .ex-modal-meta-grid { grid-template-columns:1fr; }
          .ex-tipo-tabs { flex-wrap:wrap; }
        }
      `}),o.jsxs("div",{className:"ex-page page-container",children:[o.jsx("div",{className:"ex-header",children:o.jsxs("div",{children:[o.jsx("h1",{className:"ex-title",children:"Exámenes"}),o.jsx("p",{className:"ex-sub",children:"Banco de parciales y finales de la Universidad Continental"})]})}),o.jsxs("div",{className:"ex-stats-bar",children:[o.jsxs("div",{className:"ex-stat-chip",children:["📋 ",o.jsx("span",{children:ke.total})," exámenes"]}),o.jsxs("div",{className:"ex-stat-chip",children:["📝 ",o.jsx("span",{children:ke.parciales})," parciales"]}),o.jsxs("div",{className:"ex-stat-chip",children:["📋 ",o.jsx("span",{children:ke.finales})," finales"]}),o.jsxs("div",{className:"ex-stat-chip",style:{color:"var(--emerald)"},children:["✓ ",o.jsx("span",{style:{color:"var(--emerald)"},children:ke.resueltos})," resueltos"]}),o.jsxs("div",{className:"ex-stat-chip",style:{color:"var(--amber)"},children:["⭐ ",o.jsx("span",{style:{color:"var(--amber)"},children:ke.premium})," premium"]})]}),(x!=="all"||u!=="all")&&(()=>{const f=x!=="all"?se.find(B=>String(B.id)===x):null,_=u!=="all"?te.find(B=>String(B.id)===u):null;return o.jsxs("div",{className:"ex-active-filter-banner",children:[o.jsx("span",{children:"🔍 Filtrando por:"}),f&&o.jsxs("strong",{children:["📚 ",f.nombre]}),_&&o.jsxs("strong",{children:["🎓 ",_.nombre]}),o.jsx("button",{className:"ex-clear-filter-btn",onClick:L,children:"✕ Quitar filtro"})]})})(),o.jsxs("div",{className:"ex-filters-wrap",children:[o.jsxs("div",{className:"ex-filters-row",children:[o.jsxs("div",{className:"ex-search-wrap",children:[o.jsx("span",{className:"ex-search-icon",children:"🔍"}),o.jsx("input",{className:"ex-search",placeholder:"Buscar por título, tema, curso...",value:a,onChange:f=>n(f.target.value)})]}),o.jsxs("select",{className:`ex-select${u!=="all"?" active":""}`,value:u,onChange:f=>{g(f.target.value),I("all")},children:[o.jsx("option",{value:"all",children:"Todas las carreras"}),nt.map(f=>o.jsx("option",{value:String(f.id),children:f.nombre},f.id))]}),o.jsxs("select",{className:`ex-select${w!=="all"?" active":""}`,value:w,onChange:f=>E(f.target.value),children:[o.jsx("option",{value:"all",children:"Todos los ciclos"}),rr.map(f=>o.jsxs("option",{value:String(f),children:["Ciclo ",f]},f))]}),o.jsxs("select",{className:`ex-select${m!=="all"?" active":""}`,value:m,onChange:f=>d(f.target.value),children:[o.jsx("option",{value:"all",children:"Todos los semestres"}),sr.map(f=>o.jsx("option",{value:f,children:f},f))]})]}),o.jsxs("div",{className:"ex-filters-row",children:[o.jsxs("button",{className:`ex-toggle${p?" on":""}`,onClick:()=>b(f=>!f),children:[p?"✓":"○"," Con solución"]}),o.jsxs("button",{className:`ex-toggle${S?" on":""}`,onClick:()=>T(f=>!f),children:[S?"✓":"○"," Solo gratis"]}),z&&o.jsx("button",{className:"ex-reset",onClick:L,children:"✕ Limpiar filtros"})]}),o.jsxs("div",{className:"ex-fac-row",children:[o.jsx("button",{className:`ex-fac-btn${s==="all"?" active":""}`,style:s==="all"?{background:"var(--indigo-dim)",color:"var(--indigo-light)",borderColor:"rgba(99,102,241,0.4)"}:{},onClick:()=>{c("all"),g("all"),I("all")},children:"Todas"}),Ze.map(f=>o.jsxs("button",{className:`ex-fac-btn${s===String(f.id)?" active":""}`,style:s===String(f.id)?{background:f.color}:{},onClick:()=>{c(String(f.id)),g("all"),I("all")},children:[f.icono," ",f.nombre.replace("Facultad de ","").replace("Facultad ","")]},f.id))]})]}),o.jsx("div",{className:"ex-tipo-tabs",children:[{value:"all",label:"Todos",cls:"all",count:Be.length},{value:"Parcial",label:"📝 Parciales",cls:"parcial",count:ke.parciales},{value:"Final",label:"📋 Finales",cls:"final",count:ke.finales}].map(f=>o.jsxs("button",{className:`ex-tipo-tab ${f.cls}${i===f.value?" active":""}`,onClick:()=>l(f.value),children:[f.label,o.jsx("span",{className:"ex-tab-count",children:f.count})]},f.value))}),o.jsxs("div",{className:"ex-toolbar",children:[o.jsxs("span",{className:"ex-result-count",children:[o.jsx("strong",{children:De.length})," examen",De.length!==1?"es":""," encontrado",De.length!==1?"s":""]}),o.jsx("select",{className:"ex-sort-select",value:j,onChange:f=>R(f.target.value),children:sf.map(f=>o.jsx("option",{value:f.value,children:f.label},f.value))}),o.jsxs("div",{className:"ex-view-btns",children:[o.jsx("button",{className:`ex-view-btn${ae==="table"?" active":""}`,onClick:()=>qe("table"),children:"☰"}),o.jsx("button",{className:`ex-view-btn${ae==="cards"?" active":""}`,onClick:()=>qe("cards"),children:"⊞"})]})]}),De.length===0?o.jsxs("div",{className:"ex-empty",children:[o.jsx("span",{style:{fontSize:"2.5rem"},children:"📭"}),o.jsx("p",{style:{fontWeight:700,color:"var(--text-secondary)"},children:"Sin resultados"}),o.jsx("p",{children:"Prueba con otros filtros o términos"}),z&&o.jsx("button",{className:"ex-reset",onClick:L,children:"✕ Limpiar filtros"})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"ex-table",style:{display:ae==="cards"?"none":void 0},children:[o.jsxs("div",{className:"ex-thead",children:[o.jsx("span",{style:{flex:3},children:"Examen"}),o.jsx("span",{style:{flex:1,textAlign:"center"},children:"Tipo"}),o.jsx("span",{style:{flex:.8,textAlign:"center"},children:"Semestre"}),o.jsx("span",{style:{flex:1,textAlign:"center"},children:"Estado"}),o.jsx("span",{style:{flex:.7,textAlign:"right"},children:"⬇️"}),o.jsx("span",{style:{flex:.8,textAlign:"right"},children:"Acción"})]}),De.map(f=>{const _=se.find(fe=>fe.id===f.cursoId),B=Xr.find(fe=>fe.id===f.docenteId),de=_?te.find(fe=>fe.id===_.carreraId):null,Ie=de?Ze.find(fe=>fe.id===de.facultadId):null;return o.jsxs("div",{className:"ex-row",onClick:()=>F(f),children:[o.jsxs("div",{className:"ex-col-main",children:[o.jsx("span",{className:"ex-row-title",children:f.titulo}),o.jsxs("div",{className:"ex-row-meta",children:[_&&o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"ex-row-dot",style:{background:_.color}}),_.nombre]}),Ie&&o.jsx("span",{className:"ex-row-fac",style:{color:Ie.color},children:Ie.icono}),B&&` · ${B.nombre.split(" ")[0]} ${B.nombre.split(" ")[1]}`]})]}),o.jsx("div",{className:"ex-col-1",children:o.jsx("span",{className:`ex-badge ${f.tipo==="Final"?"ex-badge-final":"ex-badge-parcial"}`,children:f.tipo})}),o.jsxs("div",{className:"ex-col-sm",children:[f.año,"-",f.semestre]}),o.jsx("div",{className:"ex-col-1",children:o.jsx("span",{className:`ex-badge ${f.resuelto?"ex-badge-ok":"ex-badge-no"}`,children:f.resuelto?"✓ Resuelto":"Sin resolver"})}),o.jsx("div",{className:"ex-col-dl",children:f.descargas.toLocaleString()}),o.jsx("div",{className:"ex-col-act",children:o.jsx("button",{className:`ex-view-btn-sm${f.premium?" premium":""}`,children:f.premium?"🔒 PRO":"⬇️ Ver"})})]},f.id)})]}),o.jsx("div",{className:"ex-cards",style:{display:ae==="cards"?"flex":void 0},children:De.map((f,_)=>{var de,Ie;const B=se.find(fe=>fe.id===f.cursoId);return o.jsxs("div",{className:"ex-card",style:{animationDelay:`${Math.min(_*.04,.3)}s`},onClick:()=>F(f),children:[f.previewImg&&o.jsx("img",{src:f.previewImg,alt:f.titulo,className:"ex-card-img",loading:"lazy"}),o.jsxs("div",{className:"ex-card-body",children:[o.jsxs("div",{className:"ex-card-top",children:[o.jsx("span",{className:`ex-badge ${f.tipo==="Final"?"ex-badge-final":"ex-badge-parcial"}`,children:f.tipo}),o.jsx("span",{className:`ex-badge ${f.resuelto?"ex-badge-ok":"ex-badge-no"}`,children:f.resuelto?"✓ Resuelto":"Sin resolver"}),f.premium&&o.jsx("span",{className:"ex-badge ex-badge-premium",children:"⭐ PRO"})]}),o.jsx("div",{className:"ex-card-title",children:f.titulo}),B&&o.jsxs("div",{className:"ex-card-meta",children:[o.jsx("span",{className:"ex-row-dot",style:{background:B.color}}),B.nombre," · ",f.año,"-",f.semestre]}),((de=f.temas)==null?void 0:de.length)>0&&o.jsxs("div",{className:"ex-card-temas",children:[f.temas.slice(0,3).map(fe=>o.jsx("span",{className:"ex-card-tema",children:fe},fe)),f.temas.length>3&&o.jsxs("span",{className:"ex-card-tema",style:{color:"var(--indigo-light)"},children:["+",f.temas.length-3]})]}),o.jsxs("div",{className:"ex-card-footer",children:[o.jsxs("div",{className:"ex-card-stats",children:[o.jsxs("span",{children:["⬇️ ",f.descargas.toLocaleString()]}),o.jsxs("span",{children:["❤️ ",f.likes]}),o.jsxs("span",{children:["📎 ",((Ie=f.archivos)==null?void 0:Ie.length)||0]})]}),o.jsx("button",{className:`ex-view-btn-sm${f.premium?" premium":""}`,children:f.premium?"🔒 PRO":"⬇️ Ver"})]})]})]},f.id)})})]}),o.jsx(au,{open:!!P,onClose:()=>F(null),title:P==null?void 0:P.titulo,children:P&&o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[P.previewImg&&o.jsx("img",{src:P.previewImg,alt:P.titulo,className:"ex-modal-preview",loading:"lazy"}),o.jsxs("div",{className:"ex-modal-chips",children:[o.jsx("span",{className:`ex-badge ${P.tipo==="Final"?"ex-badge-final":"ex-badge-parcial"}`,style:{fontSize:"0.8rem",padding:"4px 12px"},children:P.tipo}),P.resuelto&&o.jsx("span",{className:"ex-badge ex-badge-ok",style:{fontSize:"0.8rem",padding:"4px 12px"},children:"✓ Con solución"}),P.premium&&o.jsx("span",{className:"ex-badge ex-badge-premium",style:{fontSize:"0.8rem",padding:"4px 12px"},children:"⭐ Premium"}),G&&o.jsxs("span",{className:"ex-modal-chip",style:{background:`${G.color}18`,color:G.color,border:`1px solid ${G.color}35`},children:[G.icono," ",G.nombre.replace("Facultad de ","").replace("Facultad ","")]})]}),o.jsxs("div",{className:"ex-modal-stats-row",children:[o.jsxs("span",{children:["⬇️ ",o.jsx("strong",{style:{color:"var(--text-secondary)"},children:P.descargas.toLocaleString()})]}),o.jsxs("span",{children:["❤️ ",o.jsx("strong",{style:{color:"var(--text-secondary)"},children:P.likes})]}),o.jsxs("span",{children:["👁️ ",o.jsx("strong",{style:{color:"var(--text-secondary)"},children:(P.vistas||0).toLocaleString()})]}),o.jsx("span",{style:{marginLeft:"auto",fontSize:"0.76rem",color:"var(--text-muted)"},children:P.fecha})]}),P.descripcion&&o.jsxs("div",{className:"ex-modal-section",children:[o.jsx("div",{className:"ex-modal-section-label",children:"Descripción"}),o.jsx("div",{className:"ex-modal-desc",children:P.descripcion})]}),o.jsxs("div",{className:"ex-modal-section",children:[o.jsx("div",{className:"ex-modal-section-label",children:"Información del examen"}),o.jsxs("div",{className:"ex-modal-meta-grid",children:[D&&o.jsxs("div",{className:"ex-modal-meta-item",children:[o.jsx("div",{className:"ex-modal-meta-label",children:"Curso"}),o.jsx("div",{className:"ex-modal-meta-value",style:{fontSize:"0.78rem"},children:D.nombre})]}),U&&o.jsxs("div",{className:"ex-modal-meta-item",children:[o.jsx("div",{className:"ex-modal-meta-label",children:"Carrera"}),o.jsx("div",{className:"ex-modal-meta-value",style:{fontSize:"0.78rem"},children:U.nombre})]}),cr&&o.jsxs("div",{className:"ex-modal-meta-item",children:[o.jsx("div",{className:"ex-modal-meta-label",children:"Docente"}),o.jsx("div",{className:"ex-modal-meta-value",style:{fontSize:"0.78rem"},children:cr.nombre.split(" ").slice(0,3).join(" ")})]}),o.jsxs("div",{className:"ex-modal-meta-item",children:[o.jsx("div",{className:"ex-modal-meta-label",children:"Año / Semestre"}),o.jsxs("div",{className:"ex-modal-meta-value",children:[P.año," – ",P.semestre]})]}),P.duracion&&o.jsxs("div",{className:"ex-modal-meta-item",children:[o.jsx("div",{className:"ex-modal-meta-label",children:"Duración"}),o.jsx("div",{className:"ex-modal-meta-value",children:P.duracion})]}),P.preguntas&&o.jsxs("div",{className:"ex-modal-meta-item",children:[o.jsx("div",{className:"ex-modal-meta-label",children:"Preguntas / Puntaje"}),o.jsxs("div",{className:"ex-modal-meta-value",children:[P.preguntas," preg. · ",P.puntaje_total," pts"]})]}),D&&o.jsxs("div",{className:"ex-modal-meta-item",children:[o.jsx("div",{className:"ex-modal-meta-label",children:"Código / Ciclo"}),o.jsxs("div",{className:"ex-modal-meta-value",children:[D.codigo," · Ciclo ",D.ciclo]})]})]})]}),((dr=P.temas)==null?void 0:dr.length)>0&&o.jsxs("div",{className:"ex-modal-section",children:[o.jsx("div",{className:"ex-modal-section-label",children:"Temas evaluados"}),o.jsx("div",{className:"ex-modal-temas",children:P.temas.map(f=>o.jsx("span",{className:"ex-modal-tema",children:f},f))})]}),((_e=P.archivos)==null?void 0:_e.length)>0&&o.jsxs("div",{className:"ex-modal-section",children:[o.jsxs("div",{className:"ex-modal-section-label",children:["Archivos · ",P.archivos.length," ",P.archivos.length===1?"archivo":"archivos",P.resuelto&&" (incluye solución)"]}),o.jsx("div",{className:"ex-archivos-list",children:P.archivos.map((f,_)=>o.jsx(cf,{archivo:f},_))})]}),Fe?o.jsxs("div",{className:"ex-premium-wall",children:[o.jsx("span",{style:{fontSize:"1.6rem"},children:"🔒"}),o.jsx("p",{style:{fontWeight:700},children:"Examen resuelto exclusivo para Premium"}),o.jsx("p",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:"Accede a todos los exámenes resueltos por S/. 5/mes"}),o.jsx("button",{className:"ex-premium-cta",onClick:()=>{F(null),e("planes")},children:"Ver planes →"})]}):o.jsxs("button",{className:"ex-dl-btn",onClick:()=>{var _;const f=(_=P.archivos)==null?void 0:_.find(B=>B.url&&B.tipo==="pdf");f&&window.open(f.url,"_blank","noopener")},children:["⬇️ Descargar examen",((k=P.archivos)==null?void 0:k.length)>1?` (${P.archivos.length} archivos)`:""]})]})})]})]})}const Ia="2026-I",uf=2026,As=new Set(Be.filter(e=>e.año===uf&&e.semestre==="I").map(e=>e.cursoId));function pf(e){const r=se.filter(u=>u.docenteId===e.id),t=r.filter(u=>As.has(u.id)),a=r.filter(u=>!As.has(u.id)),n=mr.filter(u=>u.docenteId===e.id).length,i=Be.filter(u=>u.docenteId===e.id).length,l=[...mr.filter(u=>u.docenteId===e.id),...Be.filter(u=>u.docenteId===e.id)].reduce((u,g)=>u+(g.descargas||0),0),s=te.find(u=>u.id===e.carreraId),c=s?Ze.find(u=>u.id===s.facultadId):null;return{...e,todosCursos:r,cursosActivos:t,cursosPasados:a,numApuntes:n,numExamenes:i,totalDescargas:l,carrera:s,facultad:c}}const zn=Xr.map(pf),Ts=Ze,mf=[{value:"rating",label:"Mejor valorados"},{value:"apuntes",label:"Más apuntes"},{value:"examenes",label:"Más exámenes"},{value:"descargas",label:"Más descargas"}];function ff({navigate:e}){const[r,t]=y.useState(""),[a,n]=y.useState("all"),[i,l]=y.useState(!1),[s,c]=y.useState("rating"),[u,g]=y.useState("grid"),[h,v]=y.useState(null),x=y.useMemo(()=>[...zn.filter(d=>{var j;const p=r.toLowerCase(),b=d.nombre.toLowerCase().includes(p)||d.area.toLowerCase().includes(p)||d.todosCursos.some(R=>R.nombre.toLowerCase().includes(p)),S=a==="all"||String((j=d.facultad)==null?void 0:j.id)===a,T=!i||d.cursosActivos.length>0;return b&&S&&T})].sort((d,p)=>s==="rating"?p.rating-d.rating:s==="apuntes"?p.numApuntes-d.numApuntes:s==="examenes"?p.numExamenes-d.numExamenes:s==="descargas"?p.totalDescargas-d.totalDescargas:0),[r,a,i,s]),I=y.useMemo(()=>({total:zn.length,activos:zn.filter(m=>m.cursosActivos.length>0).length,facs:Ts.length}),[]),w=r||a!=="all"||i,E=()=>{t(""),n("all"),l(!1)};return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        .doc-page { animation: doc-in 0.35s ease both; }
        @keyframes doc-in { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:none} }
        @keyframes doc-card-in { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }
        @keyframes blink-dot { 0%,100%{opacity:1} 50%{opacity:0.3} }

        .doc-header {
          display:flex; align-items:flex-start; justify-content:space-between;
          gap:16px; margin-bottom:28px; flex-wrap:wrap;
        }
        .doc-title {
          font-family:var(--font-display); font-weight:900;
          font-size:clamp(1.6rem,4vw,2.1rem);
          color:var(--text-primary); margin-bottom:4px; letter-spacing:-0.03em;
        }
        .doc-sub { font-size:0.875rem; color:var(--text-muted); }

        .doc-stats-bar { display:flex; gap:10px; flex-wrap:wrap; margin-bottom:24px; }
        .doc-stat-chip {
          display:flex; align-items:center; gap:6px;
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:100px; padding:6px 14px;
          font-size:0.76rem; font-weight:600; color:var(--text-secondary);
        }
        .doc-stat-chip span { font-weight:800; color:var(--text-primary); }
        .doc-stat-chip.green { color:var(--emerald); }
        .doc-stat-chip.green span { color:var(--emerald); }

        .doc-filters-wrap {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:16px; padding:16px 18px; margin-bottom:20px;
          display:flex; flex-direction:column; gap:12px;
        }
        .doc-filters-row { display:flex; gap:10px; flex-wrap:wrap; align-items:center; }
        .doc-search-wrap { position:relative; flex:2; min-width:200px; }
        .doc-search-icon { position:absolute; left:12px; top:50%; transform:translateY(-50%); pointer-events:none; font-size:0.9rem; }
        .doc-search {
          width:100%; background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:10px; padding:9px 14px 9px 36px;
          color:var(--text-primary); font-size:0.875rem; font-family:var(--font-body);
          outline:none; transition:border-color 0.18s;
        }
        .doc-search:focus { border-color:rgba(99,102,241,0.5); }
        .doc-search::placeholder { color:var(--text-muted); }
        .doc-select {
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:10px; padding:9px 14px; flex:1; min-width:140px;
          color:var(--text-secondary); font-size:0.84rem; font-family:var(--font-body);
          outline:none; cursor:pointer; transition:border-color 0.18s;
        }
        .doc-select.active { border-color:rgba(99,102,241,0.5); color:var(--indigo-light); background:var(--indigo-dim); }
        .doc-toggle {
          display:flex; align-items:center; gap:7px;
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:10px; padding:9px 14px;
          font-size:0.8rem; font-weight:600; color:var(--text-secondary);
          cursor:pointer; font-family:var(--font-body); white-space:nowrap;
          transition:all 0.15s; user-select:none;
        }
        .doc-toggle.on { background:rgba(22,163,74,0.1); border-color:rgba(22,163,74,0.35); color:#16a34a; }
        .doc-toggle-dot { width:8px; height:8px; border-radius:50%; background:#16a34a; animation:blink-dot 1.8s infinite; }
        .doc-reset {
          background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.25);
          border-radius:10px; padding:9px 14px;
          color:#ef4444; font-size:0.8rem; font-weight:600;
          font-family:var(--font-body); cursor:pointer; white-space:nowrap;
        }
        .doc-reset:hover { background:rgba(239,68,68,0.14); }

        .doc-fac-row { display:flex; gap:7px; flex-wrap:wrap; }
        .doc-fac-btn {
          display:flex; align-items:center; gap:5px;
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:9px; padding:5px 12px;
          font-size:0.76rem; font-weight:600; color:var(--text-muted);
          cursor:pointer; font-family:var(--font-body); transition:all 0.15s; white-space:nowrap;
        }
        .doc-fac-btn.active { color:#fff; border-color:transparent; }
        .doc-fac-btn:hover:not(.active) { background:var(--bg-card); color:var(--text-secondary); }

        .doc-toolbar { display:flex; align-items:center; gap:10px; margin-bottom:20px; flex-wrap:wrap; }
        .doc-result-count { font-size:0.82rem; color:var(--text-muted); flex:1; }
        .doc-result-count strong { color:var(--text-secondary); }
        .doc-sort-select {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:9px; padding:6px 12px;
          color:var(--text-secondary); font-size:0.8rem; font-family:var(--font-body);
          outline:none; cursor:pointer;
        }
        .doc-view-btns { display:flex; gap:4px; }
        .doc-view-btn {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:8px; padding:6px 10px; cursor:pointer;
          font-size:0.85rem; transition:all 0.15s; color:var(--text-muted);
        }
        .doc-view-btn.active { background:var(--indigo-dim); border-color:rgba(99,102,241,0.35); color:var(--indigo-light); }

        .doc-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:20px; }

        .doc-list { display:flex; flex-direction:column; gap:10px; }
        .doc-list-row {
          display:flex; align-items:center; gap:16px;
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:14px; padding:16px 18px; cursor:pointer;
          transition:all 0.18s; animation:doc-card-in 0.25s ease both;
        }
        .doc-list-row:hover { border-color:rgba(99,102,241,0.35); transform:translateX(3px); }
        .doc-list-avatar {
          width:48px; height:48px; border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          font-size:1rem; font-weight:800; color:#fff; flex-shrink:0;
          box-shadow:0 4px 12px rgba(0,0,0,0.25);
        }
        .doc-list-main { flex:1; min-width:0; }
        .doc-list-name { font-family:var(--font-display); font-weight:700; font-size:0.9rem; color:var(--text-primary); margin-bottom:3px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .doc-list-area { font-size:0.76rem; color:var(--text-muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .doc-list-right { display:flex; align-items:center; gap:10px; flex-shrink:0; }
        .doc-list-stats { display:flex; gap:12px; font-size:0.78rem; color:var(--text-muted); }

        .doc-card {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:18px; overflow:hidden;
          transition:all 0.22s; display:flex; flex-direction:column;
          cursor:pointer; animation:doc-card-in 0.3s ease both;
          position:relative;
        }
        .doc-card:hover { border-color:rgba(99,102,241,0.35); transform:translateY(-4px); box-shadow:0 12px 32px rgba(0,0,0,0.25); }

        .doc-card-strip { height:5px; width:100%; flex-shrink:0; }

        .doc-card-head { padding:18px 18px 0; display:flex; align-items:flex-start; justify-content:space-between; gap:10px; margin-bottom:14px; }
        .doc-avatar {
          width:52px; height:52px; border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          font-size:1rem; font-weight:800; color:#fff; flex-shrink:0;
          box-shadow:0 4px 14px rgba(0,0,0,0.3);
        }
        .doc-head-right { display:flex; flex-direction:column; align-items:flex-end; gap:5px; }
        .doc-rating {
          background:var(--amber-dim); border:1px solid rgba(245,158,11,0.3);
          border-radius:100px; padding:4px 11px;
          font-size:0.78rem; font-weight:700; color:var(--amber); white-space:nowrap;
        }
        .doc-activo-badge { font-size:0.67rem; font-weight:700; border-radius:100px; padding:3px 9px; white-space:nowrap; }
        .doc-activo-badge.on { background:rgba(22,163,74,0.12); border:1px solid rgba(22,163,74,0.3); color:#16a34a; }
        .doc-activo-badge.off { background:var(--bg-elevated); border:1px solid var(--border); color:var(--text-muted); }

        .doc-card-info { padding:0 18px 14px; }
        .doc-nombre { font-family:var(--font-display); font-weight:700; font-size:0.97rem; line-height:1.3; color:var(--text-primary); margin:0 0 3px; }
        .doc-area { font-size:0.78rem; color:var(--text-muted); margin:0 0 8px; }
        .doc-fac-tag {
          display:inline-flex; align-items:center; gap:5px;
          font-size:0.7rem; font-weight:600; padding:3px 10px;
          border-radius:100px; margin-bottom:14px;
        }

        .doc-stats-strip {
          display:flex; margin:0 18px 14px;
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:11px; overflow:hidden;
        }
        .doc-ss { flex:1; display:flex; flex-direction:column; align-items:center; padding:9px 4px; gap:1px; }
        .doc-ss + .doc-ss { border-left:1px solid var(--border); }
        .doc-ss-num { font-family:var(--font-display); font-weight:800; font-size:1rem; color:var(--text-primary); line-height:1; }
        .doc-ss-lbl { font-size:0.62rem; font-weight:600; text-transform:uppercase; letter-spacing:0.06em; color:var(--text-muted); }

        .doc-cursos-wrap { padding:0 18px; flex:1; }
        .doc-cursos-label {
          display:flex; align-items:center; gap:7px;
          font-size:0.65rem; font-weight:800; text-transform:uppercase;
          letter-spacing:0.1em; color:var(--text-muted); margin-bottom:7px;
        }
        .doc-activo-dot { width:7px; height:7px; border-radius:50%; background:#16a34a; animation:blink-dot 1.8s infinite; flex-shrink:0; }
        .doc-cursos-list { display:flex; flex-direction:column; gap:5px; margin-bottom:10px; }
        .doc-curso-row {
          display:flex; align-items:center; gap:8px;
          padding:7px 10px; border-radius:9px;
          background:var(--bg-elevated); border:1px solid var(--border);
          transition:border-color 0.13s;
        }
        .doc-curso-row:hover { border-color:rgba(99,102,241,0.3); }
        .doc-curso-dot { width:7px; height:7px; border-radius:50%; flex-shrink:0; }
        .doc-curso-info { flex:1; min-width:0; }
        .doc-curso-nombre { font-size:0.81rem; font-weight:600; color:var(--text-primary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .doc-curso-meta { font-size:0.69rem; color:var(--text-muted); margin-top:1px; }
        .doc-curso-cr { font-size:0.67rem; font-weight:700; color:var(--text-muted); background:var(--bg-card); border:1px solid var(--border); border-radius:5px; padding:2px 6px; flex-shrink:0; }

        .doc-pasados-btn {
          background:none; border:none; cursor:pointer;
          color:var(--text-muted); font-size:0.74rem; font-family:var(--font-body);
          padding:3px 0; margin-bottom:7px;
          display:flex; align-items:center; gap:5px; transition:color 0.13s;
        }
        .doc-pasados-btn:hover { color:var(--text-secondary); }

        .doc-card-footer { display:flex; gap:7px; padding:14px 18px 18px; margin-top:auto; }
        .doc-action-btn {
          flex:1; background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:9px; padding:8px 6px;
          font-size:0.77rem; font-weight:600; color:var(--text-secondary);
          cursor:pointer; font-family:var(--font-body); transition:all 0.15s; text-align:center;
        }
        .doc-action-btn:hover { background:var(--indigo-dim); color:var(--indigo-light); border-color:rgba(99,102,241,0.3); }

        .d-badge { display:inline-block; padding:3px 10px; border-radius:100px; font-size:0.68rem; font-weight:700; }
        .d-badge-indigo { background:var(--indigo-dim); color:var(--indigo-light); border:1px solid rgba(99,102,241,0.3); }
        .d-badge-green  { background:rgba(22,163,74,0.1); color:#16a34a; border:1px solid rgba(22,163,74,0.3); }
        .d-badge-muted  { background:var(--bg-elevated); color:var(--text-muted); border:1px solid var(--border); }

        .doc-modal-head { display:flex; align-items:center; gap:14px; margin-bottom:16px; }
        .doc-modal-avatar { width:60px; height:60px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.15rem; font-weight:800; color:#fff; flex-shrink:0; box-shadow:0 4px 18px rgba(0,0,0,0.3); }
        .doc-modal-name { font-family:var(--font-display); font-weight:800; font-size:1.05rem; color:var(--text-primary); margin-bottom:3px; }
        .doc-modal-area { font-size:0.82rem; color:var(--text-muted); margin-bottom:6px; }
        .doc-modal-badges { display:flex; gap:6px; flex-wrap:wrap; }
        .doc-modal-section-label { font-size:0.65rem; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-muted); margin-bottom:8px; }
        .doc-modal-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:8px; margin-bottom:18px; }
        .doc-modal-stat { background:var(--bg-elevated); border:1px solid var(--border); border-radius:11px; padding:10px 8px; text-align:center; }
        .doc-modal-stat-num { font-family:var(--font-display); font-weight:800; font-size:1.1rem; color:var(--text-primary); }
        .doc-modal-stat-lbl { font-size:0.65rem; color:var(--text-muted); font-weight:600; text-transform:uppercase; letter-spacing:0.06em; margin-top:2px; }
        .doc-modal-cursos { display:flex; flex-direction:column; gap:6px; margin-bottom:18px; }
        .doc-modal-cta { display:flex; gap:8px; }
        .doc-modal-btn {
          flex:1; border-radius:11px; padding:12px;
          font-family:var(--font-display); font-weight:700; font-size:0.9rem;
          cursor:pointer; transition:all 0.2s; text-align:center; border:none;
        }
        .doc-modal-btn-primary { background:linear-gradient(135deg,var(--indigo),#7c3aed); color:#fff; box-shadow:0 4px 14px rgba(99,102,241,0.3); }
        .doc-modal-btn-primary:hover { transform:translateY(-1px); box-shadow:0 6px 20px rgba(99,102,241,0.4); }
        .doc-modal-btn-secondary { background:var(--bg-elevated); border:1px solid var(--border) !important; color:var(--text-secondary); }
        .doc-modal-btn-secondary:hover { background:var(--bg-card); color:var(--text-primary); }

        .doc-modal-backdrop {
          position:fixed; inset:0; background:rgba(0,0,0,0.6);
          backdrop-filter:blur(4px); z-index:500;
          display:flex; align-items:center; justify-content:center; padding:16px;
          animation:modal-bg-in 0.18s ease;
        }
        @keyframes modal-bg-in { from{opacity:0} to{opacity:1} }
        .doc-modal-box {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:20px; width:100%; max-width:520px;
          max-height:90vh; overflow-y:auto;
          padding:24px; position:relative;
          animation:modal-box-in 0.22s ease;
          scrollbar-width:thin; scrollbar-color:var(--border) transparent;
        }
        @keyframes modal-box-in { from{opacity:0;transform:translateY(-12px) scale(0.98)} to{opacity:1;transform:none} }
        .doc-modal-close {
          position:absolute; top:16px; right:16px;
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:8px; width:30px; height:30px;
          display:flex; align-items:center; justify-content:center;
          cursor:pointer; color:var(--text-muted); font-size:0.9rem; transition:all 0.13s;
        }
        .doc-modal-close:hover { background:var(--bg-card); color:var(--text-primary); }

        .doc-empty { text-align:center; padding:80px 24px; color:var(--text-muted); display:flex; flex-direction:column; gap:12px; align-items:center; }

        @media(max-width:700px){
          .doc-grid { grid-template-columns:1fr; }
          .doc-modal-stats { grid-template-columns:repeat(2,1fr); }
        }
        @media(max-width:480px){
          .doc-stats-bar { display:none; }
          .doc-list-stats { display:none; }
          .doc-modal-cta { flex-direction:column; }
        }
      `}),o.jsxs("div",{className:"doc-page page-container",children:[o.jsx("div",{className:"doc-header",children:o.jsxs("div",{children:[o.jsx("h1",{className:"doc-title",children:"Docentes UC"}),o.jsxs("p",{className:"doc-sub",children:["Materiales y exámenes organizados por profesor — ",Ia]})]})}),o.jsxs("div",{className:"doc-stats-bar",children:[o.jsxs("div",{className:"doc-stat-chip",children:["👨‍🏫 ",o.jsx("span",{children:I.total})," docentes"]}),o.jsxs("div",{className:"doc-stat-chip",children:["🏫 ",o.jsx("span",{children:I.facs})," facultades"]}),o.jsxs("div",{className:"doc-stat-chip green",children:[o.jsx("span",{style:{width:8,height:8,borderRadius:"50%",background:"#16a34a",display:"inline-block",animation:"blink-dot 1.8s infinite"}}),o.jsx("span",{children:I.activos})," activos en ",Ia]})]}),o.jsxs("div",{className:"doc-filters-wrap",children:[o.jsxs("div",{className:"doc-filters-row",children:[o.jsxs("div",{className:"doc-search-wrap",children:[o.jsx("span",{className:"doc-search-icon",children:"🔍"}),o.jsx("input",{className:"doc-search",placeholder:"Buscar por nombre, área o curso...",value:r,onChange:m=>t(m.target.value)})]}),o.jsxs("button",{className:`doc-toggle${i?" on":""}`,onClick:()=>l(m=>!m),children:[i&&o.jsx("span",{className:"doc-toggle-dot"}),i?"Solo activos":"Todos los docentes"]}),w&&o.jsx("button",{className:"doc-reset",onClick:E,children:"✕ Limpiar"})]}),o.jsxs("div",{className:"doc-fac-row",children:[o.jsx("button",{className:`doc-fac-btn${a==="all"?" active":""}`,style:a==="all"?{background:"var(--indigo-dim)",color:"var(--indigo-light)",borderColor:"rgba(99,102,241,0.4)"}:{},onClick:()=>n("all"),children:"Todas"}),Ts.map(m=>o.jsxs("button",{className:`doc-fac-btn${a===String(m.id)?" active":""}`,style:a===String(m.id)?{background:m.color}:{},onClick:()=>n(String(m.id)),children:[m.icono," ",m.nombre.replace("Facultad de ","").replace("Facultad ","")]},m.id))]})]}),o.jsxs("div",{className:"doc-toolbar",children:[o.jsxs("span",{className:"doc-result-count",children:[o.jsx("strong",{children:x.length})," docente",x.length!==1?"s":""," encontrado",x.length!==1?"s":""]}),o.jsx("select",{className:"doc-sort-select",value:s,onChange:m=>c(m.target.value),children:mf.map(m=>o.jsx("option",{value:m.value,children:m.label},m.value))}),o.jsxs("div",{className:"doc-view-btns",children:[o.jsx("button",{className:`doc-view-btn${u==="grid"?" active":""}`,onClick:()=>g("grid"),children:"⊞"}),o.jsx("button",{className:`doc-view-btn${u==="list"?" active":""}`,onClick:()=>g("list"),children:"☰"})]})]}),x.length===0?o.jsxs("div",{className:"doc-empty",children:[o.jsx("span",{style:{fontSize:"2.5rem"},children:"👨‍🏫"}),o.jsx("p",{style:{fontWeight:700,color:"var(--text-secondary)"},children:"Sin resultados"}),o.jsx("p",{children:"Prueba con otro nombre o quita los filtros"}),w&&o.jsx("button",{className:"doc-reset",onClick:E,children:"✕ Limpiar filtros"})]}):u==="grid"?o.jsx("div",{className:"doc-grid",children:x.map((m,d)=>o.jsx(gf,{docente:m,delay:Math.min(d*.03,.3),onOpen:()=>v(m),navigate:e},m.id))}):o.jsx("div",{className:"doc-list",children:x.map((m,d)=>{var b;const p=((b=m.carrera)==null?void 0:b.color)??"#4f46e5";return o.jsxs("div",{className:"doc-list-row",style:{animationDelay:`${Math.min(d*.03,.3)}s`},onClick:()=>v(m),children:[o.jsx("div",{className:"doc-list-avatar",style:{background:`linear-gradient(135deg,${p}cc,${p})`},children:m.iniciales}),o.jsxs("div",{className:"doc-list-main",children:[o.jsx("div",{className:"doc-list-name",children:m.nombre}),o.jsx("div",{className:"doc-list-area",children:m.area})]}),o.jsxs("div",{className:"doc-list-right",children:[m.cursosActivos.length>0&&o.jsx("span",{className:"d-badge d-badge-green",children:"● Activo"}),m.facultad&&o.jsx("span",{className:"d-badge",style:{background:`${m.facultad.color}18`,color:m.facultad.color,border:`1px solid ${m.facultad.color}35`},children:m.facultad.icono}),o.jsxs("div",{className:"doc-list-stats",children:[o.jsxs("span",{children:["⭐ ",m.rating]}),o.jsxs("span",{children:["📝 ",m.numApuntes]}),o.jsxs("span",{children:["📋 ",m.numExamenes]})]})]})]},m.id)})})]}),h&&o.jsx(hf,{docente:h,onClose:()=>v(null),navigate:e})]})}function gf({docente:e,delay:r,onOpen:t,navigate:a}){var u;const[n,i]=y.useState(!1),l=((u=e.carrera)==null?void 0:u.color)??"#4f46e5",s=e.cursosActivos.length>0,c=e.cursosPasados.length>0;return o.jsxs("div",{className:"doc-card",style:{animationDelay:`${r}s`},onClick:t,children:[o.jsx("div",{className:"doc-card-strip",style:{background:l}}),o.jsxs("div",{className:"doc-card-head",children:[o.jsx("div",{className:"doc-avatar",style:{background:`linear-gradient(135deg,${l}cc,${l})`},children:e.iniciales}),o.jsxs("div",{className:"doc-head-right",children:[o.jsxs("span",{className:"doc-rating",children:["⭐ ",e.rating]}),o.jsx("span",{className:`doc-activo-badge ${s?"on":"off"}`,children:s?"● Activo 2026-I":"Sin cursos activos"})]})]}),o.jsxs("div",{className:"doc-card-info",children:[o.jsx("h3",{className:"doc-nombre",children:e.nombre}),o.jsx("p",{className:"doc-area",children:e.area}),e.facultad&&o.jsxs("span",{className:"doc-fac-tag",style:{background:`${e.facultad.color}18`,color:e.facultad.color,border:`1px solid ${e.facultad.color}30`},children:[e.facultad.icono," ",e.facultad.nombre.replace("Facultad de ","").replace("Facultad ","")]})]}),o.jsxs("div",{className:"doc-stats-strip",children:[o.jsxs("div",{className:"doc-ss",children:[o.jsx("span",{className:"doc-ss-num",children:e.numApuntes}),o.jsx("span",{className:"doc-ss-lbl",children:"Apuntes"})]}),o.jsxs("div",{className:"doc-ss",children:[o.jsx("span",{className:"doc-ss-num",children:e.numExamenes}),o.jsx("span",{className:"doc-ss-lbl",children:"Exámenes"})]}),o.jsxs("div",{className:"doc-ss",children:[o.jsx("span",{className:"doc-ss-num",children:e.todosCursos.length}),o.jsx("span",{className:"doc-ss-lbl",children:"Cursos"})]}),o.jsxs("div",{className:"doc-ss",children:[o.jsx("span",{className:"doc-ss-num",children:e.totalDescargas>999?`${(e.totalDescargas/1e3).toFixed(1)}k`:e.totalDescargas}),o.jsx("span",{className:"doc-ss-lbl",children:"Descargas"})]})]}),o.jsxs("div",{className:"doc-cursos-wrap",children:[s&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"doc-cursos-label",children:[o.jsx("span",{className:"doc-activo-dot"}),"Cursos activos ",Ia]}),o.jsxs("div",{className:"doc-cursos-list",children:[e.cursosActivos.slice(0,2).map(g=>o.jsx(Mo,{curso:g},g.id)),e.cursosActivos.length>2&&o.jsxs("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",padding:"3px 10px"},children:["+",e.cursosActivos.length-2," curso",e.cursosActivos.length-2>1?"s":""," más"]})]})]}),c&&o.jsxs(o.Fragment,{children:[o.jsxs("button",{className:"doc-pasados-btn",onClick:g=>{g.stopPropagation(),i(h=>!h)},children:[n?"▾":"▸"," ",e.cursosPasados.length," curso",e.cursosPasados.length>1?"s":""," anterior",e.cursosPasados.length>1?"es":""]}),n&&o.jsx("div",{className:"doc-cursos-list",style:{opacity:.6},children:e.cursosPasados.slice(0,3).map(g=>o.jsx(Mo,{curso:g},g.id))})]}),!s&&!c&&o.jsx("p",{style:{fontSize:"0.76rem",color:"var(--text-muted)",paddingBottom:10},children:"Sin cursos registrados."})]}),o.jsxs("div",{className:"doc-card-footer",onClick:g=>g.stopPropagation(),children:[o.jsx("button",{className:"doc-action-btn",onClick:()=>a("apuntes",{docenteId:String(e.id)}),children:"📝 Apuntes"}),o.jsx("button",{className:"doc-action-btn",onClick:()=>a("examenes",{docenteId:String(e.id)}),children:"📋 Exámenes"}),o.jsx("button",{className:"doc-action-btn",style:{flex:"0 0 auto",padding:"8px 10px"},onClick:t,children:"👤 Ver perfil"})]})]})}function Mo({curso:e}){const r=te.find(t=>t.id===e.carreraId);return o.jsxs("div",{className:"doc-curso-row",children:[o.jsx("div",{className:"doc-curso-dot",style:{background:e.color}}),o.jsxs("div",{className:"doc-curso-info",children:[o.jsx("div",{className:"doc-curso-nombre",children:e.nombre}),o.jsxs("div",{className:"doc-curso-meta",children:[e.codigo," · Ciclo ",e.ciclo,r?` · ${r.nombre.split(" ").slice(0,2).join(" ")}`:""]})]}),o.jsxs("span",{className:"doc-curso-cr",children:[e.creditos," cr."]})]})}function hf({docente:e,onClose:r,navigate:t}){var n;const a=((n=e.carrera)==null?void 0:n.color)??"#4f46e5";return o.jsx("div",{className:"doc-modal-backdrop",onClick:r,children:o.jsxs("div",{className:"doc-modal-box",onClick:i=>i.stopPropagation(),children:[o.jsx("button",{className:"doc-modal-close",onClick:r,children:"✕"}),o.jsxs("div",{className:"doc-modal-head",children:[o.jsx("div",{className:"doc-modal-avatar",style:{background:`linear-gradient(135deg,${a}cc,${a})`},children:e.iniciales}),o.jsxs("div",{style:{flex:1,minWidth:0},children:[o.jsx("div",{className:"doc-modal-name",children:e.nombre}),o.jsx("div",{className:"doc-modal-area",children:e.area}),o.jsxs("div",{className:"doc-modal-badges",children:[o.jsxs("span",{className:"d-badge d-badge-indigo",children:["⭐ ",e.rating," / 5.0"]}),e.cursosActivos.length>0&&o.jsxs("span",{className:"d-badge d-badge-green",children:["● Activo ",Ia]}),e.facultad&&o.jsxs("span",{className:"d-badge",style:{background:`${e.facultad.color}18`,color:e.facultad.color,border:`1px solid ${e.facultad.color}35`},children:[e.facultad.icono," ",e.facultad.nombre.replace("Facultad de ","").replace("Facultad ","")]})]})]})]}),o.jsx("div",{className:"doc-modal-section-label",children:"Estadísticas"}),o.jsxs("div",{className:"doc-modal-stats",children:[o.jsxs("div",{className:"doc-modal-stat",children:[o.jsx("div",{className:"doc-modal-stat-num",children:e.numApuntes}),o.jsx("div",{className:"doc-modal-stat-lbl",children:"Apuntes"})]}),o.jsxs("div",{className:"doc-modal-stat",children:[o.jsx("div",{className:"doc-modal-stat-num",children:e.numExamenes}),o.jsx("div",{className:"doc-modal-stat-lbl",children:"Exámenes"})]}),o.jsxs("div",{className:"doc-modal-stat",children:[o.jsx("div",{className:"doc-modal-stat-num",children:e.todosCursos.length}),o.jsx("div",{className:"doc-modal-stat-lbl",children:"Cursos"})]}),o.jsxs("div",{className:"doc-modal-stat",children:[o.jsx("div",{className:"doc-modal-stat-num",children:e.totalDescargas>999?`${(e.totalDescargas/1e3).toFixed(1)}k`:e.totalDescargas}),o.jsx("div",{className:"doc-modal-stat-lbl",children:"Descargas"})]})]}),e.todosCursos.length>0&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"doc-modal-section-label",style:{marginBottom:8},children:["Todos los cursos (",e.todosCursos.length,")"]}),o.jsxs("div",{className:"doc-modal-cursos",children:[e.cursosActivos.length>0&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{fontSize:"0.68rem",fontWeight:700,color:"#16a34a",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:4},children:["● Activos ",Ia]}),e.cursosActivos.map(i=>o.jsx(Mo,{curso:i},i.id))]}),e.cursosPasados.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("div",{style:{fontSize:"0.68rem",fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"0.08em",margin:"8px 0 4px"},children:"Anteriores"}),o.jsx("div",{style:{opacity:.7,display:"flex",flexDirection:"column",gap:5},children:e.cursosPasados.map(i=>o.jsx(Mo,{curso:i},i.id))})]})]})]}),o.jsxs("div",{className:"doc-modal-cta",children:[o.jsx("button",{className:"doc-modal-btn doc-modal-btn-primary",onClick:()=>{r(),t("apuntes",{docenteId:String(e.id)})},children:"📝 Ver apuntes"}),o.jsx("button",{className:"doc-modal-btn doc-modal-btn-secondary",onClick:()=>{r(),t("examenes",{docenteId:String(e.id)})},children:"📋 Ver exámenes"})]})]})})}function xf({navigate:e}){const{user:r}=Rt();return o.jsxs("div",{style:$.wrapper,children:[o.jsx("div",{style:$.bgGlow}),o.jsxs("div",{style:{position:"relative",zIndex:1,maxWidth:1100,margin:"0 auto",padding:"0 24px"},children:[o.jsxs("div",{style:$.pageHeader,children:[o.jsx("div",{style:$.headerTag,children:"💎 Planes y precios"}),o.jsxs("h1",{style:$.title,children:["Elige tu plan y",o.jsx("br",{}),o.jsx("span",{className:"gradient-text",children:"aprueba con ventaja"})]}),o.jsx("p",{style:$.subtitle,children:"Accede al banco completo de exámenes resueltos, apuntes verificados y todo el material de la Universidad Continental."})]}),o.jsx("div",{style:$.plansGrid,children:Dm.map(t=>o.jsx(vf,{plan:t,user:r,navigate:e},t.id))}),o.jsxs("div",{style:$.faq,children:[o.jsx("h2",{style:$.faqTitle,children:"Preguntas frecuentes"}),o.jsx("div",{style:$.faqGrid,children:[{q:"¿Puedo cancelar en cualquier momento?",a:"Sí, el plan mensual se puede cancelar cuando quieras sin penalidad."},{q:"¿Los materiales son de la UC?",a:"Todo el contenido es subido por estudiantes y docentes de la Universidad Continental de Huancayo."},{q:"¿Cómo gano puntos?",a:"Subiendo apuntes y exámenes verificados. Los puntos te dan desbloqueos especiales."},{q:"¿El plan Pro anual incluye todo?",a:"Sí, incluye todo lo de Premium más acceso anticipado, insignias y soporte prioritario."}].map(t=>o.jsxs("div",{style:$.faqItem,children:[o.jsx("div",{style:$.faqQ,children:t.q}),o.jsx("div",{style:$.faqA,children:t.a})]},t.q))})]}),o.jsxs("div",{style:$.guarantee,children:[o.jsx("span",{style:{fontSize:"1.8rem"},children:"🛡️"}),o.jsxs("div",{children:[o.jsx("div",{style:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1rem",marginBottom:4},children:"Garantía de satisfacción de 7 días"}),o.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"0.875rem"},children:"Si no estás satisfecho con tu plan Premium en los primeros 7 días, te devolvemos el dinero sin preguntas."})]})]})]})]})}function vf({plan:e,user:r,navigate:t}){const a=(r==null?void 0:r.plan)===e.id;return o.jsxs("div",{style:{...$.planCard,...e.popular?$.planCardPopular:{},borderColor:e.popular?`${e.color}55`:"var(--border)"},children:[e.popular&&o.jsx("div",{style:{...$.popularBadge,background:e.color},children:"⚡ Más popular"}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:16},children:[o.jsx("div",{style:{...$.planIcon,background:`${e.color}20`,border:`1px solid ${e.color}40`},children:e.id==="free"?"🆓":e.id==="premium"?"⭐":"🏆"}),o.jsxs("div",{children:[o.jsx("div",{style:$.planName,children:e.nombre}),o.jsx("div",{style:$.planDesc,children:e.descripcion})]})]}),o.jsx("div",{style:$.priceRow,children:e.precio===0?o.jsx("span",{style:$.priceFree,children:"Gratis"}):o.jsxs(o.Fragment,{children:[o.jsx("span",{style:$.currency,children:"S/."}),o.jsx("span",{style:{...$.priceNum,color:e.color},children:e.precio}),o.jsxs("span",{style:$.pricePer,children:["/",e.periodo]})]})}),e.id==="pro"&&o.jsx("div",{style:$.savingTag,children:"Ahorras S/. 20 vs mensual 🎉"}),o.jsx("div",{style:$.featureList,children:e.features.map(n=>o.jsxs("div",{style:$.featureItem,children:[o.jsx("span",{style:{...$.featureIcon,...n.incluido?$.featureIconOk:$.featureIconNo},children:n.incluido?"✓":"✗"}),o.jsx("span",{style:{...$.featureText,...n.incluido?{}:$.featureTextNo},children:n.texto})]},n.texto))}),o.jsx("button",{onClick:()=>t((e.precio===0,"login")),style:{...$.planBtn,background:e.popular?`linear-gradient(135deg, ${e.color}, #7c3aed)`:e.id==="pro"?`linear-gradient(135deg, ${e.color}, #ef4444)`:"var(--bg-elevated)",color:e.precio===0?"var(--text-secondary)":"#fff",border:e.precio===0?"1px solid var(--border)":"none"},children:a?"✓ Plan actual":e.precio===0?"Empezar gratis":`Obtener ${e.nombre}`})]})}const $={wrapper:{minHeight:"100vh",padding:"60px 0 80px",position:"relative",overflow:"hidden"},bgGlow:{position:"fixed",top:"-20%",left:"50%",transform:"translateX(-50%)",width:"80vw",height:"60vh",background:"radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)",pointerEvents:"none",zIndex:0},pageHeader:{textAlign:"center",marginBottom:56},headerTag:{display:"inline-flex",alignItems:"center",gap:6,padding:"5px 14px",borderRadius:100,fontSize:"0.8rem",fontWeight:600,background:"var(--indigo-dim)",border:"1px solid rgba(99,102,241,0.3)",color:"var(--indigo-light)",marginBottom:20},title:{fontFamily:"var(--font-display)",fontSize:"clamp(2rem, 5vw, 3rem)",fontWeight:800,lineHeight:1.15,letterSpacing:"-0.02em",marginBottom:16},subtitle:{color:"var(--text-secondary)",fontSize:"1rem",maxWidth:520,margin:"0 auto",lineHeight:1.7},plansGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:24,marginBottom:64,alignItems:"start"},planCard:{background:"var(--bg-card)",border:"1px solid",borderRadius:20,padding:28,position:"relative",display:"flex",flexDirection:"column",gap:0},planCardPopular:{background:"linear-gradient(180deg, rgba(99,102,241,0.06) 0%, var(--bg-card) 100%)",boxShadow:"0 0 40px rgba(99,102,241,0.12)"},popularBadge:{position:"absolute",top:-14,left:"50%",transform:"translateX(-50%)",borderRadius:100,padding:"4px 18px",fontSize:"0.78rem",fontWeight:700,color:"#fff",whiteSpace:"nowrap",boxShadow:"0 4px 12px rgba(0,0,0,0.3)"},planIcon:{width:44,height:44,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.3rem",flexShrink:0},planName:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"1.05rem"},planDesc:{color:"var(--text-muted)",fontSize:"0.78rem"},priceRow:{display:"flex",alignItems:"baseline",gap:4,margin:"20px 0 8px"},priceFree:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"2rem",color:"var(--text-secondary)"},currency:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1rem",color:"var(--text-secondary)"},priceNum:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"2.4rem",lineHeight:1},pricePer:{color:"var(--text-muted)",fontSize:"0.85rem"},savingTag:{display:"inline-block",background:"rgba(16,185,129,0.12)",border:"1px solid rgba(16,185,129,0.3)",borderRadius:100,padding:"3px 12px",fontSize:"0.75rem",fontWeight:600,color:"var(--emerald)",marginBottom:8},featureList:{display:"flex",flexDirection:"column",gap:10,margin:"20px 0 24px",flex:1},featureItem:{display:"flex",alignItems:"center",gap:10},featureIcon:{width:18,height:18,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",fontWeight:700,flexShrink:0},featureIconOk:{background:"var(--emerald-dim)",color:"var(--emerald)",border:"1px solid rgba(16,185,129,0.3)"},featureIconNo:{background:"var(--bg-elevated)",color:"var(--text-muted)",border:"1px solid var(--border)"},featureText:{fontSize:"0.875rem",color:"var(--text-secondary)"},featureTextNo:{color:"var(--text-muted)",textDecoration:"line-through"},planBtn:{borderRadius:12,padding:"12px",fontFamily:"var(--font-display)",fontWeight:700,fontSize:"0.9rem",cursor:"pointer",transition:"all 0.2s",textAlign:"center"},faq:{marginBottom:48},faqTitle:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"1.4rem",textAlign:"center",marginBottom:32},faqGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:16},faqItem:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:14,padding:20},faqQ:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"0.9rem",marginBottom:8,color:"var(--text-primary)"},faqA:{color:"var(--text-secondary)",fontSize:"0.85rem",lineHeight:1.6},guarantee:{background:"var(--emerald-dim)",border:"1px solid rgba(16,185,129,0.2)",borderRadius:16,padding:"24px 32px",display:"flex",alignItems:"center",gap:20}};function bf({navigate:e}){const{login:r,isLoading:t}=Rt(),[a,n]=y.useState(""),[i,l]=y.useState(""),s=()=>{if(!(!a||!i)){if(!a.endsWith("@continental.edu.pe")){alert("Usa tu correo institucional de la Universidad Continental.");return}r(a,i),setTimeout(()=>{e("home")},1e3)}};return o.jsxs("div",{style:q.wrapper,children:[o.jsx("div",{style:q.bgGlow}),o.jsxs("div",{style:q.card,children:[o.jsxs("div",{style:q.logo,children:[o.jsx("div",{style:q.logoIcon,children:"📚"}),o.jsxs("span",{style:q.logoText,children:["Apuntes",o.jsx("span",{style:{color:"var(--indigo-light)"},children:"UC"})]})]}),o.jsx("h2",{style:q.title,children:"Inicia sesión con tu cuenta UC"}),o.jsx("p",{style:q.subtitle,children:"Plataforma académica exclusiva para estudiantes de la Universidad Continental."}),o.jsxs("div",{style:q.form,children:[o.jsxs("div",{style:q.fieldGroup,children:[o.jsx("label",{style:q.label,children:"Correo institucional"}),o.jsx("input",{style:q.input,type:"email",placeholder:"tu.nombre@continental.edu.pe",value:a,onChange:c=>n(c.target.value)})]}),o.jsxs("div",{style:q.fieldGroup,children:[o.jsx("label",{style:q.label,children:"Contraseña"}),o.jsx("input",{style:q.input,type:"password",placeholder:"••••••••",value:i,onChange:c=>l(c.target.value)})]}),o.jsx("div",{style:q.forgotWrap,children:o.jsx("button",{style:q.forgotBtn,children:"¿Olvidaste tu contraseña?"})}),o.jsx("button",{style:{...q.submitBtn,...t?q.submitLoading:{}},onClick:s,disabled:t,children:t?"Ingresando...":"Ingresar a ApuntesUC →"})]}),o.jsxs("div",{style:q.divider,children:[o.jsx("span",{style:q.dividerLine}),o.jsx("span",{style:q.dividerText,children:"o continúa con"}),o.jsx("span",{style:q.dividerLine})]}),o.jsxs("button",{style:q.googleBtn,children:[o.jsx("span",{children:"🔵"}),"Google Institucional"]}),o.jsxs("div",{style:q.infoBox,children:[o.jsx("div",{style:q.infoTitle,children:"Acceso exclusivo UC"}),o.jsxs("div",{style:q.infoText,children:["Solo estudiantes con correo institucional",o.jsx("strong",{children:" @continental.edu.pe "}),"pueden acceder a la plataforma."]})]}),o.jsxs("div",{style:q.demoHint,children:["💡 ",o.jsx("strong",{children:"Demo:"})," Usa cualquier correo institucional y contraseña para explorar la plataforma."]})]})]})}const q={wrapper:{minHeight:"calc(100vh - 64px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"48px 24px",position:"relative",overflow:"hidden"},bgGlow:{position:"fixed",top:"10%",left:"50%",transform:"translateX(-50%)",width:"700px",height:"500px",background:"radial-gradient(ellipse, rgba(99,102,241,0.14) 0%, transparent 70%)",pointerEvents:"none"},card:{position:"relative",zIndex:1,width:"100%",maxWidth:460,background:"rgba(17,24,39,0.82)",backdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:28,padding:"40px",boxShadow:"0 20px 60px rgba(0,0,0,0.45)",animation:"fadeUp 0.4s ease"},logo:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:26},logoIcon:{width:44,height:44,borderRadius:14,background:"linear-gradient(135deg, var(--indigo), #7c3aed)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.15rem",boxShadow:"0 10px 24px rgba(99,102,241,0.35)"},logoText:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"1.3rem",color:"var(--text-primary)"},title:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"1.65rem",textAlign:"center",marginBottom:10,lineHeight:1.2},subtitle:{color:"var(--text-muted)",fontSize:"0.92rem",textAlign:"center",lineHeight:1.6,marginBottom:30},form:{display:"flex",flexDirection:"column",gap:18},fieldGroup:{display:"flex",flexDirection:"column",gap:8},label:{fontSize:"0.82rem",fontWeight:700,color:"var(--text-secondary)",letterSpacing:"0.02em"},input:{width:"100%",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:14,padding:"13px 15px",color:"var(--text-primary)",fontSize:"0.92rem",outline:"none",transition:"all 0.2s ease",fontFamily:"var(--font-body)"},forgotWrap:{display:"flex",justifyContent:"flex-end"},forgotBtn:{background:"none",border:"none",padding:0,cursor:"pointer",fontSize:"0.8rem",color:"var(--indigo-light)",fontWeight:600},submitBtn:{marginTop:6,background:"linear-gradient(135deg, var(--indigo), #7c3aed)",border:"none",borderRadius:16,padding:"14px",color:"#fff",fontSize:"0.95rem",fontWeight:800,fontFamily:"var(--font-display)",cursor:"pointer",transition:"all 0.2s ease",boxShadow:"0 10px 30px rgba(99,102,241,0.35)"},submitLoading:{opacity:.7,cursor:"not-allowed"},divider:{display:"flex",alignItems:"center",gap:12,margin:"28px 0 20px"},dividerLine:{flex:1,height:1,background:"var(--border)"},dividerText:{fontSize:"0.78rem",color:"var(--text-muted)",whiteSpace:"nowrap"},googleBtn:{width:"100%",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:14,padding:"13px",color:"var(--text-secondary)",fontSize:"0.9rem",fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:10,transition:"all 0.2s ease",marginBottom:24},infoBox:{background:"rgba(99,102,241,0.08)",border:"1px solid rgba(99,102,241,0.16)",borderRadius:16,padding:"16px 18px",marginBottom:18},infoTitle:{fontSize:"0.82rem",fontWeight:800,color:"var(--text-primary)",marginBottom:6},infoText:{fontSize:"0.8rem",lineHeight:1.6,color:"var(--text-secondary)"},demoHint:{background:"var(--bg-elevated)",border:"1px solid var(--border)",borderRadius:14,padding:"12px 14px",fontSize:"0.78rem",color:"var(--text-secondary)",lineHeight:1.6}};function yf(){const[e,r]=y.useState("home"),[t,a]=y.useState({}),[n,i]=y.useState(0),[l,s]=y.useState(typeof window<"u"?window.innerWidth>900:!0),c=y.useCallback((g,h={})=>{r(g),a(h),i(v=>v+1),typeof window<"u"&&window.innerWidth<=900&&s(!1),window.scrollTo({top:0,behavior:"smooth"})},[]),u=!["home","login","planes"].includes(e);return o.jsx(Bm,{children:o.jsxs("div",{className:"app-shell",children:[o.jsx(Um,{page:e,navigate:c,sidebarOpen:l,setSidebarOpen:s,showSidebar:u}),o.jsxs("div",{className:"app-body",children:[o.jsx(Gm,{page:e,navigate:c,open:l,onClose:()=>s(!1),show:u}),o.jsxs("main",{className:`app-main ${u&&l?"sidebar-open":""}`,children:[e==="home"&&o.jsx(Zm,{navigate:c},n),e==="cursos"&&o.jsx(ef,{navigate:c},n),e==="apuntes"&&o.jsx(lf,{navigate:c,initialFilter:t},n),e==="examenes"&&o.jsx(df,{navigate:c,initialFilter:t},n),e==="docentes"&&o.jsx(ff,{navigate:c},n),e==="planes"&&o.jsx(xf,{navigate:c},n),e==="login"&&o.jsx(bf,{navigate:c},n)]})]}),o.jsx(Qm,{navigate:c,sidebarOpen:l,showSidebar:u})]})})}/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ao(){return Ao=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ao.apply(this,arguments)}var Kr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Kr||(Kr={}));const Rs="popstate";function wf(e){e===void 0&&(e={});function r(n,i){let{pathname:l="/",search:s="",hash:c=""}=bl(n.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),ki("",{pathname:l,search:s,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(n,i){let l=n.document.querySelector("base"),s="";if(l&&l.getAttribute("href")){let c=n.location.href,u=c.indexOf("#");s=u===-1?c:c.slice(0,u)}return s+"#"+(typeof i=="string"?i:nu(i))}function a(n,i){jf(n.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return If(r,t,a,e)}function ou(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function jf(e,r){if(!e){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function kf(){return Math.random().toString(36).substr(2,8)}function Ls(e,r){return{usr:e.state,key:e.key,idx:r}}function ki(e,r,t,a){return t===void 0&&(t=null),Ao({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof r=="string"?bl(r):r,{state:t,key:r&&r.key||a||kf()})}function nu(e){let{pathname:r="/",search:t="",hash:a=""}=e;return t&&t!=="?"&&(r+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(r+=a.charAt(0)==="#"?a:"#"+a),r}function bl(e){let r={};if(e){let t=e.indexOf("#");t>=0&&(r.hash=e.substr(t),e=e.substr(0,t));let a=e.indexOf("?");a>=0&&(r.search=e.substr(a),e=e.substr(0,a)),e&&(r.pathname=e)}return r}function If(e,r,t,a){a===void 0&&(a={});let{window:n=document.defaultView,v5Compat:i=!1}=a,l=n.history,s=Kr.Pop,c=null,u=g();u==null&&(u=0,l.replaceState(Ao({},l.state,{idx:u}),""));function g(){return(l.state||{idx:null}).idx}function h(){s=Kr.Pop;let E=g(),m=E==null?null:E-u;u=E,c&&c({action:s,location:w.location,delta:m})}function v(E,m){s=Kr.Push;let d=ki(w.location,E,m);t&&t(d,E),u=g()+1;let p=Ls(d,u),b=w.createHref(d);try{l.pushState(p,"",b)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;n.location.assign(b)}i&&c&&c({action:s,location:w.location,delta:1})}function x(E,m){s=Kr.Replace;let d=ki(w.location,E,m);t&&t(d,E),u=g();let p=Ls(d,u),b=w.createHref(d);l.replaceState(p,"",b),i&&c&&c({action:s,location:w.location,delta:0})}function I(E){let m=n.location.origin!=="null"?n.location.origin:n.location.href,d=typeof E=="string"?E:nu(E);return d=d.replace(/ $/,"%20"),ou(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let w={get action(){return s},get location(){return e(n,l)},listen(E){if(c)throw new Error("A history only accepts one active listener");return n.addEventListener(Rs,h),c=E,()=>{n.removeEventListener(Rs,h),c=null}},createHref(E){return r(n,E)},createURL:I,encodeLocation(E){let m=I(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:v,replace:x,go(E){return l.go(E)}};return w}var Ds;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ds||(Ds={}));function Sf(e,r){if(r==="/")return e;if(!e.toLowerCase().startsWith(r.toLowerCase()))return null;let t=r.endsWith("/")?r.length-1:r.length,a=e.charAt(t);return a&&a!=="/"?null:e.slice(t)||"/"}const iu=["post","put","patch","delete"];new Set(iu);const Cf=["get",...iu];new Set(Cf);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ii(){return Ii=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ii.apply(this,arguments)}const Nf=y.createContext(null),lu=y.createContext(null);function Ef(){return y.useContext(lu)!=null}function zf(e,r){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function _f(e){let{basename:r="/",children:t=null,location:a,navigationType:n=Kr.Pop,navigator:i,static:l=!1,future:s}=e;Ef()&&ou(!1);let c=r.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:c,navigator:i,static:l,future:Ii({v7_relativeSplatPath:!1},s)}),[c,s,i,l]);typeof a=="string"&&(a=bl(a));let{pathname:g="/",search:h="",hash:v="",state:x=null,key:I="default"}=a,w=y.useMemo(()=>{let E=Sf(g,c);return E==null?null:{location:{pathname:E,search:h,hash:v,state:x,key:I},navigationType:n}},[c,g,h,v,x,I,n]);return w==null?null:y.createElement(Nf.Provider,{value:u},y.createElement(lu.Provider,{children:t,value:w}))}new Promise(()=>{});/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Pf="6";try{window.__reactRouterVersion=Pf}catch{}const Mf="startTransition",Fs=Cu[Mf];function Af(e){let{basename:r,children:t,future:a,window:n}=e,i=y.useRef();i.current==null&&(i.current=wf({window:n,v5Compat:!0}));let l=i.current,[s,c]=y.useState({action:l.action,location:l.location}),{v7_startTransition:u}=a||{},g=y.useCallback(h=>{u&&Fs?Fs(()=>c(h)):c(h)},[c,u]);return y.useLayoutEffect(()=>l.listen(g),[l,g]),y.useEffect(()=>zf(a),[a]),y.createElement(_f,{basename:r,children:t,location:s.location,navigationType:s.action,navigator:l,future:a})}var Bs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Bs||(Bs={}));var Os;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Os||(Os={}));_n.createRoot(document.getElementById("root")).render(o.jsx(Xs.StrictMode,{children:o.jsx(Af,{children:o.jsx(yf,{})})}));
