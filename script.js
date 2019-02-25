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

var view = document.querySelectorAll(".btn-success")
var img = document.querySelectorAll(".card-img-top")
var card2 = document.querySelectorAll(".card-text")
console.log(view)
console.log(img)
console.log(card2)




var change_card = function(){


	img[1].style.width = "20%"
	card2[1].innerHTML = ""

}


view[1].addEventListener("mouseover", change_card)





