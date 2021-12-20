import { Component } from "../core/component"
import { NoteItem } from "./note-item.component"
import { renderNote } from "../templates/note.template"
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
        const val = {name:"", text:"", id:"", dateOfCreate: ""}
        let id = await apiService.createNote(val)
        this.$el.previousElementSibling.insertAdjacentHTML('afterbegin', renderNote({}, id.name))
    
        new NoteItem(id.name)
    }
}
