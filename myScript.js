

function show_hide() {
	var click = document.getElementById("drop-content");
	if (click.style.display === "none") {
		document.getElementById("myForm").reset();
		click.style.display = "block";
	} else {
		click.style.display = "none";
	}
}
function save(name, about, url) {
	var artist = {
		name: name,
		about: about,
		url: url
	}
	window.localStorage.setItem(artist.name.toLowerCase(), JSON.stringify(artist));
}

function search() {
	var searchName = document.getElementById("myInput").value.toLowerCase(); // Notice change here
	var card_container = document.querySelector("#card_container");
	var child = card_container.lastElementChild;
	while (child) {
		card_container.removeChild(child);
		child = card_container.lastElementChild;
	}
	for (let i = 0; i < localStorage.length; i++) {
		if (localStorage.key(i).includes(searchName)) {
			var keys = localStorage.key(i);
			var artist = JSON.parse(localStorage.getItem(keys));
			var name = document.getElementById("aName").value;
			var about = document.getElementById("aAbout").value;
			var url = document.getElementById("aUrl").value;
			name = artist.name;
			about = artist.about;
			url = artist.url;

			addArtists(name, about, url);
		}
	}
	show_hide().click.style.display = "none";
}
function add() {
	var name = document.getElementById("aName").value;
	var about = document.getElementById("aAbout").value;
	var url = document.getElementById("aUrl").value;
	addArtists(name, about, url);
	save(name, about, url);
}
function addArtists(name, about, url) {
	//localStorage.clear();


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
	deleteBtn.addEventListener('click', (e) => {
		var name = deleteBtn.parentNode.parentNode.childNodes[1].firstChild.textContent.toLowerCase();
		localStorage.removeItem(name);
		deleteBtn.parentNode.parentNode.parentNode.removeChild(deleteBtn.parentNode.parentNode)

	});

	btnDiv.appendChild(deleteBtn);
	document.getElementById('card_container').appendChild(card);

	show_hide();
}
