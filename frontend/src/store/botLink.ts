import {makeAutoObservable} from "mobx";

class BotLink {
	link = 'egeball22_bot'
	comLink = 'egeball22_bot'
	orgLink = 'egeball22_bot'

	constructor() {
		makeAutoObservable(this);
	}

	setLink(link: string) {
		if (!link) return;
		this.link = link;
	}

	setComLink(link: string) {
		if (!link) return;
		this.comLink = link;
	}

	setOrgLink(link: string) {
		if (!link) return;
		this.orgLink = link;
	}
}

export default new BotLink();