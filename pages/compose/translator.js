import DefaultPage from '../default';

class TranslatorPage extends DefaultPage {
	constructor() {
		super('letters')
	}

	get locators() {
        const container = '.compose-app';
		return {
            container,
            closeButton: () => container + ` div[class^="cancelTranslation--"]`,
            containerByName: (containerName) => container + ` div[class^="${containerName}Container--"]`,
            scrollByName: (scrollName) => container + ` div[class^="${scrollName}Scrollable--"]`,
		}
	}

    /**
     * Считать текстовое содержимое поля
     * @param {string} scrollName 
     */
    readText(scrollName) {
        const divLenght = 30;
        const locator = this.locators.scrollByName(scrollName);
        this.page.waitForVisible(locator);
        const content = $(locator).getHTML();
        return content;//.slice(divLenght, -divLenght);
    }

    closeTranslationWindow() {
        const locator = this.locators.closeButton();
        this.page.waitForVisible(locator);
        click(locator);
    }

}

export default new TranslatorPage();