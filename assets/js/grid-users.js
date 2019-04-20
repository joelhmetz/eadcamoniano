"use strict";
// Class definition

var KTDatatableHtmlTableGridUsers = function () {
    // Private functions


    // userGrid initializer
    var userGrid = function () {

        var datatable = $('.kt-datatable').KTDatatable({

            pagination: false,
            sortable: false,

            columns: [
                {
                    field: 'Photo',
                    width: 40,
                },
                {
                    field: 'First Name'
                },
                {
                    field: 'Last Name'
                },
                {
                    field: 'Company'
                },
                {
                    field: 'Email',
                    width: 200,
                },
                {
                    field: 'Phone'
                },
                {
                    field: 'Status',
                   
                    // callback function support for column rendering
                    template: function (row) {
                        var status = {
                            1: {
                                'title': 'Pending',
                                'class': 'kt-badge--brand'
                            },
                            2: {
                                'title': 'Delivered',
                                'class': ' kt-badge--success'
                            },
                            3: {
                                'title': 'Canceled',
                                'class': ' kt-badge--metal'
                            },
                            4: {
                                'title': 'Success',
                                'class': ' kt-badge--success'
                            },
                            5: {
                                'title': 'Info',
                                'class': ' kt-badge--info'
                            },
                            6: {
                                'title': 'Danger',
                                'class': ' kt-badge--danger'
                            },
                            7: {
                                'title': 'Warning',
                                'class': ' kt-badge--warning'
                            },
                        };
                        return '<span class="kt-badge ' + status[row.Status].class + ' kt-badge--inline kt-badge--pill">' + status[row.Status].title + '</span>';
                    },
                },
                {
                    field: 'Type',
                   
                    // callback function support for column rendering
                    template: function (row) {
                        var status = {
                            1: {
                                'title': 'Online',
                                'state': 'warning'
                            },
                            2: {
                                'title': 'Retail',
                                'state': 'primary'
                            },
                            3: {
                                'title': 'Direct',
                                'state': 'success'
                            },
                        };
                        return '<span class="kt-badge kt-badge--' + status[row.Type].state + ' kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-' + status[row.Type].state + '">' + status[row.Type].title + '</span>';
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
            userGrid();
        }
    };
}();



jQuery(document).ready(function () {
    KTDatatableHtmlTableGridUsers.init();
});