import DefaultPage from '../default';

class ButtonPage extends DefaultPage {
	constructor(name) {
		super(name)
	}

	get locators() {
		const container = '[data-qa-id="sidebar"]';
		return {
			container,
			buttonById: (buttonId) => container + ` [data-qa-id="${buttonId}"]`
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