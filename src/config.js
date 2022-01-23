function importAll(r) {
	let images = {};
	r.keys().map((item) => { images[item.replace("./", "")] = r(item); });
	return images;
}

// eslint-disable-next-line no-undef
const images = importAll(require.context("./images", false, /\.(png|jpe?g|svg|webp)$/));



let headerArea = [
	{
		type: "div",
		id: "header",
		area: "body"
	},
	{
		type: "div",
		id: "headerInner",
		area: "header",
	},
	{
		type: "div",
		id: "searchArea",
		area: "headerInner"
	},
	{
		type: "input",
		inputType: "text",
		id: "searchBar",
		area: "searchArea",
		placeholder: "Search the site by keyword or phrase"
	},
	{
		type: "img",
		src: images["search.png"],
		id: "searchIcon",
		area: "searchArea"
	},
	{
		type: "div",
		id: "headerLogoArea",
		area: "headerInner"
	},
	{
		type: "img",
		src: images["headerLogo.png"],
		id: "headerLogo",
		area: "headerLogoArea"
	},
	{
		type: "p",
		id: "logoTitle",
		content: "GRACE",
		area: "headerLogoArea"
	},
	{
		type: "p",
		id: "logoSubtitle",
		content: "WITH DISTINCTION",
		area: "headerLogoArea"
	},
	{
		type: "div",
		id: "headerPhone",
		area: "headerInner"
	},
	{
		type: "p",
		id: "callUs",
		content: "Call Us 24 Hours a Day On:",
		area: "headerPhone"
	},
	{
		type: "h1",
		id: "phoneNumber",
		content: "0800 555 5555",
		area: "headerPhone",
	}

];

let stickyButtons = [
	{
		type: "div",
		id: "topSticky",
		area: "body",
		function: function () {
			document.body.scrollIntoView({behavior: "smooth"});
		}
	},
	{
		type: "p",
		id: "topUpArrow",
		content: "↑",
		area: "topSticky"
	},
	{
		type: "p",
		id: "topWord",
		content: "TOP",
		area: "topSticky"
	},
	{
		type: "div",
		id: "findDirectorSticky",
		class: "divHidden",
		area: "body"
	},
	{
		type: "div",
		id: "findDirectorStickyHeader",
		area: "findDirectorSticky",
		function: function () {
			document.getElementById("findDirectorStickyInner").classList.toggle("stickyInnerInvisible");
			document.getElementById("findDirectorSticky").classList.toggle("divHidden");
			if (document.getElementById("findDirectorClose").innerText === "X") {
				document.getElementById("findDirectorClose").innerText = "↑";
			}
			else {
				document.getElementById("findDirectorClose").innerText = "X";
			}
		}
	},
	{
		type: "p",
		id: "findDirectorHeaderText",
		content: "FIND A FUNERAL DIRECTOR",
		area: "findDirectorStickyHeader"
	},
	{
		type: "p",
		id: "findDirectorClose",
		content: "↑",
		area: "findDirectorStickyHeader",
	},
	{
		type: "div",
		id: "findDirectorStickyInner",
		class: "stickyInnerInvisible",
		area: "findDirectorSticky"
	},
	{
		type: "div",
		id: "stickySearchArea",
		area: "findDirectorStickyInner"
	},
	{
		type: "img",
		src: images["pin.png"],
		id: "pinLogo",
		area: "stickySearchArea"
	},
	{
		type: "input",
		inputType: "text",
		id: "stickySearchBar",
		area: "stickySearchArea",
		placeholder: "Enter postcode, town or location"
	},
	{
		type: "div",
		id: "stickySearchButton",
		area: "stickySearchArea"
	},
	{
		type: "img",
		src: images["search.png"],
		id: "stickySearchIcon",
		area: "stickySearchButton"
	},
	{
		type: "p",
		id: "stickySearchButtonText",
		content: "Search",
		area: "stickySearchButton"
	},
	{
		type: "p",
		id: "stickyCallUs",
		content: "Call us 24/7 on",
		area: "findDirectorStickyInner"
	},
	{
		type: "p",
		id: "stickyPhoneNumber",
		content: "0800 555 5555",
		area: "findDirectorStickyInner"
	}
];

