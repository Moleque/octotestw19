import main from '../../steps/main';
import layout from '../../steps/layout'
import button from '../../steps/sidebar/button';
import toolbar from '../../steps/compose/toolbar';
import editor from '../../steps/compose/editor';

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

	// -------------------

	it('В написании письма использовать жирный шрифт', () => {
		toolbar.checkTextStyle('Жирный текст', testText);
	});

	it('В написании письма использовать наклонный шрифт', () => {
		toolbar.checkTextStyle('Наклонный текст', testText);
	});

	it('В написании письма использовать подчеркнутый шрифт', () => {
		toolbar.checkTextStyle('Подчёркнутый текст', testText);
	});

	it('В написании письма использовать зачеркнутый шрифт', () => {
		toolbar.checkTextStyle('Зачёркнутый текст', testText);
	});

	// -------------------

	it('В написании письма использовать выбор цвета текста', () => {
		toolbar.checkColorStyle('Цвет текста', 'plum', testText);
	});

	it('В написании письма использовать выбор цвета фона текста', () => {
		toolbar.checkColorStyle('Цвет фона', 'yellow', testText);		
	});

	// -------------------

	it('В написании письма использовать выбор типа шрифта текста', () => {
		toolbar.checkFontStyle('Шрифт', 'Программный код', 'font-family', testText);
	});

	it('В написании письма использовать выравнивание текста', () => {
		toolbar.checkFontStyle('Выравнивание', 'По центру', 'text-align', testText);
	});

	it('В написании письма использовать отступ текста', () => {
		toolbar.checkFontStyle('Отступ', 'Увеличить отступ', 'margin-left', testText);
	});

	// -------------------

	it('В написании письма использовать создание списка', () => {
		toolbar.checkListCreating('Нумерованный', testText);
	});

	it('В написании письма использовать функции отмены и повтора', () => {
		toolbar.checkPrevNext(testText);
	});

	it('В написании письма использовать вставку ссылки', () => {
		toolbar.checkLinkAdding('https://vk.com/moleque', testText);
	});

	it('В написании письма использовать вставку картинки', () => {
		toolbar.checkImageAdding('/home/moleque/test.jpg');
	});

	it('В написании письма использовать перевод текста', () => {
		toolbar.checkTranslator(testText, 'тестирование');
	});

	it('В написании письма использовать очистку форматирования', () => {
		toolbar.checkStyleCleaner(testText);
	});

});

