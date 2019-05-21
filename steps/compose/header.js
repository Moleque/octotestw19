import DefaultSteps from '../default';
import page from '../../pages/compose/header';
import assert from 'assert';
import headEditor from '../../pages/compose/headEditor';

class HeaderSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	checkReceiverFieldValid(testText) {
		headEditor.writeReceiverFieldText(testText);
		const readedContent = headEditor.readReceiverFieldHtmlContent();
		const result = readedContent.match( /status_base-/ig ); //Первое совпадение с правильным отображением
		assert.equal(JSON.stringify(result), '["status_base-"]');
	}

	checkReceiverFieldInvalid(testText) {
		headEditor.writeReceiverFieldText(testText);
		const readedContent = headEditor.readReceiverFieldHtmlContent();
		const result = readedContent.match( /status_error-/ig ); 
		assert.equal(JSON.stringify(result), '["status_error-"]');
	}


	checkCopyFieldValid(testText) {
		headEditor.writeCopyFieldText(testText);
		const readedContent = headEditor.readCopyFieldHtmlContent();
		const result = readedContent.match( /status_base-/ig ); 
		assert.equal(JSON.stringify(result), '["status_base-"]');
	}

	checkCopyFieldInvalid(testText) {
		headEditor.writeCopyFieldText(testText);
		const readedContent = headEditor.readCopyFieldHtmlContent();
		const result = readedContent.match( /status_error-/ig ); 
		assert.equal(JSON.stringify(result), '["status_error-"]');
	}

	checkHiddenFieldValid(testText) {
		headEditor.writeHiddenFieldText(testText);
		const readedContent = headEditor.readHiddenFieldHtmlContent();
		const result = readedContent.match( /status_base--/ig ); 
		assert.equal(JSON.stringify(result), '["status_base--"]');
	}

	checkHiddenFieldInvalid(testText) {
		headEditor.writeHiddenFieldText(testText);
		const readedContent = headEditor.readHiddenFieldHtmlContent();
		const result = readedContent.match( /status_error-/ig ); 
		assert.equal(JSON.stringify(result), '["status_error-"]');
	}

	checkThemeField(testText) {
		headEditor.writeThemeFieldText(testText);
		const readedContent = headEditor.readThemeFieldHtmlContent();
		
	}
}

export default new HeaderSteps();
