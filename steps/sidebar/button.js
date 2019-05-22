import DefaultSteps from '../default';
import page from '../../pages/sidebar/button';

class ButtonSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	clickButton(buttonName) {
		this.page.clickButton(buttonName);
	}
	clickButtonWriteMail() {
		this.page.clickButtonWriteMail()
	}

}

export default new ButtonSteps();
