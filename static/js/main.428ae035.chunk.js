(this["webpackJsonpmovie-web"]=this["webpackJsonpmovie-web"]||[]).push([[0],{143:function(e,t,c){"use strict";c.r(t);c(51),c(52),c(74),c(75);var a=c(1),s=c.n(a),n=c(46),r=c.n(n),i=(c(80),c(81),c(6)),l=c(2),o=c.n(l),j=c(4),d=c(3),b=c(9),u=c.n(b),m="155ab208ecb73edcacb25bfa60e78b78",p="https://api.themoviedb.org/3",O="".concat(p,"/movie/now_playing"),h="".concat(p,"/movie/top_rated"),x="".concat(p,"/discover/movie"),v="".concat(p,"/trending/all/day"),f="".concat(p,"/trending/all/week"),N="".concat(p,"/discover/tv"),g="".concat(p,"/genre/movie/list"),w="".concat(p,"/movie/popular"),y=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get(O,{params:{api_key:m,laguage:"en_US",page:1}});case 3:return t=e.sent,c=t.data,a=c.results.map((function(e){return{id:e.id,backPoster:e.backdrop_path,popularity:e.popularity,title:e.title,poster:e.poster_path,overview:e.overview,rating:e.vote_average,date:e.release_date,movie_type:"movie"}})),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get(g,{params:{api_key:m,laguage:"en_us",page:1}});case 3:return t=e.sent,c=t.data,a=c.genres.map((function(e){return{id:e.id,name:e.name}})),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(o.a.mark((function e(t,c){var a,s,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get(x,{params:{api_key:m,laguage:"en_us",page:c,with_genres:t}});case 3:return a=e.sent,s=a.data,n=s.results.map((function(e){return{id:e.id,backPoster:e.backdrop_path,popularity:e.popularity,title:e.title,poster:e.poster_path,overview:e.overview,rating:e.vote_average,date:e.release_date,movie_type:"movie"}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,c){return e.apply(this,arguments)}}(),S=function(){var e=Object(j.a)(o.a.mark((function e(t){var c,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get(h,{params:{api_key:m,page:t}});case 3:return c=e.sent,a=c.data,s=a.results.map((function(e){return{id:e.id,backPoster:e.backdrop_path,popularity:e.popularity,title:e.title,poster:e.poster_path,overview:e.overview,rating:e.vote_average,date:e.release_date,movie_type:"movie"}})),e.abrupt("return",s);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(j.a)(o.a.mark((function e(t,c){var a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("".concat(p,"/").concat(c,"/").concat(t),{params:{api_key:m}});case 3:return a=e.sent,s=a.data,e.abrupt("return",s);case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,c){return e.apply(this,arguments)}}(),E=function(){var e=Object(j.a)(o.a.mark((function e(t,c){var a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("".concat(p,"/").concat(c,"/").concat(t,"/videos"),{params:{api_key:m}});case 3:return a=e.sent,s=a.data,e.abrupt("return",s.results[0]);case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,c){return e.apply(this,arguments)}}(),C=function(){var e=Object(j.a)(o.a.mark((function e(t,c){var a,s,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("".concat(p,"/").concat(c,"/").concat(t,"/credits"),{params:{api_key:m}});case 3:return a=e.sent,s=a.data,n=s.cast.map((function(e){return{id:e.id,name:e.name,profileImg:e.profile_path,character:e.character}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,c){return e.apply(this,arguments)}}(),P=function(){var e=Object(j.a)(o.a.mark((function e(t,c){var a,s,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("".concat(p,"/").concat(c,"/").concat(t,"/similar"),{params:{api_key:m}});case 3:return a=e.sent,s=a.data,n=s.results.map((function(e){return{id:e.id,popularity:e.popularity,title:e.title||e.name,poster:e.poster_path,overview:e.overview,rating:e.vote_average,date:e.release_date||e.first_air_date,movie_type:"".concat(c)}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,c){return e.apply(this,arguments)}}(),I=function(){var e=Object(j.a)(o.a.mark((function e(t){var c,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get(v,{params:{api_key:m,page:t}});case 3:return c=e.sent,a=c.data,s=a.results.map((function(e){return{id:e.id,backPoster:e.backdrop_path,popularity:e.popularity,title:e.title,poster:e.poster_path,overview:e.overview,rating:e.vote_average,date:e.release_date,movie_type:e.media_type}})),e.abrupt("return",s);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(j.a)(o.a.mark((function e(t){var c,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get(f,{params:{api_key:m,page:t}});case 3:return c=e.sent,a=c.data,s=a.results.map((function(e){return{id:e.id,backPoster:e.backdrop_path,popularity:e.popularity,title:e.title,poster:e.poster_path,overview:e.overview,rating:e.vote_average,date:e.release_date,movie_type:e.media_type}})),e.abrupt("return",s);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(j.a)(o.a.mark((function e(t){var c,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get(N,{params:{api_key:m,page:t}});case 3:return c=e.sent,a=c.data,s=a.results.map((function(e){return{id:e.id,backPoster:e.backdrop_path,popularity:e.popularity,title:e.name,poster:e.poster_path,overview:e.overview,rating:e.vote_average,date:e.first_air_date,movie_type:"tv"}})),e.abrupt("return",s);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(j.a)(o.a.mark((function e(t){var c,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get(w,{params:{api_key:m,page:t}});case 3:return c=e.sent,a=c.data,s=a.results.map((function(e){return{id:e.id,backPoster:e.backdrop_path,popularity:e.popularity,title:e.title,poster:e.poster_path,overview:e.overview,rating:e.vote_average,date:e.release_date,movie_type:"movie"}})),e.abrupt("return",s);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),L=c(17),A=c(5),H=c(24),V=c.n(H),D="https://image.tmdb.org/t/p/original/",q="https://www.movienewz.com/img/films/poster-holder.jpg",B=c(0),W=function(e){var t=e.movies.map((function(e,t){return Object(B.jsx)("div",{className:"card-wrapper",children:Object(B.jsx)(A.b,{to:{pathname:"/movie/".concat(e.id),search:"?sort=".concat(e.movie_type)},children:Object(B.jsxs)("div",{className:"card-item",children:[Object(B.jsx)("img",{className:"card-item-img",src:e.poster?"".concat(D).concat(e.poster):"https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",alt:e.title}),Object(B.jsxs)("div",{className:"card-item-content",children:[Object(B.jsx)("div",{className:"card-item-title",children:e.title}),Object(B.jsxs)("div",{className:"card-item-infos",children:[Object(B.jsxs)("div",{className:"item-info",children:[Object(B.jsx)("i",{className:"fa fa-calendar-o"}),Object(B.jsx)("span",{children:e.date})]}),Object(B.jsxs)("div",{className:"item-info",children:[Object(B.jsx)("i",{className:"fa fa-star"}),Object(B.jsx)("span",{children:e.rating})]})]})]})]})})},t)}));return Object(B.jsx)("div",{className:"movie-carousel",children:Object(B.jsx)("div",{className:"row",children:Object(B.jsx)("div",{className:"col",children:Object(B.jsx)(V.a,Object(L.a)(Object(L.a)({},{infinite:!0,slidesToShow:5,slidesToScroll:1,initialSlide:0,autoplay:!0,speed:1e3,autoplaySpeed:2e3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),{},{children:t}))})})})},Q=c(25),z=c.n(Q),G=function(e){var t=e.item;return Object(B.jsx)("div",{className:"card-wrapper-movieList",children:Object(B.jsx)(A.b,{to:{pathname:"/movie/".concat(t.id),search:"?sort=".concat(t.movie_type)},children:Object(B.jsxs)("div",{className:"card-movieList",children:[Object(B.jsx)("div",{className:"card-movieList-poster",children:Object(B.jsx)("img",{className:"card-movieList__img",src:t.poster?"".concat(D).concat(t.poster):q,alt:t.title})}),Object(B.jsxs)("div",{className:"card-movieList__content",children:[Object(B.jsx)("h2",{children:t.title||t.name}),Object(B.jsxs)("div",{className:"card-movieList-date",children:[Object(B.jsx)("i",{className:"fa fa-calendar-o"}),Object(B.jsx)("span",{children:t.date||t.first_air_date})]}),Object(B.jsxs)("div",{className:"card-movieList-rating",children:[Object(B.jsx)(z.a,{rating:t.rating,starDimension:"15px",starSpacing:"2px",starRatedColor:"#f4c10f",numberOfStars:10}),Object(B.jsxs)("span",{children:["(",t.rating,")"]})]}),Object(B.jsx)("div",{className:"card-movieList-infos",children:Object(B.jsx)("p",{children:t.overview})})]})]})})})},U=function(e){var t=e.trending.slice(0,8).map((function(e,t){return Object(B.jsx)("div",{className:"col-lg-3 col-sm-4 col-6",children:Object(B.jsx)(G,{item:e})},t)}));return Object(B.jsxs)("div",{className:"movie-trending",children:[Object(B.jsxs)("div",{className:"row mt-5",children:[Object(B.jsx)("div",{className:"col-6 col-lg-6 col-md-6 col-sm-6 movie__title",children:Object(B.jsx)("p",{className:"font-weight-bold",children:"TRENDING MOVIES"})}),Object(B.jsx)("div",{className:"col-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end align-items-center",children:Object(B.jsx)(A.b,{to:"/allmovies",children:Object(B.jsx)("i",{className:"fa fa-chevron-circle-right"})})})]}),Object(B.jsx)("div",{className:"row mt-3",children:t})]})},J=function(e){var t=e.topRate.slice(0,8).map((function(e,t){return Object(B.jsx)("div",{className:"col-lg-3 col-sm-4 col-6",children:Object(B.jsx)(G,{item:e})},t)}));return Object(B.jsxs)("div",{className:"topRate_movie",children:[Object(B.jsxs)("div",{className:"row mt-5",children:[Object(B.jsx)("div",{className:"col-6 col-lg-6 col-md-6 col-sm-6 movie__title",children:Object(B.jsx)("p",{className:"font-weight-bold",children:"TOP RATED MOVIE"})}),Object(B.jsx)("div",{className:"col-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end align-items-center",children:Object(B.jsx)(A.b,{to:"/alltoprates",children:Object(B.jsx)("i",{className:"fa fa-chevron-circle-right"})})})]}),Object(B.jsx)("div",{className:"row mt-3",children:t})]})},Y=function(e){var t=e.tvseries.slice(0,8).map((function(e,t){return Object(B.jsx)("div",{className:"col-lg-3 col-sm-4 col-6",children:Object(B.jsx)(G,{item:e})},t)}));return Object(B.jsxs)("div",{className:"tvseries-list",children:[Object(B.jsxs)("div",{className:"row mt-5",children:[Object(B.jsx)("div",{className:"col-6 col-lg-6 col-md-6 col-sm-6 movie__title",children:Object(B.jsx)("p",{className:"font-weight-bold",children:"TV SERIES MOVIES"})}),Object(B.jsx)("div",{className:"col-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end align-items-center",children:Object(B.jsx)(A.b,{to:"/tvseries",children:Object(B.jsx)("i",{className:"fa fa-chevron-circle-right"})})})]}),Object(B.jsx)("div",{className:"row mt-3",children:t})]})},K=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1];Object(a.useEffect)((function(){(function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,_();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var n=c.map((function(e,t){return Object(B.jsx)("li",{className:"item-genres",children:Object(B.jsx)(A.c,{className:"",exact:!0,to:"/genre/".concat(e.id),children:e.name})},t)}));return Object(B.jsx)("div",{className:"drop-menu",children:Object(B.jsx)("ul",{className:"dropdown-menu-genres",children:n})})},X=function(){return Object(B.jsx)("header",{className:"movie-header",children:Object(B.jsx)("div",{className:"container",children:Object(B.jsx)("nav",{className:"navbar navbar-expand-lg",children:Object(B.jsxs)("div",{className:"container-fluid",children:[Object(B.jsx)(A.c,{className:"navbar-brand",to:"/",children:"QH Media"}),Object(B.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(B.jsx)("span",{className:"navbar-toggler-icon",children:Object(B.jsx)("i",{className:"fa fa-bars"})})}),Object(B.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(B.jsxs)("ul",{className:"navbar-nav ms-auto ",children:[Object(B.jsx)("li",{className:"nav-item ",children:Object(B.jsxs)(A.c,{exact:!0,className:"nav-link text-uppercase",to:"/",children:["Home\xa0",Object(B.jsx)("i",{className:"fa fa-home"})]})}),Object(B.jsx)("li",{className:"nav-item",children:Object(B.jsx)(A.c,{className:"nav-link text-uppercase",exact:!0,to:"/allmovies",children:"FULL MOVIES"})}),Object(B.jsxs)("li",{className:"nav-item",children:[Object(B.jsx)(A.c,{className:"nav-link text-uppercase",exact:!0,to:"/moviebygenre",children:"MOVIES BY GENRES"}),Object(B.jsx)(K,{})]}),Object(B.jsx)("li",{className:"nav-item",children:Object(B.jsx)(A.c,{className:"nav-link text-uppercase",exact:!0,to:"/alltoprates",children:"TOP MOVIES"})}),Object(B.jsx)("li",{className:"nav-item",children:Object(B.jsx)(A.c,{className:"nav-link text-uppercase",exact:!0,to:"/tvseries",children:"TV SERIES"})}),Object(B.jsx)("li",{className:"nav-item",children:Object(B.jsx)(A.c,{className:"nav-link text-uppercase",exact:!0,to:"/searchmovies",children:"SEARCH"})})]})})]})})})})},Z=function(){return Object(B.jsx)("footer",{className:"footer",children:Object(B.jsxs)("div",{className:"container",children:[Object(B.jsxs)("div",{className:"row",children:[Object(B.jsxs)("div",{className:"col-md-4 col-sm-6",children:[Object(B.jsx)("h3",{children:"ABOUT ME"}),Object(B.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi error earum perspiciatis praesentium sint ipsum provident blanditiis pariatur necessitatibus voluptas, cum, atque iste eligendi autem, culpa cupiditate placeat facilis repellat."})]}),Object(B.jsxs)("div",{className:"col-md-4 col-sm-6",children:[Object(B.jsx)("h3",{children:"Have a Questions"}),Object(B.jsxs)("ul",{className:"list-unstyled",children:[Object(B.jsx)("li",{children:Object(B.jsxs)("p",{children:[Object(B.jsxs)("strong",{children:[Object(B.jsx)("i",{className:"fa fa-map-marker"})," Address:"]})," ","District 12, Ho Chi Minh City, Viet Nam"]})}),Object(B.jsx)("li",{children:Object(B.jsxs)("p",{children:[Object(B.jsxs)("strong",{children:[Object(B.jsx)("i",{className:"fa fa-phone"})," Phone:"]})," ","+84 777 086 123"]})}),Object(B.jsx)("li",{children:Object(B.jsxs)("p",{children:[Object(B.jsxs)("strong",{children:[Object(B.jsx)("i",{className:"fa fa-envelope"})," Email:"]})," ","phamquochuy0509@gmail.com"]})})]})]}),Object(B.jsxs)("div",{className:"col-md-4 col-sm-6",children:[Object(B.jsx)("h3",{children:"Follow Me"}),Object(B.jsxs)("ul",{className:"footer-follow p-0",children:[Object(B.jsx)("li",{className:"footer-follow__item",children:Object(B.jsx)("a",{href:"/",children:Object(B.jsx)("i",{className:"fa fa-facebook-official"})})}),Object(B.jsx)("li",{className:"footer-follow__item",children:Object(B.jsx)("a",{href:"/",children:Object(B.jsx)("i",{className:"fa fa-instagram"})})}),Object(B.jsx)("li",{className:"footer-follow__item",children:Object(B.jsx)("a",{href:"/",children:Object(B.jsx)("i",{className:"fa fa-twitter"})})}),Object(B.jsx)("li",{className:"footer-follow__item",children:Object(B.jsx)("a",{href:"/",children:Object(B.jsx)("i",{className:"fa fa-telegram"})})})]}),Object(B.jsx)("h3",{children:"Subscribe"}),Object(B.jsx)("form",{className:"subscribe-form",children:Object(B.jsxs)("div",{className:"form-group d-flex",children:[Object(B.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter email address"}),Object(B.jsx)("button",{type:"submit",className:"form-control submit",children:Object(B.jsx)("i",{className:"fa fa-paper-plane-o"})})]})})]})]}),Object(B.jsxs)("div",{className:"bottom-footer mt-2",children:[Object(B.jsx)("p",{children:"CopyRight \xa9 2021 All rights reserved"}),Object(B.jsxs)("div",{className:"bottom-footer__paragraph",children:["This project is made and open sourced by",Object(B.jsx)("a",{href:"https://quochuy-13.github.io/pqh/#/",target:"_blank",rel:"noopener noreferrer",children:" PQH"}),", click",Object(B.jsx)("a",{href:"https://github.com/QuocHuy-13/movie",target:"_blank",rel:"noopener noreferrer",children:" Here "}),"to get the source code"]})]})]})})},$=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),r=Object(d.a)(n,2),i=r[0],l=r[1],b=Object(a.useState)([]),u=Object(d.a)(b,2),m=u[0],p=u[1],O=Object(a.useState)([]),h=Object(d.a)(O,2),x=h[0],v=h[1];return Object(a.useEffect)((function(){(function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,y();case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=p,e.next=8,M();case 8:return e.t3=e.sent,(0,e.t2)(e.t3),e.t4=l,e.next=13,S();case 13:return e.t5=e.sent,(0,e.t4)(e.t5),e.t6=v,e.next=18,R();case 18:e.t7=e.sent,(0,e.t6)(e.t7);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(X,{}),Object(B.jsx)("div",{className:"main-wrapper",children:Object(B.jsxs)("div",{className:"container",children:[Object(B.jsx)(W,{movies:c}),Object(B.jsx)(U,{trending:m}),Object(B.jsx)(Y,{tvseries:x}),Object(B.jsx)(J,{topRate:i})]})}),Object(B.jsx)(Z,{})]})},ee=c(50),te=function(){return Object(B.jsx)("div",{className:"row mt-3",children:Object(ee.a)(Array(12).keys()).map((function(e){return Object(B.jsx)("div",{className:"col-6 col-sm-4 col-md-6 col-lg-3",children:Object(B.jsx)("div",{style:{height:"400px",backgroundColor:"#ddd",marginBottom:"30px"}})},e)}))})},ce=function(){var e=Object(a.useState)(1),t=Object(d.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),r=Object(d.a)(n,2),i=r[0],l=r[1],b=Object(a.useState)(!0),u=Object(d.a)(b,2),m=u[0],p=u[1];Object(a.useEffect)((function(){window.scroll(0,0),p(!1),function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,I(c);case 3:e.t1=e.sent,(0,e.t0)(e.t1),p(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[c]);var O=i.map((function(e,t){return Object(B.jsx)("div",{className:"col-lg-3 col-sm-4 col-6",children:Object(B.jsx)(G,{item:e})},t)}));return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(X,{}),Object(B.jsx)("div",{className:"main-wrapper",children:Object(B.jsxs)("div",{className:"container",children:[m?Object(B.jsx)("div",{className:"row mt-3",children:O}):Object(B.jsx)(te,{}),Object(B.jsx)("nav",{children:Object(B.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(B.jsx)("li",{className:"page-item mx-2",children:Object(B.jsx)("button",{type:"button",className:"btn btn-outline-info",disabled:1===c,onClick:function(){return s(c+1)},children:"Prev"})}),Object(B.jsx)("li",{className:"page-item mx-2",children:Object(B.jsx)("button",{className:"btn btn-outline-info",disabled:50===c,onClick:function(){return s(c+1)},children:"Next"})})]})})]})}),Object(B.jsx)(Z,{})]})},ae=c(48),se=c.n(ae),ne=c(49),re=c.n(ne),ie=function(e){var t,c=e.match,s=e.location,n=c.params,r=re.a.parse(s.search).sort,i=[],l=Object(a.useState)([]),b=Object(d.a)(l,2),u=b[0],m=b[1],p=Object(a.useState)(!1),O=Object(d.a)(p,2),h=O[0],x=O[1],v=Object(a.useState)([]),f=Object(d.a)(v,2),N=f[0],g=f[1],w=Object(a.useState)([]),y=Object(d.a)(w,2),_=y[0],k=y[1],S=Object(a.useState)([]),I=Object(d.a)(S,2),M=I[0],R=I[1];Object(a.useEffect)((function(){window.scroll(0,0),function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,T(n.id,r);case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=g,e.next=8,E(n.id,r);case 8:return e.t3=e.sent,(0,e.t2)(e.t3),e.t4=k,e.next=13,C(n.id,r);case 13:return e.t5=e.sent,(0,e.t4)(e.t5),e.t6=R,e.next=18,P(n.id,r);case 18:e.t7=e.sent,(0,e.t6)(e.t7);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,n.id]),u&&(i=u.genres),i&&(t=i.map((function(e,t){return Object(B.jsx)("li",{className:"list-inline-item",children:Object(B.jsx)(A.b,{to:"/moviebygenre/".concat(e.id),className:"btn btn-outline-info",children:e.name})},t)})));var F=_.map((function(e,t){return Object(B.jsx)("div",{className:"card-wrapper",children:Object(B.jsxs)("div",{className:"card-item",children:[Object(B.jsx)("img",{className:"card-item-img",src:e.profileImg?"".concat(D).concat(e.profileImg):q,alt:e.name}),Object(B.jsxs)("div",{className:"card-item-content",children:[Object(B.jsx)("div",{className:"card-item-title text-center",children:e.name}),Object(B.jsx)("div",{className:"card-item-infos justify-content-center",children:Object(B.jsx)("div",{className:"item-info text-center",children:Object(B.jsx)("span",{children:e.character})})})]})]})},t)})),H=M.splice(0,8).map((function(e,t){return Object(B.jsx)("div",{className:"col-lg-3 col-sm-4 col-6",children:Object(B.jsx)(G,{item:e})},t)}));return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(X,{}),Object(B.jsx)("div",{className:"main-wrapper",children:Object(B.jsxs)("div",{className:"container",children:[!0===h?Object(B.jsx)("div",{className:"modal show fade",style:{display:"block"},children:Object(B.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(B.jsxs)("div",{className:"modal-content",children:[Object(B.jsxs)("div",{className:"modal-header",children:[Object(B.jsx)("h5",{className:"modal-title",children:u.title||u.name}),Object(B.jsx)("button",{type:"button",className:"btn-close",onClick:function(){return x(!1)}})]}),Object(B.jsx)("div",{className:"modal-body",children:Object(B.jsx)(se.a,{url:"".concat("https://www.youtube.com/watch?v=").concat(N.key),playing:!0,width:"100%"})})]})})}):"",Object(B.jsx)("div",{className:"movie-detail",style:{backgroundImage:"url(".concat(D).concat(u.backdrop_path,")")},children:Object(B.jsx)("div",{className:"movie-detail-body",children:Object(B.jsxs)("div",{className:"movie-detail-main",children:[Object(B.jsx)("div",{className:"movie-detail-posterWrapper",children:Object(B.jsx)("div",{className:"poster",children:Object(B.jsx)("img",{src:"".concat(D).concat(u.poster_path),alt:u.title})})}),Object(B.jsxs)("div",{className:"movie-detail-contentWrapper",children:[Object(B.jsxs)("div",{className:"content-title",children:[Object(B.jsx)("h2",{children:u.title||u.name}),Object(B.jsx)("span",{children:u.tagline})]}),Object(B.jsx)("div",{className:"content-movieGenres",children:Object(B.jsx)("ul",{className:"list-inline",children:t})}),Object(B.jsxs)("div",{className:"content-date",children:[Object(B.jsxs)("div",{className:"facts",children:[Object(B.jsx)("i",{className:"fa fa-calendar-o"}),Object(B.jsx)("span",{children:u.release_date||u.first_air_date})]}),Object(B.jsxs)("div",{className:"facts",children:[Object(B.jsx)("span",{children:"Run Time:"}),Object(B.jsxs)("span",{children:[u.runtime||u.episode_run_time," min"]})]}),u.revenue?Object(B.jsxs)("div",{className:"facts",children:[Object(B.jsx)("span",{children:"Revenue:"}),Object(B.jsx)("span",{children:u.revenue})]}):null,u.number_of_episodes?Object(B.jsxs)("div",{className:"facts",children:[Object(B.jsx)("span",{children:"Episodes:"}),Object(B.jsx)("span",{children:u.number_of_episodes})]}):null,Object(B.jsxs)("div",{className:"facts",children:[Object(B.jsx)("span",{children:"Homepage:"}),Object(B.jsx)("span",{children:Object(B.jsx)("a",{href:u.homepage,target:"_blank",rel:"noreferrer",children:u.homepage})})]})]}),Object(B.jsxs)("div",{className:"content-rating",children:[Object(B.jsx)(z.a,{rating:u.vote_average,starDimension:"15px",starSpacing:"2px",starRatedColor:"#f4c10f",numberOfStars:10}),Object(B.jsxs)("span",{children:["(",u.vote_average,")"]})]}),Object(B.jsxs)("div",{className:"content-desc",children:[Object(B.jsx)("h3",{children:"Overview"}),Object(B.jsx)("p",{children:u.overview})]}),Object(B.jsx)("div",{className:"content-button",children:Object(B.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){return x(!0)},children:[Object(B.jsx)("i",{className:"fa fa-play"}),"Watch Trailer"]})})]})]})})}),Object(B.jsxs)("div",{className:"row mt-3",children:[Object(B.jsx)("div",{className:"mt-3",children:Object(B.jsx)("p",{style:{color:"#5a606b",fontSize:"30px",fontWeight:"600"},children:"CASTS"})}),Object(B.jsx)(V.a,Object(L.a)(Object(L.a)({},{infinite:!0,slidesToShow:5,slidesToScroll:3,initialSlide:0,autoplay:!0,speed:2e3,autoplaySpeed:2e3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]}),{},{children:F}))]}),Object(B.jsxs)("div",{className:"row mt-3",children:[Object(B.jsx)("div",{className:"mt-3",children:Object(B.jsx)("p",{style:{color:"#5a606b",fontSize:"30px",fontWeight:"600"},children:"SIMILAR"})}),H]})]})}),Object(B.jsx)(Z,{})]})},le=function(){var e=Object(a.useState)(1),t=Object(d.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),r=Object(d.a)(n,2),i=r[0],l=r[1],b=Object(a.useState)(!0),u=Object(d.a)(b,2),m=u[0],p=u[1];Object(a.useEffect)((function(){window.scroll(0,0),p(!1),function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,S(c);case 3:e.t1=e.sent,(0,e.t0)(e.t1),p(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[c]);var O=i.map((function(e,t){return Object(B.jsx)("div",{className:"col-lg-3 col-sm-4 col-6",children:Object(B.jsx)(G,{item:e})},t)}));return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(X,{}),Object(B.jsx)("div",{className:"main-wrapper",children:Object(B.jsxs)("div",{className:"container",children:[m?Object(B.jsx)("div",{className:"row mt-3",children:O}):Object(B.jsx)(te,{}),Object(B.jsx)("nav",{children:Object(B.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(B.jsx)("li",{className:"page-item mx-2",children:Object(B.jsx)("button",{type:"button",className:"btn btn-outline-info",disabled:1===c,onClick:function(){return s(c-1)},children:"Prev"})}),Object(B.jsx)("li",{className:"page-item mx-2",children:Object(B.jsx)("button",{className:"btn btn-outline-info",disabled:50===c,onClick:function(){return s(c+1)},children:"Next"})})]})})]})}),Object(B.jsx)(Z,{})]})},oe=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),r=Object(d.a)(n,2),i=r[0],l=r[1],b=Object(a.useState)(1),m=Object(d.a)(b,2),p=m[0],O=m[1],h=Object(a.useState)(),x=Object(d.a)(h,2),v=x[0],f=x[1],N=function(){var e=Object(j.a)(o.a.mark((function e(){var t,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("https://api.themoviedb.org/3/search/movie?api_key=155ab208ecb73edcacb25bfa60e78b78&query=".concat(c,"&page=").concat(p));case 3:t=e.sent,a=t.data,s=a.results.map((function(e){return{id:e.id,popularity:e.popularity,title:e.title,poster:e.poster_path,overview:e.overview,rating:e.vote_average,date:e.release_date,movie_type:"movie"}})),l(s),f(a.total_pages),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){window.scroll(0,0),N()}),[p]);var g=i.map((function(e,t){return Object(B.jsx)("div",{className:"col-lg-3 col-sm-4 col-6",children:Object(B.jsx)(G,{item:e})},t)}));return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(X,{}),Object(B.jsx)("div",{className:"main-wrapper",children:Object(B.jsxs)("div",{className:"container",children:[Object(B.jsxs)("div",{className:"d-flex",children:[Object(B.jsx)("input",{className:"form-control me-2",type:"text",placeholder:"Search",name:"search",value:c,onChange:function(e){return s(e.target.value)}}),Object(B.jsx)("button",{className:"btn btn-outline-success",type:"submit",onClick:N,children:"Search"})]}),Object(B.jsx)("div",{className:"row mt-3",children:g}),v>1?Object(B.jsx)("div",{children:Object(B.jsx)("nav",{children:Object(B.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(B.jsx)("li",{className:"page-item mx-2",children:Object(B.jsx)("button",{type:"button",className:"btn btn-outline-info",disabled:1===p,onClick:function(){O(p-1),window.scroll(0,0)},children:"Prev"})}),Object(B.jsx)("li",{className:"page-item mx-2",children:Object(B.jsx)("button",{className:"btn btn-outline-info",disabled:p===v,onClick:function(){O(p+1),window.scroll(0,0)},children:"Next"})})]})})}):""]})})]})},je=function(e){var t=e.match.params.id,c=Object(a.useState)([]),s=Object(d.a)(c,2),n=s[0],r=s[1],i=Object(a.useState)(1),l=Object(d.a)(i,2),b=l[0],u=l[1],m=Object(a.useState)(!0),p=Object(d.a)(m,2),O=p[0],h=p[1];Object(a.useEffect)((function(){window.scroll(0,0),h(!1),function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,k(t,b);case 3:e.t1=e.sent,(0,e.t0)(e.t1),h(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t,b]);var x=n.map((function(e,t){return Object(B.jsx)("div",{className:"col-lg-3 col-sm-4 col-6",children:Object(B.jsx)(G,{item:e})},t)}));return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(X,{}),Object(B.jsx)("div",{className:"main-wrapper",children:Object(B.jsxs)("div",{className:"container",children:[O?Object(B.jsx)("div",{className:"row mt-3",children:x}):Object(B.jsx)(te,{}),Object(B.jsx)("nav",{children:Object(B.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(B.jsx)("li",{className:"page-item mx-2",children:Object(B.jsx)("button",{type:"button",className:"btn btn-outline-info",disabled:1===b,onClick:function(){return u(b-1)},children:"Prev"})}),Object(B.jsx)("li",{className:"page-item mx-2",children:Object(B.jsx)("button",{className:"btn btn-outline-info",disabled:50===b,onClick:function(){return u(b+1)},children:"Next"})})]})})]})}),Object(B.jsx)(Z,{})]})},de=function(){var e=Object(a.useState)(1),t=Object(d.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),r=Object(d.a)(n,2),i=r[0],l=r[1],b=Object(a.useState)(!0),u=Object(d.a)(b,2),m=u[0],p=u[1];Object(a.useEffect)((function(){window.scroll(0,0),p(!1),function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,R(c);case 3:e.t1=e.sent,(0,e.t0)(e.t1),p(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[c]);var O=i.map((function(e,t){return Object(B.jsx)("div",{className:"col-lg-3 col-sm-4 col-6",children:Object(B.jsx)(G,{item:e})},t)}));return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(X,{}),Object(B.jsx)("div",{className:"main-wrapper",children:Object(B.jsxs)("div",{className:"container",children:[m?Object(B.jsx)("div",{className:"row mt-3",children:O}):Object(B.jsx)(te,{}),Object(B.jsx)("nav",{children:Object(B.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(B.jsx)("li",{className:"page-item mx-2",children:Object(B.jsx)("button",{type:"button",className:"btn btn-outline-info",disabled:1===c,onClick:function(){return s(c-1)},children:"Prev"})}),Object(B.jsx)("li",{className:"page-item mx-2",children:Object(B.jsx)("button",{className:"btn btn-outline-info",disabled:5===c,onClick:function(){return s(c+1)},children:"Next"})})]})})]})}),Object(B.jsx)(Z,{})]})},be=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),r=Object(d.a)(n,2),i=r[0],l=r[1],b=Object(a.useState)(1),u=Object(d.a)(b,2),m=u[0],p=u[1],O=Object(a.useState)(!0),h=Object(d.a)(O,2),x=h[0],v=h[1];Object(a.useEffect)((function(){window.scroll(0,0),v(!1),function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,_();case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=l,e.next=8,F(m);case 8:e.t3=e.sent,(0,e.t2)(e.t3),v(!0);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[m]);var f=c.map((function(e,t){return Object(B.jsx)("li",{className:"list-inline-item",children:Object(B.jsx)(A.b,{type:"button",className:"btn btn-outline-info",to:"/genre/".concat(e.id),children:e.name})},t)})),N=i.map((function(e,t){return Object(B.jsx)("div",{className:"col-lg-3 col-sm-4 col-6",children:Object(B.jsx)(G,{item:e})},t)}));return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(X,{}),Object(B.jsx)("div",{className:"main-wrapper",children:Object(B.jsxs)("div",{className:"container",children:[Object(B.jsx)("div",{className:"row mt-3",children:Object(B.jsx)("div",{className:"col",children:Object(B.jsx)("ul",{className:"list-inline",children:f})})}),x?Object(B.jsx)("div",{className:"row mt-3",children:N}):Object(B.jsx)(te,{}),Object(B.jsx)("nav",{children:Object(B.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(B.jsx)("li",{className:"page-item mx-2",children:Object(B.jsx)("button",{type:"button",className:"btn btn-outline-info",disabled:1===m,onClick:function(){return p(m-1)},children:"Prev"})}),Object(B.jsx)("li",{className:"page-item mx-2",children:Object(B.jsx)("button",{className:"btn btn-outline-info",disabled:50===m,onClick:function(){return p(m+1)},children:"Next"})})]})})]})}),Object(B.jsx)(Z,{})]})};var ue=function(){return Object(B.jsxs)(i.c,{children:[Object(B.jsx)(i.a,{path:"/",component:$,exact:!0}),Object(B.jsx)(i.a,{path:"/allmovies",component:ce}),Object(B.jsx)(i.a,{path:"/alltoprates",component:le}),Object(B.jsx)(i.a,{path:"/moviebygenre",component:be}),Object(B.jsx)(i.a,{path:"/genre/:id",component:je}),Object(B.jsx)(i.a,{path:"/searchmovies",component:oe}),Object(B.jsx)(i.a,{path:"/movie/:id",component:ie}),Object(B.jsx)(i.a,{path:"/tvseries",component:de})]})},me=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,144)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(B.jsx)(s.a.StrictMode,{children:Object(B.jsx)(A.a,{children:Object(B.jsx)(ue,{})})}),document.getElementById("root")),me()},80:function(e,t,c){},81:function(e,t,c){}},[[143,1,2]]]);
//# sourceMappingURL=main.428ae035.chunk.js.map