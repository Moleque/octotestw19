import DefaultSteps from '../default';
import page from '../../pages/compose/toolbar';

class ToolbarSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	clickToolByName(toolName) {
		this.page.clickToolByName(toolName);
	}

	setColor(toolName, colorName) {
		this.page.setColor(toolName, colorName);
	}

	setParamListItem(toolName, itemName) {
		this.page.setParamListItem(toolName, itemName);
	}

}

export default new ToolbarSteps();
