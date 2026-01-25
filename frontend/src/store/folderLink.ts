import {makeAutoObservable} from "mobx";

class FolderLinkStore {
	link = 'https://t.me/addlist/v30Y6V-DZZ1iOTMy'

	constructor() {
		makeAutoObservable(this);
	}

	setLink(link: string) {
		if (!link) return;
		this.link = link;
	}
}

export default new FolderLinkStore();