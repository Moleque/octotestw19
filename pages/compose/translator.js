import DefaultPage from '../default';

class TranslatorPage extends DefaultPage {
	constructor() {
		super('letters');
	}

	get locators() {
        const container = '.compose-app';
		return {
            container,
            closeButton: () => container + ` div[class^="cancelTranslation--"]`,
            containerByName: (containerName) => container + ` div[class^="${containerName}Container--"]`,
            scrollByName: (scrollName) => container + ` div[class^="${scrollName}Scrollable--"] div`,
		}
    }

    /**
     * Считать текстовое содержимое поля
     * @param {string} scrollName 
     */
    readText(scrollName) {
        const locator = this.locators.scrollByName(scrollName);
        this.page.waitForVisible(locator);
        return $(locator).getText();
    }

    closeTranslationWindow() {
        const locator = this.locators.closeButton();
        this.page.waitForVisible(locator);
        this.page.click(locator);
    }

}

export default new TranslatorPage();