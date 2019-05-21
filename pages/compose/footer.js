import DefaultPage from '../default';

class BottomPage extends DefaultPage {
	constructor() {
		super('letters')
	}

	get locators() {
		const container = '.compose-app div[class^="compose-app__footer"]';
		// const stack = '.compose-app'
		const overlay = 'div[class^=overlay--]';
		const buttons = container + ' div[class^="compose-app__buttons"]';
		const widgets = container + ' div[class^="compose-app__widgets"]';
		return {
			widgetImportant: () => widgets + ` div[class="compose-app__widget-container"]`,
			widgetNotification: () => widgets + ` path[d^="M13"]`,
			widgetReminder: () => widgets + ` path[d^="M3"]`,
			widgetDelay: () => widgets + ` path[d^="M8"]`,

			buttonByTitle: (index) => buttons + ` span[tabindex^="${index}"]`,

			popupInvalidDataText: () => overlay + ` h1[]`,
			popupFixMail: () => overlay + ` div[class^="popup-"] button[data-test-id="false"]`,
			// notifyMessage: () =>  stack + ` div[class^=notify__message]`,
		}
	}

	clickWidgetImportant(){
		const locator = this.locators.widgetImportant();
		this.page.waitForVisible(locator);
		this.page.click(locator);
	}

	clickWidgetNotidication(){
		const locator = this.locators.widgetNotification();
		this.page.waitForVisible(locator);
		this.page.click(locator);
	}

	clickWidgetReminder(){
		const locator = this.locators.widgetReminder();
		this.page.waitForVisible(locator);
		this.page.click(locator);
	}

	clickButton(buttonIndex){
		const locator = this.locators.buttonByTitle(buttonIndex);
		this.page.waitForVisible(locator);
		this.page.click(locator);
	}

	clickFixMail(){
		const locator = this.locators.popupFixMail();
		this.page.waitForVisible(locator);
		this.page.click(locator);
	}

	readNotifyMessageHtml() {
		const locator = this.locators.notifyMessage();
        this.page.waitForVisible(locator);
		return $(locator).getHTML(false);
	}
}

export default new BottomPage();