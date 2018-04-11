function print() {
	var id = document.getElementById('id').value;
	var first = document.getElementById('first').value;
	var last = document.getElementById('last').value;
	var date = document.getElementById('dateOfServices').value;
	var service = document.getElementById('service').value;
	var amount = document.getElementById('amount').value;
	var button = document.getElementById('insertData').value;
	var storageOut = document.getElementById('storageOut').value;

	console.log(id);
	console.log(first);
	console.log(last);
	console.log(date);
	console.log(service);
	console.log(amount);

	if (id && first && last && date && service && amount){
		localStorage.setItem("id",id);
		localStorage.setItem("first",first);
		localStorage.setItem("last",last);
		localStorage.setItem("date",date);
		localStorage.setItem("service",service);
		localStorage.setItem("amount",amount);
		location.reload();
	}
	
	var dataResult = id + first + last + date + service + amount;

	document.getElementById('storageOut').innerHTML = dataResult;

}
	document.getElementById('insertData').addEventListener('click', print);	
