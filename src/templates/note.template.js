export function renderNote() {


    return `
        <div class="four wide column col_pad_top">
            <div class="ui raised segment note_list_item_main">
                <div class="field">

                
                    <div class="fas fa-times delete_note"></div>
                    <div class="time_of_create"></div>
                    <input type="text" name="list_item" placeholder="Name of your note" class="note_name name_without_border" autocomplete="off">


                    <div class="ui divider divider_own"></div>


                    <div class="ui input input_width">
                        <input type="text" name="list_item" placeholder="Add new list item" class="note_list_item" autocomplete="off">
                        </div>
                    <div class="ui list note_list_item_field"> </div>


                </div>


                <div class="button_group">
                    <button class="ui button save_note">Save</button>
                    <button class="ui button clear_note">Clear</button>
                </div>
            </div>
        </div>
    `
}