let navBar = [
	{
		type: "div",
		id: "navContainer",
		area: "body"
	},
	{
		type: "nav",
		id: "navBar",
		area: "navContainer",
		grid: "navBar"
	},
	{
		type: "a",
		id: "navHome",
		class: "navBar",
		area: "navBar",
		grid: "navHome"
	},
	{
		type: "img",
		src: images["home.png"],
		id: "homeButton",
		area: "navHome"
	},
	{
		type: "a",
		id: "whenSomeoneDies",
		class: "navBar",
		classTwo: "dropdownHeaderOne",
		area: "navBar",
		content: "WHAT TO DO WHEN SOMEONE DIES",
		grid: "whenSomeoneDies"
	},
	{
		type: "a",
		id: "arrangingAFuneral",
		class: "navBar",
		area: "navBar",
		content: "ARRANGING A FUNERAL",
		grid: "arrangingAFuneral"
	},
	{
		type: "a",
		id: "prepaidPlans",
		class: "navBar",
		area: "navBar",
		content: "PREPAID FUNERAL PLANS",
		grid: "prepaidPlans"
	},
	{
		type: "a",
		id: "aboutUs",
		class: "navBar",
		area: "navBar",
		content: "ABOUT US",
		grid: "aboutUs"
	},
	{
		type: "a",
		id: "advice",
		class: "navBar",
		area: "navBar",
		content: "ADVICE",
		grid: "advice"
	},
	{
		type: "a",
		id: "findDirector",
		class: "navBar",
		area: "navBar",
		grid: "findDirector"
	},
	{
		type: "img",
		src: images["pin.png"],
		id: "pinLogo",
		area: "findDirector"
	},
	{
		type: "div",
		id: "findDirectorInner",
		area: "findDirector"
	},
	{
		type: "p",
		id: "findDirectorUpper",
		content: "FIND A FUNERAL DIRECTOR",
		area: "findDirectorInner"
	},
	{
		type: "p",
		id: "findDirectorLower",
		content: "Search by town or postcode",
		area: "findDirectorInner"
	},
];

let banner = [
	{
		type: "div",
		id: "banner",
		area: "body"
	},
	{
		type: "div",
		id: "bannerTextArea",
		area: "banner"
	},
	{
		type: "p",
		id: "bannerHeader",
		content: "LOCAL FUNERAL DIRECTORS ACROSS THE UK",
		area: "bannerTextArea"
	},
	{
		type: "p",
		id: "bannerTextOne",
		content: "Whether a loved one has just passed away or you need help arranging the funeral, our Funeral Directors are here to support you every step of the way.",
		area: "bannerTextArea"
	},
	{
		type: "p",
		id: "bannerTextTwo",
		content: "Find your local funeral director",
		area: "bannerTextArea"
	},
	{
		type: "div",
		id: "bannerSearchArea",
		area: "bannerTextArea"
	},
	{
		type: "img",
		src: images["pin.png"],
		id: "pinLogo",
		area: "bannerSearchArea"
	},
	{
		type: "input",
		inputType: "text",
		id: "bannerSearchBar",
		area: "bannerSearchArea",
		placeholder: "Enter postcode, town or location"
	},
	{
		type: "div",
		id: "bannerSearchButton",
		area: "bannerSearchArea"
	},
	{
		type: "img",
		src: images["search.png"],
		id: "bannerSearchIcon",
		area: "bannerSearchButton"
	},
	{
		type: "p",
		id: "bannerSearchButtonText",
		content: "Search",
		area: "bannerSearchButton"

	},
	{
		type: "div",
		id: "bannerImageArea",
		area: "banner"
	},
	{
		type: "img",
		src: images["bannerImage.jpg"],
		id: "bannerImage",
		area: "bannerImageArea"
	}

];

