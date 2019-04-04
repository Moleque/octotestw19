import main from '../../steps/main';
import layout from '../../steps/layout'
import button from '../../steps/sidebar/button';
import toolbar from '../../steps/compose/toolbar'
import letters from '../../steps/letters';


// тест жирного шрифта
describe('b text style', () => {
	it('Авторизоваться, войти в написание нового письма, использовать жирный шрифт', () => {
		main.open('https://mail.ru');
		main.login(process.env.LOGIN, process.env.PASSWORD);
		layout.setPaneAndSize(3);
		button.clickButton('compose');
		toolbar.clickToolById('bold');
		letters.openBySubject('Mail.ru – больше, чем почта. Познакомьтесь с проектами Mail.ru Group');
	});
});