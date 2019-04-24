import DefaultPage from '../default';

class EditorPage extends DefaultPage {
	constructor() {
		super('letters')
	}

	get locators() {
		const container = '.compose-app div[tabindex="505"]';
		return {
			container,
		}
	}

    /**
     * Написание текста письма
     * @param {string} text 
     */
    writeText(text) {
        const locator = this.locators.container;
        this.page.waitForVisible(locator);
        $(locator).addValue(text);
    }

    /**
     * Удаление всего текста из поля написания письма
     */
    clearText() {
        const locator = this.locators.container;
        this.page.waitForVisible(locator);
        $(locator).setValue('');
    }

    /**
     * Считать содержимое текста письма
     */
    readText() {
        const locator = this.locators.container;
        this.page.waitForVisible(locator);
        return $(locator).getText();
    }

    /**
     * Считать HTML-содержимое текста письма
     */
    readHtmlContent() {
        const locator = this.locators.container;
        this.page.waitForVisible(locator);
        return $(locator).getHTML(false);
    }

}

export default new EditorPage();
