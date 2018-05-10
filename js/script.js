$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
});
$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['1stpage', '2ndpage', '3rdpage', '4thpage', '5thpage'],
		sectionsColor: ['#fff', '#39BBA2', '#39BBA2', '#fff', '#39BBA2'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['모두의 Q&A 모카!', '모카만의 장점!', '문의하기', '찾아오기', '사이트맵'],
		responsiveWidth: 900,
		scrollingSpeed: 1000,
		afterResponsive: function(isResponsive){
		}
	});
});

// Modal script 
	// Kor
	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal 
	btn.onclick = function() {
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    } else if (event.target == modal2){
	    	modal2.style.display = "none";
	    }
	}

	// Jap
	// Get the modal
	var modal2 = document.getElementById('myModal2');

	// Get the button that opens the modal
	var btn2 = document.getElementById("myBtn2");

	// Get the <span> element that closes the modal
	var span2 = document.getElementsByClassName("close")[1];

	// When the user clicks the button, open the modal 
	btn2.onclick = function() {
	    modal2.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span2.onclick = function() {
	    modal2.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it

// 
if (screen.width <= 750) {
  window.location = "http://m.moqa.co.kr/";
}