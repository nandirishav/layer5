(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[8173],{66778:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var r=t(67294),a=t(25444),i=t(61424),o=t(67244),l=t(96371),s=t(70456).ZP.div.withConfig({displayName:"Cardstyle__CardWrapper",componentId:"sc-1sunj6k-0"})(["\n    .post-block{\n        margin-bottom: 2rem;\n        border-radius: 0.5rem;\n        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);\n        transition: all 0.3s ease-in;\n        &:hover{\n            box-shadow: 0px 2px 15px 4px rgba(0,0,0,0.2);\n            .post-thumb-block{\n                .gatsby-image-wrapper, .old-gatsby-image-wrapper{\n                    transform: scale3d(1.1,1.1,1);\n                }\n            }\n            .readmore-btn{\n                color: ",";\n                svg{\n                    margin-left: 0.25rem;\n                    transform: scale(1.2);\n                }\n            }\n        } \n    }\n\n    @media screen and (max-width:776px){\n\t\t.post-block{\n\t\t\twidth: auto;\n\t\t\tmargin: auto auto 2rem;\n\t\t}\n\t}\n\n    .post-thumb-block{\n        overflow: hidden;\n        height: 11.5rem;\n        border-top-right-radius: 0.5rem;\n        border-top-left-radius: 0.5rem;\n\n        .gatsby-image-wrapper, .old-gatsby-image-wrapper{\n            height:100%;\n            transition: all 0.3s ease-in;\n        }\n        img{\n            height: inherit;\n            max-height: 180px;\n            display: block;\n            text-align: center;\n            margin: auto;\n        }\n    }\n\n    .post-content-block{\n        padding: 1rem 2rem;\n        height: 8rem;\n    }\n\n    @media screen and (max-width: 1200px) and (min-width: 992px){\n        .post-thumb-block{\n            height: 12rem;\n        }\n\n        .post-content-block{\n            height: 10rem;\n        }\n    }\n\n    @media screen and (max-width: 670px) and (min-width: 560px){\n        .post-content-block{\n            height: 10rem;\n        }\n    }\n\n    @media screen and (max-width: 350px){\n        .post-content-block{\n            height: 10rem;\n        }\n    }\n\n    .post-title{\n        font-size: 1.4rem;\n        font-weight: 400;\n        color: black;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n\n    .post-meta-block{\n        height: auto;\n        display: flex;\n\n        .author{\n            text-align: end;\n        }\n        .author, p{\n            color: rgba(0, 0, 0, 0.4);\n            font-size: 0.9rem;\n            font-weight: 400;\n            flex: auto;\n        }\n    }\n\n    .readmore-btn-wrapper{\n        display:flex;\n        justify-content: flex-start;\n    }\n\n    .readmore-btn::after{\n        content: '';\n        position: absolute;\n        margin: 0 1rem 2rem;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n    }\n    .readmore-btn, .external-link-btn{\n       color: rgba(0,0,0,0.4);\n       display: flex;\n       flex: auto;\n       align-items: center;\n       transition: all 0.3s ease-in;\n       svg{\n           font-size: 1.5rem;\n           transition: all 0.3s;\n       }\n    }\n\n    .external-link-btn{\n        justify-content: flex-end;\n        svg{\n            font-size: 2rem;\n            padding: 0.25rem;\n            position: relative;\n        }\n\n        &:hover{\n            color: ",";\n            svg{\n                transform: scale(1.25);\n            }\n        }\n    }\n"],(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor})),m=function(e){var n=e.frontmatter,t=e.fields;return r.createElement(s,{fixed:!!n.abstract},r.createElement("div",{className:"post-block"},r.createElement("div",{className:"post-thumb-block"},r.createElement(l.Z,Object.assign({},n.thumbnail,{imgStyle:{objectFit:"contain"},alt:n.title}))),r.createElement("div",{className:"post-content-block"},r.createElement("h2",{className:"post-title"},n.title),r.createElement("div",{className:"post-meta-block"},n.date&&n.author&&r.createElement(r.Fragment,null,r.createElement("p",null,n.date),r.createElement("p",{className:"author"},n.author)),n.date&&!n.author&&r.createElement("p",null,n.date),!n.date&&n.author&&r.createElement("p",{className:"author"},n.author)),r.createElement("div",{className:"readmore-btn-wrapper"},t&&t.slug&&n.eurl&&r.createElement(r.Fragment,null,r.createElement(a.Link,{className:"readmore-btn",to:t.slug},"see more ",r.createElement(i.fNt,null)),r.createElement("a",{className:"external-link-btn",href:n.eurl,target:"_blank",rel:"noreferrer"},r.createElement(o.rpH,null))),t&&t.slug&&!n.eurl&&r.createElement(a.Link,{className:"readmore-btn",to:t.slug},"see more ",r.createElement(i.fNt,null)),!t&&!t.slug&&n.eurl&&r.createElement("a",{className:"external-link-btn",href:n.eurl,target:"_blank",rel:"noreferrer"},r.createElement(o.rpH,null))))))}},21169:function(e,n,t){"use strict";var r=t(67294),a=t(57067),i=t(97247),o=t(51852),l=t(42109),s=t(70456).ZP.div.withConfig({displayName:"blog-view-tooltip__ToolTipWrapper",componentId:"mhl0h7-0"})(["\n    @media screen and (max-width: 576px) {\n        display: none;\n    }\n    float:left;\n    margin: auto 1rem;\n\n    .border {\n        line-height: 18px;\n    }\n\n    a {\n        padding: 5px;\n        color: ",";\n        background-color: white;\n        border: 1.5px solid ",";\n        &:hover{\n            background-color: ",";\n            color: ",";\n            cursor: pointer;\n            border: 1.5px solid ",";\n        }             \n    }\n    .active {\n        background-color: ",";\n        color: ",";\n        border: 1.5px solid ",";\n    }\n"],(function(e){return e.theme.primaryLightColorTwo}),(function(e){return e.theme.primaryLightColorTwo}),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.primaryLightColorTwo}),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.primaryLightColorTwo}),(function(e){return e.theme.primaryColor}));n.Z=function(e){var n=e.isListView,t=e.setListView,m=e.setGridView;return r.createElement(s,null,r.createElement(a.X2,{className:"border"},r.createElement("a",{"data-tip":"Grid View","data-for":"grid-view",onClick:m,className:n?"":"active"},r.createElement(o.K9B,{size:22})),r.createElement(l.Z,{id:"grid-view",border:!0,className:"grid-view",backgroundColor:"black",place:"top",effect:"solid"}),r.createElement("a",{"data-tip":"List View","data-for":"list-view",onClick:t,className:n?"active":""},r.createElement(i.XLI,{size:22})),r.createElement(l.Z,{id:"list-view",className:"list-view",backgroundColor:"black",place:"top",type:"dark",effect:"solid"})))}},52942:function(e,n,t){"use strict";var r=t(67294),a=t(25444),i=t(70456),o=t(61424),l=i.ZP.div.withConfig({displayName:"pager__PagerWrapper",componentId:"ybqqfv-0"})(["\n    display: flex; \n    justify-content: space-between;\n    \n    .old-post{\n        justify-self: flex-end;\n    }\n    h4{\n        display: flex;\n        align-items: center;\n        svg{\n            margin-left: 0;\n            font-size: 2rem;\n            transition: all 0.2s linear;\n        } \n        &:hover{\n            color: ",";\n            svg{\n            margin-left: 3px;\n            transform: scale(1.2);\n        }\n    }\n"],(function(e){return e.theme.secondaryColor}));n.Z=function(e){var n=e.pageContext,t=e.text,i=e.isListView,s=n.previousPagePath,m=n.nextPagePath;return r.createElement(l,null,r.createElement("div",null,s&&r.createElement(a.Link,{to:s,state:{isListView:i}},r.createElement("h4",null,r.createElement(o.PjY,null),"Newer ",t))),r.createElement("div",{className:"old-post"},m&&r.createElement(a.Link,{to:m,state:{isListView:i}},r.createElement("h4",null,"Older ",t,r.createElement(o.fNt,null)))))}},53592:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var r=t(67294),a=t(21169),i=t(57067),o=t(35318),l=t(2927),s=t(52942),m=t(66778),c=t(70456).ZP.div.withConfig({displayName:"blogListstyle__BlogPageWrapper",componentId:"sc-9xipt1-0"})(["\n\t.blog-list-wrapper {\n\t\tmargin-bottom: 5rem;\n\t}\n\n\t.blog-lists{\n\t\tmargin-top: 5rem;\n\t}\n\n\t.post-thumb-block{\n\t\theight: 25rem;\n\n\t\timg{\n\t\t\tmax-height:25rem;\n\t\t}\n\t}\n\n\t.post-content-block{\n\t\theight: 8.5rem;\n\t}\n\n\t.post-title{\n\t\tfont-size: 1.75rem;\n\t}\n\n\t.post-meta-block{\n\t\tp{\n\t\t\tfont-size: 1rem;\n\t\t\ttext-align: start;\n\t\t}\n\t\t.author{\n\t\t\tfont-size: 1rem;\n\t\t\ttext-align: end;\n\t\t}\n\t}\n\n\t@media screen and (max-width:1200px){\n\t\t.post-thumb-block{\n\t\t\theight: 20rem;\n\t\n\t\t\timg{\n\t\t\t\tmax-height:20rem;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width:992px){\n\t\t.post-thumb-block{\n\t\t\theight: 15rem;\n\t\n\t\t\timg{\n\t\t\t\tmax-height:15rem;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width:500px){\n\t\t.blog-list-wrapper{\n\t\t\tmargin: 0rem auto 5rem;\n\t\t}\n\t\t.blog-lists{\n\t\t\tmargin-top: 0rem;\n\t\t}\n\t\t.post-content-block{\n\t\t\theight: 9rem;\n\t\t}\n\t}\n\n\n"]),d=function(e){var n=e.data,t=e.isListView,d=e.setListView,p=e.setGridView,u=e.pageContext,g=u.category?u.category:null,h=u.tag?u.tag:null,b=n.allMdx,f=b.totalCount,x=b.nodes,w=h?f+" post"+(1===f?"":"s")+' tagged with "'+h+'"':g?f+" post"+(1===f?"":"s")+' categorized as "'+g+'"':"Blog";return r.createElement(c,null,r.createElement(o.Z,{title:w,path:"Blog"}),r.createElement("div",{className:"blog-list-wrapper"},r.createElement(i.W2,null,r.createElement(i.X2,null,r.createElement(i.JX,{sm:12,md:8},!u.tag&&!u.category&&r.createElement(a.Z,{isListView:t,setListView:d,setGridView:p}),r.createElement(i.X2,{className:"blog-lists"},x.map((function(e){var n=e.id,t=e.frontmatter,a=e.fields;return r.createElement(i.JX,{xs:12,key:n},r.createElement(m.Z,{frontmatter:t,fields:a}))})),r.createElement(i.JX,null,r.createElement(s.Z,{pageContext:u,text:"Posts",isListView:t})))),r.createElement(i.JX,{sm:12,md:4},r.createElement(l.Z,null))))))}},2927:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var r=t(67294),a=t(25444),i=t(88449),o=t.n(i),l=t(22626),s=t(70456).ZP.div.withConfig({displayName:"blogSidebarstyle__BlogSideBarWrapper",componentId:"sc-1lfop4l-0"})(["\n    .search-box {\n        position: relative;\n        display: flex;\n        input{\n            flex-basis: 100%;\n            padding: 15px;\n            border-radius: 5px;\n            border: 1px solid ",";\n\n            &:focus{\n                border-color: ",";\n            }\n        }\n        button {\n            position: absolute;\n            right: 0px;\n            top: 0;\n            height: 100%;\n            min-width: 20px;\n            border-radius: 5px;\n            background: transparent;\n            font-size: 22px;\n            color: ","; \n        }\n    }\n\n\n    .sidebar-widgets {\n        padding: 0 30px;\n    }\n\n    .widgets-title{\n        margin-bottom: 20px;\n        h3{\n            display: inline-block;\n            font-weight: 500;\n            position: relative;\n            &:before{\n                position: absolute;\n                top: 50%;\n                right: -80px;\n                content: '';\n                width: 70px;\n                height: 1px; \n            }\n        }\n        \n    }\n    \n    .sidebar-widgets{\n        &+.sidebar-widgets{\n            margin-top: 52px;\n        }\n        ul{\n            margin: 0;\n            padding: 0;\n            list-style: none;\n        }\n        \n        \n        &.catagorie{\n            \n            li{\n                &+li{\n                    margin-top: 3px;\n                }\n                a{\n                    color: ",';\n                    display: flex;\n                    justify-content: space-between;\n                    font: 400 16px/35px "Open Sans", sans-serif;\n                    em{font-style: normal;}\n                    span{\n                        border-bottom: 1px solid transparent;\n                        transition: all 0.3s linear;\n                    }\n                    &:hover{\n                        span, em{\n                            color: ',"; \n                            border-color: ","; \n                        }\n                    }\n                }\n            }\n        }\n        &.tags{\n            ul{\n                margin-top: -5px;\n                margin-left: -5px;\n                margin-right: -5px;\n            }\n            li{\n                display: inline-block;\n                a{\n                    color: ",';\n                    margin: 5px;\n                    display: block;\n                    padding: 6px 18px;\n                    border-radius: 3px;\n                    background: #F0F0F0;\n                    font: 400 13px/26px "Open Sans", sans-serif; \n                    transition: all 0.3s linear;\n                    &:hover{\n                        background: ',";\n                        color: ",";\n                    }\n                }\n            }\n            \n        }\n    }\n\n    .subscribe {\n\t\tfont-family: 'Qanelas Soft', sans-serif;\n        padding: 0 1rem;\n        margin: 2rem auto auto;\n\n\t\tspan {\n\t\t\th4 {\n                font-weight: 500;\n                margin-bottom: 0.5rem;\n            }\n\t\t}\n\n\t\tinput {\n            display: inline-flex;\n\t\t\tpadding: 1rem;\n\t\t\tmargin-right: 0.25rem;\n            width: auto;\n\t\t\theight: 3.5rem;\n\t\t\tcolor: rgba(0, 0, 0, 0.75);\n\t\t\tborder: 1px solid #000000;\n\t\t\tborder-top-left-radius: 0.3rem;\n            border-bottom-left-radius: 0.3rem;\n\t\t}\n\n\t\tbutton {\n\t\t\theight: 3.5rem;\n            min-width: auto;\n            border-radius: 0 0.3rem 0.3rem 0;\n\t\t}\n\n        @media screen and (max-width: 1200px) {\n            \n            padding: 0 0.5rem;\n\n            input {\n                width: 10.5rem;\n            }\n        }\n\n        @media screen and (max-width: 992px) {\n            display: none;\n        }\n\t}\n\n    @media only screen and (max-width: 1024px) {\n        .sidebar-widgets {\n            padding: 0;\n        }\n       \n    }\n   \n      \n       \n"],(function(e){return e.theme.headingColor}),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.headingColor}),(function(e){return e.theme.black}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.black}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.white})),m=function(){var e=(0,a.useStaticQuery)("3205812809"),n=e.tags.group.sort((function(e,n){return n.totalCount-e.totalCount})),t=e.categories.group.sort((function(e,n){return n.totalCount-e.totalCount}));return r.createElement(s,null,r.createElement("div",{className:"sidebar-widgets catagorie"},r.createElement("div",{className:"widgets-title"},r.createElement("h3",null,"Categories")),r.createElement("ul",null,t&&t.map((function(e){return r.createElement("li",{key:e.fieldValue},r.createElement(a.Link,{to:"/blog/category/"+o()(e.fieldValue)},r.createElement("span",null,e.fieldValue),r.createElement("em",null,"(",e.totalCount,")")))})))),r.createElement("div",{className:"sidebar-widgets tags"},r.createElement("div",{className:"widgets-title"},r.createElement("h3",null,"Tags")),r.createElement("ul",null,n&&n.map((function(e){return r.createElement("li",{key:e.fieldValue},r.createElement(a.Link,{to:"/blog/tag/"+o()(e.fieldValue)},e.fieldValue," (",e.totalCount,")"))})))),r.createElement("div",{className:"subscribe"},r.createElement("form",{name:"contactform",method:"post",action:"https://calcotestudios.us15.list-manage.com/subscribe/post?u=6b50be5aea3dfe1fd4c041d80&id=6bb65defeb"},r.createElement("div",null,r.createElement("span",null,r.createElement("h4",null,"Subscribe to our Newsletter")),r.createElement("input",{className:"inputrow subscribe-email",type:"email",placeholder:"Email Address",name:"EMAIL",id:"mce-EMAIL",required:!0}),r.createElement(l.Z,{secondary:!0,title:"Subscribe",id:"mc-embedded-subscribe"})))))}},83836:function(e,n,t){"use strict";t.r(n);var r=t(67294),a=t(70456),i=t(20092),o=t(36179),l=t(97264),s=t(53592),m=t(68812),c=t(97956),d=t(38155);n.default=function(e){var n=e.pageContext,t=e.data;return r.createElement(a.f6,{theme:d.Z},r.createElement(i.Z,null,r.createElement(c.Z,null),r.createElement(o.Z,{title:"Blog",description:"Articles how to service mesh from the world's largest service mesh community. Service mesh how-tos and cloud native ecosystem news."}),r.createElement(l.Z,null),r.createElement(s.Z,{data:t,pageContext:n}),r.createElement(m.Z,null)))}}}]);
//# sourceMappingURL=component---src-templates-blog-tag-list-js-7939d3b58cd22bb7e4da.js.map