import { Component } from "../core/component";
import { renderNote } from "../templates/note.template";

export class Notes extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        let noteHTML = renderNote()
        let insertionPlace = this.$el.querySelector('.row')
        insertionPlace.insertAdjacentHTML('afterbegin', renderNote())
        insertionPlace.insertAdjacentHTML('afterbegin', renderNote())
        insertionPlace.insertAdjacentHTML('afterbegin', renderNote())
        insertionPlace.insertAdjacentHTML('afterbegin', renderNote())
        insertionPlace.insertAdjacentHTML('afterbegin', renderNote())
        insertionPlace.insertAdjacentHTML('afterbegin', renderNote())
    }
}