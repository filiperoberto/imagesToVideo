window.onload = function(){

	var input = document.getElementById('inputFile');
	var button = document.getElementById('button');

	var videoWidth = document.getElementById('video-width');
	var videoHeight = document.getElementById('video-height');
	var videoFramerate = document.getElementById('video-framerate');

	var buttonsContainer = document.getElementById('download-buttons');
	
	var video = document.getElementById('video');

	var files = [];

	var index = 1;

	button.onclick = function(){

		var width = videoWidth.value;
		var height = videoHeight.value;
		var framerate = videoFramerate.value;

		var encoder = new Video(width,height,framerate);
		var files = input.files;

		encoder.compile(files,function(url){
			video.src = url;
			video.setAttribute('controls','');

			var a = createLink(url,"Download Vídeo "+index);
			buttonsContainer.appendChild(a);

			index++;
		});
	};

	function createLink(url,text) {
		var link = document.createElement('a');
		link.href = url;
		link.innerHTML = text;
		link.setAttribute('download','video.webm');
		link.className = 'btn btn-default';
		return link;
	}
}