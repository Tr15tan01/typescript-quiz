(this["webpackJsonptypescript-quiz"]=this["webpackJsonptypescript-quiz"]||[]).push([[0],{23:function(n,t,e){},25:function(n,t,e){},29:function(n,t,e){"use strict";e.r(t);var r,a,c,o,i,s=e(0),u=e.n(s),l=e(15),d=e.n(l),b=(e(23),e(3)),p=e(4),f=e.n(p),x=e(9),g=e(2),j=(e(25),e(5)),h=e(6),m=e.p+"static/media/bg.92bedd0a.jpg",O=Object(h.a)(r||(r=Object(j.a)(["\nhtml {\n    height: 100vh;\n}\n\nbody {\n    background-image: url(",");\n    background-size: cover;\n    margin: 0;\n    padding 0 20px;\n    display: flex;\n    justify-content: center;\n}\n\np {\n    color: gray;\n}\n\n* {\n    box-sizing: border-box;\n}\n"])),m),v=h.b.div(a||(a=Object(j.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\t> p {\n\t\tcolor: #fff;\n\t}\n\t.score {\n\t\tcolor: #fff;\n\t\tfont-size: 2rem;\n\t\tmargin: 0 auto 1rem;\n\t}\n\th1 {\n\t\tfont-family: Arial;\n\t\tbackground-image: linear-gradient(180deg, #fff, #87f1ff);\n\t\tfont-weight: 400;\n\t\tbackground-size: 100%;\n\t\tbackground-clip: text;\n\t\t-webkit-background-clip: text;\n\t\t-webkit-text-fill-color: transparent;\n\t\t-moz-background-clip: text;\n\t\t-moz-text-fill-color: transparent;\n\t\tfilter: drop-shadow(2px 2px #0085a3);\n\t\tfont-size: 70px;\n\t\ttext-align: center;\n\t\tmargin: 20px;\n\t}\n\t.start,\n\t.next {\n\t\tcursor: pointer;\n\t\tbackground: linear-gradient(180deg, dodgerblue, lightblue);\n\t\tborder: none;\n\t\tbox-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n\t\tborder-radius: 10px;\n\t\theight: 40px;\n\t\tmargin: 20px 0;\n\t\tpadding: 0 40px;\n\t}\n\t.start {\n\t\tmax-width: 200px;\n\t}\n"]))),w=h.b.div(c||(c=Object(j.a)(["\n  max-width: 1200px;\n  background: #ebfeff;\n  border-radius: 10px;\n  // border: 2px solid gray;\n  padding: 30px;\n  transition: all 0.5s ease;\n  box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.6);\n  text-align: center;\n  animation: fadeIn .6s;\n  p {\n    font-size: 1rem;\n  }\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"]))),k=h.b.div(o||(o=Object(j.a)(["\n  transition: all 0.3s ease;\n  :hover {\n    opacity: 0.8;\n  }\n  button {\n    cursor: pointer;\n    user-select: none;\n    font-size: 0.8rem;\n    width: 100%;\n    height: 40px;\n    margin: 5px 0;\n    background: ",";\n    border: 3px solid #ffffff;\n    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n    color: #fff;\n    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n  }\n"])),(function(n){var t=n.correct,e=n.userClicked;return t?"linear-gradient(90deg, #56FFA4, #59BC86)":!t&&e?"linear-gradient(90deg, #FF5656, #C16868)":"linear-gradient(90deg, #56ccff, #6eafb4)"})),y=e(1),S=function(n){var t=n.question,e=n.answer,r=n.callback,a=n.userAnswer,c=n.questionNr,o=n.totalQuestions;return Object(y.jsxs)(w,{children:["Question Card",Object(y.jsxs)("p",{className:"number",children:["Question: ",c," / ",o]}),Object(y.jsx)("p",{dangerouslySetInnerHTML:{__html:t}}),Object(y.jsx)("div",{children:e.map((function(n){return Object(y.jsx)(k,{correct:(null===a||void 0===a?void 0:a.correctAnswer)===n,userClicked:(null===a||void 0===a?void 0:a.answer)===n,children:Object(y.jsx)("button",{disabled:!!a,value:n,onClick:r,children:Object(y.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})})},n)}))})]})},z=e(13);!function(n){n.EASY="easy",n.MEDIUM="medium",n.HARD="hard"}(i||(i={}));var C=function(){var n=Object(x.a)(f.a.mark((function n(t,e){var r,a;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://opentdb.com/api.php?amount=".concat(t,"&difficulty=").concat(e,"&type=multiple"),n.next=3,fetch(r);case 3:return n.next=5,n.sent.json();case 5:return a=n.sent,n.abrupt("return",a.results.map((function(n){return Object(z.a)(Object(z.a)({},n),{},{answers:(t=[].concat(Object(b.a)(n.incorrect_answers),[n.correct_answer]),Object(b.a)(t).sort((function(){return Math.random()-.5})))});var t})));case 7:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),A=10,Q=function(){var n=Object(s.useState)(!1),t=Object(g.a)(n,2),e=t[0],r=t[1],a=Object(s.useState)([]),c=Object(g.a)(a,2),o=c[0],u=c[1],l=Object(s.useState)(0),d=Object(g.a)(l,2),p=d[0],j=d[1],h=Object(s.useState)([]),m=Object(g.a)(h,2),w=m[0],k=m[1],z=Object(s.useState)(0),Q=Object(g.a)(z,2),q=Q[0],F=Q[1],I=Object(s.useState)(!0),_=Object(g.a)(I,2),N=_[0],M=_[1];console.log("fetchQuizQuestions",C(A,i.EASY));var T=function(){var n=Object(x.a)(f.a.mark((function n(){var t;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(!0),M(!1),n.next=4,C(A,i.EASY);case 4:t=n.sent,u(t),F(0),k([]),j(0),r(!1);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(O,{}),Object(y.jsxs)(v,{children:[Object(y.jsx)("h1",{children:"QUIZ"}),N||w.length===A?Object(y.jsx)("button",{className:"start",onClick:T,children:"Start The Quiz"}):null,N?null:Object(y.jsxs)("p",{className:"score",children:["Score: ",q]}),e?Object(y.jsx)("p",{children:"Loading Questions..."}):null,!e&&!N&&Object(y.jsx)(S,{questionNr:p+1,totalQuestions:A,question:o[p].question,answer:o[p].answers,userAnswer:w?w[p]:void 0,callback:function(n){if(!N){var t=n.currentTarget.value,e=o[p].correct_answer===t;e&&F((function(n){return n+1}));var r={question:o[p].question,answer:t,correct:e,correctAnswer:o[p].correct_answer};k((function(n){return[].concat(Object(b.a)(n),[r])}))}}}),N||e||w.length!==p+1||9===p?null:Object(y.jsx)("button",{className:"next",onClick:function(){var n=p+1;n===A?M(!0):j(n)},children:"Next Question"})]})]})},q=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,30)).then((function(t){var e=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;e(n),r(n),a(n),c(n),o(n)}))};d.a.render(Object(y.jsx)(u.a.StrictMode,{children:Object(y.jsx)(Q,{})}),document.getElementById("root")),q(console.log)}},[[29,1,2]]]);
//# sourceMappingURL=main.6ee53599.chunk.js.map