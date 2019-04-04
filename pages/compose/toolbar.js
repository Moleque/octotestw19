import DefaultPage from '../default';

class ToolbarPage extends DefaultPage {
	constructor() {
		super('letters')
	}

	get locators() {
		const container = '[data-qa-id="compose-app"] [data-qa-id="editor-toolbar"]';
		return {
			container,
			toolById: (toolId) => container + ` div[data-test-id="${toolId}"]`
		}
	}

	/**
	 * Клик по инструменту тулбара
	 * @param {string} toolId
	 */
	clickToolById(toolId) {
		const locator = this.locators.container; //toolById(toolId);
		this.page.waitForVisible(locator);
		this.page.click(locator);
	}

}

export default new ToolbarPage();
