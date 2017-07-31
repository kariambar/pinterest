//Funcion para recorrer el json
$(document).ready(function() {
	var title, description, user, img, hashtag, modal, contModal, iconos;
	for (var i = 0; i < 20; i++) {
		title = '<h1>' + data[i].title + '</h1>';
		titulomodal = '<h5>' + data[i].title + '</h5>';
		description = '<p>'+ data[i].description +'</p>';
		iconos = '<div class="iconos"><i class="fa fa-upload iconsmodal" aria-hidden="true"></i>\
		<i class="fa fa-check iconsmodal" aria-hidden="true"></i><i class="fa fa-ellipsis-h iconsmodal" aria-hidden="true">\
		</i><button type="button" class="btn btn-default btn-save"><i class="fa fa-thumb-tack" aria-hidden="true"></i> Guardar</button></div>';
		dateHash = '<div class="contac-hash"><div class="img-pink>\
		<img src="dist/img/icon-pink2.png"></div><div class="user-hash">\
		<h4>' + data[i].user + '</h4><a href="#">#' + data[i].hashtag + '</a></div></div>';
		img = '<img src="dist/img/'+ data[i].image_url+'">';
//append que muestra las imagenes del json con sus datos + modal
		$('.contentainer-photos').append('<div class="container-json" data-toggle="modal" data-target="#'+ data[i].id +'">'+ img +'<div class="titlejson">'+ titulomodal + description + dateHash +'</div></div>');
		contModal =  '<div class="container-modal">' + iconos + titulomodal + img + iconos + dateHash + '<button type="button" class="btn btn-default btn-read">Leerlo</button>' + description + '</div>';
		modal = '<div class="modal fade" id="'+ data[i].id +'" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header">' + '</div>'+ contModal +'</div></div></div>';
		$('.contentainer-photos').append(modal);
	}
});