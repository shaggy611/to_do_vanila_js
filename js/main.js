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


	
	
	
	


	
	
	
	/*$('.note_list_item_js').keypress(function(event){
		if(event.keyCode == 13){
			let note_list_item_js = $('.note_list_item_js').val();
			$('.note_list_item_field_js').append('<div class="item checkbox"><input type="checkbox" tabindex="0"><label class="chbx_style">' + note_list_item_js + '</label></div>');
			$('.note_list_item_js').val('');
		};
	});

   
	$('.clear').click(function(){
		$('.note_list_item_field_js').empty();
	});*/
	
	
	
	
	
	
	
	
	
	
	
	
    
    
    
    
    let addClickListenHere = document.querySelector('#addClickListenHere');
	let note_list_item_listen = addClickListenHere.addEventListener('click', editCurrentElem);
	
	
	
	
	
	
	
	
	
	
	
	
	function editCurrentElem(event) {
		let which_elem_user_click = event.target;
		
		
		
		
		
		
		if (which_elem_user_click.tagName == "INPUT") {
			which_elem_user_click.className = "note_list_item note_list_item_js";
			let addClassForInpFld = $('.note_list_item_js').closest('div').next('.note_list_item_field');
			addClassForInpFld[0].className = 'ui list note_list_item_field note_list_item_field_js';
            
			/*creatNewClassForFieldNote = "ui list note_list_item_field note_list_item_field_js";*/
			/*creatNewClassForFieldNote = "0";*/
			
			
			
			
			
			
			
			$('.note_list_item_js').keypress(function (event) {
			if (event.keyCode == 13) {
				let note_list_item_js = $('.note_list_item_js').val();
				$('.note_list_item_field_js').append('<div class="item checkbox"><input type="checkbox" tabindex="0"><label class="chbx_style">' + note_list_item_js + '</label></div>');
				$('.note_list_item_js').val('');
			};
		});
		}
		else return;
		
		
		
		$('.clear').click(function () {
			$('.note_list_item_field_js').empty();
		});
	};
    
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
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
