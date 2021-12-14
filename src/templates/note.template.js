export function renderNote(note, noteId, options = {local: true}) {

    return `

            <div class="note" id="${noteId}">
                <div class="field">

                    <div class="fas fa-times delete-note js-delete-note"></div>
                    <div class="time_of_create"></div>
                    <div type="text" contenteditable="true" data-text="Enter name here" class="note-name"></div>
                    <div name="note-text-item" data-text="Text here..." class="js-add-note-text note-textarea" contentEditable=true></div>
                </div>

                <div class="button_group">
                <a class="waves-effect waves-light btn blue lighten-2 js-save-note">Save</a>
                <a class="waves-effect waves-light btn deep-orange lighten-2 js-clear-note">Clear</a>
                </div>
            </div>

    `
}

{/* <input type="text" name="list-item" placeholder="Add new list item" class="js-add-note-li add-note-li" autocomplete="off">
                    <ul class="js-note-list-field"></ul> */}