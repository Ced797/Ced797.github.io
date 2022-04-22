var clk = document.getElementById('btn');
var x = 0
clk.addEventListener("click",() => {
//	alert('hello');
//	page.preventDefault();
	var en = document.createElement("input");
	 var ex = document.getElementById('hello').appendChild(en);
x++;
ex.setAttribute("name","link");
			ex.setAttribute("name","link_"+x);

});
