function print() {

	if (typeof(Storage) !== "undefined") {  
	//First
	var nameFirst = !!localStorage.getItem('first') ? JSON.parse(localStorage.getItem('first')): [];
	var first = document.getElementById('first').value;
	nameFirst.push(first);
	localStorage.setItem('first',JSON.stringify(nameFirst));
	//Last
	var nameLast = !!localStorage.getItem('last') ? JSON.parse(localStorage.getItem('last')): [];
	var last = document.getElementById('last').value;
	nameLast.push(last);
	localStorage.setItem('last',JSON.stringify(nameLast));
	//Date
	var sDate = !!localStorage.getItem('date') ? JSON.parse(localStorage.getItem('date')) : [];
	var date = document.getElementById('dateDefault').value;
	sDate.push(date);
	localStorage.setItem('date',JSON.stringify(sDate));
	//Service
	/* daytoy adi jay agala ti value ti service
	var e = document.getElementById("listOfServices");
	var strUser = e.options[e.selectedIndex].value;
	*/
	var sService = !!localStorage.getItem('service') ? JSON.parse(localStorage.getItem('amount')) : [];
	var service = document.getElementById('service').value;
	sService.push(service);
	localStorage.setItem('service',JSON.stringify(sService));
	//Amount/Price
	var aAmount = !!localStorage.getItem('amount') ? JSON.parse(localStorage.getItem('amount')) : [];
	var amount = document.getElementById('amount').value;
	aAmount.push(amount);
	localStorage.setItem('amount', JSON.stringify(aAmount));
	
	} else {  
   	document.write('browser not supported');
	}  
	
	//var dataResult = first +" "+ last +" " + date +" " + service +" "+ amount;
    //document.getElementById('storageOut').innerHTML = dataResult;
}
	document.getElementById('insertData').addEventListener('click', print);	


function showAll(){
	for(let i = 0;i < localStorage.length;i++){
		var first = localStorage.getItem('first');
		//var finFirst = JSON.parse(first);
		var last = localStorage.getItem('last');
		//var finLast = JSON.parse(last);
		var service = localStorage.getItem('service');
		//var finService = JSON.parse(service);
		var amount = localStorage.getItem('amount');
		//var finAmount = JSON.parse(amount);
		//var result = finFirst +" ,"+ finLast +" ," + finService +" ,"+ finAmount; //Works ngem ada basit kamali na boiiiiii
		var result = first +" "+ last +" "+ date + " "+ service +" "+ amount;
		document.getElementById('storageOut').innerHTML = result;
	}
}

/*function sum(){
	var values = localStorage.getItem('amount');
	var data = JSON.parse(values);
	var sum = 0;

	data.forEach(function(ele){
		sum+=Number(ele.amount)
	})
	console.log(sum);
}*///Sad madi na e compute 


