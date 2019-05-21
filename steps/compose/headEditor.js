import DefaultSteps from '../default';
import page from '../../pages/compose/headEditor';

class HeadEditorSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	writeReceiverFieldText(text) {
		this.page.writeReceiverFieldText(text);
    }
    
    writeThemeFieldText(text) {
		this.page.writeThemeFieldText(text);
    }

    writeCopyFieldText(text) {
		this.page.writeCopyFieldText(text);
    }

    writeHiddenFieldText(text) {
		this.page.writeHiddenFieldText(text);
    }

    // Читать HTML-содержимое поля "Кому"
    readReceiverFieldHtmlContent() {
        this.page.readReceiverFieldHtmlContent();
    }

    // Читать HTML-содержимое поля "Копия"
    readCopyFieldHtmlContent() {
        this.page.readCopyFieldHtmlContent();
    }

    // Читать HTML-содержимое поля "Скрытая"
    readHiddenFieldHtmlContent() {
        this.page.readHiddenFieldHtmlContent();
    }

    // Читать HTML-содержимое поля "Тема"
    readThemeFieldHtmlContent() {
        this.page.readThemeFieldHtmlContent();
    }

    // Очистить содержимое поля "Кому"
    clearReceiverFieldText() {
        this.page.clearReceiverFieldText();
    }

    // Очистить содержимое поля "Копия"
    clearCopyFieldText() {
        this.page.clearCopyFieldText();
    }

    // Очистить содержимое поля "Скрытая"
    clearHiddenFieldText() {
        this.page.clearHiddenFieldText();
    }

    // Очистить содержимое поля "Тема"
    clearThemeFieldText() {
        this.page.clearThemeFieldText();
    }


}

export default new HeadEditorSteps();
