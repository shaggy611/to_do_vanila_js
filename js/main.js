// 'use strict';
$(document).ready(function () {
	/*============Function for loading of DATA from local storage==================================*/
	$("#dropdrop").dropdown();
	
	loadAllNotes();
    $('.note_list_item_main').removeClass('beautiful');
	function loadAllNotes() {
		let data = localStorage.getItem("local_storage_content");
		if (data) {
			document.querySelector(".localStorage_start_here").innerHTML = data;
		}
	};
	/*=============================================================================================*/
	$('.note_list_item_main').className = 'ui raised segment note_list_item_main';
	/*=================================================================================*/
	/*This function read a part of HTML code from file and return it like a value of object*/
	let note_block = $.get('./note.html', function (note_data) {
		return note_data;
	});
	/*=============================================================================================*/
	/*This code add one new note (html code form file)*/
	/*=============================================================================================*/
	$('.add_new_note').click(function () {
		$('.insert_new_note').append(note_block.responseText);
		/*=============================================================================*/
		/*Beyond is a part of a code which calculate number of note items.*/
		let note_list_item_field_length = $(".note_list_item_main").last();
		let uuid = `f${(+new Date).toString(16) + Math.random()}`;
		note_list_item_field_length.attr('id', uuid);
		/*=============================================================================*/
	});
	/*=============================================================================================*/
	/*===========When checkbox was checked, make oppositeside text like innactive==================*/
	let CheckBoxActivated = document.querySelector('.insert_new_note');
	let checkBoxMakeNoteItemInactive = CheckBoxActivated.addEventListener('click', CBactivated);

	function CBactivated(event) {
		let which_elem_user_click = event.target;
		let IdOfInput = which_elem_user_click.id;
		if (which_elem_user_click.checked == true) {
			$(`#${IdOfInput}`).next().addClass('chbx_style inactive_text');
			document.querySelector(`#${IdOfInput}`).setAttribute('checked', 'checked');
		}
		else if (which_elem_user_click.checked == false) {
			$(`#${IdOfInput}`).next().removeClass('inactive_text');
			document.querySelector(`#${IdOfInput}`).removeAttribute('checked');
		}
	};
	/*=============================================================================================*/
	/*===Add event listenet for all document for tracking of clicks on different element===========*/
	let addClickListenHere = document.querySelector('#addClickListenHere');
	let note_list_item_listen = addClickListenHere.addEventListener('click', editCurrentElem);
	/*=========================================================================================*/
	function editCurrentElem(event) {
		let which_elem_user_click = event.target;
		/*============================================================================================*/
		/*========This little part make current note with shadow when user clicked on it/ ============*/
		which_elem_user_click.closest('.note_list_item_main').className = 'ui raised segment note_list_item_main beautiful';
		/*============================================================================================*/
		/*==========Add some classes for TAG`s after clicking (for manipulating of current elements)======*/
		if (which_elem_user_click.className == "note_list_item") {
			which_elem_user_click.className = "note_list_item note_list_item_js";
			let addClassForInpFld = $('.note_list_item_js').closest('div').next('.note_list_item_field');
			addClassForInpFld[0].className = 'ui list note_list_item_field note_list_item_field_js';
		};
		/*==========Clear all items in current note=======================================================*/
		if (event.target.className == "ui button clear_note") {
			let note_list = which_elem_user_click.parentElement.parentElement.querySelector('.note_list_item_field');
			note_list.innerHTML = "";
			save_note_to_local_storage();
		};
		/*==========Delete current note===================================================================*/
		if (event.target.className == "fas fa-times delete_note") {
			let note_list = which_elem_user_click.parentElement.parentElement.parentElement;
			note_list.remove();
			save_note_to_local_storage();
		};
		/*==========Save current note=====================================================================*/
		if (event.target.className == "ui button save_note") {
			let xx = event.target.parentNode.previousElementSibling.firstElementChild;
			xx.placeholder = xx.value;
				let cc = event.target.parentElement.previousElementSibling.firstElementChild.nextElementSibling;
				cc.innerHTML = '';
				cc.innerHTML =  get_note_create_date();
			save_note_to_local_storage();
		};
/*This part of a code operate with classes of elements input note and items note. When EventListener detect that user click out of input note or item note, function remove name of classes by which JS collaborate with HTML tags*/
		event.target.onblur = function () {
			$('.note_list_item_main').removeClass('beautiful');
			$('.note_list_item_field').removeClass('note_list_item_field_js');
			$('.note_list_item').removeClass('note_list_item_js');
		}
	};
	/*================================================================================================*/
	/*==========Add new note item after typing a text in input field and pressing Enter key===========*/
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
	/*window.addEventListener('click', remove_class_name_for_elem);

	function remove_class_name_for_elem(event) {
		if (event.target.className !== "ui list note_list_item_field note_list_item_field_js" && event.target.className !== "note_list_item note_list_item_js") {
			$('.note_list_item_field').removeClass('note_list_item_field_js');
			$('.note_list_item_main').removeClass('beautiful');
			$('.note_list_item').removeClass('note_list_item_js');
		};
		if (event.target.className !== "note_list_item note_list_item_js") {
			$('.note_list_item_main').removeClass('beautiful');	
			console.log("FGHDFGHDFGH");	
		};
	};*/
	/*=================================================================================*/
	/*==========Function for saving of new note after clicking on save button==========*/
	function save_note_to_local_storage() {
		let local_storage_content = document.querySelector(".localStorage_start_here").innerHTML;
		localStorage.removeItem("local_storage_content");
		localStorage.clear();
		localStorage.setItem("local_storage_content", local_storage_content);
	};

	function get_note_create_date() {
		let currentDate = new Date();
		let day = currentDate.getDate();
		let month = currentDate.getMonth();
		let year = currentDate.getFullYear();
		let hours = currentDate.getHours();
		let minutes;

		function getMonthName() {
		let month_list = new Array();
		month_list[0] = "January";
		month_list[1] = "February";
		month_list[2] = "March";
		month_list[3] = "April";
		month_list[4] = "May";
		month_list[5] = "June";
		month_list[6] = "July";
		month_list[7] = "August";
		month_list[8] = "September";
		month_list[9] = "October";
		month_list[10] = "November";
		month_list[11] = "December";
		let month_name = month_list[month];
		return month_name;
		}

		if (currentDate.getHours() < 10) {
			minutes = "0" + currentDate.getMinutes();
		}
		else {minutes = currentDate.getMinutes()}

		return (day + "-" + getMonthName() + "-" + year + "    " + hours + ":" + minutes);
	}
	/*=================================================================================*/

	function HideLoadSvg() {
		$(".loading_wrapper").addClass("hide-element");
		$(".js_disable-scroll-onload").removeClass("js_disable-scroll-onload");
		$(".notes-wrapper").removeClass("hide-element");
		$(".notes-wrapper").addClass("show-element");
	}
	setTimeout(HideLoadSvg, 500);
});