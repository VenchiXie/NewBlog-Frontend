"use strict";(self.webpackChunknew_blog_react=self.webpackChunknew_blog_react||[]).push([[807],{807:function(e,n,r){r.r(n),r.d(n,{default:function(){return f}});var t=r(165),a=r(861),c=r(439),s=r(791),u=r(689),i=r(87),o=r(184);var l=function(e){var n=e.src,r=e.currentImageIndex,t=e.handleOpenPreview,a=(0,s.useRef)(null),u=(0,s.useState)(!0),i=(0,c.Z)(u,2),l=i[0],d=i[1];return(0,s.useEffect)((function(){var e=new IntersectionObserver((function(r){r.forEach((function(r){if(r.isIntersecting&&a.current){var t=new Image;t.src=n,t.onload=function(){a.current&&(a.current.src=n,d(!1),e.unobserve(a.current))}}}))}));return a.current&&e.observe(a.current),function(){a.current&&e.unobserve(a.current)}}),[n]),(0,o.jsxs)("div",{className:"app-album-image-lazy-component",children:[l&&(0,o.jsx)("div",{className:"app-album-lazy-image-loading",children:"Loading..."}),(0,o.jsx)("img",{style:{opacity:l?0:1},"data-src":n,ref:a,onClick:function(e){return t(e,r)}})]})},d=r(886);var f=function(){var e=(0,u.s0)(),n=(0,i.lr)(),r=(0,c.Z)(n,1)[0],f=(0,s.useState)([]),p=(0,c.Z)(f,2),m=p[0],v=p[1],b=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var n,a,s,u,i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(n=r.get("key"))){e.next=8;break}return e.next=4,(0,d.kk)(n);case 4:a=e.sent,s=a.results,u=(0,c.Z)(s,1),i=u[0],v(i.images);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){b()}),[]);var h=(0,s.useState)(1),g=(0,c.Z)(h,2),x=g[0],w=g[1],k=m.slice(6*(x-1),6*x),j=Math.ceil(m.length/6),y=(0,s.useState)(0),Z=(0,c.Z)(y,2),N=Z[0],C=Z[1],E=(0,s.useState)(!1),I=(0,c.Z)(E,2),S=I[0],L=I[1],_=(0,s.useRef)(null),O=function(e,n){e.preventDefault(),C(n),L(!0),document.body.style.overflowY="hidden"},z=function(){L(!1),document.body.style.overflowY="scroll"},P=function(e){var n;null!==(n=_.current)&&void 0!==n&&n.contains(e.target)||z()};(0,s.useEffect)((function(){return S?document.addEventListener("mousedown",P):document.removeEventListener("mousedown",P),function(){document.removeEventListener("mousedown",P)}}),[S,P]);var R=1===x,Y=x===j;return(0,o.jsxs)("main",{className:"app-album-detail-page",children:[(0,o.jsx)("header",{className:"app-album-detial-page-header",children:(0,o.jsx)("span",{onClick:function(){return e(-1)},children:">"})}),(0,o.jsx)("article",{className:"app-album-image-container",children:k.map((function(e,n){var r=e.key,t=e.src;return(0,o.jsx)(l,{src:t,currentImageIndex:n,handleOpenPreview:O},r)}))}),(0,o.jsxs)("footer",{className:"app-album-detial-page-footer",children:[(0,o.jsx)("button",{style:{color:R?"var(--app-text-tags)":""},onClick:function(){var e=x-1;e<1||w(e)},disabled:R,children:"<"}),(0,o.jsx)("button",{style:{color:Y?"var(--app-text-tags)":""},onClick:function(){var e=x+1;e>j||w(e)},disabled:Y,children:">"})]}),S&&(0,o.jsxs)("article",{className:"app-album-preview-overlay",children:[(0,o.jsx)("img",{className:"app-album-preview-container",src:k[N].src,ref:_}),(0,o.jsx)("button",{className:"app-album-preview-close",onClick:z,children:"\u5173\u95ed"})]})]})}}}]);
//# sourceMappingURL=807.909120a2.chunk.js.map