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
        let notesFromFB = await apiService.getNotes()
        const notes =  Transform.FBobjectToArray(notesFromFB)

        notes.map(note => {
            this.$el.querySelector('.row').insertAdjacentHTML('afterbegin', renderNote(note))
        })

        // this.$el.addEventListener('click', ButtonsHandler.bind(this))
        // this.$el.addEventListener('keypress', ButtonsHandler.bind(this))
    }

}

// function ButtonsHandler(event) {
//     if(event.target.classList.contains('js-save-note')) {
        
//     }

//     if(event.target.classList.contains('js-clear-note')) {
        
//     }

//     if(event.target.classList.contains('js-delete-note')) {
//         event.target.closest('.note').remove()
//     }

//     if(event.target.key === 'Enter' && event.target.classList.contains('js-add-note-li')) {
//         this.$el.querySelector('.js-note-list-field').insertAdjacentHTML('afterbegin', liInsert())
//     }
// }