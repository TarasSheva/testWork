(this["webpackJsonptest-work"]=this["webpackJsonptest-work"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var a=t(0),c=t(1),i=t(10),n=t.n(i),r=(t(16),t(8)),l=t(9),o=t(3),j=t(4),d=t(2),h=t(6),b=t(5),u=(t(17),t(18),function(e){var s=e.src,t=e.liked,c=e.id,i=e.text,n="far fa-heart";return 0===e.url.length&&(n="fas fa-heart"),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"card_item-wrap",children:Object(a.jsx)("img",{src:s,alt:"",className:"card_item-img"})}),Object(a.jsxs)("div",{className:"card_item-info",children:[Object(a.jsxs)("div",{className:"card_item-indif",children:[Object(a.jsxs)("p",{children:["#",c]}),Object(a.jsx)("i",{className:n,onClick:t,children:" "})]}),Object(a.jsxs)("h5",{className:"card_item-text",children:["Author: ",i]})]})]})}),f=(t(19),function(e){Object(h.a)(t,e);var s=Object(b.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=s.call(this,e)).state={showAll:!0,showLiked:!1},a.showPost=a.showPost.bind(Object(d.a)(a)),a}return Object(j.a)(t,[{key:"showPost",value:function(){this.setState((function(e){return{showLiked:!e.showLiked,showAll:!e.showAll}}))}},{key:"render",value:function(){var e=this,s=this.state,t=s.showAll,c=s.showLiked,i=this.props.posts.map((function(s){return Object(a.jsx)("li",{className:"card_item",children:Object(a.jsx)(u,{liked:function(){return e.props.onToggleLike(s.id)},src:s.download_url,id:s.id,text:s.author,url:s.url})},s.id)})),n=this.props.postLikes.map((function(s){return Object(a.jsx)("li",{className:"card_item",children:Object(a.jsx)(u,{liked:function(){return e.props.onToggleLike(s.id)},src:s.download_url,id:s.id,text:s.author,url:s.url})},s.id)}));return Object(a.jsxs)("div",{className:"cards",children:[Object(a.jsx)("nav",{className:"navbar",children:Object(a.jsxs)("div",{className:"navbar_container",children:[Object(a.jsxs)("div",{className:"navbar_home",onClick:t?null:this.showPost,children:["Home (",this.props.all,")"]}),Object(a.jsxs)("div",{className:"navbar_likes",onClick:c?null:this.showPost,children:["Likes (",this.props.liked,")"]})]})}),Object(a.jsx)("div",{className:"cards_container",children:Object(a.jsx)("div",{className:"cards_wrapper",children:Object(a.jsx)("ul",{className:"cards_items",children:this.state.showAll?i:n})})})]})}}]),t}(c.Component)),O=(t(20),function(){return Object(a.jsxs)("div",{className:"footer-container",children:[Object(a.jsxs)("section",{className:"footer-subscription",children:[Object(a.jsx)("p",{className:"footer-subscription-heading",children:"Join the newsletter to our best images"}),Object(a.jsx)("p",{className:"footer-subscription-text",children:"You can unsubscribe at any time."}),Object(a.jsx)("div",{className:"input-areas",children:Object(a.jsx)("form",{children:Object(a.jsx)("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"})})})]}),Object(a.jsxs)("div",{className:"footer-links",children:[Object(a.jsxs)("div",{className:"footer-link-wrapper",children:[Object(a.jsxs)("div",{className:"footer-link-items",children:[Object(a.jsx)("h2",{children:"About Us"}),Object(a.jsx)("a",{href:"/",children:"How it works"}),Object(a.jsx)("a",{href:"/",children:"Testimonials"}),Object(a.jsx)("a",{href:"/",children:"Careers"}),Object(a.jsx)("a",{href:"/",children:"Investors"}),Object(a.jsx)("a",{href:"/",children:"Terms of Service"})]}),Object(a.jsxs)("div",{className:"footer-link-items",children:[Object(a.jsx)("h2",{children:"Contact Us"}),Object(a.jsx)("a",{href:"/",children:"Contact"}),Object(a.jsx)("a",{href:"/",children:"Support"}),Object(a.jsx)("a",{href:"/",children:"Destinations"}),Object(a.jsx)("a",{href:"/",children:"Sponsorships"})]})]}),Object(a.jsxs)("div",{className:"footer-link-wrapper",children:[Object(a.jsxs)("div",{className:"footer-link-items",children:[Object(a.jsx)("h2",{children:"Videos"}),Object(a.jsx)("a",{href:"/",children:"Submit Video"}),Object(a.jsx)("a",{href:"/",children:"Ambassadors"}),Object(a.jsx)("a",{href:"/",children:"Agency"}),Object(a.jsx)("a",{href:"/",children:"Influencer"})]}),Object(a.jsxs)("div",{className:"footer-link-items",children:[Object(a.jsx)("h2",{children:"Social Media"}),Object(a.jsx)("a",{href:"/",children:"Instagram"}),Object(a.jsx)("a",{href:"/",children:"Facebook"}),Object(a.jsx)("a",{href:"/",children:"Youtube"}),Object(a.jsx)("a",{href:"/",children:"Twitter"})]})]})]}),Object(a.jsx)("section",{className:"social-media",children:Object(a.jsxs)("div",{className:"social-media-wrap",children:[Object(a.jsx)("div",{className:"footer-logo",children:Object(a.jsxs)("a",{href:"/",className:"social-logo",children:["STarG",Object(a.jsx)("i",{className:"fab fa-typo3"})]})}),Object(a.jsx)("small",{className:"website-rights",children:"STarG \xa9 2020"}),Object(a.jsxs)("div",{className:"social-icons",children:[Object(a.jsx)("a",{className:"social-icon-link facebook",href:"/",target:"_blank","aria-label":"Facebook",children:Object(a.jsx)("i",{className:"fab fa-facebook-f"})}),Object(a.jsx)("a",{className:"social-icon-link instagram",href:"/",target:"_blank","aria-label":"Instagram",children:Object(a.jsx)("i",{className:"fab fa-instagram"})}),Object(a.jsx)("a",{className:"social-icon-link youtube",href:"/",target:"_blank","aria-label":"Youtube",children:Object(a.jsx)("i",{className:"fab fa-youtube"})}),Object(a.jsx)("a",{className:"social-icon-link twitter",href:"/",target:"_blank","aria-label":"Twitter",children:Object(a.jsx)("i",{className:"fab fa-twitter"})}),Object(a.jsx)("a",{className:"social-icon-link twitter",href:"/",target:"_blank","aria-label":"LinkedIn",children:Object(a.jsx)("i",{className:"fab fa-linkedin"})})]})]})})]})}),m=function(e){Object(h.a)(t,e);var s=Object(b.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=s.call(this,e)).state={data:[]},a.onToggleLike=a.onToggleLike.bind(Object(d.a)(a)),a}return Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://picsum.photos/v2/list").then((function(e){return e.json()})).then((function(s){e.setState((function(e){e.data;return{data:s}}))}),(function(e){console.log(e)}))}},{key:"onToggleLike",value:function(e){this.setState((function(s){var t=s.data,a=t.findIndex((function(s){return s.id===e})),c=t[a],i=Object(l.a)(Object(l.a)({},c),{},{url:""});return{data:[].concat(Object(r.a)(t.slice(0,a)),[i],Object(r.a)(t.slice(a+1)))}}))}},{key:"render",value:function(){var e=this.state.data,s=e.filter((function(e){return 0===e.url.length})).length,t=e.length,c=e.filter((function(e){return 0===e.url.length}));return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(f,{liked:s,all:t,onToggleLike:this.onToggleLike,posts:e,postLikes:c}),Object(a.jsx)(O,{})]})}}]),t}(c.Component);n.a.render(Object(a.jsx)(m,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.0a7c1014.chunk.js.map