(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[9],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return o.a})),n.d(t,"createChainedFunction",(function(){return r.a})),n.d(t,"createSvgIcon",(function(){return a.a})),n.d(t,"debounce",(function(){return i.a})),n.d(t,"deprecatedPropType",(function(){return s})),n.d(t,"isMuiElement",(function(){return c.a})),n.d(t,"ownerDocument",(function(){return l.a})),n.d(t,"ownerWindow",(function(){return u.a})),n.d(t,"requirePropFactory",(function(){return p.a})),n.d(t,"setRef",(function(){return d.a})),n.d(t,"unsupportedProp",(function(){return g})),n.d(t,"useControlled",(function(){return f.a})),n.d(t,"useEventCallback",(function(){return h.a})),n.d(t,"useForkRef",(function(){return m.a})),n.d(t,"unstable_useId",(function(){return y.a})),n.d(t,"useIsFocusVisible",(function(){return b.a}));var o=n(98),r=n(116),a=n(130),i=n(132);function s(e,t){return function(){return null}}var c=n(141),l=n(112),u=n(142),p=n(117),d=n(115);function g(e,t,n,o,r){return null}var f=n(118),h=n(119),m=n(100),y=n(120),b=n(131)},111:function(e,t,n){},117:function(e,t,n){"use strict";function o(e){return function(){return null}}n.d(t,"a",(function(){return o}))},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(0);function r(e){var t=o.useState(e),n=t[0],r=t[1],a=e||n;return o.useEffect((function(){null==n&&r("mui-".concat(Math.round(1e5*Math.random())))}),[n]),a}},124:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return d})),n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return h}));var o=n(17),r=n(30),a=n.n(r),i=function(e,t,n,o,r,i){return a.a.post("http://localhost:4000/user/signup",{username:e,email:t,password:n,confirmpassword:o,birthdate:r,avatar:i}).then((function(e){return console.log("local storage"),localStorage.setItem("user",JSON.stringify(e.data)),e.data}))},s=function(e,t,n,o,r){return a.a.post("http://localhost:4000/user/signupg",{username:e,email:t,birthdate:n,avatar:o,isgoogle:r}).then((function(e){return console.log("local storage"),localStorage.setItem("user",JSON.stringify(e.data)),e.data}))},c=function(e,t){return console.log("im here"),a.a.post("http://localhost:4000/user/login",{email:e,password:t}).then((function(e){return console.log("local storage"),localStorage.setItem("user",JSON.stringify(e.data)),e.data}))},l=function(e){return console.log("im here"),a.a.post("http://localhost:4000/user/loging",{email:e}).then((function(e){return console.log("local storage"),localStorage.setItem("user",JSON.stringify(e.data)),e.data}))},u=function(){localStorage.removeItem("user"),console.log("were loggin out")},p=function(e,t,n,r,a,s){return function(c){return i(e,t,n,r,a,s).then((function(e){return c({type:o.f}),c({type:o.g,payload:e.data.message}),Promise.resolve()}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();return c({type:o.e}),c({type:o.g,payload:t}),Promise.reject()}))}},d=function(e,t,n,r,a){return function(i){return s(e,t,n,r,a).then((function(e){return i({type:o.d}),i({type:o.g,payload:e.data.message}),Promise.resolve()}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();return i({type:o.e}),i({type:o.g,payload:t}),Promise.reject()}))}},g=function(e,t){return function(n){return c(e,t).then((function(e){return n({type:o.b,payload:{user:e}}),Promise.resolve()}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();return n({type:o.a}),n({type:o.g,payload:t}),Promise.reject()}))}},f=function(e){return function(t){return l(e).then((function(e){return t({type:o.b,payload:{user:e}}),Promise.resolve()}),(function(e){var n=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();return t({type:o.a}),t({type:o.g,payload:n}),Promise.reject()}))}},h=function(){return function(e){u(),console.log("logout action auth.js"),e({type:o.c})}}},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(123),r=(o.a.initializeApp({apiKey:"AIzaSyBFuAru3tgBnO5-e3lqz1ELSv_J23VhutM",authDomain:"kimy-online-classroom.firebaseapp.com",projectId:"kimy-online-classroom",storageBucket:"kimy-online-classroom.appspot.com",messagingSenderId:"538402468977",appId:"1:538402468977:web:d467f620db54ddfcbb17d0"}).firestore(),o.a.auth());new o.a.auth.GoogleAuthProvider},133:function(e,t,n){e.exports={logo:"SignUp_logo__3XdOX",form:"SignUp_form__11Q7G",page:"SignUp_page__3eBIE",or:"SignUp_or__3Juz-",sign:"SignUp_sign__YgG2I",signIn:"SignUp_signIn__2kX_z",signInwg:"SignUp_signInwg__3hItV",signUp:"SignUp_signUp__4zP_b",icons:"SignUp_icons__28h-B",icon:"SignUp_icon__mhSjb",linkedin:"SignUp_linkedin__3ocFh",github:"SignUp_github__3eiMN",twitter:"SignUp_twitter__3IXRN",text_field:"SignUp_text_field__11ffz",signup_grey:"SignUp_signup_grey__4hQ7G",signup_link:"SignUp_signup_link__2psTj",tos:"SignUp_tos__2o7C3",title:"SignUp_title__hvC_Z",divider:"SignUp_divider__3JUup"}},143:function(e,t,n){"use strict";var o=n(92),r=n(95);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),i=(0,o(n(93)).default)(a.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=i},157:function(e,t,n){"use strict";var o=n(92),r=n(95);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),i=(0,o(n(93)).default)(a.createElement("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.default=i},164:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},238:function(e,t,n){"use strict";var o=n(5),r=n(89),a=n(0),i=(n(16),n(90)),s=n(91),c=n(98),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=a.forwardRef((function(e,t){var n=e.align,s=void 0===n?"inherit":n,u=e.classes,p=e.className,d=e.color,g=void 0===d?"initial":d,f=e.component,h=e.display,m=void 0===h?"initial":h,y=e.gutterBottom,b=void 0!==y&&y,v=e.noWrap,_=void 0!==v&&v,j=e.paragraph,O=void 0!==j&&j,S=e.variant,w=void 0===S?"body1":S,x=e.variantMapping,P=void 0===x?l:x,I=Object(r.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),M=f||(O?"p":P[w]||l[w])||"span";return a.createElement(M,Object(o.a)({className:Object(i.a)(u.root,p,"inherit"!==w&&u[w],"initial"!==g&&u["color".concat(Object(c.a)(g))],_&&u.noWrap,b&&u.gutterBottom,O&&u.paragraph,"inherit"!==s&&u["align".concat(Object(c.a)(s))],"initial"!==m&&u["display".concat(Object(c.a)(m))]),ref:t},I))}));t.a=Object(s.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)},318:function(e,t,n){"use strict";var o=n(5),r=n(89),a=n(0),i=(n(16),n(90)),s=n(91),c=n(127),l=n(819),u=n(98),p=a.forwardRef((function(e,t){var n=e.edge,s=void 0!==n&&n,c=e.children,p=e.classes,d=e.className,g=e.color,f=void 0===g?"default":g,h=e.disabled,m=void 0!==h&&h,y=e.disableFocusRipple,b=void 0!==y&&y,v=e.size,_=void 0===v?"medium":v,j=Object(r.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return a.createElement(l.a,Object(o.a)({className:Object(i.a)(p.root,d,"default"!==f&&p["color".concat(Object(u.a)(f))],m&&p.disabled,"small"===_&&p["size".concat(Object(u.a)(_))],{start:p.edgeStart,end:p.edgeEnd}[s]),centerRipple:!0,focusRipple:!b,disabled:m,ref:t},j),a.createElement("span",{className:p.label},c))}));t.a=Object(s.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(c.c)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(c.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(c.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(p)},320:function(e,t,n){"use strict";var o=n(5),r=n(89),a=n(0),i=(n(16),n(90)),s=n(238),c=n(91),l=n(177),u=a.forwardRef((function(e,t){var n=e.children,c=e.classes,u=e.className,p=e.component,d=void 0===p?"div":p,g=e.disablePointerEvents,f=void 0!==g&&g,h=e.disableTypography,m=void 0!==h&&h,y=e.position,b=e.variant,v=Object(r.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),_=Object(l.b)()||{},j=b;return b&&_.variant,_&&!j&&(j=_.variant),a.createElement(l.a.Provider,{value:null},a.createElement(d,Object(o.a)({className:Object(i.a)(c.root,u,f&&c.disablePointerEvents,_.hiddenLabel&&c.hiddenLabel,"filled"===j&&c.filled,{start:c.positionStart,end:c.positionEnd}[y],"dense"===_.margin&&c.marginDense),ref:t},v),"string"!==typeof n||m?n:a.createElement(s.a,{color:"textSecondary"},n)))}));t.a=Object(c.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(u)},811:function(e,t,n){"use strict";n.r(t);var o=n(6),r=n(96),a=n(0),i=n.n(a),s=n(7),c=n(128),l=(n(111),n(318)),u=n(803),p=n(124),d=n(805),g=n(320),f=n(804),h=n(818),m=n(143),y=n.n(m),b=n(157),v=n.n(b),_=n(133),j=n.n(_),O=n(21),S=n(801),w=n(123),x=n(17),P=n(30),I=n.n(P),M=n(3);t.default=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],m=t[1],b=Object(a.useState)(""),_=Object(r.a)(b,2),P=_[0],k=_[1],E=Object(O.c)(),z=Object(s.g)(),U=(new w.a.auth.GoogleAuthProvider,i.a.useState({amount:"",password:"",weight:"",weightRange:"",showPassword:!1})),C=Object(r.a)(U,2),N=C[0],R=C[1],A=function(e){console.log("const doUpdatepassword"),function(e,t){console.log("updatin password first"),I.a.post("http://localhost:4000/user/updatepass",{email:e,password:t}).then((function(n){E(Object(p.a)(e,t)).then((function(){z.push("/app/courses"),window.location.reload(!1)})).catch((function(){}))}))}(n,P),E({type:x.i})};return Object(M.jsxs)("div",{className:j.a.page,children:[Object(M.jsx)("img",{className:j.a.logo,src:"./logo.png",alt:"KIMY",onClick:function(){return z.push("/")}}),Object(M.jsxs)("div",{className:j.a.signIn,children:[Object(M.jsx)("h2",{className:j.a.title,children:"Sign in"}),Object(M.jsxs)("form",{className:j.a.form,children:[Object(M.jsx)(h.a,{value:n,onChange:function(e){return m(e.target.value)},label:"Email",placeholder:"email",type:"email"}),Object(M.jsxs)(f.a,{children:[Object(M.jsx)(d.a,{htmlFor:"standard-adornment-password",children:"New password"}),Object(M.jsx)(u.a,{value:P,onChange:function(e){return k(e.target.value)},id:"standard-adornment-password",type:N.showPassword?"text":"password",endAdornment:Object(M.jsx)(g.a,{position:"end",children:Object(M.jsx)(l.a,{"aria-label":"toggle password visibility",onClick:function(){R(Object(o.a)(Object(o.a)({},N),{},{showPassword:!N.showPassword}))},onMouseDown:function(e){e.preventDefault()},children:N.showPassword?Object(M.jsx)(y.a,{}):Object(M.jsx)(v.a,{})})})})]}),Object(M.jsxs)(S.a,{variant:"outlined",size:"small",color:"primary",onClick:function(e){e.preventDefault(),c.a.signInWithEmailAndPassword(n,P).then((function(){A()})).catch((function(e){window.location.reload(!1)}))},children:["Login"," "]})]})]})]})}},92:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},93:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=n(105)},95:function(e,t,n){var o=n(164).default;function r(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=a?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}return n.default=e,t&&t.set(e,n),n},e.exports.default=e.exports,e.exports.__esModule=!0}}]);
//# sourceMappingURL=9.be11e5c9.chunk.js.map