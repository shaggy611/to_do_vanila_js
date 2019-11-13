'use strict';
$(document).ready(function () {
			/*============================================================================*/
			/*This function read a part of HTML code from file and return it like a value of object*/
			let note_block = $.get('./note.html', function (note_data) {
				return note_data;
			});
			/*============================================================================*/
			/*This code add one new note (html code form file)*/
			/*============================================================================*/
			$('.add_new_note').click(function () {
				$('.insert_new_note').append(note_block.responseText);
				/*====================================================================*/
				/*Beyond is a part of a code which calculate number of note items.*/
				let note_list_item_field_length = $(".insert_new_note .col_padd_down").last();
				let uuid = `f${(+new Date).toString(16) + Math.random()}`;
				note_list_item_field_length.attr('id', uuid);
				/*========================================================================*/
			});
/*========================================================================================*/	

	
	
	
	let CheckBoxActivated  = document.querySelector('.insert_new_note');
	let checkBoxMakeNoteItemInactive = CheckBoxActivated.addEventListener('click', CBactivated);
	function CBactivated(event) {
		let which_elem_user_click = event.target;
		let IdOfInput = which_elem_user_click.id;
		
		if (which_elem_user_click.checked == true) {
			$(`#${IdOfInput}`).next().addClass('chbx_style inactive_text');
		}
		else if (which_elem_user_click.checked == false) {
				 $(`#${IdOfInput}`).next().removeClass('inactive_text');
				 }
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
    let addClickListenHere = document.querySelector('#addClickListenHere');
	let note_list_item_listen = addClickListenHere.addEventListener('click', editCurrentElem);
	
	
	function editCurrentElem(event) {
		let which_elem_user_click = event.target;
		
		let a = which_elem_user_click.parentNode;
		console.log(a);
		
		
		
		if (which_elem_user_click.className == "ui button clear") {
	let first_close = which_elem_user_click.parentElement('field');
	console.log(first_close);
};
		
		
		
		if (which_elem_user_click.className == "note_list_item") {
			which_elem_user_click.className = "note_list_item note_list_item_js";
			let addClassForInpFld = $('.note_list_item_js').closest('div').next('.note_list_item_field');
			addClassForInpFld[0].className = 'ui list note_list_item_field note_list_item_field_js';
            console.log(addClassForInpFld);	
		}
	
		
		
		
		
		
		
		/*$('.clear').click(function () {
			$('.note_list_item_field_js').empty();
		});*/
		
		
		
	
		/*if (which_elem_user_click.tagName == "BUTTON") {
			which_elem_user_click.closest('button_group').prev('.note_list_item_field').empty();
			let bb = which_elem_user_click.closest('button_group');
			console.log(bb);
			};*/
	};
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	$(document).keypress(function (event) {
				if (event.keyCode == 13) {
					
					
					
const uuid = `f${(+new Date).toString(16)}`;
					
					
					
					let note_list_item_js_1 = $('.note_list_item_js').val();

					$('.note_list_item_field_js').append('<div class="item checkbox"><input type="checkbox" tabindex="0" class="chbx" id="' + uuid + '"><label class="chbx_style">' + note_list_item_js_1 + '</label></div>');
					$('.note_list_item_js').val('');
					
					

				}
				
		});
	
    
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
/*================================================================================*/	
	/*This part of a code operate with classes of elements input note and items note. When EventListener detect that user click out of input note or item note, function remove name of classes by which JS collaborate with HTML tags*/
	
    document.addEventListener('click', remove_class_name_for_elem);
    
    function remove_class_name_for_elem (event) {
            if (event.target.className != "note_list_item note_list_item_js") {
				
				$('.note_list_item').removeClass('note_list_item_js');
				
			}
            if (event.target.className != "ui list note_list_item_field note_list_item_field_js" && event.target.className != "note_list_item note_list_item_js") {
				$('.note_list_item_field').removeClass('note_list_item_field_js');
			}
        /*if (event.target.className != "note_list_item_js") {
				$('.note_list_item').removeClass('note_list_item_js');
				
			}*/
        
    }
 /*=================================================================================*/  
    
	
	
	
	
	  
	
	
	






});
