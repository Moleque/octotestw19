import DefaultSteps from '../default';
import page from '../../pages/sidebar/button';

class ButtonSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	clickButton(buttonId) {
		this.page.clickButton(buttonId);
	}
	
}

export default new ButtonSteps();
