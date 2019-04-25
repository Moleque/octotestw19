import DefaultSteps from '../default';
import page from '../../pages/compose/translator';

class TranslatorSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	readText(scrollName) {
		return this.page.readText(scrollName);
    }
    
    closeTranslationWindow() {
        this.page.closeTranslationWindow();
    }

}

export default new TranslatorSteps();