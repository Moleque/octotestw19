import DefaultPage from '../default';

class HeadEditorPage extends DefaultPage {
    constructor() {
        super('letters')
    }

    get locators() {
        const container = '.compose-app';
        const containerHead = '.compose-app div[class^="head_container-"]';
        return {
            container,
            inputToField: () => containerHead + ` input[tabindex="100"]`,
            inputCopyField: () => containerHead + ` div[class^="contactsContainer-"] input[tabindex="200"]`,
            inputHiddenField: () => containerHead + ` div[class^="contactsContainer-"] input[tabindex="300"]`,
            inputThemeField: () => container + ` div[class^="subject__container-"] input[tabindex="400"]`,

            receiverContainer: () => containerHead + ` div[tabindex="-1"] div[class^=container-] div[class^=container-]`,
            copyHiddenContainer: () => containerHead + ` div[class^=wrap-] div[tabindex="-1"] div[class^=container-] div[class^=container-]`,
        }
    }

    // Ввод в поле "Кому"
    writeReceiverFieldText(text) {
        const locator = this.locators.inputToField();
        this.page.waitForVisible(locator);
        $(locator).addValue(text);
    }

    // Ввод в поле "Тема"
    writeThemeFieldText(text) {
        const locator = this.locators.inputThemeField();
        this.page.waitForVisible(locator);
        $(locator).addValue(text);
    }

    // Ввод в поле "Копия"
    writeCopyFieldText(text) {
        const locator = this.locators.inputCopyField();
        this.page.waitForVisible(locator);
        $(locator).addValue(text);
    }

    // Ввод в поле "Скрытая"
    writeHiddenFieldText(text) {
        const locator = this.locators.inputHiddenField();
        this.page.waitForVisible(locator);
        $(locator).addValue(text);
    }

    readReceiverFieldHtmlContent() {
        const locator = this.locators.receiverContainer();
        this.page.waitForVisible(locator);
        return $(locator).getAttribute("class");
    }

    readCopyFieldHtmlContent() {
        const locator = this.locators.copyHiddenContainer();
        this.page.waitForVisible(locator);
        return $(locator).getAttribute("class");

    }
//------------
    readHiddenFieldHtmlContent() {
        const locator = this.locators.copyHiddenContainer();
        this.page.waitForVisible(locator);
        return $(locator).getAttribute("class");
    }

    readThemeFieldHtmlContent() {
        const locator = this.locators.inputThemeField();
        this.page.waitForVisible(locator);
        return $(locator).getHTML(false);
    }

    // Очистить содержимое поля "Кому"
    clearReceiverFieldText() {
        const locator = this.locators.inputToField();
        this.page.waitForVisible(locator);
        $(locator).setValue('\b');
    }

    // Очистить содержимое поля "Копия"
    clearCopyFieldText() {
        const locator = this.locators.inputCopyField();
        this.page.waitForVisible(locator);
        $(locator).setValue('\b');
    }

    // Очистить содержимое поля "Скрытая"
    clearHiddenFieldText() {
        const locator = this.locators.inputHiddenField();
        this.page.waitForVisible(locator);
        $(locator).setValue('\b');
    }

    // Очистить содержимое поля "Тема"
    clearThemeFieldText() {
        const locator = this.locators.inputThemeField();
        this.page.waitForVisible(locator);
        $(locator).setValue('\b');
    }

}

export default new HeadEditorPage();
