import DefaultPage from '../default';

class HeaderPage extends DefaultPage {
	constructor() {
		super('letters')
	}

	get locators() {
		const container = '.compose-app div[class^="contactsControls-"]';
		return {
			container,
			copyButton: () => container + ` button[tabindex="720"]`,
			hiddenButton: () => container + ` button[tabindex="730"]`,
		}
	}

	clickButtonCopy(){
		const locator = this.locators.copyButton();
		this.page.waitForVisible(locator);
		this.page.click(locator);
	}

	clickButtonHidden(){
		const locator = this.locators.hiddenButton();
		this.page.waitForVisible(locator);
		this.page.click(locator);
	}
}

export default new HeaderPage();