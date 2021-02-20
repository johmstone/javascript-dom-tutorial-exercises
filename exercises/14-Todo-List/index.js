// Your code here
let x = document.getElementById("addToDo");
let y = document.querySelector("ul");
let w = document.getElementsByClassName("fa-trash");

x.addEventListener("keyup", e => {
	if (e.key === "Enter") {
		console.log(x.value);
		let content = `<li>
					        <span><i class="fa fa-trash"></i></span> ${x.value}
				        </li>`;
		//li.textContent = content;
		y.innerHTML += content;
		cleanInput();
	}
});

function cleanInput() {
	x.value = "";
}

y.addEventListener("click", e => {
	const targetElem = e.target.parentNode;

	if (targetElem.nodeName === "SPAN") {
		//console.log(targetElem.parentNode);
		y.removeChild(targetElem.parentNode);
	} else {
		//console.log(targetElem);
		y.removeChild(targetElem);
	}
	//targetElem.parentNode.removeChild(targetElem);
});
