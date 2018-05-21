window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
});

function init() {
	document.stopForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		var stopId = document.stopForm.stopId.value;
		console.log(stopId);
		if (!isNaN(stopId) && stopId > 0) {
			getStop(stopId);

		}
	});
	document.createStop.create.addEventListener('click', function(event) {
		event.preventDefault();
		var city = document.createStop.city.value;
		var state = document.createStop.state.value;
		var milesDriven = document.createStop.milesDriven.value;
		var time = document.createStop.time.value;
		var timeElapsed = document.createStop.timeElapsed.value;

		createStop(city, state, milesDriven, time, timeElapsed);

	});
	document.deleteStop.deleteStop.addEventListener('click', function(event) {
		event.preventDefault();
		var stopId = document.stopForm.stopId.value;
		console.log(stopId);

		deleteStop(stopId);
	});
	document.updateStop.update.addEventListener('click', function(event) {
		event.preventDefault();
		var stopId = document.stopForm.stopId.value;
		var city = document.createStop.city.value;
		var state = document.createStop.state.value;
		var milesDriven = document.createStop.milesDriven.value;
		var time = document.createStop.time.value;
		var timeElapsed = document.createStop.timeElapsed.value;

		updateStop(stopId, city, state, milesDriven, time, timeElapsed);

	});
	document.stopForm.getAllStops.addEventListener('click', function(event) {
		event.preventDefault();

		getAllStops();
	});
	
	document.stopForm.getTotalMiles.addEventListener('click', function(event) {
		event.preventDefault();

		getTotalMiles();
	});

	function createStop(city, state, milesDriven, time, timeElapsed) {
		event.preventDefault();
		var stop = {};
		stop.city = city, stop.state = state, stop.milesDriven = milesDriven,
				stop.time = time, stop.timeElapsed = timeElapsed;

		var stopJson = JSON.stringify(stop);
		console.log(stopJson);
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'api/stops/', true);
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.onreadystatechange = function() {
			if (this.readyState === 4) {
				if (this.status === 200 || this.status === 201) {

					var newStop = JSON.parse(this.responseText);
					console.log(stop);
					displayStop(stop);
				} else {
					console.error("An error has occurred");
					console.error(xhr.status + ': ' + xhr.responseText);
				}
			}
		}

		xhr.send(stopJson);
	}

	function getStop(stopId) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'api/stops/' + stopId, true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if ((xhr.status == 200 || xhr.status == 201)
						&& xhr.responseText != "") {
					console.log(xhr.responseText);
					var stop = JSON.parse(xhr.responseText);
					console.log(stop);
					displayStop(stop);
				} else {
					console.log("Stop not found.");
					console.error(xhr.status + ': ' + xhr.responseText);
					var stopData = document.getElementById('stopData');
					stopData.textContent = 'Stop not found.';
				}
			}
		};
		xhr.send(null);
	}

	function displayStop(stop) {
		var dataDiv = document.getElementById('stopData');
		var id = document.createElement('h1');
		var addInfo = document.createElement('ul');
		var city = document.createElement('li');
		var state = document.createElement('li');
		var milesDriven = document.createElement('li');
		var time = document.createElement('li');
		var timeElapsed = document.createElement('li');
		dataDiv.textContent = '';

		id.textContent = stop.id;
		city.textContent = stop.city;
		state.textContent = stop.state;
		milesDriven.textContent = stop.milesDriven;
		time.textContent = stop.time;
		timeElapsed.textContent = stop.timeElapsed;

		addInfo.appendChild(id);
		addInfo.appendChild(city);
		addInfo.appendChild(state);
		addInfo.appendChild(milesDriven);
		addInfo.appendChild(time);
		addInfo.appendChild(timeElapsed);
		dataDiv.appendChild(addInfo);

	}
	function deleteStop(stopId) {
		var xhr = new XMLHttpRequest();

		xhr.open('DELETE', 'api/stops/' + stopId, true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if ((xhr.status == 200 || xhr.status == 201)
						&& xhr.responseText != "") {
					console.log(xhr.responseText);
					var stop = JSON.parse(xhr.responseText);
					console.log(stop);
					displayStop(stop);
				} else {
					console.log("Stop not found.");
					console.error(xhr.status + ': ' + xhr.responseText);
					var stopData = document.getElementById('stopData');
					stopData.textContent = 'Stop not found.';
				}
			}
		};
		xhr.send(null);
	}

	function updateStop(stopId, city, state, milesDriven, time, timeElapsed) {
		var stop = {};
		stop.city = city, stop.state = state, stop.milesDriven = milesDriven,
				stop.time = time, stop.timeElapsed = timeElapsed;

		var stopJson = JSON.stringify(stop);
		console.log(stopJson);
		var xhr = new XMLHttpRequest();
		xhr.open('PATCH', 'api/stops/' + stopId, true);
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.onreadystatechange = function() {
			if (this.readyState === 4) {
				if (this.status === 200 || this.status === 201) {

					var newStop = JSON.parse(this.responseText);
					console.log(stop);
					displayStop(stop);
				} else {
					console.error("An error has occurred");
					console.error(xhr.status + ': ' + xhr.responseText);
				}
			}
		}

		xhr.send(stopJson);
	}
	function getAllStops() {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'api/stops/', true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if ((xhr.status == 200 || xhr.status == 201)
						&& xhr.responseText != "") {
					console.log(xhr.responseText);
					var stop = JSON.parse(xhr.responseText);
					console.log(stop);
					displayAll(stop);
				} else {
					console.log("Stop not found.");
					console.error(xhr.status + ': ' + xhr.responseText);
					var stopData = document.getElementById('stopData');
					stopData.textContent = 'Stop not found.';
				}
			}
		};
		xhr.send(null);
	}

	function displayAll(stops) {
		var tableDiv = document.getElementById('allStops');
		var table = document.createElement('table');
		table.style.border = '1px solid black';

		var tableHeader = document.createElement('thead');
		var tableHeaderRow = document.createElement('tr');
		var tableHeaderRowColumn1 = document.createElement('th');
		var tableHeaderRowColumn2 = document.createElement('th');
		var tableHeaderRowColumn3 = document.createElement('th');
		var tableHeaderRowColumn4 = document.createElement('th');
		var tableHeaderRowColumn5 = document.createElement('th');
		var tableHeaderRowColumn6 = document.createElement('th');
		
		
		
		
		tableDiv.textContent = '';

		tableHeader.textContent = "All Stops:";

		tableHeaderRowColumn1.textContent = "Id#";
		tableHeaderRowColumn2.textContent = "City";
		tableHeaderRowColumn3.textContent = "State";
		tableHeaderRowColumn4.textContent = "Miles Driven";
		tableHeaderRowColumn5.textContent = "Time";
		tableHeaderRowColumn6.textContent = "Time Elapsed";
		

		tableHeaderRow.appendChild(tableHeaderRowColumn1);
		tableHeaderRow.appendChild(tableHeaderRowColumn2);
		tableHeaderRow.appendChild(tableHeaderRowColumn3);
		tableHeaderRow.appendChild(tableHeaderRowColumn4);
		tableHeaderRow.appendChild(tableHeaderRowColumn5);
		tableHeaderRow.appendChild(tableHeaderRowColumn6);
		tableHeader.appendChild(tableHeaderRow);
		table.appendChild(tableHeader);

		var tableBody = document.createElement('tbody');

		stops.forEach(function(value, index, array) {
			var tableBodyRow = document.createElement('tr');

			var tableBodyRowIdColumn = document.createElement('td');
			var tableBodyRowCityColumn = document.createElement('td');
			var tableBodyRowStateColumn = document.createElement('td');
			var tableBodyRowMilesDrivenColumn = document.createElement('td');
			var tableBodyRowTimeColumn = document.createElement('td');
			var tableBodyRowTimeElapsedColumn = document.createElement('td');

			console.log('value =' + value);

			tableBodyRowIdColumn.textContent = value.id;
			tableBodyRowCityColumn.textContent = value.city;
			tableBodyRowStateColumn.textContent = value.state;
			tableBodyRowMilesDrivenColumn.textContent = value.milesDriven;
			tableBodyRowTimeColumn.textContent = value.time;
			tableBodyRowTimeElapsedColumn.textContent = value.timeElapsed;

			tableBodyRow.appendChild(tableBodyRowIdColumn);
			tableBodyRow.appendChild(tableBodyRowCityColumn);
			tableBodyRow.appendChild(tableBodyRowStateColumn);
			tableBodyRow.appendChild(tableBodyRowMilesDrivenColumn);
			tableBodyRow.appendChild(tableBodyRowTimeColumn);
			tableBodyRow.appendChild(tableBodyRowTimeElapsedColumn);
			tableBody.appendChild(tableBodyRow);
		});

		table.appendChild(tableBody);
		document.body.appendChild(table);
	}

	function getTotalMiles() {
		var totalMiles = 0;
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'api/stops/', true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if ((xhr.status == 200 || xhr.status == 201)
						&& xhr.responseText != "") {
					console.log(xhr.responseText);
					var stop = JSON.parse(xhr.responseText);
					console.log(stop);
					
					stop.forEach(function(value, index, array) {
						totalMiles += value.milesDriven;
					});
					console.log("totalMiles =" + totalMiles)
					displayTotalMiles(totalMiles)
				} else {
					console.log("Stop not found.");
					console.error(xhr.status + ': ' + xhr.responseText);
					var stopData = document.getElementById('stopData');
					stopData.textContent = 'Stop not found.';
				}
			}
		};
		xhr.send(null);
	}
	function displayTotalMiles(totalMiles) {
		var dataDiv = document.getElementById('stopData');
		var miles = document.createElement('h1');
		
		
		dataDiv.textContent = 'Total Miles Driven:';

		miles.textContent = totalMiles;
		
		dataDiv.appendChild(miles);
		
	}
}
