
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
	
	} else {  
   	document.write('browser not supported');
	}  
}

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

function getService() {
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

function clearStorage(){
		window.localStorage.clear();
		location.reload();
}

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

function checkTotal() {
	alert("Transaction Successfully Added.")
	window.close();
	var sum = !!localStorage.getItem('price') ? JSON.parse(localStorage.getItem('price')): [];
	var summer = 0;
	for (i=0;i<document.listForm.choice.length;i++) {
	  if (document.listForm.choice[i].checked) {
	  	summer = summer + parseInt(document.listForm.choice[i].value);
	  	document.listForm.total.value = summer;
	  }
	}
	sum.push(summer);
	localStorage.setItem('price',JSON.stringify(sum));
}
