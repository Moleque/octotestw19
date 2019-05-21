import main from '../../steps/main';
import layout from '../../steps/layout'
import button from '../../steps/sidebar/button';
import editor from '../../steps/compose/editor';
import header from '../../steps/compose/header';
import page from '../../pages/compose/header'
import headEditor from '../../pages/compose/headEditor';

// тесты cтилей текста
describe('Тестирование шапки в написании письма:', () => {
	const testText = 'Testing';
	const testValidEmail = 'test@mail.ru \n';
	const testInvalidEmail = 'test!t?st@m#il.ru \n';

	before(() => {
		main.open('https://mail.ru');
		process.env.LOGIN = 'test.zharkikh';
		process.env.PASSWORD = 'TPtesting';
		main.login(process.env.LOGIN, process.env.PASSWORD);
		layout.setPaneAndSize(3);

		button.clickButton('Написать письмо');
		page.clickButtonCopy();
		page.clickButtonHidden();
	});

	afterEach(() => {
		headEditor.clearReceiverFieldText();
		headEditor.clearCopyFieldText();
		headEditor.clearHiddenFieldText();
		headEditor.clearThemeFieldText();
	});


	it('"Кому" правильный Email', () => {
		header.checkReceiverFieldValid(testValidEmail);
	});

	it('"Кому" неправильный Email', () => {
		header.checkReceiverFieldInvalid(testInvalidEmail);
	});

	it('"Копия" правильный Email', () => {
		header.checkCopyFieldValid(testValidEmail);
	});

	it('"Копия" неправильный Email', () => {
		header.checkCopyFieldInvalid(testInvalidEmail);
	});

	it('"Скрытая" правильный Email', () => {
		header.checkHiddenFieldValid(testValidEmail);
	});

	it('"Скрытая" неправильный Email', () => {
		header.checkHiddenFieldInvalid(testInvalidEmail);
	});

	it('"Тема" в письме', () => {
		header.checkThemeField(testText);
	});

});