let howCanWeHelp = [
	{
		type: "div",
		id: "howCanWeHelpSection",
		area: "body"
	},
	{
		type: "p",
		id: "howCanWeHelpHeader",
		content: "How can we help?",
		area: "howCanWeHelpSection"
	},
	{
		type: "div",
		id: "howCanWeHelpLinksArea",
		area: "howCanWeHelpSection"
	},
	{
		type: "div",
		id: "howCanWeHelpLinkOne",
		class: "howCanWeHelpLinks",
		area: "howCanWeHelpLinksArea"
	},
	{
		type: "p",
		class: "howCanWeHelpLinkText",
		content: "I'm interested in a prepaid funeral plan",
		area: "howCanWeHelpLinkOne"
	},
	{
		type: "p",
		class: "arrow",
		content: "→",
		area: "howCanWeHelpLinkOne"
	},
	{
		type: "div",
		id: "howCanWeHelpLinkTwo",
		class: "howCanWeHelpLinks",
		area: "howCanWeHelpLinksArea"
	},
	{
		type: "p",
		class: "howCanWeHelpLinkText",
		content: "A loved one has passed away or will pass away soon",
		area: "howCanWeHelpLinkTwo"
	},
	{
		type: "p",
		class: "arrow",
		content: "→",
		area: "howCanWeHelpLinkTwo"
	}
];

let funeralServices = [
	{
		type: "div",
		id: "funeralServicesContainer",
		area: "body"
	},
	{
		type: "p",
		id: "funeralServicesHeader",
		content: "FUNERAL SERVICES WITH DISTINCTION",
		area: "funeralServicesContainer"
	},
	{
		type: "p",
		id: "funeralServicesSubheader",
		content: "We're one of the UK's most trusted providers of Funeral Services and Prepaid Funeral Plans",
		area: "funeralServicesContainer"
	},
	{
		type: "div",
		id: "articleCardContainer",
		area: "funeralServicesContainer"
	},
	{
		type: "div",
		class: "articleCard",
		id: "articleCardOne",
		area: "articleCardContainer"
	},
	{
		type: "img",
		src: images["articleOne.jpg"],
		class: "articleCardImage",
		area: "articleCardOne"
	},
	{
		type: "p",
		class: "articleCardHeader",
		content: "CORONAVIRUS PANDEMIC - FREQUENTLY ASKED QUESTIONS",
		area: "articleCardOne"
	},
	{
		type: "p",
		class: "articleCardContent",
		content: "Find a series of questions and answers on how funeral services and funeral plans may be affected by COVID-19.",
		area: "articleCardOne"
	},
	{
		type: "a",
		class: "articleCardFooter",
		content: "Find Out More     →",
		area: "articleCardOne"
	},
	{
		type: "div",
		class: "articleCard",
		id: "articleCardTwo",
		area: "articleCardContainer"
	},
	{
		type: "img",
		src: images["articleTwo.jpg"],
		class: "articleCardImage",
		area: "articleCardTwo"
	},
	{
		type: "p",
		class: "articleCardHeader",
		content: "COMPARE OUR PLANS",
		area: "articleCardTwo"
	},
	{
		type: "p",
		class: "articleCardContent",
		content: "Compare our range of Dignity Funeral Plans. All our plans offer the choice of burial or cremation. You can compare them to find the best option for you.",
		area: "articleCardTwo"
	},
	{
		type: "a",
		class: "articleCardFooter",
		content: "Compare Dignity Funeral Plans     →",
		area: "articleCardTwo"
	},
	{
		type: "div",
		class: "articleCard",
		id: "articleCardThree",
		area: "articleCardContainer"
	},
	{
		type: "img",
		src: images["articleThree.jpg"],
		class: "articleCardImage",
		area: "articleCardThree"
	},
	{
		type: "p",
		class: "articleCardHeader",
		content: "MEMORABLE, PERSONALISED FUNERALS",
		area: "articleCardThree"
	},
	{
		type: "p",
		class: "articleCardContent",
		content: "Our Funeral Directors share their memories of personalised funerals that reflect the life, hobbies and interests of the person who has died.",
		area: "articleCardThree"
	},
	{
		type: "a",
		class: "articleCardFooter",
		content: "Read more     →",
		area: "articleCardThree"
	},
];

