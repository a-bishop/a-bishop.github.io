(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"ET/+":function(t,e,a){"use strict";a.r(e);var s=a("hGi/"),c=a("wx14"),n=a("q1tI"),o=a.n(n),l=a("2A+t"),r=a("izhR"),b=a("Wbzz"),i=a("bz+c"),u=a("dq5L"),j=a("b+HC"),m=a("n/Q7"),g=a("5hlw");var O=t=>{let{posts:e,pageContext:a}=t;const{tagsPath:s,basePath:c}=Object(u.a)();return Object(l.c)(i.a,null,Object(l.c)(g.a,{title:"Tag: "+a.name}),Object(l.c)(r.c,{sx:{alignItems:"center",justifyContent:"space-between",flexFlow:"wrap"}},Object(l.c)(r.d,{variant:"styles.h3"},a.name),Object(l.c)(r.e,{as:b.Link,sx:{variant:"links.secondary"},to:Object(m.a)(`/${c}/${s}`)},"View all tags")),Object(l.c)(j.a,{posts:e,sx:{mt:[4,5]}}))};e.default=function(t){let e=Object(c.a)({},(Object(s.a)(t),t));const{data:{allPost:a}}=e;return o.a.createElement(O,Object.assign({posts:a.nodes},e))}},TI0m:function(t,e,a){"use strict";var s=a("q1tI"),c=a.n(s),n=a("izhR"),o=a("Wbzz"),l=a("dq5L"),r=a("n/Q7");e.a=t=>{let{tags:e}=t;const{tagsPath:a,basePath:s}=Object(l.a)();return c.a.createElement(c.a.Fragment,null,e.map((t,e)=>c.a.createElement(c.a.Fragment,{key:t.slug},!!e&&", ",c.a.createElement(n.e,{as:o.Link,to:Object(r.a)(`/${s}/${a}/${t.slug}`)},t.name))))}},"b+HC":function(t,e,a){"use strict";var s=a("2A+t"),c=a("q1tI"),n=a.n(c),o=a("izhR"),l=a("Wbzz"),r=a("TI0m");var b=t=>{let{post:e,showTags:a=!0}=t;return Object(s.c)(o.a,{mb:4},Object(s.c)(o.e,{as:l.Link,to:e.slug,sx:{fontSize:[1,2,3],color:"text"}},e.title),Object(s.c)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,2]}},Object(s.c)("time",null,e.date),e.tags&&a&&Object(s.c)(n.a.Fragment,null," — ",Object(s.c)(r.a,{tags:e.tags}))))};e.a=t=>{let{posts:e,className:a="",showTags:c=!0}=t;return Object(s.c)("section",{sx:{mb:[5,6,7]},className:a},e.map(t=>Object(s.c)(b,{key:t.slug,post:t,showTags:c})))}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-tag-query-tsx-25ad5d2433828e10dd9f.js.map