$(document).ready(function()
{  

	//Хак для IE. Подтягиваем блоки.
	function msieversion() {

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer, return version number
            $('.services-panel, .services-body').css({'marginTop' : '-129px'}, 0);
        else                 // If another browser, return 0
            //правило для других браузеров

	   return false;
	}

	msieversion();

	//Хак для IE. Подтягиваем блоки. END

	//Анимация левой панели услуг
	//$('.services-panel').animate({'marginLeft' : '-100px', 'opacity' : '0'}, 0).animate({'marginLeft' : '0px', 'opacity' : '1'}, 800);
	//Анимация левой панели услуг END
}); 