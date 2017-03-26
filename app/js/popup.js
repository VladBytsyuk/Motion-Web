var callback = document.getElementById('callback_btn');

var callbackAction = new function() {
	var popup = document.getElementById('popup');

	var nameField = document.getElementById('fname');
	var phoneField = document.getElementById('fnumber');
	var adressField = document.getElementById('fadress');
	var submit = document.getElementById('popup_btn');

	function open() {
		nameField.value = '';
		phoneField.value = '';
		adressField.value = '';
		popup.style.visibility = 'visible';
		popup.style.opacity = 1;
	}

	function close() {
		popup.style.visibility = 'hidden';
		popup.style.opacity = 0;
	}

	function send(userInfo) {
		close();
	}

	submit.addEventListener('click', function() {
		nameField.style.borderColor = '#232324';
		phoneField.style.borderColor = '#232324';
		adressField.style.borderColor = '#232324';
		var nameRegEp = /^[a-zA-Z]{2,30}$/;
		var phoneRegExp = /^[0-9]{7,16}$/;
		var adressRegExp = /\S+@\S+\.\S+/;
		var isBreak = false;
		if (nameField.value === '' || !nameField.value.match(nameRegEp)) {
			nameField.style.borderColor = '#eb4f4e';
			isBreak = true;
		}
		if (phoneField.value === '' || !phoneField.value.match(phoneRegExp)) {
			phoneField.style.borderColor = '#eb4f4e';
			isBreak = true;
		}
		if (adressField.value === '' || !adressField.value.match(adressRegExp)) {
			adressField.style.borderColor = '#eb4f4e';
			isBreak = true;
		}
		if (isBreak) {
			return;
		}
		var userInfo = {
			name: nameField.value,
			phone: phoneField.value,
			adress: adressField.value
		}
		send(userInfo);
	});

	return {
		open : open
	}
};

callback.addEventListener('click', callbackAction.open);

