"use strict";
// Class definition

var KTDatatableHtmlTableGridQuestions = function () {
    // Private functions


    // userQuestion initializer
    var userQuestion = function () {

        var datatable = $('.kt-datatable').KTDatatable({

            pagination: false,
            sortable: false,

            columns: [
                {
                    field: 'employee_id',
            title: '#',
            sortable: false,
            width: 20,
            selector: {
                class: 'kt-checkbox--solid'
            },
            textAlign: 'center',
                },
                {
                    field: 'Id',
                    width: 30,
                },
                {
                    field: 'Question',
                    width: 500,
                },
                {
                    field: 'Subject'
                },
                {
                    field: 'Institution'
                },
                {
                    field: 'Difficulty'
                },
                {
                    field: 'Published',
                   
                    // callback function support for column rendering
                    template: function (row) {
                        var Published = {
                            1: {
                                'title': 'Yes',
                                'class': 'kt-badge--success'
                            },
                            2: {
                                'title': 'No',
                                'class': ' kt-badge--danger'
                            },
                        };
                        return '<span class="kt-badge ' + Published[row.Published].class + ' kt-badge--inline kt-badge--pill">' + Published[row.Published].title + '</span>';
                    },
                },
                
                {
                    field: 'Actions',
					title: 'Actions',
					sortable: false,
					width: 110,
					overflow: 'visible',
					autoHide: false,
                },
            ],
        });
    };

    return {
        // Public functions
        init: function () {
            // init dmeo
            userQuestion();
        }
    };
}();

jQuery(document).ready(function () {
    KTDatatableHtmlTableGridQuestions.init();
});