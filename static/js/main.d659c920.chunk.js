(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{40:function(n,e,t){"use strict";t.r(e);var i,s,a=t(1),r=t(22),l=t.n(r),c=t(9),o=t(13),p=t(5),d=t(10),j=t(11),h=t(28),x=t(27),m=t(26),b="https://beomoffice.github.io/app/testimg/",g=[{name:"\uc640\uc778\ud3ec\ucc28",url:"http://winepocha.com/",img:b+"wine.jpg"},{name:"\ub354\ub9c8\ucf5c\ub77c",url:"https://dermacollakorea.kr/",img:b+"dermacolla.jpg"},{name:"\ub9cc\uc218\uae08\uc18d",url:"https://mansumetal.com/",img:b+"mansu.jpg"},{name:"\uc2e0\ube44\uc6f9 \uc5b4\ub9b0\uc774\uc9d1",url:"http://swchild.15440835.com/layout3/res/home.php?go=main",img:b+"sinbichild.jpg"},{name:"\uc704\ud50c \ud5ec\uc2a4\ucf00\uc5b4",url:"https://play.google.com/store/apps/details?id=com.aaihc.wiple&hl=ko&gl=US",img:b+"wiple.webp"},{name:"\uacbd\uae30\ub300\ud559\uad50 \ub300\ud559\ud601\uc2e0\uc9c0\uc6d0\uc0ac\uc5c5\ub2e8",url:"https://inno.kyonggi.ac.kr/",img:b+"kyonggi.jpg"},{name:"\uae08\uc624\uc804\uc790",url:"http://kumohec.co.kr/",img:b+"kumoh.jpg"},{name:"\ud604\ub300\uc194\ub77c",url:"http://hyundaisolar.co.kr/",img:b+"hyundaisolar.jpg"},{name:"\uc778\ucc9c\ubc31\ubcd1\uc6d0",url:"http://ib.ibhhome.com/",img:b+"baek.jpg"},{name:"\uc11c\uc815\ub300\ud559\uad50 \uc131\uc778\ud559\uc2b5\uc9c0\uc6d0\uc13c\ud130",url:"https://lifeseojeong.ac.kr/",img:b+"seojung.jpg"},{name:"\uc81c\uc6d0\uc9c1\uc5c5\uc804\ubb38\ud559\uad50",url:"http://jejujewon.com/",img:b+"jejujewon.jpg"},{name:"\ub137\uc9c4\ud14c\ud06c",url:"http://netgenetech.com/",img:b+"netgenetech.jpg"},{name:"\uc77c\uc591GT",url:"http://ilyanggt.com/",img:b+"ilyanggt.jpg"},{name:"\uc8fd\uc804365\ud790\ub9c1\uc758\uc6d0",url:"http://jj365hmc.co.kr/",img:b+"jukjeon.jpg"},{name:"\ub2e8\uc544\ud558\uc6b0\uc2a4",url:"http://r512.realserver1.com/",img:b+"dana.jpg"},{name:"\ub300\uba85\uc544\uc784\ub808\ub514",url:"http://r528.realserver1.com/",img:b+"daemyung.jpg"},{name:"\uc131\uc2e0\uc5ec\uc790\ub300\ud559\uad50(Mobile)",url:null,img:b+"sungshin.jpg"},{name:"\uc131\uc2e0\uc5ec\uc790\ub300\ud559\uad50",url:null,img:b+"sungshin2.jpg"},{name:"\ud55c\uad6d\ud574\uc591\uc18c\ub144\ub2e8\uc804\ubd81\uc5f0\ub9f9",url:"http://jeonbuk.s-server.kr/",img:b+"sek.jpg"},{name:"\uc544\ub514\ub2e4\uc2a4",url:null,img:b+"adidas.jpg"},{name:"\ud574\ube44\uce58\ud638\ud154",url:null,img:b+"haevichi.jpg"}],u=t(2),f=d.b.div(i||(i=Object(c.a)(["\n    background : #212121;\n    border : 1px solid gray;\n    border-radius : 4px;\n    padding : 0 8px;\n    position : fixed;\n    z-index : 99999;\n    top : 6px;\n    left : 50%;\n    transform : translateX(-50%);\n    width : 100%;\n    max-width : 880px;\n\n    input{ \n        width : 100%;\n        background : inherit;\n        border : none;\n        outline : none;\n        color : #fff;\n        height : 40px;\n        padding : 0 8px;\n        font-size : 18px;\n    }\n    button{\n        background : inherit;\n        border : none;\n        outline : none;\n        color : gray;\n        font-size : 18px;\n    }\n    button:hover{\n        color : white;\n    }\n\n    .allViews{\n        width : 100%;\n        display : flex;\n        flex-wrap : wrap;\n        padding : 20px 0;\n    }\n    .allViews .swiper-slide{\n        margin : 0;\n        padding : 0 12px 12px;\n        width : 25%;\n    }\n    .allViews .swiper-slide .thumbnail{\n        max-height : 240px;\n        overflow : hidden;\n        border-radius : 4px;\n        margin-bottom : 8px;\n    }\n    .allViews .swiper-slide .thumbnail img{\n        height : auto;\n        width : 100%;\n    }\n    .allViews .swiper-slide h2 { font-size : 16px;}\n    .allViews .swiper-slide a{\n        color : gray;\n        font-size : 14px;\n    }\n\n    @media screen and (max-width: 1100px) {\n        left : 112px;\n        transform : translateX(0);\n        width : calc(100% - 200px);\n    }\n    @media screen and (max-width: 768px) {\n        top : 12px;\n        left : 50%;\n        width : calc(100% - 4%);\n        transform : translateX(-50%);\n\n        input {\n            font-size :16px;\n        }\n\n        .allViews .swiper-slide{\n            width : 33%;\n        }\n        \n    }\n\n    \n"]))),O=[];function w(n){var e=n.onSearch,t=Object(a.useState)(""),i=Object(j.a)(t,2),s=i[0],r=i[1],l=Object(a.useRef)(null),c=function(n){O=n?g.filter((function(e){return e.name.includes(n)})):[]};return Object(u.jsxs)(f,{onSubmit:function(n){n.preventDefault(),c(s)},children:[Object(u.jsxs)("div",{style:{display:"flex",alignItems:"center",borderBottom:"1px solid gray"},children:[Object(u.jsx)("button",{onClick:e,children:Object(u.jsx)(m.a,{})}),Object(u.jsx)("input",{autoFocus:!0,ref:l,onChange:function(){r(l.current.value),c(l.current.value)}}),Object(u.jsx)("button",{onClick:function(){r(l.current.value),c(l.current.value)},children:Object(u.jsx)(x.a,{})})]}),Object(u.jsx)("ul",{className:"allViews",children:O.length>0?O.map((function(n){return Object(u.jsxs)("li",{className:"swiper-slide",children:[Object(u.jsx)("div",{className:"thumbnail",children:null!=n.img?Object(u.jsx)("img",{src:n.img,alt:n.name}):Object(u.jsx)("div",{className:"no-img",children:"\uc774\ubbf8\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})}),Object(u.jsx)("h2",{children:n.name}),null!=n.url?Object(u.jsx)("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",children:"\ubc14\ub85c\uac00\uae30"}):null]},n.name)})):Object(u.jsx)("p",{style:{color:"gray",paddingLeft:24},children:"\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})})]})}var v=d.b.header(s||(s=Object(c.a)(["\n    padding : 16px;\n    position : sticky;\n    top : 0;\n    background : #030303;\n    z-index : 99999999;\n\n    nav { \n        display : flex;\n        justify-content : space-between;\n        align-items : center;\n    }\n    nav .logo{\n        font-size : 20px;\n        letter-spacing : 8px;\n    }\n    .main-nav{\n        display : flex;\n        justify-content : space-between;\n        list-style : none;\n    }\n    .main-nav li{\n        padding : 0 8px;\n        color : gray;\n        cursor : pointer;\n        font-size : 18px;\n    }\n        .main-nav li:hover{\n            color : white;\n        }\n        .main-nav .active{\n            color : white;\n        }\n    .profile{\n        height : 30px;\n        width : 30px;\n    }\n\n    @media screen and (max-width: 768px) {\n        .account{\n            display : none;\n        }\n    }\n    @media screen and (max-width: 420px) {\n        .account{\n            display : none;\n        }\n        nav .logo{\n            font-size : 16px;\n            letter-spacing : 6px;\n        }\n        .main-nav li{\n            font-size : 16px;\n            padding : 0 6px;\n        }\n    }\n"])));function y(){var n=Object(a.useState)(!1),e=Object(j.a)(n,2),t=e[0],i=e[1],s=function(){i(!t)};return Object(u.jsx)(v,{children:Object(u.jsxs)("nav",{className:"site-nav",children:[Object(u.jsx)(o.b,{className:"logo",to:"/app",children:"SangBeom"}),Object(u.jsxs)("ul",{className:"main-nav",children:[Object(u.jsx)("li",{children:Object(u.jsx)(o.c,{exact:"true",to:"/app",children:"\ud648"})}),Object(u.jsx)("li",{children:Object(u.jsx)(o.c,{exact:"true",to:"/app/about",children:"\ub458\ub7ec\ubcf4\uae30"})}),Object(u.jsx)("li",{onClick:s,children:"\uac80\uc0c9"})]}),Object(u.jsx)("div",{className:"account",children:Object(u.jsx)("div",{className:"profile",children:Object(u.jsx)(h.a,{style:{height:"100%",width:"100%",color:"gray"}})})}),t&&Object(u.jsx)(w,{onSearch:s})]})})}var k,z=t(45),N=t(43),V=t(44),S=t(42),C=(t(38),t(39),t(19)),B=d.b.div(k||(k=Object(c.a)(["\n  padding : 30px 240px;\n  color : gray;\n  \n  .swiper-slide{\n    display : flex;\n    flex-direction : column;\n    width : 285px;\n    margin-right : 32px;\n  }\n  .swiper-slide:hover .thumbnail::after{\n    height : 100%;\n    background : rgba(0,0,0,0.4);\n  }\n  .swiper-slide .thumbnail{\n    width : 100%;\n    height : 360px;\n    position : relative;\n    overflow : hidden;\n    border-radius : 4px;\n    margin-bottom : 8px;\n  }\n  .swiper-slide .thumbnail::after{\n    display:block;\n    content : '';\n    width : 100%;\n    height : 0;\n    background : rgba(0,0,0,0);\n    position : absolute;\n    top : 0;\n    left : 0;\n    transition: background ease-in-out .2s;\n  }\n  .swiper-slide .thumbnail img{\n    border-radius : 4px;\n    height : 100%;\n    margin : 0 auto;\n    position : absolute;\n    top : 0;\n    left : 50%;\n    transform : translateX(-50%);\n  }\n  .swiper-slide .thumbnail .no-img{\n    width : 100%;\n    height : 100%;\n    background : #fff;\n    display : flex;\n    align-items : center;\n    justify-content : center;\n    color : #000;\n    font-size : 16px;\n  }\n  .swiper-slide h2{\n    font-size : 18px;\n    color : white;\n  }\n  .swiper-slide a{\n    font-size : 16px;\n  }\n\n  .btn{\n    position : absolute;\n    z-index : 9999;\n    transform : translateY(-50%);\n    background : white;\n    width : 50px;\n    height : 50px;\n    display : flex;\n    align-items : center;\n    justify-content : center;\n    top : 50%;\n    border-radius : 50%;\n    box-shadow : 2px 2px 2px 2px gray;\n    cursor : pointer;\n    font-size : 26px;\n    color : skyblue;\n    margin-top : -25px;\n  }\n  .prev{\n    left : 16px;\n  }\n  .next{\n    right : 16px;\n  }\n\n  .allViews{\n    width : 100%;\n    display : flex;\n    flex-wrap : wrap;\n  }\n  .allViews .swiper-slide{\n    margin : 0;\n    padding : 0 12px 24px;\n    width : 25%;\n  }\n  .allViews .swiper-slide .thumbnail{\n    height : 240px;\n  }\n  .allViews .swiper-slide .thumbnail img{\n    height : auto;\n    width : 100%;\n  }\n\n  \n  @media screen and (max-width: 1240px) { \n    padding : 40px 3%;\n  }\n  @media screen and (max-width: 768px) {\n    .swiper-slide {\n      width : 240px;\n      margin-right : 16px;\n    }\n    .swiper-slide .thumbnail {\n      height : 290px\n    }\n    .swiper-slide h2{\n      font-size : 16px;\n    }\n    .swiper-slide a{\n      font-size : 14px;\n    }\n\n    .allViews .swiper-slide{\n      padding: 0 12px 24px;\n      width: 50%;\n    }\n  }\n  @media screen and (max-width: 420px) {\n    .allViews .swiper-slide{\n      width : 100%;\n    }\n  }\n"])));function U(){V.a.use([S.a]);var n=Object(a.useRef)(null),e=Object(a.useRef)(null);return Object(u.jsxs)(B,{children:[Object(u.jsxs)("div",{className:"section",children:[Object(u.jsx)("h1",{children:"\ubaa8\uc544\ubcf4\uae30"}),Object(u.jsxs)(z.a,{onInit:function(t){t.params.navigation.prevEl=n.current,t.params.navigation.nextEl=e.current,t.navigation.init(),t.navigation.update()},slidesPerView:"auto",children:[g.map((function(n){return Object(u.jsxs)(N.a,{children:[Object(u.jsx)("div",{className:"thumbnail",children:null!=n.img?Object(u.jsx)("img",{src:n.img,alt:n.name}):Object(u.jsx)("div",{className:"no-img",children:"\uc774\ubbf8\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})}),Object(u.jsx)("h2",{children:n.name}),null!=n.url?Object(u.jsx)("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",children:"\ubc14\ub85c\uac00\uae30"}):null]},n.name)})),Object(u.jsx)("div",{ref:n,className:"prev btn",children:Object(u.jsx)(C.a,{})}),Object(u.jsx)("div",{ref:e,className:"next btn",children:Object(u.jsx)(C.b,{})})]})]}),Object(u.jsxs)("div",{className:"section",children:[Object(u.jsx)("h1",{children:"\ud3bc\uccd0\ubcf4\uae30"}),Object(u.jsx)("ul",{className:"allViews",children:g.map((function(n){return Object(u.jsxs)("li",{className:"swiper-slide",children:[Object(u.jsx)("div",{className:"thumbnail",children:null!=n.img?Object(u.jsx)("img",{src:n.img,alt:n.name}):Object(u.jsx)("div",{className:"no-img",children:"\uc774\ubbf8\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})}),Object(u.jsx)("h2",{children:n.name}),null!=n.url?Object(u.jsx)("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",children:"\ubc14\ub85c\uac00\uae30"}):null]},n.name)}))})]})]})}var X,I,D=t(20),E=d.b.div(X||(X=Object(c.a)(["\n  padding : 60px 240px;\n  text-align : center;\n  color : gray;\n\n  .intro {\n    display : flex;\n    justify-content : space-between;\n    align-items : end;\n  }\n  .intro .profile{\n    border-radius : 50%;\n    overflow : hidden;\n    width : 360px;\n    height : 360px;\n    position : relative;\n    background : white;\n  }\n  .intro .profile img{\n    position : absolute;\n    top : 50%;\n    left : 50%;\n    transform : translate(-50%, -50%);\n  }\n  .intro h1{\n    text-align : right;\n    word-break : keep-all;\n    line-height : 1.6;\n  }\n\n  .desc{\n    text-align : left;\n    word-break : keep-all\n    line-height : 1.6;\n    font-size : 20px,\n  }\n  h1{\n    letter-spacing : 3px;\n  }\n\n  dl {\n    margin-bottom : 32px;\n  }\n  dl:last-child{\n    margin-bottom : 0;\n  }\n  dt {\n    margin-bottom : 24px;\n    font-size: 24px;\n    letter-spacing : 2px;\n  }\n\n  dd img{\n    height : 80px;\n    margin : 0 12px;\n  }\n\n  li{\n    font-size : 18px;\n    padding : 4px 0;\n  }\n\n  @media screen and (max-width: 1240px) { \n    padding : 40px 3%;\n  }\n  @media screen and (max-width: 768px) { \n    .intro .profile{\n      width : 300px;\n      height : 300px;\n    }\n    .intro h1 {\n      font-size : 26px;\n      margin-bottom : 0;\n    }\n    li {\n      font-size : 16px;\n    }\n  }\n\n  @media screen and (max-width: 640px) {\n    .intro{\n      flex-direction : column;\n      justify-content : center;\n      align-items : center;\n    }\n    .intro h1 {\n      margin-top : 16px;\n      text-align : center;\n    }\n\n    dd img{\n      height : 60px;\n      margin : 0 8px;\n    }\n  }\n"]))),R=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(E,{children:[Object(u.jsxs)("div",{className:"section intro",children:[Object(u.jsx)("div",{className:"profile",children:Object(u.jsx)("img",{src:"https://beomoffice.github.io/app/testimg/myprofile.jpg",alt:"\ub098"})}),Object(u.jsxs)("h1",{children:["\ubc18\uac11\uc2b5\ub2c8\ub2e4!",Object(u.jsx)("br",{}),"\uc800\ub294 ",Object(u.jsx)("span",{style:{color:"#4FFBDF"},children:"\uae54\ub054\ud55c UI"}),"\uc640",Object(u.jsx)("br",{}),Object(u.jsx)("span",{style:{color:"#845EC2"},children:"\ub2e4\uc591\ud55c \ub290\ub08c\uc758 UX"}),"\ub97c \ub9cc\ub4dc\ub294",Object(u.jsx)("br",{}),"\uc6f9 \ud37c\ube14\ub9ac\uc154 \uc785\ub2c8\ub2e4."]})]}),Object(u.jsxs)("div",{className:"section desc",children:["\uc800\ub294 2\ub144\ucc28 \uc6f9 \ud37c\ube14\ub9ac\uc154 \ubc15\uc0c1\ubc94\uc785\ub2c8\ub2e4. ",Object(u.jsx)("br",{}),"\ube61\uc138\uac8c \uc77c\ud558\uace0 \uc2dc\uc6d0\ud558\uac8c \ub178\ub294\uac83\uc774 \uc0b6\uc758 \ubaa8\ud1a0\uc785\ub2c8\ub2e4.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"\ud0c4\ud0c4\ud55c \ucf54\ub4dc\ub97c \uae30\ubc18\uc73c\ub85c \ud558\ub294 UI / UX\ub97c \ucd94\uad6c\ud558\uba70, \uc5b4\ub5bb\uac8c \ud558\uba74 \ub354 \uac04\uacb0\ud558\uace0 \ud3b8\ud558\uac8c \uc791\uc5c5\ud560 \uc218 \uc788\ub294\uc9c0\uc5d0 \uad00\uc2ec\uc774 \ub9ce\uc2b5\ub2c8\ub2e4.",Object(u.jsx)("br",{}),"\uc791\uc5c5\uc790\uc758 \uc785\uc7a5\uc5d0\uc11c, \uc0ac\uc6a9\uc790\uc758 \uc785\uc7a5\uc5d0\uc11c\uc758 \uc758\uacac\ucc28\uc774\ub97c \uc5b4\ub5a0\ud55c \ubc29\uc2dd\uc73c\ub85c \uc904\uc5ec\ub098\uac00\uc57c\uc57c \ud560\uc9c0 \uc0dd\uac01\ub3c4 \ub9ce\uc774 \ud569\ub2c8\ub2e4.",Object(u.jsx)("br",{}),"\uc11c\ub85c\uac00 \ub9cc\uc871\ud560\ub9cc\ud55c \uc791\uc5c5\ubb3c\uc744 \ub9cc\ub4e4\uc5b4 \ub0b4\ub294 \uac83\uc774 \uc5b4\ub835\uaca0\uc9c0\ub9cc \ub9cc\uc871\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uac00\ub294\uac83\uc774 \uc800\uc758 \uc77c\uc774\ub77c\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"\uc800\ub294 \uc81c \uc77c\uc774 \ud765\ubbf8\ub86d\uace0 \uc990\uac81\uc2b5\ub2c8\ub2e4. \uc990\uac70\uc6b0\ub2c8 \ub354 \ud558\uace0\uc2f6\uace0, \ub354 \uc798\ud558\uace0\uc2f6\uc2b5\ub2c8\ub2e4.",Object(u.jsx)("br",{}),"\uc88b\uc544\ud558\ub294\uc77c\uc744 \ud504\ub85c\ud398\uc154\ub110\ud558\uac8c \ud574\ub0b4\ub294 \uac83,",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"\uadf8\uac83\uc774 \uc800\uc758 \uafc8\uc785\ub2c8\ub2e4."]}),Object(u.jsxs)("div",{className:"section",children:[Object(u.jsx)("h1",{children:"Stack"}),Object(u.jsxs)("dl",{children:[Object(u.jsx)("dt",{children:"Strong"}),Object(u.jsxs)("dd",{children:[Object(u.jsx)("img",{src:"https://beomoffice.github.io/app/testimg/html.png",alt:"html"}),Object(u.jsx)("img",{src:"https://beomoffice.github.io/app/testimg/css.png",alt:"css"}),Object(u.jsx)("img",{src:"https://beomoffice.github.io/app/testimg/js.png",alt:"js"}),Object(u.jsx)("img",{src:"https://beomoffice.github.io/app/testimg/jquery.png",alt:"jquery"})]})]}),Object(u.jsxs)("dl",{children:[Object(u.jsx)("dt",{children:"Experienced"}),Object(u.jsxs)("dd",{children:[Object(u.jsx)("img",{src:"https://beomoffice.github.io/app/testimg/php.png",alt:"php"}),Object(u.jsx)("img",{src:"https://beomoffice.github.io/app/testimg/react.png",alt:"react"})]})]})]}),Object(u.jsxs)("div",{className:"section",children:[Object(u.jsx)("h1",{children:"Career"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"2018 ~ 2019 / \ud558\uc774\ubbf8\ub514\uc5b4\uc885\ub85c\uc810 UI/UX \uc218\ub8cc(7\uac1c\uc6d4)"}),Object(u.jsx)("li",{children:"2019 / \uc5d0\uc774\ube14 \uc778\ud134 (3\uac1c\uc6d4)"}),Object(u.jsx)("li",{children:"2019 ~ 2020 / \uc2e0\ube44\uc6f9 \uc0ac\uc6d0 (7\uac1c\uc6d4)"}),Object(u.jsx)("li",{children:"2020 ~ 2021 / \uc5b4\uc194\ub8e8\uc158 \uc0ac\uc6d0 (9\uac1c\uc6d4)"})]})]}),Object(u.jsxs)("div",{className:"section",children:[Object(u.jsx)("h1",{children:"CONTACT"}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[Object(u.jsx)(D.a,{style:{marginRight:"8px",fontSize:20,verticalAlign:"bottom"}}),"beomoffice@gmail.com"]}),Object(u.jsxs)("li",{children:[Object(u.jsx)(D.b,{style:{marginRight:"8px",fontSize:20,verticalAlign:"bottom"}}),"010-2797-7412"]})]})]})]})})},F=Object(d.a)(I||(I=Object(c.a)(["\n@font-face {\n  font-family: 'S-CoreDream-6Bold';\n  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-6Bold.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n  html * { \n    font-family: 'S-CoreDream-6Bold';\n    box-sizing : border-box;\n  }\n  body {\n      background : #030303;\n      margin : 0;\n      padding : 0;\n      color : #fff;\n  }\n  body * {\n    margin : 0;\n    padding : 0;\n  }\n  a {\n    text-decoration : none;\n    color : inherit;\n  }\n  ul {\n    list-style : none;\n  }\n\n  .section{\n    padding : 30px 0;\n  }\n\n  .section h1{\n    font-size : 38px;\n    margin-bottom : 32px;\n    color : white;\n  }\n\n  @media screen and (max-width: 768px) {\n    .section h1 {\n      font-size :32px;\n      margin-bottom : 24px;\n    }\n  }\n"])));function _(){return Object(u.jsxs)(o.a,{children:[Object(u.jsx)(F,{}),Object(u.jsx)(y,{}),Object(u.jsxs)(p.c,{children:[Object(u.jsx)(p.a,{path:"/app",element:Object(u.jsx)(U,{})}),Object(u.jsx)(p.a,{path:"/app/about",element:Object(u.jsx)(R,{})})]})]})}l.a.render(Object(u.jsx)(_,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d659c920.chunk.js.map