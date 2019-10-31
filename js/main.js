'use strict';
$(document).ready(function(){

	
	
/*============================================================================*/
/*This function read a part of HTML code from file and return it like a value of object*/
let note_block = $.get('./note.html', function(note_data){
    return note_data;
});
/*============================================================================*/	
	
/*This code add one new note (html code form file)*/	
/*============================================================================*/
    $('.add_new_note').click(function(){
        $('.insert_new_note').append(note_block.responseText);
		
		/*====================================================================*/
		/*Beyond is a part of a code which calculate number of note items.*/
		
		
		/*let note_list_item_field_length = $(".note_list_item_main .note_list_item_field").length+1;
        console.log(note_list_item_field_length);*/
		
		
		
		
		
		let note_list_item_field_length = $(".insert_new_note .col_padd_down").length;
		/*for (let i = 1; i <= note_list_item_field_length; i++) {
			$(".item:first").addClass("item" + i).removeClass("item");
		
		}*/
		console.log(note_list_item_field_length);
		
		
		
		
		
		
		
		/*====================================================================*/
    });
/*============================================================================*/	




	
	
	
	$('.note_list_item_js').keypress(function(event){
		if(event.keyCode == 13){
			let note_list_item_js = $('.note_list_item_js').val();
			$('.note_list_item_field_js').append('<div class="item checkbox"><input type="checkbox" tabindex="0"><label class="chbx_style">' + note_list_item_js + '</label></div>');
			$('.note_list_item_js').val('');
		};
	});

   
	$('.clear').click(function(){
		$('.note_list_item_field_js').empty();
	});
	
	
	
    
    
    
    
    let addClickListenHere = $('.addClickListenHere');
	let note_list_item_listen = addClickListenHere.addEventListener('click', editCurrentElem);
	function editCurrentElem(event) {
		let which_elem_user_click = event.target;
		which_elem_user_click.addClass('note_list_item_js');
	};
   
    
	
	
	
	
	
	
	
	






});
