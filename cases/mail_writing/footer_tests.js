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

	it('Тестирование кнопки отправки письма', () => {
		footer.checkSendButton();
	});

	it('Тестирование кнопки отправки письма', () => {
		footer.checkSendButtonWrongEmail();
	});


	it('Тестирование кнопки сохранения черновика', () => {
		footer.checkSaveButton();
	});

	it('Тестирование кнопки отправки письма', () => {
		footer.checkSendButtonEmail();
	});

	it('Тестирование кнопки отмены', () => {
		footer.checkCancelButton();
	});
});