var BM3D=(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:`Module`})
/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/
;let t=1e3,n=1001,r=1002,i=1003,a=1006,o=1008,s=1009,c=1014,l=1015,u=1016,d=1020,f=1023,p=1026,m=2300,h=2301,g=2302,_=2400,v=2401,y=2402,b=3e3,x=3001,S=`srgb`,C=`srgb-linear`,w=`display-p3`,T=`display-p3-linear`,E=`linear`,D=`srgb`,O=`rec709`,k=7680,A=2e3;var j=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}};let M=/* @__PURE__ */ `00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),N=Math.PI/180,ee=180/Math.PI;function P(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(M[e&255]+M[e>>8&255]+M[e>>16&255]+M[e>>24&255]+`-`+M[t&255]+M[t>>8&255]+`-`+M[t>>16&15|64]+M[t>>24&255]+`-`+M[n&63|128]+M[n>>8&255]+`-`+M[n>>16&255]+M[n>>24&255]+M[r&255]+M[r>>8&255]+M[r>>16&255]+M[r>>24&255]).toLowerCase()}function F(e,t,n){return Math.max(t,Math.min(n,e))}function I(e,t){return(e%t+t)%t}function te(e,t,n){return(1-n)*e+n*t}function ne(e){return!(e&e-1)&&e!==0}function re(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function L(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function R(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var z=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(F(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},B=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ie.makeScale(e,t)),this}rotate(e){return this.premultiply(ie.makeRotation(-e)),this}translate(e,t){return this.premultiply(ie.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};let ie=/*@__PURE__*/ new B;function ae(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function oe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function se(){let e=oe(`canvas`);return e.style.display=`block`,e}let ce={};function le(e){e in ce||(ce[e]=!0,console.warn(e))}let ue=/*@__PURE__*/ new B().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),de=/*@__PURE__*/ new B().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fe={[C]:{transfer:E,primaries:O,toReference:e=>e,fromReference:e=>e},[S]:{transfer:D,primaries:O,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[T]:{transfer:E,primaries:`p3`,toReference:e=>e.applyMatrix3(de),fromReference:e=>e.applyMatrix3(ue)},[w]:{transfer:D,primaries:`p3`,toReference:e=>e.convertSRGBToLinear().applyMatrix3(de),fromReference:e=>e.applyMatrix3(ue).convertLinearToSRGB()}},pe=/* @__PURE__ */ new Set([C,T]),V={enabled:!0,_workingColorSpace:C,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!pe.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let r=fe[t].toReference,i=fe[n].fromReference;return i(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return fe[e].primaries},getTransfer:function(e){return e===``?E:fe[e].transfer}};function me(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function H(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}let U;var W=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{U===void 0&&(U=oe(`canvas`)),U.width=e.width,U.height=e.height;let n=U.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=U}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=oe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=me(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(me(t[e]/255)*255):t[e]=me(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}};let he=0;var G=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:he++}),this.uuid=P(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(K(r[t].image)):e.push(K(r[t]))}else e=K(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function K(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?W.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}let ge=0;var _e=class e extends j{constructor(t=e.DEFAULT_IMAGE,r=e.DEFAULT_MAPPING,i=n,c=n,l=a,u=o,d=f,p=s,m=e.DEFAULT_ANISOTROPY,h=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ge++}),this.uuid=P(),this.name=``,this.source=new G(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=c,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new B,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h==`string`?this.colorSpace=h:(le(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace=h===3001?S:``),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case t:e.x-=Math.floor(e.x);break;case n:e.x=e.x<0?0:1;break;case r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case t:e.y-=Math.floor(e.y);break;case n:e.y=e.y<0?0:1;break;case r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return le(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace===`srgb`?x:b}set encoding(e){le(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace=e===3001?S:``}};_e.DEFAULT_IMAGE=null,_e.DEFAULT_MAPPING=300,_e.DEFAULT_ANISOTROPY=1;var q=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ve=class extends j{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new q(0,0,e,t),this.scissorTest=!1,this.viewport=new q(0,0,e,t);let r={width:e,height:t,depth:1};n.encoding!==void 0&&(le(`THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace.`),n.colorSpace=n.encoding===3001?S:``),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:a,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new _e(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new G(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},ye=class extends ve{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},be=class extends _e{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xe=class extends _e{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Se=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0)e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;else if(o===1)e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;else{if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(F(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(i),n*Math.cos(i),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},J=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(we.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(we.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ce.copy(this).projectOnVector(e),this.sub(Ce)}reflect(e){return this.sub(Ce.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(F(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};let Ce=/*@__PURE__*/ new J,we=/*@__PURE__*/ new Se;var Te=class{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Y.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Y.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Y.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Y):Y.fromBufferAttribute(r,t),Y.applyMatrix4(e.matrixWorld),this.expandByPoint(Y);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),De.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),De.copy(e.boundingBox)),De.applyMatrix4(e.matrixWorld),this.union(De)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Y),Y.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pe),Fe.subVectors(this.max,Pe),Oe.subVectors(e.a,Pe),ke.subVectors(e.b,Pe),Ae.subVectors(e.c,Pe),je.subVectors(ke,Oe),Me.subVectors(Ae,ke),Ne.subVectors(Oe,Ae);let t=[0,-je.z,je.y,0,-Me.z,Me.y,0,-Ne.z,Ne.y,je.z,0,-je.x,Me.z,0,-Me.x,Ne.z,0,-Ne.x,-je.y,je.x,0,-Me.y,Me.x,0,-Ne.y,Ne.x,0];return!Re(t,Oe,ke,Ae,Fe)||(t=[1,0,0,0,1,0,0,0,1],!Re(t,Oe,ke,Ae,Fe))?!1:(Ie.crossVectors(je,Me),t=[Ie.x,Ie.y,Ie.z],Re(t,Oe,ke,Ae,Fe))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Y).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Y).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Ee[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ee[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ee[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ee[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ee[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ee[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ee[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ee[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ee)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};let Ee=[/*@__PURE__*/ new J,/*@__PURE__*/ new J,/*@__PURE__*/ new J,/*@__PURE__*/ new J,/*@__PURE__*/ new J,/*@__PURE__*/ new J,/*@__PURE__*/ new J,/*@__PURE__*/ new J],Y=/*@__PURE__*/ new J,De=/*@__PURE__*/ new Te,Oe=/*@__PURE__*/ new J,ke=/*@__PURE__*/ new J,Ae=/*@__PURE__*/ new J,je=/*@__PURE__*/ new J,Me=/*@__PURE__*/ new J,Ne=/*@__PURE__*/ new J,Pe=/*@__PURE__*/ new J,Fe=/*@__PURE__*/ new J,Ie=/*@__PURE__*/ new J,Le=/*@__PURE__*/ new J;function Re(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Le.fromArray(e,a);let o=i.x*Math.abs(Le.x)+i.y*Math.abs(Le.y)+i.z*Math.abs(Le.z),s=t.dot(Le),c=n.dot(Le),l=r.dot(Le);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}let ze=/*@__PURE__*/ new Te,Be=/*@__PURE__*/ new J,Ve=/*@__PURE__*/ new J;var He=class{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?ze.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Be.subVectors(e,this.center);let t=Be.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Be,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ve.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Be.copy(e.center).add(Ve)),this.expandByPoint(Be.copy(e.center).sub(Ve))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};let Ue=/*@__PURE__*/ new J,We=/*@__PURE__*/ new J,Ge=/*@__PURE__*/ new J,Ke=/*@__PURE__*/ new J,qe=/*@__PURE__*/ new J,Je=/*@__PURE__*/ new J,Ye=/*@__PURE__*/ new J;var Xe=class{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ue)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ue.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ue.copy(this.origin).addScaledVector(this.direction,t),Ue.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){We.copy(e).add(t).multiplyScalar(.5),Ge.copy(t).sub(e).normalize(),Ke.copy(this.origin).sub(We);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Ge),o=Ke.dot(this.direction),s=-Ke.dot(Ge),c=Ke.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(We).addScaledVector(Ge,d),f}intersectSphere(e,t){Ue.subVectors(e.center,this.origin);let n=Ue.dot(this.direction),r=Ue.dot(Ue)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ue)!==null}intersectTriangle(e,t,n,r,i){qe.subVectors(t,e),Je.subVectors(n,e),Ye.crossVectors(qe,Je);let a=this.direction.dot(Ye),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ke.subVectors(this.origin,e);let s=o*this.direction.dot(Je.crossVectors(Ke,Je));if(s<0)return null;let c=o*this.direction.dot(qe.cross(Ke));if(c<0||s+c>a)return null;let l=-o*Ke.dot(Ye);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ze=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Qe.setFromMatrixColumn(e,0).length(),i=1/Qe.setFromMatrixColumn(e,1).length(),a=1/Qe.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(et,e,tt)}lookAt(e,t,n){let r=this.elements;return it.subVectors(e,t),it.lengthSq()===0&&(it.z=1),it.normalize(),nt.crossVectors(n,it),nt.lengthSq()===0&&(Math.abs(n.z)===1?it.x+=1e-4:it.z+=1e-4,it.normalize(),nt.crossVectors(n,it)),nt.normalize(),rt.crossVectors(it,nt),r[0]=nt.x,r[4]=rt.x,r[8]=it.x,r[1]=nt.y,r[5]=rt.y,r[9]=it.y,r[2]=nt.z,r[6]=rt.z,r[10]=it.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],ee=r[7],P=r[11],F=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*ee,i[8]=a*C+o*D+s*j+c*P,i[12]=a*w+o*O+s*M+c*F,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*ee,i[9]=l*C+u*D+d*j+f*P,i[13]=l*w+u*O+d*M+f*F,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*ee,i[10]=p*C+m*D+h*j+g*P,i[14]=p*w+m*O+h*M+g*F,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*ee,i[11]=_*C+v*D+y*j+b*P,i[15]=_*w+v*O+y*M+b*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=Qe.set(r[0],r[1],r[2]).length(),a=Qe.set(r[4],r[5],r[6]).length(),o=Qe.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],$e.copy(this);let s=1/i,c=1/a,l=1/o;return $e.elements[0]*=s,$e.elements[1]*=s,$e.elements[2]*=s,$e.elements[4]*=c,$e.elements[5]*=c,$e.elements[6]*=c,$e.elements[8]*=l,$e.elements[9]*=l,$e.elements[10]*=l,t.setFromRotationMatrix($e),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=A){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=A){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};let Qe=/*@__PURE__*/ new J,$e=/*@__PURE__*/ new Ze,et=/*@__PURE__*/ new J(0,0,0),tt=/*@__PURE__*/ new J(1,1,1),nt=/*@__PURE__*/ new J,rt=/*@__PURE__*/ new J,it=/*@__PURE__*/ new J,at=/*@__PURE__*/ new Ze,ot=/*@__PURE__*/ new Se;var st=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(F(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-F(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(F(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-F(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(F(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-F(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return at.makeRotationFromQuaternion(e),this.setFromRotationMatrix(at,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ot.setFromEuler(this),this.setFromQuaternion(ot,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};st.DEFAULT_ORDER=`XYZ`;var ct=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}};let lt=0,ut=/*@__PURE__*/ new J,dt=/*@__PURE__*/ new Se,ft=/*@__PURE__*/ new Ze,pt=/*@__PURE__*/ new J,mt=/*@__PURE__*/ new J,ht=/*@__PURE__*/ new J,gt=/*@__PURE__*/ new Se,_t=/*@__PURE__*/ new J(1,0,0),vt=/*@__PURE__*/ new J(0,1,0),yt=/*@__PURE__*/ new J(0,0,1),bt={type:`added`},xt={type:`removed`};var St=class e extends j{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lt++}),this.uuid=P(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new J,n=new st,r=new Se,i=new J(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ze},normalMatrix:{value:new B}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ct,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dt.setFromAxisAngle(e,t),this.quaternion.multiply(dt),this}rotateOnWorldAxis(e,t){return dt.setFromAxisAngle(e,t),this.quaternion.premultiply(dt),this}rotateX(e){return this.rotateOnAxis(_t,e)}rotateY(e){return this.rotateOnAxis(vt,e)}rotateZ(e){return this.rotateOnAxis(yt,e)}translateOnAxis(e,t){return ut.copy(e).applyQuaternion(this.quaternion),this.position.add(ut.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_t,e)}translateY(e){return this.translateOnAxis(vt,e)}translateZ(e){return this.translateOnAxis(yt,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ft.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pt.copy(e):pt.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),mt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ft.lookAt(mt,pt,this.up):ft.lookAt(pt,mt,this.up),this.quaternion.setFromRotationMatrix(ft),r&&(ft.extractRotation(r.matrixWorld),dt.setFromRotationMatrix(ft),this.quaternion.premultiply(dt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bt)):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xt)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ft.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ft.multiply(e.parent.matrixWorld)),e.applyMatrix4(ft),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mt,e,ht),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mt,gt,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++){let n=e[t];n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};St.DEFAULT_UP=/*@__PURE__*/ new J(0,1,0),St.DEFAULT_MATRIX_AUTO_UPDATE=!0,St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;let Ct=/*@__PURE__*/ new J,wt=/*@__PURE__*/ new J,Tt=/*@__PURE__*/ new J,Et=/*@__PURE__*/ new J,Dt=/*@__PURE__*/ new J,Ot=/*@__PURE__*/ new J,kt=/*@__PURE__*/ new J,At=/*@__PURE__*/ new J,jt=/*@__PURE__*/ new J,Mt=/*@__PURE__*/ new J,Nt=!1;var Pt=class e{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ct.subVectors(e,t),r.cross(Ct);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Ct.subVectors(r,t),wt.subVectors(n,t),Tt.subVectors(e,t);let a=Ct.dot(Ct),o=Ct.dot(wt),s=Ct.dot(Tt),c=wt.dot(wt),l=wt.dot(Tt),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Et)!==null&&Et.x>=0&&Et.y>=0&&Et.x+Et.y<=1}static getUV(e,t,n,r,i,a,o,s){return Nt===!1&&(console.warn(`THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().`),Nt=!0),this.getInterpolation(e,t,n,r,i,a,o,s)}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Et)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Et.x),s.addScaledVector(a,Et.y),s.addScaledVector(o,Et.z),s)}static isFrontFacing(e,t,n,r){return Ct.subVectors(n,t),wt.subVectors(e,t),Ct.cross(wt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ct.subVectors(this.c,this.b),wt.subVectors(this.a,this.b),Ct.cross(wt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,r,i,a){return Nt===!1&&(console.warn(`THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().`),Nt=!0),e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Dt.subVectors(r,n),Ot.subVectors(i,n),At.subVectors(e,n);let s=Dt.dot(At),c=Ot.dot(At);if(s<=0&&c<=0)return t.copy(n);jt.subVectors(e,r);let l=Dt.dot(jt),u=Ot.dot(jt);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Dt,a);Mt.subVectors(e,i);let f=Dt.dot(Mt),p=Ot.dot(Mt);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Ot,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return kt.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(kt,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Dt,a).addScaledVector(Ot,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};let Ft={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},It={h:0,s:0,l:0},Lt={h:0,s:0,l:0};function Rt(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var X=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=S){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,V.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=V.workingColorSpace){return this.r=e,this.g=t,this.b=n,V.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=V.workingColorSpace){if(e=I(e,1),t=F(t,0,1),n=F(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Rt(i,r,e+1/3),this.g=Rt(i,r,e),this.b=Rt(i,r,e-1/3)}return V.toWorkingColorSpace(this,r),this}setStyle(e,t=S){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=S){let n=Ft[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=me(e.r),this.g=me(e.g),this.b=me(e.b),this}copyLinearToSRGB(e){return this.r=H(e.r),this.g=H(e.g),this.b=H(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=S){return V.fromWorkingColorSpace(zt.copy(this),e),Math.round(F(zt.r*255,0,255))*65536+Math.round(F(zt.g*255,0,255))*256+Math.round(F(zt.b*255,0,255))}getHexString(e=S){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=V.workingColorSpace){V.fromWorkingColorSpace(zt.copy(this),t);let n=zt.r,r=zt.g,i=zt.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=V.workingColorSpace){return V.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=S){V.fromWorkingColorSpace(zt.copy(this),e);let t=zt.r,n=zt.g,r=zt.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(It),this.setHSL(It.h+e,It.s+t,It.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(It),e.getHSL(Lt);let n=te(It.h,Lt.h,t),r=te(It.s,Lt.s,t),i=te(It.l,Lt.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};let zt=/*@__PURE__*/ new X;X.NAMES=Ft;let Bt=0;var Vt=class extends j{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bt++}),this.uuid=P(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new X(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=k,this.stencilZFail=k,this.stencilZPass=k,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Ht=class extends Vt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new X(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};let Ut=/*@__PURE__*/ new J,Wt=/*@__PURE__*/ new z;var Gt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=l,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn(`THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.`),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXY(t,Wt.x,Wt.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=L(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=R(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=L(t,this.array)),t}setX(e,t){return this.normalized&&(t=R(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=L(t,this.array)),t}setY(e,t){return this.normalized&&(t=R(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=L(t,this.array)),t}setZ(e,t){return this.normalized&&(t=R(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=L(t,this.array)),t}setW(e,t){return this.normalized&&(t=R(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=R(t,this.array),n=R(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=R(t,this.array),n=R(n,this.array),r=R(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=R(t,this.array),n=R(n,this.array),r=R(r,this.array),i=R(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},Kt=class extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},qt=class extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Jt=class extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}};let Yt=0,Xt=/*@__PURE__*/ new Ze,Zt=/*@__PURE__*/ new St,Qt=/*@__PURE__*/ new J,$t=/*@__PURE__*/ new Te,en=/*@__PURE__*/ new Te,tn=/*@__PURE__*/ new J;var nn=class e extends j{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yt++}),this.uuid=P(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(ae(e)?qt:Kt)(e,1):e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new B().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return Zt.lookAt(e),Zt.updateMatrix(),this.applyMatrix4(Zt.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qt).negate(),this.translate(Qt.x,Qt.y,Qt.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute(`position`,new Jt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Te);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".`,this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];$t.setFromBufferAttribute(n),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new He);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".`,this),this.boundingSphere.set(new J,1/0);else if(e){let n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];en.setFromBufferAttribute(n),this.morphTargetsRelative?(tn.addVectors($t.min,en.min),$t.expandByPoint(tn),tn.addVectors($t.max,en.max),$t.expandByPoint(tn)):($t.expandByPoint(en.min),$t.expandByPoint(en.max))}$t.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)tn.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(tn));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)tn.fromBufferAttribute(a,t),o&&(Qt.fromBufferAttribute(e,t),tn.add(Qt)),r=Math.max(r,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=e.array,r=t.position.array,i=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new Gt(new Float32Array(4*o),4));let s=this.getAttribute(`tangent`).array,c=[],l=[];for(let e=0;e<o;e++)c[e]=new J,l[e]=new J;let u=new J,d=new J,f=new J,p=new z,m=new z,h=new z,g=new J,_=new J;function v(e,t,n){u.fromArray(r,e*3),d.fromArray(r,t*3),f.fromArray(r,n*3),p.fromArray(a,e*2),m.fromArray(a,t*2),h.fromArray(a,n*2),d.sub(u),f.sub(u),m.sub(p),h.sub(p);let i=1/(m.x*h.y-h.x*m.y);isFinite(i)&&(g.copy(d).multiplyScalar(h.y).addScaledVector(f,-m.y).multiplyScalar(i),_.copy(f).multiplyScalar(m.x).addScaledVector(d,-h.x).multiplyScalar(i),c[e].add(g),c[t].add(g),c[n].add(g),l[e].add(_),l[t].add(_),l[n].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let e=0,t=y.length;e<t;++e){let t=y[e],r=t.start,i=t.count;for(let e=r,t=r+i;e<t;e+=3)v(n[e+0],n[e+1],n[e+2])}let b=new J,x=new J,S=new J,C=new J;function w(e){S.fromArray(i,e*3),C.copy(S);let t=c[e];b.copy(t),b.sub(S.multiplyScalar(S.dot(t))).normalize(),x.crossVectors(C,t);let n=x.dot(l[e])<0?-1:1;s[e*4]=b.x,s[e*4+1]=b.y,s[e*4+2]=b.z,s[e*4+3]=n}for(let e=0,t=y.length;e<t;++e){let t=y[e],r=t.start,i=t.count;for(let e=r,t=r+i;e<t;e+=3)w(n[e+0]),w(n[e+1]),w(n[e+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new J,i=new J,a=new J,o=new J,s=new J,c=new J,l=new J,u=new J;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Gt(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}};let rn=/*@__PURE__*/ new Ze,an=/*@__PURE__*/ new Xe,on=/*@__PURE__*/ new He,sn=/*@__PURE__*/ new J,cn=/*@__PURE__*/ new J,ln=/*@__PURE__*/ new J,un=/*@__PURE__*/ new J,dn=/*@__PURE__*/ new J,fn=/*@__PURE__*/ new J,pn=/*@__PURE__*/ new z,mn=/*@__PURE__*/ new z,hn=/*@__PURE__*/ new z,gn=/*@__PURE__*/ new J,_n=/*@__PURE__*/ new J,vn=/*@__PURE__*/ new J,yn=/*@__PURE__*/ new J,bn=/*@__PURE__*/ new J;var Z=class extends St{constructor(e=new nn,t=new Ht){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){fn.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(dn.fromBufferAttribute(s,e),a?fn.addScaledVector(dn,r):fn.addScaledVector(dn.sub(t),r))}t.add(fn)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),on.copy(n.boundingSphere),on.applyMatrix4(i),an.copy(e.ray).recast(e.near),!(on.containsPoint(an.origin)===!1&&(an.intersectSphere(on,sn)===null||an.origin.distanceToSquared(sn)>(e.far-e.near)**2))&&(rn.copy(i).invert(),an.copy(e.ray).applyMatrix4(rn),(n.boundingBox===null||an.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,an)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Sn(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Sn(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Sn(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Sn(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function xn(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;bn.copy(s),bn.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(bn);return l<n.near||l>n.far?null:{distance:l,point:bn.clone(),object:e}}function Sn(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,cn),e.getVertexPosition(c,ln),e.getVertexPosition(l,un);let u=xn(e,t,n,r,cn,ln,un,yn);if(u){i&&(pn.fromBufferAttribute(i,s),mn.fromBufferAttribute(i,c),hn.fromBufferAttribute(i,l),u.uv=Pt.getInterpolation(yn,cn,ln,un,pn,mn,hn,new z)),a&&(pn.fromBufferAttribute(a,s),mn.fromBufferAttribute(a,c),hn.fromBufferAttribute(a,l),u.uv1=Pt.getInterpolation(yn,cn,ln,un,pn,mn,hn,new z),u.uv2=u.uv1),o&&(gn.fromBufferAttribute(o,s),_n.fromBufferAttribute(o,c),vn.fromBufferAttribute(o,l),u.normal=Pt.getInterpolation(yn,cn,ln,un,gn,_n,vn,new J),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let e={a:s,b:c,c:l,normal:new J,materialIndex:0};Pt.getNormal(cn,ln,un,e.normal),u.face=e}return u}var Cn=class e extends nn{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Jt(c,3)),this.setAttribute(`normal`,new Jt(l,3)),this.setAttribute(`uv`,new Jt(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new J;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function wn(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Tn(e){let t={};for(let n=0;n<e.length;n++){let r=wn(e[n]);for(let e in r)t[e]=r[e]}return t}function En(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Dn(e){return e.getRenderTarget()===null?e.outputColorSpace:V.workingColorSpace}let On={clone:wn,merge:Tn};var kn=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,An=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jn=class extends Vt{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kn,this.fragmentShader=An,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wn(e.uniforms),this.uniformsGroups=En(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Mn=class extends St{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=A}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Nn=class extends Mn{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ee*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(N*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ee*2*Math.atan(Math.tan(N*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(N*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Pn=class extends St{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Nn(-90,1,e,t);r.layers=this.layers,this.add(r);let i=new Nn(-90,1,e,t);i.layers=this.layers,this.add(i);let a=new Nn(-90,1,e,t);a.layers=this.layers,this.add(a);let o=new Nn(-90,1,e,t);o.layers=this.layers,this.add(o);let s=new Nn(-90,1,e,t);s.layers=this.layers,this.add(s);let c=new Nn(-90,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Fn=class extends _e{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},In=class extends ye{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(le(`THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace.`),t.colorSpace=t.encoding===3001?S:``),this.texture=new Fn(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?a:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cn(5,5,5),i=new jn({name:`CubemapFromEquirect`,uniforms:wn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let o=new Z(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=a),new Pn(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};let Ln=/*@__PURE__*/ new J,Rn=/*@__PURE__*/ new J,zn=/*@__PURE__*/ new B;var Bn=class{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ln.subVectors(n,t).cross(Rn.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ln),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||zn.getNormalMatrix(e),r=this.coplanarPoint(Ln).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};let Vn=/*@__PURE__*/ new He,Hn=/*@__PURE__*/ new J;var Un=class{constructor(e=new Bn,t=new Bn,n=new Bn,r=new Bn,i=new Bn,a=new Bn){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=A){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(e){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Hn.x=r.normal.x>0?e.max.x:e.min.x,Hn.y=r.normal.y>0?e.max.y:e.min.y,Hn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hn)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wn(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Gn(e,t){let n=t.isWebGL2,r=/* @__PURE__ */ new WeakMap;function i(t,r){let i=t.array,a=t.usage,o=i.byteLength,s=e.createBuffer();e.bindBuffer(r,s),e.bufferData(r,i,a),t.onUploadCallback();let c;if(i instanceof Float32Array)c=e.FLOAT;else if(i instanceof Uint16Array){if(t.isFloat16BufferAttribute){if(n)c=e.HALF_FLOAT;else throw Error(`THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.`)}else c=e.UNSIGNED_SHORT}else if(i instanceof Int16Array)c=e.SHORT;else if(i instanceof Uint32Array)c=e.UNSIGNED_INT;else if(i instanceof Int32Array)c=e.INT;else if(i instanceof Int8Array)c=e.BYTE;else if(i instanceof Uint8Array)c=e.UNSIGNED_BYTE;else if(i instanceof Uint8ClampedArray)c=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+i);return{buffer:s,type:c,bytesPerElement:i.BYTES_PER_ELEMENT,version:t.version,size:o}}function a(t,r,i){let a=r.array,o=r._updateRange,s=r.updateRanges;if(e.bindBuffer(i,t),o.count===-1&&s.length===0&&e.bufferSubData(i,0,a),s.length!==0){for(let t=0,r=s.length;t<r;t++){let r=s[t];n?e.bufferSubData(i,r.start*a.BYTES_PER_ELEMENT,a,r.start,r.count):e.bufferSubData(i,r.start*a.BYTES_PER_ELEMENT,a.subarray(r.start,r.start+r.count))}r.clearUpdateRanges()}o.count!==-1&&(n?e.bufferSubData(i,o.offset*a.BYTES_PER_ELEMENT,a,o.offset,o.count):e.bufferSubData(i,o.offset*a.BYTES_PER_ELEMENT,a.subarray(o.offset,o.offset+o.count)),o.count=-1),r.onUploadCallback()}function o(e){return e.isInterleavedBufferAttribute&&(e=e.data),r.get(e)}function s(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=r.get(t);n&&(e.deleteBuffer(n.buffer),r.delete(t))}function c(e,t){if(e.isGLBufferAttribute){let t=r.get(e);(!t||t.version<e.version)&&r.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}e.isInterleavedBufferAttribute&&(e=e.data);let n=r.get(e);if(n===void 0)r.set(e,i(e,t));else if(n.version<e.version){if(n.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);a(n.buffer,e,t),n.version=e.version}}return{get:o,remove:s,update:c}}var Kn=class e extends nn{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Jt(p,3)),this.setAttribute(`normal`,new Jt(m,3)),this.setAttribute(`uv`,new Jt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};let Q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`
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
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,lights_fragment_begin:`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`},$={common:{diffuse:{value:/*@__PURE__*/ new X(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:/*@__PURE__*/ new B},alphaMap:{value:null},alphaMapTransform:{value:/*@__PURE__*/ new B},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:/*@__PURE__*/ new B}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:/*@__PURE__*/ new B}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:/*@__PURE__*/ new B}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:/*@__PURE__*/ new B},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:/*@__PURE__*/ new B},normalScale:{value:/*@__PURE__*/ new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:/*@__PURE__*/ new B},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:/*@__PURE__*/ new B}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:/*@__PURE__*/ new B}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:/*@__PURE__*/ new B}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:/*@__PURE__*/ new X(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:/*@__PURE__*/ new X(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:/*@__PURE__*/ new B},alphaTest:{value:0},uvTransform:{value:/*@__PURE__*/ new B}},sprite:{diffuse:{value:/*@__PURE__*/ new X(16777215)},opacity:{value:1},center:{value:/*@__PURE__*/ new z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:/*@__PURE__*/ new B},alphaMap:{value:null},alphaMapTransform:{value:/*@__PURE__*/ new B},alphaTest:{value:0}}},qn={basic:{uniforms:/*@__PURE__*/ Tn([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:Q.meshbasic_vert,fragmentShader:Q.meshbasic_frag},lambert:{uniforms:/*@__PURE__*/ Tn([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:/*@__PURE__*/ new X(0)}}]),vertexShader:Q.meshlambert_vert,fragmentShader:Q.meshlambert_frag},phong:{uniforms:/*@__PURE__*/ Tn([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:/*@__PURE__*/ new X(0)},specular:{value:/*@__PURE__*/ new X(1118481)},shininess:{value:30}}]),vertexShader:Q.meshphong_vert,fragmentShader:Q.meshphong_frag},standard:{uniforms:/*@__PURE__*/ Tn([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:/*@__PURE__*/ new X(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag},toon:{uniforms:/*@__PURE__*/ Tn([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:/*@__PURE__*/ new X(0)}}]),vertexShader:Q.meshtoon_vert,fragmentShader:Q.meshtoon_frag},matcap:{uniforms:/*@__PURE__*/ Tn([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:Q.meshmatcap_vert,fragmentShader:Q.meshmatcap_frag},points:{uniforms:/*@__PURE__*/ Tn([$.points,$.fog]),vertexShader:Q.points_vert,fragmentShader:Q.points_frag},dashed:{uniforms:/*@__PURE__*/ Tn([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Q.linedashed_vert,fragmentShader:Q.linedashed_frag},depth:{uniforms:/*@__PURE__*/ Tn([$.common,$.displacementmap]),vertexShader:Q.depth_vert,fragmentShader:Q.depth_frag},normal:{uniforms:/*@__PURE__*/ Tn([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:Q.meshnormal_vert,fragmentShader:Q.meshnormal_frag},sprite:{uniforms:/*@__PURE__*/ Tn([$.sprite,$.fog]),vertexShader:Q.sprite_vert,fragmentShader:Q.sprite_frag},background:{uniforms:{uvTransform:{value:/*@__PURE__*/ new B},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Q.background_vert,fragmentShader:Q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Q.backgroundCube_vert,fragmentShader:Q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Q.cube_vert,fragmentShader:Q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Q.equirect_vert,fragmentShader:Q.equirect_frag},distanceRGBA:{uniforms:/*@__PURE__*/ Tn([$.common,$.displacementmap,{referencePosition:{value:/*@__PURE__*/ new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Q.distanceRGBA_vert,fragmentShader:Q.distanceRGBA_frag},shadow:{uniforms:/*@__PURE__*/ Tn([$.lights,$.fog,{color:{value:/*@__PURE__*/ new X(0)},opacity:{value:1}}]),vertexShader:Q.shadow_vert,fragmentShader:Q.shadow_frag}};qn.physical={uniforms:/*@__PURE__*/ Tn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:/*@__PURE__*/ new B},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:/*@__PURE__*/ new B},clearcoatNormalScale:{value:/*@__PURE__*/ new z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:/*@__PURE__*/ new B},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:/*@__PURE__*/ new B},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:/*@__PURE__*/ new B},sheen:{value:0},sheenColor:{value:/*@__PURE__*/ new X(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:/*@__PURE__*/ new B},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:/*@__PURE__*/ new B},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:/*@__PURE__*/ new B},transmissionSamplerSize:{value:/*@__PURE__*/ new z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:/*@__PURE__*/ new B},attenuationDistance:{value:0},attenuationColor:{value:/*@__PURE__*/ new X(0)},specularColor:{value:/*@__PURE__*/ new X(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:/*@__PURE__*/ new B},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:/*@__PURE__*/ new B},anisotropyVector:{value:/*@__PURE__*/ new z},anisotropyMap:{value:null},anisotropyMapTransform:{value:/*@__PURE__*/ new B}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag};let Jn={r:0,b:0,g:0};function Yn(e,t,n,r,i,a,o){let s=new X(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(a,m){let g=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?n:t).get(_)),_===null?h(s,c):_&&_.isColor&&(h(_,1),g=!0);let v=e.xr.getEnvironmentBlendMode();v===`additive`?r.buffers.color.setClear(0,0,0,1,o):v===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||g)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),_&&(_.isCubeTexture||_.mapping===306)?(u===void 0&&(u=new Z(new Cn(1,1,1),new jn({name:`BackgroundCubeMaterial`,uniforms:wn(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=V.getTransfer(_.colorSpace)!==D,(d!==_||f!==_.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,p=e.toneMapping),u.layers.enableAll(),a.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Z(new Kn(2,2),new jn({name:`BackgroundMaterial`,uniforms:wn(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=V.getTransfer(_.colorSpace)!==D,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=_,f=_.version,p=e.toneMapping),l.layers.enableAll(),a.unshift(l,l.geometry,l.material,0,0,null))}function h(t,n){t.getRGB(Jn,Dn(e)),r.buffers.color.setClear(Jn.r,Jn.g,Jn.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,h(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,h(s,c)},render:m}}function Xn(e,t,n,r){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:t.get(`OES_vertex_array_object`),o=r.isWebGL2||a!==null,s={},c=g(null),l=c,u=!1;function d(t,r,i,a,s){let c=!1;if(o){let e=h(a,i,r);l!==e&&(l=e,p(l.object)),c=_(t,a,i,s),c&&v(t,a,i,s)}else{let e=r.wireframe===!0;(l.geometry!==a.id||l.program!==i.id||l.wireframe!==e)&&(l.geometry=a.id,l.program=i.id,l.wireframe=e,c=!0)}s!==null&&n.update(s,e.ELEMENT_ARRAY_BUFFER),(c||u)&&(u=!1,w(t,r,i,a),s!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(s).buffer))}function f(){return r.isWebGL2?e.createVertexArray():a.createVertexArrayOES()}function p(t){return r.isWebGL2?e.bindVertexArray(t):a.bindVertexArrayOES(t)}function m(t){return r.isWebGL2?e.deleteVertexArray(t):a.deleteVertexArrayOES(t)}function h(e,t,n){let r=n.wireframe===!0,i=s[e.id];i===void 0&&(i={},s[e.id]=i);let a=i[t.id];a===void 0&&(a={},i[t.id]=a);let o=a[r];return o===void 0&&(o=g(f()),a[r]=o),o}function g(e){let t=[],n=[],r=[];for(let e=0;e<i;e++)t[e]=0,n[e]=0,r[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:n,attributeDivisors:r,object:e,attributes:{},index:null}}function _(e,t,n,r){let i=l.attributes,a=t.attributes,o=0,s=n.getAttributes();for(let t in s)if(s[t].location>=0){let n=i[t],r=a[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;o++}return l.attributesNum!==o||l.index!==r}function v(e,t,n,r){let i={},a=t.attributes,o=0,s=n.getAttributes();for(let t in s)if(s[t].location>=0){let n=a[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,o++}l.attributes=i,l.attributesNum=o,l.index=r}function y(){let e=l.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function b(e){x(e,0)}function x(n,i){let a=l.newAttributes,o=l.enabledAttributes,s=l.attributeDivisors;a[n]=1,o[n]===0&&(e.enableVertexAttribArray(n),o[n]=1),s[n]!==i&&((r.isWebGL2?e:t.get(`ANGLE_instanced_arrays`))[r.isWebGL2?`vertexAttribDivisor`:`vertexAttribDivisorANGLE`](n,i),s[n]=i)}function S(){let t=l.newAttributes,n=l.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function C(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function w(i,a,o,s){if(r.isWebGL2===!1&&(i.isInstancedMesh||s.isInstancedBufferGeometry)&&t.get(`ANGLE_instanced_arrays`)===null)return;y();let c=s.attributes,l=o.getAttributes(),u=a.defaultAttributeValues;for(let t in l){let a=l[t];if(a.location>=0){let o=c[t];if(o===void 0&&(t===`instanceMatrix`&&i.instanceMatrix&&(o=i.instanceMatrix),t===`instanceColor`&&i.instanceColor&&(o=i.instanceColor)),o!==void 0){let t=o.normalized,c=o.itemSize,l=n.get(o);if(l===void 0)continue;let u=l.buffer,d=l.type,f=l.bytesPerElement,p=r.isWebGL2===!0&&(d===e.INT||d===e.UNSIGNED_INT||o.gpuType===1013);if(o.isInterleavedBufferAttribute){let n=o.data,r=n.stride,l=o.offset;if(n.isInstancedInterleavedBuffer){for(let e=0;e<a.locationSize;e++)x(a.location+e,n.meshPerAttribute);i.isInstancedMesh!==!0&&s._maxInstanceCount===void 0&&(s._maxInstanceCount=n.meshPerAttribute*n.count)}else for(let e=0;e<a.locationSize;e++)b(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)C(a.location+e,c/a.locationSize,d,t,r*f,(l+c/a.locationSize*e)*f,p)}else{if(o.isInstancedBufferAttribute){for(let e=0;e<a.locationSize;e++)x(a.location+e,o.meshPerAttribute);i.isInstancedMesh!==!0&&s._maxInstanceCount===void 0&&(s._maxInstanceCount=o.meshPerAttribute*o.count)}else for(let e=0;e<a.locationSize;e++)b(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)C(a.location+e,c/a.locationSize,d,t,c*f,c/a.locationSize*e*f,p)}}else if(u!==void 0){let n=u[t];if(n!==void 0)switch(n.length){case 2:e.vertexAttrib2fv(a.location,n);break;case 3:e.vertexAttrib3fv(a.location,n);break;case 4:e.vertexAttrib4fv(a.location,n);break;default:e.vertexAttrib1fv(a.location,n)}}}}S()}function T(){O();for(let e in s){let t=s[e];for(let e in t){let n=t[e];for(let e in n)m(n[e].object),delete n[e];delete t[e]}delete s[e]}}function E(e){if(s[e.id]===void 0)return;let t=s[e.id];for(let e in t){let n=t[e];for(let e in n)m(n[e].object),delete n[e];delete t[e]}delete s[e.id]}function D(e){for(let t in s){let n=s[t];if(n[e.id]===void 0)continue;let r=n[e.id];for(let e in r)m(r[e].object),delete r[e];delete n[e.id]}}function O(){k(),u=!0,l!==c&&(l=c,p(l.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:O,resetDefaultState:k,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:b,disableUnusedAttributes:S}}function Zn(e,t,n,r){let i=r.isWebGL2,a;function o(e){a=e}function s(t,r){e.drawArrays(a,t,r),n.update(r,a,1)}function c(r,o,s){if(s===0)return;let c,l;if(i)c=e,l=`drawArraysInstanced`;else if(c=t.get(`ANGLE_instanced_arrays`),l=`drawArraysInstancedANGLE`,c===null){console.error(`THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`);return}c[l](a,r,o,s),n.update(o,a,s)}function l(e,r,i){if(i===0)return;let o=t.get(`WEBGL_multi_draw`);if(o===null)for(let t=0;t<i;t++)this.render(e[t],r[t]);else{o.multiDrawArraysWEBGL(a,e,0,r,0,i);let t=0;for(let e=0;e<i;e++)t+=r[e];n.update(t,a,1)}}this.setMode=o,this.render=s,this.renderInstances=c,this.renderMultiDraw=l}function Qn(e,t,n){let r;function i(){if(r!==void 0)return r;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);r=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let o=typeof WebGL2RenderingContext<`u`&&e.constructor.name===`WebGL2RenderingContext`,s=n.precision===void 0?`highp`:n.precision,c=a(s);c!==s&&(console.warn(`THREE.WebGLRenderer:`,s,`not supported, using`,c,`instead.`),s=c);let l=o||t.has(`WEBGL_draw_buffers`),u=n.logarithmicDepthBuffer===!0,d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),f=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,b=o||t.has(`OES_texture_float`),x=y&&b,S=o?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:x,maxSamples:S}}function $n(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Bn,s=new B,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function er(e){let t=/* @__PURE__ */ new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new In(a.height/2);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=/* @__PURE__ */ new WeakMap}return{get:r,dispose:a}}var tr=class extends Mn{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};let nr=[.125,.215,.35,.446,.526,.582],rr=/*@__PURE__*/ new tr,ir=/*@__PURE__*/ new X,ar=null,or=0,sr=0,cr=(1+Math.sqrt(5))/2,lr=1/cr,ur=[/*@__PURE__*/ new J(1,1,1),/*@__PURE__*/ new J(-1,1,1),/*@__PURE__*/ new J(1,1,-1),/*@__PURE__*/ new J(-1,1,-1),/*@__PURE__*/ new J(0,cr,lr),/*@__PURE__*/ new J(0,cr,-lr),/*@__PURE__*/ new J(lr,0,cr),/*@__PURE__*/ new J(-lr,0,cr),/*@__PURE__*/ new J(cr,lr,0),/*@__PURE__*/ new J(-cr,lr,0)];var dr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ar=this._renderer.getRenderTarget(),or=this._renderer.getActiveCubeFace(),sr=this._renderer.getActiveMipmapLevel(),this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_r(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ar,or,sr),e.scissorTest=!1,mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ar=this._renderer.getRenderTarget(),or=this._renderer.getActiveCubeFace(),sr=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:a,minFilter:a,generateMipmaps:!1,type:u,format:f,colorSpace:C,depthBuffer:!1},r=pr(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pr(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fr(r)),this._blurMaterial=hr(r,e,t)}return r}_compileMaterial(e){let t=new Z(this._lodPlanes[0],e);this._renderer.compile(t,rr)}_sceneToCubeUV(e,t,n,r){let i=new Nn(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(ir),s.toneMapping=0,s.autoClear=!1;let u=new Ht({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new Z(new Cn,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(ir),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;mr(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_r()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gr());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new Z(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;mr(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,rr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let t=1;t<this._lodPlanes.length;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),r=ur[(t-1)%ur.length];this._blur(e,t-1,t,n,r)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new Z(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):20;m>20&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let h=[],g=0;for(let e=0;e<20;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];mr(t,3*v*(r>_-4?r-_+4:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,rr)}};function fr(e){let t=[],n=[],r=[],i=e,a=e-4+1+nr.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-4?s=nr[o-e+4-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=/* @__PURE__ */ new Float32Array(108),p=/* @__PURE__ */ new Float32Array(72),m=/* @__PURE__ */ new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new nn;h.setAttribute(`position`,new Gt(f,3)),h.setAttribute(`uv`,new Gt(p,2)),h.setAttribute(`faceIndex`,new Gt(m,1)),t.push(h),i>4&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function pr(e,t,n){let r=new ye(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function mr(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function hr(e,t,n){let r=/* @__PURE__ */ new Float32Array(20),i=new J(0,1,0);return new jn({name:`SphericalGaussianBlur`,defines:{n:20,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:vr(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function gr(){return new jn({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:vr(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function _r(){return new jn({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function vr(){return`

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
	`}function yr(e){let t=/* @__PURE__ */ new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let i=t.get(r);return n===null&&(n=new dr(e)),i=s?n.fromEquirectangular(r,i):n.fromCubemap(r,i),t.set(r,i),i.texture}if(t.has(r))return t.get(r).texture;{let o=r.image;if(s&&o&&o.height>0||c&&o&&i(o)){n===null&&(n=new dr(e));let i=s?n.fromEquirectangular(r):n.fromCubemap(r);return t.set(r,i),r.addEventListener(`dispose`,a),i.texture}return null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=/* @__PURE__ */ new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function br(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(e){e.isWebGL2?(n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`)):(n(`WEBGL_depth_texture`),n(`OES_texture_float`),n(`OES_texture_half_float`),n(`OES_texture_half_float_linear`),n(`OES_standard_derivatives`),n(`OES_element_index_uint`),n(`OES_vertex_array_object`),n(`ANGLE_instanced_arrays`)),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`)},get:function(e){let t=n(e);return t===null&&console.warn(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function xr(e,t,n,r){let i={},a=/* @__PURE__ */ new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(ae(n)?qt:Kt)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Sr(e,t,n,r){let i=r.isWebGL2,a;function o(e){a=e}let s,c;function l(e){s=e.type,c=e.bytesPerElement}function u(t,r){e.drawElements(a,r,s,t*c),n.update(r,a,1)}function d(r,o,l){if(l===0)return;let u,d;if(i)u=e,d=`drawElementsInstanced`;else if(u=t.get(`ANGLE_instanced_arrays`),d=`drawElementsInstancedANGLE`,u===null){console.error(`THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`);return}u[d](a,o,s,r*c,l),n.update(o,a,l)}function f(e,r,i){if(i===0)return;let o=t.get(`WEBGL_multi_draw`);if(o===null)for(let t=0;t<i;t++)this.render(e[t]/c,r[t]);else{o.multiDrawElementsWEBGL(a,r,0,s,e,0,i);let t=0;for(let e=0;e<i;e++)t+=r[e];n.update(t,a,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function Cr(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function wr(e,t){return e[0]-t[0]}function Tr(e,t){return Math.abs(t[1])-Math.abs(e[1])}function Er(e,t,n){let r={},i=/* @__PURE__ */ new Float32Array(8),a=/* @__PURE__ */ new WeakMap,o=new q,s=[];for(let e=0;e<8;e++)s[e]=[e,0];function c(c,u,d){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let r=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,i=r===void 0?0:r.length,s=a.get(u);if(s===void 0||s.count!==i){s!==void 0&&s.texture.dispose();let e=u.morphAttributes.position!==void 0,n=u.morphAttributes.normal!==void 0,r=u.morphAttributes.color!==void 0,c=u.morphAttributes.position||[],d=u.morphAttributes.normal||[],f=u.morphAttributes.color||[],m=0;e===!0&&(m=1),n===!0&&(m=2),r===!0&&(m=3);let h=u.attributes.position.count*m,g=1;h>t.maxTextureSize&&(g=Math.ceil(h/t.maxTextureSize),h=t.maxTextureSize);let _=new Float32Array(h*g*4*i),v=new be(_,h,g,i);v.type=l,v.needsUpdate=!0;let y=m*4;for(let t=0;t<i;t++){let i=c[t],a=d[t],s=f[t],l=h*g*4*t;for(let t=0;t<i.count;t++){let c=t*y;e===!0&&(o.fromBufferAttribute(i,t),_[l+c+0]=o.x,_[l+c+1]=o.y,_[l+c+2]=o.z,_[l+c+3]=0),n===!0&&(o.fromBufferAttribute(a,t),_[l+c+4]=o.x,_[l+c+5]=o.y,_[l+c+6]=o.z,_[l+c+7]=0),r===!0&&(o.fromBufferAttribute(s,t),_[l+c+8]=o.x,_[l+c+9]=o.y,_[l+c+10]=o.z,_[l+c+11]=s.itemSize===4?o.w:1)}}s={count:i,texture:v,size:new z(h,g)},a.set(u,s);function p(){v.dispose(),a.delete(u),u.removeEventListener(`dispose`,p)}u.addEventListener(`dispose`,p)}let c=0;for(let e=0;e<f.length;e++)c+=f[e];let m=u.morphTargetsRelative?1:1-c;d.getUniforms().setValue(e,`morphTargetBaseInfluence`,m),d.getUniforms().setValue(e,`morphTargetInfluences`,f),d.getUniforms().setValue(e,`morphTargetsTexture`,s.texture,n),d.getUniforms().setValue(e,`morphTargetsTextureSize`,s.size)}else{let t=f===void 0?0:f.length,n=r[u.id];if(n===void 0||n.length!==t){n=[];for(let e=0;e<t;e++)n[e]=[e,0];r[u.id]=n}for(let e=0;e<t;e++){let t=n[e];t[0]=e,t[1]=f[e]}n.sort(Tr);for(let e=0;e<8;e++)e<t&&n[e][1]?(s[e][0]=n[e][0],s[e][1]=n[e][1]):(s[e][0]=2**53-1,s[e][1]=0);s.sort(wr);let a=u.morphAttributes.position,o=u.morphAttributes.normal,c=0;for(let e=0;e<8;e++){let t=s[e],n=t[0],r=t[1];n!==2**53-1&&r?(a&&u.getAttribute(`morphTarget`+e)!==a[n]&&u.setAttribute(`morphTarget`+e,a[n]),o&&u.getAttribute(`morphNormal`+e)!==o[n]&&u.setAttribute(`morphNormal`+e,o[n]),i[e]=r,c+=r):(a&&u.hasAttribute(`morphTarget`+e)===!0&&u.deleteAttribute(`morphTarget`+e),o&&u.hasAttribute(`morphNormal`+e)===!0&&u.deleteAttribute(`morphNormal`+e),i[e]=0)}let l=u.morphTargetsRelative?1:1-c;d.getUniforms().setValue(e,`morphTargetBaseInfluence`,l),d.getUniforms().setValue(e,`morphTargetInfluences`,i)}}return{update:c}}function Dr(e,t,n,r){let i=/* @__PURE__ */ new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=/* @__PURE__ */ new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var Or=class extends _e{constructor(e,t,n,r,a,o,s,l,u,f){if(f=f===void 0?p:f,f!==1026&&f!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&f===1026&&(n=c),n===void 0&&f===1027&&(n=d),super(null,r,a,o,s,l,f,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s===void 0?i:s,this.minFilter=l===void 0?i:l,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};let kr=/*@__PURE__*/ new _e,Ar=/*@__PURE__*/ new Or(1,1);Ar.compareFunction=515;let jr=/*@__PURE__*/ new be,Mr=/*@__PURE__*/ new xe,Nr=/*@__PURE__*/ new Fn,Pr=[],Fr=[],Ir=/* @__PURE__ */ new Float32Array(16),Lr=/* @__PURE__ */ new Float32Array(9),Rr=/* @__PURE__ */ new Float32Array(4);function zr(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Pr[i];if(a===void 0&&(a=new Float32Array(i),Pr[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Br(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Vr(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Hr(e,t){let n=Fr[t];n===void 0&&(n=new Int32Array(t),Fr[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ur(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Wr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Br(n,t))return;e.uniform2fv(this.addr,t),Vr(n,t)}}function Gr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Br(n,t))return;e.uniform3fv(this.addr,t),Vr(n,t)}}function Kr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Br(n,t))return;e.uniform4fv(this.addr,t),Vr(n,t)}}function qr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Br(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Vr(n,t)}else{if(Br(n,r))return;Rr.set(r),e.uniformMatrix2fv(this.addr,!1,Rr),Vr(n,r)}}function Jr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Br(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Vr(n,t)}else{if(Br(n,r))return;Lr.set(r),e.uniformMatrix3fv(this.addr,!1,Lr),Vr(n,r)}}function Yr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Br(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Vr(n,t)}else{if(Br(n,r))return;Ir.set(r),e.uniformMatrix4fv(this.addr,!1,Ir),Vr(n,r)}}function Xr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Zr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Br(n,t))return;e.uniform2iv(this.addr,t),Vr(n,t)}}function Qr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Br(n,t))return;e.uniform3iv(this.addr,t),Vr(n,t)}}function $r(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Br(n,t))return;e.uniform4iv(this.addr,t),Vr(n,t)}}function ei(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ti(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Br(n,t))return;e.uniform2uiv(this.addr,t),Vr(n,t)}}function ni(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Br(n,t))return;e.uniform3uiv(this.addr,t),Vr(n,t)}}function ri(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Br(n,t))return;e.uniform4uiv(this.addr,t),Vr(n,t)}}function ii(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a=this.type===e.SAMPLER_2D_SHADOW?Ar:kr;n.setTexture2D(t||a,i)}function ai(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Mr,i)}function oi(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Nr,i)}function si(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||jr,i)}function ci(e){switch(e){case 5126:return Ur;case 35664:return Wr;case 35665:return Gr;case 35666:return Kr;case 35674:return qr;case 35675:return Jr;case 35676:return Yr;case 5124:case 35670:return Xr;case 35667:case 35671:return Zr;case 35668:case 35672:return Qr;case 35669:case 35673:return $r;case 5125:return ei;case 36294:return ti;case 36295:return ni;case 36296:return ri;case 35678:case 36198:case 36298:case 36306:case 35682:return ii;case 35679:case 36299:case 36307:return ai;case 35680:case 36300:case 36308:case 36293:return oi;case 36289:case 36303:case 36311:case 36292:return si}}function li(e,t){e.uniform1fv(this.addr,t)}function ui(e,t){let n=zr(t,this.size,2);e.uniform2fv(this.addr,n)}function di(e,t){let n=zr(t,this.size,3);e.uniform3fv(this.addr,n)}function fi(e,t){let n=zr(t,this.size,4);e.uniform4fv(this.addr,n)}function pi(e,t){let n=zr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function mi(e,t){let n=zr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function hi(e,t){let n=zr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function gi(e,t){e.uniform1iv(this.addr,t)}function _i(e,t){e.uniform2iv(this.addr,t)}function vi(e,t){e.uniform3iv(this.addr,t)}function yi(e,t){e.uniform4iv(this.addr,t)}function bi(e,t){e.uniform1uiv(this.addr,t)}function xi(e,t){e.uniform2uiv(this.addr,t)}function Si(e,t){e.uniform3uiv(this.addr,t)}function Ci(e,t){e.uniform4uiv(this.addr,t)}function wi(e,t,n){let r=this.cache,i=t.length,a=Hr(n,i);Br(r,a)||(e.uniform1iv(this.addr,a),Vr(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||kr,a[e])}function Ti(e,t,n){let r=this.cache,i=t.length,a=Hr(n,i);Br(r,a)||(e.uniform1iv(this.addr,a),Vr(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Mr,a[e])}function Ei(e,t,n){let r=this.cache,i=t.length,a=Hr(n,i);Br(r,a)||(e.uniform1iv(this.addr,a),Vr(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Nr,a[e])}function Di(e,t,n){let r=this.cache,i=t.length,a=Hr(n,i);Br(r,a)||(e.uniform1iv(this.addr,a),Vr(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||jr,a[e])}function Oi(e){switch(e){case 5126:return li;case 35664:return ui;case 35665:return di;case 35666:return fi;case 35674:return pi;case 35675:return mi;case 35676:return hi;case 5124:case 35670:return gi;case 35667:case 35671:return _i;case 35668:case 35672:return vi;case 35669:case 35673:return yi;case 5125:return bi;case 36294:return xi;case 36295:return Si;case 36296:return Ci;case 35678:case 36198:case 36298:case 36306:case 35682:return wi;case 35679:case 36299:case 36307:return Ti;case 35680:case 36300:case 36308:case 36293:return Ei;case 36289:case 36303:case 36311:case 36292:return Di}}var ki=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ci(t.type)}},Ai=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Oi(t.type)}},ji=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}};let Mi=/(\w+)(\])?(\[|\.)?/g;function Ni(e,t){e.seq.push(t),e.map[t.id]=t}function Pi(e,t,n){let r=e.name,i=r.length;for(Mi.lastIndex=0;;){let a=Mi.exec(r),o=Mi.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Ni(n,l===void 0?new ki(s,e,t):new Ai(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ji(s),Ni(n,e)),n=e}}}var Fi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Pi(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Ii(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}let Li=0;function Ri(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}function zi(e){let t=V.getPrimaries(V.workingColorSpace),n=V.getPrimaries(e),r;switch(t===n?r=``:t===`p3`&&n===`rec709`?r=`LinearDisplayP3ToLinearSRGB`:t===`rec709`&&n===`p3`&&(r=`LinearSRGBToLinearDisplayP3`),e){case C:case T:return[r,`LinearTransferOETF`];case S:case w:return[r,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space:`,e),[r,`LinearTransferOETF`]}}function Bi(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ri(e.getShaderSource(t),r)}return i}function Vi(e,t){let n=zi(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Hi(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`OptimizedCineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}function Ui(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID===`physical`?`#extension GL_OES_standard_derivatives : enable`:``,(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?`#extension GL_EXT_frag_depth : enable`:``,e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?`#extension GL_EXT_draw_buffers : require`:``,(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?`#extension GL_EXT_shader_texture_lod : enable`:``].filter(qi).join(`
`)}function Wi(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``].filter(qi).join(`
`)}function Gi(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ki(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function qi(e){return e!==``}function Ji(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yi(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}let Xi=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zi(e){return e.replace(Xi,$i)}let Qi=/* @__PURE__ */ new Map([[`encodings_fragment`,`colorspace_fragment`],[`encodings_pars_fragment`,`colorspace_pars_fragment`],[`output_fragment`,`opaque_fragment`]]);function $i(e,t){let n=Q[t];if(n===void 0){let e=Qi.get(t);if(e!==void 0)n=Q[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Zi(n)}let ea=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ta(e){return e.replace(ea,na)}function na(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function ra(e){let t=`precision `+e.precision+` float;
precision `+e.precision+` int;`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function ia(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function aa(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function oa(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function sa(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function ca(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function la(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=ia(n),l=aa(n),u=oa(n),d=sa(n),f=ca(n),p=n.isWebGL2?``:Ui(n),m=Wi(n),h=Gi(a),g=i.createProgram(),_,v,y=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(qi).join(`
`),_.length>0&&(_+=`
`),v=[p,`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(qi).join(`
`),v.length>0&&(v+=`
`)):(_=[ra(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors&&n.isWebGL2?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_TEXTURE`:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.useLegacyLights?`#define LEGACY_LIGHTS`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?`#define USE_LOGDEPTHBUF_EXT`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )`,`	attribute vec3 morphTarget0;`,`	attribute vec3 morphTarget1;`,`	attribute vec3 morphTarget2;`,`	attribute vec3 morphTarget3;`,`	#ifdef USE_MORPHNORMALS`,`		attribute vec3 morphNormal0;`,`		attribute vec3 morphNormal1;`,`		attribute vec3 morphNormal2;`,`		attribute vec3 morphNormal3;`,`	#else`,`		attribute vec3 morphTarget4;`,`		attribute vec3 morphTarget5;`,`		attribute vec3 morphTarget6;`,`		attribute vec3 morphTarget7;`,`	#endif`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(qi).join(`
`),v=[p,ra(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.useLegacyLights?`#define LEGACY_LIGHTS`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?`#define USE_LOGDEPTHBUF_EXT`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Q.tonemapping_pars_fragment,n.toneMapping===0?``:Hi(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Q.colorspace_pars_fragment,Vi(`linearToOutputTexel`,n.outputColorSpace),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(qi).join(`
`)),o=Zi(o),o=Ji(o,n),o=Yi(o,n),s=Zi(s),s=Ji(s,n),s=Yi(s,n),o=ta(o),s=ta(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[m,`precision mediump sampler2DArray;`,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+_,v=[`precision mediump sampler2DArray;`,`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+v);let b=y+_+o,x=y+v+s,S=Ii(i,i.VERTEX_SHADER,b),C=Ii(i,i.FRAGMENT_SHADER,x);i.attachShader(g,S),i.attachShader(g,C),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(g,0,`position`):i.bindAttribLocation(g,0,n.index0AttributeName),i.linkProgram(g);function w(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(g).trim(),r=i.getShaderInfoLog(S).trim(),a=i.getShaderInfoLog(C).trim(),o=!0,s=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1){if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,g,S,C);else{let e=Bi(i,S,`vertex`),t=Bi(i,C,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+n+`
`+e+`
`+t)}}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:_},fragmentShader:{log:a,prefix:v}})}i.deleteShader(S),i.deleteShader(C),T=new Fi(i,g),E=Ki(i,g)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(g,37297)),D},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Li++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=C,this}let ua=0;var da=class{constructor(){this.shaderCache=/* @__PURE__ */ new Map,this.materialCache=/* @__PURE__ */ new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=/* @__PURE__ */ new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new fa(e),t.set(e,n)),n}},fa=class{constructor(e){this.id=ua++,this.code=e,this.usedTimes=0}};function pa(e,t,n,r,i,a,o){let s=new ct,c=new da,l=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return e===0?`uv`:`uv${e}`}function g(a,s,l,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,w=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let T=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,E=T===void 0?0:T.length,D=0;y.morphAttributes.position!==void 0&&(D=1),y.morphAttributes.normal!==void 0&&(D=2),y.morphAttributes.color!==void 0&&(D=3);let O,k,A,j;if(w){let e=qn[w];O=e.vertexShader,k=e.fragmentShader}else O=a.vertexShader,k=a.fragmentShader,c.update(a),A=c.getVertexShaderID(a),j=c.getFragmentShaderID(a);let M=e.getRenderTarget(),N=_.isInstancedMesh===!0,ee=_.isBatchedMesh===!0,P=!!a.map,F=!!a.matcap,I=!!x,te=!!a.aoMap,ne=!!a.lightMap,re=!!a.bumpMap,L=!!a.normalMap,R=!!a.displacementMap,z=!!a.emissiveMap,B=!!a.metalnessMap,ie=!!a.roughnessMap,ae=a.anisotropy>0,oe=a.clearcoat>0,se=a.iridescence>0,ce=a.sheen>0,le=a.transmission>0,ue=ae&&!!a.anisotropyMap,de=oe&&!!a.clearcoatMap,fe=oe&&!!a.clearcoatNormalMap,pe=oe&&!!a.clearcoatRoughnessMap,me=se&&!!a.iridescenceMap,H=se&&!!a.iridescenceThicknessMap,U=ce&&!!a.sheenColorMap,W=ce&&!!a.sheenRoughnessMap,he=!!a.specularMap,G=!!a.specularColorMap,K=!!a.specularIntensityMap,ge=le&&!!a.transmissionMap,_e=le&&!!a.thicknessMap,q=!!a.gradientMap,ve=!!a.alphaMap,ye=a.alphaTest>0,be=!!a.alphaHash,xe=!!a.extensions,Se=!!y.attributes.uv1,J=!!y.attributes.uv2,Ce=!!y.attributes.uv3,we=0;return a.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(we=e.toneMapping),{isWebGL2:u,shaderID:w,shaderType:a.type,shaderName:a.name,vertexShader:O,fragmentShader:k,defines:a.defines,customVertexShaderID:A,customFragmentShaderID:j,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:ee,instancing:N,instancingColor:N&&_.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:M===null?e.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:C,map:P,matcap:F,envMap:I,envMapMode:I&&x.mapping,envMapCubeUVHeight:S,aoMap:te,lightMap:ne,bumpMap:re,normalMap:L,displacementMap:f&&R,emissiveMap:z,normalMapObjectSpace:L&&a.normalMapType===1,normalMapTangentSpace:L&&a.normalMapType===0,metalnessMap:B,roughnessMap:ie,anisotropy:ae,anisotropyMap:ue,clearcoat:oe,clearcoatMap:de,clearcoatNormalMap:fe,clearcoatRoughnessMap:pe,iridescence:se,iridescenceMap:me,iridescenceThicknessMap:H,sheen:ce,sheenColorMap:U,sheenRoughnessMap:W,specularMap:he,specularColorMap:G,specularIntensityMap:K,transmission:le,transmissionMap:ge,thicknessMap:_e,gradientMap:q,opaque:a.transparent===!1&&a.blending===1,alphaMap:ve,alphaTest:ye,alphaHash:be,combine:a.combine,mapUv:P&&h(a.map.channel),aoMapUv:te&&h(a.aoMap.channel),lightMapUv:ne&&h(a.lightMap.channel),bumpMapUv:re&&h(a.bumpMap.channel),normalMapUv:L&&h(a.normalMap.channel),displacementMapUv:R&&h(a.displacementMap.channel),emissiveMapUv:z&&h(a.emissiveMap.channel),metalnessMapUv:B&&h(a.metalnessMap.channel),roughnessMapUv:ie&&h(a.roughnessMap.channel),anisotropyMapUv:ue&&h(a.anisotropyMap.channel),clearcoatMapUv:de&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:fe&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:H&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:U&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:W&&h(a.sheenRoughnessMap.channel),specularMapUv:he&&h(a.specularMap.channel),specularColorMapUv:G&&h(a.specularColorMap.channel),specularIntensityMapUv:K&&h(a.specularIntensityMap.channel),transmissionMapUv:ge&&h(a.transmissionMap.channel),thicknessMapUv:_e&&h(a.thicknessMap.channel),alphaMapUv:ve&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(L||ae),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,vertexUv1s:Se,vertexUv2s:J,vertexUv3s:Ce,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(P||ve),fog:!!v,useFog:a.fog===!0,fogExp2:v&&v.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:D,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:we,useLegacyLights:e._useLegacyLights,decodeVideoTexture:P&&a.map.isVideoTexture===!0&&V.getTransfer(a.map.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionDerivatives:xe&&a.extensions.derivatives===!0,extensionFragDepth:xe&&a.extensions.fragDepth===!0,extensionDrawBuffers:xe&&a.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&a.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&a.extensions.clipCullDistance&&r.has(`WEBGL_clip_cull_distance`),rendererExtensionFragDepth:u||r.has(`EXT_frag_depth`),rendererExtensionDrawBuffers:u||r.has(`WEBGL_draw_buffers`),rendererExtensionShaderTextureLod:u||r.has(`EXT_shader_texture_lod`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()}}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.isWebGL2&&s.enable(0),t.supportsVertexTextures&&s.enable(1),t.instancing&&s.enable(2),t.instancingColor&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.skinning&&s.enable(4),t.morphTargets&&s.enable(5),t.morphNormals&&s.enable(6),t.morphColors&&s.enable(7),t.premultipliedAlpha&&s.enable(8),t.shadowMapEnabled&&s.enable(9),t.useLegacyLights&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=qn[t];n=On.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new la(e,n,t,a),l.push(r)),r}function S(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),e.destroy()}}function w(e){c.remove(e)}function T(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:w,programs:l,dispose:T}}function ma(){let e=/* @__PURE__ */ new WeakMap;function t(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function n(t){e.delete(t)}function r(t,n,r){e.get(t)[n]=r}function i(){e=/* @__PURE__ */ new WeakMap}return{get:t,remove:n,update:r,dispose:i}}function ha(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ga(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function _a(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||ha),r.length>1&&r.sort(t||ga),i.length>1&&i.sort(t||ga)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function va(){let e=/* @__PURE__ */ new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new _a,e.set(t,[i])):n>=r.length?(i=new _a,r.push(i)):i=r[n],i}function n(){e=/* @__PURE__ */ new WeakMap}return{get:t,dispose:n}}function ya(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new J,color:new X};break;case`SpotLight`:n={position:new J,direction:new J,color:new X,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new J,color:new X,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new J,skyColor:new X,groundColor:new X};break;case`RectAreaLight`:n={color:new X,position:new J,halfWidth:new J,halfHeight:new J}}return e[t.id]=n,n}}}function ba(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`SpotLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`PointLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}let xa=0;function Sa(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ca(e,t){let n=new ya,r=ba(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)i.probe.push(new J);let a=new J,o=new Ze,s=new Ze;function c(a,o){let s=0,c=0,l=0;for(let e=0;e<9;e++)i.probe[e].set(0,0,0);let u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0;a.sort(Sa);let x=o===!0?Math.PI:1;for(let e=0,t=a.length;e<t;e++){let t=a[e],o=t.color,S=t.intensity,C=t.distance,w=t.shadow&&t.shadow.map?t.shadow.map.texture:null;if(t.isAmbientLight)s+=o.r*S*x,c+=o.g*S*x,l+=o.b*S*x;else if(t.isLightProbe){for(let e=0;e<9;e++)i.probe[e].addScaledVector(t.sh.coefficients[e],S);b++}else if(t.isDirectionalLight){let e=n.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*x),t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,i.directionalShadow[u]=n,i.directionalShadowMap[u]=w,i.directionalShadowMatrix[u]=t.shadow.matrix,h++}i.directional[u]=e,u++}else if(t.isSpotLight){let e=n.get(t);e.position.setFromMatrixPosition(t.matrixWorld),e.color.copy(o).multiplyScalar(S*x),e.distance=C,e.coneCos=Math.cos(t.angle),e.penumbraCos=Math.cos(t.angle*(1-t.penumbra)),e.decay=t.decay,i.spot[f]=e;let a=t.shadow;if(t.map&&(i.spotLightMap[v]=t.map,v++,a.updateMatrices(t),t.castShadow&&y++),i.spotLightMatrix[f]=a.matrix,t.castShadow){let e=r.get(t);e.shadowBias=a.bias,e.shadowNormalBias=a.normalBias,e.shadowRadius=a.radius,e.shadowMapSize=a.mapSize,i.spotShadow[f]=e,i.spotShadowMap[f]=w,_++}f++}else if(t.isRectAreaLight){let e=n.get(t);e.color.copy(o).multiplyScalar(S),e.halfWidth.set(t.width*.5,0,0),e.halfHeight.set(0,t.height*.5,0),i.rectArea[p]=e,p++}else if(t.isPointLight){let e=n.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*x),e.distance=t.distance,e.decay=t.decay,t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,n.shadowCameraNear=e.camera.near,n.shadowCameraFar=e.camera.far,i.pointShadow[d]=n,i.pointShadowMap[d]=w,i.pointShadowMatrix[d]=t.shadow.matrix,g++}i.point[d]=e,d++}else if(t.isHemisphereLight){let e=n.get(t);e.skyColor.copy(t.color).multiplyScalar(S*x),e.groundColor.copy(t.groundColor).multiplyScalar(S*x),i.hemi[m]=e,m++}}p>0&&(t.isWebGL2?e.has(`OES_texture_float_linear`)===!0?(i.rectAreaLTC1=$.LTC_FLOAT_1,i.rectAreaLTC2=$.LTC_FLOAT_2):(i.rectAreaLTC1=$.LTC_HALF_1,i.rectAreaLTC2=$.LTC_HALF_2):e.has(`OES_texture_float_linear`)===!0?(i.rectAreaLTC1=$.LTC_FLOAT_1,i.rectAreaLTC2=$.LTC_FLOAT_2):e.has(`OES_texture_half_float_linear`)===!0?(i.rectAreaLTC1=$.LTC_HALF_1,i.rectAreaLTC2=$.LTC_HALF_2):console.error(`THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.`)),i.ambient[0]=s,i.ambient[1]=c,i.ambient[2]=l;let S=i.hash;(S.directionalLength!==u||S.pointLength!==d||S.spotLength!==f||S.rectAreaLength!==p||S.hemiLength!==m||S.numDirectionalShadows!==h||S.numPointShadows!==g||S.numSpotShadows!==_||S.numSpotMaps!==v||S.numLightProbes!==b)&&(i.directional.length=u,i.spot.length=f,i.rectArea.length=p,i.point.length=d,i.hemi.length=m,i.directionalShadow.length=h,i.directionalShadowMap.length=h,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=h,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=_+v-y,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=b,S.directionalLength=u,S.pointLength=d,S.spotLength=f,S.rectAreaLength=p,S.hemiLength=m,S.numDirectionalShadows=h,S.numPointShadows=g,S.numSpotShadows=_,S.numSpotMaps=v,S.numLightProbes=b,i.version=xa++)}function l(e,t){let n=0,r=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=i.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),a.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=i.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),a.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=i.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s.identity(),o.copy(f.matrixWorld),o.premultiply(d),s.extractRotation(o),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(s),e.halfHeight.applyMatrix4(s),l++}else if(f.isPointLight){let e=i.point[r];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),r++}else if(f.isHemisphereLight){let e=i.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:c,setupView:l,state:i}}function wa(e,t){let n=new Ca(e,t),r=[],i=[];function a(){r.length=0,i.length=0}function o(e){r.push(e)}function s(e){i.push(e)}function c(e){n.setup(r,e)}function l(e){n.setupView(r,e)}return{init:a,state:{lightsArray:r,shadowsArray:i,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Ta(e,t){let n=/* @__PURE__ */ new WeakMap;function r(r,i=0){let a=n.get(r),o;return a===void 0?(o=new wa(e,t),n.set(r,[o])):i>=a.length?(o=new wa(e,t),a.push(o)):o=a[i],o}function i(){n=/* @__PURE__ */ new WeakMap}return{get:r,dispose:i}}var Ea=class extends Vt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Da=class extends Vt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Oa(e,t,n){let r=new Un,a=new z,o=new z,s=new q,c=new Ea({depthPacking:3201}),l=new Da,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
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
}`}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new nn;h.setAttribute(`position`,new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Z(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,c){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==3&&this.type===3,h=v===3&&this.type!==3;for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){console.warn(`THREE.WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;a.copy(f.mapSize);let g=f.getFrameExtents();if(a.multiply(g),o.copy(f.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(o.x=Math.floor(d/g.x),a.x=o.x*g.x,f.mapSize.x=o.x),a.y>d&&(o.y=Math.floor(d/g.y),a.y=o.y*g.y,f.mapSize.y=o.y)),f.map===null||m===!0||h===!0){let e=this.type===3?{}:{minFilter:i,magFilter:i};f.map!==null&&f.map.dispose(),f.map=new ye(a.x,a.y,e),f.map.texture.name=u.name+`.shadowMap`,f.camera.updateProjectionMatrix()}e.setRenderTarget(f.map),e.clear();let _=f.getViewportCount();for(let e=0;e<_;e++){let t=f.getViewport(e);s.set(o.x*t.x,o.y*t.y,o.x*t.z,o.y*t.w),p.viewport(s),f.updateMatrices(u,e),r=f.getFrustum(),x(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&y(f,c),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(l,u,f)};function y(n,r){let i=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new ye(a.x,a.y)),p.uniforms.shadow_pass.value=n.map.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],i,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function ka(e,t,n){let r=n.isWebGL2;function i(){let t=!1,n=new q,r=null,i=new q(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function a(){let t=!1,n=null,r=null,i=null;return{setTest:function(t){t?ie(e.DEPTH_TEST):ae(e.DEPTH_TEST)},setMask:function(r){n!==r&&!t&&(e.depthMask(r),n=r)},setFunc:function(t){if(r!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}r=t}},setLocked:function(e){t=e},setClear:function(t){i!==t&&(e.clearDepth(t),i=t)},reset:function(){t=!1,n=null,r=null,i=null}}}function o(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ie(e.STENCIL_TEST):ae(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let s=new i,c=new a,l=new o,u=/* @__PURE__ */ new WeakMap,d=/* @__PURE__ */ new WeakMap,f={},p={},m=/* @__PURE__ */ new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new X(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,M=null,N=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),ee=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),ee=P>=1);let I=null,te={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),L=new q().fromArray(ne),R=new q().fromArray(re);function z(t,n,i,a){let o=/* @__PURE__ */ new Uint8Array(4),s=e.createTexture();e.bindTexture(t,s),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let s=0;s<i;s++)r&&(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)?e.texImage3D(n,0,e.RGBA,1,1,a,0,e.RGBA,e.UNSIGNED_BYTE,o):e.texImage2D(n+s,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,o);return s}let B={};B[e.TEXTURE_2D]=z(e.TEXTURE_2D,e.TEXTURE_2D,1),B[e.TEXTURE_CUBE_MAP]=z(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(B[e.TEXTURE_2D_ARRAY]=z(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),B[e.TEXTURE_3D]=z(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ie(e.DEPTH_TEST),c.setFunc(3),pe(!1),V(1),ie(e.CULL_FACE),de(0);function ie(t){f[t]!==!0&&(e.enable(t),f[t]=!0)}function ae(t){f[t]!==!1&&(e.disable(t),f[t]=!1)}function oe(t,n){return p[t]!==n&&(e.bindFramebuffer(t,n),p[t]=n,r&&(t===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=n)),!0)}function se(r,i){let a=h,o=!1;if(r){if(a=m.get(i),a===void 0&&(a=[],m.set(i,a)),r.isWebGLMultipleRenderTargets){let t=r.texture;if(a.length!==t.length||a[0]!==e.COLOR_ATTACHMENT0){for(let n=0,r=t.length;n<r;n++)a[n]=e.COLOR_ATTACHMENT0+n;a.length=t.length,o=!0}}else a[0]!==e.COLOR_ATTACHMENT0&&(a[0]=e.COLOR_ATTACHMENT0,o=!0)}else a[0]!==e.BACK&&(a[0]=e.BACK,o=!0);o&&(n.isWebGL2?e.drawBuffers(a):t.get(`WEBGL_draw_buffers`).drawBuffersWEBGL(a))}function ce(t){return g!==t&&(e.useProgram(t),g=t,!0)}let le={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};if(r)le[103]=e.MIN,le[104]=e.MAX;else{let e=t.get(`EXT_blend_minmax`);e!==null&&(le[103]=e.MIN_EXT,le[104]=e.MAX_EXT)}let ue={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function de(t,n,r,i,a,o,s,c,l,u){if(t===0)_===!0&&(ae(e.BLEND),_=!1);else if(_===!1&&(ie(e.BLEND),_=!0),t!==5){if(t!==v||u!==D){if((y!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,S=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}b=null,x=null,C=null,w=null,T.set(0,0,0),E=0,v=t,D=u}}else a||=n,o||=r,s||=i,(n!==y||a!==S)&&(e.blendEquationSeparate(le[n],le[a]),y=n,S=a),(r!==b||i!==x||o!==C||s!==w)&&(e.blendFuncSeparate(ue[r],ue[i],ue[o],ue[s]),b=r,x=i,C=o,w=s),(c.equals(T)===!1||l!==E)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),E=l),v=t,D=!1}function fe(t,n){t.side===2?ae(e.CULL_FACE):ie(e.CULL_FACE);let r=t.side===1;n&&(r=!r),pe(r),t.blending===1&&t.transparent===!1?de(0):de(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),c.setFunc(t.depthFunc),c.setTest(t.depthTest),c.setMask(t.depthWrite),s.setMask(t.colorWrite);let i=t.stencilWrite;l.setTest(i),i&&(l.setMask(t.stencilWriteMask),l.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),l.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),H(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ie(e.SAMPLE_ALPHA_TO_COVERAGE):ae(e.SAMPLE_ALPHA_TO_COVERAGE)}function pe(t){O!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),O=t)}function V(t){t===0?ae(e.CULL_FACE):(ie(e.CULL_FACE),t!==k&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),k=t}function me(t){t!==A&&(ee&&e.lineWidth(t),A=t)}function H(t,n,r){t?(ie(e.POLYGON_OFFSET_FILL),(j!==n||M!==r)&&(e.polygonOffset(n,r),j=n,M=r)):ae(e.POLYGON_OFFSET_FILL)}function U(t){t?ie(e.SCISSOR_TEST):ae(e.SCISSOR_TEST)}function W(t){t===void 0&&(t=e.TEXTURE0+N-1),I!==t&&(e.activeTexture(t),I=t)}function he(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+N-1:I);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||B[t]),i.type=t,i.texture=n)}function G(){let t=te[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function K(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ge(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function _e(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ve(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ye(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function be(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function xe(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Se(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function J(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ce(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(t){L.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),L.copy(t))}function Te(t){R.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),R.copy(t))}function Ee(t,n){let r=d.get(n);r===void 0&&(r=/* @__PURE__ */ new WeakMap,d.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Y(t,n){let r=d.get(n).get(t);u.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),u.set(n,r))}function De(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),r===!0&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),f={},I=null,te={},p={},m=/* @__PURE__ */ new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new X(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,M=null,L.set(0,0,e.canvas.width,e.canvas.height),R.set(0,0,e.canvas.width,e.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:ie,disable:ae,bindFramebuffer:oe,drawBuffers:se,useProgram:ce,setBlending:de,setMaterial:fe,setFlipSided:pe,setCullFace:V,setLineWidth:me,setPolygonOffset:H,setScissorTest:U,activeTexture:W,bindTexture:he,unbindTexture:G,compressedTexImage2D:K,compressedTexImage3D:ge,texImage2D:J,texImage3D:Ce,updateUBOMapping:Ee,uniformBlockBinding:Y,texStorage2D:xe,texStorage3D:Se,texSubImage2D:_e,texSubImage3D:ve,compressedTexSubImage2D:ye,compressedTexSubImage3D:be,scissor:we,viewport:Te,reset:De}}function Aa(e,s,l,u,f,p,m){let h=f.isWebGL2,g=s.has(`WEBGL_multisampled_render_to_texture`)?s.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=/* @__PURE__ */ new WeakMap,y,b=/* @__PURE__ */ new WeakMap,x=!1;try{x=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function S(e,t){return x?new OffscreenCanvas(e,t):oe(`canvas`)}function C(e,t,n,r){let i=1;if((e.width>r||e.height>r)&&(i=r/Math.max(e.width,e.height)),i<1||t===!0){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let r=t?re:Math.floor,a=r(i*e.width),o=r(i*e.height);y===void 0&&(y=S(a,o));let s=n?S(a,o):y;return s.width=a,s.height=o,s.getContext(`2d`).drawImage(e,0,0,a,o),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+e.width+`x`+e.height+`) to (`+a+`x`+o+`).`),s}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+e.width+`x`+e.height+`).`),e}return e}function w(e){return ne(e.width)&&ne(e.height)}function T(e){return h?!1:e.wrapS!==1001||e.wrapT!==1001||e.minFilter!==1003&&e.minFilter!==1006}function D(e,t){return e.generateMipmaps&&t&&e.minFilter!==1003&&e.minFilter!==1006}function O(t){e.generateMipmap(t)}function k(t,n,r,i,a=!1){if(h===!1)return n;if(t!==null){if(e[t]!==void 0)return e[t];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+t+`'`)}let o=n;if(n===e.RED&&(r===e.FLOAT&&(o=e.R32F),r===e.HALF_FLOAT&&(o=e.R16F),r===e.UNSIGNED_BYTE&&(o=e.R8)),n===e.RED_INTEGER&&(r===e.UNSIGNED_BYTE&&(o=e.R8UI),r===e.UNSIGNED_SHORT&&(o=e.R16UI),r===e.UNSIGNED_INT&&(o=e.R32UI),r===e.BYTE&&(o=e.R8I),r===e.SHORT&&(o=e.R16I),r===e.INT&&(o=e.R32I)),n===e.RG&&(r===e.FLOAT&&(o=e.RG32F),r===e.HALF_FLOAT&&(o=e.RG16F),r===e.UNSIGNED_BYTE&&(o=e.RG8)),n===e.RGBA){let t=a?E:V.getTransfer(i);r===e.FLOAT&&(o=e.RGBA32F),r===e.HALF_FLOAT&&(o=e.RGBA16F),r===e.UNSIGNED_BYTE&&(o=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),r===e.UNSIGNED_SHORT_4_4_4_4&&(o=e.RGBA4),r===e.UNSIGNED_SHORT_5_5_5_1&&(o=e.RGB5_A1)}return(o===e.R16F||o===e.R32F||o===e.RG16F||o===e.RG32F||o===e.RGBA16F||o===e.RGBA32F)&&s.get(`EXT_color_buffer_float`),o}function A(e,t,n){return D(e,n)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function j(t){return t===1003||t===1004||t===1005?e.NEAREST:e.LINEAR}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),ee(t),t.isVideoTexture&&v.delete(t)}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),F(t)}function ee(e){let t=u.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=b.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&P(e),Object.keys(r).length===0&&b.delete(n)}u.remove(e)}function P(t){let n=u.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=b.get(r);delete i[n.__cacheKey],m.memory.textures--}function F(t){let n=t.texture,r=u.get(t),i=u.get(n);if(i.__webglTexture!==void 0&&(e.deleteTexture(i.__webglTexture),m.memory.textures--),t.depthTexture&&t.depthTexture.dispose(),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(r.__webglFramebuffer[t]))for(let n=0;n<r.__webglFramebuffer[t].length;n++)e.deleteFramebuffer(r.__webglFramebuffer[t][n]);else e.deleteFramebuffer(r.__webglFramebuffer[t]);r.__webglDepthbuffer&&e.deleteRenderbuffer(r.__webglDepthbuffer[t])}else{if(Array.isArray(r.__webglFramebuffer))for(let t=0;t<r.__webglFramebuffer.length;t++)e.deleteFramebuffer(r.__webglFramebuffer[t]);else e.deleteFramebuffer(r.__webglFramebuffer);if(r.__webglDepthbuffer&&e.deleteRenderbuffer(r.__webglDepthbuffer),r.__webglMultisampledFramebuffer&&e.deleteFramebuffer(r.__webglMultisampledFramebuffer),r.__webglColorRenderbuffer)for(let t=0;t<r.__webglColorRenderbuffer.length;t++)r.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(r.__webglColorRenderbuffer[t]);r.__webglDepthRenderbuffer&&e.deleteRenderbuffer(r.__webglDepthRenderbuffer)}if(t.isWebGLMultipleRenderTargets)for(let t=0,r=n.length;t<r;t++){let r=u.get(n[t]);r.__webglTexture&&(e.deleteTexture(r.__webglTexture),m.memory.textures--),u.remove(n[t])}u.remove(n),u.remove(t)}let I=0;function te(){I=0}function L(){let e=I;return e>=f.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+f.maxTextures),I+=1,e}function R(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function z(t,n){let r=u.get(t);if(t.isVideoTexture&&ye(t),t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{fe(r,t,n);return}}l.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function B(t,n){let r=u.get(t);t.version>0&&r.__version!==t.version?fe(r,t,n):l.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n)}function ie(t,n){let r=u.get(t);t.version>0&&r.__version!==t.version?fe(r,t,n):l.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function ae(t,n){let r=u.get(t);t.version>0&&r.__version!==t.version?pe(r,t,n):l.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let se={[t]:e.REPEAT,[n]:e.CLAMP_TO_EDGE,[r]:e.MIRRORED_REPEAT},ce={[i]:e.NEAREST,1004:e.NEAREST_MIPMAP_NEAREST,1005:e.NEAREST_MIPMAP_LINEAR,[a]:e.LINEAR,1007:e.LINEAR_MIPMAP_NEAREST,[o]:e.LINEAR_MIPMAP_LINEAR},le={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ue(t,n,r){if(r?(e.texParameteri(t,e.TEXTURE_WRAP_S,se[n.wrapS]),e.texParameteri(t,e.TEXTURE_WRAP_T,se[n.wrapT]),(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)&&e.texParameteri(t,e.TEXTURE_WRAP_R,se[n.wrapR]),e.texParameteri(t,e.TEXTURE_MAG_FILTER,ce[n.magFilter]),e.texParameteri(t,e.TEXTURE_MIN_FILTER,ce[n.minFilter])):(e.texParameteri(t,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(t,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)&&e.texParameteri(t,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(n.wrapS!==1001||n.wrapT!==1001)&&console.warn(`THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.`),e.texParameteri(t,e.TEXTURE_MAG_FILTER,j(n.magFilter)),e.texParameteri(t,e.TEXTURE_MIN_FILTER,j(n.minFilter)),n.minFilter!==1003&&n.minFilter!==1006&&console.warn(`THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.`)),n.compareFunction&&(e.texParameteri(t,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(t,e.TEXTURE_COMPARE_FUNC,le[n.compareFunction])),s.has(`EXT_texture_filter_anisotropic`)===!0){let r=s.get(`EXT_texture_filter_anisotropic`);if(n.magFilter===1003||n.minFilter!==1005&&n.minFilter!==1008||n.type===1015&&s.has(`OES_texture_float_linear`)===!1||h===!1&&n.type===1016&&s.has(`OES_texture_half_float_linear`)===!1)return;(n.anisotropy>1||u.get(n).__currentAnisotropy)&&(e.texParameterf(t,r.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(n.anisotropy,f.getMaxAnisotropy())),u.get(n).__currentAnisotropy=n.anisotropy)}}function de(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,M));let i=n.source,a=b.get(i);a===void 0&&(a={},b.set(i,a));let o=R(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},m.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&P(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function fe(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=de(t,n),o=n.source;l.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=u.get(o);if(o.version!==s.__version||a===!0){l.activeTexture(e.TEXTURE0+r);let t=V.getPrimaries(V.workingColorSpace),u=n.colorSpace===``?null:V.getPrimaries(n.colorSpace),m=n.colorSpace===``||t===u?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,m);let g=T(n)&&w(n.image)===!1,_=C(n.image,g,!1,f.maxTextureSize);_=be(n,_);let v=w(_)||h,y=p.convert(n.format,n.colorSpace),b=p.convert(n.type),x=k(n.internalFormat,y,b,n.colorSpace,n.isVideoTexture);ue(i,n,v);let S,E=n.mipmaps,j=h&&n.isVideoTexture!==!0&&x!==36196,M=s.__version===void 0||a===!0,N=A(n,_,v);if(n.isDepthTexture)x=e.DEPTH_COMPONENT,h?x=n.type===1015?e.DEPTH_COMPONENT32F:n.type===1014?e.DEPTH_COMPONENT24:n.type===1020?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT16:n.type===1015&&console.error(`WebGLRenderer: Floating point depth texture requires WebGL2.`),n.format===1026&&x===e.DEPTH_COMPONENT&&n.type!==1012&&n.type!==1014&&(console.warn(`THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.`),n.type=c,b=p.convert(n.type)),n.format===1027&&x===e.DEPTH_COMPONENT&&(x=e.DEPTH_STENCIL,n.type!==1020&&(console.warn(`THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.`),n.type=d,b=p.convert(n.type))),M&&(j?l.texStorage2D(e.TEXTURE_2D,1,x,_.width,_.height):l.texImage2D(e.TEXTURE_2D,0,x,_.width,_.height,0,y,b,null));else if(n.isDataTexture){if(E.length>0&&v){j&&M&&l.texStorage2D(e.TEXTURE_2D,N,x,E[0].width,E[0].height);for(let t=0,n=E.length;t<n;t++)S=E[t],j?l.texSubImage2D(e.TEXTURE_2D,t,0,0,S.width,S.height,y,b,S.data):l.texImage2D(e.TEXTURE_2D,t,x,S.width,S.height,0,y,b,S.data);n.generateMipmaps=!1}else j?(M&&l.texStorage2D(e.TEXTURE_2D,N,x,_.width,_.height),l.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,y,b,_.data)):l.texImage2D(e.TEXTURE_2D,0,x,_.width,_.height,0,y,b,_.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){j&&M&&l.texStorage3D(e.TEXTURE_2D_ARRAY,N,x,E[0].width,E[0].height,_.depth);for(let t=0,r=E.length;t<r;t++)S=E[t],n.format===1023?j?l.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,S.width,S.height,_.depth,y,b,S.data):l.texImage3D(e.TEXTURE_2D_ARRAY,t,x,S.width,S.height,_.depth,0,y,b,S.data):y===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):j?l.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,S.width,S.height,_.depth,y,S.data,0,0):l.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,x,S.width,S.height,_.depth,0,S.data,0,0)}else{j&&M&&l.texStorage2D(e.TEXTURE_2D,N,x,E[0].width,E[0].height);for(let t=0,r=E.length;t<r;t++)S=E[t],n.format===1023?j?l.texSubImage2D(e.TEXTURE_2D,t,0,0,S.width,S.height,y,b,S.data):l.texImage2D(e.TEXTURE_2D,t,x,S.width,S.height,0,y,b,S.data):y===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):j?l.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,S.width,S.height,y,S.data):l.compressedTexImage2D(e.TEXTURE_2D,t,x,S.width,S.height,0,S.data)}}else if(n.isDataArrayTexture)j?(M&&l.texStorage3D(e.TEXTURE_2D_ARRAY,N,x,_.width,_.height,_.depth),l.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,_.width,_.height,_.depth,y,b,_.data)):l.texImage3D(e.TEXTURE_2D_ARRAY,0,x,_.width,_.height,_.depth,0,y,b,_.data);else if(n.isData3DTexture)j?(M&&l.texStorage3D(e.TEXTURE_3D,N,x,_.width,_.height,_.depth),l.texSubImage3D(e.TEXTURE_3D,0,0,0,0,_.width,_.height,_.depth,y,b,_.data)):l.texImage3D(e.TEXTURE_3D,0,x,_.width,_.height,_.depth,0,y,b,_.data);else if(n.isFramebufferTexture){if(M){if(j)l.texStorage2D(e.TEXTURE_2D,N,x,_.width,_.height);else{let t=_.width,n=_.height;for(let r=0;r<N;r++)l.texImage2D(e.TEXTURE_2D,r,x,t,n,0,y,b,null),t>>=1,n>>=1}}}else if(E.length>0&&v){j&&M&&l.texStorage2D(e.TEXTURE_2D,N,x,E[0].width,E[0].height);for(let t=0,n=E.length;t<n;t++)S=E[t],j?l.texSubImage2D(e.TEXTURE_2D,t,0,0,y,b,S):l.texImage2D(e.TEXTURE_2D,t,x,y,b,S);n.generateMipmaps=!1}else j?(M&&l.texStorage2D(e.TEXTURE_2D,N,x,_.width,_.height),l.texSubImage2D(e.TEXTURE_2D,0,0,0,y,b,_)):l.texImage2D(e.TEXTURE_2D,0,x,y,b,_);D(n,v)&&O(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function pe(t,n,r){if(n.image.length!==6)return;let i=de(t,n),a=n.source;l.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=u.get(a);if(a.version!==o.__version||i===!0){l.activeTexture(e.TEXTURE0+r);let t=V.getPrimaries(V.workingColorSpace),s=n.colorSpace===``?null:V.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let u=n.isCompressedTexture||n.image[0].isCompressedTexture,d=n.image[0]&&n.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!u&&!d?m[e]=C(n.image[e],!1,!0,f.maxCubemapSize):m[e]=d?n.image[e].image:n.image[e],m[e]=be(n,m[e]);let g=m[0],_=w(g)||h,v=p.convert(n.format,n.colorSpace),y=p.convert(n.type),b=k(n.internalFormat,v,y,n.colorSpace),x=h&&n.isVideoTexture!==!0,S=o.__version===void 0||i===!0,T=A(n,g,_);ue(e.TEXTURE_CUBE_MAP,n,_);let E;if(u){x&&S&&l.texStorage2D(e.TEXTURE_CUBE_MAP,T,b,g.width,g.height);for(let t=0;t<6;t++){E=m[t].mipmaps;for(let r=0;r<E.length;r++){let i=E[r];n.format===1023?x?l.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,v,y,i.data):l.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,b,i.width,i.height,0,v,y,i.data):v===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):x?l.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,v,i.data):l.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,b,i.width,i.height,0,i.data)}}}else{E=n.mipmaps,x&&S&&(E.length>0&&T++,l.texStorage2D(e.TEXTURE_CUBE_MAP,T,b,m[0].width,m[0].height));for(let t=0;t<6;t++)if(d){x?l.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,v,y,m[t].data):l.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,b,m[t].width,m[t].height,0,v,y,m[t].data);for(let n=0;n<E.length;n++){let r=E[n].image[t].image;x?l.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,v,y,r.data):l.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,b,r.width,r.height,0,v,y,r.data)}}else{x?l.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,v,y,m[t]):l.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,b,v,y,m[t]);for(let n=0;n<E.length;n++){let r=E[n];x?l.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,v,y,r.image[t]):l.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,b,v,y,r.image[t])}}}D(n,_)&&O(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function me(t,n,r,i,a,o){let s=p.convert(r.format,r.colorSpace),c=p.convert(r.type),d=k(r.internalFormat,s,c,r.colorSpace);if(!u.get(n).__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?l.texImage3D(a,o,d,t,r,n.depth,0,s,c,null):l.texImage2D(a,o,d,t,r,0,s,c,null)}l.bindFramebuffer(e.FRAMEBUFFER,t),ve(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,u.get(r).__webglTexture,0,q(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,u.get(r).__webglTexture,o),l.bindFramebuffer(e.FRAMEBUFFER,null)}function H(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer&&!n.stencilBuffer){let i=h===!0?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT16;if(r||ve(n)){let t=n.depthTexture;t&&t.isDepthTexture&&(t.type===1015?i=e.DEPTH_COMPONENT32F:t.type===1014&&(i=e.DEPTH_COMPONENT24));let r=q(n);ve(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,r,i,n.width,n.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,r,i,n.width,n.height)}else e.renderbufferStorage(e.RENDERBUFFER,i,n.width,n.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,t)}else if(n.depthBuffer&&n.stencilBuffer){let i=q(n);r&&ve(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,i,e.DEPTH24_STENCIL8,n.width,n.height):ve(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,i,e.DEPTH24_STENCIL8,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,t)}else{let t=n.isWebGLMultipleRenderTargets===!0?n.texture:[n.texture];for(let i=0;i<t.length;i++){let a=t[i],o=p.convert(a.format,a.colorSpace),s=p.convert(a.type),c=k(a.internalFormat,o,s,a.colorSpace),l=q(n);r&&ve(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,n.width,n.height):ve(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function U(t,n){if(n&&n.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(l.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);(!u.get(n.depthTexture).__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),z(n.depthTexture,0);let r=u.get(n.depthTexture).__webglTexture,i=q(n);if(n.depthTexture.format===1026)ve(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,r,0,i):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,r,0);else if(n.depthTexture.format===1027)ve(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,r,0,i):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,r,0);else throw Error(`Unknown depthTexture format`)}function he(t){let n=u.get(t),r=t.isWebGLCubeRenderTarget===!0;if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)throw Error(`target.depthTexture not supported in Cube render targets`);U(n.__webglFramebuffer,t)}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)l.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]=e.createRenderbuffer(),H(n.__webglDepthbuffer[r],t,!1)}else l.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer=e.createRenderbuffer(),H(n.__webglDepthbuffer,t,!1);l.bindFramebuffer(e.FRAMEBUFFER,null)}function G(t,n,r){let i=u.get(t);n!==void 0&&me(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&he(t)}function K(t){let n=t.texture,r=u.get(t),i=u.get(n);t.addEventListener(`dispose`,N),t.isWebGLMultipleRenderTargets!==!0&&(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,m.memory.textures++);let a=t.isWebGLCubeRenderTarget===!0,o=t.isWebGLMultipleRenderTargets===!0,s=w(t)||h;if(a){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(h&&n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(h&&n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(o){if(f.drawBuffers){let n=t.texture;for(let t=0,r=n.length;t<r;t++){let r=u.get(n[t]);r.__webglTexture===void 0&&(r.__webglTexture=e.createTexture(),m.memory.textures++)}}else console.warn(`THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.`)}if(h&&t.samples>0&&ve(t)===!1){let i=o?n:[n];r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],l.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<i.length;n++){let a=i[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=p.convert(a.format,a.colorSpace),s=p.convert(a.type),c=k(a.internalFormat,o,s,a.colorSpace,t.isXRRenderTarget===!0),l=q(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),H(r.__webglDepthRenderbuffer,t,!0)),l.bindFramebuffer(e.FRAMEBUFFER,null)}}if(a){l.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),ue(e.TEXTURE_CUBE_MAP,n,s);for(let i=0;i<6;i++)if(h&&n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)me(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else me(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);D(n,s)&&O(e.TEXTURE_CUBE_MAP),l.unbindTexture()}else if(o){let n=t.texture;for(let i=0,a=n.length;i<a;i++){let a=n[i],o=u.get(a);l.bindTexture(e.TEXTURE_2D,o.__webglTexture),ue(e.TEXTURE_2D,a,s),me(r.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,e.TEXTURE_2D,0),D(a,s)&&O(e.TEXTURE_2D)}l.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(h?a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY:console.error(`THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.`)),l.bindTexture(a,i.__webglTexture),ue(a,n,s),h&&n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)me(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else me(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);D(n,s)&&O(a),l.unbindTexture()}t.depthBuffer&&he(t)}function ge(t){let n=w(t)||h,r=t.isWebGLMultipleRenderTargets===!0?t.texture:[t.texture];for(let i=0,a=r.length;i<a;i++){let a=r[i];if(D(a,n)){let n=t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,r=u.get(a).__webglTexture;l.bindTexture(n,r),O(n),l.unbindTexture()}}}function _e(t){if(h&&t.samples>0&&ve(t)===!1){let n=t.isWebGLMultipleRenderTargets?t.texture:[t.texture],r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=[],s=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,c=u.get(t),d=t.isWebGLMultipleRenderTargets===!0;if(d)for(let t=0;t<n.length;t++)l.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),l.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);l.bindFramebuffer(e.READ_FRAMEBUFFER,c.__webglMultisampledFramebuffer),l.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglFramebuffer);for(let l=0;l<n.length;l++){o.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&o.push(s);let f=c.__ignoreDepthValues!==void 0&&c.__ignoreDepthValues;if(f===!1&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),d&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,c.__webglColorRenderbuffer[l]),f===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[s]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[s])),d){let t=u.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,o)}if(l.bindFramebuffer(e.READ_FRAMEBUFFER,null),l.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<n.length;t++){l.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,c.__webglColorRenderbuffer[t]);let r=u.get(n[t]).__webglTexture;l.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}l.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglMultisampledFramebuffer)}}function q(e){return Math.min(f.maxSamples,e.samples)}function ve(e){let t=u.get(e);return h&&e.samples>0&&s.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function ye(e){let t=m.render.frame;v.get(e)!==t&&(v.set(e,t),e.update())}function be(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||e.format===1035||n!==`srgb-linear`&&n!==``&&(V.getTransfer(n)===`srgb`?h===!1?s.has(`EXT_sRGB`)===!0&&r===1023?(e.format=1035,e.minFilter=a,e.generateMipmaps=!1):t=W.sRGBToLinear(t):(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}this.allocateTextureUnit=L,this.resetTextureUnits=te,this.setTexture2D=z,this.setTexture2DArray=B,this.setTexture3D=ie,this.setTextureCube=ae,this.rebindTextures=G,this.setupRenderTarget=K,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ve}function ja(e,t,n){let r=n.isWebGL2;function i(n,i=``){let a,o=V.getTransfer(i);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return r?e.HALF_FLOAT:(a=t.get(`OES_texture_half_float`),a===null?null:a.HALF_FLOAT_OES);if(n===1021)return e.ALPHA;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1035)return a=t.get(`EXT_sRGB`),a===null?null:a.SRGB_ALPHA_EXT;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(o===`srgb`){if(a=t.get(`WEBGL_compressed_texture_s3tc_srgb`),a!==null){if(n===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(a=t.get(`WEBGL_compressed_texture_s3tc`),a!==null){if(n===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(a=t.get(`WEBGL_compressed_texture_pvrtc`),a!==null){if(n===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196)return a=t.get(`WEBGL_compressed_texture_etc1`),a===null?null:a.COMPRESSED_RGB_ETC1_WEBGL;if(n===37492||n===37496){if(a=t.get(`WEBGL_compressed_texture_etc`),a!==null){if(n===37492)return o===`srgb`?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===37496)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(a=t.get(`WEBGL_compressed_texture_astc`),a!==null){if(n===37808)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(a=t.get(`EXT_texture_compression_bptc`),a!==null){if(n===36492)return o===`srgb`?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(a=t.get(`EXT_texture_compression_rgtc`),a!==null){if(n===36492)return a.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?r?e.UNSIGNED_INT_24_8:(a=t.get(`WEBGL_depth_texture`),a===null?null:a.UNSIGNED_INT_24_8_WEBGL):e[n]===void 0?null:e[n]}return{convert:i}}var Ma=class extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Na=class extends St{constructor(){super(),this.isGroup=!0,this.type=`Group`}};let Pa={type:`move`};var Fa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pa)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Na;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ia=class extends j{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,l=1,u=null,m=null,h=null,g=null,_=null,v=null,y=t.getContextAttributes(),b=null,x=null,S=[],C=[],w=new z,T=null,E=new Nn;E.layers.enable(1),E.viewport=new q;let D=new Nn;D.layers.enable(2),D.viewport=new q;let O=[E,D],k=new Ma;k.layers.enable(1),k.layers.enable(2);let A=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=S[e];return t===void 0&&(t=new Fa,S[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=S[e];return t===void 0&&(t=new Fa,S[e]=t),t.getGripSpace()},this.getHand=function(e){let t=S[e];return t===void 0&&(t=new Fa,S[e]=t),t.getHandSpace()};function M(e){let t=C.indexOf(e.inputSource);if(t===-1)return;let n=S[t];n!==void 0&&(n.update(e.inputSource,e.frame,u||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function N(){r.removeEventListener(`select`,M),r.removeEventListener(`selectstart`,M),r.removeEventListener(`selectend`,M),r.removeEventListener(`squeeze`,M),r.removeEventListener(`squeezestart`,M),r.removeEventListener(`squeezeend`,M),r.removeEventListener(`end`,N),r.removeEventListener(`inputsourceschange`,P);for(let e=0;e<S.length;e++){let t=C[e];t!==null&&(C[e]=null,S[e].disconnect(t))}A=null,j=null,e.setRenderTarget(b),_=null,g=null,h=null,r=null,x=null,B.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(e){u=e},this.getBaseLayer=function(){return g===null?_:g},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(m){if(r=m,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,M),r.addEventListener(`selectstart`,M),r.addEventListener(`selectend`,M),r.addEventListener(`squeeze`,M),r.addEventListener(`squeezestart`,M),r.addEventListener(`squeezeend`,M),r.addEventListener(`end`,N),r.addEventListener(`inputsourceschange`,P),y.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let n={antialias:r.renderState.layers!==void 0||y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};_=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),x=new ye(_.framebufferWidth,_.framebufferHeight,{format:f,type:s,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?1027:p,a=y.stencil?d:c);let l={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};h=new XRWebGLBinding(r,t),g=h.createProjectionLayer(l),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),x=new ye(g.textureWidth,g.textureHeight,{format:f,type:s,depthTexture:new Or(g.textureWidth,g.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let u=e.properties.get(x);u.__ignoreDepthValues=g.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),B.setContext(r),B.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=C.indexOf(n);r>=0&&(C[r]=null,S[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=C.indexOf(n);if(r===-1){for(let e=0;e<S.length;e++)if(e>=C.length){C.push(n),r=e;break}else if(C[e]===null){C[e]=n,r=e;break}if(r===-1)break}let i=S[r];i&&i.connect(n)}}let F=new J,I=new J;function te(e,t,n){F.setFromMatrixPosition(t.matrixWorld),I.setFromMatrixPosition(n.matrixWorld);let r=F.distanceTo(I),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert();let g=o+m,_=s+m,v=f-h,y=p+(r-h),b=c*s/_*g,x=l*s/_*g;e.projectionMatrix.makePerspective(v,y,b,x,g,_),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}function ne(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;k.near=D.near=E.near=e.near,k.far=D.far=E.far=e.far,(A!==k.near||j!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),A=k.near,j=k.far);let t=e.parent,n=k.cameras;ne(k,t);for(let e=0;e<n.length;e++)ne(n[e],t);n.length===2?te(k,E,D):k.projectionMatrix.copy(E.projectionMatrix),re(e,k,t)};function re(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ee*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(g!==null||_!==null)return l},this.setFoveation=function(e){l=e,g!==null&&(g.fixedFoveation=e),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=e)};let L=null;function R(t,r){if(m=r.getViewerPose(u||a),v=r,m!==null){let t=m.views;_!==null&&(e.setRenderTargetFramebuffer(x,_.framebuffer),e.setRenderTarget(x));let n=!1;t.length!==k.cameras.length&&(k.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(_!==null)a=_.getViewport(i);else{let t=h.getViewSubImage(g,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(x,t.colorTexture,g.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(x))}let o=O[r];o===void 0&&(o=new Nn,o.layers.enable(r),o.viewport=new q,O[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(k.matrix.copy(o.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),n===!0&&k.cameras.push(o)}}for(let e=0;e<S.length;e++){let t=C[e],n=S[e];t!==null&&n!==void 0&&n.update(t,r,u||a)}L&&L(t,r),r.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:r}),v=null}let B=new Wn;B.setAnimationLoop(R),this.setAnimationLoop=function(e){L=e},this.dispose=function(){}}};function La(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Dn(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(r,i){r.opacity.value=i.opacity,i.color&&r.diffuse.value.copy(i.color),i.emissive&&r.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),i.map&&(r.map.value=i.map,n(i.map,r.mapTransform)),i.alphaMap&&(r.alphaMap.value=i.alphaMap,n(i.alphaMap,r.alphaMapTransform)),i.bumpMap&&(r.bumpMap.value=i.bumpMap,n(i.bumpMap,r.bumpMapTransform),r.bumpScale.value=i.bumpScale,i.side===1&&(r.bumpScale.value*=-1)),i.normalMap&&(r.normalMap.value=i.normalMap,n(i.normalMap,r.normalMapTransform),r.normalScale.value.copy(i.normalScale),i.side===1&&r.normalScale.value.negate()),i.displacementMap&&(r.displacementMap.value=i.displacementMap,n(i.displacementMap,r.displacementMapTransform),r.displacementScale.value=i.displacementScale,r.displacementBias.value=i.displacementBias),i.emissiveMap&&(r.emissiveMap.value=i.emissiveMap,n(i.emissiveMap,r.emissiveMapTransform)),i.specularMap&&(r.specularMap.value=i.specularMap,n(i.specularMap,r.specularMapTransform)),i.alphaTest>0&&(r.alphaTest.value=i.alphaTest);let a=t.get(i).envMap;if(a&&(r.envMap.value=a,r.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=i.reflectivity,r.ior.value=i.ior,r.refractionRatio.value=i.refractionRatio),i.lightMap){r.lightMap.value=i.lightMap;let t=e._useLegacyLights===!0?Math.PI:1;r.lightMapIntensity.value=i.lightMapIntensity*t,n(i.lightMap,r.lightMapTransform)}i.aoMap&&(r.aoMap.value=i.aoMap,r.aoMapIntensity.value=i.aoMapIntensity,n(i.aoMap,r.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,r){e.metalness.value=r.metalness,r.metalnessMap&&(e.metalnessMap.value=r.metalnessMap,n(r.metalnessMap,e.metalnessMapTransform)),e.roughness.value=r.roughness,r.roughnessMap&&(e.roughnessMap.value=r.roughnessMap,n(r.roughnessMap,e.roughnessMapTransform)),t.get(r).envMap&&(e.envMapIntensity.value=r.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ra(e,t,n,r){let i={},a={},o=[],s=n.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16;o!==0&&16-o<a.boundary&&(n+=16-o),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var za=class{constructor(e={}){let{canvas:t=se(),context:n=null,depth:r=!0,stencil:i=!0,alpha:a=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:d=!1,powerPreference:f=`default`,failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;m=n===null?a:n.getContextAttributes().alpha;let h=/* @__PURE__ */ new Uint32Array(4),g=/* @__PURE__ */ new Int32Array(4),_=null,v=null,y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=S,this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;let x=this,w=!1,T=0,E=0,D=null,O=-1,k=null,A=new q,j=new q,M=null,N=new X(0),ee=0,P=t.width,F=t.height,I=1,te=null,ne=null,L=new q(0,0,P,F),R=new q(0,0,P,F),B=!1,ie=new Un,ae=!1,oe=!1,ce=null,le=new Ze,ue=new z,de=new J,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return D===null?I:1}let V=n;function me(e,n){for(let r=0;r<e.length;r++){let i=e[r],a=t.getContext(i,n);if(a!==null)return a}return null}try{let e={alpha:!0,depth:r,stencil:i,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:d,powerPreference:f,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r160`),t.addEventListener(`webglcontextlost`,Ie,!1),t.addEventListener(`webglcontextrestored`,Le,!1),t.addEventListener(`webglcontextcreationerror`,Re,!1),V===null){let t=[`webgl2`,`webgl`,`experimental-webgl`];if(x.isWebGL1Renderer===!0&&t.shift(),V=me(t,e),V===null)throw me(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}typeof WebGLRenderingContext<`u`&&V instanceof WebGLRenderingContext&&console.warn(`THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163.`),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let H,U,W,he,G,K,ge,_e,ve,be,xe,Se,Ce,we,Te,Ee,Y,De,Oe,ke,Ae,je,Me,Ne;function Pe(){H=new br(V),U=new Qn(V,H,e),H.init(U),je=new ja(V,H,U),W=new ka(V,H,U),he=new Cr(V),G=new ma,K=new Aa(V,H,W,G,U,je,he),ge=new er(x),_e=new yr(x),ve=new Gn(V,U),Me=new Xn(V,H,ve,U),be=new xr(V,ve,he,Me),xe=new Dr(V,be,ve,he),Oe=new Er(V,U,K),Ee=new $n(G),Se=new pa(x,ge,_e,H,U,Me,Ee),Ce=new La(x,G),we=new va,Te=new Ta(H,U),De=new Yn(x,ge,_e,W,xe,m,l),Y=new Oa(x,xe,U),Ne=new Ra(V,he,U,W),ke=new Zn(V,H,he,U),Ae=new Sr(V,H,he,U),he.programs=Se.programs,x.capabilities=U,x.extensions=H,x.properties=G,x.renderLists=we,x.shadowMap=Y,x.state=W,x.info=he}Pe();let Fe=new Ia(x,V);this.xr=Fe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let e=H.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=H.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(e){e!==void 0&&(I=e,this.setSize(P,F,!1))},this.getSize=function(e){return e.set(P,F)},this.setSize=function(e,n,r=!0){Fe.isPresenting?console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`):(P=e,F=n,t.width=Math.floor(e*I),t.height=Math.floor(n*I),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(P*I,F*I).floor()},this.setDrawingBufferSize=function(e,n,r){P=e,F=n,I=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(A)},this.getViewport=function(e){return e.copy(L)},this.setViewport=function(e,t,n,r){e.isVector4?L.set(e.x,e.y,e.z,e.w):L.set(e,t,n,r),W.viewport(A.copy(L).multiplyScalar(I).floor())},this.getScissor=function(e){return e.copy(R)},this.setScissor=function(e,t,n,r){e.isVector4?R.set(e.x,e.y,e.z,e.w):R.set(e,t,n,r),W.scissor(j.copy(R).multiplyScalar(I).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(e){W.setScissorTest(B=e)},this.setOpaqueSort=function(e){te=e},this.setTransparentSort=function(e){ne=e},this.getClearColor=function(e){return e.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(D!==null){let t=D.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=D.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=De.getClearColor(),r=De.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(h[0]=i,h[1]=a,h[2]=o,h[3]=r,V.clearBufferuiv(V.COLOR,0,h)):(g[0]=i,g[1]=a,g[2]=o,g[3]=r,V.clearBufferiv(V.COLOR,0,g))}else r|=V.COLOR_BUFFER_BIT}t&&(r|=V.DEPTH_BUFFER_BIT),n&&(r|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ie,!1),t.removeEventListener(`webglcontextrestored`,Le,!1),t.removeEventListener(`webglcontextcreationerror`,Re,!1),we.dispose(),Te.dispose(),G.dispose(),ge.dispose(),_e.dispose(),xe.dispose(),Me.dispose(),Ne.dispose(),Se.dispose(),Fe.dispose(),Fe.removeEventListener(`sessionstart`,Ge),Fe.removeEventListener(`sessionend`,Ke),ce&&=(ce.dispose(),null),qe.stop()};function Ie(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),w=!0}function Le(){console.log(`THREE.WebGLRenderer: Context Restored.`),w=!1;let e=he.autoReset,t=Y.enabled,n=Y.autoUpdate,r=Y.needsUpdate,i=Y.type;Pe(),he.autoReset=e,Y.enabled=t,Y.autoUpdate=n,Y.needsUpdate=r,Y.type=i}function Re(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ze(e){let t=e.target;t.removeEventListener(`dispose`,ze),Be(t)}function Be(e){Ve(e),G.remove(e)}function Ve(e){let t=G.get(e).programs;t!==void 0&&(t.forEach(function(e){Se.releaseProgram(e)}),e.isShaderMaterial&&Se.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=fe);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=rt(e,t,n,r,i);W.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=be.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Me.setup(i,r,s,n,c);let h,g=ke;if(c!==null&&(h=ve.get(c),g=Ae,g.setIndex(h)),i.isMesh)r.wireframe===!0?(W.setLineWidth(r.wireframeLinewidth*pe()),g.setMode(V.LINES)):g.setMode(V.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),W.setLineWidth(e*pe()),i.isLineSegments?g.setMode(V.LINES):i.isLineLoop?g.setMode(V.LINE_LOOP):g.setMode(V.LINE_STRIP)}else i.isPoints?g.setMode(V.POINTS):i.isSprite&&g.setMode(V.TRIANGLES);if(i.isBatchedMesh)g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function He(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,et(e,t,n),e.side=0,e.needsUpdate=!0,et(e,t,n),e.side=2):et(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),v=Te.get(n),v.init(),b.push(v),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(v.pushLight(e),e.castShadow&&v.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(v.pushLight(e),e.castShadow&&v.pushShadow(e))}),v.setupLights(x._useLegacyLights);let r=/* @__PURE__ */ new Set;return e.traverse(function(e){let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];He(a,n,e),r.add(a)}else He(t,n,e),r.add(t)}}),b.pop(),v=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){G.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}H.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Ue=null;function We(e){Ue&&Ue(e)}function Ge(){qe.stop()}function Ke(){qe.start()}let qe=new Wn;qe.setAnimationLoop(We),typeof self<`u`&&qe.setContext(self),this.setAnimationLoop=function(e){Ue=e,Fe.setAnimationLoop(e),e===null?qe.stop():qe.start()},Fe.addEventListener(`sessionstart`,Ge),Fe.addEventListener(`sessionend`,Ke),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(w===!0)return;e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(t),t=Fe.getCamera()),e.isScene===!0&&e.onBeforeRender(x,e,t,D),v=Te.get(e,b.length),v.init(),b.push(v),le.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ie.setFromProjectionMatrix(le),oe=this.localClippingEnabled,ae=Ee.init(this.clippingPlanes,oe),_=we.get(e,y.length),_.init(),y.push(_),Je(e,t,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(te,ne),this.info.render.frame++,ae===!0&&Ee.beginShadows();let n=v.state.shadowsArray;if(Y.render(n,e,t),ae===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),De.render(_,e),v.setupLights(x._useLegacyLights),t.isArrayCamera){let n=t.cameras;for(let t=0,r=n.length;t<r;t++){let r=n[t];Ye(_,e,r,r.viewport)}}else Ye(_,e,t);D!==null&&(K.updateMultisampleRenderTarget(D),K.updateRenderTargetMipmap(D)),e.isScene===!0&&e.onAfterRender(x,e,t),Me.resetDefaultState(),O=-1,k=null,b.pop(),v=b.length>0?b[b.length-1]:null,y.pop(),_=y.length>0?y[y.length-1]:null};function Je(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)v.pushLight(e),e.castShadow&&v.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ie.intersectsSprite(e)){r&&de.setFromMatrixPosition(e.matrixWorld).applyMatrix4(le);let t=xe.update(e),i=e.material;i.visible&&_.push(e,t,i,n,de.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ie.intersectsObject(e))){let t=xe.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),de.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),de.copy(e.boundingSphere.center)),de.applyMatrix4(e.matrixWorld).applyMatrix4(le)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&_.push(e,t,s,n,de.z,o)}}else i.visible&&_.push(e,t,i,n,de.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Je(i[e],t,n,r)}function Ye(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;v.setupLightsView(n),ae===!0&&Ee.setGlobalState(x.clippingPlanes,n),a.length>0&&Xe(i,a,t,n),r&&W.viewport(A.copy(r)),i.length>0&&Qe(i,t,n),a.length>0&&Qe(a,t,n),o.length>0&&Qe(o,t,n),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function Xe(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;let i=U.isWebGL2;ce===null&&(ce=new ye(1,1,{generateMipmaps:!0,type:H.has(`EXT_color_buffer_half_float`)?u:s,minFilter:o,samples:i?4:0})),x.getDrawingBufferSize(ue),i?ce.setSize(ue.x,ue.y):ce.setSize(re(ue.x),re(ue.y));let a=x.getRenderTarget();x.setRenderTarget(ce),x.getClearColor(N),ee=x.getClearAlpha(),ee<1&&x.setClearColor(16777215,.5),x.clear();let c=x.toneMapping;x.toneMapping=0,Qe(e,n,r),K.updateMultisampleRenderTarget(ce),K.updateRenderTargetMipmap(ce);let l=!1;for(let e=0,i=t.length;e<i;e++){let i=t[e],a=i.object,o=i.geometry,s=i.material,c=i.group;if(s.side===2&&a.layers.test(r.layers)){let e=s.side;s.side=1,s.needsUpdate=!0,$e(a,n,r,o,s,c),s.side=e,s.needsUpdate=!0,l=!0}}l===!0&&(K.updateMultisampleRenderTarget(ce),K.updateRenderTargetMipmap(ce)),x.setRenderTarget(a),x.setClearColor(N,ee),x.toneMapping=c}function Qe(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&$e(o,t,n,s,c,l)}}function $e(e,t,n,r,i,a){e.onBeforeRender(x,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(x,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,x.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,x.renderBufferDirect(n,t,r,i,e,a),i.side=2):x.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(x,t,n,r,i,a)}function et(e,t,n){t.isScene!==!0&&(t=fe);let r=G.get(e),i=v.state.lights,a=v.state.shadowsArray,o=i.state.version,s=Se.getParameters(e,i.state,a,t,n),c=Se.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?_e:ge).get(e.envMap||r.environment),l===void 0&&(e.addEventListener(`dispose`,ze),l=/* @__PURE__ */ new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return nt(e,s),u}else s.uniforms=Se.getUniforms(e),e.onBuild(n,s,x),e.onBeforeCompile(s,x),u=Se.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Ee.uniform),nt(e,s),r.needsLights=at(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function tt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Fi.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function nt(e,t){let n=G.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function rt(e,t,n,r,i){t.isScene!==!0&&(t=fe),K.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:C,c=(r.isMeshStandardMaterial?_e:ge).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(m=x.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,_=G.get(r),y=v.state.lights;if(ae===!0&&(oe===!0||e!==k)){let t=e===k&&r.id===O;Ee.setState(r,e,t)}let b=!1;r.version===_.__version?_.needsLights&&_.lightsStateVersion!==y.state.version?b=!0:_.outputColorSpace===s?i.isBatchedMesh&&_.batching===!1||!i.isBatchedMesh&&_.batching===!0||i.isInstancedMesh&&_.instancing===!1||!i.isInstancedMesh&&_.instancing===!0||i.isSkinnedMesh&&_.skinning===!1||!i.isSkinnedMesh&&_.skinning===!0||i.isInstancedMesh&&_.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&_.instancingColor===!1&&i.instanceColor!==null?b=!0:_.envMap===c?r.fog===!0&&_.fog!==a||_.numClippingPlanes!==void 0&&(_.numClippingPlanes!==Ee.numPlanes||_.numIntersection!==Ee.numIntersection)?b=!0:_.vertexAlphas===l&&_.vertexTangents===u&&_.morphTargets===d&&_.morphNormals===f&&_.morphColors===p&&_.toneMapping===m?U.isWebGL2===!0&&_.morphTargetsCount!==g&&(b=!0):b=!0:b=!0:b=!0:(b=!0,_.__version=r.version);let S=_.currentProgram;b===!0&&(S=et(r,t,i));let w=!1,T=!1,E=!1,A=S.getUniforms(),j=_.uniforms;if(W.useProgram(S.program)&&(w=!0,T=!0,E=!0),r.id!==O&&(O=r.id,T=!0),w||k!==e){A.setValue(V,`projectionMatrix`,e.projectionMatrix),A.setValue(V,`viewMatrix`,e.matrixWorldInverse);let t=A.map.cameraPosition;t!==void 0&&t.setValue(V,de.setFromMatrixPosition(e.matrixWorld)),U.logarithmicDepthBuffer&&A.setValue(V,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&A.setValue(V,`isOrthographic`,e.isOrthographicCamera===!0),k!==e&&(k=e,T=!0,E=!0)}if(i.isSkinnedMesh){A.setOptional(V,i,`bindMatrix`),A.setOptional(V,i,`bindMatrixInverse`);let e=i.skeleton;e&&(U.floatVertexTextures?(e.boneTexture===null&&e.computeBoneTexture(),A.setValue(V,`boneTexture`,e.boneTexture,K)):console.warn(`THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.`))}i.isBatchedMesh&&(A.setOptional(V,i,`batchingTexture`),A.setValue(V,`batchingTexture`,i._matricesTexture,K));let M=n.morphAttributes;if((M.position!==void 0||M.normal!==void 0||M.color!==void 0&&U.isWebGL2===!0)&&Oe.update(i,n,S),(T||_.receiveShadow!==i.receiveShadow)&&(_.receiveShadow=i.receiveShadow,A.setValue(V,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(j.envMap.value=c,j.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),T&&(A.setValue(V,`toneMappingExposure`,x.toneMappingExposure),_.needsLights&&it(j,E),a&&r.fog===!0&&Ce.refreshFogUniforms(j,a),Ce.refreshMaterialUniforms(j,r,I,F,ce),Fi.upload(V,tt(_),j,K)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Fi.upload(V,tt(_),j,K),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&A.setValue(V,`center`,i.center),A.setValue(V,`modelViewMatrix`,i.modelViewMatrix),A.setValue(V,`normalMatrix`,i.normalMatrix),A.setValue(V,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++)if(U.isWebGL2){let n=e[t];Ne.update(n,S),Ne.bind(n,S)}else console.warn(`THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.`)}return S}function it(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function at(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(e,t,n){G.get(e.texture).__webglTexture=t,G.get(e.depthTexture).__webglTexture=n;let r=G.get(e);r.__hasExternalTextures=!0,r.__hasExternalTextures&&(r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||H.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(e,t){let n=G.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){D=e,T=t,E=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=G.get(e);s.__useDefaultFramebuffer===void 0?s.__webglFramebuffer===void 0?K.setupRenderTarget(e):s.__hasExternalTextures&&K.rebindTextures(e,G.get(e.texture).__webglTexture,G.get(e.depthTexture).__webglTexture):(W.bindFramebuffer(V.FRAMEBUFFER,null),r=!1);let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=G.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=U.isWebGL2&&e.samples>0&&K.useMultisampledRTT(e)===!1?G.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,A.copy(e.viewport),j.copy(e.scissor),M=e.scissorTest}else A.copy(L).multiplyScalar(I).floor(),j.copy(R).multiplyScalar(I).floor(),M=B;if(W.bindFramebuffer(V.FRAMEBUFFER,i)&&U.drawBuffers&&r&&W.drawBuffers(e,i),W.viewport(A),W.scissor(j),W.setScissorTest(M),a){let r=G.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=G.get(e.texture),i=t||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}O=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=G.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){W.bindFramebuffer(V.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(s!==1023&&je.convert(s)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}let l=c===1016&&(H.has(`EXT_color_buffer_half_float`)||U.isWebGL2&&H.has(`EXT_color_buffer_float`));if(c!==1009&&je.convert(c)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(c===1015&&(U.isWebGL2||H.has(`OES_texture_float`)||H.has(`WEBGL_color_buffer_float`)))&&!l){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&V.readPixels(t,n,r,i,je.convert(s),je.convert(c),a)}finally{let e=D===null?null:G.get(D).__webglFramebuffer;W.bindFramebuffer(V.FRAMEBUFFER,e)}}},this.copyFramebufferToTexture=function(e,t,n=0){let r=2**-n,i=Math.floor(t.image.width*r),a=Math.floor(t.image.height*r);K.setTexture2D(t,0),V.copyTexSubImage2D(V.TEXTURE_2D,n,0,0,e.x,e.y,i,a),W.unbindTexture()},this.copyTextureToTexture=function(e,t,n,r=0){let i=t.image.width,a=t.image.height,o=je.convert(n.format),s=je.convert(n.type);K.setTexture2D(n,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,n.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,n.unpackAlignment),t.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,r,e.x,e.y,i,a,o,s,t.image.data):t.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,r,e.x,e.y,t.mipmaps[0].width,t.mipmaps[0].height,o,t.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,r,e.x,e.y,o,s,t.image),r===0&&n.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),W.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n,r,i=0){if(x.isWebGL1Renderer){console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.`);return}let a=e.max.x-e.min.x+1,o=e.max.y-e.min.y+1,s=e.max.z-e.min.z+1,c=je.convert(r.format),l=je.convert(r.type),u;if(r.isData3DTexture)K.setTexture3D(r,0),u=V.TEXTURE_3D;else if(r.isDataArrayTexture||r.isCompressedArrayTexture)K.setTexture2DArray(r,0),u=V.TEXTURE_2D_ARRAY;else{console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.`);return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,r.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,r.unpackAlignment);let d=V.getParameter(V.UNPACK_ROW_LENGTH),f=V.getParameter(V.UNPACK_IMAGE_HEIGHT),p=V.getParameter(V.UNPACK_SKIP_PIXELS),m=V.getParameter(V.UNPACK_SKIP_ROWS),h=V.getParameter(V.UNPACK_SKIP_IMAGES),g=n.isCompressedTexture?n.mipmaps[i]:n.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,g.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,g.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,e.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,e.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,e.min.z),n.isDataTexture||n.isData3DTexture?V.texSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,l,g.data):n.isCompressedArrayTexture?(console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.`),V.compressedTexSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,g.data)):V.texSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,l,g),V.pixelStorei(V.UNPACK_ROW_LENGTH,d),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,f),V.pixelStorei(V.UNPACK_SKIP_PIXELS,p),V.pixelStorei(V.UNPACK_SKIP_ROWS,m),V.pixelStorei(V.UNPACK_SKIP_IMAGES,h),i===0&&r.generateMipmaps&&V.generateMipmap(u),W.unbindTexture()},this.initTexture=function(e){e.isCubeTexture?K.setTextureCube(e,0):e.isData3DTexture?K.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?K.setTexture2DArray(e,0):K.setTexture2D(e,0),W.unbindTexture()},this.resetState=function(){T=0,E=0,D=null,W.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return A}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===`display-p3`?`display-p3`:`srgb`,t.unpackColorSpace=V.workingColorSpace===`display-p3-linear`?`display-p3`:`srgb`}get outputEncoding(){return console.warn(`THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead.`),this.outputColorSpace===`srgb`?x:b}set outputEncoding(e){console.warn(`THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead.`),this.outputColorSpace=e===3001?S:C}get useLegacyLights(){return console.warn(`THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.`),this._useLegacyLights}set useLegacyLights(e){console.warn(`THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.`),this._useLegacyLights=e}},Ba=class extends za{};Ba.prototype.isWebGL1Renderer=!0;var Va=class extends St{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Ha=class extends _e{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ua=class e extends nn{constructor(e=[new z(0,-.5),new z(.5,0),new z(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=F(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new J,d=new z,f=new J,p=new J,m=new J,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new Jt(a,3)),this.setAttribute(`uv`,new Jt(o,2)),this.setAttribute(`normal`,new Jt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},Wa=class e extends nn{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Jt(u,3)),this.setAttribute(`normal`,new Jt(d,3)),this.setAttribute(`uv`,new Jt(f,2));function _(){let a=new J,_=new J,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let e=0;e<r;e++)for(let t=0;t<i;t++){let n=m[t][e],r=m[t+1][e],i=m[t+1][e+1],a=m[t][e+1];l.push(n,r,a),l.push(r,i,a),v+=6}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new z,m=new J,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ga=class e extends nn{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],s=[],c=[],l=new J,u=new J,d=new J;for(let a=0;a<=n;a++)for(let f=0;f<=r;f++){let p=f/r*i,m=a/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(p),u.y=(e+t*Math.cos(m))*Math.sin(p),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),l.x=e*Math.cos(p),l.y=e*Math.sin(p),d.subVectors(u,l).normalize(),s.push(d.x,d.y,d.z),c.push(f/r),c.push(a/n)}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,o=(r+1)*(e-1)+t,s=(r+1)*e+t;a.push(n,i,s),a.push(i,o,s)}this.setIndex(a),this.setAttribute(`position`,new Jt(o,3)),this.setAttribute(`normal`,new Jt(s,3)),this.setAttribute(`uv`,new Jt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Ka=class extends jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},qa=class extends Vt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:``},this.type=`MeshStandardMaterial`,this.color=new X(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new X(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ja=class extends qa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return F(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new X(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new X(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new X(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Ya(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Xa(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Za=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Qa=class extends Za{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_,endingEnd:_}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case v:i=e,o=2*t-n;break;case y:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case v:a=e,s=2*n-t;break;case y:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},$a=class extends Za{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},eo=class extends Za{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},to=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ya(t,this.TimeBufferType),this.values=Ya(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ya(e.times,Array),values:Ya(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case m:t=this.InterpolantFactoryMethodDiscrete;break;case h:t=this.InterpolantFactoryMethodLinear;break;case g:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return m;case this.InterpolantFactoryMethodLinear:return h;case this.InterpolantFactoryMethodSmooth:return g}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Xa(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===g,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};to.prototype.TimeBufferType=Float32Array,to.prototype.ValueBufferType=Float32Array,to.prototype.DefaultInterpolation=h;var no=class extends to{};no.prototype.ValueTypeName=`bool`,no.prototype.ValueBufferType=Array,no.prototype.DefaultInterpolation=m,no.prototype.InterpolantFactoryMethodLinear=void 0,no.prototype.InterpolantFactoryMethodSmooth=void 0;var ro=class extends to{};ro.prototype.ValueTypeName=`color`;var io=class extends to{};io.prototype.ValueTypeName=`number`;var ao=class extends Za{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Se.slerpFlat(i,0,a,c-o,a,c,s);return i}},oo=class extends to{InterpolantFactoryMethodLinear(e){return new ao(this.times,this.values,this.getValueSize(),e)}};oo.prototype.ValueTypeName=`quaternion`,oo.prototype.DefaultInterpolation=h,oo.prototype.InterpolantFactoryMethodSmooth=void 0;var so=class extends to{};so.prototype.ValueTypeName=`string`,so.prototype.ValueBufferType=Array,so.prototype.DefaultInterpolation=m,so.prototype.InterpolantFactoryMethodLinear=void 0,so.prototype.InterpolantFactoryMethodSmooth=void 0;var co=class extends to{};co.prototype.ValueTypeName=`vector`;let lo={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},uo=/*@__PURE__*/ new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null}}};var fo=class{constructor(e){this.manager=e===void 0?uo:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};fo.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var po=class extends fo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=lo.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;let o=oe(`img`);function s(){l(),lo.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}},mo=class extends fo{constructor(e){super(e)}load(e,t,n,r){let i=new _e,a=new po(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},ho=class extends St{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new X(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};let go=/*@__PURE__*/ new Ze,_o=/*@__PURE__*/ new J,vo=/*@__PURE__*/ new J;var yo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new z(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Un,this._frameExtents=new z(1,1),this._viewportCount=1,this._viewports=[new q(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;_o.setFromMatrixPosition(e.matrixWorld),t.position.copy(_o),vo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vo),t.updateMatrixWorld(),go.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(go),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(go)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};let bo=/*@__PURE__*/ new Ze,xo=/*@__PURE__*/ new J,So=/*@__PURE__*/ new J;var Co=class extends yo{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new z(4,2),this._viewportCount=6,this._viewports=[new q(2,1,1,1),new q(0,1,1,1),new q(3,1,1,1),new q(1,1,1,1),new q(3,0,1,1),new q(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),xo.setFromMatrixPosition(e.matrixWorld),n.position.copy(xo),So.copy(n.position),So.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(So),n.updateMatrixWorld(),r.makeTranslation(-xo.x,-xo.y,-xo.z),bo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bo)}},wo=class extends ho{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Co}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},To=class extends yo{constructor(){super(new tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Eo=class extends ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new To}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Do=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Oo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Oo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Oo(){return(typeof performance>`u`?Date:performance).now()}let ko=/* @__PURE__ */ RegExp(`[\\[\\]\\.:\\/]`,`g`),Ao=/* @__PURE__ */ RegExp(`^((?:[^\\[\\]\\.:\\/]+[\\/:])*)([^\\[\\]:\\/]+)?(?:\\.([^\\[\\]\\.:\\/]+)(?:\\[(.+)\\])?)?\\.([^\\[\\]\\.:\\/]+)(?:\\[(.+)\\])?$`),jo=[`material`,`materials`,`bones`,`map`];var Mo=class{constructor(e,t,n){let r=n||No.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},No=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(ko,``)}static parseTrackName(e){let t=Ao.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);jo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};No.Composite=Mo,No.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},No.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},No.prototype.GetterByBindingType=[No.prototype._getValue_direct,No.prototype._getValue_array,No.prototype._getValue_arrayElement,No.prototype._getValue_toArray],No.prototype.SetterByBindingTypeAndVersioning=[[No.prototype._setValue_direct,No.prototype._setValue_direct_setNeedsUpdate,No.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[No.prototype._setValue_array,No.prototype._setValue_array_setNeedsUpdate,No.prototype._setValue_array_setMatrixWorldNeedsUpdate],[No.prototype._setValue_arrayElement,No.prototype._setValue_arrayElement_setNeedsUpdate,No.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[No.prototype._setValue_fromArray,No.prototype._setValue_fromArray_setNeedsUpdate,No.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`160`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`160`);var Po=class extends Va{constructor(e=null){super();let t=new Cn;t.deleteAttribute(`uv`);let n=new qa({side:1}),r=new qa,i=5;e!==null&&e._useLegacyLights===!1&&(i=900);let a=new wo(16777215,i,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new Z(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let s=new Z(t,r);s.position.set(-10.906,2.009,1.846),s.rotation.set(0,-.195,0),s.scale.set(2.328,7.905,4.651),this.add(s);let c=new Z(t,r);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let l=new Z(t,r);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let u=new Z(t,r);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new Z(t,r);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let f=new Z(t,r);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let p=new Z(t,Fo(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);let m=new Z(t,Fo(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);let h=new Z(t,Fo(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let g=new Z(t,Fo(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);let _=new Z(t,Fo(20));_.position.set(3.235,11.486,-12.541),_.scale.set(2.5,2,.1),this.add(_);let v=new Z(t,Fo(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){let e=/* @__PURE__ */ new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Fo(e){let t=new Ht;return t.color.setScalar(e),t}let Io={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Lo=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}};let Ro=new tr(-1,1,1,-1,0,1),zo=new class extends nn{constructor(){super(),this.setAttribute(`position`,new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new Jt([0,2,0,0,2,0],2))}};var Bo=class{constructor(e){this._mesh=new Z(zo,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ro)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Vo=class extends Lo{constructor(e,t){super(),this.textureID=t===void 0?`tDiffuse`:t,e instanceof jn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=On.clone(e.uniforms),this.material=new jn({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Bo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}},Ho=class extends Lo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Uo=class extends Lo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Wo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new z);this._width=n.width,this._height=n.height,t=new ye(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:u}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vo(Io),this.copyPass.material.blending=0,this.clock=new Do}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Ho!==void 0&&(r instanceof Ho?n=!0:r instanceof Uo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Go=class extends Lo{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new X}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}};let Ko={name:`LuminosityHighPassShader`,shaderID:`luminosityHighPass`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new X(0)},defaultOpacity:{value:0}},vertexShader:`

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

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var qo=class e extends Lo{constructor(e,t,n,r){super(),this.strength=t===void 0?1:t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new z(256,256):new z(e.x,e.y),this.clearColor=new X(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ye(i,a,{type:u}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new ye(i,a,{type:u});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new ye(i,a,{type:u});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Ko;this.highPassUniforms=On.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new jn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[3,5,7,9,11];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new z(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new J(1,1,1),new J(1,1,1),new J(1,1,1),new J(1,1,1),new J(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let l=Io;this.copyUniforms=On.clone(l.uniforms),this.blendMaterial=new jn({uniforms:this.copyUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new X,this.oldClearAlpha=1,this.basic=new Ht,this.fsQuad=new Bo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new z(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this.fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this.fsQuad.render(t),s=this.renderTargetsVertical[n];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(r),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new jn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new z(.5,.5)},direction:{value:new z(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new jn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};qo.BlurDirectionX=new z(1,0),qo.BlurDirectionY=new z(0,1);let Jo={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Yo=class extends Lo{constructor(){super();let e=Jo;this.uniforms=On.clone(e.uniforms),this.material=new Ka({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Bo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},V.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6&&(this.material.defines.AGX_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};let Xo={home:`data:image/webp;base64,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`,home_alert:`data:image/webp;base64,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`,lift:`data:image/webp;base64,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`,sip:`data:image/webp;base64,UklGRsYkAABXRUJQVlA4ILokAACwogCdASoAAgABPmEqk0ckIiGhJVA7qIAMCWlu04Z+h3UAeoqwBsQGAPEz7gn8R/P+/AeTuxX8gOyaPL+m/gBdAH4AVaF+QfgBdxU8i1+RvGB4pfTPws/gH78+0P5D9C/Vfw0/pX+0/3H3oX/7SPsW6C/O/6Gf2XgH8lPmz2Avcf17fETDw6I0Cfif9B/iP3NemV+5frz7FfjX8o/jewPfY/UH/jv+Q9Z7/889X8//ufW0//ZX2OF1YpvqdoYf0VQbXZGB8vPfRBeKVHukcLshQNS7ISc9yonj784VyJ8vFR9WqdTdPJRecFVl+IdMKod+eUqqjWhlJAg+VEDJNibrgzpNsAo0AiAfwre4jg8awrDl5WX6IB1YNwAaUo+zahEEPgV+RXwiIOJABlH7k1hIT2OGUVsHGJOspxEYoq8OUz1Iex4JapCYEhpXsHh2dv7/2BLIzRcO+lxgYUha5M2CKPlIs0FT/tal2qUSKcLxCkrsgXuSyxlt/uNEP/p+RpN0Qur/B+i9Ob7FHl37iE3XNZIBSFTRO8ofv1edwc41KaslAJg//eiNVNgzH11EowP53C9T69fFTMytoOcYAVYvaGy80ULFIkfXujmbImIFFF+0ENQP+b0EMYzVG0PUeiFv6p+0zAT+JDYZmp2ujgshWIyqhVjRzHY6iZJ5lo/HyEBHeIkPHZu/n0ztmpCwWTgWcdZaIO8f5+6Oio4/pf+j/FKPwXPHqhDmqJMGQz7a3aOhsImn848pDOqlQEGXah9YoKVDXJoYxzWKeXzcLlY/j8CZH77k0ICSHLgyD+gldpDKvnke0scMDsNSRO+ok1BeUL3Bn0I+Xz9tewQB+15xRHvkRV/Yuo1m2iS87ddH+nPCo0QutrjwXpUxfZzUUI2xmwE7/C7Eo5bfECndlA7FlHoEvUf0UHCZGDfJ9ITBeTX55KGBDn0pStBeAnml+7Dx6EVh5O2/m7IIjfoa5fqW1bkOM0ZgSJ0B+KzQi1G6W6bp5w8E3wV02uB8dksZ0vhIMSZCUUvXpQpNZo9ocvCi2KgkVHuOppNqI4XhD0phxAA8CkIvgBktOcJu23NEfPTFixIfAYTst4uGUQd/HMexF5FY+iTE4apuJ1kLUFY/1JpCOyEsQyxmNx8ivdq7mmAojF5gi5hkEsCyIEyu1cXLcXAkV9WXoBpgiDs//4oZMnqgrPmoLU7VmE88abi77E6ZYGlSkShi23Xp2Bjf72eEQqj3dAhJG5Z2FuUoP+Bn4MWB47Q9YRo1YdKH+mAAhzHYDOG+T+P8JkRegSQxwEXzr5ICz/PWtQkBaWrWjK1eOK7+Ehlt/1bYXffw7HQr5WzxOg/eLCz0cFpWNoZVZpqj3oBqF/Nc04enqq9S5a0U+6+YXYqJxsQ9MOurpVJqrzf7Wj7w04FmdtlFmJtdslKrjpRrfYPcWnSlLykWaSALKz2v50SQ+/XcS23jeSlskviYCjOaPeqF0QVq06/fobeeDqI1eHTRJ6FsBkLf2iBkTK1tdKGVpZvwXQe/2brwfmegLjzcYx55dqZkvhU+m8NC/0+9Oe847LVYQ0nwf5Kr+bEpGs8BNz/xwt+FJ/NBkl/YyM2RM+fi4FBbzfRWsBGDvLUKO5AwJkNUS1mO7JyuXbr4gMpz7HlDoFSAoOQMvqrvF7bAsyqO3cqJ+Fhk0T95LoJrH/kUrjTU0Tq2Zc9gi1awSmmgwMdAOcLsq1FB2Hj0hQNS7IUDUuyFA1LrUAD+8T42LosCiUzy5UmiDWxgSFbxj0RnHJeU49gFiIKRMWxJ24bRB7e/Wob90zE0Fci/AjO+Whuzsri0VFejcXm2AhkkqZ4xo1gMAAAFZU8NaR9VBXDTr8L94Yps6ywCXtEV2ARmoBv+AS0ZYTA/bzk/WzvgJjHhzj0fT9wSCeIriUOXSG5e9OSyphT9pn/G2MVcAWvEfvAEIlzR/1YAVKK5hOY/WE80pEi0D7vJA+IYs0iqYd0Hrz7s0lel10/HteLEnnZgy3vFvrSVNUbraegloWFqem7S5xLxi0Lh0Ne2gXQamv9hOv9h92PwWL40XHRp5Cf7DuLSesNwSS62biNj727jZcHzdbmcafv02pdgkgL6CYDgwLMGkj/sz44yUaRz7cx0EyPAZBM/IE6RniLMzJAXqrzO5SkD+Y9D45ANwGCaOZr2IoTCwko3QqVgGZQe3cfKcYhdKhYUXeqPgUJpjY6295j/g4BFMAPao2tVTKvbxmf0kPFz+p2W87nP60AoWMA8+el7u+NFxy0nZiJYIu7PneGviRglYawQ2SZseOz8shEVOckkSf5m9MKdV72VLK13leIVwt+KABXYg4qMlWF2Kqxrdeh6uTVFDCn7C35+vrN5cUGAdXBmZyoSfd2qNtcRrDORqyIrFiLn8/WPVZs/0OG/Mj4tUKvE3/JNinD5BkDQFEEtfDRyO+cohWnTBl7nl3WwLhEaTx9f+p81oj+vh3hRhnURB4KIwwIZ3iqDksuHf4dpKpkywD3hhc0iObA7o0u3Hq0fS5zdStVzVgfjaoX0JOKyDt5IGwkHsNOs6B6ncycw0WlC4pAS9Hd/zHGPX36dki7ngntEsDkrEtHSILtUFMeOlryhgmrD7cJIoaPWuVC0ixT4X3lcjy6NWmfEyHxY/V3bs9StZFiK6s5hhuDRKOvqtYc3ZLJfoGnWcInTBsjwINOBk3QqPygWhAwm//ZSg1tedtYg9f/ov5KNpFsN/pX3gOdWXVQugHYIQNCBGPf9p6LuGawEqTYjUX9lv13XXviqPdFjHT40IIdhrvjfdHWqU2BoMEMEszSGq3DJk61uDRhTmFGB/WuJkRUkrPIXVL0CEEnRQ4puv3lsSLTtAJgBMDS8S4AbO6yjsreVyO+SNikhUTLNKEVT5YYP5V9e09EFf0x8ELTwERsE6QK0T9I/3xyrRlTzaAYF4EX8c+Zh6MWyfoFT0bL79QG14kpx1AR1+ji8kYPsyPI61y1VjdlfFbcKpb7kpWcdcGL3qfIFPZd/VCzKZiWVMegdW5tKSIRKMcrUZnRi3Ew7zxXGAERvrCsf21GL6PGqFowiDl5JRXVyE0WielVCk7eIY+oDTMQSvz7+Vk93apH52gbd/9irZNKwH+o8lDlgEYgGooGagv0q2bZy6XZlutTDh1lj7G0A9dxlFjVBJZRS+ifnT7O5kVG8Hf68869IQlovhP07A6RBOw9tGK+IbhcpfAdpaDccoAdFMpqQFvgxvuLcGw7QLD7D2QooaBDabRBWK4SvIsSnuD00qnTLuTHn97neeuGmIZmZoF8l/VnZxWPxZblNQfW1iJEr20Umvp8MuZIUWBRo9xqIEBZWTzLj3W4qHz1lL4oHFy9Qe+vtOwqbbg7gIyH0oGbunYMvZ4aMu/4X5YHkwHYpGHVCC7LdHq2zQl6EeUUiopCaJ/Vbw4cz8Iw5+jXwXiB2+5+ycQ+YtcdiNiU/PjfskIGeREiHqALgLt35gs8a8y9vlpX+I6h59bFrswpv6pHUt+w7JJnVRGyc0hpo53mKIsXyyiEsk6Og8UlxqBp6HPAUmI6fAaZ3Y7uJfgUBvatTOVziHn9BJYTpf3DJ7JR9DCUkC10I767o4xwtWkx6rAXl2BB2w4yNKWuNnEdvSIefq/oWNs/GBe7l6Q6FrkUrKwEEyGf/GkRoGXMBu9ai6B4RUuiL33fwlGwQf8WssURgcacPZ/8YGuLiJZGlO23dVO7rarhVS6tFmfA4vt8v8M5GG26SVQ4wSjtbg6Y6547xB2G4dYgyjQLvcnfJ3+z/wCMoV4N+UxwTA0FrG9pp5LzXkbk4Kf524Td9UYWkXWyk3SGevNc9pIcX5yE9Nic6N3gZGyqMX+zUA1FWPWVdY4A/ZxHWuwv71xWgll7lVczwHA1KtEEA9sS1TA4kO/610BgV4yqnjkzx2KOaBDwsIXQ9T2igMsV2h8H4DhRSHqPfdW1tPGbvj2OiFEx1jt9DA5rjTH2vrYHqFYerf78iHW6cvA0d8mWM1n32+jj1D4IxcgJo8BSje4U6f3hl+fLaHebEQsjdVe9XGht8R/uq2YGEV4zDYl+Jlo2cJmUplll59zCFevuHiiKZ1NQkscibopAQtm/mCBXVZd937YHc65NG9WDiyBY9o/niPhZWxpxoH/BM6RlqcRfavzwCR7gdv1+xSg9Wa7VdmEGrMSb2epaIyFJ2+6CBrUej+FK9tphYEEglROXbIlYNyr1eOWMTQeHwVj9JeOAuaj3aqKGLx0kybxN2pBCa7N5CvuYtYAgF/eygYPW14Nepm5krZdK4tykhJGelfxxQNr8z/qfVNacTb4092vxO6EyC04Rzr0sXy/7G2Y1H/G0w+vf5S+zYyptl436XuTbpeqq8fSEsAfr529YaSRMPVGxutrPMUPCSI1hQeCBhVH1rxuzn1PPIyXRNEUYa3CA8OqBrmfaBn+2UcETSl2+060iw1694X9SdFjplMPWk4oon2Hsgi0CRqIbNGXFpKvYNI4iB2umo/XKqX4+OnYyx3qpv2htJyp9P58rla+8sGlClMsyXfUFdKjEQ/FBzk/3dxvissvwG8YJQ5sMUCrYev9oLgVohjlgnTDeXGHJT2mlOO3oa3gjiSo77Rot77uU3odlDeSTtIBOWGcGCmwcQY0YbazodHvhP80tqdKRWd+Dry3ZO8A5rhQuW8pk9Ujhxsn0NIz4r240VlJQHnjpjiYPrQSfEF3WWhCvGJgqCZhYvRRfcVzC9izz2gmhuPEy0VB0yh/prkxe+xxMFnHYhg4mOZQscDkcGDoa/pzpLDWeQhsKK2n+H3oIRmSYEyJKkjLadijwODjW6iF67CzO/loPQBw8iv4oa9e92QGMpU7bd0aVK6h43fuxlwEyUL7bKL+pH82WuhlKGqzzvqFuv4k9B8I/BNAhV3+V29qIzo+mRltFJG5B/uFk/WKe8IoilQhc88T2SXIlXE+sKEqmEMreu4X4SPUncqcUIDL2Mw1oXL5bDiTUf6hpX9uIe4oig64wLkJInAccJ53xj9vIHK2gDi0d3Stkg6GZXzlXFMfQOsD9Y8qAMMR1jJnW22uSLUOQKFOIy185DTijZXnjxOtqZToDNqgW7eERSx0OA5H70QLFlByee0E6za/RRfq/PxvggPJnweUElqDXUcz7WiRbhUsCTPPfXsKKn4jx7yPIIOtbfQJE7PV4LL5TmtZG0kShJzvDc/dmg/dUUAhS6JTKHZsqN8exEx0xUyDkXOssGjDHbvrurFkP99y1ERhzqHxgv7fv2YA4tsFPS4HgEe+wiF3IXvDJlXEaykfDkD0jHq27wWbztBs3kXwQDRc8lLgXudwDh66Zqg8xFDE85FljsbiFvxTnS1A8ONOKQD+T4Us8+CzfAxT5RzVqXuCQP4ZdQKSJcSSNoZG4S3J4+JT8T+IlVLuizMDSngzwRgFK4jpM26QntAefA+Q9/xJe54IA2gu3n3pqewnRlrbdmSvQPk+0iHjayWO2h88bWSx0ioLBtsiEfhj6WYbtt1LMoYb/BUuDKWQvsTBIl2mJUxnStorVeTn6/IQy6z2v6qyTtBfqBvGUt/mooSXtlAhSp/ASoioCUh1y4f05z+5j/+Vf/y61Xwn3khQjzcwvYjzczMaKg9+OXc8jWhgYXT4ChkqmnbXDtGG60MPpQNxKBU1lUqD/KuYdRvcuUJ1V2tXGT82Xwm3mwfI/UGTg2b5RSwxGvDuT+3WCx5iwX1DslF+PbpuQhy1L0PqgaSU/GZjV8qIAbhNKSi8axLHSVmvTHz4N92/LDtIzVO3VDlIkuil26u0BfgTvqnRlkYstNizyH5bw+gGgTFdbGFHQ3GrqxFOaKtQSrqhmxmdgO3TyyRvuS6GyelcQkJxV17pBXRMHPgp7cCddVPvVAbVqnYxUPZ0tVNuau7JPyB3Gu/sv0M+6QjFmv1JOwh4TBkk+A+2IufsFH6PB7J5ivnXuSpt0WrxwFIN0F1Rq1rEekAo7vHC21WRhaRhrSONIe7e85wwbvEl0UHX93niPQbp3qvjctHgFyUnfHSQWjbe8jWDtjGCRLY2qZ8CMd/Wocj2MO9Fsfd2qcXTxd5ohG7AIoRsGHQ1THZCSk31CE3MpezGxSlP+Rcc6ATGk1oLO+0z4VbgENJGYyDBLa8DWtwn6g0JJYPQxNySDxWT3Ud6nNLmGec/SZFlbBe7HcMTPTWfVGe9U3dGlxyV+f56hozwuzOnVLX82FtMRiWvhaix0WMHSbpWvYH2aIYz1+xQw0q/dzoo6uqGvl9SSo2Ub/lLcbMjeNO7hojgVO6HjFDYeRQJrlXcx/OWaEst0IN7TScb4heZgp8RocI/wnfdoDaXURMbIkAui35E4VehB2fihyBqbNoA/ykgmDB6pyM3XK57sDCNPuR9wq6viA4NLd+z7XuoODXc4TgAYCb8idDW70v65vvjtvqXhURXKozYBg1jt1W1Qm3XanpoTbrtiVWAQOsIdyVJE9BX7/QbBIjuB02jYWvzf/XlMrFuUWL3hRYnEKsjwZfEecOZlNxKlzdYcn7mZPxT1oGttlu9DgICHp2xhhfJcireWTarQDEduLyArBw469SObXRJL9e3KaNGlMn1UAtnwhZYoU3VLOp8urCBA2D+4UY+TDvhngSpTLbYyGr7wqt/pQQPX+qosSbkajcj/0jPShGuVv3IBxof0fYrSicYrocHYx+XrAY5U1H2ojpcECGxOBL1mnEgFvQ7pkTVCnozYls24Qi4MlPrDDmCSw8Anqmu+aaPrNJ8vgSgVOdBDBZyq4jy6gAoMQh3nHZSIb4oj8uNbsTABTz1gDARY2ZTR3fYBdYPTlvG+SZrdCx7ne0JqVVB6sSFnsn0X3COPQqFNvoAFPCDexNOU3rbjpUySEsCgLXxrh6MHVjnavsAuNjd4FJ//YkGZr8J6qWUKxy4Chgh7UWJ8SU4KMHWvGDFifql3Cosj+gCbmrgBPKPpEfdABbbLF3ousva7McxdGHDgsb2cbNJlvwRfLZ4DenFiYPhJH2f7ZhUXhcM6QfJJ6z4KprUCh/SuDL76vRGzLegpoD+/eugVPeQr6T4YgZwGZvwueSvLYZEYWXv5R7KQwGVL1MMcfXtVAaRNXY4MtOtuvr2ebnL5VHhrKY6dke8kw+0IgbZnBLXpVGCTROPgHIcSMVYeEgGUjRk72QycgBThVCz4AM3wIyCNCxNZxMY1OerSQUldoaIY2XF6gRd+zVpEzyPir3YR3ULMdP+8C/nXVvtL5kbk0KWlywdIBsnicL5VwGBpeIl0PMLaq/YGKQBgFYXFTUs2wUFQivQdEy8xJUZu2RGVO79bhnmuqJWTbXnWNJZ3VRgUP9PqX2thq/rHusHN2ibAgSrkwmTe4HqbamONxYijGwcofcHGhbM4H/UOidvNXGYmsH7WfMRdHJVQHhUsn0670I9HyJV10pNRiDLpNwZHTj/XJ+ZF8nRbqq40SMnUoTE0zQjkcMtJDxcX+GauR7TRZt/q3q9kaIi0ozYSculXG4Zwb7k0SUDGpwr3GbeELvgKqDrXZPZZjRR82wGyaRG1ROAqQU+BBzW5zWsSyXY3VuMwuV/r4jThLAlfui3uC/+GIQxGxxFa35uwQQC8Ljb9r7oDGLCqqO8Au874hd9OqUTzG915HUmVSrFzs5Fx9YrktF1GjWAZhYiQPY4j4OnWfejVae7X5ISJJZVGz8dFm4FAes+7X5ISJJZVGz+olrr64KyovA7FO92C/+8yQ/bAZeC6knrw2DhdQP9FHAgk5fezfXOty0H9ajjHKpfYcJPn3uvQWiu1HUOrlJRUVIHsSx8tkGvgyCTeP9FVpqmn0LV1aVNUqNX2QVudKw+wrzN5kxiGw5bj9eqXEx+P68Hednubt8hjjZAWuBWt7ofZHx1qlNl0Tbe5uqJixC7s/ERgHHZboyTSinBY8ikNWaGQIuzx2HKfLWn72NmbfcQrj3IE22dJHZdoMT0pu0FzeM0J19/B8i9nAaPd20lmZgmo7HF2KPWNoYOiUxDzfRntUDCmmO2NaH2306YTztSGkTCM5IRonw9wL4nybUG7pSxMzsrSLz72E+0lOBlBkAq51wqNUjWZeAUNPffm1XjdhH0Ht0K80vo3CHLhhnKUerCDktpdrwBa5jK8LPP88G7AFaHzpDYt4hog+dJfAyFNGKUTZLiQ2SEoT/DKEx3KpHNDrpGGmZfS051InZ2THnJZNRonE60KnK285HEyuIBOZfLTlt9lZxlwKumJoTYTdQ6TDeKi68pvxx/I1fJs4liy2a1gV4rwvOvXxCxc5mCFf8hDubnQu63AynyQJYEIcG7FcCGRM9Daq4eBPwPqM3YoC7yBgV83pko5cLsJaNc9koMSNU6Adtux/QUjJ9yd+2qi/xgCVD9Ff1M45A42ypSkQcRME6rNx+NuIn6w6QaN8FSIfO1Z8ZsUDleSIHuKBqJDe4vHhwzM7GHAgqs48LrtwnG27IX/YF6Ni4rwz0jq8nSOa8yaymsTq7YM4c+2erw35tVzy4lfo8JsECA4ZQg3y8Co9OB+/KTqtZvlejpUZ5huGcGyjaHiFMR46aLa2dp1joxpKxqPtpXkv4u0kEDFNapH3vxQ7gFZkO0SvdKs39mU0NhNjjnaLg/ONKdxJDd/XXE89J2UYBsuiEMIDHFU+w3vGgFCpLsAp001+7gdCTThPPXL1GtvgjiLyChIpBdE4zr2gUo+a36NRONrA0LH8/PTtYKSp2pZAarLuML4KXSNdxbTrHR1W3Af0qYNakxDX4fj14FFVwzkIoYZXV3sXhx/vI1KqHem4zAg0IvYjY875C7JSVarf0RPwhwVrm3MDoF+TxzgET3xhvroVSsqDhvcKYatr1u4rP3sdcP+3xAvP2cOb/wdoyL2PUsDjZ+LaeG1mAwypmjsne9j7C0SYYheWacAYAYG+gzI7pGTlrNhn04VlY8dOaUv5rKykyrlYFZlR0Gh5tXlRv0D+J6dz3125Gapl0uw7QkPtFkWI4Vef32ha8FL6g99fmzKVTxoI0PIPQbmb7Rv0irCc0hw12GsAjkFz59rKVS83UFDbsgUVHxV/XipLsYvx/Lmpc8neXx2PTG7DHrOpj/ZnPsLRkEyXKJgGaGMVWRICNVs0zzpiwDbSqbNtcpbcuKuAhl7Tcf93h8uHWTewxa7PP/oi8Cq3QKi2jhTRta4YTtxRLGo+wnhWvTyHNuEmfAx2TvE6unj+JSBUkgrNAgdPXp4A9njsOVVnD+yI/elw74JmjaHcT8SaSoJSUNykb88NSXFJ5eSu0zsmL8O+4ZmTl8boSalM/JILj9L4cIyw28o8FVzJQGe+dJPBCzhiYTQkD5dXwziY4W7EPbXblMmpNCA5Qltnvn9h58JCfZe+Dkq5vZ69kyjLsUeRsOZi2iKqZtu9ZT2EBcegniEGUCrhzH2G/pUL9iSjj9cHerF1gCI1GEOWpO6BseuWA2u0F/Q+N4h3ozxwxcLEkvH5q+dkSSMH0IbOPnfoAHYeeoYKsEv6sxalq8PsfPTz5vyiNEl+F/lFhIa9RmOcm7uxZStYDi4elfvzuQWROoitjj5x+ztDTHHnSHKIaWl13DEveLjUWKoDyx2QUP7wOPmY2v2fMGKelPPp1Ox2i4gBpen6oelb3EDIYvC1CM+Yi2Z3fYF5SRVPYcZpzJIBshP9r+9rBSbZxNZP8G6X00wgXJxvpdjWc9OuY9LQBg8BKegdkNYvBMFczh4uHiH9M0B4kEwKohrIHjNqbIOLGpk+GZ1eoDCCKB5VzYe/BX35ofR5aZbx9zCHmW7QH+IUXDK+1IEeq4I21cDAYq8srWtYMrf08bcD8iVNJQ5Hndoo3yt7NCkbiwxAcOiEcuUZ+SfkwOm3tdvANxcwOxCQZbrP8dOzvjU8m/CkQEtJlCNteE4cMUDvUqgIMDyuhz0PHMzgPJi9b9t7k0YAYJZLFnrVEYwPaHEpYPjavrfyCwK+OvkwLSenqK6diGWl2KPI2HRlX/eQUPDEJlyFhDF12UEwQEouss81fauhJwvEJDnC/z3rhHnaZEjqNcmC+UsYcDzT/bkIhGhpCOFS8prE/EoQIicuQpDBTw/p9s8FOw+e/OQ/JewMyHmEGrNSGDDmRNbucaN19QQ13GrJ8R/6UcP8SOAj8a6hE0weN1Fnm/pKCfCw+zSC7BLTFULkkT6MgQ44BdNGKWn7SnA8zA076StS59+AfP/wFPH5KXuKLXvayss0cuJFKN2wD0VGD12rBQErJSMj4+xCVJtApVmsVCZDO2JYHu59+i+sgDokLCWyek+jmoi9mP+xlhilDSCteF+o+HuLKnd0hoeIjdiY1qPzR+XA4/5YQZ6diRzeimKJQLQloyTg40FCgyuOHkb3K4i/31Ks5b/FKBAFR70FlNt1CudskbjjVlHyGRvRITUJ7AM042eYbtaaFJY/IrBbDcYwCKJKtGzLPZ205KAHiPHNtVqeQUwHHO2b26vYjSf6NIyaLn473HPoRpf8KbaKw4mMbFYEg2+uzwOmEpB0C4W2zbPyQzM2pTR62AF1panSP9DbnnZKnjqAII109+T6Yo0BpwiaU3WDJn33pmM8sU+C6ZBQ7kEAmGVGNCCdmnDL61g/seEFNMpbn2yowcnJVRB4Eb4PaZNJC8pXuVxpd/lXZacqfXE7VXdWPyZH+rzuHCAW03hn0sCrLFfRKSs5W8VfF39C2BmO7T0wuTLVAA//HGvPlylL3aCREaj8bvbNEkUlXNZS2eH9000BUI6y3xM1AEhkQDOf5fcjdNo/EKGGJ8SKNgH8dsgAMygcZ67ZCGszfDjT137LYkJcIvkEc0qarFoHe4vD+sBxGAGkglDovS6QfzMJ2WKudKe5opBw/5x0kiyHTQPqVZmQspGqmxIRcniAP63u1e8ThPjxFmBwH4XJLMfZqSKZkRK7+TftghTvbKlJJyj9a3/y7LRmP3dLGavzeZeja85LbW9eK6eJdUhwHwbhuEjskHxYhvInGdmn4GlkQ7Hv9VIu56Hu5rloHiwfbt7zZPZtTO79vMUogxxkm9JNhxtSv454TUVrUwRRlxDmqAOVvo+3hueolXjBiSXyJn99IBPjUXkzf3q7SvXlh5N0lqET0baUnoWEEPyU6jpCPsPtGLCQ1ZKTtixjWRF0K6EC4gZymYlx51T3erZITHQTUOwYhYPt6Y6JD2NLZl/sHjtI/ZdO6QwolQ4amHfMemxnyggdPXqltOiZyy2Gugc1UifEYfFDvlE1dEVs8WuibFLGrh1iqKY/7cgjpAEX9sB+QSe2FRR3oTiMBBewX7yGkRYeCuCd1v5pA+3jXoqgi5F3eECG08LAir7ZkymNvBWv6zbmxjl2B2Y+onxCRa1rATr587tXG0CvaqBpCbZrlD2wsqFg4WABb/8mLhgBo+iKVd7LJ/kQpMgO3xdpS5PAErMZdiUzhFmBkpRFKE2ruh6YHzatD1YchRoxv0Sc2LmP93H6YmO018cI2sNLTx/EzNcPdIbze47HY0UVh4EC6gYnnU8/ZrOdpg6OktI9HcZlFMRpOzILi8r/Uxhs3Dl84r8QnUPke/YSz6fbq4qyu6IiVxdD2e0mXvinNs1V09ZXL4zC1NRotnnYuI5LfApTaLVK5ge9To7AIOCjNz/oXDlsIXaxkxlfaQZxgFopy/VSHrtf+aufq8IfRLTjqW94pYsbc3loHvT+6PDAK/3JsoeI9RsQR2s3Rm++IYWUoMbB4GyAv+CED2n5ZuM5gxV8wqk01Isol35xQGWqOUZqq5EDHwIr/sdlcKZRVY3GnjSRSTBxYucDTsbjlf5CDXcSb+ClvwW47+Zy6XkJPwx1mjkzXCPMQ4SBtuUV5JTy7BjmMuvEaBftUfH1NmqKqjZWw+G3TlED/xnf8P9FZNx/rTug0N93EwTjfOhS6n3kB4ILYudNrEu51h0ETKh4POLqFCwhHIRNyeoDpip9R/bs+5P1HjZhQJmOQjsrkml1CfdOClxjQgmcDYJnKp/kNvAYTgZqwPeMHVqPP9Jru74/ue4M2EwyMCV2pABCvoRw8sVvh7BT80RcD3M7A4jYeRzNf+7yiBdXToSj/sY4650FmiCLij7tQdi3cVPKsM+dkOC6V2lhW4yupVSTgCfTQDAqgjp/3SfBVe1raraKEJ0baIS6iUIBuKCf4G/4s0UDKZhSJGBK8YnZqdfXDCdrlbtep8qoylzLzwkMBqXPbJBr8WSAqOfJwlp5XpRdsPfj5jqk0xn4JOgx7wzYLMWtjQjlHpqS9lBq/5GIYJjxbj/kVT/6vLCz22mQPQDC1hmjx4oRdQCBBFdBQIgRgnMpYm/LGB4CqyEZYpaM9B2dyylrgn7ftCOyOkXFUwIrZd4mqVSf+126Ly4I1DlFdIpJPSG8xemT4DNagMsiEyMmASH7wFeXJq3zMpcbbuAzgt7ZMD8TsPEvD/Mho4GpWH4Z9pwrAox7gRVOo3MClRKsOBSFs3iHH797ggjVJtiP1flRIMAAAAAAAAAAAAAAAAA=`,sip_card:`data:image/webp;base64,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`},{frame:Zo}=window.BottleMateRing,Qo=matchMedia(`(prefers-reduced-motion: reduce)`).matches,$o=new URLSearchParams(location.search),es=$o.has(`low`)||matchMedia(`(max-width: 760px)`).matches||(navigator.hardwareConcurrency||8)<=4,ts=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),ns=(e,t,n)=>{let r=ts((n-e)/(t-e));return r*r*(3-2*r)},rs=(e,t,n)=>e+(t-e)*n;function is(e,t=256){let n=document.createElement(`canvas`);n.width=n.height=t;let r=n.getContext(`2d`),i=r.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.forEach(([e,t])=>i.addColorStop(e,t)),r.fillStyle=i,r.fillRect(0,0,t,t);let a=new Ha(n);return a.colorSpace=S,a}let as=new mo,os={};function ss(e){if(!os[e]){let t=as.load(Xo[e]||`assets/img/oled/${e}.webp`);t.colorSpace=S,t.anisotropy=4,os[e]=t}return os[e]}var cs=class{constructor(e=512){this.w=e,this.c=document.createElement(`canvas`),this.c.width=e,this.c.height=1,this.ctx=this.c.getContext(`2d`),this.img=this.ctx.createImageData(e,1),this.tex=new Ha(this.c),this.tex.colorSpace=S,this.tex.wrapS=t,this.tex.magFilter=a,this.out=[0,0,0]}leds(e,t){let n=Array.from({length:12},()=>[0,0,0]);for(let[r,i]of Object.entries(t)){if(!(i>.001))continue;let t=Zo(r,e*1e3);for(let e=0;e<12;e++)n[e][0]+=t[e][0]*i,n[e][1]+=t[e][1]*i,n[e][2]+=t[e][2]*i}return n}colour(e,t){let n=this.out,r=e*12-.5,i=r-Math.floor(r),a=(Math.floor(r)%12+12)%12,o=(a+1)%12,s=.75+.25*Math.cos(i*Math.PI*2)**2;for(let e=0;e<3;e++)n[e]=(t[a][e]*(1-i)+t[o][e]*i)*s*1.7;return n}draw(e,t){let n=this.img.data,r=this.leds(e,t);this.last=r;for(let e=0;e<this.w;e++){let t=this.colour(e/this.w,r);n[e*4]=ts(t[0])*255,n[e*4+1]=ts(t[1])*255,n[e*4+2]=ts(t[2])*255,n[e*4+3]=255}this.ctx.putImageData(this.img,0,0),this.tex.needsUpdate=!0}};function ls(e,t,n=22){let r=new Wa(e,e,t,n*4,1),i=r.attributes.position;for(let r=0;r<i.count;r++){let a=i.getX(r),o=i.getZ(r),s=i.getY(r),c=Math.hypot(a,o);if(c<e*.5||Math.abs(Math.abs(s)-t/2)<1e-4&&c<e*.99)continue;let l=1-.045*(Math.cos(Math.atan2(o,a)*n)>.2);i.setX(r,a*l),i.setZ(r,o*l)}return r.computeVertexNormals(),r}function us({internals:e=!1,clear:t=!1}={}){let n=new Na,r={},i=new Ja({color:724759,roughness:.3,metalness:.25,clearcoat:1,clearcoatRoughness:.16}),a=new Ja({color:856603,roughness:.2,metalness:.3,clearcoat:1,clearcoatRoughness:.08}),o=new qa({color:329483,roughness:.65,metalness:.2}),s=new qa({color:8029332,roughness:.55,metalness:.55,envMapIntensity:.28}),c=new qa({color:13226201,roughness:.35,metalness:.9}),l=new Na,u=new Z(new Wa(1,.965,.16,128),i);u.position.y=.08;let d=new Z(new Wa(.93,.93,.014,96),o);d.position.y=.007,l.add(u,d);let f=new Na,p=new cs,m=new Ht({map:p.tex,toneMapped:!1});m.color.setScalar(2.3);let h=new Z(new Wa(1.003,1.003,.044,192,1,!0),m);h.position.y=.182,f.add(h);let g=[];if(e){let e=new Z(new Ga(.95,.012,8,96),o);e.rotation.x=Math.PI/2,e.position.y=.182,f.add(e);for(let e=0;e<12;e++){let t=new Ht({toneMapped:!1}),n=new Z(new Cn(.05,.03,.035),t),r=(e+.5)/12*Math.PI*2;n.position.set(Math.sin(r)*.95,.182,Math.cos(r)*.95),n.rotation.y=r,n.userData.u=e/12,f.add(n),g.push(n)}}let _=new Na,v=new Z(new Wa(1,1,.186,128),i);v.position.y=.297;let y=new Z(new Ga(.965,.036,24,192),i);y.rotation.x=Math.PI/2,y.position.y=.39;let b=new Z(new Cn(.62,.39,.14),a);b.position.set(0,.205,.936);let x=new Z(new Kn(.4,.21),o);x.position.set(0,.215,1.0065);let S=new Ht({map:ss(`home`),toneMapped:!1});S.color.setScalar(1.5);let C=new Z(new Kn(.34,.17),S);C.position.set(0,.215,1.0075),e&&(b.scale.y=.2/.39,b.position.y=.305,x.scale.set(.85,.85,1),x.position.y=.3,C.scale.set(.85,.85,1),C.position.y=.3),_.add(v,y,b,x,C);let w=new Na,T=new Z(new Wa(.925,.925,.03,128),s);T.position.y=.39;let E=new Z(new Ga(.928,.005,6,128),o);E.rotation.x=Math.PI/2,E.position.y=.405,w.add(T,E);let D=new Na,O=new Ja({color:789776,roughness:.34,metalness:.7,clearcoat:.5}),k=new Z(new Wa(.128,.128,.016,48),c);k.position.y=.413;let A=new Z(ls(.115,.15),O);A.position.y=.496;let j=new Z(new Wa(.104,.104,.006,48),new Ja({color:1711396,roughness:.25,metalness:.8}));j.position.y=.572,D.add(k,A,j),D.position.set(0,0,.66);let M=[];if(e){let e=new Na,t=new Z(new Cn(1,.07,.14),c);t.position.y=.1;let n=new Z(new Cn(.12,.012,.08),new qa({color:15262408,roughness:.6}));n.position.y=.14,e.add(t,n);let r=new Na,i=new Z(new Wa(.82,.82,.016,96),new qa({color:1456783,roughness:.5,metalness:.25}));i.position.y=.16;let a=(e,t,n,i,a,o,s=.2)=>{let c=new Z(new Cn(e,t,n),new qa({color:o,roughness:.4,metalness:s}));c.position.set(i,.168+t/2,a),r.add(c)};a(.2,.03,.26,.18,-.12,13094358,.9),a(.09,.02,.09,-.2,-.2,1119e3),a(.08,.1,.05,-.38,.25,2854143),a(.11,.035,.07,0,-.74,12568271,.9),a(.07,.015,.05,.42,.3,1119e3),a(.05,.012,.05,.3,.45,1119e3);for(let e=0;e<6;e++)a(.5,.002,.008,.05,.05+e*.05,14198336,.9);r.add(i),M.push([`bottom`,l],[`cell`,e],[`pcb`,r],[`ring`,f],[`upper`,_],[`plate`,w],[`knob`,D])}else M.push([`bottom`,l],[`ring`,f],[`upper`,_],[`plate`,w],[`knob`,D]);M.forEach(([e,t])=>{r[e]=t,n.add(t)});let N=new Z(new Kn(6,6),new Ht({map:is([[0,`rgba(70,150,255,.55)`],[.25,`rgba(60,110,255,.18)`],[1,`rgba(0,0,0,0)`]]),transparent:!0,depthWrite:!1,blending:2}));N.rotation.x=-Math.PI/2,N.position.y=.001;let ee=new Z(new Kn(2.9,2.9),new Ht({map:is([[0,`rgba(0,0,0,.9)`],[.6,`rgba(0,0,0,.55)`],[1,`rgba(0,0,0,0)`]]),transparent:!0,depthWrite:!1}));return ee.rotation.x=-Math.PI/2,ee.position.y=.002,N.visible=!t,t&&(ee.material.opacity=.38,ee.scale.setScalar(.88),m.color.setScalar(4.2)),n.add(N,ee),n.traverse(e=>{let t=e.material;t&&t.isMeshStandardMaterial&&t.envMapIntensity===1&&(t.envMapIntensity=.6)}),{root:n,parts:r,order:M,strip:p,leds:g,oledM:S,glow:N}}function ds(){let e=new Na,t=[[0,0],[.29,0],[.33,.025],[.345,.08],[.345,.92],[.335,1],[.25,1.1],[.16,1.16],[.15,1.24]].map(([e,t])=>new z(e,t)),n=new Ja({color:14479359,roughness:.04,metalness:0,transparent:!0,opacity:.13,clearcoat:1,clearcoatRoughness:.05,side:2,depthWrite:!1,envMapIntensity:.9}),r=new Z(new Ua(t,72),n);r.renderOrder=2;let i=new Ja({color:2063359,emissive:739268,emissiveIntensity:.6,roughness:.12,clearcoat:1,transparent:!0,opacity:.8,depthWrite:!1,envMapIntensity:.7}),a=new Z(new Wa(.325,.31,1,64),i),o=new Ja({color:3112176,roughness:.35,metalness:.1,clearcoat:1,clearcoatRoughness:.2}),s=new Z(ls(.165,.13,30),o);s.position.y=1.3,e.add(a,r,s);let c=e=>{a.scale.y=e,a.position.y=.025+e/2};return c(.72),{group:e,setLevel:c}}function fs(e,t){let n=t===null,r=new za({canvas:e,antialias:!es,alpha:n,premultipliedAlpha:!0,powerPreference:`high-performance`,preserveDrawingBuffer:$o.has(`snap`)});r.setPixelRatio(Math.min(devicePixelRatio,es?1.5:2)),r.toneMapping=4,r.toneMappingExposure=n?1.12:1.05,r.outputColorSpace=S,n&&r.setClearColor(0,0);let i=new Va;n||(i.background=new X(t)),i.environment=new dr(r).fromScene(new Po,.04).texture;let a=new Nn(30,1,.1,60),o=new Eo(16777215,n?2.2:1.6);o.position.set(-3,4,3);let s=new Eo(6079231,3);s.position.set(2.5,2,-4);let c=new Eo(n?14543359:9141503,n?1.2:.9);c.position.set(4,1,2);let l=new wo(8377599,5,5,1.6);l.position.set(0,1.4,2),i.add(o,s,c,l);let u=null,d=null;n||(u=new Wo(r),u.addPass(new Go(i,a)),d=new qo(new z(256,256),.75,.5,.95),$o.has(`nobloom`)||u.addPass(d),u.addPass(new Yo));let f=()=>{let t=e.clientWidth,n=e.clientHeight;t&&n&&(r.setSize(t,n,!1),u&&(u.setSize(t,n),d.resolution.set(t*(es?.5:.75),n*(es?.5:.75))),a.aspect=t/n,a.updateProjectionMatrix())};return new ResizeObserver(f).observe(e),f(),$o.has(`snap`)&&(window.__bmSnap||=[]).push(()=>e.toDataURL(`image/png`)),{renderer:r,scene:i,camera:a,composer:{render:e=>u?u.render(e):r.render(i,a)},follow:l}}function ps(e,t){let n=!1,r=0,i=performance.now(),a=0,o=e=>{if(e-i>=(es?31:15)){let n=Math.min(.05,(e-i)/1e3);i=e,a+=n,t(n,a)}r=requestAnimationFrame(o)},s=()=>{!n||document.hidden?(cancelAnimationFrame(r),r=0):r||=(i=performance.now(),requestAnimationFrame(o))};new IntersectionObserver(([e])=>{n=e.isIntersecting,s()}).observe(e),document.addEventListener(`visibilitychange`,s)}function ms(e,t){let n={x:0,y:0,drag:0,vel:0,down:!1,lx:0};e.addEventListener(`pointermove`,t=>{let r=e.getBoundingClientRect();if(n.x=ts((t.clientX-r.left)/r.width*2-1,-1,1),n.y=ts((t.clientY-r.top)/r.height*2-1,-1,1),n.down){let e=t.clientX-n.lx;n.lx=t.clientX,n.vel=e*.006,n.drag+=n.vel}}),e.addEventListener(`pointerleave`,()=>{n.x=0,n.y=0}),t.addEventListener(`pointerdown`,e=>{n.down=!0,n.lx=e.clientX,t.setPointerCapture(e.pointerId),t.classList.add(`grabbing`)});let r=()=>{n.down=!1,t.classList.remove(`grabbing`)};return t.addEventListener(`pointerup`,r),t.addEventListener(`pointercancel`,r),n}function hs(){let e=document.getElementById(`hero-stage`),t=document.getElementById(`hero3d`),n=document.querySelector(`.hero.pin`)||e;if(!e||!t)return;let{scene:r,camera:i,composer:a,follow:o}=fs(t,null),s=us({clear:!0}),c=ds();r.add(s.root),s.root.add(c.group);let l=.16,u=-.1,d=.405;c.group.position.set(l,d,u),[`home`,`home_alert`,`lift`,`sip`,`sip_card`].forEach(ss);let f=ms(e,t),p={yaw:-.5,pitch:.36,lift:0,level:.72,px:0,py:0},m=-1,h=matchMedia(`(min-width: 981px) and (min-height: 680px)`),g=()=>h.matches,_=()=>{if(g()){let e=n.getBoundingClientRect();return ts(-e.top/Math.max(1,e.height-innerHeight))}let t=e.getBoundingClientRect();return ts((innerHeight*.72-t.top)/(innerHeight*.62))};ps(e,(t,n)=>{let r=_(),h=1-Math.exp(-t*5),g=r<.14?0:r<.34?1:r<.56?2:r<.78?3:4;g!==m&&(m=g,s.oledM.map=ss([`home`,`home_alert`,`lift`,`sip`,`sip_card`][g]),e.dataset.step=String(g));let v=ns(.34,.44,r)*(1-ns(.5,.6,r)),y=rs(.72,.54,ns(.42,.54,r));p.lift+=(v-p.lift)*h*1.6,p.level+=(y-p.level)*h,c.setLevel(p.level);let b=p.lift;c.group.position.set(l+b*.2,d+b*.42+Math.sin(n*2)*.006*b,u+b*.12),c.group.rotation.set(b*.1,0,-b*.32);let x={ambient:1-ns(.1,.16,r)+ns(.76,.82,r),alert:ns(.12,.16,r)*(1-ns(.32,.36,r)),lift:ns(.32,.36,r)*(1-ns(.54,.58,r)),sip:ns(.54,.58,r)*(1-ns(.76,.8,r))};s.strip.draw(n,x),f.drag+=f.vel,f.vel*=f.down?.5:.94,p.px+=(f.x-p.px)*h,p.py+=(f.y-p.py)*h;let S=rs(-.55,.6,r)+p.px*.38+f.drag+(Qo?0:Math.sin(n*.35)*.05),C=rs(.36,.27,r)-p.py*.12;p.yaw+=(S-p.yaw)*h,p.pitch+=(C-p.pitch)*h;let w=(i.aspect<.9?6.2:5.5)-r*.3+b*.35,T=.66+b*.22;i.position.set(w*Math.cos(p.pitch)*Math.sin(p.yaw),T+w*Math.sin(p.pitch),w*Math.cos(p.pitch)*Math.cos(p.yaw)),i.lookAt(0,T,0),o.position.set(p.px*2.4+Math.sin(p.yaw)*2,1.3-p.py*.6,Math.cos(p.yaw)*2.2),a.render(t)}),e.classList.add(`ready`)}function gs(){let e=document.getElementById(`base-stage`),t=document.getElementById(`base3d`);if(!e||!t)return;let{scene:n,camera:r,composer:i,follow:a}=fs(t,null),o=us({internals:!0,clear:!0});n.add(o.root),o.oledM.map=ss(`home`);let s=[...e.querySelectorAll(`.part-label`)].map(e=>({el:e,part:o.parts[e.dataset.part],side:e.dataset.side===`l`?-1:1})),c=ms(e,t),l={e:0,yaw:.5,px:0,py:0},u=new J,d=new J;ps(e,(n,f)=>{let p=e.getBoundingClientRect(),m=ts((innerHeight-p.top)/(innerHeight+p.height)),h=ns(.18,.55,m),g=1-Math.exp(-n*5);l.e+=(h-l.e)*g,o.order.forEach(([,e],t)=>{e.position.y=l.e*t*.36}),o.strip.draw(f,{ambient:1-l.e,boot:l.e}),o.leds.forEach((e,t)=>{let n=o.strip.last[t];e.material.color.setRGB(n[0]*3.5,n[1]*3.5,n[2]*3.5)}),c.drag+=c.vel,c.vel*=c.down?.5:.94,l.px+=(c.x-l.px)*g,l.py+=(c.y-l.py)*g;let _=.5+(Qo?0:f*.12)+l.px*.35+c.drag;l.yaw+=(_-l.yaw)*g;let v=.32-l.py*.1,y=.25+l.e*1.05,b=r.aspect<.9,x=(b?7.6:5.6)+l.e*(b?3.2:2.6);r.position.set(x*Math.cos(v)*Math.sin(l.yaw),y+x*Math.sin(v),x*Math.cos(v)*Math.cos(l.yaw)),r.lookAt(0,y,0),a.position.set(Math.sin(l.yaw)*2.2,2.5,Math.cos(l.yaw)*2.2),r.updateMatrixWorld(),d.setFromMatrixColumn(r.matrixWorld,0);let S=t.clientWidth,C=t.clientHeight,w=ns(.45,.8,l.e);s.forEach(({el:e,part:t,side:n})=>{u.set(0,t.position.y+.2,0).addScaledVector(d,n*1.02),u.project(r);let i=e.offsetWidth||120,a=(u.x+1)/2*S;a=n<0?Math.max(a,i+4):Math.min(a,S-i-4),e.style.transform=`translate(${a}px, ${(1-u.y)/2*C}px)`,e.style.opacity=String(w)}),i.render(n)}),e.classList.add(`ready`)}function _s(e,{compact:t=!1}={}){let n=e.parentElement,{scene:r,camera:i,composer:a,follow:o}=fs(e,462623),s=us();r.add(s.root),s.oledM.map=ss(`home`);let c=ms(n,e),l={fx:`boot`,t0:0,clock:0,playing:!Qo,ctx:!0};l.set=e=>{l.fx=e,l.t0=l.clock,e===`alert`?s.oledM.map=ss(`home_alert`):e===`sip`?s.oledM.map=ss(`sip`):e===`lift`?s.oledM.map=ss(`lift`):s.oledM.map=ss(`home`)},l.setPlaying=e=>{l.playing=e};let u={yaw:.35,px:0,py:0},d=new X,f=0;return ps(n,e=>{l.playing&&(l.clock+=e);let n=l.clock-l.t0;s.strip.draw(n,{[l.fx]:1});let r=s.strip.last,p=0,m=0,h=0;for(let e of r)p+=e[0],m+=e[1],h+=e[2];let g=Math.max(p,m,h,1e-4);d.setRGB(p/g,m/g,h/g),s.glow.material.color.copy(d),s.glow.material.opacity=Math.min(1,g/4);let _=1-Math.exp(-e*4);c.drag+=c.vel,c.vel*=c.down?.5:.94,l.playing&&!Qo&&(f+=e*.12),u.px+=(c.x-u.px)*_,u.py+=(c.y-u.py)*_;let v=.35+Math.sin(f)*.55+u.px*.3+c.drag;u.yaw+=(v-u.yaw)*_;let y=.2-u.py*.08,b=t?3.5:3.9,x=.22;i.position.set(b*Math.cos(y)*Math.sin(u.yaw),x+b*Math.sin(y),b*Math.cos(y)*Math.cos(u.yaw)),i.lookAt(0,x,0),o.position.set(Math.sin(u.yaw)*2.4,1.6,Math.cos(u.yaw)*2.4),a.render(e)}),n.classList.add(`ready`,`ring-ready`),l}return e.initExploded=gs,e.initHero=hs,e.initRing=_s,e})({});