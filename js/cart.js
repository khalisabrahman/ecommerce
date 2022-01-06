function increment() {
	var element = document.getElementById('counter');
	var value = element.innerHTML;

	++value;
	element.innerHTML = value;
}

function decrement() {
	var element = document.getElementById('counter');
	var value = element.innerHTML;

	if (value > 0) {
		--value;
		element.innerHTML = value;
	}
}
