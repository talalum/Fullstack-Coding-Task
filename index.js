function workWithJson(json){
	const a = json;
	for (let i = 0; i < a.length; i++) {
			let element = document.createElement("option");   
			element.innerHTML = a[i].country;                 
			element.value = a[i].country;
			element.className = a[i].continent;
			let x = document.getElementById("selectCountry");
			x.appendChild(element);	
	}
}

async function  getCountries(){
	await fetch("list-of-countries/country-by-continent.json")
	.then(response => response.json())
	.then(json => { workWithJson(json)});
}


function ShowInfo() {
	let selectedCountry = document.getElementById("selectCountry").value;
	if(selectedCountry != "Click to open the List of countries...")
		window.open("https://en.wikipedia.org/wiki/" + selectedCountry)
}

function filter(){
	let x = document.getElementById("selectContinent").value;
	let div = document.getElementById("country");
	let select = div.getElementsByTagName("option");
	afterfilter(select);
	for( let i = 0 ; i < select.length ; i++){
		if (select[i].className !== x ){
			select[i].style.display = "none";
		}
	}
}

function afterfilter(select){
	for( let i = 0 ; i < select.length ; i++){
		select[i].style.display = "";
	}
}

getCountries();
