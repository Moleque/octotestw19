import DefaultSteps from '../default';
import page from '../../pages/compose/toolbar';

class ToolbarSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	clickToolByName(toolName) {
		this.page.clickToolByName(toolName);
	}

	chooseColor(colorName) {
		this.page.chooseColor(colorName);
	}

	chooseListItem(itemName) {
		this.page.chooseListItem(itemName);
	}

	addImageToEditor(imagePath) {
		this.page.addImageToEditor(imagePath);
	}

}

export default new ToolbarSteps();
