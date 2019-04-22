"use strict";
// Class definition

var KTDatatableHtmlTableGrid = function() {
    // Private functions


    // gridCourses initializer
    var gridCourses = function() {

        var datatable = $('#html_courses').KTDatatable({

            pagination: false,
            sortable: false,

            columns: [{
                    field: 'Photo',
                    width: 40,
                },
                {
                    field: 'Teacher',
                },
                {
                    field: 'Subject',
                },

                {
                    field: 'Status',

                    // callback function support for column rendering
                    template: function(row) {
                        var status = {
                            1: {
                                'title': 'Active',
                                'class': 'kt-badge--success'
                            },
                            2: {
                                'title': 'Inactive',
                                'class': ' kt-badge--danger'
                            },
                        };
                        return '<span class="kt-badge ' + status[row.Status].class + ' kt-badge--inline kt-badge--pill">' + status[row.Status].title + '</span>';
                    },
                },
                {
                    field: 'Type',

                    // callback function support for column rendering
                    template: function(row) {
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




    var gridStudents = function() {

        var datatable = $('#html_students').KTDatatable({

            pagination: false,
            sortable: false,

            columns: [{
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
                },
                {
                    field: 'Photo',
                    width: 40,
                },
                {
                    field: 'Name',
                },
                {
                    field: 'Address',
                },
                {
                    field: 'Date of Birth',
                },
                {
                    field: 'Phone',
                },
                {
                    field: 'Email',
                    width: 200,
                },
                {
                    field: 'Average',
                },
                {
                    field: 'Created At',
                },
                {
                    field: 'Status',

                    // callback function support for column rendering
                    template: function(row) {
                        var status = {
                            1: {
                                'title': 'Active',
                                'class': 'kt-badge--success'
                            },
                            2: {
                                'title': 'Inactive',
                                'class': ' kt-badge--danger'
                            },
                        };
                        return '<span class="kt-badge ' + status[row.Status].class + ' kt-badge--inline kt-badge--pill">' + status[row.Status].title + '</span>';
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

    var gridExams = function() {

        var datatable = $('#html_exams').KTDatatable({

            pagination: false,
            sortable: false,

            columns: [{
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
                },

                {
                    field: 'Name',
                    width: 50,
                },
                {
                    field: 'Created At',
                },
                {
                    field: 'Start Date',
                },
                {
                    field: 'Star End',
                },
                {
                    field: 'Deadline',
                },
                {
                    field: 'Correction',
                },
                {
                    field: 'Average',
                },
                {
                    field: 'Status',

                    // callback function support for column rendering
                    template: function(row) {
                        var status = {
                            1: {
                                'title': 'Active',
                                'class': 'kt-badge--success'
                            },
                            2: {
                                'title': 'Inactive',
                                'class': ' kt-badge--danger'
                            },
                        };
                        return '<span class="kt-badge ' + status[row.Status].class + ' kt-badge--inline kt-badge--pill">' + status[row.Status].title + '</span>';
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
        init: function() {
            // init
            gridCourses();
            gridStudents();
            gridExams();
        }
    };
}();



jQuery(document).ready(function() {
    KTDatatableHtmlTableGrid.init();
});