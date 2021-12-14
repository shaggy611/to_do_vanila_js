import { Component } from "../core/component"
import { apiService } from "../services/api.service"



export class NoteItem extends Component {
    constructor(id) {
        super(id)
        this.id = id

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


function ButtonsHandler(event) {
    if(event.target.classList.contains('js-save-note')) {
        let noteData = this.value()
        apiService.createNote(noteData)
    }

    if(event.target.classList.contains('js-clear-note')) {
        this.$el.querySelector('.js-note-list-field').innerHTML=""
    }

    if(event.target.classList.contains('js-delete-note')) {
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