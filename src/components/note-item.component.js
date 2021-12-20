import { Component } from "../core/component"
import { apiService } from "../services/api.service"
import { Time } from "../services/time.service"


export class NoteItem extends Component {
    constructor(id) {
        super(id)
        this.id = id
        this.dateOfCreate = Time.currentTime()
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
        value.dateOfCreate = this.dateOfCreate
        return value
    }
}

async function ButtonsHandler(event) {
    if(event.target.classList.contains('js-save-note')) {
        let noteData = this.value()
        this.$el.querySelector('.js-time_of_create').textContent = this.dateOfCreate
        await apiService.updateNote(noteData, this.id)
    }

    if(event.target.classList.contains('js-clear-note')) {
        this.$el.querySelector('.js-add-note-text').innerHTML=""
    }
            
    if(event.target.classList.contains('js-delete-note')) {
        await apiService.deleteNote(this.id)
        this.$el.remove()
    }       

    if(event.keyCode === 13 && event.target.classList.contains('js-add-note-li')) {
        this.$el.querySelector('.js-note-list-field').insertAdjacentHTML('afterbegin', liInsert())
    }

    if(event.target.classList.contains('js-palette')) {
        this.$el.querySelector('.palette').classList.remove('hide-el')
    }

    if(event.target.classList.contains('js-blue')) {
        this.$el.classList.add('note-collor-blue')
        this.$el.querySelector('.palette').classList.add('hide-el')
    }

    if(event.target.classList.contains('js-green')) {
        this.$el.classList.add('note-collor-green')
        this.$el.querySelector('.palette').classList.add('hide-el')
    }

    if(event.target.classList.contains('js-orange')) {
        this.$el.classList.add('note-collor-orange')
        this.$el.querySelector('.palette').classList.add('hide-el')
    }
}

function liInsert() {
    return `
       <div>
         <input type="checkbox" class="note-checkbox-input"/><span id="indeterminate-checkbox" contenteditable="true" class="note-list-item" data-text="Text here..."></span>
       </div> 
    `
}