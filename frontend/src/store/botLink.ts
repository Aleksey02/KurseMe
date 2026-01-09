import {makeAutoObservable} from "mobx";

class BotLink {
	link = 'egeball22_bot'
	comLink = 'egeball22_bot'
	orgLink = 'egeball22_bot'

	isLoad = false;

	constructor() {
		makeAutoObservable(this);
	}

	setLink(link: string) {
		if (!link) return;
		this.link = link;
		this.setIsLoad(true);
	}

	setComLink(link: string) {
		if (!link) return;
		this.comLink = link;
	}

	setOrgLink(link: string) {
		if (!link) return;
		this.orgLink = link;
	}

	setIsLoad(isLoad: boolean) {
		this.isLoad = isLoad;
	}
}

export default new BotLink();