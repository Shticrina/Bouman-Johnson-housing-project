let formData = {
	data: {
		"area": 90,
	    "property-type": "APARTMENT",
	    "rooms-number": 2,
	    "zip-code": 1000,
	    "open-fire": true,
	    "terrace": false,
	    "terrace-area": 50,
	    "facades-number": 4,
	    "building-state":"TO RENOVATE"
	}
};

let jsonFormData = JSON.stringify(formData);
document.getElementById('result').classList.add('d-none');

// Define headers
var myHeaders = new Headers({
    'Content-Type': 'application/json'
});

document.getElementById('submitBtn').addEventListener('click', function(event) {
	event.preventDefault();
	console.log('it works');

	let areaValue = document.getElementsByName("area")[0].value;
	let propertyTypeValue = document.getElementsByName("property-type")[0].value;
	let roomsNumberValue = document.getElementsByName("rooms-number")[0].value;
	let zipCodeValue = document.getElementsByName("zip-code")[0].value;
	let landAreaValue = document.getElementsByName("land-area")[0].value;
	let gardenValue = document.getElementsByName("garden")[0].checked;
	let gardenAreaValue = document.getElementsByName("garden-area")[0].value;
	let equippedKitchenValue = document.getElementsByName("equipped-kitchen")[0].checked;
	let swimmingpoolValue = document.getElementsByName("swimmingpool")[0].checked;
	let furnishedValue = document.getElementsByName("furnished")[0].checked;
	let openFireValue = document.getElementsByName("open-fire")[0].checked;	
	let terraceValue = document.getElementsByName("terrace")[0].checked;
	let terraceAreaValue = document.getElementsByName("terrace-area")[0].value;
	let facadesNumberValue = document.getElementsByName("facades-number")[0].value;
	let buildingStateValue = document.getElementsByName("building-state")[0].value;

	let formData = {
		data: {
			"area": areaValue,
			"property-type": propertyTypeValue,
			"rooms-number": roomsNumberValue,
			"zip-code": zipCodeValue,
			"land-area": landAreaValue,
			"garden": gardenValue,
			"garden-area": gardenAreaValue,
			"equipped-kitchen": equippedKitchenValue,
			// "full-address": '',
			"swimmingpool": swimmingpoolValue,
			"furnished": furnishedValue,
			"open-fire": openFireValue,
			"terrace": terraceValue,
			"terrace-area": terraceAreaValue,
			"facades-number": facadesNumberValue,
			"building-state": buildingStateValue
		}
	};
	// console.log(formData);

	fetch(`http://roberta-eliza-cors.herokuapp.com/predict`, { method: 'POST', headers: myHeaders, body: JSON.stringify(formData) })
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		document.getElementById('result').classList.remove('d-none');
		document.getElementById('price').innerHTML = data.prediction.price;

	})
	.catch(error => {console.error(error)});
});