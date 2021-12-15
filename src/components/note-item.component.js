import { Component } from "../core/component"
import { apiService } from "../services/api.service"



export class NoteItem extends Component {
    constructor(id, noteIdFirebase) {
        super(id)
        this.id = id
        this.noteIdFirebase = noteIdFirebase

    }

    init() {
        this.$el.addEventListener('click', ButtonsHandler.bind(this))
        this.$el.addEventListener('keyup', ButtonsHandler.bind(this))
    }

    value() {
        const value = {}
        value.name = this.$el.querySelector('.note-name').textContent
        value.text = this.$el.querySelector('.js-add-note-text').textContent
        value.id = this.id

        return value
    }

}


async function ButtonsHandler(event) {
    if(event.target.classList.contains('js-save-note')) {
        console.log(this.noteIdFirebase)
        if(this.noteIdFirebase === undefined) {
            let noteData = this.value()
            await apiService.createNote(noteData)
        } else {
            let noteData = this.value()
            console.log(this.noteIdFirebase)
            await apiService.updateNote(noteData, this.noteIdFirebase)
        }
        
    }

    if(event.target.classList.contains('js-clear-note')) {
        this.$el.querySelector('.js-add-note-text').innerHTML=""
    }

    if(event.target.classList.contains('js-delete-note')) {
        await apiService.deleteNote(this.noteIdFirebase)
        this.$el.remove()
    }

    if(event.keyCode === 13 && event.target.classList.contains('js-add-note-li')) {
        this.$el.querySelector('.js-note-list-field').insertAdjacentHTML('afterbegin', liInsert())
    }
}

function liInsert() {
    return `
       <div>
         <input type="checkbox" class="note-checkbox-input"/><span id="indeterminate-checkbox" contenteditable="true" class="note-list-item" data-text="Text here..."></span>
       </div> 
    `
}