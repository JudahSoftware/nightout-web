(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.qK(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.u(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.le(b)
return new s(c,this)}:function(){if(s===null)s=A.le(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.le(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
lj(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ku(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.lh==null){A.qy()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.b(A.l_("Return interceptor for "+A.w(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.jK
if(o==null)o=$.jK=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.qD(a)
if(p!=null)return p
if(typeof a=="function")return B.a6
s=Object.getPrototypeOf(a)
if(s==null)return B.G
if(s===Object.prototype)return B.G
if(typeof q=="function"){o=$.jK
if(o==null)o=$.jK=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.w,enumerable:false,writable:true,configurable:true})
return B.w}return B.w},
lJ(a,b){if(a<0||a>4294967295)throw A.b(A.ae(a,0,4294967295,"length",null))
return J.nQ(new Array(a),b)},
nQ(a,b){var s=A.u(a,b.h("p<0>"))
s.$flags=1
return s},
nR(a,b){return J.ng(a,b)},
bL(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cO.prototype
return J.er.prototype}if(typeof a=="string")return J.aW.prototype
if(a==null)return J.cP.prototype
if(typeof a=="boolean")return J.eq.prototype
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aa.prototype
if(typeof a=="symbol")return J.bU.prototype
if(typeof a=="bigint")return J.a8.prototype
return a}if(a instanceof A.d)return a
return J.ku(a)},
dV(a){if(typeof a=="string")return J.aW.prototype
if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aa.prototype
if(typeof a=="symbol")return J.bU.prototype
if(typeof a=="bigint")return J.a8.prototype
return a}if(a instanceof A.d)return a
return J.ku(a)},
bM(a){if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aa.prototype
if(typeof a=="symbol")return J.bU.prototype
if(typeof a=="bigint")return J.a8.prototype
return a}if(a instanceof A.d)return a
return J.ku(a)},
qr(a){if(typeof a=="number")return J.cQ.prototype
if(typeof a=="string")return J.aW.prototype
if(a==null)return a
if(!(a instanceof A.d))return J.bs.prototype
return a},
qs(a){if(typeof a=="string")return J.aW.prototype
if(a==null)return a
if(!(a instanceof A.d))return J.bs.prototype
return a},
mH(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aa.prototype
if(typeof a=="symbol")return J.bU.prototype
if(typeof a=="bigint")return J.a8.prototype
return a}if(a instanceof A.d)return a
return J.ku(a)},
K(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bL(a).T(a,b)},
nf(a,b){if(typeof b==="number")if(Array.isArray(a)||A.mK(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bM(a).n(a,b)},
lp(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.mK(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.bM(a).q(a,b,c)},
lq(a,b){return J.bM(a).B(a,b)},
cz(a,b,c){return J.mH(a).dS(a,b,c)},
ng(a,b){return J.qr(a).aq(a,b)},
kM(a,b){return J.bM(a).C(a,b)},
nh(a){return J.mH(a).gag(a)},
a4(a){return J.bL(a).gA(a)},
ax(a){return J.bM(a).gu(a)},
cA(a){return J.dV(a).gj(a)},
ni(a){return J.bL(a).gD(a)},
lr(a,b,c){return J.bM(a).eb(a,b,c)},
nj(a,b,c,d,e){return J.bM(a).F(a,b,c,d,e)},
kN(a,b){return J.bM(a).U(a,b)},
nk(a,b){return J.qs(a).ez(a,b)},
aS(a){return J.bL(a).i(a)},
en:function en(){},
eq:function eq(){},
cP:function cP(){},
J:function J(){},
aX:function aX(){},
eG:function eG(){},
bs:function bs(){},
aa:function aa(){},
a8:function a8(){},
bU:function bU(){},
p:function p(a){this.$ti=a},
ep:function ep(){},
hB:function hB(a){this.$ti=a},
dX:function dX(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cQ:function cQ(){},
cO:function cO(){},
er:function er(){},
aW:function aW(){}},A={kS:function kS(){},
lx(a,b,c){if(t.Q.b(a))return new A.dp(a,b.h("@<0>").G(c).h("dp<1,2>"))
return new A.be(a,b.h("@<0>").G(c).h("be<1,2>"))},
lK(a){return new A.bk("Field '"+a+"' has been assigned during initialization.")},
nX(a){return new A.bk("Field '"+a+"' has not been initialized.")},
nW(a){return new A.bk("Field '"+a+"' has already been initialized.")},
b0(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
kZ(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
m0(a,b,c){return A.kZ(A.b0(A.b0(c,a),b))},
dU(a,b,c){return a},
li(a){var s,r
for(s=$.bJ.length,r=0;r<s;++r)if(a===$.bJ[r])return!0
return!1},
i5(a,b,c,d){A.ak(b,"start")
if(c!=null){A.ak(c,"end")
if(b>c)A.A(A.ae(b,0,c,"start",null))}return new A.d9(a,b,c,d.h("d9<0>"))},
o2(a,b,c,d){if(t.Q.b(a))return new A.bi(a,b,c.h("@<0>").G(d).h("bi<1,2>"))
return new A.bm(a,b,c.h("@<0>").G(d).h("bm<1,2>"))},
lX(a,b,c){var s="count"
if(t.Q.b(a)){A.fl(b,s)
A.ak(b,s)
return new A.bS(a,b,c.h("bS<0>"))}A.fl(b,s)
A.ak(b,s)
return new A.aL(a,b,c.h("aL<0>"))},
eo(){return new A.al("No element")},
lI(){return new A.al("Too few elements")},
cE:function cE(a,b){this.a=a
this.$ti=b},
bR:function bR(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
b3:function b3(){},
e4:function e4(a,b){this.a=a
this.$ti=b},
be:function be(a,b){this.a=a
this.$ti=b},
dp:function dp(a,b){this.a=a
this.$ti=b},
dk:function dk(){},
ao:function ao(a,b){this.a=a
this.$ti=b},
bk:function bk(a){this.a=a},
kB:function kB(){},
hV:function hV(){},
n:function n(){},
ac:function ac(){},
d9:function d9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bW:function bW(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bm:function bm(a,b,c){this.a=a
this.b=b
this.$ti=c},
bi:function bi(a,b,c){this.a=a
this.b=b
this.$ti=c},
ew:function ew(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
aI:function aI(a,b,c){this.a=a
this.b=b
this.$ti=c},
de:function de(a,b,c){this.a=a
this.b=b
this.$ti=c},
df:function df(a,b){this.a=a
this.b=b},
aL:function aL(a,b,c){this.a=a
this.b=b
this.$ti=c},
bS:function bS(a,b,c){this.a=a
this.b=b
this.$ti=c},
eN:function eN(a,b){this.a=a
this.b=b},
cJ:function cJ(a){this.$ti=a},
ef:function ef(){},
cM:function cM(){},
dO:function dO(){},
mR(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
mK(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
w(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aS(a)
return s},
d0(a){var s,r=$.lM
if(r==null)r=$.lM=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
eH(a){var s,r,q,p
if(a instanceof A.d)return A.ai(A.bN(a),null)
s=J.bL(a)
if(s===B.a5||s===B.a7||t.ak.b(a)){r=B.x(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.ai(A.bN(a),null)},
lT(a){var s,r,q
if(a==null||typeof a=="number"||A.kj(a))return J.aS(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.bf)return a.i(0)
if(a instanceof A.dB)return a.dN(!0)
s=$.nc()
for(r=0;r<1;++r){q=s[r].ij(a)
if(q!=null)return q}return"Instance of '"+A.eH(a)+"'"},
oa(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
bq(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.b.J(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.ae(a,0,1114111,null,null))},
bp(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lS(a){var s=A.bp(a).getFullYear()+0
return s},
lQ(a){var s=A.bp(a).getMonth()+1
return s},
lN(a){var s=A.bp(a).getDate()+0
return s},
lO(a){var s=A.bp(a).getHours()+0
return s},
lP(a){var s=A.bp(a).getMinutes()+0
return s},
lR(a){var s=A.bp(a).getSeconds()+0
return s},
o8(a){var s=A.bp(a).getMilliseconds()+0
return s},
o9(a){var s=A.bp(a).getDay()+0
return B.b.c0(s+6,7)+1},
o7(a){var s=a.$thrownJsError
if(s==null)return null
return A.R(s)},
eI(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.O(a,s)
a.$thrownJsError=s
s.stack=b.i(0)}},
lg(a,b){var s,r="index",q=null
if(!A.lb(b))return new A.an(!0,b,r,q)
s=J.cA(a)
if(b<0||b>=s)return A.el(b,s,a,q,r)
return new A.c0(q,q,!0,b,r,"Value not in range")},
qo(a,b,c){if(a>c)return A.ae(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.ae(b,a,c,"end",null)
return new A.an(!0,b,"end",null)},
b(a){return A.O(a,new Error())},
O(a,b){var s
if(a==null)a=new A.aM()
b.dartException=a
s=A.qM
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
qM(){return J.aS(this.dartException)},
A(a,b){throw A.O(a,b==null?new Error():b)},
F(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.A(A.pf(a,b,c),s)},
pf(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.db("'"+s+"': Cannot "+o+" "+l+k+n)},
S(a){throw A.b(A.a5(a))},
aN(a){var s,r,q,p,o,n
a=A.qH(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.u([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.ih(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
ii(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
m4(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
kT(a,b){var s=b==null,r=s?null:b.method
return new A.es(a,r,s?null:b.receiver)},
P(a){if(a==null)return new A.hK(a)
if(a instanceof A.cK)return A.ba(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.ba(a,a.dartException)
return A.pY(a)},
ba(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
pY(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.J(r,16)&8191)===10)switch(q){case 438:return A.ba(a,A.kT(A.w(s)+" (Error "+q+")",null))
case 445:case 5007:A.w(s)
return A.ba(a,new A.cZ())}}if(a instanceof TypeError){p=$.mW()
o=$.mX()
n=$.mY()
m=$.mZ()
l=$.n1()
k=$.n2()
j=$.n0()
$.n_()
i=$.n4()
h=$.n3()
g=p.X(s)
if(g!=null)return A.ba(a,A.kT(s,g))
else{g=o.X(s)
if(g!=null){g.method="call"
return A.ba(a,A.kT(s,g))}else if(n.X(s)!=null||m.X(s)!=null||l.X(s)!=null||k.X(s)!=null||j.X(s)!=null||m.X(s)!=null||i.X(s)!=null||h.X(s)!=null)return A.ba(a,new A.cZ())}return A.ba(a,new A.eP(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.d7()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.ba(a,new A.an(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.d7()
return a},
R(a){var s
if(a instanceof A.cK)return a.b
if(a==null)return new A.dF(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.dF(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
kC(a){if(a==null)return J.a4(a)
if(typeof a=="object")return A.d0(a)
return J.a4(a)},
pp(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.nE("Unsupported number of arguments for wrapped closure"))},
b9(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.qk(a,b)
a.$identity=s
return s},
qk(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.pp)},
nt(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.i0().constructor.prototype):Object.create(new A.cD(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.lz(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.np(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.lz(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
np(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.nm)}throw A.b("Error in functionType of tearoff")},
nq(a,b,c,d){var s=A.lw
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lz(a,b,c,d){if(c)return A.ns(a,b,d)
return A.nq(b.length,d,a,b)},
nr(a,b,c,d){var s=A.lw,r=A.nn
switch(b?-1:a){case 0:throw A.b(new A.eK("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
ns(a,b,c){var s,r
if($.lu==null)$.lu=A.lt("interceptor")
if($.lv==null)$.lv=A.lt("receiver")
s=b.length
r=A.nr(s,c,a,b)
return r},
le(a){return A.nt(a)},
nm(a,b){return A.dL(v.typeUniverse,A.bN(a.a),b)},
lw(a){return a.a},
nn(a){return a.b},
lt(a){var s,r,q,p=new A.cD("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.a0("Field name "+a+" not found.",null))},
mI(a){return v.getIsolateTag(a)},
qO(a,b){var s=$.k
if(s===B.a)return a
return s.cs(a,b)},
mP(){return v.G},
rn(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qD(a){var s,r,q,p,o,n=$.mJ.$1(a),m=$.kt[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kz[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.mB.$2(a,n)
if(q!=null){m=$.kt[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kz[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.kA(s)
$.kt[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kz[n]=s
return s}if(p==="-"){o=A.kA(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.mN(a,s)
if(p==="*")throw A.b(A.l_(n))
if(v.leafTags[n]===true){o=A.kA(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.mN(a,s)},
mN(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lj(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kA(a){return J.lj(a,!1,null,!!a.$iab)},
qF(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.kA(s)
else return J.lj(s,c,null,null)},
qy(){if(!0===$.lh)return
$.lh=!0
A.qz()},
qz(){var s,r,q,p,o,n,m,l
$.kt=Object.create(null)
$.kz=Object.create(null)
A.qx()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.mO.$1(o)
if(n!=null){m=A.qF(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qx(){var s,r,q,p,o,n,m=B.L()
m=A.cv(B.M,A.cv(B.N,A.cv(B.y,A.cv(B.y,A.cv(B.O,A.cv(B.P,A.cv(B.Q(B.x),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.mJ=new A.kw(p)
$.mB=new A.kx(o)
$.mO=new A.ky(n)},
cv(a,b){return a(b)||b},
qn(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
qH(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
Y:function Y(a,b){this.a=a
this.b=b},
dC:function dC(a,b){this.a=a
this.b=b},
dD:function dD(a,b){this.a=a
this.b=b},
cl:function cl(a,b){this.a=a
this.b=b},
f6:function f6(a,b){this.a=a
this.b=b},
d3:function d3(){},
ih:function ih(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cZ:function cZ(){},
es:function es(a,b,c){this.a=a
this.b=b
this.c=c},
eP:function eP(a){this.a=a},
hK:function hK(a){this.a=a},
cK:function cK(a,b){this.a=a
this.b=b},
dF:function dF(a){this.a=a
this.b=null},
bf:function bf(){},
fA:function fA(){},
fB:function fB(){},
i6:function i6(){},
i0:function i0(){},
cD:function cD(a,b){this.a=a
this.b=b},
eK:function eK(a){this.a=a},
bj:function bj(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hC:function hC(a){this.a=a},
hD:function hD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aG:function aG(a,b){this.a=a
this.$ti=b},
eu:function eu(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
bV:function bV(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
cR:function cR(a,b){this.a=a
this.$ti=b},
et:function et(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
kw:function kw(a){this.a=a},
kx:function kx(a){this.a=a},
ky:function ky(a){this.a=a},
dB:function dB(){},
f5:function f5(){},
qK(a){throw A.O(A.lK(a),new Error())},
T(){throw A.O(A.nX(""),new Error())},
mQ(){throw A.O(A.nW(""),new Error())},
qL(){throw A.O(A.lK(""),new Error())},
ou(){var s=new A.iP("")
return s.b=s},
iP:function iP(a){this.a=a
this.b=null},
pb(a){return a},
fg(a,b,c){},
o3(a,b,c){var s
A.fg(a,b,c)
s=new DataView(a,b)
return s},
aJ(a,b,c){A.fg(a,b,c)
c=B.b.R(a.byteLength-b,4)
return new Int32Array(a,b,c)},
o4(a,b,c){A.fg(a,b,c)
return new Uint32Array(a,b,c)},
o5(a){return new Uint8Array(a)},
aq(a,b,c){A.fg(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
aR(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.lg(b,a))},
pc(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.qo(a,b,c))
return b},
bZ:function bZ(){},
bY:function bY(){},
cX:function cX(){},
fd:function fd(a){this.a=a},
cV:function cV(){},
c_:function c_(){},
cW:function cW(){},
ad:function ad(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
cY:function cY(){},
bo:function bo(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
kW(a,b){var s=b.c
return s==null?b.c=A.dJ(a,"x",[b.x]):s},
lV(a){var s=a.w
if(s===6||s===7)return A.lV(a.x)
return s===11||s===12},
oe(a){return a.as},
av(a){return A.k8(v.typeUniverse,a,!1)},
bI(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.bI(a1,s,a3,a4)
if(r===s)return a2
return A.mf(a1,r,!0)
case 7:s=a2.x
r=A.bI(a1,s,a3,a4)
if(r===s)return a2
return A.me(a1,r,!0)
case 8:q=a2.y
p=A.cu(a1,q,a3,a4)
if(p===q)return a2
return A.dJ(a1,a2.x,p)
case 9:o=a2.x
n=A.bI(a1,o,a3,a4)
m=a2.y
l=A.cu(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.l5(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.cu(a1,j,a3,a4)
if(i===j)return a2
return A.mg(a1,k,i)
case 11:h=a2.x
g=A.bI(a1,h,a3,a4)
f=a2.y
e=A.pU(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.md(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.cu(a1,d,a3,a4)
o=a2.x
n=A.bI(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.l6(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.dZ("Attempted to substitute unexpected RTI kind "+a0))}},
cu(a,b,c,d){var s,r,q,p,o=b.length,n=A.kc(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bI(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
pV(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.kc(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bI(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
pU(a,b,c,d){var s,r=b.a,q=A.cu(a,r,c,d),p=b.b,o=A.cu(a,p,c,d),n=b.c,m=A.pV(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.eY()
s.a=q
s.b=o
s.c=m
return s},
u(a,b){a[v.arrayRti]=b
return a},
mE(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.qu(s)
return a.$S()}return null},
qA(a,b){var s
if(A.lV(b))if(a instanceof A.bf){s=A.mE(a)
if(s!=null)return s}return A.bN(a)},
bN(a){if(a instanceof A.d)return A.q(a)
if(Array.isArray(a))return A.au(a)
return A.l8(J.bL(a))},
au(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
q(a){var s=a.$ti
return s!=null?s:A.l8(a)},
l8(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.pn(a,s)},
pn(a,b){var s=a instanceof A.bf?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.oR(v.typeUniverse,s.name)
b.$ccache=r
return r},
qu(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.k8(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
qt(a){return A.bK(A.q(a))},
lc(a){var s
if(a instanceof A.dB)return A.qq(a.$r,a.dl())
s=a instanceof A.bf?A.mE(a):null
if(s!=null)return s
if(t.dm.b(a))return J.ni(a).a
if(Array.isArray(a))return A.au(a)
return A.bN(a)},
bK(a){var s=a.r
return s==null?a.r=new A.k7(a):s},
qq(a,b){var s,r,q=b,p=q.length
if(p===0)return t.bQ
s=A.dL(v.typeUniverse,A.lc(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.mh(v.typeUniverse,s,A.lc(q[r]))
return A.dL(v.typeUniverse,s,a)},
aw(a){return A.bK(A.k8(v.typeUniverse,a,!1))},
pm(a){var s=this
s.b=A.pS(s)
return s.b(a)},
pS(a){var s,r,q,p
if(a===t.K)return A.pv
if(A.bO(a))return A.pz
s=a.w
if(s===6)return A.pk
if(s===1)return A.ms
if(s===7)return A.pq
r=A.pR(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.bO)){a.f="$i"+q
if(q==="t")return A.pt
if(a===t.m)return A.ps
return A.py}}else if(s===10){p=A.qn(a.x,a.y)
return p==null?A.ms:p}return A.pi},
pR(a){if(a.w===8){if(a===t.S)return A.lb
if(a===t.i||a===t.o)return A.pu
if(a===t.N)return A.px
if(a===t.y)return A.kj}return null},
pl(a){var s=this,r=A.ph
if(A.bO(s))r=A.p2
else if(s===t.K)r=A.p0
else if(A.cx(s)){r=A.pj
if(s===t.I)r=A.oX
else if(s===t.dk)r=A.p1
else if(s===t.a6)r=A.oW
else if(s===t.cg)r=A.p_
else if(s===t.cD)r=A.mm
else if(s===t.A)r=A.oY}else if(s===t.S)r=A.a2
else if(s===t.N)r=A.dP
else if(s===t.y)r=A.bG
else if(s===t.o)r=A.oZ
else if(s===t.i)r=A.bH
else if(s===t.m)r=A.a_
s.a=r
return s.a(a)},
pi(a){var s=this
if(a==null)return A.cx(s)
return A.qC(v.typeUniverse,A.qA(a,s),s)},
pk(a){if(a==null)return!0
return this.x.b(a)},
py(a){var s,r=this
if(a==null)return A.cx(r)
s=r.f
if(a instanceof A.d)return!!a[s]
return!!J.bL(a)[s]},
pt(a){var s,r=this
if(a==null)return A.cx(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.d)return!!a[s]
return!!J.bL(a)[s]},
ps(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.d)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
mr(a){if(typeof a=="object"){if(a instanceof A.d)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
ph(a){var s=this
if(a==null){if(A.cx(s))return a}else if(s.b(a))return a
throw A.O(A.mn(a,s),new Error())},
pj(a){var s=this
if(a==null||s.b(a))return a
throw A.O(A.mn(a,s),new Error())},
mn(a,b){return new A.dH("TypeError: "+A.m6(a,A.ai(b,null)))},
m6(a,b){return A.hk(a)+": type '"+A.ai(A.lc(a),null)+"' is not a subtype of type '"+b+"'"},
am(a,b){return new A.dH("TypeError: "+A.m6(a,b))},
pq(a){var s=this
return s.x.b(a)||A.kW(v.typeUniverse,s).b(a)},
pv(a){return a!=null},
p0(a){if(a!=null)return a
throw A.O(A.am(a,"Object"),new Error())},
pz(a){return!0},
p2(a){return a},
ms(a){return!1},
kj(a){return!0===a||!1===a},
bG(a){if(!0===a)return!0
if(!1===a)return!1
throw A.O(A.am(a,"bool"),new Error())},
oW(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.O(A.am(a,"bool?"),new Error())},
bH(a){if(typeof a=="number")return a
throw A.O(A.am(a,"double"),new Error())},
mm(a){if(typeof a=="number")return a
if(a==null)return a
throw A.O(A.am(a,"double?"),new Error())},
lb(a){return typeof a=="number"&&Math.floor(a)===a},
a2(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.O(A.am(a,"int"),new Error())},
oX(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.O(A.am(a,"int?"),new Error())},
pu(a){return typeof a=="number"},
oZ(a){if(typeof a=="number")return a
throw A.O(A.am(a,"num"),new Error())},
p_(a){if(typeof a=="number")return a
if(a==null)return a
throw A.O(A.am(a,"num?"),new Error())},
px(a){return typeof a=="string"},
dP(a){if(typeof a=="string")return a
throw A.O(A.am(a,"String"),new Error())},
p1(a){if(typeof a=="string")return a
if(a==null)return a
throw A.O(A.am(a,"String?"),new Error())},
a_(a){if(A.mr(a))return a
throw A.O(A.am(a,"JSObject"),new Error())},
oY(a){if(a==null)return a
if(A.mr(a))return a
throw A.O(A.am(a,"JSObject?"),new Error())},
my(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.ai(a[q],b)
return s},
pI(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.my(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.ai(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
mp(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.u([],t.s)
else a0=a2.length
r=a2.length
for(q=s;q>0;--q)a2.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a){o=o+n+a2[a2.length-1-q]
m=a3[q]
l=m.w
if(!(l===2||l===3||l===4||l===5||m===p))o+=" extends "+A.ai(m,a2)}o+=">"}else o=""
p=a1.x
k=a1.y
j=k.a
i=j.length
h=k.b
g=h.length
f=k.c
e=f.length
d=A.ai(p,a2)
for(c="",b="",q=0;q<i;++q,b=a)c+=b+A.ai(j[q],a2)
if(g>0){c+=b+"["
for(b="",q=0;q<g;++q,b=a)c+=b+A.ai(h[q],a2)
c+="]"}if(e>0){c+=b+"{"
for(b="",q=0;q<e;q+=3,b=a){c+=b
if(f[q+1])c+="required "
c+=A.ai(f[q+2],a2)+" "+f[q]}c+="}"}if(a0!=null){a2.toString
a2.length=a0}return o+"("+c+") => "+d},
ai(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=a.x
r=A.ai(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(m===7)return"FutureOr<"+A.ai(a.x,b)+">"
if(m===8){p=A.pX(a.x)
o=a.y
return o.length>0?p+("<"+A.my(o,b)+">"):p}if(m===10)return A.pI(a,b)
if(m===11)return A.mp(a,b,null)
if(m===12)return A.mp(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
pX(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
oS(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
oR(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.k8(a,b,!1)
else if(typeof m=="number"){s=m
r=A.dK(a,5,"#")
q=A.kc(s)
for(p=0;p<s;++p)q[p]=r
o=A.dJ(a,b,q)
n[b]=o
return o}else return m},
oQ(a,b){return A.mj(a.tR,b)},
oP(a,b){return A.mj(a.eT,b)},
k8(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.mb(A.m9(a,null,b,!1))
r.set(b,s)
return s},
dL(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.mb(A.m9(a,b,c,!0))
q.set(c,r)
return r},
mh(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.l5(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
b7(a,b){b.a=A.pl
b.b=A.pm
return b},
dK(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.ar(null,null)
s.w=b
s.as=c
r=A.b7(a,s)
a.eC.set(c,r)
return r},
mf(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.oN(a,b,r,c)
a.eC.set(r,s)
return s},
oN(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.bO(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.cx(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.ar(null,null)
q.w=6
q.x=b
q.as=c
return A.b7(a,q)},
me(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.oL(a,b,r,c)
a.eC.set(r,s)
return s},
oL(a,b,c,d){var s,r
if(d){s=b.w
if(A.bO(b)||b===t.K)return b
else if(s===1)return A.dJ(a,"x",[b])
else if(b===t.P||b===t.T)return t.eH}r=new A.ar(null,null)
r.w=7
r.x=b
r.as=c
return A.b7(a,r)},
oO(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.ar(null,null)
s.w=13
s.x=b
s.as=q
r=A.b7(a,s)
a.eC.set(q,r)
return r},
dI(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
oK(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
dJ(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.dI(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.ar(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.b7(a,r)
a.eC.set(p,q)
return q},
l5(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.dI(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.ar(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.b7(a,o)
a.eC.set(q,n)
return n},
mg(a,b,c){var s,r,q="+"+(b+"("+A.dI(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.ar(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.b7(a,s)
a.eC.set(q,r)
return r},
md(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.dI(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.dI(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.oK(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.ar(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.b7(a,p)
a.eC.set(r,o)
return o},
l6(a,b,c,d){var s,r=b.as+("<"+A.dI(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.oM(a,b,c,r,d)
a.eC.set(r,s)
return s},
oM(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.kc(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.bI(a,b,r,0)
m=A.cu(a,c,r,0)
return A.l6(a,n,m,c!==m)}}l=new A.ar(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.b7(a,l)},
m9(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mb(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.oD(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.ma(a,r,l,k,!1)
else if(q===46)r=A.ma(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.bC(a.u,a.e,k.pop()))
break
case 94:k.push(A.oO(a.u,k.pop()))
break
case 35:k.push(A.dK(a.u,5,"#"))
break
case 64:k.push(A.dK(a.u,2,"@"))
break
case 126:k.push(A.dK(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.oF(a,k)
break
case 38:A.oE(a,k)
break
case 63:p=a.u
k.push(A.mf(p,A.bC(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.me(p,A.bC(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.oC(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.mc(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.oH(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.bC(a.u,a.e,m)},
oD(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ma(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.oS(s,o.x)[p]
if(n==null)A.A('No "'+p+'" in "'+A.oe(o)+'"')
d.push(A.dL(s,o,n))}else d.push(p)
return m},
oF(a,b){var s,r=a.u,q=A.m8(a,b),p=b.pop()
if(typeof p=="string")b.push(A.dJ(r,p,q))
else{s=A.bC(r,a.e,p)
switch(s.w){case 11:b.push(A.l6(r,s,q,a.n))
break
default:b.push(A.l5(r,s,q))
break}}},
oC(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.m8(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.bC(p,a.e,o)
q=new A.eY()
q.a=s
q.b=n
q.c=m
b.push(A.md(p,r,q))
return
case-4:b.push(A.mg(p,b.pop(),s))
return
default:throw A.b(A.dZ("Unexpected state under `()`: "+A.w(o)))}},
oE(a,b){var s=b.pop()
if(0===s){b.push(A.dK(a.u,1,"0&"))
return}if(1===s){b.push(A.dK(a.u,4,"1&"))
return}throw A.b(A.dZ("Unexpected extended operation "+A.w(s)))},
m8(a,b){var s=b.splice(a.p)
A.mc(a.u,a.e,s)
a.p=b.pop()
return s},
bC(a,b,c){if(typeof c=="string")return A.dJ(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.oG(a,b,c)}else return c},
mc(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bC(a,b,c[s])},
oH(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bC(a,b,c[s])},
oG(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.dZ("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.dZ("Bad index "+c+" for "+b.i(0)))},
qC(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.Q(a,b,null,c,null)
r.set(c,s)}return s},
Q(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.bO(d))return!0
s=b.w
if(s===4)return!0
if(A.bO(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.Q(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.Q(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.Q(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.Q(a,b.x,c,d,e))return!1
return A.Q(a,A.kW(a,b),c,d,e)}if(s===6)return A.Q(a,p,c,d,e)&&A.Q(a,b.x,c,d,e)
if(q===7){if(A.Q(a,b,c,d.x,e))return!0
return A.Q(a,b,c,A.kW(a,d),e)}if(q===6)return A.Q(a,b,c,p,e)||A.Q(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.b8)return!0
o=s===10
if(o&&d===t.gT)return!0
if(q===12){if(b===t.g)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.Q(a,j,c,i,e)||!A.Q(a,i,e,j,c))return!1}return A.mq(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.mq(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.pr(a,b,c,d,e)}if(o&&q===10)return A.pw(a,b,c,d,e)
return!1},
mq(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.Q(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.Q(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.Q(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.Q(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.Q(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
pr(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.dL(a,b,r[o])
return A.ml(a,p,null,c,d.y,e)}return A.ml(a,b.y,null,c,d.y,e)},
ml(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.Q(a,b[s],d,e[s],f))return!1
return!0},
pw(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.Q(a,r[s],c,q[s],e))return!1
return!0},
cx(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.bO(a))if(s!==6)r=s===7&&A.cx(a.x)
return r},
bO(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
mj(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
kc(a){return a>0?new Array(a):v.typeUniverse.sEA},
ar:function ar(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
eY:function eY(){this.c=this.b=this.a=null},
k7:function k7(a){this.a=a},
eW:function eW(){},
dH:function dH(a){this.a=a},
op(){var s,r,q
if(self.scheduleImmediate!=null)return A.pZ()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.b9(new A.iH(s),1)).observe(r,{childList:true})
return new A.iG(s,r,q)}else if(self.setImmediate!=null)return A.q_()
return A.q0()},
oq(a){self.scheduleImmediate(A.b9(new A.iI(a),0))},
or(a){self.setImmediate(A.b9(new A.iJ(a),0))},
os(a){A.m2(B.a_,a)},
m2(a,b){var s=B.b.R(a.a,1000)
return A.oI(s<0?0:s,b)},
oI(a,b){var s=new A.fc()
s.eO(a,b)
return s},
oJ(a,b){var s=new A.fc()
s.eP(a,b)
return s},
i(a){return new A.dg(new A.l($.k,a.h("l<0>")),a.h("dg<0>"))},
h(a,b){a.$2(0,null)
b.b=!0
return b.a},
c(a,b){A.p3(a,b)},
f(a,b){b.E(a)},
e(a,b){b.ar(A.P(a),A.R(a))},
p3(a,b){var s,r,q=new A.kd(b),p=new A.ke(b)
if(a instanceof A.l)a.dM(q,p,t.z)
else{s=t.z
if(a instanceof A.l)a.aD(q,p,s)
else{r=new A.l($.k,t.eI)
r.a=8
r.c=a
r.dM(q,p,s)}}},
j(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.k.aY(new A.kp(s),t.H,t.S,t.z)},
cB(a){var s
if(t.C.b(a)){s=a.gal()
if(s!=null)return s}return B.i},
ej(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.P(q)
r=A.R(q)
p=new A.l($.k,b.h("l<0>"))
o=s
n=r
m=A.fh(o,n)
if(m==null)o=new A.I(o,n==null?A.cB(o):n)
else o=m
p.a9(o)
return p}return b.h("x<0>").b(l)?l:A.cj(l,b)},
hs(a,b){var s=a==null?b.a(a):a,r=new A.l($.k,b.h("l<0>"))
r.an(s)
return r},
lE(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.l($.k,b.h("l<t<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.hu(i,h,g,f)
try{for(n=J.ax(a),m=t.P;n.k();){r=n.gm()
q=i.b
r.aD(new A.ht(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.b3(A.u([],b.h("p<0>")))
return n}i.a=A.ev(n,null,!1,b.h("0?"))}catch(l){p=A.P(l)
o=A.R(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.fh(m,k)
if(j==null)m=new A.I(m,k==null?A.cB(m):k)
else m=j
n.a9(m)
return n}else{i.d=p
i.c=o}}return f},
kP(a,b,c,d){var s=new A.hn(d,null,b,c),r=$.k,q=new A.l(r,c.h("l<0>"))
if(r!==B.a)s=r.aY(s,c.h("0/"),t.K,t.l)
a.b2(new A.aB(q,2,null,s,a.$ti.h("@<1>").G(c).h("aB<1,2>")))
return q},
nK(a,b){var s,r,q,p=A.u([],b.h("p<dr<0>>"))
for(s=a.length,r=b.h("dr<0>"),q=0;q<a.length;a.length===s||(0,A.S)(a),++q)p.push(new A.dr(a[q],r))
if(p.length===0)return A.hs(A.u([],b.h("p<0>")),b.h("t<0>"))
s=new A.l($.k,b.h("l<t<0>>"))
A.oA(p,new A.ho(new A.E(s,b.h("E<t<0>>")),p,b))
return s},
pC(a){return a!=null},
oA(a,b){var s,r={},q=r.a=r.b=0,p=new A.jn(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.S)(a),++q)a[q].fM(p)},
fh(a,b){var s,r,q,p=$.k
if(p===B.a)return null
s=p.e4(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.eI(r,q)
return s},
l9(a,b){var s
if($.k!==B.a){s=A.fh(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gal()
if(b==null){A.eI(a,B.i)
b=B.i}}else b=B.i
else if(t.C.b(a))A.eI(a,b)
return new A.I(a,b)},
oz(a,b,c){var s=new A.l(b,c.h("l<0>"))
s.a=8
s.c=a
return s},
cj(a,b){var s=new A.l($.k,b.h("l<0>"))
s.a=8
s.c=a
return s},
jt(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.lZ()
b.a9(new A.I(new A.an(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.dv(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.b7()
b.br(p.a)
A.bA(b,q)
return}b.a^=2
b.b.ak(new A.ju(p,b))},
bA(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=f.c
f.b.aS(r.a,r.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.bA(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){f=r.b
f=!(f===k||f.ga0()===k.ga0())}else f=!1
if(f){f=g.a
r=f.c
f.b.aS(r.a,r.b)
return}j=$.k
if(j!==k)$.k=k
else j=null
f=s.a.c
if((f&15)===8)new A.jy(s,g,p).$0()
else if(q){if((f&1)!==0)new A.jx(s,m).$0()}else if((f&2)!==0)new A.jw(g,s).$0()
if(j!=null)$.k=j
f=s.c
if(f instanceof A.l){r=s.a.$ti
r=r.h("x<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.bw(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.jt(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.bw(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
pJ(a,b){if(t.U.b(a))return b.aY(a,t.z,t.K,t.l)
if(t.L.b(a))return b.a5(a,t.z,t.K)
throw A.b(A.bc(a,"onError",u.c))},
pB(){var s,r
for(s=$.ct;s!=null;s=$.ct){$.dR=null
r=s.b
$.ct=r
if(r==null)$.dQ=null
s.a.$0()}},
pT(){$.la=!0
try{A.pB()}finally{$.dR=null
$.la=!1
if($.ct!=null)$.lo().$1(A.mC())}},
mz(a){var s=new A.eQ(a),r=$.dQ
if(r==null){$.ct=$.dQ=s
if(!$.la)$.lo().$1(A.mC())}else $.dQ=r.b=s},
pQ(a){var s,r,q,p=$.ct
if(p==null){A.mz(a)
$.dR=$.dQ
return}s=new A.eQ(a)
r=$.dR
if(r==null){s.b=p
$.ct=$.dR=s}else{q=r.b
s.b=q
$.dR=r.b=s
if(q==null)$.dQ=s}},
ll(a){var s,r=null,q=$.k
if(B.a===q){A.ko(r,r,B.a,a)
return}if(B.a===q.gck().a)s=B.a.ga0()===q.ga0()
else s=!1
if(s){A.ko(r,r,q,q.a4(a,t.H))
return}s=$.k
s.ak(s.bx(a))},
r_(a){return new A.bE(A.dU(a,"stream",t.K))},
fi(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.P(q)
r=A.R(q)
$.k.aS(s,r)}},
ox(a,b,c,d,e,f){var s=$.k,r=e?1:0,q=c!=null?32:0,p=A.iL(s,b,f),o=A.iM(s,c),n=d==null?A.ld():d
return new A.b5(a,p,o,s.a4(n,t.H),s,r|q,f.h("b5<0>"))},
iL(a,b,c){var s=b==null?A.q2():b
return a.a5(s,t.H,c)},
iM(a,b){if(b==null)b=A.q3()
if(t.k.b(b))return a.aY(b,t.z,t.K,t.l)
if(t.b.b(b))return a.a5(b,t.z,t.K)
throw A.b(A.a0(u.h,null))},
pD(a){},
pF(a,b){$.k.aS(a,b)},
pE(){},
pa(a,b,c){var s=a.p()
if(s!==$.bQ())s.H(new A.kf(b,c))
else b.aK(c)},
mk(a,b,c){var s=A.fh(b,c)
if(s!=null){b=s.a
c=s.b}a.b1(b,c)},
qJ(a,b,c){return A.pP(a,null,b,c)},
pP(a,b,c,d){return $.k.e8(c,b).aA(a,d)},
pN(a,b,c,d,e){A.dS(d,e)},
dS(a,b){A.pQ(new A.kk(a,b))},
kl(a,b,c,d){var s,r=$.k
if(r===c)return d.$0()
$.k=c
s=r
try{r=d.$0()
return r}finally{$.k=s}},
kn(a,b,c,d,e){var s,r=$.k
if(r===c)return d.$1(e)
$.k=c
s=r
try{r=d.$1(e)
return r}finally{$.k=s}},
km(a,b,c,d,e,f){var s,r=$.k
if(r===c)return d.$2(e,f)
$.k=c
s=r
try{r=d.$2(e,f)
return r}finally{$.k=s}},
mw(a,b,c,d){return d},
mx(a,b,c,d){return d},
mv(a,b,c,d){return d},
pM(a,b,c,d,e){return null},
ko(a,b,c,d){var s,r
if(B.a!==c){s=B.a.ga0()
r=c.ga0()
d=s!==r?c.bx(d):c.cr(d,t.H)}A.mz(d)},
pL(a,b,c,d,e){return A.m2(d,B.a!==c?c.cr(e,t.H):e)},
pK(a,b,c,d,e){var s
if(B.a!==c)e=c.dW(e,t.H,t.aF)
s=B.b.R(d.a,1000)
return A.oJ(s<0?0:s,e)},
pO(a,b,c,d){A.lk(d)},
pG(a){$.k.ee(a)},
mu(a,b,c,d,e){var s,r,q,p
$.mt=A.q4()
s=c.gdq()
r=new A.eS(c.gdG(),c.gdI(),c.gdH(),c.gdD(),c.gdE(),c.gdC(),c.gdg(),c.gck(),c.gdc(),c.gda(),c.gdw(),c.gdi(),c.gcb(),c,s)
q=d.x
if(q!=null)r.w=new A.Z(r,q)
p=d.a
if(p!=null)r.as=new A.Z(r,p)
return r},
iH:function iH(a){this.a=a},
iG:function iG(a,b,c){this.a=a
this.b=b
this.c=c},
iI:function iI(a){this.a=a},
iJ:function iJ(a){this.a=a},
fc:function fc(){this.c=0},
k6:function k6(a,b){this.a=a
this.b=b},
k5:function k5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dg:function dg(a,b){this.a=a
this.b=!1
this.$ti=b},
kd:function kd(a){this.a=a},
ke:function ke(a){this.a=a},
kp:function kp(a){this.a=a},
I:function I(a,b){this.a=a
this.b=b},
di:function di(a,b){this.a=a
this.$ti=b},
bx:function bx(a,b,c,d,e,f,g){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
dj:function dj(){},
dh:function dh(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
hu:function hu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ht:function ht(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hn:function hn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ho:function ho(a,b,c){this.a=a
this.b=b
this.c=c},
d_:function d_(a,b){this.c=a
this.d=b},
dr:function dr(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
jo:function jo(a,b){this.a=a
this.b=b},
jp:function jp(a,b){this.a=a
this.b=b},
jn:function jn(a,b,c){this.a=a
this.b=b
this.c=c},
cc:function cc(){},
aA:function aA(a,b){this.a=a
this.$ti=b},
E:function E(a,b){this.a=a
this.$ti=b},
aB:function aB(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
l:function l(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jq:function jq(a,b){this.a=a
this.b=b},
jv:function jv(a,b){this.a=a
this.b=b},
ju:function ju(a,b){this.a=a
this.b=b},
js:function js(a,b){this.a=a
this.b=b},
jr:function jr(a,b){this.a=a
this.b=b},
jy:function jy(a,b,c){this.a=a
this.b=b
this.c=c},
jz:function jz(a,b){this.a=a
this.b=b},
jA:function jA(a){this.a=a},
jx:function jx(a,b){this.a=a
this.b=b},
jw:function jw(a,b){this.a=a
this.b=b},
eQ:function eQ(a){this.a=a
this.b=null},
D:function D(){},
i3:function i3(a,b){this.a=a
this.b=b},
i4:function i4(a,b){this.a=a
this.b=b},
i1:function i1(a){this.a=a},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
bD:function bD(){},
k1:function k1(a){this.a=a},
k0:function k0(a){this.a=a},
fb:function fb(){},
eR:function eR(){},
ca:function ca(){},
cn:function cn(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
b4:function b4(a,b){this.a=a
this.$ti=b},
b5:function b5(a,b,c,d,e,f,g){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
a9:function a9(){},
iO:function iO(a,b,c){this.a=a
this.b=b
this.c=c},
iN:function iN(a){this.a=a},
cm:function cm(){},
eV:function eV(){},
aO:function aO(a){this.b=a
this.a=null},
dm:function dm(a,b){this.b=a
this.c=b
this.a=null},
jf:function jf(){},
dA:function dA(){this.a=0
this.c=this.b=null},
jP:function jP(a,b){this.a=a
this.b=b},
cg:function cg(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
bE:function bE(a){this.a=null
this.b=a
this.c=!1},
aQ:function aQ(a,b){this.b=a
this.$ti=b},
jN:function jN(a,b){this.a=a
this.b=b},
dv:function dv(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
kf:function kf(a,b){this.a=a
this.b=b},
af:function af(){},
ci:function ci(a,b,c,d,e,f,g){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
dM:function dM(a,b,c){this.b=a
this.a=b
this.$ti=c},
ag:function ag(a,b,c){this.b=a
this.a=b
this.$ti=c},
Z:function Z(a,b){this.a=a
this.b=b},
fe:function fe(){},
eS:function eS(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=null
_.ax=n
_.ay=o},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ja:function ja(a,b){this.a=a
this.b=b},
jc:function jc(a,b,c){this.a=a
this.b=b
this.c=c},
f7:function f7(){},
jT:function jT(a,b,c){this.a=a
this.b=b
this.c=c},
jV:function jV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jS:function jS(a,b){this.a=a
this.b=b},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
cr:function cr(a){this.a=a},
kk:function kk(a,b){this.a=a
this.b=b},
ff:function ff(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m},
lG(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.aP(d.h("@<0>").G(e).h("aP<1,2>"))
b=A.mG()}else{if(A.qm()===b&&A.ql()===a)return new A.dt(d.h("@<0>").G(e).h("dt<1,2>"))
if(a==null)a=A.mF()}else{if(b==null)b=A.mG()
if(a==null)a=A.mF()}return A.oy(a,b,c,d,e)},
m7(a,b){var s=a[b]
return s===a?null:s},
l3(a,b,c){if(c==null)a[b]=a
else a[b]=c},
l2(){var s=Object.create(null)
A.l3(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
oy(a,b,c,d,e){var s=c!=null?c:new A.j9(d)
return new A.dl(a,b,s,d.h("@<0>").G(e).h("dl<1,2>"))},
nY(a,b){return new A.bj(a.h("@<0>").G(b).h("bj<1,2>"))},
aH(a,b){return new A.bj(a.h("@<0>").G(b).h("bj<1,2>"))},
nZ(a){return new A.bB(a.h("bB<0>"))},
cS(a){return new A.bB(a.h("bB<0>"))},
l4(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
jM(a,b,c){var s=new A.ck(a,b,c.h("ck<0>"))
s.c=a.e
return s},
pd(a,b){return J.K(a,b)},
pe(a){return J.a4(a)},
lL(a){var s,r
if(A.li(a))return"{...}"
s=new A.d8("")
try{r={}
$.bJ.push(a)
s.a+="{"
r.a=!0
a.bD(0,new A.hF(r,s))
s.a+="}"}finally{$.bJ.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
kU(a){return new A.cT(A.ev(A.o_(null),null,!1,a.h("0?")),a.h("cT<0>"))},
o_(a){return 8},
aP:function aP(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
dt:function dt(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
dl:function dl(a,b,c,d){var _=this
_.f=a
_.r=b
_.w=c
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=d},
j9:function j9(a){this.a=a},
ds:function ds(a,b){this.a=a
this.$ti=b},
eZ:function eZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bB:function bB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jL:function jL(a){this.a=a
this.c=this.b=null},
ck:function ck(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bl:function bl(a){var _=this
_.b=_.a=0
_.c=null
_.$ti=a},
f2:function f2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=!1
_.$ti=d},
a1:function a1(){},
v:function v(){},
aZ:function aZ(){},
hE:function hE(a){this.a=a},
hF:function hF(a,b){this.a=a
this.b=b},
cT:function cT(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
f3:function f3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
c1:function c1(){},
dE:function dE(){},
oU(a,b,c){var s,r,q,p=c-b
if(p<=4096)s=$.n9()
else s=new Uint8Array(p)
for(r=0;r<p;++r){q=a[b+r]
if((q&255)!==q)q=255
s[r]=q}return s},
oT(a,b,c,d){var s=a?$.n8():$.n7()
if(s==null)return null
if(0===c&&d===b.length)return A.mi(s,b)
return A.mi(s,b.subarray(c,d))},
mi(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
oV(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
ka:function ka(){},
k9:function k9(){},
e6:function e6(){},
e8:function e8(){},
hi:function hi(){},
ij:function ij(){},
ik:function ik(){},
kb:function kb(a){this.b=0
this.c=a},
cp:function cp(a){this.a=a
this.b=16
this.c=0},
qw(a){return A.kC(a)},
jm(a,b){var s=$.n5()
s=s==null?null:new s(A.b9(A.qO(a,b),1))
return new A.eX(s,b.h("eX<0>"))},
nC(a,b){a=A.O(a,new Error())
a.stack=b.i(0)
throw a},
ev(a,b,c,d){var s,r=J.lJ(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
o1(a,b,c){var s,r,q=A.u([],c.h("p<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.S)(a),++r)q.push(a[r])
q.$flags=1
return q},
bX(a,b){var s,r=A.u([],b.h("p<0>"))
for(s=J.ax(a);s.k();)r.push(s.gm())
return r},
og(a,b,c){var s,r
A.ak(b,"start")
s=c-b
if(s<0)throw A.b(A.ae(c,b,null,"end",null))
if(s===0)return""
r=A.oh(a,b,c)
return r},
oh(a,b,c){var s=a.length
if(b>=s)return""
return A.oa(a,b,c==null||c>s?s:c)},
qv(a,b){return a==null?b==null:a===b},
m_(a,b,c){var s=J.ax(b)
if(!s.k())return a
if(c.length===0){do a+=A.w(s.gm())
while(s.k())}else{a+=A.w(s.gm())
while(s.k())a=a+c+A.w(s.gm())}return a},
lZ(){return A.R(new Error())},
ny(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
lA(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ee(a){if(a>=10)return""+a
return"0"+a},
lB(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.b(A.bc(b,"name","No enum value with that name"))},
hk(a){if(typeof a=="number"||A.kj(a)||a==null)return J.aS(a)
if(typeof a=="string")return JSON.stringify(a)
return A.lT(a)},
nD(a,b){A.dU(a,"error",t.K)
A.dU(b,"stackTrace",t.l)
A.nC(a,b)},
dZ(a){return new A.dY(a)},
a0(a,b){return new A.an(!1,null,b,a)},
bc(a,b,c){return new A.an(!0,a,b,c)},
fl(a,b){return a},
lU(a){var s=null
return new A.c0(s,s,!1,s,s,a)},
ae(a,b,c,d,e){return new A.c0(b,c,!0,a,d,"Invalid value")},
d1(a,b,c){if(0>a||a>c)throw A.b(A.ae(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.ae(b,a,c,"end",null))
return b}return c},
ak(a,b){if(a<0)throw A.b(A.ae(a,0,null,b,null))
return a},
lH(a,b){var s=b.b
return new A.cN(s,!0,a,null,"Index out of range")},
el(a,b,c,d,e){return new A.cN(b,!0,a,e,"Index out of range")},
bt(a){return new A.db(a)},
l_(a){return new A.eO(a)},
C(a){return new A.al(a)},
a5(a){return new A.e7(a)},
nE(a){return new A.jj(a)},
nJ(a,b,c){return new A.hm(a,b,c)},
nP(a,b,c){var s,r
if(A.li(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.u([],t.s)
$.bJ.push(a)
try{A.pA(a,s)}finally{$.bJ.pop()}r=A.m_(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
hA(a,b,c){var s,r
if(A.li(a))return b+"..."+c
s=new A.d8(b)
$.bJ.push(a)
try{r=s
r.a=A.m_(r.a,a,", ")}finally{$.bJ.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
pA(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.k())return
s=A.w(l.gm())
b.push(s)
k+=s.length+2;++j}if(!l.k()){if(j<=5)return
r=b.pop()
q=b.pop()}else{p=l.gm();++j
if(!l.k()){if(j<=4){b.push(A.w(p))
return}r=A.w(p)
q=b.pop()
k+=r.length+2}else{o=l.gm();++j
for(;l.k();p=o,o=n){n=l.gm();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.w(p)
r=A.w(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
kV(a,b,c,d){var s
if(B.f===c)return A.m0(J.a4(a),J.a4(b),$.kL())
if(B.f===d){s=J.a4(a)
b=J.a4(b)
c=J.a4(c)
return A.kZ(A.b0(A.b0(A.b0($.kL(),s),b),c))}s=J.a4(a)
b=J.a4(b)
c=J.a4(c)
d=J.a4(d)
d=A.kZ(A.b0(A.b0(A.b0(A.b0($.kL(),s),b),c),d))
return d},
o6(a){var s,r,q,p,o,n,m
for(s=A.jM(a,a.r,A.q(a).c),r=s.$ti.c,q=0,p=0;s.k();){o=s.d
n=J.a4(o==null?r.a(o):o)
m=((n^n>>>16)>>>0)*569420461>>>0
m=((m^m>>>15)>>>0)*3545902487>>>0
q=q+((m^m>>>15)>>>0)&1073741823;++p}return A.m0(q,p,0)},
eX:function eX(a,b){this.a=a
this.$ti=b},
ed:function ed(a,b,c){this.a=a
this.b=b
this.c=c},
aE:function aE(a){this.a=a},
jg:function jg(){},
G:function G(){},
dY:function dY(a){this.a=a},
aM:function aM(){},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c0:function c0(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cN:function cN(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
db:function db(a){this.a=a},
eO:function eO(a){this.a=a},
al:function al(a){this.a=a},
e7:function e7(a){this.a=a},
eF:function eF(){},
d7:function d7(){},
jj:function jj(a){this.a=a},
hm:function hm(a,b,c){this.a=a
this.b=b
this.c=c},
r:function r(){},
ap:function ap(a,b,c){this.a=a
this.b=b
this.$ti=c},
z:function z(){},
d:function d(){},
fa:function fa(){},
d8:function d8(a){this.a=a},
eg:function eg(a){this.a=a},
o0(a){return a},
nS(a){return a},
nU(a){return a},
kY(a){return a},
nL(a){return new v.G.Promise(A.ah(new A.hr(a)))},
hJ:function hJ(a){this.a=a},
hr:function hr(a){this.a=a},
hp:function hp(a){this.a=a},
hq:function hq(a){this.a=a},
kh(a){var s
if(typeof a=="function")throw A.b(A.a0("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.p4,a)
s[$.bP()]=a
return s},
aC(a){var s
if(typeof a=="function")throw A.b(A.a0("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.p5,a)
s[$.bP()]=a
return s},
ah(a){var s
if(typeof a=="function")throw A.b(A.a0("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.p6,a)
s[$.bP()]=a
return s},
ki(a){var s
if(typeof a=="function")throw A.b(A.a0("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.p7,a)
s[$.bP()]=a
return s},
cs(a){var s
if(typeof a=="function")throw A.b(A.a0("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.p8,a)
s[$.bP()]=a
return s},
l7(a){var s
if(typeof a=="function")throw A.b(A.a0("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.p9,a)
s[$.bP()]=a
return s},
p4(a){return a.$0()},
p5(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
p6(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
p7(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
p8(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
p9(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
kv(a,b){return a[b]},
mD(a,b,c){return a[b].apply(a,c)},
qi(a,b){var s,r
if(b==null)return new a()
if(b instanceof Array)switch(b.length){case 0:return new a()
case 1:return new a(b[0])
case 2:return new a(b[0],b[1])
case 3:return new a(b[0],b[1],b[2])
case 4:return new a(b[0],b[1],b[2],b[3])}s=[null]
B.c.af(s,b)
r=a.bind.apply(a,s)
String(r)
return new r()},
a3(a,b){var s=new A.l($.k,b.h("l<0>")),r=new A.aA(s,b.h("aA<0>"))
a.then(A.b9(new A.kE(r),1),A.b9(new A.kF(r),1))
return s},
kE:function kE(a){this.a=a},
kF:function kF(a){this.a=a},
jI:function jI(){},
jJ:function jJ(a){this.a=a},
cI:function cI(){},
co:function co(){},
d4:function d4(a){this.$ti=a},
of(a){var s
A:{if(18===a){s=B.af
break A}if(23===a){s=B.ag
break A}if(9===a){s=B.ah
break A}s=null
break A}return s},
d6:function d6(a,b){this.a=a
this.b=b},
as:function as(a,b,c){this.a=a
this.b=b
this.c=c},
lY(a,b,c,d,e,f,g){return new A.c3(d,b,c,e,f,a,g)},
c3:function c3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
i_:function i_(){},
h1:function h1(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1},
ha:function ha(a){this.a=a},
h9:function h9(a){this.a=a},
hb:function hb(a){this.a=a},
h7:function h7(a){this.a=a},
h6:function h6(a){this.a=a},
h8:function h8(a){this.a=a},
h3:function h3(a){this.a=a},
h2:function h2(a){this.a=a},
h4:function h4(a){this.a=a},
h5:function h5(a,b){this.a=a
this.b=b},
b6:function b6(a,b,c,d,e){var _=this
_.a=a
_.b=!1
_.c=b
_.d=null
_.e=c
_.f=d
_.w=_.r=null
_.$ti=e},
k2:function k2(a,b){this.a=a
this.b=b},
k3:function k3(a,b,c){this.a=a
this.b=b
this.c=c},
k4:function k4(a,b,c){this.a=a
this.b=b
this.c=c},
hZ:function hZ(){},
c4:function c4(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
kQ(a,b){var s=$.fk()
return new A.ek(A.aH(t.N,t.fN),s,a)},
ek:function ek(a,b,c){this.d=a
this.b=b
this.a=c},
f_:function f_(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
qG(a){var s=J.nk(new v.G.URL(a,"file:///").pathname,"/")
return new A.de(s,new A.kD(),A.au(s).h("de<1>"))},
kD:function kD(){},
e2:function e2(a){this.a=a},
hL:function hL(a,b){this.a=a
this.b=b},
ob(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
A:{if(100===r){s=!0
break A}if(101===r||0===r)break A
s=a.a6(r,"step")}return s},
bg:function bg(){},
hz:function hz(){},
cH:function cH(a){this.a=a},
c6(a){return new A.b1(a)},
ls(a,b){var s,r,q,p
if(b==null)b=$.fk()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.bS(256)
r&2&&A.F(a)
a[q]=p}},
b1:function b1(a){this.a=a},
d5:function d5(a){this.a=a},
W:function W(){},
e1:function e1(){},
e0:function e0(){},
qI(a,b){var s=null,r=new A.bl(t.bN)
return A.qJ(a,new A.ff(s,s,s,s,s,s,s,s,new A.kH(new A.kG(r,A.kh(new A.kI(r)))),s,s,s,s),b)},
bw:function bw(a){var _=this
_.d=a
_.c=_.b=_.a=null},
kI:function kI(a){this.a=a},
kG:function kG(a,b){this.a=a
this.b=b},
kH:function kH(a){this.a=a},
iw:function iw(a){this.a=a},
ir:function ir(a,b,c){this.a=a
this.b=b
this.c=c},
iy:function iy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ix:function ix(a,b,c){this.b=a
this.c=b
this.d=c},
bu:function bu(){},
bv:function bv(){},
c8:function c8(a,b,c){this.a=a
this.b=b
this.c=c},
aj(a){var s,r,q
try{a.$0()
return 0}catch(r){q=A.P(r)
if(q instanceof A.b1){s=q
return s.a}else return 1}},
ea:function ea(a){this.b=this.a=$
this.d=a},
fQ:function fQ(a,b,c){this.a=a
this.b=b
this.c=c},
fN:function fN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fS:function fS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fU:function fU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fW:function fW(a,b){this.a=a
this.b=b},
fP:function fP(a){this.a=a},
fV:function fV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h_:function h_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fY:function fY(a,b){this.a=a
this.b=b},
fX:function fX(a,b){this.a=a
this.b=b},
fR:function fR(a,b,c){this.a=a
this.b=b
this.c=c},
fT:function fT(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b){this.a=a
this.b=b},
fO:function fO(a,b,c){this.a=a
this.b=b
this.c=c},
nV(a){return new A.e2(a)},
cC:function cC(a,b){this.a=a
this.$ti=b},
fm:function fm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fo:function fo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fn:function fn(a,b,c){this.a=a
this.b=b
this.c=c},
ay(a,b){var s=new A.l($.k,b.h("l<0>")),r=new A.E(s,b.h("E<0>")),q=t.m
A.a7(a,"success",new A.fE(r,a,b),!1,q)
A.a7(a,"error",new A.fF(r,a),!1,q)
return s},
nx(a,b){var s=new A.l($.k,b.h("l<0>")),r=new A.E(s,b.h("E<0>")),q=t.m
A.a7(a,"success",new A.fJ(r,a,b),!1,q)
A.a7(a,"error",new A.fK(r,a),!1,q)
A.a7(a,"blocked",new A.fL(r),!1,q)
return s},
by:function by(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
j7:function j7(a,b){this.a=a
this.b=b},
j8:function j8(a,b){this.a=a
this.b=b},
fE:function fE(a,b,c){this.a=a
this.b=b
this.c=c},
fF:function fF(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.c=c},
fK:function fK(a,b){this.a=a
this.b=b},
fL:function fL(a){this.a=a},
kJ(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
lC(a,b,c){var s=a.read(b,c)
return s},
lD(a,b,c){var s=a.write(b,c)
return s},
nF(a){var s=t.cO
if(!(v.G.Symbol.asyncIterator in a))A.A(A.a0("Target object does not implement the async iterable interface",null))
return new A.ag(new A.hl(),new A.cC(a,s),s.h("ag<D.T,m>"))},
hl:function hl(){},
is:function is(a){this.a=a},
it:function it(a){this.a=a},
iv(a,b){var s=0,r=A.i(t.n),q,p,o
var $async$iv=A.j(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.c(A.a3(p.fetch(new p.URL(a,A.a_(p.location).href),null),t.m),$async$iv)
case 3:q=o.iu(d,null)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$iv,r)},
iu(a,b){var s=0,r=A.i(t.n),q,p,o,n,m
var $async$iu=A.j(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:p=new A.ea(A.aH(t.S,t.b9))
o=A
n=A
m=A
s=3
return A.c(new A.is(p).bQ(a),$async$iu)
case 3:q=new o.c7(new n.iw(m.on(d,p)))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$iu,r)},
c7:function c7(a){this.a=a},
oB(a){var s=new A.du(a,new A.E(new A.l($.k,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.eM(a)
return s},
em(a,b,c){var s=0,r=A.i(t.bd),q,p,o,n,m,l
var $async$em=A.j(function(d,e){if(d===1)return A.e(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.ft(a)
n=A.kQ("dart-memory",null)
m=$.fk()
l=new A.aV(o,n,new A.bl(t.au),A.cS(p),A.aH(p,t.S),m,b)
l.r=!1
s=3
return A.c(o.bT(),$async$em)
case 3:s=4
return A.c(l.b6(),$async$em)
case 4:q=l
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$em,r)},
ft:function ft(a){this.a=null
this.b=a},
fw:function fw(a){this.a=a},
fv:function fv(a,b,c){this.a=a
this.b=b
this.c=c},
fu:function fu(a){this.a=a},
du:function du(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c
_.e=d},
jD:function jD(a){this.a=a},
jE:function jE(a){this.a=a},
jC:function jC(a){this.a=a},
jF:function jF(a,b,c){this.a=a
this.b=b
this.c=c},
jH:function jH(a,b){this.a=a
this.b=b},
jG:function jG(a,b){this.a=a
this.b=b},
jk:function jk(a,b,c){this.a=a
this.b=b
this.c=c},
jl:function jl(a,b){this.a=a
this.b=b},
f4:function f4(a,b){this.a=a
this.b=b},
aV:function aV(a,b,c,d,e,f,g){var _=this
_.d=a
_.f=_.e=!1
_.r=!0
_.w=b
_.x=c
_.y=d
_.z=e
_.b=f
_.a=g},
hx:function hx(a,b,c){this.a=a
this.b=b
this.c=c},
hy:function hy(){},
hw:function hw(a,b){this.a=a
this.b=b},
f0:function f0(a,b,c){this.a=a
this.b=b
this.c=c},
jB:function jB(a,b){this.a=a
this.b=b},
X:function X(){},
dq:function dq(a,b){var _=this
_.w=a
_.d=b
_.c=_.b=_.a=null},
dn:function dn(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
cf:function cf(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
cq:function cq(a,b,c,d,e){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.d=e
_.c=_.b=_.a=null},
lW(a){var s=A.kQ("dart-memory",null),r=$.fk()
return new A.c2(s,r,a)},
eL(a,b){var s=0,r=A.i(t.cf),q,p,o,n,m,l,k,j
var $async$eL=A.j(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:j=A.kJ()
if(j==null)throw A.b(A.c6(1))
p=t.m
s=3
return A.c(A.a3(j.getDirectory(),p),$async$eL)
case 3:o=d
n=A.qG(a),m=J.ax(n.a),n=new A.df(m,n.b),l=null
case 4:if(!n.k()){s=6
break}s=7
return A.c(A.a3(o.getDirectoryHandle(m.gm(),{create:!0}),p),$async$eL)
case 7:k=d
case 5:l=o,o=k
s=4
break
case 6:q=new A.Y(l,o)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$eL,r)},
eM(a){var s=0,r=A.i(t.m),q
var $async$eM=A.j(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.c(A.eL(a,!0),$async$eM)
case 3:q=c.b
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$eM,r)},
hX(a,b){var s=0,r=A.i(t.v),q,p
var $async$hX=A.j(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:if(A.kJ()==null)throw A.b(A.c6(1))
p=A
s=3
return A.c(A.eM(a),$async$hX)
case 3:q=p.hW(d,!1,b)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$hX,r)},
hW(a,b,c){var s=0,r=A.i(t.v),q,p
var $async$hW=A.j(function(d,e){if(d===1)return A.e(e,r)
for(;;)switch(s){case 0:p=A.lW(c)
s=3
return A.c(p.ai(a,!1),$async$hW)
case 3:q=p
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$hW,r)},
bT:function bT(a,b,c){this.c=a
this.a=b
this.b=c},
c2:function c2(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
hY:function hY(a,b){this.a=a
this.b=b},
f9:function f9(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
jO:function jO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
on(a,b){var s=A.a_(a.exports.memory)
b.b!==$&&A.mQ()
b.b=s
s=new A.il(s,b,a.exports)
s.eK(a,b)
return s},
iF(a,b){var s,r=A.aq(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
c9(a,b){var s=a.buffer,r=A.iF(a,b)
return B.z.e1(A.aq(s,b,r))},
l0(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.z.e1(A.aq(s,b,c==null?A.iF(a,b):c))},
il:function il(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
im:function im(a){this.a=a},
io:function io(a){this.a=a},
ip:function ip(a){this.a=a},
iq:function iq(a){this.a=a},
ks(){var s=0,r=A.i(t.eJ),q,p,o,n,m,l
var $async$ks=A.j(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.dW()
s=l!=null?3:5
break
case 3:p=A.pH()
s=6
return A.c(A.dd(l,p,null,null,!1),$async$ks)
case 6:o=b
s=4
break
case 5:o=null
p=null
case 4:n=m.port2
q=new A.Y({port:m.port1,lockName:p},new A.cG(n,p,o))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$ks,r)},
pH(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.bq(97+$.nb().bS(26))
return r.charCodeAt(0)==0?r:r},
no(a){return new A.e5(a)},
cG:function cG(a,b,c){this.a=a
this.b=b
this.c=c},
hN:function hN(){},
hR:function hR(a){this.a=a},
hS:function hS(a){this.a=a},
hQ:function hQ(a){this.a=a},
hP:function hP(a){this.a=a},
hO:function hO(a){this.a=a},
e5:function e5(a){this.a=a},
h0:function h0(){},
e9:function e9(a){this.a=a},
fM:function fM(a,b){this.c=a
this.a=b},
b2:function b2(){},
ei(a,b,c){var s=0,r=A.i(t.gk),q,p,o
var $async$ei=A.j(function(d,e){if(d===1)return A.e(e,r)
for(;;)switch(s){case 0:s=3
return A.c(A.eM(a),$async$ei)
case 3:p=e
o=A.lW(c)
s=b?4:5
break
case 4:s=6
return A.c(o.ai(p,!0),$async$ei)
case 6:case 5:q=new A.eh(o,p,b)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$ei,r)},
eh:function eh(a,b,c){this.a=a
this.b=b
this.c=c},
hv:function hv(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
dd(a,b,c,d,e){var s,r,q={},p=new A.l($.k,t.cp),o=new A.E(p,t.eP)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.kP(A.a3(a.request(b,s,A.aC(new A.iz(q,o))),r),new A.iA(q,d,o),r,t.K)
return p},
iz:function iz(a,b){this.a=a
this.b=b},
iA:function iA(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(a){this.a=a},
eb:function eb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null},
hd:function hd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hc:function hc(a,b){this.a=a
this.b=b},
he:function he(a){this.a=a},
cU:function cU(a){this.a=!1
this.b=a},
hI:function hI(a,b){this.a=a
this.b=b},
hH:function hH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hG:function hG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nu(a){var s,r,q,p,o=A.u([],t.gQ),n=t.c.a(a.a),m=t.h.b(n)?n:new A.ao(n,A.au(n).h("ao<1,y>"))
for(s=J.dV(m),r=0;r<s.gj(m)/2;++r){q=r*2
o.push(new A.Y(A.lB(B.ac,s.n(m,q)),s.n(m,q+1)))}s=A.bG(a.b)
q=A.bG(a.c)
p=A.bG(a.d)
return new A.bh(o,s,q,A.bG(a.g),p)},
bh:function bh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oc(a){var s
if(J.K(a.t,"errorResponse")){s=A.nz(a)
if(s!=null&&s instanceof A.bb)return s
else return new A.d2(a.e)}else return new A.d2("Did not respond with expected type, got "+A.w(a))},
nz(a){var s=a.s,r=s==null?null:A.a2(s)
A:{if(0===r){s=A.nA(t.c.a(a.r))
break A}if(1===r){s=B.k
break A}s=null
break A}return s},
nA(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
if(n){s=a[0]
m=a[1]
l=a[2]
k=a[3]
j=a[4]
i=a[5]
h=a[6]
g=a[7]}else s=o
if(!n)throw A.b(A.C("Pattern matching error"))
n=new A.hj()
l=A.a2(A.bH(l))
A.dP(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.a.a(h)
p=new A.aT(i,h,A.aq(h,0,o))}else p=o
n=n.$1(k)
A.mm(g)
return new A.c3(s,r,l,g==null?o:A.a2(g),n,q,p)},
nB(a){var s,r,q,p,o,n,m=null,l=a.r
A:{if(l==null){s=m
break A}s=A.m3(l)
break A}r=a.b
if(r==null)r=m
q=a.e
if(q==null)q=m
p=a.f
if(p==null)p=m
o=s==null
n=o?m:s.a
s=o?m:s.b
o=a.d
if(o==null)o=m
return[a.a,r,a.c,q,p,n,s,o]},
od(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.hv(a2,512,"transfer" in a2)
a5.dV(a4)
for(s=a4.a,r=s.c,s=s.b,q=r.d,r=r.b,p=0,o=!0;A.ob(a4);){if(o){p=q.sqlite3_column_count(s)
o=!1}n=a3.d
m=a3.d=n+p
if(m>a3.b)a3.f6(m)
m=new a0.DataView(a3.a,n,p)
l=new a0.Array(p)
for(k=0;k<p;++k){switch(q.sqlite3_column_type(s,k)){case 1:j=q.sqlite3_column_int64(s,k)
i=a0.Number(j)
if(a0.Number.isSafeInteger(i)){j=i
h=B.p}else h=B.q
break
case 2:j=q.sqlite3_column_double(s,k)
h=B.r
break
case 3:g=q.sqlite3_column_text(s,k)
f=r.buffer
e=A.iF(r,g)
g=new Uint8Array(f,g,e)
d=new A.cp(!1).bs(g,0,a,!0)
j=d
h=B.t
break
case 4:g=q.sqlite3_column_bytes(s,k)
f=q.sqlite3_column_blob(s,k)
c=new Uint8Array(g)
e=r.buffer
g=new Uint8Array(e,f,g)
B.d.aH(c,0,g)
j=c
h=B.u
break
case 5:default:j=a
h=B.v}l[k]=j
m.setUint8(k,h.a)}a1.push(l)}b=new a0.Array(p)
for(k=0;k<p;++k){a0=q.sqlite3_column_name(s,k)
m=r.buffer
g=A.iF(r,a0)
a0=new Uint8Array(m,a0,g)
b[k]=new A.cp(!1).bs(a0,0,a,!0)}return A.mL(!1,b,0,0,a1,a,a3.ig(0))},
qB(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
hj:function hj(){},
mL(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
cw(a){var s,r,q,p,o=v.G,n=new o.Array()
switch(a.t){case"connect":n.push(a.r.port)
break
case"fileSystemAccess":s=a.b
if(s!=null)n.push(s)
break
case"runQuery":n.push(a.v)
break
case"simpleSuccessResponse":r=a.r
if(r!=null){o=o.ArrayBuffer
o=r instanceof o
q=r}else{q=null
o=!1}if(o)n.push(q)
break
case"endpointResponse":n.push(a.r.port)
break
case"rowsResponse":p=a.v
if(p!=null)n.push(p)
break}return n},
qp(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
ex:function ex(a,b){this.a=a
this.b=b},
hU:function hU(){},
nG(a){var s,r
for(s=0;s<5;++s){r=B.a8[s]
if(r.c===a)return r}throw A.b(A.a0("Unknown FS implementation: "+a,null))},
oi(a){var s,r,q,p,o,n,m,l,k,j=null
A:{if(a==null){s=j
r=B.v
break A}q=A.lb(a)
p=q?a:j
if(q){s=p
r=B.p
break A}q=a instanceof A.e2
if(q)o=a
else o=j
if(q){s=o.a
r=B.q
break A}q=typeof a=="number"
n=q?a:j
if(q){s=n
r=B.r
break A}q=typeof a=="string"
m=q?a:j
if(q){s=m
r=B.t
break A}q=t.p.b(a)
l=q?a:j
if(q){s=l
r=B.u
break A}q=A.kj(a)
k=q?a:j
if(q){s=k
r=B.J
break A}throw A.b(A.a0("Unsupported value: "+A.w(a),j))}return new A.Y(r,s)},
m3(a){var s,r,q,p,o,n
if(a instanceof A.aT)return new A.Y(a.a,a.b)
s=[]
r=J.dV(a)
q=r.gj(a)
p=new Uint8Array(q)
for(o=0;o<r.gj(a);++o){n=A.oi(r.n(a,o))
p[o]=n.a.a
s.push(n.b)}return new A.Y(s,t.a.a(B.d.gag(p)))},
aU:function aU(a,b,c){this.c=a
this.a=b
this.b=c},
at:function at(a,b){this.a=a
this.b=b},
aT:function aT(a,b,c){this.a=a
this.b=b
this.c=c},
fj(){var s=0,r=A.i(t.y),q,p=2,o=[],n=[],m,l,k,j,i,h
var $async$fj=A.j(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=v.G
if(!("indexedDB" in i)||!("FileReader" in i)){q=!1
s=1
break}m=A.a_(i.indexedDB)
i=$.dW()
i=i==null?null:A.dd(i,"drift_mock_db",null,null,!1)
s=3
return A.c(t.V.b(i)?i:A.cj(i,t.gp),$async$fj)
case 3:l=b
p=5
s=8
return A.c(A.nw(m.open("drift_mock_db"),t.m),$async$fj)
case 8:k=b
k.close()
m.deleteDatabase("drift_mock_db")
n.push(7)
s=6
break
case 5:p=4
h=o.pop()
q=!1
n=[1]
s=6
break
n.push(7)
s=6
break
case 4:n=[2]
case 6:p=2
i=l
if(i!=null)i.a.O()
s=n.pop()
break
case 7:q=!0
s=1
break
case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$fj,r)},
kq(a){return A.qj(a)},
qj(a){var s=0,r=A.i(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$kq=A.j(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.a_(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.aC(new A.kr(j,m))
s=7
return A.c(A.nv(m,t.m),$async$kq)
case 7:l=c
if(j.a==null)j.a=!0
l.close()
p=2
s=6
break
case 4:p=3
i=o.pop()
s=6
break
case 3:s=2
break
case 6:j=j.a
q=j===!0
s=1
break
case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$kq,r)},
cy(){var s=0,r=A.i(t.h),q,p=2,o=[],n=[],m,l,k,j,i,h,g
var $async$cy=A.j(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=A.kJ()
if(h==null){q=B.F
s=1
break}j=t.m
s=3
return A.c(A.a3(h.getDirectory(),j),$async$cy)
case 3:m=b
p=5
s=8
return A.c(A.a3(m.getDirectoryHandle("drift_db",{create:!1}),j),$async$cy)
case 8:m=b
p=2
s=7
break
case 5:p=4
g=o.pop()
q=B.F
s=1
break
s=7
break
case 4:s=2
break
case 7:l=A.u([],t.s)
j=new A.bE(A.dU(A.nF(m),"stream",t.K))
p=9
case 12:s=14
return A.c(j.k(),$async$cy)
case 14:if(!b){s=13
break}k=j.gm()
if(J.K(k.kind,"directory"))J.lq(l,k.name)
s=12
break
case 13:n.push(11)
s=10
break
case 9:n=[2]
case 10:p=2
s=15
return A.c(j.p(),$async$cy)
case 15:s=n.pop()
break
case 11:q=l
s=1
break
case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$cy,r)},
nv(a,b){var s=new A.l($.k,b.h("l<0>")),r=new A.E(s,b.h("E<0>")),q=t.m
A.a7(a,"success",new A.fC(r,a,b),!1,q)
A.a7(a,"error",new A.fD(r,a),!1,q)
return s},
nw(a,b){var s=new A.l($.k,b.h("l<0>")),r=new A.E(s,b.h("E<0>")),q=t.m
A.a7(a,"success",new A.fG(r,a,b),!1,q)
A.a7(a,"error",new A.fH(r,a),!1,q)
A.a7(a,"blocked",new A.fI(r,a),!1,q)
return s},
kr:function kr(a,b){this.a=a
this.b=b},
fC:function fC(a,b,c){this.a=a
this.b=b
this.c=c},
fD:function fD(a,b){this.a=a
this.b=b},
fG:function fG(a,b,c){this.a=a
this.b=b
this.c=c},
fH:function fH(a,b){this.a=a
this.b=b},
fI:function fI(a,b){this.a=a
this.b=b},
hM:function hM(a,b){this.a=a
this.b=b},
cL:function cL(a,b){this.a=a
this.b=b},
b_:function b_(a,b){this.a=a
this.b=b},
d2:function d2(a){this.a=a},
bb:function bb(a){this.a=a},
oo(){var s=v.G,r=t.aN.a(s.DedicatedWorkerGlobalScope)
if(r!=null&&s instanceof r)return new A.eT(s,new A.eU(s.location.href))
else return new A.f8(s,new A.eU(s.location.href))},
dN:function dN(){},
eT:function eT(a,b){this.a=a
this.b=b},
f8:function f8(a,b){this.a=a
this.b=b},
jZ:function jZ(a){this.a=a},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function jY(a){this.a=a},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
eU:function eU(a){this.a=a},
je:function je(a){this.a=a},
pg(a){var s=a.ge9()
return new A.ag(new A.kg(),s,A.q(s).h("ag<D.T,m>"))},
m5(a,b){var s=A.u([],t.W),r=b==null?a.b:b
return new A.cd(a,r,new A.dG(),new A.dG(),new A.dG(),s)},
ov(a,b,c){var s=t.S
s=new A.cb(c,A.u([],t.bZ),a.a,new A.aA(new A.l($.k,t.D),t._),A.aH(s,t.dn),A.aH(s,t.m))
s.eJ(a)
s.eL(a,b,c)
return s},
mo(a){var s
switch(a.a){case 0:s="/database"
break
case 1:s="/database-journal"
break
default:s=null}return s},
kg:function kg(){},
dG:function dG(){this.a=null},
cd:function cd(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null
_.r=1
_.w=f},
j2:function j2(a){this.a=a},
j6:function j6(a,b){this.a=a
this.b=b},
j3:function j3(a,b){this.a=a
this.b=b},
j4:function j4(a){this.a=a},
j5:function j5(a,b){this.a=a
this.b=b},
cb:function cb(a,b,c,d,e,f){var _=this
_.w=a
_.x=b
_.a=c
_.b=d
_.d=_.c=null
_.e=0
_.f=e
_.r=f},
iR:function iR(a){this.a=a},
iU:function iU(a,b,c){this.a=a
this.b=b
this.c=c},
iX:function iX(a,b){this.a=a
this.b=b},
j_:function j_(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(a,b){this.a=a
this.b=b},
iS:function iS(a,b){this.a=a
this.b=b},
iZ:function iZ(a,b){this.a=a
this.b=b},
iY:function iY(a,b){this.a=a
this.b=b},
j1:function j1(a,b){this.a=a
this.b=b},
j0:function j0(a,b){this.a=a
this.b=b},
iV:function iV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iW:function iW(a,b){this.a=a
this.b=b},
iQ:function iQ(a){this.a=a},
ec:function ec(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=1
_.Q=_.z=_.y=_.x=null},
hh:function hh(a){this.a=a},
hg:function hg(a){this.a=a},
hf:function hf(a,b){this.a=a
this.b=b},
iB:function iB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=0
_.e=d
_.f=0
_.w=_.r=null
_.x=e
_.y=f
_.Q=$},
iC:function iC(a,b){this.a=a
this.b=b},
iD:function iD(a,b){this.a=a
this.b=b},
iE:function iE(a){this.a=a},
om(a){return new A.U(a)},
U:function U(a){this.a=a},
m1(a){var s={},r=A.u([],t.ey),q=A.cS(t.N)
s.a=A.u([],t.x)
return new A.aQ(new A.id(new A.i8(s,r,a,new A.ie(q),new A.ib(r,q),new A.ic(q)),new A.ig(s,r)),t.aT)},
ie:function ie(a){this.a=a},
ib:function ib(a,b){this.a=a
this.b=b},
ic:function ic(a){this.a=a},
i8:function i8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i9:function i9(a){this.a=a},
ia:function ia(a){this.a=a},
ig:function ig(a,b){this.a=a
this.b=b},
id:function id(a,b){this.a=a
this.b=b},
i7:function i7(a,b){this.a=a
this.b=b},
bF:function bF(a,b){this.a=a
this.b=b},
ot(a){var s=a.a,r=A.q(s).h("bi<1,y>")
s=A.bX(new A.bi(s,new A.iK(),r),r.h("r.E"))
return{a:0,b:s}},
e3:function e3(a){this.b=a},
fz:function fz(){},
fx:function fx(){},
fy:function fy(){},
iK:function iK(){},
aD:function aD(a,b){this.a=a
this.b=b},
ow(){return new A.ce()},
fp:function fp(){},
e_:function e_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.e=d},
fq:function fq(a){this.a=a},
fr:function fr(a,b){this.a=a
this.b=b},
fs:function fs(a,b,c){this.a=a
this.b=b
this.c=c},
ce:function ce(){this.a=!1
this.b=null},
c5:function c5(){},
f1:function f1(){},
az:function az(a,b){this.a=a
this.b=b},
a7(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.mA(new A.jh(c),t.m)
s=s==null?null:A.aC(s)}s=new A.ch(a,b,s,!1,e.h("ch<0>"))
s.cm()
return s},
mA(a,b){var s=$.k
if(s===B.a)return a
return s.cs(a,b)},
kO:function kO(a,b){this.a=a
this.$ti=b},
bz:function bz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ch:function ch(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jh:function jh(a){this.a=a},
ji:function ji(a){this.a=a},
lk(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
nT(a,b){return b in a},
kR(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
lf(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
A:{if(n<0){n=null
break A}break A}s=a.a
return new A.c3(A.c9(r.b,p.sqlite3_errmsg(q)),A.c9(s.b,s.d.sqlite3_errstr(o))+" (code "+A.w(o)+")",c,n,d,e,f)},
lm(a,b,c,d,e){throw A.b(A.lf(a.a,a.b,b,c,d,e))},
lF(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.bq("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.bS(61)))
return s.charCodeAt(0)==0?s:s},
hT(a){var s=0,r=A.i(t.dI),q
var $async$hT=A.j(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.c(A.a3(a.arrayBuffer(),t.a),$async$hT)
case 3:q=c
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$hT,r)},
b8(){var s=0,r=A.i(t.eN),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$b8=A.j(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:b=A.kJ()
if(b==null){q=B.n
s=1
break}m=null
l=null
k=null
j=null
i=!1
p=4
d=$.dW()
d=d==null?null:A.dd(d,"_drift_feature_detection",null,null,!1)
s=7
return A.c(t.V.b(d)?d:A.cj(d,t.gp),$async$b8)
case 7:j=a1
d=t.m
s=8
return A.c(A.a3(b.getDirectory(),d),$async$b8)
case 8:m=a1
s=9
return A.c(A.a3(m.getFileHandle("_drift_feature_detection",{create:!0}),d),$async$b8)
case 9:l=a1
s=10
return A.c(A.dT(l),$async$b8)
case 10:h=a1
g=null
f=null
g=h.a
f=h.b
i=g
k=f
e=A.kR(k,"getSize",null,null,null,null)
s=typeof e==="object"?11:12
break
case 11:s=13
return A.c(A.a3(A.a_(e),t.X),$async$b8)
case 13:q=B.n
n=[1]
s=5
break
case 12:g=i
q=new A.dC(!0,g)
n=[1]
s=5
break
n.push(6)
s=5
break
case 4:p=3
a=o.pop()
q=B.n
n=[1]
s=5
break
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
g=j
if(g!=null)g.a.O()
if(k!=null)k.close()
s=m!=null&&l!=null?14:15
break
case 14:s=16
return A.c(A.a3(m.removeEntry("_drift_feature_detection",{recursive:!1}),t.X),$async$b8)
case 16:case 15:s=n.pop()
break
case 6:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$b8,r)},
dT(a){return A.pW(a)},
pW(a){var s=0,r=A.i(t.f9),q,p=2,o=[],n,m,l,k,j,i
var $async$dT=A.j(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=null
p=4
l=t.m
s=7
return A.c(A.a3(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$dT)
case 7:j=c
s=8
return A.c(A.a3(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$dT)
case 8:n=c
n.close()
l=j
q=new A.Y(!0,l)
s=1
break
p=2
s=6
break
case 4:p=3
i=o.pop()
l=j
if(l!=null)l.close()
s=9
return A.c(A.a3(a.createSyncAccessHandle(),t.m),$async$dT)
case 9:m=c
q=new A.Y(!1,m)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$dT,r)},
qE(){var s=A.oo(),r=t.ge
new A.iB(s,new A.fp(),A.u([],t.bj),A.aH(t.S,t.eX),new A.cU(A.kU(r)),new A.cU(A.kU(r))).aR()}},B={}
var w=[A,J,B]
var $={}
A.kS.prototype={}
J.en.prototype={
T(a,b){return a===b},
gA(a){return A.d0(a)},
i(a){return"Instance of '"+A.eH(a)+"'"},
gD(a){return A.bK(A.l8(this))}}
J.eq.prototype={
i(a){return String(a)},
gA(a){return a?519018:218159},
gD(a){return A.bK(t.y)},
$iB:1,
$iN:1}
J.cP.prototype={
T(a,b){return null==b},
i(a){return"null"},
gA(a){return 0},
$iB:1,
$iz:1}
J.J.prototype={$im:1}
J.aX.prototype={
gA(a){return 0},
i(a){return String(a)}}
J.eG.prototype={}
J.bs.prototype={}
J.aa.prototype={
i(a){var s=a[$.mT()]
if(s==null)s=a[$.bP()]
if(s==null)return this.eC(a)
return"JavaScript function for "+J.aS(s)}}
J.a8.prototype={
gA(a){return 0},
i(a){return String(a)}}
J.bU.prototype={
gA(a){return 0},
i(a){return String(a)}}
J.p.prototype={
B(a,b){a.$flags&1&&A.F(a,29)
a.push(b)},
v(a,b){var s
a.$flags&1&&A.F(a,"remove",1)
for(s=0;s<a.length;++s)if(J.K(a[s],b)){a.splice(s,1)
return!0}return!1},
af(a,b){var s
a.$flags&1&&A.F(a,"addAll",2)
if(Array.isArray(b)){this.eS(a,b)
return}for(s=J.ax(b);s.k();)a.push(s.gm())},
eS(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.a5(a))
for(s=0;s<r;++s)a.push(b[s])},
W(a){a.$flags&1&&A.F(a,"clear","clear")
a.length=0},
eb(a,b,c){return new A.aI(a,b,A.au(a).h("@<1>").G(c).h("aI<1,2>"))},
U(a,b){return A.i5(a,b,null,A.au(a).c)},
e7(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.a5(a))}throw A.b(A.eo())},
C(a,b){return a[b]},
gah(a){if(a.length>0)return a[0]
throw A.b(A.eo())},
F(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.F(a,5)
A.d1(b,c,a.length)
s=c-b
if(s===0)return
A.ak(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.kN(d,e).cI(0,!1)
q=0}p=J.dV(r)
if(q+s>p.gj(r))throw A.b(A.lI())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.n(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.n(r,q+o)},
ex(a,b){var s,r,q,p,o
a.$flags&2&&A.F(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.po()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.au(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.b9(b,2))
if(p>0)this.fB(a,p)},
ew(a){return this.ex(a,null)},
fB(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
i(a){return A.hA(a,"[","]")},
gu(a){return new J.dX(a,a.length,A.au(a).h("dX<1>"))},
gA(a){return A.d0(a)},
gj(a){return a.length},
n(a,b){if(!(b>=0&&b<a.length))throw A.b(A.lg(a,b))
return a[b]},
q(a,b,c){a.$flags&2&&A.F(a)
if(!(b>=0&&b<a.length))throw A.b(A.lg(a,b))
a[b]=c},
$in:1,
$it:1}
J.ep.prototype={
ij(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.eH(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.hB.prototype={}
J.dX.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.S(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.cQ.prototype={
aq(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gcA(b)
if(this.gcA(a)===s)return 0
if(this.gcA(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcA(a){return a===0?1/a<0:a<0},
i(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
c0(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
eI(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dL(a,b)},
R(a,b){return(a|0)===a?a/b|0:this.dL(a,b)},
dL(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.bt("Result of truncating division is "+A.w(s)+": "+A.w(a)+" ~/ "+b))},
J(a,b){var s
if(a>0)s=this.fH(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fH(a,b){return b>31?0:a>>>b},
gD(a){return A.bK(t.o)},
$iM:1}
J.cO.prototype={
gD(a){return A.bK(t.S)},
$iB:1,
$ia:1}
J.er.prototype={
gD(a){return A.bK(t.i)},
$iB:1}
J.aW.prototype={
ez(a,b){var s=A.u(a.split(b),t.s)
return s},
cV(a,b,c){return a.substring(b,A.d1(b,c,a.length))},
cS(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.R)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
i9(a,b,c){var s=b-a.length
if(s<=0)return a
return this.cS(c,s)+a},
aq(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i(a){return a},
gA(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gD(a){return A.bK(t.N)},
gj(a){return a.length},
$iB:1,
$iy:1}
A.cE.prototype={
t(a,b,c,d){var s=this.a.aU(null,b,c),r=new A.bR(s,$.k,this.$ti.h("bR<1,2>"))
s.aW(r.gfk())
r.aW(a)
r.bh(d)
return r},
aV(a,b,c){return this.t(a,null,b,c)},
M(a){return this.t(a,null,null,null)},
aU(a,b,c){return this.t(a,b,c,null)}}
A.bR.prototype={
p(){return this.a.p()},
aW(a){this.c=a==null?null:this.b.a5(a,t.z,this.$ti.y[1])},
bh(a){var s=this
s.a.bh(a)
if(a==null)s.d=null
else if(t.k.b(a))s.d=s.b.aY(a,t.z,t.K,t.l)
else if(t.b.b(a))s.d=s.b.a5(a,t.z,t.K)
else throw A.b(A.a0(u.h,null))},
fl(a){var s,r,q,p,o,n,m=this,l=m.c
if(l==null)return
s=null
try{s=m.$ti.y[1].a(a)}catch(o){r=A.P(o)
q=A.R(o)
p=m.d
if(p==null)m.b.aS(r,q)
else{l=t.K
n=m.b
if(t.k.b(p))n.cH(p,r,q,l,t.l)
else n.aC(t.b.a(p),r,l)}return}m.b.aC(l,s,m.$ti.y[1])},
a3(a){this.a.a3(a)},
aX(){return this.a3(null)},
S(){this.a.S()},
$iV:1}
A.b3.prototype={
gu(a){return new A.e4(J.ax(this.gaO()),A.q(this).h("e4<1,2>"))},
gj(a){return J.cA(this.gaO())},
U(a,b){var s=A.q(this)
return A.lx(J.kN(this.gaO(),b),s.c,s.y[1])},
C(a,b){return A.q(this).y[1].a(J.kM(this.gaO(),b))},
i(a){return J.aS(this.gaO())}}
A.e4.prototype={
k(){return this.a.k()},
gm(){return this.$ti.y[1].a(this.a.gm())}}
A.be.prototype={
gaO(){return this.a}}
A.dp.prototype={$in:1}
A.dk.prototype={
n(a,b){return this.$ti.y[1].a(J.nf(this.a,b))},
q(a,b,c){J.lp(this.a,b,this.$ti.c.a(c))},
F(a,b,c,d,e){var s=this.$ti
J.nj(this.a,b,c,A.lx(d,s.y[1],s.c),e)},
a7(a,b,c,d){return this.F(0,b,c,d,0)},
$in:1,
$it:1}
A.ao.prototype={
gaO(){return this.a}}
A.bk.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.kB.prototype={
$0(){return A.hs(null,t.H)},
$S:4}
A.hV.prototype={}
A.n.prototype={}
A.ac.prototype={
gu(a){var s=this
return new A.bW(s,s.gj(s),A.q(s).h("bW<ac.E>"))},
hW(a,b){var s,r,q,p=this,o=p.gj(p)
if(b.length!==0){if(o===0)return""
s=A.w(p.C(0,0))
if(o!==p.gj(p))throw A.b(A.a5(p))
for(r=s,q=1;q<o;++q){r=r+b+A.w(p.C(0,q))
if(o!==p.gj(p))throw A.b(A.a5(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.w(p.C(0,q))
if(o!==p.gj(p))throw A.b(A.a5(p))}return r.charCodeAt(0)==0?r:r}},
U(a,b){return A.i5(this,b,null,A.q(this).h("ac.E"))},
ih(a){var s,r=this,q=A.nZ(A.q(r).h("ac.E"))
for(s=0;s<r.gj(r);++s)q.B(0,r.C(0,s))
return q}}
A.d9.prototype={
gf1(){var s=J.cA(this.a),r=this.c
if(r==null||r>s)return s
return r},
gfI(){var s=J.cA(this.a),r=this.b
if(r>s)return s
return r},
gj(a){var s,r=J.cA(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
C(a,b){var s=this,r=s.gfI()+b
if(b<0||r>=s.gf1())throw A.b(A.el(b,s.gj(0),s,null,"index"))
return J.kM(s.a,r)},
U(a,b){var s,r,q=this
A.ak(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.cJ(q.$ti.h("cJ<1>"))
return A.i5(q.a,s,r,q.$ti.c)},
cI(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.dV(n),l=m.gj(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=J.lJ(0,p.$ti.c)
return n}r=A.ev(s,m.C(n,o),!1,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.C(n,o+q)
if(m.gj(n)<l)throw A.b(A.a5(p))}return r}}
A.bW.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.dV(q),o=p.gj(q)
if(r.b!==o)throw A.b(A.a5(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.C(q,s);++r.c
return!0}}
A.bm.prototype={
gu(a){var s=this.a
return new A.ew(s.gu(s),this.b,A.q(this).h("ew<1,2>"))},
gj(a){var s=this.a
return s.gj(s)},
C(a,b){var s=this.a
return this.b.$1(s.C(s,b))}}
A.bi.prototype={$in:1}
A.ew.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gm())
return!0}s.a=null
return!1},
gm(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.aI.prototype={
gj(a){return J.cA(this.a)},
C(a,b){return this.b.$1(J.kM(this.a,b))}}
A.de.prototype={
gu(a){return new A.df(J.ax(this.a),this.b)}}
A.df.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gm()))return!0
return!1},
gm(){return this.a.gm()}}
A.aL.prototype={
U(a,b){A.fl(b,"count")
A.ak(b,"count")
return new A.aL(this.a,this.b+b,A.q(this).h("aL<1>"))},
gu(a){var s=this.a
return new A.eN(s.gu(s),this.b)}}
A.bS.prototype={
gj(a){var s=this.a,r=s.gj(s)-this.b
if(r>=0)return r
return 0},
U(a,b){A.fl(b,"count")
A.ak(b,"count")
return new A.bS(this.a,this.b+b,this.$ti)},
$in:1}
A.eN.prototype={
k(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.k()
this.b=0
return s.k()},
gm(){return this.a.gm()}}
A.cJ.prototype={
gu(a){return B.K},
gj(a){return 0},
C(a,b){throw A.b(A.ae(b,0,0,"index",null))},
U(a,b){A.ak(b,"count")
return this}}
A.ef.prototype={
k(){return!1},
gm(){throw A.b(A.eo())}}
A.cM.prototype={}
A.dO.prototype={}
A.Y.prototype={$r:"+(1,2)",$s:1}
A.dC.prototype={$r:"+basicSupport,supportsReadWriteUnsafe(1,2)",$s:2}
A.dD.prototype={$r:"+controller,sync(1,2)",$s:3}
A.cl.prototype={$r:"+file,outFlags(1,2)",$s:4}
A.f6.prototype={$r:"+result,resultCode(1,2)",$s:5}
A.d3.prototype={}
A.ih.prototype={
X(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.cZ.prototype={
i(a){return"Null check operator used on a null value"}}
A.es.prototype={
i(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.eP.prototype={
i(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.hK.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.cK.prototype={}
A.dF.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iL:1}
A.bf.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.mR(r==null?"unknown":r)+"'"},
giY(){return this},
$C:"$1",
$R:1,
$D:null}
A.fA.prototype={$C:"$0",$R:0}
A.fB.prototype={$C:"$2",$R:2}
A.i6.prototype={}
A.i0.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.mR(s)+"'"}}
A.cD.prototype={
T(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.cD))return!1
return this.$_target===b.$_target&&this.a===b.a},
gA(a){return(A.kC(this.a)^A.d0(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.eH(this.a)+"'")}}
A.eK.prototype={
i(a){return"RuntimeError: "+this.a}}
A.bj.prototype={
gj(a){return this.a},
gbO(){return new A.aG(this,A.q(this).h("aG<1>"))},
ge3(){return new A.cR(this,A.q(this).h("cR<1,2>"))},
au(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.hQ(a)},
hQ(a){var s=this.d
if(s==null)return!1
return this.bN(s[this.bM(a)],a)>=0},
af(a,b){b.bD(0,new A.hC(this))},
n(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.hR(b)},
hR(a){var s,r,q=this.d
if(q==null)return null
s=q[this.bM(a)]
r=this.bN(s,a)
if(r<0)return null
return s[r].b},
q(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cX(s==null?q.b=q.cd():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.cX(r==null?q.c=q.cd():r,b,c)}else q.hT(b,c)},
hT(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.cd()
s=p.bM(a)
r=o[s]
if(r==null)o[s]=[p.c2(a,b)]
else{q=p.bN(r,a)
if(q>=0)r[q].b=b
else r.push(p.c2(a,b))}},
ef(a,b){var s,r,q=this
if(q.au(a)){s=q.n(0,a)
return s==null?A.q(q).y[1].a(s):s}r=b.$0()
q.q(0,a,r)
return r},
v(a,b){var s=this
if(typeof b=="string")return s.dF(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.dF(s.c,b)
else return s.hS(b)},
hS(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.bM(a)
r=n[s]
q=o.bN(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.dO(p)
if(r.length===0)delete n[s]
return p.b},
W(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.c1()}},
bD(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.a5(s))
r=r.c}},
cX(a,b,c){var s=a[b]
if(s==null)a[b]=this.c2(b,c)
else s.b=c},
dF(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.dO(s)
delete a[b]
return s.b},
c1(){this.r=this.r+1&1073741823},
c2(a,b){var s,r=this,q=new A.hD(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.c1()
return q},
dO(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.c1()},
bM(a){return J.a4(a)&1073741823},
bN(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.K(a[r].a,b))return r
return-1},
i(a){return A.lL(this)},
cd(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.hC.prototype={
$2(a,b){this.a.q(0,a,b)},
$S(){return A.q(this.a).h("~(1,2)")}}
A.hD.prototype={}
A.aG.prototype={
gj(a){return this.a.a},
gu(a){var s=this.a
return new A.eu(s,s.r,s.e)}}
A.eu.prototype={
gm(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.a5(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.bV.prototype={
gm(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.a5(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}}}
A.cR.prototype={
gj(a){return this.a.a},
gu(a){var s=this.a
return new A.et(s,s.r,s.e,this.$ti.h("et<1,2>"))}}
A.et.prototype={
gm(){var s=this.d
s.toString
return s},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.a5(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.ap(s.a,s.b,r.$ti.h("ap<1,2>"))
r.c=s.c
return!0}}}
A.kw.prototype={
$1(a){return this.a(a)},
$S:36}
A.kx.prototype={
$2(a,b){return this.a(a,b)},
$S:74}
A.ky.prototype={
$1(a){return this.a(a)},
$S:33}
A.dB.prototype={
i(a){return this.dN(!1)},
dN(a){var s,r,q,p,o,n=this.f2(),m=this.dl(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.lT(o):l+A.w(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
f2(){var s,r=this.$s
while($.jQ.length<=r)$.jQ.push(null)
s=$.jQ[r]
if(s==null){s=this.eZ()
$.jQ[r]=s}return s},
eZ(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.u(new Array(l),t.f)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
k[q]=r[s]}}k=A.o1(k,!1,t.K)
k.$flags=3
return k}}
A.f5.prototype={
dl(){return[this.a,this.b]},
T(a,b){if(b==null)return!1
return b instanceof A.f5&&this.$s===b.$s&&J.K(this.a,b.a)&&J.K(this.b,b.b)},
gA(a){return A.kV(this.$s,this.a,this.b,B.f)}}
A.iP.prototype={}
A.bZ.prototype={
gD(a){return B.aj},
dS(a,b,c){A.fg(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
$iB:1,
$ibd:1}
A.bY.prototype={$ibY:1}
A.cX.prototype={
gag(a){if(((a.$flags|0)&2)!==0)return new A.fd(a.buffer)
else return a.buffer},
fi(a,b,c,d){var s=A.ae(b,0,c,d,null)
throw A.b(s)},
d4(a,b,c,d){if(b>>>0!==b||b>c)this.fi(a,b,c,d)}}
A.fd.prototype={
dS(a,b,c){var s=A.aq(this.a,b,c)
s.$flags=3
return s},
$ibd:1}
A.cV.prototype={
gD(a){return B.ak},
$iB:1}
A.c_.prototype={
gj(a){return a.length},
fG(a,b,c,d,e){var s,r,q=a.length
this.d4(a,b,q,"start")
this.d4(a,c,q,"end")
if(b>c)throw A.b(A.ae(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.a0(e,null))
r=d.length
if(r-e<s)throw A.b(A.C("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iab:1}
A.cW.prototype={
n(a,b){A.aR(b,a,a.length)
return a[b]},
q(a,b,c){a.$flags&2&&A.F(a)
A.aR(b,a,a.length)
a[b]=c},
F(a,b,c,d,e){a.$flags&2&&A.F(a,5)
this.cW(a,b,c,d,e)},
a7(a,b,c,d){return this.F(a,b,c,d,0)},
$in:1,
$it:1}
A.ad.prototype={
q(a,b,c){a.$flags&2&&A.F(a)
A.aR(b,a,a.length)
a[b]=c},
F(a,b,c,d,e){a.$flags&2&&A.F(a,5)
if(t.eB.b(d)){this.fG(a,b,c,d,e)
return}this.cW(a,b,c,d,e)},
a7(a,b,c,d){return this.F(a,b,c,d,0)},
$in:1,
$it:1}
A.ey.prototype={
gD(a){return B.al},
$iB:1}
A.ez.prototype={
gD(a){return B.am},
$iB:1}
A.eA.prototype={
gD(a){return B.an},
n(a,b){A.aR(b,a,a.length)
return a[b]},
$iB:1}
A.eB.prototype={
gD(a){return B.ao},
n(a,b){A.aR(b,a,a.length)
return a[b]},
$iB:1}
A.eC.prototype={
gD(a){return B.ap},
n(a,b){A.aR(b,a,a.length)
return a[b]},
$iB:1}
A.eD.prototype={
gD(a){return B.ar},
n(a,b){A.aR(b,a,a.length)
return a[b]},
$iB:1}
A.eE.prototype={
gD(a){return B.as},
n(a,b){A.aR(b,a,a.length)
return a[b]},
$iB:1}
A.cY.prototype={
gD(a){return B.at},
gj(a){return a.length},
n(a,b){A.aR(b,a,a.length)
return a[b]},
$iB:1}
A.bo.prototype={
gD(a){return B.au},
gj(a){return a.length},
n(a,b){A.aR(b,a,a.length)
return a[b]},
$iB:1,
$ibo:1,
$ibr:1}
A.dw.prototype={}
A.dx.prototype={}
A.dy.prototype={}
A.dz.prototype={}
A.ar.prototype={
h(a){return A.dL(v.typeUniverse,this,a)},
G(a){return A.mh(v.typeUniverse,this,a)}}
A.eY.prototype={}
A.k7.prototype={
i(a){return A.ai(this.a,null)}}
A.eW.prototype={
i(a){return this.a}}
A.dH.prototype={$iaM:1}
A.iH.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:21}
A.iG.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:50}
A.iI.prototype={
$0(){this.a.$0()},
$S:2}
A.iJ.prototype={
$0(){this.a.$0()},
$S:2}
A.fc.prototype={
eO(a,b){if(self.setTimeout!=null)self.setTimeout(A.b9(new A.k6(this,b),0),a)
else throw A.b(A.bt("`setTimeout()` not found."))},
eP(a,b){if(self.setTimeout!=null)self.setInterval(A.b9(new A.k5(this,a,Date.now(),b),0),a)
else throw A.b(A.bt("Periodic timer."))}}
A.k6.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.k5.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.b.eI(s,o)}q.c=p
r.d.$1(q)},
$S:2}
A.dg.prototype={
E(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.an(a)
else{s=r.a
if(r.$ti.h("x<1>").b(a))s.d3(a)
else s.b3(a)}},
ar(a,b){var s
if(b==null)b=A.cB(a)
s=this.a
if(this.b)s.L(new A.I(a,b))
else s.a9(new A.I(a,b))},
K(a){return this.ar(a,null)},
$icF:1}
A.kd.prototype={
$1(a){return this.a.$2(0,a)},
$S:8}
A.ke.prototype={
$2(a,b){this.a.$2(1,new A.cK(a,b))},
$S:39}
A.kp.prototype={
$2(a,b){this.a(a,b)},
$S:49}
A.I.prototype={
i(a){return A.w(this.a)},
$iG:1,
gal(){return this.b}}
A.di.prototype={}
A.bx.prototype={
ac(){},
ad(){}}
A.dj.prototype={
gds(){return this.c<4},
fA(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
cl(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0){s=$.k
r=new A.cg(s,A.q(j).h("cg<1>"))
A.ll(r.gdt())
if(c!=null)r.c=s.a4(c,t.H)
return r}s=A.q(j)
r=$.k
q=d?1:0
p=b!=null?32:0
o=A.iL(r,a,s.c)
n=A.iM(r,b)
m=c==null?A.ld():c
l=new A.bx(j,o,n,r.a4(m,t.H),r,q|p,s.h("bx<1>"))
l.CW=l
l.ch=l
l.ay=j.c&1
k=j.e
j.e=l
l.ch=null
l.CW=k
if(k==null)j.d=l
else k.ch=l
if(j.d===l)A.fi(j.a)
return l},
dz(a){var s,r=this
A.q(r).h("bx<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.fA(a)
if((r.c&2)===0&&r.d==null)r.eW()}return null},
dA(a){},
dB(a){},
cZ(){if((this.c&4)!==0)return new A.al("Cannot add new events after calling close")
return new A.al("Cannot add new events while doing an addStream")},
B(a,b){if(!this.gds())throw A.b(this.cZ())
this.Z(b)},
l(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gds())throw A.b(q.cZ())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.l($.k,t.D)
q.ap()
return r},
eW(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.an(null)}A.fi(this.b)}}
A.dh.prototype={
Z(a){var s
for(s=this.d;s!=null;s=s.ch)s.a8(new A.aO(a))},
ap(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.a8(B.h)
else this.r.an(null)}}
A.hu.prototype={
$2(a,b){var s=this,r=s.a,q=--r.b
if(r.a!=null){r.a=null
r.d=a
r.c=b
if(q===0||s.c)s.d.L(new A.I(a,b))}else if(q===0&&!s.c){q=r.d
q.toString
r=r.c
r.toString
s.d.L(new A.I(q,r))}},
$S:9}
A.ht.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a,k=--l.b,j=l.a
if(j!=null){J.lp(j,m.b,a)
if(J.K(k,0)){l=m.d
s=A.u([],l.h("p<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.S)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.lq(s,n)}m.c.b3(s)}}else if(J.K(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.L(new A.I(s,l))}},
$S(){return this.d.h("z(0)")}}
A.hn.prototype={
$2(a,b){if(!this.a.b(a))throw A.b(a)
return this.c.$2(a,b)},
$S(){return this.d.h("0/(d,L)")}}
A.ho.prototype={
$1(a){var s,r,q,p,o,n,m=this
if(a===0){s=A.u([],m.c.h("p<0>"))
for(r=m.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.S)(r),++p){o=r[p]
n=o.b
if(n==null)o.$ti.c.a(n)
s.push(n)}m.a.E(s)}else{s=A.u([],t.gz)
for(r=m.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.S)(r),++p)s.push(r[p].c)
q=A.u([],m.c.h("p<0?>"))
for(n=r.length,p=0;p<r.length;r.length===n||(0,A.S)(r),++p)q.push(r[p].b)
m.a.K(new A.d_(B.c.e7(s,A.q1()),a))}},
$S:3}
A.d_.prototype={
i(a){var s,r,q="ParallelWaitError",p=this.c
if(p==null){p=this.d
s=p<=1
if(s)return q
return"ParallelWaitError("+p+" errors)"}s=this.d
r=s>1
if(r)s="("+s+" errors)"
else s=""
return q+s+": "+A.w(p.a)},
gal(){var s=this.c
s=s==null?null:s.b
return s==null?A.G.prototype.gal.call(this):s}}
A.dr.prototype={
fM(a){this.a.aD(new A.jo(this,a),new A.jp(this,a),t.P)}}
A.jo.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.h("z(1)")}}
A.jp.prototype={
$2(a,b){this.a.c=new A.I(a,b)
this.b.$1(1)},
$S:10}
A.jn.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:3}
A.cc.prototype={
ar(a,b){if((this.a.a&30)!==0)throw A.b(A.C("Future already completed"))
this.L(A.l9(a,b))},
K(a){return this.ar(a,null)},
$icF:1}
A.aA.prototype={
E(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.C("Future already completed"))
s.an(a)},
O(){return this.E(null)},
L(a){this.a.a9(a)}}
A.E.prototype={
E(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.C("Future already completed"))
s.aK(a)},
O(){return this.E(null)},
L(a){this.a.L(a)}}
A.aB.prototype={
i3(a){if((this.c&15)!==6)return!0
return this.b.b.aB(this.d,a.a,t.y,t.K)},
hC(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.U.b(r))q=m.cG(r,n,a.b,p,o,t.l)
else q=m.aB(r,n,p,o)
try{p=q
return p}catch(s){if(t.eK.b(A.P(s))){if((this.c&1)!==0)throw A.b(A.a0("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.a0("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.l.prototype={
aD(a,b,c){var s,r,q=$.k
if(q===B.a){if(b!=null&&!t.U.b(b)&&!t.L.b(b))throw A.b(A.bc(b,"onError",u.c))}else{a=q.a5(a,c.h("0/"),this.$ti.c)
if(b!=null)b=A.pJ(b,q)}s=new A.l($.k,c.h("l<0>"))
r=b==null?1:3
this.b2(new A.aB(s,r,a,b,this.$ti.h("@<1>").G(c).h("aB<1,2>")))
return s},
bm(a,b){return this.aD(a,null,b)},
dM(a,b,c){var s=new A.l($.k,c.h("l<0>"))
this.b2(new A.aB(s,19,a,b,this.$ti.h("@<1>").G(c).h("aB<1,2>")))
return s},
H(a){var s=this.$ti,r=$.k,q=new A.l(r,s)
if(r!==B.a)a=r.a4(a,t.z)
this.b2(new A.aB(q,8,a,null,s.h("aB<1,1>")))
return q},
fE(a){this.a=this.a&1|16
this.c=a},
br(a){this.a=a.a&30|this.a&1
this.c=a.c},
b2(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.b2(a)
return}s.br(r)}s.b.ak(new A.jq(s,a))}},
dv(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.dv(a)
return}n.br(s)}m.a=n.bw(a)
n.b.ak(new A.jv(m,n))}},
b7(){var s=this.c
this.c=null
return this.bw(s)},
bw(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aK(a){var s,r=this
if(r.$ti.h("x<1>").b(a))A.jt(a,r,!0)
else{s=r.b7()
r.a=8
r.c=a
A.bA(r,s)}},
b3(a){var s=this,r=s.b7()
s.a=8
s.c=a
A.bA(s,r)},
eY(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.ga0()===r.ga0())}else s=!1
if(s)return
q=p.b7()
p.br(a)
A.bA(p,q)},
L(a){var s=this.b7()
this.fE(a)
A.bA(this,s)},
eX(a,b){this.L(new A.I(a,b))},
an(a){if(this.$ti.h("x<1>").b(a)){this.d3(a)
return}this.d1(a)},
d1(a){this.a^=2
this.b.ak(new A.js(this,a))},
d3(a){A.jt(a,this,!1)
return},
a9(a){this.a^=2
this.b.ak(new A.jr(this,a))},
$ix:1}
A.jq.prototype={
$0(){A.bA(this.a,this.b)},
$S:0}
A.jv.prototype={
$0(){A.bA(this.b,this.a.a)},
$S:0}
A.ju.prototype={
$0(){A.jt(this.a.a,this.b,!0)},
$S:0}
A.js.prototype={
$0(){this.a.b3(this.b)},
$S:0}
A.jr.prototype={
$0(){this.a.L(this.b)},
$S:0}
A.jy.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.aA(q.d,t.z)}catch(p){s=A.P(p)
r=A.R(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.cB(q)
n=k.a
n.c=new A.I(q,o)
q=n}q.b=!0
return}if(j instanceof A.l&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.l){m=k.b.a
l=new A.l(m.b,m.$ti)
j.aD(new A.jz(l,m),new A.jA(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.jz.prototype={
$1(a){this.a.eY(this.b)},
$S:21}
A.jA.prototype={
$2(a,b){this.a.L(new A.I(a,b))},
$S:10}
A.jx.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.aB(p.d,this.b,o.h("2/"),o.c)}catch(n){s=A.P(n)
r=A.R(n)
q=s
p=r
if(p==null)p=A.cB(q)
o=this.a
o.c=new A.I(q,p)
o.b=!0}},
$S:0}
A.jw.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.i3(s)&&p.a.e!=null){p.c=p.a.hC(s)
p.b=!1}}catch(o){r=A.P(o)
q=A.R(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.cB(p)
m=l.b
m.c=new A.I(p,n)
p=m}p.b=!0}},
$S:0}
A.eQ.prototype={}
A.D.prototype={
gj(a){var s={},r=new A.l($.k,t.G)
s.a=0
this.t(new A.i3(s,this),!0,new A.i4(s,r),r.gd8())
return r},
gah(a){var s=new A.l($.k,A.q(this).h("l<D.T>")),r=this.t(null,!0,new A.i1(s),s.gd8())
r.aW(new A.i2(this,r,s))
return s}}
A.i3.prototype={
$1(a){++this.a.a},
$S(){return A.q(this.b).h("~(D.T)")}}
A.i4.prototype={
$0(){this.b.aK(this.a.a)},
$S:0}
A.i1.prototype={
$0(){var s,r=A.lZ(),q=new A.al("No element")
A.eI(q,r)
s=A.fh(q,r)
if(s==null)s=new A.I(q,r)
this.a.L(s)},
$S:0}
A.i2.prototype={
$1(a){A.pa(this.b,this.c,a)},
$S(){return A.q(this.a).h("~(D.T)")}}
A.bD.prototype={
gfs(){if((this.b&8)===0)return this.a
return this.a.gba()},
b4(){var s,r=this
if((r.b&8)===0){s=r.a
return s==null?r.a=new A.dA():s}s=r.a.gba()
return s},
ga_(){var s=this.a
return(this.b&8)!==0?s.gba():s},
ao(){if((this.b&4)!==0)return new A.al("Cannot add event after closing")
return new A.al("Cannot add event while adding a stream")},
df(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.bQ():new A.l($.k,t.D)
return s},
B(a,b){var s=this,r=s.b
if(r>=4)throw A.b(s.ao())
if((r&1)!==0)s.Z(b)
else if((r&3)===0)s.b4().B(0,new A.aO(b))},
dR(a,b){var s,r,q=this
if(q.b>=4)throw A.b(q.ao())
s=A.l9(a,b)
a=s.a
b=s.b
r=q.b
if((r&1)!==0)q.b8(a,b)
else if((r&3)===0)q.b4().B(0,new A.dm(a,b))},
fP(a){return this.dR(a,null)},
l(){var s=this,r=s.b
if((r&4)!==0)return s.df()
if(r>=4)throw A.b(s.ao())
r=s.b=r|4
if((r&1)!==0)s.ap()
else if((r&3)===0)s.b4().B(0,B.h)
return s.df()},
cl(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.b(A.C("Stream has already been listened to."))
s=A.ox(p,a,b,c,d,A.q(p).c)
r=p.gfs()
if(((p.b|=1)&8)!==0){q=p.a
q.sba(s)
q.S()}else p.a=s
s.fF(r)
s.c9(new A.k1(p))
return s},
dz(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.p()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(r instanceof A.l)k=r}catch(o){q=A.P(o)
p=A.R(o)
n=new A.l($.k,t.D)
n.a9(new A.I(q,p))
k=n}else k=k.H(s)
m=new A.k0(l)
if(k!=null)k=k.H(m)
else m.$0()
return k},
dA(a){if((this.b&8)!==0)this.a.aX()
A.fi(this.e)},
dB(a){if((this.b&8)!==0)this.a.S()
A.fi(this.f)}}
A.k1.prototype={
$0(){A.fi(this.a.d)},
$S:0}
A.k0.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.an(null)},
$S:0}
A.fb.prototype={
Z(a){this.ga_().am(a)},
b8(a,b){this.ga_().b1(a,b)},
ap(){this.ga_().d5()}}
A.eR.prototype={
Z(a){this.ga_().a8(new A.aO(a))},
b8(a,b){this.ga_().a8(new A.dm(a,b))},
ap(){this.ga_().a8(B.h)}}
A.ca.prototype={}
A.cn.prototype={}
A.b4.prototype={
gA(a){return(A.d0(this.a)^892482866)>>>0},
T(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.b4&&b.a===this.a}}
A.b5.prototype={
cf(){return this.w.dz(this)},
ac(){this.w.dA(this)},
ad(){this.w.dB(this)}}
A.a9.prototype={
fF(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.bp(s)}},
aW(a){this.a=A.iL(this.d,a,A.q(this).h("a9.T"))},
bh(a){var s=this,r=s.e
if(a==null)s.e=(r&4294967263)>>>0
else s.e=(r|32)>>>0
s.b=A.iM(s.d,a)},
a3(a){var s,r=this,q=r.e
if((q&8)!==0)return
r.e=(q+256|4)>>>0
if(a!=null)a.H(r.gbk())
if(q<256){s=r.r
if(s!=null)if(s.a===1)s.a=3}if((q&4)===0&&(r.e&64)===0)r.c9(r.gbu())},
aX(){return this.a3(null)},
S(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.bp(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.c9(s.gbv())}}},
p(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.c3()
r=s.f
return r==null?$.bQ():r},
c3(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.cf()},
am(a){var s=this.e
if((s&8)!==0)return
if(s<64)this.Z(a)
else this.a8(new A.aO(a))},
b1(a,b){var s
if(t.C.b(a))A.eI(a,b)
s=this.e
if((s&8)!==0)return
if(s<64)this.b8(a,b)
else this.a8(new A.dm(a,b))},
d5(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<64)s.ap()
else s.a8(B.h)},
ac(){},
ad(){},
cf(){return null},
a8(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.dA()
q.B(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.bp(r)}},
Z(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.aC(s.a,a,A.q(s).h("a9.T"))
s.e=(s.e&4294967231)>>>0
s.c4((r&4)!==0)},
b8(a,b){var s,r=this,q=r.e,p=new A.iO(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.c3()
s=r.f
if(s!=null&&s!==$.bQ())s.H(p)
else p.$0()}else{p.$0()
r.c4((q&4)!==0)}},
ap(){var s,r=this,q=new A.iN(r)
r.c3()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.bQ())s.H(q)
else q.$0()},
c9(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.c4((r&4)!==0)},
c4(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=(p&4294967167)>>>0
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p=(p&4294967291)>>>0
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=(p^64)>>>0
if(r)q.ac()
else q.ad()
p=(q.e&4294967231)>>>0
q.e=p}if((p&128)!==0&&p<256)q.r.bp(q)},
$iV:1}
A.iO.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.k.b(s))q.cH(s,o,this.c,r,t.l)
else q.aC(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.iN.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.bl(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.cm.prototype={
t(a,b,c,d){return this.a.cl(a,d,c,b===!0)},
aV(a,b,c){return this.t(a,null,b,c)},
M(a){return this.t(a,null,null,null)},
aU(a,b,c){return this.t(a,b,c,null)}}
A.eV.prototype={
gaz(){return this.a},
saz(a){return this.a=a}}
A.aO.prototype={
cE(a){a.Z(this.b)}}
A.dm.prototype={
cE(a){a.b8(this.b,this.c)}}
A.jf.prototype={
cE(a){a.ap()},
gaz(){return null},
saz(a){throw A.b(A.C("No events after a done."))}}
A.dA.prototype={
bp(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.ll(new A.jP(s,a))
s.a=1},
B(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.saz(b)
s.c=b}}}
A.jP.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.gaz()
q.b=r
if(r==null)q.c=null
s.cE(this.b)},
$S:0}
A.cg.prototype={
aW(a){},
bh(a){},
a3(a){var s=this.a
if(s>=0){this.a=s+2
if(a!=null)a.H(this.gbk())}},
aX(){return this.a3(null)},
S(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.ll(s.gdt())}else s.a=r},
p(){this.a=-1
this.c=null
return $.bQ()},
fq(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.bl(s)}}else r.a=q},
$iV:1}
A.bE.prototype={
gm(){if(this.c)return this.b
return null},
k(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.l($.k,t.e)
r.b=s
r.c=!1
q.S()
return s}throw A.b(A.C("Already waiting for next."))}return r.fh()},
fh(){var s,r,q=this,p=q.b
if(p!=null){s=new A.l($.k,t.e)
q.b=s
r=p.t(q.geT(),!0,q.gfm(),q.gfo())
if(q.b!=null)q.a=r
return s}return $.mU()},
p(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.an(!1)
else s.c=!1
return r.p()}return $.bQ()},
eU(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.aK(!0)
if(q.c){r=q.a
if(r!=null)r.aX()}},
fp(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.L(new A.I(a,b))
else q.a9(new A.I(a,b))},
fn(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.b3(!1)
else q.d1(!1)}}
A.aQ.prototype={
t(a,b,c,d){var s=null,r=new A.dv(s,s,s,s,this.$ti.h("dv<1>"))
r.d=new A.jN(this,r)
return r.cl(a,d,c,b===!0)},
aV(a,b,c){return this.t(a,null,b,c)},
M(a){return this.t(a,null,null,null)},
aU(a,b,c){return this.t(a,b,c,null)}}
A.jN.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.dv.prototype={
fS(a){var s=this.b
if(s>=4)throw A.b(this.ao())
if((s&1)!==0)this.ga_().am(a)},
$ibn:1}
A.kf.prototype={
$0(){return this.a.aK(this.b)},
$S:0}
A.af.prototype={
t(a,b,c,d){var s=A.q(this),r=$.k,q=b===!0?1:0,p=d!=null?32:0,o=A.iL(r,a,s.h("af.T")),n=A.iM(r,d),m=c==null?A.ld():c
s=new A.ci(this,o,n,r.a4(m,t.H),r,q|p,s.h("ci<af.S,af.T>"))
s.x=this.a.aV(s.gf8(),s.gfa(),s.gfc())
return s},
aV(a,b,c){return this.t(a,null,b,c)},
M(a){return this.t(a,null,null,null)},
aU(a,b,c){return this.t(a,b,c,null)}}
A.ci.prototype={
am(a){if((this.e&2)!==0)return
this.eE(a)},
b1(a,b){if((this.e&2)!==0)return
this.eF(a,b)},
ac(){var s=this.x
if(s!=null)s.aX()},
ad(){var s=this.x
if(s!=null)s.S()},
cf(){var s=this.x
if(s!=null){this.x=null
return s.p()}return null},
f9(a){this.w.dm(a,this)},
fd(a,b){this.b1(a,b)},
fb(){this.d5()}}
A.dM.prototype={
dm(a,b){var s,r,q,p=null
try{p=this.b.$1(a)}catch(q){s=A.P(q)
r=A.R(q)
A.mk(b,s,r)
return}if(p)b.am(a)}}
A.ag.prototype={
dm(a,b){var s,r,q,p=null
try{p=this.b.$1(a)}catch(q){s=A.P(q)
r=A.R(q)
A.mk(b,s,r)
return}b.am(p)}}
A.Z.prototype={}
A.fe.prototype={
b5(a,b,c){var s,r,q,p,o,n,m,l,k=this.gcb(),j=k.a
if(j===B.a){A.dS(b,c)
return}s=k.b
r=j.gN()
m=j.gec()
m.toString
q=m
p=$.k
try{$.k=q
s.$5(j,r,a,b,c)
$.k=p}catch(l){o=A.P(l)
n=A.R(l)
$.k=p
m=b===o?c:n
q.b5(j,o,m)}},
$io:1}
A.eS.prototype={
gde(){var s=this.at
return s==null?this.at=new A.cr(this):s},
gN(){return this.ax.gde()},
ga0(){return this.as.a},
bl(a){var s,r,q
try{this.aA(a,t.H)}catch(q){s=A.P(q)
r=A.R(q)
this.b5(this,s,r)}},
aC(a,b,c){var s,r,q
try{this.aB(a,b,t.H,c)}catch(q){s=A.P(q)
r=A.R(q)
this.b5(this,s,r)}},
cH(a,b,c,d,e){var s,r,q
try{this.cG(a,b,c,t.H,d,e)}catch(q){s=A.P(q)
r=A.R(q)
this.b5(this,s,r)}},
cr(a,b){return new A.jb(this,this.a4(a,b),b)},
dW(a,b,c){return new A.jd(this,this.a5(a,b,c),c,b)},
bx(a){return new A.ja(this,this.a4(a,t.H))},
cs(a,b){return new A.jc(this,this.a5(a,t.H,b),b)},
aS(a,b){this.b5(this,a,b)},
e8(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gN(),this,a,b)},
aA(a){var s=this.a,r=s.a
return s.b.$4(r,r.gN(),this,a)},
aB(a,b){var s=this.b,r=s.a
return s.b.$5(r,r.gN(),this,a,b)},
cG(a,b,c){var s=this.c,r=s.a
return s.b.$6(r,r.gN(),this,a,b,c)},
a4(a){var s=this.d,r=s.a
return s.b.$4(r,r.gN(),this,a)},
a5(a){var s=this.e,r=s.a
return s.b.$4(r,r.gN(),this,a)},
aY(a){var s=this.f,r=s.a
return s.b.$4(r,r.gN(),this,a)},
e4(a,b){var s=this.r,r=s.a
if(r===B.a)return null
return s.b.$5(r,r.gN(),this,a,b)},
ak(a){var s=this.w,r=s.a
return s.b.$4(r,r.gN(),this,a)},
ee(a){var s=this.z,r=s.a
return s.b.$4(r,r.gN(),this,a)},
gdG(){return this.a},
gdI(){return this.b},
gdH(){return this.c},
gdD(){return this.d},
gdE(){return this.e},
gdC(){return this.f},
gdg(){return this.r},
gck(){return this.w},
gdc(){return this.x},
gda(){return this.y},
gdw(){return this.z},
gdi(){return this.Q},
gcb(){return this.as},
gec(){return this.ax},
gdq(){return this.ay}}
A.jb.prototype={
$0(){return this.a.aA(this.b,this.c)},
$S(){return this.c.h("0()")}}
A.jd.prototype={
$1(a){var s=this
return s.a.aB(s.b,a,s.d,s.c)},
$S(){return this.d.h("@<0>").G(this.c).h("1(2)")}}
A.ja.prototype={
$0(){return this.a.bl(this.b)},
$S:0}
A.jc.prototype={
$1(a){return this.a.aC(this.b,a,this.c)},
$S(){return this.c.h("~(0)")}}
A.f7.prototype={
gdG(){return B.aG},
gdI(){return B.aI},
gdH(){return B.aH},
gdD(){return B.aF},
gdE(){return B.aA},
gdC(){return B.aK},
gdg(){return B.aC},
gck(){return B.aJ},
gdc(){return B.aB},
gda(){return B.az},
gdw(){return B.aE},
gdi(){return B.aD},
gcb(){return B.ay},
gec(){return null},
gdq(){return $.n6()},
gde(){var s=$.jR
return s==null?$.jR=new A.cr(this):s},
gN(){var s=$.jR
return s==null?$.jR=new A.cr(this):s},
ga0(){return this},
bl(a){var s,r,q
try{if(B.a===$.k){a.$0()
return}A.kl(null,null,this,a)}catch(q){s=A.P(q)
r=A.R(q)
A.dS(s,r)}},
aC(a,b){var s,r,q
try{if(B.a===$.k){a.$1(b)
return}A.kn(null,null,this,a,b)}catch(q){s=A.P(q)
r=A.R(q)
A.dS(s,r)}},
cH(a,b,c){var s,r,q
try{if(B.a===$.k){a.$2(b,c)
return}A.km(null,null,this,a,b,c)}catch(q){s=A.P(q)
r=A.R(q)
A.dS(s,r)}},
cr(a,b){return new A.jT(this,a,b)},
dW(a,b,c){return new A.jV(this,a,c,b)},
bx(a){return new A.jS(this,a)},
cs(a,b){return new A.jU(this,a,b)},
aS(a,b){A.dS(a,b)},
e8(a,b){return A.mu(null,null,this,a,b)},
aA(a){if($.k===B.a)return a.$0()
return A.kl(null,null,this,a)},
aB(a,b){if($.k===B.a)return a.$1(b)
return A.kn(null,null,this,a,b)},
cG(a,b,c){if($.k===B.a)return a.$2(b,c)
return A.km(null,null,this,a,b,c)},
a4(a){return a},
a5(a){return a},
aY(a){return a},
e4(a,b){return null},
ak(a){A.ko(null,null,this,a)},
ee(a){A.lk(a)}}
A.jT.prototype={
$0(){return this.a.aA(this.b,this.c)},
$S(){return this.c.h("0()")}}
A.jV.prototype={
$1(a){var s=this
return s.a.aB(s.b,a,s.d,s.c)},
$S(){return this.d.h("@<0>").G(this.c).h("1(2)")}}
A.jS.prototype={
$0(){return this.a.bl(this.b)},
$S:0}
A.jU.prototype={
$1(a){return this.a.aC(this.b,a,this.c)},
$S(){return this.c.h("~(0)")}}
A.cr.prototype={$iH:1}
A.kk.prototype={
$0(){A.nD(this.a,this.b)},
$S:0}
A.ff.prototype={$il1:1}
A.aP.prototype={
gj(a){return this.a},
gbO(){return new A.ds(this,A.q(this).h("ds<1>"))},
n(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.m7(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.m7(q,b)
return r}else return this.dk(b)},
dk(a){var s,r,q=this.d
if(q==null)return null
s=this.f5(q,a)
r=this.ab(s,a)
return r<0?null:s[r+1]},
q(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.d0(s==null?q.b=A.l2():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.d0(r==null?q.c=A.l2():r,b,c)}else q.dJ(b,c)},
dJ(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.l2()
s=p.aa(a)
r=o[s]
if(r==null){A.l3(o,s,[a,b]);++p.a
p.e=null}else{q=p.ab(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
bD(a,b){var s,r,q,p,o,n=this,m=n.d9()
for(s=m.length,r=A.q(n).y[1],q=0;q<s;++q){p=m[q]
o=n.n(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.b(A.a5(n))}},
d9(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.ev(i.a,null,!1,t.z)
s=i.b
r=0
if(s!=null){q=Object.getOwnPropertyNames(s)
p=q.length
for(o=0;o<p;++o){h[r]=q[o];++r}}n=i.c
if(n!=null){q=Object.getOwnPropertyNames(n)
p=q.length
for(o=0;o<p;++o){h[r]=+q[o];++r}}m=i.d
if(m!=null){q=Object.getOwnPropertyNames(m)
p=q.length
for(o=0;o<p;++o){l=m[q[o]]
k=l.length
for(j=0;j<k;j+=2){h[r]=l[j];++r}}}return i.e=h},
d0(a,b,c){if(a[b]==null){++this.a
this.e=null}A.l3(a,b,c)},
aa(a){return J.a4(a)&1073741823},
f5(a,b){return a[this.aa(b)]},
ab(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.K(a[r],b))return r
return-1}}
A.dt.prototype={
aa(a){return A.kC(a)&1073741823},
ab(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.dl.prototype={
n(a,b){if(!this.w.$1(b))return null
return this.eG(b)},
q(a,b,c){this.eH(b,c)},
aa(a){return this.r.$1(a)&1073741823},
ab(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.j9.prototype={
$1(a){return this.a.b(a)},
$S:14}
A.ds.prototype={
gj(a){return this.a.a},
gu(a){var s=this.a
return new A.eZ(s,s.d9(),this.$ti.h("eZ<1>"))}}
A.eZ.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.a5(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.bB.prototype={
gu(a){var s=this,r=new A.ck(s,s.r,A.q(s).h("ck<1>"))
r.c=s.e
return r},
gj(a){return this.a},
dY(a,b){var s,r
if(b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.f_(b)
return r}},
f_(a){var s=this.d
if(s==null)return!1
return this.ab(s[this.aa(a)],a)>=0},
B(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.d_(s==null?q.b=A.l4():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.d_(r==null?q.c=A.l4():r,b)}else return q.eR(b)},
eR(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.l4()
s=q.aa(a)
r=p[s]
if(r==null)p[s]=[q.ce(a)]
else{if(q.ab(r,a)>=0)return!1
r.push(q.ce(a))}return!0},
v(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.d6(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.d6(s.c,b)
else return s.cj(b)},
cj(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.aa(a)
r=n[s]
q=o.ab(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.d7(p)
return!0},
W(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cc()}},
d_(a,b){if(a[b]!=null)return!1
a[b]=this.ce(b)
return!0},
d6(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.d7(s)
delete a[b]
return!0},
cc(){this.r=this.r+1&1073741823},
ce(a){var s,r=this,q=new A.jL(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cc()
return q},
d7(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cc()},
aa(a){return J.a4(a)&1073741823},
ab(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.K(a[r].a,b))return r
return-1}}
A.jL.prototype={}
A.ck.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.a5(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.bl.prototype={
gu(a){var s=this
return new A.f2(s,s.a,s.c,s.$ti.h("f2<1>"))},
gj(a){return this.b},
W(a){var s,r,q,p=this;++p.a
if(p.b===0)return
s=p.c
s.toString
r=s
do{q=r.b
q.toString
r.b=r.c=r.a=null
if(q!==s){r=q
continue}else break}while(!0)
p.c=null
p.b=0},
gah(a){var s
if(this.b===0)throw A.b(A.C("No such element"))
s=this.c
s.toString
return s},
gcB(a){var s
if(this.b===0)throw A.b(A.C("No such element"))
s=this.c.c
s.toString
return s},
gaT(a){return this.b===0},
bt(a,b,c){var s,r,q=this
if(b.a!=null)throw A.b(A.C("LinkedListEntry is already in a LinkedList"));++q.a
b.a=q
s=q.b
if(s===0){b.b=b
q.c=b.c=b
q.b=s+1
return}r=a.c
r.toString
b.c=r
b.b=a
a.c=r.b=b
q.b=s+1},
cn(a){var s,r,q=this;++q.a
s=a.b
s.c=a.c
a.c.b=s
r=--q.b
a.a=a.b=a.c=null
if(r===0)q.c=null
else if(a===q.c)q.c=s}}
A.f2.prototype={
gm(){var s=this.c
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.a
if(s.b!==r.a)throw A.b(A.a5(s))
if(r.b!==0)r=s.e&&s.d===r.gah(0)
else r=!0
if(r){s.c=null
return!1}s.e=!0
r=s.d
s.c=r
s.d=r.b
return!0}}
A.a1.prototype={
gbi(){var s=this.a
if(s==null||this===s.gah(0))return null
return this.c}}
A.v.prototype={
gu(a){return new A.bW(a,this.gj(a),A.bN(a).h("bW<v.E>"))},
C(a,b){return this.n(a,b)},
eb(a,b,c){return new A.aI(a,b,A.bN(a).h("@<v.E>").G(c).h("aI<1,2>"))},
U(a,b){return A.i5(a,b,null,A.bN(a).h("v.E"))},
e6(a,b,c,d){var s
A.d1(b,c,this.gj(a))
for(s=b;s<c;++s)this.q(a,s,d)},
F(a,b,c,d,e){var s,r,q,p
A.d1(b,c,this.gj(a))
s=c-b
if(s===0)return
A.ak(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.kN(d,e).cI(0,!1)
r=0}if(r+s>q.length)throw A.b(A.lI())
if(r<b)for(p=s-1;p>=0;--p)this.q(a,b+p,q[r+p])
else for(p=0;p<s;++p)this.q(a,b+p,q[r+p])},
a7(a,b,c,d){return this.F(a,b,c,d,0)},
aH(a,b,c){this.a7(a,b,b+c.length,c)},
i(a){return A.hA(a,"[","]")},
$in:1,
$it:1}
A.aZ.prototype={
bD(a,b){var s,r,q,p
for(s=this.gbO(),s=s.gu(s),r=A.q(this).y[1];s.k();){q=s.gm()
p=this.n(0,q)
b.$2(q,p==null?r.a(p):p)}},
ge3(){var s=this.gbO()
return A.o2(s,new A.hE(this),A.q(s).h("r.E"),A.q(this).h("ap<1,2>"))},
gj(a){var s=this.gbO()
return s.gj(s)},
i(a){return A.lL(this)},
$iaY:1}
A.hE.prototype={
$1(a){var s=this.a,r=s.n(0,a)
if(r==null)r=A.q(s).y[1].a(r)
return new A.ap(a,r,A.q(s).h("ap<1,2>"))},
$S(){return A.q(this.a).h("ap<1,2>(1)")}}
A.hF.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.w(a)
r.a=(r.a+=s)+": "
s=A.w(b)
r.a+=s},
$S:37}
A.cT.prototype={
gu(a){var s=this
return new A.f3(s,s.c,s.d,s.b,s.$ti.h("f3<1>"))},
gaT(a){return this.b===this.c},
gj(a){return(this.c-this.b&this.a.length-1)>>>0},
C(a,b){var s=this,r=s.gj(0)
if(0>b||b>=r)A.A(A.el(b,r,s,null,"index"))
r=s.a
r=r[(s.b+b&r.length-1)>>>0]
return r==null?s.$ti.c.a(r):r},
v(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.K(r.a[s],b)){r.cj(s);++r.d
return!0}return!1},
i(a){return A.hA(this,"{","}")},
cj(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
if((a-m&n)>>>0<(l-a&n)>>>0){for(s=a;s!==m;s=r){r=(s-1&n)>>>0
o[s]=o[r]}o[m]=null
p.b=(m+1&n)>>>0
return(a+1&n)>>>0}else{m=p.c=(l-1&n)>>>0
for(s=a;s!==m;s=q){q=(s+1&n)>>>0
o[s]=o[q]}o[m]=null
return a}}}
A.f3.prototype={
gm(){var s=this.e
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a
if(r.c!==q.d)A.A(A.a5(q))
s=r.d
if(s===r.b){r.e=null
return!1}q=q.a
r.e=q[s]
r.d=(s+1&q.length-1)>>>0
return!0}}
A.c1.prototype={
af(a,b){var s
for(s=J.ax(b);s.k();)this.B(0,s.gm())},
i(a){return A.hA(this,"{","}")},
U(a,b){return A.lX(this,b,A.q(this).c)},
C(a,b){var s,r,q,p=this
A.ak(b,"index")
s=A.jM(p,p.r,A.q(p).c)
for(r=b;s.k();){if(r===0){q=s.d
return q==null?s.$ti.c.a(q):q}--r}throw A.b(A.el(b,b-r,p,null,"index"))},
$in:1,
$iaK:1}
A.dE.prototype={}
A.ka.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:22}
A.k9.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:22}
A.e6.prototype={}
A.e8.prototype={}
A.hi.prototype={}
A.ij.prototype={
e1(a){return new A.cp(!1).bs(a,0,null,!0)}}
A.ik.prototype={
av(a){var s,r,q,p=A.d1(0,null,a.length)
if(p===0)return new Uint8Array(0)
s=p*3
r=new Uint8Array(s)
q=new A.kb(r)
if(q.f4(a,0,p)!==p)q.cp()
return new Uint8Array(r.subarray(0,A.pc(0,q.b,s)))}}
A.kb.prototype={
cp(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.F(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
fN(a,b){var s,r,q,p,o=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=o.c
q=o.b
p=o.b=q+1
r.$flags&2&&A.F(r)
r[q]=s>>>18|240
q=o.b=p+1
r[p]=s>>>12&63|128
p=o.b=q+1
r[q]=s>>>6&63|128
o.b=p+1
r[p]=s&63|128
return!0}else{o.cp()
return!1}},
f4(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.F(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.fN(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.cp()}else if(o<=2047){n=k.b
l=n+1
if(l>=q)break
k.b=l
r&2&&A.F(s)
s[n]=o>>>6|192
k.b=l+1
s[l]=o&63|128}else{n=k.b
if(n+2>=q)break
l=k.b=n+1
r&2&&A.F(s)
s[n]=o>>>12|224
n=k.b=l+1
s[l]=o>>>6&63|128
k.b=n+1
s[n]=o&63|128}}}return p}}
A.cp.prototype={
bs(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.d1(b,c,a.length)
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.oU(a,b,l)
l-=b
q=b
b=0}if(l-b>=15){p=m.a
o=A.oT(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.c6(r,b,l,!0)
p=m.b
if((p&1)!==0){n=A.oV(p)
m.b=0
throw A.b(A.nJ(n,a,q+m.c))}return o},
c6(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.b.R(b+c,2)
r=q.c6(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.c6(a,s,c,d)}return q.fY(a,b,c,d)},
fY(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.d8(""),g=b+1,f=a[b]
A:for(s=l.a;;){for(;;g=p){r="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE".charCodeAt(f)&31
i=j<=32?f&61694>>>r:(f&63|i<<6)>>>0
j=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA".charCodeAt(j+r)
if(j===0){q=A.bq(i)
h.a+=q
if(g===c)break A
break}else if((j&1)!==0){if(s)switch(j){case 69:case 67:q=A.bq(k)
h.a+=q
break
case 65:q=A.bq(k)
h.a+=q;--g
break
default:q=A.bq(k)
h.a=(h.a+=q)+q
break}else{l.b=j
l.c=g-1
return""}j=0}if(g===c)break A
p=g+1
f=a[g]}p=g+1
f=a[g]
if(f<128){for(;;){if(!(p<c)){o=c
break}n=p+1
f=a[p]
if(f>=128){o=n-1
p=n
break}p=n}if(o-g<20)for(m=g;m<o;++m){q=A.bq(a[m])
h.a+=q}else{q=A.og(a,g,o)
h.a+=q}if(o===c)break A
g=p}else g=p}if(d&&j>32)if(s){s=A.bq(k)
h.a+=s}else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.eX.prototype={
dT(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
e2(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.ed.prototype={
T(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.ed)if(this.a===b.a)s=this.b===b.b
return s},
gA(a){return A.kV(this.a,this.b,B.f,B.f)},
aq(a,b){var s=B.b.aq(this.a,b.a)
if(s!==0)return s
return B.b.aq(this.b,b.b)},
i(a){var s=this,r=A.ny(A.lS(s)),q=A.ee(A.lQ(s)),p=A.ee(A.lN(s)),o=A.ee(A.lO(s)),n=A.ee(A.lP(s)),m=A.ee(A.lR(s)),l=A.lA(A.o8(s)),k=s.b,j=k===0?"":A.lA(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j}}
A.aE.prototype={
T(a,b){if(b==null)return!1
return b instanceof A.aE&&this.a===b.a},
gA(a){return B.b.gA(this.a)},
aq(a,b){return B.b.aq(this.a,b.a)},
i(a){var s,r,q,p,o,n=this.a,m=B.b.R(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.b.R(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.b.R(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.j.i9(B.b.i(n%1e6),6,"0")}}
A.jg.prototype={
i(a){return this.Y()}}
A.G.prototype={
gal(){return A.o7(this)}}
A.dY.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.hk(s)
return"Assertion failed"}}
A.aM.prototype={}
A.an.prototype={
gc8(){return"Invalid argument"+(!this.a?"(s)":"")},
gc7(){return""},
i(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.w(p),n=s.gc8()+q+o
if(!s.a)return n
return n+s.gc7()+": "+A.hk(s.gcz())},
gcz(){return this.b}}
A.c0.prototype={
gcz(){return this.b},
gc8(){return"RangeError"},
gc7(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.w(q):""
else if(q==null)s=": Not greater than or equal to "+A.w(r)
else if(q>r)s=": Not in inclusive range "+A.w(r)+".."+A.w(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.w(r)
return s}}
A.cN.prototype={
gcz(){return this.b},
gc8(){return"RangeError"},
gc7(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj(a){return this.f}}
A.db.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.eO.prototype={
i(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
A.al.prototype={
i(a){return"Bad state: "+this.a}}
A.e7.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.hk(s)+"."}}
A.eF.prototype={
i(a){return"Out of Memory"},
gal(){return null},
$iG:1}
A.d7.prototype={
i(a){return"Stack Overflow"},
gal(){return null},
$iG:1}
A.jj.prototype={
i(a){return"Exception: "+this.a}}
A.hm.prototype={
i(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.j.cV(e,0,75)+"..."
return g+"\n"+e}for(r=1,q=0,p=!1,o=0;o<f;++o){n=e.charCodeAt(o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}g=r>1?g+(" (at line "+r+", character "+(f-q+1)+")\n"):g+(" (at character "+(f+1)+")\n")
m=e.length
for(o=f;o<m;++o){n=e.charCodeAt(o)
if(n===10||n===13){m=o
break}}l=""
if(m-q>78){k="..."
if(f-q<75){j=q+75
i=q}else{if(m-f<75){i=m-75
j=m
k=""}else{i=f-36
j=f+36}l="..."}}else{j=m
i=q
k=""}return g+l+B.j.cV(e,i,j)+k+"\n"+B.j.cS(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.w(f)+")"):g}}
A.r.prototype={
cI(a,b){var s=A.q(this).h("r.E")
if(b)s=A.bX(this,s)
else{s=A.bX(this,s)
s.$flags=1
s=s}return s},
gj(a){var s,r=this.gu(this)
for(s=0;r.k();)++s
return s},
U(a,b){return A.lX(this,b,A.q(this).h("r.E"))},
gah(a){var s=this.gu(this)
if(!s.k())throw A.b(A.eo())
return s.gm()},
C(a,b){var s,r
A.ak(b,"index")
s=this.gu(this)
for(r=b;s.k();){if(r===0)return s.gm();--r}throw A.b(A.el(b,b-r,this,null,"index"))},
i(a){return A.nP(this,"(",")")}}
A.ap.prototype={
i(a){return"MapEntry("+A.w(this.a)+": "+A.w(this.b)+")"}}
A.z.prototype={
gA(a){return A.d.prototype.gA.call(this,0)},
i(a){return"null"}}
A.d.prototype={$id:1,
T(a,b){return this===b},
gA(a){return A.d0(this)},
i(a){return"Instance of '"+A.eH(this)+"'"},
gD(a){return A.qt(this)},
toString(){return this.i(this)}}
A.fa.prototype={
i(a){return""},
$iL:1}
A.d8.prototype={
gj(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.eg.prototype={
i(a){return"Expando:null"}}
A.hJ.prototype={
i(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.hr.prototype={
$2(a,b){this.a.aD(new A.hp(a),new A.hq(b),t.X)},
$S:43}
A.hp.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:44}
A.hq.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.qi(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.aX.b(a))A.A("Attempting to box non-Dart object.")
s={}
s[$.na()]=a
p.error=s
p.stack=b.i(0)
r=this.a
r.call(r,p)},
$S:10}
A.kE.prototype={
$1(a){return this.a.E(a)},
$S:8}
A.kF.prototype={
$1(a){if(a==null)return this.a.K(new A.hJ(a===undefined))
return this.a.K(a)},
$S:8}
A.jI.prototype={
bS(a){if(a<=0||a>4294967296)throw A.b(A.lU(u.g+a))
return Math.random()*a>>>0}}
A.jJ.prototype={
eN(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.b(A.bt("No source of cryptographically secure random numbers available."))},
bS(a){var s,r,q,p,o,n,m,l
if(a<=0||a>4294967296)throw A.b(A.lU(u.g+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.F(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.a2(Math.pow(256,s))
for(o=a-1,n=(a&o)===0;;){crypto.getRandomValues(J.cz(B.ae.gag(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}}}
A.cI.prototype={
cu(a,b){return J.K(a,b)},
hP(a){return J.a4(a)},
hV(a){return!0}}
A.co.prototype={
cu(a,b){var s,r,q,p,o,n
if(a===b)return!0
s=A.lG(B.l.ghp(),B.l.ghO(),B.l.ghU(),this.$ti.h("co.E"),t.S)
for(r=A.jM(a,a.r,A.q(a).c),q=r.$ti.c,p=0;r.k();){o=r.d
if(o==null)o=q.a(o)
n=s.n(0,o)
s.q(0,o,(n==null?0:n)+1);++p}for(r=A.jM(b,b.r,A.q(b).c),q=r.$ti.c;r.k();){o=r.d
if(o==null)o=q.a(o)
n=s.n(0,o)
if(n==null||n===0)return!1
s.q(0,o,n-1);--p}return p===0}}
A.d4.prototype={}
A.d6.prototype={
Y(){return"SqliteUpdateKind."+this.b}}
A.as.prototype={
gA(a){return A.kV(this.a,this.b,this.c,B.f)},
T(a,b){if(b==null)return!1
return b instanceof A.as&&b.a===this.a&&b.b===this.b&&b.c===this.c},
i(a){return"SqliteUpdate: "+this.a.i(0)+" on "+this.b+", rowid = "+this.c}}
A.c3.prototype={
i(a){var s,r,q=this,p=q.e
p=p==null?"":"while "+p+", "
p="SqliteException("+q.c+"): "+p+q.a
s=q.b
if(s!=null)p=p+", "+s
s=q.f
if(s!=null){r=q.d
r=r!=null?" (at position "+A.w(r)+"): ":": "
s=p+"\n  Causing statement"+r+s
p=q.r
p=p!=null?s+(", parameters: "+J.lr(p,new A.i_(),t.N).hW(0,", ")):s}return p.charCodeAt(0)==0?p:p}}
A.i_.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.aS(a)},
$S:52}
A.h1.prototype={
dP(){var s=this,r=s.d
return r==null?s.d=new A.b6(s,A.u([],t.fS),new A.ha(s),new A.hb(s),t.fs):r},
fC(){var s=this,r=s.e
return r==null?s.e=new A.b6(s,A.u([],t.q),new A.h7(s),new A.h8(s),t.bq):r},
c5(){var s=this,r=s.f
return r==null?s.f=new A.b6(s,A.u([],t.q),new A.h3(s),new A.h4(s),t.fK):r},
l(){var s,r,q,p=this
if(p.r)return
p.r=!0
s=p.d
if(s!=null)s.l()
s=p.f
if(s!=null)s.l()
s=p.e
if(s!=null)s.l()
s=p.b
r=s.cT()
q=r!==0?A.lf(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.b(q)},
hq(a,b){var s,r,q
if(this.r)A.A(A.C("This database has already been closed"))
s=this.b
r=s.a
q=r.bb(B.e.av(a),1)
r=r.d
s=A.mD(r,"sqlite3_exec",[s.b,q,0,0,0])
r.dart_sqlite3_free(q)
if(s!==0)A.lm(this,s,"executing",a,b)},
fu(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.A(A.C("This database has already been closed"))
s=B.e.av(a)
r=e.b
q=r.a
p=q.cq(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.iy(r,p,n,o)
l=A.u([],t.bb)
k=new A.h5(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.cU(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.lm(e,n,"preparing statement",a,null)}n=q.buffer
h=B.b.R(n.byteLength,4)
g=new Int32Array(n,0,h)[B.b.J(o,2)]-p
f=i.a
if(f!=null)l.push(new A.c4(f,e,new A.cp(!1).bs(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.cU(j,r-j,0)
n=q.buffer
h=B.b.R(n.byteLength,4)
j=new Int32Array(n,0,h)[B.b.J(o,2)]-p
f=i.a
if(f!=null){l.push(new A.c4(f,e,""))
k.$0()
throw A.b(A.bc(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.b(A.bc(a,"sql","Has trailing data after the first sql statement:"))}}m.l()
return l},
ed(a,b){var s=this.fu(a,b,1,!1,!0)
if(s.length===0)throw A.b(A.bc(a,"sql","Must contain an SQL statement."))
return B.c.gah(s)},
ia(a){return this.ed(a,!1)}}
A.ha.prototype={
$0(){var s=this.a,r=s.b
r.a.e0(r.b,new A.h9(s))},
$S:0}
A.h9.prototype={
$3(a,b,c){var s=A.of(a)
if(s==null)return
this.a.d.ct(new A.as(s,b,c))},
$S:54}
A.hb.prototype={
$0(){var s=this.a.b
s.a.e0(s.b,null)
return null},
$S:0}
A.h7.prototype={
$0(){var s=this.a,r=s.b
r.a.e_(r.b,new A.h6(s))
return null},
$S:0}
A.h6.prototype={
$0(){this.a.e.ct(null)},
$S:0}
A.h8.prototype={
$0(){var s=this.a.b
s.a.e_(s.b,null)
return null},
$S:0}
A.h3.prototype={
$0(){var s=this.a,r=s.b
r.a.dZ(r.b,new A.h2(s))
return null},
$S:0}
A.h2.prototype={
$0(){var s=this.a.f
s.ct(null)
return 0},
$S:71}
A.h4.prototype={
$0(){var s=this.a.b
s.a.dZ(s.b,null)
return null},
$S:0}
A.h5.prototype={
$0(){var s,r,q,p,o,n
this.a.l()
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.S)(s),++q){p=s[q]
if(!p.r){p.r=!0
if(!p.f){o=p.a
o.c.d.sqlite3_reset(o.b)
p.f=!0}o=p.a
n=o.c
n.d.sqlite3_finalize(o.b)
n=n.w
if(n!=null){n=n.a
if(n!=null)n.unregister(o.d)}}}},
$S:0}
A.b6.prototype={
gb0(){var s=this.r
return s==null?this.r=this.dj(!1):s},
dj(a){return new A.aQ(new A.k2(this,a),this.$ti.h("aQ<1>"))},
ct(a){var s,r,q,p,o,n,m,l
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.S)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.A(o.ao())
if((n&1)!==0){m=o.a;((n&8)!==0?m.gba():m).am(a)}}else{n=o.b
if(n>=4)A.A(o.ao())
if((n&1)!==0)o.Z(a)
else if((n&3)===0){o=o.b4()
n=new A.aO(a)
l=o.c
if(l==null)o.b=o.c=n
else{l.saz(n)
o.c=n}}}}},
l(){var s,r,q,p=this
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.S)(s),++q)s[q].a.l()
p.d=null
if(p.b){p.f.$0()
p.b=!1}}}
A.k2.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.l()
return}s=this.b
r=new A.k3(q,a,s)
a.r=a.e=new A.k4(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.h("~(bn<1>)")}}
A.k3.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.dD(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.k4.prototype={
$0(){var s=this.a,r=s.c
B.c.v(r,new A.dD(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.hZ.prototype={
ea(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.b(A.lY(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
i6(a,b){var s,r,q,p,o,n,m,l,k,j
this.ea()
switch(2){case 2:break}s=this.a
r=s.a
q=r.bb(B.e.av(a),1)
p=r.d
o=p.dart_sqlite3_malloc(4)
n=r.bb(B.e.av(b),1)
m=p.sqlite3_open_v2(q,o,6,n)
l=A.aJ(r.b.buffer,0,null)[B.b.J(o,2)]
p.dart_sqlite3_free(q)
p.dart_sqlite3_free(n)
p.dart_sqlite3_free(n)
o=new A.d()
k=new A.ir(r,l,o)
r=r.r
if(r!=null)r.dT(k,l,o)
if(m!==0){j=A.lf(s,k,m,"opening the database",null,null)
k.cT()
throw A.b(j)}p.sqlite3_extended_result_codes(l,1)
return new A.h1(s,k,!1)}}
A.c4.prototype={
a6(a,b){A.lm(this.b,a,b,this.d,this.e)},
dh(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.bj()
if(s!==0?s!==101:q)r.a6(s,"executing statement")},
eV(a){var s=this.a
s=s.c.d.sqlite3_bind_parameter_count(s.b)
if(0!==s)A.A(A.bc(a,"parameters","Expected "+A.w(s)+" parameters, got 0"))
return},
d2(a){A:{if(a instanceof A.hz){this.eV(a.a)
break A}if(a instanceof A.cH)a.a.$1(this)}},
bj(){if(!this.f){var s=this.a
s.c.d.sqlite3_reset(s.b)
this.f=!0}},
l(){var s,r,q=this
if(!q.r){q.r=!0
q.bj()
s=q.a
r=s.c
r.d.sqlite3_finalize(s.b)
r=r.w
if(r!=null)r.e2(s.d)}},
hs(a){var s=this
if(s.r||s.b.r)A.A(A.C(u.n))
s.bj()
s.d2(a)
s.dh()}}
A.ek.prototype={
bW(a,b){return this.d.au(a)?1:0},
cM(a,b){this.d.v(0,a)},
cN(a){return new v.G.URL(a,"file:///").pathname},
aG(a,b){var s,r=a.a
if(r==null)r=A.lF(this.b,"/")
s=this.d
if(!s.au(r))if((b&4)!==0)s.q(0,r,new A.az(new Uint8Array(0),0))
else throw A.b(A.c6(14))
return new A.cl(new A.f_(this,r,(b&8)!==0),0)},
cP(a){}}
A.f_.prototype={
eg(a,b){var s,r=this.a.d.n(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.d.F(a,0,s,J.cz(B.d.gag(r.a),0,r.b),b)
return s},
cL(){return this.d>=2?1:0},
bX(){if(this.c)this.a.d.v(0,this.b)},
bn(){return this.a.d.n(0,this.b).b},
cO(a){this.d=a},
cQ(a){},
bo(a){var s=this.a.d,r=this.b,q=s.n(0,r)
if(q==null){s.q(0,r,new A.az(new Uint8Array(0),0))
s.n(0,r).sj(0,a)}else q.sj(0,a)},
cR(a){this.d=a},
aZ(a,b){var s,r=this.a.d,q=this.b,p=r.n(0,q)
if(p==null){p=new A.az(new Uint8Array(0),0)
r.q(0,q,p)}s=b+a.length
if(s>p.b)p.sj(0,s)
p.a7(0,b,s,a)}}
A.kD.prototype={
$1(a){return a.length!==0},
$S:72}
A.e2.prototype={}
A.hL.prototype={
Y(){return"OpenMode."+this.b}}
A.bg.prototype={}
A.hz.prototype={}
A.cH.prototype={}
A.b1.prototype={
i(a){return"VfsException("+this.a+")"}}
A.d5.prototype={}
A.W.prototype={}
A.e1.prototype={}
A.e0.prototype={
gbY(){return 0},
ej(a,b){return 12},
gc_(){return 4096},
bZ(a,b){var s=this.eg(a,b),r=a.length
if(s<r){B.d.e6(a,s,r,0)
throw A.b(B.aw)}},
$ia6:1,
$idc:1}
A.bw.prototype={}
A.kI.prototype={
$0(){var s,r,q
for(s=this.a;!s.gaT(0);){if(s.b===0)A.A(A.C("No such element"))
r=s.c
q=r.a
q.toString
q.cn(A.q(r).h("a1.E").a(r))
r.d.$0()}},
$S:0}
A.kG.prototype={
$1(a){var s=this.a,r=s.b
s.bt(s.c,new A.bw(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:5}
A.kH.prototype={
$4(a,b,c,d){this.a.$1(c.bx(d))},
$S:77}
A.iw.prototype={}
A.ir.prototype={
cT(){var s=this.a,r=s.r
if(r!=null)r.e2(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.iy.prototype={
l(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
cU(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.mD(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.aJ(o.b.buffer,0,null)[B.b.J(n,2)]
if(s===0)r=null
else{n=new A.d()
r=new A.ix(s,o,n)
o=o.w
if(o!=null)o.dT(r,s,n)}return new A.f6(r,p)}}
A.ix.prototype={}
A.bu.prototype={}
A.bv.prototype={}
A.c8.prototype={
n(a,b){A.aJ(this.a.b.buffer,0,null)
B.b.J(this.c+b*4,2)
return new A.bv()},
q(a,b,c){throw A.b(A.bt("Setting element in WasmValueList"))},
gj(a){return this.b}}
A.ea.prototype={
i2(a){var s,r,q=this.b
q===$&&A.T()
s="[sqlite3] "+A.c9(q,a)
r=$.mt
if(r==null)A.lk(s)
else r.$1(s)},
i0(a,b){var s,r,q,p=A.a2(v.G.Number(a))*1000
if(p<-864e13||p>864e13)A.A(A.ae(p,-864e13,864e13,"millisecondsSinceEpoch",null))
A.dU(!1,"isUtc",t.y)
s=new A.ed(p,0,!1)
r=this.b
r===$&&A.T()
q=A.o4(r.buffer,b,8)
q.$flags&2&&A.F(q)
q[0]=A.lR(s)
q[1]=A.lP(s)
q[2]=A.lO(s)
q[3]=A.lN(s)
q[4]=A.lQ(s)-1
q[5]=A.lS(s)-1900
q[6]=B.b.c0(A.o9(s),7)},
iI(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.T()
s=new A.d5(A.l0(j,b,k))
try{r=a.aG(s,d)
if(e!==0){p=r.b
o=A.aJ(j.buffer,0,k)
n=B.b.J(e,2)
o.$flags&2&&A.F(o)
o[n]=p}p=A.aJ(j.buffer,0,k)
o=B.b.J(c,2)
p.$flags&2&&A.F(p)
p[o]=0
m=r.a
return m}catch(l){p=A.P(l)
if(p instanceof A.b1){q=p
p=q.a
j=A.aJ(j.buffer,0,k)
o=B.b.J(c,2)
j.$flags&2&&A.F(j)
j[o]=p}else{j=j.buffer
j=A.aJ(j,0,k)
p=B.b.J(c,2)
j.$flags&2&&A.F(j)
j[p]=1}}return k},
ix(a,b,c){var s=this.b
s===$&&A.T()
return A.aj(new A.fQ(a,A.c9(s,b),c))},
ip(a,b,c,d){var s=this.b
s===$&&A.T()
return A.aj(new A.fN(this,a,A.c9(s,b),c,d))},
iE(a,b,c,d){var s=this.b
s===$&&A.T()
return A.aj(new A.fS(this,a,A.c9(s,b),c,d))},
iK(a,b,c){return A.aj(new A.fU(this,c,b,a))},
iP(a,b){return A.aj(new A.fW(a,b))},
iv(a,b){var s,r=Date.now(),q=this.b
q===$&&A.T()
s=v.G.BigInt(r)
A.kR(A.o3(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
it(a){return A.aj(new A.fP(a))},
iM(a,b,c,d){return A.aj(new A.fV(this,a,b,c,d))},
iX(a,b,c,d){return A.aj(new A.h_(this,a,b,c,d))},
iT(a,b){return A.aj(new A.fY(a,b))},
iR(a,b){return A.aj(new A.fX(a,b))},
iC(a,b){return A.aj(new A.fR(this,a,b))},
iG(a,b){return A.aj(new A.fT(a,b))},
iV(a,b){return A.aj(new A.fZ(a,b))},
ir(a,b){return A.aj(new A.fO(this,a,b))},
iy(a){return a.gbY()},
iA(a,b,c){if(t.B.b(a))return a.ej(b,c)
return 12},
iN(a){if(t.B.b(a))return a.gc_()
return 4096},
hb(a){a.$0()},
h6(a){return a.$0()},
h9(a,b,c,d,e){var s=this.b
s===$&&A.T()
a.$3(b,A.c9(s,d),A.a2(v.G.Number(e)))},
hh(a,b,c,d){var s=a.gj2(),r=this.a
r===$&&A.T()
s.$2(new A.bu(),new A.c8(r,c,d))},
hl(a,b,c,d){var s=a.gj4(),r=this.a
r===$&&A.T()
s.$2(new A.bu(),new A.c8(r,c,d))},
hj(a,b,c,d){var s=a.gj3(),r=this.a
r===$&&A.T()
s.$2(new A.bu(),new A.c8(r,c,d))},
hn(a,b){var s=a.gj5()
this.a===$&&A.T()
s.$1(new A.bu())},
hf(a,b){var s=a.gj1()
this.a===$&&A.T()
s.$1(new A.bu())},
hd(a,b,c,d,e){var s,r,q=this.b
q===$&&A.T()
s=A.l0(q,c,b)
r=A.l0(q,e,d)
return a.giZ().$2(s,r)},
h4(a,b){return a.$1(b)},
h2(a,b){return a.gj0().$1(b)},
h0(a,b,c){return a.gj_().$2(b,c)}}
A.fQ.prototype={
$0(){return this.a.cM(this.b,this.c)},
$S:0}
A.fN.prototype={
$0(){var s,r=this,q=r.b.bW(r.c,r.d),p=r.a.b
p===$&&A.T()
p=A.aJ(p.buffer,0,null)
s=B.b.J(r.e,2)
p.$flags&2&&A.F(p)
p[s]=q},
$S:0}
A.fS.prototype={
$0(){var s,r,q=this,p=B.e.av(q.b.cN(q.c)),o=p.length
if(o>q.d)throw A.b(A.c6(14))
s=q.a.b
s===$&&A.T()
s=A.aq(s.buffer,0,null)
r=q.e
B.d.aH(s,r,p)
s.$flags&2&&A.F(s)
s[r+o]=0},
$S:0}
A.fU.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.T()
s=A.aq(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.ls(s,q.b)
else return A.ls(s,null)},
$S:0}
A.fW.prototype={
$0(){this.a.cP(new A.aE(this.b))},
$S:0}
A.fP.prototype={
$0(){return this.a.bX()},
$S:0}
A.fV.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.T()
s.b.bZ(A.aq(r.buffer,s.c,s.d),A.a2(v.G.Number(s.e)))},
$S:0}
A.h_.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.T()
s.b.aZ(A.aq(r.buffer,s.c,s.d),A.a2(v.G.Number(s.e)))},
$S:0}
A.fY.prototype={
$0(){return this.a.bo(A.a2(v.G.Number(this.b)))},
$S:0}
A.fX.prototype={
$0(){return this.a.cQ(this.b)},
$S:0}
A.fR.prototype={
$0(){var s,r=this.b.bn(),q=this.a.b
q===$&&A.T()
q=A.aJ(q.buffer,0,null)
s=B.b.J(this.c,2)
q.$flags&2&&A.F(q)
q[s]=r},
$S:0}
A.fT.prototype={
$0(){return this.a.cO(this.b)},
$S:0}
A.fZ.prototype={
$0(){return this.a.cR(this.b)},
$S:0}
A.fO.prototype={
$0(){var s,r=this.b.cL(),q=this.a.b
q===$&&A.T()
q=A.aJ(q.buffer,0,null)
s=B.b.J(this.c,2)
q.$flags&2&&A.F(q)
q[s]=r},
$S:0}
A.cC.prototype={
t(a,b,c,d){var s,r=null,q={},p=A.a_(A.kR(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=this.$ti.h("cn<1>"),n=new A.cn(r,r,r,r,o)
q.a=null
s=new A.fm(q,this,p,n)
n.d=s
n.f=new A.fn(q,n,s)
return new A.b4(n,o.h("b4<1>")).t(a,b,c,d)},
aV(a,b,c){return this.t(a,null,b,c)},
aU(a,b,c){return this.t(a,b,c,null)}}
A.fm.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.a3(q,t.m).aD(new A.fo(p,r.b,s,r),s.gfO(),t.P)},
$S:0}
A.fo.prototype={
$1(a){var s,r,q=this,p=a.done
if(p==null)p=null
s=a.value
r=q.c
if(p===!0){r.l()
q.a.a=null}else{r.B(0,s==null?q.b.$ti.c.a(s):s)
q.a.a=null
p=r.b
if(!((p&1)!==0?(r.ga_().e&4)!==0:(p&2)===0))q.d.$0()}},
$S:7}
A.fn.prototype={
$0(){var s,r
if(this.a.a==null){s=this.b
r=s.b
s=!((r&1)!==0?(s.ga_().e&4)!==0:(r&2)===0)}else s=!1
if(s)this.c.$0()},
$S:0}
A.by.prototype={
p(){var s=0,r=A.i(t.H),q=this,p
var $async$p=A.j(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:p=q.b
if(p!=null)p.p()
p=q.c
if(p!=null)p.p()
q.c=q.b=null
return A.f(null,r)}})
return A.h($async$p,r)},
gm(){var s=this.a
return s==null?A.A(A.C("Await moveNext() first")):s},
k(){var s,r,q,p=this,o=p.a
if(o!=null)o.continue()
o=new A.l($.k,t.e)
s=new A.E(o,t.fa)
r=p.d
q=t.m
p.b=A.a7(r,"success",new A.j7(p,s),!1,q)
p.c=A.a7(r,"error",new A.j8(p,s),!1,q)
return o}}
A.j7.prototype={
$1(a){var s,r=this.a
r.p()
s=r.$ti.h("1?").a(r.d.result)
r.a=s
this.b.E(s!=null)},
$S:1}
A.j8.prototype={
$1(a){var s=this.a
s.p()
s=s.d.error
if(s==null)s=a
this.b.K(s)},
$S:1}
A.fE.prototype={
$1(a){this.a.E(this.c.a(this.b.result))},
$S:1}
A.fF.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.K(s)},
$S:1}
A.fJ.prototype={
$1(a){this.a.E(this.c.a(this.b.result))},
$S:1}
A.fK.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.K(s)},
$S:1}
A.fL.prototype={
$1(a){this.a.K(new A.al("IndexedDB open blocked"))},
$S:1}
A.hl.prototype={
$1(a){return A.a_(a[1])},
$S:51}
A.is.prototype={
fW(){var s={}
s.dart=new A.it(this).$0()
return s},
bQ(a){return this.hX(a)},
hX(a){var s=0,r=A.i(t.m),q,p=this,o,n
var $async$bQ=A.j(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.c(A.a3(v.G.WebAssembly.instantiateStreaming(a,p.fW()),t.m),$async$bQ)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$bQ,r)}}
A.it.prototype={
$0(){var s=this.a.a,r=A.a_(v.G.Object),q=A.a_(r.create.apply(r,[null]))
q.error_log=A.aC(s.gi1())
q.localtime=A.ah(s.gi_())
q.xOpen=A.l7(s.giH())
q.xDelete=A.ki(s.giw())
q.xAccess=A.cs(s.gio())
q.xFullPathname=A.cs(s.giD())
q.xRandomness=A.ki(s.giJ())
q.xSleep=A.ah(s.giO())
q.xCurrentTimeInt64=A.ah(s.giu())
q.xClose=A.aC(s.gis())
q.xRead=A.cs(s.giL())
q.xWrite=A.cs(s.giW())
q.xTruncate=A.ah(s.giS())
q.xSync=A.ah(s.giQ())
q.xFileSize=A.ah(s.giB())
q.xLock=A.ah(s.giF())
q.xUnlock=A.ah(s.giU())
q.xCheckReservedLock=A.ah(s.giq())
q.xDeviceCharacteristics=A.aC(s.gbY())
q.xFileControl=A.ki(s.giz())
q.xSectorSize=A.aC(s.gc_())
q["dispatch_()v"]=A.aC(s.gha())
q["dispatch_()i"]=A.aC(s.gh5())
q.dispatch_update=A.l7(s.gh8())
q.dispatch_xFunc=A.cs(s.ghg())
q.dispatch_xStep=A.cs(s.ghk())
q.dispatch_xInverse=A.cs(s.ghi())
q.dispatch_xValue=A.ah(s.ghm())
q.dispatch_xFinal=A.ah(s.ghe())
q.dispatch_compare=A.l7(s.ghc())
q.dispatch_busy=A.ah(s.gh3())
q.changeset_apply_filter=A.ah(s.gh1())
q.changeset_apply_conflict=A.ki(s.gh_())
return q},
$S:19}
A.c7.prototype={}
A.ft.prototype={
bT(){var s=0,r=A.i(t.H),q=this,p,o
var $async$bT=A.j(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:p=new A.l($.k,t.E)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.aC(new A.fw(o))
new A.E(p,t.J).E(A.nx(o,t.m))
s=2
return A.c(p,$async$bT)
case 2:q.a=b
return A.f(null,r)}})
return A.h($async$bT,r)},
aN(a,b){return this.fD(a,b)},
fD(a,b){var s=0,r=A.i(t.H),q=this,p,o,n
var $async$aN=A.j(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.nd(),b)
o=A.oB(p)
s=2
return A.c(A.qI(new A.fv(a,o,p),t.aQ),$async$aN)
case 2:s=3
return A.c(o.b.a,$async$aN)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.f(null,r)}})
return A.h($async$aN,r)},
ft(a){return this.aN(new A.fu(a),"readwrite")}}
A.fw.prototype={
$1(a){var s=A.a_(this.a.result)
if(J.K(a.oldVersion,0)){s.createObjectStore("files",{autoIncrement:!0}).createIndex("fileName","name",{unique:!0})
s.createObjectStore("blocks")}},
$S:7}
A.fv.prototype={
$0(){var s=0,r=A.i(t.P),q=1,p=[],o=this,n,m
var $async$$0=A.j(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.c(o.a.$1(o.b),$async$$0)
case 6:q=1
s=5
break
case 3:q=2
m=p.pop()
o.c.abort()
throw m
s=5
break
case 2:s=1
break
case 5:o.c.commit()
return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$$0,r)},
$S:53}
A.fu.prototype={
$1(a){return this.ek(a)},
ek(a){var s=0,r=A.i(t.H),q=this,p,o,n
var $async$$1=A.j(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:p=q.a,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.c(p[n].I(a),$async$$1)
case 5:case 3:p.length===o||(0,A.S)(p),++n
s=2
break
case 4:return A.f(null,r)}})
return A.h($async$$1,r)},
$S:12}
A.du.prototype={
eM(a){var s=A.kh(new A.jD(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.kh(new A.jE(this))},
cg(a,b,c){var s=t.t
return v.G.IDBKeyRange.bound(A.u([a,c],s),A.u([a,b],s))},
fv(a){return this.cg(a,9007199254740992,0)},
fw(a,b){return this.cg(a,9007199254740992,b)},
bP(){var s=0,r=A.i(t.g6),q,p=this,o,n,m,l,k
var $async$bP=A.j(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:l=A.aH(t.N,t.S)
k=new A.by(p.d.index("fileName").openKeyCursor(),t.O)
case 3:s=5
return A.c(k.k(),$async$bP)
case 5:if(!b){s=4
break}o=k.a
if(o==null)o=A.A(A.C("Await moveNext() first"))
n=o.key
n.toString
A.dP(n)
m=o.primaryKey
m.toString
l.q(0,n,A.a2(A.bH(m)))
s=3
break
case 4:q=l
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$bP,r)},
bC(a){return this.ht(a)},
ht(a){var s=0,r=A.i(t.I),q,p=this,o
var $async$bC=A.j(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.c(A.ay(p.d.index("fileName").getKey(a),t.i),$async$bC)
case 3:q=o.a2(c)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$bC,r)},
ci(a){return A.ay(this.d.get(a),t.A).bm(new A.jC(a),t.m)},
b_(a,b){return this.eA(a,b)},
eA(a,b){var s=0,r=A.i(t.fQ),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$b_=A.j(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.c(p.ci(a),$async$b_)
case 3:h=d
g=h.length
f=new A.az(new Uint8Array(g),g)
e=new A.by(p.e.openCursor(p.fv(a)),t.O)
g=t.a,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.c(e.k(),$async$b_)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.A(A.C("Await moveNext() first"))
k=n.a(l.key)
j=A.a2(A.bH(k[1]))
if(j>=h.length){s=5
break}i=new A.jF(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.hT(A.a_(l.value)).bm(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$b_,r)},
bz(a){return this.fV(a)},
fV(a){var s=0,r=A.i(t.S),q,p=this,o
var $async$bz=A.j(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.A(A.C("IDB transaction already completed"))
o=A
s=3
return A.c(A.ay(p.d.put({name:a,length:0}),t.i),$async$bz)
case 3:q=o.a2(c)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$bz,r)},
aF(a,b){return this.im(a,b)},
im(a,b){var s=0,r=A.i(t.H),q=this,p,o,n,m,l
var $async$aF=A.j(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.A(A.C("IDB transaction already completed"))
s=2
return A.c(q.ci(a),$async$aF)
case 2:p=d
o=b.b
n=A.q(o).h("aG<1>")
m=A.bX(new A.aG(o,n),n.h("r.E"))
B.c.ew(m)
s=3
return A.c(A.lE(new A.aI(m,new A.jG(new A.jH(q,a),b),A.au(m).h("aI<1,x<~>>")),t.H),$async$aF)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.by(q.d.openCursor(a),t.O)
s=6
return A.c(l.k(),$async$aF)
case 6:s=7
return A.c(A.ay(l.gm().update({name:p.name,length:b.c}),t.X),$async$aF)
case 7:case 5:return A.f(null,r)}})
return A.h($async$aF,r)},
aE(a,b,c){return this.ii(0,b,c)},
ii(a,b,c){var s=0,r=A.i(t.H),q=this,p,o
var $async$aE=A.j(function(d,e){if(d===1)return A.e(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.A(A.C("IDB transaction already completed"))
s=2
return A.c(q.ci(b),$async$aE)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.c(A.ay(q.e.delete(q.fw(b,B.b.R(c,4096)*4096)),t.X),$async$aE)
case 5:case 4:o=new A.by(q.d.openCursor(b),t.O)
s=6
return A.c(o.k(),$async$aE)
case 6:s=7
return A.c(A.ay(o.gm().update({name:p.name,length:c}),t.X),$async$aE)
case 7:return A.f(null,r)}})
return A.h($async$aE,r)},
bB(a){return this.fZ(a)},
fZ(a){var s=0,r=A.i(t.H),q=this,p
var $async$bB=A.j(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.A(A.C("IDB transaction already completed"))
p=t.X
s=2
return A.c(A.lE(A.u([A.ay(q.e.delete(q.cg(a,9007199254740992,0)),p),A.ay(q.d.delete(a),p)],t.M),t.H),$async$bB)
case 2:return A.f(null,r)}})
return A.h($async$bB,r)}}
A.jD.prototype={
$0(){this.a.b.O()},
$S:2}
A.jE.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.K(r)},
$S:2}
A.jC.prototype={
$1(a){if(a==null)throw A.b(A.bc(this.a,"fileId","File not found in database"))
else return a},
$S:55}
A.jF.prototype={
$1(a){var s=this.a
s.aH(s,this.b,J.cz(a,0,this.c))},
$S:56}
A.jH.prototype={
eq(a,b){var s=0,r=A.i(t.H),q=this,p,o,n,m,l,k
var $async$$2=A.j(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:p=q.a.e
o=q.b
n=t.t
s=2
return A.c(A.ay(p.openCursor(v.G.IDBKeyRange.only(A.u([o,a],n))),t.A),$async$$2)
case 2:m=d
l=t.a.a(B.d.gag(b))
k=t.X
s=m==null?3:5
break
case 3:s=6
return A.c(A.ay(p.put(l,A.u([o,a],n)),k),$async$$2)
case 6:s=4
break
case 5:s=7
return A.c(A.ay(m.update(l),k),$async$$2)
case 7:case 4:return A.f(null,r)}})
return A.h($async$$2,r)},
$2(a,b){return this.eq(a,b)},
$S:57}
A.jG.prototype={
$1(a){var s=this.b.b.n(0,a)
s.toString
return this.a.$2(a,s)},
$S:58}
A.jk.prototype={
fL(a,b,c){B.d.aH(this.b.ef(a,new A.jl(this,a)),b,c)},
fT(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.b.R(q,4096)
o=B.b.c0(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.fL(p*4096,o,J.cz(B.d.gag(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.jl.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.d.aH(s,0,J.cz(B.d.gag(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:59}
A.f4.prototype={}
A.aV.prototype={
b9(a){var s=this
if(s.e||s.d.a==null)A.A(A.c6(10))
if(a.cw(s.x)){s.ae(!0)
return a.d.a}else return A.hs(null,t.H)},
ae(a){return this.fJ(a)},
fJ(a){var s=0,r=A.i(t.H),q,p=this,o,n
var $async$ae=A.j(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gaT(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.bX(o,o.$ti.h("r.E"))
o.W(0)
s=5
return A.c(p.d.ft(n).H(new A.hx(p,n,a)),$async$ae)
case 5:case 4:case 1:return A.f(q,r)}})
return A.h($async$ae,r)},
l(){var s=0,r=A.i(t.H),q,p=this,o,n
var $async$l=A.j(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.b9(new A.dq(new A.hy(),new A.E(new A.l($.k,t.D),t.F)))
p.e=!0
p.ae(!1)
q=o
s=1
break}else{n=p.x
if(!n.gaT(0)){q=n.gcB(0).d.a
s=1
break}}case 1:return A.f(q,r)}})
return A.h($async$l,r)},
aL(a,b){return this.f3(a,b)},
f3(a,b){var s=0,r=A.i(t.S),q,p=this,o,n
var $async$aL=A.j(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:n=p.z
s=n.au(b)?3:5
break
case 3:n=n.n(0,b)
n.toString
q=n
s=1
break
s=4
break
case 5:s=6
return A.c(a.bC(b),$async$aL)
case 6:o=d
o.toString
n.q(0,b,o)
q=o
s=1
break
case 4:case 1:return A.f(q,r)}})
return A.h($async$aL,r)},
b6(){var s=0,r=A.i(t.H),q=this,p
var $async$b6=A.j(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:p=A.u([],t.M)
s=2
return A.c(q.d.aN(new A.hw(q,p),"readonly"),$async$b6)
case 2:s=3
return A.c(A.nK(p,t.H),$async$b6)
case 3:return A.f(null,r)}})
return A.h($async$b6,r)},
hw(){return this.ae(!1)},
bW(a,b){return this.w.d.au(a)?1:0},
cM(a,b){var s=this
s.w.d.v(0,a)
if(!s.y.v(0,a))s.b9(new A.dn(s,a,new A.E(new A.l($.k,t.D),t.F)))},
cN(a){return new v.G.URL(a,"file:///").pathname},
aG(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.lF(p.b,"/")
s=p.w
r=s.d.au(o)?1:0
q=s.aG(new A.d5(o),b)
if(r===0)if((b&8)!==0)p.y.B(0,o)
else p.b9(new A.cf(p,o,new A.E(new A.l($.k,t.D),t.F)))
return new A.cl(new A.f0(p,q.a,o),0)},
cP(a){}}
A.hx.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.S)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.A(A.C("Future already completed"))
p.aK(null)}o.ae(this.c)},
$S:2}
A.hy.prototype={
$1(a){return this.em(a)},
em(a){var s=0,r=A.i(t.H)
var $async$$1=A.j(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.f(null,r)}})
return A.h($async$$1,r)},
$S:12}
A.hw.prototype={
$1(a){return this.el(a)},
el(a){var s=0,r=A.i(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.j(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=2
return A.c(a.bP(),$async$$1)
case 2:m=c
l=q.a
l.z.af(0,m)
p=m.ge3(),p=p.gu(p),o=q.b,l=l.w.d
case 3:if(!p.k()){s=4
break}n=p.gm()
k=l
j=n.a
s=5
return A.c(a.b_(n.b,o),$async$$1)
case 5:k.q(0,j,c)
s=3
break
case 4:return A.f(null,r)}})
return A.h($async$$1,r)},
$S:12}
A.f0.prototype={
bZ(a,b){this.b.bZ(a,b)},
gbY(){return 0},
gc_(){return 4096},
cL(){return this.b.d>=2?1:0},
bX(){},
bn(){return this.b.bn()},
cO(a){this.b.d=a
return null},
cQ(a){},
ej(a,b){return 12},
bo(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.A(A.c6(10))
s.b.bo(a)
if(!r.y.dY(0,s.c))r.b9(new A.dq(new A.jB(s,a),new A.E(new A.l($.k,t.D),t.F)))},
cR(a){this.b.d=a
return null},
aZ(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.A(A.c6(10))
s=m.c
if(l.y.dY(0,s)){m.b.aZ(a,b)
return}r=l.w.d.n(0,s)
if(r==null)r=new A.az(new Uint8Array(0),0)
q=J.cz(B.d.gag(r.a),0,r.b)
m.b.aZ(a,b)
p=new Uint8Array(a.length)
B.d.aH(p,0,a)
o=A.u([],t.f6)
n=$.k
o.push(new A.f4(b,p))
l.b9(new A.cq(l,s,q,o,new A.E(new A.l(n,t.D),t.F)))},
$ia6:1,
$idc:1}
A.jB.prototype={
$1(a){return this.ep(a)},
ep(a){var s=0,r=A.i(t.H),q,p=this,o,n
var $async$$1=A.j(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:o=p.a
n=a
s=3
return A.c(o.a.aL(a,o.c),$async$$1)
case 3:q=n.aE(0,c,p.b)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$S:12}
A.X.prototype={
cw(a){a.bt(a.c,this,!1)
return!0}}
A.dq.prototype={
I(a){return this.w.$1(a)}}
A.dn.prototype={
cw(a){var s,r,q,p
if(!a.gaT(0)){s=a.gcB(0)
for(r=this.x;s!=null;)if(s instanceof A.dn)if(s.x===r)return!1
else s=s.gbi()
else if(s instanceof A.cq){q=s.gbi()
if(s.x===r){p=s.a
p.toString
p.cn(A.q(s).h("a1.E").a(s))}s=q}else if(s instanceof A.cf){if(s.x===r){r=s.a
r.toString
r.cn(A.q(s).h("a1.E").a(s))
return!1}s=s.gbi()}else break}a.bt(a.c,this,!1)
return!0},
I(a){return this.ic(a)},
ic(a){var s=0,r=A.i(t.H),q=this,p,o,n
var $async$I=A.j(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:p=q.w
o=q.x
s=2
return A.c(p.aL(a,o),$async$I)
case 2:n=c
p.z.v(0,o)
s=3
return A.c(a.bB(n),$async$I)
case 3:return A.f(null,r)}})
return A.h($async$I,r)}}
A.cf.prototype={
I(a){return this.ib(a)},
ib(a){var s=0,r=A.i(t.H),q=this,p,o,n
var $async$I=A.j(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.c(a.bz(p),$async$I)
case 2:o.q(0,n,c)
return A.f(null,r)}})
return A.h($async$I,r)}}
A.cq.prototype={
cw(a){var s,r=a.b===0?null:a.gcB(0)
for(s=this.x;r!=null;)if(r instanceof A.cq)if(r.x===s){B.c.af(r.z,this.z)
return!1}else r=r.gbi()
else if(r instanceof A.cf){if(r.x===s)break
r=r.gbi()}else break
a.bt(a.c,this,!1)
return!0},
I(a){return this.ie(a)},
ie(a){var s=0,r=A.i(t.H),q=this,p,o,n,m,l,k
var $async$I=A.j(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.jk(m,A.aH(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.S)(m),++o){n=m[o]
l.fT(n.a,n.b)}k=a
s=3
return A.c(q.w.aL(a,q.x),$async$I)
case 3:s=2
return A.c(k.aF(c,l),$async$I)
case 2:return A.f(null,r)}})
return A.h($async$I,r)}}
A.bT.prototype={
Y(){return"FileType."+this.b}}
A.c2.prototype={
V(){var s=this.d
if(s!=null)return s
throw A.b(A.C("VFS closed"))},
bW(a,b){var s=$.kK().n(0,a)
if(s==null)return this.e.d.au(a)?1:0
else return this.V().e5(s)?1:0},
cM(a,b){var s=$.kK().n(0,a)
if(s==null){this.e.d.v(0,a)
return null}else this.V().bg(s,!1)},
cN(a){return new v.G.URL(a,"file:///").pathname},
aG(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.aG(a,b)
s=$.kK().n(0,p)
if(s==null)return q.e.aG(a,b)
r=q.V()
if(!r.e5(s))if((b&4)!==0){r.aw(s).truncate(0)
r.bg(s,!0)}else throw A.b(B.av)
return new A.cl(new A.f9(q,s,(b&8)!==0),0)},
cP(a){},
l(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
ai(a,b){return this.i7(a,b)},
i5(a){return this.ai(a,!1)},
i7(a,b){var s=0,r=A.i(t.H),q=this,p,o,n,m,l,k
var $async$ai=A.j(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:m=new A.hY(a,b)
s=2
return A.c(m.$1("meta"),$async$ai)
case 2:l=d
k=J.K(l.getSize(),0)
l.truncate(2)
s=3
return A.c(m.$1("database"),$async$ai)
case 3:p=d
s=4
return A.c(m.$1("journal"),$async$ai)
case 4:o=d
n=q.d=new A.jO(new Uint8Array(2),l,p,o)
if(k){n.bg(B.B,p.getSize()>0)
n.bg(B.C,o.getSize()>0)}return A.f(null,r)}})
return A.h($async$ai,r)}}
A.hY.prototype={
eo(a){var s=0,r=A.i(t.m),q,p=this,o,n
var $async$$1=A.j(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:o=t.m
s=3
return A.c(A.a3(p.a.getFileHandle(a,{create:!0}),o),$async$$1)
case 3:n=c
s=4
return A.c(A.a3(p.b?n.createSyncAccessHandle({mode:"readwrite-unsafe"}):n.createSyncAccessHandle(),o),$async$$1)
case 4:q=c
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$1(a){return this.eo(a)},
$S:60}
A.f9.prototype={
eg(a,b){return A.lC(this.a.V().aw(this.b),a,{at:b})},
cL(){return this.d>=2?1:0},
bX(){var s=this.a,r=this.b
s.V().aw(r).flush()
if(this.c)s.V().bg(r,!1)},
bn(){return this.a.V().aw(this.b).getSize()},
cO(a){this.d=a},
cQ(a){this.a.V().aw(this.b).flush()},
bo(a){this.a.V().aw(this.b).truncate(a)},
cR(a){this.d=a},
aZ(a,b){if(A.lD(this.a.V().aw(this.b),a,{at:b})<a.length)throw A.b(B.ax)}}
A.jO.prototype={
e5(a){var s=this.a
A.lC(this.b,s,{at:0})
return s[a.a]!==0},
bg(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.F(s)
s[a.a]=r
A.lD(this.b,s,{at:0})},
aw(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.il.prototype={
eK(a,b){var s=this,r=s.c
r.a!==$&&A.mQ()
r.a=s
r=t.S
A.jm(new A.im(s),r)
A.jm(new A.io(s),r)
s.r=A.jm(new A.ip(s),r)
s.w=A.jm(new A.iq(s),r)},
bb(a,b){var s=a.length,r=this.d.dart_sqlite3_malloc(s+b),q=A.aq(this.b.buffer,0,null)
s=r+s
B.d.a7(q,r,s,a)
B.d.e6(q,s,s+b,0)
return r},
cq(a){return this.bb(a,0)},
e0(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
dZ(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
e_(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.im.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:3}
A.io.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:3}
A.ip.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:3}
A.iq.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:3}
A.cG.prototype={}
A.hN.prototype={
eJ(a){var s,r=this,q=r.a
q.start()
r.c=A.a7(q,"message",new A.hR(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.dW()
q.toString
A.dd(q,s,null,null,!1).bm(new A.hS(r),t.P)}},
ca(a){return this.fe(a)},
fe(a){var s=0,r=A.i(t.H),q=this
var $async$ca=A.j(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:A.qp(a,new A.hO(q),q.ghH(),new A.hP(q),new A.hQ(q))
return A.f(null,r)}})
return A.h($async$ca,r)},
bq(a,b,c){return this.ev(a,b,c,c)},
ev(a,b,c,d){var s=0,r=A.i(d),q,p=this,o,n,m
var $async$bq=A.j(function(e,f){if(e===1)return A.e(f,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)throw A.b(A.no(null))
o=p.e++
n=new A.l($.k,t.E)
p.f.q(0,o,new A.E(n,t.J))
a.i=o
p.a.postMessage(a,A.cw(a))
s=3
return A.c(n,$async$bq)
case 3:m=f
if(J.K(m.t,b.b)){q=c.a(m)
s=1
break}else throw A.b(A.oc(m))
case 1:return A.f(q,r)}})
return A.h($async$bq,r)},
fj(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.p()
s=q.d
if(s!=null)s.p()
for(s=q.f,r=new A.bV(s,s.r,s.e);r.k();)r.d.K(new A.e5(a))
s.W(0)
p.O()},
dr(){return this.fj(null)}}
A.hR.prototype={
$1(a){if(a.data=="_disconnect"){this.a.dr()
return}this.a.ca(A.a_(a.data))},
$S:1}
A.hS.prototype={
$1(a){this.a.dr()
a.a.O()},
$S:61}
A.hQ.prototype={
$1(a){var s=this.a.f.v(0,a.i)
if(s!=null)s.E(a)},
$S:7}
A.hP.prototype={
$1(a){return this.en(a)},
en(a1){var s=0,r=A.i(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$$1=A.j(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:f=null
e=a1.i
d=n.a
c=d.r
b=v.G
a=new b.AbortController()
c.q(0,e,a)
m=a
q=3
j=d.h7(a1,m.signal)
s=6
return A.c(t.em.b(j)?j:A.cj(j,t.m),$async$$1)
case 6:f=a3
o.push(5)
s=4
break
case 3:q=2
a0=p.pop()
l=A.P(a0)
k=A.R(a0)
if(!(l instanceof A.bb)){b.console.error("Error in worker: "+J.aS(l))
b.console.error("Original trace: "+A.w(k))}b=l
if(b instanceof A.c3){h=A.nB(b)
g=0}else{g=b instanceof A.bb?1:null
h=null}f={e:J.aS(b),s:g,r:h,i:e,t:"errorResponse"}
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
c.v(0,e)
s=o.pop()
break
case 5:c=f
d.a.postMessage(c,A.cw(c))
return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$$1,r)},
$S:62}
A.hO.prototype={
$1(a){var s=this.a.r.v(0,a.i)
if(s!=null)s.abort()},
$S:7}
A.e5.prototype={
i(a){return"Channel to database worker is closed: "+A.w(this.a)}}
A.h0.prototype={
a1(a){return this.hY(a)},
hY(a){var s=0,r=A.i(t.n),q
var $async$a1=A.j(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:q=A.iv(a,null)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$a1,r)}}
A.e9.prototype={}
A.fM.prototype={}
A.b2.prototype={
l(){this.a.l()}}
A.eh.prototype={
bR(){var s=0,r=A.i(t.H),q=this
var $async$bR=A.j(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.c(q.a.i5(q.b),$async$bR)
case 4:case 3:return A.f(null,r)}})
return A.h($async$bR,r)},
cF(){var s=0,r=A.i(t.H),q=this
var $async$cF=A.j(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.l()
return A.f(null,r)}})
return A.h($async$cF,r)}}
A.hv.prototype={
ig(a){var s=this.a,r=this.d
if(this.c)return s.transfer(r)
else return s.slice(0,r)},
f6(a){var s,r,q,p=this,o=p.b
for(s=o;s<a;){s*=2
p.b=s}if(p.c)p.a=p.a.transfer(s)
else{r=v.G
q=new r.ArrayBuffer(s)
new r.Uint8Array(q,0,p.b).set(new r.Uint8Array(p.a,0,o))
p.a=q}}}
A.iz.prototype={
$1(a){var s=new A.l($.k,t.D),r=new A.aF(new A.E(s,t.F))
this.a.a=r
this.b.E(r)
return A.nL(s)},
$S:63}
A.iA.prototype={
$2(a,b){var s,r,q
A.a_(a)
s=J.K(a.name,"AbortError")
r=this.a.a
if(r!=null){if((r.a.a.a&30)===0){q=this.b
if(q!=null)q.$0()}}else{q=this.c
if(s)q.ar(new A.bb("Operation was cancelled"),b)
else q.ar(a,b)}return null},
$S:64}
A.aF.prototype={}
A.eb.prototype={
gfU(){if(this.c.a)return!1
return!this.d||this.f!=null},
aJ(a){return this.eQ(a)},
eQ(a){var s=0,r=A.i(t.H),q=1,p=[],o=this,n,m,l,k,j,i
var $async$aJ=A.j(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:j=$.dW()
j.toString
n=j
m=null
l=null
q=3
s=6
return A.c(A.dd(n,o.a,null,o.gff(),!0),$async$aJ)
case 6:m=c
s=7
return A.c(A.dd(n,o.b,a,null,!1),$async$aJ)
case 7:l=c
j=o.e
j=j==null?null:j.bR()
s=8
return A.c(j instanceof A.l?j:A.cj(j,t.H),$async$aJ)
case 8:o.f=new A.Y(m,l)
q=1
s=5
break
case 3:q=2
i=p.pop()
j=m
if(j!=null)j.a.O()
j=l
if(j!=null)j.a.O()
throw i
s=5
break
case 2:s=1
break
case 5:return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$aJ,r)},
fg(){this.eh()},
cC(a,b,c){return this.c.bV(new A.hd(this,a,b,c),b,c)},
eh(){return this.c.cK(new A.he(this),t.H)}}
A.hd.prototype={
$0(){var s,r=this,q=r.a
if(!q.d||q.f!=null)return r.b.$0()
s=r.d
return q.aJ(r.c).bm(new A.hc(r.b,s),s)},
$S(){return this.d.h("0/()")}}
A.hc.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.h("0/(~)")}}
A.he.prototype={
$0(){var s,r,q,p=this.a,o=p.f
if(o!=null){s=o.a
r=o.b
q=p.e
if(q!=null)q.cF()
s.a.O()
r.a.O()
p.f=null}},
$S:2}
A.cU.prototype={
bV(a,b,c){return this.il(a,b,c,c)},
cK(a,b){return this.bV(a,null,b)},
il(a,b,c,d){var s=0,r=A.i(d),q,p=this,o,n,m,l,k,j,i,h,g
var $async$bV=A.j(function(e,f){if(e===1)return A.e(f,r)
for(;;)switch(s){case 0:h={}
g=b==null
if(J.K(g?null:b.aborted,!0))throw A.b(B.k)
h.a=!1
o=new A.hI(h,p)
if(!p.a){h.a=p.a=!0
q=A.ej(a,c).H(o)
s=1
break}else{n={}
m=new A.l($.k,c.h("l<0>"))
l=new A.E(m,c.h("E<0>"))
n.a=null
h=new A.hH(h,n,l,a,c)
if(!g)n.a=A.a7(b,"abort",new A.hG(n,p,l,h),!1,t.m)
g=p.b
n=g.a
k=g.c
n[k]=h
n=n.length
k=(k+1&n-1)>>>0
g.c=k
if(g.b===k){j=A.ev(n*2,null,!1,g.$ti.h("1?"))
h=g.a
n=g.b
i=h.length-n
B.c.F(j,0,i,h,n)
B.c.F(j,i,i+g.b,g.a,0)
g.b=0
g.c=g.a.length
g.a=j}++g.d
q=m.H(o)
s=1
break}case 1:return A.f(q,r)}})
return A.h($async$bV,r)}}
A.hI.prototype={
$0(){var s,r,q,p
if(!this.a.a)return
s=this.b
r=s.b
if(!r.gaT(0)){s=r.b
if(s===r.c)A.A(A.eo());++r.d
q=r.a
p=q[s]
if(p==null)p=r.$ti.c.a(p)
q[s]=null
r.b=(s+1&q.length-1)>>>0
p.$0()}else s.a=!1},
$S:0}
A.hH.prototype={
$0(){var s,r=this
r.a.a=!0
s=r.b.a
if(s!=null)s.p()
r.c.E(A.ej(r.d,r.e))},
$S:0}
A.hG.prototype={
$1(a){var s,r=this
r.a.a.p()
s=r.c
if((s.a.a&30)===0){r.b.b.v(0,r.d)
s.K(B.k)}},
$S:1}
A.bh.prototype={
gei(){var s,r,q,p,o,n=this,m=t.s,l=A.u([],m)
for(s=n.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.S)(s),++q){p=s[q]
B.c.af(l,A.u([p.a.b,p.b],m))}o={}
o.a=l
o.b=n.b
o.c=n.c
o.d=n.e
o.e=!1
o.f=!1
o.g=n.d
return o}}
A.hj.prototype={
$1(a){if(a!=null)return A.dP(a)
return null},
$S:65}
A.ex.prototype={
Y(){return"MessageType."+this.b}}
A.hU.prototype={
h7(a,b){var s,r,q,p=this,o=null
switch(a.t){case"open":return p.bH(a,b)
case"connect":return p.cv(a,b)
case"custom":return p.aP(a,b)
case"fileSystemExists":return p.be(a,b)
case"fileSystemFlush":return p.bf(a,b)
case"fileSystemAccess":return p.bd(a,b)
case"runQuery":return p.bK(a,b)
case"exclusiveLock":return p.bG(a,b)
case"releaseLock":s=p.P(a)
r=a.z
q=s.f
if((q==null?o:q.a)!==r)A.A(A.C("Lock to be released is not active."))
q.b.O()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}
case"closeDatabase":return p.bE(a,b)
case"openAdditionalConnection":return p.bI(a,b)
case"updateRequest":return p.bL(a,b)
case"rollbackRequest":return p.bJ(a,b)
case"commitRequest":return p.bF(a,b)
case"dedicatedCompatibilityCheck":return p.aM(a,b)
case"sharedCompatibilityCheck":return p.aM(a,b)
case"dedicatedInSharedCompatibilityCheck":return p.aM(a,b)
default:r=A.l9(new A.an(!1,o,o,"Unsupported request "+A.w(a.t)),o)
q=new A.l($.k,t.cY)
q.a9(r)
return q}}}
A.aU.prototype={
Y(){return"FileSystemImplementation."+this.b}}
A.at.prototype={
Y(){return"TypeCode."+this.b},
fX(a){var s=null
switch(this.a){case 0:s=A.A(A.a0("Unsupported type code",null))
break
case 1:a=A.a2(A.bH(a))
s=a
break
case 2:s=A.nV(t.Y.a(a))
break
case 3:A.bH(a)
s=a
break
case 4:A.dP(a)
s=a
break
case 5:t.Z.a(a)
s=a
break
case 7:A.bG(a)
s=a
break
case 6:break}return s}}
A.aT.prototype={
dV(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
d=d.b
s=c.d
r=s.sqlite3_bind_parameter_count(d)
q=this.a
p=q.length
if(p!==r)throw A.b(A.a0("Expected "+A.w(r)+" parameters, got "+A.w(p),null))
a.e=this
for(r=this.c,o=v.G,n=t.Z,m=t.Y,l=0;l<p;l=i){k=r[l]
j=k>=8?B.o:B.D[k]
i=l+1
h=q[l]
switch(j.a){case 1:k=s.sqlite3_bind_int64(d,i,o.BigInt(A.a2(A.bH(h))))
if(k!==0)a.a6(k,e)
break
case 2:k=s.sqlite3_bind_int64(d,i,m.a(h))
if(k!==0)a.a6(k,e)
break
case 3:k=s.sqlite3_bind_double(d,i,A.bH(h))
if(k!==0)a.a6(k,e)
break
case 4:g=B.e.av(A.dP(h))
k=s.dart_sqlite3_bind_text(d,i,c.cq(g),g.length)
if(k!==0)a.a6(k,e)
break
case 5:n.a(h)
k=s.dart_sqlite3_bind_blob(d,i,c.cq(h),h.length)
if(k!==0)a.a6(k,e)
break
case 6:k=s.sqlite3_bind_null(d,i)
if(k!==0)a.a6(k,e)
break
case 7:f=A.bG(h)?1:0
k=s.sqlite3_bind_int64(d,i,o.BigInt(f))
if(k!==0)a.a6(k,e)
break
case 0:throw A.b(A.bt("Unknown type code"))}}},
gj(a){return this.a.length},
n(a,b){var s=this.c[b],r=s>=8?B.o:B.D[s]
return r.fX(this.a[b])},
q(a,b,c){this.fK()},
fK(){throw A.b(A.bt("decodeValues list is unmodifiable"))}}
A.kr.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:7}
A.fC.prototype={
$1(a){this.a.E(this.c.a(this.b.result))},
$S:1}
A.fD.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.K(s)},
$S:1}
A.fG.prototype={
$1(a){this.a.E(this.c.a(this.b.result))},
$S:1}
A.fH.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.K(s)},
$S:1}
A.fI.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.K(s)},
$S:1}
A.hM.prototype={
ho(){var s,r,q,p
for(s=this.b,r=new A.bV(s,s.r,s.e);r.k();){q=r.d
if(!q.r){q.r=!0
if(!q.f){p=q.a
p.c.d.sqlite3_reset(p.b)
q.f=!0}q=q.a
p=q.c
p.d.sqlite3_finalize(q.b)
p=p.w
if(p!=null){p=p.a
if(p!=null)p.unregister(q.d)}}}s.W(0)}}
A.cL.prototype={
Y(){return"FileType."+this.b}}
A.b_.prototype={
Y(){return"StorageMode."+this.b}}
A.d2.prototype={
i(a){return"Remote error: "+this.a}}
A.bb.prototype={}
A.dN.prototype={}
A.eT.prototype={
ge9(){return new A.bz(this.a,"message",!1,t.R)},
l(){return this.a.close()}}
A.f8.prototype={
ge9(){return new A.aQ(new A.jZ(this),t.c3)},
l(){}}
A.jZ.prototype={
$1(a){var s=A.u([],t.W),r=A.u([],t.db)
r.push(A.a7(this.a.a,"connect",new A.jW(new A.k_(s,r,a)),!1,t.m))
a.r=new A.jX(r)},
$S:67}
A.k_.prototype={
$1(a){this.a.push(a)
a.start()
this.b.push(A.a7(a,"message",new A.jY(this.c),!1,t.m))},
$S:1}
A.jY.prototype={
$1(a){this.a.fS(a)},
$S:1}
A.jW.prototype={
$1(a){var s,r=a.ports
r=J.ax(t.r.b(r)?r:new A.ao(r,A.au(r).h("ao<1,m>")))
s=this.a
while(r.k())s.$1(r.gm())},
$S:1}
A.jX.prototype={
$0(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.S)(s),++q)s[q].p()},
$S:2}
A.eU.prototype={
ey(){var s=v.G
if(!("Worker" in s))return null
return new A.je(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.je.prototype={}
A.kg.prototype={
$1(a){return A.a_(a.data)},
$S:103}
A.dG.prototype={
p(){var s=this.a
if(s!=null)s.p()
this.a=null}}
A.cd.prototype={
l(){var s=0,r=A.i(t.H),q=this,p,o,n
var $async$l=A.j(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:q.c.p()
q.d.p()
q.e.p()
for(p=q.w,o=p.length,n=0;n<p.length;p.length===o||(0,A.S)(p),++n)p[n].abort()
B.c.W(p)
p=q.f
if(p!=null)p.b.O()
s=2
return A.c(q.a.bc(),$async$l)
case 2:return A.f(null,r)}})
return A.h($async$l,r)},
dK(a){var s=new v.G.AbortController()
a.onabort=A.kh(new A.j2(s))
this.w.push(s)
return s},
bU(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.gfU()){r=p.dK(b)
o=s.cC(c,r.signal,d).H(new A.j6(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.b(A.C("Requested operation on inactive lock state."))}if(o==null)o=A.ej(c,d)
q=p.a.z
return q instanceof A.aV?o.H(q.ghv()):o},
i4(a){var s=this,r=s.dK(a),q=new A.l($.k,t.G),p=new A.aA(q,t.bS),o=t.H
A.kP(s.a.f.cC(new A.j3(s,p),r.signal,o),new A.j4(p),o,t.K)
return q.H(new A.j5(s,r))}}
A.j2.prototype={
$0(){return this.a.abort()},
$S:0}
A.j6.prototype={
$0(){B.c.v(this.a.w,this.b)},
$S:2}
A.j3.prototype={
$0(){var s=this.a,r=s.r++,q=new A.l($.k,t.D)
s.f=new A.Y(r,new A.aA(q,t._))
this.b.E(r)
return q},
$S:4}
A.j4.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.ar(a,b)},
$S:10}
A.j5.prototype={
$0(){B.c.v(this.a.w,this.b)},
$S:2}
A.cb.prototype={
eL(a,b,c){this.b.a.H(new A.iR(this))},
aM(a,b){return this.f7(a,b)},
f7(a,b){var s=0,r=A.i(t.m),q,p=this
var $async$aM=A.j(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.c(p.w.dX(a),$async$aM)
case 3:q={r:d.gei(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$aM,r)},
cv(a,b){return this.hz(a,b)},
hz(a,b){var s=0,r=A.i(t.m),q,p=this,o,n
var $async$cv=A.j(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:n=p.w.gdn()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.cw(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$cv,r)},
aP(a,b){return this.hA(a,b)},
hA(a,b){var s=0,r=A.i(t.m),q,p=this,o,n,m,l,k
var $async$aP=A.j(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:k=a.d
s=k!=null?3:5
break
case 3:o=p.dd(k)
n=a.z
m=a.r
s=7
return A.c(o.a.ga2(),$async$aP)
case 7:s=6
return A.c(d.aQ(p,new A.fM(new A.iU(o,n,b),m)),$async$aP)
case 6:l=d
s=4
break
case 5:s=8
return A.c(p.w.b.aQ(p,new A.e9(a)),$async$aP)
case 8:l=d
case 4:q={r:l,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$aP,r)},
bH(a,b){return this.hJ(a,b)},
hJ(a,b){var s=0,r=A.i(t.m),q,p=this
var $async$bH=A.j(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.c(p.w.y.cK(new A.iX(p,a),t.m),$async$bH)
case 3:q=d
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$bH,r)},
bK(a,b){return this.hM(a,b)},
hM(a,b){var s=0,r=A.i(t.m),q,p=this,o,n,m
var $async$bK=A.j(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:o=p.P(a)
n=o.a
s=3
return A.c(n.ga2(),$async$bK)
case 3:m=d
q=o.bU(a.z,b,new A.j_(m,a,n),t.m)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$bK,r)},
bG(a,b){return this.hD(a,b)},
hD(a,b){var s=0,r=A.i(t.m),q,p=this
var $async$bG=A.j(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.c(p.P(a).i4(b),$async$bG)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$bG,r)},
bF(a,b){return this.hy(a,b)},
hy(a,b){var s=0,r=A.i(t.m),q,p=this,o,n
var $async$bF=A.j(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:o=p.P(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.c(p.aI(n,new A.iT(p,o),a),$async$bF)
case 6:q=d
s=1
break
s=4
break
case 5:n.p()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.f(q,r)}})
return A.h($async$bF,r)},
bJ(a,b){return this.hL(a,b)},
hL(a,b){var s=0,r=A.i(t.m),q,p=this,o,n
var $async$bJ=A.j(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:o=p.P(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.c(p.aI(n,new A.iZ(p,o),a),$async$bJ)
case 6:q=d
s=1
break
s=4
break
case 5:n.p()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.f(q,r)}})
return A.h($async$bJ,r)},
bL(a,b){return this.hN(a,b)},
hN(a,b){var s=0,r=A.i(t.m),q,p=this,o,n
var $async$bL=A.j(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:o=p.P(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.c(p.aI(n,new A.j1(p,o),a),$async$bL)
case 6:q=d
s=1
break
s=4
break
case 5:n.p()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.f(q,r)}})
return A.h($async$bL,r)},
bI(a,b){return this.hK(a,b)},
hK(a,b){var s=0,r=A.i(t.m),q,p=this,o,n,m
var $async$bI=A.j(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:m=p.P(a).a;++m.w
s=3
return A.c(A.ks(),$async$bI)
case 3:o=d
n=o.a
p.w.cY(o.b).x.push(A.m5(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$bI,r)},
bE(a,b){return this.hx(a,b)},
hx(a,b){var s=0,r=A.i(t.m),q,p=this,o
var $async$bE=A.j(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:o=p.P(a)
B.c.v(p.x,o)
s=3
return A.c(o.l(),$async$bE)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$bE,r)},
bf(a,b){return this.hG(a,b)},
hG(a,b){var s=0,r=A.i(t.m),q,p=this,o
var $async$bf=A.j(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.c(p.P(a).a.gaj(),$async$bf)
case 3:o=d
s=o instanceof A.aV?4:5
break
case 4:s=6
return A.c(o.ae(!1),$async$bf)
case 6:case 5:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$bf,r)},
bd(a,b){return this.hE(a,b)},
hE(a,b){var s=0,r=A.i(t.m),q,p=this,o,n,m,l,k,j
var $async$bd=A.j(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:o=p.P(a)
n=B.E[a.f]
m=a.b
l=o
k=b
j=A
s=4
return A.c(o.a.gaj(),$async$bd)
case 4:s=3
return A.c(l.bU(null,k,new j.iV(d,n,m,a),t.m),$async$bd)
case 3:q=d
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$bd,r)},
be(a,b){return this.hF(a,b)},
hF(a,b){var s=0,r=A.i(t.m),q,p=this,o,n,m,l
var $async$be=A.j(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:o=p.P(a)
n=o
m=b
l=A
s=4
return A.c(o.a.gaj(),$async$be)
case 4:s=3
return A.c(n.bU(null,m,new l.iW(d,a),t.y),$async$be)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$be,r)},
aI(a,b,c){return this.eB(a,b,c)},
eB(a,b,c){var s=0,r=A.i(t.m),q,p
var $async$aI=A.j(function(d,e){if(d===1)return A.e(e,r)
for(;;)switch(s){case 0:s=a.a==null?3:4
break
case 3:p=a
s=5
return A.c(b.$0(),$async$aI)
case 5:p.a=e
case 4:q={r:null,i:c.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$aI,r)},
hI(a){},
bA(a){var s=0,r=A.i(t.X),q,p=this
var $async$bA=A.j(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.c(p.bq({r:a,z:null,i:0,d:null,t:"custom"},B.ad,t.m),$async$bA)
case 3:q=c.r
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$bA,r)},
dd(a){return B.c.e7(this.x,new A.iQ(a))},
P(a){var s=a.d
if(s!=null)return this.dd(s)
else throw A.b(A.a0("Request requires database id",null))},
$ily:1}
A.iR.prototype={
$0(){var s=0,r=A.i(t.H),q=this,p,o,n
var $async$$0=A.j(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:p=q.a.x,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.c(p[n].l(),$async$$0)
case 5:case 3:p.length===o||(0,A.S)(p),++n
s=2
break
case 4:B.c.W(p)
return A.f(null,r)}})
return A.h($async$$0,r)},
$S:4}
A.iU.prototype={
$1$1(a,b){return this.a.bU(this.b,this.c,a,b)},
$1(a){return this.$1$1(a,t.z)},
$S:69}
A.iX.prototype={
$0(){var s=0,r=A.i(t.m),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$$0=A.j(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=j.w
h=n.b
s=3
return A.c(i.a1(h.u),$async$$0)
case 3:m=null
l=null
p=5
m=i.hu(h.d,A.nG(h.s),h.c,h.a)
s=8
return A.c(h.o?m.gaj():m.ga2(),$async$$0)
case 8:l=A.m5(m,null)
j.x.push(l)
i={r:m.b,i:h.i,t:"simpleSuccessResponse"}
q=i
s=1
break
p=2
s=7
break
case 5:p=4
g=o.pop()
s=m!=null?9:10
break
case 9:B.c.v(j.x,l)
s=11
return A.c(m.bc(),$async$$0)
case 11:case 10:throw g
s=7
break
case 4:s=2
break
case 7:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$$0,r)},
$S:70}
A.j_.prototype={
$0(){var s,r,q,p,o,n,m=null,l=this.a.a,k=this.b
if(k.c){s=l.b
s=s.a.d.sqlite3_get_autocommit(s.b)!==0}else s=!1
if(s)throw A.b(A.C("Database is not in a transaction"))
s=k.p
r=k.v
r.toString
q=new A.aT(s,r,A.aq(r,0,m))
s=this.c
r=v.G
p=l.b
o=p.a
p=p.b
if(k.r){n=s.er(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.a2(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.hr(l,k.s,q)
s=o.d
return A.mL(s.sqlite3_get_autocommit(p)!==0,m,A.a2(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:19}
A.iT.prototype={
$0(){var s=0,r=A.i(t.w),q,p=this,o
var $async$$0=A.j(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.c(o.a.ga2(),$async$$0)
case 3:q=b.a.c5().gb0().M(new A.iS(p.a,o))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:27}
A.iS.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.cw(s))},
$S:13}
A.iZ.prototype={
$0(){var s=0,r=A.i(t.w),q,p=this,o
var $async$$0=A.j(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.c(o.a.ga2(),$async$$0)
case 3:q=b.a.fC().gb0().M(new A.iY(p.a,o))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:27}
A.iY.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.cw(s))},
$S:13}
A.j1.prototype={
$0(){var s=0,r=A.i(t.aY),q,p=this,o
var $async$$0=A.j(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.c(o.a.ga2(),$async$$0)
case 3:q=b.a.dP().gb0().M(new A.j0(p.a,o))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:73}
A.j0.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.cw(s))},
$S:28}
A.iV.prototype={
$0(){var s,r,q,p=this,o=p.a.aG(new A.d5(A.mo(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.bo(s.byteLength)
o.aZ(A.aq(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.bn()
r=new Uint8Array(q)
o.bZ(r,0)
q={r:t.a.a(J.nh(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.bX()}},
$S:19}
A.iW.prototype={
$0(){return this.a.bW(A.mo(B.E[this.b.f]),0)===1},
$S:75}
A.iQ.prototype={
$1(a){return a.b===this.a},
$S:76}
A.ec.prototype={
gaj(){var s=0,r=A.i(t.fL),q,p=this,o
var $async$gaj=A.j(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.c(o==null?p.y=A.ej(new A.hh(p),t.H):o,$async$gaj)
case 3:o=p.z
o.toString
q=o
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$gaj,r)},
ga2(){var s=0,r=A.i(t.u),q,p=this,o
var $async$ga2=A.j(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=p.x
s=3
return A.c(o==null?p.x=A.ej(new A.hg(p),t.u):o,$async$ga2)
case 3:q=b
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$ga2,r)},
bc(){var s=0,r=A.i(t.H),q=this
var $async$bc=A.j(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:s=--q.w===0?2:3
break
case 2:s=4
return A.c(q.l(),$async$bc)
case 4:case 3:return A.f(null,r)}})
return A.h($async$bc,r)},
l(){var s=0,r=A.i(t.H),q=this,p,o,n,m,l,k,j
var $async$l=A.j(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:j=q.a.r
j.toString
s=2
return A.c(j,$async$l)
case 2:p=b
o=q.x
s=o!=null?3:4
break
case 3:s=5
return A.c(o,$async$l)
case 5:n=b
j=q.r
if(j!=null)j.ho()
n.l()
m=q.z
if(m!=null){j=p.a
l=$.ln()
k=l.a.get(m)
if(k==null)A.A(A.C("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.c(j instanceof A.l?j:A.cj(j,t.H),$async$l)
case 6:q.f.eh()
return A.f(null,r)}})
return A.h($async$l,r)},
du(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.v(0,b)
if(q!=null)r.q(0,b,q)
s=q}if(s!=null)return new A.Y(s,!0)
p=a.ed(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.v(0,new A.aG(n,A.q(n).h("aG<1>")).gah(0)).l()
n.q(0,p.d,p)
return new A.Y(p,!0)}return new A.Y(p,!1)},
hr(a,b,c){var s,r,q
if(c.gj(0)===0)return a.hq(b,B.aa)
else{s=null
r=null
q=this.du(a,b)
s=q.a
r=q.b
try{s.hs(new A.cH(c.gdU()))}finally{if(r)s.bj()
else s.l()}}},
er(a,b,c){var s,r=null,q=null,p=this.du(a,b)
r=p.a
q=p.b
try{s=A.od(r,c)
return s}finally{if(q)r.bj()
else r.l()}}}
A.hh.prototype={
$0(){var s=0,r=A.i(t.H),q=this,p,o,n,m,l,k
var $async$$0=A.j(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:l=q.a
k=l.d
case 2:switch(k.a){case 0:s=4
break
case 1:s=5
break
case 2:s=6
break
case 3:s=7
break
case 4:s=8
break
default:s=3
break}break
case 4:s=9
return A.c(A.hX("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.gby()
s=3
break
case 5:case 6:s=10
return A.c(A.ei("drift_db/"+l.c,k===B.m,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.e=o
n=o.a
l.z=n
l.Q=n.gby()
s=3
break
case 7:s=11
return A.c(A.em(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.gby()
s=3
break
case 8:l.z=A.kQ("vfs-web-"+l.b,null)
s=3
break
case 3:return A.f(null,r)}})
return A.h($async$$0,r)},
$S:4}
A.hg.prototype={
$0(){var s=0,r=A.i(t.u),q,p=this,o,n,m,l,k
var $async$$0=A.j(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:l=p.a
k=l.a.r
k.toString
s=3
return A.c(k,$async$$0)
case 3:o=b
s=4
return A.c(l.gaj(),$async$$0)
case 4:n=b
o.ea()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.bb(B.e.av(n.a),1),n,0)
if(m===0)A.A(A.C("could not register vfs"))
k=$.ln()
k.a.set(n,m)
s=5
return A.c(l.f.cC(new A.hf(l,o),null,t.u),$async$$0)
case 5:q=b
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:29}
A.hf.prototype={
$0(){var s=this.a
return s.a.b.cD(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:29}
A.iB.prototype={
gdn(){var s,r=this,q=r.Q
if(q===$){s=r.a.b.ey()
r.Q!==$&&A.qL()
r.Q=s
q=s}return q},
aR(){var s=0,r=A.i(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$aR=A.j(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.bE(A.dU(A.pg(n.a),"stream",t.K))
q=2
j=v.G
case 5:s=7
return A.c(h.k(),$async$aR)
case 7:if(!b){s=6
break}m=h.gm()
s=J.K(m.t,"connect")?8:10
break
case 8:i=m.r
l=new A.cG(i.port,i.lockName,null)
n.cY(l)
s=9
break
case 10:s=A.qB(m.t)?11:12
break
case 11:s=13
return A.c(n.dX(m),$async$aR)
case 13:k=b
j.postMessage(k.gei())
case 12:case 9:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
s=14
return A.c(h.p(),$async$aR)
case 14:s=o.pop()
break
case 4:return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$aR,r)},
cY(a){var s=this,r=A.ov(a,s.d++,s)
s.c.push(r)
r.b.a.H(new A.iC(s,r))
return r},
dX(a){return this.x.cK(new A.iD(this,a),t.d)},
a1(a){return this.hZ(a)},
hZ(a){var s=0,r=A.i(t.H),q=this,p,o,n,m
var $async$a1=A.j(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:n=v.G
m=new n.URL(a,A.a_(n.location).href).href
n=q.r
s=n!=null?2:4
break
case 2:p=q.w
if(p!==m)throw A.b(A.C("Workers only support a single sqlite3 wasm module, provided different URI (has "+A.w(p)+", got "+m+")"))
s=5
return A.c(t.bU.b(n)?n:A.cj(n,t.ex),$async$a1)
case 5:s=3
break
case 4:o=A.kP(q.b.a1(m),new A.iE(q),t.n,t.K)
q.r=o
s=6
return A.c(o,$async$a1)
case 6:q.w=m
case 3:return A.f(null,r)}})
return A.h($async$a1,r)},
hu(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.bV(s,s.r,s.e);r.k();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.m||b===B.A
o=A.kU(t.ge)
n=c===0?null:new A.hM(c,A.nY(t.N,t.eT))
n=new A.ec(this,r,a,b,d,new A.eb(q+"-outer",q,new A.cU(o),p),n)
s.q(0,r,n)
return n}}
A.iC.prototype={
$0(){var s=this.a,r=s.c
B.c.v(r,this.b)
if(r.length===0)s.a.l()
return null},
$S:0}
A.iD.prototype={
$0(){var s=0,r=A.i(t.d),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$0=A.j(function(a0,a1){if(a0===1)return A.e(a1,r)
for(;;)switch(s){case 0:d=p.b
c=d.d
s=J.K(d.t,"dedicatedCompatibilityCheck")||J.K(d.t,"dedicatedInSharedCompatibilityCheck")?3:5
break
case 3:s=6
return A.c(A.b8(),$async$$0)
case 6:o=a1
n=o.a
m=o.b
l=m
k=n
s=4
break
case 5:k=!1
l=!1
case 4:b=J.K(d.t,"dedicatedCompatibilityCheck")||J.K(d.t,"sharedCompatibilityCheck")
if(b){s=7
break}else a1=b
s=8
break
case 7:s=9
return A.c(A.fj(),$async$$0)
case 9:case 8:j=a1
i=A.cS(t.ab)
s=J.K(d.t,"sharedCompatibilityCheck")?10:12
break
case 10:h=p.a.gdn()
g=h!=null
s=g?13:14
break
case 13:d={d:c,i:0,t:"dedicatedInSharedCompatibilityCheck"}
f=A.cw(d)
n=h.a
n.postMessage(d,f)
b=A
a=A
s=15
return A.c(new A.bz(n,"message",!1,t.R).gah(0),$async$$0)
case 15:e=b.nu(a.a_(a1.data))
k=e.c
l=e.d
i.af(0,e.a)
case 14:s=11
break
case 12:g=!1
case 11:s=k?16:17
break
case 16:b=J
s=18
return A.c(A.cy(),$async$$0)
case 18:d=b.ax(a1)
case 19:if(!d.k()){s=20
break}i.B(0,new A.Y(B.H,d.gm()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.c(A.kq(c),$async$$0)
case 23:if(a1)i.B(0,new A.Y(B.I,c))
case 22:d=A.bX(i,i.$ti.c)
q=new A.bh(d,g,k,l,j)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:78}
A.iE.prototype={
$2(a,b){this.a.r=null
throw A.b(a)},
$S:79}
A.U.prototype={
T(a,b){if(b==null)return!1
return b instanceof A.U&&B.S.cu(b.a,this.a)},
gA(a){return A.o6(this.a)},
i(a){return"UpdateNotification<"+this.a.i(0)+">"}}
A.ie.prototype={
$1(a){this.a.B(0,a.b)},
$S:28}
A.ib.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i
for(s=this.a,r=s.length,q=this.b,p=t.N,o=0;o<s.length;s.length===r||(0,A.S)(s),++o){n=s[o]
n.b.af(0,q)
m=n.a
l=m.b
if((l&1)!==0){k=m.a
j=(((l&8)!==0?k.gba():k).e&4)!==0
l=j}else l=(l&2)===0
if(!l){l=n.b
if(l.a!==0){j=m.b
if(j>=4)A.A(m.ao())
if((j&1)!==0)m.Z(l)
else if((j&3)===0){m=m.b4()
l=new A.aO(l)
i=m.c
if(i==null)m.b=m.c=l
else{i.saz(l)
m.c=l}}n.b=A.cS(p)}}}q.W(0)},
$S:0}
A.ic.prototype={
$0(){this.a.W(0)},
$S:0}
A.i8.prototype={
$1(a){var s,r,q=this,p=q.b
p.push(a)
if(p.length===1){p=q.c
s=p.dP()
r=s.w
s=r==null?s.w=s.dj(!0):r
q.a.a=A.u([s.M(q.d),p.c5().gb0().M(new A.i9(q.e)),p.c5().gb0().M(new A.ia(q.f))],t.x)}},
$S:30}
A.i9.prototype={
$1(a){return this.a.$0()},
$S:13}
A.ia.prototype={
$1(a){return this.a.$0()},
$S:13}
A.ig.prototype={
$1(a){var s,r,q=this.b
B.c.v(q,a)
if(q.length===0)for(q=this.a.a,s=q.length,r=0;r<q.length;q.length===s||(0,A.S)(q),++r)q[r].p()},
$S:30}
A.id.prototype={
$1(a){var s=new A.bF(a,A.cS(t.N))
this.a.$1(s)
a.f=s.gfQ()
a.r=new A.i7(this.b,s)},
$S:81}
A.i7.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.bF.prototype={
fR(){var s=this.b
if(s.a!==0){this.a.B(0,s)
this.b=A.cS(t.N)}}}
A.e3.prototype={
gik(){var s=t.R,r=s.h("ag<D.T,U?>"),q=r.h("dM<D.T>")
return new A.cE(new A.dM(new A.fy(),new A.ag(new A.fz(),new A.bz(this.b,"message",!1,s),r),q),q.h("cE<D.T,U>"))},
eu(a){this.b.postMessage(A.ot(a))}}
A.fz.prototype={
$1(a){var s,r,q=A.a_(a.data)
if(J.K(q.a,0)){s=t.c.a(q.b)
r=t.h.b(s)?s:new A.ao(s,A.au(s).h("ao<1,y>"))
return new A.U(J.lr(r,new A.fx(),t.N).ih(0))}else return null},
$S:83}
A.fx.prototype={
$1(a){return a},
$S:20}
A.fy.prototype={
$1(a){return a!=null},
$S:85}
A.iK.prototype={
$1(a){return a},
$S:20}
A.aD.prototype={
Y(){return"CustomDatabaseMessageKind."+this.b}}
A.fp.prototype={
cD(a,b,c,d){return this.i8(a,b,c,d)},
i8(a,b,c,d){var s=0,r=A.i(t.u),q,p,o,n,m
var $async$cD=A.j(function(e,f){if(e===1)return A.e(f,r)
for(;;)switch(s){case 0:p=a.i6(b,c)
o=new A.dh(null,null,t.f2)
n=A.u([],t.a_)
m=A.m1(p)
n.push(new A.ag(A.mS(),m,m.$ti.h("ag<D.T,U>")).M(o.gdQ(o)))
q=new A.e_(p,o,n,A.aH(t.fg,t.bD))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$cD,r)},
aQ(a,b){throw A.b(A.l_(null))}}
A.e_.prototype={
fz(a,b){if(!a.a){a.a=!0
b.b.a.bm(new A.fq(a),t.P)}},
l(){var s,r,q,p=this
p.eD()
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.S)(s),++q)s[q].p()
p.b.l()
s=p.d
if(s!=null)s.b.close()},
aQ(a,b){return this.hB(a,b)},
hB(a,b){var s=0,r=A.i(t.X),q,p=this,o,n,m,l,k,j,i
var $async$aQ=A.j(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:i=A.a_(b.a)
case 3:switch(A.lB(B.a9,i.rawKind).a){case 0:s=5
break
case 4:s=6
break
case 1:s=7
break
case 2:s=8
break
case 3:s=9
break
case 5:s=10
break
default:s=4
break}break
case 5:case 6:throw A.b(A.bt("This is a response, not a request"))
case 7:o=p.a.b
q=o.a.d.sqlite3_get_autocommit(o.b)!==0
s=1
break
case 8:s=11
return A.c(b.c.$1$1(new A.fr(p,i),t.P),$async$aQ)
case 11:s=4
break
case 9:o=i.rawParameters
n=A.bG(o[0])
o=i.rawSql
m=p.e.ef(a,A.qN())
if(n){m.cJ()
p.fz(m,a)
l=A.ou()
k=p.b
l.b=m.b=new A.di(k,A.q(k).h("di<1>")).M(new A.fs(l,a,o))}else m.cJ()
s=4
break
case 10:o=i.name
if(p.d==null){j=p.d=new A.e3(new v.G.BroadcastChannel("sqlite3_async_updates/"+o))
o=p.c
k=A.m1(p.a)
o.push(new A.ag(A.mS(),k,k.$ti.h("ag<D.T,U>")).M(j.ges()))
k=p.b
o.push(j.gik().M(k.gdQ(k)))}s=4
break
case 4:q={rawKind:"ok"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$aQ,r)}}
A.fq.prototype={
$1(a){this.a.cJ()},
$S:86}
A.fr.prototype={
$0(){var s,r,q,p,o,n,m,l=null,k=this.b
if(k.requireTransaction){q=this.a.a.b
q=q.a.d.sqlite3_get_autocommit(q.b)!==0}else q=!1
if(q)throw A.b(A.lY(A.nU(A.kv(k,"rawSql")),l,0,"Transaction rolled back by earlier statement. Cannot execute",l,l,l))
s=this.a.a.ia(k.rawSql)
try{k=k.parameters
k=J.ax(t.r.b(k)?k:new A.ao(k,A.au(k).h("ao<1,m>")))
while(k.k()){r=k.gm()
q=s
p=r
o=p.parameters
p=p.parameterTypes
p.toString
n=new Uint8Array(p,0)
if(q.r||q.b.r)A.A(A.C(u.n))
if(!q.f){m=q.a
m.c.d.sqlite3_reset(m.b)
q.f=!0}q.d2(new A.cH(new A.aT(o,p,n).gdU()))
q.dh()}}finally{s.l()}},
$S:2}
A.fs.prototype={
$1(a){var s,r=this.a,q=r.b
if(q===r)A.A(new A.bk("Local '"+r.a+"' has not been initialized."))
r=a.a
r=A.bX(r,A.q(r).c)
s=A.m3(r)
q.a3(this.b.bA({rawKind:"notifyUpdates",rawSql:this.c,rawParameters:s.a,typeInfo:s.b}))},
$S:31}
A.ce.prototype={
cJ(){var s=this.b
if(s!=null){this.b=null
s.p()}}}
A.c5.prototype={
gj(a){return this.b},
n(a,b){if(b>=this.b)throw A.b(A.lH(b,this))
return this.a[b]},
q(a,b,c){var s
if(b>=this.b)throw A.b(A.lH(b,this))
s=this.a
s.$flags&2&&A.F(s)
s[b]=c},
sj(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.F(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.f0(b)
B.d.a7(p,0,o.b,o.a)
o.a=p}}o.b=b},
f0(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
F(a,b,c,d,e){var s=this.b
if(c>s)throw A.b(A.ae(c,0,s,null,null))
B.d.F(this.a,b,c,d,e)},
a7(a,b,c,d){return this.F(0,b,c,d,0)}}
A.f1.prototype={}
A.az.prototype={}
A.kO.prototype={}
A.bz.prototype={
t(a,b,c,d){return A.a7(this.a,this.b,a,!1,this.$ti.c)},
aV(a,b,c){return this.t(a,null,b,c)},
aU(a,b,c){return this.t(a,b,c,null)}}
A.ch.prototype={
p(){var s=this,r=A.hs(null,t.H)
if(s.b==null)return r
s.co()
s.d=s.b=null
return r},
aW(a){var s,r=this
if(r.b==null)throw A.b(A.C("Subscription has been canceled."))
r.co()
s=A.mA(new A.ji(a),t.m)
s=s==null?null:A.aC(s)
r.d=s
r.cm()},
bh(a){},
a3(a){var s=this
if(s.b==null)return;++s.a
s.co()
if(a!=null)a.H(s.gbk())},
aX(){return this.a3(null)},
S(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.cm()},
cm(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
co(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$iV:1}
A.jh.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.ji.prototype={
$1(a){return this.a.$1(a)},
$S:1};(function aliases(){var s=J.aX.prototype
s.eC=s.i
s=A.a9.prototype
s.eE=s.am
s.eF=s.b1
s=A.aP.prototype
s.eG=s.dk
s.eH=s.dJ
s=A.v.prototype
s.cW=s.F
s=A.b2.prototype
s.eD=s.l})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1u,q=hunkHelpers._static_1,p=hunkHelpers._static_0,o=hunkHelpers.installStaticTearOff,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1i,l=hunkHelpers._instance_2u,k=hunkHelpers.installInstanceTearOff
s(J,"po","nR",87)
r(A.bR.prototype,"gfk","fl",11)
q(A,"pZ","oq",5)
q(A,"q_","or",5)
q(A,"q0","os",5)
q(A,"q1","pC",14)
p(A,"mC","pT",0)
q(A,"q2","pD",8)
s(A,"q3","pF",9)
p(A,"ld","pE",0)
o(A,"q9",5,null,["$5"],["pN"],88,0)
o(A,"qe",4,null,["$1$4","$4"],["kl",function(a,b,c,d){return A.kl(a,b,c,d,t.z)}],89,0)
o(A,"qg",5,null,["$2$5","$5"],["kn",function(a,b,c,d,e){var i=t.z
return A.kn(a,b,c,d,e,i,i)}],90,0)
o(A,"qf",6,null,["$3$6","$6"],["km",function(a,b,c,d,e,f){var i=t.z
return A.km(a,b,c,d,e,f,i,i,i)}],91,0)
o(A,"qc",4,null,["$1$4","$4"],["mw",function(a,b,c,d){return A.mw(a,b,c,d,t.z)}],92,0)
o(A,"qd",4,null,["$2$4","$4"],["mx",function(a,b,c,d){var i=t.z
return A.mx(a,b,c,d,i,i)}],93,0)
o(A,"qb",4,null,["$3$4","$4"],["mv",function(a,b,c,d){var i=t.z
return A.mv(a,b,c,d,i,i,i)}],94,0)
o(A,"q7",5,null,["$5"],["pM"],95,0)
o(A,"qh",4,null,["$4"],["ko"],96,0)
o(A,"q6",5,null,["$5"],["pL"],97,0)
o(A,"q5",5,null,["$5"],["pK"],98,0)
o(A,"qa",4,null,["$4"],["pO"],99,0)
q(A,"q4","pG",100)
o(A,"q8",5,null,["$5"],["mu"],101,0)
var j
n(j=A.bx.prototype,"gbu","ac",0)
n(j,"gbv","ad",0)
m(A.dj.prototype,"gdQ","B",11)
l(A.l.prototype,"gd8","eX",9)
k(A.bD.prototype,"gfO",0,1,null,["$2","$1"],["dR","fP"],34,0,0)
n(j=A.b5.prototype,"gbu","ac",0)
n(j,"gbv","ad",0)
n(j=A.a9.prototype,"gbk","S",0)
n(j,"gbu","ac",0)
n(j,"gbv","ad",0)
n(j=A.cg.prototype,"gbk","S",0)
n(j,"gdt","fq",0)
r(j=A.bE.prototype,"geT","eU",11)
l(j,"gfo","fp",9)
n(j,"gfm","fn",0)
n(j=A.ci.prototype,"gbu","ac",0)
n(j,"gbv","ad",0)
r(j,"gf8","f9",11)
l(j,"gfc","fd",35)
n(j,"gfa","fb",0)
s(A,"mF","pd",15)
q(A,"mG","pe",16)
q(A,"qm","qw",16)
s(A,"ql","qv",15)
l(j=A.cI.prototype,"ghp","cu",15)
r(j,"ghO","hP",16)
r(j,"ghU","hV",14)
r(j=A.ea.prototype,"gi1","i2",3)
l(j,"gi_","i0",80)
k(j,"giH",0,5,null,["$5"],["iI"],82,0,0)
k(j,"giw",0,3,null,["$3"],["ix"],84,0,0)
k(j,"gio",0,4,null,["$4"],["ip"],23,0,0)
k(j,"giD",0,4,null,["$4"],["iE"],23,0,0)
k(j,"giJ",0,3,null,["$3"],["iK"],32,0,0)
l(j,"giO","iP",24)
l(j,"giu","iv",24)
r(j,"gis","it",17)
k(j,"giL",0,4,null,["$4"],["iM"],25,0,0)
k(j,"giW",0,4,null,["$4"],["iX"],25,0,0)
l(j,"giS","iT",38)
l(j,"giQ","iR",6)
l(j,"giB","iC",6)
l(j,"giF","iG",6)
l(j,"giU","iV",6)
l(j,"giq","ir",6)
r(j,"gbY","iy",17)
k(j,"giz",0,3,null,["$3"],["iA"],40,0,0)
r(j,"gc_","iN",17)
r(j,"gha","hb",5)
r(j,"gh5","h6",41)
k(j,"gh8",0,5,null,["$5"],["h9"],42,0,0)
k(j,"ghg",0,4,null,["$4"],["hh"],18,0,0)
k(j,"ghk",0,4,null,["$4"],["hl"],18,0,0)
k(j,"ghi",0,4,null,["$4"],["hj"],18,0,0)
l(j,"ghm","hn",26)
l(j,"ghe","hf",26)
k(j,"ghc",0,5,null,["$5"],["hd"],45,0,0)
l(j,"gh3","h4",46)
l(j,"gh1","h2",47)
k(j,"gh_",0,3,null,["$3"],["h0"],48,0,0)
n(j=A.aV.prototype,"gby","l",4)
n(j,"ghv","hw",4)
n(A.c2.prototype,"gby","l",0)
n(A.eb.prototype,"gff","fg",0)
r(A.aT.prototype,"gdU","dV",66)
r(A.cb.prototype,"ghH","hI",1)
q(A,"mS","om",102)
n(A.bF.prototype,"gfQ","fR",0)
r(A.e3.prototype,"ges","eu",31)
p(A,"qN","ow",68)
n(A.ch.prototype,"gbk","S",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.d,null)
q(A.d,[A.kS,J.en,A.d3,J.dX,A.D,A.bR,A.r,A.e4,A.G,A.bf,A.hV,A.bW,A.ew,A.df,A.eN,A.ef,A.cM,A.dB,A.ih,A.hK,A.cK,A.dF,A.aZ,A.hD,A.eu,A.bV,A.et,A.iP,A.fd,A.ar,A.eY,A.k7,A.fc,A.dg,A.I,A.a9,A.dj,A.dr,A.cc,A.aB,A.l,A.eQ,A.bD,A.fb,A.eR,A.eV,A.jf,A.dA,A.cg,A.bE,A.Z,A.fe,A.cr,A.ff,A.eZ,A.c1,A.jL,A.ck,A.f2,A.a1,A.v,A.f3,A.e6,A.e8,A.kb,A.cp,A.eX,A.ed,A.aE,A.jg,A.eF,A.d7,A.jj,A.hm,A.ap,A.z,A.fa,A.d8,A.eg,A.hJ,A.jI,A.jJ,A.cI,A.co,A.as,A.c3,A.h1,A.b6,A.hZ,A.bg,A.W,A.e0,A.e2,A.hz,A.cH,A.b1,A.d5,A.iw,A.ir,A.iy,A.ix,A.bu,A.bv,A.ea,A.by,A.is,A.ft,A.du,A.jk,A.f4,A.f0,A.jO,A.il,A.cG,A.hU,A.e5,A.h0,A.e9,A.b2,A.eh,A.hv,A.aF,A.eb,A.cU,A.bh,A.hM,A.d2,A.dN,A.eU,A.je,A.dG,A.cd,A.ec,A.iB,A.U,A.bF,A.e3,A.ce,A.kO,A.ch])
q(J.en,[J.eq,J.cP,J.J,J.a8,J.bU,J.cQ,J.aW])
q(J.J,[J.aX,J.p,A.bZ,A.cX])
q(J.aX,[J.eG,J.bs,J.aa])
r(J.ep,A.d3)
r(J.hB,J.p)
q(J.cQ,[J.cO,J.er])
q(A.D,[A.cE,A.cm,A.aQ,A.af,A.cC,A.bz])
q(A.r,[A.b3,A.n,A.bm,A.de,A.aL,A.bl])
q(A.b3,[A.be,A.dO])
r(A.dp,A.be)
r(A.dk,A.dO)
r(A.ao,A.dk)
q(A.G,[A.bk,A.aM,A.es,A.eP,A.eK,A.eW,A.d_,A.dY,A.an,A.db,A.eO,A.al,A.e7])
q(A.bf,[A.fA,A.fB,A.i6,A.kw,A.ky,A.iH,A.iG,A.kd,A.ht,A.ho,A.jo,A.jn,A.jz,A.i3,A.i2,A.jd,A.jc,A.jV,A.jU,A.j9,A.hE,A.hp,A.kE,A.kF,A.i_,A.h9,A.k2,A.kD,A.kG,A.kH,A.fo,A.j7,A.j8,A.fE,A.fF,A.fJ,A.fK,A.fL,A.hl,A.fw,A.fu,A.jC,A.jF,A.jG,A.hy,A.hw,A.jB,A.hY,A.im,A.io,A.ip,A.iq,A.hR,A.hS,A.hQ,A.hP,A.hO,A.iz,A.hc,A.hG,A.hj,A.kr,A.fC,A.fD,A.fG,A.fH,A.fI,A.jZ,A.k_,A.jY,A.jW,A.kg,A.iU,A.iS,A.iY,A.j0,A.iQ,A.ie,A.i8,A.i9,A.ia,A.ig,A.id,A.fz,A.fx,A.fy,A.iK,A.fq,A.fs,A.jh,A.ji])
q(A.fA,[A.kB,A.iI,A.iJ,A.k6,A.k5,A.jq,A.jv,A.ju,A.js,A.jr,A.jy,A.jx,A.jw,A.i4,A.i1,A.k1,A.k0,A.iO,A.iN,A.jP,A.jN,A.kf,A.jb,A.ja,A.jT,A.jS,A.kk,A.ka,A.k9,A.ha,A.hb,A.h7,A.h6,A.h8,A.h3,A.h2,A.h4,A.h5,A.k3,A.k4,A.kI,A.fQ,A.fN,A.fS,A.fU,A.fW,A.fP,A.fV,A.h_,A.fY,A.fX,A.fR,A.fT,A.fZ,A.fO,A.fm,A.fn,A.it,A.fv,A.jD,A.jE,A.jl,A.hx,A.hd,A.he,A.hI,A.hH,A.jX,A.j2,A.j6,A.j3,A.j5,A.iR,A.iX,A.j_,A.iT,A.iZ,A.j1,A.iV,A.iW,A.hh,A.hg,A.hf,A.iC,A.iD,A.ib,A.ic,A.i7,A.fr])
q(A.n,[A.ac,A.cJ,A.aG,A.cR,A.ds])
q(A.ac,[A.d9,A.aI,A.cT])
r(A.bi,A.bm)
r(A.bS,A.aL)
r(A.f5,A.dB)
q(A.f5,[A.Y,A.dC,A.dD,A.cl,A.f6])
r(A.cZ,A.aM)
q(A.i6,[A.i0,A.cD])
q(A.aZ,[A.bj,A.aP])
q(A.fB,[A.hC,A.kx,A.ke,A.kp,A.hu,A.hn,A.jp,A.jA,A.hF,A.hr,A.hq,A.jH,A.iA,A.j4,A.iE])
r(A.bY,A.bZ)
q(A.cX,[A.cV,A.c_])
q(A.c_,[A.dw,A.dy])
r(A.dx,A.dw)
r(A.cW,A.dx)
r(A.dz,A.dy)
r(A.ad,A.dz)
q(A.cW,[A.ey,A.ez])
q(A.ad,[A.eA,A.eB,A.eC,A.eD,A.eE,A.cY,A.bo])
r(A.dH,A.eW)
r(A.b4,A.cm)
r(A.di,A.b4)
q(A.a9,[A.b5,A.ci])
r(A.bx,A.b5)
r(A.dh,A.dj)
q(A.cc,[A.aA,A.E])
q(A.bD,[A.ca,A.cn])
q(A.eV,[A.aO,A.dm])
r(A.dv,A.ca)
q(A.af,[A.dM,A.ag])
q(A.fe,[A.eS,A.f7])
q(A.aP,[A.dt,A.dl])
r(A.dE,A.c1)
r(A.bB,A.dE)
r(A.hi,A.e6)
r(A.ij,A.hi)
r(A.ik,A.e8)
q(A.an,[A.c0,A.cN])
r(A.d4,A.co)
q(A.jg,[A.d6,A.hL,A.bT,A.ex,A.aU,A.at,A.cL,A.b_,A.aD])
r(A.c4,A.bg)
r(A.e1,A.W)
q(A.e1,[A.ek,A.aV,A.c2])
q(A.e0,[A.f_,A.f9])
q(A.a1,[A.bw,A.X])
q(A.v,[A.c8,A.aT,A.c5])
r(A.c7,A.hZ)
q(A.X,[A.dq,A.dn,A.cf,A.cq])
r(A.hN,A.hU)
r(A.fM,A.e9)
r(A.bb,A.d2)
q(A.dN,[A.eT,A.f8])
r(A.cb,A.hN)
r(A.fp,A.h0)
r(A.e_,A.b2)
r(A.f1,A.c5)
r(A.az,A.f1)
s(A.dO,A.v)
s(A.dw,A.v)
s(A.dx,A.cM)
s(A.dy,A.v)
s(A.dz,A.cM)
s(A.ca,A.eR)
s(A.cn,A.fb)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",M:"double",mM:"num",y:"String",N:"bool",z:"Null",t:"List",d:"Object",aY:"Map",m:"JSObject"},mangledNames:{},types:["~()","~(m)","z()","~(a)","x<~>()","~(~())","a(a6,a)","z(m)","~(@)","~(d,L)","z(d,L)","~(d?)","x<~>(du)","~(~)","N(d?)","N(d?,d?)","a(d?)","a(a6)","~(eJ,a,a,a)","m()","y(y)","z(@)","@()","a(W,a,a,a)","a(W,a)","a(a6,a,a,a8)","~(eJ,a)","x<V<~>>()","~(as)","x<b2>()","~(bF)","~(U)","a(W?,a,a)","@(y)","~(d[L?])","~(@,L)","@(@)","~(d?,d?)","a(a6,a8)","z(@,L)","a(a6,a,a)","a(a())","~(~(a,y,a),a,a,a,a8)","z(aa,aa)","d?(~)","a(eJ,a,a,a,a)","a(a(a),a)","a(kX,a)","a(kX,a,a)","~(a,@)","z(~())","m(p<d?>)","y(d?)","x<z>()","~(a,y,a)","m(m?)","~(bd)","x<~>(a,br)","x<~>(a)","br()","x<m>(y)","z(aF)","x<z>(m)","m(d)","z(d?,L)","y?(d?)","~(bg)","~(bn<m>)","ce()","x<0^>(0^())<d?>","x<m>()","a()","N(y)","x<V<as>>()","@(@,y)","N()","N(cd)","~(o,H,o,~())","x<bh>()","0&(d?,L)","~(a8,a)","~(bn<aK<y>>)","a6?(W,a,a,a,a)","U?(m)","a(W,a,a)","N(U?)","z(~)","a(@,@)","~(o?,H?,o,d,L)","0^(o?,H?,o,0^())<d?>","0^(o?,H?,o,0^(1^),1^)<d?,d?>","0^(o?,H?,o,0^(1^,2^),1^,2^)<d?,d?,d?>","0^()(o,H,o,0^())<d?>","0^(1^)(o,H,o,0^(1^))<d?,d?>","0^(1^,2^)(o,H,o,0^(1^,2^))<d?,d?,d?>","I?(o,H,o,d,L?)","~(o?,H?,o,~())","da(o,H,o,aE,~())","da(o,H,o,aE,~(da))","~(o,H,o,y)","~(y)","o(o?,H?,o,l1?,aY<d?,d?>?)","U(aK<y>)","m(m)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.Y&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.dC&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.dD&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.cl&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.f6&&a.b(c.a)&&b.b(c.b)}}
A.oQ(v.typeUniverse,JSON.parse('{"aa":"aX","eG":"aX","bs":"aX","qX":"bZ","p":{"t":["1"],"J":[],"n":["1"],"m":[]},"eq":{"N":[],"B":[]},"cP":{"z":[],"B":[]},"J":{"m":[]},"aX":{"J":[],"m":[]},"ep":{"d3":[]},"hB":{"p":["1"],"t":["1"],"J":[],"n":["1"],"m":[]},"cQ":{"M":[]},"cO":{"M":[],"a":[],"B":[]},"er":{"M":[],"B":[]},"aW":{"y":[],"B":[]},"cE":{"D":["2"],"D.T":"2"},"bR":{"V":["2"]},"b3":{"r":["2"]},"be":{"b3":["1","2"],"r":["2"],"r.E":"2"},"dp":{"be":["1","2"],"b3":["1","2"],"n":["2"],"r":["2"],"r.E":"2"},"dk":{"v":["2"],"t":["2"],"b3":["1","2"],"n":["2"],"r":["2"]},"ao":{"dk":["1","2"],"v":["2"],"t":["2"],"b3":["1","2"],"n":["2"],"r":["2"],"v.E":"2","r.E":"2"},"bk":{"G":[]},"n":{"r":["1"]},"ac":{"n":["1"],"r":["1"]},"d9":{"ac":["1"],"n":["1"],"r":["1"],"ac.E":"1","r.E":"1"},"bm":{"r":["2"],"r.E":"2"},"bi":{"bm":["1","2"],"n":["2"],"r":["2"],"r.E":"2"},"aI":{"ac":["2"],"n":["2"],"r":["2"],"ac.E":"2","r.E":"2"},"de":{"r":["1"],"r.E":"1"},"aL":{"r":["1"],"r.E":"1"},"bS":{"aL":["1"],"n":["1"],"r":["1"],"r.E":"1"},"cJ":{"n":["1"],"r":["1"],"r.E":"1"},"cZ":{"aM":[],"G":[]},"es":{"G":[]},"eP":{"G":[]},"dF":{"L":[]},"eK":{"G":[]},"bj":{"aZ":["1","2"],"aY":["1","2"]},"aG":{"n":["1"],"r":["1"],"r.E":"1"},"cR":{"n":["ap<1,2>"],"r":["ap<1,2>"],"r.E":"ap<1,2>"},"bY":{"J":[],"m":[],"bd":[],"B":[]},"bZ":{"J":[],"m":[],"bd":[],"B":[]},"cX":{"J":[],"m":[]},"fd":{"bd":[]},"cV":{"J":[],"m":[],"B":[]},"c_":{"ab":["1"],"J":[],"m":[]},"cW":{"v":["M"],"t":["M"],"ab":["M"],"J":[],"n":["M"],"m":[]},"ad":{"v":["a"],"t":["a"],"ab":["a"],"J":[],"n":["a"],"m":[]},"ey":{"v":["M"],"t":["M"],"ab":["M"],"J":[],"n":["M"],"m":[],"B":[],"v.E":"M"},"ez":{"v":["M"],"t":["M"],"ab":["M"],"J":[],"n":["M"],"m":[],"B":[],"v.E":"M"},"eA":{"ad":[],"v":["a"],"t":["a"],"ab":["a"],"J":[],"n":["a"],"m":[],"B":[],"v.E":"a"},"eB":{"ad":[],"v":["a"],"t":["a"],"ab":["a"],"J":[],"n":["a"],"m":[],"B":[],"v.E":"a"},"eC":{"ad":[],"v":["a"],"t":["a"],"ab":["a"],"J":[],"n":["a"],"m":[],"B":[],"v.E":"a"},"eD":{"ad":[],"v":["a"],"t":["a"],"ab":["a"],"J":[],"n":["a"],"m":[],"B":[],"v.E":"a"},"eE":{"ad":[],"v":["a"],"t":["a"],"ab":["a"],"J":[],"n":["a"],"m":[],"B":[],"v.E":"a"},"cY":{"ad":[],"v":["a"],"t":["a"],"ab":["a"],"J":[],"n":["a"],"m":[],"B":[],"v.E":"a"},"bo":{"ad":[],"br":[],"v":["a"],"t":["a"],"ab":["a"],"J":[],"n":["a"],"m":[],"B":[],"v.E":"a"},"eW":{"G":[]},"dH":{"aM":[],"G":[]},"I":{"G":[]},"dg":{"cF":["1"]},"di":{"b4":["1"],"cm":["1"],"D":["1"],"D.T":"1"},"bx":{"b5":["1"],"a9":["1"],"V":["1"],"a9.T":"1"},"dh":{"dj":["1"]},"d_":{"G":[]},"cc":{"cF":["1"]},"aA":{"cc":["1"],"cF":["1"]},"E":{"cc":["1"],"cF":["1"]},"l":{"x":["1"]},"ca":{"bD":["1"]},"cn":{"bD":["1"]},"b4":{"cm":["1"],"D":["1"],"D.T":"1"},"b5":{"a9":["1"],"V":["1"],"a9.T":"1"},"a9":{"V":["1"],"a9.T":"1"},"cm":{"D":["1"]},"cg":{"V":["1"]},"aQ":{"D":["1"],"D.T":"1"},"dv":{"ca":["1"],"bD":["1"],"bn":["1"]},"af":{"D":["2"]},"ci":{"a9":["2"],"V":["2"],"a9.T":"2"},"dM":{"af":["1","1"],"D":["1"],"D.T":"1","af.T":"1","af.S":"1"},"ag":{"af":["1","2"],"D":["2"],"D.T":"2","af.T":"2","af.S":"1"},"fe":{"o":[]},"eS":{"o":[]},"f7":{"o":[]},"cr":{"H":[]},"ff":{"l1":[]},"aP":{"aZ":["1","2"],"aY":["1","2"]},"dt":{"aP":["1","2"],"aZ":["1","2"],"aY":["1","2"]},"dl":{"aP":["1","2"],"aZ":["1","2"],"aY":["1","2"]},"ds":{"n":["1"],"r":["1"],"r.E":"1"},"bB":{"c1":["1"],"aK":["1"],"n":["1"]},"bl":{"r":["1"],"r.E":"1"},"v":{"t":["1"],"n":["1"]},"aZ":{"aY":["1","2"]},"cT":{"ac":["1"],"n":["1"],"r":["1"],"ac.E":"1","r.E":"1"},"c1":{"aK":["1"],"n":["1"]},"dE":{"c1":["1"],"aK":["1"],"n":["1"]},"t":{"n":["1"]},"aK":{"n":["1"]},"dY":{"G":[]},"aM":{"G":[]},"an":{"G":[]},"c0":{"G":[]},"cN":{"G":[]},"db":{"G":[]},"eO":{"G":[]},"al":{"G":[]},"e7":{"G":[]},"eF":{"G":[]},"d7":{"G":[]},"fa":{"L":[]},"d4":{"co":["1","aK<1>"],"co.E":"1"},"c4":{"bg":[]},"ek":{"W":[]},"f_":{"dc":[],"a6":[]},"e1":{"W":[]},"e0":{"dc":[],"a6":[]},"bw":{"a1":["bw"],"a1.E":"bw"},"c8":{"v":["bv"],"t":["bv"],"n":["bv"],"v.E":"bv"},"cC":{"D":["1"],"D.T":"1"},"aV":{"W":[]},"X":{"a1":["X"]},"f0":{"dc":[],"a6":[]},"dq":{"X":[],"a1":["X"],"a1.E":"X"},"dn":{"X":[],"a1":["X"],"a1.E":"X"},"cf":{"X":[],"a1":["X"],"a1.E":"X"},"cq":{"X":[],"a1":["X"],"a1.E":"X"},"c2":{"W":[]},"f9":{"dc":[],"a6":[]},"aT":{"v":["d?"],"t":["d?"],"n":["d?"],"v.E":"d?"},"eT":{"dN":["m"]},"f8":{"dN":["m"]},"cb":{"ly":[]},"e_":{"b2":[]},"az":{"c5":["a"],"v":["a"],"t":["a"],"n":["a"],"v.E":"a"},"c5":{"v":["1"],"t":["1"],"n":["1"]},"f1":{"c5":["a"],"v":["a"],"t":["a"],"n":["a"]},"bz":{"D":["1"],"D.T":"1"},"ch":{"V":["1"]},"nO":{"t":["a"],"n":["a"]},"br":{"t":["a"],"n":["a"]},"ol":{"t":["a"],"n":["a"]},"nM":{"t":["a"],"n":["a"]},"oj":{"t":["a"],"n":["a"]},"nN":{"t":["a"],"n":["a"]},"ok":{"t":["a"],"n":["a"]},"nH":{"t":["M"],"n":["M"]},"nI":{"t":["M"],"n":["M"]}}'))
A.oP(v.typeUniverse,JSON.parse('{"df":1,"eN":1,"ef":1,"cM":1,"dO":2,"eu":1,"bV":1,"c_":1,"d_":2,"fb":1,"eR":1,"eV":1,"aO":1,"dA":1,"bE":1,"Z":1,"dE":1,"e6":2,"e8":2,"eg":1,"cI":1,"ex":1,"nl":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",n:"Tried to operate on a released prepared statement",h:"handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",g:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.av
return{b9:s("nl<d?>"),cO:s("cC<p<d?>>"),dI:s("bd"),fg:s("ly"),eT:s("bg"),d:s("bh"),dn:s("cF<m>"),eX:s("ec"),Q:s("n<@>"),C:s("G"),gk:s("eh"),b8:s("qU"),em:s("x<m>"),aQ:s("x<z>"),V:s("x<aF?>"),bU:s("x<c7?>"),bd:s("aV"),M:s("p<x<~>>"),W:s("p<m>"),f:s("p<d>"),fS:s("p<+controller,sync(bn<as>,N)>"),q:s("p<+controller,sync(bn<~>,N)>"),gQ:s("p<+(b_,y)>"),bb:s("p<c4>"),a_:s("p<V<U>>"),db:s("p<V<@>>"),x:s("p<V<~>>"),s:s("p<y>"),bj:s("p<cb>"),bZ:s("p<cd>"),f6:s("p<f4>"),ey:s("p<bF>"),t:s("p<M>"),gn:s("p<@>"),gz:s("p<I?>"),c:s("p<d?>"),T:s("cP"),m:s("m"),Y:s("a8"),g:s("aa"),aU:s("ab<@>"),aX:s("J"),bN:s("bl<bw>"),au:s("bl<X>"),r:s("t<m>"),h:s("t<y>"),j:s("t<@>"),g6:s("aY<y,a>"),a:s("bY"),eB:s("ad"),Z:s("bo"),P:s("z"),K:s("d"),gT:s("qZ"),bQ:s("+()"),eJ:s("+(m,cG)"),ab:s("+(b_,y)"),f9:s("+(N,m)"),eN:s("+basicSupport,supportsReadWriteUnsafe(N,N)"),cf:s("+(m?,m)"),v:s("c2"),l:s("L"),aY:s("V<as>"),w:s("V<~>"),N:s("y"),aF:s("da"),dm:s("B"),eK:s("aM"),fQ:s("az"),p:s("br"),ak:s("bs"),fL:s("W"),B:s("dc"),n:s("c7"),u:s("b2"),f2:s("dh<U>"),bS:s("aA<a>"),_:s("aA<~>"),bD:s("ce"),O:s("by<m>"),R:s("bz<m>"),cp:s("l<aF>"),E:s("l<m>"),cY:s("l<0&>"),e:s("l<N>"),eI:s("l<@>"),G:s("l<a>"),D:s("l<~>"),c3:s("aQ<m>"),aT:s("aQ<aK<y>>"),fs:s("b6<as,~()>"),fK:s("b6<~,N()>"),bq:s("b6<~,~()>"),eP:s("E<aF>"),J:s("E<m>"),fa:s("E<N>"),F:s("E<~>"),y:s("N"),i:s("M"),z:s("@"),L:s("@(d)"),U:s("@(d,L)"),S:s("a"),eH:s("x<z>?"),gp:s("aF?"),A:s("m?"),aN:s("aa?"),X:s("d?"),dk:s("y?"),fN:s("az?"),ex:s("c7?"),a6:s("N?"),cD:s("M?"),I:s("a?"),cg:s("mM?"),o:s("mM"),H:s("~"),ge:s("~()"),b:s("~(d)"),k:s("~(d,L)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.a5=J.en.prototype
B.c=J.p.prototype
B.b=J.cO.prototype
B.j=J.aW.prototype
B.a6=J.aa.prototype
B.a7=J.J.prototype
B.ae=A.cV.prototype
B.d=A.bo.prototype
B.G=J.eG.prototype
B.w=J.bs.prototype
B.k=new A.bb("Operation was cancelled")
B.l=new A.cI()
B.K=new A.ef()
B.x=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.L=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.Q=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.M=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.P=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.O=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.N=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.y=function(hooks) { return hooks; }

B.R=new A.eF()
B.f=new A.hV()
B.S=new A.d4(A.av("d4<y>"))
B.z=new A.ij()
B.e=new A.ik()
B.h=new A.jf()
B.T=new A.jI()
B.a=new A.f7()
B.i=new A.fa()
B.a_=new A.aE(0)
B.m=new A.aU("x",1,"opfsExternalLocks")
B.A=new A.aU("y",2,"opfsExternalLocksWorkaround")
B.B=new A.bT("/database",0,"database")
B.C=new A.bT("/database-journal",1,"journal")
B.o=new A.at(0,"unknown")
B.p=new A.at(1,"integer")
B.q=new A.at(2,"bigInt")
B.r=new A.at(3,"float")
B.t=new A.at(4,"text")
B.u=new A.at(5,"blob")
B.v=new A.at(6,"$null")
B.J=new A.at(7,"boolean")
B.D=s([B.o,B.p,B.q,B.r,B.t,B.u,B.v,B.J],A.av("p<at>"))
B.a3=new A.cL(0,"database")
B.a4=new A.cL(1,"journal")
B.E=s([B.a3,B.a4],A.av("p<cL>"))
B.a2=new A.aU("s",0,"opfsShared")
B.a0=new A.aU("i",3,"indexedDb")
B.a1=new A.aU("m",4,"inMemory")
B.a8=s([B.a2,B.m,B.A,B.a0,B.a1],A.av("p<aU>"))
B.U=new A.aD(0,"ok")
B.V=new A.aD(1,"getAutoCommit")
B.W=new A.aD(2,"executeBatch")
B.X=new A.aD(3,"updateSubscriptionManagement")
B.Y=new A.aD(4,"notifyUpdates")
B.Z=new A.aD(5,"installBroadcastUpdates")
B.a9=s([B.U,B.V,B.W,B.X,B.Y,B.Z],A.av("p<aD>"))
B.F=s([],t.s)
B.aa=s([],t.c)
B.ab=s([B.B,B.C],A.av("p<bT>"))
B.H=new A.b_(0,"opfs")
B.I=new A.b_(1,"indexedDb")
B.ai=new A.b_(2,"inMemory")
B.ac=s([B.H,B.I,B.ai],A.av("p<b_>"))
B.ad=new A.ex(11,"simpleSuccessResponse")
B.aL=new A.hL(2,"readWriteCreate")
B.n=new A.dC(!1,!1)
B.af=new A.d6(0,"insert")
B.ag=new A.d6(1,"update")
B.ah=new A.d6(2,"delete")
B.aj=A.aw("bd")
B.ak=A.aw("qQ")
B.al=A.aw("nH")
B.am=A.aw("nI")
B.an=A.aw("nM")
B.ao=A.aw("nN")
B.ap=A.aw("nO")
B.aq=A.aw("d")
B.ar=A.aw("oj")
B.as=A.aw("ok")
B.at=A.aw("ol")
B.au=A.aw("br")
B.av=new A.b1(14)
B.aw=new A.b1(522)
B.ax=new A.b1(778)
B.ay=new A.Z(B.a,A.q9())
B.az=new A.Z(B.a,A.q5())
B.aA=new A.Z(B.a,A.qd())
B.aB=new A.Z(B.a,A.q6())
B.aC=new A.Z(B.a,A.q7())
B.aD=new A.Z(B.a,A.q8())
B.aE=new A.Z(B.a,A.qa())
B.aF=new A.Z(B.a,A.qc())
B.aG=new A.Z(B.a,A.qe())
B.aH=new A.Z(B.a,A.qf())
B.aI=new A.Z(B.a,A.qg())
B.aJ=new A.Z(B.a,A.qh())
B.aK=new A.Z(B.a,A.qb())})();(function staticFields(){$.jK=null
$.bJ=A.u([],t.f)
$.mt=null
$.lM=null
$.lv=null
$.lu=null
$.mJ=null
$.mB=null
$.mO=null
$.kt=null
$.kz=null
$.lh=null
$.jQ=A.u([],A.av("p<t<d>?>"))
$.ct=null
$.dQ=null
$.dR=null
$.la=!1
$.k=B.a
$.jR=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"qS","mT",()=>A.mI("_$dart_dartClosure"))
s($,"qR","bP",()=>A.mI("_$dart_dartClosure_dartJSInterop"))
s($,"ro","ne",()=>B.a.aA(new A.kB(),A.av("x<~>")))
s($,"rl","nc",()=>A.u([new J.ep()],A.av("p<d3>")))
s($,"r0","mW",()=>A.aN(A.ii({
toString:function(){return"$receiver$"}})))
s($,"r1","mX",()=>A.aN(A.ii({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"r2","mY",()=>A.aN(A.ii(null)))
s($,"r3","mZ",()=>A.aN(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"r6","n1",()=>A.aN(A.ii(void 0)))
s($,"r7","n2",()=>A.aN(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"r5","n0",()=>A.aN(A.m4(null)))
s($,"r4","n_",()=>A.aN(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"r9","n4",()=>A.aN(A.m4(void 0)))
s($,"r8","n3",()=>A.aN(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"rc","lo",()=>A.op())
s($,"qW","bQ",()=>$.ne())
s($,"qV","mU",()=>A.oz(!1,B.a,t.y))
s($,"re","n6",()=>{var q=t.z
return A.lG(null,null,null,q,q)})
s($,"rh","n9",()=>A.o5(4096))
s($,"rf","n7",()=>new A.ka().$0())
s($,"rg","n8",()=>new A.k9().$0())
s($,"rd","n5",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"ri","kL",()=>A.kC(B.aq))
s($,"rj","na",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"qY","mV",()=>{var q=new A.jJ(new DataView(new ArrayBuffer(A.pb(8))))
q.eN()
return q})
s($,"qP","fk",()=>$.mV())
s($,"ra","ln",()=>new A.eg(new WeakMap()))
s($,"rm","nd",()=>A.o0(A.u([A.kY("files"),A.kY("blocks")],t.s)))
s($,"qT","kK",()=>{var q,p,o=A.aH(t.N,A.av("bT"))
for(q=0;q<2;++q){p=B.ab[q]
o.q(0,p.c,p)}return o})
s($,"rk","nb",()=>B.T)
r($,"rb","dW",()=>{var q="navigator"
return A.nS(A.nT(A.kv(A.mP(),q),A.kY("locks")))?A.kv(A.kv(A.mP(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.bZ,ArrayBuffer:A.bY,ArrayBufferView:A.cX,DataView:A.cV,Float32Array:A.ey,Float64Array:A.ez,Int16Array:A.eA,Int32Array:A.eB,Int8Array:A.eC,Uint16Array:A.eD,Uint32Array:A.eE,Uint8ClampedArray:A.cY,CanvasPixelArray:A.cY,Uint8Array:A.bo})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.c_.$nativeSuperclassTag="ArrayBufferView"
A.dw.$nativeSuperclassTag="ArrayBufferView"
A.dx.$nativeSuperclassTag="ArrayBufferView"
A.cW.$nativeSuperclassTag="ArrayBufferView"
A.dy.$nativeSuperclassTag="ArrayBufferView"
A.dz.$nativeSuperclassTag="ArrayBufferView"
A.ad.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3$1=function(a){return this(a)}
Function.prototype.$2$1=function(a){return this(a)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$3$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$2$2=function(a,b){return this(a,b)}
Function.prototype.$2$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$1$2=function(a,b){return this(a,b)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.qE
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=db_worker.js.map
