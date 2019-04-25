import DefaultSteps from '../default';
import page from '../../pages/sidebar/button';

class ButtonSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	clickButton(buttonName) {
		this.page.clickButton(buttonName);
	}
	
}

export default new ButtonSteps();
