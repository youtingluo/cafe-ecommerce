import{m as C,a as B,_ as l,r,o as c,c as i,b as t,d as s,w as e,e as n,t as A,f as _,F as f,p as E,g as R}from"./index-dea600ad.js";import{c as p}from"./cart-94e17664.js";import"./sweetalert2.all-6567ce3e.js";import"./_commonjsHelpers-042e6b4d.js";const y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACnSURBVHgB7dgxDoMwEEXBxcpBSYHgSCCKcFKcI2SlpYpn6q1eY/lHAAAAAAAA/L8pe7iua4+BHMeRatOCEgGLBCwSsEjAolf2cJqmKwAAAJ6Q3gOXZZljIOd5Xpm79FeutfaJsVyZI2NCkYBFAhYJWCRgUfoVvu/7HQAAAE9ID6rbtg21B+77nvp5pb9yvfc5xpIKaEwoErBIwCIBiwQEAAAAAADgpy8jvRUz/pbvlgAAAABJRU5ErkJggg==",I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK/SURBVHgB7ds/bhpBFMfxBwFkUXGE5AYEhGjtW7ikASEqbmCnTIcbhKDhGq6c1PxJbuCULl3RgCDzK1bZWIAX5s28h/U+0sr4j+TxV2t2d2aXyBhjjDHGGGOMMcYYYzz0+/0KKdPtdj9TAHli5gZ6t1qtnnu9XpWUaLfb1e12+6vT6dwRs0/ECPF2u919Lpe7cgO+bTabj7PZ7IUEIZ4bz5PbKm67rtfrtFgsfhITtoBJvORzDRHT8ejfuFgjsgR8Gy8hGXFfvNS42CLmyBPenPH+sm+gCRf3tVAo3AyHw98UwbF46TGVy+Uvg8HglTx4H0RGo9EfN5gbDOjQz+AP2Ww2TzEOLFnjYcy+8cB7D0xkHXjIPfGUeJPJhGUMbAFBMqJEPGANCBIRpeIBe0CIGVEyHgQJCDEiSseDYAEhZEQN8SBoQAgRUUs8CB4QOCNqigdRAgJHRG3xIFpA8ImoMR5EDQjnRNQaD6IHhFMirtdr0hoPRAJC1oj4qDUeiAWELBGPkY4HogHh3Iga4oF4QDg1opZ4oCIgZI2oKR6wL2vGUCwWSYuL/ReOucZyzEUfRDREvPjTGOmIH+JEWjKi6ks5HG3xOtbywDnUTiakT1U0LJkeonI6a995ntaI6iZUj50ka4yoako/yxWGtohqFpVOuTzTFFHFsuY517ZaIoovrPtMDGiIKHprB8esinREsZuLOKekJCOK3N4WYj5PKmL0GyxDToZKRGQJqGndNnZE74CtVqtSKpWeNcRLZI2Yz+e/4h5v8uA9pT+dTjGQh0Pfl1jDwO9678Z358E3HrA8JzKfz380Gg3szdfpr0suAC2Xy5darfboXt66PfGK/h/Xt/F4fE8M2J5UehtRMl5iX0TOeMD6rFwS0Q2yKh0vkY7otu+c8YIJ9WipD42P4BpjjDHGGGOMMcYYYy7LX4lXYxg2nTseAAAAAElFTkSuQmCC";const F={mounted(){this.getCarts(),window.addEventListener("scroll",this.onScroll)},beforeUnmount(){window.removeEventListener("scroll",this.onScroll)},methods:{...C(p,["getCarts"]),onScroll(){this.windowTop=window.scrollY,this.windowTop>100?this.$refs.navbar.classList.add("bg-light","shadow","navbar-light"):this.$refs.navbar.classList.remove("bg-light","shadow","navbar-light")}},computed:{...B(p,["carts"])}},b=o=>(E("data-v-29ea4ba8"),o=o(),R(),o),G={ref:"navbar",class:"navbar navbar-expand-md fixed-top py-3"},U={class:"container"},k={type:"button",class:"btn btn-dark badge rounded-pill me-3"},x={class:"bi bi-cart-fill text-white position-relative"},Y={key:0,class:"position-absolute top-0 start-100 translate-middle-y bg-danger fw-normal rounded-circle px-2 py-1 font-normal"},S=b(()=>t("a",{class:"d-md-none",href:"#","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight","aria-controls":"offcanvasRight"},[t("img",{class:"img-fluid",width:"40",src:y,alt:"選單按鈕"})],-1)),j={class:"collapse navbar-collapse",id:"navbarSupportedContent"},T={class:"navbar-nav ms-auto mb-lg-0"},H={class:"nav-item ms-4"},K={class:"nav-item ms-4"},L={class:"nav-item ms-4"},D={class:"ms-4"},Q={type:"button",class:"btn btn-dark badge rounded-pill fs-6"},N={class:"bi bi-cart-fill text-white position-relative"},O={key:0,class:"position-absolute top-0 start-100 translate-middle-y bg-danger fw-normal rounded-circle px-2 py-1 font-normal"},J={class:"offcanvas offcanvas-end d-md-none w-75 bottom-50",tabindex:"-1",id:"offcanvasRight","aria-labelledby":"offcanvasRightLabel"},X=b(()=>t("div",{class:"offcanvas-header justify-content-end"},[t("button",{type:"button",class:"btn btn-sm","data-bs-dismiss":"offcanvas","aria-label":"Close"},[t("img",{width:"40",src:I,alt:"close"})])],-1)),P={class:"offcanvas-body py-0 pe-4"},V={class:"navbar-nav mb-lg-0 text-end"},Z={class:"nav-item ms-md-5 fs-5","data-bs-dismiss":"offcanvas"},M={class:"nav-item ms-md-5 fs-5","data-bs-dismiss":"offcanvas"},$={class:"nav-item ms-md-5 fs-5","data-bs-dismiss":"offcanvas"};function z(o,d,m,h,v,g){const a=r("RouterLink");return c(),i(f,null,[t("nav",G,[t("div",U,[s(a,{class:"navbar-brand waterfall fs-3 text-dark",to:"/"},{default:e(()=>[n("Cafe Beat")]),_:1}),t("div",null,[s(a,{class:"d-md-none",to:"/cart"},{default:e(()=>[t("button",k,[t("i",x,[o.carts.length?(c(),i("span",Y,A(o.carts.length),1)):_("",!0)])])]),_:1}),S]),t("div",j,[t("ul",T,[t("li",H,[s(a,{class:"nav-link",to:"/products"},{default:e(()=>[n("產品列表")]),_:1})]),t("li",K,[s(a,{class:"nav-link",to:"/about"},{default:e(()=>[n("關於我們")]),_:1})]),t("li",L,[s(a,{class:"nav-link",to:"/collect"},{default:e(()=>[n("我的收藏")]),_:1})]),t("li",D,[s(a,{class:"nav-link",to:"/cart"},{default:e(()=>[t("button",Q,[t("i",N,[o.carts.length?(c(),i("span",O,A(o.carts.length),1)):_("",!0)])])]),_:1})])])])])],512),t("div",J,[X,t("div",P,[t("ul",V,[t("li",Z,[s(a,{class:"nav-link",to:"/products"},{default:e(()=>[n("產品列表")]),_:1})]),t("li",M,[s(a,{class:"nav-link",to:"/about"},{default:e(()=>[n("關於我們")]),_:1})]),t("li",$,[s(a,{class:"nav-link",to:"/collect"},{default:e(()=>[n("我的收藏")]),_:1})])])])])],64)}const W=l(F,[["render",z],["__scopeId","data-v-29ea4ba8"]]),q={},tt={class:"py-4 text-center bg-secondary bg-opacity-90"},st=t("p",{class:"mb-0"},[n(" © 2023 Cafe Beat All rights reserved. "),t("br"),n(" 僅作個人練習，無商業用途 ")],-1),at=[st];function ot(o,d){return c(),i("footer",tt,at)}const et=l(q,[["render",ot]]),nt={data(){return{windowTop:0}},components:{FooterBar:et,FrontNavbar:W}};function ct(o,d,m,h,v,g){const a=r("FrontNavbar"),u=r("RouterView"),w=r("FooterBar");return c(),i(f,null,[s(a),s(u),s(w)],64)}const At=l(nt,[["render",ct]]);export{At as default};
