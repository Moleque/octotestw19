import main from '../../steps/main';
import layout from '../../steps/layout'
import button from '../../steps/sidebar/button';
import toolbar from '../../steps/compose/toolbar';
import editor from '../../steps/compose/editor';
import translator from '../../steps/compose/translator';
import assert from 'assert';

// тесты cтилей текста
describe('Тестирование панели инструментов в написании письма', () => {
	const testText = 'testing';

	before(() => {
		main.open('https://mail.ru');
		main.login(process.env.LOGIN, process.env.PASSWORD);
		layout.setPaneAndSize(3);

		button.clickButton('Написать письмо');
		editor.clearText();
	});

	afterEach(() => {
		editor.clearText();
  });

	it('В написании письма использовать жирный шрифт', () => {
		toolbar.clickToolByName('Жирный текст');
		editor.writeText(testText);
		const readedContent = editor.readHtmlContent();
		assert.equal(readedContent, `<div><strong>​​​​​​​${testText}</strong><br></div>`);
	});

	it('В написании письма использовать наклонный шрифт', () => {
		toolbar.clickToolByName('Наклонный текст');
		editor.writeText(testText);
		const readedContent = editor.readHtmlContent();
		assert.equal(readedContent, `<div><em>​​​​​​​${testText}</em><br></div>`);
	});

	it('В написании письма использовать подчеркнутый шрифт', () => {
		toolbar.clickToolByName('Подчёркнутый текст');
		editor.writeText(testText);
		const readedContent = editor.readHtmlContent();
		assert.equal(readedContent, `<div><u>​​​​​​​${testText}</u><br></div>`);
	});

	it('В написании письма использовать зачеркнутый шрифт', () => {
		toolbar.clickToolByName('Зачёркнутый текст');
		editor.writeText(testText);
		const readedContent = editor.readHtmlContent();
		assert.equal(readedContent, `<div><s>​​​​​​​${testText}</s><br></div>`);
	});

	// -------------------

	it('В написании письма использовать выбор цвета текста', () => {
		toolbar.clickToolByName('Цвет текста');
		toolbar.chooseColor('plum');
		editor.writeText(testText);
		const readedContent = editor.readHtmlContent();
		assert.equal(readedContent, `<div><span style="color:#dce0ff;">​​​​​​​${testText}</span><br></div>`);
	});

	it('В написании письма использовать выбор цвета фона текста', () => {
		toolbar.clickToolByName('Цвет фона');
		toolbar.chooseColor('yellow');
		editor.writeText(testText);
		const readedContent = editor.readHtmlContent();
		assert.equal(readedContent, `<div><span style="background-color:#fef79c;">​​​​​​​${testText}</span><br></div>`);
	});

	// -------------------

	it('В написании письма использовать выбор типа шрифта текста', () => {
		const testStyle = `{"value":["arial","tahoma","verdana","sans-serif"],"type":"font","string":"arial, tahoma, verdana, sans-serif"}`;
		toolbar.clickToolByName('Шрифт');
		toolbar.chooseListItem('Программный код');
		editor.writeText(testText);
		const readedContent = editor.readCSSProperty('font-family');
		assert.equal(JSON.stringify(readedContent), testStyle);
	});

	it('В написании письма использовать выравнивание текста', () => {
		const testStyle = `{"type":"ident","string":"left"}`;
		toolbar.clickToolByName('Выравнивание');
		toolbar.chooseListItem('По центру');
		editor.writeText(testText);
		const readedContent = editor.readCSSProperty('text-align');
		assert.equal(JSON.stringify(readedContent), testStyle);
	});

	it('В написании письма использовать отступ текста', () => {
		const testStyle = `{"type":"number","string":"0px","unit":"px","value":0}`;
		toolbar.clickToolByName('Отступ');
		toolbar.chooseListItem('Увеличить отступ');
		editor.writeText(testText);
		const readedContent = editor.readCSSProperty('margin-left');
		assert.equal(JSON.stringify(readedContent), testStyle);
	});

	it('В написании письма использовать создание списка', () => {
		toolbar.clickToolByName('Список');
		toolbar.chooseListItem('Нумерованный');
		editor.writeText(testText);
		const readedContent = editor.readHtmlContent();
		assert.equal(readedContent, `<ol><li>${testText}</li></ol>`);
	});

	// -------------------

	it('В написании письма использовать функции отмены и повтора', () => {
		editor.writeText(testText);
		toolbar.clickToolByName('Отменить');
		assert.equal(editor.readText(), '');

		toolbar.clickToolByName('Повторить');
		assert.equal(editor.readText(), testText);
	});

	// -------------------
	
	it('В написании письма использовать вставку ссылки', () => {
		const linkUrl = 'https://vk.com/moleque';
		toolbar.clickToolByName('Вставить ссылку');
		editor.addLink(linkUrl, testText);
		const readedContent = editor.readHtmlContent();
		assert.equal(readedContent, `<div><a href="${linkUrl}" data-cke-saved-href="${linkUrl}">${testText}</a><br></div>`);
	});

	it('В написании письма использовать вставку картинки', () => {
		const imagePath = '/home/moleque/test.jpg';
		toolbar.addImageToEditor(imagePath);
		const isImage = editor.isImage();
		assert.equal(isImage, true);
	});

	it('В написании письма использовать перевод текста', () => {
		const translation = `тестирование`;
		editor.writeText(testText);
		toolbar.clickToolByName('Перевести письмо');
		const readedText = translator.readText('translation');
		translator.closeTranslationWindow();
		assert.equal(readedText, translation);
	});

	it('В написании письма использовать очистку форматирования', () => {
		editor.writeText(testText);
		editor.selectText();
		toolbar.clickToolByName('Очистить форматирование');
		const readedContent = editor.readHtmlContent();
		assert.equal(readedContent, `<div>${testText}<br></div>`);
	});

});

