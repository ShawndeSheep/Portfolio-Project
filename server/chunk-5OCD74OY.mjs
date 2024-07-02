import './polyfills.server.mjs';
import{B as C,C as R,D as A,E as N,F as h,G as q,H as P,K as G,O as z,P as W,R as j,S as B,a as E,b as D,c as p,d as m,e as S,f as w,g as c,h as t,i as n,j as s,k as f,l as I,m as i,n as y,o as M,p as d,q as u,r as T,w as F,z as _}from"./chunk-RHCOWPY4.mjs";var x=o=>({color:o}),L=(()=>{let e=class e{constructor(l){this.router=l,this.currentRoute=""}ngOnInit(){this.router.events.pipe(E(l=>l instanceof z)).subscribe(l=>{this.currentRoute=l.urlAfterRedirects})}myWork(){this.router.navigate(["mywork"])}resume(){this.router.navigate(["resume"])}contact(){this.router.navigate(["contact"])}};e.\u0275fac=function(r){return new(r||e)(S(j))},e.\u0275cmp=p({type:e,selectors:[["app-navbar"]],standalone:!0,features:[d],decls:25,vars:12,consts:[[1,"navbar","navbar-expand-lg",2,"background-color","rgb(30, 30, 30)"],[1,"container-fluid"],["href","#",1,"navbar-brand"],[2,"font-size","2rem","color","white"],[2,"color","aqua"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["aria-current","page","href","#",1,"nav-link","active",2,"margin-top","0.5rem","cursor","pointer",3,"ngStyle"],["aria-current","page",1,"nav-link","active",2,"margin-top","0.5rem","cursor","pointer",3,"click","ngStyle"]],template:function(r,a){r&1&&(t(0,"nav",0)(1,"div",1)(2,"a",2)(3,"b",3),i(4,"Shawn"),n(),t(5,"b",4),i(6,"."),n()(),t(7,"div",5)(8,"ul",6)(9,"li",7)(10,"a",8)(11,"b"),i(12,"Home"),n()()(),t(13,"li",7)(14,"a",9),f("click",function(){return a.myWork()}),t(15,"b"),i(16,"My Work"),n()()(),t(17,"li",7)(18,"a",9),f("click",function(){return a.resume()}),t(19,"b"),i(20,"Resume"),n()()(),t(21,"li",7)(22,"a",9),f("click",function(){return a.contact()}),t(23,"b"),i(24,"Contact"),n()()()()()()()),r&2&&(m(10),c("ngStyle",u(4,x,a.currentRoute==="/"?"aqua":"white")),m(4),c("ngStyle",u(6,x,a.currentRoute==="/mywork"?"aqua":"white")),m(4),c("ngStyle",u(8,x,a.currentRoute==="/resume"?"aqua":"white")),m(4),c("ngStyle",u(10,x,a.currentRoute==="/contact"?"aqua":"white")))},dependencies:[h,N]});let o=e;return o})();var H=(()=>{let e=class e{constructor(){this.title="portfolio"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=p({type:e,selectors:[["app-root"]],standalone:!0,features:[d],decls:3,vars:0,consts:[[2,"max-width","100vw","background-color","rgb(30, 30, 30)","min-height","100vh","overflow-x","hidden"]],template:function(r,a){r&1&&(t(0,"div",0),s(1,"app-navbar")(2,"router-outlet"),n())},dependencies:[W,L]});let o=e;return o})();var U=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=p({type:e,selectors:[["app-index"]],standalone:!0,features:[d],decls:16,vars:0,consts:[[1,"container",2,"display","flex","background","rgb(30, 30, 30)","margin-top","3%"],[1,"left",2,"flex","1.5"],[2,"color","white","font-family","'Courier New', Courier, monospace","font-size","4rem","line-height","90%"],[2,"font-size","4.5rem","color","aqua","font-family","'Courier New', Courier, monospace"],[2,"color","gray","font-family","'Courier New', Courier, monospace","margin-top","-3%","margin-right","5%"],["href","https://bit.ly/3L7USqB","target","_blank"],["src","../../assets/linkedin.png","alt","LinkedIn Image",2,"width","5%","margin-top","1%","cursor","pointer"],[1,"right",2,"background","green","flex","1"]],template:function(r,a){r&1&&(t(0,"div",0)(1,"div",1)(2,"p",2)(3,"b"),i(4," Hello \u{1F44B} "),s(5,"br"),i(6," My name is"),n()(),t(7,"p",3)(8,"b"),i(9,'"Shawn Davies"'),n()(),t(10,"p",4),i(11,' {"As a computer science student at Institut Sains dan Teknologi Terpadu Surabaya University, I am passionate about using technology to solve problems and improve the world around me. I am also equipped with with fundamental design skills which includes video editing, graphic design, and photo editing. Communication is a strong point for me, as I do love to present and make pitches. My ultimate goal is to work as a software engineer at a cutting edge technology company where I can continue to learn and grow."} '),n(),t(12,"a",5),s(13,"img",6),n()(),t(14,"div",7),i(15,"bbb"),n()())}});let o=e;return o})();var J=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=p({type:e,selectors:[["app-mywork"]],standalone:!0,features:[d],decls:2,vars:0,template:function(r,a){r&1&&(t(0,"p"),i(1,"mywork works!"),n())}});let o=e;return o})();var ee=(o,e,v,l)=>({"btn-primary":o,"btn-success":e,"btn-warning":v,"btn-light":l}),Q=(()=>{let e=class e{constructor(){this.data={},this.index=-1}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=p({type:e,selectors:[["app-card"]],inputs:{data:"data",index:"index"},standalone:!0,features:[d],decls:12,vars:10,consts:[[1,"card","text-white","mt-2",2,"width","16rem","background-color","rgb(50, 50, 50)","height","12rem"],[1,"card-body",2,"margin-bottom","-1rem"],[1,"card-title",2,"color","rgb(200, 200, 200)"],["type","button",1,"btn",2,"height","2rem","border-radius","1rem","padding-top","0.1rem",3,"ngClass"],[1,"mt-3",2,"font-family","'Courier New', Courier, monospace"],[2,"color","aqua"]],template:function(r,a){r&1&&(t(0,"div",0)(1,"div",1)(2,"h5",2)(3,"b"),i(4),n()(),t(5,"button",3),i(6),n(),t(7,"h6",4)(8,"b"),i(9),n()(),t(10,"p",5),i(11),n()()()),r&2&&(m(4),y(a.data.title),m(),c("ngClass",T(5,ee,a.data.type==="Internship",a.data.type==="Certification",a.data.type==="Personal Development",a.data.type==="Academics")),m(),M(" ",a.data.type," "),m(3),y(a.data.location),m(2),y(a.data.duration))},dependencies:[h,C]});let o=e;return o})();var X=(()=>{let e=class e{constructor(){}getExperience(){return[{title:"Full Stack Developer",description:"Full stack developer at Pt. Cahaya Medika Healthcare, utilizing CodeIgniter framework as the front-end framework, Node Js Express as the backend architecture, as well as MySQL Database",type:"Internship",location:"Pt Cahaya Medika Healthcare",duration:"2023"},{title:"IT Dev Team",description:"IT Developer team at Pt Wings Surya. utilizing Angular v18 framework as the base framework architecture",type:"Internship",location:"Pt Wings Surya",duration:"2024"},{title:"Machine Learning Cohort",description:"Google Bangkit 2024 batch 2 machine learning cohort",type:"Certification",location:"Google Bangkit",duration:"2024"},{title:"Cloud Foundation",description:"Certified for AWS Cloud foundational architecture exam",type:"Certification",location:"AWS Academy",duration:"2024"},{title:"GDG Facilitator",description:"Google Developer Group Event Facilitator: Build with AI - May 2024 @Yarra Ballroom",type:"Personal Development",location:"GDG Event",duration:"2024"},{title:"Associate Professor Assistant",description:"Associate Professor Assistant for Ms Esther Setiawan https://www.linkedin.com/in/esthersetiawan/",type:"Personal Development",location:"ISTTS",duration:"2024-2025"},{title:"IT and Design Support",description:"Remote IT Support, Web Developer and Graphic Design for Raja Steel Bojonegoro and Tuban",type:"Personal Development",location:"Raja Steel Tuban & Bojonegoro",duration:"2024-2025"}]}getEducation(){return[{title:"Senior High School",description:"High School at Masa Depan Cerah Christian School",type:"Academics",location:"Masa Depan Cerah, Surabaya",duration:"2019-2021"},{title:"Undergraduate: Computer Science",description:"Went undergraduate (S1) at Institut Sains dan Teknologi Terpadu Surabaya",type:"Academics",location:"ISTTS",duration:"2021-2025"},{title:"Master Degree: Computer Science",description:"Ongoing master degree at ISTTS through fast-track program",type:"Academics",location:"ISTTS",duration:"2025-2026"}]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();var k=o=>({resumebtnSelected:o});function ne(o,e){if(o&1&&(t(0,"div",10),s(1,"app-card",11),n()),o&2){let v=e.$implicit,l=e.index;m(),c("data",v)("index",l)}}function ie(o,e){if(o&1&&(t(0,"div",7)(1,"div",8),w(2,ne,2,2,"div",9),n()()),o&2){let v=I();m(2),c("ngForOf",v.templist)}}function oe(o,e){o&1&&(t(0,"div",12)(1,"div",13)(2,"div",14),s(3,"img",15),t(4,"div",16)(5,"h5",17)(6,"b",18),i(7,"Frontend & UI/UX Developer"),n()(),t(8,"p",19),i(9," Master in Frontend Web Development and its frameworks such as React and Angular "),n()()(),t(10,"div",14),s(11,"img",20),t(12,"div",16)(13,"h5",17)(14,"b",18),i(15,"Backend Developer"),n()(),t(16,"p",19),i(17," Equipped with backend skills including development of REST API "),n()()(),t(18,"div",14),s(19,"img",21),t(20,"div",16)(21,"h5",17)(22,"b",18),i(23,"ML Engineer"),n()(),t(24,"p",19),i(25," Implementing Artificial Intelligence or Machine Learning for your business case. "),n()()()()())}var Y=(()=>{let e=class e{constructor(l){this.service=l,this.templist=[],this.resumeState=0}ngOnInit(){this.templist=this.service.getExperience()}experience(){this.resumeState=0,this.templist=this.service.getExperience()}education(){this.resumeState=1,this.templist=this.service.getEducation()}specializations(){this.resumeState=2}};e.\u0275fac=function(r){return new(r||e)(S(X))},e.\u0275cmp=p({type:e,selectors:[["app-resume"]],standalone:!0,features:[d],decls:19,vars:11,consts:[[2,"color","white","margin-left","5%"],[2,"display","block","padding-bottom","-0rem","font-size","3rem"],[2,"background","linear-gradient(to right, aqua, lightblue)","-webkit-background-clip","text","-webkit-text-fill-color","transparent"],[1,"buttoncontainer"],[1,"resumebtn",3,"click","ngClass"],["class","experience","style","margin-left: 5%; padding-bottom: 4rem",4,"ngIf"],["style","margin-left: 5%; padding-bottom: 4rem",4,"ngIf"],[1,"experience",2,"margin-left","5%","padding-bottom","4rem"],[1,"row"],["class","col-md-3",4,"ngFor","ngForOf"],[1,"col-md-3"],[3,"data","index"],[2,"margin-left","5%","padding-bottom","4rem"],[1,"cards-container",2,"display","flex","gap","1rem","flex-wrap","wrap"],[1,"card","mt-2","text-light",2,"width","20rem","background-color","rgb(60, 60, 60)"],["src","https://wallpaperaccess.com/full/3239444.jpg","alt","...",1,"card-img-top"],[1,"card-body"],[1,"card-title"],[2,"color","aqua"],[1,"card-text"],["src","https://plopdo.com/wp-content/uploads/2021/10/What-is-back-end-development-2.jpg","alt","...",1,"card-img-top"],["src","https://learn.g2.com/hubfs/_learn-what-is-artificial-intelligence@2x.png","alt","...",1,"card-img-top"]],template:function(r,a){r&1&&(t(0,"div",0)(1,"p",1),i(2," <"),t(3,"b"),i(4,"Get "),n(),t(5,"i"),i(6,"to know "),n(),t(7,"b",2),i(8," me more! "),n(),i(9,"/> "),n(),t(10,"div",3)(11,"button",4),f("click",function(){return a.experience()}),i(12," Experience \u{1F9EA} "),n(),t(13,"button",4),f("click",function(){return a.education()}),i(14," Education \u{1F393} "),n(),t(15,"button",4),f("click",function(){return a.specializations()}),i(16," Specializations \u{1F4DA} "),n()()(),w(17,ie,3,1,"div",5)(18,oe,26,0,"div",6)),r&2&&(m(11),c("ngClass",u(5,k,a.resumeState===0)),m(2),c("ngClass",u(7,k,a.resumeState===1)),m(2),c("ngClass",u(9,k,a.resumeState===2)),m(2),c("ngIf",a.resumeState===0||a.resumeState===1),m(),c("ngIf",a.resumeState===2))},dependencies:[h,C,R,A,Q],styles:[".resumebtn[_ngcontent-%COMP%]{background:#505050;color:#fff;border:none;margin:.2rem 1rem .2rem .2rem;font-weight:700;border-radius:25px;padding:10px 10px 10px 15px}.resumebtnSelected[_ngcontent-%COMP%]{background:#323232}.resumebtn[_ngcontent-%COMP%]:hover{color:#0ff}"]});let o=e;return o})();var Z=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=p({type:e,selectors:[["app-contact"]],standalone:!0,features:[d],decls:33,vars:0,consts:[[1,"container",2,"display","flex"],[1,"container","mt-3"],[2,"font-family","'Courier New', Courier, monospace","color","aqua","text-align","center","text-decoration","none"],[2,"word-spacing","-0.5rem","font-size","3rem"],[1,"mt-4",2,"font-family","'Courier New', Courier, monospace","font-weight","bold","line-height","4rem","font-size","2rem"],[2,"color","rgb(248, 87, 248)"],[2,"color","white"],[1,"ms-3",2,"font-style","normal","text-decoration","none"],[2,"color","rgb(207, 255, 14)"],[2,"color","crimson"],[2,"color","rgb(255, 165, 63)"],[2,"color","rgba(25, 218, 214, 0.918)"]],template:function(r,a){r&1&&(t(0,"div",0)(1,"div",1)(2,"h3",2)(3,"b",3),i(4,"Get in touch with me"),n()(),t(5,"p",4)(6,"a",5),i(7,"class Contact"),n(),t(8,"a",6),i(9,"{"),n(),s(10,"br"),t(11,"a",7),i(12,"phoneNumber:"),n(),t(13,"a",8),i(14," '6281230022218'"),n(),s(15,"br"),t(16,"a",7),i(17,"emailContact:"),n(),t(18,"a",9),i(19," 'shawnforbusiness01@gmail.com'"),n(),s(20,"br"),t(21,"a",7),i(22,"LinkedIn:"),n(),t(23,"a",10),i(24," 'https://bit.ly/3L7USqB'"),n(),s(25,"br"),t(26,"a",7),i(27,"Github:"),n(),t(28,"a",11),i(29," 'https://github.com/ShawndeSheep'"),n(),s(30,"br"),t(31,"a",6),i(32," } "),n()()()())}});let o=e;return o})();var $=[{path:"",component:U},{path:"mywork",component:J},{path:"resume",component:Y},{path:"contact",component:Z}];var K={providers:[F({eventCoalescing:!0}),B($),P()]};var re={providers:[G()]},V=_(K,re);var ae=()=>q(H,V),Oe=ae;export{Oe as a};
