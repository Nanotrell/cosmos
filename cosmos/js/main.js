
let navButton = $("nav")[0].getElementsByTagName("button")[0].getElementsByTagName("img")[0];
navButton.style.transform = "rotateX(0deg)";
navButton.onclick = function(){
	if (navButton.style.transform == "rotateX(0deg)") {
		navButton.style.transform = "rotateX(180deg)";
		document.getElementsByClassName("nav-block")[0].style.height = "300px";
		document.getElementsByClassName("nav-block")[0].style.padding = "60px 0 20px 0";
		document.getElementsByClassName("nav-block")[0].style.opacity = "1";
	} else {
		navButton.style.transform = "rotateX(0deg)";
		document.getElementsByClassName("nav-block")[0].style.height = "0";
		document.getElementsByClassName("nav-block")[0].style.padding = "0";
		document.getElementsByClassName("nav-block")[0].style.opacity = "0";
	};
};


document.addEventListener('DOMContentLoaded', function() {
	let TextBlocks = document.querySelectorAll('.text');
	
	function checkBlocksVisibility() {
		let windowHeight = window.innerHeight;
		for (let index = 0; index < TextBlocks.length; index++) {
			let blockPositionTop = TextBlocks[index].getBoundingClientRect().top;
			let blockPositionBottom = TextBlocks[index].getBoundingClientRect().bottom;

			if (blockPositionTop < windowHeight - 10 && blockPositionBottom > 10) {
				TextBlocks[index].style.opacity = 1;
			} else {
				TextBlocks[index].style.opacity = 0;
			}
		}
	}

	checkBlocksVisibility();

	window.addEventListener('scroll', function() {
					checkBlocksVisibility();
	});
});



// let SectionItems3 = document.getElementsByClassName("sect3-item");

// function Sect3() {
// 	console.log(1);
// 	for (let index = 0; index < SectionItems3.length; index++) {

// 		if (SectionItems3[index].classList.contains('sect3-tr') == true) {
// 			SectionItems3[index].classList.remove('sect3-tr');
// 			SectionItems3[index].classList.add('sect3-br');
// 		} else if (SectionItems3[index].classList.contains('sect3-br') == true) {
// 			SectionItems3[index].classList.remove('sect3-br');
// 			SectionItems3[index].classList.add('sect3-bl');
// 		} else if (SectionItems3[index].classList.contains('sect3-bl') == true) {
// 			SectionItems3[index].classList.remove('sect3-bl');
// 			SectionItems3[index].classList.add('sect3-tl');
// 		} else if (SectionItems3[index].classList.contains('sect3-tl') == true) {
// 			SectionItems3[index].classList.remove('sect3-tl');
// 			SectionItems3[index].classList.add('sect3-tr');
// 		}
// 	};
// };


// var sect3Timer = setInterval(Sect3, 10000);
