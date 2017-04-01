const textGetter = new function() {

	const textRequest = new XMLHttpRequest;
	textRequest.open('GET', '/json/text.json', false);
	textRequest.send(null);

	function getJSONText() {
		if (textRequest.status == 200) {  
		    return JSON.parse(textRequest.responseText);
		} else {
			console.log('ERROR: Request code of \"text.json\" isn\'t 200 (' + textRequest.status + ')');
		}
		return null;
	}

	return {
		getJSONText: getJSONText
	}
}

const textObject = textGetter.getJSONText();

function fillText(text) {
	fillHeader(text);
	fillMerits(text);
	fillTeam(text);
	
	function fillHeader(text) {
		document.getElementById('logo_title').innerText = text.header.logo.title;
		document.getElementById('logo_subtitle').innerText = text.header.logo.subtitle;
		const menuItems = document.getElementsByClassName('navbar_menu_item');
		for(let i = 0; i < menuItems.length; ++i) {
			menuItems[i].innerText = text.header.menu[i];
		}
		document.getElementById('slider_title').innerText = text.header.slider.title;
		document.getElementById('slider_subtitle').innerText = text.header.slider.subtitle;
	}

	function fillMerits(text) {
		document.getElementById('merits_title').innerText = text.merits.title;
		document.getElementById('merits_subtitle').innerText = text.merits.subtitle;
		const boxItems = document.getElementsByClassName('merits_box_item');
		for(let i = 0; i < boxItems.length; ++i) {
			boxItems[i].childNodes[3].innerText = text.merits.box[i].title;
			boxItems[i].childNodes[5].innerText = text.merits.box[i].subtitle;
		}
	}

	function fillTeam(text) {
		document.getElementById('team_title').innerText = text.team.title;
		document.getElementById('team_subtitle').innerText = text.team.subtitle;
		const teamItems = document.getElementsByClassName('team_box_item');
		for(let i = 0; i < teamItems.length; ++i) {
			teamItems[i].childNodes[3].innerText = text.team.box[i].name;
			teamItems[i].childNodes[5].innerText = text.team.box[i].position;
		}
		const followButtons = document.getElementsByClassName('team_button_text');
		for(let i = 0; i < followButtons.length; ++i) {
			followButtons[i].innerText = text.team.button;
		}
	}

}

fillText(textObject);