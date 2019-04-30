import DefaultPage from '../default';

const href = {
	'Входящие': '/inbox/',
	'Социальные сети': '/social/',
	'Рассылки': '/newsletters/',
	'Отправленные': '/sent/',
	'Черновики': '/drafts/',
	'Спам': '/spam/',
	'Корзина': '/trash/',
};

class FoldersPage extends DefaultPage {
	constructor() {
		super('letters')
	}

	get locators() {
		const container = '.nav-folders';
		return {
			container,
			folderByName: (folderName) => container + ` a[href="${href[folderName]}"]`,
		}
	}

	/**
	 * Клик по любой папке, если сайдбар не узкий
	 * @param {string} folderName
	 */
	clickFolderByName(folderName) {
		const locator = this.locators.folderByName(folderName);
		this.page.waitForVisible(locator);
		this.page.click(locator);
	}

}

export default new FoldersPage();
