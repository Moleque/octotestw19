import DefaultPage from '../default';

class EditorPage extends DefaultPage {
	constructor() {
		super('letters')
	}

	get locators() {
        const container = '.compose-app div[tabindex="505"]';
		return {
            container,
            linkInputByName: (inputName) => `.compose-app div[class^="editable-container-"] input[name="${inputName}"]`,
            linkButtonByType: (buttonType) => `.compose-app div[class^="editable-container-"] button[type="${buttonType}"]`,

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
     * Выделение содержимого текста письма
     */
    selectText() {
        const locator = this.locators.container;
        this.page.waitForVisible(locator);
        $(locator).doubleClick();
    }

    /**
     * Считать HTML-содержимое текста письма
     */
    readHtmlContent() {
        const locator = this.locators.container;
        this.page.waitForVisible(locator);
        return $(locator).getHTML(false);
    }

    /**
     * Добавить ссылку с адресом linkUrl и названием linkText
     * @param {string} linkUrl 
     * @param {string} linkText 
     */
	addLink(linkUrl, linkText) {
        const urlLocator = this.locators.linkInputByName('href');
        this.page.waitForVisible(urlLocator);
        $(urlLocator).setValue(linkUrl);
        const textLocator = this.locators.linkInputByName('text');
        this.page.waitForVisible(textLocator);
        $(textLocator).setValue(linkText);
        
        const buttonLocator = this.locators.linkButtonByType('submit');
        this.page.waitForVisible(buttonLocator);
        this.page.click(buttonLocator);
    }

}

export default new EditorPage();
