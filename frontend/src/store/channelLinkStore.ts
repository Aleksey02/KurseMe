import {makeAutoObservable} from "mobx";

class ChannelLinkStore {
	link = 'https://t.me/+ASnWu1PJinQ0ZDUy'

	constructor() {
		makeAutoObservable(this);
	}

	setLink(link: string) {
		if (!link) return;
		this.link = link;
	}
}

export default new ChannelLinkStore();