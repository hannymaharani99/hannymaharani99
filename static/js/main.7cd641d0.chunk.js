(this["webpackJsonpweb-portfolio"]=this["webpackJsonpweb-portfolio"]||[]).push([[0],{16:function(e,n,s){},17:function(e,n,s){},18:function(e,n){var s,a,t=[38],i={help:'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">research</span>, <span class="code">education</span>, <span class="code">skills</span>,<span class="code"> portfolio</span>',about:"Hello, I'm Maharani from Indonesia. I have passion in Cybersecurity especially in Red Team training. Also I like painting pictures when I\u2019m not working.",skills:'<span class="skill">Specialization:</span>Web Dev, Python, SQL for Data Analyst, Cloud Services<br><span class="skill">Training:</span>Security+, Alibaba Cloud Associate, AWS Cloud Associate, IBM Data Analyst Training, IBM Cybersecurity Training, Google IT Support Training, CCNA Security & CyberOps<br><span class="skill">Interest:</span>Penetration Testing, IR',education:'<span class="school">Graduate Study:</span>Information & Network Security Management<br><span class="school">Undergraduate Study:</span>Majoring Broadband Telecomunication, Electrical Engineering',experience:'<span class="exp">Professional:</span>Technical Application Support, Technical Writer<br><span class="exp">Freelance:</span>QA Tester, Web Designer',research:'<span class="school">Graduate Research:</span><br>The Blockchain Concept in building a Trusted Ecosystem in the Internet of Things<br><span class="school">Undergraduate Research:</span><br>Honeypot Webserver and Home Network Detection System using Raspberry Pi<br>Smart Aquaponic using Android',portfolio:'<span class="porto">Web Design:</span><a href="https://hannymaharani99.github.io/portfolio/ " target="_blank" rel="noreferrer noopener">Random Quote Generator</a><br><span class="porto">Red Team:</span><a href="https://medium.com/@maharanirach/jenkins-misconfig-exploitation-1e3afdac6130" target="_blank" rel="noreferrer noopener">TryHackMe Write-Up: Jenkins Misconfig Exploit</a><br><span class="porto">Static Web Application:</span><a href="https://hannymaharani99.github.io/musicplayer/" target="_blank" rel="noreferrer noopener">Mini Music Player App</a>'};document.addEventListener("keydown",(function(e){8!==e.keyCode&&46!==e.keyCode||(s.innerHTML=s.innerHTML.slice(0,s.innerHTML.length-1))})),document.addEventListener("keypress",(function(e){var n=s.innerHTML;if(!t.includes(e.keyCode))return"Enter"===e.key?(function(e){var n;0!==(e=e.toLowerCase()).length&&(n='<div class="terminal-line"><span class="success">\u279c</span> <span class="directory">~</span> '.concat(e,"</div>"),i.hasOwnProperty(e)?n+=i[e]:(n+='<div class="terminal-line">no such command: '.concat(e,"</div>"),console.log("Oops! no such command")),a.innerHTML="".concat(a.innerHTML,'<div class="terminal-line">').concat(n,"</div>"),a.scrollTop=a.scrollHeight)}(n),s.innerHTML="",void this.clearInput()):void(s.innerHTML=n+e.key)})),document.addEventListener("DOMContentLoaded",(function(){s=document.getElementById("userInput"),a=document.getElementById("terminalOutput"),document.getElementById("dummyKeyboard").focus(),console.log("Application loaded")})),document.addEventListener("contextmenu",(function(e){e.preventDefault()}))},20:function(e,n,s){"use strict";s.r(n);s(2);var a=s(10),t=s.n(a),i=(s(16),s(17),s(18),s(4)),c=s(8),r=s(11),o=s(0),l=s(1);var d=function(){return Object(l.jsx)("body",{children:Object(l.jsxs)("section",{class:"hero is-fullheight",children:[Object(l.jsx)("div",{class:"hero-body",children:Object(l.jsx)("div",{class:"container",children:Object(l.jsxs)("div",{class:"columns",children:[Object(l.jsx)("div",{class:"column is-3 is-flex",children:Object(l.jsx)("div",{class:"column-child sidebar shadow",children:Object(l.jsxs)("div",{class:"sidebar-header has-text-centered",children:[Object(l.jsx)("div",{class:"photo",children:Object(l.jsx)("a",{href:"https://hannymaharani99.github.io",children:Object(l.jsx)("img",{src:"logo-header.gif"})})}),Object(l.jsx)("div",{title:"memoji-maharani",children:Object(l.jsx)("img",{src:"new-icon.gif"})}),Object(l.jsx)("br",{}),Object(l.jsx)("h2",{class:"header-name",children:"Maharani"}),Object(l.jsx)("h5",{children:"Cybersecurity Enthusiast"}),Object(l.jsx)("br",{}),Object(l.jsx)(r.a,{"aria-label":"contact",children:Object(l.jsx)(o.b.Provider,{value:{className:"shared-class",size:30},children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(c.a,{variant:"secondary",size:"sm",href:"https://www.linkedin.com/in/maharani28/",target:"_blank",rel:"noreferrer noopener",children:Object(l.jsx)(i.c,{})}),Object(l.jsx)(c.a,{variant:"secondary",size:"sm",href:"https://github.com/hannymaharani99",target:"_blank",rel:"noreferrer noopener",children:Object(l.jsx)(i.a,{})}),Object(l.jsx)(c.a,{variant:"secondary",size:"sm",href:"https://medium.com/@maharanirach",target:"_blank",rel:"noreferrer noopener",children:Object(l.jsx)(i.d,{})})]})})}),Object(l.jsx)("div",{class:"resume"})]})})}),Object(l.jsx)("div",{class:"column is-flex",children:Object(l.jsxs)("div",{class:"column-child terminal shadow",children:[Object(l.jsxs)("div",{class:"terminal-bar dark-mode",children:[Object(l.jsx)("div",{class:"icon-btn close"}),Object(l.jsx)("div",{class:"icon-btn min"}),Object(l.jsx)("div",{class:"icon-btn max"}),Object(l.jsx)("div",{class:"terminal-bar-text is-hidden-mobile dark-mode-text",children:"guest@hanilinux: ~"})]}),Object(l.jsxs)("div",{class:"terminal-window primary-bg",onClick:"document.getElementById('dummyKeyboard').focus();",children:[Object(l.jsx)("div",{class:"terminal-output",id:"terminalOutput",children:Object(l.jsx)("div",{class:"terminal-line",children:Object(l.jsxs)("span",{class:"help-msg",children:["Welcome to Maharani's website \u2014 Type ",Object(l.jsx)("span",{class:"code",children:"help"})," for a list of supported commands."]})})}),Object(l.jsxs)("div",{class:"terminal-line",children:[Object(l.jsx)("span",{class:"success",children:"\u279c"})," ",Object(l.jsx)("span",{class:"directory",children:"~"})," ",Object(l.jsx)("span",{class:"user-input",id:"userInput"}),Object(l.jsx)("input",{type:"text",id:"dummyKeyboard",class:"dummy-keyboard"})]})]})]})})]})})}),Object(l.jsx)("footer",{class:"footer",children:Object(l.jsx)("div",{class:"content has-text-centered",children:Object(l.jsxs)("p",{children:["Built with ",Object(l.jsx)(i.b,{})," in ",Object(l.jsx)(i.e,{})]})})})]})})};t.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.7cd641d0.chunk.js.map