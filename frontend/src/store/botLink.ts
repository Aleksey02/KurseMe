import {makeAutoObservable} from "mobx";

class BotLink {
	link = 'egeball22_bot'

	constructor() {
		makeAutoObservable(this);
	}

	setLink(link: string) {
		if (!link) return;
		this.link = link;
	}
}

export default new BotLink();