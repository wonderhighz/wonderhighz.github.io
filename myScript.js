
function show_hide() {
	var click = document.getElementById("drop-content");
	if (click.style.display === "none") {
		document.getElementById("myForm").reset();
		click.style.display = "block";
	} else {
		click.style.display = "none";
	}
}

function addArtists() {
	var name = document.getElementById("aName").value;
	var about = document.getElementById("aAbout").value;
	var url = document.getElementById("aUrl").value;
	var card = document.createElement('div');

	card.className = "cardDiv";
	var image = document.createElement('img');
	image.src = url;
	card.appendChild(image);

	var container = document.createElement('div');
	container.className = "container";
	card.appendChild(container);
	var aName = document.createElement('h4');
	aName.textContent = name;
	container.appendChild(aName);

	var aAbout = document.createElement('p');
	aAbout.textContent = about;
	container.appendChild(aAbout);

	var btnDiv = document.createElement('div');
btnDiv.className = "deleteBtn";
card.appendChild(btnDiv);

	var deleteBtn = document.createElement('button');
	deleteBtn.textContent = 'Delete';
	deleteBtn.addEventListener('click', () => {
		deleteBtn.parentNode.parentNode.parentNode.removeChild(deleteBtn.parentNode.parentNode)
	});
	
	btnDiv.appendChild(deleteBtn);
	document.getElementById('card_container').appendChild(card);

	show_hide();

}
