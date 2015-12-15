function Video() {
	
	var encoder = new Whammy.Video();

	this.compile = function(files,callback) {

		var imageList = [];

		for(var i=0;i<files.length;i++) {
			
			var image = new Image();
			var url = URL.createObjectURL(files[i]);
			var count = 0;

			image.onload = function () {

				console.log('load image');
        
        		var canvas = document.createElement("canvas"),
          		canvasContext = canvas.getContext("2d");
        		canvas.width = 400;
        		canvas.height = 300;
        		canvasContext.drawImage(image, 0, 0, image.width, image.height);
        		var dataURL = canvas.toDataURL('image/webp');

       			encoder.add(dataURL,1000);

       			count++;

       			if(count===files.length) {
       				var blob = encoder.compile();

       				var url = URL.createObjectURL(blob);
					callback(url);
       			}
     		 };

     		 image.src = url;
		}
	}

}