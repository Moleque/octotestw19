import DefaultPage from '../default';

const colors = {
	"white": "255, 255, 255",
	"black": "0, 0, 0",
	"aqua": "202, 242, 245",
	"plum": "220, 224, 255",
	"yellow": "254, 247, 156",
	// "black": "141, 216, 254",
	// "black": "252, 167, 168",
	// "black": "202, 255, 208",
	// "black": "190, 255, 244",
	// "black": "227, 255, 173",
	// "black": "246, 217, 251",
	// "black": "254, 213, 183",
	// "black": "247, 226, 24",
	// "black": "227, 252, 26",
	// "black": "144, 29, 233",
	// "black": "231, 0, 145",
	// "black": "251, 78, 83",
	// "black": "108, 239, 86",
	// "black": "85, 248, 215",
	// "black": "237, 130, 255",
	// "black": "110, 228, 254",
	// "black": "17, 129, 255",
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
			listItemByName: (itemName) => container + ` div[class*="datalist_visible--"] //span[contains(text(), "${itemName}")]`,
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
