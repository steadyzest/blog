(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/d1K":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("IP2g"),c=a("KSab"),i=a("Y7J9"),m=(a("sfvA"),c.config.friends),s=void 0===m?[]:m,u=function(){return r.a.createElement("div",{className:"friend"},r.a.createElement("p",null,"지인"),s.map((function(e){return r.a.createElement(i.a,{href:e.href,title:e.title,key:e.title,rel:"noopener"})})))},f=(a("qfuT"),function(e){var t=e.posts;return r.a.createElement("div",{className:"latest-post"},t.map((function(e){var t=e.node;return r.a.createElement(l.Link,{to:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,key:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,href:t.frontmatter.url||t.frontmatter.slug||t.fields.slug},t.frontmatter.title)})))}),p=(a("usu3"),function(e){var t=e.totalCount,a=e.posts;return r.a.createElement("div",{className:"d-none d-lg-block information my-2"},r.a.createElement("hr",null),r.a.createElement("p",null,"총 ",t,"건의 게시글이 있습니다."),r.a.createElement("hr",null),r.a.createElement(f,{posts:a}),r.a.createElement("hr",null),r.a.createElement(u,null))});p.defaultProps={posts:[]};var g=p,d=(a("YX5f"),c.config.wordings),E=void 0===d?[]:d,h=c.config.githubUsername,y=c.config.email,v=c.config.iconUrl,b=c.config.about,w=function(e){var t=e.href,a=e.icon;return r.a.createElement("a",{target:"_blank",href:t,rel:"external nofollow noopener noreferrer",className:"custom-icon"},r.a.createElement("span",{className:"fa-layers fa-fw fa-2x"},r.a.createElement(o.a,{icon:a})))},N=function(e){var t=e.totalCount,a=e.latestPosts;return r.a.createElement("header",{className:"intro-header site-heading text-center col-xl-2 col-lg-3 col-xs-12 order-lg-1"},r.a.createElement("div",{className:"about-me"},r.a.createElement(l.Link,{to:b,href:b,className:"name"},r.a.createElement("img",{className:"avatar",src:v,alt:"steadyzest"}),r.a.createElement("h4",null,"steadyzest")),r.a.createElement("p",{className:"mb-1"},E[0]),r.a.createElement("p",{className:"mb-3"},E[1]),r.a.createElement(w,{href:"https://github.com/"+h,icon:["fab","github"]}),r.a.createElement(w,{href:"mailto:"+y,icon:["far","envelope"]}),r.a.createElement(g,{totalCount:t,posts:a})))};N.defaultProps={totalCount:0,latestPosts:[]};t.a=function(){return r.a.createElement(l.StaticQuery,{query:"224695230",render:function(e){return r.a.createElement(N,Object.assign({},e.all,e.limited))}})}},Jz1z:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=function(e){var t=e.name,a=e.count;return r.a.createElement("a",{href:"/tag/"+t,className:"header-tag"},t," ",a)};l.defaultProps={count:""},t.a=l},YX5f:function(e,t,a){},enK5:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return i}));var n=a("q1tI"),r=a.n(n),l=a("/d1K"),o=a("Jz1z"),c=a("wtQ5");t.default=function(e){var t=e.data.allMarkdownRemark,a={};t.edges.forEach((function(e){e.node.frontmatter.tags.forEach((function(e){a[e]?a[e]+=1:a[e]=1}))}));var n=Array.from(Object.keys(a)).sort((function(e,t){return a[t]-a[e]}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",style:{margin:15}},r.a.createElement(l.a,null),r.a.createElement("div",{className:"col order-2"},n.map((function(e){return r.a.createElement(o.a,{name:e,key:e,count:a[e]})})))),r.a.createElement(c.a,{title:"tag",url:"/tags/",siteTitleAlt:"steadyzest Blog",isPost:!1,description:"Tags Page",image:"https://i.imgur.com/M795H8A.jpg"}))};var i="299617399"},qfuT:function(e,t,a){},sfvA:function(e,t,a){},usu3:function(e,t,a){},wtQ5:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("TJpk"),o=a.n(l),c=a("KSab"),i=a.n(c),m=function(e){var t=e.url,a=e.title,n=e.description,l=e.image,c=(e.siteTitleAlt,e.isPost);return r.a.createElement(o.a,null,r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("meta",{name:"image",content:l}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(function(e){var t=e.url,a=e.title,n=e.siteTitleAlt,r=e.isPost,l=e.image,o=e.description;return[{"@context":"http://schema.org","@type":"WebSite",url:t,name:a,alternateName:n||""},r?{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":t,name:a,image:l}}]}:"",r?{"@context":"http://schema.org","@type":"BlogPosting",url:t,name:a,alternateName:n||"",headline:a,image:{"@type":"ImageObject",url:l},description:o}:""]}(t))),r.a.createElement("meta",{property:"og:url",content:t}),c?r.a.createElement("meta",{property:"og:type",content:"article"}):r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:a}),r.a.createElement("meta",{property:"og:description",content:n}),r.a.createElement("meta",{property:"og:image",content:l}),r.a.createElement("meta",{property:"fb:app_id",content:i.a.siteFBAppID?i.a.siteFBAppID:""}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:creator",content:i.a.twitter_username?i.a.twitter_username:""}),r.a.createElement("meta",{name:"twitter:title",content:a}),r.a.createElement("meta",{name:"twitter:description",content:n}),r.a.createElement("meta",{name:"twitter:image",content:l}))};m.defaultProps={title:i.a.title},t.a=m}}]);
//# sourceMappingURL=component---src-pages-tags-js-74816ce6fa83f4afb3de.js.map