import DefaultSteps from '../default';
import page from '../../pages/compose/editor';

class EditorSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	clearText() {
		this.page.clearText();
	}

	writeText(text) {
		this.page.writeText(text);
	}

	readText() {
		return this.page.readText();
	}

	selectText() {
		this.page.selectText();
	}

	readHtmlContent() {
		return this.page.readHtmlContent();
	}

	readCSSProperty(propertyName) {
		return this.page.readCSSProperty(propertyName);
	}

	addLink(linkUrl, linkText) {
		this.page.addLink(linkUrl, linkText);
	}

	hasImage() {
		return this.page.hasImage();
	}

}

export default new EditorSteps();
