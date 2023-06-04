"use strict";(self.webpackChunktest_app_goit=self.webpackChunktest_app_goit||[]).push([[575],{7466:function(n,e,t){t.r(e),t.d(e,{default:function(){return an}});var o,r,i,a,l,s,c,p,u,f,d,g,x,h=t(4165),b=t(5861),w=t(9439),m=t(7689),v=t(2791),Z=t(9135),j=t(5264),y=t(168),S=t(6088),k=S.Z.li(o||(o=(0,y.Z)(["\n  position: relative;\n  width: 380px;\n  min-width: 380px;\n  height: 464px;\n  margin-bottom: 36px;\n\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  border-radius: 20px;\n\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-transform: uppercase;\n  color: #ebd8ff;\n"]))),N=S.Z.div(r||(r=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 28px;\n"]))),O=S.Z.div(i||(i=(0,y.Z)(["\n  margin-bottom: 76px;\n"]))),I=S.Z.img(a||(a=(0,y.Z)(["\n  position: absolute;\n  top: 20;\n  left: 20;\n  transform: translateY(-50%);\n"]))),C=S.Z.div(l||(l=(0,y.Z)(["\n  position: absolute;\n  width: 380px;\n  height: 8px;\n  left: 0px;\n  top: 226px;\n\n  overflow: hidden;\n\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n"]))),J=S.Z.div(s||(s=(0,y.Z)(["\n  position: absolute;\n  top: 198px;\n  left: 158px;\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: rgb(87 54 163);\n"]))),U=S.Z.img(c||(c=(0,y.Z)(["\n  position: absolute;\n  top: -6px;\n  left: -9px;\n  z-index: 1;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n"]))),z=S.Z.img(p||(p=(0,y.Z)(["\n  width: 62px;\n  height: 62px;\n  object-fit: cover;\n  border-radius: 50%;\n"]))),F=S.Z.ul(u||(u=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  margin-bottom: 26px;\n"]))),R=S.Z.button(f||(f=(0,y.Z)(["\n  width: 196px;\n  height: 50px;\n  margin: 0 auto;\n  background: #ebd8ff;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: #373737;\n\n  &:hover {\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  }\n"]))),_=S.Z.button(d||(d=(0,y.Z)(["\n  width: 196px;\n  height: 50px;\n  margin: 0 auto;\n  background: #5cd3a8;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: #373737;\n\n  &:hover {\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  }\n"]))),E=S.Z.li(g||(g=(0,y.Z)(["\n  &:not(:last-of-type) {\n    margin-bottom: 8px;\n  }\n"]))),L=S.Z.p(x||(x=(0,y.Z)(["\n  color: #ffc318;\n"])));var T,A,H,P,B=t.p+"static/media/logo.e917114d7945c04c85a8946a331d28b6.svg",V=t(392),Y=t.p+"static/media/ellipse.fb24b248239efd196758.png",q=t(184),D=function(n){var e,t=n.name,o=n.tweets,r=n.followers,i=n.avatar,a=n.userId,l=(null!==(e=JSON.parse(localStorage.getItem("user".concat(a))))&&void 0!==e&&e).following,s=(0,v.useState)(l),c=(0,w.Z)(s,2),p=c[0],u=c[1],f=function(n){var e={userId:n,following:!p};localStorage.setItem("user".concat(n),JSON.stringify(e));var t=JSON.parse(localStorage.getItem("user".concat(n)));u(t.following);var o=JSON.parse(localStorage.getItem("followingUsers"));if(p&&JSON.parse(localStorage.getItem("followingUsers")).includes(n)){var r=o.indexOf(n);console.log(r),o.splice(r,1);var i=Array.from(new Set(o));console.log(i),localStorage.setItem("followingUsers",JSON.stringify(i))}else o.push(n),localStorage.setItem("followingUsers",JSON.stringify(o))},d=function(n){var e=n.toString().split("");return e.length>6&&e.splice(-6,0,","),e.splice(-3,0,","),e.join(""),e};return(0,q.jsx)(k,{children:(0,q.jsxs)(N,{children:[(0,q.jsxs)(O,{children:[(0,q.jsx)(I,{src:B,alt:"logo",width:"76",height:"20"}),(0,q.jsx)("img",{src:V,alt:"background",width:"308",height:"168"})]}),(0,q.jsx)(C,{}),(0,q.jsxs)(J,{children:[(0,q.jsx)(U,{src:Y,alt:"circle"}),(0,q.jsx)(z,{src:i,alt:"avatar"})]}),(0,q.jsxs)(F,{children:[(0,q.jsx)(E,{children:(0,q.jsx)(L,{children:t})}),(0,q.jsx)(E,{children:(0,q.jsxs)("p",{children:[o," Tweets"]})}),(0,q.jsx)(E,{children:(0,q.jsxs)("p",{children:[d(p?r+1:r)," ","Followers"]})})]}),p?(0,q.jsx)(_,{onClick:function(){return f(a)},children:"Following"}):(0,q.jsx)(R,{type:"button",onClick:function(){return f(a)},children:"Follow"})]})})},G=t(3763),K=[{value:"all",label:"All"},{value:"follow",label:"Follow"},{value:"followings",label:"Followings"}],M=function(n){var e=n.value,t=n.onChange;return(0,q.jsx)("div",{style:{width:200,color:"#471ca9",backgroundColor:"#ebd8ff",borderRadius:25,position:"fixed",zIndex:2,top:136,left:214},children:(0,q.jsx)(G.ZP,{onChange:t,name:"options",options:K,className:"basic-single",classNamePrefix:"select",defaultValue:K[0],value:e})})},Q=t(1087),W=(0,S.Z)(Q.rU)(T||(T=(0,y.Z)(["\n  position: fixed;\n  top: 136px;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n\n  width: 80px;\n  height: 25px;\n\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  color: #ebd8ff;\n  padding: 6px 8px;\n  border-radius: 4px;\n\n  &:hover {\n    color: #ffc318;\n  }\n"]))),X=S.Z.ul(A||(A=(0,y.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  justify-content: space-evenly;\n  align-items: center;\n"]))),$=S.Z.div(H||(H=(0,y.Z)(["\n  position: relative;\n  padding: 0 86px 72px 86px;\n"]))),nn=S.Z.button(P||(P=(0,y.Z)(["\n  display: block;\n  margin: 0 auto;\n  width: 196px;\n  height: 50px;\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: #ebd8ff;\n\n  &:hover {\n    color: #ffc318;\n  }\n"]))),en=t(1243),tn=t(1686),on=t.n(tn);en.Z.defaults.baseURL="https://6462869a4dca1a6613488ff7.mockapi.io/api/v1";var rn=function(){var n=(0,b.Z)((0,h.Z)().mark((function n(){var e;return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,en.Z.get("/users");case 3:return(e=n.sent)||on().Notify("Oops, something went wrong"),n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),an=function(){var n,e,t=(0,v.useState)([]),o=(0,w.Z)(t,2),r=o[0],i=o[1],a=(0,v.useState)([]),l=(0,w.Z)(a,2),s=l[0],c=l[1],p=(0,v.useState)(!1),u=(0,w.Z)(p,2),f=u[0],d=u[1],g=(0,v.useState)(3),x=(0,w.Z)(g,2),y=x[0],S=x[1],k=(0,v.useState)("all"),N=(0,w.Z)(k,2),O=N[0],I=N[1],C=(0,v.useState)(!1),J=(0,w.Z)(C,2),U=J[0],z=J[1],F=(0,v.useState)([]),R=(0,w.Z)(F,2),_=R[0],E=R[1],L=(0,m.TH)(),T=(0,v.useRef)(null!==(n=null===(e=L.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");(0,v.useEffect)((function(){console.log(O)}),[]),(0,v.useEffect)((function(){try{var n=function(){var n=(0,b.Z)((0,h.Z)().mark((function n(){var e,t,o,a;return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,rn();case 2:if(e=n.sent,(t=e.data).length){n.next=7;break}return j.Notify.error("Oops, something went wrong."),n.abrupt("return");case 7:if(E(t),o=t.slice(0,y),(a=A(o)).length){n.next=13;break}return j.Notify.error("Oops, There's no tweets"),n.abrupt("return");case 13:i(a),y!==t.length?d(!0):r.length===t.length?d(!1):(d(!1),j.Notify.info("Oops! there's no more tweets"));case 15:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}catch(e){j.Notify.error("Oops, something went wrong."),console.log(e.message)}}),[y]),(0,v.useEffect)((function(){if("all"===O)c(r);else if("followings"===O){var n=JSON.parse(localStorage.getItem("followingUsers")),e=r.filter((function(e){return n.includes(e.id)}));e.length<=3&&(z(!1),d(!1)),e.length>3&&(z(!1),d(!1)),e.length===_.length&&d(!1),e.length||z(!0),c(e)}else if("follow"===O){var t=JSON.parse(localStorage.getItem("followingUsers")),o=r.filter((function(n){return!t.includes(n.id)}));o.length>=3&&(z(!1),d(!0)),o.length<_.length-3?d(!0):d(!1),c(o)}}),[O,r,f]);var A=function(n){return n.map((function(n){return{id:n.id,user:n.user,tweets:n.tweets,followers:n.followers,avatar:n.avatar}}))};return(0,q.jsxs)($,{children:[(0,q.jsxs)(W,{to:T.current,children:[(0,q.jsx)(Z.bUI,{}),"Back"]}),(0,q.jsx)(M,{onChange:function(n){I(n.value),console.log(n.value)}}),(0,q.jsx)(X,{children:s.map((function(n){var e=n.id,t=n.user,o=n.tweets,r=n.followers,i=n.avatar;return(0,q.jsx)(D,{name:t,followers:r,tweets:o,avatar:i,userId:e},e)}))}),f&&(0,q.jsx)(nn,{type:"button",onClick:function(){S((function(n){return n+3})),console.log(y)},children:"Load more"}),U&&(0,q.jsx)("h1",{style:{width:600,marginLeft:"auto",marginRight:60,color:"#ebd8ff"},children:"Oops, it seems you still follow nobody. Hurry up! So many interesting people around the world to follow."})]})}},392:function(n,e,t){n.exports=t.p+"static/media/picturebgr.ecde5c9dfbe42e4d5b8e.png"}}]);
//# sourceMappingURL=575.6fdd119a.chunk.js.map