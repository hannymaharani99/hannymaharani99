(this["webpackJsonpweb-portfolio"]=this["webpackJsonpweb-portfolio"]||[]).push([[0],{11:function(e,n,s){"use strict";s.r(n);var a=s(1),t=s.n(a),c=s(3),i=s.n(c),r=(s(8),s(9),s.p,s(0));var o=function(){return Object(r.jsxs)("div",{class:"hero-body",children:[Object(r.jsx)("div",{class:"container",children:Object(r.jsxs)("div",{class:"columns",children:[Object(r.jsx)("div",{class:"column is-3 is-flex",children:Object(r.jsx)("div",{class:"column-child sidebar shadow",children:Object(r.jsxs)("div",{class:"sidebar-header has-text-centered",children:[Object(r.jsx)("div",{class:"photo",children:Object(r.jsx)("a",{href:"https://maharanirach.com",children:Object(r.jsx)("img",{src:"logo-header.gif"})})}),Object(r.jsx)("div",{title:"created by @luxovum",children:Object(r.jsx)("img",{src:"cbrpnkgradient.png"})}),Object(r.jsx)("br",{}),Object(r.jsx)("h2",{class:"header-name",children:"Maharani (Hanny)"}),Object(r.jsx)("h5",{children:"Self-learning coder"}),Object(r.jsxs)("div",{class:"social-icons",children:[Object(r.jsx)("a",{href:"https://www.linkedin.com/in/maharani28/",title:"click here to see her linkedin profile",children:Object(r.jsx)("i",{class:"fab fa-linkedin-in"})}),Object(r.jsx)("a",{href:"https://github.com/hannymaharani99",title:"click here to see her github",children:Object(r.jsx)("i",{class:"fab fa-github-square"})}),Object(r.jsx)("a",{href:"mailto:contact@maharanirach.com",title:"click here to send email to Maharani",children:Object(r.jsx)("i",{class:"fas fa-envelope-square"})})]})]})})}),Object(r.jsx)("div",{class:"column is-flex",children:Object(r.jsxs)("div",{class:"column-child terminal shadow",children:[Object(r.jsxs)("div",{class:"terminal-bar dark-mode",children:[Object(r.jsx)("div",{class:"icon-btn close"}),Object(r.jsx)("div",{class:"icon-btn min"}),Object(r.jsx)("div",{class:"icon-btn max"}),Object(r.jsx)("div",{class:"terminal-bar-text is-hidden-mobile dark-mode-text",children:"guest@hanilinux: "})]}),Object(r.jsxs)("div",{class:"terminal-window primary-bg",onclick:"document.getElementById('dummyKeyboard').focus();",children:[Object(r.jsx)("div",{class:"terminal-output",id:"terminalOutput",children:Object(r.jsx)("div",{class:"terminal-line",children:Object(r.jsxs)("span",{class:"help-msg",children:["Welcome to Maharani's portfolio \u2014 Type ",Object(r.jsx)("span",{class:"code",children:"help"})," for a list of supported commands."]})})}),Object(r.jsxs)("div",{class:"terminal-line",children:[Object(r.jsx)("span",{class:"success",children:"\u279c"})," ",Object(r.jsx)("span",{class:"directory",children:"~"})," ",Object(r.jsx)("span",{class:"user-input",id:"userInput"}),Object(r.jsx)("input",{type:"text",id:"dummyKeyboard",class:"dummy-keyboard"})]})]})]})})]})}),Object(r.jsx)("footer",{class:"footer",children:Object(r.jsx)("div",{class:"content has-text-centered",children:Object(r.jsxs)("p",{children:["Built with ",Object(r.jsx)("i",{class:"fas fa-heart icon"})," in ",Object(r.jsx)("i",{class:"fab fa-react",style:"color: white;"})]})})})]})},l=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,12)).then((function(n){var s=n.getCLS,a=n.getFID,t=n.getFCP,c=n.getLCP,i=n.getTTFB;s(e),a(e),t(e),c(e),i(e)}))};i.a.render(Object(r.jsx)(t.a.StrictMode,{children:Object(r.jsx)(o,{})}),document.getElementById("root")),l()},8:function(e,n,s){},9:function(e,n){var s,a,t=[38],c={help:'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">research</span>, <span class="code">education</span>, <span class="code">skills</span>,<span class="code">portfolio</span>',about:"Hello there, I'm Maharani from Indonesia. I have passion in creating and building a seamless web development. I have experience in application support and cyber security for three years. Also, My interest is in kubernetes development and blockchain. When I'm not working, I love to read books.",skills:'<span class="code">Programming Languages: </span>HTML & CSS, Python, JavaScript, C++<br><span class="code">Frameworks:</span>React.js, web3.js<br><span class="code">Penetration Testing Skill:</span>Intermediate',education:'<span class="school">Graduate Study:</span>Information security Management at University of Indonesia',experience:"Technical Support, Software Tester, Technical Writer, Web Developer",research:'<a href="">The blockchain concept in building a trusted ecosystem in the internet of things</a><br><a href="">honeypot webserver and home network detection system using raspberry pi',portfolio:'<span class="code">Front-End:</span><a href="https://hannymaharani99.github.io/portfolio/ " target="_blank">Quote Generator</a><br><span class="code">Write-up: </span><a href="https://medium.com/@maharanirach/jenkins-misconfig-exploitation-1e3afdac6130" target="_blank">Jenkins Misconfig Exploit</a><br><span class="code">Application: </span><a href="https://hannymaharani99.github.io/musicplayer/" target="_blank">Mini Music Player App</a>'};document.addEventListener("keydown",(function(e){8!==e.keyCode&&46!==e.keyCode||(s.innerHTML=s.innerHTML.slice(0,s.innerHTML.length-1))})),document.addEventListener("keypress",(function(e){var n=s.innerHTML;if(!t.includes(e.keyCode))return"Enter"===e.key?(function(e){var n;0!==(e=e.toLowerCase()).length&&(n='<div class="terminal-line"><span class="success">\u279c</span> <span class="directory">~</span> '.concat(e,"</div>"),c.hasOwnProperty(e)?n+=c[e]:(n+='<div class="terminal-line">no such command: '.concat(e,"</div>"),console.log("Oops! no such command")),a.innerHTML="".concat(a.innerHTML,'<div class="terminal-line">').concat(n,"</div>"),a.scrollTop=a.scrollHeight)}(n),void(s.innerHTML="")):void(s.innerHTML=n+e.key)})),document.addEventListener("DOMContentLoaded",(function(){s=document.getElementById("userInput"),a=document.getElementById("terminalOutput"),document.getElementById("dummyKeyboard").focus(),console.log("Application loaded")})),document.addEventListener("contextmenu",(function(e){e.preventDefault()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.6381ead1.chunk.js.map