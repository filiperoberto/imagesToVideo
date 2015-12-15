function Video() {
	
	var video = new Whammy.Video(15);
	var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 300;

	this.compile = function(files,callback) {

		var imageList = [];

		for(var i=0;i<files.length;i++) {
			
			var img = new Image();
			var imageURL = URL.createObjectURL(files[i]);
			var count = 0;

			img.onload = function() {

                        //a custom fade in and out slideshow
                        context.globalAlpha = 0.2;
                        context.drawImage(this, 0, 0, canvas.width, canvas.height);
                        video.add(context);
                        context.clearRect(0,0,context.canvas.width,context.canvas.height);
                        context.globalAlpha = 0.4;
                        context.drawImage(this, 0, 0, canvas.width, canvas.height);
                        video.add(context);
                        context.clearRect(0,0,context.canvas.width,context.canvas.height);
                        context.globalAlpha = 0.6;
                        context.drawImage(this, 0, 0, canvas.width, canvas.height);
                        video.add(context);
                        context.clearRect(0,0,context.canvas.width,context.canvas.height);
                        context.globalAlpha = 0.8;
                        context.drawImage(this, 0, 0, canvas.width, canvas.height);
                        video.add(context);                       
                        context.clearRect(0,0,context.canvas.width,context.canvas.height);
                        context.globalAlpha = 1;
                        context.drawImage(this, 0, 0, canvas.width, canvas.height);

                        video.add(context);
                        video.add(context);
                        video.add(context);
                        video.add(context);
                        video.add(context);
                        video.add(context);
                        video.add(context);

                        context.clearRect(0,0,context.canvas.width,context.canvas.height);
                        context.globalAlpha = 0.8;
                        context.drawImage(this, 0, 0, canvas.width, canvas.height);
                        video.add(context);
                        context.clearRect(0,0,context.canvas.width,context.canvas.height);
                        context.globalAlpha = 0.6;
                        context.drawImage(this, 0, 0, canvas.width, canvas.height);
                        video.add(context);
                        context.clearRect(0,0,context.canvas.width,context.canvas.height);
                        context.globalAlpha = 0.4;
                        context.drawImage(this, 0, 0, canvas.width, canvas.height);
                        video.add(context);

                        count++;
                              
                        if(count === files.length) {
                        	var blob = video.compile();
                        	var url = URL.createObjectURL(blob);
                        	callback(url);
                        }
                    };

     		 img.src = imageURL;
		}
	}

}