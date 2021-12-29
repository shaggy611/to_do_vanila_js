import { Component } from "../core/component";
import { NoteItem } from "./note-item.component";
import { apiService } from "../services/api.service";
import { Transform } from "../services/transform.service";
import { renderNote } from "../templates/note.template";

export class Notes extends Component {
    constructor(id) {
        super(id)

    }

    async init() {
        let notesFromFB = await apiService.getNotes() || {}
        const notes =  Transform.FBobjectToArray(notesFromFB)
        notes.map(note => {
            this.$el.querySelector('.row').insertAdjacentHTML('afterbegin', renderNote(note, note.idFirebase))
            new NoteItem(note.idFirebase)
            
        })
    }

}