(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3Hq7":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("q1tI"),o=n.n(r),a=n("b0oO"),i=o.a.createElement,s={margin:20,padding:20,border:"1px solid #DDD"};function c(t){return i("div",{style:s},i(a.a,null),t.children)}},RNiq:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),o=n.n(r),a=n("q1tI"),i=n.n(a),s=n("3Hq7"),c=n("YFqc"),u=n.n(c),f=n("vcXL"),l=n.n(f),p=i.a.createElement,h=function(t){return p(s.a,null,p("h1",null,"Batman TV Shows"),p("ul",null,t.shows.map((function(t){return p("li",{key:t.id},p(u.a,{href:"/show/[id]",as:"/show/".concat(t.id)},p("a",null,t.name)))}))))};h.getInitialProps=function(){var t,e;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(l()("https://api.tvmaze.com/search/shows?q=batman"));case 2:return t=n.sent,n.next=5,o.a.awrap(t.json());case 5:return e=n.sent,console.log("Show data fetched. Count: ".concat(e.length)),n.abrupt("return",{shows:e.map((function(t){return t.show}))});case 8:case"end":return n.stop()}}),null,null,null,Promise)},e.default=h},YFqc:function(t,e,n){t.exports=n("cTJO")},b0oO:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("q1tI"),o=n.n(r),a=n("YFqc"),i=n.n(a),s=o.a.createElement,c={marginRight:15};function u(){return s("div",null,s(i.a,{href:"/"},s("a",{style:c},"Home")),s(i.a,{href:"/about"},s("a",{style:c},"About")))}},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("a1gu"),i=n("Nsbk"),s=n("7W2i");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var u=n("TqRt"),f=n("284h");e.__esModule=!0,e.default=void 0;var l,p=f(n("q1tI")),h=n("QmWs"),v=n("g/15"),d=u(n("nOHt"));function w(t){return t&&"object"===typeof t?(0,v.formatWithValidation)(t):t}var m=new Map,y=window.IntersectionObserver,g={};function b(){return l||(y?l=new y((function(t){t.forEach((function(t){if(m.has(t.target)){var e=m.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),m.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var _=function(t){s(f,t);var e,u=(e=f,function(){var t,n=i(e);if(c()){var r=i(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return a(this,t)});function f(t){var e;return r(this,f),(e=u.call(this,t)).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(t){var e=null,n=null,r=null;return function(o,a){if(r&&o===e&&a===n)return r;var i=t(o,a);return e=o,n=a,r=i,i}}((function(t,e){return{href:w(t),as:e?w(e):e}})),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=e.formatUrls(e.props.href,e.props.as),i=a.href,s=a.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(i)){var c=window.location.pathname;i=(0,h.resolve)(c,i),s=s?(0,h.resolve)(c,s):i,t.preventDefault();var u=e.props.scroll;null==u&&(u=s.indexOf("#")<0),d.default[e.props.replace?"replace":"push"](i,s,{shallow:e.props.shallow}).then((function(t){t&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==t.prefetch,e}return o(f,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,h.resolve)(t,n);return[o,r?(0,h.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&y&&t&&t.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=b();return n?(n.observe(t),m.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}m.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();d.default.prefetch(e[0],e[1],t).catch((function(t){0})),g[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,r=this.formatUrls(this.props.href,this.props.as),o=r.href,a=r.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var i=p.Children.only(e),s={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=a||o);var c=n("P5f7").rewriteUrlForNextExport;return s.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(s.href=c(s.href)),p.default.cloneElement(i,s)}}]),f}(p.Component);e.default=_},vcXL:function(t,e,n){"use strict";var r=self.fetch.bind(self);t.exports=r,t.exports.default=t.exports},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1]]]);