
//taga ala value ti first,last tapos jay date automatic :))
function set() {

	if (typeof(Storage) !== "undefined") {  
	//First Name
	var first = document.getElementById('name').value;
	var nameFirst = !!localStorage.getItem('name') ? JSON.parse(localStorage.getItem('name')): [];
	nameFirst.push(first);
	localStorage.setItem('name',JSON.stringify(nameFirst));
	//Date
	var date = !!localStorage.getItem('date') ? JSON.parse(localStorage.getItem('date')): [];
	var d = new Date();
	var s = d.toLocaleDateString();
	date.push(s);
	localStorage.setItem('date',JSON.stringify(date));

		
	//Amount/Price
		//todo
	
	} else {  
   	document.write('browser not supported');
	}  
}
//Events binded to insertData button
	var eventhehe = document.getElementById('insertData');
	eventhehe.addEventListener('click', function() {
     set();
     getValue();
     getPrice();
	});
	

	/*var eventsum = document.getElementById('getSum');
	eventsum.addEventListener('click',function(){
		getPrice();
	});*/

//E save na jay value ti checkbox nga ada check na hahaha
/*function addService(){
	var serArr = !!localStorage.getItem('str') ? JSON.parse(localStorage.getItem('str')): [];
	var checkedValue = null; 
	var inputElements = document.getElementsByClassName('messageCheckbox');
	var tempVal = null;
	for(var i=0; i < 10; i++){
      	if(inputElements[i].checked === true){
	        checkedValue = inputElements[i].name;
	        serArr.push(checkedValue);      
	    }
	    
	    localStorage.setItem('str',JSON.stringify(serArr));
	}	
}
*/

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

function getValue() {
	var myArray = !!localStorage.getItem('service') ? JSON.parse(localStorage.getItem('service')) : [];
 	var checks = document.querySelectorAll('.messageCheckbox:checked');
  	var myChecks = [];
  	if (!checks.length) return;
		for (i = 0; i < checks.length; i++) {
		  myChecks.push(checks[i].name);
		}
		  myArray.push(myChecks.join(','));  
		  localStorage.setItem('service', JSON.stringify(myArray));
}
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

function clearStorage(){
		window.localStorage.clear();
		location.reload();
}

//Ipakita na amin lool
function showAll(){
	for(let i = 0;i < localStorage.length;i++){
		var fullname = localStorage.getItem('name');
		var last = localStorage.getItem('last');
		var today = localStorage.getItem('date');
		var service = localStorage.getItem('service');
		var price = localStorage.getItem('price')

		var result = "Patient Name:"+fullname +"<br/> Date: "+ today +"<br/> Service(s): "+service+"<br/> Price: "+price;
		document.getElementById('storageOut').innerHTML = result;
	}
}
//para jay summation ti amount for rendered services (ijay checklist)
function checkTotal() {
		document.listForm.total.value = '';
		var sum = 0;
		for (i=0;i<document.listForm.choice.length;i++) {
		  if (document.listForm.choice[i].checked) {
		  	sum = sum + parseInt(document.listForm.choice[i].value);
			localStorage.setItem('price',JSON.stringify(sum));
		  }
		}
		document.listForm.total.value = sum;
	}


