let dropDowns = [
	{
		type: "div",
		id: "whatToDoDrop",
		classTwo: "dropdownOne",
		class: "dropdown",
		area: "navBar",
		grid: "currentDropdown"
	},
	{
		type: "div",
		id: "whatToDoDropOne",
		class: "innerDropdown",
		area: "whatToDoDrop",
	},
	{
		type: "a",
		class: "dropdownHeader",
		content: "WHAT TO DO IMMEDIATELY",
		area: "whatToDoDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "What to do when someone dies",
		area: "whatToDoDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "When someone dies at home",
		area: "whatToDoDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "When someone dies in hospital",
		area: "whatToDoDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "When someone dies in a care home",
		area: "whatToDoDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "When someone dies abroad",
		area: "whatToDoDropOne"
	},
	{
		type: "div",
		id: "whatToDoDropTwo",
		class: "innerDropdown",
		area: "whatToDoDrop"
	},
	{
		type: "a",
		class: "dropdownHeader",
		content: "FIRST STEPS AFTER A DEATH",
		area: "whatToDoDropTwo"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Medical Certificate of Cause of Death",
		area: "whatToDoDropTwo"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Registering a Death",
		area: "whatToDoDropTwo"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Bringing your loved one into care",
		area: "whatToDoDropTwo"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Start arranging the funeral",
		area: "whatToDoDropTwo"
	},
	{
		type: "div",
		id: "whatToDoDropThree",
		class: "innerDropdown",
		area: "whatToDoDrop"
	},
	{
		type: "a",
		class: "dropdownHeader",
		content: "USEFUL GUIDES",
		area: "whatToDoDropThree"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "A loved one may be passing soon",
		area: "whatToDoDropThree"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Frequently asked questions",
		area: "whatToDoDropThree"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Timeline of what to do when someone dies",
		area: "whatToDoDropThree"
	},
	{
		type: "div",
		id: "whatToDoDropFour",
		class: "innerDropdown",
		area: "whatToDoDrop"
	},
	{
		type: "a",
		class: "dropdownHeader",
		content: "AFTER THE FUNERAL",
		area: "whatToDoDropFour"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "After the funeral",
		area: "whatToDoDropFour"
	},
	{
		type: "div",
		id: "arrangingAFuneralDrop",
		class: "dropdown",
		area: "navBar",
		grid: "currentDropdown"
	},
	{
		type: "div",
		id: "arrangingAFuneralDropOne",
		class: "innerDropdown",
		area: "arrangingAFuneralDrop"
	},
	{
		type: "a",
		class: "dropdownHeader",
		content: "BEFORE THE FUNERAL",
		area: "arrangingAFuneralDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Choosing a Funeral Director",
		area: "arrangingAFuneralDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "How to arrange a funeral",
		area: "arrangingAFuneralDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Types of funeral",
		area: "arrangingAFuneralDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "How to personalise a funeral",
		area: "arrangingAFuneralDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Our Funeral Services",
		area: "arrangingAFuneralDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Funeral costs",
		area: "arrangingAFuneralDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Planning a funeral service",
		area: "arrangingAFuneralDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "The day of the funeral",
		area: "arrangingAFuneralDropOne"
	},
	{
		type: "div",
		id: "arrangingAFuneralDropTwo",
		class: "innerDropdown",
		area: "arrangingAFuneralDrop"
	},
	{
		type: "a",
		class: "dropdownHeader",
		content: "AFTER THE FUNERAL",
		area: "arrangingAFuneralDropTwo"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "What to do after the funeral",
		area: "arrangingAFuneralDropTwo"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Memorials",
		area: "arrangingAFuneralDropTwo"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Legal services",
		area: "arrangingAFuneralDropTwo"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Dealing with finances after a death",
		area: "arrangingAFuneralDropTwo"
	},
	{
		type: "div",
		id: "arrangingAFuneralDropThree",
		class: "innerDropdown",
		area: "arrangingAFuneralDrop"
	},
	{
		type: "a",
		class: "dropdownHeader",
		content: "PLANNING AHEAD",
		area: "arrangingAFuneralDropThree"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Our prepaid funeral plans",
		area: "arrangingAFuneralDropThree"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Compare our funeral plans",
		area: "arrangingAFuneralDropThree"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Sharing my final wishes",
		area: "arrangingAFuneralDropThree"
	},
	{
		type: "div",
		id: "prepaidDrop",
		class: "dropdown",
		area: "navBar",
		grid: "currentDropdown"
	},
	{
		type: "div",
		id: "prepaidDropOne",
		class: "innerDropdown",
		area: "prepaidDrop",
	},
	{
		type: "a",
		class: "dropdownHeader",
		content: "ABOUT FUNERAL PLANS",
		area: "prepaidDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "How do funeral plans work?",
		area: "prepaidDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Over 50s Insurance vs Funeral Plans",
		area: "prepaidDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Buying a funeral plan for someone else",
		area: "prepaidDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Can I pay for a funeral plan monthly?",
		area: "prepaidDropOne"
	},
	{
		type: "div",
		id: "prepaidDropTwo",
		class: "innerDropdown",
		area: "prepaidDrop",
	},
	{
		type: "a",
		class: "dropdownHeader",
		content: "OUR FUNERAL PLANS",
		area: "prepaidDropTwo"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "The Limited Funeral Plan",
		area: "prepaidDropTwo"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "The Amber Funeral Plan",
		area: "prepaidDropTwo"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "The Pearl Funeral Plan",
		area: "prepaidDropTwo"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "The Diamond Funeral Plan",
		area: "prepaidDropTwo"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Dignity Promise",
		area: "prepaidDropTwo"
	},
	{
		type: "div",
		id: "prepaidDropThree",
		class: "innerDropdown",
		area: "prepaidDrop",
	},
	{
		type: "a",
		class: "dropdownHeader",
		content: "HELP & GUIDANCE",
		area: "prepaidDropThree"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Our Reviews",
		area: "prepaidDropThree"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Request a Guide",
		area: "prepaidDropThree"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Buy Online",
		area: "prepaidDropThree"
	},
	{
		type: "div",
		id: "aboutUsDrop",
		class: "dropdown",
		area: "navBar",
		grid: "currentDropdown"
	},
	{
		type: "div",
		id: "aboutUsDropOne",
		class: "innerDropdown",
		area: "aboutUsDrop",
	},
	{
		type: "a",
		class: "dropdownHeader",
		content: "ABOUT DIGNITY",
		area: "aboutUsDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "History",
		area: "aboutUsDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Our Company",
		area: "aboutUsDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Our funeral homes",
		area: "aboutUsDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "What our clients say",
		area: "aboutUsDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "In the community",
		area: "aboutUsDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Industry associations and accreditations",
		area: "aboutUsDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Working for Dignity",
		area: "aboutUsDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Coffin Manufacturing",
		area: "aboutUsDropOne"
	},
	{
		type: "div",
		id: "aboutUsDropTwo",
		class: "innerDropdown",
		area: "aboutUsDrop",
	},
	{
		type: "a",
		class: "dropdownHeader",
		content: "OUR FUNERAL DIRECTORS",
		area: "aboutUsDropTwo"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Choosing a Funeral Director",
		area: "aboutUsDropTwo"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Find your nearest Dignity Funeral Director",
		area: "aboutUsDropTwo"
	},
	{
		type: "div",
		id: "aboutUsDropThree",
		class: "innerDropdown",
		area: "aboutUsDrop",
	},
	{
		type: "a",
		class: "dropdownHeader",
		content: "OUR FUNERAL PLANS",
		area: "aboutUsDropThree"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "About our Funeral Plans",
		area: "aboutUsDropThree"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Funeral Plan Reviews",
		area: "aboutUsDropThree"
	},
	{
		type: "div",
		id: "adviceDrop",
		class: "dropdown",
		area: "navBar",
		grid: "currentDropdown"
	},
	{
		type: "div",
		id: "adviceDropOne",
		class: "innerDropdown",
		area: "adviceDrop",
	},
	{
		type: "a",
		class: "dropdownHeader",
		content: "ADVICE AND GUIDANCE CATEGORIES",
		area: "adviceDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Covid-19 Update",
		area: "adviceDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Organising a funeral",
		area: "adviceDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Attending a funeral",
		area: "adviceDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Grief and bereavement support",
		area: "adviceDropOne"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Insights",
		area: "adviceDropOne"
	},
	{
		type: "div",
		id: "adviceDropTwo",
		class: "innerDropdown",
		area: "adviceDrop",
	},
	{
		type: "a",
		class: "dropdownHeader",
		content: "MOST POPULAR GUIDES",
		area: "adviceDropTwo"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "A guide to funeral etiquette",
		area: "adviceDropTwo"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "How long after a death does a funeral take place?",
		area: "adviceDropTwo"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "What to wear to a funeral",
		area: "adviceDropTwo"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Bible readings for funerals",
		area: "adviceDropTwo"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Coping with grief and loss",
		area: "adviceDropTwo"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Sympathy cards and funeral flower messages",
		area: "adviceDropTwo"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "A guide being a pallbearer",
		area: "adviceDropTwo"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Bereavement and compassionate leave in the UK",
		area: "adviceDropTwo"
	},
	{
		type: "div",
		id: "adviceDropThree",
		class: "innerDropdown",
		area: "adviceDrop",
	},
	{
		type: "a",
		class: "dropdownHeader",
		content: "LATEST GUIDES",
		area: "adviceDropThree"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "What to put on a headstone",
		area: "adviceDropThree"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "A guide to non-religious funerals",
		area: "adviceDropThree"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Internment of ashes",
		area: "adviceDropThree"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Non-religious funeral readings",
		area: "adviceDropThree"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "A guide to burying ashes",
		area: "adviceDropThree"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Talking about death",
		area: "adviceDropThree"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "How to cope with grief on Father's Day",
		area: "adviceDropThree"
	},
	{
		type: "a",
		class: "dropdownInnerList",
		content: "Life's Moments",
		area: "adviceDropThree"
	},
];

export {dropDowns};