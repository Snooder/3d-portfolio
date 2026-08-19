import{y as Mn,R as Vt,w as C,a as N,j as b,v as Oe,J as Fn,x as Pe}from"./index-bdfa6c22.js";import{g as Ce,u as pt}from"./index-43a10588.js";var Xt={exports:{}},Ln="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Rn=Ln,jn=Rn;function Jt(){}function qt(){}qt.resetWarningCache=Jt;var zn=function(){function e(a,r,i,s,o,c){if(c!==jn){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:qt,resetWarningCache:Jt};return n.PropTypes=n,n};Xt.exports=zn();var Dn=Xt.exports;const g=Mn(Dn),gt=()=>{};let tt={},Kt={},Qt=null,Zt={mark:gt,measure:gt};try{typeof window<"u"&&(tt=window),typeof document<"u"&&(Kt=document),typeof MutationObserver<"u"&&(Qt=MutationObserver),typeof performance<"u"&&(Zt=performance)}catch{}const{userAgent:ht=""}=tt.navigator||{},G=tt,v=Kt,bt=Qt,me=Zt;G.document;const $=!!v.documentElement&&!!v.head&&typeof v.addEventListener=="function"&&typeof v.createElement=="function",en=~ht.indexOf("MSIE")||~ht.indexOf("Trident/");var w="classic",tn="duotone",I="sharp",_="sharp-duotone",Un=[w,tn,I,_],$n={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},yt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Wn=["kit"],Yn=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Gn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Bn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Hn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Vn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Xn={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Jn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},qn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},nn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Kn=["solid","regular","light","thin","duotone","brands"],an=[1,2,3,4,5,6,7,8,9,10],Qn=an.concat([11,12,13,14,15,16,17,18,19,20]),re={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zn=[...Object.keys(Xn),...Kn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",re.GROUP,re.SWAP_OPACITY,re.PRIMARY,re.SECONDARY].concat(an.map(e=>"".concat(e,"x"))).concat(Qn.map(e=>"w-".concat(e))),ea={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ta={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},na={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},vt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const D="___FONT_AWESOME___",ze=16,rn="fa",sn="svg-inline--fa",q="data-fa-i2svg",De="data-fa-pseudo-element",aa="data-fa-pseudo-element-pending",nt="data-prefix",at="data-icon",xt="fontawesome-i2svg",ra="async",ia=["HTML","HEAD","STYLE","SCRIPT"],on=(()=>{try{return!0}catch{return!1}})(),ln=[w,I,_];function fe(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[w]}})}const cn={...nn};cn[w]={...nn[w],...yt.kit,...yt["kit-duotone"]};const X=fe(cn),Ue={...qn};Ue[w]={...Ue[w],...vt.kit,...vt["kit-duotone"]};const le=fe(Ue),$e={...Jn};$e[w]={...$e[w],...na.kit};const J=fe($e),We={...Vn};We[w]={...We[w],...ta.kit};const sa=fe(We),oa=Yn,fn="fa-layers-text",la=Gn,ca={...$n};fe(ca);const fa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ee=re,te=new Set;Object.keys(le[w]).map(te.add.bind(te));Object.keys(le[I]).map(te.add.bind(te));Object.keys(le[_]).map(te.add.bind(te));const ua=[...Wn,...Zn],se=G.FontAwesomeConfig||{};function da(e){var t=v.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ma(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}v&&typeof v.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t;const r=ma(da(n));r!=null&&(se[a]=r)});const un={styleDefault:"solid",familyDefault:"classic",cssPrefix:rn,replacementClass:sn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};se.familyPrefix&&(se.cssPrefix=se.familyPrefix);const ne={...un,...se};ne.autoReplaceSvg||(ne.observeMutations=!1);const d={};Object.keys(un).forEach(e=>{Object.defineProperty(d,e,{enumerable:!0,set:function(t){ne[e]=t,oe.forEach(n=>n(d))},get:function(){return ne[e]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(e){ne.cssPrefix=e,oe.forEach(t=>t(d))},get:function(){return ne.cssPrefix}});G.FontAwesomeConfig=d;const oe=[];function pa(e){return oe.push(e),()=>{oe.splice(oe.indexOf(e),1)}}const W=ze,R={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ga(e){if(!e||!$)return;const t=v.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=v.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return v.head.insertBefore(t,a),e}const ha="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ce(){let e=12,t="";for(;e-- >0;)t+=ha[Math.random()*62|0];return t}function ae(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function rt(e){return e.classList?ae(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function dn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ba(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(dn(e[n]),'" '),"").trim()}function ve(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function it(e){return e.size!==R.size||e.x!==R.x||e.y!==R.y||e.rotate!==R.rotate||e.flipX||e.flipY}function ya(e){let{transform:t,containerWidth:n,iconWidth:a}=e;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(s," ").concat(o)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:l}}function va(e){let{transform:t,width:n=ze,height:a=ze,startCentered:r=!1}=e,i="";return r&&en?i+="translate(".concat(t.x/W-n/2,"em, ").concat(t.y/W-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(t.x/W,"em), calc(-50% + ").concat(t.y/W,"em)) "):i+="translate(".concat(t.x/W,"em, ").concat(t.y/W,"em) "),i+="scale(".concat(t.size/W*(t.flipX?-1:1),", ").concat(t.size/W*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var xa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function mn(){const e=rn,t=sn,n=d.cssPrefix,a=d.replacementClass;let r=xa;if(n!==e||a!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let wt=!1;function Te(){d.autoAddCss&&!wt&&(ga(mn()),wt=!0)}var wa={mixout(){return{dom:{css:mn,insertCss:Te}}},hooks(){return{beforeDOMElementCreation(){Te()},beforeI2svg(){Te()}}}};const U=G||{};U[D]||(U[D]={});U[D].styles||(U[D].styles={});U[D].hooks||(U[D].hooks={});U[D].shims||(U[D].shims=[]);var j=U[D];const pn=[],gn=function(){v.removeEventListener("DOMContentLoaded",gn),he=1,pn.map(e=>e())};let he=!1;$&&(he=(v.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(v.readyState),he||v.addEventListener("DOMContentLoaded",gn));function ka(e){$&&(he?setTimeout(e,0):pn.push(e))}function ue(e){const{tag:t,attributes:n={},children:a=[]}=e;return typeof e=="string"?dn(e):"<".concat(t," ").concat(ba(n),">").concat(a.map(ue).join(""),"</").concat(t,">")}function kt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Aa=function(t,n){return function(a,r,i,s){return t.call(n,a,r,i,s)}},Ie=function(t,n,a,r){var i=Object.keys(t),s=i.length,o=r!==void 0?Aa(n,r):n,c,l,u;for(a===void 0?(c=1,u=t[i[0]]):(c=0,u=a);c<s;c++)l=i[c],u=o(u,t[l],l,t);return u};function Sa(e){const t=[];let n=0;const a=e.length;for(;n<a;){const r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Ye(e){const t=Sa(e);return t.length===1?t[0].toString(16):null}function Na(e,t){const n=e.length;let a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function At(e){return Object.keys(e).reduce((t,n)=>{const a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function Ge(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=At(t);typeof j.hooks.addPack=="function"&&!a?j.hooks.addPack(e,At(t)):j.styles[e]={...j.styles[e]||{},...r},e==="fas"&&Ge("fa",t)}const{styles:V,shims:Oa}=j,Pa={[w]:Object.values(J[w]),[I]:Object.values(J[I]),[_]:Object.values(J[_])};let st=null,hn={},bn={},yn={},vn={},xn={};const Ca={[w]:Object.keys(X[w]),[I]:Object.keys(X[I]),[_]:Object.keys(X[_])};function Ea(e){return~ua.indexOf(e)}function Ta(e,t){const n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!Ea(r)?r:null}const wn=()=>{const e=a=>Ie(V,(r,i,s)=>(r[s]=Ie(i,a,{}),r),{});hn=e((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=i}),a)),bn=e((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=i}),a)),xn=e((a,r,i)=>{const s=r[2];return a[i]=i,s.forEach(o=>{a[o]=i}),a});const t="far"in V||d.autoFetchSvg,n=Ie(Oa,(a,r)=>{const i=r[0];let s=r[1];const o=r[2];return s==="far"&&!t&&(s="fas"),typeof i=="string"&&(a.names[i]={prefix:s,iconName:o}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:s,iconName:o}),a},{names:{},unicodes:{}});yn=n.names,vn=n.unicodes,st=xe(d.styleDefault,{family:d.familyDefault})};pa(e=>{st=xe(e.styleDefault,{family:d.familyDefault})});wn();function ot(e,t){return(hn[e]||{})[t]}function Ia(e,t){return(bn[e]||{})[t]}function Y(e,t){return(xn[e]||{})[t]}function kn(e){return yn[e]||{prefix:null,iconName:null}}function _a(e){const t=vn[e],n=ot("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function B(){return st}const lt=()=>({prefix:null,iconName:null,rest:[]});function xe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=w}=t,a=X[n][e],r=le[n][e]||le[n][a],i=e in j.styles?e:null;return r||i||null}const Ma={[w]:Object.keys(J[w]),[I]:Object.keys(J[I]),[_]:Object.keys(J[_])};function we(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,a={[w]:"".concat(d.cssPrefix,"-").concat(w),[I]:"".concat(d.cssPrefix,"-").concat(I),[_]:"".concat(d.cssPrefix,"-").concat(_)};let r=null,i=w;const s=Un.filter(c=>c!==tn);s.forEach(c=>{(e.includes(a[c])||e.some(l=>Ma[c].includes(l)))&&(i=c)});const o=e.reduce((c,l)=>{const u=Ta(d.cssPrefix,l);if(V[l]?(l=Pa[i].includes(l)?sa[i][l]:l,r=l,c.prefix=l):Ca[i].indexOf(l)>-1?(r=l,c.prefix=xe(l,{family:i})):u?c.iconName=u:l!==d.replacementClass&&!s.some(h=>l===a[h])&&c.rest.push(l),!n&&c.prefix&&c.iconName){const h=r==="fa"?kn(c.iconName):{},f=Y(c.prefix,c.iconName);h.prefix&&(r=null),c.iconName=h.iconName||f||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!V.far&&V.fas&&!d.autoFetchSvg&&(c.prefix="fas")}return c},lt());return(e.includes("fa-brands")||e.includes("fab"))&&(o.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(o.prefix="fad"),!o.prefix&&i===I&&(V.fass||d.autoFetchSvg)&&(o.prefix="fass",o.iconName=Y(o.prefix,o.iconName)||o.iconName),!o.prefix&&i===_&&(V.fasds||d.autoFetchSvg)&&(o.prefix="fasds",o.iconName=Y(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||r==="fa")&&(o.prefix=B()||"fas"),o}class Fa{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...r[i]},Ge(i,r[i]);const s=J[w][i];s&&Ge(s,r[i]),wn()})}reset(){this.definitions={}}_pullDefinitions(t,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:s,icon:o}=a[r],c=o[2];t[i]||(t[i]={}),c.length>0&&c.forEach(l=>{typeof l=="string"&&(t[i][l]=o)}),t[i][s]=o}),t}}let St=[],Q={};const ee={},La=Object.keys(ee);function Ra(e,t){let{mixoutsTo:n}=t;return St=e,Q={},Object.keys(ee).forEach(a=>{La.indexOf(a)===-1&&delete ee[a]}),St.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(s=>{Q[s]||(Q[s]=[]),Q[s].push(i[s])})}a.provides&&a.provides(ee)}),n}function Be(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(Q[e]||[]).forEach(s=>{t=s.apply(null,[t,...a])}),t}function K(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(Q[e]||[]).forEach(i=>{i.apply(null,n)})}function H(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ee[e]?ee[e].apply(null,t):void 0}function He(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||B();if(t)return t=Y(n,t)||t,kt(An.definitions,n,t)||kt(j.styles,n,t)}const An=new Fa,ja=()=>{d.autoReplaceSvg=!1,d.observeMutations=!1,K("noAuto")},za={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $?(K("beforeI2svg",e),H("pseudoElements2svg",e),H("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,ka(()=>{Ua({autoReplaceSvgRoot:t}),K("watch",e)})}},Da={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Y(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=xe(e[0]);return{prefix:n,iconName:Y(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(d.cssPrefix,"-"))>-1||e.match(oa))){const t=we(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||B(),iconName:Y(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=B();return{prefix:t,iconName:Y(t,e)||e}}}},M={noAuto:ja,config:d,dom:za,parse:Da,library:An,findIconDefinition:He,toHtml:ue},Ua=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=v}=e;(Object.keys(j.styles).length>0||d.autoFetchSvg)&&$&&d.autoReplaceSvg&&M.dom.i2svg({node:t})};function ke(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>ue(n))}}),Object.defineProperty(e,"node",{get:function(){if(!$)return;const n=v.createElement("div");return n.innerHTML=e.html,n.children}}),e}function $a(e){let{children:t,main:n,mask:a,attributes:r,styles:i,transform:s}=e;if(it(s)&&n.found&&!a.found){const{width:o,height:c}=n,l={x:o/c/2,y:.5};r.style=ve({...i,"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")})}return[{tag:"svg",attributes:r,children:t}]}function Wa(e){let{prefix:t,iconName:n,children:a,attributes:r,symbol:i}=e;const s=i===!0?"".concat(t,"-").concat(d.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:s},children:a}]}]}function ct(e){const{icons:{main:t,mask:n},prefix:a,iconName:r,transform:i,symbol:s,title:o,maskId:c,titleId:l,extra:u,watchable:h=!1}=e,{width:f,height:p}=n.found?n:t,x=a==="fak",E=[d.replacementClass,r?"".concat(d.cssPrefix,"-").concat(r):""].filter(T=>u.classes.indexOf(T)===-1).filter(T=>T!==""||!!T).concat(u.classes).join(" ");let y={children:[],attributes:{...u.attributes,"data-prefix":a,"data-icon":r,class:E,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(p)}};const A=x&&!~u.classes.indexOf("fa-fw")?{width:"".concat(f/p*16*.0625,"em")}:{};h&&(y.attributes[q]=""),o&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(l||ce())},children:[o]}),delete y.attributes.title);const k={...y,prefix:a,iconName:r,main:t,mask:n,maskId:c,transform:i,symbol:s,styles:{...A,...u.styles}},{children:O,attributes:F}=n.found&&t.found?H("generateAbstractMask",k)||{children:[],attributes:{}}:H("generateAbstractIcon",k)||{children:[],attributes:{}};return k.children=O,k.attributes=F,s?Wa(k):$a(k)}function Nt(e){const{content:t,width:n,height:a,transform:r,title:i,extra:s,watchable:o=!1}=e,c={...s.attributes,...i?{title:i}:{},class:s.classes.join(" ")};o&&(c[q]="");const l={...s.styles};it(r)&&(l.transform=va({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);const u=ve(l);u.length>0&&(c.style=u);const h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Ya(e){const{content:t,title:n,extra:a}=e,r={...a.attributes,...n?{title:n}:{},class:a.classes.join(" ")},i=ve(a.styles);i.length>0&&(r.style=i);const s=[];return s.push({tag:"span",attributes:r,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:_e}=j;function Ve(e){const t=e[0],n=e[1],[a]=e.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ee.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ee.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ee.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:r}}const Ga={found:!1,width:512,height:512};function Ba(e,t){!on&&!d.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Xe(e,t){let n=t;return t==="fa"&&d.styleDefault!==null&&(t=B()),new Promise((a,r)=>{if(n==="fa"){const i=kn(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&_e[t]&&_e[t][e]){const i=_e[t][e];return a(Ve(i))}Ba(e,t),a({...Ga,icon:d.showMissingIcons&&e?H("missingIconAbstract")||{}:{}})})}const Ot=()=>{},Je=d.measurePerformance&&me&&me.mark&&me.measure?me:{mark:Ot,measure:Ot},ie='FA "6.6.0"',Ha=e=>(Je.mark("".concat(ie," ").concat(e," begins")),()=>Sn(e)),Sn=e=>{Je.mark("".concat(ie," ").concat(e," ends")),Je.measure("".concat(ie," ").concat(e),"".concat(ie," ").concat(e," begins"),"".concat(ie," ").concat(e," ends"))};var ft={begin:Ha,end:Sn};const pe=()=>{};function Pt(e){return typeof(e.getAttribute?e.getAttribute(q):null)=="string"}function Va(e){const t=e.getAttribute?e.getAttribute(nt):null,n=e.getAttribute?e.getAttribute(at):null;return t&&n}function Xa(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(d.replacementClass)}function Ja(){return d.autoReplaceSvg===!0?ge.replace:ge[d.autoReplaceSvg]||ge.replace}function qa(e){return v.createElementNS("http://www.w3.org/2000/svg",e)}function Ka(e){return v.createElement(e)}function Nn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?qa:Ka}=t;if(typeof e=="string")return v.createTextNode(e);const a=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){a.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){a.appendChild(Nn(i,{ceFn:n}))}),a}function Qa(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const ge={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Nn(n),t)}),t.getAttribute(q)===null&&d.keepOriginalSource){let n=v.createComment(Qa(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~rt(t).indexOf(d.replacementClass))return ge.replace(e);const a=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,o)=>(o===d.replacementClass||o.match(a)?s.toSvg.push(o):s.toNode.push(o),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>ue(i)).join(`
`);t.setAttribute(q,""),t.innerHTML=r}};function Ct(e){e()}function On(e,t){const n=typeof t=="function"?t:pe;if(e.length===0)n();else{let a=Ct;d.mutateApproach===ra&&(a=G.requestAnimationFrame||Ct),a(()=>{const r=Ja(),i=ft.begin("mutate");e.map(r),i(),n()})}}let ut=!1;function Pn(){ut=!0}function qe(){ut=!1}let be=null;function Et(e){if(!bt||!d.observeMutations)return;const{treeCallback:t=pe,nodeCallback:n=pe,pseudoElementsCallback:a=pe,observeMutationsRoot:r=v}=e;be=new bt(i=>{if(ut)return;const s=B();ae(i).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!Pt(o.addedNodes[0])&&(d.searchPseudoElements&&a(o.target),t(o.target)),o.type==="attributes"&&o.target.parentNode&&d.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&Pt(o.target)&&~fa.indexOf(o.attributeName))if(o.attributeName==="class"&&Va(o.target)){const{prefix:c,iconName:l}=we(rt(o.target));o.target.setAttribute(nt,c||s),l&&o.target.setAttribute(at,l)}else Xa(o.target)&&n(o.target)})}),$&&be.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Za(){be&&be.disconnect()}function er(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((a,r)=>{const i=r.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(a[s]=o.join(":").trim()),a},{})),n}function tr(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"";let r=we(rt(e));return r.prefix||(r.prefix=B()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ia(r.prefix,e.innerText)||ot(r.prefix,Ye(e.innerText))),!r.iconName&&d.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function nr(e){const t=ae(e.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return d.autoA11y&&(n?t["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||ce()):(t["aria-hidden"]="true",t.focusable="false")),t}function ar(){return{iconName:null,title:null,titleId:null,prefix:null,transform:R,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Tt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=tr(e),i=nr(e),s=Be("parseNodeAttributes",{},e);let o=t.styleParser?er(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:R,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:i},...s}}const{styles:rr}=j;function Cn(e){const t=d.autoReplaceSvg==="nest"?Tt(e,{styleParser:!1}):Tt(e);return~t.extra.classes.indexOf(fn)?H("generateLayersText",e,t):H("generateSvgReplacementMutation",e,t)}let z=new Set;ln.map(e=>{z.add("fa-".concat(e))});Object.keys(X[w]).map(z.add.bind(z));Object.keys(X[I]).map(z.add.bind(z));Object.keys(X[_]).map(z.add.bind(z));z=[...z];function It(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$)return Promise.resolve();const n=v.documentElement.classList,a=u=>n.add("".concat(xt,"-").concat(u)),r=u=>n.remove("".concat(xt,"-").concat(u)),i=d.autoFetchSvg?z:ln.map(u=>"fa-".concat(u)).concat(Object.keys(rr));i.includes("fa")||i.push("fa");const s=[".".concat(fn,":not([").concat(q,"])")].concat(i.map(u=>".".concat(u,":not([").concat(q,"])"))).join(", ");if(s.length===0)return Promise.resolve();let o=[];try{o=ae(e.querySelectorAll(s))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const c=ft.begin("onTree"),l=o.reduce((u,h)=>{try{const f=Cn(h);f&&u.push(f)}catch(f){on||f.name==="MissingIcon"&&console.error(f)}return u},[]);return new Promise((u,h)=>{Promise.all(l).then(f=>{On(f,()=>{a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),c(),u()})}).catch(f=>{c(),h(f)})})}function ir(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Cn(e).then(n=>{n&&On([n],t)})}function sr(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(t||{}).icon?t:He(t||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:He(r||{})),e(a,{...n,mask:r})}}const or=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=R,symbol:a=!1,mask:r=null,maskId:i=null,title:s=null,titleId:o=null,classes:c=[],attributes:l={},styles:u={}}=t;if(!e)return;const{prefix:h,iconName:f,icon:p}=e;return ke({type:"icon",...e},()=>(K("beforeDOMElementCreation",{iconDefinition:e,params:t}),d.autoA11y&&(s?l["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(o||ce()):(l["aria-hidden"]="true",l.focusable="false")),ct({icons:{main:Ve(p),mask:r?Ve(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:f,transform:{...R,...n},symbol:a,title:s,maskId:i,titleId:o,extra:{attributes:l,styles:u,classes:c}})))};var lr={mixout(){return{icon:sr(or)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=It,e.nodeCallback=ir,e}}},provides(e){e.i2svg=function(t){const{node:n=v,callback:a=()=>{}}=t;return It(n,a)},e.generateSvgReplacementMutation=function(t,n){const{iconName:a,title:r,titleId:i,prefix:s,transform:o,symbol:c,mask:l,maskId:u,extra:h}=n;return new Promise((f,p)=>{Promise.all([Xe(a,s),l.iconName?Xe(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(x=>{let[E,y]=x;f([t,ct({icons:{main:E,mask:y},prefix:s,iconName:a,transform:o,symbol:c,maskId:u,title:r,titleId:i,extra:h,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(t){let{children:n,attributes:a,main:r,transform:i,styles:s}=t;const o=ve(s);o.length>0&&(a.style=o);let c;return it(i)&&(c=H("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(c||r.icon),{children:n,attributes:a}}}},cr={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return ke({type:"layer"},()=>{K("beforeDOMElementCreation",{assembler:e,params:t});let a=[];return e(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},fr={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=t;return ke({type:"counter",content:e},()=>(K("beforeDOMElementCreation",{content:e,params:t}),Ya({content:e.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(d.cssPrefix,"-layers-counter"),...a]}})))}}}},ur={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=R,title:a=null,classes:r=[],attributes:i={},styles:s={}}=t;return ke({type:"text",content:e},()=>(K("beforeDOMElementCreation",{content:e,params:t}),Nt({content:e,transform:{...R,...n},title:a,extra:{attributes:i,styles:s,classes:["".concat(d.cssPrefix,"-layers-text"),...r]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:a,transform:r,extra:i}=n;let s=null,o=null;if(en){const c=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();s=l.width/c,o=l.height/c}return d.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,Nt({content:t.innerHTML,width:s,height:o,transform:r,title:a,extra:i,watchable:!0})])}}};const dr=new RegExp('"',"ug"),_t=[1105920,1112319],Mt={FontAwesome:{normal:"fas",400:"fas"},...Hn,...Bn,...ea},Ke=Object.keys(Mt).reduce((e,t)=>(e[t.toLowerCase()]=Mt[t],e),{}),mr=Object.keys(Ke).reduce((e,t)=>{const n=Ke[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function pr(e){const t=e.replace(dr,""),n=Na(t,0),a=n>=_t[0]&&n<=_t[1],r=t.length===2?t[0]===t[1]:!1;return{value:Ye(r?t[0]:t),isSecondary:a||r}}function gr(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),r=isNaN(a)?"normal":a;return(Ke[n]||{})[r]||mr[n]}function Ft(e,t){const n="".concat(aa).concat(t.replace(":","-"));return new Promise((a,r)=>{if(e.getAttribute(n)!==null)return a();const s=ae(e.children).filter(f=>f.getAttribute(De)===t)[0],o=G.getComputedStyle(e,t),c=o.getPropertyValue("font-family"),l=c.match(la),u=o.getPropertyValue("font-weight"),h=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),a();if(l&&h!=="none"&&h!==""){const f=o.getPropertyValue("content");let p=gr(c,u);const{value:x,isSecondary:E}=pr(f),y=l[0].startsWith("FontAwesome");let A=ot(p,x),k=A;if(y){const O=_a(x);O.iconName&&O.prefix&&(A=O.iconName,p=O.prefix)}if(A&&!E&&(!s||s.getAttribute(nt)!==p||s.getAttribute(at)!==k)){e.setAttribute(n,k),s&&e.removeChild(s);const O=ar(),{extra:F}=O;F.attributes[De]=t,Xe(A,p).then(T=>{const m=ct({...O,icons:{main:T,mask:lt()},prefix:p,iconName:k,extra:F,watchable:!0}),S=v.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(S,e.firstChild):e.appendChild(S),S.outerHTML=m.map(P=>ue(P)).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function hr(e){return Promise.all([Ft(e,"::before"),Ft(e,"::after")])}function br(e){return e.parentNode!==document.head&&!~ia.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(De)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Lt(e){if($)return new Promise((t,n)=>{const a=ae(e.querySelectorAll("*")).filter(br).map(hr),r=ft.begin("searchPseudoElements");Pn(),Promise.all(a).then(()=>{r(),qe(),t()}).catch(()=>{r(),qe(),n()})})}var yr={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Lt,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=v}=t;d.searchPseudoElements&&Lt(n)}}};let Rt=!1;var vr={mixout(){return{dom:{unwatch(){Pn(),Rt=!0}}}},hooks(){return{bootstrap(){Et(Be("mutationObserverCallbacks",{}))},noAuto(){Za()},watch(e){const{observeMutationsRoot:t}=e;Rt?qe():Et(Be("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const jt=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let s=r.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)};var xr={mixout(){return{parse:{transform:e=>jt(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=jt(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:r,iconWidth:i}=t;const s={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(o," ").concat(c," ").concat(l)},h={transform:"translate(".concat(i/2*-1," -256)")},f={outer:s,inner:u,path:h};return{tag:"g",attributes:{...f.outer},children:[{tag:"g",attributes:{...f.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...f.path}}]}]}}}};const Me={x:0,y:0,width:"100%",height:"100%"};function zt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function wr(e){return e.tag==="g"?e.children:[e]}var kr={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),a=n?we(n.split(" ").map(r=>r.trim())):lt();return a.prefix||(a.prefix=B()),e.mask=a,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:a,main:r,mask:i,maskId:s,transform:o}=t;const{width:c,icon:l}=r,{width:u,icon:h}=i,f=ya({transform:o,containerWidth:u,iconWidth:c}),p={tag:"rect",attributes:{...Me,fill:"white"}},x=l.children?{children:l.children.map(zt)}:{},E={tag:"g",attributes:{...f.inner},children:[zt({tag:l.tag,attributes:{...l.attributes,...f.path},...x})]},y={tag:"g",attributes:{...f.outer},children:[E]},A="mask-".concat(s||ce()),k="clip-".concat(s||ce()),O={tag:"mask",attributes:{...Me,id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[p,y]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:wr(h)},O]};return n.push(F,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(A,")"),...Me}}),{children:n,attributes:a}}}},Ar={provides(e){let t=!1;G.matchMedia&&(t=G.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...r,attributeName:"opacity"},s={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return t||s.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Sr={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return e.symbol=a,e}}}},Nr=[wa,lr,cr,fr,ur,yr,vr,xr,kr,Ar,Sr];Ra(Nr,{mixoutsTo:M});M.noAuto;M.config;M.library;M.dom;const Qe=M.parse;M.findIconDefinition;M.toHtml;const Or=M.icon;M.layer;M.text;M.counter;function Dt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Dt(Object(n),!0).forEach(function(a){Z(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function ye(e){"@babel/helpers - typeof";return ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ye(e)}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pr(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Cr(e,t){if(e==null)return{};var n=Pr(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function Ze(e){return Er(e)||Tr(e)||Ir(e)||_r()}function Er(e){if(Array.isArray(e))return et(e)}function Tr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ir(e,t){if(e){if(typeof e=="string")return et(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return et(e,t)}}function et(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function _r(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mr(e){var t,n=e.beat,a=e.fade,r=e.beatFade,i=e.bounce,s=e.shake,o=e.flash,c=e.spin,l=e.spinPulse,u=e.spinReverse,h=e.pulse,f=e.fixedWidth,p=e.inverse,x=e.border,E=e.listItem,y=e.flip,A=e.size,k=e.rotation,O=e.pull,F=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":s,"fa-flash":o,"fa-spin":c,"fa-spin-reverse":u,"fa-spin-pulse":l,"fa-pulse":h,"fa-fw":f,"fa-inverse":p,"fa-border":x,"fa-li":E,"fa-flip":y===!0,"fa-flip-horizontal":y==="horizontal"||y==="both","fa-flip-vertical":y==="vertical"||y==="both"},Z(t,"fa-".concat(A),typeof A<"u"&&A!==null),Z(t,"fa-rotate-".concat(k),typeof k<"u"&&k!==null&&k!==0),Z(t,"fa-pull-".concat(O),typeof O<"u"&&O!==null),Z(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(F).map(function(T){return F[T]?T:null}).filter(function(T){return T})}function Fr(e){return e=e-0,e===e}function En(e){return Fr(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Lr=["style"];function Rr(e){return e.charAt(0).toUpperCase()+e.slice(1)}function jr(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=En(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?t[Rr(r)]=i:t[r]=i,t},{})}function Tn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(c){return Tn(e,c)}),r=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.attrs.className=u,delete t.attributes.class;break;case"style":c.attrs.style=jr(u);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?c.attrs[l.toLowerCase()]=u:c.attrs[En(l)]=u}return c},{attrs:{}}),i=n.style,s=i===void 0?{}:i,o=Cr(n,Lr);return r.attrs.style=L(L({},r.attrs.style),s),e.apply(void 0,[t.tag,L(L({},r.attrs),o)].concat(Ze(a)))}var In=!1;try{In=!0}catch{}function zr(){if(!In&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ut(e){if(e&&ye(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Qe.icon)return Qe.icon(e);if(e===null)return null;if(e&&ye(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Fe(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Z({},e,t):{}}var $t={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},dt=Vt.forwardRef(function(e,t){var n=L(L({},$t),e),a=n.icon,r=n.mask,i=n.symbol,s=n.className,o=n.title,c=n.titleId,l=n.maskId,u=Ut(a),h=Fe("classes",[].concat(Ze(Mr(n)),Ze((s||"").split(" ")))),f=Fe("transform",typeof n.transform=="string"?Qe.transform(n.transform):n.transform),p=Fe("mask",Ut(r)),x=Or(u,L(L(L(L({},h),f),p),{},{symbol:i,title:o,titleId:c,maskId:l}));if(!x)return zr("Could not find icon",u),null;var E=x.abstract,y={ref:t};return Object.keys(n).forEach(function(A){$t.hasOwnProperty(A)||(y[A]=n[A])}),Dr(E[0],y)});dt.displayName="FontAwesomeIcon";dt.propTypes={beat:g.bool,border:g.bool,beatFade:g.bool,bounce:g.bool,className:g.string,fade:g.bool,flash:g.bool,mask:g.oneOfType([g.object,g.array,g.string]),maskId:g.string,fixedWidth:g.bool,inverse:g.bool,flip:g.oneOf([!0,!1,"horizontal","vertical","both"]),icon:g.oneOfType([g.object,g.array,g.string]),listItem:g.bool,pull:g.oneOf(["right","left"]),pulse:g.bool,rotation:g.oneOf([0,90,180,270]),shake:g.bool,size:g.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.bool,spinPulse:g.bool,spinReverse:g.bool,symbol:g.oneOfType([g.bool,g.string]),title:g.string,titleId:g.string,transform:g.oneOfType([g.string,g.object]),swapOpacity:g.bool};var Dr=Tn.bind(null,Vt.createElement);const Ur={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},$r=e=>({hidden:{y:-50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay:e}}}),Wr=(e,t,n,a)=>({hidden:{x:e==="left"?100:e==="right"?-100:0,y:e==="up"?100:e==="down"?-100:0,opacity:0},show:{x:0,y:0,opacity:1,transition:{type:t,delay:n,duration:a,ease:"easeOut"}}}),Yr=(e,t)=>({hidden:{},show:{transition:{staggerChildren:e,delayChildren:t||0}}}),Le=[{language:"JavaScript",file:"pipeline.js",color:"#facc15",code:`const active = events.filter(Boolean);
const result = active.map(transform);
await publish(result);`},{language:"TypeScript",file:"events.ts",color:"#60a5fa",code:`interface UserEvent {
  id: string;
  secure: boolean;
}
const queue: UserEvent[] = [];`},{language:"Go",file:"worker.go",color:"#22d3ee",code:`func process(queue chan Job) {
  for job := range queue {
    go run(job)
  }
}`},{language:"Python",file:"model.py",color:"#fbbf24",code:`def predict(records):
    clean = normalize(records)
    return model.predict(clean)`},{language:"SQL",file:"metrics.sql",color:"#38bdf8",code:`SELECT user_id, COUNT(*) AS events
FROM activity
WHERE created_at >= NOW() - INTERVAL '1 day'
GROUP BY user_id;`},{language:"Shell",file:"deploy.sh",color:"#4ade80",code:`$ docker build -t app:latest .
$ terraform plan
$ ./deploy --safe --region us-east-1`},{language:"Java",file:"Service.java",color:"#fb7185",code:`public Result execute(Input input) {
  validate(input);
  return repository.save(input);
}`},{language:"C",file:"socket.c",color:"#cbd5e1",code:`int socket_fd = socket(AF_INET, SOCK_STREAM, 0);
if (socket_fd < 0) {
  return EXIT_FAILURE;
}`}],Wt=[.5,10,21,33,45,57,68,78,87,92],Yt=[0,79,3,82,1,76,5,84,2,74],Gt=(e,t=Math.floor(Math.random()*Le.length),n=null,a=!1)=>{const r=Le[t%Le.length];return{id:e,snippet:r,left:n===null?Math.random()>.5?Math.random()*8:74+Math.random()*11:Yt[n%Yt.length],top:n===null?Math.random()*92:Wt[n%Wt.length],width:225+Math.round(Math.random()*115),initialTyped:a?Math.round(r.code.length*(.18+Math.random()*.25)):0,life:3,initial:a}},Gr=()=>{const[e,t]=C.useState([]),[n,a]=C.useState(!0),[r,i]=C.useState(()=>typeof document>"u"||document.visibilityState!=="hidden"),s=C.useRef(null),o=C.useRef(0),c=C.useRef(new Map),l=C.useRef(new Map),u=!n||!r;C.useEffect(()=>{t(Array.from({length:10},(f,p)=>Gt(o.current+=1,p,p,!0)))},[]),C.useEffect(()=>{const f=s.current;if(!f)return;const p=new IntersectionObserver(([x])=>a(x.isIntersecting),{threshold:.01});return p.observe(f),()=>p.disconnect()},[]),C.useEffect(()=>{const f=()=>i(document.visibilityState!=="hidden");return document.addEventListener("visibilitychange",f),()=>document.removeEventListener("visibilitychange",f)},[]),C.useEffect(()=>{if(u)return;const f=window.setInterval(()=>{e.forEach(p=>{const x=l.current.get(p.id)??p.initialTyped;if(x>=p.snippet.code.length)return;const E=Math.min(x+1,p.snippet.code.length);l.current.set(p.id,E);const y=c.current.get(p.id);y&&(y.textContent=p.snippet.code.slice(0,E))})},20);return()=>window.clearInterval(f)},[u,e]),C.useEffect(()=>{if(u)return;const f=window.setInterval(()=>{t(p=>[...p.slice(-10),Gt(o.current+=1)])},750);return()=>window.clearInterval(f)},[u]);const h=f=>{c.current.delete(f),l.current.delete(f),t(p=>p.filter(x=>x.id!==f))};return N("div",{ref:s,className:"pointer-events-none absolute inset-0 z-0 overflow-hidden","aria-hidden":"true","data-terminals-paused":u?"true":"false",children:[b("div",{className:"absolute inset-0 z-0 bg-[radial-gradient(circle_at_25%_20%,rgba(34,197,94,.08),transparent_34%),radial-gradient(circle_at_78%_72%,rgba(59,130,246,.1),transparent_38%)]"}),e.map(f=>N("div",{className:`github-terminal z-10 ${f.initial?"github-terminal--initial":""}`,style:{left:`${f.left}%`,top:`${f.top}%`,width:f.width,"--terminal-life":`${f.life}s`,"--terminal-accent":f.snippet.color},onAnimationEnd:()=>h(f.id),children:[N("div",{className:"github-terminal__bar",children:[b("span",{className:"bg-rose-400"}),b("span",{className:"bg-amber-300"}),b("span",{className:"bg-emerald-400"}),b("strong",{children:f.snippet.file}),b("em",{children:f.snippet.language})]}),N("pre",{children:[b("code",{ref:p=>{p?(c.current.set(f.id,p),l.current.has(f.id)||l.current.set(f.id,f.initialTyped)):c.current.delete(f.id)},children:f.snippet.code.slice(0,f.initialTyped)}),b("span",{className:"github-terminal__cursor"})]})]},f.id)),b("div",{className:"absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(5,8,22,.04)_0%,rgba(5,8,22,.16)_72%,rgba(5,8,22,.28)_100%)]"})]})},Bt={All:{accent:"#c084fc"},"TypeScript / JavaScript":{accent:"#60a5fa"},Python:{accent:"#38bdf8"},Java:{accent:"#fb7185"},C:{accent:"#94a3b8"}},Ht={accent:"#94a3b8"},Br=[{label:"TypeScript",pattern:/typescript/i},{label:"JavaScript",pattern:/javascript/i},{label:"React",pattern:/react/i},{label:"Node.js",pattern:/node\.js/i},{label:"Express",pattern:/express\.js|express/i},{label:"MongoDB",pattern:/mongodb/i},{label:"Docker",pattern:/docker/i},{label:"Chakra UI",pattern:/chakra ui/i},{label:"NativeScript",pattern:/nativescript/i},{label:"OBS",pattern:/\bobs\b/i},{label:"Python",pattern:/python/i},{label:"Discord.py",pattern:/discord\.py/i},{label:"Machine Learning",pattern:/machine learning|\bai\b/i},{label:"Naive Bayes",pattern:/naive bayes/i},{label:"Kalman Filters",pattern:/kalman/i},{label:"Shopify API",pattern:/shopify/i},{label:"SQL",pattern:/\bsql\b/i},{label:"DNS",pattern:/\bdns\b/i},{label:"Java",pattern:/java-based|java project|built with java|developed with java/i},{label:"RuneLite",pattern:/runelite/i},{label:"C#",pattern:/c#/i},{label:"Unity",pattern:/unity/i},{label:"C",pattern:/\bc project/i},{label:"TCP/IP",pattern:/\btcp\b/i},{label:"Go",pattern:/\bgolang\b|built (?:in|with) go\b/i}],Hr={"TypeScript / JavaScript":["JavaScript","Node.js","Web APIs"],Python:["Python","REST APIs","Data Processing"],Java:["Java","RuneLite","Plugin API"],C:["C","Networking","Systems Programming"]},Re={TypeScript:"#60a5fa",JavaScript:"#facc15",React:"#22d3ee","Node.js":"#4ade80",Express:"#a3a3a3",MongoDB:"#34d399",Docker:"#38bdf8","Chakra UI":"#2dd4bf",NativeScript:"#3b82f6",OBS:"#c084fc",Python:"#fbbf24","Discord.py":"#818cf8","Machine Learning":"#e879f9","Naive Bayes":"#f472b6","Kalman Filters":"#a78bfa","Shopify API":"#84cc16",SQL:"#38bdf8",DNS:"#fb923c",Java:"#fb7185",RuneLite:"#f59e0b","Plugin API":"#f97316","C#":"#a78bfa",Unity:"#e5e7eb",C:"#94a3b8","TCP/IP":"#2dd4bf",Networking:"#34d399","Systems Programming":"#cbd5e1","Web APIs":"#60a5fa","REST APIs":"#2dd4bf","Data Processing":"#c084fc","Game Development":"#f472b6",Go:"#22d3ee"},je=e=>{const t=`${e.name} ${e.description}`,n=Br.filter(({pattern:r})=>r.test(t)).map(({label:r})=>r),a=e.name.toLowerCase().includes("unity")?["C#","Unity","Game Development"]:Hr[e.sourceLanguage]||["Software Engineering","APIs","Data"];return[...new Set([...e.technologies||[],...n,...a])].slice(0,4)},Jr=({compact:e=!1})=>{const[t,n]=C.useState(0),[a,r]=C.useState("All"),[i,s]=C.useState(5),[o,c]=C.useState(1),l=["All",...Object.keys(Ce)],u=l[t],h=u==="All"?Object.entries(Ce).flatMap(([m,S])=>S.map(P=>({...P,sourceLanguage:m}))):Ce[u].map(m=>({...m,sourceLanguage:u})),f=["All",...Array.from(new Set(h.flatMap(m=>je(m)))).sort()],p=a==="All"?h:h.filter(m=>je(m).includes(a)),x=p.slice(0,i*o),E=x.length<p.length;C.useEffect(()=>{const m=()=>{if(e){c(window.innerWidth>=640?2:1);return}c(window.innerWidth>=1024?3:window.innerWidth>=768?2:1)};return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[e]);const[y,A]=pt({threshold:.1,triggerOnce:!0}),[k,O]=pt({threshold:.1,triggerOnce:!0}),F=(m,S)=>{n(S!=="All"&&u===S?0:m),r("All"),s(5),Pe("Language Switch","Change")},T=m=>{r(m!=="All"&&a===m?"All":m),s(5),Pe("Repository Tool","Change")};return N("div",{className:"relative isolate min-h-[1100px] overflow-hidden",children:[b(Gr,{}),N("div",{className:"relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 lg:px-12",children:[N(Oe.div,{ref:y,className:"text-center",variants:$r(),initial:"hidden",animate:A?"show":"hidden",children:[b("p",{className:"mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300/80",children:"Code in the open"}),b("h2",{className:"text-3xl font-bold tracking-tight text-white sm:text-5xl",children:"GitHub & More"}),b("p",{className:"mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base",children:"A language-by-language look at experiments, utilities, and products I’ve built over time."})]}),b("div",{className:"relative mt-12 overflow-hidden rounded-[24px] border border-white/10 bg-[#090e1d]/90 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.25)] sm:p-8",children:N("div",{className:"flex flex-col items-center justify-between gap-6 sm:flex-row",children:[N("div",{className:"w-full min-w-0",children:[b("ul",{className:"flex flex-wrap justify-center gap-3 sm:justify-start","aria-label":"Choose a language",children:l.map((m,S)=>{const P=u===m,de=Bt[m]||Ht;return b("li",{children:N("button",{type:"button","aria-pressed":P,"aria-label":P&&m!=="All"?`Clear ${m} filter`:`Filter by ${m}`,onClick:()=>F(S,m),className:`group flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${P?"border-white/20 bg-white/[0.08] text-white shadow-lg":"border-white/10 bg-white/[0.02] text-slate-400 hover:-translate-y-0.5 hover:border-white/20 hover:text-white"}`,children:[b("span",{className:`h-2 w-2 rounded-full transition-transform duration-300 ${P?"scale-125":"scale-75 opacity-60 group-hover:scale-100"}`,style:{backgroundColor:de.accent}}),m]})},m)})}),N("div",{className:"mt-5 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4",children:[b("span",{className:"mr-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500",children:"Tools"}),f.map(m=>{const S=a===m,P=Re[m]||"#c084fc";return b("button",{type:"button","aria-pressed":S,"aria-label":S&&m!=="All"?`Clear ${m} filter`:`Filter by ${m}`,onClick:()=>T(m),className:"shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all hover:-translate-y-0.5",style:{borderColor:`${P}${S?"88":"44"}`,backgroundColor:`${P}${S?"20":"0a"}`,color:S?P:"#94a3b8"},children:m},m)})]})]}),N("div",{className:"flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.05] px-5 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.24)]",children:[b(Fn,{shadowColor:"rgba(0, 0, 255, 0.8)",eggColor:"blue",children:b(dt,{icon:Ur,className:"text-4xl text-white"})}),b("a",{href:"https://github.com/mattcsnyder",target:"_blank",rel:"noopener noreferrer",className:"text-lg font-bold tracking-tight text-white transition-colors hover:text-sky-300",children:"mattcsnyder"})]})]})}),N(Oe.div,{ref:k,className:`mt-8 grid grid-cols-1 gap-5 ${e?"sm:grid-cols-2":"md:grid-cols-2 lg:grid-cols-3"}`,variants:Yr(.08,0),initial:"hidden",animate:O?"show":"hidden",children:[p.length===0&&N("div",{className:"col-span-full rounded-2xl border border-white/10 bg-white/[0.025] px-6 py-12 text-center text-sm text-slate-500",children:["No repositories using ",a," in this language yet."]}),x.map((m,S)=>{const P=Bt[m.sourceLanguage]||Ht,de=je(m),mt=de[0],_n=de.slice(1),Ae=Re[mt]||P.accent;return N(Oe.div,{variants:Wr("up","spring",0,.5),className:"group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]",children:[b("span",{className:"absolute inset-x-0 top-0 h-[3px]",style:{backgroundColor:P.accent}}),N("div",{className:"flex items-start justify-between gap-3",children:[b("h3",{className:"truncate text-lg font-bold text-white",children:m.visibility==="Public"?b("a",{href:`https://github.com/snooder/${m.name}`,target:"_blank",rel:"noopener noreferrer",className:"transition-colors hover:text-sky-300",onClick:()=>Pe("Repository","Click",m.name),children:m.name}):m.name}),b("span",{className:"shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-wide",style:{borderColor:`${Ae}66`,backgroundColor:`${Ae}14`,color:Ae},children:mt})]}),b("p",{className:"mt-3 flex-1 text-sm leading-6 text-slate-400",children:m.description}),b("ul",{className:"mt-5 flex flex-wrap gap-2","aria-label":`${m.name} technologies`,children:_n.map(Se=>{const Ne=Re[Se]||P.accent;return b("li",{className:"rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-wide",style:{borderColor:`${Ne}66`,backgroundColor:`${Ne}14`,color:Ne},children:Se},Se)})}),b("p",{className:"mt-5 text-[11px] font-medium uppercase tracking-[0.15em] text-slate-600",children:m.lastUpdated})]},`${m.sourceLanguage}-${m.name}-${S}`)})]},`${u}-${a}`),E&&N("div",{className:"mt-8 flex flex-col items-center gap-3",children:[N("p",{className:"text-xs font-medium uppercase tracking-[0.18em] text-slate-500",children:["Showing ",x.length," of ",p.length," projects"]}),b("button",{type:"button",onClick:()=>s(m=>m+5),className:"rounded-full border border-sky-400/40 bg-sky-400/10 px-7 py-3 text-sm font-bold text-sky-200 shadow-[0_0_24px_rgba(56,189,248,0.12)] transition hover:-translate-y-0.5 hover:border-sky-300/70 hover:bg-sky-400/20 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300",children:"Show more projects"})]})]})]})};export{Jr as default};
