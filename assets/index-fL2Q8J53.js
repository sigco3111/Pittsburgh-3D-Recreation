(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xc="170",Ls={ROTATE:0,DOLLY:1,PAN:2},As={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cp=0,fu=1,up=2,na=1,vc=2,li=3,Xn=0,dn=1,Cn=2,di=0,Ki=1,So=2,du=3,pu=4,hp=5,Yi=100,fp=101,dp=102,pp=103,mp=104,gp=200,_p=201,xp=202,vp=203,dl=204,pl=205,Mp=206,yp=207,Sp=208,wp=209,bp=210,Ep=211,Tp=212,Ap=213,Rp=214,ml=0,gl=1,_l=2,Os=3,xl=4,vl=5,Ml=6,yl=7,Rf=0,Cp=1,Pp=2,Di=0,Cf=1,Pf=2,Lf=3,Mc=4,Lp=5,Df=6,If=7,Uf=300,zs=301,Bs=302,wo=303,Sl=304,ia=306,Qi=1e3,hi=1001,wl=1002,Pn=1003,Dp=1004,Ho=1005,Gn=1006,va=1007,Ci=1008,_i=1009,Nf=1010,Ff=1011,bo=1012,yc=1013,ts=1014,jn=1015,pi=1016,Sc=1017,wc=1018,ks=1020,Of=35902,zf=1021,Bf=1022,Vn=1023,kf=1024,Hf=1025,Ds=1026,Hs=1027,bc=1028,Ec=1029,Gf=1030,Tc=1031,Ac=1033,Lr=33776,Dr=33777,Ir=33778,Ur=33779,bl=35840,El=35841,Tl=35842,Al=35843,Rl=36196,Cl=37492,Pl=37496,Ll=37808,Dl=37809,Il=37810,Ul=37811,Nl=37812,Fl=37813,Ol=37814,zl=37815,Bl=37816,kl=37817,Hl=37818,Gl=37819,Vl=37820,Wl=37821,Nr=36492,Xl=36494,Yl=36495,Vf=36283,ql=36284,Zl=36285,jl=36286,Ip=3200,Up=3201,Wf=0,Np=1,ui="",Be="srgb",qs="srgb-linear",sa="linear",me="srgb",ls=7680,mu=519,Fp=512,Op=513,zp=514,Xf=515,Bp=516,kp=517,Hp=518,Gp=519,Kl=35044,gu=35048,_u="300 es",fi=2e3,Yr=2001;class is{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fr=Math.PI/180,qr=180/Math.PI;function Zs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function je(i,t,e){return Math.max(t,Math.min(e,i))}function Vp(i,t){return(i%t+t)%t}function Ma(i,t,e){return(1-e)*i+e*t}function Qs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Wp={DEG2RAD:Fr};class Mt{constructor(t=0,e=0){Mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,s,o,r,a,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=o,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],_=s[0],g=s[3],m=s[6],M=s[1],v=s[4],x=s[7],w=s[2],T=s[5],b=s[8];return o[0]=r*_+a*M+l*w,o[3]=r*g+a*v+l*T,o[6]=r*m+a*x+l*b,o[1]=c*_+u*M+h*w,o[4]=c*g+u*v+h*T,o[7]=c*m+u*x+h*b,o[2]=f*_+d*M+p*w,o[5]=f*g+d*v+p*T,o[8]=f*m+d*x+p*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*r*u-e*a*c-n*o*u+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*r-a*c,f=a*l-u*o,d=c*o-r*l,p=e*h+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=h*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*r)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*o-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ya.makeScale(t,e)),this}rotate(t){return this.premultiply(ya.makeRotation(-t)),this}translate(t,e){return this.premultiply(ya.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ya=new Jt;function Yf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xp(){const i=Zr("canvas");return i.style.display="block",i}const xu={};function uo(i){i in xu||(xu[i]=!0,console.warn(i))}function Yp(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function qp(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zp(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ie={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(i.r=mi(i.r),i.g=mi(i.g),i.b=mi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(i.r=Is(i.r),i.g=Is(i.g),i.b=Is(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ui?sa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const vu=[.64,.33,.3,.6,.15,.06],Mu=[.2126,.7152,.0722],yu=[.3127,.329],Su=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wu=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[qs]:{primaries:vu,whitePoint:yu,transfer:sa,toXYZ:Su,fromXYZ:wu,luminanceCoefficients:Mu,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:vu,whitePoint:yu,transfer:me,toXYZ:Su,fromXYZ:wu,luminanceCoefficients:Mu,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}});let cs;class jp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{cs===void 0&&(cs=Zr("canvas")),cs.width=t.width,cs.height=t.height;const n=cs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=cs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=mi(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mi(e[n]/255)*255):e[n]=mi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Kp=0;class qf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Zs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Sa(s[r].image)):o.push(Sa(s[r]))}else o=Sa(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Sa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $p=0;class nn extends is{constructor(t=nn.DEFAULT_IMAGE,e=nn.DEFAULT_MAPPING,n=hi,s=hi,o=Gn,r=Ci,a=Vn,l=_i,c=nn.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Zs(),this.name="",this.source=new qf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qi:t.x=t.x-Math.floor(t.x);break;case hi:t.x=t.x<0?0:1;break;case wl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qi:t.y=t.y-Math.floor(t.y);break;case hi:t.y=t.y<0?0:1;break;case wl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Uf;nn.DEFAULT_ANISOTROPY=1;class Oe{constructor(t=0,e=0,n=0,s=1){Oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,x=(d+1)/2,w=(m+1)/2,T=(u+f)/4,b=(h+_)/4,A=(p+g)/4;return v>x&&v>w?v<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(v),s=T/n,o=b/n):x>w?x<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(x),n=T/s,o=A/s):w<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(w),n=b/o,s=A/o),this.set(n,s,o,e),this}let M=Math.sqrt((g-p)*(g-p)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jp extends is{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new nn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new qf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends Jp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Zf extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qp extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=o[r+0],d=o[r+1],p=o[r+2],_=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=p,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==p){let g=1-a;const m=l*f+c*d+u*p+h*_,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const w=Math.sqrt(v),T=Math.atan2(w,m*M);g=Math.sin(g*T)/w,a=Math.sin(a*T)/w}const x=a*M;if(l=l*g+f*x,c=c*g+d*x,u=u*g+p*x,h=h*g+_*x,g===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=o[r],f=o[r+1],d=o[r+2],p=o[r+3];return t[e]=a*p+u*h+l*d-c*f,t[e+1]=l*p+u*f+c*h-a*d,t[e+2]=c*p+u*d+a*f-l*h,t[e+3]=u*p-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(o/2),f=l(n/2),d=l(s/2),p=l(o/2);switch(r){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(o-c)*d,this._z=(r-s)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(o+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(o-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(r-s)/d,this._x=(o+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+r*a+s*c-o*l,this._y=s*u+r*l+o*a-n*c,this._z=o*u+r*c+n*l-s*a,this._w=r*u-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=r*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=o*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),u=2*(a*e-o*s),h=2*(o*n-r*e);return this.x=e+l*c+r*h-a*u,this.y=n+l*u+a*c-o*h,this.z=s+l*h+o*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wa.copy(this).projectOnVector(t),this.sub(wa)}reflect(t){return this.sub(wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wa=new U,bu=new Kn;class Ui{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,On):On.fromBufferAttribute(o,r),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Go.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Go.copy(n.boundingBox)),Go.applyMatrix4(t.matrixWorld),this.union(Go)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(to),Vo.subVectors(this.max,to),us.subVectors(t.a,to),hs.subVectors(t.b,to),fs.subVectors(t.c,to),yi.subVectors(hs,us),Si.subVectors(fs,hs),Oi.subVectors(us,fs);let e=[0,-yi.z,yi.y,0,-Si.z,Si.y,0,-Oi.z,Oi.y,yi.z,0,-yi.x,Si.z,0,-Si.x,Oi.z,0,-Oi.x,-yi.y,yi.x,0,-Si.y,Si.x,0,-Oi.y,Oi.x,0];return!ba(e,us,hs,fs,Vo)||(e=[1,0,0,0,1,0,0,0,1],!ba(e,us,hs,fs,Vo))?!1:(Wo.crossVectors(yi,Si),e=[Wo.x,Wo.y,Wo.z],ba(e,us,hs,fs,Vo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ni=[new U,new U,new U,new U,new U,new U,new U,new U],On=new U,Go=new Ui,us=new U,hs=new U,fs=new U,yi=new U,Si=new U,Oi=new U,to=new U,Vo=new U,Wo=new U,zi=new U;function ba(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){zi.fromArray(i,o);const a=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),l=t.dot(zi),c=e.dot(zi),u=n.dot(zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const t0=new Ui,eo=new U,Ea=new U;class ss{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):t0.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;eo.subVectors(t,this.center);const e=eo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(eo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(eo.copy(t.center).add(Ea)),this.expandByPoint(eo.copy(t.center).sub(Ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new U,Ta=new U,Xo=new U,wi=new U,Aa=new U,Yo=new U,Ra=new U;class oa{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ta.copy(t).add(e).multiplyScalar(.5),Xo.copy(e).sub(t).normalize(),wi.copy(this.origin).sub(Ta);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Xo),a=wi.dot(this.direction),l=-wi.dot(Xo),c=wi.lengthSq(),u=Math.abs(1-r*r);let h,f,d,p;if(u>0)if(h=r*l-a,f=r*a-l,p=o*u,h>=0)if(f>=-p)if(f<=p){const _=1/u;h*=_,f*=_,d=h*(h+r*f+2*a)+f*(r*h+f+2*l)+c}else f=o,h=Math.max(0,-(r*f+a)),d=-h*h+f*(f+2*l)+c;else f=-o,h=Math.max(0,-(r*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-r*o+a)),f=h>0?-o:Math.min(Math.max(-o,-l),o),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-o,-l),o),d=f*(f+2*l)+c):(h=Math.max(0,-(r*o+a)),f=h>0?o:Math.min(Math.max(-o,-l),o),d=-h*h+f*(f+2*l)+c);else f=r>0?-o:o,h=Math.max(0,-(r*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ta).addScaledVector(Xo,f),d}intersectSphere(t,e){ii.subVectors(t.center,this.origin);const n=ii.dot(this.direction),s=ii.dot(ii)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(o=(t.min.y-f.y)*u,r=(t.max.y-f.y)*u):(o=(t.max.y-f.y)*u,r=(t.min.y-f.y)*u),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,s,o){Aa.subVectors(e,t),Yo.subVectors(n,t),Ra.crossVectors(Aa,Yo);let r=this.direction.dot(Ra),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;wi.subVectors(this.origin,t);const l=a*this.direction.dot(Yo.crossVectors(wi,Yo));if(l<0)return null;const c=a*this.direction.dot(Aa.cross(wi));if(c<0||l+c>r)return null;const u=-a*wi.dot(Ra);return u<0?null:this.at(u/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,s,o,r,a,l,c,u,h,f,d,p,_,g){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,u,h,f,d,p,_,g)}set(t,e,n,s,o,r,a,l,c,u,h,f,d,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=o,m[5]=r,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ds.setFromMatrixColumn(t,0).length(),o=1/ds.setFromMatrixColumn(t,1).length(),r=1/ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(o),h=Math.sin(o);if(t.order==="XYZ"){const f=r*u,d=r*h,p=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+p*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=p+d*c,e[10]=r*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,p=c*u,_=c*h;e[0]=f+_*a,e[4]=p*a-d,e[8]=r*c,e[1]=r*h,e[5]=r*u,e[9]=-a,e[2]=d*a-p,e[6]=_+f*a,e[10]=r*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,p=c*u,_=c*h;e[0]=f-_*a,e[4]=-r*h,e[8]=p+d*a,e[1]=d+p*a,e[5]=r*u,e[9]=_-f*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const f=r*u,d=r*h,p=a*u,_=a*h;e[0]=l*u,e[4]=p*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const f=r*l,d=r*c,p=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=p*h+d,e[1]=h,e[5]=r*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+p,e[10]=f-_*h}else if(t.order==="XZY"){const f=r*l,d=r*c,p=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=r*u,e[9]=d*h-p,e[2]=p*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(e0,t,n0)}lookAt(t,e,n){const s=this.elements;return bn.subVectors(t,e),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),bi.crossVectors(n,bn),bi.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),bi.crossVectors(n,bn)),bi.normalize(),qo.crossVectors(bn,bi),s[0]=bi.x,s[4]=qo.x,s[8]=bn.x,s[1]=bi.y,s[5]=qo.y,s[9]=bn.y,s[2]=bi.z,s[6]=qo.z,s[10]=bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],M=n[3],v=n[7],x=n[11],w=n[15],T=s[0],b=s[4],A=s[8],y=s[12],S=s[1],R=s[5],D=s[9],F=s[13],O=s[2],z=s[6],H=s[10],J=s[14],G=s[3],et=s[7],Y=s[11],Q=s[15];return o[0]=r*T+a*S+l*O+c*G,o[4]=r*b+a*R+l*z+c*et,o[8]=r*A+a*D+l*H+c*Y,o[12]=r*y+a*F+l*J+c*Q,o[1]=u*T+h*S+f*O+d*G,o[5]=u*b+h*R+f*z+d*et,o[9]=u*A+h*D+f*H+d*Y,o[13]=u*y+h*F+f*J+d*Q,o[2]=p*T+_*S+g*O+m*G,o[6]=p*b+_*R+g*z+m*et,o[10]=p*A+_*D+g*H+m*Y,o[14]=p*y+_*F+g*J+m*Q,o[3]=M*T+v*S+x*O+w*G,o[7]=M*b+v*R+x*z+w*et,o[11]=M*A+v*D+x*H+w*Y,o[15]=M*y+v*F+x*J+w*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],p=t[3],_=t[7],g=t[11],m=t[15];return p*(+o*l*h-s*c*h-o*a*f+n*c*f+s*a*d-n*l*d)+_*(+e*l*d-e*c*f+o*r*f-s*r*d+s*c*u-o*l*u)+g*(+e*c*h-e*a*d-o*r*h+n*r*d+o*a*u-n*c*u)+m*(-s*a*u-e*l*h+e*a*f+s*r*h-n*r*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],p=t[12],_=t[13],g=t[14],m=t[15],M=h*g*c-_*f*c+_*l*d-a*g*d-h*l*m+a*f*m,v=p*f*c-u*g*c-p*l*d+r*g*d+u*l*m-r*f*m,x=u*_*c-p*h*c+p*a*d-r*_*d-u*a*m+r*h*m,w=p*h*l-u*_*l-p*a*f+r*_*f+u*a*g-r*h*g,T=e*M+n*v+s*x+o*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return t[0]=M*b,t[1]=(_*f*o-h*g*o-_*s*d+n*g*d+h*s*m-n*f*m)*b,t[2]=(a*g*o-_*l*o+_*s*c-n*g*c-a*s*m+n*l*m)*b,t[3]=(h*l*o-a*f*o-h*s*c+n*f*c+a*s*d-n*l*d)*b,t[4]=v*b,t[5]=(u*g*o-p*f*o+p*s*d-e*g*d-u*s*m+e*f*m)*b,t[6]=(p*l*o-r*g*o-p*s*c+e*g*c+r*s*m-e*l*m)*b,t[7]=(r*f*o-u*l*o+u*s*c-e*f*c-r*s*d+e*l*d)*b,t[8]=x*b,t[9]=(p*h*o-u*_*o-p*n*d+e*_*d+u*n*m-e*h*m)*b,t[10]=(r*_*o-p*a*o+p*n*c-e*_*c-r*n*m+e*a*m)*b,t[11]=(u*a*o-r*h*o-u*n*c+e*h*c+r*n*d-e*a*d)*b,t[12]=w*b,t[13]=(u*_*s-p*h*s+p*n*f-e*_*f-u*n*g+e*h*g)*b,t[14]=(p*a*s-r*_*s-p*n*l+e*_*l+r*n*g-e*a*g)*b,t[15]=(r*h*s-u*a*s+u*n*l-e*h*l-r*n*f+e*a*f)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,u=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*r,0,c*l-s*a,u*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,u=r+r,h=a+a,f=o*c,d=o*u,p=o*h,_=r*u,g=r*h,m=a*h,M=l*c,v=l*u,x=l*h,w=n.x,T=n.y,b=n.z;return s[0]=(1-(_+m))*w,s[1]=(d+x)*w,s[2]=(p-v)*w,s[3]=0,s[4]=(d-x)*T,s[5]=(1-(f+m))*T,s[6]=(g+M)*T,s[7]=0,s[8]=(p+v)*b,s[9]=(g-M)*b,s[10]=(1-(f+_))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=ds.set(s[0],s[1],s[2]).length();const r=ds.set(s[4],s[5],s[6]).length(),a=ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],zn.copy(this);const c=1/o,u=1/r,h=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=h,zn.elements[9]*=h,zn.elements[10]*=h,e.setFromRotationMatrix(zn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=fi){const l=this.elements,c=2*o/(e-t),u=2*o/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let d,p;if(a===fi)d=-(r+o)/(r-o),p=-2*r*o/(r-o);else if(a===Yr)d=-r/(r-o),p=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=fi){const l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(r-o),f=(e+t)*c,d=(n+s)*u;let p,_;if(a===fi)p=(r+o)*h,_=-2*h;else if(a===Yr)p=o*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ds=new U,zn=new ce,e0=new U(0,0,0),n0=new U(1,1,1),bi=new U,qo=new U,bn=new U,Eu=new ce,Tu=new Kn;class $n{constructor(t=0,e=0,n=0,s=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-je(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Eu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tu.setFromEuler(this),this.setFromQuaternion(Tu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class jf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let i0=0;const Au=new U,ps=new Kn,si=new ce,Zo=new U,no=new U,s0=new U,o0=new Kn,Ru=new U(1,0,0),Cu=new U(0,1,0),Pu=new U(0,0,1),Lu={type:"added"},r0={type:"removed"},ms={type:"childadded",child:null},Ca={type:"childremoved",child:null};class Te extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new U,e=new $n,n=new Kn,s=new U(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Jt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(Ru,t)}rotateY(t){return this.rotateOnAxis(Cu,t)}rotateZ(t){return this.rotateOnAxis(Pu,t)}translateOnAxis(t,e){return Au.copy(t).applyQuaternion(this.quaternion),this.position.add(Au.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ru,t)}translateY(t){return this.translateOnAxis(Cu,t)}translateZ(t){return this.translateOnAxis(Pu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zo.copy(t):Zo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(no,Zo,this.up):si.lookAt(Zo,no,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(si),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lu),ms.child=t,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(r0),Ca.child=t,this.dispatchEvent(Ca),Ca.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lu),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,t,s0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,o0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),h=r(t.shapes),f=r(t.skeletons),d=r(t.animations),p=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function r(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Te.DEFAULT_UP=new U(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new U,oi=new U,Pa=new U,ri=new U,gs=new U,_s=new U,Du=new U,La=new U,Da=new U,Ia=new U,Ua=new Oe,Na=new Oe,Fa=new Oe;class Hn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Bn.subVectors(t,e),s.cross(Bn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Bn.subVectors(s,e),oi.subVectors(n,e),Pa.subVectors(t,e);const r=Bn.dot(Bn),a=Bn.dot(oi),l=Bn.dot(Pa),c=oi.dot(oi),u=oi.dot(Pa),h=r*c-a*a;if(h===0)return o.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,p=(r*u-a*l)*f;return o.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,ri.x),l.addScaledVector(r,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return Ua.setScalar(0),Na.setScalar(0),Fa.setScalar(0),Ua.fromBufferAttribute(t,e),Na.fromBufferAttribute(t,n),Fa.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Ua,o.x),r.addScaledVector(Na,o.y),r.addScaledVector(Fa,o.z),r}static isFrontFacing(t,e,n,s){return Bn.subVectors(n,e),oi.subVectors(t,e),Bn.cross(oi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Bn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return Hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return Hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;gs.subVectors(s,n),_s.subVectors(o,n),La.subVectors(t,n);const l=gs.dot(La),c=_s.dot(La);if(l<=0&&c<=0)return e.copy(n);Da.subVectors(t,s);const u=gs.dot(Da),h=_s.dot(Da);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return r=l/(l-u),e.copy(n).addScaledVector(gs,r);Ia.subVectors(t,o);const d=gs.dot(Ia),p=_s.dot(Ia);if(p>=0&&d<=p)return e.copy(o);const _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(_s,a);const g=u*p-d*h;if(g<=0&&h-u>=0&&d-p>=0)return Du.subVectors(o,s),a=(h-u)/(h-u+(d-p)),e.copy(s).addScaledVector(Du,a);const m=1/(g+_+f);return r=_*m,a=f*m,e.copy(n).addScaledVector(gs,r).addScaledVector(_s,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},jo={h:0,s:0,l:0};function Oa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=Vp(t,1),e=je(e,0,1),n=je(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Oa(r,o,t+1/3),this.g=Oa(r,o,t),this.b=Oa(r,o,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=Be){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const n=Kf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return ie.fromWorkingColorSpace($e.copy(this),t),Math.round(je($e.r*255,0,255))*65536+Math.round(je($e.g*255,0,255))*256+Math.round(je($e.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace($e.copy(this),e);const n=$e.r,s=$e.g,o=$e.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const u=(a+r)/2;if(a===r)l=0,c=0;else{const h=r-a;switch(c=u<=.5?h/(r+a):h/(2-r-a),r){case n:l=(s-o)/h+(s<o?6:0);break;case s:l=(o-n)/h+2;break;case o:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Be){ie.fromWorkingColorSpace($e.copy(this),t);const e=$e.r,n=$e.g,s=$e.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(jo);const n=Ma(Ei.h,jo.h,e),s=Ma(Ei.s,jo.s,e),o=Ma(Ei.l,jo.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new Bt;Bt.NAMES=Kf;let a0=0;class os extends is{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Zs(),this.name="",this.blending=Ki,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=pl,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dl&&(n.blendSrc=this.blendSrc),this.blendDst!==pl&&(n.blendDst=this.blendDst),this.blendEquation!==Yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Uo extends os{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Rf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const He=new U,Ko=new Mt;class ue{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Kl,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ko.fromBufferAttribute(this,e),Ko.applyMatrix3(t),this.setXY(e,Ko.x,Ko.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=mn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qs(e,this.array)),e}setX(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qs(e,this.array)),e}setY(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qs(e,this.array)),e}setW(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),s=mn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),s=mn(s,this.array),o=mn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kl&&(t.usage=this.usage),t}}class $f extends ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Jf extends ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Yt extends ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let l0=0;const Dn=new ce,za=new Te,xs=new U,En=new Ui,io=new Ui,Xe=new U;class re extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yf(t)?Jf:$f)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Jt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,n){return Dn.makeTranslation(t,e,n),this.applyMatrix4(Dn),this}scale(t,e,n){return Dn.makeScale(t,e,n),this.applyMatrix4(Dn),this}lookAt(t){return za.lookAt(t),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Yt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];En.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];io.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(En.min,io.min),En.expandByPoint(Xe),Xe.addVectors(En.max,io.max),En.expandByPoint(Xe)):(En.expandByPoint(io.min),En.expandByPoint(io.max))}En.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Xe.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Xe));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Xe.fromBufferAttribute(a,c),l&&(xs.fromBufferAttribute(t,c),Xe.add(xs)),s=Math.max(s,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ue(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new U,l[A]=new U;const c=new U,u=new U,h=new U,f=new Mt,d=new Mt,p=new Mt,_=new U,g=new U;function m(A,y,S){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,S),f.fromBufferAttribute(o,A),d.fromBufferAttribute(o,y),p.fromBufferAttribute(o,S),u.sub(c),h.sub(c),d.sub(f),p.sub(f);const R=1/(d.x*p.y-p.x*d.y);isFinite(R)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(R),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(R),a[A].add(_),a[y].add(_),a[S].add(_),l[A].add(g),l[y].add(g),l[S].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let A=0,y=M.length;A<y;++A){const S=M[A],R=S.start,D=S.count;for(let F=R,O=R+D;F<O;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const v=new U,x=new U,w=new U,T=new U;function b(A){w.fromBufferAttribute(s,A),T.copy(w);const y=a[A];v.copy(y),v.sub(w.multiplyScalar(w.dot(y))).normalize(),x.crossVectors(T,y);const R=x.dot(l[A])<0?-1:1;r.setXYZW(A,v.x,v.y,v.z,R)}for(let A=0,y=M.length;A<y;++A){const S=M[A],R=S.start,D=S.count;for(let F=R,O=R+D;F<O;F+=3)b(t.getX(F+0)),b(t.getX(F+1)),b(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new U,o=new U,r=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){const p=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)f[p++]=c[d++]}return new ue(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new re,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const o=t.morphAttributes;for(const c in o){const u=[],h=o[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,u=r.length;c<u;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Iu=new ce,Bi=new oa,$o=new ss,Uu=new U,Jo=new U,Qo=new U,tr=new U,Ba=new U,er=new U,Nu=new U,nr=new U;class te extends Te{constructor(t=new re,e=new Uo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){er.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],h=o[l];u!==0&&(Ba.fromBufferAttribute(h,t),r?er.addScaledVector(Ba,u):er.addScaledVector(Ba.sub(e),u))}e.add(er)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(o),Bi.copy(t.ray).recast(t.near),!($o.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere($o,Uu)===null||Bi.origin.distanceToSquared(Uu)>(t.far-t.near)**2))&&(Iu.copy(o).invert(),Bi.copy(t.ray).applyMatrix4(Iu),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=r[g.materialIndex],M=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=M,w=v;x<w;x+=3){const T=a.getX(x),b=a.getX(x+1),A=a.getX(x+2);s=ir(this,m,t,n,c,u,h,T,b,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const M=a.getX(g),v=a.getX(g+1),x=a.getX(g+2);s=ir(this,r,t,n,c,u,h,M,v,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=r[g.materialIndex],M=Math.max(g.start,d.start),v=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=M,w=v;x<w;x+=3){const T=x,b=x+1,A=x+2;s=ir(this,m,t,n,c,u,h,T,b,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const M=g,v=g+1,x=g+2;s=ir(this,r,t,n,c,u,h,M,v,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function c0(i,t,e,n,s,o,r,a){let l;if(t.side===dn?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===Xn,a),l===null)return null;nr.copy(a),nr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(nr);return c<e.near||c>e.far?null:{distance:c,point:nr.clone(),object:i}}function ir(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,Jo),i.getVertexPosition(l,Qo),i.getVertexPosition(c,tr);const u=c0(i,t,e,n,Jo,Qo,tr,Nu);if(u){const h=new U;Hn.getBarycoord(Nu,Jo,Qo,tr,h),s&&(u.uv=Hn.getInterpolatedAttribute(s,a,l,c,h,new Mt)),o&&(u.uv1=Hn.getInterpolatedAttribute(o,a,l,c,h,new Mt)),r&&(u.normal=Hn.getInterpolatedAttribute(r,a,l,c,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new U,materialIndex:0};Hn.getNormal(Jo,Qo,tr,f.normal),u.face=f,u.barycoord=h}return u}class _e extends re{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],u=[],h=[];let f=0,d=0;p("z","y","x",-1,-1,n,e,t,r,o,0),p("z","y","x",1,-1,n,e,-t,r,o,1),p("x","z","y",1,1,t,n,e,s,r,2),p("x","z","y",1,-1,t,n,-e,s,r,3),p("x","y","z",1,-1,t,e,n,s,o,4),p("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(h,2));function p(_,g,m,M,v,x,w,T,b,A,y){const S=x/b,R=w/A,D=x/2,F=w/2,O=T/2,z=b+1,H=A+1;let J=0,G=0;const et=new U;for(let Y=0;Y<H;Y++){const Q=Y*R-F;for(let V=0;V<z;V++){const ot=V*S-D;et[_]=ot*M,et[g]=Q*v,et[m]=O,c.push(et.x,et.y,et.z),et[_]=0,et[g]=0,et[m]=T>0?1:-1,u.push(et.x,et.y,et.z),h.push(V/b),h.push(1-Y/A),J+=1}}for(let Y=0;Y<A;Y++)for(let Q=0;Q<b;Q++){const V=f+Q+z*Y,ot=f+Q+z*(Y+1),X=f+(Q+1)+z*(Y+1),L=f+(Q+1)+z*Y;l.push(V,ot,L),l.push(ot,X,L),G+=6}a.addGroup(d,G,y),d+=G,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function an(i){const t={};for(let e=0;e<i.length;e++){const n=Gs(i[e]);for(const s in n)t[s]=n[s]}return t}function u0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Qf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Eo={clone:Gs,merge:an};var h0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends os{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h0,this.fragmentShader=f0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=u0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class td extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new U,Fu=new Mt,Ou=new Mt;class Rn extends td{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,Fu,Ou),e.subVectors(Ou,Fu)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const vs=-90,Ms=1;class d0 extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Rn(vs,Ms,t,e);s.layers=this.layers,this.add(s);const o=new Rn(vs,Ms,t,e);o.layers=this.layers,this.add(o);const r=new Rn(vs,Ms,t,e);r.layers=this.layers,this.add(r);const a=new Rn(vs,Ms,t,e);a.layers=this.layers,this.add(a);const l=new Rn(vs,Ms,t,e);l.layers=this.layers,this.add(l);const c=new Rn(vs,Ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===fi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class ed extends nn{constructor(t,e,n,s,o,r,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:zs,super(t,e,n,s,o,r,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class p0 extends Wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ed(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _e(5,5,5),o=new tn({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:di});o.uniforms.tEquirect.value=e;const r=new te(s,o),a=e.minFilter;return e.minFilter===Ci&&(e.minFilter=Gn),new d0(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const ka=new U,m0=new U,g0=new Jt;class Ri{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ka.subVectors(n,e).cross(m0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ka),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||g0.getNormalMatrix(t),s=this.coplanarPoint(ka).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new ss,sr=new U;class Rc{constructor(t=new Ri,e=new Ri,n=new Ri,s=new Ri,o=new Ri,r=new Ri){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fi){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],p=s[9],_=s[10],g=s[11],m=s[12],M=s[13],v=s[14],x=s[15];if(n[0].setComponents(l-o,f-c,g-d,x-m).normalize(),n[1].setComponents(l+o,f+c,g+d,x+m).normalize(),n[2].setComponents(l+r,f+u,g+p,x+M).normalize(),n[3].setComponents(l-r,f-u,g-p,x-M).normalize(),n[4].setComponents(l-a,f-h,g-_,x-v).normalize(),e===fi)n[5].setComponents(l+a,f+h,g+_,x+v).normalize();else if(e===Yr)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(sr.x=s.normal.x>0?t.max.x:t.min.x,sr.y=s.normal.y>0?t.max.y:t.min.y,sr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nd(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function _0(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){const p=h[f],_=h[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){const _=h[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}class No extends re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,d=[],p=[],_=[],g=[];for(let m=0;m<u;m++){const M=m*f-r;for(let v=0;v<c;v++){const x=v*h-o;p.push(x,-M,0),_.push(0,0,1),g.push(v/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const v=M+c*m,x=M+c*(m+1),w=M+1+c*(m+1),T=M+1+c*m;d.push(v,x,T),d.push(x,w,T)}this.setIndex(d),this.setAttribute("position",new Yt(p,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new No(t.width,t.height,t.widthSegments,t.heightSegments)}}var x0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v0=`#ifdef USE_ALPHAHASH
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
#endif`,M0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,w0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b0=`#ifdef USE_AOMAP
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
#endif`,E0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T0=`#ifdef USE_BATCHING
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
#endif`,A0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L0=`#ifdef USE_IRIDESCENCE
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
#endif`,D0=`#ifdef USE_BUMPMAP
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
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,H0=`#define PI 3.141592653589793
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
} // validated`,G0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,V0=`vec3 transformedNormal = objectNormal;
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
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z0="gl_FragColor = linearToOutputTexel( gl_FragColor );",j0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,om=`#ifdef USE_GRADIENTMAP
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
}`,rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cm=`uniform bool receiveShadow;
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
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mm=`PhysicalMaterial material;
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
#endif`,gm=`struct PhysicalMaterial {
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
}`,_m=`
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
#endif`,xm=`#if defined( RE_IndirectDiffuse )
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
#endif`,vm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ym=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Am=`#if defined( USE_POINTS_UV )
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
#endif`,Rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`#ifdef USE_MORPHTARGETS
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
#endif`,Um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,km=`#ifdef USE_NORMALMAP
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
#endif`,Hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ym=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ng=`float getShadowMask() {
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
}`,ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sg=`#ifdef USE_SKINNING
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
#endif`,og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rg=`#ifdef USE_SKINNING
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
#endif`,ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ug=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hg=`#ifdef USE_TRANSMISSION
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
#endif`,fg=`#ifdef USE_TRANSMISSION
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xg=`uniform sampler2D t2D;
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`#include <common>
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
}`,bg=`#if DEPTH_PACKING == 3200
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
}`,Eg=`#define DISTANCE
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
}`,Tg=`#define DISTANCE
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
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`uniform float scale;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Ig=`#define LAMBERT
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
}`,Ug=`#define LAMBERT
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
}`,Ng=`#define MATCAP
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
}`,Fg=`#define MATCAP
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
}`,Og=`#define NORMAL
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
}`,zg=`#define NORMAL
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
}`,Bg=`#define PHONG
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
}`,kg=`#define PHONG
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
}`,Hg=`#define STANDARD
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
}`,Gg=`#define STANDARD
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
}`,Vg=`#define TOON
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
}`,Wg=`#define TOON
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
}`,Xg=`uniform float size;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,qg=`#include <common>
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
}`,Zg=`uniform vec3 color;
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
}`,jg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Kg=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:x0,alphahash_pars_fragment:v0,alphamap_fragment:M0,alphamap_pars_fragment:y0,alphatest_fragment:S0,alphatest_pars_fragment:w0,aomap_fragment:b0,aomap_pars_fragment:E0,batching_pars_vertex:T0,batching_vertex:A0,begin_vertex:R0,beginnormal_vertex:C0,bsdfs:P0,iridescence_fragment:L0,bumpmap_pars_fragment:D0,clipping_planes_fragment:I0,clipping_planes_pars_fragment:U0,clipping_planes_pars_vertex:N0,clipping_planes_vertex:F0,color_fragment:O0,color_pars_fragment:z0,color_pars_vertex:B0,color_vertex:k0,common:H0,cube_uv_reflection_fragment:G0,defaultnormal_vertex:V0,displacementmap_pars_vertex:W0,displacementmap_vertex:X0,emissivemap_fragment:Y0,emissivemap_pars_fragment:q0,colorspace_fragment:Z0,colorspace_pars_fragment:j0,envmap_fragment:K0,envmap_common_pars_fragment:$0,envmap_pars_fragment:J0,envmap_pars_vertex:Q0,envmap_physical_pars_fragment:um,envmap_vertex:tm,fog_vertex:em,fog_pars_vertex:nm,fog_fragment:im,fog_pars_fragment:sm,gradientmap_pars_fragment:om,lightmap_pars_fragment:rm,lights_lambert_fragment:am,lights_lambert_pars_fragment:lm,lights_pars_begin:cm,lights_toon_fragment:hm,lights_toon_pars_fragment:fm,lights_phong_fragment:dm,lights_phong_pars_fragment:pm,lights_physical_fragment:mm,lights_physical_pars_fragment:gm,lights_fragment_begin:_m,lights_fragment_maps:xm,lights_fragment_end:vm,logdepthbuf_fragment:Mm,logdepthbuf_pars_fragment:ym,logdepthbuf_pars_vertex:Sm,logdepthbuf_vertex:wm,map_fragment:bm,map_pars_fragment:Em,map_particle_fragment:Tm,map_particle_pars_fragment:Am,metalnessmap_fragment:Rm,metalnessmap_pars_fragment:Cm,morphinstance_vertex:Pm,morphcolor_vertex:Lm,morphnormal_vertex:Dm,morphtarget_pars_vertex:Im,morphtarget_vertex:Um,normal_fragment_begin:Nm,normal_fragment_maps:Fm,normal_pars_fragment:Om,normal_pars_vertex:zm,normal_vertex:Bm,normalmap_pars_fragment:km,clearcoat_normal_fragment_begin:Hm,clearcoat_normal_fragment_maps:Gm,clearcoat_pars_fragment:Vm,iridescence_pars_fragment:Wm,opaque_fragment:Xm,packing:Ym,premultiplied_alpha_fragment:qm,project_vertex:Zm,dithering_fragment:jm,dithering_pars_fragment:Km,roughnessmap_fragment:$m,roughnessmap_pars_fragment:Jm,shadowmap_pars_fragment:Qm,shadowmap_pars_vertex:tg,shadowmap_vertex:eg,shadowmask_pars_fragment:ng,skinbase_vertex:ig,skinning_pars_vertex:sg,skinning_vertex:og,skinnormal_vertex:rg,specularmap_fragment:ag,specularmap_pars_fragment:lg,tonemapping_fragment:cg,tonemapping_pars_fragment:ug,transmission_fragment:hg,transmission_pars_fragment:fg,uv_pars_fragment:dg,uv_pars_vertex:pg,uv_vertex:mg,worldpos_vertex:gg,background_vert:_g,background_frag:xg,backgroundCube_vert:vg,backgroundCube_frag:Mg,cube_vert:yg,cube_frag:Sg,depth_vert:wg,depth_frag:bg,distanceRGBA_vert:Eg,distanceRGBA_frag:Tg,equirect_vert:Ag,equirect_frag:Rg,linedashed_vert:Cg,linedashed_frag:Pg,meshbasic_vert:Lg,meshbasic_frag:Dg,meshlambert_vert:Ig,meshlambert_frag:Ug,meshmatcap_vert:Ng,meshmatcap_frag:Fg,meshnormal_vert:Og,meshnormal_frag:zg,meshphong_vert:Bg,meshphong_frag:kg,meshphysical_vert:Hg,meshphysical_frag:Gg,meshtoon_vert:Vg,meshtoon_frag:Wg,points_vert:Xg,points_frag:Yg,shadow_vert:qg,shadow_frag:Zg,sprite_vert:jg,sprite_frag:Kg},bt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Zn={basic:{uniforms:an([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:an([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:an([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:an([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:an([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:an([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:an([bt.points,bt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:an([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:an([bt.common,bt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:an([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:an([bt.sprite,bt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:an([bt.common,bt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:an([bt.lights,bt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Zn.physical={uniforms:an([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const or={r:0,b:0,g:0},Hi=new $n,$g=new ce;function Jg(i,t,e,n,s,o,r){const a=new Bt(0);let l=o===!0?0:1,c,u,h=null,f=0,d=null;function p(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1;const x=p(M);x===null?m(a,l):x&&x.isColor&&(m(x,1),v=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,v){const x=p(v);x&&(x.isCubeTexture||x.mapping===ia)?(u===void 0&&(u=new te(new _e(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:Gs(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Hi.copy(v.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($g.makeRotationFromEuler(Hi)),u.material.toneMapped=ie.getTransfer(x.colorSpace)!==me,(h!==x||f!==x.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new te(new No(2,2),new tn({name:"BackgroundMaterial",uniforms:Gs(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ie.getTransfer(x.colorSpace)!==me,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,v){M.getRGB(or,Qf(i)),n.buffers.color.setClear(or.r,or.g,or.b,v,r)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:_,addToRenderList:g}}function Qg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let o=s,r=!1;function a(S,R,D,F,O){let z=!1;const H=h(F,D,R);o!==H&&(o=H,c(o.object)),z=d(S,F,D,O),z&&p(S,F,D,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(z||r)&&(r=!1,x(S,R,D,F),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,R,D){const F=D.wireframe===!0;let O=n[S.id];O===void 0&&(O={},n[S.id]=O);let z=O[R.id];z===void 0&&(z={},O[R.id]=z);let H=z[F];return H===void 0&&(H=f(l()),z[F]=H),H}function f(S){const R=[],D=[],F=[];for(let O=0;O<e;O++)R[O]=0,D[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:F,object:S,attributes:{},index:null}}function d(S,R,D,F){const O=o.attributes,z=R.attributes;let H=0;const J=D.getAttributes();for(const G in J)if(J[G].location>=0){const Y=O[G];let Q=z[G];if(Q===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),Y===void 0||Y.attribute!==Q||Q&&Y.data!==Q.data)return!0;H++}return o.attributesNum!==H||o.index!==F}function p(S,R,D,F){const O={},z=R.attributes;let H=0;const J=D.getAttributes();for(const G in J)if(J[G].location>=0){let Y=z[G];Y===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor));const Q={};Q.attribute=Y,Y&&Y.data&&(Q.data=Y.data),O[G]=Q,H++}o.attributes=O,o.attributesNum=H,o.index=F}function _(){const S=o.newAttributes;for(let R=0,D=S.length;R<D;R++)S[R]=0}function g(S){m(S,0)}function m(S,R){const D=o.newAttributes,F=o.enabledAttributes,O=o.attributeDivisors;D[S]=1,F[S]===0&&(i.enableVertexAttribArray(S),F[S]=1),O[S]!==R&&(i.vertexAttribDivisor(S,R),O[S]=R)}function M(){const S=o.newAttributes,R=o.enabledAttributes;for(let D=0,F=R.length;D<F;D++)R[D]!==S[D]&&(i.disableVertexAttribArray(D),R[D]=0)}function v(S,R,D,F,O,z,H){H===!0?i.vertexAttribIPointer(S,R,D,O,z):i.vertexAttribPointer(S,R,D,F,O,z)}function x(S,R,D,F){_();const O=F.attributes,z=D.getAttributes(),H=R.defaultAttributeValues;for(const J in z){const G=z[J];if(G.location>=0){let et=O[J];if(et===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(et=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(et=S.instanceColor)),et!==void 0){const Y=et.normalized,Q=et.itemSize,V=t.get(et);if(V===void 0)continue;const ot=V.buffer,X=V.type,L=V.bytesPerElement,I=X===i.INT||X===i.UNSIGNED_INT||et.gpuType===yc;if(et.isInterleavedBufferAttribute){const k=et.data,$=k.stride,at=et.offset;if(k.isInstancedInterleavedBuffer){for(let ct=0;ct<G.locationSize;ct++)m(G.location+ct,k.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ct=0;ct<G.locationSize;ct++)g(G.location+ct);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let ct=0;ct<G.locationSize;ct++)v(G.location+ct,Q/G.locationSize,X,Y,$*L,(at+Q/G.locationSize*ct)*L,I)}else{if(et.isInstancedBufferAttribute){for(let k=0;k<G.locationSize;k++)m(G.location+k,et.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let k=0;k<G.locationSize;k++)g(G.location+k);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let k=0;k<G.locationSize;k++)v(G.location+k,Q/G.locationSize,X,Y,Q*L,Q/G.locationSize*k*L,I)}}else if(H!==void 0){const Y=H[J];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(G.location,Y);break;case 3:i.vertexAttrib3fv(G.location,Y);break;case 4:i.vertexAttrib4fv(G.location,Y);break;default:i.vertexAttrib1fv(G.location,Y)}}}}M()}function w(){A();for(const S in n){const R=n[S];for(const D in R){const F=R[D];for(const O in F)u(F[O].object),delete F[O];delete R[D]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const R=n[S.id];for(const D in R){const F=R[D];for(const O in F)u(F[O].object),delete F[O];delete R[D]}delete n[S.id]}function b(S){for(const R in n){const D=n[R];if(D[S.id]===void 0)continue;const F=D[S.id];for(const O in F)u(F[O].object),delete F[O];delete D[S.id]}}function A(){y(),r=!0,o!==s&&(o=s,c(o.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function t1(i,t,e){let n;function s(c){n=c}function o(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function r(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)r(c[p],u[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_]*f[_];e.update(p,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function e1(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(b){return!(b!==Vn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const A=b===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==_i&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==jn&&!A)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=p>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:w,maxSamples:T}}function n1(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new Ri,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const p=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!s||p===null||p.length===0||o&&!g)o?u(null):c();else{const M=o?0:n,v=M*4;let x=m.clippingState||null;l.value=x,x=u(p,f,v,d);for(let w=0;w!==v;++w)x[w]=e[w];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,p){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,x=d;v!==_;++v,x+=4)r.copy(h[v]).applyMatrix4(M,a),r.normal.toArray(g,x),g[x+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function i1(i){let t=new WeakMap;function e(r,a){return a===wo?r.mapping=zs:a===Sl&&(r.mapping=Bs),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===wo||a===Sl)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new p0(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Cc extends td{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Rs=4,zu=[.125,.215,.35,.446,.526,.582],qi=20,Ha=new Cc,Bu=new Bt;let Ga=null,Va=0,Wa=0,Xa=!1;const Wi=(1+Math.sqrt(5))/2,ys=1/Wi,ku=[new U(-Wi,ys,0),new U(Wi,ys,0),new U(-ys,0,Wi),new U(ys,0,Wi),new U(0,Wi,-ys),new U(0,Wi,ys),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Hu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ga=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ga,Va,Wa),this._renderer.xr.enabled=Xa,t.scissorTest=!1,rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zs||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ga=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:pi,format:Vn,colorSpace:qs,depthBuffer:!1},s=Gu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gu(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=s1(o)),this._blurMaterial=o1(o,t,e)}return s}_compileMaterial(t){const e=new te(this._lodPlanes[0],t);this._renderer.compile(e,Ha)}_sceneToCubeUV(t,e,n,s){const a=new Rn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Bu),u.toneMapping=Di,u.autoClear=!1;const d=new Uo({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),p=new te(new _e,d);let _=!1;const g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,_=!0):(d.color.copy(Bu),_=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;rr(s,M*v,m>2?v:0,v,v),u.setRenderTarget(s),_&&u.render(p,a),u.render(t,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===zs||t.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vu());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new te(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;rr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Ha)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=ku[(s-o-1)%ku.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new te(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*qi-1),_=o/p,g=isFinite(o)?1+Math.floor(u*_):qi;g>qi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${qi}`);const m=[];let M=0;for(let b=0;b<qi;++b){const A=b/_,y=Math.exp(-A*A/2);m.push(y),b===0?M+=y:b<g&&(M+=2*y)}for(let b=0;b<m.length;b++)m[b]=m[b]/M;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=p,f.mipInt.value=v-n;const x=this._sizeLods[s],w=3*x*(s>v-Rs?s-v+Rs:0),T=4*(this._cubeSize-x);rr(e,w,T,3*x,2*x),l.setRenderTarget(e),l.render(h,Ha)}}function s1(i){const t=[],e=[],n=[];let s=i;const o=i-Rs+1+zu.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>i-Rs?l=zu[r-i+Rs-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,p=6,_=3,g=2,m=1,M=new Float32Array(_*p*d),v=new Float32Array(g*p*d),x=new Float32Array(m*p*d);for(let T=0;T<d;T++){const b=T%3*2/3-1,A=T>2?0:-1,y=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];M.set(y,_*p*T),v.set(f,g*p*T);const S=[T,T,T,T,T,T];x.set(S,m*p*T)}const w=new re;w.setAttribute("position",new ue(M,_)),w.setAttribute("uv",new ue(v,g)),w.setAttribute("faceIndex",new ue(x,m)),t.push(w),s>Rs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Gu(i,t,e){const n=new Wn(i,t,e);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function o1(i,t,e){const n=new Float32Array(qi),s=new U(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Vu(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Wu(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Pc(){return`

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
	`}function r1(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===wo||l===Sl,u=l===zs||l===Bs;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Hu(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Hu(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function a1(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&uo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function l1(i,t,e,n){const s={},o=new WeakMap;function r(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const p in f.attributes)t.remove(f.attributes[p]);for(const p in f.morphAttributes){const _=f.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)t.remove(_[g])}f.removeEventListener("dispose",r),delete s[f.id];const d=o.get(f);d&&(t.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const p in d){const _=d[p];for(let g=0,m=_.length;g<m;g++)t.update(_[g],i.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,p=h.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let v=0,x=M.length;v<x;v+=3){const w=M[v+0],T=M[v+1],b=M[v+2];f.push(w,T,T,b,b,w)}}else if(p!==void 0){const M=p.array;_=p.version;for(let v=0,x=M.length/3-1;v<x;v+=3){const w=v+0,T=v+1,b=v+2;f.push(w,T,T,b,b,w)}}else return;const g=new(Yf(f)?Jf:$f)(f,1);g.version=_;const m=o.get(h);m&&t.remove(m),o.set(h,g)}function u(h){const f=o.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return o.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function c1(i,t,e){let n;function s(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function l(f,d){i.drawElements(n,d,o,f*r),e.update(d,n,1)}function c(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,o,f*r,p),e.update(d,n,p))}function u(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];e.update(g,n,1)}function h(f,d,p,_){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/r,d[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,o,f,0,_,0,p);let m=0;for(let M=0;M<p;M++)m+=d[M]*_[M];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function u1(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function h1(i,t,e){const n=new WeakMap,s=new Oe;function o(r,a,l){const c=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let S=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let w=a.attributes.position.count*x,T=1;w>t.maxTextureSize&&(T=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const b=new Float32Array(w*T*4*h),A=new Zf(b,w,T,h);A.type=jn,A.needsUpdate=!0;const y=x*4;for(let R=0;R<h;R++){const D=m[R],F=M[R],O=v[R],z=w*T*4*R;for(let H=0;H<D.count;H++){const J=H*y;p===!0&&(s.fromBufferAttribute(D,H),b[z+J+0]=s.x,b[z+J+1]=s.y,b[z+J+2]=s.z,b[z+J+3]=0),_===!0&&(s.fromBufferAttribute(F,H),b[z+J+4]=s.x,b[z+J+5]=s.y,b[z+J+6]=s.z,b[z+J+7]=0),g===!0&&(s.fromBufferAttribute(O,H),b[z+J+8]=s.x,b[z+J+9]=s.y,b[z+J+10]=s.z,b[z+J+11]=O.itemSize===4?s.w:1)}}f={count:h,texture:A,size:new Mt(w,T)},n.set(a,f),a.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function f1(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class id extends nn{constructor(t,e,n,s,o,r,a,l,c,u=Ds){if(u!==Ds&&u!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ds&&(n=ts),n===void 0&&u===Hs&&(n=ks),super(null,s,o,r,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Pn,this.minFilter=l!==void 0?l:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const sd=new nn,Xu=new id(1,1),od=new Zf,rd=new Qp,ad=new ed,Yu=[],qu=[],Zu=new Float32Array(16),ju=new Float32Array(9),Ku=new Float32Array(4);function js(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Yu[s];if(o===void 0&&(o=new Float32Array(s),Yu[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function We(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ra(i,t){let e=qu[t];e===void 0&&(e=new Int32Array(t),qu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function d1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function p1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),We(e,t)}}function m1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),We(e,t)}}function g1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),We(e,t)}}function _1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;Ku.set(n),i.uniformMatrix2fv(this.addr,!1,Ku),We(e,n)}}function x1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;ju.set(n),i.uniformMatrix3fv(this.addr,!1,ju),We(e,n)}}function v1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;Zu.set(n),i.uniformMatrix4fv(this.addr,!1,Zu),We(e,n)}}function M1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function y1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),We(e,t)}}function S1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),We(e,t)}}function w1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),We(e,t)}}function b1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function E1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),We(e,t)}}function T1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),We(e,t)}}function A1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),We(e,t)}}function R1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Xu.compareFunction=Xf,o=Xu):o=sd,e.setTexture2D(t||o,s)}function C1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||rd,s)}function P1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ad,s)}function L1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||od,s)}function D1(i){switch(i){case 5126:return d1;case 35664:return p1;case 35665:return m1;case 35666:return g1;case 35674:return _1;case 35675:return x1;case 35676:return v1;case 5124:case 35670:return M1;case 35667:case 35671:return y1;case 35668:case 35672:return S1;case 35669:case 35673:return w1;case 5125:return b1;case 36294:return E1;case 36295:return T1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return C1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return L1}}function I1(i,t){i.uniform1fv(this.addr,t)}function U1(i,t){const e=js(t,this.size,2);i.uniform2fv(this.addr,e)}function N1(i,t){const e=js(t,this.size,3);i.uniform3fv(this.addr,e)}function F1(i,t){const e=js(t,this.size,4);i.uniform4fv(this.addr,e)}function O1(i,t){const e=js(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function z1(i,t){const e=js(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function B1(i,t){const e=js(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function k1(i,t){i.uniform1iv(this.addr,t)}function H1(i,t){i.uniform2iv(this.addr,t)}function G1(i,t){i.uniform3iv(this.addr,t)}function V1(i,t){i.uniform4iv(this.addr,t)}function W1(i,t){i.uniform1uiv(this.addr,t)}function X1(i,t){i.uniform2uiv(this.addr,t)}function Y1(i,t){i.uniform3uiv(this.addr,t)}function q1(i,t){i.uniform4uiv(this.addr,t)}function Z1(i,t,e){const n=this.cache,s=t.length,o=ra(e,s);Ve(n,o)||(i.uniform1iv(this.addr,o),We(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||sd,o[r])}function j1(i,t,e){const n=this.cache,s=t.length,o=ra(e,s);Ve(n,o)||(i.uniform1iv(this.addr,o),We(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||rd,o[r])}function K1(i,t,e){const n=this.cache,s=t.length,o=ra(e,s);Ve(n,o)||(i.uniform1iv(this.addr,o),We(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||ad,o[r])}function $1(i,t,e){const n=this.cache,s=t.length,o=ra(e,s);Ve(n,o)||(i.uniform1iv(this.addr,o),We(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||od,o[r])}function J1(i){switch(i){case 5126:return I1;case 35664:return U1;case 35665:return N1;case 35666:return F1;case 35674:return O1;case 35675:return z1;case 35676:return B1;case 5124:case 35670:return k1;case 35667:case 35671:return H1;case 35668:case 35672:return G1;case 35669:case 35673:return V1;case 5125:return W1;case 36294:return X1;case 36295:return Y1;case 36296:return q1;case 35678:case 36198:case 36298:case 36306:case 35682:return Z1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return $1}}class Q1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=D1(e.type)}}class t_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=J1(e.type)}}class e_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Ya=/(\w+)(\])?(\[|\.)?/g;function $u(i,t){i.seq.push(t),i.map[t.id]=t}function n_(i,t,e){const n=i.name,s=n.length;for(Ya.lastIndex=0;;){const o=Ya.exec(n),r=Ya.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){$u(e,c===void 0?new Q1(a,i,t):new t_(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new e_(a),$u(e,h)),e=h}}}class Or{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);n_(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Ju(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const i_=37297;let s_=0;function o_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Qu=new Jt;function r_(i){ie._getMatrix(Qu,ie.workingColorSpace,i);const t=`mat3( ${Qu.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case sa:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function th(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+o_(i.getShaderSource(t),r)}else return s}function a_(i,t){const e=r_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function l_(i,t){let e;switch(t){case Cf:e="Linear";break;case Pf:e="Reinhard";break;case Lf:e="Cineon";break;case Mc:e="ACESFilmic";break;case Df:e="AgX";break;case If:e="Neutral";break;case Lp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ar=new U;function c_(){ie.getLuminanceCoefficients(ar);const i=ar.x.toFixed(4),t=ar.y.toFixed(4),e=ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function h_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function f_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function ho(i){return i!==""}function eh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const d_=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(i){return i.replace(d_,m_)}const p_=new Map;function m_(i,t){let e=Qt[t];if(e===void 0){const n=p_.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return $l(e)}const g_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ih(i){return i.replace(g_,__)}function __(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function sh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function x_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===na?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===vc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===li&&(t="SHADOWMAP_TYPE_VSM"),t}function v_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zs:case Bs:t="ENVMAP_TYPE_CUBE";break;case ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function M_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bs:t="ENVMAP_MODE_REFRACTION";break}return t}function y_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rf:t="ENVMAP_BLENDING_MULTIPLY";break;case Cp:t="ENVMAP_BLENDING_MIX";break;case Pp:t="ENVMAP_BLENDING_ADD";break}return t}function S_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function w_(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=x_(e),c=v_(e),u=M_(e),h=y_(e),f=S_(e),d=u_(e),p=h_(o),_=s.createProgram();let g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ho).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ho).join(`
`),m.length>0&&(m+=`
`)):(g=[sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),m=[sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Di?"#define TONE_MAPPING":"",e.toneMapping!==Di?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Di?l_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,a_("linearToOutputTexel",e.outputColorSpace),c_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ho).join(`
`)),r=$l(r),r=eh(r,e),r=nh(r,e),a=$l(a),a=eh(a,e),a=nh(a,e),r=ih(r),a=ih(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===_u?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=M+g+r,x=M+m+a,w=Ju(s,s.VERTEX_SHADER,v),T=Ju(s,s.FRAGMENT_SHADER,x);s.attachShader(_,w),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(R){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(w).trim(),O=s.getShaderInfoLog(T).trim();let z=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,T);else{const J=th(s,w,"vertex"),G=th(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+J+`
`+G)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(F===""||O==="")&&(H=!1);H&&(R.diagnostics={runnable:z,programLog:D,vertexShader:{log:F,prefix:g},fragmentShader:{log:O,prefix:m}})}s.deleteShader(w),s.deleteShader(T),A=new Or(s,_),y=f_(s,_)}let A;this.getUniforms=function(){return A===void 0&&b(this),A};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,i_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=s_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}let b_=0;class E_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new T_(t),e.set(t,n)),n}}class T_{constructor(t){this.id=b_++,this.code=t,this.usedTimes=0}}function A_(i,t,e,n,s,o,r){const a=new jf,l=new E_,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,S,R,D,F){const O=D.fog,z=F.geometry,H=y.isMeshStandardMaterial?D.environment:null,J=(y.isMeshStandardMaterial?e:t).get(y.envMap||H),G=J&&J.mapping===ia?J.image.height:null,et=p[y.type];y.precision!==null&&(d=s.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const Y=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Q=Y!==void 0?Y.length:0;let V=0;z.morphAttributes.position!==void 0&&(V=1),z.morphAttributes.normal!==void 0&&(V=2),z.morphAttributes.color!==void 0&&(V=3);let ot,X,L,I;if(et){const pe=Zn[et];ot=pe.vertexShader,X=pe.fragmentShader}else ot=y.vertexShader,X=y.fragmentShader,l.update(y),L=l.getVertexShaderID(y),I=l.getFragmentShaderID(y);const k=i.getRenderTarget(),$=i.state.buffers.depth.getReversed(),at=F.isInstancedMesh===!0,ct=F.isBatchedMesh===!0,ht=!!y.map,gt=!!y.matcap,Et=!!J,N=!!y.aoMap,Ht=!!y.lightMap,At=!!y.bumpMap,it=!!y.normalMap,Z=!!y.displacementMap,pt=!!y.emissiveMap,dt=!!y.metalnessMap,P=!!y.roughnessMap,E=y.anisotropy>0,W=y.clearcoat>0,lt=y.dispersion>0,ft=y.iridescence>0,ut=y.sheen>0,Dt=y.transmission>0,wt=E&&!!y.anisotropyMap,Pt=W&&!!y.clearcoatMap,jt=W&&!!y.clearcoatNormalMap,vt=W&&!!y.clearcoatRoughnessMap,Rt=ft&&!!y.iridescenceMap,kt=ft&&!!y.iridescenceThicknessMap,Gt=ut&&!!y.sheenColorMap,Lt=ut&&!!y.sheenRoughnessMap,ee=!!y.specularMap,qt=!!y.specularColorMap,xe=!!y.specularIntensityMap,q=Dt&&!!y.transmissionMap,nt=Dt&&!!y.thicknessMap,B=!!y.gradientMap,tt=!!y.alphaMap,mt=y.alphaTest>0,xt=!!y.alphaHash,It=!!y.extensions;let ne=Di;y.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ne=i.toneMapping);const ze={shaderID:et,shaderType:y.type,shaderName:y.name,vertexShader:ot,fragmentShader:X,defines:y.defines,customVertexShaderID:L,customFragmentShaderID:I,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:ct,batchingColor:ct&&F._colorsTexture!==null,instancing:at,instancingColor:at&&F.instanceColor!==null,instancingMorph:at&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:k===null?i.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:qs,alphaToCoverage:!!y.alphaToCoverage,map:ht,matcap:gt,envMap:Et,envMapMode:Et&&J.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:Ht,bumpMap:At,normalMap:it,displacementMap:f&&Z,emissiveMap:pt,normalMapObjectSpace:it&&y.normalMapType===Np,normalMapTangentSpace:it&&y.normalMapType===Wf,metalnessMap:dt,roughnessMap:P,anisotropy:E,anisotropyMap:wt,clearcoat:W,clearcoatMap:Pt,clearcoatNormalMap:jt,clearcoatRoughnessMap:vt,dispersion:lt,iridescence:ft,iridescenceMap:Rt,iridescenceThicknessMap:kt,sheen:ut,sheenColorMap:Gt,sheenRoughnessMap:Lt,specularMap:ee,specularColorMap:qt,specularIntensityMap:xe,transmission:Dt,transmissionMap:q,thicknessMap:nt,gradientMap:B,opaque:y.transparent===!1&&y.blending===Ki&&y.alphaToCoverage===!1,alphaMap:tt,alphaTest:mt,alphaHash:xt,combine:y.combine,mapUv:ht&&_(y.map.channel),aoMapUv:N&&_(y.aoMap.channel),lightMapUv:Ht&&_(y.lightMap.channel),bumpMapUv:At&&_(y.bumpMap.channel),normalMapUv:it&&_(y.normalMap.channel),displacementMapUv:Z&&_(y.displacementMap.channel),emissiveMapUv:pt&&_(y.emissiveMap.channel),metalnessMapUv:dt&&_(y.metalnessMap.channel),roughnessMapUv:P&&_(y.roughnessMap.channel),anisotropyMapUv:wt&&_(y.anisotropyMap.channel),clearcoatMapUv:Pt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&_(y.sheenRoughnessMap.channel),specularMapUv:ee&&_(y.specularMap.channel),specularColorMapUv:qt&&_(y.specularColorMap.channel),specularIntensityMapUv:xe&&_(y.specularIntensityMap.channel),transmissionMapUv:q&&_(y.transmissionMap.channel),thicknessMapUv:nt&&_(y.thicknessMap.channel),alphaMapUv:tt&&_(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(it||E),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(ht||tt),fog:!!O,useFog:y.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:$,skinning:F.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:V,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:ht&&y.map.isVideoTexture===!0&&ie.getTransfer(y.map.colorSpace)===me,decodeVideoTextureEmissive:pt&&y.emissiveMap.isVideoTexture===!0&&ie.getTransfer(y.emissiveMap.colorSpace)===me,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Cn,flipSided:y.side===dn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:It&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&y.extensions.multiDraw===!0||ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function m(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)S.push(R),S.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(M(S,y),v(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function M(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function v(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const S=p[y.type];let R;if(S){const D=Zn[S];R=Eo.clone(D.uniforms)}else R=y.uniforms;return R}function w(y,S){let R;for(let D=0,F=u.length;D<F;D++){const O=u[D];if(O.cacheKey===S){R=O,++R.usedTimes;break}}return R===void 0&&(R=new w_(i,S,y,o),u.push(R)),R}function T(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function b(y){l.remove(y)}function A(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:w,releaseProgram:T,releaseShaderCache:b,programs:u,dispose:A}}function R_(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function C_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function oh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rh(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(h,f,d,p,_,g){let m=i[t];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:p,renderOrder:h.renderOrder,z:_,group:g},i[t]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=_,m.group=g),t++,m}function a(h,f,d,p,_,g){const m=r(h,f,d,p,_,g);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(h,f,d,p,_,g){const m=r(h,f,d,p,_,g);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(h,f){e.length>1&&e.sort(h||C_),n.length>1&&n.sort(f||oh),s.length>1&&s.sort(f||oh)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:u,sort:c}}function P_(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new rh,i.set(n,[r])):s>=o.length?(r=new rh,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function L_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Bt};break;case"SpotLight":e={position:new U,direction:new U,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function D_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let I_=0;function U_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function N_(i){const t=new L_,e=D_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,o=new ce,r=new ce;function a(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,M=0,v=0,x=0,w=0,T=0,b=0;c.sort(U_);for(let y=0,S=c.length;y<S;y++){const R=c[y],D=R.color,F=R.intensity,O=R.distance,z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=D.r*F,h+=D.g*F,f+=D.b*F;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],F);b++}else if(R.isDirectionalLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const J=R.shadow,G=e.get(R);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=R.shadow.matrix,M++}n.directional[d]=H,d++}else if(R.isSpotLight){const H=t.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(D).multiplyScalar(F),H.distance=O,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[_]=H;const J=R.shadow;if(R.map&&(n.spotLightMap[w]=R.map,w++,J.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[_]=J.matrix,R.castShadow){const G=e.get(R);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=z,x++}_++}else if(R.isRectAreaLight){const H=t.get(R);H.color.copy(D).multiplyScalar(F),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=H,g++}else if(R.isPointLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const J=R.shadow,G=e.get(R);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,n.pointShadow[p]=G,n.pointShadowMap[p]=z,n.pointShadowMatrix[p]=R.shadow.matrix,v++}n.point[p]=H,p++}else if(R.isHemisphereLight){const H=t.get(R);H.skyColor.copy(R.color).multiplyScalar(F),H.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[m]=H,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const A=n.hash;(A.directionalLength!==d||A.pointLength!==p||A.spotLength!==_||A.rectAreaLength!==g||A.hemiLength!==m||A.numDirectionalShadows!==M||A.numPointShadows!==v||A.numSpotShadows!==x||A.numSpotMaps!==w||A.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=b,A.directionalLength=d,A.pointLength=p,A.spotLength=_,A.rectAreaLength=g,A.hemiLength=m,A.numDirectionalShadows=M,A.numPointShadows=v,A.numSpotShadows=x,A.numSpotMaps=w,A.numLightProbes=b,n.version=I_++)}function l(c,u){let h=0,f=0,d=0,p=0,_=0;const g=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const v=c[m];if(v.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),h++}else if(v.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(v.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),r.identity(),o.copy(v.matrixWorld),o.premultiply(g),r.extractRotation(o),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),p++}else if(v.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function ah(i){const t=new N_(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function o(u){e.push(u)}function r(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function F_(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new ah(i),t.set(s,[a])):o>=r.length?(a=new ah(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class O_ extends os{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ip,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class z_ extends os{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const B_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k_=`uniform sampler2D shadow_pass;
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
}`;function H_(i,t,e){let n=new Rc;const s=new Mt,o=new Mt,r=new Oe,a=new O_({depthPacking:Up}),l=new z_,c={},u=e.maxTextureSize,h={[Xn]:dn,[dn]:Xn,[Cn]:Cn},f=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:B_,fragmentShader:k_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new re;p.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new te(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=na;let m=this.type;this.render=function(T,b,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const y=i.getRenderTarget(),S=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),D=i.state;D.setBlending(di),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const F=m!==li&&this.type===li,O=m===li&&this.type!==li;for(let z=0,H=T.length;z<H;z++){const J=T[z],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const et=G.getFrameExtents();if(s.multiply(et),o.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/et.x),s.x=o.x*et.x,G.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/et.y),s.y=o.y*et.y,G.mapSize.y=o.y)),G.map===null||F===!0||O===!0){const Q=this.type!==li?{minFilter:Pn,magFilter:Pn}:{};G.map!==null&&G.map.dispose(),G.map=new Wn(s.x,s.y,Q),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const Y=G.getViewportCount();for(let Q=0;Q<Y;Q++){const V=G.getViewport(Q);r.set(o.x*V.x,o.y*V.y,o.x*V.z,o.y*V.w),D.viewport(r),G.updateMatrices(J,Q),n=G.getFrustum(),x(b,A,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===li&&M(G,A),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(y,S,R)};function M(T,b){const A=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Wn(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(b,null,A,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(b,null,A,d,_,null)}function v(T,b,A,y){let S=null;const R=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)S=R;else if(S=A.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const D=S.uuid,F=b.uuid;let O=c[D];O===void 0&&(O={},c[D]=O);let z=O[F];z===void 0&&(z=S.clone(),O[F]=z,b.addEventListener("dispose",w)),S=z}if(S.visible=b.visible,S.wireframe=b.wireframe,y===li?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:h[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const D=i.properties.get(S);D.light=A}return S}function x(T,b,A,y,S){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===li)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const F=t.update(T),O=T.material;if(Array.isArray(O)){const z=F.groups;for(let H=0,J=z.length;H<J;H++){const G=z[H],et=O[G.materialIndex];if(et&&et.visible){const Y=v(T,et,y,S);T.onBeforeShadow(i,T,b,A,F,Y,G),i.renderBufferDirect(A,null,F,Y,T,G),T.onAfterShadow(i,T,b,A,F,Y,G)}}}else if(O.visible){const z=v(T,O,y,S);T.onBeforeShadow(i,T,b,A,F,z,null),i.renderBufferDirect(A,null,F,z,T,null),T.onAfterShadow(i,T,b,A,F,z,null)}}const D=T.children;for(let F=0,O=D.length;F<O;F++)x(D[F],b,A,y,S)}function w(T){T.target.removeEventListener("dispose",w);for(const A in c){const y=c[A],S=T.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const G_={[ml]:gl,[_l]:Ml,[xl]:yl,[Os]:vl,[gl]:ml,[Ml]:_l,[yl]:xl,[vl]:Os};function V_(i,t){function e(){let q=!1;const nt=new Oe;let B=null;const tt=new Oe(0,0,0,0);return{setMask:function(mt){B!==mt&&!q&&(i.colorMask(mt,mt,mt,mt),B=mt)},setLocked:function(mt){q=mt},setClear:function(mt,xt,It,ne,ze){ze===!0&&(mt*=ne,xt*=ne,It*=ne),nt.set(mt,xt,It,ne),tt.equals(nt)===!1&&(i.clearColor(mt,xt,It,ne),tt.copy(nt))},reset:function(){q=!1,B=null,tt.set(-1,0,0,0)}}}function n(){let q=!1,nt=!1,B=null,tt=null,mt=null;return{setReversed:function(xt){if(nt!==xt){const It=t.get("EXT_clip_control");nt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const ne=mt;mt=null,this.setClear(ne)}nt=xt},getReversed:function(){return nt},setTest:function(xt){xt?k(i.DEPTH_TEST):$(i.DEPTH_TEST)},setMask:function(xt){B!==xt&&!q&&(i.depthMask(xt),B=xt)},setFunc:function(xt){if(nt&&(xt=G_[xt]),tt!==xt){switch(xt){case ml:i.depthFunc(i.NEVER);break;case gl:i.depthFunc(i.ALWAYS);break;case _l:i.depthFunc(i.LESS);break;case Os:i.depthFunc(i.LEQUAL);break;case xl:i.depthFunc(i.EQUAL);break;case vl:i.depthFunc(i.GEQUAL);break;case Ml:i.depthFunc(i.GREATER);break;case yl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=xt}},setLocked:function(xt){q=xt},setClear:function(xt){mt!==xt&&(nt&&(xt=1-xt),i.clearDepth(xt),mt=xt)},reset:function(){q=!1,B=null,tt=null,mt=null,nt=!1}}}function s(){let q=!1,nt=null,B=null,tt=null,mt=null,xt=null,It=null,ne=null,ze=null;return{setTest:function(pe){q||(pe?k(i.STENCIL_TEST):$(i.STENCIL_TEST))},setMask:function(pe){nt!==pe&&!q&&(i.stencilMask(pe),nt=pe)},setFunc:function(pe,Nn,ti){(B!==pe||tt!==Nn||mt!==ti)&&(i.stencilFunc(pe,Nn,ti),B=pe,tt=Nn,mt=ti)},setOp:function(pe,Nn,ti){(xt!==pe||It!==Nn||ne!==ti)&&(i.stencilOp(pe,Nn,ti),xt=pe,It=Nn,ne=ti)},setLocked:function(pe){q=pe},setClear:function(pe){ze!==pe&&(i.clearStencil(pe),ze=pe)},reset:function(){q=!1,nt=null,B=null,tt=null,mt=null,xt=null,It=null,ne=null,ze=null}}}const o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],p=null,_=!1,g=null,m=null,M=null,v=null,x=null,w=null,T=null,b=new Bt(0,0,0),A=0,y=!1,S=null,R=null,D=null,F=null,O=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=J>=2);let et=null,Y={};const Q=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),ot=new Oe().fromArray(Q),X=new Oe().fromArray(V);function L(q,nt,B,tt){const mt=new Uint8Array(4),xt=i.createTexture();i.bindTexture(q,xt),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<B;It++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(nt+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return xt}const I={};I[i.TEXTURE_2D]=L(i.TEXTURE_2D,i.TEXTURE_2D,1),I[i.TEXTURE_CUBE_MAP]=L(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[i.TEXTURE_2D_ARRAY]=L(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),I[i.TEXTURE_3D]=L(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),k(i.DEPTH_TEST),r.setFunc(Os),At(!1),it(fu),k(i.CULL_FACE),N(di);function k(q){u[q]!==!0&&(i.enable(q),u[q]=!0)}function $(q){u[q]!==!1&&(i.disable(q),u[q]=!1)}function at(q,nt){return h[q]!==nt?(i.bindFramebuffer(q,nt),h[q]=nt,q===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=nt),q===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function ct(q,nt){let B=d,tt=!1;if(q){B=f.get(nt),B===void 0&&(B=[],f.set(nt,B));const mt=q.textures;if(B.length!==mt.length||B[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,It=mt.length;xt<It;xt++)B[xt]=i.COLOR_ATTACHMENT0+xt;B.length=mt.length,tt=!0}}else B[0]!==i.BACK&&(B[0]=i.BACK,tt=!0);tt&&i.drawBuffers(B)}function ht(q){return p!==q?(i.useProgram(q),p=q,!0):!1}const gt={[Yi]:i.FUNC_ADD,[fp]:i.FUNC_SUBTRACT,[dp]:i.FUNC_REVERSE_SUBTRACT};gt[pp]=i.MIN,gt[mp]=i.MAX;const Et={[gp]:i.ZERO,[_p]:i.ONE,[xp]:i.SRC_COLOR,[dl]:i.SRC_ALPHA,[bp]:i.SRC_ALPHA_SATURATE,[Sp]:i.DST_COLOR,[Mp]:i.DST_ALPHA,[vp]:i.ONE_MINUS_SRC_COLOR,[pl]:i.ONE_MINUS_SRC_ALPHA,[wp]:i.ONE_MINUS_DST_COLOR,[yp]:i.ONE_MINUS_DST_ALPHA,[Ep]:i.CONSTANT_COLOR,[Tp]:i.ONE_MINUS_CONSTANT_COLOR,[Ap]:i.CONSTANT_ALPHA,[Rp]:i.ONE_MINUS_CONSTANT_ALPHA};function N(q,nt,B,tt,mt,xt,It,ne,ze,pe){if(q===di){_===!0&&($(i.BLEND),_=!1);return}if(_===!1&&(k(i.BLEND),_=!0),q!==hp){if(q!==g||pe!==y){if((m!==Yi||x!==Yi)&&(i.blendEquation(i.FUNC_ADD),m=Yi,x=Yi),pe)switch(q){case Ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case So:i.blendFunc(i.ONE,i.ONE);break;case du:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case So:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case du:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}M=null,v=null,w=null,T=null,b.set(0,0,0),A=0,g=q,y=pe}return}mt=mt||nt,xt=xt||B,It=It||tt,(nt!==m||mt!==x)&&(i.blendEquationSeparate(gt[nt],gt[mt]),m=nt,x=mt),(B!==M||tt!==v||xt!==w||It!==T)&&(i.blendFuncSeparate(Et[B],Et[tt],Et[xt],Et[It]),M=B,v=tt,w=xt,T=It),(ne.equals(b)===!1||ze!==A)&&(i.blendColor(ne.r,ne.g,ne.b,ze),b.copy(ne),A=ze),g=q,y=!1}function Ht(q,nt){q.side===Cn?$(i.CULL_FACE):k(i.CULL_FACE);let B=q.side===dn;nt&&(B=!B),At(B),q.blending===Ki&&q.transparent===!1?N(di):N(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),r.setFunc(q.depthFunc),r.setTest(q.depthTest),r.setMask(q.depthWrite),o.setMask(q.colorWrite);const tt=q.stencilWrite;a.setTest(tt),tt&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),pt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):$(i.SAMPLE_ALPHA_TO_COVERAGE)}function At(q){S!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),S=q)}function it(q){q!==cp?(k(i.CULL_FACE),q!==R&&(q===fu?i.cullFace(i.BACK):q===up?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$(i.CULL_FACE),R=q}function Z(q){q!==D&&(H&&i.lineWidth(q),D=q)}function pt(q,nt,B){q?(k(i.POLYGON_OFFSET_FILL),(F!==nt||O!==B)&&(i.polygonOffset(nt,B),F=nt,O=B)):$(i.POLYGON_OFFSET_FILL)}function dt(q){q?k(i.SCISSOR_TEST):$(i.SCISSOR_TEST)}function P(q){q===void 0&&(q=i.TEXTURE0+z-1),et!==q&&(i.activeTexture(q),et=q)}function E(q,nt,B){B===void 0&&(et===null?B=i.TEXTURE0+z-1:B=et);let tt=Y[B];tt===void 0&&(tt={type:void 0,texture:void 0},Y[B]=tt),(tt.type!==q||tt.texture!==nt)&&(et!==B&&(i.activeTexture(B),et=B),i.bindTexture(q,nt||I[q]),tt.type=q,tt.texture=nt)}function W(){const q=Y[et];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function lt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ft(){try{i.compressedTexImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ut(){try{i.texSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Dt(){try{i.texSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function wt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function vt(){try{i.texStorage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Gt(q){ot.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),ot.copy(q))}function Lt(q){X.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),X.copy(q))}function ee(q,nt){let B=c.get(nt);B===void 0&&(B=new WeakMap,c.set(nt,B));let tt=B.get(q);tt===void 0&&(tt=i.getUniformBlockIndex(nt,q.name),B.set(q,tt))}function qt(q,nt){const tt=c.get(nt).get(q);l.get(nt)!==tt&&(i.uniformBlockBinding(nt,tt,q.__bindingPointIndex),l.set(nt,tt))}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},et=null,Y={},h={},f=new WeakMap,d=[],p=null,_=!1,g=null,m=null,M=null,v=null,x=null,w=null,T=null,b=new Bt(0,0,0),A=0,y=!1,S=null,R=null,D=null,F=null,O=null,ot.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:k,disable:$,bindFramebuffer:at,drawBuffers:ct,useProgram:ht,setBlending:N,setMaterial:Ht,setFlipSided:At,setCullFace:it,setLineWidth:Z,setPolygonOffset:pt,setScissorTest:dt,activeTexture:P,bindTexture:E,unbindTexture:W,compressedTexImage2D:lt,compressedTexImage3D:ft,texImage2D:Rt,texImage3D:kt,updateUBOMapping:ee,uniformBlockBinding:qt,texStorage2D:jt,texStorage3D:vt,texSubImage2D:ut,texSubImage3D:Dt,compressedTexSubImage2D:wt,compressedTexSubImage3D:Pt,scissor:Gt,viewport:Lt,reset:xe}}function lh(i,t,e,n){const s=W_(n);switch(e){case zf:return i*t;case kf:return i*t;case Hf:return i*t*2;case bc:return i*t/s.components*s.byteLength;case Ec:return i*t/s.components*s.byteLength;case Gf:return i*t*2/s.components*s.byteLength;case Tc:return i*t*2/s.components*s.byteLength;case Bf:return i*t*3/s.components*s.byteLength;case Vn:return i*t*4/s.components*s.byteLength;case Ac:return i*t*4/s.components*s.byteLength;case Lr:case Dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ir:case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case El:case Al:return Math.max(i,16)*Math.max(t,8)/4;case bl:case Tl:return Math.max(i,8)*Math.max(t,8)/2;case Rl:case Cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Il:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Nr:case Xl:case Yl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vf:case ql:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Zl:case jl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function W_(i){switch(i){case _i:case Nf:return{byteLength:1,components:1};case bo:case Ff:case pi:return{byteLength:2,components:1};case Sc:case wc:return{byteLength:2,components:4};case ts:case yc:case jn:return{byteLength:4,components:1};case Of:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function X_(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,E){return d?new OffscreenCanvas(P,E):Zr("canvas")}function _(P,E,W){let lt=1;const ft=dt(P);if((ft.width>W||ft.height>W)&&(lt=W/Math.max(ft.width,ft.height)),lt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ut=Math.floor(lt*ft.width),Dt=Math.floor(lt*ft.height);h===void 0&&(h=p(ut,Dt));const wt=E?p(ut,Dt):h;return wt.width=ut,wt.height=Dt,wt.getContext("2d").drawImage(P,0,0,ut,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+ut+"x"+Dt+")."),wt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),P;return P}function g(P){return P.generateMipmaps}function m(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(P,E,W,lt,ft=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ut=E;if(E===i.RED&&(W===i.FLOAT&&(ut=i.R32F),W===i.HALF_FLOAT&&(ut=i.R16F),W===i.UNSIGNED_BYTE&&(ut=i.R8)),E===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ut=i.R8UI),W===i.UNSIGNED_SHORT&&(ut=i.R16UI),W===i.UNSIGNED_INT&&(ut=i.R32UI),W===i.BYTE&&(ut=i.R8I),W===i.SHORT&&(ut=i.R16I),W===i.INT&&(ut=i.R32I)),E===i.RG&&(W===i.FLOAT&&(ut=i.RG32F),W===i.HALF_FLOAT&&(ut=i.RG16F),W===i.UNSIGNED_BYTE&&(ut=i.RG8)),E===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ut=i.RG8UI),W===i.UNSIGNED_SHORT&&(ut=i.RG16UI),W===i.UNSIGNED_INT&&(ut=i.RG32UI),W===i.BYTE&&(ut=i.RG8I),W===i.SHORT&&(ut=i.RG16I),W===i.INT&&(ut=i.RG32I)),E===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ut=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ut=i.RGB16UI),W===i.UNSIGNED_INT&&(ut=i.RGB32UI),W===i.BYTE&&(ut=i.RGB8I),W===i.SHORT&&(ut=i.RGB16I),W===i.INT&&(ut=i.RGB32I)),E===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ut=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ut=i.RGBA16UI),W===i.UNSIGNED_INT&&(ut=i.RGBA32UI),W===i.BYTE&&(ut=i.RGBA8I),W===i.SHORT&&(ut=i.RGBA16I),W===i.INT&&(ut=i.RGBA32I)),E===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(ut=i.RGB9_E5),E===i.RGBA){const Dt=ft?sa:ie.getTransfer(lt);W===i.FLOAT&&(ut=i.RGBA32F),W===i.HALF_FLOAT&&(ut=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ut=Dt===me?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)}return(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function x(P,E){let W;return P?E===null||E===ts||E===ks?W=i.DEPTH24_STENCIL8:E===jn?W=i.DEPTH32F_STENCIL8:E===bo&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ts||E===ks?W=i.DEPTH_COMPONENT24:E===jn?W=i.DEPTH_COMPONENT32F:E===bo&&(W=i.DEPTH_COMPONENT16),W}function w(P,E){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Pn&&P.minFilter!==Gn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function T(P){const E=P.target;E.removeEventListener("dispose",T),A(E),E.isVideoTexture&&u.delete(E)}function b(P){const E=P.target;E.removeEventListener("dispose",b),S(E)}function A(P){const E=n.get(P);if(E.__webglInit===void 0)return;const W=P.source,lt=f.get(W);if(lt){const ft=lt[E.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&y(P),Object.keys(lt).length===0&&f.delete(W)}n.remove(P)}function y(P){const E=n.get(P);i.deleteTexture(E.__webglTexture);const W=P.source,lt=f.get(W);delete lt[E.__cacheKey],r.memory.textures--}function S(P){const E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(E.__webglFramebuffer[lt]))for(let ft=0;ft<E.__webglFramebuffer[lt].length;ft++)i.deleteFramebuffer(E.__webglFramebuffer[lt][ft]);else i.deleteFramebuffer(E.__webglFramebuffer[lt]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[lt])}else{if(Array.isArray(E.__webglFramebuffer))for(let lt=0;lt<E.__webglFramebuffer.length;lt++)i.deleteFramebuffer(E.__webglFramebuffer[lt]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let lt=0;lt<E.__webglColorRenderbuffer.length;lt++)E.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[lt]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=P.textures;for(let lt=0,ft=W.length;lt<ft;lt++){const ut=n.get(W[lt]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),r.memory.textures--),n.remove(W[lt])}n.remove(P)}let R=0;function D(){R=0}function F(){const P=R;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),R+=1,P}function O(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function z(P,E){const W=n.get(P);if(P.isVideoTexture&&Z(P),P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){const lt=P.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(W,P,E);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+E)}function H(P,E){const W=n.get(P);if(P.version>0&&W.__version!==P.version){X(W,P,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+E)}function J(P,E){const W=n.get(P);if(P.version>0&&W.__version!==P.version){X(W,P,E);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+E)}function G(P,E){const W=n.get(P);if(P.version>0&&W.__version!==P.version){L(W,P,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+E)}const et={[Qi]:i.REPEAT,[hi]:i.CLAMP_TO_EDGE,[wl]:i.MIRRORED_REPEAT},Y={[Pn]:i.NEAREST,[Dp]:i.NEAREST_MIPMAP_NEAREST,[Ho]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[va]:i.LINEAR_MIPMAP_NEAREST,[Ci]:i.LINEAR_MIPMAP_LINEAR},Q={[Fp]:i.NEVER,[Gp]:i.ALWAYS,[Op]:i.LESS,[Xf]:i.LEQUAL,[zp]:i.EQUAL,[Hp]:i.GEQUAL,[Bp]:i.GREATER,[kp]:i.NOTEQUAL};function V(P,E){if(E.type===jn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Gn||E.magFilter===va||E.magFilter===Ho||E.magFilter===Ci||E.minFilter===Gn||E.minFilter===va||E.minFilter===Ho||E.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,et[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,et[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,et[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Y[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Y[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Q[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Pn||E.minFilter!==Ho&&E.minFilter!==Ci||E.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ot(P,E){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",T));const lt=E.source;let ft=f.get(lt);ft===void 0&&(ft={},f.set(lt,ft));const ut=O(E);if(ut!==P.__cacheKey){ft[ut]===void 0&&(ft[ut]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,W=!0),ft[ut].usedTimes++;const Dt=ft[P.__cacheKey];Dt!==void 0&&(ft[P.__cacheKey].usedTimes--,Dt.usedTimes===0&&y(E)),P.__cacheKey=ut,P.__webglTexture=ft[ut].texture}return W}function X(P,E,W){let lt=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(lt=i.TEXTURE_3D);const ft=ot(P,E),ut=E.source;e.bindTexture(lt,P.__webglTexture,i.TEXTURE0+W);const Dt=n.get(ut);if(ut.version!==Dt.__version||ft===!0){e.activeTexture(i.TEXTURE0+W);const wt=ie.getPrimaries(ie.workingColorSpace),Pt=E.colorSpace===ui?null:ie.getPrimaries(E.colorSpace),jt=E.colorSpace===ui||wt===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let vt=_(E.image,!1,s.maxTextureSize);vt=pt(E,vt);const Rt=o.convert(E.format,E.colorSpace),kt=o.convert(E.type);let Gt=v(E.internalFormat,Rt,kt,E.colorSpace,E.isVideoTexture);V(lt,E);let Lt;const ee=E.mipmaps,qt=E.isVideoTexture!==!0,xe=Dt.__version===void 0||ft===!0,q=ut.dataReady,nt=w(E,vt);if(E.isDepthTexture)Gt=x(E.format===Hs,E.type),xe&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Gt,vt.width,vt.height):e.texImage2D(i.TEXTURE_2D,0,Gt,vt.width,vt.height,0,Rt,kt,null));else if(E.isDataTexture)if(ee.length>0){qt&&xe&&e.texStorage2D(i.TEXTURE_2D,nt,Gt,ee[0].width,ee[0].height);for(let B=0,tt=ee.length;B<tt;B++)Lt=ee[B],qt?q&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,Lt.width,Lt.height,Rt,kt,Lt.data):e.texImage2D(i.TEXTURE_2D,B,Gt,Lt.width,Lt.height,0,Rt,kt,Lt.data);E.generateMipmaps=!1}else qt?(xe&&e.texStorage2D(i.TEXTURE_2D,nt,Gt,vt.width,vt.height),q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt.width,vt.height,Rt,kt,vt.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,vt.width,vt.height,0,Rt,kt,vt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){qt&&xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Gt,ee[0].width,ee[0].height,vt.depth);for(let B=0,tt=ee.length;B<tt;B++)if(Lt=ee[B],E.format!==Vn)if(Rt!==null)if(qt){if(q)if(E.layerUpdates.size>0){const mt=lh(Lt.width,Lt.height,E.format,E.type);for(const xt of E.layerUpdates){const It=Lt.data.subarray(xt*mt/Lt.data.BYTES_PER_ELEMENT,(xt+1)*mt/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,xt,Lt.width,Lt.height,1,Rt,It)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,Lt.width,Lt.height,vt.depth,Rt,Lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,B,Gt,Lt.width,Lt.height,vt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,Lt.width,Lt.height,vt.depth,Rt,kt,Lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,B,Gt,Lt.width,Lt.height,vt.depth,0,Rt,kt,Lt.data)}else{qt&&xe&&e.texStorage2D(i.TEXTURE_2D,nt,Gt,ee[0].width,ee[0].height);for(let B=0,tt=ee.length;B<tt;B++)Lt=ee[B],E.format!==Vn?Rt!==null?qt?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,B,0,0,Lt.width,Lt.height,Rt,Lt.data):e.compressedTexImage2D(i.TEXTURE_2D,B,Gt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?q&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,Lt.width,Lt.height,Rt,kt,Lt.data):e.texImage2D(i.TEXTURE_2D,B,Gt,Lt.width,Lt.height,0,Rt,kt,Lt.data)}else if(E.isDataArrayTexture)if(qt){if(xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Gt,vt.width,vt.height,vt.depth),q)if(E.layerUpdates.size>0){const B=lh(vt.width,vt.height,E.format,E.type);for(const tt of E.layerUpdates){const mt=vt.data.subarray(tt*B/vt.data.BYTES_PER_ELEMENT,(tt+1)*B/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,vt.width,vt.height,1,Rt,kt,mt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Rt,kt,vt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,vt.width,vt.height,vt.depth,0,Rt,kt,vt.data);else if(E.isData3DTexture)qt?(xe&&e.texStorage3D(i.TEXTURE_3D,nt,Gt,vt.width,vt.height,vt.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Rt,kt,vt.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,vt.width,vt.height,vt.depth,0,Rt,kt,vt.data);else if(E.isFramebufferTexture){if(xe)if(qt)e.texStorage2D(i.TEXTURE_2D,nt,Gt,vt.width,vt.height);else{let B=vt.width,tt=vt.height;for(let mt=0;mt<nt;mt++)e.texImage2D(i.TEXTURE_2D,mt,Gt,B,tt,0,Rt,kt,null),B>>=1,tt>>=1}}else if(ee.length>0){if(qt&&xe){const B=dt(ee[0]);e.texStorage2D(i.TEXTURE_2D,nt,Gt,B.width,B.height)}for(let B=0,tt=ee.length;B<tt;B++)Lt=ee[B],qt?q&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,Rt,kt,Lt):e.texImage2D(i.TEXTURE_2D,B,Gt,Rt,kt,Lt);E.generateMipmaps=!1}else if(qt){if(xe){const B=dt(vt);e.texStorage2D(i.TEXTURE_2D,nt,Gt,B.width,B.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,kt,vt)}else e.texImage2D(i.TEXTURE_2D,0,Gt,Rt,kt,vt);g(E)&&m(lt),Dt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function L(P,E,W){if(E.image.length!==6)return;const lt=ot(P,E),ft=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+W);const ut=n.get(ft);if(ft.version!==ut.__version||lt===!0){e.activeTexture(i.TEXTURE0+W);const Dt=ie.getPrimaries(ie.workingColorSpace),wt=E.colorSpace===ui?null:ie.getPrimaries(E.colorSpace),Pt=E.colorSpace===ui||Dt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const jt=E.isCompressedTexture||E.image[0].isCompressedTexture,vt=E.image[0]&&E.image[0].isDataTexture,Rt=[];for(let tt=0;tt<6;tt++)!jt&&!vt?Rt[tt]=_(E.image[tt],!0,s.maxCubemapSize):Rt[tt]=vt?E.image[tt].image:E.image[tt],Rt[tt]=pt(E,Rt[tt]);const kt=Rt[0],Gt=o.convert(E.format,E.colorSpace),Lt=o.convert(E.type),ee=v(E.internalFormat,Gt,Lt,E.colorSpace),qt=E.isVideoTexture!==!0,xe=ut.__version===void 0||lt===!0,q=ft.dataReady;let nt=w(E,kt);V(i.TEXTURE_CUBE_MAP,E);let B;if(jt){qt&&xe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,ee,kt.width,kt.height);for(let tt=0;tt<6;tt++){B=Rt[tt].mipmaps;for(let mt=0;mt<B.length;mt++){const xt=B[mt];E.format!==Vn?Gt!==null?qt?q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,xt.width,xt.height,Gt,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,ee,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,xt.width,xt.height,Gt,Lt,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,ee,xt.width,xt.height,0,Gt,Lt,xt.data)}}}else{if(B=E.mipmaps,qt&&xe){B.length>0&&nt++;const tt=dt(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,ee,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(vt){qt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Rt[tt].width,Rt[tt].height,Gt,Lt,Rt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ee,Rt[tt].width,Rt[tt].height,0,Gt,Lt,Rt[tt].data);for(let mt=0;mt<B.length;mt++){const It=B[mt].image[tt].image;qt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,It.width,It.height,Gt,Lt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,ee,It.width,It.height,0,Gt,Lt,It.data)}}else{qt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Gt,Lt,Rt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ee,Gt,Lt,Rt[tt]);for(let mt=0;mt<B.length;mt++){const xt=B[mt];qt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,Gt,Lt,xt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,ee,Gt,Lt,xt.image[tt])}}}g(E)&&m(i.TEXTURE_CUBE_MAP),ut.__version=ft.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function I(P,E,W,lt,ft,ut){const Dt=o.convert(W.format,W.colorSpace),wt=o.convert(W.type),Pt=v(W.internalFormat,Dt,wt,W.colorSpace),jt=n.get(E),vt=n.get(W);if(vt.__renderTarget=E,!jt.__hasExternalTextures){const Rt=Math.max(1,E.width>>ut),kt=Math.max(1,E.height>>ut);ft===i.TEXTURE_3D||ft===i.TEXTURE_2D_ARRAY?e.texImage3D(ft,ut,Pt,Rt,kt,E.depth,0,Dt,wt,null):e.texImage2D(ft,ut,Pt,Rt,kt,0,Dt,wt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),it(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,ft,vt.__webglTexture,0,At(E)):(ft===i.TEXTURE_2D||ft>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,ft,vt.__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function k(P,E,W){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){const lt=E.depthTexture,ft=lt&&lt.isDepthTexture?lt.type:null,ut=x(E.stencilBuffer,ft),Dt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=At(E);it(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt,ut,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,ut,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ut,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,P)}else{const lt=E.textures;for(let ft=0;ft<lt.length;ft++){const ut=lt[ft],Dt=o.convert(ut.format,ut.colorSpace),wt=o.convert(ut.type),Pt=v(ut.internalFormat,Dt,wt,ut.colorSpace),jt=At(E);W&&it(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,Pt,E.width,E.height):it(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,Pt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=n.get(E.depthTexture);lt.__renderTarget=E,(!lt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),z(E.depthTexture,0);const ft=lt.__webglTexture,ut=At(E);if(E.depthTexture.format===Ds)it(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ft,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ft,0);else if(E.depthTexture.format===Hs)it(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ft,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ft,0);else throw new Error("Unknown depthTexture format")}function at(P){const E=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const lt=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),lt){const ft=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,lt.removeEventListener("dispose",ft)};lt.addEventListener("dispose",ft),E.__depthDisposeCallback=ft}E.__boundDepthTexture=lt}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");$(E.__webglFramebuffer,P)}else if(W){E.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[lt]),E.__webglDepthbuffer[lt]===void 0)E.__webglDepthbuffer[lt]=i.createRenderbuffer(),k(E.__webglDepthbuffer[lt],P,!1);else{const ft=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,ut)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),k(E.__webglDepthbuffer,P,!1);else{const lt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,ft)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(P,E,W){const lt=n.get(P);E!==void 0&&I(lt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&at(P)}function ht(P){const E=P.texture,W=n.get(P),lt=n.get(E);P.addEventListener("dispose",b);const ft=P.textures,ut=P.isWebGLCubeRenderTarget===!0,Dt=ft.length>1;if(Dt||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=E.version,r.memory.textures++),ut){W.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[wt]=[];for(let Pt=0;Pt<E.mipmaps.length;Pt++)W.__webglFramebuffer[wt][Pt]=i.createFramebuffer()}else W.__webglFramebuffer[wt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let wt=0;wt<E.mipmaps.length;wt++)W.__webglFramebuffer[wt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Dt)for(let wt=0,Pt=ft.length;wt<Pt;wt++){const jt=n.get(ft[wt]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),r.memory.textures++)}if(P.samples>0&&it(P)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let wt=0;wt<ft.length;wt++){const Pt=ft[wt];W.__webglColorRenderbuffer[wt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[wt]);const jt=o.convert(Pt.format,Pt.colorSpace),vt=o.convert(Pt.type),Rt=v(Pt.internalFormat,jt,vt,Pt.colorSpace,P.isXRRenderTarget===!0),kt=At(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,Rt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,W.__webglColorRenderbuffer[wt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),k(W.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),V(i.TEXTURE_CUBE_MAP,E);for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Pt=0;Pt<E.mipmaps.length;Pt++)I(W.__webglFramebuffer[wt][Pt],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Pt);else I(W.__webglFramebuffer[wt],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);g(E)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let wt=0,Pt=ft.length;wt<Pt;wt++){const jt=ft[wt],vt=n.get(jt);e.bindTexture(i.TEXTURE_2D,vt.__webglTexture),V(i.TEXTURE_2D,jt),I(W.__webglFramebuffer,P,jt,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,0),g(jt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let wt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(wt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,lt.__webglTexture),V(wt,E),E.mipmaps&&E.mipmaps.length>0)for(let Pt=0;Pt<E.mipmaps.length;Pt++)I(W.__webglFramebuffer[Pt],P,E,i.COLOR_ATTACHMENT0,wt,Pt);else I(W.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,wt,0);g(E)&&m(wt),e.unbindTexture()}P.depthBuffer&&at(P)}function gt(P){const E=P.textures;for(let W=0,lt=E.length;W<lt;W++){const ft=E[W];if(g(ft)){const ut=M(P),Dt=n.get(ft).__webglTexture;e.bindTexture(ut,Dt),m(ut),e.unbindTexture()}}}const Et=[],N=[];function Ht(P){if(P.samples>0){if(it(P)===!1){const E=P.textures,W=P.width,lt=P.height;let ft=i.COLOR_BUFFER_BIT;const ut=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(P),wt=E.length>1;if(wt)for(let Pt=0;Pt<E.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Pt=0;Pt<E.length;Pt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ft|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ft|=i.STENCIL_BUFFER_BIT)),wt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[Pt]);const jt=n.get(E[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,W,lt,0,0,W,lt,ft,i.NEAREST),l===!0&&(Et.length=0,N.length=0,Et.push(i.COLOR_ATTACHMENT0+Pt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Et.push(ut),N.push(ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),wt)for(let Pt=0;Pt<E.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[Pt]);const jt=n.get(E[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function At(P){return Math.min(s.maxSamples,P.samples)}function it(P){const E=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Z(P){const E=r.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function pt(P,E){const W=P.colorSpace,lt=P.format,ft=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==qs&&W!==ui&&(ie.getTransfer(W)===me?(lt!==Vn||ft!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function dt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=D,this.setTexture2D=z,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=G,this.rebindTextures=ct,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=I,this.useMultisampledRTT=it}function Y_(i,t){function e(n,s=ui){let o;const r=ie.getTransfer(s);if(n===_i)return i.UNSIGNED_BYTE;if(n===Sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Of)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nf)return i.BYTE;if(n===Ff)return i.SHORT;if(n===bo)return i.UNSIGNED_SHORT;if(n===yc)return i.INT;if(n===ts)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===pi)return i.HALF_FLOAT;if(n===zf)return i.ALPHA;if(n===Bf)return i.RGB;if(n===Vn)return i.RGBA;if(n===kf)return i.LUMINANCE;if(n===Hf)return i.LUMINANCE_ALPHA;if(n===Ds)return i.DEPTH_COMPONENT;if(n===Hs)return i.DEPTH_STENCIL;if(n===bc)return i.RED;if(n===Ec)return i.RED_INTEGER;if(n===Gf)return i.RG;if(n===Tc)return i.RG_INTEGER;if(n===Ac)return i.RGBA_INTEGER;if(n===Lr||n===Dr||n===Ir||n===Ur)if(r===me)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Lr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ir)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ur)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Lr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ir)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ur)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bl||n===El||n===Tl||n===Al)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===bl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===El)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Al)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rl||n===Cl||n===Pl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Rl||n===Cl)return r===me?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Pl)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ll||n===Dl||n===Il||n===Ul||n===Nl||n===Fl||n===Ol||n===zl||n===Bl||n===kl||n===Hl||n===Gl||n===Vl||n===Wl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ll)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dl)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Il)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ul)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nl)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fl)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ol)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zl)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bl)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kl)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hl)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gl)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vl)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wl)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nr||n===Xl||n===Yl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Nr)return r===me?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vf||n===ql||n===Zl||n===jl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Nr)return o.COMPRESSED_RED_RGTC1_EXT;if(n===ql)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class q_ extends Rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ie extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z_={type:"move"};class qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Z_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const j_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K_=`
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

}`;class $_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new nn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new tn({vertexShader:j_,fragmentShader:K_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new No(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class J_ extends is{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null;const _=new $_,g=e.getContextAttributes();let m=null,M=null;const v=[],x=[],w=new Mt;let T=null;const b=new Rn;b.viewport=new Oe;const A=new Rn;A.viewport=new Oe;const y=[b,A],S=new q_;let R=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let L=v[X];return L===void 0&&(L=new qa,v[X]=L),L.getTargetRaySpace()},this.getControllerGrip=function(X){let L=v[X];return L===void 0&&(L=new qa,v[X]=L),L.getGripSpace()},this.getHand=function(X){let L=v[X];return L===void 0&&(L=new qa,v[X]=L),L.getHandSpace()};function F(X){const L=x.indexOf(X.inputSource);if(L===-1)return;const I=v[L];I!==void 0&&(I.update(X.inputSource,X.frame,c||r),I.dispatchEvent({type:X.type,data:X.inputSource}))}function O(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",z);for(let X=0;X<v.length;X++){const L=x[X];L!==null&&(x[X]=null,v[X].disconnect(L))}R=null,D=null,_.reset(),t.setRenderTarget(m),d=null,f=null,h=null,s=null,M=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",O),s.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0){const L={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,L),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Wn(d.framebufferWidth,d.framebufferHeight,{format:Vn,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let L=null,I=null,k=null;g.depth&&(k=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,L=g.stencil?Hs:Ds,I=g.stencil?ks:ts);const $={colorFormat:e.RGBA8,depthFormat:k,scaleFactor:o};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer($),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Wn(f.textureWidth,f.textureHeight,{format:Vn,type:_i,depthTexture:new id(f.textureWidth,f.textureHeight,I,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),ot.setContext(s),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(X){for(let L=0;L<X.removed.length;L++){const I=X.removed[L],k=x.indexOf(I);k>=0&&(x[k]=null,v[k].disconnect(I))}for(let L=0;L<X.added.length;L++){const I=X.added[L];let k=x.indexOf(I);if(k===-1){for(let at=0;at<v.length;at++)if(at>=x.length){x.push(I),k=at;break}else if(x[at]===null){x[at]=I,k=at;break}if(k===-1)break}const $=v[k];$&&$.connect(I)}}const H=new U,J=new U;function G(X,L,I){H.setFromMatrixPosition(L.matrixWorld),J.setFromMatrixPosition(I.matrixWorld);const k=H.distanceTo(J),$=L.projectionMatrix.elements,at=I.projectionMatrix.elements,ct=$[14]/($[10]-1),ht=$[14]/($[10]+1),gt=($[9]+1)/$[5],Et=($[9]-1)/$[5],N=($[8]-1)/$[0],Ht=(at[8]+1)/at[0],At=ct*N,it=ct*Ht,Z=k/(-N+Ht),pt=Z*-N;if(L.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(pt),X.translateZ(Z),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),$[10]===-1)X.projectionMatrix.copy(L.projectionMatrix),X.projectionMatrixInverse.copy(L.projectionMatrixInverse);else{const dt=ct+Z,P=ht+Z,E=At-pt,W=it+(k-pt),lt=gt*ht/P*dt,ft=Et*ht/P*dt;X.projectionMatrix.makePerspective(E,W,lt,ft,dt,P),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function et(X,L){L===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(L.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let L=X.near,I=X.far;_.texture!==null&&(_.depthNear>0&&(L=_.depthNear),_.depthFar>0&&(I=_.depthFar)),S.near=A.near=b.near=L,S.far=A.far=b.far=I,(R!==S.near||D!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,D=S.far),b.layers.mask=X.layers.mask|2,A.layers.mask=X.layers.mask|4,S.layers.mask=b.layers.mask|A.layers.mask;const k=X.parent,$=S.cameras;et(S,k);for(let at=0;at<$.length;at++)et($[at],k);$.length===2?G(S,b,A):S.projectionMatrix.copy(b.projectionMatrix),Y(X,S,k)};function Y(X,L,I){I===null?X.matrix.copy(L.matrixWorld):(X.matrix.copy(I.matrixWorld),X.matrix.invert(),X.matrix.multiply(L.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(L.projectionMatrix),X.projectionMatrixInverse.copy(L.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=qr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Q=null;function V(X,L){if(u=L.getViewerPose(c||r),p=L,u!==null){const I=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let k=!1;I.length!==S.cameras.length&&(S.cameras.length=0,k=!0);for(let at=0;at<I.length;at++){const ct=I[at];let ht=null;if(d!==null)ht=d.getViewport(ct);else{const Et=h.getViewSubImage(f,ct);ht=Et.viewport,at===0&&(t.setRenderTargetTextures(M,Et.colorTexture,f.ignoreDepthValues?void 0:Et.depthStencilTexture),t.setRenderTarget(M))}let gt=y[at];gt===void 0&&(gt=new Rn,gt.layers.enable(at),gt.viewport=new Oe,y[at]=gt),gt.matrix.fromArray(ct.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(ct.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(ht.x,ht.y,ht.width,ht.height),at===0&&(S.matrix.copy(gt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),k===!0&&S.cameras.push(gt)}const $=s.enabledFeatures;if($&&$.includes("depth-sensing")){const at=h.getDepthInformation(I[0]);at&&at.isValid&&at.texture&&_.init(t,at,s.renderState)}}for(let I=0;I<v.length;I++){const k=x[I],$=v[I];k!==null&&$!==void 0&&$.update(k,L,c||r)}Q&&Q(X,L),L.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:L}),p=null}const ot=new nd;ot.setAnimationLoop(V),this.setAnimationLoop=function(X){Q=X},this.dispose=function(){}}}const Gi=new $n,Q_=new ce;function tx(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Qf(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,v,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(g,m):m.isMeshToonMaterial?(o(g,m),h(g,m)):m.isMeshPhongMaterial?(o(g,m),u(g,m)):m.isMeshStandardMaterial?(o(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,x)):m.isMeshMatcapMaterial?(o(g,m),p(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),_(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,M,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===dn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===dn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const M=t.get(m),v=M.envMap,x=M.envMapRotation;v&&(g.envMap.value=v,Gi.copy(x),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),g.envMapRotation.value.setFromMatrix4(Q_.makeRotationFromEuler(Gi)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=v*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ex(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const x=v.program;n.uniformBlockBinding(M,x)}function c(M,v){let x=s[M.id];x===void 0&&(p(M),x=u(M),s[M.id]=x,M.addEventListener("dispose",g));const w=v.program;n.updateUBOMapping(M,w);const T=t.render.frame;o[M.id]!==T&&(f(M),o[M.id]=T)}function u(M){const v=h();M.__bindingPointIndex=v;const x=i.createBuffer(),w=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,w,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function h(){for(let M=0;M<a;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=s[M.id],x=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,b=x.length;T<b;T++){const A=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,S=A.length;y<S;y++){const R=A[y];if(d(R,T,y,w)===!0){const D=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let O=0;for(let z=0;z<F.length;z++){const H=F[z],J=_(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,D+O,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,O),O+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,v,x,w){const T=M.value,b=v+"_"+x;if(w[b]===void 0)return typeof T=="number"||typeof T=="boolean"?w[b]=T:w[b]=T.clone(),!0;{const A=w[b];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return w[b]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function p(M){const v=M.uniforms;let x=0;const w=16;for(let b=0,A=v.length;b<A;b++){const y=Array.isArray(v[b])?v[b]:[v[b]];for(let S=0,R=y.length;S<R;S++){const D=y[S],F=Array.isArray(D.value)?D.value:[D.value];for(let O=0,z=F.length;O<z;O++){const H=F[O],J=_(H),G=x%w,et=G%J.boundary,Y=G+et;x+=et,Y!==0&&w-Y<J.storage&&(x+=w-Y),D.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=J.storage}}}const T=x%w;return T>0&&(x+=w-T),M.__size=x,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function g(M){const v=M.target;v.removeEventListener("dispose",g);const x=r.indexOf(v.__bindingPointIndex);r.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete o[v.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);r=[],s={},o={}}return{bind:l,update:c,dispose:m}}class nx{constructor(t={}){const{canvas:e=Xp(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const M=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=Di,this.toneMappingExposure=1;const x=this;let w=!1,T=0,b=0,A=null,y=-1,S=null;const R=new Oe,D=new Oe;let F=null;const O=new Bt(0);let z=0,H=e.width,J=e.height,G=1,et=null,Y=null;const Q=new Oe(0,0,H,J),V=new Oe(0,0,H,J);let ot=!1;const X=new Rc;let L=!1,I=!1;const k=new ce,$=new ce,at=new U,ct=new Oe,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function Et(){return A===null?G:1}let N=n;function Ht(C,j){return e.getContext(C,j)}try{const C={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xc}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),N===null){const j="webgl2";if(N=Ht(j,C),N===null)throw Ht(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let At,it,Z,pt,dt,P,E,W,lt,ft,ut,Dt,wt,Pt,jt,vt,Rt,kt,Gt,Lt,ee,qt,xe,q;function nt(){At=new a1(N),At.init(),qt=new Y_(N,At),it=new e1(N,At,t,qt),Z=new V_(N,At),it.reverseDepthBuffer&&f&&Z.buffers.depth.setReversed(!0),pt=new u1(N),dt=new R_,P=new X_(N,At,Z,dt,it,qt,pt),E=new i1(x),W=new r1(x),lt=new _0(N),xe=new Qg(N,lt),ft=new l1(N,lt,pt,xe),ut=new f1(N,ft,lt,pt),Gt=new h1(N,it,P),vt=new n1(dt),Dt=new A_(x,E,W,At,it,xe,vt),wt=new tx(x,dt),Pt=new P_,jt=new F_(At),kt=new Jg(x,E,W,Z,ut,d,l),Rt=new H_(x,ut,it),q=new ex(N,pt,it,Z),Lt=new t1(N,At,pt),ee=new c1(N,At,pt),pt.programs=Dt.programs,x.capabilities=it,x.extensions=At,x.properties=dt,x.renderLists=Pt,x.shadowMap=Rt,x.state=Z,x.info=pt}nt();const B=new J_(x,N);this.xr=B,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=At.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=At.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(H,J,!1))},this.getSize=function(C){return C.set(H,J)},this.setSize=function(C,j,st=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=C,J=j,e.width=Math.floor(C*G),e.height=Math.floor(j*G),st===!0&&(e.style.width=C+"px",e.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(H*G,J*G).floor()},this.setDrawingBufferSize=function(C,j,st){H=C,J=j,G=st,e.width=Math.floor(C*st),e.height=Math.floor(j*st),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(Q)},this.setViewport=function(C,j,st,rt){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,j,st,rt),Z.viewport(R.copy(Q).multiplyScalar(G).round())},this.getScissor=function(C){return C.copy(V)},this.setScissor=function(C,j,st,rt){C.isVector4?V.set(C.x,C.y,C.z,C.w):V.set(C,j,st,rt),Z.scissor(D.copy(V).multiplyScalar(G).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(C){Z.setScissorTest(ot=C)},this.setOpaqueSort=function(C){et=C},this.setTransparentSort=function(C){Y=C},this.getClearColor=function(C){return C.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(C=!0,j=!0,st=!0){let rt=0;if(C){let K=!1;if(A!==null){const yt=A.texture.format;K=yt===Ac||yt===Tc||yt===Ec}if(K){const yt=A.texture.type,Tt=yt===_i||yt===ts||yt===bo||yt===ks||yt===Sc||yt===wc,Ut=kt.getClearColor(),Nt=kt.getClearAlpha(),Zt=Ut.r,Kt=Ut.g,Ft=Ut.b;Tt?(p[0]=Zt,p[1]=Kt,p[2]=Ft,p[3]=Nt,N.clearBufferuiv(N.COLOR,0,p)):(_[0]=Zt,_[1]=Kt,_[2]=Ft,_[3]=Nt,N.clearBufferiv(N.COLOR,0,_))}else rt|=N.COLOR_BUFFER_BIT}j&&(rt|=N.DEPTH_BUFFER_BIT),st&&(rt|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Pt.dispose(),jt.dispose(),dt.dispose(),E.dispose(),W.dispose(),ut.dispose(),xe.dispose(),q.dispose(),Dt.dispose(),B.dispose(),B.removeEventListener("sessionstart",su),B.removeEventListener("sessionend",ou),Fi.stop()};function tt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const C=pt.autoReset,j=Rt.enabled,st=Rt.autoUpdate,rt=Rt.needsUpdate,K=Rt.type;nt(),pt.autoReset=C,Rt.enabled=j,Rt.autoUpdate=st,Rt.needsUpdate=rt,Rt.type=K}function xt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function It(C){const j=C.target;j.removeEventListener("dispose",It),ne(j)}function ne(C){ze(C),dt.remove(C)}function ze(C){const j=dt.get(C).programs;j!==void 0&&(j.forEach(function(st){Dt.releaseProgram(st)}),C.isShaderMaterial&&Dt.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,st,rt,K,yt){j===null&&(j=ht);const Tt=K.isMesh&&K.matrixWorld.determinant()<0,Ut=rp(C,j,st,rt,K);Z.setMaterial(rt,Tt);let Nt=st.index,Zt=1;if(rt.wireframe===!0){if(Nt=ft.getWireframeAttribute(st),Nt===void 0)return;Zt=2}const Kt=st.drawRange,Ft=st.attributes.position;let ae=Kt.start*Zt,Se=(Kt.start+Kt.count)*Zt;yt!==null&&(ae=Math.max(ae,yt.start*Zt),Se=Math.min(Se,(yt.start+yt.count)*Zt)),Nt!==null?(ae=Math.max(ae,0),Se=Math.min(Se,Nt.count)):Ft!=null&&(ae=Math.max(ae,0),Se=Math.min(Se,Ft.count));const be=Se-ae;if(be<0||be===1/0)return;xe.setup(K,rt,Ut,st,Nt);let pn,fe=Lt;if(Nt!==null&&(pn=lt.get(Nt),fe=ee,fe.setIndex(pn)),K.isMesh)rt.wireframe===!0?(Z.setLineWidth(rt.wireframeLinewidth*Et()),fe.setMode(N.LINES)):fe.setMode(N.TRIANGLES);else if(K.isLine){let zt=rt.linewidth;zt===void 0&&(zt=1),Z.setLineWidth(zt*Et()),K.isLineSegments?fe.setMode(N.LINES):K.isLineLoop?fe.setMode(N.LINE_LOOP):fe.setMode(N.LINE_STRIP)}else K.isPoints?fe.setMode(N.POINTS):K.isSprite&&fe.setMode(N.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)fe.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(At.get("WEBGL_multi_draw"))fe.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const zt=K._multiDrawStarts,ei=K._multiDrawCounts,de=K._multiDrawCount,Fn=Nt?lt.get(Nt).bytesPerElement:1,as=dt.get(rt).currentProgram.getUniforms();for(let wn=0;wn<de;wn++)as.setValue(N,"_gl_DrawID",wn),fe.render(zt[wn]/Fn,ei[wn])}else if(K.isInstancedMesh)fe.renderInstances(ae,be,K.count);else if(st.isInstancedBufferGeometry){const zt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,ei=Math.min(st.instanceCount,zt);fe.renderInstances(ae,be,ei)}else fe.render(ae,be)};function pe(C,j,st){C.transparent===!0&&C.side===Cn&&C.forceSinglePass===!1?(C.side=dn,C.needsUpdate=!0,ko(C,j,st),C.side=Xn,C.needsUpdate=!0,ko(C,j,st),C.side=Cn):ko(C,j,st)}this.compile=function(C,j,st=null){st===null&&(st=C),m=jt.get(st),m.init(j),v.push(m),st.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),C!==st&&C.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights();const rt=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const yt=K.material;if(yt)if(Array.isArray(yt))for(let Tt=0;Tt<yt.length;Tt++){const Ut=yt[Tt];pe(Ut,st,K),rt.add(Ut)}else pe(yt,st,K),rt.add(yt)}),v.pop(),m=null,rt},this.compileAsync=function(C,j,st=null){const rt=this.compile(C,j,st);return new Promise(K=>{function yt(){if(rt.forEach(function(Tt){dt.get(Tt).currentProgram.isReady()&&rt.delete(Tt)}),rt.size===0){K(C);return}setTimeout(yt,10)}At.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Nn=null;function ti(C){Nn&&Nn(C)}function su(){Fi.stop()}function ou(){Fi.start()}const Fi=new nd;Fi.setAnimationLoop(ti),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(C){Nn=C,B.setAnimationLoop(C),C===null?Fi.stop():Fi.start()},B.addEventListener("sessionstart",su),B.addEventListener("sessionend",ou),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(j),j=B.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,j,A),m=jt.get(C,v.length),m.init(j),v.push(m),$.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),X.setFromProjectionMatrix($),I=this.localClippingEnabled,L=vt.init(this.clippingPlanes,I),g=Pt.get(C,M.length),g.init(),M.push(g),B.enabled===!0&&B.isPresenting===!0){const yt=x.xr.getDepthSensingMesh();yt!==null&&xa(yt,j,-1/0,x.sortObjects)}xa(C,j,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(et,Y),gt=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,gt&&kt.addToRenderList(g,C),this.info.render.frame++,L===!0&&vt.beginShadows();const st=m.state.shadowsArray;Rt.render(st,C,j),L===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=g.opaque,K=g.transmissive;if(m.setupLights(),j.isArrayCamera){const yt=j.cameras;if(K.length>0)for(let Tt=0,Ut=yt.length;Tt<Ut;Tt++){const Nt=yt[Tt];au(rt,K,C,Nt)}gt&&kt.render(C);for(let Tt=0,Ut=yt.length;Tt<Ut;Tt++){const Nt=yt[Tt];ru(g,C,Nt,Nt.viewport)}}else K.length>0&&au(rt,K,C,j),gt&&kt.render(C),ru(g,C,j);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(x,C,j),xe.resetDefaultState(),y=-1,S=null,v.pop(),v.length>0?(m=v[v.length-1],L===!0&&vt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function xa(C,j,st,rt){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)st=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||X.intersectsSprite(C)){rt&&ct.setFromMatrixPosition(C.matrixWorld).applyMatrix4($);const Tt=ut.update(C),Ut=C.material;Ut.visible&&g.push(C,Tt,Ut,st,ct.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||X.intersectsObject(C))){const Tt=ut.update(C),Ut=C.material;if(rt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ct.copy(C.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),ct.copy(Tt.boundingSphere.center)),ct.applyMatrix4(C.matrixWorld).applyMatrix4($)),Array.isArray(Ut)){const Nt=Tt.groups;for(let Zt=0,Kt=Nt.length;Zt<Kt;Zt++){const Ft=Nt[Zt],ae=Ut[Ft.materialIndex];ae&&ae.visible&&g.push(C,Tt,ae,st,ct.z,Ft)}}else Ut.visible&&g.push(C,Tt,Ut,st,ct.z,null)}}const yt=C.children;for(let Tt=0,Ut=yt.length;Tt<Ut;Tt++)xa(yt[Tt],j,st,rt)}function ru(C,j,st,rt){const K=C.opaque,yt=C.transmissive,Tt=C.transparent;m.setupLightsView(st),L===!0&&vt.setGlobalState(x.clippingPlanes,st),rt&&Z.viewport(R.copy(rt)),K.length>0&&Bo(K,j,st),yt.length>0&&Bo(yt,j,st),Tt.length>0&&Bo(Tt,j,st),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function au(C,j,st,rt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[rt.id]===void 0&&(m.state.transmissionRenderTarget[rt.id]=new Wn(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float")?pi:_i,minFilter:Ci,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const yt=m.state.transmissionRenderTarget[rt.id],Tt=rt.viewport||R;yt.setSize(Tt.z,Tt.w);const Ut=x.getRenderTarget();x.setRenderTarget(yt),x.getClearColor(O),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),gt&&kt.render(st);const Nt=x.toneMapping;x.toneMapping=Di;const Zt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),m.setupLightsView(rt),L===!0&&vt.setGlobalState(x.clippingPlanes,rt),Bo(C,st,rt),P.updateMultisampleRenderTarget(yt),P.updateRenderTargetMipmap(yt),At.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Ft=0,ae=j.length;Ft<ae;Ft++){const Se=j[Ft],be=Se.object,pn=Se.geometry,fe=Se.material,zt=Se.group;if(fe.side===Cn&&be.layers.test(rt.layers)){const ei=fe.side;fe.side=dn,fe.needsUpdate=!0,lu(be,st,rt,pn,fe,zt),fe.side=ei,fe.needsUpdate=!0,Kt=!0}}Kt===!0&&(P.updateMultisampleRenderTarget(yt),P.updateRenderTargetMipmap(yt))}x.setRenderTarget(Ut),x.setClearColor(O,z),Zt!==void 0&&(rt.viewport=Zt),x.toneMapping=Nt}function Bo(C,j,st){const rt=j.isScene===!0?j.overrideMaterial:null;for(let K=0,yt=C.length;K<yt;K++){const Tt=C[K],Ut=Tt.object,Nt=Tt.geometry,Zt=rt===null?Tt.material:rt,Kt=Tt.group;Ut.layers.test(st.layers)&&lu(Ut,j,st,Nt,Zt,Kt)}}function lu(C,j,st,rt,K,yt){C.onBeforeRender(x,j,st,rt,K,yt),C.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(x,j,st,rt,C,yt),K.transparent===!0&&K.side===Cn&&K.forceSinglePass===!1?(K.side=dn,K.needsUpdate=!0,x.renderBufferDirect(st,j,rt,K,C,yt),K.side=Xn,K.needsUpdate=!0,x.renderBufferDirect(st,j,rt,K,C,yt),K.side=Cn):x.renderBufferDirect(st,j,rt,K,C,yt),C.onAfterRender(x,j,st,rt,K,yt)}function ko(C,j,st){j.isScene!==!0&&(j=ht);const rt=dt.get(C),K=m.state.lights,yt=m.state.shadowsArray,Tt=K.state.version,Ut=Dt.getParameters(C,K.state,yt,j,st),Nt=Dt.getProgramCacheKey(Ut);let Zt=rt.programs;rt.environment=C.isMeshStandardMaterial?j.environment:null,rt.fog=j.fog,rt.envMap=(C.isMeshStandardMaterial?W:E).get(C.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,Zt===void 0&&(C.addEventListener("dispose",It),Zt=new Map,rt.programs=Zt);let Kt=Zt.get(Nt);if(Kt!==void 0){if(rt.currentProgram===Kt&&rt.lightsStateVersion===Tt)return uu(C,Ut),Kt}else Ut.uniforms=Dt.getUniforms(C),C.onBeforeCompile(Ut,x),Kt=Dt.acquireProgram(Ut,Nt),Zt.set(Nt,Kt),rt.uniforms=Ut.uniforms;const Ft=rt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ft.clippingPlanes=vt.uniform),uu(C,Ut),rt.needsLights=lp(C),rt.lightsStateVersion=Tt,rt.needsLights&&(Ft.ambientLightColor.value=K.state.ambient,Ft.lightProbe.value=K.state.probe,Ft.directionalLights.value=K.state.directional,Ft.directionalLightShadows.value=K.state.directionalShadow,Ft.spotLights.value=K.state.spot,Ft.spotLightShadows.value=K.state.spotShadow,Ft.rectAreaLights.value=K.state.rectArea,Ft.ltc_1.value=K.state.rectAreaLTC1,Ft.ltc_2.value=K.state.rectAreaLTC2,Ft.pointLights.value=K.state.point,Ft.pointLightShadows.value=K.state.pointShadow,Ft.hemisphereLights.value=K.state.hemi,Ft.directionalShadowMap.value=K.state.directionalShadowMap,Ft.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ft.spotShadowMap.value=K.state.spotShadowMap,Ft.spotLightMatrix.value=K.state.spotLightMatrix,Ft.spotLightMap.value=K.state.spotLightMap,Ft.pointShadowMap.value=K.state.pointShadowMap,Ft.pointShadowMatrix.value=K.state.pointShadowMatrix),rt.currentProgram=Kt,rt.uniformsList=null,Kt}function cu(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=Or.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function uu(C,j){const st=dt.get(C);st.outputColorSpace=j.outputColorSpace,st.batching=j.batching,st.batchingColor=j.batchingColor,st.instancing=j.instancing,st.instancingColor=j.instancingColor,st.instancingMorph=j.instancingMorph,st.skinning=j.skinning,st.morphTargets=j.morphTargets,st.morphNormals=j.morphNormals,st.morphColors=j.morphColors,st.morphTargetsCount=j.morphTargetsCount,st.numClippingPlanes=j.numClippingPlanes,st.numIntersection=j.numClipIntersection,st.vertexAlphas=j.vertexAlphas,st.vertexTangents=j.vertexTangents,st.toneMapping=j.toneMapping}function rp(C,j,st,rt,K){j.isScene!==!0&&(j=ht),P.resetTextureUnits();const yt=j.fog,Tt=rt.isMeshStandardMaterial?j.environment:null,Ut=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:qs,Nt=(rt.isMeshStandardMaterial?W:E).get(rt.envMap||Tt),Zt=rt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Kt=!!st.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Ft=!!st.morphAttributes.position,ae=!!st.morphAttributes.normal,Se=!!st.morphAttributes.color;let be=Di;rt.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(be=x.toneMapping);const pn=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,fe=pn!==void 0?pn.length:0,zt=dt.get(rt),ei=m.state.lights;if(L===!0&&(I===!0||C!==S)){const Ln=C===S&&rt.id===y;vt.setState(rt,C,Ln)}let de=!1;rt.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==ei.state.version||zt.outputColorSpace!==Ut||K.isBatchedMesh&&zt.batching===!1||!K.isBatchedMesh&&zt.batching===!0||K.isBatchedMesh&&zt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&zt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&zt.instancing===!1||!K.isInstancedMesh&&zt.instancing===!0||K.isSkinnedMesh&&zt.skinning===!1||!K.isSkinnedMesh&&zt.skinning===!0||K.isInstancedMesh&&zt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&zt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&zt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&zt.instancingMorph===!1&&K.morphTexture!==null||zt.envMap!==Nt||rt.fog===!0&&zt.fog!==yt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==vt.numPlanes||zt.numIntersection!==vt.numIntersection)||zt.vertexAlphas!==Zt||zt.vertexTangents!==Kt||zt.morphTargets!==Ft||zt.morphNormals!==ae||zt.morphColors!==Se||zt.toneMapping!==be||zt.morphTargetsCount!==fe)&&(de=!0):(de=!0,zt.__version=rt.version);let Fn=zt.currentProgram;de===!0&&(Fn=ko(rt,j,K));let as=!1,wn=!1,$s=!1;const Ee=Fn.getUniforms(),Yn=zt.uniforms;if(Z.useProgram(Fn.program)&&(as=!0,wn=!0,$s=!0),rt.id!==y&&(y=rt.id,wn=!0),as||S!==C){Z.buffers.depth.getReversed()?(k.copy(C.projectionMatrix),qp(k),Zp(k),Ee.setValue(N,"projectionMatrix",k)):Ee.setValue(N,"projectionMatrix",C.projectionMatrix),Ee.setValue(N,"viewMatrix",C.matrixWorldInverse);const vi=Ee.map.cameraPosition;vi!==void 0&&vi.setValue(N,at.setFromMatrixPosition(C.matrixWorld)),it.logarithmicDepthBuffer&&Ee.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ee.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,wn=!0,$s=!0)}if(K.isSkinnedMesh){Ee.setOptional(N,K,"bindMatrix"),Ee.setOptional(N,K,"bindMatrixInverse");const Ln=K.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),Ee.setValue(N,"boneTexture",Ln.boneTexture,P))}K.isBatchedMesh&&(Ee.setOptional(N,K,"batchingTexture"),Ee.setValue(N,"batchingTexture",K._matricesTexture,P),Ee.setOptional(N,K,"batchingIdTexture"),Ee.setValue(N,"batchingIdTexture",K._indirectTexture,P),Ee.setOptional(N,K,"batchingColorTexture"),K._colorsTexture!==null&&Ee.setValue(N,"batchingColorTexture",K._colorsTexture,P));const Js=st.morphAttributes;if((Js.position!==void 0||Js.normal!==void 0||Js.color!==void 0)&&Gt.update(K,st,Fn),(wn||zt.receiveShadow!==K.receiveShadow)&&(zt.receiveShadow=K.receiveShadow,Ee.setValue(N,"receiveShadow",K.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Yn.envMap.value=Nt,Yn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&j.environment!==null&&(Yn.envMapIntensity.value=j.environmentIntensity),wn&&(Ee.setValue(N,"toneMappingExposure",x.toneMappingExposure),zt.needsLights&&ap(Yn,$s),yt&&rt.fog===!0&&wt.refreshFogUniforms(Yn,yt),wt.refreshMaterialUniforms(Yn,rt,G,J,m.state.transmissionRenderTarget[C.id]),Or.upload(N,cu(zt),Yn,P)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Or.upload(N,cu(zt),Yn,P),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ee.setValue(N,"center",K.center),Ee.setValue(N,"modelViewMatrix",K.modelViewMatrix),Ee.setValue(N,"normalMatrix",K.normalMatrix),Ee.setValue(N,"modelMatrix",K.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Ln=rt.uniformsGroups;for(let vi=0,Mi=Ln.length;vi<Mi;vi++){const hu=Ln[vi];q.update(hu,Fn),q.bind(hu,Fn)}}return Fn}function ap(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function lp(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,j,st){dt.get(C.texture).__webglTexture=j,dt.get(C.depthTexture).__webglTexture=st;const rt=dt.get(C);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=st===void 0,rt.__autoAllocateDepthBuffer||At.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,j){const st=dt.get(C);st.__webglFramebuffer=j,st.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,st=0){A=C,T=j,b=st;let rt=!0,K=null,yt=!1,Tt=!1;if(C){const Nt=dt.get(C);if(Nt.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(N.FRAMEBUFFER,null),rt=!1;else if(Nt.__webglFramebuffer===void 0)P.setupRenderTarget(C);else if(Nt.__hasExternalTextures)P.rebindTextures(C,dt.get(C.texture).__webglTexture,dt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ft=C.depthTexture;if(Nt.__boundDepthTexture!==Ft){if(Ft!==null&&dt.has(Ft)&&(C.width!==Ft.image.width||C.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(C)}}const Zt=C.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Tt=!0);const Kt=dt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Kt[j])?K=Kt[j][st]:K=Kt[j],yt=!0):C.samples>0&&P.useMultisampledRTT(C)===!1?K=dt.get(C).__webglMultisampledFramebuffer:Array.isArray(Kt)?K=Kt[st]:K=Kt,R.copy(C.viewport),D.copy(C.scissor),F=C.scissorTest}else R.copy(Q).multiplyScalar(G).floor(),D.copy(V).multiplyScalar(G).floor(),F=ot;if(Z.bindFramebuffer(N.FRAMEBUFFER,K)&&rt&&Z.drawBuffers(C,K),Z.viewport(R),Z.scissor(D),Z.setScissorTest(F),yt){const Nt=dt.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+j,Nt.__webglTexture,st)}else if(Tt){const Nt=dt.get(C.texture),Zt=j||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Nt.__webglTexture,st||0,Zt)}y=-1},this.readRenderTargetPixels=function(C,j,st,rt,K,yt,Tt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=dt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ut=Ut[Tt]),Ut){Z.bindFramebuffer(N.FRAMEBUFFER,Ut);try{const Nt=C.texture,Zt=Nt.format,Kt=Nt.type;if(!it.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-rt&&st>=0&&st<=C.height-K&&N.readPixels(j,st,rt,K,qt.convert(Zt),qt.convert(Kt),yt)}finally{const Nt=A!==null?dt.get(A).__webglFramebuffer:null;Z.bindFramebuffer(N.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(C,j,st,rt,K,yt,Tt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=dt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ut=Ut[Tt]),Ut){const Nt=C.texture,Zt=Nt.format,Kt=Nt.type;if(!it.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=C.width-rt&&st>=0&&st<=C.height-K){Z.bindFramebuffer(N.FRAMEBUFFER,Ut);const Ft=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ft),N.bufferData(N.PIXEL_PACK_BUFFER,yt.byteLength,N.STREAM_READ),N.readPixels(j,st,rt,K,qt.convert(Zt),qt.convert(Kt),0);const ae=A!==null?dt.get(A).__webglFramebuffer:null;Z.bindFramebuffer(N.FRAMEBUFFER,ae);const Se=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Yp(N,Se,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ft),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,yt),N.deleteBuffer(Ft),N.deleteSync(Se),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,j=null,st=0){C.isTexture!==!0&&(uo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,C=arguments[1]);const rt=Math.pow(2,-st),K=Math.floor(C.image.width*rt),yt=Math.floor(C.image.height*rt),Tt=j!==null?j.x:0,Ut=j!==null?j.y:0;P.setTexture2D(C,0),N.copyTexSubImage2D(N.TEXTURE_2D,st,0,0,Tt,Ut,K,yt),Z.unbindTexture()},this.copyTextureToTexture=function(C,j,st=null,rt=null,K=0){C.isTexture!==!0&&(uo("WebGLRenderer: copyTextureToTexture function signature has changed."),rt=arguments[0]||null,C=arguments[1],j=arguments[2],K=arguments[3]||0,st=null);let yt,Tt,Ut,Nt,Zt,Kt,Ft,ae,Se;const be=C.isCompressedTexture?C.mipmaps[K]:C.image;st!==null?(yt=st.max.x-st.min.x,Tt=st.max.y-st.min.y,Ut=st.isBox3?st.max.z-st.min.z:1,Nt=st.min.x,Zt=st.min.y,Kt=st.isBox3?st.min.z:0):(yt=be.width,Tt=be.height,Ut=be.depth||1,Nt=0,Zt=0,Kt=0),rt!==null?(Ft=rt.x,ae=rt.y,Se=rt.z):(Ft=0,ae=0,Se=0);const pn=qt.convert(j.format),fe=qt.convert(j.type);let zt;j.isData3DTexture?(P.setTexture3D(j,0),zt=N.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(P.setTexture2DArray(j,0),zt=N.TEXTURE_2D_ARRAY):(P.setTexture2D(j,0),zt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,j.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,j.unpackAlignment);const ei=N.getParameter(N.UNPACK_ROW_LENGTH),de=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Fn=N.getParameter(N.UNPACK_SKIP_PIXELS),as=N.getParameter(N.UNPACK_SKIP_ROWS),wn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,be.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,be.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Nt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Zt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Kt);const $s=C.isDataArrayTexture||C.isData3DTexture,Ee=j.isDataArrayTexture||j.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const Yn=dt.get(C),Js=dt.get(j),Ln=dt.get(Yn.__renderTarget),vi=dt.get(Js.__renderTarget);Z.bindFramebuffer(N.READ_FRAMEBUFFER,Ln.__webglFramebuffer),Z.bindFramebuffer(N.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let Mi=0;Mi<Ut;Mi++)$s&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,dt.get(C).__webglTexture,K,Kt+Mi),C.isDepthTexture?(Ee&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,dt.get(j).__webglTexture,K,Se+Mi),N.blitFramebuffer(Nt,Zt,yt,Tt,Ft,ae,yt,Tt,N.DEPTH_BUFFER_BIT,N.NEAREST)):Ee?N.copyTexSubImage3D(zt,K,Ft,ae,Se+Mi,Nt,Zt,yt,Tt):N.copyTexSubImage2D(zt,K,Ft,ae,Se+Mi,Nt,Zt,yt,Tt);Z.bindFramebuffer(N.READ_FRAMEBUFFER,null),Z.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ee?C.isDataTexture||C.isData3DTexture?N.texSubImage3D(zt,K,Ft,ae,Se,yt,Tt,Ut,pn,fe,be.data):j.isCompressedArrayTexture?N.compressedTexSubImage3D(zt,K,Ft,ae,Se,yt,Tt,Ut,pn,be.data):N.texSubImage3D(zt,K,Ft,ae,Se,yt,Tt,Ut,pn,fe,be):C.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,K,Ft,ae,yt,Tt,pn,fe,be.data):C.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,K,Ft,ae,be.width,be.height,pn,be.data):N.texSubImage2D(N.TEXTURE_2D,K,Ft,ae,yt,Tt,pn,fe,be);N.pixelStorei(N.UNPACK_ROW_LENGTH,ei),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,de),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Fn),N.pixelStorei(N.UNPACK_SKIP_ROWS,as),N.pixelStorei(N.UNPACK_SKIP_IMAGES,wn),K===0&&j.generateMipmaps&&N.generateMipmap(zt),Z.unbindTexture()},this.copyTextureToTexture3D=function(C,j,st=null,rt=null,K=0){return C.isTexture!==!0&&(uo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),st=arguments[0]||null,rt=arguments[1]||null,C=arguments[2],j=arguments[3],K=arguments[4]||0),uo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,j,st,rt,K)},this.initRenderTarget=function(C){dt.get(C).__webglFramebuffer===void 0&&P.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),Z.unbindTexture()},this.resetState=function(){T=0,b=0,A=null,Z.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class Lc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Bt(t),this.density=e}clone(){return new Lc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ix extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class sx extends nn{constructor(t=null,e=1,n=1,s,o,r,a,l,c=Pn,u=Pn,h,f){super(null,r,a,l,c,u,s,o,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class To extends ue{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ss=new ce,ch=new ce,lr=[],uh=new Ui,ox=new ce,so=new te,oo=new ss;class Ao extends te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new To(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ox)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ui),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ss),uh.copy(t.boundingBox).applyMatrix4(Ss),this.boundingBox.union(uh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ss),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ss),oo.copy(t.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(oo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(so.geometry=this.geometry,so.material=this.material,so.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(n),t.ray.intersectsSphere(oo)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Ss),ch.multiplyMatrices(n,Ss),so.matrixWorld=ch,so.raycast(t,lr);for(let r=0,a=lr.length;r<a;r++){const l=lr[r];l.instanceId=o,l.object=this,e.push(l)}lr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new To(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new sx(new Float32Array(s*this.count),s,this.count,bc,jn));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class po extends os{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const jr=new U,Kr=new U,hh=new ce,ro=new oa,cr=new ss,Za=new U,fh=new U;class ld extends Te{constructor(t=new re,e=new po){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)jr.fromBufferAttribute(e,s-1),Kr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=jr.distanceTo(Kr);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(s),cr.radius+=o,t.ray.intersectsSphere(cr)===!1)return;hh.copy(s).invert(),ro.copy(t.ray).applyMatrix4(hh);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let _=d,g=p-1;_<g;_+=c){const m=u.getX(_),M=u.getX(_+1),v=ur(this,t,ro,l,m,M);v&&e.push(v)}if(this.isLineLoop){const _=u.getX(p-1),g=u.getX(d),m=ur(this,t,ro,l,_,g);m&&e.push(m)}}else{const d=Math.max(0,r.start),p=Math.min(f.count,r.start+r.count);for(let _=d,g=p-1;_<g;_+=c){const m=ur(this,t,ro,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=ur(this,t,ro,l,p-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function ur(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(jr.fromBufferAttribute(r,s),Kr.fromBufferAttribute(r,o),e.distanceSqToSegment(jr,Kr,Za,fh)>n)return;Za.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Za);if(!(l<t.near||l>t.far))return{distance:l,point:fh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const dh=new U,ph=new U;class rx extends ld{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)dh.fromBufferAttribute(e,s),ph.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+dh.distanceTo(ph);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jl extends os{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const mh=new ce,Ql=new oa,hr=new ss,fr=new U;class gh extends Te{constructor(t=new re,e=new Jl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(s),hr.radius+=o,t.ray.intersectsSphere(hr)===!1)return;mh.copy(s).invert(),Ql.copy(t.ray).applyMatrix4(mh);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let p=f,_=d;p<_;p++){const g=c.getX(p);fr.fromBufferAttribute(h,g),_h(fr,g,l,s,t,e,this)}}else{const f=Math.max(0,r.start),d=Math.min(h.count,r.start+r.count);for(let p=f,_=d;p<_;p++)fr.fromBufferAttribute(h,p),_h(fr,p,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function _h(i,t,e,n,s,o,r){const a=Ql.distanceSqToPoint(i);if(a<e){const l=new U;Ql.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class rs extends nn{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const u=n[s],f=n[s+1]-u,d=(r-u)/f;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new Mt:new U);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new U,s=[],o=[],r=[],a=new U,l=new ce;for(let d=0;d<=t;d++){const p=d/t;s[d]=this.getTangentAt(p,new U)}o[0]=new U,r[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(je(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(l.makeRotationAxis(a,p))}r[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(je(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let p=1;p<=t;p++)o[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),r[p].crossVectors(s[p],o[p])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Dc extends Qn{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Mt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ax extends Dc{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Ic(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,u,h){let f=(r-o)/c-(a-o)/(c+u)+(a-r)/u,d=(a-r)/u-(l-r)/(u+h)+(l-a)/h;f*=u,d*=u,s(r,a,f,d)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const dr=new U,ja=new Ic,Ka=new Ic,$a=new Ic;class cd extends Qn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%o]:(dr.subVectors(s[0],s[1]).add(s[0]),c=dr);const h=s[a%o],f=s[(a+1)%o];if(this.closed||a+2<o?u=s[(a+2)%o]:(dr.subVectors(s[o-1],s[o-2]).add(s[o-1]),u=dr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),ja.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,p,_,g),Ka.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,p,_,g),$a.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,p,_,g)}else this.curveType==="catmullrom"&&(ja.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ka.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),$a.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(ja.calc(l),Ka.calc(l),$a.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xh(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function lx(i,t){const e=1-i;return e*e*t}function cx(i,t){return 2*(1-i)*i*t}function ux(i,t){return i*i*t}function mo(i,t,e,n){return lx(i,t)+cx(i,e)+ux(i,n)}function hx(i,t){const e=1-i;return e*e*e*t}function fx(i,t){const e=1-i;return 3*e*e*i*t}function dx(i,t){return 3*(1-i)*i*i*t}function px(i,t){return i*i*i*t}function go(i,t,e,n,s){return hx(i,t)+fx(i,e)+dx(i,n)+px(i,s)}class ud extends Qn{constructor(t=new Mt,e=new Mt,n=new Mt,s=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Mt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(go(t,s.x,o.x,r.x,a.x),go(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mx extends Qn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(go(t,s.x,o.x,r.x,a.x),go(t,s.y,o.y,r.y,a.y),go(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hd extends Qn{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gx extends Qn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fd extends Qn{constructor(t=new Mt,e=new Mt,n=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Mt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(mo(t,s.x,o.x,r.x),mo(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _x extends Qn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(mo(t,s.x,o.x,r.x),mo(t,s.y,o.y,r.y),mo(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dd extends Qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],u=s[r>s.length-2?s.length-1:r+1],h=s[r>s.length-3?s.length-1:r+2];return n.set(xh(a,l.x,c.x,u.x,h.x),xh(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Mt().fromArray(s))}return this}}var vh=Object.freeze({__proto__:null,ArcCurve:ax,CatmullRomCurve3:cd,CubicBezierCurve:ud,CubicBezierCurve3:mx,EllipseCurve:Dc,LineCurve:hd,LineCurve3:gx,QuadraticBezierCurve:fd,QuadraticBezierCurve3:_x,SplineCurve:dd});class xx extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new vh[s.type]().fromJSON(s))}return this}}class $r extends xx{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new hd(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new fd(this.currentPoint.clone(),new Mt(t,e),new Mt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new ud(this.currentPoint.clone(),new Mt(t,e),new Mt(n,s),new Mt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new dd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new Dc(t,e,n,s,o,r,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Uc extends re{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new U,u=new Mt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=n+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),r.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(r[f]/t+1)/2,u.y=(r[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)o.push(h,h+1,0);this.setIndex(o),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(a,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class en extends re{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const u=[],h=[],f=[],d=[];let p=0;const _=[],g=n/2;let m=0;M(),r===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Yt(h,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(d,2));function M(){const x=new U,w=new U;let T=0;const b=(e-t)/n;for(let A=0;A<=o;A++){const y=[],S=A/o,R=S*(e-t)+t;for(let D=0;D<=s;D++){const F=D/s,O=F*l+a,z=Math.sin(O),H=Math.cos(O);w.x=R*z,w.y=-S*n+g,w.z=R*H,h.push(w.x,w.y,w.z),x.set(z,b,H).normalize(),f.push(x.x,x.y,x.z),d.push(F,1-S),y.push(p++)}_.push(y)}for(let A=0;A<s;A++)for(let y=0;y<o;y++){const S=_[y][A],R=_[y+1][A],D=_[y+1][A+1],F=_[y][A+1];(t>0||y!==0)&&(u.push(S,R,F),T+=3),(e>0||y!==o-1)&&(u.push(R,D,F),T+=3)}c.addGroup(m,T,0),m+=T}function v(x){const w=p,T=new Mt,b=new U;let A=0;const y=x===!0?t:e,S=x===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,g*S,0),f.push(0,S,0),d.push(.5,.5),p++;const R=p;for(let D=0;D<=s;D++){const O=D/s*l+a,z=Math.cos(O),H=Math.sin(O);b.x=y*H,b.y=g*S,b.z=y*z,h.push(b.x,b.y,b.z),f.push(0,S,0),T.x=z*.5+.5,T.y=H*.5*S+.5,d.push(T.x,T.y),p++}for(let D=0;D<s;D++){const F=w+D,O=R+D;x===!0?u.push(O,O+1,F):u.push(O+1,O,F),A+=3}c.addGroup(m,A,x===!0?1:2),m+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new en(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fo extends en{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Fo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Nc extends re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),c(n),u(),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(o.slice(),3)),this.setAttribute("uv",new Yt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new U,x=new U,w=new U;for(let T=0;T<e.length;T+=3)d(e[T+0],v),d(e[T+1],x),d(e[T+2],w),l(v,x,w,M)}function l(M,v,x,w){const T=w+1,b=[];for(let A=0;A<=T;A++){b[A]=[];const y=M.clone().lerp(x,A/T),S=v.clone().lerp(x,A/T),R=T-A;for(let D=0;D<=R;D++)D===0&&A===T?b[A][D]=y:b[A][D]=y.clone().lerp(S,D/R)}for(let A=0;A<T;A++)for(let y=0;y<2*(T-A)-1;y++){const S=Math.floor(y/2);y%2===0?(f(b[A][S+1]),f(b[A+1][S]),f(b[A][S])):(f(b[A][S+1]),f(b[A+1][S+1]),f(b[A+1][S]))}}function c(M){const v=new U;for(let x=0;x<o.length;x+=3)v.x=o[x+0],v.y=o[x+1],v.z=o[x+2],v.normalize().multiplyScalar(M),o[x+0]=v.x,o[x+1]=v.y,o[x+2]=v.z}function u(){const M=new U;for(let v=0;v<o.length;v+=3){M.x=o[v+0],M.y=o[v+1],M.z=o[v+2];const x=g(M)/2/Math.PI+.5,w=m(M)/Math.PI+.5;r.push(x,1-w)}p(),h()}function h(){for(let M=0;M<r.length;M+=6){const v=r[M+0],x=r[M+2],w=r[M+4],T=Math.max(v,x,w),b=Math.min(v,x,w);T>.9&&b<.1&&(v<.2&&(r[M+0]+=1),x<.2&&(r[M+2]+=1),w<.2&&(r[M+4]+=1))}}function f(M){o.push(M.x,M.y,M.z)}function d(M,v){const x=M*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function p(){const M=new U,v=new U,x=new U,w=new U,T=new Mt,b=new Mt,A=new Mt;for(let y=0,S=0;y<o.length;y+=9,S+=6){M.set(o[y+0],o[y+1],o[y+2]),v.set(o[y+3],o[y+4],o[y+5]),x.set(o[y+6],o[y+7],o[y+8]),T.set(r[S+0],r[S+1]),b.set(r[S+2],r[S+3]),A.set(r[S+4],r[S+5]),w.copy(M).add(v).add(x).divideScalar(3);const R=g(w);_(T,S+0,M,R),_(b,S+2,v,R),_(A,S+4,x,R)}}function _(M,v,x,w){w<0&&M.x===1&&(r[v]=M.x-1),x.x===0&&x.z===0&&(r[v]=w/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nc(t.vertices,t.indices,t.radius,t.details)}}class aa extends $r{constructor(t){super(t),this.uuid=Zs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new $r().fromJSON(s))}return this}}const vx={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=pd(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,u,h,f,d;if(n&&(o=bx(i,t,o,e)),i.length>80*e){a=c=i[0],l=u=i[1];for(let p=e;p<s;p+=e)h=i[p],f=i[p+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Ro(o,r,e,a,l,d,0),r}};function pd(i,t,e,n,s){let o,r;if(s===Nx(i,t,e,n)>0)for(o=t;o<e;o+=n)r=Mh(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=Mh(o,i[o],i[o+1],r);return r&&la(r,r.next)&&(Po(r),r=r.next),r}function es(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(la(e,e.next)||De(e.prev,e,e.next)===0)){if(Po(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ro(i,t,e,n,s,o,r){if(!i)return;!r&&o&&Cx(i,n,s,o);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,o?yx(i,n,s,o):Mx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Po(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=Sx(es(i),t,e),Ro(i,t,e,n,s,o,2)):r===2&&wx(i,t,e,n,s,o):Ro(es(i),t,e,n,s,o,1);break}}}function Mx(i){const t=i.prev,e=i,n=i.next;if(De(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,u=s<o?s<r?s:r:o<r?o:r,h=a<l?a<c?a:c:l<c?l:c,f=s>o?s>r?s:r:o>r?o:r,d=a>l?a>c?a:c:l>c?l:c;let p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&Cs(s,a,o,l,r,c,p.x,p.y)&&De(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function yx(i,t,e,n){const s=i.prev,o=i,r=i.next;if(De(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,u=s.y,h=o.y,f=r.y,d=a<l?a<c?a:c:l<c?l:c,p=u<h?u<f?u:f:h<f?h:f,_=a>l?a>c?a:c:l>c?l:c,g=u>h?u>f?u:f:h>f?h:f,m=tc(d,p,t,e,n),M=tc(_,g,t,e,n);let v=i.prevZ,x=i.nextZ;for(;v&&v.z>=m&&x&&x.z<=M;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=g&&v!==s&&v!==r&&Cs(a,u,l,h,c,f,v.x,v.y)&&De(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==r&&Cs(a,u,l,h,c,f,x.x,x.y)&&De(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=g&&v!==s&&v!==r&&Cs(a,u,l,h,c,f,v.x,v.y)&&De(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=M;){if(x.x>=d&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==r&&Cs(a,u,l,h,c,f,x.x,x.y)&&De(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Sx(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!la(s,o)&&md(s,n,n.next,o)&&Co(s,o)&&Co(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Po(n),Po(n.next),n=i=o),n=n.next}while(n!==i);return es(n)}function wx(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Dx(r,a)){let l=gd(r,a);r=es(r,r.next),l=es(l,l.next),Ro(r,t,e,n,s,o,0),Ro(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function bx(i,t,e,n){const s=[];let o,r,a,l,c;for(o=0,r=t.length;o<r;o++)a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=pd(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Lx(c));for(s.sort(Ex),o=0;o<s.length;o++)e=Tx(s[o],e);return e}function Ex(i,t){return i.x-t.x}function Tx(i,t){const e=Ax(i,t);if(!e)return t;const n=gd(e,i);return es(n,n.next),es(e,e.next)}function Ax(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;e=s;do o>=e.x&&e.x>=l&&o!==e.x&&Cs(r<c?o:n,r,l,c,r<c?n:o,r,e.x,e.y)&&(h=Math.abs(r-e.y)/(o-e.x),Co(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&Rx(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function Rx(i,t){return De(i.prev,i,t.prev)<0&&De(t.next,i,i.next)<0}function Cx(i,t,e,n){let s=i;do s.z===0&&(s.z=tc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Px(s)}function Px(i){let t,e,n,s,o,r,a,l,c=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,c*=2}while(r>1);return i}function tc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Lx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Cs(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function Dx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ix(i,t)&&(Co(i,t)&&Co(t,i)&&Ux(i,t)&&(De(i.prev,i,t.prev)||De(i,t.prev,t))||la(i,t)&&De(i.prev,i,i.next)>0&&De(t.prev,t,t.next)>0)}function De(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function la(i,t){return i.x===t.x&&i.y===t.y}function md(i,t,e,n){const s=mr(De(i,t,e)),o=mr(De(i,t,n)),r=mr(De(e,n,i)),a=mr(De(e,n,t));return!!(s!==o&&r!==a||s===0&&pr(i,e,t)||o===0&&pr(i,n,t)||r===0&&pr(e,i,n)||a===0&&pr(e,t,n))}function pr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function mr(i){return i>0?1:i<0?-1:0}function Ix(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&md(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Co(i,t){return De(i.prev,i,i.next)<0?De(i,t,i.next)>=0&&De(i,i.prev,t)>=0:De(i,t,i.prev)<0||De(i,i.next,t)<0}function Ux(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function gd(i,t){const e=new ec(i.i,i.x,i.y),n=new ec(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Mh(i,t,e,n){const s=new ec(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Po(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ec(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Nx(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class $i{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return $i.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];yh(t),Sh(n,t);let r=t.length;e.forEach(yh);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,Sh(n,e[l]);const a=vx.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function yh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Sh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Oo extends Nc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Oo(t.radius,t.detail)}}class zo extends re{constructor(t=new aa([new Mt(0,.5),new Mt(-.5,-.5),new Mt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(o,3)),this.setAttribute("uv",new Yt(r,2));function c(u){const h=s.length/3,f=u.extractPoints(e);let d=f.shape;const p=f.holes;$i.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){const M=p[g];$i.isClockWise(M)===!0&&(p[g]=M.reverse())}const _=$i.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){const M=p[g];d=d.concat(M)}for(let g=0,m=d.length;g<m;g++){const M=d[g];s.push(M.x,M.y,0),o.push(0,0,1),r.push(M.x,M.y)}for(let g=0,m=_.length;g<m;g++){const M=_[g],v=M[0]+h,x=M[1]+h,w=M[2]+h;n.push(v,x,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Fx(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new zo(n,t.curveSegments)}}function Fx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class ca extends re{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const u=[],h=new U,f=new U,d=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const M=[],v=m/n;let x=0;m===0&&r===0?x=.5/e:m===n&&l===Math.PI&&(x=-.5/e);for(let w=0;w<=e;w++){const T=w/e;h.x=-t*Math.cos(s+T*o)*Math.sin(r+v*a),h.y=t*Math.cos(r+v*a),h.z=t*Math.sin(s+T*o)*Math.sin(r+v*a),p.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),g.push(T+x,1-v),M.push(c++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){const v=u[m][M+1],x=u[m][M],w=u[m+1][M],T=u[m+1][M+1];(m!==0||r>0)&&d.push(v,x,T),(m!==n-1||l<Math.PI)&&d.push(x,w,T)}this.setIndex(d),this.setAttribute("position",new Yt(p,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ca(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ox extends tn{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Le extends os{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wf,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Fc extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class zx extends Fc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ja=new ce,wh=new U,bh=new U;class _d{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rc,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wh.setFromMatrixPosition(t.matrixWorld),e.position.copy(wh),bh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bh),e.updateMatrixWorld(),Ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ja)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Bx extends _d{constructor(){super(new Rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=qr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||s!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=s,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class kx extends Fc{constructor(t,e,n=0,s=Math.PI/3,o=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.distance=n,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new Bx}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Hx extends _d{constructor(){super(new Cc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xd extends Fc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Hx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Gx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Eh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Eh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Eh(){return performance.now()}class Th{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(je(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Vx extends is{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xc);const Ah={type:"change"},Oc={type:"start"},vd={type:"end"},gr=new oa,Rh=new Ri,Wx=Math.cos(70*Wp.DEG2RAD),Ge=new U,gn=2*Math.PI,ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qa=1e-6;class Xx extends Vx{constructor(t,e=null){super(t,e),this.state=ye.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ls.ROTATE,MIDDLE:Ls.DOLLY,RIGHT:Ls.PAN},this.touches={ONE:As.ROTATE,TWO:As.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Kn,this._lastTargetPosition=new U,this._quat=new Kn().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Th,this._sphericalDelta=new Th,this._scale=1,this._panOffset=new U,this._rotateStart=new Mt,this._rotateEnd=new Mt,this._rotateDelta=new Mt,this._panStart=new Mt,this._panEnd=new Mt,this._panDelta=new Mt,this._dollyStart=new Mt,this._dollyEnd=new Mt,this._dollyDelta=new Mt,this._dollyDirection=new U,this._mouse=new Mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qx.bind(this),this._onPointerDown=Yx.bind(this),this._onPointerUp=Zx.bind(this),this._onContextMenu=ev.bind(this),this._onMouseWheel=$x.bind(this),this._onKeyDown=Jx.bind(this),this._onTouchStart=Qx.bind(this),this._onTouchMove=tv.bind(this),this._onMouseDown=jx.bind(this),this._onMouseMove=Kx.bind(this),this._interceptControlDown=nv.bind(this),this._interceptControlUp=iv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ah),this.update(),this.state=ye.NONE}update(t=null){const e=this.object.position;Ge.copy(e).sub(this.target),Ge.applyQuaternion(this._quat),this._spherical.setFromVector3(Ge),this.autoRotate&&this.state===ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=gn:n>Math.PI&&(n-=gn),s<-Math.PI?s+=gn:s>Math.PI&&(s-=gn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Ge.setFromSpherical(this._spherical),Ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Ge.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=Ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(gr.origin.copy(this.object.position),gr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gr.direction))<Wx?this.object.lookAt(this.target):(Rh.setFromNormalAndCoplanarPoint(this.object.up,this.target),gr.intersectPlane(Rh,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Qa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qa||this._lastTargetPosition.distanceToSquared(this.target)>Qa?(this.dispatchEvent(Ah),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?gn/60*this.autoRotateSpeed*t:gn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ge.setFromMatrixColumn(e,0),Ge.multiplyScalar(-t),this._panOffset.add(Ge)}_panUp(t,e){this.screenSpacePanning===!0?Ge.setFromMatrixColumn(e,1):(Ge.setFromMatrixColumn(e,0),Ge.crossVectors(this.object.up,Ge)),Ge.multiplyScalar(t),this._panOffset.add(Ge)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ge.copy(s).sub(this.target);let o=Ge.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/e.clientHeight),this._rotateUp(gn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/e.clientHeight),this._rotateUp(gn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Yx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function qx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Zx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vd),this.state=ye.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function jx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ls.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ye.DOLLY;break;case Ls.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ye.ROTATE}break;case Ls.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ye.PAN}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(Oc)}function Kx(i){switch(this.state){case ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function $x(i){this.enabled===!1||this.enableZoom===!1||this.state!==ye.NONE||(i.preventDefault(),this.dispatchEvent(Oc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(vd))}function Jx(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Qx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case As.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ye.TOUCH_ROTATE;break;case As.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ye.TOUCH_PAN;break;default:this.state=ye.NONE}break;case 2:switch(this.touches.TWO){case As.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ye.TOUCH_DOLLY_PAN;break;case As.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ye.TOUCH_DOLLY_ROTATE;break;default:this.state=ye.NONE}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(Oc)}function tv(i){switch(this._trackPointer(i),this.state){case ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ye.NONE}}function ev(i){this.enabled!==!1&&i.preventDefault()}function nv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class sv extends Te{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Mt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const ws=new U,Ch=new ce,Ph=new ce,Lh=new U,Dh=new U;class ov{constructor(t={}){const e=this;let n,s,o,r;const a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:s}},this.render=function(p,_){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),Ch.copy(_.matrixWorldInverse),Ph.multiplyMatrices(_.projectionMatrix,Ch),u(p,p,_),d(p)},this.setSize=function(p,_){n=p,s=_,o=n/2,r=s/2,l.style.width=p+"px",l.style.height=_+"px"};function c(p){p.isCSS2DObject&&(p.element.style.display="none");for(let _=0,g=p.children.length;_<g;_++)c(p.children[_])}function u(p,_,g){if(p.visible===!1){c(p);return}if(p.isCSS2DObject){ws.setFromMatrixPosition(p.matrixWorld),ws.applyMatrix4(Ph);const m=ws.z>=-1&&ws.z<=1&&p.layers.test(g.layers)===!0,M=p.element;M.style.display=m===!0?"":"none",m===!0&&(p.onBeforeRender(e,_,g),M.style.transform="translate("+-100*p.center.x+"%,"+-100*p.center.y+"%)translate("+(ws.x*o+o)+"px,"+(-ws.y*r+r)+"px)",M.parentNode!==l&&l.appendChild(M),p.onAfterRender(e,_,g));const v={distanceToCameraSquared:h(g,p)};a.objects.set(p,v)}for(let m=0,M=p.children.length;m<M;m++)u(p.children[m],_,g)}function h(p,_){return Lh.setFromMatrixPosition(p.matrixWorld),Dh.setFromMatrixPosition(_.matrixWorld),Lh.distanceToSquared(Dh)}function f(p){const _=[];return p.traverseVisible(function(g){g.isCSS2DObject&&_.push(g)}),_}function d(p){const _=f(p).sort(function(m,M){if(m.renderOrder!==M.renderOrder)return M.renderOrder-m.renderOrder;const v=a.objects.get(m).distanceToCameraSquared,x=a.objects.get(M).distanceToCameraSquared;return v-x}),g=_.length;for(let m=0,M=_.length;m<M;m++)_[m].element.style.zIndex=g-m}}}function sn(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new re;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0;const h=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let p=0;p<d.count;++p)h.push(d.getX(p)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(const u in o){const h=Ih(o[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in r){const h=r[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let _=0;_<r[u].length;++_)d.push(r[u][_][f]);const p=Ih(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function Ih(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=u.count*e}const r=new t(o),a=new ue(r,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let f=0,d=u.count;f<d;f++)for(let p=0;p<e;p++){const _=u.getComponent(f,p);a.setComponent(f+h,p,_)}}else r.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}function Md(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;s++){const r=e[s][0],a=e[s][1],l=e[o][0],c=e[o][1],u=c-a||1e-12;a>t!=c>t&&i<(l-r)*(t-a)/u+r&&(n=!n),o=s}return n}function rv(i){if(typeof atob=="function"){const t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}return new Uint8Array(Buffer.from(i,"base64"))}function av(i){if(!i?.data)return()=>0;const t=rv(i.data),e=new Int16Array(t.buffer,t.byteOffset,t.byteLength/2),{minX:n,minZ:s,step:o,cols:r,rows:a}=i;return function(c,u){const h=(c-n)/o,f=(u-s)/o,d=Math.floor(h),p=Math.floor(f),_=Math.max(0,Math.min(r-1,d)),g=Math.max(0,Math.min(a-1,p)),m=Math.max(0,Math.min(r-1,d+1)),M=Math.max(0,Math.min(a-1,p+1)),v=Math.max(0,Math.min(1,h-d)),x=Math.max(0,Math.min(1,f-p)),w=e[g*r+_],T=e[g*r+m],b=e[M*r+_],A=e[M*r+m];return((w+(T-w)*v)*(1-x)+(b+(A-b)*v)*x)*.1}}const Uh=-3.2;function yd(i,t,e,n){const s=e(i,t);if(!n)return s;if(n.inside(i,t))return Uh;const o=n.bankStrength(i,t);if(o<=0)return s;const r=o*o;return Math.min(s*(1-r)+Uh*r,s)}function lv(i,t,e,n,s,o,r){const a=t.length;if(a<3)return;const c=Math.hypot(t[0][0]-t[a-1][0],t[0][1]-t[a-1][1])<.01?a-1:a;for(let u=0;u<r;u++){const h=u+.5,f=[];for(let d=0;d<c;d++){const p=t[d],_=t[(d+1)%a],g=(p[1]-n)/s,m=(_[1]-n)/s;if(g>h!=m>h){const M=(p[0]-e)/s,v=(_[0]-e)/s;f.push(M+(h-g)*(v-M)/(m-g||1e-12))}}f.sort((d,p)=>d-p);for(let d=0;d+1<f.length;d+=2){const p=Math.max(0,Math.floor(f[d])),_=Math.min(o-1,Math.ceil(f[d+1])),g=u*o;for(let m=p;m<=_;m++)i[g+m]=1}}}function cv(i,t,e,n,s,o,r){const a=t.length;if(a<3)return;const c=Math.hypot(t[0][0]-t[a-1][0],t[0][1]-t[a-1][1])<.01?a-1:a;for(let u=0;u<r;u++){const h=u+.5,f=[];for(let d=0;d<c;d++){const p=t[d],_=t[(d+1)%a],g=(p[1]-n)/s,m=(_[1]-n)/s;if(g>h!=m>h){const M=(p[0]-e)/s,v=(_[0]-e)/s;f.push(M+(h-g)*(v-M)/(m-g||1e-12))}}f.sort((d,p)=>d-p);for(let d=0;d+1<f.length;d+=2){const p=Math.max(0,Math.floor(f[d])),_=Math.min(o-1,Math.ceil(f[d+1])),g=u*o;for(let m=p;m<=_;m++)i[g+m]=0}}}function Nh(i,{erosion:t=0}={}){const a=Math.ceil(1360),l=Math.ceil(9e3/10),c=new Uint8Array(a*l),u=i.map(p=>Array.isArray(p)?{f:p,holes:[]}:p).filter(p=>p?.f&&p.f.length>=3);for(const p of u)lv(c,p.f,-4800,-4200,10,a,l);for(const p of u)for(const _ of p.holes||[])_.length>=3&&cv(c,_,-4800,-4200,10,a,l);if(t>0){const p=new Uint8Array(c),_=Math.ceil(t/10);for(let g=0;g<l;g++)for(let m=0;m<a;m++){const M=g*a+m;if(!c[M])continue;let v=!0;for(let x=-_;x<=_&&v;x++)for(let w=-_;w<=_;w++){const T=g+x,b=m+w;if(T<0||T>=l||b<0||b>=a||!c[T*a+b]){v=!1;break}}v||(p[M]=0)}c.set(p)}const h=new Uint8Array(a*l),f=4;for(let p=0;p<l;p++)for(let _=0;_<a;_++){const g=p*a+_;if(c[g])for(let m=-f;m<=f;m++){const M=p+m;if(!(M<0||M>=l))for(let v=-f;v<=f;v++){const x=_+v;if(x<0||x>=a)continue;const w=M*a+x;if(c[w])continue;const T=Math.hypot(v,m);if(T>f)continue;const b=Math.round(255*(1-T/f));b>h[w]&&(h[w]=b)}}}function d(p,_){const g=Math.floor((p- -4800)/10),m=Math.floor((_- -4200)/10);return g<0||m<0||g>=a||m>=l?-1:m*a+g}return{inside(p,_){const g=d(p,_);return g>=0&&c[g]===1},nearBank(p,_){const g=d(p,_);return g>=0&&h[g]>0},bankStrength(p,_){const g=d(p,_);return g>=0?h[g]/255:0}}}function zr(i,t){const e=i.length-1;if(e<3)return 1;let n=0,s=0;for(let a=0;a<e;a++){const[l,c]=i[a];s++,t.inside(l,c)&&n++}const[o,r]=Sn(i);return s++,t.inside(o,r)&&n++,n/s}function nc(i,t,e){let n=-1/0;const s=i.length-1;for(let a=0;a<s;a++){const[l,c]=i[a];e.inside(l,c)||(n=Math.max(n,t(l,c)))}const[o,r]=Sn(i);return e.inside(o,r)||(n=Math.max(n,t(o,r))),n>-1/0?n:t(o,r)}function oe(i,t){const e=Math.sin(i*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)}function Sn(i){let t=0,e=0;const n=i.length-1;for(let s=0;s<n;s++)t+=i[s][0],e+=i[s][1];return[t/n,e/n]}const uv=`
  vec2 riverFlow(vec2 p) {
    float north = 1.0 - smoothstep(-420.0, 60.0, p.y);
    float south = smoothstep(-160.0, 340.0, p.y);
    float ohio = 1.0 - smoothstep(-1500.0, -600.0, p.x);
    float set = 0.20 * north - 0.30 * south;
    return normalize(vec2(-1.0, mix(set, -0.34, ohio)));
  }`,hv=`
  float vhash(vec2 c) {
    vec3 p = fract(vec3(c.xyx) * 0.1031);
    p += dot(p, p.yzx + 33.33);
    return fract((p.x + p.y) * p.z);
  }

  /**
   * Value noise returned as (value, d/dx, d/dy). The analytic derivative earns
   * its keep twice over: finite-differencing costs three evaluations per octave
   * instead of one, and because neighbouring taps share hash corners the
   * difference is piecewise constant across a cell, which a surface this shiny
   * renders as visible facets.
   */
  vec3 vnoiseD(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    vec2 du = 6.0 * f * (1.0 - f);
    float a = vhash(i);
    float b = vhash(i + vec2(1.0, 0.0));
    float c = vhash(i + vec2(0.0, 1.0));
    float d = vhash(i + vec2(1.0, 1.0));
    float k1 = b - a;
    float k2 = c - a;
    float k3 = a - b - c + d;
    return vec3(
      a + k1 * u.x + k2 * u.y + k3 * u.x * u.y,
      du.x * (k1 + k3 * u.y),
      du.y * (k2 + k3 * u.x));
  }`,fv=`
  struct River {
    float shade;
    vec2 slope;
    float chop;
    float foam;
  };

  // 26, 57 and 83 degrees: mutually non-parallel, and none a multiple of
  // another, so no two lattices share an axis.
  const mat2 ROT1 = mat2(0.8988, 0.4384, -0.4384, 0.8988);
  const mat2 ROT2 = mat2(0.5446, 0.8387, -0.8387, 0.5446);
  const mat2 ROT3 = mat2(0.1219, 0.9925, -0.9925, 0.1219);

  // An octave is drawn at full strength once its wavelength spans five pixels
  // and dropped entirely below two, where it can only contribute shimmer.
  float bandLimit(float wavelength, float px) {
    return smoothstep(1.8, 5.0, wavelength / px);
  }

  River riverField(vec2 p, vec2 flow, float t, float px) {
    vec2 across = vec2(-flow.y, flow.x);
    float along = dot(p, flow);
    float side = dot(p, across);

    // Wavelengths, metres: 230x104, 92x42, 37x17, 15x7.
    float w0 = bandLimit(104.0, px);
    float w1 = bandLimit(42.0, px);
    float w2 = bandLimit(17.0, px);
    float w3 = bandLimit(7.0, px);

    // t is seconds; uFlow is a cinematic multiplier so the current reads from
    // a downtown camera instead of waiting a minute for a 200 m wave to pass.
    float adv = t;
    vec3 n0 = vnoiseD(vec2(along * 0.00435 - adv * 0.055, side * 0.0096));
    // Warp is measured in cells of the octave it is applied to, so a little
    // goes a long way: half a cell is enough to break the lattice alignment,
    // while a couple of cells shears the whole field into paint marbling.
    vec2 warp = n0.yz * 0.55;

    vec3 n1 = w1 > 0.0
      ? vnoiseD(ROT1 * vec2(along * 0.0109 - adv * 0.14, side * 0.0238) + warp)
      : vec3(0.5, 0.0, 0.0);
    vec3 n2 = w2 > 0.0
      ? vnoiseD(ROT2 * vec2(along * 0.027 - adv * 0.34, side * 0.059) + warp * 1.35)
      : vec3(0.5, 0.0, 0.0);
    vec3 n3 = w3 > 0.0
      ? vnoiseD(ROT3 * vec2(along * 0.067 - adv * 0.82, side * 0.145) + warp * 1.7)
      : vec3(0.5, 0.0, 0.0);

    // Current lines: 8:1 anisotropy, which on its own would be exactly the
    // corduroy failure mode, so it is warped, advected, and kept to a few per
    // cent of contrast. It works through the ripple energy rather than the
    // albedo, because that is what a shear line physically is — a band where
    // the surface goes slick between rippled water — and because albedo is such
    // a small part of what a river reflects that anything painted on it is
    // invisible from the air.
    float wl = bandLimit(28.0, px);
    float lines = wl > 0.0
      ? vnoiseD(vec2(along * 0.0046 - adv * 0.095, side * 0.0357) + warp * 0.8).x
      : 0.5;

    // A dedicated current sheet, long enough to survive an aerial pixel
    // footprint. The old 14 m band vanished from The Point and downtown
    // cameras, which is why the rivers looked painted on.
    float wc = bandLimit(52.0, px);
    float current = wc > 0.0
      ? vnoiseD(vec2(along * 0.0072 - adv * 0.19, side * 0.0195) + warp * 0.7).x
      : 0.5;
    float wb = bandLimit(110.0, px);
    float broad = wb > 0.0
      ? vnoiseD(vec2(along * 0.0032 - adv * 0.085, side * 0.0074) + warp * 0.35).x
      : 0.5;

    River r;
    r.shade = 0.5
      + (n0.x - 0.5) * 0.34 * w0
      + (n1.x - 0.5) * 0.26 * w1
      + (n2.x - 0.5) * 0.20 * w2
      + (n3.x - 0.5) * 0.14 * w3
      + (current - 0.5) * 0.28 * wc
      + (broad - 0.5) * 0.22 * wb;

    // Slopes stay small on purpose: a navigable pool-stage river is close to
    // glassy, and one degree of tilt already swings the reflected ray two
    // degrees, which is plenty against a sky gradient this steep. Anything
    // steeper starts reading as sea state, and none of these rivers has any.
    r.slope = n0.yz * 0.0105 * w0
      + n1.yz * 0.0145 * w1
      + n2.yz * 0.0135 * w2
      + n3.yz * 0.0115 * w3;

    // Local ripple energy, from the gradients that are already in hand. The
    // scale matters: value-noise derivatives peak near 1.5, so an unscaled sum
    // pins this at 1.0 over the entire river, which flattens the roughness and
    // the reflection blend into constants and takes all the life out of the
    // surface. Calibrated so the mean lands near 0.35.
    r.chop = clamp(
      ((abs(n2.y) + abs(n2.z)) * w2 + (abs(n3.y) + abs(n3.z)) * w3) * 0.30
      + (lines - 0.5) * 0.26 * wl
      + (current - 0.5) * 0.34 * wc,
      0.0, 1.0);
    r.foam = clamp((current - 0.52) * 1.8 * wc + (broad - 0.55) * 1.1 * wb + (lines - 0.62) * 1.4 * wl, 0.0, 1.0);
    return r;
  }`;function dv(i){return`
    vec3 riverSurround(vec3 dir) {
      vec3 sky = mix(${i?"vec3(0.482, 0.661, 0.871)":"vec3(0.0100, 0.0215, 0.0410)"}, ${i?"vec3(0.068, 0.278, 0.697)":"vec3(0.0010, 0.0020, 0.0050)"}, pow(clamp(dir.y, 0.0, 1.0), 0.55));
      // The bluffs and the North Shore blocks subtend 15-30 degrees from
      // mid-channel, so the crossover into open sky sits around 20 degrees,
      // well above the geometric horizon.
      return mix(${i?"vec3(0.072, 0.082, 0.079)":"vec3(0.0150, 0.0110, 0.0075)"}, sky, smoothstep(0.055, 0.620, dir.y));
    }`}function pv({dayMode:i=!0}={}){const t={uTime:{value:0},uFlow:{value:1},uPrecip:{value:0}},e=new Le({color:i?3095093:528404,roughness:i?.28:.26,metalness:0,transparent:!0,opacity:i?.975:.985,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});return e.customProgramCacheKey=()=>"river-surface-flow-v2",e.onBeforeCompile=n=>{n.uniforms.uTime=t.uTime,n.uniforms.uFlow=t.uFlow,n.uniforms.uPrecip=t.uPrecip,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
         varying vec3 vWorldPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
         vWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`);const s=`
      uniform float uTime;
      uniform float uFlow;
      uniform float uPrecip;
      varying vec3 vWorldPos;
      ${uv}
      ${hv}
      ${fv}
      ${dv(i)}`;n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>${s}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
         vec2 rFlow = riverFlow(vWorldPos.xz);
         vec2 rAcross = vec2(-rFlow.y, rFlow.x);
         // Metres of river per screen pixel, straight off the interpolated
         // world position. At grazing angles this grows fast, which is exactly
         // where the fine octaves have to go away.
         float rPx = max(length(fwidth(vWorldPos.xz)), 0.02);
         River rField = riverField(vWorldPos.xz, rFlow, uTime * uFlow, rPx);
         vec3 rNormalW = normalize(vec3(
           -(rField.slope.x * rFlow.x + rField.slope.y * rAcross.x),
           1.0,
           -(rField.slope.x * rFlow.y + rField.slope.y * rAcross.y)));
         vec3 rViewW = normalize(cameraPosition - vWorldPos);`).replace("#include <color_fragment>",`#include <color_fragment>
         {
           // The Monongahela runs over shale and sandstone and carries enough
           // silt to read visibly browner than the gravel-bedded Allegheny; the
           // Ohio below the Point is the two of them still mixing, and by the
           // West End it has evened out. The split is by Z because the Mon
           // enters from the south-east.
           float mon = smoothstep(-140.0, 430.0, vWorldPos.z) * smoothstep(-1400.0, -720.0, vWorldPos.x);
           float ohio = 1.0 - smoothstep(-1500.0, -650.0, vWorldPos.x);
           // Suspended silt both warms the water and raises its diffuse albedo,
           // so this has to be a mix towards a sediment colour rather than a
           // tint multiplier: the base albedo is green-dominant, and scaling it
           // by anything keeps it green. Load is not uniform either — silt comes
           // down in plumes and hangs over the shallow inside of every bend.
           float plume = smoothstep(0.56, 0.96, rField.shade) * 0.22;
           diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.055, 0.039, 0.021),
             clamp(max(mon, ohio * 0.45) * 0.82 + plume, 0.0, 1.0));
           diffuseColor.rgb *= 0.82 + rField.shade * 0.38;
           // Moving foam on the current sheet is what makes the river read as
           // flowing from a few hundred metres up, where the ripple stack is
           // only a slow morph.
           float foam = rField.foam;
           foam += step(0.5, uPrecip) * step(uPrecip, 1.5) * rField.chop * 0.35;
           diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.46, 0.52, 0.50), clamp(foam, 0.0, 1.0) * 0.55);
           // Snow: paler, quieter surface.
           diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.22, 0.26, 0.28), step(1.5, uPrecip) * 0.28);
         }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
         // Glassy in the slack water, rougher where the ripple field has some
         // energy. Varying it this way is what turns one hard specular blob
         // into a broken glitter path, and because chop is already band-limited
         // the far bank stops sparkling once the ripples go subpixel.
         roughnessFactor = clamp(roughnessFactor + rField.chop * 0.30 - 0.07
           + step(0.5, uPrecip) * step(uPrecip, 1.5) * 0.10
           - step(1.5, uPrecip) * 0.08, 0.09, 0.70);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
         normal = normalize((viewMatrix * vec4(rNormalW, 0.0)).xyz);`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
         float rNdv = clamp(dot(rViewW, rNormalW), 0.0, 1.0);
         {
           // Schlick against water's real F0 of 0.02. Left alone: it tracks the
           // exact Fresnel curve for n=1.333 to within a per cent, and every
           // attempt to "widen" it is what makes water look like wet plastic.
           float fres = 0.02 + 0.98 * pow(1.0 - rNdv, 5.0);
           // A rippled patch gathers its reflection from a cone around the
           // mirror direction, so it averages towards straight up; a slick
           // patch takes the mirror direction alone. On a river that difference
           // is most of the visible mottling, because up is bright sky and the
           // mirror direction is usually the dark far bank.
           vec3 refl = normalize(mix(reflect(-rViewW, rNormalW), rNormalW, 0.03 + rField.chop * 0.20));
           reflectedLight.indirectSpecular = riverSurround(refl) * fres;
         }
         // The scene lights the city with a sun plus a low fill from the
         // opposite quarter. On matte surfaces the fill only softens shadows,
         // but a near-mirror plane resolves it as a second sun: its half-vector
         // with any downward view is almost straight up, so its GGX lobe covers
         // every river at once as a single enormous sheet an order of magnitude
         // brighter than the water under it. Only the primary sun gets a lobe
         // here, wide and rolled off so the glitter reads as a soft path.
         //
         // The cost is that the glitter ignores shadows. That is close to free
         // on water this dark — a bridge shadow was already invisible in the
         // diffuse term — but it does mean the lobe follows directionalLights[0],
         // so the sun has to stay the first directional light added to the scene.
         reflectedLight.directSpecular = vec3(0.0);
         #if NUM_DIR_LIGHTS > 0
         {
           vec3 sunW = inverseTransformDirection(directionalLights[0].direction, viewMatrix);
           vec3 halfW = normalize(sunW + rViewW);
           float ndl = max(dot(rNormalW, sunW), 0.0);
           // Effective slope distribution of the ripple field, wider than the
           // shading roughness on purpose: a glitter path on a river a kilometre
           // off is tens of degrees long, and a tight lobe is what collapses it
           // into a blob.
           float alpha = 0.130 + rField.chop * 0.32;
           vec3 lobe = directionalLights[0].color * ndl
             * F_Schlick(vec3(0.02), 1.0, max(dot(rViewW, halfW), 0.0))
             * V_GGX_SmithCorrelated(alpha, ndl, rNdv)
             * D_GGX(alpha, max(dot(rNormalW, halfW), 0.0));
           reflectedLight.directSpecular += lobe / (1.0 + lobe * 3.4);
         }
         #endif`)},{mat:e,uniforms:t}}function mv(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function gi(i,{color:t=!0,repeat:e=1,renderer:n=null}={}){const s=new rs(i);s.wrapS=Qi,s.wrapT=Qi,s.generateMipmaps=!0,s.minFilter=Ci,s.magFilter=Gn;const o=n?.capabilities?.getMaxAnisotropy?.()??8;return s.anisotropy=Math.min(16,o),s.repeat.set(e,e),s.colorSpace=t?Be:ui,s.needsUpdate=!0,s}function gv(i,t){const e=document.createElement("canvas");e.width=i,e.height=t;const n=document.createElement("canvas");n.width=i,n.height=t;const s=document.createElement("canvas");return s.width=i,s.height=t,{color:e,emissive:n,rough:s,c:e.getContext("2d"),e:n.getContext("2d"),r:s.getContext("2d")}}let zc=!0;function Vi(i,t=.45){if(!zc)return i;const e=/^#([0-9a-f]{6})$/i.exec(i);if(!e)return i;const n=parseInt(e[1],16),s=[16,8,0].map(o=>{const r=(n>>o&255)/255;return Math.round(Math.min(1,r**t)*255)});return`rgb(${s[0]},${s[1]},${s[2]})`}function ic(i){const t=/^#([0-9a-f]{6})$/i.exec(i);if(t){const n=parseInt(t[1],16);return[n>>16&255,n>>8&255,n&255]}const e=/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i.exec(i);return e?[Number(e[1]),Number(e[2]),Number(e[3])]:[128,128,128]}function fn(i,t){const[e,n,s]=ic(i),o=r=>Math.max(0,Math.min(255,Math.round(r*t)));return`rgb(${o(e)},${o(n)},${o(s)})`}function fo(i,t,e){const n=ic(i),s=ic(t),o=r=>Math.round(n[r]+(s[r]-n[r])*e);return`rgb(${o(0)},${o(1)},${o(2)})`}const tl=.0156,_v=.0469,xv=.0156;function el(i,t,e,n,s){const o=Math.max(4,Math.round(e*xv));for(const r of[0,e-o])i.fillStyle=n,i.fillRect(0,r,Math.round(t*tl),o),i.fillStyle=s,i.fillRect(Math.round(t*tl),r,Math.round(t*(_v-tl)),o)}function In(i,t){const e=n=>Math.round(Math.max(0,Math.min(1,n))*255);return`rgb(0,${e(i)},${e(t)})`}function Br(i,t,e,n,s,o,r,a){const l=n<o?[n,n+t]:n>t-o?[n,n-t]:[n],c=s<o?[s,s+e]:s>e-o?[s,s-e]:[s];for(const u of l)for(const h of c){const f=i.createRadialGradient(u,h,0,u,h,o);f.addColorStop(0,`rgba(${r},${a})`),f.addColorStop(1,`rgba(${r},0)`),i.fillStyle=f,i.fillRect(u-o,h-o,o*2,o*2)}}function vv(i,t,e,n,s,o){i.fillStyle=s,i.fillRect(0,0,t,e);for(let l=0,c=0;l<e;l+=7,c++){const u=.88+o()*.26,h=c%2?15*.5:0;for(let f=-15;f<t+15;f+=15){const d=o();i.fillStyle=fn(n,u*(d<.07?.48+d:.82+d*.44)),i.fillRect(f+h,l,15-1.5,7-1.5)}}}function Mv(i,t,e,n,s,o,r=32,a=22){i.fillStyle=s,i.fillRect(0,0,t,e);for(let l=0,c=0;l<e;l+=a,c++){const u=.96+o()*.08,h=c%2?r*.5:0;for(let f=-r;f<t+r;f+=r)i.fillStyle=fn(n,u*(.95+o()*.1)),i.fillRect(f+h,l,r-1.2,a-1.2)}}function yv(i,t,e,n,s,o,r=3,a=4){i.fillStyle=n,i.fillRect(0,0,t,e);const l=t/r,c=e/a;for(let u=0;u<a;u++)for(let h=0;h<r;h++)i.fillStyle=fn(n,.96+o()*.09),i.fillRect(h*l,u*c,l-2,c-2),i.fillStyle=s,i.fillRect(h*l+l-2,u*c,2,c),i.fillRect(h*l,u*c+c-2,l,2)}function Sv(i,t,e,n,s,o,r){i.fillStyle=n,i.fillRect(0,0,t,e);const a=t/r;for(let l=0;l<r;l++)i.fillStyle=fn(n,.9+o()*.2),i.fillRect(l*a,0,a,e),i.fillStyle=fn(s,.9),i.fillRect(l*a,0,1.5,e);for(let l=0;l<140;l++)Br(i,t,e,o()*t,o()*e,8+o()*26,"92,52,26",.05+o()*.1)}const Fh=.31;function nl(i,t,e,n,s,o){const{glazing:r,sky:a,rand:l,day:c,lit:u,windowLit:h,band:f=1,facet:d=1,skyGain:p=1,dim:_=1,jitter:g=1}=o;if(u){const T=c?fo(h,r,.5):h,b=i.createLinearGradient(t,e,t,e+s);b.addColorStop(0,T),b.addColorStop(1,fn(T,.6)),i.fillStyle=b,i.fillRect(t,e,n,s);return}if(!c){i.fillStyle=fn(r,.85+l()*.3),i.fillRect(t,e,n,s);return}const m=l(),M=m<.08?.46+m*1:m<.3?.06+m*.2:.14+m*.34,v=p*(Fh+(M-Fh)*g),x=f*d*_*(1-.14*g+l()*.28*g),w=i.createLinearGradient(t,e,t,e+s);w.addColorStop(0,fn(fo(r,a,Math.min(.96,v+.2*p)),x)),w.addColorStop(.62,fn(fo(r,a,v),x)),w.addColorStop(1,fn(fo(r,a,v*.35),x*.9)),i.fillStyle=w,i.fillRect(t,e,n,s)}function wv(i){const{seed:t=1,width:e=512,height:n=512,cols:s=6,rows:o=8,litChance:r=.32,wall:a="stone",era:l="punched",winW:c=.44,winH:u=.58,headDrop:h=.16,pierW:f=0,bandH:d=.48,spandrelH:p=.3,mullionW:_=.06,facetBays:g=0,skyGain:m=l==="punched"||l==="panel"?.38:1,paneJitter:M=l==="curtain"?.42:l==="ribbon"?.7:1,beltCourse:v=!1,soot:x=0,wallRough:w=.9,wallMetal:T=.03,glassRough:b=.16,glassMetal:A=.5,trimRough:y=.84,roofRough:S=.82,windowLit:R="#e0b25a"}=i,D=zc,F=D&&i.day||{},O=F.base??Vi(i.base??"#3d322c"),z=F.mortar??Vi(i.mortar??"#2a2420"),H=F.windowDark??(D?Vi(i.windowDark??"#07090d",.62):i.windowDark??"#07090d"),J=F.trim??(i.trim?Vi(i.trim):fn(O,D?1.14:1.2)),G=F.spandrel??(i.spandrel?Vi(i.spandrel):fn(O,D?.8:.68)),et=F.mullion??(i.mullion?Vi(i.mullion):D?fo(O,"#e8e8e4",.4):"#1a1816"),Y=F.roofPin??(i.roofPin?Vi(i.roofPin):D?"#4c4a46":"#1a1816"),Q=F.sky??(D?"#c6dcf0":"#20303c"),V=mv(t),{color:ot,emissive:X,rough:L,c:I,e:k,r:$}=gv(e,n);k.fillStyle="#000",k.fillRect(0,0,e,n),$.fillStyle=In(w,T),$.fillRect(0,0,e,n);const at=D?r*.07:r;a==="brick"?vv(I,e,n,O,z,V):a==="panel"?yv(I,e,n,O,z,V,3,o):a==="oxide"?Sv(I,e,n,O,z,V,s):a==="metal"?(I.fillStyle=O,I.fillRect(0,0,e,n)):Mv(I,e,n,O,z,V);for(let N=0;N<Math.round(x*26);N++)Br(I,e,n,V()*e,V()*n,70+V()*130,"30,24,18",.05+V()*.1);for(let N=0;N<Math.round(x*110);N++)Br(I,e,n,V()*e,V()*n,10+V()*40,"26,20,15",.04+V()*.12);for(let N=0;N<Math.round(x*18);N++)Br(I,e,n,V()*e,V()*n,40+V()*90,"236,230,214",.03+V()*.07);const ct=e/s,ht=n/o,gt=N=>Math.max(1,Math.round(N)),Et=N=>1+.05*Math.sin(N/o*Math.PI*2);if(l==="punched"||l==="panel"){const N=ct*c,Ht=ht*u,At=(ct-N)/2,it=gt(ht*.045);for(let Z=0;Z<o;Z++){const pt=Z*ht+ht*h;I.fillStyle=J,I.fillRect(0,pt+Ht,e,gt(ht*.03)),v&&(I.fillStyle=fn(J,.9),I.fillRect(0,pt-gt(ht*.035),e,gt(ht*.035))),$.fillStyle=In(y,T),$.fillRect(0,pt+Ht,e,gt(ht*.03))}if(f>0){const Z=gt(ct*f);for(let pt=0;pt<s;pt++){const dt=pt*ct;I.fillStyle=fn(J,1.02),I.fillRect(dt-Z*.5,0,Z,n),I.fillStyle="rgba(0,0,0,0.16)",I.fillRect(dt+Z*.5-gt(Z*.22),0,gt(Z*.22),n)}}for(let Z=0;Z<o;Z++){const pt=Et(Z);for(let dt=0;dt<s;dt++){const P=V()<at,E=dt*ct+At,W=Z*ht+ht*h;I.fillStyle=`rgba(0,0,0,${D?.24:.5})`,I.fillRect(E-1,W-1,N+2,Ht+2),nl(I,E,W,N,Ht,{glazing:H,sky:Q,rand:V,day:D,lit:P,windowLit:R,band:pt,skyGain:m,dim:.82}),I.fillStyle=`rgba(0,0,0,${D?.44:.5})`,I.fillRect(E,W,N,it),I.fillRect(E,W,gt(it*.7),Ht),I.fillStyle="rgba(255,250,240,0.13)",I.fillRect(E+N-gt(it*.5),W+it,gt(it*.5),Ht-it),k.fillStyle=P?R:"#000",k.fillRect(E,W,N,Ht),$.fillStyle=In(b,A),$.fillRect(E,W,N,Ht),P&&V()<.45?(I.fillStyle="rgba(255,230,180,0.25)",I.fillRect(E+1,W+1,N*.4,Ht*.35)):!P&&V()<.18&&(I.fillStyle=D?"rgba(214,209,196,0.2)":"rgba(120,124,132,0.16)",I.fillRect(E+it,W+it,N-it*2,Ht*(.16+V()*.44)))}}}else if(l==="ribbon"){const N=ht*d,Ht=gt(ct*_);for(let At=0;At<o;At++){const it=At*ht+ht*h,Z=Et(At);I.fillStyle=G,I.fillRect(0,it+N,e,ht-N),$.fillStyle=In(w*.8,T+.06),$.fillRect(0,it+N,e,ht-N);for(let pt=0;pt<s;pt++){const dt=V()<at,P=pt*ct;nl(I,P,it,ct,N,{glazing:H,sky:Q,rand:V,day:D,lit:dt,windowLit:R,band:Z,skyGain:m,jitter:M}),k.fillStyle=dt?R:"#000",k.fillRect(P,it,ct,N)}$.fillStyle=In(b,A),$.fillRect(0,it,e,N),I.fillStyle=`rgba(0,0,0,${D?.38:.45})`,I.fillRect(0,it,e,gt(N*.12));for(let pt=0;pt<s;pt++)I.fillStyle=et,I.fillRect(pt*ct,it,Ht,N),I.fillStyle="rgba(0,0,0,0.3)",I.fillRect(pt*ct+Ht,it,gt(Ht*.5),N);I.fillStyle=fn(J,1.04),I.fillRect(0,it+N,e,gt(ht*.035)),$.fillStyle=In(y,T),$.fillRect(0,it+N,e,gt(ht*.035))}}else{const N=ht*(1-p),Ht=gt(ct*_),At=[];for(let it=0;it<s;it++){const Z=Math.abs(Math.sin((it+1)*12.9898+t)*43758.5453);At.push(.88+(Z-Math.floor(Z))*.24)}for(let it=0;it<o;it++){const Z=it*ht,pt=Et(it);I.fillStyle=G,I.fillRect(0,Z+N,e,ht-N),$.fillStyle=In(w*.7,T+.1),$.fillRect(0,Z+N,e,ht-N),I.fillStyle="rgba(0,0,0,0.22)",I.fillRect(0,Z+N,e,gt(ht*.03));for(let dt=0;dt<s;dt++){const P=V()<at,E=g?dt%g===0?1.3:dt%g===1?.7:.98:1,W=dt*ct;nl(I,W,Z,ct,N,{glazing:H,sky:Q,rand:V,day:D,lit:P,windowLit:R,band:pt,skyGain:m,facet:E*At[dt],jitter:M}),k.fillStyle=P?R:"#000",k.fillRect(W,Z,ct,N)}$.fillStyle=In(b,A),$.fillRect(0,Z,e,N),I.fillStyle=`rgba(0,0,0,${D?.26:.4})`,I.fillRect(0,Z,e,gt(ht*.03));for(let dt=0;dt<s;dt++)I.fillStyle=et,I.fillRect(dt*ct,Z,Ht,ht),I.fillStyle="rgba(0,0,0,0.34)",I.fillRect(dt*ct+Ht,Z,gt(Ht*.6),ht),$.fillStyle=In(w*.6,T+.2),$.fillRect(dt*ct,Z,Ht,ht)}if(f>0){const it=gt(ct*f);for(let Z=0;Z<s;Z++){const pt=Z*ct-it*.5;I.fillStyle=O,I.fillRect(pt,0,it,n),I.fillStyle="rgba(0,0,0,0.3)",I.fillRect(pt+it*.66,0,gt(it*.34),n),I.fillStyle="rgba(255,244,228,0.1)",I.fillRect(pt,0,gt(it*.3),n),$.fillStyle=In(w,T),$.fillRect(pt,0,it,n)}}}return el(I,e,n,Y,J),el(k,e,n,"#000","#000"),el($,e,n,In(S,T),In(y,T)),{map:gi(ot),emissiveMap:gi(X),roughnessMap:gi(L,{color:!1})}}function Vs(i,t,e){const n=document.createElement("canvas");n.width=i,n.height=t;const s=n.getContext("2d");return e(s,i,t),n}function bv(i=!0){const t=Vs(256,256,(n,s,o)=>{n.fillStyle=i?"#416b39":"#1c3a22",n.fillRect(0,0,s,o);const r=i?78:0;for(let a=0;a<2200;a++){const l=70+r+Math.random()*50;n.fillStyle=`rgba(${30+r+Math.random()*20},${l},${40+r*.5+Math.random()*20},${.18+Math.random()*.25})`,n.fillRect(Math.random()*s,Math.random()*o,1+Math.random()*2,2+Math.random()*4)}}),e=Vs(256,256,(n,s,o)=>{n.fillStyle="#d8d8d8",n.fillRect(0,0,s,o);for(let r=0;r<800;r++)n.fillStyle=`rgba(255,255,255,${Math.random()*.2})`,n.fillRect(Math.random()*s,Math.random()*o,3,3)});return{map:gi(t,{repeat:2}),roughnessMap:gi(e,{color:!1,repeat:2})}}function Ev(){const i=Vs(256,256,(e,n,s)=>{e.fillStyle="#8a8680",e.fillRect(0,0,n,s);for(let o=0;o<3e3;o++){const r=110+Math.random()*50;e.fillStyle=`rgba(${r},${r-6},${r-14},${.12+Math.random()*.2})`,e.fillRect(Math.random()*n,Math.random()*s,2,2)}}),t=Vs(256,256,(e,n,s)=>{e.fillStyle="#c4c4c4",e.fillRect(0,0,n,s);for(let o=0;o<600;o++)e.fillStyle=`rgba(0,0,0,${Math.random()*.15})`,e.fillRect(Math.random()*n,Math.random()*s,4,4)});return{map:gi(i,{repeat:10}),roughnessMap:gi(t,{color:!1,repeat:10})}}function Tv(i=!0){const t=Vs(256,256,(e,n,s)=>{e.fillStyle=i?"#74777c":"#26282e",e.fillRect(0,0,n,s);for(let r=0;r<900;r++)e.fillStyle=`rgba(0,0,0,${Math.random()*.14})`,e.fillRect(Math.random()*n,Math.random()*s,3,3);e.strokeStyle=i?"rgba(226,222,206,0.5)":"rgba(150,146,132,0.3)",e.lineWidth=2;const o=n/8;for(const[r,a]of[[s*.06,s*.36],[s*.54,s*.84]]){for(let l=0;l<=n;l+=o)e.beginPath(),e.moveTo(l,r),e.lineTo(l,a),e.stroke();e.beginPath(),e.moveTo(0,r),e.lineTo(n,r),e.stroke()}});return{map:gi(t,{repeat:1})}}function Av(i=!0){const t=Vs(128,128,(e,n,s)=>{e.fillStyle=i?"#6e7076":"#2a2c32",e.fillRect(0,0,n,s),e.fillStyle="rgba(210,200,160,0.35)",e.fillRect(n*.48,0,2,s);for(let o=0;o<200;o++)e.fillStyle=`rgba(0,0,0,${Math.random()*.15})`,e.fillRect(Math.random()*n,Math.random()*s,3,2)});return{map:gi(t,{repeat:1})}}function Rv(){const i=document.createElement("canvas");i.width=256,i.height=128;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,128);e.addColorStop(0,"#05070c"),e.addColorStop(.46,"#0a121c"),e.addColorStop(.52,"#2a2218"),e.addColorStop(.58,"#10141a"),e.addColorStop(1,"#07090e"),t.fillStyle=e,t.fillRect(0,0,256,128);for(let s=0;s<80;s++)t.fillStyle=`rgba(255,220,160,${.04+Math.random()*.08})`,t.fillRect(Math.random()*256,62+Math.random()*10,3+Math.random()*8,1);const n=new rs(i);return n.mapping=wo,n.colorSpace=Be,n.needsUpdate=!0,n}function Cv(i,t={}){return new Le({map:i.map,roughnessMap:i.roughnessMap,metalnessMap:i.roughnessMap,emissiveMap:i.emissiveMap,color:t.color??16777215,roughness:t.roughness??1,metalness:t.metalness??1,emissive:t.emissive??16764040,emissiveIntensity:t.emissiveIntensity??0,vertexColors:t.vertexColors??!0,envMapIntensity:t.envMapIntensity??.35})}const Pv=170,Lv=560;function Dv(i){const t=new Le({color:i?7106663:2898487,roughness:.82,metalness:.06,emissive:1056792,emissiveIntensity:i?0:.12,side:Cn,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying float vFoamDepth;`).replace("#include <project_vertex>",`#include <project_vertex>
	vFoamDepth = -mvPosition.z;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vFoamDepth;`).replace("#include <color_fragment>",`#include <color_fragment>
	diffuseColor.a *= 1.0 - smoothstep( ${Pv.toFixed(1)}, ${Lv.toFixed(1)}, vFoamDepth );`)},t.customProgramCacheKey=()=>"foam-distance-fade",t}const Oh=.06;function Iv({dayMode:i=!0}={}){zc=i;const t=(g,m={})=>Cv(wv(i?{...g,litChance:(g.litChance??.3)*Oh}:g),i?{...m,emissiveIntensity:(m.emissiveIntensity??0)*Oh}:m),e={lowrise:{mat:t({seed:11,base:"#3a322c",mortar:"#2a241e",day:{base:"#8a4a37",mortar:"#655045",windowDark:"#2e3740",trim:"#7d7060",roofPin:"#4a4640"},cols:5,rows:6,litChance:.18,wall:"brick",era:"punched",winW:.4,winH:.54,soot:.9,wallRough:.95,glassRough:.55,glassMetal:.08},{emissiveIntensity:.55,envMapIntensity:.3}),floorH:3.6,windowW:3.8},brick:{mat:t({seed:22,base:"#4a3028",mortar:"#2c1e1a",day:{base:"#6f4031",mortar:"#524036",windowDark:"#2a323b",trim:"#6e6152",roofPin:"#454239"},cols:6,rows:8,litChance:.28,wall:"brick",era:"punched",winW:.44,winH:.6,beltCourse:!0,soot:1.1,wallRough:.93,glassRough:.52,glassMetal:.09},{emissiveIntensity:.7,envMapIntensity:.32}),floorH:3.7,windowW:3.4},limestone:{mat:t({seed:33,base:"#5c584c",mortar:"#3a3830",day:{base:"#b6afa0",mortar:"#948d7e",windowDark:"#39434e",trim:"#c2bbab",roofPin:"#494741"},windowLit:"#e8c878",cols:6,rows:8,litChance:.3,wall:"stone",era:"punched",winW:.46,winH:.62,beltCourse:!0,soot:.55,wallRough:.86,glassRough:.44,glassMetal:.14},{emissiveIntensity:.72,envMapIntensity:.4}),floorH:3.8,windowW:3.3},steel:{mat:t({seed:44,base:"#3a4048",mortar:"#2a3038",windowDark:"#0a1014",day:{base:"#a89f94",mortar:"#857d72",windowDark:"#3f4c54",spandrel:"#948c82",mullion:"#c2b8a9",trim:"#a89d8c",roofPin:"#464442"},windowLit:"#d8c090",cols:8,rows:10,litChance:.38,wall:"panel",era:"ribbon",bandH:.42,headDrop:.2,mullionW:.055,soot:.3,wallRough:.72,glassRough:.34,glassMetal:.34},{emissiveIntensity:.8,envMapIntensity:i?.4:.8}),floorH:3.5,windowW:3},glass:{mat:t({seed:55,base:"#1a2830",mortar:"#0e181e",windowDark:"#0a1418",day:{base:"#333c44",mortar:"#242c33",windowDark:"#242d35",spandrel:"#1b2127",mullion:"#6b747c",trim:"#3d454c",roofPin:"#33383c"},windowLit:"#c8d8e8",cols:8,rows:10,litChance:.42,wall:"metal",era:"curtain",spandrelH:.28,mullionW:.05,wallRough:.52,glassRough:.38,skyGain:.66,glassMetal:.28},{emissive:11060440,emissiveIntensity:.85,envMapIntensity:i?.3:1.1}),floorH:3.45,windowW:2.7},ppg:{mat:t({seed:66,base:"#0c1c1c",mortar:"#061010",windowDark:"#061014",day:{base:"#3a4145",mortar:"#2a2f33",windowDark:"#282e32",spandrel:"#1d2124",mullion:"#79828a",trim:"#3a4045",roofPin:"#2a2f34"},windowLit:"#cdd4d6",cols:8,rows:12,litChance:.34,wall:"metal",era:"curtain",spandrelH:.16,mullionW:.05,facetBays:3,wallRough:.4,glassRough:.34,glassMetal:.3,skyGain:.58},{emissive:6989976,emissiveIntensity:.75,envMapIntensity:i?.4:1.2,vertexColors:!1}),floorH:3.4,windowW:2.5},gothic:{mat:t({seed:77,base:"#6a6458",mortar:"#3e3a32",windowDark:"#0c0e12",day:{base:"#af9e7f",mortar:"#8d7f65",windowDark:"#2f3843",trim:"#c4af8a",roofPin:"#4a4740"},windowLit:"#e8d090",cols:5,rows:6,litChance:.22,wall:"stone",era:"punched",winW:.5,winH:.76,headDrop:.1,pierW:.2,soot:1.2,wallRough:.88,glassRough:.2,glassMetal:.22},{emissiveIntensity:.6,envMapIntensity:.35}),floorH:5.4,windowW:2.5},stadium:{mat:t({seed:88,base:"#3a4034",mortar:"#2a2c26",windowDark:"#121410",day:{base:"#a3998c",mortar:"#7e766a",windowDark:"#2b333c",trim:"#b0a695",roofPin:"#4a4b4c"},windowLit:"#d0c080",cols:4,rows:4,litChance:.2,wall:"panel",era:"panel",winW:.52,winH:.4,soot:.25,wallRough:.74,glassRough:.2,glassMetal:.4},{emissiveIntensity:.45,envMapIntensity:.5}),floorH:8.5,windowW:10},artdeco:{mat:t({seed:91,base:"#6a6458",mortar:"#4a4438",windowDark:"#0c0e10",day:{base:"#cbb183",mortar:"#a89168",windowDark:"#333c47",trim:"#dbbb86",roofPin:"#4c4840"},windowLit:"#e8d090",cols:5,rows:9,litChance:.26,wall:"stone",era:"punched",winW:.42,winH:.78,headDrop:.08,pierW:.34,soot:.7,wallRough:.84,glassRough:.42,glassMetal:.14},{emissiveIntensity:.65,envMapIntensity:.38}),floorH:4.2,windowW:2.8},chapel:{mat:t({seed:92,base:"#6e6860",mortar:"#3e3a34",windowDark:"#080a0c",day:{base:"#958772",mortar:"#776b5a",windowDark:"#2c3540",trim:"#a4947d",roofPin:"#43413c"},windowLit:"#d8c878",cols:4,rows:5,litChance:.18,wall:"stone",era:"punched",winW:.36,winH:.8,headDrop:.08,soot:1.2,wallRough:.92,glassRough:.26,glassMetal:.14},{emissiveIntensity:.5,envMapIntensity:.3}),floorH:5.8,windowW:2.2},sandstone:{mat:t({seed:93,base:"#7a7060",mortar:"#4a4438",windowDark:"#0a0c0e",day:{base:"#987754",mortar:"#755a3d",windowDark:"#2e3740",trim:"#af8e67",roofPin:"#443b30"},windowLit:"#e0c070",cols:6,rows:7,litChance:.2,wall:"stone",era:"punched",winW:.42,winH:.62,soot:1.3,wallRough:.94,glassRough:.5,glassMetal:.1},{emissiveIntensity:.45,envMapIntensity:.28}),floorH:4.5,windowW:3.6},copper:{mat:t({seed:94,base:"#4a6a58",mortar:"#2a4038",windowDark:"#0a1010",day:{base:"#ceb487",mortar:"#ab9469",windowDark:"#39434f",trim:"#ddbd89",roofPin:"#708468"},windowLit:"#c8d8a0",cols:5,rows:8,litChance:.22,wall:"stone",era:"punched",winW:.44,winH:.66,pierW:.18,beltCourse:!0,soot:.7,wallRough:.86,glassRough:.24,glassMetal:.26},{emissiveIntensity:.55,envMapIntensity:.4,vertexColors:!1}),floorH:3.9,windowW:3.2},convention:{mat:t({seed:95,base:"#c8ccc8",mortar:"#a0a4a0",windowDark:"#101418",day:{base:"#c6cacd",mortar:"#a6abaf",windowDark:"#3d4d59",spandrel:"#a9aeb2",mullion:"#e0e4e6",trim:"#ccd0d3",roofPin:"#586066"},windowLit:"#e8ece8",cols:10,rows:4,litChance:.35,wall:"metal",era:"ribbon",bandH:.58,headDrop:.14,mullionW:.05,wallRough:.42,glassRough:.3,glassMetal:.32},{emissiveIntensity:.6,envMapIntensity:.5}),floorH:6,windowW:5},glasshouse:{mat:t({seed:97,base:"#b8c0bc",mortar:"#98a09c",windowDark:"#9aa8ac",day:{base:"#d8dcd6",mortar:"#b4b8b0",windowDark:"#c4d2ce",spandrel:"#cfd4ce",mullion:"#eef0ea",trim:"#e8ece6",roofPin:"#d4dedc",sky:"#e2ecf2"},windowLit:"#f0f2e6",cols:6,rows:8,litChance:.1,wall:"metal",era:"punched",winW:.84,winH:.84,headDrop:.08,skyGain:1,wallRough:.46,glassRough:.1,glassMetal:.12,trimRough:.4,roofRough:.14},{emissiveIntensity:.35,envMapIntensity:.55,vertexColors:!1}),floorH:2,windowW:1.6},steelTower:{mat:t({seed:96,base:"#5a4030",mortar:"#3a2818",windowDark:"#080808",day:{base:"#a1704e",mortar:"#6a4530",windowDark:"#2f2a24",spandrel:"#8a5e42",mullion:"#453b32",trim:"#a7754e",roofPin:"#453930",sky:"#8c7458"},windowLit:"#d0a870",cols:7,rows:11,litChance:0,wall:"oxide",era:"curtain",spandrelH:.36,mullionW:.07,pierW:.44,skyGain:.3,wallRough:.7,glassRough:.36,glassMetal:.34},{emissiveIntensity:0,envMapIntensity:i?.4:.8,vertexColors:!1}),floorH:3.6,windowW:3}},n=bv(i),s=Ev(),o=Av(i),r=new Le({color:i?16777215:2775604,map:n.map,roughnessMap:n.roughnessMap,roughness:1,metalness:0,emissive:266760,emissiveIntensity:i?0:.2,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),{mat:a,uniforms:l}=pv({dayMode:i}),c=new Le({color:16777215,map:s.map,roughnessMap:s.roughnessMap,roughness:.94,metalness:.04,vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),u=new Le({color:16777215,map:o.map,roughness:.88,metalness:.08,vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),h=Dv(i),f=new Le({color:i?7168592:2761752,roughness:.95,metalness:.02}),d=new Le({color:i?14474462:4869202,map:Tv(i).map,roughness:.9,metalness:.06,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),p=new Le({color:i?11049080:3024928,roughness:.96,metalness:.01,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),_=new Le({color:i?16777215:924690,roughness:1,metalness:0});return{families:e,parkMat:r,waterMat:a,waterUniforms:l,groundMat:c,roadMat:u,foamMat:h,bankMat:f,pavingMat:d,sandMat:p,treeMat:_,envMap:Rv(),dayMode:i}}const zh={ppg:"ppg",gothic:"gothic",chapel:"chapel",artdeco:"artdeco",copper:"copper",sandstone:"sandstone",convention:"convention",steelTower:"steelTower",glass:"glass",stadium:"stadium",brick:"brick",stone:"limestone"};function Uv(i){if(!i||i.length<3)return .5;const[t,e]=Sn(i);return(Math.imul(Math.round(t*7)^2654435769,Math.round(e*13)|1)>>>8&65535)/65536}function Bh(i){const t=(i.n||"").toLowerCase(),e=i.h||10;if(/koppers/.test(t))return"copper";if(/u\.?s\.? steel|us steel/.test(t))return"steelTower";if(/ppg/.test(t))return"ppg";if(/phipps/.test(t))return"glasshouse";if(/fifth avenue place/.test(t))return"artdeco";if(/oxford cent/.test(t))return"steel";if(/eqt plaza|dominion tower/.test(t))return"sandstone";if(i.style&&zh[i.style])return zh[i.style];if(/cathedral of learning/.test(t))return"gothic";if(/chapel|church|cathedral/.test(t))return"chapel";if(/gulf tower|grant building/.test(t))return"artdeco";if(/carnegie|soldiers and sailors/.test(t))return"sandstone";if(/pnc park|acrisure|stadium|heinz field/.test(t))return"stadium";if(i.f&&i.f.length>=3&&e<60){const[s,o]=Sn(i.f);if(Math.hypot(s+415,o+657)<140||Math.hypot(s+1169,o+635)<180)return"stadium"}if(/convention/.test(t))return"convention";const n=Uv(i.f);return i.landmark||e>100?n<.3?"glass":n<.58?"artdeco":n<.82?"limestone":"steel":e>55?n<.22?"limestone":n<.44?"artdeco":n<.62?"steel":n<.88?"brick":"glass":e>28?n<.34?"brick":n<.55?"limestone":n<.72?"sandstone":n<.9?"steel":"artdeco":e>14?n<.5?"brick":n<.72?"lowrise":n<.9?"limestone":"sandstone":n<.7?"lowrise":n<.93?"brick":"limestone"}function il(i,t){const e=i.attributes.position.count,n=new Float32Array(e*3);for(let s=0;s<e;s++)n[s*3]=t.r,n[s*3+1]=t.g,n[s*3+2]=t.b;i.setAttribute("color",new ue(n,3))}function Jr(i,t=.04){const e=i.attributes.position,n=new Float32Array(e.count*2);for(let s=0;s<e.count;s++)n[s*2]=e.getX(s)*t,n[s*2+1]=e.getZ(s)*t;i.setAttribute("uv",new ue(n,2))}const Bc=1e-7,sc=[.003,.003],Nv=[.03,.0055],Me=0,_t=1,$t=2,kh=[null,Nv,sc],Fv={lowrise:[5,6],brick:[6,8],limestone:[6,8],steel:[8,10],glass:[8,10],ppg:[8,12],gothic:[5,6],stadium:[4,4],artdeco:[5,9],chapel:[4,5],sandstone:[6,7],copper:[5,8],convention:[10,4],steelTower:[7,11],glasshouse:[6,8]},Sd=[6,8],kc=new Set(["glass","ppg","steel","steelTower","convention","stadium"]),_o=[10,18,34],oc=.9;function Pe(i,t){return oe(i*311.7+t*41.13,i*727.3-t*19.71)}function Lo(i){if(!Array.isArray(i)||i.length<2)return .5;let t=!0;for(let s=0;s<i.length;s++){const o=i[s];if(!o||!Number.isFinite(+o[0])||!Number.isFinite(+o[1])){t=!1;break}}let e,n;if(t)[e,n]=Sn(i);else{let s=0,o=0,r=0;for(const a of i)!a||!Number.isFinite(+a[0])||!Number.isFinite(+a[1])||(s+=+a[0],o+=+a[1],r++);if(!r)return .5;e=s/r,n=o/r}return!Number.isFinite(e)||!Number.isFinite(n)?.5:oe(e,n)}function Wt(i,t,e){return i<t?t:i>e?e:i}function ua(i,t){return Number.isFinite(i)?i:t}function Hc(i){let t=0;for(let e=0,n=i.length;e<n;e++){const s=i[e],o=i[(e+1)%n];t+=s[0]*o[1]-o[0]*s[1]}return t*.5}function cn(i){return Math.abs(Hc(i))}function Gc(i){let t=0;for(let e=0,n=i.length;e<n;e++){const s=i[e],o=i[(e+1)%n];t+=Math.hypot(o[0]-s[0],o[1]-s[1])}return t}function ha(i){if(!Array.isArray(i)||i.length<3)return null;const t=[];for(let n=0;n<i.length;n++){const s=i[n];if(!s||s.length<2)continue;const o=+s[0],r=+s[1];if(!Number.isFinite(o)||!Number.isFinite(r))continue;const a=t[t.length-1];a&&Math.abs(a[0]-o)<.02&&Math.abs(a[1]-r)<.02||t.push([o,r])}for(;t.length>2;){const n=t[0],s=t[t.length-1];if(Math.abs(n[0]-s[0])<.02&&Math.abs(n[1]-s[1])<.02)t.pop();else break}if(t.length<3)return null;const e=Hc(t);return!Number.isFinite(e)||Math.abs(e)<.5?null:(e<0&&t.reverse(),t)}function rc(i,t,e){let n=i;if(n.length>240){const s=Math.ceil(n.length/240),o=[];for(let r=0;r<n.length;r+=s)o.push(n[r]);n=o}else n=n.slice();for(;n.length>4;){let s=-1,o=1/0,r=1/0;const a=n.length;for(let l=0;l<a;l++){const c=n[(l-1+a)%a],u=n[l],h=n[(l+1)%a],f=(u[0]-c[0])*(h[1]-c[1])-(u[1]-c[1])*(h[0]-c[0]),d=Math.abs(f)*.5,p=f>0?d:d*12+4;p<r&&(r=p,o=d,s=l)}if(s<0||o>t&&a<=e)break;n.splice(s,1)}return n}function _r(i,t,e,n,s,o){return(e-i)*(o-t)-(n-t)*(s-i)}function Ov(i,t,e,n){const s=_r(e[0],e[1],n[0],n[1],i[0],i[1]),o=_r(e[0],e[1],n[0],n[1],t[0],t[1]),r=_r(i[0],i[1],t[0],t[1],e[0],e[1]),a=_r(i[0],i[1],t[0],t[1],n[0],n[1]);return(s>0&&o<0||s<0&&o>0)&&(r>0&&a<0||r<0&&a>0)}function zv(i){const t=i.length;if(t<5)return!1;for(let e=0;e<t;e++){const n=i[e],s=i[(e+1)%t];for(let o=e+2;o<t;o++)if(!(e===0&&o===t-1)&&Ov(n,s,i[o],i[(o+1)%t]))return!0}return!1}function Bv(i,t){const e=i.length;if(e<3)return null;const n=new Array(e),s=new Array(e);for(let a=0;a<e;a++){const l=i[a],c=i[(a+1)%e],u=c[0]-l[0],h=c[1]-l[1],f=Math.hypot(u,h);if(f<1e-4)return null;n[a]=-h/f,s[a]=u/f}const o=Math.abs(t)*3,r=new Array(e);for(let a=0;a<e;a++){const l=(a-1+e)%e,c=n[l]*n[a]+s[l]*s[a],u=Math.max(.2,1+c);let h=t*(n[l]+n[a])/u,f=t*(s[l]+s[a])/u;const d=Math.hypot(h,f);d>o&&d>Bc&&(h=h*o/d,f=f*o/d);const p=i[a][0]+h,_=i[a][1]+f;if(!Number.isFinite(p)||!Number.isFinite(_))return null;r[a]=[p,_]}for(let a=0;a<e;a++){const l=(a+1)%e,c=i[l][0]-i[a][0],u=i[l][1]-i[a][1],h=r[l][0]-r[a][0],f=r[l][1]-r[a][1];if(Math.hypot(h,f)<.012||c*h+u*f<=0)return null}return zv(r)?null:r}function ve(i,t,e=.16){if(!i||i.length<3||!Number.isFinite(t)||Math.abs(t)<1e-4)return null;const n=cn(i);if(n<1)return null;const s=Gc(i);let o=t;if(t>0&&s>Bc&&(o=Math.min(t,2*n*.75/s),o<1e-4))return null;for(const r of[1,.6,.35,.18]){const a=Bv(i,o*r);if(!a)continue;const l=Hc(a);if(!(!Number.isFinite(l)||l<=0)){if(t>0){if(l>n+.001||l<n*e)continue}else if(l<n*.95)continue;return a}}return null}function Qr(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;s++){const r=e[s][0],a=e[s][1],l=e[o][0],c=e[o][1],u=c-a||1e-12;a>t!=c>t&&i<(l-r)*(t-a)/u+r&&(n=!n),o=s}return n}function ac(i,t,e){let n=1/0;for(let s=0,o=e.length;s<o;s++){const r=e[s],a=e[(s+1)%o],l=a[0]-r[0],c=a[1]-r[1],u=l*l+c*c||1e-9;let h=((i-r[0])*l+(t-r[1])*c)/u;h=Wt(h,0,1);const f=Math.hypot(i-(r[0]+h*l),t-(r[1]+h*c));f<n&&(n=f)}return n}function Hh(i,t,e,n){return Qr(i,t,e)?ac(i,t,e)>=n:!1}function wd(i){let t=0,e=-1;for(let n=0,s=i.length;n<s;n++){const o=i[n],r=i[(n+1)%s],a=r[0]-o[0],l=r[1]-o[1],c=a*a+l*l;c>e&&(e=c,t=Math.atan2(l,a))}return t}function kn(i,t){const e=Math.cos(t),n=Math.sin(t);let s=1/0,o=-1/0,r=1/0,a=-1/0;for(let l=0;l<i.length;l++){const c=i[l][0]*e+i[l][1]*n,u=i[l][1]*e-i[l][0]*n;c<s&&(s=c),c>o&&(o=c),u<r&&(r=u),u>a&&(a=u)}return{along:o-s,across:a-r}}function Ue(i){let t=0,e=0;for(let n=0;n<i.length;n++)t+=i[n][0],e+=i[n][1];return[t/i.length,e/i.length]}function yn(i,t,e,n,s,o){const r=e*.5,a=n*.5;return[[-r,-a],[r,-a],[r,a],[-r,a]].map(([c,u])=>[i+c*s-u*o,t+c*o+u*s])}function Ne(i,t,e,n,s){const o=new Array(n);for(let r=0;r<n;r++){const a=s+r/n*Math.PI*2;o[r]=[i+Math.cos(a)*e,t+Math.sin(a)*e]}return o}function xo(i,t,e,n){return i.map(([s,o])=>[t+(s-t)*n,e+(o-e)*n])}function bd(i){const t=i.length;if(t<3)return null;if(t===3)return[[0,1,2]];try{const e=new Array(t);for(let s=0;s<t;s++)e[s]=new Mt(i[s][0],i[s][1]);const n=$i.triangulateShape(e,[]);return!n||!n.length?null:n}catch{return null}}class lc{constructor({colors:t=!1,pins:e=!1,indexed:n=!1}={}){this.indexed=n,this.pos=[],this.nrm=[],this.col=t?[]:null,this.pin=e?[]:null,this.idx=[],this.count=0}get triangles(){return this.idx.length/3}vert(t,e,n,s,o,r,a,l){this.pos.push(t,e,n),this.nrm.push(s,o,r),this.col&&this.col.push(a?a[0]:1,a?a[1]:1,a?a[2]:1),this.pin&&this.pin.push(l|0),this.count++}tri(t,e,n,s,o){const r=e[0]-t[0],a=e[1]-t[1],l=e[2]-t[2],c=n[0]-t[0],u=n[1]-t[1],h=n[2]-t[2];let f=a*h-l*u,d=l*c-r*h,p=r*u-a*c;const _=Math.hypot(f,d,p);if(!(_>1e-9)||(f/=_,d/=_,p/=_,!Number.isFinite(t[0]+t[1]+t[2]+e[0]+e[1]+e[2]+n[0]+n[1]+n[2])))return!1;const g=this.count;return this.vert(t[0],t[1],t[2],f,d,p,s,o),this.vert(e[0],e[1],e[2],f,d,p,s,o),this.vert(n[0],n[1],n[2],f,d,p,s,o),this.idx.push(g,g+1,g+2),!0}quad(t,e,n,s,o,r){let a=e[0]-t[0],l=e[1]-t[1],c=e[2]-t[2],u=n[0]-t[0],h=n[1]-t[1],f=n[2]-t[2],d=l*f-c*h,p=c*u-a*f,_=a*h-l*u,g=Math.hypot(d,p,_);if(!(g>1e-9)&&(a=n[0]-t[0],l=n[1]-t[1],c=n[2]-t[2],u=s[0]-t[0],h=s[1]-t[1],f=s[2]-t[2],d=l*f-c*h,p=c*u-a*f,_=a*h-l*u,g=Math.hypot(d,p,_),!(g>1e-9)))return!1;const m=t[0]+t[1]+t[2]+e[0]+e[1]+e[2]+n[0]+n[1]+n[2]+s[0]+s[1]+s[2];if(!Number.isFinite(m))return!1;d/=g,p/=g,_/=g;const M=this.count;return this.vert(t[0],t[1],t[2],d,p,_,o,r),this.vert(e[0],e[1],e[2],d,p,_,o,r),this.vert(n[0],n[1],n[2],d,p,_,o,r),this.vert(s[0],s[1],s[2],d,p,_,o,r),this.idx.push(M,M+1,M+2,M,M+2,M+3),!0}geometry(){if(this.idx.length<3)return null;const t=new re;if(this.indexed)return t.setAttribute("position",new Yt(this.pos,3)),t.setAttribute("normal",new Yt(this.nrm,3)),this.col&&t.setAttribute("color",new Yt(this.col,3)),t.setIndex(this.idx),t;const e=this.idx.length,n=new Float32Array(e*3),s=new Float32Array(e*3),o=this.col?new Float32Array(e*3):null,r=this.pin?new Uint8Array(e):null;for(let a=0;a<e;a++){const l=this.idx[a];n[a*3]=this.pos[l*3],n[a*3+1]=this.pos[l*3+1],n[a*3+2]=this.pos[l*3+2],s[a*3]=this.nrm[l*3],s[a*3+1]=this.nrm[l*3+1],s[a*3+2]=this.nrm[l*3+2],o&&(o[a*3]=this.col[l*3],o[a*3+1]=this.col[l*3+1],o[a*3+2]=this.col[l*3+2]),r&&(r[a]=this.pin[l])}return r&&(this.pin=r),t.setAttribute("position",new ue(n,3)),t.setAttribute("normal",new ue(s,3)),o&&t.setAttribute("color",new ue(o,3)),t}}function St(i,t,e,n,s,o,r){const a=t.length;if(!(a<3||n.length!==a))for(let l=0;l<a;l++){const c=(l+1)%a,u=t[l],h=t[c],f=n[l],d=n[c];i.quad([u[0],e,u[1]],[f[0],s,f[1]],[d[0],s,d[1]],[h[0],e,h[1]],o,r)}}function Us(i,t,e,n,s,o,r){i.quad([t[0],n,t[1]],[t[0],s,t[1]],[e[0],s,e[1]],[e[0],n,e[1]],o,r)}function Ed(i,t,e,n,s,o){const r=bd(t);if(r)for(let a=0;a<r.length;a++){const l=r[a],c=t[l[0]],u=t[l[1]],h=t[l[2]];if(!c||!u||!h)continue;(u[0]-c[0])*(h[1]-c[1])-(u[1]-c[1])*(h[0]-c[0])>=0===n?i.tri([c[0],e,c[1]],[h[0],e,h[1]],[u[0],e,u[1]],s,o):i.tri([c[0],e,c[1]],[u[0],e,u[1]],[h[0],e,h[1]],s,o)}}function Ae(i,t,e,n,s){Ed(i,t,e,!0,n,s)}function Gh(i,t,e,n,s){Ed(i,t,e,!1,n,s)}function Ws(i,t,e,n,s){const o=t.length;for(let r=1;r<o-1;r++)i.tri([t[0][0],e,t[0][1]],[t[r+1][0],e,t[r+1][1]],[t[r][0],e,t[r][1]],n,s)}function Ps(i,t,e,n,s,o){St(i,t,e,t,n,s,o),Ws(i,t,n,s,o)}function Ns(i,t,e,n,s,o,r,a){const l=t.length;for(let c=0;c<l;c++){const u=t[c],h=t[(c+1)%l];i.tri([u[0],e,u[1]],[n,s,o],[h[0],e,h[1]],r,a)}}function Vh(i,t,e,n,s,o){const r=i.attributes.position,a=i.attributes.normal,l=new Float32Array(r.count*2),[c,u]=o||Sd,h=(Math.abs(e)>.05?e:3.5)*u,f=(Math.abs(n)>.05?n:3.2)*c;for(let d=0;d<r.count;d++){const p=a.getY(d),_=t.pin?t.pin[d]:Me;if(_){l[d*2]=kh[_][0],l[d*2+1]=kh[_][1];continue}if(p>.55||p<-.55){l[d*2]=sc[0],l[d*2+1]=sc[1];continue}const g=a.getX(d),m=a.getZ(d),M=Math.abs(g)>Math.abs(m)?r.getZ(d):r.getX(d);l[d*2]=M/f,l[d*2+1]=(r.getY(d)-s)/h}i.setAttribute("uv",new ue(l,2))}const xr=[[-120,-110,1300],[4150,-330,900]];function Td(i,t){let e=0;for(let n=0;n<xr.length;n++){const s=1-Math.hypot(i-xr[n][0],t-xr[n][1])/xr[n][2];s>e&&(e=s)}return Wt(e,0,1)}function Vc(i,t){const e=cn(i);if(t<5.5||e<55)return 0;const[n,s]=Ue(i),o=Td(n,s);return t>=34-o*13||e>=2200-o*900||t>=22&&e>=1e3?2:1}function kv(i,t){const e=ha(i);return e?Vc(e,ua(t,0)):0}function Hv(i,t,e,n){if(i<5.5||t<55)return"shed";const s=kc.has(e);return i>=46?"tower":i>=30?"midrise":t>=900?i>=26?"midrise":"warehouse":s?i>=20?"midrise":"block":i<=17&&t<=520&&n<.4?"house":"block"}function Gv(i,t,e,n,s){const o=kn(n,s),r=Pe(e,7);if(i==="house"&&r<.84){const a=Wt(o.across*.36,2,6),l=o.along>o.across*1.4?"gable":"hip";if(t-a>4)return{form:l,rise:a,overhang:.4}}if(i==="block"&&t<=13&&cn(n)<340&&r>.6){const a=Wt(o.across*.24,1.4,3.4);if(t-a>4)return{form:"gable",rise:a,overhang:.3}}return{form:"flat",rise:0,overhang:0}}function Ad(i,t,e,n){const[s,o]=Ue(i),r=wd(i),a=Hv(t,cn(i),n,Td(s,o));return{ang:r,typ:a,roof:Gv(a,t,e,i,r)}}function Vv(i,t,e,n){const s=Math.sqrt(Math.max(e,1)),o=t/Math.max(8,s),r=kc.has(n),a=Pe(i,1);return t<24||e<140||s<9?"prism":n==="stadium"||n==="convention"?a<.45?"podium":"prism":t>=130?r?a<.5?"tower":"setbackCrown":a<.68?"setbackCrown":"tower":t>=68?r?a<.38?"tower":a<.68?"podium":"crown":a<.44?"setback":a<.78?"setbackCrown":"podium":t>=38?r?a<.3?"tower":a<.62?"podium":"crown":o>1.5?a<.6?"setback":"setbackCrown":a<.42?"setback":a<.72?"crown":"podium":a<.5?"crown":a<.78?"podium":"prism"}function Rd(i,t,e,n={}){const s=ha(i);if(!s)return[];const o=n.maxVerts||_o[2],r=rc(s,oc,o);if(r.length<3)return[];const a=Wt(ua(t,10),2,800),l=Number.isFinite(e)?e:Lo(i),c=cn(r),u=Math.sqrt(Math.max(c,1)),h=Vv(l,a,c,n.style||null),f=[{ring:r,y0:0,y1:a,archetype:"prism",index:0,top:!0}];if(h==="prism")return f;const d=Pe(l,2),p=Pe(l,3),_=Pe(l,4);let g;h==="crown"?g=[[1-(.09+d*.08),0],[1,u*(.1+p*.07)]]:h==="podium"?g=[[Wt(Math.min(a*.3,14+d*12),6,a*.45)/a,0],[1,u*(.1+p*.08)]]:h==="tower"?g=[[Wt(Math.min(a*.22,12+d*18),6,a*.4)/a,0],[1,u*(.2+p*.12)]]:h==="setback"?g=[[.38+d*.1,0],[.66+p*.08,u*(.11+_*.06)],[1,u*(.1+d*.06)]]:g=[[.34+d*.08,0],[.58+p*.08,u*(.11+_*.06)],[.8+_*.07,u*(.1+d*.05)],[1,u*(.09+p*.05)]];const m=[];let M=r,v=0;for(let w=0;w<g.length;w++){const[T,b]=g[w],A=w===g.length-1;if(!A&&a-3<=v+3)continue;const y=A?a:Wt(a*T,v+3,a-3);if(!(y-v<2.5)){if(b>.05){const S=ve(M,b);S&&(M=S)}m.push({ring:M,y0:v,y1:y,archetype:h,index:m.length,top:!1}),v=y}}if(!m.length)return f;const x=[m[0]];for(let w=1;w<m.length;w++){const T=x[x.length-1];m[w].ring===T.ring?T.y1=m[w].y1:x.push(m[w])}x[x.length-1].y1=a,x[x.length-1].top=!0;for(let w=0;w<x.length;w++)x[w].index=w;return x}function Wc(i,t,e,n=[],s=null){const o=Math.cos(e),r=Math.sin(e);let a=1/0,l=-1/0,c=1/0,u=-1/0;for(const[d,p]of i)d<a&&(a=d),d>l&&(l=d),p<c&&(c=p),p>u&&(u=p);let h=0;function f(d,p,_,g){const m=_*.5,M=g*.5;if(!Hh(d,p,i,.2))return!1;for(let w=0;w<4;w++){const T=w===0||w===3?-m:m,b=w<2?-M:M;if(!Hh(d+T*o-b*r,p+T*r+b*o,i,.2))return!1}const v=d*o+p*r,x=p*o-d*r;for(const w of n)if(Math.abs(v-w[0])<(_+w[2])*.5+.4&&Math.abs(x-w[1])<(g+w[3])*.5+.4)return!1;return n.push([v,x,_,g]),!0}return function(p,_,g=14,m=null,M=!0){if(m&&f(m[0],m[1],p,_))return m;for(let v=0;v<g;v++){h++;const x=Pe(t,200+h*2),w=Pe(t,201+h*2);let T,b;if(s&&M){const A=s[0]+(x-.5)*s[2],y=s[1]+(w-.5)*s[3];T=A*o-y*r,b=A*r+y*o}else T=a+x*(l-a),b=c+w*(u-c);if(f(T,b,p,_))return[T,b]}return null}}const Wh=.3;function Cd(i,t,e,n,s){const o=wd(i),r=ve(i,1.1)||ve(i,.5)||i,a=cn(r),l=Math.cos(o),c=Math.sin(o),u={inner:r,area:a,ang:o,ca:l,sa:c,boxes:[],taken:[],zone:null,padH:0};if(!(a>30)||t<7)return u;const h=Math.sqrt(a),f=Wc(r,n,o,u.taken),d=(M,v,x,w,T)=>{if(!(v>.4&&x>.4&&w>.3))return null;const b=f(v,x,16,T);return b&&u.boxes.push({kind:M,x:b[0],z:b[1],sx:v,sz:x,sy:w}),b},p=Pe(n,21),_=Pe(n,22),g=Pe(n,23);if(e==="warehouse"&&a>700){const{along:M,across:v}=kn(r,o);d("monitor",Wt(M*.58,6,64),Wt(v*.24,2.4,8),2+p*1.6,Ue(r))}let m=null;if(t>=26&&a>70){const M=p*Math.PI*2,v=Ld(r,Math.cos(M),Math.sin(M),Wt(h*.22,3,10));m=d("overrun",Wt(h*(.15+_*.1),3,11),Wt(h*(.13+g*.08),2.6,9),Wt(3.6+t*.022,4,8.5)+_*1.4,v)}else a>(s===2?45:110)&&d("overrun",2.4+g*1.6,2.8+g*1.4,2.6+g*1.3);if(a>200&&t>=12){const M=Wt(h*(.2+p*.12),3,18),v=Wt(h*(.15+_*.1),2.4,13),x=M*.5+3;d("penthouse",M,v,e==="tower"?3.4+p*2.4:2.4+p*1.8,m?[m[0]-x*l,m[1]-x*c]:null)}if((e==="house"||e==="block")&&a>40&&g>.28&&d("stack",.85+p*.4,.7+_*.35,1.6+p*1.5),a>150)for(const M of[1,.7,.48]){const v=Wt(h*.48*M,4.5,30),x=Wt(h*.32*M,3.2,20),w=u.taken.length,T=f(v,x,20);if(T){u.boxes.push({kind:"pad",x:T[0],z:T[1],sx:v,sz:x,sy:Wh}),u.zone=[T[0]*l+T[1]*c,T[1]*l-T[0]*c,v-2,x-2],u.padH=Wh,u.taken.splice(w,1);break}}return u}function Wv(i,t,e,n,s){const o=yn(e.x,e.z,e.sx,e.sz,n.ca,n.sa),r=s+e.sy;if(e.kind==="pad"){St(t,o,s,o,r,null,$t),Ws(t,o,r,null,$t);return}const a=Math.min(.4,e.sy*.2),l=e.kind==="overrun"||e.kind==="monitor";St(l?i:t,o,s,o,r-a,null,l?Me:$t),St(t,o,r-a,o,r,null,_t),Ws(i,o,r,null,$t)}function Xv(i,t,e,n){const s=kc.has(t),o=Pe(i,11),r=Pe(i,12),a=n==="tower"||n==="midrise";let l,c,u;n==="house"?(l=.7+o*.8,c=!1,u=.22+r*.14):a?(l=Wt(Math.min(e*.24,(s?4.6:7.5)+o*(s?3:5)),3.4,13),c=!0,u=.4+r*.45):(l=Wt(Math.min(e*.34,3.1+o*2.4),2.4,7),c=n==="block"||o>.45,u=.4+r*.4);let h;n==="house"?h=.45+r*.5:s?h=Wt(e*.016+.7,.9,2.8):a?h=Wt(e*.032+1.2,1.8,6):h=Wt(e*.034+.55,.85,4.2);const f=s?Wt(e*.004,.12,.4):Wt(.3+e*.006,.3,.95)*(n==="house"?.7:1);return{reveal:Wt(.28+o*.2+(a?.22:0)+(s?0:.16),.28,.9),baseH:l,baseGlazed:c,sillH:u,corniceH:h,corniceProj:f,capitalH:a&&!s?Wt(e*.045,2.2,7):0,parapetH:Wt((s?1.1:1)+o*.8,.45,e*.055+.45),deckDrop:.6+r*.6,copingIn:.35+o*.3,courseH:.4+o*.35,pierW:1+o*.8,pierSpacing:(n==="warehouse"?5.2:6.4)+r*3.2}}function Yv(i,t,e,n,s,o){const r=s+o.baseH;return St(i,e,s,e,r,null,o.baseGlazed?$t:_t),St(t,e,r,e,r+o.sillH,null,_t),St(t,e,r+o.sillH,n,r+o.sillH,null,_t),r+o.sillH}function Xh(i,t,e,n,s,o,r,a=0){const l=a>.4&&s-n>a+8?a:0,c=s-l,u=c-n;if(!(u>.05)){St(t,e,n,e,s,null,_t);return}if(l>0&&St(t,e,c,e,s,null,_t),r<1||u<7){St(i,e,n,e,c,null,Me);return}const h=u/(r+1);let f=n;for(let d=1;d<=r;d++){const p=n+h*d-o.courseH*.5,_=p+o.courseH;p<=f+.6||_>=c-.6||(St(i,e,f,e,p,null,Me),St(t,e,p,e,_,null,_t),f=_)}c-f>.05&&St(i,e,f,e,c,null,Me)}function qv(i,t,e,n,s,o,r){const a=t.length,l=o.pierW*.5,c=Math.max(o.pierSpacing,Gc(t)/Math.max(1,r));let u=0;for(let h=0;h<a&&u<r;h++){const f=t[h],d=t[(h+1)%a],p=d[0]-f[0],_=d[1]-f[1],g=Math.hypot(p,_);if(g<8)continue;const m=p/g,M=_/g,v=M,x=-m,w=Math.min(o.reveal,(e[h][0]-f[0])*v+(e[h][1]-f[1])*x);if(w<.08)continue;const T=Math.max(2,Math.round(g/c));for(let b=1;b<T&&u<r;b++){const A=b/T*g;if(A<l+.8||A>g-l-.8)continue;const y=f[0]+m*A,S=f[1]+M*A,R=[y-m*l,S-M*l],D=[y+m*l,S+M*l],F=[R[0]+v*w,R[1]+x*w],O=[D[0]+v*w,D[1]+x*w];Us(i,F,O,n,s,null,_t),Us(i,R,F,n,s,null,_t),Us(i,O,D,n,s,null,_t),u++}}}function Yh(i,t,e,n,s,o,r,a,l,c=1){const u=o-s;if(a==="cap"||u<.4)return St(t,n,s,e,o,null,_t),Ae(i,e,o,null,$t),{ring:e,y:o};const h=r.corniceProj,f=h>.1?ve(e,-h,.02):null,d=f&&(c===2||l>=2.2);f&&d?(St(t,n,s,f,s,null,$t),St(t,f,s,f,s+l*.62,null,_t),St(t,f,s+l*.62,e,s+l,null,_t)):f?(St(t,n,s,f,s+l*.7,null,_t),St(t,f,s+l*.7,e,s+l,null,_t)):St(t,n,s,e,s+l,null,_t),St(t,e,s+l,e,o,null,_t);const p=ve(e,r.copingIn);if(!p)return Ae(i,e,o,null,$t),{ring:e,y:o};St(t,e,o,p,o,null,_t);const _=Math.max(s+.15,o-r.deckDrop);return St(t,p,o,p,_,null,$t),Ae(i,p,_,null,$t),{ring:p,y:_}}function Zv(i,t,e,n,s,o){if(!(cn(e)>4))return null;const r=s.overhang||0,a=r>.05&&ve(e,-r,.02)||e;let l=n;if(a!==e){St(t,e,n,a,n,null,$t);const h=Math.min(.4,s.rise*.22);St(t,a,n,a,n+h,null,_t),l=n+h}const c=s.form==="gable"?jv(a,o):ve(a,kn(a,o).across*.44,.02);if(!c)return null;const u=l+s.rise;return St(i,a,l,c,u,null,$t),Ae(i,c,u,null,$t),{ring:c,y:u}}function jv(i,t){const[e,n]=Ue(i),s=Math.cos(t),o=Math.sin(t);return i.map(([r,a])=>{const l=(r-e)*s+(a-n)*o;return[e+l*s,n+l*o]})}function Kv(i,t,e){if(i==="house"||e<7)return 0;const n=Math.floor(e/5.5)-1;return n<1?0:i==="block"?Math.min(n,t===2?2:1):i==="warehouse"?Math.min(n,2):Math.min(n,t===2?4:2)}function $v(i,t,e){return e<55||i==="house"?0:i==="warehouse"?t===2?24:12:i==="block"?t===2?14:5:t===2?28:10}const qh=[{n:"U.S. Steel Tower",at:[614.7,-39.8],r:45,h:256,shell:.965,reveal:1.5,piers:!1,solidTop:7,crown:"usSteel"},{n:"BNY Mellon Center",at:[517.5,150.6],r:45,h:221,shell:.93,tiers:[[.9,0],[1,3.5]],crown:"steppedCap"},{n:"One PPG Place",at:[-150.1,112.1],r:45,h:194,shell:.84,crown:"ppgTower"},{n:"Two PPG Place",at:[-112.8,58.1],r:40,h:22.9,crown:"ppgSpires"},{n:"Three PPG Place",at:[-61.1,98.9],r:30,h:22.9,crown:"ppgSpires"},{n:"Four PPG Place",at:[-66.5,154.4],r:30,h:22.9,crown:"ppgSpires"},{n:"Five PPG Place",at:[-102.9,197.8],r:34,h:22.9,crown:"ppgSpires"},{n:"Six PPG Place",at:[-156.1,172.6],r:40,h:51.3,crown:"ppgSpires"},{n:"PPG Place Wintergarden",at:[-185.8,94.8],r:34,h:32,crown:"ppgSpires"},{n:"Fifth Avenue Place",at:[-116.2,-111.6],r:45,h:188,shell:.88,tiers:[[.74,0],[.86,5],[1,4.5]],crown:"obelisk"},{n:"One Oxford Centre",at:[290.2,331],r:50,h:187,shell:.13,crown:"oxford"},{n:"Gulf Tower",at:[575,-178.3],r:45,h:177,shell:.8,tiers:[[.6,0],[.72,4.5],[.8,4],[1,3.5]],crown:"ziggurat"},{n:"Koppers Building",at:[547.1,-123.4],r:40,h:145,shell:.76,tiers:[[.6,0],[.68,4],[1,3]],crown:"chateau"},{n:"Grant Building",at:[377.7,373],r:40,h:148,shell:.9,tiers:[[.66,0],[.8,4],[.87,3.5],[1,3]],crown:"beacon"},{n:"Frick Building",at:[395.3,207.4],r:40,h:100,shell:.942,crown:"classicalAttic"},{n:"Pittsburgh City-County Building",at:[436,321.7],r:45,h:43.9,shell:.925,crown:"classicalAttic"},{n:"Union Trust Building",at:[421.7,118.7],r:55,h:78,shell:.667,crown:"flemishRoof"},{n:"Allegheny County Courthouse",at:[473.5,245.1],r:60,h:76,shell:.4,crown:"courthouseTower"},{n:"Cathedral of Learning",at:[4135.4,-368.4],r:55,h:163,shell:.84,tiers:[[.16,0],[.5,15],[.74,3],[1,2.5]],crown:"gothicCrown"},{n:"Heinz Memorial Chapel",at:[4247.7,-475.2],r:40,h:78,shell:.28,crown:"chapelFleche"},{n:"Carnegie Museum of Art",at:[4476.7,-299.8],r:55,h:26,shell:.8,crown:"beauxArts"},{n:"Carnegie Museum of Natural History",at:[4397.5,-234.9],r:60,h:28,shell:.8,crown:"beauxArts"},{n:"Carnegie Library, Oakland",at:[4358.7,-198.8],r:50,h:26,shell:.8,crown:"beauxArts"},{n:"Carnegie Music Hall",at:[4319.7,-257],r:45,h:29,shell:.78,crown:"beauxArts"},{n:"Soldiers and Sailors Memorial Hall",at:[3860.5,-450.4],r:50,h:46,shell:.5,crown:"mausoleum"},{n:"Phipps Conservatory",at:[4558.6,240.1],r:65,h:22,shell:.34,crown:"glasshouse"},{n:"The Andy Warhol Museum",at:[-42.6,-821],r:35,h:30,shell:.9,crown:"classicalAttic"},{n:"Kamin Science Center",at:[-1350.1,-513.3],r:60,h:20,shell:.75,crown:"planetarium"},{n:"David L. Lawrence Convention Center",at:[488.7,-515.2],r:90,h:48,shell:.42,tiers:[[.46,0]],crown:"cableRoof"},{n:"Tower at PNC Plaza",at:[152.8,82.7],r:40,h:166,shell:.9,tiers:[[.88,0],[1,2.5]],crown:"shearedCap"}];function cc(i){let t=0,e=0,n=0;for(let s=0,o=i.length;s<o;s++){const[r,a]=i[s],[l,c]=i[(s+1)%o],u=r*c-l*a;t+=u,e+=(r+l)*u,n+=(a+c)*u}return Math.abs(t)<Bc?Ue(i):[e/(3*t),n/(3*t)]}function Pd(i){if(!i||i.length<3)return null;const[t,e]=cc(i);for(let n=0;n<qh.length;n++){const s=qh[n],o=t-s.at[0];if(o>s.r||o<-s.r)continue;const r=e-s.at[1];if(!(r>s.r||r<-s.r)&&!(o*o+r*r>s.r*s.r)&&Qr(s.at[0],s.at[1],i))return s}return null}function Jv(i,t,e){const n=e*Wt(i.shell??1,.08,1),s=i.tiers;if(!s||!s.length)return[{ring:t,y0:0,y1:n,archetype:"landmark",index:0,top:!0}];const o=[];let r=t,a=0;for(let l=0;l<s.length;l++){const[c,u]=s[l],f=l===s.length-1?n:Wt(e*c,a+3,n-3);f-a<2.5||(u>.05&&(r=ve(r,u)||r),o.push({ring:r,y0:a,y1:f,archetype:"landmark",index:o.length,top:!1}),a=f)}return o.length?(o[o.length-1].y1=n,o[o.length-1].top=!0,o):[{ring:t,y0:0,y1:n,archetype:"landmark",index:0,top:!0}]}function _n(i,t,e,n,s){const[o,r]=Ue(t);Ns(i,t,e,o,n,r,null,s)}function bs(i,t,e,n,s,o,r){let a=t;const l=(n-e)/s;let c=e;for(let u=0;u<s;u++){St(i,a,c,a,c+l,null,r),c+=l;const h=ve(a,o,.02);if(!h)return Ae(i,a,c,null,r),{ring:a,y:c};St(i,a,c,h,c,null,r),a=h}return{ring:a,y:c}}function qn(i,t,e,n,s,o,r,a){const l=Ne(t,e,n,4,r),c=s+o*.4;St(i,l,s,l,c,null,a),Ns(i,l,c,t,s+o,e,null,a)}function Qv(i,t,e,n,s,o,r){let a=t,l=e;for(let c=1;c<=o;c++){const u=c/o*Math.PI*.5,h=ve(t,n*(1-Math.cos(u)),.02);if(!h)break;const f=e+s*Math.sin(u);St(i,a,l,h,f,null,r),a=h,l=f}return Ae(i,a,l,null,r),{ring:a,y:l}}function Ld(i,t,e,n){const[s,o]=Ue(i);let r=null,a=-1/0;for(let h=0,f=i.length;h<f;h++){const d=i[h],p=i[(h+1)%f],_=(d[0]+p[0])*.5,g=(d[1]+p[1])*.5,m=_-s,M=g-o,v=Math.hypot(m,M)||1,x=(m*t+M*e)/v*Math.hypot(p[0]-d[0],p[1]-d[1]);x>a&&(a=x,r=[_,g])}if(!r)return[s,o];const l=s-r[0],c=o-r[1],u=Math.hypot(l,c)||1;return[r[0]+l/u*n,r[1]+c/u*n]}function uc(i,t,e,n,s,o,r,a,l){let c=Ne(t,e,n,r,0),u=s;for(let h=1;h<=a;h++){const d=h/a*Math.PI*.5,p=Math.max(.15,n*Math.cos(d)),_=s+o*Math.sin(d),g=Ne(t,e,p,r,0);St(i,c,u,g,_,null,l),c=g,u=_}Ws(i,c,u,null,l)}function vr(i,t,e,n,s,o,r,a,l=0){const c=Ne(t,e,n,6,r),u=xo(c,t,e,.34);St(i,c,s,u,o,null,a),l>0?uc(i,t,e,l,o,l*1.6,8,3,a):Ws(i,u,o,null,a)}function Tn(i,t,e){for(let n=0,s=i.length;n<s;n++){const o=i[n],r=i[(n+1)%s],a=r[0]-o[0],l=r[1]-o[1],c=Math.hypot(a,l);if(c<t*.4)continue;const u=Math.max(1,Math.round(c/t));for(let h=0;h<u;h++){const f=(h+.5)/u;e(o[0]+a*f,o[1]+l*f,Math.atan2(l,a),c)}}}function Mr(i,t){const e=i.length,n=[];for(let s=0;s<e;s++){const o=i[(s-1+e)%e],r=i[s],a=i[(s+1)%e],l=Math.atan2(r[1]-o[1],r[0]-o[0]),c=Math.atan2(a[1]-r[1],a[0]-r[0]);let u=Math.abs(c-l);u>Math.PI&&(u=Math.PI*2-u),n.push({p:r,d:u})}return n.sort((s,o)=>o.d-s.d),n.slice(0,t).map(s=>s.p)}const Zh={usSteel(i){const{wall:t,trim:e,ring:n,deck:s,y:o,capY:r,baseY:a}=i,l=1.3,c=.9,u=1.5,h=r+4.5,f=n.length;for(let g=0;g<f;g++){const m=n[g],M=n[(g+1)%f],v=M[0]-m[0],x=M[1]-m[1],w=Math.hypot(v,x);if(w<30)continue;const T=v/w,b=x/w,A=b,y=-T;for(let S=0;S<6;S++){const R=(.04+S/5*.92)*w,D=m[0]+T*R,F=m[1]+b*R,O=[D-T*l*.5,F-b*l*.5],z=[D+T*l*.5,F+b*l*.5],H=[O[0]+A*c,O[1]+y*c],J=[z[0]+A*c,z[1]+y*c],G=[O[0]-A*u,O[1]-y*u],et=[z[0]-A*u,z[1]-y*u];Us(e,H,J,a,h,null,_t),Us(e,G,H,a,h,null,_t),Us(e,J,et,a,h,null,_t),e.quad([G[0],h,G[1]],[H[0],h,H[1]],[J[0],h,J[1]],[et[0],h,et[1]],null,_t)}}const d=ve(s,6)||s;St(e,d,o,d,o+6.5,null,_t),St(e,d,o+6.5,d,o+7.4,null,$t),Ae(t,d,o+7.4,null,$t);const[p,_]=Ue(d);vr(e,p,_,.8,o+7.4,o+16,i.ang,_t)},steppedCap(i){const{wall:t,trim:e,deck:n,y:s}=i,o=bs(e,n,s,s+i.h*.035,2,3.2,_t);Ae(t,o.ring,o.y,null,$t);const[r,a]=Ue(o.ring);vr(e,r,a,1.2,o.y,o.y+i.h*.06,i.ang,_t)},shearedCap(i){const{wall:t,trim:e,deck:n,y:s}=i,o=kn(n,i.ang),r=Math.max(6,o.across*.5),a=Math.cos(i.ang),l=Math.sin(i.ang),[c,u]=Ue(n),h=n.map(([p,_])=>{const g=(_-u)*a-(p-c)*l;return[p,_,s+Wt(.5+(g/Math.max(1,o.across)+.5)*r,.4,r)]});for(let p=0,_=h.length;p<_;p++){const g=h[p],m=h[(p+1)%_];t.quad([g[0],s,g[1]],[g[0],g[2],g[1]],[m[0],m[2],m[1]],[m[0],s,m[1]],null,Me)}const f=h.map(([p,,_])=>[p,_]),d=bd(f);if(d)for(const p of d){const _=h[p[0]],g=h[p[1]],m=h[p[2]];!_||!g||!m||(e.tri([_[0],_[2],_[1]],[m[0],m[2],m[1]],[g[0],g[2],g[1]],null,_t),e.tri([_[0],_[2],_[1]],[g[0],g[2],g[1]],[m[0],m[2],m[1]],null,_t))}},ppgTower(i){const{trim:t,ring:e,deck:n,y:s,capY:o}=i,r=Math.sqrt(cn(n));Tn(e,7.5,(u,h)=>qn(t,u,h,.85,o,6.5,i.ang,_t));for(const[u,h]of Mr(n,4)){const f=Ne(u,h,r*.11,4,i.ang);St(t,f,s,f,s+i.h*.05,null,_t),Tn(f,3.2,(d,p)=>qn(t,d,p,.7,s+i.h*.05,5,i.ang,_t)),_n(t,f,s+i.h*.05,s+i.h*.115,_t)}const[a,l]=Ue(n),c=Ne(a,l,r*.2,4,i.ang);St(t,c,s,c,s+i.h*.055,null,_t),_n(t,c,s+i.h*.055,i.baseY+i.h,_t)},ppgSpires(i){const{trim:t,ring:e,capY:n}=i;Tn(e,6.5,(s,o)=>qn(t,s,o,.7,n,5,i.ang,_t));for(const[s,o]of Mr(e,4))qn(t,s,o,1.15,n,9.5,i.ang,_t)},obelisk(i){const{wall:t,trim:e,deck:n,y:s}=i,o=bs(e,n,s,s+i.h*.045,4,2.4,_t);Ae(t,o.ring,o.y,null,$t);const[r,a]=Ue(o.ring),l=Math.sqrt(cn(o.ring)),c=Ne(r,a,l*.2,4,i.ang);St(e,c,o.y,c,o.y+i.h*.03,null,_t),_n(e,c,o.y+i.h*.03,i.baseY+i.h*1.06,_t)},oxford(i){const{wall:t,trim:e,deck:n,y:s}=i,o=kn(n,i.ang),[r,a]=Ue(n),l=Math.cos(i.ang),c=Math.sin(i.ang),u=Math.min(o.along,o.across)*.29,h=[[0,0,1,1],[-o.along*.26,o.across*.1,.62,.72],[o.along*.27,-o.across*.08,.55,.66],[o.along*.05,o.across*.3,.42,.58],[-o.along*.3,-o.across*.24,.34,.5]];for(const[f,d,p,_]of h){const g=r+f*l-d*c,m=a+f*c+d*l,M=Ne(g,m,u*p+6,8,i.ang),v=s+(i.baseY+i.h-s)*_;St(t,M,i.baseY+2,M,v-2.2,null,Me),St(e,M,v-2.2,M,v,null,_t),Ae(t,M,v,null,$t)}},ziggurat(i){const{wall:t,trim:e,deck:n,y:s}=i,o=i.baseY+i.h,r=bs(e,n,s,s+(o-s)*.72,7,2.6,_t),[a,l]=Ue(r.ring),c=Math.sqrt(cn(r.ring)),u=Ne(a,l,Math.max(3,c*.34),4,i.ang);St(t,u,r.y,u,r.y+(o-r.y)*.45,null,Me),_n(e,u,r.y+(o-r.y)*.45,o,_t)},chateau(i){const{wall:t,trim:e,deck:n,y:s}=i,o=i.baseY+i.h,r=s+1.5,a=ve(n,-1.2,.02)||n;St(e,n,s,a,r,null,_t);const l=ve(a,Math.sqrt(cn(a))*.34,.05),c=r+(o-r)*.78;if(l){St(t,a,r,l,c,null,$t),Tn(a,11,(d,p,_)=>{const m=(Ue(a)[0]-d)*.3,M=(Ue(a)[1]-p)*.3,v=yn(d+m*.25,p+M*.25,3.4,2.6,Math.cos(_),Math.sin(_)),x=r+(c-r)*.22;St(e,v,x,v,x+3.2,null,_t),_n(e,v,x+3.2,x+5.4,_t)});const[u,h]=Ue(l),f=Ne(u,h,Math.max(2,Math.sqrt(cn(l))*.3),4,i.ang);St(e,f,c,f,c+(o-c)*.5,null,_t),_n(e,f,c+(o-c)*.5,o,_t)}else _n(t,a,r,o,$t)},flemishRoof(i){const{wall:t,trim:e,deck:n,y:s}=i,o=i.baseY+i.h,r=o-s,a=s+r*.06,l=ve(n,-1.1,.02)||n;St(e,n,s,l,a,null,_t);const c=s+r*.5,u=ve(l,r*.18,.05);u?(St(e,l,a,u,c,null,_t),Ae(t,u,c,null,$t)):Ae(t,l,a,null,$t);const h=r*.04,[f,d]=Ue(l);Tn(l,12,(x,w,T)=>{const b=f-x,A=d-w,y=Math.hypot(b,A)||1,S=x+b/y*h,R=w+A/y*h,D=yn(S,R,5.5,4,Math.cos(T),Math.sin(T)),F=a+r*.04;St(e,D,F,D,F+r*.24,null,_t),_n(e,D,F+r*.24,F+r*.4,_t)});const p=kn(n,i.ang),[_,g]=Ue(u||l),m=Math.cos(i.ang),M=Math.sin(i.ang),v=Math.max(4.5,Math.min(p.along,p.across)*.07);for(const x of[-1,1]){const w=x*p.along*.24,T=_+w*m,b=g+w*M,A=Ne(T,b,v,4,i.ang),y=c-r*.12,S=y+(o-y)*.5;St(e,A,y,A,S,null,_t);for(const[R,D]of A)qn(e,R,D,v*.22,S,r*.14,i.ang,_t);Ns(e,xo(A,T,b,.9),S,T,o,b,null,_t)}},courthouseTower(i){const{wall:t,trim:e,deck:n,y:s}=i,o=i.baseY+i.h,r=s+9,a=ve(n,kn(n,i.ang).across*.26,.04);a?(St(t,n,s,a,r,null,$t),Ae(t,a,r,null,$t)):Ae(t,n,s,null,$t);for(const[p,_]of Mr(n,4)){const g=Ne(p,_,3.2,6,i.ang);St(e,g,s-3,g,s+6,null,_t),_n(e,g,s+6,s+14,_t)}Tn(n,16,(p,_,g)=>{const m=yn(p,_,4.4,3.2,Math.cos(g),Math.sin(g));St(e,m,s+1,m,s+4.6,null,_t),_n(e,m,s+4.6,s+7.6,_t)});const[l,c]=Ld(n,-1,0,13),h=Ne(l,c,9.5,4,i.ang),f=s+(o-s)*.66;St(t,h,i.baseY+4,h,f,null,Me),St(e,h,f,h,f+4,null,_t);const d=ve(h,-1.2,.02)||h;St(e,d,f+4,d,f+6,null,_t);for(const[p,_]of d){const g=Ne(p,_,1.9,6,i.ang);St(e,g,f-8,g,f+8,null,_t),_n(e,g,f+8,f+13,_t)}_n(e,xo(d,l,c,.94),f+6,o,_t)},glasshouse(i){const{wall:t,trim:e,deck:n,y:s}=i,o=i.baseY+i.h,r=o-s;Qv(t,n,s,13,r*.34,4,Me),Tn(n,5,(d,p,_)=>{const g=yn(d,p,.5,1.3,Math.cos(_),Math.sin(_));St(e,g,s-r*.3,g,s+r*.16,null,_t)});const[a,l]=cc(n),c=kn(n,i.ang),u=Math.cos(i.ang),h=Math.sin(i.ang),f=s+r*.2;for(const[d,p]of[[0,1],[-c.along*.3,.5],[c.along*.29,.46]]){const _=a+d*u,g=l+d*h;if(!Qr(_,g,n))continue;const m=Math.min(10*p,ac(_,g,n)-1,(o-f)*.92);if(m<3)continue;const M=Ne(_,g,m,14,0);St(e,M,f-r*.24,M,f,null,_t),uc(t,_,g,m,f,m,14,5,Me);const v=f+m,x=Ne(_,g,Math.max(.8,m*.16),8,0);St(e,x,v-.3,x,v+m*.16,null,_t),Ns(e,x,v+m*.16,_,v+m*.42,g,null,_t)}},beacon(i){const{wall:t,trim:e,deck:n,y:s}=i,o=bs(e,n,s,s+i.h*.03,2,2.6,_t);Ae(t,o.ring,o.y,null,$t);const[r,a]=Ue(o.ring);vr(e,r,a,2.2,o.y,i.baseY+i.h,i.ang,_t,2.4)},classicalAttic(i){const{wall:t,trim:e,deck:n,y:s}=i,o=Wt(i.h*.045,1.8,4.5),r=ve(n,-1.1,.02)||n;St(e,n,s,r,s+o*.4,null,_t),St(e,r,s+o*.4,n,s+o*.75,null,_t),St(e,n,s+o*.75,n,s+o,null,_t),Ae(t,n,s+o,null,$t);const a=ve(n,.3)||n;St(e,a,s+o,a,s+o+1.05,null,_t),St(e,a,s+o+1.05,n,s+o+1.05,null,_t),Tn(n,11,(l,c,u)=>{const h=yn(l,c,1.7,.9,Math.cos(u),Math.sin(u));Ps(e,h,s+o+.9,s+o+1.85,null,_t)})},gothicCrown(i){const{wall:t,trim:e,ring:n,deck:s,y:o,capY:r}=i,a=i.baseY+i.h,l=a-o,c=ve(s,Math.sqrt(cn(s))*.13,.05)||s,u=o+l*.72;St(t,c,o,c,u,null,Me),Tn(n,12,(f,d,p)=>{const _=yn(f,d,3.2,2.2,Math.cos(p),Math.sin(p));St(e,_,r-l*2.2,_,r+l*.3,null,_t),qn(e,f,d,1.7,r+l*.3,l*.55,p,_t)});for(const[f,d]of Mr(n,4))qn(e,f,d,3,r,l*1.05,i.ang,_t);Tn(c,11,(f,d,p)=>{const _=yn(f,d,2.2,1.4,Math.cos(p),Math.sin(p));St(e,_,o,_,u,null,_t),qn(e,f,d,1.4,u,l*.24,p,_t)});const h=bs(e,c,u,a,2,2,_t);Ae(t,h.ring,h.y,null,$t)},chapelFleche(i){const{wall:t,trim:e,deck:n,y:s}=i,o=i.baseY+i.h,r=i.baseY+i.h*.385,a=ve(n,kn(n,i.ang).across*.42,.02);let l=n;a?(St(t,n,s,a,r,null,$t),Ae(t,a,r,null,$t),l=a):_n(t,n,s,r,$t),Tn(n,7,(p,_)=>qn(e,p,_,.8,s,5,i.ang,_t));const[c,u]=Ue(l),h=Math.max(2.6,Math.sqrt(cn(n))*.14),f=Ne(c,u,h,8,0),d=r+(o-r)*.3;St(e,f,r-2,f,d,null,_t),Tn(f,2.6,(p,_)=>qn(e,p,_,.42,d,3,0,_t)),Ns(e,xo(f,c,u,.82),d,c,o,u,null,_t)},beauxArts(i){const{wall:t,trim:e,deck:n,y:s}=i,o=3.4,r=ve(n,-1.3,.02)||n;St(e,n,s,r,s+1.4,null,_t),St(e,r,s+1.4,n,s+o,null,_t);const a=ve(n,kn(n,i.ang).across*.3,.03);a?(St(t,n,s+o,a,s+o+4.5,null,$t),Ae(t,a,s+o+4.5,null,$t)):Ae(t,n,s+o,null,$t)},mausoleum(i){const{wall:t,trim:e,deck:n,y:s}=i,o=i.baseY+i.h,r=(o-s)*.36,a=ve(n,1.6,.1)||n;Tn(a,4.4,(u,h)=>{const f=Ne(u,h,1.2,6,0);St(e,f,s,f,s+r,null,_t)});const l=ve(n,3.4,.08)||n;St(t,l,s,l,s+r,null,Me),St(e,l,s+r,n,s+r+1.6,null,_t);const c=bs(e,n,s+r+1.6,o-(o-s)*.1,10,1.5,_t);_n(e,c.ring,c.y,o,_t)},planetarium(i){const{wall:t,trim:e,deck:n,y:s}=i;Ae(t,n,s,null,$t);const[o,r]=cc(n),a=Qr(o,r,n)?ac(o,r,n)-.8:0,l=Math.min(Wt(Math.sqrt(cn(n))*.2,5,14),a);if(l<3)return;const c=Ne(o,r,l,14,0);St(e,c,s,c,s+2.4,null,_t),uc(e,o,r,l,s+2.4,l*.85,14,5,_t)},cableRoof(i){const{wall:t,trim:e,deck:n,y:s}=i,o=kn(n,i.ang),[r,a]=Ue(n),l=Math.cos(i.ang),c=Math.sin(i.ang),h=[-c,l][1]>0?-1:1,f=o.along*.5,d=i.h*.72,p=14,_=(M,v)=>{const x=(v-.5)*o.across*h;return[r+M*l-x*c,a+M*c+x*l]},g=M=>s+Math.max(.6,d*(1-((M-.66)/.72)**2)),m=1.8;for(let M=0;M<p;M++){const v=M/p,x=(M+1)/p,w=g(v),T=g(x),b=_(-f,v),A=_(f,v),y=_(-f,x),S=_(f,x);t.quad([b[0],w,b[1]],[A[0],w,A[1]],[S[0],T,S[1]],[y[0],T,y[1]],null,$t),e.quad([b[0],w-m,b[1]],[y[0],T-m,y[1]],[S[0],T-m,S[1]],[A[0],w-m,A[1]],null,_t),e.quad([b[0],w,b[1]],[y[0],T,y[1]],[y[0],T-m,y[1]],[b[0],w-m,b[1]],null,_t),e.quad([A[0],w-m,A[1]],[S[0],T-m,S[1]],[S[0],T,S[1]],[A[0],w,A[1]],null,_t)}for(const M of[-f,f])for(let v=0;v<p;v++){const x=v/p,w=(v+1)/p,T=_(M,x),b=_(M,w);t.quad([T[0],s,T[1]],[T[0],g(x)-m,T[1]],[b[0],g(w)-m,b[1]],[b[0],s,b[1]],null,Me)}for(let M=0;M<5;M++){const v=(M/4-.5)*o.along*.86,x=_(v,.05);vr(e,x[0],x[1],1.2,s,g(.05)+i.h*.12,i.ang,_t)}Ae(t,n,s,null,$t)}};function jh(i){const{footprint:t,height:e,baseY:n=0,style:s=null,seed:o=null,tier:r=null,floorH:a=3.5,windowW:l=3.2,skirt:c=0,indexed:u=!1}=i||{},h={wall:null,trim:null,tier:0,triangles:0,roofRing:null,roofY:n},f=ha(t);if(!f)return h;const d=Pd(f),p=Wt(ua(d?d.h:e,10),2,800),_=Number.isFinite(o)?o:Lo(t),g=d?2:r===0||r===1||r===2?r:Vc(f,p),m=n-Math.max(0,c),M=Fv[s]||Sd,v=new lc({pins:!0,indexed:u}),x=new lc({pins:!0,indexed:u}),w=(F,O)=>{const z=v.geometry(),H=x.geometry();return z&&Vh(z,v,a,l,n,M),H&&Vh(H,x,a,l,n,M),{wall:z,trim:H,tier:g,triangles:v.triangles+x.triangles,roofRing:F,roofY:O}};if(g===0){const F=rc(f,oc,_o[0]);return St(v,F,m,F,n+p,null,Me),Ae(v,F,n+p,null,$t),Gh(v,F,m,null,$t),w(null,n+p)}const T=d?Jv(d,rc(f,oc,_o[2]),p):Rd(t,p,_,{style:s,maxVerts:_o[g]});if(!T.length)return h;const b=T[0].ring,A=Ad(b,p,_,s);d&&(A.roof={form:"flat",rise:0});const y=Xv(_,s,p,A.typ);d&&d.reveal&&(y.reveal=d.reveal);const S=d?3200:g===2?2100:460;let R=null,D=null;for(let F=0;F<T.length;F++){const O=T[F],z=O.ring,H=F===0?m:n+O.y0,J=ve(z,y.reveal)||z,G=O.top&&A.roof.form!=="flat",et=n+O.y1-(G?A.roof.rise:0);if(et-H<1.2){St(v,z,H,z,n+O.y1,null,Me),Ae(v,z,n+O.y1,null,$t),R={ring:z,y:n+O.y1};continue}const Y=F===0&&J!==z&&et-H>y.baseH+y.sillH+y.corniceH+2.2,Q=Y?Yv(v,x,z,J,H,y):H,V=Y?J:z;if(G){const ht=Math.max(Q+.3,et-y.corniceH);Xh(v,x,V,Q,ht,y,0),St(x,V,ht,z,et,null,_t),R=Zv(v,x,z,et,A.roof,A.ang),R?D={ring:z,eaveY:et}:R=Yh(v,x,z,z,et,n+O.y1,y,"deck",y.corniceH,g);continue}const ot=O.top?"deck":"cap",X=ot==="cap"?y.corniceH:y.parapetH+y.corniceH,L=Math.max(Q+.4,et-X),I=Wt(y.corniceH,.3,(et-L)*.7),k=O.top&&d&&d.solidTop?Math.min(d.solidTop,(L-Q)*.3):0;Xh(v,x,V,Q,L,y,Kv(A.typ,g,L-Q),k>.4?k:y.capitalH);const $=Math.floor((S-v.triangles-x.triangles)/6),at=d&&d.piers===!1?0:Math.min($v(A.typ,g,Gc(V)),$);at>1&&V!==z&&L-Q>6&&qv(x,V,z,Q,L+I*.5,y,at);const ct=Yh(v,x,z,V,L,et,y,ot,I,g);O.top&&(R=ct)}if(Gh(v,b,m,null,$t),d&&R&&Zh[d.crown]){const F=T[T.length-1];try{Zh[d.crown]({wall:v,trim:x,ring:F.ring,deck:R.ring,y:R.y,capY:n+F.y1,baseY:n,h:p,ang:A.ang,s:_})}catch{}return w(null,R.y)}if(D){if(Pe(_,9)<.72){const F=.9+Pe(_,10)*.4,O=Wc(D.ring,_,A.ang)(F,.75,8);O&&Ps(x,yn(O[0],O[1],F,.75,Math.cos(A.ang),Math.sin(A.ang)),D.eaveY,R.y+.7+Pe(_,13)*1.2,null,_t)}}else if(R&&v.triangles+x.triangles<S){const F=Cd(R.ring,p,A.typ,_,g);for(const O of F.boxes){if(v.triangles+x.triangles>=S)break;Wv(v,x,O,F,R.y)}}return w(D?null:R&&R.ring,R?R.y:n+p)}const on={duct:[.075,.078,.086],metal:[.095,.098,.106],rail:[.038,.04,.045],louvre:[.05,.052,.058],tank:[.062,.05,.04]};function Kh(i,t){return[Wt(i[0]*t,0,1),Wt(i[1]*t,0,1),Wt(i[2]*t,0,1)]}function tM(i){const{footprint:t,height:e,baseY:n=0,seed:s=null,tier:o=null,style:r=null,roofRing:a=null,roofY:l=null,maxTriangles:c=null,indexed:u=!1}=i||{},h=ha(t);if(!h||Pd(h))return null;const f=Wt(ua(e,10),2,800),d=Number.isFinite(s)?s:Lo(t),p=o===0||o===1||o===2?o:Vc(h,f);if(p===0)return null;let _=a,g=l;const m=Rd(t,f,d,{style:r,maxVerts:_o[p]});if(!m.length)return null;const M=Ad(m[0].ring,f,d,r);if(M.roof.form!=="flat")return null;if(!_){const Y=m[m.length-1];_=ve(Y.ring,.5)||Y.ring,g===null&&(g=n+Y.y1)}if(!_||_.length<3)return null;(g===null||!Number.isFinite(g))&&(g=n+f);const v=Cd(_,f,M.typ,d,p),x=v.inner,w=v.area;if(!(w>20)||p===1&&(w<130||f<10))return null;const T=Math.sqrt(w),b=v.ca,A=v.sa,y=v.ang,S=p===2,R=c??(S?520:110),D=new lc({colors:!0,indexed:u}),F=Wc(x,d,y,v.taken,v.zone),O=g+v.padH,z=(Y,Q,V,ot,X,L,I=O)=>{Ps(D,yn(Y,Q,V,ot,b,A),I,I+X,L,Me)},H=S&&w>460?w>1400?2:1:0;for(let Y=0;Y<H&&D.triangles<R;Y++){const Q=Pe(d,40+Y),V=Wt(T*.16,3.4,8),ot=Wt(T*.11,2.4,5.5),X=2.6+Q*1.4,L=F(V+1,ot+1,12);if(!L)continue;z(L[0],L[1],V,ot,X,on.metal);for(let k=0;k<3;k++){const $=O+X*(.2+k*.22),at=yn(L[0],L[1],V+.16,ot+.16,b,A);St(D,at,$,at,$+X*.13,on.louvre,Me)}const I=Ne(L[0],L[1],Math.min(V,ot)*.34,8,y);Ps(D,I,O+X,O+X+.7+Q*.4,on.rail,Me)}const J=Wt(Math.floor(w/240),1,S?5:2);let G=null;for(let Y=0;Y<J&&D.triangles<R;Y++){const Q=Pe(d,50+Y),V=2+Q*1.8,ot=1.6+Pe(d,60+Y)*1.5,X=1.1+Q*.8,L=V*.5+(G?G.sx*.5:0)+.9,I=F(V,ot,10,G?[G.x+L*b,G.z+L*A]:null);if(I&&(G={x:I[0],z:I[1],sx:V},z(I[0],I[1],V,ot,X,Kh(on.duct,.85+Q*.35)),Q>.5)){const k=Ne(I[0],I[1],Math.min(V,ot)*.36,6,y);Ps(D,k,O+X,O+X+.4+Q*.3,on.rail,Me)}}if(S&&w>320&&D.triangles<R){const Y=Pe(d,45),Q=Wt(T*(.3+Y*.25),4,26),V=F(Q,.9+Y*.5,10);V&&z(V[0],V[1],Q,.9+Y*.5,.8+Y*.4,on.duct)}if(S&&w>260&&D.triangles+x.length*4<R){const Y=ve(x,.9);if(Y){const Q=g+.75,V=g+1.15;St(D,Y,Q,Y,V,on.rail,Me),St(D,Y,V,Y,Q,on.rail,Me)}}if(f>85||f>55&&Pe(d,70)<.3){const Y=F(3.4,1.9,14,null,!1);if(Y){const Q=Wt(f*.1,6,26),V=yn(Y[0],Y[1],.9,.9,b,A),ot=xo(V,Y[0],Y[1],.28);St(D,V,g,ot,g+Q,on.rail,Me),Ws(D,ot,g+Q,on.rail,Me);const X=yn(Y[0],Y[1],3.4,.24,b,A);Ps(D,X,g+Q*.62,g+Q*.62+.22,on.rail,Me)}}const et=S?Wt(Math.floor(w/320),1,5):Wt(Math.floor(w/600),0,2);for(let Y=0;Y<et&&D.triangles<R;Y++){const Q=Pe(d,80+Y),V=.45+Q*.5,ot=F(V,V,8,null,!1);ot&&z(ot[0],ot[1],V,V,.5+Q*.8,Kh(on.rail,1+Q*.6),g)}if(S&&w>220&&Pe(d,90)<.16){const Y=Pe(d,91),Q=Wt(T*.11,1.6,3.4),V=F(Q*2.2,Q*2.2,14,null,!1);if(V){const ot=2.6+Y*1.8;for(let I=0;I<4;I++){const k=y+Math.PI*.25+I/4*Math.PI*2,$=V[0]+Math.cos(k)*Q*.72,at=V[1]+Math.sin(k)*Q*.72,ct=yn($,at,.26,.26,b,A);St(D,ct,g,ct,g+ot,on.rail,Me)}const X=Ne(V[0],V[1],Q,8,y),L=g+ot+3+Y*1.4;St(D,X,g+ot,X,L,on.tank,Me),Ns(D,X,L,V[0],L+Q*.55,V[1],on.tank,Me)}}return D.geometry()}function eM({dayMode:i=!0}={}){return new Le({color:16777215,vertexColors:!0,roughness:.78,metalness:.18,envMapIntensity:i?.55:.35})}function nM(i){const t=i.clone();return t.offsetHSL(0,-.02,.05),t}const iM={"Pittsburgh · Architecture · Meters":"피츠버그 · 건축 · 미터 좌표","Architecture · Meters":"건축 · 미터 좌표",Pittsburgh:"피츠버그","OSM rivers, streets, parks, downtown footprints. +X east · +Y up · +Z south.\n        Confluence = 0.":"OSM 강, 도로, 공원, 다운타운 건물 데이터. +X=동, +Y=위, +Z=남. 세 강 합류점 = 원점.",Layers:"레이어","buildings · loading":"건물 · 로딩 중",Settings:"설정",Quality:"품질",Low:"낮음",Medium:"중간",High:"높음",Ultra:"울트라",Resolution:"해상도","50%":"50%","75%":"75%","100%":"100%","150%":"150%","200%":"200%","Lower either if the city stutters. Bloom stays off on phones.":"도시가 끊겨 보이면 둘 다 낮춰 주세요. 모바일에서는 Bloom 효과가 꺼집니다.","Generating Pittsburgh…":"피츠버그 생성 중…",Sunny:"맑음",Rain:"비",Snow:"눈",Aerial:"항공뷰",Downtown:"다운타운","The Point":"포인트",Bridges:"다리",Stadiums:"경기장",Oakland:"오클랜드",Cathedral:"대학교","Mt. Wash":"마운트워싱턴",Rotate:"회전","U.S. STEEL TOWER":"U.S. 스틸 타워","PPG PLACE":"PPG 플레이스","BNY MELLON CENTER":"BNY 멜론 센터","FIFTH AVENUE PLACE":"5번가 플레이스","ONE OXFORD CENTRE":"원 옥스포드 센터","TOWER AT PNC PLAZA":"PNC 플라자 타워","GULF TOWER":"걸프 타워","KOPPERS BUILDING":"코퍼스 빌딩","GRANT BUILDING":"그랜트 빌딩","UNION TRUST BUILDING":"유니온 트러스트 빌딩","ALLEGHENY COUNTY COURTHOUSE":"알러게니 카운티 법원","CONVENTION CENTER":"컨벤션 센터","PNC PARK":"PNC 파크","ACRISURE STADIUM":"애크리슈어 스타디움","PPG PAINTS ARENA":"PPG 페인츠 아레나","ANDY WARHOL MUSEUM":"앤디 워홀 미술관","SCIENCE CENTER":"사이언스 센터","CATHEDRAL OF LEARNING":"래닝의 대학성당","HEINZ MEMORIAL CHAPEL":"하인츠 기념 예배당","CARNEGIE MUSEUM":"카네기 박물관","SOLDIERS & SAILORS MEMORIAL":"솔저스 & 세일러스 기념관","PHIPPS CONSERVATORY":"핍스 식물원","POINT STATE PARK":"포인트 스테이트 파크","MOUNT WASHINGTON":"마운트워싱턴","THE STRIP DISTRICT":"스트립 지구",OAKLAND:"오클랜드","KOPPERS TOWER":"코퍼스 타워","ROBERTO CLEMENTE BRIDGE":"로베르토 클레멘테 다리","ANDY WARHOL BRIDGE":"앤디 워홀 다리","RACHEL CARSON BRIDGE":"레이첼 카슨 다리","FORT PITT BRIDGE":"포트 피트 다리","FORT DUQUESNE BRIDGE":"포트 듀케인 다리","SMITHFIELD STREET BRIDGE":"스미스필드 스트리트 다리","LIBERTY BRIDGE":"리버티 다리","VETERANS BRIDGE":"베테랑 다리","WEST END BRIDGE":"웨스트 엔드 다리","DAVID MCCULLOUGH BRIDGE":"데이비드 매컬로 다리","ANDY WARHOL RAIL BRIDGE":"앤디 워홀 철교","BIRMINGHAM BRIDGE":"버밍엄 다리","SOUTH TENTH STREET BRIDGE":"사우스 10번가 다리","PANHANDLE BRIDGE":"팬핸들 다리","HOT METAL BRIDGE":"핫 메탈 다리","31ST STREET BRIDGE":"31번가 다리","40TH STREET BRIDGE":"40번가 다리","HOMESTEAD GRAYS BRIDGE":"홈스테드 그레이스 다리","Duquesne Incline":"듀케인 인클라인","Monongahela Incline":"모논거헐라 인클라인","DUQUESNE INCLINE":"듀케인 인클라인","MONONGAHELA INCLINE":"모논거헐라 인클라인"};function fa(i){return i==null?"":iM[i]??i}const sM={gold:15781968,steel:9278364,bronze:5464127,blue:4286606,apricot:13612954,historic:8885406,rust:7296326},oM=10131081,rM=6053475,aM=2763824,lM=12103840,cM=[{match:/clemente/,form:"suspension",eyebar:!0,spans:[65.5,131,65.5],width:18.9,clear:12.3,tower:11.6,paint:"gold"},{match:/warhol bridge/,form:"suspension",eyebar:!0,spans:[66,135,66],width:18.9,clear:12.3,tower:13,paint:"gold"},{match:/carson/,form:"suspension",eyebar:!0,spans:[65.5,125,65.5],width:18.9,clear:12.3,tower:11.6,paint:"gold"},{match:/fort pitt/,form:"decked-arch",spans:[69.5,229,69.5],arch:1,width:21,clear:14.4,rise:31,upper:8.4,paint:"gold"},{match:/fort duquesne/,form:"decked-arch",spans:[62,130,62],arch:1,width:21,clear:14,rise:22,upper:8.4,paint:"gold"},{match:/smithfield/,form:"lenticular",spans:[110,110],width:18,clear:13,rise:12,drop:5.5,paint:"historic"},{match:/liberty/,form:"cantilever",spans:[136.5,136.5],width:17,clear:13.5,depth:17,paint:"apricot"},{match:/veterans/,form:"girder",spans:[97,125,98],width:28,clear:15.5,depth:4.6,paint:"steel"},{match:/west end/,form:"tied-arch",spans:[47,238,54],arch:1,width:18,clear:20,rise:43,paint:"gold"},{match:/mccullough|16th/,form:"through-arch",spans:[64,133,64],width:12.6,clear:12.6,rise:19,paint:"gold"},{match:/fort wayne|warhol rail/,form:"through-truss",spans:[51,51,97,51,51],width:17.3,clear:12.5,depth:12,paint:"steel"},{match:/birmingham/,form:"tied-arch",spans:[70,185,70],arch:1,width:24,clear:19.8,rise:33,paint:"bronze"},{match:/tenth|10th/,form:"suspension",spans:[84,221,84],width:17.7,clear:15.3,tower:33,paint:"gold"},{match:/panhandle/,form:"through-truss",spans:[90,107,90],width:9,clear:13.4,depth:11,paint:"steel"},{match:/hot metal/,form:"through-truss",spans:[90,90,90],width:11,clear:12,depth:10,twin:23,paint:"rust"},{match:/31st/,form:"deck-arch",spans:[55,110,55],arch:1,width:11,clear:22.1,rise:17,paint:"blue"},{match:/40th|washington crossing/,form:"deck-arch",spans:[55,110,55],arch:1,width:12,clear:22.1,rise:17,paint:"steel"}],$h={sisters:{form:"suspension",eyebar:!0,spans:[66,130,66],width:19,clear:12.4,tower:12,paint:"gold"},"double-arch":{form:"decked-arch",spans:[65,180,65],arch:1,width:21,clear:14,rise:26,upper:8.4,paint:"gold"},lenticular:{form:"lenticular",spans:[110,110],width:18,clear:13,rise:12,drop:5.5,paint:"historic"},cantilever:{form:"cantilever",spans:[137,137],width:17,clear:13.5,depth:17,paint:"steel"},truss:{form:"through-truss",spans:[90,110,90],width:14,clear:13,depth:11,paint:"steel"}};function uM(i){const t=(i||"").toLowerCase();return/clemente|warhol bridge|carson/.test(t)?"sisters":/fort pitt|fort duquesne/.test(t)?"double-arch":/smithfield/.test(t)?"lenticular":/liberty/.test(t)?"cantilever":"truss"}function hM(i){const t=(i.n||"").toLowerCase();return cM.find(n=>n.match.test(t))||$h[i.type||uM(i.n)]||$h.truss}function we(i,t,e,n){const s=new _e(e.x,e.y,e.z),o=new ce().compose(t,n,new U(1,1,1));s.applyMatrix4(o),i.push(s)}function fM(i,t,e,n,s){const o=new en(e,e*1.15,n,8),r=new ce().compose(t,s,new U(1,1,1));o.applyMatrix4(r),i.push(o)}function Ce(i,t,e,n,s){const o=t.distanceTo(e);if(o<.2)return;const r=new U().lerpVectors(t,e,.5),a=new U().subVectors(e,t).normalize(),l=new Kn().setFromUnitVectors(new U(1,0,0),a);we(i,r,new U(o,n,s),l)}function Jh(i,t){const e=new U(i[0],0,i[1]),n=new U(t[0],0,t[1]),s=new U().subVectors(n,e),o=s.length()||1;s.multiplyScalar(1/o);const r=new U(s.z,0,-s.x),a=new Kn().setFromUnitVectors(new U(1,0,0),s);return{p0:e,p1:n,dir:s,right:r,len:o,quat:a}}function Ot(i,t,e,n=0,s=0){return new U(i.p0.x+i.dir.x*i.len*t+i.right.x*n*s,e,i.p0.z+i.dir.z*i.len*t+i.right.z*n*s)}function dM(i,t){const e=Math.max(.004,2/i.len);let n=null,s=null;for(let o=0;o<=1.0001;o+=e){const r=Ot(i,o,0);t.inside(r.x,r.z)?(n===null&&(n=o),(!s||o-n>s[1]-s[0])&&(s=[n,Math.min(1,o)])):n=null}return s}function pM(i,t,e){const n=t.reduce((d,p)=>d+p,0)||1,s=dM(i,e),o=Math.max(Math.min(n,i.len)/i.len,s?s[1]-s[0]:0),r=Math.min(.5,o/2),a=s?(s[0]+s[1])/2:.5,l=Math.min(1-r,Math.max(r,a)),c=[l-r,l+r],u=[];let h=c[0];for(const d of t){const p=h+(c[1]-c[0])*d/n;u.push([h,p]),h=p}u[u.length-1][1]=c[1];const f=[];for(const[d,p]of[[0,c[0]],[c[1],1]]){const _=(p-d)*i.len;if(_<8)continue;const g=Math.max(1,Math.round(_/34));for(let m=0;m<g;m++)f.push([d+(p-d)*m/g,d+(p-d)*(m+1)/g])}return{main:c,ranges:u,bays:f}}function mM(i,t){const e=i[1][0]-i[0][0],n=i[1][1]-i[0][1],s=Math.hypot(e,n)||1,o=e/s,r=n/s,a=Math.max(24,s*.2);return i.map((l,c)=>{if(!t.inside(l[0],l[1]))return l.slice();const u=c===0?-1:1;let h=0;for(;h<a&&t.inside(l[0]+o*u*h,l[1]+r*u*h);)h+=3;return h=Math.min(a,h+12),[+(l[0]+o*u*h).toFixed(2),+(l[1]+r*u*h).toFixed(2)]})}function Qh(i,t,e,n,s,o=1.8){const r=Ot(e,.5,n);we(i,r,new U(e.len+8,o,s),e.quat);const a=Math.max(1.6,s*.14),l=n+o*.35;for(const c of[-1,1]){const u=Ot(e,.5,l,c,(s-a)*.5);we(t,u,new U(e.len+6,.28,a),e.quat)}}function gM(i,t,e,n,s){const o=e+s*.5+1.15;for(const r of[-1,1]){const a=Ot(t,.5,o,r,n*.48);we(i,a,new U(t.len+6,.16,.16),t.quat);const l=Math.max(8,Math.round(t.len/14));for(let c=0;c<=l;c++){const u=c/l,h=Ot(t,u,e+s*.5+.55,r,n*.48);we(i,h,new U(.14,1.1,.14),t.quat)}}}function _M(i,t,e,n,s){for(const o of[0,1]){const r=Ot(t,o,0),a=Math.max(-1,e(r.x,r.z)),l=Math.max(4,n-a+1.2),c=Ot(t,o,a+l*.5);we(i,c,new U(9,l,s+3),t.quat)}}function tf(i,t,e,n,s,o=null){for(const r of e){const l=(o??n)-1.2,c=l- -4.2;if(c<1)continue;const u=Ot(t,r,-4.2+c*.5);we(i,u,new U(7.5,c,s*.82),t.quat);const h=Ot(t,r,-4.2+c*.3);fM(i,h,s*.16,c*.6,new Kn),we(i,Ot(t,r,l+.7),new U(9.5,1.4,s*.95),t.quat)}}function xM(i,t,e,n,s,o){for(const r of e){const a=Ot(t,r,0),l=Math.min(n-3,o(a.x,a.z)),c=n-1.6-l;if(!(c<2)){for(const u of[-1,1]){const h=Ot(t,r,l+c*.5,u,s*.3);we(i,h,new U(1.9,c,1.7),t.quat)}we(i,Ot(t,r,l+c+.75),new U(2.6,1.5,s*.9),t.quat)}}}function vM(i,t,e,n,s,o,r){for(const a of[0,1]){const l=a===0?-1:1,c=Ot(e,a,0),u=Math.max(0,o(c.x,c.z)),h=n-u;if(h<3)continue;const f=Math.min(150,Math.max(30,h/.085)),d=Math.max(2,Math.round(f/25));let p=n,_=a===0?0:e.len;for(let g=1;g<=d;g++){const m=_+l*f/d,M=n-h*g/d,v=Ot(e,_/e.len,p),x=Ot(e,m/e.len,M),w=Math.max(0,o(x.x,x.z)),T=Math.max(M,g===d?w:w+1.2);x.y=T;const b=s*(.94-.34*(g/d));if(Ce(t,v,x,r,b),T-w>2.5)for(const A of[-1,1]){const y=Ot(e,m/e.len,(T+w)*.5,A,b*.36);we(i,y,new U(1.6,T-w,1.4),e.quat)}if(p=T,_=m,T-w<.6)break}}}function Dd(i){return i.tower*(i.eyebar?2.15:1.5)}function sl(i,t,e,n,s,o){let r=null;for(let a=0;a<=s;a++){const l=a/s,c=n*4*l*(1-l),u=new U(t.x+(e.x-t.x)*l,t.y+(e.y-t.y)*l-c,t.z+(e.z-t.z)*l);r&&Ce(i,r,u,o,o),r=u}}function MM(i,t,e,n,s,o,r,a){const l=!!o.eyebar,c=Dd(o),u=n+c,h=s*.42,f=r[0],d=r[r.length-1],p=n+2.4,_=p,g=l?p+.8:n+c*.26,m=l?.9:.7,M=l?.38:.3;for(const x of r){const w=n-4;for(const b of[-1,1]){const A=Ot(e,x,(w+u)*.5,b,h);we(i,A,new U(4.4,u-w,3.8),e.quat),we(i,Ot(e,x,u+2.9,b,h),new U(2.2,3.4,2),e.quat)}const T=n+c*.52;we(i,Ot(e,x,u+.9),new U(5,2.6,s*1.04),e.quat),we(i,Ot(e,x,T),new U(3.2,1.9,s*.96),e.quat);for(const b of[-1,1])Ce(i,Ot(e,x,b>0?T:u-.6,-1,h),Ot(e,x,b>0?u-.6:T,1,h),.8,.8)}const v=x=>{if(x<=f)return _+(u-_)*(x-a[0])/(f-a[0]||1);if(x>=d)return u+(_-u)*(x-d)/(a[1]-d||1);const w=(x-f)/(d-f);return u-(u-g)*4*w*(1-w)};for(const x of[-1,1]){const w=(R,D)=>Ot(e,R,D,x,h),T=l?4:8;sl(i,w(a[0],_),w(f,u),0,T,m),sl(i,w(f,u),w(d,u),u-g,l?12:22,m),sl(i,w(d,u),w(a[1],_),0,T,m);const b=l?12:9,A=(a[1]-a[0])*e.len,y=Math.max(8,Math.round(A/b));for(let R=1;R<y;R++){const D=a[0]+(a[1]-a[0])*R/y;if(Math.abs(D-f)<.015||Math.abs(D-d)<.015)continue;const F=w(D,v(D)),O=w(D,p-.4);F.y-O.y<1.4||Ce(i,F,O,M,M)}const S=Ot(e,.5,n+1.1,x,h);we(i,S,new U(e.len,l?2.6:1.8,.9),e.quat)}if(!l)for(const x of[0,1])we(t,Ot(e,x,n+2.6),new U(10,7,s*.9),e.quat)}function ol(i,t,e,n,s,o,r,a,l=16){for(const c of[-1,1]){let u=null;for(let h=0;h<=l;h++){const f=h/l,d=e+(n-e)*f,p=s+(o-s)*Math.sin(Math.PI*f),_=Ot(t,d,p,c,a);if(u&&Ce(i,u,_,1.2,1.1),u=_,h===0||h===l)continue;const g=Ot(t,d,r,c,a);Math.abs(_.y-g.y)<1.5||(_.y>g.y?Ce(i,_,g,.4,.4):h%2===0&&Ce(i,_,g,.8,.8))}}for(const c of[.3,.5,.7]){const u=e+(n-e)*c,h=s+(o-s)*Math.sin(Math.PI*c);h-r<4||we(i,Ot(t,u,h-.6),new U(1.1,.9,a*2),t.quat)}}function ef(i,t,e,n,s,o,r=3.2){const a=o*.44,l=Math.max(3,Math.round((n-e)*t.len/22));for(const c of[-1,1]){const u=h=>Ot(t,e+(n-e)*h,s+r,c,a);for(let h=0;h<=l;h++){const f=h/l;Ce(i,Ot(t,e+(n-e)*f,s,c,a),u(f),.5,.5),h<l&&(Ce(i,u(f),u((h+1)/l),.6,.6),Ce(i,Ot(t,e+(n-e)*f,s,c,a),u((h+1)/l),.4,.4))}}}function yM(i,t,e,n,s,o,r){const a=o*.46,l=Math.max(4,Math.round((n-e)*t.len/16)),c=s+.8,u=s+r;for(const f of[-1,1])for(let d=0;d<=l;d++){const p=e+(n-e)*(d/l);if(Ce(i,Ot(t,p,c,f,a),Ot(t,p,u,f,a),.6,.6),d===l)continue;const _=e+(n-e)*((d+1)/l);Ce(i,Ot(t,p,u,f,a),Ot(t,_,u,f,a),.8,.8),Ce(i,Ot(t,p,c,f,a),Ot(t,_,c,f,a),.7,.7);const g=d%2===0;Ce(i,Ot(t,g?p:_,c,f,a),Ot(t,g?_:p,u,f,a),.45,.45)}for(const f of[e,n])we(i,Ot(t,f,u-.5),new U(1,1.4,a*2),t.quat);const h=Math.max(2,Math.round((n-e)*t.len/32));for(let f=1;f<h;f++){const d=e+(n-e)*(f/h);we(i,Ot(t,d,u-.3),new U(.7,.7,a*2),t.quat)}}function SM(i,t,e,n,s,o,r,a){const l=o*.44,c=Math.max(6,Math.round((n-e)*t.len/14)),u=r*1.65,h=a*1.65;for(const f of[-1,1]){const d=_=>Ot(t,e+(n-e)*_,s+1+u*Math.sin(Math.PI*_),f,l),p=_=>Ot(t,e+(n-e)*_,s+.4-h*Math.sin(Math.PI*_),f,l);for(let _=0;_<=c;_++){const g=_/c;if(Ce(i,p(g),d(g),.8,.8),_===c)continue;const m=(_+1)/c;Ce(i,d(g),d(m),1.4,1.3),Ce(i,p(g),p(m),1.2,1.1),Ce(i,p(g),d(m),.6,.6)}}for(const f of[0,1]){const d=e+(n-e)*f;we(i,Ot(t,d,s+2.6),new U(1.2,3.4,l*2.1),t.quat)}}function wM(i,t,e,n,s,o,r){const a=o*.45,l=Math.max(6,Math.round((n-e)*t.len/16)),c=s+.8;for(const u of[-1,1]){const h=f=>{const d=1-.62*Math.sin(Math.PI*f);return Ot(t,e+(n-e)*f,c+r*d,u,a)};for(let f=0;f<=l;f++){const d=f/l;if(Ce(i,Ot(t,e+(n-e)*d,c,u,a),h(d),.6,.6),f===l)continue;const p=(f+1)/l;Ce(i,h(d),h(p),.8,.8),Ce(i,Ot(t,e+(n-e)*d,c,u,a),Ot(t,e+(n-e)*p,c,u,a),.7,.7);const _=d<.5;Ce(i,Ot(t,e+(n-e)*(_?d:p),c,u,a),h(_?p:d),.45,.45)}}for(const u of[0,1]){const h=e+(n-e)*u;we(i,Ot(t,h,c+r-.6),new U(1.1,1.5,a*2),t.quat)}}function nf(i,t,e,n,s,o,r){const a=(n-e)*t.len;if(a<2)return;const l=s-r*.5-.6;for(let u=0;u<4;u++){const h=Ot(t,(e+n)*.5,l,u/3-.5,o*.72);we(i,h,new U(a,r,1.2),t.quat)}const c=Math.max(2,Math.round(a/22));for(let u=0;u<=c;u++){const h=e+(n-e)*(u/c);we(i,Ot(t,h,l),new U(.7,r*.8,o*.78),t.quat)}}function bM(i,{yFn:t,waterIndex:e,addLabel:n,dayMode:s=!0}){const o=new Ie,r=new Map,a=[],l=[],c=[],u=(g,m)=>(g.has(m)||g.set(m,[]),g.get(m));for(const g of i){const m=hM(g),M=mM(g.pts,e),v=m.twin?[0,m.twin]:[0];for(const x of v){const w=Jh(M[0],M[1]),b=x?Jh([M[0][0]+w.right.x*x,M[0][1]+w.right.z*x],[M[1][0]+w.right.x*x,M[1][1]+w.right.z*x]):w,A=Math.max(0,t(M[0][0],M[0][1])),y=Math.max(0,t(M[1][0],M[1][1])),S=m.form==="girder"?1.4:1.8,R=Math.max(m.clear+S*.5+.6,Math.max(A,y)+2.4),D=m.width,F=u(r,m.paint),{main:O,ranges:z,bays:H}=pM(b,m.spans,e),J=z.slice(0,-1).map(Y=>Y[1]),G=m.upper?R+m.upper:null;Qh(l,c,b,R,D,S),G!==null&&Qh(l,c,b,G,D,S),gM(F,b,G??R,D,S),_M(a,b,t,R,D),tf(a,b,J,R,D),tf(a,b,O.filter(Y=>Y>.01&&Y<.99),R,D);for(const[Y,Q]of H)nf(F,b,Y,Q,R,D,Math.min(4.2,R*.3));xM(a,b,H.map(([,Y])=>Y).filter(Y=>Y>.01&&Y<.99),R,D,t),x||vM(a,l,b,G??R,D,t,S);const et=m.arch??-1;switch(m.form){case"suspension":MM(F,a,b,R,D,m,J,O);break;case"tied-arch":z.forEach(([Y,Q],V)=>{V===et?ol(F,b,Y,Q,R+1,R+m.rise,R+1.2,D*.42):ef(F,b,Y,Q,R+1,D,3.4)});break;case"decked-arch":z.forEach(([Y,Q],V)=>{V===et?ol(F,b,Y,Q,R+1,R+m.rise,R+1.2,D*.54,18):ef(F,b,Y,Q,R+1,D,3.4)});for(const[Y,Q]of z){const V=Math.max(3,Math.round((Q-Y)*b.len/26));for(let ot=0;ot<=V;ot++){const X=Y+(Q-Y)*(ot/V);for(const L of[-1,1]){const I=Ot(b,X,(R+G)*.5,L,D*.4);we(F,I,new U(.9,G-R,.9),b.quat)}}}break;case"through-arch":for(const[Y,Q]of z)ol(F,b,Y,Q,R-3.5,R+m.rise,R+1.2,D*.46,18);break;case"deck-arch":for(const[Y,Q]of z){const V=D*.4,ot=16;for(const X of[-1,1]){let L=null;for(let I=0;I<=ot;I++){const k=I/ot,$=Y+(Q-Y)*k,at=1.5+(R-3.5-1.5)*Math.sin(Math.PI*k),ct=Ot(b,$,at,X,V);L&&Ce(F,L,ct,1.3,1.2),L=ct,!(I%2||I===0||I===ot)&&Ce(F,ct,Ot(b,$,R-.6,X,V),.8,.8)}}}break;case"lenticular":for(const[Y,Q]of z)SM(F,b,Y,Q,R,D,m.rise,m.drop);break;case"cantilever":for(const[Y,Q]of z)wM(F,b,Y,Q,R,D,m.depth);break;case"girder":nf(F,b,O[0],O[1],R,D,m.depth);break;default:for(const[Y,Q]of z)yM(F,b,Y,Q,R,D,m.depth??11)}if(m.paint==="gold"&&m.form==="suspension"){const Y=Math.max(6,Math.round(b.len/35));for(let Q=0;Q<=Y;Q++){const V=Q/Y;we(F,Ot(b,V,R+2.8),new U(.5,.5,.5),b.quat)}}if(!x){const Y=m.tower?Dd(m)+4:m.rise??m.depth??12;n(fa(g.n),Ot(b,(O[0]+O[1])*.5,(G??R)+Y+22))}}}const h={};for(const[g,m]of Object.entries(sM))h[g]=new Le({color:m,emissive:m,emissiveIntensity:g==="gold"?s?.08:.42:s?.02:.14,roughness:g==="rust"?.72:.36,metalness:g==="rust"?.24:.48,envMapIntensity:.8});const f=new Le({color:oM,roughness:.92,metalness:.03}),d=new Le({color:s?rM:aM,roughness:.86,metalness:.08}),p=new Le({color:lM,roughness:.9,metalness:.04});function _(g,m,M=!0){if(!g.length)return;const v=sn(g,!1);if(!v)return;const x=new te(v,m);x.castShadow=M,x.receiveShadow=!0,o.add(x);for(const w of g)w.dispose()}for(const[g,m]of r)_(m,h[g]||h.steel);return _(a,f),_(l,d),_(c,p,!1),o}const se=[-913.6,-92.3],xn=27.6,sf=[[[-665.8,-82.5],[-669.4,-98.8],[-689.5,-100.1],[-715.5,-115.6],[-741.5,-124.4],[-757.2,-125.6],[-794.3,-113.9],[-833.5,-124.8],[-853.5,-119.5],[-851.7,-83.1],[-865.2,-47.6],[-848.2,-36.4],[-823.5,-34.3],[-780.8,-10.4],[-757,-9.3],[-718.1,-27.4],[-697.1,-32.9],[-684.3,-33.4],[-675.2,-27.2],[-666.6,-53.6]],[[-495.3,-138.7],[-515.9,-125],[-531.1,-105.7],[-541.5,-80.9],[-548.9,-38.6],[-547.9,-27.6],[-539.8,-13.4],[-525.8,-4.3],[-506.4,.1],[-477.8,-1.7],[-460,-7.4],[-441.3,-18.2],[-435.5,-31.1],[-438.2,-42.5],[-454.9,-71.7],[-463.5,-124.9],[-477.1,-136.1]],[[-576.9,76.3],[-488.8,25.1],[-420.2,-6.2],[-427.2,-13.5],[-434.1,-14.2],[-470.7,3.5],[-490.7,7.2],[-529.9,7.1],[-531.4,11.9],[-541.6,8.4],[-539.9,3.4],[-548.2,-5.9],[-552.9,-25],[-568.5,-27.8],[-580.2,63.9]],[[-543.3,84.2],[-535,101.9],[-460.3,115.3],[-453.5,112],[-438.6,79.6],[-459,70.6],[-486.6,68.1],[-514.8,72.2]],[[-635.7,-5.9],[-645.2,-8.5],[-671.4,-1],[-689.3,11.7],[-699.1,24.8],[-704.6,43],[-703.5,59.6],[-696.7,74.9],[-686,83.5],[-676.5,86.3],[-663.2,83.5],[-648.7,70.2],[-647.3,67.2],[-681.7,49.6],[-660,17.1],[-645.8,18.1]],[[-563.5,-70.9],[-550.6,-70.5],[-540.1,-101.1],[-522.1,-126.6],[-497.1,-144.5],[-465.3,-152.9],[-467.2,-161.6],[-480.6,-163.7],[-499.5,-150],[-515.1,-144.5],[-546.4,-148.1],[-557.5,-119.1]],[[-419.7,19.3],[-419.9,2.1],[-438.6,9.9],[-499.2,39.5],[-574.9,86],[-572.6,89.5],[-502.8,54.2]],[[-540.6,-156.3],[-523.6,-151.7],[-507.5,-154.7],[-465.4,-186],[-452.4,-201.1],[-505.7,-182.3],[-528.6,-168.9]],[[-495.5,59.7],[-464.1,61.7],[-433.8,70.9],[-419.9,43.3],[-417.3,27.2]],[[-518.7,-208],[-542.9,-187.3],[-552.4,-167.1],[-547.4,-161.9],[-519.8,-184.2],[-459.1,-206],[-490.4,-204.8]],[[-657.4,-162.9],[-660.6,-153.3],[-659,-145.8],[-653.6,-138.9],[-642.1,-135],[-623.4,-153.5],[-623.6,-157.4],[-639.3,-169.7],[-648.6,-169.4]],[[-556.9,96.3],[-552.6,106.2],[-561.8,123.8],[-574.8,109.4],[-573.1,105.9],[-580.9,101.8],[-587.1,111],[-559.3,142.3],[-540.5,107.1],[-548.2,91.9]],[[-548.3,-217.3],[-556.7,-211.8],[-563.1,-200.2],[-563.5,-186.7],[-559,-173.1],[-547.1,-193.4],[-528.9,-210.5]],[[-661.5,-44],[-670.1,-26.7],[-663.1,-29.8],[-653.6,-25.8],[-659.3,-11.8],[-653.1,-13.3],[-649,-22.8],[-638.9,-21.2],[-633.1,-34],[-644.6,-46.6]],[[-418.9,-24.6],[-427.4,-27.7],[-433.8,-53.2],[-431.4,-61.1]],[[-548.2,91.9],[-544.5,90.1],[-538,103.2],[-540.5,107.1]]],of=[[[-848.2,-36.4],[-854.6,-25.5],[-816.6,-1.7],[-784,11],[-735.5,19.8],[-716.6,16.4],[-703.2,9],[-683.6,-11.2],[-675.2,-27.2],[-684.3,-33.4],[-692,-33.9],[-718.1,-27.4],[-747.1,-12.4],[-772.7,-8.4],[-785.2,-12.2],[-823.5,-34.3]],[[-669.4,-98.8],[-677.2,-120],[-691.3,-137],[-706.7,-146.3],[-722.3,-150.8],[-779.9,-151.9],[-836.8,-138],[-833.5,-124.8],[-799.1,-114.3],[-786.9,-114.8],[-765.1,-123.9],[-750.4,-125.8],[-720.5,-117.9],[-689.5,-100.1]],[[-627.4,-86.2],[-623.7,-85],[-624.3,-93],[-639.1,-113.4],[-643.6,-132.7],[-660.4,-137.6],[-667.4,-147.2],[-666.7,-160.3],[-655.8,-173.7],[-659.8,-181.7],[-664.3,-181.7],[-673.9,-171.9],[-680.7,-156.7],[-678.5,-132.1],[-663.9,-116],[-630.5,-93.5]],[[-588,-204.2],[-600.7,-201.8],[-616.5,-155],[-631.9,-139.3],[-636.7,-128.7],[-636.5,-118.7],[-622.1,-97.2],[-619.5,-83.4],[-614,-82],[-609.9,-162.2],[-603.2,-182.6]],[[-754.2,-158.7],[-714.8,-154.3],[-686.1,-139.4],[-684.7,-161.1],[-672.8,-182.7],[-754.8,-161.1]],[[-718,25.8],[-722.2,22.5],[-745.2,23.9],[-795.2,13.5],[-745,47.2],[-733.2,46.1],[-724.9,40.7]],[[-666.3,-107.2],[-659,-75.8],[-637.6,-68.7],[-633.1,-90],[-663.3,-110.1]],[[-650.7,-175.9],[-632.1,-174.9],[-620.4,-156.4],[-607.4,-201.9],[-623,-189.7],[-651.8,-187.7],[-654,-184.4]],[[-588,-187.3],[-596.6,-171.7],[-602.1,-146.4],[-603.5,-115.1],[-599.3,-95.2],[-590.2,-149.3]]],ao=[{w:4.6,c:[[-550.6,-56.3],[-540.4,-93.1],[-526.9,-116.6],[-517.3,-127.5],[-501.6,-139],[-483.9,-142.8],[-464.3,-133.8],[-458.1,-122.7],[-454.7,-93.7],[-445.8,-63.9],[-433.2,-41],[-433,-27.4],[-440.3,-14.4],[-468.1,-.7],[-489.1,3.3],[-518.1,.9],[-534.6,-5],[-547.3,-18.2],[-551.8,-31.2],[-550.6,-56.3]]},{w:4.6,c:[[-952.5,-98.9],[-950.1,-76.4],[-942.6,-64.6],[-935.2,-58.6],[-728.5,79],[-687.3,104.9],[-635.1,111.3]]},{w:4.6,c:[[-670.9,-116.8],[-631.1,-89.6],[-626.4,-55.3],[-628.9,-31.1],[-635.6,-18.2],[-680.1,-1.2],[-709.1,17.5],[-726.3,21.2],[-748.2,20.9],[-810.9,7.3]]},{w:4.6,c:[[-839.7,-139.6],[-653,-190.7],[-624.8,-191.4],[-617.2,-196],[-612.4,-203.1],[-611.3,-217.9]]},{w:4.6,c:[[-786.6,-168.4],[-930.7,-128.5],[-947.5,-113.4],[-952.5,-98.9]]},{w:4.6,c:[[-782.7,-155.1],[-723.3,-152.9],[-700.3,-146],[-686,-136.2],[-674.7,-122.9],[-668.1,-107.8],[-662.4,-75.1],[-663.3,-58.9]]},{w:4.6,c:[[-786.6,-168.4],[-611.3,-217.9]]},{w:4.6,c:[[-719.3,49.6],[-728.1,48.9],[-741.2,53.4],[-857.8,-23.9]]},{w:4.6,c:[[-857.8,-23.9],[-881.1,-39.4],[-867.8,-60.5],[-860.8,-84.6],[-860.7,-107.4],[-865.8,-132.1],[-839.7,-139.6]]},{w:2.6,c:[[-647.3,67.2],[-679.8,49.6],[-659.8,18.1],[-645.2,19],[-630.6,-16],[-633.2,-20.8]]},{w:4.6,c:[[-663.3,-58.9],[-669.2,-36.1],[-678.1,-16.2],[-719.3,49.6]]},{w:4.6,c:[[-618.7,-54.5],[-623,-94.8],[-636.6,-113.8],[-639.5,-125.1],[-633.8,-141],[-620.5,-152],[-616.5,-161.7]]},{w:4.6,c:[[-620.5,-152],[-627.6,-168.2],[-639.4,-175.5],[-649.4,-175.2],[-661.8,-166.5],[-666,-155.2],[-663.5,-143],[-658.3,-138.9],[-646,-135.9],[-638.9,-129.7]]},{w:4.6,c:[[-719.3,49.6],[-710.3,55.6],[-702.9,72.5],[-695.2,83.1],[-683.1,89.7],[-668,91.1],[-635.1,111.3]]},{w:4.6,c:[[-631.7,53.7],[-622.8,4.9],[-618.7,-54.5]]},{w:2.6,c:[[-765.1,-123.9],[-741.5,-124.4],[-715.5,-115.6],[-689.5,-100.1],[-677.3,-97.9],[-666.1,-99.8]]},{w:2.6,c:[[-772.7,-8.4],[-747.1,-12.4],[-718.1,-27.4],[-692,-33.9],[-684.3,-33.4],[-675.2,-27.2]]},{w:4.6,c:[[-695.2,83.1],[-702.2,80.1],[-712.5,67.2],[-706.5,83.9],[-699.9,92.6],[-676.6,105.9]]},{w:2.6,c:[[-890.4,-52.6],[-877.7,-77.2],[-875.4,-86.6],[-878,-121.5]]},{w:4.6,c:[[-659.2,-189.1],[-672.1,-178.9],[-682.2,-160.9],[-683.8,-150.8],[-681.2,-131.2]]},{w:5.5,c:[[-572.9,100.7],[-574.4,104],[-570.3,106.4],[-572,108.9],[-562,119.2],[-555.3,106.9],[-560.3,95.6],[-572.9,100.7]]},{w:2.6,c:[[-612.6,65.1],[-638.2,66.5],[-664.3,93.4]]},{w:2.6,c:[[-873.9,-19.2],[-872.1,-22.2],[-862.9,-16.4],[-861.9,-17.8],[-886.3,-34.2],[-881.1,-39.4]]},{w:2.6,c:[[-659.6,-13.1],[-654.7,-25.3],[-662.9,-29],[-670.6,-25.4],[-668.4,-16.9],[-659.6,-13.1]]},{w:2.6,c:[[-614.5,-171],[-602.9,-201.8],[-599,-205.7],[-592.4,-206.1]]},{w:4.6,c:[[-618.7,-54.5],[-663.3,-58.9]]},{w:2.6,c:[[-862.2,-117.9],[-836,-125],[-839.7,-139.6]]},{w:2.6,c:[[-872.8,-51.8],[-850.2,-36.5],[-857.8,-23.9]]},{w:2.6,c:[[-659.6,-13.1],[-676.3,-9],[-669.9,-22.9]]}],EM=[[[-743.7,-76.1],[-739.3,-69.2],[-734.4,-71.8],[-725.7,-63.3],[-737.6,-59.4],[-740.7,-63],[-757.8,-52.1],[-755.8,-47.1],[-763.8,-37.9],[-767.8,-49.4],[-764,-53.4],[-775.5,-70.5],[-779.8,-68.3],[-789.5,-77.1],[-777.7,-81.1],[-774.1,-76.7],[-757.2,-88.4],[-759.1,-92.9],[-751,-102.6],[-747.1,-90.6],[-751.1,-86.9],[-743.7,-76.1]],[[-772.7,-8.4],[-778.7,-15.5],[-786.1,-41.8],[-793.1,-53.4],[-803.3,-61.1],[-829.7,-73.7],[-834,-77.5],[-835.4,-83.5],[-831.7,-88.2],[-826.5,-90.7],[-783.5,-107.8],[-768.7,-118.7],[-765.1,-123.9]],[[-564.8,-59.7],[-533.5,-60.1],[-528.9,-75.9],[-486,-87],[-490.6,-42.6],[-505.2,-35.5],[-499.7,3.6]]],TM=[[-820,5.2],[-844.1,-142.1],[-792.4,-156.3],[-692.7,77.9],[-774.2,35.7],[-432.8,43.4],[-789.2,25.7],[-704.5,-180.6],[-666,98.7],[-868.7,-46.6],[-653.3,73.7],[-681.1,94.5],[-872.8,-40],[-804.8,15.3],[-447.9,47.2],[-858.7,-129],[-721.7,-175.8],[-696.9,87.8],[-637.8,-194.9],[-650.9,-195],[-826.5,-146.9],[-877.9,-33.4],[-863.7,-23.9],[-743.9,55.9],[-809.4,-151.7],[-678.6,84],[-856.9,-121.2],[-759.4,45.6],[-686.8,-185.5],[-669.2,-190.3],[-641.3,-34.1],[-757.2,-166.1],[-834.7,-4.6],[-740,-170.8],[-849.1,-14.2],[-774.5,-161.3],[-434,54.5],[-624.4,-195.9],[-446.3,56.8],[-655.4,-36.6],[-860.8,-137.5],[-662.6,80.9],[-494.7,81.4],[-529.1,85],[-467,103.9],[-477,81.8],[-514.8,87.5],[-477.4,93.1],[-457.5,85.1],[-502.3,104],[-525,94.7],[-503.2,91.7],[-478.7,104.3],[-452.4,-99.1],[-846.6,-54.5],[-560.8,-16.8],[-554.7,-114.9],[-558.2,-76.6],[-570.5,51.6],[-661.9,-147.7],[-502,17.5],[-532.1,-191.4],[-534.2,-141.7],[-782.8,-105.7],[-550.1,45.5],[-456.3,-113],[-551.9,53.4],[-486.4,19.1],[-821.7,-111.8],[-539,-132.9],[-561.2,45.1],[-526.8,17.1],[-435.8,-4.6],[-547.6,-130.5],[-451.5,3.8],[-555.6,-193.7],[-557.9,56],[-640.9,-135.9],[-433.7,-41.6],[-839.2,-104.9],[-792,-30.4],[-473.7,13.6],[-443.3,-69.9],[-828.3,-46],[-438.1,-56.1],[-631.9,-167.9],[-549.7,12.7],[-551.4,-123.2],[-654,-168.5],[-495.9,-180.6],[-528.8,40.9],[-553.7,-102.2],[-519.7,12.7],[-526.1,35.9],[-732.2,-118.8],[-845,-44],[-530.5,-159.3],[-643.7,-172.1],[-447.5,-84.3],[-562.4,-1.6],[-781.9,-17.3],[-516.3,-140.9],[-656.2,-139.5],[-821.8,-35.7],[-554.7,-205.2],[-543.3,-141.8],[-514.9,27.7],[-547.6,34.9],[-537.5,41],[-445.8,-1.1],[-515.4,-193],[-661.5,-159.3],[-526.2,-137.4],[-558,-86.7],[-467.5,7.3],[-502.8,-176.7],[-668.9,-90.5],[-743.5,-117.5],[-551.3,3],[-517.5,-160],[-837,-116.2],[-559.7,8.6],[-705,-97.5],[-542.8,-174.6],[-483.2,-157.1]],AM=[[[-659.2,-189.1],[-653.1,-173.5]],[[-786.6,-168.4],[-784.6,-161.5]],[[-719.3,49.6],[-728.5,79]],[[-810.9,7.3],[-818.6,18.5]],[[-872.4,-63.1],[-877,-65.6]],[[-865.3,-85.2],[-870.5,-85.8]],[[-864.3,-106.9],[-871.1,-105.7]],[[-661.2,-195.7],[-663.4,-202.8]],[[-614.5,-171],[-611.3,-180]]],vo=[[-871.1,5.7],[-857.8,-23.9],[-881.1,-39.4],[-867.8,-60.5],[-860.8,-84.6],[-860.7,-107.4],[-865.8,-132.1],[-873.8,-161]],Id=[[-617.6,-25.7],[-568.7,-20.5],[-562.9,-77.8],[-613.7,-83.2]],RM=[[-606.6,-78.2],[-569.8,-74.9],[-574.3,-26.1],[-611.1,-29.5]],CM=[[-866.1,-46.3],[-871.3,-38.5],[-857.7,-29.2],[-852.4,-37.1]],yr=[-662.3,-32.5],PM=[[[-463,119],[-496,113],[-523,108],[-530,108],[-536,111],[-540,114],[-542,118],[-561,153],[-552,159],[-540,163],[-522,168],[-504,171],[-498,170],[-493,167],[-485,168],[-482,161],[-468,135],[-465,128]],[[-572.9,100.7],[-574.4,104],[-570.3,106.4],[-572,108.9],[-562,119.2],[-555.3,106.9],[-559.2,97.6],[-560.3,95.6],[-571.1,101.3]]],LM=[-674.75,120.68],DM=[-496.35,-256.68],IM=2.2,UM=1.4,NM=1.1,FM=.8,OM=11,rf=5;function qe(i,t={}){return new Le({color:i,roughness:t.roughness??.78,metalness:t.metalness??.04,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??0,map:t.map??null,transparent:t.transparent??!1,opacity:t.opacity??1,depthWrite:t.depthWrite??!0,side:t.side??Xn,vertexColors:t.vertexColors??!1,flatShading:t.flatShading??!1})}function da(i,t){const e=i.attributes.position,n=new Float32Array(e.count*2);for(let s=0;s<e.count;s++)n[s*2]=e.getX(s)/t,n[s*2+1]=-e.getZ(s)/t;return i.setAttribute("uv",new Yt(n,2)),i}function Ud(i,t){const e=document.createElement("canvas");e.width=i,e.height=i,t(e.getContext("2d"),i,i);const n=new rs(e);return n.wrapS=Qi,n.wrapT=Qi,n.colorSpace=Be,n.anisotropy=8,n}function zM(){return Ud(256,(i,t,e)=>{i.fillStyle="#78736a",i.fillRect(0,0,t,e);for(let n=0;n<5e3;n++){const s=112+Math.random()*50;i.fillStyle=`rgba(${s},${s-3},${s-9},${.1+Math.random()*.22})`,i.fillRect(Math.random()*t,Math.random()*e,2,2)}for(let n=0;n<90;n++){const s=3+Math.random()*9;i.fillStyle=`rgba(120,116,108,${.05+Math.random()*.07})`,i.beginPath(),i.arc(Math.random()*t,Math.random()*e,s,0,Math.PI*2),i.fill()}i.strokeStyle="rgba(52,50,46,0.55)",i.lineWidth=1.5;for(let n=0;n<=4;n++){const s=n/4*t;i.beginPath(),i.moveTo(s,0),i.lineTo(s,e),i.moveTo(0,s),i.lineTo(t,s),i.stroke()}})}function rl(i,t,e){return Ud(256,(n,s,o)=>{n.fillStyle=i,n.fillRect(0,0,s,o);for(let r=0;r<260;r++){const a=6+Math.random()*26;n.fillStyle=`rgba(${t},${.06+Math.random()*.14})`,n.beginPath(),n.arc(Math.random()*s,Math.random()*o,a,0,Math.PI*2),n.fill()}for(let r=0;r<9e3;r++)n.fillStyle=`rgba(0,0,0,${Math.random()*.14})`,n.fillRect(Math.random()*s,Math.random()*o,1.6,1.6);if(e){n.fillStyle="rgba(255,255,255,0.028)";for(let r=0;r<o;r+=o/4)n.fillRect(0,r,s,o/8)}})}function kr(i){const t=i.length;return Math.hypot(i[0][0]-i[t-1][0],i[0][1]-i[t-1][1])<.5?i.slice(0,-1):i.slice()}function BM(i){let t=0;for(let e=0;e<i.length;e++){const[n,s]=i[e],[o,r]=i[(e+1)%i.length];t+=n*r-o*s}return t/2}function ci(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a||1e-12)+r&&(n=!n),o=s}return n}const pa=i=>i<0?0:i>1?1:i,al=i=>{const t=pa(i);return t*t*(3-2*t)};function hc(i,t,e,n,s,o){const r=s-e,a=o-n,l=r*r+a*a,c=l>1e-9?pa(((i-e)*r+(t-n)*a)/l):0,u=e+r*c,h=n+a*c,f=Math.hypot(i-u,t-h),d=r*(t-n)-a*(i-e);return{d:f,side:d}}function kM(i,t){const e=i.length,n=l=>Array.isArray(t)?t[l]:t;if(e<3)return i.map(l=>l.slice());const s=BM(i)>0?1:-1,o=[];for(let l=0;l<e;l++){const[c,u]=i[l],[h,f]=i[(l+1)%e];let d=h-c,p=f-u;const _=Math.hypot(d,p);if(_<1e-6){o.push(null);continue}d/=_,p/=_;const g=n(l);o.push({px:c-p*s*g,pz:u+d*s*g,dx:d,dz:p})}const r=l=>{for(let c=1;c<=e;c++){const u=o[(l-c+e*2)%e];if(u)return u}return null},a=[];for(let l=0;l<e;l++){const c=o[l]||r(l),u=r(l);if(!c||!u){a.push(i[l].slice());continue}const h=u.dx*c.dz-u.dz*c.dx;let f;if(Math.abs(h)<1e-6)f=[c.px,c.pz];else{const _=((c.px-u.px)*c.dz-(c.pz-u.pz)*c.dx)/h;f=[u.px+u.dx*_,u.pz+u.dz*_]}const d=Math.max(Math.abs(n(l)),Math.abs(n((l-1+e)%e)))*3+.001,p=Math.hypot(f[0]-i[l][0],f[1]-i[l][1]);if(p>d){const _=d/p;f=[i[l][0]+(f[0]-i[l][0])*_,i[l][1]+(f[1]-i[l][1])*_]}a.push(f)}return a}function HM(i,t,e,n){const s=t[0]-i[0],o=t[1]-i[1],r=n[0]-e[0],a=n[1]-e[1],l=s*a-o*r;if(Math.abs(l)<1e-9)return null;const c=((e[0]-i[0])*a-(e[1]-i[1])*r)/l,u=((e[0]-i[0])*o-(e[1]-i[1])*s)/l;return c<0||c>1||u<0||u>1?null:{t:c,u,p:[i[0]+s*c,i[1]+o*c]}}function GM(i,t,e){const n=(l,c,u)=>{const h=c[0]-l[0],f=c[1]-l[1],d=Math.hypot(h,f)||1;return[c[0]+h/d*u,c[1]+f/d*u]},s=t.map(l=>l.slice());s.unshift(n(t[1],t[0],80)),s.push(n(t[t.length-2],t[t.length-1],80));const o=[];for(let l=0;l<i.length;l++){const c=i[l],u=i[(l+1)%i.length];for(let h=0;h+1<s.length;h++){const f=HM(c,u,s[h],s[h+1]);f&&o.push({i:l,t:f.t,j:h,p:f.p})}}if(o.length!==2)return null;o.sort((l,c)=>l.i-c.i||l.t-c.t);const r=(l,c)=>{const u=[l.p.slice()];for(let h=l.i+1;h<=(c.i<l.i?c.i+i.length:c.i);h++)u.push(i[h%i.length].slice());if(u.push(c.p.slice()),c.j>=l.j)for(let h=c.j;h>l.j;h--)u.push(s[h].slice());else for(let h=c.j+1;h<=l.j;h++)u.push(s[h].slice());return u},a=r(o[0],o[1]);return ci(e[0],e[1],a)?a:r(o[1],o[0])}function VM(i,t=[]){const e=new aa;e.moveTo(i[0][0],-i[0][1]);for(let n=1;n<i.length;n++)e.lineTo(i[n][0],-i[n][1]);e.closePath();for(const n of t){const s=new $r;s.moveTo(n[0][0],-n[0][1]);for(let o=1;o<n.length;o++)s.lineTo(n[o][0],-n[o][1]);s.closePath(),e.holes.push(s)}return e}function Xi(i,t,e,n=9,s=[],o=6){const r=new zo(VM(i,s)),a=r.attributes.position,l=r.index;let c=[];for(let p=0;p<l.count;p+=3){const _=[];for(let g=0;g<3;g++){const m=l.getX(p+g);_.push(a.getX(m),-a.getY(m))}c.push(_)}r.dispose();const u=n*n;for(let p=0;p<7;p++){let _=!1;const g=[];for(const m of c){let M=0,v=-1;for(let y=0;y<3;y++){const S=y*2,R=(y+1)%3*2,D=(m[S]-m[R])**2+(m[S+1]-m[R+1])**2;D>M&&(M=D,v=y)}if(M<=u){g.push(m);continue}_=!0;const x=v*2,w=(v+1)%3*2,T=(v+2)%3*2,b=(m[x]+m[w])*.5,A=(m[x+1]+m[w+1])*.5;g.push([m[x],m[x+1],b,A,m[T],m[T+1]]),g.push([b,A,m[w],m[w+1],m[T],m[T+1]])}if(c=g,!_)break}const h=new Float32Array(c.length*9);let f=0;for(const p of c)for(let _=0;_<3;_++){const g=p[_*2],m=p[_*2+1];h[f++]=g,h[f++]=t(g,m)+e,h[f++]=m}const d=new re;return d.setAttribute("position",new Yt(h,3)),d.computeVertexNormals(),da(d,o)}function Hr(i,t,e,n,s=6){const o=[],r=i.length,a=c=>o.push(c[0],e(c[0],c[1])+n,c[1]);for(let c=0;c<r;c++){const u=i[c],h=i[(c+1)%r],f=t[(c+1)%r],d=t[c];Math.hypot(u[0]-d[0],u[1]-d[1])<.05&&Math.hypot(h[0]-f[0],h[1]-f[1])<.05||(a(u),a(d),a(f),a(u),a(f),a(h))}if(!o.length)return null;const l=new re;return l.setAttribute("position",new Yt(o,3)),l.computeVertexNormals(),da(l,s)}function Nd(i,t,e,n,s=6){if(i.length<2)return null;const o=[],r=[];for(let u=0;u<i.length;u++){const h=i[Math.max(0,u-1)],f=i[Math.min(i.length-1,u+1)];let d=f[0]-h[0],p=f[1]-h[1];const _=Math.hypot(d,p)||1;d/=_,p/=_,o.push([i[u][0]-p*t,i[u][1]+d*t]),r.push([i[u][0]+p*t,i[u][1]-d*t])}const a=[],l=u=>a.push(u[0],e(u[0],u[1])+n,u[1]);for(let u=0;u+1<i.length;u++)l(o[u]),l(r[u]),l(r[u+1]),l(o[u]),l(r[u+1]),l(o[u+1]);if(!a.length)return null;const c=new re;return c.setAttribute("position",new Yt(a,3)),c.computeVertexNormals(),da(c,s)}function Gr(i,t,e,n,s=!1){const o=[],r=s?i.length:i.length-1;for(let a=0;a<r;a++){const l=i[a],c=i[(a+1)%i.length],u=c[0]-l[0],h=c[1]-l[1],f=Math.hypot(u,h);if(f<.4)continue;const d=(l[0]+c[0])*.5,p=(l[1]+c[1])*.5,_=e(d,p,-h/f,u/f),g=new _e(f+t,n,t);g.rotateY(-Math.atan2(h,u)),g.translate(d,_-n*.5,p),o.push(g)}return o}function Sr(i,t,e,n,s,o=0){const r=i.attributes.position,a=new Float32Array(r.count*3);for(let l=0;l<r.count;l++){const c=(oe(r.getX(l)*.7+o,r.getZ(l)*.7-o)-.5)*s;a[l*3]=Math.max(0,t+c),a[l*3+1]=Math.max(0,e+c),a[l*3+2]=Math.max(0,n+c*.6)}return i.setAttribute("color",new Yt(a,3)),i}function ln(i,t,e,n=!0,s=!0){const o=t.filter(Boolean).map(c=>c.index?c.toNonIndexed():c);if(!o.length)return null;const r=o.some(c=>c.attributes.color);for(const c of o)if(c.attributes.uv||da(c,6),c.attributes.normal||c.computeVertexNormals(),r&&!c.attributes.color){const u=new Float32Array(c.attributes.position.count*3).fill(1);c.setAttribute("color",new Yt(u,3))}const a=sn(o,!1);for(const c of o)c.dispose();if(!a)return null;const l=new te(a,e);return l.castShadow=n,l.receiveShadow=s,i.add(l),l}function WM(i,t){let n=1/0,s=-1/0,o=1/0,r=-1/0;for(const[h,f]of t)n=Math.min(n,h),s=Math.max(s,h),o=Math.min(o,f),r=Math.max(r,f);n-=72,o-=72;const a=Math.ceil((s+72-n)/18)+1,l=Math.ceil((r+72-o)/18)+1;let c=new Float32Array(a*l);const u=new Uint8Array(a*l);for(let h=0;h<l;h++)for(let f=0;f<a;f++){const d=n+f*18,p=o+h*18,_=h*a+f;c[_]=i(d,p),u[_]=ci(d,p,t)?1:0}for(let h=0;h<4;h++){const f=u.slice();for(let d=0;d<l;d++)for(let p=0;p<a;p++){const _=d*a+p;if(u[_])continue;let g=0,m=0;for(let M=-1;M<=1;M++)for(let v=-1;v<=1;v++){const x=d+M,w=p+v;x<0||w<0||x>=l||w>=a||u[x*a+w]&&(g+=c[x*a+w],m++)}m&&(c[_]=g/m,f[_]=1)}u.set(f)}for(let h=0;h<3;h++){const f=new Float32Array(a*l);for(let d=0;d<l;d++)for(let p=0;p<a;p++){let _=0,g=0;for(let m=-1;m<=1;m++)for(let M=-1;M<=1;M++){const v=d+m,x=p+M;v<0||x<0||v>=l||x>=a||(_+=c[v*a+x],g++)}f[d*a+p]=_/g}c=f}return(h,f)=>{const d=Math.min(a-1.001,Math.max(0,(h-n)/18)),p=Math.min(l-1.001,Math.max(0,(f-o)/18)),_=Math.floor(d),g=Math.floor(p),m=d-_,M=p-g,v=c[g*a+_],x=c[g*a+_+1],w=c[(g+1)*a+_],T=c[(g+1)*a+_+1];return(v+(x-v)*m)*(1-M)+(w+(T-w)*m)*M}}function XM(i,t,e){const n=[-762,-70];return(s,o)=>{let r=i(s,o)+IM;const a=Math.hypot(s-n[0],o-n[1]);r+=.85*al((112-a)/90);let l=1/0,c=1/0;for(let p=0;p+1<vo.length;p++){const _=hc(s,o,...vo[p],...vo[p+1]);_.d<l&&(l=_.d,c=_.side>=0?_.d:-_.d)}const u=NM*al(.5-c/rf);let h=1/0;for(let p=0;p<t.length;p++){const _=t[p],g=t[(p+1)%t.length];h=Math.min(h,hc(s,o,_[0],_[1],g[0],g[1]).d)}const f=ci(s,o,t)?-h:h,d=UM*al(.5+f/rf);return Math.max(r-Math.max(u,d),e(s,o)+FM)}}function lo(i,t,e,n){const s=[];for(let o=0;o<n;o++){const r=o/n*Math.PI*2;s.push([i+Math.cos(r)*e,t+Math.sin(r)*e])}return s}function YM(i,t,e){const n=t(se[0],se[1]),s=lo(se[0],se[1],xn+2.4,64),o=lo(se[0],se[1],xn,64),r=()=>n,a=[];a.push(Hr(s,o,r,.62));const l=(A,y,S)=>{const R=[];for(let F=0;F<A.length;F++){const O=A[F],z=A[(F+1)%A.length];R.push(O[0],n+S,O[1],z[0],n+S,z[1],z[0],n+y,z[1]),R.push(O[0],n+S,O[1],z[0],n+y,z[1],O[0],n+y,O[1])}const D=new re;return D.setAttribute("position",new Yt(R,3)),D.computeVertexNormals(),D};a.push(l(s,.62,-.8)),a.push(l(o.slice().reverse(),.62,-.8));const c=lo(se[0],se[1],xn+6.2,64);a.push(Hr(c,s,r,.26)),a.push(l(c,.26,-.6));const u=[];for(let A=0;A<48;A++){const y=A/48*Math.PI*2,S=xn+7,R=xn+22,D=new _e(R-S,.16,.4);D.rotateY(-y),D.translate(se[0]+Math.cos(y)*(S+R)*.5,t(se[0]+Math.cos(y)*(S+R)*.5,se[1]+Math.sin(y)*(S+R)*.5)+.06,se[1]+Math.sin(y)*(S+R)*.5),u.push(D)}for(const A of[xn+14.5,xn+22]){const y=lo(se[0],se[1],A,72),S=lo(se[0],se[1],A-.8,72);u.push(Hr(y,S,(R,D)=>t(R,D),.07))}ln(i,a,e.granite),ln(i,u,e.wall,!1,!0);const h=new te(new en(xn-.2,xn-.2,.5,64),qe(2244943,{roughness:.52,metalness:.02}));h.position.set(se[0],n+.05,se[1]),h.receiveShadow=!0,i.add(h);const f=new te(new en(1.9,3.4,1.9,20),e.granite);f.position.set(se[0],n+.6,se[1]),f.castShadow=!0,i.add(f);const d=(A,y)=>new Uo({color:15791867,transparent:!0,opacity:A,depthWrite:!1,blending:y?So:Ki,side:Cn,vertexColors:!0,toneMapped:!y}),p=A=>(A.renderOrder=6,A.castShadow=!1,i.add(A),A),_=(A,y,S,R,D)=>{const F=A.attributes.position,O=new Float32Array(F.count*4);for(let z=0;z<F.count;z++){const H=pa((F.getY(z)-y)/(S-y||1));O[z*4]=1,O[z*4+1]=1,O[z*4+2]=1,O[z*4+3]=R+(D-R)*H}return A.setAttribute("color",new Yt(O,4)),A},g=45.7,m=n+1.2,M=(A,y,S,R,D,F,O=!0,z=0)=>{const H=new en(y,A,S,18,1,!0);H.translate(se[0],m+z+S*.5,se[1]),p(new te(_(H,m+z,m+z+S,D,F),d(R,O)))};M(.8,1.9,g,.95,.95,0,!1),M(1.5,3.6,g*1.02,.5,.42,0,!1),M(2.1,4.4,g*.6,.26,0,.7),M(4.4,7.2,g*.55,.26,.7,0,!0,g*.6);const v=[];for(let A=0;A<12;A++){const y=A*2.4,S=.9+oe(A*5,3)*4.1,R=new Oo(1.5+oe(A,9)*1.7,1);R.translate(se[0]+Math.cos(y)*S,m+g*(.79+oe(A*3,7)*.29),se[1]+Math.sin(y)*S),v.push(R)}const x=sn(v,!1);for(const A of v)A.dispose();p(new te(_(x,m+g*.72,m+g*1.14,.6,.02),d(.42,!1)));const w=new en(xn-13,xn-1,9,28,1,!0);w.translate(se[0],n+4.5,se[1]),p(new te(_(w,n,n+9,.9,0),d(.16,!0)));const T=[];for(let A=0;A<40;A++){const y=A/40*Math.PI*2,S=xn-3.4,R=new Fo(.34,1.8+oe(A,4)*1.2,6,1,!0);R.translate(se[0]+Math.cos(y)*S,n+1.4,se[1]+Math.sin(y)*S),T.push(R)}const b=sn(T,!1);for(const A of T)A.dispose();p(new te(_(b,n+.2,n+3,.85,.02),d(.6,!1)))}function qM(i,t,e){const[n,s,o,r]=Id,a=Math.hypot(s[0]-n[0],s[1]-n[1]),l=Math.hypot(o[0]-s[0],o[1]-s[1]),c=(n[0]+s[0]+o[0]+r[0])/4,u=(n[1]+s[1]+o[1]+r[1])/4,h=Math.atan2(s[1]-n[1],s[0]-n[0]),f=t(c,u),d=7,p=7.6,_=4,g=[],m=(O,z,H)=>{const J=Math.cos(h),G=Math.sin(h);return[c+O*J-z*G,f+H,u+O*G+z*J]},M=(O,z,H,J,G)=>{O.push(...z,...H,...J,...z,...J,...G)},v=[],x=16,w=O=>d*(1-(2*O-1)**2),T=[];for(let O=0;O<_;O++)T.push((-.5+O/(_-1))*a*.78);for(let O=0;O<_;O++){const z=T[O],H=1.5;for(let J=0;J<x;J++){const G=J/x,et=(J+1)/x,Y=(G-.5)*l,Q=(et-.5)*l,V=w(G),ot=w(et);for(const X of[-1,1])M(v,m(z+X*H/2,Y,V),m(z+X*H/2,Q,ot),m(z+X*H/2,Q,ot+1.5),m(z+X*H/2,Y,V+1.5));M(v,m(z-H/2,Y,V),m(z+H/2,Y,V),m(z+H/2,Q,ot),m(z-H/2,Q,ot))}}for(let O=0;O+1<_;O++){const z=T[O]+.75,H=T[O+1]-.75,J=5;for(let G=0;G<x;G++){const et=G/x,Y=(G+1)/x;for(let Q=0;Q<J;Q++){const V=Q/J,ot=(Q+1)/J,X=z+(H-z)*V,L=z+(H-z)*ot,I=k=>1.4*(1-(2*k-1)**2);M(v,m(X,(et-.5)*l,w(et)+1.5-I(V)),m(L,(et-.5)*l,w(et)+1.5-I(ot)),m(L,(Y-.5)*l,w(Y)+1.5-I(ot)),m(X,(Y-.5)*l,w(Y)+1.5-I(V)))}}}const b=new re;b.setAttribute("position",new Yt(v,3)),b.computeVertexNormals(),g.push(b);const A=new _e(a,1.1,l+6);A.rotateY(-h),A.translate(c,f+p,u),g.push(A);for(const O of[-1,1]){const z=new _e(1,1.3,l+6);z.rotateY(-h);const H=m(O*a/2,0,0);z.translate(H[0],f+p+1.2,H[2]),g.push(z)}for(const O of[-1,1]){const z=[];for(let J=0;J<x;J++){const G=J/x,et=(J+1)/x,Y=O*a/2;M(z,m(Y,(G-.5)*l,w(G)+1.4),m(Y,(et-.5)*l,w(et)+1.4),m(Y,(et-.5)*l,p-.55),m(Y,(G-.5)*l,p-.55))}const H=new re;H.setAttribute("position",new Yt(z,3)),H.computeVertexNormals(),g.push(H)}for(const O of[-1,1]){const z=new _e(a+2,p+1.6,7);z.rotateY(-h);const H=m(0,O*(l+7)/2,0);z.translate(H[0],f+(p+1.6)/2-1,H[2]),g.push(z)}ln(i,g,e.portal);const y=kr(RM),S=new te(Xi(y,t,.18,12),qe(2244943,{roughness:.34,metalness:.12}));S.receiveShadow=!0,i.add(S);const R=Gr(y,1.1,(O,z)=>t(O,z)+.45,1.6,!0);ln(i,R,e.granite);const D=Nd([m(-a*.5-10,0,0),m(a*.5+10,0,0)].map(O=>[O[0],O[2]]),2.2,t,.95),F=[];if(D){F.push(D);for(const O of[-1,1]){const z=m(-a*.5-10,O*2.2,0),H=m(a*.5+10,O*2.2,0),J=Math.hypot(H[0]-z[0],H[2]-z[2]),G=new _e(J,.12,.12);G.rotateY(-h),G.translate((z[0]+H[0])/2,t(c,u)+1.95,(z[2]+H[2])/2),F.push(G)}}ln(i,F,e.portal)}function ZM(i){const t=new Oo(1,1),e=t.attributes.position,n=new U;for(let s=0;s<e.count;s++){n.fromBufferAttribute(e,s);const o=Math.atan2(n.z,n.x),r=pa(n.y*.5+.5);let a=1+.2*Math.sin(3*o+i*2.1)+.12*Math.sin(5*o-i*1.3)-.3*Math.max(0,.35-r)*3;a+=(oe(n.x*7.3+i*11,n.z*5.9-n.y*3.1)-.5)*.22,e.setXYZ(s,n.x*a,n.y*a*.82+.1,n.z*a)}return t.computeVertexNormals(),t}const af=[{h:.24,s:.17,l:.21},{h:.28,s:.27,l:.145},{h:.225,s:.3,l:.18},{h:.2,s:.33,l:.215}];function jM(i,t,e){if(!e.length)return;const n=new Te,s=new Bt,o=new en(.3,.46,1,6,1,!0);o.translate(0,.5,0);const r=new Ao(o,qe(16777215,{roughness:.95,flatShading:!0}),e.length),a=new Float32Array(e.length*3),l=4,c=Array.from({length:l},()=>[]);e.forEach((u,h)=>c[Math.floor(oe(u[0]*.7,u[1]*1.3)*l)%l].push(h)),e.forEach(([u,h],f)=>{const d=oe(u*1.1,h*.9),p=.74+d*.86,_=t(u,h),g=4.3*p*(.84+oe(h,u)*.3),m=6.4*p+g*.5;n.position.set(u,_-.4,h),n.scale.set(p,m+.4,p),n.rotation.set(0,d*6.28,0),n.updateMatrix(),r.setMatrixAt(f,n.matrix);const M=oe(h*1.7,u*2.9);s.setHSL(.07+M*.03,.1+M*.12,.13+M*.19,Be),a[f*3]=s.r,a[f*3+1]=s.g,a[f*3+2]=s.b}),r.instanceColor=new To(a,3),r.castShadow=!0,r.receiveShadow=!0,i.add(r);for(let u=0;u<l;u++){const h=c[u];if(!h.length)continue;const f=new Ao(ZM(u+1),qe(16777215,{roughness:.95,flatShading:!0}),h.length),d=new Float32Array(h.length*3);h.forEach((p,_)=>{const[g,m]=e[p],v=.74+oe(g*1.1,m*.9)*.86,x=4.3*v*(.84+oe(m,g)*.3),w=6.4*v+x*.5;n.position.set(g,t(g,m)+w,m),n.scale.set(x,x*(.82+oe(g,m*3)*.34),x),n.rotation.set(0,oe(m*2,g)*6.28,0),n.updateMatrix(),f.setMatrixAt(_,n.matrix);const T=af[u%af.length],b=oe(g*2.3,m*1.7);s.setHSL(T.h+b*.03,T.s+b*.1,T.l+b*.05,Be),d[_*3]=s.r,d[_*3+1]=s.g,d[_*3+2]=s.b}),f.instanceColor=new To(d,3),f.castShadow=!0,f.receiveShadow=!0,i.add(f)}}function lf(i,t,e,n){const s=[],o=new _e(2,.11,.52);o.translate(0,.46,0);const r=new _e(2,.42,.09);r.translate(0,.72,-.22),s.push(o,r);for(const l of[-1,1]){const c=new _e(.11,.46,.46);c.translate(l*.82,.23,0),s.push(c)}const a=sn(s,!1);for(const l of s)l.dispose();return a.rotateY(n),a.translate(i,e,t),a}function KM(i,t,e){const n=new en(.1,.16,6.4,6,1,!0);n.translate(i,e+3.2,t);const s=new en(.4,.22,.7,8);s.translate(i,e+6.6,t);const o=sn([n,s],!1);return n.dispose(),s.dispose(),o}function $M(i,t){const e=new Ie;if(e.name="point-state-park",!t?.f||t.f.length<8)return e;const n=kr(t.f),s=n.length,o=L=>{let I=0,k=1/0;return n.forEach(($,at)=>{const ct=Math.hypot($[0]-L[0],$[1]-L[1]);ct<k&&(k=ct,I=at)}),I},r=o(LM),a=o(DM),l=new Array(s).fill(!1);for(let L=0;L<=(a-r+s)%s;L++)l[(r+L)%s]=!0;const c=[];for(let L=0;L<s;L++)c.push(l[L]&&l[(L+1)%s]?OM:0);const u=kM(n,c),h=WM(i,n),f=XM(h,u,i),d=zM(),p={paving:qe(16777215,{roughness:.9,map:d,vertexColors:!0}),ground:qe(16777215,{roughness:.99,map:rl("#445b33","88,116,64",!1),vertexColors:!0}),lawn:qe(16777215,{roughness:.99,map:rl("#4b6538","98,128,70",!0),vertexColors:!0}),understorey:qe(16777215,{roughness:.99,map:rl("#36452b","70,90,52",!1),vertexColors:!0}),walk:qe(15920870,{roughness:.84,map:d}),granite:qe(8485746,{roughness:.55,metalness:.06}),trace:qe(11117462,{roughness:.8}),wall:qe(6512213,{roughness:.9}),portal:qe(9143675,{roughness:.86,side:Cn}),water:qe(2577258,{roughness:.14,metalness:.35,emissive:862778,emissiveIntensity:.16}),metal:qe(3093302,{roughness:.5,metalness:.6}),timber:qe(5456172,{roughness:.88})},_=Xi(n,f,0,9);Sr(_,1,1,.95,.26,5);const g=new te(_,p.ground);g.receiveShadow=!0,e.add(g);const m=GM(u,vo,se),M=[m&&Xi(m,f,.05,8)];M.push(Hr(n,u,f,.05));for(const L of PM)M.push(Xi(L,f,.06,10));for(const L of M)L&&Sr(L,1,.99,.96,.16,3);ln(e,M,p.paving,!1,!0);const v=[];for(const L of sf){const I=Xi(L,f,.11,8,[],9);Sr(I,1,1.02,.94,.22,11),v.push(I)}ln(e,v,p.lawn,!1,!0);const x=[];for(const L of of){const I=Xi(L,f,.14,10,[],9);Sr(I,1,1,.94,.3,23),x.push(I)}ln(e,x,p.understorey,!1,!0);const w=[];for(const L of ao)w.push(Nd(L.c,L.w*.5,f,.2));ln(e,w,p.walk,!1,!0);const T=[];T.push(...Gr(vo.slice(1,-1),1.3,(L,I,k,$)=>f(L+k*5,I+$*5)+.16,3.4));const b=[];for(let L=0;L<s;L++){if(!(l[L]&&l[(L+1)%s])){b.length>1&&T.push(...Gr(b,1.4,(I,k)=>{const $=[-700,-60],at=Math.hypot($[0]-I,$[1]-k)||1;return f(I+($[0]-I)/at*7,k+($[1]-k)/at*7)+.18},4)),b.length=0;continue}b.length||b.push(u[L]),b.push(u[(L+1)%s])}b.length>1&&T.push(...Gr(b,1.4,(L,I)=>{const k=[-700,-60],$=Math.hypot(k[0]-L,k[1]-I)||1;return f(L+(k[0]-L)/$*7,I+(k[1]-I)/$*7)+.18},4));const A=[],y=[];for(let L=0;L<s;L++){const I=n[L],k=n[(L+1)%s],$=u[L],at=u[(L+1)%s],ct=l[L]&&l[(L+1)%s]?.55:.04,ht=f(I[0]+($[0]-I[0])*.4+.01,I[1]+($[1]-I[1])*.4)+ct,gt=f(k[0]+(at[0]-k[0])*.4+.01,k[1]+(at[1]-k[1])*.4)+ct,Et=Math.min(i(I[0],I[1])-1.5,ht-3.5),N=Math.min(i(k[0],k[1])-1.5,gt-3.5);y.push(I[0],ht,I[1],I[0],Et,I[1],k[0],N,k[1]),y.push(I[0],ht,I[1],k[0],N,k[1],k[0],gt,k[1]);const Ht=Math.hypot(k[0]-I[0],k[1]-I[1]);if(ct>.1&&Ht>.5){const At=new _e(Ht+1,.5,1.6);At.rotateY(-Math.atan2(k[1]-I[1],k[0]-I[0])),At.translate((I[0]+k[0])/2,(ht+gt)/2-.08,(I[1]+k[1])/2),A.push(At)}}const S=new re;S.setAttribute("position",new Yt(y,3)),S.computeVertexNormals(),A.push(S),ln(e,[...T,...A],p.wall);const R=[];for(const[L,I]of AM){const k=f(L[0],L[1]),$=f(I[0],I[1]);if(Math.abs(k-$)<.5)continue;const[at,ct]=k<$?[L,I]:[I,L],ht=Math.min(k,$),gt=Math.max(k,$),Et=Math.max(3,Math.round((gt-ht)/.17)),N=ct[0]-at[0],Ht=ct[1]-at[1],At=-Math.atan2(Ht,N);for(let it=0;it<Et;it++){const Z=(it+.5)/Et,pt=new _e(Math.hypot(N,Ht)/Et+.1,.34,4.6);pt.rotateY(At),pt.translate(at[0]+N*Z,ht+(gt-ht)*(it+1)/Et-.17,at[1]+Ht*Z),R.push(pt)}}ln(e,R,p.granite);const D=[];for(const L of EM)for(let I=0;I+1<L.length;I++){const[k,$]=L[I],[at,ct]=L[I+1],ht=at-k,gt=ct-$,Et=Math.hypot(ht,gt);if(Et<.3)continue;const N=new _e(Et+1.6,.26,1.6);N.rotateY(-Math.atan2(gt,ht)),N.translate(k+ht*.5,f(k+ht*.5,$+gt*.5)+.22,$+gt*.5),D.push(N)}ln(e,D,p.trace,!1,!0),YM(e,f,p),qM(e,f,p);const F=kr(CM);let O=0,z=0;for(const[L,I]of F)O+=L/F.length,z+=I/F.length;const H=f(O,z),J=[];for(let L=0;L<F.length;L++){const I=F[L],k=F[(L+1)%F.length],$=Math.hypot(k[0]-I[0],k[1]-I[1]),at=new _e($+.4,4.6,.4);at.rotateY(-Math.atan2(k[1]-I[1],k[0]-I[0])),at.translate((I[0]+k[0])/2,H+2.3,(I[1]+k[1])/2),J.push(at)}J.push(Xi(F,()=>H+4.75,0,20)),ln(e,J,p.portal);const G=new te(new en(.14,.2,17,8),qe(14210252,{roughness:.5,metalness:.3}));G.position.set(yr[0],f(yr[0],yr[1])+8.5,yr[1]),G.castShadow=!0,e.add(G);const et=[];for(let L=0;L<26;L++){const I=L/26*Math.PI*2+.12,k=xn+13.5,$=se[0]+Math.cos(I)*k,at=se[1]+Math.sin(I)*k;et.push(lf($,at,f($,at)+.02,-I+Math.PI/2))}for(const L of ao)if(!(L.w<4))for(let I=0;I+1<L.c.length;I+=2){const k=L.c[I],$=L.c[I+1],at=Math.hypot($[0]-k[0],$[1]-k[1]);if(at<26)continue;const ct=.5,ht=k[0]+($[0]-k[0])*ct-($[1]-k[1])/at*3.6,gt=k[1]+($[1]-k[1])*ct+($[0]-k[0])/at*3.6;et.push(lf(ht,gt,f(ht,gt)+.02,-Math.atan2($[1]-k[1],$[0]-k[0])))}ln(e,et,p.timber);const Y=[],Q=kr(Id);for(const L of ao){if(L.w<4)continue;let I=0;for(let k=0;k+1<L.c.length;k++){const $=L.c[k],at=L.c[k+1],ct=Math.hypot(at[0]-$[0],at[1]-$[1]);for(let ht=34-I;ht<ct;ht+=34){const gt=ht/ct,Et=$[0]+(at[0]-$[0])*gt-(at[1]-$[1])/ct*3.2,N=$[1]+(at[1]-$[1])*gt+(at[0]-$[0])/ct*3.2;ci(Et,N,Q)||Y.push(KM(Et,N,f(Et,N)))}I=(I+ct)%34}}for(let L=0;L<s;L++){if(!(l[L]&&l[(L+1)%s]))continue;const I=n[L],k=n[(L+1)%s],$=Math.hypot(k[0]-I[0],k[1]-I[1]),at=-Math.atan2(k[1]-I[1],k[0]-I[0]),ct=ht=>{const gt=I[0]+(k[0]-I[0])*ht,Et=I[1]+(k[1]-I[1])*ht,N=u[L];return f(gt+(N[0]-gt)*.3,Et+(N[1]-Et)*.3)+.5};for(let ht=0;ht<$;ht+=4.5){const gt=ht/$,Et=new _e(.1,1.05,.1);Et.translate(I[0]+(k[0]-I[0])*gt,ct(gt)+.52,I[1]+(k[1]-I[1])*gt),Y.push(Et)}for(const ht of[.62,1.02]){const gt=new _e($,.07,.07);gt.rotateY(at),gt.translate((I[0]+k[0])/2,(ct(0)+ct(1))/2+ht,(I[1]+k[1])/2),Y.push(gt)}}ln(e,Y,p.metal);const V=TM.filter(L=>!(m&&ci(L[0],L[1],m))).map(L=>L.slice()),ot=(L,I)=>{for(const k of ao)for(let $=0;$+1<k.c.length;$++)if(hc(L,I,k.c[$][0],k.c[$][1],k.c[$+1][0],k.c[$+1][1]).d<k.w*.5+1.8)return!0;return!1};for(let L=-960;L<=-420;L+=7.2)for(let I=-270;I<=160;I+=7.2){const k=L+(oe(L*3,I)-.5)*9,$=I+(oe(I,L*3)-.5)*9;if(oe(k*.3,$*.3)>.84)continue;let at=!1;for(const ct of of)if(ci(k,$,ct)){at=!0;break}!at||ot(k,$)||V.push([k,$])}const X=(L,I)=>{for(const k of V)if(Math.hypot(k[0]-L,k[1]-I)<9)return!0;return!1};for(const L of ao){if(L.w<4)continue;let I=0;for(let k=0;k+1<L.c.length;k++){const $=L.c[k],at=L.c[k+1],ct=Math.hypot(at[0]-$[0],at[1]-$[1]);if(ct<1)continue;const ht=-(at[1]-$[1])/ct,gt=(at[0]-$[0])/ct;for(let Et=16-I;Et<ct;Et+=16){const N=Et/ct,Ht=ci($[0]+ht*12,$[1]+gt*12,n)?1:-1,At=L.w*.5+3.6,it=$[0]+(at[0]-$[0])*N+ht*At*Ht,Z=$[1]+(at[1]-$[1])*N+gt*At*Ht;if(!ci(it,Z,n))continue;let pt=!1;for(const dt of sf)if(ci(it,Z,dt)){pt=!0;break}pt||ot(it,Z)||X(it,Z)||Math.hypot(it-se[0],Z-se[1])<xn+26||V.push([it,Z])}I=(I+ct)%16}}return jM(e,f,V),e}const Re=Math.PI/180,Xt=.3048;function he(i,t={}){return new Le({color:i,roughness:t.roughness??.45,metalness:t.metalness??.2,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??0,transparent:t.transparent??!1,opacity:t.opacity??1,side:t.side??Xn,envMapIntensity:t.envMapIntensity??.6})}function Jn(i,t,e){return Number.isFinite(i)?Math.min(e,Math.max(t,i)):t}function Xs(i,t,e){return i+(t-i)*e}function JM(i){if(!Array.isArray(i)||i.length<3)return{long:0,short:0};const t=i.filter(m=>Array.isArray(m)&&Number.isFinite(m[0])&&Number.isFinite(m[1]));if(t.length<3)return{long:0,short:0};const e=t.length-(t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]?1:0);let n=0,s=0;for(let m=0;m<e;m++)n+=t[m][0],s+=t[m][1];n/=e,s/=e;let o=0,r=0,a=0;for(let m=0;m<e;m++){const M=t[m][0]-n,v=t[m][1]-s;o+=M*M,r+=v*v,a+=M*v}const l=.5*Math.atan2(2*a,o-r),c=Math.cos(-l),u=Math.sin(-l);let h=1/0,f=-1/0,d=1/0,p=-1/0;for(let m=0;m<e;m++){const M=t[m][0]-n,v=t[m][1]-s,x=M*c-v*u,w=M*u+v*c;h=Math.min(h,x),f=Math.max(f,x),d=Math.min(d,w),p=Math.max(p,w)}const _=f-h,g=p-d;return!Number.isFinite(_)||!Number.isFinite(g)?{long:0,short:0}:{long:Math.max(_,g),short:Math.min(_,g)}}function Xc(i,t,e,n=.86,s=1.12){const o=JM(i);return o.long<40||o.short<30?1:Jn(Math.min(o.long/t,o.short/e),n,s)}function Fd(i,t){if(!Number.isFinite(i))return t;const e=Math.atan2(Math.sin(i-t),Math.cos(i-t));return Math.abs(e)<40*Re?t:i}function Ct(i,t,e,n,s,o,r=0){const a=new _e(i,t,e);return r&&a.rotateY(r),a.translate(n,s,o),a}function Fs(i,t,e,n,s,o,r,a=0){const l=new _e(i,t,e);return l.rotateZ(n),a&&l.rotateY(a),l.translate(s,o,r),l}function Ai(i,t,e,n,s,o,r,a=0){const l=new en(i,t,e,n);return a&&l.rotateY(a),l.translate(s,o,r),l}function QM(i){let t=0,e=0,n=0;const s=i.length;for(let o=0;o<s;o++){const[r,a]=i[o],[l,c]=i[(o+1)%s],u=r*c-l*a;t+=u,e+=(r+l)*u,n+=(a+c)*u}return Math.abs(t)<1e-6?[0,0]:[e/(3*t),n/(3*t)]}function Od(i,t,e,n){i.position.set(-e,0,-n),t.add(i)}function ty(i,t){i.updateMatrixWorld(!0);const e=new Ui().setFromObject(i);if(!e.isEmpty()&&Number.isFinite(e.min.x)&&Number.isFinite(e.max.z)){const n=e.getCenter(new U);i.position.set(-n.x,0,-n.z)}t.add(i)}function Yc(i,t,e=!0,n=!0){const s=i.filter(Boolean);if(!s.length)return null;const o=s.length===1?s[0]:sn(s,!1);if(s.length>1)for(const a of s)a.dispose();if(!o)return null;const r=new te(o,t);return r.castShadow=e,r.receiveShadow=n,r}function Un(i,t,e=0,n=1,s=!1){const o=[],r=s?t:t+1,a=n-e,l=Math.abs(a)/(t*64)||1e-4;for(let c=0;c<r;c++){const u=e+a*c/t,h=i(u-l),f=i(u+l);let d=f[0]-h[0],p=f[1]-h[1];const _=Math.hypot(d,p)||1;d/=_,p/=_;const g=i(u);o.push({x:g[0],z:g[1],nx:p,nz:-d})}return o}function Je(i,t){return i.map(e=>({x:e.x+e.nx*t,z:e.z+e.nz*t,nx:e.nx,nz:e.nz,su:e.su,sv:e.sv}))}function un(i){return Math.atan2(i.nx,i.nz)}function cf(i,t,e){return{x:i.x+(t.x-i.x)*e,z:i.z+(t.z-i.z)*e,nx:i.nx+(t.nx-i.nx)*e,nz:i.nz+(t.nz-i.nz)*e,su:i.su,sv:i.sv}}function ll(i,t,e,n,s,o,r,a){return Ct(i,t,e,n+Math.cos(a)*o,r,s+Math.sin(a)*o,Math.PI/2-a)}function Do(i,t,e,n,s,o,r){return Fs(i,t,e,n,s.x+s.nx*o,r,s.z+s.nz*o,Math.atan2(-s.nz,s.nx))}function ey(i,t,e){return n=>{const s=Math.cos(n),o=Math.sin(n);return[i*Math.sign(s)*Math.abs(s)**e,t*Math.sign(o)*Math.abs(o)**e]}}function ny(i,t,e){const n=Math.max(i-e,.01),s=Math.max(t-e,.01),o=Math.hypot(i,t);return r=>{const a=Math.cos(r),l=Math.sin(r);let c=0,u=o;for(let h=0;h<26;h++){const f=(c+u)*.5,d=Math.max(Math.abs(a*f)-n,0),p=Math.max(Math.abs(l*f)-s,0);Math.hypot(d,p)<e?c=f:u=f}return[a*c,l*c]}}function cl(i){const t=new cd(i.map(([e,n])=>new U(e,0,n)),!1,"centripetal",.5);return e=>{const n=t.getPointAt(Jn(e,0,1));return[n.x,n.z]}}function iy(i){const t=[];let e=0;for(let n=1;n<i.length;n++){const s=Math.hypot(i[n][0]-i[n-1][0],i[n][1]-i[n-1][1]);t.push(s),e+=s}return n=>{let s=Jn(n,0,1)*e;for(let o=0;o<t.length;o++){if(s<=t[o]||o===t.length-1){const r=t[o]?Jn(s/t[o],0,1):0;return[Xs(i[o][0],i[o+1][0],r),Xs(i[o][1],i[o+1][1],r)]}s-=t[o]}return i[i.length-1]}}function Pi({u0:i,v0:t,steps:e,run:n,rise:s,fascia:o,base:r=0,grow:a=0}){const l=[[i,t]];let c=i,u=t;for(let f=0;f<e;f++){const d=1+a*(f/Math.max(e-1,1));u+=s*d,l.push([c,u]),c+=n,l.push([c,u])}const h=[[c,u],[c+o,u],[c+o,r]];return{seats:l,shell:h,closed:l.concat(h.slice(1),[[i,r]]),uOut:c+o,uTop:c,vTop:u,v0:t,u0:i}}function Vt(i,t,e=!1){const n=i.length,s=t.length-1;if(n<2||s<1)return null;const o=s*2,r=n*o,a=new Float32Array(r*3),l=new Float32Array(r*2),c=new Float32Array(n);for(let g=1;g<n;g++)c[g]=c[g-1]+Math.hypot(i[g].x-i[g-1].x,i[g].z-i[g-1].z);const u=new Float32Array(t.length);for(let g=1;g<t.length;g++)u[g]=u[g-1]+Math.hypot(t[g][0]-t[g-1][0],t[g][1]-t[g-1][1]);let h=0;for(let g=0;g<s;g++)for(let m=0;m<2;m++){const M=t[g+m][0],v=t[g+m][1];for(let x=0;x<n;x++){const w=i[x],T=w.su??1,b=w.sv??1;a[h*3]=w.x+w.nx*M*T,a[h*3+1]=v*b,a[h*3+2]=w.z+w.nz*M*T,l[h*2]=c[x]/16,l[h*2+1]=u[g+m]/16,h++}}const f=e?n:n-1,d=new Uint32Array(f*s*6);let p=0;for(let g=0;g<s;g++){const m=g*2*n,M=(g*2+1)*n;for(let v=0;v<f;v++){const x=(v+1)%n,w=m+v,T=m+x,b=M+x,A=M+v;d[p++]=w,d[p++]=T,d[p++]=A,d[p++]=T,d[p++]=b,d[p++]=A}}const _=new re;return _.setAttribute("position",new ue(a,3)),_.setAttribute("uv",new ue(l,2)),_.setIndex(new ue(d,1)),_.computeVertexNormals(),_}function ji(i,t){const e=i.map(([c,u])=>new Mt(c,u));let n=null;try{n=$i.triangulateShape(e,[])}catch{return null}if(!n||!n.length)return null;const s=e.length,o=new Float32Array(s*3),r=new Float32Array(s*2);for(let c=0;c<s;c++)o[c*3]=t.x+t.nx*e[c].x,o[c*3+1]=e[c].y,o[c*3+2]=t.z+t.nz*e[c].x,r[c*2]=e[c].x/16,r[c*2+1]=e[c].y/16;const a=new Uint32Array(n.length*6);for(let c=0;c<n.length;c++){const u=n[c];a[c*6]=u[0],a[c*6+1]=u[1],a[c*6+2]=u[2],a[c*6+3]=u[2],a[c*6+4]=u[1],a[c*6+5]=u[0]}const l=new re;return l.setAttribute("position",new ue(o,3)),l.setAttribute("uv",new ue(r,2)),l.setIndex(new ue(a,1)),l.computeVertexNormals(),l}function Li({path:i,section:t,closed:e=!1,seats:n,aisles:s,dark:o,aisleStep:r=6,aisleFrom:a=0,aisleFrac:l=.3,vomStep:c=0,vomWidth:u=3.2}){n.push(Vt(i,t.seats,e));const h=t.seats.map(([d,p])=>[d,p+.12]),f=e?i.length:i.length-1;if(s&&r>0){const d=l/2;for(let p=a;p<f;p+=r){const _=i[p],g=i[(p+1)%i.length];s.push(Vt([cf(_,g,.5-d),cf(_,g,.5+d)],h))}}if(o&&c>0){const d=t.uTop-1.6;for(let p=Math.floor(c/2);p<f;p+=c){const _=i[p];o.push(Ct(u,3,2.4,_.x+_.nx*d,t.vTop-1.2,_.z+_.nz*d,un(_)))}}}function zd({path:i,y0:t,y1:e,step:n,colW:s,colD:o,cols:r,braces:a,braceEvery:l=0,braceBands:c=[],outset:u=0}){const h=i.length-1;for(let f=0;f<i.length;f+=n){const d=i[f],p=un(d);if(r.push(Ct(s,e-t,o,d.x+d.nx*u,(t+e)*.5,d.z+d.nz*u,p)),!a||!l||f%(n*l)!==0||f+n>h)continue;const _=i[Math.min(f+n,h)],g=Math.hypot(_.x-d.x,_.z-d.z),m=(d.x+_.x)*.5+d.nx*u,M=(d.z+_.z)*.5+d.nz*u;for(const[v,x]of c){const w=x-v,T=Math.hypot(g,w),b=Math.atan2(w,g);for(const A of[1,-1])a.push(Fs(T,.5,o*.5,A*b,m,(v+x)*.5,M,p))}}}function sy(i){const t=i.getIndex(),e=i.attributes.position;if(!t)return i;let n=0;const s=new U,o=new U,r=new U;for(let a=0;a<t.count;a+=3)s.fromBufferAttribute(e,t.getX(a)),o.fromBufferAttribute(e,t.getX(a+1)),r.fromBufferAttribute(e,t.getX(a+2)),o.sub(s),r.sub(s),n+=o.z*r.x-o.x*r.z;if(n<0){for(let a=0;a<t.count;a+=3){const l=t.getX(a);t.setX(a,t.getX(a+2)),t.setX(a+2,l)}t.needsUpdate=!0,i.computeVertexNormals()}return i}function oy(i,t,e,n,s){const o=Un(i,t,0,Math.PI*2,!0),r=o.length,a=r*e+1,l=new Float32Array(a*3),c=new Float32Array(a*2);for(let p=0;p<e;p++){const _=1-p/e,g=n+s*(1-_*_);for(let m=0;m<r;m++){const M=p*r+m;l[M*3]=o[m].x*_,l[M*3+1]=g,l[M*3+2]=o[m].z*_,c[M*2]=m/r,c[M*2+1]=p/e}}const u=r*e;l[u*3+1]=n+s,c[u*2]=.5,c[u*2+1]=1;const h=new Uint32Array(r*(e-1)*6+r*3);let f=0;for(let p=0;p<e-1;p++)for(let _=0;_<r;_++){const g=(_+1)%r,m=p*r+_,M=p*r+g,v=(p+1)*r+g,x=(p+1)*r+_;h[f++]=m,h[f++]=M,h[f++]=x,h[f++]=M,h[f++]=v,h[f++]=x}for(let p=0;p<r;p++)h[f++]=(e-1)*r+p,h[f++]=(e-1)*r+(p+1)%r,h[f++]=u;const d=new re;return d.setAttribute("position",new ue(l,3)),d.setAttribute("uv",new ue(c,2)),d.setIndex(new ue(h,1)),d.computeVertexNormals(),sy(d)}function qc(i,t,e){const n=new aa;n.moveTo(i[0][0],-i[0][1]);for(let o=1;o<i.length;o++)n.lineTo(i[o][0],-i[o][1]);n.closePath();const s=new zo(n);if(s.rotateX(-Math.PI/2),s.translate(0,t,0),e){const o=s.attributes.position,r=new Float32Array(o.count*2);for(let a=0;a<o.count;a++){const[l,c]=e(o.getX(a),o.getZ(a));r[a*2]=l,r[a*2+1]=c}s.setAttribute("uv",new ue(r,2))}return s}function ry(i,t=.05){const e=[];for(const n of i){const s=e[e.length-1],o=e[e.length-2];s&&o&&Math.abs((s[0]-o[0])*(n[1]-o[1])-(s[1]-o[1])*(n[0]-o[0]))<t&&e.pop(),e.push(n)}return e}function Zc(i,t){if(typeof document>"u")return null;const e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d");return n?{canvas:e,ctx:n}:null}function jc(i){const t=new rs(i);return t.colorSpace=Be,t.wrapS=hi,t.wrapT=hi,t.anisotropy=8,t.needsUpdate=!0,t}function wr(i,t,e){i.beginPath();const n=e(t[0][0],t[0][1]);i.moveTo(n[0],n[1]);for(let s=1;s<t.length;s++){const o=e(t[s][0],t[s][1]);i.lineTo(o[0],o[1])}i.closePath()}const fc="#255d2c",dc="#357f3a",Bd="#1d4a23",uf="#8a5a36",ay="#6f4527",hf="#f2f4ef";function ly(i,t){const e=Zc(1024,1024);if(!e)return null;const{canvas:n,ctx:s}=e,o=1024/t.span,r=(p,_)=>[(p-t.x0)*o,(_-t.z0)*o],a=(p,_)=>r(p,_)[0],l=(p,_)=>r(p,_)[1],c=r(0,0);s.fillStyle=Bd,s.fillRect(0,0,1024,1024),s.save(),wr(s,i,r),s.clip(),s.fillStyle=fc,s.fillRect(0,0,1024,1024),s.fillStyle=dc;for(let p=-10;p<10;p+=2)s.beginPath(),s.moveTo(c[0],c[1]),s.arc(c[0],c[1],1500,p*7*Re,(p+1)*7*Re),s.closePath(),s.fill();s.strokeStyle=ay,s.lineWidth=9.2*o,wr(s,i,r),s.stroke();const u=60.5*Xt,h=39.6,f=72*Re;s.fillStyle=uf,s.beginPath(),s.moveTo(a(-6.5,-6.5),l(-6.5,-6.5)),s.lineTo(a(h*.7071,-h*.7071),l(h*.7071,-h*.7071)),s.arc(a(u,0),l(u,0),95*Xt*o,-f,f),s.lineTo(a(-6.5,6.5),l(-6.5,6.5)),s.closePath(),s.fill(),s.beginPath(),s.arc(c[0],c[1],4*o,0,Math.PI*2),s.fill();const d=90*Xt;s.fillStyle=dc,wr(s,[[4.6,0],[d*.7071,-14.797167200000002],[d*1.4142-4.6,0],[d*.7071,d*.7071-4.6]],r),s.fill(),s.fillStyle=fc;for(let p=0;p<4;p+=2)s.save(),s.beginPath(),s.rect(a(6+p*9,-40),l(0,-40),9*o,80*o),s.clip(),wr(s,[[4.6,0],[d*.7071,-14.797167200000002],[d*1.4142-4.6,0],[d*.7071,d*.7071-4.6]],r),s.fill(),s.restore();s.fillStyle=uf,s.beginPath(),s.arc(a(u,0),l(u,0),9*Xt*o,0,Math.PI*2),s.fill(),s.strokeStyle=hf,s.lineWidth=.42*o;for(const p of[-1,1])s.beginPath(),s.moveTo(c[0],c[1]),s.lineTo(a(104*.7071,p*104*.7071),l(104*.7071,p*104*.7071)),s.stroke();s.strokeRect(a(-1.1,-1.9),l(-1.1,-1.9),1.83*o,1.22*o),s.strokeRect(a(-1.1,.7),l(-1.1,.7),1.83*o,1.22*o),s.strokeRect(a(-3.6,-1.1),l(-3.6,-1.1),2.4*o,2.2*o);for(const p of[-1,1])s.beginPath(),s.arc(a(9,p*13),l(9,p*13),1.5*o,0,Math.PI*2),s.stroke(),s.strokeRect(a(24,p*24),l(24,p*24),6*o,3*o);s.fillStyle=hf;for(const[p,_]of[[d*.7071,d*.7071],[d*1.4142,0],[d*.7071,-d*.7071]])s.fillRect(a(p,_)-.75*o,l(p,_)-.75*o,1.5*o,1.5*o);return s.restore(),jc(n)}const Mo={x:132,z:94};function cy(){const i=Zc(1024,728);if(!i)return null;const{canvas:t,ctx:e}=i,n=1024/Mo.x,s=(d,p)=>[(d+Mo.x*.5)*n,(p+Mo.z*.5)*n],o=50*.9144,r=10*.9144,a=26.5*.9144,l=o+r;e.fillStyle=Bd,e.fillRect(0,0,1024,728),e.fillStyle="#22532a";for(const d of[-1,1]){const p=s(0,d*(a+1.8))[1],_=s(0,d*(a+13))[1];e.fillRect(s(-o,0)[0],Math.min(p,_),2*o*n,Math.abs(_-p))}const c=s(0,-a)[1],u=s(0,a)[1],h=u-c;e.fillStyle=fc,e.fillRect(s(-l,0)[0],c,2*l*n,h),e.fillStyle=dc;for(let d=0;d<20;d+=2)e.fillRect(s(-o+d*4.572,0)[0],c,4.572*n,h);e.fillStyle="#14161a",e.fillRect(s(-l,0)[0],c,r*n,h),e.fillRect(s(o,0)[0],c,r*n,h),e.fillStyle="#ffb612",e.font=`bold ${5.4*n}px sans-serif`,e.textAlign="center",e.textBaseline="middle";for(const[d,p]of[[-o-r*.5,-Math.PI/2],[o+r*.5,Math.PI/2]]){const _=s(d,0);e.save(),e.translate(_[0],_[1]),e.rotate(p),e.fillText("STEELERS",0,0),e.restore()}e.strokeStyle="#eef2ee",e.lineWidth=.32*n;for(let d=1;d<20;d++){const p=s(-o+d*4.572,0)[0];e.beginPath(),e.moveTo(p,c),e.lineTo(p,u),e.stroke()}e.lineWidth=.6*n,e.strokeRect(s(-l,-a)[0],c,2*l*n,h),e.lineWidth=.7*n;for(const d of[-o,o]){const p=s(d,0)[0];e.beginPath(),e.moveTo(p,c),e.lineTo(p,u),e.stroke()}e.lineWidth=.35*n,e.strokeRect(s(-l-1.83,-a-1.83)[0],s(0,-a-1.83)[1],(2*l+3.66)*n,(2*a+3.66)*n),e.lineWidth=.28*n;for(const d of[-2.666999999999998,a-70.75*Xt])for(let p=1;p<100;p++){if(p%5===0)continue;const _=s(-o+p*.9144,0)[0],g=s(0,d)[1];e.beginPath(),e.moveTo(_,g-.6*n),e.lineTo(_,g+.6*n),e.stroke()}e.fillStyle="#eef2ee",e.font=`bold ${5.5*n}px sans-serif`;for(let d=1;d<10;d++){const p=d*10,_=String(p>50?100-p:p);for(const[g,m]of[[-16.002000000000002,0],[a-27*Xt,Math.PI]]){const M=s(0,g);e.save(),e.translate(M[0],M[1]),e.rotate(m),e.fillText(_,0,0),e.restore()}}e.strokeStyle="#ffb612",e.lineWidth=.7*n;const f=s(0,0);e.beginPath(),e.arc(f[0],f[1],9*n,0,Math.PI*2),e.stroke(),e.fillStyle="#ffb612";for(let d=0;d<3;d++)e.beginPath(),e.arc(f[0]+(d-1)*3.4*n,f[1],1.5*n,0,Math.PI*2),e.fill();return jc(t)}function uy(){const i=Zc(512,256);if(!i)return null;const{canvas:t,ctx:e}=i,n=200*Xt,s=85*Xt,o=512/n,r=(l,c)=>[(l+n*.5)*o,(c+s*.5)*o];e.fillStyle="#eef3f7",e.fillRect(0,0,512,256),e.strokeStyle="#c22b32",e.lineWidth=.35*o;for(const l of[-64*Xt,64*Xt]){const c=r(l,0)[0];e.beginPath(),e.moveTo(c,0),e.lineTo(c,256),e.stroke()}e.lineWidth=.32*o;const a=r(0,0);e.beginPath(),e.moveTo(a[0],0),e.lineTo(a[0],256),e.stroke(),e.strokeStyle="#2b4fa2",e.lineWidth=.9*o;for(const l of[-25*Xt,25*Xt]){const c=r(l,0)[0];e.beginPath(),e.moveTo(c,0),e.lineTo(c,256),e.stroke()}e.strokeStyle="#2b4fa2",e.lineWidth=.3*o,e.beginPath(),e.arc(a[0],a[1],15*Xt*o,0,Math.PI*2),e.stroke(),e.strokeStyle="#c22b32";for(const l of[-69*Xt,-20*Xt,20*Xt,69*Xt])for(const c of[-22*Xt,22*Xt]){const u=r(l,c);e.beginPath(),e.arc(u[0],u[1],15*Xt*o,0,Math.PI*2),e.stroke()}return jc(t)}function hy(){return he(2910771,{roughness:.95,metalness:.01})}function Kc(i,t){return i?new Le({map:i,roughness:.93,metalness:.02,envMapIntensity:.3}):t||hy()}const fy=[[-45,325*Xt],[-38,108],[-32,114.5],[-26,389*Xt],[-21,122],[-18.5,410*Xt],[-13.5,410*Xt],[-11,122.4],[-5,121.8],[0,399*Xt],[8,119.4],[16,116.6],[24,375*Xt],[31,108],[38,102],[45,320*Xt]],co=[[62,74],[44,56],[28,40],[14,27],[2,19],[-8,13.5],[-14,6],[-51*Xt,0],[-14,-6],[-8,-13.5],[2,-19],[14,-27],[28,-40],[44,-56],[62,-74]];function dy(){return fy.map(([i,t])=>[Math.cos(i*Re)*t,Math.sin(i*Re)*t])}function ul(i){return Math.PI/2-i}function py(i){return i<=-6?6*Xt:i<=6?Xs(6*Xt,10*Xt,(i+6)/12):i<=18?10*Xt:i>=27?21*Xt:Xs(10*Xt,21*Xt,(i-18)/9)}function my(i={}){const t=new Ie;t.name="pnc-park";const e=Jn(i.h,30,46),n=Jn(e/36,.9,1.15),s=Xc(i.f,280,218),o=Fd(i.orientYaw,21*Re),r=new Ie;r.rotation.y=-o,r.scale.set(s,1,s),t.add(r);const a=new Ie,l=he(11575676,{roughness:.85,metalness:.04}),c=he(9339490,{roughness:.88,metalness:.04}),u=he(9276032,{roughness:.9,metalness:.04}),h=he(2046822,{roughness:.48,metalness:.6,envMapIntensity:.9}),f=he(2442095,{roughness:.88,metalness:.04}),d=he(1782616,{roughness:.88,metalness:.04}),p=he(10462633,{roughness:.52,metalness:.4,envMapIntensity:.6}),_=he(1451583,{roughness:.92,metalness:.03}),g=he(2377503,{roughness:.95,metalness:.02}),m=he(1776928,{roughness:.85,metalness:.05}),M=he(9417416,{roughness:.12,metalness:.5,transparent:!0,opacity:.62,emissive:2375772,emissiveIntensity:.35,envMapIntensity:1.3}),v=he(724240,{roughness:.35,metalness:.3,emissive:2766160,emissiveIntensity:.55}),x=he(14673112,{roughness:.3,metalness:.5,emissive:16773312,emissiveIntensity:.9}),w=[],T=[],b=[],A=[],y=[],S=[],R=[],D=[],F=[],O=[],z=[],H=[],J=[],G=[],et=dy(),Y=co.concat(et),Q={x0:-36,z0:-92,span:184},V=Kc(ly(Y,Q)),ot=qc(Y,.3,(nt,B)=>[(nt-Q.x0)/Q.span,1-(B-Q.z0)/Q.span]),X=new te(ot,V);X.receiveShadow=!0,a.add(X);const L=Un(iy(et),64,0,1),I=L.map((nt,B)=>Xs(-45,45,B/(L.length-1)));L.forEach((nt,B)=>{nt.sv=py(I[B])}),F.push(Vt(L,[[0,0],[0,1],[.55,1],[.55,0]])),A.push(Vt(Je(L,.55),[[0,1.02],[.16,1.02],[.16,.97]]));for(const nt of[-45,45]){const B=nt<0?325*Xt:320*Xt;A.push(Ct(.5,12,.5,Math.cos(nt*Re)*B,6,Math.sin(nt*Re)*B))}const k=cl(co),$=Un(k,76,0,1),at=Je($,1.4),ct=Pi({u0:0,v0:1*n,steps:16,run:1.4,rise:.46*n,fascia:2.4,grow:.5});Li({path:at,section:ct,seats:S,aisles:D,dark:O,aisleStep:5,aisleFrom:2,vomStep:10}),b.push(Vt(at,ct.shell));const ht=ct.uTop-1,gt=ct.vTop+5.6*n;b.push(Vt(at,[[ht,ct.vTop+1.1],[ht+4.2,ct.vTop+1.1],[ht+4.2,ct.vTop-1.4],[ht,ct.vTop-1.4]])),H.push(Vt(Je(at,ht+.5),[[0,gt],[0,ct.vTop+1.3]])),w.push(Vt(at,[[ht+.5,gt+1.5],[ht+5.4,gt+1.5],[ht+5.4,gt],[ht+.5,gt]]));const Et=ct.uTop-5,N=Pi({u0:Et,v0:gt+1.8*n,steps:12,run:1.45,rise:.62*n,fascia:3,base:0,grow:.3});Li({path:at,section:N,seats:R,aisles:D,dark:O,aisleStep:5,aisleFrom:2,vomStep:12}),w.push(Vt(at,N.shell));const Ht=[at[0],at[at.length-1]];for(const nt of Ht)b.push(ji(ct.closed,nt)),w.push(ji(N.closed,nt));for(let nt=2;nt<at.length-2;nt+=5){const B=at[nt],tt=9.5,mt=5;A.push(Do(Math.hypot(tt,mt),.7,.9,-Math.atan2(mt,tt),B,Et+tt*.5,N.v0-mt*.5))}b.push(Vt(at,[[Et,N.v0],[Et-.5,N.v0],[Et-.5,N.v0-2.6],[Et,N.v0-2.6]]));const At=N.vTop+4.2*n,it=N.uTop-8.5;y.push(Vt(at,[[it,At],[N.uOut+.4,At],[N.uOut+.4,At-1],[it,At-1]])),w.push(Vt(at,[[N.uTop,At-1.2],[N.uTop,N.vTop]]));for(let nt=1;nt<at.length-1;nt+=4){const B=at[nt],tt=un(B);A.push(Ct(.7,At-N.vTop,.7,B.x+B.nx*(N.uTop+1.2),(At+N.vTop)*.5,B.z+B.nz*(N.uTop+1.2),tt));const mt=N.uOut-it;A.push(Do(mt,.85,.5,-.09,B,it+mt*.5,At-1.9))}const Z=Je(at,N.uOut-.3),pt=8.4,dt=N.vTop+1.2;w.push(Vt(Z,[[0,dt],[1.7,dt],[1.7,pt],[0,pt]])),T.push(Vt(Z,[[.3,pt+1.3],[2.2,pt+1.3],[2.2,pt-.4],[.3,pt-.4]]));for(let nt=0;nt<Z.length;nt+=2){const B=Z[nt],tt=un(B);T.push(Ct(2.6,pt,2.3,B.x+B.nx*1,pt*.5,B.z+B.nz*1,tt)),O.push(Ct(3.4,6.6,.5,B.x+B.nx*2,3.3,B.z+B.nz*2,tt)),T.push(Ct(3.9,.7,.7,B.x+B.nx*2.05,7,B.z+B.nz*2.05,tt))}for(let nt=1;nt<Z.length;nt+=2){const B=Z[nt],tt=un(B);w.push(Ct(1.8,dt-pt,1,B.x+B.nx*2,(dt+pt)*.5,B.z+B.nz*2,tt))}for(const nt of[12,16.4,20.8])T.push(Vt(Z,[[.15,nt+.5],[1.9,nt+.5],[1.9,nt],[.15,nt]]));for(let nt=6;nt<Z.length-6;nt+=12){const B=Z[nt],tt=un(B);A.push(Ct(6.4,dt,2.4,B.x+B.nx*2.4,dt*.5,B.z+B.nz*2.4,tt));for(let mt=1;mt<=3;mt++)A.push(Fs(8.4,.5,2.6,.5,B.x+B.nx*2.6,dt*mt/3.6,B.z+B.nz*2.6,tt))}const P=[co[co.length-1]].concat(et.slice(0,6)),E=Je(Un(cl(P),30,0,1),3.6),W=Pi({u0:0,v0:2.6*n,steps:9,run:1.45,rise:.62*n,fascia:2,base:0,grow:.4});Li({path:E,section:W,seats:S,aisles:D,aisleStep:5,aisleFrom:2}),w.push(Vt(E,W.shell));for(const nt of[E[0],E[E.length-1]])w.push(ji(W.closed,nt));const lt=Je(E,W.uOut-.3);zd({path:lt,y0:0,y1:W.vTop+1,step:3,colW:1.2,colD:1.6,cols:T,outset:.7});{const nt=E[1],B=13.5,tt=22*n,mt=nt.x+nt.nx*(B*.55+W.uOut),xt=nt.z+nt.nz*(B*.55+W.uOut);A.push(Ai(B,B,.9,14,mt,tt,xt));for(let It=0;It<4;It++)A.push(Ai(B+.5,B+.5,.7,14,mt,4.5+It*5.6,xt));for(let It=0;It<12;It++){const ne=It/12*Math.PI*2;A.push(ll(1,tt,1,mt,xt,B,tt*.5,ne)),It%3!==0&&T.push(ll(5.6,9,.5,mt,xt,B+.3,13.5,ne))}O.push(Ai(B-1.4,B-1.4,tt-1,14,mt,(tt-1)*.5,xt))}const ft=et.slice(11).concat([co[0]]),ut=Je(Un(cl(ft),26,0,1),1.6),Dt=4.6*n,wt=13;w.push(Vt(ut,[[0,Dt],[wt,Dt],[wt,0],[0,0]]));for(const nt of[ut[0],ut[ut.length-1]])w.push(ji([[0,0],[0,Dt],[wt,Dt],[wt,0]],nt));for(let nt=0;nt<ut.length;nt+=2){const B=ut[nt];A.push(Ct(.24,1.3,.24,B.x+B.nx*(wt-.5),Dt+.65,B.z+B.nz*(wt-.5)))}A.push(Vt(Je(ut,wt-.5),[[0,Dt+1.3],[0,Dt+.95]]));const Pt=Pi({u0:.6,v0:Dt+.6,steps:5,run:1.3,rise:.6*n,fascia:1.4,base:Dt});Li({path:ut,section:Pt,seats:S,aisles:D,aisleStep:5,aisleFrom:2}),w.push(Vt(ut,Pt.shell));{const nt=Z[Math.round((Z.length-1)/2)],B=14,tt=24*n,mt=nt.x+nt.nx*B*.28,xt=nt.z+nt.nz*B*.28;w.push(Ai(B,B,tt,9,mt,tt*.5,xt,Math.PI/9)),T.push(Ai(B+.7,B+.7,1,9,mt,pt+1,xt,Math.PI/9)),T.push(Ai(B+1.5,B+1.5,1.2,9,mt,tt+.6,xt,Math.PI/9)),A.push(Ai(B-1,B-1,1,9,mt,tt+1.8,xt,Math.PI/9));for(let It=0;It<9;It++){const ne=It/9*Math.PI*2+Math.PI/9;H.push(ll(8.4,tt-pt-3,.4,mt,xt,B,(tt+pt)*.5,ne))}}for(const nt of[0,Z.length-1]){const B=Z[nt],tt=un(B),mt=25*n,xt=B.x-B.nx*6,It=B.z-B.nz*6;w.push(Ct(18,mt,15,xt,mt*.5,It,tt));for(let ne=1;ne<=3;ne++)A.push(Ct(19,.7,16,xt,mt*ne/3.6,It,tt));T.push(Ct(19.4,1.1,16.4,xt,mt+.55,It,tt))}const jt=-30*Re,vt=122,Rt=Math.cos(jt)*vt,kt=Math.sin(jt)*vt,Gt=ul(jt);for(const nt of[-16,16])A.push(Ct(1.5,24*n,1.5,Rt-Math.sin(jt)*nt,12*n,kt+Math.cos(jt)*nt,Gt));A.push(Ct(36,15*n,1.5,Rt,17*n,kt,Gt)),J.push(Ct(12.8,7.3,.9,Rt-Math.cos(jt)*.9,18.5*n,kt-Math.sin(jt)*.9,Gt)),J.push(Ct(30,2.4,.7,Rt-Math.cos(jt)*.9,12.4*n,kt-Math.sin(jt)*.9,Gt));const Lt=34*Re,ee=104;J.push(Ct(26,3.6,.5,Math.cos(Lt)*ee,4,Math.sin(Lt)*ee,ul(Lt)));for(const nt of[.07,.24,.4,.6,.76,.93]){const B=Math.round(nt*(Z.length-1)),tt=Z[B],mt=tt.x-tt.nx*3,xt=tt.z-tt.nz*3,It=un(tt),ne=At+9.5*n;A.push(Ct(2.6,ne-At+2,1.4,mt,At+(ne-At)*.5,xt,It)),A.push(Ct(13,1.1,1.2,mt,ne,xt,It));for(let ze=0;ze<4;ze++)G.push(Ct(2.6,1.3,.6,mt+Math.cos(It)*(ze-1.5)*3.3,ne+1.1,xt-Math.sin(It)*(ze-1.5)*3.3,It))}for(const[nt,B]of[[104,-84],[126,-44],[120,52]]){const tt=30*n,mt=Math.atan2(nt,B);A.push(Ct(2.2,tt,2.2,nt,tt*.5,B)),A.push(Ct(12,1.1,1.4,nt,tt+.8,B,mt)),G.push(Ct(9,1.2,.8,nt,tt+1.9,B,mt))}const qt=-3*Re;F.push(Ct(26,7.5,3.4,Math.cos(qt)*123,3.75,Math.sin(qt)*123,ul(qt)));for(let nt=0;nt<7;nt++){const B=(-10+nt*3.2)*Re;z.push(Ai(2.4,2,3,6,Math.cos(B)*120,8.4,Math.sin(B)*120))}const xe=[[w,l],[T,c],[b,u],[D,u],[A,h],[y,p],[S,f],[R,d],[F,_],[O,m],[z,g],[H,M],[J,v],[G,x]];for(const[nt,B]of xe){const tt=Yc(nt,B);tt&&a.add(tt)}const q=QM(Y);return Od(a,r,q[0],q[1]),t}const ff=62.5,gy=42.7,_y=26,br=40*Re,Er=47*Re;function xy(i={}){const t=new Ie;t.name="acrisure-stadium";const e=Jn(i.h,42,64),n=Jn(e/58,.9,1.12),s=Xc(i.f,290,261),o=Fd(i.orientYaw,64.5*Re),r=new Ie;r.rotation.y=-o,r.scale.set(s,1,s),t.add(r);const a=new Ie,l=he(8550239,{roughness:.87,metalness:.05}),c=he(7301986,{roughness:.9,metalness:.05}),u=he(3882821,{roughness:.44,metalness:.66,envMapIntensity:.95}),h=he(4672594,{roughness:.78,metalness:.08,envMapIntensity:.15}),f=he(15249948,{roughness:.9,metalness:.05}),d=he(2237482,{roughness:.9,metalness:.06}),p=he(5468554,{roughness:.14,metalness:.5,transparent:!0,opacity:.55,emissive:1780796,emissiveIntensity:.16,envMapIntensity:.85}),_=he(658447,{roughness:.3,metalness:.35,emissive:3818592,emissiveIntensity:.6}),g=he(15001820,{roughness:.28,metalness:.5,emissive:16773832,emissiveIntensity:1}),m=[],M=[],v=[],x=[],w=[],T=[],b=[],A=[],y=[],S=[],R=[],D=ny(ff,gy,_y),F=ry(Array.from({length:108},(it,Z)=>{const pt=D(Z/108*Math.PI*2);return[pt[0]*.995,pt[1]*.995]})),O=Kc(cy()),z=qc(F,.25,(it,Z)=>[it/Mo.x+.5,.5-Z/Mo.z]),H=new te(z,O);H.receiveShadow=!0,a.add(H);const J=Un(D,108,0,Math.PI*2,!0);A.push(Vt(J,[[-.4,1.1],[.3,1.1],[.3,0]],!0));const G=Pi({u0:.4,v0:1.2*n,steps:16,run:1.5,rise:.52*n,fascia:2.6,grow:.5});Li({path:J,section:G,closed:!0,seats:w,aisles:b,dark:A,aisleStep:5,vomStep:9}),m.push(Vt(J,G.shell,!0));const et=Un(D,84,br,Math.PI*2-br),Y=G.vTop+3.2*n;m.push(Vt(et,[[G.uTop-.4,Y-.4],[G.uOut+3,Y-.4],[G.uOut+3,G.vTop-2.2],[G.uTop-.4,G.vTop-2.2]]));const Q=Pi({u0:G.uTop+1.6,v0:Y,steps:7,run:1.7,rise:.7*n,fascia:2.6,grow:.25});Li({path:et,section:Q,seats:w,aisles:b,aisleStep:6,aisleFrom:3}),M.push(Vt(et,Q.shell));const V=Q.vTop+1.5*n,ot=V+6.6*n;y.push(Vt(Je(et,Q.uTop-.6),[[0,ot],[0,V]])),M.push(Vt(et,[[Q.uTop-1.2,ot+1.4],[Q.uOut+2.4,ot+1.4],[Q.uOut+2.4,ot],[Q.uTop-1.2,ot]])),M.push(Vt(et,[[Q.uTop-1.2,V],[Q.uOut+2.4,V],[Q.uOut+2.4,V-1.5],[Q.uTop-1.2,V-1.5]]));const X=Q.uTop-4,L=Pi({u0:X,v0:ot+2.8*n,steps:18,run:1.3,rise:.78*n,fascia:3.4,base:0,grow:.4}),I=Un(D,88,Er,Math.PI*2-Er);Li({path:I,section:L,seats:T,aisles:b,dark:A,aisleStep:5,aisleFrom:2,vomStep:11}),A.push(Vt(I,L.seats.slice(-11).map(([it,Z])=>[it,Z+.08]))),m.push(Vt(I,L.shell)),m.push(Vt(I,[[X,L.v0],[X-.6,L.v0],[X-.6,L.v0-3.4],[X,L.v0-3.4]]));for(const it of[et[0],et[et.length-1]])M.push(ji(Q.closed,it));for(const it of[I[0],I[I.length-1]])m.push(ji(L.closed,it));const k=45*Xt;for(let it=1;it<I.length-1;it+=4){const Z=I[it],pt=L.v0-ot-.5;v.push(Do(Math.hypot(k,pt),1,1.3,-Math.atan2(pt,k),Z,X+k*.5,L.v0-pt*.5))}const $=L.vTop+5*n,at=L.uTop-75*Xt;x.push(Vt(I,[[at,$],[L.uOut+2,$],[L.uOut+2,$-1.4],[at,$-1.4]])),m.push(Vt(I,[[L.uTop,$-1.5],[L.uTop,L.vTop]]));for(let it=2;it<I.length-2;it+=4){const Z=I[it],pt=un(Z);v.push(Ct(1.1,$-L.vTop+3,2.6,Z.x+Z.nx*(L.uTop+1.4),($+L.vTop)*.5-1,Z.z+Z.nz*(L.uTop+1.4),pt));const dt=L.uOut+2-at;v.push(Do(dt,1.2,.7,-.06,Z,at+dt*.5,$-2.4)),it%8===2&&R.push(Ct(8.4,1.1,1,Z.x+Z.nx*(at+1),$-2.6,Z.z+Z.nz*(at+1),pt))}const ct=Un(D,34,-br,br),ht=Pi({u0:G.uTop+1.6,v0:Y-1.4,steps:8,run:1.7,rise:.8*n,fascia:2.8,grow:.3});Li({path:ct,section:ht,seats:w,aisles:b,aisleStep:6,aisleFrom:3}),M.push(Vt(ct,ht.shell));for(const it of[ct[0],ct[ct.length-1]])M.push(ji(ht.closed,it));y.push(Vt(Je(ct,ht.uTop-.4),[[0,ht.vTop+5.6*n],[0,ht.vTop+1]])),M.push(Vt(ct,[[ht.uTop-1,ht.vTop+7*n],[ht.uOut+1.6,ht.vTop+7*n],[ht.uOut+1.6,ht.vTop+5.6*n],[ht.uTop-1,ht.vTop+5.6*n]]));for(let it=0;it<ct.length;it+=3){const Z=ct[it];v.push(Ct(.3,1.2,.3,Z.x+Z.nx*(ht.u0-.5),ht.v0+.6,Z.z+Z.nz*(ht.u0-.5)))}const gt=ff+42;for(const it of[-16,16])v.push(Ct(2.4,30*n,2.4,gt+3.4,15*n,it));for(let it=0;it<3;it++){const Z=4+it*9*n,pt=Z+9*n;for(const dt of[1,-1])v.push(Fs(Math.hypot(32,9*n),.5,1.2,dt*Math.atan2(9*n,32),gt+3.4,(Z+pt)*.5,0,Math.PI/2))}v.push(Ct(3,2,34,gt+3.4,22.5*n,0)),v.push(Ct(3,2,34,gt+3.4,33.5*n,0)),S.push(Ct(1.2,28*Xt,96*Xt,gt+1.6,28*n,0)),M.push(Ct(9,8,44,gt+8,4,0));{const it=152*Re,Z=D(it),pt=Math.hypot(Z[0],Z[1]),dt=Z[0]/pt,P=Z[1]/pt,E=Z[0]+dt*(L.uOut+4),W=Z[1]+P*(L.uOut+4),lt=Math.atan2(dt,P);v.push(Ct(24,4,2.2,E,L.vTop+2,W,lt)),S.push(Ct(73*Xt,35*Xt,1,E-dt*1.2,L.vTop+8,W-P*1.2,lt))}const Et=Je(I,L.uOut+.5),N=$+1.6,Ht=L.v0-9.5;M.push(Vt(Et,[[.2,Ht],[2,Ht],[2,5.2],[.2,5.2]])),M.push(Vt(Et,[[.5,5],[2.7,5],[2.7,0],[.5,0]]));for(let it=1;it<Et.length-1;it+=3){const Z=Et[it],pt=un(Z);for(const dt of[9.5,16])A.push(Ct(6.4,3.6,.6,Z.x+Z.nx*2.4,dt,Z.z+Z.nz*2.4,pt))}zd({path:Et,y0:0,y1:N,step:3,colW:2,colD:3.4,cols:v,braces:v,braceEvery:3,braceBands:[[5,Ht],[Ht+2.4,L.v0],[L.v0+2,N-3]],outset:2.2});for(const it of[Ht+1.2,L.v0+1,(L.v0+L.vTop)*.5])v.push(Vt(Je(Et,2),[[0,it+.9],[1.1,it+.9],[1.1,it-.9],[0,it-.9]]));v.push(Vt(Je(Et,1.4),[[0,N+1.4],[2.2,N+1.4],[2.2,N-3],[0,N-3]])),y.push(Vt(Je(Et,.6),[[0,L.v0-.5],[0,Ht+1.6]])),y.push(Vt(Je(Et,2.6),[[0,4.6],[0,.2]])),v.push(Vt(Je(Et,2.4),[[0,5.4],[2.6,5.4],[2.6,4.7],[0,4.7]]));for(let it=2;it<Et.length-2;it+=3){const Z=Et[it],pt=un(Z);A.push(Ct(3.4,4.2,.8,Z.x+Z.nx*2.9,2.1,Z.z+Z.nz*2.9,pt))}for(let it=6;it<Et.length-6;it+=13){const Z=Et[it],pt=un(Z),dt=L.v0+3,P=Z.x+Z.nx*8,E=Z.z+Z.nz*8;y.push(Ct(14,dt,13,P,dt*.5,E,pt));for(const W of[-1,1])v.push(Ct(1.1,dt,1.1,P+Math.cos(pt)*W*6.8,dt*.5,E-Math.sin(pt)*W*6.8,pt));for(let W=0;W<3;W++){const lt=4+W*(dt-6.5)/3;m.push(Fs(18,1.1,5,W%2?-.44:.44,P,lt,E,pt)),v.push(Ct(15.4,.5,5.6,P,lt+4.6,E,pt))}v.push(Ct(15.6,1.4,14.6,P,dt+.7,E,pt)),m.push(Ct(15,1.4,13.6,P,.7,E,pt))}for(const it of[Er,-Er]){const Z=D(it),pt=Math.hypot(Z[0],Z[1]),dt=Z[0]/pt,P=Z[1]/pt,E=Z[0]+dt*(L.uOut*.72),W=Z[1]+P*(L.uOut*.72),lt=Math.atan2(dt,P);m.push(Ct(21,6,17,E,3,W,lt));for(let ft=1;ft<=5;ft++)m.push(Ct(21,.8,17,E,3+ft*(L.v0-3)/5,W,lt)),v.push(Ct(22,.5,.6,E,3.6+ft*(L.v0-3)/5,W,lt));v.push(Ct(1.4,L.v0,1.4,E+dt*8,L.v0*.5,W+P*8,lt))}{const it=-100*Re,Z=D(it),pt=Math.hypot(Z[0],Z[1]),dt=Z[0]/pt,P=Z[1]/pt,E=Z[0]+dt*(L.uOut+8),W=Z[1]+P*(L.uOut+8),lt=Math.atan2(dt,P);M.push(Ct(64,17,15,E,8.5,W,lt)),y.push(Ct(56,13,15.6,E,8,W,lt)),x.push(Ct(68,1.4,19,E+dt*1.5,17.6,W+P*1.5,lt));for(let ft=-3;ft<=3;ft++)v.push(Ct(1.1,18,1.1,E+Math.cos(lt)*ft*9.2,9,W-Math.sin(lt)*ft*9.2,lt)),v.push(Fs(11,.6,1,-1.05,E+dt*3.6+Math.cos(lt)*ft*9.2,18.5,W+P*3.6-Math.sin(lt)*ft*9.2,lt))}const At=[[m,c],[M,l],[b,c],[v,u],[x,h],[w,f],[T,f],[A,d],[y,p],[S,_],[R,g]];for(const[it,Z]of At){const pt=Yc(it,Z);pt&&a.add(pt)}return Od(a,r,0,0),t}function vy(i={}){const t=new Ie;t.name="ppg-paints-arena";const e=Jn(i.h,32,48),n=Jn(e/40,.9,1.15),s=Xc(i.f,166,154),o=Number.isFinite(i.orientYaw)?i.orientYaw:Math.PI,r=new Ie;r.rotation.y=-o,r.scale.set(s,1,s),t.add(r);const a=new Ie,l=he(13223094,{roughness:.84,metalness:.06}),c=he(12172996,{roughness:.42,metalness:.52,envMapIntensity:1}),u=he(9275512,{roughness:.72,metalness:.12}),h=he(5922920,{roughness:.4,metalness:.68,envMapIntensity:1}),f=he(8159882,{roughness:.7,metalness:.18,envMapIntensity:.35}),d=he(9418447,{roughness:.08,metalness:.55,transparent:!0,opacity:.58,emissive:2902627,emissiveIntensity:.45,envMapIntensity:1.5,side:Cn}),p=he(15264991,{roughness:.3,metalness:.4,emissive:16771508,emissiveIntensity:.85}),_=[],g=[],m=[],M=[],v=[],x=[],w=[],T=78,b=74,A=ey(T,b,.52),y=24*n,S=Un(A,100,0,Math.PI*2,!0);g.push(Vt(S,[[.2,y+.8],[1.6,y+.2],[1.6,y-1.6],[0,y-3.4],[0,9.5]])),_.push(Vt(S,[[0,9.8],[.9,9.2],[.9,0]])),m.push(Vt(S,[[.3,y-5],[.3,y-8.6]]));const R=Math.max(e-y-1,6);v.push(oy(A,100,9,y+.6,R)),M.push(Vt(S,[[.2,y+2.6],[1,y+2.6],[1,y+.4],[.2,y+.4]]));for(let V=0;V<S.length;V+=2){const ot=S[V],X=Math.hypot(ot.x,ot.z)||1,L=.3,I=X*(1-L),k=R*(1-L*L),$=(1+L)*.5,at={x:0,z:0,nx:ot.x/X,nz:ot.z/X};v.push(Do(Math.hypot(I,k),.5,.32,-Math.atan2(k,I),at,X*$,y+.8+R*(1-$*$)))}for(const V of[-18,18]){v.push(Ct(108,2.4,3.2,0,y+R*.95,V)),M.push(Ct(110,.7,1,0,y+R*.95+1.5,V));for(let ot=-4;ot<=4;ot++)M.push(Ct(1,2.6,1,ot*11,y+R*.95+2.6,V))}for(const[V,ot,X,L]of[[-30,-34,18,12],[-8,-40,14,10],[14,-30,20,13],[-22,32,16,11],[10,38,13,10],[34,6,15,22]]){const I=y+R*(1-((V/T)**2+(ot/b)**2)*.5);M.push(Ct(X,4.6,L,V,I+1.4,ot)),m.push(Ct(X*.45,1.8,L*.5,V,I+4.6,ot))}const D=.72,F=Un(V=>{const ot=A(V);return[ot[0]*D,ot[1]*D]},64,0,Math.PI*2,!0),O=y+R*(1-D*D)+1.1;M.push(Vt(F,[[.6,O],[.6,O-.9]],!0));const z=y+R*(1-(46/T)**2*.5);g.push(Ct(15,7,12,-46,z+2.5,4));const H=new te(qc([[-30.5,-12.9],[30.5,-12.9],[30.5,12.9],[-30.5,12.9]],.2,(V,ot)=>[V/(200*Xt)+.5,.5-ot/(85*Xt)]),Kc(uy(),he(15134194,{roughness:.2,metalness:.1})));H.receiveShadow=!0,a.add(H);const G=Un(V=>{const ot=Xs(-64*Re,64*Re,V),X=A(ot),L=7.5*Math.sin(V*Math.PI*2)+13*Math.sin(V*Math.PI),I=Math.hypot(X[0],X[1])||1;return[X[0]+X[0]/I*L,X[1]+X[1]/I*L]},56,0,1),et=100*Xt*n*.62+12;x.push(Vt(G,[[0,et],[0,1.5]])),x.push(Vt(G,[[-8,et-4],[0,et]])),M.push(Vt(G,[[-8.4,et-4],[.7,et+.5],[.7,et-.4],[-8.4,et-4.8]]));for(let V=0;V<G.length;V+=2){const ot=G[V],X=un(ot);M.push(Ct(.75,et-1.5,.75,ot.x,(et+1.5)*.5,ot.z,X)),M.push(Ct(.5,.5,8.6,ot.x-ot.nx*4,et-1.9,ot.z-ot.nz*4,X))}for(const V of[.2,.35,.5,.66,.82])m.push(Vt(G,[[-.6,et*V],[.7,et*V],[.7,et*V-.8],[-.6,et*V-.8]]));const Y=G[Math.floor(G.length/2)];for(let V=0;V<7;V++)_.push(Ct(3,.95,42-V*2.6,Y.x+11-V*1.7,.48+V*.95,Y.z));M.push(Ct(2.2,1.2,54,Y.x+14,et*.42,Y.z)),g.push(Ct(19,.9,52,Y.x+6,et*.42,Y.z));for(const V of[-20,0,20])M.push(Ct(1,et*.42,1,Y.x+13.5,et*.21,Y.z+V));for(let V=0;V<S.length;V+=3){const ot=S[V],X=un(ot);m.push(Ct(.45,y-11.5,1,ot.x+ot.nx*.4,9.8+(y-11.5)*.5,ot.z+ot.nz*.4,X))}for(const V of[55*Re,125*Re,235*Re,305*Re]){const ot=A(V),X=Math.hypot(ot[0],ot[1]),L=Math.atan2(ot[0]/X,ot[1]/X);x.push(Ct(26,y-8,1,ot[0]*1.005,4+(y-8)*.5,ot[1]*1.005,L)),M.push(Ct(27,1.1,3,ot[0]*1.01,y-3.4,ot[1]*1.01,L))}for(let V=0;V<S.length;V+=10){const ot=S[V],X=un(ot);w.push(Ct(3.4,.7,.6,ot.x+ot.nx*2,y-2.2,ot.z+ot.nz*2,X))}for(const[V,ot]of[[-T-2,0],[0,-b-2],[0,b+2]]){const X=V===0;w.push(Ct(X?26:1,4.5,X?1:26,V,y-10,ot))}const Q=[[_,l],[g,c],[m,u],[M,h],[v,f],[x,d],[w,p]];for(const[V,ot]of Q){const X=Yc(V,ot);X&&a.add(X)}return ty(a,r),t}function hl(i,t={}){return new Le({color:i,roughness:t.roughness??.45,metalness:t.metalness??.2,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??0,transparent:t.transparent??!1,opacity:t.opacity??1,side:t.side??Xn,envMapIntensity:t.envMapIntensity??.6})}function pc(i){const[t,e]=Sn(i);let n=0,s=0,o=0;const r=i.length-1;for(let p=0;p<r;p++){const _=i[p][0]-t,g=i[p][1]-e;n+=_*_,s+=g*g,o+=_*g}const a=.5*Math.atan2(2*o,n-s),l=Math.cos(-a),c=Math.sin(-a);let u=1/0,h=-1/0,f=1/0,d=-1/0;for(let p=0;p<r;p++){const _=i[p][0]-t,g=i[p][1]-e,m=_*l-g*c,M=_*c+g*l;u=Math.min(u,m),h=Math.max(h,m),f=Math.min(f,M),d=Math.max(d,M)}return{minX:u,maxX:h,minZ:f,maxZ:d,w:Math.max(8,h-u),d:Math.max(8,d-f),yaw:a,cx:t,cz:e}}function fl(i,t,e,{cast:n=!0,receive:s=!0}={}){const o=t.filter(Boolean);if(!o.length)return;const r=sn(o,!1);if(!r)return;const a=new te(r,e);a.castShadow=n,a.receiveShadow=s,i.add(a);for(const l of o)l.dispose()}const $c=[{n:"Duquesne Incline",lower:[-1320.8,126.2],upper:[-1424.6,299.9],gauge:5.2,cars:2},{n:"Monongahela Incline",lower:[-243.7,946.5],upper:[-334.8,1074.6],gauge:4.4,cars:2}];$c.map(i=>({...i,n:i.n==="Duquesne Incline"?"듀케인 인클라인":i.n==="Monongahela Incline"?"모논거헐라 인클라인":i.n}));function My(i,t){const e=new Ie;e.name=i.n;const n=hl(4866104,{roughness:.86,metalness:.05}),s=hl(5264986,{roughness:.6,metalness:.55}),o=hl(8005154,{roughness:.52,metalness:.15,emissive:1574918,emissiveIntensity:.12}),[r,a]=i.lower,[l,c]=i.upper,u=l-r,h=c-a,f=Math.hypot(u,h);if(!(f>20))return e;const d=u/f,p=h/f,_=-p,g=d,m=t(r,a)+4.5,M=t(l,c)+3,v=S=>m+(M-m)*S,x=S=>[r+u*S,a+h*S],w=[],T=Math.max(6,Math.round(f/13));for(let S=0;S<=T;S++){const R=S/T,[D,F]=x(R),O=v(R),z=t(D,F),H=O-z;if(H<1)continue;for(const G of[-1,1]){const et=new _e(.9,H,.9);et.translate(D+_*G*i.gauge*.5,z+H*.5,F+g*G*i.gauge*.5),w.push(et)}const J=new _e(i.gauge+1.6,.8,1);J.rotateY(-Math.atan2(g,_)),J.translate(D,O-.9,F),w.push(J)}fl(e,w,n);const b=[],A=Math.atan2(M-m,f);for(const S of[-1,1]){const R=new _e(.34,.34,f);R.rotateX(-A),R.rotateY(Math.atan2(d,p)),R.translate((r+l)*.5+_*S*i.gauge*.42,(m+M)*.5,(a+c)*.5+g*S*i.gauge*.42),b.push(R)}fl(e,b,s);const y=[];for(let S=0;S<i.cars;S++){const R=S===0?.28:.72,[D,F]=x(R),O=v(R),z=new _e(i.gauge*.86,5.4,8.4);z.rotateX(-A),z.rotateY(Math.atan2(d,p)),z.translate(D,O+2.4,F),y.push(z)}return fl(e,y,o),e}const df=[180,70];function yy(i,t){return Math.atan2(df[1]-t,df[0]-i)}const Jc={"pnc-park":i=>my({h:i.h,f:i.f,orientYaw:i.field?.open}),"acrisure-stadium":i=>xy({h:i.h,f:i.f,orientYaw:i.field?.open}),"ppg-arena":(i,t)=>vy({h:i.h,f:i.f,orientYaw:yy(t.cx,t.cz)})},Sy=new Set(["pnc-park","acrisure-stadium","ppg-arena"]);function pf(i){const t=pc(i.f);return(i.h||0)+t.w*t.d*.002}function wy(i){const t=new Map;for(const e of i){if(!e.f||!Jc[e.landmarkMesh])continue;const n=t.get(e.landmarkMesh);(!n||pf(e)>pf(n))&&t.set(e.landmarkMesh,e)}return[...t.values()]}function by(i,t,e=null,n=null,s=null){const o=new Ie;o.name="landmarks";const r=s||e,a=(l,c,u)=>{const[h,f]=Sn(l.f),d=e?nc(l.f,t,e):t(h,f),p=pc(l.f),[_,g]=u&&l.field?.c?l.field.c:[p.cx,p.cz];c.position.set(_,d,g),u||(c.rotation.y=-p.yaw),o.add(c)};for(const l of wy(i))if(!(r&&zr(l.f,r)>.35))try{a(l,Jc[l.landmarkMesh](l,pc(l.f)),Sy.has(l.landmarkMesh))}catch(c){console.warn("Landmark mesh failed:",l.n,c)}o.add($M(t,n));for(const l of $c)o.add(My(l,t));return o}function Ey(i){return!!(i.landmarkMesh&&Jc[i.landmarkMesh])}function Ty(){const i=new en(.12,.16,7.5,6);i.translate(0,3.75,0);const t=new _e(2.2,.12,.12);t.translate(1.1,7.5,0);const e=new _e(.8,.25,.5);return e.translate(2.2,7.35,0),sn([i,t,e],!1)}const Ay=Ty(),Ry=new Le({color:3815994,roughness:.65,metalness:.35});function Cy(i,t,e,{dayMode:n=!0}={}){const s=new Ie;s.name="street-lights";const o=[],r=85;for(const d of i){const p=d.r??1;if(!(p<4))for(let _=0;_<d.c.length-1;_++){const g=d.c[_],m=d.c[_+1],M=m[0]-g[0],v=m[1]-g[1],x=Math.hypot(M,v);if(x<r)continue;const w=Math.floor(x/r),T=M/x,A=-(v/x),y=T;for(let S=1;S<w;S++){const R=S*r/x,D=g[0]+M*R,F=g[1]+v*R;if(e.inside(D,F))continue;const O=S%2===0?1:-1,z=D+A*O*(p>=5?9:7),H=F+y*O*(p>=5?9:7),J=t(z,H)+1.2;J<0||o.push(z,J,H,oe(z,H)*Math.PI*2)}}}if(!o.length)return s;const a=o.length/4,l=new Ao(Ay,Ry,a),c=new Te;for(let d=0;d<a;d++)c.position.set(o[d*4],o[d*4+1],o[d*4+2]),c.rotation.y=o[d*4+3],c.updateMatrix(),l.setMatrixAt(d,c.matrix);l.instanceMatrix.needsUpdate=!0,l.castShadow=!0,s.add(l);const u=new ca(.22,6,4),h=new Le({color:n?8947840:16771264,emissive:n?0:16763e3,emissiveIntensity:n?0:2.5,roughness:.3,metalness:0}),f=new Ao(u,h,a);for(let d=0;d<a;d++)c.position.set(o[d*4]+2.2,o[d*4+1]+3.6,o[d*4+2]),c.rotation.set(0,o[d*4+3],0),c.updateMatrix(),f.setMatrixAt(d,c.matrix);return f.instanceMatrix.needsUpdate=!0,s.add(f),s}function Py(i,t){const e=new Ie;e.name="rooftop-details";const n=[],s=[];for(const a of i){if(a.landmarkMesh||!a.f||a.f.length<4)continue;const l=a.h||10;if(l<60)continue;const c=a.roof||(l>120?"antenna":null);if(!c)continue;let u=0,h=0;const f=a.f.length-1;for(let p=0;p<f;p++)u+=a.f[p][0],h+=a.f[p][1];u/=f,h/=f;const d=t(u,h)+l;if(c==="antenna"){const p=new en(.16,.3,l*.075,5);p.translate(u,d+l*.0375,h),n.push(p);const _=new en(1,1,.25,8);_.translate(u,d+l*.045,h),n.push(_)}else if(c==="spire"){const p=new Fo(1.4,l*.055,4);p.translate(u,d+l*.0275,h),s.push(p)}}const o=new Le({color:2895151,roughness:.72,metalness:.2}),r=new Le({color:4868678,roughness:.7,metalness:.15});if(n.length){const a=sn(n,!1);if(a){const l=new te(a,o);l.castShadow=!0,e.add(l);for(const c of n)c.dispose()}}if(s.length){const a=sn(s,!1);if(a){const l=new te(a,r);l.castShadow=!0,e.add(l);for(const c of s)c.dispose()}}return e}function Ly({day:i=!0,sunDir:t=null}={}){const e=new ca(4e3,32,24),n=new tn({side:dn,depthTest:!0,depthWrite:!1,fog:!1,uniforms:{uSunDir:{value:(t?t.clone():new U(.55,.42,.22)).normalize()},uHorizon:{value:new Bt(i?12113136:1714232)},uZenith:{value:new Bt(i?4886745:329744)},uGlow:{value:new Bt(i?16774360:2767434)},uCityGlow:{value:new Bt(i?15266040:3811864)},uDay:{value:i?1:0}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uSunDir;
      uniform vec3 uHorizon;
      uniform vec3 uZenith;
      uniform vec3 uGlow;
      uniform vec3 uCityGlow;
      uniform float uDay;
      varying vec3 vDir;
      void main() {
        vec3 dir = normalize(vDir);
        float h = dir.y * 0.5 + 0.5;
        vec3 col = mix(uHorizon, uZenith, pow(h, mix(0.65, 0.85, uDay)));
        float sun = pow(max(dot(dir, uSunDir), 0.0), mix(64.0, 128.0, uDay));
        col += uGlow * sun * mix(0.35, 0.65, uDay);
        float city = smoothstep(0.0, 0.22, 0.22 - dir.y) * smoothstep(0.0, 0.5, dir.y + 0.08);
        col += uCityGlow * city * mix(0.18, 0.06, uDay);
        float stars = step(0.997, fract(sin(dot(floor(dir.xz * 800.0), vec2(12.9898, 78.233))) * 43758.5453));
        col += vec3(0.85, 0.9, 1.0) * stars * smoothstep(0.35, 0.85, h) * (1.0 - uDay);
        gl_FragColor = vec4(col, 1.0);
      }
    `}),s=new te(e,n);return s.frustumCulled=!1,s.fog=!1,s.renderOrder=-1e3,s.onBeforeRender=(o,r,a)=>{s.position.copy(a.position)},s}function Dy(i,{day:t=!0}={}){const e=document.createElement("canvas");e.width=512,e.height=256;const n=e.getContext("2d");if(t){const o=n.createLinearGradient(0,0,0,256);o.addColorStop(0,"#6ab0e8"),o.addColorStop(.35,"#a8d4f8"),o.addColorStop(.52,"#e8f0f8"),o.addColorStop(.58,"#d8e8f4"),o.addColorStop(1,"#8ab8e0"),n.fillStyle=o,n.fillRect(0,0,512,256),n.fillStyle="rgba(255,240,200,0.55)",n.beginPath(),n.arc(400,72,36,0,Math.PI*2),n.fill()}else{const o=n.createLinearGradient(0,0,0,256);o.addColorStop(0,"#060810"),o.addColorStop(.35,"#0c1420"),o.addColorStop(.48,"#1a2838"),o.addColorStop(.52,"#2a2218"),o.addColorStop(.58,"#141a22"),o.addColorStop(1,"#080a10"),n.fillStyle=o,n.fillRect(0,0,512,256);for(let r=0;r<120;r++){const a=80+Math.random()*360,l=118+Math.random()*18,c=4+Math.random()*28;n.fillStyle=`rgba(255,200,140,${.04+Math.random()*.1})`,n.fillRect(a,l,c,1+Math.random()*2)}for(let r=0;r<60;r++)n.fillStyle=`rgba(255,255,255,${.15+Math.random()*.5})`,n.fillRect(Math.random()*512,Math.random()*90,1,1)}const s=new rs(e);return s.mapping=wo,s.colorSpace=Be,s.needsUpdate=!0,s}const Tr=9e3,Ar=7e3,rn={x:420,y:280,z:420};function Iy(){const i=document.createElement("canvas");i.width=16,i.height=64;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,64);e.addColorStop(0,"rgba(236, 244, 255, 0)"),e.addColorStop(.2,"rgba(236, 244, 255, 0.85)"),e.addColorStop(1,"rgba(236, 244, 255, 0)"),t.fillStyle=e,t.fillRect(5,0,6,64);const n=new rs(i);return n.needsUpdate=!0,n}function Uy(){const i=document.createElement("canvas");i.width=32,i.height=32;const t=i.getContext("2d"),e=t.createRadialGradient(16,16,1,16,16,14);e.addColorStop(0,"rgba(255, 255, 255, 0.95)"),e.addColorStop(.45,"rgba(240, 246, 255, 0.55)"),e.addColorStop(1,"rgba(240, 246, 255, 0)"),t.fillStyle=e,t.fillRect(0,0,32,32);const n=new rs(i);return n.needsUpdate=!0,n}function mf(i,t,e,n,s){for(let o=0;o<i;o++)n[o*3]=(Math.random()-.5)*t.x,n[o*3+1]=(Math.random()-.5)*t.y,n[o*3+2]=(Math.random()-.5)*t.z,s[o]=e.min+Math.random()*(e.max-e.min)}function Ny(){const i=new Ie;i.name="weather",i.frustumCulled=!1;const t=new Float32Array(Tr*3),e=new Float32Array(Tr);mf(Tr,rn,{min:38,max:72},t,e);const n=new re;n.setAttribute("position",new ue(t,3).setUsage(gu)),n.setDrawRange(0,0);const s=new gh(n,new Jl({map:Iy(),color:15660283,size:24,sizeAttenuation:!1,transparent:!0,opacity:.58,depthWrite:!1,fog:!1,toneMapped:!1,blending:So}));s.frustumCulled=!1,s.renderOrder=20,s.visible=!1,i.add(s);const o=new Float32Array(Ar*3),r=new Float32Array(Ar);mf(Ar,rn,{min:7,max:16},o,r);const a=new re;a.setAttribute("position",new ue(o,3).setUsage(gu)),a.setDrawRange(0,0);const l=new gh(a,new Jl({map:Uy(),color:16251389,size:7.5,sizeAttenuation:!0,transparent:!0,opacity:.92,depthWrite:!1,fog:!1,toneMapped:!1}));l.frustumCulled=!1,l.renderOrder=20,l.visible=!1,i.add(l);let c="sunny",u=1,h=0,f=0;function d(){h=c==="rain"?Math.max(0,Math.floor(Tr*u)):0,f=c==="snow"?Math.max(0,Math.floor(Ar*u)):0,n.setDrawRange(0,h),a.setDrawRange(0,f),s.visible=h>0,l.visible=f>0}return{root:i,setWeather(p){c=p,d()},setParticleScale(p){u=p,d()},update(p,_,g){if(c==="sunny")return;i.position.copy(_.position);const m=rn.x*.5,M=rn.z*.5;if(c==="rain"){for(let v=0;v<h;v++){const x=v*3;t[x+1]-=e[v]*p,t[x]-=12*p,t[x+1]<-140&&(t[x+1]+=rn.y,t[x]=(Math.random()-.5)*rn.x,t[x+2]=(Math.random()-.5)*rn.z),t[x]<-m&&(t[x]+=rn.x)}n.attributes.position.needsUpdate=!0}else if(c==="snow"){const v=g*.001;for(let x=0;x<f;x++){const w=x*3;o[w+1]-=r[x]*p,o[w]+=Math.sin(v*.7+x*.37)*6.5*p,o[w+2]+=Math.cos(v*.55+x*.21)*4.5*p,o[w+1]<-140&&(o[w+1]+=rn.y,o[w]=(Math.random()-.5)*rn.x,o[w+2]=(Math.random()-.5)*rn.z),o[w]>m&&(o[w]-=rn.x),o[w]<-m&&(o[w]+=rn.x),o[w+2]>M&&(o[w+2]-=rn.z),o[w+2]<-M&&(o[w+2]+=rn.z)}a.attributes.position.needsUpdate=!0}}}}const gf={sunny:{horizon:12113136,zenith:4886745,glow:16774360,city:15266040,fog:10337496,fogDensity:9e-5,clear:9357552,sun:2.9,sunColor:16774888,hemi:.4,fill:.16,exposure:1,env:.42,flow:1,precip:0},rain:{horizon:9085108,zenith:4873328,glow:6978184,city:7240840,fog:8030872,fogDensity:16e-5,clear:7242388,sun:.55,sunColor:13160664,hemi:.52,fill:.22,exposure:.92,env:.22,flow:1.35,precip:1},snow:{horizon:14213868,zenith:11057352,glow:15265524,city:13687008,fog:13161180,fogDensity:14e-5,clear:12964058,sun:1.15,sunColor:15265526,hemi:.58,fill:.2,exposure:1.04,env:.28,flow:.72,precip:2}};function Fy(i,t){const e=gf[i]||gf.sunny,{sky:n,scene:s,sun:o,hemi:r,fill:a,renderer:l,waterUniforms:c}=t;n.material.uniforms.uHorizon.value.setHex(e.horizon),n.material.uniforms.uZenith.value.setHex(e.zenith),n.material.uniforms.uGlow.value.setHex(e.glow),n.material.uniforms.uCityGlow.value.setHex(e.city),s.fog.color.setHex(e.fog),s.fog.density=e.fogDensity,s.background.setHex(e.clear),l.setClearColor(e.clear,1),o.intensity=e.sun,o.color.setHex(e.sunColor),r.intensity=e.hemi,a.intensity=e.fill,l.toneMappingExposure=e.exposure,s.environmentIntensity=e.env,c.uFlow.value=e.flow,c.uPrecip.value=e.precip}const Ii={low:{shadows:!1,shadowSize:512,shadowSoft:!1,bloom:!1,particles:.28},medium:{shadows:!0,shadowSize:1024,shadowSoft:!1,bloom:!1,particles:.55},high:{shadows:!0,shadowSize:2048,shadowSoft:!0,bloom:!0,particles:1},ultra:{shadows:!0,shadowSize:2048,shadowSoft:!0,bloom:!0,particles:1.35}},Oy=[50,75,100,150,200],kd="pgh-quality",Hd="pgh-resolution",Gd="pgh-weather";function zy(){return"medium"}function By(i){return i?50:100}function ky(i){const t=(localStorage.getItem(kd)||"").toLowerCase(),e=Ii[t]?t:zy(),n=Number(localStorage.getItem(Hd)),s=Oy.includes(n)?n:By(i),o=(localStorage.getItem(Gd)||"").toLowerCase();return{quality:e,resolution:s,weather:o==="rain"||o==="snow"?o:"sunny"}}function Qc({quality:i,resolution:t,weather:e}){i&&localStorage.setItem(kd,i),t&&localStorage.setItem(Hd,String(t)),e&&localStorage.setItem(Gd,e)}function Hy(i){const t=Math.min(window.devicePixelRatio||1,2);return Math.max(.5,t*(i/100))}const Vd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ks{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Gy=new Cc(-1,1,1,-1,0,1);class Vy extends re{constructor(){super(),this.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yt([0,2,0,0,2,0],2))}}const Wy=new Vy;class tu{constructor(t){this._mesh=new te(Wy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Gy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Xy extends Ks{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof tn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Eo.clone(t.uniforms),this.material=new tn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new tu(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class _f extends Ks{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class Yy extends Ks{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class qy{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Mt);this._width=n.width,this._height=n.height,e=new Wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Xy(Vd),this.copyPass.material.blending=di,this.clock=new Gx}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}_f!==void 0&&(r instanceof _f?n=!0:r instanceof Yy&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Mt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Zy extends Ks{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Bt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const jy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Bt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ys extends Ks{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Mt(t.x,t.y):new Mt(256,256),this.clearColor=new Bt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Wn(o,r,{type:pi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Wn(o,r,{type:pi});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Wn(o,r,{type:pi});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),o=Math.round(o/2),r=Math.round(r/2)}const a=jy;this.highPassUniforms=Eo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new tn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Mt(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Vd;this.copyUniforms=Eo.clone(u.uniforms),this.blendMaterial=new tn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:So,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Bt,this.oldClearAlpha=1,this.basic=new Uo,this.fsQuad=new tu(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new Mt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ys.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ys.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new tn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Mt(.5,.5)},direction:{value:new Mt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new tn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ys.BlurDirectionX=new Mt(1,0);Ys.BlurDirectionY=new Mt(0,1);const Ky={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class $y extends Ks{constructor(){super();const t=Ky;this.uniforms=Eo.clone(t.uniforms),this.material=new Ox({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new tu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ie.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Cf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Pf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Lf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Mc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Df?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===If&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Wd=document.getElementById("c"),Jy=document.getElementById("layers"),xf=document.getElementById("loader"),ta=document.getElementById("nav"),Xd=document.getElementById("weather"),ea=document.getElementById("settings-toggle"),yo=document.getElementById("settings"),Ji=!0,Yd=9357552;function Qy(){const i=navigator.userAgent||"",t=/iP(hone|ad|od)/.test(i)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,e=/Android/i.test(i),n=window.matchMedia("(pointer: coarse)").matches,s=Math.min(window.innerWidth,window.innerHeight)<820;return t||e||n&&s}const eu=Qy();let Ye=ky(eu),Ts=2;function qd(){return Math.min(Hy(Ye.resolution),Ts)}const le=new ix;le.background=new Bt(Yd);le.fog=new Lc(10337496,9e-5);const Ze=new Rn(45,1,2,25e3);Ze.position.set(900,650,1100);const ge=new nx({canvas:Wd,antialias:!eu,alpha:!1,stencil:!1,powerPreference:"high-performance",logarithmicDepthBuffer:!1});ge.setClearColor(Yd,1);ge.setPixelRatio(qd());ge.outputColorSpace=Be;ge.toneMapping=Mc;ge.toneMappingExposure=1;ge.shadowMap.enabled=Ii[Ye.quality].shadows;ge.shadowMap.type=Ii[Ye.quality].shadowSoft?vc:na;const Ni=new ov;Ni.domElement.className="label-layer";Ni.domElement.style.position="absolute";Ni.domElement.style.inset="0";Ni.domElement.style.pointerEvents="none";Ni.domElement.style.zIndex="1";document.getElementById("app").appendChild(Ni.domElement);const Fe=new Xx(Ze,Wd);Fe.enableDamping=!0;Fe.dampingFactor=.06;Fe.minDistance=80;Fe.maxDistance=6e3;Fe.maxPolarAngle=Math.PI*.49;Fe.target.set(0,40,0);const Zd=new zx(13624055,6975570,.4);le.add(Zd);const jd=new U(.55,.72,.42).normalize(),ma=1500,ke=new xd(16774888,2.9);ke.castShadow=Ii[Ye.quality].shadows;ke.shadow.mapSize.set(Ii[Ye.quality].shadowSize,Ii[Ye.quality].shadowSize);ke.shadow.camera.near=20;ke.shadow.camera.far=6500;ke.shadow.camera.left=-ma;ke.shadow.camera.right=ma;ke.shadow.camera.top=ma;ke.shadow.camera.bottom=-ma;ke.shadow.bias=-4e-4;ke.shadow.normalBias=.6;le.add(ke);le.add(ke.target);function Kd(i){ke.target.position.copy(i),ke.position.copy(i).addScaledVector(jd,2600)}Kd(new U(0,0,0));const nu=new xd(12374762,.16);nu.position.set(-1140,180,-700);le.add(nu);const Qe=Iv({dayMode:Ji});Qe.envMap=Dy(ge,{day:Ji});le.environment=Qe.envMap;le.environmentIntensity=.42;const $d=Ly({day:Ji,sunDir:jd});le.add($d);const ga=Ny();le.add(ga.root);let hn;function Jd(){if(eu)return!1;const i=Ye.quality;return i==="low"||i==="medium"?!1:Ii[i].bloom}function Qd(){hn&&(hn.dispose(),hn=null)}function t2(){if(Qd(),!Jd())return;hn=new qy(ge),hn.addPass(new Zy(le,Ze));const i=new Ys(new Mt(vn,Mn),.12,.35,.92);hn.addPass(i),hn.addPass(new $y),hn.setPixelRatio(ge.getPixelRatio()),hn.setSize(vn,Mn)}function _a(){for(const i of document.querySelectorAll("#quality-seg [data-quality]"))i.classList.toggle("active",i.dataset.quality===Ye.quality);for(const i of document.querySelectorAll("#resolution-seg [data-resolution]"))i.classList.toggle("active",Number(i.dataset.resolution)===Ye.resolution);for(const i of Xd.querySelectorAll("[data-weather]"))i.classList.toggle("active",i.dataset.weather===Ye.weather)}function tp(){const i=Ii[Ye.quality];ge.shadowMap.enabled=i.shadows,ge.shadowMap.type=i.shadowSoft?vc:na,ke.castShadow=i.shadows,ke.shadow.map&&ke.shadow.mapSize.x!==i.shadowSize&&(ke.shadow.map.dispose(),ke.shadow.map=null),ke.shadow.mapSize.set(i.shadowSize,i.shadowSize),ga.setParticleScale(i.particles),Jd()?hn||t2():Qd(),xi(),_a()}function ep(i){Ye.weather=i,Qc(Ye),ga.setWeather(i),Fy(i,{sky:$d,scene:le,sun:ke,hemi:Zd,fill:nu,renderer:ge,waterUniforms:Qe.waterUniforms}),_a()}ea.addEventListener("click",i=>{i.stopPropagation();const t=yo.hasAttribute("hidden");yo.toggleAttribute("hidden",!t),ea.setAttribute("aria-expanded",String(t))});document.addEventListener("click",i=>{yo.hasAttribute("hidden")||yo.contains(i.target)||ea.contains(i.target)||(yo.setAttribute("hidden",""),ea.setAttribute("aria-expanded","false"))});document.getElementById("quality-seg").addEventListener("click",i=>{const t=i.target.closest("[data-quality]");t&&(Ye.quality=t.dataset.quality,Qc(Ye),tp())});document.getElementById("resolution-seg").addEventListener("click",i=>{const t=i.target.closest("[data-resolution]");t&&(Ye.resolution=Number(t.dataset.resolution),Qc(Ye),xi(),_a())});Xd.addEventListener("click",i=>{const t=i.target.closest("[data-weather]");t&&ep(t.dataset.weather)});_a();const vf={0:new po({color:3028032,transparent:!0,opacity:.55}),1:new po({color:4870752,transparent:!0,opacity:.7}),2:new po({color:6976388,transparent:!0,opacity:.8})},ns=new kx(16777215,0,2200,Math.PI/5,.72,1.15);ns.position.set(0,700,0);ns.target.position.set(0,0,0);ns.castShadow=!1;le.add(ns);le.add(ns.target);const Io=new te(new Uc(420,64),new Uo({color:16777215,transparent:!0,opacity:.04,depthWrite:!1}));Io.rotation.x=-Math.PI/2;Io.position.y=.6;le.add(Io);function Mf(i,t){i.moveTo(t[0][0],-t[0][1]);for(let e=1;e<t.length-1;e++)i.lineTo(t[e][0],-t[e][1]);i.closePath()}function e2(i,t=null){const e=new aa;Mf(e,i);for(const n of t||[]){if(!n||n.length<4)continue;const s=new $r;Mf(s,n),e.holes.push(s)}return e}function mc(i,t,e,n=null){const s=e2(i,n),o=new zo(s);o.rotateX(-Math.PI/2);let r=t;if(e){const[a,l]=Sn(i);r=e(a,l)+t}return o.translate(0,r,0),o}const yf={day:{bed:[.2,.3,.34],bank:[.68,.56,.4],paved:[.4,.42,.46],forest:[.2,.34,.18],grass:[.36,.56,.28]},night:{bed:[.035,.055,.07],bank:[.14,.11,.07],paved:[.098,.103,.118],forest:[.055,.088,.048],grass:[.085,.115,.062]}},n2={cell:80,minX:-6e3,minZ:-5600,w:220,h:160};function i2(i){const{cell:t,minX:e,minZ:n,w:s,h:o}=n2,r=new Float32Array(s*o);for(const l of i){if(!l.f||l.f.length<4)continue;const[c,u]=Sn(l.f);let h=0;for(let p=0;p<l.f.length-1;p++)h+=l.f[p][0]*l.f[p+1][1]-l.f[p+1][0]*l.f[p][1];const f=Math.floor((c-e)/t),d=Math.floor((u-n)/t);f<0||d<0||f>=s||d>=o||(r[d*s+f]+=Math.abs(h)*.5)}const a=new Float32Array(s*o);for(let l=0;l<o;l++)for(let c=0;c<s;c++){let u=0,h=0;for(let f=-1;f<=1;f++)for(let d=-1;d<=1;d++){const p=c+d,_=l+f;p<0||_<0||p>=s||_>=o||(u+=r[_*s+p],h++)}a[l*s+c]=u/(h*t*t)}return(l,c)=>{const u=Math.floor((l-e)/t),h=Math.floor((c-n)/t);return u<0||h<0||u>=s||h>=o?0:a[h*s+u]}}function gc(i,t,e){const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)}const s2={cell:24,minX:-6300,minZ:-6e3,w:640,h:480};function o2(i){const{cell:t,minX:e,minZ:n,w:s,h:o}=s2,r=new Uint8Array(s*o),a=[];for(const l of i){if(l.c!==2||!l.f||l.f.length<4)continue;const c=l.f;let u=1/0,h=-1/0;for(const[,p]of c)p<u&&(u=p),p>h&&(h=p);const f=Math.max(0,Math.floor((u-n)/t)),d=Math.min(o-1,Math.ceil((h-n)/t));for(let p=f;p<=d;p++){const _=n+(p+.5)*t;a.length=0;for(let g=0;g<c.length-1;g++){const[m,M]=c[g],[v,x]=c[g+1];M!==x&&(_<Math.min(M,x)||_>=Math.max(M,x)||a.push(m+(_-M)/(x-M)*(v-m)))}if(!(a.length<2)){a.sort((g,m)=>g-m);for(let g=0;g+1<a.length;g+=2){const m=Math.max(0,Math.ceil((a[g]-e)/t-.5)),M=Math.min(s-1,Math.floor((a[g+1]-e)/t-.5));for(let v=m;v<=M;v++)r[p*s+v]=1}}}}return(l,c)=>{const u=Math.floor((l-e)/t),h=Math.floor((c-n)/t);return u<0||h<0||u>=s||h>=o?0:r[h*s+u]}}function np(i,t){const e=i.attributes.position,n=new Float32Array(e.count*3),s=new Bt;for(let o=0;o<e.count;o++){const r=e.getX(o),a=e.getZ(o),l=oe(Math.floor(r/34),Math.floor(a/34))-.5,c=oe(Math.floor(r/9)*1.7,Math.floor(a/9)*1.3)-.5,u=1+l*.3+c*.14;s.setRGB(Math.min(1,t[0]*u*(1+l*.1)),Math.min(1,t[1]*u),Math.min(1,t[2]*u*(1-l*.14))),n[o*3]=s.r,n[o*3+1]=s.g,n[o*3+2]=s.b}return i.setAttribute("color",new ue(n,3)),i}function r2(i,t,e,n,s,o,r,a=!0){const l=a?yf.day:yf.night;if(s.inside(i,e))return l.bed;const c=s.bankStrength(i,e);if(c>.15)return[l.bank[0]+c*.04,l.bank[1],l.bank[2]];const{paved:u,forest:h,grass:f}=l,d=Math.min(1,Math.max(0,(t-60)/110)),p=[f[0]*(1-d)+h[0]*d,f[1]*(1-d)+h[1]*d,f[2]*(1-d)+h[2]*d],_=r(i,e)?1:Math.max(gc(.13,.34,n),1-gc(.012,.09,o(i,e)));return[u[0]*(1-_)+p[0]*_,u[1]*(1-_)+p[1]*_,u[2]*(1-_)+p[2]*_]}const Es={w:15e3,d:11200,cx:1200,cz:-400,segX:500,segZ:374};function a2(i,t,e,n){const s=new No(Es.w,Es.d,Es.segX,Es.segZ);s.rotateX(-Math.PI/2),s.translate(Es.cx,0,Es.cz);const o=s.attributes.position,r=new Float32Array(o.count*3);for(let l=0;l<o.count;l++){const c=o.getX(l),u=o.getZ(l),h=yd(c,u,i,t);o.setY(l,h);const f=Math.hypot(i(c+40,u)-i(c-40,u),i(c,u+40)-i(c,u-40))/80,d=r2(c,h,u,f,t,e,n,Ji);r[l*3]=d[0],r[l*3+1]=d[1],r[l*3+2]=d[2]}o.needsUpdate=!0,s.setAttribute("color",new ue(r,3)),s.computeVertexNormals();const a=new te(s,Qe.groundMat);return a.receiveShadow=!0,a}const ip=[];function Vr(i,t,e=2){const n=document.createElement("div");n.className="label",n.textContent=i,n.style.cssText=`
    color: rgba(242,244,248,0.85);
    font-family: "DM Sans", system-ui, sans-serif;
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    white-space: nowrap;
    /*
     * A tight opaque ring, then a soft one. A single wide glow is what map
     * labels usually get and it works over sky, but 12 px of 15%-transparent
     * black spread around 10 px type is nearly invisible against a sunlit
     * limestone facade, which is most of what these sit on. The 1 px ring is
     * what actually separates the glyphs from the building; the wide glow just
     * darkens the surround.
     */
    text-shadow:
      0 1px 0 rgba(4,7,12,0.95), 1px 0 0 rgba(4,7,12,0.95),
      0 -1px 0 rgba(4,7,12,0.95), -1px 0 0 rgba(4,7,12,0.95),
      0 0 10px rgba(4,7,12,0.9);
    user-select: none;
    pointer-events: none;
    transition: opacity 160ms linear;
  `;const s=new sv(n);s.position.copy(t),le.add(s);const o=new po({color:16777215,transparent:!0,opacity:.25}),r=new re().setFromPoints([new U(t.x,Math.max(0,t.y-t.y*.55),t.z),t.clone()]),a=new ld(r,o);return le.add(a),ip.push({el:n,obj:s,line:a,stemMat:o,rank:e,width:0,anchor:t.clone()}),s}const l2=2600,Sf=4200,c2=10,wf=7,ai=new U,Wr=[],u2=[".hud-tl",".hud-tr","#nav","#weather"];function h2(){for(const i of u2){const t=document.querySelector(i);if(!t)continue;const e=t.getBoundingClientRect();!e.width||!e.height||Wr.push([e.left-4,e.right+4,e.top-4,e.bottom+4])}}function f2(i,t){Wr.length=0,h2();const e=[];for(const n of ip){const s=Ze.position.distanceTo(n.anchor);ai.copy(n.anchor).project(Ze);const o=ai.z>1||ai.z<-1,r=ai.x<-1.08||ai.x>1.08||ai.y<-1.08||ai.y>1.08;if(o||r||s>Sf){n.el.style.opacity="0",n.line.visible=!1;continue}n.width||(n.width=n.el.offsetWidth||0),e.push({lab:n,dist:s,x:(ai.x*.5+.5)*i,y:(-ai.y*.5+.5)*t})}e.sort((n,s)=>n.lab.rank-s.lab.rank||n.dist-s.dist);for(const n of e){const s=(n.lab.width||90)*.5+c2,o=n.x-s,r=n.x+s,a=n.y-6-wf,l=n.y+6+wf;let c=!0;for(const h of Wr)if(r>h[0]&&o<h[1]&&l>h[2]&&a<h[3]){c=!1;break}if(!c){n.lab.el.style.opacity="0",n.lab.line.visible=!1;continue}Wr.push([o,r,a,l]);const u=1-gc(l2,Sf,n.dist);n.lab.el.style.opacity=String(.9*u),n.lab.line.visible=u>.15,n.lab.stemMat.opacity=.25*u}}function d2(i,t,e){if(!i||i.length<3)return null;const n=i.length,o=Math.hypot(i[0][0]-i[n-1][0],i[0][1]-i[n-1][1])<.05?n-1:n,r=[],a=[],l=t*.5;for(let u=0;u<o;u++){const h=i[u],f=i[(u+1)%n],d=f[0]-h[0],p=f[1]-h[1],_=Math.hypot(d,p);if(_<.01)continue;const g=-p/_,m=d/_,M=[h[0]-g*l,h[1]-m*l],v=[h[0]+g*l,h[1]+m*l],x=[f[0]-g*l,f[1]-m*l],w=[f[0]+g*l,f[1]+m*l];r.push(M[0],e,M[1],v[0],e,v[1],w[0],e,w[1]),r.push(M[0],e,M[1],w[0],e,w[1],x[0],e,x[1]);for(let T=0;T<6;T++)a.push(0,1,0)}if(!r.length)return null;const c=new re;return c.setAttribute("position",new Yt(r,3)),c.setAttribute("normal",new Yt(a,3)),c}function p2(i,t){const e=[];for(const o of i){if(!o.f||o.f.length<4)continue;let r=0,a=0;const l=o.f.length-1;for(let u=0;u<l;u++)r+=o.f[u][0],a+=o.f[u][1];r/=l,a/=l;const c=Math.max(.35,t(r,a)+.55);for(const u of[o.f,...o.holes||[]]){const h=d2(u,7,c);h&&e.push(h)}}if(!e.length)return null;const n=sn(e,!1);for(const o of e)o.dispose();if(!n)return null;const s=new te(n,Qe.foamMat);return s.receiveShadow=!0,s}function m2(i,t,e){const n={3:7.5,4:10.5,5:14},s={3:[.42,.44,.48],4:[.52,.54,.58],5:[.62,.64,.68]},o={3:{pos:[],col:[]},4:{pos:[],col:[]},5:{pos:[],col:[]}};for(const a of i){const l=a.r??1;if(l<3||!o[l])continue;const c=n[l]*.5,u=s[l],h=o[l];for(let f=0;f<a.c.length-1;f++){const d=a.c[f],p=a.c[f+1],_=(d[0]+p[0])*.5,g=(d[1]+p[1])*.5;if(e.inside(_,g))continue;const m=p[0]-d[0],M=p[1]-d[1],v=Math.hypot(m,M);if(v<1)continue;const x=-M/v*c,w=m/v*c,T=t(d[0],d[1])+1.15,b=t(p[0],p[1])+1.15,A=[d[0]+x,T,d[1]+w],y=[d[0]-x,T,d[1]-w],S=[p[0]+x,b,p[1]+w],R=[p[0]-x,b,p[1]-w];h.pos.push(...A,...y,...R,...A,...R,...S);for(let D=0;D<6;D++)h.col.push(...u)}}const r=new Ie;for(const a of[3,4,5]){const{pos:l,col:c}=o[a];if(l.length<9)continue;const u=new re;u.setAttribute("position",new Yt(l,3)),u.setAttribute("color",new Yt(c,3)),Jr(u,.08),u.computeVertexNormals();const h=new te(u,Qe.roadMat);h.receiveShadow=!0,r.add(h)}return r}function g2(i){const r=new Uint8Array(322e3);for(const a of i)if(!(!a.f||a.f.length<4))for(let l=0;l<460;l++){const c=-5e3+(l+.5)*20,u=[],h=a.f.length-1;for(let f=0;f<h;f++){const d=a.f[f],p=a.f[f+1];d[1]>c!=p[1]>c&&u.push(d[0]+(c-d[1])*(p[0]-d[0])/(p[1]-d[1]||1e-9))}if(!(u.length<2)){u.sort((f,d)=>f-d);for(let f=0;f+1<u.length;f+=2){const d=Math.max(0,Math.floor((u[f]- -5600)/20)),p=Math.min(699,Math.ceil((u[f+1]- -5600)/20));for(let _=d;_<=p;_++)r[l*700+_]=1}}}return(a,l)=>{const c=Math.floor((a- -5600)/20),u=Math.floor((l- -5e3)/20);return c>=0&&u>=0&&c<700&&u<460&&r[u*700+c]===1}}function _2(i,t,e,n,s,o=null){const r=new Te,a=g2(i),l=[];for(let p=-5200;p<=7600;p+=17)for(let _=-4600;_<=3600;_+=17){const g=p+(oe(p,_)-.5)*14,m=_+(oe(_,p)-.5)*14;if(e.inside(g,m)||e.nearBank(g,m)||o&&Md(g,m,o))continue;const M=Math.hypot(t(g+40,m)-t(g-40,m),t(g,m+40)-t(g,m-40))/80,v=a(g,m),x=s(g,m)===1,w=M>.16;if(!v&&!x&&!w)continue;const T=x?.88:v?.3:Math.min(.66,(M-.16)*3.2);oe(m*1.7,g*1.3)>T||l.push(g,n(g,m),m,.7+oe(g,m)*.75)}if(!l.length)return null;const c=l.length/4,u=[],h=[];for(let p=0;p<c;p++){const _=l[p*4],g=l[p*4+2];(oe(_*.31,g*.29)<.24?h:u).push(p)}const f=new Ie,d=[{idx:u,geom:new Oo(4.6,0),lift:5.4,squash:.86},{idx:h,geom:new Fo(3.4,13,6),lift:6.4,squash:1}];for(const p of d){if(!p.idx.length)continue;const _=new Ao(p.geom,Qe.treeMat,p.idx.length);_.instanceMatrix.setUsage(Kl);const g=new Float32Array(p.idx.length*3),m=new Bt;for(let M=0;M<p.idx.length;M++){const v=p.idx[M],x=l[v*4],w=l[v*4+1],T=l[v*4+2],b=l[v*4+3],A=.78+oe(T*.7,x*.9)*.5;r.position.set(x,w+p.lift*b*p.squash,T),r.scale.set(b*A,b*p.squash*(1.9-A),b*A),r.rotation.y=oe(x,T)*Math.PI*2,r.updateMatrix(),_.setMatrixAt(M,r.matrix);const y=oe(x*1.7,T*1.3);m.setHSL(.22+y*.06,.24+y*.16,.24+y*.13,Be),g[M*3]=m.r,g[M*3+1]=m.g,g[M*3+2]=m.b}_.instanceColor=new To(g,3),_.castShadow=!1,_.receiveShadow=!0,f.add(_)}return f}const x2=[["U.S. STEEL TOWER","U.S. Steel Tower"],["PPG PLACE","One PPG Place"],["BNY MELLON CENTER","BNY Mellon Center"],["FIFTH AVENUE PLACE","Fifth Avenue Place"],["ONE OXFORD CENTRE","One Oxford Centre"],["TOWER AT PNC PLAZA","Tower at PNC Plaza"],["GULF TOWER","Gulf Tower"],["KOPPERS BUILDING","Koppers Building"],["GRANT BUILDING","Grant Building"],["UNION TRUST BUILDING","Union Trust Building"],["ALLEGHENY COUNTY COURTHOUSE","Allegheny County Courthouse"],["CONVENTION CENTER","David L. Lawrence Convention Center"],["PNC PARK","PNC Park"],["ACRISURE STADIUM","Acrisure Stadium"],["PPG PAINTS ARENA","PPG Paints Arena"],["ANDY WARHOL MUSEUM","The Andy Warhol Museum"],["SCIENCE CENTER","Kamin Science Center"],["CATHEDRAL OF LEARNING","Cathedral of Learning"],["HEINZ MEMORIAL CHAPEL","Heinz Memorial Chapel"],["CARNEGIE MUSEUM","Carnegie Museum of Natural History"],["SOLDIERS & SAILORS MEMORIAL","Soldiers and Sailors Memorial Hall"],["PHIPPS CONSERVATORY","Phipps Conservatory"]].map(([i,t])=>[fa(i),t]),v2=[["POINT STATE PARK",-800,-70,40],["MOUNT WASHINGTON",-720,1e3,60],["THE STRIP DISTRICT",1500,-900,50],["OAKLAND",4200,0,60]].map(([i,t,e,n])=>[fa(i),t,e,n]);function M2(i,t){const e=new Map;for(const s of i.buildings||[]){if(!s.n||!s.f||s.f.length<4)continue;const o=e.get(s.n);(!o||(s.h||0)>(o.h||0))&&e.set(s.n,s)}const n=s=>{const o=s.toLowerCase();for(const[r,a]of e)if(r.toLowerCase().includes(o))return a;return null};for(const[s,o]of x2){const r=e.get(o)||n(o);if(!r)continue;const[a,l]=Sn(r.f),c=2+Math.max(0,1-(r.h||0)/260);Vr(s,new U(a,t(a,l)+Math.max(24,r.h||24)+28,l),c)}for(const[s,o,r,a]of v2)Vr(s,new U(o,t(o,r)+a,r),0);for(const s of $c){const[o,r]=s.upper;Vr(fa(s.n).toUpperCase(),new U(o,t(o,r)+34,r),1)}}function bf(i,t,e){const n=(i.n||"").toLowerCase();if(/u\.?s\.? steel|us steel/.test(n))return new Bt(6965818);if(/ppg/.test(n))return new Bt(14216422);if(/koppers/.test(n))return new Bt(4880984);if(/gulf tower|grant building/.test(n))return new Bt(10130568);if(/cathedral|chapel|church/.test(n))return new Bt(13157046);if(/carnegie|sandstone|soldiers/.test(n))return new Bt(13946820);if(/convention/.test(n))return new Bt(14212312);const s=oe(t,e),o=oe(e*3.1,t*1.7),r=i.h>70?.58:.07;return new Bt().setHSL(r+o*.06,.03+s*.07,.74+s*.3)}let Rr=null;function sp(){return Rr||(Rr=Qe.parkMat.clone(),Rr.vertexColors=!0),Rr}function y2(i,t,e){const n=new Ie;if(n.name="landcover",!i?.length)return n;const s={0:[],1:[],3:[]};for(const r of i){const a=s[r.c];if(!a||!r.f||r.f.length<4)continue;const[l,c]=Sn(r.f);if(e.inside(l,c))continue;let u=0;for(const[h,f]of r.f)u=Math.max(u,Math.hypot(h-l,f-c));if(!(u<14))try{const h=mc(r.f,.45,t);Jr(h,.045),a.push(r.c===1?np(h,[1,1,1]):h)}catch{}}const o=[{cls:0,mat:Qe.pavingMat},{cls:3,mat:Qe.sandMat},{cls:1,mat:sp()}];for(const{cls:r,mat:a}of o){const l=s[r];if(!l.length)continue;const c=sn(l,!1);for(const h of l)h.dispose();if(!c)continue;const u=new te(c,a);u.receiveShadow=!0,n.add(u)}return n}async function S2(i,t,e){const n=av(i.terrain),s=Nh(i.water||[]),o=Nh(i.water||[],{erosion:12}),r=(y,S)=>yd(y,S,n,s),a=i2(i.buildings||[]),l=o2(t?.polys||[]);le.add(a2(n,s,a,l)),le.add(y2(t?.polys,r,s));const c=i.pointPark?.f,u=[];for(const y of i.parks)if(!(y.f.length<4)){if(c){const[S,R]=Sn(y.f);if(Md(S,R,c))continue}try{const S=mc(y.f,.5,r);Jr(S,.012),u.push(np(S,[1,1,1]))}catch{}}if(u.length){const y=new te(sn(u,!1),sp());y.receiveShadow=!0,le.add(y)}const h=[];for(const y of i.water)if(!(y.f.length<4))try{const S=mc(y.f,.15,null,y.holes);Jr(S,.004),h.push(S)}catch{}if(h.length){const y=new te(sn(h,!1),Qe.waterMat);y.receiveShadow=!0,le.add(y)}const f=p2(i.water,r);f&&le.add(f);const d={lowrise:[],brick:[],limestone:[],steel:[],glass:[],ppg:[],gothic:[],stadium:[],artdeco:[],chapel:[],sandstone:[],copper:[],convention:[],steelTower:[],glasshouse:[]};let p=0;const _=[],g=[0,0,0],m=[];for(const y of i.buildings)if(!(!y.f||y.f.length<4)&&!Ey(y)&&!(zr(y.f,o)>.18))try{const S=Bh(y),R=Qe.families[S],[D,F]=Sn(y.f),O=zr(y.f,s)>.6,z=O?Math.min(Math.max(3,y.h||10),7):Math.max(3,y.h||10),H=O?.4:nc(y.f,r,s);let J=H;if(!O)for(const[I,k]of y.f)J=Math.min(J,r(I,k));const G=Math.min(28,Math.max(0,H-J)+1.2),et=Lo(y.f),Y=kv(y.f,z),Q=bf(y,D,F),{wall:V,trim:ot,roofRing:X,roofY:L}=jh({footprint:y.f,height:z,baseY:H,style:S,seed:et,floorH:R.floorH,windowW:R.windowW,skirt:G});if(!V)continue;if(il(V,Q),(d[S]||=[]).push(V),ot&&(il(ot,nM(Q)),d[S].push(ot)),Y>0){const I=tM({footprint:y.f,height:z,baseY:H,seed:et,tier:Y,style:S,roofRing:X,roofY:L});I&&_.push(I)}O||m.push(y),g[Y]+=1,p+=1}catch{}let M=0;if(e?.buildings?.length){for(const y of e.buildings)if(!(!y.f||y.f.length<4)&&!(zr(y.f,o)>.35))try{const S=Bh(y),R=Qe.families[S];if(!R)continue;const D=Math.max(3,y.h||8),F=nc(y.f,r,s);let O=F;for(const[J,G]of y.f)O=Math.min(O,r(J,G));const z=Math.min(28,Math.max(0,F-O)+1.2),{wall:H}=jh({footprint:y.f,height:D,baseY:F,style:S,seed:Lo(y.f),tier:0,floorH:R.floorH,windowW:R.windowW,skirt:z});if(!H)continue;il(H,bf(y,...Sn(y.f))),(d[S]||=[]).push(H),M+=1}catch{}}const v=800;function x(y,S){for(let R=0;R<y.length;R+=v){const D=y.slice(R,R+v),F=sn(D,!1);if(!F)continue;const O=new te(F,S);O.castShadow=!0,O.receiveShadow=!0,le.add(O);for(const z of D)z.dispose()}}for(const[y,S]of Object.entries(d))Qe.families[y]&&x(S,Qe.families[y].mat);_.length&&x(_,eM({dayMode:Ji})),le.add(by(i.buildings,r,s,i.pointPark,o)),le.add(Py(m,r)),le.add(Cy(i.streets||[],r,s,{dayMode:Ji}));const w=new Map;for(const y of i.streets){const S=y.r??1;if(S>=3)continue;w.has(S)||w.set(S,[]);const R=w.get(S);for(let D=0;D<y.c.length-1;D++){const F=y.c[D],O=y.c[D+1],z=r(F[0],F[1])+1.2,H=r(O[0],O[1])+1.2;R.push(F[0],z,F[1],O[0],H,O[1])}}for(const[y,S]of w){const R=new re;R.setAttribute("position",new Yt(S,3)),le.add(new rx(R,vf[y]||vf[1]))}le.add(m2(i.streets||[],r,s));const T=bM(i.bridges||[],{yFn:r,waterIndex:s,addLabel:(y,S)=>Vr(y,S,1.5),dayMode:Ji});le.add(T);const b=_2(i.parks||[],n,s,r,l,c);b&&le.add(b),M2(i,r);const A=p+M;return Jy.textContent=`건물 ${A.toLocaleString()} · 실시간 렌더링`,A}const Xr={aerial:{position:new U(-300,2500,900),target:new U(-300,0,-180)},downtown:{position:new U(880,430,700),target:new U(180,70,40)},point:{position:new U(-280,240,240),target:new U(-790,20,-80)},bridges:{position:new U(300,260,-140),target:new U(20,30,-540)},stadiums:{position:new U(-700,430,-1620),target:new U(-740,30,-640)},oakland:{position:new U(4780,430,260),target:new U(4050,110,-320)},cathedral:{position:new U(4460,300,-60),target:new U(4133,150,-369)},mountwashington:{position:new U(-1010,195,560),target:new U(240,60,-40)}};let Zi=!1,An=null;function w2(i){return i<.5?2*i*i:1-(-2*i+2)**2/2}function Ef(i,t=2200){const e=Ze.position.clone(),n=Fe.target.clone(),s=i.position.clone(),o=i.target.clone(),r=performance.now();Fe.enabled=!1,An={start:r,duration:t,fromPos:e,fromTarget:n,toPos:s,toTarget:o}}function iu(i){if(i==="rotate"){Zi=!Zi;for(const t of ta.querySelectorAll("button"))t.classList.toggle("active",t.dataset.view==="rotate"?Zi:!1);Zi?Ef(Xr.downtown,1600):Fe.enabled=!0;return}Zi=!1,Fe.enabled=!0;for(const t of ta.querySelectorAll("button"))t.classList.toggle("active",t.dataset.view===i);Xr[i]&&Ef(Xr[i])}for(const i of ta.querySelectorAll("button[data-view]"))i.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation(),iu(i.dataset.view)});function _c(){const i=location.hash.replace(/^#/,"").toLowerCase();return Xr[i]?i:null}window.addEventListener("hashchange",()=>{const i=_c();i&&iu(i)});let vn=window.innerWidth,Mn=window.innerHeight;function b2(){const i=ge.domElement;let t=Math.round(i.clientWidth),e=Math.round(i.clientHeight);if(t<2||e<2){const n=window.visualViewport;t=Math.round(n?.width||window.innerWidth),e=Math.round(n?.height||window.innerHeight)}return{w:t,h:e}}function xi(){const{w:i,h:t}=b2();vn=i,Mn=Math.max(t,1),Ze.aspect=vn/Mn,Ze.updateProjectionMatrix();const e=qd();ge.setPixelRatio(e),ge.setSize(vn,Mn,!1);const n=ge.getContext(),s=Math.max(1,Math.floor(vn*ge.getPixelRatio())),o=Math.max(1,Math.floor(Mn*ge.getPixelRatio()));if(n.drawingBufferWidth<s||n.drawingBufferHeight<o){const r=Math.min(n.drawingBufferWidth/vn,n.drawingBufferHeight/Mn);ge.setPixelRatio(Math.max(.75,Math.floor(r*100)/100)),ge.setSize(vn,Mn,!1)}ge.setViewport(0,0,vn,Mn),ge.setScissorTest(!1),Ni.setSize(vn,Mn),hn&&(hn.setPixelRatio(ge.getPixelRatio()),hn.setSize(vn,Mn))}window.addEventListener("resize",xi);window.addEventListener("orientationchange",xi);window.visualViewport?.addEventListener("resize",xi);window.visualViewport?.addEventListener("scroll",xi);xi();const Tf=12,Cr={checkedAt:0,settleUntil:0},Pr={buf:null,w:0};function E2(){const i=ge.getContext(),t=i.drawingBufferWidth,e=i.drawingBufferHeight;Pr.w!==t&&(Pr.buf=new Uint8Array(t*4),Pr.w=t);const n=Pr.buf;let s=0,o=0;for(let r=0;r<Tf;r++){const a=Math.min(e-1,Math.round((r+.5)/Tf*e));i.readPixels(0,a,t,1,i.RGBA,i.UNSIGNED_BYTE,n);for(let l=0;l<t*4;l+=16)o++,n[l]+n[l+1]+n[l+2]===0&&s++}return o?s/o:0}function T2(i){if(!(i-Cr.checkedAt<1e3)&&(Cr.checkedAt=i,!(i<Cr.settleUntil)&&!(Ts<=.5)&&E2()>.3)){const t=Ts;Ts=Math.max(.5,Math.floor(Ts*.75*100)/100),xi(),Cr.settleUntil=i+4e3,console.warn(`[render] frame is mostly dropped tiles at ${t.toFixed(2)}x — lowering render scale to ${Ts.toFixed(2)}x`)}}let Af=performance.now();function op(i){requestAnimationFrame(op);const t=Math.min(.05,(i-Af)/1e3);Af=i;const e=Math.round(ge.domElement.clientWidth),n=Math.round(ge.domElement.clientHeight);if((e!==vn||n!==Mn)&&xi(),An){const s=Math.min(1,(i-An.start)/An.duration),o=w2(s);Ze.position.lerpVectors(An.fromPos,An.toPos,o),Fe.target.lerpVectors(An.fromTarget,An.toTarget,o),s>=1&&(An=null,Fe.enabled=!Zi)}else if(Zi){const s=i*12e-5,o=980;Ze.position.x=Math.cos(s)*o,Ze.position.z=Math.sin(s)*o,Ze.position.y=480,Fe.target.set(20,50,-20)}Qe.waterUniforms.uTime.value=i*.001,ga.update(t,Ze,i),Kd(Fe.target),ns.position.set(Fe.target.x,750,Fe.target.z),ns.target.position.copy(Fe.target),Io.position.x=Fe.target.x,Io.position.z=Fe.target.z,Fe.update(),hn?(hn.render(),ge.setViewport(0,0,vn,Mn)):ge.render(le,Ze),T2(i),Ze.updateMatrixWorld(),f2(vn,Mn),Ni.render(le,Ze)}requestAnimationFrame(op);(async()=>{try{const[i,t,e]=await Promise.all([fetch("./data/pittsburgh.json"),fetch("./data/landcover.json"),fetch("./data/fabric.json")]);if(!i.ok)throw new Error(`Failed to load city data (${i.status})`);const n=await i.json(),s=t.ok?await t.json():null,o=e.ok?await e.json():null;await S2(n,s,o),tp(),ep(Ye.weather);const r=_c()||"downtown";iu(r),An&&_c()&&(Ze.position.copy(An.toPos),Fe.target.copy(An.toTarget),An=null,Fe.enabled=!0);for(const a of ta.querySelectorAll("button[data-view]"))a.classList.toggle("active",a.dataset.view===r);xf.classList.add("hide")}catch(i){console.error(i),xf.querySelector(".loader-text").textContent=String(i.message||i)}})();
