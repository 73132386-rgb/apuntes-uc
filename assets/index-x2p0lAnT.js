function Yd(e,r){for(var t=0;t<r.length;t++){const a=r[t];if(typeof a!="string"&&!Array.isArray(a)){for(const o in a)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(a,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>a[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function Xd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _s={exports:{}},Co={},Ps={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var va=Symbol.for("react.element"),Jd=Symbol.for("react.portal"),Zd=Symbol.for("react.fragment"),eu=Symbol.for("react.strict_mode"),ru=Symbol.for("react.profiler"),tu=Symbol.for("react.provider"),au=Symbol.for("react.context"),ou=Symbol.for("react.forward_ref"),nu=Symbol.for("react.suspense"),iu=Symbol.for("react.memo"),lu=Symbol.for("react.lazy"),dl=Symbol.iterator;function su(e){return e===null||typeof e!="object"?null:(e=dl&&e[dl]||e["@@iterator"],typeof e=="function"?e:null)}var zs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ms=Object.assign,As={};function Ct(e,r,t){this.props=e,this.context=r,this.refs=As,this.updater=t||zs}Ct.prototype.isReactComponent={};Ct.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};Ct.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ts(){}Ts.prototype=Ct.prototype;function fi(e,r,t){this.props=e,this.context=r,this.refs=As,this.updater=t||zs}var gi=fi.prototype=new Ts;gi.constructor=fi;Ms(gi,Ct.prototype);gi.isPureReactComponent=!0;var ul=Array.isArray,Fs=Object.prototype.hasOwnProperty,hi={current:null},Rs={key:!0,ref:!0,__self:!0,__source:!0};function Ls(e,r,t){var a,o={},i=null,l=null;if(r!=null)for(a in r.ref!==void 0&&(l=r.ref),r.key!==void 0&&(i=""+r.key),r)Fs.call(r,a)&&!Rs.hasOwnProperty(a)&&(o[a]=r[a]);var s=arguments.length-2;if(s===1)o.children=t;else if(1<s){for(var c=Array(s),p=0;p<s;p++)c[p]=arguments[p+2];o.children=c}if(e&&e.defaultProps)for(a in s=e.defaultProps,s)o[a]===void 0&&(o[a]=s[a]);return{$$typeof:va,type:e,key:i,ref:l,props:o,_owner:hi.current}}function cu(e,r){return{$$typeof:va,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function xi(e){return typeof e=="object"&&e!==null&&e.$$typeof===va}function du(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return r[t]})}var pl=/\/+/g;function qo(e,r){return typeof e=="object"&&e!==null&&e.key!=null?du(""+e.key):r.toString(36)}function $a(e,r,t,a,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case va:case Jd:l=!0}}if(l)return l=e,o=o(l),e=a===""?"."+qo(l,0):a,ul(o)?(t="",e!=null&&(t=e.replace(pl,"$&/")+"/"),$a(o,r,t,"",function(p){return p})):o!=null&&(xi(o)&&(o=cu(o,t+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(pl,"$&/")+"/")+e)),r.push(o)),1;if(l=0,a=a===""?".":a+":",ul(e))for(var s=0;s<e.length;s++){i=e[s];var c=a+qo(i,s);l+=$a(i,r,t,c,o)}else if(c=su(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=a+qo(i,s++),l+=$a(i,r,t,c,o);else if(i==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function Ia(e,r,t){if(e==null)return e;var a=[],o=0;return $a(e,a,"","",function(i){return r.call(t,i,o++)}),a}function uu(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var Ie={current:null},Ua={transition:null},pu={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:Ua,ReactCurrentOwner:hi};function Ds(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Ia,forEach:function(e,r,t){Ia(e,function(){r.apply(this,arguments)},t)},count:function(e){var r=0;return Ia(e,function(){r++}),r},toArray:function(e){return Ia(e,function(r){return r})||[]},only:function(e){if(!xi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Ct;B.Fragment=Zd;B.Profiler=ru;B.PureComponent=fi;B.StrictMode=eu;B.Suspense=nu;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pu;B.act=Ds;B.cloneElement=function(e,r,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Ms({},e.props),o=e.key,i=e.ref,l=e._owner;if(r!=null){if(r.ref!==void 0&&(i=r.ref,l=hi.current),r.key!==void 0&&(o=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in r)Fs.call(r,c)&&!Rs.hasOwnProperty(c)&&(a[c]=r[c]===void 0&&s!==void 0?s[c]:r[c])}var c=arguments.length-2;if(c===1)a.children=t;else if(1<c){s=Array(c);for(var p=0;p<c;p++)s[p]=arguments[p+2];a.children=s}return{$$typeof:va,type:e.type,key:o,ref:i,props:a,_owner:l}};B.createContext=function(e){return e={$$typeof:au,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tu,_context:e},e.Consumer=e};B.createElement=Ls;B.createFactory=function(e){var r=Ls.bind(null,e);return r.type=e,r};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:ou,render:e}};B.isValidElement=xi;B.lazy=function(e){return{$$typeof:lu,_payload:{_status:-1,_result:e},_init:uu}};B.memo=function(e,r){return{$$typeof:iu,type:e,compare:r===void 0?null:r}};B.startTransition=function(e){var r=Ua.transition;Ua.transition={};try{e()}finally{Ua.transition=r}};B.unstable_act=Ds;B.useCallback=function(e,r){return Ie.current.useCallback(e,r)};B.useContext=function(e){return Ie.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Ie.current.useDeferredValue(e)};B.useEffect=function(e,r){return Ie.current.useEffect(e,r)};B.useId=function(){return Ie.current.useId()};B.useImperativeHandle=function(e,r,t){return Ie.current.useImperativeHandle(e,r,t)};B.useInsertionEffect=function(e,r){return Ie.current.useInsertionEffect(e,r)};B.useLayoutEffect=function(e,r){return Ie.current.useLayoutEffect(e,r)};B.useMemo=function(e,r){return Ie.current.useMemo(e,r)};B.useReducer=function(e,r,t){return Ie.current.useReducer(e,r,t)};B.useRef=function(e){return Ie.current.useRef(e)};B.useState=function(e){return Ie.current.useState(e)};B.useSyncExternalStore=function(e,r,t){return Ie.current.useSyncExternalStore(e,r,t)};B.useTransition=function(){return Ie.current.useTransition()};B.version="18.3.1";Ps.exports=B;var S=Ps.exports;const mu=Xd(S),fu=Yd({__proto__:null,default:mu},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gu=S,hu=Symbol.for("react.element"),xu=Symbol.for("react.fragment"),vu=Object.prototype.hasOwnProperty,bu=gu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yu={key:!0,ref:!0,__self:!0,__source:!0};function Bs(e,r,t){var a,o={},i=null,l=null;t!==void 0&&(i=""+t),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(l=r.ref);for(a in r)vu.call(r,a)&&!yu.hasOwnProperty(a)&&(o[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps,r)o[a]===void 0&&(o[a]=r[a]);return{$$typeof:hu,type:e,key:i,ref:l,props:o,_owner:bu.current}}Co.Fragment=xu;Co.jsx=Bs;Co.jsxs=Bs;_s.exports=Co;var n=_s.exports,Os={exports:{}},Le={},$s={exports:{}},Us={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(E,F){var L=E.length;E.push(F);e:for(;0<L;){var V=L-1>>>1,y=E[V];if(0<o(y,F))E[V]=F,E[L]=y,L=V;else break e}}function t(E){return E.length===0?null:E[0]}function a(E){if(E.length===0)return null;var F=E[0],L=E.pop();if(L!==F){E[0]=L;e:for(var V=0,y=E.length,f=y>>>1;V<f;){var P=2*(V+1)-1,D=E[P],W=P+1,oe=E[W];if(0>o(D,L))W<y&&0>o(oe,D)?(E[V]=oe,E[W]=L,V=W):(E[V]=D,E[P]=L,V=P);else if(W<y&&0>o(oe,L))E[V]=oe,E[W]=L,V=W;else break e}}return F}function o(E,F){var L=E.sortIndex-F.sortIndex;return L!==0?L:E.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var c=[],p=[],g=1,b=null,x=3,v=!1,w=!1,k=!1,N=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(E){for(var F=t(p);F!==null;){if(F.callback===null)a(p);else if(F.startTime<=E)a(p),F.sortIndex=F.expirationTime,r(c,F);else break;F=t(p)}}function h(E){if(k=!1,m(E),!w)if(t(c)!==null)w=!0,we(C);else{var F=t(p);F!==null&&Me(h,F.startTime-E)}}function C(E,F){w=!1,k&&(k=!1,u(T),T=-1),v=!0;var L=x;try{for(m(F),b=t(c);b!==null&&(!(b.expirationTime>F)||E&&!te());){var V=b.callback;if(typeof V=="function"){b.callback=null,x=b.priorityLevel;var y=V(b.expirationTime<=F);F=e.unstable_now(),typeof y=="function"?b.callback=y:b===t(c)&&a(c),m(F)}else a(c);b=t(c)}if(b!==null)var f=!0;else{var P=t(p);P!==null&&Me(h,P.startTime-F),f=!1}return f}finally{b=null,x=L,v=!1}}var _=!1,z=null,T=-1,q=5,R=-1;function te(){return!(e.unstable_now()-R<q)}function fe(){if(z!==null){var E=e.unstable_now();R=E;var F=!0;try{F=z(!0,E)}finally{F?qe():(_=!1,z=null)}}else _=!1}var qe;if(typeof d=="function")qe=function(){d(fe)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,Ne=le.port2;le.port1.onmessage=fe,qe=function(){Ne.postMessage(null)}}else qe=function(){N(fe,0)};function we(E){z=E,_||(_=!0,qe())}function Me(E,F){T=N(function(){E(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,we(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(E){switch(x){case 1:case 2:case 3:var F=3;break;default:F=x}var L=x;x=F;try{return E()}finally{x=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,F){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var L=x;x=E;try{return F()}finally{x=L}},e.unstable_scheduleCallback=function(E,F,L){var V=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?V+L:V):L=V,E){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=L+y,E={id:g++,callback:F,priorityLevel:E,startTime:L,expirationTime:y,sortIndex:-1},L>V?(E.sortIndex=L,r(p,E),t(c)===null&&E===t(p)&&(k?(u(T),T=-1):k=!0,Me(h,L-V))):(E.sortIndex=y,r(c,E),w||v||(w=!0,we(C))),E},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(E){var F=x;return function(){var L=x;x=F;try{return E.apply(this,arguments)}finally{x=L}}}})(Us);$s.exports=Us;var wu=$s.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ku=S,Re=wu;function j(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hs=new Set,ea={};function Zr(e,r){yt(e,r),yt(e+"Capture",r)}function yt(e,r){for(ea[e]=r,e=0;e<r.length;e++)Hs.add(r[e])}var mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yn=Object.prototype.hasOwnProperty,ju=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ml={},fl={};function Iu(e){return yn.call(fl,e)?!0:yn.call(ml,e)?!1:ju.test(e)?fl[e]=!0:(ml[e]=!0,!1)}function Su(e,r,t,a){if(t!==null&&t.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Nu(e,r,t,a){if(r===null||typeof r>"u"||Su(e,r,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Se(e,r,t,a,o,i,l){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=r,this.sanitizeURL=i,this.removeEmptyString=l}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];me[r]=new Se(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var vi=/[\-:]([a-z])/g;function bi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(vi,bi);me[r]=new Se(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(vi,bi);me[r]=new Se(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(vi,bi);me[r]=new Se(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function yi(e,r,t,a){var o=me.hasOwnProperty(r)?me[r]:null;(o!==null?o.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Nu(r,t,o,a)&&(t=null),a||o===null?Iu(r)&&(t===null?e.removeAttribute(r):e.setAttribute(r,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(r=o.attributeName,a=o.attributeNamespace,t===null?e.removeAttribute(r):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,a?e.setAttributeNS(a,r,t):e.setAttribute(r,t))))}var xr=ku.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sa=Symbol.for("react.element"),tt=Symbol.for("react.portal"),at=Symbol.for("react.fragment"),wi=Symbol.for("react.strict_mode"),wn=Symbol.for("react.profiler"),Vs=Symbol.for("react.provider"),Gs=Symbol.for("react.context"),ki=Symbol.for("react.forward_ref"),kn=Symbol.for("react.suspense"),jn=Symbol.for("react.suspense_list"),ji=Symbol.for("react.memo"),br=Symbol.for("react.lazy"),qs=Symbol.for("react.offscreen"),gl=Symbol.iterator;function Mt(e){return e===null||typeof e!="object"?null:(e=gl&&e[gl]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Wo;function Ot(e){if(Wo===void 0)try{throw Error()}catch(t){var r=t.stack.trim().match(/\n( *(at )?)/);Wo=r&&r[1]||""}return`
`+Wo+e}var Ko=!1;function Qo(e,r){if(!e||Ko)return"";Ko=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(p){var a=p}Reflect.construct(e,[],r)}else{try{r.call()}catch(p){a=p}e.call(r.prototype)}else{try{throw Error()}catch(p){a=p}e()}}catch(p){if(p&&a&&typeof p.stack=="string"){for(var o=p.stack.split(`
`),i=a.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var c=`
`+o[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=s);break}}}finally{Ko=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Ot(e):""}function Cu(e){switch(e.tag){case 5:return Ot(e.type);case 16:return Ot("Lazy");case 13:return Ot("Suspense");case 19:return Ot("SuspenseList");case 0:case 2:case 15:return e=Qo(e.type,!1),e;case 11:return e=Qo(e.type.render,!1),e;case 1:return e=Qo(e.type,!0),e;default:return""}}function In(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case at:return"Fragment";case tt:return"Portal";case wn:return"Profiler";case wi:return"StrictMode";case kn:return"Suspense";case jn:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gs:return(e.displayName||"Context")+".Consumer";case Vs:return(e._context.displayName||"Context")+".Provider";case ki:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ji:return r=e.displayName||null,r!==null?r:In(e.type)||"Memo";case br:r=e._payload,e=e._init;try{return In(e(r))}catch{}}return null}function Eu(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return In(r);case 8:return r===wi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ar(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ws(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function _u(e){var r=Ws(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),a=""+e[r];if(!e.hasOwnProperty(r)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return o.call(this)},set:function(l){a=""+l,i.call(this,l)}}),Object.defineProperty(e,r,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(l){a=""+l},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Na(e){e._valueTracker||(e._valueTracker=_u(e))}function Ks(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var t=r.getValue(),a="";return e&&(a=Ws(e)?e.checked?"true":"false":e.value),e=a,e!==t?(r.setValue(e),!0):!1}function Za(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sn(e,r){var t=r.checked;return Z({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function hl(e,r){var t=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;t=Ar(r.value!=null?r.value:t),e._wrapperState={initialChecked:a,initialValue:t,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Qs(e,r){r=r.checked,r!=null&&yi(e,"checked",r,!1)}function Nn(e,r){Qs(e,r);var t=Ar(r.value),a=r.type;if(t!=null)a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Cn(e,r.type,t):r.hasOwnProperty("defaultValue")&&Cn(e,r.type,Ar(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function xl(e,r,t){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,t||r===e.value||(e.value=r),e.defaultValue=r}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Cn(e,r,t){(r!=="number"||Za(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var $t=Array.isArray;function ft(e,r,t,a){if(e=e.options,r){r={};for(var o=0;o<t.length;o++)r["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=r.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&a&&(e[t].defaultSelected=!0)}else{for(t=""+Ar(t),r=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}r!==null||e[o].disabled||(r=e[o])}r!==null&&(r.selected=!0)}}function En(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(j(91));return Z({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vl(e,r){var t=r.value;if(t==null){if(t=r.children,r=r.defaultValue,t!=null){if(r!=null)throw Error(j(92));if($t(t)){if(1<t.length)throw Error(j(93));t=t[0]}r=t}r==null&&(r=""),t=r}e._wrapperState={initialValue:Ar(t)}}function Ys(e,r){var t=Ar(r.value),a=Ar(r.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),r.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),a!=null&&(e.defaultValue=""+a)}function bl(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function Xs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _n(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?Xs(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ca,Js=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,t,a,o){MSApp.execUnsafeLocalFunction(function(){return e(r,t,a,o)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(Ca=Ca||document.createElement("div"),Ca.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ca.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function ra(e,r){if(r){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=r;return}}e.textContent=r}var Gt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pu=["Webkit","ms","Moz","O"];Object.keys(Gt).forEach(function(e){Pu.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),Gt[r]=Gt[e]})});function Zs(e,r,t){return r==null||typeof r=="boolean"||r===""?"":t||typeof r!="number"||r===0||Gt.hasOwnProperty(e)&&Gt[e]?(""+r).trim():r+"px"}function ec(e,r){e=e.style;for(var t in r)if(r.hasOwnProperty(t)){var a=t.indexOf("--")===0,o=Zs(t,r[t],a);t==="float"&&(t="cssFloat"),a?e.setProperty(t,o):e[t]=o}}var zu=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pn(e,r){if(r){if(zu[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(j(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(j(61))}if(r.style!=null&&typeof r.style!="object")throw Error(j(62))}}function zn(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mn=null;function Ii(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var An=null,gt=null,ht=null;function yl(e){if(e=wa(e)){if(typeof An!="function")throw Error(j(280));var r=e.stateNode;r&&(r=Mo(r),An(e.stateNode,e.type,r))}}function rc(e){gt?ht?ht.push(e):ht=[e]:gt=e}function tc(){if(gt){var e=gt,r=ht;if(ht=gt=null,yl(e),r)for(e=0;e<r.length;e++)yl(r[e])}}function ac(e,r){return e(r)}function oc(){}var Yo=!1;function nc(e,r,t){if(Yo)return e(r,t);Yo=!0;try{return ac(e,r,t)}finally{Yo=!1,(gt!==null||ht!==null)&&(oc(),tc())}}function ta(e,r){var t=e.stateNode;if(t===null)return null;var a=Mo(t);if(a===null)return null;t=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(j(231,r,typeof t));return t}var Tn=!1;if(mr)try{var At={};Object.defineProperty(At,"passive",{get:function(){Tn=!0}}),window.addEventListener("test",At,At),window.removeEventListener("test",At,At)}catch{Tn=!1}function Mu(e,r,t,a,o,i,l,s,c){var p=Array.prototype.slice.call(arguments,3);try{r.apply(t,p)}catch(g){this.onError(g)}}var qt=!1,eo=null,ro=!1,Fn=null,Au={onError:function(e){qt=!0,eo=e}};function Tu(e,r,t,a,o,i,l,s,c){qt=!1,eo=null,Mu.apply(Au,arguments)}function Fu(e,r,t,a,o,i,l,s,c){if(Tu.apply(this,arguments),qt){if(qt){var p=eo;qt=!1,eo=null}else throw Error(j(198));ro||(ro=!0,Fn=p)}}function et(e){var r=e,t=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(t=r.return),e=r.return;while(e)}return r.tag===3?t:null}function ic(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function wl(e){if(et(e)!==e)throw Error(j(188))}function Ru(e){var r=e.alternate;if(!r){if(r=et(e),r===null)throw Error(j(188));return r!==e?null:e}for(var t=e,a=r;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(a=o.return,a!==null){t=a;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return wl(o),e;if(i===a)return wl(o),r;i=i.sibling}throw Error(j(188))}if(t.return!==a.return)t=o,a=i;else{for(var l=!1,s=o.child;s;){if(s===t){l=!0,t=o,a=i;break}if(s===a){l=!0,a=o,t=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===t){l=!0,t=i,a=o;break}if(s===a){l=!0,a=i,t=o;break}s=s.sibling}if(!l)throw Error(j(189))}}if(t.alternate!==a)throw Error(j(190))}if(t.tag!==3)throw Error(j(188));return t.stateNode.current===t?e:r}function lc(e){return e=Ru(e),e!==null?sc(e):null}function sc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=sc(e);if(r!==null)return r;e=e.sibling}return null}var cc=Re.unstable_scheduleCallback,kl=Re.unstable_cancelCallback,Lu=Re.unstable_shouldYield,Du=Re.unstable_requestPaint,re=Re.unstable_now,Bu=Re.unstable_getCurrentPriorityLevel,Si=Re.unstable_ImmediatePriority,dc=Re.unstable_UserBlockingPriority,to=Re.unstable_NormalPriority,Ou=Re.unstable_LowPriority,uc=Re.unstable_IdlePriority,Eo=null,nr=null;function $u(e){if(nr&&typeof nr.onCommitFiberRoot=="function")try{nr.onCommitFiberRoot(Eo,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:Vu,Uu=Math.log,Hu=Math.LN2;function Vu(e){return e>>>=0,e===0?32:31-(Uu(e)/Hu|0)|0}var Ea=64,_a=4194304;function Ut(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ao(e,r){var t=e.pendingLanes;if(t===0)return 0;var a=0,o=e.suspendedLanes,i=e.pingedLanes,l=t&268435455;if(l!==0){var s=l&~o;s!==0?a=Ut(s):(i&=l,i!==0&&(a=Ut(i)))}else l=t&~o,l!==0?a=Ut(l):i!==0&&(a=Ut(i));if(a===0)return 0;if(r!==0&&r!==a&&!(r&o)&&(o=a&-a,i=r&-r,o>=i||o===16&&(i&4194240)!==0))return r;if(a&4&&(a|=t&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=a;0<r;)t=31-Xe(r),o=1<<t,a|=e[t],r&=~o;return a}function Gu(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qu(e,r){for(var t=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Xe(i),s=1<<l,c=o[l];c===-1?(!(s&t)||s&a)&&(o[l]=Gu(s,r)):c<=r&&(e.expiredLanes|=s),i&=~s}}function Rn(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pc(){var e=Ea;return Ea<<=1,!(Ea&4194240)&&(Ea=64),e}function Xo(e){for(var r=[],t=0;31>t;t++)r.push(e);return r}function ba(e,r,t){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Xe(r),e[r]=t}function Wu(e,r){var t=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Xe(t),i=1<<o;r[o]=0,a[o]=-1,e[o]=-1,t&=~i}}function Ni(e,r){var t=e.entangledLanes|=r;for(e=e.entanglements;t;){var a=31-Xe(t),o=1<<a;o&r|e[a]&r&&(e[a]|=r),t&=~o}}var U=0;function mc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fc,Ci,gc,hc,xc,Ln=!1,Pa=[],Sr=null,Nr=null,Cr=null,aa=new Map,oa=new Map,wr=[],Ku="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jl(e,r){switch(e){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":aa.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(r.pointerId)}}function Tt(e,r,t,a,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:r,domEventName:t,eventSystemFlags:a,nativeEvent:i,targetContainers:[o]},r!==null&&(r=wa(r),r!==null&&Ci(r)),e):(e.eventSystemFlags|=a,r=e.targetContainers,o!==null&&r.indexOf(o)===-1&&r.push(o),e)}function Qu(e,r,t,a,o){switch(r){case"focusin":return Sr=Tt(Sr,e,r,t,a,o),!0;case"dragenter":return Nr=Tt(Nr,e,r,t,a,o),!0;case"mouseover":return Cr=Tt(Cr,e,r,t,a,o),!0;case"pointerover":var i=o.pointerId;return aa.set(i,Tt(aa.get(i)||null,e,r,t,a,o)),!0;case"gotpointercapture":return i=o.pointerId,oa.set(i,Tt(oa.get(i)||null,e,r,t,a,o)),!0}return!1}function vc(e){var r=$r(e.target);if(r!==null){var t=et(r);if(t!==null){if(r=t.tag,r===13){if(r=ic(t),r!==null){e.blockedOn=r,xc(e.priority,function(){gc(t)});return}}else if(r===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ha(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var t=Dn(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);Mn=a,t.target.dispatchEvent(a),Mn=null}else return r=wa(t),r!==null&&Ci(r),e.blockedOn=t,!1;r.shift()}return!0}function Il(e,r,t){Ha(e)&&t.delete(r)}function Yu(){Ln=!1,Sr!==null&&Ha(Sr)&&(Sr=null),Nr!==null&&Ha(Nr)&&(Nr=null),Cr!==null&&Ha(Cr)&&(Cr=null),aa.forEach(Il),oa.forEach(Il)}function Ft(e,r){e.blockedOn===r&&(e.blockedOn=null,Ln||(Ln=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,Yu)))}function na(e){function r(o){return Ft(o,e)}if(0<Pa.length){Ft(Pa[0],e);for(var t=1;t<Pa.length;t++){var a=Pa[t];a.blockedOn===e&&(a.blockedOn=null)}}for(Sr!==null&&Ft(Sr,e),Nr!==null&&Ft(Nr,e),Cr!==null&&Ft(Cr,e),aa.forEach(r),oa.forEach(r),t=0;t<wr.length;t++)a=wr[t],a.blockedOn===e&&(a.blockedOn=null);for(;0<wr.length&&(t=wr[0],t.blockedOn===null);)vc(t),t.blockedOn===null&&wr.shift()}var xt=xr.ReactCurrentBatchConfig,oo=!0;function Xu(e,r,t,a){var o=U,i=xt.transition;xt.transition=null;try{U=1,Ei(e,r,t,a)}finally{U=o,xt.transition=i}}function Ju(e,r,t,a){var o=U,i=xt.transition;xt.transition=null;try{U=4,Ei(e,r,t,a)}finally{U=o,xt.transition=i}}function Ei(e,r,t,a){if(oo){var o=Dn(e,r,t,a);if(o===null)sn(e,r,a,no,t),jl(e,a);else if(Qu(o,e,r,t,a))a.stopPropagation();else if(jl(e,a),r&4&&-1<Ku.indexOf(e)){for(;o!==null;){var i=wa(o);if(i!==null&&fc(i),i=Dn(e,r,t,a),i===null&&sn(e,r,a,no,t),i===o)break;o=i}o!==null&&a.stopPropagation()}else sn(e,r,a,null,t)}}var no=null;function Dn(e,r,t,a){if(no=null,e=Ii(a),e=$r(e),e!==null)if(r=et(e),r===null)e=null;else if(t=r.tag,t===13){if(e=ic(r),e!==null)return e;e=null}else if(t===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return no=e,null}function bc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bu()){case Si:return 1;case dc:return 4;case to:case Ou:return 16;case uc:return 536870912;default:return 16}default:return 16}}var jr=null,_i=null,Va=null;function yc(){if(Va)return Va;var e,r=_i,t=r.length,a,o="value"in jr?jr.value:jr.textContent,i=o.length;for(e=0;e<t&&r[e]===o[e];e++);var l=t-e;for(a=1;a<=l&&r[t-a]===o[i-a];a++);return Va=o.slice(e,1<a?1-a:void 0)}function Ga(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function za(){return!0}function Sl(){return!1}function De(e){function r(t,a,o,i,l){this._reactName=t,this._targetInst=o,this.type=a,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?za:Sl,this.isPropagationStopped=Sl,this}return Z(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=za)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=za)},persist:function(){},isPersistent:za}),r}var Et={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pi=De(Et),ya=Z({},Et,{view:0,detail:0}),Zu=De(ya),Jo,Zo,Rt,_o=Z({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rt&&(Rt&&e.type==="mousemove"?(Jo=e.screenX-Rt.screenX,Zo=e.screenY-Rt.screenY):Zo=Jo=0,Rt=e),Jo)},movementY:function(e){return"movementY"in e?e.movementY:Zo}}),Nl=De(_o),ep=Z({},_o,{dataTransfer:0}),rp=De(ep),tp=Z({},ya,{relatedTarget:0}),en=De(tp),ap=Z({},Et,{animationName:0,elapsedTime:0,pseudoElement:0}),op=De(ap),np=Z({},Et,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ip=De(np),lp=Z({},Et,{data:0}),Cl=De(lp),sp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function up(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=dp[e])?!!r[e]:!1}function zi(){return up}var pp=Z({},ya,{key:function(e){if(e.key){var r=sp[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Ga(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zi,charCode:function(e){return e.type==="keypress"?Ga(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ga(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mp=De(pp),fp=Z({},_o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),El=De(fp),gp=Z({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zi}),hp=De(gp),xp=Z({},Et,{propertyName:0,elapsedTime:0,pseudoElement:0}),vp=De(xp),bp=Z({},_o,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yp=De(bp),wp=[9,13,27,32],Mi=mr&&"CompositionEvent"in window,Wt=null;mr&&"documentMode"in document&&(Wt=document.documentMode);var kp=mr&&"TextEvent"in window&&!Wt,wc=mr&&(!Mi||Wt&&8<Wt&&11>=Wt),_l=" ",Pl=!1;function kc(e,r){switch(e){case"keyup":return wp.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ot=!1;function jp(e,r){switch(e){case"compositionend":return jc(r);case"keypress":return r.which!==32?null:(Pl=!0,_l);case"textInput":return e=r.data,e===_l&&Pl?null:e;default:return null}}function Ip(e,r){if(ot)return e==="compositionend"||!Mi&&kc(e,r)?(e=yc(),Va=_i=jr=null,ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return wc&&r.locale!=="ko"?null:r.data;default:return null}}var Sp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Sp[e.type]:r==="textarea"}function Ic(e,r,t,a){rc(a),r=io(r,"onChange"),0<r.length&&(t=new Pi("onChange","change",null,t,a),e.push({event:t,listeners:r}))}var Kt=null,ia=null;function Np(e){Fc(e,0)}function Po(e){var r=lt(e);if(Ks(r))return e}function Cp(e,r){if(e==="change")return r}var Sc=!1;if(mr){var rn;if(mr){var tn="oninput"in document;if(!tn){var Ml=document.createElement("div");Ml.setAttribute("oninput","return;"),tn=typeof Ml.oninput=="function"}rn=tn}else rn=!1;Sc=rn&&(!document.documentMode||9<document.documentMode)}function Al(){Kt&&(Kt.detachEvent("onpropertychange",Nc),ia=Kt=null)}function Nc(e){if(e.propertyName==="value"&&Po(ia)){var r=[];Ic(r,ia,e,Ii(e)),nc(Np,r)}}function Ep(e,r,t){e==="focusin"?(Al(),Kt=r,ia=t,Kt.attachEvent("onpropertychange",Nc)):e==="focusout"&&Al()}function _p(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Po(ia)}function Pp(e,r){if(e==="click")return Po(r)}function zp(e,r){if(e==="input"||e==="change")return Po(r)}function Mp(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var er=typeof Object.is=="function"?Object.is:Mp;function la(e,r){if(er(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var t=Object.keys(e),a=Object.keys(r);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var o=t[a];if(!yn.call(r,o)||!er(e[o],r[o]))return!1}return!0}function Tl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fl(e,r){var t=Tl(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=r&&a>=r)return{node:t,offset:r-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Tl(t)}}function Cc(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Cc(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Ec(){for(var e=window,r=Za();r instanceof e.HTMLIFrameElement;){try{var t=typeof r.contentWindow.location.href=="string"}catch{t=!1}if(t)e=r.contentWindow;else break;r=Za(e.document)}return r}function Ai(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Ap(e){var r=Ec(),t=e.focusedElem,a=e.selectionRange;if(r!==t&&t&&t.ownerDocument&&Cc(t.ownerDocument.documentElement,t)){if(a!==null&&Ai(t)){if(r=a.start,e=a.end,e===void 0&&(e=r),"selectionStart"in t)t.selectionStart=r,t.selectionEnd=Math.min(e,t.value.length);else if(e=(r=t.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(a.start,o);a=a.end===void 0?i:Math.min(a.end,o),!e.extend&&i>a&&(o=a,a=i,i=o),o=Fl(t,i);var l=Fl(t,a);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(r=r.createRange(),r.setStart(o.node,o.offset),e.removeAllRanges(),i>a?(e.addRange(r),e.extend(l.node,l.offset)):(r.setEnd(l.node,l.offset),e.addRange(r)))}}for(r=[],e=t;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<r.length;t++)e=r[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tp=mr&&"documentMode"in document&&11>=document.documentMode,nt=null,Bn=null,Qt=null,On=!1;function Rl(e,r,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;On||nt==null||nt!==Za(a)||(a=nt,"selectionStart"in a&&Ai(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Qt&&la(Qt,a)||(Qt=a,a=io(Bn,"onSelect"),0<a.length&&(r=new Pi("onSelect","select",null,r,t),e.push({event:r,listeners:a}),r.target=nt)))}function Ma(e,r){var t={};return t[e.toLowerCase()]=r.toLowerCase(),t["Webkit"+e]="webkit"+r,t["Moz"+e]="moz"+r,t}var it={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},an={},_c={};mr&&(_c=document.createElement("div").style,"AnimationEvent"in window||(delete it.animationend.animation,delete it.animationiteration.animation,delete it.animationstart.animation),"TransitionEvent"in window||delete it.transitionend.transition);function zo(e){if(an[e])return an[e];if(!it[e])return e;var r=it[e],t;for(t in r)if(r.hasOwnProperty(t)&&t in _c)return an[e]=r[t];return e}var Pc=zo("animationend"),zc=zo("animationiteration"),Mc=zo("animationstart"),Ac=zo("transitionend"),Tc=new Map,Ll="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(e,r){Tc.set(e,r),Zr(r,[e])}for(var on=0;on<Ll.length;on++){var nn=Ll[on],Fp=nn.toLowerCase(),Rp=nn[0].toUpperCase()+nn.slice(1);Fr(Fp,"on"+Rp)}Fr(Pc,"onAnimationEnd");Fr(zc,"onAnimationIteration");Fr(Mc,"onAnimationStart");Fr("dblclick","onDoubleClick");Fr("focusin","onFocus");Fr("focusout","onBlur");Fr(Ac,"onTransitionEnd");yt("onMouseEnter",["mouseout","mouseover"]);yt("onMouseLeave",["mouseout","mouseover"]);yt("onPointerEnter",["pointerout","pointerover"]);yt("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ht="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ht));function Dl(e,r,t){var a=e.type||"unknown-event";e.currentTarget=t,Fu(a,r,void 0,e),e.currentTarget=null}function Fc(e,r){r=(r&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],o=a.event;a=a.listeners;e:{var i=void 0;if(r)for(var l=a.length-1;0<=l;l--){var s=a[l],c=s.instance,p=s.currentTarget;if(s=s.listener,c!==i&&o.isPropagationStopped())break e;Dl(o,s,p),i=c}else for(l=0;l<a.length;l++){if(s=a[l],c=s.instance,p=s.currentTarget,s=s.listener,c!==i&&o.isPropagationStopped())break e;Dl(o,s,p),i=c}}}if(ro)throw e=Fn,ro=!1,Fn=null,e}function K(e,r){var t=r[Gn];t===void 0&&(t=r[Gn]=new Set);var a=e+"__bubble";t.has(a)||(Rc(r,e,2,!1),t.add(a))}function ln(e,r,t){var a=0;r&&(a|=4),Rc(t,e,a,r)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function sa(e){if(!e[Aa]){e[Aa]=!0,Hs.forEach(function(t){t!=="selectionchange"&&(Lp.has(t)||ln(t,!1,e),ln(t,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Aa]||(r[Aa]=!0,ln("selectionchange",!1,r))}}function Rc(e,r,t,a){switch(bc(r)){case 1:var o=Xu;break;case 4:o=Ju;break;default:o=Ei}t=o.bind(null,r,t,e),o=void 0,!Tn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(r,t,{capture:!0,passive:o}):e.addEventListener(r,t,!0):o!==void 0?e.addEventListener(r,t,{passive:o}):e.addEventListener(r,t,!1)}function sn(e,r,t,a,o){var i=a;if(!(r&1)&&!(r&2)&&a!==null)e:for(;;){if(a===null)return;var l=a.tag;if(l===3||l===4){var s=a.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=a.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;l=l.return}for(;s!==null;){if(l=$r(s),l===null)return;if(c=l.tag,c===5||c===6){a=i=l;continue e}s=s.parentNode}}a=a.return}nc(function(){var p=i,g=Ii(t),b=[];e:{var x=Tc.get(e);if(x!==void 0){var v=Pi,w=e;switch(e){case"keypress":if(Ga(t)===0)break e;case"keydown":case"keyup":v=mp;break;case"focusin":w="focus",v=en;break;case"focusout":w="blur",v=en;break;case"beforeblur":case"afterblur":v=en;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Nl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=rp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=hp;break;case Pc:case zc:case Mc:v=op;break;case Ac:v=vp;break;case"scroll":v=Zu;break;case"wheel":v=yp;break;case"copy":case"cut":case"paste":v=ip;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=El}var k=(r&4)!==0,N=!k&&e==="scroll",u=k?x!==null?x+"Capture":null:x;k=[];for(var d=p,m;d!==null;){m=d;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,u!==null&&(h=ta(d,u),h!=null&&k.push(ca(d,h,m)))),N)break;d=d.return}0<k.length&&(x=new v(x,w,null,t,g),b.push({event:x,listeners:k}))}}if(!(r&7)){e:{if(x=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",x&&t!==Mn&&(w=t.relatedTarget||t.fromElement)&&($r(w)||w[fr]))break e;if((v||x)&&(x=g.window===g?g:(x=g.ownerDocument)?x.defaultView||x.parentWindow:window,v?(w=t.relatedTarget||t.toElement,v=p,w=w?$r(w):null,w!==null&&(N=et(w),w!==N||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=p),v!==w)){if(k=Nl,h="onMouseLeave",u="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=El,h="onPointerLeave",u="onPointerEnter",d="pointer"),N=v==null?x:lt(v),m=w==null?x:lt(w),x=new k(h,d+"leave",v,t,g),x.target=N,x.relatedTarget=m,h=null,$r(g)===p&&(k=new k(u,d+"enter",w,t,g),k.target=m,k.relatedTarget=N,h=k),N=h,v&&w)r:{for(k=v,u=w,d=0,m=k;m;m=rt(m))d++;for(m=0,h=u;h;h=rt(h))m++;for(;0<d-m;)k=rt(k),d--;for(;0<m-d;)u=rt(u),m--;for(;d--;){if(k===u||u!==null&&k===u.alternate)break r;k=rt(k),u=rt(u)}k=null}else k=null;v!==null&&Bl(b,x,v,k,!1),w!==null&&N!==null&&Bl(b,N,w,k,!0)}}e:{if(x=p?lt(p):window,v=x.nodeName&&x.nodeName.toLowerCase(),v==="select"||v==="input"&&x.type==="file")var C=Cp;else if(zl(x))if(Sc)C=zp;else{C=_p;var _=Ep}else(v=x.nodeName)&&v.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(C=Pp);if(C&&(C=C(e,p))){Ic(b,C,t,g);break e}_&&_(e,x,p),e==="focusout"&&(_=x._wrapperState)&&_.controlled&&x.type==="number"&&Cn(x,"number",x.value)}switch(_=p?lt(p):window,e){case"focusin":(zl(_)||_.contentEditable==="true")&&(nt=_,Bn=p,Qt=null);break;case"focusout":Qt=Bn=nt=null;break;case"mousedown":On=!0;break;case"contextmenu":case"mouseup":case"dragend":On=!1,Rl(b,t,g);break;case"selectionchange":if(Tp)break;case"keydown":case"keyup":Rl(b,t,g)}var z;if(Mi)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else ot?kc(e,t)&&(T="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(T="onCompositionStart");T&&(wc&&t.locale!=="ko"&&(ot||T!=="onCompositionStart"?T==="onCompositionEnd"&&ot&&(z=yc()):(jr=g,_i="value"in jr?jr.value:jr.textContent,ot=!0)),_=io(p,T),0<_.length&&(T=new Cl(T,e,null,t,g),b.push({event:T,listeners:_}),z?T.data=z:(z=jc(t),z!==null&&(T.data=z)))),(z=kp?jp(e,t):Ip(e,t))&&(p=io(p,"onBeforeInput"),0<p.length&&(g=new Cl("onBeforeInput","beforeinput",null,t,g),b.push({event:g,listeners:p}),g.data=z))}Fc(b,r)})}function ca(e,r,t){return{instance:e,listener:r,currentTarget:t}}function io(e,r){for(var t=r+"Capture",a=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ta(e,t),i!=null&&a.unshift(ca(e,i,o)),i=ta(e,r),i!=null&&a.push(ca(e,i,o))),e=e.return}return a}function rt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bl(e,r,t,a,o){for(var i=r._reactName,l=[];t!==null&&t!==a;){var s=t,c=s.alternate,p=s.stateNode;if(c!==null&&c===a)break;s.tag===5&&p!==null&&(s=p,o?(c=ta(t,i),c!=null&&l.unshift(ca(t,c,s))):o||(c=ta(t,i),c!=null&&l.push(ca(t,c,s)))),t=t.return}l.length!==0&&e.push({event:r,listeners:l})}var Dp=/\r\n?/g,Bp=/\u0000|\uFFFD/g;function Ol(e){return(typeof e=="string"?e:""+e).replace(Dp,`
`).replace(Bp,"")}function Ta(e,r,t){if(r=Ol(r),Ol(e)!==r&&t)throw Error(j(425))}function lo(){}var $n=null,Un=null;function Hn(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Vn=typeof setTimeout=="function"?setTimeout:void 0,Op=typeof clearTimeout=="function"?clearTimeout:void 0,$l=typeof Promise=="function"?Promise:void 0,$p=typeof queueMicrotask=="function"?queueMicrotask:typeof $l<"u"?function(e){return $l.resolve(null).then(e).catch(Up)}:Vn;function Up(e){setTimeout(function(){throw e})}function cn(e,r){var t=r,a=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(a===0){e.removeChild(o),na(r);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=o}while(t);na(r)}function Er(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Ul(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(r===0)return e;r--}else t==="/$"&&r++}e=e.previousSibling}return null}var _t=Math.random().toString(36).slice(2),or="__reactFiber$"+_t,da="__reactProps$"+_t,fr="__reactContainer$"+_t,Gn="__reactEvents$"+_t,Hp="__reactListeners$"+_t,Vp="__reactHandles$"+_t;function $r(e){var r=e[or];if(r)return r;for(var t=e.parentNode;t;){if(r=t[fr]||t[or]){if(t=r.alternate,r.child!==null||t!==null&&t.child!==null)for(e=Ul(e);e!==null;){if(t=e[or])return t;e=Ul(e)}return r}e=t,t=e.parentNode}return null}function wa(e){return e=e[or]||e[fr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Mo(e){return e[da]||null}var qn=[],st=-1;function Rr(e){return{current:e}}function Q(e){0>st||(e.current=qn[st],qn[st]=null,st--)}function G(e,r){st++,qn[st]=e.current,e.current=r}var Tr={},ye=Rr(Tr),_e=Rr(!1),Kr=Tr;function wt(e,r){var t=e.type.contextTypes;if(!t)return Tr;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=r[i];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=o),o}function Pe(e){return e=e.childContextTypes,e!=null}function so(){Q(_e),Q(ye)}function Hl(e,r,t){if(ye.current!==Tr)throw Error(j(168));G(ye,r),G(_e,t)}function Lc(e,r,t){var a=e.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var o in a)if(!(o in r))throw Error(j(108,Eu(e)||"Unknown",o));return Z({},t,a)}function co(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tr,Kr=ye.current,G(ye,e),G(_e,_e.current),!0}function Vl(e,r,t){var a=e.stateNode;if(!a)throw Error(j(169));t?(e=Lc(e,r,Kr),a.__reactInternalMemoizedMergedChildContext=e,Q(_e),Q(ye),G(ye,e)):Q(_e),G(_e,t)}var sr=null,Ao=!1,dn=!1;function Dc(e){sr===null?sr=[e]:sr.push(e)}function Gp(e){Ao=!0,Dc(e)}function Lr(){if(!dn&&sr!==null){dn=!0;var e=0,r=U;try{var t=sr;for(U=1;e<t.length;e++){var a=t[e];do a=a(!0);while(a!==null)}sr=null,Ao=!1}catch(o){throw sr!==null&&(sr=sr.slice(e+1)),cc(Si,Lr),o}finally{U=r,dn=!1}}return null}var ct=[],dt=0,uo=null,po=0,Oe=[],$e=0,Qr=null,dr=1,ur="";function Br(e,r){ct[dt++]=po,ct[dt++]=uo,uo=e,po=r}function Bc(e,r,t){Oe[$e++]=dr,Oe[$e++]=ur,Oe[$e++]=Qr,Qr=e;var a=dr;e=ur;var o=32-Xe(a)-1;a&=~(1<<o),t+=1;var i=32-Xe(r)+o;if(30<i){var l=o-o%5;i=(a&(1<<l)-1).toString(32),a>>=l,o-=l,dr=1<<32-Xe(r)+o|t<<o|a,ur=i+e}else dr=1<<i|t<<o|a,ur=e}function Ti(e){e.return!==null&&(Br(e,1),Bc(e,1,0))}function Fi(e){for(;e===uo;)uo=ct[--dt],ct[dt]=null,po=ct[--dt],ct[dt]=null;for(;e===Qr;)Qr=Oe[--$e],Oe[$e]=null,ur=Oe[--$e],Oe[$e]=null,dr=Oe[--$e],Oe[$e]=null}var Fe=null,Te=null,Y=!1,Ye=null;function Oc(e,r){var t=Ue(5,null,null,0);t.elementType="DELETED",t.stateNode=r,t.return=e,r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)}function Gl(e,r){switch(e.tag){case 5:var t=e.type;return r=r.nodeType!==1||t.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,Fe=e,Te=Er(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,Fe=e,Te=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(t=Qr!==null?{id:dr,overflow:ur}:null,e.memoizedState={dehydrated:r,treeContext:t,retryLane:1073741824},t=Ue(18,null,null,0),t.stateNode=r,t.return=e,e.child=t,Fe=e,Te=null,!0):!1;default:return!1}}function Wn(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Kn(e){if(Y){var r=Te;if(r){var t=r;if(!Gl(e,r)){if(Wn(e))throw Error(j(418));r=Er(t.nextSibling);var a=Fe;r&&Gl(e,r)?Oc(a,t):(e.flags=e.flags&-4097|2,Y=!1,Fe=e)}}else{if(Wn(e))throw Error(j(418));e.flags=e.flags&-4097|2,Y=!1,Fe=e}}}function ql(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function Fa(e){if(e!==Fe)return!1;if(!Y)return ql(e),Y=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Hn(e.type,e.memoizedProps)),r&&(r=Te)){if(Wn(e))throw $c(),Error(j(418));for(;r;)Oc(e,r),r=Er(r.nextSibling)}if(ql(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(r===0){Te=Er(e.nextSibling);break e}r--}else t!=="$"&&t!=="$!"&&t!=="$?"||r++}e=e.nextSibling}Te=null}}else Te=Fe?Er(e.stateNode.nextSibling):null;return!0}function $c(){for(var e=Te;e;)e=Er(e.nextSibling)}function kt(){Te=Fe=null,Y=!1}function Ri(e){Ye===null?Ye=[e]:Ye.push(e)}var qp=xr.ReactCurrentBatchConfig;function Lt(e,r,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(j(309));var a=t.stateNode}if(!a)throw Error(j(147,e));var o=a,i=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===i?r.ref:(r=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},r._stringRef=i,r)}if(typeof e!="string")throw Error(j(284));if(!t._owner)throw Error(j(290,e))}return e}function Ra(e,r){throw e=Object.prototype.toString.call(r),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Wl(e){var r=e._init;return r(e._payload)}function Uc(e){function r(u,d){if(e){var m=u.deletions;m===null?(u.deletions=[d],u.flags|=16):m.push(d)}}function t(u,d){if(!e)return null;for(;d!==null;)r(u,d),d=d.sibling;return null}function a(u,d){for(u=new Map;d!==null;)d.key!==null?u.set(d.key,d):u.set(d.index,d),d=d.sibling;return u}function o(u,d){return u=Mr(u,d),u.index=0,u.sibling=null,u}function i(u,d,m){return u.index=m,e?(m=u.alternate,m!==null?(m=m.index,m<d?(u.flags|=2,d):m):(u.flags|=2,d)):(u.flags|=1048576,d)}function l(u){return e&&u.alternate===null&&(u.flags|=2),u}function s(u,d,m,h){return d===null||d.tag!==6?(d=xn(m,u.mode,h),d.return=u,d):(d=o(d,m),d.return=u,d)}function c(u,d,m,h){var C=m.type;return C===at?g(u,d,m.props.children,h,m.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===br&&Wl(C)===d.type)?(h=o(d,m.props),h.ref=Lt(u,d,m),h.return=u,h):(h=Ja(m.type,m.key,m.props,null,u.mode,h),h.ref=Lt(u,d,m),h.return=u,h)}function p(u,d,m,h){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=vn(m,u.mode,h),d.return=u,d):(d=o(d,m.children||[]),d.return=u,d)}function g(u,d,m,h,C){return d===null||d.tag!==7?(d=qr(m,u.mode,h,C),d.return=u,d):(d=o(d,m),d.return=u,d)}function b(u,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=xn(""+d,u.mode,m),d.return=u,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Sa:return m=Ja(d.type,d.key,d.props,null,u.mode,m),m.ref=Lt(u,null,d),m.return=u,m;case tt:return d=vn(d,u.mode,m),d.return=u,d;case br:var h=d._init;return b(u,h(d._payload),m)}if($t(d)||Mt(d))return d=qr(d,u.mode,m,null),d.return=u,d;Ra(u,d)}return null}function x(u,d,m,h){var C=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:s(u,d,""+m,h);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Sa:return m.key===C?c(u,d,m,h):null;case tt:return m.key===C?p(u,d,m,h):null;case br:return C=m._init,x(u,d,C(m._payload),h)}if($t(m)||Mt(m))return C!==null?null:g(u,d,m,h,null);Ra(u,m)}return null}function v(u,d,m,h,C){if(typeof h=="string"&&h!==""||typeof h=="number")return u=u.get(m)||null,s(d,u,""+h,C);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Sa:return u=u.get(h.key===null?m:h.key)||null,c(d,u,h,C);case tt:return u=u.get(h.key===null?m:h.key)||null,p(d,u,h,C);case br:var _=h._init;return v(u,d,m,_(h._payload),C)}if($t(h)||Mt(h))return u=u.get(m)||null,g(d,u,h,C,null);Ra(d,h)}return null}function w(u,d,m,h){for(var C=null,_=null,z=d,T=d=0,q=null;z!==null&&T<m.length;T++){z.index>T?(q=z,z=null):q=z.sibling;var R=x(u,z,m[T],h);if(R===null){z===null&&(z=q);break}e&&z&&R.alternate===null&&r(u,z),d=i(R,d,T),_===null?C=R:_.sibling=R,_=R,z=q}if(T===m.length)return t(u,z),Y&&Br(u,T),C;if(z===null){for(;T<m.length;T++)z=b(u,m[T],h),z!==null&&(d=i(z,d,T),_===null?C=z:_.sibling=z,_=z);return Y&&Br(u,T),C}for(z=a(u,z);T<m.length;T++)q=v(z,u,T,m[T],h),q!==null&&(e&&q.alternate!==null&&z.delete(q.key===null?T:q.key),d=i(q,d,T),_===null?C=q:_.sibling=q,_=q);return e&&z.forEach(function(te){return r(u,te)}),Y&&Br(u,T),C}function k(u,d,m,h){var C=Mt(m);if(typeof C!="function")throw Error(j(150));if(m=C.call(m),m==null)throw Error(j(151));for(var _=C=null,z=d,T=d=0,q=null,R=m.next();z!==null&&!R.done;T++,R=m.next()){z.index>T?(q=z,z=null):q=z.sibling;var te=x(u,z,R.value,h);if(te===null){z===null&&(z=q);break}e&&z&&te.alternate===null&&r(u,z),d=i(te,d,T),_===null?C=te:_.sibling=te,_=te,z=q}if(R.done)return t(u,z),Y&&Br(u,T),C;if(z===null){for(;!R.done;T++,R=m.next())R=b(u,R.value,h),R!==null&&(d=i(R,d,T),_===null?C=R:_.sibling=R,_=R);return Y&&Br(u,T),C}for(z=a(u,z);!R.done;T++,R=m.next())R=v(z,u,T,R.value,h),R!==null&&(e&&R.alternate!==null&&z.delete(R.key===null?T:R.key),d=i(R,d,T),_===null?C=R:_.sibling=R,_=R);return e&&z.forEach(function(fe){return r(u,fe)}),Y&&Br(u,T),C}function N(u,d,m,h){if(typeof m=="object"&&m!==null&&m.type===at&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Sa:e:{for(var C=m.key,_=d;_!==null;){if(_.key===C){if(C=m.type,C===at){if(_.tag===7){t(u,_.sibling),d=o(_,m.props.children),d.return=u,u=d;break e}}else if(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===br&&Wl(C)===_.type){t(u,_.sibling),d=o(_,m.props),d.ref=Lt(u,_,m),d.return=u,u=d;break e}t(u,_);break}else r(u,_);_=_.sibling}m.type===at?(d=qr(m.props.children,u.mode,h,m.key),d.return=u,u=d):(h=Ja(m.type,m.key,m.props,null,u.mode,h),h.ref=Lt(u,d,m),h.return=u,u=h)}return l(u);case tt:e:{for(_=m.key;d!==null;){if(d.key===_)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){t(u,d.sibling),d=o(d,m.children||[]),d.return=u,u=d;break e}else{t(u,d);break}else r(u,d);d=d.sibling}d=vn(m,u.mode,h),d.return=u,u=d}return l(u);case br:return _=m._init,N(u,d,_(m._payload),h)}if($t(m))return w(u,d,m,h);if(Mt(m))return k(u,d,m,h);Ra(u,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(t(u,d.sibling),d=o(d,m),d.return=u,u=d):(t(u,d),d=xn(m,u.mode,h),d.return=u,u=d),l(u)):t(u,d)}return N}var jt=Uc(!0),Hc=Uc(!1),mo=Rr(null),fo=null,ut=null,Li=null;function Di(){Li=ut=fo=null}function Bi(e){var r=mo.current;Q(mo),e._currentValue=r}function Qn(e,r,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),e===t)break;e=e.return}}function vt(e,r){fo=e,Li=ut=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(Ee=!0),e.firstContext=null)}function Ve(e){var r=e._currentValue;if(Li!==e)if(e={context:e,memoizedValue:r,next:null},ut===null){if(fo===null)throw Error(j(308));ut=e,fo.dependencies={lanes:0,firstContext:e}}else ut=ut.next=e;return r}var Ur=null;function Oi(e){Ur===null?Ur=[e]:Ur.push(e)}function Vc(e,r,t,a){var o=r.interleaved;return o===null?(t.next=t,Oi(r)):(t.next=o.next,o.next=t),r.interleaved=t,gr(e,a)}function gr(e,r){e.lanes|=r;var t=e.alternate;for(t!==null&&(t.lanes|=r),t=e,e=e.return;e!==null;)e.childLanes|=r,t=e.alternate,t!==null&&(t.childLanes|=r),t=e,e=e.return;return t.tag===3?t.stateNode:null}var yr=!1;function $i(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gc(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pr(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function _r(e,r,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,$&2){var o=a.pending;return o===null?r.next=r:(r.next=o.next,o.next=r),a.pending=r,gr(e,t)}return o=a.interleaved,o===null?(r.next=r,Oi(a)):(r.next=o.next,o.next=r),a.interleaved=r,gr(e,t)}function qa(e,r,t){if(r=r.updateQueue,r!==null&&(r=r.shared,(t&4194240)!==0)){var a=r.lanes;a&=e.pendingLanes,t|=a,r.lanes=t,Ni(e,t)}}function Kl(e,r){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?o=i=r:i=i.next=r}else o=i=r;t={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:a.shared,effects:a.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=r:e.next=r,t.lastBaseUpdate=r}function go(e,r,t,a){var o=e.updateQueue;yr=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var c=s,p=c.next;c.next=null,l===null?i=p:l.next=p,l=c;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==l&&(s===null?g.firstBaseUpdate=p:s.next=p,g.lastBaseUpdate=c))}if(i!==null){var b=o.baseState;l=0,g=p=c=null,s=i;do{var x=s.lane,v=s.eventTime;if((a&x)===x){g!==null&&(g=g.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,k=s;switch(x=r,v=t,k.tag){case 1:if(w=k.payload,typeof w=="function"){b=w.call(v,b,x);break e}b=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,x=typeof w=="function"?w.call(v,b,x):w,x==null)break e;b=Z({},b,x);break e;case 2:yr=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,x=o.effects,x===null?o.effects=[s]:x.push(s))}else v={eventTime:v,lane:x,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(p=g=v,c=b):g=g.next=v,l|=x;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;x=s,s=x.next,x.next=null,o.lastBaseUpdate=x,o.shared.pending=null}}while(!0);if(g===null&&(c=b),o.baseState=c,o.firstBaseUpdate=p,o.lastBaseUpdate=g,r=o.shared.interleaved,r!==null){o=r;do l|=o.lane,o=o.next;while(o!==r)}else i===null&&(o.shared.lanes=0);Xr|=l,e.lanes=l,e.memoizedState=b}}function Ql(e,r,t){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var a=e[r],o=a.callback;if(o!==null){if(a.callback=null,a=t,typeof o!="function")throw Error(j(191,o));o.call(a)}}}var ka={},ir=Rr(ka),ua=Rr(ka),pa=Rr(ka);function Hr(e){if(e===ka)throw Error(j(174));return e}function Ui(e,r){switch(G(pa,r),G(ua,e),G(ir,ka),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:_n(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=_n(r,e)}Q(ir),G(ir,r)}function It(){Q(ir),Q(ua),Q(pa)}function qc(e){Hr(pa.current);var r=Hr(ir.current),t=_n(r,e.type);r!==t&&(G(ua,e),G(ir,t))}function Hi(e){ua.current===e&&(Q(ir),Q(ua))}var X=Rr(0);function ho(e){for(var r=e;r!==null;){if(r.tag===13){var t=r.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var un=[];function Vi(){for(var e=0;e<un.length;e++)un[e]._workInProgressVersionPrimary=null;un.length=0}var Wa=xr.ReactCurrentDispatcher,pn=xr.ReactCurrentBatchConfig,Yr=0,J=null,ne=null,se=null,xo=!1,Yt=!1,ma=0,Wp=0;function he(){throw Error(j(321))}function Gi(e,r){if(r===null)return!1;for(var t=0;t<r.length&&t<e.length;t++)if(!er(e[t],r[t]))return!1;return!0}function qi(e,r,t,a,o,i){if(Yr=i,J=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Wa.current=e===null||e.memoizedState===null?Xp:Jp,e=t(a,o),Yt){i=0;do{if(Yt=!1,ma=0,25<=i)throw Error(j(301));i+=1,se=ne=null,r.updateQueue=null,Wa.current=Zp,e=t(a,o)}while(Yt)}if(Wa.current=vo,r=ne!==null&&ne.next!==null,Yr=0,se=ne=J=null,xo=!1,r)throw Error(j(300));return e}function Wi(){var e=ma!==0;return ma=0,e}function tr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?J.memoizedState=se=e:se=se.next=e,se}function Ge(){if(ne===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var r=se===null?J.memoizedState:se.next;if(r!==null)se=r,ne=e;else{if(e===null)throw Error(j(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},se===null?J.memoizedState=se=e:se=se.next=e}return se}function fa(e,r){return typeof r=="function"?r(e):r}function mn(e){var r=Ge(),t=r.queue;if(t===null)throw Error(j(311));t.lastRenderedReducer=e;var a=ne,o=a.baseQueue,i=t.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}a.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,a=a.baseState;var s=l=null,c=null,p=i;do{var g=p.lane;if((Yr&g)===g)c!==null&&(c=c.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),a=p.hasEagerState?p.eagerState:e(a,p.action);else{var b={lane:g,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};c===null?(s=c=b,l=a):c=c.next=b,J.lanes|=g,Xr|=g}p=p.next}while(p!==null&&p!==i);c===null?l=a:c.next=s,er(a,r.memoizedState)||(Ee=!0),r.memoizedState=a,r.baseState=l,r.baseQueue=c,t.lastRenderedState=a}if(e=t.interleaved,e!==null){o=e;do i=o.lane,J.lanes|=i,Xr|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[r.memoizedState,t.dispatch]}function fn(e){var r=Ge(),t=r.queue;if(t===null)throw Error(j(311));t.lastRenderedReducer=e;var a=t.dispatch,o=t.pending,i=r.memoizedState;if(o!==null){t.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);er(i,r.memoizedState)||(Ee=!0),r.memoizedState=i,r.baseQueue===null&&(r.baseState=i),t.lastRenderedState=i}return[i,a]}function Wc(){}function Kc(e,r){var t=J,a=Ge(),o=r(),i=!er(a.memoizedState,o);if(i&&(a.memoizedState=o,Ee=!0),a=a.queue,Ki(Xc.bind(null,t,a,e),[e]),a.getSnapshot!==r||i||se!==null&&se.memoizedState.tag&1){if(t.flags|=2048,ga(9,Yc.bind(null,t,a,o,r),void 0,null),de===null)throw Error(j(349));Yr&30||Qc(t,r,o)}return o}function Qc(e,r,t){e.flags|=16384,e={getSnapshot:r,value:t},r=J.updateQueue,r===null?(r={lastEffect:null,stores:null},J.updateQueue=r,r.stores=[e]):(t=r.stores,t===null?r.stores=[e]:t.push(e))}function Yc(e,r,t,a){r.value=t,r.getSnapshot=a,Jc(r)&&Zc(e)}function Xc(e,r,t){return t(function(){Jc(r)&&Zc(e)})}function Jc(e){var r=e.getSnapshot;e=e.value;try{var t=r();return!er(e,t)}catch{return!0}}function Zc(e){var r=gr(e,1);r!==null&&Je(r,e,1,-1)}function Yl(e){var r=tr();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:e},r.queue=e,e=e.dispatch=Yp.bind(null,J,e),[r.memoizedState,e]}function ga(e,r,t,a){return e={tag:e,create:r,destroy:t,deps:a,next:null},r=J.updateQueue,r===null?(r={lastEffect:null,stores:null},J.updateQueue=r,r.lastEffect=e.next=e):(t=r.lastEffect,t===null?r.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,r.lastEffect=e)),e}function ed(){return Ge().memoizedState}function Ka(e,r,t,a){var o=tr();J.flags|=e,o.memoizedState=ga(1|r,t,void 0,a===void 0?null:a)}function To(e,r,t,a){var o=Ge();a=a===void 0?null:a;var i=void 0;if(ne!==null){var l=ne.memoizedState;if(i=l.destroy,a!==null&&Gi(a,l.deps)){o.memoizedState=ga(r,t,i,a);return}}J.flags|=e,o.memoizedState=ga(1|r,t,i,a)}function Xl(e,r){return Ka(8390656,8,e,r)}function Ki(e,r){return To(2048,8,e,r)}function rd(e,r){return To(4,2,e,r)}function td(e,r){return To(4,4,e,r)}function ad(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function od(e,r,t){return t=t!=null?t.concat([e]):null,To(4,4,ad.bind(null,r,e),t)}function Qi(){}function nd(e,r){var t=Ge();r=r===void 0?null:r;var a=t.memoizedState;return a!==null&&r!==null&&Gi(r,a[1])?a[0]:(t.memoizedState=[e,r],e)}function id(e,r){var t=Ge();r=r===void 0?null:r;var a=t.memoizedState;return a!==null&&r!==null&&Gi(r,a[1])?a[0]:(e=e(),t.memoizedState=[e,r],e)}function ld(e,r,t){return Yr&21?(er(t,r)||(t=pc(),J.lanes|=t,Xr|=t,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=t)}function Kp(e,r){var t=U;U=t!==0&&4>t?t:4,e(!0);var a=pn.transition;pn.transition={};try{e(!1),r()}finally{U=t,pn.transition=a}}function sd(){return Ge().memoizedState}function Qp(e,r,t){var a=zr(e);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},cd(e))dd(r,t);else if(t=Vc(e,r,t,a),t!==null){var o=je();Je(t,e,a,o),ud(t,r,a)}}function Yp(e,r,t){var a=zr(e),o={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(cd(e))dd(r,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=r.lastRenderedReducer,i!==null))try{var l=r.lastRenderedState,s=i(l,t);if(o.hasEagerState=!0,o.eagerState=s,er(s,l)){var c=r.interleaved;c===null?(o.next=o,Oi(r)):(o.next=c.next,c.next=o),r.interleaved=o;return}}catch{}finally{}t=Vc(e,r,o,a),t!==null&&(o=je(),Je(t,e,a,o),ud(t,r,a))}}function cd(e){var r=e.alternate;return e===J||r!==null&&r===J}function dd(e,r){Yt=xo=!0;var t=e.pending;t===null?r.next=r:(r.next=t.next,t.next=r),e.pending=r}function ud(e,r,t){if(t&4194240){var a=r.lanes;a&=e.pendingLanes,t|=a,r.lanes=t,Ni(e,t)}}var vo={readContext:Ve,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},Xp={readContext:Ve,useCallback:function(e,r){return tr().memoizedState=[e,r===void 0?null:r],e},useContext:Ve,useEffect:Xl,useImperativeHandle:function(e,r,t){return t=t!=null?t.concat([e]):null,Ka(4194308,4,ad.bind(null,r,e),t)},useLayoutEffect:function(e,r){return Ka(4194308,4,e,r)},useInsertionEffect:function(e,r){return Ka(4,2,e,r)},useMemo:function(e,r){var t=tr();return r=r===void 0?null:r,e=e(),t.memoizedState=[e,r],e},useReducer:function(e,r,t){var a=tr();return r=t!==void 0?t(r):r,a.memoizedState=a.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=Qp.bind(null,J,e),[a.memoizedState,e]},useRef:function(e){var r=tr();return e={current:e},r.memoizedState=e},useState:Yl,useDebugValue:Qi,useDeferredValue:function(e){return tr().memoizedState=e},useTransition:function(){var e=Yl(!1),r=e[0];return e=Kp.bind(null,e[1]),tr().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,t){var a=J,o=tr();if(Y){if(t===void 0)throw Error(j(407));t=t()}else{if(t=r(),de===null)throw Error(j(349));Yr&30||Qc(a,r,t)}o.memoizedState=t;var i={value:t,getSnapshot:r};return o.queue=i,Xl(Xc.bind(null,a,i,e),[e]),a.flags|=2048,ga(9,Yc.bind(null,a,i,t,r),void 0,null),t},useId:function(){var e=tr(),r=de.identifierPrefix;if(Y){var t=ur,a=dr;t=(a&~(1<<32-Xe(a)-1)).toString(32)+t,r=":"+r+"R"+t,t=ma++,0<t&&(r+="H"+t.toString(32)),r+=":"}else t=Wp++,r=":"+r+"r"+t.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Jp={readContext:Ve,useCallback:nd,useContext:Ve,useEffect:Ki,useImperativeHandle:od,useInsertionEffect:rd,useLayoutEffect:td,useMemo:id,useReducer:mn,useRef:ed,useState:function(){return mn(fa)},useDebugValue:Qi,useDeferredValue:function(e){var r=Ge();return ld(r,ne.memoizedState,e)},useTransition:function(){var e=mn(fa)[0],r=Ge().memoizedState;return[e,r]},useMutableSource:Wc,useSyncExternalStore:Kc,useId:sd,unstable_isNewReconciler:!1},Zp={readContext:Ve,useCallback:nd,useContext:Ve,useEffect:Ki,useImperativeHandle:od,useInsertionEffect:rd,useLayoutEffect:td,useMemo:id,useReducer:fn,useRef:ed,useState:function(){return fn(fa)},useDebugValue:Qi,useDeferredValue:function(e){var r=Ge();return ne===null?r.memoizedState=e:ld(r,ne.memoizedState,e)},useTransition:function(){var e=fn(fa)[0],r=Ge().memoizedState;return[e,r]},useMutableSource:Wc,useSyncExternalStore:Kc,useId:sd,unstable_isNewReconciler:!1};function Ke(e,r){if(e&&e.defaultProps){r=Z({},r),e=e.defaultProps;for(var t in e)r[t]===void 0&&(r[t]=e[t]);return r}return r}function Yn(e,r,t,a){r=e.memoizedState,t=t(a,r),t=t==null?r:Z({},r,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Fo={isMounted:function(e){return(e=e._reactInternals)?et(e)===e:!1},enqueueSetState:function(e,r,t){e=e._reactInternals;var a=je(),o=zr(e),i=pr(a,o);i.payload=r,t!=null&&(i.callback=t),r=_r(e,i,o),r!==null&&(Je(r,e,o,a),qa(r,e,o))},enqueueReplaceState:function(e,r,t){e=e._reactInternals;var a=je(),o=zr(e),i=pr(a,o);i.tag=1,i.payload=r,t!=null&&(i.callback=t),r=_r(e,i,o),r!==null&&(Je(r,e,o,a),qa(r,e,o))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var t=je(),a=zr(e),o=pr(t,a);o.tag=2,r!=null&&(o.callback=r),r=_r(e,o,a),r!==null&&(Je(r,e,a,t),qa(r,e,a))}};function Jl(e,r,t,a,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,l):r.prototype&&r.prototype.isPureReactComponent?!la(t,a)||!la(o,i):!0}function pd(e,r,t){var a=!1,o=Tr,i=r.contextType;return typeof i=="object"&&i!==null?i=Ve(i):(o=Pe(r)?Kr:ye.current,a=r.contextTypes,i=(a=a!=null)?wt(e,o):Tr),r=new r(t,i),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Fo,e.stateNode=r,r._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),r}function Zl(e,r,t,a){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(t,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(t,a),r.state!==e&&Fo.enqueueReplaceState(r,r.state,null)}function Xn(e,r,t,a){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},$i(e);var i=r.contextType;typeof i=="object"&&i!==null?o.context=Ve(i):(i=Pe(r)?Kr:ye.current,o.context=wt(e,i)),o.state=e.memoizedState,i=r.getDerivedStateFromProps,typeof i=="function"&&(Yn(e,r,i,t),o.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(r=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),r!==o.state&&Fo.enqueueReplaceState(o,o.state,null),go(e,t,o,a),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function St(e,r){try{var t="",a=r;do t+=Cu(a),a=a.return;while(a);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:r,stack:o,digest:null}}function gn(e,r,t){return{value:e,source:null,stack:t??null,digest:r??null}}function Jn(e,r){try{console.error(r.value)}catch(t){setTimeout(function(){throw t})}}var em=typeof WeakMap=="function"?WeakMap:Map;function md(e,r,t){t=pr(-1,t),t.tag=3,t.payload={element:null};var a=r.value;return t.callback=function(){yo||(yo=!0,si=a),Jn(e,r)},t}function fd(e,r,t){t=pr(-1,t),t.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var o=r.value;t.payload=function(){return a(o)},t.callback=function(){Jn(e,r)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Jn(e,r),typeof a!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var l=r.stack;this.componentDidCatch(r.value,{componentStack:l!==null?l:""})}),t}function es(e,r,t){var a=e.pingCache;if(a===null){a=e.pingCache=new em;var o=new Set;a.set(r,o)}else o=a.get(r),o===void 0&&(o=new Set,a.set(r,o));o.has(t)||(o.add(t),e=fm.bind(null,e,r,t),r.then(e,e))}function rs(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function ts(e,r,t,a,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===r?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(r=pr(-1,1),r.tag=2,_r(t,r,1))),t.lanes|=1),e)}var rm=xr.ReactCurrentOwner,Ee=!1;function ke(e,r,t,a){r.child=e===null?Hc(r,null,t,a):jt(r,e.child,t,a)}function as(e,r,t,a,o){t=t.render;var i=r.ref;return vt(r,o),a=qi(e,r,t,a,i,o),t=Wi(),e!==null&&!Ee?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~o,hr(e,r,o)):(Y&&t&&Ti(r),r.flags|=1,ke(e,r,a,o),r.child)}function os(e,r,t,a,o){if(e===null){var i=t.type;return typeof i=="function"&&!al(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(r.tag=15,r.type=i,gd(e,r,i,a,o)):(e=Ja(t.type,null,a,r,r.mode,o),e.ref=r.ref,e.return=r,r.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:la,t(l,a)&&e.ref===r.ref)return hr(e,r,o)}return r.flags|=1,e=Mr(i,a),e.ref=r.ref,e.return=r,r.child=e}function gd(e,r,t,a,o){if(e!==null){var i=e.memoizedProps;if(la(i,a)&&e.ref===r.ref)if(Ee=!1,r.pendingProps=a=i,(e.lanes&o)!==0)e.flags&131072&&(Ee=!0);else return r.lanes=e.lanes,hr(e,r,o)}return Zn(e,r,t,a,o)}function hd(e,r,t){var a=r.pendingProps,o=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(mt,Ae),Ae|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,G(mt,Ae),Ae|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=i!==null?i.baseLanes:t,G(mt,Ae),Ae|=a}else i!==null?(a=i.baseLanes|t,r.memoizedState=null):a=t,G(mt,Ae),Ae|=a;return ke(e,r,o,t),r.child}function xd(e,r){var t=r.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(r.flags|=512,r.flags|=2097152)}function Zn(e,r,t,a,o){var i=Pe(t)?Kr:ye.current;return i=wt(r,i),vt(r,o),t=qi(e,r,t,a,i,o),a=Wi(),e!==null&&!Ee?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~o,hr(e,r,o)):(Y&&a&&Ti(r),r.flags|=1,ke(e,r,t,o),r.child)}function ns(e,r,t,a,o){if(Pe(t)){var i=!0;co(r)}else i=!1;if(vt(r,o),r.stateNode===null)Qa(e,r),pd(r,t,a),Xn(r,t,a,o),a=!0;else if(e===null){var l=r.stateNode,s=r.memoizedProps;l.props=s;var c=l.context,p=t.contextType;typeof p=="object"&&p!==null?p=Ve(p):(p=Pe(t)?Kr:ye.current,p=wt(r,p));var g=t.getDerivedStateFromProps,b=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";b||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==a||c!==p)&&Zl(r,l,a,p),yr=!1;var x=r.memoizedState;l.state=x,go(r,a,l,o),c=r.memoizedState,s!==a||x!==c||_e.current||yr?(typeof g=="function"&&(Yn(r,t,g,a),c=r.memoizedState),(s=yr||Jl(r,t,s,a,x,c,p))?(b||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(r.flags|=4194308)):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=c),l.props=a,l.state=c,l.context=p,a=s):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{l=r.stateNode,Gc(e,r),s=r.memoizedProps,p=r.type===r.elementType?s:Ke(r.type,s),l.props=p,b=r.pendingProps,x=l.context,c=t.contextType,typeof c=="object"&&c!==null?c=Ve(c):(c=Pe(t)?Kr:ye.current,c=wt(r,c));var v=t.getDerivedStateFromProps;(g=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==b||x!==c)&&Zl(r,l,a,c),yr=!1,x=r.memoizedState,l.state=x,go(r,a,l,o);var w=r.memoizedState;s!==b||x!==w||_e.current||yr?(typeof v=="function"&&(Yn(r,t,v,a),w=r.memoizedState),(p=yr||Jl(r,t,p,a,x,w,c)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,w,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,w,c)),typeof l.componentDidUpdate=="function"&&(r.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=w),l.props=a,l.state=w,l.context=c,a=p):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(r.flags|=1024),a=!1)}return ei(e,r,t,a,i,o)}function ei(e,r,t,a,o,i){xd(e,r);var l=(r.flags&128)!==0;if(!a&&!l)return o&&Vl(r,t,!1),hr(e,r,i);a=r.stateNode,rm.current=r;var s=l&&typeof t.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,e!==null&&l?(r.child=jt(r,e.child,null,i),r.child=jt(r,null,s,i)):ke(e,r,s,i),r.memoizedState=a.state,o&&Vl(r,t,!0),r.child}function vd(e){var r=e.stateNode;r.pendingContext?Hl(e,r.pendingContext,r.pendingContext!==r.context):r.context&&Hl(e,r.context,!1),Ui(e,r.containerInfo)}function is(e,r,t,a,o){return kt(),Ri(o),r.flags|=256,ke(e,r,t,a),r.child}var ri={dehydrated:null,treeContext:null,retryLane:0};function ti(e){return{baseLanes:e,cachePool:null,transitions:null}}function bd(e,r,t){var a=r.pendingProps,o=X.current,i=!1,l=(r.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),G(X,o&1),e===null)return Kn(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(l=a.children,e=a.fallback,i?(a=r.mode,i=r.child,l={mode:"hidden",children:l},!(a&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Do(l,a,0,null),e=qr(e,a,t,null),i.return=r,e.return=r,i.sibling=e,r.child=i,r.child.memoizedState=ti(t),r.memoizedState=ri,e):Yi(r,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return tm(e,r,l,a,s,o,t);if(i){i=a.fallback,l=r.mode,o=e.child,s=o.sibling;var c={mode:"hidden",children:a.children};return!(l&1)&&r.child!==o?(a=r.child,a.childLanes=0,a.pendingProps=c,r.deletions=null):(a=Mr(o,c),a.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Mr(s,i):(i=qr(i,l,t,null),i.flags|=2),i.return=r,a.return=r,a.sibling=i,r.child=a,a=i,i=r.child,l=e.child.memoizedState,l=l===null?ti(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~t,r.memoizedState=ri,a}return i=e.child,e=i.sibling,a=Mr(i,{mode:"visible",children:a.children}),!(r.mode&1)&&(a.lanes=t),a.return=r,a.sibling=null,e!==null&&(t=r.deletions,t===null?(r.deletions=[e],r.flags|=16):t.push(e)),r.child=a,r.memoizedState=null,a}function Yi(e,r){return r=Do({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function La(e,r,t,a){return a!==null&&Ri(a),jt(r,e.child,null,t),e=Yi(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function tm(e,r,t,a,o,i,l){if(t)return r.flags&256?(r.flags&=-257,a=gn(Error(j(422))),La(e,r,l,a)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(i=a.fallback,o=r.mode,a=Do({mode:"visible",children:a.children},o,0,null),i=qr(i,o,l,null),i.flags|=2,a.return=r,i.return=r,a.sibling=i,r.child=a,r.mode&1&&jt(r,e.child,null,l),r.child.memoizedState=ti(l),r.memoizedState=ri,i);if(!(r.mode&1))return La(e,r,l,null);if(o.data==="$!"){if(a=o.nextSibling&&o.nextSibling.dataset,a)var s=a.dgst;return a=s,i=Error(j(419)),a=gn(i,a,void 0),La(e,r,l,a)}if(s=(l&e.childLanes)!==0,Ee||s){if(a=de,a!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(a.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,gr(e,o),Je(a,e,o,-1))}return tl(),a=gn(Error(j(421))),La(e,r,l,a)}return o.data==="$?"?(r.flags|=128,r.child=e.child,r=gm.bind(null,e),o._reactRetry=r,null):(e=i.treeContext,Te=Er(o.nextSibling),Fe=r,Y=!0,Ye=null,e!==null&&(Oe[$e++]=dr,Oe[$e++]=ur,Oe[$e++]=Qr,dr=e.id,ur=e.overflow,Qr=r),r=Yi(r,a.children),r.flags|=4096,r)}function ls(e,r,t){e.lanes|=r;var a=e.alternate;a!==null&&(a.lanes|=r),Qn(e.return,r,t)}function hn(e,r,t,a,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:o}:(i.isBackwards=r,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=t,i.tailMode=o)}function yd(e,r,t){var a=r.pendingProps,o=a.revealOrder,i=a.tail;if(ke(e,r,a.children,t),a=X.current,a&2)a=a&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ls(e,t,r);else if(e.tag===19)ls(e,t,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(G(X,a),!(r.mode&1))r.memoizedState=null;else switch(o){case"forwards":for(t=r.child,o=null;t!==null;)e=t.alternate,e!==null&&ho(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=r.child,r.child=null):(o=t.sibling,t.sibling=null),hn(r,!1,o,t,i);break;case"backwards":for(t=null,o=r.child,r.child=null;o!==null;){if(e=o.alternate,e!==null&&ho(e)===null){r.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}hn(r,!0,t,null,i);break;case"together":hn(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Qa(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function hr(e,r,t){if(e!==null&&(r.dependencies=e.dependencies),Xr|=r.lanes,!(t&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(j(153));if(r.child!==null){for(e=r.child,t=Mr(e,e.pendingProps),r.child=t,t.return=r;e.sibling!==null;)e=e.sibling,t=t.sibling=Mr(e,e.pendingProps),t.return=r;t.sibling=null}return r.child}function am(e,r,t){switch(r.tag){case 3:vd(r),kt();break;case 5:qc(r);break;case 1:Pe(r.type)&&co(r);break;case 4:Ui(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,o=r.memoizedProps.value;G(mo,a._currentValue),a._currentValue=o;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(G(X,X.current&1),r.flags|=128,null):t&r.child.childLanes?bd(e,r,t):(G(X,X.current&1),e=hr(e,r,t),e!==null?e.sibling:null);G(X,X.current&1);break;case 19:if(a=(t&r.childLanes)!==0,e.flags&128){if(a)return yd(e,r,t);r.flags|=128}if(o=r.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),G(X,X.current),a)break;return null;case 22:case 23:return r.lanes=0,hd(e,r,t)}return hr(e,r,t)}var wd,ai,kd,jd;wd=function(e,r){for(var t=r.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break;for(;t.sibling===null;){if(t.return===null||t.return===r)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ai=function(){};kd=function(e,r,t,a){var o=e.memoizedProps;if(o!==a){e=r.stateNode,Hr(ir.current);var i=null;switch(t){case"input":o=Sn(e,o),a=Sn(e,a),i=[];break;case"select":o=Z({},o,{value:void 0}),a=Z({},a,{value:void 0}),i=[];break;case"textarea":o=En(e,o),a=En(e,a),i=[];break;default:typeof o.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=lo)}Pn(t,a);var l;t=null;for(p in o)if(!a.hasOwnProperty(p)&&o.hasOwnProperty(p)&&o[p]!=null)if(p==="style"){var s=o[p];for(l in s)s.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(ea.hasOwnProperty(p)?i||(i=[]):(i=i||[]).push(p,null));for(p in a){var c=a[p];if(s=o!=null?o[p]:void 0,a.hasOwnProperty(p)&&c!==s&&(c!=null||s!=null))if(p==="style")if(s){for(l in s)!s.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in c)c.hasOwnProperty(l)&&s[l]!==c[l]&&(t||(t={}),t[l]=c[l])}else t||(i||(i=[]),i.push(p,t)),t=c;else p==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(i=i||[]).push(p,c)):p==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(p,""+c):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(ea.hasOwnProperty(p)?(c!=null&&p==="onScroll"&&K("scroll",e),i||s===c||(i=[])):(i=i||[]).push(p,c))}t&&(i=i||[]).push("style",t);var p=i;(r.updateQueue=p)&&(r.flags|=4)}};jd=function(e,r,t,a){t!==a&&(r.flags|=4)};function Dt(e,r){if(!Y)switch(e.tailMode){case"hidden":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function xe(e){var r=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(r)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,a|=o.subtreeFlags&14680064,a|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=t,r}function om(e,r,t){var a=r.pendingProps;switch(Fi(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(r),null;case 1:return Pe(r.type)&&so(),xe(r),null;case 3:return a=r.stateNode,It(),Q(_e),Q(ye),Vi(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fa(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Ye!==null&&(ui(Ye),Ye=null))),ai(e,r),xe(r),null;case 5:Hi(r);var o=Hr(pa.current);if(t=r.type,e!==null&&r.stateNode!=null)kd(e,r,t,a,o),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(j(166));return xe(r),null}if(e=Hr(ir.current),Fa(r)){a=r.stateNode,t=r.type;var i=r.memoizedProps;switch(a[or]=r,a[da]=i,e=(r.mode&1)!==0,t){case"dialog":K("cancel",a),K("close",a);break;case"iframe":case"object":case"embed":K("load",a);break;case"video":case"audio":for(o=0;o<Ht.length;o++)K(Ht[o],a);break;case"source":K("error",a);break;case"img":case"image":case"link":K("error",a),K("load",a);break;case"details":K("toggle",a);break;case"input":hl(a,i),K("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!i.multiple},K("invalid",a);break;case"textarea":vl(a,i),K("invalid",a)}Pn(t,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?a.textContent!==s&&(i.suppressHydrationWarning!==!0&&Ta(a.textContent,s,e),o=["children",s]):typeof s=="number"&&a.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Ta(a.textContent,s,e),o=["children",""+s]):ea.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&K("scroll",a)}switch(t){case"input":Na(a),xl(a,i,!0);break;case"textarea":Na(a),bl(a);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(a.onclick=lo)}a=o,r.updateQueue=a,a!==null&&(r.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xs(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=l.createElement(t,{is:a.is}):(e=l.createElement(t),t==="select"&&(l=e,a.multiple?l.multiple=!0:a.size&&(l.size=a.size))):e=l.createElementNS(e,t),e[or]=r,e[da]=a,wd(e,r,!1,!1),r.stateNode=e;e:{switch(l=zn(t,a),t){case"dialog":K("cancel",e),K("close",e),o=a;break;case"iframe":case"object":case"embed":K("load",e),o=a;break;case"video":case"audio":for(o=0;o<Ht.length;o++)K(Ht[o],e);o=a;break;case"source":K("error",e),o=a;break;case"img":case"image":case"link":K("error",e),K("load",e),o=a;break;case"details":K("toggle",e),o=a;break;case"input":hl(e,a),o=Sn(e,a),K("invalid",e);break;case"option":o=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},o=Z({},a,{value:void 0}),K("invalid",e);break;case"textarea":vl(e,a),o=En(e,a),K("invalid",e);break;default:o=a}Pn(t,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var c=s[i];i==="style"?ec(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Js(e,c)):i==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&ra(e,c):typeof c=="number"&&ra(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ea.hasOwnProperty(i)?c!=null&&i==="onScroll"&&K("scroll",e):c!=null&&yi(e,i,c,l))}switch(t){case"input":Na(e),xl(e,a,!1);break;case"textarea":Na(e),bl(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Ar(a.value));break;case"select":e.multiple=!!a.multiple,i=a.value,i!=null?ft(e,!!a.multiple,i,!1):a.defaultValue!=null&&ft(e,!!a.multiple,a.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=lo)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return xe(r),null;case 6:if(e&&r.stateNode!=null)jd(e,r,e.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(j(166));if(t=Hr(pa.current),Hr(ir.current),Fa(r)){if(a=r.stateNode,t=r.memoizedProps,a[or]=r,(i=a.nodeValue!==t)&&(e=Fe,e!==null))switch(e.tag){case 3:Ta(a.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ta(a.nodeValue,t,(e.mode&1)!==0)}i&&(r.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[or]=r,r.stateNode=a}return xe(r),null;case 13:if(Q(X),a=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Te!==null&&r.mode&1&&!(r.flags&128))$c(),kt(),r.flags|=98560,i=!1;else if(i=Fa(r),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=r.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[or]=r}else kt(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;xe(r),i=!1}else Ye!==null&&(ui(Ye),Ye=null),i=!0;if(!i)return r.flags&65536?r:null}return r.flags&128?(r.lanes=t,r):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(r.child.flags|=8192,r.mode&1&&(e===null||X.current&1?ie===0&&(ie=3):tl())),r.updateQueue!==null&&(r.flags|=4),xe(r),null);case 4:return It(),ai(e,r),e===null&&sa(r.stateNode.containerInfo),xe(r),null;case 10:return Bi(r.type._context),xe(r),null;case 17:return Pe(r.type)&&so(),xe(r),null;case 19:if(Q(X),i=r.memoizedState,i===null)return xe(r),null;if(a=(r.flags&128)!==0,l=i.rendering,l===null)if(a)Dt(i,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(l=ho(e),l!==null){for(r.flags|=128,Dt(i,!1),a=l.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=t,t=r.child;t!==null;)i=t,e=a,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return G(X,X.current&1|2),r.child}e=e.sibling}i.tail!==null&&re()>Nt&&(r.flags|=128,a=!0,Dt(i,!1),r.lanes=4194304)}else{if(!a)if(e=ho(l),e!==null){if(r.flags|=128,a=!0,t=e.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),Dt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Y)return xe(r),null}else 2*re()-i.renderingStartTime>Nt&&t!==1073741824&&(r.flags|=128,a=!0,Dt(i,!1),r.lanes=4194304);i.isBackwards?(l.sibling=r.child,r.child=l):(t=i.last,t!==null?t.sibling=l:r.child=l,i.last=l)}return i.tail!==null?(r=i.tail,i.rendering=r,i.tail=r.sibling,i.renderingStartTime=re(),r.sibling=null,t=X.current,G(X,a?t&1|2:t&1),r):(xe(r),null);case 22:case 23:return rl(),a=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(r.flags|=8192),a&&r.mode&1?Ae&1073741824&&(xe(r),r.subtreeFlags&6&&(r.flags|=8192)):xe(r),null;case 24:return null;case 25:return null}throw Error(j(156,r.tag))}function nm(e,r){switch(Fi(r),r.tag){case 1:return Pe(r.type)&&so(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return It(),Q(_e),Q(ye),Vi(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return Hi(r),null;case 13:if(Q(X),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(j(340));kt()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Q(X),null;case 4:return It(),null;case 10:return Bi(r.type._context),null;case 22:case 23:return rl(),null;case 24:return null;default:return null}}var Da=!1,ve=!1,im=typeof WeakSet=="function"?WeakSet:Set,M=null;function pt(e,r){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){ee(e,r,a)}else t.current=null}function oi(e,r,t){try{t()}catch(a){ee(e,r,a)}}var ss=!1;function lm(e,r){if($n=oo,e=Ec(),Ai(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var o=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,s=-1,c=-1,p=0,g=0,b=e,x=null;r:for(;;){for(var v;b!==t||o!==0&&b.nodeType!==3||(s=l+o),b!==i||a!==0&&b.nodeType!==3||(c=l+a),b.nodeType===3&&(l+=b.nodeValue.length),(v=b.firstChild)!==null;)x=b,b=v;for(;;){if(b===e)break r;if(x===t&&++p===o&&(s=l),x===i&&++g===a&&(c=l),(v=b.nextSibling)!==null)break;b=x,x=b.parentNode}b=v}t=s===-1||c===-1?null:{start:s,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(Un={focusedElem:e,selectionRange:t},oo=!1,M=r;M!==null;)if(r=M,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,M=e;else for(;M!==null;){r=M;try{var w=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,N=w.memoizedState,u=r.stateNode,d=u.getSnapshotBeforeUpdate(r.elementType===r.type?k:Ke(r.type,k),N);u.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=r.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(h){ee(r,r.return,h)}if(e=r.sibling,e!==null){e.return=r.return,M=e;break}M=r.return}return w=ss,ss=!1,w}function Xt(e,r,t){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var o=a=a.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&oi(r,t,i)}o=o.next}while(o!==a)}}function Ro(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var t=r=r.next;do{if((t.tag&e)===e){var a=t.create;t.destroy=a()}t=t.next}while(t!==r)}}function ni(e){var r=e.ref;if(r!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof r=="function"?r(e):r.current=e}}function Id(e){var r=e.alternate;r!==null&&(e.alternate=null,Id(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[or],delete r[da],delete r[Gn],delete r[Hp],delete r[Vp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sd(e){return e.tag===5||e.tag===3||e.tag===4}function cs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ii(e,r,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,r?t.nodeType===8?t.parentNode.insertBefore(e,r):t.insertBefore(e,r):(t.nodeType===8?(r=t.parentNode,r.insertBefore(e,t)):(r=t,r.appendChild(e)),t=t._reactRootContainer,t!=null||r.onclick!==null||(r.onclick=lo));else if(a!==4&&(e=e.child,e!==null))for(ii(e,r,t),e=e.sibling;e!==null;)ii(e,r,t),e=e.sibling}function li(e,r,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,r?t.insertBefore(e,r):t.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(li(e,r,t),e=e.sibling;e!==null;)li(e,r,t),e=e.sibling}var ue=null,Qe=!1;function vr(e,r,t){for(t=t.child;t!==null;)Nd(e,r,t),t=t.sibling}function Nd(e,r,t){if(nr&&typeof nr.onCommitFiberUnmount=="function")try{nr.onCommitFiberUnmount(Eo,t)}catch{}switch(t.tag){case 5:ve||pt(t,r);case 6:var a=ue,o=Qe;ue=null,vr(e,r,t),ue=a,Qe=o,ue!==null&&(Qe?(e=ue,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ue.removeChild(t.stateNode));break;case 18:ue!==null&&(Qe?(e=ue,t=t.stateNode,e.nodeType===8?cn(e.parentNode,t):e.nodeType===1&&cn(e,t),na(e)):cn(ue,t.stateNode));break;case 4:a=ue,o=Qe,ue=t.stateNode.containerInfo,Qe=!0,vr(e,r,t),ue=a,Qe=o;break;case 0:case 11:case 14:case 15:if(!ve&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){o=a=a.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&oi(t,r,l),o=o.next}while(o!==a)}vr(e,r,t);break;case 1:if(!ve&&(pt(t,r),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(s){ee(t,r,s)}vr(e,r,t);break;case 21:vr(e,r,t);break;case 22:t.mode&1?(ve=(a=ve)||t.memoizedState!==null,vr(e,r,t),ve=a):vr(e,r,t);break;default:vr(e,r,t)}}function ds(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new im),r.forEach(function(a){var o=hm.bind(null,e,a);t.has(a)||(t.add(a),a.then(o,o))})}}function We(e,r){var t=r.deletions;if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];try{var i=e,l=r,s=l;e:for(;s!==null;){switch(s.tag){case 5:ue=s.stateNode,Qe=!1;break e;case 3:ue=s.stateNode.containerInfo,Qe=!0;break e;case 4:ue=s.stateNode.containerInfo,Qe=!0;break e}s=s.return}if(ue===null)throw Error(j(160));Nd(i,l,o),ue=null,Qe=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(p){ee(o,r,p)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Cd(r,e),r=r.sibling}function Cd(e,r){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(r,e),rr(e),a&4){try{Xt(3,e,e.return),Ro(3,e)}catch(k){ee(e,e.return,k)}try{Xt(5,e,e.return)}catch(k){ee(e,e.return,k)}}break;case 1:We(r,e),rr(e),a&512&&t!==null&&pt(t,t.return);break;case 5:if(We(r,e),rr(e),a&512&&t!==null&&pt(t,t.return),e.flags&32){var o=e.stateNode;try{ra(o,"")}catch(k){ee(e,e.return,k)}}if(a&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=t!==null?t.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Qs(o,i),zn(s,l);var p=zn(s,i);for(l=0;l<c.length;l+=2){var g=c[l],b=c[l+1];g==="style"?ec(o,b):g==="dangerouslySetInnerHTML"?Js(o,b):g==="children"?ra(o,b):yi(o,g,b,p)}switch(s){case"input":Nn(o,i);break;case"textarea":Ys(o,i);break;case"select":var x=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?ft(o,!!i.multiple,v,!1):x!==!!i.multiple&&(i.defaultValue!=null?ft(o,!!i.multiple,i.defaultValue,!0):ft(o,!!i.multiple,i.multiple?[]:"",!1))}o[da]=i}catch(k){ee(e,e.return,k)}}break;case 6:if(We(r,e),rr(e),a&4){if(e.stateNode===null)throw Error(j(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(k){ee(e,e.return,k)}}break;case 3:if(We(r,e),rr(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{na(r.containerInfo)}catch(k){ee(e,e.return,k)}break;case 4:We(r,e),rr(e);break;case 13:We(r,e),rr(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Zi=re())),a&4&&ds(e);break;case 22:if(g=t!==null&&t.memoizedState!==null,e.mode&1?(ve=(p=ve)||g,We(r,e),ve=p):We(r,e),rr(e),a&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!g&&e.mode&1)for(M=e,g=e.child;g!==null;){for(b=M=g;M!==null;){switch(x=M,v=x.child,x.tag){case 0:case 11:case 14:case 15:Xt(4,x,x.return);break;case 1:pt(x,x.return);var w=x.stateNode;if(typeof w.componentWillUnmount=="function"){a=x,t=x.return;try{r=a,w.props=r.memoizedProps,w.state=r.memoizedState,w.componentWillUnmount()}catch(k){ee(a,t,k)}}break;case 5:pt(x,x.return);break;case 22:if(x.memoizedState!==null){ps(b);continue}}v!==null?(v.return=x,M=v):ps(b)}g=g.sibling}e:for(g=null,b=e;;){if(b.tag===5){if(g===null){g=b;try{o=b.stateNode,p?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=b.stateNode,c=b.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Zs("display",l))}catch(k){ee(e,e.return,k)}}}else if(b.tag===6){if(g===null)try{b.stateNode.nodeValue=p?"":b.memoizedProps}catch(k){ee(e,e.return,k)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===e)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break e;for(;b.sibling===null;){if(b.return===null||b.return===e)break e;g===b&&(g=null),b=b.return}g===b&&(g=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:We(r,e),rr(e),a&4&&ds(e);break;case 21:break;default:We(r,e),rr(e)}}function rr(e){var r=e.flags;if(r&2){try{e:{for(var t=e.return;t!==null;){if(Sd(t)){var a=t;break e}t=t.return}throw Error(j(160))}switch(a.tag){case 5:var o=a.stateNode;a.flags&32&&(ra(o,""),a.flags&=-33);var i=cs(e);li(e,i,o);break;case 3:case 4:var l=a.stateNode.containerInfo,s=cs(e);ii(e,s,l);break;default:throw Error(j(161))}}catch(c){ee(e,e.return,c)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function sm(e,r,t){M=e,Ed(e)}function Ed(e,r,t){for(var a=(e.mode&1)!==0;M!==null;){var o=M,i=o.child;if(o.tag===22&&a){var l=o.memoizedState!==null||Da;if(!l){var s=o.alternate,c=s!==null&&s.memoizedState!==null||ve;s=Da;var p=ve;if(Da=l,(ve=c)&&!p)for(M=o;M!==null;)l=M,c=l.child,l.tag===22&&l.memoizedState!==null?ms(o):c!==null?(c.return=l,M=c):ms(o);for(;i!==null;)M=i,Ed(i),i=i.sibling;M=o,Da=s,ve=p}us(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,M=i):us(e)}}function us(e){for(;M!==null;){var r=M;if(r.flags&8772){var t=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:ve||Ro(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!ve)if(t===null)a.componentDidMount();else{var o=r.elementType===r.type?t.memoizedProps:Ke(r.type,t.memoizedProps);a.componentDidUpdate(o,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var i=r.updateQueue;i!==null&&Ql(r,i,a);break;case 3:var l=r.updateQueue;if(l!==null){if(t=null,r.child!==null)switch(r.child.tag){case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}Ql(r,l,t)}break;case 5:var s=r.stateNode;if(t===null&&r.flags&4){t=s;var c=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var p=r.alternate;if(p!==null){var g=p.memoizedState;if(g!==null){var b=g.dehydrated;b!==null&&na(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ve||r.flags&512&&ni(r)}catch(x){ee(r,r.return,x)}}if(r===e){M=null;break}if(t=r.sibling,t!==null){t.return=r.return,M=t;break}M=r.return}}function ps(e){for(;M!==null;){var r=M;if(r===e){M=null;break}var t=r.sibling;if(t!==null){t.return=r.return,M=t;break}M=r.return}}function ms(e){for(;M!==null;){var r=M;try{switch(r.tag){case 0:case 11:case 15:var t=r.return;try{Ro(4,r)}catch(c){ee(r,t,c)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var o=r.return;try{a.componentDidMount()}catch(c){ee(r,o,c)}}var i=r.return;try{ni(r)}catch(c){ee(r,i,c)}break;case 5:var l=r.return;try{ni(r)}catch(c){ee(r,l,c)}}}catch(c){ee(r,r.return,c)}if(r===e){M=null;break}var s=r.sibling;if(s!==null){s.return=r.return,M=s;break}M=r.return}}var cm=Math.ceil,bo=xr.ReactCurrentDispatcher,Xi=xr.ReactCurrentOwner,He=xr.ReactCurrentBatchConfig,$=0,de=null,ae=null,pe=0,Ae=0,mt=Rr(0),ie=0,ha=null,Xr=0,Lo=0,Ji=0,Jt=null,Ce=null,Zi=0,Nt=1/0,lr=null,yo=!1,si=null,Pr=null,Ba=!1,Ir=null,wo=0,Zt=0,ci=null,Ya=-1,Xa=0;function je(){return $&6?re():Ya!==-1?Ya:Ya=re()}function zr(e){return e.mode&1?$&2&&pe!==0?pe&-pe:qp.transition!==null?(Xa===0&&(Xa=pc()),Xa):(e=U,e!==0||(e=window.event,e=e===void 0?16:bc(e.type)),e):1}function Je(e,r,t,a){if(50<Zt)throw Zt=0,ci=null,Error(j(185));ba(e,t,a),(!($&2)||e!==de)&&(e===de&&(!($&2)&&(Lo|=t),ie===4&&kr(e,pe)),ze(e,a),t===1&&$===0&&!(r.mode&1)&&(Nt=re()+500,Ao&&Lr()))}function ze(e,r){var t=e.callbackNode;qu(e,r);var a=ao(e,e===de?pe:0);if(a===0)t!==null&&kl(t),e.callbackNode=null,e.callbackPriority=0;else if(r=a&-a,e.callbackPriority!==r){if(t!=null&&kl(t),r===1)e.tag===0?Gp(fs.bind(null,e)):Dc(fs.bind(null,e)),$p(function(){!($&6)&&Lr()}),t=null;else{switch(mc(a)){case 1:t=Si;break;case 4:t=dc;break;case 16:t=to;break;case 536870912:t=uc;break;default:t=to}t=Rd(t,_d.bind(null,e))}e.callbackPriority=r,e.callbackNode=t}}function _d(e,r){if(Ya=-1,Xa=0,$&6)throw Error(j(327));var t=e.callbackNode;if(bt()&&e.callbackNode!==t)return null;var a=ao(e,e===de?pe:0);if(a===0)return null;if(a&30||a&e.expiredLanes||r)r=ko(e,a);else{r=a;var o=$;$|=2;var i=zd();(de!==e||pe!==r)&&(lr=null,Nt=re()+500,Gr(e,r));do try{pm();break}catch(s){Pd(e,s)}while(!0);Di(),bo.current=i,$=o,ae!==null?r=0:(de=null,pe=0,r=ie)}if(r!==0){if(r===2&&(o=Rn(e),o!==0&&(a=o,r=di(e,o))),r===1)throw t=ha,Gr(e,0),kr(e,a),ze(e,re()),t;if(r===6)kr(e,a);else{if(o=e.current.alternate,!(a&30)&&!dm(o)&&(r=ko(e,a),r===2&&(i=Rn(e),i!==0&&(a=i,r=di(e,i))),r===1))throw t=ha,Gr(e,0),kr(e,a),ze(e,re()),t;switch(e.finishedWork=o,e.finishedLanes=a,r){case 0:case 1:throw Error(j(345));case 2:Or(e,Ce,lr);break;case 3:if(kr(e,a),(a&130023424)===a&&(r=Zi+500-re(),10<r)){if(ao(e,0)!==0)break;if(o=e.suspendedLanes,(o&a)!==a){je(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Vn(Or.bind(null,e,Ce,lr),r);break}Or(e,Ce,lr);break;case 4:if(kr(e,a),(a&4194240)===a)break;for(r=e.eventTimes,o=-1;0<a;){var l=31-Xe(a);i=1<<l,l=r[l],l>o&&(o=l),a&=~i}if(a=o,a=re()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*cm(a/1960))-a,10<a){e.timeoutHandle=Vn(Or.bind(null,e,Ce,lr),a);break}Or(e,Ce,lr);break;case 5:Or(e,Ce,lr);break;default:throw Error(j(329))}}}return ze(e,re()),e.callbackNode===t?_d.bind(null,e):null}function di(e,r){var t=Jt;return e.current.memoizedState.isDehydrated&&(Gr(e,r).flags|=256),e=ko(e,r),e!==2&&(r=Ce,Ce=t,r!==null&&ui(r)),e}function ui(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function dm(e){for(var r=e;;){if(r.flags&16384){var t=r.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var o=t[a],i=o.getSnapshot;o=o.value;try{if(!er(i(),o))return!1}catch{return!1}}}if(t=r.child,r.subtreeFlags&16384&&t!==null)t.return=r,r=t;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function kr(e,r){for(r&=~Ji,r&=~Lo,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var t=31-Xe(r),a=1<<t;e[t]=-1,r&=~a}}function fs(e){if($&6)throw Error(j(327));bt();var r=ao(e,0);if(!(r&1))return ze(e,re()),null;var t=ko(e,r);if(e.tag!==0&&t===2){var a=Rn(e);a!==0&&(r=a,t=di(e,a))}if(t===1)throw t=ha,Gr(e,0),kr(e,r),ze(e,re()),t;if(t===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Or(e,Ce,lr),ze(e,re()),null}function el(e,r){var t=$;$|=1;try{return e(r)}finally{$=t,$===0&&(Nt=re()+500,Ao&&Lr())}}function Jr(e){Ir!==null&&Ir.tag===0&&!($&6)&&bt();var r=$;$|=1;var t=He.transition,a=U;try{if(He.transition=null,U=1,e)return e()}finally{U=a,He.transition=t,$=r,!($&6)&&Lr()}}function rl(){Ae=mt.current,Q(mt)}function Gr(e,r){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Op(t)),ae!==null)for(t=ae.return;t!==null;){var a=t;switch(Fi(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&so();break;case 3:It(),Q(_e),Q(ye),Vi();break;case 5:Hi(a);break;case 4:It();break;case 13:Q(X);break;case 19:Q(X);break;case 10:Bi(a.type._context);break;case 22:case 23:rl()}t=t.return}if(de=e,ae=e=Mr(e.current,null),pe=Ae=r,ie=0,ha=null,Ji=Lo=Xr=0,Ce=Jt=null,Ur!==null){for(r=0;r<Ur.length;r++)if(t=Ur[r],a=t.interleaved,a!==null){t.interleaved=null;var o=a.next,i=t.pending;if(i!==null){var l=i.next;i.next=o,a.next=l}t.pending=a}Ur=null}return e}function Pd(e,r){do{var t=ae;try{if(Di(),Wa.current=vo,xo){for(var a=J.memoizedState;a!==null;){var o=a.queue;o!==null&&(o.pending=null),a=a.next}xo=!1}if(Yr=0,se=ne=J=null,Yt=!1,ma=0,Xi.current=null,t===null||t.return===null){ie=1,ha=r,ae=null;break}e:{var i=e,l=t.return,s=t,c=r;if(r=pe,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var p=c,g=s,b=g.tag;if(!(g.mode&1)&&(b===0||b===11||b===15)){var x=g.alternate;x?(g.updateQueue=x.updateQueue,g.memoizedState=x.memoizedState,g.lanes=x.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=rs(l);if(v!==null){v.flags&=-257,ts(v,l,s,i,r),v.mode&1&&es(i,p,r),r=v,c=p;var w=r.updateQueue;if(w===null){var k=new Set;k.add(c),r.updateQueue=k}else w.add(c);break e}else{if(!(r&1)){es(i,p,r),tl();break e}c=Error(j(426))}}else if(Y&&s.mode&1){var N=rs(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),ts(N,l,s,i,r),Ri(St(c,s));break e}}i=c=St(c,s),ie!==4&&(ie=2),Jt===null?Jt=[i]:Jt.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,r&=-r,i.lanes|=r;var u=md(i,c,r);Kl(i,u);break e;case 1:s=c;var d=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Pr===null||!Pr.has(m)))){i.flags|=65536,r&=-r,i.lanes|=r;var h=fd(i,s,r);Kl(i,h);break e}}i=i.return}while(i!==null)}Ad(t)}catch(C){r=C,ae===t&&t!==null&&(ae=t=t.return);continue}break}while(!0)}function zd(){var e=bo.current;return bo.current=vo,e===null?vo:e}function tl(){(ie===0||ie===3||ie===2)&&(ie=4),de===null||!(Xr&268435455)&&!(Lo&268435455)||kr(de,pe)}function ko(e,r){var t=$;$|=2;var a=zd();(de!==e||pe!==r)&&(lr=null,Gr(e,r));do try{um();break}catch(o){Pd(e,o)}while(!0);if(Di(),$=t,bo.current=a,ae!==null)throw Error(j(261));return de=null,pe=0,ie}function um(){for(;ae!==null;)Md(ae)}function pm(){for(;ae!==null&&!Lu();)Md(ae)}function Md(e){var r=Fd(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,r===null?Ad(e):ae=r,Xi.current=null}function Ad(e){var r=e;do{var t=r.alternate;if(e=r.return,r.flags&32768){if(t=nm(t,r),t!==null){t.flags&=32767,ae=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,ae=null;return}}else if(t=om(t,r,Ae),t!==null){ae=t;return}if(r=r.sibling,r!==null){ae=r;return}ae=r=e}while(r!==null);ie===0&&(ie=5)}function Or(e,r,t){var a=U,o=He.transition;try{He.transition=null,U=1,mm(e,r,t,a)}finally{He.transition=o,U=a}return null}function mm(e,r,t,a){do bt();while(Ir!==null);if($&6)throw Error(j(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Wu(e,i),e===de&&(ae=de=null,pe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ba||(Ba=!0,Rd(to,function(){return bt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=He.transition,He.transition=null;var l=U;U=1;var s=$;$|=4,Xi.current=null,lm(e,t),Cd(t,e),Ap(Un),oo=!!$n,Un=$n=null,e.current=t,sm(t),Du(),$=s,U=l,He.transition=i}else e.current=t;if(Ba&&(Ba=!1,Ir=e,wo=o),i=e.pendingLanes,i===0&&(Pr=null),$u(t.stateNode),ze(e,re()),r!==null)for(a=e.onRecoverableError,t=0;t<r.length;t++)o=r[t],a(o.value,{componentStack:o.stack,digest:o.digest});if(yo)throw yo=!1,e=si,si=null,e;return wo&1&&e.tag!==0&&bt(),i=e.pendingLanes,i&1?e===ci?Zt++:(Zt=0,ci=e):Zt=0,Lr(),null}function bt(){if(Ir!==null){var e=mc(wo),r=He.transition,t=U;try{if(He.transition=null,U=16>e?16:e,Ir===null)var a=!1;else{if(e=Ir,Ir=null,wo=0,$&6)throw Error(j(331));var o=$;for($|=4,M=e.current;M!==null;){var i=M,l=i.child;if(M.flags&16){var s=i.deletions;if(s!==null){for(var c=0;c<s.length;c++){var p=s[c];for(M=p;M!==null;){var g=M;switch(g.tag){case 0:case 11:case 15:Xt(8,g,i)}var b=g.child;if(b!==null)b.return=g,M=b;else for(;M!==null;){g=M;var x=g.sibling,v=g.return;if(Id(g),g===p){M=null;break}if(x!==null){x.return=v,M=x;break}M=v}}}var w=i.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var N=k.sibling;k.sibling=null,k=N}while(k!==null)}}M=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,M=l;else e:for(;M!==null;){if(i=M,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Xt(9,i,i.return)}var u=i.sibling;if(u!==null){u.return=i.return,M=u;break e}M=i.return}}var d=e.current;for(M=d;M!==null;){l=M;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,M=m;else e:for(l=d;M!==null;){if(s=M,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ro(9,s)}}catch(C){ee(s,s.return,C)}if(s===l){M=null;break e}var h=s.sibling;if(h!==null){h.return=s.return,M=h;break e}M=s.return}}if($=o,Lr(),nr&&typeof nr.onPostCommitFiberRoot=="function")try{nr.onPostCommitFiberRoot(Eo,e)}catch{}a=!0}return a}finally{U=t,He.transition=r}}return!1}function gs(e,r,t){r=St(t,r),r=md(e,r,1),e=_r(e,r,1),r=je(),e!==null&&(ba(e,1,r),ze(e,r))}function ee(e,r,t){if(e.tag===3)gs(e,e,t);else for(;r!==null;){if(r.tag===3){gs(r,e,t);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Pr===null||!Pr.has(a))){e=St(t,e),e=fd(r,e,1),r=_r(r,e,1),e=je(),r!==null&&(ba(r,1,e),ze(r,e));break}}r=r.return}}function fm(e,r,t){var a=e.pingCache;a!==null&&a.delete(r),r=je(),e.pingedLanes|=e.suspendedLanes&t,de===e&&(pe&t)===t&&(ie===4||ie===3&&(pe&130023424)===pe&&500>re()-Zi?Gr(e,0):Ji|=t),ze(e,r)}function Td(e,r){r===0&&(e.mode&1?(r=_a,_a<<=1,!(_a&130023424)&&(_a=4194304)):r=1);var t=je();e=gr(e,r),e!==null&&(ba(e,r,t),ze(e,t))}function gm(e){var r=e.memoizedState,t=0;r!==null&&(t=r.retryLane),Td(e,t)}function hm(e,r){var t=0;switch(e.tag){case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(j(314))}a!==null&&a.delete(r),Td(e,t)}var Fd;Fd=function(e,r,t){if(e!==null)if(e.memoizedProps!==r.pendingProps||_e.current)Ee=!0;else{if(!(e.lanes&t)&&!(r.flags&128))return Ee=!1,am(e,r,t);Ee=!!(e.flags&131072)}else Ee=!1,Y&&r.flags&1048576&&Bc(r,po,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;Qa(e,r),e=r.pendingProps;var o=wt(r,ye.current);vt(r,t),o=qi(null,r,a,e,o,t);var i=Wi();return r.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Pe(a)?(i=!0,co(r)):i=!1,r.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,$i(r),o.updater=Fo,r.stateNode=o,o._reactInternals=r,Xn(r,a,e,t),r=ei(null,r,a,!0,i,t)):(r.tag=0,Y&&i&&Ti(r),ke(null,r,o,t),r=r.child),r;case 16:a=r.elementType;e:{switch(Qa(e,r),e=r.pendingProps,o=a._init,a=o(a._payload),r.type=a,o=r.tag=vm(a),e=Ke(a,e),o){case 0:r=Zn(null,r,a,e,t);break e;case 1:r=ns(null,r,a,e,t);break e;case 11:r=as(null,r,a,e,t);break e;case 14:r=os(null,r,a,Ke(a.type,e),t);break e}throw Error(j(306,a,""))}return r;case 0:return a=r.type,o=r.pendingProps,o=r.elementType===a?o:Ke(a,o),Zn(e,r,a,o,t);case 1:return a=r.type,o=r.pendingProps,o=r.elementType===a?o:Ke(a,o),ns(e,r,a,o,t);case 3:e:{if(vd(r),e===null)throw Error(j(387));a=r.pendingProps,i=r.memoizedState,o=i.element,Gc(e,r),go(r,a,null,t);var l=r.memoizedState;if(a=l.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},r.updateQueue.baseState=i,r.memoizedState=i,r.flags&256){o=St(Error(j(423)),r),r=is(e,r,a,t,o);break e}else if(a!==o){o=St(Error(j(424)),r),r=is(e,r,a,t,o);break e}else for(Te=Er(r.stateNode.containerInfo.firstChild),Fe=r,Y=!0,Ye=null,t=Hc(r,null,a,t),r.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(kt(),a===o){r=hr(e,r,t);break e}ke(e,r,a,t)}r=r.child}return r;case 5:return qc(r),e===null&&Kn(r),a=r.type,o=r.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Hn(a,o)?l=null:i!==null&&Hn(a,i)&&(r.flags|=32),xd(e,r),ke(e,r,l,t),r.child;case 6:return e===null&&Kn(r),null;case 13:return bd(e,r,t);case 4:return Ui(r,r.stateNode.containerInfo),a=r.pendingProps,e===null?r.child=jt(r,null,a,t):ke(e,r,a,t),r.child;case 11:return a=r.type,o=r.pendingProps,o=r.elementType===a?o:Ke(a,o),as(e,r,a,o,t);case 7:return ke(e,r,r.pendingProps,t),r.child;case 8:return ke(e,r,r.pendingProps.children,t),r.child;case 12:return ke(e,r,r.pendingProps.children,t),r.child;case 10:e:{if(a=r.type._context,o=r.pendingProps,i=r.memoizedProps,l=o.value,G(mo,a._currentValue),a._currentValue=l,i!==null)if(er(i.value,l)){if(i.children===o.children&&!_e.current){r=hr(e,r,t);break e}}else for(i=r.child,i!==null&&(i.return=r);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var c=s.firstContext;c!==null;){if(c.context===a){if(i.tag===1){c=pr(-1,t&-t),c.tag=2;var p=i.updateQueue;if(p!==null){p=p.shared;var g=p.pending;g===null?c.next=c:(c.next=g.next,g.next=c),p.pending=c}}i.lanes|=t,c=i.alternate,c!==null&&(c.lanes|=t),Qn(i.return,t,r),s.lanes|=t;break}c=c.next}}else if(i.tag===10)l=i.type===r.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(j(341));l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),Qn(l,t,r),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===r){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ke(e,r,o.children,t),r=r.child}return r;case 9:return o=r.type,a=r.pendingProps.children,vt(r,t),o=Ve(o),a=a(o),r.flags|=1,ke(e,r,a,t),r.child;case 14:return a=r.type,o=Ke(a,r.pendingProps),o=Ke(a.type,o),os(e,r,a,o,t);case 15:return gd(e,r,r.type,r.pendingProps,t);case 17:return a=r.type,o=r.pendingProps,o=r.elementType===a?o:Ke(a,o),Qa(e,r),r.tag=1,Pe(a)?(e=!0,co(r)):e=!1,vt(r,t),pd(r,a,o),Xn(r,a,o,t),ei(null,r,a,!0,e,t);case 19:return yd(e,r,t);case 22:return hd(e,r,t)}throw Error(j(156,r.tag))};function Rd(e,r){return cc(e,r)}function xm(e,r,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,r,t,a){return new xm(e,r,t,a)}function al(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vm(e){if(typeof e=="function")return al(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ki)return 11;if(e===ji)return 14}return 2}function Mr(e,r){var t=e.alternate;return t===null?(t=Ue(e.tag,r,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=r,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,r=e.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ja(e,r,t,a,o,i){var l=2;if(a=e,typeof e=="function")al(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case at:return qr(t.children,o,i,r);case wi:l=8,o|=8;break;case wn:return e=Ue(12,t,r,o|2),e.elementType=wn,e.lanes=i,e;case kn:return e=Ue(13,t,r,o),e.elementType=kn,e.lanes=i,e;case jn:return e=Ue(19,t,r,o),e.elementType=jn,e.lanes=i,e;case qs:return Do(t,o,i,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vs:l=10;break e;case Gs:l=9;break e;case ki:l=11;break e;case ji:l=14;break e;case br:l=16,a=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return r=Ue(l,t,r,o),r.elementType=e,r.type=a,r.lanes=i,r}function qr(e,r,t,a){return e=Ue(7,e,a,r),e.lanes=t,e}function Do(e,r,t,a){return e=Ue(22,e,a,r),e.elementType=qs,e.lanes=t,e.stateNode={isHidden:!1},e}function xn(e,r,t){return e=Ue(6,e,null,r),e.lanes=t,e}function vn(e,r,t){return r=Ue(4,e.children!==null?e.children:[],e.key,r),r.lanes=t,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function bm(e,r,t,a,o){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xo(0),this.expirationTimes=Xo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xo(0),this.identifierPrefix=a,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ol(e,r,t,a,o,i,l,s,c){return e=new bm(e,r,t,s,c),r===1?(r=1,i===!0&&(r|=8)):r=0,i=Ue(3,null,null,r),e.current=i,i.stateNode=e,i.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},$i(i),e}function ym(e,r,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tt,key:a==null?null:""+a,children:e,containerInfo:r,implementation:t}}function Ld(e){if(!e)return Tr;e=e._reactInternals;e:{if(et(e)!==e||e.tag!==1)throw Error(j(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Pe(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(j(171))}if(e.tag===1){var t=e.type;if(Pe(t))return Lc(e,t,r)}return r}function Dd(e,r,t,a,o,i,l,s,c){return e=ol(t,a,!0,e,o,i,l,s,c),e.context=Ld(null),t=e.current,a=je(),o=zr(t),i=pr(a,o),i.callback=r??null,_r(t,i,o),e.current.lanes=o,ba(e,o,a),ze(e,a),e}function Bo(e,r,t,a){var o=r.current,i=je(),l=zr(o);return t=Ld(t),r.context===null?r.context=t:r.pendingContext=t,r=pr(i,l),r.payload={element:e},a=a===void 0?null:a,a!==null&&(r.callback=a),e=_r(o,r,l),e!==null&&(Je(e,o,l,i),qa(e,o,l)),l}function jo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hs(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<r?t:r}}function nl(e,r){hs(e,r),(e=e.alternate)&&hs(e,r)}function wm(){return null}var Bd=typeof reportError=="function"?reportError:function(e){console.error(e)};function il(e){this._internalRoot=e}Oo.prototype.render=il.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(j(409));Bo(e,r,null,null)};Oo.prototype.unmount=il.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Jr(function(){Bo(null,e,null,null)}),r[fr]=null}};function Oo(e){this._internalRoot=e}Oo.prototype.unstable_scheduleHydration=function(e){if(e){var r=hc();e={blockedOn:null,target:e,priority:r};for(var t=0;t<wr.length&&r!==0&&r<wr[t].priority;t++);wr.splice(t,0,e),t===0&&vc(e)}};function ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xs(){}function km(e,r,t,a,o){if(o){if(typeof a=="function"){var i=a;a=function(){var p=jo(l);i.call(p)}}var l=Dd(r,a,e,0,null,!1,!1,"",xs);return e._reactRootContainer=l,e[fr]=l.current,sa(e.nodeType===8?e.parentNode:e),Jr(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof a=="function"){var s=a;a=function(){var p=jo(c);s.call(p)}}var c=ol(e,0,!1,null,null,!1,!1,"",xs);return e._reactRootContainer=c,e[fr]=c.current,sa(e.nodeType===8?e.parentNode:e),Jr(function(){Bo(r,c,t,a)}),c}function Uo(e,r,t,a,o){var i=t._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var c=jo(l);s.call(c)}}Bo(r,l,e,o)}else l=km(t,r,e,o,a);return jo(l)}fc=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var t=Ut(r.pendingLanes);t!==0&&(Ni(r,t|1),ze(r,re()),!($&6)&&(Nt=re()+500,Lr()))}break;case 13:Jr(function(){var a=gr(e,1);if(a!==null){var o=je();Je(a,e,1,o)}}),nl(e,1)}};Ci=function(e){if(e.tag===13){var r=gr(e,134217728);if(r!==null){var t=je();Je(r,e,134217728,t)}nl(e,134217728)}};gc=function(e){if(e.tag===13){var r=zr(e),t=gr(e,r);if(t!==null){var a=je();Je(t,e,r,a)}nl(e,r)}};hc=function(){return U};xc=function(e,r){var t=U;try{return U=e,r()}finally{U=t}};An=function(e,r,t){switch(r){case"input":if(Nn(e,t),r=t.name,t.type==="radio"&&r!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<t.length;r++){var a=t[r];if(a!==e&&a.form===e.form){var o=Mo(a);if(!o)throw Error(j(90));Ks(a),Nn(a,o)}}}break;case"textarea":Ys(e,t);break;case"select":r=t.value,r!=null&&ft(e,!!t.multiple,r,!1)}};ac=el;oc=Jr;var jm={usingClientEntryPoint:!1,Events:[wa,lt,Mo,rc,tc,el]},Bt={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Im={bundleType:Bt.bundleType,version:Bt.version,rendererPackageName:Bt.rendererPackageName,rendererConfig:Bt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lc(e),e===null?null:e.stateNode},findFiberByHostInstance:Bt.findFiberByHostInstance||wm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oa.isDisabled&&Oa.supportsFiber)try{Eo=Oa.inject(Im),nr=Oa}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jm;Le.createPortal=function(e,r){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ll(r))throw Error(j(200));return ym(e,r,null,t)};Le.createRoot=function(e,r){if(!ll(e))throw Error(j(299));var t=!1,a="",o=Bd;return r!=null&&(r.unstable_strictMode===!0&&(t=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),r=ol(e,1,!1,null,null,t,!1,a,o),e[fr]=r.current,sa(e.nodeType===8?e.parentNode:e),new il(r)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=lc(r),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return Jr(e)};Le.hydrate=function(e,r,t){if(!$o(r))throw Error(j(200));return Uo(null,e,r,!0,t)};Le.hydrateRoot=function(e,r,t){if(!ll(e))throw Error(j(405));var a=t!=null&&t.hydratedSources||null,o=!1,i="",l=Bd;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),r=Dd(r,null,e,1,t??null,o,!1,i,l),e[fr]=r.current,sa(e),a)for(e=0;e<a.length;e++)t=a[e],o=t._getVersion,o=o(t._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[t,o]:r.mutableSourceEagerHydrationData.push(t,o);return new Oo(r)};Le.render=function(e,r,t){if(!$o(r))throw Error(j(200));return Uo(null,e,r,!1,t)};Le.unmountComponentAtNode=function(e){if(!$o(e))throw Error(j(40));return e._reactRootContainer?(Jr(function(){Uo(null,null,e,!1,function(){e._reactRootContainer=null,e[fr]=null})}),!0):!1};Le.unstable_batchedUpdates=el;Le.unstable_renderSubtreeIntoContainer=function(e,r,t,a){if(!$o(t))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Uo(e,r,t,!1,a)};Le.version="18.3.1-next-f1338f8080-20240426";function Od(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Od)}catch(e){console.error(e)}}Od(),Os.exports=Le;var $d=Os.exports,vs=$d;vs.createRoot,vs.hydrateRoot;const Io={pdf:{label:"PDF",icon:"📄",color:"#ef4444",bg:"rgba(239,68,68,0.1)",border:"rgba(239,68,68,0.25)"},word:{label:"Word",icon:"📝",color:"#2563eb",bg:"rgba(37,99,235,0.1)",border:"rgba(37,99,235,0.25)"},ppt:{label:"PPT",icon:"📊",color:"#d97706",bg:"rgba(217,119,6,0.1)",border:"rgba(217,119,6,0.25)"},excel:{label:"Excel",icon:"📈",color:"#16a34a",bg:"rgba(22,163,74,0.1)",border:"rgba(22,163,74,0.25)"},imagen:{label:"Imagen",icon:"🖼️",color:"#7c3aed",bg:"rgba(124,58,237,0.1)",border:"rgba(124,58,237,0.25)"},zip:{label:"ZIP",icon:"🗜️",color:"#6b7280",bg:"rgba(107,114,128,0.1)",border:"rgba(107,114,128,0.25)"}},A={algoritmos:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",sql:"https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",software:"https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&q=80",programacion:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",redes:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",ia:"https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",ciberseguridad:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",calculo:"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",estadistica:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",estructuras:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",arquitectura:"https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",diseno_interiores:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",construccion:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",produccion:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",minas:"https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?w=800&q=80",ambiental:"https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80",mecatronica:"https://images.unsplash.com/photo-1561144257-e32e8506c92b?w=800&q=80",marketing:"https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",economia:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",ecommerce:"https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",contabilidad:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",finanzas:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",rrhh:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",gestion_publica:"https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=800&q=80",negocios_int:"https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",gestion:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",auditoria:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",anatomia:"https://images.unsplash.com/photo-1530210124550-912dc1381cb8?w=800&q=80",histologia:"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",farmacologia:"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",enfermeria:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",odontologia:"https://images.unsplash.com/photo-1588776814546-1ffbb5d7d2a6?w=800&q=80",farmacia:"https://images.unsplash.com/photo-1563213126-a4273aed2016?w=800&q=80",terapia_fisica:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",laboratorio:"https://images.unsplash.com/photo-1587613865763-4b8b0d19d80f?w=800&q=80",radiologia:"https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80",derecho:"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",derecho2:"https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80",psicologia:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",neurociencia:"https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",comunicacion:"https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",educacion:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",innovacion_educ:"https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80"},I={calculo:"https://arxiv.org/pdf/math/0602132",algoritmos:"https://arxiv.org/pdf/1811.00710",redes:"https://arxiv.org/pdf/1903.10982",ia:"https://arxiv.org/pdf/1702.01412",ml:"https://arxiv.org/pdf/2108.09830",ciberseguridad:"https://arxiv.org/pdf/2001.07213",bd:"https://arxiv.org/pdf/1903.12287",estructuras:"https://arxiv.org/pdf/1905.02984",geotecnia:"https://arxiv.org/pdf/2001.05506",ambiental:"https://arxiv.org/pdf/1911.09071",agua:"https://arxiv.org/pdf/2103.01936",manufactura:"https://arxiv.org/pdf/1908.01507",logistica:"https://arxiv.org/pdf/2012.09214",mineria:"https://arxiv.org/pdf/1906.05433",economia:"https://arxiv.org/pdf/2109.14729",marketing:"https://arxiv.org/pdf/2005.12566",gestion:"https://arxiv.org/pdf/1911.09071",finanzas:"https://arxiv.org/pdf/2003.01901",contabilidad:"https://arxiv.org/pdf/2101.09076",rrhh:"https://arxiv.org/pdf/2104.09865",comercio_int:"https://arxiv.org/pdf/2103.03644",medicina:"https://arxiv.org/pdf/2101.09076",farmacologia:"https://arxiv.org/pdf/2009.13570",salud_publica:"https://arxiv.org/pdf/2005.08587",bioquimica:"https://arxiv.org/pdf/1911.08265",radiologia_img:"https://arxiv.org/pdf/2105.04906",terapia_fisica_p:"https://arxiv.org/pdf/2104.09865",derecho:"https://arxiv.org/pdf/1911.09071",derechos_hum:"https://arxiv.org/pdf/2003.01901",psicologia:"https://arxiv.org/pdf/2101.07810",neurociencia:"https://arxiv.org/pdf/1905.10985",comunicacion:"https://arxiv.org/pdf/2105.11084",educacion_digital:"https://arxiv.org/pdf/2104.09865",generico:"https://arxiv.org/pdf/1706.03762",generico2:"https://arxiv.org/pdf/2005.14165"},Ze=[{id:1,nombre:"Facultad de Ciencias de la Empresa",color:"#4f46e5",icono:"💼"},{id:2,nombre:"Facultad de Ingeniería",color:"#0891b2",icono:"🔧"},{id:3,nombre:"Facultad de Ciencias de la Salud",color:"#16a34a",icono:"🩺"},{id:4,nombre:"Facultad de Derecho",color:"#d97706",icono:"⚖️"},{id:5,nombre:"Facultad de Psicología",color:"#7c3aed",icono:"🧠"},{id:6,nombre:"Facultad de Ciencias Sociales y Humanidades",color:"#be185d",icono:"🎓"}],ce=[{id:1,nombre:"Administración",codigo:"ADM",facultadId:1,ciclos:10,color:"#4f46e5"},{id:2,nombre:"Administración y Finanzas",codigo:"AFI",facultadId:1,ciclos:10,color:"#4338ca"},{id:3,nombre:"Administración y Gestión del Talento Humano",codigo:"AGT",facultadId:1,ciclos:10,color:"#6366f1"},{id:4,nombre:"Administración y Gestión Pública",codigo:"AGP",facultadId:1,ciclos:10,color:"#818cf8"},{id:5,nombre:"Administración y Marketing",codigo:"AMK",facultadId:1,ciclos:10,color:"#a5b4fc"},{id:6,nombre:"Administración y Negocios Digitales",codigo:"AND",facultadId:1,ciclos:10,color:"#3730a3"},{id:7,nombre:"Administración y Negocios Internacionales",codigo:"ANI",facultadId:1,ciclos:10,color:"#312e81"},{id:8,nombre:"Contabilidad y Finanzas",codigo:"COF",facultadId:1,ciclos:10,color:"#dc2626"},{id:9,nombre:"Economía",codigo:"ECO",facultadId:1,ciclos:10,color:"#b91c1c"},{id:10,nombre:"Arquitectura",codigo:"ARQ",facultadId:2,ciclos:10,color:"#92400e"},{id:11,nombre:"Arquitectura y Diseño de Interiores",codigo:"ADI",facultadId:2,ciclos:10,color:"#b45309"},{id:12,nombre:"Ciencia de la Computación",codigo:"CCO",facultadId:2,ciclos:10,color:"#0891b2"},{id:13,nombre:"Ingeniería Ambiental",codigo:"IAM",facultadId:2,ciclos:10,color:"#15803d"},{id:14,nombre:"Ingeniería Civil",codigo:"ICI",facultadId:2,ciclos:10,color:"#155e75"},{id:15,nombre:"Ingeniería de Minas",codigo:"IMN",facultadId:2,ciclos:10,color:"#7c3aed"},{id:16,nombre:"Ingeniería de Sistemas e Informática",codigo:"ISI",facultadId:2,ciclos:10,color:"#0284c7"},{id:17,nombre:"Ingeniería Eléctrica",codigo:"IEL",facultadId:2,ciclos:10,color:"#0e7490"},{id:18,nombre:"Ingeniería Empresarial",codigo:"IEM",facultadId:2,ciclos:10,color:"#6d28d9"},{id:19,nombre:"Ingeniería Industrial",codigo:"IIN",facultadId:2,ciclos:10,color:"#1d4ed8"},{id:20,nombre:"Ingeniería Mecánica",codigo:"IMC",facultadId:2,ciclos:10,color:"#1e40af"},{id:21,nombre:"Ingeniería Mecatrónica",codigo:"IMT",facultadId:2,ciclos:10,color:"#06b6d4"},{id:22,nombre:"Medicina Humana",codigo:"MED",facultadId:3,ciclos:12,color:"#16a34a"},{id:23,nombre:"Enfermería",codigo:"ENF",facultadId:3,ciclos:10,color:"#15803d"},{id:24,nombre:"Odontología",codigo:"ODO",facultadId:3,ciclos:10,color:"#14532d"},{id:25,nombre:"Farmacia y Bioquímica",codigo:"FAB",facultadId:3,ciclos:10,color:"#047857"},{id:26,nombre:"Tecnología Médica – Terapia Física y Rehabilitación",codigo:"TMT",facultadId:3,ciclos:10,color:"#065f46"},{id:27,nombre:"Tecnología Médica – Laboratorio Clínico y Anatomía Patológica",codigo:"TML",facultadId:3,ciclos:10,color:"#0f766e"},{id:28,nombre:"Tecnología Médica – Radiología",codigo:"TMR",facultadId:3,ciclos:10,color:"#134e4a"},{id:29,nombre:"Derecho",codigo:"DER",facultadId:4,ciclos:10,color:"#d97706"},{id:30,nombre:"Psicología",codigo:"PSI",facultadId:5,ciclos:10,color:"#7c3aed"},{id:31,nombre:"Ciencias de la Comunicación",codigo:"CCC",facultadId:6,ciclos:10,color:"#be185d"},{id:32,nombre:"Educación con Especialidad en Innovación y Aprendizaje Digital",codigo:"EIA",facultadId:6,ciclos:10,color:"#9d174d"}],Wr=[{id:1,nombre:"Ing. Miguel Ángel Quispe Poma",area:"Ingeniería de Software y Algoritmos",carreraId:16,rating:4.8,apuntes:18,foto:null,iniciales:"MQ"},{id:2,nombre:"Ing. Rebeca Torres Lazo",area:"Redes y Base de Datos",carreraId:16,rating:4.6,apuntes:12,foto:null,iniciales:"RT"},{id:3,nombre:"Mg. Fernando Huanca Ríos",area:"Ciberseguridad e IA",carreraId:12,rating:4.7,apuntes:9,foto:null,iniciales:"FH"},{id:4,nombre:"Dr. Julio César Apaza Vega",area:"Ciencias Exactas e Industrial",carreraId:19,rating:4.9,apuntes:22,foto:null,iniciales:"JA"},{id:5,nombre:"Mg. Sandra Villanueva Cruz",area:"Gestión Industrial y Calidad",carreraId:19,rating:4.5,apuntes:10,foto:null,iniciales:"SV"},{id:6,nombre:"Ing. Roberto Palomino Asto",area:"Estructuras y Construcción",carreraId:14,rating:4.7,apuntes:14,foto:null,iniciales:"RP"},{id:7,nombre:"Mg. Valeria Contreras Medina",area:"Marketing Digital y Negocios",carreraId:5,rating:4.8,apuntes:16,foto:null,iniciales:"VC"},{id:8,nombre:"Dr. Carlos Mendoza Ríos",area:"Economía y Finanzas",carreraId:9,rating:4.8,apuntes:13,foto:null,iniciales:"CM"},{id:9,nombre:"Mg. Andrea Solís Paredes",area:"Gestión de Proyectos y Emprendimiento",carreraId:6,rating:4.6,apuntes:8,foto:null,iniciales:"AS"},{id:10,nombre:"CPC Patricia Flores Rojas",area:"Contabilidad General y Costos",carreraId:8,rating:4.5,apuntes:11,foto:null,iniciales:"PF"},{id:11,nombre:"Mg. Luis Tello Huamán",area:"Auditoría y Finanzas Corporativas",carreraId:8,rating:4.6,apuntes:7,foto:null,iniciales:"LT"},{id:12,nombre:"Dr. Luis Vargas Castillo",area:"Derecho Civil y Laboral",carreraId:29,rating:4.7,apuntes:15,foto:null,iniciales:"LV"},{id:13,nombre:"Mg. Claudia Ríos Espinoza",area:"Derecho Constitucional y Penal",carreraId:29,rating:4.9,apuntes:20,foto:null,iniciales:"CR"},{id:14,nombre:"Dr. Ricardo Huamán Porras",area:"Anatomía y Ciencias Básicas – Medicina",carreraId:22,rating:4.9,apuntes:25,foto:null,iniciales:"RH"},{id:15,nombre:"Dra. Mariana Landa Castañeda",area:"Fisiología, Bioquímica y Farmacología",carreraId:22,rating:4.8,apuntes:19,foto:null,iniciales:"ML"},{id:16,nombre:"Ps. Diana Quispe Rosales",area:"Psicología Clínica y Neurociencias",carreraId:30,rating:4.7,apuntes:11,foto:null,iniciales:"DQ"},{id:17,nombre:"Mg. Jorge Tapia Mendoza",area:"Recursos Humanos y Comportamiento Org.",carreraId:3,rating:4.6,apuntes:9,foto:null,iniciales:"JT"},{id:18,nombre:"Mg. Rosa Elena Cárdenas Vera",area:"Gestión Pública y Políticas de Estado",carreraId:4,rating:4.5,apuntes:8,foto:null,iniciales:"RC"},{id:19,nombre:"Dr. Alberto Salas Huanca",area:"Comercio Exterior y Negocios Globales",carreraId:7,rating:4.7,apuntes:10,foto:null,iniciales:"AS"},{id:20,nombre:"Arq. Carmen Delgado Meza",area:"Diseño Arquitectónico y Urbanismo",carreraId:10,rating:4.8,apuntes:13,foto:null,iniciales:"CD"},{id:21,nombre:"Arq. Héctor Llanos Quispe",area:"Diseño de Interiores y BIM",carreraId:11,rating:4.6,apuntes:11,foto:null,iniciales:"HL"},{id:22,nombre:"Mg. Ana Lucía Poma Torres",area:"Gestión Ambiental y SGA",carreraId:13,rating:4.7,apuntes:12,foto:null,iniciales:"AP"},{id:23,nombre:"Ing. César Villafuerte Lara",area:"Explotación Minera y Seguridad",carreraId:15,rating:4.6,apuntes:10,foto:null,iniciales:"CV"},{id:24,nombre:"Ing. Pablo Rojas Ccencho",area:"Mecánica de Fluidos y Termodinámica",carreraId:20,rating:4.7,apuntes:8,foto:null,iniciales:"PR"},{id:25,nombre:"Mg. Víctor Soto Medina",area:"Robótica y Automatización",carreraId:21,rating:4.8,apuntes:11,foto:null,iniciales:"VS"},{id:26,nombre:"Ing. Marco Ticse Flores",area:"Circuitos Eléctricos y Sistemas de Potencia",carreraId:17,rating:4.6,apuntes:9,foto:null,iniciales:"MT"},{id:27,nombre:"Lic. Enf. Norma Huamaní Segura",area:"Enfermería Clínica y Cuidados Intensivos",carreraId:23,rating:4.7,apuntes:14,foto:null,iniciales:"NH"},{id:28,nombre:"Mg. Odont. Paola Berrocal Arias",area:"Odontología Restauradora y Periodoncia",carreraId:24,rating:4.8,apuntes:10,foto:null,iniciales:"PB"},{id:29,nombre:"Q.F. Rodrigo Mamani Quispe",area:"Farmacotecnia y Bioquímica Clínica",carreraId:25,rating:4.7,apuntes:9,foto:null,iniciales:"RM"},{id:30,nombre:"Tec. Med. Lucía Condori Huanca",area:"Terapia Física y Biomecánica",carreraId:26,rating:4.6,apuntes:8,foto:null,iniciales:"LC"},{id:31,nombre:"Tec. Med. Carlos Ore Huamán",area:"Laboratorio Clínico y Hematología",carreraId:27,rating:4.5,apuntes:7,foto:null,iniciales:"CO"},{id:32,nombre:"Tec. Med. Silvia Paucar Valenzuela",area:"Radiología e Imagen Diagnóstica",carreraId:28,rating:4.7,apuntes:9,foto:null,iniciales:"SP"},{id:33,nombre:"Lic. Gabriela Núñez Arroyo",area:"Periodismo Digital y Comunicación Estratégica",carreraId:31,rating:4.7,apuntes:10,foto:null,iniciales:"GN"},{id:34,nombre:"Mg. Enrique Sánchez Palacios",area:"Tecnología Educativa e Innovación Pedagógica",carreraId:32,rating:4.8,apuntes:9,foto:null,iniciales:"ES"}],be=[{id:1,nombre:"Programación Funcional",codigo:"CCO-301",carreraId:12,ciclo:3,creditos:4,docenteId:3,color:"#0891b2"},{id:2,nombre:"Inteligencia Artificial Avanzada",codigo:"CCO-601",carreraId:12,ciclo:6,creditos:5,docenteId:3,color:"#0891b2"},{id:3,nombre:"Computación Paralela",codigo:"CCO-701",carreraId:12,ciclo:7,creditos:4,docenteId:3,color:"#0891b2"},{id:4,nombre:"Algoritmos y Programación",codigo:"ISI-101",carreraId:16,ciclo:1,creditos:4,docenteId:1,color:"#0284c7"},{id:5,nombre:"Fundamentos de Base de Datos",codigo:"ISI-201",carreraId:16,ciclo:2,creditos:4,docenteId:2,color:"#0284c7"},{id:6,nombre:"Estructuras de Datos",codigo:"ISI-301",carreraId:16,ciclo:3,creditos:5,docenteId:1,color:"#0284c7"},{id:7,nombre:"Ingeniería de Software",codigo:"ISI-401",carreraId:16,ciclo:4,creditos:4,docenteId:1,color:"#0284c7"},{id:8,nombre:"Redes y Comunicaciones",codigo:"ISI-402",carreraId:16,ciclo:4,creditos:4,docenteId:2,color:"#0284c7"},{id:9,nombre:"Inteligencia Artificial",codigo:"ISI-601",carreraId:16,ciclo:6,creditos:4,docenteId:3,color:"#0284c7"},{id:10,nombre:"Seguridad Informática",codigo:"ISI-701",carreraId:16,ciclo:7,creditos:4,docenteId:3,color:"#0284c7"},{id:11,nombre:"Cálculo Diferencial",codigo:"IIN-101",carreraId:19,ciclo:1,creditos:5,docenteId:4,color:"#1d4ed8"},{id:12,nombre:"Estadística Aplicada",codigo:"IIN-201",carreraId:19,ciclo:2,creditos:4,docenteId:4,color:"#1d4ed8"},{id:13,nombre:"Investigación Operativa",codigo:"IIN-301",carreraId:19,ciclo:3,creditos:4,docenteId:5,color:"#1d4ed8"},{id:14,nombre:"Gestión de la Producción",codigo:"IIN-401",carreraId:19,ciclo:4,creditos:4,docenteId:5,color:"#1d4ed8"},{id:15,nombre:"Gestión de Calidad Total",codigo:"IIN-501",carreraId:19,ciclo:5,creditos:4,docenteId:4,color:"#1d4ed8"},{id:16,nombre:"Logística y Cadena de Suministro",codigo:"IIN-601",carreraId:19,ciclo:6,creditos:4,docenteId:5,color:"#1d4ed8"},{id:17,nombre:"Mecánica de Suelos",codigo:"ICI-301",carreraId:14,ciclo:3,creditos:4,docenteId:6,color:"#155e75"},{id:18,nombre:"Análisis Estructural",codigo:"ICI-401",carreraId:14,ciclo:4,creditos:5,docenteId:6,color:"#155e75"},{id:19,nombre:"Diseño en Concreto Armado",codigo:"ICI-601",carreraId:14,ciclo:6,creditos:5,docenteId:6,color:"#155e75"},{id:20,nombre:"Hidráulica e Hidrología",codigo:"ICI-501",carreraId:14,ciclo:5,creditos:4,docenteId:6,color:"#155e75"},{id:21,nombre:"Diseño Arquitectónico I",codigo:"ARQ-101",carreraId:10,ciclo:1,creditos:5,docenteId:20,color:"#92400e"},{id:22,nombre:"Historia de la Arquitectura",codigo:"ARQ-201",carreraId:10,ciclo:2,creditos:3,docenteId:20,color:"#92400e"},{id:23,nombre:"Urbanismo y Planificación",codigo:"ARQ-501",carreraId:10,ciclo:5,creditos:4,docenteId:20,color:"#92400e"},{id:24,nombre:"Diseño de Interiores I",codigo:"ADI-201",carreraId:11,ciclo:2,creditos:5,docenteId:21,color:"#b45309"},{id:25,nombre:"Iluminación y Color en Interiores",codigo:"ADI-401",carreraId:11,ciclo:4,creditos:4,docenteId:21,color:"#b45309"},{id:26,nombre:"Gestión Ambiental",codigo:"IAM-301",carreraId:13,ciclo:3,creditos:4,docenteId:22,color:"#15803d"},{id:27,nombre:"Evaluación de Impacto Ambiental",codigo:"IAM-501",carreraId:13,ciclo:5,creditos:4,docenteId:22,color:"#15803d"},{id:28,nombre:"Tratamiento de Aguas Residuales",codigo:"IAM-401",carreraId:13,ciclo:4,creditos:4,docenteId:22,color:"#15803d"},{id:29,nombre:"Geomecánica",codigo:"IMN-301",carreraId:15,ciclo:3,creditos:4,docenteId:23,color:"#7c3aed"},{id:30,nombre:"Ventilación de Minas",codigo:"IMN-501",carreraId:15,ciclo:5,creditos:4,docenteId:23,color:"#7c3aed"},{id:31,nombre:"Seguridad y Salud Minera",codigo:"IMN-601",carreraId:15,ciclo:6,creditos:4,docenteId:23,color:"#7c3aed"},{id:32,nombre:"Mecánica de Fluidos",codigo:"IMC-301",carreraId:20,ciclo:3,creditos:4,docenteId:24,color:"#1e40af"},{id:33,nombre:"Termodinámica",codigo:"IMC-401",carreraId:20,ciclo:4,creditos:4,docenteId:24,color:"#1e40af"},{id:34,nombre:"Robótica Industrial",codigo:"IMT-501",carreraId:21,ciclo:5,creditos:4,docenteId:25,color:"#06b6d4"},{id:35,nombre:"Control Automático",codigo:"IMT-401",carreraId:21,ciclo:4,creditos:4,docenteId:25,color:"#06b6d4"},{id:36,nombre:"Circuitos Eléctricos I",codigo:"IEL-101",carreraId:17,ciclo:1,creditos:4,docenteId:26,color:"#0e7490"},{id:37,nombre:"Sistemas de Potencia",codigo:"IEL-501",carreraId:17,ciclo:5,creditos:4,docenteId:26,color:"#0e7490"},{id:38,nombre:"Gestión por Procesos",codigo:"IEM-301",carreraId:18,ciclo:3,creditos:4,docenteId:9,color:"#6d28d9"},{id:39,nombre:"Transformación Digital",codigo:"IEM-501",carreraId:18,ciclo:5,creditos:4,docenteId:9,color:"#6d28d9"},{id:40,nombre:"Fundamentos de Administración",codigo:"ADM-101",carreraId:1,ciclo:1,creditos:4,docenteId:7,color:"#4f46e5"},{id:41,nombre:"Comportamiento Organizacional",codigo:"ADM-201",carreraId:1,ciclo:2,creditos:4,docenteId:7,color:"#4f46e5"},{id:42,nombre:"Planeamiento Estratégico",codigo:"ADM-501",carreraId:1,ciclo:5,creditos:4,docenteId:7,color:"#4f46e5"},{id:43,nombre:"Matemática Financiera",codigo:"AFI-201",carreraId:2,ciclo:2,creditos:4,docenteId:8,color:"#4338ca"},{id:44,nombre:"Análisis e Interpretación de EEFF",codigo:"AFI-401",carreraId:2,ciclo:4,creditos:4,docenteId:11,color:"#4338ca"},{id:45,nombre:"Gestión de Inversiones",codigo:"AFI-601",carreraId:2,ciclo:6,creditos:4,docenteId:8,color:"#4338ca"},{id:46,nombre:"Reclutamiento y Selección de Personal",codigo:"AGT-301",carreraId:3,ciclo:3,creditos:4,docenteId:17,color:"#6366f1"},{id:47,nombre:"Capacitación y Desarrollo Organizacional",codigo:"AGT-401",carreraId:3,ciclo:4,creditos:4,docenteId:17,color:"#6366f1"},{id:48,nombre:"Compensaciones y Remuneraciones",codigo:"AGT-501",carreraId:3,ciclo:5,creditos:4,docenteId:17,color:"#6366f1"},{id:49,nombre:"Teoría del Estado y Políticas Públicas",codigo:"AGP-201",carreraId:4,ciclo:2,creditos:4,docenteId:18,color:"#818cf8"},{id:50,nombre:"Contrataciones del Estado",codigo:"AGP-401",carreraId:4,ciclo:4,creditos:4,docenteId:18,color:"#818cf8"},{id:51,nombre:"Gestión Municipal y Regional",codigo:"AGP-501",carreraId:4,ciclo:5,creditos:4,docenteId:18,color:"#818cf8"},{id:52,nombre:"Marketing Estratégico",codigo:"AMK-301",carreraId:5,ciclo:3,creditos:4,docenteId:7,color:"#a5b4fc"},{id:53,nombre:"Comportamiento del Consumidor",codigo:"AMK-401",carreraId:5,ciclo:4,creditos:4,docenteId:7,color:"#a5b4fc"},{id:54,nombre:"Investigación de Mercados",codigo:"AMK-501",carreraId:5,ciclo:5,creditos:4,docenteId:7,color:"#a5b4fc"},{id:55,nombre:"Microeconomía",codigo:"AND-201",carreraId:6,ciclo:2,creditos:4,docenteId:8,color:"#3730a3"},{id:56,nombre:"Marketing Digital",codigo:"AND-301",carreraId:6,ciclo:3,creditos:4,docenteId:7,color:"#3730a3"},{id:57,nombre:"Macroeconomía",codigo:"AND-302",carreraId:6,ciclo:3,creditos:4,docenteId:8,color:"#3730a3"},{id:58,nombre:"E-Commerce y Negocios Digitales",codigo:"AND-401",carreraId:6,ciclo:4,creditos:4,docenteId:7,color:"#3730a3"},{id:59,nombre:"Gestión de Proyectos",codigo:"AND-501",carreraId:6,ciclo:5,creditos:4,docenteId:9,color:"#3730a3"},{id:60,nombre:"Comercio Exterior y Aduanas",codigo:"ANI-301",carreraId:7,ciclo:3,creditos:4,docenteId:19,color:"#312e81"},{id:61,nombre:"Negociación Internacional",codigo:"ANI-401",carreraId:7,ciclo:4,creditos:4,docenteId:19,color:"#312e81"},{id:62,nombre:"Logística Internacional",codigo:"ANI-501",carreraId:7,ciclo:5,creditos:4,docenteId:19,color:"#312e81"},{id:63,nombre:"Contabilidad General",codigo:"COF-101",carreraId:8,ciclo:1,creditos:4,docenteId:10,color:"#dc2626"},{id:64,nombre:"Contabilidad de Costos",codigo:"COF-201",carreraId:8,ciclo:2,creditos:4,docenteId:10,color:"#dc2626"},{id:65,nombre:"Contabilidad Financiera",codigo:"COF-301",carreraId:8,ciclo:3,creditos:4,docenteId:11,color:"#dc2626"},{id:66,nombre:"Auditoría Financiera",codigo:"COF-601",carreraId:8,ciclo:6,creditos:4,docenteId:11,color:"#dc2626"},{id:67,nombre:"Microeconomía Avanzada",codigo:"ECO-301",carreraId:9,ciclo:3,creditos:4,docenteId:8,color:"#b91c1c"},{id:68,nombre:"Econometría",codigo:"ECO-501",carreraId:9,ciclo:5,creditos:4,docenteId:8,color:"#b91c1c"},{id:69,nombre:"Economía Peruana y Regional",codigo:"ECO-401",carreraId:9,ciclo:4,creditos:4,docenteId:8,color:"#b91c1c"},{id:70,nombre:"Introducción al Derecho",codigo:"DER-101",carreraId:29,ciclo:1,creditos:4,docenteId:12,color:"#d97706"},{id:71,nombre:"Derecho Civil I – Acto Jurídico",codigo:"DER-201",carreraId:29,ciclo:2,creditos:4,docenteId:12,color:"#d97706"},{id:72,nombre:"Derecho Constitucional",codigo:"DER-301",carreraId:29,ciclo:3,creditos:4,docenteId:13,color:"#d97706"},{id:73,nombre:"Derecho Penal General",codigo:"DER-302",carreraId:29,ciclo:3,creditos:4,docenteId:13,color:"#d97706"},{id:74,nombre:"Derecho Laboral",codigo:"DER-501",carreraId:29,ciclo:5,creditos:4,docenteId:12,color:"#d97706"},{id:75,nombre:"Anatomía Humana",codigo:"MED-101",carreraId:22,ciclo:1,creditos:6,docenteId:14,color:"#16a34a"},{id:76,nombre:"Histología y Embriología",codigo:"MED-201",carreraId:22,ciclo:2,creditos:5,docenteId:14,color:"#16a34a"},{id:77,nombre:"Bioquímica Médica",codigo:"MED-202",carreraId:22,ciclo:2,creditos:5,docenteId:15,color:"#16a34a"},{id:78,nombre:"Fisiopatología",codigo:"MED-401",carreraId:22,ciclo:4,creditos:5,docenteId:15,color:"#16a34a"},{id:79,nombre:"Farmacología",codigo:"MED-501",carreraId:22,ciclo:5,creditos:5,docenteId:15,color:"#16a34a"},{id:80,nombre:"Fundamentos de Enfermería",codigo:"ENF-101",carreraId:23,ciclo:1,creditos:5,docenteId:27,color:"#15803d"},{id:81,nombre:"Enfermería en Salud del Adulto",codigo:"ENF-301",carreraId:23,ciclo:3,creditos:5,docenteId:27,color:"#15803d"},{id:82,nombre:"Cuidados Intensivos en Enfermería",codigo:"ENF-601",carreraId:23,ciclo:6,creditos:4,docenteId:27,color:"#15803d"},{id:83,nombre:"Anatomía Dental",codigo:"ODO-101",carreraId:24,ciclo:1,creditos:4,docenteId:28,color:"#14532d"},{id:84,nombre:"Odontología Restauradora I",codigo:"ODO-301",carreraId:24,ciclo:3,creditos:5,docenteId:28,color:"#14532d"},{id:85,nombre:"Periodoncia",codigo:"ODO-501",carreraId:24,ciclo:5,creditos:4,docenteId:28,color:"#14532d"},{id:86,nombre:"Química Orgánica Farmacéutica",codigo:"FAB-201",carreraId:25,ciclo:2,creditos:4,docenteId:29,color:"#047857"},{id:87,nombre:"Farmacotecnia",codigo:"FAB-401",carreraId:25,ciclo:4,creditos:5,docenteId:29,color:"#047857"},{id:88,nombre:"Bioquímica Clínica",codigo:"FAB-501",carreraId:25,ciclo:5,creditos:4,docenteId:29,color:"#047857"},{id:89,nombre:"Biomecánica y Kinesiología",codigo:"TMT-201",carreraId:26,ciclo:2,creditos:4,docenteId:30,color:"#065f46"},{id:90,nombre:"Fisioterapia Musculoesquelética",codigo:"TMT-401",carreraId:26,ciclo:4,creditos:5,docenteId:30,color:"#065f46"},{id:91,nombre:"Electroterapia y Agentes Físicos",codigo:"TMT-501",carreraId:26,ciclo:5,creditos:4,docenteId:30,color:"#065f46"},{id:92,nombre:"Hematología Clínica",codigo:"TML-301",carreraId:27,ciclo:3,creditos:4,docenteId:31,color:"#0f766e"},{id:93,nombre:"Microbiología Clínica",codigo:"TML-401",carreraId:27,ciclo:4,creditos:5,docenteId:31,color:"#0f766e"},{id:94,nombre:"Radiología Convencional",codigo:"TMR-201",carreraId:28,ciclo:2,creditos:4,docenteId:32,color:"#134e4a"},{id:95,nombre:"Tomografía Computarizada",codigo:"TMR-501",carreraId:28,ciclo:5,creditos:4,docenteId:32,color:"#134e4a"},{id:96,nombre:"Psicología General",codigo:"PSI-101",carreraId:30,ciclo:1,creditos:4,docenteId:16,color:"#7c3aed"},{id:97,nombre:"Neurociencias y Conducta",codigo:"PSI-201",carreraId:30,ciclo:2,creditos:4,docenteId:16,color:"#7c3aed"},{id:98,nombre:"Psicología del Desarrollo",codigo:"PSI-301",carreraId:30,ciclo:3,creditos:4,docenteId:16,color:"#7c3aed"},{id:99,nombre:"Psicología Clínica",codigo:"PSI-501",carreraId:30,ciclo:5,creditos:4,docenteId:16,color:"#7c3aed"},{id:100,nombre:"Teoría de la Comunicación",codigo:"CCC-101",carreraId:31,ciclo:1,creditos:4,docenteId:33,color:"#be185d"},{id:101,nombre:"Periodismo Digital",codigo:"CCC-301",carreraId:31,ciclo:3,creditos:4,docenteId:33,color:"#be185d"},{id:102,nombre:"Comunicación Corporativa",codigo:"CCC-501",carreraId:31,ciclo:5,creditos:4,docenteId:33,color:"#be185d"},{id:103,nombre:"Tecnología Educativa",codigo:"EIA-201",carreraId:32,ciclo:2,creditos:4,docenteId:34,color:"#9d174d"},{id:104,nombre:"Diseño Instruccional Digital",codigo:"EIA-401",carreraId:32,ciclo:4,creditos:4,docenteId:34,color:"#9d174d"},{id:105,nombre:"Gamificación en el Aprendizaje",codigo:"EIA-501",carreraId:32,ciclo:5,creditos:4,docenteId:34,color:"#9d174d"}],cr=[{id:1,titulo:"Resumen: Complejidad de Algoritmos",cursoId:6,docenteId:1,tipo:"Resumen",semana:4,descargas:312,likes:118,vistas:890,autor:"Estudiante UC",premium:!1,fecha:"2026-04-08",previewImg:A.algoritmos,descripcion:"Análisis de complejidad temporal y espacial con notación Big-O. Incluye ejemplos prácticos de algoritmos de búsqueda y ordenamiento con tablas comparativas.",temas:["Big-O","Complejidad temporal","Algoritmos de búsqueda","Quicksort","Mergesort"],archivos:[{nombre:"Resumen_Complejidad_Algoritmos.pdf",tipo:"pdf",tamaño:"1.2 MB",paginas:8,url:I.algoritmos},{nombre:"Tablas_Comparativas.xlsx",tipo:"excel",tamaño:"340 KB",hojas:3,url:null},{nombre:"Capturas_ejercicios.zip",tipo:"zip",tamaño:"2.1 MB",archivos:12,url:null}]},{id:2,titulo:"Guía: SQL Avanzado con Ejercicios",cursoId:5,docenteId:2,tipo:"Guía",semana:5,descargas:278,likes:95,vistas:740,autor:"Estudiante UC",premium:!0,fecha:"2026-04-15",previewImg:A.sql,descripcion:"Guía completa de SQL avanzado: JOINs, subconsultas, funciones de ventana, índices y optimización de consultas. 25 ejercicios resueltos paso a paso.",temas:["JOINs","Subconsultas","Funciones de ventana","Índices","Optimización"],archivos:[{nombre:"Guia_SQL_Avanzado.pdf",tipo:"pdf",tamaño:"3.4 MB",paginas:45,url:I.bd},{nombre:"Ejercicios_SQL.docx",tipo:"word",tamaño:"890 KB",paginas:18,url:null},{nombre:"Scripts_SQL_Ejercicios.zip",tipo:"zip",tamaño:"56 KB",archivos:25,url:null},{nombre:"Esquemas_ER_Diagramas.png",tipo:"imagen",tamaño:"1.8 MB",dimensiones:"3200×2400",url:"https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&q=90"}]},{id:3,titulo:"Mapa conceptual: Patrones de Diseño GoF",cursoId:7,docenteId:1,tipo:"Mapa",semana:6,descargas:201,likes:74,vistas:520,autor:"Estudiante UC",premium:!1,fecha:"2026-04-20",previewImg:A.software,descripcion:"Los 23 patrones de diseño GoF clasificados en Creacionales, Estructurales y de Comportamiento. Ejemplos en Java y Python.",temas:["Patrones GoF","Singleton","Factory","Observer","Decorator"],archivos:[{nombre:"Mapa_Patrones_Diseño.pdf",tipo:"pdf",tamaño:"2.1 MB",paginas:12,url:I.algoritmos},{nombre:"Diagrama_Patrones.png",tipo:"imagen",tamaño:"4.2 MB",dimensiones:"5000×3500",url:"https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=1200&q=90"},{nombre:"Slides_Patrones.pptx",tipo:"ppt",tamaño:"5.6 MB",diapositivas:32,url:null}]},{id:4,titulo:"Apuntes: Ciberseguridad – OWASP Top 10",cursoId:10,docenteId:3,tipo:"Apunte",semana:5,descargas:265,likes:99,vistas:730,autor:"Estudiante UC",premium:!1,fecha:"2026-04-22",previewImg:A.ciberseguridad,descripcion:"Resumen de las 10 vulnerabilidades más críticas según OWASP 2024. Ejemplos de ataques reales y contramedidas para cada categoría.",temas:["Inyección SQL","XSS","CSRF","Autenticación rota","OWASP"],archivos:[{nombre:"OWASP_Top10_Resumen.pdf",tipo:"pdf",tamaño:"2.8 MB",paginas:20,url:I.ciberseguridad},{nombre:"Checklist_Seguridad.xlsx",tipo:"excel",tamaño:"180 KB",hojas:3,url:null},{nombre:"Demo_Ataques.zip",tipo:"zip",tamaño:"3.4 MB",archivos:8,url:null}]},{id:5,titulo:"Apuntes: Cálculo Integral – Semana 3",cursoId:11,docenteId:4,tipo:"Apunte",semana:3,descargas:389,likes:142,vistas:1100,autor:"Estudiante UC",premium:!1,fecha:"2026-03-28",previewImg:A.calculo,descripcion:"Apuntes manuscritos digitalizados + resumen tipado. Cubre integrales indefinidas y técnicas de integración con 30 ejercicios resueltos.",temas:["Integrales indefinidas","Sustitución","Integración por partes","Fracciones parciales"],archivos:[{nombre:"Apuntes_Calculo_S3.pdf",tipo:"pdf",tamaño:"5.8 MB",paginas:22,url:I.calculo},{nombre:"Ejercicios_Resueltos_S3.docx",tipo:"word",tamaño:"1.2 MB",paginas:14,url:null},{nombre:"Tabla_Integrales.png",tipo:"imagen",tamaño:"980 KB",dimensiones:"2480×3508",url:"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=90"}]},{id:6,titulo:"Resumen ejecutivo: Investigación Operativa",cursoId:13,docenteId:4,tipo:"Resumen",semana:7,descargas:245,likes:89,vistas:670,autor:"Estudiante UC",premium:!1,fecha:"2026-04-25",previewImg:A.estadistica,descripcion:"Modelos de IO: Programación Lineal, Simplex, Transporte, Asignación y Redes. Plantillas Excel resolubles directamente.",temas:["Programación Lineal","Método Simplex","Modelo de Transporte","Asignación"],archivos:[{nombre:"Resumen_IO_Completo.pdf",tipo:"pdf",tamaño:"2.8 MB",paginas:30,url:I.manufactura},{nombre:"Plantilla_Simplex.xlsx",tipo:"excel",tamaño:"245 KB",hojas:5,url:null},{nombre:"Plantilla_Transporte.xlsx",tipo:"excel",tamaño:"180 KB",hojas:3,url:null},{nombre:"Slides_IO_Clase.pptx",tipo:"ppt",tamaño:"4.1 MB",diapositivas:48,url:null}]},{id:7,titulo:"Guía: Logística y Cadena de Suministro",cursoId:16,docenteId:5,tipo:"Guía",semana:6,descargas:198,likes:73,vistas:560,autor:"Estudiante UC",premium:!1,fecha:"2026-04-30",previewImg:A.produccion,descripcion:"Modelos de inventario EOQ y POQ, gestión de almacenes, indicadores KPI logísticos y casos peruanos de Supply Chain.",temas:["EOQ","POQ","Gestión de almacenes","KPI logísticos","SCM"],archivos:[{nombre:"Guia_Logistica_SCM.pdf",tipo:"pdf",tamaño:"3.2 MB",paginas:36,url:I.logistica},{nombre:"Plantilla_EOQ.xlsx",tipo:"excel",tamaño:"210 KB",hojas:4,url:null},{nombre:"Casos_Empresas_Peru.docx",tipo:"word",tamaño:"680 KB",paginas:12,url:null}]},{id:8,titulo:"Esquema: Análisis Estructural – Vigas",cursoId:18,docenteId:6,tipo:"Esquema",semana:5,descargas:167,likes:63,vistas:430,autor:"Estudiante UC",premium:!0,fecha:"2026-04-18",previewImg:A.estructuras,descripcion:"Análisis de vigas simplemente apoyadas y en voladizo. Diagramas de fuerza cortante y momento flector con procedimiento paso a paso.",temas:["Vigas simplemente apoyadas","Voladizo","Fuerza cortante","Momento flector","SAP2000"],archivos:[{nombre:"Esquema_Vigas_Completo.pdf",tipo:"pdf",tamaño:"4.5 MB",paginas:28,url:I.estructuras},{nombre:"Diagramas_Vigas.png",tipo:"imagen",tamaño:"6.2 MB",dimensiones:"4000×2800",url:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=90"},{nombre:"Modelo_SAP2000.zip",tipo:"zip",tamaño:"1.4 MB",archivos:6,url:null}]},{id:9,titulo:"Apuntes: Hidráulica – Flujo en Canales",cursoId:20,docenteId:6,tipo:"Apunte",semana:4,descargas:145,likes:54,vistas:390,autor:"Estudiante UC",premium:!1,fecha:"2026-05-02",previewImg:A.construccion,descripcion:"Flujo uniforme en canales, ecuación de Manning, perfil hidráulico y estructuras de control. Casos aplicados a la sierra peruana.",temas:["Ecuación de Manning","Flujo uniforme","Canal trapezoidal","Perfil hidráulico"],archivos:[{nombre:"Hidraulica_Canales.pdf",tipo:"pdf",tamaño:"3.1 MB",paginas:26,url:I.agua},{nombre:"Plantilla_Manning.xlsx",tipo:"excel",tamaño:"165 KB",hojas:3,url:null},{nombre:"Ejercicios_Canales.docx",tipo:"word",tamaño:"480 KB",paginas:10,url:null}]},{id:10,titulo:"Guía: Historia de la Arquitectura Peruana",cursoId:22,docenteId:20,tipo:"Guía",semana:3,descargas:178,likes:65,vistas:490,autor:"Estudiante UC",premium:!1,fecha:"2026-04-10",previewImg:A.arquitectura,descripcion:"Evolución arquitectónica del Perú: épocas preincaica, inca, colonial, republicana y contemporánea. Análisis de obras clave con planos.",temas:["Arquitectura inca","Colonial","Republicana","Modernismo peruano","Casos de estudio"],archivos:[{nombre:"Historia_Arq_Peruana.pdf",tipo:"pdf",tamaño:"5.2 MB",paginas:44,url:I.generico},{nombre:"Fotografia_Obras.zip",tipo:"zip",tamaño:"18 MB",archivos:35,url:null},{nombre:"Linea_Tiempo_Arq.png",tipo:"imagen",tamaño:"4.8 MB",dimensiones:"6000×2400",url:"https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=90"}]},{id:11,titulo:"Apuntes: Diseño de Interiores – Ergonomía",cursoId:25,docenteId:21,tipo:"Apunte",semana:4,descargas:132,likes:49,vistas:360,autor:"Estudiante UC",premium:!1,fecha:"2026-04-28",previewImg:A.diseno_interiores,descripcion:"Principios ergonómicos aplicados al diseño de interiores: dimensiones humanas, circulación, accesibilidad universal y norma A.120.",temas:["Ergonomía","Antropometría","Accesibilidad","Normativa A.120","Neufert"],archivos:[{nombre:"Ergonomia_Interiores.pdf",tipo:"pdf",tamaño:"4.1 MB",paginas:32,url:I.generico2},{nombre:"Dimensiones_Neufert.xlsx",tipo:"excel",tamaño:"290 KB",hojas:5,url:null},{nombre:"Moodboard_Referencia.png",tipo:"imagen",tamaño:"5.6 MB",dimensiones:"4000×3000",url:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=90"}]},{id:12,titulo:"Guía: Evaluación de Impacto Ambiental",cursoId:27,docenteId:22,tipo:"Guía",semana:5,descargas:189,likes:70,vistas:510,autor:"Estudiante UC",premium:!1,fecha:"2026-04-20",previewImg:A.ambiental,descripcion:"Marco legal de la EIA en Perú. Matrices de Leopold e índice de Battelle. Caso práctico de proyecto minero en Junín.",temas:["EIA","Matriz de Leopold","Legislación ambiental peruana","SENACE","Línea base"],archivos:[{nombre:"Guia_EIA_Peru.pdf",tipo:"pdf",tamaño:"4.6 MB",paginas:50,url:I.ambiental},{nombre:"Matriz_Leopold.xlsx",tipo:"excel",tamaño:"320 KB",hojas:4,url:null},{nombre:"Caso_Practico_Junin.docx",tipo:"word",tamaño:"760 KB",paginas:18,url:null}]},{id:13,titulo:"Resumen: Geomecánica – Clasificación RMR",cursoId:29,docenteId:23,tipo:"Resumen",semana:4,descargas:156,likes:58,vistas:420,autor:"Estudiante UC",premium:!1,fecha:"2026-04-15",previewImg:A.minas,descripcion:"Clasificación geomecánica RMR de Bieniawski y Q de Barton. Aplicación en diseño de sostenimiento de labores subterráneas.",temas:["RMR","Q de Barton","Sostenimiento","Macizo rocoso","Túneles"],archivos:[{nombre:"Geomecanica_RMR.pdf",tipo:"pdf",tamaño:"3.5 MB",paginas:30,url:I.mineria},{nombre:"Tablas_Clasificacion.xlsx",tipo:"excel",tamaño:"220 KB",hojas:3,url:null},{nombre:"Slides_Geomecanica.pptx",tipo:"ppt",tamaño:"6.1 MB",diapositivas:40,url:null}]},{id:14,titulo:"Guía: Marketing Digital – Métricas KPI",cursoId:56,docenteId:7,tipo:"Guía",semana:4,descargas:334,likes:126,vistas:960,autor:"Estudiante UC",premium:!1,fecha:"2026-04-10",previewImg:A.marketing,descripcion:"KPIs más importantes: CAC, LTV, ROAS, CTR, CPC. Plantilla de dashboard en Excel y casos reales de empresas peruanas.",temas:["KPIs","CAC","ROAS","Google Analytics 4","Meta Ads","Dashboard"],archivos:[{nombre:"Guia_KPIs_Marketing.pdf",tipo:"pdf",tamaño:"2.2 MB",paginas:24,url:I.marketing},{nombre:"Dashboard_KPIs.xlsx",tipo:"excel",tamaño:"560 KB",hojas:6,url:null},{nombre:"Presentacion_Clase.pptx",tipo:"ppt",tamaño:"8.3 MB",diapositivas:40,url:null},{nombre:"Infografia_KPIs.png",tipo:"imagen",tamaño:"2.4 MB",dimensiones:"3508×4961",url:"https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=90"}]},{id:15,titulo:"Resumen: Microeconomía – Elasticidad",cursoId:55,docenteId:8,tipo:"Resumen",semana:5,descargas:289,likes:104,vistas:820,autor:"Estudiante UC",premium:!1,fecha:"2026-04-12",previewImg:A.economia,descripcion:"Elasticidad precio, ingreso y cruzada de la demanda. Fórmulas, interpretación económica y ejercicios tipo examen.",temas:["Elasticidad precio","Elasticidad ingreso","Elasticidad cruzada","Bienes Giffen"],archivos:[{nombre:"Resumen_Elasticidad.pdf",tipo:"pdf",tamaño:"1.8 MB",paginas:16,url:I.economia},{nombre:"Ejercicios_Elasticidad.docx",tipo:"word",tamaño:"720 KB",paginas:12,url:null},{nombre:"Graficas_Elasticidad.png",tipo:"imagen",tamaño:"1.1 MB",dimensiones:"2000×1500",url:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=90"}]},{id:16,titulo:"Mapa: E-Commerce – Modelos de Negocio",cursoId:58,docenteId:7,tipo:"Mapa",semana:3,descargas:198,likes:71,vistas:540,autor:"Estudiante UC",premium:!1,fecha:"2026-04-05",previewImg:A.ecommerce,descripcion:"Comparativa de modelos B2B, B2C, C2C y D2C. Casos de éxito peruanos y latinoamericanos. Canvas de modelo de negocio editable.",temas:["B2B","B2C","C2C","Marketplace","Business Model Canvas"],archivos:[{nombre:"Mapa_Ecommerce.pdf",tipo:"pdf",tamaño:"3.1 MB",paginas:18,url:I.gestion},{nombre:"Business_Canvas_Editable.pptx",tipo:"ppt",tamaño:"2.4 MB",diapositivas:10,url:null},{nombre:"Comparativa_Modelos.xlsx",tipo:"excel",tamaño:"290 KB",hojas:4,url:null}]},{id:17,titulo:"Guía: Reclutamiento y Selección 2.0",cursoId:46,docenteId:17,tipo:"Guía",semana:4,descargas:167,likes:62,vistas:470,autor:"Estudiante UC",premium:!1,fecha:"2026-04-18",previewImg:A.rrhh,descripcion:"Proceso de reclutamiento digital: LinkedIn Recruiter, ATS, entrevistas por competencias y assessment centers. Formatos editables.",temas:["LinkedIn Recruiter","ATS","Entrevista por competencias","Assessment center","Employer branding"],archivos:[{nombre:"Reclutamiento_Digital.pdf",tipo:"pdf",tamaño:"2.4 MB",paginas:28,url:I.rrhh},{nombre:"Formato_Entrevista.docx",tipo:"word",tamaño:"340 KB",paginas:4,url:null},{nombre:"Rubrica_Competencias.xlsx",tipo:"excel",tamaño:"190 KB",hojas:3,url:null}]},{id:18,titulo:"Resumen: Contrataciones del Estado – OSCE",cursoId:50,docenteId:18,tipo:"Resumen",semana:5,descargas:142,likes:53,vistas:400,autor:"Estudiante UC",premium:!1,fecha:"2026-04-22",previewImg:A.gestion_publica,descripcion:"Ley N° 30225 y su reglamento. Procedimientos clásicos de selección: licitación, concurso público, adjudicación simplificada y comparación de precios.",temas:["Ley 30225","Licitación pública","OSCE","SEACE","Adjudicación simplificada"],archivos:[{nombre:"Contrataciones_Estado.pdf",tipo:"pdf",tamaño:"2.8 MB",paginas:32,url:I.gestion},{nombre:"Flujograma_Procesos.pptx",tipo:"ppt",tamaño:"3.6 MB",diapositivas:24,url:null},{nombre:"Resumen_Ley30225.docx",tipo:"word",tamaño:"420 KB",paginas:8,url:null}]},{id:19,titulo:"Guía: Incoterms 2020 y Comercio Exterior",cursoId:60,docenteId:19,tipo:"Guía",semana:3,descargas:245,likes:89,vistas:680,autor:"Estudiante UC",premium:!1,fecha:"2026-04-08",previewImg:A.negocios_int,descripcion:"Los 11 Incoterms 2020 explicados con ejemplos prácticos, reparto de costos y riesgos. Casos de exportación desde Perú.",temas:["Incoterms 2020","EXW","FOB","CIF","DAP","DDP","Exportación"],archivos:[{nombre:"Guia_Incoterms_2020.pdf",tipo:"pdf",tamaño:"2.6 MB",paginas:24,url:I.comercio_int},{nombre:"Tabla_Incoterms.xlsx",tipo:"excel",tamaño:"210 KB",hojas:3,url:null},{nombre:"Mapa_Incoterms.png",tipo:"imagen",tamaño:"3.2 MB",dimensiones:"4961×3508",url:"https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=90"}]},{id:20,titulo:"Apuntes: Plan de Cuentas PCGE Comentado",cursoId:63,docenteId:10,tipo:"Apunte",semana:2,descargas:412,likes:157,vistas:1230,autor:"Estudiante UC",premium:!1,fecha:"2026-03-30",previewImg:A.contabilidad,descripcion:"Plan de Cuentas del PCGE con ejemplos de asientos contables para cada cuenta principal. Comparativa con NIIF y casos prácticos.",temas:["PCGE","Activos","Pasivos","Patrimonio","NIIF","Asientos contables"],archivos:[{nombre:"Plan_Cuentas_PCGE.pdf",tipo:"pdf",tamaño:"4.8 MB",paginas:62,url:I.contabilidad},{nombre:"Plan_Cuentas_Resumido.xlsx",tipo:"excel",tamaño:"410 KB",hojas:8,url:null},{nombre:"Asientos_Ejemplos.docx",tipo:"word",tamaño:"1.4 MB",paginas:25,url:null}]},{id:21,titulo:"Guía: Análisis e Interpretación de EEFF",cursoId:44,docenteId:11,tipo:"Guía",semana:5,descargas:198,likes:74,vistas:580,autor:"Estudiante UC",premium:!1,fecha:"2026-04-24",previewImg:A.finanzas,descripcion:"Ratios financieros de liquidez, rentabilidad, solvencia y gestión. Análisis vertical, horizontal y Du Pont con caso empresa peruana.",temas:["Ratios financieros","Análisis vertical","Du Pont","Liquidez","ROE"],archivos:[{nombre:"Analisis_EEFF.pdf",tipo:"pdf",tamaño:"3.2 MB",paginas:36,url:I.finanzas},{nombre:"Plantilla_Ratios.xlsx",tipo:"excel",tamaño:"480 KB",hojas:6,url:null},{nombre:"Caso_Empresa_Peru.docx",tipo:"word",tamaño:"560 KB",paginas:10,url:null}]},{id:22,titulo:"Resumen: Acto Jurídico y Nulidades",cursoId:71,docenteId:12,tipo:"Resumen",semana:5,descargas:223,likes:82,vistas:610,autor:"Estudiante UC",premium:!1,fecha:"2026-04-14",previewImg:A.derecho,descripcion:"Libro II del Código Civil peruano: vicios de la voluntad, simulación, nulidad vs anulabilidad. Jurisprudencia del TC.",temas:["Acto jurídico","Vicios del consentimiento","Nulidad","Anulabilidad"],archivos:[{nombre:"Resumen_Acto_Juridico.pdf",tipo:"pdf",tamaño:"2.4 MB",paginas:28,url:I.derecho},{nombre:"Cuadro_Nulidades.docx",tipo:"word",tamaño:"560 KB",paginas:8,url:null},{nombre:"Jurisprudencia_TC.pdf",tipo:"pdf",tamaño:"1.8 MB",paginas:15,url:I.derechos_hum}]},{id:23,titulo:"Esquema: Derechos Fundamentales – Art. 2",cursoId:72,docenteId:13,tipo:"Esquema",semana:4,descargas:178,likes:67,vistas:490,autor:"Estudiante UC",premium:!1,fecha:"2026-04-08",previewImg:A.derecho2,descripcion:"Artículo 2° de la Constitución Política del Perú sistematizado. Derechos fundamentales clasificados con sentencias del TC.",temas:["Constitución Política","Derechos fundamentales","Tribunal Constitucional"],archivos:[{nombre:"Esquema_Art2_Constitucion.pdf",tipo:"pdf",tamaño:"2.0 MB",paginas:20,url:I.derecho},{nombre:"Mapa_Derechos.png",tipo:"imagen",tamaño:"3.4 MB",dimensiones:"4961×3508",url:"https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=90"},{nombre:"Sentencias_TC_Clave.pdf",tipo:"pdf",tamaño:"3.1 MB",paginas:35,url:I.derechos_hum}]},{id:24,titulo:"Resumen: Derecho Laboral – Beneficios Sociales",cursoId:74,docenteId:12,tipo:"Resumen",semana:8,descargas:145,likes:54,vistas:420,autor:"Estudiante UC",premium:!1,fecha:"2026-05-02",previewImg:A.derecho,descripcion:"Beneficios sociales en el régimen laboral peruano: CTS, gratificaciones, vacaciones, utilidades y ESSALUD. Calculadora en Excel.",temas:["CTS","Gratificaciones","Vacaciones truncas","ESSALUD","AFP vs ONP"],archivos:[{nombre:"Resumen_Beneficios_Laborales.pdf",tipo:"pdf",tamaño:"1.6 MB",paginas:18,url:I.derecho},{nombre:"Calculadora_CTS_Gratif.xlsx",tipo:"excel",tamaño:"310 KB",hojas:5,url:null},{nombre:"Cuadro_Comparativo_Regimenes.docx",tipo:"word",tamaño:"480 KB",paginas:6,url:null}]},{id:25,titulo:"Apuntes: Anatomía – Sistema Nervioso",cursoId:75,docenteId:14,tipo:"Apunte",semana:7,descargas:498,likes:191,vistas:1450,autor:"Estudiante UC",premium:!1,fecha:"2026-04-18",previewImg:A.anatomia,descripcion:"Sistema nervioso central y periférico: neuroanatomía, vías sensitivas y motoras, pares craneales. Imágenes de atlas con anotaciones.",temas:["SNC","SNP","Pares craneales","Vías sensitivas","Neuroanatomía"],archivos:[{nombre:"Anatomia_SN_Apuntes.pdf",tipo:"pdf",tamaño:"8.2 MB",paginas:54,url:I.medicina},{nombre:"Esquema_Pares_Craneales.png",tipo:"imagen",tamaño:"5.6 MB",dimensiones:"5000×3500",url:"https://images.unsplash.com/photo-1530210124550-912dc1381cb8?w=1200&q=90"},{nombre:"Flashcards_Neuroanatomia.pptx",tipo:"ppt",tamaño:"14.3 MB",diapositivas:80,url:null}]},{id:26,titulo:"Guía ilustrada: Histología – Tejidos Básicos",cursoId:76,docenteId:14,tipo:"Guía",semana:6,descargas:367,likes:139,vistas:1080,autor:"Estudiante UC",premium:!0,fecha:"2026-04-28",previewImg:A.histologia,descripcion:"Los 4 tejidos básicos con microfotografías de microscopio óptico y electrónico. 43 imágenes anotadas para práctica de identificación.",temas:["Tejido epitelial","Tejido conectivo","Tejido muscular","Tejido nervioso"],archivos:[{nombre:"Guia_Histologia_Tejidos.pdf",tipo:"pdf",tamaño:"45 MB",paginas:68,url:I.medicina},{nombre:"Microfotografias_Pack.zip",tipo:"zip",tamaño:"120 MB",archivos:43,url:null},{nombre:"Flashcards_Histologia.pptx",tipo:"ppt",tamaño:"18.4 MB",diapositivas:86,url:null}]},{id:27,titulo:"Guía: Farmacología – Antimicrobianos",cursoId:79,docenteId:15,tipo:"Guía",semana:6,descargas:423,likes:162,vistas:1290,autor:"Estudiante UC",premium:!0,fecha:"2026-04-30",previewImg:A.farmacologia,descripcion:"Antimicrobianos: mecanismos de acción, espectro, resistencia bacteriana y uso clínico. Clasificación por familias con dosis habituales.",temas:["Betalactámicos","Macrólidos","Fluoroquinolonas","Resistencia bacteriana"],archivos:[{nombre:"Guia_Antimicrobianos.pdf",tipo:"pdf",tamaño:"6.8 MB",paginas:74,url:I.farmacologia},{nombre:"Tabla_Antibioticos.xlsx",tipo:"excel",tamaño:"520 KB",hojas:6,url:null},{nombre:"Flashcards_Farma.pptx",tipo:"ppt",tamaño:"10.2 MB",diapositivas:64,url:null},{nombre:"Mapa_Mecanismos_Accion.png",tipo:"imagen",tamaño:"4.8 MB",dimensiones:"5000×3500",url:"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=90"}]},{id:28,titulo:"Apuntes: Proceso de Atención de Enfermería (PAE)",cursoId:81,docenteId:27,tipo:"Apunte",semana:3,descargas:312,likes:118,vistas:890,autor:"Estudiante UC",premium:!1,fecha:"2026-04-12",previewImg:A.enfermeria,descripcion:"Las 5 etapas del PAE: valoración, diagnóstico NANDA, planificación, ejecución y evaluación. Casos clínicos resueltos.",temas:["PAE","Diagnóstico NANDA","Taxonomía II","Cuidados de enfermería","NIC/NOC"],archivos:[{nombre:"PAE_Completo.pdf",tipo:"pdf",tamaño:"3.8 MB",paginas:40,url:I.salud_publica},{nombre:"Diagnosticos_NANDA.xlsx",tipo:"excel",tamaño:"380 KB",hojas:5,url:null},{nombre:"Casos_Clinicos_ENF.docx",tipo:"word",tamaño:"640 KB",paginas:15,url:null}]},{id:29,titulo:"Guía: Anatomía Dental y Morfología",cursoId:83,docenteId:28,tipo:"Guía",semana:2,descargas:256,likes:94,vistas:740,autor:"Estudiante UC",premium:!1,fecha:"2026-04-06",previewImg:A.odontologia,descripcion:"Morfología de los 32 dientes permanentes y 20 deciduos. Características macroscópicas, ángulos y facetas con fotografías clínicas.",temas:["Morfología dental","Dientes permanentes","Dentición decidua","Incisivos","Molares"],archivos:[{nombre:"Anatomia_Dental.pdf",tipo:"pdf",tamaño:"12.4 MB",paginas:86,url:I.medicina},{nombre:"Atlas_Morfologia.zip",tipo:"zip",tamaño:"45 MB",archivos:64,url:null},{nombre:"Cuadro_Caracteristicas.xlsx",tipo:"excel",tamaño:"310 KB",hojas:4,url:null},{nombre:"Foto_Modelos_Yeso.png",tipo:"imagen",tamaño:"4.2 MB",dimensiones:"3508×2480",url:"https://images.unsplash.com/photo-1588776814546-1ffbb5d7d2a6?w=1200&q=90"}]},{id:30,titulo:"Apuntes: Farmacotecnia – Formas Farmacéuticas",cursoId:87,docenteId:29,tipo:"Apunte",semana:4,descargas:189,likes:69,vistas:530,autor:"Estudiante UC",premium:!1,fecha:"2026-04-20",previewImg:A.farmacia,descripcion:"Formas farmacéuticas sólidas, líquidas y semisólidas. Procesos de fabricación, controles de calidad y biofarmacia.",temas:["Comprimidos","Cápsulas","Emulsiones","Cremas","BPM"],archivos:[{nombre:"Formas_Farmaceuticas.pdf",tipo:"pdf",tamaño:"5.6 MB",paginas:60,url:I.farmacologia},{nombre:"Controles_Calidad.xlsx",tipo:"excel",tamaño:"290 KB",hojas:4,url:null},{nombre:"Slides_BPM.pptx",tipo:"ppt",tamaño:"7.2 MB",diapositivas:48,url:null}]},{id:31,titulo:"Guía: Biomecánica de la Columna Vertebral",cursoId:89,docenteId:30,tipo:"Guía",semana:5,descargas:178,likes:65,vistas:490,autor:"Estudiante UC",premium:!1,fecha:"2026-04-18",previewImg:A.terapia_fisica,descripcion:"Anatomía funcional de la columna, biomecánica del movimiento espinal, patologías frecuentes y protocolos de rehabilitación fisioterapéutica.",temas:["Columna vertebral","Biomecánica","Lumbalgia","Hernias discales","Rehabilitación"],archivos:[{nombre:"Biomecanica_Columna.pdf",tipo:"pdf",tamaño:"4.2 MB",paginas:44,url:I.terapia_fisica_p},{nombre:"Protocolos_Rehab.docx",tipo:"word",tamaño:"580 KB",paginas:16,url:null},{nombre:"Imagenes_Columna.png",tipo:"imagen",tamaño:"3.8 MB",dimensiones:"3508×4961",url:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=90"}]},{id:32,titulo:"Resumen: Hematología – Interpretación del Hemograma",cursoId:92,docenteId:31,tipo:"Resumen",semana:4,descargas:234,likes:87,vistas:670,autor:"Estudiante UC",premium:!1,fecha:"2026-04-15",previewImg:A.laboratorio,descripcion:"Valores de referencia del hemograma completo. Interpretación de anemias, leucocitosis, trombocitopenia y morfología eritrocitaria.",temas:["Hemograma","Anemias","Leucocitosis","Morfología eritrocitaria","VCM/HCM"],archivos:[{nombre:"Interpretacion_Hemograma.pdf",tipo:"pdf",tamaño:"2.8 MB",paginas:28,url:I.bioquimica},{nombre:"Tabla_Valores_Ref.xlsx",tipo:"excel",tamaño:"160 KB",hojas:3,url:null},{nombre:"Casos_Clinicos_Hema.docx",tipo:"word",tamaño:"540 KB",paginas:12,url:null}]},{id:33,titulo:"Apuntes: Radiología – Física de los Rayos X",cursoId:94,docenteId:32,tipo:"Apunte",semana:2,descargas:145,likes:54,vistas:400,autor:"Estudiante UC",premium:!1,fecha:"2026-04-08",previewImg:A.radiologia,descripcion:"Producción de rayos X, interacción con la materia, formación de imagen y protección radiológica. Normativa IPEN y OIEA.",temas:["Tubo de rayos X","kV y mAs","Radioprotección","IPEN","Dosis absorbida"],archivos:[{nombre:"Fisica_RayosX.pdf",tipo:"pdf",tamaño:"3.6 MB",paginas:36,url:I.radiologia_img},{nombre:"Imagenes_Equipos.png",tipo:"imagen",tamaño:"4.1 MB",dimensiones:"3508×2480",url:"https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1200&q=90"},{nombre:"Tabla_Radioproteccion.xlsx",tipo:"excel",tamaño:"190 KB",hojas:3,url:null}]},{id:34,titulo:"Mapa: Psicología del Desarrollo – Piaget vs Vygotsky",cursoId:98,docenteId:16,tipo:"Mapa",semana:5,descargas:201,likes:76,vistas:580,autor:"Estudiante UC",premium:!1,fecha:"2026-04-20",previewImg:A.psicologia,descripcion:"Estadios del desarrollo cognitivo según Piaget vs Vygotsky. Comparativa de teorías y aplicaciones en educación.",temas:["Piaget","Vygotsky","Estadios cognitivos","ZDP","Constructivismo"],archivos:[{nombre:"Mapa_Piaget_Vygotsky.pdf",tipo:"pdf",tamaño:"2.8 MB",paginas:22,url:I.psicologia},{nombre:"Infografia_Etapas.png",tipo:"imagen",tamaño:"3.2 MB",dimensiones:"4961×3508",url:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=90"},{nombre:"Comparativa_Teorias.docx",tipo:"word",tamaño:"680 KB",paginas:10,url:null}]},{id:35,titulo:"Resumen: Neurociencias – Plasticidad Neural",cursoId:97,docenteId:16,tipo:"Resumen",semana:6,descargas:167,likes:63,vistas:470,autor:"Estudiante UC",premium:!1,fecha:"2026-04-26",previewImg:A.neurociencia,descripcion:"Mecanismos de plasticidad sináptica, LTP y LTD. Bases neurales del aprendizaje y la memoria. Aplicaciones terapéuticas y educativas.",temas:["Plasticidad sináptica","LTP","Hipocampo","Neurotransmisores","Aprendizaje neural"],archivos:[{nombre:"Plasticidad_Neural.pdf",tipo:"pdf",tamaño:"3.4 MB",paginas:30,url:I.neurociencia},{nombre:"Esquema_Sinapsis.png",tipo:"imagen",tamaño:"2.8 MB",dimensiones:"3508×2480",url:"https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=90"},{nombre:"Casos_Clinicos_Neuro.docx",tipo:"word",tamaño:"480 KB",paginas:8,url:null}]},{id:36,titulo:"Guía: Periodismo Digital y Fact-Checking",cursoId:101,docenteId:33,tipo:"Guía",semana:4,descargas:145,likes:53,vistas:410,autor:"Estudiante UC",premium:!1,fecha:"2026-04-18",previewImg:A.comunicacion,descripcion:"Herramientas de verificación de noticias: Google Fact Check, TinEye, InVID. Deontología periodística y cobertura de redes sociales.",temas:["Fact-checking","Desinformación","Google Fact Check","Redes sociales","Deontología"],archivos:[{nombre:"Periodismo_Digital.pdf",tipo:"pdf",tamaño:"2.4 MB",paginas:24,url:I.comunicacion},{nombre:"Guia_Fact_Checking.docx",tipo:"word",tamaño:"420 KB",paginas:8,url:null},{nombre:"Herramientas_Verificacion.xlsx",tipo:"excel",tamaño:"180 KB",hojas:2,url:null}]},{id:37,titulo:"Guía: Gamificación en el Aula – Kahoot y Mentimeter",cursoId:105,docenteId:34,tipo:"Guía",semana:3,descargas:134,likes:50,vistas:380,autor:"Estudiante UC",premium:!1,fecha:"2026-04-14",previewImg:A.innovacion_educ,descripcion:"Diseño de actividades gamificadas con Kahoot, Mentimeter, Quizizz y Classcraft. Fundamentos teóricos y casos aplicados en educación superior.",temas:["Gamificación","Kahoot","Quizizz","Mentimeter","Aprendizaje activo"],archivos:[{nombre:"Gamificacion_Aula.pdf",tipo:"pdf",tamaño:"2.8 MB",paginas:28,url:I.educacion_digital},{nombre:"Plantilla_Sesion.pptx",tipo:"ppt",tamaño:"4.6 MB",diapositivas:20,url:null},{nombre:"Rubrica_Gamificacion.docx",tipo:"word",tamaño:"320 KB",paginas:4,url:null}]},{id:38,titulo:"Apuntes: Robótica – Cinemática del Robot",cursoId:34,docenteId:25,tipo:"Apunte",semana:5,descargas:198,likes:74,vistas:560,autor:"Estudiante UC",premium:!1,fecha:"2026-04-22",previewImg:A.mecatronica,descripcion:"Cinemática directa e inversa de robots industriales. Matrices de Denavit-Hartenberg y workspace. Simulación en ROS y MATLAB.",temas:["Denavit-Hartenberg","Cinemática directa","Cinemática inversa","ROS","MATLAB"],archivos:[{nombre:"Cinematica_Robot.pdf",tipo:"pdf",tamaño:"4.2 MB",paginas:38,url:I.generico},{nombre:"Simulacion_MATLAB.zip",tipo:"zip",tamaño:"8.6 MB",archivos:6,url:null},{nombre:"Tablas_DH.xlsx",tipo:"excel",tamaño:"210 KB",hojas:3,url:null}]},{id:39,titulo:"Código: Árboles Binarios en Python",cursoId:6,docenteId:1,tipo:"Código",semana:9,descargas:356,likes:134,vistas:990,autor:"Estudiante UC",premium:!0,fecha:"2026-05-05",previewImg:A.programacion,descripcion:"Implementación completa de BST, AVL y Árbol Rojo-Negro en Python con visualización gráfica. Operaciones con complejidad analizada.",temas:["BST","AVL","Árbol Rojo-Negro","Recorridos","matplotlib"],archivos:[{nombre:"Arboles_Binarios_Python.pdf",tipo:"pdf",tamaño:"3.2 MB",paginas:38,url:I.algoritmos},{nombre:"codigo_arboles.zip",tipo:"zip",tamaño:"48 KB",archivos:8,url:null},{nombre:"Explicacion_AVL.pptx",tipo:"ppt",tamaño:"4.8 MB",diapositivas:28,url:null}]},{id:40,titulo:"Apuntes: Gestión de Proyectos – PMI / PMBOK",cursoId:59,docenteId:9,tipo:"Apunte",semana:3,descargas:189,likes:70,vistas:530,autor:"Estudiante UC",premium:!1,fecha:"2026-04-06",previewImg:A.gestion,descripcion:"Las 10 áreas de conocimiento del PMI y los 5 grupos de procesos. EDT, cronograma, matriz de riesgos y acta de constitución.",temas:["PMI","PMBOK","EDT","Gestión de riesgos","Cronograma"],archivos:[{nombre:"Apuntes_PMI_PMBOK.pdf",tipo:"pdf",tamaño:"4.1 MB",paginas:48,url:I.gestion},{nombre:"Plantilla_EDT.xlsx",tipo:"excel",tamaño:"220 KB",hojas:3,url:null},{nombre:"Plantilla_Acta_Proyecto.docx",tipo:"word",tamaño:"410 KB",paginas:4,url:null},{nombre:"Matriz_Riesgos.xlsx",tipo:"excel",tamaño:"180 KB",hojas:2,url:null}]}],Be=[{id:1,titulo:"Parcial I – Algoritmos y Prog. 2026-I",cursoId:4,docenteId:1,tipo:"Parcial",año:2026,semestre:"I",resuelto:!0,descargas:534,likes:205,vistas:1560,premium:!1,fecha:"2026-04-10",previewImg:A.algoritmos,descripcion:"4 preguntas: análisis de pseudocódigo, diseño de algoritmos iterativos/recursivos y cálculo de complejidad. Duración: 100 min.",temas:["Pseudocódigo","Recursividad","Big-O","Búsqueda binaria"],duracion:"100 min",preguntas:4,puntaje_total:20,archivos:[{nombre:"Parcial1_ISI101_2026I.pdf",tipo:"pdf",tamaño:"1.1 MB",paginas:4,url:I.algoritmos},{nombre:"Parcial1_ISI101_Solucion.pdf",tipo:"pdf",tamaño:"2.3 MB",paginas:8,url:I.generico}]},{id:2,titulo:"Final – Estructuras de Datos 2025-II",cursoId:6,docenteId:1,tipo:"Final",año:2025,semestre:"II",resuelto:!0,descargas:612,likes:238,vistas:1820,premium:!0,fecha:"2025-12-12",previewImg:A.programacion,descripcion:"Listas enlazadas, pilas, colas, árboles AVL y grafos. Solución completa con código Python comentado.",temas:["Listas enlazadas","Pilas y colas","Árboles AVL","Grafos","Dijkstra"],duracion:"120 min",preguntas:5,puntaje_total:20,archivos:[{nombre:"Final_ISI301_2025II.pdf",tipo:"pdf",tamaño:"1.4 MB",paginas:6,url:I.algoritmos},{nombre:"Final_ISI301_Solucion.pdf",tipo:"pdf",tamaño:"3.8 MB",paginas:14,url:I.generico},{nombre:"Codigo_Soluciones_Python.zip",tipo:"zip",tamaño:"28 KB",archivos:5,url:null}]},{id:3,titulo:"Parcial II – Ing. de Software 2026-I",cursoId:7,docenteId:1,tipo:"Parcial",año:2026,semestre:"I",resuelto:!1,descargas:289,likes:103,vistas:870,premium:!1,fecha:"2026-05-08",previewImg:A.software,descripcion:"Metodologías ágiles, diagramas UML y patrones de diseño. Sin solución disponible aún.",temas:["Scrum","Diagramas UML","Casos de uso","Patrones de diseño"],duracion:"90 min",preguntas:3,puntaje_total:20,archivos:[{nombre:"Parcial2_ISI401_2026I.pdf",tipo:"pdf",tamaño:"980 KB",paginas:3,url:I.generico}]},{id:4,titulo:"Final – Redes y Comunicaciones 2025-II",cursoId:8,docenteId:2,tipo:"Final",año:2025,semestre:"II",resuelto:!0,descargas:401,likes:152,vistas:1180,premium:!1,fecha:"2025-12-18",previewImg:A.redes,descripcion:"Modelo OSI/TCP-IP, subnetting, protocolos de enrutamiento y configuración. Simulaciones en Packet Tracer incluidas.",temas:["Modelo OSI","TCP/IP","Subnetting VLSM","OSPF","Packet Tracer"],duracion:"110 min",preguntas:5,puntaje_total:20,archivos:[{nombre:"Final_ISI402_2025II.pdf",tipo:"pdf",tamaño:"1.6 MB",paginas:5,url:I.redes},{nombre:"Final_ISI402_Solucion.pdf",tipo:"pdf",tamaño:"3.2 MB",paginas:10,url:I.generico},{nombre:"Simulacion_PacketTracer.zip",tipo:"zip",tamaño:"1.8 MB",archivos:3,url:null}]},{id:5,titulo:"Parcial I – Inteligencia Artificial 2026-I",cursoId:9,docenteId:3,tipo:"Parcial",año:2026,semestre:"I",resuelto:!0,descargas:345,likes:132,vistas:1020,premium:!1,fecha:"2026-04-20",previewImg:A.ia,descripcion:"Búsqueda heurística A*, lógica proposicional, regresión lineal y clasificación con Naive Bayes. Solución con código Python.",temas:["A* Heurístico","Regresión lineal","Naive Bayes","Lógica proposicional"],duracion:"100 min",preguntas:4,puntaje_total:20,archivos:[{nombre:"Parcial1_ISI601_2026I.pdf",tipo:"pdf",tamaño:"1.2 MB",paginas:4,url:I.ia},{nombre:"Parcial1_ISI601_Solucion.pdf",tipo:"pdf",tamaño:"3.1 MB",paginas:10,url:I.ml},{nombre:"Notebooks_IA.zip",tipo:"zip",tamaño:"1.2 MB",archivos:3,url:null}]},{id:6,titulo:"Parcial I – Cálculo Diferencial 2026-I",cursoId:11,docenteId:4,tipo:"Parcial",año:2026,semestre:"I",resuelto:!0,descargas:678,likes:261,vistas:1990,premium:!1,fecha:"2026-04-16",previewImg:A.calculo,descripcion:"Límites, continuidad y derivadas. 4 problemas con desarrollo completo. Solución paso a paso con todas las reglas aplicadas.",temas:["Límites","Continuidad","Derivadas","Regla de la cadena"],duracion:"100 min",preguntas:4,puntaje_total:20,archivos:[{nombre:"Parcial1_IIN101_2026I.pdf",tipo:"pdf",tamaño:"1.3 MB",paginas:4,url:I.calculo},{nombre:"Parcial1_IIN101_Solucion.pdf",tipo:"pdf",tamaño:"4.1 MB",paginas:12,url:I.generico},{nombre:"Formulario_Derivadas.pdf",tipo:"pdf",tamaño:"560 KB",paginas:2,url:I.generico2}]},{id:7,titulo:"Final – Investigación Operativa 2025-II",cursoId:13,docenteId:4,tipo:"Final",año:2025,semestre:"II",resuelto:!0,descargas:389,likes:148,vistas:1140,premium:!0,fecha:"2025-12-10",previewImg:A.estadistica,descripcion:"PL gráfico y simplex, transporte, asignación húngara y CPM/PERT. Solución con tablas simplex completas.",temas:["Simplex","Método Gráfico","Transporte","Método Húngaro","CPM/PERT"],duracion:"120 min",preguntas:5,puntaje_total:20,archivos:[{nombre:"Final_IIN301_2025II.pdf",tipo:"pdf",tamaño:"1.8 MB",paginas:6,url:I.manufactura},{nombre:"Final_IIN301_Solucion.pdf",tipo:"pdf",tamaño:"5.2 MB",paginas:18,url:I.generico},{nombre:"Tablas_Simplex.xlsx",tipo:"excel",tamaño:"380 KB",hojas:5,url:null}]},{id:8,titulo:"Parcial I – Mecánica de Suelos 2026-I",cursoId:17,docenteId:6,tipo:"Parcial",año:2026,semestre:"I",resuelto:!1,descargas:234,likes:87,vistas:670,premium:!1,fecha:"2026-04-22",previewImg:A.estructuras,descripcion:"Clasificación de suelos SUCS, límites de Atterberg y compactación Proctor. Sin solución. Datos de laboratorio incluidos.",temas:["Clasificación SUCS","Límites de Atterberg","Proctor estándar","CBR"],duracion:"90 min",preguntas:3,puntaje_total:20,archivos:[{nombre:"Parcial1_ICI301_2026I.pdf",tipo:"pdf",tamaño:"1.2 MB",paginas:3,url:I.geotecnia},{nombre:"Datos_Lab_Examen.xlsx",tipo:"excel",tamaño:"145 KB",hojas:2,url:null}]},{id:9,titulo:"Parcial I – Marketing Digital 2026-I",cursoId:56,docenteId:7,tipo:"Parcial",año:2026,semestre:"I",resuelto:!0,descargas:456,likes:174,vistas:1320,premium:!1,fecha:"2026-04-18",previewImg:A.marketing,descripcion:"SEM, SEO, redes sociales y analítica web. Caso práctico campaña Google Ads con solución detallada.",temas:["SEO","SEM","Google Ads","Meta Business","Google Analytics 4"],duracion:"80 min",preguntas:3,puntaje_total:20,archivos:[{nombre:"Parcial1_AND301_2026I.pdf",tipo:"pdf",tamaño:"1.4 MB",paginas:3,url:I.marketing},{nombre:"Parcial1_AND301_Solucion.pdf",tipo:"pdf",tamaño:"2.8 MB",paginas:7,url:I.generico},{nombre:"Caso_GoogleAds_Datos.xlsx",tipo:"excel",tamaño:"210 KB",hojas:3,url:null}]},{id:10,titulo:"Parcial I – Microeconomía 2026-I",cursoId:55,docenteId:8,tipo:"Parcial",año:2026,semestre:"I",resuelto:!0,descargas:523,likes:199,vistas:1560,premium:!1,fecha:"2026-04-12",previewImg:A.economia,descripcion:"Oferta, demanda, elasticidades y equilibrio de mercado. 4 problemas con gráficos y solución algebraica.",temas:["Oferta y demanda","Equilibrio de mercado","Elasticidad precio"],duracion:"100 min",preguntas:4,puntaje_total:20,archivos:[{nombre:"Parcial1_AND201_2026I.pdf",tipo:"pdf",tamaño:"1.2 MB",paginas:4,url:I.economia},{nombre:"Parcial1_AND201_Solucion.pdf",tipo:"pdf",tamaño:"3.4 MB",paginas:10,url:I.generico}]},{id:11,titulo:"Parcial I – Contrataciones del Estado 2026-I",cursoId:50,docenteId:18,tipo:"Parcial",año:2026,semestre:"I",resuelto:!0,descargas:198,likes:72,vistas:560,premium:!1,fecha:"2026-04-24",previewImg:A.gestion_publica,descripcion:"Tipos de procedimientos de selección, umbrales UIT 2026, plazos y documentación requerida. Solución con fundamento legal.",temas:["Ley 30225","Procedimientos de selección","SEACE","Plazos","Bases del proceso"],duracion:"90 min",preguntas:3,puntaje_total:20,archivos:[{nombre:"Parcial1_AGP401_2026I.pdf",tipo:"pdf",tamaño:"1.1 MB",paginas:3,url:I.gestion},{nombre:"Parcial1_AGP401_Solucion.pdf",tipo:"pdf",tamaño:"2.2 MB",paginas:7,url:I.generico}]},{id:12,titulo:"Parcial II – Compensaciones y Remuneraciones 2026-I",cursoId:48,docenteId:17,tipo:"Parcial",año:2026,semestre:"I",resuelto:!1,descargas:145,likes:53,vistas:410,premium:!1,fecha:"2026-05-06",previewImg:A.rrhh,descripcion:"Estructura salarial, bandas de compensación, beneficios no monetarios y gestión por competencias. Sin solución oficial.",temas:["Bandas salariales","Compensación variable","Beneficios","Hay Group","Korn Ferry"],duracion:"80 min",preguntas:3,puntaje_total:20,archivos:[{nombre:"Parcial2_AGT501_2026I.pdf",tipo:"pdf",tamaño:"980 KB",paginas:3,url:I.rrhh}]},{id:13,titulo:"Parcial II – Contabilidad General 2026-I",cursoId:63,docenteId:10,tipo:"Parcial",año:2026,semestre:"I",resuelto:!1,descargas:345,likes:130,vistas:1020,premium:!1,fecha:"2026-05-06",previewImg:A.contabilidad,descripcion:"Registro de operaciones, ajustes contables y estados financieros básicos. Sin solución oficial.",temas:["Asientos contables","Ajustes","Balance General","Estado de Resultados"],duracion:"90 min",preguntas:4,puntaje_total:20,archivos:[{nombre:"Parcial2_COF101_2026I.pdf",tipo:"pdf",tamaño:"1.4 MB",paginas:4,url:I.contabilidad},{nombre:"Hoja_Trabajo_Escaneada.pdf",tipo:"pdf",tamaño:"5.8 MB",paginas:3,url:I.generico}]},{id:14,titulo:"Final – Auditoría Financiera 2025-II",cursoId:66,docenteId:11,tipo:"Final",año:2025,semestre:"II",resuelto:!0,descargas:267,likes:98,vistas:800,premium:!0,fecha:"2025-12-16",previewImg:A.auditoria,descripcion:"Planificación, riesgo de auditoría, evidencia, papeles de trabajo e informe. Caso práctico empresa comercial con solución.",temas:["Riesgo de auditoría","Evidencia","NIA","Informe del auditor"],duracion:"120 min",preguntas:4,puntaje_total:20,archivos:[{nombre:"Final_COF601_2025II.pdf",tipo:"pdf",tamaño:"1.9 MB",paginas:5,url:I.finanzas},{nombre:"Final_COF601_Solucion.pdf",tipo:"pdf",tamaño:"4.4 MB",paginas:14,url:I.generico2},{nombre:"Papeles_Trabajo_Modelo.xlsx",tipo:"excel",tamaño:"680 KB",hojas:8,url:null}]},{id:15,titulo:"Parcial I – Derecho Constitucional 2026-I",cursoId:72,docenteId:13,tipo:"Parcial",año:2026,semestre:"I",resuelto:!0,descargas:378,likes:143,vistas:1120,premium:!1,fecha:"2026-04-20",previewImg:A.derecho,descripcion:"Fuentes del derecho, estructura del Estado y derechos fundamentales. Análisis de casos con sentencias del TC.",temas:["Fuentes del Derecho","Estructura del Estado","Derechos fundamentales"],duracion:"90 min",preguntas:3,puntaje_total:20,archivos:[{nombre:"Parcial1_DER301_2026I.pdf",tipo:"pdf",tamaño:"1.1 MB",paginas:3,url:I.derecho},{nombre:"Parcial1_DER301_Solucion.pdf",tipo:"pdf",tamaño:"2.6 MB",paginas:8,url:I.derechos_hum}]},{id:16,titulo:"Final – Derecho Civil I 2025-II",cursoId:71,docenteId:12,tipo:"Final",año:2025,semestre:"II",resuelto:!0,descargas:412,likes:157,vistas:1230,premium:!0,fecha:"2025-12-11",previewImg:A.derecho2,descripcion:"5 casos sobre acto jurídico, vicios del consentimiento, nulidades y representación con doctrina.",temas:["Acto jurídico","Representación","Nulidad","Dolo y error"],duracion:"120 min",preguntas:5,puntaje_total:20,archivos:[{nombre:"Final_DER201_2025II.pdf",tipo:"pdf",tamaño:"1.6 MB",paginas:5,url:I.derecho},{nombre:"Final_DER201_Solucion.pdf",tipo:"pdf",tamaño:"5.6 MB",paginas:18,url:I.generico}]},{id:17,titulo:"Parcial I – Anatomía Humana 2026-I",cursoId:75,docenteId:14,tipo:"Parcial",año:2026,semestre:"I",resuelto:!0,descargas:789,likes:301,vistas:2340,premium:!1,fecha:"2026-04-14",previewImg:A.anatomia,descripcion:"Sistema musculoesquelético: identificación de estructuras, origen/inserción muscular y correlación clínica. Solución con atlas.",temas:["Sistema musculoesquelético","Músculos del miembro superior","Plexo braquial"],duracion:"90 min",preguntas:4,puntaje_total:20,archivos:[{nombre:"Parcial1_MED101_2026I.pdf",tipo:"pdf",tamaño:"2.4 MB",paginas:5,url:I.medicina},{nombre:"Parcial1_MED101_Solucion.pdf",tipo:"pdf",tamaño:"8.6 MB",paginas:12,url:I.generico}]},{id:18,titulo:"Final – Histología y Embriología 2025-II",cursoId:76,docenteId:14,tipo:"Final",año:2025,semestre:"II",resuelto:!0,descargas:634,likes:245,vistas:1890,premium:!0,fecha:"2025-12-09",previewImg:A.histologia,descripcion:"Identificación de 20 microfotografías, embriología semanas 1-8 y correlaciones clínicas. Solución completa con imágenes.",temas:["Identificación histológica","Embriología semanas 1-8","Malformaciones congénitas"],duracion:"120 min",preguntas:6,puntaje_total:20,archivos:[{nombre:"Final_MED201_2025II.pdf",tipo:"pdf",tamaño:"3.8 MB",paginas:6,url:I.medicina},{nombre:"Final_MED201_Solucion.pdf",tipo:"pdf",tamaño:"28.4 MB",paginas:16,url:I.generico},{nombre:"Microfotografias_Examen.zip",tipo:"zip",tamaño:"48 MB",archivos:20,url:null}]},{id:19,titulo:"Parcial II – Farmacología 2026-I",cursoId:79,docenteId:15,tipo:"Parcial",año:2026,semestre:"I",resuelto:!1,descargas:512,likes:196,vistas:1540,premium:!1,fecha:"2026-05-10",previewImg:A.farmacologia,descripcion:"Antiinfecciosos, antiinflamatorios y medicamentos del SNC. Sin solución oficial aún. Prontuario incluido.",temas:["Antiinfecciosos","AINEs","Glucocorticoides","Ansiolíticos"],duracion:"100 min",preguntas:4,puntaje_total:20,archivos:[{nombre:"Parcial2_MED501_2026I.pdf",tipo:"pdf",tamaño:"1.8 MB",paginas:4,url:I.farmacologia},{nombre:"Prontuario_Farmacologico.pdf",tipo:"pdf",tamaño:"4.2 MB",paginas:28,url:I.medicina}]},{id:20,titulo:"Parcial I – Enfermería Salud del Adulto 2026-I",cursoId:81,docenteId:27,tipo:"Parcial",año:2026,semestre:"I",resuelto:!0,descargas:267,likes:99,vistas:760,premium:!1,fecha:"2026-04-16",previewImg:A.enfermeria,descripcion:"PAE aplicado a paciente con diabetes e insuficiencia cardíaca. Diagnósticos NANDA, intervenciones NIC y resultados NOC. Solución completa.",temas:["PAE","NANDA","NIC","NOC","Diabetes mellitus","ICC"],duracion:"90 min",preguntas:2,puntaje_total:20,archivos:[{nombre:"Parcial1_ENF301_2026I.pdf",tipo:"pdf",tamaño:"1.3 MB",paginas:3,url:I.salud_publica},{nombre:"Parcial1_ENF301_Solucion.pdf",tipo:"pdf",tamaño:"2.8 MB",paginas:9,url:I.medicina}]},{id:21,titulo:"Parcial I – Psicología General 2026-I",cursoId:96,docenteId:16,tipo:"Parcial",año:2026,semestre:"I",resuelto:!0,descargas:289,likes:108,vistas:870,premium:!1,fecha:"2026-04-17",previewImg:A.psicologia,descripcion:"Escuelas psicológicas, percepción, atención y memoria. Análisis de casos con referencias bibliográficas.",temas:["Escuelas psicológicas","Percepción","Atención selectiva","Memoria de trabajo"],duracion:"80 min",preguntas:3,puntaje_total:20,archivos:[{nombre:"Parcial1_PSI101_2026I.pdf",tipo:"pdf",tamaño:"980 KB",paginas:3,url:I.psicologia},{nombre:"Parcial1_PSI101_Solucion.pdf",tipo:"pdf",tamaño:"2.1 MB",paginas:7,url:I.generico2}]},{id:22,titulo:"Final – Neurociencias y Conducta 2025-II",cursoId:97,docenteId:16,tipo:"Final",año:2025,semestre:"II",resuelto:!0,descargas:234,likes:89,vistas:720,premium:!1,fecha:"2025-12-14",previewImg:A.neurociencia,descripcion:"Sistemas neurales, neurotransmisores y bases neurológicas de la conducta. Solución con esquemas del SN.",temas:["Neurotransmisores","Sistema límbico","Corteza cerebral","Neuroplasticidad"],duracion:"100 min",preguntas:4,puntaje_total:20,archivos:[{nombre:"Final_PSI201_2025II.pdf",tipo:"pdf",tamaño:"1.6 MB",paginas:4,url:I.neurociencia},{nombre:"Final_PSI201_Solucion.pdf",tipo:"pdf",tamaño:"4.2 MB",paginas:12,url:I.generico2},{nombre:"Esquemas_SN_Solucion.png",tipo:"imagen",tamaño:"3.8 MB",dimensiones:"5000×3500",url:"https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=90"}]},{id:23,titulo:"Parcial I – Periodismo Digital 2026-I",cursoId:101,docenteId:33,tipo:"Parcial",año:2026,semestre:"I",resuelto:!0,descargas:134,likes:49,vistas:380,premium:!1,fecha:"2026-04-19",previewImg:A.comunicacion,descripcion:"Géneros periodísticos digitales, hipertextualidad e interactividad. Redacción de nota web y análisis de cobertura de medios peruanos.",temas:["Géneros periodísticos","Nota web","Hipertextualidad","Medios peruanos"],duracion:"80 min",preguntas:3,puntaje_total:20,archivos:[{nombre:"Parcial1_CCC301_2026I.pdf",tipo:"pdf",tamaño:"980 KB",paginas:3,url:I.comunicacion},{nombre:"Parcial1_CCC301_Solucion.pdf",tipo:"pdf",tamaño:"1.8 MB",paginas:6,url:I.generico}]},{id:24,titulo:"Parcial I – Tecnología Educativa 2026-I",cursoId:103,docenteId:34,tipo:"Parcial",año:2026,semestre:"I",resuelto:!1,descargas:112,likes:41,vistas:320,premium:!1,fecha:"2026-04-21",previewImg:A.educacion,descripcion:"TPACK, aprendizaje invertido, LMS Moodle y evaluación digital formativa. Sin solución oficial.",temas:["TPACK","Flipped classroom","Moodle","Evaluación formativa","E-learning"],duracion:"80 min",preguntas:3,puntaje_total:20,archivos:[{nombre:"Parcial1_EIA201_2026I.pdf",tipo:"pdf",tamaño:"890 KB",paginas:3,url:I.educacion_digital}]},{id:25,titulo:"Parcial I – Diseño Arquitectónico I 2026-I",cursoId:21,docenteId:20,tipo:"Parcial",año:2026,semestre:"I",resuelto:!1,descargas:145,likes:53,vistas:410,premium:!1,fecha:"2026-04-23",previewImg:A.arquitectura,descripcion:"Partido arquitectónico, escala, proporción y análisis de sitio. Entrega de láminas A2 con planta, corte y elevación. Sin solución.",temas:["Partido arquitectónico","Análisis de sitio","Planta / Corte / Elevación","Escala"],duracion:"Taller 3h",preguntas:1,puntaje_total:20,archivos:[{nombre:"Enunciado_Diseño1_2026I.pdf",tipo:"pdf",tamaño:"2.1 MB",paginas:4,url:I.generico}]}],Sm=[{id:"free",nombre:"Gratuito",precio:0,periodo:"siempre",descripcion:"Perfecto para empezar",color:"#6b7280",features:[{texto:"5 descargas por mes",incluido:!0},{texto:"Acceso a apuntes básicos",incluido:!0},{texto:"Ver exámenes sin solución",incluido:!0},{texto:"Búsqueda por curso",incluido:!0},{texto:"Exámenes resueltos",incluido:!1},{texto:"Apuntes premium",incluido:!1},{texto:"Descargas ilimitadas",incluido:!1},{texto:"Acceso anticipado",incluido:!1}]},{id:"premium",nombre:"Premium",precio:5,periodo:"mes",descripcion:"Para el estudiante serio",color:"#4f46e5",popular:!0,features:[{texto:"Descargas ilimitadas",incluido:!0},{texto:"Todos los apuntes",incluido:!0},{texto:"Exámenes resueltos",incluido:!0},{texto:"Búsqueda avanzada",incluido:!0},{texto:"Apuntes premium",incluido:!0},{texto:"Subir y ganar puntos",incluido:!0},{texto:"Acceso anticipado",incluido:!1},{texto:"Insignias exclusivas",incluido:!1}]},{id:"pro",nombre:"Pro Anual",precio:40,periodo:"año",descripcion:"El mejor valor para tu carrera",color:"#d97706",features:[{texto:"Todo lo de Premium",incluido:!0},{texto:"Acceso anticipado",incluido:!0},{texto:"Insignias exclusivas",incluido:!0},{texto:"Soporte prioritario",incluido:!0},{texto:"Guías de examen exclusivas",incluido:!0},{texto:"Mentoring entre estudiantes",incluido:!0},{texto:"Sin publicidad",incluido:!0},{texto:"2 meses gratis vs mensual",incluido:!0}]}],ar={apuntes:4200,examenes:2380,estudiantes:14600,cursos:480,docentes:260,carreras:32},Nm={nombre:"Brad",apellido:"UC",carrera:"Administración y Negocios Digitales",carreraId:6,facultadId:1,ciclo:3,plan:"free",puntos:120,descargas:3,descargasMax:5};Object.fromEntries(ce.map(e=>[e.id,e]));Object.fromEntries(Ze.map(e=>[e.id,e]));function Ud(e){if(!e.url){window.dispatchEvent(new CustomEvent("demo-no-url",{detail:{nombre:e.nombre}}));return}window.open(e.url,"_blank","noopener")}const Hd=S.createContext(null);function Cm({children:e}){const[r,t]=S.useState(null),[a,o]=S.useState(!1),i=(s,c)=>{o(!0),setTimeout(()=>{t({...Nm,email:s}),o(!1)},800)},l=()=>t(null);return n.jsx(Hd.Provider,{value:{user:r,login:i,logout:l,isLoading:a},children:e})}function Pt(){return S.useContext(Hd)}const bs=[{key:"home",label:"Inicio",icon:"🏠"},{key:"cursos",label:"Cursos",icon:"📖"},{key:"apuntes",label:"Apuntes",icon:"📝"},{key:"examenes",label:"Exámenes",icon:"📋"},{key:"docentes",label:"Docentes",icon:"👨‍🏫"},{key:"planes",label:"Planes",icon:"⭐",highlight:!0}];function Em({open:e}){return n.jsxs("span",{className:"panel-icon","aria-hidden":"true",children:[n.jsx("span",{className:`pi-bar ${e?"pi-tall":"pi-short"}`}),n.jsx("span",{className:`pi-bar ${e?"pi-short":"pi-tall"}`}),n.jsx("span",{className:`pi-bar ${e?"pi-tall":"pi-short"}`})]})}function _m(){return n.jsx("span",{className:"dots-grid","aria-hidden":"true",children:[...Array(9)].map((e,r)=>n.jsx("span",{className:"dot"},r))})}function Pm({page:e,navigate:r,sidebarOpen:t,setSidebarOpen:a,showSidebar:o}){const{user:i,logout:l}=Pt(),[s,c]=S.useState(!1),[p,g]=S.useState(!1),[b,x]=S.useState(!1),[v,w]=S.useState(!1),k=S.useRef(null);S.useEffect(()=>{const d=()=>g(window.scrollY>8);return window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[]),S.useEffect(()=>{const d=m=>{k.current&&!k.current.contains(m.target)&&x(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[]);const N=d=>{r(d),c(!1),x(!1)},u=()=>a(d=>!d);return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs("header",{className:`nav-header${p?" scrolled":""}`,children:[n.jsxs("div",{className:"nav-inner",children:[n.jsxs("button",{className:["nav-panel-btn",o?"show-panel":"",o&&t?"panel-active":""].join(" ").trim(),onClick:u,onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),"aria-label":t?"Ocultar panel lateral":"Mostrar panel lateral",children:[n.jsx(Em,{open:t}),v&&n.jsx("span",{className:"panel-tooltip",children:t?"Ocultar panel":"Mostrar panel"})]}),n.jsxs("button",{className:"nav-logo-btn",onClick:()=>N("home"),children:[n.jsx("div",{className:"nav-logo-icon",children:"📚"}),n.jsxs("span",{className:"nav-logo-text",children:["Apuntes",n.jsx("span",{children:"UC"})]})]}),n.jsx("span",{className:"nav-badge",children:"Continental"}),n.jsx("nav",{className:"nav-links","aria-label":"Navegación principal",children:bs.map(d=>n.jsxs("button",{onClick:()=>N(d.key),className:["nav-link",e===d.key?"active":"",d.highlight?"nav-link-highlight":""].join(" ").trim(),children:[d.key==="planes"&&n.jsx("span",{className:"nav-pro-dot"}),d.label]},d.key))}),n.jsx("div",{className:"nav-auth",children:i?n.jsxs("div",{className:"nav-user-wrap",ref:k,children:[n.jsxs("div",{className:"nav-user-chip",onClick:()=>x(d=>!d),role:"button",tabIndex:0,"aria-expanded":b,children:[n.jsx("div",{className:"nav-user-avatar",children:i.nombre[0]}),n.jsx("span",{className:"nav-user-name",children:i.nombre}),n.jsx("span",{className:`nav-user-chevron${b?" open":""}`,children:"▼"})]}),b&&n.jsxs("div",{className:"nav-user-dropdown",children:[n.jsxs("div",{className:"nav-user-info",children:[n.jsxs("div",{className:"nav-user-info-name",children:[i.nombre," ",i.apellido]}),n.jsx("div",{className:"nav-user-info-meta",children:i.carrera}),n.jsxs("div",{className:"nav-user-info-meta",children:["Ciclo ",i.ciclo," · ",i.descargas,"/",i.descargasMax," descargas"]}),n.jsx("span",{className:"nav-user-info-plan",children:i.plan==="free"?"Plan Gratuito":i.plan==="premium"?"⭐ Premium":"🏆 Pro"})]}),n.jsx("button",{className:"nav-dropdown-item",onClick:()=>N("planes"),children:"⭐ Mejorar plan"}),n.jsx("div",{className:"nav-dropdown-sep"}),n.jsx("button",{className:"nav-dropdown-item danger",onClick:()=>{l(),x(!1)},children:"← Cerrar sesión"})]})]}):n.jsxs(n.Fragment,{children:[n.jsx("button",{className:"nav-btn-secondary",onClick:()=>N("login"),children:"Ingresar"}),n.jsx("button",{className:"nav-btn-primary",onClick:()=>N("planes"),children:"Empezar gratis"})]})}),n.jsxs("button",{className:`nav-mobile-toggle${s?" open":""}`,onClick:()=>c(d=>!d),"aria-label":s?"Cerrar menú":"Abrir menú de navegación","aria-expanded":s,children:[n.jsx(_m,{}),n.jsx("span",{className:"close-x",children:"✕"})]})]}),n.jsxs("div",{className:`nav-mobile-drawer${s?" open":""}`,children:[n.jsx("div",{className:"nav-mobile-links",children:bs.map(d=>n.jsxs("button",{onClick:()=>N(d.key),className:["nav-mobile-link",e===d.key?"active":"",d.highlight?"highlight":""].join(" ").trim(),children:[n.jsx("span",{className:"nav-mobile-link-icon",children:d.icon}),d.label,d.highlight&&n.jsx("span",{style:{marginLeft:"auto",fontSize:"0.68rem",color:"var(--indigo-light)",fontWeight:700,letterSpacing:"0.05em"},children:"POPULAR"})]},d.key))}),n.jsx("div",{className:"nav-mobile-auth",children:i?n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"nav-mobile-user-card",children:[n.jsx("div",{className:"nav-mobile-avatar",children:i.nombre[0]}),n.jsxs("div",{className:"nav-mobile-user-info",children:[n.jsxs("div",{className:"nav-mobile-user-name",children:[i.nombre," ",i.apellido]}),n.jsxs("div",{className:"nav-mobile-user-meta",children:["Ciclo ",i.ciclo," · ",i.carrera.split(" ").slice(0,2).join(" ")]})]}),n.jsxs("span",{className:"nav-mobile-points",children:["⭐ ",i.puntos]})]}),i.plan==="free"&&n.jsx("button",{className:"nav-mobile-btn-primary",onClick:()=>N("planes"),children:"⚡ Mejorar a Premium — S/. 5/mes"}),n.jsx("button",{className:"nav-mobile-logout",onClick:()=>{l(),c(!1)},children:"← Cerrar sesión"})]}):n.jsxs(n.Fragment,{children:[n.jsx("button",{className:"nav-mobile-btn-primary",onClick:()=>N("planes"),children:"Empezar gratis"}),n.jsx("button",{className:"nav-mobile-btn-secondary",onClick:()=>N("login"),children:"Ya tengo cuenta"})]})})]})]})]})}const zm=[{key:"home",icon:"🏠",label:"Inicio"},{key:"cursos",icon:"📖",label:"Todos los cursos"},{key:"apuntes",icon:"📝",label:"Apuntes"},{key:"examenes",icon:"📋",label:"Exámenes"},{key:"docentes",icon:"👨‍🏫",label:"Docentes"}],Mm=[{id:1,nombre:"Ing. Sistemas",color:"#0891b2",emoji:"💻"},{id:11,nombre:"Adm. Negocios Dig.",color:"#4f46e5",emoji:"💼"},{id:19,nombre:"Medicina Humana",color:"#16a34a",emoji:"🩺"},{id:18,nombre:"Derecho",color:"#d97706",emoji:"⚖️"},{id:2,nombre:"Ing. Industrial",color:"#0e7490",emoji:"⚙️"},{id:16,nombre:"Contabilidad",color:"#dc2626",emoji:"📊"},{id:22,nombre:"Psicología",color:"#0f766e",emoji:"🧠"},{id:3,nombre:"Ing. Civil",color:"#155e75",emoji:"🏗️"}];function Am({page:e,navigate:r,open:t,onClose:a,show:o}){const{user:i}=Pt();S.useEffect(()=>{const c=window.innerWidth<=900;return document.body.style.overflow=c&&o&&t?"hidden":"",()=>{document.body.style.overflow=""}},[t,o]);const l=c=>{r(c),a()},s=o&&t;return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),s&&n.jsx("div",{className:"sidebar-overlay",onClick:a,"aria-hidden":"true"}),n.jsx("div",{className:`sidebar-wrap${s?"":" sb-closed"}`,children:n.jsxs("aside",{className:`sidebar${s?" sb-drawer-open":""}`,"aria-label":"Menú lateral","aria-hidden":!s,children:[i?n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"sb-user-card",onClick:()=>l("planes"),children:[n.jsx("div",{className:"sb-user-avatar",children:i.nombre[0]}),n.jsxs("div",{className:"sb-user-info",children:[n.jsxs("div",{className:"sb-user-name",children:[i.nombre," ",i.apellido]}),n.jsxs("div",{className:"sb-user-meta",children:[i.carrera.split(" ").slice(0,3).join(" ")," · Ciclo ",i.ciclo]})]}),n.jsxs("div",{className:"sb-points-badge",children:["⭐ ",i.puntos]})]}),n.jsxs("div",{className:"sb-downloads",children:[n.jsxs("div",{className:"sb-downloads-label",children:[n.jsx("span",{className:"sb-downloads-text",children:"Descargas del mes"}),n.jsxs("span",{className:"sb-downloads-count",children:[i.descargas,"/",i.descargasMax]})]}),n.jsx("div",{className:"sb-progress-track",children:n.jsx("div",{className:"sb-progress-fill",style:{width:`${i.descargas/i.descargasMax*100}%`}})})]})]}):n.jsx("div",{style:{padding:"14px 10px 8px"},children:n.jsx("button",{onClick:()=>l("login"),style:{width:"100%",padding:"11px",background:"var(--bg-elevated)",border:"1px dashed rgba(99,102,241,0.3)",borderRadius:"12px",color:"var(--indigo-light)",fontSize:"0.85rem",fontWeight:600,cursor:"pointer",fontFamily:"var(--font-body)"},children:"→ Inicia sesión para guardar tu progreso"})}),n.jsxs("div",{className:"sb-section",children:[n.jsx("div",{className:"sb-section-label",children:"Navegación"}),zm.map(c=>n.jsxs("button",{onClick:()=>l(c.key),className:`sb-nav-item${e===c.key?" active":""}`,children:[n.jsx("span",{className:"sb-nav-icon",children:c.icon}),n.jsx("span",{children:c.label})]},c.key))]}),n.jsx("div",{className:"sb-divider"}),n.jsx("div",{className:"sb-section",children:n.jsx("div",{className:"sb-section-label",children:"Comunidad UC"})}),n.jsxs("div",{className:"sb-stats",children:[n.jsxs("div",{className:"sb-stat",children:[n.jsx("div",{className:"sb-stat-value",children:ar.apuntes.toLocaleString()}),n.jsx("div",{className:"sb-stat-label",children:"Apuntes"})]}),n.jsxs("div",{className:"sb-stat",children:[n.jsx("div",{className:"sb-stat-value",children:ar.examenes.toLocaleString()}),n.jsx("div",{className:"sb-stat-label",children:"Exámenes"})]}),n.jsxs("div",{className:"sb-stat",children:[n.jsx("div",{className:"sb-stat-value",children:ar.estudiantes.toLocaleString()}),n.jsx("div",{className:"sb-stat-label",children:"Estudiantes"})]}),n.jsxs("div",{className:"sb-stat",children:[n.jsx("div",{className:"sb-stat-value",children:ar.carreras}),n.jsx("div",{className:"sb-stat-label",children:"Carreras"})]})]}),n.jsx("div",{className:"sb-divider"}),n.jsxs("div",{className:"sb-section",children:[n.jsx("div",{className:"sb-section-label",children:"Carreras populares"}),n.jsx("div",{className:"sb-carreras-grid",children:Mm.map(c=>n.jsxs("button",{onClick:()=>l("cursos"),className:"sb-carrera-item",title:c.nombre,children:[n.jsx("div",{className:"sb-carrera-dot",style:{background:c.color}}),n.jsx("span",{style:{marginRight:2},children:c.emoji}),n.jsx("span",{className:"sb-carrera-name",children:c.nombre})]},c.id))})]}),(!i||(i==null?void 0:i.plan)==="free")&&n.jsxs("div",{className:"sb-upgrade",children:[n.jsxs("div",{className:"sb-upgrade-title",children:[n.jsx("span",{children:"⚡"})," Pasa a Premium"]}),n.jsx("div",{className:"sb-upgrade-desc",children:"Exámenes resueltos, apuntes premium y descargas ilimitadas por solo S/. 5/mes."}),n.jsx("button",{className:"sb-upgrade-btn",onClick:()=>l("planes"),children:"Ver planes →"})]})]})})]})}const Tm={Plataforma:[{label:"Inicio",key:"home"},{label:"Cursos",key:"cursos"},{label:"Apuntes",key:"apuntes"},{label:"Exámenes",key:"examenes"},{label:"Docentes",key:"docentes"}],Planes:[{label:"Plan Gratuito",key:"planes"},{label:"Plan Premium",key:"planes"},{label:"Plan Pro Anual",key:"planes"}],Universidad:[{label:"UC Huancayo",href:"https://ucontinental.edu.pe/campus-huancayo/"},{label:"Conecta UC",href:"https://conecta.continental.edu.pe/"},{label:"Repositorio UC",href:"https://repositorio.continental.edu.pe/"},{label:"Fab Lab Continental",href:"https://ucontinental.edu.pe/"}],Soporte:[{label:"Contacto",href:"#"},{label:"Reportar error",href:"#"},{label:"Privacidad",href:"#"},{label:"Términos de uso",href:"#"}]},Fm=[{value:"2,840+",label:"Apuntes compartidos"},{value:"1,560+",label:"Exámenes disponibles"},{value:"8,900+",label:"Estudiantes activos"},{value:"5★",label:"QS Stars Aprendizaje Online"}],Rm=[{label:"TikTok",icon:"🎵",href:"#"},{label:"Instagram",icon:"📸",href:"#"},{label:"Facebook",icon:"👥",href:"#"},{label:"WhatsApp",icon:"💬",href:"#"}];function Lm({navigate:e,sidebarOpen:r,showSidebar:t}){return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs("footer",{className:`footer ${t&&r?"footer-sidebar-open":""}`,children:[n.jsx("div",{className:"footer-stats",children:n.jsx("div",{className:"footer-stats-inner",children:Fm.map(a=>n.jsxs("div",{className:"footer-stat",children:[n.jsx("div",{className:"footer-stat-value",children:a.value}),n.jsx("div",{className:"footer-stat-label",children:a.label})]},a.label))})}),n.jsxs("div",{className:"footer-main",children:[n.jsxs("div",{children:[n.jsxs("button",{className:"footer-logo-btn",onClick:()=>e("home"),children:[n.jsx("div",{className:"footer-logo-icon",children:"📚"}),n.jsxs("div",{className:"footer-logo-text",children:["Apuntes",n.jsx("span",{children:"UC"})]})]}),n.jsx("p",{className:"footer-tagline",children:"La plataforma académica de la Universidad Continental. Comparte apuntes, accede a exámenes pasados y aprende junto a miles de estudiantes."}),n.jsx("div",{className:"footer-socials",children:Rm.map(a=>n.jsxs("a",{href:a.href,className:"footer-social",children:[n.jsx("span",{children:a.icon}),a.label]},a.label))}),n.jsxs("div",{className:"footer-uc-badge",children:[n.jsx("div",{className:"footer-uc-dot"}),"Sede Huancayo · Av. San Carlos 1980"]})]}),n.jsx("div",{className:"footer-links",children:Object.entries(Tm).map(([a,o])=>n.jsxs("div",{className:"footer-col",children:[n.jsx("div",{className:"footer-col-title",children:a}),n.jsx("div",{className:"footer-link-list",children:o.map(i=>i.key?n.jsx("button",{className:"footer-link",onClick:()=>e(i.key),children:i.label},i.label):n.jsxs("a",{href:i.href,className:"footer-link",target:"_blank",rel:"noopener noreferrer",children:[i.label," ↗"]},i.label))})]},a))})]}),n.jsxs("div",{className:"footer-bottom",children:[n.jsxs("div",{className:"footer-bottom-left",children:[n.jsx("div",{className:"footer-copyright",children:"© 2026 ApuntesUC · Proyecto estudiantil"}),n.jsxs("div",{className:"footer-legal-links",children:[n.jsx("button",{className:"footer-legal-link",children:"Términos"}),n.jsx("button",{className:"footer-legal-link",children:"Privacidad"}),n.jsx("button",{className:"footer-legal-link",children:"Cookies"})]})]}),n.jsx("div",{className:"footer-made-with",children:"Hecho por estudiantes 💜"})]})]})]})}function Dm(e){return{Resumen:"📄",Mapa:"🗺️",Guía:"📘",Apunte:"📝",Esquema:"📊",Código:"💻"}[e]||"📄"}function Bm({navigate:e}){const[r,t]=S.useState(!1);return S.useEffect(()=>{const a=setTimeout(()=>t(!0),60);return()=>clearTimeout(a)},[]),n.jsxs("div",{className:`home-root${r?" home-visible":""}`,children:[n.jsx("style",{children:`
        /* ── tokens ── */
        .home-root { --delay-base: 0.08s; }

        /* ── stagger helpers ── */
        .h-fade { opacity: 0; transform: translateY(18px); transition: opacity 0.55s ease, transform 0.55s ease; }
        .home-visible .h-fade { opacity: 1; transform: none; }
        .home-visible .h-d1 { transition-delay: calc(var(--delay-base) * 1); }
        .home-visible .h-d2 { transition-delay: calc(var(--delay-base) * 2); }
        .home-visible .h-d3 { transition-delay: calc(var(--delay-base) * 3); }
        .home-visible .h-d4 { transition-delay: calc(var(--delay-base) * 4); }
        .home-visible .h-d5 { transition-delay: calc(var(--delay-base) * 5); }
        .home-visible .h-d6 { transition-delay: calc(var(--delay-base) * 6); }
        .home-visible .h-d7 { transition-delay: calc(var(--delay-base) * 7); }
        .home-visible .h-d8 { transition-delay: calc(var(--delay-base) * 8); }

        /* ── hero ── */
        .home-hero {
          position: relative;
          padding: 72px 24px 56px;
          text-align: center;
          overflow: hidden;
        }
        .home-hero-bg {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 70% 55% at 50% -5%, rgba(99,102,241,0.22) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 80% 60%, rgba(124,58,237,0.08) 0%, transparent 60%);
          pointer-events: none;
        }
        .home-hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%);
        }
        .home-hero-inner {
          position: relative; z-index: 1;
          max-width: 760px; margin: 0 auto;
        }
        .home-tag {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 16px; border-radius: 100px;
          font-size: 0.78rem; font-weight: 700; letter-spacing: 0.04em;
          background: rgba(99,102,241,0.12);
          border: 1px solid rgba(99,102,241,0.3);
          color: var(--indigo-light);
          margin-bottom: 22px;
        }
        .home-tag-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--indigo-light);
          animation: tag-pulse 2s infinite;
        }
        @keyframes tag-pulse {
          0%,100% { opacity:1; box-shadow: 0 0 0 0 rgba(129,140,248,0.5); }
          50% { opacity:0.7; box-shadow: 0 0 0 5px rgba(129,140,248,0); }
        }
        .home-h1 {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5.5vw, 3.6rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 20px;
          color: var(--text-primary);
        }
        .home-h1 .grad {
          background: linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #c084fc 100%);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .home-desc {
          color: var(--text-secondary);
          font-size: clamp(0.95rem, 2vw, 1.08rem);
          max-width: 520px; margin: 0 auto 36px;
          line-height: 1.75;
        }
        .home-cta-row {
          display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;
          margin-bottom: 56px;
        }
        .home-btn-primary {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          border: none; border-radius: 12px;
          padding: 13px 28px; color: #fff;
          font-family: var(--font-display); font-weight: 700; font-size: 0.95rem;
          cursor: pointer; transition: all 0.22s;
          box-shadow: 0 4px 20px rgba(99,102,241,0.35);
        }
        .home-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(99,102,241,0.45); }
        .home-btn-secondary {
          background: var(--bg-elevated);
          border: 1px solid var(--border); border-radius: 12px;
          padding: 13px 28px; color: var(--text-primary);
          font-family: var(--font-display); font-weight: 600; font-size: 0.95rem;
          cursor: pointer; transition: all 0.2s;
        }
        .home-btn-secondary:hover { background: var(--bg-card); border-color: rgba(255,255,255,0.2); transform: translateY(-1px); }

        /* ── stats strip ── */
        .home-stats {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 18px;
          overflow: hidden;
        }
        .home-stat {
          display: flex; flex-direction: column; align-items: center;
          gap: 3px; padding: 18px 8px;
          border-right: 1px solid var(--border);
          transition: background 0.15s;
        }
        .home-stat:last-child { border-right: none; }
        .home-stat:hover { background: var(--bg-elevated); }
        .home-stat-icon { font-size: 1.15rem; }
        .home-stat-val {
          font-family: var(--font-display); font-weight: 900;
          font-size: clamp(1.1rem, 2vw, 1.45rem);
          color: var(--text-primary); line-height: 1;
        }
        .home-stat-lbl {
          font-size: 0.65rem; font-weight: 600;
          color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.07em;
        }

        /* ── sections ── */
        .home-section { padding: 64px 24px; max-width: 1320px; margin: 0 auto; }
        .home-section-alt {
          background: var(--bg-card);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 64px 0;
        }
        .home-section-alt .home-section { padding-top: 0; padding-bottom: 0; }
        .home-sec-head {
          display: flex; align-items: flex-end;
          justify-content: space-between; margin-bottom: 28px;
          gap: 12px; flex-wrap: wrap;
        }
        .home-sec-title {
          font-family: var(--font-display); font-weight: 800;
          font-size: clamp(1.3rem, 3vw, 1.6rem);
          color: var(--text-primary); margin-bottom: 4px; letter-spacing: -0.02em;
        }
        .home-sec-sub { font-size: 0.875rem; color: var(--text-muted); }
        .home-see-all {
          background: none; border: 1px solid var(--border);
          border-radius: 9px; padding: 6px 16px;
          color: var(--indigo-light); font-family: var(--font-body);
          font-weight: 600; font-size: 0.82rem; cursor: pointer;
          transition: all 0.15s; white-space: nowrap;
        }
        .home-see-all:hover { background: var(--indigo-dim); border-color: rgba(99,102,241,0.4); }

        /* ── grids ── */
        .home-grid-3 {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
        }
        .home-grid-4 {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;
        }

        /* ── exam card ── */
        .home-exam-card {
          background: var(--bg-card);
          border: 1px solid var(--border); border-radius: 16px;
          padding: 20px; cursor: pointer;
          transition: all 0.22s;
          display: flex; flex-direction: column; gap: 0;
        }
        .home-exam-card:hover {
          border-color: rgba(99,102,241,0.35);
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.22);
        }
        .home-exam-top {
          display: flex; align-items: center;
          justify-content: space-between; margin-bottom: 12px; gap: 6px; flex-wrap: wrap;
        }
        .home-tipo-chip {
          padding: 3px 10px; border-radius: 100px;
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.05em; text-transform: uppercase;
        }
        .home-tipo-parcial { background: rgba(99,102,241,0.14); color: var(--indigo-light); }
        .home-tipo-final   { background: rgba(244,63,94,0.1); color: #fb7185; }
        .home-chip-small {
          font-size: 0.68rem; font-weight: 600; border-radius: 100px; padding: 2px 8px;
        }
        .home-chip-premium { background: var(--amber-dim); color: var(--amber); border: 1px solid rgba(245,158,11,0.3); }
        .home-chip-resuelto { background: var(--emerald-dim); color: var(--emerald); border: 1px solid rgba(16,185,129,0.3); }
        .home-exam-title {
          font-family: var(--font-display); font-weight: 700;
          font-size: 0.95rem; line-height: 1.35; margin-bottom: 10px; color: var(--text-primary);
        }
        .home-curso-row {
          display: flex; align-items: center; gap: 7px; margin-bottom: 14px;
        }
        .home-curso-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
        .home-curso-name { font-size: 0.8rem; color: var(--text-secondary); font-weight: 500; }
        .home-curso-code {
          font-size: 0.7rem; color: var(--text-muted);
          background: var(--bg-elevated); border: 1px solid var(--border);
          border-radius: 4px; padding: 1px 6px;
        }
        .home-meta {
          display: flex; gap: 12px; font-size: 0.78rem;
          color: var(--text-muted); margin-top: auto; align-items: center;
        }
        .home-meta-date { margin-left: auto; font-size: 0.72rem; }

        /* ── apunte card ── */
        .home-apunte-card {
          background: var(--bg-card);
          border: 1px solid var(--border); border-radius: 14px;
          padding: 18px; cursor: pointer;
          transition: all 0.2s;
          display: flex; flex-direction: column;
        }
        .home-apunte-card:hover {
          border-color: rgba(99,102,241,0.3);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.18);
        }
        .home-apunte-type-row {
          display: flex; align-items: center; gap: 7px; margin-bottom: 9px;
        }
        .home-apunte-type-lbl {
          font-size: 0.68rem; font-weight: 700; color: var(--text-muted);
          text-transform: uppercase; letter-spacing: 0.07em;
        }
        .home-apunte-title {
          font-family: var(--font-display); font-weight: 700;
          font-size: 0.875rem; line-height: 1.4; margin-bottom: 6px; color: var(--text-primary);
        }
        .home-apunte-curso { font-size: 0.78rem; color: var(--text-secondary); margin-bottom: 12px; }

        /* ── steps ── */
        .home-steps {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
        }
        .home-step {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 18px; padding: 28px 22px;
          position: relative; overflow: hidden;
          transition: all 0.22s;
        }
        .home-step:hover { border-color: rgba(99,102,241,0.3); transform: translateY(-2px); }
        .home-step-num {
          font-family: var(--font-display); font-size: 0.68rem; font-weight: 800;
          color: var(--indigo-light); letter-spacing: 0.12em;
          text-transform: uppercase; margin-bottom: 14px;
        }
        .home-step-icon { font-size: 1.9rem; margin-bottom: 14px; display: block; }
        .home-step-title {
          font-family: var(--font-display); font-weight: 800;
          font-size: 0.95rem; margin-bottom: 8px; color: var(--text-primary);
        }
        .home-step-desc { color: var(--text-secondary); font-size: 0.84rem; line-height: 1.65; }
        .home-step-bg-num {
          position: absolute; right: -8px; bottom: -16px;
          font-family: var(--font-display); font-weight: 900;
          font-size: 5rem; color: rgba(99,102,241,0.05);
          pointer-events: none; line-height: 1; user-select: none;
        }

        /* ── cta banner ── */
        .home-cta-banner {
          background: linear-gradient(135deg,
            rgba(99,102,241,0.1) 0%,
            rgba(124,58,237,0.07) 50%,
            rgba(99,102,241,0.04) 100%);
          border-top: 1px solid rgba(99,102,241,0.18);
          border-bottom: 1px solid rgba(99,102,241,0.18);
          padding: 80px 24px;
          text-align: center;
        }
        .home-cta-title {
          font-family: var(--font-display); font-weight: 900;
          font-size: clamp(1.6rem, 4vw, 2.2rem);
          letter-spacing: -0.02em; margin-bottom: 12px;
        }
        .home-cta-sub {
          color: var(--text-secondary); font-size: 1rem;
          max-width: 480px; margin: 0 auto 32px; line-height: 1.7;
        }
        .home-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

        /* ── social proof ── */
        .home-avatars {
          display: flex; align-items: center; gap: 6px;
          justify-content: center; margin-bottom: 16px;
        }
        .home-av {
          width: 36px; height: 36px; border-radius: 50%;
          border: 2px solid var(--bg-card);
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.75rem; font-weight: 700; color: #fff;
          margin-left: -8px; flex-shrink: 0;
        }
        .home-av:first-child { margin-left: 0; }
        .home-av-count {
          background: var(--bg-elevated); border: 1px solid var(--border);
          border-radius: 100px; padding: 4px 12px;
          font-size: 0.78rem; font-weight: 600; color: var(--text-secondary);
          margin-left: 6px;
        }

        /* ── responsive ── */
        @media (max-width: 1100px) {
          .home-grid-4 { grid-template-columns: repeat(2, 1fr); }
          .home-steps { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 860px) {
          .home-grid-3 { grid-template-columns: repeat(2, 1fr); }
          .home-stats { grid-template-columns: repeat(3, 1fr); }
          .home-stat:nth-child(3) { border-right: none; }
          .home-stat:nth-child(4) { border-top: 1px solid var(--border); }
          .home-stat:nth-child(5) { border-top: 1px solid var(--border); }
          .home-stat:nth-child(6) { border-top: 1px solid var(--border); border-right: none; }
        }
        @media (max-width: 600px) {
          .home-hero { padding: 52px 16px 44px; }
          .home-grid-3 { grid-template-columns: 1fr; }
          .home-grid-4 { grid-template-columns: 1fr; }
          .home-steps { grid-template-columns: 1fr; }
          .home-stats { grid-template-columns: repeat(2, 1fr); }
          .home-stat:nth-child(2) { border-right: none; }
          .home-stat:nth-child(3) { border-top: 1px solid var(--border); border-right: 1px solid var(--border); }
          .home-section { padding: 44px 16px; }
          .home-cta-banner { padding: 56px 16px; }
        }
      `}),n.jsxs("section",{className:"home-hero",children:[n.jsx("div",{className:"home-hero-bg"}),n.jsx("div",{className:"home-hero-grid"}),n.jsxs("div",{className:"home-hero-inner",children:[n.jsx("div",{className:"h-fade h-d1",children:n.jsxs("div",{className:"home-tag",children:[n.jsx("span",{className:"home-tag-dot"}),"Plataforma académica · Universidad Continental"]})}),n.jsxs("h1",{className:"home-h1 h-fade h-d2",children:["El conocimiento de",n.jsx("br",{}),n.jsx("span",{className:"grad",children:"toda la UC, en un solo lugar"})]}),n.jsx("p",{className:"home-desc h-fade h-d3",children:"Comparte apuntes, accede a exámenes anteriores y colabora con compañeros de todos los ciclos y carreras de la Continental."}),n.jsxs("div",{className:"home-cta-row h-fade h-d4",children:[n.jsx("button",{className:"home-btn-primary",onClick:()=>e("examenes"),children:"Ver exámenes 📋"}),n.jsx("button",{className:"home-btn-secondary",onClick:()=>e("apuntes"),children:"Explorar apuntes →"})]}),n.jsx("div",{className:"home-stats h-fade h-d5",children:[{label:"Apuntes",value:ar.apuntes.toLocaleString(),icon:"📝"},{label:"Exámenes",value:ar.examenes.toLocaleString(),icon:"📋"},{label:"Estudiantes",value:ar.estudiantes.toLocaleString(),icon:"👥"},{label:"Cursos",value:ar.cursos.toLocaleString(),icon:"📚"},{label:"Docentes",value:ar.docentes.toLocaleString(),icon:"👨‍🏫"},{label:"Carreras",value:ar.carreras.toLocaleString(),icon:"🏛️"}].map(a=>n.jsxs("div",{className:"home-stat",children:[n.jsx("span",{className:"home-stat-icon",children:a.icon}),n.jsx("span",{className:"home-stat-val",children:a.value}),n.jsx("span",{className:"home-stat-lbl",children:a.label})]},a.label))})]})]}),n.jsxs("section",{className:"home-section",children:[n.jsxs("div",{className:"home-sec-head h-fade h-d6",children:[n.jsxs("div",{children:[n.jsx("div",{className:"home-sec-title",children:"Exámenes recientes"}),n.jsx("div",{className:"home-sec-sub",children:"Los más descargados esta semana"})]}),n.jsx("button",{className:"home-see-all",onClick:()=>e("examenes"),children:"Ver todos →"})]}),n.jsx("div",{className:"home-grid-3",children:Be.slice(0,3).map((a,o)=>{const i=be.find(l=>l.id===a.cursoId);return n.jsx("div",{className:`h-fade h-d${Math.min(o+7,8)}`,children:n.jsx(Om,{ex:a,curso:i,navigate:e})},a.id)})})]}),n.jsx("div",{className:"home-section-alt",children:n.jsxs("div",{className:"home-section",children:[n.jsxs("div",{className:"home-sec-head",children:[n.jsxs("div",{children:[n.jsx("div",{className:"home-sec-title",children:"Apuntes destacados"}),n.jsx("div",{className:"home-sec-sub",children:"Material verificado por la comunidad"})]}),n.jsx("button",{className:"home-see-all",onClick:()=>e("apuntes"),children:"Ver todos →"})]}),n.jsx("div",{className:"home-grid-4",children:cr.slice(0,4).map(a=>{const o=be.find(i=>i.id===a.cursoId);return n.jsx($m,{ap:a,curso:o},a.id)})})]})}),n.jsxs("section",{className:"home-section",children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:44},children:[n.jsx("div",{className:"home-sec-title",children:"¿Cómo funciona?"}),n.jsx("div",{className:"home-sec-sub",style:{marginTop:4},children:"Simple, rápido y colaborativo"})]}),n.jsx("div",{className:"home-steps",children:[{n:"01",icon:"🔍",title:"Busca tu curso",desc:"Filtra por carrera, ciclo o docente y encuentra exactamente lo que necesitas."},{n:"02",icon:"⬇️",title:"Descarga o visualiza",desc:"Accede a apuntes y exámenes al instante. Algunos son gratuitos, otros premium."},{n:"03",icon:"📤",title:"Comparte y gana",desc:"Sube tus propios materiales y acumula puntos para desbloquear beneficios."},{n:"04",icon:"🏆",title:"Destácate",desc:"Asciende en el ranking y obtén acceso a contenido exclusivo de alumnos top."}].map(a=>n.jsxs("div",{className:"home-step",children:[n.jsx("div",{className:"home-step-num",children:a.n}),n.jsx("span",{className:"home-step-icon",children:a.icon}),n.jsx("div",{className:"home-step-title",children:a.title}),n.jsx("div",{className:"home-step-desc",children:a.desc}),n.jsx("div",{className:"home-step-bg-num",children:a.n})]},a.n))})]}),n.jsxs("div",{className:"home-cta-banner",children:[n.jsxs("div",{className:"home-avatars",children:[["B","M","K","A","R"].map((a,o)=>n.jsx("div",{className:"home-av",style:{background:`hsl(${220+o*20},70%,55%)`},children:a},o)),n.jsx("span",{className:"home-av-count",children:"+8,900 estudiantes"})]}),n.jsx("h2",{className:"home-cta-title",children:"¿Listo para aprobar con nota más alta?"}),n.jsx("p",{className:"home-cta-sub",children:"Únete a más de 4,000 estudiantes de la Continental que ya usan ApuntesUC."}),n.jsxs("div",{className:"home-cta-btns",children:[n.jsx("button",{className:"home-btn-primary",onClick:()=>e("login"),children:"Crear cuenta gratis"}),n.jsx("button",{className:"home-btn-secondary",onClick:()=>e("planes"),children:"Ver planes premium"})]})]})]})}function Om({ex:e,curso:r,navigate:t}){return n.jsxs("div",{className:"home-exam-card",onClick:()=>t("examenes"),children:[n.jsxs("div",{className:"home-exam-top",children:[n.jsx("span",{className:`home-tipo-chip ${e.tipo==="Final"?"home-tipo-final":"home-tipo-parcial"}`,children:e.tipo}),n.jsxs("div",{style:{display:"flex",gap:5},children:[e.premium&&n.jsx("span",{className:"home-chip-small home-chip-premium",children:"⭐ Premium"}),e.resuelto&&n.jsx("span",{className:"home-chip-small home-chip-resuelto",children:"✓ Resuelto"})]})]}),n.jsx("h3",{className:"home-exam-title",children:e.titulo}),r&&n.jsxs("div",{className:"home-curso-row",children:[n.jsx("span",{className:"home-curso-dot",style:{background:r.color}}),n.jsx("span",{className:"home-curso-name",children:r.nombre}),n.jsx("span",{className:"home-curso-code",children:r.codigo})]}),n.jsxs("div",{className:"home-meta",children:[n.jsxs("span",{children:["⬇️ ",e.descargas]}),n.jsxs("span",{children:["❤️ ",e.likes]}),n.jsx("span",{className:"home-meta-date",children:e.fecha})]})]})}function $m({ap:e,curso:r}){return n.jsxs("div",{className:"home-apunte-card",children:[n.jsxs("div",{className:"home-apunte-type-row",children:[n.jsx("span",{style:{fontSize:"1rem"},children:Dm(e.tipo)}),n.jsx("span",{className:"home-apunte-type-lbl",children:e.tipo}),e.premium&&n.jsx("span",{className:"home-chip-small home-chip-premium",style:{marginLeft:"auto"},children:"⭐"})]}),n.jsx("div",{className:"home-apunte-title",children:e.titulo}),r&&n.jsx("div",{className:"home-apunte-curso",children:r.nombre}),n.jsxs("div",{className:"home-meta",style:{marginTop:"auto"},children:[n.jsxs("span",{children:["⬇️ ",e.descargas]}),n.jsxs("span",{children:["❤️ ",e.likes]}),n.jsxs("span",{className:"home-meta-date",children:["Sem. ",e.semana]})]})]})}function Um({navigate:e}){const[r,t]=S.useState(""),[a,o]=S.useState("all"),[i,l]=S.useState("all"),[s,c]=S.useState("all"),p=S.useMemo(()=>s==="all"?[...new Set(be.map(v=>v.carreraId))].map(v=>ce.find(w=>w.id===v)).filter(Boolean):ce.filter(v=>String(v.facultadId)===s),[s]),g=S.useMemo(()=>be.filter(v=>{const w=r.toLowerCase(),k=v.nombre.toLowerCase().includes(w)||v.codigo.toLowerCase().includes(w),N=a==="all"||String(v.carreraId)===a,u=i==="all"||String(v.ciclo)===i,d=s==="all"||(()=>{const m=ce.find(h=>h.id===v.carreraId);return m?String(m.facultadId)===s:!1})();return k&&N&&u&&d}),[r,a,i,s]),b=()=>{t(""),o("all"),l("all"),c("all")},x=r||a!=="all"||i!=="all"||s!=="all";return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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

        /* filter bar */
        .cur-filters {
          display: flex; gap: 10px; margin-bottom: 16px; flex-wrap: wrap;
        }
        .cur-search-wrap {
          position: relative; flex: 1; min-width: 200px;
        }
        .cur-search-icon {
          position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
          font-size: 0.9rem; pointer-events: none;
        }
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
          font-family: var(--font-body); cursor: pointer; white-space: nowrap;
          transition: all 0.15s;
        }
        .cur-reset:hover { background: rgba(239,68,68,0.14); }

        /* chips */
        .cur-chips { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 28px; }
        .cur-chip {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 100px; padding: 5px 14px;
          font-size: 0.78rem; font-weight: 500; color: var(--text-muted);
          cursor: pointer; font-family: var(--font-body);
          transition: all 0.15s; white-space: nowrap;
          display: flex; align-items: center; gap: 6px;
        }
        .cur-chip:hover { background: var(--bg-elevated); color: var(--text-secondary); }
        .cur-chip.active {
          background: var(--indigo-dim); border-color: rgba(99,102,241,0.4); color: var(--indigo-light);
        }
        .cur-chip-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }

        /* grid */
        .cur-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(288px, 1fr)); gap: 20px;
        }

        /* card */
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
        .cur-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.22);
        }
        .cur-card-top {
          display: flex; justify-content: space-between;
          align-items: flex-start; margin-bottom: 14px;
        }
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
        .cur-meta {
          display: flex; align-items: center; gap: 8px; margin-bottom: 16px; flex-wrap: wrap;
        }
        .cur-ciclo {
          background: var(--bg-elevated); border: 1px solid var(--border);
          border-radius: 100px; padding: 2px 10px;
          font-size: 0.7rem; font-weight: 700; color: var(--text-secondary);
        }
        .cur-docente {
          display: flex; align-items: center; gap: 6px;
          font-size: 0.76rem; color: var(--text-muted);
        }
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
          cursor: pointer; font-family: var(--font-body);
          transition: all 0.15s; text-align: center;
        }
        .cur-action-btn:hover { background: var(--indigo-dim); color: var(--indigo-light); border-color: rgba(99,102,241,0.35); }

        /* empty */
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
      `}),n.jsxs("div",{className:"cur-page page-container",children:[n.jsxs("div",{className:"cur-header",children:[n.jsxs("div",{children:[n.jsx("h1",{className:"cur-title",children:"Cursos"}),n.jsxs("p",{className:"cur-sub",children:[be.length," cursos disponibles en la plataforma"]})]}),n.jsxs("span",{className:"cur-count",children:[n.jsx("span",{children:g.length})," resultados"]})]}),n.jsxs("div",{className:"cur-filters",children:[n.jsxs("div",{className:"cur-search-wrap",children:[n.jsx("span",{className:"cur-search-icon",children:"🔍"}),n.jsx("input",{className:"cur-search",placeholder:"Buscar curso o código...",value:r,onChange:v=>t(v.target.value)})]}),n.jsxs("select",{className:`cur-select${s!=="all"?" active":""}`,value:s,onChange:v=>{c(v.target.value),o("all")},children:[n.jsx("option",{value:"all",children:"Todas las facultades"}),Ze.map(v=>n.jsxs("option",{value:String(v.id),children:[v.icono," ",v.nombre]},v.id))]}),n.jsxs("select",{className:`cur-select${a!=="all"?" active":""}`,value:a,onChange:v=>o(v.target.value),children:[n.jsx("option",{value:"all",children:"Todas las carreras"}),p.map(v=>n.jsx("option",{value:String(v.id),children:v.nombre},v.id))]}),n.jsxs("select",{className:`cur-select${i!=="all"?" active":""}`,value:i,onChange:v=>l(v.target.value),children:[n.jsx("option",{value:"all",children:"Todos los ciclos"}),[1,2,3,4,5,6,7,8,9,10].map(v=>n.jsxs("option",{value:v,children:["Ciclo ",v]},v))]}),x&&n.jsx("button",{className:"cur-reset",onClick:b,children:"✕ Limpiar"})]}),n.jsxs("div",{className:"cur-chips",children:[n.jsx("button",{className:`cur-chip${a==="all"?" active":""}`,onClick:()=>o("all"),children:"Todas"}),p.slice(0,8).map(v=>n.jsxs("button",{className:`cur-chip${a===String(v.id)?" active":""}`,onClick:()=>o(String(v.id)),children:[n.jsx("span",{className:"cur-chip-dot",style:{background:v.color}}),v.codigo]},v.id))]}),g.length===0?n.jsxs("div",{className:"cur-empty",children:[n.jsx("div",{className:"cur-empty-icon",children:"🔍"}),n.jsx("div",{className:"cur-empty-title",children:"No encontramos cursos con esos filtros"}),n.jsx("div",{children:"Prueba cambiando la búsqueda o los filtros"}),n.jsx("button",{className:"cur-reset",onClick:b,style:{marginTop:8},children:"✕ Limpiar filtros"})]}):n.jsx("div",{className:"cur-grid",children:g.map((v,w)=>{const k=Wr.find(u=>u.id===v.docenteId),N=ce.find(u=>u.id===v.carreraId);return n.jsx(Hm,{curso:v,docente:k,carrera:N,navigate:e,delay:Math.min(w*.03,.24)},v.id)})})]})]})}function Hm({curso:e,docente:r,carrera:t,navigate:a,delay:o}){return n.jsxs("div",{className:"cur-card",style:{borderTopColor:e.color,animationDelay:`${o}s`},onClick:()=>a("examenes"),onMouseEnter:i=>{i.currentTarget.style.borderColor=`${e.color}55`,i.currentTarget.style.borderTopColor=e.color},onMouseLeave:i=>{i.currentTarget.style.borderColor="var(--border)",i.currentTarget.style.borderTopColor=e.color},children:[n.jsxs("div",{className:"cur-card-top",children:[n.jsx("span",{className:"cur-code",style:{background:`${e.color}20`,color:e.color,border:`1px solid ${e.color}40`},children:e.codigo}),n.jsxs("span",{className:"cur-creds",children:[e.creditos," cr."]})]}),n.jsx("h3",{className:"cur-nombre",children:e.nombre}),n.jsx("p",{className:"cur-carrera",children:(t==null?void 0:t.nombre)??"—"}),n.jsxs("div",{className:"cur-meta",children:[n.jsxs("span",{className:"cur-ciclo",children:["Ciclo ",e.ciclo]}),r&&n.jsxs("span",{className:"cur-docente",children:[n.jsx("span",{className:"cur-doc-av",children:r.iniciales}),r.nombre.split(" ").slice(1,3).join(" ")]})]}),n.jsxs("div",{className:"cur-actions",children:[n.jsx("button",{className:"cur-action-btn",onClick:i=>{i.stopPropagation(),a("apuntes")},children:"📝 Apuntes"}),n.jsx("button",{className:"cur-action-btn",onClick:i=>{i.stopPropagation(),a("examenes")},children:"📋 Exámenes"})]})]})}function Vd({open:e,onClose:r,title:t,children:a,size:o="md"}){if(S.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[e]),S.useEffect(()=>{if(!e)return;const l=s=>{s.key==="Escape"&&r()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[e,r]),!e)return null;const i=o==="lg"?680:o==="sm"?400:540;return $d.createPortal(n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsx("div",{className:"modal-overlay",onMouseDown:r,children:n.jsxs("div",{className:"modal-box",style:{maxWidth:i},onMouseDown:l=>l.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("div",{className:"modal-title-wrap",children:n.jsx("h3",{className:"modal-title",children:t})}),n.jsx("button",{className:"modal-close",onClick:r,"aria-label":"Cerrar modal",children:"✕"})]}),n.jsx("div",{className:"modal-body",children:a})]})})]}),document.body)}const ys=["Todos","Resumen","Guía","Apunte","Mapa","Esquema","Código"],Vt={Resumen:"📄",Mapa:"🗺️",Guía:"📘",Apunte:"📝",Esquema:"📊",Código:"💻"},Vm=[{value:"fecha",label:"Más recientes"},{value:"descargas",label:"Más descargados"},{value:"likes",label:"Más valorados"},{value:"vistas",label:"Más vistos"}];function Gm({msg:e,onDone:r}){return S.useEffect(()=>{const t=setTimeout(r,3e3);return()=>clearTimeout(t)},[r]),n.jsxs("div",{style:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",background:"var(--bg-elevated)",border:"1px solid var(--border)",borderRadius:12,padding:"11px 20px",zIndex:1e4,fontSize:"0.82rem",color:"var(--text-secondary)",fontWeight:600,boxShadow:"0 8px 28px rgba(0,0,0,0.35)",display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{children:"🔒"}),e]})}function qm({archivo:e}){const r=Io[e.tipo]||Io.pdf,t=e.paginas?`${e.paginas} págs.`:e.diapositivas?`${e.diapositivas} slides`:e.hojas?`${e.hojas} hojas`:e.archivos?`${e.archivos} archivos`:e.dimensiones??"",a=!!e.url;return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,background:"var(--bg-elevated)",border:"1px solid var(--border)",borderRadius:11,padding:"9px 13px"},children:[n.jsx("span",{style:{width:34,height:34,borderRadius:8,flexShrink:0,background:r.bg,border:`1px solid ${r.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem"},children:r.icon}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:{fontSize:"0.8rem",fontWeight:600,color:"var(--text-primary)"},children:e.nombre}),n.jsxs("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",marginTop:1},children:[r.label," · ",e.tamaño,t?` · ${t}`:""]})]}),n.jsx("button",{onClick:()=>Ud(e),style:{flexShrink:0,background:a?"var(--indigo-dim)":"var(--bg-card)",border:`1px solid ${a?"rgba(99,102,241,0.35)":"var(--border)"}`,borderRadius:7,padding:"4px 10px",color:a?"var(--indigo-light)":"var(--text-muted)",fontSize:"0.7rem",fontWeight:700,cursor:a?"pointer":"not-allowed"},children:a?"📄 Abrir":"🔒 Demo"})]})}function Wm({ap:e,curso:r,docente:t,onOpen:a,delay:o}){var l,s;const i=r?Ze.find(c=>{var p;return c.id===((p=ce.find(g=>g.id===r.carreraId))==null?void 0:p.facultadId)}):null;return n.jsxs("div",{className:"ap-card",style:{animationDelay:`${o}s`},onClick:a,children:[e.previewImg&&n.jsxs("div",{className:"ap-card-img-wrap",children:[n.jsx("img",{src:e.previewImg,alt:e.titulo,className:"ap-card-img",loading:"lazy"}),n.jsx("div",{className:"ap-card-img-overlay"}),r&&n.jsxs("span",{className:"ap-card-ciclo-badge",children:["Ciclo ",r.ciclo]}),e.premium&&n.jsx("span",{className:"ap-card-premium-img-badge",children:"⭐ PRO"})]}),n.jsxs("div",{className:"ap-card-body",children:[n.jsxs("div",{className:"ap-card-top",children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[n.jsx("span",{style:{fontSize:"0.88rem"},children:Vt[e.tipo]||"📄"}),n.jsx("span",{className:"ap-tipo-lbl",children:e.tipo})]}),i&&n.jsx("span",{className:"ap-fac-chip",style:{background:`${i.color}18`,color:i.color,borderColor:`${i.color}35`},children:i.icono})]}),n.jsx("h3",{className:"ap-titulo",children:e.titulo}),r&&n.jsxs("div",{className:"ap-curso-row",children:[n.jsx("span",{className:"ap-curso-dot",style:{background:r.color}}),n.jsx("span",{className:"ap-curso-name",children:r.nombre})]}),t&&n.jsxs("div",{className:"ap-docente-row",children:[n.jsx("span",{className:"ap-doc-av",children:t.iniciales}),n.jsx("span",{className:"ap-doc-name",children:t.nombre.split(" ").slice(0,3).join(" ")})]}),((l=e.temas)==null?void 0:l.length)>0&&n.jsxs("div",{className:"ap-temas-preview",children:[e.temas.slice(0,2).map(c=>n.jsx("span",{className:"ap-tema-mini",children:c},c)),e.temas.length>2&&n.jsxs("span",{className:"ap-tema-mini ap-tema-more",children:["+",e.temas.length-2]})]}),n.jsxs("div",{className:"ap-meta",children:[n.jsxs("span",{children:["⬇️ ",e.descargas.toLocaleString()]}),n.jsxs("span",{children:["❤️ ",e.likes]}),((s=e.archivos)==null?void 0:s.length)>0&&n.jsxs("span",{children:["📎 ",e.archivos.length]}),n.jsx("span",{className:"ap-meta-date",children:e.fecha})]})]}),e.premium&&n.jsxs("div",{className:"ap-lock-overlay",children:[n.jsx("span",{style:{fontSize:"1.4rem",marginBottom:4},children:"🔒"}),n.jsx("span",{className:"ap-lock-text",children:"Solo Premium"})]})]})}function Km({navigate:e}){var F,L,V;const{user:r}=Pt(),[t,a]=S.useState(!1),[o,i]=S.useState(""),[l,s]=S.useState("Todos"),[c,p]=S.useState("all"),[g,b]=S.useState("all"),[x,v]=S.useState("all"),[w,k]=S.useState(!1),[N,u]=S.useState("fecha"),[d,m]=S.useState(null),[h,C]=S.useState(null),[_,z]=S.useState("grid");S.useEffect(()=>{const y=f=>C(f.detail.nombre);return window.addEventListener("demo-no-url",y),()=>window.removeEventListener("demo-no-url",y)},[]);const T=S.useMemo(()=>c==="all"?ce:ce.filter(y=>y.facultadId===Number(c)),[c]),q=S.useMemo(()=>[...new Set(be.map(f=>f.ciclo))].sort((f,P)=>f-P),[]),R=S.useMemo(()=>{let y=cr.filter(f=>{var ja;const P=be.find(Dr=>Dr.id===f.cursoId),D=P?ce.find(Dr=>Dr.id===P.carreraId):null,W=f.titulo.toLowerCase().includes(o.toLowerCase())||((ja=f.temas)==null?void 0:ja.some(Dr=>Dr.toLowerCase().includes(o.toLowerCase())))||(P==null?void 0:P.nombre.toLowerCase().includes(o.toLowerCase())),oe=l==="Todos"||f.tipo===l,ge=c==="all"||D&&D.facultadId===Number(c),Ho=g==="all"||P&&String(P.carreraId)===g,Vo=x==="all"||P&&String(P.ciclo)===x,Go=!w||!f.premium;return W&&oe&&ge&&Ho&&Vo&&Go});return y=[...y].sort((f,P)=>N==="fecha"?P.fecha.localeCompare(f.fecha):N==="descargas"?P.descargas-f.descargas:N==="likes"?P.likes-f.likes:N==="vistas"?(P.vistas||0)-(f.vistas||0):0),y},[o,l,c,g,x,w,N]),te=S.useMemo(()=>{const y={};return ys.forEach(f=>{y[f]=f==="Todos"?cr.length:cr.filter(P=>P.tipo===f).length}),y},[]),fe=o||l!=="Todos"||c!=="all"||g!=="all"||x!=="all"||w,qe=S.useCallback(()=>{i(""),s("Todos"),p("all"),b("all"),v("all"),k(!1)},[]),le=d?be.find(y=>y.id===d.cursoId):null,Ne=le?ce.find(y=>y.id===le.carreraId):null,we=Ne?Ze.find(y=>y.id===Ne.facultadId):null,Me=d?Wr.find(y=>y.id===d.docenteId):null,E=(d==null?void 0:d.premium)&&!r;return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        /* ── Animaciones ── */
        .ap-page { animation: ap-in 0.35s ease both; }
        @keyframes ap-in { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:none} }
        @keyframes ap-card-in { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }

        /* ── Header ── */
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

        /* ── Stats bar ── */
        .ap-stats-bar {
          display:flex; gap:10px; flex-wrap:wrap; margin-bottom:24px;
        }
        .ap-stat-chip {
          display:flex; align-items:center; gap:6px;
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:100px; padding:6px 14px;
          font-size:0.76rem; font-weight:600; color:var(--text-secondary);
        }
        .ap-stat-chip span { font-weight:800; color:var(--text-primary); }

        /* ── Filtros ── */
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

        /* ── Facultad chips ── */
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

        /* ── Tipo pills ── */
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

        /* ── Result / toolbar ── */
        .ap-toolbar {
          display:flex; align-items:center; gap:10px; margin-bottom:20px; flex-wrap:wrap;
        }
        .ap-result-count { font-size:0.82rem; color:var(--text-muted); flex:1; }
        .ap-result-count strong { color:var(--text-secondary); }
        .ap-sort-select {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:9px; padding:6px 12px;
          color:var(--text-secondary); font-size:0.8rem; font-family:var(--font-body);
          outline:none; cursor:pointer;
        }
        .ap-view-btns { display:flex; gap:4px; }
        .ap-view-btn {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:8px; padding:6px 10px; cursor:pointer;
          font-size:0.85rem; transition:all 0.15s; color:var(--text-muted);
        }
        .ap-view-btn.active { background:var(--indigo-dim); border-color:rgba(99,102,241,0.35); color:var(--indigo-light); }

        /* ── Grid ── */
        .ap-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(268px,1fr)); gap:18px; }

        /* ── List ── */
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

        /* ── Card ── */
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
          border:1px solid rgba(255,255,255,0.12);
          border-radius:100px; padding:2px 9px;
          font-size:0.68rem; font-weight:700; color:rgba(255,255,255,0.85);
        }
        .ap-card-premium-img-badge {
          position:absolute; top:8px; right:8px;
          background:rgba(245,158,11,0.85); backdrop-filter:blur(6px);
          border-radius:100px; padding:2px 9px;
          font-size:0.68rem; font-weight:800; color:#fff;
        }
        .ap-card-body { padding:14px 16px 16px; display:flex; flex-direction:column; flex:1; }
        .ap-card-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:9px; }
        .ap-tipo-lbl { font-size:0.68rem; font-weight:800; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.07em; }
        .ap-fac-chip {
          font-size:0.72rem; font-weight:700; border-radius:7px; padding:2px 8px;
          border:1px solid; white-space:nowrap;
        }
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
          border-radius:100px; padding:2px 8px;
          font-size:0.66rem; color:var(--text-muted); font-weight:500;
        }
        .ap-tema-more { background:var(--indigo-dim); color:var(--indigo-light); border-color:rgba(99,102,241,0.3); }
        .ap-meta {
          display:flex; gap:10px; font-size:0.76rem;
          color:var(--text-muted); margin-top:auto; align-items:center;
        }
        .ap-meta-date { margin-left:auto; font-size:0.68rem; }
        .ap-lock-overlay {
          position:absolute; inset:0;
          background:linear-gradient(to top,rgba(10,10,15,0.92) 0%,rgba(10,10,15,0.5) 55%,transparent 100%);
          display:flex; flex-direction:column; align-items:center; justify-content:flex-end;
          padding:16px; opacity:0; transition:opacity 0.2s; pointer-events:none;
        }
        .ap-card:hover .ap-lock-overlay { opacity:1; }
        .ap-lock-text { font-size:0.8rem; font-weight:700; color:#fff; text-align:center; }

        /* ── Empty ── */
        .ap-empty { text-align:center; padding:80px 24px; color:var(--text-muted); display:flex; flex-direction:column; gap:12px; align-items:center; }

        /* ── Modal ── */
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
          color:#fff; font-weight:700; font-size:0.875rem;
          cursor:pointer; font-family:var(--font-body);
        }

        /* ── Responsive ── */
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
      `}),h&&n.jsx(Gm,{msg:h,onDone:()=>C(null)}),n.jsxs("div",{className:"ap-page page-container",children:[n.jsxs("div",{className:"ap-header",children:[n.jsxs("div",{children:[n.jsx("h1",{className:"ap-title",children:"Apuntes"}),n.jsx("p",{className:"ap-sub",children:"Material compartido por estudiantes y docentes de la UC"})]}),n.jsx("div",{className:"ap-header-actions",children:n.jsx("button",{className:"ap-upload-btn",onClick:()=>e("planes"),children:"⬆️ Subir apunte"})})]}),n.jsxs("div",{className:"ap-stats-bar",children:[n.jsxs("div",{className:"ap-stat-chip",children:["📚 ",n.jsx("span",{children:cr.length})," apuntes"]}),n.jsxs("div",{className:"ap-stat-chip",children:["🏫 ",n.jsx("span",{children:Ze.length})," facultades"]}),n.jsxs("div",{className:"ap-stat-chip",children:["🎓 ",n.jsx("span",{children:ce.length})," carreras"]}),n.jsxs("div",{className:"ap-stat-chip",style:{color:"var(--emerald)"},children:["✓ ",n.jsx("span",{style:{color:"var(--emerald)"},children:cr.filter(y=>!y.premium).length})," gratis"]}),n.jsxs("div",{className:"ap-stat-chip",style:{color:"var(--amber)"},children:["⭐ ",n.jsx("span",{style:{color:"var(--amber)"},children:cr.filter(y=>y.premium).length})," premium"]})]}),n.jsxs("div",{className:"ap-filters-wrap",children:[n.jsxs("div",{className:"ap-filters-row",children:[n.jsxs("div",{className:"ap-search-wrap",children:[n.jsx("span",{className:"ap-search-icon",children:"🔍"}),n.jsx("input",{className:"ap-search",placeholder:"Buscar por título, tema, curso...",value:o,onChange:y=>i(y.target.value)})]}),n.jsxs("select",{className:`ap-select${g!=="all"?" active":""}`,value:g,onChange:y=>b(y.target.value),children:[n.jsx("option",{value:"all",children:"Todas las carreras"}),T.map(y=>n.jsx("option",{value:String(y.id),children:y.nombre},y.id))]}),n.jsxs("select",{className:`ap-select${x!=="all"?" active":""}`,value:x,onChange:y=>v(y.target.value),children:[n.jsx("option",{value:"all",children:"Todos los ciclos"}),q.map(y=>n.jsxs("option",{value:String(y),children:["Ciclo ",y]},y))]}),n.jsxs("button",{className:`ap-toggle${w?" on":""}`,onClick:()=>k(y=>!y),children:[w?"✓":"○"," Solo gratis"]}),fe&&n.jsx("button",{className:"ap-reset",onClick:qe,children:"✕ Limpiar"})]}),n.jsxs("div",{className:"ap-fac-row",children:[n.jsx("button",{className:`ap-fac-btn${c==="all"?" active":""}`,style:c==="all"?{background:"var(--indigo-dim)",color:"var(--indigo-light)",borderColor:"rgba(99,102,241,0.4)"}:{},onClick:()=>{p("all"),b("all")},children:"Todas"}),Ze.map(y=>n.jsxs("button",{className:`ap-fac-btn${c===String(y.id)?" active":""}`,style:c===String(y.id)?{background:y.color}:{},onClick:()=>{p(String(y.id)),b("all")},children:[y.icono," ",y.nombre.replace("Facultad de ","").replace("Facultad ","")]},y.id))]})]}),n.jsx("div",{className:"ap-pills",children:ys.map(y=>n.jsxs("button",{className:`ap-pill${l===y?" active":""}`,onClick:()=>s(y),children:[y!=="Todos"&&Vt[y]," ",y,n.jsx("span",{className:"ap-pill-count",children:te[y]})]},y))}),n.jsxs("div",{className:"ap-toolbar",children:[n.jsxs("span",{className:"ap-result-count",children:[n.jsx("strong",{children:R.length})," apunte",R.length!==1?"s":""," encontrado",R.length!==1?"s":""]}),n.jsx("select",{className:"ap-sort-select",value:N,onChange:y=>u(y.target.value),children:Vm.map(y=>n.jsx("option",{value:y.value,children:y.label},y.value))}),n.jsxs("div",{className:"ap-view-btns",children:[n.jsx("button",{className:`ap-view-btn${_==="grid"?" active":""}`,onClick:()=>z("grid"),children:"⊞"}),n.jsx("button",{className:`ap-view-btn${_==="list"?" active":""}`,onClick:()=>z("list"),children:"☰"})]})]}),R.length===0?n.jsxs("div",{className:"ap-empty",children:[n.jsx("span",{style:{fontSize:"2.5rem"},children:"📭"}),n.jsx("p",{style:{fontWeight:700,color:"var(--text-secondary)"},children:"Sin resultados"}),n.jsx("p",{children:"Prueba con otros filtros o términos de búsqueda"}),fe&&n.jsx("button",{className:"ap-reset",onClick:qe,children:"✕ Limpiar filtros"})]}):_==="grid"?n.jsx("div",{className:"ap-grid",children:R.map((y,f)=>{const P=be.find(W=>W.id===y.cursoId),D=Wr.find(W=>W.id===y.docenteId);return n.jsx(Wm,{ap:y,curso:P,docente:D,onOpen:()=>m(y),delay:Math.min(f*.03,.3)},y.id)})}):n.jsx("div",{className:"ap-list",children:R.map((y,f)=>{var W;const P=be.find(oe=>oe.id===y.cursoId),D=Wr.find(oe=>oe.id===y.docenteId);return n.jsxs("div",{className:"ap-list-row",style:{animationDelay:`${Math.min(f*.03,.3)}s`},onClick:()=>m(y),children:[y.previewImg?n.jsx("img",{src:y.previewImg,alt:y.titulo,className:"ap-list-thumb",loading:"lazy"}):n.jsx("div",{className:"ap-list-thumb-placeholder",children:Vt[y.tipo]||"📄"}),n.jsxs("div",{className:"ap-list-main",children:[n.jsx("div",{className:"ap-list-title",children:y.titulo}),n.jsx("div",{className:"ap-list-sub",children:P&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"ap-list-dot",style:{background:P.color}}),P.nombre,D&&` · ${D.nombre.split(" ").slice(0,3).join(" ")}`]})})]}),n.jsxs("div",{className:"ap-list-badge",children:[n.jsxs("span",{style:{fontSize:"0.68rem",fontWeight:700,borderRadius:100,padding:"3px 9px",background:"var(--indigo-dim)",color:"var(--indigo-light)",border:"1px solid rgba(99,102,241,0.3)"},children:[Vt[y.tipo]," ",y.tipo]}),y.premium&&n.jsx("span",{style:{fontSize:"0.68rem",fontWeight:700,borderRadius:100,padding:"3px 9px",background:"var(--amber-dim)",color:"var(--amber)",border:"1px solid rgba(245,158,11,0.3)"},children:"⭐ PRO"})]}),n.jsxs("div",{className:"ap-list-stats",children:[n.jsxs("span",{children:["⬇️ ",y.descargas.toLocaleString()]}),n.jsxs("span",{children:["❤️ ",y.likes]}),n.jsxs("span",{children:["📎 ",((W=y.archivos)==null?void 0:W.length)||0]})]})]},y.id)})}),n.jsx(Vd,{open:!!d,onClose:()=>m(null),title:d==null?void 0:d.titulo,children:d&&n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[d.previewImg&&n.jsx("img",{src:d.previewImg,alt:d.titulo,className:"ap-modal-preview",loading:"lazy"}),n.jsxs("div",{className:"ap-modal-chips",children:[n.jsxs("span",{className:"ap-modal-chip",style:{background:"var(--indigo-dim)",color:"var(--indigo-light)",border:"1px solid rgba(99,102,241,0.3)"},children:[Vt[d.tipo]," ",d.tipo]}),d.premium&&n.jsx("span",{className:"ap-modal-chip",style:{background:"var(--amber-dim)",color:"var(--amber)",border:"1px solid rgba(245,158,11,0.3)"},children:"⭐ Premium"}),we&&n.jsxs("span",{className:"ap-modal-chip",style:{background:`${we.color}18`,color:we.color,border:`1px solid ${we.color}35`},children:[we.icono," ",we.nombre.replace("Facultad de ","").replace("Facultad ","")]}),le&&n.jsx("span",{className:"ap-modal-chip",style:{background:`${le.color}18`,color:le.color,border:`1px solid ${le.color}40`},children:le.codigo})]}),n.jsxs("div",{className:"ap-stats-row",children:[n.jsxs("span",{children:["⬇️ ",n.jsx("strong",{style:{color:"var(--text-secondary)"},children:d.descargas.toLocaleString()})]}),n.jsxs("span",{children:["❤️ ",n.jsx("strong",{style:{color:"var(--text-secondary)"},children:d.likes})]}),n.jsxs("span",{children:["👁️ ",n.jsx("strong",{style:{color:"var(--text-secondary)"},children:(d.vistas||0).toLocaleString()})]}),n.jsxs("span",{style:{marginLeft:"auto",fontSize:"0.76rem",color:"var(--text-muted)"},children:["Semana ",d.semana," · ",d.fecha]})]}),d.descripcion&&n.jsxs("div",{className:"ap-modal-section",children:[n.jsx("div",{className:"ap-modal-section-label",children:"Descripción"}),n.jsx("div",{className:"ap-modal-desc",children:d.descripcion})]}),n.jsxs("div",{className:"ap-modal-section",children:[n.jsx("div",{className:"ap-modal-section-label",children:"Información"}),n.jsxs("div",{className:"ap-modal-meta-grid",children:[le&&n.jsxs("div",{className:"ap-modal-meta-item",children:[n.jsx("div",{className:"ap-modal-meta-label",children:"Curso"}),n.jsx("div",{className:"ap-modal-meta-value",style:{fontSize:"0.78rem"},children:le.nombre})]}),Ne&&n.jsxs("div",{className:"ap-modal-meta-item",children:[n.jsx("div",{className:"ap-modal-meta-label",children:"Carrera"}),n.jsx("div",{className:"ap-modal-meta-value",style:{fontSize:"0.78rem"},children:Ne.nombre})]}),Me&&n.jsxs("div",{className:"ap-modal-meta-item",children:[n.jsx("div",{className:"ap-modal-meta-label",children:"Docente"}),n.jsx("div",{className:"ap-modal-meta-value",style:{fontSize:"0.78rem"},children:Me.nombre.split(" ").slice(0,3).join(" ")})]}),le&&n.jsxs("div",{className:"ap-modal-meta-item",children:[n.jsx("div",{className:"ap-modal-meta-label",children:"Ciclo / Créditos"}),n.jsxs("div",{className:"ap-modal-meta-value",children:["Ciclo ",le.ciclo," · ",le.creditos," cr."]})]})]})]}),((F=d.temas)==null?void 0:F.length)>0&&n.jsxs("div",{className:"ap-modal-section",children:[n.jsx("div",{className:"ap-modal-section-label",children:"Temas cubiertos"}),n.jsx("div",{className:"ap-temas-list",children:d.temas.map(y=>n.jsx("span",{className:"ap-tema-chip",children:y},y))})]}),((L=d.archivos)==null?void 0:L.length)>0&&n.jsxs("div",{className:"ap-modal-section",children:[n.jsxs("div",{className:"ap-modal-section-label",children:["Archivos adjuntos · ",d.archivos.length," ",d.archivos.length===1?"archivo":"archivos"]}),n.jsx("div",{className:"ap-archivos-list",children:d.archivos.map((y,f)=>n.jsx(qm,{archivo:y},f))})]}),E?n.jsxs("div",{className:"ap-premium-wall",children:[n.jsx("span",{style:{fontSize:"1.6rem"},children:"🔒"}),n.jsx("p",{style:{fontWeight:700},children:"Contenido exclusivo para Premium"}),n.jsx("p",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:"Accede a este y todos los apuntes premium por S/. 5/mes"}),n.jsx("button",{className:"ap-premium-cta",onClick:()=>{m(null),e("planes")},children:"Ver planes →"})]}):n.jsxs("button",{className:"ap-dl-btn",onClick:()=>{var f;const y=(f=d.archivos)==null?void 0:f.find(P=>P.url&&P.tipo==="pdf");y?window.open(y.url,"_blank","noopener"):C(d.titulo)},children:["⬇️ Descargar ",((V=d.archivos)==null?void 0:V.length)>1?`(${d.archivos.length} archivos)`:"apunte"]})]})})]})]})}const Qm=[{value:"fecha",label:"Más recientes"},{value:"descargas",label:"Más descargados"},{value:"likes",label:"Más valorados"},{value:"vistas",label:"Más vistos"}];function Ym({archivo:e}){const r=Io[e.tipo]||Io.pdf,t=e.paginas?`${e.paginas} págs.`:e.diapositivas?`${e.diapositivas} slides`:e.hojas?`${e.hojas} hojas`:e.archivos?`${e.archivos} archivos`:e.dimensiones??"",a=!!e.url;return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,background:"var(--bg-elevated)",border:"1px solid var(--border)",borderRadius:11,padding:"9px 13px"},children:[e.tipo==="imagen"&&e.url?n.jsx("img",{src:e.url,alt:e.nombre,style:{width:34,height:34,borderRadius:8,objectFit:"cover",flexShrink:0,border:`1px solid ${r.border}`},loading:"lazy"}):n.jsx("span",{style:{width:34,height:34,borderRadius:8,flexShrink:0,background:r.bg,border:`1px solid ${r.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem"},children:r.icon}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:{fontSize:"0.8rem",fontWeight:600,color:"var(--text-primary)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.nombre}),n.jsxs("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",marginTop:1},children:[r.label," · ",e.tamaño,t?` · ${t}`:""]})]}),n.jsx("button",{onClick:()=>Ud(e),style:{flexShrink:0,background:a?"var(--indigo-dim)":"var(--bg-card)",border:`1px solid ${a?"rgba(99,102,241,0.35)":"var(--border)"}`,borderRadius:7,padding:"4px 10px",color:a?"var(--indigo-light)":"var(--text-muted)",fontSize:"0.7rem",fontWeight:700,cursor:a?"pointer":"not-allowed",fontFamily:"var(--font-body)",opacity:a?1:.5,whiteSpace:"nowrap"},children:a?"📄 Abrir":"🔒 Demo"})]})}function Xm({navigate:e}){var L,V,y;const{user:r}=Pt(),[t,a]=S.useState(""),[o,i]=S.useState("all"),[l,s]=S.useState("all"),[c,p]=S.useState("all"),[g,b]=S.useState("all"),[x,v]=S.useState("all"),[w,k]=S.useState(!1),[N,u]=S.useState(!1),[d,m]=S.useState("fecha"),[h,C]=S.useState(null),[_,z]=S.useState("table"),T=S.useMemo(()=>[...new Set(Be.map(f=>`${f.año}-${f.semestre}`))].sort((f,P)=>P.localeCompare(f)),[]),q=S.useMemo(()=>l==="all"?ce:ce.filter(f=>f.facultadId===Number(l)),[l]),R=S.useMemo(()=>[...new Set(be.map(P=>P.ciclo))].sort((P,D)=>P-D),[]),te=S.useMemo(()=>{let f=Be.filter(P=>{var cl;const D=be.find(zt=>zt.id===P.cursoId),W=D?ce.find(zt=>zt.id===D.carreraId):null,oe=P.titulo.toLowerCase().includes(t.toLowerCase())||((cl=P.temas)==null?void 0:cl.some(zt=>zt.toLowerCase().includes(t.toLowerCase())))||(D==null?void 0:D.nombre.toLowerCase().includes(t.toLowerCase())),ge=o==="all"||P.tipo===o,Ho=l==="all"||W&&W.facultadId===Number(l),Vo=c==="all"||D&&String(D.carreraId)===c,Go=g==="all"||D&&String(D.ciclo)===g,ja=x==="all"||`${P.año}-${P.semestre}`===x,Dr=!w||P.resuelto,Qd=!N||!P.premium;return oe&&ge&&Ho&&Vo&&Go&&ja&&Dr&&Qd});return f=[...f].sort((P,D)=>d==="fecha"?D.fecha.localeCompare(P.fecha):d==="descargas"?D.descargas-P.descargas:d==="likes"?D.likes-P.likes:d==="vistas"?(D.vistas||0)-(P.vistas||0):0),f},[t,o,l,c,g,x,w,N,d]),fe=S.useMemo(()=>({total:Be.length,parciales:Be.filter(f=>f.tipo==="Parcial").length,finales:Be.filter(f=>f.tipo==="Final").length,resueltos:Be.filter(f=>f.resuelto).length,premium:Be.filter(f=>f.premium).length}),[]),qe=t||o!=="all"||l!=="all"||c!=="all"||g!=="all"||x!=="all"||w||N,le=S.useCallback(()=>{a(""),i("all"),s("all"),p("all"),b("all"),v("all"),k(!1),u(!1)},[]),Ne=h?be.find(f=>f.id===h.cursoId):null,we=Ne?ce.find(f=>f.id===Ne.carreraId):null,Me=we?Ze.find(f=>f.id===we.facultadId):null,E=h?Wr.find(f=>f.id===h.docenteId):null,F=(h==null?void 0:h.premium)&&!r;return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        /* ── Animaciones ── */
        .ex-page { animation:ex-in 0.35s ease both; }
        @keyframes ex-in { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:none} }
        @keyframes ex-card-in { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none} }

        /* ── Header ── */
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

        /* ── Stats bar ── */
        .ex-stats-bar { display:flex; gap:10px; flex-wrap:wrap; margin-bottom:24px; }
        .ex-stat-chip {
          display:flex; align-items:center; gap:6px;
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:100px; padding:6px 14px;
          font-size:0.76rem; font-weight:600; color:var(--text-secondary);
        }
        .ex-stat-chip span { font-weight:800; color:var(--text-primary); }

        /* ── Filtros ── */
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

        /* Facultad chips */
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

        /* ── Tipo tabs ── */
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

        /* ── Toolbar ── */
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

        /* ── Badges ── */
        .ex-badge {
          display:inline-block; padding:3px 10px; border-radius:100px;
          font-size:0.68rem; font-weight:700; letter-spacing:0.04em; text-transform:uppercase;
        }
        .ex-badge-parcial { background:rgba(99,102,241,0.14); color:var(--indigo-light); }
        .ex-badge-final   { background:rgba(244,63,94,0.12); color:#fb7185; }
        .ex-badge-ok      { background:var(--emerald-dim); color:var(--emerald); border:1px solid rgba(16,185,129,0.3); }
        .ex-badge-no      { background:var(--bg-elevated); color:var(--text-muted); border:1px solid var(--border); }
        .ex-badge-premium { background:var(--amber-dim); color:var(--amber); border:1px solid rgba(245,158,11,0.3); }

        /* ── Table (desktop) ── */
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

        /* ── Cards mobile ── */
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

        /* ── Empty ── */
        .ex-empty { text-align:center; padding:72px 24px; color:var(--text-muted); display:flex; flex-direction:column; gap:12px; align-items:center; }

        /* ── Modal ── */
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
        .ex-info-row { font-size:0.875rem; color:var(--text-secondary); display:flex; align-items:center; gap:8px; }
        .ex-info-label { font-weight:700; color:var(--text-primary); min-width:90px; }

        /* ── Responsive ── */
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
      `}),n.jsxs("div",{className:"ex-page page-container",children:[n.jsx("div",{className:"ex-header",children:n.jsxs("div",{children:[n.jsx("h1",{className:"ex-title",children:"Exámenes"}),n.jsx("p",{className:"ex-sub",children:"Banco de parciales y finales de la Universidad Continental"})]})}),n.jsxs("div",{className:"ex-stats-bar",children:[n.jsxs("div",{className:"ex-stat-chip",children:["📋 ",n.jsx("span",{children:fe.total})," exámenes"]}),n.jsxs("div",{className:"ex-stat-chip",children:["📝 ",n.jsx("span",{children:fe.parciales})," parciales"]}),n.jsxs("div",{className:"ex-stat-chip",children:["📋 ",n.jsx("span",{children:fe.finales})," finales"]}),n.jsxs("div",{className:"ex-stat-chip",style:{color:"var(--emerald)"},children:["✓ ",n.jsx("span",{style:{color:"var(--emerald)"},children:fe.resueltos})," resueltos"]}),n.jsxs("div",{className:"ex-stat-chip",style:{color:"var(--amber)"},children:["⭐ ",n.jsx("span",{style:{color:"var(--amber)"},children:fe.premium})," premium"]})]}),n.jsxs("div",{className:"ex-filters-wrap",children:[n.jsxs("div",{className:"ex-filters-row",children:[n.jsxs("div",{className:"ex-search-wrap",children:[n.jsx("span",{className:"ex-search-icon",children:"🔍"}),n.jsx("input",{className:"ex-search",placeholder:"Buscar por título, tema, curso...",value:t,onChange:f=>a(f.target.value)})]}),n.jsxs("select",{className:`ex-select${c!=="all"?" active":""}`,value:c,onChange:f=>p(f.target.value),children:[n.jsx("option",{value:"all",children:"Todas las carreras"}),q.map(f=>n.jsx("option",{value:String(f.id),children:f.nombre},f.id))]}),n.jsxs("select",{className:`ex-select${g!=="all"?" active":""}`,value:g,onChange:f=>b(f.target.value),children:[n.jsx("option",{value:"all",children:"Todos los ciclos"}),R.map(f=>n.jsxs("option",{value:String(f),children:["Ciclo ",f]},f))]}),n.jsxs("select",{className:`ex-select${x!=="all"?" active":""}`,value:x,onChange:f=>v(f.target.value),children:[n.jsx("option",{value:"all",children:"Todos los semestres"}),T.map(f=>n.jsx("option",{value:f,children:f},f))]})]}),n.jsxs("div",{className:"ex-filters-row",children:[n.jsxs("button",{className:`ex-toggle${w?" on":""}`,onClick:()=>k(f=>!f),children:[w?"✓":"○"," Con solución"]}),n.jsxs("button",{className:`ex-toggle${N?" on":""}`,onClick:()=>u(f=>!f),children:[N?"✓":"○"," Solo gratis"]}),qe&&n.jsx("button",{className:"ex-reset",onClick:le,children:"✕ Limpiar filtros"})]}),n.jsxs("div",{className:"ex-fac-row",children:[n.jsx("button",{className:`ex-fac-btn${l==="all"?" active":""}`,style:l==="all"?{background:"var(--indigo-dim)",color:"var(--indigo-light)",borderColor:"rgba(99,102,241,0.4)"}:{},onClick:()=>{s("all"),p("all")},children:"Todas"}),Ze.map(f=>n.jsxs("button",{className:`ex-fac-btn${l===String(f.id)?" active":""}`,style:l===String(f.id)?{background:f.color}:{},onClick:()=>{s(String(f.id)),p("all")},children:[f.icono," ",f.nombre.replace("Facultad de ","").replace("Facultad ","")]},f.id))]})]}),n.jsx("div",{className:"ex-tipo-tabs",children:[{value:"all",label:"Todos",cls:"all",count:Be.length},{value:"Parcial",label:"📝 Parciales",cls:"parcial",count:fe.parciales},{value:"Final",label:"📋 Finales",cls:"final",count:fe.finales}].map(f=>n.jsxs("button",{className:`ex-tipo-tab ${f.cls}${o===f.value?" active":""}`,onClick:()=>i(f.value),children:[f.label,n.jsx("span",{className:"ex-tab-count",children:f.count})]},f.value))}),n.jsxs("div",{className:"ex-toolbar",children:[n.jsxs("span",{className:"ex-result-count",children:[n.jsx("strong",{children:te.length})," examen",te.length!==1?"es":""," encontrado",te.length!==1?"s":""]}),n.jsx("select",{className:"ex-sort-select",value:d,onChange:f=>m(f.target.value),children:Qm.map(f=>n.jsx("option",{value:f.value,children:f.label},f.value))}),n.jsxs("div",{className:"ex-view-btns",children:[n.jsx("button",{className:`ex-view-btn${_==="table"?" active":""}`,onClick:()=>z("table"),children:"☰"}),n.jsx("button",{className:`ex-view-btn${_==="cards"?" active":""}`,onClick:()=>z("cards"),children:"⊞"})]})]}),te.length===0?n.jsxs("div",{className:"ex-empty",children:[n.jsx("span",{style:{fontSize:"2.5rem"},children:"📭"}),n.jsx("p",{style:{fontWeight:700,color:"var(--text-secondary)"},children:"Sin resultados"}),n.jsx("p",{children:"Prueba con otros filtros o términos"}),qe&&n.jsx("button",{className:"ex-reset",onClick:le,children:"✕ Limpiar filtros"})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"ex-table",style:{display:_==="cards"?"none":void 0},children:[n.jsxs("div",{className:"ex-thead",children:[n.jsx("span",{style:{flex:3},children:"Examen"}),n.jsx("span",{style:{flex:1,textAlign:"center"},children:"Tipo"}),n.jsx("span",{style:{flex:.8,textAlign:"center"},children:"Semestre"}),n.jsx("span",{style:{flex:1,textAlign:"center"},children:"Estado"}),n.jsx("span",{style:{flex:.7,textAlign:"right"},children:"⬇️"}),n.jsx("span",{style:{flex:.8,textAlign:"right"},children:"Acción"})]}),te.map(f=>{const P=be.find(ge=>ge.id===f.cursoId),D=Wr.find(ge=>ge.id===f.docenteId),W=P?ce.find(ge=>ge.id===P.carreraId):null,oe=W?Ze.find(ge=>ge.id===W.facultadId):null;return n.jsxs("div",{className:"ex-row",onClick:()=>C(f),children:[n.jsxs("div",{className:"ex-col-main",children:[n.jsx("span",{className:"ex-row-title",children:f.titulo}),n.jsxs("div",{className:"ex-row-meta",children:[P&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"ex-row-dot",style:{background:P.color}}),P.nombre]}),oe&&n.jsx("span",{className:"ex-row-fac",style:{color:oe.color},children:oe.icono}),D&&` · ${D.nombre.split(" ")[0]} ${D.nombre.split(" ")[1]}`]})]}),n.jsx("div",{className:"ex-col-1",children:n.jsx("span",{className:`ex-badge ${f.tipo==="Final"?"ex-badge-final":"ex-badge-parcial"}`,children:f.tipo})}),n.jsxs("div",{className:"ex-col-sm",children:[f.año,"-",f.semestre]}),n.jsx("div",{className:"ex-col-1",children:n.jsx("span",{className:`ex-badge ${f.resuelto?"ex-badge-ok":"ex-badge-no"}`,children:f.resuelto?"✓ Resuelto":"Sin resolver"})}),n.jsx("div",{className:"ex-col-dl",children:f.descargas.toLocaleString()}),n.jsx("div",{className:"ex-col-act",children:n.jsx("button",{className:`ex-view-btn-sm${f.premium?" premium":""}`,children:f.premium?"🔒 PRO":"⬇️ Ver"})})]},f.id)})]}),n.jsx("div",{className:"ex-cards",style:{display:_==="cards"?"flex":void 0},children:te.map((f,P)=>{var W,oe;const D=be.find(ge=>ge.id===f.cursoId);return n.jsxs("div",{className:"ex-card",style:{animationDelay:`${Math.min(P*.04,.3)}s`},onClick:()=>C(f),children:[f.previewImg&&n.jsx("img",{src:f.previewImg,alt:f.titulo,className:"ex-card-img",loading:"lazy"}),n.jsxs("div",{className:"ex-card-body",children:[n.jsxs("div",{className:"ex-card-top",children:[n.jsx("span",{className:`ex-badge ${f.tipo==="Final"?"ex-badge-final":"ex-badge-parcial"}`,children:f.tipo}),n.jsx("span",{className:`ex-badge ${f.resuelto?"ex-badge-ok":"ex-badge-no"}`,children:f.resuelto?"✓ Resuelto":"Sin resolver"}),f.premium&&n.jsx("span",{className:"ex-badge ex-badge-premium",children:"⭐ PRO"})]}),n.jsx("div",{className:"ex-card-title",children:f.titulo}),D&&n.jsxs("div",{className:"ex-card-meta",children:[n.jsx("span",{className:"ex-row-dot",style:{background:D.color}}),D.nombre," · ",f.año,"-",f.semestre]}),((W=f.temas)==null?void 0:W.length)>0&&n.jsxs("div",{className:"ex-card-temas",children:[f.temas.slice(0,3).map(ge=>n.jsx("span",{className:"ex-card-tema",children:ge},ge)),f.temas.length>3&&n.jsxs("span",{className:"ex-card-tema",style:{color:"var(--indigo-light)"},children:["+",f.temas.length-3]})]}),n.jsxs("div",{className:"ex-card-footer",children:[n.jsxs("div",{className:"ex-card-stats",children:[n.jsxs("span",{children:["⬇️ ",f.descargas.toLocaleString()]}),n.jsxs("span",{children:["❤️ ",f.likes]}),n.jsxs("span",{children:["📎 ",((oe=f.archivos)==null?void 0:oe.length)||0]})]}),n.jsx("button",{className:`ex-view-btn-sm${f.premium?" premium":""}`,children:f.premium?"🔒 PRO":"⬇️ Ver"})]})]})]},f.id)})})]}),n.jsx(Vd,{open:!!h,onClose:()=>C(null),title:h==null?void 0:h.titulo,children:h&&n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[h.previewImg&&n.jsx("img",{src:h.previewImg,alt:h.titulo,className:"ex-modal-preview",loading:"lazy"}),n.jsxs("div",{className:"ex-modal-chips",children:[n.jsx("span",{className:`ex-badge ${h.tipo==="Final"?"ex-badge-final":"ex-badge-parcial"}`,style:{fontSize:"0.8rem",padding:"4px 12px"},children:h.tipo}),h.resuelto&&n.jsx("span",{className:"ex-badge ex-badge-ok",style:{fontSize:"0.8rem",padding:"4px 12px"},children:"✓ Con solución"}),h.premium&&n.jsx("span",{className:"ex-badge ex-badge-premium",style:{fontSize:"0.8rem",padding:"4px 12px"},children:"⭐ Premium"}),Me&&n.jsxs("span",{className:"ex-modal-chip",style:{background:`${Me.color}18`,color:Me.color,border:`1px solid ${Me.color}35`},children:[Me.icono," ",Me.nombre.replace("Facultad de ","").replace("Facultad ","")]})]}),n.jsxs("div",{className:"ex-modal-stats-row",children:[n.jsxs("span",{children:["⬇️ ",n.jsx("strong",{style:{color:"var(--text-secondary)"},children:h.descargas.toLocaleString()})]}),n.jsxs("span",{children:["❤️ ",n.jsx("strong",{style:{color:"var(--text-secondary)"},children:h.likes})]}),n.jsxs("span",{children:["👁️ ",n.jsx("strong",{style:{color:"var(--text-secondary)"},children:(h.vistas||0).toLocaleString()})]}),n.jsx("span",{style:{marginLeft:"auto",fontSize:"0.76rem",color:"var(--text-muted)"},children:h.fecha})]}),h.descripcion&&n.jsxs("div",{className:"ex-modal-section",children:[n.jsx("div",{className:"ex-modal-section-label",children:"Descripción"}),n.jsx("div",{className:"ex-modal-desc",children:h.descripcion})]}),n.jsxs("div",{className:"ex-modal-section",children:[n.jsx("div",{className:"ex-modal-section-label",children:"Información del examen"}),n.jsxs("div",{className:"ex-modal-meta-grid",children:[Ne&&n.jsxs("div",{className:"ex-modal-meta-item",children:[n.jsx("div",{className:"ex-modal-meta-label",children:"Curso"}),n.jsx("div",{className:"ex-modal-meta-value",style:{fontSize:"0.78rem"},children:Ne.nombre})]}),we&&n.jsxs("div",{className:"ex-modal-meta-item",children:[n.jsx("div",{className:"ex-modal-meta-label",children:"Carrera"}),n.jsx("div",{className:"ex-modal-meta-value",style:{fontSize:"0.78rem"},children:we.nombre})]}),E&&n.jsxs("div",{className:"ex-modal-meta-item",children:[n.jsx("div",{className:"ex-modal-meta-label",children:"Docente"}),n.jsx("div",{className:"ex-modal-meta-value",style:{fontSize:"0.78rem"},children:E.nombre.split(" ").slice(0,3).join(" ")})]}),n.jsxs("div",{className:"ex-modal-meta-item",children:[n.jsx("div",{className:"ex-modal-meta-label",children:"Año / Semestre"}),n.jsxs("div",{className:"ex-modal-meta-value",children:[h.año," – ",h.semestre]})]}),h.duracion&&n.jsxs("div",{className:"ex-modal-meta-item",children:[n.jsx("div",{className:"ex-modal-meta-label",children:"Duración"}),n.jsx("div",{className:"ex-modal-meta-value",children:h.duracion})]}),h.preguntas&&n.jsxs("div",{className:"ex-modal-meta-item",children:[n.jsx("div",{className:"ex-modal-meta-label",children:"Preguntas / Puntaje"}),n.jsxs("div",{className:"ex-modal-meta-value",children:[h.preguntas," preg. · ",h.puntaje_total," pts"]})]}),Ne&&n.jsxs("div",{className:"ex-modal-meta-item",children:[n.jsx("div",{className:"ex-modal-meta-label",children:"Código / Ciclo"}),n.jsxs("div",{className:"ex-modal-meta-value",children:[Ne.codigo," · Ciclo ",Ne.ciclo]})]})]})]}),((L=h.temas)==null?void 0:L.length)>0&&n.jsxs("div",{className:"ex-modal-section",children:[n.jsx("div",{className:"ex-modal-section-label",children:"Temas evaluados"}),n.jsx("div",{className:"ex-modal-temas",children:h.temas.map(f=>n.jsx("span",{className:"ex-modal-tema",children:f},f))})]}),((V=h.archivos)==null?void 0:V.length)>0&&n.jsxs("div",{className:"ex-modal-section",children:[n.jsxs("div",{className:"ex-modal-section-label",children:["Archivos · ",h.archivos.length," ",h.archivos.length===1?"archivo":"archivos",h.resuelto&&" (incluye solución)"]}),n.jsx("div",{className:"ex-archivos-list",children:h.archivos.map((f,P)=>n.jsx(Ym,{archivo:f},P))})]}),F?n.jsxs("div",{className:"ex-premium-wall",children:[n.jsx("span",{style:{fontSize:"1.6rem"},children:"🔒"}),n.jsx("p",{style:{fontWeight:700},children:"Examen resuelto exclusivo para Premium"}),n.jsx("p",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:"Accede a todos los exámenes resueltos por S/. 5/mes"}),n.jsx("button",{className:"ex-premium-cta",onClick:()=>{C(null),e("planes")},children:"Ver planes →"})]}):n.jsxs("button",{className:"ex-dl-btn",onClick:()=>{var P;const f=(P=h.archivos)==null?void 0:P.find(D=>D.url&&D.tipo==="pdf");f&&window.open(f.url,"_blank","noopener")},children:["⬇️ Descargar examen",((y=h.archivos)==null?void 0:y.length)>1?` (${h.archivos.length} archivos)`:""]})]})})]})]})}const xa="2026-I",Jm=2026,ws=new Set(Be.filter(e=>e.año===Jm&&e.semestre==="I").map(e=>e.cursoId));function Zm(e){const r=be.filter(p=>p.docenteId===e.id),t=r.filter(p=>ws.has(p.id)),a=r.filter(p=>!ws.has(p.id)),o=cr.filter(p=>p.docenteId===e.id).length,i=Be.filter(p=>p.docenteId===e.id).length,l=[...cr.filter(p=>p.docenteId===e.id),...Be.filter(p=>p.docenteId===e.id)].reduce((p,g)=>p+(g.descargas||0),0),s=ce.find(p=>p.id===e.carreraId),c=s?Ze.find(p=>p.id===s.facultadId):null;return{...e,todosCursos:r,cursosActivos:t,cursosPasados:a,numApuntes:o,numExamenes:i,totalDescargas:l,carrera:s,facultad:c}}const bn=Wr.map(Zm),ks=Ze,ef=[{value:"rating",label:"Mejor valorados"},{value:"apuntes",label:"Más apuntes"},{value:"examenes",label:"Más exámenes"},{value:"descargas",label:"Más descargas"}];function rf({navigate:e}){const[r,t]=S.useState(""),[a,o]=S.useState("all"),[i,l]=S.useState(!1),[s,c]=S.useState("rating"),[p,g]=S.useState("grid"),[b,x]=S.useState(null),v=S.useMemo(()=>[...bn.filter(d=>{var z;const m=r.toLowerCase(),h=d.nombre.toLowerCase().includes(m)||d.area.toLowerCase().includes(m)||d.todosCursos.some(T=>T.nombre.toLowerCase().includes(m)),C=a==="all"||String((z=d.facultad)==null?void 0:z.id)===a,_=!i||d.cursosActivos.length>0;return h&&C&&_})].sort((d,m)=>s==="rating"?m.rating-d.rating:s==="apuntes"?m.numApuntes-d.numApuntes:s==="examenes"?m.numExamenes-d.numExamenes:s==="descargas"?m.totalDescargas-d.totalDescargas:0),[r,a,i,s]),w=S.useMemo(()=>({total:bn.length,activos:bn.filter(u=>u.cursosActivos.length>0).length,facs:ks.length}),[]),k=r||a!=="all"||i,N=()=>{t(""),o("all"),l(!1)};return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        /* ── Animaciones ── */
        .doc-page { animation: doc-in 0.35s ease both; }
        @keyframes doc-in { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:none} }
        @keyframes doc-card-in { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }
        @keyframes blink-dot { 0%,100%{opacity:1} 50%{opacity:0.3} }

        /* ── Header ── */
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

        /* ── Stats bar ── */
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

        /* ── Filtros wrap ── */
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

        /* Facultad chips */
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

        /* ── Toolbar ── */
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

        /* ── Grid ── */
        .doc-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:20px; }

        /* ── Lista ── */
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

        /* ── Card ── */
        .doc-card {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:18px; overflow:hidden;
          transition:all 0.22s; display:flex; flex-direction:column;
          cursor:pointer; animation:doc-card-in 0.3s ease both;
          position:relative;
        }
        .doc-card:hover { border-color:rgba(99,102,241,0.35); transform:translateY(-4px); box-shadow:0 12px 32px rgba(0,0,0,0.25); }

        /* Strip de color top */
        .doc-card-strip { height:5px; width:100%; flex-shrink:0; }

        /* Header de la card */
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
        .doc-activo-badge {
          font-size:0.67rem; font-weight:700; border-radius:100px; padding:3px 9px; white-space:nowrap;
        }
        .doc-activo-badge.on { background:rgba(22,163,74,0.12); border:1px solid rgba(22,163,74,0.3); color:#16a34a; }
        .doc-activo-badge.off { background:var(--bg-elevated); border:1px solid var(--border); color:var(--text-muted); }

        /* Info del docente */
        .doc-card-info { padding:0 18px 14px; }
        .doc-nombre { font-family:var(--font-display); font-weight:700; font-size:0.97rem; line-height:1.3; color:var(--text-primary); margin:0 0 3px; }
        .doc-area { font-size:0.78rem; color:var(--text-muted); margin:0 0 8px; }
        .doc-fac-tag {
          display:inline-flex; align-items:center; gap:5px;
          font-size:0.7rem; font-weight:600; padding:3px 10px;
          border-radius:100px; margin-bottom:14px;
        }

        /* Stats strip */
        .doc-stats-strip {
          display:flex; margin:0 18px 14px;
          background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:11px; overflow:hidden;
        }
        .doc-ss { flex:1; display:flex; flex-direction:column; align-items:center; padding:9px 4px; gap:1px; }
        .doc-ss + .doc-ss { border-left:1px solid var(--border); }
        .doc-ss-num { font-family:var(--font-display); font-weight:800; font-size:1rem; color:var(--text-primary); line-height:1; }
        .doc-ss-lbl { font-size:0.62rem; font-weight:600; text-transform:uppercase; letter-spacing:0.06em; color:var(--text-muted); }

        /* Cursos section */
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

        /* Footer de la card */
        .doc-card-footer { display:flex; gap:7px; padding:14px 18px 18px; margin-top:auto; }
        .doc-action-btn {
          flex:1; background:var(--bg-elevated); border:1px solid var(--border);
          border-radius:9px; padding:8px 6px;
          font-size:0.77rem; font-weight:600; color:var(--text-secondary);
          cursor:pointer; font-family:var(--font-body); transition:all 0.15s; text-align:center;
        }
        .doc-action-btn:hover { background:var(--indigo-dim); color:var(--indigo-light); border-color:rgba(99,102,241,0.3); }

        /* ── Badges genéricos ── */
        .d-badge { display:inline-block; padding:3px 10px; border-radius:100px; font-size:0.68rem; font-weight:700; }
        .d-badge-indigo { background:var(--indigo-dim); color:var(--indigo-light); border:1px solid rgba(99,102,241,0.3); }
        .d-badge-green  { background:rgba(22,163,74,0.1); color:#16a34a; border:1px solid rgba(22,163,74,0.3); }
        .d-badge-muted  { background:var(--bg-elevated); color:var(--text-muted); border:1px solid var(--border); }

        /* ── Modal ── */
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

        /* ── Modal overlay simple ── */
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

        /* ── Empty ── */
        .doc-empty { text-align:center; padding:80px 24px; color:var(--text-muted); display:flex; flex-direction:column; gap:12px; align-items:center; }

        /* ── Responsive ── */
        @media(max-width:700px){
          .doc-grid { grid-template-columns:1fr; }
          .doc-modal-stats { grid-template-columns:repeat(2,1fr); }
        }
        @media(max-width:480px){
          .doc-stats-bar { display:none; }
          .doc-list-stats { display:none; }
          .doc-modal-cta { flex-direction:column; }
        }
      `}),n.jsxs("div",{className:"doc-page page-container",children:[n.jsx("div",{className:"doc-header",children:n.jsxs("div",{children:[n.jsx("h1",{className:"doc-title",children:"Docentes UC"}),n.jsxs("p",{className:"doc-sub",children:["Materiales y exámenes organizados por profesor — ",xa]})]})}),n.jsxs("div",{className:"doc-stats-bar",children:[n.jsxs("div",{className:"doc-stat-chip",children:["👨‍🏫 ",n.jsx("span",{children:w.total})," docentes"]}),n.jsxs("div",{className:"doc-stat-chip",children:["🏫 ",n.jsx("span",{children:w.facs})," facultades"]}),n.jsxs("div",{className:"doc-stat-chip green",children:[n.jsx("span",{className:"doc-activo-dot",style:{width:8,height:8,borderRadius:"50%",background:"#16a34a",display:"inline-block",animation:"blink-dot 1.8s infinite"}}),n.jsx("span",{children:w.activos})," activos en ",xa]})]}),n.jsxs("div",{className:"doc-filters-wrap",children:[n.jsxs("div",{className:"doc-filters-row",children:[n.jsxs("div",{className:"doc-search-wrap",children:[n.jsx("span",{className:"doc-search-icon",children:"🔍"}),n.jsx("input",{className:"doc-search",placeholder:"Buscar por nombre, área o curso...",value:r,onChange:u=>t(u.target.value)})]}),n.jsxs("button",{className:`doc-toggle${i?" on":""}`,onClick:()=>l(u=>!u),children:[i&&n.jsx("span",{className:"doc-toggle-dot"}),i?"Solo activos":"Todos los docentes"]}),k&&n.jsx("button",{className:"doc-reset",onClick:N,children:"✕ Limpiar"})]}),n.jsxs("div",{className:"doc-fac-row",children:[n.jsx("button",{className:`doc-fac-btn${a==="all"?" active":""}`,style:a==="all"?{background:"var(--indigo-dim)",color:"var(--indigo-light)",borderColor:"rgba(99,102,241,0.4)"}:{},onClick:()=>o("all"),children:"Todas"}),ks.map(u=>n.jsxs("button",{className:`doc-fac-btn${a===String(u.id)?" active":""}`,style:a===String(u.id)?{background:u.color}:{},onClick:()=>o(String(u.id)),children:[u.icono," ",u.nombre.replace("Facultad de ","").replace("Facultad ","")]},u.id))]})]}),n.jsxs("div",{className:"doc-toolbar",children:[n.jsxs("span",{className:"doc-result-count",children:[n.jsx("strong",{children:v.length})," docente",v.length!==1?"s":""," encontrado",v.length!==1?"s":""]}),n.jsx("select",{className:"doc-sort-select",value:s,onChange:u=>c(u.target.value),children:ef.map(u=>n.jsx("option",{value:u.value,children:u.label},u.value))}),n.jsxs("div",{className:"doc-view-btns",children:[n.jsx("button",{className:`doc-view-btn${p==="grid"?" active":""}`,onClick:()=>g("grid"),children:"⊞"}),n.jsx("button",{className:`doc-view-btn${p==="list"?" active":""}`,onClick:()=>g("list"),children:"☰"})]})]}),v.length===0?n.jsxs("div",{className:"doc-empty",children:[n.jsx("span",{style:{fontSize:"2.5rem"},children:"👨‍🏫"}),n.jsx("p",{style:{fontWeight:700,color:"var(--text-secondary)"},children:"Sin resultados"}),n.jsx("p",{children:"Prueba con otro nombre o quita los filtros"}),k&&n.jsx("button",{className:"doc-reset",onClick:N,children:"✕ Limpiar filtros"})]}):p==="grid"?n.jsx("div",{className:"doc-grid",children:v.map((u,d)=>n.jsx(tf,{docente:u,delay:Math.min(d*.03,.3),onOpen:()=>x(u),navigate:e},u.id))}):n.jsx("div",{className:"doc-list",children:v.map((u,d)=>{var h;const m=((h=u.carrera)==null?void 0:h.color)??"#4f46e5";return n.jsxs("div",{className:"doc-list-row",style:{animationDelay:`${Math.min(d*.03,.3)}s`},onClick:()=>x(u),children:[n.jsx("div",{className:"doc-list-avatar",style:{background:`linear-gradient(135deg,${m}cc,${m})`},children:u.iniciales}),n.jsxs("div",{className:"doc-list-main",children:[n.jsx("div",{className:"doc-list-name",children:u.nombre}),n.jsx("div",{className:"doc-list-area",children:u.area})]}),n.jsxs("div",{className:"doc-list-right",children:[u.cursosActivos.length>0&&n.jsx("span",{className:"d-badge d-badge-green",children:"● Activo"}),u.facultad&&n.jsx("span",{className:"d-badge",style:{background:`${u.facultad.color}18`,color:u.facultad.color,border:`1px solid ${u.facultad.color}35`},children:u.facultad.icono}),n.jsxs("div",{className:"doc-list-stats",children:[n.jsxs("span",{children:["⭐ ",u.rating]}),n.jsxs("span",{children:["📝 ",u.numApuntes]}),n.jsxs("span",{children:["📋 ",u.numExamenes]})]})]})]},u.id)})})]}),b&&n.jsx(af,{docente:b,onClose:()=>x(null),navigate:e})]})}function tf({docente:e,delay:r,onOpen:t,navigate:a}){var p;const[o,i]=S.useState(!1),l=((p=e.carrera)==null?void 0:p.color)??"#4f46e5",s=e.cursosActivos.length>0,c=e.cursosPasados.length>0;return n.jsxs("div",{className:"doc-card",style:{animationDelay:`${r}s`},onClick:t,children:[n.jsx("div",{className:"doc-card-strip",style:{background:l}}),n.jsxs("div",{className:"doc-card-head",children:[n.jsx("div",{className:"doc-avatar",style:{background:`linear-gradient(135deg,${l}cc,${l})`},children:e.iniciales}),n.jsxs("div",{className:"doc-head-right",children:[n.jsxs("span",{className:"doc-rating",children:["⭐ ",e.rating]}),n.jsx("span",{className:`doc-activo-badge ${s?"on":"off"}`,children:s?"● Activo 2026-I":"Sin cursos activos"})]})]}),n.jsxs("div",{className:"doc-card-info",children:[n.jsx("h3",{className:"doc-nombre",children:e.nombre}),n.jsx("p",{className:"doc-area",children:e.area}),e.facultad&&n.jsxs("span",{className:"doc-fac-tag",style:{background:`${e.facultad.color}18`,color:e.facultad.color,border:`1px solid ${e.facultad.color}30`},children:[e.facultad.icono," ",e.facultad.nombre.replace("Facultad de ","").replace("Facultad ","")]})]}),n.jsxs("div",{className:"doc-stats-strip",children:[n.jsxs("div",{className:"doc-ss",children:[n.jsx("span",{className:"doc-ss-num",children:e.numApuntes}),n.jsx("span",{className:"doc-ss-lbl",children:"Apuntes"})]}),n.jsxs("div",{className:"doc-ss",children:[n.jsx("span",{className:"doc-ss-num",children:e.numExamenes}),n.jsx("span",{className:"doc-ss-lbl",children:"Exámenes"})]}),n.jsxs("div",{className:"doc-ss",children:[n.jsx("span",{className:"doc-ss-num",children:e.todosCursos.length}),n.jsx("span",{className:"doc-ss-lbl",children:"Cursos"})]}),n.jsxs("div",{className:"doc-ss",children:[n.jsx("span",{className:"doc-ss-num",children:e.totalDescargas>999?`${(e.totalDescargas/1e3).toFixed(1)}k`:e.totalDescargas}),n.jsx("span",{className:"doc-ss-lbl",children:"Descargas"})]})]}),n.jsxs("div",{className:"doc-cursos-wrap",children:[s&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"doc-cursos-label",children:[n.jsx("span",{className:"doc-activo-dot"}),"Cursos activos ",xa]}),n.jsxs("div",{className:"doc-cursos-list",children:[e.cursosActivos.slice(0,2).map(g=>n.jsx(So,{curso:g},g.id)),e.cursosActivos.length>2&&n.jsxs("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",padding:"3px 10px"},children:["+",e.cursosActivos.length-2," curso",e.cursosActivos.length-2>1?"s":""," más"]})]})]}),c&&n.jsxs(n.Fragment,{children:[n.jsxs("button",{className:"doc-pasados-btn",onClick:g=>{g.stopPropagation(),i(b=>!b)},children:[o?"▾":"▸"," ",e.cursosPasados.length," curso",e.cursosPasados.length>1?"s":""," anterior",e.cursosPasados.length>1?"es":""]}),o&&n.jsx("div",{className:"doc-cursos-list",style:{opacity:.6},children:e.cursosPasados.slice(0,3).map(g=>n.jsx(So,{curso:g},g.id))})]}),!s&&!c&&n.jsx("p",{style:{fontSize:"0.76rem",color:"var(--text-muted)",paddingBottom:10},children:"Sin cursos registrados."})]}),n.jsxs("div",{className:"doc-card-footer",onClick:g=>g.stopPropagation(),children:[n.jsx("button",{className:"doc-action-btn",onClick:()=>a("apuntes"),children:"📝 Apuntes"}),n.jsx("button",{className:"doc-action-btn",onClick:()=>a("examenes"),children:"📋 Exámenes"}),n.jsx("button",{className:"doc-action-btn",style:{flex:"0 0 auto",padding:"8px 10px"},onClick:t,children:"👤 Ver perfil"})]})]})}function So({curso:e}){const r=ce.find(t=>t.id===e.carreraId);return n.jsxs("div",{className:"doc-curso-row",children:[n.jsx("div",{className:"doc-curso-dot",style:{background:e.color}}),n.jsxs("div",{className:"doc-curso-info",children:[n.jsx("div",{className:"doc-curso-nombre",children:e.nombre}),n.jsxs("div",{className:"doc-curso-meta",children:[e.codigo," · Ciclo ",e.ciclo,r?` · ${r.nombre.split(" ").slice(0,2).join(" ")}`:""]})]}),n.jsxs("span",{className:"doc-curso-cr",children:[e.creditos," cr."]})]})}function af({docente:e,onClose:r,navigate:t}){var o;const a=((o=e.carrera)==null?void 0:o.color)??"#4f46e5";return n.jsx("div",{className:"doc-modal-backdrop",onClick:r,children:n.jsxs("div",{className:"doc-modal-box",onClick:i=>i.stopPropagation(),children:[n.jsx("button",{className:"doc-modal-close",onClick:r,children:"✕"}),n.jsxs("div",{className:"doc-modal-head",children:[n.jsx("div",{className:"doc-modal-avatar",style:{background:`linear-gradient(135deg,${a}cc,${a})`},children:e.iniciales}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{className:"doc-modal-name",children:e.nombre}),n.jsx("div",{className:"doc-modal-area",children:e.area}),n.jsxs("div",{className:"doc-modal-badges",children:[n.jsxs("span",{className:"d-badge d-badge-indigo",children:["⭐ ",e.rating," / 5.0"]}),e.cursosActivos.length>0&&n.jsxs("span",{className:"d-badge d-badge-green",children:["● Activo ",xa]}),e.facultad&&n.jsxs("span",{className:"d-badge",style:{background:`${e.facultad.color}18`,color:e.facultad.color,border:`1px solid ${e.facultad.color}35`},children:[e.facultad.icono," ",e.facultad.nombre.replace("Facultad de ","").replace("Facultad ","")]})]})]})]}),n.jsx("div",{className:"doc-modal-section-label",children:"Estadísticas"}),n.jsxs("div",{className:"doc-modal-stats",children:[n.jsxs("div",{className:"doc-modal-stat",children:[n.jsx("div",{className:"doc-modal-stat-num",children:e.numApuntes}),n.jsx("div",{className:"doc-modal-stat-lbl",children:"Apuntes"})]}),n.jsxs("div",{className:"doc-modal-stat",children:[n.jsx("div",{className:"doc-modal-stat-num",children:e.numExamenes}),n.jsx("div",{className:"doc-modal-stat-lbl",children:"Exámenes"})]}),n.jsxs("div",{className:"doc-modal-stat",children:[n.jsx("div",{className:"doc-modal-stat-num",children:e.todosCursos.length}),n.jsx("div",{className:"doc-modal-stat-lbl",children:"Cursos"})]}),n.jsxs("div",{className:"doc-modal-stat",children:[n.jsx("div",{className:"doc-modal-stat-num",children:e.totalDescargas>999?`${(e.totalDescargas/1e3).toFixed(1)}k`:e.totalDescargas}),n.jsx("div",{className:"doc-modal-stat-lbl",children:"Descargas"})]})]}),e.todosCursos.length>0&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"doc-modal-section-label",style:{marginBottom:8},children:["Todos los cursos (",e.todosCursos.length,")"]}),n.jsxs("div",{className:"doc-modal-cursos",children:[e.cursosActivos.length>0&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{fontSize:"0.68rem",fontWeight:700,color:"#16a34a",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:4},children:["● Activos ",xa]}),e.cursosActivos.map(i=>n.jsx(So,{curso:i},i.id))]}),e.cursosPasados.length>0&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{fontSize:"0.68rem",fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"0.08em",margin:"8px 0 4px"},children:"Anteriores"}),n.jsx("div",{style:{opacity:.7,display:"flex",flexDirection:"column",gap:5},children:e.cursosPasados.map(i=>n.jsx(So,{curso:i},i.id))})]})]})]}),n.jsxs("div",{className:"doc-modal-cta",children:[n.jsx("button",{className:"doc-modal-btn doc-modal-btn-primary",onClick:()=>{r(),t("apuntes")},children:"📝 Ver apuntes"}),n.jsx("button",{className:"doc-modal-btn doc-modal-btn-secondary",onClick:()=>{r(),t("examenes")},children:"📋 Ver exámenes"})]})]})})}function of({navigate:e}){const{user:r}=Pt();return n.jsxs("div",{style:O.wrapper,children:[n.jsx("div",{style:O.bgGlow}),n.jsxs("div",{style:{position:"relative",zIndex:1,maxWidth:1100,margin:"0 auto",padding:"0 24px"},children:[n.jsxs("div",{style:O.pageHeader,children:[n.jsx("div",{style:O.headerTag,children:"💎 Planes y precios"}),n.jsxs("h1",{style:O.title,children:["Elige tu plan y",n.jsx("br",{}),n.jsx("span",{className:"gradient-text",children:"aprueba con ventaja"})]}),n.jsx("p",{style:O.subtitle,children:"Accede al banco completo de exámenes resueltos, apuntes verificados y todo el material de la Universidad Continental."})]}),n.jsx("div",{style:O.plansGrid,children:Sm.map(t=>n.jsx(nf,{plan:t,user:r,navigate:e},t.id))}),n.jsxs("div",{style:O.faq,children:[n.jsx("h2",{style:O.faqTitle,children:"Preguntas frecuentes"}),n.jsx("div",{style:O.faqGrid,children:[{q:"¿Puedo cancelar en cualquier momento?",a:"Sí, el plan mensual se puede cancelar cuando quieras sin penalidad."},{q:"¿Los materiales son de la UC?",a:"Todo el contenido es subido por estudiantes y docentes de la Universidad Continental de Huancayo."},{q:"¿Cómo gano puntos?",a:"Subiendo apuntes y exámenes verificados. Los puntos te dan desbloqueos especiales."},{q:"¿El plan Pro anual incluye todo?",a:"Sí, incluye todo lo de Premium más acceso anticipado, insignias y soporte prioritario."}].map(t=>n.jsxs("div",{style:O.faqItem,children:[n.jsx("div",{style:O.faqQ,children:t.q}),n.jsx("div",{style:O.faqA,children:t.a})]},t.q))})]}),n.jsxs("div",{style:O.guarantee,children:[n.jsx("span",{style:{fontSize:"1.8rem"},children:"🛡️"}),n.jsxs("div",{children:[n.jsx("div",{style:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1rem",marginBottom:4},children:"Garantía de satisfacción de 7 días"}),n.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"0.875rem"},children:"Si no estás satisfecho con tu plan Premium en los primeros 7 días, te devolvemos el dinero sin preguntas."})]})]})]})]})}function nf({plan:e,user:r,navigate:t}){const a=(r==null?void 0:r.plan)===e.id;return n.jsxs("div",{style:{...O.planCard,...e.popular?O.planCardPopular:{},borderColor:e.popular?`${e.color}55`:"var(--border)"},children:[e.popular&&n.jsx("div",{style:{...O.popularBadge,background:e.color},children:"⚡ Más popular"}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:16},children:[n.jsx("div",{style:{...O.planIcon,background:`${e.color}20`,border:`1px solid ${e.color}40`},children:e.id==="free"?"🆓":e.id==="premium"?"⭐":"🏆"}),n.jsxs("div",{children:[n.jsx("div",{style:O.planName,children:e.nombre}),n.jsx("div",{style:O.planDesc,children:e.descripcion})]})]}),n.jsx("div",{style:O.priceRow,children:e.precio===0?n.jsx("span",{style:O.priceFree,children:"Gratis"}):n.jsxs(n.Fragment,{children:[n.jsx("span",{style:O.currency,children:"S/."}),n.jsx("span",{style:{...O.priceNum,color:e.color},children:e.precio}),n.jsxs("span",{style:O.pricePer,children:["/",e.periodo]})]})}),e.id==="pro"&&n.jsx("div",{style:O.savingTag,children:"Ahorras S/. 20 vs mensual 🎉"}),n.jsx("div",{style:O.featureList,children:e.features.map(o=>n.jsxs("div",{style:O.featureItem,children:[n.jsx("span",{style:{...O.featureIcon,...o.incluido?O.featureIconOk:O.featureIconNo},children:o.incluido?"✓":"✗"}),n.jsx("span",{style:{...O.featureText,...o.incluido?{}:O.featureTextNo},children:o.texto})]},o.texto))}),n.jsx("button",{onClick:()=>t((e.precio===0,"login")),style:{...O.planBtn,background:e.popular?`linear-gradient(135deg, ${e.color}, #7c3aed)`:e.id==="pro"?`linear-gradient(135deg, ${e.color}, #ef4444)`:"var(--bg-elevated)",color:e.precio===0?"var(--text-secondary)":"#fff",border:e.precio===0?"1px solid var(--border)":"none"},children:a?"✓ Plan actual":e.precio===0?"Empezar gratis":`Obtener ${e.nombre}`})]})}const O={wrapper:{minHeight:"100vh",padding:"60px 0 80px",position:"relative",overflow:"hidden"},bgGlow:{position:"fixed",top:"-20%",left:"50%",transform:"translateX(-50%)",width:"80vw",height:"60vh",background:"radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)",pointerEvents:"none",zIndex:0},pageHeader:{textAlign:"center",marginBottom:56},headerTag:{display:"inline-flex",alignItems:"center",gap:6,padding:"5px 14px",borderRadius:100,fontSize:"0.8rem",fontWeight:600,background:"var(--indigo-dim)",border:"1px solid rgba(99,102,241,0.3)",color:"var(--indigo-light)",marginBottom:20},title:{fontFamily:"var(--font-display)",fontSize:"clamp(2rem, 5vw, 3rem)",fontWeight:800,lineHeight:1.15,letterSpacing:"-0.02em",marginBottom:16},subtitle:{color:"var(--text-secondary)",fontSize:"1rem",maxWidth:520,margin:"0 auto",lineHeight:1.7},plansGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:24,marginBottom:64,alignItems:"start"},planCard:{background:"var(--bg-card)",border:"1px solid",borderRadius:20,padding:28,position:"relative",display:"flex",flexDirection:"column",gap:0},planCardPopular:{background:"linear-gradient(180deg, rgba(99,102,241,0.06) 0%, var(--bg-card) 100%)",boxShadow:"0 0 40px rgba(99,102,241,0.12)"},popularBadge:{position:"absolute",top:-14,left:"50%",transform:"translateX(-50%)",borderRadius:100,padding:"4px 18px",fontSize:"0.78rem",fontWeight:700,color:"#fff",whiteSpace:"nowrap",boxShadow:"0 4px 12px rgba(0,0,0,0.3)"},planIcon:{width:44,height:44,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.3rem",flexShrink:0},planName:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"1.05rem"},planDesc:{color:"var(--text-muted)",fontSize:"0.78rem"},priceRow:{display:"flex",alignItems:"baseline",gap:4,margin:"20px 0 8px"},priceFree:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"2rem",color:"var(--text-secondary)"},currency:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1rem",color:"var(--text-secondary)"},priceNum:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"2.4rem",lineHeight:1},pricePer:{color:"var(--text-muted)",fontSize:"0.85rem"},savingTag:{display:"inline-block",background:"rgba(16,185,129,0.12)",border:"1px solid rgba(16,185,129,0.3)",borderRadius:100,padding:"3px 12px",fontSize:"0.75rem",fontWeight:600,color:"var(--emerald)",marginBottom:8},featureList:{display:"flex",flexDirection:"column",gap:10,margin:"20px 0 24px",flex:1},featureItem:{display:"flex",alignItems:"center",gap:10},featureIcon:{width:18,height:18,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",fontWeight:700,flexShrink:0},featureIconOk:{background:"var(--emerald-dim)",color:"var(--emerald)",border:"1px solid rgba(16,185,129,0.3)"},featureIconNo:{background:"var(--bg-elevated)",color:"var(--text-muted)",border:"1px solid var(--border)"},featureText:{fontSize:"0.875rem",color:"var(--text-secondary)"},featureTextNo:{color:"var(--text-muted)",textDecoration:"line-through"},planBtn:{borderRadius:12,padding:"12px",fontFamily:"var(--font-display)",fontWeight:700,fontSize:"0.9rem",cursor:"pointer",transition:"all 0.2s",textAlign:"center"},faq:{marginBottom:48},faqTitle:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"1.4rem",textAlign:"center",marginBottom:32},faqGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:16},faqItem:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:14,padding:20},faqQ:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"0.9rem",marginBottom:8,color:"var(--text-primary)"},faqA:{color:"var(--text-secondary)",fontSize:"0.85rem",lineHeight:1.6},guarantee:{background:"var(--emerald-dim)",border:"1px solid rgba(16,185,129,0.2)",borderRadius:16,padding:"24px 32px",display:"flex",alignItems:"center",gap:20}};function lf({navigate:e}){const{login:r,isLoading:t}=Pt(),[a,o]=S.useState(""),[i,l]=S.useState(""),s=()=>{if(!(!a||!i)){if(!a.endsWith("@continental.edu.pe")){alert("Usa tu correo institucional de la Universidad Continental.");return}r(a,i),setTimeout(()=>{e("home")},1e3)}};return n.jsxs("div",{style:H.wrapper,children:[n.jsx("div",{style:H.bgGlow}),n.jsxs("div",{style:H.card,children:[n.jsxs("div",{style:H.logo,children:[n.jsx("div",{style:H.logoIcon,children:"📚"}),n.jsxs("span",{style:H.logoText,children:["Apuntes",n.jsx("span",{style:{color:"var(--indigo-light)"},children:"UC"})]})]}),n.jsx("h2",{style:H.title,children:"Inicia sesión con tu cuenta UC"}),n.jsx("p",{style:H.subtitle,children:"Plataforma académica exclusiva para estudiantes de la Universidad Continental."}),n.jsxs("div",{style:H.form,children:[n.jsxs("div",{style:H.fieldGroup,children:[n.jsx("label",{style:H.label,children:"Correo institucional"}),n.jsx("input",{style:H.input,type:"email",placeholder:"tu.nombre@continental.edu.pe",value:a,onChange:c=>o(c.target.value)})]}),n.jsxs("div",{style:H.fieldGroup,children:[n.jsx("label",{style:H.label,children:"Contraseña"}),n.jsx("input",{style:H.input,type:"password",placeholder:"••••••••",value:i,onChange:c=>l(c.target.value)})]}),n.jsx("div",{style:H.forgotWrap,children:n.jsx("button",{style:H.forgotBtn,children:"¿Olvidaste tu contraseña?"})}),n.jsx("button",{style:{...H.submitBtn,...t?H.submitLoading:{}},onClick:s,disabled:t,children:t?"Ingresando...":"Ingresar a ApuntesUC →"})]}),n.jsxs("div",{style:H.divider,children:[n.jsx("span",{style:H.dividerLine}),n.jsx("span",{style:H.dividerText,children:"o continúa con"}),n.jsx("span",{style:H.dividerLine})]}),n.jsxs("button",{style:H.googleBtn,children:[n.jsx("span",{children:"🔵"}),"Google Institucional"]}),n.jsxs("div",{style:H.infoBox,children:[n.jsx("div",{style:H.infoTitle,children:"Acceso exclusivo UC"}),n.jsxs("div",{style:H.infoText,children:["Solo estudiantes con correo institucional",n.jsx("strong",{children:" @continental.edu.pe "}),"pueden acceder a la plataforma."]})]}),n.jsxs("div",{style:H.demoHint,children:["💡 ",n.jsx("strong",{children:"Demo:"})," Usa cualquier correo institucional y contraseña para explorar la plataforma."]})]})]})}const H={wrapper:{minHeight:"calc(100vh - 64px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"48px 24px",position:"relative",overflow:"hidden"},bgGlow:{position:"fixed",top:"10%",left:"50%",transform:"translateX(-50%)",width:"700px",height:"500px",background:"radial-gradient(ellipse, rgba(99,102,241,0.14) 0%, transparent 70%)",pointerEvents:"none"},card:{position:"relative",zIndex:1,width:"100%",maxWidth:460,background:"rgba(17,24,39,0.82)",backdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:28,padding:"40px",boxShadow:"0 20px 60px rgba(0,0,0,0.45)",animation:"fadeUp 0.4s ease"},logo:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:26},logoIcon:{width:44,height:44,borderRadius:14,background:"linear-gradient(135deg, var(--indigo), #7c3aed)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.15rem",boxShadow:"0 10px 24px rgba(99,102,241,0.35)"},logoText:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"1.3rem",color:"var(--text-primary)"},title:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"1.65rem",textAlign:"center",marginBottom:10,lineHeight:1.2},subtitle:{color:"var(--text-muted)",fontSize:"0.92rem",textAlign:"center",lineHeight:1.6,marginBottom:30},form:{display:"flex",flexDirection:"column",gap:18},fieldGroup:{display:"flex",flexDirection:"column",gap:8},label:{fontSize:"0.82rem",fontWeight:700,color:"var(--text-secondary)",letterSpacing:"0.02em"},input:{width:"100%",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:14,padding:"13px 15px",color:"var(--text-primary)",fontSize:"0.92rem",outline:"none",transition:"all 0.2s ease",fontFamily:"var(--font-body)"},forgotWrap:{display:"flex",justifyContent:"flex-end"},forgotBtn:{background:"none",border:"none",padding:0,cursor:"pointer",fontSize:"0.8rem",color:"var(--indigo-light)",fontWeight:600},submitBtn:{marginTop:6,background:"linear-gradient(135deg, var(--indigo), #7c3aed)",border:"none",borderRadius:16,padding:"14px",color:"#fff",fontSize:"0.95rem",fontWeight:800,fontFamily:"var(--font-display)",cursor:"pointer",transition:"all 0.2s ease",boxShadow:"0 10px 30px rgba(99,102,241,0.35)"},submitLoading:{opacity:.7,cursor:"not-allowed"},divider:{display:"flex",alignItems:"center",gap:12,margin:"28px 0 20px"},dividerLine:{flex:1,height:1,background:"var(--border)"},dividerText:{fontSize:"0.78rem",color:"var(--text-muted)",whiteSpace:"nowrap"},googleBtn:{width:"100%",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:14,padding:"13px",color:"var(--text-secondary)",fontSize:"0.9rem",fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:10,transition:"all 0.2s ease",marginBottom:24},infoBox:{background:"rgba(99,102,241,0.08)",border:"1px solid rgba(99,102,241,0.16)",borderRadius:16,padding:"16px 18px",marginBottom:18},infoTitle:{fontSize:"0.82rem",fontWeight:800,color:"var(--text-primary)",marginBottom:6},infoText:{fontSize:"0.8rem",lineHeight:1.6,color:"var(--text-secondary)"},demoHint:{background:"var(--bg-elevated)",border:"1px solid var(--border)",borderRadius:14,padding:"12px 14px",fontSize:"0.78rem",color:"var(--text-secondary)",lineHeight:1.6}};function sf(){const[e,r]=S.useState("home"),[t,a]=S.useState(typeof window<"u"?window.innerWidth>900:!0),o=s=>{r(s),typeof window<"u"&&window.innerWidth<=900&&a(!1),window.scrollTo({top:0,behavior:"smooth"})},i={home:n.jsx(Bm,{navigate:o}),cursos:n.jsx(Um,{navigate:o}),apuntes:n.jsx(Km,{navigate:o}),examenes:n.jsx(Xm,{navigate:o}),docentes:n.jsx(rf,{navigate:o}),planes:n.jsx(of,{navigate:o}),login:n.jsx(lf,{navigate:o})},l=!["home","login","planes"].includes(e);return n.jsx(Cm,{children:n.jsxs("div",{className:"app-shell",children:[n.jsx(Pm,{page:e,navigate:o,sidebarOpen:t,setSidebarOpen:a,showSidebar:l}),n.jsxs("div",{className:"app-body",children:[n.jsx(Am,{page:e,navigate:o,open:t,onClose:()=>a(!1),show:l}),n.jsx("main",{className:`app-main ${l&&t?"sidebar-open":""}`,children:i[e]??i.home})]}),n.jsx(Lm,{navigate:o,sidebarOpen:t,showSidebar:l})]})})}/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function No(){return No=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},No.apply(this,arguments)}var Vr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Vr||(Vr={}));const js="popstate";function cf(e){e===void 0&&(e={});function r(o,i){let{pathname:l="/",search:s="",hash:c=""}=sl(o.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),pi("",{pathname:l,search:s,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(o,i){let l=o.document.querySelector("base"),s="";if(l&&l.getAttribute("href")){let c=o.location.href,p=c.indexOf("#");s=p===-1?c:c.slice(0,p)}return s+"#"+(typeof i=="string"?i:qd(i))}function a(o,i){df(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return pf(r,t,a,e)}function Gd(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function df(e,r){if(!e){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function uf(){return Math.random().toString(36).substr(2,8)}function Is(e,r){return{usr:e.state,key:e.key,idx:r}}function pi(e,r,t,a){return t===void 0&&(t=null),No({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof r=="string"?sl(r):r,{state:t,key:r&&r.key||a||uf()})}function qd(e){let{pathname:r="/",search:t="",hash:a=""}=e;return t&&t!=="?"&&(r+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(r+=a.charAt(0)==="#"?a:"#"+a),r}function sl(e){let r={};if(e){let t=e.indexOf("#");t>=0&&(r.hash=e.substr(t),e=e.substr(0,t));let a=e.indexOf("?");a>=0&&(r.search=e.substr(a),e=e.substr(0,a)),e&&(r.pathname=e)}return r}function pf(e,r,t,a){a===void 0&&(a={});let{window:o=document.defaultView,v5Compat:i=!1}=a,l=o.history,s=Vr.Pop,c=null,p=g();p==null&&(p=0,l.replaceState(No({},l.state,{idx:p}),""));function g(){return(l.state||{idx:null}).idx}function b(){s=Vr.Pop;let N=g(),u=N==null?null:N-p;p=N,c&&c({action:s,location:k.location,delta:u})}function x(N,u){s=Vr.Push;let d=pi(k.location,N,u);t&&t(d,N),p=g()+1;let m=Is(d,p),h=k.createHref(d);try{l.pushState(m,"",h)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(h)}i&&c&&c({action:s,location:k.location,delta:1})}function v(N,u){s=Vr.Replace;let d=pi(k.location,N,u);t&&t(d,N),p=g();let m=Is(d,p),h=k.createHref(d);l.replaceState(m,"",h),i&&c&&c({action:s,location:k.location,delta:0})}function w(N){let u=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof N=="string"?N:qd(N);return d=d.replace(/ $/,"%20"),Gd(u,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,u)}let k={get action(){return s},get location(){return e(o,l)},listen(N){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(js,b),c=N,()=>{o.removeEventListener(js,b),c=null}},createHref(N){return r(o,N)},createURL:w,encodeLocation(N){let u=w(N);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:x,replace:v,go(N){return l.go(N)}};return k}var Ss;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ss||(Ss={}));function mf(e,r){if(r==="/")return e;if(!e.toLowerCase().startsWith(r.toLowerCase()))return null;let t=r.endsWith("/")?r.length-1:r.length,a=e.charAt(t);return a&&a!=="/"?null:e.slice(t)||"/"}const Wd=["post","put","patch","delete"];new Set(Wd);const ff=["get",...Wd];new Set(ff);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mi(){return mi=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},mi.apply(this,arguments)}const gf=S.createContext(null),Kd=S.createContext(null);function hf(){return S.useContext(Kd)!=null}function xf(e,r){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function vf(e){let{basename:r="/",children:t=null,location:a,navigationType:o=Vr.Pop,navigator:i,static:l=!1,future:s}=e;hf()&&Gd(!1);let c=r.replace(/^\/*/,"/"),p=S.useMemo(()=>({basename:c,navigator:i,static:l,future:mi({v7_relativeSplatPath:!1},s)}),[c,s,i,l]);typeof a=="string"&&(a=sl(a));let{pathname:g="/",search:b="",hash:x="",state:v=null,key:w="default"}=a,k=S.useMemo(()=>{let N=mf(g,c);return N==null?null:{location:{pathname:N,search:b,hash:x,state:v,key:w},navigationType:o}},[c,g,b,x,v,w,o]);return k==null?null:S.createElement(gf.Provider,{value:p},S.createElement(Kd.Provider,{children:t,value:k}))}new Promise(()=>{});/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const bf="6";try{window.__reactRouterVersion=bf}catch{}const yf="startTransition",Ns=fu[yf];function wf(e){let{basename:r,children:t,future:a,window:o}=e,i=S.useRef();i.current==null&&(i.current=cf({window:o,v5Compat:!0}));let l=i.current,[s,c]=S.useState({action:l.action,location:l.location}),{v7_startTransition:p}=a||{},g=S.useCallback(b=>{p&&Ns?Ns(()=>c(b)):c(b)},[c,p]);return S.useLayoutEffect(()=>l.listen(g),[l,g]),S.useEffect(()=>xf(a),[a]),S.createElement(vf,{basename:r,children:t,location:s.location,navigationType:s.action,navigator:l,future:a})}var Cs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Cs||(Cs={}));var Es;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Es||(Es={}));ReactDOM.createRoot(document.getElementById("root")).render(n.jsx(wf,{children:n.jsx(sf,{})}));
