import {makeAutoObservable} from "mobx";

class BotLink {
	link = 'egeball22_bot'
	authLink = 'egeball22_bot'

	constructor() {
		makeAutoObservable(this);
	}

	setLink(link: string) {
		if (!link) return;
		this.link = link;
	}

	setAuthLink(link: string) {
		if (!link) return;
		this.authLink = link;
	}
}

export default new BotLink();