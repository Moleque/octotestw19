import main from '../../steps/main';
import button from '../../steps/sidebar/button';
import footer from '../../steps/compose/footer';
import layout from '../../steps/layout'
import editor from '../../pages/compose/editor';
import headEditor from '../../pages/compose/headEditor';


// тесты cтилей текста
describe('Тестирование подвала в написании письма \n', () => {

	before(() => {
		main.open('https://mail.ru');
		main.login(process.env.LOGIN, process.env.PASSWORD);

		button.clickButton('Написать письмо');

	});

	afterEach(() => {
		editor.clearText();
		headEditor.clearReceiverFieldText();
	});

	it('Тестирование отправки письма без получателя', () => {
		footer.checkSendButton();
	});

	it('Тестирование отправки письма с неккоректным Email адресом', () => {
		footer.checkSendButtonWrongEmail();
	});

	it('Тестирование кнопки сохранения черновика', () => {
		footer.checkSaveButton();
	});

	it('Тестирование отмены написания письма', () => {
		footer.checkCancelButton();
	});
	
	it('Тестирование отправки письма с корректным Email адресом', () => {
		footer.checkSendButtonEmail();
	});

});