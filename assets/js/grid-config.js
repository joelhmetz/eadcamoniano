"use strict";
// Class definition

var KTDatatableHtmlTableGrid = function() {
    // Private functions


    // gridCourses initializer
    var gridReferences = function() {

        var datatable = $('#html_reference').KTDatatable({

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
                    field: 'Course',
                },
                {
                    field: 'Course Group',
                },
                {
                    field: 'Discipline',
                },
                {
                    field: 'Institution',
                },
                {
                    field: 'Level',
                },
                {
                    field: 'Organizer',
                },
                {
                    field: 'Subject',
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




    var gridConfigures = function() {

        var datatable = $('#html_configure').KTDatatable({

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
                    field: 'Category',
                },
                {
                    field: 'City',
                },
                {
                    field: 'Educational Institution',
                },
                {
                    field: 'State',
                },
                {
                    field: 'Subcategory'
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
            gridReferences();
            gridConfigures();
           
        }
    };
}();



jQuery(document).ready(function() {
    KTDatatableHtmlTableGrid.init();
});