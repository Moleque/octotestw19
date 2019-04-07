import main from '../../steps/main';
import layout from '../../steps/layout'
import button from '../../steps/sidebar/button';
import toolbar from '../../steps/compose/toolbar'
import letters from '../../steps/letters';
import editor from '../../steps/compose/editor';
import assert from 'assert';

// тест cтилей текста
describe('text style tests', () => {
	const testText = 'test text';

	it('Авторизоваться, войти в написание нового письма, использовать жирный шрифт', () => {
		main.open('https://mail.ru');
		main.login(process.env.LOGIN, process.env.PASSWORD);
		layout.setPaneAndSize(3);

		button.clickButton('compose');
		editor.clearText();
		toolbar.clickToolById('bold');
		editor.writeText(testText);
		const text = editor.readHtmlContent();
		assert.equal(text, `<div><strong>​​​​​​​${testText}</strong><br></div>`);
	});
});