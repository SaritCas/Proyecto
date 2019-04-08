$(document).ready(function(){/*ejecuta hasta que todo el documento halla cargado*/

	$('.ir-arriba').click(finction()){/*envia hasta la parte de arriba*/
		$('body,html').animate({
			scrillTop:'0px'
		});
	}

});