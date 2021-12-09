import { Component } from "../core/component";
import { renderNote } from "../templates/note.template";

export class Notes extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        let noteHTML = renderNote()
        this.$el.insertAdjacentHTML('afterbegin', noteHTML)

    }
}