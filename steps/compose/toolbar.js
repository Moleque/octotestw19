import DefaultSteps from '../default';
import page from '../../pages/compose/toolbar';
import editor from '../../pages/compose/editor';
import translator from '../../steps/compose/translator';
import assert from 'assert';

const styles = {
	'Жирный текст': 'strong',
	'Наклонный текст': 'em',
	'Подчёркнутый текст': 'u',
	'Зачёркнутый текст': 's',
	'Цвет текста': 'color:',
	'Цвет фона': 'background-color:',
}

const css = {
	'Программный код': '{"value":["arial","tahoma","verdana","sans-serif"],"type":"font","string":"arial, tahoma, verdana, sans-serif"}',
	'По центру': '{"type":"ident","string":"left"}',
	'Увеличить отступ': '{"type":"number","string":"0px","unit":"px","value":0}',
}

const colors = {
	'plum': '#dce0ff',
	'yellow': '#fef79c',
}

class ToolbarSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	checkTextStyle(toolName, testText) {
		this.page.clickToolByName(toolName);
		editor.writeText(testText);
		const readedContent = editor.readHtmlContent();
		assert.equal(readedContent, `<div><${styles[toolName]}>​​​​​​​${testText}</${styles[toolName]}><br></div>`);
	}

	checkColorStyle(toolName, colorName, testText) {
		this.page.clickToolByName(toolName);
		this.page.chooseColor(colorName);
		editor.writeText(testText);
		const readedContent = editor.readHtmlContent();
		assert.equal(readedContent, `<div><span style="${styles[toolName]}${colors[colorName]};">​​​​​​​${testText}</span><br></div>`);
	}

	checkFontStyle(toolName, itemName, cssProperty, testText) {
		this.page.clickToolByName(toolName);
		this.page.chooseListItem(itemName);
		editor.writeText(testText);
		const readedContent = editor.readCSSProperty(cssProperty);
		assert.equal(JSON.stringify(readedContent), css[itemName]);
	}

	checkListCreating(itemName, testText) {
		this.page.clickToolByName('Список');
		this.page.chooseListItem(itemName);
		editor.writeText(testText);
		const readedContent = editor.readHtmlContent();
		assert.equal(readedContent, `<ol><li>${testText}</li></ol>`);
	}

	checkPrevNext(testText) {
		editor.writeText(testText);
		this.page.clickToolByName('Отменить');
		assert.equal(editor.readText(), '');

		this.page.clickToolByName('Повторить');
		assert.equal(editor.readText(), testText);
	}

	checkLinkAdding(linkUrl, testText) {
		this.page.clickToolByName('Вставить ссылку');
		editor.addLink(linkUrl, testText);
		const readedContent = editor.readHtmlContent();
		assert.equal(readedContent, `<div><a href="${linkUrl}" data-cke-saved-href="${linkUrl}">${testText}</a><br></div>`);
	}

	checkImageAdding(imagePath) {
		this.page.addImageToEditor(imagePath);
		const isImage = editor.isImage();
		assert.equal(isImage, true);
	}

	checkTranslator(testText, translation) {
		editor.writeText(testText);
		this.page.clickToolByName('Перевести письмо');
		const readedText = translator.readText('translation');
		translator.closeTranslationWindow();
		assert.equal(readedText, translation);
	}

	checkStyleCleaner(testText) {
		editor.writeText(testText);
		editor.selectText();
		this.page.clickToolByName('Очистить форматирование');
		const readedContent = editor.readHtmlContent();
		assert.equal(readedContent, `<div>${testText}<br></div>`);
	}

}

export default new ToolbarSteps();
