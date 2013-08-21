function handleSearch(e) {
	alert('test');
	var search = document.getElementById("name").value;
	// What parts of the contact we will search
	var fields = [ "displayName", "name" ];
	// Options for the search
	var options = new ContactFindOptions();
	options.filter = search;
	options.multiple = true;
	document.getElementById("results").innerHTML = "Searching...";
	navigator.contacts.find(fields, contactSuccess, contactError, options);
}

function contactError(e) {
	document.getElementById("results").innerHTML = "";
	navigator.notification.alert("Sorry, an error was thrown!");
}

function contactSuccess(results) {
	// No max, so we will default to only 10
	var s = "";
	for ( var i = 0; i < Math.min(10, results.length); i++) {
		s += "<p>" + results[i].displayName + "</p>";
	}
	document.getElementById("results").innerHTML = s;
}
