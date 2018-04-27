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

function checkTotal() {
	alert("Transaction Successfully Added.")
	var sum = !!localStorage.getItem('price') ? JSON.parse(localStorage.getItem('price')): [];
	var summer = 0;
	for (i=0;i<document.listForm.length;i++) {
	  if (document.listForm[i].checked) {
	  	summer = summer + parseInt(document.listForm[i].value);
	  	document.listForm.total.value = summer;
	  }
	}
	sum.push(summer);
	localStorage.setItem('price',JSON.stringify(sum));
}

function getValue() {
	var date = !!localStorage.getItem('date') ? JSON.parse(localStorage.getItem('date')): [];
	var d = new Date();
	var s = d.toLocaleDateString();
	date.push(s);
	localStorage.setItem('date',JSON.stringify(date));
	var first = document.getElementById('name').value;
	var nameFirst = !!localStorage.getItem('name') ? JSON.parse(localStorage.getItem('name')): [];
	nameFirst.push(first);
	localStorage.setItem('name',JSON.stringify(nameFirst));
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

function reload(){
	window.location.reload();
}

function showAll(){
	
	for(let i = 0;i < localStorage.length;i++){
		//var fullname = localStorage.getItem('name');
		var fullname = JSON.parse(localStorage.getItem('name'));
		var fullLength = fullname.length;
		//var today = localStorage.getItem('date');
		var today = JSON.parse(localStorage.getItem('date'));
		var todayLength = today.length;
		//var service = localStorage.getItem('service');
		var service = JSON.parse(localStorage.getItem('service'));
		var servLength = service.length;
		//var price = localStorage.getItem('price')
		var price = JSON.parse(localStorage.getItem('price'))
		var priceLength = price.length;
	}
	console.log(price);
	var toAdd = document.createDocumentFragment();
	for(var i = 0; i < fullLength;i++){
		var newDiv = document.createElement('div');
		newDiv.id = 'r'+i;
		newDiv.className = 'display';
		toAdd.appendChild(newDiv);
		//result[i] = "Patient Name:"+fullname[i] +"<br/> Date: "+ today[i] +"<br/> Service(s): "+service[i]+"<br/> Price: "+price[i];
		//document.getElementById('r'+i).innerHTML = result[i];
	}
	document.body.appendChild(toAdd);

	for(var i = 0; i < fullLength;i++){
		var result = "Patient Name:"+fullname[i] +"<br/> Date: "+ today[i] +"<br/> Service(s): "+service[i]+"<br/> Price: "+price[i];
		document.getElementById('r'+i).innerHTML = result;
	}

}



/*function showAll(){
	for(let i = 0;i < localStorage.length;i++){
		//var fullname = localStorage.getItem('name');
		var fullname = JSON.parse(localStorage.getItem("name"));
		var nameLength = fullname.length;
		//var today = localStorage.getItem('date');\
		var today = JSON.parse(localStorage.getItem("date"));
		var todayLength = today.length;

		var service = localStorage.getItem('service');
		var price = JSON.parse(localStorage.getItem("price"));
		var priceLength = price.length;
		}
	for(var b = 0; b < nameLength; b++){
		//document.getElementById('storageOut').innerHTML ="<fieldset> <legend>Transactions</legend><div id="storageOublyat"></div></fieldset>" fullname[b];
		console.log(fullname[b]);
		
		//document.write(fullname[b]);
		
	}
		
	/*for (var xx = 0; xx < arrayLength;xx++){
		var result = "Patient Name:"+fullname[xx] +"<br/> Date: "+ today[xx] +"<br/> Price: "+price[xx];
		}
		document.getElementById('storageOut').innerHTML = result;
	}
*/

//AJAX CODE FOR SENDING TO THE SERVER
function sendAllData(){

	var fullname = localStorage.getItem('name');
	var last = localStorage.getItem('last');
	var today = localStorage.getItem('date');
	var service = localStorage.getItem('service');
	var price = localStorage.getItem('price')

	var result = "Patient Name:"+fullname +"<br/> Date: "+ today +"<br/> Service(s): "+service+"<br/> Price: "+price;
	
	var request = new XMLHttpRequest();
	request.open('POST','localhost', true);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	request.send(result);
}