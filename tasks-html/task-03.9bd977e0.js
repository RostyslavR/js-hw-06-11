!function(){document.head.insertAdjacentHTML("beforeend","<style>\n  .gallery\n  {\n    display: flex;\n    flex-wrap: \n    wrap;gap: 10px;\n    justify-content: center;\n    align-items: baseline;\n  }\n  </style>");const e=document.querySelector(".gallery"),t=[{url:"https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"White and Black Long Fur Cat"},{url:"https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"Orange and White Koi Fish Near Yellow Koi Fish"},{url:"https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"Group of Horses Running"}].map((({url:e,alt:t})=>`<img\n   src = ${e}\n   alt = ${t}\n   width = 400\n   />\n   `)).join("");e.insertAdjacentHTML("afterbegin",t)}();
//# sourceMappingURL=task-03.9bd977e0.js.map
