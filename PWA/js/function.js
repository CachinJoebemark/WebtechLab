
//taga ala value ti first,last tapos jay date automatic :))
function set() {

	if (typeof(Storage) !== "undefined") {  
	//First Name
	var first = document.getElementById('name').value;
	var nameFirst = !!localStorage.getItem('name') ? JSON.parse(localStorage.getItem('name')): [];
	nameFirst.push(first);
	localStorage.setItem('name',JSON.stringify(nameFirst));
	//Date
	//todo
	/*Icomplete
	var date = !!localStorage.getItem('date') ? JSON.parse(localStorage.getItem('date')): [];
	var d = new Date();
	var s = d.toLocaleDateString();
	*/
	} else {  
   	document.write('browser not supported');
	}  
}
//Events binded to insertData button
	var eventhehe = document.getElementById('insertData');
	eventhehe.addEventListener('click', function() {
     set();
     getPrice();
	});

	//Services
	//todo
	/*Incomplete
	*/

/*
*/
//Alaen na jay total boi ikarga na iti array nga agnagan ti sumArr
function getPrice(){
	var summer = !!localStorage.getItem('price') ? JSON.parse(localStorage.getItem('price')): [];
	var summerI = document.getElementsByClassName('messageCheckbox');
	var minA = 0;
	for(var i=0; i < 10; i++){
      	if(summerI[i].checked === true){
	        summerPrice = Number(summerI[i].value);
	        summer.push(summerPrice);            
	    }
	}
	localStorage.setItem('price',JSON.stringify(summer));
}
//Clears localStorage
function clearStorage(){
		window.localStorage.clear();
		location.reload();
}
//Add pop up function here - Julius
function showConfirm(){
	var r=confirm("Are you sure you want to clear the storage? Please be reminded that this may not be undone.")
		if(r==true){
			alert("The storage has been cleared!")
			clearStorage();
		}
		else{
			alert("You chose not to clear the storage.")
		}
}
//
//Ipakita na amin lool
function showAll(){
	for(let i = 0;i < localStorage.length;i++){
		var fullname = localStorage.getItem('name');
		//var last = localStorage.getItem('last');
		//var today = localStorage.getItem('date');
		var service = localStorage.getItem('service');
		//var price = localStorage.getItem('price')

		var result = "Patient Name:"+fullname +" "+service;
		document.getElementById('storageOut').innerHTML = result;
	}
}


