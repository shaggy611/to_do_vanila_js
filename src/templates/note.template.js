export function renderNote({name='', text='', id='', dateOfCreate='', noteColor}, noteId) {

    return `
            <div class="note" id="${id || noteId}" data-color="${noteColor}">
                <div class="field">

                    <span class="fas fa-times delete-note js-delete-note"></span>
                    <div class="time_of_create js-time_of_create">${dateOfCreate}</div>
                    <div type="text" contenteditable="true" data-text="Enter name here" class="note-name">${name}</div>
                    <div name="note-text-item" data-text="Text here..." class="js-add-note-text note-textarea" contenteditable=true>${text}</div>
                </div>

                <div class="button_group">
                <i class="fas fa-save js-save-note"></i>
                <i class="fas fa-eraser js-clear-note"></i>
                <i class="fas fa-palette js-palette"></i>

                <div class="palette hide-el">
                    <div class="js-blue note-collor note-collor-blue"></div>
                    <div class="js-orange note-collor note-collor-orange"></div>
                    <div class="js-green note-collor note-collor-green"></div>
                </div>
                </div>
            </div>

    `
}