(self.webpackChunkbaltimore_food_drinks_map=self.webpackChunkbaltimore_food_drinks_map||[]).push([[687],{169:function(e,t,n){!function(e,t){"use strict";function n(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var r=n(t),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)};function i(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}"function"===typeof SuppressedError&&SuppressedError;var l,a={exports:{}},c={};function s(){if(l)return c;l=1;var e=r.default,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,r){var l,c={},s=null,u=null;for(l in void 0!==r&&(s=""+r),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(u=n.ref),n)o.call(n,l)&&!a.hasOwnProperty(l)&&(c[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===c[l]&&(c[l]=n[l]);return{$$typeof:t,type:e,key:s,ref:u,props:c,_owner:i.current}}return c.Fragment=n,c.jsx=s,c.jsxs=s,c}a.exports=s();var u=a.exports,d=function(e,t,n){return"function"===typeof e?e(n):"object"===typeof e?e:t(n)},f={3:"rotate(180deg)",2:"rotateY(180deg)",4:"rotate(180deg) rotateY(180deg)",5:"rotate(270deg) rotateY(180deg)",6:"rotate(90deg)",7:"rotate(90deg) rotateY(180deg)",8:"rotate(270deg)"},h=16,v={display:"flex",flexWrap:"wrap"},p=function(e){var t=e.item,n=f[t.orientation],r={cursor:"pointer",maxWidth:"none",width:t.scaledWidth,height:t.scaledHeight,marginLeft:t.marginLeft,marginTop:0,transform:n};if(t.isSelected){var o=t.scaledWidth/t.scaledHeight,i=t.scaledHeight-2*h,l=t.viewportWidth-2*h,a=void 0,c=void 0;t.scaledWidth>t.scaledHeight?(c=t.scaledWidth-2*h,a=Math.floor(c/o)):(a=t.scaledHeight-2*h,c=Math.floor(a*o));var s=Math.abs(Math.floor((i-a)/2)),u=Math.abs(Math.floor((l-c)/2));r.width=c,r.height=a,r.marginLeft=0===u?0:-u,r.marginTop=0===s?0:-s}return r},m=function(e){var t=e.item,n={width:t.viewportWidth,height:t.scaledHeight,overflow:"hidden"};return t.nano&&(n.background="url(".concat(t.nano,")"),n.backgroundSize="cover",n.backgroundPosition="center center"),t.isSelected&&(n.width=t.viewportWidth-2*h,n.height=t.scaledHeight-2*h,n.margin=h),n},g=function(e){return{pointerEvents:"none",opacity:e.hover?1:0,position:"absolute",height:"100%",width:"100%"}},b=function(e){return{margin:e.margin,WebkitUserSelect:"none",position:"relative",background:"#eee",padding:"0px"}},y=function(e){return{pointerEvents:"none",opacity:1,position:"absolute",height:"100%",width:"100%",background:e.showOverlay?"linear-gradient(to bottom,rgba(0,0,0,0.26),transparent 56px,transparent)":"none"}},x={pointerEvents:"none",opacity:1,position:"absolute",height:"36px",width:"100%"},w={background:"white",width:"100%",margin:0,userSelect:"text",WebkitUserSelect:"text",MozUserSelect:"text",overflow:"hidden"},E={padding:"2px",pointerEvents:"none",position:"absolute",minHeight:"0px",maxHeight:"160px",width:"100%",bottom:"0px",overflow:"hidden"},S={display:"inline-block",cursor:"pointer",pointerEvents:"visible",margin:"2px"},C=function(){return{display:"inline",padding:".2em .6em .3em",fontSize:"75%",fontWeight:"600",lineHeight:"1",color:"yellow",background:"rgba(0,0,0,0.65)",textAlign:"center",whiteSpace:"nowrap",verticalAlign:"baseline",borderRadius:".25em"}},k=function(e){return{visibility:e.isVisible?"visible":"hidden",background:"none",float:"left",width:36,height:36,border:"none",padding:6,cursor:"pointer",pointerEvents:"visible"}},M=function(e){var n=e.isSelected,r=void 0!==n&&n,i=e.isVisible,l=void 0===i||i,a=e.onClick,c=e.color,s=void 0===c?"#FFFFFFB2":c,d=e.selectedColor,f=void 0===d?"#4285F4FF":d,h=e.hoverColor,v=void 0===h?"#FFFFFFFF":h,p=t.useState(!1),m=p[0],g=p[1],b={display:r?"block":"none"},y=r?f:m?v:s,x=function(){return g(!0)},w=function(){return g(!1)};return u.jsx("div",o({"data-testid":"grid-gallery-item_check-button",title:"Select",style:k({isVisible:l}),onClick:a,onMouseOver:x,onMouseOut:w},{children:u.jsxs("svg",o({fill:y,height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},{children:[u.jsxs("radialGradient",o({id:"shadow",cx:"38",cy:"95.488",r:"10.488",gradientTransform:"matrix(1 0 0 -1 -26 109)",gradientUnits:"userSpaceOnUse"},{children:[u.jsx("stop",{offset:".832",stopColor:"#010101"}),u.jsx("stop",{offset:"1",stopColor:"#010101",stopOpacity:"0"})]})),u.jsx("circle",{style:b,opacity:".26",fill:"url(#shadow)",cx:"12",cy:"13.512",r:"10.488"}),u.jsx("circle",{style:b,fill:"#FFF",cx:"12",cy:"12.2",r:"8.292"}),u.jsx("path",{d:"M0 0h24v24H0z",fill:"none"}),u.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})]}))}))},R=function(e){var n=e.item,r=e.thumbnailImageComponent,i=e.isSelectable,l=void 0===i||i,a=e.thumbnailStyle,c=e.tagStyle,s=e.tileViewportStyle,f=e.margin,h=e.index,v=e.onSelect,k=e.onClick,R={item:n},N=t.useState(!1),P=N[0],L=N[1],I={key:h,"data-testid":"grid-gallery-item_thumbnail",src:n.src,alt:n.alt?n.alt:"",title:"string"===typeof n.caption?n.caption:null,style:d(a,p,R)},_=function(e){l&&v(h,e)},W=function(e){k(h,e)},O={item:n,index:h,margin:f,onSelect:v,onClick:k,isSelectable:l,tileViewportStyle:s,thumbnailStyle:a,tagStyle:c};return u.jsxs("div",o({className:"ReactGridGallery_tile","data-testid":"grid-gallery-item",onMouseEnter:function(){return L(!0)},onMouseLeave:function(){return L(!1)},style:b({margin:f})},{children:[u.jsx("div",o({className:"ReactGridGallery_tile-icon-bar",style:x},{children:u.jsx(M,{isSelected:n.isSelected,isVisible:n.isSelected||l&&P,onClick:_})})),!!n.tags&&u.jsx("div",o({className:"ReactGridGallery_tile-bottom-bar",style:E},{children:n.tags.map((function(e,t){return u.jsx("div",o({title:e.title,style:S},{children:u.jsx("span",o({style:d(c,C,R)},{children:e.value}))}),e.key||t)}))})),!!n.customOverlay&&u.jsx("div",o({className:"ReactGridGallery_custom-overlay",style:g({hover:P})},{children:n.customOverlay})),u.jsx("div",{className:"ReactGridGallery_tile-overlay",style:y({showOverlay:P&&!n.isSelected&&l})}),u.jsx("div",o({className:"ReactGridGallery_tile-viewport","data-testid":"grid-gallery-item_viewport",style:d(s,m,R),onClick:W},{children:r?u.jsx(r,o({},O,{imageProps:I})):u.jsx("img",o({},I))})),n.thumbnailCaption&&u.jsx("div",o({className:"ReactGridGallery_tile-description",style:w},{children:n.thumbnailCaption}))]}))};function N(e){var n=t.useRef(null),r=t.useRef(),o=t.useState(e),i=o[0],l=o[1],a=t.useCallback((function(e){var t;null===(t=r.current)||void 0===t||t.disconnect(),r.current=void 0,n.current=e;var o=function(){if(n.current){var e=n.current.clientWidth;try{e=n.current.getBoundingClientRect().width}catch(t){}l(Math.floor(e))}};o(),e&&"undefined"!==typeof ResizeObserver&&(r.current=new ResizeObserver(o),r.current.observe(e))}),[]);return{containerRef:a,containerWidth:i}}var P=function(e,t,n){var r=[],o=0;for(var i in e){var l=e[i].scaledWidth/t;r[i]=Math.floor(l*n),o+=r[i]}for(var a=n-o;a>0;)for(var i in r)if(r[i]++,--a<0)break;return r},L=function(e,t){for(var n=t.containerWidth,r=t.rowHeight,l=[],a=2*t.margin,c=i([],e,!0),s=0;c.length>0&&s<n;){var u=c.shift(),d=Math.floor(r*(u.width/u.height)),f=o(o({},u),{scaledHeight:r,scaledWidth:d,viewportWidth:d,marginLeft:0});l.push(f),s+=f.scaledWidth+a}var h=s-n;if(l.length>0&&h>0){var v=P(l,s,h);for(var p in l){var m=v[p];(u=l[p]).marginLeft=-Math.abs(Math.floor(m/2)),u.viewportWidth=u.scaledWidth-m}}return[l,c]},I=function(e,t,n){void 0===n&&(n=[]);var r=L(e,t),o=r[0],l=r[1],a=i(i([],n,!0),[o],!1);return t.maxRows&&a.length>=t.maxRows?a:l.length?I(l,t,a):a},_=function(e,t){var n=t.containerWidth,r=t.maxRows,o=t.rowHeight,i=t.margin;return e&&n?I(e,{containerWidth:n,maxRows:r,rowHeight:o="undefined"===typeof o?180:o,margin:i="undefined"===typeof i?2:i}):[]},W=function(e,t){var n=_(e,t);return[].concat.apply([],n)},O=function(e){var t=e.images,n=e.id,r=void 0===n?"ReactGridGallery":n,i=e.enableImageSelection,l=void 0===i||i,a=e.onSelect,c=void 0===a?function(){}:a,s=e.rowHeight,d=void 0===s?180:s,f=e.maxRows,h=e.margin,p=void 0===h?2:h,m=e.defaultContainerWidth,g=void 0===m?0:m,b=e.onClick,y=void 0===b?function(){}:b,x=e.tileViewportStyle,w=e.thumbnailStyle,E=e.tagStyle,S=e.thumbnailImageComponent,C=N(g),k=C.containerRef,M=C.containerWidth,P=W(t,{containerWidth:M,maxRows:f,rowHeight:d,margin:p}),L=function(e,n){n.preventDefault(),c(e,t[e],n)},I=function(e,n){y(e,t[e],n)};return u.jsx("div",o({id:r,className:"ReactGridGallery",ref:k},{children:u.jsx("div",o({style:v},{children:P.map((function(e,t){return u.jsx(R,{item:e,index:t,margin:p,height:d,isSelectable:l,onClick:I,onSelect:L,tagStyle:E,tileViewportStyle:x,thumbnailStyle:w,thumbnailImageComponent:S},e.key||t)}))}))}))};O.displayName="Gallery",e.CheckButton=M,e.Gallery=O,e.buildLayout=_,e.buildLayoutFlat=W,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(43))},189:()=>{},451:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>wt});var r=n(43);const o="carousel",i="controller",l="portal",a="toolbar",c="loading",s="error",u="complete",d="placeholder",f=e=>"active-slide-".concat(e),h=(f(c),f("playing"),f(s),f(u),"flex_center"),v="no_scroll_padding",p="slide_wrapper",m="prev",g="next",b="swipe",y="close",x="onPointerDown",w="onPointerMove",E="onPointerUp",S="onPointerLeave",C="onPointerCancel",k="onKeyDown",M="onKeyUp",R="onWheel",N="Escape",P="ArrowLeft",L="ArrowRight",I="icon",_="contain",W="cover",O="Unknown action type";var F=n(950);const A="yarl__";function D(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return[...t].filter(Boolean).join(" ")}function j(e){return"".concat(A).concat(e)}function T(e){return"--".concat(A).concat(e)}function H(e,t){return"".concat(e).concat(t?"_".concat(t):"")}function U(e){return t=>H(e,t)}function G(e,t){var n;return null!==(n=null===e||void 0===e?void 0:e[t])&&void 0!==n?n:t}function z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return()=>{t.forEach((e=>{e()}))}}function B(e,t,n){return()=>{const o=r.useContext(n);if(!o)throw new Error("".concat(e," must be used within a ").concat(t,".Provider"));return o}}function X(){return"undefined"!==typeof window}function V(e){return void 0===e.type||"image"===e.type}function Y(e){return"string"===typeof e?Number.parseInt(e,10):e}function K(e){if("number"===typeof e)return{pixel:e};if("string"===typeof e){const t=Y(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function $(e,t){const n=K(t),r=void 0!==n.percent?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function q(e,t){return t>0?(e%t+t)%t:0}function J(e){return e.length>0}function Q(e,t){return e[q(t,e.length)]}function Z(e,t){return J(e)?Q(e,t):void 0}function ee(e){return V(e)?e.src:void 0}const te={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[y]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:_,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function ne(e,t){return{name:e,component:t}}function re(e,t){return{module:e,children:t}}function oe(e,t,n){return e.module.name===t?n(e):e.children?[re(e.module,e.children.flatMap((e=>{var r;return null!==(r=oe(e,t,n))&&void 0!==r?r:[]})))]:[e]}function ie(e,t,n){return e.flatMap((e=>{var r;return null!==(r=oe(e,t,n))&&void 0!==r?r:[]}))}const le=r.createContext(null),ae=B("useDocument","DocumentContext",le);function ce(e){let{nodeRef:t,children:n}=e;const o=r.useMemo((()=>{const e=e=>{var n;return(null===(n=e||t.current)||void 0===n?void 0:n.ownerDocument)||document};return{getOwnerDocument:e,getOwnerWindow:t=>{var n;return(null===(n=e(t))||void 0===n?void 0:n.defaultView)||window}}}),[t]);return r.createElement(le.Provider,{value:o},n)}const se=r.createContext(null),ue=B("useEvents","EventsContext",se);function de(e){let{children:t}=e;const[n]=r.useState({});r.useEffect((()=>()=>{Object.keys(n).forEach((e=>delete n[e]))}),[n]);const o=r.useMemo((()=>{const e=(e,t)=>{var r;null===(r=n[e])||void 0===r||r.splice(0,n[e].length,...n[e].filter((e=>e!==t)))};return{publish:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];let[o,i]=t;var l;null===(l=n[o])||void 0===l||l.forEach((e=>e(i)))},subscribe:(t,r)=>(n[t]||(n[t]=[]),n[t].push(r),()=>e(t,r)),unsubscribe:e}}),[n]);return r.createElement(se.Provider,{value:o},t)}const fe=r.createContext(null),he=B("useLightboxProps","LightboxPropsContext",fe);function ve(e){let{children:t,...n}=e;return r.createElement(fe.Provider,{value:n},t)}const pe=r.createContext(null),me=B("useLightboxState","LightboxStateContext",pe),ge=r.createContext(null),be=B("useLightboxDispatch","LightboxDispatchContext",ge);function ye(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(null===t||void 0===t?void 0:t.increment)||0,o=e.globalIndex+r,i=q(o,n.length);return{slides:n,currentIndex:i,globalIndex:o,currentSlide:Z(n,i),animation:r||t.duration?{increment:r,duration:t.duration,easing:t.easing}:void 0}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:Z(t.slides,t.index)}:e;default:throw new Error(O)}}function xe(e){let{slides:t,index:n,children:o}=e;const[i,l]=r.useReducer(ye,{slides:t,currentIndex:n,globalIndex:n,currentSlide:Z(t,n)});r.useEffect((()=>{l({type:"update",slides:t,index:n})}),[t,n]);const a=r.useMemo((()=>({...i,state:i,dispatch:l})),[i,l]);return r.createElement(ge.Provider,{value:l},r.createElement(pe.Provider,{value:a},o))}const we=r.createContext(null),Ee=B("useTimeouts","TimeoutsContext",we);function Se(e){let{children:t}=e;const[n]=r.useState([]);r.useEffect((()=>()=>{n.forEach((e=>window.clearTimeout(e))),n.splice(0,n.length)}),[n]);const o=r.useMemo((()=>{const e=e=>{n.splice(0,n.length,...n.filter((t=>t!==e)))};return{setTimeout:(t,r)=>{const o=window.setTimeout((()=>{e(o),t()}),r);return n.push(o),o},clearTimeout:t=>{void 0!==t&&(e(t),window.clearTimeout(t))}}}),[n]);return r.createElement(we.Provider,{value:o},t)}const Ce=r.forwardRef((function(e,t){let{label:n,className:o,icon:i,renderIcon:l,onClick:a,style:c,...s}=e;const{styles:u,labels:d}=he();return r.createElement("button",{ref:t,type:"button","aria-label":G(d,n),className:D(j("button"),o),onClick:a,style:{...c,...u.button},...s},l?l():r.createElement(i,{className:j(I),style:u.icon}))}));function ke(e,t){const n=e=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...e},t);return n.displayName=e,n}function Me(e,t){return ke(e,r.createElement("g",{fill:"currentColor"},r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const Re=Me("Close",r.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),Ne=Me("Previous",r.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),Pe=Me("Next",r.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),Le=Me("Loading",r.createElement(r.Fragment,null,Array.from({length:8}).map(((e,t,n)=>r.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:"rotate(".concat(360/n.length*t,", 12, 12)")}))))),Ie=Me("Error",r.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),_e=X()?r.useLayoutEffect:r.useEffect;function We(){const[e,t]=r.useState(!1);return r.useEffect((()=>{var e,n;const r=null===(e=window.matchMedia)||void 0===e?void 0:e.call(window,"(prefers-reduced-motion: reduce)");t(null===r||void 0===r?void 0:r.matches);const o=e=>t(e.matches);return null===(n=null===r||void 0===r?void 0:r.addEventListener)||void 0===n||n.call(r,"change",o),()=>{var e;return null===(e=null===r||void 0===r?void 0:r.removeEventListener)||void 0===e?void 0:e.call(r,"change",o)}}),[]),e}function Oe(e,t){const n=r.useRef(),o=r.useRef(),i=We();return _e((()=>{var r,l,a;if(e.current&&void 0!==n.current&&!i){const{keyframes:i,duration:s,easing:u,onfinish:d}=t(n.current,e.current.getBoundingClientRect(),function(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const e=o[1].split(",").map(Y);6===e.length?(t=e[4],n=e[5]):16===e.length&&(t=e[12],n=e[13],r=e[14])}return{x:t,y:n,z:r}}(e.current))||{};if(i&&s){null===(r=o.current)||void 0===r||r.cancel(),o.current=void 0;try{o.current=null===(a=(l=e.current).animate)||void 0===a?void 0:a.call(l,i,{duration:s,easing:u})}catch(c){console.error(c)}o.current&&(o.current.onfinish=()=>{o.current=void 0,null===d||void 0===d||d()})}}n.current=void 0})),{prepareAnimation:e=>{n.current=e},isAnimationPlaying:()=>{var e;return"running"===(null===(e=o.current)||void 0===e?void 0:e.playState)}}}function Fe(){const e=r.useRef(null),t=r.useRef(),[n,o]=r.useState();return{setContainerRef:r.useCallback((n=>{e.current=n,t.current&&(t.current.disconnect(),t.current=void 0);const r=()=>{if(n){const e=window.getComputedStyle(n),t=e=>parseFloat(e)||0;o({width:Math.round(n.clientWidth-t(e.paddingLeft)-t(e.paddingRight)),height:Math.round(n.clientHeight-t(e.paddingTop)-t(e.paddingBottom))})}else o(void 0)};r(),n&&"undefined"!==typeof ResizeObserver&&(t.current=new ResizeObserver(r),t.current.observe(n))}),[]),containerRef:e,containerRect:n}}function Ae(){const e=r.useRef(),{setTimeout:t,clearTimeout:n}=Ee();return r.useCallback(((r,o)=>{n(e.current),e.current=t(r,o>0?o:0)}),[t,n])}function De(e){const t=r.useRef(e);return _e((()=>{t.current=e})),r.useCallback((function(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return null===(e=t.current)||void 0===e?void 0:e.call(t,...r)}),[])}function je(e,t){"function"===typeof e?e(t):e&&(e.current=t)}function Te(e,t){return r.useMemo((()=>null==e&&null==t?null:n=>{je(e,n),je(t,n)}),[e,t])}function He(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=r.useRef();_e((()=>{t&&n.current&&(n.current=!1,e())}),[t,e]);return{onFocus:r.useCallback((()=>{n.current=!0}),[]),onBlur:r.useCallback((()=>{n.current=!1}),[])}}function Ue(){const[e,t]=r.useState(!1);return _e((()=>{t("rtl"===window.getComputedStyle(window.document.documentElement).direction)}),[]),e}function Ge(e,t){const n=r.useRef(0),o=Ae(),i=De((function(){n.current=Date.now();for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e(r)}));return r.useCallback((function(){for(var e=arguments.length,r=new Array(e),l=0;l<e;l++)r[l]=arguments[l];o((()=>{i(r)}),t-(Date.now()-n.current))}),[t,i,o])}const ze=U("slide"),Be=U("slide_image");function Xe(e){let{slide:t,offset:n,render:o,rect:i,imageFit:l,imageProps:a,onClick:h,onLoad:v,style:p}=e;var m,g,b,y,x,w,E;const[S,C]=r.useState(c),{publish:k}=ue(),{setTimeout:M}=Ee(),R=r.useRef(null);r.useEffect((()=>{0===n&&k(f(S))}),[n,S,k]);const N=De((e=>{("decode"in e?e.decode():Promise.resolve()).catch((()=>{})).then((()=>{e.parentNode&&(C(u),M((()=>{null===v||void 0===v||v(e)}),0))}))})),P=r.useCallback((e=>{R.current=e,(null===e||void 0===e?void 0:e.complete)&&N(e)}),[N]),L=r.useCallback((e=>{N(e.currentTarget)}),[N]),O=r.useCallback((()=>{C(s)}),[]),F=function(e,t){return e.imageFit===W||e.imageFit!==_&&t===W}(t,l),A=(e,t)=>Number.isFinite(e)?e:t,T=A(Math.max(...(null!==(g=null===(m=t.srcSet)||void 0===m?void 0:m.map((e=>e.width)))&&void 0!==g?g:[]).concat(t.width?[t.width]:[]).filter(Boolean)),(null===(b=R.current)||void 0===b?void 0:b.naturalWidth)||0),H=A(Math.max(...(null!==(x=null===(y=t.srcSet)||void 0===y?void 0:y.map((e=>e.height)))&&void 0!==x?x:[]).concat(t.height?[t.height]:[]).filter(Boolean)),(null===(w=R.current)||void 0===w?void 0:w.naturalHeight)||0),U=T&&H?{maxWidth:"min(".concat(T,"px, 100%)"),maxHeight:"min(".concat(H,"px, 100%)")}:{maxWidth:"100%",maxHeight:"100%"},G=null===(E=t.srcSet)||void 0===E?void 0:E.sort(((e,t)=>e.width-t.width)).map((e=>"".concat(e.src," ").concat(e.width,"w"))).join(", "),z=G&&i&&X()?"".concat(Math.round(Math.min(i&&!F&&t.width&&t.height?i.height/t.height*t.width:Number.MAX_VALUE,i.width)),"px"):void 0,{style:B,className:V,...Y}=a||{};return r.createElement(r.Fragment,null,r.createElement("img",{ref:P,onLoad:L,onError:O,onClick:h,draggable:!1,className:D(j(Be()),F&&j(Be("cover")),S!==u&&j(Be("loading")),V),style:{...U,...p,...B},...Y,alt:t.alt,sizes:z,srcSet:G,src:t.src}),S!==u&&r.createElement("div",{className:j(ze(d))},S===c&&((null===o||void 0===o?void 0:o.iconLoading)?o.iconLoading():r.createElement(Le,{className:D(j(I),j(ze(c)))})),S===s&&((null===o||void 0===o?void 0:o.iconError)?o.iconError():r.createElement(Ie,{className:D(j(I),j(ze(s)))}))))}const Ve=r.forwardRef((function(e,t){let{className:n,children:o,...i}=e;const l=r.useRef(null);return r.createElement(ce,{nodeRef:l},r.createElement("div",{ref:Te(t,l),className:D(j("root"),n),...i},o))}));var Ye,Ke;!function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"}(Ye||(Ye={})),function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"}(Ke||(Ke={}));const $e=30;function qe(e,t,n,o,i,l,a,c,s,u,d,f,h,v){const p=r.useRef(0),m=r.useRef([]),g=r.useRef(),b=r.useRef(0),y=r.useRef(Ke.NONE),k=r.useCallback((e=>{g.current===e.pointerId&&(g.current=void 0,y.current=Ke.NONE);const t=m.current;t.splice(0,t.length,...t.filter((t=>t.pointerId!==e.pointerId)))}),[]),M=r.useCallback((e=>{k(e),e.persist(),m.current.push(e)}),[k]),R=De((e=>{M(e)})),N=(e,t)=>u&&e>t||s&&e<-t,P=De((e=>{if(m.current.find((t=>t.pointerId===e.pointerId))&&g.current===e.pointerId){const e=Date.now()-b.current,t=p.current;y.current===Ke.SWIPE?Math.abs(t)>.3*n||Math.abs(t)>5&&e<o?a(t,e):c(t):y.current===Ke.PULL&&(N(t,2*$e)?h(t,e):v(t)),p.current=0,y.current=Ke.NONE}k(e)}));!function(e,t,n,o,i){r.useEffect((()=>i?()=>{}:z(e(x,t),e(w,n),e(E,o),e(S,o),e(C,o))),[e,t,n,o,i])}(e,R,De((e=>{const n=m.current.find((t=>t.pointerId===e.pointerId));if(n){const r=g.current===e.pointerId;if(0===e.buttons)return void(r&&0!==p.current?P(e):k(n));const o=e.clientX-n.clientX,a=e.clientY-n.clientY;if(void 0===g.current){const n=t=>{M(e),g.current=e.pointerId,b.current=Date.now(),y.current=t};Math.abs(o)>Math.abs(a)&&Math.abs(o)>$e&&t(o)?(n(Ke.SWIPE),i()):Math.abs(a)>Math.abs(o)&&N(a,$e)&&(n(Ke.PULL),d())}else r&&(y.current===Ke.SWIPE?(p.current=o,l(o)):y.current===Ke.PULL&&(p.current=a,f(a)))}})),P)}const Je=U("container"),Qe=r.createContext(null),Ze=B("useController","ControllerContext",Qe);const et=ne(i,(function(e){let{children:t,...n}=e;var o;const{carousel:i,animation:a,controller:c,on:s,styles:u,render:d}=n,{closeOnPullUp:f,closeOnPullDown:v,preventDefaultWheelX:p,preventDefaultWheelY:N}=c,[P,L]=r.useState(),I=me(),_=be(),[W,O]=r.useState(Ye.NONE),F=r.useRef(0),A=r.useRef(0),H=r.useRef(1),{registerSensors:U,subscribeSensors:G}=function(){const[e]=r.useState({}),t=r.useCallback(((t,n)=>{var r;null===(r=e[t])||void 0===r||r.forEach((e=>{n.isPropagationStopped()||e(n)}))}),[e]);return{registerSensors:r.useMemo((()=>({onPointerDown:e=>t(x,e),onPointerMove:e=>t(w,e),onPointerUp:e=>t(E,e),onPointerLeave:e=>t(S,e),onPointerCancel:e=>t(C,e),onKeyDown:e=>t(k,e),onKeyUp:e=>t(M,e),onWheel:e=>t(R,e)})),[t]),subscribeSensors:r.useCallback(((t,n)=>(e[t]||(e[t]=[]),e[t].unshift(n),()=>{const r=e[t];r&&r.splice(0,r.length,...r.filter((e=>e!==n)))})),[e])}}(),{subscribe:B,publish:X}=ue(),V=Ae(),Y=Ae(),q=Ae(),{containerRef:J,setContainerRef:Q,containerRect:Z}=Fe(),ee=Te(function(e){let{preventDefaultWheelX:t,preventDefaultWheelY:n}=e;const o=r.useRef(null),i=De((e=>{const r=Math.abs(e.deltaX)>Math.abs(e.deltaY);(r&&t||!r&&n||e.ctrlKey)&&e.preventDefault()}));return r.useCallback((e=>{var t;e?e.addEventListener("wheel",i,{passive:!1}):null===(t=o.current)||void 0===t||t.removeEventListener("wheel",i),o.current=e}),[i])}({preventDefaultWheelX:p,preventDefaultWheelY:N}),Q),te=r.useRef(null),ne=Te(te,void 0),{getOwnerDocument:re}=ae(),oe=Ue(),ie=e=>(oe?-1:1)*("number"===typeof e?e:1),le=De((()=>{var e;return null===(e=J.current)||void 0===e?void 0:e.focus()})),ce=De((()=>n)),se=De((()=>I)),de=r.useCallback((e=>X(m,e)),[X]),fe=r.useCallback((e=>X(g,e)),[X]),he=r.useCallback((()=>X(y)),[X]),ve=e=>!(i.finite&&(ie(e)>0&&0===I.currentIndex||ie(e)<0&&I.currentIndex===I.slides.length-1)),pe=e=>{var t;F.current=e,null===(t=J.current)||void 0===t||t.style.setProperty(T("swipe_offset"),"".concat(Math.round(e),"px"))},ge=e=>{var t,n;A.current=e,H.current=(()=>{const t=v&&e>0?e:f&&e<0?-e:0;return Math.min(Math.max(function(e){const t=10**(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0);return Math.round((e+Number.EPSILON)*t)/t}(1-t/60*.5,2),.5),1)})(),null===(t=J.current)||void 0===t||t.style.setProperty(T("pull_offset"),"".concat(Math.round(e),"px")),null===(n=J.current)||void 0===n||n.style.setProperty(T("pull_opacity"),"".concat(H.current))},{prepareAnimation:ye}=Oe(te,((e,t,n)=>{if(te.current&&Z)return{keyframes:[{transform:"translate(0, ".concat(e.rect.y-t.y+n.y,"px)"),opacity:e.opacity},{transform:"translate(0, 0)",opacity:1}],duration:e.duration,easing:a.easing.fade}})),xe=(e,t)=>{if(f||v){ge(e);let n=0;te.current&&(n=a.fade*(t?2:1),ye({rect:te.current.getBoundingClientRect(),opacity:H.current,duration:n})),q((()=>{ge(0),O(Ye.NONE)}),n),O(Ye.ANIMATION),t||he()}},{prepareAnimation:we,isAnimationPlaying:Se}=Oe(te,((e,t,n)=>{var r;if(te.current&&Z&&(null===(r=I.animation)||void 0===r?void 0:r.duration)){const r=K(i.spacing),o=(r.percent?r.percent*Z.width/100:r.pixel)||0;return{keyframes:[{transform:"translate(".concat(ie(I.globalIndex-e.index)*(Z.width+o)+e.rect.x-t.x+n.x,"px, 0)")},{transform:"translate(0, 0)"}],duration:I.animation.duration,easing:I.animation.easing}}})),Ce=De((e=>{var t,n;const r=e.offset||0,o=r?a.swipe:null!==(t=a.navigation)&&void 0!==t?t:a.swipe,i=r||Se()?a.easing.swipe:a.easing.navigation;let{direction:l}=e;const c=null!==(n=e.count)&&void 0!==n?n:1;let s=Ye.ANIMATION,u=o*c;if(!l){const t=null===Z||void 0===Z?void 0:Z.width,n=e.duration||0,i=t?o/t*Math.abs(r):o;0!==c?(n<i?u=u/i*Math.max(n,i/5):t&&(u=o/t*(t-Math.abs(r))),l=ie(r)>0?m:g):u=o/2}let d=0;l===m?ve(ie(1))?d=-c:(s=Ye.NONE,u=o):l===g&&(ve(ie(-1))?d=c:(s=Ye.NONE,u=o)),u=Math.round(u),Y((()=>{pe(0),O(Ye.NONE)}),u),te.current&&we({rect:te.current.getBoundingClientRect(),index:I.globalIndex}),O(s),X(b,{type:"swipe",increment:d,duration:u,easing:i})}));r.useEffect((()=>{var e,t;(null===(e=I.animation)||void 0===e?void 0:e.increment)&&(null===(t=I.animation)||void 0===t?void 0:t.duration)&&V((()=>_({type:"swipe",increment:0})),I.animation.duration)}),[I.animation,_,V]);const ke=[G,ve,(null===Z||void 0===Z?void 0:Z.width)||0,a.swipe,()=>O(Ye.SWIPE),e=>pe(e),(e,t)=>Ce({offset:e,duration:t,count:1}),e=>Ce({offset:e,count:0})],Me=[()=>{v&&O(Ye.PULL)},e=>ge(e),e=>xe(e),e=>xe(e,!0)];qe(...ke,f,v,...Me),function(e,t,n,o,i,l,a,c,s){const u=r.useRef(0),d=r.useRef(0),f=r.useRef(),h=r.useRef(),v=r.useRef(0),p=r.useRef(0),{setTimeout:m,clearTimeout:g}=Ee(),b=r.useCallback((()=>{f.current&&(g(f.current),f.current=void 0)}),[g]),y=r.useCallback((()=>{h.current&&(g(h.current),h.current=void 0)}),[g]),x=De((()=>{e!==Ye.SWIPE&&(u.current=0,p.current=0,b(),y())}));r.useEffect(x,[e,x]);const w=De((e=>{h.current=void 0,u.current===e&&s(u.current)})),E=De((t=>{if(!t.ctrlKey&&!(Math.abs(t.deltaY)>Math.abs(t.deltaX)))if(e===Ye.NONE){if(Math.abs(t.deltaX)<=1.2*Math.abs(v.current))return void(v.current=t.deltaX);if(!n(-t.deltaX))return;if(d.current+=t.deltaX,b(),Math.abs(d.current)>30)d.current=0,v.current=0,p.current=Date.now(),l();else{const e=d.current;f.current=m((()=>{f.current=void 0,e===d.current&&(d.current=0)}),i)}}else if(e===Ye.SWIPE){let e=u.current-t.deltaX;if(e=Math.min(Math.abs(e),o)*Math.sign(e),u.current=e,a(e),y(),Math.abs(e)>.2*o)return v.current=t.deltaX,void c(e,Date.now()-p.current);h.current=m((()=>w(e)),2*i)}else v.current=t.deltaX}));r.useEffect((()=>t(R,E)),[t,E])}(W,...ke);const Re=De((()=>{c.focus&&re().querySelector(".".concat(j(l)," .").concat(j(Je())))&&le()}));r.useEffect(Re,[Re]);const Ne=De((()=>{var e;null===(e=s.view)||void 0===e||e.call(s,{index:I.currentIndex})}));r.useEffect(Ne,[I.globalIndex,Ne]),r.useEffect((()=>z(B(m,(e=>Ce({direction:m,...e}))),B(g,(e=>Ce({direction:g,...e}))),B(b,(e=>_(e))))),[B,Ce,_]);const Pe=r.useMemo((()=>({prev:de,next:fe,close:he,focus:le,slideRect:Z?$(Z,i.padding):{width:0,height:0},containerRect:Z||{width:0,height:0},subscribeSensors:G,containerRef:J,setCarouselRef:ne,toolbarWidth:P,setToolbarWidth:L})),[de,fe,he,le,G,Z,J,ne,P,L,i.padding]);return r.useImperativeHandle(c.ref,(()=>({prev:de,next:fe,close:he,focus:le,getLightboxProps:ce,getLightboxState:se})),[de,fe,he,le,ce,se]),r.createElement("div",{ref:ee,className:D(j(Je()),j(h)),style:{...W===Ye.SWIPE?{[T("swipe_offset")]:"".concat(Math.round(F.current),"px")}:null,...W===Ye.PULL?{[T("pull_offset")]:"".concat(Math.round(A.current),"px"),[T("pull_opacity")]:"".concat(H.current)}:null,..."none"!==c.touchAction?{[T("controller_touch_action")]:c.touchAction}:null,...u.container},...c.aria?{role:"presentation","aria-live":"polite"}:null,tabIndex:-1,...U},Z&&r.createElement(Qe.Provider,{value:Pe},t,null===(o=d.controls)||void 0===o?void 0:o.call(d)))}));function tt(e){return H(o,e)}function nt(e){return H("slide",e)}function rt(e){let{slide:t,offset:n}=e;const o=r.useRef(null),{currentIndex:i}=me(),{slideRect:l,close:a}=Ze(),{render:c,carousel:{imageFit:s,imageProps:u},on:{click:d},controller:{closeOnBackdropClick:f},styles:{slide:v}}=he();return r.createElement("div",{ref:o,className:D(j(nt()),0===n&&j(nt("current")),j(h)),onClick:e=>{const t=o.current,n=e.target instanceof HTMLElement?e.target:void 0;f&&n&&t&&(n===t||Array.from(t.children).find((e=>e===n))&&n.classList.contains(j(p)))&&a()},style:v},(()=>{var e,o,a,f;let h=null===(e=c.slide)||void 0===e?void 0:e.call(c,{slide:t,offset:n,rect:l});return!h&&V(t)&&(h=r.createElement(Xe,{slide:t,offset:n,render:c,rect:l,imageFit:s,imageProps:u,onClick:0===n?()=>null===d||void 0===d?void 0:d({index:i}):void 0})),h?r.createElement(r.Fragment,null,null===(o=c.slideHeader)||void 0===o?void 0:o.call(c,{slide:t}),(null!==(a=c.slideContainer)&&void 0!==a?a:e=>{let{children:t}=e;return t})({slide:t,children:h}),null===(f=c.slideFooter)||void 0===f?void 0:f.call(c,{slide:t})):null})())}function ot(){const e=he().styles.slide;return r.createElement("div",{className:j("slide"),style:e})}const it=ne(o,(function(e){let{carousel:t}=e;const{slides:n,currentIndex:o,globalIndex:i}=me(),{setCarouselRef:l}=Ze(),a=K(t.spacing),c=K(t.padding),s=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}(t,n,1),u=[];if(J(n))for(let r=o-s;r<=o+s;r+=1){const e=Q(n,r),l=i-o+r,a=t.finite&&(r<0||r>n.length-1);u.push(a?{key:l}:{key:["".concat(l),ee(e)].filter(Boolean).join("|"),offset:r-o,slide:e})}return r.createElement("div",{ref:l,className:D(j(tt()),u.length>0&&j(tt("with_slides"))),style:{["".concat(T(tt("slides_count")))]:u.length,["".concat(T(tt("spacing_px")))]:a.pixel||0,["".concat(T(tt("spacing_percent")))]:a.percent||0,["".concat(T(tt("padding_px")))]:c.pixel||0,["".concat(T(tt("padding_percent")))]:c.percent||0}},u.map((e=>{let{key:t,slide:n,offset:o}=e;return n?r.createElement(rt,{key:t,slide:n,offset:o}):r.createElement(ot,{key:t})})))}));function lt(){const{carousel:e}=he(),{slides:t,currentIndex:n}=me();return{prevDisabled:0===t.length||e.finite&&0===n,nextDisabled:0===t.length||e.finite&&n===t.length-1}}function at(e){let{label:t,icon:n,renderIcon:o,action:i,onClick:l,disabled:a,style:c}=e;return r.createElement(Ce,{label:t,icon:n,renderIcon:o,className:j("navigation_".concat(i)),disabled:a,onClick:l,style:c,...He(Ze().focus,a)})}const ct=ne("navigation",(function(e){let{render:{buttonPrev:t,buttonNext:n,iconPrev:o,iconNext:i},styles:l}=e;const{prev:a,next:c,subscribeSensors:s}=Ze(),{prevDisabled:u,nextDisabled:d}=lt();return function(e){var t;const n=Ue(),{publish:o}=ue(),{animation:i}=he(),{prevDisabled:l,nextDisabled:a}=lt(),c=(null!==(t=i.navigation)&&void 0!==t?t:i.swipe)/2,s=Ge((()=>o(m)),c),u=Ge((()=>o(g)),c),d=De((e=>{switch(e.key){case N:o(y);break;case P:(n?a:l)||(n?u:s)();break;case L:(n?l:a)||(n?s:u)()}}));r.useEffect((()=>e(k,d)),[e,d])}(s),r.createElement(r.Fragment,null,t?t():r.createElement(at,{label:"Previous",action:m,icon:Ne,renderIcon:o,style:l.navigationPrev,disabled:u,onClick:a}),n?n():r.createElement(at,{label:"Next",action:g,icon:Pe,renderIcon:i,style:l.navigationNext,disabled:d,onClick:c}))})),st=j("no_scroll"),ut=j(v);function dt(e){return"style"in e}function ft(e,t,n){const r=window.getComputedStyle(e),o=n?"padding-left":"padding-right",i=n?r.paddingLeft:r.paddingRight,l=e.style.getPropertyValue(o);return e.style.setProperty(o,"".concat((Y(i)||0)+t,"px")),()=>{l?e.style.setProperty(o,l):e.style.removeProperty(o)}}const ht=ne("no-scroll",(function(e){let{noScroll:{disabled:t},children:n}=e;const o=Ue(),{getOwnerDocument:i,getOwnerWindow:l}=ae();return r.useEffect((()=>{if(t)return()=>{};const e=[],n=l(),{body:r,documentElement:a}=i(),c=Math.round(n.innerWidth-a.clientWidth);if(c>0){e.push(ft(r,c,o));const t=r.getElementsByTagName("*");for(let r=0;r<t.length;r+=1){const i=t[r];dt(i)&&"fixed"===n.getComputedStyle(i).getPropertyValue("position")&&!i.classList.contains(ut)&&e.push(ft(i,c,o))}}return r.classList.add(st),()=>{r.classList.remove(st),e.forEach((e=>e()))}}),[o,t,i,l]),r.createElement(r.Fragment,null,n)}));function vt(e){return H(l,e)}function pt(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}const mt=ne(l,(function(e){let{children:t,animation:n,styles:o,className:i,on:l,portal:a,close:c}=e;const[s,u]=r.useState(!1),[d,f]=r.useState(!1),h=r.useRef([]),p=r.useRef(null),{setTimeout:m}=Ee(),{subscribe:g}=ue(),b=We()?0:n.fade;r.useEffect((()=>(u(!0),()=>{u(!1),f(!1)})),[]);const x=De((()=>{h.current.forEach((e=>e())),h.current=[]})),w=De((()=>{var e;f(!1),x(),null===(e=l.exiting)||void 0===e||e.call(l),m((()=>{var e;null===(e=l.exited)||void 0===e||e.call(l),c()}),b)}));r.useEffect((()=>g(y,w)),[g,w]);const E=De((e=>{var t,n,r;e.scrollTop,f(!0),null===(t=l.entering)||void 0===t||t.call(l);const o=null!==(r=null===(n=e.parentNode)||void 0===n?void 0:n.children)&&void 0!==r?r:[];for(let i=0;i<o.length;i+=1){const t=o[i];-1===["TEMPLATE","SCRIPT","STYLE"].indexOf(t.tagName)&&t!==e&&(h.current.push(pt(t,"inert","true")),h.current.push(pt(t,"aria-hidden","true")))}h.current.push((()=>{var e,t;null===(t=null===(e=p.current)||void 0===e?void 0:e.focus)||void 0===t||t.call(e)})),m((()=>{var e;null===(e=l.entered)||void 0===e||e.call(l)}),b)})),S=r.useCallback((e=>{e?E(e):x()}),[E,x]);return s?(0,F.createPortal)(r.createElement(Ve,{ref:S,className:D(i,j(vt()),j(v),d&&j(vt("open"))),role:"presentation","aria-live":"polite",style:{...n.fade!==te.animation.fade?{[T("fade_animation_duration")]:"".concat(b,"ms")}:null,...n.easing.fade!==te.animation.easing.fade?{[T("fade_animation_timing_function")]:n.easing.fade}:null,...o.root},onFocus:e=>{p.current||(p.current=e.relatedTarget)}},t),a.root||document.body):null}));const gt=ne("root",(function(e){let{children:t}=e;return r.createElement(r.Fragment,null,t)}));const bt=ne(a,(function(e){let{toolbar:{buttons:t},render:{buttonClose:n,iconClose:o},styles:i}=e;const{close:l,setToolbarWidth:c}=Ze(),{setContainerRef:s,containerRect:u}=Fe();return _e((()=>{c(null===u||void 0===u?void 0:u.width)}),[c,null===u||void 0===u?void 0:u.width]),r.createElement("div",{ref:s,style:i.toolbar,className:j(H(a,d))},null===t||void 0===t?void 0:t.map((e=>e===y?n?n():r.createElement(Ce,{key:y,label:"Close",icon:Re,renderIcon:o,onClick:l}):e)));var d}));function yt(e,t){var n;return r.createElement(e.module.component,{key:e.module.name,...t},null===(n=e.children)||void 0===n?void 0:n.map((e=>yt(e,t))))}function xt(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{easing:n,...r}=e,{easing:o,...i}=t;return{easing:{...n,...o},...r,...i}}function wt(e){let{carousel:t,animation:n,render:o,toolbar:l,controller:a,noScroll:c,on:s,plugins:u,slides:d,index:f,...h}=e;const{animation:v,carousel:p,render:m,toolbar:g,controller:b,noScroll:y,on:x,slides:w,index:E,plugins:S,...C}=te,{config:k,augmentation:M}=function(e){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=e;const r=e=>{const t=[...n];for(;t.length>0;){const n=t.pop();if((null===n||void 0===n?void 0:n.module.name)===e)return!0;(null===n||void 0===n?void 0:n.children)&&t.push(...n.children)}return!1},o=(e,t)=>{n=""!==e?ie(n,e,(e=>[re(t,[e])])):[re(t,n)]},l=(e,t)=>{n=ie(n,e,(e=>[re(e.module,[re(t,e.children)])]))},a=(e,t,r)=>{n=ie(n,e,(e=>{var n;return[re(e.module,[...r?[re(t)]:[],...null!==(n=e.children)&&void 0!==n?n:[],...r?[]:[re(t)]])]}))},c=(e,t,r)=>{n=ie(n,e,(e=>[...r?[re(t)]:[],e,...r?[]:[re(t)]]))},s=e=>{l(i,e)},u=(e,t)=>{n=ie(n,e,(e=>[re(t,e.children)]))},d=e=>{n=ie(n,e,(e=>e.children))},f=e=>{t.push(e)};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((e=>{e({contains:r,addParent:o,append:l,addChild:a,addSibling:c,addModule:s,replace:u,remove:d,augment:f})})),{config:n,augmentation:e=>t.reduce(((e,t)=>t(e)),e)}}([re(mt,[re(ht,[re(et,[re(it),re(bt),re(ct)])])])],u||S),R=M({animation:xt(v,n),carousel:{...p,...t},render:{...m,...o},toolbar:{...g,...l},controller:{...b,...a},noScroll:{...y,...c},on:{...x,...s},...C,...h});return R.open?r.createElement(ve,{...R},r.createElement(xe,{slides:d||w,index:Y(f||E)},r.createElement(Se,null,r.createElement(de,null,yt(re(gt,k),R))))):null}}}]);
//# sourceMappingURL=687.8b4db257.chunk.js.map