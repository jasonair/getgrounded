/* empty css               */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const Rc=()=>{};var Gs={};/**
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
 */const ta=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},bc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],l=n[e++],u=n[e++],f=((s&7)<<18|(o&63)<<12|(l&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(f>>10)),t[r++]=String.fromCharCode(56320+(f&1023))}else{const o=n[e++],l=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|l&63)}}return t.join("")},ea={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],l=s+1<n.length,u=l?n[s+1]:0,f=s+2<n.length,d=f?n[s+2]:0,I=o>>2,A=(o&3)<<4|u>>4;let S=(u&15)<<2|d>>6,P=d&63;f||(P=64,l||(S=64)),r.push(e[I],e[A],e[S],e[P])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(ta(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):bc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const A=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||A==null)throw new Sc;const S=o<<2|u>>4;if(r.push(S),d!==64){const P=u<<4&240|d>>2;if(r.push(P),A!==64){const D=d<<6&192|A;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Sc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cc=function(n){const t=ta(n);return ea.encodeByteArray(t,!0)},qn=function(n){return Cc(n).replace(/\./g,"")},Pc=function(n){try{return ea.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Vc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Dc=()=>Vc().__FIREBASE_DEFAULTS__,kc=()=>{if(typeof process>"u"||typeof Gs>"u")return;const n=Gs.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Nc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Pc(n[1]);return t&&JSON.parse(t)},_i=()=>{try{return Rc()||Dc()||kc()||Nc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Oc=n=>{var t,e;return(e=(t=_i())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Mc=n=>{const t=Oc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},na=()=>{var n;return(n=_i())===null||n===void 0?void 0:n.config};/**
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
 */class xc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Lc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[qn(JSON.stringify(e)),qn(JSON.stringify(l)),""].join(".")}/**
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
 */function Fc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uc(){var n;const t=(n=_i())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jc(){return!Uc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ra(){try{return typeof indexedDB=="object"}catch{return!1}}function ia(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function $c(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const qc="FirebaseError";class Qt extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=qc,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sr.prototype.create)}}class sr{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],l=o?zc(o,r):"Error",u=`${this.serviceName}: ${l} (${s}).`;return new Qt(s,u,r)}}function zc(n,t){return n.replace(Hc,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Hc=/\{\$([^}]+)}/g;function en(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],l=t[s];if(Ks(o)&&Ks(l)){if(!en(o,l))return!1}else if(o!==l)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Ks(n){return n!==null&&typeof n=="object"}/**
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
 */const Gc=1e3,Kc=2,Wc=4*60*60*1e3,Qc=.5;function Ws(n,t=Gc,e=Kc){const r=t*Math.pow(e,n),s=Math.round(Qc*r*(Math.random()-.5)*2);return Math.min(Wc,r+s)}/**
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
 */function oe(n){return n&&n._delegate?n._delegate:n}class Mt{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ee="[DEFAULT]";/**
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
 */class Xc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new xc;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Jc(t))try{this.getOrInitializeService({instanceIdentifier:ee})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=ee){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ee){return this.instances.has(t)}getOptions(t=ee){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&l.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&t(l,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ee){return this.component?this.component.multipleInstances?t:ee:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yc(n){return n===ee?void 0:n}function Jc(n){return n.instantiationMode==="EAGER"}/**
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
 */class Zc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Xc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const tu={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},eu=F.INFO,nu={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},ru=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=nu[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class yi{constructor(t){this.name=t,this._logLevel=eu,this._logHandler=ru,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?tu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const iu=(n,t)=>t.some(e=>n instanceof e);let Qs,Xs;function su(){return Qs||(Qs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ou(){return Xs||(Xs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sa=new WeakMap,Yr=new WeakMap,oa=new WeakMap,jr=new WeakMap,Ei=new WeakMap;function au(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{e(jt(n.result)),s()},l=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&sa.set(e,n)}).catch(()=>{}),Ei.set(t,n),t}function lu(n){if(Yr.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{e(),s()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});Yr.set(n,t)}let Jr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Yr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||oa.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return jt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function cu(n){Jr=n(Jr)}function uu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call($r(this),t,...e);return oa.set(r,t.sort?t.sort():[t]),jt(r)}:ou().includes(n)?function(...t){return n.apply($r(this),t),jt(sa.get(this))}:function(...t){return jt(n.apply($r(this),t))}}function hu(n){return typeof n=="function"?uu(n):(n instanceof IDBTransaction&&lu(n),iu(n,su())?new Proxy(n,Jr):n)}function jt(n){if(n instanceof IDBRequest)return au(n);if(jr.has(n))return jr.get(n);const t=hu(n);return t!==n&&(jr.set(n,t),Ei.set(t,n)),t}const $r=n=>Ei.get(n);function aa(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const l=indexedDB.open(n,t),u=jt(l);return r&&l.addEventListener("upgradeneeded",f=>{r(jt(l.result),f.oldVersion,f.newVersion,jt(l.transaction),f)}),e&&l.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),u.then(f=>{o&&f.addEventListener("close",()=>o()),s&&f.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const fu=["get","getKey","getAll","getAllKeys","count"],du=["put","add","delete","clear"],qr=new Map;function Ys(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(qr.get(t))return qr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=du.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||fu.includes(e)))return;const o=async function(l,...u){const f=this.transaction(l,s?"readwrite":"readonly");let d=f.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&f.done]))[0]};return qr.set(t,o),o}cu(n=>({...n,get:(t,e,r)=>Ys(t,e)||n.get(t,e,r),has:(t,e)=>!!Ys(t,e)||n.has(t,e)}));/**
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
 */class pu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(mu(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function mu(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Zr="@firebase/app",Js="0.11.4";/**
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
 */const xt=new yi("@firebase/app"),gu="@firebase/app-compat",_u="@firebase/analytics-compat",yu="@firebase/analytics",Eu="@firebase/app-check-compat",vu="@firebase/app-check",Tu="@firebase/auth",Iu="@firebase/auth-compat",wu="@firebase/database",Au="@firebase/data-connect",Ru="@firebase/database-compat",bu="@firebase/functions",Su="@firebase/functions-compat",Cu="@firebase/installations",Pu="@firebase/installations-compat",Vu="@firebase/messaging",Du="@firebase/messaging-compat",ku="@firebase/performance",Nu="@firebase/performance-compat",Ou="@firebase/remote-config",Mu="@firebase/remote-config-compat",xu="@firebase/storage",Lu="@firebase/storage-compat",Fu="@firebase/firestore",Uu="@firebase/vertexai",Bu="@firebase/firestore-compat",ju="firebase",$u="11.6.0";/**
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
 */const ti="[DEFAULT]",qu={[Zr]:"fire-core",[gu]:"fire-core-compat",[yu]:"fire-analytics",[_u]:"fire-analytics-compat",[vu]:"fire-app-check",[Eu]:"fire-app-check-compat",[Tu]:"fire-auth",[Iu]:"fire-auth-compat",[wu]:"fire-rtdb",[Au]:"fire-data-connect",[Ru]:"fire-rtdb-compat",[bu]:"fire-fn",[Su]:"fire-fn-compat",[Cu]:"fire-iid",[Pu]:"fire-iid-compat",[Vu]:"fire-fcm",[Du]:"fire-fcm-compat",[ku]:"fire-perf",[Nu]:"fire-perf-compat",[Ou]:"fire-rc",[Mu]:"fire-rc-compat",[xu]:"fire-gcs",[Lu]:"fire-gcs-compat",[Fu]:"fire-fst",[Bu]:"fire-fst-compat",[Uu]:"fire-vertex","fire-js":"fire-js",[ju]:"fire-js-all"};/**
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
 */const zn=new Map,zu=new Map,ei=new Map;function Zs(n,t){try{n.container.addComponent(t)}catch(e){xt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function zt(n){const t=n.name;if(ei.has(t))return xt.debug(`There were multiple attempts to register component ${t}.`),!1;ei.set(t,n);for(const e of zn.values())Zs(e,n);for(const e of zu.values())Zs(e,n);return!0}function cn(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Hu(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Gu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$t=new sr("app","Firebase",Gu);/**
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
 */class Ku{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
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
 */const Wu=$u;function la(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ti,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw $t.create("bad-app-name",{appName:String(s)});if(e||(e=na()),!e)throw $t.create("no-options");const o=zn.get(s);if(o){if(en(e,o.options)&&en(r,o.config))return o;throw $t.create("duplicate-app",{appName:s})}const l=new Zc(s);for(const f of ei.values())l.addComponent(f);const u=new Ku(e,r,l);return zn.set(s,u),u}function ca(n=ti){const t=zn.get(n);if(!t&&n===ti&&na())return la();if(!t)throw $t.create("no-app",{appName:n});return t}function St(n,t,e){var r;let s=(r=qu[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const u=[`Unable to register library "${s}" with version "${t}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),xt.warn(u.join(" "));return}zt(new Mt(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Qu="firebase-heartbeat-database",Xu=1,nn="firebase-heartbeat-store";let zr=null;function ua(){return zr||(zr=aa(Qu,Xu,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(nn)}catch(e){console.warn(e)}}}}).catch(n=>{throw $t.create("idb-open",{originalErrorMessage:n.message})})),zr}async function Yu(n){try{const e=(await ua()).transaction(nn),r=await e.objectStore(nn).get(ha(n));return await e.done,r}catch(t){if(t instanceof Qt)xt.warn(t.message);else{const e=$t.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});xt.warn(e.message)}}}async function to(n,t){try{const r=(await ua()).transaction(nn,"readwrite");await r.objectStore(nn).put(t,ha(n)),await r.done}catch(e){if(e instanceof Qt)xt.warn(e.message);else{const r=$t.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});xt.warn(r.message)}}}function ha(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ju=1024,Zu=30;class th{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new nh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=eo();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Zu){const l=rh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=eo(),{heartbeatsToSend:r,unsentEntries:s}=eh(this._heartbeatsCache.heartbeats),o=qn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return xt.warn(e),""}}}function eo(){return new Date().toISOString().substring(0,10)}function eh(n,t=Ju){const e=[];let r=n.slice();for(const s of n){const o=e.find(l=>l.agent===s.agent);if(o){if(o.dates.push(s.date),no(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),no(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class nh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ra()?ia().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Yu(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return to(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return to(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function no(n){return qn(JSON.stringify({version:2,heartbeats:n})).length}function rh(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function ih(n){zt(new Mt("platform-logger",t=>new pu(t),"PRIVATE")),zt(new Mt("heartbeat",t=>new th(t),"PRIVATE")),St(Zr,Js,n),St(Zr,Js,"esm2017"),St("fire-js","")}ih("");var sh="firebase",oh="11.6.0";/**
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
 */St(sh,oh,"app");const fa="@firebase/installations",vi="0.6.13";/**
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
 */const da=1e4,pa=`w:${vi}`,ma="FIS_v2",ah="https://firebaseinstallations.googleapis.com/v1",lh=60*60*1e3,ch="installations",uh="Installations";/**
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
 */const hh={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ae=new sr(ch,uh,hh);function ga(n){return n instanceof Qt&&n.code.includes("request-failed")}/**
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
 */function _a({projectId:n}){return`${ah}/projects/${n}/installations`}function ya(n){return{token:n.token,requestStatus:2,expiresIn:dh(n.expiresIn),creationTime:Date.now()}}async function Ea(n,t){const r=(await t.json()).error;return ae.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function va({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function fh(n,{refreshToken:t}){const e=va(n);return e.append("Authorization",ph(t)),e}async function Ta(n){const t=await n();return t.status>=500&&t.status<600?n():t}function dh(n){return Number(n.replace("s","000"))}function ph(n){return`${ma} ${n}`}/**
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
 */async function mh({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=_a(n),s=va(n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const l={fid:e,authVersion:ma,appId:n.appId,sdkVersion:pa},u={method:"POST",headers:s,body:JSON.stringify(l)},f=await Ta(()=>fetch(r,u));if(f.ok){const d=await f.json();return{fid:d.fid||e,registrationStatus:2,refreshToken:d.refreshToken,authToken:ya(d.authToken)}}else throw await Ea("Create Installation",f)}/**
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
 */function Ia(n){return new Promise(t=>{setTimeout(t,n)})}/**
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
 */function gh(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const _h=/^[cdef][\w-]{21}$/,ni="";function yh(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=Eh(n);return _h.test(e)?e:ni}catch{return ni}}function Eh(n){return gh(n).substr(0,22)}/**
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
 */function or(n){return`${n.appName}!${n.appId}`}/**
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
 */const wa=new Map;function Aa(n,t){const e=or(n);Ra(e,t),vh(e,t)}function Ra(n,t){const e=wa.get(n);if(e)for(const r of e)r(t)}function vh(n,t){const e=Th();e&&e.postMessage({key:n,fid:t}),Ih()}let ne=null;function Th(){return!ne&&"BroadcastChannel"in self&&(ne=new BroadcastChannel("[Firebase] FID Change"),ne.onmessage=n=>{Ra(n.data.key,n.data.fid)}),ne}function Ih(){wa.size===0&&ne&&(ne.close(),ne=null)}/**
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
 */const wh="firebase-installations-database",Ah=1,le="firebase-installations-store";let Hr=null;function Ti(){return Hr||(Hr=aa(wh,Ah,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(le)}}})),Hr}async function Hn(n,t){const e=or(n),s=(await Ti()).transaction(le,"readwrite"),o=s.objectStore(le),l=await o.get(e);return await o.put(t,e),await s.done,(!l||l.fid!==t.fid)&&Aa(n,t.fid),t}async function ba(n){const t=or(n),r=(await Ti()).transaction(le,"readwrite");await r.objectStore(le).delete(t),await r.done}async function ar(n,t){const e=or(n),s=(await Ti()).transaction(le,"readwrite"),o=s.objectStore(le),l=await o.get(e),u=t(l);return u===void 0?await o.delete(e):await o.put(u,e),await s.done,u&&(!l||l.fid!==u.fid)&&Aa(n,u.fid),u}/**
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
 */async function Ii(n){let t;const e=await ar(n.appConfig,r=>{const s=Rh(r),o=bh(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===ni?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function Rh(n){const t=n||{fid:yh(),registrationStatus:0};return Sa(t)}function bh(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ae.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Sh(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Ch(n)}:{installationEntry:t}}async function Sh(n,t){try{const e=await mh(n,t);return Hn(n.appConfig,e)}catch(e){throw ga(e)&&e.customData.serverCode===409?await ba(n.appConfig):await Hn(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function Ch(n){let t=await ro(n.appConfig);for(;t.registrationStatus===1;)await Ia(100),t=await ro(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await Ii(n);return r||e}return t}function ro(n){return ar(n,t=>{if(!t)throw ae.create("installation-not-found");return Sa(t)})}function Sa(n){return Ph(n)?{fid:n.fid,registrationStatus:0}:n}function Ph(n){return n.registrationStatus===1&&n.registrationTime+da<Date.now()}/**
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
 */async function Vh({appConfig:n,heartbeatServiceProvider:t},e){const r=Dh(n,e),s=fh(n,e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const l={installation:{sdkVersion:pa,appId:n.appId}},u={method:"POST",headers:s,body:JSON.stringify(l)},f=await Ta(()=>fetch(r,u));if(f.ok){const d=await f.json();return ya(d)}else throw await Ea("Generate Auth Token",f)}function Dh(n,{fid:t}){return`${_a(n)}/${t}/authTokens:generate`}/**
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
 */async function wi(n,t=!1){let e;const r=await ar(n.appConfig,o=>{if(!Ca(o))throw ae.create("not-registered");const l=o.authToken;if(!t&&Oh(l))return o;if(l.requestStatus===1)return e=kh(n,t),o;{if(!navigator.onLine)throw ae.create("app-offline");const u=xh(o);return e=Nh(n,u),u}});return e?await e:r.authToken}async function kh(n,t){let e=await io(n.appConfig);for(;e.authToken.requestStatus===1;)await Ia(100),e=await io(n.appConfig);const r=e.authToken;return r.requestStatus===0?wi(n,t):r}function io(n){return ar(n,t=>{if(!Ca(t))throw ae.create("not-registered");const e=t.authToken;return Lh(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Nh(n,t){try{const e=await Vh(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await Hn(n.appConfig,r),e}catch(e){if(ga(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await ba(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Hn(n.appConfig,r)}throw e}}function Ca(n){return n!==void 0&&n.registrationStatus===2}function Oh(n){return n.requestStatus===2&&!Mh(n)}function Mh(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+lh}function xh(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function Lh(n){return n.requestStatus===1&&n.requestTime+da<Date.now()}/**
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
 */async function Fh(n){const t=n,{installationEntry:e,registrationPromise:r}=await Ii(t);return r?r.catch(console.error):wi(t).catch(console.error),e.fid}/**
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
 */async function Uh(n,t=!1){const e=n;return await Bh(e),(await wi(e,t)).token}async function Bh(n){const{registrationPromise:t}=await Ii(n);t&&await t}/**
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
 */function jh(n){if(!n||!n.options)throw Gr("App Configuration");if(!n.name)throw Gr("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw Gr(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Gr(n){return ae.create("missing-app-config-values",{valueName:n})}/**
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
 */const Pa="installations",$h="installations-internal",qh=n=>{const t=n.getProvider("app").getImmediate(),e=jh(t),r=cn(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},zh=n=>{const t=n.getProvider("app").getImmediate(),e=cn(t,Pa).getImmediate();return{getId:()=>Fh(e),getToken:s=>Uh(e,s)}};function Hh(){zt(new Mt(Pa,qh,"PUBLIC")),zt(new Mt($h,zh,"PRIVATE"))}Hh();St(fa,vi);St(fa,vi,"esm2017");/**
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
 */const Gn="analytics",Gh="firebase_id",Kh="origin",Wh=60*1e3,Qh="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ai="https://www.googletagmanager.com/gtag/js";/**
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
 */const yt=new yi("@firebase/analytics");/**
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
 */const Xh={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Tt=new sr("analytics","Analytics",Xh);/**
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
 */function Yh(n){if(!n.startsWith(Ai)){const t=Tt.create("invalid-gtag-resource",{gtagURL:n});return yt.warn(t.message),""}return n}function Va(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function Jh(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function Zh(n,t){const e=Jh("firebase-js-sdk-policy",{createScriptURL:Yh}),r=document.createElement("script"),s=`${Ai}?l=${n}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function tf(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function ef(n,t,e,r,s,o){const l=r[s];try{if(l)await t[l];else{const f=(await Va(e)).find(d=>d.measurementId===s);f&&await t[f.appId]}}catch(u){yt.error(u)}n("config",s,o)}async function nf(n,t,e,r,s){try{let o=[];if(s&&s.send_to){let l=s.send_to;Array.isArray(l)||(l=[l]);const u=await Va(e);for(const f of l){const d=u.find(A=>A.measurementId===f),I=d&&t[d.appId];if(I)o.push(I);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,s||{})}catch(o){yt.error(o)}}function rf(n,t,e,r){async function s(o,...l){try{if(o==="event"){const[u,f]=l;await nf(n,t,e,u,f)}else if(o==="config"){const[u,f]=l;await ef(n,t,e,r,u,f)}else if(o==="consent"){const[u,f]=l;n("consent",u,f)}else if(o==="get"){const[u,f,d]=l;n("get",u,f,d)}else if(o==="set"){const[u]=l;n("set",u)}else n(o,...l)}catch(u){yt.error(u)}}return s}function sf(n,t,e,r,s){let o=function(...l){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=rf(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function of(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Ai)&&e.src.includes(n))return e;return null}/**
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
 */const af=30,lf=1e3;class cf{constructor(t={},e=lf){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Da=new cf;function uf(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function hf(n){var t;const{appId:e,apiKey:r}=n,s={method:"GET",headers:uf(r)},o=Qh.replace("{app-id}",e),l=await fetch(o,s);if(l.status!==200&&l.status!==304){let u="";try{const f=await l.json();!((t=f.error)===null||t===void 0)&&t.message&&(u=f.error.message)}catch{}throw Tt.create("config-fetch-failed",{httpStatus:l.status,responseMessage:u})}return l.json()}async function ff(n,t=Da,e){const{appId:r,apiKey:s,measurementId:o}=n.options;if(!r)throw Tt.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw Tt.create("no-api-key")}const l=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new mf;return setTimeout(async()=>{u.abort()},Wh),ka({appId:r,apiKey:s,measurementId:o},l,u,t)}async function ka(n,{throttleEndTimeMillis:t,backoffCount:e},r,s=Da){var o;const{appId:l,measurementId:u}=n;try{await df(r,t)}catch(f){if(u)return yt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:l,measurementId:u};throw f}try{const f=await hf(n);return s.deleteThrottleMetadata(l),f}catch(f){const d=f;if(!pf(d)){if(s.deleteThrottleMetadata(l),u)return yt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:l,measurementId:u};throw f}const I=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?Ws(e,s.intervalMillis,af):Ws(e,s.intervalMillis),A={throttleEndTimeMillis:Date.now()+I,backoffCount:e+1};return s.setThrottleMetadata(l,A),yt.debug(`Calling attemptFetch again in ${I} millis`),ka(n,A,r,s)}}function df(n,t){return new Promise((e,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),r(Tt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function pf(n){if(!(n instanceof Qt)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class mf{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function gf(n,t,e,r,s){if(s&&s.global){n("event",e,r);return}else{const o=await t,l=Object.assign(Object.assign({},r),{send_to:o});n("event",e,l)}}/**
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
 */async function _f(){if(ra())try{await ia()}catch(n){return yt.warn(Tt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return yt.warn(Tt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function yf(n,t,e,r,s,o,l){var u;const f=ff(n);f.then(P=>{e[P.measurementId]=P.appId,n.options.measurementId&&P.measurementId!==n.options.measurementId&&yt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${P.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(P=>yt.error(P)),t.push(f);const d=_f().then(P=>{if(P)return r.getId()}),[I,A]=await Promise.all([f,d]);of(o)||Zh(o,I.measurementId),s("js",new Date);const S=(u=l==null?void 0:l.config)!==null&&u!==void 0?u:{};return S[Kh]="firebase",S.update=!0,A!=null&&(S[Gh]=A),s("config",I.measurementId,S),I.measurementId}/**
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
 */class Ef{constructor(t){this.app=t}_delete(){return delete Xe[this.app.options.appId],Promise.resolve()}}let Xe={},so=[];const oo={};let Kr="dataLayer",vf="gtag",ao,Na,lo=!1;function Tf(){const n=[];if(Bc()&&n.push("This is a browser extension environment."),$c()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),e=Tt.create("invalid-analytics-context",{errorInfo:t});yt.warn(e.message)}}function If(n,t,e){Tf();const r=n.options.appId;if(!r)throw Tt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)yt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Tt.create("no-api-key");if(Xe[r]!=null)throw Tt.create("already-exists",{id:r});if(!lo){tf(Kr);const{wrappedGtag:o,gtagCore:l}=sf(Xe,so,oo,Kr,vf);Na=o,ao=l,lo=!0}return Xe[r]=yf(n,so,oo,t,ao,Kr,e),new Ef(n)}function wf(n=ca()){n=oe(n);const t=cn(n,Gn);return t.isInitialized()?t.getImmediate():Af(n)}function Af(n,t={}){const e=cn(n,Gn);if(e.isInitialized()){const s=e.getImmediate();if(en(t,e.getOptions()))return s;throw Tt.create("already-initialized")}return e.initialize({options:t})}function Rf(n,t,e,r){n=oe(n),gf(Na,Xe[n.app.options.appId],t,e,r).catch(s=>yt.error(s))}const co="@firebase/analytics",uo="0.10.12";function bf(){zt(new Mt(Gn,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return If(r,s,e)},"PUBLIC")),zt(new Mt("analytics-internal",n,"PRIVATE")),St(co,uo),St(co,uo,"esm2017");function n(t){try{const e=t.getProvider(Gn).getImmediate();return{logEvent:(r,s,o)=>Rf(e,r,s,o)}}catch(e){throw Tt.create("interop-component-reg-failed",{reason:e})}}}bf();var ho=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ri;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,p){function g(){}g.prototype=p.prototype,E.D=p.prototype,E.prototype=new g,E.prototype.constructor=E,E.C=function(_,y,T){for(var m=Array(arguments.length-2),Vt=2;Vt<arguments.length;Vt++)m[Vt-2]=arguments[Vt];return p.prototype[y].apply(_,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,p,g){g||(g=0);var _=Array(16);if(typeof p=="string")for(var y=0;16>y;++y)_[y]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(y=0;16>y;++y)_[y]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=E.g[0],g=E.g[1],y=E.g[2];var T=E.g[3],m=p+(T^g&(y^T))+_[0]+3614090360&4294967295;p=g+(m<<7&4294967295|m>>>25),m=T+(y^p&(g^y))+_[1]+3905402710&4294967295,T=p+(m<<12&4294967295|m>>>20),m=y+(g^T&(p^g))+_[2]+606105819&4294967295,y=T+(m<<17&4294967295|m>>>15),m=g+(p^y&(T^p))+_[3]+3250441966&4294967295,g=y+(m<<22&4294967295|m>>>10),m=p+(T^g&(y^T))+_[4]+4118548399&4294967295,p=g+(m<<7&4294967295|m>>>25),m=T+(y^p&(g^y))+_[5]+1200080426&4294967295,T=p+(m<<12&4294967295|m>>>20),m=y+(g^T&(p^g))+_[6]+2821735955&4294967295,y=T+(m<<17&4294967295|m>>>15),m=g+(p^y&(T^p))+_[7]+4249261313&4294967295,g=y+(m<<22&4294967295|m>>>10),m=p+(T^g&(y^T))+_[8]+1770035416&4294967295,p=g+(m<<7&4294967295|m>>>25),m=T+(y^p&(g^y))+_[9]+2336552879&4294967295,T=p+(m<<12&4294967295|m>>>20),m=y+(g^T&(p^g))+_[10]+4294925233&4294967295,y=T+(m<<17&4294967295|m>>>15),m=g+(p^y&(T^p))+_[11]+2304563134&4294967295,g=y+(m<<22&4294967295|m>>>10),m=p+(T^g&(y^T))+_[12]+1804603682&4294967295,p=g+(m<<7&4294967295|m>>>25),m=T+(y^p&(g^y))+_[13]+4254626195&4294967295,T=p+(m<<12&4294967295|m>>>20),m=y+(g^T&(p^g))+_[14]+2792965006&4294967295,y=T+(m<<17&4294967295|m>>>15),m=g+(p^y&(T^p))+_[15]+1236535329&4294967295,g=y+(m<<22&4294967295|m>>>10),m=p+(y^T&(g^y))+_[1]+4129170786&4294967295,p=g+(m<<5&4294967295|m>>>27),m=T+(g^y&(p^g))+_[6]+3225465664&4294967295,T=p+(m<<9&4294967295|m>>>23),m=y+(p^g&(T^p))+_[11]+643717713&4294967295,y=T+(m<<14&4294967295|m>>>18),m=g+(T^p&(y^T))+_[0]+3921069994&4294967295,g=y+(m<<20&4294967295|m>>>12),m=p+(y^T&(g^y))+_[5]+3593408605&4294967295,p=g+(m<<5&4294967295|m>>>27),m=T+(g^y&(p^g))+_[10]+38016083&4294967295,T=p+(m<<9&4294967295|m>>>23),m=y+(p^g&(T^p))+_[15]+3634488961&4294967295,y=T+(m<<14&4294967295|m>>>18),m=g+(T^p&(y^T))+_[4]+3889429448&4294967295,g=y+(m<<20&4294967295|m>>>12),m=p+(y^T&(g^y))+_[9]+568446438&4294967295,p=g+(m<<5&4294967295|m>>>27),m=T+(g^y&(p^g))+_[14]+3275163606&4294967295,T=p+(m<<9&4294967295|m>>>23),m=y+(p^g&(T^p))+_[3]+4107603335&4294967295,y=T+(m<<14&4294967295|m>>>18),m=g+(T^p&(y^T))+_[8]+1163531501&4294967295,g=y+(m<<20&4294967295|m>>>12),m=p+(y^T&(g^y))+_[13]+2850285829&4294967295,p=g+(m<<5&4294967295|m>>>27),m=T+(g^y&(p^g))+_[2]+4243563512&4294967295,T=p+(m<<9&4294967295|m>>>23),m=y+(p^g&(T^p))+_[7]+1735328473&4294967295,y=T+(m<<14&4294967295|m>>>18),m=g+(T^p&(y^T))+_[12]+2368359562&4294967295,g=y+(m<<20&4294967295|m>>>12),m=p+(g^y^T)+_[5]+4294588738&4294967295,p=g+(m<<4&4294967295|m>>>28),m=T+(p^g^y)+_[8]+2272392833&4294967295,T=p+(m<<11&4294967295|m>>>21),m=y+(T^p^g)+_[11]+1839030562&4294967295,y=T+(m<<16&4294967295|m>>>16),m=g+(y^T^p)+_[14]+4259657740&4294967295,g=y+(m<<23&4294967295|m>>>9),m=p+(g^y^T)+_[1]+2763975236&4294967295,p=g+(m<<4&4294967295|m>>>28),m=T+(p^g^y)+_[4]+1272893353&4294967295,T=p+(m<<11&4294967295|m>>>21),m=y+(T^p^g)+_[7]+4139469664&4294967295,y=T+(m<<16&4294967295|m>>>16),m=g+(y^T^p)+_[10]+3200236656&4294967295,g=y+(m<<23&4294967295|m>>>9),m=p+(g^y^T)+_[13]+681279174&4294967295,p=g+(m<<4&4294967295|m>>>28),m=T+(p^g^y)+_[0]+3936430074&4294967295,T=p+(m<<11&4294967295|m>>>21),m=y+(T^p^g)+_[3]+3572445317&4294967295,y=T+(m<<16&4294967295|m>>>16),m=g+(y^T^p)+_[6]+76029189&4294967295,g=y+(m<<23&4294967295|m>>>9),m=p+(g^y^T)+_[9]+3654602809&4294967295,p=g+(m<<4&4294967295|m>>>28),m=T+(p^g^y)+_[12]+3873151461&4294967295,T=p+(m<<11&4294967295|m>>>21),m=y+(T^p^g)+_[15]+530742520&4294967295,y=T+(m<<16&4294967295|m>>>16),m=g+(y^T^p)+_[2]+3299628645&4294967295,g=y+(m<<23&4294967295|m>>>9),m=p+(y^(g|~T))+_[0]+4096336452&4294967295,p=g+(m<<6&4294967295|m>>>26),m=T+(g^(p|~y))+_[7]+1126891415&4294967295,T=p+(m<<10&4294967295|m>>>22),m=y+(p^(T|~g))+_[14]+2878612391&4294967295,y=T+(m<<15&4294967295|m>>>17),m=g+(T^(y|~p))+_[5]+4237533241&4294967295,g=y+(m<<21&4294967295|m>>>11),m=p+(y^(g|~T))+_[12]+1700485571&4294967295,p=g+(m<<6&4294967295|m>>>26),m=T+(g^(p|~y))+_[3]+2399980690&4294967295,T=p+(m<<10&4294967295|m>>>22),m=y+(p^(T|~g))+_[10]+4293915773&4294967295,y=T+(m<<15&4294967295|m>>>17),m=g+(T^(y|~p))+_[1]+2240044497&4294967295,g=y+(m<<21&4294967295|m>>>11),m=p+(y^(g|~T))+_[8]+1873313359&4294967295,p=g+(m<<6&4294967295|m>>>26),m=T+(g^(p|~y))+_[15]+4264355552&4294967295,T=p+(m<<10&4294967295|m>>>22),m=y+(p^(T|~g))+_[6]+2734768916&4294967295,y=T+(m<<15&4294967295|m>>>17),m=g+(T^(y|~p))+_[13]+1309151649&4294967295,g=y+(m<<21&4294967295|m>>>11),m=p+(y^(g|~T))+_[4]+4149444226&4294967295,p=g+(m<<6&4294967295|m>>>26),m=T+(g^(p|~y))+_[11]+3174756917&4294967295,T=p+(m<<10&4294967295|m>>>22),m=y+(p^(T|~g))+_[2]+718787259&4294967295,y=T+(m<<15&4294967295|m>>>17),m=g+(T^(y|~p))+_[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(y+(m<<21&4294967295|m>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+T&4294967295}r.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var g=p-this.blockSize,_=this.B,y=this.h,T=0;T<p;){if(y==0)for(;T<=g;)s(this,E,T),T+=this.blockSize;if(typeof E=="string"){for(;T<p;)if(_[y++]=E.charCodeAt(T++),y==this.blockSize){s(this,_),y=0;break}}else for(;T<p;)if(_[y++]=E[T++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=p},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var g=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=g&255,g/=256;for(this.u(E),E=Array(16),p=g=0;4>p;++p)for(var _=0;32>_;_+=8)E[g++]=this.g[p]>>>_&255;return E};function o(E,p){var g=u;return Object.prototype.hasOwnProperty.call(g,E)?g[E]:g[E]=p(E)}function l(E,p){this.h=p;for(var g=[],_=!0,y=E.length-1;0<=y;y--){var T=E[y]|0;_&&T==p||(g[y]=T,_=!1)}this.g=g}var u={};function f(E){return-128<=E&&128>E?o(E,function(p){return new l([p|0],0>p?-1:0)}):new l([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return A;if(0>E)return k(d(-E));for(var p=[],g=1,_=0;E>=g;_++)p[_]=E/g|0,g*=4294967296;return new l(p,0)}function I(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return k(I(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=d(Math.pow(p,8)),_=A,y=0;y<E.length;y+=8){var T=Math.min(8,E.length-y),m=parseInt(E.substring(y,y+T),p);8>T?(T=d(Math.pow(p,T)),_=_.j(T).add(d(m))):(_=_.j(g),_=_.add(d(m)))}return _}var A=f(0),S=f(1),P=f(16777216);n=l.prototype,n.m=function(){if(M(this))return-k(this).m();for(var E=0,p=1,g=0;g<this.g.length;g++){var _=this.i(g);E+=(0<=_?_:4294967296+_)*p,p*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(D(this))return"0";if(M(this))return"-"+k(this).toString(E);for(var p=d(Math.pow(E,6)),g=this,_="";;){var y=ot(g,p).g;g=G(g,y.j(p));var T=((0<g.g.length?g.g[0]:g.h)>>>0).toString(E);if(g=y,D(g))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function D(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function M(E){return E.h==-1}n.l=function(E){return E=G(this,E),M(E)?-1:D(E)?0:1};function k(E){for(var p=E.g.length,g=[],_=0;_<p;_++)g[_]=~E.g[_];return new l(g,~E.h).add(S)}n.abs=function(){return M(this)?k(this):this},n.add=function(E){for(var p=Math.max(this.g.length,E.g.length),g=[],_=0,y=0;y<=p;y++){var T=_+(this.i(y)&65535)+(E.i(y)&65535),m=(T>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);_=m>>>16,T&=65535,m&=65535,g[y]=m<<16|T}return new l(g,g[g.length-1]&-2147483648?-1:0)};function G(E,p){return E.add(k(p))}n.j=function(E){if(D(this)||D(E))return A;if(M(this))return M(E)?k(this).j(k(E)):k(k(this).j(E));if(M(E))return k(this.j(k(E)));if(0>this.l(P)&&0>E.l(P))return d(this.m()*E.m());for(var p=this.g.length+E.g.length,g=[],_=0;_<2*p;_++)g[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<E.g.length;y++){var T=this.i(_)>>>16,m=this.i(_)&65535,Vt=E.i(y)>>>16,Ve=E.i(y)&65535;g[2*_+2*y]+=m*Ve,H(g,2*_+2*y),g[2*_+2*y+1]+=T*Ve,H(g,2*_+2*y+1),g[2*_+2*y+1]+=m*Vt,H(g,2*_+2*y+1),g[2*_+2*y+2]+=T*Vt,H(g,2*_+2*y+2)}for(_=0;_<p;_++)g[_]=g[2*_+1]<<16|g[2*_];for(_=p;_<2*p;_++)g[_]=0;return new l(g,0)};function H(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function K(E,p){this.g=E,this.h=p}function ot(E,p){if(D(p))throw Error("division by zero");if(D(E))return new K(A,A);if(M(E))return p=ot(k(E),p),new K(k(p.g),k(p.h));if(M(p))return p=ot(E,k(p)),new K(k(p.g),p.h);if(30<E.g.length){if(M(E)||M(p))throw Error("slowDivide_ only works with positive integers.");for(var g=S,_=p;0>=_.l(E);)g=Xt(g),_=Xt(_);var y=gt(g,1),T=gt(_,1);for(_=gt(_,2),g=gt(g,2);!D(_);){var m=T.add(_);0>=m.l(E)&&(y=y.add(g),T=m),_=gt(_,1),g=gt(g,1)}return p=G(E,y.j(p)),new K(y,p)}for(y=A;0<=E.l(p);){for(g=Math.max(1,Math.floor(E.m()/p.m())),_=Math.ceil(Math.log(g)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=d(g),m=T.j(p);M(m)||0<m.l(E);)g-=_,T=d(g),m=T.j(p);D(T)&&(T=S),y=y.add(T),E=G(E,m)}return new K(y,E)}n.A=function(E){return ot(this,E).h},n.and=function(E){for(var p=Math.max(this.g.length,E.g.length),g=[],_=0;_<p;_++)g[_]=this.i(_)&E.i(_);return new l(g,this.h&E.h)},n.or=function(E){for(var p=Math.max(this.g.length,E.g.length),g=[],_=0;_<p;_++)g[_]=this.i(_)|E.i(_);return new l(g,this.h|E.h)},n.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),g=[],_=0;_<p;_++)g[_]=this.i(_)^E.i(_);return new l(g,this.h^E.h)};function Xt(E){for(var p=E.g.length+1,g=[],_=0;_<p;_++)g[_]=E.i(_)<<1|E.i(_-1)>>>31;return new l(g,E.h)}function gt(E,p){var g=p>>5;p%=32;for(var _=E.g.length-g,y=[],T=0;T<_;T++)y[T]=0<p?E.i(T+g)>>>p|E.i(T+g+1)<<32-p:E.i(T+g);return new l(y,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=d,l.fromString=I,Ri=l}).apply(typeof ho<"u"?ho:typeof self<"u"?self:typeof window<"u"?window:{});var On=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Oa,Qe,Ma,Un,ri,xa,La,Fa;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,c){return i==Array.prototype||i==Object.prototype||(i[a]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof On=="object"&&On];for(var a=0;a<i.length;++a){var c=i[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,a){if(a)t:{var c=r;i=i.split(".");for(var h=0;h<i.length-1;h++){var v=i[h];if(!(v in c))break t;c=c[v]}i=i[i.length-1],h=c[i],a=a(h),a!=h&&a!=null&&t(c,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var c=0,h=!1,v={next:function(){if(!h&&c<i.length){var w=c++;return{value:a(w,i[w]),done:!1}}return h=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function f(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function d(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function I(i,a,c){return i.call.apply(i.bind,arguments)}function A(i,a,c){if(!i)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,h),i.apply(a,v)}}return function(){return i.apply(a,arguments)}}function S(i,a,c){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:A,S.apply(null,arguments)}function P(i,a){var c=Array.prototype.slice.call(arguments,1);return function(){var h=c.slice();return h.push.apply(h,arguments),i.apply(this,h)}}function D(i,a){function c(){}c.prototype=a.prototype,i.aa=a.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(h,v,w){for(var C=Array(arguments.length-2),j=2;j<arguments.length;j++)C[j-2]=arguments[j];return a.prototype[v].apply(h,C)}}function M(i){const a=i.length;if(0<a){const c=Array(a);for(let h=0;h<a;h++)c[h]=i[h];return c}return[]}function k(i,a){for(let c=1;c<arguments.length;c++){const h=arguments[c];if(f(h)){const v=i.length||0,w=h.length||0;i.length=v+w;for(let C=0;C<w;C++)i[v+C]=h[C]}else i.push(h)}}class G{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function H(i){return/^[\s\xa0]*$/.test(i)}function K(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function ot(i){return ot[" "](i),i}ot[" "]=function(){};var Xt=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function gt(i,a,c){for(const h in i)a.call(c,i[h],h,i)}function E(i,a){for(const c in i)a.call(void 0,i[c],c,i)}function p(i){const a={};for(const c in i)a[c]=i[c];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(i,a){let c,h;for(let v=1;v<arguments.length;v++){h=arguments[v];for(c in h)i[c]=h[c];for(let w=0;w<g.length;w++)c=g[w],Object.prototype.hasOwnProperty.call(h,c)&&(i[c]=h[c])}}function y(i){var a=1;i=i.split(":");const c=[];for(;0<a&&i.length;)c.push(i.shift()),a--;return i.length&&c.push(i.join(":")),c}function T(i){u.setTimeout(()=>{throw i},0)}function m(){var i=_r;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class Vt{constructor(){this.h=this.g=null}add(a,c){const h=Ve.get();h.set(a,c),this.h?this.h.next=h:this.g=h,this.h=h}}var Ve=new G(()=>new zl,i=>i.reset());class zl{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let De,ke=!1,_r=new Vt,Gi=()=>{const i=u.Promise.resolve(void 0);De=()=>{i.then(Hl)}};var Hl=()=>{for(var i;i=m();){try{i.h.call(i.g)}catch(c){T(c)}var a=Ve;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}ke=!1};function Lt(){this.s=this.s,this.C=this.C}Lt.prototype.s=!1,Lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function at(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var Gl=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};u.addEventListener("test",c,a),u.removeEventListener("test",c,a)}catch{}return i}();function Ne(i,a){if(at.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,h=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(Xt){t:{try{ot(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else c=="mouseover"?a=i.fromElement:c=="mouseout"&&(a=i.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Kl[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Ne.aa.h.call(this)}}D(Ne,at);var Kl={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var mn="closure_listenable_"+(1e6*Math.random()|0),Wl=0;function Ql(i,a,c,h,v){this.listener=i,this.proxy=null,this.src=a,this.type=c,this.capture=!!h,this.ha=v,this.key=++Wl,this.da=this.fa=!1}function gn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function _n(i){this.src=i,this.g={},this.h=0}_n.prototype.add=function(i,a,c,h,v){var w=i.toString();i=this.g[w],i||(i=this.g[w]=[],this.h++);var C=Er(i,a,h,v);return-1<C?(a=i[C],c||(a.fa=!1)):(a=new Ql(a,this.src,w,!!h,v),a.fa=c,i.push(a)),a};function yr(i,a){var c=a.type;if(c in i.g){var h=i.g[c],v=Array.prototype.indexOf.call(h,a,void 0),w;(w=0<=v)&&Array.prototype.splice.call(h,v,1),w&&(gn(a),i.g[c].length==0&&(delete i.g[c],i.h--))}}function Er(i,a,c,h){for(var v=0;v<i.length;++v){var w=i[v];if(!w.da&&w.listener==a&&w.capture==!!c&&w.ha==h)return v}return-1}var vr="closure_lm_"+(1e6*Math.random()|0),Tr={};function Ki(i,a,c,h,v){if(Array.isArray(a)){for(var w=0;w<a.length;w++)Ki(i,a[w],c,h,v);return null}return c=Xi(c),i&&i[mn]?i.K(a,c,d(h)?!!h.capture:!1,v):Xl(i,a,c,!1,h,v)}function Xl(i,a,c,h,v,w){if(!a)throw Error("Invalid event type");var C=d(v)?!!v.capture:!!v,j=wr(i);if(j||(i[vr]=j=new _n(i)),c=j.add(a,c,h,C,w),c.proxy)return c;if(h=Yl(),c.proxy=h,h.src=i,h.listener=c,i.addEventListener)Gl||(v=C),v===void 0&&(v=!1),i.addEventListener(a.toString(),h,v);else if(i.attachEvent)i.attachEvent(Qi(a.toString()),h);else if(i.addListener&&i.removeListener)i.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Yl(){function i(c){return a.call(i.src,i.listener,c)}const a=Jl;return i}function Wi(i,a,c,h,v){if(Array.isArray(a))for(var w=0;w<a.length;w++)Wi(i,a[w],c,h,v);else h=d(h)?!!h.capture:!!h,c=Xi(c),i&&i[mn]?(i=i.i,a=String(a).toString(),a in i.g&&(w=i.g[a],c=Er(w,c,h,v),-1<c&&(gn(w[c]),Array.prototype.splice.call(w,c,1),w.length==0&&(delete i.g[a],i.h--)))):i&&(i=wr(i))&&(a=i.g[a.toString()],i=-1,a&&(i=Er(a,c,h,v)),(c=-1<i?a[i]:null)&&Ir(c))}function Ir(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[mn])yr(a.i,i);else{var c=i.type,h=i.proxy;a.removeEventListener?a.removeEventListener(c,h,i.capture):a.detachEvent?a.detachEvent(Qi(c),h):a.addListener&&a.removeListener&&a.removeListener(h),(c=wr(a))?(yr(c,i),c.h==0&&(c.src=null,a[vr]=null)):gn(i)}}}function Qi(i){return i in Tr?Tr[i]:Tr[i]="on"+i}function Jl(i,a){if(i.da)i=!0;else{a=new Ne(a,this);var c=i.listener,h=i.ha||i.src;i.fa&&Ir(i),i=c.call(h,a)}return i}function wr(i){return i=i[vr],i instanceof _n?i:null}var Ar="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xi(i){return typeof i=="function"?i:(i[Ar]||(i[Ar]=function(a){return i.handleEvent(a)}),i[Ar])}function lt(){Lt.call(this),this.i=new _n(this),this.M=this,this.F=null}D(lt,Lt),lt.prototype[mn]=!0,lt.prototype.removeEventListener=function(i,a,c,h){Wi(this,i,a,c,h)};function pt(i,a){var c,h=i.F;if(h)for(c=[];h;h=h.F)c.push(h);if(i=i.M,h=a.type||a,typeof a=="string")a=new at(a,i);else if(a instanceof at)a.target=a.target||i;else{var v=a;a=new at(h,i),_(a,v)}if(v=!0,c)for(var w=c.length-1;0<=w;w--){var C=a.g=c[w];v=yn(C,h,!0,a)&&v}if(C=a.g=i,v=yn(C,h,!0,a)&&v,v=yn(C,h,!1,a)&&v,c)for(w=0;w<c.length;w++)C=a.g=c[w],v=yn(C,h,!1,a)&&v}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var c=i.g[a],h=0;h<c.length;h++)gn(c[h]);delete i.g[a],i.h--}}this.F=null},lt.prototype.K=function(i,a,c,h){return this.i.add(String(i),a,!1,c,h)},lt.prototype.L=function(i,a,c,h){return this.i.add(String(i),a,!0,c,h)};function yn(i,a,c,h){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,w=0;w<a.length;++w){var C=a[w];if(C&&!C.da&&C.capture==c){var j=C.listener,et=C.ha||C.src;C.fa&&yr(i.i,C),v=j.call(et,h)!==!1&&v}}return v&&!h.defaultPrevented}function Yi(i,a,c){if(typeof i=="function")c&&(i=S(i,c));else if(i&&typeof i.handleEvent=="function")i=S(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:u.setTimeout(i,a||0)}function Ji(i){i.g=Yi(()=>{i.g=null,i.i&&(i.i=!1,Ji(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class Zl extends Lt{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Ji(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oe(i){Lt.call(this),this.h=i,this.g={}}D(Oe,Lt);var Zi=[];function ts(i){gt(i.g,function(a,c){this.g.hasOwnProperty(c)&&Ir(a)},i),i.g={}}Oe.prototype.N=function(){Oe.aa.N.call(this),ts(this)},Oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Rr=u.JSON.stringify,tc=u.JSON.parse,ec=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function br(){}br.prototype.h=null;function es(i){return i.h||(i.h=i.i())}function ns(){}var Me={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sr(){at.call(this,"d")}D(Sr,at);function Cr(){at.call(this,"c")}D(Cr,at);var Yt={},rs=null;function En(){return rs=rs||new lt}Yt.La="serverreachability";function is(i){at.call(this,Yt.La,i)}D(is,at);function xe(i){const a=En();pt(a,new is(a))}Yt.STAT_EVENT="statevent";function ss(i,a){at.call(this,Yt.STAT_EVENT,i),this.stat=a}D(ss,at);function mt(i){const a=En();pt(a,new ss(a,i))}Yt.Ma="timingevent";function os(i,a){at.call(this,Yt.Ma,i),this.size=a}D(os,at);function Le(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},a)}function Fe(){this.g=!0}Fe.prototype.xa=function(){this.g=!1};function nc(i,a,c,h,v,w){i.info(function(){if(i.g)if(w)for(var C="",j=w.split("&"),et=0;et<j.length;et++){var B=j[et].split("=");if(1<B.length){var ct=B[0];B=B[1];var ut=ct.split("_");C=2<=ut.length&&ut[1]=="type"?C+(ct+"="+B+"&"):C+(ct+"=redacted&")}}else C=null;else C=w;return"XMLHTTP REQ ("+h+") [attempt "+v+"]: "+a+`
`+c+`
`+C})}function rc(i,a,c,h,v,w,C){i.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+v+"]: "+a+`
`+c+`
`+w+" "+C})}function me(i,a,c,h){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+sc(i,c)+(h?" "+h:"")})}function ic(i,a){i.info(function(){return"TIMEOUT: "+a})}Fe.prototype.info=function(){};function sc(i,a){if(!i.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var h=c[i];if(!(2>h.length)){var v=h[1];if(Array.isArray(v)&&!(1>v.length)){var w=v[0];if(w!="noop"&&w!="stop"&&w!="close")for(var C=1;C<v.length;C++)v[C]=""}}}}return Rr(c)}catch{return a}}var vn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},as={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pr;function Tn(){}D(Tn,br),Tn.prototype.g=function(){return new XMLHttpRequest},Tn.prototype.i=function(){return{}},Pr=new Tn;function Ft(i,a,c,h){this.j=i,this.i=a,this.l=c,this.R=h||1,this.U=new Oe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ls}function ls(){this.i=null,this.g="",this.h=!1}var cs={},Vr={};function Dr(i,a,c){i.L=1,i.v=Rn(Dt(a)),i.m=c,i.P=!0,us(i,null)}function us(i,a){i.F=Date.now(),In(i),i.A=Dt(i.v);var c=i.A,h=i.R;Array.isArray(h)||(h=[String(h)]),As(c.i,"t",h),i.C=0,c=i.j.J,i.h=new ls,i.g=$s(i.j,c?a:null,!i.m),0<i.O&&(i.M=new Zl(S(i.Y,i,i.g),i.O)),a=i.U,c=i.g,h=i.ca;var v="readystatechange";Array.isArray(v)||(v&&(Zi[0]=v.toString()),v=Zi);for(var w=0;w<v.length;w++){var C=Ki(c,v[w],h||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),xe(),nc(i.i,i.u,i.A,i.l,i.R,i.m)}Ft.prototype.ca=function(i){i=i.target;const a=this.M;a&&kt(i)==3?a.j():this.Y(i)},Ft.prototype.Y=function(i){try{if(i==this.g)t:{const ut=kt(this.g);var a=this.g.Ba();const ye=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||Ds(this.g)))){this.J||ut!=4||a==7||(a==8||0>=ye?xe(3):xe(2)),kr(this);var c=this.g.Z();this.X=c;e:if(hs(this)){var h=Ds(this.g);i="";var v=h.length,w=kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jt(this),Ue(this);var C="";break e}this.h.i=new u.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,i+=this.h.i.decode(h[a],{stream:!(w&&a==v-1)});h.length=0,this.h.g+=i,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=c==200,rc(this.i,this.u,this.A,this.l,this.R,ut,c),this.o){if(this.T&&!this.K){e:{if(this.g){var j,et=this.g;if((j=et.g?et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(j)){var B=j;break e}}B=null}if(c=B)me(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nr(this,c);else{this.o=!1,this.s=3,mt(12),Jt(this),Ue(this);break t}}if(this.P){c=!0;let It;for(;!this.J&&this.C<C.length;)if(It=oc(this,C),It==Vr){ut==4&&(this.s=4,mt(14),c=!1),me(this.i,this.l,null,"[Incomplete Response]");break}else if(It==cs){this.s=4,mt(15),me(this.i,this.l,C,"[Invalid Chunk]"),c=!1;break}else me(this.i,this.l,It,null),Nr(this,It);if(hs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||C.length!=0||this.h.h||(this.s=1,mt(16),c=!1),this.o=this.o&&c,!c)me(this.i,this.l,C,"[Invalid Chunked Response]"),Jt(this),Ue(this);else if(0<C.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Ur(ct),ct.M=!0,mt(11))}}else me(this.i,this.l,C,null),Nr(this,C);ut==4&&Jt(this),this.o&&!this.J&&(ut==4?Fs(this.j,this):(this.o=!1,In(this)))}else wc(this.g),c==400&&0<C.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),Jt(this),Ue(this)}}}catch{}finally{}};function hs(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function oc(i,a){var c=i.C,h=a.indexOf(`
`,c);return h==-1?Vr:(c=Number(a.substring(c,h)),isNaN(c)?cs:(h+=1,h+c>a.length?Vr:(a=a.slice(h,h+c),i.C=h+c,a)))}Ft.prototype.cancel=function(){this.J=!0,Jt(this)};function In(i){i.S=Date.now()+i.I,fs(i,i.I)}function fs(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Le(S(i.ba,i),a)}function kr(i){i.B&&(u.clearTimeout(i.B),i.B=null)}Ft.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(ic(this.i,this.A),this.L!=2&&(xe(),mt(17)),Jt(this),this.s=2,Ue(this)):fs(this,this.S-i)};function Ue(i){i.j.G==0||i.J||Fs(i.j,i)}function Jt(i){kr(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,ts(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function Nr(i,a){try{var c=i.j;if(c.G!=0&&(c.g==i||Or(c.h,i))){if(!i.K&&Or(c.h,i)&&c.G==3){try{var h=c.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var v=h;if(v[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)Dn(c),Pn(c);else break t;Fr(c),mt(18)}}else c.za=v[1],0<c.za-c.T&&37500>v[2]&&c.F&&c.v==0&&!c.C&&(c.C=Le(S(c.Za,c),6e3));if(1>=ms(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else te(c,11)}else if((i.K||c.g==i)&&Dn(c),!H(a))for(v=c.Da.g.parse(a),a=0;a<v.length;a++){let B=v[a];if(c.T=B[0],B=B[1],c.G==2)if(B[0]=="c"){c.K=B[1],c.ia=B[2];const ct=B[3];ct!=null&&(c.la=ct,c.j.info("VER="+c.la));const ut=B[4];ut!=null&&(c.Aa=ut,c.j.info("SVER="+c.Aa));const ye=B[5];ye!=null&&typeof ye=="number"&&0<ye&&(h=1.5*ye,c.L=h,c.j.info("backChannelRequestTimeoutMs_="+h)),h=c;const It=i.g;if(It){const Nn=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Nn){var w=h.h;w.g||Nn.indexOf("spdy")==-1&&Nn.indexOf("quic")==-1&&Nn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Mr(w,w.h),w.h=null))}if(h.D){const Br=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;Br&&(h.ya=Br,q(h.I,h.D,Br))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),h=c;var C=i;if(h.qa=js(h,h.J?h.ia:null,h.W),C.K){gs(h.h,C);var j=C,et=h.L;et&&(j.I=et),j.B&&(kr(j),In(j)),h.g=C}else xs(h);0<c.i.length&&Vn(c)}else B[0]!="stop"&&B[0]!="close"||te(c,7);else c.G==3&&(B[0]=="stop"||B[0]=="close"?B[0]=="stop"?te(c,7):Lr(c):B[0]!="noop"&&c.l&&c.l.ta(B),c.v=0)}}xe(4)}catch{}}var ac=class{constructor(i,a){this.g=i,this.map=a}};function ds(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ps(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function ms(i){return i.h?1:i.g?i.g.size:0}function Or(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function Mr(i,a){i.g?i.g.add(a):i.h=a}function gs(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}ds.prototype.cancel=function(){if(this.i=_s(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function _s(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const c of i.g.values())a=a.concat(c.D);return a}return M(i.i)}function lc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(f(i)){for(var a=[],c=i.length,h=0;h<c;h++)a.push(i[h]);return a}a=[],c=0;for(h in i)a[c++]=i[h];return a}function cc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(f(i)||typeof i=="string"){var a=[];i=i.length;for(var c=0;c<i;c++)a.push(c);return a}a=[],c=0;for(const h in i)a[c++]=h;return a}}}function ys(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(f(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var c=cc(i),h=lc(i),v=h.length,w=0;w<v;w++)a.call(void 0,h[w],c&&c[w],i)}var Es=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uc(i,a){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var h=i[c].indexOf("="),v=null;if(0<=h){var w=i[c].substring(0,h);v=i[c].substring(h+1)}else w=i[c];a(w,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Zt(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Zt){this.h=i.h,wn(this,i.j),this.o=i.o,this.g=i.g,An(this,i.s),this.l=i.l;var a=i.i,c=new $e;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),vs(this,c),this.m=i.m}else i&&(a=String(i).match(Es))?(this.h=!1,wn(this,a[1]||"",!0),this.o=Be(a[2]||""),this.g=Be(a[3]||"",!0),An(this,a[4]),this.l=Be(a[5]||"",!0),vs(this,a[6]||"",!0),this.m=Be(a[7]||"")):(this.h=!1,this.i=new $e(null,this.h))}Zt.prototype.toString=function(){var i=[],a=this.j;a&&i.push(je(a,Ts,!0),":");var c=this.g;return(c||a=="file")&&(i.push("//"),(a=this.o)&&i.push(je(a,Ts,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(je(c,c.charAt(0)=="/"?dc:fc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",je(c,mc)),i.join("")};function Dt(i){return new Zt(i)}function wn(i,a,c){i.j=c?Be(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function An(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function vs(i,a,c){a instanceof $e?(i.i=a,gc(i.i,i.h)):(c||(a=je(a,pc)),i.i=new $e(a,i.h))}function q(i,a,c){i.i.set(a,c)}function Rn(i){return q(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Be(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function je(i,a,c){return typeof i=="string"?(i=encodeURI(i).replace(a,hc),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function hc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Ts=/[#\/\?@]/g,fc=/[#\?:]/g,dc=/[#\?]/g,pc=/[#\?@]/g,mc=/#/g;function $e(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function Ut(i){i.g||(i.g=new Map,i.h=0,i.i&&uc(i.i,function(a,c){i.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}n=$e.prototype,n.add=function(i,a){Ut(this),this.i=null,i=ge(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(a),this.h+=1,this};function Is(i,a){Ut(i),a=ge(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function ws(i,a){return Ut(i),a=ge(i,a),i.g.has(a)}n.forEach=function(i,a){Ut(this),this.g.forEach(function(c,h){c.forEach(function(v){i.call(a,v,h,this)},this)},this)},n.na=function(){Ut(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let h=0;h<a.length;h++){const v=i[h];for(let w=0;w<v.length;w++)c.push(a[h])}return c},n.V=function(i){Ut(this);let a=[];if(typeof i=="string")ws(this,i)&&(a=a.concat(this.g.get(ge(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)a=a.concat(i[c])}return a},n.set=function(i,a){return Ut(this),this.i=null,i=ge(this,i),ws(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},n.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function As(i,a,c){Is(i,a),0<c.length&&(i.i=null,i.g.set(ge(i,a),M(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var h=a[c];const w=encodeURIComponent(String(h)),C=this.V(h);for(h=0;h<C.length;h++){var v=w;C[h]!==""&&(v+="="+encodeURIComponent(String(C[h]))),i.push(v)}}return this.i=i.join("&")};function ge(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function gc(i,a){a&&!i.j&&(Ut(i),i.i=null,i.g.forEach(function(c,h){var v=h.toLowerCase();h!=v&&(Is(this,h),As(this,v,c))},i)),i.j=a}function _c(i,a){const c=new Fe;if(u.Image){const h=new Image;h.onload=P(Bt,c,"TestLoadImage: loaded",!0,a,h),h.onerror=P(Bt,c,"TestLoadImage: error",!1,a,h),h.onabort=P(Bt,c,"TestLoadImage: abort",!1,a,h),h.ontimeout=P(Bt,c,"TestLoadImage: timeout",!1,a,h),u.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=i}else a(!1)}function yc(i,a){const c=new Fe,h=new AbortController,v=setTimeout(()=>{h.abort(),Bt(c,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:h.signal}).then(w=>{clearTimeout(v),w.ok?Bt(c,"TestPingServer: ok",!0,a):Bt(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),Bt(c,"TestPingServer: error",!1,a)})}function Bt(i,a,c,h,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),h(c)}catch{}}function Ec(){this.g=new ec}function vc(i,a,c){const h=c||"";try{ys(i,function(v,w){let C=v;d(v)&&(C=Rr(v)),a.push(h+w+"="+encodeURIComponent(C))})}catch(v){throw a.push(h+"type="+encodeURIComponent("_badmap")),v}}function bn(i){this.l=i.Ub||null,this.j=i.eb||!1}D(bn,br),bn.prototype.g=function(){return new Sn(this.l,this.j)},bn.prototype.i=function(i){return function(){return i}}({});function Sn(i,a){lt.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Sn,lt),n=Sn.prototype,n.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,ze(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||u).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qe(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,ze(this)),this.g&&(this.readyState=3,ze(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rs(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rs(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?qe(this):ze(this),this.readyState==3&&Rs(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,qe(this))},n.Qa=function(i){this.g&&(this.response=i,qe(this))},n.ga=function(){this.g&&qe(this)};function qe(i){i.readyState=4,i.l=null,i.j=null,i.v=null,ze(i)}n.setRequestHeader=function(i,a){this.u.append(i,a)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=a.next();return i.join(`\r
`)};function ze(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Sn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function bs(i){let a="";return gt(i,function(c,h){a+=h,a+=":",a+=c,a+=`\r
`}),a}function xr(i,a,c){t:{for(h in c){var h=!1;break t}h=!0}h||(c=bs(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):q(i,a,c))}function W(i){lt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(W,lt);var Tc=/^https?$/i,Ic=["POST","PUT"];n=W.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,a,c,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pr.g(),this.v=this.o?es(this.o):es(Pr),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(w){Ss(this,w);return}if(i=c||"",c=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var v in h)c.set(v,h[v]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const w of h.keys())c.set(w,h.get(w));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(c.keys()).find(w=>w.toLowerCase()=="content-type"),v=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Ic,a,void 0))||h||v||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,C]of c)this.g.setRequestHeader(w,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Vs(this),this.u=!0,this.g.send(i),this.u=!1}catch(w){Ss(this,w)}};function Ss(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,Cs(i),Cn(i)}function Cs(i){i.A||(i.A=!0,pt(i,"complete"),pt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,pt(this,"complete"),pt(this,"abort"),Cn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cn(this,!0)),W.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ps(this):this.bb())},n.bb=function(){Ps(this)};function Ps(i){if(i.h&&typeof l<"u"&&(!i.v[1]||kt(i)!=4||i.Z()!=2)){if(i.u&&kt(i)==4)Yi(i.Ea,0,i);else if(pt(i,"readystatechange"),kt(i)==4){i.h=!1;try{const C=i.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var c;if(!(c=a)){var h;if(h=C===0){var v=String(i.D).match(Es)[1]||null;!v&&u.self&&u.self.location&&(v=u.self.location.protocol.slice(0,-1)),h=!Tc.test(v?v.toLowerCase():"")}c=h}if(c)pt(i,"complete"),pt(i,"success");else{i.m=6;try{var w=2<kt(i)?i.g.statusText:""}catch{w=""}i.l=w+" ["+i.Z()+"]",Cs(i)}}finally{Cn(i)}}}}function Cn(i,a){if(i.g){Vs(i);const c=i.g,h=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||pt(i,"ready");try{c.onreadystatechange=h}catch{}}}function Vs(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function kt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<kt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),tc(a)}};function Ds(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function wc(i){const a={};i=(i.g&&2<=kt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<i.length;h++){if(H(i[h]))continue;var c=y(i[h]);const v=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const w=a[v]||[];a[v]=w,w.push(c)}E(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function He(i,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||a}function ks(i){this.Aa=0,this.i=[],this.j=new Fe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=He("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=He("baseRetryDelayMs",5e3,i),this.cb=He("retryDelaySeedMs",1e4,i),this.Wa=He("forwardChannelMaxRetries",2,i),this.wa=He("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new ds(i&&i.concurrentRequestLimit),this.Da=new Ec,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ks.prototype,n.la=8,n.G=1,n.connect=function(i,a,c,h){mt(0),this.W=i,this.H=a||{},c&&h!==void 0&&(this.H.OSID=c,this.H.OAID=h),this.F=this.X,this.I=js(this,null,this.W),Vn(this)};function Lr(i){if(Ns(i),i.G==3){var a=i.U++,c=Dt(i.I);if(q(c,"SID",i.K),q(c,"RID",a),q(c,"TYPE","terminate"),Ge(i,c),a=new Ft(i,i.j,a),a.L=2,a.v=Rn(Dt(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=a.v,c=!0),c||(a.g=$s(a.j,null),a.g.ea(a.v)),a.F=Date.now(),In(a)}Bs(i)}function Pn(i){i.g&&(Ur(i),i.g.cancel(),i.g=null)}function Ns(i){Pn(i),i.u&&(u.clearTimeout(i.u),i.u=null),Dn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function Vn(i){if(!ps(i.h)&&!i.s){i.s=!0;var a=i.Ga;De||Gi(),ke||(De(),ke=!0),_r.add(a,i),i.B=0}}function Ac(i,a){return ms(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Le(S(i.Ga,i,a),Us(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const v=new Ft(this,this.j,i);let w=this.o;if(this.S&&(w?(w=p(w),_(w,this.S)):w=this.S),this.m!==null||this.O||(v.H=w,w=null),this.P)t:{for(var a=0,c=0;c<this.i.length;c++){e:{var h=this.i[c];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=c;break t}if(a===4096||c===this.i.length-1){a=c+1;break t}}a=1e3}else a=1e3;a=Ms(this,v,a),c=Dt(this.I),q(c,"RID",i),q(c,"CVER",22),this.D&&q(c,"X-HTTP-Session-Id",this.D),Ge(this,c),w&&(this.O?a="headers="+encodeURIComponent(String(bs(w)))+"&"+a:this.m&&xr(c,this.m,w)),Mr(this.h,v),this.Ua&&q(c,"TYPE","init"),this.P?(q(c,"$req",a),q(c,"SID","null"),v.T=!0,Dr(v,c,null)):Dr(v,c,a),this.G=2}}else this.G==3&&(i?Os(this,i):this.i.length==0||ps(this.h)||Os(this))};function Os(i,a){var c;a?c=a.l:c=i.U++;const h=Dt(i.I);q(h,"SID",i.K),q(h,"RID",c),q(h,"AID",i.T),Ge(i,h),i.m&&i.o&&xr(h,i.m,i.o),c=new Ft(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),a&&(i.i=a.D.concat(i.i)),a=Ms(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Mr(i.h,c),Dr(c,h,a)}function Ge(i,a){i.H&&gt(i.H,function(c,h){q(a,h,c)}),i.l&&ys({},function(c,h){q(a,h,c)})}function Ms(i,a,c){c=Math.min(i.i.length,c);var h=i.l?S(i.l.Na,i.l,i):null;t:{var v=i.i;let w=-1;for(;;){const C=["count="+c];w==-1?0<c?(w=v[0].g,C.push("ofs="+w)):w=0:C.push("ofs="+w);let j=!0;for(let et=0;et<c;et++){let B=v[et].g;const ct=v[et].map;if(B-=w,0>B)w=Math.max(0,v[et].g-100),j=!1;else try{vc(ct,C,"req"+B+"_")}catch{h&&h(ct)}}if(j){h=C.join("&");break t}}}return i=i.i.splice(0,c),a.D=i,h}function xs(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;De||Gi(),ke||(De(),ke=!0),_r.add(a,i),i.v=0}}function Fr(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Le(S(i.Fa,i),Us(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Ls(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Le(S(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),Pn(this),Ls(this))};function Ur(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function Ls(i){i.g=new Ft(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=Dt(i.qa);q(a,"RID","rpc"),q(a,"SID",i.K),q(a,"AID",i.T),q(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&q(a,"TO",i.ja),q(a,"TYPE","xmlhttp"),Ge(i,a),i.m&&i.o&&xr(a,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=Rn(Dt(a)),c.m=null,c.P=!0,us(c,i)}n.Za=function(){this.C!=null&&(this.C=null,Pn(this),Fr(this),mt(19))};function Dn(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function Fs(i,a){var c=null;if(i.g==a){Dn(i),Ur(i),i.g=null;var h=2}else if(Or(i.h,a))c=a.D,gs(i.h,a),h=1;else return;if(i.G!=0){if(a.o)if(h==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var v=i.B;h=En(),pt(h,new os(h,c)),Vn(i)}else xs(i);else if(v=a.s,v==3||v==0&&0<a.X||!(h==1&&Ac(i,a)||h==2&&Fr(i)))switch(c&&0<c.length&&(a=i.h,a.i=a.i.concat(c)),v){case 1:te(i,5);break;case 4:te(i,10);break;case 3:te(i,6);break;default:te(i,2)}}}function Us(i,a){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*a}function te(i,a){if(i.j.info("Error code "+a),a==2){var c=S(i.fb,i),h=i.Xa;const v=!h;h=new Zt(h||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||wn(h,"https"),Rn(h),v?_c(h.toString(),c):yc(h.toString(),c)}else mt(2);i.G=0,i.l&&i.l.sa(a),Bs(i),Ns(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function Bs(i){if(i.G=0,i.ka=[],i.l){const a=_s(i.h);(a.length!=0||i.i.length!=0)&&(k(i.ka,a),k(i.ka,i.i),i.h.i.length=0,M(i.i),i.i.length=0),i.l.ra()}}function js(i,a,c){var h=c instanceof Zt?Dt(c):new Zt(c);if(h.g!="")a&&(h.g=a+"."+h.g),An(h,h.s);else{var v=u.location;h=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var w=new Zt(null);h&&wn(w,h),a&&(w.g=a),v&&An(w,v),c&&(w.l=c),h=w}return c=i.D,a=i.ya,c&&a&&q(h,c,a),q(h,"VER",i.la),Ge(i,h),h}function $s(i,a,c){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new W(new bn({eb:c})):new W(i.pa),a.Ha(i.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function qs(){}n=qs.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function kn(){}kn.prototype.g=function(i,a){return new vt(i,a)};function vt(i,a){lt.call(this),this.g=new ks(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!H(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!H(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new _e(this)}D(vt,lt),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Lr(this.g)},vt.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=Rr(i),i=c);a.i.push(new ac(a.Ya++,i)),a.G==3&&Vn(a)},vt.prototype.N=function(){this.g.l=null,delete this.j,Lr(this.g),delete this.g,vt.aa.N.call(this)};function zs(i){Sr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const c in a){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}D(zs,Sr);function Hs(){Cr.call(this),this.status=1}D(Hs,Cr);function _e(i){this.g=i}D(_e,qs),_e.prototype.ua=function(){pt(this.g,"a")},_e.prototype.ta=function(i){pt(this.g,new zs(i))},_e.prototype.sa=function(i){pt(this.g,new Hs)},_e.prototype.ra=function(){pt(this.g,"b")},kn.prototype.createWebChannel=kn.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Fa=function(){return new kn},La=function(){return En()},xa=Yt,ri={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vn.NO_ERROR=0,vn.TIMEOUT=8,vn.HTTP_ERROR=6,Un=vn,as.COMPLETE="complete",Ma=as,ns.EventType=Me,Me.OPEN="a",Me.CLOSE="b",Me.ERROR="c",Me.MESSAGE="d",lt.prototype.listen=lt.prototype.K,Qe=ns,W.prototype.listenOnce=W.prototype.L,W.prototype.getLastError=W.prototype.Ka,W.prototype.getLastErrorCode=W.prototype.Ba,W.prototype.getStatus=W.prototype.Z,W.prototype.getResponseJson=W.prototype.Oa,W.prototype.getResponseText=W.prototype.oa,W.prototype.send=W.prototype.ea,W.prototype.setWithCredentials=W.prototype.Ha,Oa=W}).apply(typeof On<"u"?On:typeof self<"u"?self:typeof window<"u"?window:{});const fo="@firebase/firestore",po="4.7.10";/**
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
 */class ft{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
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
 */let Ce="11.5.0";/**
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
 */const ce=new yi("@firebase/firestore");function Ee(){return ce.logLevel}function V(n,...t){if(ce.logLevel<=F.DEBUG){const e=t.map(bi);ce.debug(`Firestore (${Ce}): ${n}`,...e)}}function ue(n,...t){if(ce.logLevel<=F.ERROR){const e=t.map(bi);ce.error(`Firestore (${Ce}): ${n}`,...e)}}function lr(n,...t){if(ce.logLevel<=F.WARN){const e=t.map(bi);ce.warn(`Firestore (${Ce}): ${n}`,...e)}}function bi(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function x(n="Unexpected state"){const t=`FIRESTORE (${Ce}) INTERNAL ASSERTION FAILED: `+n;throw ue(t),new Error(t)}function X(n,t){n||x()}function $(n,t){return n}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Qt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ie{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Ua{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Sf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ft.UNAUTHENTICATED))}shutdown(){}}class Cf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Pf{constructor(t){this.t=t,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){X(this.o===void 0);let r=this.i;const s=f=>this.i!==r?(r=this.i,e(f)):Promise.resolve();let o=new ie;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ie,t.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},u=f=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(f=>u(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?u(f):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ie)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string"),new Ua(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string"),new ft(t)}}class Vf{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Df{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Vf(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kf{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Hu(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){X(this.o===void 0);const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,V("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new mo(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(X(typeof e.token=="string"),this.R=e.token,new mo(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Nf(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */function Of(){return new TextEncoder}/**
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
 */class Ba{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Nf(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function U(n,t){return n<t?-1:n>t?1:0}function ii(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return U(r,s);{const o=Of(),l=Mf(o.encode(go(n,e)),o.encode(go(t,e)));return l!==0?l:U(r,s)}}e+=r>65535?2:1}return U(n.length,t.length)}function go(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function Mf(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return U(n[e],t[e]);return U(n.length,t.length)}function we(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */const _o=-62135596800,yo=1e6;class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(t){return tt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*yo);return new tt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<_o)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/yo}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-_o;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class z{static fromTimestamp(t){return new z(t)}static min(){return new z(new tt(0,0))}static max(){return new z(new tt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Eo="__name__";class bt{constructor(t,e,r){e===void 0?e=0:e>t.length&&x(),r===void 0?r=t.length-e:r>t.length-e&&x(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return bt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof bt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=bt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const r=bt.isNumericId(t),s=bt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?bt.extractNumericId(t).compare(bt.extractNumericId(e)):ii(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Ri.fromString(t.substring(4,t.length-2))}}class Q extends bt{construct(t,e,r){return new Q(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new Q(e)}static emptyPath(){return new Q([])}}const xf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends bt{construct(t,e,r){return new it(t,e,r)}static isValidIdentifier(t){return xf.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Eo}static keyField(){return new it([Eo])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new N(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let l=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new N(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new N(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=f,s+=2}else u==="`"?(l=!l,s++):u!=="."||l?(r+=u,s++):(o(),s++)}if(o(),l)throw new N(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(e)}static emptyPath(){return new it([])}}/**
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
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Q.fromString(t))}static fromName(t){return new O(Q.fromString(t).popFirst(5))}static empty(){return new O(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Q(t.slice()))}}/**
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
 */const rn=-1;function Lf(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new tt(e+1,0):new tt(e,r));return new Ht(s,O.empty(),t)}function Ff(n){return new Ht(n.readTime,n.key,rn)}class Ht{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Ht(z.min(),O.empty(),rn)}static max(){return new Ht(z.max(),O.empty(),rn)}}function Uf(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:U(n.largestBatchId,t.largestBatchId))}/**
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
 */const Bf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Si(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==Bf)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,r)=>{e(t)})}static reject(t){return new R((e,r)=>{r(t)})}static waitFor(t){return new R((e,r)=>{let s=0,o=0,l=!1;t.forEach(u=>{++s,u.next(()=>{++o,l&&o===s&&e()},f=>r(f))}),l=!0,o===s&&e()})}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next(s=>s?R.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new R((r,s)=>{const o=t.length,l=new Array(o);let u=0;for(let f=0;f<o;f++){const d=f;e(t[d]).next(I=>{l[d]=I,++u,u===o&&r(l)},I=>s(I))}})}static doWhile(t,e){return new R((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function $f(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function un(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ci{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Ci.ae=-1;/**
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
 */const Pi=-1;function Vi(n){return n==null}function Kn(n){return n===0&&1/n==-1/0}function qf(n){return typeof n=="number"&&Number.isInteger(n)&&!Kn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const ja="";function zf(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=vo(t)),t=Hf(n.get(e),t);return vo(t)}function Hf(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case ja:e+="";break;default:e+=o}}return e}function vo(n){return n+ja+""}/**
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
 */function To(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Pe(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function $a(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Et{constructor(t,e){this.comparator=t,this.root=e||nt.EMPTY}insert(t,e){return new Et(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(t){return new Et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,nt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Mn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Mn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Mn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Mn(this.root,t,this.comparator,!0)}}class Mn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class nt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??nt.RED,this.left=s??nt.EMPTY,this.right=o??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new nt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return nt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const t=this.left.check();if(t!==this.right.check())throw x();return t+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(t,e,r,s,o){return this}insert(t,e,r){return new nt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(t){this.comparator=t,this.data=new Et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Io(this.data.getIterator())}getIteratorFrom(t){return new Io(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof st)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}}class Io{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rt{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new st(it.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return we(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Gf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ct{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Gf("Invalid base64 string: "+o):o}}(t);return new Ct(e)}static fromUint8Array(t){const e=function(s){let o="";for(let l=0;l<s.length;++l)o+=String.fromCharCode(s[l]);return o}(t);return new Ct(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const Kf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function he(n){if(X(!!n),typeof n=="string"){let t=0;const e=Kf.exec(n);if(X(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ae(n){return typeof n=="string"?Ct.fromBase64String(n):Ct.fromUint8Array(n)}/**
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
 */const qa="server_timestamp",za="__type__",Ha="__previous_value__",Ga="__local_write_time__";function Di(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[za])===null||e===void 0?void 0:e.stringValue)===qa}function ki(n){const t=n.mapValue.fields[Ha];return Di(t)?ki(t):t}function Wn(n){const t=he(n.mapValue.fields[Ga].timestampValue);return new tt(t.seconds,t.nanos)}/**
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
 */class Wf{constructor(t,e,r,s,o,l,u,f,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=u,this.longPollingOptions=f,this.useFetchStreams=d}}const Qn="(default)";class Xn{constructor(t,e){this.projectId=t,this.database=e||Qn}static empty(){return new Xn("","")}get isDefaultDatabase(){return this.database===Qn}isEqual(t){return t instanceof Xn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Ka="__type__",Qf="__max__",xn={mapValue:{}},Wa="__vector__",si="value";function fe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Di(n)?4:Yf(n)?9007199254740991:Xf(n)?10:11:x()}function Pt(n,t){if(n===t)return!0;const e=fe(n);if(e!==fe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Wn(n).isEqual(Wn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const l=he(s.timestampValue),u=he(o.timestampValue);return l.seconds===u.seconds&&l.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Ae(s.bytesValue).isEqual(Ae(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return rt(s.geoPointValue.latitude)===rt(o.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return rt(s.integerValue)===rt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const l=rt(s.doubleValue),u=rt(o.doubleValue);return l===u?Kn(l)===Kn(u):isNaN(l)&&isNaN(u)}return!1}(n,t);case 9:return we(n.arrayValue.values||[],t.arrayValue.values||[],Pt);case 10:case 11:return function(s,o){const l=s.mapValue.fields||{},u=o.mapValue.fields||{};if(To(l)!==To(u))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(u[f]===void 0||!Pt(l[f],u[f])))return!1;return!0}(n,t);default:return x()}}function sn(n,t){return(n.values||[]).find(e=>Pt(e,t))!==void 0}function Re(n,t){if(n===t)return 0;const e=fe(n),r=fe(t);if(e!==r)return U(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(n.booleanValue,t.booleanValue);case 2:return function(o,l){const u=rt(o.integerValue||o.doubleValue),f=rt(l.integerValue||l.doubleValue);return u<f?-1:u>f?1:u===f?0:isNaN(u)?isNaN(f)?0:-1:1}(n,t);case 3:return wo(n.timestampValue,t.timestampValue);case 4:return wo(Wn(n),Wn(t));case 5:return ii(n.stringValue,t.stringValue);case 6:return function(o,l){const u=Ae(o),f=Ae(l);return u.compareTo(f)}(n.bytesValue,t.bytesValue);case 7:return function(o,l){const u=o.split("/"),f=l.split("/");for(let d=0;d<u.length&&d<f.length;d++){const I=U(u[d],f[d]);if(I!==0)return I}return U(u.length,f.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,l){const u=U(rt(o.latitude),rt(l.latitude));return u!==0?u:U(rt(o.longitude),rt(l.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Ao(n.arrayValue,t.arrayValue);case 10:return function(o,l){var u,f,d,I;const A=o.fields||{},S=l.fields||{},P=(u=A[si])===null||u===void 0?void 0:u.arrayValue,D=(f=S[si])===null||f===void 0?void 0:f.arrayValue,M=U(((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0,((I=D==null?void 0:D.values)===null||I===void 0?void 0:I.length)||0);return M!==0?M:Ao(P,D)}(n.mapValue,t.mapValue);case 11:return function(o,l){if(o===xn.mapValue&&l===xn.mapValue)return 0;if(o===xn.mapValue)return 1;if(l===xn.mapValue)return-1;const u=o.fields||{},f=Object.keys(u),d=l.fields||{},I=Object.keys(d);f.sort(),I.sort();for(let A=0;A<f.length&&A<I.length;++A){const S=ii(f[A],I[A]);if(S!==0)return S;const P=Re(u[f[A]],d[I[A]]);if(P!==0)return P}return U(f.length,I.length)}(n.mapValue,t.mapValue);default:throw x()}}function wo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return U(n,t);const e=he(n),r=he(t),s=U(e.seconds,r.seconds);return s!==0?s:U(e.nanos,r.nanos)}function Ao(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Re(e[s],r[s]);if(o)return o}return U(e.length,r.length)}function be(n){return oi(n)}function oi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=he(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Ae(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=oi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const l of r)o?o=!1:s+=",",s+=`${l}:${oi(e.fields[l])}`;return s+"}"}(n.mapValue):x()}function Bn(n){switch(fe(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ki(n);return t?16+Bn(t):16;case 5:return 2*n.stringValue.length;case 6:return Ae(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+Bn(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Pe(r.fields,(o,l)=>{s+=o.length+Bn(l)}),s}(n.mapValue);default:throw x()}}function ai(n){return!!n&&"integerValue"in n}function Ni(n){return!!n&&"arrayValue"in n}function jn(n){return!!n&&"mapValue"in n}function Xf(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Ka])===null||e===void 0?void 0:e.stringValue)===Wa}function Ye(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Pe(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ye(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ye(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Yf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Qf}/**
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
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!jn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ye(e)}setAll(t){let e=it.emptyPath(),r={},s=[];t.forEach((l,u)=>{if(!e.isImmediateParentOf(u)){const f=this.getFieldsMap(e);this.applyChanges(f,r,s),r={},s=[],e=u.popLast()}l?r[u.lastSegment()]=Ye(l):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());jn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Pt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];jn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Pe(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new At(Ye(this.value))}}function Qa(n){const t=[];return Pe(n.fields,(e,r)=>{const s=new it([e]);if(jn(r)){const o=Qa(r.mapValue).fields;if(o.length===0)t.push(s);else for(const l of o)t.push(s.child(l))}else t.push(s)}),new Rt(t)}/**
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
 */class wt{constructor(t,e,r,s,o,l,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=l,this.documentState=u}static newInvalidDocument(t){return new wt(t,0,z.min(),z.min(),z.min(),At.empty(),0)}static newFoundDocument(t,e,r,s){return new wt(t,1,e,z.min(),r,s,0)}static newNoDocument(t,e){return new wt(t,2,e,z.min(),z.min(),At.empty(),0)}static newUnknownDocument(t,e){return new wt(t,3,e,z.min(),z.min(),At.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof wt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yn{constructor(t,e){this.position=t,this.inclusive=e}}function Ro(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],l=n.position[s];if(o.field.isKeyField()?r=O.comparator(O.fromName(l.referenceValue),e.key):r=Re(l,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function bo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Pt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Jn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Jf(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Xa{}class Z extends Xa{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new td(t,e,r):e==="array-contains"?new rd(t,r):e==="in"?new id(t,r):e==="not-in"?new sd(t,r):e==="array-contains-any"?new od(t,r):new Z(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new ed(t,r):new nd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Re(e,this.value)):e!==null&&fe(this.value)===fe(e)&&this.matchesComparison(Re(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gt extends Xa{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Gt(t,e)}matches(t){return Ya(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Ya(n){return n.op==="and"}function Ja(n){return Zf(n)&&Ya(n)}function Zf(n){for(const t of n.filters)if(t instanceof Gt)return!1;return!0}function li(n){if(n instanceof Z)return n.field.canonicalString()+n.op.toString()+be(n.value);if(Ja(n))return n.filters.map(t=>li(t)).join(",");{const t=n.filters.map(e=>li(e)).join(",");return`${n.op}(${t})`}}function Za(n,t){return n instanceof Z?function(r,s){return s instanceof Z&&r.op===s.op&&r.field.isEqual(s.field)&&Pt(r.value,s.value)}(n,t):n instanceof Gt?function(r,s){return s instanceof Gt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,l,u)=>o&&Za(l,s.filters[u]),!0):!1}(n,t):void x()}function tl(n){return n instanceof Z?function(e){return`${e.field.canonicalString()} ${e.op} ${be(e.value)}`}(n):n instanceof Gt?function(e){return e.op.toString()+" {"+e.getFilters().map(tl).join(" ,")+"}"}(n):"Filter"}class td extends Z{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class ed extends Z{constructor(t,e){super(t,"in",e),this.keys=el("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class nd extends Z{constructor(t,e){super(t,"not-in",e),this.keys=el("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function el(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class rd extends Z{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ni(e)&&sn(e.arrayValue,this.value)}}class id extends Z{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&sn(this.value.arrayValue,e)}}class sd extends Z{constructor(t,e){super(t,"not-in",e)}matches(t){if(sn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!sn(this.value.arrayValue,e)}}class od extends Z{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ni(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>sn(this.value.arrayValue,r))}}/**
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
 */class ad{constructor(t,e=null,r=[],s=[],o=null,l=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=l,this.endAt=u,this.le=null}}function So(n,t=null,e=[],r=[],s=null,o=null,l=null){return new ad(n,t,e,r,s,o,l)}function Oi(n){const t=$(n);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>li(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Vi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>be(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>be(r)).join(",")),t.le=e}return t.le}function Mi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Jf(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Za(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!bo(n.startAt,t.startAt)&&bo(n.endAt,t.endAt)}/**
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
 */class cr{constructor(t,e=null,r=[],s=[],o=null,l="F",u=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=l,this.startAt=u,this.endAt=f,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function ld(n,t,e,r,s,o,l,u){return new cr(n,t,e,r,s,o,l,u)}function cd(n){return new cr(n)}function Co(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ud(n){return n.collectionGroup!==null}function Je(n){const t=$(n);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let u=new st(it.comparator);return l.filters.forEach(f=>{f.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new Jn(o,r))}),e.has(it.keyField().canonicalString())||t.he.push(new Jn(it.keyField(),r))}return t.he}function se(n){const t=$(n);return t.Pe||(t.Pe=hd(t,Je(n))),t.Pe}function hd(n,t){if(n.limitType==="F")return So(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Jn(s.field,o)});const e=n.endAt?new Yn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Yn(n.startAt.position,n.startAt.inclusive):null;return So(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ci(n,t,e){return new cr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function nl(n,t){return Mi(se(n),se(t))&&n.limitType===t.limitType}function rl(n){return`${Oi(se(n))}|lt:${n.limitType}`}function Ke(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>tl(s)).join(", ")}]`),Vi(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>be(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>be(s)).join(",")),`Target(${r})`}(se(n))}; limitType=${n.limitType})`}function xi(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Je(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(l,u,f){const d=Ro(l,u,f);return l.inclusive?d<=0:d<0}(r.startAt,Je(r),s)||r.endAt&&!function(l,u,f){const d=Ro(l,u,f);return l.inclusive?d>=0:d>0}(r.endAt,Je(r),s))}(n,t)}function fd(n){return(t,e)=>{let r=!1;for(const s of Je(n)){const o=dd(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function dd(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,l,u){const f=l.data.field(o),d=u.data.field(o);return f!==null&&d!==null?Re(f,d):x()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x()}}/**
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
 */class de{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Pe(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return $a(this.inner)}size(){return this.innerSize}}/**
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
 */const pd=new Et(O.comparator);function Zn(){return pd}const il=new Et(O.comparator);function Ln(...n){let t=il;for(const e of n)t=t.insert(e.key,e);return t}function sl(n){let t=il;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function re(){return Ze()}function ol(){return Ze()}function Ze(){return new de(n=>n.toString(),(n,t)=>n.isEqual(t))}const md=new Et(O.comparator),gd=new st(O.comparator);function dt(...n){let t=gd;for(const e of n)t=t.add(e);return t}const _d=new st(U);function yd(){return _d}/**
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
 */function Li(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kn(t)?"-0":t}}function al(n){return{integerValue:""+n}}function Ed(n,t){return qf(t)?al(t):Li(n,t)}/**
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
 */class ur{constructor(){this._=void 0}}function vd(n,t,e){return n instanceof tr?function(s,o){const l={fields:{[za]:{stringValue:qa},[Ga]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Di(o)&&(o=ki(o)),o&&(l.fields[Ha]=o),{mapValue:l}}(e,t):n instanceof on?cl(n,t):n instanceof an?ul(n,t):function(s,o){const l=ll(s,o),u=Po(l)+Po(s.Ie);return ai(l)&&ai(s.Ie)?al(u):Li(s.serializer,u)}(n,t)}function Td(n,t,e){return n instanceof on?cl(n,t):n instanceof an?ul(n,t):e}function ll(n,t){return n instanceof er?function(r){return ai(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class tr extends ur{}class on extends ur{constructor(t){super(),this.elements=t}}function cl(n,t){const e=hl(t);for(const r of n.elements)e.some(s=>Pt(s,r))||e.push(r);return{arrayValue:{values:e}}}class an extends ur{constructor(t){super(),this.elements=t}}function ul(n,t){let e=hl(t);for(const r of n.elements)e=e.filter(s=>!Pt(s,r));return{arrayValue:{values:e}}}class er extends ur{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Po(n){return rt(n.integerValue||n.doubleValue)}function hl(n){return Ni(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Id(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof on&&s instanceof on||r instanceof an&&s instanceof an?we(r.elements,s.elements,Pt):r instanceof er&&s instanceof er?Pt(r.Ie,s.Ie):r instanceof tr&&s instanceof tr}(n.transform,t.transform)}class wd{constructor(t,e){this.version=t,this.transformResults=e}}class Nt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Nt}static exists(t){return new Nt(void 0,t)}static updateTime(t){return new Nt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function $n(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class hr{}function fl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new pl(n.key,Nt.none()):new hn(n.key,n.data,Nt.none());{const e=n.data,r=At.empty();let s=new st(it.comparator);for(let o of t.fields)if(!s.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?r.delete(o):r.set(o,l),s=s.add(o)}return new pe(n.key,r,new Rt(s.toArray()),Nt.none())}}function Ad(n,t,e){n instanceof hn?function(s,o,l){const u=s.value.clone(),f=Do(s.fieldTransforms,o,l.transformResults);u.setAll(f),o.convertToFoundDocument(l.version,u).setHasCommittedMutations()}(n,t,e):n instanceof pe?function(s,o,l){if(!$n(s.precondition,o))return void o.convertToUnknownDocument(l.version);const u=Do(s.fieldTransforms,o,l.transformResults),f=o.data;f.setAll(dl(s)),f.setAll(u),o.convertToFoundDocument(l.version,f).setHasCommittedMutations()}(n,t,e):function(s,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function tn(n,t,e,r){return n instanceof hn?function(o,l,u,f){if(!$n(o.precondition,l))return u;const d=o.value.clone(),I=ko(o.fieldTransforms,f,l);return d.setAll(I),l.convertToFoundDocument(l.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof pe?function(o,l,u,f){if(!$n(o.precondition,l))return u;const d=ko(o.fieldTransforms,f,l),I=l.data;return I.setAll(dl(o)),I.setAll(d),l.convertToFoundDocument(l.version,I).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(n,t,e,r):function(o,l,u){return $n(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):u}(n,t,e)}function Rd(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=ll(r.transform,s||null);o!=null&&(e===null&&(e=At.empty()),e.set(r.field,o))}return e||null}function Vo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&we(r,s,(o,l)=>Id(o,l))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class hn extends hr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class pe extends hr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function dl(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Do(n,t,e){const r=new Map;X(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],l=o.transform,u=t.data.field(o.field);r.set(o.field,Td(l,u,e[s]))}return r}function ko(n,t,e){const r=new Map;for(const s of n){const o=s.transform,l=e.data.field(s.field);r.set(s.field,vd(o,l,t))}return r}class pl extends hr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bd extends hr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Sd{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Ad(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=tn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=tn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=ol();return this.mutations.forEach(s=>{const o=t.get(s.key),l=o.overlayedDocument;let u=this.applyToLocalView(l,o.mutatedFields);u=e.has(s.key)?null:u;const f=fl(l,u);f!==null&&r.set(s.key,f),l.isValidDocument()||l.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),dt())}isEqual(t){return this.batchId===t.batchId&&we(this.mutations,t.mutations,(e,r)=>Vo(e,r))&&we(this.baseMutations,t.baseMutations,(e,r)=>Vo(e,r))}}class Fi{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){X(t.mutations.length===r.length);let s=function(){return md}();const o=t.mutations;for(let l=0;l<o.length;l++)s=s.insert(o[l].key,r[l].version);return new Fi(t,e,r,s)}}/**
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
 */class Cd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */var Y,L;function Pd(n){switch(n){case b.OK:return x();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return x()}}function Vd(n){if(n===void 0)return ue("GRPC error has no .code"),b.UNKNOWN;switch(n){case Y.OK:return b.OK;case Y.CANCELLED:return b.CANCELLED;case Y.UNKNOWN:return b.UNKNOWN;case Y.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Y.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Y.INTERNAL:return b.INTERNAL;case Y.UNAVAILABLE:return b.UNAVAILABLE;case Y.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Y.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Y.NOT_FOUND:return b.NOT_FOUND;case Y.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Y.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Y.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Y.ABORTED:return b.ABORTED;case Y.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Y.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Y.DATA_LOSS:return b.DATA_LOSS;default:return x()}}(L=Y||(Y={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Ri([4294967295,4294967295],0);class Dd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ui(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function kd(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Nd(n,t){return ui(n,t.toTimestamp())}function Ie(n){return X(!!n),z.fromTimestamp(function(e){const r=he(e);return new tt(r.seconds,r.nanos)}(n))}function ml(n,t){return hi(n,t).canonicalString()}function hi(n,t){const e=function(s){return new Q(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Od(n){const t=Q.fromString(n);return X($d(t)),t}function fi(n,t){return ml(n.databaseId,t.path)}function Md(n){const t=Od(n);return t.length===4?Q.emptyPath():Ld(t)}function xd(n){return new Q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ld(n){return X(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function No(n,t,e){return{name:fi(n,t),fields:e.value.mapValue.fields}}function Fd(n,t){let e;if(t instanceof hn)e={update:No(n,t.key,t.value)};else if(t instanceof pl)e={delete:fi(n,t.key)};else if(t instanceof pe)e={update:No(n,t.key,t.data),updateMask:jd(t.fieldMask)};else{if(!(t instanceof bd))return x();e={verify:fi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,l){const u=l.transform;if(u instanceof tr)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof on)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof an)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof er)return{fieldPath:l.field.canonicalString(),increment:u.Ie};throw x()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Nd(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x()}(n,t.precondition)),e}function Ud(n,t){return n&&n.length>0?(X(t!==void 0),n.map(e=>function(s,o){let l=s.updateTime?Ie(s.updateTime):Ie(o);return l.isEqual(z.min())&&(l=Ie(o)),new wd(l,s.transformResults||[])}(e,t))):[]}function Bd(n){let t=Md(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){X(r===1);const I=e.from[0];I.allDescendants?s=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=function(A){const S=gl(A);return S instanceof Gt&&Ja(S)?S.getFilters():[S]}(e.where));let l=[];e.orderBy&&(l=function(A){return A.map(S=>function(D){return new Jn(ve(D.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(S))}(e.orderBy));let u=null;e.limit&&(u=function(A){let S;return S=typeof A=="object"?A.value:A,Vi(S)?null:S}(e.limit));let f=null;e.startAt&&(f=function(A){const S=!!A.before,P=A.values||[];return new Yn(P,S)}(e.startAt));let d=null;return e.endAt&&(d=function(A){const S=!A.before,P=A.values||[];return new Yn(P,S)}(e.endAt)),ld(t,s,l,o,u,"F",f,d)}function gl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ve(e.unaryFilter.field);return Z.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ve(e.unaryFilter.field);return Z.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ve(e.unaryFilter.field);return Z.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=ve(e.unaryFilter.field);return Z.create(l,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(e){return Z.create(ve(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Gt.create(e.compositeFilter.filters.map(r=>gl(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x()}}(e.compositeFilter.op))}(n):x()}function ve(n){return it.fromServerFormat(n.fieldPath)}function jd(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function $d(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class qd{constructor(t){this.Tt=t}}function zd(n){const t=Bd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ci(t,t.limit,"L"):t}/**
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
 */class Hd{constructor(){this.Tn=new Gd}addToCollectionParentIndex(t,e){return this.Tn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Ht.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Ht.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Gd{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new st(Q.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new st(Q.comparator)).toArray()}}/**
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
 */const Oo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_l=41943040;class _t{static withCacheSize(t){return new _t(t,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */_t.DEFAULT_COLLECTION_PERCENTILE=10,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_t.DEFAULT=new _t(_l,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_t.DISABLED=new _t(-1,0,0);/**
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
 */class Se{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new Se(0)}static Kn(){return new Se(-1)}}/**
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
 */const Mo="LruGarbageCollector",Kd=1048576;function xo([n,t],[e,r]){const s=U(n,e);return s===0?U(t,r):s}class Wd{constructor(t){this.Hn=t,this.buffer=new st(xo),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();xo(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Qd{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){V(Mo,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){un(e)?V(Mo,"Ignoring IndexedDB error during garbage collection: ",e):await Si(e)}await this.er(3e5)})}}class Xd{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return R.resolve(Ci.ae);const r=new Wd(e);return this.tr.forEachTarget(t,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(t,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.tr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Oo)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Oo):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let r,s,o,l,u,f,d;const I=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),s=this.params.maximumSequenceNumbersToCollect):s=A,l=Date.now(),this.nthSequenceNumber(t,s))).next(A=>(r=A,u=Date.now(),this.removeTargets(t,r,e))).next(A=>(o=A,f=Date.now(),this.removeOrphanedDocuments(t,r))).next(A=>(d=Date.now(),Ee()<=F.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-I}ms
	Determined least recently used ${s} in `+(u-l)+`ms
	Removed ${o} targets in `+(f-u)+`ms
	Removed ${A} documents in `+(d-f)+`ms
Total Duration: ${d-I}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:A})))}}function Yd(n,t){return new Xd(n,t)}/**
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
 */class Jd{constructor(){this.changes=new de(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,wt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class Zd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class tp{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&tn(r.mutation,s,Rt.empty(),tt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,dt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=dt()){const s=re();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let l=Ln();return o.forEach((u,f)=>{l=l.insert(u,f.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const r=re();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,dt()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((l,u)=>{e.set(l,u)})})}computeViews(t,e,r,s){let o=Zn();const l=Ze(),u=function(){return Ze()}();return e.forEach((f,d)=>{const I=r.get(d.key);s.has(d.key)&&(I===void 0||I.mutation instanceof pe)?o=o.insert(d.key,d):I!==void 0?(l.set(d.key,I.mutation.getFieldMask()),tn(I.mutation,d,I.mutation.getFieldMask(),tt.now())):l.set(d.key,Rt.empty())}),this.recalculateAndSaveOverlays(t,o).next(f=>(f.forEach((d,I)=>l.set(d,I)),e.forEach((d,I)=>{var A;return u.set(d,new Zd(I,(A=l.get(d))!==null&&A!==void 0?A:null))}),u))}recalculateAndSaveOverlays(t,e){const r=Ze();let s=new Et((l,u)=>l-u),o=dt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const u of l)u.keys().forEach(f=>{const d=e.get(f);if(d===null)return;let I=r.get(f)||Rt.empty();I=u.applyToLocalView(d,I),r.set(f,I);const A=(s.get(u.batchId)||dt()).add(f);s=s.insert(u.batchId,A)})}).next(()=>{const l=[],u=s.getReverseIterator();for(;u.hasNext();){const f=u.getNext(),d=f.key,I=f.value,A=ol();I.forEach(S=>{if(!o.has(S)){const P=fl(e.get(S),r.get(S));P!==null&&A.set(S,P),o=o.add(S)}}),l.push(this.documentOverlayCache.saveOverlays(t,d,A))}return R.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(l){return O.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ud(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const l=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):R.resolve(re());let u=rn,f=o;return l.next(d=>R.forEach(d,(I,A)=>(u<A.largestBatchId&&(u=A.largestBatchId),o.get(I)?R.resolve():this.remoteDocumentCache.getEntry(t,I).next(S=>{f=f.insert(I,S)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,f,d,dt())).next(I=>({batchId:u,changes:sl(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let s=Ln();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let l=Ln();return this.indexManager.getCollectionParents(t,o).next(u=>R.forEach(u,f=>{const d=function(A,S){return new cr(S,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(I=>{I.forEach((A,S)=>{l=l.insert(A,S)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(l=>{o.forEach((f,d)=>{const I=d.getKey();l.get(I)===null&&(l=l.insert(I,wt.newInvalidDocument(I)))});let u=Ln();return l.forEach((f,d)=>{const I=o.get(f);I!==void 0&&tn(I.mutation,d,Rt.empty(),tt.now()),xi(e,d)&&(u=u.insert(f,d))}),u})}}/**
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
 */class ep{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return R.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Ie(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(s){return{name:s.name,query:zd(s.bundledQuery),readTime:Ie(s.readTime)}}(e)),R.resolve()}}/**
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
 */class np{constructor(){this.overlays=new Et(O.comparator),this.Rr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=re();return R.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.Et(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const s=re(),o=e.length+1,l=new O(e.child("")),u=this.overlays.getIteratorFrom(l);for(;u.hasNext();){const f=u.getNext().value,d=f.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&f.largestBatchId>r&&s.set(f.getKey(),f)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new Et((d,I)=>d-I);const l=this.overlays.getIterator();for(;l.hasNext();){const d=l.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let I=o.get(d.largestBatchId);I===null&&(I=re(),o=o.insert(d.largestBatchId,I)),I.set(d.getKey(),d)}}const u=re(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((d,I)=>u.set(d,I)),!(u.size()>=s)););return R.resolve(u)}Et(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const l=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new Cd(e,r));let o=this.Rr.get(e);o===void 0&&(o=dt(),this.Rr.set(e,o)),this.Rr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class rp{constructor(){this.sessionToken=Ct.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
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
 */class Ui{constructor(){this.Vr=new st(J.mr),this.gr=new st(J.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const r=new J(t,e);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.wr(new J(t,e))}Sr(t,e){t.forEach(r=>this.removeReference(r,e))}br(t){const e=new O(new Q([])),r=new J(e,t),s=new J(e,t+1),o=[];return this.gr.forEachInRange([r,s],l=>{this.wr(l),o.push(l.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new O(new Q([])),r=new J(e,t),s=new J(e,t+1);let o=dt();return this.gr.forEachInRange([r,s],l=>{o=o.add(l.key)}),o}containsKey(t){const e=new J(t,0),r=this.Vr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class J{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return O.comparator(t.key,e.key)||U(t.Cr,e.Cr)}static pr(t,e){return U(t.Cr,e.Cr)||O.comparator(t.key,e.key)}}/**
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
 */class ip{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new st(J.mr)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Sd(o,e,r,s);this.mutationQueue.push(l);for(const u of s)this.Mr=this.Mr.add(new J(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return R.resolve(l)}lookupMutationBatch(t,e){return R.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Nr(r),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?Pi:this.Fr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new J(e,0),s=new J(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,s],l=>{const u=this.Or(l.Cr);o.push(u)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new st(U);return e.forEach(s=>{const o=new J(s,0),l=new J(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,l],u=>{r=r.add(u.Cr)})}),R.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const l=new J(new O(o),0);let u=new st(U);return this.Mr.forEachWhile(f=>{const d=f.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(f.Cr)),!0)},l),R.resolve(this.Br(u))}Br(t){const e=[];return t.forEach(r=>{const s=this.Or(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){X(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return R.forEach(e.mutations,s=>{const o=new J(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Mr=r})}qn(t){}containsKey(t,e){const r=new J(e,0),s=this.Mr.firstAfterOrEqual(r);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class sp{constructor(t){this.kr=t,this.docs=function(){return new Et(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,l=this.kr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():wt.newInvalidDocument(e))}getEntries(t,e){let r=Zn();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():wt.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Zn();const l=e.path,u=new O(l.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(u);for(;f.hasNext();){const{key:d,value:{document:I}}=f.getNext();if(!l.isPrefixOf(d.path))break;d.path.length>l.length+1||Uf(Ff(I),r)<=0||(s.has(I.key)||xi(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,r,s){x()}qr(t,e){return R.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new op(this)}getSize(t){return R.resolve(this.size)}}class op extends Jd{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Ir.addEntry(t,s)):this.Ir.removeEntry(r)}),R.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
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
 */class ap{constructor(t){this.persistence=t,this.Qr=new de(e=>Oi(e),Mi),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Ui,this.targetCount=0,this.Kr=Se.Un()}forEachTarget(t,e){return this.Qr.forEach((r,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.$r&&(this.$r=e),R.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Kr=new Se(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.zn(e),R.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Ur.br(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Qr.forEach((l,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.Qr.delete(l),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.Qr.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this.Ur.yr(e,r),R.resolve()}removeMatchingKeys(t,e,r){this.Ur.Sr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(l=>{o.push(s.markPotentiallyOrphaned(t,l))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Ur.br(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Ur.vr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this.Ur.containsKey(e))}}/**
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
 */class yl{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new Ci(0),this.zr=!1,this.zr=!0,this.jr=new rp,this.referenceDelegate=t(this),this.Hr=new ap(this),this.indexManager=new Hd,this.remoteDocumentCache=function(s){return new sp(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new qd(e),this.Yr=new ep(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new np,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Wr[t.toKey()];return r||(r=new ip(e,this.referenceDelegate),this.Wr[t.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,r){V("MemoryPersistence","Starting transaction:",t);const s=new lp(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(o=>this.referenceDelegate.Xr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}ei(t,e){return R.or(Object.values(this.Wr).map(r=>()=>r.containsKey(t,e)))}}class lp extends jf{constructor(t){super(),this.currentSequenceNumber=t}}class Bi{constructor(t){this.persistence=t,this.ti=new Ui,this.ni=null}static ri(t){return new Bi(t)}get ii(){if(this.ni)return this.ni;throw x()}addReference(t,e,r){return this.ti.addReference(r,e),this.ii.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.ti.removeReference(r,e),this.ii.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),R.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.ii,r=>{const s=O.fromPath(r);return this.si(t,s).next(o=>{o||e.removeEntry(s,z.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(r=>{r?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return R.or([()=>R.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class nr{constructor(t,e){this.persistence=t,this.oi=new de(r=>zf(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Yd(this,e)}static ri(t,e){return new nr(t,e)}Zr(){}Xr(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}sr(t){let e=0;return this.rr(t,r=>{e++}).next(()=>e)}rr(t,e){return R.forEach(this.oi,(r,s)=>this.ar(t,r,s).next(o=>o?R.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.qr(t,l=>this.ar(t,l,e).next(u=>{u||(r++,o.removeEntry(l,z.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),R.resolve()}removeReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),R.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Bn(t.data.value)),e}ar(t,e,r){return R.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.oi.get(e);return R.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class ji{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Hi=r,this.Ji=s}static Yi(t,e){let r=dt(),s=dt();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ji(t,e.fromCache,r,s)}}/**
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
 */class cp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class up{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return jc()?8:$f(Fc())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.rs(t,e).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.ss(t,e,s,r).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new cp;return this._s(t,e,l).next(u=>{if(o.result=u,this.Xi)return this.us(t,e,l,u.size)})}).next(()=>o.result)}us(t,e,r,s){return r.documentReadCount<this.es?(Ee()<=F.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Ke(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),R.resolve()):(Ee()<=F.DEBUG&&V("QueryEngine","Query:",Ke(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Ee()<=F.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Ke(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,se(e))):R.resolve())}rs(t,e){if(Co(e))return R.resolve(null);let r=se(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ci(e,null,"F"),r=se(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const l=dt(...o);return this.ns.getDocuments(t,l).next(u=>this.indexManager.getMinOffset(t,r).next(f=>{const d=this.cs(e,u);return this.ls(e,d,l,f.readTime)?this.rs(t,ci(e,null,"F")):this.hs(t,d,e,f)}))})))}ss(t,e,r,s){return Co(e)||s.isEqual(z.min())?R.resolve(null):this.ns.getDocuments(t,r).next(o=>{const l=this.cs(e,o);return this.ls(e,l,r,s)?R.resolve(null):(Ee()<=F.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ke(e)),this.hs(t,l,e,Lf(s,rn)).next(u=>u))})}cs(t,e){let r=new st(fd(t));return e.forEach((s,o)=>{xi(t,o)&&(r=r.add(o))}),r}ls(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}_s(t,e,r){return Ee()<=F.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Ke(e)),this.ns.getDocumentsMatchingQuery(t,e,Ht.min(),r)}hs(t,e,r,s){return this.ns.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
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
 */const hp="LocalStore";class fp{constructor(t,e,r,s){this.persistence=t,this.Ps=e,this.serializer=s,this.Ts=new Et(U),this.Is=new de(o=>Oi(o),Mi),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(r)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new tp(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function dp(n,t,e,r){return new fp(n,t,e,r)}async function El(n,t){const e=$(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.As(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const l=[],u=[];let f=dt();for(const d of s){l.push(d.batchId);for(const I of d.mutations)f=f.add(I.key)}for(const d of o){u.push(d.batchId);for(const I of d.mutations)f=f.add(I.key)}return e.localDocuments.getDocuments(r,f).next(d=>({Rs:d,removedBatchIds:l,addedBatchIds:u}))})})}function pp(n,t){const e=$(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.ds.newChangeBuffer({trackRemovals:!0});return function(u,f,d,I){const A=d.batch,S=A.keys();let P=R.resolve();return S.forEach(D=>{P=P.next(()=>I.getEntry(f,D)).next(M=>{const k=d.docVersions.get(D);X(k!==null),M.version.compareTo(k)<0&&(A.applyToRemoteDocument(M,d),M.isValidDocument()&&(M.setReadTime(d.commitVersion),I.addEntry(M)))})}),P.next(()=>u.mutationQueue.removeMutationBatch(f,A))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let f=dt();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(f=f.add(u.batch.mutations[d].key));return f}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function mp(n){const t=$(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function gp(n,t){const e=$(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Pi),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class Lo{constructor(){this.activeTargetIds=yd()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _p{constructor(){this.ho=new Lo,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,r){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new Lo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class yp{To(t){}shutdown(){}}/**
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
 */const Fo="ConnectivityMonitor";class Uo{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){V(Fo,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){V(Fo,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Fn=null;function di(){return Fn===null?Fn=function(){return 268435456+Math.round(2147483648*Math.random())}():Fn++,"0x"+Fn.toString(16)}/**
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
 */const Wr="RestConnection",Ep={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class vp{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Qn?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(t,e,r,s,o){const l=di(),u=this.bo(t,e.toUriEncodedString());V(Wr,`Sending RPC '${t}' ${l}:`,u,r);const f={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(f,s,o),this.vo(t,u,f,r).then(d=>(V(Wr,`Received RPC '${t}' ${l}: `,d),d),d=>{throw lr(Wr,`RPC '${t}' ${l} failed with error: `,d,"url: ",u,"request:",r),d})}Co(t,e,r,s,o,l){return this.So(t,e,r,s,o)}Do(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ce}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}bo(t,e){const r=Ep[t];return`${this.po}/v1/${e}:${r}`}terminate(){}}/**
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
 */class Tp{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
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
 */const ht="WebChannelConnection";class Ip extends vp{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,r,s){const o=di();return new Promise((l,u)=>{const f=new Oa;f.setWithCredentials(!0),f.listenOnce(Ma.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Un.NO_ERROR:const I=f.getResponseJson();V(ht,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(I)),l(I);break;case Un.TIMEOUT:V(ht,`RPC '${t}' ${o} timed out`),u(new N(b.DEADLINE_EXCEEDED,"Request time out"));break;case Un.HTTP_ERROR:const A=f.getStatus();if(V(ht,`RPC '${t}' ${o} failed with status:`,A,"response text:",f.getResponseText()),A>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const P=S==null?void 0:S.error;if(P&&P.status&&P.message){const D=function(k){const G=k.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(G)>=0?G:b.UNKNOWN}(P.status);u(new N(D,P.message))}else u(new N(b.UNKNOWN,"Server responded with status "+f.getStatus()))}else u(new N(b.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{V(ht,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(s);V(ht,`RPC '${t}' ${o} sending request:`,s),f.send(e,"POST",d,r,15)})}Wo(t,e,r){const s=di(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=Fa(),u=La(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(f.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Do(f.initMessageHeaders,e,r),f.encodeInitMessageHeaders=!0;const I=o.join("");V(ht,`Creating RPC '${t}' stream ${s}: ${I}`,f);const A=l.createWebChannel(I,f);let S=!1,P=!1;const D=new Tp({Fo:k=>{P?V(ht,`Not sending because RPC '${t}' stream ${s} is closed:`,k):(S||(V(ht,`Opening RPC '${t}' stream ${s} transport.`),A.open(),S=!0),V(ht,`RPC '${t}' stream ${s} sending:`,k),A.send(k))},Mo:()=>A.close()}),M=(k,G,H)=>{k.listen(G,K=>{try{H(K)}catch(ot){setTimeout(()=>{throw ot},0)}})};return M(A,Qe.EventType.OPEN,()=>{P||(V(ht,`RPC '${t}' stream ${s} transport opened.`),D.Qo())}),M(A,Qe.EventType.CLOSE,()=>{P||(P=!0,V(ht,`RPC '${t}' stream ${s} transport closed`),D.Uo())}),M(A,Qe.EventType.ERROR,k=>{P||(P=!0,lr(ht,`RPC '${t}' stream ${s} transport errored:`,k),D.Uo(new N(b.UNAVAILABLE,"The operation could not be completed")))}),M(A,Qe.EventType.MESSAGE,k=>{var G;if(!P){const H=k.data[0];X(!!H);const K=H,ot=(K==null?void 0:K.error)||((G=K[0])===null||G===void 0?void 0:G.error);if(ot){V(ht,`RPC '${t}' stream ${s} received error:`,ot);const Xt=ot.status;let gt=function(g){const _=Y[g];if(_!==void 0)return Vd(_)}(Xt),E=ot.message;gt===void 0&&(gt=b.INTERNAL,E="Unknown error status: "+Xt+" with message "+ot.message),P=!0,D.Uo(new N(gt,E)),A.close()}else V(ht,`RPC '${t}' stream ${s} received:`,H),D.Ko(H)}}),M(u,xa.STAT_EVENT,k=>{k.stat===ri.PROXY?V(ht,`RPC '${t}' stream ${s} detected buffering proxy`):k.stat===ri.NOPROXY&&V(ht,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.$o()},0),D}}function Qr(){return typeof document<"u"?document:null}/**
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
 */function fr(n){return new Dd(n,!0)}/**
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
 */class vl{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=r,this.zo=s,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,e-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Bo="PersistentStream";class wp{constructor(t,e,r,s,o,l,u,f){this.Ti=t,this.n_=r,this.r_=s,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=u,this.listener=f,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new vl(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(ue(e.toString()),ue("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===e&&this.V_(r,s)},r=>{t(()=>{const s=new N(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(t,e){const r=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return V(Bo,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(V(Bo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ap extends wp{constructor(t,e,r,s,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,l),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return X(!!t.streamToken),this.lastStreamToken=t.streamToken,X(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){X(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=Ud(t.writeResults,t.commitTime),r=Ie(t.commitTime);return this.listener.v_(r,e)}C_(){const t={};t.database=xd(this.serializer),this.I_(t)}b_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Fd(this.serializer,r))};this.I_(e)}}/**
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
 */class Rp{}class bp extends Rp{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.So(t,hi(e,r),s,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(b.UNKNOWN,o.toString())})}Co(t,e,r,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,u])=>this.connection.Co(t,hi(e,r),s,l,u,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new N(b.UNKNOWN,l.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Sp{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(ue(e),this.N_=!1):V("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const fn="RemoteStore";class Cp{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(l=>{r.enqueueAndForget(async()=>{pn(this)&&(V(fn,"Restarting streams for network reachability change."),await async function(f){const d=$(f);d.W_.add(4),await dn(d),d.j_.set("Unknown"),d.W_.delete(4),await dr(d)}(this))})}),this.j_=new Sp(r,s)}}async function dr(n){if(pn(n))for(const t of n.G_)await t(!0)}async function dn(n){for(const t of n.G_)await t(!1)}function pn(n){return $(n).W_.size===0}async function Tl(n,t,e){if(!un(t))throw t;n.W_.add(1),await dn(n),n.j_.set("Offline"),e||(e=()=>mp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V(fn,"Retrying IndexedDB access"),await e(),n.W_.delete(1),await dr(n)})}function Il(n,t){return t().catch(e=>Tl(n,e,t))}async function pr(n){const t=$(n),e=Kt(t);let r=t.U_.length>0?t.U_[t.U_.length-1].batchId:Pi;for(;Pp(t);)try{const s=await gp(t.localStore,r);if(s===null){t.U_.length===0&&e.P_();break}r=s.batchId,Vp(t,s)}catch(s){await Tl(t,s)}wl(t)&&Al(t)}function Pp(n){return pn(n)&&n.U_.length<10}function Vp(n,t){n.U_.push(t);const e=Kt(n);e.c_()&&e.S_&&e.b_(t.mutations)}function wl(n){return pn(n)&&!Kt(n).u_()&&n.U_.length>0}function Al(n){Kt(n).start()}async function Dp(n){Kt(n).C_()}async function kp(n){const t=Kt(n);for(const e of n.U_)t.b_(e.mutations)}async function Np(n,t,e){const r=n.U_.shift(),s=Fi.from(r,t,e);await Il(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await pr(n)}async function Op(n,t){t&&Kt(n).S_&&await async function(r,s){if(function(l){return Pd(l)&&l!==b.ABORTED}(s.code)){const o=r.U_.shift();Kt(r).h_(),await Il(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await pr(r)}}(n,t),wl(n)&&Al(n)}async function jo(n,t){const e=$(n);e.asyncQueue.verifyOperationInProgress(),V(fn,"RemoteStore received new credentials");const r=pn(e);e.W_.add(3),await dn(e),r&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await dr(e)}async function Mp(n,t){const e=$(n);t?(e.W_.delete(2),await dr(e)):t||(e.W_.add(2),await dn(e),e.j_.set("Unknown"))}function Kt(n){return n.Y_||(n.Y_=function(e,r,s){const o=$(e);return o.M_(),new Ap(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:Dp.bind(null,n),Lo:Op.bind(null,n),D_:kp.bind(null,n),v_:Np.bind(null,n)}),n.G_.push(async t=>{t?(n.Y_.h_(),await pr(n)):(await n.Y_.stop(),n.U_.length>0&&(V(fn,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
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
 */class $i{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new ie,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const l=Date.now()+r,u=new $i(t,e,l,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rl(n,t){if(ue("AsyncQueue",`${t}: ${n}`),un(n))return new N(b.UNAVAILABLE,`${t}: ${n}`);throw n}class xp{constructor(){this.queries=$o(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,r){const s=$(e),o=s.queries;s.queries=$o(),o.forEach((l,u)=>{for(const f of u.ta)f.onError(r)})})(this,new N(b.ABORTED,"Firestore shutting down"))}}function $o(){return new de(n=>rl(n),nl)}function Lp(n){n.ia.forEach(t=>{t.next()})}var qo,zo;(zo=qo||(qo={}))._a="default",zo.Cache="cache";const Fp="SyncEngine";class Up{constructor(t,e,r,s,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.La={},this.ka=new de(u=>rl(u),nl),this.qa=new Map,this.Qa=new Set,this.$a=new Et(O.comparator),this.Ua=new Map,this.Ka=new Ui,this.Wa={},this.Ga=new Map,this.za=Se.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Bp(n,t,e){const r=zp(n);try{const s=await function(l,u){const f=$(l),d=tt.now(),I=u.reduce((P,D)=>P.add(D.key),dt());let A,S;return f.persistence.runTransaction("Locally write mutations","readwrite",P=>{let D=Zn(),M=dt();return f.ds.getEntries(P,I).next(k=>{D=k,D.forEach((G,H)=>{H.isValidDocument()||(M=M.add(G))})}).next(()=>f.localDocuments.getOverlayedDocuments(P,D)).next(k=>{A=k;const G=[];for(const H of u){const K=Rd(H,A.get(H.key).overlayedDocument);K!=null&&G.push(new pe(H.key,K,Qa(K.value.mapValue),Nt.exists(!0)))}return f.mutationQueue.addMutationBatch(P,d,G,u)}).next(k=>{S=k;const G=k.applyToLocalDocumentSet(A,M);return f.documentOverlayCache.saveOverlays(P,k.batchId,G)})}).then(()=>({batchId:S.batchId,changes:sl(A)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(l,u,f){let d=l.Wa[l.currentUser.toKey()];d||(d=new Et(U)),d=d.insert(u,f),l.Wa[l.currentUser.toKey()]=d}(r,s.batchId,e),await mr(r,s.changes),await pr(r.remoteStore)}catch(s){const o=Rl(s,"Failed to persist write");e.reject(o)}}function Ho(n,t,e){const r=$(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ka.forEach((o,l)=>{const u=l.view.sa(t);u.snapshot&&s.push(u.snapshot)}),function(l,u){const f=$(l);f.onlineState=u;let d=!1;f.queries.forEach((I,A)=>{for(const S of A.ta)S.sa(u)&&(d=!0)}),d&&Lp(f)}(r.eventManager,t),s.length&&r.La.p_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function jp(n,t){const e=$(n),r=t.batch.batchId;try{const s=await pp(e.localStore,t);Sl(e,r,null),bl(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await mr(e,s)}catch(s){await Si(s)}}async function $p(n,t,e){const r=$(n);try{const s=await function(l,u){const f=$(l);return f.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let I;return f.mutationQueue.lookupMutationBatch(d,u).next(A=>(X(A!==null),I=A.keys(),f.mutationQueue.removeMutationBatch(d,A))).next(()=>f.mutationQueue.performConsistencyCheck(d)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(d,I,u)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,I)).next(()=>f.localDocuments.getDocuments(d,I))})}(r.localStore,t);Sl(r,t,e),bl(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await mr(r,s)}catch(s){await Si(s)}}function bl(n,t){(n.Ga.get(t)||[]).forEach(e=>{e.resolve()}),n.Ga.delete(t)}function Sl(n,t,e){const r=$(n);let s=r.Wa[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Wa[r.currentUser.toKey()]=s}}async function mr(n,t,e){const r=$(n),s=[],o=[],l=[];r.ka.isEmpty()||(r.ka.forEach((u,f)=>{l.push(r.Ha(f,t,e).then(d=>{var I;if((d||e)&&r.isPrimaryClient){const A=d?!d.fromCache:(I=void 0)===null||I===void 0?void 0:I.current;r.sharedClientState.updateQueryState(f.targetId,A?"current":"not-current")}if(d){s.push(d);const A=ji.Yi(f.targetId,d);o.push(A)}}))}),await Promise.all(l),r.La.p_(s),await async function(f,d){const I=$(f);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>R.forEach(d,S=>R.forEach(S.Hi,P=>I.persistence.referenceDelegate.addReference(A,S.targetId,P)).next(()=>R.forEach(S.Ji,P=>I.persistence.referenceDelegate.removeReference(A,S.targetId,P)))))}catch(A){if(!un(A))throw A;V(hp,"Failed to update sequence numbers: "+A)}for(const A of d){const S=A.targetId;if(!A.fromCache){const P=I.Ts.get(S),D=P.snapshotVersion,M=P.withLastLimboFreeSnapshotVersion(D);I.Ts=I.Ts.insert(S,M)}}}(r.localStore,o))}async function qp(n,t){const e=$(n);if(!e.currentUser.isEqual(t)){V(Fp,"User change. New user:",t.toKey());const r=await El(e.localStore,t);e.currentUser=t,function(o,l){o.Ga.forEach(u=>{u.forEach(f=>{f.reject(new N(b.CANCELLED,l))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await mr(e,r.Rs)}}function zp(n){const t=$(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=jp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=$p.bind(null,t),t}class rr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=fr(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return dp(this.persistence,new up,t.initialUser,this.serializer)}Xa(t){return new yl(Bi.ri,this.serializer)}Za(t){return new _p}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}rr.provider={build:()=>new rr};class Hp extends rr{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){X(this.persistence.referenceDelegate instanceof nr);const r=this.persistence.referenceDelegate.garbageCollector;return new Qd(r,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?_t.withCacheSize(this.cacheSizeBytes):_t.DEFAULT;return new yl(r=>nr.ri(r,e),this.serializer)}}class pi{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ho(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qp.bind(null,this.syncEngine),await Mp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new xp}()}createDatastore(t){const e=fr(t.databaseInfo.databaseId),r=function(o){return new Ip(o)}(t.databaseInfo);return function(o,l,u,f){return new bp(o,l,u,f)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,l,u){return new Cp(r,s,o,l,u)}(this.localStore,this.datastore,t.asyncQueue,e=>Ho(this.syncEngine,e,0),function(){return Uo.D()?new Uo:new yp}())}createSyncEngine(t,e){return function(s,o,l,u,f,d,I){const A=new Up(s,o,l,u,f,d);return I&&(A.ja=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=$(s);V(fn,"RemoteStore shutting down."),o.W_.add(5),await dn(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}pi.provider={build:()=>new pi};/**
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
 */const Wt="FirestoreClient";class Gp{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=Ba.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async l=>{V(Wt,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(r,l=>(V(Wt,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ie;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Rl(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Xr(n,t){n.asyncQueue.verifyOperationInProgress(),V(Wt,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await El(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Go(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Kp(n);V(Wt,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>jo(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>jo(t.remoteStore,s)),n._onlineComponents=t}async function Kp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(Wt,"Using user provided OfflineComponentProvider");try{await Xr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;lr("Error using user provided cache. Falling back to memory cache: "+e),await Xr(n,new rr)}}else V(Wt,"Using default OfflineComponentProvider"),await Xr(n,new Hp(void 0));return n._offlineComponents}async function Wp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(Wt,"Using user provided OnlineComponentProvider"),await Go(n,n._uninitializedComponentsProvider._online)):(V(Wt,"Using default OnlineComponentProvider"),await Go(n,new pi))),n._onlineComponents}function Qp(n){return Wp(n).then(t=>t.syncEngine)}/**
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
 */function Cl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Ko=new Map;/**
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
 */function Pl(n,t,e){if(!e)throw new N(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Xp(n,t,e,r){if(t===!0&&r===!0)throw new N(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Wo(n){if(!O.isDocumentKey(n))throw new N(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Qo(n){if(O.isDocumentKey(n))throw new N(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function qi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":x()}function Vl(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=qi(n);throw new N(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */const Dl="firestore.googleapis.com",Xo=!0;class Yo{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Dl,this.ssl=Xo}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Xo;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=_l;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Kd)throw new N(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Xp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class gr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yo(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Sf;switch(r.type){case"firstParty":return new Df(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Ko.get(e);r&&(V("ComponentProvider","Removing Datastore"),Ko.delete(e),r.terminate())}(this),Promise.resolve()}}function Yp(n,t,e,r={}){var s;const o=(n=Vl(n,gr))._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),u=`${t}:${e}`;o.host!==Dl&&o.host!==u&&lr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},o),{host:u,ssl:!1,emulatorOptions:r});if(!en(f,l)&&(n._setSettings(f),r.mockUserToken)){let d,I;if(typeof r.mockUserToken=="string")d=r.mockUserToken,I=ft.MOCK_USER;else{d=Lc(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new N(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new ft(A)}n._authCredentials=new Cf(new Ua(d,I))}}/**
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
 */class zi{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new zi(this.firestore,t,this._query)}}class Ot{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ot(this.firestore,t,this._key)}}class qt extends zi{constructor(t,e,r){super(t,e,cd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ot(this.firestore,null,new O(t))}withConverter(t){return new qt(this.firestore,t,this._path)}}function Jp(n,t,...e){if(n=oe(n),Pl("collection","path",t),n instanceof gr){const r=Q.fromString(t,...e);return Qo(r),new qt(n,null,r)}{if(!(n instanceof Ot||n instanceof qt))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Q.fromString(t,...e));return Qo(r),new qt(n.firestore,null,r)}}function Zp(n,t,...e){if(n=oe(n),arguments.length===1&&(t=Ba.newId()),Pl("doc","path",t),n instanceof gr){const r=Q.fromString(t,...e);return Wo(r),new Ot(n,null,new O(r))}{if(!(n instanceof Ot||n instanceof qt))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Q.fromString(t,...e));return Wo(r),new Ot(n.firestore,n instanceof qt?n.converter:null,new O(r))}}/**
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
 */const Jo="AsyncQueue";class Zo{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new vl(this,"async_queue_retry"),this.Su=()=>{const r=Qr();r&&V(Jo,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=t;const e=Qr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=Qr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new ie;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!un(t))throw t;V(Jo,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.bu.then(()=>(this.pu=!0,t().catch(r=>{this.gu=r,this.pu=!1;const s=function(l){let u=l.message||"";return l.stack&&(u=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),u}(r);throw ue("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=e,e}enqueueAfterDelay(t,e,r){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const s=$i.createAndSchedule(this,t,e,r,o=>this.Fu(o));return this.fu.push(s),s}Du(){this.gu&&x()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class kl extends gr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Zo,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Zo(t),this._firestoreClient=void 0,await t}}}function tm(n,t){const e=typeof n=="object"?n:ca(),r=typeof n=="string"?n:Qn,s=cn(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Mc("firestore");o&&Yp(s,...o)}return s}function em(n){if(n._terminated)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||nm(n),n._firestoreClient}function nm(n){var t,e,r;const s=n._freezeSettings(),o=function(u,f,d,I){return new Wf(u,f,d,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,Cl(I.experimentalLongPollingOptions),I.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Gp(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const f=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(f),_online:f}}(n._componentsProvider))}/**
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
 */class ln{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ln(Ct.fromBase64String(t))}catch(e){throw new N(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ln(Ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Nl{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Ol{constructor(t){this._methodName=t}}/**
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
 */class Ml{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class xl{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const rm=/^__.*__$/;class im{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new pe(t,this.data,this.fieldMask,e,this.fieldTransforms):new hn(t,this.data,e,this.fieldTransforms)}}function Ll(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class Hi{constructor(t,e,r,s,o,l){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new Hi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:r,Qu:!1});return s.$u(t),s}Uu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return ir(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(Ll(this.Lu)&&rm.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class sm{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||fr(t)}ju(t,e,r,s=!1){return new Hi({Lu:t,methodName:e,zu:r,path:it.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function om(n){const t=n._freezeSettings(),e=fr(n._databaseId);return new sm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function am(n,t,e,r,s,o={}){const l=n.ju(o.merge||o.mergeFields?2:0,t,e,s);jl("Data must be an object, but it was:",l,r);const u=Ul(r,l);let f,d;if(o.merge)f=new Rt(l.fieldMask),d=l.fieldTransforms;else if(o.mergeFields){const I=[];for(const A of o.mergeFields){const S=lm(t,A,e);if(!l.contains(S))throw new N(b.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);hm(I,S)||I.push(S)}f=new Rt(I),d=l.fieldTransforms.filter(A=>f.covers(A.field))}else f=null,d=l.fieldTransforms;return new im(new At(u),f,d)}function Fl(n,t){if(Bl(n=oe(n)))return jl("Unsupported field value:",t,n),Ul(n,t);if(n instanceof Ol)return function(r,s){if(!Ll(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(r,s){const o=[];let l=0;for(const u of r){let f=Fl(u,s.Ku(l));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),l++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ed(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=tt.fromDate(r);return{timestampValue:ui(s.serializer,o)}}if(r instanceof tt){const o=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ui(s.serializer,o)}}if(r instanceof Ml)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ln)return{bytesValue:kd(s.serializer,r._byteString)};if(r instanceof Ot){const o=s.databaseId,l=r.firestore._databaseId;if(!l.isEqual(o))throw s.Wu(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ml(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof xl)return function(l,u){return{mapValue:{fields:{[Ka]:{stringValue:Wa},[si]:{arrayValue:{values:l.toArray().map(d=>{if(typeof d!="number")throw u.Wu("VectorValues must only contain numeric values.");return Li(u.serializer,d)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${qi(r)}`)}(n,t)}function Ul(n,t){const e={};return $a(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Pe(n,(r,s)=>{const o=Fl(s,t.qu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Bl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof tt||n instanceof Ml||n instanceof ln||n instanceof Ot||n instanceof Ol||n instanceof xl)}function jl(n,t,e){if(!Bl(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=qi(e);throw r==="an object"?t.Wu(n+" a custom object"):t.Wu(n+" "+r)}}function lm(n,t,e){if((t=oe(t))instanceof Nl)return t._internalPath;if(typeof t=="string")return um(n,t);throw ir("Field path arguments must be of type string or ",n,!1,void 0,e)}const cm=new RegExp("[~\\*/\\[\\]]");function um(n,t,e){if(t.search(cm)>=0)throw ir(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Nl(...t.split("."))._internalPath}catch{throw ir(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ir(n,t,e,r,s){const o=r&&!r.isEmpty(),l=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let f="";return(o||l)&&(f+=" (found",o&&(f+=` in field ${r}`),l&&(f+=` in document ${s}`),f+=")"),new N(b.INVALID_ARGUMENT,u+n+f)}function hm(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */function fm(n,t,e){let r;return r=n?n.toFirestore(t):t,r}function dm(n,t){const e=Vl(n.firestore,kl),r=Zp(n),s=fm(n.converter,t);return pm(e,[am(om(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Nt.exists(!1))]).then(()=>r)}function pm(n,t){return function(r,s){const o=new ie;return r.asyncQueue.enqueueAndForget(async()=>Bp(await Qp(r),s,o)),o.promise}(em(n),t)}(function(t,e=!0){(function(s){Ce=s})(Wu),zt(new Mt("firestore",(r,{instanceIdentifier:s,options:o})=>{const l=r.getProvider("app").getImmediate(),u=new kl(new Pf(r.getProvider("auth-internal")),new kf(l,r.getProvider("app-check-internal")),function(d,I){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xn(d.options.projectId,I)}(l,s),l);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),St(fo,po,t),St(fo,po,"esm2017")})();const mm={apiKey:"AIzaSyD-ez1DM8kB7DTMmyAibGf-tliEi81yb0I",authDomain:"grounded-7832a.firebaseapp.com",projectId:"grounded-7832a",storageBucket:"grounded-7832a.firebasestorage.app",messagingSenderId:"546799366765",appId:"1:546799366765:web:6e25af929a86b24751c564",measurementId:"G-MSNE0YT0GY"},$l=la(mm);wf($l);const gm=tm($l);function _m(){document.getElementById("navLinks").style.right="0"}function ql(){document.getElementById("navLinks").style.right="-250px"}window.showMenu=_m;window.hideMenu=ql;document.querySelectorAll('a[href^="#"]').forEach(n=>{n.addEventListener("click",function(t){t.preventDefault();const e=this.getAttribute("href"),r=document.querySelector(e);r&&(ql(),window.scrollTo({top:r.offsetTop-70,behavior:"smooth"}))})});function ym(){const n=[{id:"co2-counter",target:10},{id:"miles-counter",target:40},{id:"flights-counter",target:45e3}],t=2500,e=1e3/60,r=Math.ceil(t/e);n.forEach(s=>{const o=document.getElementById(s.id);if(!o)return;const l=s.target/r;let u=0;const f=setInterval(()=>{u+=l,u>=s.target&&(u=s.target,clearInterval(f)),s.id==="co2-counter"||s.id==="miles-counter"?o.textContent=(Math.floor(u*10)/10).toLocaleString():o.textContent=Math.floor(u).toLocaleString()},e)})}let We,Te,mi,gi;document.addEventListener("DOMContentLoaded",function(){We=document.getElementById("waitlist-form"),Te=document.getElementById("success-modal"),mi=document.querySelector(".close"),gi=document.getElementById("close-modal"),We&&We.addEventListener("submit",function(n){n.preventDefault();const t=new FormData(We),e={};t.forEach((s,o)=>{e[o]=s});const r={Name:e.name,Email:e.email,Habit:e.interest};try{(async()=>{const s=await dm(Jp(gm,"grounded"),r);console.log("Document written with ID: ",s.id),Te.style.display="flex",We.reset()})().catch(s=>{console.error("Error adding document: ",s),alert("There was an error submitting your form. Please try again later.")})}catch(s){console.error("Error in form submission: ",s),alert("There was an error submitting your form. Please try again later.")}})});document.addEventListener("DOMContentLoaded",function(){mi&&mi.addEventListener("click",function(){Te.style.display="none"}),gi&&gi.addEventListener("click",function(){Te.style.display="none"}),window.addEventListener("click",function(n){n.target===Te&&(Te.style.display="none")})});document.addEventListener("DOMContentLoaded",function(){const n=document.querySelectorAll(".feature-col");window.innerWidth<=700&&n.forEach(r=>{r.addEventListener("click",function(){n.forEach(s=>s.classList.remove("active")),this.classList.add("active")})});const t=new IntersectionObserver(r=>{r.forEach(s=>{s.isIntersecting&&(s.target.id==="carbon-impact"&&ym(),t.unobserve(s.target))})},{threshold:.5}),e=document.getElementById("carbon-impact");e&&t.observe(e)});function Em(){const n=document.getElementById("user-count-slider"),t=document.getElementById("user-count"),e=document.getElementById("carbon-counter");n&&n.addEventListener("input",function(){const r=this.value;t.textContent=r.toLocaleString();const s=r*36.5;e.textContent=Math.floor(s).toLocaleString()})}document.addEventListener("DOMContentLoaded",function(){document.getElementById("user-count-slider")&&Em()});document.addEventListener("DOMContentLoaded",function(){const n=document.getElementById("cookieConsent"),t=document.getElementById("cookieAccept"),e=document.getElementById("cookieSettings"),r=document.getElementById("cookieSettingsPanel"),s=document.getElementById("cookieSave"),o=document.getElementById("analyticsConsent"),l=document.getElementById("marketingConsent"),u=localStorage.getItem("cookieConsent");if(!u)setTimeout(()=>{n.style.display="block"},1e3);else{const f=JSON.parse(u);f.analytics&&console.log("Analytics cookies enabled"),f.marketing&&console.log("Marketing cookies enabled")}t.addEventListener("click",function(){const f={necessary:!0,analytics:!0,marketing:!0};localStorage.setItem("cookieConsent",JSON.stringify(f)),console.log("All cookies accepted"),n.style.display="none"}),e.addEventListener("click",function(){r.style.display="block";const f=localStorage.getItem("cookieConsent");if(f){const d=JSON.parse(f);o.checked=d.analytics||!1,l.checked=d.marketing||!1}}),s.addEventListener("click",function(){const f={necessary:!0,analytics:o.checked,marketing:l.checked};localStorage.setItem("cookieConsent",JSON.stringify(f)),f.analytics&&console.log("Analytics cookies enabled"),f.marketing&&console.log("Marketing cookies enabled"),n.style.display="none"})});window.onclick=function(n){const t=document.getElementById("socialPopup");n.target==t&&(t.style.display="none")};
