// Fonctionnalité 1 :

footer = document.querySelector("footer")
var nb_click = 1;

var display_click = function(){ 
	console.log("clique numéro " + nb_click)
	nb_click+=1

}

footer.addEventListener("click", display_click)


// Fonctionnalité 2 :

hamburger = document.querySelector(".navbar-toggler-icon")
header = document.querySelector("#navbarHeader")

console.log(hamburger)
console.log(header)

var cancel_collapse = function(){ 

		header.classList.toggle("collapse")

}

hamburger.addEventListener("click", cancel_collapse)


// Fonctionnalité 3 :

edit = document.querySelector(".btn-outline-secondary")
var card = document.querySelector(".card-text")
console.log(edit)
console.log(card)

var add_red = function(){
	card.style.color = "red"
}

edit.addEventListener("click", add_red)


// Fonctionnalité 4 : Faire sur la seconde card

var card_all = document.querySelectorAll(".card-text")
var edit_all = document.querySelectorAll(".btn-outline-secondary")

console.log(card_all[1])
console.log(edit_all[1])

var add_color = function(){
	if(card_all[1].style.color === "red"){
	card_all[1].style.color = "green"
}
	else {
		card_all[1].style.color = "red"
	}
}

edit_all[1].addEventListener("click", add_color)


// Fonctionnalité 5 :

var bootstrap = document.querySelector("link")
var navbar = document.querySelector("header")
console.log(bootstrap.href)
console.log(navbar)

var change_href = function(){
	if(bootstrap.disabled==true){
		bootstrap.disabled=false;
	}
	else{
		bootstrap.disabled=true;
	}

}

navbar.addEventListener("dblclick", change_href)



// Fonctionnalité 6 :

var views = document.querySelectorAll(".btn-success")
var imgs = document.querySelectorAll(".card-img-top")
var cards = document.querySelectorAll(".card-text")


// fontion d'agrandissement des cartes

var reduce_card = function(index){

	imgs[index].style.width = "20%";
	cards[index].style.display = 'none';

}

// fontion d'agrandissement des cartes

var grow_card = function(index){

	imgs[index].style.width = "100%";
	cards[index].style.display = 'block';

}

// itération sur chacune des views

views.forEach(function(view, index){
	view.addEventListener("mouseover", function(){

		if(cards[index].style.display === 'none'){
			grow_card(index);
		}
		else{
			reduce_card(index);
		}
	});
});


    





