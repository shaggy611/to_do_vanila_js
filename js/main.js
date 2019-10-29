'use strict';
$(document).ready(function(){

let note_block = $.get('./note.html', function(note_data){
    return note_data;
});
    $('.add_new_note').click(function(){
        $('.insert_new_note').append(note_block.responseText);
    });




    
    
    
    
    
    

     
	$('.note_list_item').keypress(function(event){
		if(event.keyCode == 13){
			let note_list_item = $('.note_list_item').val();
			$('.note_list_item_field').append('<div class="item checkbox"><input type="checkbox" tabindex="0"><label class="chbx_style">' + note_list_item + '</label></div>');
			$('.note_list_item').val('');
		};
	});

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
	$('.clear').click(function(){
		$('.note_list_item_field').empty();
	});






});
