"use strict";var o=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(u){throw (a=0, u)}};};var l=o(function(O,v){
var m=require('@stdlib/blas-ext-base-gfirst-index-almost-equal/dist').ndarray;function f(r,a,u,e,n,t,s,q){var i;return r<=0?-1:(n+=(r-1)*e,q+=(r-1)*s,e*=-1,s*=-1,i=m(r,a,u,e,n,t,s,q),i<0?i:r-1-i)}v.exports=f
});var y=o(function(R,c){
var x=require('@stdlib/strided-base-stride2offset/dist'),g=l();function p(r,a,u,e,n,t){return g(r,a,u,e,x(r,e),n,t,x(r,t))}c.exports=p
});var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=y(),E=l();A(d,"ndarray",E);module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
