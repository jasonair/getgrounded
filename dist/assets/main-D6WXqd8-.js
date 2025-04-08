/* empty css               */(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))o(h);new MutationObserver(h=>{for(const f of h)if(f.type==="childList")for(const g of f.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&o(g)}).observe(document,{childList:!0,subtree:!0});function s(h){const f={};return h.integrity&&(f.integrity=h.integrity),h.referrerPolicy&&(f.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?f.credentials="include":h.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(h){if(h.ep)return;h.ep=!0;const f=s(h);fetch(h.href,f)}})();const kr=()=>{};var Si={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=function(n){const e=[];let s=0;for(let o=0;o<n.length;o++){let h=n.charCodeAt(o);h<128?e[s++]=h:h<2048?(e[s++]=h>>6|192,e[s++]=h&63|128):(h&64512)===55296&&o+1<n.length&&(n.charCodeAt(o+1)&64512)===56320?(h=65536+((h&1023)<<10)+(n.charCodeAt(++o)&1023),e[s++]=h>>18|240,e[s++]=h>>12&63|128,e[s++]=h>>6&63|128,e[s++]=h&63|128):(e[s++]=h>>12|224,e[s++]=h>>6&63|128,e[s++]=h&63|128)}return e},Rr=function(n){const e=[];let s=0,o=0;for(;s<n.length;){const h=n[s++];if(h<128)e[o++]=String.fromCharCode(h);else if(h>191&&h<224){const f=n[s++];e[o++]=String.fromCharCode((h&31)<<6|f&63)}else if(h>239&&h<365){const f=n[s++],g=n[s++],w=n[s++],I=((h&7)<<18|(f&63)<<12|(g&63)<<6|w&63)-65536;e[o++]=String.fromCharCode(55296+(I>>10)),e[o++]=String.fromCharCode(56320+(I&1023))}else{const f=n[s++],g=n[s++];e[o++]=String.fromCharCode((h&15)<<12|(f&63)<<6|g&63)}}return e.join("")},ss={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let h=0;h<n.length;h+=3){const f=n[h],g=h+1<n.length,w=g?n[h+1]:0,I=h+2<n.length,A=I?n[h+2]:0,R=f>>2,P=(f&3)<<4|w>>4;let D=(w&15)<<2|A>>6,L=A&63;I||(L=64,g||(D=64)),o.push(s[R],s[P],s[D],s[L])}return o.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(is(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Rr(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const s=e?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let h=0;h<n.length;){const f=s[n.charAt(h++)],w=h<n.length?s[n.charAt(h)]:0;++h;const A=h<n.length?s[n.charAt(h)]:64;++h;const P=h<n.length?s[n.charAt(h)]:64;if(++h,f==null||w==null||A==null||P==null)throw new Pr;const D=f<<2|w>>4;if(o.push(D),A!==64){const L=w<<4&240|A>>2;if(o.push(L),P!==64){const S=A<<6&192|P;o.push(S)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Pr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Or=function(n){const e=is(n);return ss.encodeByteArray(e,!0)},Ee=function(n){return Or(n).replace(/\./g,"")},Lr=function(n){try{return ss.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=()=>Mr().__FIREBASE_DEFAULTS__,jr=()=>{if(typeof process>"u"||typeof Si>"u")return;const n=Si.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Br=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Lr(n[1]);return e&&JSON.parse(e)},rs=()=>{try{return kr()||Nr()||jr()||Br()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Fr=n=>{var e,s;return(s=(e=rs())===null||e===void 0?void 0:e.emulatorHosts)===null||s===void 0?void 0:s[n]},xr=n=>{const e=Fr(n);if(!e)return;const s=e.lastIndexOf(":");if(s<=0||s+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const o=parseInt(e.substring(s+1),10);return e[0]==="["?[e.substring(1,s-1),o]:[e.substring(0,s),o]},os=()=>{var n;return(n=rs())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,s)=>{this.resolve=e,this.reject=s})}wrapCallback(e){return(s,o)=>{s?this.reject(s):this.resolve(o),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(s):e(s,o))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const s={alg:"none",type:"JWT"},o=e||"demo-project",h=n.iat||0,f=n.sub||n.user_id;if(!f)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const g=Object.assign({iss:`https://securetoken.google.com/${o}`,aud:o,iat:h,exp:h+3600,auth_time:h,sub:f,user_id:f,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ee(JSON.stringify(s)),Ee(JSON.stringify(g)),""].join(".")}function Hr(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function as(){try{return typeof indexedDB=="object"}catch{return!1}}function hs(){return new Promise((n,e)=>{try{let s=!0;const o="validate-browser-context-for-indexeddb-analytics-module",h=self.indexedDB.open(o);h.onsuccess=()=>{h.result.close(),s||self.indexedDB.deleteDatabase(o),n(!0)},h.onupgradeneeded=()=>{s=!1},h.onerror=()=>{var f;e(((f=h.error)===null||f===void 0?void 0:f.message)||"")}}catch(s){e(s)}})}function Vr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="FirebaseError";class gt extends Error{constructor(e,s,o){super(s),this.code=e,this.customData=o,this.name=zr,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,be.prototype.create)}}class be{constructor(e,s,o){this.service=e,this.serviceName=s,this.errors=o}create(e,...s){const o=s[0]||{},h=`${this.service}/${e}`,f=this.errors[e],g=f?Gr(f,o):"Error",w=`${this.serviceName}: ${g} (${h}).`;return new gt(h,w,o)}}function Gr(n,e){return n.replace(qr,(s,o)=>{const h=e[o];return h!=null?String(h):`<${o}?>`})}const qr=/\{\$([^}]+)}/g;function Zt(n,e){if(n===e)return!0;const s=Object.keys(n),o=Object.keys(e);for(const h of s){if(!o.includes(h))return!1;const f=n[h],g=e[h];if(Ci(f)&&Ci(g)){if(!Zt(f,g))return!1}else if(f!==g)return!1}for(const h of o)if(!s.includes(h))return!1;return!0}function Ci(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=1e3,Wr=2,Xr=4*60*60*1e3,Jr=.5;function Di(n,e=Kr,s=Wr){const o=e*Math.pow(s,n),h=Math.round(Jr*o*(Math.random()-.5)*2);return Math.min(Xr,o+h)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(n){return n&&n._delegate?n._delegate:n}class rt{constructor(e,s,o){this.name=e,this.instanceFactory=s,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,s){this.name=e,this.container=s,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const s=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(s)){const o=new $r;if(this.instancesDeferred.set(s,o),this.isInitialized(s)||this.shouldAutoInitialize())try{const h=this.getOrInitializeService({instanceIdentifier:s});h&&o.resolve(h)}catch{}}return this.instancesDeferred.get(s).promise}getImmediate(e){var s;const o=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),h=(s=e==null?void 0:e.optional)!==null&&s!==void 0?s:!1;if(this.isInitialized(o)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:o})}catch(f){if(h)return null;throw f}else{if(h)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qr(e))try{this.getOrInitializeService({instanceIdentifier:wt})}catch{}for(const[s,o]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(s);try{const f=this.getOrInitializeService({instanceIdentifier:h});o.resolve(f)}catch{}}}}clearInstance(e=wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(s=>"INTERNAL"in s).map(s=>s.INTERNAL.delete()),...e.filter(s=>"_delete"in s).map(s=>s._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wt){return this.instances.has(e)}getOptions(e=wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:s={}}=e,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const h=this.getOrInitializeService({instanceIdentifier:o,options:s});for(const[f,g]of this.instancesDeferred.entries()){const w=this.normalizeInstanceIdentifier(f);o===w&&g.resolve(h)}return h}onInit(e,s){var o;const h=this.normalizeInstanceIdentifier(s),f=(o=this.onInitCallbacks.get(h))!==null&&o!==void 0?o:new Set;f.add(e),this.onInitCallbacks.set(h,f);const g=this.instances.get(h);return g&&e(g,h),()=>{f.delete(e)}}invokeOnInitCallbacks(e,s){const o=this.onInitCallbacks.get(s);if(o)for(const h of o)try{h(e,s)}catch{}}getOrInitializeService({instanceIdentifier:e,options:s={}}){let o=this.instances.get(e);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:Zr(e),options:s}),this.instances.set(e,o),this.instancesOptions.set(e,s),this.invokeOnInitCallbacks(o,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,o)}catch{}return o||null}normalizeInstanceIdentifier(e=wt){return this.component?this.component.multipleInstances?e:wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zr(n){return n===wt?void 0:n}function Qr(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const s=this.getProvider(e.name);if(s.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);s.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const s=new Yr(e,this);return this.providers.set(e,s),s}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var C;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(C||(C={}));const eo={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},no=C.INFO,io={[C.DEBUG]:"log",[C.VERBOSE]:"log",[C.INFO]:"info",[C.WARN]:"warn",[C.ERROR]:"error"},so=(n,e,...s)=>{if(e<n.logLevel)return;const o=new Date().toISOString(),h=io[e];if(h)console[h](`[${o}]  ${n.name}:`,...s);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vn{constructor(e){this.name=e,this._logLevel=no,this._logHandler=so,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in C))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,C.DEBUG,...e),this._logHandler(this,C.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,C.VERBOSE,...e),this._logHandler(this,C.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,C.INFO,...e),this._logHandler(this,C.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,C.WARN,...e),this._logHandler(this,C.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,C.ERROR,...e),this._logHandler(this,C.ERROR,...e)}}const ro=(n,e)=>e.some(s=>n instanceof s);let ki,Ri;function oo(){return ki||(ki=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ao(){return Ri||(Ri=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cs=new WeakMap,ln=new WeakMap,us=new WeakMap,tn=new WeakMap,wn=new WeakMap;function ho(n){const e=new Promise((s,o)=>{const h=()=>{n.removeEventListener("success",f),n.removeEventListener("error",g)},f=()=>{s(ft(n.result)),h()},g=()=>{o(n.error),h()};n.addEventListener("success",f),n.addEventListener("error",g)});return e.then(s=>{s instanceof IDBCursor&&cs.set(s,n)}).catch(()=>{}),wn.set(e,n),e}function lo(n){if(ln.has(n))return;const e=new Promise((s,o)=>{const h=()=>{n.removeEventListener("complete",f),n.removeEventListener("error",g),n.removeEventListener("abort",g)},f=()=>{s(),h()},g=()=>{o(n.error||new DOMException("AbortError","AbortError")),h()};n.addEventListener("complete",f),n.addEventListener("error",g),n.addEventListener("abort",g)});ln.set(n,e)}let cn={get(n,e,s){if(n instanceof IDBTransaction){if(e==="done")return ln.get(n);if(e==="objectStoreNames")return n.objectStoreNames||us.get(n);if(e==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return ft(n[e])},set(n,e,s){return n[e]=s,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function co(n){cn=n(cn)}function uo(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...s){const o=n.call(en(this),e,...s);return us.set(o,e.sort?e.sort():[e]),ft(o)}:ao().includes(n)?function(...e){return n.apply(en(this),e),ft(cs.get(this))}:function(...e){return ft(n.apply(en(this),e))}}function fo(n){return typeof n=="function"?uo(n):(n instanceof IDBTransaction&&lo(n),ro(n,oo())?new Proxy(n,cn):n)}function ft(n){if(n instanceof IDBRequest)return ho(n);if(tn.has(n))return tn.get(n);const e=fo(n);return e!==n&&(tn.set(n,e),wn.set(e,n)),e}const en=n=>wn.get(n);function fs(n,e,{blocked:s,upgrade:o,blocking:h,terminated:f}={}){const g=indexedDB.open(n,e),w=ft(g);return o&&g.addEventListener("upgradeneeded",I=>{o(ft(g.result),I.oldVersion,I.newVersion,ft(g.transaction),I)}),s&&g.addEventListener("blocked",I=>s(I.oldVersion,I.newVersion,I)),w.then(I=>{f&&I.addEventListener("close",()=>f()),h&&I.addEventListener("versionchange",A=>h(A.oldVersion,A.newVersion,A))}).catch(()=>{}),w}const po=["get","getKey","getAll","getAllKeys","count"],go=["put","add","delete","clear"],nn=new Map;function Pi(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(nn.get(e))return nn.get(e);const s=e.replace(/FromIndex$/,""),o=e!==s,h=go.includes(s);if(!(s in(o?IDBIndex:IDBObjectStore).prototype)||!(h||po.includes(s)))return;const f=async function(g,...w){const I=this.transaction(g,h?"readwrite":"readonly");let A=I.store;return o&&(A=A.index(w.shift())),(await Promise.all([A[s](...w),h&&I.done]))[0]};return nn.set(e,f),f}co(n=>({...n,get:(e,s,o)=>Pi(e,s)||n.get(e,s,o),has:(e,s)=>!!Pi(e,s)||n.has(e,s)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(yo(s)){const o=s.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(s=>s).join(" ")}}function yo(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const un="@firebase/app",Oi="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=new vn("@firebase/app"),vo="@firebase/app-compat",wo="@firebase/analytics-compat",Eo="@firebase/analytics",Io="@firebase/app-check-compat",To="@firebase/app-check",Ao="@firebase/auth",_o="@firebase/auth-compat",bo="@firebase/database",So="@firebase/data-connect",Co="@firebase/database-compat",Do="@firebase/functions",ko="@firebase/functions-compat",Ro="@firebase/installations",Po="@firebase/installations-compat",Oo="@firebase/messaging",Lo="@firebase/messaging-compat",Mo="@firebase/performance",No="@firebase/performance-compat",jo="@firebase/remote-config",Bo="@firebase/remote-config-compat",Fo="@firebase/storage",xo="@firebase/storage-compat",$o="@firebase/firestore",Uo="@firebase/vertexai",Ho="@firebase/firestore-compat",Vo="firebase",zo="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="[DEFAULT]",Go={[un]:"fire-core",[vo]:"fire-core-compat",[Eo]:"fire-analytics",[wo]:"fire-analytics-compat",[To]:"fire-app-check",[Io]:"fire-app-check-compat",[Ao]:"fire-auth",[_o]:"fire-auth-compat",[bo]:"fire-rtdb",[So]:"fire-data-connect",[Co]:"fire-rtdb-compat",[Do]:"fire-fn",[ko]:"fire-fn-compat",[Ro]:"fire-iid",[Po]:"fire-iid-compat",[Oo]:"fire-fcm",[Lo]:"fire-fcm-compat",[Mo]:"fire-perf",[No]:"fire-perf-compat",[jo]:"fire-rc",[Bo]:"fire-rc-compat",[Fo]:"fire-gcs",[xo]:"fire-gcs-compat",[$o]:"fire-fst",[Ho]:"fire-fst-compat",[Uo]:"fire-vertex","fire-js":"fire-js",[Vo]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie=new Map,qo=new Map,dn=new Map;function Li(n,e){try{n.container.addComponent(e)}catch(s){ot.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,s)}}function pt(n){const e=n.name;if(dn.has(e))return ot.debug(`There were multiple attempts to register component ${e}.`),!1;dn.set(e,n);for(const s of Ie.values())Li(s,n);for(const s of qo.values())Li(s,n);return!0}function te(n,e){const s=n.container.getProvider("heartbeat").getImmediate({optional:!0});return s&&s.triggerHeartbeat(),n.container.getProvider(e)}function Ko(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dt=new be("app","Firebase",Wo);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,s,o){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},s),this._name=s.name,this._automaticDataCollectionEnabled=s.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=zo;function ds(n,e={}){let s=n;typeof e!="object"&&(e={name:e});const o=Object.assign({name:fn,automaticDataCollectionEnabled:!1},e),h=o.name;if(typeof h!="string"||!h)throw dt.create("bad-app-name",{appName:String(h)});if(s||(s=os()),!s)throw dt.create("no-options");const f=Ie.get(h);if(f){if(Zt(s,f.options)&&Zt(o,f.config))return f;throw dt.create("duplicate-app",{appName:h})}const g=new to(h);for(const I of dn.values())g.addComponent(I);const w=new Xo(s,o,g);return Ie.set(h,w),w}function ps(n=fn){const e=Ie.get(n);if(!e&&n===fn&&os())return ds();if(!e)throw dt.create("no-app",{appName:n});return e}function et(n,e,s){var o;let h=(o=Go[n])!==null&&o!==void 0?o:n;s&&(h+=`-${s}`);const f=h.match(/\s|\//),g=e.match(/\s|\//);if(f||g){const w=[`Unable to register library "${h}" with version "${e}":`];f&&w.push(`library name "${h}" contains illegal characters (whitespace or "/")`),f&&g&&w.push("and"),g&&w.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ot.warn(w.join(" "));return}pt(new rt(`${h}-version`,()=>({library:h,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="firebase-heartbeat-database",Zo=1,Qt="firebase-heartbeat-store";let sn=null;function gs(){return sn||(sn=fs(Yo,Zo,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Qt)}catch(s){console.warn(s)}}}}).catch(n=>{throw dt.create("idb-open",{originalErrorMessage:n.message})})),sn}async function Qo(n){try{const s=(await gs()).transaction(Qt),o=await s.objectStore(Qt).get(ms(n));return await s.done,o}catch(e){if(e instanceof gt)ot.warn(e.message);else{const s=dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ot.warn(s.message)}}}async function Mi(n,e){try{const o=(await gs()).transaction(Qt,"readwrite");await o.objectStore(Qt).put(e,ms(n)),await o.done}catch(s){if(s instanceof gt)ot.warn(s.message);else{const o=dt.create("idb-set",{originalErrorMessage:s==null?void 0:s.message});ot.warn(o.message)}}}function ms(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=1024,ea=30;class na{constructor(e){this.container=e,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new sa(s),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){var e,s;try{const h=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),f=Ni();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((s=this._heartbeatsCache)===null||s===void 0?void 0:s.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===f||this._heartbeatsCache.heartbeats.some(g=>g.date===f))return;if(this._heartbeatsCache.heartbeats.push({date:f,agent:h}),this._heartbeatsCache.heartbeats.length>ea){const g=ra(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(g,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(o){ot.warn(o)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const s=Ni(),{heartbeatsToSend:o,unsentEntries:h}=ia(this._heartbeatsCache.heartbeats),f=Ee(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=s,h.length>0?(this._heartbeatsCache.heartbeats=h,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),f}catch(s){return ot.warn(s),""}}}function Ni(){return new Date().toISOString().substring(0,10)}function ia(n,e=ta){const s=[];let o=n.slice();for(const h of n){const f=s.find(g=>g.agent===h.agent);if(f){if(f.dates.push(h.date),ji(s)>e){f.dates.pop();break}}else if(s.push({agent:h.agent,dates:[h.date]}),ji(s)>e){s.pop();break}o=o.slice(1)}return{heartbeatsToSend:s,unsentEntries:o}}class sa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return as()?hs().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const s=await Qo(this.app);return s!=null&&s.heartbeats?s:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var s;if(await this._canUseIndexedDBPromise){const h=await this.read();return Mi(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!==null&&s!==void 0?s:h.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var s;if(await this._canUseIndexedDBPromise){const h=await this.read();return Mi(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!==null&&s!==void 0?s:h.lastSentHeartbeatDate,heartbeats:[...h.heartbeats,...e.heartbeats]})}else return}}function ji(n){return Ee(JSON.stringify({version:2,heartbeats:n})).length}function ra(n){if(n.length===0)return-1;let e=0,s=n[0].date;for(let o=1;o<n.length;o++)n[o].date<s&&(s=n[o].date,e=o);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(n){pt(new rt("platform-logger",e=>new mo(e),"PRIVATE")),pt(new rt("heartbeat",e=>new na(e),"PRIVATE")),et(un,Oi,n),et(un,Oi,"esm2017"),et("fire-js","")}oa("");var aa="firebase",ha="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */et(aa,ha,"app");const ys="@firebase/installations",En="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=1e4,ws=`w:${En}`,Es="FIS_v2",la="https://firebaseinstallations.googleapis.com/v1",ca=60*60*1e3,ua="installations",fa="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},It=new be(ua,fa,da);function Is(n){return n instanceof gt&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts({projectId:n}){return`${la}/projects/${n}/installations`}function As(n){return{token:n.token,requestStatus:2,expiresIn:ga(n.expiresIn),creationTime:Date.now()}}async function _s(n,e){const o=(await e.json()).error;return It.create("request-failed",{requestName:n,serverCode:o.code,serverMessage:o.message,serverStatus:o.status})}function bs({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function pa(n,{refreshToken:e}){const s=bs(n);return s.append("Authorization",ma(e)),s}async function Ss(n){const e=await n();return e.status>=500&&e.status<600?n():e}function ga(n){return Number(n.replace("s","000"))}function ma(n){return`${Es} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ya({appConfig:n,heartbeatServiceProvider:e},{fid:s}){const o=Ts(n),h=bs(n),f=e.getImmediate({optional:!0});if(f){const A=await f.getHeartbeatsHeader();A&&h.append("x-firebase-client",A)}const g={fid:s,authVersion:Es,appId:n.appId,sdkVersion:ws},w={method:"POST",headers:h,body:JSON.stringify(g)},I=await Ss(()=>fetch(o,w));if(I.ok){const A=await I.json();return{fid:A.fid||s,registrationStatus:2,refreshToken:A.refreshToken,authToken:As(A.authToken)}}else throw await _s("Create Installation",I)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=/^[cdef][\w-]{21}$/,pn="";function Ea(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const s=Ia(n);return wa.test(s)?s:pn}catch{return pn}}function Ia(n){return va(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new Map;function ks(n,e){const s=Se(n);Rs(s,e),Ta(s,e)}function Rs(n,e){const s=Ds.get(n);if(s)for(const o of s)o(e)}function Ta(n,e){const s=Aa();s&&s.postMessage({key:n,fid:e}),_a()}let Et=null;function Aa(){return!Et&&"BroadcastChannel"in self&&(Et=new BroadcastChannel("[Firebase] FID Change"),Et.onmessage=n=>{Rs(n.data.key,n.data.fid)}),Et}function _a(){Ds.size===0&&Et&&(Et.close(),Et=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba="firebase-installations-database",Sa=1,Tt="firebase-installations-store";let rn=null;function In(){return rn||(rn=fs(ba,Sa,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Tt)}}})),rn}async function Te(n,e){const s=Se(n),h=(await In()).transaction(Tt,"readwrite"),f=h.objectStore(Tt),g=await f.get(s);return await f.put(e,s),await h.done,(!g||g.fid!==e.fid)&&ks(n,e.fid),e}async function Ps(n){const e=Se(n),o=(await In()).transaction(Tt,"readwrite");await o.objectStore(Tt).delete(e),await o.done}async function Ce(n,e){const s=Se(n),h=(await In()).transaction(Tt,"readwrite"),f=h.objectStore(Tt),g=await f.get(s),w=e(g);return w===void 0?await f.delete(s):await f.put(w,s),await h.done,w&&(!g||g.fid!==w.fid)&&ks(n,w.fid),w}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn(n){let e;const s=await Ce(n.appConfig,o=>{const h=Ca(o),f=Da(n,h);return e=f.registrationPromise,f.installationEntry});return s.fid===pn?{installationEntry:await e}:{installationEntry:s,registrationPromise:e}}function Ca(n){const e=n||{fid:Ea(),registrationStatus:0};return Os(e)}function Da(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const h=Promise.reject(It.create("app-offline"));return{installationEntry:e,registrationPromise:h}}const s={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},o=ka(n,s);return{installationEntry:s,registrationPromise:o}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ra(n)}:{installationEntry:e}}async function ka(n,e){try{const s=await ya(n,e);return Te(n.appConfig,s)}catch(s){throw Is(s)&&s.customData.serverCode===409?await Ps(n.appConfig):await Te(n.appConfig,{fid:e.fid,registrationStatus:0}),s}}async function Ra(n){let e=await Bi(n.appConfig);for(;e.registrationStatus===1;)await Cs(100),e=await Bi(n.appConfig);if(e.registrationStatus===0){const{installationEntry:s,registrationPromise:o}=await Tn(n);return o||s}return e}function Bi(n){return Ce(n,e=>{if(!e)throw It.create("installation-not-found");return Os(e)})}function Os(n){return Pa(n)?{fid:n.fid,registrationStatus:0}:n}function Pa(n){return n.registrationStatus===1&&n.registrationTime+vs<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oa({appConfig:n,heartbeatServiceProvider:e},s){const o=La(n,s),h=pa(n,s),f=e.getImmediate({optional:!0});if(f){const A=await f.getHeartbeatsHeader();A&&h.append("x-firebase-client",A)}const g={installation:{sdkVersion:ws,appId:n.appId}},w={method:"POST",headers:h,body:JSON.stringify(g)},I=await Ss(()=>fetch(o,w));if(I.ok){const A=await I.json();return As(A)}else throw await _s("Generate Auth Token",I)}function La(n,{fid:e}){return`${Ts(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(n,e=!1){let s;const o=await Ce(n.appConfig,f=>{if(!Ls(f))throw It.create("not-registered");const g=f.authToken;if(!e&&ja(g))return f;if(g.requestStatus===1)return s=Ma(n,e),f;{if(!navigator.onLine)throw It.create("app-offline");const w=Fa(f);return s=Na(n,w),w}});return s?await s:o.authToken}async function Ma(n,e){let s=await Fi(n.appConfig);for(;s.authToken.requestStatus===1;)await Cs(100),s=await Fi(n.appConfig);const o=s.authToken;return o.requestStatus===0?An(n,e):o}function Fi(n){return Ce(n,e=>{if(!Ls(e))throw It.create("not-registered");const s=e.authToken;return xa(s)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Na(n,e){try{const s=await Oa(n,e),o=Object.assign(Object.assign({},e),{authToken:s});return await Te(n.appConfig,o),s}catch(s){if(Is(s)&&(s.customData.serverCode===401||s.customData.serverCode===404))await Ps(n.appConfig);else{const o=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Te(n.appConfig,o)}throw s}}function Ls(n){return n!==void 0&&n.registrationStatus===2}function ja(n){return n.requestStatus===2&&!Ba(n)}function Ba(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+ca}function Fa(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function xa(n){return n.requestStatus===1&&n.requestTime+vs<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $a(n){const e=n,{installationEntry:s,registrationPromise:o}=await Tn(e);return o?o.catch(console.error):An(e).catch(console.error),s.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ua(n,e=!1){const s=n;return await Ha(s),(await An(s,e)).token}async function Ha(n){const{registrationPromise:e}=await Tn(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(n){if(!n||!n.options)throw on("App Configuration");if(!n.name)throw on("App Name");const e=["projectId","apiKey","appId"];for(const s of e)if(!n.options[s])throw on(s);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function on(n){return It.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms="installations",za="installations-internal",Ga=n=>{const e=n.getProvider("app").getImmediate(),s=Va(e),o=te(e,"heartbeat");return{app:e,appConfig:s,heartbeatServiceProvider:o,_delete:()=>Promise.resolve()}},qa=n=>{const e=n.getProvider("app").getImmediate(),s=te(e,Ms).getImmediate();return{getId:()=>$a(s),getToken:h=>Ua(s,h)}};function Ka(){pt(new rt(Ms,Ga,"PUBLIC")),pt(new rt(za,qa,"PRIVATE"))}Ka();et(ys,En);et(ys,En,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae="analytics",Wa="firebase_id",Xa="origin",Ja=60*1e3,Ya="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_n="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=new vn("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},W=new be("analytics","Analytics",Za);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(n){if(!n.startsWith(_n)){const e=W.create("invalid-gtag-resource",{gtagURL:n});return K.warn(e.message),""}return n}function Ns(n){return Promise.all(n.map(e=>e.catch(s=>s)))}function th(n,e){let s;return window.trustedTypes&&(s=window.trustedTypes.createPolicy(n,e)),s}function eh(n,e){const s=th("firebase-js-sdk-policy",{createScriptURL:Qa}),o=document.createElement("script"),h=`${_n}?l=${n}&id=${e}`;o.src=s?s==null?void 0:s.createScriptURL(h):h,o.async=!0,document.head.appendChild(o)}function nh(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function ih(n,e,s,o,h,f){const g=o[h];try{if(g)await e[g];else{const I=(await Ns(s)).find(A=>A.measurementId===h);I&&await e[I.appId]}}catch(w){K.error(w)}n("config",h,f)}async function sh(n,e,s,o,h){try{let f=[];if(h&&h.send_to){let g=h.send_to;Array.isArray(g)||(g=[g]);const w=await Ns(s);for(const I of g){const A=w.find(P=>P.measurementId===I),R=A&&e[A.appId];if(R)f.push(R);else{f=[];break}}}f.length===0&&(f=Object.values(e)),await Promise.all(f),n("event",o,h||{})}catch(f){K.error(f)}}function rh(n,e,s,o){async function h(f,...g){try{if(f==="event"){const[w,I]=g;await sh(n,e,s,w,I)}else if(f==="config"){const[w,I]=g;await ih(n,e,s,o,w,I)}else if(f==="consent"){const[w,I]=g;n("consent",w,I)}else if(f==="get"){const[w,I,A]=g;n("get",w,I,A)}else if(f==="set"){const[w]=g;n("set",w)}else n(f,...g)}catch(w){K.error(w)}}return h}function oh(n,e,s,o,h){let f=function(...g){window[o].push(arguments)};return window[h]&&typeof window[h]=="function"&&(f=window[h]),window[h]=rh(f,n,e,s),{gtagCore:f,wrappedGtag:window[h]}}function ah(n){const e=window.document.getElementsByTagName("script");for(const s of Object.values(e))if(s.src&&s.src.includes(_n)&&s.src.includes(n))return s;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh=30,lh=1e3;class ch{constructor(e={},s=lh){this.throttleMetadata=e,this.intervalMillis=s}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,s){this.throttleMetadata[e]=s}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const js=new ch;function uh(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function fh(n){var e;const{appId:s,apiKey:o}=n,h={method:"GET",headers:uh(o)},f=Ya.replace("{app-id}",s),g=await fetch(f,h);if(g.status!==200&&g.status!==304){let w="";try{const I=await g.json();!((e=I.error)===null||e===void 0)&&e.message&&(w=I.error.message)}catch{}throw W.create("config-fetch-failed",{httpStatus:g.status,responseMessage:w})}return g.json()}async function dh(n,e=js,s){const{appId:o,apiKey:h,measurementId:f}=n.options;if(!o)throw W.create("no-app-id");if(!h){if(f)return{measurementId:f,appId:o};throw W.create("no-api-key")}const g=e.getThrottleMetadata(o)||{backoffCount:0,throttleEndTimeMillis:Date.now()},w=new mh;return setTimeout(async()=>{w.abort()},Ja),Bs({appId:o,apiKey:h,measurementId:f},g,w,e)}async function Bs(n,{throttleEndTimeMillis:e,backoffCount:s},o,h=js){var f;const{appId:g,measurementId:w}=n;try{await ph(o,e)}catch(I){if(w)return K.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${w} provided in the "measurementId" field in the local Firebase config. [${I==null?void 0:I.message}]`),{appId:g,measurementId:w};throw I}try{const I=await fh(n);return h.deleteThrottleMetadata(g),I}catch(I){const A=I;if(!gh(A)){if(h.deleteThrottleMetadata(g),w)return K.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${w} provided in the "measurementId" field in the local Firebase config. [${A==null?void 0:A.message}]`),{appId:g,measurementId:w};throw I}const R=Number((f=A==null?void 0:A.customData)===null||f===void 0?void 0:f.httpStatus)===503?Di(s,h.intervalMillis,hh):Di(s,h.intervalMillis),P={throttleEndTimeMillis:Date.now()+R,backoffCount:s+1};return h.setThrottleMetadata(g,P),K.debug(`Calling attemptFetch again in ${R} millis`),Bs(n,P,o,h)}}function ph(n,e){return new Promise((s,o)=>{const h=Math.max(e-Date.now(),0),f=setTimeout(s,h);n.addEventListener(()=>{clearTimeout(f),o(W.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function gh(n){if(!(n instanceof gt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class mh{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function yh(n,e,s,o,h){if(h&&h.global){n("event",s,o);return}else{const f=await e,g=Object.assign(Object.assign({},o),{send_to:f});n("event",s,g)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vh(){if(as())try{await hs()}catch(n){return K.warn(W.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return K.warn(W.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function wh(n,e,s,o,h,f,g){var w;const I=dh(n);I.then(L=>{s[L.measurementId]=L.appId,n.options.measurementId&&L.measurementId!==n.options.measurementId&&K.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${L.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(L=>K.error(L)),e.push(I);const A=vh().then(L=>{if(L)return o.getId()}),[R,P]=await Promise.all([I,A]);ah(f)||eh(f,R.measurementId),h("js",new Date);const D=(w=g==null?void 0:g.config)!==null&&w!==void 0?w:{};return D[Xa]="firebase",D.update=!0,P!=null&&(D[Wa]=P),h("config",R.measurementId,D),R.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e){this.app=e}_delete(){return delete Xt[this.app.options.appId],Promise.resolve()}}let Xt={},xi=[];const $i={};let an="dataLayer",Ih="gtag",Ui,Fs,Hi=!1;function Th(){const n=[];if(Hr()&&n.push("This is a browser extension environment."),Vr()||n.push("Cookies are not available."),n.length>0){const e=n.map((o,h)=>`(${h+1}) ${o}`).join(" "),s=W.create("invalid-analytics-context",{errorInfo:e});K.warn(s.message)}}function Ah(n,e,s){Th();const o=n.options.appId;if(!o)throw W.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)K.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw W.create("no-api-key");if(Xt[o]!=null)throw W.create("already-exists",{id:o});if(!Hi){nh(an);const{wrappedGtag:f,gtagCore:g}=oh(Xt,xi,$i,an,Ih);Fs=f,Ui=g,Hi=!0}return Xt[o]=wh(n,xi,$i,e,Ui,an,s),new Eh(n)}function _h(n=ps()){n=ls(n);const e=te(n,Ae);return e.isInitialized()?e.getImmediate():bh(n)}function bh(n,e={}){const s=te(n,Ae);if(s.isInitialized()){const h=s.getImmediate();if(Zt(e,s.getOptions()))return h;throw W.create("already-initialized")}return s.initialize({options:e})}function Sh(n,e,s,o){n=ls(n),yh(Fs,Xt[n.app.options.appId],e,s,o).catch(h=>K.error(h))}const Vi="@firebase/analytics",zi="0.10.12";function Ch(){pt(new rt(Ae,(e,{options:s})=>{const o=e.getProvider("app").getImmediate(),h=e.getProvider("installations-internal").getImmediate();return Ah(o,h,s)},"PUBLIC")),pt(new rt("analytics-internal",n,"PRIVATE")),et(Vi,zi),et(Vi,zi,"esm2017");function n(e){try{const s=e.getProvider(Ae).getImmediate();return{logEvent:(o,h,f)=>Sh(s,o,h,f)}}catch(s){throw W.create("interop-component-reg-failed",{reason:s})}}}Ch();var Gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xs;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(m,l){function u(){}u.prototype=l.prototype,m.D=l.prototype,m.prototype=new u,m.prototype.constructor=m,m.C=function(d,p,v){for(var c=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)c[nt-2]=arguments[nt];return l.prototype[p].apply(d,c)}}function s(){this.blockSize=-1}function o(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(o,s),o.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function h(m,l,u){u||(u=0);var d=Array(16);if(typeof l=="string")for(var p=0;16>p;++p)d[p]=l.charCodeAt(u++)|l.charCodeAt(u++)<<8|l.charCodeAt(u++)<<16|l.charCodeAt(u++)<<24;else for(p=0;16>p;++p)d[p]=l[u++]|l[u++]<<8|l[u++]<<16|l[u++]<<24;l=m.g[0],u=m.g[1],p=m.g[2];var v=m.g[3],c=l+(v^u&(p^v))+d[0]+3614090360&4294967295;l=u+(c<<7&4294967295|c>>>25),c=v+(p^l&(u^p))+d[1]+3905402710&4294967295,v=l+(c<<12&4294967295|c>>>20),c=p+(u^v&(l^u))+d[2]+606105819&4294967295,p=v+(c<<17&4294967295|c>>>15),c=u+(l^p&(v^l))+d[3]+3250441966&4294967295,u=p+(c<<22&4294967295|c>>>10),c=l+(v^u&(p^v))+d[4]+4118548399&4294967295,l=u+(c<<7&4294967295|c>>>25),c=v+(p^l&(u^p))+d[5]+1200080426&4294967295,v=l+(c<<12&4294967295|c>>>20),c=p+(u^v&(l^u))+d[6]+2821735955&4294967295,p=v+(c<<17&4294967295|c>>>15),c=u+(l^p&(v^l))+d[7]+4249261313&4294967295,u=p+(c<<22&4294967295|c>>>10),c=l+(v^u&(p^v))+d[8]+1770035416&4294967295,l=u+(c<<7&4294967295|c>>>25),c=v+(p^l&(u^p))+d[9]+2336552879&4294967295,v=l+(c<<12&4294967295|c>>>20),c=p+(u^v&(l^u))+d[10]+4294925233&4294967295,p=v+(c<<17&4294967295|c>>>15),c=u+(l^p&(v^l))+d[11]+2304563134&4294967295,u=p+(c<<22&4294967295|c>>>10),c=l+(v^u&(p^v))+d[12]+1804603682&4294967295,l=u+(c<<7&4294967295|c>>>25),c=v+(p^l&(u^p))+d[13]+4254626195&4294967295,v=l+(c<<12&4294967295|c>>>20),c=p+(u^v&(l^u))+d[14]+2792965006&4294967295,p=v+(c<<17&4294967295|c>>>15),c=u+(l^p&(v^l))+d[15]+1236535329&4294967295,u=p+(c<<22&4294967295|c>>>10),c=l+(p^v&(u^p))+d[1]+4129170786&4294967295,l=u+(c<<5&4294967295|c>>>27),c=v+(u^p&(l^u))+d[6]+3225465664&4294967295,v=l+(c<<9&4294967295|c>>>23),c=p+(l^u&(v^l))+d[11]+643717713&4294967295,p=v+(c<<14&4294967295|c>>>18),c=u+(v^l&(p^v))+d[0]+3921069994&4294967295,u=p+(c<<20&4294967295|c>>>12),c=l+(p^v&(u^p))+d[5]+3593408605&4294967295,l=u+(c<<5&4294967295|c>>>27),c=v+(u^p&(l^u))+d[10]+38016083&4294967295,v=l+(c<<9&4294967295|c>>>23),c=p+(l^u&(v^l))+d[15]+3634488961&4294967295,p=v+(c<<14&4294967295|c>>>18),c=u+(v^l&(p^v))+d[4]+3889429448&4294967295,u=p+(c<<20&4294967295|c>>>12),c=l+(p^v&(u^p))+d[9]+568446438&4294967295,l=u+(c<<5&4294967295|c>>>27),c=v+(u^p&(l^u))+d[14]+3275163606&4294967295,v=l+(c<<9&4294967295|c>>>23),c=p+(l^u&(v^l))+d[3]+4107603335&4294967295,p=v+(c<<14&4294967295|c>>>18),c=u+(v^l&(p^v))+d[8]+1163531501&4294967295,u=p+(c<<20&4294967295|c>>>12),c=l+(p^v&(u^p))+d[13]+2850285829&4294967295,l=u+(c<<5&4294967295|c>>>27),c=v+(u^p&(l^u))+d[2]+4243563512&4294967295,v=l+(c<<9&4294967295|c>>>23),c=p+(l^u&(v^l))+d[7]+1735328473&4294967295,p=v+(c<<14&4294967295|c>>>18),c=u+(v^l&(p^v))+d[12]+2368359562&4294967295,u=p+(c<<20&4294967295|c>>>12),c=l+(u^p^v)+d[5]+4294588738&4294967295,l=u+(c<<4&4294967295|c>>>28),c=v+(l^u^p)+d[8]+2272392833&4294967295,v=l+(c<<11&4294967295|c>>>21),c=p+(v^l^u)+d[11]+1839030562&4294967295,p=v+(c<<16&4294967295|c>>>16),c=u+(p^v^l)+d[14]+4259657740&4294967295,u=p+(c<<23&4294967295|c>>>9),c=l+(u^p^v)+d[1]+2763975236&4294967295,l=u+(c<<4&4294967295|c>>>28),c=v+(l^u^p)+d[4]+1272893353&4294967295,v=l+(c<<11&4294967295|c>>>21),c=p+(v^l^u)+d[7]+4139469664&4294967295,p=v+(c<<16&4294967295|c>>>16),c=u+(p^v^l)+d[10]+3200236656&4294967295,u=p+(c<<23&4294967295|c>>>9),c=l+(u^p^v)+d[13]+681279174&4294967295,l=u+(c<<4&4294967295|c>>>28),c=v+(l^u^p)+d[0]+3936430074&4294967295,v=l+(c<<11&4294967295|c>>>21),c=p+(v^l^u)+d[3]+3572445317&4294967295,p=v+(c<<16&4294967295|c>>>16),c=u+(p^v^l)+d[6]+76029189&4294967295,u=p+(c<<23&4294967295|c>>>9),c=l+(u^p^v)+d[9]+3654602809&4294967295,l=u+(c<<4&4294967295|c>>>28),c=v+(l^u^p)+d[12]+3873151461&4294967295,v=l+(c<<11&4294967295|c>>>21),c=p+(v^l^u)+d[15]+530742520&4294967295,p=v+(c<<16&4294967295|c>>>16),c=u+(p^v^l)+d[2]+3299628645&4294967295,u=p+(c<<23&4294967295|c>>>9),c=l+(p^(u|~v))+d[0]+4096336452&4294967295,l=u+(c<<6&4294967295|c>>>26),c=v+(u^(l|~p))+d[7]+1126891415&4294967295,v=l+(c<<10&4294967295|c>>>22),c=p+(l^(v|~u))+d[14]+2878612391&4294967295,p=v+(c<<15&4294967295|c>>>17),c=u+(v^(p|~l))+d[5]+4237533241&4294967295,u=p+(c<<21&4294967295|c>>>11),c=l+(p^(u|~v))+d[12]+1700485571&4294967295,l=u+(c<<6&4294967295|c>>>26),c=v+(u^(l|~p))+d[3]+2399980690&4294967295,v=l+(c<<10&4294967295|c>>>22),c=p+(l^(v|~u))+d[10]+4293915773&4294967295,p=v+(c<<15&4294967295|c>>>17),c=u+(v^(p|~l))+d[1]+2240044497&4294967295,u=p+(c<<21&4294967295|c>>>11),c=l+(p^(u|~v))+d[8]+1873313359&4294967295,l=u+(c<<6&4294967295|c>>>26),c=v+(u^(l|~p))+d[15]+4264355552&4294967295,v=l+(c<<10&4294967295|c>>>22),c=p+(l^(v|~u))+d[6]+2734768916&4294967295,p=v+(c<<15&4294967295|c>>>17),c=u+(v^(p|~l))+d[13]+1309151649&4294967295,u=p+(c<<21&4294967295|c>>>11),c=l+(p^(u|~v))+d[4]+4149444226&4294967295,l=u+(c<<6&4294967295|c>>>26),c=v+(u^(l|~p))+d[11]+3174756917&4294967295,v=l+(c<<10&4294967295|c>>>22),c=p+(l^(v|~u))+d[2]+718787259&4294967295,p=v+(c<<15&4294967295|c>>>17),c=u+(v^(p|~l))+d[9]+3951481745&4294967295,m.g[0]=m.g[0]+l&4294967295,m.g[1]=m.g[1]+(p+(c<<21&4294967295|c>>>11))&4294967295,m.g[2]=m.g[2]+p&4294967295,m.g[3]=m.g[3]+v&4294967295}o.prototype.u=function(m,l){l===void 0&&(l=m.length);for(var u=l-this.blockSize,d=this.B,p=this.h,v=0;v<l;){if(p==0)for(;v<=u;)h(this,m,v),v+=this.blockSize;if(typeof m=="string"){for(;v<l;)if(d[p++]=m.charCodeAt(v++),p==this.blockSize){h(this,d),p=0;break}}else for(;v<l;)if(d[p++]=m[v++],p==this.blockSize){h(this,d),p=0;break}}this.h=p,this.o+=l},o.prototype.v=function(){var m=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);m[0]=128;for(var l=1;l<m.length-8;++l)m[l]=0;var u=8*this.o;for(l=m.length-8;l<m.length;++l)m[l]=u&255,u/=256;for(this.u(m),m=Array(16),l=u=0;4>l;++l)for(var d=0;32>d;d+=8)m[u++]=this.g[l]>>>d&255;return m};function f(m,l){var u=w;return Object.prototype.hasOwnProperty.call(u,m)?u[m]:u[m]=l(m)}function g(m,l){this.h=l;for(var u=[],d=!0,p=m.length-1;0<=p;p--){var v=m[p]|0;d&&v==l||(u[p]=v,d=!1)}this.g=u}var w={};function I(m){return-128<=m&&128>m?f(m,function(l){return new g([l|0],0>l?-1:0)}):new g([m|0],0>m?-1:0)}function A(m){if(isNaN(m)||!isFinite(m))return P;if(0>m)return N(A(-m));for(var l=[],u=1,d=0;m>=u;d++)l[d]=m/u|0,u*=4294967296;return new g(l,0)}function R(m,l){if(m.length==0)throw Error("number format error: empty string");if(l=l||10,2>l||36<l)throw Error("radix out of range: "+l);if(m.charAt(0)=="-")return N(R(m.substring(1),l));if(0<=m.indexOf("-"))throw Error('number format error: interior "-" character');for(var u=A(Math.pow(l,8)),d=P,p=0;p<m.length;p+=8){var v=Math.min(8,m.length-p),c=parseInt(m.substring(p,p+v),l);8>v?(v=A(Math.pow(l,v)),d=d.j(v).add(A(c))):(d=d.j(u),d=d.add(A(c)))}return d}var P=I(0),D=I(1),L=I(16777216);n=g.prototype,n.m=function(){if(B(this))return-N(this).m();for(var m=0,l=1,u=0;u<this.g.length;u++){var d=this.i(u);m+=(0<=d?d:4294967296+d)*l,l*=4294967296}return m},n.toString=function(m){if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(S(this))return"0";if(B(this))return"-"+N(this).toString(m);for(var l=A(Math.pow(m,6)),u=this,d="";;){var p=at(u,l).g;u=At(u,p.j(l));var v=((0<u.g.length?u.g[0]:u.h)>>>0).toString(m);if(u=p,S(u))return v+d;for(;6>v.length;)v="0"+v;d=v+d}},n.i=function(m){return 0>m?0:m<this.g.length?this.g[m]:this.h};function S(m){if(m.h!=0)return!1;for(var l=0;l<m.g.length;l++)if(m.g[l]!=0)return!1;return!0}function B(m){return m.h==-1}n.l=function(m){return m=At(this,m),B(m)?-1:S(m)?0:1};function N(m){for(var l=m.g.length,u=[],d=0;d<l;d++)u[d]=~m.g[d];return new g(u,~m.h).add(D)}n.abs=function(){return B(this)?N(this):this},n.add=function(m){for(var l=Math.max(this.g.length,m.g.length),u=[],d=0,p=0;p<=l;p++){var v=d+(this.i(p)&65535)+(m.i(p)&65535),c=(v>>>16)+(this.i(p)>>>16)+(m.i(p)>>>16);d=c>>>16,v&=65535,c&=65535,u[p]=c<<16|v}return new g(u,u[u.length-1]&-2147483648?-1:0)};function At(m,l){return m.add(N(l))}n.j=function(m){if(S(this)||S(m))return P;if(B(this))return B(m)?N(this).j(N(m)):N(N(this).j(m));if(B(m))return N(this.j(N(m)));if(0>this.l(L)&&0>m.l(L))return A(this.m()*m.m());for(var l=this.g.length+m.g.length,u=[],d=0;d<2*l;d++)u[d]=0;for(d=0;d<this.g.length;d++)for(var p=0;p<m.g.length;p++){var v=this.i(d)>>>16,c=this.i(d)&65535,nt=m.i(p)>>>16,Pt=m.i(p)&65535;u[2*d+2*p]+=c*Pt,Q(u,2*d+2*p),u[2*d+2*p+1]+=v*Pt,Q(u,2*d+2*p+1),u[2*d+2*p+1]+=c*nt,Q(u,2*d+2*p+1),u[2*d+2*p+2]+=v*nt,Q(u,2*d+2*p+2)}for(d=0;d<l;d++)u[d]=u[2*d+1]<<16|u[2*d];for(d=l;d<2*l;d++)u[d]=0;return new g(u,0)};function Q(m,l){for(;(m[l]&65535)!=m[l];)m[l+1]+=m[l]>>>16,m[l]&=65535,l++}function X(m,l){this.g=m,this.h=l}function at(m,l){if(S(l))throw Error("division by zero");if(S(m))return new X(P,P);if(B(m))return l=at(N(m),l),new X(N(l.g),N(l.h));if(B(l))return l=at(m,N(l)),new X(N(l.g),l.h);if(30<m.g.length){if(B(m)||B(l))throw Error("slowDivide_ only works with positive integers.");for(var u=D,d=l;0>=d.l(m);)u=ne(u),d=ne(d);var p=tt(u,1),v=tt(d,1);for(d=tt(d,2),u=tt(u,2);!S(d);){var c=v.add(d);0>=c.l(m)&&(p=p.add(u),v=c),d=tt(d,1),u=tt(u,1)}return l=At(m,p.j(l)),new X(p,l)}for(p=P;0<=m.l(l);){for(u=Math.max(1,Math.floor(m.m()/l.m())),d=Math.ceil(Math.log(u)/Math.LN2),d=48>=d?1:Math.pow(2,d-48),v=A(u),c=v.j(l);B(c)||0<c.l(m);)u-=d,v=A(u),c=v.j(l);S(v)&&(v=D),p=p.add(v),m=At(m,c)}return new X(p,m)}n.A=function(m){return at(this,m).h},n.and=function(m){for(var l=Math.max(this.g.length,m.g.length),u=[],d=0;d<l;d++)u[d]=this.i(d)&m.i(d);return new g(u,this.h&m.h)},n.or=function(m){for(var l=Math.max(this.g.length,m.g.length),u=[],d=0;d<l;d++)u[d]=this.i(d)|m.i(d);return new g(u,this.h|m.h)},n.xor=function(m){for(var l=Math.max(this.g.length,m.g.length),u=[],d=0;d<l;d++)u[d]=this.i(d)^m.i(d);return new g(u,this.h^m.h)};function ne(m){for(var l=m.g.length+1,u=[],d=0;d<l;d++)u[d]=m.i(d)<<1|m.i(d-1)>>>31;return new g(u,m.h)}function tt(m,l){var u=l>>5;l%=32;for(var d=m.g.length-u,p=[],v=0;v<d;v++)p[v]=0<l?m.i(v+u)>>>l|m.i(v+u+1)<<32-l:m.i(v+u);return new g(p,m.h)}o.prototype.digest=o.prototype.v,o.prototype.reset=o.prototype.s,o.prototype.update=o.prototype.u,g.prototype.add=g.prototype.add,g.prototype.multiply=g.prototype.j,g.prototype.modulo=g.prototype.A,g.prototype.compare=g.prototype.l,g.prototype.toNumber=g.prototype.m,g.prototype.toString=g.prototype.toString,g.prototype.getBits=g.prototype.i,g.fromNumber=A,g.fromString=R,xs=g}).apply(typeof Gi<"u"?Gi:typeof self<"u"?self:typeof window<"u"?window:{});var we=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,i,r){return t==Array.prototype||t==Object.prototype||(t[i]=r.value),t};function s(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof we=="object"&&we];for(var i=0;i<t.length;++i){var r=t[i];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}var o=s(this);function h(t,i){if(i)t:{var r=o;t=t.split(".");for(var a=0;a<t.length-1;a++){var y=t[a];if(!(y in r))break t;r=r[y]}t=t[t.length-1],a=r[t],i=i(a),i!=a&&i!=null&&e(r,t,{configurable:!0,writable:!0,value:i})}}function f(t,i){t instanceof String&&(t+="");var r=0,a=!1,y={next:function(){if(!a&&r<t.length){var E=r++;return{value:i(E,t[E]),done:!1}}return a=!0,{done:!0,value:void 0}}};return y[Symbol.iterator]=function(){return y},y}h("Array.prototype.values",function(t){return t||function(){return f(this,function(i,r){return r})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var g=g||{},w=this||self;function I(t){var i=typeof t;return i=i!="object"?i:t?Array.isArray(t)?"array":i:"null",i=="array"||i=="object"&&typeof t.length=="number"}function A(t){var i=typeof t;return i=="object"&&t!=null||i=="function"}function R(t,i,r){return t.call.apply(t.bind,arguments)}function P(t,i,r){if(!t)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var y=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(y,a),t.apply(i,y)}}return function(){return t.apply(i,arguments)}}function D(t,i,r){return D=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?R:P,D.apply(null,arguments)}function L(t,i){var r=Array.prototype.slice.call(arguments,1);return function(){var a=r.slice();return a.push.apply(a,arguments),t.apply(this,a)}}function S(t,i){function r(){}r.prototype=i.prototype,t.aa=i.prototype,t.prototype=new r,t.prototype.constructor=t,t.Qb=function(a,y,E){for(var T=Array(arguments.length-2),k=2;k<arguments.length;k++)T[k-2]=arguments[k];return i.prototype[y].apply(a,T)}}function B(t){const i=t.length;if(0<i){const r=Array(i);for(let a=0;a<i;a++)r[a]=t[a];return r}return[]}function N(t,i){for(let r=1;r<arguments.length;r++){const a=arguments[r];if(I(a)){const y=t.length||0,E=a.length||0;t.length=y+E;for(let T=0;T<E;T++)t[y+T]=a[T]}else t.push(a)}}class At{constructor(i,r){this.i=i,this.j=r,this.h=0,this.g=null}get(){let i;return 0<this.h?(this.h--,i=this.g,this.g=i.next,i.next=null):i=this.i(),i}}function Q(t){return/^[\s\xa0]*$/.test(t)}function X(){var t=w.navigator;return t&&(t=t.userAgent)?t:""}function at(t){return at[" "](t),t}at[" "]=function(){};var ne=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function tt(t,i,r){for(const a in t)i.call(r,t[a],a,t)}function m(t,i){for(const r in t)i.call(void 0,t[r],r,t)}function l(t){const i={};for(const r in t)i[r]=t[r];return i}const u="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function d(t,i){let r,a;for(let y=1;y<arguments.length;y++){a=arguments[y];for(r in a)t[r]=a[r];for(let E=0;E<u.length;E++)r=u[E],Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}}function p(t){var i=1;t=t.split(":");const r=[];for(;0<i&&t.length;)r.push(t.shift()),i--;return t.length&&r.push(t.join(":")),r}function v(t){w.setTimeout(()=>{throw t},0)}function c(){var t=De;let i=null;return t.g&&(i=t.g,t.g=t.g.next,t.g||(t.h=null),i.next=null),i}class nt{constructor(){this.h=this.g=null}add(i,r){const a=Pt.get();a.set(i,r),this.h?this.h.next=a:this.g=a,this.h=a}}var Pt=new At(()=>new qs,t=>t.reset());class qs{constructor(){this.next=this.g=this.h=null}set(i,r){this.h=i,this.g=r,this.next=null}reset(){this.next=this.g=this.h=null}}let Ot,Lt=!1,De=new nt,Dn=()=>{const t=w.Promise.resolve(void 0);Ot=()=>{t.then(Ks)}};var Ks=()=>{for(var t;t=c();){try{t.h.call(t.g)}catch(r){v(r)}var i=Pt;i.j(t),100>i.h&&(i.h++,t.next=i.g,i.g=t)}Lt=!1};function ht(){this.s=this.s,this.C=this.C}ht.prototype.s=!1,ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function F(t,i){this.type=t,this.g=this.target=i,this.defaultPrevented=!1}F.prototype.h=function(){this.defaultPrevented=!0};var Ws=function(){if(!w.addEventListener||!Object.defineProperty)return!1;var t=!1,i=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const r=()=>{};w.addEventListener("test",r,i),w.removeEventListener("test",r,i)}catch{}return t}();function Mt(t,i){if(F.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var r=this.type=t.type,a=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=i,i=t.relatedTarget){if(ne){t:{try{at(i.nodeName);var y=!0;break t}catch{}y=!1}y||(i=null)}}else r=="mouseover"?i=t.fromElement:r=="mouseout"&&(i=t.toElement);this.relatedTarget=i,a?(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Xs[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Mt.aa.h.call(this)}}S(Mt,F);var Xs={2:"touch",3:"pen",4:"mouse"};Mt.prototype.h=function(){Mt.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ie="closure_listenable_"+(1e6*Math.random()|0),Js=0;function Ys(t,i,r,a,y){this.listener=t,this.proxy=null,this.src=i,this.type=r,this.capture=!!a,this.ha=y,this.key=++Js,this.da=this.fa=!1}function se(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function re(t){this.src=t,this.g={},this.h=0}re.prototype.add=function(t,i,r,a,y){var E=t.toString();t=this.g[E],t||(t=this.g[E]=[],this.h++);var T=Re(t,i,a,y);return-1<T?(i=t[T],r||(i.fa=!1)):(i=new Ys(i,this.src,E,!!a,y),i.fa=r,t.push(i)),i};function ke(t,i){var r=i.type;if(r in t.g){var a=t.g[r],y=Array.prototype.indexOf.call(a,i,void 0),E;(E=0<=y)&&Array.prototype.splice.call(a,y,1),E&&(se(i),t.g[r].length==0&&(delete t.g[r],t.h--))}}function Re(t,i,r,a){for(var y=0;y<t.length;++y){var E=t[y];if(!E.da&&E.listener==i&&E.capture==!!r&&E.ha==a)return y}return-1}var Pe="closure_lm_"+(1e6*Math.random()|0),Oe={};function kn(t,i,r,a,y){if(Array.isArray(i)){for(var E=0;E<i.length;E++)kn(t,i[E],r,a,y);return null}return r=On(r),t&&t[ie]?t.K(i,r,A(a)?!!a.capture:!1,y):Zs(t,i,r,!1,a,y)}function Zs(t,i,r,a,y,E){if(!i)throw Error("Invalid event type");var T=A(y)?!!y.capture:!!y,k=Me(t);if(k||(t[Pe]=k=new re(t)),r=k.add(i,r,a,T,E),r.proxy)return r;if(a=Qs(),r.proxy=a,a.src=t,a.listener=r,t.addEventListener)Ws||(y=T),y===void 0&&(y=!1),t.addEventListener(i.toString(),a,y);else if(t.attachEvent)t.attachEvent(Pn(i.toString()),a);else if(t.addListener&&t.removeListener)t.addListener(a);else throw Error("addEventListener and attachEvent are unavailable.");return r}function Qs(){function t(r){return i.call(t.src,t.listener,r)}const i=tr;return t}function Rn(t,i,r,a,y){if(Array.isArray(i))for(var E=0;E<i.length;E++)Rn(t,i[E],r,a,y);else a=A(a)?!!a.capture:!!a,r=On(r),t&&t[ie]?(t=t.i,i=String(i).toString(),i in t.g&&(E=t.g[i],r=Re(E,r,a,y),-1<r&&(se(E[r]),Array.prototype.splice.call(E,r,1),E.length==0&&(delete t.g[i],t.h--)))):t&&(t=Me(t))&&(i=t.g[i.toString()],t=-1,i&&(t=Re(i,r,a,y)),(r=-1<t?i[t]:null)&&Le(r))}function Le(t){if(typeof t!="number"&&t&&!t.da){var i=t.src;if(i&&i[ie])ke(i.i,t);else{var r=t.type,a=t.proxy;i.removeEventListener?i.removeEventListener(r,a,t.capture):i.detachEvent?i.detachEvent(Pn(r),a):i.addListener&&i.removeListener&&i.removeListener(a),(r=Me(i))?(ke(r,t),r.h==0&&(r.src=null,i[Pe]=null)):se(t)}}}function Pn(t){return t in Oe?Oe[t]:Oe[t]="on"+t}function tr(t,i){if(t.da)t=!0;else{i=new Mt(i,this);var r=t.listener,a=t.ha||t.src;t.fa&&Le(t),t=r.call(a,i)}return t}function Me(t){return t=t[Pe],t instanceof re?t:null}var Ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function On(t){return typeof t=="function"?t:(t[Ne]||(t[Ne]=function(i){return t.handleEvent(i)}),t[Ne])}function x(){ht.call(this),this.i=new re(this),this.M=this,this.F=null}S(x,ht),x.prototype[ie]=!0,x.prototype.removeEventListener=function(t,i,r,a){Rn(this,t,i,r,a)};function H(t,i){var r,a=t.F;if(a)for(r=[];a;a=a.F)r.push(a);if(t=t.M,a=i.type||i,typeof i=="string")i=new F(i,t);else if(i instanceof F)i.target=i.target||t;else{var y=i;i=new F(a,t),d(i,y)}if(y=!0,r)for(var E=r.length-1;0<=E;E--){var T=i.g=r[E];y=oe(T,a,!0,i)&&y}if(T=i.g=t,y=oe(T,a,!0,i)&&y,y=oe(T,a,!1,i)&&y,r)for(E=0;E<r.length;E++)T=i.g=r[E],y=oe(T,a,!1,i)&&y}x.prototype.N=function(){if(x.aa.N.call(this),this.i){var t=this.i,i;for(i in t.g){for(var r=t.g[i],a=0;a<r.length;a++)se(r[a]);delete t.g[i],t.h--}}this.F=null},x.prototype.K=function(t,i,r,a){return this.i.add(String(t),i,!1,r,a)},x.prototype.L=function(t,i,r,a){return this.i.add(String(t),i,!0,r,a)};function oe(t,i,r,a){if(i=t.i.g[String(i)],!i)return!0;i=i.concat();for(var y=!0,E=0;E<i.length;++E){var T=i[E];if(T&&!T.da&&T.capture==r){var k=T.listener,j=T.ha||T.src;T.fa&&ke(t.i,T),y=k.call(j,a)!==!1&&y}}return y&&!a.defaultPrevented}function Ln(t,i,r){if(typeof t=="function")r&&(t=D(t,r));else if(t&&typeof t.handleEvent=="function")t=D(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(i)?-1:w.setTimeout(t,i||0)}function Mn(t){t.g=Ln(()=>{t.g=null,t.i&&(t.i=!1,Mn(t))},t.l);const i=t.h;t.h=null,t.m.apply(null,i)}class er extends ht{constructor(i,r){super(),this.m=i,this.l=r,this.h=null,this.i=!1,this.g=null}j(i){this.h=arguments,this.g?this.i=!0:Mn(this)}N(){super.N(),this.g&&(w.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nt(t){ht.call(this),this.h=t,this.g={}}S(Nt,ht);var Nn=[];function jn(t){tt(t.g,function(i,r){this.g.hasOwnProperty(r)&&Le(i)},t),t.g={}}Nt.prototype.N=function(){Nt.aa.N.call(this),jn(this)},Nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var je=w.JSON.stringify,nr=w.JSON.parse,ir=class{stringify(t){return w.JSON.stringify(t,void 0)}parse(t){return w.JSON.parse(t,void 0)}};function Be(){}Be.prototype.h=null;function Bn(t){return t.h||(t.h=t.i())}function sr(){}var jt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fe(){F.call(this,"d")}S(Fe,F);function xe(){F.call(this,"c")}S(xe,F);var _t={},Fn=null;function $e(){return Fn=Fn||new x}_t.La="serverreachability";function xn(t){F.call(this,_t.La,t)}S(xn,F);function Bt(t){const i=$e();H(i,new xn(i))}_t.STAT_EVENT="statevent";function $n(t,i){F.call(this,_t.STAT_EVENT,t),this.stat=i}S($n,F);function V(t){const i=$e();H(i,new $n(i,t))}_t.Ma="timingevent";function Un(t,i){F.call(this,_t.Ma,t),this.size=i}S(Un,F);function Ft(t,i){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return w.setTimeout(function(){t()},i)}function xt(){this.g=!0}xt.prototype.xa=function(){this.g=!1};function rr(t,i,r,a,y,E){t.info(function(){if(t.g)if(E)for(var T="",k=E.split("&"),j=0;j<k.length;j++){var b=k[j].split("=");if(1<b.length){var $=b[0];b=b[1];var U=$.split("_");T=2<=U.length&&U[1]=="type"?T+($+"="+b+"&"):T+($+"=redacted&")}}else T=null;else T=E;return"XMLHTTP REQ ("+a+") [attempt "+y+"]: "+i+`
`+r+`
`+T})}function or(t,i,r,a,y,E,T){t.info(function(){return"XMLHTTP RESP ("+a+") [ attempt "+y+"]: "+i+`
`+r+`
`+E+" "+T})}function bt(t,i,r,a){t.info(function(){return"XMLHTTP TEXT ("+i+"): "+hr(t,r)+(a?" "+a:"")})}function ar(t,i){t.info(function(){return"TIMEOUT: "+i})}xt.prototype.info=function(){};function hr(t,i){if(!t.g)return i;if(!i)return null;try{var r=JSON.parse(i);if(r){for(t=0;t<r.length;t++)if(Array.isArray(r[t])){var a=r[t];if(!(2>a.length)){var y=a[1];if(Array.isArray(y)&&!(1>y.length)){var E=y[0];if(E!="noop"&&E!="stop"&&E!="close")for(var T=1;T<y.length;T++)y[T]=""}}}}return je(r)}catch{return i}}var Ue={NO_ERROR:0,TIMEOUT:8},lr={},He;function ae(){}S(ae,Be),ae.prototype.g=function(){return new XMLHttpRequest},ae.prototype.i=function(){return{}},He=new ae;function lt(t,i,r,a){this.j=t,this.i=i,this.l=r,this.R=a||1,this.U=new Nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hn}function Hn(){this.i=null,this.g="",this.h=!1}var Vn={},Ve={};function ze(t,i,r){t.L=1,t.v=ue(it(i)),t.m=r,t.P=!0,zn(t,null)}function zn(t,i){t.F=Date.now(),he(t),t.A=it(t.v);var r=t.A,a=t.R;Array.isArray(a)||(a=[String(a)]),si(r.i,"t",a),t.C=0,r=t.j.J,t.h=new Hn,t.g=Ti(t.j,r?i:null,!t.m),0<t.O&&(t.M=new er(D(t.Y,t,t.g),t.O)),i=t.U,r=t.g,a=t.ca;var y="readystatechange";Array.isArray(y)||(y&&(Nn[0]=y.toString()),y=Nn);for(var E=0;E<y.length;E++){var T=kn(r,y[E],a||i.handleEvent,!1,i.h||i);if(!T)break;i.g[T.key]=T}i=t.H?l(t.H):{},t.m?(t.u||(t.u="POST"),i["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,i)):(t.u="GET",t.g.ea(t.A,t.u,null,i)),Bt(),rr(t.i,t.u,t.A,t.l,t.R,t.m)}lt.prototype.ca=function(t){t=t.target;const i=this.M;i&&st(t)==3?i.j():this.Y(t)},lt.prototype.Y=function(t){try{if(t==this.g)t:{const U=st(this.g);var i=this.g.Ba();const Dt=this.g.Z();if(!(3>U)&&(U!=3||this.g&&(this.h.h||this.g.oa()||ui(this.g)))){this.J||U!=4||i==7||(i==8||0>=Dt?Bt(3):Bt(2)),Ge(this);var r=this.g.Z();this.X=r;e:if(Gn(this)){var a=ui(this.g);t="";var y=a.length,E=st(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mt(this),$t(this);var T="";break e}this.h.i=new w.TextDecoder}for(i=0;i<y;i++)this.h.h=!0,t+=this.h.i.decode(a[i],{stream:!(E&&i==y-1)});a.length=0,this.h.g+=t,this.C=0,T=this.h.g}else T=this.g.oa();if(this.o=r==200,or(this.i,this.u,this.A,this.l,this.R,U,r),this.o){if(this.T&&!this.K){e:{if(this.g){var k,j=this.g;if((k=j.g?j.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(k)){var b=k;break e}}b=null}if(r=b)bt(this.i,this.l,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qe(this,r);else{this.o=!1,this.s=3,V(12),mt(this),$t(this);break t}}if(this.P){r=!0;let Y;for(;!this.J&&this.C<T.length;)if(Y=cr(this,T),Y==Ve){U==4&&(this.s=4,V(14),r=!1),bt(this.i,this.l,null,"[Incomplete Response]");break}else if(Y==Vn){this.s=4,V(15),bt(this.i,this.l,T,"[Invalid Chunk]"),r=!1;break}else bt(this.i,this.l,Y,null),qe(this,Y);if(Gn(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),U!=4||T.length!=0||this.h.h||(this.s=1,V(16),r=!1),this.o=this.o&&r,!r)bt(this.i,this.l,T,"[Invalid Chunked Response]"),mt(this),$t(this);else if(0<T.length&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.ba&&!$.M&&($.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),Ze($),$.M=!0,V(11))}}else bt(this.i,this.l,T,null),qe(this,T);U==4&&mt(this),this.o&&!this.J&&(U==4?vi(this.j,this):(this.o=!1,he(this)))}else Cr(this.g),r==400&&0<T.indexOf("Unknown SID")?(this.s=3,V(12)):(this.s=0,V(13)),mt(this),$t(this)}}}catch{}finally{}};function Gn(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function cr(t,i){var r=t.C,a=i.indexOf(`
`,r);return a==-1?Ve:(r=Number(i.substring(r,a)),isNaN(r)?Vn:(a+=1,a+r>i.length?Ve:(i=i.slice(a,a+r),t.C=a+r,i)))}lt.prototype.cancel=function(){this.J=!0,mt(this)};function he(t){t.S=Date.now()+t.I,qn(t,t.I)}function qn(t,i){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ft(D(t.ba,t),i)}function Ge(t){t.B&&(w.clearTimeout(t.B),t.B=null)}lt.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(ar(this.i,this.A),this.L!=2&&(Bt(),V(17)),mt(this),this.s=2,$t(this)):qn(this,this.S-t)};function $t(t){t.j.G==0||t.J||vi(t.j,t)}function mt(t){Ge(t);var i=t.M;i&&typeof i.ma=="function"&&i.ma(),t.M=null,jn(t.U),t.g&&(i=t.g,t.g=null,i.abort(),i.ma())}function qe(t,i){try{var r=t.j;if(r.G!=0&&(r.g==t||Ke(r.h,t))){if(!t.K&&Ke(r.h,t)&&r.G==3){try{var a=r.Da.g.parse(i)}catch{a=null}if(Array.isArray(a)&&a.length==3){var y=a;if(y[0]==0){t:if(!r.u){if(r.g)if(r.g.F+3e3<t.F)ye(r),ge(r);else break t;Ye(r),V(18)}}else r.za=y[1],0<r.za-r.T&&37500>y[2]&&r.F&&r.v==0&&!r.C&&(r.C=Ft(D(r.Za,r),6e3));if(1>=Xn(r.h)&&r.ca){try{r.ca()}catch{}r.ca=void 0}}else vt(r,11)}else if((t.K||r.g==t)&&ye(r),!Q(i))for(y=r.Da.g.parse(i),i=0;i<y.length;i++){let b=y[i];if(r.T=b[0],b=b[1],r.G==2)if(b[0]=="c"){r.K=b[1],r.ia=b[2];const $=b[3];$!=null&&(r.la=$,r.j.info("VER="+r.la));const U=b[4];U!=null&&(r.Aa=U,r.j.info("SVER="+r.Aa));const Dt=b[5];Dt!=null&&typeof Dt=="number"&&0<Dt&&(a=1.5*Dt,r.L=a,r.j.info("backChannelRequestTimeoutMs_="+a)),a=r;const Y=t.g;if(Y){const ve=Y.g?Y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ve){var E=a.h;E.g||ve.indexOf("spdy")==-1&&ve.indexOf("quic")==-1&&ve.indexOf("h2")==-1||(E.j=E.l,E.g=new Set,E.h&&(We(E,E.h),E.h=null))}if(a.D){const Qe=Y.g?Y.g.getResponseHeader("X-HTTP-Session-Id"):null;Qe&&(a.ya=Qe,O(a.I,a.D,Qe))}}r.G=3,r.l&&r.l.ua(),r.ba&&(r.R=Date.now()-t.F,r.j.info("Handshake RTT: "+r.R+"ms")),a=r;var T=t;if(a.qa=Ii(a,a.J?a.ia:null,a.W),T.K){Jn(a.h,T);var k=T,j=a.L;j&&(k.I=j),k.B&&(Ge(k),he(k)),a.g=T}else mi(a);0<r.i.length&&me(r)}else b[0]!="stop"&&b[0]!="close"||vt(r,7);else r.G==3&&(b[0]=="stop"||b[0]=="close"?b[0]=="stop"?vt(r,7):Je(r):b[0]!="noop"&&r.l&&r.l.ta(b),r.v=0)}}Bt(4)}catch{}}var ur=class{constructor(t,i){this.g=t,this.map=i}};function Kn(t){this.l=t||10,w.PerformanceNavigationTiming?(t=w.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(w.chrome&&w.chrome.loadTimes&&w.chrome.loadTimes()&&w.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wn(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Xn(t){return t.h?1:t.g?t.g.size:0}function Ke(t,i){return t.h?t.h==i:t.g?t.g.has(i):!1}function We(t,i){t.g?t.g.add(i):t.h=i}function Jn(t,i){t.h&&t.h==i?t.h=null:t.g&&t.g.has(i)&&t.g.delete(i)}Kn.prototype.cancel=function(){if(this.i=Yn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Yn(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let i=t.i;for(const r of t.g.values())i=i.concat(r.D);return i}return B(t.i)}function fr(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(I(t)){for(var i=[],r=t.length,a=0;a<r;a++)i.push(t[a]);return i}i=[],r=0;for(a in t)i[r++]=t[a];return i}function dr(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(I(t)||typeof t=="string"){var i=[];t=t.length;for(var r=0;r<t;r++)i.push(r);return i}i=[],r=0;for(const a in t)i[r++]=a;return i}}}function Zn(t,i){if(t.forEach&&typeof t.forEach=="function")t.forEach(i,void 0);else if(I(t)||typeof t=="string")Array.prototype.forEach.call(t,i,void 0);else for(var r=dr(t),a=fr(t),y=a.length,E=0;E<y;E++)i.call(void 0,a[E],r&&r[E],t)}var Qn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pr(t,i){if(t){t=t.split("&");for(var r=0;r<t.length;r++){var a=t[r].indexOf("="),y=null;if(0<=a){var E=t[r].substring(0,a);y=t[r].substring(a+1)}else E=t[r];i(E,y?decodeURIComponent(y.replace(/\+/g," ")):"")}}}function yt(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof yt){this.h=t.h,le(this,t.j),this.o=t.o,this.g=t.g,ce(this,t.s),this.l=t.l;var i=t.i,r=new Vt;r.i=i.i,i.g&&(r.g=new Map(i.g),r.h=i.h),ti(this,r),this.m=t.m}else t&&(i=String(t).match(Qn))?(this.h=!1,le(this,i[1]||"",!0),this.o=Ut(i[2]||""),this.g=Ut(i[3]||"",!0),ce(this,i[4]),this.l=Ut(i[5]||"",!0),ti(this,i[6]||"",!0),this.m=Ut(i[7]||"")):(this.h=!1,this.i=new Vt(null,this.h))}yt.prototype.toString=function(){var t=[],i=this.j;i&&t.push(Ht(i,ei,!0),":");var r=this.g;return(r||i=="file")&&(t.push("//"),(i=this.o)&&t.push(Ht(i,ei,!0),"@"),t.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r=this.s,r!=null&&t.push(":",String(r))),(r=this.l)&&(this.g&&r.charAt(0)!="/"&&t.push("/"),t.push(Ht(r,r.charAt(0)=="/"?yr:mr,!0))),(r=this.i.toString())&&t.push("?",r),(r=this.m)&&t.push("#",Ht(r,wr)),t.join("")};function it(t){return new yt(t)}function le(t,i,r){t.j=r?Ut(i,!0):i,t.j&&(t.j=t.j.replace(/:$/,""))}function ce(t,i){if(i){if(i=Number(i),isNaN(i)||0>i)throw Error("Bad port number "+i);t.s=i}else t.s=null}function ti(t,i,r){i instanceof Vt?(t.i=i,Er(t.i,t.h)):(r||(i=Ht(i,vr)),t.i=new Vt(i,t.h))}function O(t,i,r){t.i.set(i,r)}function ue(t){return O(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ut(t,i){return t?i?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ht(t,i,r){return typeof t=="string"?(t=encodeURI(t).replace(i,gr),r&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function gr(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ei=/[#\/\?@]/g,mr=/[#\?:]/g,yr=/[#\?]/g,vr=/[#\?@]/g,wr=/#/g;function Vt(t,i){this.h=this.g=null,this.i=t||null,this.j=!!i}function ct(t){t.g||(t.g=new Map,t.h=0,t.i&&pr(t.i,function(i,r){t.add(decodeURIComponent(i.replace(/\+/g," ")),r)}))}n=Vt.prototype,n.add=function(t,i){ct(this),this.i=null,t=St(this,t);var r=this.g.get(t);return r||this.g.set(t,r=[]),r.push(i),this.h+=1,this};function ni(t,i){ct(t),i=St(t,i),t.g.has(i)&&(t.i=null,t.h-=t.g.get(i).length,t.g.delete(i))}function ii(t,i){return ct(t),i=St(t,i),t.g.has(i)}n.forEach=function(t,i){ct(this),this.g.forEach(function(r,a){r.forEach(function(y){t.call(i,y,a,this)},this)},this)},n.na=function(){ct(this);const t=Array.from(this.g.values()),i=Array.from(this.g.keys()),r=[];for(let a=0;a<i.length;a++){const y=t[a];for(let E=0;E<y.length;E++)r.push(i[a])}return r},n.V=function(t){ct(this);let i=[];if(typeof t=="string")ii(this,t)&&(i=i.concat(this.g.get(St(this,t))));else{t=Array.from(this.g.values());for(let r=0;r<t.length;r++)i=i.concat(t[r])}return i},n.set=function(t,i){return ct(this),this.i=null,t=St(this,t),ii(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[i]),this.h+=1,this},n.get=function(t,i){return t?(t=this.V(t),0<t.length?String(t[0]):i):i};function si(t,i,r){ni(t,i),0<r.length&&(t.i=null,t.g.set(St(t,i),B(r)),t.h+=r.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],i=Array.from(this.g.keys());for(var r=0;r<i.length;r++){var a=i[r];const E=encodeURIComponent(String(a)),T=this.V(a);for(a=0;a<T.length;a++){var y=E;T[a]!==""&&(y+="="+encodeURIComponent(String(T[a]))),t.push(y)}}return this.i=t.join("&")};function St(t,i){return i=String(i),t.j&&(i=i.toLowerCase()),i}function Er(t,i){i&&!t.j&&(ct(t),t.i=null,t.g.forEach(function(r,a){var y=a.toLowerCase();a!=y&&(ni(this,a),si(this,y,r))},t)),t.j=i}function Ir(t,i){const r=new xt;if(w.Image){const a=new Image;a.onload=L(ut,r,"TestLoadImage: loaded",!0,i,a),a.onerror=L(ut,r,"TestLoadImage: error",!1,i,a),a.onabort=L(ut,r,"TestLoadImage: abort",!1,i,a),a.ontimeout=L(ut,r,"TestLoadImage: timeout",!1,i,a),w.setTimeout(function(){a.ontimeout&&a.ontimeout()},1e4),a.src=t}else i(!1)}function Tr(t,i){const r=new xt,a=new AbortController,y=setTimeout(()=>{a.abort(),ut(r,"TestPingServer: timeout",!1,i)},1e4);fetch(t,{signal:a.signal}).then(E=>{clearTimeout(y),E.ok?ut(r,"TestPingServer: ok",!0,i):ut(r,"TestPingServer: server error",!1,i)}).catch(()=>{clearTimeout(y),ut(r,"TestPingServer: error",!1,i)})}function ut(t,i,r,a,y){try{y&&(y.onload=null,y.onerror=null,y.onabort=null,y.ontimeout=null),a(r)}catch{}}function Ar(){this.g=new ir}function _r(t,i,r){const a=r||"";try{Zn(t,function(y,E){let T=y;A(y)&&(T=je(y)),i.push(a+E+"="+encodeURIComponent(T))})}catch(y){throw i.push(a+"type="+encodeURIComponent("_badmap")),y}}function fe(t){this.l=t.Ub||null,this.j=t.eb||!1}S(fe,Be),fe.prototype.g=function(){return new de(this.l,this.j)},fe.prototype.i=function(t){return function(){return t}}({});function de(t,i){x.call(this),this.D=t,this.o=i,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(de,x),n=de.prototype,n.open=function(t,i){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=i,this.readyState=1,Gt(this)},n.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const i={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(i.body=t),(this.D||w).fetch(new Request(this.A,i)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zt(this)),this.readyState=0},n.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Gt(this)),this.g&&(this.readyState=3,Gt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof w.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ri(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function ri(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}n.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var i=t.value?t.value:new Uint8Array(0);(i=this.v.decode(i,{stream:!t.done}))&&(this.response=this.responseText+=i)}t.done?zt(this):Gt(this),this.readyState==3&&ri(this)}},n.Ra=function(t){this.g&&(this.response=this.responseText=t,zt(this))},n.Qa=function(t){this.g&&(this.response=t,zt(this))},n.ga=function(){this.g&&zt(this)};function zt(t){t.readyState=4,t.l=null,t.j=null,t.v=null,Gt(t)}n.setRequestHeader=function(t,i){this.u.append(t,i)},n.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],i=this.h.entries();for(var r=i.next();!r.done;)r=r.value,t.push(r[0]+": "+r[1]),r=i.next();return t.join(`\r
`)};function Gt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(de.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function oi(t){let i="";return tt(t,function(r,a){i+=a,i+=":",i+=r,i+=`\r
`}),i}function Xe(t,i,r){t:{for(a in r){var a=!1;break t}a=!0}a||(r=oi(r),typeof t=="string"?r!=null&&encodeURIComponent(String(r)):O(t,i,r))}function M(t){x.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(M,x);var br=/^https?$/i,Sr=["POST","PUT"];n=M.prototype,n.Ha=function(t){this.J=t},n.ea=function(t,i,r,a){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);i=i?i.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():He.g(),this.v=this.o?Bn(this.o):Bn(He),this.g.onreadystatechange=D(this.Ea,this);try{this.B=!0,this.g.open(i,String(t),!0),this.B=!1}catch(E){ai(this,E);return}if(t=r||"",r=new Map(this.headers),a)if(Object.getPrototypeOf(a)===Object.prototype)for(var y in a)r.set(y,a[y]);else if(typeof a.keys=="function"&&typeof a.get=="function")for(const E of a.keys())r.set(E,a.get(E));else throw Error("Unknown input type for opt_headers: "+String(a));a=Array.from(r.keys()).find(E=>E.toLowerCase()=="content-type"),y=w.FormData&&t instanceof w.FormData,!(0<=Array.prototype.indexOf.call(Sr,i,void 0))||a||y||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[E,T]of r)this.g.setRequestHeader(E,T);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ci(this),this.u=!0,this.g.send(t),this.u=!1}catch(E){ai(this,E)}};function ai(t,i){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=i,t.m=5,hi(t),pe(t)}function hi(t){t.A||(t.A=!0,H(t,"complete"),H(t,"error"))}n.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,H(this,"complete"),H(this,"abort"),pe(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pe(this,!0)),M.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?li(this):this.bb())},n.bb=function(){li(this)};function li(t){if(t.h&&typeof g<"u"&&(!t.v[1]||st(t)!=4||t.Z()!=2)){if(t.u&&st(t)==4)Ln(t.Ea,0,t);else if(H(t,"readystatechange"),st(t)==4){t.h=!1;try{const T=t.Z();t:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var i=!0;break t;default:i=!1}var r;if(!(r=i)){var a;if(a=T===0){var y=String(t.D).match(Qn)[1]||null;!y&&w.self&&w.self.location&&(y=w.self.location.protocol.slice(0,-1)),a=!br.test(y?y.toLowerCase():"")}r=a}if(r)H(t,"complete"),H(t,"success");else{t.m=6;try{var E=2<st(t)?t.g.statusText:""}catch{E=""}t.l=E+" ["+t.Z()+"]",hi(t)}}finally{pe(t)}}}}function pe(t,i){if(t.g){ci(t);const r=t.g,a=t.v[0]?()=>{}:null;t.g=null,t.v=null,i||H(t,"ready");try{r.onreadystatechange=a}catch{}}}function ci(t){t.I&&(w.clearTimeout(t.I),t.I=null)}n.isActive=function(){return!!this.g};function st(t){return t.g?t.g.readyState:0}n.Z=function(){try{return 2<st(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(t){if(this.g){var i=this.g.responseText;return t&&i.indexOf(t)==0&&(i=i.substring(t.length)),nr(i)}};function ui(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Cr(t){const i={};t=(t.g&&2<=st(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let a=0;a<t.length;a++){if(Q(t[a]))continue;var r=p(t[a]);const y=r[0];if(r=r[1],typeof r!="string")continue;r=r.trim();const E=i[y]||[];i[y]=E,E.push(r)}m(i,function(a){return a.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qt(t,i,r){return r&&r.internalChannelParams&&r.internalChannelParams[t]||i}function fi(t){this.Aa=0,this.i=[],this.j=new xt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qt("baseRetryDelayMs",5e3,t),this.cb=qt("retryDelaySeedMs",1e4,t),this.Wa=qt("forwardChannelMaxRetries",2,t),this.wa=qt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Kn(t&&t.concurrentRequestLimit),this.Da=new Ar,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=fi.prototype,n.la=8,n.G=1,n.connect=function(t,i,r,a){V(0),this.W=t,this.H=i||{},r&&a!==void 0&&(this.H.OSID=r,this.H.OAID=a),this.F=this.X,this.I=Ii(this,null,this.W),me(this)};function Je(t){if(di(t),t.G==3){var i=t.U++,r=it(t.I);if(O(r,"SID",t.K),O(r,"RID",i),O(r,"TYPE","terminate"),Kt(t,r),i=new lt(t,t.j,i),i.L=2,i.v=ue(it(r)),r=!1,w.navigator&&w.navigator.sendBeacon)try{r=w.navigator.sendBeacon(i.v.toString(),"")}catch{}!r&&w.Image&&(new Image().src=i.v,r=!0),r||(i.g=Ti(i.j,null),i.g.ea(i.v)),i.F=Date.now(),he(i)}Ei(t)}function ge(t){t.g&&(Ze(t),t.g.cancel(),t.g=null)}function di(t){ge(t),t.u&&(w.clearTimeout(t.u),t.u=null),ye(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&w.clearTimeout(t.s),t.s=null)}function me(t){if(!Wn(t.h)&&!t.s){t.s=!0;var i=t.Ga;Ot||Dn(),Lt||(Ot(),Lt=!0),De.add(i,t),t.B=0}}function Dr(t,i){return Xn(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=i.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=Ft(D(t.Ga,t,i),wi(t,t.B)),t.B++,!0)}n.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const y=new lt(this,this.j,t);let E=this.o;if(this.S&&(E?(E=l(E),d(E,this.S)):E=this.S),this.m!==null||this.O||(y.H=E,E=null),this.P)t:{for(var i=0,r=0;r<this.i.length;r++){e:{var a=this.i[r];if("__data__"in a.map&&(a=a.map.__data__,typeof a=="string")){a=a.length;break e}a=void 0}if(a===void 0)break;if(i+=a,4096<i){i=r;break t}if(i===4096||r===this.i.length-1){i=r+1;break t}}i=1e3}else i=1e3;i=gi(this,y,i),r=it(this.I),O(r,"RID",t),O(r,"CVER",22),this.D&&O(r,"X-HTTP-Session-Id",this.D),Kt(this,r),E&&(this.O?i="headers="+encodeURIComponent(String(oi(E)))+"&"+i:this.m&&Xe(r,this.m,E)),We(this.h,y),this.Ua&&O(r,"TYPE","init"),this.P?(O(r,"$req",i),O(r,"SID","null"),y.T=!0,ze(y,r,null)):ze(y,r,i),this.G=2}}else this.G==3&&(t?pi(this,t):this.i.length==0||Wn(this.h)||pi(this))};function pi(t,i){var r;i?r=i.l:r=t.U++;const a=it(t.I);O(a,"SID",t.K),O(a,"RID",r),O(a,"AID",t.T),Kt(t,a),t.m&&t.o&&Xe(a,t.m,t.o),r=new lt(t,t.j,r,t.B+1),t.m===null&&(r.H=t.o),i&&(t.i=i.D.concat(t.i)),i=gi(t,r,1e3),r.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),We(t.h,r),ze(r,a,i)}function Kt(t,i){t.H&&tt(t.H,function(r,a){O(i,a,r)}),t.l&&Zn({},function(r,a){O(i,a,r)})}function gi(t,i,r){r=Math.min(t.i.length,r);var a=t.l?D(t.l.Na,t.l,t):null;t:{var y=t.i;let E=-1;for(;;){const T=["count="+r];E==-1?0<r?(E=y[0].g,T.push("ofs="+E)):E=0:T.push("ofs="+E);let k=!0;for(let j=0;j<r;j++){let b=y[j].g;const $=y[j].map;if(b-=E,0>b)E=Math.max(0,y[j].g-100),k=!1;else try{_r($,T,"req"+b+"_")}catch{a&&a($)}}if(k){a=T.join("&");break t}}}return t=t.i.splice(0,r),i.D=t,a}function mi(t){if(!t.g&&!t.u){t.Y=1;var i=t.Fa;Ot||Dn(),Lt||(Ot(),Lt=!0),De.add(i,t),t.v=0}}function Ye(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=Ft(D(t.Fa,t),wi(t,t.v)),t.v++,!0)}n.Fa=function(){if(this.u=null,yi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Ft(D(this.ab,this),t)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,V(10),ge(this),yi(this))};function Ze(t){t.A!=null&&(w.clearTimeout(t.A),t.A=null)}function yi(t){t.g=new lt(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var i=it(t.qa);O(i,"RID","rpc"),O(i,"SID",t.K),O(i,"AID",t.T),O(i,"CI",t.F?"0":"1"),!t.F&&t.ja&&O(i,"TO",t.ja),O(i,"TYPE","xmlhttp"),Kt(t,i),t.m&&t.o&&Xe(i,t.m,t.o),t.L&&(t.g.I=t.L);var r=t.g;t=t.ia,r.L=1,r.v=ue(it(i)),r.m=null,r.P=!0,zn(r,t)}n.Za=function(){this.C!=null&&(this.C=null,ge(this),Ye(this),V(19))};function ye(t){t.C!=null&&(w.clearTimeout(t.C),t.C=null)}function vi(t,i){var r=null;if(t.g==i){ye(t),Ze(t),t.g=null;var a=2}else if(Ke(t.h,i))r=i.D,Jn(t.h,i),a=1;else return;if(t.G!=0){if(i.o)if(a==1){r=i.m?i.m.length:0,i=Date.now()-i.F;var y=t.B;a=$e(),H(a,new Un(a,r)),me(t)}else mi(t);else if(y=i.s,y==3||y==0&&0<i.X||!(a==1&&Dr(t,i)||a==2&&Ye(t)))switch(r&&0<r.length&&(i=t.h,i.i=i.i.concat(r)),y){case 1:vt(t,5);break;case 4:vt(t,10);break;case 3:vt(t,6);break;default:vt(t,2)}}}function wi(t,i){let r=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(r*=2),r*i}function vt(t,i){if(t.j.info("Error code "+i),i==2){var r=D(t.fb,t),a=t.Xa;const y=!a;a=new yt(a||"//www.google.com/images/cleardot.gif"),w.location&&w.location.protocol=="http"||le(a,"https"),ue(a),y?Ir(a.toString(),r):Tr(a.toString(),r)}else V(2);t.G=0,t.l&&t.l.sa(i),Ei(t),di(t)}n.fb=function(t){t?(this.j.info("Successfully pinged google.com"),V(2)):(this.j.info("Failed to ping google.com"),V(1))};function Ei(t){if(t.G=0,t.ka=[],t.l){const i=Yn(t.h);(i.length!=0||t.i.length!=0)&&(N(t.ka,i),N(t.ka,t.i),t.h.i.length=0,B(t.i),t.i.length=0),t.l.ra()}}function Ii(t,i,r){var a=r instanceof yt?it(r):new yt(r);if(a.g!="")i&&(a.g=i+"."+a.g),ce(a,a.s);else{var y=w.location;a=y.protocol,i=i?i+"."+y.hostname:y.hostname,y=+y.port;var E=new yt(null);a&&le(E,a),i&&(E.g=i),y&&ce(E,y),r&&(E.l=r),a=E}return r=t.D,i=t.ya,r&&i&&O(a,r,i),O(a,"VER",t.la),Kt(t,a),a}function Ti(t,i,r){if(i&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return i=t.Ca&&!t.pa?new M(new fe({eb:r})):new M(t.pa),i.Ha(t.J),i}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ai(){}n=Ai.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function J(t,i){x.call(this),this.g=new fi(i),this.l=t,this.h=i&&i.messageUrlParams||null,t=i&&i.messageHeaders||null,i&&i.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=i&&i.initMessageHeaders||null,i&&i.messageContentType&&(t?t["X-WebChannel-Content-Type"]=i.messageContentType:t={"X-WebChannel-Content-Type":i.messageContentType}),i&&i.va&&(t?t["X-WebChannel-Client-Profile"]=i.va:t={"X-WebChannel-Client-Profile":i.va}),this.g.S=t,(t=i&&i.Sb)&&!Q(t)&&(this.g.m=t),this.v=i&&i.supportsCrossDomainXhr||!1,this.u=i&&i.sendRawJson||!1,(i=i&&i.httpSessionIdParam)&&!Q(i)&&(this.g.D=i,t=this.h,t!==null&&i in t&&(t=this.h,i in t&&delete t[i])),this.j=new Ct(this)}S(J,x),J.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},J.prototype.close=function(){Je(this.g)},J.prototype.o=function(t){var i=this.g;if(typeof t=="string"){var r={};r.__data__=t,t=r}else this.u&&(r={},r.__data__=je(t),t=r);i.i.push(new ur(i.Ya++,t)),i.G==3&&me(i)},J.prototype.N=function(){this.g.l=null,delete this.j,Je(this.g),delete this.g,J.aa.N.call(this)};function _i(t){Fe.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var i=t.__sm__;if(i){t:{for(const r in i){t=r;break t}t=void 0}(this.i=t)&&(t=this.i,i=i!==null&&t in i?i[t]:void 0),this.data=i}else this.data=t}S(_i,Fe);function bi(){xe.call(this),this.status=1}S(bi,xe);function Ct(t){this.g=t}S(Ct,Ai),Ct.prototype.ua=function(){H(this.g,"a")},Ct.prototype.ta=function(t){H(this.g,new _i(t))},Ct.prototype.sa=function(t){H(this.g,new bi)},Ct.prototype.ra=function(){H(this.g,"b")},J.prototype.send=J.prototype.o,J.prototype.open=J.prototype.m,J.prototype.close=J.prototype.close,Ue.NO_ERROR=0,Ue.TIMEOUT=8,Ue.HTTP_ERROR=6,lr.COMPLETE="complete",sr.EventType=jt,jt.OPEN="a",jt.CLOSE="b",jt.ERROR="c",jt.MESSAGE="d",x.prototype.listen=x.prototype.K,M.prototype.listenOnce=M.prototype.L,M.prototype.getLastError=M.prototype.Ka,M.prototype.getLastErrorCode=M.prototype.Ba,M.prototype.getStatus=M.prototype.Z,M.prototype.getResponseJson=M.prototype.Oa,M.prototype.getResponseText=M.prototype.oa,M.prototype.send=M.prototype.ea,M.prototype.setWithCredentials=M.prototype.Ha}).apply(typeof we<"u"?we:typeof self<"u"?self:typeof window<"u"?window:{});const qi="@firebase/firestore",Ki="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}z.UNAUTHENTICATED=new z(null),z.GOOGLE_CREDENTIALS=new z("google-credentials-uid"),z.FIRST_PARTY=new z("first-party-uid"),z.MOCK_USER=new z("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ee="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=new vn("@firebase/firestore");function Z(n,...e){if(Rt.logLevel<=C.DEBUG){const s=e.map(bn);Rt.debug(`Firestore (${ee}): ${n}`,...s)}}function $s(n,...e){if(Rt.logLevel<=C.ERROR){const s=e.map(bn);Rt.error(`Firestore (${ee}): ${n}`,...s)}}function Dh(n,...e){if(Rt.logLevel<=C.WARN){const s=e.map(bn);Rt.warn(`Firestore (${ee}): ${n}`,...s)}}function bn(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(s){return JSON.stringify(s)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(n="Unexpected state"){const e=`FIRESTORE (${ee}) INTERNAL ASSERTION FAILED: `+n;throw $s(e),new Error(e)}function Jt(n,e){n||Sn()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class q extends gt{constructor(e,s){super(e,s),this.code=e,this.message=s,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(){this.promise=new Promise((e,s)=>{this.resolve=e,this.reject=s})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,s){this.user=s,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,s){e.enqueueRetryable(()=>s(z.UNAUTHENTICATED))}shutdown(){}}class Rh{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,s){this.changeListener=s,e.enqueueRetryable(()=>s(this.token.user))}shutdown(){this.changeListener=null}}class Ph{constructor(e){this.t=e,this.currentUser=z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,s){Jt(this.o===void 0);let o=this.i;const h=I=>this.i!==o?(o=this.i,s(I)):Promise.resolve();let f=new Yt;this.o=()=>{this.i++,this.currentUser=this.u(),f.resolve(),f=new Yt,e.enqueueRetryable(()=>h(this.currentUser))};const g=()=>{const I=f;e.enqueueRetryable(async()=>{await I.promise,await h(this.currentUser)})},w=I=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=I,this.o&&(this.auth.addAuthTokenListener(this.o),g())};this.t.onInit(I=>w(I)),setTimeout(()=>{if(!this.auth){const I=this.t.getImmediate({optional:!0});I?w(I):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),f.resolve(),f=new Yt)}},0),g()}getToken(){const e=this.i,s=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(s).then(o=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):o?(Jt(typeof o.accessToken=="string"),new Us(o.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Jt(e===null||typeof e=="string"),new z(e)}}class Oh{constructor(e,s,o){this.l=e,this.h=s,this.P=o,this.type="FirstParty",this.user=z.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Lh{constructor(e,s,o){this.l=e,this.h=s,this.P=o}getToken(){return Promise.resolve(new Oh(this.l,this.h,this.P))}start(e,s){e.enqueueRetryable(()=>s(z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mh{constructor(e,s){this.A=s,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ko(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,s){Jt(this.o===void 0);const o=f=>{f.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${f.error.message}`);const g=f.token!==this.R;return this.R=f.token,Z("FirebaseAppCheckTokenProvider",`Received ${g?"new":"existing"} token.`),g?s(f.token):Promise.resolve()};this.o=f=>{e.enqueueRetryable(()=>o(f))};const h=f=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=f,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(f=>h(f)),setTimeout(()=>{if(!this.appCheck){const f=this.A.getImmediate({optional:!0});f?h(f):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Wi(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(s=>s?(Jt(typeof s.token=="string"),this.R=s.token,new Wi(s.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function Nh(n){return n.name==="IndexedDbTransactionError"}const gn="(default)";class _e{constructor(e,s){this.projectId=e,this.database=s||gn}static empty(){return new _e("","")}get isDefaultDatabase(){return this.database===gn}isEqual(e){return e instanceof _e&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xi,_;(_=Xi||(Xi={}))[_.OK=0]="OK",_[_.CANCELLED=1]="CANCELLED",_[_.UNKNOWN=2]="UNKNOWN",_[_.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_[_.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_[_.NOT_FOUND=5]="NOT_FOUND",_[_.ALREADY_EXISTS=6]="ALREADY_EXISTS",_[_.PERMISSION_DENIED=7]="PERMISSION_DENIED",_[_.UNAUTHENTICATED=16]="UNAUTHENTICATED",_[_.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_[_.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_[_.ABORTED=10]="ABORTED",_[_.OUT_OF_RANGE=11]="OUT_OF_RANGE",_[_.UNIMPLEMENTED=12]="UNIMPLEMENTED",_[_.INTERNAL=13]="INTERNAL",_[_.UNAVAILABLE=14]="UNAVAILABLE",_[_.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new xs([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=1048576;function hn(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,s,o=1e3,h=1.5,f=6e4){this.Ti=e,this.timerId=s,this.Go=o,this.zo=h,this.jo=f,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const s=Math.floor(this.Ho+this.e_()),o=Math.max(0,Date.now()-this.Yo),h=Math.max(0,s-o);h>0&&Z("ExponentialBackoff",`Backing off for ${h} ms (base delay: ${this.Ho} ms, delay with jitter: ${s} ms, last attempt: ${o} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,h,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,s,o,h,f){this.asyncQueue=e,this.timerId=s,this.targetTimeMs=o,this.op=h,this.removalCallback=f,this.deferred=new Yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(g=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,s,o,h,f){const g=Date.now()+o,w=new Cn(e,s,g,h,f);return w.start(o),w}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Ji,Yi;(Yi=Ji||(Ji={}))._a="default",Yi.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new Map;function $h(n,e,s,o){if(e===!0&&o===!0)throw new q(G.INVALID_ARGUMENT,`${n} and ${s} cannot be used together.`)}function Uh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(o){return o.constructor?o.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Sn()}function Hh(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new q(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const s=Uh(n);throw new q(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${s}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs="firestore.googleapis.com",Qi=!0;class ts{constructor(e){var s,o;if(e.host===void 0){if(e.ssl!==void 0)throw new q(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Hs,this.ssl=Qi}else this.host=e.host,this.ssl=(s=e.ssl)!==null&&s!==void 0?s:Qi;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=jh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Bh)throw new q(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$h("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xh((o=e.experimentalLongPollingOptions)!==null&&o!==void 0?o:{}),function(f){if(f.timeoutSeconds!==void 0){if(isNaN(f.timeoutSeconds))throw new q(G.INVALID_ARGUMENT,`invalid long polling timeout: ${f.timeoutSeconds} (must not be NaN)`);if(f.timeoutSeconds<5)throw new q(G.INVALID_ARGUMENT,`invalid long polling timeout: ${f.timeoutSeconds} (minimum allowed value is 5)`);if(f.timeoutSeconds>30)throw new q(G.INVALID_ARGUMENT,`invalid long polling timeout: ${f.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(o,h){return o.timeoutSeconds===h.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vs{constructor(e,s,o,h){this._authCredentials=e,this._appCheckCredentials=s,this._databaseId=o,this._app=h,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ts({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ts(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(o){if(!o)return new kh;switch(o.type){case"firstParty":return new Lh(o.sessionIndex||"0",o.iamToken||null,o.authTokenFactory||null);case"provider":return o.client;default:throw new q(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(s){const o=Zi.get(s);o&&(Z("ComponentProvider","Removing Datastore"),Zi.delete(s),o.terminate())}(this),Promise.resolve()}}function Vh(n,e,s,o={}){var h;const f=(n=Hh(n,Vs))._getSettings(),g=Object.assign(Object.assign({},f),{emulatorOptions:n._getEmulatorOptions()}),w=`${e}:${s}`;f.host!==Hs&&f.host!==w&&Dh("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const I=Object.assign(Object.assign({},f),{host:w,ssl:!1,emulatorOptions:o});if(!Zt(I,g)&&(n._setSettings(I),o.mockUserToken)){let A,R;if(typeof o.mockUserToken=="string")A=o.mockUserToken,R=z.MOCK_USER;else{A=Ur(o.mockUserToken,(h=n._app)===null||h===void 0?void 0:h.options.projectId);const P=o.mockUserToken.sub||o.mockUserToken.user_id;if(!P)throw new q(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");R=new z(P)}n._authCredentials=new Rh(new Us(A,R))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="AsyncQueue";class ns{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Fh(this,"async_queue_retry"),this.Su=()=>{const o=hn();o&&Z(es,"Visibility state changed to "+o.visibilityState),this.a_.t_()},this.bu=e;const s=hn();s&&typeof s.addEventListener=="function"&&s.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const s=hn();s&&typeof s.removeEventListener=="function"&&s.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const s=new Yt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(s.resolve,s.reject),s.promise)).then(()=>s.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Nh(e))throw e;Z(es,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const s=this.bu.then(()=>(this.pu=!0,e().catch(o=>{this.gu=o,this.pu=!1;const h=function(g){let w=g.message||"";return g.stack&&(w=g.stack.includes(g.message)?g.stack:g.message+`
`+g.stack),w}(o);throw $s("INTERNAL UNHANDLED ERROR: ",h),o}).then(o=>(this.pu=!1,o))));return this.bu=s,s}enqueueAfterDelay(e,s,o){this.Du(),this.wu.indexOf(e)>-1&&(s=0);const h=Cn.createAndSchedule(this,e,s,o,f=>this.Fu(f));return this.fu.push(h),h}Du(){this.gu&&Sn()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const s of this.fu)if(s.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((s,o)=>s.targetTimeMs-o.targetTimeMs);for(const s of this.fu)if(s.skipDelay(),e!=="all"&&s.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const s=this.fu.indexOf(e);this.fu.splice(s,1)}}class zh extends Vs{constructor(e,s,o,h){super(e,s,o,h),this.type="firestore",this._queue=new ns,this._persistenceKey=(h==null?void 0:h.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ns(e),this._firestoreClient=void 0,await e}}}function Gh(n,e){const s=typeof n=="object"?n:ps(),o=typeof n=="string"?n:gn,h=te(s,"firestore").getImmediate({identifier:o});if(!h._initialized){const f=xr("firestore");f&&Vh(h,...f)}return h}(function(e,s=!0){(function(h){ee=h})(Jo),pt(new rt("firestore",(o,{instanceIdentifier:h,options:f})=>{const g=o.getProvider("app").getImmediate(),w=new zh(new Ph(o.getProvider("auth-internal")),new Mh(g,o.getProvider("app-check-internal")),function(A,R){if(!Object.prototype.hasOwnProperty.apply(A.options,["projectId"]))throw new q(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _e(A.options.projectId,R)}(g,h),g);return f=Object.assign({useFetchStreams:s},f),w._setSettings(f),w},"PUBLIC").setMultipleInstances(!0)),et(qi,Ki,e),et(qi,Ki,"esm2017")})();const qh={apiKey:"AIzaSyD-ez1DM8kB7DTMmyAibGf-tliEi81yb0I",authDomain:"grounded-7832a.firebaseapp.com",projectId:"grounded-7832a",storageBucket:"grounded-7832a.firebasestorage.app",messagingSenderId:"546799366765",appId:"1:546799366765:web:6e25af929a86b24751c564",measurementId:"G-MSNE0YT0GY"},zs=ds(qh);_h(zs);Gh(zs);function Kh(){document.getElementById("navLinks").style.right="0"}function Gs(){document.getElementById("navLinks").style.right="-250px"}window.showMenu=Kh;window.hideMenu=Gs;document.querySelectorAll('a[href^="#"]').forEach(n=>{n.addEventListener("click",function(e){e.preventDefault();const s=this.getAttribute("href"),o=document.querySelector(s);o&&(Gs(),window.scrollTo({top:o.offsetTop-70,behavior:"smooth"}))})});function Wh(){const n=[{id:"co2-counter",target:10},{id:"miles-counter",target:40},{id:"flights-counter",target:45e3}],e=2500,s=1e3/60,o=Math.ceil(e/s);n.forEach(h=>{const f=document.getElementById(h.id);if(!f)return;const g=h.target/o;let w=0;const I=setInterval(()=>{w+=g,w>=h.target&&(w=h.target,clearInterval(I)),h.id==="co2-counter"||h.id==="miles-counter"?f.textContent=(Math.floor(w*10)/10).toLocaleString():f.textContent=Math.floor(w).toLocaleString()},s)})}let Wt,kt,mn,yn;document.addEventListener("DOMContentLoaded",function(){Wt=document.getElementById("waitlist-form"),kt=document.getElementById("success-modal"),mn=document.querySelector(".close"),yn=document.getElementById("close-modal"),Wt&&Wt.addEventListener("submit",async function(n){n.preventDefault();const e=new FormData(Wt),s={};e.forEach((o,h)=>{s[h]=o});try{const o=await grecaptcha.execute("6LeTTg8rAAAAANrjs2RVKYn7vTAL9dIKz9MCTctb",{action:"submit"});console.log("reCAPTCHA Token:",o),s["g-recaptcha-response"]=o,(await fetch("https://us-central1-grounded-7832a.cloudfunctions.net/submitForm",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})).ok?(console.log("Form submitted successfully!"),kt.style.display="flex",Wt.reset()):(console.error("Failed to submit the form."),alert("Failed to submit the form. Please try again."))}catch(o){console.error("Error generating reCAPTCHA token or submitting the form:",o),alert("An error occurred. Please try again later.")}})});document.addEventListener("DOMContentLoaded",function(){mn&&mn.addEventListener("click",function(){kt.style.display="none"}),yn&&yn.addEventListener("click",function(){kt.style.display="none"}),window.addEventListener("click",function(n){n.target===kt&&(kt.style.display="none")})});document.addEventListener("DOMContentLoaded",function(){const n=document.querySelectorAll(".feature-col");window.innerWidth<=700&&n.forEach(o=>{o.addEventListener("click",function(){n.forEach(h=>h.classList.remove("active")),this.classList.add("active")})});const e=new IntersectionObserver(o=>{o.forEach(h=>{h.isIntersecting&&(h.target.id==="carbon-impact"&&Wh(),e.unobserve(h.target))})},{threshold:.5}),s=document.getElementById("carbon-impact");s&&e.observe(s)});function Xh(){const n=document.getElementById("user-count-slider"),e=document.getElementById("user-count"),s=document.getElementById("carbon-counter");n&&n.addEventListener("input",function(){const o=this.value;e.textContent=o.toLocaleString();const h=o*36.5;s.textContent=Math.floor(h).toLocaleString()})}document.addEventListener("DOMContentLoaded",function(){document.getElementById("user-count-slider")&&Xh()});document.addEventListener("DOMContentLoaded",function(){const n=document.getElementById("cookieConsent"),e=document.getElementById("cookieAccept"),s=document.getElementById("cookieSettings"),o=document.getElementById("cookieSettingsPanel"),h=document.getElementById("cookieSave"),f=document.getElementById("analyticsConsent"),g=document.getElementById("marketingConsent"),w=localStorage.getItem("cookieConsent");if(!w)setTimeout(()=>{n.style.display="block"},1e3);else{const I=JSON.parse(w);I.analytics&&console.log("Analytics cookies enabled"),I.marketing&&console.log("Marketing cookies enabled")}e.addEventListener("click",function(){const I={necessary:!0,analytics:!0,marketing:!0};localStorage.setItem("cookieConsent",JSON.stringify(I)),console.log("All cookies accepted"),n.style.display="none"}),s.addEventListener("click",function(){o.style.display="block";const I=localStorage.getItem("cookieConsent");if(I){const A=JSON.parse(I);f.checked=A.analytics||!1,g.checked=A.marketing||!1}}),h.addEventListener("click",function(){const I={necessary:!0,analytics:f.checked,marketing:g.checked};localStorage.setItem("cookieConsent",JSON.stringify(I)),I.analytics&&console.log("Analytics cookies enabled"),I.marketing&&console.log("Marketing cookies enabled"),n.style.display="none"})});typeof grecaptcha>"u"?console.error("reCAPTCHA script not loaded. Ensure the script is included in index.html."):console.log("reCAPTCHA script loaded successfully.");window.onclick=function(n){const e=document.getElementById("socialPopup");n.target==e&&(e.style.display="none")};
