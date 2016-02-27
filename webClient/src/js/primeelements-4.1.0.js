/*
 * PrimeUI 4.1.0
 * 
 * Copyright 2009-2015 PrimeTek.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if (!xtag.tags['p-accordion']) {

    xtag.register('p-accordion', {

        accessors: {
            activeindex: {
                attribute: {}
            },
            multiple: {
                attribute: {
                    boolean: true
                }
            },
            onchange: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                var element = $(this),
                    tabs = $(this).children('p-tab'),
                    $this = this;

                element.append('<div></div>');

                this.xtag.container = element.children('div');

                for (var i = 0; i < tabs.length; i++) {
                    var tab = tabs.eq(i),
                        title = tab.attr('title') || '';

                    this.xtag.container.append('<h3>' + title + '</h3>').append();
                    $('<div></div>').append(tab.contents()).appendTo(this.xtag.container);
                }

                this.xtag.container.puiaccordion({
                    activeIndex: this.activeindex || 0,
                    orientation: this.orientation || 'top',
                    change: this.onchange ? function (event, panel) {
                        PUI.executeFunctionByName($this.onchange, event, panel);
                    } : null
                });
            }
        },

        methods: {
            select: function (index) {
                this.xtag.container.puiaccordion('select', index);
            },
            unselect: function (index) {
                this.xtag.container.puiaccordion('unselect', index);
            }
        }

    });

}
if (!xtag.tags['p-autocomplete']) {

    xtag.register('p-autocomplete', {

        extends: 'input',

        accessors: {
            completesource: {
                attribute: {}
            },
            delay: {
                attribute: {}
            },
            minquerylength: {
                attribute: {}
            },
            multiple: {
                attribute: {
                    boolean: true
                }
            },
            dropdown: {
                attribute: {
                    boolean: true
                }
            },
            scrollheight: {
                attribute: {}
            },
            forceselection: {
                attribute: {
                    boolean: true
                }
            },
            effect: {
                attribute: {}
            },
            effectspeed: {
                attribute: {}
            },
            content: {
                attribute: {}
            },
            casesensitive: {
                attribute: {
                    boolean: true
                }
            },
            onselect: {
                attribute: {}
            },
            onunselect: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                var $this = this;

                $(this).puiautocomplete({
                    completeSource: this.completesource ? PUI.resolveObjectByName(this.completesource) : null,
                    delay: this.delay || 300,
                    minQueryLength: this.minQueryLength || 1,
                    multiple: this.multiple,
                    dropdown: this.dropdown,
                    scrollHeight: this.scrollheight || 200,
                    forceSelection: this.forceselection,
                    effect: this.effect,
                    effectSpeed: this.effectspeed || 'normal',
                    caseSensitive: this.casesensitive,
                    select: this.onselect ? function (event, item) {
                        PUI.executeFunctionByName($this.onselect, event, item);
                    } : null,
                    unselect: this.onunselect ? function (event, item) {
                        PUI.executeFunctionByName($this.onunselect, event, item);
                    } : null,
                });
            }
        }

    });

}
if (!xtag.tags['p-button']) {

    xtag.register('p-button', {

        extends: 'button',

        accessors: {
            icon: {
                attribute: {}
            },
            iconPos: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                $(this).puibutton({
                    icon: this.icon,
                    iconPos: this.iconPos || 'left'
                });
            }
        },

        methods: {
            disable: function () {
                $(this).puibutton('disable');
            },
            enable: function () {
                $(this).puibutton('enable');
            }
        }

    });

}
if (!xtag.tags['p-carousel']) {

    xtag.register('p-carousel', {

        accessors: {
            datasource: {
                attribute: {}
            },
            numvisible: {
                attribute: {}
            },
            firstvisible: {
                attribute: {}
            },
            headertext: {
                attribute: {}
            },
            effectduration: {
                attribute: {}
            },
            circular: {
                attribute: {}
            },
            breakpoint: {
                attribute: {}
            },
            responsive: {
                attribute: {}
            },
            autoplayinterval: {
                attribute: {}
            },
            easing: {
                attribute: {}
            },
            pagelinks: {
                attribute: {}
            },
            onpagechange: {
                attribute: {}
            },
            renderdelay: {
                attribute: {}
            },
            style: {
                attribute: {}
            },
            styleclass: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                var $this = this;

                if (this.renderdelay) {
                    setTimeout(function () {
                        $this.render();
                    }, parseInt(this.renderdelay));
                }
                else {
                    this.render();
                }
            }
        },
        methods: {
            render: function () {
                this.xtag.container = $(this).prepend('<ul></ul>').children('ul');

                var $this = this;
                $(this.xtag.container).puicarousel({
                    datasource: this.datasource ? PUI.resolveObjectByName(this.datasource) : null,
                    numVisible: this.numvisible ? parseInt(this.numvisible) : 3,
                    firstVisible: this.firstvisible ? parseInt(this.firstvisible) : 0,
                    headerText: this.headertext,
                    effectduration: this.effectduration ? parseInt(this.effectduration) : 500,
                    circular: this.circular,
                    breakpoint: this.breakpoint ? parseInt(this.breakpoint) : 560,
                    responsive: this.responsive ? JSON.parse(this.responsive) : true,
                    autoplayInterval: this.autoplayinterval ? parseInt(this.autoplayinterval) : 0,
                    easing: this.easing || 'easeInOutCirc',
                    pageLinks: this.pagelinks ? parseInt(this.pagelinks) : 3,
                    template: $(this).children('template'),
                    pageChange: this.onpagechange ? function (event, param) {
                        PUI.executeFunctionByName($this.onpagechange, event, param);
                    } : null,
                    style: this.style,
                    styleClass: this.styleClass
                });
            }
        }
    });

}
if (!xtag.tags['p-checkbox']) {

    xtag.register('p-checkbox', {

        extends: 'input',

        lifecycle: {
            created: function () {
                $(this).puicheckbox();
            }
        }

    });

}
if (!xtag.tags['p-column']) {

    xtag.register('p-column', {

        accessors: {
            field: {
                attribute: {}
            },
            headertext: {
                attribute: {}
            },
            footertext: {
                attribute: {}
            },
            sortable: {
                attribute: {
                    boolean: true
                }
            },
            headerstyle: {
                attribute: {}
            },
            headerclass: {
                attribute: {}
            },
            bodystyle: {
                attribute: {}
            },
            bodyclass: {
                attribute: {}
            },
            colspan: {
                attribute: {}
            },
            rowspan: {
                attribute: {}
            },
            filter: {
                attribute: {}
            },
            filtermatchmode: {
                attribute: {}
            },
            filterfunction: {
                attribute: {}
            },
            editor: {
                attribute: {}
            },
            rowtoggler: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {

            }
        }

    });

}
if (!xtag.tags['p-datatable']) {

    xtag.register('p-datatable', {

        accessors: {
            datasource: {
                attribute: {}
            },
            paginator: {
                attribute: {
                    boolean: true
                }
            },
            rows: {
                attribute: {}
            },
            totalrecords: {
                attribute: {}
            },
            selectionmode: {
                attribute: {}
            },
            caption: {
                attribute: {}
            },
            footer: {
                attribute: {}
            },
            sortfield: {
                attribute: {}
            },
            sortorder: {
                attribute: {}
            },
            keepSelectionInLazyMode: {
                attribute: {}
            },
            scrollable: {
                attribute: {
                    boolean: true
                }
            },
            scrollheight: {
                attribute: {}
            },
            scrollwidth: {
                attribute: {}
            },
            responsive: {
                attribute: {
                    boolean: true
                }
            },
            expandablerows: {
                attribute: {
                    boolean: true
                }
            },
            rowexpandmode: {
                attribute: {}
            },
            draggablecolumns: {
                attribute: {
                    boolean: true
                }
            },
            draggablerows: {
                attribute: {
                    boolean: true
                }
            },
            resizablecolumns: {
                attribute: {
                    boolean: true
                }
            },
            columnresizemode: {
                attribute: {}
            },
            filterdelay: {
                attribute: {}
            },
            stickyheader: {
                attribute: {
                    boolean: true
                }
            },
            editmode: {
                attribute: {}
            },
            tabindex: {
                attribute: {}
            },
            onsort: {
                attribute: {}
            },
            onrowselect: {
                attribute: {}
            },
            onrowunselect: {
                attribute: {}
            },
            onrowselectcontextmenu: {
                attribute: {}
            },
            onrowcollapse: {
                attribute: {}
            },
            onrowexpand: {
                attribute: {}
            },
            oncolreorder: {
                attribute: {}
            },
            oncolresize: {
                attribute: {}
            },
            onrowreorder: {
                attribute: {}
            },
            oncelledit: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                var element = $(this),
                    columnElements = element.children('p-column'),
                    cols = [],
                    $this = this;

                this.xtag.container = $(this).append('<div></div>').children('div');

                for (var i = 0; i < columnElements.length; i++) {
                    var col = {},
                        columnElement = columnElements.eq(i);

                    col.field = columnElement.attr('field');
                    col.headerText = columnElement.attr('headertext');
                    col.footerText = columnElement.attr('footertext');
                    col.sortable = columnElement.attr('sortable') !== undefined;
                    col.headerStyle = columnElement.attr('headerstyle');
                    col.headerClass = columnElement.attr('headerclass');
                    col.bodyStyle = columnElement.attr('bodystyle');
                    col.bodyClass = columnElement.attr('bodyclass');
                    col.colspan = columnElement.attr('colspan');
                    col.rowspan = columnElement.attr('rowspan');
                    col.filter = columnElement.attr('filter') !== undefined;
                    col.filterMatchMode = columnElement.attr('filtermatchmode');
                    col.filterFunction = PUI.resolveObjectByName(columnElement.attr('filterfunction'))
                    col.editor = columnElement.attr('editor') !== undefined;
                    col.rowToggler = columnElement.attr('rowToggler') !== undefined;

                    if (columnElement.children('template').length) {
                        col.contentTemplate = columnElement.children('template').html();
                        col.content = function (data, _col) {
                            return Mustache.render(_col.contentTemplate, data);
                        };
                    }

                    cols.push(col);
                }

                $(this.xtag.container).puidatatable({
                    datasource: PUI.resolveObjectByName(this.datasource) || this.datasource,
                    columns: cols,
                    paginator: this.paginator ? {
                        rows: this.rows ? parseInt(this.rows) : 0,
                        totalRecords: this.totalrecords ? parseInt(this.totalrecords) : 0
                    } : null,
                    selectionMode: this.selectionmode,
                    caption: this.caption,
                    footer: this.footer,
                    sortField: this.sortfield,
                    sortorder: this.sortorder,
                    keepSelectionInLazyMode: this.keepselectioninlazymode,
                    scrollable: this.scrollable,
                    scrollHeight: this.scrollheight,
                    scrollWidth: this.scrollwidth,
                    responsive: this.responsive,
                    expandableRows: this.expandablerows,
                    rowExpandMode: this.rowexpandmode || 'multiple',
                    draggableColumns: this.draggablecolumns,
                    draggableRows: this.draggablerows,
                    resizableColumns: this.resizablecolumns,
                    columnResizeMode: this.columnresizemode,
                    filterDelay: this.filterDelay ? parseInt(this.filterDelay) : 300,
                    stickyHeader: this.stickyheader,
                    editMode: this.editmode,
                    tabindex: this.tabindex || 0,
                    sort: this.onsort ? function (event, ui) {
                        PUI.executeFunctionByName($this.onsort, event, ui);
                    } : null,
                    rowSelect: this.onrowselect ? function (event, ui) {
                        PUI.executeFunctionByName($this.onrowselect, event, ui);
                    } : null,
                    rowUnselect: this.onrowunselect ? function (event, ui) {
                        PUI.executeFunctionByName($this.onrowunselect, event, ui);
                    } : null,
                    rowSelectContextMenu: this.onrowselectcontextmenu ? function (event, ui) {
                        PUI.executeFunctionByName($this.onrowselectcontextmenu, event, ui);
                    } : null,
                    rowExpand: this.onrowexpand ? function (event, ui) {
                        PUI.executeFunctionByName($this.onrowexpand, event, ui);
                    } : null,
                    rowCollapse: this.onrowcollapse ? function (event, ui) {
                        PUI.executeFunctionByName($this.onrowcollapse, event, ui);
                    } : null,
                    colReorder: this.oncolreorder ? function (event, ui) {
                        PUI.executeFunctionByName($this.oncolreorder, event, ui);
                    } : null,
                    colResize: this.oncolresize ? function (event, ui) {
                        PUI.executeFunctionByName($this.oncolresize, event, ui);
                    } : null,
                    rowReorder: this.onrowreorder ? function (event, ui) {
                        PUI.executeFunctionByName($this.onrowreorder, event, ui);
                    } : null,
                    cellEdit: this.oncelledit ? function (event, ui) {
                        PUI.executeFunctionByName($this.oncelledit, event, ui);
                    } : null
                });
            }
        },

        methods: {
            reload: function () {
                $(this.xtag.container).puidatatable('reload');
            },
            setTotalRecords: function (val) {
                $(this.xtag.container).puidatatable('totalRecords', val);
            }
        }

    });

}
if (!xtag.tags['p-datagrid']) {

    xtag.register('p-datagrid', {

        accessors: {
            columns: {
                attribute: {}
            },
            datasource: {
                attribute: {}
            },
            paginator: {
                attribute: {
                    boolean: true
                }
            },
            rows: {
                attribute: {}
            },
            totalrecords: {
                attribute: {}
            },
            header: {
                attribute: {}
            },
            footer: {
                attribute: {}
            },
            lazy: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                this.xtag.container = $(this).append('<div></div>').children('div');

                $(this.xtag.container).puidatagrid({
                    header: this.header,
                    footer: this.footer,
                    lazy: this.lazy,
                    columns: this.columns || 3,
                    paginator: this.paginator ? {
                        rows: this.rows ? parseInt(this.rows) : 0,
                        totalRecords: this.totalrecords ? parseInt(this.totalrecords) : 0
                    } : null,
                    datasource: PUI.resolveObjectByName(this.datasource) || this.datasource,
                    template: $(this).children('template')
                });
            }
        }
    });

}
if (!xtag.tags['p-datascroller']) {

    xtag.register('p-datascroller', {

        accessors: {
            header: {
                attribute: {}
            },
            datasource: {
                attribute: {}
            },
            lazy: {
                attribute: {
                    boolean: true
                }
            },
            chunksize: {
                attribute: {}
            },
            mode: {
                attribute: {}
            },
            loader: {
                attribute: {}
            },
            scrollheight: {
                attribute: {}
            },
            totalsize: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                this.xtag.container = $(this).append('<div></div>').children('div');

                $(this.xtag.container).puidatascroller({
                    header: this.header,
                    datasource: PUI.resolveObjectByName(this.datasource),
                    lazy: this.lazy,
                    chunkSize: this.chunksize ? parseInt(this.chunksize) : 10,
                    mode: this.mode || 'document',
                    loader: this.loader ? $('#' + loader) : null,
                    scrollHeight: this.scrollheight ? parseInt(this.scrollheight) : null,
                    template: $(this).children('template'),
                    totalSize: this.totalsize ? parseInt(this.totalsize) : null
                });
            }
        }
    });

}
if (!xtag.tags['p-datepicker']) {

    xtag.register('p-datepicker', {

        accessors: {
            altfield: {
                attribute: {}
            },
            altformat: {
                attribute: {}
            },
            autosize: {
                attribute: {
                    boolean: true
                }
            },
            beforeshow: {
                attribute: {}
            },
            beforeshowday: {
                attribute: {}
            },
            calculateweek: {
                attribute: {}
            },
            changemonth: {
                attribute: {
                    boolean: true
                }
            },
            changeyear: {
                attribute: {
                    boolean: true
                }
            },
            constraininput: {
                attribute: {}
            },
            dateformat: {
                attribute: {}
            },
            defaultdate: {
                attribute: {}
            },
            disabled: {
                attribute: {
                    boolean: true
                }
            },
            duration: {
                attribute: {}
            },
            gotocurrent: {
                attribute: {
                    boolean: true
                }
            },
            hideifnoprevnext: {
                attribute: {
                    boolean: true
                }
            },
            inline: {
                attribute: {
                    boolean: true
                }
            },
            maxdate: {
                attribute: {}
            },
            mindate: {
                attribute: {}
            },
            navigationasdateformat: {
                attribute: {
                    boolean: true
                }
            },
            numberofmonths: {
                attribute: {}
            },
            onchangemonthyear: {
                attribute: {}
            },
            onclose: {
                attribute: {}
            },
            onselect: {
                attribute: {}
            },
            selectothermonths: {
                attribute: {
                    boolean: true
                }
            },
            shortyearcutoff: {
                attribute: {}
            },
            showanim: {
                attribute: {}
            },
            showbuttonpanel: {
                attribute: {
                    boolean: true
                }
            },
            showcurrentatpos: {
                attribute: {}
            },
            showon: {
                attribute: {}
            },
            showothermonths: {
                attribute: {
                    boolean: true
                }
            },
            showweek: {
                attribute: {
                    boolean: true
                }
            },
            stepmonths: {
                attribute: {}
            },
            yearrange: {
                attribute: {}
            },
            yearsuffix: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                var $this = this;

                if (this.inline) {
                    this.xtag.container = $(this).append('<div></div>').children('div');
                }
                else {
                    this.xtag.container = $(this).append('<input />').children('input');
                }

                this.xtag.container.datepicker({
                    altField: this.altfield ? document.getElementById(this.altField) : null,
                    altFormat: this.altformat || '',
                    autoSize: this.autosize,
                    beforeShow: this.beforeshow || null,
                    beforeShowDay: this.beforeshowday || null,
                    buttonText: '',
                    calculateWeek: this.calculateweek || undefined,
                    changeMonth: this.changemonth,
                    changeYear: this.changeyear,
                    constrainInput: this.constraininput !== null ? JSON.parse(this.constrainInput) : true,
                    defaultDate: this.defaultdate || null,
                    dateFormat: this.dateformat || 'mm/dd/yy',
                    duration: this.duration || 'fast',
                    gotoCurrent: this.gotocurrent,
                    hideIfNoPrevNext: this.hideifnoprevnext,
                    maxDate: this.maxdate || null,
                    minDate: this.mindate || null,
                    navigationAsDateFormat: this.navigationasdateformat,
                    numberOfMonths: this.numberofmonths ? parseInt(this.numberOfMonths) : 1,
                    onChangeMonthYear: this.onchangeMonthYear ? function (event, value) {
                        PUI.executeFunctionByName($this.onchangemonthyear, event, value);
                    } : null,
                    onClose: this.onclose ? function (event, value) {
                        PUI.executeFunctionByName($this.onclose, event, value);
                    } : null,
                    onSelect: this.onselect ? function (event, value) {
                        PUI.executeFunctionByName($this.onselect, event, value);
                    } : null,
                    selectOtherMonths: this.selectothermonths,
                    shortYearCutoff: this.shortyearcutoff || '+10',
                    showAnim: this.showanim || 'fadeIn',
                    showButtonPanel: this.showbuttonpanel,
                    showCurrentAtPos: this.showcurrentatpos ? parseInt(this.showCurrentAtPos) : 0,
                    showOn: this.showon || 'focus',
                    showOtherMonths: this.showothermonths,
                    showWeek: this.showweek,
                    stepMonths: this.stepmonths ? parseInt(this.stepMonths) : 1,
                    yearSuffix: this.yearsuffix || '',
                    yearRange: this.yearrange || 'c-10:c+10'
                });

                if (this.showon !== 'focus' && !this.inline) {
                    $(this).children('button').puibutton({icon: 'fa fa-calendar'});
                }

                if (this.disabled) {
                    this.disable();
                }
            }
        },

        methods: {
            disable: function () {
                this.xtag.container.prop('disabled', true);
                if (this.showon !== 'focus' && !this.inline) {
                    this.xtag.container.siblings('.ui-datepicker-trigger:button').prop('disabled', true).addClass('ui-state-disabled');
                }
            },
            enable: function () {
                this.xtag.container.prop('disabled', false);
                if (this.showon !== 'focus' && !this.inline) {
                    this.xtag.container.siblings('.ui-datepicker-trigger:button').prop('disabled', false).removeClass('ui-state-disabled');
                }
            },
            getDate: function () {
                return this.xtag.container.datepicker('getDate');
            }
        }

    });

}
if (!xtag.tags['p-dialog']) {

    xtag.register('p-dialog', {

        accessors: {
            draggable: {
                attribute: {}
            },
            resizable: {
                attribute: {}
            },
            location: {
                attribute: {}
            },
            minwidth: {
                attribute: {}
            },
            minheight: {
                attribute: {}
            },
            width: {
                attribute: {}
            },
            visible: {
                attribute: {}
            },
            modal: {
                attribute: {
                    boolean: true
                }
            },
            showeffect: {
                attribute: {}
            },
            hideeffect: {
                attribute: {}
            },
            effectspeed: {
                attribute: {}
            },
            closeonescape: {
                attribute: {}
            },
            rtl: {
                attribute: {
                    boolean: true
                }
            },
            closable: {
                attribute: {}
            },
            minimizable: {
                attribute: {
                    boolean: true
                }
            },
            maximizable: {
                attribute: {
                    boolean: true
                }
            },
            appendto: {
                attribute: {}
            },
            responsive: {
                attribute: {
                    boolean: true
                }
            },
            beforeshow: {
                attribute: {}
            },
            aftershow: {
                attribute: {}
            },
            minimize: {
                attribute: {}
            },
            maximize: {
                attribute: {}
            },
            renderdelay: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                var $this = this;

                if (this.renderdelay) {
                    setTimeout(function () {
                        $this.render();
                    }, parseInt(this.renderdelay));
                }
                else {
                    this.render();
                }
            }
        },

        methods: {
            show: function () {
                $(this.xtag.container).puidialog('show');
            },
            hide: function () {
                $(this.xtag.container).puidialog('hide');
            },
            render: function () {
                var element = $(this),
                    $this = this,
                    buttonsFacet = element.children('script[type="x-facet-buttons"]');

                element.contents(':not(script)').wrapAll('<div></div>');
                this.xtag.container = $(this).children('div');

                $(this.xtag.container).puidialog({
                    title: this.title,
                    draggable: this.draggable ? JSON.parse(this.draggable) : true,
                    resizable: this.resizable ? JSON.parse(this.resizable) : true,
                    location: this.location || 'center',
                    minWidth: this.minwidth || 150,
                    minHeight: this.minheight || 25,
                    height: this.height || 'auto',
                    width: this.width || '300px',
                    visible: this.visible,
                    modal: this.modal,
                    showEffect: this.showeffect,
                    hideEffect: this.hideeffect,
                    effectSpeed: this.effectspeed || 'normal',
                    closeOnEscape: this.closeoneescape ? JSON.parse(this.closeoneescape) : true,
                    rtl: this.rtl,
                    closable: this.closable ? JSON.parse(this.closable) : true,
                    minimizable: this.minimizable,
                    maximizable: this.maximizable,
                    appendTo: this.appendto,
                    responsive: this.responsive,
                    beforeShow: this.beforeshow ? function (event) {
                        PUI.executeFunctionByName($this.beforeshow, event);
                    } : null,
                    afterShow: this.aftershow ? function (event) {
                        PUI.executeFunctionByName($this.aftershow, event);
                    } : null,
                    minimize: this.minimize ? function (event) {
                        PUI.executeFunctionByName($this.minimize, event);
                    } : null,
                    maximize: this.maximize ? function (event) {
                        PUI.executeFunctionByName($this.maximize, event);
                    } : null
                });

                if (buttonsFacet.length) {
                    $('<div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"></div>').append(buttonsFacet.html())
                        .insertAfter($(this.xtag.container).children('div.ui-dialog-content'));
                }
            }
        }

    });

}
if (!xtag.tags['p-dropdown']) {

    xtag.register('p-dropdown', {

        accessors: {
            name: {
                attribute: {}
            },
            effect: {
                attribute: {}
            },
            effectspeed: {
                attribute: {}
            },
            filter: {
                attribute: {
                    boolean: true
                }
            },
            filtermatchmode: {
                attribute: {}
            },
            casesensitivefilter: {
                attribute: {
                    boolean: true
                }
            },
            filterfunction: {
                attribute: {}
            },
            scrollheight: {
                attribute: {}
            },
            appendto: {
                attribute: {}
            },
            onchange: {
                attribute: {}
            },
            style: {
                attribute: {}
            },
            styleclass: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                var element = $(this),
                    options = element.children('option'),
                    $this = this;

                if (options.length)
                    element.children('option').wrapAll('<select></select>');
                else
                    element.append('<select></select>');

                this.xtag.select = element.children('select');

                if (this.name) {
                    this.xtag.select.attr('name', this.name);
                }

                this.xtag.select.puidropdown({
                    effect: this.effect,
                    effectSpeed: this.effectspeed,
                    filter: this.filter,
                    filterMatchMode: this.filtermatchmode || 'startsWith',
                    caseSensitiveFilter: this.casesensitivefilter,
                    filterfunction: this.filterfunction,
                    scrollHeight: this.scrollheight ? parseInt(this.scrollheight) : 200,
                    appendTo: this.appendto || 'body',
                    change: this.onchange ? function (event) {
                        PUI.executeFunctionByName($this.onchange, event);
                    } : null,
                    style: this.style,
                    styleClass: this.styleclass
                });
            }
        },

        methods: {}

    });

}
if (!xtag.tags['p-fieldset']) {

    xtag.register('p-fieldset', {

        accessors: {
            toggleable: {
                attribute: {
                    boolean: true
                }
            },
            toggleDuration: {
                attribute: {
                    name: 'toggleduration'
                }
            },
            collapsed: {
                attribute: {
                    boolean: true
                }
            },
            beforeToggle: {
                attribute: {}
            },
            afterToggle: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                var $this = this;
                $(this).contents().wrapAll('<fieldset></fieldset>');

                $(this.children[0]).puifieldset({
                    toggleable: this.toggleable,
                    toggleDuration: this.toggleDuration || 'normal',
                    collapsed: this.collapsed,
                    beforeToggle: this.beforeToggle ? function (event, collapsed) {
                        PUI.executeFunctionByName($this.beforeToggle, event, collapsed);
                    } : null,
                    afterToggle: this.afterToggle ? function (event, collapsed) {
                        PUI.executeFunctionByName($this.afterToggle, event, collapsed);
                    } : null
                });
            }
        },

        methods: {
            toggle: function () {
                $(this.children[0]).puifieldset('toggle');
            }
        }

    });

}
if (!xtag.tags['p-galleria']) {

    xtag.register('p-galleria', {

        accessors: {
            panelwidth: {
                attribute: {}
            },
            panelHeight: {
                attribute: {}
            },
            framewidth: {
                attribute: {}
            },
            frameheight: {
                attribute: {}
            },
            activeindex: {
                attribute: {}
            },
            showfilmstrip: {
                attribute: {}
            },
            autoplay: {
                attribute: {}
            },
            transitioninterval: {
                attribute: {}
            },
            effect: {
                attribute: {}
            },
            showcaption: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                $(this).children('ul').wrap('<div></div>');
                this.xtag.container = this.children[0];

                $(this.xtag.container).puigalleria({
                    panelWidth: this.panelwidth ? parseInt(this.panelwidth) : 600,
                    panelHeight: this.panelheight ? parseInt(this.panelheight) : 400,
                    frameWidth: this.framewidth ? parseInt(this.framewidth) : 60,
                    frameHeight: this.frameHeight ? parseInt(this.frameheight) : 40,
                    activeIndex: this.activeindex ? parseInt(this.activeindex) : 0,
                    showFilmstring: this.showfilmstrip !== null ? JSON.parse(this.showfilmstrip) : true,
                    autoPlay: this.autoplay !== null ? JSON.parse(this.autoplay) : true,
                    transitionInterval: this.transitioninterval ? parseInt(this.transitioninterval) : 4000,
                    effect: this.effect,
                    effectSpeed: this.effectspeed ? parseInt(this.effectspeed) : 250,
                    showCaption: this.showcaption !== null ? JSON.parse(this.showcaption) : true
                });
            }
        },

        methods: {
            next: function () {
                $(this.xtag.container).puigalleria('next');
            },

            prev: function () {
                $(this.xtag.container).puigalleria('prev');
            }
        }

    });

}
if (!xtag.tags['p-growl']) {

    xtag.register('p-growl', {

        accessors: {
            sticky: {
                attribute: {
                    boolean: true
                }
            },
            life: {
                attribute: {}
            },
            appendto: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                this.xtag.growl = $(this).append('<div></div>').children('div');

                $(this.xtag.growl).puigrowl({
                    life: this.life || 3000,
                    sticky: this.sticky,
                    appendTo: this.appendTo ? document.getElementById(this.appendto) : undefined
                });
            }
        },

        methods: {
            show: function (messages) {
                $(this.xtag.growl).puigrowl('show', messages);
            },
            clear: function () {
                $(this.xtag.growl).puigrowl('clear');
            }
        }
    });

}
if (!xtag.tags['p-inputtext']) {

    xtag.register('p-inputtext', {

        extends: 'input',

        accessors: {},

        lifecycle: {
            created: function () {
                $(this).puiinputtext();
            }
        },

        methods: {
            disable: function () {
                $(this).puiinputtext('disable');
            },
            enable: function () {
                $(this).puiinputtext('enable');
            }
        }

    });

}
if (!xtag.tags['p-textarea']) {

    xtag.register('p-textarea', {

        extends: 'textarea',

        accessors: {
            autoresize: {
                attribute: {
                    boolean: true
                }
            },
            autosuggest: {
                attribute: {
                    boolean: true
                }
            },
            counter: {
                attribute: {}
            },
            countertemplate: {
                attribute: {}
            },
            minquerylength: {
                attribute: {}
            },
            querydelay: {
                attribute: {}
            },
            onitemselect: {
                attribute: {}
            },
            completemethod: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                var $this = this;

                $(this).puiinputtextarea({
                    autoResize: this.autoresize,
                    autoComplete: this.autosuggest,
                    maxlength: this.maxlength,
                    counter: this.counter ? $('#' + this.counter) : null,
                    counterTemplate: this.countertemplate || '{0}',
                    minQueryLength: this.minquerylength || 3,
                    queryDelay: this.querydelay || 700,
                    itemselect: this.onitemselect ? function (event, item) {
                        PUI.executeFunctionByName($this.onitemselect, event, item);
                    } : null,
                    completedMethod: this.completemethod ? PUI.resolveObjectByName(this.completemethod) : null
                });
            }
        },

        methods: {
            enable: function () {
                $(this).puiinputtextarea('enable');
            },
            disable: function () {
                $(this).puiinputtextarea('disable');
            }
        }

    });

}
if (!xtag.tags['p-lightbox']) {

    xtag.register('p-lightbox', {

        accessors: {
            iframewidth: {
                attribute: {}
            },
            iframeheight: {
                attribute: {}
            },
            iframe: {
                attribute: {
                    boolean: true
                }
            }
        },

        lifecycle: {
            created: function () {
                if (this.iframe)
                    this.xtag.container = $(this).children('a');
                else
                    this.xtag.container = $(this).wrapInner('<div></div>').children('div');

                $(this.xtag.container).puilightbox({
                    iframeWidth: this.iframewidth ? parseInt(this.iframewidth) : 640,
                    iframeHeight: this.iframeheight ? parseInt(this.iframeheight) : 480,
                    iframe: this.iframe
                });
            }
        },

        methods: {
            disable: function () {
                $(this.xtag.lightbox).puilightbox('disabled');
            },
            enable: function () {
                $(this.xtag.lightbox).puilightbox('enable');
            },
            show: function () {
                $(this.xtag.lightbox).puilightbox('show');
            },
            hide: function () {
                $(this.xtag.lightbox).puilightbox('hide');
            },
            center: function () {
                $(this.xtag.lightbox).puilightbox('center');
            },
            isHidden: function () {
                $(this.xtag.lightbox).puilightbox('isHidden');
            },
            showURL: function () {
                $(this.xtag.lightbox).puilightbox('showURL');
            }
        }

    });

}
if (!xtag.tags['p-listbox']) {

    xtag.register('p-listbox', {

        accessors: {
            multiple: {
                attribute: {
                    boolean: true
                }
            },
            name: {
                attribute: {}
            },
            style: {
                attribute: {}
            },
            styleclass: {
                attribute: {}
            },
            onitemselect: {
                attribute: {}
            },
            onitemunselect: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                var element = $(this),
                    $this = this;

                element.children('option').wrapAll('<select></select>');
                this.xtag.select = element.children('select');
                if (this.name) {
                    this.xtag.select.attr('name', this.name);
                }

                var itemTemplate = element.children('template');

                this.xtag.select.puilistbox({
                    multiple: this.multiple,
                    template: itemTemplate.length ? itemTemplate : null,
                    style: this.style,
                    styleClass: this.styleclass,
                    itemSelect: this.onitemselect ? function (event, option) {
                        PUI.executeFunctionByName($this.onitemselect, event);
                    } : null,
                    itemUnselect: this.onitemunselect ? function (event, option) {
                        PUI.executeFunctionByName($this.onitemunselect, event);
                    } : null
                });
            }
        },

        methods: {
            disable: function () {
                $(this).puiinputtext('disable');
            },
            enable: function () {
                $(this).puiinputtext('enable');
            }
        }

    });

}
PUI.createNestedMenuDom = function (tag, element) {
    var children = tag.children();

    for (var i = 0; i < children.length; i++) {
        var childTag = children.eq(i),
            childTagname = childTag.get(0).tagName.toLowerCase();

        if (childTagname === 'p-submenu') {
            var submenuDom = $('<li></li>'),
                submenuLink = $('<a></a>'),
                value = childTag.attr('value'),
                icon = childTag.attr('icon');

            if (value) submenuLink.text(value);
            if (icon) submenuLink.data('icon', icon);

            submenuDom.append(submenuLink).append('<ul></ul>').appendTo(element);

            PUI.createNestedMenuDom.call(this, childTag, submenuDom.children('ul'));
        }
        else if (childTagname === 'p-menuitem') {
            var menuitemDom = $('<a></a>'),
                icon = childTag.attr('icon'),
                value = childTag.attr('value'),
                href = childTag.attr('href');

            if (icon)
                menuitemDom.data('icon', icon);

            if (value)
                menuitemDom.text(value);

            if (href)
                menuitemDom.attr('href', href);

            element.append($('<li></li').append(menuitemDom));
        }
    }
};

if (!xtag.tags['p-submenu']) {

    xtag.register('p-submenu', {

        accessors: {
            value: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {

            }
        }

    });

}

if (!xtag.tags['p-menuitem']) {

    xtag.register('p-menuitem', {

        accessors: {
            value: {
                attribute: {}
            },
            icon: {
                attribute: {}
            },
            href: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {

            }
        }

    });

}

if (!xtag.tags['p-menu']) {

    xtag.register('p-menu', {

        accessors: {
            popup: {
                attribute: {
                    boolean: true
                }
            },
            trigger: {
                attribute: {}
            },
            my: {
                attribute: {}
            },
            at: {
                attribute: {}
            },
            triggerevent: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                this.xtag.container = $('<ul></ul>').appendTo(this);

                var iterateChildren = function (parent) {
                    var children = parent.children();

                    for (var i = 0; i < children.length; i++) {
                        var childElement = children.eq(i),
                            tagname = childElement.get(0).tagName.toLowerCase();

                        if (tagname === 'p-submenu') {
                            var submenu = $('<h3></h3>'),
                                value = childElement.attr('value');

                            if (value)
                                submenu.text(value);

                            this.xtag.container.append($('<li></li').append(submenu));

                            iterateChildren.call(this, childElement);
                        }
                        else if (tagname === 'p-menuitem') {
                            var menuitem = $('<a></a>'),
                                icon = childElement.attr('icon'),
                                value = childElement.attr('value');

                            if (icon)
                                menuitem.data('icon', icon);

                            if (value)
                                menuitem.text(value);

                            this.xtag.container.append($('<li></li').append(menuitem));
                        }
                    }
                };

                iterateChildren.call(this, $(this));

                $(this.xtag.container).puimenu({
                    popup: this.popup,
                    trigger: this.trigger ? '#' + this.trigger : null,
                    my: this.my || 'left top',
                    at: this.at || 'left bottom',
                    triggerEvent: this.triggerEvent || 'click'
                });
            }

        }

    });

}

if (!xtag.tags['p-breadcrumb']) {

    xtag.register('p-breadcrumb', {

        accessors: {},

        lifecycle: {
            created: function () {
                this.xtag.container = $('<ul></ul>').appendTo(this);

                var element = $(this),
                    menuitems = element.children('p-menuitem');

                for (var i = 0; i < menuitems.length; i++) {
                    var menuitem = menuitems.eq(i),
                        anchor = $('<a></a>'),
                        value = menuitem.attr('value'),
                        href = menuitem.attr('href');

                    if (value) {
                        anchor.text(value);
                    }

                    if (href) {
                        anchor.attr('href', href);
                    }

                    this.xtag.container.append($('<li></li').append(anchor));
                }
                ;

                menuitems.remove();

                $(this.xtag.container).puibreadcrumb();
            }
        }

    });

}

if (!xtag.tags['p-menubar']) {

    xtag.register('p-menubar', {

        accessors: {
            autodisplay: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                var element = $(this);
                this.xtag.container = $('<ul></ul>').appendTo(this);

                PUI.createNestedMenuDom.call(this, element, this.xtag.container);
                element.children('p-submenu,p-menuitem').remove();

                $(this.xtag.container).puimenubar({
                    autoDisplay: this.autodisplay ? JSON.parse(this.autodisplay) : true
                });
            }
        }

    });

}

if (!xtag.tags['p-tieredmenu']) {

    xtag.register('p-tieredmenu', {

        accessors: {
            popup: {
                attribute: {
                    boolean: true
                }
            },
            trigger: {
                attribute: {}
            },
            my: {
                attribute: {}
            },
            at: {
                attribute: {}
            },
            triggerevent: {
                attribute: {}
            },
            autodisplay: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                var element = $(this);
                this.xtag.container = $('<ul></ul>').appendTo(this);

                PUI.createNestedMenuDom.call(this, element, this.xtag.container);
                element.children('p-submenu,p-menuitem').remove();

                $(this.xtag.container).puitieredmenu({
                    popup: this.popup,
                    trigger: this.trigger ? '#' + this.trigger : null,
                    my: this.my || 'left top',
                    at: this.at || 'left bottom',
                    triggerEvent: this.triggerEvent || 'click',
                    autoDisplay: this.autodisplay ? JSON.parse(this.autodisplay) : true
                });
            }
        }

    });

}

if (!xtag.tags['p-slidemenu']) {

    xtag.register('p-slidemenu', {

        accessors: {
            popup: {
                attribute: {
                    boolean: true
                }
            },
            trigger: {
                attribute: {}
            },
            my: {
                attribute: {}
            },
            at: {
                attribute: {}
            },
            triggerevent: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                var element = $(this);
                this.xtag.container = $('<ul></ul>').appendTo(this);

                PUI.createNestedMenuDom.call(this, element, this.xtag.container);
                element.children('p-submenu,p-menuitem').remove();

                $(this.xtag.container).puislidemenu({
                    popup: this.popup,
                    trigger: this.trigger ? '#' + this.trigger : null,
                    my: this.my || 'left top',
                    at: this.at || 'left bottom',
                    triggerEvent: this.triggerEvent || 'click'
                });
            }
        }

    });

}

if (!xtag.tags['p-contextmenu']) {

    xtag.register('p-contextmenu', {

        accessors: {
            autodisplay: {
                attribute: {}
            },
            target: {
                attribute: {}
            },
            event: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                var element = $(this);
                this.xtag.container = $('<ul></ul>').appendTo(this);

                PUI.createNestedMenuDom.call(this, element, this.xtag.container);
                element.children('p-submenu,p-menuitem').remove();

                $(this.xtag.container).puicontextmenu({
                    autoDisplay: this.autodisplay ? JSON.parse(this.autodisplay) : true,
                    target: this.target,
                    event: this.event || 'contextmenu'
                });
            }
        }

    });

}

if (!xtag.tags['p-messages']) {

    xtag.register('p-messages', {

        accessors: {
            closable: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                this.xtag.container = $(this).append('<div></div>').children('div');

                $(this.xtag.container).puimessages({
                    closable: this.closable ? JSON.parse(closable) : true
                });
            }
        },

        methods: {
            show: function (severity, messages) {
                $(this.xtag.container).puimessages('show', severity, messages);
            },
            clear: function () {
                $(this.xtag.container).puimessages('clear');
            }
        }

    });

}
if (!xtag.tags['p-multiselectlistbox']) {

    xtag.register('p-multiselectlistbox', {

        accessors: {
            caption: {
                attribute: {}
            },
            choices: {
                attribute: {}
            },
            effect: {
                attribute: {}
            },
            name: {
                attribute: {}
            },
            triggerevent: {
                attribute: {}
            },
            value: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                var items = [];

                var iterateChildren = function (element, arr) {
                    var children = element.children();
                    for (var i = 0; i < children.length; i++) {
                        var child = children.eq(i),
                            childTagname = child.get(0).tagName.toLowerCase(),
                            itemObj = {};

                        if (childTagname === 'optgroup') {
                            itemObj.label = child.attr('label');
                            itemObj.items = [];
                            iterateChildren(child, itemObj.items);
                        }
                        else if (childTagname === 'option') {
                            itemObj.value = child.attr('value');
                            itemObj.label = child.text();
                        }

                        arr.push(itemObj);
                    }
                };

                iterateChildren($(this), items);

                $(this).children().remove();

                this.xtag.container = $('<div></div>').appendTo(this);

                $(this.xtag.container).puimultiselectlistbox({
                    caption: this.caption || null,
                    choices: items,
                    effect: this.effect || 'fade',
                    name: this.name,
                    triggerEvent: this.triggerEvent || 'click',
                    value: this.value
                });
            }
        },

        methods: {
            disable: function () {
                $(this).puimultiselectlistbox('disable');
            },
            enable: function () {
                $(this).puimultiselectlistbox('enable');
            },
            getValue: function () {
                $(this).puimultiselectlistbox('getValue');
            }
        }

    });

}
if (!xtag.tags['p-notify']) {

    xtag.register('p-notify', {

        accessors: {
            position: {
                attribute: {}
            },
            visible: {
                attribute: {
                    boolean: true
                }
            },
            animate: {
                attribute: {}
            },
            effectspeed: {
                attribute: {}
            },
            easing: {
                attribute: {}
            },
            onbeforehide: {
                attribute: {}
            },
            onafterhide: {
                attribute: {}
            },
            onbeforeshow: {
                attribute: {}
            },
            onaftershow: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                var $this = this;
                this.xtag.container = $(this).append('<div></div>').children('div');

                $(this.xtag.container).puinotify({
                    position: this.position || 'top',
                    visible: this.visible,
                    animate: this.animate ? JSON.parse(this.animate) : true,
                    effectspeed: this.effectspeed || 'normal',
                    easing: this.easing || 'swing',
                    beforeHide: this.onbeforehide ? function (event) {
                        PUI.executeFunctionByName($this.onbeforehide, event);
                    } : null,
                    afterHide: this.onafterhide ? function (event) {
                        PUI.executeFunctionByName($this.onafterhide, event);
                    } : null,
                    beforeShow: this.onbeforeshow ? function (event) {
                        PUI.executeFunctionByName($this.onbeforeshow, event);
                    } : null,
                    afterShow: this.onaftershow ? function (event) {
                        PUI.executeFunctionByName($this.onaftershow, event);
                    } : null,
                });
            }
        },

        methods: {
            show: function (content) {
                $(this.xtag.container).puinotify('show', content);
            },
            hide: function (content) {
                $(this.xtag.container).puinotify('show', content);
            },
            update: function (content) {
                $(this.xtag.container).puinotify('update', content);
            }
        }

    });

}
if (!xtag.tags['p-orderlist']) {

    xtag.register('p-orderlist', {

        accessors: {
            name: {
                attribute: {}
            },
            controlslocation: {
                attribute: {}
            },
            dragdrop: {
                attribute: {}
            },
            effect: {
                attribute: {}
            },
            caption: {
                attribute: {}
            },
            responsive: {
                attribute: {
                    boolean: true
                }
            },
            onreorder: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                var $this = this,
                    element = $(this),
                    itemTemplate = element.children('template');
                element.children('option').wrapAll('<select></select>'),

                    this.xtag.select = element.children('select');
                if (this.name) {
                    this.xtag.select.attr('name', this.name);
                }

                this.xtag.select.puiorderlist({
                    controlsLocation: this.controlslocation || 'none',
                    dragdrop: this.dragdrop ? JSON.parse(this.dragdrop) : true,
                    effect: this.effect || 'fade',
                    caption: this.caption,
                    responsive: this.responsive,
                    template: itemTemplate.length ? itemTemplate : null,
                    onreorder: this.onreorder ? function (event) {
                        PUI.executeFunctionByName($this.onreorder, event);
                    } : null
                });
            }
        }

    });

}
if (!xtag.tags['p-paginator']) {

    xtag.register('p-paginator', {

        accessors: {
            pagelinks: {
                attribute: {}
            },
            totalrecords: {
                attribute: {}
            },
            page: {
                attribute: {}
            },
            rows: {
                attribute: {}
            },
            template: {
                attribute: {}
            },
            onpaginate: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                this.xtag.container = $(this).append('<div></div>').children('div');
                var $this = this;

                $(this.xtag.container).puipaginator({
                    pageLinks: this.pagelinks ? parseInt(this.pagelinks) : 5,
                    totalRecords: this.totalrecords ? parseInt(this.totalrecords) : 0,
                    page: this.page ? parseInt(this.page) : 0,
                    rows: this.rows ? parseInt(this.rows) : 0,
                    template: this.template || '{FirstPageLink} {PreviousPageLink} {PageLinks} {NextPageLink} {LastPageLink}',
                    paginate: this.onpaginate ? function (event, param) {
                        PUI.executeFunctionByName($this.onpaginate, event, param);
                    } : null
                });
            }
        },

        methods: {
            setPage: function (page, silent) {
                $(this.xtag.container).puipaginator('setPage', page, silent);
            }
        }

    });

}
if (!xtag.tags['p-panel']) {

    xtag.register('p-panel', {

        accessors: {
            toggleable: {
                attribute: {
                    boolean: true
                }
            },
            toggleDuration: {
                attribute: {
                    name: 'toggleduration'
                }
            },
            toggleOrientation: {
                attribute: {
                    name: 'toggleorientation'
                }
            },
            collapsed: {
                attribute: {
                    boolean: true
                }
            },
            closable: {
                attribute: {
                    boolean: true
                }
            },
            closeDuration: {
                attribute: {
                    name: 'closeduration'
                }
            },
            title: {
                attribute: {}
            },
            onbeforeclose: {
                attribute: {}
            },
            onafterclose: {
                attribute: {}
            },
            onbeforecollapse: {
                attribute: {}
            },
            onaftercollapse: {
                attribute: {}
            },
            onbeforeexpand: {
                attribute: {}
            },
            onafterexpand: {
                attribute: {}
            }
        },

        lifecycle: {

            created: function () {
                var $this = this,
                    options = {
                        title: this.title,
                        toggleable: this.toggleable,
                        toggleDuration: this.toggleDuration || 'normal',
                        toggleOrientation: this.toggleOrientation || 'vertical',
                        collapsed: this.collapsed,
                        closable: this.closable,
                        closeDuration: this.closeDuration || 'slow'
                    };

                if (this.beforeClose) options.beforeClose = function (event) {
                    PUI.executeFunctionByName($this.onbeforeclose, event);
                };
                if (this.afterClose) options.afterClose = function (event) {
                    PUI.executeFunctionByName($this.onafterclose, event);
                };
                if (this.beforeCollapse) options.beforeCollapse = function (event) {
                    PUI.executeFunctionByName($this.onbeforecollapse, event);
                };
                if (this.afterCollapse) options.afterCollapse = function (event) {
                    PUI.executeFunctionByName($this.onaftercollapse, event);
                };
                if (this.beforeExpand) options.beforeExpand = function (event) {
                    PUI.executeFunctionByName($this.onbeforeexpand, event);
                };
                if (this.afterExpand) options.afterExpand = function (event) {
                    PUI.executeFunctionByName($this.onafterexpand, event);
                };

                $(this).contents().wrapAll('<div></div>');
                $(this.children[0]).puipanel(options);
            }
        }

    });

}
if (!xtag.tags['p-password']) {

    xtag.register('p-password', {

        extends: 'input',

        accessors: {
            promptlabel: {
                attribute: {}
            },
            weaklabel: {
                attribute: {}
            },
            mediumlabel: {
                attribute: {}
            },
            stronglabel: {
                attribute: {}
            },
            inline: {
                attribute: {
                    boolean: true
                }
            }
        },

        lifecycle: {
            created: function () {
                $(this).puipassword({
                    promptLabel: this.promptlabel || 'Please enter a password',
                    weakLabel: this.weaklabel || 'Weak',
                    mediumLabel: this.mediumlabel || 'Medium',
                    strongLabel: this.stronglabel || 'Strong',
                    inline: this.inline
                });
            }
        },

        methods: {
            disable: function () {
                $(this).puipassword('disable');
            },
            enable: function () {
                $(this).puipassword('enable');
            },
            align: function () {
                $(this).puipassword('align');
            },
            show: function () {
                $(this).puipassword('show');
            },
            hide: function () {
                $(this).puipassword('hide');
            }
        }

    });

}
if (!xtag.tags['p-picklist']) {

    xtag.register('p-picklist', {

        accessors: {
            effect: {
                attribute: {}
            },
            effectspeed: {
                attribute: {}
            },
            sourcecaption: {
                attribute: {}
            },
            targetcaption: {
                attribute: {}
            },
            filter: {
                attribute: {
                    boolean: true
                }
            },
            filterfunction: {
                attribute: {}
            },
            filtermatchmode: {
                attribute: {}
            },
            dragdrop: {
                attribute: {}
            },
            ontransfer: {
                attribute: {}
            },
            showsourcecontrols: {
                attribute: {
                    boolean: true
                }
            },
            showtargetcontrols: {
                attribute: {
                    boolean: true
                }
            },
            responsive: {
                attribute: {
                    boolean: true
                }
            }
        },

        lifecycle: {
            created: function () {
                var element = $(this),
                    itemTemplate = element.children('template'),
                    $this = this;

                element.children('select').wrapAll('<div></div>');
                this.xtag.container = element.children('div');

                $(this.xtag.container).puipicklist({
                    effect: this.effect || 'fade',
                    effectSpeed: this.effectspeed || 'fast',
                    sourceCaption: this.sourcecaption,
                    targetCaption: this.targetcaption,
                    showSourceControls: this.showsourcecontrols,
                    showTargetControls: this.showtargetcontrols,
                    filter: this.filter,
                    responsive: this.responsive,
                    filterFunction: this.filterfunction ? PUI.resolveObjectByName(this.filterfunction) : null,
                    dragdrop: this.dragdrop ? JSON.parse(this.dragdrop) : true,
                    template: itemTemplate.length ? itemTemplate : null,
                    transfer: this.ontransfer ? function (event, param) {
                        PUI.executeFunctionByName($this.ontransfer, param);
                    } : null
                });
            }
        },

        methods: {}

    });

}
if (!xtag.tags['p-progressbar']) {

    xtag.register('p-progressbar', {

        accessors: {
            value: {
                attribute: {}
            },
            labeltemplate: {
                attribute: {}
            },
            oncomplete: {
                attribute: {}
            },
            easing: {
                attribute: {}
            },
            effectspeed: {
                attribute: {}
            },
            showlabel: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                this.xtag.progressbar = $(this).append('<div></div>').children('div');

                var $this = this;

                $(this.xtag.progressbar).puiprogressbar({
                    value: this.value || 0,
                    labelTemplate: this.labeltemplate || '{value}%',
                    easing: this.easing || 'easeInOutCirc',
                    effectSpeed: this.effectSpeed || 'normal',
                    showLabel: this.showlabel ? JSON.parse(this.showlabel) : true,
                    complete: this.oncomplete ? function () {
                        PUI.executeFunctionByName($this.oncomplete);
                    } : null
                });
            }
        },

        methods: {
            getValue: function () {
                return $(this.xtag.progressbar).puiprogressbar('option', 'value');
            },
            setValue: function (val) {
                $(this.xtag.progressbar).puiprogressbar('option', 'value', val);
            }
        }

    });

}
if (!xtag.tags['p-radiobutton']) {

    xtag.register('p-radiobutton', {

        extends: 'input',

        lifecycle: {
            created: function () {
                $(this).puiradiobutton();
            }
        }

    });

}
if (!xtag.tags['p-rating']) {

    xtag.register('p-rating', {

        content: '<input type="hidden" />',

        accessors: {
            stars: {
                attribute: {}
            },
            cancel: {
                attribute: {}
            },
            readonly: {
                attribute: {
                    boolean: true
                }
            },
            disabled: {
                attribute: {
                    boolean: true
                }
            },
            name: {
                attribute: {}
            },
            onrate: {
                attribute: {}
            },
            oncancel: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                var $this = this,
                    options = {
                        stars: this.stars || 5,
                        cancel: this.cancel ? JSON.parse(this.cancel) : true,
                        readonly: this.readonly,
                        disabled: this.disabled,
                        rate: this.onrate ? function (event, value) {
                            PUI.executeFunctionByName($this.onrate, event, value);
                        } : null,
                        oncancel: this.oncancel ? function (event, value) {
                            PUI.executeFunctionByName($this.oncancel);
                        } : null
                    };

                if (this.name) {
                    this.children[0].name = this.name;
                }

                $(this.children[0]).puirating(options);
            }
        },

        methods: {
            getValue: function () {
                return $(this.children[0]).puirating('getValue');
            },
            setValue: function (value) {
                $(this.children[0]).puirating('setValue', value);
            },
            cancel: function () {
                $(this.children[0]).puirating('cancel');
            },
            enable: function () {
                $(this.children[0]).puirating('enable');
            },
            disable: function () {
                $(this.children[0]).puirating('disable');
            }
        }

    });

}
if (!xtag.tags['p-selectbutton']) {

    xtag.register('p-selectbutton', {

        accessors: {
            name: {
                attribute: {}
            },
            unselectable: {
                attribute: {
                    boolean: true
                }
            },
            tabindex: {
                attribute: {}
            },
            multiple: {
                attribute: {
                    boolean: true
                }
            }
        },

        lifecycle: {
            created: function () {
                var element = $(this),
                    elementOptions = element.children('option');

                this.xtag.container = $('<div></div>').appendTo(element);

                var choices = [];
                for (var i = 0; i < elementOptions.length; i++) {
                    var elementOption = elementOptions.eq(i);
                    choices.push({label: elementOption.text(), value: elementOption.val()});
                }
                ;

                elementOptions.remove();

                $(this.xtag.container).puiselectbutton({
                    choices: choices,
                    formfield: element.attr('name'),
                    unselectable: this.unselectable,
                    tabindex: this.tabindex || '0',
                    multiple: this.multiple
                });

            }
        },

        methods: {
            selectOption: function (value) {
                $(this).puiselectbutton('selectOption', value);
            },
            unselectOption: function (value) {
                $(this).puiselectbutton('unselectOption', value);
            }
        }

    });

}
if (!xtag.tags['p-slider']) {

    xtag.register('p-slider', {

        accessors: {
            animate: {
                attribute: {
                    boolean: true
                }
            },
            max: {
                attribute: {}
            },
            min: {
                attribute: {}
            },
            orientation: {
                attribute: {}
            },
            range: {
                attribute: {
                    boolean: true
                }
            },
            step: {
                attribute: {}
            },
            value: {
                attribute: {}
            },
            onchange: {
                attribute: {}
            },
            onslide: {
                attribute: {}
            },
            onstart: {
                attribute: {}
            },
            onstop: {
                attribute: {}
            },
            style: {
                attribute: {}
            },
            styleclass: {
                attribute: {}
            }
        },

        lifecycle: {

            created: function () {
                var $this = this;
                this.xtag.container = $(this).append('<div></div>').children('div');
                if (this.style)
                    this.xtag.container.attr('style', this.style);

                if (this.styleclass)
                    this.xtag.container.attr('class', this.styleclass);

                var rangeValues;
                if (this.range && this.value) {
                    rangeValues = [];
                    var values = this.value.split(',');
                    for (var i = 0; i <= 1; i++) {
                        rangeValues[i] = parseInt(values[i]);
                    }
                }

                this.xtag.container.slider({
                    animate: this.animate,
                    max: this.max ? parseInt(this.max) : 100,
                    min: this.min ? parseInt(this.min) : 0,
                    orientation: this.orientation || 'horizontal',
                    range: this.range ? true : false,
                    step: this.step ? parseInt(this.step) : 1,
                    value: this.value ? parseInt(this.value) : 0,
                    values: rangeValues,
                    change: this.onchange ? function (event, value) {
                        PUI.executeFunctionByName($this.onchange, event, value);
                    } : null,
                    slide: this.onslide ? function (event, value) {
                        PUI.executeFunctionByName($this.onslide, event, value);
                    } : null,
                    start: this.onstart ? function (event, value) {
                        PUI.executeFunctionByName($this.onstart, event, value);
                    } : null,
                    stop: this.onstop ? function (event, value) {
                        PUI.executeFunctionByName($this.onstop, event, value);
                    } : null
                });
            }
        },

        methods: {
            disable: function () {
                this.xtag.container.slider('disable');
            },
            enable: function () {
                this.xtag.container.slider('enable');
            },
            destroy: function () {
                this.xtag.container.slider('destroy');
            },
            getValue: function () {
                if (this.range)
                    return this.xtag.container.slider('values');
                else
                    return this.xtag.container.slider('value');
            },
            setValue: function (val) {
                if (this.range)
                    this.xtag.container.slider('values', val);
                else
                    this.xtag.container.slider('value', val);
            }
        }

    });

}
if (!xtag.tags['p-spinner']) {

    xtag.register('p-spinner', {

        extends: 'input',

        accessors: {
            step: {
                attribute: {}
            },
            min: {
                attribute: {}
            },
            max: {
                attribute: {}
            },
            prefix: {
                attribute: {}
            },
            suffix: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                $(this).puispinner({
                    step: this.step || 1.0,
                    min: this.min !== null ? parseInt(this.min) : undefined,
                    max: this.max !== null ? parseInt(this.max) : undefined,
                    prefix: this.prefix,
                    suffix: this.suffix
                });
            }
        },

        methods: {
            disable: function () {
                $(this).puispinner('disable');
            },
            enable: function () {
                $(this).puispinner('enable');
            }
        }

    });

}
if (!xtag.tags['p-splitbutton']) {

    xtag.register('p-splitbutton', {


        accessors: {
            icon: {
                attribute: {}
            },
            iconPos: {
                attribute: {}
            },
            label: {
                attribute: {}
            },
            name: {
                attribute: {}
            },
            onclick: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                var element = $(this),
                    menuitemElements = element.children('p-menuitem'),
                    menuitems = [];

                this.xtag.container = element.append('<button></button>').children('button');
                if (this.name) {
                    this.xtag.container.attr('name', this.name);
                }

                if (this.label) {
                    this.xtag.container.text(this.label);
                }

                for (var i = 0; i < menuitemElements.length; i++) {
                    var menuitem = menuitemElements.eq(i),
                        itemClick = menuitem.attr('onclick'),
                        item = {};

                    item.icon = menuitem.attr('icon') || null;
                    item.text = menuitem.attr('text') || null;
                    item.url = menuitem.attr('url') || null;
                    item.click = itemClick ? PUI.resolveObjectByName(itemClick) : null;

                    menuitems.push(item);
                }
                ;

                menuitemElements.remove();

                $(this.xtag.container).puisplitbutton({
                    icon: this.icon,
                    iconPos: this.iconPos || 'left',
                    items: menuitems,
                    click: this.onclick ? PUI.resolveObjectByName(this.onclick) : null
                });
            }
        },

        methods: {
            disable: function () {
                $(this).puisplitbutton('disable');
            },
            enable: function () {
                $(this).puisplitbutton('enable');
            },
            show: function () {
                $(this).puisplitbutton('show');
            },
            hide: function () {
                $(this).puisplitbutton('hide');
            }
        }

    });

}
if (!xtag.tags['p-sticky']) {

    xtag.register('p-sticky', {

        accessors: {
            target: {
                attribute: {}
            },
            renderdelay: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                var $this = this;

                if (this.renderdelay) {
                    setTimeout(function () {
                        $this.render();
                    }, parseInt(this.renderdelay));
                }
                else {
                    this.render();
                }
            }
        },
        methods: {
            render: function () {
                $(document.getElementById(this.target)).puisticky();
            }
        }

    });

}
if (!xtag.tags['p-switch']) {

    xtag.register('p-switch', {


        accessors: {
            onlabel: {
                attribute: {}
            },
            offlabel: {
                attribute: {}
            },
            onchange: {
                attribute: {}
            },
            name: {
                attribute: {}
            },
            checked: {
                attribute: {
                    boolean: true
                }
            },
            renderdelay: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                var $this = this;

                if (this.renderdelay) {
                    setTimeout(function () {
                        $this.render();
                    }, parseInt(this.renderdelay));
                }
                else {
                    this.render();
                }
            }
        },

        methods: {
            toggle: function () {
                $(this.xtag.input).puiswitch('toggle');
            },
            check: function () {
                $(this.xtag.input).puiswitch('check');
            },
            uncheck: function () {
                $(this.xtag.input).puiswitch('uncheck');
            },
            render: function () {
                var $this = this;

                this.xtag.input = $('<input type="checkbox" />').appendTo(this);

                if (this.name) {
                    this.xtag.input.attr('name', this.name);
                }

                $(this.xtag.input).puiswitch({
                    onLabel: this.onlabel || 'On',
                    offLabel: this.offlabel || 'Off',
                    change: this.onchange ? function () {
                        PUI.executeFunctionByName($this.onchange);
                    } : null
                });
            }
        }

    });

}
if (!xtag.tags['p-tabview']) {

    xtag.register('p-tabview', {

        accessors: {
            activeindex: {
                attribute: {}
            },
            orientation: {
                attribute: {}
            },
            onchange: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                var element = $(this),
                    tabs = $(this).children('p-tab'),
                    $this = this;

                element.append('<div><ul></ul><div></div></div>');

                this.xtag.container = element.children('div');

                var headerContainer = this.xtag.container.children('ul'),
                    bodyContainer = this.xtag.container.children('div');

                //headers
                for (var i = 0; i < tabs.length; i++) {
                    var tab = tabs.eq(i),
                        title = tab.attr('title') || '';

                    headerContainer.append('<li><a href="#">' + title + '</a></li>');
                }

                //contents
                for (var i = 0; i < tabs.length; i++) {
                    var tab = tabs.eq(i);

                    $('<div></div>').append(tab.contents()).appendTo(bodyContainer);
                }

                this.xtag.container.puitabview({
                    activeIndex: this.activeindex || 0,
                    orientation: this.orientation || 'top',
                    change: this.onchange ? function (event, index) {
                        PUI.executeFunctionByName($this.onchange, event, index);
                    } : null
                });
            }
        },

        methods: {
            select: function (index) {
                this.xtag.container.puitabview('select', index);
            },
            remove: function (index) {
                this.xtag.container.puitabview('remove', index);
            },
            enable: function (index) {
                this.xtag.container.puitabview('enable', index);
            },
            disable: function (index) {
                this.xtag.container.puitabview('disable', index);
            },
            getActiveIndex: function (index) {
                return this.xtag.container.puitabview('getActiveIndex');
            }
        }

    });

}
if (!xtag.tags['p-terminal']) {

    xtag.register('p-terminal', {

        accessors: {
            welcomemessage: {
                attribute: {}
            },
            prompt: {
                attribute: {}
            },
            handler: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                this.xtag.container = $(this).append('<div></div>').children('div');

                $(this.xtag.container).puiterminal({
                    welcomeMessage: this.welcomemessage || '',
                    prompt: this.prompt || 'prime $',
                    handler: PUI.resolveObjectByName(this.handler)
                });
            }
        },

        methods: {
            disable: function () {
                $(this).puiinputtext('disable');
            },
            enable: function () {
                $(this).puiinputtext('enable');
            }
        }

    });

}
if (!xtag.tags['p-togglebutton']) {

    xtag.register('p-togglebutton', {

        accessors: {
            onlabel: {
                attribute: {}
            },
            offlabel: {
                attribute: {}
            },
            onicon: {
                attribute: {}
            },
            officon: {
                attribute: {}
            },
            onchange: {
                attribute: {}
            },
            name: {
                attribute: {}
            },
            checked: {
                attribute: {
                    boolean: true
                }
            }
        },

        lifecycle: {
            created: function () {
                this.xtag.checkbox = $('<input type="checkbox" />').appendTo(this);

                if (this.name) {
                    this.xtag.checkbox.attr('name', this.name);
                }

                if (this.onchange) {
                    this.xtag.checkbox.attr('onchange', this.onchange);
                }

                if (this.checked) {
                    this.xtag.checkbox.prop('checked', true);
                }

                $(this.xtag.checkbox).puitogglebutton({
                    onLabel: this.onlabel,
                    offLabel: this.offlabel,
                    onIcon: this.onicon,
                    offIcon: this.officon
                });
            }
        },

        methods: {
            disable: function () {
                $(this.xtag.checkbox).puitogglebutton('disabled');
            },
            enable: function () {
                $(this.xtag.checkbox).puitogglebutton('enable');
            },
            toggle: function () {
                $(this.xtag.checkbox).puitogglebutton('toggle');
            },
            check: function () {
                $(this.xtag.checkbox).puitogglebutton('uncheck');
            },
            uncheck: function () {
                $(this.xtag.checkbox).puitogglebutton('check');
            },
            isChecked: function () {
                $(this.xtag.checkbox).puitogglebutton('isChecked');
            }
        }

    });

}
if (!xtag.tags['p-tooltip']) {

    xtag.register('p-tooltip', {

        accessors: {
            target: {
                attribute: {}
            },
            showevent: {
                attribute: {}
            },
            hideevent: {
                attribute: {}
            },
            showeffect: {
                attribute: {}
            },
            hideeffect: {
                attribute: {}
            },
            showeffectspeed: {
                attribute: {}
            },
            hideeffectspeed: {
                attribute: {}
            },
            my: {
                attribute: {}
            },
            at: {
                attribute: {}
            },
            showdelay: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                var element = $(this),
                    target = this.target ? $('#' + this.target) : $(document),
                    contents = element.html(),
                    children = $.trim(contents),
                    options = {
                        showEvent: this.showevent || 'mouseover',
                        hideEvent: this.hideevent || 'mouseout',
                        showEffect: this.showeffect || 'fade',
                        hideEffect: this.hideeffect,
                        showEffectSpeed: this.showeffectspeed || 'normal',
                        hideEffectSpeed: this.hideeffectspeed || 'normal',
                        my: this.my || 'left top',
                        at: this.at || 'right bottom',
                        showDelay: this.showdelay ? parseInt(this.showdelay) : 150,
                        content: children.length ? children : null
                    };

                element.html('');

                target.puitooltip(options);
            }
        }

    });

}
if (!xtag.tags['p-treeicon']) {

    xtag.register('p-treeicon', {

        accessors: {
            type: {
                attribute: {}
            },
            expanded: {
                attribute: {}
            },
            collapsed: {
                attribute: {}
            },
            value: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {

            }
        }

    });

}

if (!xtag.tags['p-tree']) {

    xtag.register('p-tree', {

        accessors: {
            nodes: {
                attribute: {}
            },
            lazy: {
                attribute: {
                    boolean: true
                }
            },
            animate: {
                attribute: {
                    boolean: true
                }
            },
            selectionmode: {
                attribute: {}
            },
            onnodeselect: {
                attribute: {}
            },
            onnodeunselect: {
                attribute: {}
            },
            onbeforecollapse: {
                attribute: {}
            },
            onaftercollapse: {
                attribute: {}
            },
            onbeforeexpand: {
                attribute: {}
            },
            onafterexpand: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                var element = $(this),
                    treeIconElements = element.children('p-treeicon'),
                    treeIcons = null,
                    $this = this;

                this.xtag.container = $(this).append('<div></div>').children('div');

                if (treeIconElements.length) {
                    treeIcons = {};

                    for (var i = 0; i < treeIconElements.length; i++) {
                        var treeIcon = treeIconElements.eq(i),
                            value = treeIcon.attr('value');

                        if (value) {
                            treeIcons[treeIcon.attr('type')] = value;
                        }
                        else {
                            treeIcons[treeIcon.attr('type')] = {
                                expanded: treeIcon.attr('expanded'),
                                collapsed: treeIcon.attr('collapsed')
                            };
                        }
                    }
                }

                $(this.xtag.container).puitree({
                    nodes: PUI.resolveObjectByName(this.nodes),
                    lazy: this.lazy,
                    animate: this.animate,
                    selectionMode: this.selectionmode,
                    icons: treeIcons,
                    nodeSelect: this.onnodeselect ? function (event, ui) {
                        PUI.executeFunctionByName($this.onnodeselect, event, ui);
                    } : null,
                    nodeUnselect: this.onnodeunselect ? function (event, ui) {
                        PUI.executeFunctionByName($this.onnodeunselect, event, ui);
                    } : null,
                    beforeCollapse: this.onbeforecollapse ? function (event, ui) {
                        PUI.executeFunctionByName($this.onbeforecollapse, event, ui);
                    } : null,
                    afterCollapse: this.onaftercollapse ? function (event, ui) {
                        PUI.executeFunctionByName($this.onaftercollapse, event, ui);
                    } : null,
                    beforeExpand: this.onbeforeexpand ? function (event, ui) {
                        PUI.executeFunctionByName($this.onbeforeexpand, event, ui);
                    } : null,
                    afterExpand: this.onafterexpand ? function (event, ui) {
                        PUI.executeFunctionByName($this.onafterexpand, event, ui);
                    } : null
                });
            }
        },

        methods: {
            expandNode: function (node) {
                $(this.xtag.container).puitree('expandNode', node);
            },
            collapseNode: function (node) {
                $(this.xtag.container).puitree('collapseNode', node);
            },
            selectNode: function (node) {
                $(this.xtag.container).puitree('selectNode', node);
            },
            unselectNode: function (node) {
                $(this.xtag.container).puitree('unselectNode', node);
            },
            unselectAllNodes: function (node) {
                $(this.xtag.container).puitree('unselectAllNodes');
            }
        }

    });

}
if (!xtag.tags['p-treetable']) {

    xtag.register('p-treetable', {

        accessors: {
            nodes: {
                attribute: {}
            },
            lazy: {
                attribute: {
                    boolean: true
                }
            },
            selectionmode: {
                attribute: {}
            },
            header: {
                attribute: {}
            },
            onbeforeexpand: {
                attribute: {}
            },
            onafterexpand: {
                attribute: {}
            },
            onbeforecollapse: {
                attribute: {}
            },
            onaftercollapse: {
                attribute: {}
            },
            onnodeselect: {
                attribute: {}
            },
            onnodeunselect: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function () {
                var element = $(this),
                    columnElements = element.children('p-column'),
                    cols = [],
                    $this = this;

                this.xtag.container = $(this).append('<div></div>').children('div');

                for (var i = 0; i < columnElements.length; i++) {
                    var col = {},
                        columnElement = columnElements.eq(i);

                    col.field = columnElement.attr('field');
                    col.headerText = columnElement.attr('headertext');
                    col.footerText = columnElement.attr('footertext');
                    col.sortable = columnElement.prop('sortable') !== undefined;
                    col.headerStyle = columnElement.attr('headerstyle');
                    col.headerClass = columnElement.attr('headerclass');
                    col.bodyStyle = columnElement.attr('bodystyle');
                    col.bodyClass = columnElement.attr('bodyclass');
                    col.colspan = columnElement.attr('colspan');
                    col.rowspan = columnElement.attr('rowspan');

                    cols.push(col);
                }

                $(this.xtag.container).puitreetable({
                    columns: cols,
                    nodes: PUI.resolveObjectByName(this.nodes),
                    lazy: this.lazy,
                    header: this.header,
                    selectionMode: this.selectionmode,
                    beforeExpand: this.onbeforeexpand ? function (event, ui) {
                        PUI.executeFunctionByName($this.onbeforeexpand, event, ui);
                    } : null,
                    afterExpand: this.onafterexpand ? function (event, ui) {
                        PUI.executeFunctionByName($this.onbeforeexpand, event, ui);
                    } : null,
                    beforeCollapse: this.onbeforecollapse ? function (event, ui) {
                        PUI.executeFunctionByName($this.onbeforecollapse, event, ui);
                    } : null,
                    afterCollapse: this.onaftercollapse ? function (event, ui) {
                        PUI.executeFunctionByName($this.onaftercollapse, event, ui);
                    } : null,
                    nodeSelect: this.onnodeselect ? function (event, ui) {
                        PUI.executeFunctionByName($this.onnodeselect, event, ui);
                    } : null,
                    nodeUnselect: this.onnodeunselect ? function (event, ui) {
                        PUI.executeFunctionByName($this.onnodeunselect, event, ui);
                    } : null
                });
            }
        }

    });

}