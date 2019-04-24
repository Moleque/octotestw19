import DefaultPage from '../default';

class FoldersPage extends DefaultPage {
	constructor() {
		super('letters')
	}

	get locators() {
		const container = '.nav-folders';
		return {
			container,
			folderByName: (folderName) => {
				let folder = ' ';
				switch (folderName) {
					case 'Входящие':
						folder += 'a[href="/inbox/"]';
						break;
					case 'Социальные сети':
						folder += 'a[href="/social/"]';
						break;
					case 'Рассылки':
						folder += 'a[href="/newsletters/"]';
						break;
					case 'Отправленные':
						folder += 'a[href="/sent/"]';
						break;
					case 'Черновики':
						folder += 'a[href="/drafts/"]';
						break;
					case 'Спам':
						folder += 'a[href="/spam/"]';
						break;
					case 'Корзина':
						folder += 'a[href="/trash/"]';
						break;
 					default:
						throw new Error('unknown folder');
				}
				return container + ' ' + folder;
			}
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
