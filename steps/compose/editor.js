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

	readHtmlContent() {
		return this.page.readHtmlContent();
	}

}

export default new EditorSteps();
