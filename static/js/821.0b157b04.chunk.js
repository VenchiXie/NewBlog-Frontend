"use strict";(self.webpackChunknew_blog_react=self.webpackChunknew_blog_react||[]).push([[821],{411:function(e,a,t){t.d(a,{Z:function(){return r}});var n=[{key:1,name:"\u5bfc\u822a",sub_tab:[{key:11,name:"\u535a\u5ba2",path:"/app_content"},{key:12,name:"\u76f8\u518c",path:"/app_album"},{key:13,name:"\u9879\u76ee",path:"/app_project"},{key:14,name:"\u7edf\u8ba1",path:"/"},{key:15,name:"\u65f6\u95f4\u8f74",path:"/"}]},{key:2,name:"\u6807\u7b7e",sub_tab:[{key:21,name:"\u6280\u672f\u6742\u8c08",path:"/app_technology"},{key:22,name:"\u751f\u6d3b\u65e5\u8bb0",path:"/app_life"},{key:23,name:"\u65c5\u884c\u65e5\u8bb0",path:"/app_travel"}]},{key:3,name:"\u7b14\u8bb0",sub_tab:[{key:31,name:"\u8bed\u96c0",href:"https://www.yuque.com/dashboard"},{key:32,name:"bing",path:"https://cn.bing.com/?mkt=zh-CN"}]},{key:4,name:"\u793e\u533a",sub_tab:[{key:41,name:"\u77e5\u4e4e",href:"https://www.zhihu.com/"},{key:42,name:"GitHub",href:"https://github.com/"}]},{key:5,name:"\u53cb\u94fe",sub_tab:[{key:51,name:"loading",href:"\u53cb\u94fe1"},{key:52,name:"loading",href:"\u53cb\u94fe2"},{key:53,name:"loading",href:"\u53cb\u94fe3"},{key:54,name:"loading",href:"\u53cb\u94fe4"},{key:55,name:"\u66f4\u591a\u53cb\u94fe",path:"/app_friend"}]},{key:6,name:"\u5173\u4e8e\u672c\u7ad9",sub_tab:[{key:61,name:"\u5173\u4e8e\u4e3b\u9898",path:"\u53cb\u94fe1"},{key:62,name:"\u7248\u672c\u58f0\u660e",path:"\u53cb\u94fe2"}]}],s=t(184);var r=function(){return(0,s.jsxs)("footer",{className:"app-footer",children:[(0,s.jsx)("section",{className:"app-footer-main",children:n.map((function(e){return(0,s.jsxs)("article",{className:"app-footer-items",children:[(0,s.jsx)("strong",{className:"app-footer-item-title",children:e.name}),(0,s.jsx)("div",{className:"app-footer-item",children:e.sub_tab.map((function(e){return e.href?(0,s.jsx)("a",{href:e.href,children:e.name},e.key):(0,s.jsx)("p",{children:e.name},e.key)}))})]},e.key)}))}),(0,s.jsxs)("section",{className:"declaration-and-filing",children:[(0,s.jsx)("a",{href:"declaration",children:"Venchi"}),(0,s.jsx)("a",{href:"filing",children:"filing"})]})]})}},821:function(e,a,t){t.r(a),t.d(a,{default:function(){return l}});var n=t(439),s=t(791),r={author:"Venchi",avatar:"",introduction:[{key:1,title:"info",text:"\u4f60\u597d\uff01\u6211\u53eb Vehchi\uff0cBug\u5236\u9020\u529f\u57ce\u72ee\u3002\u613f\u7166\u65e5\u7684\u548c\u98ce\u62a4\u536b\u7740\u53ef\u7231\u7684\u4f60\uff0c\u613f\u4f60\u5e26\u7740\u6ee1\u6ee1\u7684\u6625\u7b11\u56de\u6765\u3002"},{key:"2",title:"job",text:"\u6b22\u8fce\u5404\u4f4d\u5927\u4f6c\u6765\u67e5\u770b\u6211\u7684\u7b80\u4ecb\u548c\u9879\u76ee\u3002"},{key:"3",title:"SNS",text:"\u6b22\u8fce\u67e5\u9605\u6211\u7684\u4e2a\u4eba\u7b14\u8bb0"},{key:"4",title:"last",text:"\u672c\u7f51\u7ad9\u6b63\u5728\u5efa\u8bbe\u4e2d\uff0c\u5982\u679c\u53d1\u73b0\u95ee\u9898\u6b22\u8fce\u63d0\u4ea4\u4f60\u7684\u53cd\u9988\u4fe1\u606f\u3002"}]},i=t(411),c=t(184);var l=function(){var e=r.author,a=r.introduction,t=(0,s.useState)(0),l=(0,n.Z)(t,2),o=l[0],h=l[1],m=(0,s.useState)({year:2023,month:1,date:1,hour:0,minute:0,second:0,week:"null"}),p=(0,n.Z)(m,2),u=p[0],d=p[1];(0,s.useEffect)((function(){var e=setInterval((function(){var e=new Date,a=e.getFullYear(),t=e.getMonth()+1,n=e.getDate(),s=Number(e.getHours().toString().padStart(2,"0")),r=Number(e.getMinutes().toString().padStart(2,"0")),i=Number(e.getSeconds().toString().padStart(2,"0")),c=e.getDay();d({year:a,month:t,date:n,hour:s,minute:r,second:i,week:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][c]})}),1e3);return function(){return clearInterval(e)}}),[]);var y=(0,s.useRef)(null),f=(0,s.useRef)(null),x=(0,s.useRef)(null);return(0,s.useEffect)((function(){var e=u.hour%12*30+u.minute/2,a=6*u.minute,t=6*u.second;y.current&&(y.current.style.transform="rotate(".concat(e,"deg)")),f.current&&(f.current.style.transform="rotate(".concat(a,"deg)")),x.current&&(x.current.style.transform="rotate(".concat(t,"deg)"))}),[u]),(0,c.jsxs)("main",{className:"app-home",children:[(0,c.jsxs)("section",{className:"app-home-main",children:[(0,c.jsxs)("section",{className:"app-personal-profile",children:[(0,c.jsx)("article",{className:"app-personal-signature",children:e||"Vehchi"}),(0,c.jsxs)("article",{className:"app-profile-container",children:[(0,c.jsx)("p",{children:a[o].text}),(0,c.jsxs)("p",{children:[(0,c.jsxs)("span",{children:["0",o+1,"\xa0-\xa0",a[o].title]}),(0,c.jsx)("span",{onClick:function(){var e=o+1;e>=a.length&&(e=0),h(e)},children:"Next"})]})]})]}),(0,c.jsxs)("section",{className:"app-home-time",children:[(0,c.jsx)("article",{className:"app-home-clock",children:(0,c.jsxs)("div",{className:"app-home-clock-container",children:[(0,c.jsx)("div",{className:"app-home-clock-hour",ref:y}),(0,c.jsx)("div",{className:"app-home-clock-minute",ref:f}),(0,c.jsx)("div",{className:"app-home-clock-second",ref:x})]})}),(0,c.jsx)("article",{className:"app-home-week",children:u.week}),(0,c.jsxs)("article",{className:"app-home-year-month-date",children:[u.month,"\xa0/\xa0",u.date,",\xa0",u.year,"."]}),(0,c.jsxs)("article",{className:"app-home-trends",children:[(0,c.jsx)("div",{style:{"--i":12}}),(0,c.jsx)("div",{style:{"--i":2}}),(0,c.jsx)("div",{style:{"--i":5}}),(0,c.jsx)("div",{style:{"--i":10}}),(0,c.jsx)("div",{style:{"--i":7}}),(0,c.jsx)("div",{style:{"--i":8}}),(0,c.jsx)("div",{style:{"--i":6}}),(0,c.jsx)("div",{style:{"--i":9}}),(0,c.jsx)("div",{style:{"--i":2}}),(0,c.jsx)("div",{style:{"--i":4}}),(0,c.jsx)("div",{style:{"--i":11}}),(0,c.jsx)("div",{style:{"--i":5}})]}),(0,c.jsxs)("article",{className:"app-home-show-time",children:[u.hour,":",u.minute>10?u.minute:"0"+u.minute]})]})]}),(0,c.jsx)(i.Z,{})]})}}}]);
//# sourceMappingURL=821.0b157b04.chunk.js.map