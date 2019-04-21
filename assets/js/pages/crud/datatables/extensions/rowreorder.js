"use strict";
var KTDatatablesExtensionsRowreorder = function() {

	var initTable1 = function() {
		var table = $('#kt_table_1');

		// begin first table
		table.DataTable({
		pagination: false,
		sortable: false,
			responsive: true,
			rowReorder: {
				selector: 'tr',
			},
			
		});
	};

	return {

		//main function to initiate the module
		init: function() {
			initTable1();
		}
	};
}();

jQuery(document).ready(function() {
	KTDatatablesExtensionsRowreorder.init();
});