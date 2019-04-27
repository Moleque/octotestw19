import DefaultPage from '../default';

const colors = {
	"white": "255, 255, 255",
	"black": "0, 0, 0",
	"aqua": "202, 242, 245",
	"plum": "220, 224, 255",
	"yellow": "254, 247, 156",
}

class ToolbarPage extends DefaultPage {
	constructor() {
		super('letters')
	}

	get locators() {
		const container = '.compose-app div[class^="editor-"]';
		return {
			container,
			toolByName: (toolName) => container + ` button[title="${toolName}"]`,
			colorByName: (colorName) => container + ` div[class*="datalist_visible--"] div[style="background-color: rgb(${colors[colorName]});"]`,
			listItemByName: (itemName) => `//div[contains(@class, "datalist_visible--")]/div/*/div/*["${itemName}"]`,
			inputByToolName: (toolName) => container + ` button[title="${toolName}"] input`,
		}
	}

	/**
	 * Клик по инструменту тулбара
	 * @param {string} toolName
	 */
	clickToolByName(toolName) {
		const locator = this.locators.toolByName(toolName);
		this.page.waitForVisible(locator);
		this.page.click(locator);
	}

	/**
	 * Выбор цвета текста для текущего инструмента
	 * @param {string} colorName 
	 */
	chooseColor(colorName) {
		const locator = this.locators.colorByName(colorName);
		this.page.waitForVisible(locator);
		this.page.click(locator);
	}

	/**
	 * Установить параметр текущего выпадающего списка
	 * @param {string} itemName 
	 */
	chooseListItem(itemName) {
		const locator = this.locators.listItemByName(itemName);
		this.page.waitForVisible(locator);
		this.page.click(locator);
	}

	/**
	 * Вставить картинку по пути imagePath с помощью инструмента
	 * @param {string} imagePath 
	 */
	addImageToEditor(imagePath) {
		const toolName = 'Вставить картинку';
		const locator = this.locators.inputByToolName(toolName);
		this.page.chooseFile(locator, imagePath);
	}

}

export default new ToolbarPage();
