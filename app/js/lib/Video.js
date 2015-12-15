function Video() {
	
	var encoder = new Whammy.Video(15);

	this.compile = function(files,callback) {

		var imageList = [];

		for(var i=0;i<files.length;i++) {
			
			var image = new Image();
			var url = (window.webkitURL || window.URL).createObjectURL(files[i]);

			image.src = url;
			image.onload = function () {
        
        		var canvas = document.createElement("canvas"),
          		canvasContext = canvas.getContext("2d");
        		canvas.width = image.width;
        		canvas.height = image.height;
        		canvasContext.drawImage(image, 0, 0, image.width, image.height);
       			var dataURL = canvas.toDataURL('image/webp', 0);

       			encoder.add(dataURL);
     		 };
		}

		encoder.compile(function(output){
			var url = (window.webkitURL || window.URL).createObjectURL(output);
			callback(url);
		})
	}

}