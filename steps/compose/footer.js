import DefaultSteps from '../default';
import page from '../../pages/compose/footer';
import editor from '../../pages/compose/editor';
import headEditor from '../../pages/compose/headEditor';
import assert from 'assert';
import clickbutton from '../sidebar/button';

const button = {
	send: 570,
	save: 580,
	cancel: 590,
}

const test = {
	text: 'Testing text',
	email: 'kirill109@mail.ru\n',
	wrongMail: '123bh@#!?ZZZ.Co#m\n'
}

class FooterSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	checkSendButton() {
		editor.writeText(test.text);
		this.page.clickButton(button.send);
		const readedContent = headEditor.readAddressErrorHtml();
		assert.equal(readedContent, `Не указан адрес получателя`);
	}

	checkSendButtonEmail() {
		editor.writeText(test.text);
		headEditor.writeReceiverFieldText(test.email);
		this.page.clickButton(button.send);
	}

	checkSendButtonWrongEmail() {
		headEditor.writeReceiverFieldText(test.wrongMail);
		this.page.clickButton(button.send);
		this.page.clickFixMail();
	}

	checkCancelButton() {
		this.page.clickButton(button.cancel);
		clickbutton.clickButtonWriteMail();
	}

	checkSaveButton() {
		this.page.clickButton(button.save);
		this.page.clickNotifyMessage();
	}

}

export default new FooterSteps();
