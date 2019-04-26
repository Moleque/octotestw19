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

	// after(() => {
	// 	main.logout();
	// })

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
		toolbar.setColor('Цвет текста', 'plum');
		editor.writeText(testText);
		const readedContent = editor.readHtmlContent();
		assert.equal(readedContent, `<div><span style="color:#dce0ff;">​​​​​​​${testText}</span><br></div>`);
	});

	// it('В написании письма использовать выбор цвета фона текста', () => {
	// 	toolbar.setColor('Цвет фона', 'yellow');
	// 	editor.writeText(testText);
	// 	const readedContent = editor.readHtmlContent();
	// 	// assert.equal(readedContent, `<div><s>​​​​​​​${testText}</s><br></div>`);
	// });

	// -------------------

	// it('В написании письма использовать выбор типа шрифта текста', () => {
	// 	toolbar.setParamListItem('Шрифт', 'Программный код');
	// 	editor.writeText(testText);
	// 	const readedContent = editor.readHtmlContent();
	// 	// assert.equal(readedContent, `<div><s>​​​​​​​${testText}</s><br></div>`);
	// });

	// it('В написании письма использовать выравнивание текста', () => {
	// 	toolbar.setParamListItem('Выравнивание', 'По центру');
	// 	editor.writeText(testText);
	// 	const readedContent = editor.readHtmlContent();
	// 	// assert.equal(readedContent, `<div><s>​​​​​​​${testText}</s><br></div>`);
	// });

	// it('В написании письма использовать отступ текста', () => {
	// 	toolbar.setParamListItem('Отступ', 'Увеличить отступ');
	// 	editor.writeText(testText);
	// 	const readedContent = editor.readHtmlContent();
	// 	// assert.equal(readedContent, `<div><s>​​​​​​​${testText}</s><br></div>`);
	// });

	// -------------------

	// it('В написании письма использовать создание списка', () => {
	// 	toolbar.setParamListItem('Список', 'Нумерованный');
	// 	editor.writeText(testText);
	// 	const readedContent = editor.readHtmlContent();
	// 	// assert.equal(readedContent, `<div><s>​​​​​​​${testText}</s><br></div>`);
	// });

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
		const translation = `<div><div><div><div><div><div>тестирование</div></div></div></div></div></div>`
		editor.writeText(testText);
		toolbar.clickToolByName('Перевести письмо');
		const readedText = translator.readText('translation');
		assert.equal(readedText, translation);
		translator.closeTranslationWindow();
	});

	it('В написании письма использовать очистку форматирования', () => {
		toolbar.clickToolByName('Жирный текст');
		editor.writeText(testText);
		editor.selectText();
		toolbar.clickToolByName('Очистить форматирование');
		const readedContent = editor.readHtmlContent();
		assert.equal(readedContent, `<div><s>​​​​​​​${testText}</s><br></div>`);
	});

});

