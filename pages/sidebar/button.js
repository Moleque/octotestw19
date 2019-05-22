import DefaultPage from '../default';

class ButtonPage extends DefaultPage {
	constructor(name) {
		super(name)
	}

	get locators() {
		const container = '.sidebar';
		return {
			container,
			buttonByName: (buttonName) => container + ` span[title="${buttonName}"]`,
			buttonWriteMail: container + ` span[class^=compose-button__]`
		}
	}

	/**
	 * Клик по кнопке сайдбара
	 * @param {string} buttonName
	 */
	clickButton(buttonName) {
		const locator = this.locators.buttonByName(buttonName);
		this.page.waitForVisible(locator);
		this.page.click(locator);
	}

	clickButtonWriteMail() {
		const locator = this.locators.buttonWriteMail;
		this.page.waitForVisible(locator);
		this.page.click(locator);
	}
	
}

export default new ButtonPage();