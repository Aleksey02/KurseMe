import {makeAutoObservable} from "mobx";

class ChatLinkStore {
	link = 'https://t.me/+R3o7lVXE2YcwZjli'

	constructor() {
		makeAutoObservable(this);
	}

	setLink(link: string) {
		if (!link) return;
		this.link = link;
	}
}

export default new ChatLinkStore();