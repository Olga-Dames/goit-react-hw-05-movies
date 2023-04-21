"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[304],{7047:function(n,t,e){e.d(t,{Z:function(){return g}});e(2791);var r,a,c,i,s,o=e(7689),u=e(3014),p=e(168),f=e(6444),l=e(1087),h=f.ZP.ul(r||(r=(0,p.Z)(["\n  list-style: none;\n  margin-top: 30px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 25px;\n"]))),v=f.ZP.li(a||(a=(0,p.Z)(["\n  width: 250px;\n  border-radius: 5px;\n  overflow: hidden;\n"]))),d=f.ZP.img(c||(c=(0,p.Z)(["\n  object-fit: c cover;\n  transition: transform 250ms linear;\n\n  &:hover {\n    transform: scale(1.04);\n  }\n"]))),x=f.ZP.p(i||(i=(0,p.Z)(["\n  text-align: center;\n  color: #212121;\n  font-size: 20px;\n  transition: color 250ms linear;\n\n  &:hover {\n    color: navy;\n    text-decoration: underline;\n  }\n"]))),m=(0,f.ZP)(l.OL)(s||(s=(0,p.Z)(["\n  text-decoration: none;\n"]))),Z=e(184),g=function(n){var t=n.movies,e=(0,o.TH)();return(0,Z.jsx)(h,{children:t.map((function(n){return(0,Z.jsx)(v,{children:(0,Z.jsxs)(m,{to:"/movies/".concat(n.id),state:{from:e},children:[null!==n.poster_path?(0,Z.jsx)(d,{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:n.title,width:250,height:350}):(0,Z.jsx)(d,{src:u,alt:n.title,width:"250px",height:"350px"}),(0,Z.jsx)(x,{children:n.name?n.name:n.title})]})},n.id)}))})}},304:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r,a=e(3433),c=e(5861),i=e(9439),s=e(7757),o=e.n(s),u=e(2791),p=e(5550),f=e(7047),l=e(168),h=e(6444).ZP.h1(r||(r=(0,l.Z)(["\n  margin: 0;\n  padding-top: 20px;\n  text-align: center;\n  font-size: 32px;\n  color: #050482;\n"]))),v=e(184),d=function(){var n=(0,u.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1];(0,u.useEffect)((function(){s()}),[]);var s=function(){var n=(0,c.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.Z.fetchTrendingMovies();case 3:t=n.sent,r((0,a.Z)(t)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return(0,v.jsxs)("main",{children:[(0,v.jsx)(h,{children:"Movies which are trending today"}),(0,v.jsx)(f.Z,{movies:e})]})}},5550:function(n,t,e){var r=e(5861),a=e(7757),c=e.n(a),i=e(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={api_key:"e2aff662c395c2714c9c8f21667cff02"};var s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/all/day");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?query=".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l={fetchTrendingMovies:s,fetchSearchedMovie:o,fetchMovieById:u,fetchCast:p,fetchReviews:f};t.Z=l},3014:function(n,t,e){n.exports=e.p+"static/media/no-poster-available.7555b15218a0f4733bf7.jpg"}}]);
//# sourceMappingURL=304.db9854e1.chunk.js.map