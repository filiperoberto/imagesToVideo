window.onload = function(){

	var input = document.getElementById('inputFile');
	var button = document.getElementById('button');
	
	var video = document.getElementById('video');
	var encoder = new Video();

	var files = [];

	input.onchange = function(e){
		files = e.target.files;
	}

	button.onclick = function(){
		
		encoder.compile(files,function(url){
			video.src = url;
		});
	};
}