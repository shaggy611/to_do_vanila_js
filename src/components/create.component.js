import { Component } from "../core/component"
import { NoteItem } from "./note-item.component"
import { renderNote } from "../templates/note.template"
import { idGeneratorService } from "../services/id-generator.service"
import { apiService } from "../services/api.service"

export class CreateComponent extends Component {
    constructor(id) {
        super(id)
        
    }

    init() {
        this.$el.addEventListener('click', buttonHandler.bind(this))
    }
}

async function buttonHandler(event) {
    if(event.target.classList.contains('js-add-new-note')) {
        const noteId = idGeneratorService.generator()
        this.$el.previousElementSibling.insertAdjacentHTML('afterbegin', renderNote({}, noteId))

        new NoteItem(noteId)

        // let noteData = note.value()
        // let response = await apiService.createNote(noteData)
    }
}
