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
	fillPortfolio(text);
	fillPricing(text);
	
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

	function fillPortfolio(text) {
		document.getElementById('portfolio_title').innerText = text.portfolio.title;
		document.getElementById('portfolio_subtitle').innerText = text.portfolio.subtitle;
		const portfolioSlides = document.getElementsByClassName('portfolio_box');
		for(let i = 0; i < portfolioSlides.length; ++i) {
			const portfolioSlideItems = portfolioSlides[i].getElementsByClassName('portfolio_item');
			for (let j = 0; j < portfolioSlideItems.length; ++j) {
				portfolioSlideItems[j].childNodes[3].innerText = text.portfolio.box[i][j];
			}
		}
	}

	function fillPricing(text) {
		document.getElementById('pricing_info').innerText = text.pricing.info;
		const items = document.getElementsByClassName('pricing_item');
		const pricingItems = [ 
				items[0],
				document.getElementsByClassName('pricing_item_accent')[0],
				items[1]
		];
		for(let i = 0; i < pricingItems.length; ++i) {
			pricingItems[i]
					.getElementsByClassName(i == 1 ? 'pricing_title_accent' : 'pricing_title')[0]
					.innerText = text.pricing.box[i].title;
			pricingItems[i]
					.getElementsByClassName(i == 1 ? 'pricing_subtitle_accent' : 'pricing_subtitle')[0]
					.innerText = text.pricing.box[i].subtitle;
			const pricingOptions = pricingItems[i].getElementsByClassName('pricing_option');
			for (let j = 0; j < pricingOptions.length; ++j) {
				pricingOptions[j].innerText = text.pricing.box[i].options[j];
			}
			pricingItems[i].getElementsByClassName('pricing_dollar')[0].innerText = 
					text.pricing.currency;
			pricingItems[i].getElementsByClassName('pricing_value')[0].innerText = 
					text.pricing.box[i].value;
			pricingItems[i].getElementsByClassName('pricing_periodicity')[0].innerText = 
					text.pricing.periodicity;
			pricingItems[i]
					.getElementsByClassName(i == 1 ? 'pricing_button_accent' : 'pricing_button')[0]
					.innerText = text.pricing.button;				
		}
		
	}
}

fillText(textObject);