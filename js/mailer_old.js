$(document).ready(function() { // вся магия после загрузки страницы
	$("#ajaxform, #ajaxform2").submit(function(){ // перехватываем все при событии отправки

     	//$('.file-send-btn').css('visibility', 'hidden');

     	//$('#ajaxform .file-send-btn').before('<div class="thanx">Спасибо!</div>');
		//alert(data.files[0].name);
		//alert(filename);
		var form = $(this); // запишем форму, чтобы потом не было проблем с this
		var error = false; // предварительно ошибок нет
		form.find('input, textarea').each( function(){ // пробежим по каждому полю в форме

			// if ($(this).val() == '') { // если находим пустое
			// 	alert('Заполните поле "'+$(this).attr('placeholder')+'"!'); // говорим заполняй!
			// 	error = true; // ошибка
			// }
			
		});
		if (!error) { // если ошибки нет
			var data = form.serialize(); // подготавливаем данные
			$.ajax({ // инициализируем ajax запрос
			   type: 'POST', // отправляем в POST формате, можно GET
			   url: 'handler.php', // путь до обработчика, у нас он лежит в той же папке
			   dataType: 'json', // ответ ждем в json формате
			   data: data, // данные для отправки
		       beforeSend: function(data) { // событие до отправки
		            form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
		          },
		       success: function(data){ // событие после удачного обращения к серверу и получения ответа
		       		if (data['error']) { // если обработчик вернул ошибку
		       			alert(data['error']); // покажем её текст
		       		} else { // если все прошло ок
		       			$('#modal_form .modal-inner1').hide();
     					$('#modal_form .modal-inner2').show();
     					$('#ajaxform .file-send-btn').animate({'marginLeft' : '-150px', 'opacity' : '0'}, 800);
     	                $('#ajaxform .file-send-btn').before('<div class="thanx">Спасибо!</div>');
     	                $('#ajaxform .thanx').animate({'marginLeft' : '-280px', 'opacity' : '1'}, 1500);
		       		}
		         },
		       error: function (xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
		            alert(xhr.status); // покажем ответ сервера
		            alert(thrownError); // и текст ошибки
		         },
		       complete: function(data) { // событие после любого исхода
		            form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
		         }
		                  
			     });
		}
		return false; // вырубаем стандартную отправку формы
	});
});