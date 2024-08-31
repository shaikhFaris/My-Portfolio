function og(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const a=Object.getOwnPropertyDescriptor(i,r);a&&Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function sg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var lg={exports:{}},sc={},cg={exports:{}},tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cs=Symbol.for("react.element"),y_=Symbol.for("react.portal"),S_=Symbol.for("react.fragment"),M_=Symbol.for("react.strict_mode"),E_=Symbol.for("react.profiler"),w_=Symbol.for("react.provider"),T_=Symbol.for("react.context"),A_=Symbol.for("react.forward_ref"),R_=Symbol.for("react.suspense"),C_=Symbol.for("react.memo"),b_=Symbol.for("react.lazy"),Rh=Symbol.iterator;function P_(t){return t===null||typeof t!="object"?null:(t=Rh&&t[Rh]||t["@@iterator"],typeof t=="function"?t:null)}var ug={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dg=Object.assign,fg={};function ro(t,e,n){this.props=t,this.context=e,this.refs=fg,this.updater=n||ug}ro.prototype.isReactComponent={};ro.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ro.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function hg(){}hg.prototype=ro.prototype;function pf(t,e,n){this.props=t,this.context=e,this.refs=fg,this.updater=n||ug}var mf=pf.prototype=new hg;mf.constructor=pf;dg(mf,ro.prototype);mf.isPureReactComponent=!0;var Ch=Array.isArray,pg=Object.prototype.hasOwnProperty,gf={current:null},mg={key:!0,ref:!0,__self:!0,__source:!0};function gg(t,e,n){var i,r={},a=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(a=""+e.key),e)pg.call(e,i)&&!mg.hasOwnProperty(i)&&(r[i]=e[i]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)r[i]===void 0&&(r[i]=s[i]);return{$$typeof:cs,type:t,key:a,ref:o,props:r,_owner:gf.current}}function L_(t,e){return{$$typeof:cs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vf(t){return typeof t=="object"&&t!==null&&t.$$typeof===cs}function D_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bh=/\/+/g;function Dc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?D_(""+t.key):e.toString(36)}function ll(t,e,n,i,r){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case cs:case y_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Dc(o,0):i,Ch(r)?(n="",t!=null&&(n=t.replace(bh,"$&/")+"/"),ll(r,e,n,"",function(c){return c})):r!=null&&(vf(r)&&(r=L_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(bh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ch(t))for(var s=0;s<t.length;s++){a=t[s];var l=i+Dc(a,s);o+=ll(a,e,n,l,r)}else if(l=P_(t),typeof l=="function")for(t=l.call(t),s=0;!(a=t.next()).done;)a=a.value,l=i+Dc(a,s++),o+=ll(a,e,n,l,r);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ss(t,e,n){if(t==null)return t;var i=[],r=0;return ll(t,i,"","",function(a){return e.call(n,a,r++)}),i}function N_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},cl={transition:null},U_={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:cl,ReactCurrentOwner:gf};function vg(){throw Error("act(...) is not supported in production builds of React.")}tt.Children={map:Ss,forEach:function(t,e,n){Ss(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ss(t,function(){e++}),e},toArray:function(t){return Ss(t,function(e){return e})||[]},only:function(t){if(!vf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};tt.Component=ro;tt.Fragment=S_;tt.Profiler=E_;tt.PureComponent=pf;tt.StrictMode=M_;tt.Suspense=R_;tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U_;tt.act=vg;tt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=dg({},t.props),r=t.key,a=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,o=gf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)pg.call(e,l)&&!mg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}return{$$typeof:cs,type:t.type,key:r,ref:a,props:i,_owner:o}};tt.createContext=function(t){return t={$$typeof:T_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:w_,_context:t},t.Consumer=t};tt.createElement=gg;tt.createFactory=function(t){var e=gg.bind(null,t);return e.type=t,e};tt.createRef=function(){return{current:null}};tt.forwardRef=function(t){return{$$typeof:A_,render:t}};tt.isValidElement=vf;tt.lazy=function(t){return{$$typeof:b_,_payload:{_status:-1,_result:t},_init:N_}};tt.memo=function(t,e){return{$$typeof:C_,type:t,compare:e===void 0?null:e}};tt.startTransition=function(t){var e=cl.transition;cl.transition={};try{t()}finally{cl.transition=e}};tt.unstable_act=vg;tt.useCallback=function(t,e){return pn.current.useCallback(t,e)};tt.useContext=function(t){return pn.current.useContext(t)};tt.useDebugValue=function(){};tt.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};tt.useEffect=function(t,e){return pn.current.useEffect(t,e)};tt.useId=function(){return pn.current.useId()};tt.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};tt.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};tt.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};tt.useMemo=function(t,e){return pn.current.useMemo(t,e)};tt.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};tt.useRef=function(t){return pn.current.useRef(t)};tt.useState=function(t){return pn.current.useState(t)};tt.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};tt.useTransition=function(){return pn.current.useTransition()};tt.version="18.3.1";cg.exports=tt;var ve=cg.exports;const Ni=sg(ve),I_=og({__proto__:null,default:Ni},[ve]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_=ve,O_=Symbol.for("react.element"),z_=Symbol.for("react.fragment"),k_=Object.prototype.hasOwnProperty,B_=F_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H_={key:!0,ref:!0,__self:!0,__source:!0};function _g(t,e,n){var i,r={},a=null,o=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)k_.call(e,i)&&!H_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:O_,type:t,key:a,ref:o,props:r,_owner:B_.current}}sc.Fragment=z_;sc.jsx=_g;sc.jsxs=_g;lg.exports=sc;var X=lg.exports,Fu={},xg={exports:{}},Un={},yg={exports:{}},Sg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,Q){var J=U.length;U.push(Q);e:for(;0<J;){var le=J-1>>>1,Se=U[le];if(0<r(Se,Q))U[le]=Q,U[J]=Se,J=le;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var Q=U[0],J=U.pop();if(J!==Q){U[0]=J;e:for(var le=0,Se=U.length,Ve=Se>>>1;le<Ve;){var q=2*(le+1)-1,re=U[q],he=q+1,ye=U[he];if(0>r(re,J))he<Se&&0>r(ye,re)?(U[le]=ye,U[he]=J,le=he):(U[le]=re,U[q]=J,le=q);else if(he<Se&&0>r(ye,J))U[le]=ye,U[he]=J,le=he;else break e}}return Q}function r(U,Q){var J=U.sortIndex-Q.sortIndex;return J!==0?J:U.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();t.unstable_now=function(){return o.now()-s}}var l=[],c=[],u=1,d=null,h=3,m=!1,_=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(U){for(var Q=n(c);Q!==null;){if(Q.callback===null)i(c);else if(Q.startTime<=U)i(c),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=n(c)}}function E(U){if(x=!1,v(U),!_)if(n(l)!==null)_=!0,G(P);else{var Q=n(c);Q!==null&&K(E,Q.startTime-U)}}function P(U,Q){_=!1,x&&(x=!1,f(R),R=-1),m=!0;var J=h;try{for(v(Q),d=n(l);d!==null&&(!(d.expirationTime>Q)||U&&!C());){var le=d.callback;if(typeof le=="function"){d.callback=null,h=d.priorityLevel;var Se=le(d.expirationTime<=Q);Q=t.unstable_now(),typeof Se=="function"?d.callback=Se:d===n(l)&&i(l),v(Q)}else i(l);d=n(l)}if(d!==null)var Ve=!0;else{var q=n(c);q!==null&&K(E,q.startTime-Q),Ve=!1}return Ve}finally{d=null,h=J,m=!1}}var S=!1,A=null,R=-1,M=5,y=-1;function C(){return!(t.unstable_now()-y<M)}function V(){if(A!==null){var U=t.unstable_now();y=U;var Q=!0;try{Q=A(!0,U)}finally{Q?B():(S=!1,A=null)}}else S=!1}var B;if(typeof g=="function")B=function(){g(V)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,$=H.port2;H.port1.onmessage=V,B=function(){$.postMessage(null)}}else B=function(){p(V,0)};function G(U){A=U,S||(S=!0,B())}function K(U,Q){R=p(function(){U(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,G(P))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var Q=3;break;default:Q=h}var J=h;h=Q;try{return U()}finally{h=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,Q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var J=h;h=U;try{return Q()}finally{h=J}},t.unstable_scheduleCallback=function(U,Q,J){var le=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?le+J:le):J=le,U){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=J+Se,U={id:u++,callback:Q,priorityLevel:U,startTime:J,expirationTime:Se,sortIndex:-1},J>le?(U.sortIndex=J,e(c,U),n(l)===null&&U===n(c)&&(x?(f(R),R=-1):x=!0,K(E,J-le))):(U.sortIndex=Se,e(l,U),_||m||(_=!0,G(P))),U},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(U){var Q=h;return function(){var J=h;h=Q;try{return U.apply(this,arguments)}finally{h=J}}}})(Sg);yg.exports=Sg;var V_=yg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_=ve,Nn=V_;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mg=new Set,Vo={};function ea(t,e){ja(t,e),ja(t+"Capture",e)}function ja(t,e){for(Vo[t]=e,t=0;t<e.length;t++)Mg.add(e[t])}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ou=Object.prototype.hasOwnProperty,W_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ph={},Lh={};function j_(t){return Ou.call(Lh,t)?!0:Ou.call(Ph,t)?!1:W_.test(t)?Lh[t]=!0:(Ph[t]=!0,!1)}function X_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Y_(t,e,n,i){if(e===null||typeof e>"u"||X_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,i,r,a,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=o}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Kt[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Kt[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Kt[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Kt[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Kt[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Kt[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Kt[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Kt[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Kt[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var _f=/[\-:]([a-z])/g;function xf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_f,xf);Kt[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_f,xf);Kt[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_f,xf);Kt[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Kt[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Kt[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function yf(t,e,n,i){var r=Kt.hasOwnProperty(e)?Kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Y_(e,n,r,i)&&(n=null),i||r===null?j_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Bi=G_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ms=Symbol.for("react.element"),Ma=Symbol.for("react.portal"),Ea=Symbol.for("react.fragment"),Sf=Symbol.for("react.strict_mode"),zu=Symbol.for("react.profiler"),Eg=Symbol.for("react.provider"),wg=Symbol.for("react.context"),Mf=Symbol.for("react.forward_ref"),ku=Symbol.for("react.suspense"),Bu=Symbol.for("react.suspense_list"),Ef=Symbol.for("react.memo"),Qi=Symbol.for("react.lazy"),Tg=Symbol.for("react.offscreen"),Dh=Symbol.iterator;function co(t){return t===null||typeof t!="object"?null:(t=Dh&&t[Dh]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Object.assign,Nc;function Ao(t){if(Nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nc=e&&e[1]||""}return`
`+Nc+t}var Uc=!1;function Ic(t,e){if(!t||Uc)return"";Uc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),a=i.stack.split(`
`),o=r.length-1,s=a.length-1;1<=o&&0<=s&&r[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(r[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||r[o]!==a[s]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=s);break}}}finally{Uc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ao(t):""}function $_(t){switch(t.tag){case 5:return Ao(t.type);case 16:return Ao("Lazy");case 13:return Ao("Suspense");case 19:return Ao("SuspenseList");case 0:case 2:case 15:return t=Ic(t.type,!1),t;case 11:return t=Ic(t.type.render,!1),t;case 1:return t=Ic(t.type,!0),t;default:return""}}function Hu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ea:return"Fragment";case Ma:return"Portal";case zu:return"Profiler";case Sf:return"StrictMode";case ku:return"Suspense";case Bu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case wg:return(t.displayName||"Context")+".Consumer";case Eg:return(t._context.displayName||"Context")+".Provider";case Mf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ef:return e=t.displayName||null,e!==null?e:Hu(t.type)||"Memo";case Qi:e=t._payload,t=t._init;try{return Hu(t(e))}catch{}}return null}function q_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hu(e);case 8:return e===Sf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ag(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function K_(t){var e=Ag(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Es(t){t._valueTracker||(t._valueTracker=K_(t))}function Rg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ag(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vu(t,e){var n=e.checked;return bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Nh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cg(t,e){e=e.checked,e!=null&&yf(t,"checked",e,!1)}function Gu(t,e){Cg(t,e);var n=vr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wu(t,e.type,vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Uh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wu(t,e,n){(e!=="number"||Cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ro=Array.isArray;function Fa(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+vr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ju(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return bt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ih(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Ro(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vr(n)}}function bg(t,e){var n=vr(e.value),i=vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Fh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Pg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Pg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ws,Lg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ws=ws||document.createElement("div"),ws.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ws.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Go(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var No={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Z_=["Webkit","ms","Moz","O"];Object.keys(No).forEach(function(t){Z_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),No[e]=No[t]})});function Dg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||No.hasOwnProperty(t)&&No[t]?(""+e).trim():e+"px"}function Ng(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Dg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Q_=bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yu(t,e){if(e){if(Q_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function $u(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qu=null;function wf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ku=null,Oa=null,za=null;function Oh(t){if(t=fs(t)){if(typeof Ku!="function")throw Error(se(280));var e=t.stateNode;e&&(e=fc(e),Ku(t.stateNode,t.type,e))}}function Ug(t){Oa?za?za.push(t):za=[t]:Oa=t}function Ig(){if(Oa){var t=Oa,e=za;if(za=Oa=null,Oh(t),e)for(t=0;t<e.length;t++)Oh(e[t])}}function Fg(t,e){return t(e)}function Og(){}var Fc=!1;function zg(t,e,n){if(Fc)return t(e,n);Fc=!0;try{return Fg(t,e,n)}finally{Fc=!1,(Oa!==null||za!==null)&&(Og(),Ig())}}function Wo(t,e){var n=t.stateNode;if(n===null)return null;var i=fc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Zu=!1;if(Ii)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Zu=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Zu=!1}function J_(t,e,n,i,r,a,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Uo=!1,bl=null,Pl=!1,Qu=null,ex={onError:function(t){Uo=!0,bl=t}};function tx(t,e,n,i,r,a,o,s,l){Uo=!1,bl=null,J_.apply(ex,arguments)}function nx(t,e,n,i,r,a,o,s,l){if(tx.apply(this,arguments),Uo){if(Uo){var c=bl;Uo=!1,bl=null}else throw Error(se(198));Pl||(Pl=!0,Qu=c)}}function ta(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function kg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zh(t){if(ta(t)!==t)throw Error(se(188))}function ix(t){var e=t.alternate;if(!e){if(e=ta(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return zh(r),t;if(a===i)return zh(r),e;a=a.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=a;else{for(var o=!1,s=r.child;s;){if(s===n){o=!0,n=r,i=a;break}if(s===i){o=!0,i=r,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,i=r;break}if(s===i){o=!0,i=a,n=r;break}s=s.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function Bg(t){return t=ix(t),t!==null?Hg(t):null}function Hg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Hg(t);if(e!==null)return e;t=t.sibling}return null}var Vg=Nn.unstable_scheduleCallback,kh=Nn.unstable_cancelCallback,rx=Nn.unstable_shouldYield,ax=Nn.unstable_requestPaint,Dt=Nn.unstable_now,ox=Nn.unstable_getCurrentPriorityLevel,Tf=Nn.unstable_ImmediatePriority,Gg=Nn.unstable_UserBlockingPriority,Ll=Nn.unstable_NormalPriority,sx=Nn.unstable_LowPriority,Wg=Nn.unstable_IdlePriority,lc=null,fi=null;function lx(t){if(fi&&typeof fi.onCommitFiberRoot=="function")try{fi.onCommitFiberRoot(lc,t,void 0,(t.current.flags&128)===128)}catch{}}var ni=Math.clz32?Math.clz32:dx,cx=Math.log,ux=Math.LN2;function dx(t){return t>>>=0,t===0?32:31-(cx(t)/ux|0)|0}var Ts=64,As=4194304;function Co(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,a=t.pingedLanes,o=n&268435455;if(o!==0){var s=o&~r;s!==0?i=Co(s):(a&=o,a!==0&&(i=Co(a)))}else o=n&~r,o!==0?i=Co(o):a!==0&&(i=Co(a));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,a=e&-e,r>=a||r===16&&(a&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ni(e),r=1<<n,i|=t[n],e&=~r;return i}function fx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,a=t.pendingLanes;0<a;){var o=31-ni(a),s=1<<o,l=r[o];l===-1?(!(s&n)||s&i)&&(r[o]=fx(s,e)):l<=e&&(t.expiredLanes|=s),a&=~s}}function Ju(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jg(){var t=Ts;return Ts<<=1,!(Ts&4194240)&&(Ts=64),t}function Oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function us(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ni(e),t[e]=n}function px(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ni(n),a=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~a}}function Af(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ni(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ht=0;function Xg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Yg,Rf,$g,qg,Kg,ed=!1,Rs=[],or=null,sr=null,lr=null,jo=new Map,Xo=new Map,er=[],mx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bh(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(e.pointerId)}}function fo(t,e,n,i,r,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},e!==null&&(e=fs(e),e!==null&&Rf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function gx(t,e,n,i,r){switch(e){case"focusin":return or=fo(or,t,e,n,i,r),!0;case"dragenter":return sr=fo(sr,t,e,n,i,r),!0;case"mouseover":return lr=fo(lr,t,e,n,i,r),!0;case"pointerover":var a=r.pointerId;return jo.set(a,fo(jo.get(a)||null,t,e,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,Xo.set(a,fo(Xo.get(a)||null,t,e,n,i,r)),!0}return!1}function Zg(t){var e=zr(t.target);if(e!==null){var n=ta(e);if(n!==null){if(e=n.tag,e===13){if(e=kg(n),e!==null){t.blockedOn=e,Kg(t.priority,function(){$g(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ul(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=td(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);qu=i,n.target.dispatchEvent(i),qu=null}else return e=fs(n),e!==null&&Rf(e),t.blockedOn=n,!1;e.shift()}return!0}function Hh(t,e,n){ul(t)&&n.delete(e)}function vx(){ed=!1,or!==null&&ul(or)&&(or=null),sr!==null&&ul(sr)&&(sr=null),lr!==null&&ul(lr)&&(lr=null),jo.forEach(Hh),Xo.forEach(Hh)}function ho(t,e){t.blockedOn===e&&(t.blockedOn=null,ed||(ed=!0,Nn.unstable_scheduleCallback(Nn.unstable_NormalPriority,vx)))}function Yo(t){function e(r){return ho(r,t)}if(0<Rs.length){ho(Rs[0],t);for(var n=1;n<Rs.length;n++){var i=Rs[n];i.blockedOn===t&&(i.blockedOn=null)}}for(or!==null&&ho(or,t),sr!==null&&ho(sr,t),lr!==null&&ho(lr,t),jo.forEach(e),Xo.forEach(e),n=0;n<er.length;n++)i=er[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<er.length&&(n=er[0],n.blockedOn===null);)Zg(n),n.blockedOn===null&&er.shift()}var ka=Bi.ReactCurrentBatchConfig,Nl=!0;function _x(t,e,n,i){var r=ht,a=ka.transition;ka.transition=null;try{ht=1,Cf(t,e,n,i)}finally{ht=r,ka.transition=a}}function xx(t,e,n,i){var r=ht,a=ka.transition;ka.transition=null;try{ht=4,Cf(t,e,n,i)}finally{ht=r,ka.transition=a}}function Cf(t,e,n,i){if(Nl){var r=td(t,e,n,i);if(r===null)Yc(t,e,i,Ul,n),Bh(t,i);else if(gx(r,t,e,n,i))i.stopPropagation();else if(Bh(t,i),e&4&&-1<mx.indexOf(t)){for(;r!==null;){var a=fs(r);if(a!==null&&Yg(a),a=td(t,e,n,i),a===null&&Yc(t,e,i,Ul,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else Yc(t,e,i,null,n)}}var Ul=null;function td(t,e,n,i){if(Ul=null,t=wf(i),t=zr(t),t!==null)if(e=ta(t),e===null)t=null;else if(n=e.tag,n===13){if(t=kg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ul=t,null}function Qg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ox()){case Tf:return 1;case Gg:return 4;case Ll:case sx:return 16;case Wg:return 536870912;default:return 16}default:return 16}}var ir=null,bf=null,dl=null;function Jg(){if(dl)return dl;var t,e=bf,n=e.length,i,r="value"in ir?ir.value:ir.textContent,a=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[a-i];i++);return dl=r.slice(t,1<i?1-i:void 0)}function fl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Cs(){return!0}function Vh(){return!1}function In(t){function e(n,i,r,a,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(n=t[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Cs:Vh,this.isPropagationStopped=Vh,this}return bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cs)},persist:function(){},isPersistent:Cs}),e}var ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pf=In(ao),ds=bt({},ao,{view:0,detail:0}),yx=In(ds),zc,kc,po,cc=bt({},ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(zc=t.screenX-po.screenX,kc=t.screenY-po.screenY):kc=zc=0,po=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:kc}}),Gh=In(cc),Sx=bt({},cc,{dataTransfer:0}),Mx=In(Sx),Ex=bt({},ds,{relatedTarget:0}),Bc=In(Ex),wx=bt({},ao,{animationName:0,elapsedTime:0,pseudoElement:0}),Tx=In(wx),Ax=bt({},ao,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rx=In(Ax),Cx=bt({},ao,{data:0}),Wh=In(Cx),bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Px={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Lx[t])?!!e[t]:!1}function Lf(){return Dx}var Nx=bt({},ds,{key:function(t){if(t.key){var e=bx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Px[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lf,charCode:function(t){return t.type==="keypress"?fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ux=In(Nx),Ix=bt({},cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jh=In(Ix),Fx=bt({},ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lf}),Ox=In(Fx),zx=bt({},ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),kx=In(zx),Bx=bt({},cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hx=In(Bx),Vx=[9,13,27,32],Df=Ii&&"CompositionEvent"in window,Io=null;Ii&&"documentMode"in document&&(Io=document.documentMode);var Gx=Ii&&"TextEvent"in window&&!Io,e0=Ii&&(!Df||Io&&8<Io&&11>=Io),Xh=" ",Yh=!1;function t0(t,e){switch(t){case"keyup":return Vx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function n0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wa=!1;function Wx(t,e){switch(t){case"compositionend":return n0(e);case"keypress":return e.which!==32?null:(Yh=!0,Xh);case"textInput":return t=e.data,t===Xh&&Yh?null:t;default:return null}}function jx(t,e){if(wa)return t==="compositionend"||!Df&&t0(t,e)?(t=Jg(),dl=bf=ir=null,wa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return e0&&e.locale!=="ko"?null:e.data;default:return null}}var Xx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $h(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Xx[t.type]:e==="textarea"}function i0(t,e,n,i){Ug(i),e=Il(e,"onChange"),0<e.length&&(n=new Pf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Fo=null,$o=null;function Yx(t){p0(t,0)}function uc(t){var e=Ra(t);if(Rg(e))return t}function $x(t,e){if(t==="change")return e}var r0=!1;if(Ii){var Hc;if(Ii){var Vc="oninput"in document;if(!Vc){var qh=document.createElement("div");qh.setAttribute("oninput","return;"),Vc=typeof qh.oninput=="function"}Hc=Vc}else Hc=!1;r0=Hc&&(!document.documentMode||9<document.documentMode)}function Kh(){Fo&&(Fo.detachEvent("onpropertychange",a0),$o=Fo=null)}function a0(t){if(t.propertyName==="value"&&uc($o)){var e=[];i0(e,$o,t,wf(t)),zg(Yx,e)}}function qx(t,e,n){t==="focusin"?(Kh(),Fo=e,$o=n,Fo.attachEvent("onpropertychange",a0)):t==="focusout"&&Kh()}function Kx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uc($o)}function Zx(t,e){if(t==="click")return uc(e)}function Qx(t,e){if(t==="input"||t==="change")return uc(e)}function Jx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ri=typeof Object.is=="function"?Object.is:Jx;function qo(t,e){if(ri(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ou.call(e,r)||!ri(t[r],e[r]))return!1}return!0}function Zh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qh(t,e){var n=Zh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zh(n)}}function o0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?o0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function s0(){for(var t=window,e=Cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Cl(t.document)}return e}function Nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function e1(t){var e=s0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&o0(n.ownerDocument.documentElement,n)){if(i!==null&&Nf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!t.extend&&a>i&&(r=i,i=a,a=r),r=Qh(n,a);var o=Qh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),a>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var t1=Ii&&"documentMode"in document&&11>=document.documentMode,Ta=null,nd=null,Oo=null,id=!1;function Jh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;id||Ta==null||Ta!==Cl(i)||(i=Ta,"selectionStart"in i&&Nf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Oo&&qo(Oo,i)||(Oo=i,i=Il(nd,"onSelect"),0<i.length&&(e=new Pf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ta)))}function bs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Aa={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionend:bs("Transition","TransitionEnd")},Gc={},l0={};Ii&&(l0=document.createElement("div").style,"AnimationEvent"in window||(delete Aa.animationend.animation,delete Aa.animationiteration.animation,delete Aa.animationstart.animation),"TransitionEvent"in window||delete Aa.transitionend.transition);function dc(t){if(Gc[t])return Gc[t];if(!Aa[t])return t;var e=Aa[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in l0)return Gc[t]=e[n];return t}var c0=dc("animationend"),u0=dc("animationiteration"),d0=dc("animationstart"),f0=dc("transitionend"),h0=new Map,ep="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(t,e){h0.set(t,e),ea(e,[t])}for(var Wc=0;Wc<ep.length;Wc++){var jc=ep[Wc],n1=jc.toLowerCase(),i1=jc[0].toUpperCase()+jc.slice(1);Sr(n1,"on"+i1)}Sr(c0,"onAnimationEnd");Sr(u0,"onAnimationIteration");Sr(d0,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(f0,"onTransitionEnd");ja("onMouseEnter",["mouseout","mouseover"]);ja("onMouseLeave",["mouseout","mouseover"]);ja("onPointerEnter",["pointerout","pointerover"]);ja("onPointerLeave",["pointerout","pointerover"]);ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ea("onBeforeInput",["compositionend","keypress","textInput","paste"]);ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r1=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function tp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,nx(i,e,void 0,t),t.currentTarget=null}function p0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var o=i.length-1;0<=o;o--){var s=i[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&r.isPropagationStopped())break e;tp(r,s,c),a=l}else for(o=0;o<i.length;o++){if(s=i[o],l=s.instance,c=s.currentTarget,s=s.listener,l!==a&&r.isPropagationStopped())break e;tp(r,s,c),a=l}}}if(Pl)throw t=Qu,Pl=!1,Qu=null,t}function yt(t,e){var n=e[ld];n===void 0&&(n=e[ld]=new Set);var i=t+"__bubble";n.has(i)||(m0(e,t,2,!1),n.add(i))}function Xc(t,e,n){var i=0;e&&(i|=4),m0(n,t,i,e)}var Ps="_reactListening"+Math.random().toString(36).slice(2);function Ko(t){if(!t[Ps]){t[Ps]=!0,Mg.forEach(function(n){n!=="selectionchange"&&(r1.has(n)||Xc(n,!1,t),Xc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ps]||(e[Ps]=!0,Xc("selectionchange",!1,e))}}function m0(t,e,n,i){switch(Qg(e)){case 1:var r=_x;break;case 4:r=xx;break;default:r=Cf}n=r.bind(null,e,n,t),r=void 0,!Zu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Yc(t,e,n,i,r){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;s!==null;){if(o=zr(s),o===null)return;if(l=o.tag,l===5||l===6){i=a=o;continue e}s=s.parentNode}}i=i.return}zg(function(){var c=a,u=wf(n),d=[];e:{var h=h0.get(t);if(h!==void 0){var m=Pf,_=t;switch(t){case"keypress":if(fl(n)===0)break e;case"keydown":case"keyup":m=Ux;break;case"focusin":_="focus",m=Bc;break;case"focusout":_="blur",m=Bc;break;case"beforeblur":case"afterblur":m=Bc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Mx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ox;break;case c0:case u0:case d0:m=Tx;break;case f0:m=kx;break;case"scroll":m=yx;break;case"wheel":m=Hx;break;case"copy":case"cut":case"paste":m=Rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=jh}var x=(e&4)!==0,p=!x&&t==="scroll",f=x?h!==null?h+"Capture":null:h;x=[];for(var g=c,v;g!==null;){v=g;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,f!==null&&(E=Wo(g,f),E!=null&&x.push(Zo(g,E,v)))),p)break;g=g.return}0<x.length&&(h=new m(h,_,null,n,u),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==qu&&(_=n.relatedTarget||n.fromElement)&&(zr(_)||_[Fi]))break e;if((m||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?zr(_):null,_!==null&&(p=ta(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(x=Gh,E="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=jh,E="onPointerLeave",f="onPointerEnter",g="pointer"),p=m==null?h:Ra(m),v=_==null?h:Ra(_),h=new x(E,g+"leave",m,n,u),h.target=p,h.relatedTarget=v,E=null,zr(u)===c&&(x=new x(f,g+"enter",_,n,u),x.target=v,x.relatedTarget=p,E=x),p=E,m&&_)t:{for(x=m,f=_,g=0,v=x;v;v=ia(v))g++;for(v=0,E=f;E;E=ia(E))v++;for(;0<g-v;)x=ia(x),g--;for(;0<v-g;)f=ia(f),v--;for(;g--;){if(x===f||f!==null&&x===f.alternate)break t;x=ia(x),f=ia(f)}x=null}else x=null;m!==null&&np(d,h,m,x,!1),_!==null&&p!==null&&np(d,p,_,x,!0)}}e:{if(h=c?Ra(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var P=$x;else if($h(h))if(r0)P=Qx;else{P=Kx;var S=qx}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=Zx);if(P&&(P=P(t,c))){i0(d,P,n,u);break e}S&&S(t,h,c),t==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&Wu(h,"number",h.value)}switch(S=c?Ra(c):window,t){case"focusin":($h(S)||S.contentEditable==="true")&&(Ta=S,nd=c,Oo=null);break;case"focusout":Oo=nd=Ta=null;break;case"mousedown":id=!0;break;case"contextmenu":case"mouseup":case"dragend":id=!1,Jh(d,n,u);break;case"selectionchange":if(t1)break;case"keydown":case"keyup":Jh(d,n,u)}var A;if(Df)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else wa?t0(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(e0&&n.locale!=="ko"&&(wa||R!=="onCompositionStart"?R==="onCompositionEnd"&&wa&&(A=Jg()):(ir=u,bf="value"in ir?ir.value:ir.textContent,wa=!0)),S=Il(c,R),0<S.length&&(R=new Wh(R,t,null,n,u),d.push({event:R,listeners:S}),A?R.data=A:(A=n0(n),A!==null&&(R.data=A)))),(A=Gx?Wx(t,n):jx(t,n))&&(c=Il(c,"onBeforeInput"),0<c.length&&(u=new Wh("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=A))}p0(d,e)})}function Zo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Il(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=Wo(t,n),a!=null&&i.unshift(Zo(t,a,r)),a=Wo(t,e),a!=null&&i.push(Zo(t,a,r))),t=t.return}return i}function ia(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function np(t,e,n,i,r){for(var a=e._reactName,o=[];n!==null&&n!==i;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===i)break;s.tag===5&&c!==null&&(s=c,r?(l=Wo(n,a),l!=null&&o.unshift(Zo(n,l,s))):r||(l=Wo(n,a),l!=null&&o.push(Zo(n,l,s)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var a1=/\r\n?/g,o1=/\u0000|\uFFFD/g;function ip(t){return(typeof t=="string"?t:""+t).replace(a1,`
`).replace(o1,"")}function Ls(t,e,n){if(e=ip(e),ip(t)!==e&&n)throw Error(se(425))}function Fl(){}var rd=null,ad=null;function od(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sd=typeof setTimeout=="function"?setTimeout:void 0,s1=typeof clearTimeout=="function"?clearTimeout:void 0,rp=typeof Promise=="function"?Promise:void 0,l1=typeof queueMicrotask=="function"?queueMicrotask:typeof rp<"u"?function(t){return rp.resolve(null).then(t).catch(c1)}:sd;function c1(t){setTimeout(function(){throw t})}function $c(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Yo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Yo(e)}function cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ap(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var oo=Math.random().toString(36).slice(2),ui="__reactFiber$"+oo,Qo="__reactProps$"+oo,Fi="__reactContainer$"+oo,ld="__reactEvents$"+oo,u1="__reactListeners$"+oo,d1="__reactHandles$"+oo;function zr(t){var e=t[ui];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fi]||n[ui]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ap(t);t!==null;){if(n=t[ui])return n;t=ap(t)}return e}t=n,n=t.parentNode}return null}function fs(t){return t=t[ui]||t[Fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ra(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function fc(t){return t[Qo]||null}var cd=[],Ca=-1;function Mr(t){return{current:t}}function Mt(t){0>Ca||(t.current=cd[Ca],cd[Ca]=null,Ca--)}function _t(t,e){Ca++,cd[Ca]=t.current,t.current=e}var _r={},ln=Mr(_r),Sn=Mr(!1),Yr=_r;function Xa(t,e){var n=t.type.contextTypes;if(!n)return _r;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=e[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Mn(t){return t=t.childContextTypes,t!=null}function Ol(){Mt(Sn),Mt(ln)}function op(t,e,n){if(ln.current!==_r)throw Error(se(168));_t(ln,e),_t(Sn,n)}function g0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,q_(t)||"Unknown",r));return bt({},n,i)}function zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,Yr=ln.current,_t(ln,t),_t(Sn,Sn.current),!0}function sp(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=g0(t,e,Yr),i.__reactInternalMemoizedMergedChildContext=t,Mt(Sn),Mt(ln),_t(ln,t)):Mt(Sn),_t(Sn,n)}var Ti=null,hc=!1,qc=!1;function v0(t){Ti===null?Ti=[t]:Ti.push(t)}function f1(t){hc=!0,v0(t)}function Er(){if(!qc&&Ti!==null){qc=!0;var t=0,e=ht;try{var n=Ti;for(ht=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ti=null,hc=!1}catch(r){throw Ti!==null&&(Ti=Ti.slice(t+1)),Vg(Tf,Er),r}finally{ht=e,qc=!1}}return null}var ba=[],Pa=0,kl=null,Bl=0,zn=[],kn=0,$r=null,Ci=1,bi="";function Lr(t,e){ba[Pa++]=Bl,ba[Pa++]=kl,kl=t,Bl=e}function _0(t,e,n){zn[kn++]=Ci,zn[kn++]=bi,zn[kn++]=$r,$r=t;var i=Ci;t=bi;var r=32-ni(i)-1;i&=~(1<<r),n+=1;var a=32-ni(e)+r;if(30<a){var o=r-r%5;a=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ci=1<<32-ni(e)+r|n<<r|i,bi=a+t}else Ci=1<<a|n<<r|i,bi=t}function Uf(t){t.return!==null&&(Lr(t,1),_0(t,1,0))}function If(t){for(;t===kl;)kl=ba[--Pa],ba[Pa]=null,Bl=ba[--Pa],ba[Pa]=null;for(;t===$r;)$r=zn[--kn],zn[kn]=null,bi=zn[--kn],zn[kn]=null,Ci=zn[--kn],zn[kn]=null}var Dn=null,Ln=null,wt=!1,ei=null;function x0(t,e){var n=Hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function lp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dn=t,Ln=cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dn=t,Ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$r!==null?{id:Ci,overflow:bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dn=t,Ln=null,!0):!1;default:return!1}}function ud(t){return(t.mode&1)!==0&&(t.flags&128)===0}function dd(t){if(wt){var e=Ln;if(e){var n=e;if(!lp(t,e)){if(ud(t))throw Error(se(418));e=cr(n.nextSibling);var i=Dn;e&&lp(t,e)?x0(i,n):(t.flags=t.flags&-4097|2,wt=!1,Dn=t)}}else{if(ud(t))throw Error(se(418));t.flags=t.flags&-4097|2,wt=!1,Dn=t}}}function cp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function Ds(t){if(t!==Dn)return!1;if(!wt)return cp(t),wt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!od(t.type,t.memoizedProps)),e&&(e=Ln)){if(ud(t))throw y0(),Error(se(418));for(;e;)x0(t,e),e=cr(e.nextSibling)}if(cp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ln=cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ln=null}}else Ln=Dn?cr(t.stateNode.nextSibling):null;return!0}function y0(){for(var t=Ln;t;)t=cr(t.nextSibling)}function Ya(){Ln=Dn=null,wt=!1}function Ff(t){ei===null?ei=[t]:ei.push(t)}var h1=Bi.ReactCurrentBatchConfig;function mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(o){var s=r.refs;o===null?delete s[a]:s[a]=o},e._stringRef=a,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Ns(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function up(t){var e=t._init;return e(t._payload)}function S0(t){function e(f,g){if(t){var v=f.deletions;v===null?(f.deletions=[g],f.flags|=16):v.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=hr(f,g),f.index=0,f.sibling=null,f}function a(f,g,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<g?(f.flags|=2,g):v):(f.flags|=2,g)):(f.flags|=1048576,g)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function s(f,g,v,E){return g===null||g.tag!==6?(g=nu(v,f.mode,E),g.return=f,g):(g=r(g,v),g.return=f,g)}function l(f,g,v,E){var P=v.type;return P===Ea?u(f,g,v.props.children,E,v.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Qi&&up(P)===g.type)?(E=r(g,v.props),E.ref=mo(f,g,v),E.return=f,E):(E=xl(v.type,v.key,v.props,null,f.mode,E),E.ref=mo(f,g,v),E.return=f,E)}function c(f,g,v,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=iu(v,f.mode,E),g.return=f,g):(g=r(g,v.children||[]),g.return=f,g)}function u(f,g,v,E,P){return g===null||g.tag!==7?(g=Wr(v,f.mode,E,P),g.return=f,g):(g=r(g,v),g.return=f,g)}function d(f,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=nu(""+g,f.mode,v),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ms:return v=xl(g.type,g.key,g.props,null,f.mode,v),v.ref=mo(f,null,g),v.return=f,v;case Ma:return g=iu(g,f.mode,v),g.return=f,g;case Qi:var E=g._init;return d(f,E(g._payload),v)}if(Ro(g)||co(g))return g=Wr(g,f.mode,v,null),g.return=f,g;Ns(f,g)}return null}function h(f,g,v,E){var P=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:s(f,g,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ms:return v.key===P?l(f,g,v,E):null;case Ma:return v.key===P?c(f,g,v,E):null;case Qi:return P=v._init,h(f,g,P(v._payload),E)}if(Ro(v)||co(v))return P!==null?null:u(f,g,v,E,null);Ns(f,v)}return null}function m(f,g,v,E,P){if(typeof E=="string"&&E!==""||typeof E=="number")return f=f.get(v)||null,s(g,f,""+E,P);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ms:return f=f.get(E.key===null?v:E.key)||null,l(g,f,E,P);case Ma:return f=f.get(E.key===null?v:E.key)||null,c(g,f,E,P);case Qi:var S=E._init;return m(f,g,v,S(E._payload),P)}if(Ro(E)||co(E))return f=f.get(v)||null,u(g,f,E,P,null);Ns(g,E)}return null}function _(f,g,v,E){for(var P=null,S=null,A=g,R=g=0,M=null;A!==null&&R<v.length;R++){A.index>R?(M=A,A=null):M=A.sibling;var y=h(f,A,v[R],E);if(y===null){A===null&&(A=M);break}t&&A&&y.alternate===null&&e(f,A),g=a(y,g,R),S===null?P=y:S.sibling=y,S=y,A=M}if(R===v.length)return n(f,A),wt&&Lr(f,R),P;if(A===null){for(;R<v.length;R++)A=d(f,v[R],E),A!==null&&(g=a(A,g,R),S===null?P=A:S.sibling=A,S=A);return wt&&Lr(f,R),P}for(A=i(f,A);R<v.length;R++)M=m(A,f,R,v[R],E),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?R:M.key),g=a(M,g,R),S===null?P=M:S.sibling=M,S=M);return t&&A.forEach(function(C){return e(f,C)}),wt&&Lr(f,R),P}function x(f,g,v,E){var P=co(v);if(typeof P!="function")throw Error(se(150));if(v=P.call(v),v==null)throw Error(se(151));for(var S=P=null,A=g,R=g=0,M=null,y=v.next();A!==null&&!y.done;R++,y=v.next()){A.index>R?(M=A,A=null):M=A.sibling;var C=h(f,A,y.value,E);if(C===null){A===null&&(A=M);break}t&&A&&C.alternate===null&&e(f,A),g=a(C,g,R),S===null?P=C:S.sibling=C,S=C,A=M}if(y.done)return n(f,A),wt&&Lr(f,R),P;if(A===null){for(;!y.done;R++,y=v.next())y=d(f,y.value,E),y!==null&&(g=a(y,g,R),S===null?P=y:S.sibling=y,S=y);return wt&&Lr(f,R),P}for(A=i(f,A);!y.done;R++,y=v.next())y=m(A,f,R,y.value,E),y!==null&&(t&&y.alternate!==null&&A.delete(y.key===null?R:y.key),g=a(y,g,R),S===null?P=y:S.sibling=y,S=y);return t&&A.forEach(function(V){return e(f,V)}),wt&&Lr(f,R),P}function p(f,g,v,E){if(typeof v=="object"&&v!==null&&v.type===Ea&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ms:e:{for(var P=v.key,S=g;S!==null;){if(S.key===P){if(P=v.type,P===Ea){if(S.tag===7){n(f,S.sibling),g=r(S,v.props.children),g.return=f,f=g;break e}}else if(S.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Qi&&up(P)===S.type){n(f,S.sibling),g=r(S,v.props),g.ref=mo(f,S,v),g.return=f,f=g;break e}n(f,S);break}else e(f,S);S=S.sibling}v.type===Ea?(g=Wr(v.props.children,f.mode,E,v.key),g.return=f,f=g):(E=xl(v.type,v.key,v.props,null,f.mode,E),E.ref=mo(f,g,v),E.return=f,f=E)}return o(f);case Ma:e:{for(S=v.key;g!==null;){if(g.key===S)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(f,g.sibling),g=r(g,v.children||[]),g.return=f,f=g;break e}else{n(f,g);break}else e(f,g);g=g.sibling}g=iu(v,f.mode,E),g.return=f,f=g}return o(f);case Qi:return S=v._init,p(f,g,S(v._payload),E)}if(Ro(v))return _(f,g,v,E);if(co(v))return x(f,g,v,E);Ns(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(f,g.sibling),g=r(g,v),g.return=f,f=g):(n(f,g),g=nu(v,f.mode,E),g.return=f,f=g),o(f)):n(f,g)}return p}var $a=S0(!0),M0=S0(!1),Hl=Mr(null),Vl=null,La=null,Of=null;function zf(){Of=La=Vl=null}function kf(t){var e=Hl.current;Mt(Hl),t._currentValue=e}function fd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ba(t,e){Vl=t,Of=La=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xn=!0),t.firstContext=null)}function Wn(t){var e=t._currentValue;if(Of!==t)if(t={context:t,memoizedValue:e,next:null},La===null){if(Vl===null)throw Error(se(308));La=t,Vl.dependencies={lanes:0,firstContext:t}}else La=La.next=t;return e}var kr=null;function Bf(t){kr===null?kr=[t]:kr.push(t)}function E0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Bf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Oi(t,i)}function Oi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ji=!1;function Hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function w0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ui(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ct&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Oi(t,n)}return r=i.interleaved,r===null?(e.next=e,Bf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Oi(t,n)}function hl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Af(t,n)}}function dp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?r=a=e:a=a.next=e}else r=a=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Gl(t,e,n,i){var r=t.updateQueue;Ji=!1;var a=r.firstBaseUpdate,o=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var l=s,c=l.next;l.next=null,o===null?a=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(a!==null){var d=r.baseState;o=0,u=c=l=null,s=a;do{var h=s.lane,m=s.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var _=t,x=s;switch(h=e,m=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){d=_.call(m,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(m,d,h):_,h==null)break e;d=bt({},d,h);break e;case 2:Ji=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[s]:h.push(s))}else m={eventTime:m,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(c=u=m,l=d):u=u.next=m,o|=h;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;h=s,s=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else a===null&&(r.shared.lanes=0);Kr|=o,t.lanes=o,t.memoizedState=d}}function fp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var hs={},hi=Mr(hs),Jo=Mr(hs),es=Mr(hs);function Br(t){if(t===hs)throw Error(se(174));return t}function Vf(t,e){switch(_t(es,e),_t(Jo,t),_t(hi,hs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xu(e,t)}Mt(hi),_t(hi,e)}function qa(){Mt(hi),Mt(Jo),Mt(es)}function T0(t){Br(es.current);var e=Br(hi.current),n=Xu(e,t.type);e!==n&&(_t(Jo,t),_t(hi,n))}function Gf(t){Jo.current===t&&(Mt(hi),Mt(Jo))}var Rt=Mr(0);function Wl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kc=[];function Wf(){for(var t=0;t<Kc.length;t++)Kc[t]._workInProgressVersionPrimary=null;Kc.length=0}var pl=Bi.ReactCurrentDispatcher,Zc=Bi.ReactCurrentBatchConfig,qr=0,Ct=null,kt=null,jt=null,jl=!1,zo=!1,ts=0,p1=0;function Qt(){throw Error(se(321))}function jf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ri(t[n],e[n]))return!1;return!0}function Xf(t,e,n,i,r,a){if(qr=a,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pl.current=t===null||t.memoizedState===null?_1:x1,t=n(i,r),zo){a=0;do{if(zo=!1,ts=0,25<=a)throw Error(se(301));a+=1,jt=kt=null,e.updateQueue=null,pl.current=y1,t=n(i,r)}while(zo)}if(pl.current=Xl,e=kt!==null&&kt.next!==null,qr=0,jt=kt=Ct=null,jl=!1,e)throw Error(se(300));return t}function Yf(){var t=ts!==0;return ts=0,t}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Ct.memoizedState=jt=t:jt=jt.next=t,jt}function jn(){if(kt===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var e=jt===null?Ct.memoizedState:jt.next;if(e!==null)jt=e,kt=t;else{if(t===null)throw Error(se(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},jt===null?Ct.memoizedState=jt=t:jt=jt.next=t}return jt}function ns(t,e){return typeof e=="function"?e(t):e}function Qc(t){var e=jn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=kt,r=i.baseQueue,a=n.pending;if(a!==null){if(r!==null){var o=r.next;r.next=a.next,a.next=o}i.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,i=i.baseState;var s=o=null,l=null,c=a;do{var u=c.lane;if((qr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=d,o=i):l=l.next=d,Ct.lanes|=u,Kr|=u}c=c.next}while(c!==null&&c!==a);l===null?o=i:l.next=s,ri(i,e.memoizedState)||(xn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do a=r.lane,Ct.lanes|=a,Kr|=a,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jc(t){var e=jn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,a=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do a=t(a,o.action),o=o.next;while(o!==r);ri(a,e.memoizedState)||(xn=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,i]}function A0(){}function R0(t,e){var n=Ct,i=jn(),r=e(),a=!ri(i.memoizedState,r);if(a&&(i.memoizedState=r,xn=!0),i=i.queue,$f(P0.bind(null,n,i,t),[t]),i.getSnapshot!==e||a||jt!==null&&jt.memoizedState.tag&1){if(n.flags|=2048,is(9,b0.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(se(349));qr&30||C0(n,e,r)}return r}function C0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function b0(t,e,n,i){e.value=n,e.getSnapshot=i,L0(e)&&D0(t)}function P0(t,e,n){return n(function(){L0(e)&&D0(t)})}function L0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ri(t,n)}catch{return!0}}function D0(t){var e=Oi(t,1);e!==null&&ii(e,t,1,-1)}function hp(t){var e=si();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},e.queue=t,t=t.dispatch=v1.bind(null,Ct,t),[e.memoizedState,t]}function is(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function N0(){return jn().memoizedState}function ml(t,e,n,i){var r=si();Ct.flags|=t,r.memoizedState=is(1|e,n,void 0,i===void 0?null:i)}function pc(t,e,n,i){var r=jn();i=i===void 0?null:i;var a=void 0;if(kt!==null){var o=kt.memoizedState;if(a=o.destroy,i!==null&&jf(i,o.deps)){r.memoizedState=is(e,n,a,i);return}}Ct.flags|=t,r.memoizedState=is(1|e,n,a,i)}function pp(t,e){return ml(8390656,8,t,e)}function $f(t,e){return pc(2048,8,t,e)}function U0(t,e){return pc(4,2,t,e)}function I0(t,e){return pc(4,4,t,e)}function F0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function O0(t,e,n){return n=n!=null?n.concat([t]):null,pc(4,4,F0.bind(null,e,t),n)}function qf(){}function z0(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&jf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function k0(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&jf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function B0(t,e,n){return qr&21?(ri(n,e)||(n=jg(),Ct.lanes|=n,Kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xn=!0),t.memoizedState=n)}function m1(t,e){var n=ht;ht=n!==0&&4>n?n:4,t(!0);var i=Zc.transition;Zc.transition={};try{t(!1),e()}finally{ht=n,Zc.transition=i}}function H0(){return jn().memoizedState}function g1(t,e,n){var i=fr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},V0(t))G0(e,n);else if(n=E0(t,e,n,i),n!==null){var r=hn();ii(n,t,i,r),W0(n,e,i)}}function v1(t,e,n){var i=fr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(V0(t))G0(e,r);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var o=e.lastRenderedState,s=a(o,n);if(r.hasEagerState=!0,r.eagerState=s,ri(s,o)){var l=e.interleaved;l===null?(r.next=r,Bf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=E0(t,e,r,i),n!==null&&(r=hn(),ii(n,t,i,r),W0(n,e,i))}}function V0(t){var e=t.alternate;return t===Ct||e!==null&&e===Ct}function G0(t,e){zo=jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function W0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Af(t,n)}}var Xl={readContext:Wn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},_1={readContext:Wn,useCallback:function(t,e){return si().memoizedState=[t,e===void 0?null:e],t},useContext:Wn,useEffect:pp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ml(4194308,4,F0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return ml(4,2,t,e)},useMemo:function(t,e){var n=si();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=si();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=g1.bind(null,Ct,t),[i.memoizedState,t]},useRef:function(t){var e=si();return t={current:t},e.memoizedState=t},useState:hp,useDebugValue:qf,useDeferredValue:function(t){return si().memoizedState=t},useTransition:function(){var t=hp(!1),e=t[0];return t=m1.bind(null,t[1]),si().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ct,r=si();if(wt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Xt===null)throw Error(se(349));qr&30||C0(i,e,n)}r.memoizedState=n;var a={value:n,getSnapshot:e};return r.queue=a,pp(P0.bind(null,i,a,t),[t]),i.flags|=2048,is(9,b0.bind(null,i,a,n,e),void 0,null),n},useId:function(){var t=si(),e=Xt.identifierPrefix;if(wt){var n=bi,i=Ci;n=(i&~(1<<32-ni(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ts++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=p1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},x1={readContext:Wn,useCallback:z0,useContext:Wn,useEffect:$f,useImperativeHandle:O0,useInsertionEffect:U0,useLayoutEffect:I0,useMemo:k0,useReducer:Qc,useRef:N0,useState:function(){return Qc(ns)},useDebugValue:qf,useDeferredValue:function(t){var e=jn();return B0(e,kt.memoizedState,t)},useTransition:function(){var t=Qc(ns)[0],e=jn().memoizedState;return[t,e]},useMutableSource:A0,useSyncExternalStore:R0,useId:H0,unstable_isNewReconciler:!1},y1={readContext:Wn,useCallback:z0,useContext:Wn,useEffect:$f,useImperativeHandle:O0,useInsertionEffect:U0,useLayoutEffect:I0,useMemo:k0,useReducer:Jc,useRef:N0,useState:function(){return Jc(ns)},useDebugValue:qf,useDeferredValue:function(t){var e=jn();return kt===null?e.memoizedState=t:B0(e,kt.memoizedState,t)},useTransition:function(){var t=Jc(ns)[0],e=jn().memoizedState;return[t,e]},useMutableSource:A0,useSyncExternalStore:R0,useId:H0,unstable_isNewReconciler:!1};function Kn(t,e){if(t&&t.defaultProps){e=bt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function hd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:bt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mc={isMounted:function(t){return(t=t._reactInternals)?ta(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=hn(),r=fr(t),a=Ui(i,r);a.payload=e,n!=null&&(a.callback=n),e=ur(t,a,r),e!==null&&(ii(e,t,r,i),hl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=hn(),r=fr(t),a=Ui(i,r);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=ur(t,a,r),e!==null&&(ii(e,t,r,i),hl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=hn(),i=fr(t),r=Ui(n,i);r.tag=2,e!=null&&(r.callback=e),e=ur(t,r,i),e!==null&&(ii(e,t,i,n),hl(e,t,i))}};function mp(t,e,n,i,r,a,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,o):e.prototype&&e.prototype.isPureReactComponent?!qo(n,i)||!qo(r,a):!0}function j0(t,e,n){var i=!1,r=_r,a=e.contextType;return typeof a=="object"&&a!==null?a=Wn(a):(r=Mn(e)?Yr:ln.current,i=e.contextTypes,a=(i=i!=null)?Xa(t,r):_r),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=a),e}function gp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&mc.enqueueReplaceState(e,e.state,null)}function pd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Hf(t);var a=e.contextType;typeof a=="object"&&a!==null?r.context=Wn(a):(a=Mn(e)?Yr:ln.current,r.context=Xa(t,a)),r.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(hd(t,e,a,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&mc.enqueueReplaceState(r,r.state,null),Gl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ka(t,e){try{var n="",i=e;do n+=$_(i),i=i.return;while(i);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:r,digest:null}}function eu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function md(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var S1=typeof WeakMap=="function"?WeakMap:Map;function X0(t,e,n){n=Ui(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){$l||($l=!0,Td=i),md(t,e)},n}function Y0(t,e,n){n=Ui(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){md(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){md(t,e),typeof i!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function vp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new S1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=I1.bind(null,t,e,n),e.then(t,t))}function _p(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ui(-1,1),e.tag=2,ur(n,e,1))),n.lanes|=1),t)}var M1=Bi.ReactCurrentOwner,xn=!1;function fn(t,e,n,i){e.child=t===null?M0(e,null,n,i):$a(e,t.child,n,i)}function yp(t,e,n,i,r){n=n.render;var a=e.ref;return Ba(e,r),i=Xf(t,e,n,i,a,r),n=Yf(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,zi(t,e,r)):(wt&&n&&Uf(e),e.flags|=1,fn(t,e,i,r),e.child)}function Sp(t,e,n,i,r){if(t===null){var a=n.type;return typeof a=="function"&&!ih(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,$0(t,e,a,i,r)):(t=xl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&r)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:qo,n(o,i)&&t.ref===e.ref)return zi(t,e,r)}return e.flags|=1,t=hr(a,i),t.ref=e.ref,t.return=e,e.child=t}function $0(t,e,n,i,r){if(t!==null){var a=t.memoizedProps;if(qo(a,i)&&t.ref===e.ref)if(xn=!1,e.pendingProps=i=a,(t.lanes&r)!==0)t.flags&131072&&(xn=!0);else return e.lanes=t.lanes,zi(t,e,r)}return gd(t,e,n,i,r)}function q0(t,e,n){var i=e.pendingProps,r=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_t(Na,bn),bn|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_t(Na,bn),bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,_t(Na,bn),bn|=i}else a!==null?(i=a.baseLanes|n,e.memoizedState=null):i=n,_t(Na,bn),bn|=i;return fn(t,e,r,n),e.child}function K0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gd(t,e,n,i,r){var a=Mn(n)?Yr:ln.current;return a=Xa(e,a),Ba(e,r),n=Xf(t,e,n,i,a,r),i=Yf(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,zi(t,e,r)):(wt&&i&&Uf(e),e.flags|=1,fn(t,e,n,r),e.child)}function Mp(t,e,n,i,r){if(Mn(n)){var a=!0;zl(e)}else a=!1;if(Ba(e,r),e.stateNode===null)gl(t,e),j0(e,n,i),pd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,s=e.memoizedProps;o.props=s;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Wn(c):(c=Mn(n)?Yr:ln.current,c=Xa(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==i||l!==c)&&gp(e,o,i,c),Ji=!1;var h=e.memoizedState;o.state=h,Gl(e,i,o,r),l=e.memoizedState,s!==i||h!==l||Sn.current||Ji?(typeof u=="function"&&(hd(e,n,u,i),l=e.memoizedState),(s=Ji||mp(e,n,s,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=s):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,w0(t,e),s=e.memoizedProps,c=e.type===e.elementType?s:Kn(e.type,s),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wn(l):(l=Mn(n)?Yr:ln.current,l=Xa(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==d||h!==l)&&gp(e,o,i,l),Ji=!1,h=e.memoizedState,o.state=h,Gl(e,i,o,r);var _=e.memoizedState;s!==d||h!==_||Sn.current||Ji?(typeof m=="function"&&(hd(e,n,m,i),_=e.memoizedState),(c=Ji||mp(e,n,c,i,h,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return vd(t,e,n,i,a,r)}function vd(t,e,n,i,r,a){K0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&sp(e,n,!1),zi(t,e,a);i=e.stateNode,M1.current=e;var s=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=$a(e,t.child,null,a),e.child=$a(e,null,s,a)):fn(t,e,s,a),e.memoizedState=i.state,r&&sp(e,n,!0),e.child}function Z0(t){var e=t.stateNode;e.pendingContext?op(t,e.pendingContext,e.pendingContext!==e.context):e.context&&op(t,e.context,!1),Vf(t,e.containerInfo)}function Ep(t,e,n,i,r){return Ya(),Ff(r),e.flags|=256,fn(t,e,n,i),e.child}var _d={dehydrated:null,treeContext:null,retryLane:0};function xd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Q0(t,e,n){var i=e.pendingProps,r=Rt.current,a=!1,o=(e.flags&128)!==0,s;if((s=o)||(s=t!==null&&t.memoizedState===null?!1:(r&2)!==0),s?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),_t(Rt,r&1),t===null)return dd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,a?(i=e.mode,a=e.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=_c(o,i,0,null),t=Wr(t,i,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=xd(n),e.memoizedState=_d,t):Kf(e,o));if(r=t.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return E1(t,e,o,i,s,r,n);if(a){a=i.fallback,o=e.mode,r=t.child,s=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=hr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),s!==null?a=hr(s,a):(a=Wr(a,o,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,o=t.child.memoizedState,o=o===null?xd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=t.childLanes&~n,e.memoizedState=_d,i}return a=t.child,t=a.sibling,i=hr(a,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Kf(t,e){return e=_c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Us(t,e,n,i){return i!==null&&Ff(i),$a(e,t.child,null,n),t=Kf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function E1(t,e,n,i,r,a,o){if(n)return e.flags&256?(e.flags&=-257,i=eu(Error(se(422))),Us(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=i.fallback,r=e.mode,i=_c({mode:"visible",children:i.children},r,0,null),a=Wr(a,r,o,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,e.mode&1&&$a(e,t.child,null,o),e.child.memoizedState=xd(o),e.memoizedState=_d,a);if(!(e.mode&1))return Us(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var s=i.dgst;return i=s,a=Error(se(419)),i=eu(a,i,void 0),Us(t,e,o,i)}if(s=(o&t.childLanes)!==0,xn||s){if(i=Xt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,Oi(t,r),ii(i,t,r,-1))}return nh(),i=eu(Error(se(421))),Us(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=F1.bind(null,t),r._reactRetry=e,null):(t=a.treeContext,Ln=cr(r.nextSibling),Dn=e,wt=!0,ei=null,t!==null&&(zn[kn++]=Ci,zn[kn++]=bi,zn[kn++]=$r,Ci=t.id,bi=t.overflow,$r=e),e=Kf(e,i.children),e.flags|=4096,e)}function wp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),fd(t.return,e,n)}function tu(t,e,n,i,r){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function J0(t,e,n){var i=e.pendingProps,r=i.revealOrder,a=i.tail;if(fn(t,e,i.children,n),i=Rt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wp(t,n,e);else if(t.tag===19)wp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(_t(Rt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Wl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),tu(e,!1,r,n,a);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Wl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}tu(e,!0,n,null,a);break;case"together":tu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function w1(t,e,n){switch(e.tag){case 3:Z0(e),Ya();break;case 5:T0(e);break;case 1:Mn(e.type)&&zl(e);break;case 4:Vf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;_t(Hl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(_t(Rt,Rt.current&1),e.flags|=128,null):n&e.child.childLanes?Q0(t,e,n):(_t(Rt,Rt.current&1),t=zi(t,e,n),t!==null?t.sibling:null);_t(Rt,Rt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return J0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),_t(Rt,Rt.current),i)break;return null;case 22:case 23:return e.lanes=0,q0(t,e,n)}return zi(t,e,n)}var ev,yd,tv,nv;ev=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yd=function(){};tv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Br(hi.current);var a=null;switch(n){case"input":r=Vu(t,r),i=Vu(t,i),a=[];break;case"select":r=bt({},r,{value:void 0}),i=bt({},i,{value:void 0}),a=[];break;case"textarea":r=ju(t,r),i=ju(t,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Fl)}Yu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var s=r[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Vo.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in i){var l=i[c];if(s=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Vo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&yt("scroll",t),a||s===l||(a=[])):(a=a||[]).push(c,l))}n&&(a=a||[]).push("style",n);var c=a;(e.updateQueue=c)&&(e.flags|=4)}};nv=function(t,e,n,i){n!==i&&(e.flags|=4)};function go(t,e){if(!wt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function T1(t,e,n){var i=e.pendingProps;switch(If(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return Mn(e.type)&&Ol(),Jt(e),null;case 3:return i=e.stateNode,qa(),Mt(Sn),Mt(ln),Wf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ds(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ei!==null&&(Cd(ei),ei=null))),yd(t,e),Jt(e),null;case 5:Gf(e);var r=Br(es.current);if(n=e.type,t!==null&&e.stateNode!=null)tv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Jt(e),null}if(t=Br(hi.current),Ds(e)){i=e.stateNode,n=e.type;var a=e.memoizedProps;switch(i[ui]=e,i[Qo]=a,t=(e.mode&1)!==0,n){case"dialog":yt("cancel",i),yt("close",i);break;case"iframe":case"object":case"embed":yt("load",i);break;case"video":case"audio":for(r=0;r<bo.length;r++)yt(bo[r],i);break;case"source":yt("error",i);break;case"img":case"image":case"link":yt("error",i),yt("load",i);break;case"details":yt("toggle",i);break;case"input":Nh(i,a),yt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},yt("invalid",i);break;case"textarea":Ih(i,a),yt("invalid",i)}Yu(n,a),r=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?i.textContent!==s&&(a.suppressHydrationWarning!==!0&&Ls(i.textContent,s,t),r=["children",s]):typeof s=="number"&&i.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Ls(i.textContent,s,t),r=["children",""+s]):Vo.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&yt("scroll",i)}switch(n){case"input":Es(i),Uh(i,a,!0);break;case"textarea":Es(i),Fh(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=Fl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Pg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ui]=e,t[Qo]=i,ev(t,e,!1,!1),e.stateNode=t;e:{switch(o=$u(n,i),n){case"dialog":yt("cancel",t),yt("close",t),r=i;break;case"iframe":case"object":case"embed":yt("load",t),r=i;break;case"video":case"audio":for(r=0;r<bo.length;r++)yt(bo[r],t);r=i;break;case"source":yt("error",t),r=i;break;case"img":case"image":case"link":yt("error",t),yt("load",t),r=i;break;case"details":yt("toggle",t),r=i;break;case"input":Nh(t,i),r=Vu(t,i),yt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=bt({},i,{value:void 0}),yt("invalid",t);break;case"textarea":Ih(t,i),r=ju(t,i),yt("invalid",t);break;default:r=i}Yu(n,r),s=r;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Ng(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lg(t,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Go(t,l):typeof l=="number"&&Go(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Vo.hasOwnProperty(a)?l!=null&&a==="onScroll"&&yt("scroll",t):l!=null&&yf(t,a,l,o))}switch(n){case"input":Es(t),Uh(t,i,!1);break;case"textarea":Es(t),Fh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+vr(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?Fa(t,!!i.multiple,a,!1):i.defaultValue!=null&&Fa(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Fl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Jt(e),null;case 6:if(t&&e.stateNode!=null)nv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Br(es.current),Br(hi.current),Ds(e)){if(i=e.stateNode,n=e.memoizedProps,i[ui]=e,(a=i.nodeValue!==n)&&(t=Dn,t!==null))switch(t.tag){case 3:Ls(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ls(i.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ui]=e,e.stateNode=i}return Jt(e),null;case 13:if(Mt(Rt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(wt&&Ln!==null&&e.mode&1&&!(e.flags&128))y0(),Ya(),e.flags|=98560,a=!1;else if(a=Ds(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(se(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(se(317));a[ui]=e}else Ya(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Jt(e),a=!1}else ei!==null&&(Cd(ei),ei=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Rt.current&1?Ht===0&&(Ht=3):nh())),e.updateQueue!==null&&(e.flags|=4),Jt(e),null);case 4:return qa(),yd(t,e),t===null&&Ko(e.stateNode.containerInfo),Jt(e),null;case 10:return kf(e.type._context),Jt(e),null;case 17:return Mn(e.type)&&Ol(),Jt(e),null;case 19:if(Mt(Rt),a=e.memoizedState,a===null)return Jt(e),null;if(i=(e.flags&128)!==0,o=a.rendering,o===null)if(i)go(a,!1);else{if(Ht!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Wl(t),o!==null){for(e.flags|=128,go(a,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)a=n,t=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,t=o.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _t(Rt,Rt.current&1|2),e.child}t=t.sibling}a.tail!==null&&Dt()>Za&&(e.flags|=128,i=!0,go(a,!1),e.lanes=4194304)}else{if(!i)if(t=Wl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),go(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!wt)return Jt(e),null}else 2*Dt()-a.renderingStartTime>Za&&n!==1073741824&&(e.flags|=128,i=!0,go(a,!1),e.lanes=4194304);a.isBackwards?(o.sibling=e.child,e.child=o):(n=a.last,n!==null?n.sibling=o:e.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Dt(),e.sibling=null,n=Rt.current,_t(Rt,i?n&1|2:n&1),e):(Jt(e),null);case 22:case 23:return th(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?bn&1073741824&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function A1(t,e){switch(If(e),e.tag){case 1:return Mn(e.type)&&Ol(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qa(),Mt(Sn),Mt(ln),Wf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gf(e),null;case 13:if(Mt(Rt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Ya()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Mt(Rt),null;case 4:return qa(),null;case 10:return kf(e.type._context),null;case 22:case 23:return th(),null;case 24:return null;default:return null}}var Is=!1,nn=!1,R1=typeof WeakSet=="function"?WeakSet:Set,Re=null;function Da(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Lt(t,e,i)}else n.current=null}function Sd(t,e,n){try{n()}catch(i){Lt(t,e,i)}}var Tp=!1;function C1(t,e){if(rd=Nl,t=s0(),Nf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(s=o+r),d!==a||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++c===r&&(s=o),h===a&&++u===i&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ad={focusedElem:t,selectionRange:n},Nl=!1,Re=e;Re!==null;)if(e=Re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Re=t;else for(;Re!==null;){e=Re;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,p=_.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:Kn(e.type,x),p);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(E){Lt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}return _=Tp,Tp=!1,_}function ko(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var a=r.destroy;r.destroy=void 0,a!==void 0&&Sd(e,n,a)}r=r.next}while(r!==i)}}function gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Md(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function iv(t){var e=t.alternate;e!==null&&(t.alternate=null,iv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ui],delete e[Qo],delete e[ld],delete e[u1],delete e[d1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function rv(t){return t.tag===5||t.tag===3||t.tag===4}function Ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||rv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fl));else if(i!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}function wd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(wd(t,e,n),t=t.sibling;t!==null;)wd(t,e,n),t=t.sibling}var Yt=null,Qn=!1;function Wi(t,e,n){for(n=n.child;n!==null;)av(t,e,n),n=n.sibling}function av(t,e,n){if(fi&&typeof fi.onCommitFiberUnmount=="function")try{fi.onCommitFiberUnmount(lc,n)}catch{}switch(n.tag){case 5:nn||Da(n,e);case 6:var i=Yt,r=Qn;Yt=null,Wi(t,e,n),Yt=i,Qn=r,Yt!==null&&(Qn?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(Qn?(t=Yt,n=n.stateNode,t.nodeType===8?$c(t.parentNode,n):t.nodeType===1&&$c(t,n),Yo(t)):$c(Yt,n.stateNode));break;case 4:i=Yt,r=Qn,Yt=n.stateNode.containerInfo,Qn=!0,Wi(t,e,n),Yt=i,Qn=r;break;case 0:case 11:case 14:case 15:if(!nn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Sd(n,e,o),r=r.next}while(r!==i)}Wi(t,e,n);break;case 1:if(!nn&&(Da(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(s){Lt(n,e,s)}Wi(t,e,n);break;case 21:Wi(t,e,n);break;case 22:n.mode&1?(nn=(i=nn)||n.memoizedState!==null,Wi(t,e,n),nn=i):Wi(t,e,n);break;default:Wi(t,e,n)}}function Rp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new R1),e.forEach(function(i){var r=O1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Xn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var a=t,o=e,s=o;e:for(;s!==null;){switch(s.tag){case 5:Yt=s.stateNode,Qn=!1;break e;case 3:Yt=s.stateNode.containerInfo,Qn=!0;break e;case 4:Yt=s.stateNode.containerInfo,Qn=!0;break e}s=s.return}if(Yt===null)throw Error(se(160));av(a,o,r),Yt=null,Qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Lt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ov(e,t),e=e.sibling}function ov(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xn(e,t),ai(t),i&4){try{ko(3,t,t.return),gc(3,t)}catch(x){Lt(t,t.return,x)}try{ko(5,t,t.return)}catch(x){Lt(t,t.return,x)}}break;case 1:Xn(e,t),ai(t),i&512&&n!==null&&Da(n,n.return);break;case 5:if(Xn(e,t),ai(t),i&512&&n!==null&&Da(n,n.return),t.flags&32){var r=t.stateNode;try{Go(r,"")}catch(x){Lt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var a=t.memoizedProps,o=n!==null?n.memoizedProps:a,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Cg(r,a),$u(s,o);var c=$u(s,a);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Ng(r,d):u==="dangerouslySetInnerHTML"?Lg(r,d):u==="children"?Go(r,d):yf(r,u,d,c)}switch(s){case"input":Gu(r,a);break;case"textarea":bg(r,a);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var m=a.value;m!=null?Fa(r,!!a.multiple,m,!1):h!==!!a.multiple&&(a.defaultValue!=null?Fa(r,!!a.multiple,a.defaultValue,!0):Fa(r,!!a.multiple,a.multiple?[]:"",!1))}r[Qo]=a}catch(x){Lt(t,t.return,x)}}break;case 6:if(Xn(e,t),ai(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,a=t.memoizedProps;try{r.nodeValue=a}catch(x){Lt(t,t.return,x)}}break;case 3:if(Xn(e,t),ai(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Yo(e.containerInfo)}catch(x){Lt(t,t.return,x)}break;case 4:Xn(e,t),ai(t);break;case 13:Xn(e,t),ai(t),r=t.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(Jf=Dt())),i&4&&Rp(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(nn=(c=nn)||u,Xn(e,t),nn=c):Xn(e,t),ai(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Re=t,u=t.child;u!==null;){for(d=Re=u;Re!==null;){switch(h=Re,m=h.child,h.tag){case 0:case 11:case 14:case 15:ko(4,h,h.return);break;case 1:Da(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){Lt(i,n,x)}}break;case 5:Da(h,h.return);break;case 22:if(h.memoizedState!==null){bp(d);continue}}m!==null?(m.return=h,Re=m):bp(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Dg("display",o))}catch(x){Lt(t,t.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){Lt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Xn(e,t),ai(t),i&4&&Rp(t);break;case 21:break;default:Xn(e,t),ai(t)}}function ai(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(rv(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Go(r,""),i.flags&=-33);var a=Ap(t);wd(t,a,r);break;case 3:case 4:var o=i.stateNode.containerInfo,s=Ap(t);Ed(t,s,o);break;default:throw Error(se(161))}}catch(l){Lt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function b1(t,e,n){Re=t,sv(t)}function sv(t,e,n){for(var i=(t.mode&1)!==0;Re!==null;){var r=Re,a=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Is;if(!o){var s=r.alternate,l=s!==null&&s.memoizedState!==null||nn;s=Is;var c=nn;if(Is=o,(nn=l)&&!c)for(Re=r;Re!==null;)o=Re,l=o.child,o.tag===22&&o.memoizedState!==null?Pp(r):l!==null?(l.return=o,Re=l):Pp(r);for(;a!==null;)Re=a,sv(a),a=a.sibling;Re=r,Is=s,nn=c}Cp(t)}else r.subtreeFlags&8772&&a!==null?(a.return=r,Re=a):Cp(t)}}function Cp(t){for(;Re!==null;){var e=Re;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nn||gc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!nn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&fp(e,a,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fp(e,o,n)}break;case 5:var s=e.stateNode;if(n===null&&e.flags&4){n=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Yo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}nn||e.flags&512&&Md(e)}catch(h){Lt(e,e.return,h)}}if(e===t){Re=null;break}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}}function bp(t){for(;Re!==null;){var e=Re;if(e===t){Re=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Re=n;break}Re=e.return}}function Pp(t){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gc(4,e)}catch(l){Lt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Lt(e,r,l)}}var a=e.return;try{Md(e)}catch(l){Lt(e,a,l)}break;case 5:var o=e.return;try{Md(e)}catch(l){Lt(e,o,l)}}}catch(l){Lt(e,e.return,l)}if(e===t){Re=null;break}var s=e.sibling;if(s!==null){s.return=e.return,Re=s;break}Re=e.return}}var P1=Math.ceil,Yl=Bi.ReactCurrentDispatcher,Zf=Bi.ReactCurrentOwner,Gn=Bi.ReactCurrentBatchConfig,ct=0,Xt=null,Ot=null,qt=0,bn=0,Na=Mr(0),Ht=0,rs=null,Kr=0,vc=0,Qf=0,Bo=null,_n=null,Jf=0,Za=1/0,wi=null,$l=!1,Td=null,dr=null,Fs=!1,rr=null,ql=0,Ho=0,Ad=null,vl=-1,_l=0;function hn(){return ct&6?Dt():vl!==-1?vl:vl=Dt()}function fr(t){return t.mode&1?ct&2&&qt!==0?qt&-qt:h1.transition!==null?(_l===0&&(_l=jg()),_l):(t=ht,t!==0||(t=window.event,t=t===void 0?16:Qg(t.type)),t):1}function ii(t,e,n,i){if(50<Ho)throw Ho=0,Ad=null,Error(se(185));us(t,n,i),(!(ct&2)||t!==Xt)&&(t===Xt&&(!(ct&2)&&(vc|=n),Ht===4&&tr(t,qt)),En(t,i),n===1&&ct===0&&!(e.mode&1)&&(Za=Dt()+500,hc&&Er()))}function En(t,e){var n=t.callbackNode;hx(t,e);var i=Dl(t,t===Xt?qt:0);if(i===0)n!==null&&kh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&kh(n),e===1)t.tag===0?f1(Lp.bind(null,t)):v0(Lp.bind(null,t)),l1(function(){!(ct&6)&&Er()}),n=null;else{switch(Xg(i)){case 1:n=Tf;break;case 4:n=Gg;break;case 16:n=Ll;break;case 536870912:n=Wg;break;default:n=Ll}n=mv(n,lv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function lv(t,e){if(vl=-1,_l=0,ct&6)throw Error(se(327));var n=t.callbackNode;if(Ha()&&t.callbackNode!==n)return null;var i=Dl(t,t===Xt?qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Kl(t,i);else{e=i;var r=ct;ct|=2;var a=uv();(Xt!==t||qt!==e)&&(wi=null,Za=Dt()+500,Gr(t,e));do try{N1();break}catch(s){cv(t,s)}while(!0);zf(),Yl.current=a,ct=r,Ot!==null?e=0:(Xt=null,qt=0,e=Ht)}if(e!==0){if(e===2&&(r=Ju(t),r!==0&&(i=r,e=Rd(t,r))),e===1)throw n=rs,Gr(t,0),tr(t,i),En(t,Dt()),n;if(e===6)tr(t,i);else{if(r=t.current.alternate,!(i&30)&&!L1(r)&&(e=Kl(t,i),e===2&&(a=Ju(t),a!==0&&(i=a,e=Rd(t,a))),e===1))throw n=rs,Gr(t,0),tr(t,i),En(t,Dt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Dr(t,_n,wi);break;case 3:if(tr(t,i),(i&130023424)===i&&(e=Jf+500-Dt(),10<e)){if(Dl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){hn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=sd(Dr.bind(null,t,_n,wi),e);break}Dr(t,_n,wi);break;case 4:if(tr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ni(i);a=1<<o,o=e[o],o>r&&(r=o),i&=~a}if(i=r,i=Dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*P1(i/1960))-i,10<i){t.timeoutHandle=sd(Dr.bind(null,t,_n,wi),i);break}Dr(t,_n,wi);break;case 5:Dr(t,_n,wi);break;default:throw Error(se(329))}}}return En(t,Dt()),t.callbackNode===n?lv.bind(null,t):null}function Rd(t,e){var n=Bo;return t.current.memoizedState.isDehydrated&&(Gr(t,e).flags|=256),t=Kl(t,e),t!==2&&(e=_n,_n=n,e!==null&&Cd(e)),t}function Cd(t){_n===null?_n=t:_n.push.apply(_n,t)}function L1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!ri(a(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function tr(t,e){for(e&=~Qf,e&=~vc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ni(e),i=1<<n;t[n]=-1,e&=~i}}function Lp(t){if(ct&6)throw Error(se(327));Ha();var e=Dl(t,0);if(!(e&1))return En(t,Dt()),null;var n=Kl(t,e);if(t.tag!==0&&n===2){var i=Ju(t);i!==0&&(e=i,n=Rd(t,i))}if(n===1)throw n=rs,Gr(t,0),tr(t,e),En(t,Dt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,_n,wi),En(t,Dt()),null}function eh(t,e){var n=ct;ct|=1;try{return t(e)}finally{ct=n,ct===0&&(Za=Dt()+500,hc&&Er())}}function Zr(t){rr!==null&&rr.tag===0&&!(ct&6)&&Ha();var e=ct;ct|=1;var n=Gn.transition,i=ht;try{if(Gn.transition=null,ht=1,t)return t()}finally{ht=i,Gn.transition=n,ct=e,!(ct&6)&&Er()}}function th(){bn=Na.current,Mt(Na)}function Gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,s1(n)),Ot!==null)for(n=Ot.return;n!==null;){var i=n;switch(If(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ol();break;case 3:qa(),Mt(Sn),Mt(ln),Wf();break;case 5:Gf(i);break;case 4:qa();break;case 13:Mt(Rt);break;case 19:Mt(Rt);break;case 10:kf(i.type._context);break;case 22:case 23:th()}n=n.return}if(Xt=t,Ot=t=hr(t.current,null),qt=bn=e,Ht=0,rs=null,Qf=vc=Kr=0,_n=Bo=null,kr!==null){for(e=0;e<kr.length;e++)if(n=kr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,a=n.pending;if(a!==null){var o=a.next;a.next=r,i.next=o}n.pending=i}kr=null}return t}function cv(t,e){do{var n=Ot;try{if(zf(),pl.current=Xl,jl){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}jl=!1}if(qr=0,jt=kt=Ct=null,zo=!1,ts=0,Zf.current=null,n===null||n.return===null){Ht=1,rs=e,Ot=null;break}e:{var a=t,o=n.return,s=n,l=e;if(e=qt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=s,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=_p(o);if(m!==null){m.flags&=-257,xp(m,o,s,a,e),m.mode&1&&vp(a,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){vp(a,c,e),nh();break e}l=Error(se(426))}}else if(wt&&s.mode&1){var p=_p(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),xp(p,o,s,a,e),Ff(Ka(l,s));break e}}a=l=Ka(l,s),Ht!==4&&(Ht=2),Bo===null?Bo=[a]:Bo.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var f=X0(a,l,e);dp(a,f);break e;case 1:s=l;var g=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(dr===null||!dr.has(v)))){a.flags|=65536,e&=-e,a.lanes|=e;var E=Y0(a,s,e);dp(a,E);break e}}a=a.return}while(a!==null)}fv(n)}catch(P){e=P,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(!0)}function uv(){var t=Yl.current;return Yl.current=Xl,t===null?Xl:t}function nh(){(Ht===0||Ht===3||Ht===2)&&(Ht=4),Xt===null||!(Kr&268435455)&&!(vc&268435455)||tr(Xt,qt)}function Kl(t,e){var n=ct;ct|=2;var i=uv();(Xt!==t||qt!==e)&&(wi=null,Gr(t,e));do try{D1();break}catch(r){cv(t,r)}while(!0);if(zf(),ct=n,Yl.current=i,Ot!==null)throw Error(se(261));return Xt=null,qt=0,Ht}function D1(){for(;Ot!==null;)dv(Ot)}function N1(){for(;Ot!==null&&!rx();)dv(Ot)}function dv(t){var e=pv(t.alternate,t,bn);t.memoizedProps=t.pendingProps,e===null?fv(t):Ot=e,Zf.current=null}function fv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=A1(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ht=6,Ot=null;return}}else if(n=T1(n,e,bn),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);Ht===0&&(Ht=5)}function Dr(t,e,n){var i=ht,r=Gn.transition;try{Gn.transition=null,ht=1,U1(t,e,n,i)}finally{Gn.transition=r,ht=i}return null}function U1(t,e,n,i){do Ha();while(rr!==null);if(ct&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(px(t,a),t===Xt&&(Ot=Xt=null,qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fs||(Fs=!0,mv(Ll,function(){return Ha(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Gn.transition,Gn.transition=null;var o=ht;ht=1;var s=ct;ct|=4,Zf.current=null,C1(t,n),ov(n,t),e1(ad),Nl=!!rd,ad=rd=null,t.current=n,b1(n),ax(),ct=s,ht=o,Gn.transition=a}else t.current=n;if(Fs&&(Fs=!1,rr=t,ql=r),a=t.pendingLanes,a===0&&(dr=null),lx(n.stateNode),En(t,Dt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if($l)throw $l=!1,t=Td,Td=null,t;return ql&1&&t.tag!==0&&Ha(),a=t.pendingLanes,a&1?t===Ad?Ho++:(Ho=0,Ad=t):Ho=0,Er(),null}function Ha(){if(rr!==null){var t=Xg(ql),e=Gn.transition,n=ht;try{if(Gn.transition=null,ht=16>t?16:t,rr===null)var i=!1;else{if(t=rr,rr=null,ql=0,ct&6)throw Error(se(331));var r=ct;for(ct|=4,Re=t.current;Re!==null;){var a=Re,o=a.child;if(Re.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(Re=c;Re!==null;){var u=Re;switch(u.tag){case 0:case 11:case 15:ko(8,u,a)}var d=u.child;if(d!==null)d.return=u,Re=d;else for(;Re!==null;){u=Re;var h=u.sibling,m=u.return;if(iv(u),u===c){Re=null;break}if(h!==null){h.return=m,Re=h;break}Re=m}}}var _=a.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}Re=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,Re=o;else e:for(;Re!==null;){if(a=Re,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ko(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,Re=f;break e}Re=a.return}}var g=t.current;for(Re=g;Re!==null;){o=Re;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Re=v;else e:for(o=g;Re!==null;){if(s=Re,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:gc(9,s)}}catch(P){Lt(s,s.return,P)}if(s===o){Re=null;break e}var E=s.sibling;if(E!==null){E.return=s.return,Re=E;break e}Re=s.return}}if(ct=r,Er(),fi&&typeof fi.onPostCommitFiberRoot=="function")try{fi.onPostCommitFiberRoot(lc,t)}catch{}i=!0}return i}finally{ht=n,Gn.transition=e}}return!1}function Dp(t,e,n){e=Ka(n,e),e=X0(t,e,1),t=ur(t,e,1),e=hn(),t!==null&&(us(t,1,e),En(t,e))}function Lt(t,e,n){if(t.tag===3)Dp(t,t,n);else for(;e!==null;){if(e.tag===3){Dp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(dr===null||!dr.has(i))){t=Ka(n,t),t=Y0(e,t,1),e=ur(e,t,1),t=hn(),e!==null&&(us(e,1,t),En(e,t));break}}e=e.return}}function I1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=hn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&(qt&n)===n&&(Ht===4||Ht===3&&(qt&130023424)===qt&&500>Dt()-Jf?Gr(t,0):Qf|=n),En(t,e)}function hv(t,e){e===0&&(t.mode&1?(e=As,As<<=1,!(As&130023424)&&(As=4194304)):e=1);var n=hn();t=Oi(t,e),t!==null&&(us(t,e,n),En(t,n))}function F1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),hv(t,n)}function O1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),hv(t,n)}var pv;pv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Sn.current)xn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xn=!1,w1(t,e,n);xn=!!(t.flags&131072)}else xn=!1,wt&&e.flags&1048576&&_0(e,Bl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;gl(t,e),t=e.pendingProps;var r=Xa(e,ln.current);Ba(e,n),r=Xf(null,e,i,t,r,n);var a=Yf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mn(i)?(a=!0,zl(e)):a=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Hf(e),r.updater=mc,e.stateNode=r,r._reactInternals=e,pd(e,i,t,n),e=vd(null,e,i,!0,a,n)):(e.tag=0,wt&&a&&Uf(e),fn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(gl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=k1(i),t=Kn(i,t),r){case 0:e=gd(null,e,i,t,n);break e;case 1:e=Mp(null,e,i,t,n);break e;case 11:e=yp(null,e,i,t,n);break e;case 14:e=Sp(null,e,i,Kn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),gd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Mp(t,e,i,r,n);case 3:e:{if(Z0(e),t===null)throw Error(se(387));i=e.pendingProps,a=e.memoizedState,r=a.element,w0(t,e),Gl(e,i,null,n);var o=e.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){r=Ka(Error(se(423)),e),e=Ep(t,e,i,n,r);break e}else if(i!==r){r=Ka(Error(se(424)),e),e=Ep(t,e,i,n,r);break e}else for(Ln=cr(e.stateNode.containerInfo.firstChild),Dn=e,wt=!0,ei=null,n=M0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ya(),i===r){e=zi(t,e,n);break e}fn(t,e,i,n)}e=e.child}return e;case 5:return T0(e),t===null&&dd(e),i=e.type,r=e.pendingProps,a=t!==null?t.memoizedProps:null,o=r.children,od(i,r)?o=null:a!==null&&od(i,a)&&(e.flags|=32),K0(t,e),fn(t,e,o,n),e.child;case 6:return t===null&&dd(e),null;case 13:return Q0(t,e,n);case 4:return Vf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=$a(e,null,i,n):fn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),yp(t,e,i,r,n);case 7:return fn(t,e,e.pendingProps,n),e.child;case 8:return fn(t,e,e.pendingProps.children,n),e.child;case 12:return fn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,a=e.memoizedProps,o=r.value,_t(Hl,i._currentValue),i._currentValue=o,a!==null)if(ri(a.value,o)){if(a.children===r.children&&!Sn.current){e=zi(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=Ui(-1,n&-n),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),fd(a.return,n,e),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===e.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(se(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),fd(o,n,e),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}fn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ba(e,n),r=Wn(r),i=i(r),e.flags|=1,fn(t,e,i,n),e.child;case 14:return i=e.type,r=Kn(i,e.pendingProps),r=Kn(i.type,r),Sp(t,e,i,r,n);case 15:return $0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),gl(t,e),e.tag=1,Mn(i)?(t=!0,zl(e)):t=!1,Ba(e,n),j0(e,i,r),pd(e,i,r,n),vd(null,e,i,!0,t,n);case 19:return J0(t,e,n);case 22:return q0(t,e,n)}throw Error(se(156,e.tag))};function mv(t,e){return Vg(t,e)}function z1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,e,n,i){return new z1(t,e,n,i)}function ih(t){return t=t.prototype,!(!t||!t.isReactComponent)}function k1(t){if(typeof t=="function")return ih(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Mf)return 11;if(t===Ef)return 14}return 2}function hr(t,e){var n=t.alternate;return n===null?(n=Hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xl(t,e,n,i,r,a){var o=2;if(i=t,typeof t=="function")ih(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ea:return Wr(n.children,r,a,e);case Sf:o=8,r|=8;break;case zu:return t=Hn(12,n,e,r|2),t.elementType=zu,t.lanes=a,t;case ku:return t=Hn(13,n,e,r),t.elementType=ku,t.lanes=a,t;case Bu:return t=Hn(19,n,e,r),t.elementType=Bu,t.lanes=a,t;case Tg:return _c(n,r,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Eg:o=10;break e;case wg:o=9;break e;case Mf:o=11;break e;case Ef:o=14;break e;case Qi:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Hn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=a,e}function Wr(t,e,n,i){return t=Hn(7,t,i,e),t.lanes=n,t}function _c(t,e,n,i){return t=Hn(22,t,i,e),t.elementType=Tg,t.lanes=n,t.stateNode={isHidden:!1},t}function nu(t,e,n){return t=Hn(6,t,null,e),t.lanes=n,t}function iu(t,e,n){return e=Hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function B1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oc(0),this.expirationTimes=Oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function rh(t,e,n,i,r,a,o,s,l){return t=new B1(t,e,n,s,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=Hn(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hf(a),t}function H1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ma,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function gv(t){if(!t)return _r;t=t._reactInternals;e:{if(ta(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(Mn(n))return g0(t,n,e)}return e}function vv(t,e,n,i,r,a,o,s,l){return t=rh(n,i,!0,t,r,a,o,s,l),t.context=gv(null),n=t.current,i=hn(),r=fr(n),a=Ui(i,r),a.callback=e??null,ur(n,a,r),t.current.lanes=r,us(t,r,i),En(t,i),t}function xc(t,e,n,i){var r=e.current,a=hn(),o=fr(r);return n=gv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ui(a,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ur(r,e,o),t!==null&&(ii(t,r,o,a),hl(t,r,o)),o}function Zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Np(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ah(t,e){Np(t,e),(t=t.alternate)&&Np(t,e)}function V1(){return null}var _v=typeof reportError=="function"?reportError:function(t){console.error(t)};function oh(t){this._internalRoot=t}yc.prototype.render=oh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));xc(t,e,null,null)};yc.prototype.unmount=oh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zr(function(){xc(null,t,null,null)}),e[Fi]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=qg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<er.length&&e!==0&&e<er[n].priority;n++);er.splice(n,0,t),n===0&&Zg(t)}};function sh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Up(){}function G1(t,e,n,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var c=Zl(o);a.call(c)}}var o=vv(e,i,t,0,null,!1,!1,"",Up);return t._reactRootContainer=o,t[Fi]=o.current,Ko(t.nodeType===8?t.parentNode:t),Zr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var s=i;i=function(){var c=Zl(l);s.call(c)}}var l=rh(t,0,!1,null,null,!1,!1,"",Up);return t._reactRootContainer=l,t[Fi]=l.current,Ko(t.nodeType===8?t.parentNode:t),Zr(function(){xc(e,l,n,i)}),l}function Mc(t,e,n,i,r){var a=n._reactRootContainer;if(a){var o=a;if(typeof r=="function"){var s=r;r=function(){var l=Zl(o);s.call(l)}}xc(e,o,t,r)}else o=G1(n,e,t,r,i);return Zl(o)}Yg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Co(e.pendingLanes);n!==0&&(Af(e,n|1),En(e,Dt()),!(ct&6)&&(Za=Dt()+500,Er()))}break;case 13:Zr(function(){var i=Oi(t,1);if(i!==null){var r=hn();ii(i,t,1,r)}}),ah(t,1)}};Rf=function(t){if(t.tag===13){var e=Oi(t,134217728);if(e!==null){var n=hn();ii(e,t,134217728,n)}ah(t,134217728)}};$g=function(t){if(t.tag===13){var e=fr(t),n=Oi(t,e);if(n!==null){var i=hn();ii(n,t,e,i)}ah(t,e)}};qg=function(){return ht};Kg=function(t,e){var n=ht;try{return ht=t,e()}finally{ht=n}};Ku=function(t,e,n){switch(e){case"input":if(Gu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=fc(i);if(!r)throw Error(se(90));Rg(i),Gu(i,r)}}}break;case"textarea":bg(t,n);break;case"select":e=n.value,e!=null&&Fa(t,!!n.multiple,e,!1)}};Fg=eh;Og=Zr;var W1={usingClientEntryPoint:!1,Events:[fs,Ra,fc,Ug,Ig,eh]},vo={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j1={bundleType:vo.bundleType,version:vo.version,rendererPackageName:vo.rendererPackageName,rendererConfig:vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Bg(t),t===null?null:t.stateNode},findFiberByHostInstance:vo.findFiberByHostInstance||V1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Os=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Os.isDisabled&&Os.supportsFiber)try{lc=Os.inject(j1),fi=Os}catch{}}Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W1;Un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sh(e))throw Error(se(200));return H1(t,e,null,n)};Un.createRoot=function(t,e){if(!sh(t))throw Error(se(299));var n=!1,i="",r=_v;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=rh(t,1,!1,null,null,n,!1,i,r),t[Fi]=e.current,Ko(t.nodeType===8?t.parentNode:t),new oh(e)};Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=Bg(e),t=t===null?null:t.stateNode,t};Un.flushSync=function(t){return Zr(t)};Un.hydrate=function(t,e,n){if(!Sc(e))throw Error(se(200));return Mc(null,t,e,!0,n)};Un.hydrateRoot=function(t,e,n){if(!sh(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,a="",o=_v;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=vv(e,null,t,1,n??null,r,!1,a,o),t[Fi]=e.current,Ko(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new yc(e)};Un.render=function(t,e,n){if(!Sc(e))throw Error(se(200));return Mc(null,t,e,!1,n)};Un.unmountComponentAtNode=function(t){if(!Sc(t))throw Error(se(40));return t._reactRootContainer?(Zr(function(){Mc(null,null,t,!1,function(){t._reactRootContainer=null,t[Fi]=null})}),!0):!1};Un.unstable_batchedUpdates=eh;Un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Sc(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Mc(t,e,n,!1,i)};Un.version="18.3.1-next-f1338f8080-20240426";function xv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xv)}catch(t){console.error(t)}}xv(),xg.exports=Un;var lh=xg.exports;const X1=sg(lh),Y1=og({__proto__:null,default:X1},[lh]);var Ip=lh;Fu.createRoot=Ip.createRoot,Fu.hydrateRoot=Ip.hydrateRoot;var yv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Fp=Ni.createContext&&Ni.createContext(yv),$1=["attr","size","title"];function q1(t,e){if(t==null)return{};var n=K1(t,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function K1(t,e){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function Ql(){return Ql=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ql.apply(this,arguments)}function Op(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Jl(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Op(Object(n),!0).forEach(function(i){Z1(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Op(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Z1(t,e,n){return e=Q1(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Q1(t){var e=J1(t,"string");return typeof e=="symbol"?e:e+""}function J1(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Sv(t){return t&&t.map((e,n)=>Ni.createElement(e.tag,Jl({key:n},e.attr),Sv(e.child)))}function Zt(t){return e=>Ni.createElement(ey,Ql({attr:Jl({},t.attr)},e),Sv(t.child))}function ey(t){var e=n=>{var{attr:i,size:r,title:a}=t,o=q1(t,$1),s=r||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Ni.createElement("svg",Ql({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,o,{className:l,style:Jl(Jl({color:t.color||n.color},n.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&Ni.createElement("title",null,a),t.children)};return Fp!==void 0?Ni.createElement(Fp.Consumer,null,n=>e(n)):e(yv)}function ty(t){return Zt({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"},child:[]}]})(t)}const ny="/assets/logo-g9SlLr5L.png";function iy(t){return Zt({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"},child:[]}]})(t)}function ry(){let t=null,e=null,n=null;ve.useEffect(()=>{t=document.body.querySelector("#skills-section"),e=document.body.querySelector("#experience-section"),n=document.body.querySelector("#contact-section")},[]);const[i,r]=ve.useState(!1),a=ve.useRef();return ve.useEffect(()=>{i===!0?a.current.style.display="flex":a.current.style.display="none"},[i]),X.jsxs("div",{children:[X.jsxs("div",{className:" flex justify-between items-center px-4 my-5 w-full xl:flex xl:justify-between xl:my-0 xl:px-10 xl:py-3 xl:mt-3 2xl:mt-10",children:[X.jsxs("div",{className:" w-[80%] flex py-3 gap-2 justify-start items-center xl:text-center xl:flex  xl:gap-3 xl:w-1/3 xl:justify-center xl:py-0 ",children:[X.jsx("img",{src:ny,alt:"nothing",className:"w-10 xl:w-10"}),X.jsx("h3",{className:"font-semibold text-xl 2xl:text-4xl",children:"Devloper | Faris"})]}),X.jsx("div",{className:"hidden lg:font-normal lg:w-5/12 lg:flex lg:text-gray-500 ",children:X.jsxs("ul",{className:"lg:flex lg:justify-evenly lg:text-center lg:items-center lg:w-full",children:[X.jsx("li",{className:"lg:hover:text-white lg:ease-in lg:duration-100 cursor-pointer 2xl:text-4xl",onClick:()=>{e==null||e.scrollIntoView({behavior:"smooth"})},children:"Experience"}),X.jsx("li",{className:"lg:hover:text-white lg:ease-in lg:duration-100 cursor-pointer 2xl:text-4xl",onClick:()=>{t==null||t.scrollIntoView({behavior:"smooth"})},children:"Skills"}),X.jsx("li",{className:"hover:text-white lg:ease-in lg:duration-100 cursor-pointer 2xl:text-4xl",onClick:()=>{n==null||n.scrollIntoView({behavior:"smooth"})},children:"Contact"})]})}),X.jsx("div",{className:"lg:hidden",children:X.jsx(ty,{size:25,onClick:()=>{console.log("clicked"),r(!0)}})})]}),X.jsxs("div",{ref:a,className:"absolute-dropleft hidden bg-transparent text-white font-bold  flex-col pt-10 items-center justify-top gap-5 absolute w-60 h-full  top-0 right-0 xl:hidden",children:[X.jsx(iy,{size:35,className:"absolute top-0 right-0 ",onClick:()=>r(!1)}),X.jsx("h2",{className:"bg-transparent text-2xl",children:"Home"}),X.jsx("h2",{className:"bg-transparent text-2xl",children:"Skills"}),X.jsx("h2",{className:"bg-transparent text-2xl",children:"Experience"}),X.jsx("h2",{className:"bg-transparent text-2xl",children:"Contact me"})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ch="166",ay=0,zp=1,oy=2,Mv=1,sy=2,Ei=3,xr=0,wn=1,Ai=2,pr=0,Va=1,kp=2,Bp=3,Hp=4,ly=5,Ir=100,cy=101,uy=102,dy=103,fy=104,hy=200,py=201,my=202,gy=203,bd=204,Pd=205,vy=206,_y=207,xy=208,yy=209,Sy=210,My=211,Ey=212,wy=213,Ty=214,Ay=0,Ry=1,Cy=2,ec=3,by=4,Py=5,Ly=6,Dy=7,Ev=0,Ny=1,Uy=2,mr=0,Iy=1,Fy=2,Oy=3,wv=4,zy=5,ky=6,By=7,Tv=300,Qa=301,Ja=302,Ld=303,Dd=304,Ec=306,as=1e3,Pi=1001,Nd=1002,yn=1003,Hy=1004,zs=1005,an=1006,ru=1007,ar=1008,ki=1009,Av=1010,Rv=1011,os=1012,uh=1013,Qr=1014,Vn=1015,Li=1016,dh=1017,fh=1018,eo=1020,Cv=35902,bv=1021,Pv=1022,ti=1023,Lv=1024,Dv=1025,Ga=1026,to=1027,Nv=1028,hh=1029,Uv=1030,ph=1031,mh=1033,yl=33776,Sl=33777,Ml=33778,El=33779,Ud=35840,Id=35841,Fd=35842,Od=35843,zd=36196,kd=37492,Bd=37496,Hd=37808,Vd=37809,Gd=37810,Wd=37811,jd=37812,Xd=37813,Yd=37814,$d=37815,qd=37816,Kd=37817,Zd=37818,Qd=37819,Jd=37820,ef=37821,wl=36492,tf=36494,nf=36495,Iv=36283,rf=36284,af=36285,of=36286,Vy=3200,Gy=3201,Fv=0,Wy=1,nr="",li="srgb",Hi="srgb-linear",gh="display-p3",wc="display-p3-linear",tc="linear",St="srgb",nc="rec709",ic="p3",ra=7680,Vp=519,jy=512,Xy=513,Yy=514,Ov=515,$y=516,qy=517,Ky=518,Zy=519,Gp=35044,Wp="300 es",Di=2e3,rc=2001;class so{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],au=Math.PI/180,sf=180/Math.PI;function ps(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[t&255]+en[t>>8&255]+en[t>>16&255]+en[t>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[n&63|128]+en[n>>8&255]+"-"+en[n>>16&255]+en[n>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function Qy(t,e){return(t%e+e)%e}function ou(t,e,n){return(1-n)*t+n*e}function _o(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,n=0){ot.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,n,i,r,a,o,s,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,o,s,l,c)}set(e,n,i,r,a,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=n,u[4]=a,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],m=i[5],_=i[8],x=r[0],p=r[3],f=r[6],g=r[1],v=r[4],E=r[7],P=r[2],S=r[5],A=r[8];return a[0]=o*x+s*g+l*P,a[3]=o*p+s*v+l*S,a[6]=o*f+s*E+l*A,a[1]=c*x+u*g+d*P,a[4]=c*p+u*v+d*S,a[7]=c*f+u*E+d*A,a[2]=h*x+m*g+_*P,a[5]=h*p+m*v+_*S,a[8]=h*f+m*E+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*s*c-i*a*u+i*s*l+r*a*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],d=u*o-s*c,h=s*l-u*a,m=c*a-o*l,_=n*d+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(s*i-r*o)*x,e[3]=h*x,e[4]=(u*n-r*l)*x,e[5]=(r*a-s*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*a)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+n,0,0,1),this}scale(e,n){return this.premultiply(su.makeScale(e,n)),this}rotate(e){return this.premultiply(su.makeRotation(-e)),this}translate(e,n){return this.premultiply(su.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const su=new Je;function zv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ac(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Jy(){const t=ac("canvas");return t.style.display="block",t}const jp={};function kv(t){t in jp||(jp[t]=!0,console.warn(t))}function eS(t,e,n){return new Promise(function(i,r){function a(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}const Xp=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yp=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ks={[Hi]:{transfer:tc,primaries:nc,toReference:t=>t,fromReference:t=>t},[li]:{transfer:St,primaries:nc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[wc]:{transfer:tc,primaries:ic,toReference:t=>t.applyMatrix3(Yp),fromReference:t=>t.applyMatrix3(Xp)},[gh]:{transfer:St,primaries:ic,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Yp),fromReference:t=>t.applyMatrix3(Xp).convertLinearToSRGB()}},tS=new Set([Hi,wc]),ft={enabled:!0,_workingColorSpace:Hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!tS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ks[e].toReference,r=ks[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ks[t].primaries},getTransfer:function(t){return t===nr?tc:ks[t].transfer}};function Wa(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function lu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let aa;class nS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{aa===void 0&&(aa=ac("canvas")),aa.width=e.width,aa.height=e.height;const i=aa.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=aa}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ac("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=Wa(a[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Wa(n[i]/255)*255):n[i]=Wa(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iS=0;class Bv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=ps(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(cu(r[o].image)):a.push(cu(r[o]))}else a=cu(r);i.url=a}return n||(e.images[this.uuid]=i),i}}function cu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?nS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rS=0;class on extends so{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=Pi,r=Pi,a=an,o=ar,s=ti,l=ki,c=on.DEFAULT_ANISOTROPY,u=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=ps(),this.name="",this.source=new Bv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case as:e.x=e.x-Math.floor(e.x);break;case Pi:e.x=e.x<0?0:1;break;case Nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case as:e.y=e.y-Math.floor(e.y);break;case Pi:e.y=e.y<0?0:1;break;case Nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Tv;on.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,n=0,i=0,r=1){Bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,a;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],_=l[9],x=l[2],p=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,E=(m+1)/2,P=(f+1)/2,S=(u+h)/4,A=(d+x)/4,R=(_+p)/4;return v>E&&v>P?v<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(v),r=S/i,a=A/i):E>P?E<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(E),i=S/r,a=R/r):P<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(P),i=A/a,r=R/a),this.set(i,r,a,n),this}let g=Math.sqrt((p-_)*(p-_)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(g)<.001&&(g=1),this.x=(p-_)/g,this.y=(d-x)/g,this.z=(h-u)/g,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aS extends so{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Bt(0,0,e,n),this.scissorTest=!1,this.viewport=new Bt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new on(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let s=0;s<o;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Bv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends aS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Hv extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oS extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ms{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,a,o,s){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=a[o+0],m=a[o+1],_=a[o+2],x=a[o+3];if(s===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(s===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(d!==x||l!==h||c!==m||u!==_){let p=1-s;const f=l*h+c*m+u*_+d*x,g=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const P=Math.sqrt(v),S=Math.atan2(P,f*g);p=Math.sin(p*S)/P,s=Math.sin(s*S)/P}const E=s*g;if(l=l*p+h*E,c=c*p+m*E,u=u*p+_*E,d=d*p+x*E,p===1-s){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,a,o){const s=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=a[o],h=a[o+1],m=a[o+2],_=a[o+3];return e[n]=s*_+u*d+l*m-c*h,e[n+1]=l*_+u*h+c*d-s*m,e[n+2]=c*_+u*m+s*h-l*d,e[n+3]=u*_-s*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),u=s(r/2),d=s(a/2),h=l(i/2),m=l(r/2),_=l(a/2);switch(o){case"XYZ":this._x=h*u*d+c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d-h*m*_;break;case"YXZ":this._x=h*u*d+c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d+h*m*_;break;case"ZXY":this._x=h*u*d-c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d-h*m*_;break;case"ZYX":this._x=h*u*d-c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d+h*m*_;break;case"YZX":this._x=h*u*d+c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d-h*m*_;break;case"XZY":this._x=h*u*d-c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],a=n[8],o=n[1],s=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+s+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(a-c)*m,this._z=(o-r)*m}else if(i>s&&i>d){const m=2*Math.sqrt(1+i-s-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(a+c)/m}else if(s>d){const m=2*Math.sqrt(1+s-i-d);this._w=(a-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-s);this._w=(o-r)/m,this._x=(a+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,a=e._z,o=e._w,s=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*s+r*c-a*l,this._y=r*u+o*l+a*s-i*c,this._z=a*u+o*c+i*l-r*s,this._w=o*u-i*s-r*l-a*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*a+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=a*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(n),a*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($p.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($p.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*r,this.y=a[1]*n+a[4]*i+a[7]*r,this.z=a[2]*n+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*n+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*n+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*n+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*r-s*i),u=2*(s*n-a*r),d=2*(a*i-o*n);return this.x=n+l*c+o*d-s*u,this.y=i+l*u+s*c-a*d,this.z=r+l*d+a*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r,this.y=a[1]*n+a[5]*i+a[9]*r,this.z=a[2]*n+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,a=e.z,o=n.x,s=n.y,l=n.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uu.copy(this).projectOnVector(e),this.sub(uu)}reflect(e){return this.sub(uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uu=new Y,$p=new ms;class gs{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(n===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(a,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Bs.copy(i.boundingBox)),Bs.applyMatrix4(e.matrixWorld),this.union(Bs)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xo),Hs.subVectors(this.max,xo),oa.subVectors(e.a,xo),sa.subVectors(e.b,xo),la.subVectors(e.c,xo),ji.subVectors(sa,oa),Xi.subVectors(la,sa),Tr.subVectors(oa,la);let n=[0,-ji.z,ji.y,0,-Xi.z,Xi.y,0,-Tr.z,Tr.y,ji.z,0,-ji.x,Xi.z,0,-Xi.x,Tr.z,0,-Tr.x,-ji.y,ji.x,0,-Xi.y,Xi.x,0,-Tr.y,Tr.x,0];return!du(n,oa,sa,la,Hs)||(n=[1,0,0,0,1,0,0,0,1],!du(n,oa,sa,la,Hs))?!1:(Vs.crossVectors(ji,Xi),n=[Vs.x,Vs.y,Vs.z],du(n,oa,sa,la,Hs))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Yn=new Y,Bs=new gs,oa=new Y,sa=new Y,la=new Y,ji=new Y,Xi=new Y,Tr=new Y,xo=new Y,Hs=new Y,Vs=new Y,Ar=new Y;function du(t,e,n,i,r){for(let a=0,o=t.length-3;a<=o;a+=3){Ar.fromArray(t,a);const s=r.x*Math.abs(Ar.x)+r.y*Math.abs(Ar.y)+r.z*Math.abs(Ar.z),l=e.dot(Ar),c=n.dot(Ar),u=i.dot(Ar);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const sS=new gs,yo=new Y,fu=new Y;class vh{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):sS.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const n=yo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(yo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(fu)),this.expandByPoint(yo.copy(e.center).sub(fu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new Y,hu=new Y,Gs=new Y,Yi=new Y,pu=new Y,Ws=new Y,mu=new Y;class lS{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=_i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,n),_i.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){hu.copy(e).add(n).multiplyScalar(.5),Gs.copy(n).sub(e).normalize(),Yi.copy(this.origin).sub(hu);const a=e.distanceTo(n)*.5,o=-this.direction.dot(Gs),s=Yi.dot(this.direction),l=-Yi.dot(Gs),c=Yi.lengthSq(),u=Math.abs(1-o*o);let d,h,m,_;if(u>0)if(d=o*l-s,h=o*s-l,_=a*u,d>=0)if(h>=-_)if(h<=_){const x=1/u;d*=x,h*=x,m=d*(d+o*h+2*s)+h*(o*d+h+2*l)+c}else h=a,d=Math.max(0,-(o*h+s)),m=-d*d+h*(h+2*l)+c;else h=-a,d=Math.max(0,-(o*h+s)),m=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*a+s)),h=d>0?-a:Math.min(Math.max(-a,-l),a),m=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-a,-l),a),m=h*(h+2*l)+c):(d=Math.max(0,-(o*a+s)),h=d>0?a:Math.min(Math.max(-a,-l),a),m=-d*d+h*(h+2*l)+c);else h=o>0?-a:a,d=Math.max(0,-(o*h+s)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(hu).addScaledVector(Gs,h),m}intersectSphere(e,n){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),r=_i.dot(_i)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,n):this.at(s,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,a,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(a=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(a=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),d>=0?(s=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(s=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,n,i,r,a){pu.subVectors(n,e),Ws.subVectors(i,e),mu.crossVectors(pu,Ws);let o=this.direction.dot(mu),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Yi.subVectors(this.origin,e);const l=s*this.direction.dot(Ws.crossVectors(Yi,Ws));if(l<0)return null;const c=s*this.direction.dot(pu.cross(Yi));if(c<0||l+c>o)return null;const u=-s*Yi.dot(mu);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,n,i,r,a,o,s,l,c,u,d,h,m,_,x,p){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,o,s,l,c,u,d,h,m,_,x,p)}set(e,n,i,r,a,o,s,l,c,u,d,h,m,_,x,p){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=a,f[5]=o,f[9]=s,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=_,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ca.setFromMatrixColumn(e,0).length(),a=1/ca.setFromMatrixColumn(e,1).length(),o=1/ca.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const h=o*u,m=o*d,_=s*u,x=s*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=m+_*c,n[5]=h-x*c,n[9]=-s*l,n[2]=x-h*c,n[6]=_+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,_=c*u,x=c*d;n[0]=h+x*s,n[4]=_*s-m,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-s,n[2]=m*s-_,n[6]=x+h*s,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,_=c*u,x=c*d;n[0]=h-x*s,n[4]=-o*d,n[8]=_+m*s,n[1]=m+_*s,n[5]=o*u,n[9]=x-h*s,n[2]=-o*c,n[6]=s,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*d,_=s*u,x=s*d;n[0]=l*u,n[4]=_*c-m,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=m*c-_,n[2]=-c,n[6]=s*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,_=s*l,x=s*c;n[0]=l*u,n[4]=x-h*d,n[8]=_*d+m,n[1]=d,n[5]=o*u,n[9]=-s*u,n[2]=-c*u,n[6]=m*d+_,n[10]=h-x*d}else if(e.order==="XZY"){const h=o*l,m=o*c,_=s*l,x=s*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+x,n[5]=o*u,n[9]=m*d-_,n[2]=_*d-m,n[6]=s*u,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cS,e,uS)}lookAt(e,n,i){const r=this.elements;return Rn.subVectors(e,n),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),$i.crossVectors(i,Rn),$i.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),$i.crossVectors(i,Rn)),$i.normalize(),js.crossVectors(Rn,$i),r[0]=$i.x,r[4]=js.x,r[8]=Rn.x,r[1]=$i.y,r[5]=js.y,r[9]=Rn.y,r[2]=$i.z,r[6]=js.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],m=i[13],_=i[2],x=i[6],p=i[10],f=i[14],g=i[3],v=i[7],E=i[11],P=i[15],S=r[0],A=r[4],R=r[8],M=r[12],y=r[1],C=r[5],V=r[9],B=r[13],H=r[2],$=r[6],G=r[10],K=r[14],U=r[3],Q=r[7],J=r[11],le=r[15];return a[0]=o*S+s*y+l*H+c*U,a[4]=o*A+s*C+l*$+c*Q,a[8]=o*R+s*V+l*G+c*J,a[12]=o*M+s*B+l*K+c*le,a[1]=u*S+d*y+h*H+m*U,a[5]=u*A+d*C+h*$+m*Q,a[9]=u*R+d*V+h*G+m*J,a[13]=u*M+d*B+h*K+m*le,a[2]=_*S+x*y+p*H+f*U,a[6]=_*A+x*C+p*$+f*Q,a[10]=_*R+x*V+p*G+f*J,a[14]=_*M+x*B+p*K+f*le,a[3]=g*S+v*y+E*H+P*U,a[7]=g*A+v*C+E*$+P*Q,a[11]=g*R+v*V+E*G+P*J,a[15]=g*M+v*B+E*K+P*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],_=e[3],x=e[7],p=e[11],f=e[15];return _*(+a*l*d-r*c*d-a*s*h+i*c*h+r*s*m-i*l*m)+x*(+n*l*m-n*c*h+a*o*h-r*o*m+r*c*u-a*l*u)+p*(+n*c*d-n*s*m-a*o*d+i*o*m+a*s*u-i*c*u)+f*(-r*s*u-n*l*d+n*s*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],_=e[12],x=e[13],p=e[14],f=e[15],g=d*p*c-x*h*c+x*l*m-s*p*m-d*l*f+s*h*f,v=_*h*c-u*p*c-_*l*m+o*p*m+u*l*f-o*h*f,E=u*x*c-_*d*c+_*s*m-o*x*m-u*s*f+o*d*f,P=_*d*l-u*x*l-_*s*h+o*x*h+u*s*p-o*d*p,S=n*g+i*v+r*E+a*P;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/S;return e[0]=g*A,e[1]=(x*h*a-d*p*a-x*r*m+i*p*m+d*r*f-i*h*f)*A,e[2]=(s*p*a-x*l*a+x*r*c-i*p*c-s*r*f+i*l*f)*A,e[3]=(d*l*a-s*h*a-d*r*c+i*h*c+s*r*m-i*l*m)*A,e[4]=v*A,e[5]=(u*p*a-_*h*a+_*r*m-n*p*m-u*r*f+n*h*f)*A,e[6]=(_*l*a-o*p*a-_*r*c+n*p*c+o*r*f-n*l*f)*A,e[7]=(o*h*a-u*l*a+u*r*c-n*h*c-o*r*m+n*l*m)*A,e[8]=E*A,e[9]=(_*d*a-u*x*a-_*i*m+n*x*m+u*i*f-n*d*f)*A,e[10]=(o*x*a-_*s*a+_*i*c-n*x*c-o*i*f+n*s*f)*A,e[11]=(u*s*a-o*d*a-u*i*c+n*d*c+o*i*m-n*s*m)*A,e[12]=P*A,e[13]=(u*x*r-_*d*r+_*i*h-n*x*h-u*i*p+n*d*p)*A,e[14]=(_*s*r-o*x*r-_*i*l+n*x*l+o*i*p-n*s*p)*A,e[15]=(o*d*r-u*s*r+u*i*l-n*d*l-o*i*h+n*s*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,a=e.z;return n[0]*=i,n[4]*=r,n[8]*=a,n[1]*=i,n[5]*=r,n[9]*=a,n[2]*=i,n[6]*=r,n[10]*=a,n[3]*=i,n[7]*=r,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,u=a*s;return this.set(c*o+i,c*s-r*l,c*l+r*s,0,c*s+r*l,u*s+i,u*l-r*o,0,c*l-r*s,u*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,a=n._x,o=n._y,s=n._z,l=n._w,c=a+a,u=o+o,d=s+s,h=a*c,m=a*u,_=a*d,x=o*u,p=o*d,f=s*d,g=l*c,v=l*u,E=l*d,P=i.x,S=i.y,A=i.z;return r[0]=(1-(x+f))*P,r[1]=(m+E)*P,r[2]=(_-v)*P,r[3]=0,r[4]=(m-E)*S,r[5]=(1-(h+f))*S,r[6]=(p+g)*S,r[7]=0,r[8]=(_+v)*A,r[9]=(p-g)*A,r[10]=(1-(h+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let a=ca.set(r[0],r[1],r[2]).length();const o=ca.set(r[4],r[5],r[6]).length(),s=ca.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],$n.copy(this);const c=1/a,u=1/o,d=1/s;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=d,$n.elements[9]*=d,$n.elements[10]*=d,n.setFromRotationMatrix($n),i.x=a,i.y=o,i.z=s,this}makePerspective(e,n,i,r,a,o,s=Di){const l=this.elements,c=2*a/(n-e),u=2*a/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(s===Di)m=-(o+a)/(o-a),_=-2*o*a/(o-a);else if(s===rc)m=-o/(o-a),_=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,a,o,s=Di){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-a),h=(n+e)*c,m=(i+r)*u;let _,x;if(s===Di)_=(o+a)*d,x=-2*d;else if(s===rc)_=a*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ca=new Y,$n=new Nt,cS=new Y(0,0,0),uS=new Y(1,1,1),$i=new Y,js=new Y,Rn=new Y,qp=new Nt,Kp=new ms;class mi{constructor(e=0,n=0,i=0,r=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(rn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-rn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Kp.setFromEuler(this),this.setFromQuaternion(Kp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class Vv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dS=0;const Zp=new Y,ua=new ms,xi=new Nt,Xs=new Y,So=new Y,fS=new Y,hS=new ms,Qp=new Y(1,0,0),Jp=new Y(0,1,0),em=new Y(0,0,1),tm={type:"added"},pS={type:"removed"},da={type:"childadded",child:null},gu={type:"childremoved",child:null};class sn extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new Y,n=new mi,i=new ms,r=new Y(1,1,1);function a(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new Je}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ua.setFromAxisAngle(e,n),this.quaternion.multiply(ua),this}rotateOnWorldAxis(e,n){return ua.setFromAxisAngle(e,n),this.quaternion.premultiply(ua),this}rotateX(e){return this.rotateOnAxis(Qp,e)}rotateY(e){return this.rotateOnAxis(Jp,e)}rotateZ(e){return this.rotateOnAxis(em,e)}translateOnAxis(e,n){return Zp.copy(e).applyQuaternion(this.quaternion),this.position.add(Zp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qp,e)}translateY(e){return this.translateOnAxis(Jp,e)}translateZ(e){return this.translateOnAxis(em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Xs.copy(e):Xs.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(So,Xs,this.up):xi.lookAt(Xs,So,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),ua.setFromRotationMatrix(xi),this.quaternion.premultiply(ua.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tm),da.child=e,this.dispatchEvent(da),da.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(pS),gu.child=e,this.dispatchEvent(gu),gu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tm),da.child=e,this.dispatchEvent(da),da.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,e,fS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,hS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(n){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new Y(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new Y,yi=new Y,vu=new Y,Si=new Y,fa=new Y,ha=new Y,nm=new Y,_u=new Y,xu=new Y,yu=new Y;class di{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),qn.subVectors(e,n),r.cross(qn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,n,i,r,a){qn.subVectors(r,n),yi.subVectors(i,n),vu.subVectors(e,n);const o=qn.dot(qn),s=qn.dot(yi),l=qn.dot(vu),c=yi.dot(yi),u=yi.dot(vu),d=o*c-s*s;if(d===0)return a.set(0,0,0),null;const h=1/d,m=(c*l-s*u)*h,_=(o*u-s*l)*h;return a.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,n,i,r,a,o,s,l){return this.getBarycoord(e,n,i,r,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(s,Si.z),l)}static isFrontFacing(e,n,i,r){return qn.subVectors(i,n),yi.subVectors(e,n),qn.cross(yi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),qn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return di.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,a){return di.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,a=this.c;let o,s;fa.subVectors(r,i),ha.subVectors(a,i),_u.subVectors(e,i);const l=fa.dot(_u),c=ha.dot(_u);if(l<=0&&c<=0)return n.copy(i);xu.subVectors(e,r);const u=fa.dot(xu),d=ha.dot(xu);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(fa,o);yu.subVectors(e,a);const m=fa.dot(yu),_=ha.dot(yu);if(_>=0&&m<=_)return n.copy(a);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return s=c/(c-_),n.copy(i).addScaledVector(ha,s);const p=u*_-m*d;if(p<=0&&d-u>=0&&m-_>=0)return nm.subVectors(a,r),s=(d-u)/(d-u+(m-_)),n.copy(r).addScaledVector(nm,s);const f=1/(p+x+h);return o=x*f,s=h*f,n.copy(i).addScaledVector(fa,o).addScaledVector(ha,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function Su(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class st{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ft.workingColorSpace){return this.r=e,this.g=n,this.b=i,ft.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ft.workingColorSpace){if(e=Qy(e,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,o=2*i-a;this.r=Su(o,a,e+1/3),this.g=Su(o,a,e),this.b=Su(o,a,e-1/3)}return ft.toWorkingColorSpace(this,r),this}setStyle(e,n=li){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=li){const i=Gv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wa(e.r),this.g=Wa(e.g),this.b=Wa(e.b),this}copyLinearToSRGB(e){return this.r=lu(e.r),this.g=lu(e.g),this.b=lu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return ft.fromWorkingColorSpace(tn.copy(this),e),Math.round(rn(tn.r*255,0,255))*65536+Math.round(rn(tn.g*255,0,255))*256+Math.round(rn(tn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ft.workingColorSpace){ft.fromWorkingColorSpace(tn.copy(this),n);const i=tn.r,r=tn.g,a=tn.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const d=o-s;switch(c=u<=.5?d/(o+s):d/(2-o-s),o){case i:l=(r-a)/d+(r<a?6:0);break;case r:l=(a-i)/d+2;break;case a:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ft.workingColorSpace){return ft.fromWorkingColorSpace(tn.copy(this),n),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=li){ft.fromWorkingColorSpace(tn.copy(this),e);const n=tn.r,i=tn.g,r=tn.b;return e!==li?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+n,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(qi),e.getHSL(Ys);const i=ou(qi.h,Ys.h,n),r=ou(qi.s,Ys.s,n),a=ou(qi.l,Ys.l,n);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*n+a[3]*i+a[6]*r,this.g=a[1]*n+a[4]*i+a[7]*r,this.b=a[2]*n+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new st;st.NAMES=Gv;let mS=0;class vs extends so{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=Va,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bd,this.blendDst=Pd,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=ec,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ra,this.stencilZFail=ra,this.stencilZPass=ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Va&&(i.blending=this.blending),this.side!==xr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bd&&(i.blendSrc=this.blendSrc),this.blendDst!==Pd&&(i.blendDst=this.blendDst),this.blendEquation!==Ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ec&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ra&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ra&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ra&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(n){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Wv extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Ev,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ri=gS();function gS(){const t=new ArrayBuffer(4),e=new Float32Array(t),n=new Uint32Array(t),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}const a=new Uint32Array(2048),o=new Uint32Array(64),s=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,a[l]=c|u}for(let l=1024;l<2048;++l)a[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(s[l]=1024);return{floatView:e,uint32View:n,baseTable:i,shiftTable:r,mantissaTable:a,exponentTable:o,offsetTable:s}}function vS(t){Math.abs(t)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),t=rn(t,-65504,65504),Ri.floatView[0]=t;const e=Ri.uint32View[0],n=e>>23&511;return Ri.baseTable[n]+((e&8388607)>>Ri.shiftTable[n])}function _S(t){const e=t>>10;return Ri.uint32View[0]=Ri.mantissaTable[Ri.offsetTable[e]+(t&1023)]+Ri.exponentTable[e],Ri.floatView[0]}const $s={toHalfFloat:vS,fromHalfFloat:_S},It=new Y,qs=new ot;class pi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Gp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return kv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)qs.fromBufferAttribute(this,n),qs.applyMatrix3(e),this.setXY(n,qs.x,qs.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix3(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix4(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyNormalMatrix(e),this.setXYZ(n,It.x,It.y,It.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.transformDirection(e),this.setXYZ(n,It.x,It.y,It.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=_o(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=_o(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=_o(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=_o(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=_o(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,a){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array),a=vn(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gp&&(e.usage=this.usage),e}}class jv extends pi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Xv extends pi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class jr extends pi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let xS=0;const On=new Nt,Mu=new sn,pa=new Y,Cn=new gs,Mo=new gs,Wt=new Y;class na extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zv(e)?Xv:jv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Je().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,n,i){return On.makeTranslation(e,n,i),this.applyMatrix4(On),this}scale(e,n,i){return On.makeScale(e,n,i),this.applyMatrix4(On),this}lookAt(e){return Mu.lookAt(e),Mu.updateMatrix(),this.applyMatrix4(Mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pa).negate(),this.translate(pa.x,pa.y,pa.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new jr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const a=n[i];Cn.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const s=n[a];Mo.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(Cn.min,Mo.min),Cn.expandByPoint(Wt),Wt.addVectors(Cn.max,Mo.max),Cn.expandByPoint(Wt)):(Cn.expandByPoint(Mo.min),Cn.expandByPoint(Mo.max))}Cn.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)Wt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Wt));if(n)for(let a=0,o=n.length;a<o;a++){const s=n[a],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)Wt.fromBufferAttribute(s,c),l&&(pa.fromBufferAttribute(e,c),Wt.add(pa)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),s=[],l=[];for(let R=0;R<i.count;R++)s[R]=new Y,l[R]=new Y;const c=new Y,u=new Y,d=new Y,h=new ot,m=new ot,_=new ot,x=new Y,p=new Y;function f(R,M,y){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,y),h.fromBufferAttribute(a,R),m.fromBufferAttribute(a,M),_.fromBufferAttribute(a,y),u.sub(c),d.sub(c),m.sub(h),_.sub(h);const C=1/(m.x*_.y-_.x*m.y);isFinite(C)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(C),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(C),s[R].add(x),s[M].add(x),s[y].add(x),l[R].add(p),l[M].add(p),l[y].add(p))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let R=0,M=g.length;R<M;++R){const y=g[R],C=y.start,V=y.count;for(let B=C,H=C+V;B<H;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const v=new Y,E=new Y,P=new Y,S=new Y;function A(R){P.fromBufferAttribute(r,R),S.copy(P);const M=s[R];v.copy(M),v.sub(P.multiplyScalar(P.dot(M))).normalize(),E.crossVectors(S,M);const C=E.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,C)}for(let R=0,M=g.length;R<M;++R){const y=g[R],C=y.start,V=y.count;for(let B=C,H=C+V;B<H;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new Y,a=new Y,o=new Y,s=new Y,l=new Y,c=new Y,u=new Y,d=new Y;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),a.fromBufferAttribute(n,x),o.fromBufferAttribute(n,p),u.subVectors(o,a),d.subVectors(r,a),u.cross(d),s.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),s.add(u),l.add(u),c.add(u),i.setXYZ(_,s.x,s.y,s.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),a.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,a),d.subVectors(r,a),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Wt.fromBufferAttribute(e,n),Wt.normalize(),e.setXYZ(n,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,d=s.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){s.isInterleavedBufferAttribute?m=l[x]*s.data.stride+s.offset:m=l[x]*u;for(let f=0;f<u;f++)h[_++]=c[m++]}return new pi(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new na,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);n.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,i);l.push(m)}n.morphAttributes[s]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const a=e.morphAttributes;for(const c in a){const u=[],d=a[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const im=new Nt,Rr=new lS,Ks=new vh,rm=new Y,ma=new Y,ga=new Y,va=new Y,Eu=new Y,Zs=new Y,Qs=new ot,Js=new ot,el=new ot,am=new Y,om=new Y,sm=new Y,tl=new Y,nl=new Y;class $t extends sn{constructor(e=new na,n=new Wv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){Zs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=s[l],d=a[l];u!==0&&(Eu.fromBufferAttribute(d,e),o?Zs.addScaledVector(Eu,u):Zs.addScaledVector(Eu.sub(n),u))}n.add(Zs)}return n}raycast(e,n){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere),Ks.applyMatrix4(a),Rr.copy(e.ray).recast(e.near),!(Ks.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Ks,rm)===null||Rr.origin.distanceToSquared(rm)>(e.far-e.near)**2))&&(im.copy(a).invert(),Rr.copy(e.ray).applyMatrix4(im),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Rr)))}_computeIntersections(e,n,i){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,h=a.groups,m=a.drawRange;if(s!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const p=h[_],f=o[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(s.count,Math.min(p.start+p.count,m.start+m.count));for(let E=g,P=v;E<P;E+=3){const S=s.getX(E),A=s.getX(E+1),R=s.getX(E+2);r=il(this,f,e,i,c,u,d,S,A,R),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(s.count,m.start+m.count);for(let p=_,f=x;p<f;p+=3){const g=s.getX(p),v=s.getX(p+1),E=s.getX(p+2);r=il(this,o,e,i,c,u,d,g,v,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const p=h[_],f=o[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=g,P=v;E<P;E+=3){const S=E,A=E+1,R=E+2;r=il(this,f,e,i,c,u,d,S,A,R),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,f=x;p<f;p+=3){const g=p,v=p+1,E=p+2;r=il(this,o,e,i,c,u,d,g,v,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function yS(t,e,n,i,r,a,o,s){let l;if(e.side===wn?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===xr,s),l===null)return null;nl.copy(s),nl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(nl);return c<n.near||c>n.far?null:{distance:c,point:nl.clone(),object:t}}function il(t,e,n,i,r,a,o,s,l,c){t.getVertexPosition(s,ma),t.getVertexPosition(l,ga),t.getVertexPosition(c,va);const u=yS(t,e,n,i,ma,ga,va,tl);if(u){r&&(Qs.fromBufferAttribute(r,s),Js.fromBufferAttribute(r,l),el.fromBufferAttribute(r,c),u.uv=di.getInterpolation(tl,ma,ga,va,Qs,Js,el,new ot)),a&&(Qs.fromBufferAttribute(a,s),Js.fromBufferAttribute(a,l),el.fromBufferAttribute(a,c),u.uv1=di.getInterpolation(tl,ma,ga,va,Qs,Js,el,new ot)),o&&(am.fromBufferAttribute(o,s),om.fromBufferAttribute(o,l),sm.fromBufferAttribute(o,c),u.normal=di.getInterpolation(tl,ma,ga,va,am,om,sm,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:s,b:l,c,normal:new Y,materialIndex:0};di.getNormal(ma,ga,va,d.normal),u.face=d}return u}class gr extends na{constructor(e=1,n=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,o,a,0),_("z","y","x",1,-1,i,n,-e,o,a,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,a,4),_("x","y","z",-1,-1,e,n,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new jr(c,3)),this.setAttribute("normal",new jr(u,3)),this.setAttribute("uv",new jr(d,2));function _(x,p,f,g,v,E,P,S,A,R,M){const y=E/A,C=P/R,V=E/2,B=P/2,H=S/2,$=A+1,G=R+1;let K=0,U=0;const Q=new Y;for(let J=0;J<G;J++){const le=J*C-B;for(let Se=0;Se<$;Se++){const Ve=Se*y-V;Q[x]=Ve*g,Q[p]=le*v,Q[f]=H,c.push(Q.x,Q.y,Q.z),Q[x]=0,Q[p]=0,Q[f]=S>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(Se/A),d.push(1-J/R),K+=1}}for(let J=0;J<R;J++)for(let le=0;le<A;le++){const Se=h+le+$*J,Ve=h+le+$*(J+1),q=h+(le+1)+$*(J+1),re=h+(le+1)+$*J;l.push(Se,Ve,re),l.push(Ve,q,re),U+=6}s.addGroup(m,U,M),m+=U,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function no(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function un(t){const e={};for(let n=0;n<t.length;n++){const i=no(t[n]);for(const r in i)e[r]=i[r]}return e}function SS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Yv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const MS={clone:no,merge:un};var ES=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ES,this.fragmentShader=wS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=SS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class $v extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Di}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new Y,lm=new ot,cm=new ot;class Bn extends $v{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=sf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(au*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sf*2*Math.atan(Math.tan(au*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,n){return this.getViewBounds(e,lm,cm),n.subVectors(cm,lm)}setViewOffset(e,n,i,r,a,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(au*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const _a=-90,xa=1;class TS extends sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bn(_a,xa,e,n);r.layers=this.layers,this.add(r);const a=new Bn(_a,xa,e,n);a.layers=this.layers,this.add(a);const o=new Bn(_a,xa,e,n);o.layers=this.layers,this.add(o);const s=new Bn(_a,xa,e,n);s.layers=this.layers,this.add(s);const l=new Bn(_a,xa,e,n);l.layers=this.layers,this.add(l);const c=new Bn(_a,xa,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,a,o,s,l]=n;for(const c of n)this.remove(c);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,a),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,s),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class qv extends on{constructor(e,n,i,r,a,o,s,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Qa,super(e,n,i,r,a,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class AS extends Jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new qv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:an}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new gr(5,5,5),a=new yr({name:"CubemapFromEquirect",uniforms:no(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:pr});a.uniforms.tEquirect.value=n;const o=new $t(r,a),s=n.minFilter;return n.minFilter===ar&&(n.minFilter=an),new TS(1,10,this).update(e,o),n.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(a)}}const wu=new Y,RS=new Y,CS=new Je;class Nr{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=wu.subVectors(i,n).cross(RS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(wu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:n.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||CS.getNormalMatrix(e),r=this.coplanarPoint(wu).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new vh,rl=new Y;class _h{constructor(e=new Nr,n=new Nr,i=new Nr,r=new Nr,a=new Nr,o=new Nr){this.planes=[e,n,i,r,a,o]}set(e,n,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(n),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Di){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],m=r[8],_=r[9],x=r[10],p=r[11],f=r[12],g=r[13],v=r[14],E=r[15];if(i[0].setComponents(l-a,h-c,p-m,E-f).normalize(),i[1].setComponents(l+a,h+c,p+m,E+f).normalize(),i[2].setComponents(l+o,h+u,p+_,E+g).normalize(),i[3].setComponents(l-o,h-u,p-_,E-g).normalize(),i[4].setComponents(l-s,h-d,p-x,E-v).normalize(),n===Di)i[5].setComponents(l+s,h+d,p+x,E+v).normalize();else if(n===rc)i[5].setComponents(s,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(rl.x=r.normal.x>0?e.max.x:e.min.x,rl.y=r.normal.y>0?e.max.y:e.min.y,rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kv(){let t=null,e=!1,n=null,i=null;function r(a,o){n(a,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function bS(t){const e=new WeakMap;function n(s,l){const c=s.array,u=s.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),s.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:d}}function i(s,l,c){const u=l.array,d=l._updateRange,h=l.updateRanges;if(t.bindBuffer(c,s),d.count===-1&&h.length===0&&t.bufferSubData(c,0,u),h.length!==0){for(let m=0,_=h.length;m<_;m++){const x=h[m];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(t.deleteBuffer(l.buffer),e.delete(s))}function o(s,l){if(s.isGLBufferAttribute){const u=e.get(s);(!u||u.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}s.isInterleavedBufferAttribute&&(s=s.data);const c=e.get(s);if(c===void 0)e.set(s,n(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,s,l),c.version=s.version}}return{get:r,remove:a,update:o}}class Tc extends na{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const a=e/2,o=n/2,s=Math.floor(i),l=Math.floor(r),c=s+1,u=l+1,d=e/s,h=n/l,m=[],_=[],x=[],p=[];for(let f=0;f<u;f++){const g=f*h-o;for(let v=0;v<c;v++){const E=v*d-a;_.push(E,-g,0),x.push(0,0,1),p.push(v/s),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<s;g++){const v=g+c*f,E=g+c*(f+1),P=g+1+c*(f+1),S=g+1+c*f;m.push(v,E,S),m.push(E,P,S)}this.setIndex(m),this.setAttribute("position",new jr(_,3)),this.setAttribute("normal",new jr(x,3)),this.setAttribute("uv",new jr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.width,e.height,e.widthSegments,e.heightSegments)}}var PS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LS=`#ifdef USE_ALPHAHASH
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
#endif`,DS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,NS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,US=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FS=`#ifdef USE_AOMAP
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
#endif`,OS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zS=`#ifdef USE_BATCHING
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
#endif`,kS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,GS=`#ifdef USE_IRIDESCENCE
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
#endif`,WS=`#ifdef USE_BUMPMAP
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
#endif`,jS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,XS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$S=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,QS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,JS=`#define PI 3.141592653589793
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
} // validated`,eM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tM=`vec3 transformedNormal = objectNormal;
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
#endif`,nM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oM="gl_FragColor = linearToOutputTexel( gl_FragColor );",sM=`
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
}`,lM=`#ifdef USE_ENVMAP
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
#endif`,cM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uM=`#ifdef USE_ENVMAP
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
#endif`,dM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fM=`#ifdef USE_ENVMAP
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
#endif`,hM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vM=`#ifdef USE_GRADIENTMAP
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
}`,_M=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SM=`uniform bool receiveShadow;
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
#endif`,MM=`#ifdef USE_ENVMAP
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
#endif`,EM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RM=`PhysicalMaterial material;
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
#endif`,CM=`struct PhysicalMaterial {
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
}`,bM=`
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
#endif`,PM=`#if defined( RE_IndirectDiffuse )
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
#endif`,LM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kM=`#if defined( USE_POINTS_UV )
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
#endif`,BM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jM=`#ifdef USE_MORPHTARGETS
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
#endif`,XM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$M=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QM=`#ifdef USE_NORMALMAP
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
#endif`,JM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,aE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pE=`float getShadowMask() {
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
}`,mE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gE=`#ifdef USE_SKINNING
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
#endif`,vE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_E=`#ifdef USE_SKINNING
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
#endif`,xE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ME=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,EE=`#ifdef USE_TRANSMISSION
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
#endif`,wE=`#ifdef USE_TRANSMISSION
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
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PE=`uniform sampler2D t2D;
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
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`#include <common>
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
}`,FE=`#if DEPTH_PACKING == 3200
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
}`,OE=`#define DISTANCE
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
}`,zE=`#define DISTANCE
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
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`uniform float scale;
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
}`,VE=`uniform vec3 diffuse;
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
}`,GE=`#include <common>
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
}`,WE=`uniform vec3 diffuse;
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
}`,jE=`#define LAMBERT
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
}`,XE=`#define LAMBERT
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
}`,YE=`#define MATCAP
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
}`,$E=`#define MATCAP
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
}`,qE=`#define NORMAL
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
}`,KE=`#define NORMAL
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
}`,ZE=`#define PHONG
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
}`,QE=`#define PHONG
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
}`,JE=`#define STANDARD
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
}`,e2=`#define STANDARD
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
}`,t2=`#define TOON
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
}`,n2=`#define TOON
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
}`,i2=`uniform float size;
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
}`,r2=`uniform vec3 diffuse;
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
}`,a2=`#include <common>
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
}`,o2=`uniform vec3 color;
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
}`,s2=`uniform float rotation;
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
}`,l2=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:PS,alphahash_pars_fragment:LS,alphamap_fragment:DS,alphamap_pars_fragment:NS,alphatest_fragment:US,alphatest_pars_fragment:IS,aomap_fragment:FS,aomap_pars_fragment:OS,batching_pars_vertex:zS,batching_vertex:kS,begin_vertex:BS,beginnormal_vertex:HS,bsdfs:VS,iridescence_fragment:GS,bumpmap_pars_fragment:WS,clipping_planes_fragment:jS,clipping_planes_pars_fragment:XS,clipping_planes_pars_vertex:YS,clipping_planes_vertex:$S,color_fragment:qS,color_pars_fragment:KS,color_pars_vertex:ZS,color_vertex:QS,common:JS,cube_uv_reflection_fragment:eM,defaultnormal_vertex:tM,displacementmap_pars_vertex:nM,displacementmap_vertex:iM,emissivemap_fragment:rM,emissivemap_pars_fragment:aM,colorspace_fragment:oM,colorspace_pars_fragment:sM,envmap_fragment:lM,envmap_common_pars_fragment:cM,envmap_pars_fragment:uM,envmap_pars_vertex:dM,envmap_physical_pars_fragment:MM,envmap_vertex:fM,fog_vertex:hM,fog_pars_vertex:pM,fog_fragment:mM,fog_pars_fragment:gM,gradientmap_pars_fragment:vM,lightmap_pars_fragment:_M,lights_lambert_fragment:xM,lights_lambert_pars_fragment:yM,lights_pars_begin:SM,lights_toon_fragment:EM,lights_toon_pars_fragment:wM,lights_phong_fragment:TM,lights_phong_pars_fragment:AM,lights_physical_fragment:RM,lights_physical_pars_fragment:CM,lights_fragment_begin:bM,lights_fragment_maps:PM,lights_fragment_end:LM,logdepthbuf_fragment:DM,logdepthbuf_pars_fragment:NM,logdepthbuf_pars_vertex:UM,logdepthbuf_vertex:IM,map_fragment:FM,map_pars_fragment:OM,map_particle_fragment:zM,map_particle_pars_fragment:kM,metalnessmap_fragment:BM,metalnessmap_pars_fragment:HM,morphinstance_vertex:VM,morphcolor_vertex:GM,morphnormal_vertex:WM,morphtarget_pars_vertex:jM,morphtarget_vertex:XM,normal_fragment_begin:YM,normal_fragment_maps:$M,normal_pars_fragment:qM,normal_pars_vertex:KM,normal_vertex:ZM,normalmap_pars_fragment:QM,clearcoat_normal_fragment_begin:JM,clearcoat_normal_fragment_maps:eE,clearcoat_pars_fragment:tE,iridescence_pars_fragment:nE,opaque_fragment:iE,packing:rE,premultiplied_alpha_fragment:aE,project_vertex:oE,dithering_fragment:sE,dithering_pars_fragment:lE,roughnessmap_fragment:cE,roughnessmap_pars_fragment:uE,shadowmap_pars_fragment:dE,shadowmap_pars_vertex:fE,shadowmap_vertex:hE,shadowmask_pars_fragment:pE,skinbase_vertex:mE,skinning_pars_vertex:gE,skinning_vertex:vE,skinnormal_vertex:_E,specularmap_fragment:xE,specularmap_pars_fragment:yE,tonemapping_fragment:SE,tonemapping_pars_fragment:ME,transmission_fragment:EE,transmission_pars_fragment:wE,uv_pars_fragment:TE,uv_pars_vertex:AE,uv_vertex:RE,worldpos_vertex:CE,background_vert:bE,background_frag:PE,backgroundCube_vert:LE,backgroundCube_frag:DE,cube_vert:NE,cube_frag:UE,depth_vert:IE,depth_frag:FE,distanceRGBA_vert:OE,distanceRGBA_frag:zE,equirect_vert:kE,equirect_frag:BE,linedashed_vert:HE,linedashed_frag:VE,meshbasic_vert:GE,meshbasic_frag:WE,meshlambert_vert:jE,meshlambert_frag:XE,meshmatcap_vert:YE,meshmatcap_frag:$E,meshnormal_vert:qE,meshnormal_frag:KE,meshphong_vert:ZE,meshphong_frag:QE,meshphysical_vert:JE,meshphysical_frag:e2,meshtoon_vert:t2,meshtoon_frag:n2,points_vert:i2,points_frag:r2,shadow_vert:a2,shadow_frag:o2,sprite_vert:s2,sprite_frag:l2},ge={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},ci={basic:{uniforms:un([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:un([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new st(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:un([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:un([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:un([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new st(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:un([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:un([ge.points,ge.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:un([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:un([ge.common,ge.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:un([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:un([ge.sprite,ge.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:un([ge.common,ge.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:un([ge.lights,ge.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};ci.physical={uniforms:un([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const al={r:0,b:0,g:0},br=new mi,c2=new Nt;function u2(t,e,n,i,r,a,o){const s=new st(0);let l=a===!0?0:1,c,u,d=null,h=0,m=null;function _(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v)),v}function x(g){let v=!1;const E=_(g);E===null?f(s,l):E&&E.isColor&&(f(E,1),v=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(g,v){const E=_(v);E&&(E.isCubeTexture||E.mapping===Ec)?(u===void 0&&(u=new $t(new gr(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:no(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),br.copy(v.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(c2.makeRotationFromEuler(br)),u.material.toneMapped=ft.getTransfer(E.colorSpace)!==St,(d!==E||h!==E.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=E,h=E.version,m=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new $t(new Tc(2,2),new yr({name:"BackgroundMaterial",uniforms:no(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ft.getTransfer(E.colorSpace)!==St,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=E,h=E.version,m=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function f(g,v){g.getRGB(al,Yv(t)),i.buffers.color.setClear(al.r,al.g,al.b,v,o)}return{getClearColor:function(){return s},setClearColor:function(g,v=1){s.set(g),l=v,f(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,f(s,l)},render:x,addToRenderList:p}}function d2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let a=r,o=!1;function s(y,C,V,B,H){let $=!1;const G=d(B,V,C);a!==G&&(a=G,c(a.object)),$=m(y,B,V,H),$&&_(y,B,V,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,E(y,C,V,B),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function d(y,C,V){const B=V.wireframe===!0;let H=i[y.id];H===void 0&&(H={},i[y.id]=H);let $=H[C.id];$===void 0&&($={},H[C.id]=$);let G=$[B];return G===void 0&&(G=h(l()),$[B]=G),G}function h(y){const C=[],V=[],B=[];for(let H=0;H<n;H++)C[H]=0,V[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:V,attributeDivisors:B,object:y,attributes:{},index:null}}function m(y,C,V,B){const H=a.attributes,$=C.attributes;let G=0;const K=V.getAttributes();for(const U in K)if(K[U].location>=0){const J=H[U];let le=$[U];if(le===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(le=y.instanceColor)),J===void 0||J.attribute!==le||le&&J.data!==le.data)return!0;G++}return a.attributesNum!==G||a.index!==B}function _(y,C,V,B){const H={},$=C.attributes;let G=0;const K=V.getAttributes();for(const U in K)if(K[U].location>=0){let J=$[U];J===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(J=y.instanceColor));const le={};le.attribute=J,J&&J.data&&(le.data=J.data),H[U]=le,G++}a.attributes=H,a.attributesNum=G,a.index=B}function x(){const y=a.newAttributes;for(let C=0,V=y.length;C<V;C++)y[C]=0}function p(y){f(y,0)}function f(y,C){const V=a.newAttributes,B=a.enabledAttributes,H=a.attributeDivisors;V[y]=1,B[y]===0&&(t.enableVertexAttribArray(y),B[y]=1),H[y]!==C&&(t.vertexAttribDivisor(y,C),H[y]=C)}function g(){const y=a.newAttributes,C=a.enabledAttributes;for(let V=0,B=C.length;V<B;V++)C[V]!==y[V]&&(t.disableVertexAttribArray(V),C[V]=0)}function v(y,C,V,B,H,$,G){G===!0?t.vertexAttribIPointer(y,C,V,H,$):t.vertexAttribPointer(y,C,V,B,H,$)}function E(y,C,V,B){x();const H=B.attributes,$=V.getAttributes(),G=C.defaultAttributeValues;for(const K in $){const U=$[K];if(U.location>=0){let Q=H[K];if(Q===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor)),Q!==void 0){const J=Q.normalized,le=Q.itemSize,Se=e.get(Q);if(Se===void 0)continue;const Ve=Se.buffer,q=Se.type,re=Se.bytesPerElement,he=q===t.INT||q===t.UNSIGNED_INT||Q.gpuType===uh;if(Q.isInterleavedBufferAttribute){const ye=Q.data,We=ye.stride,Ke=Q.offset;if(ye.isInstancedInterleavedBuffer){for(let et=0;et<U.locationSize;et++)f(U.location+et,ye.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let et=0;et<U.locationSize;et++)p(U.location+et);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let et=0;et<U.locationSize;et++)v(U.location+et,le/U.locationSize,q,J,We*re,(Ke+le/U.locationSize*et)*re,he)}else{if(Q.isInstancedBufferAttribute){for(let ye=0;ye<U.locationSize;ye++)f(U.location+ye,Q.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ye=0;ye<U.locationSize;ye++)p(U.location+ye);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let ye=0;ye<U.locationSize;ye++)v(U.location+ye,le/U.locationSize,q,J,le*re,le/U.locationSize*ye*re,he)}}else if(G!==void 0){const J=G[K];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(U.location,J);break;case 3:t.vertexAttrib3fv(U.location,J);break;case 4:t.vertexAttrib4fv(U.location,J);break;default:t.vertexAttrib1fv(U.location,J)}}}}g()}function P(){R();for(const y in i){const C=i[y];for(const V in C){const B=C[V];for(const H in B)u(B[H].object),delete B[H];delete C[V]}delete i[y]}}function S(y){if(i[y.id]===void 0)return;const C=i[y.id];for(const V in C){const B=C[V];for(const H in B)u(B[H].object),delete B[H];delete C[V]}delete i[y.id]}function A(y){for(const C in i){const V=i[C];if(V[y.id]===void 0)continue;const B=V[y.id];for(const H in B)u(B[H].object),delete B[H];delete V[y.id]}}function R(){M(),o=!0,a!==r&&(a=r,c(a.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:R,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:p,disableUnusedAttributes:g}}function f2(t,e,n){let i;function r(c){i=c}function a(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function s(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let m=0;for(let _=0;_<d;_++)m+=u[_];n.update(m,i,1)}function l(c,u,d,h){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let _=0;for(let x=0;x<d;x++)_+=u[x];for(let x=0;x<h.length;x++)n.update(_,i,h[x])}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function h2(t,e,n,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(S){return!(S!==ti&&i.convert(S)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(S){const A=S===Li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==ki&&i.convert(S)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Vn&&!A)}function l(S){if(S==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:f,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:E,maxSamples:P}}function p2(t){const e=this;let n=null,i=0,r=!1,a=!1;const o=new Nr,s=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,m){const _=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,f=t.get(d);if(!r||_===null||_.length===0||a&&!p)a?u(null):c();else{const g=a?0:i,v=g*4;let E=f.clippingState||null;l.value=E,E=u(_,h,v,m);for(let P=0;P!==v;++P)E[P]=n[P];f.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,_){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const f=m+x*4,g=h.matrixWorldInverse;s.getNormalMatrix(g),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,E=m;v!==x;++v,E+=4)o.copy(d[v]).applyMatrix4(g,s),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function m2(t){let e=new WeakMap;function n(o,s){return s===Ld?o.mapping=Qa:s===Dd&&(o.mapping=Ja),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===Ld||s===Dd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new AS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Zv extends $v{constructor(e=-1,n=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ua=4,um=[.125,.215,.35,.446,.526,.582],Fr=20,Tu=new Zv,dm=new st;let Au=null,Ru=0,Cu=0,bu=!1;const Ur=(1+Math.sqrt(5))/2,ya=1/Ur,fm=[new Y(-Ur,ya,0),new Y(Ur,ya,0),new Y(-ya,0,Ur),new Y(ya,0,Ur),new Y(0,Ur,-ya),new Y(0,Ur,ya),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class lf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Au=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Au,Ru,Cu),this._renderer.xr.enabled=bu,e.scissorTest=!1,ol(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Qa||e.mapping===Ja?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Au=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:Li,format:ti,colorSpace:Hi,depthBuffer:!1},r=hm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hm(e,n,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g2(a)),this._blurMaterial=v2(a,e,n)}return r}_compileMaterial(e){const n=new $t(this._lodPlanes[0],e);this._renderer.compile(n,Tu)}_sceneToCubeUV(e,n,i,r){const s=new Bn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(dm),u.toneMapping=mr,u.autoClear=!1;const m=new Wv({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),_=new $t(new gr,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(dm),x=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(s.up.set(0,l[f],0),s.lookAt(c[f],0,0)):g===1?(s.up.set(0,0,l[f]),s.lookAt(0,c[f],0)):(s.up.set(0,l[f],0),s.lookAt(0,0,c[f]));const v=this._cubeSize;ol(r,g*v,f>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(_,s),u.render(e,s)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Qa||e.mapping===Ja;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pm());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;ol(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Tu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=fm[(r-a-1)%fm.length];this._blur(e,a-1,a,o,s)}n.autoClear=i}_blur(e,n,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,n,i,r,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new $t(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Fr-1),x=a/_,p=isFinite(a)?1+Math.floor(u*x):Fr;p>Fr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fr}`);const f=[];let g=0;for(let A=0;A<Fr;++A){const R=A/x,M=Math.exp(-R*R/2);f.push(M),A===0?g+=M:A<p&&(g+=2*M)}for(let A=0;A<f.length;A++)f[A]=f[A]/g;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=o==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const E=this._sizeLods[r],P=3*E*(r>v-Ua?r-v+Ua:0),S=4*(this._cubeSize-E);ol(n,P,S,3*E,2*E),l.setRenderTarget(n),l.render(d,Tu)}}function g2(t){const e=[],n=[],i=[];let r=t;const a=t-Ua+1+um.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);n.push(s);let l=1/s;o>t-Ua?l=um[o-t+Ua-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,_=6,x=3,p=2,f=1,g=new Float32Array(x*_*m),v=new Float32Array(p*_*m),E=new Float32Array(f*_*m);for(let S=0;S<m;S++){const A=S%3*2/3-1,R=S>2?0:-1,M=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];g.set(M,x*_*S),v.set(h,p*_*S);const y=[S,S,S,S,S,S];E.set(y,f*_*S)}const P=new na;P.setAttribute("position",new pi(g,x)),P.setAttribute("uv",new pi(v,p)),P.setAttribute("faceIndex",new pi(E,f)),e.push(P),r>Ua&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function hm(t,e,n){const i=new Jr(t,e,n);return i.texture.mapping=Ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ol(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function v2(t,e,n){const i=new Float32Array(Fr),r=new Y(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xh(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function pm(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xh(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function mm(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function xh(){return`

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
	`}function _2(t){let e=new WeakMap,n=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===Ld||l===Dd,u=l===Qa||l===Ja;if(c||u){let d=e.get(s);const h=d!==void 0?d.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==h)return n===null&&(n=new lf(t)),d=c?n.fromEquirectangular(s,d):n.fromCubemap(s,d),d.texture.pmremVersion=s.pmremVersion,e.set(s,d),d.texture;if(d!==void 0)return d.texture;{const m=s.image;return c&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new lf(t)),d=c?n.fromEquirectangular(s):n.fromCubemap(s),d.texture.pmremVersion=s.pmremVersion,e.set(s,d),s.addEventListener("dispose",a),d.texture):null}}}return s}function r(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function x2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&kv("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function y2(t,e,n,i){const r={},a=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let p=0,f=x.length;p<f;p++)e.remove(x[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=a.get(h);m&&(e.remove(m),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function s(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,f=x.length;p<f;p++)e.update(x[p],t.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,_=d.attributes.position;let x=0;if(m!==null){const g=m.array;x=m.version;for(let v=0,E=g.length;v<E;v+=3){const P=g[v+0],S=g[v+1],A=g[v+2];h.push(P,S,S,A,A,P)}}else if(_!==void 0){const g=_.array;x=_.version;for(let v=0,E=g.length/3-1;v<E;v+=3){const P=v+0,S=v+1,A=v+2;h.push(P,S,S,A,A,P)}}else return;const p=new(zv(h)?Xv:jv)(h,1);p.version=x;const f=a.get(d);f&&e.remove(f),a.set(d,p)}function u(d){const h=a.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return a.get(d)}return{get:s,update:l,getWireframeAttribute:u}}function S2(t,e,n){let i;function r(h){i=h}let a,o;function s(h){a=h.type,o=h.bytesPerElement}function l(h,m){t.drawElements(i,m,a,h*o),n.update(m,i,1)}function c(h,m,_){_!==0&&(t.drawElementsInstanced(i,m,a,h*o,_),n.update(m,i,_))}function u(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,a,h,0,_);let p=0;for(let f=0;f<_;f++)p+=m[f];n.update(p,i,1)}function d(h,m,_,x){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<h.length;f++)c(h[f]/o,m[f],x[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,a,h,0,x,0,_);let f=0;for(let g=0;g<_;g++)f+=m[g];for(let g=0;g<x.length;g++)n.update(f,i,x[g])}}this.setMode=r,this.setIndex=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function M2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=s*(a/3);break;case t.LINES:n.lines+=s*(a/2);break;case t.LINE_STRIP:n.lines+=s*(a-1);break;case t.LINE_LOOP:n.lines+=s*a;break;case t.POINTS:n.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function E2(t,e,n){const i=new WeakMap,r=new Bt;function a(o,s,l){const c=o.morphTargetInfluences,u=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(s);if(h===void 0||h.count!==d){let y=function(){R.dispose(),i.delete(s),s.removeEventListener("dispose",y)};var m=y;h!==void 0&&h.texture.dispose();const _=s.morphAttributes.position!==void 0,x=s.morphAttributes.normal!==void 0,p=s.morphAttributes.color!==void 0,f=s.morphAttributes.position||[],g=s.morphAttributes.normal||[],v=s.morphAttributes.color||[];let E=0;_===!0&&(E=1),x===!0&&(E=2),p===!0&&(E=3);let P=s.attributes.position.count*E,S=1;P>e.maxTextureSize&&(S=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const A=new Float32Array(P*S*4*d),R=new Hv(A,P,S,d);R.type=Vn,R.needsUpdate=!0;const M=E*4;for(let C=0;C<d;C++){const V=f[C],B=g[C],H=v[C],$=P*S*4*C;for(let G=0;G<V.count;G++){const K=G*M;_===!0&&(r.fromBufferAttribute(V,G),A[$+K+0]=r.x,A[$+K+1]=r.y,A[$+K+2]=r.z,A[$+K+3]=0),x===!0&&(r.fromBufferAttribute(B,G),A[$+K+4]=r.x,A[$+K+5]=r.y,A[$+K+6]=r.z,A[$+K+7]=0),p===!0&&(r.fromBufferAttribute(H,G),A[$+K+8]=r.x,A[$+K+9]=r.y,A[$+K+10]=r.z,A[$+K+11]=H.itemSize===4?r.w:1)}}h={count:d,texture:R,size:new ot(P,S)},i.set(s,h),s.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const x=s.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:a}}function w2(t,e,n,i){let r=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:o}}class Qv extends on{constructor(e,n,i,r,a,o,s,l,c,u=Ga){if(u!==Ga&&u!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ga&&(i=Qr),i===void 0&&u===to&&(i=eo),super(null,r,a,o,s,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=s!==void 0?s:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Jv=new on,gm=new Qv(1,1),e_=new Hv,t_=new oS,n_=new qv,vm=[],_m=[],xm=new Float32Array(16),ym=new Float32Array(9),Sm=new Float32Array(4);function lo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let a=vm[r];if(a===void 0&&(a=new Float32Array(r),vm[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=n,t[o].toArray(a,s)}return a}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ac(t,e){let n=_m[e];n===void 0&&(n=new Int32Array(e),_m[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function T2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function A2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),Gt(n,e)}}function R2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),Gt(n,e)}}function C2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),Gt(n,e)}}function b2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(Vt(n,i))return;Sm.set(i),t.uniformMatrix2fv(this.addr,!1,Sm),Gt(n,i)}}function P2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(Vt(n,i))return;ym.set(i),t.uniformMatrix3fv(this.addr,!1,ym),Gt(n,i)}}function L2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(Vt(n,i))return;xm.set(i),t.uniformMatrix4fv(this.addr,!1,xm),Gt(n,i)}}function D2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function N2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),Gt(n,e)}}function U2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),Gt(n,e)}}function I2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),Gt(n,e)}}function F2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function O2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),Gt(n,e)}}function z2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),Gt(n,e)}}function k2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),Gt(n,e)}}function B2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let a;this.type===t.SAMPLER_2D_SHADOW?(gm.compareFunction=Ov,a=gm):a=Jv,n.setTexture2D(e||a,r)}function H2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||t_,r)}function V2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||n_,r)}function G2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||e_,r)}function W2(t){switch(t){case 5126:return T2;case 35664:return A2;case 35665:return R2;case 35666:return C2;case 35674:return b2;case 35675:return P2;case 35676:return L2;case 5124:case 35670:return D2;case 35667:case 35671:return N2;case 35668:case 35672:return U2;case 35669:case 35673:return I2;case 5125:return F2;case 36294:return O2;case 36295:return z2;case 36296:return k2;case 35678:case 36198:case 36298:case 36306:case 35682:return B2;case 35679:case 36299:case 36307:return H2;case 35680:case 36300:case 36308:case 36293:return V2;case 36289:case 36303:case 36311:case 36292:return G2}}function j2(t,e){t.uniform1fv(this.addr,e)}function X2(t,e){const n=lo(e,this.size,2);t.uniform2fv(this.addr,n)}function Y2(t,e){const n=lo(e,this.size,3);t.uniform3fv(this.addr,n)}function $2(t,e){const n=lo(e,this.size,4);t.uniform4fv(this.addr,n)}function q2(t,e){const n=lo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function K2(t,e){const n=lo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Z2(t,e){const n=lo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Q2(t,e){t.uniform1iv(this.addr,e)}function J2(t,e){t.uniform2iv(this.addr,e)}function ew(t,e){t.uniform3iv(this.addr,e)}function tw(t,e){t.uniform4iv(this.addr,e)}function nw(t,e){t.uniform1uiv(this.addr,e)}function iw(t,e){t.uniform2uiv(this.addr,e)}function rw(t,e){t.uniform3uiv(this.addr,e)}function aw(t,e){t.uniform4uiv(this.addr,e)}function ow(t,e,n){const i=this.cache,r=e.length,a=Ac(n,r);Vt(i,a)||(t.uniform1iv(this.addr,a),Gt(i,a));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Jv,a[o])}function sw(t,e,n){const i=this.cache,r=e.length,a=Ac(n,r);Vt(i,a)||(t.uniform1iv(this.addr,a),Gt(i,a));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||t_,a[o])}function lw(t,e,n){const i=this.cache,r=e.length,a=Ac(n,r);Vt(i,a)||(t.uniform1iv(this.addr,a),Gt(i,a));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||n_,a[o])}function cw(t,e,n){const i=this.cache,r=e.length,a=Ac(n,r);Vt(i,a)||(t.uniform1iv(this.addr,a),Gt(i,a));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||e_,a[o])}function uw(t){switch(t){case 5126:return j2;case 35664:return X2;case 35665:return Y2;case 35666:return $2;case 35674:return q2;case 35675:return K2;case 35676:return Z2;case 5124:case 35670:return Q2;case 35667:case 35671:return J2;case 35668:case 35672:return ew;case 35669:case 35673:return tw;case 5125:return nw;case 36294:return iw;case 36295:return rw;case 36296:return aw;case 35678:case 36198:case 36298:case 36306:case 35682:return ow;case 35679:case 36299:case 36307:return sw;case 35680:case 36300:case 36308:case 36293:return lw;case 36289:case 36303:case 36311:case 36292:return cw}}class dw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=W2(n.type)}}class fw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=uw(n.type)}}class hw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,n[s.id],i)}}}const Pu=/(\w+)(\])?(\[|\.)?/g;function Mm(t,e){t.seq.push(e),t.map[e.id]=e}function pw(t,e,n){const i=t.name,r=i.length;for(Pu.lastIndex=0;;){const a=Pu.exec(i),o=Pu.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){Mm(n,c===void 0?new dw(s,t,e):new fw(s,t,e));break}else{let d=n.map[s];d===void 0&&(d=new hw(s),Mm(n,d)),n=d}}}class Tl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(n,r),o=e.getUniformLocation(n,a.name);pw(a,o,this)}}setValue(e,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let a=0,o=n.length;a!==o;++a){const s=n[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Em(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const mw=37297;let gw=0;function vw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${n[o]}`)}return i.join(`
`)}function _w(t){const e=ft.getPrimaries(ft.workingColorSpace),n=ft.getPrimaries(t);let i;switch(e===n?i="":e===ic&&n===nc?i="LinearDisplayP3ToLinearSRGB":e===nc&&n===ic&&(i="LinearSRGBToLinearDisplayP3"),t){case Hi:case wc:return[i,"LinearTransferOETF"];case li:case gh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function wm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+vw(t.getShaderSource(e),o)}else return r}function xw(t,e){const n=_w(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function yw(t,e){let n;switch(e){case Iy:n="Linear";break;case Fy:n="Reinhard";break;case Oy:n="OptimizedCineon";break;case wv:n="ACESFilmic";break;case ky:n="AgX";break;case By:n="Neutral";break;case zy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Sw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function Mw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Ew(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=t.getActiveAttrib(e,r),o=a.name;let s=1;a.type===t.FLOAT_MAT2&&(s=2),a.type===t.FLOAT_MAT3&&(s=3),a.type===t.FLOAT_MAT4&&(s=4),n[o]={type:a.type,location:t.getAttribLocation(e,o),locationSize:s}}return n}function Po(t){return t!==""}function Tm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Am(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ww=/^[ \t]*#include +<([\w\d./]+)>/gm;function cf(t){return t.replace(ww,Aw)}const Tw=new Map;function Aw(t,e){let n=Qe[e];if(n===void 0){const i=Tw.get(e);if(i!==void 0)n=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cf(n)}const Rw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rm(t){return t.replace(Rw,Cw)}function Cw(t,e,n,i){let r="";for(let a=parseInt(e);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Cm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function bw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Mv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===sy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function Pw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Qa:case Ja:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ja:e="ENVMAP_MODE_REFRACTION";break}return e}function Dw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ev:e="ENVMAP_BLENDING_MULTIPLY";break;case Ny:e="ENVMAP_BLENDING_MIX";break;case Uy:e="ENVMAP_BLENDING_ADD";break}return e}function Nw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Uw(t,e,n,i){const r=t.getContext(),a=n.defines;let o=n.vertexShader,s=n.fragmentShader;const l=bw(n),c=Pw(n),u=Lw(n),d=Dw(n),h=Nw(n),m=Sw(n),_=Mw(a),x=r.createProgram();let p,f,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Po).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Po).join(`
`),f.length>0&&(f+=`
`)):(p=[Cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),f=[Cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mr?"#define TONE_MAPPING":"",n.toneMapping!==mr?Qe.tonemapping_pars_fragment:"",n.toneMapping!==mr?yw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,xw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Po).join(`
`)),o=cf(o),o=Tm(o,n),o=Am(o,n),s=cf(s),s=Tm(s,n),s=Am(s,n),o=Rm(o),s=Rm(s),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",n.glslVersion===Wp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=g+p+o,E=g+f+s,P=Em(r,r.VERTEX_SHADER,v),S=Em(r,r.FRAGMENT_SHADER,E);r.attachShader(x,P),r.attachShader(x,S),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(C){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(x).trim(),B=r.getShaderInfoLog(P).trim(),H=r.getShaderInfoLog(S).trim();let $=!0,G=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,P,S);else{const K=wm(r,P,"vertex"),U=wm(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+K+`
`+U)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||H==="")&&(G=!1);G&&(C.diagnostics={runnable:$,programLog:V,vertexShader:{log:B,prefix:p},fragmentShader:{log:H,prefix:f}})}r.deleteShader(P),r.deleteShader(S),R=new Tl(r,x),M=Ew(r,x)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,mw)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=gw++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=S,this}let Iw=0;class Fw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Ow(e),n.set(e,i)),i}}class Ow{constructor(e){this.id=Iw++,this.code=e,this.usedTimes=0}}function zw(t,e,n,i,r,a,o){const s=new Vv,l=new Fw,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,y,C,V,B){const H=V.fog,$=B.geometry,G=M.isMeshStandardMaterial?V.environment:null,K=(M.isMeshStandardMaterial?n:e).get(M.envMap||G),U=K&&K.mapping===Ec?K.image.height:null,Q=_[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const J=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,le=J!==void 0?J.length:0;let Se=0;$.morphAttributes.position!==void 0&&(Se=1),$.morphAttributes.normal!==void 0&&(Se=2),$.morphAttributes.color!==void 0&&(Se=3);let Ve,q,re,he;if(Q){const lt=ci[Q];Ve=lt.vertexShader,q=lt.fragmentShader}else Ve=M.vertexShader,q=M.fragmentShader,l.update(M),re=l.getVertexShaderID(M),he=l.getFragmentShaderID(M);const ye=t.getRenderTarget(),We=B.isInstancedMesh===!0,Ke=B.isBatchedMesh===!0,et=!!M.map,Et=!!M.matcap,L=!!K,pt=!!M.aoMap,ut=!!M.lightMap,dt=!!M.bumpMap,be=!!M.normalMap,Pt=!!M.displacementMap,je=!!M.emissiveMap,Xe=!!M.metalnessMap,b=!!M.roughnessMap,T=M.anisotropy>0,j=M.clearcoat>0,ae=M.dispersion>0,oe=M.iridescence>0,ne=M.sheen>0,Fe=M.transmission>0,pe=T&&!!M.anisotropyMap,_e=j&&!!M.clearcoatMap,He=j&&!!M.clearcoatNormalMap,ue=j&&!!M.clearcoatRoughnessMap,Me=oe&&!!M.iridescenceMap,nt=oe&&!!M.iridescenceThicknessMap,De=ne&&!!M.sheenColorMap,Ae=ne&&!!M.sheenRoughnessMap,Ge=!!M.specularMap,qe=!!M.specularColorMap,xt=!!M.specularIntensityMap,F=Fe&&!!M.transmissionMap,ce=Fe&&!!M.thicknessMap,ee=!!M.gradientMap,te=!!M.alphaMap,de=M.alphaTest>0,ke=!!M.alphaHash,it=!!M.extensions;let Tt=mr;M.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Tt=t.toneMapping);const zt={shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:Ve,fragmentShader:q,defines:M.defines,customVertexShaderID:re,customFragmentShaderID:he,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ke,batchingColor:Ke&&B._colorsTexture!==null,instancing:We,instancingColor:We&&B.instanceColor!==null,instancingMorph:We&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ye===null?t.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Hi,alphaToCoverage:!!M.alphaToCoverage,map:et,matcap:Et,envMap:L,envMapMode:L&&K.mapping,envMapCubeUVHeight:U,aoMap:pt,lightMap:ut,bumpMap:dt,normalMap:be,displacementMap:h&&Pt,emissiveMap:je,normalMapObjectSpace:be&&M.normalMapType===Wy,normalMapTangentSpace:be&&M.normalMapType===Fv,metalnessMap:Xe,roughnessMap:b,anisotropy:T,anisotropyMap:pe,clearcoat:j,clearcoatMap:_e,clearcoatNormalMap:He,clearcoatRoughnessMap:ue,dispersion:ae,iridescence:oe,iridescenceMap:Me,iridescenceThicknessMap:nt,sheen:ne,sheenColorMap:De,sheenRoughnessMap:Ae,specularMap:Ge,specularColorMap:qe,specularIntensityMap:xt,transmission:Fe,transmissionMap:F,thicknessMap:ce,gradientMap:ee,opaque:M.transparent===!1&&M.blending===Va&&M.alphaToCoverage===!1,alphaMap:te,alphaTest:de,alphaHash:ke,combine:M.combine,mapUv:et&&x(M.map.channel),aoMapUv:pt&&x(M.aoMap.channel),lightMapUv:ut&&x(M.lightMap.channel),bumpMapUv:dt&&x(M.bumpMap.channel),normalMapUv:be&&x(M.normalMap.channel),displacementMapUv:Pt&&x(M.displacementMap.channel),emissiveMapUv:je&&x(M.emissiveMap.channel),metalnessMapUv:Xe&&x(M.metalnessMap.channel),roughnessMapUv:b&&x(M.roughnessMap.channel),anisotropyMapUv:pe&&x(M.anisotropyMap.channel),clearcoatMapUv:_e&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:He&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:De&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&x(M.sheenRoughnessMap.channel),specularMapUv:Ge&&x(M.specularMap.channel),specularColorMapUv:qe&&x(M.specularColorMap.channel),specularIntensityMapUv:xt&&x(M.specularIntensityMap.channel),transmissionMapUv:F&&x(M.transmissionMap.channel),thicknessMapUv:ce&&x(M.thicknessMap.channel),alphaMapUv:te&&x(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(be||T),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(et||te),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Se,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:Tt,decodeVideoTexture:et&&M.map.isVideoTexture===!0&&ft.getTransfer(M.map.colorSpace)===St,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ai,flipSided:M.side===wn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:it&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&M.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return zt.vertexUv1s=c.has(1),zt.vertexUv2s=c.has(2),zt.vertexUv3s=c.has(3),c.clear(),zt}function f(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)y.push(C),y.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(g(y,M),v(y,M),y.push(t.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function g(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function v(M,y){s.disableAll(),y.supportsVertexTextures&&s.enable(0),y.instancing&&s.enable(1),y.instancingColor&&s.enable(2),y.instancingMorph&&s.enable(3),y.matcap&&s.enable(4),y.envMap&&s.enable(5),y.normalMapObjectSpace&&s.enable(6),y.normalMapTangentSpace&&s.enable(7),y.clearcoat&&s.enable(8),y.iridescence&&s.enable(9),y.alphaTest&&s.enable(10),y.vertexColors&&s.enable(11),y.vertexAlphas&&s.enable(12),y.vertexUv1s&&s.enable(13),y.vertexUv2s&&s.enable(14),y.vertexUv3s&&s.enable(15),y.vertexTangents&&s.enable(16),y.anisotropy&&s.enable(17),y.alphaHash&&s.enable(18),y.batching&&s.enable(19),y.dispersion&&s.enable(20),y.batchingColor&&s.enable(21),M.push(s.mask),s.disableAll(),y.fog&&s.enable(0),y.useFog&&s.enable(1),y.flatShading&&s.enable(2),y.logarithmicDepthBuffer&&s.enable(3),y.skinning&&s.enable(4),y.morphTargets&&s.enable(5),y.morphNormals&&s.enable(6),y.morphColors&&s.enable(7),y.premultipliedAlpha&&s.enable(8),y.shadowMapEnabled&&s.enable(9),y.doubleSided&&s.enable(10),y.flipSided&&s.enable(11),y.useDepthPacking&&s.enable(12),y.dithering&&s.enable(13),y.transmission&&s.enable(14),y.sheen&&s.enable(15),y.opaque&&s.enable(16),y.pointsUvs&&s.enable(17),y.decodeVideoTexture&&s.enable(18),y.alphaToCoverage&&s.enable(19),M.push(s.mask)}function E(M){const y=_[M.type];let C;if(y){const V=ci[y];C=MS.clone(V.uniforms)}else C=M.uniforms;return C}function P(M,y){let C;for(let V=0,B=u.length;V<B;V++){const H=u[V];if(H.cacheKey===y){C=H,++C.usedTimes;break}}return C===void 0&&(C=new Uw(t,y,M,a),u.push(C)),C}function S(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function A(M){l.remove(M)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:E,acquireProgram:P,releaseProgram:S,releaseShaderCache:A,programs:u,dispose:R}}function kw(){let t=new WeakMap;function e(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function n(a){t.delete(a)}function i(a,o,s){t.get(a)[o]=s}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Bw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function bm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Pm(){const t=[];let e=0;const n=[],i=[],r=[];function a(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,m,_,x,p){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:_,renderOrder:d.renderOrder,z:x,group:p},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=x,f.group=p),e++,f}function s(d,h,m,_,x,p){const f=o(d,h,m,_,x,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):n.push(f)}function l(d,h,m,_,x,p){const f=o(d,h,m,_,x,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||Bw),i.length>1&&i.sort(h||bm),r.length>1&&r.sort(h||bm)}function u(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:u,sort:c}}function Hw(){let t=new WeakMap;function e(i,r){const a=t.get(i);let o;return a===void 0?(o=new Pm,t.set(i,[o])):r>=a.length?(o=new Pm,a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Vw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new st};break;case"SpotLight":n={position:new Y,direction:new Y,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new st,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new st,groundColor:new st};break;case"RectAreaLight":n={color:new st,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function Gw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Ww=0;function jw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Xw(t){const e=new Vw,n=Gw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const r=new Y,a=new Nt,o=new Nt;function s(c){let u=0,d=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let m=0,_=0,x=0,p=0,f=0,g=0,v=0,E=0,P=0,S=0,A=0;c.sort(jw);for(let M=0,y=c.length;M<y;M++){const C=c[M],V=C.color,B=C.intensity,H=C.distance,$=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=V.r*B,d+=V.g*B,h+=V.b*B;else if(C.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(C.sh.coefficients[G],B);A++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const K=C.shadow,U=n.get(C);U.shadowIntensity=K.intensity,U.shadowBias=K.bias,U.shadowNormalBias=K.normalBias,U.shadowRadius=K.radius,U.shadowMapSize=K.mapSize,i.directionalShadow[m]=U,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=C.shadow.matrix,g++}i.directional[m]=G,m++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(V).multiplyScalar(B),G.distance=H,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,i.spot[x]=G;const K=C.shadow;if(C.map&&(i.spotLightMap[P]=C.map,P++,K.updateMatrices(C),C.castShadow&&S++),i.spotLightMatrix[x]=K.matrix,C.castShadow){const U=n.get(C);U.shadowIntensity=K.intensity,U.shadowBias=K.bias,U.shadowNormalBias=K.normalBias,U.shadowRadius=K.radius,U.shadowMapSize=K.mapSize,i.spotShadow[x]=U,i.spotShadowMap[x]=$,E++}x++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(V).multiplyScalar(B),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),i.rectArea[p]=G,p++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const K=C.shadow,U=n.get(C);U.shadowIntensity=K.intensity,U.shadowBias=K.bias,U.shadowNormalBias=K.normalBias,U.shadowRadius=K.radius,U.shadowMapSize=K.mapSize,U.shadowCameraNear=K.camera.near,U.shadowCameraFar=K.camera.far,i.pointShadow[_]=U,i.pointShadowMap[_]=$,i.pointShadowMatrix[_]=C.shadow.matrix,v++}i.point[_]=G,_++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(B),G.groundColor.copy(C.groundColor).multiplyScalar(B),i.hemi[f]=G,f++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const R=i.hash;(R.directionalLength!==m||R.pointLength!==_||R.spotLength!==x||R.rectAreaLength!==p||R.hemiLength!==f||R.numDirectionalShadows!==g||R.numPointShadows!==v||R.numSpotShadows!==E||R.numSpotMaps!==P||R.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=E+P-S,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=A,R.directionalLength=m,R.pointLength=_,R.spotLength=x,R.rectAreaLength=p,R.hemiLength=f,R.numDirectionalShadows=g,R.numPointShadows=v,R.numSpotShadows=E,R.numSpotMaps=P,R.numLightProbes=A,i.version=Ww++)}function l(c,u){let d=0,h=0,m=0,_=0,x=0;const p=u.matrixWorldInverse;for(let f=0,g=c.length;f<g;f++){const v=c[f];if(v.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),d++}else if(v.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),o.identity(),a.copy(v.matrixWorld),a.premultiply(p),o.extractRotation(a),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),h++}else if(v.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),x++}}}return{setup:s,setupView:l,state:i}}function Lm(t){const e=new Xw(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function s(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:s,setupLightsView:l,pushLight:a,pushShadow:o}}function Yw(t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let s;return o===void 0?(s=new Lm(t),e.set(r,[s])):a>=o.length?(s=new Lm(t),o.push(s)):s=o[a],s}function i(){e=new WeakMap}return{get:n,dispose:i}}class $w extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qw extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zw=`uniform sampler2D shadow_pass;
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
}`;function Qw(t,e,n){let i=new _h;const r=new ot,a=new ot,o=new Bt,s=new $w({depthPacking:Gy}),l=new qw,c={},u=n.maxTextureSize,d={[xr]:wn,[wn]:xr,[Ai]:Ai},h=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Kw,fragmentShader:Zw}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new na;_.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new $t(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mv;let f=this.type;this.render=function(S,A,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const M=t.getRenderTarget(),y=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),V=t.state;V.setBlending(pr),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=f!==Ei&&this.type===Ei,H=f===Ei&&this.type!==Ei;for(let $=0,G=S.length;$<G;$++){const K=S[$],U=K.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const Q=U.getFrameExtents();if(r.multiply(Q),a.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/Q.x),r.x=a.x*Q.x,U.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/Q.y),r.y=a.y*Q.y,U.mapSize.y=a.y)),U.map===null||B===!0||H===!0){const le=this.type!==Ei?{minFilter:yn,magFilter:yn}:{};U.map!==null&&U.map.dispose(),U.map=new Jr(r.x,r.y,le),U.map.texture.name=K.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const J=U.getViewportCount();for(let le=0;le<J;le++){const Se=U.getViewport(le);o.set(a.x*Se.x,a.y*Se.y,a.x*Se.z,a.y*Se.w),V.viewport(o),U.updateMatrices(K,le),i=U.getFrustum(),E(A,R,U.camera,K,this.type)}U.isPointLightShadow!==!0&&this.type===Ei&&g(U,R),U.needsUpdate=!1}f=this.type,p.needsUpdate=!1,t.setRenderTarget(M,y,C)};function g(S,A){const R=e.update(x);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Jr(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(A,null,R,h,x,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(A,null,R,m,x,null)}function v(S,A,R,M){let y=null;const C=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)y=C;else if(y=R.isPointLight===!0?l:s,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=y.uuid,B=A.uuid;let H=c[V];H===void 0&&(H={},c[V]=H);let $=H[B];$===void 0&&($=y.clone(),H[B]=$,A.addEventListener("dispose",P)),y=$}if(y.visible=A.visible,y.wireframe=A.wireframe,M===Ei?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:d[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=t.properties.get(y);V.light=R}return y}function E(S,A,R,M,y){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Ei)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const B=e.update(S),H=S.material;if(Array.isArray(H)){const $=B.groups;for(let G=0,K=$.length;G<K;G++){const U=$[G],Q=H[U.materialIndex];if(Q&&Q.visible){const J=v(S,Q,M,y);S.onBeforeShadow(t,S,A,R,B,J,U),t.renderBufferDirect(R,null,B,J,S,U),S.onAfterShadow(t,S,A,R,B,J,U)}}}else if(H.visible){const $=v(S,H,M,y);S.onBeforeShadow(t,S,A,R,B,$,null),t.renderBufferDirect(R,null,B,$,S,null),S.onAfterShadow(t,S,A,R,B,$,null)}}const V=S.children;for(let B=0,H=V.length;B<H;B++)E(V[B],A,R,M,y)}function P(S){S.target.removeEventListener("dispose",P);for(const R in c){const M=c[R],y=S.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}function Jw(t){function e(){let F=!1;const ce=new Bt;let ee=null;const te=new Bt(0,0,0,0);return{setMask:function(de){ee!==de&&!F&&(t.colorMask(de,de,de,de),ee=de)},setLocked:function(de){F=de},setClear:function(de,ke,it,Tt,zt){zt===!0&&(de*=Tt,ke*=Tt,it*=Tt),ce.set(de,ke,it,Tt),te.equals(ce)===!1&&(t.clearColor(de,ke,it,Tt),te.copy(ce))},reset:function(){F=!1,ee=null,te.set(-1,0,0,0)}}}function n(){let F=!1,ce=null,ee=null,te=null;return{setTest:function(de){de?he(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(de){ce!==de&&!F&&(t.depthMask(de),ce=de)},setFunc:function(de){if(ee!==de){switch(de){case Ay:t.depthFunc(t.NEVER);break;case Ry:t.depthFunc(t.ALWAYS);break;case Cy:t.depthFunc(t.LESS);break;case ec:t.depthFunc(t.LEQUAL);break;case by:t.depthFunc(t.EQUAL);break;case Py:t.depthFunc(t.GEQUAL);break;case Ly:t.depthFunc(t.GREATER);break;case Dy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=de}},setLocked:function(de){F=de},setClear:function(de){te!==de&&(t.clearDepth(de),te=de)},reset:function(){F=!1,ce=null,ee=null,te=null}}}function i(){let F=!1,ce=null,ee=null,te=null,de=null,ke=null,it=null,Tt=null,zt=null;return{setTest:function(lt){F||(lt?he(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(lt){ce!==lt&&!F&&(t.stencilMask(lt),ce=lt)},setFunc:function(lt,Tn,cn){(ee!==lt||te!==Tn||de!==cn)&&(t.stencilFunc(lt,Tn,cn),ee=lt,te=Tn,de=cn)},setOp:function(lt,Tn,cn){(ke!==lt||it!==Tn||Tt!==cn)&&(t.stencilOp(lt,Tn,cn),ke=lt,it=Tn,Tt=cn)},setLocked:function(lt){F=lt},setClear:function(lt){zt!==lt&&(t.clearStencil(lt),zt=lt)},reset:function(){F=!1,ce=null,ee=null,te=null,de=null,ke=null,it=null,Tt=null,zt=null}}}const r=new e,a=new n,o=new i,s=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],m=null,_=!1,x=null,p=null,f=null,g=null,v=null,E=null,P=null,S=new st(0,0,0),A=0,R=!1,M=null,y=null,C=null,V=null,B=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,G=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(K)[1]),$=G>=1):K.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),$=G>=2);let U=null,Q={};const J=t.getParameter(t.SCISSOR_BOX),le=t.getParameter(t.VIEWPORT),Se=new Bt().fromArray(J),Ve=new Bt().fromArray(le);function q(F,ce,ee,te){const de=new Uint8Array(4),ke=t.createTexture();t.bindTexture(F,ke),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let it=0;it<ee;it++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(ce+it,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return ke}const re={};re[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(t.DEPTH_TEST),a.setFunc(ec),dt(!1),be(zp),he(t.CULL_FACE),pt(pr);function he(F){c[F]!==!0&&(t.enable(F),c[F]=!0)}function ye(F){c[F]!==!1&&(t.disable(F),c[F]=!1)}function We(F,ce){return u[F]!==ce?(t.bindFramebuffer(F,ce),u[F]=ce,F===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ce),F===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ke(F,ce){let ee=h,te=!1;if(F){ee=d.get(ce),ee===void 0&&(ee=[],d.set(ce,ee));const de=F.textures;if(ee.length!==de.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let ke=0,it=de.length;ke<it;ke++)ee[ke]=t.COLOR_ATTACHMENT0+ke;ee.length=de.length,te=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,te=!0);te&&t.drawBuffers(ee)}function et(F){return m!==F?(t.useProgram(F),m=F,!0):!1}const Et={[Ir]:t.FUNC_ADD,[cy]:t.FUNC_SUBTRACT,[uy]:t.FUNC_REVERSE_SUBTRACT};Et[dy]=t.MIN,Et[fy]=t.MAX;const L={[hy]:t.ZERO,[py]:t.ONE,[my]:t.SRC_COLOR,[bd]:t.SRC_ALPHA,[Sy]:t.SRC_ALPHA_SATURATE,[xy]:t.DST_COLOR,[vy]:t.DST_ALPHA,[gy]:t.ONE_MINUS_SRC_COLOR,[Pd]:t.ONE_MINUS_SRC_ALPHA,[yy]:t.ONE_MINUS_DST_COLOR,[_y]:t.ONE_MINUS_DST_ALPHA,[My]:t.CONSTANT_COLOR,[Ey]:t.ONE_MINUS_CONSTANT_COLOR,[wy]:t.CONSTANT_ALPHA,[Ty]:t.ONE_MINUS_CONSTANT_ALPHA};function pt(F,ce,ee,te,de,ke,it,Tt,zt,lt){if(F===pr){_===!0&&(ye(t.BLEND),_=!1);return}if(_===!1&&(he(t.BLEND),_=!0),F!==ly){if(F!==x||lt!==R){if((p!==Ir||v!==Ir)&&(t.blendEquation(t.FUNC_ADD),p=Ir,v=Ir),lt)switch(F){case Va:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kp:t.blendFunc(t.ONE,t.ONE);break;case Bp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Va:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Bp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}f=null,g=null,E=null,P=null,S.set(0,0,0),A=0,x=F,R=lt}return}de=de||ce,ke=ke||ee,it=it||te,(ce!==p||de!==v)&&(t.blendEquationSeparate(Et[ce],Et[de]),p=ce,v=de),(ee!==f||te!==g||ke!==E||it!==P)&&(t.blendFuncSeparate(L[ee],L[te],L[ke],L[it]),f=ee,g=te,E=ke,P=it),(Tt.equals(S)===!1||zt!==A)&&(t.blendColor(Tt.r,Tt.g,Tt.b,zt),S.copy(Tt),A=zt),x=F,R=!1}function ut(F,ce){F.side===Ai?ye(t.CULL_FACE):he(t.CULL_FACE);let ee=F.side===wn;ce&&(ee=!ee),dt(ee),F.blending===Va&&F.transparent===!1?pt(pr):pt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const te=F.stencilWrite;o.setTest(te),te&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),je(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?he(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function dt(F){M!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),M=F)}function be(F){F!==ay?(he(t.CULL_FACE),F!==y&&(F===zp?t.cullFace(t.BACK):F===oy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),y=F}function Pt(F){F!==C&&($&&t.lineWidth(F),C=F)}function je(F,ce,ee){F?(he(t.POLYGON_OFFSET_FILL),(V!==ce||B!==ee)&&(t.polygonOffset(ce,ee),V=ce,B=ee)):ye(t.POLYGON_OFFSET_FILL)}function Xe(F){F?he(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function b(F){F===void 0&&(F=t.TEXTURE0+H-1),U!==F&&(t.activeTexture(F),U=F)}function T(F,ce,ee){ee===void 0&&(U===null?ee=t.TEXTURE0+H-1:ee=U);let te=Q[ee];te===void 0&&(te={type:void 0,texture:void 0},Q[ee]=te),(te.type!==F||te.texture!==ce)&&(U!==ee&&(t.activeTexture(ee),U=ee),t.bindTexture(F,ce||re[F]),te.type=F,te.texture=ce)}function j(){const F=Q[U];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ae(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(F){Se.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Se.copy(F))}function Ae(F){Ve.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Ve.copy(F))}function Ge(F,ce){let ee=l.get(ce);ee===void 0&&(ee=new WeakMap,l.set(ce,ee));let te=ee.get(F);te===void 0&&(te=t.getUniformBlockIndex(ce,F.name),ee.set(F,te))}function qe(F,ce){const te=l.get(ce).get(F);s.get(ce)!==te&&(t.uniformBlockBinding(ce,te,F.__bindingPointIndex),s.set(ce,te))}function xt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},U=null,Q={},u={},d=new WeakMap,h=[],m=null,_=!1,x=null,p=null,f=null,g=null,v=null,E=null,P=null,S=new st(0,0,0),A=0,R=!1,M=null,y=null,C=null,V=null,B=null,Se.set(0,0,t.canvas.width,t.canvas.height),Ve.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:he,disable:ye,bindFramebuffer:We,drawBuffers:Ke,useProgram:et,setBlending:pt,setMaterial:ut,setFlipSided:dt,setCullFace:be,setLineWidth:Pt,setPolygonOffset:je,setScissorTest:Xe,activeTexture:b,bindTexture:T,unbindTexture:j,compressedTexImage2D:ae,compressedTexImage3D:oe,texImage2D:Me,texImage3D:nt,updateUBOMapping:Ge,uniformBlockBinding:qe,texStorage2D:He,texStorage3D:ue,texSubImage2D:ne,texSubImage3D:Fe,compressedTexSubImage2D:pe,compressedTexSubImage3D:_e,scissor:De,viewport:Ae,reset:xt}}function Dm(t,e,n,i){const r=eT(i);switch(n){case bv:return t*e;case Lv:return t*e;case Dv:return t*e*2;case Nv:return t*e/r.components*r.byteLength;case hh:return t*e/r.components*r.byteLength;case Uv:return t*e*2/r.components*r.byteLength;case ph:return t*e*2/r.components*r.byteLength;case Pv:return t*e*3/r.components*r.byteLength;case ti:return t*e*4/r.components*r.byteLength;case mh:return t*e*4/r.components*r.byteLength;case yl:case Sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ml:case El:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Id:case Od:return Math.max(t,16)*Math.max(e,8)/4;case Ud:case Fd:return Math.max(t,8)*Math.max(e,8)/2;case zd:case kd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Bd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case jd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case $d:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case qd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Jd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ef:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case wl:case tf:case nf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Iv:case rf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case af:case of:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function eT(t){switch(t){case ki:case Av:return{byteLength:1,components:1};case os:case Rv:case Li:return{byteLength:2,components:1};case dh:case fh:return{byteLength:2,components:4};case Qr:case uh:case Vn:return{byteLength:4,components:1};case Cv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function tT(t,e,n,i,r,a,o){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,u=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,T){return m?new OffscreenCanvas(b,T):ac("canvas")}function x(b,T,j){let ae=1;const oe=Xe(b);if((oe.width>j||oe.height>j)&&(ae=j/Math.max(oe.width,oe.height)),ae<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ne=Math.floor(ae*oe.width),Fe=Math.floor(ae*oe.height);d===void 0&&(d=_(ne,Fe));const pe=T?_(ne,Fe):d;return pe.width=ne,pe.height=Fe,pe.getContext("2d").drawImage(b,0,0,ne,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ne+"x"+Fe+")."),pe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),b;return b}function p(b){return b.generateMipmaps&&b.minFilter!==yn&&b.minFilter!==an}function f(b){t.generateMipmap(b)}function g(b,T,j,ae,oe=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ne=T;if(T===t.RED&&(j===t.FLOAT&&(ne=t.R32F),j===t.HALF_FLOAT&&(ne=t.R16F),j===t.UNSIGNED_BYTE&&(ne=t.R8)),T===t.RED_INTEGER&&(j===t.UNSIGNED_BYTE&&(ne=t.R8UI),j===t.UNSIGNED_SHORT&&(ne=t.R16UI),j===t.UNSIGNED_INT&&(ne=t.R32UI),j===t.BYTE&&(ne=t.R8I),j===t.SHORT&&(ne=t.R16I),j===t.INT&&(ne=t.R32I)),T===t.RG&&(j===t.FLOAT&&(ne=t.RG32F),j===t.HALF_FLOAT&&(ne=t.RG16F),j===t.UNSIGNED_BYTE&&(ne=t.RG8)),T===t.RG_INTEGER&&(j===t.UNSIGNED_BYTE&&(ne=t.RG8UI),j===t.UNSIGNED_SHORT&&(ne=t.RG16UI),j===t.UNSIGNED_INT&&(ne=t.RG32UI),j===t.BYTE&&(ne=t.RG8I),j===t.SHORT&&(ne=t.RG16I),j===t.INT&&(ne=t.RG32I)),T===t.RGB&&j===t.UNSIGNED_INT_5_9_9_9_REV&&(ne=t.RGB9_E5),T===t.RGBA){const Fe=oe?tc:ft.getTransfer(ae);j===t.FLOAT&&(ne=t.RGBA32F),j===t.HALF_FLOAT&&(ne=t.RGBA16F),j===t.UNSIGNED_BYTE&&(ne=Fe===St?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function v(b,T){let j;return b?T===null||T===Qr||T===eo?j=t.DEPTH24_STENCIL8:T===Vn?j=t.DEPTH32F_STENCIL8:T===os&&(j=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Qr||T===eo?j=t.DEPTH_COMPONENT24:T===Vn?j=t.DEPTH_COMPONENT32F:T===os&&(j=t.DEPTH_COMPONENT16),j}function E(b,T){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==yn&&b.minFilter!==an?Math.log2(Math.max(T.width,T.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?T.mipmaps.length:1}function P(b){const T=b.target;T.removeEventListener("dispose",P),A(T),T.isVideoTexture&&u.delete(T)}function S(b){const T=b.target;T.removeEventListener("dispose",S),M(T)}function A(b){const T=i.get(b);if(T.__webglInit===void 0)return;const j=b.source,ae=h.get(j);if(ae){const oe=ae[T.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&R(b),Object.keys(ae).length===0&&h.delete(j)}i.remove(b)}function R(b){const T=i.get(b);t.deleteTexture(T.__webglTexture);const j=b.source,ae=h.get(j);delete ae[T.__cacheKey],o.memory.textures--}function M(b){const T=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(T.__webglFramebuffer[ae]))for(let oe=0;oe<T.__webglFramebuffer[ae].length;oe++)t.deleteFramebuffer(T.__webglFramebuffer[ae][oe]);else t.deleteFramebuffer(T.__webglFramebuffer[ae]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[ae])}else{if(Array.isArray(T.__webglFramebuffer))for(let ae=0;ae<T.__webglFramebuffer.length;ae++)t.deleteFramebuffer(T.__webglFramebuffer[ae]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ae=0;ae<T.__webglColorRenderbuffer.length;ae++)T.__webglColorRenderbuffer[ae]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[ae]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const j=b.textures;for(let ae=0,oe=j.length;ae<oe;ae++){const ne=i.get(j[ae]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(j[ae])}i.remove(b)}let y=0;function C(){y=0}function V(){const b=y;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),y+=1,b}function B(b){const T=[];return T.push(b.wrapS),T.push(b.wrapT),T.push(b.wrapR||0),T.push(b.magFilter),T.push(b.minFilter),T.push(b.anisotropy),T.push(b.internalFormat),T.push(b.format),T.push(b.type),T.push(b.generateMipmaps),T.push(b.premultiplyAlpha),T.push(b.flipY),T.push(b.unpackAlignment),T.push(b.colorSpace),T.join()}function H(b,T){const j=i.get(b);if(b.isVideoTexture&&Pt(b),b.isRenderTargetTexture===!1&&b.version>0&&j.__version!==b.version){const ae=b.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(j,b,T);return}}n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+T)}function $(b,T){const j=i.get(b);if(b.version>0&&j.__version!==b.version){Ve(j,b,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+T)}function G(b,T){const j=i.get(b);if(b.version>0&&j.__version!==b.version){Ve(j,b,T);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+T)}function K(b,T){const j=i.get(b);if(b.version>0&&j.__version!==b.version){q(j,b,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+T)}const U={[as]:t.REPEAT,[Pi]:t.CLAMP_TO_EDGE,[Nd]:t.MIRRORED_REPEAT},Q={[yn]:t.NEAREST,[Hy]:t.NEAREST_MIPMAP_NEAREST,[zs]:t.NEAREST_MIPMAP_LINEAR,[an]:t.LINEAR,[ru]:t.LINEAR_MIPMAP_NEAREST,[ar]:t.LINEAR_MIPMAP_LINEAR},J={[jy]:t.NEVER,[Zy]:t.ALWAYS,[Xy]:t.LESS,[Ov]:t.LEQUAL,[Yy]:t.EQUAL,[Ky]:t.GEQUAL,[$y]:t.GREATER,[qy]:t.NOTEQUAL};function le(b,T){if(T.type===Vn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===an||T.magFilter===ru||T.magFilter===zs||T.magFilter===ar||T.minFilter===an||T.minFilter===ru||T.minFilter===zs||T.minFilter===ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,U[T.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,U[T.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,U[T.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,Q[T.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Q[T.minFilter]),T.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,J[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===yn||T.minFilter!==zs&&T.minFilter!==ar||T.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Se(b,T){let j=!1;b.__webglInit===void 0&&(b.__webglInit=!0,T.addEventListener("dispose",P));const ae=T.source;let oe=h.get(ae);oe===void 0&&(oe={},h.set(ae,oe));const ne=B(T);if(ne!==b.__cacheKey){oe[ne]===void 0&&(oe[ne]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,j=!0),oe[ne].usedTimes++;const Fe=oe[b.__cacheKey];Fe!==void 0&&(oe[b.__cacheKey].usedTimes--,Fe.usedTimes===0&&R(T)),b.__cacheKey=ne,b.__webglTexture=oe[ne].texture}return j}function Ve(b,T,j){let ae=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ae=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ae=t.TEXTURE_3D);const oe=Se(b,T),ne=T.source;n.bindTexture(ae,b.__webglTexture,t.TEXTURE0+j);const Fe=i.get(ne);if(ne.version!==Fe.__version||oe===!0){n.activeTexture(t.TEXTURE0+j);const pe=ft.getPrimaries(ft.workingColorSpace),_e=T.colorSpace===nr?null:ft.getPrimaries(T.colorSpace),He=T.colorSpace===nr||pe===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ue=x(T.image,!1,r.maxTextureSize);ue=je(T,ue);const Me=a.convert(T.format,T.colorSpace),nt=a.convert(T.type);let De=g(T.internalFormat,Me,nt,T.colorSpace,T.isVideoTexture);le(ae,T);let Ae;const Ge=T.mipmaps,qe=T.isVideoTexture!==!0,xt=Fe.__version===void 0||oe===!0,F=ne.dataReady,ce=E(T,ue);if(T.isDepthTexture)De=v(T.format===to,T.type),xt&&(qe?n.texStorage2D(t.TEXTURE_2D,1,De,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,De,ue.width,ue.height,0,Me,nt,null));else if(T.isDataTexture)if(Ge.length>0){qe&&xt&&n.texStorage2D(t.TEXTURE_2D,ce,De,Ge[0].width,Ge[0].height);for(let ee=0,te=Ge.length;ee<te;ee++)Ae=Ge[ee],qe?F&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,Ae.width,Ae.height,Me,nt,Ae.data):n.texImage2D(t.TEXTURE_2D,ee,De,Ae.width,Ae.height,0,Me,nt,Ae.data);T.generateMipmaps=!1}else qe?(xt&&n.texStorage2D(t.TEXTURE_2D,ce,De,ue.width,ue.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue.width,ue.height,Me,nt,ue.data)):n.texImage2D(t.TEXTURE_2D,0,De,ue.width,ue.height,0,Me,nt,ue.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){qe&&xt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,De,Ge[0].width,Ge[0].height,ue.depth);for(let ee=0,te=Ge.length;ee<te;ee++)if(Ae=Ge[ee],T.format!==ti)if(Me!==null)if(qe){if(F)if(T.layerUpdates.size>0){const de=Dm(Ae.width,Ae.height,T.format,T.type);for(const ke of T.layerUpdates){const it=Ae.data.subarray(ke*de/Ae.data.BYTES_PER_ELEMENT,(ke+1)*de/Ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,ke,Ae.width,Ae.height,1,Me,it,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,Ae.width,Ae.height,ue.depth,Me,Ae.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,De,Ae.width,Ae.height,ue.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,Ae.width,Ae.height,ue.depth,Me,nt,Ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,De,Ae.width,Ae.height,ue.depth,0,Me,nt,Ae.data)}else{qe&&xt&&n.texStorage2D(t.TEXTURE_2D,ce,De,Ge[0].width,Ge[0].height);for(let ee=0,te=Ge.length;ee<te;ee++)Ae=Ge[ee],T.format!==ti?Me!==null?qe?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,Ae.width,Ae.height,Me,Ae.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,De,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?F&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,Ae.width,Ae.height,Me,nt,Ae.data):n.texImage2D(t.TEXTURE_2D,ee,De,Ae.width,Ae.height,0,Me,nt,Ae.data)}else if(T.isDataArrayTexture)if(qe){if(xt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,De,ue.width,ue.height,ue.depth),F)if(T.layerUpdates.size>0){const ee=Dm(ue.width,ue.height,T.format,T.type);for(const te of T.layerUpdates){const de=ue.data.subarray(te*ee/ue.data.BYTES_PER_ELEMENT,(te+1)*ee/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,ue.width,ue.height,1,Me,nt,de)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Me,nt,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,ue.width,ue.height,ue.depth,0,Me,nt,ue.data);else if(T.isData3DTexture)qe?(xt&&n.texStorage3D(t.TEXTURE_3D,ce,De,ue.width,ue.height,ue.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Me,nt,ue.data)):n.texImage3D(t.TEXTURE_3D,0,De,ue.width,ue.height,ue.depth,0,Me,nt,ue.data);else if(T.isFramebufferTexture){if(xt)if(qe)n.texStorage2D(t.TEXTURE_2D,ce,De,ue.width,ue.height);else{let ee=ue.width,te=ue.height;for(let de=0;de<ce;de++)n.texImage2D(t.TEXTURE_2D,de,De,ee,te,0,Me,nt,null),ee>>=1,te>>=1}}else if(Ge.length>0){if(qe&&xt){const ee=Xe(Ge[0]);n.texStorage2D(t.TEXTURE_2D,ce,De,ee.width,ee.height)}for(let ee=0,te=Ge.length;ee<te;ee++)Ae=Ge[ee],qe?F&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,Me,nt,Ae):n.texImage2D(t.TEXTURE_2D,ee,De,Me,nt,Ae);T.generateMipmaps=!1}else if(qe){if(xt){const ee=Xe(ue);n.texStorage2D(t.TEXTURE_2D,ce,De,ee.width,ee.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,nt,ue)}else n.texImage2D(t.TEXTURE_2D,0,De,Me,nt,ue);p(T)&&f(ae),Fe.__version=ne.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function q(b,T,j){if(T.image.length!==6)return;const ae=Se(b,T),oe=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+j);const ne=i.get(oe);if(oe.version!==ne.__version||ae===!0){n.activeTexture(t.TEXTURE0+j);const Fe=ft.getPrimaries(ft.workingColorSpace),pe=T.colorSpace===nr?null:ft.getPrimaries(T.colorSpace),_e=T.colorSpace===nr||Fe===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const He=T.isCompressedTexture||T.image[0].isCompressedTexture,ue=T.image[0]&&T.image[0].isDataTexture,Me=[];for(let te=0;te<6;te++)!He&&!ue?Me[te]=x(T.image[te],!0,r.maxCubemapSize):Me[te]=ue?T.image[te].image:T.image[te],Me[te]=je(T,Me[te]);const nt=Me[0],De=a.convert(T.format,T.colorSpace),Ae=a.convert(T.type),Ge=g(T.internalFormat,De,Ae,T.colorSpace),qe=T.isVideoTexture!==!0,xt=ne.__version===void 0||ae===!0,F=oe.dataReady;let ce=E(T,nt);le(t.TEXTURE_CUBE_MAP,T);let ee;if(He){qe&&xt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,Ge,nt.width,nt.height);for(let te=0;te<6;te++){ee=Me[te].mipmaps;for(let de=0;de<ee.length;de++){const ke=ee[de];T.format!==ti?De!==null?qe?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,de,0,0,ke.width,ke.height,De,ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,de,Ge,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,de,0,0,ke.width,ke.height,De,Ae,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,de,Ge,ke.width,ke.height,0,De,Ae,ke.data)}}}else{if(ee=T.mipmaps,qe&&xt){ee.length>0&&ce++;const te=Xe(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,Ge,te.width,te.height)}for(let te=0;te<6;te++)if(ue){qe?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Me[te].width,Me[te].height,De,Ae,Me[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ge,Me[te].width,Me[te].height,0,De,Ae,Me[te].data);for(let de=0;de<ee.length;de++){const it=ee[de].image[te].image;qe?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,de+1,0,0,it.width,it.height,De,Ae,it.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,de+1,Ge,it.width,it.height,0,De,Ae,it.data)}}else{qe?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,De,Ae,Me[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ge,De,Ae,Me[te]);for(let de=0;de<ee.length;de++){const ke=ee[de];qe?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,de+1,0,0,De,Ae,ke.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,de+1,Ge,De,Ae,ke.image[te])}}}p(T)&&f(t.TEXTURE_CUBE_MAP),ne.__version=oe.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function re(b,T,j,ae,oe,ne){const Fe=a.convert(j.format,j.colorSpace),pe=a.convert(j.type),_e=g(j.internalFormat,Fe,pe,j.colorSpace);if(!i.get(T).__hasExternalTextures){const ue=Math.max(1,T.width>>ne),Me=Math.max(1,T.height>>ne);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,ne,_e,ue,Me,T.depth,0,Fe,pe,null):n.texImage2D(oe,ne,_e,ue,Me,0,Fe,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),be(T)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,oe,i.get(j).__webglTexture,0,dt(T)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ae,oe,i.get(j).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(b,T,j){if(t.bindRenderbuffer(t.RENDERBUFFER,b),T.depthBuffer){const ae=T.depthTexture,oe=ae&&ae.isDepthTexture?ae.type:null,ne=v(T.stencilBuffer,oe),Fe=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=dt(T);be(T)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,ne,T.width,T.height):j?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,ne,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ne,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Fe,t.RENDERBUFFER,b)}else{const ae=T.textures;for(let oe=0;oe<ae.length;oe++){const ne=ae[oe],Fe=a.convert(ne.format,ne.colorSpace),pe=a.convert(ne.type),_e=g(ne.internalFormat,Fe,pe,ne.colorSpace),He=dt(T);j&&be(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,He,_e,T.width,T.height):be(T)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,He,_e,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,_e,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ye(b,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),H(T.depthTexture,0);const ae=i.get(T.depthTexture).__webglTexture,oe=dt(T);if(T.depthTexture.format===Ga)be(T)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0);else if(T.depthTexture.format===to)be(T)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function We(b){const T=i.get(b),j=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!T.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");ye(T.__webglFramebuffer,b)}else if(j){T.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[ae]),T.__webglDepthbuffer[ae]=t.createRenderbuffer(),he(T.__webglDepthbuffer[ae],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),he(T.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ke(b,T,j){const ae=i.get(b);T!==void 0&&re(ae.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),j!==void 0&&We(b)}function et(b){const T=b.texture,j=i.get(b),ae=i.get(T);b.addEventListener("dispose",S);const oe=b.textures,ne=b.isWebGLCubeRenderTarget===!0,Fe=oe.length>1;if(Fe||(ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture()),ae.__version=T.version,o.memory.textures++),ne){j.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[pe]=[];for(let _e=0;_e<T.mipmaps.length;_e++)j.__webglFramebuffer[pe][_e]=t.createFramebuffer()}else j.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let pe=0;pe<T.mipmaps.length;pe++)j.__webglFramebuffer[pe]=t.createFramebuffer()}else j.__webglFramebuffer=t.createFramebuffer();if(Fe)for(let pe=0,_e=oe.length;pe<_e;pe++){const He=i.get(oe[pe]);He.__webglTexture===void 0&&(He.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&be(b)===!1){j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let pe=0;pe<oe.length;pe++){const _e=oe[pe];j.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[pe]);const He=a.convert(_e.format,_e.colorSpace),ue=a.convert(_e.type),Me=g(_e.internalFormat,He,ue,_e.colorSpace,b.isXRRenderTarget===!0),nt=dt(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,nt,Me,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,j.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),he(j.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),le(t.TEXTURE_CUBE_MAP,T);for(let pe=0;pe<6;pe++)if(T.mipmaps&&T.mipmaps.length>0)for(let _e=0;_e<T.mipmaps.length;_e++)re(j.__webglFramebuffer[pe][_e],b,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,_e);else re(j.__webglFramebuffer[pe],b,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);p(T)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Fe){for(let pe=0,_e=oe.length;pe<_e;pe++){const He=oe[pe],ue=i.get(He);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),le(t.TEXTURE_2D,He),re(j.__webglFramebuffer,b,He,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),p(He)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(pe=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,ae.__webglTexture),le(pe,T),T.mipmaps&&T.mipmaps.length>0)for(let _e=0;_e<T.mipmaps.length;_e++)re(j.__webglFramebuffer[_e],b,T,t.COLOR_ATTACHMENT0,pe,_e);else re(j.__webglFramebuffer,b,T,t.COLOR_ATTACHMENT0,pe,0);p(T)&&f(pe),n.unbindTexture()}b.depthBuffer&&We(b)}function Et(b){const T=b.textures;for(let j=0,ae=T.length;j<ae;j++){const oe=T[j];if(p(oe)){const ne=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Fe=i.get(oe).__webglTexture;n.bindTexture(ne,Fe),f(ne),n.unbindTexture()}}}const L=[],pt=[];function ut(b){if(b.samples>0){if(be(b)===!1){const T=b.textures,j=b.width,ae=b.height;let oe=t.COLOR_BUFFER_BIT;const ne=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Fe=i.get(b),pe=T.length>1;if(pe)for(let _e=0;_e<T.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let _e=0;_e<T.length;_e++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Fe.__webglColorRenderbuffer[_e]);const He=i.get(T[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,He,0)}t.blitFramebuffer(0,0,j,ae,0,0,j,ae,oe,t.NEAREST),l===!0&&(L.length=0,pt.length=0,L.push(t.COLOR_ATTACHMENT0+_e),b.depthBuffer&&b.resolveDepthBuffer===!1&&(L.push(ne),pt.push(ne),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,pt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,L))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let _e=0;_e<T.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,Fe.__webglColorRenderbuffer[_e]);const He=i.get(T[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,He,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const T=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function dt(b){return Math.min(r.maxSamples,b.samples)}function be(b){const T=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Pt(b){const T=o.render.frame;u.get(b)!==T&&(u.set(b,T),b.update())}function je(b,T){const j=b.colorSpace,ae=b.format,oe=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||j!==Hi&&j!==nr&&(ft.getTransfer(j)===St?(ae!==ti||oe!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),T}function Xe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=C,this.setTexture2D=H,this.setTexture2DArray=$,this.setTexture3D=G,this.setTextureCube=K,this.rebindTextures=Ke,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=re,this.useMultisampledRTT=be}function nT(t,e){function n(i,r=nr){let a;const o=ft.getTransfer(r);if(i===ki)return t.UNSIGNED_BYTE;if(i===dh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===fh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Cv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Av)return t.BYTE;if(i===Rv)return t.SHORT;if(i===os)return t.UNSIGNED_SHORT;if(i===uh)return t.INT;if(i===Qr)return t.UNSIGNED_INT;if(i===Vn)return t.FLOAT;if(i===Li)return t.HALF_FLOAT;if(i===bv)return t.ALPHA;if(i===Pv)return t.RGB;if(i===ti)return t.RGBA;if(i===Lv)return t.LUMINANCE;if(i===Dv)return t.LUMINANCE_ALPHA;if(i===Ga)return t.DEPTH_COMPONENT;if(i===to)return t.DEPTH_STENCIL;if(i===Nv)return t.RED;if(i===hh)return t.RED_INTEGER;if(i===Uv)return t.RG;if(i===ph)return t.RG_INTEGER;if(i===mh)return t.RGBA_INTEGER;if(i===yl||i===Sl||i===Ml||i===El)if(o===St)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===yl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ml)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===El)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===yl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ml)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===El)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ud||i===Id||i===Fd||i===Od)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Ud)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Id)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Od)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zd||i===kd||i===Bd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===zd||i===kd)return o===St?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Bd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Hd||i===Vd||i===Gd||i===Wd||i===jd||i===Xd||i===Yd||i===$d||i===qd||i===Kd||i===Zd||i===Qd||i===Jd||i===ef)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Hd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$d)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ef)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wl||i===tf||i===nf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===wl)return o===St?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Iv||i===rf||i===af||i===of)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===wl)return a.COMPRESSED_RED_RGTC1_EXT;if(i===rf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===af)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===of)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===eo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class iT extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class sl extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rT={type:"move"};class Lu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),f=this._getHandJoint(c,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(rT)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new sl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const aT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oT=`
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

}`;class sT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new on,a=e.properties.get(r);a.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new yr({vertexShader:aT,fragmentShader:oT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $t(new Tc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lT extends so{constructor(e,n){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,_=null;const x=new sT,p=n.getContextAttributes();let f=null,g=null;const v=[],E=[],P=new ot;let S=null;const A=new Bn;A.layers.enable(1),A.viewport=new Bt;const R=new Bn;R.layers.enable(2),R.viewport=new Bt;const M=[A,R],y=new iT;y.layers.enable(1),y.layers.enable(2);let C=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let re=v[q];return re===void 0&&(re=new Lu,v[q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(q){let re=v[q];return re===void 0&&(re=new Lu,v[q]=re),re.getGripSpace()},this.getHand=function(q){let re=v[q];return re===void 0&&(re=new Lu,v[q]=re),re.getHandSpace()};function B(q){const re=E.indexOf(q.inputSource);if(re===-1)return;const he=v[re];he!==void 0&&(he.update(q.inputSource,q.frame,c||o),he.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",$);for(let q=0;q<v.length;q++){const re=E[q];re!==null&&(E[q]=null,v[q].disconnect(re))}C=null,V=null,x.reset(),e.setRenderTarget(f),m=null,h=null,d=null,r=null,g=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",H),r.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const re={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new Jr(m.framebufferWidth,m.framebufferHeight,{format:ti,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let re=null,he=null,ye=null;p.depth&&(ye=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=p.stencil?to:Ga,he=p.stencil?eo:Qr);const We={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:a};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(We),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new Jr(h.textureWidth,h.textureHeight,{format:ti,type:ki,depthTexture:new Qv(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(q){for(let re=0;re<q.removed.length;re++){const he=q.removed[re],ye=E.indexOf(he);ye>=0&&(E[ye]=null,v[ye].disconnect(he))}for(let re=0;re<q.added.length;re++){const he=q.added[re];let ye=E.indexOf(he);if(ye===-1){for(let Ke=0;Ke<v.length;Ke++)if(Ke>=E.length){E.push(he),ye=Ke;break}else if(E[Ke]===null){E[Ke]=he,ye=Ke;break}if(ye===-1)break}const We=v[ye];We&&We.connect(he)}}const G=new Y,K=new Y;function U(q,re,he){G.setFromMatrixPosition(re.matrixWorld),K.setFromMatrixPosition(he.matrixWorld);const ye=G.distanceTo(K),We=re.projectionMatrix.elements,Ke=he.projectionMatrix.elements,et=We[14]/(We[10]-1),Et=We[14]/(We[10]+1),L=(We[9]+1)/We[5],pt=(We[9]-1)/We[5],ut=(We[8]-1)/We[0],dt=(Ke[8]+1)/Ke[0],be=et*ut,Pt=et*dt,je=ye/(-ut+dt),Xe=je*-ut;re.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Xe),q.translateZ(je),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const b=et+je,T=Et+je,j=be-Xe,ae=Pt+(ye-Xe),oe=L*Et/T*b,ne=pt*Et/T*b;q.projectionMatrix.makePerspective(j,ae,oe,ne,b,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Q(q,re){re===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(re.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;x.texture!==null&&(q.near=x.depthNear,q.far=x.depthFar),y.near=R.near=A.near=q.near,y.far=R.far=A.far=q.far,(C!==y.near||V!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,V=y.far,A.near=C,A.far=V,R.near=C,R.far=V,A.updateProjectionMatrix(),R.updateProjectionMatrix(),q.updateProjectionMatrix());const re=q.parent,he=y.cameras;Q(y,re);for(let ye=0;ye<he.length;ye++)Q(he[ye],re);he.length===2?U(y,A,R):y.projectionMatrix.copy(A.projectionMatrix),J(q,y,re)};function J(q,re,he){he===null?q.matrix.copy(re.matrixWorld):(q.matrix.copy(he.matrixWorld),q.matrix.invert(),q.matrix.multiply(re.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=sf*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let le=null;function Se(q,re){if(u=re.getViewerPose(c||o),_=re,u!==null){const he=u.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let ye=!1;he.length!==y.cameras.length&&(y.cameras.length=0,ye=!0);for(let Ke=0;Ke<he.length;Ke++){const et=he[Ke];let Et=null;if(m!==null)Et=m.getViewport(et);else{const pt=d.getViewSubImage(h,et);Et=pt.viewport,Ke===0&&(e.setRenderTargetTextures(g,pt.colorTexture,h.ignoreDepthValues?void 0:pt.depthStencilTexture),e.setRenderTarget(g))}let L=M[Ke];L===void 0&&(L=new Bn,L.layers.enable(Ke),L.viewport=new Bt,M[Ke]=L),L.matrix.fromArray(et.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(et.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Et.x,Et.y,Et.width,Et.height),Ke===0&&(y.matrix.copy(L.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ye===!0&&y.cameras.push(L)}const We=r.enabledFeatures;if(We&&We.includes("depth-sensing")){const Ke=d.getDepthInformation(he[0]);Ke&&Ke.isValid&&Ke.texture&&x.init(e,Ke,r.renderState)}}for(let he=0;he<v.length;he++){const ye=E[he],We=v[he];ye!==null&&We!==void 0&&We.update(ye,re,c||o)}le&&le(q,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),_=null}const Ve=new Kv;Ve.setAnimationLoop(Se),this.setAnimationLoop=function(q){le=q},this.dispose=function(){}}}const Pr=new mi,cT=new Nt;function uT(t,e){function n(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Yv(t)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,g,v,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(p,f):f.isMeshToonMaterial?(a(p,f),d(p,f)):f.isMeshPhongMaterial?(a(p,f),u(p,f)):f.isMeshStandardMaterial?(a(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,E)):f.isMeshMatcapMaterial?(a(p,f),_(p,f)):f.isMeshDepthMaterial?a(p,f):f.isMeshDistanceMaterial?(a(p,f),x(p,f)):f.isMeshNormalMaterial?a(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&s(p,f)):f.isPointsMaterial?l(p,f,g,v):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===wn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===wn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const g=e.get(f),v=g.envMap,E=g.envMapRotation;v&&(p.envMap.value=v,Pr.copy(E),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),p.envMapRotation.value.setFromMatrix4(cT.makeRotationFromEuler(Pr)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform))}function s(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,g,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*g,p.scale.value=v*.5,f.map&&(p.map.value=f.map,n(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,g){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===wn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){const g=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dT(t,e,n,i){let r={},a={},o=[];const s=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const E=v.program;i.uniformBlockBinding(g,E)}function c(g,v){let E=r[g.id];E===void 0&&(_(g),E=u(g),r[g.id]=E,g.addEventListener("dispose",p));const P=v.program;i.updateUBOMapping(g,P);const S=e.render.frame;a[g.id]!==S&&(h(g),a[g.id]=S)}function u(g){const v=d();g.__bindingPointIndex=v;const E=t.createBuffer(),P=g.__size,S=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,P,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,E),E}function d(){for(let g=0;g<s;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=r[g.id],E=g.uniforms,P=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let S=0,A=E.length;S<A;S++){const R=Array.isArray(E[S])?E[S]:[E[S]];for(let M=0,y=R.length;M<y;M++){const C=R[M];if(m(C,S,M,P)===!0){const V=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let H=0;for(let $=0;$<B.length;$++){const G=B[$],K=x(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,V+H,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,H),H+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,v,E,P){const S=g.value,A=v+"_"+E;if(P[A]===void 0)return typeof S=="number"||typeof S=="boolean"?P[A]=S:P[A]=S.clone(),!0;{const R=P[A];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return P[A]=S,!0}else if(R.equals(S)===!1)return R.copy(S),!0}return!1}function _(g){const v=g.uniforms;let E=0;const P=16;for(let A=0,R=v.length;A<R;A++){const M=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,C=M.length;y<C;y++){const V=M[y],B=Array.isArray(V.value)?V.value:[V.value];for(let H=0,$=B.length;H<$;H++){const G=B[H],K=x(G),U=E%P;U!==0&&P-U<K.boundary&&(E+=P-U),V.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=E,E+=K.storage}}}const S=E%P;return S>0&&(E+=P-S),g.__size=E,g.__cache={},this}function x(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function p(g){const v=g.target;v.removeEventListener("dispose",p);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete a[v.id]}function f(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},a={}}return{bind:l,update:c,dispose:f}}class fT{constructor(e={}){const{canvas:n=Jy(),context:i=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const f=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=li,this.toneMapping=mr,this.toneMappingExposure=1;const v=this;let E=!1,P=0,S=0,A=null,R=-1,M=null;const y=new Bt,C=new Bt;let V=null;const B=new st(0);let H=0,$=n.width,G=n.height,K=1,U=null,Q=null;const J=new Bt(0,0,$,G),le=new Bt(0,0,$,G);let Se=!1;const Ve=new _h;let q=!1,re=!1;const he=new Nt,ye=new Y,We=new Bt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function Et(){return A===null?K:1}let L=i;function pt(w,D){return n.getContext(w,D)}try{const w={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ch}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",te,!1),n.addEventListener("webglcontextcreationerror",de,!1),L===null){const D="webgl2";if(L=pt(D,w),L===null)throw pt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ut,dt,be,Pt,je,Xe,b,T,j,ae,oe,ne,Fe,pe,_e,He,ue,Me,nt,De,Ae,Ge,qe,xt;function F(){ut=new x2(L),ut.init(),Ge=new nT(L,ut),dt=new h2(L,ut,e,Ge),be=new Jw(L),Pt=new M2(L),je=new kw,Xe=new tT(L,ut,be,je,dt,Ge,Pt),b=new m2(v),T=new _2(v),j=new bS(L),qe=new d2(L,j),ae=new y2(L,j,Pt,qe),oe=new w2(L,ae,j,Pt),nt=new E2(L,dt,Xe),He=new p2(je),ne=new zw(v,b,T,ut,dt,qe,He),Fe=new uT(v,je),pe=new Hw,_e=new Yw(ut),Me=new u2(v,b,T,be,oe,h,l),ue=new Qw(v,oe,dt),xt=new dT(L,Pt,dt,be),De=new f2(L,ut,Pt),Ae=new S2(L,ut,Pt),Pt.programs=ne.programs,v.capabilities=dt,v.extensions=ut,v.properties=je,v.renderLists=pe,v.shadowMap=ue,v.state=be,v.info=Pt}F();const ce=new lT(v,L);this.xr=ce,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=ut.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ut.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(w){w!==void 0&&(K=w,this.setSize($,G,!1))},this.getSize=function(w){return w.set($,G)},this.setSize=function(w,D,z=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,G=D,n.width=Math.floor(w*K),n.height=Math.floor(D*K),z===!0&&(n.style.width=w+"px",n.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set($*K,G*K).floor()},this.setDrawingBufferSize=function(w,D,z){$=w,G=D,K=z,n.width=Math.floor(w*z),n.height=Math.floor(D*z),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,D,z,k){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,D,z,k),be.viewport(y.copy(J).multiplyScalar(K).round())},this.getScissor=function(w){return w.copy(le)},this.setScissor=function(w,D,z,k){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,D,z,k),be.scissor(C.copy(le).multiplyScalar(K).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(w){be.setScissorTest(Se=w)},this.setOpaqueSort=function(w){U=w},this.setTransparentSort=function(w){Q=w},this.getClearColor=function(w){return w.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(w=!0,D=!0,z=!0){let k=0;if(w){let I=!1;if(A!==null){const ie=A.texture.format;I=ie===mh||ie===ph||ie===hh}if(I){const ie=A.texture.type,me=ie===ki||ie===Qr||ie===os||ie===eo||ie===dh||ie===fh,Ee=Me.getClearColor(),Te=Me.getClearAlpha(),Ue=Ee.r,Oe=Ee.g,Pe=Ee.b;me?(m[0]=Ue,m[1]=Oe,m[2]=Pe,m[3]=Te,L.clearBufferuiv(L.COLOR,0,m)):(_[0]=Ue,_[1]=Oe,_[2]=Pe,_[3]=Te,L.clearBufferiv(L.COLOR,0,_))}else k|=L.COLOR_BUFFER_BIT}D&&(k|=L.DEPTH_BUFFER_BIT),z&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",te,!1),n.removeEventListener("webglcontextcreationerror",de,!1),pe.dispose(),_e.dispose(),je.dispose(),b.dispose(),T.dispose(),oe.dispose(),qe.dispose(),xt.dispose(),ne.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",cn),ce.removeEventListener("sessionend",ys),gi.stop()};function ee(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=Pt.autoReset,D=ue.enabled,z=ue.autoUpdate,k=ue.needsUpdate,I=ue.type;F(),Pt.autoReset=w,ue.enabled=D,ue.autoUpdate=z,ue.needsUpdate=k,ue.type=I}function de(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ke(w){const D=w.target;D.removeEventListener("dispose",ke),it(D)}function it(w){Tt(w),je.remove(w)}function Tt(w){const D=je.get(w).programs;D!==void 0&&(D.forEach(function(z){ne.releaseProgram(z)}),w.isShaderMaterial&&ne.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,z,k,I,ie){D===null&&(D=Ke);const me=I.isMesh&&I.matrixWorld.determinant()<0,Ee=Ye(w,D,z,k,I);be.setMaterial(k,me);let Te=z.index,Ue=1;if(k.wireframe===!0){if(Te=ae.getWireframeAttribute(z),Te===void 0)return;Ue=2}const Oe=z.drawRange,Pe=z.attributes.position;let rt=Oe.start*Ue,mt=(Oe.start+Oe.count)*Ue;ie!==null&&(rt=Math.max(rt,ie.start*Ue),mt=Math.min(mt,(ie.start+ie.count)*Ue)),Te!==null?(rt=Math.max(rt,0),mt=Math.min(mt,Te.count)):Pe!=null&&(rt=Math.max(rt,0),mt=Math.min(mt,Pe.count));const gt=mt-rt;if(gt<0||gt===1/0)return;qe.setup(I,k,Ee,z,Te);let Ie,ze=De;if(Te!==null&&(Ie=j.get(Te),ze=Ae,ze.setIndex(Ie)),I.isMesh)k.wireframe===!0?(be.setLineWidth(k.wireframeLinewidth*Et()),ze.setMode(L.LINES)):ze.setMode(L.TRIANGLES);else if(I.isLine){let we=k.linewidth;we===void 0&&(we=1),be.setLineWidth(we*Et()),I.isLineSegments?ze.setMode(L.LINES):I.isLineLoop?ze.setMode(L.LINE_LOOP):ze.setMode(L.LINE_STRIP)}else I.isPoints?ze.setMode(L.POINTS):I.isSprite&&ze.setMode(L.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)ze.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))ze.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const we=I._multiDrawStarts,$e=I._multiDrawCounts,Ze=I._multiDrawCount,gn=Te?j.get(Te).bytesPerElement:1,Vi=je.get(k).currentProgram.getUniforms();for(let An=0;An<Ze;An++)Vi.setValue(L,"_gl_DrawID",An),ze.render(we[An]/gn,$e[An])}else if(I.isInstancedMesh)ze.renderInstances(rt,gt,I.count);else if(z.isInstancedBufferGeometry){const we=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,$e=Math.min(z.instanceCount,we);ze.renderInstances(rt,gt,$e)}else ze.render(rt,gt)};function zt(w,D,z){w.transparent===!0&&w.side===Ai&&w.forceSinglePass===!1?(w.side=wn,w.needsUpdate=!0,Ce(w,D,z),w.side=xr,w.needsUpdate=!0,Ce(w,D,z),w.side=Ai):Ce(w,D,z)}this.compile=function(w,D,z=null){z===null&&(z=w),p=_e.get(z),p.init(D),g.push(p),z.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),w!==z&&w.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const k=new Set;return w.traverse(function(I){const ie=I.material;if(ie)if(Array.isArray(ie))for(let me=0;me<ie.length;me++){const Ee=ie[me];zt(Ee,z,I),k.add(Ee)}else zt(ie,z,I),k.add(ie)}),g.pop(),p=null,k},this.compileAsync=function(w,D,z=null){const k=this.compile(w,D,z);return new Promise(I=>{function ie(){if(k.forEach(function(me){je.get(me).currentProgram.isReady()&&k.delete(me)}),k.size===0){I(w);return}setTimeout(ie,10)}ut.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let lt=null;function Tn(w){lt&&lt(w)}function cn(){gi.stop()}function ys(){gi.start()}const gi=new Kv;gi.setAnimationLoop(Tn),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(w){lt=w,ce.setAnimationLoop(w),w===null?gi.stop():gi.start()},ce.addEventListener("sessionstart",cn),ce.addEventListener("sessionend",ys),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(D),D=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,D,A),p=_e.get(w,g.length),p.init(D),g.push(p),he.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ve.setFromProjectionMatrix(he),re=this.localClippingEnabled,q=He.init(this.clippingPlanes,re),x=pe.get(w,f.length),x.init(),f.push(x),ce.enabled===!0&&ce.isPresenting===!0){const ie=v.xr.getDepthSensingMesh();ie!==null&&N(ie,D,-1/0,v.sortObjects)}N(w,D,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(U,Q),et=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,et&&Me.addToRenderList(x,w),this.info.render.frame++,q===!0&&He.beginShadows();const z=p.state.shadowsArray;ue.render(z,w,D),q===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=x.opaque,I=x.transmissive;if(p.setupLights(),D.isArrayCamera){const ie=D.cameras;if(I.length>0)for(let me=0,Ee=ie.length;me<Ee;me++){const Te=ie[me];W(k,I,w,Te)}et&&Me.render(w);for(let me=0,Ee=ie.length;me<Ee;me++){const Te=ie[me];O(x,w,Te,Te.viewport)}}else I.length>0&&W(k,I,w,D),et&&Me.render(w),O(x,w,D);A!==null&&(Xe.updateMultisampleRenderTarget(A),Xe.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,D),qe.resetDefaultState(),R=-1,M=null,g.pop(),g.length>0?(p=g[g.length-1],q===!0&&He.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function N(w,D,z,k){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ve.intersectsSprite(w)){k&&We.setFromMatrixPosition(w.matrixWorld).applyMatrix4(he);const me=oe.update(w),Ee=w.material;Ee.visible&&x.push(w,me,Ee,z,We.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ve.intersectsObject(w))){const me=oe.update(w),Ee=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),We.copy(w.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),We.copy(me.boundingSphere.center)),We.applyMatrix4(w.matrixWorld).applyMatrix4(he)),Array.isArray(Ee)){const Te=me.groups;for(let Ue=0,Oe=Te.length;Ue<Oe;Ue++){const Pe=Te[Ue],rt=Ee[Pe.materialIndex];rt&&rt.visible&&x.push(w,me,rt,z,We.z,Pe)}}else Ee.visible&&x.push(w,me,Ee,z,We.z,null)}}const ie=w.children;for(let me=0,Ee=ie.length;me<Ee;me++)N(ie[me],D,z,k)}function O(w,D,z,k){const I=w.opaque,ie=w.transmissive,me=w.transparent;p.setupLightsView(z),q===!0&&He.setGlobalState(v.clippingPlanes,z),k&&be.viewport(y.copy(k)),I.length>0&&Z(I,D,z),ie.length>0&&Z(ie,D,z),me.length>0&&Z(me,D,z),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function W(w,D,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Jr(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?Li:ki,minFilter:ar,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const ie=p.state.transmissionRenderTarget[k.id],me=k.viewport||y;ie.setSize(me.z,me.w);const Ee=v.getRenderTarget();v.setRenderTarget(ie),v.getClearColor(B),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),et?Me.render(z):v.clear();const Te=v.toneMapping;v.toneMapping=mr;const Ue=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),q===!0&&He.setGlobalState(v.clippingPlanes,k),Z(w,z,k),Xe.updateMultisampleRenderTarget(ie),Xe.updateRenderTargetMipmap(ie),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Pe=0,rt=D.length;Pe<rt;Pe++){const mt=D[Pe],gt=mt.object,Ie=mt.geometry,ze=mt.material,we=mt.group;if(ze.side===Ai&&gt.layers.test(k.layers)){const $e=ze.side;ze.side=wn,ze.needsUpdate=!0,xe(gt,z,k,Ie,ze,we),ze.side=$e,ze.needsUpdate=!0,Oe=!0}}Oe===!0&&(Xe.updateMultisampleRenderTarget(ie),Xe.updateRenderTargetMipmap(ie))}v.setRenderTarget(Ee),v.setClearColor(B,H),Ue!==void 0&&(k.viewport=Ue),v.toneMapping=Te}function Z(w,D,z){const k=D.isScene===!0?D.overrideMaterial:null;for(let I=0,ie=w.length;I<ie;I++){const me=w[I],Ee=me.object,Te=me.geometry,Ue=k===null?me.material:k,Oe=me.group;Ee.layers.test(z.layers)&&xe(Ee,D,z,Te,Ue,Oe)}}function xe(w,D,z,k,I,ie){w.onBeforeRender(v,D,z,k,I,ie),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),I.transparent===!0&&I.side===Ai&&I.forceSinglePass===!1?(I.side=wn,I.needsUpdate=!0,v.renderBufferDirect(z,D,k,I,w,ie),I.side=xr,I.needsUpdate=!0,v.renderBufferDirect(z,D,k,I,w,ie),I.side=Ai):v.renderBufferDirect(z,D,k,I,w,ie),w.onAfterRender(v,D,z,k,I,ie)}function Ce(w,D,z){D.isScene!==!0&&(D=Ke);const k=je.get(w),I=p.state.lights,ie=p.state.shadowsArray,me=I.state.version,Ee=ne.getParameters(w,I.state,ie,D,z),Te=ne.getProgramCacheKey(Ee);let Ue=k.programs;k.environment=w.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(w.isMeshStandardMaterial?T:b).get(w.envMap||k.environment),k.envMapRotation=k.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,Ue===void 0&&(w.addEventListener("dispose",ke),Ue=new Map,k.programs=Ue);let Oe=Ue.get(Te);if(Oe!==void 0){if(k.currentProgram===Oe&&k.lightsStateVersion===me)return fe(w,Ee),Oe}else Ee.uniforms=ne.getUniforms(w),w.onBeforeCompile(Ee,v),Oe=ne.acquireProgram(Ee,Te),Ue.set(Te,Oe),k.uniforms=Ee.uniforms;const Pe=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pe.clippingPlanes=He.uniform),fe(w,Ee),k.needsLights=Ne(w),k.lightsStateVersion=me,k.needsLights&&(Pe.ambientLightColor.value=I.state.ambient,Pe.lightProbe.value=I.state.probe,Pe.directionalLights.value=I.state.directional,Pe.directionalLightShadows.value=I.state.directionalShadow,Pe.spotLights.value=I.state.spot,Pe.spotLightShadows.value=I.state.spotShadow,Pe.rectAreaLights.value=I.state.rectArea,Pe.ltc_1.value=I.state.rectAreaLTC1,Pe.ltc_2.value=I.state.rectAreaLTC2,Pe.pointLights.value=I.state.point,Pe.pointLightShadows.value=I.state.pointShadow,Pe.hemisphereLights.value=I.state.hemi,Pe.directionalShadowMap.value=I.state.directionalShadowMap,Pe.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Pe.spotShadowMap.value=I.state.spotShadowMap,Pe.spotLightMatrix.value=I.state.spotLightMatrix,Pe.spotLightMap.value=I.state.spotLightMap,Pe.pointShadowMap.value=I.state.pointShadowMap,Pe.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=Oe,k.uniformsList=null,Oe}function Be(w){if(w.uniformsList===null){const D=w.currentProgram.getUniforms();w.uniformsList=Tl.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function fe(w,D){const z=je.get(w);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function Ye(w,D,z,k,I){D.isScene!==!0&&(D=Ke),Xe.resetTextureUnits();const ie=D.fog,me=k.isMeshStandardMaterial?D.environment:null,Ee=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Hi,Te=(k.isMeshStandardMaterial?T:b).get(k.envMap||me),Ue=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Oe=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Pe=!!z.morphAttributes.position,rt=!!z.morphAttributes.normal,mt=!!z.morphAttributes.color;let gt=mr;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(gt=v.toneMapping);const Ie=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ze=Ie!==void 0?Ie.length:0,we=je.get(k),$e=p.state.lights;if(q===!0&&(re===!0||w!==M)){const Fn=w===M&&k.id===R;He.setState(k,w,Fn)}let Ze=!1;k.version===we.__version?(we.needsLights&&we.lightsStateVersion!==$e.state.version||we.outputColorSpace!==Ee||I.isBatchedMesh&&we.batching===!1||!I.isBatchedMesh&&we.batching===!0||I.isBatchedMesh&&we.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&we.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&we.instancing===!1||!I.isInstancedMesh&&we.instancing===!0||I.isSkinnedMesh&&we.skinning===!1||!I.isSkinnedMesh&&we.skinning===!0||I.isInstancedMesh&&we.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&we.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&we.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&we.instancingMorph===!1&&I.morphTexture!==null||we.envMap!==Te||k.fog===!0&&we.fog!==ie||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==He.numPlanes||we.numIntersection!==He.numIntersection)||we.vertexAlphas!==Ue||we.vertexTangents!==Oe||we.morphTargets!==Pe||we.morphNormals!==rt||we.morphColors!==mt||we.toneMapping!==gt||we.morphTargetsCount!==ze)&&(Ze=!0):(Ze=!0,we.__version=k.version);let gn=we.currentProgram;Ze===!0&&(gn=Ce(k,D,I));let Vi=!1,An=!1,bc=!1;const Ut=gn.getUniforms(),Gi=we.uniforms;if(be.useProgram(gn.program)&&(Vi=!0,An=!0,bc=!0),k.id!==R&&(R=k.id,An=!0),Vi||M!==w){Ut.setValue(L,"projectionMatrix",w.projectionMatrix),Ut.setValue(L,"viewMatrix",w.matrixWorldInverse);const Fn=Ut.map.cameraPosition;Fn!==void 0&&Fn.setValue(L,ye.setFromMatrixPosition(w.matrixWorld)),dt.logarithmicDepthBuffer&&Ut.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ut.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,An=!0,bc=!0)}if(I.isSkinnedMesh){Ut.setOptional(L,I,"bindMatrix"),Ut.setOptional(L,I,"bindMatrixInverse");const Fn=I.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),Ut.setValue(L,"boneTexture",Fn.boneTexture,Xe))}I.isBatchedMesh&&(Ut.setOptional(L,I,"batchingTexture"),Ut.setValue(L,"batchingTexture",I._matricesTexture,Xe),Ut.setOptional(L,I,"batchingIdTexture"),Ut.setValue(L,"batchingIdTexture",I._indirectTexture,Xe),Ut.setOptional(L,I,"batchingColorTexture"),I._colorsTexture!==null&&Ut.setValue(L,"batchingColorTexture",I._colorsTexture,Xe));const Pc=z.morphAttributes;if((Pc.position!==void 0||Pc.normal!==void 0||Pc.color!==void 0)&&nt.update(I,z,gn),(An||we.receiveShadow!==I.receiveShadow)&&(we.receiveShadow=I.receiveShadow,Ut.setValue(L,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Gi.envMap.value=Te,Gi.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(Gi.envMapIntensity.value=D.environmentIntensity),An&&(Ut.setValue(L,"toneMappingExposure",v.toneMappingExposure),we.needsLights&&Le(Gi,bc),ie&&k.fog===!0&&Fe.refreshFogUniforms(Gi,ie),Fe.refreshMaterialUniforms(Gi,k,K,G,p.state.transmissionRenderTarget[w.id]),Tl.upload(L,Be(we),Gi,Xe)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Tl.upload(L,Be(we),Gi,Xe),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ut.setValue(L,"center",I.center),Ut.setValue(L,"modelViewMatrix",I.modelViewMatrix),Ut.setValue(L,"normalMatrix",I.normalMatrix),Ut.setValue(L,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Fn=k.uniformsGroups;for(let Lc=0,x_=Fn.length;Lc<x_;Lc++){const Ah=Fn[Lc];xt.update(Ah,gn),xt.bind(Ah,gn)}}return gn}function Le(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function Ne(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,D,z){je.get(w.texture).__webglTexture=D,je.get(w.depthTexture).__webglTexture=z;const k=je.get(w);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,D){const z=je.get(w);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,z=0){A=w,P=D,S=z;let k=!0,I=null,ie=!1,me=!1;if(w){const Te=je.get(w);Te.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(L.FRAMEBUFFER,null),k=!1):Te.__webglFramebuffer===void 0?Xe.setupRenderTarget(w):Te.__hasExternalTextures&&Xe.rebindTextures(w,je.get(w.texture).__webglTexture,je.get(w.depthTexture).__webglTexture);const Ue=w.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(me=!0);const Oe=je.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[D])?I=Oe[D][z]:I=Oe[D],ie=!0):w.samples>0&&Xe.useMultisampledRTT(w)===!1?I=je.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?I=Oe[z]:I=Oe,y.copy(w.viewport),C.copy(w.scissor),V=w.scissorTest}else y.copy(J).multiplyScalar(K).floor(),C.copy(le).multiplyScalar(K).floor(),V=Se;if(be.bindFramebuffer(L.FRAMEBUFFER,I)&&k&&be.drawBuffers(w,I),be.viewport(y),be.scissor(C),be.setScissorTest(V),ie){const Te=je.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,Te.__webglTexture,z)}else if(me){const Te=je.get(w.texture),Ue=D||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Te.__webglTexture,z||0,Ue)}R=-1},this.readRenderTargetPixels=function(w,D,z,k,I,ie,me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=je.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee){be.bindFramebuffer(L.FRAMEBUFFER,Ee);try{const Te=w.texture,Ue=Te.format,Oe=Te.type;if(!dt.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-k&&z>=0&&z<=w.height-I&&L.readPixels(D,z,k,I,Ge.convert(Ue),Ge.convert(Oe),ie)}finally{const Te=A!==null?je.get(A).__webglFramebuffer:null;be.bindFramebuffer(L.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(w,D,z,k,I,ie,me){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=je.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee){be.bindFramebuffer(L.FRAMEBUFFER,Ee);try{const Te=w.texture,Ue=Te.format,Oe=Te.type;if(!dt.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=w.width-k&&z>=0&&z<=w.height-I){const Pe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Pe),L.bufferData(L.PIXEL_PACK_BUFFER,ie.byteLength,L.STREAM_READ),L.readPixels(D,z,k,I,Ge.convert(Ue),Ge.convert(Oe),0),L.flush();const rt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await eS(L,rt,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Pe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ie)}finally{L.deleteBuffer(Pe),L.deleteSync(rt)}return ie}}finally{const Te=A!==null?je.get(A).__webglFramebuffer:null;be.bindFramebuffer(L.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(w,D=null,z=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,w=arguments[1]);const k=Math.pow(2,-z),I=Math.floor(w.image.width*k),ie=Math.floor(w.image.height*k),me=D!==null?D.x:0,Ee=D!==null?D.y:0;Xe.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,me,Ee,I,ie),be.unbindTexture()},this.copyTextureToTexture=function(w,D,z=null,k=null,I=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1],D=arguments[2],I=arguments[3]||0,z=null);let ie,me,Ee,Te,Ue,Oe;z!==null?(ie=z.max.x-z.min.x,me=z.max.y-z.min.y,Ee=z.min.x,Te=z.min.y):(ie=w.image.width,me=w.image.height,Ee=0,Te=0),k!==null?(Ue=k.x,Oe=k.y):(Ue=0,Oe=0);const Pe=Ge.convert(D.format),rt=Ge.convert(D.type);Xe.setTexture2D(D,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const mt=L.getParameter(L.UNPACK_ROW_LENGTH),gt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ie=L.getParameter(L.UNPACK_SKIP_PIXELS),ze=L.getParameter(L.UNPACK_SKIP_ROWS),we=L.getParameter(L.UNPACK_SKIP_IMAGES),$e=w.isCompressedTexture?w.mipmaps[I]:w.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,$e.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,$e.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ee),L.pixelStorei(L.UNPACK_SKIP_ROWS,Te),w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,I,Ue,Oe,ie,me,Pe,rt,$e.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,I,Ue,Oe,$e.width,$e.height,Pe,$e.data):L.texSubImage2D(L.TEXTURE_2D,I,Ue,Oe,ie,me,Pe,rt,$e),L.pixelStorei(L.UNPACK_ROW_LENGTH,mt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ie),L.pixelStorei(L.UNPACK_SKIP_ROWS,ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,we),I===0&&D.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(w,D,z=null,k=null,I=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,w=arguments[2],D=arguments[3],I=arguments[4]||0);let ie,me,Ee,Te,Ue,Oe,Pe,rt,mt;const gt=w.isCompressedTexture?w.mipmaps[I]:w.image;z!==null?(ie=z.max.x-z.min.x,me=z.max.y-z.min.y,Ee=z.max.z-z.min.z,Te=z.min.x,Ue=z.min.y,Oe=z.min.z):(ie=gt.width,me=gt.height,Ee=gt.depth,Te=0,Ue=0,Oe=0),k!==null?(Pe=k.x,rt=k.y,mt=k.z):(Pe=0,rt=0,mt=0);const Ie=Ge.convert(D.format),ze=Ge.convert(D.type);let we;if(D.isData3DTexture)Xe.setTexture3D(D,0),we=L.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)Xe.setTexture2DArray(D,0),we=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const $e=L.getParameter(L.UNPACK_ROW_LENGTH),Ze=L.getParameter(L.UNPACK_IMAGE_HEIGHT),gn=L.getParameter(L.UNPACK_SKIP_PIXELS),Vi=L.getParameter(L.UNPACK_SKIP_ROWS),An=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,gt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Te),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ue),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Oe),w.isDataTexture||w.isData3DTexture?L.texSubImage3D(we,I,Pe,rt,mt,ie,me,Ee,Ie,ze,gt.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(we,I,Pe,rt,mt,ie,me,Ee,Ie,gt.data):L.texSubImage3D(we,I,Pe,rt,mt,ie,me,Ee,Ie,ze,gt),L.pixelStorei(L.UNPACK_ROW_LENGTH,$e),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ze),L.pixelStorei(L.UNPACK_SKIP_PIXELS,gn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Vi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,An),I===0&&D.generateMipmaps&&L.generateMipmap(we),be.unbindTexture()},this.initRenderTarget=function(w){je.get(w).__webglFramebuffer===void 0&&Xe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Xe.setTextureCube(w,0):w.isData3DTexture?Xe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Xe.setTexture2DArray(w,0):Xe.setTexture2D(w,0),be.unbindTexture()},this.resetState=function(){P=0,S=0,A=null,be.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===gh?"display-p3":"srgb",n.unpackColorSpace=ft.workingColorSpace===wc?"display-p3":"srgb"}}class hT extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class pT extends on{constructor(e=null,n=1,i=1,r,a,o,s,l,c=yn,u=yn,d,h){super(null,o,s,l,c,u,r,a,d,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mT extends on{constructor(e,n,i,r,a,o,s,l,c){super(e,n,i,r,a,o,s,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gT extends vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fv,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vT extends gT{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new st(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new st(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new st(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const Nm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class _T{constructor(e,n,i){const r=this;let a=!1,o=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){s++,a===!1&&r.onStart!==void 0&&r.onStart(u,o,s),a=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,s),o===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const m=c[d],_=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const xT=new _T;class yh{constructor(e){this.manager=e!==void 0?e:xT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,a){i.load(e,r,n,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}yh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mi={};class yT extends Error{constructor(e,n){super(e),this.response=n}}class ST extends yh{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Nm.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(a),this.manager.itemEnd(e)},0),a;if(Mi[e]!==void 0){Mi[e].push({onLoad:n,onProgress:i,onError:r});return}Mi[e]=[],Mi[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),s=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Mi[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=h?parseInt(h):0,_=m!==0;let x=0;const p=new ReadableStream({start(f){g();function g(){d.read().then(({done:v,value:E})=>{if(v)f.close();else{x+=E.byteLength;const P=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:m});for(let S=0,A=u.length;S<A;S++){const R=u[S];R.onProgress&&R.onProgress(P)}f.enqueue(E),g()}},v=>{f.error(v)})}}});return new Response(p)}else throw new yT(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,s));case"json":return c.json();default:if(s===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(s),h=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(h);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{Nm.add(e,c);const u=Mi[e];delete Mi[e];for(let d=0,h=u.length;d<h;d++){const m=u[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Mi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Mi[e];for(let d=0,h=u.length;d<h;d++){const m=u[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class MT extends yh{constructor(e){super(e)}load(e,n,i,r){const a=this,o=new pT,s=new ST(this.manager);return s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(a.withCredentials),s.load(e,function(l){let c;try{c=a.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Pi,o.wrapT=c.wrapT!==void 0?c.wrapT:Pi,o.magFilter=c.magFilter!==void 0?c.magFilter:an,o.minFilter=c.minFilter!==void 0?c.minFilter:an,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=ar),c.mipmapCount===1&&(o.minFilter=an),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,n&&n(o,c)},i,r),o}}class ET extends sn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Du=new Nt,Um=new Y,Im=new Y;class wT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _h,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Um.setFromMatrixPosition(e.matrixWorld),n.position.copy(Um),Im.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Im),n.updateMatrixWorld(),Du.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Du),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Du)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class TT extends wT{constructor(){super(new Zv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class AT extends ET{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new TT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ch}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ch);var Al={},i_,r_;Object.defineProperty(Al,"__esModule",{value:!0});var Lo=X,oi=ve,Zn=function(){return Zn=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},Zn.apply(this,arguments)};function RT(t,e){var n,i;switch(e.type){case"TYPE":return Zn(Zn({},t),{speed:e.speed,text:(n=e.payload)===null||n===void 0?void 0:n.substring(0,t.text.length+1)});case"DELAY":return Zn(Zn({},t),{speed:e.payload});case"DELETE":return Zn(Zn({},t),{speed:e.speed,text:(i=e.payload)===null||i===void 0?void 0:i.substring(0,t.text.length-1)});case"COUNT":return Zn(Zn({},t),{count:t.count+1});default:return t}}var Fm=function(t){var e=t.words,n=e===void 0?["Hello World!","This is","a simple Typewriter"]:e,i=t.loop,r=i===void 0?1:i,a=t.typeSpeed,o=a===void 0?80:a,s=t.deleteSpeed,l=s===void 0?50:s,c=t.delaySpeed,u=c===void 0?1500:c,d=t.onLoopDone,h=t.onType,m=t.onDelete,_=t.onDelay,x=oi.useReducer(RT,{speed:o,text:"",count:0}),p=x[0],f=p.speed,g=p.text,v=p.count,E=x[1],P=oi.useRef(0),S=oi.useRef(!1),A=oi.useRef(!1),R=oi.useRef(!1),M=oi.useRef(!1),y=oi.useCallback(function(){var C=v%n.length,V=n[C];A.current?(E({type:"DELETE",payload:V,speed:l}),g===""&&(A.current=!1,E({type:"COUNT"}))):(E({type:"TYPE",payload:V,speed:o}),R.current=!0,g===V&&(E({type:"DELAY",payload:u}),R.current=!1,M.current=!0,setTimeout(function(){M.current=!1,A.current=!0},u),r>0&&(P.current+=1,P.current/n.length===r&&(M.current=!1,S.current=!0)))),R.current&&h&&h(P.current),A.current&&m&&m(),M.current&&_&&_()},[v,u,l,r,o,n,g,h,m,_]);return oi.useEffect(function(){var C=setTimeout(y,f);return S.current&&clearTimeout(C),function(){return clearTimeout(C)}},[y,f]),oi.useEffect(function(){d&&S.current&&d()},[d]),[g,{isType:R.current,isDelay:M.current,isDelete:A.current,isDone:S.current}]},CT="styles-module_blinkingCursor__yugAC",bT="styles-module_blinking__9VXRT";(function(t,e){e===void 0&&(e={});var n=e.insertAt;if(typeof document<"u"){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}})(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var Om=oi.memo(function(t){var e=t.cursorBlinking,n=e===void 0||e,i=t.cursorStyle,r=i===void 0?"|":i,a=t.cursorColor,o=a===void 0?"inherit":a;return Lo.jsx("span",Zn({style:{color:o},className:"".concat(CT," ").concat(n?bT:"")},{children:r}))});r_=Al.Cursor=Om,Al.Typewriter=function(t){var e=t.words,n=e===void 0?["Hello World!","This is","a simple Typewriter"]:e,i=t.loop,r=i===void 0?1:i,a=t.typeSpeed,o=a===void 0?80:a,s=t.deleteSpeed,l=s===void 0?50:s,c=t.delaySpeed,u=c===void 0?1500:c,d=t.cursor,h=d!==void 0&&d,m=t.cursorStyle,_=m===void 0?"|":m,x=t.cursorColor,p=x===void 0?"inherit":x,f=t.cursorBlinking,g=f===void 0||f,v=t.onLoopDone,E=t.onType,P=t.onDelay,S=t.onDelete,A=Fm({words:n,loop:r,typeSpeed:o,deleteSpeed:l,delaySpeed:u,onLoopDone:v,onType:E,onDelay:P,onDelete:S})[0];return Lo.jsxs(Lo.Fragment,{children:[Lo.jsx("span",{children:A}),h&&Lo.jsx(Om,{cursorStyle:_,cursorColor:p,cursorBlinking:g})]})},i_=Al.useTypewriter=Fm;class PT extends MT{constructor(e){super(e),this.type=Li}parse(e){const o=function(R,M){switch(R){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(M||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(M||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(M||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(M||""))}},u=`
`,d=function(R,M,y){M=M||1024;let V=R.pos,B=-1,H=0,$="",G=String.fromCharCode.apply(null,new Uint16Array(R.subarray(V,V+128)));for(;0>(B=G.indexOf(u))&&H<M&&V<R.byteLength;)$+=G,H+=G.length,V+=128,G+=String.fromCharCode.apply(null,new Uint16Array(R.subarray(V,V+128)));return-1<B?(R.pos+=H+B+1,$+G.slice(0,B)):!1},h=function(R){const M=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,V=/^\s*FORMAT=(\S+)\s*$/,B=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,H={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let $,G;for((R.pos>=R.byteLength||!($=d(R)))&&o(1,"no header found"),(G=$.match(M))||o(3,"bad initial token"),H.valid|=1,H.programtype=G[1],H.string+=$+`
`;$=d(R),$!==!1;){if(H.string+=$+`
`,$.charAt(0)==="#"){H.comments+=$+`
`;continue}if((G=$.match(y))&&(H.gamma=parseFloat(G[1])),(G=$.match(C))&&(H.exposure=parseFloat(G[1])),(G=$.match(V))&&(H.valid|=2,H.format=G[1]),(G=$.match(B))&&(H.valid|=4,H.height=parseInt(G[1],10),H.width=parseInt(G[2],10)),H.valid&2&&H.valid&4)break}return H.valid&2||o(3,"missing format specifier"),H.valid&4||o(3,"missing image size specifier"),H},m=function(R,M,y){const C=M;if(C<8||C>32767||R[0]!==2||R[1]!==2||R[2]&128)return new Uint8Array(R);C!==(R[2]<<8|R[3])&&o(3,"wrong scanline width");const V=new Uint8Array(4*M*y);V.length||o(4,"unable to allocate buffer space");let B=0,H=0;const $=4*C,G=new Uint8Array(4),K=new Uint8Array($);let U=y;for(;U>0&&H<R.byteLength;){H+4>R.byteLength&&o(1),G[0]=R[H++],G[1]=R[H++],G[2]=R[H++],G[3]=R[H++],(G[0]!=2||G[1]!=2||(G[2]<<8|G[3])!=C)&&o(3,"bad rgbe scanline format");let Q=0,J;for(;Q<$&&H<R.byteLength;){J=R[H++];const Se=J>128;if(Se&&(J-=128),(J===0||Q+J>$)&&o(3,"bad scanline data"),Se){const Ve=R[H++];for(let q=0;q<J;q++)K[Q++]=Ve}else K.set(R.subarray(H,H+J),Q),Q+=J,H+=J}const le=C;for(let Se=0;Se<le;Se++){let Ve=0;V[B]=K[Se+Ve],Ve+=C,V[B+1]=K[Se+Ve],Ve+=C,V[B+2]=K[Se+Ve],Ve+=C,V[B+3]=K[Se+Ve],B+=4}U--}return V},_=function(R,M,y,C){const V=R[M+3],B=Math.pow(2,V-128)/255;y[C+0]=R[M+0]*B,y[C+1]=R[M+1]*B,y[C+2]=R[M+2]*B,y[C+3]=1},x=function(R,M,y,C){const V=R[M+3],B=Math.pow(2,V-128)/255;y[C+0]=$s.toHalfFloat(Math.min(R[M+0]*B,65504)),y[C+1]=$s.toHalfFloat(Math.min(R[M+1]*B,65504)),y[C+2]=$s.toHalfFloat(Math.min(R[M+2]*B,65504)),y[C+3]=$s.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;const f=h(p),g=f.width,v=f.height,E=m(p.subarray(p.pos),g,v);let P,S,A;switch(this.type){case Vn:A=E.length/4;const R=new Float32Array(A*4);for(let y=0;y<A;y++)_(E,y*4,R,y*4);P=R,S=Vn;break;case Li:A=E.length/4;const M=new Uint16Array(A*4);for(let y=0;y<A;y++)x(E,y*4,M,y*4);P=M,S=Li;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:g,height:v,data:P,header:f.string,gamma:f.gamma,exposure:f.exposure,type:S}}setDataType(e){return this.type=e,this}load(e,n,i,r){function a(o,s){switch(o.type){case Vn:case Li:o.colorSpace=Hi,o.minFilter=an,o.magFilter=an,o.generateMipmaps=!1,o.flipY=!0;break}n&&n(o,s)}return super.load(e,a,i,r)}}class LT{constructor(e=512,n=512){const i=document.createElement("canvas");i.width=e,i.height=n;const r=i.getContext("2d");r.fillStyle="rgb(127,127,255)",r.fillRect(0,0,e,n);for(let a=0;a<4e3;a++){const o=Math.random()*e,s=Math.random()*n,l=Math.random()*3+3;let c=Math.random()*2-1,u=Math.random()*2-1,d=1.5;const h=Math.sqrt(c*c+u*u+d*d);c/=h,u/=h,d/=h,r.fillStyle="rgb("+(c*127+127)+","+(u*127+127)+","+d*255+")",r.beginPath(),r.arc(o,s,l,0,Math.PI*2),r.fill()}return i}}function DT(t){return Zt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(t)}function NT(t){return Zt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"},child:[]}]})(t)}function UT(t){return Zt({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"},child:[]}]})(t)}function IT(t){return Zt({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(t)}function FT(t){return Zt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(t)}function OT(t){return Zt({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"},child:[]}]})(t)}function zT(t){return Zt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"},child:[]}]})(t)}function kT(t){return Zt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z"},child:[]}]})(t)}function BT(t){return Zt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},child:[]}]})(t)}function HT(t){return Zt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"},child:[]}]})(t)}function VT(t){return Zt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"},child:[]},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"},child:[]},{tag:"line",attr:{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"},child:[]}]})(t)}function GT(){ve.useEffect(()=>{const e=document.getElementById("hero-threejs"),n=new fT({alpha:!0,antialias:!0});n.setSize(e.clientWidth,e.clientHeight),e.appendChild(n.domElement),n.outputEncoding=void 0,n.toneMapping=wv,n.toneMappingExposure=1.25;const i=new hT,r=new Bn(50,e.clientWidth/e.clientHeight,1,1e3);r.position.set(0,0,500);const a=new AT(1048575,1);a.position.set(200,200,200),i.add(a);const o=new lf(n);new PT().load("/christmas_photo_studio_04_4k.hdr",l=>{const c=o.fromCubemap(l),u=new mT(new LT);u.wrapS=as,u.wrapT=as,u.repeat.x=10,u.repeat.y=6;const d={clearcoat:1,clearcoatRoughness:.1,metalness:1,roughness:1,color:8657098,normalMap:u,normalScale:new ot(.15,.15),envMap:c.texture},h=new gr(40,40,40),m=new gr(100,100,100),_=new gr(40,40,40),x=new vT(d),p=new $t(h,x),f=new $t(m,x),g=new $t(_,x),v=new $t(_,x),E=new $t(_,x),P=new $t(_,x),S=new $t(_,x),A=new $t(_,x);i.add(p),i.add(f),i.add(g),i.add(v),i.add(E),i.add(P),i.add(S),i.add(A),p.position.set(-200,70,0),g.position.set(120,-100,0),v.position.set(-30,160,0),E.position.set(90,40,0),P.position.set(-125,-120,-100),S.position.set(190,150,0),A.position.set(190,150,0);const R=()=>{p.rotation.x+=.01,p.rotation.y+=.01,f.rotation.x-=.005,f.rotation.y-=.005,g.rotation.x-=.02,g.rotation.y-=.005,v.rotation.x-=.01,v.rotation.y-=.01,v.rotation.z-=.01,E.rotation.x-=.03,E.rotation.y+=.03,E.rotation.z+=.03,P.rotation.x-=.008,P.rotation.y-=.009,S.rotation.x-=.01,S.rotation.y-=.01,A.rotation.x+=.01,A.rotation.y+=.01,n.render(i,r)};n.setAnimationLoop(R)});const s=()=>{const l=e.clientWidth,c=e.clientHeight;r.aspect=l/c,r.updateProjectionMatrix(),n.setSize(l,c)};return window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s),e.removeChild(n.domElement)}},[]);const[t]=i_({words:["Student...","Open Source Contributor...","Web Devloper...","Learner..."],loop:{}});return X.jsxs("div",{className:" block custom-vh-class md:flex md:justify-center xl:flex my-3 xl:my-0 ",children:[X.jsxs("div",{className:"hero-content  w-full my-5 mt-20 md:mt-14 md:w-2/5 xl:mt-20 xl:mb-0 xl:w-2/5 xl:h-full xl:ml-28 xl:mt-22 ",children:[X.jsxs("h1",{className:"text-4xl mx-3 mt-5 text-left font-extrabold  md:text-4xl xl:text-6xl xl:mb-9 2xl:text-9xl 2xl:mt-48",children:["Hi, I am ",X.jsx("span",{className:"text-purple-400",children:"Faris "})]}),X.jsxs("p",{className:"mx-4 my-2 text-xl xl:text-3xl 2xl:text-6xl 2xl:my-12",children:["I am a ",X.jsx("span",{className:" text-purple-700 ",children:t}),X.jsx(r_,{})]}),X.jsx("p",{className:"mx-4 my-2 text-xs font-light md:text-base xl:text-lg xl:my-5 text-gray-500 2xl:text-4xl 2xl:font-normal",children:"I'm a web developer proficient in the MERN stack and passionate about creating immersive 3D animations using three.js. I specialize in building responsive, visually appealing web applications with Tailwind CSS. Let's create something amazing together!"}),X.jsxs("div",{className:"flex justify-center gap-5 mt-5 xl:gap-10 xl:mt-10 2xl:hidden",children:[X.jsx("a",{href:"https://x.com/faris_shaikh247",target:"_blank",children:X.jsx(NT,{size:25,className:"text-gray-500 hover:text-white ease-in duration-100"})}),X.jsx("a",{href:"https://www.linkedin.com/in/shaikh-mohammad-faris-561550295/",target:"_blank",children:X.jsx(FT,{size:25,className:"text-gray-500 hover:text-white ease-in duration-100"})}),X.jsx("a",{href:"https://github.com/shaikhFaris",target:"_blank",children:X.jsx(IT,{size:25,className:"text-gray-500 hover:text-white ease-in duration-100"})}),X.jsx("a",{href:"https://faristheprogrammer.hashnode.dev/",target:"_blank",children:X.jsx(kT,{size:25,className:"text-gray-500 hover:text-white ease-in duration-100"})}),X.jsx("a",{href:"https://www.instagram.com/",target:"_blank",children:X.jsx(VT,{size:25,className:"text-gray-500 hover:text-white ease-in duration-100"})})]})]}),X.jsx("div",{className:"hero-threejs w-full h-72 md:h-96 md:w-3/5 xl:w-3/5 xl:h-full",id:"hero-threejs"})]})}function WT(t){return Zt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"},child:[]}]})(t)}function jT(t){return Zt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M11.9996 4.85999C8.82628 4.85999 6.84294 6.44665 6.04961 9.61999C7.23961 8.03332 8.62794 7.43832 10.2146 7.83499C11.12 8.06109 11.7666 8.71757 12.4835 9.44545C13.6507 10.6295 15.0004 12 17.9496 12C21.1229 12 23.1063 10.4133 23.8996 7.23998C22.7096 8.82665 21.3213 9.42165 19.7346 9.02499C18.8292 8.79889 18.1827 8.1424 17.4657 7.41452C16.2995 6.23047 14.9498 4.85999 11.9996 4.85999ZM6.04961 12C2.87628 12 0.892943 13.5867 0.0996094 16.76C1.28961 15.1733 2.67794 14.5783 4.26461 14.975C5.17 15.2011 5.81657 15.8576 6.53354 16.5855C7.70073 17.7695 9.05039 19.14 11.9996 19.14C15.1729 19.14 17.1563 17.5533 17.9496 14.38C16.7596 15.9667 15.3713 16.5617 13.7846 16.165C12.8792 15.9389 12.2326 15.2824 11.5157 14.5545C10.3495 13.3705 8.99982 12 6.04961 12Z"},child:[]}]})(t)}function XT(t){return Zt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 22l-5 -19l19 5.5z"},child:[]},{tag:"path",attr:{d:"M12.573 17.58l-6.152 -1.576l8.796 -9.466l1.914 6.64"},child:[]},{tag:"path",attr:{d:"M12.573 17.58l-1.573 -6.58l6.13 2.179"},child:[]},{tag:"path",attr:{d:"M9.527 4.893l1.473 6.107l-6.31 -1.564z"},child:[]}]})(t)}function YT(){return X.jsxs("div",{children:[X.jsxs("div",{className:"my-6 p-3 mt-0 xl:mt-12 xl:ml-28 xl:mb-14 xl:p-0",id:"skills-section",children:[X.jsx("h3",{className:"text-gray-600 my-2 xl:text-2xl xl:my-3 font-semibold 2xl:text-4xl 2xl:my-5",children:"SKILLS OVERVIEW"}),X.jsxs("h1",{className:"white text-4xl mb-5 md:text-5xl xl:text-6xl font-bold xl:mb-9 2xl:text-9xl",children:["My ",X.jsx("span",{className:"text-purple-400 ",children:"Skills. "})]}),X.jsx("p",{className:"text-[12px]  text-gray-500 md:text-left md:text-sm xl:text-left xl:text-gray-500 font-light xl:font-normal xl:text-base xl:w-10/12 2xl:text-2xl",children:"I specialize in web development, with a strong command of the MERN stack—MongoDB, Express.js, React, and Node.js. My expertise extends to crafting dynamic 3D animations using three.js, bringing interactivity and depth to web experiences. I leverage Tailwind CSS to create responsive, efficient UIs that are both functional and aesthetically pleasing. Additionally, I'm an active contributor to the Hasnode community, where I share insights on data structures, algorithms, and modern web development practices."})]}),X.jsxs("div",{className:"flex flex-wrap items-center mb-10 w-5/6 gap-10 mx-auto md:justify-center md:gap-7 md:w-11/12 xl:gap-10 xl:w-11/12 xl:justify-evenly",children:[X.jsx("div",{className:"green-pink-gradient w-full md:w-2/5 h-56 xl:h-60 rounded-2xl p-[1px] flex-wrap xl:w-1/4 2xl:h-[25rem]",children:X.jsxs("div",{className:"border border-purple-700 rounded-2xl h-full w-full ",children:[X.jsx(DT,{size:60,className:"mx-auto mt-4 "}),X.jsxs("div",{className:"mx-2 my-2 2xl:my-8",children:[X.jsx("h3",{className:"my-2 text-xl text-center text-green-500 2xl:text-5xl 2xl:my-5",children:"React"}),X.jsx("p",{className:"xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 2xl:text-2xl",children:"Docker is a platform for developing, shipping, and running applications in isolated containers, ensuring consistency across environments."})]})]})}),X.jsx("div",{className:"green-pink-gradient w-full md:w-2/5 h-56 xl:h-60 rounded-2xl p-[1px] flex-wrap xl:w-1/4 2xl:h-[25rem]",children:X.jsxs("div",{className:"border border-purple-700 rounded-2xl h-full w-full ",children:[X.jsx(jT,{size:60,className:"mx-auto mt-4 "}),X.jsxs("div",{className:"mx-2 my-2 2xl:my-8",children:[X.jsx("h3",{className:"my-2 text-xl text-center text-green-500 2xl:text-5xl 2xl:my-5",children:"Tailwind"}),X.jsx("p",{className:"xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 2xl:text-2xl",children:"Kubernetes is an open-source platform for automating the deployment, scaling, and management of containerized applications."})]})]})}),X.jsx("div",{className:"green-pink-gradient w-full md:w-2/5 h-56 xl:h-60 rounded-2xl p-[1px] flex-wrap xl:w-1/4 2xl:h-[25rem]",children:X.jsxs("div",{className:"border border-purple-700 rounded-2xl h-full w-full ",children:[X.jsx(XT,{size:60,className:"mx-auto mt-4 "}),X.jsxs("div",{className:"mx-2 my-2 2xl:my-8",children:[X.jsx("h3",{className:"my-2 text-xl text-center text-green-500 2xl:text-5xl 2xl:my-5",children:"Three JS"}),X.jsx("p",{className:"xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 2xl:text-2xl",children:"Helm charts are packages that simplify the deployment and management of Kubernetes applications by defining and configuring resources."})]})]})}),X.jsx("div",{className:"green-pink-gradient w-full md:w-2/5 h-56 xl:h-60 rounded-2xl p-[1px] flex-wrap xl:w-1/4 2xl:h-[25rem]",children:X.jsxs("div",{className:"border border-purple-700 rounded-2xl h-full w-full ",children:[X.jsx(HT,{size:60,className:"mx-auto mt-4 "}),X.jsxs("div",{className:"mx-2 my-2 2xl:my-8",children:[X.jsx("h3",{className:"my-2 text-xl text-center text-green-500 2xl:text-5xl 2xl:my-5",children:"MongoDB"}),X.jsx("p",{className:"xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 2xl:text-2xl",children:"Linux is favored for its stability, security, and flexibility, making it ideal for managing servers, deploying applications, and automating workflows."})]})]})}),X.jsx("div",{className:"green-pink-gradient w-full md:w-2/5 h-56 xl:h-60 rounded-2xl p-[1px] flex-wrap xl:w-1/4 2xl:h-[25rem]",children:X.jsxs("div",{className:"border border-purple-700 rounded-2xl h-full w-full ",children:[X.jsx(zT,{size:60,className:"mx-auto mt-4 "}),X.jsxs("div",{className:"mx-2 my-2 2xl:my-8",children:[X.jsx("h3",{className:"my-2 text-xl text-center text-green-500 2xl:text-5xl 2xl:my-5",children:"Express"}),X.jsx("p",{className:"xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 2xl:text-2xl",children:"Azure is Microsoft's cloud computing platform offering a wide range of services, including storage, computing, and networking."})]})]})}),X.jsx("div",{className:"green-pink-gradient w-full md:w-2/5 h-56 xl:h-60 rounded-2xl p-[1px] flex-wrap xl:w-1/4 2xl:h-[25rem]",children:X.jsxs("div",{className:"border border-purple-700 rounded-2xl h-full w-full ",children:[X.jsx(OT,{size:60,className:"mx-auto mt-4 "}),X.jsxs("div",{className:"mx-2 my-2 2xl:my-8",children:[X.jsx("h3",{className:"my-2 text-xl text-center text-green-500 2xl:text-5xl 2xl:my-5",children:"Node"}),X.jsx("p",{className:"xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 2xl:text-2xl",children:"AWS (Amazon Web Services) is a comprehensive cloud platform offering a variety of services, such as computing power, storage, and databases."})]})]})}),X.jsx("div",{className:"green-pink-gradient w-full md:w-2/5 h-56 xl:h-60 rounded-2xl p-[1px] flex-wrap xl:w-1/4 2xl:h-[25rem]",children:X.jsxs("div",{className:"border border-purple-700 rounded-2xl h-full w-full ",children:[X.jsx(WT,{size:60,className:"mx-auto mt-4 "}),X.jsxs("div",{className:"mx-2 my-2 2xl:my-8",children:[X.jsx("h3",{className:"my-2 text-xl text-center text-green-500 2xl:text-5xl 2xl:my-5",children:"Email JS"}),X.jsx("p",{className:"xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 2xl:text-2xl",children:"DevOps merges development and operations to enhance collaboration and automate processes. It aims for faster, more reliable software delivery."})]})]})}),X.jsx("div",{className:"green-pink-gradient w-full md:w-2/5 h-56 xl:h-60 rounded-2xl p-[1px] flex-wrap xl:w-1/4 2xl:h-[25rem]",children:X.jsxs("div",{className:"border border-purple-700 rounded-2xl h-full w-full ",children:[X.jsx(BT,{size:50,className:"mx-auto mt-4 "}),X.jsxs("div",{className:"mx-2 my-2 2xl:my-8",children:[X.jsx("h3",{className:"my-2 text-xl text-center text-green-500 2xl:text-5xl 2xl:my-5",children:"Javascript"}),X.jsx("p",{className:"xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 2xl:text-2xl",children:"Terraform is an open-source tool for automating infrastructure setup and management. It uses code to define and provision resources across various cloud providers."})]})]})}),X.jsx("div",{className:"green-pink-gradient w-full md:w-2/5 h-56 xl:h-60 rounded-2xl p-[1px] flex-wrap xl:w-1/4 2xl:h-[25rem]",children:X.jsxs("div",{className:"border border-purple-700 rounded-2xl h-full w-full ",children:[X.jsx(UT,{size:60,className:"mx-auto mt-4 "}),X.jsxs("div",{className:"mx-2 my-2 2xl:my-8",children:[X.jsx("h3",{className:"my-2 text-xl text-center text-green-500 2xl:text-5xl 2xl:my-5",children:"CSS"}),X.jsx("p",{className:"xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 2xl:text-2xl",children:"Cisco ASA (Adaptive Security Appliance) is a security device that combines firewall, VPN, and intrusion prevention features. It protects networks using security policies."})]})]})})]})]})}const $T="/assets/resume-D-veJKzI.pdf",qT=()=>{window.open($T)};function KT(){return X.jsx("div",{children:X.jsx("button",{className:"neo-btn w-2/3 h-14  mx-auto xl:mx-0 xl:my-10 xl:w-60 xl:h-[68px] xl:mb-16 2xl:h-[7rem] 2xl:w-[26rem] 2xl:text-4xl",onClick:qT,children:"Resume"})})}function ZT(){return X.jsxs("div",{className:"p-3  xl:ml-28 xl:mt-32 my-12 xl:p-0 2xl:mt-64",children:[X.jsx("h3",{className:"text-gray-600 my-2 xl:text-2xl xl:my-3 font-semibold 2xl:text-4xl 2xl:my-5",children:"SKILLS IN DETAIL"}),X.jsxs("h1",{className:"white text-4xl mb-5 md:text-5xl xl:text-6xl font-bold xl:mb-10 2xl:text-9xl",children:["My ",X.jsx("span",{className:"text-purple-400 ",children:"Resume."})]}),X.jsx("p",{className:"text-[12px] text-gray-500 md:text-left md:text-sm xl:text-left xl:text-gray-500 font-light xl:font-normal xl:text-base xl:w-10/12 2xl:text-2xl",children:"Here's a detailed version of my skills. Please click the button below to download my full resume. You can also access my certifications by clicking on the button below."}),X.jsxs("div",{className:"flex flex-col gap-12  xl:flex-row xl:flex xl:gap-16 my-7 xl:my-0 xl:items-center",children:[X.jsx(KT,{}),X.jsx("button",{className:"bg-transparent border rounded-md text-green-500 border-green-600 hover:-translate-y-1 hover:border-white transition duration-300 w-2/3 h-14 mx-auto xl:mx-0 xl:my-10 font-light xl:font-normal xl:w-60 xl:h-[74px] xl:mb-16 2xl:h-[7rem] 2xl:w-1/5 2xl:text-4xl 2xl:border-[3px]",children:"View Certifications"})]}),X.jsxs("p",{className:"text-xs text-center text-gray-500 mt-10 xl:text-left xl:mt-5 xl:text-base 2xl:text-2xl",children:["Feel free to",X.jsxs("a",{href:"https://tailwindcss.com/docs/border-width",target:"_blank",className:"text-cyan-400",children:[" ","contact me"]})," ","for collaboration or any inquiries."]})]})}function QT(t){return Zt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M8 1c-1.573 0-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4s.875 1.755 1.904 2.223C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777C13.125 5.755 14 5.007 14 4s-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1"},child:[]},{tag:"path",attr:{d:"M2 7v-.839c.457.432 1.004.751 1.49.972C4.722 7.693 6.318 8 8 8s3.278-.307 4.51-.867c.486-.22 1.033-.54 1.49-.972V7c0 .424-.155.802-.411 1.133a4.51 4.51 0 0 0-4.815 1.843A12 12 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777C2.875 8.755 2 8.007 2 7m6.257 3.998L8 11c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13h.027a4.55 4.55 0 0 1 .23-2.002m-.002 3L8 14c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.5 4.5 0 0 1-1.3-1.905"},child:[]}]})(t)}function JT(){const[t,e]=ve.useState({username:"",email:"",msg:""}),n=o=>{e({...t,username:o.target.value})},i=o=>{e({...t,email:o.target.value})},r=o=>{e({...t,msg:o.target.value})},a=async o=>{o.preventDefault(),console.log(t);let s=await fetch("http://192.168.1.101:3689/mail",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({username:t.username,email:t.email,message:t.msg})}).then(l=>l.json()).then(l=>(console.log("from server: "),console.log(l),l));console.log("status: "+s.status)};return X.jsx("div",{children:X.jsxs("div",{className:"p-3 xl:ml-28 xl:mt-32 my-12 xl:p-0 xl:mb-7 2xl:mt-48",children:[X.jsx("h3",{className:"text-gray-600 my-2 xl:text-2xl xl:my-3 font-semibold 2xl:text-4xl 2xl:my-5",id:"contact-section",children:"CONTACT ME"}),X.jsxs("h1",{className:"white text-4xl mb-5 md:text-5xl xl:text-6xl font-bold xl:mb-10 2xl:text-9xl",children:["My ",X.jsx("span",{className:"text-purple-400 ",children:"Contact."})]}),X.jsx("p",{className:"text-[12px] text-gray-500 mb-12 md:text-left md:text-sm xl:text-left xl:text-gray-500 font-light xl:font-normal xl:text-base xl:w-10/12 xl:mb-0 2xl:text-2xl",children:"Get in touch with me by filling out the form below. I'll make sure to respond as soon as possible. Looking forward to hear from you!"}),X.jsxs("div",{className:"lg:flex xl:justify-start xl:items-center xl:gap-8",children:[X.jsx("div",{className:"w-full  bg-[#0f0a2b] rounded-lg my-5 pt-5 pl-5 xl:w-3/6 xl:pl-6 xl:pt-5 2xl:my-12 2xl:w-7/12",children:X.jsxs("form",{onSubmit:a,className:"bg-[#090a2c]",children:[X.jsx("p",{className:"bg-transparent text-xs mb-2 font-medium text-[#bf1650] xl:text-sm 2xl:text-3xl",children:"Your Name"}),X.jsx("input",{type:"text",autoComplete:"username",placeholder:"What's your name?",maxLength:10,minLength:4,onChange:n,className:"bg-[#0c0d38] h-9 rounded-lg pl-4 text-xs w-11/12 xl:h-10 2xl:h-20 2xl:text-xl"}),X.jsx("p",{className:"bg-transparent text-xs mb-2 mt-6 font-medium text-[#bf1650] xl:text-sm 2xl:text-3xl",children:"Your Email"}),X.jsx("input",{type:"email",autoComplete:"username",placeholder:"What's your email?",maxLength:25,minLength:11,onChange:i,className:"bg-[#0c0d38]  h-9 rounded-lg pl-4 text-xs w-11/12 xl:h-10 2xl:text-xl 2xl:h-20"}),X.jsx("p",{className:"bg-transparent text-xs mb-2 mt-6 font-medium text-[#bf1650] xl:text-sm 2xl:text-3xl",children:"Your Message"}),X.jsx("textarea",{id:"",onChange:r,className:"bg-[#0c0d38]   rounded-lg pl-4 text-xs w-11/12 h-48 pt-3 2xl:text-xl",placeholder:"What do you want to say?"}),X.jsx("button",{type:"submit",className:"bg-[#0c0d38]  text-sm h-10 my-3 mx-1 w-[30%] rounded-md font-medium xl:text-[#bf1650] xl:font-bold xl:text-base hover:text-white hover:bg-[#bf1650]  hover:font-semibold  hover:scale-105 transition duration-150   xl:h-11 2xl:h-16 2xl:text-3xl 2xl:my-10",children:"Submit"})]})}),X.jsx("div",{className:"text-cyan-600 hidden lg:block",children:X.jsx(QT,{size:400})})]})]})})}function e3(){return X.jsxs(X.Fragment,{children:[X.jsx(ry,{}),X.jsx(GT,{}),X.jsx(YT,{}),X.jsx(ZT,{}),X.jsx(JT,{})]})}/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function At(){return At=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},At.apply(this,arguments)}var Ft;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ft||(Ft={}));const zm="popstate";function t3(t){t===void 0&&(t={});function e(i,r){let{pathname:a,search:o,hash:s}=i.location;return ss("",{pathname:a,search:o,hash:s},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:_s(r)}return i3(e,n,null,t)}function at(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function io(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function n3(){return Math.random().toString(36).substr(2,8)}function km(t,e){return{usr:t.state,key:t.key,idx:e}}function ss(t,e,n,i){return n===void 0&&(n=null),At({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?wr(e):e,{state:n,key:e&&e.key||i||n3()})}function _s(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function wr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function i3(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:a=!1}=i,o=r.history,s=Ft.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(At({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){s=Ft.Pop;let p=u(),f=p==null?null:p-c;c=p,l&&l({action:s,location:x.location,delta:f})}function h(p,f){s=Ft.Push;let g=ss(x.location,p,f);c=u()+1;let v=km(g,c),E=x.createHref(g);try{o.pushState(v,"",E)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;r.location.assign(E)}a&&l&&l({action:s,location:x.location,delta:1})}function m(p,f){s=Ft.Replace;let g=ss(x.location,p,f);c=u();let v=km(g,c),E=x.createHref(g);o.replaceState(v,"",E),a&&l&&l({action:s,location:x.location,delta:0})}function _(p){let f=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof p=="string"?p:_s(p);return g=g.replace(/ $/,"%20"),at(f,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,f)}let x={get action(){return s},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(zm,d),l=p,()=>{r.removeEventListener(zm,d),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let f=_(p);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:m,go(p){return o.go(p)}};return x}var vt;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(vt||(vt={}));const r3=new Set(["lazy","caseSensitive","path","id","index","children"]);function a3(t){return t.index===!0}function ls(t,e,n,i){return n===void 0&&(n=[]),i===void 0&&(i={}),t.map((r,a)=>{let o=[...n,String(a)],s=typeof r.id=="string"?r.id:o.join("-");if(at(r.index!==!0||!r.children,"Cannot specify children on an index route"),at(!i[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),a3(r)){let l=At({},r,e(r),{id:s});return i[s]=l,l}else{let l=At({},r,e(r),{id:s,children:void 0});return i[s]=l,r.children&&(l.children=ls(r.children,e,o,i)),l}})}function Or(t,e,n){return n===void 0&&(n="/"),Rl(t,e,n,!1)}function Rl(t,e,n,i){let r=typeof e=="string"?wr(e):e,a=xs(r.pathname||"/",n);if(a==null)return null;let o=a_(t);s3(o);let s=null;for(let l=0;s==null&&l<o.length;++l){let c=_3(a);s=g3(o[l],c,i)}return s}function o3(t,e){let{route:n,pathname:i,params:r}=t;return{id:n.id,pathname:i,params:r,data:e[n.id],handle:n.handle}}function a_(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(at(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Xr([i,l.relativePath]),u=n.concat(l);a.children&&a.children.length>0&&(at(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),a_(a.children,e,u,c)),!(a.path==null&&!a.index)&&e.push({path:c,score:p3(c,a.index),routesMeta:u})};return t.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))r(a,o);else for(let l of o_(a.path))r(a,o,l)}),e}function o_(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),a=n.replace(/\?$/,"");if(i.length===0)return r?[a,""]:[a];let o=o_(i.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),r&&s.push(...o),s.map(l=>t.startsWith("/")&&l===""?"/":l)}function s3(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:m3(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const l3=/^:[\w-]+$/,c3=3,u3=2,d3=1,f3=10,h3=-2,Bm=t=>t==="*";function p3(t,e){let n=t.split("/"),i=n.length;return n.some(Bm)&&(i+=h3),e&&(i+=u3),n.filter(r=>!Bm(r)).reduce((r,a)=>r+(l3.test(a)?c3:a===""?d3:f3),i)}function m3(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function g3(t,e,n){n===void 0&&(n=!1);let{routesMeta:i}=t,r={},a="/",o=[];for(let s=0;s<i.length;++s){let l=i[s],c=s===i.length-1,u=a==="/"?e:e.slice(a.length)||"/",d=Hm({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),h=l.route;if(!d&&c&&n&&!i[i.length-1].route.index&&(d=Hm({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!d)return null;Object.assign(r,d.params),o.push({params:r,pathname:Xr([a,d.pathname]),pathnameBase:E3(Xr([a,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(a=Xr([a,d.pathnameBase]))}return o}function Hm(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=v3(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let a=r[0],o=a.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:i.reduce((c,u,d)=>{let{paramName:h,isOptional:m}=u;if(h==="*"){let x=s[d]||"";o=a.slice(0,a.length-x.length).replace(/(.)\/+$/,"$1")}const _=s[d];return m&&!_?c[h]=void 0:c[h]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:a,pathnameBase:o,pattern:t}}function v3(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),io(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,l)=>(i.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function _3(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return io(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function xs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function x3(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?wr(t):t;return{pathname:n?n.startsWith("/")?n:y3(n,e):e,search:w3(i),hash:T3(r)}}function y3(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Nu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function s_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function S3(t,e){let n=s_(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function M3(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=wr(t):(r=At({},t),at(!r.pathname||!r.pathname.includes("?"),Nu("?","pathname","search",r)),at(!r.pathname||!r.pathname.includes("#"),Nu("#","pathname","hash",r)),at(!r.search||!r.search.includes("#"),Nu("#","search","hash",r)));let a=t===""||r.pathname==="",o=a?"/":r.pathname,s;if(o==null)s=n;else{let d=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}s=d>=0?e[d]:"/"}let l=x3(r,s),c=o&&o!=="/"&&o.endsWith("/"),u=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Xr=t=>t.join("/").replace(/\/\/+/g,"/"),E3=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),w3=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,T3=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Sh{constructor(e,n,i,r){r===void 0&&(r=!1),this.status=e,this.statusText=n||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}}function Rc(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const l_=["post","put","patch","delete"],A3=new Set(l_),R3=["get",...l_],C3=new Set(R3),b3=new Set([301,302,303,307,308]),P3=new Set([307,308]),Uu={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},L3={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Eo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Mh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,D3=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),c_="remix-router-transitions";function N3(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",i=!n;at(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let r;if(t.mapRouteProperties)r=t.mapRouteProperties;else if(t.detectErrorBoundary){let N=t.detectErrorBoundary;r=O=>({hasErrorBoundary:N(O)})}else r=D3;let a={},o=ls(t.routes,r,void 0,a),s,l=t.basename||"/",c=t.unstable_dataStrategy||z3,u=t.unstable_patchRoutesOnMiss,d=At({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},t.future),h=null,m=new Set,_=null,x=null,p=null,f=t.hydrationData!=null,g=Or(o,t.history.location,l),v=null;if(g==null&&!u){let N=dn(404,{pathname:t.history.location.pathname}),{matches:O,route:W}=Zm(o);g=O,v={[W.id]:N}}g&&u&&!t.hydrationData&&Tn(g,o,t.history.location.pathname).active&&(g=null);let E;if(!g)E=!1,g=[];else if(g.some(N=>N.route.lazy))E=!1;else if(!g.some(N=>N.route.loader))E=!0;else if(d.v7_partialHydration){let N=t.hydrationData?t.hydrationData.loaderData:null,O=t.hydrationData?t.hydrationData.errors:null,W=Z=>Z.route.loader?typeof Z.route.loader=="function"&&Z.route.loader.hydrate===!0?!1:N&&N[Z.route.id]!==void 0||O&&O[Z.route.id]!==void 0:!0;if(O){let Z=g.findIndex(xe=>O[xe.route.id]!==void 0);E=g.slice(0,Z+1).every(W)}else E=g.every(W)}else E=t.hydrationData!=null;let P,S={historyAction:t.history.action,location:t.history.location,matches:g,initialized:E,navigation:Uu,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||v,fetchers:new Map,blockers:new Map},A=Ft.Pop,R=!1,M,y=!1,C=new Map,V=null,B=!1,H=!1,$=[],G=[],K=new Map,U=0,Q=-1,J=new Map,le=new Set,Se=new Map,Ve=new Map,q=new Set,re=new Map,he=new Map,ye=new Map,We=!1;function Ke(){if(h=t.history.listen(N=>{let{action:O,location:W,delta:Z}=N;if(We){We=!1;return}io(he.size===0||Z!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let xe=ee({currentLocation:S.location,nextLocation:W,historyAction:O});if(xe&&Z!=null){We=!0,t.history.go(Z*-1),ce(xe,{state:"blocked",location:W,proceed(){ce(xe,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),t.history.go(Z)},reset(){let Ce=new Map(S.blockers);Ce.set(xe,Eo),L({blockers:Ce})}});return}return be(O,W)}),n){Z3(e,C);let N=()=>Q3(e,C);e.addEventListener("pagehide",N),V=()=>e.removeEventListener("pagehide",N)}return S.initialized||be(Ft.Pop,S.location,{initialHydration:!0}),P}function et(){h&&h(),V&&V(),m.clear(),M&&M.abort(),S.fetchers.forEach((N,O)=>Me(O)),S.blockers.forEach((N,O)=>F(O))}function Et(N){return m.add(N),()=>m.delete(N)}function L(N,O){O===void 0&&(O={}),S=At({},S,N);let W=[],Z=[];d.v7_fetcherPersist&&S.fetchers.forEach((xe,Ce)=>{xe.state==="idle"&&(q.has(Ce)?Z.push(Ce):W.push(Ce))}),[...m].forEach(xe=>xe(S,{deletedFetchers:Z,unstable_viewTransitionOpts:O.viewTransitionOpts,unstable_flushSync:O.flushSync===!0})),d.v7_fetcherPersist&&(W.forEach(xe=>S.fetchers.delete(xe)),Z.forEach(xe=>Me(xe)))}function pt(N,O,W){var Z,xe;let{flushSync:Ce}=W===void 0?{}:W,Be=S.actionData!=null&&S.navigation.formMethod!=null&&Jn(S.navigation.formMethod)&&S.navigation.state==="loading"&&((Z=N.state)==null?void 0:Z._isRedirect)!==!0,fe;O.actionData?Object.keys(O.actionData).length>0?fe=O.actionData:fe=null:Be?fe=S.actionData:fe=null;let Ye=O.loaderData?qm(S.loaderData,O.loaderData,O.matches||[],O.errors):S.loaderData,Le=S.blockers;Le.size>0&&(Le=new Map(Le),Le.forEach((D,z)=>Le.set(z,Eo)));let Ne=R===!0||S.navigation.formMethod!=null&&Jn(S.navigation.formMethod)&&((xe=N.state)==null?void 0:xe._isRedirect)!==!0;s&&(o=s,s=void 0),B||A===Ft.Pop||(A===Ft.Push?t.history.push(N,N.state):A===Ft.Replace&&t.history.replace(N,N.state));let w;if(A===Ft.Pop){let D=C.get(S.location.pathname);D&&D.has(N.pathname)?w={currentLocation:S.location,nextLocation:N}:C.has(N.pathname)&&(w={currentLocation:N,nextLocation:S.location})}else if(y){let D=C.get(S.location.pathname);D?D.add(N.pathname):(D=new Set([N.pathname]),C.set(S.location.pathname,D)),w={currentLocation:S.location,nextLocation:N}}L(At({},O,{actionData:fe,loaderData:Ye,historyAction:A,location:N,initialized:!0,navigation:Uu,revalidation:"idle",restoreScrollPosition:lt(N,O.matches||S.matches),preventScrollReset:Ne,blockers:Le}),{viewTransitionOpts:w,flushSync:Ce===!0}),A=Ft.Pop,R=!1,y=!1,B=!1,H=!1,$=[],G=[]}async function ut(N,O){if(typeof N=="number"){t.history.go(N);return}let W=uf(S.location,S.matches,l,d.v7_prependBasename,N,d.v7_relativeSplatPath,O==null?void 0:O.fromRouteId,O==null?void 0:O.relative),{path:Z,submission:xe,error:Ce}=Vm(d.v7_normalizeFormMethod,!1,W,O),Be=S.location,fe=ss(S.location,Z,O&&O.state);fe=At({},fe,t.history.encodeLocation(fe));let Ye=O&&O.replace!=null?O.replace:void 0,Le=Ft.Push;Ye===!0?Le=Ft.Replace:Ye===!1||xe!=null&&Jn(xe.formMethod)&&xe.formAction===S.location.pathname+S.location.search&&(Le=Ft.Replace);let Ne=O&&"preventScrollReset"in O?O.preventScrollReset===!0:void 0,w=(O&&O.unstable_flushSync)===!0,D=ee({currentLocation:Be,nextLocation:fe,historyAction:Le});if(D){ce(D,{state:"blocked",location:fe,proceed(){ce(D,{state:"proceeding",proceed:void 0,reset:void 0,location:fe}),ut(N,O)},reset(){let z=new Map(S.blockers);z.set(D,Eo),L({blockers:z})}});return}return await be(Le,fe,{submission:xe,pendingError:Ce,preventScrollReset:Ne,replace:O&&O.replace,enableViewTransition:O&&O.unstable_viewTransition,flushSync:w})}function dt(){if(pe(),L({revalidation:"loading"}),S.navigation.state!=="submitting"){if(S.navigation.state==="idle"){be(S.historyAction,S.location,{startUninterruptedRevalidation:!0});return}be(A||S.historyAction,S.navigation.location,{overrideNavigation:S.navigation})}}async function be(N,O,W){M&&M.abort(),M=null,A=N,B=(W&&W.startUninterruptedRevalidation)===!0,zt(S.location,S.matches),R=(W&&W.preventScrollReset)===!0,y=(W&&W.enableViewTransition)===!0;let Z=s||o,xe=W&&W.overrideNavigation,Ce=Or(Z,O,l),Be=(W&&W.flushSync)===!0,fe=Tn(Ce,Z,O.pathname);if(fe.active&&fe.matches&&(Ce=fe.matches),!Ce){let{error:k,notFoundMatches:I,route:ie}=te(O.pathname);pt(O,{matches:I,loaderData:{},errors:{[ie.id]:k}},{flushSync:Be});return}if(S.initialized&&!H&&W3(S.location,O)&&!(W&&W.submission&&Jn(W.submission.formMethod))){pt(O,{matches:Ce},{flushSync:Be});return}M=new AbortController;let Ye=Sa(t.history,O,M.signal,W&&W.submission),Le;if(W&&W.pendingError)Le=[Ia(Ce).route.id,{type:vt.error,error:W.pendingError}];else if(W&&W.submission&&Jn(W.submission.formMethod)){let k=await Pt(Ye,O,W.submission,Ce,fe.active,{replace:W.replace,flushSync:Be});if(k.shortCircuited)return;if(k.pendingActionResult){let[I,ie]=k.pendingActionResult;if(Pn(ie)&&Rc(ie.error)&&ie.error.status===404){M=null,pt(O,{matches:k.matches,loaderData:{},errors:{[I]:ie.error}});return}}Ce=k.matches||Ce,Le=k.pendingActionResult,xe=Iu(O,W.submission),Be=!1,fe.active=!1,Ye=Sa(t.history,Ye.url,Ye.signal)}let{shortCircuited:Ne,matches:w,loaderData:D,errors:z}=await je(Ye,O,Ce,fe.active,xe,W&&W.submission,W&&W.fetcherSubmission,W&&W.replace,W&&W.initialHydration===!0,Be,Le);Ne||(M=null,pt(O,At({matches:w||Ce},Km(Le),{loaderData:D,errors:z})))}async function Pt(N,O,W,Z,xe,Ce){Ce===void 0&&(Ce={}),pe();let Be=q3(O,W);if(L({navigation:Be},{flushSync:Ce.flushSync===!0}),xe){let Le=await cn(Z,O.pathname,N.signal);if(Le.type==="aborted")return{shortCircuited:!0};if(Le.type==="error"){let{boundaryId:Ne,error:w}=de(O.pathname,Le);return{matches:Le.partialMatches,pendingActionResult:[Ne,{type:vt.error,error:w}]}}else if(Le.matches)Z=Le.matches;else{let{notFoundMatches:Ne,error:w,route:D}=te(O.pathname);return{matches:Ne,pendingActionResult:[D.id,{type:vt.error,error:w}]}}}let fe,Ye=Do(Z,O);if(!Ye.route.action&&!Ye.route.lazy)fe={type:vt.error,error:dn(405,{method:N.method,pathname:O.pathname,routeId:Ye.route.id})};else if(fe=(await ne("action",N,[Ye],Z))[0],N.signal.aborted)return{shortCircuited:!0};if(Vr(fe)){let Le;return Ce&&Ce.replace!=null?Le=Ce.replace:Le=Xm(fe.response.headers.get("Location"),new URL(N.url),l)===S.location.pathname+S.location.search,await oe(N,fe,{submission:W,replace:Le}),{shortCircuited:!0}}if(Hr(fe))throw dn(400,{type:"defer-action"});if(Pn(fe)){let Le=Ia(Z,Ye.route.id);return(Ce&&Ce.replace)!==!0&&(A=Ft.Push),{matches:Z,pendingActionResult:[Le.route.id,fe]}}return{matches:Z,pendingActionResult:[Ye.route.id,fe]}}async function je(N,O,W,Z,xe,Ce,Be,fe,Ye,Le,Ne){let w=xe||Iu(O,Ce),D=Ce||Be||eg(w),z=!B&&(!d.v7_partialHydration||!Ye);if(Z){if(z){let ze=Xe(Ne);L(At({navigation:w},ze!==void 0?{actionData:ze}:{}),{flushSync:Le})}let Ie=await cn(W,O.pathname,N.signal);if(Ie.type==="aborted")return{shortCircuited:!0};if(Ie.type==="error"){let{boundaryId:ze,error:we}=de(O.pathname,Ie);return{matches:Ie.partialMatches,loaderData:{},errors:{[ze]:we}}}else if(Ie.matches)W=Ie.matches;else{let{error:ze,notFoundMatches:we,route:$e}=te(O.pathname);return{matches:we,loaderData:{},errors:{[$e.id]:ze}}}}let k=s||o,[I,ie]=Gm(t.history,S,W,D,O,d.v7_partialHydration&&Ye===!0,d.v7_skipActionErrorRevalidation,H,$,G,q,Se,le,k,l,Ne);if(ke(Ie=>!(W&&W.some(ze=>ze.route.id===Ie))||I&&I.some(ze=>ze.route.id===Ie)),Q=++U,I.length===0&&ie.length===0){let Ie=Ge();return pt(O,At({matches:W,loaderData:{},errors:Ne&&Pn(Ne[1])?{[Ne[0]]:Ne[1].error}:null},Km(Ne),Ie?{fetchers:new Map(S.fetchers)}:{}),{flushSync:Le}),{shortCircuited:!0}}if(z){let Ie={};if(!Z){Ie.navigation=w;let ze=Xe(Ne);ze!==void 0&&(Ie.actionData=ze)}ie.length>0&&(Ie.fetchers=b(ie)),L(Ie,{flushSync:Le})}ie.forEach(Ie=>{K.has(Ie.key)&&De(Ie.key),Ie.controller&&K.set(Ie.key,Ie.controller)});let me=()=>ie.forEach(Ie=>De(Ie.key));M&&M.signal.addEventListener("abort",me);let{loaderResults:Ee,fetcherResults:Te}=await Fe(S.matches,W,I,ie,N);if(N.signal.aborted)return{shortCircuited:!0};M&&M.signal.removeEventListener("abort",me),ie.forEach(Ie=>K.delete(Ie.key));let Ue=Qm([...Ee,...Te]);if(Ue){if(Ue.idx>=I.length){let Ie=ie[Ue.idx-I.length].key;le.add(Ie)}return await oe(N,Ue.result,{replace:fe}),{shortCircuited:!0}}let{loaderData:Oe,errors:Pe}=$m(S,W,I,Ee,Ne,ie,Te,re);re.forEach((Ie,ze)=>{Ie.subscribe(we=>{(we||Ie.done)&&re.delete(ze)})}),d.v7_partialHydration&&Ye&&S.errors&&Object.entries(S.errors).filter(Ie=>{let[ze]=Ie;return!I.some(we=>we.route.id===ze)}).forEach(Ie=>{let[ze,we]=Ie;Pe=Object.assign(Pe||{},{[ze]:we})});let rt=Ge(),mt=qe(Q),gt=rt||mt||ie.length>0;return At({matches:W,loaderData:Oe,errors:Pe},gt?{fetchers:new Map(S.fetchers)}:{})}function Xe(N){if(N&&!Pn(N[1]))return{[N[0]]:N[1].data};if(S.actionData)return Object.keys(S.actionData).length===0?null:S.actionData}function b(N){return N.forEach(O=>{let W=S.fetchers.get(O.key),Z=wo(void 0,W?W.data:void 0);S.fetchers.set(O.key,Z)}),new Map(S.fetchers)}function T(N,O,W,Z){if(i)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");K.has(N)&&De(N);let xe=(Z&&Z.unstable_flushSync)===!0,Ce=s||o,Be=uf(S.location,S.matches,l,d.v7_prependBasename,W,d.v7_relativeSplatPath,O,Z==null?void 0:Z.relative),fe=Or(Ce,Be,l),Ye=Tn(fe,Ce,Be);if(Ye.active&&Ye.matches&&(fe=Ye.matches),!fe){He(N,O,dn(404,{pathname:Be}),{flushSync:xe});return}let{path:Le,submission:Ne,error:w}=Vm(d.v7_normalizeFormMethod,!0,Be,Z);if(w){He(N,O,w,{flushSync:xe});return}let D=Do(fe,Le);if(R=(Z&&Z.preventScrollReset)===!0,Ne&&Jn(Ne.formMethod)){j(N,O,Le,D,fe,Ye.active,xe,Ne);return}Se.set(N,{routeId:O,path:Le}),ae(N,O,Le,D,fe,Ye.active,xe,Ne)}async function j(N,O,W,Z,xe,Ce,Be,fe){pe(),Se.delete(N);function Ye($e){if(!$e.route.action&&!$e.route.lazy){let Ze=dn(405,{method:fe.formMethod,pathname:W,routeId:O});return He(N,O,Ze,{flushSync:Be}),!0}return!1}if(!Ce&&Ye(Z))return;let Le=S.fetchers.get(N);_e(N,K3(fe,Le),{flushSync:Be});let Ne=new AbortController,w=Sa(t.history,W,Ne.signal,fe);if(Ce){let $e=await cn(xe,W,w.signal);if($e.type==="aborted")return;if($e.type==="error"){let{error:Ze}=de(W,$e);He(N,O,Ze,{flushSync:Be});return}else if($e.matches){if(xe=$e.matches,Z=Do(xe,W),Ye(Z))return}else{He(N,O,dn(404,{pathname:W}),{flushSync:Be});return}}K.set(N,Ne);let D=U,k=(await ne("action",w,[Z],xe))[0];if(w.signal.aborted){K.get(N)===Ne&&K.delete(N);return}if(d.v7_fetcherPersist&&q.has(N)){if(Vr(k)||Pn(k)){_e(N,Zi(void 0));return}}else{if(Vr(k))if(K.delete(N),Q>D){_e(N,Zi(void 0));return}else return le.add(N),_e(N,wo(fe)),oe(w,k,{fetcherSubmission:fe});if(Pn(k)){He(N,O,k.error);return}}if(Hr(k))throw dn(400,{type:"defer-action"});let I=S.navigation.location||S.location,ie=Sa(t.history,I,Ne.signal),me=s||o,Ee=S.navigation.state!=="idle"?Or(me,S.navigation.location,l):S.matches;at(Ee,"Didn't find any matches after fetcher action");let Te=++U;J.set(N,Te);let Ue=wo(fe,k.data);S.fetchers.set(N,Ue);let[Oe,Pe]=Gm(t.history,S,Ee,fe,I,!1,d.v7_skipActionErrorRevalidation,H,$,G,q,Se,le,me,l,[Z.route.id,k]);Pe.filter($e=>$e.key!==N).forEach($e=>{let Ze=$e.key,gn=S.fetchers.get(Ze),Vi=wo(void 0,gn?gn.data:void 0);S.fetchers.set(Ze,Vi),K.has(Ze)&&De(Ze),$e.controller&&K.set(Ze,$e.controller)}),L({fetchers:new Map(S.fetchers)});let rt=()=>Pe.forEach($e=>De($e.key));Ne.signal.addEventListener("abort",rt);let{loaderResults:mt,fetcherResults:gt}=await Fe(S.matches,Ee,Oe,Pe,ie);if(Ne.signal.aborted)return;Ne.signal.removeEventListener("abort",rt),J.delete(N),K.delete(N),Pe.forEach($e=>K.delete($e.key));let Ie=Qm([...mt,...gt]);if(Ie){if(Ie.idx>=Oe.length){let $e=Pe[Ie.idx-Oe.length].key;le.add($e)}return oe(ie,Ie.result)}let{loaderData:ze,errors:we}=$m(S,S.matches,Oe,mt,void 0,Pe,gt,re);if(S.fetchers.has(N)){let $e=Zi(k.data);S.fetchers.set(N,$e)}qe(Te),S.navigation.state==="loading"&&Te>Q?(at(A,"Expected pending action"),M&&M.abort(),pt(S.navigation.location,{matches:Ee,loaderData:ze,errors:we,fetchers:new Map(S.fetchers)})):(L({errors:we,loaderData:qm(S.loaderData,ze,Ee,we),fetchers:new Map(S.fetchers)}),H=!1)}async function ae(N,O,W,Z,xe,Ce,Be,fe){let Ye=S.fetchers.get(N);_e(N,wo(fe,Ye?Ye.data:void 0),{flushSync:Be});let Le=new AbortController,Ne=Sa(t.history,W,Le.signal);if(Ce){let k=await cn(xe,W,Ne.signal);if(k.type==="aborted")return;if(k.type==="error"){let{error:I}=de(W,k);He(N,O,I,{flushSync:Be});return}else if(k.matches)xe=k.matches,Z=Do(xe,W);else{He(N,O,dn(404,{pathname:W}),{flushSync:Be});return}}K.set(N,Le);let w=U,z=(await ne("loader",Ne,[Z],xe))[0];if(Hr(z)&&(z=await p_(z,Ne.signal,!0)||z),K.get(N)===Le&&K.delete(N),!Ne.signal.aborted){if(q.has(N)){_e(N,Zi(void 0));return}if(Vr(z))if(Q>w){_e(N,Zi(void 0));return}else{le.add(N),await oe(Ne,z);return}if(Pn(z)){He(N,O,z.error);return}at(!Hr(z),"Unhandled fetcher deferred data"),_e(N,Zi(z.data))}}async function oe(N,O,W){let{submission:Z,fetcherSubmission:xe,replace:Ce}=W===void 0?{}:W;O.response.headers.has("X-Remix-Revalidate")&&(H=!0);let Be=O.response.headers.get("Location");at(Be,"Expected a Location header on the redirect Response"),Be=Xm(Be,new URL(N.url),l);let fe=ss(S.location,Be,{_isRedirect:!0});if(n){let z=!1;if(O.response.headers.has("X-Remix-Reload-Document"))z=!0;else if(Mh.test(Be)){const k=t.history.createURL(Be);z=k.origin!==e.location.origin||xs(k.pathname,l)==null}if(z){Ce?e.location.replace(Be):e.location.assign(Be);return}}M=null;let Ye=Ce===!0?Ft.Replace:Ft.Push,{formMethod:Le,formAction:Ne,formEncType:w}=S.navigation;!Z&&!xe&&Le&&Ne&&w&&(Z=eg(S.navigation));let D=Z||xe;if(P3.has(O.response.status)&&D&&Jn(D.formMethod))await be(Ye,fe,{submission:At({},D,{formAction:Be}),preventScrollReset:R});else{let z=Iu(fe,Z);await be(Ye,fe,{overrideNavigation:z,fetcherSubmission:xe,preventScrollReset:R})}}async function ne(N,O,W,Z){try{let xe=await k3(c,N,O,W,Z,a,r);return await Promise.all(xe.map((Ce,Be)=>{if(X3(Ce)){let fe=Ce.result;return{type:vt.redirect,response:V3(fe,O,W[Be].route.id,Z,l,d.v7_relativeSplatPath)}}return H3(Ce)}))}catch(xe){return W.map(()=>({type:vt.error,error:xe}))}}async function Fe(N,O,W,Z,xe){let[Ce,...Be]=await Promise.all([W.length?ne("loader",xe,W,O):[],...Z.map(fe=>{if(fe.matches&&fe.match&&fe.controller){let Ye=Sa(t.history,fe.path,fe.controller.signal);return ne("loader",Ye,[fe.match],fe.matches).then(Le=>Le[0])}else return Promise.resolve({type:vt.error,error:dn(404,{pathname:fe.path})})})]);return await Promise.all([Jm(N,W,Ce,Ce.map(()=>xe.signal),!1,S.loaderData),Jm(N,Z.map(fe=>fe.match),Be,Z.map(fe=>fe.controller?fe.controller.signal:null),!0)]),{loaderResults:Ce,fetcherResults:Be}}function pe(){H=!0,$.push(...ke()),Se.forEach((N,O)=>{K.has(O)&&(G.push(O),De(O))})}function _e(N,O,W){W===void 0&&(W={}),S.fetchers.set(N,O),L({fetchers:new Map(S.fetchers)},{flushSync:(W&&W.flushSync)===!0})}function He(N,O,W,Z){Z===void 0&&(Z={});let xe=Ia(S.matches,O);Me(N),L({errors:{[xe.route.id]:W},fetchers:new Map(S.fetchers)},{flushSync:(Z&&Z.flushSync)===!0})}function ue(N){return d.v7_fetcherPersist&&(Ve.set(N,(Ve.get(N)||0)+1),q.has(N)&&q.delete(N)),S.fetchers.get(N)||L3}function Me(N){let O=S.fetchers.get(N);K.has(N)&&!(O&&O.state==="loading"&&J.has(N))&&De(N),Se.delete(N),J.delete(N),le.delete(N),q.delete(N),S.fetchers.delete(N)}function nt(N){if(d.v7_fetcherPersist){let O=(Ve.get(N)||0)-1;O<=0?(Ve.delete(N),q.add(N)):Ve.set(N,O)}else Me(N);L({fetchers:new Map(S.fetchers)})}function De(N){let O=K.get(N);at(O,"Expected fetch controller: "+N),O.abort(),K.delete(N)}function Ae(N){for(let O of N){let W=ue(O),Z=Zi(W.data);S.fetchers.set(O,Z)}}function Ge(){let N=[],O=!1;for(let W of le){let Z=S.fetchers.get(W);at(Z,"Expected fetcher: "+W),Z.state==="loading"&&(le.delete(W),N.push(W),O=!0)}return Ae(N),O}function qe(N){let O=[];for(let[W,Z]of J)if(Z<N){let xe=S.fetchers.get(W);at(xe,"Expected fetcher: "+W),xe.state==="loading"&&(De(W),J.delete(W),O.push(W))}return Ae(O),O.length>0}function xt(N,O){let W=S.blockers.get(N)||Eo;return he.get(N)!==O&&he.set(N,O),W}function F(N){S.blockers.delete(N),he.delete(N)}function ce(N,O){let W=S.blockers.get(N)||Eo;at(W.state==="unblocked"&&O.state==="blocked"||W.state==="blocked"&&O.state==="blocked"||W.state==="blocked"&&O.state==="proceeding"||W.state==="blocked"&&O.state==="unblocked"||W.state==="proceeding"&&O.state==="unblocked","Invalid blocker state transition: "+W.state+" -> "+O.state);let Z=new Map(S.blockers);Z.set(N,O),L({blockers:Z})}function ee(N){let{currentLocation:O,nextLocation:W,historyAction:Z}=N;if(he.size===0)return;he.size>1&&io(!1,"A router only supports one blocker at a time");let xe=Array.from(he.entries()),[Ce,Be]=xe[xe.length-1],fe=S.blockers.get(Ce);if(!(fe&&fe.state==="proceeding")&&Be({currentLocation:O,nextLocation:W,historyAction:Z}))return Ce}function te(N){let O=dn(404,{pathname:N}),W=s||o,{matches:Z,route:xe}=Zm(W);return ke(),{notFoundMatches:Z,route:xe,error:O}}function de(N,O){return{boundaryId:Ia(O.partialMatches).route.id,error:dn(400,{type:"route-discovery",pathname:N,message:O.error!=null&&"message"in O.error?O.error:String(O.error)})}}function ke(N){let O=[];return re.forEach((W,Z)=>{(!N||N(Z))&&(W.cancel(),O.push(Z),re.delete(Z))}),O}function it(N,O,W){if(_=N,p=O,x=W||null,!f&&S.navigation===Uu){f=!0;let Z=lt(S.location,S.matches);Z!=null&&L({restoreScrollPosition:Z})}return()=>{_=null,p=null,x=null}}function Tt(N,O){return x&&x(N,O.map(Z=>o3(Z,S.loaderData)))||N.key}function zt(N,O){if(_&&p){let W=Tt(N,O);_[W]=p()}}function lt(N,O){if(_){let W=Tt(N,O),Z=_[W];if(typeof Z=="number")return Z}return null}function Tn(N,O,W){if(u)if(N){let Z=N[N.length-1].route;if(Z.path&&(Z.path==="*"||Z.path.endsWith("/*")))return{active:!0,matches:Rl(O,W,l,!0)}}else return{active:!0,matches:Rl(O,W,l,!0)||[]};return{active:!1,matches:null}}async function cn(N,O,W){let Z=N,xe=Z.length>0?Z[Z.length-1].route:null;for(;;){let Ce=s==null,Be=s||o;try{await O3(u,O,Z,Be,a,r,ye,W)}catch(Ne){return{type:"error",error:Ne,partialMatches:Z}}finally{Ce&&(o=[...o])}if(W.aborted)return{type:"aborted"};let fe=Or(Be,O,l),Ye=!1;if(fe){let Ne=fe[fe.length-1].route;if(Ne.index)return{type:"success",matches:fe};if(Ne.path&&Ne.path.length>0)if(Ne.path==="*")Ye=!0;else return{type:"success",matches:fe}}let Le=Rl(Be,O,l,!0);if(!Le||Z.map(Ne=>Ne.route.id).join("-")===Le.map(Ne=>Ne.route.id).join("-"))return{type:"success",matches:Ye?fe:null};if(Z=Le,xe=Z[Z.length-1].route,xe.path==="*")return{type:"success",matches:Z}}}function ys(N){a={},s=ls(N,r,void 0,a)}function gi(N,O){let W=s==null;d_(N,O,s||o,a,r),W&&(o=[...o],L({}))}return P={get basename(){return l},get future(){return d},get state(){return S},get routes(){return o},get window(){return e},initialize:Ke,subscribe:Et,enableScrollRestoration:it,navigate:ut,fetch:T,revalidate:dt,createHref:N=>t.history.createHref(N),encodeLocation:N=>t.history.encodeLocation(N),getFetcher:ue,deleteFetcher:nt,dispose:et,getBlocker:xt,deleteBlocker:F,patchRoutes:gi,_internalFetchControllers:K,_internalActiveDeferreds:re,_internalSetRoutes:ys},P}function U3(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function uf(t,e,n,i,r,a,o,s){let l,c;if(o){l=[];for(let d of e)if(l.push(d),d.route.id===o){c=d;break}}else l=e,c=e[e.length-1];let u=M3(r||".",S3(l,a),xs(t.pathname,n)||t.pathname,s==="path");return r==null&&(u.search=t.search,u.hash=t.hash),(r==null||r===""||r===".")&&c&&c.route.index&&!Eh(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Xr([n,u.pathname])),_s(u)}function Vm(t,e,n,i){if(!i||!U3(i))return{path:n};if(i.formMethod&&!$3(i.formMethod))return{path:n,error:dn(405,{method:i.formMethod})};let r=()=>({path:n,error:dn(400,{type:"invalid-body"})}),a=i.formMethod||"get",o=t?a.toUpperCase():a.toLowerCase(),s=f_(n);if(i.body!==void 0){if(i.formEncType==="text/plain"){if(!Jn(o))return r();let h=typeof i.body=="string"?i.body:i.body instanceof FormData||i.body instanceof URLSearchParams?Array.from(i.body.entries()).reduce((m,_)=>{let[x,p]=_;return""+m+x+"="+p+`
`},""):String(i.body);return{path:n,submission:{formMethod:o,formAction:s,formEncType:i.formEncType,formData:void 0,json:void 0,text:h}}}else if(i.formEncType==="application/json"){if(!Jn(o))return r();try{let h=typeof i.body=="string"?JSON.parse(i.body):i.body;return{path:n,submission:{formMethod:o,formAction:s,formEncType:i.formEncType,formData:void 0,json:h,text:void 0}}}catch{return r()}}}at(typeof FormData=="function","FormData is not available in this environment");let l,c;if(i.formData)l=df(i.formData),c=i.formData;else if(i.body instanceof FormData)l=df(i.body),c=i.body;else if(i.body instanceof URLSearchParams)l=i.body,c=Ym(l);else if(i.body==null)l=new URLSearchParams,c=new FormData;else try{l=new URLSearchParams(i.body),c=Ym(l)}catch{return r()}let u={formMethod:o,formAction:s,formEncType:i&&i.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Jn(u.formMethod))return{path:n,submission:u};let d=wr(n);return e&&d.search&&Eh(d.search)&&l.append("index",""),d.search="?"+l,{path:_s(d),submission:u}}function I3(t,e){let n=t;if(e){let i=t.findIndex(r=>r.route.id===e);i>=0&&(n=t.slice(0,i))}return n}function Gm(t,e,n,i,r,a,o,s,l,c,u,d,h,m,_,x){let p=x?Pn(x[1])?x[1].error:x[1].data:void 0,f=t.createURL(e.location),g=t.createURL(r),v=x&&Pn(x[1])?x[0]:void 0,E=v?I3(n,v):n,P=x?x[1].statusCode:void 0,S=o&&P&&P>=400,A=E.filter((M,y)=>{let{route:C}=M;if(C.lazy)return!0;if(C.loader==null)return!1;if(a)return typeof C.loader!="function"||C.loader.hydrate?!0:e.loaderData[C.id]===void 0&&(!e.errors||e.errors[C.id]===void 0);if(F3(e.loaderData,e.matches[y],M)||l.some(H=>H===M.route.id))return!0;let V=e.matches[y],B=M;return Wm(M,At({currentUrl:f,currentParams:V.params,nextUrl:g,nextParams:B.params},i,{actionResult:p,actionStatus:P,defaultShouldRevalidate:S?!1:s||f.pathname+f.search===g.pathname+g.search||f.search!==g.search||u_(V,B)}))}),R=[];return d.forEach((M,y)=>{if(a||!n.some($=>$.route.id===M.routeId)||u.has(y))return;let C=Or(m,M.path,_);if(!C){R.push({key:y,routeId:M.routeId,path:M.path,matches:null,match:null,controller:null});return}let V=e.fetchers.get(y),B=Do(C,M.path),H=!1;h.has(y)?H=!1:c.includes(y)?H=!0:V&&V.state!=="idle"&&V.data===void 0?H=s:H=Wm(B,At({currentUrl:f,currentParams:e.matches[e.matches.length-1].params,nextUrl:g,nextParams:n[n.length-1].params},i,{actionResult:p,actionStatus:P,defaultShouldRevalidate:S?!1:s})),H&&R.push({key:y,routeId:M.routeId,path:M.path,matches:C,match:B,controller:new AbortController})}),[A,R]}function F3(t,e,n){let i=!e||n.route.id!==e.route.id,r=t[n.route.id]===void 0;return i||r}function u_(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Wm(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function O3(t,e,n,i,r,a,o,s){let l=[e,...n.map(c=>c.route.id)].join("-");try{let c=o.get(l);c||(c=t({path:e,matches:n,patch:(u,d)=>{s.aborted||d_(u,d,i,r,a)}}),o.set(l,c)),c&&j3(c)&&await c}finally{o.delete(l)}}function d_(t,e,n,i,r){if(t){var a;let o=i[t];at(o,"No route found to patch children into: routeId = "+t);let s=ls(e,r,[t,"patch",String(((a=o.children)==null?void 0:a.length)||"0")],i);o.children?o.children.push(...s):o.children=s}else{let o=ls(e,r,["patch",String(n.length||"0")],i);n.push(...o)}}async function jm(t,e,n){if(!t.lazy)return;let i=await t.lazy();if(!t.lazy)return;let r=n[t.id];at(r,"No route found in manifest");let a={};for(let o in i){let l=r[o]!==void 0&&o!=="hasErrorBoundary";io(!l,'Route "'+r.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!r3.has(o)&&(a[o]=i[o])}Object.assign(r,a),Object.assign(r,At({},e(r),{lazy:void 0}))}function z3(t){return Promise.all(t.matches.map(e=>e.resolve()))}async function k3(t,e,n,i,r,a,o,s){let l=i.reduce((d,h)=>d.add(h.route.id),new Set),c=new Set,u=await t({matches:r.map(d=>{let h=l.has(d.route.id);return At({},d,{shouldLoad:h,resolve:_=>(c.add(d.route.id),h?B3(e,n,d,a,o,_,s):Promise.resolve({type:vt.data,result:void 0}))})}),request:n,params:r[0].params,context:s});return r.forEach(d=>at(c.has(d.route.id),'`match.resolve()` was not called for route id "'+d.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),u.filter((d,h)=>l.has(r[h].route.id))}async function B3(t,e,n,i,r,a,o){let s,l,c=u=>{let d,h=new Promise((x,p)=>d=p);l=()=>d(),e.signal.addEventListener("abort",l);let m=x=>typeof u!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):u({request:e,params:n.params,context:o},...x!==void 0?[x]:[]),_;return a?_=a(x=>m(x)):_=(async()=>{try{return{type:"data",result:await m()}}catch(x){return{type:"error",result:x}}})(),Promise.race([_,h])};try{let u=n.route[t];if(n.route.lazy)if(u){let d,[h]=await Promise.all([c(u).catch(m=>{d=m}),jm(n.route,r,i)]);if(d!==void 0)throw d;s=h}else if(await jm(n.route,r,i),u=n.route[t],u)s=await c(u);else if(t==="action"){let d=new URL(e.url),h=d.pathname+d.search;throw dn(405,{method:e.method,pathname:h,routeId:n.route.id})}else return{type:vt.data,result:void 0};else if(u)s=await c(u);else{let d=new URL(e.url),h=d.pathname+d.search;throw dn(404,{pathname:h})}at(s.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(u){return{type:vt.error,result:u}}finally{l&&e.signal.removeEventListener("abort",l)}return s}async function H3(t){let{result:e,type:n,status:i}=t;if(h_(e)){let o;try{let s=e.headers.get("Content-Type");s&&/\bapplication\/json\b/.test(s)?e.body==null?o=null:o=await e.json():o=await e.text()}catch(s){return{type:vt.error,error:s}}return n===vt.error?{type:vt.error,error:new Sh(e.status,e.statusText,o),statusCode:e.status,headers:e.headers}:{type:vt.data,data:o,statusCode:e.status,headers:e.headers}}if(n===vt.error)return{type:vt.error,error:e,statusCode:Rc(e)?e.status:i};if(Y3(e)){var r,a;return{type:vt.deferred,deferredData:e,statusCode:(r=e.init)==null?void 0:r.status,headers:((a=e.init)==null?void 0:a.headers)&&new Headers(e.init.headers)}}return{type:vt.data,data:e,statusCode:i}}function V3(t,e,n,i,r,a){let o=t.headers.get("Location");if(at(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Mh.test(o)){let s=i.slice(0,i.findIndex(l=>l.route.id===n)+1);o=uf(new URL(e.url),s,r,!0,o,a),t.headers.set("Location",o)}return t}function Xm(t,e,n){if(Mh.test(t)){let i=t,r=i.startsWith("//")?new URL(e.protocol+i):new URL(i),a=xs(r.pathname,n)!=null;if(r.origin===e.origin&&a)return r.pathname+r.search+r.hash}return t}function Sa(t,e,n,i){let r=t.createURL(f_(e)).toString(),a={signal:n};if(i&&Jn(i.formMethod)){let{formMethod:o,formEncType:s}=i;a.method=o.toUpperCase(),s==="application/json"?(a.headers=new Headers({"Content-Type":s}),a.body=JSON.stringify(i.json)):s==="text/plain"?a.body=i.text:s==="application/x-www-form-urlencoded"&&i.formData?a.body=df(i.formData):a.body=i.formData}return new Request(r,a)}function df(t){let e=new URLSearchParams;for(let[n,i]of t.entries())e.append(n,typeof i=="string"?i:i.name);return e}function Ym(t){let e=new FormData;for(let[n,i]of t.entries())e.append(n,i);return e}function G3(t,e,n,i,r,a){let o={},s=null,l,c=!1,u={},d=i&&Pn(i[1])?i[1].error:void 0;return n.forEach((h,m)=>{let _=e[m].route.id;if(at(!Vr(h),"Cannot handle redirect results in processLoaderData"),Pn(h)){let x=h.error;d!==void 0&&(x=d,d=void 0),s=s||{};{let p=Ia(t,_);s[p.route.id]==null&&(s[p.route.id]=x)}o[_]=void 0,c||(c=!0,l=Rc(h.error)?h.error.status:500),h.headers&&(u[_]=h.headers)}else Hr(h)?(r.set(_,h.deferredData),o[_]=h.deferredData.data,h.statusCode!=null&&h.statusCode!==200&&!c&&(l=h.statusCode),h.headers&&(u[_]=h.headers)):(o[_]=h.data,h.statusCode&&h.statusCode!==200&&!c&&(l=h.statusCode),h.headers&&(u[_]=h.headers))}),d!==void 0&&i&&(s={[i[0]]:d},o[i[0]]=void 0),{loaderData:o,errors:s,statusCode:l||200,loaderHeaders:u}}function $m(t,e,n,i,r,a,o,s){let{loaderData:l,errors:c}=G3(e,n,i,r,s);for(let u=0;u<a.length;u++){let{key:d,match:h,controller:m}=a[u];at(o!==void 0&&o[u]!==void 0,"Did not find corresponding fetcher result");let _=o[u];if(!(m&&m.signal.aborted))if(Pn(_)){let x=Ia(t.matches,h==null?void 0:h.route.id);c&&c[x.route.id]||(c=At({},c,{[x.route.id]:_.error})),t.fetchers.delete(d)}else if(Vr(_))at(!1,"Unhandled fetcher revalidation redirect");else if(Hr(_))at(!1,"Unhandled fetcher deferred data");else{let x=Zi(_.data);t.fetchers.set(d,x)}}return{loaderData:l,errors:c}}function qm(t,e,n,i){let r=At({},e);for(let a of n){let o=a.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(r[o]=e[o]):t[o]!==void 0&&a.route.loader&&(r[o]=t[o]),i&&i.hasOwnProperty(o))break}return r}function Km(t){return t?Pn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Ia(t,e){return(e?t.slice(0,t.findIndex(i=>i.route.id===e)+1):[...t]).reverse().find(i=>i.route.hasErrorBoundary===!0)||t[0]}function Zm(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function dn(t,e){let{pathname:n,routeId:i,method:r,type:a,message:o}=e===void 0?{}:e,s="Unknown Server Error",l="Unknown @remix-run/router error";return t===400?(s="Bad Request",a==="route-discovery"?l='Unable to match URL "'+n+'" - the `unstable_patchRoutesOnMiss()` '+(`function threw the following error:
`+o):r&&n&&i?l="You made a "+r+' request to "'+n+'" but '+('did not provide a `loader` for route "'+i+'", ')+"so there is no way to handle the request.":a==="defer-action"?l="defer() is not supported in actions":a==="invalid-body"&&(l="Unable to encode submission body")):t===403?(s="Forbidden",l='Route "'+i+'" does not match URL "'+n+'"'):t===404?(s="Not Found",l='No route matches URL "'+n+'"'):t===405&&(s="Method Not Allowed",r&&n&&i?l="You made a "+r.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+i+'", ')+"so there is no way to handle the request.":r&&(l='Invalid request method "'+r.toUpperCase()+'"')),new Sh(t||500,s,new Error(l),!0)}function Qm(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Vr(n))return{result:n,idx:e}}}function f_(t){let e=typeof t=="string"?wr(t):t;return _s(At({},e,{hash:""}))}function W3(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function j3(t){return typeof t=="object"&&t!=null&&"then"in t}function X3(t){return h_(t.result)&&b3.has(t.result.status)}function Hr(t){return t.type===vt.deferred}function Pn(t){return t.type===vt.error}function Vr(t){return(t&&t.type)===vt.redirect}function Y3(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function h_(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function $3(t){return C3.has(t.toLowerCase())}function Jn(t){return A3.has(t.toLowerCase())}async function Jm(t,e,n,i,r,a){for(let o=0;o<n.length;o++){let s=n[o],l=e[o];if(!l)continue;let c=t.find(d=>d.route.id===l.route.id),u=c!=null&&!u_(c,l)&&(a&&a[l.route.id])!==void 0;if(Hr(s)&&(r||u)){let d=i[o];at(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await p_(s,d,r).then(h=>{h&&(n[o]=h||n[o])})}}}async function p_(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:vt.data,data:t.deferredData.unwrappedData}}catch(r){return{type:vt.error,error:r}}return{type:vt.data,data:t.deferredData.data}}}function Eh(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Do(t,e){let n=typeof e=="string"?wr(e).search:e.search;if(t[t.length-1].route.index&&Eh(n||""))return t[t.length-1];let i=s_(t);return i[i.length-1]}function eg(t){let{formMethod:e,formAction:n,formEncType:i,text:r,formData:a,json:o}=t;if(!(!e||!n||!i)){if(r!=null)return{formMethod:e,formAction:n,formEncType:i,formData:void 0,json:void 0,text:r};if(a!=null)return{formMethod:e,formAction:n,formEncType:i,formData:a,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:i,formData:void 0,json:o,text:void 0}}}function Iu(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function q3(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function wo(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function K3(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Zi(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Z3(t,e){try{let n=t.sessionStorage.getItem(c_);if(n){let i=JSON.parse(n);for(let[r,a]of Object.entries(i||{}))a&&Array.isArray(a)&&e.set(r,new Set(a||[]))}}catch{}}function Q3(t,e){if(e.size>0){let n={};for(let[i,r]of e)n[i]=[...r];try{t.sessionStorage.setItem(c_,JSON.stringify(n))}catch(i){io(!1,"Failed to save applied view transitions in sessionStorage ("+i+").")}}}/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ff(){return ff=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ff.apply(this,arguments)}const m_=ve.createContext(null),g_=ve.createContext(null),v_=ve.createContext(null),wh=ve.createContext(null),Cc=ve.createContext({outlet:null,matches:[],isDataRoute:!1}),__=ve.createContext(null);function Th(){return ve.useContext(wh)!=null}function J3(){return Th()||at(!1),ve.useContext(wh).location}function eA(t,e,n,i){Th()||at(!1);let{navigator:r}=ve.useContext(v_),{matches:a}=ve.useContext(Cc),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=J3(),u;u=c;let d=u.pathname||"/",h=d;if(l!=="/"){let x=l.replace(/^\//,"").split("/");h="/"+d.replace(/^\//,"").split("/").slice(x.length).join("/")}let m=Or(t,{pathname:h});return aA(m&&m.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:Xr([l,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:Xr([l,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),a,n,i)}function tA(){let t=cA(),e=Rc(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ve.createElement(ve.Fragment,null,ve.createElement("h2",null,"Unexpected Application Error!"),ve.createElement("h3",{style:{fontStyle:"italic"}},e),n?ve.createElement("pre",{style:r},n):null,null)}const nA=ve.createElement(tA,null);class iA extends ve.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?ve.createElement(Cc.Provider,{value:this.props.routeContext},ve.createElement(__.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rA(t){let{routeContext:e,match:n,children:i}=t,r=ve.useContext(m_);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),ve.createElement(Cc.Provider,{value:e},i)}function aA(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var a;if((a=n)!=null&&a.errors)t=n.matches;else return null}let o=t,s=(r=n)==null?void 0:r.errors;if(s!=null){let u=o.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);u>=0||at(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let u=0;u<o.length;u++){let d=o[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:h,errors:m}=n,_=d.route.loader&&h[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||_){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,d,h)=>{let m,_=!1,x=null,p=null;n&&(m=s&&d.route.id?s[d.route.id]:void 0,x=d.route.errorElement||nA,l&&(c<0&&h===0?(uA("route-fallback"),_=!0,p=null):c===h&&(_=!0,p=d.route.hydrateFallbackElement||null)));let f=e.concat(o.slice(0,h+1)),g=()=>{let v;return m?v=x:_?v=p:d.route.Component?v=ve.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=u,ve.createElement(rA,{match:d,routeContext:{outlet:u,matches:f,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?ve.createElement(iA,{location:n.location,revalidation:n.revalidation,component:x,error:m,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()},null)}var hf=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(hf||{});function oA(t){let e=ve.useContext(g_);return e||at(!1),e}function sA(t){let e=ve.useContext(Cc);return e||at(!1),e}function lA(t){let e=sA(),n=e.matches[e.matches.length-1];return n.route.id||at(!1),n.route.id}function cA(){var t;let e=ve.useContext(__),n=oA(hf.UseRouteError),i=lA(hf.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}const tg={};function uA(t,e,n){tg[t]||(tg[t]=!0)}function dA(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Ft.Pop,navigator:a,static:o=!1,future:s}=t;Th()&&at(!1);let l=e.replace(/^\/*/,"/"),c=ve.useMemo(()=>({basename:l,navigator:a,static:o,future:ff({v7_relativeSplatPath:!1},s)}),[l,s,a,o]);typeof i=="string"&&(i=wr(i));let{pathname:u="/",search:d="",hash:h="",state:m=null,key:_="default"}=i,x=ve.useMemo(()=>{let p=xs(u,l);return p==null?null:{location:{pathname:p,search:d,hash:h,state:m,key:_},navigationType:r}},[l,u,d,h,m,_,r]);return x==null?null:ve.createElement(v_.Provider,{value:c},ve.createElement(wh.Provider,{children:n,value:x}))}new Promise(()=>{});function fA(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:ve.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:ve.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:ve.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oc(){return oc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},oc.apply(this,arguments)}const hA="6";try{window.__reactRouterVersion=hA}catch{}function pA(t,e){return N3({basename:void 0,future:oc({},void 0,{v7_prependBasename:!0}),history:t3({window:void 0}),hydrationData:mA(),routes:t,mapRouteProperties:fA,unstable_dataStrategy:void 0,unstable_patchRoutesOnMiss:void 0,window:void 0}).initialize()}function mA(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=oc({},e,{errors:gA(e.errors)})),e}function gA(t){if(!t)return null;let e=Object.entries(t),n={};for(let[i,r]of e)if(r&&r.__type==="RouteErrorResponse")n[i]=new Sh(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type==="Error"){if(r.__subType){let a=window[r.__subType];if(typeof a=="function")try{let o=new a(r.message);o.stack="",n[i]=o}catch{}}if(n[i]==null){let a=new Error(r.message);a.stack="",n[i]=a}}else n[i]=r;return n}const vA=ve.createContext({isTransitioning:!1}),_A=ve.createContext(new Map),xA="startTransition",ng=I_[xA],yA="flushSync",ig=Y1[yA];function SA(t){ng?ng(t):t()}function To(t){ig?ig(t):t()}class MA{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",e(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",n(i))}})}}function EA(t){let{fallbackElement:e,router:n,future:i}=t,[r,a]=ve.useState(n.state),[o,s]=ve.useState(),[l,c]=ve.useState({isTransitioning:!1}),[u,d]=ve.useState(),[h,m]=ve.useState(),[_,x]=ve.useState(),p=ve.useRef(new Map),{v7_startTransition:f}=i||{},g=ve.useCallback(R=>{f?SA(R):R()},[f]),v=ve.useCallback((R,M)=>{let{deletedFetchers:y,unstable_flushSync:C,unstable_viewTransitionOpts:V}=M;y.forEach(H=>p.current.delete(H)),R.fetchers.forEach((H,$)=>{H.data!==void 0&&p.current.set($,H.data)});let B=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!V||B){C?To(()=>a(R)):g(()=>a(R));return}if(C){To(()=>{h&&(u&&u.resolve(),h.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:V.currentLocation,nextLocation:V.nextLocation})});let H=n.window.document.startViewTransition(()=>{To(()=>a(R))});H.finished.finally(()=>{To(()=>{d(void 0),m(void 0),s(void 0),c({isTransitioning:!1})})}),To(()=>m(H));return}h?(u&&u.resolve(),h.skipTransition(),x({state:R,currentLocation:V.currentLocation,nextLocation:V.nextLocation})):(s(R),c({isTransitioning:!0,flushSync:!1,currentLocation:V.currentLocation,nextLocation:V.nextLocation}))},[n.window,h,u,p,g]);ve.useLayoutEffect(()=>n.subscribe(v),[n,v]),ve.useEffect(()=>{l.isTransitioning&&!l.flushSync&&d(new MA)},[l]),ve.useEffect(()=>{if(u&&o&&n.window){let R=o,M=u.promise,y=n.window.document.startViewTransition(async()=>{g(()=>a(R)),await M});y.finished.finally(()=>{d(void 0),m(void 0),s(void 0),c({isTransitioning:!1})}),m(y)}},[g,o,u,n.window]),ve.useEffect(()=>{u&&o&&r.location.key===o.location.key&&u.resolve()},[u,h,r.location,o]),ve.useEffect(()=>{!l.isTransitioning&&_&&(s(_.state),c({isTransitioning:!0,flushSync:!1,currentLocation:_.currentLocation,nextLocation:_.nextLocation}),x(void 0))},[l.isTransitioning,_]),ve.useEffect(()=>{},[]);let E=ve.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:R=>n.navigate(R),push:(R,M,y)=>n.navigate(R,{state:M,preventScrollReset:y==null?void 0:y.preventScrollReset}),replace:(R,M,y)=>n.navigate(R,{replace:!0,state:M,preventScrollReset:y==null?void 0:y.preventScrollReset})}),[n]),P=n.basename||"/",S=ve.useMemo(()=>({router:n,navigator:E,static:!1,basename:P}),[n,E,P]),A=ve.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return ve.createElement(ve.Fragment,null,ve.createElement(m_.Provider,{value:S},ve.createElement(g_.Provider,{value:r},ve.createElement(_A.Provider,{value:p.current},ve.createElement(vA.Provider,{value:l},ve.createElement(dA,{basename:P,location:r.location,navigationType:r.historyAction,navigator:E,future:A},r.initialized||n.future.v7_partialHydration?ve.createElement(wA,{routes:n.routes,future:n.future,state:r}):e))))),null)}const wA=ve.memo(TA);function TA(t){let{routes:e,future:n,state:i}=t;return eA(e,void 0,i,n)}var rg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(rg||(rg={}));var ag;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ag||(ag={}));const AA=pA([{path:"/",element:X.jsx(e3,{})}]);Fu.createRoot(document.getElementById("root")).render(X.jsx(Ni.StrictMode,{children:X.jsx(EA,{router:AA})}));
