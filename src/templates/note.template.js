export function renderNote() {


    return `

            <div class="note">
                <div class="field">

                    <div class="fas fa-times delete_note"></div>
                    <div class="time_of_create"></div>
                    <input type="text" name="list_item" placeholder="Name of your note" class="note-name" autocomplete="off">


                    <div class="divider"></div>


                    <input type="text" name="list_item" placeholder="Add new list item" class="note_list_item" autocomplete="off">
                    <div class="note-list-field"> </div>

                </div>


                <div class="button_group">
                    <button class="save_note">Save</button>
                    <button class="clear_note">Clear</button>
                </div>
            </div>

    `
}