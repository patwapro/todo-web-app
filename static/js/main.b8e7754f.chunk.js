(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{207:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(30),i=n.n(r),c=n(209),l=n(19),s=n(20),u=n(21),m=n(22),p=n(23),d=n(78),h=n(12),g=n(39),b=n.n(g),f=n(40),v=n.n(f),w=n(80),E=n.n(w),O=Object(h.createMuiTheme)({palette:{primary:{light:b.a[300],main:b.a[500],dark:b.a[700]},secondary:{light:v.a[300],main:v.a[500],dark:v.a[700]}}});var j=function(e){return function(t){return o.a.createElement(h.MuiThemeProvider,{theme:O},o.a.createElement(E.a,null),o.a.createElement(e,t))}},k=n(81),y=n.n(k),S=n(82),x=n.n(S),C=n(24),N=n.n(C),T=n(53),A=n.n(T),I=n(208),J=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.root},o.a.createElement(y.a,{position:"static"},o.a.createElement(x.a,null,o.a.createElement(N.a,{variant:"title",color:"inherit",className:e.grow,component:I.a,to:"/"},"Todo App"),o.a.createElement(A.a,{color:"inherit",component:I.a,to:"/"},"Home"),o.a.createElement(A.a,{color:"inherit",component:I.a,to:"/about"},"About Me"))))}}]),t}(a.Component),B=Object(h.withStyles)({root:{flexGrow:1},grow:{flexGrow:1,textDecoration:"none"}})(J),D=n(25),F=n(89),W=n.n(F),L=n(83),R=n.n(L),G=n(84),M=n.n(G),H=n(87),P=n.n(H),U=n(86),q=n.n(U),z=n(85),Q=n.n(z),Y=n(52),$=n.n(Y),K=n(88),V=n.n(K),X=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.task;return a.length>0?o.a.createElement("div",{className:n.root},o.a.createElement(R.a,null,a.map(function(t,n){return o.a.createElement(M.a,{key:n,style:{textDecoration:t.completed?"line-through":"none"}},o.a.createElement(Q.a,{disableRipple:!0,onClick:function(){return e.props.handleCompleted(n)},checked:t.completed}),o.a.createElement(q.a,null,o.a.createElement(N.a,{variant:"subheading",style:{color:t.completed?"#bbb":"#000"}},t.todo)),o.a.createElement(P.a,null,o.a.createElement($.a,{"aria-label":"Comments",onClick:function(){return e.props.deleteTask(n)}},o.a.createElement(V.a,{style:{color:"#F44336"}}))))}))):o.a.createElement("div",{className:n.root,style:{padding:20,textAlign:"center"}},o.a.createElement(N.a,{variant:"headline"},"Create Your First Todo List"))}}]),t}(o.a.Component),Z=Object(h.withStyles)(function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper,boxShadow:"0 1px 1px 0 rgba(116, 129, 141, 0.1)"}}})(X),_=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault(),n.state.list.push({todo:n.state.input,completed:!1}),localStorage.setItem("todoTask",JSON.stringify(n.state.list)),n.setState({input:"",list:n.state.list})},n.onCompleted=function(e){var t=n.state.list.map(function(t,n){return e===n&&(t.completed=!t.completed),t});localStorage.setItem("todoTask",JSON.stringify(t)),n.setState({list:t})},n.onDelete=function(e){var t=n.state.list.filter(function(t,n){return n!==e});localStorage.setItem("todoTask",JSON.stringify(t)),n.setState({list:t})},n.onSubmit=n.onSubmit.bind(Object(D.a)(Object(D.a)(n))),n.onCompleted=n.onCompleted.bind(Object(D.a)(Object(D.a)(n))),n.state={list:JSON.parse(localStorage.getItem("todoTask"))?JSON.parse(localStorage.getItem("todoTask")):[],input:""},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{marginBottom:30}},o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement(W.a,{className:t.input,value:this.state.input,onChange:function(t){return e.setState({input:t.target.value})},placeholder:"Add your task...",disableUnderline:!0,fullWidth:!0,required:!0}))),o.a.createElement("div",null,o.a.createElement(Z,{task:this.state.list,deleteTask:this.onDelete,handleCompleted:this.onCompleted})))}}]),t}(a.Component),ee=Object(h.withStyles)(function(e){return{input:{padding:"16px 16px 16px 60px",backgroundColor:"#fff",boxShadow:"0 1px 1px 0 rgba(116, 129, 141, 0.1)",fontSize:22}}})(_),te=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.root},o.a.createElement(N.a,{variant:"display3",gutterBottom:!0,className:e.title},"Hi, I'm Amar Patwa"),o.a.createElement(N.a,{variant:"headline",gutterBottom:!0,className:e.titleSub},"Frontend Developer"),o.a.createElement(N.a,{variant:"subheading",gutterBottom:!0,className:e.title},"I am versatile Frontend developer with 2+ year",o.a.createElement("br",null)," of experience in designing, developing and managing the complex site."))}}]),t}(a.Component),ne=Object(h.withStyles)({root:{flexGrow:1},title:{textAlign:"center",color:"#000"},titleSub:{textAlign:"center",color:"#9c27b0"}})(te),ae=n(211),oe=n(210),re=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(o.a.Fragment,null,o.a.createElement(B,null),o.a.createElement("div",{className:e.layout},o.a.createElement(ae.a,null,o.a.createElement(oe.a,{exact:!0,path:"/",component:ee}),o.a.createElement(oe.a,{exact:!0,path:"/about",component:ne}))))}}]),t}(o.a.Component),ie=j(Object(h.withStyles)(function(e){return{layout:Object(d.a)({width:"auto",marginTop:3*e.spacing.unit,marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"})}})(re)),ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function le(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(c.a,null,o.a.createElement(ie,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/todo-web-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/todo-web-app","/service-worker.js");ce?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):le(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):le(e)})}}()},91:function(e,t,n){e.exports=n(207)}},[[91,2,1]]]);
//# sourceMappingURL=main.b8e7754f.chunk.js.map