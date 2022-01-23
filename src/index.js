// eslint-disable-next-line no-unused-vars
import _ from "lodash";
import "./style.css";
import { dropDowns } from "./dropdown";
import { headerArea, stickyButtons, navBar, banner, howCanWeHelp, funeralServices, footer } from "./config";
import { createAdd } from "./pagelayout";

let init = function () {
	createAdd(headerArea);
	createAdd(stickyButtons);
	createAdd(navBar);
	createAdd(dropDowns);
	createAdd(banner);
	createAdd(howCanWeHelp);
	createAdd(funeralServices);
	createAdd(footer);
};

init();