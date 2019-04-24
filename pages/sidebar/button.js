import DefaultPage from '../default';

class ButtonPage extends DefaultPage {
	constructor(name) {
		super(name)
	}

	get locators() {
		const container = '.sidebar';
		return {
			container,
			buttonById: (buttonId) => container + ` .${buttonId}`
		}
	}

	/**
	 * Клик по кнопке создания нового письма
	 * @param {string} buttonId
	 */
	clickButton(buttonId) {
		const locator = this.locators.buttonById(buttonId);
		this.page.waitForVisible(locator);
		this.page.click(locator);
	}
	
}

export default new ButtonPage();