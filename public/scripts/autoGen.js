function bod(){
	let para = document.querySelectorAll('p');
	let h2 = document.querySelectorAll('h2');
	let span = document.querySelectorAll('span');
	let div = document.querySelectorAll('div');
	let h1 = document.querySelectorAll('h1');
	
	console.log(document.body);
	if(document.querySelectorAll('p'))
	{
		for(let i = 0; i < para.length; i++)
		{
			para[i].setAttribute("class","paraClass_"+i);
			para[i].setAttribute("id","paraId_"+i);
		}

	}
	if(document.querySelectorAll('h2'))
	{
		for(let i = 0; i < h2.length; i++)
		{
			h2[i].setAttribute("class","h2Class_"+i);
			h2[i].setAttribute("id","h2Id_"+i);
		}

	}
	if(document.querySelectorAll('span'))
	{
		for(let i = 0; i < span.length; i++)
		{
			span[i].setAttribute("class","spanClass_"+i);
			span[i].setAttribute("id","spanId_"+i);
		}

	}
	if(document.querySelectorAll('h1'))
	{
		for(let i = 0; i < h1.length; i++)
		{
			h1[i].setAttribute("class","h1Class_"+i);
			h1[i].setAttribute("id","h1Id_"+i);
		}

	}
	if(document.querySelectorAll('h3'))
	{
		for(let i = 0; i < div.length; i++)
		{
			div[i].setAttribute("class","divClass_"+i);
			div[i].setAttribute("id","divId_"+i);
		}

	}
	if(document.querySelectorAll('div'))
	{
		for(let i = 0; i < div.length; i++)
		{
			div[i].setAttribute("class","div_"+i);
			div[i].setAttribute("id","div_"+i);
		}

	}
}
/*  IF SOME BULLSHIT HAPPENS. WHICH IT MIGHT IDK THIS IS JUST IN CASE IT DOES
function bod2(){
	let para = document.querySelectorAll('p');
	let h2 = document.querySelectorAll('h2');
	let span = document.querySelectorAll('span');
	let h1 = document.querySelectorAll('h1');
	let h3 = document.querySelectorAll('h3');

	if(document.querySelectorAll('p'))
	{
		for(let i = 0; i < para.length; i++)
		{
			para[i].setAttribute("class","paraclass_"+i);
			para[i].setAttribute("id","paraid_"+i);
		}

	}
	if(document.querySelectorAll('h2'))
	{
		for(let i = 0; i < h2.length; i++)
		{
			h2[i].setAttribute("class","h2class_"+i);
			h2[i].setAttribute("id","h2id_"+i);
		}

	}
	if(document.querySelectorAll('span'))
	{
		for(let i = 0; i < span.length; i++)
		{
			span[i].setAttribute("class","spanclass_"+i);
			span[i].setAttribute("id","spanid_"+i);
		}

	}
	if(document.querySelectorAll('h1'))
	{
		for(let i = 0; i < h1.length; i++)
		{
			h1[i].setAttribute("class","h1class_"+i);
			h1[i].setAttribute("id","h1id_"+i);
		}

	}
	if(document.querySelectorAll('h3'))
	{
		for(let i = 0; i < h3.length; i++)
		{
			h3[i].setAttribute("class","h3class_"+i);
			h3[i].setAttribute("id","h3id_"+i);
		}

	}

}
*/
