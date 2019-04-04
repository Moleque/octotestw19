import DefaultSteps from '../default';
import page from '../../pages/compose/toolbar';

class ToolbarSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	clickToolById(toolId) {
		this.page.clickToolById(toolId);
	}

}

export default new ToolbarSteps();
