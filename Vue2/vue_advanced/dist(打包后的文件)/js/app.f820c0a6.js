(function(){"use strict";var t={8191:function(t,e,n){var i=n(6369),o=function(){var t=this,e=t._self._c;return e("div",[e("Banner"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-2 col-xs-offset-2"},[e("div",{staticClass:"list-group"},[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/about"}},[t._v("About")]),e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home"}},[t._v("Home")])],1)]),e("div",{staticClass:"col-xs-6"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-body"},[e("router-view")],1)])])])],1)},r=[],a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-offset-2 col-xs-8"},[e("div",{staticClass:"page-header"},[e("h2",[t._v("Vue Router Demo")]),e("button",{on:{click:t.back}},[t._v("后退")]),e("button",{on:{click:t.forward}},[t._v("前进")])])])])},l=[],s={name:"Banner",methods:{back(){this.$router.back()},forward(){this.$router.forward()}}},u=s,c=n(1001),v=(0,c.Z)(u,a,l,!1,null,null,null),p=v.exports,f={name:"App",components:{Banner:p}},h=f,d=(0,c.Z)(h,o,r,!1,null,null,null),m=d.exports,_=n(2631),g=function(){var t=this,e=t._self._c;return e("h2",[t._v("我是About的内容")])},b=[],w={beforeRouteEnter(t,e,n){console.log("About--beforeRouteEnter",t,e),t.meta.isAuth&&("zjou"===localStorage.getItem("school")?n():alert())},beforeRouteLeave(t,e,n){console.log("About--beforeRouteLeave",t,e),n()}},x=w,y=(0,c.Z)(x,g,b,!1,null,null,null),k=y.exports,C=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("Home组件内容")]),e("div",[e("ul",{staticClass:"nav nav-tabs"},[e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/news"}},[t._v("News")])],1),e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:{name:"xiaoxi"}}},[t._v("Message")])],1)]),e("keep-alive",{attrs:{include:"News"}},[e("router-view")],1)],1)])},O=[],Z={},A=Z,j=(0,c.Z)(A,C,O,!1,null,null,null),P=j.exports,S=function(){var t=this,e=t._self._c;return e("ul",[e("li",{style:{opacity:t.opacity}},[t._v("vue工程师")]),t._m(0),t._m(1),t._m(2)])},$=[function(){var t=this,e=t._self._c;return e("li",[t._v("news001 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news002 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news003 "),e("input",{attrs:{type:"text"}})])}],E={name:"News",data(){return{opacity:1}},activated(){console.log("News组件被激活了"),this.timer=setInterval((()=>{console.log("hewei"),this.opacity-=.01,this.opacity<0&&(this.opacity=1)}),20)},deactivated(){console.log("News组件失活了"),clearInterval(this.timer)}},N=E,R=(0,c.Z)(N,S,$,!1,null,null,null),I=R.exports,L=function(){var t=this,e=t._self._c;return e("div",[e("ul",t._l(t.msgList,(function(n){return e("li",{key:n.id},[e("router-link",{attrs:{to:{name:"detail",query:{id:n.id,title:n.title}}}},[t._v(t._s(n.title))]),t._v("   "),e("button",{on:{click:function(e){return t.pushShow(n)}}},[t._v("push查看")]),e("button",{on:{click:function(e){return t.replaceShow(n)}}},[t._v("replace查看")]),e("button",{on:{click:t.goTest}},[t._v("go api测试")])],1)})),0),e("hr"),e("router-view")],1)},T=[],B=(n(7658),{name:"Message",data(){return{msgList:[{id:"001",title:"消息1"},{id:"002",title:"消息2"},{id:"003",title:"消息3"}]}},methods:{pushShow(t){console.log("@",t.id),this.$router.push({name:"detail",params:{id:t.id,title:t.title}})},replaceShow(t){this.$router.replace({name:"detail",params:{id:t.id,title:t.title}})},goTest(){this.$router.go(-2)}}}),M=B,q=(0,c.Z)(M,L,T,!1,null,null,null),z=q.exports,D=function(){var t=this,e=t._self._c;return e("div",[e("ul",[e("li",[t._v("消息编号："+t._s(t.id))]),e("li",[t._v("消息标题："+t._s(t.title))])])])},H=[],F={name:"Detail",data(){return{}},props:["id","title"]},V=F,G=(0,c.Z)(V,D,H,!1,null,null,null),J=G.exports;const K=new _.ZP({mode:"hash",routes:[{name:"jia",path:"/home",component:P,meta:{title:"主页"},children:[{name:"xinwen",path:"news",component:I,meta:{isAuth:!0,title:"新闻页"},beforeEnter(t,e,n){t.meta.isAuth?"nbcc"===localStorage.getItem("school_dazhuan")?n():alert("学校名不对，无权限查看！"):n()}},{name:"xiaoxi",path:"message",component:z,meta:{isAuth:!0,title:"消息页"},children:[{name:"xiangqing",path:"detail/:id/:title",component:J,props:!0,meta:{title:"详情页"}}]}]},{name:"guanyu",path:"/about",component:k,meta:{isAuth:"true",title:"关于页"}}]});K.afterEach(((t,e)=>{console.log("后置路由守卫：",t,e),document.title=t.meta.title||"何伟"}));var Q=K;i.ZP.use(_.ZP),new i.ZP({render:t=>t(m),router:Q}).$mount("#app")}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,i,o,r){if(!i){var a=1/0;for(c=0;c<t.length;c++){i=t[c][0],o=t[c][1],r=t[c][2];for(var l=!0,s=0;s<i.length;s++)(!1&r||a>=r)&&Object.keys(n.O).every((function(t){return n.O[t](i[s])}))?i.splice(s--,1):(l=!1,r<a&&(a=r));if(l){t.splice(c--,1);var u=o();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[i,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,r,a=i[0],l=i[1],s=i[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(s)var c=s(n)}for(e&&e(i);u<a.length;u++)r=a[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},i=self["webpackChunkmyapp"]=self["webpackChunkmyapp"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(8191)}));i=n.O(i)})();
//# sourceMappingURL=app.f820c0a6.js.map