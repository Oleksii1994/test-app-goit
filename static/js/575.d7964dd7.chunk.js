"use strict";(self.webpackChunktest_app_goit=self.webpackChunktest_app_goit||[]).push([[575],{7466:function(n,e,t){t.r(e),t.d(e,{default:function(){return sn}});var r,o,i,a,l,s,p,c,u,d,f,g,x,h=t(4165),b=t(5861),w=t(9439),m=t(7689),v=t(2791),Z=t(9135),j=t(5264),S=t(168),y=t(6088),k=y.Z.li(r||(r=(0,S.Z)(["\n  position: relative;\n  width: 380px;\n  min-width: 380px;\n  height: 464px;\n  margin-bottom: 36px;\n\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  border-radius: 20px;\n\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-transform: uppercase;\n  color: #ebd8ff;\n"]))),N=y.Z.div(o||(o=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 28px;\n"]))),O=y.Z.div(i||(i=(0,S.Z)(["\n  margin-bottom: 76px;\n"]))),I=y.Z.img(a||(a=(0,S.Z)(["\n  position: absolute;\n  top: 20;\n  left: 20;\n  transform: translateY(-50%);\n"]))),C=y.Z.div(l||(l=(0,S.Z)(["\n  position: absolute;\n  width: 380px;\n  height: 8px;\n  left: 0px;\n  top: 226px;\n\n  overflow: hidden;\n\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n"]))),J=y.Z.div(s||(s=(0,S.Z)(["\n  position: absolute;\n  top: 198px;\n  left: 158px;\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: rgb(87 54 163);\n"]))),U=y.Z.img(p||(p=(0,S.Z)(["\n  position: absolute;\n  top: -6px;\n  left: -9px;\n  z-index: 1;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n"]))),z=y.Z.img(c||(c=(0,S.Z)(["\n  width: 62px;\n  height: 62px;\n  object-fit: cover;\n  border-radius: 50%;\n"]))),F=y.Z.ul(u||(u=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  margin-bottom: 26px;\n"]))),_=y.Z.button(d||(d=(0,S.Z)(["\n  width: 196px;\n  height: 50px;\n  margin: 0 auto;\n  background: #ebd8ff;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: #373737;\n\n  &:hover {\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  }\n"]))),R=y.Z.button(f||(f=(0,S.Z)(["\n  width: 196px;\n  height: 50px;\n  margin: 0 auto;\n  background: #5cd3a8;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: #373737;\n\n  &:hover {\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  }\n"]))),T=y.Z.li(g||(g=(0,S.Z)(["\n  &:not(:last-of-type) {\n    margin-bottom: 8px;\n  }\n"]))),A=y.Z.p(x||(x=(0,S.Z)(["\n  color: #ffc318;\n"])));var E,H,L,P,B,V=t.p+"static/media/logo.e917114d7945c04c85a8946a331d28b6.svg",Y=t(392),q=t.p+"static/media/ellipse.fb24b248239efd196758.png",D=t(184),G=function(n){var e,t=n.name,r=n.tweets,o=n.followers,i=n.avatar,a=n.userId,l=(null!==(e=JSON.parse(localStorage.getItem("user".concat(a))))&&void 0!==e&&e).following,s=(0,v.useState)(l),p=(0,w.Z)(s,2),c=p[0],u=p[1],d=function(n){var e={userId:n,following:!c};localStorage.setItem("user".concat(n),JSON.stringify(e));var t=JSON.parse(localStorage.getItem("user".concat(n)));u(t.following);var r=JSON.parse(localStorage.getItem("followingUsers"));if(c&&JSON.parse(localStorage.getItem("followingUsers")).includes(n)){var o=r.indexOf(n);console.log(o),r.splice(o,1);var i=Array.from(new Set(r));console.log(i),localStorage.setItem("followingUsers",JSON.stringify(i))}else r.push(n),localStorage.setItem("followingUsers",JSON.stringify(r))},f=function(n){var e=n.toString().split("");return e.length>6&&e.splice(-6,0,","),e.splice(-3,0,","),e.join(""),e};return(0,D.jsx)(k,{children:(0,D.jsxs)(N,{children:[(0,D.jsxs)(O,{children:[(0,D.jsx)(I,{src:V,alt:"logo",width:"76",height:"20"}),(0,D.jsx)("img",{src:Y,alt:"background",width:"308",height:"168"})]}),(0,D.jsx)(C,{}),(0,D.jsxs)(J,{children:[(0,D.jsx)(U,{src:q,alt:"circle"}),(0,D.jsx)(z,{src:i,alt:"avatar"})]}),(0,D.jsxs)(F,{children:[(0,D.jsx)(T,{children:(0,D.jsx)(A,{children:t})}),(0,D.jsx)(T,{children:(0,D.jsxs)("p",{children:[r," Tweets"]})}),(0,D.jsx)(T,{children:(0,D.jsxs)("p",{children:[f(c?o+1:o)," ","Followers"]})})]}),c?(0,D.jsx)(R,{onClick:function(){return d(a)},children:"Following"}):(0,D.jsx)(_,{type:"button",onClick:function(){return d(a)},children:"Follow"})]})})},K=t(3763),M=[{value:"all",label:"All"},{value:"follow",label:"Follow"},{value:"followings",label:"Followings"}],Q=function(n){var e=n.value,t=n.onChange;return(0,D.jsx)("div",{style:{width:200,color:"#471ca9",backgroundColor:"#ebd8ff",borderRadius:25,position:"fixed",zIndex:2,top:136,left:214},children:(0,D.jsx)(K.ZP,{onChange:t,name:"options",options:M,className:"basic-single",classNamePrefix:"select",defaultValue:M[0],value:e})})},W=t(1087),X=(0,y.Z)(W.rU)(E||(E=(0,S.Z)(["\n  position: fixed;\n  top: 136px;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n\n  width: 80px;\n  height: 25px;\n\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  color: #ebd8ff;\n  padding: 6px 8px;\n  border-radius: 4px;\n\n  &:hover {\n    color: #ffc318;\n  }\n"]))),$=y.Z.ul(H||(H=(0,S.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  justify-content: space-evenly;\n  align-items: center;\n"]))),nn=y.Z.div(L||(L=(0,S.Z)(["\n  position: relative;\n  padding: 0 86px 72px 86px;\n"]))),en=y.Z.button(P||(P=(0,S.Z)(["\n  display: block;\n  margin: 0 auto;\n  width: 196px;\n  height: 50px;\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: #ebd8ff;\n\n  &:hover {\n    color: #ffc318;\n  }\n"]))),tn=y.Z.h1(B||(B=(0,S.Z)(["\n  width: 600px;\n  margin-left: auto;\n  margin-right: 60px;\n  color: #ebd8ff;\n"]))),rn=t(1243),on=t(1686),an=t.n(on);rn.Z.defaults.baseURL="https://6462869a4dca1a6613488ff7.mockapi.io/api/v1";var ln=function(){var n=(0,b.Z)((0,h.Z)().mark((function n(){var e;return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,rn.Z.get("/users");case 3:return(e=n.sent)||an().Notify("Oops, something went wrong"),n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),sn=function(){var n,e,t=(0,v.useState)([]),r=(0,w.Z)(t,2),o=r[0],i=r[1],a=(0,v.useState)([]),l=(0,w.Z)(a,2),s=l[0],p=l[1],c=(0,v.useState)(!1),u=(0,w.Z)(c,2),d=u[0],f=u[1],g=(0,v.useState)(3),x=(0,w.Z)(g,2),S=x[0],y=x[1],k=(0,v.useState)("all"),N=(0,w.Z)(k,2),O=N[0],I=N[1],C=(0,v.useState)(!1),J=(0,w.Z)(C,2),U=J[0],z=J[1],F=(0,v.useState)([]),_=(0,w.Z)(F,2),R=_[0],T=_[1],A=(0,m.TH)(),E=(0,v.useRef)(null!==(n=null===(e=A.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");(0,v.useEffect)((function(){try{var n=function(){var n=(0,b.Z)((0,h.Z)().mark((function n(){var e,t,r,a;return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ln();case 2:if(e=n.sent,(t=e.data).length){n.next=7;break}return j.Notify.error("Oops, something went wrong."),n.abrupt("return");case 7:if(T(t),r=t.slice(0,S),(a=H(r)).length){n.next=13;break}return j.Notify.error("Oops, There's no tweets"),n.abrupt("return");case 13:i(a),S!==t.length?f(!0):o.length===t.length?f(!1):(f(!1),j.Notify.info("Oops! there's no more tweets"));case 15:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}catch(e){j.Notify.error("Oops, something went wrong."),console.log(e.message)}}),[S]),(0,v.useEffect)((function(){if("all"===O)z(!1),f(!0),p(o),o.length<R.length-1?f(!0):f(!1);else if("followings"===O){var n=JSON.parse(localStorage.getItem("followingUsers")),e=o.filter((function(e){return n.includes(e.id)}));e.length<=3&&(z(!1),f(!1)),e.length>3&&(z(!1),f(!1)),e.length===R.length&&f(!1),e.length||z(!0),p(e)}else if("follow"===O){var t=JSON.parse(localStorage.getItem("followingUsers")),r=o.filter((function(n){return!t.includes(n.id)}));r.length>=3&&(z(!1),f(!0)),r.length<R.length-3?f(!0):f(!1),p(r)}}),[O,o,d]);var H=function(n){return n.map((function(n){return{id:n.id,user:n.user,tweets:n.tweets,followers:n.followers,avatar:n.avatar}}))};return(0,D.jsxs)(nn,{children:[(0,D.jsxs)(X,{to:E.current,children:[(0,D.jsx)(Z.bUI,{}),"Back"]}),(0,D.jsx)(Q,{onChange:function(n){I(n.value)}}),(0,D.jsx)($,{children:s.map((function(n){var e=n.id,t=n.user,r=n.tweets,o=n.followers,i=n.avatar;return(0,D.jsx)(G,{name:t,followers:o,tweets:r,avatar:i,userId:e},e)}))}),d&&(0,D.jsx)(en,{type:"button",onClick:function(){y((function(n){return n+3}))},children:"Load more"}),U&&(0,D.jsx)(tn,{children:"Oops, it seems you still follow nobody. Hurry up! So many interesting people around the world to follow."})]})}},392:function(n,e,t){n.exports=t.p+"static/media/picturebgr.ecde5c9dfbe42e4d5b8e.png"}}]);
//# sourceMappingURL=575.d7964dd7.chunk.js.map