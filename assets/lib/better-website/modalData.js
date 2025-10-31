//@ts-check
/**
 * Example:
 * ```
 * var rootModal = new ModalData({key: "underConstruction", title: "Modal Title", content: {
 * 	 description: "Modal Description",
 * 	 buttons: {
 * 	   1: {
 *       label: "Close", style: "link", action: "close"
 *     }, 
 *     2: {
 *       label: "Continue", style: "", action: "close"
 *     }
 *   }
 * }});
 * ```
 */

export default class ModalData {
	constructor({key, title, content}) {
		this.key = key;
		this.title = title;
		this.content = content;
	}

	/**
	 * @param {string} key 
	 */
	display(key) {
		if (key == undefined || key == "") {
			throw new Error(`key cannot be empty or undefined`);
		} else if (key !== this.key) {
			throw new Error(`key ${key} is not defined`);
		} else {
			var description = this.content.description;
			var title = this.title;

			// button
			var buttonResult = "";

			// button style and actions
			for (var value in this.content.buttons) {
				var buttonStyle = "";
				var buttonAction = "";
				
				// style
				switch (this.content.buttons[value].style) {
					case "link":
						buttonStyle += "modal__button-link"; break;
					default:
						buttonStyle += "modal__button-width"; break;
				}

				// action
				switch (this.content.buttons[value].action) {
					case "close":
						buttonAction += "close-modal"; break;
					default:
						buttonAction += ""; break;
				}

				buttonResult += `<button class="modal__button ${buttonStyle} ${buttonAction}">
					${this.content.buttons[value].label}
				</button>\n`;
			}
			
			return `<h1 class="modal__title">${title}</h1> 
			  <p class="modal__description">${description}</p> 
			  ${buttonResult}
		  `;
		}
	}
}
