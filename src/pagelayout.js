let body = document.getElementsByTagName("BODY")[0];

let createAdd = function (elements) {
	//Creates section and adds it to designated area
	for (let i = 0; i < elements.length; i++) {
		let current = document.createElement(elements[i].type);
		if (elements[i].id) {
			current.setAttribute("id", elements[i].id);
		}
		if (elements[i].src) {
			current.src = elements[i].src;
		}
		if (elements[i].content) {
			current.innerText = elements[i].content;
		}
		if (elements[i].class) {
			current.classList.add(elements[i].class);
		}
		if (elements[i].classTwo) {
			current.classList.add(elements[i].classTwo);
		}
		if (elements[i].grid) {
			current.style["grid-area"] = elements[i].grid;
		}
		if (elements[i].placeholder) {
			current.setAttribute("placeholder", elements[i].placeholder);
		}
		if (elements[i].style) {
			current.style.display = elements[i].style;
		}
		if (elements[i].function) {
			current.onclick = elements[i].function;
		}
		if (elements[i].area === "body") {
			body.appendChild(current);
		}
		else {
			let area = document.getElementById(elements[i].area);
			area.appendChild(current);
		}
	}
};

export {createAdd};