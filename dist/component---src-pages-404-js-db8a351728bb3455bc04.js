(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,a){"use strict";a.r(t);var A=a(0),n=a.n(A),r=a(154),o=a(152);t.default=function(){return n.a.createElement(r.a,null,n.a.createElement(o.a,{title:"404: Not found"}),n.a.createElement("h1",null,"NOT FOUND"),n.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},145:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var A=a(0),n=a.n(A),r=a(4),o=a.n(r),l=(a(33),a(146),n.a.createContext({})),i=function(e){return n.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};i.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,a){var A;e.exports=(A=a(148))&&A.default||A},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Brett Fouss"}}}}},148:function(e,t,a){"use strict";a.r(t);a(34);var A=a(0),n=a.n(A),r=a(4),o=a.n(r),l=a(56),i=a(2),c=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},150:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAVAQEBAAAAAAAAAAAAAAAAAAACAf/aAAwDAQACEAMQAAABnBoLoJFP/8QAGhAAAwADAQAAAAAAAAAAAAAAAAECAxESQf/aAAgBAQABBQKVyUtCgyvceVm4P//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/AQn/xAAWEQEBAQAAAAAAAAAAAAAAAAAAASH/2gAIAQIBAT8BjH//xAAcEAACAgIDAAAAAAAAAAAAAAAAAQIxESEiUbH/2gAIAQEABj8Cy9j1dHLwS6sUFaEoM//EABsQAAMBAAMBAAAAAAAAAAAAAAERIQAxUXGB/9oACAEBAAE/IZlQiFpIvgNWj2+8pcBh4ov3PFEr7v/aAAwDAQACAAMAAAAQ3P8A/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREA/9oACAEDAQE/ELZAZd//xAAZEQACAwEAAAAAAAAAAAAAAAAAEQEhQVH/2gAIAQIBAT8QouDhh//EABwQAQACAwEBAQAAAAAAAAAAAAERIQAxUWFBcf/aAAgBAQABPxB2URiTUSIuuTiTMkmElc9owySB8WtbPzFqSQOrJI9tm8I0EJv1cDzAgNKEaW8//9k=",width:300,height:300,src:"/static/8dc528197199bc64b3696fe45f49bd06/1a478/profile.jpg",srcSet:"/static/8dc528197199bc64b3696fe45f49bd06/1a478/profile.jpg 1x,\n/static/8dc528197199bc64b3696fe45f49bd06/c34c4/profile.jpg 1.5x,\n/static/8dc528197199bc64b3696fe45f49bd06/47b52/profile.jpg 2x,\n/static/8dc528197199bc64b3696fe45f49bd06/7d952/profile.jpg 3x"}}}}}},152:function(e,t,a){"use strict";var A=a(153),n=a(0),r=a.n(n),o=a(4),l=a.n(o),i=a(157),c=a.n(i);function s(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,l=e.title,i=A.data.site,s=t||i.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:s}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})}s.defaultProps={lang:"en",meta:[],keywords:[],description:""},s.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=s},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Brett Fouss",description:"Personal website for Brett Fouss. Includes bio, contact information, and links to portfolio pieces. Made with Gatsby.",author:"@brettfouss"}}}}},154:function(e,t,a){"use strict";var A=a(147),n=a(0),r=a.n(n),o=a(4),l=a.n(o),i=a(145),c=(a(149),a(150)),s=a(151),u=a.n(s),d=function(){return r.a.createElement(i.a,{query:"530693198",render:function(e){return r.a.createElement(u.a,{fixed:e.placeholderImage.childImageSharp.fixed,style:{float:"right"}})},data:c})},E=function(){return r.a.createElement("header",null,r.a.createElement("h1",{style:{marginBottom:0,overflow:"hidden"}},"Brett Fouss "),r.a.createElement(d,null))},m=function(){return r.a.createElement("footer",null,r.a.createElement("br",null),r.a.createElement("div",{className:"FooterLinks"},r.a.createElement("p",null,r.a.createElement("strong",null,"Contact, Social Media, Etc.")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://docs.google.com/document/d/1SeSeDmjY_F4WU7Ux8bD1PsEnmMvdce1q0UuvOZB1hMY/edit?usp=sharing",target:"_blank",rel:"noopener noreferrer"},"Resume")),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:bmfouss@gmail.com",target:"_blank",rel:"noopener noreferrer"},"Email")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.github.com/brettfouss/",target:"_blank",rel:"noopener noreferrer"},"Github")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/brett-fouss-697635a9",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.instagram.com/brettfouss/",target:"_blank",rel:"noopener noreferrer"},"Instagram"))),r.a.createElement("div",{className:"FooterLinks"},r.a.createElement("p",null,r.a.createElement("strong",null,"Made with ",r.a.createElement("a",{href:"https://www.gatsbyjs.org/",target:"_blank",rel:"noopener noreferrer"},"Gatsby"))," © ",(new Date).getFullYear()," Brett Fouss")))},p=(a(156),function(e){var t=e.children;return r.a.createElement(i.a,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement("main",null,t),r.a.createElement(m,null)))},data:A})});p.propTypes={children:l.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-404-js-db8a351728bb3455bc04.js.map