/* empty css               */(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const g of f.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&o(g)}).observe(document,{childList:!0,subtree:!0});function s(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(l){if(l.ep)return;l.ep=!0;const f=s(l);fetch(l.href,f)}})();const Rr=()=>{};var Si={};/**
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
 */const is=function(n){const e=[];let s=0;for(let o=0;o<n.length;o++){let l=n.charCodeAt(o);l<128?e[s++]=l:l<2048?(e[s++]=l>>6|192,e[s++]=l&63|128):(l&64512)===55296&&o+1<n.length&&(n.charCodeAt(o+1)&64512)===56320?(l=65536+((l&1023)<<10)+(n.charCodeAt(++o)&1023),e[s++]=l>>18|240,e[s++]=l>>12&63|128,e[s++]=l>>6&63|128,e[s++]=l&63|128):(e[s++]=l>>12|224,e[s++]=l>>6&63|128,e[s++]=l&63|128)}return e},Pr=function(n){const e=[];let s=0,o=0;for(;s<n.length;){const l=n[s++];if(l<128)e[o++]=String.fromCharCode(l);else if(l>191&&l<224){const f=n[s++];e[o++]=String.fromCharCode((l&31)<<6|f&63)}else if(l>239&&l<365){const f=n[s++],g=n[s++],w=n[s++],E=((l&7)<<18|(f&63)<<12|(g&63)<<6|w&63)-65536;e[o++]=String.fromCharCode(55296+(E>>10)),e[o++]=String.fromCharCode(56320+(E&1023))}else{const f=n[s++],g=n[s++];e[o++]=String.fromCharCode((l&15)<<12|(f&63)<<6|g&63)}}return e.join("")},ss={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let l=0;l<n.length;l+=3){const f=n[l],g=l+1<n.length,w=g?n[l+1]:0,E=l+2<n.length,A=E?n[l+2]:0,k=f>>2,_=(f&3)<<4|w>>4;let b=(w&15)<<2|A>>6,R=A&63;E||(R=64,g||(b=64)),o.push(s[k],s[_],s[b],s[R])}return o.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(is(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Pr(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const s=e?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let l=0;l<n.length;){const f=s[n.charAt(l++)],w=l<n.length?s[n.charAt(l)]:0;++l;const A=l<n.length?s[n.charAt(l)]:64;++l;const _=l<n.length?s[n.charAt(l)]:64;if(++l,f==null||w==null||A==null||_==null)throw new Or;const b=f<<2|w>>4;if(o.push(b),A!==64){const R=w<<4&240|A>>2;if(o.push(R),_!==64){const D=A<<6&192|_;o.push(D)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Or extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lr=function(n){const e=is(n);return ss.encodeByteArray(e,!0)},Ie=function(n){return Lr(n).replace(/\./g,"")},Nr=function(n){try{return ss.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const Br=()=>Mr().__FIREBASE_DEFAULTS__,jr=()=>{if(typeof process>"u"||typeof Si>"u")return;const n=Si.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Fr=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Nr(n[1]);return e&&JSON.parse(e)},rs=()=>{try{return Rr()||Br()||jr()||Fr()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xr=n=>{var e,s;return(s=(e=rs())===null||e===void 0?void 0:e.emulatorHosts)===null||s===void 0?void 0:s[n]},$r=n=>{const e=xr(n);if(!e)return;const s=e.lastIndexOf(":");if(s<=0||s+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const o=parseInt(e.substring(s+1),10);return e[0]==="["?[e.substring(1,s-1),o]:[e.substring(0,s),o]},os=()=>{var n;return(n=rs())===null||n===void 0?void 0:n.config};/**
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
 */class Ur{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,s)=>{this.resolve=e,this.reject=s})}wrapCallback(e){return(s,o)=>{s?this.reject(s):this.resolve(o),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(s):e(s,o))}}}/**
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
 */function Hr(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const s={alg:"none",type:"JWT"},o=e||"demo-project",l=n.iat||0,f=n.sub||n.user_id;if(!f)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const g=Object.assign({iss:`https://securetoken.google.com/${o}`,aud:o,iat:l,exp:l+3600,auth_time:l,sub:f,user_id:f,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ie(JSON.stringify(s)),Ie(JSON.stringify(g)),""].join(".")}function Vr(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function as(){try{return typeof indexedDB=="object"}catch{return!1}}function ls(){return new Promise((n,e)=>{try{let s=!0;const o="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(o);l.onsuccess=()=>{l.result.close(),s||self.indexedDB.deleteDatabase(o),n(!0)},l.onupgradeneeded=()=>{s=!1},l.onerror=()=>{var f;e(((f=l.error)===null||f===void 0?void 0:f.message)||"")}}catch(s){e(s)}})}function zr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Gr="FirebaseError";class yt extends Error{constructor(e,s,o){super(s),this.code=e,this.customData=o,this.name=Gr,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,be.prototype.create)}}class be{constructor(e,s,o){this.service=e,this.serviceName=s,this.errors=o}create(e,...s){const o=s[0]||{},l=`${this.service}/${e}`,f=this.errors[e],g=f?qr(f,o):"Error",w=`${this.serviceName}: ${g} (${l}).`;return new yt(l,w,o)}}function qr(n,e){return n.replace(Kr,(s,o)=>{const l=e[o];return l!=null?String(l):`<${o}?>`})}const Kr=/\{\$([^}]+)}/g;function Qt(n,e){if(n===e)return!0;const s=Object.keys(n),o=Object.keys(e);for(const l of s){if(!o.includes(l))return!1;const f=n[l],g=e[l];if(Ci(f)&&Ci(g)){if(!Qt(f,g))return!1}else if(f!==g)return!1}for(const l of o)if(!s.includes(l))return!1;return!0}function Ci(n){return n!==null&&typeof n=="object"}/**
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
 */const Wr=1e3,Xr=2,Jr=4*60*60*1e3,Yr=.5;function Di(n,e=Wr,s=Xr){const o=e*Math.pow(s,n),l=Math.round(Yr*o*(Math.random()-.5)*2);return Math.min(Jr,o+l)}/**
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
 */function hs(n){return n&&n._delegate?n._delegate:n}class lt{constructor(e,s,o){this.name=e,this.instanceFactory=s,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Et="[DEFAULT]";/**
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
 */class Zr{constructor(e,s){this.name=e,this.container=s,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const s=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(s)){const o=new Ur;if(this.instancesDeferred.set(s,o),this.isInitialized(s)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:s});l&&o.resolve(l)}catch{}}return this.instancesDeferred.get(s).promise}getImmediate(e){var s;const o=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(s=e==null?void 0:e.optional)!==null&&s!==void 0?s:!1;if(this.isInitialized(o)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:o})}catch(f){if(l)return null;throw f}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(to(e))try{this.getOrInitializeService({instanceIdentifier:Et})}catch{}for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);try{const f=this.getOrInitializeService({instanceIdentifier:l});o.resolve(f)}catch{}}}}clearInstance(e=Et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(s=>"INTERNAL"in s).map(s=>s.INTERNAL.delete()),...e.filter(s=>"_delete"in s).map(s=>s._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Et){return this.instances.has(e)}getOptions(e=Et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:s={}}=e,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:o,options:s});for(const[f,g]of this.instancesDeferred.entries()){const w=this.normalizeInstanceIdentifier(f);o===w&&g.resolve(l)}return l}onInit(e,s){var o;const l=this.normalizeInstanceIdentifier(s),f=(o=this.onInitCallbacks.get(l))!==null&&o!==void 0?o:new Set;f.add(e),this.onInitCallbacks.set(l,f);const g=this.instances.get(l);return g&&e(g,l),()=>{f.delete(e)}}invokeOnInitCallbacks(e,s){const o=this.onInitCallbacks.get(s);if(o)for(const l of o)try{l(e,s)}catch{}}getOrInitializeService({instanceIdentifier:e,options:s={}}){let o=this.instances.get(e);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:Qr(e),options:s}),this.instances.set(e,o),this.instancesOptions.set(e,s),this.invokeOnInitCallbacks(o,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,o)}catch{}return o||null}normalizeInstanceIdentifier(e=Et){return this.component?this.component.multipleInstances?e:Et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qr(n){return n===Et?void 0:n}function to(n){return n.instantiationMode==="EAGER"}/**
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
 */class eo{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const s=this.getProvider(e.name);if(s.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);s.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const s=new Zr(e,this);return this.providers.set(e,s),s}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var P;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(P||(P={}));const no={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},io=P.INFO,so={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},ro=(n,e,...s)=>{if(e<n.logLevel)return;const o=new Date().toISOString(),l=so[e];if(l)console[l](`[${o}]  ${n.name}:`,...s);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vn{constructor(e){this.name=e,this._logLevel=io,this._logHandler=ro,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in P))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?no[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...e),this._logHandler(this,P.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...e),this._logHandler(this,P.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,P.INFO,...e),this._logHandler(this,P.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,P.WARN,...e),this._logHandler(this,P.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...e),this._logHandler(this,P.ERROR,...e)}}const oo=(n,e)=>e.some(s=>n instanceof s);let ki,Ri;function ao(){return ki||(ki=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lo(){return Ri||(Ri=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cs=new WeakMap,un=new WeakMap,us=new WeakMap,tn=new WeakMap,wn=new WeakMap;function ho(n){const e=new Promise((s,o)=>{const l=()=>{n.removeEventListener("success",f),n.removeEventListener("error",g)},f=()=>{s(pt(n.result)),l()},g=()=>{o(n.error),l()};n.addEventListener("success",f),n.addEventListener("error",g)});return e.then(s=>{s instanceof IDBCursor&&cs.set(s,n)}).catch(()=>{}),wn.set(e,n),e}function co(n){if(un.has(n))return;const e=new Promise((s,o)=>{const l=()=>{n.removeEventListener("complete",f),n.removeEventListener("error",g),n.removeEventListener("abort",g)},f=()=>{s(),l()},g=()=>{o(n.error||new DOMException("AbortError","AbortError")),l()};n.addEventListener("complete",f),n.addEventListener("error",g),n.addEventListener("abort",g)});un.set(n,e)}let fn={get(n,e,s){if(n instanceof IDBTransaction){if(e==="done")return un.get(n);if(e==="objectStoreNames")return n.objectStoreNames||us.get(n);if(e==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return pt(n[e])},set(n,e,s){return n[e]=s,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function uo(n){fn=n(fn)}function fo(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...s){const o=n.call(en(this),e,...s);return us.set(o,e.sort?e.sort():[e]),pt(o)}:lo().includes(n)?function(...e){return n.apply(en(this),e),pt(cs.get(this))}:function(...e){return pt(n.apply(en(this),e))}}function po(n){return typeof n=="function"?fo(n):(n instanceof IDBTransaction&&co(n),oo(n,ao())?new Proxy(n,fn):n)}function pt(n){if(n instanceof IDBRequest)return ho(n);if(tn.has(n))return tn.get(n);const e=po(n);return e!==n&&(tn.set(n,e),wn.set(e,n)),e}const en=n=>wn.get(n);function fs(n,e,{blocked:s,upgrade:o,blocking:l,terminated:f}={}){const g=indexedDB.open(n,e),w=pt(g);return o&&g.addEventListener("upgradeneeded",E=>{o(pt(g.result),E.oldVersion,E.newVersion,pt(g.transaction),E)}),s&&g.addEventListener("blocked",E=>s(E.oldVersion,E.newVersion,E)),w.then(E=>{f&&E.addEventListener("close",()=>f()),l&&E.addEventListener("versionchange",A=>l(A.oldVersion,A.newVersion,A))}).catch(()=>{}),w}const go=["get","getKey","getAll","getAllKeys","count"],mo=["put","add","delete","clear"],nn=new Map;function Pi(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(nn.get(e))return nn.get(e);const s=e.replace(/FromIndex$/,""),o=e!==s,l=mo.includes(s);if(!(s in(o?IDBIndex:IDBObjectStore).prototype)||!(l||go.includes(s)))return;const f=async function(g,...w){const E=this.transaction(g,l?"readwrite":"readonly");let A=E.store;return o&&(A=A.index(w.shift())),(await Promise.all([A[s](...w),l&&E.done]))[0]};return nn.set(e,f),f}uo(n=>({...n,get:(e,s,o)=>Pi(e,s)||n.get(e,s,o),has:(e,s)=>!!Pi(e,s)||n.has(e,s)}));/**
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
 */class yo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(vo(s)){const o=s.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(s=>s).join(" ")}}function vo(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dn="@firebase/app",Oi="0.11.4";/**
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
 */const ht=new vn("@firebase/app"),wo="@firebase/app-compat",Io="@firebase/analytics-compat",Eo="@firebase/analytics",To="@firebase/app-check-compat",Ao="@firebase/app-check",_o="@firebase/auth",bo="@firebase/auth-compat",So="@firebase/database",Co="@firebase/data-connect",Do="@firebase/database-compat",ko="@firebase/functions",Ro="@firebase/functions-compat",Po="@firebase/installations",Oo="@firebase/installations-compat",Lo="@firebase/messaging",No="@firebase/messaging-compat",Mo="@firebase/performance",Bo="@firebase/performance-compat",jo="@firebase/remote-config",Fo="@firebase/remote-config-compat",xo="@firebase/storage",$o="@firebase/storage-compat",Uo="@firebase/firestore",Ho="@firebase/vertexai",Vo="@firebase/firestore-compat",zo="firebase",Go="11.6.0";/**
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
 */const pn="[DEFAULT]",qo={[dn]:"fire-core",[wo]:"fire-core-compat",[Eo]:"fire-analytics",[Io]:"fire-analytics-compat",[Ao]:"fire-app-check",[To]:"fire-app-check-compat",[_o]:"fire-auth",[bo]:"fire-auth-compat",[So]:"fire-rtdb",[Co]:"fire-data-connect",[Do]:"fire-rtdb-compat",[ko]:"fire-fn",[Ro]:"fire-fn-compat",[Po]:"fire-iid",[Oo]:"fire-iid-compat",[Lo]:"fire-fcm",[No]:"fire-fcm-compat",[Mo]:"fire-perf",[Bo]:"fire-perf-compat",[jo]:"fire-rc",[Fo]:"fire-rc-compat",[xo]:"fire-gcs",[$o]:"fire-gcs-compat",[Uo]:"fire-fst",[Vo]:"fire-fst-compat",[Ho]:"fire-vertex","fire-js":"fire-js",[zo]:"fire-js-all"};/**
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
 */const Ee=new Map,Ko=new Map,gn=new Map;function Li(n,e){try{n.container.addComponent(e)}catch(s){ht.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,s)}}function mt(n){const e=n.name;if(gn.has(e))return ht.debug(`There were multiple attempts to register component ${e}.`),!1;gn.set(e,n);for(const s of Ee.values())Li(s,n);for(const s of Ko.values())Li(s,n);return!0}function ee(n,e){const s=n.container.getProvider("heartbeat").getImmediate({optional:!0});return s&&s.triggerHeartbeat(),n.container.getProvider(e)}function Wo(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Xo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gt=new be("app","Firebase",Xo);/**
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
 */class Jo{constructor(e,s,o){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},s),this._name=s.name,this._automaticDataCollectionEnabled=s.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}/**
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
 */const Yo=Go;function ds(n,e={}){let s=n;typeof e!="object"&&(e={name:e});const o=Object.assign({name:pn,automaticDataCollectionEnabled:!1},e),l=o.name;if(typeof l!="string"||!l)throw gt.create("bad-app-name",{appName:String(l)});if(s||(s=os()),!s)throw gt.create("no-options");const f=Ee.get(l);if(f){if(Qt(s,f.options)&&Qt(o,f.config))return f;throw gt.create("duplicate-app",{appName:l})}const g=new eo(l);for(const E of gn.values())g.addComponent(E);const w=new Jo(s,o,g);return Ee.set(l,w),w}function ps(n=pn){const e=Ee.get(n);if(!e&&n===pn&&os())return ds();if(!e)throw gt.create("no-app",{appName:n});return e}function nt(n,e,s){var o;let l=(o=qo[n])!==null&&o!==void 0?o:n;s&&(l+=`-${s}`);const f=l.match(/\s|\//),g=e.match(/\s|\//);if(f||g){const w=[`Unable to register library "${l}" with version "${e}":`];f&&w.push(`library name "${l}" contains illegal characters (whitespace or "/")`),f&&g&&w.push("and"),g&&w.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ht.warn(w.join(" "));return}mt(new lt(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const Zo="firebase-heartbeat-database",Qo=1,te="firebase-heartbeat-store";let sn=null;function gs(){return sn||(sn=fs(Zo,Qo,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(te)}catch(s){console.warn(s)}}}}).catch(n=>{throw gt.create("idb-open",{originalErrorMessage:n.message})})),sn}async function ta(n){try{const s=(await gs()).transaction(te),o=await s.objectStore(te).get(ms(n));return await s.done,o}catch(e){if(e instanceof yt)ht.warn(e.message);else{const s=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ht.warn(s.message)}}}async function Ni(n,e){try{const o=(await gs()).transaction(te,"readwrite");await o.objectStore(te).put(e,ms(n)),await o.done}catch(s){if(s instanceof yt)ht.warn(s.message);else{const o=gt.create("idb-set",{originalErrorMessage:s==null?void 0:s.message});ht.warn(o.message)}}}function ms(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ea=1024,na=30;class ia{constructor(e){this.container=e,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new ra(s),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){var e,s;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),f=Mi();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((s=this._heartbeatsCache)===null||s===void 0?void 0:s.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===f||this._heartbeatsCache.heartbeats.some(g=>g.date===f))return;if(this._heartbeatsCache.heartbeats.push({date:f,agent:l}),this._heartbeatsCache.heartbeats.length>na){const g=oa(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(g,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(o){ht.warn(o)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const s=Mi(),{heartbeatsToSend:o,unsentEntries:l}=sa(this._heartbeatsCache.heartbeats),f=Ie(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=s,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),f}catch(s){return ht.warn(s),""}}}function Mi(){return new Date().toISOString().substring(0,10)}function sa(n,e=ea){const s=[];let o=n.slice();for(const l of n){const f=s.find(g=>g.agent===l.agent);if(f){if(f.dates.push(l.date),Bi(s)>e){f.dates.pop();break}}else if(s.push({agent:l.agent,dates:[l.date]}),Bi(s)>e){s.pop();break}o=o.slice(1)}return{heartbeatsToSend:s,unsentEntries:o}}class ra{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return as()?ls().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const s=await ta(this.app);return s!=null&&s.heartbeats?s:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var s;if(await this._canUseIndexedDBPromise){const l=await this.read();return Ni(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!==null&&s!==void 0?s:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var s;if(await this._canUseIndexedDBPromise){const l=await this.read();return Ni(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!==null&&s!==void 0?s:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function Bi(n){return Ie(JSON.stringify({version:2,heartbeats:n})).length}function oa(n){if(n.length===0)return-1;let e=0,s=n[0].date;for(let o=1;o<n.length;o++)n[o].date<s&&(s=n[o].date,e=o);return e}/**
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
 */function aa(n){mt(new lt("platform-logger",e=>new yo(e),"PRIVATE")),mt(new lt("heartbeat",e=>new ia(e),"PRIVATE")),nt(dn,Oi,n),nt(dn,Oi,"esm2017"),nt("fire-js","")}aa("");var la="firebase",ha="11.6.0";/**
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
 */nt(la,ha,"app");const ys="@firebase/installations",In="0.6.13";/**
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
 */const vs=1e4,ws=`w:${In}`,Is="FIS_v2",ca="https://firebaseinstallations.googleapis.com/v1",ua=60*60*1e3,fa="installations",da="Installations";/**
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
 */const pa={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},At=new be(fa,da,pa);function Es(n){return n instanceof yt&&n.code.includes("request-failed")}/**
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
 */function Ts({projectId:n}){return`${ca}/projects/${n}/installations`}function As(n){return{token:n.token,requestStatus:2,expiresIn:ma(n.expiresIn),creationTime:Date.now()}}async function _s(n,e){const o=(await e.json()).error;return At.create("request-failed",{requestName:n,serverCode:o.code,serverMessage:o.message,serverStatus:o.status})}function bs({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function ga(n,{refreshToken:e}){const s=bs(n);return s.append("Authorization",ya(e)),s}async function Ss(n){const e=await n();return e.status>=500&&e.status<600?n():e}function ma(n){return Number(n.replace("s","000"))}function ya(n){return`${Is} ${n}`}/**
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
 */async function va({appConfig:n,heartbeatServiceProvider:e},{fid:s}){const o=Ts(n),l=bs(n),f=e.getImmediate({optional:!0});if(f){const A=await f.getHeartbeatsHeader();A&&l.append("x-firebase-client",A)}const g={fid:s,authVersion:Is,appId:n.appId,sdkVersion:ws},w={method:"POST",headers:l,body:JSON.stringify(g)},E=await Ss(()=>fetch(o,w));if(E.ok){const A=await E.json();return{fid:A.fid||s,registrationStatus:2,refreshToken:A.refreshToken,authToken:As(A.authToken)}}else throw await _s("Create Installation",E)}/**
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
 */function wa(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Ia=/^[cdef][\w-]{21}$/,mn="";function Ea(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const s=Ta(n);return Ia.test(s)?s:mn}catch{return mn}}function Ta(n){return wa(n).substr(0,22)}/**
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
 */const Ds=new Map;function ks(n,e){const s=Se(n);Rs(s,e),Aa(s,e)}function Rs(n,e){const s=Ds.get(n);if(s)for(const o of s)o(e)}function Aa(n,e){const s=_a();s&&s.postMessage({key:n,fid:e}),ba()}let Tt=null;function _a(){return!Tt&&"BroadcastChannel"in self&&(Tt=new BroadcastChannel("[Firebase] FID Change"),Tt.onmessage=n=>{Rs(n.data.key,n.data.fid)}),Tt}function ba(){Ds.size===0&&Tt&&(Tt.close(),Tt=null)}/**
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
 */const Sa="firebase-installations-database",Ca=1,_t="firebase-installations-store";let rn=null;function En(){return rn||(rn=fs(Sa,Ca,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(_t)}}})),rn}async function Te(n,e){const s=Se(n),l=(await En()).transaction(_t,"readwrite"),f=l.objectStore(_t),g=await f.get(s);return await f.put(e,s),await l.done,(!g||g.fid!==e.fid)&&ks(n,e.fid),e}async function Ps(n){const e=Se(n),o=(await En()).transaction(_t,"readwrite");await o.objectStore(_t).delete(e),await o.done}async function Ce(n,e){const s=Se(n),l=(await En()).transaction(_t,"readwrite"),f=l.objectStore(_t),g=await f.get(s),w=e(g);return w===void 0?await f.delete(s):await f.put(w,s),await l.done,w&&(!g||g.fid!==w.fid)&&ks(n,w.fid),w}/**
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
 */async function Tn(n){let e;const s=await Ce(n.appConfig,o=>{const l=Da(o),f=ka(n,l);return e=f.registrationPromise,f.installationEntry});return s.fid===mn?{installationEntry:await e}:{installationEntry:s,registrationPromise:e}}function Da(n){const e=n||{fid:Ea(),registrationStatus:0};return Os(e)}function ka(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(At.create("app-offline"));return{installationEntry:e,registrationPromise:l}}const s={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},o=Ra(n,s);return{installationEntry:s,registrationPromise:o}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Pa(n)}:{installationEntry:e}}async function Ra(n,e){try{const s=await va(n,e);return Te(n.appConfig,s)}catch(s){throw Es(s)&&s.customData.serverCode===409?await Ps(n.appConfig):await Te(n.appConfig,{fid:e.fid,registrationStatus:0}),s}}async function Pa(n){let e=await ji(n.appConfig);for(;e.registrationStatus===1;)await Cs(100),e=await ji(n.appConfig);if(e.registrationStatus===0){const{installationEntry:s,registrationPromise:o}=await Tn(n);return o||s}return e}function ji(n){return Ce(n,e=>{if(!e)throw At.create("installation-not-found");return Os(e)})}function Os(n){return Oa(n)?{fid:n.fid,registrationStatus:0}:n}function Oa(n){return n.registrationStatus===1&&n.registrationTime+vs<Date.now()}/**
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
 */async function La({appConfig:n,heartbeatServiceProvider:e},s){const o=Na(n,s),l=ga(n,s),f=e.getImmediate({optional:!0});if(f){const A=await f.getHeartbeatsHeader();A&&l.append("x-firebase-client",A)}const g={installation:{sdkVersion:ws,appId:n.appId}},w={method:"POST",headers:l,body:JSON.stringify(g)},E=await Ss(()=>fetch(o,w));if(E.ok){const A=await E.json();return As(A)}else throw await _s("Generate Auth Token",E)}function Na(n,{fid:e}){return`${Ts(n)}/${e}/authTokens:generate`}/**
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
 */async function An(n,e=!1){let s;const o=await Ce(n.appConfig,f=>{if(!Ls(f))throw At.create("not-registered");const g=f.authToken;if(!e&&ja(g))return f;if(g.requestStatus===1)return s=Ma(n,e),f;{if(!navigator.onLine)throw At.create("app-offline");const w=xa(f);return s=Ba(n,w),w}});return s?await s:o.authToken}async function Ma(n,e){let s=await Fi(n.appConfig);for(;s.authToken.requestStatus===1;)await Cs(100),s=await Fi(n.appConfig);const o=s.authToken;return o.requestStatus===0?An(n,e):o}function Fi(n){return Ce(n,e=>{if(!Ls(e))throw At.create("not-registered");const s=e.authToken;return $a(s)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Ba(n,e){try{const s=await La(n,e),o=Object.assign(Object.assign({},e),{authToken:s});return await Te(n.appConfig,o),s}catch(s){if(Es(s)&&(s.customData.serverCode===401||s.customData.serverCode===404))await Ps(n.appConfig);else{const o=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Te(n.appConfig,o)}throw s}}function Ls(n){return n!==void 0&&n.registrationStatus===2}function ja(n){return n.requestStatus===2&&!Fa(n)}function Fa(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+ua}function xa(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function $a(n){return n.requestStatus===1&&n.requestTime+vs<Date.now()}/**
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
 */async function Ua(n){const e=n,{installationEntry:s,registrationPromise:o}=await Tn(e);return o?o.catch(console.error):An(e).catch(console.error),s.fid}/**
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
 */async function Ha(n,e=!1){const s=n;return await Va(s),(await An(s,e)).token}async function Va(n){const{registrationPromise:e}=await Tn(n);e&&await e}/**
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
 */function za(n){if(!n||!n.options)throw on("App Configuration");if(!n.name)throw on("App Name");const e=["projectId","apiKey","appId"];for(const s of e)if(!n.options[s])throw on(s);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function on(n){return At.create("missing-app-config-values",{valueName:n})}/**
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
 */const Ns="installations",Ga="installations-internal",qa=n=>{const e=n.getProvider("app").getImmediate(),s=za(e),o=ee(e,"heartbeat");return{app:e,appConfig:s,heartbeatServiceProvider:o,_delete:()=>Promise.resolve()}},Ka=n=>{const e=n.getProvider("app").getImmediate(),s=ee(e,Ns).getImmediate();return{getId:()=>Ua(s),getToken:l=>Ha(s,l)}};function Wa(){mt(new lt(Ns,qa,"PUBLIC")),mt(new lt(Ga,Ka,"PRIVATE"))}Wa();nt(ys,In);nt(ys,In,"esm2017");/**
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
 */const Ae="analytics",Xa="firebase_id",Ja="origin",Ya=60*1e3,Za="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_n="https://www.googletagmanager.com/gtag/js";/**
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
 */const W=new vn("@firebase/analytics");/**
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
 */const Qa={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},J=new be("analytics","Analytics",Qa);/**
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
 */function tl(n){if(!n.startsWith(_n)){const e=J.create("invalid-gtag-resource",{gtagURL:n});return W.warn(e.message),""}return n}function Ms(n){return Promise.all(n.map(e=>e.catch(s=>s)))}function el(n,e){let s;return window.trustedTypes&&(s=window.trustedTypes.createPolicy(n,e)),s}function nl(n,e){const s=el("firebase-js-sdk-policy",{createScriptURL:tl}),o=document.createElement("script"),l=`${_n}?l=${n}&id=${e}`;o.src=s?s==null?void 0:s.createScriptURL(l):l,o.async=!0,document.head.appendChild(o)}function il(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function sl(n,e,s,o,l,f){const g=o[l];try{if(g)await e[g];else{const E=(await Ms(s)).find(A=>A.measurementId===l);E&&await e[E.appId]}}catch(w){W.error(w)}n("config",l,f)}async function rl(n,e,s,o,l){try{let f=[];if(l&&l.send_to){let g=l.send_to;Array.isArray(g)||(g=[g]);const w=await Ms(s);for(const E of g){const A=w.find(_=>_.measurementId===E),k=A&&e[A.appId];if(k)f.push(k);else{f=[];break}}}f.length===0&&(f=Object.values(e)),await Promise.all(f),n("event",o,l||{})}catch(f){W.error(f)}}function ol(n,e,s,o){async function l(f,...g){try{if(f==="event"){const[w,E]=g;await rl(n,e,s,w,E)}else if(f==="config"){const[w,E]=g;await sl(n,e,s,o,w,E)}else if(f==="consent"){const[w,E]=g;n("consent",w,E)}else if(f==="get"){const[w,E,A]=g;n("get",w,E,A)}else if(f==="set"){const[w]=g;n("set",w)}else n(f,...g)}catch(w){W.error(w)}}return l}function al(n,e,s,o,l){let f=function(...g){window[o].push(arguments)};return window[l]&&typeof window[l]=="function"&&(f=window[l]),window[l]=ol(f,n,e,s),{gtagCore:f,wrappedGtag:window[l]}}function ll(n){const e=window.document.getElementsByTagName("script");for(const s of Object.values(e))if(s.src&&s.src.includes(_n)&&s.src.includes(n))return s;return null}/**
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
 */const hl=30,cl=1e3;class ul{constructor(e={},s=cl){this.throttleMetadata=e,this.intervalMillis=s}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,s){this.throttleMetadata[e]=s}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Bs=new ul;function fl(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function dl(n){var e;const{appId:s,apiKey:o}=n,l={method:"GET",headers:fl(o)},f=Za.replace("{app-id}",s),g=await fetch(f,l);if(g.status!==200&&g.status!==304){let w="";try{const E=await g.json();!((e=E.error)===null||e===void 0)&&e.message&&(w=E.error.message)}catch{}throw J.create("config-fetch-failed",{httpStatus:g.status,responseMessage:w})}return g.json()}async function pl(n,e=Bs,s){const{appId:o,apiKey:l,measurementId:f}=n.options;if(!o)throw J.create("no-app-id");if(!l){if(f)return{measurementId:f,appId:o};throw J.create("no-api-key")}const g=e.getThrottleMetadata(o)||{backoffCount:0,throttleEndTimeMillis:Date.now()},w=new yl;return setTimeout(async()=>{w.abort()},Ya),js({appId:o,apiKey:l,measurementId:f},g,w,e)}async function js(n,{throttleEndTimeMillis:e,backoffCount:s},o,l=Bs){var f;const{appId:g,measurementId:w}=n;try{await gl(o,e)}catch(E){if(w)return W.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${w} provided in the "measurementId" field in the local Firebase config. [${E==null?void 0:E.message}]`),{appId:g,measurementId:w};throw E}try{const E=await dl(n);return l.deleteThrottleMetadata(g),E}catch(E){const A=E;if(!ml(A)){if(l.deleteThrottleMetadata(g),w)return W.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${w} provided in the "measurementId" field in the local Firebase config. [${A==null?void 0:A.message}]`),{appId:g,measurementId:w};throw E}const k=Number((f=A==null?void 0:A.customData)===null||f===void 0?void 0:f.httpStatus)===503?Di(s,l.intervalMillis,hl):Di(s,l.intervalMillis),_={throttleEndTimeMillis:Date.now()+k,backoffCount:s+1};return l.setThrottleMetadata(g,_),W.debug(`Calling attemptFetch again in ${k} millis`),js(n,_,o,l)}}function gl(n,e){return new Promise((s,o)=>{const l=Math.max(e-Date.now(),0),f=setTimeout(s,l);n.addEventListener(()=>{clearTimeout(f),o(J.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ml(n){if(!(n instanceof yt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class yl{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function vl(n,e,s,o,l){if(l&&l.global){n("event",s,o);return}else{const f=await e,g=Object.assign(Object.assign({},o),{send_to:f});n("event",s,g)}}/**
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
 */async function wl(){if(as())try{await ls()}catch(n){return W.warn(J.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return W.warn(J.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Il(n,e,s,o,l,f,g){var w;const E=pl(n);E.then(R=>{s[R.measurementId]=R.appId,n.options.measurementId&&R.measurementId!==n.options.measurementId&&W.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>W.error(R)),e.push(E);const A=wl().then(R=>{if(R)return o.getId()}),[k,_]=await Promise.all([E,A]);ll(f)||nl(f,k.measurementId),l("js",new Date);const b=(w=g==null?void 0:g.config)!==null&&w!==void 0?w:{};return b[Ja]="firebase",b.update=!0,_!=null&&(b[Xa]=_),l("config",k.measurementId,b),k.measurementId}/**
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
 */class El{constructor(e){this.app=e}_delete(){return delete Jt[this.app.options.appId],Promise.resolve()}}let Jt={},xi=[];const $i={};let an="dataLayer",Tl="gtag",Ui,Fs,Hi=!1;function Al(){const n=[];if(Vr()&&n.push("This is a browser extension environment."),zr()||n.push("Cookies are not available."),n.length>0){const e=n.map((o,l)=>`(${l+1}) ${o}`).join(" "),s=J.create("invalid-analytics-context",{errorInfo:e});W.warn(s.message)}}function _l(n,e,s){Al();const o=n.options.appId;if(!o)throw J.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)W.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw J.create("no-api-key");if(Jt[o]!=null)throw J.create("already-exists",{id:o});if(!Hi){il(an);const{wrappedGtag:f,gtagCore:g}=al(Jt,xi,$i,an,Tl);Fs=f,Ui=g,Hi=!0}return Jt[o]=Il(n,xi,$i,e,Ui,an,s),new El(n)}function bl(n=ps()){n=hs(n);const e=ee(n,Ae);return e.isInitialized()?e.getImmediate():Sl(n)}function Sl(n,e={}){const s=ee(n,Ae);if(s.isInitialized()){const l=s.getImmediate();if(Qt(e,s.getOptions()))return l;throw J.create("already-initialized")}return s.initialize({options:e})}function xs(n,e,s,o){n=hs(n),vl(Fs,Jt[n.app.options.appId],e,s,o).catch(l=>W.error(l))}const Vi="@firebase/analytics",zi="0.10.12";function Cl(){mt(new lt(Ae,(e,{options:s})=>{const o=e.getProvider("app").getImmediate(),l=e.getProvider("installations-internal").getImmediate();return _l(o,l,s)},"PUBLIC")),mt(new lt("analytics-internal",n,"PRIVATE")),nt(Vi,zi),nt(Vi,zi,"esm2017");function n(e){try{const s=e.getProvider(Ae).getImmediate();return{logEvent:(o,l,f)=>xs(s,o,l,f)}}catch(s){throw J.create("interop-component-reg-failed",{reason:s})}}}Cl();var Gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $s;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(m,h){function u(){}u.prototype=h.prototype,m.D=h.prototype,m.prototype=new u,m.prototype.constructor=m,m.C=function(d,p,v){for(var c=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)c[rt-2]=arguments[rt];return h.prototype[p].apply(d,c)}}function s(){this.blockSize=-1}function o(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(o,s),o.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(m,h,u){u||(u=0);var d=Array(16);if(typeof h=="string")for(var p=0;16>p;++p)d[p]=h.charCodeAt(u++)|h.charCodeAt(u++)<<8|h.charCodeAt(u++)<<16|h.charCodeAt(u++)<<24;else for(p=0;16>p;++p)d[p]=h[u++]|h[u++]<<8|h[u++]<<16|h[u++]<<24;h=m.g[0],u=m.g[1],p=m.g[2];var v=m.g[3],c=h+(v^u&(p^v))+d[0]+3614090360&4294967295;h=u+(c<<7&4294967295|c>>>25),c=v+(p^h&(u^p))+d[1]+3905402710&4294967295,v=h+(c<<12&4294967295|c>>>20),c=p+(u^v&(h^u))+d[2]+606105819&4294967295,p=v+(c<<17&4294967295|c>>>15),c=u+(h^p&(v^h))+d[3]+3250441966&4294967295,u=p+(c<<22&4294967295|c>>>10),c=h+(v^u&(p^v))+d[4]+4118548399&4294967295,h=u+(c<<7&4294967295|c>>>25),c=v+(p^h&(u^p))+d[5]+1200080426&4294967295,v=h+(c<<12&4294967295|c>>>20),c=p+(u^v&(h^u))+d[6]+2821735955&4294967295,p=v+(c<<17&4294967295|c>>>15),c=u+(h^p&(v^h))+d[7]+4249261313&4294967295,u=p+(c<<22&4294967295|c>>>10),c=h+(v^u&(p^v))+d[8]+1770035416&4294967295,h=u+(c<<7&4294967295|c>>>25),c=v+(p^h&(u^p))+d[9]+2336552879&4294967295,v=h+(c<<12&4294967295|c>>>20),c=p+(u^v&(h^u))+d[10]+4294925233&4294967295,p=v+(c<<17&4294967295|c>>>15),c=u+(h^p&(v^h))+d[11]+2304563134&4294967295,u=p+(c<<22&4294967295|c>>>10),c=h+(v^u&(p^v))+d[12]+1804603682&4294967295,h=u+(c<<7&4294967295|c>>>25),c=v+(p^h&(u^p))+d[13]+4254626195&4294967295,v=h+(c<<12&4294967295|c>>>20),c=p+(u^v&(h^u))+d[14]+2792965006&4294967295,p=v+(c<<17&4294967295|c>>>15),c=u+(h^p&(v^h))+d[15]+1236535329&4294967295,u=p+(c<<22&4294967295|c>>>10),c=h+(p^v&(u^p))+d[1]+4129170786&4294967295,h=u+(c<<5&4294967295|c>>>27),c=v+(u^p&(h^u))+d[6]+3225465664&4294967295,v=h+(c<<9&4294967295|c>>>23),c=p+(h^u&(v^h))+d[11]+643717713&4294967295,p=v+(c<<14&4294967295|c>>>18),c=u+(v^h&(p^v))+d[0]+3921069994&4294967295,u=p+(c<<20&4294967295|c>>>12),c=h+(p^v&(u^p))+d[5]+3593408605&4294967295,h=u+(c<<5&4294967295|c>>>27),c=v+(u^p&(h^u))+d[10]+38016083&4294967295,v=h+(c<<9&4294967295|c>>>23),c=p+(h^u&(v^h))+d[15]+3634488961&4294967295,p=v+(c<<14&4294967295|c>>>18),c=u+(v^h&(p^v))+d[4]+3889429448&4294967295,u=p+(c<<20&4294967295|c>>>12),c=h+(p^v&(u^p))+d[9]+568446438&4294967295,h=u+(c<<5&4294967295|c>>>27),c=v+(u^p&(h^u))+d[14]+3275163606&4294967295,v=h+(c<<9&4294967295|c>>>23),c=p+(h^u&(v^h))+d[3]+4107603335&4294967295,p=v+(c<<14&4294967295|c>>>18),c=u+(v^h&(p^v))+d[8]+1163531501&4294967295,u=p+(c<<20&4294967295|c>>>12),c=h+(p^v&(u^p))+d[13]+2850285829&4294967295,h=u+(c<<5&4294967295|c>>>27),c=v+(u^p&(h^u))+d[2]+4243563512&4294967295,v=h+(c<<9&4294967295|c>>>23),c=p+(h^u&(v^h))+d[7]+1735328473&4294967295,p=v+(c<<14&4294967295|c>>>18),c=u+(v^h&(p^v))+d[12]+2368359562&4294967295,u=p+(c<<20&4294967295|c>>>12),c=h+(u^p^v)+d[5]+4294588738&4294967295,h=u+(c<<4&4294967295|c>>>28),c=v+(h^u^p)+d[8]+2272392833&4294967295,v=h+(c<<11&4294967295|c>>>21),c=p+(v^h^u)+d[11]+1839030562&4294967295,p=v+(c<<16&4294967295|c>>>16),c=u+(p^v^h)+d[14]+4259657740&4294967295,u=p+(c<<23&4294967295|c>>>9),c=h+(u^p^v)+d[1]+2763975236&4294967295,h=u+(c<<4&4294967295|c>>>28),c=v+(h^u^p)+d[4]+1272893353&4294967295,v=h+(c<<11&4294967295|c>>>21),c=p+(v^h^u)+d[7]+4139469664&4294967295,p=v+(c<<16&4294967295|c>>>16),c=u+(p^v^h)+d[10]+3200236656&4294967295,u=p+(c<<23&4294967295|c>>>9),c=h+(u^p^v)+d[13]+681279174&4294967295,h=u+(c<<4&4294967295|c>>>28),c=v+(h^u^p)+d[0]+3936430074&4294967295,v=h+(c<<11&4294967295|c>>>21),c=p+(v^h^u)+d[3]+3572445317&4294967295,p=v+(c<<16&4294967295|c>>>16),c=u+(p^v^h)+d[6]+76029189&4294967295,u=p+(c<<23&4294967295|c>>>9),c=h+(u^p^v)+d[9]+3654602809&4294967295,h=u+(c<<4&4294967295|c>>>28),c=v+(h^u^p)+d[12]+3873151461&4294967295,v=h+(c<<11&4294967295|c>>>21),c=p+(v^h^u)+d[15]+530742520&4294967295,p=v+(c<<16&4294967295|c>>>16),c=u+(p^v^h)+d[2]+3299628645&4294967295,u=p+(c<<23&4294967295|c>>>9),c=h+(p^(u|~v))+d[0]+4096336452&4294967295,h=u+(c<<6&4294967295|c>>>26),c=v+(u^(h|~p))+d[7]+1126891415&4294967295,v=h+(c<<10&4294967295|c>>>22),c=p+(h^(v|~u))+d[14]+2878612391&4294967295,p=v+(c<<15&4294967295|c>>>17),c=u+(v^(p|~h))+d[5]+4237533241&4294967295,u=p+(c<<21&4294967295|c>>>11),c=h+(p^(u|~v))+d[12]+1700485571&4294967295,h=u+(c<<6&4294967295|c>>>26),c=v+(u^(h|~p))+d[3]+2399980690&4294967295,v=h+(c<<10&4294967295|c>>>22),c=p+(h^(v|~u))+d[10]+4293915773&4294967295,p=v+(c<<15&4294967295|c>>>17),c=u+(v^(p|~h))+d[1]+2240044497&4294967295,u=p+(c<<21&4294967295|c>>>11),c=h+(p^(u|~v))+d[8]+1873313359&4294967295,h=u+(c<<6&4294967295|c>>>26),c=v+(u^(h|~p))+d[15]+4264355552&4294967295,v=h+(c<<10&4294967295|c>>>22),c=p+(h^(v|~u))+d[6]+2734768916&4294967295,p=v+(c<<15&4294967295|c>>>17),c=u+(v^(p|~h))+d[13]+1309151649&4294967295,u=p+(c<<21&4294967295|c>>>11),c=h+(p^(u|~v))+d[4]+4149444226&4294967295,h=u+(c<<6&4294967295|c>>>26),c=v+(u^(h|~p))+d[11]+3174756917&4294967295,v=h+(c<<10&4294967295|c>>>22),c=p+(h^(v|~u))+d[2]+718787259&4294967295,p=v+(c<<15&4294967295|c>>>17),c=u+(v^(p|~h))+d[9]+3951481745&4294967295,m.g[0]=m.g[0]+h&4294967295,m.g[1]=m.g[1]+(p+(c<<21&4294967295|c>>>11))&4294967295,m.g[2]=m.g[2]+p&4294967295,m.g[3]=m.g[3]+v&4294967295}o.prototype.u=function(m,h){h===void 0&&(h=m.length);for(var u=h-this.blockSize,d=this.B,p=this.h,v=0;v<h;){if(p==0)for(;v<=u;)l(this,m,v),v+=this.blockSize;if(typeof m=="string"){for(;v<h;)if(d[p++]=m.charCodeAt(v++),p==this.blockSize){l(this,d),p=0;break}}else for(;v<h;)if(d[p++]=m[v++],p==this.blockSize){l(this,d),p=0;break}}this.h=p,this.o+=h},o.prototype.v=function(){var m=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);m[0]=128;for(var h=1;h<m.length-8;++h)m[h]=0;var u=8*this.o;for(h=m.length-8;h<m.length;++h)m[h]=u&255,u/=256;for(this.u(m),m=Array(16),h=u=0;4>h;++h)for(var d=0;32>d;d+=8)m[u++]=this.g[h]>>>d&255;return m};function f(m,h){var u=w;return Object.prototype.hasOwnProperty.call(u,m)?u[m]:u[m]=h(m)}function g(m,h){this.h=h;for(var u=[],d=!0,p=m.length-1;0<=p;p--){var v=m[p]|0;d&&v==h||(u[p]=v,d=!1)}this.g=u}var w={};function E(m){return-128<=m&&128>m?f(m,function(h){return new g([h|0],0>h?-1:0)}):new g([m|0],0>m?-1:0)}function A(m){if(isNaN(m)||!isFinite(m))return _;if(0>m)return N(A(-m));for(var h=[],u=1,d=0;m>=u;d++)h[d]=m/u|0,u*=4294967296;return new g(h,0)}function k(m,h){if(m.length==0)throw Error("number format error: empty string");if(h=h||10,2>h||36<h)throw Error("radix out of range: "+h);if(m.charAt(0)=="-")return N(k(m.substring(1),h));if(0<=m.indexOf("-"))throw Error('number format error: interior "-" character');for(var u=A(Math.pow(h,8)),d=_,p=0;p<m.length;p+=8){var v=Math.min(8,m.length-p),c=parseInt(m.substring(p,p+v),h);8>v?(v=A(Math.pow(h,v)),d=d.j(v).add(A(c))):(d=d.j(u),d=d.add(A(c)))}return d}var _=E(0),b=E(1),R=E(16777216);n=g.prototype,n.m=function(){if(B(this))return-N(this).m();for(var m=0,h=1,u=0;u<this.g.length;u++){var d=this.i(u);m+=(0<=d?d:4294967296+d)*h,h*=4294967296}return m},n.toString=function(m){if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(D(this))return"0";if(B(this))return"-"+N(this).toString(m);for(var h=A(Math.pow(m,6)),u=this,d="";;){var p=Y(u,h).g;u=it(u,p.j(h));var v=((0<u.g.length?u.g[0]:u.h)>>>0).toString(m);if(u=p,D(u))return v+d;for(;6>v.length;)v="0"+v;d=v+d}},n.i=function(m){return 0>m?0:m<this.g.length?this.g[m]:this.h};function D(m){if(m.h!=0)return!1;for(var h=0;h<m.g.length;h++)if(m.g[h]!=0)return!1;return!0}function B(m){return m.h==-1}n.l=function(m){return m=it(this,m),B(m)?-1:D(m)?0:1};function N(m){for(var h=m.g.length,u=[],d=0;d<h;d++)u[d]=~m.g[d];return new g(u,~m.h).add(b)}n.abs=function(){return B(this)?N(this):this},n.add=function(m){for(var h=Math.max(this.g.length,m.g.length),u=[],d=0,p=0;p<=h;p++){var v=d+(this.i(p)&65535)+(m.i(p)&65535),c=(v>>>16)+(this.i(p)>>>16)+(m.i(p)>>>16);d=c>>>16,v&=65535,c&=65535,u[p]=c<<16|v}return new g(u,u[u.length-1]&-2147483648?-1:0)};function it(m,h){return m.add(N(h))}n.j=function(m){if(D(this)||D(m))return _;if(B(this))return B(m)?N(this).j(N(m)):N(N(this).j(m));if(B(m))return N(this.j(N(m)));if(0>this.l(R)&&0>m.l(R))return A(this.m()*m.m());for(var h=this.g.length+m.g.length,u=[],d=0;d<2*h;d++)u[d]=0;for(d=0;d<this.g.length;d++)for(var p=0;p<m.g.length;p++){var v=this.i(d)>>>16,c=this.i(d)&65535,rt=m.i(p)>>>16,Ot=m.i(p)&65535;u[2*d+2*p]+=c*Ot,Q(u,2*d+2*p),u[2*d+2*p+1]+=v*Ot,Q(u,2*d+2*p+1),u[2*d+2*p+1]+=c*rt,Q(u,2*d+2*p+1),u[2*d+2*p+2]+=v*rt,Q(u,2*d+2*p+2)}for(d=0;d<h;d++)u[d]=u[2*d+1]<<16|u[2*d];for(d=h;d<2*h;d++)u[d]=0;return new g(u,0)};function Q(m,h){for(;(m[h]&65535)!=m[h];)m[h+1]+=m[h]>>>16,m[h]&=65535,h++}function G(m,h){this.g=m,this.h=h}function Y(m,h){if(D(h))throw Error("division by zero");if(D(m))return new G(_,_);if(B(m))return h=Y(N(m),h),new G(N(h.g),N(h.h));if(B(h))return h=Y(m,N(h)),new G(N(h.g),h.h);if(30<m.g.length){if(B(m)||B(h))throw Error("slowDivide_ only works with positive integers.");for(var u=b,d=h;0>=d.l(m);)u=st(u),d=st(d);var p=X(u,1),v=X(d,1);for(d=X(d,2),u=X(u,2);!D(d);){var c=v.add(d);0>=c.l(m)&&(p=p.add(u),v=c),d=X(d,1),u=X(u,1)}return h=it(m,p.j(h)),new G(p,h)}for(p=_;0<=m.l(h);){for(u=Math.max(1,Math.floor(m.m()/h.m())),d=Math.ceil(Math.log(u)/Math.LN2),d=48>=d?1:Math.pow(2,d-48),v=A(u),c=v.j(h);B(c)||0<c.l(m);)u-=d,v=A(u),c=v.j(h);D(v)&&(v=b),p=p.add(v),m=it(m,c)}return new G(p,m)}n.A=function(m){return Y(this,m).h},n.and=function(m){for(var h=Math.max(this.g.length,m.g.length),u=[],d=0;d<h;d++)u[d]=this.i(d)&m.i(d);return new g(u,this.h&m.h)},n.or=function(m){for(var h=Math.max(this.g.length,m.g.length),u=[],d=0;d<h;d++)u[d]=this.i(d)|m.i(d);return new g(u,this.h|m.h)},n.xor=function(m){for(var h=Math.max(this.g.length,m.g.length),u=[],d=0;d<h;d++)u[d]=this.i(d)^m.i(d);return new g(u,this.h^m.h)};function st(m){for(var h=m.g.length+1,u=[],d=0;d<h;d++)u[d]=m.i(d)<<1|m.i(d-1)>>>31;return new g(u,m.h)}function X(m,h){var u=h>>5;h%=32;for(var d=m.g.length-u,p=[],v=0;v<d;v++)p[v]=0<h?m.i(v+u)>>>h|m.i(v+u+1)<<32-h:m.i(v+u);return new g(p,m.h)}o.prototype.digest=o.prototype.v,o.prototype.reset=o.prototype.s,o.prototype.update=o.prototype.u,g.prototype.add=g.prototype.add,g.prototype.multiply=g.prototype.j,g.prototype.modulo=g.prototype.A,g.prototype.compare=g.prototype.l,g.prototype.toNumber=g.prototype.m,g.prototype.toString=g.prototype.toString,g.prototype.getBits=g.prototype.i,g.fromNumber=A,g.fromString=k,$s=g}).apply(typeof Gi<"u"?Gi:typeof self<"u"?self:typeof window<"u"?window:{});var we=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,i,r){return t==Array.prototype||t==Object.prototype||(t[i]=r.value),t};function s(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof we=="object"&&we];for(var i=0;i<t.length;++i){var r=t[i];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}var o=s(this);function l(t,i){if(i)t:{var r=o;t=t.split(".");for(var a=0;a<t.length-1;a++){var y=t[a];if(!(y in r))break t;r=r[y]}t=t[t.length-1],a=r[t],i=i(a),i!=a&&i!=null&&e(r,t,{configurable:!0,writable:!0,value:i})}}function f(t,i){t instanceof String&&(t+="");var r=0,a=!1,y={next:function(){if(!a&&r<t.length){var I=r++;return{value:i(I,t[I]),done:!1}}return a=!0,{done:!0,value:void 0}}};return y[Symbol.iterator]=function(){return y},y}l("Array.prototype.values",function(t){return t||function(){return f(this,function(i,r){return r})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var g=g||{},w=this||self;function E(t){var i=typeof t;return i=i!="object"?i:t?Array.isArray(t)?"array":i:"null",i=="array"||i=="object"&&typeof t.length=="number"}function A(t){var i=typeof t;return i=="object"&&t!=null||i=="function"}function k(t,i,r){return t.call.apply(t.bind,arguments)}function _(t,i,r){if(!t)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var y=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(y,a),t.apply(i,y)}}return function(){return t.apply(i,arguments)}}function b(t,i,r){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?k:_,b.apply(null,arguments)}function R(t,i){var r=Array.prototype.slice.call(arguments,1);return function(){var a=r.slice();return a.push.apply(a,arguments),t.apply(this,a)}}function D(t,i){function r(){}r.prototype=i.prototype,t.aa=i.prototype,t.prototype=new r,t.prototype.constructor=t,t.Qb=function(a,y,I){for(var T=Array(arguments.length-2),O=2;O<arguments.length;O++)T[O-2]=arguments[O];return i.prototype[y].apply(a,T)}}function B(t){const i=t.length;if(0<i){const r=Array(i);for(let a=0;a<i;a++)r[a]=t[a];return r}return[]}function N(t,i){for(let r=1;r<arguments.length;r++){const a=arguments[r];if(E(a)){const y=t.length||0,I=a.length||0;t.length=y+I;for(let T=0;T<I;T++)t[y+T]=a[T]}else t.push(a)}}class it{constructor(i,r){this.i=i,this.j=r,this.h=0,this.g=null}get(){let i;return 0<this.h?(this.h--,i=this.g,this.g=i.next,i.next=null):i=this.i(),i}}function Q(t){return/^[\s\xa0]*$/.test(t)}function G(){var t=w.navigator;return t&&(t=t.userAgent)?t:""}function Y(t){return Y[" "](t),t}Y[" "]=function(){};var st=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function X(t,i,r){for(const a in t)i.call(r,t[a],a,t)}function m(t,i){for(const r in t)i.call(void 0,t[r],r,t)}function h(t){const i={};for(const r in t)i[r]=t[r];return i}const u="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function d(t,i){let r,a;for(let y=1;y<arguments.length;y++){a=arguments[y];for(r in a)t[r]=a[r];for(let I=0;I<u.length;I++)r=u[I],Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}}function p(t){var i=1;t=t.split(":");const r=[];for(;0<i&&t.length;)r.push(t.shift()),i--;return t.length&&r.push(t.join(":")),r}function v(t){w.setTimeout(()=>{throw t},0)}function c(){var t=De;let i=null;return t.g&&(i=t.g,t.g=t.g.next,t.g||(t.h=null),i.next=null),i}class rt{constructor(){this.h=this.g=null}add(i,r){const a=Ot.get();a.set(i,r),this.h?this.h.next=a:this.g=a,this.h=a}}var Ot=new it(()=>new Ks,t=>t.reset());class Ks{constructor(){this.next=this.g=this.h=null}set(i,r){this.h=i,this.g=r,this.next=null}reset(){this.next=this.g=this.h=null}}let Lt,Nt=!1,De=new rt,Dn=()=>{const t=w.Promise.resolve(void 0);Lt=()=>{t.then(Ws)}};var Ws=()=>{for(var t;t=c();){try{t.h.call(t.g)}catch(r){v(r)}var i=Ot;i.j(t),100>i.h&&(i.h++,t.next=i.g,i.g=t)}Nt=!1};function ct(){this.s=this.s,this.C=this.C}ct.prototype.s=!1,ct.prototype.ma=function(){this.s||(this.s=!0,this.N())},ct.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function F(t,i){this.type=t,this.g=this.target=i,this.defaultPrevented=!1}F.prototype.h=function(){this.defaultPrevented=!0};var Xs=function(){if(!w.addEventListener||!Object.defineProperty)return!1;var t=!1,i=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const r=()=>{};w.addEventListener("test",r,i),w.removeEventListener("test",r,i)}catch{}return t}();function Mt(t,i){if(F.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var r=this.type=t.type,a=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=i,i=t.relatedTarget){if(st){t:{try{Y(i.nodeName);var y=!0;break t}catch{}y=!1}y||(i=null)}}else r=="mouseover"?i=t.fromElement:r=="mouseout"&&(i=t.toElement);this.relatedTarget=i,a?(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Js[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Mt.aa.h.call(this)}}D(Mt,F);var Js={2:"touch",3:"pen",4:"mouse"};Mt.prototype.h=function(){Mt.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ie="closure_listenable_"+(1e6*Math.random()|0),Ys=0;function Zs(t,i,r,a,y){this.listener=t,this.proxy=null,this.src=i,this.type=r,this.capture=!!a,this.ha=y,this.key=++Ys,this.da=this.fa=!1}function se(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function re(t){this.src=t,this.g={},this.h=0}re.prototype.add=function(t,i,r,a,y){var I=t.toString();t=this.g[I],t||(t=this.g[I]=[],this.h++);var T=Re(t,i,a,y);return-1<T?(i=t[T],r||(i.fa=!1)):(i=new Zs(i,this.src,I,!!a,y),i.fa=r,t.push(i)),i};function ke(t,i){var r=i.type;if(r in t.g){var a=t.g[r],y=Array.prototype.indexOf.call(a,i,void 0),I;(I=0<=y)&&Array.prototype.splice.call(a,y,1),I&&(se(i),t.g[r].length==0&&(delete t.g[r],t.h--))}}function Re(t,i,r,a){for(var y=0;y<t.length;++y){var I=t[y];if(!I.da&&I.listener==i&&I.capture==!!r&&I.ha==a)return y}return-1}var Pe="closure_lm_"+(1e6*Math.random()|0),Oe={};function kn(t,i,r,a,y){if(Array.isArray(i)){for(var I=0;I<i.length;I++)kn(t,i[I],r,a,y);return null}return r=On(r),t&&t[ie]?t.K(i,r,A(a)?!!a.capture:!1,y):Qs(t,i,r,!1,a,y)}function Qs(t,i,r,a,y,I){if(!i)throw Error("Invalid event type");var T=A(y)?!!y.capture:!!y,O=Ne(t);if(O||(t[Pe]=O=new re(t)),r=O.add(i,r,a,T,I),r.proxy)return r;if(a=tr(),r.proxy=a,a.src=t,a.listener=r,t.addEventListener)Xs||(y=T),y===void 0&&(y=!1),t.addEventListener(i.toString(),a,y);else if(t.attachEvent)t.attachEvent(Pn(i.toString()),a);else if(t.addListener&&t.removeListener)t.addListener(a);else throw Error("addEventListener and attachEvent are unavailable.");return r}function tr(){function t(r){return i.call(t.src,t.listener,r)}const i=er;return t}function Rn(t,i,r,a,y){if(Array.isArray(i))for(var I=0;I<i.length;I++)Rn(t,i[I],r,a,y);else a=A(a)?!!a.capture:!!a,r=On(r),t&&t[ie]?(t=t.i,i=String(i).toString(),i in t.g&&(I=t.g[i],r=Re(I,r,a,y),-1<r&&(se(I[r]),Array.prototype.splice.call(I,r,1),I.length==0&&(delete t.g[i],t.h--)))):t&&(t=Ne(t))&&(i=t.g[i.toString()],t=-1,i&&(t=Re(i,r,a,y)),(r=-1<t?i[t]:null)&&Le(r))}function Le(t){if(typeof t!="number"&&t&&!t.da){var i=t.src;if(i&&i[ie])ke(i.i,t);else{var r=t.type,a=t.proxy;i.removeEventListener?i.removeEventListener(r,a,t.capture):i.detachEvent?i.detachEvent(Pn(r),a):i.addListener&&i.removeListener&&i.removeListener(a),(r=Ne(i))?(ke(r,t),r.h==0&&(r.src=null,i[Pe]=null)):se(t)}}}function Pn(t){return t in Oe?Oe[t]:Oe[t]="on"+t}function er(t,i){if(t.da)t=!0;else{i=new Mt(i,this);var r=t.listener,a=t.ha||t.src;t.fa&&Le(t),t=r.call(a,i)}return t}function Ne(t){return t=t[Pe],t instanceof re?t:null}var Me="__closure_events_fn_"+(1e9*Math.random()>>>0);function On(t){return typeof t=="function"?t:(t[Me]||(t[Me]=function(i){return t.handleEvent(i)}),t[Me])}function x(){ct.call(this),this.i=new re(this),this.M=this,this.F=null}D(x,ct),x.prototype[ie]=!0,x.prototype.removeEventListener=function(t,i,r,a){Rn(this,t,i,r,a)};function H(t,i){var r,a=t.F;if(a)for(r=[];a;a=a.F)r.push(a);if(t=t.M,a=i.type||i,typeof i=="string")i=new F(i,t);else if(i instanceof F)i.target=i.target||t;else{var y=i;i=new F(a,t),d(i,y)}if(y=!0,r)for(var I=r.length-1;0<=I;I--){var T=i.g=r[I];y=oe(T,a,!0,i)&&y}if(T=i.g=t,y=oe(T,a,!0,i)&&y,y=oe(T,a,!1,i)&&y,r)for(I=0;I<r.length;I++)T=i.g=r[I],y=oe(T,a,!1,i)&&y}x.prototype.N=function(){if(x.aa.N.call(this),this.i){var t=this.i,i;for(i in t.g){for(var r=t.g[i],a=0;a<r.length;a++)se(r[a]);delete t.g[i],t.h--}}this.F=null},x.prototype.K=function(t,i,r,a){return this.i.add(String(t),i,!1,r,a)},x.prototype.L=function(t,i,r,a){return this.i.add(String(t),i,!0,r,a)};function oe(t,i,r,a){if(i=t.i.g[String(i)],!i)return!0;i=i.concat();for(var y=!0,I=0;I<i.length;++I){var T=i[I];if(T&&!T.da&&T.capture==r){var O=T.listener,j=T.ha||T.src;T.fa&&ke(t.i,T),y=O.call(j,a)!==!1&&y}}return y&&!a.defaultPrevented}function Ln(t,i,r){if(typeof t=="function")r&&(t=b(t,r));else if(t&&typeof t.handleEvent=="function")t=b(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(i)?-1:w.setTimeout(t,i||0)}function Nn(t){t.g=Ln(()=>{t.g=null,t.i&&(t.i=!1,Nn(t))},t.l);const i=t.h;t.h=null,t.m.apply(null,i)}class nr extends ct{constructor(i,r){super(),this.m=i,this.l=r,this.h=null,this.i=!1,this.g=null}j(i){this.h=arguments,this.g?this.i=!0:Nn(this)}N(){super.N(),this.g&&(w.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bt(t){ct.call(this),this.h=t,this.g={}}D(Bt,ct);var Mn=[];function Bn(t){X(t.g,function(i,r){this.g.hasOwnProperty(r)&&Le(i)},t),t.g={}}Bt.prototype.N=function(){Bt.aa.N.call(this),Bn(this)},Bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Be=w.JSON.stringify,ir=w.JSON.parse,sr=class{stringify(t){return w.JSON.stringify(t,void 0)}parse(t){return w.JSON.parse(t,void 0)}};function je(){}je.prototype.h=null;function jn(t){return t.h||(t.h=t.i())}function rr(){}var jt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fe(){F.call(this,"d")}D(Fe,F);function xe(){F.call(this,"c")}D(xe,F);var bt={},Fn=null;function $e(){return Fn=Fn||new x}bt.La="serverreachability";function xn(t){F.call(this,bt.La,t)}D(xn,F);function Ft(t){const i=$e();H(i,new xn(i))}bt.STAT_EVENT="statevent";function $n(t,i){F.call(this,bt.STAT_EVENT,t),this.stat=i}D($n,F);function V(t){const i=$e();H(i,new $n(i,t))}bt.Ma="timingevent";function Un(t,i){F.call(this,bt.Ma,t),this.size=i}D(Un,F);function xt(t,i){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return w.setTimeout(function(){t()},i)}function $t(){this.g=!0}$t.prototype.xa=function(){this.g=!1};function or(t,i,r,a,y,I){t.info(function(){if(t.g)if(I)for(var T="",O=I.split("&"),j=0;j<O.length;j++){var C=O[j].split("=");if(1<C.length){var $=C[0];C=C[1];var U=$.split("_");T=2<=U.length&&U[1]=="type"?T+($+"="+C+"&"):T+($+"=redacted&")}}else T=null;else T=I;return"XMLHTTP REQ ("+a+") [attempt "+y+"]: "+i+`
`+r+`
`+T})}function ar(t,i,r,a,y,I,T){t.info(function(){return"XMLHTTP RESP ("+a+") [ attempt "+y+"]: "+i+`
`+r+`
`+I+" "+T})}function St(t,i,r,a){t.info(function(){return"XMLHTTP TEXT ("+i+"): "+hr(t,r)+(a?" "+a:"")})}function lr(t,i){t.info(function(){return"TIMEOUT: "+i})}$t.prototype.info=function(){};function hr(t,i){if(!t.g)return i;if(!i)return null;try{var r=JSON.parse(i);if(r){for(t=0;t<r.length;t++)if(Array.isArray(r[t])){var a=r[t];if(!(2>a.length)){var y=a[1];if(Array.isArray(y)&&!(1>y.length)){var I=y[0];if(I!="noop"&&I!="stop"&&I!="close")for(var T=1;T<y.length;T++)y[T]=""}}}}return Be(r)}catch{return i}}var Ue={NO_ERROR:0,TIMEOUT:8},cr={},He;function ae(){}D(ae,je),ae.prototype.g=function(){return new XMLHttpRequest},ae.prototype.i=function(){return{}},He=new ae;function ut(t,i,r,a){this.j=t,this.i=i,this.l=r,this.R=a||1,this.U=new Bt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hn}function Hn(){this.i=null,this.g="",this.h=!1}var Vn={},Ve={};function ze(t,i,r){t.L=1,t.v=ue(ot(i)),t.m=r,t.P=!0,zn(t,null)}function zn(t,i){t.F=Date.now(),le(t),t.A=ot(t.v);var r=t.A,a=t.R;Array.isArray(a)||(a=[String(a)]),si(r.i,"t",a),t.C=0,r=t.j.J,t.h=new Hn,t.g=Ti(t.j,r?i:null,!t.m),0<t.O&&(t.M=new nr(b(t.Y,t,t.g),t.O)),i=t.U,r=t.g,a=t.ca;var y="readystatechange";Array.isArray(y)||(y&&(Mn[0]=y.toString()),y=Mn);for(var I=0;I<y.length;I++){var T=kn(r,y[I],a||i.handleEvent,!1,i.h||i);if(!T)break;i.g[T.key]=T}i=t.H?h(t.H):{},t.m?(t.u||(t.u="POST"),i["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,i)):(t.u="GET",t.g.ea(t.A,t.u,null,i)),Ft(),or(t.i,t.u,t.A,t.l,t.R,t.m)}ut.prototype.ca=function(t){t=t.target;const i=this.M;i&&at(t)==3?i.j():this.Y(t)},ut.prototype.Y=function(t){try{if(t==this.g)t:{const U=at(this.g);var i=this.g.Ba();const kt=this.g.Z();if(!(3>U)&&(U!=3||this.g&&(this.h.h||this.g.oa()||ui(this.g)))){this.J||U!=4||i==7||(i==8||0>=kt?Ft(3):Ft(2)),Ge(this);var r=this.g.Z();this.X=r;e:if(Gn(this)){var a=ui(this.g);t="";var y=a.length,I=at(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vt(this),Ut(this);var T="";break e}this.h.i=new w.TextDecoder}for(i=0;i<y;i++)this.h.h=!0,t+=this.h.i.decode(a[i],{stream:!(I&&i==y-1)});a.length=0,this.h.g+=t,this.C=0,T=this.h.g}else T=this.g.oa();if(this.o=r==200,ar(this.i,this.u,this.A,this.l,this.R,U,r),this.o){if(this.T&&!this.K){e:{if(this.g){var O,j=this.g;if((O=j.g?j.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(O)){var C=O;break e}}C=null}if(r=C)St(this.i,this.l,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qe(this,r);else{this.o=!1,this.s=3,V(12),vt(this),Ut(this);break t}}if(this.P){r=!0;let tt;for(;!this.J&&this.C<T.length;)if(tt=ur(this,T),tt==Ve){U==4&&(this.s=4,V(14),r=!1),St(this.i,this.l,null,"[Incomplete Response]");break}else if(tt==Vn){this.s=4,V(15),St(this.i,this.l,T,"[Invalid Chunk]"),r=!1;break}else St(this.i,this.l,tt,null),qe(this,tt);if(Gn(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),U!=4||T.length!=0||this.h.h||(this.s=1,V(16),r=!1),this.o=this.o&&r,!r)St(this.i,this.l,T,"[Invalid Chunked Response]"),vt(this),Ut(this);else if(0<T.length&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.ba&&!$.M&&($.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),Ze($),$.M=!0,V(11))}}else St(this.i,this.l,T,null),qe(this,T);U==4&&vt(this),this.o&&!this.J&&(U==4?vi(this.j,this):(this.o=!1,le(this)))}else Dr(this.g),r==400&&0<T.indexOf("Unknown SID")?(this.s=3,V(12)):(this.s=0,V(13)),vt(this),Ut(this)}}}catch{}finally{}};function Gn(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function ur(t,i){var r=t.C,a=i.indexOf(`
`,r);return a==-1?Ve:(r=Number(i.substring(r,a)),isNaN(r)?Vn:(a+=1,a+r>i.length?Ve:(i=i.slice(a,a+r),t.C=a+r,i)))}ut.prototype.cancel=function(){this.J=!0,vt(this)};function le(t){t.S=Date.now()+t.I,qn(t,t.I)}function qn(t,i){if(t.B!=null)throw Error("WatchDog timer not null");t.B=xt(b(t.ba,t),i)}function Ge(t){t.B&&(w.clearTimeout(t.B),t.B=null)}ut.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(lr(this.i,this.A),this.L!=2&&(Ft(),V(17)),vt(this),this.s=2,Ut(this)):qn(this,this.S-t)};function Ut(t){t.j.G==0||t.J||vi(t.j,t)}function vt(t){Ge(t);var i=t.M;i&&typeof i.ma=="function"&&i.ma(),t.M=null,Bn(t.U),t.g&&(i=t.g,t.g=null,i.abort(),i.ma())}function qe(t,i){try{var r=t.j;if(r.G!=0&&(r.g==t||Ke(r.h,t))){if(!t.K&&Ke(r.h,t)&&r.G==3){try{var a=r.Da.g.parse(i)}catch{a=null}if(Array.isArray(a)&&a.length==3){var y=a;if(y[0]==0){t:if(!r.u){if(r.g)if(r.g.F+3e3<t.F)ye(r),ge(r);else break t;Ye(r),V(18)}}else r.za=y[1],0<r.za-r.T&&37500>y[2]&&r.F&&r.v==0&&!r.C&&(r.C=xt(b(r.Za,r),6e3));if(1>=Xn(r.h)&&r.ca){try{r.ca()}catch{}r.ca=void 0}}else It(r,11)}else if((t.K||r.g==t)&&ye(r),!Q(i))for(y=r.Da.g.parse(i),i=0;i<y.length;i++){let C=y[i];if(r.T=C[0],C=C[1],r.G==2)if(C[0]=="c"){r.K=C[1],r.ia=C[2];const $=C[3];$!=null&&(r.la=$,r.j.info("VER="+r.la));const U=C[4];U!=null&&(r.Aa=U,r.j.info("SVER="+r.Aa));const kt=C[5];kt!=null&&typeof kt=="number"&&0<kt&&(a=1.5*kt,r.L=a,r.j.info("backChannelRequestTimeoutMs_="+a)),a=r;const tt=t.g;if(tt){const ve=tt.g?tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ve){var I=a.h;I.g||ve.indexOf("spdy")==-1&&ve.indexOf("quic")==-1&&ve.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(We(I,I.h),I.h=null))}if(a.D){const Qe=tt.g?tt.g.getResponseHeader("X-HTTP-Session-Id"):null;Qe&&(a.ya=Qe,L(a.I,a.D,Qe))}}r.G=3,r.l&&r.l.ua(),r.ba&&(r.R=Date.now()-t.F,r.j.info("Handshake RTT: "+r.R+"ms")),a=r;var T=t;if(a.qa=Ei(a,a.J?a.ia:null,a.W),T.K){Jn(a.h,T);var O=T,j=a.L;j&&(O.I=j),O.B&&(Ge(O),le(O)),a.g=T}else mi(a);0<r.i.length&&me(r)}else C[0]!="stop"&&C[0]!="close"||It(r,7);else r.G==3&&(C[0]=="stop"||C[0]=="close"?C[0]=="stop"?It(r,7):Je(r):C[0]!="noop"&&r.l&&r.l.ta(C),r.v=0)}}Ft(4)}catch{}}var fr=class{constructor(t,i){this.g=t,this.map=i}};function Kn(t){this.l=t||10,w.PerformanceNavigationTiming?(t=w.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(w.chrome&&w.chrome.loadTimes&&w.chrome.loadTimes()&&w.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wn(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Xn(t){return t.h?1:t.g?t.g.size:0}function Ke(t,i){return t.h?t.h==i:t.g?t.g.has(i):!1}function We(t,i){t.g?t.g.add(i):t.h=i}function Jn(t,i){t.h&&t.h==i?t.h=null:t.g&&t.g.has(i)&&t.g.delete(i)}Kn.prototype.cancel=function(){if(this.i=Yn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Yn(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let i=t.i;for(const r of t.g.values())i=i.concat(r.D);return i}return B(t.i)}function dr(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(E(t)){for(var i=[],r=t.length,a=0;a<r;a++)i.push(t[a]);return i}i=[],r=0;for(a in t)i[r++]=t[a];return i}function pr(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(E(t)||typeof t=="string"){var i=[];t=t.length;for(var r=0;r<t;r++)i.push(r);return i}i=[],r=0;for(const a in t)i[r++]=a;return i}}}function Zn(t,i){if(t.forEach&&typeof t.forEach=="function")t.forEach(i,void 0);else if(E(t)||typeof t=="string")Array.prototype.forEach.call(t,i,void 0);else for(var r=pr(t),a=dr(t),y=a.length,I=0;I<y;I++)i.call(void 0,a[I],r&&r[I],t)}var Qn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gr(t,i){if(t){t=t.split("&");for(var r=0;r<t.length;r++){var a=t[r].indexOf("="),y=null;if(0<=a){var I=t[r].substring(0,a);y=t[r].substring(a+1)}else I=t[r];i(I,y?decodeURIComponent(y.replace(/\+/g," ")):"")}}}function wt(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof wt){this.h=t.h,he(this,t.j),this.o=t.o,this.g=t.g,ce(this,t.s),this.l=t.l;var i=t.i,r=new zt;r.i=i.i,i.g&&(r.g=new Map(i.g),r.h=i.h),ti(this,r),this.m=t.m}else t&&(i=String(t).match(Qn))?(this.h=!1,he(this,i[1]||"",!0),this.o=Ht(i[2]||""),this.g=Ht(i[3]||"",!0),ce(this,i[4]),this.l=Ht(i[5]||"",!0),ti(this,i[6]||"",!0),this.m=Ht(i[7]||"")):(this.h=!1,this.i=new zt(null,this.h))}wt.prototype.toString=function(){var t=[],i=this.j;i&&t.push(Vt(i,ei,!0),":");var r=this.g;return(r||i=="file")&&(t.push("//"),(i=this.o)&&t.push(Vt(i,ei,!0),"@"),t.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r=this.s,r!=null&&t.push(":",String(r))),(r=this.l)&&(this.g&&r.charAt(0)!="/"&&t.push("/"),t.push(Vt(r,r.charAt(0)=="/"?vr:yr,!0))),(r=this.i.toString())&&t.push("?",r),(r=this.m)&&t.push("#",Vt(r,Ir)),t.join("")};function ot(t){return new wt(t)}function he(t,i,r){t.j=r?Ht(i,!0):i,t.j&&(t.j=t.j.replace(/:$/,""))}function ce(t,i){if(i){if(i=Number(i),isNaN(i)||0>i)throw Error("Bad port number "+i);t.s=i}else t.s=null}function ti(t,i,r){i instanceof zt?(t.i=i,Er(t.i,t.h)):(r||(i=Vt(i,wr)),t.i=new zt(i,t.h))}function L(t,i,r){t.i.set(i,r)}function ue(t){return L(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ht(t,i){return t?i?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vt(t,i,r){return typeof t=="string"?(t=encodeURI(t).replace(i,mr),r&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function mr(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ei=/[#\/\?@]/g,yr=/[#\?:]/g,vr=/[#\?]/g,wr=/[#\?@]/g,Ir=/#/g;function zt(t,i){this.h=this.g=null,this.i=t||null,this.j=!!i}function ft(t){t.g||(t.g=new Map,t.h=0,t.i&&gr(t.i,function(i,r){t.add(decodeURIComponent(i.replace(/\+/g," ")),r)}))}n=zt.prototype,n.add=function(t,i){ft(this),this.i=null,t=Ct(this,t);var r=this.g.get(t);return r||this.g.set(t,r=[]),r.push(i),this.h+=1,this};function ni(t,i){ft(t),i=Ct(t,i),t.g.has(i)&&(t.i=null,t.h-=t.g.get(i).length,t.g.delete(i))}function ii(t,i){return ft(t),i=Ct(t,i),t.g.has(i)}n.forEach=function(t,i){ft(this),this.g.forEach(function(r,a){r.forEach(function(y){t.call(i,y,a,this)},this)},this)},n.na=function(){ft(this);const t=Array.from(this.g.values()),i=Array.from(this.g.keys()),r=[];for(let a=0;a<i.length;a++){const y=t[a];for(let I=0;I<y.length;I++)r.push(i[a])}return r},n.V=function(t){ft(this);let i=[];if(typeof t=="string")ii(this,t)&&(i=i.concat(this.g.get(Ct(this,t))));else{t=Array.from(this.g.values());for(let r=0;r<t.length;r++)i=i.concat(t[r])}return i},n.set=function(t,i){return ft(this),this.i=null,t=Ct(this,t),ii(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[i]),this.h+=1,this},n.get=function(t,i){return t?(t=this.V(t),0<t.length?String(t[0]):i):i};function si(t,i,r){ni(t,i),0<r.length&&(t.i=null,t.g.set(Ct(t,i),B(r)),t.h+=r.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],i=Array.from(this.g.keys());for(var r=0;r<i.length;r++){var a=i[r];const I=encodeURIComponent(String(a)),T=this.V(a);for(a=0;a<T.length;a++){var y=I;T[a]!==""&&(y+="="+encodeURIComponent(String(T[a]))),t.push(y)}}return this.i=t.join("&")};function Ct(t,i){return i=String(i),t.j&&(i=i.toLowerCase()),i}function Er(t,i){i&&!t.j&&(ft(t),t.i=null,t.g.forEach(function(r,a){var y=a.toLowerCase();a!=y&&(ni(this,a),si(this,y,r))},t)),t.j=i}function Tr(t,i){const r=new $t;if(w.Image){const a=new Image;a.onload=R(dt,r,"TestLoadImage: loaded",!0,i,a),a.onerror=R(dt,r,"TestLoadImage: error",!1,i,a),a.onabort=R(dt,r,"TestLoadImage: abort",!1,i,a),a.ontimeout=R(dt,r,"TestLoadImage: timeout",!1,i,a),w.setTimeout(function(){a.ontimeout&&a.ontimeout()},1e4),a.src=t}else i(!1)}function Ar(t,i){const r=new $t,a=new AbortController,y=setTimeout(()=>{a.abort(),dt(r,"TestPingServer: timeout",!1,i)},1e4);fetch(t,{signal:a.signal}).then(I=>{clearTimeout(y),I.ok?dt(r,"TestPingServer: ok",!0,i):dt(r,"TestPingServer: server error",!1,i)}).catch(()=>{clearTimeout(y),dt(r,"TestPingServer: error",!1,i)})}function dt(t,i,r,a,y){try{y&&(y.onload=null,y.onerror=null,y.onabort=null,y.ontimeout=null),a(r)}catch{}}function _r(){this.g=new sr}function br(t,i,r){const a=r||"";try{Zn(t,function(y,I){let T=y;A(y)&&(T=Be(y)),i.push(a+I+"="+encodeURIComponent(T))})}catch(y){throw i.push(a+"type="+encodeURIComponent("_badmap")),y}}function fe(t){this.l=t.Ub||null,this.j=t.eb||!1}D(fe,je),fe.prototype.g=function(){return new de(this.l,this.j)},fe.prototype.i=function(t){return function(){return t}}({});function de(t,i){x.call(this),this.D=t,this.o=i,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(de,x),n=de.prototype,n.open=function(t,i){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=i,this.readyState=1,qt(this)},n.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const i={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(i.body=t),(this.D||w).fetch(new Request(this.A,i)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gt(this)),this.readyState=0},n.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,qt(this)),this.g&&(this.readyState=3,qt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof w.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ri(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function ri(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}n.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var i=t.value?t.value:new Uint8Array(0);(i=this.v.decode(i,{stream:!t.done}))&&(this.response=this.responseText+=i)}t.done?Gt(this):qt(this),this.readyState==3&&ri(this)}},n.Ra=function(t){this.g&&(this.response=this.responseText=t,Gt(this))},n.Qa=function(t){this.g&&(this.response=t,Gt(this))},n.ga=function(){this.g&&Gt(this)};function Gt(t){t.readyState=4,t.l=null,t.j=null,t.v=null,qt(t)}n.setRequestHeader=function(t,i){this.u.append(t,i)},n.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],i=this.h.entries();for(var r=i.next();!r.done;)r=r.value,t.push(r[0]+": "+r[1]),r=i.next();return t.join(`\r
`)};function qt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(de.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function oi(t){let i="";return X(t,function(r,a){i+=a,i+=":",i+=r,i+=`\r
`}),i}function Xe(t,i,r){t:{for(a in r){var a=!1;break t}a=!0}a||(r=oi(r),typeof t=="string"?r!=null&&encodeURIComponent(String(r)):L(t,i,r))}function M(t){x.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(M,x);var Sr=/^https?$/i,Cr=["POST","PUT"];n=M.prototype,n.Ha=function(t){this.J=t},n.ea=function(t,i,r,a){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);i=i?i.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():He.g(),this.v=this.o?jn(this.o):jn(He),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(i,String(t),!0),this.B=!1}catch(I){ai(this,I);return}if(t=r||"",r=new Map(this.headers),a)if(Object.getPrototypeOf(a)===Object.prototype)for(var y in a)r.set(y,a[y]);else if(typeof a.keys=="function"&&typeof a.get=="function")for(const I of a.keys())r.set(I,a.get(I));else throw Error("Unknown input type for opt_headers: "+String(a));a=Array.from(r.keys()).find(I=>I.toLowerCase()=="content-type"),y=w.FormData&&t instanceof w.FormData,!(0<=Array.prototype.indexOf.call(Cr,i,void 0))||a||y||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,T]of r)this.g.setRequestHeader(I,T);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ci(this),this.u=!0,this.g.send(t),this.u=!1}catch(I){ai(this,I)}};function ai(t,i){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=i,t.m=5,li(t),pe(t)}function li(t){t.A||(t.A=!0,H(t,"complete"),H(t,"error"))}n.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,H(this,"complete"),H(this,"abort"),pe(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pe(this,!0)),M.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?hi(this):this.bb())},n.bb=function(){hi(this)};function hi(t){if(t.h&&typeof g<"u"&&(!t.v[1]||at(t)!=4||t.Z()!=2)){if(t.u&&at(t)==4)Ln(t.Ea,0,t);else if(H(t,"readystatechange"),at(t)==4){t.h=!1;try{const T=t.Z();t:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var i=!0;break t;default:i=!1}var r;if(!(r=i)){var a;if(a=T===0){var y=String(t.D).match(Qn)[1]||null;!y&&w.self&&w.self.location&&(y=w.self.location.protocol.slice(0,-1)),a=!Sr.test(y?y.toLowerCase():"")}r=a}if(r)H(t,"complete"),H(t,"success");else{t.m=6;try{var I=2<at(t)?t.g.statusText:""}catch{I=""}t.l=I+" ["+t.Z()+"]",li(t)}}finally{pe(t)}}}}function pe(t,i){if(t.g){ci(t);const r=t.g,a=t.v[0]?()=>{}:null;t.g=null,t.v=null,i||H(t,"ready");try{r.onreadystatechange=a}catch{}}}function ci(t){t.I&&(w.clearTimeout(t.I),t.I=null)}n.isActive=function(){return!!this.g};function at(t){return t.g?t.g.readyState:0}n.Z=function(){try{return 2<at(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(t){if(this.g){var i=this.g.responseText;return t&&i.indexOf(t)==0&&(i=i.substring(t.length)),ir(i)}};function ui(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Dr(t){const i={};t=(t.g&&2<=at(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let a=0;a<t.length;a++){if(Q(t[a]))continue;var r=p(t[a]);const y=r[0];if(r=r[1],typeof r!="string")continue;r=r.trim();const I=i[y]||[];i[y]=I,I.push(r)}m(i,function(a){return a.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Kt(t,i,r){return r&&r.internalChannelParams&&r.internalChannelParams[t]||i}function fi(t){this.Aa=0,this.i=[],this.j=new $t,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Kt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Kt("baseRetryDelayMs",5e3,t),this.cb=Kt("retryDelaySeedMs",1e4,t),this.Wa=Kt("forwardChannelMaxRetries",2,t),this.wa=Kt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Kn(t&&t.concurrentRequestLimit),this.Da=new _r,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=fi.prototype,n.la=8,n.G=1,n.connect=function(t,i,r,a){V(0),this.W=t,this.H=i||{},r&&a!==void 0&&(this.H.OSID=r,this.H.OAID=a),this.F=this.X,this.I=Ei(this,null,this.W),me(this)};function Je(t){if(di(t),t.G==3){var i=t.U++,r=ot(t.I);if(L(r,"SID",t.K),L(r,"RID",i),L(r,"TYPE","terminate"),Wt(t,r),i=new ut(t,t.j,i),i.L=2,i.v=ue(ot(r)),r=!1,w.navigator&&w.navigator.sendBeacon)try{r=w.navigator.sendBeacon(i.v.toString(),"")}catch{}!r&&w.Image&&(new Image().src=i.v,r=!0),r||(i.g=Ti(i.j,null),i.g.ea(i.v)),i.F=Date.now(),le(i)}Ii(t)}function ge(t){t.g&&(Ze(t),t.g.cancel(),t.g=null)}function di(t){ge(t),t.u&&(w.clearTimeout(t.u),t.u=null),ye(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&w.clearTimeout(t.s),t.s=null)}function me(t){if(!Wn(t.h)&&!t.s){t.s=!0;var i=t.Ga;Lt||Dn(),Nt||(Lt(),Nt=!0),De.add(i,t),t.B=0}}function kr(t,i){return Xn(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=i.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=xt(b(t.Ga,t,i),wi(t,t.B)),t.B++,!0)}n.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const y=new ut(this,this.j,t);let I=this.o;if(this.S&&(I?(I=h(I),d(I,this.S)):I=this.S),this.m!==null||this.O||(y.H=I,I=null),this.P)t:{for(var i=0,r=0;r<this.i.length;r++){e:{var a=this.i[r];if("__data__"in a.map&&(a=a.map.__data__,typeof a=="string")){a=a.length;break e}a=void 0}if(a===void 0)break;if(i+=a,4096<i){i=r;break t}if(i===4096||r===this.i.length-1){i=r+1;break t}}i=1e3}else i=1e3;i=gi(this,y,i),r=ot(this.I),L(r,"RID",t),L(r,"CVER",22),this.D&&L(r,"X-HTTP-Session-Id",this.D),Wt(this,r),I&&(this.O?i="headers="+encodeURIComponent(String(oi(I)))+"&"+i:this.m&&Xe(r,this.m,I)),We(this.h,y),this.Ua&&L(r,"TYPE","init"),this.P?(L(r,"$req",i),L(r,"SID","null"),y.T=!0,ze(y,r,null)):ze(y,r,i),this.G=2}}else this.G==3&&(t?pi(this,t):this.i.length==0||Wn(this.h)||pi(this))};function pi(t,i){var r;i?r=i.l:r=t.U++;const a=ot(t.I);L(a,"SID",t.K),L(a,"RID",r),L(a,"AID",t.T),Wt(t,a),t.m&&t.o&&Xe(a,t.m,t.o),r=new ut(t,t.j,r,t.B+1),t.m===null&&(r.H=t.o),i&&(t.i=i.D.concat(t.i)),i=gi(t,r,1e3),r.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),We(t.h,r),ze(r,a,i)}function Wt(t,i){t.H&&X(t.H,function(r,a){L(i,a,r)}),t.l&&Zn({},function(r,a){L(i,a,r)})}function gi(t,i,r){r=Math.min(t.i.length,r);var a=t.l?b(t.l.Na,t.l,t):null;t:{var y=t.i;let I=-1;for(;;){const T=["count="+r];I==-1?0<r?(I=y[0].g,T.push("ofs="+I)):I=0:T.push("ofs="+I);let O=!0;for(let j=0;j<r;j++){let C=y[j].g;const $=y[j].map;if(C-=I,0>C)I=Math.max(0,y[j].g-100),O=!1;else try{br($,T,"req"+C+"_")}catch{a&&a($)}}if(O){a=T.join("&");break t}}}return t=t.i.splice(0,r),i.D=t,a}function mi(t){if(!t.g&&!t.u){t.Y=1;var i=t.Fa;Lt||Dn(),Nt||(Lt(),Nt=!0),De.add(i,t),t.v=0}}function Ye(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=xt(b(t.Fa,t),wi(t,t.v)),t.v++,!0)}n.Fa=function(){if(this.u=null,yi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=xt(b(this.ab,this),t)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,V(10),ge(this),yi(this))};function Ze(t){t.A!=null&&(w.clearTimeout(t.A),t.A=null)}function yi(t){t.g=new ut(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var i=ot(t.qa);L(i,"RID","rpc"),L(i,"SID",t.K),L(i,"AID",t.T),L(i,"CI",t.F?"0":"1"),!t.F&&t.ja&&L(i,"TO",t.ja),L(i,"TYPE","xmlhttp"),Wt(t,i),t.m&&t.o&&Xe(i,t.m,t.o),t.L&&(t.g.I=t.L);var r=t.g;t=t.ia,r.L=1,r.v=ue(ot(i)),r.m=null,r.P=!0,zn(r,t)}n.Za=function(){this.C!=null&&(this.C=null,ge(this),Ye(this),V(19))};function ye(t){t.C!=null&&(w.clearTimeout(t.C),t.C=null)}function vi(t,i){var r=null;if(t.g==i){ye(t),Ze(t),t.g=null;var a=2}else if(Ke(t.h,i))r=i.D,Jn(t.h,i),a=1;else return;if(t.G!=0){if(i.o)if(a==1){r=i.m?i.m.length:0,i=Date.now()-i.F;var y=t.B;a=$e(),H(a,new Un(a,r)),me(t)}else mi(t);else if(y=i.s,y==3||y==0&&0<i.X||!(a==1&&kr(t,i)||a==2&&Ye(t)))switch(r&&0<r.length&&(i=t.h,i.i=i.i.concat(r)),y){case 1:It(t,5);break;case 4:It(t,10);break;case 3:It(t,6);break;default:It(t,2)}}}function wi(t,i){let r=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(r*=2),r*i}function It(t,i){if(t.j.info("Error code "+i),i==2){var r=b(t.fb,t),a=t.Xa;const y=!a;a=new wt(a||"//www.google.com/images/cleardot.gif"),w.location&&w.location.protocol=="http"||he(a,"https"),ue(a),y?Tr(a.toString(),r):Ar(a.toString(),r)}else V(2);t.G=0,t.l&&t.l.sa(i),Ii(t),di(t)}n.fb=function(t){t?(this.j.info("Successfully pinged google.com"),V(2)):(this.j.info("Failed to ping google.com"),V(1))};function Ii(t){if(t.G=0,t.ka=[],t.l){const i=Yn(t.h);(i.length!=0||t.i.length!=0)&&(N(t.ka,i),N(t.ka,t.i),t.h.i.length=0,B(t.i),t.i.length=0),t.l.ra()}}function Ei(t,i,r){var a=r instanceof wt?ot(r):new wt(r);if(a.g!="")i&&(a.g=i+"."+a.g),ce(a,a.s);else{var y=w.location;a=y.protocol,i=i?i+"."+y.hostname:y.hostname,y=+y.port;var I=new wt(null);a&&he(I,a),i&&(I.g=i),y&&ce(I,y),r&&(I.l=r),a=I}return r=t.D,i=t.ya,r&&i&&L(a,r,i),L(a,"VER",t.la),Wt(t,a),a}function Ti(t,i,r){if(i&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return i=t.Ca&&!t.pa?new M(new fe({eb:r})):new M(t.pa),i.Ha(t.J),i}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ai(){}n=Ai.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Z(t,i){x.call(this),this.g=new fi(i),this.l=t,this.h=i&&i.messageUrlParams||null,t=i&&i.messageHeaders||null,i&&i.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=i&&i.initMessageHeaders||null,i&&i.messageContentType&&(t?t["X-WebChannel-Content-Type"]=i.messageContentType:t={"X-WebChannel-Content-Type":i.messageContentType}),i&&i.va&&(t?t["X-WebChannel-Client-Profile"]=i.va:t={"X-WebChannel-Client-Profile":i.va}),this.g.S=t,(t=i&&i.Sb)&&!Q(t)&&(this.g.m=t),this.v=i&&i.supportsCrossDomainXhr||!1,this.u=i&&i.sendRawJson||!1,(i=i&&i.httpSessionIdParam)&&!Q(i)&&(this.g.D=i,t=this.h,t!==null&&i in t&&(t=this.h,i in t&&delete t[i])),this.j=new Dt(this)}D(Z,x),Z.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Z.prototype.close=function(){Je(this.g)},Z.prototype.o=function(t){var i=this.g;if(typeof t=="string"){var r={};r.__data__=t,t=r}else this.u&&(r={},r.__data__=Be(t),t=r);i.i.push(new fr(i.Ya++,t)),i.G==3&&me(i)},Z.prototype.N=function(){this.g.l=null,delete this.j,Je(this.g),delete this.g,Z.aa.N.call(this)};function _i(t){Fe.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var i=t.__sm__;if(i){t:{for(const r in i){t=r;break t}t=void 0}(this.i=t)&&(t=this.i,i=i!==null&&t in i?i[t]:void 0),this.data=i}else this.data=t}D(_i,Fe);function bi(){xe.call(this),this.status=1}D(bi,xe);function Dt(t){this.g=t}D(Dt,Ai),Dt.prototype.ua=function(){H(this.g,"a")},Dt.prototype.ta=function(t){H(this.g,new _i(t))},Dt.prototype.sa=function(t){H(this.g,new bi)},Dt.prototype.ra=function(){H(this.g,"b")},Z.prototype.send=Z.prototype.o,Z.prototype.open=Z.prototype.m,Z.prototype.close=Z.prototype.close,Ue.NO_ERROR=0,Ue.TIMEOUT=8,Ue.HTTP_ERROR=6,cr.COMPLETE="complete",rr.EventType=jt,jt.OPEN="a",jt.CLOSE="b",jt.ERROR="c",jt.MESSAGE="d",x.prototype.listen=x.prototype.K,M.prototype.listenOnce=M.prototype.L,M.prototype.getLastError=M.prototype.Ka,M.prototype.getLastErrorCode=M.prototype.Ba,M.prototype.getStatus=M.prototype.Z,M.prototype.getResponseJson=M.prototype.Oa,M.prototype.getResponseText=M.prototype.oa,M.prototype.send=M.prototype.ea,M.prototype.setWithCredentials=M.prototype.Ha}).apply(typeof we<"u"?we:typeof self<"u"?self:typeof window<"u"?window:{});const qi="@firebase/firestore",Ki="4.7.10";/**
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
 */let ne="11.5.0";/**
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
 */const Pt=new vn("@firebase/firestore");function et(n,...e){if(Pt.logLevel<=P.DEBUG){const s=e.map(bn);Pt.debug(`Firestore (${ne}): ${n}`,...s)}}function Us(n,...e){if(Pt.logLevel<=P.ERROR){const s=e.map(bn);Pt.error(`Firestore (${ne}): ${n}`,...s)}}function Dl(n,...e){if(Pt.logLevel<=P.WARN){const s=e.map(bn);Pt.warn(`Firestore (${ne}): ${n}`,...s)}}function bn(n){if(typeof n=="string")return n;try{/**
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
 */function Sn(n="Unexpected state"){const e=`FIRESTORE (${ne}) INTERNAL ASSERTION FAILED: `+n;throw Us(e),new Error(e)}function Yt(n,e){n||Sn()}/**
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
 */const q={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class K extends yt{constructor(e,s){super(e,s),this.code=e,this.message=s,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zt{constructor(){this.promise=new Promise((e,s)=>{this.resolve=e,this.reject=s})}}/**
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
 */class Hs{constructor(e,s){this.user=s,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,s){e.enqueueRetryable(()=>s(z.UNAUTHENTICATED))}shutdown(){}}class Rl{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,s){this.changeListener=s,e.enqueueRetryable(()=>s(this.token.user))}shutdown(){this.changeListener=null}}class Pl{constructor(e){this.t=e,this.currentUser=z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,s){Yt(this.o===void 0);let o=this.i;const l=E=>this.i!==o?(o=this.i,s(E)):Promise.resolve();let f=new Zt;this.o=()=>{this.i++,this.currentUser=this.u(),f.resolve(),f=new Zt,e.enqueueRetryable(()=>l(this.currentUser))};const g=()=>{const E=f;e.enqueueRetryable(async()=>{await E.promise,await l(this.currentUser)})},w=E=>{et("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=E,this.o&&(this.auth.addAuthTokenListener(this.o),g())};this.t.onInit(E=>w(E)),setTimeout(()=>{if(!this.auth){const E=this.t.getImmediate({optional:!0});E?w(E):(et("FirebaseAuthCredentialsProvider","Auth not yet detected"),f.resolve(),f=new Zt)}},0),g()}getToken(){const e=this.i,s=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(s).then(o=>this.i!==e?(et("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):o?(Yt(typeof o.accessToken=="string"),new Hs(o.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Yt(e===null||typeof e=="string"),new z(e)}}class Ol{constructor(e,s,o){this.l=e,this.h=s,this.P=o,this.type="FirstParty",this.user=z.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Ll{constructor(e,s,o){this.l=e,this.h=s,this.P=o}getToken(){return Promise.resolve(new Ol(this.l,this.h,this.P))}start(e,s){e.enqueueRetryable(()=>s(z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Nl{constructor(e,s){this.A=s,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Wo(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,s){Yt(this.o===void 0);const o=f=>{f.error!=null&&et("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${f.error.message}`);const g=f.token!==this.R;return this.R=f.token,et("FirebaseAppCheckTokenProvider",`Received ${g?"new":"existing"} token.`),g?s(f.token):Promise.resolve()};this.o=f=>{e.enqueueRetryable(()=>o(f))};const l=f=>{et("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=f,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(f=>l(f)),setTimeout(()=>{if(!this.appCheck){const f=this.A.getImmediate({optional:!0});f?l(f):et("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Wi(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(s=>s?(Yt(typeof s.token=="string"),this.R=s.token,new Wi(s.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function Ml(n){return n.name==="IndexedDbTransactionError"}const yn="(default)";class _e{constructor(e,s){this.projectId=e,this.database=s||yn}static empty(){return new _e("","")}get isDefaultDatabase(){return this.database===yn}isEqual(e){return e instanceof _e&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var Xi,S;(S=Xi||(Xi={}))[S.OK=0]="OK",S[S.CANCELLED=1]="CANCELLED",S[S.UNKNOWN=2]="UNKNOWN",S[S.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",S[S.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",S[S.NOT_FOUND=5]="NOT_FOUND",S[S.ALREADY_EXISTS=6]="ALREADY_EXISTS",S[S.PERMISSION_DENIED=7]="PERMISSION_DENIED",S[S.UNAUTHENTICATED=16]="UNAUTHENTICATED",S[S.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",S[S.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",S[S.ABORTED=10]="ABORTED",S[S.OUT_OF_RANGE=11]="OUT_OF_RANGE",S[S.UNIMPLEMENTED=12]="UNIMPLEMENTED",S[S.INTERNAL=13]="INTERNAL",S[S.UNAVAILABLE=14]="UNAVAILABLE",S[S.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new $s([4294967295,4294967295],0);/**
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
 */const Bl=41943040;/**
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
 */const jl=1048576;function ln(){return typeof document<"u"?document:null}/**
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
 */class Fl{constructor(e,s,o=1e3,l=1.5,f=6e4){this.Ti=e,this.timerId=s,this.Go=o,this.zo=l,this.jo=f,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const s=Math.floor(this.Ho+this.e_()),o=Math.max(0,Date.now()-this.Yo),l=Math.max(0,s-o);l>0&&et("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.Ho} ms, delay with jitter: ${s} ms, last attempt: ${o} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,l,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */class Cn{constructor(e,s,o,l,f){this.asyncQueue=e,this.timerId=s,this.targetTimeMs=o,this.op=l,this.removalCallback=f,this.deferred=new Zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(g=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,s,o,l,f){const g=Date.now()+o,w=new Cn(e,s,g,l,f);return w.start(o),w}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Ji,Yi;(Yi=Ji||(Ji={}))._a="default",Yi.Cache="cache";/**
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
 */function xl(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Zi=new Map;function $l(n,e,s,o){if(e===!0&&o===!0)throw new K(q.INVALID_ARGUMENT,`${n} and ${s} cannot be used together.`)}function Ul(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(o){return o.constructor?o.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Sn()}function Hl(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new K(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const s=Ul(n);throw new K(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${s}`)}}return n}/**
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
 */const Vs="firestore.googleapis.com",Qi=!0;class ts{constructor(e){var s,o;if(e.host===void 0){if(e.ssl!==void 0)throw new K(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Vs,this.ssl=Qi}else this.host=e.host,this.ssl=(s=e.ssl)!==null&&s!==void 0?s:Qi;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Bl;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<jl)throw new K(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$l("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xl((o=e.experimentalLongPollingOptions)!==null&&o!==void 0?o:{}),function(f){if(f.timeoutSeconds!==void 0){if(isNaN(f.timeoutSeconds))throw new K(q.INVALID_ARGUMENT,`invalid long polling timeout: ${f.timeoutSeconds} (must not be NaN)`);if(f.timeoutSeconds<5)throw new K(q.INVALID_ARGUMENT,`invalid long polling timeout: ${f.timeoutSeconds} (minimum allowed value is 5)`);if(f.timeoutSeconds>30)throw new K(q.INVALID_ARGUMENT,`invalid long polling timeout: ${f.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(o,l){return o.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zs{constructor(e,s,o,l){this._authCredentials=e,this._appCheckCredentials=s,this._databaseId=o,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ts({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ts(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(o){if(!o)return new kl;switch(o.type){case"firstParty":return new Ll(o.sessionIndex||"0",o.iamToken||null,o.authTokenFactory||null);case"provider":return o.client;default:throw new K(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(s){const o=Zi.get(s);o&&(et("ComponentProvider","Removing Datastore"),Zi.delete(s),o.terminate())}(this),Promise.resolve()}}function Vl(n,e,s,o={}){var l;const f=(n=Hl(n,zs))._getSettings(),g=Object.assign(Object.assign({},f),{emulatorOptions:n._getEmulatorOptions()}),w=`${e}:${s}`;f.host!==Vs&&f.host!==w&&Dl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const E=Object.assign(Object.assign({},f),{host:w,ssl:!1,emulatorOptions:o});if(!Qt(E,g)&&(n._setSettings(E),o.mockUserToken)){let A,k;if(typeof o.mockUserToken=="string")A=o.mockUserToken,k=z.MOCK_USER;else{A=Hr(o.mockUserToken,(l=n._app)===null||l===void 0?void 0:l.options.projectId);const _=o.mockUserToken.sub||o.mockUserToken.user_id;if(!_)throw new K(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");k=new z(_)}n._authCredentials=new Rl(new Hs(A,k))}}/**
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
 */const es="AsyncQueue";class ns{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Fl(this,"async_queue_retry"),this.Su=()=>{const o=ln();o&&et(es,"Visibility state changed to "+o.visibilityState),this.a_.t_()},this.bu=e;const s=ln();s&&typeof s.addEventListener=="function"&&s.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const s=ln();s&&typeof s.removeEventListener=="function"&&s.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const s=new Zt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(s.resolve,s.reject),s.promise)).then(()=>s.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Ml(e))throw e;et(es,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const s=this.bu.then(()=>(this.pu=!0,e().catch(o=>{this.gu=o,this.pu=!1;const l=function(g){let w=g.message||"";return g.stack&&(w=g.stack.includes(g.message)?g.stack:g.message+`
`+g.stack),w}(o);throw Us("INTERNAL UNHANDLED ERROR: ",l),o}).then(o=>(this.pu=!1,o))));return this.bu=s,s}enqueueAfterDelay(e,s,o){this.Du(),this.wu.indexOf(e)>-1&&(s=0);const l=Cn.createAndSchedule(this,e,s,o,f=>this.Fu(f));return this.fu.push(l),l}Du(){this.gu&&Sn()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const s of this.fu)if(s.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((s,o)=>s.targetTimeMs-o.targetTimeMs);for(const s of this.fu)if(s.skipDelay(),e!=="all"&&s.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const s=this.fu.indexOf(e);this.fu.splice(s,1)}}class zl extends zs{constructor(e,s,o,l){super(e,s,o,l),this.type="firestore",this._queue=new ns,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ns(e),this._firestoreClient=void 0,await e}}}function Gl(n,e){const s=typeof n=="object"?n:ps(),o=typeof n=="string"?n:yn,l=ee(s,"firestore").getImmediate({identifier:o});if(!l._initialized){const f=$r("firestore");f&&Vl(l,...f)}return l}(function(e,s=!0){(function(l){ne=l})(Yo),mt(new lt("firestore",(o,{instanceIdentifier:l,options:f})=>{const g=o.getProvider("app").getImmediate(),w=new zl(new Pl(o.getProvider("auth-internal")),new Nl(g,o.getProvider("app-check-internal")),function(A,k){if(!Object.prototype.hasOwnProperty.apply(A.options,["projectId"]))throw new K(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _e(A.options.projectId,k)}(g,l),g);return f=Object.assign({useFetchStreams:s},f),w._setSettings(f),w},"PUBLIC").setMultipleInstances(!0)),nt(qi,Ki,e),nt(qi,Ki,"esm2017")})();const ql={apiKey:"AIzaSyD-ez1DM8kB7DTMmyAibGf-tliEi81yb0I",authDomain:"grounded-7832a.firebaseapp.com",projectId:"grounded-7832a",storageBucket:"grounded-7832a.firebasestorage.app",messagingSenderId:"546799366765",appId:"1:546799366765:web:6e25af929a86b24751c564",measurementId:"G-MSNE0YT0GY"},Gs=ds(ql),Kl=bl(Gs);Gl(Gs);function Wl(){document.getElementById("navLinks").style.right="0"}function qs(){document.getElementById("navLinks").style.right="-250px"}window.showMenu=Wl;window.hideMenu=qs;document.querySelectorAll('a[href^="#"]').forEach(n=>{n.addEventListener("click",function(e){e.preventDefault();const s=this.getAttribute("href"),o=document.querySelector(s);o&&(qs(),window.scrollTo({top:o.offsetTop-70,behavior:"smooth"}))})});function Xl(){const n=[{id:"co2-counter",target:10},{id:"miles-counter",target:40},{id:"flights-counter",target:45e3}],e=2500,s=1e3/60,o=Math.ceil(e/s);n.forEach(l=>{const f=document.getElementById(l.id);if(!f)return;const g=l.target/o;let w=0;const E=setInterval(()=>{w+=g,w>=l.target&&(w=l.target,clearInterval(E)),l.id==="co2-counter"||l.id==="miles-counter"?f.textContent=(Math.floor(w*10)/10).toLocaleString():f.textContent=Math.floor(w).toLocaleString()},s)})}function Jl(){const n=document.getElementById("user-count-slider"),e=document.getElementById("user-count"),s=document.getElementById("carbon-counter");n&&n.addEventListener("input",function(){const o=this.value;e.textContent=o.toLocaleString();const l=o*36.5;s.textContent=Math.floor(l).toLocaleString()})}let Xt,Rt,hn,cn;document.addEventListener("DOMContentLoaded",function(){if(Xt=document.getElementById("waitlist-form"),Rt=document.getElementById("success-modal"),hn=document.querySelector(".close"),cn=document.getElementById("close-modal"),Xt){const _=Xt.querySelector('button[type="submit"]');_.addEventListener("click",async function(b){b.preventDefault(),b.stopPropagation();const R=document.getElementById("name"),D=/^[A-Za-z\s]+$/;if(!R.value.trim()||!D.test(R.value.trim())){alert("Please enter a valid name (letters and spaces only)."),R.focus();return}const B=document.getElementById("email"),N=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!B.value.trim()||!N.test(B.value.trim())){alert("Please enter a valid email address."),B.focus();return}const it=document.getElementById("interest");if(!it.value){alert("Please select a sustainable habit you are most interested in tracking."),it.focus();return}if(!document.querySelector('input[name="interestLevel"]:checked')){alert("Please select how excited you are to try Grounded.");return}const G=new FormData(Xt),Y={};G.forEach((st,X)=>{Y[X]=st});try{const st=await grecaptcha.execute("6LeTTg8rAAAAANrjs2RVKYn7vTAL9dIKz9MCTctb",{action:"submit"});Y["g-recaptcha-response"]=st,_.disabled=!0,(await fetch("https://us-central1-grounded-7832a.cloudfunctions.net/submitForm",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Y)})).ok?(Rt.style.display="flex",Xt.reset()):alert("Failed to submit the form. Please try again.")}catch{alert("An error occurred. Please try again later.")}finally{_.disabled=!1}})}hn&&hn.addEventListener("click",function(){Rt.style.display="none"}),cn&&cn.addEventListener("click",function(){Rt.style.display="none"}),window.addEventListener("click",function(_){_.target===Rt&&(Rt.style.display="none")});const n=document.querySelectorAll(".feature-col");window.innerWidth<=700&&n.forEach(_=>{_.addEventListener("click",function(){n.forEach(b=>b.classList.remove("active")),this.classList.add("active")})});const e=new IntersectionObserver(_=>{_.forEach(b=>{b.isIntersecting&&(b.target.id==="carbon-impact"&&Xl(),e.unobserve(b.target))})},{threshold:.5}),s=document.getElementById("carbon-impact");s&&e.observe(s),document.getElementById("user-count-slider")&&Jl();const o=document.getElementById("cookieConsent"),l=document.getElementById("cookieAccept"),f=document.getElementById("cookieSettings"),g=document.getElementById("cookieSettingsPanel"),w=document.getElementById("cookieSave"),E=document.getElementById("analyticsConsent"),A=document.getElementById("marketingConsent"),k=localStorage.getItem("cookieConsent");if(!k)setTimeout(()=>{o.style.display="block"},1e3);else{const _=JSON.parse(k);_.analytics&&console.log("Analytics cookies enabled"),_.marketing&&console.log("Marketing cookies enabled")}l.addEventListener("click",function(){const _={necessary:!0,analytics:!0,marketing:!0};localStorage.setItem("cookieConsent",JSON.stringify(_)),console.log("All cookies accepted"),o.style.display="none"}),f.addEventListener("click",function(){g.style.display="block";const _=localStorage.getItem("cookieConsent");if(_){const b=JSON.parse(_);E.checked=b.analytics||!1,A.checked=b.marketing||!1}}),w.addEventListener("click",function(){const _={necessary:!0,analytics:E.checked,marketing:A.checked};localStorage.setItem("cookieConsent",JSON.stringify(_)),_.analytics&&console.log("Analytics cookies enabled"),_.marketing&&console.log("Marketing cookies enabled"),o.style.display="none"}),document.addEventListener("click",_=>{const b=_.target.closest("button[data-description], a[data-description]");if(b){const R=b.getAttribute("data-description")||"No description";JSON.parse(localStorage.getItem("cookieConsent")||"{}").analytics&&xs(Kl,"button_click",{button_description:R}),console.log(`Event logged: ${R}`)}})});typeof grecaptcha>"u"?console.error("reCAPTCHA script not loaded. Ensure the script is included in index.html."):console.log("reCAPTCHA script loaded successfully.");window.onclick=function(n){const e=document.getElementById("socialPopup");n.target==e&&(e.style.display="none")};