let footer = [
	{
		type: "div",
		id: "footer",
		area: "body"
	},
	{
		type: "div",
		id: "footerLogoArea",
		area: "footer"
	},
	{
		type: "img",
		src: images["footerLogo.png"],
		id: "footerLogo",
		area: "footerLogoArea"
	},
	{
		type: "p",
		id: "footerLogoTitle",
		content: "GRACE",
		area: "footerLogoArea"
	},
	{
		type: "p",
		id: "footerLogoSubtitle",
		content: "WITH DISTINCTION",
		area: "footerLogoArea"
	},
	{
		type: "div",
		id: "footerLinksContainer",
		area: "footer"
	},
	{
		type: "div",
		id: "footerLinksOne",
		class: "footerLinksArea",
		area: "footerLinksContainer"
	},
	{
		type: "div",
		id: "footerLinksTwo",
		class: "footerLinksArea",
		area: "footerLinksContainer"
	},
	{
		type: "div",
		id: "footerLinksThree",
		class: "footerLinksArea",
		area: "footerLinksContainer"
	},
	{
		type: "div",
		id: "footerLinksFour",
		class: "footerLinksArea",
		area: "footerLinksContainer"
	},
	{
		type: "a",
		class: "footerLink",
		content: "About Grace",
		area: "footerLinksOne"
	},
	{
		type: "a",
		class: "footerLink",
		content: "Grace PLC",
		area: "footerLinksOne"
	},
	{
		type: "a",
		class: "footerLink",
		content: "Crematoria",
		area: "footerLinksOne"
	},
	{
		type: "p",
		id: "footerCall",
		content: "Call: 0800 555 5555",
		area: "footerLinksTwo"
	},
	{
		type: "p",
		id: "footerOr",
		content: "or",
		area: "footerLinksTwo"
	},
	{
		type: "a",
		class: "footerLink",
		content: "Contact us",
		area: "footerLinksTwo"
	},
	{
		type: "div",
		class: "footerLinkButton",
		id: "facebookButton",
		area: "footerLinksThree"
	},
	{
		type: "div",
		class: "footerLinkButton",
		id: "twitterButton",
		area: "footerLinksThree"
	},
	{
		type: "div",
		class: "footerLinkButton",
		id: "youtubeButton",
		area: "footerLinksThree"
	},
	{
		type: "img",
		src: images["facebook.png"],
		class: "footerButtonIcon",
		area: "facebookButton"
	},
	{
		type: "img",
		src: images["twitter.png"],
		class: "footerButtonIcon",
		area: "twitterButton"
	},
	{
		type: "img",
		src: images["youtube.png"],
		class: "footerButtonIcon",
		area: "youtubeButton"
	},
	{
		type: "a",
		class: "footerLink",
		content: "Accessibility",
		area: "footerLinksFour"
	},
	{
		type: "a",
		class: "footerLink",
		content: "Privacy Policy",
		area: "footerLinksFour"
	},
	{
		type: "a",
		class: "footerLink",
		content: "Cookies Policy",
		area: "footerLinksFour"
	},
	{
		type: "a",
		class: "footerLink",
		content: "Terms of Use",
		area: "footerLinksFour"
	},
	{
		type: "a",
		class: "footerLink",
		content: "Complaints",
		area: "footerLinksFour"
	},
	{
		type: "a",
		class: "footerLink",
		content: "Site Index",
		area: "footerLinksFour"
	},
	{
		type: "p",
		id: "copyright",
		content: "© Oliver Crawford 2022",
		area: "footer"
	}
];

export { headerArea, stickyButtons, navBar, banner, howCanWeHelp, funeralServices, footer };