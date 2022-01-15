function onclickrec(id) {
		location='https://garmonyvkusa.com/recept.html?tid=' + id;
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
