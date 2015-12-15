window.onload = function(){

	var input = document.getElementById('inputFile');
	var button = document.getElementById('button');
	
	var video = document.getElementById('video');
	var encoder = new Video();

	button.onclick = function(){

		var files = input.files;

		encoder.compile(files,function(url){
			video.src = url;
		});
	};
}