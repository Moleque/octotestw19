import main from '../../steps/main';
import layout from '../../steps/layout'
import button from '../../steps/sidebar/button';
import toolbar from '../../steps/compose/toolbar';
import editor from '../../steps/compose/editor';
import assert from 'assert';

// тесты cтилей текста
describe('Тестирование панели инструментов в написании письма', () => {
	const testText = 'testing readedText';

	before(() => {
		main.open('https://mail.ru');
		main.login(process.env.LOGIN, process.env.PASSWORD);
		layout.setPaneAndSize(3);

		button.clickButton('compose-button');
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
		const readedText = editor.readHtmlContent();
		assert.equal(readedText, `<div><strong>​​​​​​​${testText}</strong><br></div>`);
	});

	it('В написании письма использовать наклонный шрифт', () => {
		toolbar.clickToolByName('Наклонный текст');
		editor.writeText(testText);
		const readedText = editor.readHtmlContent();
		assert.equal(readedText, `<div><em>​​​​​​​${testText}</em><br></div>`);
	});

	it('В написании письма использовать подчеркнутый шрифт', () => {
		toolbar.clickToolByName('Подчёркнутый текст');
		editor.writeText(testText);
		const readedText = editor.readHtmlContent();
		assert.equal(readedText, `<div><u>​​​​​​​${testText}</u><br></div>`);
	});

	it('В написании письма использовать зачеркнутый шрифт', () => {
		toolbar.clickToolByName('Зачёркнутый текст');
		editor.writeText(testText);
		const readedText = editor.readHtmlContent();
		assert.equal(readedText, `<div><s>​​​​​​​${testText}</s><br></div>`);
	});

	// -------------------

	it('В написании письма использовать выбор цвета текста', () => {
		toolbar.setColor("Цвет текста", "yellow");
		editor.writeText(testText);
		const readedText = editor.readHtmlContent();
		// assert.equal(readedText, `<div><s>​​​​​​​${testText}</s><br></div>`);
	});

	it('В написании письма использовать выбор цвета фона текста', () => {
		toolbar.setColor("Цвет фона", "plum");
		editor.writeText(testText);
		const readedText = editor.readHtmlContent();
		// assert.equal(readedText, `<div><s>​​​​​​​${testText}</s><br></div>`);
	});

	// -------------------

	it('В написании письма использовать выбор типа шрифта текста', () => {
		toolbar.setParamListItem("Шрифт", "Программный код");
		editor.writeText(testText);
		const readedText = editor.readHtmlContent();
		// assert.equal(readedText, `<div><s>​​​​​​​${testText}</s><br></div>`);
	});

	it('В написании письма использовать выравнивание текста', () => {
		toolbar.setParamListItem("Выравнивание", "По центру");
		editor.writeText(testText);
		const readedText = editor.readHtmlContent();
		// assert.equal(readedText, `<div><s>​​​​​​​${testText}</s><br></div>`);
	});

	it('В написании письма использовать отступ текста', () => {
		toolbar.setParamListItem("Отступ", "Увеличить отступ");
		editor.writeText(testText);
		const readedText = editor.readHtmlContent();
		// assert.equal(readedText, `<div><s>​​​​​​​${testText}</s><br></div>`);
	});

	// -------------------

	it('В написании письма использовать создание списка', () => {
		toolbar.setParamListItem("Список", "Нумерованный");
		editor.writeText(testText);
		const readedText = editor.readHtmlContent();
		// assert.equal(readedText, `<div><s>​​​​​​​${testText}</s><br></div>`);
	});

	// -------------------

});

