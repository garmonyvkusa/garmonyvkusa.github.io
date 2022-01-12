function onclickrec(id) {
		location='../recept.php?tid=' + id;
	}
	    	checkwindow();
	window.addEventListener('resize', checkwindow);

	function checkwindow(){
		var w = window.innerWidth;
		var h = window.innerHeight;
    if (document.getElementById("iframe")==null) {}
    else {
    $("#iframe").height(document.getElementById("iframe").offsetWidth * 0.5625 - 9);
    }
		if (h<500) {
				document.getElementById("computer").hidden = true;
				document.getElementById("mobile").hidden = false;
		}
		else if (w<1220) {
			document.getElementById("computer").hidden = true;
			document.getElementById("mobile").hidden = false;
		}
		else {
			document.getElementById("computer").hidden = false;
			document.getElementById("mobile").hidden = true;
		}

}
function like() {
	if ($('.avf:checked').val()=='on') {
		//dislike
		const element = document.getElementById("jke");
		element.innerHTML = parseInt($("#jke").text()) - 1;
		$.post( "/like.php", { id: pageindex, like: "0"}).done(function(data) {
		    if(data=="signup") {location="https://garmonyvkusa.com/signup.php";}
		    else if(data=="login") {location="https://garmonyvkusa.com/login.php";}
		});
	}
	else {
		//like
		const element = document.getElementById("jke");
		element.innerHTML = parseInt($("#jke").text()) + 1;
		$.post( "/like.php", { id: pageindex, like: "1"}).done(function(data) {
		    if(data=="signup") {location="https://garmonyvkusa.com/signup.php";}
		    else if(data=="login") {location="https://garmonyvkusa.com/login.php";}
		});
	}
}
