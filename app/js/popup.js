var callback = document.getElementById('callback_btn');

var callbackAction = new function() {
	var popup = document.getElementById('popup');

	var nameField = document.getElementById('fname');
	var phoneField = document.getElementById('fnumber');
	var adressField = document.getElementById('fadress');
	var submit = document.getElementById('popup_btn');

	function open() {
		popup.style.visibility = 'visible';
		popup.style.opacity = 1;
	}

	function close() {
		popup.style.visibility = 'hidden';
		popup.style.opacity = 0;
	}

	submit.addEventListener('click', function() {
		close();
	});

	return {
		open : open
	}
};

callback.addEventListener('click', callbackAction.open);

