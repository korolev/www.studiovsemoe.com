$(document).ready(function(){

//Осуществляем предзагрузку картинок!

function init() {
	return false;
	// quit if this function has already been called
	if (arguments.callee.done) return;
	
	// flag this function so we don't do the same thing twice
	arguments.callee.done = true;

	// preload images
    preload([
		//'images/header-bg1.jpg',
		'images/header-bg2.jpg',
		'images/header-bg3.jpg',
		'images/header-bg4.jpg',
		'images/header-bg5.jpg',
		'images/header-bg6.jpg',
		'images/header-bg7.jpg',
		'images/header-bg8.jpg',
		'images/header-bg9.jpg',
		'images/header-bg10.jpg',
		'images/social_icons.png',
		'images/soc-icons-5pc.png',
		'images/soc-icons-5pc-active.png',
		'images/soc-icons-6pc.png',
		'images/soc-icons-6pc-active.png',
		'images/slider-ar-gray-next-active.png',
		'images/slider-ar-gray-next-active2.png',
		'images/slider-ar-gray-next-active-red.png',
		'images/slider-ar-gray-next-red.png',
		'images/partners/1.png',
		'images/partners/1-a.png',
		'images/partners/2.png',
		'images/partners/2-a.png',
		'images/partners/3.png',
		'images/partners/3-a.png',
		'images/partners/4.png',
		'images/partners/4-a.png',
		'images/partners/5.png',
		'images/partners/5-a.png'
	]);

   };

function preload(images) {
    if (typeof document.body == "undefined") return;
    try {

        var div = document.createElement("div");
        var s = div.style;
		    s.position = "absolute";
        s.top = s.left = 0;
        s.visibility = "hidden";
        s.height = "1px";
        s.width = "1px";
        s.overflow = "hidden";
        document.body.appendChild(div);
		div.innerHTML = "<img src=\"" + images.join("\" /><img src=\"") + "\" />";
	 }
	 catch(e) {
        // Error. Do nothing.
	}
}

setTimeout(init,4000);

}); 