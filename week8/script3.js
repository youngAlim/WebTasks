var arr=[{"maker":"Toyota","model":"Camry 50","price":50000},
{"maker":"Toyota","model":"Carina","price":40000},
{"maker":"Volkswagen","model":"Tuareg","price":35000},
{"maker":"Mercedes","model":"C100","price":45000}]

load=document.getElementsByTagName("button")[0];
sortByMaker=document.getElementById("sortByMaker");
sortByPrice=document.getElementById("sortByPrice");

sortByMaker.addEventListener("onClick",function maker(){
	console.log("5");
});


load.addEventListener("click",function(){
	
	cards=document.getElementById("cards");
	loading=document.getElementById("loading");
	loading.style.display="inline";	
	
	setTimeout(function(){
		loading.style.display="none";
		cards.innerHTML="";
		for (let i = 0;i<arr.length;i++){
		
		card=document.createElement("div"),card.className="card";
		price=document.createElement("div"),price.className="price";
		title=document.createElement("div"),title.className="title";
	
		title.innerHTML=arr[i]["maker"]+" "+arr[i]["model"];
		price.innerHTML=arr[i]["price"];
	
		card.appendChild(title);
		card.appendChild(price);
		cards.appendChild(card);
		}
	},500);
});

sortByMaker.addEventListener("click",function(){
	cards.innerHTML="";
	function compare(a,b) {
		if (a.maker < b.maker) return -1;
		if (a.maker > b.maker) return 1;
		return 0;
	}

	arr.sort(compare);
	for (let i = 0;i<arr.length;i++){
		
		card=document.createElement("div"),card.className="card";
		price=document.createElement("div"),price.className="price";
		title=document.createElement("div"),title.className="title";
	
		title.innerHTML=arr[i]["maker"]+" "+arr[i]["model"];
		price.innerHTML=arr[i]["price"];
	
		card.appendChild(title);
		card.appendChild(price);
		cards.appendChild(card);
		}
});

sortByPrice.addEventListener("click",function(){
	cards.innerHTML="";
	function compare(a,b) {
		if (a.price < b.price) return -1;
		if (a.price > b.price) return 1;
		return 0;
	}

	arr.sort(compare);
	for (let i = 0;i<arr.length;i++){
		
		card=document.createElement("div"),card.className="card";
		price=document.createElement("div"),price.className="price";
		title=document.createElement("div"),title.className="title";
	
		title.innerHTML=arr[i]["maker"]+" "+arr[i]["model"];
		price.innerHTML=arr[i]["price"];
	
		card.appendChild(title);
		card.appendChild(price);
		cards.appendChild(card);
		}
});


	
	


	











	
	
	
	




