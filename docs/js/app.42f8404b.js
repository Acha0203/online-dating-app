(function(t){function e(e){for(var a,n,c=e[0],o=e[1],l=e[2],d=0,m=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&m.push(r[n][0]),r[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,c=1;c<s.length;c++){var o=s[c];0!==r[o]&&(a=!1)}a&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},r={app:0},i=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034b":function(t,e,s){},"034f":function(t,e,s){"use strict";s("85ec")},"169b":function(t,e,s){"use strict";s("a3c2")},"4b86":function(t,e,s){"use strict";s("9b60")},"4d42":function(t,e,s){"use strict";s("ebbb")},"51c2":function(t,e,s){"use strict";s("b2bc")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{id:"app"}},[s("Header"),s("v-main",[s("router-view")],1)],1)},i=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-app-bar",{attrs:{app:"",color:"indigo lighten-1",elevation:"4",dark:""}},[s("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!0}}}),t.isUserPage?s("v-toolbar-title",[t._v(t._s(t.getUserById(t.id).name))]):t.isMessageList?s("v-toolbar-title",[t._v(" Message List ")]):s("v-toolbar-title",[t._v("Online Dating App")])],1),s("v-navigation-drawer",{staticClass:"drawer",attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[s("v-list",{attrs:{nav:"",dense:""}},[s("v-list-item-group",{attrs:{"active-class":"indigo--text text--lighten-3"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[s("router-link",{attrs:{to:"/"}},[s("v-list-item",[s("v-list-item-icon",[s("v-icon",{attrs:{color:"indigo lighten-1"}},[t._v("mdi-account-group")])],1),s("v-list-item-title",[t._v("User List")])],1)],1),s("router-link",{attrs:{to:"/message-list"}},[s("v-list-item",[s("v-list-item-icon",[s("v-icon",{attrs:{color:"indigo lighten-1"}},[t._v("mdi-chat-processing")])],1),s("v-list-item-title",[t._v("Message List")])],1)],1)],1)],1)],1)],1)},c=[],o=s("5530"),l=s("2f62"),u={data:function(){return{drawer:!1,group:null}},computed:Object(o["a"])({id:function(){return this.$route.params.id},isMessageList:function(){return"/message-list"===this.$route.fullPath},isUserPage:function(){return void 0!==this.id}},Object(l["c"])(["getUserById"]))},d=u,m=(s("c705"),s("2877")),g=s("6544"),p=s.n(g),f=s("40dc"),v=s("5bc1"),h=s("132d"),b=s("8860"),_=s("da13"),C=s("1baa"),y=s("34c3"),k=s("5d23"),x=s("f774"),U=s("2a7f"),O=Object(m["a"])(d,n,c,!1,null,"ff48bf18",null),j=O.exports;p()(O,{VAppBar:f["a"],VAppBarNavIcon:v["a"],VIcon:h["a"],VList:b["a"],VListItem:_["a"],VListItemGroup:C["a"],VListItemIcon:y["a"],VListItemTitle:k["a"],VNavigationDrawer:x["a"],VToolbarTitle:U["a"]});var w={name:"App",components:{Header:j},data:function(){return{}},created:function(){s("ed18").config()}},M=w,L=(s("034f"),s("7496")),I=s("f6c4"),V=Object(m["a"])(M,r,i,!1,null,null,null),B=V.exports;p()(V,{VApp:L["a"],VMain:I["a"]});var $=s("1da1"),A=(s("96cf"),s("7db0"),s("d3b7"),s("b0c0"),s("bc3a")),E=s.n(A),S={users:[],usersAreEmply:!0},T={getAllUsers:function(t){return t.users},getUserById:function(t){return function(e){return t.users.find((function(t){return t.id===e}))}}},P={fetchUsers:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e){var s,a,r,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(s=e.commit,!S.usersAreEmply){t.next=17;break}this.commit("setIsLoading",!0),a=[],r=0;case 5:if(!(r<30)){t.next=14;break}return t.next=8,E.a.get("https://randomuser.me/api/");case 8:i=t.sent,n={id:i.data.results[0].login.uuid,name:i.data.results[0].name.first+" "+i.data.results[0].name.last,gender:i.data.results[0].gender,age:i.data.results[0].dob.age,country:i.data.results[0].location.country,state:i.data.results[0].location.state,city:i.data.results[0].location.city,email:i.data.results[0].email,imgUrl:i.data.results[0].picture.large,talked:!1},a.push(n);case 11:r++,t.next=5;break;case 14:this.commit("setUsersAreEmpty",!1),this.commit("setIsLoading",!1),s("setUsers",a);case 17:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),setUsersAreEmpty:function(t,e){var s=t.commit;s("setUsersAreEmpty",e)},setTalkedUser:function(t,e){var s=t.commit;s("setTalkedUser",e)}},D={setUsers:function(t,e){t.users=e},setUsersAreEmpty:function(t,e){t.usersAreEmply=e},setTalkedUser:function(t,e){t.users.find((function(t){return t.id===e}))["talked"]=!0}},R={state:S,getters:T,actions:P,mutations:D},H=s("bee2"),z=s("d4ec"),F=Object(H["a"])((function t(e,s,a,r){Object(z["a"])(this,t),this.message=e,this.date=s,this.timeStamp=a,this.isMine=r})),Y={messages:[]},Z={getMessages:function(t){return t.messages},getChatLogById:function(t){return function(e){return t.messages.find((function(t){return t.id===e})).chatLog}},getLastChat:function(t){return function(e){var s=t.messages.find((function(t){return t.id===e})).chatLog;return s[s.length-1]}}},G={fetchReply:function(t,e){var s=t.commit,a=e.id,r=e.message,i=new FormData;i.append("apikey","DZZpsK1EbHaKZnzceM1H6L2tAAp6iYtQ"),i.append("query",r);var n=new F;fetch("https://api.a3rt.recruit.co.jp/talk/v1/smalltalk",{method:"POST",body:i}).then((function(t){return t.json()})).then((function(t){var e=new Date;n.date=e.getFullYear()+"/"+e.getMonth()+"/"+e.getDay(),n.timeStamp=e.getHours()+":"+e.getMinutes()+":"+e.getSeconds(),n.message=t.results[0].reply,n.isMine=!1,s("setMessage",{id:a,chat:n})}))},setMessage:function(t,e){var s=t.commit,a=e.id,r=e.message,i=new F,n=new Date;i.date=n.getFullYear()+"/"+n.getMonth()+"/"+n.getDay(),i.timeStamp=n.getHours()+":"+n.getMinutes()+":"+n.getSeconds(),i.message=r,i.isMine=!0,s("setMessage",{id:a,chat:i})},setMessageObj:function(t,e){var s=t.commit;s("setMessageObj",e)}},J={setMessageObj:function(t,e){var s={id:e,chatLog:[]};t.messages.push(s)},setMessage:function(t,e){var s=e.id,a=e.chat;t.messages.find((function(t){return t.id===s})).chatLog.push(a)}},K={state:Y,getters:Z,actions:G,mutations:J};a["a"].use(l["a"]);var N=new l["a"].Store({state:{isLoading:!1},actions:{setIsLoading:function(t,e){var s=t.commit;s("setIsLoading",e)}},mutations:{setIsLoading:function(t,e){t.isLoading=e}},modules:{users:R,messages:K}}),q=s("f309");a["a"].use(q["a"]);var Q=new q["a"]({}),W=s("8c4f"),X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t.isLoading?s("Loading"):t._e(),s("UserCard")],1)},tt=[],et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},t._l(t.getAllUsers,(function(e,a){return s("div",{key:a},[s("div",{staticClass:"user-card"},[s("v-avatar",{staticClass:"mb-5",attrs:{size:"180"}},[s("img",{attrs:{src:""+e.imgUrl}})]),s("h2",{staticClass:"montserrat dark-purple pb-1"},[t._v(" "+t._s(e.name)+" ")]),s("h3",{staticClass:"montserrat dark-purple pb-1"},[t._v("Age: "+t._s(e.age))]),s("h3",{staticClass:"montserrat dark-purple pb-1"},[s("v-icon",{attrs:{color:"indigo darken-2"}},[t._v(" mdi-map-marker ")]),t._v(" "+t._s(e.country)+" ")],1),s("div",{staticClass:"btns"},[s("router-link",{attrs:{to:"/user/"+e.id}},[s("v-btn",{staticClass:"my-3 mx-2 white--text",attrs:{color:"indigo lighten-1"}},[t._v(" Profile ")])],1),s("router-link",{attrs:{to:"/user/"+e.id+"/chat"}},[s("v-btn",{staticClass:"my-3 mx-2 white--text",attrs:{color:"indigo lighten-1"}},[t._v(" Message ")])],1)],1)],1)])})),0)},st=[],at={name:"UserCards",computed:Object(o["a"])({},Object(l["c"])(["getAllUsers"])),methods:Object(o["a"])({},Object(l["b"])(["fetchUsers"])),created:function(){this.fetchUsers()}},rt=at,it=(s("f107"),s("8212")),nt=s("8336"),ct=Object(m["a"])(rt,et,st,!1,null,"7f74aac3",null),ot=ct.exports;p()(ct,{VAvatar:it["a"],VBtn:nt["a"],VIcon:h["a"]});var lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loading"})},ut=[],dt={name:"Loading"},mt=dt,gt=(s("4d42"),Object(m["a"])(mt,lt,ut,!1,null,"c15ab1b2",null)),pt=gt.exports,ft={name:"UserList",components:{UserCard:ot,Loading:pt},computed:Object(o["a"])({},Object(l["d"])(["isLoading"])),methods:Object(o["a"])({},Object(l["b"])(["fetchUsers"])),created:function(){this.$store.dispatch("fetchUsers")}},vt=ft,ht=(s("c911"),Object(m["a"])(vt,X,tt,!1,null,"481b14aa",null)),bt=ht.exports,_t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-gradient"},[s("v-avatar",{staticClass:"mb-5",attrs:{size:"180"}},[s("img",{attrs:{src:""+t.getUserById(t.id).imgUrl}})]),s("div",{staticClass:"text-center mb-5"},[s("h2",{staticClass:"montserrat dark-purple mb-2"},[t._v(" "+t._s(t.getUserById(t.id).name)+" ")]),s("div",{staticClass:"d-flex"},[s("v-icon",{attrs:{color:"indigo lighten-1"}},[t._v(" mdi-email ")]),s("h3",{staticClass:"montserrat dark-purple font-small"},[t._v(" "+t._s(t.getUserById(t.id).email)+" ")])],1)]),s("div",{staticClass:"list"},[t._m(0),s("div",{staticClass:"text-right"},[s("h3",{staticClass:"montserrat dark-purple"},[t._v(t._s(t.getUserById(t.id).gender))])])]),s("div",{staticClass:"list"},[t._m(1),s("div",{staticClass:"text-right"},[s("h3",{staticClass:"montserrat dark-purple"},[t._v(t._s(t.getUserById(t.id).age))])])]),s("div",{staticClass:"list"},[t._m(2),s("div",{staticClass:"text-right"},[s("h3",{staticClass:"montserrat dark-purple"},[t._v(t._s(t.getUserById(t.id).country))])])]),s("div",{staticClass:"list"},[t._m(3),s("div",{staticClass:"text-right"},[s("h3",{staticClass:"montserrat dark-purple"},[t._v(t._s(t.getUserById(t.id).state))])])]),s("div",{staticClass:"list"},[t._m(4),s("div",{staticClass:"text-right"},[s("h3",{staticClass:"montserrat dark-purple"},[t._v(t._s(t.getUserById(t.id).city))])])]),s("div",{staticClass:"btn-container"},[s("router-link",{attrs:{to:"/"}},[s("v-btn",{staticClass:"ma-4 white--text",attrs:{color:"indigo lighten-1"}},[s("v-icon",[t._v("mdi-arrow-u-left-bottom-bold")]),t._v(" Back ")],1)],1),s("router-link",{attrs:{to:"/user/"+t.id+"/chat"}},[s("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"indigo lighten-1"}},[t._v(" Message ")])],1)],1)],1)},Ct=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-left"},[s("h3",{staticClass:"montserrat dark-purple"},[t._v("Gender")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-left"},[s("h3",{staticClass:"montserrat dark-purple"},[t._v("Age")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-left"},[s("h3",{staticClass:"montserrat dark-purple"},[t._v("Country")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-left"},[s("h3",{staticClass:"montserrat dark-purple"},[t._v("State")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-left"},[s("h3",{staticClass:"montserrat dark-purple"},[t._v("City")])])}],yt={name:"UserDetail",computed:Object(o["a"])({id:function(){return this.$route.params.id}},Object(l["c"])(["getUserById"]))},kt=yt,xt=(s("169b"),Object(m["a"])(kt,_t,Ct,!1,null,"0abf3097",null)),Ut=xt.exports;p()(xt,{VAvatar:it["a"],VBtn:nt["a"],VIcon:h["a"]});var Ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-gradient"},[s("ChatLog"),s("v-footer",{attrs:{fixed:"",inset:"",height:"70",color:"white"}},[s("v-row",[s("router-link",{attrs:{to:"/"}},[s("v-btn",{staticClass:"mt-5 ml-3",attrs:{icon:"",color:"indigo lighten-1"}},[s("v-icon",{attrs:{color:"indigo lighten-1"}},[t._v("mdi-account-group")])],1)],1),s("v-text-field",{staticClass:"montserrat mt-5 ml-3",attrs:{label:"Message",color:"indigo lighten-1",clearable:"",outlined:"",rounded:"",dense:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),s("v-btn",{staticClass:"mt-5 mx-3",attrs:{icon:"",color:"indigo lighten-1",disabled:!t.message},on:{click:function(e){t.sendMessage(t.getUserById(t.id))}}},[s("v-icon",{attrs:{color:"indigo lighten-1"}},[t._v("mdi-send")])],1)],1)],1)],1)},jt=[],wt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},t._l(t.getChatLogById(t.id),(function(e,a){return s("div",{key:a},[s("v-row",{class:{"justify-end":e.isMine}},[s("v-avatar",{staticClass:"ml-5 mt-5",attrs:{size:"70"}},[e.isMine?t._e():s("img",{attrs:{src:""+t.getUserById(t.id).imgUrl}})]),s("div",[s("div",{staticClass:"rounded-lg montserrat white--text pa-3 ma-4 drop-shadow",class:{"deep-purple lighten-1":e.isMine,"indigo lighten-1":!e.isMine,"rounded-br-0":e.isMine,"rounded-bl-0":!e.isMine}},[s("p",{staticClass:"message-text"},[t._v(" "+t._s(e.message)+" ")])]),s("div",{staticClass:"montserrat dark-purple mx-5 text-end"},[t._v(" "+t._s(e.date)+" "+t._s(e.timeStamp)+" ")])])],1)],1)})),0)},Mt=[],Lt={name:"ChatLog",computed:Object(o["a"])({id:function(){return this.$route.params.id}},Object(l["c"])(["getChatLogById","getUserById"])),methods:{}},It=Lt,Vt=(s("6381"),s("0fd9")),Bt=Object(m["a"])(It,wt,Mt,!1,null,"4134d27d",null),$t=Bt.exports;p()(Bt,{VAvatar:it["a"],VRow:Vt["a"]});var At={name:"Chat",data:function(){return{message:""}},components:{ChatLog:$t},computed:Object(o["a"])({id:function(){return this.$route.params.id}},Object(l["c"])(["getUserById"])),methods:{sendMessage:function(t){t.talked||(this.$store.dispatch("setMessageObj",this.id),this.$store.dispatch("setTalkedUser",this.id)),this.$store.dispatch("setMessage",{id:this.id,message:this.message}),this.$store.dispatch("fetchReply",{id:this.id,message:this.message})}}},Et=At,St=(s("4b86"),s("553a")),Tt=s("8654"),Pt=Object(m["a"])(Et,Ot,jt,!1,null,"395cccd3",null),Dt=Pt.exports;p()(Pt,{VBtn:nt["a"],VFooter:St["a"],VIcon:h["a"],VRow:Vt["a"],VTextField:Tt["a"]});var Rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-gradient"},[s("v-col",{attrs:{cols:"12"}},t._l(t.getMessages,(function(e,a){return s("div",{key:a},[s("router-link",{attrs:{to:"/user/"+e.id+"/chat"}},[s("v-card",{staticClass:"ma-4 px-3"},[s("v-card-text",[s("v-row",{attrs:{align:"center"}},[s("v-col",{attrs:{cols:"3"}},[s("v-avatar",{staticClass:"mr-4",attrs:{size:"70"}},[s("img",{attrs:{src:""+t.getUserById(e.id).imgUrl}})])],1),s("v-col",{attrs:{cols:"6"}},[s("p",{staticClass:"title montserrat dark-purple"},[t._v(" "+t._s(t.getUserById(e.id).name)+" ")]),s("p",{staticClass:"subtitle-1 montserrat dark-purple"},[t._v(" "+t._s(t.getLastChat(e.id).message)+" ")])]),s("v-col",{attrs:{cols:"3"}},[s("p",{staticClass:"body-2 montserrat dark-purple text-right"},[t._v(" "+t._s(t.getLastChat(e.id).date)+" "),s("br"),t._v(" "+t._s(t.getLastChat(e.id).timeStamp)+" ")])])],1)],1)],1)],1)],1)})),0)],1)},Ht=[],zt={name:"MessageList",computed:Object(o["a"])({},Object(l["c"])(["getMessages","getUserById","getLastChat"])),methods:{}},Ft=zt,Yt=(s("51c2"),s("b0af")),Zt=s("99d9"),Gt=s("62ad"),Jt=Object(m["a"])(Ft,Rt,Ht,!1,null,"64129f23",null),Kt=Jt.exports;p()(Jt,{VAvatar:it["a"],VCard:Yt["a"],VCardText:Zt["a"],VCol:Gt["a"],VRow:Vt["a"]}),a["a"].use(W["a"]);var Nt=[{path:"/",name:"userlist",component:bt},{path:"/user/:id",name:"userdetail",component:Ut},{path:"/user/:id/chat",name:"chat",component:Dt},{path:"/message-list",name:"messagelist",component:Kt}],qt=new W["a"]({mode:"history",base:"",routes:Nt});s("034b");a["a"].config.productionTip=!1,new a["a"]({store:N,vuetify:Q,router:qt,render:function(t){return t(B)}}).$mount("#app")},"5ec3":function(t,e,s){},6381:function(t,e,s){"use strict";s("5ec3")},"76f0":function(t,e,s){},"85ec":function(t,e,s){},"946b":function(t,e,s){},"9b60":function(t,e,s){},a3c2:function(t,e,s){},b2bc:function(t,e,s){},c705:function(t,e,s){"use strict";s("f92b")},c911:function(t,e,s){"use strict";s("76f0")},ebbb:function(t,e,s){},f107:function(t,e,s){"use strict";s("946b")},f92b:function(t,e,s){}});
//# sourceMappingURL=app.42f8404b.js.map