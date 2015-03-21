//Famax 4.0 - http://www.codehandling.com/2015/03/famax-40-complete-facebook-fanpage.html
//Buy at http://codecanyon.net/item/famax-facebook-fan-page-on-your-website/10287995


/*!
 * imagesLoaded PACKAGED v3.0.4
 * https://github.com/desandro/imagesloaded
 * JavaScript is all like "You images are done yet or what?"
 */

(function(){"use strict";function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}var n=e.prototype;n.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},n.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},n.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},n.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},n.on=n.addListener,n.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},n.once=n.addOnceListener,n.defineEvent=function(e){return this.getListeners(e),this},n.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},n.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},n.off=n.removeListener,n.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},n.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},n.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},n.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},n.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],o=n.listener.apply(this,t||[]),(o===this._getOnceReturnValue()||n.once===!0)&&this.removeListener(e,s[r][i].listener);return this},n.trigger=n.emitEvent,n.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},n.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},n._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},n._getEvents=function(){return this._events||(this._events={})},"function"==typeof define&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){"use strict";var t=document.documentElement,n=function(){};t.addEventListener?n=function(e,t,n){e.addEventListener(t,n,!1)}:t.attachEvent&&(n=function(t,n,i){t[n+i]=i.handleEvent?function(){var t=e.event;t.target=t.target||t.srcElement,i.handleEvent.call(i,t)}:function(){var n=e.event;n.target=n.target||n.srcElement,i.call(t,n)},t.attachEvent("on"+n,t[n+i])});var i=function(){};t.removeEventListener?i=function(e,t,n){e.removeEventListener(t,n,!1)}:t.detachEvent&&(i=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var r={bind:n,unbind:i};"function"==typeof define&&define.amd?define(r):e.eventie=r}(this),function(e){"use strict";function t(e,t){for(var n in t)e[n]=t[n];return e}function n(e){return"[object Array]"===c.call(e)}function i(e){var t=[];if(n(e))t=e;else if("number"==typeof e.length)for(var i=0,r=e.length;r>i;i++)t.push(e[i]);else t.push(e);return t}function r(e,n){function r(e,n,s){if(!(this instanceof r))return new r(e,n);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=i(e),this.options=t({},this.options),"function"==typeof n?s=n:t(this.options,n),s&&this.on("always",s),this.getImages(),o&&(this.jqDeferred=new o.Deferred);var a=this;setTimeout(function(){a.check()})}function c(e){this.img=e}r.prototype=new e,r.prototype.options={},r.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,o=i.length;o>r;r++){var s=i[r];this.addImage(s)}}},r.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},r.prototype.check=function(){function e(e,r){return t.options.debug&&a&&s.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},r.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify(t,e)})},r.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},o&&(o.fn.imagesLoaded=function(e,t){var n=new r(this,e,t);return n.jqDeferred.promise(o(this))});var f={};return c.prototype=new e,c.prototype.check=function(){var e=f[this.img.src];if(e)return this.useCached(e),void 0;if(f[this.img.src]=this,this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this.proxyImage=new Image;n.bind(t,"load",this),n.bind(t,"error",this),t.src=this.img.src},c.prototype.useCached=function(e){if(e.isConfirmed)this.confirm(e.isLoaded,"cached was confirmed");else{var t=this;e.on("confirm",function(e){return t.confirm(e.isLoaded,"cache emitted confirmed"),!0})}},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindProxyEvents()},c.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindProxyEvents()},c.prototype.unbindProxyEvents=function(){n.unbind(this.proxyImage,"load",this),n.unbind(this.proxyImage,"error",this)},r}var o=e.jQuery,s=e.console,a=s!==void 0,c=Object.prototype.toString;"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],r):e.imagesLoaded=r(e.EventEmitter,e.eventie)}(window);


/*!
  jQuery Wookmark plugin
  @name jquery.wookmark.js
  @author Christoph Ono (chri@sto.ph or @gbks)
  @author Sebastian Helzle (sebastian@helzle.net or @sebobo)
  @version 1.4.8
  @date 07/08/2013
  @category jQuery plugin
  @copyright (c) 2009-2014 Christoph Ono (www.wookmark.com)
  @license Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*/
(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['jquery'], factory);
  else
    factory(jQuery);
}(function ($) {
  var Wookmark, defaultOptions, __bind;

  __bind = function(fn, me) {
    return function() {
      return fn.apply(me, arguments);
    };
  };

  // Wookmark default options
  defaultOptions = {
    align: 'center',
    autoResize: false,
    comparator: null,
    container: $('body'),
    direction: undefined,
    ignoreInactiveItems: true,
    itemWidth: 0,
    fillEmptySpace: false,
    flexibleWidth: 0,
    offset: 2,
    outerOffset: 0,
    onLayoutChanged: undefined,
    possibleFilters: [],
    resizeDelay: 50,
    verticalOffset: undefined
  };

  // Function for executing css writes to dom on the next animation frame if supported
  var executeNextFrame = window.requestAnimationFrame || function(callback) {callback();},
      $window = $(window);

  function bulkUpdateCSS(data) {
    executeNextFrame(function() {
      var i, item;
      for (i = 0; i < data.length; i++) {
        item = data[i];
        item.obj.css(item.css);
      }
    });
  }

  function cleanFilterName(filterName) {
    return $.trim(filterName).toLowerCase();
  }

  // Main wookmark plugin class
  Wookmark = (function() {

    function Wookmark(handler, options) {
      // Instance variables.
      this.handler = handler;
      this.columns = this.containerWidth = this.resizeTimer = null;
      this.activeItemCount = 0;
      this.itemHeightsDirty = true;
      this.placeholders = [];

      $.extend(true, this, defaultOptions, options);

      this.verticalOffset = this.verticalOffset || this.offset;

      // Bind instance methods
      this.update = __bind(this.update, this);
      this.onResize = __bind(this.onResize, this);
      this.onRefresh = __bind(this.onRefresh, this);
      this.getItemWidth = __bind(this.getItemWidth, this);
      this.layout = __bind(this.layout, this);
      this.layoutFull = __bind(this.layoutFull, this);
      this.layoutColumns = __bind(this.layoutColumns, this);
      //this.filter = __bind(this.filter, this);
      this.clear = __bind(this.clear, this);
      this.getActiveItems = __bind(this.getActiveItems, this);
      this.refreshPlaceholders = __bind(this.refreshPlaceholders, this);
      this.sortElements = __bind(this.sortElements, this);
      //this.updateFilterClasses = __bind(this.updateFilterClasses, this);

      // Initial update of the filter classes
      //this.updateFilterClasses();

      // Listen to resize event if requested.
      if (this.autoResize)
        $window.bind('resize.wookmark', this.onResize);

      this.container.bind('refreshWookmark', this.onRefresh);
    }

	/*
    Wookmark.prototype.updateFilterClasses = function() {
      // Collect filter data
      var i = 0, j = 0, k = 0, filterClasses = {}, itemFilterClasses,
          $item, filterClass, possibleFilters = this.possibleFilters, possibleFilter;

      for (; i < this.handler.length; i++) {
        $item = this.handler.eq(i);

        // Read filter classes and globally store each filter class as object and the fitting items in the array
        itemFilterClasses = $item.data('filterClass');
        if (typeof itemFilterClasses == 'object' && itemFilterClasses.length > 0) {
          for (j = 0; j < itemFilterClasses.length; j++) {
            filterClass = cleanFilterName(itemFilterClasses[j]);

            if (typeof(filterClasses[filterClass]) === 'undefined') {
              filterClasses[filterClass] = [];
            }
            filterClasses[filterClass].push($item[0]);
          }
        }
      }

      for (; k < possibleFilters.length; k++) {
        possibleFilter = cleanFilterName(possibleFilters[k]);
        if (!(possibleFilter in filterClasses)) {
          filterClasses[possibleFilter] = [];
        }
      }

      this.filterClasses = filterClasses;
    }; */

    // Method for updating the plugins options
    Wookmark.prototype.update = function(options) {
      this.itemHeightsDirty = true;
      $.extend(true, this, options);
    };

    // This timer ensures that layout is not continuously called as window is being dragged.
    Wookmark.prototype.onResize = function() {
      clearTimeout(this.resizeTimer);
      this.itemHeightsDirty = this.flexibleWidth !== 0;
      this.resizeTimer = setTimeout(this.layout, this.resizeDelay);
    };

    // Marks the items heights as dirty and does a relayout
    Wookmark.prototype.onRefresh = function() {
      this.itemHeightsDirty = true;
      this.layout();
    };

    /**
     * Filters the active items with the given string filters.
     * @param filters array of string
     * @param mode 'or' or 'and'
     */
	/*
    Wookmark.prototype.filter = function(filters, mode, dryRun) {
      var activeFilters = [], activeFiltersLength, activeItems = $(),
          i, j, k, filter;

      filters = filters || [];
      mode = mode || 'or';
      dryRun = dryRun || false;

      if (filters.length) {
        // Collect active filters
        for (i = 0; i < filters.length; i++) {
          filter = cleanFilterName(filters[i]);
          if (filter in this.filterClasses) {
            activeFilters.push(this.filterClasses[filter]);
          }
        }

        // Get items for active filters with the selected mode
        activeFiltersLength = activeFilters.length;
        if (mode == 'or' || activeFiltersLength == 1) {
          // Set all items in all active filters active
          for (i = 0; i < activeFiltersLength; i++) {
            activeItems = activeItems.add(activeFilters[i]);
          }
        } else if (mode == 'and') {
          var shortestFilter = activeFilters[0],
              itemValid = true, foundInFilter,
              currentItem, currentFilter;

          // Find shortest filter class
          for (i = 1; i < activeFiltersLength; i++) {
            if (activeFilters[i].length < shortestFilter.length) {
              shortestFilter = activeFilters[i];
            }
          }

          // Iterate over shortest filter and find elements in other filter classes
          shortestFilter = shortestFilter || [];
          for (i = 0; i < shortestFilter.length; i++) {
            currentItem = shortestFilter[i];
            itemValid = true;

            for (j = 0; j < activeFilters.length && itemValid; j++) {
              currentFilter = activeFilters[j];
              if (shortestFilter == currentFilter) continue;

              // Search for current item in each active filter class
              for (k = 0, foundInFilter = false; k < currentFilter.length && !foundInFilter; k++) {
                foundInFilter = currentFilter[k] == currentItem;
              }
              itemValid &= foundInFilter;
            }
            if (itemValid)
              activeItems.push(shortestFilter[i]);
          }
        }
        // Hide inactive items
        if (!dryRun)
          this.handler.not(activeItems).addClass('inactive');
      } else {
        // Show all items if no filter is selected
        activeItems = this.handler;
      }

      // Show active items
      if (!dryRun) {
        activeItems.removeClass('inactive');
        // Unset columns and refresh grid for a full layout
        this.columns = null;
        this.layout();
      }
      return activeItems;
    };
	*/

    /**
     * Creates or updates existing placeholders to create columns of even height
     */
    Wookmark.prototype.refreshPlaceholders = function(columnWidth, sideOffset) {
      var i = this.placeholders.length,
          $placeholder, $lastColumnItem,
          columnsLength = this.columns.length, column,
          height, top, innerOffset,
          containerHeight = this.container.innerHeight();

      for (; i < columnsLength; i++) {
        $placeholder = $('<div class="wookmark-placeholder"/>').appendTo(this.container);
        this.placeholders.push($placeholder);
      }

      innerOffset = this.offset + parseInt(this.placeholders[0].css('borderLeftWidth'), 10) * 2;

      for (i = 0; i < this.placeholders.length; i++) {
        $placeholder = this.placeholders[i];
        column = this.columns[i];

        if (i >= columnsLength || !column[column.length - 1]) {
          $placeholder.css('display', 'none');
        } else {
          $lastColumnItem = column[column.length - 1];
          if (!$lastColumnItem) continue;
          top = $lastColumnItem.data('wookmark-top') + $lastColumnItem.data('wookmark-height') + this.verticalOffset;
          height = containerHeight - top - innerOffset;

          $placeholder.css({
            position: 'absolute',
            display: height > 0 ? 'block' : 'none',
            left: i * columnWidth + sideOffset,
            top: top,
            width: columnWidth - innerOffset,
            height: height
          });
        }
      }
    };

    // Method the get active items which are not disabled and visible
    Wookmark.prototype.getActiveItems = function() {
      return this.ignoreInactiveItems ? this.handler.not('.inactive') : this.handler;
    };

    // Method to get the standard item width
    Wookmark.prototype.getItemWidth = function() {
      var itemWidth = this.itemWidth,
          innerWidth = this.container.width() - 2 * this.outerOffset,
          firstElement = this.handler.eq(0),
          flexibleWidth = this.flexibleWidth;

      if (this.itemWidth === undefined || this.itemWidth === 0 && !this.flexibleWidth) {
        itemWidth = firstElement.outerWidth();
      }
      else if (typeof this.itemWidth == 'string' && this.itemWidth.indexOf('%') >= 0) {
        itemWidth = parseFloat(this.itemWidth) / 100 * innerWidth;
      }

      // Calculate flexible item width if option is set
      if (flexibleWidth) {
        if (typeof flexibleWidth == 'string' && flexibleWidth.indexOf('%') >= 0) {
          flexibleWidth = parseFloat(flexibleWidth) / 100 * innerWidth;
        }

        // Find highest column count
        var paddedInnerWidth = (innerWidth + this.offset),
            flexibleColumns = ~~(0.5 + paddedInnerWidth / (flexibleWidth + this.offset)),
            fixedColumns = ~~(paddedInnerWidth / (itemWidth + this.offset)),
            columns = Math.max(flexibleColumns, fixedColumns),
            columnWidth = Math.min(flexibleWidth, ~~((innerWidth - (columns - 1) * this.offset) / columns));

        itemWidth = Math.max(itemWidth, columnWidth);

        // Stretch items to fill calculated width
        this.handler.css('width', itemWidth);
      }

      return itemWidth;
    };

    // Main layout method.
    Wookmark.prototype.layout = function(force) {
      // Do nothing if container isn't visible
      if (!this.container.is(':visible')) return;

      // Calculate basic layout parameters.
      var columnWidth = this.getItemWidth() + this.offset,
          containerWidth = this.container.width(),
          innerWidth = containerWidth - 2 * this.outerOffset,
          columns = ~~((innerWidth + this.offset) / columnWidth),
          offset = 0, maxHeight = 0, i = 0,
          activeItems = this.getActiveItems(),
          activeItemsLength = activeItems.length,
          $item;

      // Cache item height
      if (this.itemHeightsDirty || !this.container.data('itemHeightsInitialized')) {
        for (; i < activeItemsLength; i++) {
          $item = activeItems.eq(i);
          $item.data('wookmark-height', $item.outerHeight());
        }
        this.itemHeightsDirty = false;
        this.container.data('itemHeightsInitialized', true);
      }

      // Use less columns if there are to few items
      columns = Math.max(1, Math.min(columns, activeItemsLength));

      // Calculate the offset based on the alignment of columns to the parent container
      offset = this.outerOffset;
      if (this.align == 'center') {
        offset += ~~(0.5 + (innerWidth - (columns * columnWidth - this.offset)) >> 1);
      }

      // Get direction for positioning
      this.direction = this.direction || (this.align == 'right' ? 'right' : 'left');

      // If container and column count hasn't changed, we can only update the columns.
      if (!force && this.columns !== null && this.columns.length == columns && this.activeItemCount == activeItemsLength) {
        maxHeight = this.layoutColumns(columnWidth, offset);
      } else {
        maxHeight = this.layoutFull(columnWidth, columns, offset);
      }
      this.activeItemCount = activeItemsLength;

      // Set container height to height of the grid.
      this.container.css('height', maxHeight);

      // Update placeholders
      if (this.fillEmptySpace) {
        this.refreshPlaceholders(columnWidth, offset);
      }

      if (this.onLayoutChanged !== undefined && typeof this.onLayoutChanged === 'function') {
        this.onLayoutChanged();
      }
    };

    /**
     * Sort elements with configurable comparator
     */
    Wookmark.prototype.sortElements = function(elements) {
      return typeof(this.comparator) === 'function' ? elements.sort(this.comparator) : elements;
    };

    /**
     * Perform a full layout update.
     */
    Wookmark.prototype.layoutFull = function(columnWidth, columns, offset) {
      var $item, i = 0, k = 0,
          activeItems = $.makeArray(this.getActiveItems()),
          length = activeItems.length,
          shortest = null, shortestIndex = null,
          sideOffset, heights = [], itemBulkCSS = [],
          leftAligned = this.align == 'left' ? true : false;

      this.columns = [];

      // Sort elements before layouting
      activeItems = this.sortElements(activeItems);

      // Prepare arrays to store height of columns and items.
      while (heights.length < columns) {
        heights.push(this.outerOffset);
        this.columns.push([]);
      }

      // Loop over items.
      for (; i < length; i++ ) {
        $item = $(activeItems[i]);

        // Find the shortest column.
        shortest = heights[0];
        shortestIndex = 0;
        for (k = 0; k < columns; k++) {
          if (heights[k] < shortest) {
            shortest = heights[k];
            shortestIndex = k;
          }
        }
        $item.data('wookmark-top', shortest);

        // stick to left side if alignment is left and this is the first column
        sideOffset = offset;
        if (shortestIndex > 0 || !leftAligned)
          sideOffset += shortestIndex * columnWidth;

        // Position the item.
        (itemBulkCSS[i] = {
          obj: $item,
          css: {
            position: 'absolute',
            top: shortest
          }
        }).css[this.direction] = sideOffset;

        // Update column height and store item in shortest column
        heights[shortestIndex] += $item.data('wookmark-height') + this.verticalOffset;
        this.columns[shortestIndex].push($item);
      }

      bulkUpdateCSS(itemBulkCSS);

      // Return longest column
      return Math.max.apply(Math, heights);
    };

    /**
     * This layout method only updates the vertical position of the
     * existing column assignments.
     */
    Wookmark.prototype.layoutColumns = function(columnWidth, offset) {
      var heights = [], itemBulkCSS = [],
          i = 0, k = 0, j = 0, currentHeight,
          column, $item, itemData, sideOffset;

      for (; i < this.columns.length; i++) {
        heights.push(this.outerOffset);
        column = this.columns[i];
        sideOffset = i * columnWidth + offset;
        currentHeight = heights[i];

        for (k = 0; k < column.length; k++, j++) {
          $item = column[k].data('wookmark-top', currentHeight);
          (itemBulkCSS[j] = {
            obj: $item,
            css: {
              top: currentHeight
            }
          }).css[this.direction] = sideOffset;

          currentHeight += $item.data('wookmark-height') + this.verticalOffset;
        }
        heights[i] = currentHeight;
      }

      bulkUpdateCSS(itemBulkCSS);

      // Return longest column
      return Math.max.apply(Math, heights);
    };

    /**
     * Clear event listeners and time outs and the instance itself
     */
    Wookmark.prototype.clear = function() {
      clearTimeout(this.resizeTimer);
      $window.unbind('resize.wookmark', this.onResize);
      this.container.unbind('refreshWookmark', this.onRefresh);
      this.handler.wookmarkInstance = null;
    };

    return Wookmark;
  })();

  $.fn.wookmark = function(options) {
    // Create a wookmark instance if not available
    if (!this.wookmarkInstance) {
      this.wookmarkInstance = new Wookmark(this, options || {});
    } else {
      this.wookmarkInstance.update(options || {});
    }

    // Apply layout
    this.wookmarkInstance.layout(true);

    // Display items (if hidden) and return jQuery object to maintain chainability
    return this.show();
  };
}));


/*! Magnific Popup - v1.0.0 - 2015-01-03
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2015 Dmitry Semenov; */
;(function (factory) { 
if (typeof define === 'function' && define.amd) { 
 // AMD. Register as an anonymous module. 
 define(['jquery'], factory); 
 } else if (typeof exports === 'object') { 
 // Node/CommonJS 
 factory(require('jquery')); 
 } else { 
 // Browser globals 
 factory(window.jQuery || window.Zepto); 
 } 
 }(function($) { 

/*>>core*/
/**
 * 
 * Magnific Popup Core JS file
 * 
 */


/**
 * Private static constants
 */
var CLOSE_EVENT = 'Close',
	BEFORE_CLOSE_EVENT = 'BeforeClose',
	AFTER_CLOSE_EVENT = 'AfterClose',
	BEFORE_APPEND_EVENT = 'BeforeAppend',
	MARKUP_PARSE_EVENT = 'MarkupParse',
	OPEN_EVENT = 'Open',
	CHANGE_EVENT = 'Change',
	NS = 'mfp',
	EVENT_NS = '.' + NS,
	READY_CLASS = 'mfp-ready',
	REMOVING_CLASS = 'mfp-removing',
	PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


/**
 * Private vars 
 */
/*jshint -W079 */
var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
	MagnificPopup = function(){},
	_isJQ = !!(window.jQuery),
	_prevStatus,
	_window = $(window),
	_document,
	_prevContentType,
	_wrapClasses,
	_currPopupType;


/**
 * Private functions
 */
var _mfpOn = function(name, f) {
		mfp.ev.on(NS + name + EVENT_NS, f);
	},
	_getEl = function(className, appendTo, html, raw) {
		var el = document.createElement('div');
		el.className = 'mfp-'+className;
		if(html) {
			el.innerHTML = html;
		}
		if(!raw) {
			el = $(el);
			if(appendTo) {
				el.appendTo(appendTo);
			}
		} else if(appendTo) {
			appendTo.appendChild(el);
		}
		return el;
	},
	_mfpTrigger = function(e, data) {
		mfp.ev.triggerHandler(NS + e, data);

		if(mfp.st.callbacks) {
			// converts "mfpEventName" to "eventName" callback and triggers it if it's present
			e = e.charAt(0).toLowerCase() + e.slice(1);
			if(mfp.st.callbacks[e]) {
				mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
			}
		}
	},
	_getCloseBtn = function(type) {
		if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
			mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
			_currPopupType = type;
		}
		return mfp.currTemplate.closeBtn;
	},
	// Initialize Magnific Popup only when called at least once
	_checkInstance = function() {
		if(!$.magnificPopup.instance) {
			/*jshint -W020 */
			mfp = new MagnificPopup();
			mfp.init();
			$.magnificPopup.instance = mfp;
		}
	},
	// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
	supportsTransitions = function() {
		var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
			v = ['ms','O','Moz','Webkit']; // 'v' for vendor

		if( s['transition'] !== undefined ) {
			return true; 
		}
			
		while( v.length ) {
			if( v.pop() + 'Transition' in s ) {
				return true;
			}
		}
				
		return false;
	};



/**
 * Public functions
 */
MagnificPopup.prototype = {

	constructor: MagnificPopup,

	/**
	 * Initializes Magnific Popup plugin. 
	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
	 */
	init: function() {
		var appVersion = navigator.appVersion;
		mfp.isIE7 = appVersion.indexOf("MSIE 7.") !== -1; 
		mfp.isIE8 = appVersion.indexOf("MSIE 8.") !== -1;
		mfp.isLowIE = mfp.isIE7 || mfp.isIE8;
		mfp.isAndroid = (/android/gi).test(appVersion);
		mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
		mfp.supportsTransition = supportsTransitions();

		// We disable fixed positioned lightbox on devices that don't handle it nicely.
		// If you know a better way of detecting this - let me know.
		mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
		_document = $(document);

		mfp.popupsCache = {};
	},

	/**
	 * Opens popup
	 * @param  data [description]
	 */
	open: function(data) {

		var i;

		if(data.isObj === false) { 
			// convert jQuery collection to array to avoid conflicts later
			mfp.items = data.items.toArray();

			mfp.index = 0;
			var items = data.items,
				item;
			for(i = 0; i < items.length; i++) {
				item = items[i];
				if(item.parsed) {
					item = item.el[0];
				}
				if(item === data.el[0]) {
					mfp.index = i;
					break;
				}
			}
		} else {
			mfp.items = $.isArray(data.items) ? data.items : [data.items];
			mfp.index = data.index || 0;
		}

		// if popup is already opened - we just update the content
		if(mfp.isOpen) {
			mfp.updateItemHTML();
			return;
		}
		
		mfp.types = []; 
		_wrapClasses = '';
		if(data.mainEl && data.mainEl.length) {
			mfp.ev = data.mainEl.eq(0);
		} else {
			mfp.ev = _document;
		}

		if(data.key) {
			if(!mfp.popupsCache[data.key]) {
				mfp.popupsCache[data.key] = {};
			}
			mfp.currTemplate = mfp.popupsCache[data.key];
		} else {
			mfp.currTemplate = {};
		}



		mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 
		mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

		if(mfp.st.modal) {
			mfp.st.closeOnContentClick = false;
			mfp.st.closeOnBgClick = false;
			mfp.st.showCloseBtn = false;
			mfp.st.enableEscapeKey = false;
		}
		

		// Building markup
		// main containers are created only once
		if(!mfp.bgOverlay) {

			// Dark overlay
			mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
				mfp.close();
			});

			mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
				if(mfp._checkIfClose(e.target)) {
					mfp.close();
				}
			});

			mfp.container = _getEl('container', mfp.wrap);
		}

		mfp.contentContainer = _getEl('content');
		if(mfp.st.preloader) {
			mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
		}


		// Initializing modules
		var modules = $.magnificPopup.modules;
		for(i = 0; i < modules.length; i++) {
			var n = modules[i];
			n = n.charAt(0).toUpperCase() + n.slice(1);
			mfp['init'+n].call(mfp);
		}
		_mfpTrigger('BeforeOpen');


		if(mfp.st.showCloseBtn) {
			// Close button
			if(!mfp.st.closeBtnInside) {
				mfp.wrap.append( _getCloseBtn() );
			} else {
				_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
					values.close_replaceWith = _getCloseBtn(item.type);
				});
				_wrapClasses += ' mfp-close-btn-in';
			}
		}

		if(mfp.st.alignTop) {
			_wrapClasses += ' mfp-align-top';
		}

	

		if(mfp.fixedContentPos) {
			mfp.wrap.css({
				overflow: mfp.st.overflowY,
				overflowX: 'hidden',
				overflowY: mfp.st.overflowY
			});
		} else {
			mfp.wrap.css({ 
				top: _window.scrollTop(),
				position: 'absolute'
			});
		}
		if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
			mfp.bgOverlay.css({
				height: _document.height(),
				position: 'absolute'
			});
		}

		

		if(mfp.st.enableEscapeKey) {
			// Close on ESC key
			_document.on('keyup' + EVENT_NS, function(e) {
				if(e.keyCode === 27) {
					mfp.close();
				}
			});
		}

		_window.on('resize' + EVENT_NS, function() {
			mfp.updateSize();
		});


		if(!mfp.st.closeOnContentClick) {
			_wrapClasses += ' mfp-auto-cursor';
		}
		
		if(_wrapClasses)
			mfp.wrap.addClass(_wrapClasses);


		// this triggers recalculation of layout, so we get it once to not to trigger twice
		var windowHeight = mfp.wH = _window.height();

		
		var windowStyles = {};

		if( mfp.fixedContentPos ) {
            if(mfp._hasScrollBar(windowHeight)){
                var s = mfp._getScrollbarSize();
                if(s) {
                    windowStyles.marginRight = s;
                }
            }
        }

		if(mfp.fixedContentPos) {
			if(!mfp.isIE7) {
				windowStyles.overflow = 'hidden';
			} else {
				// ie7 double-scroll bug
				$('body, html').css('overflow', 'hidden');
			}
		}

		
		
		var classesToadd = mfp.st.mainClass;
		if(mfp.isIE7) {
			classesToadd += ' mfp-ie7';
		}
		if(classesToadd) {
			mfp._addClassToMFP( classesToadd );
		}

		// add content
		mfp.updateItemHTML();

		_mfpTrigger('BuildControls');

		// remove scrollbar, add margin e.t.c
		$('html').css(windowStyles);
		
		// add everything to DOM
		mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || $(document.body) );

		// Save last focused element
		mfp._lastFocusedEl = document.activeElement;
		
		// Wait for next cycle to allow CSS transition
		setTimeout(function() {
			
			if(mfp.content) {
				mfp._addClassToMFP(READY_CLASS);
				mfp._setFocus();
			} else {
				// if content is not defined (not loaded e.t.c) we add class only for BG
				mfp.bgOverlay.addClass(READY_CLASS);
			}
			
			// Trap the focus in popup
			_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

		}, 16);

		mfp.isOpen = true;
		mfp.updateSize(windowHeight);
		_mfpTrigger(OPEN_EVENT);

		return data;
	},

	/**
	 * Closes the popup
	 */
	close: function() {
		if(!mfp.isOpen) return;
		_mfpTrigger(BEFORE_CLOSE_EVENT);

		mfp.isOpen = false;
		// for CSS3 animation
		if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
			mfp._addClassToMFP(REMOVING_CLASS);
			setTimeout(function() {
				mfp._close();
			}, mfp.st.removalDelay);
		} else {
			mfp._close();
		}
	},

	/**
	 * Helper for close() function
	 */
	_close: function() {
		_mfpTrigger(CLOSE_EVENT);

		var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

		mfp.bgOverlay.detach();
		mfp.wrap.detach();
		mfp.container.empty();

		if(mfp.st.mainClass) {
			classesToRemove += mfp.st.mainClass + ' ';
		}

		mfp._removeClassFromMFP(classesToRemove);

		if(mfp.fixedContentPos) {
			var windowStyles = {marginRight: ''};
			if(mfp.isIE7) {
				$('body, html').css('overflow', '');
			} else {
				windowStyles.overflow = '';
			}
			$('html').css(windowStyles);
		}
		
		_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
		mfp.ev.off(EVENT_NS);

		// clean up DOM elements that aren't removed
		mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
		mfp.bgOverlay.attr('class', 'mfp-bg');
		mfp.container.attr('class', 'mfp-container');

		// remove close button from target element
		if(mfp.st.showCloseBtn &&
		(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
			if(mfp.currTemplate.closeBtn)
				mfp.currTemplate.closeBtn.detach();
		}


		if(mfp._lastFocusedEl) {
			$(mfp._lastFocusedEl).focus(); // put tab focus back
		}
		mfp.currItem = null;	
		mfp.content = null;
		mfp.currTemplate = null;
		mfp.prevHeight = 0;

		_mfpTrigger(AFTER_CLOSE_EVENT);
	},
	
	updateSize: function(winHeight) {

		if(mfp.isIOS) {
			// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
			var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
			var height = window.innerHeight * zoomLevel;
			mfp.wrap.css('height', height);
			mfp.wH = height;
		} else {
			mfp.wH = winHeight || _window.height();
		}
		// Fixes #84: popup incorrectly positioned with position:relative on body
		if(!mfp.fixedContentPos) {
			mfp.wrap.css('height', mfp.wH);
		}

		_mfpTrigger('Resize');

	},

	/**
	 * Set content of popup based on current index
	 */
	updateItemHTML: function() {
		var item = mfp.items[mfp.index];

		// Detach and perform modifications
		mfp.contentContainer.detach();

		if(mfp.content)
			mfp.content.detach();

		if(!item.parsed) {
			item = mfp.parseEl( mfp.index );
		}

		var type = item.type;	

		_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
		// BeforeChange event works like so:
		// _mfpOn('BeforeChange', function(e, prevType, newType) { });
		
		mfp.currItem = item;

		

		

		if(!mfp.currTemplate[type]) {
			var markup = mfp.st[type] ? mfp.st[type].markup : false;

			// allows to modify markup
			_mfpTrigger('FirstMarkupParse', markup);

			if(markup) {
				mfp.currTemplate[type] = $(markup);
			} else {
				// if there is no markup found we just define that template is parsed
				mfp.currTemplate[type] = true;
			}
		}

		if(_prevContentType && _prevContentType !== item.type) {
			mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
		}
		
		var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
		mfp.appendContent(newContent, type);

		item.preloaded = true;

		_mfpTrigger(CHANGE_EVENT, item);
		_prevContentType = item.type;
		
		// Append container back after its content changed
		mfp.container.prepend(mfp.contentContainer);

		_mfpTrigger('AfterChange');
	},


	/**
	 * Set HTML content of popup
	 */
	appendContent: function(newContent, type) {
		mfp.content = newContent;
		
		if(newContent) {
			if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
				mfp.currTemplate[type] === true) {
				// if there is no markup, we just append close button element inside
				if(!mfp.content.find('.mfp-close').length) {
					mfp.content.append(_getCloseBtn());
				}
			} else {
				mfp.content = newContent;
			}
		} else {
			mfp.content = '';
		}

		_mfpTrigger(BEFORE_APPEND_EVENT);
		mfp.container.addClass('mfp-'+type+'-holder');

		mfp.contentContainer.append(mfp.content);
	},



	
	/**
	 * Creates Magnific Popup data object based on given data
	 * @param  {int} index Index of item to parse
	 */
	parseEl: function(index) {
		var item = mfp.items[index],
			type;

		if(item.tagName) {
			item = { el: $(item) };
		} else {
			type = item.type;
			item = { data: item, src: item.src };
		}

		if(item.el) {
			var types = mfp.types;

			// check for 'mfp-TYPE' class
			for(var i = 0; i < types.length; i++) {
				if( item.el.hasClass('mfp-'+types[i]) ) {
					type = types[i];
					break;
				}
			}

			item.src = item.el.attr('data-mfp-src');
			if(!item.src) {
				item.src = item.el.attr('href');
			}
		}

		item.type = type || mfp.st.type || 'inline';
		item.index = index;
		item.parsed = true;
		mfp.items[index] = item;
		_mfpTrigger('ElementParse', item);

		return mfp.items[index];
	},


	/**
	 * Initializes single popup or a group of popups
	 */
	addGroup: function(el, options) {
		var eHandler = function(e) {
			e.mfpEl = this;
			mfp._openClick(e, el, options);
		};

		if(!options) {
			options = {};
		} 

		var eName = 'click.magnificPopup';
		options.mainEl = el;
		
		if(options.items) {
			options.isObj = true;
			el.off(eName).on(eName, eHandler);
		} else {
			options.isObj = false;
			if(options.delegate) {
				el.off(eName).on(eName, options.delegate , eHandler);
			} else {
				options.items = el;
				el.off(eName).on(eName, eHandler);
			}
		}
	},
	_openClick: function(e, el, options) {
		var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


		if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey ) ) {
			return;
		}

		var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

		if(disableOn) {
			if($.isFunction(disableOn)) {
				if( !disableOn.call(mfp) ) {
					return true;
				}
			} else { // else it's number
				if( _window.width() < disableOn ) {
					return true;
				}
			}
		}
		
		if(e.type) {
			e.preventDefault();

			// This will prevent popup from closing if element is inside and popup is already opened
			if(mfp.isOpen) {
				e.stopPropagation();
			}
		}
			

		options.el = $(e.mfpEl);
		if(options.delegate) {
			options.items = el.find(options.delegate);
		}
		mfp.open(options);
	},


	/**
	 * Updates text on preloader
	 */
	updateStatus: function(status, text) {

		if(mfp.preloader) {
			if(_prevStatus !== status) {
				mfp.container.removeClass('mfp-s-'+_prevStatus);
			}

			if(!text && status === 'loading') {
				text = mfp.st.tLoading;
			}

			var data = {
				status: status,
				text: text
			};
			// allows to modify status
			_mfpTrigger('UpdateStatus', data);

			status = data.status;
			text = data.text;

			mfp.preloader.html(text);

			mfp.preloader.find('a').on('click', function(e) {
				e.stopImmediatePropagation();
			});

			mfp.container.addClass('mfp-s-'+status);
			_prevStatus = status;
		}
	},


	/*
		"Private" helpers that aren't private at all
	 */
	// Check to close popup or not
	// "target" is an element that was clicked
	_checkIfClose: function(target) {

		if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
			return;
		}

		var closeOnContent = mfp.st.closeOnContentClick;
		var closeOnBg = mfp.st.closeOnBgClick;

		if(closeOnContent && closeOnBg) {
			return true;
		} else {

			// We close the popup if click is on close button or on preloader. Or if there is no content.
			if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
				return true;
			}

			// if click is outside the content
			if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
				if(closeOnBg) {
					// last check, if the clicked element is in DOM, (in case it's removed onclick)
					if( $.contains(document, target) ) {
						return true;
					}
				}
			} else if(closeOnContent) {
				return true;
			}

		}
		return false;
	},
	_addClassToMFP: function(cName) {
		mfp.bgOverlay.addClass(cName);
		mfp.wrap.addClass(cName);
	},
	_removeClassFromMFP: function(cName) {
		this.bgOverlay.removeClass(cName);
		mfp.wrap.removeClass(cName);
	},
	_hasScrollBar: function(winHeight) {
		return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
	},
	_setFocus: function() {
		(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
	},
	_onFocusIn: function(e) {
		if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
			mfp._setFocus();
			return false;
		}
	},
	_parseMarkup: function(template, values, item) {
		var arr;
		if(item.data) {
			values = $.extend(item.data, values);
		}
		_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );

		$.each(values, function(key, value) {
			if(value === undefined || value === false) {
				return true;
			}
			arr = key.split('_');
			if(arr.length > 1) {
				var el = template.find(EVENT_NS + '-'+arr[0]);

				if(el.length > 0) {
					var attr = arr[1];
					if(attr === 'replaceWith') {
						if(el[0] !== value[0]) {
							el.replaceWith(value);
						}
					} else if(attr === 'img') {
						if(el.is('img')) {
							el.attr('src', value);
						} else {
							el.replaceWith( '<img src="'+value+'" class="' + el.attr('class') + '" />' );
						}
					} else {
						el.attr(arr[1], value);
					}
				}

			} else {
				template.find(EVENT_NS + '-'+key).html(value);
			}
		});
	},

	_getScrollbarSize: function() {
		// thx David
		if(mfp.scrollbarSize === undefined) {
			var scrollDiv = document.createElement("div");
			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
			document.body.appendChild(scrollDiv);
			mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
		}
		return mfp.scrollbarSize;
	}

}; /* MagnificPopup core prototype end */




/**
 * Public static functions
 */
$.magnificPopup = {
	instance: null,
	proto: MagnificPopup.prototype,
	modules: [],

	open: function(options, index) {
		_checkInstance();	

		if(!options) {
			options = {};
		} else {
			options = $.extend(true, {}, options);
		}
			

		options.isObj = true;
		options.index = index || 0;
		return this.instance.open(options);
	},

	close: function() {
		return $.magnificPopup.instance && $.magnificPopup.instance.close();
	},

	registerModule: function(name, module) {
		if(module.options) {
			$.magnificPopup.defaults[name] = module.options;
		}
		$.extend(this.proto, module.proto);			
		this.modules.push(name);
	},

	defaults: {   

		// Info about options is in docs:
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options
		
		disableOn: 0,	

		key: null,

		midClick: false,

		mainClass: '',

		preloader: true,

		focus: '', // CSS selector of input to focus after popup is opened
		
		closeOnContentClick: false,

		closeOnBgClick: true,

		closeBtnInside: true, 

		showCloseBtn: true,

		enableEscapeKey: true,

		modal: false,

		alignTop: false,
	
		removalDelay: 0,

		prependTo: null,
		
		fixedContentPos: 'auto', 
	
		fixedBgPos: 'auto',

		overflowY: 'auto',

		closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',

		tClose: 'Close (Esc)',

		tLoading: 'Loading...'

	}
};



$.fn.magnificPopup = function(options) {
	_checkInstance();

	var jqEl = $(this);

	// We call some API method of first param is a string
	if (typeof options === "string" ) {

		if(options === 'open') {
			var items,
				itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
				index = parseInt(arguments[1], 10) || 0;

			if(itemOpts.items) {
				items = itemOpts.items[index];
			} else {
				items = jqEl;
				if(itemOpts.delegate) {
					items = items.find(itemOpts.delegate);
				}
				items = items.eq( index );
			}
			mfp._openClick({mfpEl:items}, jqEl, itemOpts);
		} else {
			if(mfp.isOpen)
				mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
		}

	} else {
		// clone options obj
		options = $.extend(true, {}, options);
		
		/*
		 * As Zepto doesn't support .data() method for objects 
		 * and it works only in normal browsers
		 * we assign "options" object directly to the DOM element. FTW!
		 */
		if(_isJQ) {
			jqEl.data('magnificPopup', options);
		} else {
			jqEl[0].magnificPopup = options;
		}

		mfp.addGroup(jqEl, options);

	}
	return jqEl;
};


//Quick benchmark
/*
var start = performance.now(),
	i,
	rounds = 1000;

for(i = 0; i < rounds; i++) {

}
console.log('Test #1:', performance.now() - start);

start = performance.now();
for(i = 0; i < rounds; i++) {

}
console.log('Test #2:', performance.now() - start);
*/


/*>>core*/

/*>>inline*/

var INLINE_NS = 'inline',
	_hiddenClass,
	_inlinePlaceholder, 
	_lastInlineElement,
	_putInlineElementsBack = function() {
		if(_lastInlineElement) {
			_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
			_lastInlineElement = null;
		}
	};

$.magnificPopup.registerModule(INLINE_NS, {
	options: {
		hiddenClass: 'hide', // will be appended with `mfp-` prefix
		markup: '',
		tNotFound: 'Content not found'
	},
	proto: {

		initInline: function() {
			mfp.types.push(INLINE_NS);

			_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
				_putInlineElementsBack();
			});
		},

		getInline: function(item, template) {

			_putInlineElementsBack();

			if(item.src) {
				var inlineSt = mfp.st.inline,
					el = $(item.src);

				if(el.length) {

					// If target element has parent - we replace it with placeholder and put it back after popup is closed
					var parent = el[0].parentNode;
					if(parent && parent.tagName) {
						if(!_inlinePlaceholder) {
							_hiddenClass = inlineSt.hiddenClass;
							_inlinePlaceholder = _getEl(_hiddenClass);
							_hiddenClass = 'mfp-'+_hiddenClass;
						}
						// replace target inline element with placeholder
						_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
					}

					mfp.updateStatus('ready');
				} else {
					mfp.updateStatus('error', inlineSt.tNotFound);
					el = $('<div>');
				}

				item.inlineElement = el;
				return el;
			}

			mfp.updateStatus('ready');
			mfp._parseMarkup(template, {}, item);
			return template;
		}
	}
});

/*>>inline*/



/*>>image*/
var _imgInterval,
	_getTitle = function(item) {
		if(item.data && item.data.title !== undefined) 
			return item.data.title;

		var src = mfp.st.image.titleSrc;

		if(src) {
			if($.isFunction(src)) {
				return src.call(mfp, item);
			} else if(item.el) {
				return item.el.attr(src) || '';
			}
		}
		return '';
	};

$.magnificPopup.registerModule('image', {

	options: {
		markup: '<div class="mfp-figure">'+
					'<div class="mfp-close"></div>'+
					'<figure>'+
						'<div class="mfp-img"></div>'+
						'<figcaption>'+
							'<div class="mfp-bottom-bar">'+
								'<div class="mfp-title"></div>'+
								'<div class="mfp-counter"></div>'+
							'</div>'+
						'</figcaption>'+
					'</figure>'+
				'</div>',
		cursor: 'mfp-zoom-out-cur',
		titleSrc: 'title', 
		verticalFit: true,
		tError: '<a href="%url%">The image</a> could not be loaded.'
	},

	proto: {
		initImage: function() {
			var imgSt = mfp.st.image,
				ns = '.image';

			mfp.types.push('image');

			_mfpOn(OPEN_EVENT+ns, function() {
				if(mfp.currItem.type === 'image' && imgSt.cursor) {
					$(document.body).addClass(imgSt.cursor);
				}
			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(imgSt.cursor) {
					$(document.body).removeClass(imgSt.cursor);
				}
				_window.off('resize' + EVENT_NS);
			});

			_mfpOn('Resize'+ns, mfp.resizeImage);
			if(mfp.isLowIE) {
				_mfpOn('AfterChange', mfp.resizeImage);
			}
		},
		resizeImage: function() {
			var item = mfp.currItem;
			if(!item || !item.img) return;

			if(mfp.st.image.verticalFit) {
				var decr = 0;
				// fix box-sizing in ie7/8
				if(mfp.isLowIE) {
					decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
				}
				item.img.css('max-height', mfp.wH-decr);
			}
		},
		_onImageHasSize: function(item) {
			if(item.img) {
				
				item.hasSize = true;

				if(_imgInterval) {
					clearInterval(_imgInterval);
				}
				
				item.isCheckingImgSize = false;

				_mfpTrigger('ImageHasSize', item);

				if(item.imgHidden) {
					if(mfp.content)
						mfp.content.removeClass('mfp-loading');
					
					item.imgHidden = false;
				}

			}
		},

		/**
		 * Function that loops until the image has size to display elements that rely on it asap
		 */
		findImageSize: function(item) {

			var counter = 0,
				img = item.img[0],
				mfpSetInterval = function(delay) {

					if(_imgInterval) {
						clearInterval(_imgInterval);
					}
					// decelerating interval that checks for size of an image
					_imgInterval = setInterval(function() {
						if(img.naturalWidth > 0) {
							mfp._onImageHasSize(item);
							return;
						}

						if(counter > 200) {
							clearInterval(_imgInterval);
						}

						counter++;
						if(counter === 3) {
							mfpSetInterval(10);
						} else if(counter === 40) {
							mfpSetInterval(50);
						} else if(counter === 100) {
							mfpSetInterval(500);
						}
					}, delay);
				};

			mfpSetInterval(1);
		},

		getImage: function(item, template) {

			var guard = 0,

				// image load complete handler
				onLoadComplete = function() {
					if(item) {
						if (item.img[0].complete) {
							item.img.off('.mfploader');
							
							if(item === mfp.currItem){
								mfp._onImageHasSize(item);

								mfp.updateStatus('ready');
							}

							item.hasSize = true;
							item.loaded = true;

							_mfpTrigger('ImageLoadComplete');
							
						}
						else {
							// if image complete check fails 200 times (20 sec), we assume that there was an error.
							guard++;
							if(guard < 200) {
								setTimeout(onLoadComplete,100);
							} else {
								onLoadError();
							}
						}
					}
				},

				// image error handler
				onLoadError = function() {
					if(item) {
						item.img.off('.mfploader');
						if(item === mfp.currItem){
							mfp._onImageHasSize(item);
							mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
						}

						item.hasSize = true;
						item.loaded = true;
						item.loadError = true;
					}
				},
				imgSt = mfp.st.image;


			var el = template.find('.mfp-img');
			if(el.length) {
				var img = document.createElement('img');
				img.className = 'mfp-img';
				if(item.el && item.el.find('img').length) {
					img.alt = item.el.find('img').attr('alt');
				}
				item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
				img.src = item.src;

				// without clone() "error" event is not firing when IMG is replaced by new IMG
				// TODO: find a way to avoid such cloning
				if(el.is('img')) {
					item.img = item.img.clone();
				}

				img = item.img[0];
				if(img.naturalWidth > 0) {
					item.hasSize = true;
				} else if(!img.width) {										
					item.hasSize = false;
				}
			}

			mfp._parseMarkup(template, {
				title: _getTitle(item),
				img_replaceWith: item.img
			}, item);

			mfp.resizeImage();

			if(item.hasSize) {
				if(_imgInterval) clearInterval(_imgInterval);

				if(item.loadError) {
					template.addClass('mfp-loading');
					mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
				} else {
					template.removeClass('mfp-loading');
					mfp.updateStatus('ready');
				}
				return template;
			}

			mfp.updateStatus('loading');
			item.loading = true;

			if(!item.hasSize) {
				item.imgHidden = true;
				template.addClass('mfp-loading');
				mfp.findImageSize(item);
			} 

			return template;
		}
	}
});



/*>>image*/

/*>>zoom*/
/*
var hasMozTransform,
	getHasMozTransform = function() {
		if(hasMozTransform === undefined) {
			hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
		}
		return hasMozTransform;		
	};

$.magnificPopup.registerModule('zoom', {

	options: {
		enabled: false,
		easing: 'ease-in-out',
		duration: 300,
		opener: function(element) {
			return element.is('img') ? element : element.find('img');
		}
	},

	proto: {

		initZoom: function() {
			var zoomSt = mfp.st.zoom,
				ns = '.zoom',
				image;
				
			if(!zoomSt.enabled || !mfp.supportsTransition) {
				return;
			}

			var duration = zoomSt.duration,
				getElToAnimate = function(image) {
					var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
						transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
						cssObj = {
							position: 'fixed',
							zIndex: 9999,
							left: 0,
							top: 0,
							'-webkit-backface-visibility': 'hidden'
						},
						t = 'transition';

					cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;

					newImg.css(cssObj);
					return newImg;
				},
				showMainContent = function() {
					mfp.content.css('visibility', 'visible');
				},
				openTimeout,
				animatedImg;

			_mfpOn('BuildControls'+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);
					mfp.content.css('visibility', 'hidden');

					// Basically, all code below does is clones existing image, puts in on top of the current one and animated it
					
					image = mfp._getItemToZoom();

					if(!image) {
						showMainContent();
						return;
					}

					animatedImg = getElToAnimate(image); 
					
					animatedImg.css( mfp._getOffset() );

					mfp.wrap.append(animatedImg);

					openTimeout = setTimeout(function() {
						animatedImg.css( mfp._getOffset( true ) );
						openTimeout = setTimeout(function() {

							showMainContent();

							setTimeout(function() {
								animatedImg.remove();
								image = animatedImg = null;
								_mfpTrigger('ZoomAnimationEnded');
							}, 16); // avoid blink when switching images 

						}, duration); // this timeout equals animation duration

					}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


					// Lots of timeouts...
				}
			});
			_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);

					mfp.st.removalDelay = duration;

					if(!image) {
						image = mfp._getItemToZoom();
						if(!image) {
							return;
						}
						animatedImg = getElToAnimate(image);
					}
					
					
					animatedImg.css( mfp._getOffset(true) );
					mfp.wrap.append(animatedImg);
					mfp.content.css('visibility', 'hidden');
					
					setTimeout(function() {
						animatedImg.css( mfp._getOffset() );
					}, 16);
				}

			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {
					showMainContent();
					if(animatedImg) {
						animatedImg.remove();
					}
					image = null;
				}	
			});
		},

		_allowZoom: function() {
			return mfp.currItem.type === 'image';
		},

		_getItemToZoom: function() {
			if(mfp.currItem.hasSize) {
				return mfp.currItem.img;
			} else {
				return false;
			}
		},

		// Get element postion relative to viewport
		_getOffset: function(isLarge) {
			var el;
			if(isLarge) {
				el = mfp.currItem.img;
			} else {
				el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
			}

			var offset = el.offset();
			var paddingTop = parseInt(el.css('padding-top'),10);
			var paddingBottom = parseInt(el.css('padding-bottom'),10);
			offset.top -= ( $(window).scrollTop() - paddingTop );


			
			
			//Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

			 
			var obj = {
				width: el.width(),
				// fix Zepto height+padding issue
				height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
			};

			// I hate to do this, but there is no another option
			if( getHasMozTransform() ) {
				obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
			} else {
				obj.left = offset.left;
				obj.top = offset.top;
			}
			return obj;
		}

	}
});


*/
/*>>zoom*/

/*>>iframe*/

var IFRAME_NS = 'iframe',
	_emptyPage = '//about:blank',
	
	_fixIframeBugs = function(isShowing) {
		if(mfp.currTemplate[IFRAME_NS]) {
			var el = mfp.currTemplate[IFRAME_NS].find('iframe');
			if(el.length) { 
				// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
				if(!isShowing) {
					el[0].src = _emptyPage;
				}

				// IE8 black screen bug fix
				if(mfp.isIE8) {
					el.css('display', isShowing ? 'block' : 'none');
				}
			}
		}
	};

$.magnificPopup.registerModule(IFRAME_NS, {

	options: {
		markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
				'</div>',

		srcAction: 'iframe_src',

		// we don't care and support only one default type of URL by default
		patterns: {
			youtube: {
				index: 'youtube.com', 
				id: 'v=', 
				src: '//www.youtube.com/embed/%id%?autoplay=1'
			},
			vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			},
			gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			}
		}
	},

	proto: {
		initIframe: function() {
			mfp.types.push(IFRAME_NS);

			_mfpOn('BeforeChange', function(e, prevType, newType) {
				if(prevType !== newType) {
					if(prevType === IFRAME_NS) {
						_fixIframeBugs(); // iframe if removed
					} else if(newType === IFRAME_NS) {
						_fixIframeBugs(true); // iframe is showing
					} 
				}// else {
					// iframe source is switched, don't do anything
				//}
			});

			_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
				_fixIframeBugs();
			});
		},

		getIframe: function(item, template) {
			var embedSrc = item.src;
			var iframeSt = mfp.st.iframe;
				
			$.each(iframeSt.patterns, function() {
				if(embedSrc.indexOf( this.index ) > -1) {
					if(this.id) {
						if(typeof this.id === 'string') {
							embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
						} else {
							embedSrc = this.id.call( this, embedSrc );
						}
					}
					embedSrc = this.src.replace('%id%', embedSrc );
					return false; // break;
				}
			});
			
			var dataObj = {};
			if(iframeSt.srcAction) {
				dataObj[iframeSt.srcAction] = embedSrc;
			}
			mfp._parseMarkup(template, dataObj, item);

			mfp.updateStatus('ready');

			return template;
		}
	}
});



/*>>iframe*/

/*>>gallery*/
/**
 * Get looped index depending on number of slides
 */
var _getLoopedId = function(index) {
		var numSlides = mfp.items.length;
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	_replaceCurrTotal = function(text, curr, total) {
		return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
	};

$.magnificPopup.registerModule('gallery', {

	options: {
		enabled: false,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		preload: [0,2],
		navigateByImgClick: true,
		arrows: true,

		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '%curr% of %total%'
	},

	proto: {
		initGallery: function() {

			var gSt = mfp.st.gallery,
				ns = '.mfp-gallery',
				supportsFastClick = Boolean($.fn.mfpFastClick);

			mfp.direction = true; // true - next, false - prev
			
			if(!gSt || !gSt.enabled ) return false;

			_wrapClasses += ' mfp-gallery';

			_mfpOn(OPEN_EVENT+ns, function() {

				if(gSt.navigateByImgClick) {
					mfp.wrap.on('click'+ns, '.mfp-img', function() {
						if(mfp.items.length > 1) {
							mfp.next();
							return false;
						}
					});
				}

				_document.on('keydown'+ns, function(e) {
					if (e.keyCode === 37) {
						mfp.prev();
					} else if (e.keyCode === 39) {
						mfp.next();
					}
				});
			});

			_mfpOn('UpdateStatus'+ns, function(e, data) {
				if(data.text) {
					data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
				}
			});

			_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
				var l = mfp.items.length;
				values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
			});

			_mfpOn('BuildControls' + ns, function() {
				if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
					var markup = gSt.arrowMarkup,
						arrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),			
						arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);

					var eName = supportsFastClick ? 'mfpFastClick' : 'click';
					arrowLeft[eName](function() {
						mfp.prev();
					});			
					arrowRight[eName](function() {
						mfp.next();
					});	

					// Polyfill for :before and :after (adds elements with classes mfp-a and mfp-b)
					if(mfp.isIE7) {
						_getEl('b', arrowLeft[0], false, true);
						_getEl('a', arrowLeft[0], false, true);
						_getEl('b', arrowRight[0], false, true);
						_getEl('a', arrowRight[0], false, true);
					}

					mfp.container.append(arrowLeft.add(arrowRight));
				}
			});

			_mfpOn(CHANGE_EVENT+ns, function() {
				if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

				mfp._preloadTimeout = setTimeout(function() {
					mfp.preloadNearbyImages();
					mfp._preloadTimeout = null;
				}, 16);		
			});


			_mfpOn(CLOSE_EVENT+ns, function() {
				_document.off(ns);
				mfp.wrap.off('click'+ns);
			
				if(mfp.arrowLeft && supportsFastClick) {
					mfp.arrowLeft.add(mfp.arrowRight).destroyMfpFastClick();
				}
				mfp.arrowRight = mfp.arrowLeft = null;
			});

		}, 
		next: function() {
			mfp.direction = true;
			mfp.index = _getLoopedId(mfp.index + 1);
			mfp.updateItemHTML();
		},
		prev: function() {
			mfp.direction = false;
			mfp.index = _getLoopedId(mfp.index - 1);
			mfp.updateItemHTML();
		},
		goTo: function(newIndex) {
			mfp.direction = (newIndex >= mfp.index);
			mfp.index = newIndex;
			mfp.updateItemHTML();
		},
		preloadNearbyImages: function() {
			var p = mfp.st.gallery.preload,
				preloadBefore = Math.min(p[0], mfp.items.length),
				preloadAfter = Math.min(p[1], mfp.items.length),
				i;

			for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
				mfp._preloadItem(mfp.index+i);
			}
			for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
				mfp._preloadItem(mfp.index-i);
			}
		},
		_preloadItem: function(index) {
			index = _getLoopedId(index);

			if(mfp.items[index].preloaded) {
				return;
			}

			var item = mfp.items[index];
			if(!item.parsed) {
				item = mfp.parseEl( index );
			}

			_mfpTrigger('LazyLoad', item);

			if(item.type === 'image') {
				item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
					item.hasSize = true;
				}).on('error.mfploader', function() {
					item.hasSize = true;
					item.loadError = true;
					_mfpTrigger('LazyLoadError', item);
				}).attr('src', item.src);
			}


			item.preloaded = true;
		}
	}
});

/*
Touch Support that might be implemented some day

addSwipeGesture: function() {
	var startX,
		moved,
		multipleTouches;

		return;

	var namespace = '.mfp',
		addEventNames = function(pref, down, move, up, cancel) {
			mfp._tStart = pref + down + namespace;
			mfp._tMove = pref + move + namespace;
			mfp._tEnd = pref + up + namespace;
			mfp._tCancel = pref + cancel + namespace;
		};

	if(window.navigator.msPointerEnabled) {
		addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
	} else if('ontouchstart' in window) {
		addEventNames('touch', 'start', 'move', 'end', 'cancel');
	} else {
		return;
	}
	_window.on(mfp._tStart, function(e) {
		var oE = e.originalEvent;
		multipleTouches = moved = false;
		startX = oE.pageX || oE.changedTouches[0].pageX;
	}).on(mfp._tMove, function(e) {
		if(e.originalEvent.touches.length > 1) {
			multipleTouches = e.originalEvent.touches.length;
		} else {
			//e.preventDefault();
			moved = true;
		}
	}).on(mfp._tEnd + ' ' + mfp._tCancel, function(e) {
		if(moved && !multipleTouches) {
			var oE = e.originalEvent,
				diff = startX - (oE.pageX || oE.changedTouches[0].pageX);

			if(diff > 20) {
				mfp.next();
			} else if(diff < -20) {
				mfp.prev();
			}
		}
	});
},
*/


/*>>gallery*/




 _checkInstance(); }));
 
//Famax 4.0 - http://www.codehandling.com/2015/03/famax-40-complete-facebook-fanpage.html
//Buy at http://codecanyon.net/item/famax-facebook-fan-page-on-your-website/10287995
var famaxLoggedInUser = {};
(function ($) {
	var famaxRefreshTimer;
	//get fanpage posts from Facebook
	var getPagePosts = function ($famaxContainer,nextPageApiUrl) {
		//console.log('inside getPlaylistVideos');
		//var pageTokenUrl = "";
		var loadMoreFlag = false;
		
		var famax_global_options = $famaxContainer.data('famax_global_options');
		if(null==famax_global_options.fanPageId) {
			return;
		}
		
		if(null==nextPageApiUrl) {
			apiUrl = "https://graph.facebook.com/v2.2/"+famax_global_options.fanPageId+"/posts?limit="+famax_global_options.maxResults+"&access_token="+famax_global_options.accessToken+"&fields=type,message,object_id,picture,name,description,link,from,comments.limit(1).summary(true),likes.limit(1).summary(true),shares";
		} else {
			apiUrl = nextPageApiUrl;
			loadMoreFlag = true;
		}
		
		//console.log('getPageFeeds apiUrl-'+apiUrl);
		
		$.ajax({
			url: apiUrl,
			type: "GET",
			async: true,
			cache: true,
			dataType: 'jsonp',
			success: function(response) { insertPageFeeds(response,false,loadMoreFlag,$famaxContainer);},
			error: function(errorResponse) {  alert(errorResponse); },
			beforeSend: setHeader
		});
	},
	
	//get page tags
	getPageTags = function ($famaxContainer,nextPageApiUrl) {
		//console.log('inside getPlaylistVideos');
		//var pageTokenUrl = "";
		var loadMoreFlag = false;
		
		var famax_global_options = $famaxContainer.data('famax_global_options');
		if(null==famax_global_options.fanPageId) {
			return;
		}
		
		if(null==nextPageApiUrl) {
			apiUrl = "https://graph.facebook.com/v2.2/"+famax_global_options.fanPageId+"/tagged?limit="+((famax_global_options.maxResults<10)?10:famax_global_options.maxResults)+"&access_token="+famax_global_options.accessToken+"&fields=type,message,object_id,picture,name,description,link,from,comments.limit(1).summary(true),likes.limit(1).summary(true),shares";
		} else {
			apiUrl = nextPageApiUrl;
			loadMoreFlag = true;
		}
		
		//console.log('getPageFeeds apiUrl-'+apiUrl);
		
		$.ajax({
			url: apiUrl,
			type: "GET",
			async: true,
			cache: true,
			dataType: 'jsonp',
			success: function(response) { insertPageFeeds(response,true,loadMoreFlag,$famaxContainer);},
			error: function(errorResponse) {  alert(errorResponse); },
			beforeSend: setHeader
		});
	},
	

	//get user details from Facebook
	getUserDetails = function (userIdArray,$famaxContainer,metric) {
		//console.log('inside getPlaylistVideos');
		//var pageTokenUrl = "";
		var famax_global_options = $famaxContainer.data('famax_global_options');
		
		if(null==userIdArray || userIdArray.length==0) {
			return;
		}
		
		apiUrl = "https://graph.facebook.com/v2.2/?ids="+userIdArray+"&access_token="+famax_global_options.accessToken+"&fields=id,picture";
		//console.log('getVideoDetails apiUrl-'+apiUrl);
		//console.log('videoIdArray -'+videoIdArray.length);
		
		
		$.ajax({
			url: apiUrl,
			type: "GET",
			async: true,
			cache: true,
			dataType: 'jsonp',
			success: function(response) { insertUserDetails(response,userIdArray,$famaxContainer,metric);},
			error: function(errorResponse) {  alert(errorResponse); },
			beforeSend: setHeader
		});
	},
	

	//get comment feeds from Facebook
	getCommentFeeds = function (itemId,$famaxContainer,nextPageApiUrl) {
		//console.log('inside getPlaylistVideos');
		//var pageTokenUrl = "";
		var loadMoreFlag = false;
		
		var famax_global_options = $famaxContainer.data('famax_global_options');
		if(null==famax_global_options.fanPageId) {
			return;
		}
		
		if(null==nextPageApiUrl) {
			apiUrl = "https://graph.facebook.com/v2.2/"+itemId+"/comments?access_token="+famax_global_options.accessToken+"&limit="+famax_global_options.maxComments;
		} else {
			apiUrl = nextPageApiUrl;
			loadMoreFlag = true;
		}
		
		//console.log('getCommentFeeds apiUrl-'+apiUrl);
		
		$.ajax({
			url: apiUrl,
			type: "GET",
			async: true,
			cache: true,
			dataType: 'jsonp',
			success: function(response) { insertCommentFeeds(response,itemId,loadMoreFlag,$famaxContainer);},
			error: function(errorResponse) {  alert(errorResponse); },
			beforeSend: setHeader
		});
	},	

	//get like feeds from Facebook
	getLikeFeeds = function (itemId,$famaxContainer,nextPageApiUrl) {
		//console.log('inside getPlaylistVideos');
		//var pageTokenUrl = "";
		var loadMoreFlag = false;
		
		var famax_global_options = $famaxContainer.data('famax_global_options');
		if(null==famax_global_options.fanPageId) {
			return;
		}
		
		if(null==nextPageApiUrl) {
			apiUrl = "https://graph.facebook.com/v2.2/"+itemId+"/likes?access_token="+famax_global_options.accessToken+"&limit="+famax_global_options.maxComments;
		} else {
			apiUrl = nextPageApiUrl;
			loadMoreFlag = true;
		}
		
		//console.log('getCommentFeeds apiUrl-'+apiUrl);
		
		$.ajax({
			url: apiUrl,
			type: "GET",
			async: true,
			cache: true,
			dataType: 'jsonp',
			success: function(response) { insertLikeFeeds(response,itemId,loadMoreFlag,$famaxContainer);},
			error: function(errorResponse) {  alert(errorResponse); },
			beforeSend: setHeader
		});
	},	

	
	
	/* Groups will be added in 5.0
	//get group feeds from Facebook
	getGroupFeeds = function (action,object,$famaxContainer,nextPageApiUrl) {
		//console.log('inside getPlaylistVideos');
		//var pageTokenUrl = "";
		var loadMoreFlag = false;
		
		var famax_global_options = $famaxContainer.data('famax_global_options');
		if(null==famax_global_options.fanPageId) {
			return;
		}
		
		if(null==nextPageApiUrl) {
			apiUrl = "https://graph.facebook.com/v2.2/"+object+"/"+action+"?limit="+famax_global_options.maxResults+"&access_token="+famax_global_options.accessToken+"&fields=type,message,object_id,picture,name,description,link,from";
		} else {
			apiUrl = nextPageApiUrl;
			loadMoreFlag = true;
		}
		
		//console.log('getPageFeeds apiUrl-'+apiUrl);
		
		$.ajax({
			url: apiUrl,
			type: "GET",
			async: true,
			cache: true,
			dataType: 'jsonp',
			success: function(response) { insertPageFeeds(response,action,loadMoreFlag,$famaxContainer);},
			error: function(errorResponse) {  alert(errorResponse); },
			beforeSend: setHeader
		});
	},*/
	
	//get Image attachments
	getAttachments = function (postIdArray,$famaxContainer) {
		//console.log('inside getPlaylistVideos');
		//var pageTokenUrl = "";
		
		var famax_global_options = $famaxContainer.data('famax_global_options');
		if(null==famax_global_options.fanPageId) {
			return;
		}
		
		if(null==postIdArray || postIdArray.length==0) {
			return;
		}
		
		apiUrl = "https://graph.facebook.com/v2.2/?ids="+postIdArray+"&access_token="+famax_global_options.accessToken+"&fields=id,attachments,type,object_id,picture";
		//console.log('getAttachments apiUrl-'+apiUrl);
		
		$.ajax({
			url: apiUrl,
			type: "GET",
			async: true,
			cache: true,
			dataType: 'jsonp',
			success: function(response) { insertAttachments(response,postIdArray,$famaxContainer);},
			error: function(errorResponse) {  alert(errorResponse); },
			beforeSend: setHeader
		});
	},	

	//get Album Cover Photos
	getAlbumCoverPhotos = function (coverPhotoIdArray,$famaxContainer) {
		//console.log('inside getPlaylistVideos');
		//var pageTokenUrl = "";
		
		var famax_global_options = $famaxContainer.data('famax_global_options');
		if(null==famax_global_options.fanPageId) {
			return;
		}
		
		if(null==coverPhotoIdArray || coverPhotoIdArray.length==0) {
			return;
		}
		
		apiUrl = "https://graph.facebook.com/v2.2/?ids="+coverPhotoIdArray+"&access_token="+famax_global_options.accessToken+"&fields=id,images";
		//console.log('getAlbumCoverPhotos apiUrl-'+apiUrl);
		
		$.ajax({
			url: apiUrl,
			type: "GET",
			async: true,
			cache: true,
			dataType: 'jsonp',
			success: function(response) { insertAlbumCoverPhotos(response,coverPhotoIdArray,$famaxContainer);},
			error: function(errorResponse) {  alert(errorResponse); },
			beforeSend: setHeader
		});
	},	
	
	
	//get Video Details
	getVideoDetails = function (videoIdArray,$famaxContainer) {
		//console.log('inside getPlaylistVideos');
		//var pageTokenUrl = "";
		
		var famax_global_options = $famaxContainer.data('famax_global_options');
		if(null==famax_global_options.fanPageId) {
			return;
		}
		
		if(null==videoIdArray || videoIdArray.length==0) {
			return;
		}
		
		apiUrl = "https://graph.facebook.com/v2.2/?ids="+videoIdArray+"&access_token="+famax_global_options.accessToken+"&fields=id,length,format";
		//console.log('getVideoDetails apiUrl-'+apiUrl);
		//console.log('videoIdArray -'+videoIdArray.length);
		
		
		$.ajax({
			url: apiUrl,
			type: "GET",
			async: true,
			cache: true,
			dataType: 'jsonp',
			success: function(response) { insertVideoDetails(response,videoIdArray,$famaxContainer);},
			error: function(errorResponse) {  alert(errorResponse); },
			beforeSend: setHeader
		});
	},	
	
	//get photos from album
	getAlbumPhotos = function (albumId,$famaxContainer,nextPageApiUrl) {
		//console.log('inside getPlaylistVideos');
		//var pageTokenUrl = "";
		var loadMoreFlag = false;
		
		var famax_global_options = $famaxContainer.data('famax_global_options');
		
		if(null==nextPageApiUrl) {
			apiUrl = "https://graph.facebook.com/v2.2/"+albumId+"/photos?limit="+famax_global_options.maxResults+"&access_token="+famax_global_options.accessToken+"&fields=id,images,link,name,picture,source,comments.limit(1).summary(true),likes.limit(1).summary(true),shares";
		} else {
			apiUrl = nextPageApiUrl;
			loadMoreFlag = true;
		}
		
		//console.log('getPageFeeds apiUrl-'+apiUrl);
		
		$.ajax({
			url: apiUrl,
			type: "GET",
			async: true,
			cache: true,
			dataType: 'jsonp',
			success: function(response) { insertPhotoFeeds(response,loadMoreFlag,$famaxContainer);},
			error: function(errorResponse) {  alert(errorResponse); },
			beforeSend: setHeader
		});
	},
	
	
	//get videos of a Fan Page
	getPageVideos = function ($famaxContainer,nextPageApiUrl) {
		//console.log('inside getPlaylistVideos');
		//var pageTokenUrl = "";
		var loadMoreFlag = false;
		
		var famax_global_options = $famaxContainer.data('famax_global_options');
		
		if(null==nextPageApiUrl) {
			apiUrl = "https://graph.facebook.com/v2.2/"+famax_global_options.fanPageId+"/videos/uploaded?limit="+famax_global_options.maxResults+"&access_token="+famax_global_options.accessToken+"&fields=id,description,embed_html,name,picture,length,source,status,link,thumbnails,format,comments.limit(1).summary(true),likes.limit(1).summary(true),shares";
		} else {
			apiUrl = nextPageApiUrl;
			loadMoreFlag = true;
		}
		
		//console.log('getPageFeeds apiUrl-'+apiUrl);
		
		$.ajax({
			url: apiUrl,
			type: "GET",
			async: true,
			cache: true,
			dataType: 'jsonp',
			success: function(response) { insertVideoFeeds(response,loadMoreFlag,$famaxContainer);},
			error: function(errorResponse) {  alert(errorResponse); },
			beforeSend: setHeader
		});
	},
	
	//get albums of a Fan page
	getPageAlbums = function ($famaxContainer,nextPageApiUrl) {
		//console.log('inside getPlaylistVideos');
		//var pageTokenUrl = "";
		var loadMoreFlag = false;
		
		var famax_global_options = $famaxContainer.data('famax_global_options');
		
		if(null==nextPageApiUrl) {
			apiUrl = "https://graph.facebook.com/v2.2/"+famax_global_options.fanPageId+"/albums?limit="+famax_global_options.maxResults+"&access_token="+famax_global_options.accessToken+"&fields=id,name,cover_photo,count,link";
		} else {
			apiUrl = nextPageApiUrl;
			loadMoreFlag = true;
		}
		
		//console.log('getPageFeeds apiUrl-'+apiUrl);
		
		$.ajax({
			url: apiUrl,
			type: "GET",
			async: true,
			cache: true,
			dataType: 'jsonp',
			success: function(response) { insertAlbumFeeds(response,loadMoreFlag,$famaxContainer);},
			error: function(errorResponse) {  alert(errorResponse); },
			beforeSend: setHeader
		});
	},
	

	
	//initialize famax - add necessary HTML code
	initFamax = function($famaxContainer) {
	
		var famax_global_options = $famaxContainer.data('famax_global_options');
		
		//header
		$famaxContainer.append('<div id="famax-header"><div id="famax-header-wrapper"><div id="famax-stat-holder"></div></div></div>');
		
		//tabs
		$famaxContainer.append('<div id="famax-tabs"></div>');
				
		//select
		$famaxContainer.append('<div id="famax-select-box"><select id="famax-select"></select></div>');
	
		//showing album xxxx
		$famaxContainer.append('<div id="famax-showing-title"></div>');

		//list
		$famaxContainer.append('<div id="famax-video-list-div"><ul id="tiles"></ul></div>');
		
		//load more
		$famaxContainer.append('<button id="famax-load-more-div">LOAD MORE</button>');
		
		//4.0 comment box
		$famaxContainer.append('<div id="famax-comment-block" class="white-popup mfp-hide"><div id="famax-encloser-comment-wrapper" class="famax-encloser-comment-wrapper-popup"><div id="famax-encloser-comment-holder" class="famax-encloser-comment-holder-popup"><div class="famax-video-comment"><textarea class="famax-comment-textbox" placeholder="Share your Thoughts..."></textarea><button class="famax-add-comment-button"><i class="fa fa-facebook-square fa-lg"></i>&nbsp; Login</button></div><div id="famax-encloser-comments"></div><div class="famax-encloser-button famax-more-comments-button">Load More Comments</div></div></div></div>');
		//<span class="famax-facebook-f">f</span>
		
		//4.0 like box
		$famaxContainer.append('<div id="famax-like-block" class="white-popup mfp-hide"><div id="famax-encloser-like-wrapper" class="famax-encloser-like-wrapper-popup"><div id="famax-encloser-like-holder" class="famax-encloser-like-holder-popup"><div class="famax-video-like"><button class="famax-add-like-button"><i class="fa fa-facebook-square fa-lg"></i>&nbsp; Login</button></div><div id="famax-encloser-likes"></div><div class="famax-encloser-button famax-more-likes-button">Load More Likes</div></div></div></div>');
		
		$famaxLoadMoreDiv = $famaxContainer.find('#famax-load-more-div');
		
		$famaxLoadMoreDiv.click(function(){
			loadMorePosts($famaxContainer);
		});
	
		$famaxContainer.find('#famax-tabs').on('click','.famax-tab',function(){
			displayTabFeeds(this.id,$famaxContainer);
		});

		//4.0 added - show photos of albums from Albums Tab
		if(famax_global_options.onClickAction=="popup") {
			$famaxContainer.find('#famax-video-list-div').on('click','li[id^="photos_"]',function(){
				$famaxContainer.data('famax_current_playlist_id',this.id);
				var albumName = $(this).find('.famax-video-list-title').text();
				$famaxContainer.data('famax_current_playlist_name',albumName);
				displayTabFeeds(this.id,$famaxContainer);
			});
		}
		
		//4.0 added - Show comments
		$famaxContainer.find('#famax-video-list-div').on('click','.famax-show-comments',function(){
			itemId = $(this).parents('li').first().attr('id');
			displayComments(itemId,$famaxContainer);
		});
		
		//4.0 added - Show Likes
		$famaxContainer.find('#famax-video-list-div').on('click','.famax-show-likes',function(){
			itemId = $(this).parents('li').first().attr('id');
			displayLikes(itemId,$famaxContainer);
		});
		
		//4.0 added - load more comments
		$famaxContainer.on('click','.famax-more-comments-button',function(){
			loadMoreComments($famaxContainer);
		});
		
		//4.0 added - load more likes
		$famaxContainer.on('click','.famax-more-likes-button',function(){
			loadMoreLikes($famaxContainer);
		});
		
		//4.0 add comments
		$famaxContainer.on('click','.famax-add-comment-button',function(){
			handleComments(this,$famaxContainer);			
		});

		//4.0 add likes
		$famaxContainer.on('click','.famax-add-like-button',function(){
			handleLikes(this,$famaxContainer);			
		});

		
		$famaxContainer.find('#famax-select').change(function() {
			var tabId = $(this).find(":selected").val();
			displayTabFeeds(tabId,$famaxContainer);
		});
		
		if(famax_global_options.alwaysUseDropdown) {
			//console.log('options.alwaysUseDropdown-'+options.alwaysUseDropdown);	
			$famaxContainer.find('#famax-select-box').css('display','block');
			//$famaxContainer.find('#famax-select-box').show();
			$famaxContainer.find('#famax-tabs').hide();
		}		
	
	},
	
	displayComments = function(itemId,$famaxContainer) {
		$famaxContainer.find("#famax-encloser-comments").empty().append("<br><br><br><br><br>Loading...<br><br><br><br><br>");
		getCommentFeeds(itemId,$famaxContainer,null);
		$.magnificPopup.open({
			items: {
				src: '#famax-comment-block',
				type: 'inline'
			},
			prependTo: $famaxContainer.get()
		});			
	},
	
	displayLikes = function(itemId,$famaxContainer) {
		$famaxContainer.find("#famax-encloser-likes").empty().append("<br><br><br><br><br>Loading...<br><br><br><br><br>");
		getLikeFeeds(itemId,$famaxContainer,null);
		$.magnificPopup.open({
			items: {
				src: '#famax-like-block',
				type: 'inline'
			},
			prependTo: $famaxContainer.get()
		});			
	},
	
	//load more button functionality
	loadMorePosts = function($famaxContainer) {
		var $famaxLoadMoreDiv = $famaxContainer.find('#famax-load-more-div');
		$famaxLoadMoreDiv.text('LOADING...');
		$famaxLoadMoreDiv.addClass('famax-load-more-div-click');
		
		var nextPageApiUrl = $famaxLoadMoreDiv.data('nextpageapiurl');
		//console.log('load more clicked : nextPageToken-'+nextPageToken);
		if(null!=nextPageApiUrl && nextPageApiUrl!="undefined" && nextPageApiUrl!="") {
			var selectedTabId = $famaxContainer.find('.famax-tab-hover').attr('id');
			if(selectedTabId.indexOf('tagged')!=-1) {
				getPageTags($famaxContainer,nextPageApiUrl);
			} else if(selectedTabId.indexOf('posts')!=-1) {
				getPagePosts($famaxContainer,nextPageApiUrl);
			} else if(selectedTabId.indexOf('feed')!=-1) {
				//TODO: group feeds will come in 5.0
				//getGroupFeeds("feed",null,$famaxContainer,nextPageApiUrl);
			} else if(selectedTabId.indexOf('photos')!=-1) {
				getAlbumPhotos(null,$famaxContainer,nextPageApiUrl);
			} else if(selectedTabId.indexOf('videos')!=-1) {
				getPageVideos($famaxContainer,nextPageApiUrl);
			} else if(selectedTabId.indexOf('albums')!=-1) {
				getPageAlbums($famaxContainer,nextPageApiUrl);
			}
			
		} else {
			$famaxLoadMoreDiv.removeClass('famax-load-more-div-click').text('ALL DONE');
		}
	},


	//load more comments functionality
	loadMoreComments = function($famaxContainer) {
		var $famaxLoadMoreCommentsDiv = $famaxContainer.find('.famax-encloser-button.famax-more-comments-button');
		$famaxLoadMoreCommentsDiv.text('Loading...');
		$famaxLoadMoreCommentsDiv.addClass('famax-load-more-comments-clicked');
		var nextPageApiUrl = $famaxLoadMoreCommentsDiv.data('nextpageapiurl');
		//console.log('load more clicked : nextPageToken-'+nextPageToken);
		if(null!=nextPageApiUrl && nextPageApiUrl!="undefined" && nextPageApiUrl!="") {
			getCommentFeeds(null,$famaxContainer,nextPageApiUrl);
		} else {
			$famaxLoadMoreCommentsDiv.text('All Done');
		}
	},
	
	resetLoadMoreComments = function($famaxContainer) {
		var $famaxLoadMoreCommentsDiv = $famaxContainer.find(".famax-encloser-button.famax-more-comments-button");
		$famaxLoadMoreCommentsDiv.removeClass('famax-load-more-comments-clicked');
		$famaxLoadMoreCommentsDiv.text('Load More Comments');
	},	
	
	//load more button likes functionality
	loadMoreLikes = function($famaxContainer) {
		var $famaxLoadMoreLikesDiv = $famaxContainer.find('.famax-encloser-button.famax-more-likes-button');
		$famaxLoadMoreLikesDiv.text('Loading...');
		$famaxLoadMoreLikesDiv.addClass('famax-load-more-likes-clicked');
		var nextPageApiUrl = $famaxLoadMoreLikesDiv.data('nextpageapiurl');
		if(null!=nextPageApiUrl && nextPageApiUrl!="undefined" && nextPageApiUrl!="") {
			getLikeFeeds(null,$famaxContainer,nextPageApiUrl);
		} else {
			$famaxLoadMoreLikesDiv.text('All Done');
		}
	},
	
	resetLoadMoreLikes = function($famaxContainer) {
		var $famaxLoadMoreLikesDiv = $famaxContainer.find(".famax-encloser-button.famax-more-likes-button");
		$famaxLoadMoreLikesDiv.removeClass('famax-load-more-likes-clicked');
		$famaxLoadMoreLikesDiv.text('Load More Likes');
	},	
	
	//get Fan Page details
	getPageDetails = function ($famaxContainer) {
		//console.log('inside getChannelDetails');
		var famax_global_options = $famaxContainer.data('famax_global_options');
		if(null==famax_global_options.fanPageId) {
			return;
		}
		
		apiUrl = "https://graph.facebook.com/v2.2/"+famax_global_options.fanPageId+"?access_token="+famax_global_options.accessToken;
		//console.log('apiUrl-'+apiUrl);
		//showLoader();
		
		$.ajax({
			url: apiUrl,
			type: "GET",
			async: true,
			cache: true,
			dataType: 'jsonp',
			success: function(response) { displayPageHeader(response,$famaxContainer);},
			error: function(html) { alert(html); },
			beforeSend: setHeader
		});
	},
	
	/*TODO: Groups will be added in 4.0
	//get Group details
	getGroupDetails = function ($famaxContainer) {
		console.log('inside getGroupDetails');
		var famax_global_options = $famaxContainer.data('famax_global_options');
		if(null==famax_global_options.fanPageId) {
			return;
		}
		
		apiUrl = "https://graph.facebook.com/v2.2/"+famax_global_options.fanPageId+"?access_token="+famax_global_options.accessToken;
		//console.log('apiUrl-'+apiUrl);
		//showLoader();
		
		$.ajax({
			url: apiUrl,
			type: "GET",
			async: true,
			cache: true,
			dataType: 'jsonp',
			success: function(response) { displayGroupHeader(response,$famaxContainer);},
			error: function(html) { alert(html); },
			beforeSend: setHeader
		});
	},*/
	
	/* not needed as of now
	//get icon for page
	getPageIcon = function ($famaxContainer) {
		
		var famax_global_options = $famaxContainer.data('famax_global_options');
		if(null==famax_global_options.fanPageId) {
			return;
		}
		
		apiUrl = "https://graph.facebook.com/v2.2/"+famax_global_options.fanPageId+"/picture?redirect=false";

		$.ajax({
			url: apiUrl,
			type: "GET",
			async: true,
			cache: true,
			dataType: 'jsonp',
			success: function(response) { 
				//console.log(response);
				$famaxContainer.find('.famax-channel-icon img').attr('src',response.data.url);
			},
			error: function(html) { alert(html); },
			beforeSend: setHeader
		});
	},*/

	setHeader = function (xhr) {
		if(xhr && xhr.overrideMimeType) {
			xhr.overrideMimeType("application/j-son;charset=UTF-8");
		}
	},
	
	//utility function to displaye view counts
	convertViewCount = function(videoViewCount) {
		videoViewCount = parseInt(videoViewCount);
		if(videoViewCount<1000) {
			
		} else if (videoViewCount<1000000) {
			videoViewCount = Math.round(videoViewCount/1000) + "K";
			
		} else if (videoViewCount<1000000000) {
			videoViewCount = (videoViewCount/1000000).toFixed(1) + "M";
		} else {
			videoViewCount = (videoViewCount/1000000000).toFixed(1) + "B";
		}
		
		return videoViewCount;
		
	},
	
	handleComments = function(thisElement,$famaxContainer) {
		
		$(thisElement).text('posting..').attr('disabled','disabled');
		var famax_global_options = $famaxContainer.data('famax_global_options');

		var famaxUserAccessToken = famaxLoggedInUser.famaxUserAccessToken;
		if(null!=famaxUserAccessToken && famaxUserAccessToken!="") {
			//Token available
			//getLoggedInUserDetails($famaxContainer,youmaxAccessToken,youmax_global_options.apiKey);
			
			var comment = $famaxContainer.find('.famax-comment-textbox').val();
			if(null==comment||comment.trim()=="") {
				alert("Please enter a valid comment..");
				$famaxContainer.find('.famax-add-comment-button').removeAttr('disabled').text('POST');
				return;
			} else {
				comment=comment.trim();
			}
			
			var postId = $famaxContainer.find('.famax-encloser-button.famax-more-comments-button').data('postid');			
			famaxPostComment($famaxContainer,postId,famaxUserAccessToken,comment);
			
		} else {
			//Initiate Login Workflow
			//console.log('Initiate Login Workflow');
			famaxLoginToFacebook();
		
		}
	
	},
	
	handleLikes = function(thisElement,$famaxContainer) {
		
		$(thisElement).text('processing..').attr('disabled','disabled');
		var famax_global_options = $famaxContainer.data('famax_global_options');

		var famaxUserAccessToken = famaxLoggedInUser.famaxUserAccessToken;
		if(null!=famaxUserAccessToken && famaxUserAccessToken!="") {
			//Token available
			var postId = $famaxContainer.find('.famax-encloser-button.famax-more-likes-button').data('postid');			
			famaxPostLike($famaxContainer,postId,famaxUserAccessToken);
			
		} else {
			//Initiate Login Workflow
			//console.log('Initiate Login Workflow');
			famaxLoginToFacebook();
		
		}
	
	},
	
	famaxLoginToFacebook = function() {
	
		FB.login(function(response) {
			//console.log('Fb login');
			//console.log(response);
			if (response.status === 'connected') {
				// Logged into your app and Facebook.
				famaxLoggedInUser.famaxUserAccessToken = response.authResponse.accessToken;
				//console.log("Temporary Access Token : "+famaxLoggedInUser.famaxUserAccessToken);
				saveUserName();
				$('.famax-add-comment-button').removeAttr('disabled').html('<i class="fa fa-facebook-square fa-lg"></i>&nbsp; POST');
				$('.famax-add-like-button').removeAttr('disabled').html('<i class="fa fa-facebook-square fa-lg"></i>&nbsp; LIKE');
			} else if (response.status === 'not_authorized') {
				// The person is logged into Facebook, but not your app.
				//console.log('Please log into this app');
			} else {
				// The person is not logged into Facebook, so we're not sure if
				// they are logged into this app or not.
				//console.log('Please log into Facebook');
			}
		}, {scope: 'publish_actions'});

	},
	
	saveUserName = function() {
		//console.log('Welcome!  Fetching your information.... ');
		FB.api('/me', function(response) {
			//console.log('Got user details ');
			//console.log(response);
			famaxLoggedInUser.name = response.name;
			famaxLoggedInUser.id = response.id;
		});
		FB.api('/me/picture', function(response) {
			//console.log('Got user photo ');
			//console.log(response);
			famaxLoggedInUser.picture = response.data.url;
			//$('.'+famaxLoggedInUser.id).css('background-image','url("'+famaxLoggedInUser.picture+'"');
		});
	},

	
	famaxPostComment = function($famaxContainer,postId,famaxUserAccessToken,comment) {
		
		var famax_global_options = $famaxContainer.data('famax_global_options');
		//postId="182162001806727_900228793333374";
		var postCommentURL = "https://graph.facebook.com/v2.2/"+postId+"/comments";
		
		//console.log();
		$.ajax({
			url: postCommentURL,
			type: 'post',
			crossDomain: true,
			data: { message:comment, access_token:famaxUserAccessToken },
			//contentType: "application/atom+xml",
			beforeSend: function(xhr){
				//xhr.setRequestHeader('X-GData-Key','key='+apiKey);
				//xhr.setRequestHeader('Authorization','Bearer '+youmaxAccessToken);
				//xhr.setRequestHeader('GData-Version','2');
				//xhr.setRequestHeader('Host','gdata.youtube.com');
				xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
				//xhr.setRequestHeader('Content-Length',xmlComment.length);
			},
			success: function (data, status) {				
				
				//var famax_global_options = $famaxContainer.data('famax_global_options');			
				
				$famaxContainer.find('#famax-encloser-comments').prepend('<div class="famax-video-comment '+famaxLoggedInUser.id+'"><div class="famax-comment-from"><div class="famax-comment-from-img" style="background-image:url(\''+famaxLoggedInUser.picture+'\');"></div><div class="famax-comment-from-name">'+famaxLoggedInUser.name+'</div><div class="famax-published">just now</div></div><div class="famax-comment"><span class="famax-comment-content">'+comment+'</span><div></div>');
			
				//getUserDetails(new Array(fromId),$famaxContainer,'comment');
				
				$famaxContainer.find('.famax-add-comment-button').removeAttr('disabled').html('<i class="fa fa-facebook-square fa-lg"></i>&nbsp; POST');
				$famaxContainer.find('.famax-comment-textbox').val('');
				
				//console.log("Success!!");
				//console.log(data);
				//console.log(status);
			},
			error: function (xhr, desc, err) {
				alert("Could not Post - "+err);
				//console.log(xhr);
				//console.log("Desc: " + desc + "\nErr:" + err);
			}
		});
	
	},
	

	famaxPostLike = function($famaxContainer,postId,famaxUserAccessToken) {
		
		var famax_global_options = $famaxContainer.data('famax_global_options');
		var postCommentURL = "https://graph.facebook.com/v2.2/"+postId+"/likes";
		
		//console.log();
		$.ajax({
			url: postCommentURL,
			type: 'post',
			crossDomain: true,
			data: { access_token:famaxUserAccessToken },
			//contentType: "application/atom+xml",
			beforeSend: function(xhr){
				//xhr.setRequestHeader('X-GData-Key','key='+apiKey);
				//xhr.setRequestHeader('Authorization','Bearer '+youmaxAccessToken);
				//xhr.setRequestHeader('GData-Version','2');
				//xhr.setRequestHeader('Host','gdata.youtube.com');
				xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
				//xhr.setRequestHeader('Content-Length',xmlComment.length);
			},
			success: function (data, status) {				
				
				//var famax_global_options = $famaxContainer.data('famax_global_options');			

				$famaxContainer.find('#famax-encloser-likes').prepend('<div class="famax-video-like '+famaxLoggedInUser.id+'"><div class="famax-like-from"><div class="famax-like-from-img" style="background-image:url(\''+famaxLoggedInUser.picture+'\');"></div><div class="famax-like-from-name">'+famaxLoggedInUser.name+'</div></div></div>');

				
				//getUserDetails(new Array(fromId),$famaxContainer,'comment');
				
				//$famaxContainer.find('.famax-add-like-button').attr('disabled','disabled').html('<i class="fa fa-check"></i>&nbsp;Liked');
				$famaxContainer.find('.famax-add-like-button').removeAttr('disabled').html('<i class="fa fa-facebook-square fa-lg"></i>&nbsp; LIKE');
				
				//console.log("Success!!");
				//console.log(data);
				//console.log(status);
			},
			error: function (xhr, desc, err) {
				alert("Could not add Like - "+err);
				$famaxContainer.find('.famax-add-like-button').removeAttr('disabled').html('<i class="fa fa-facebook-square fa-lg"></i>&nbsp; LIKE');
				//console.log(xhr);
				//console.log("Desc: " + desc + "\nErr:" + err);
			}
		});
	
	},
	

	
	//display page header
	displayPageHeader = function(response,$famaxContainer) {
		//console.log(response);
		
		var famax_global_options = $famaxContainer.data('famax_global_options');
		var pageData = response;
		
		//alert(videoArray.length);
		pageId = pageData.id;
		pageTitle = pageData.name;
		//pageImage = ;
		pageLikes = pageData.likes;
		pageTalkingAbout = pageData.talking_about_count;
		if(null!=pageData.cover) {
			pageBackgroundImage = pageData.cover.source;
		} else {
			pageBackgroundImage="";
		}
		//console.log('pageBackgroundImage-'+pageBackgroundImage);
		
		
		$famaxContainer.find('#famax-header').css('background-image',"url("+pageBackgroundImage+")");
		
		$famaxContainer.find('#famax-header-wrapper').append('<a href="https://www.facebook.com/'+pageId+'" target="_blank"><div class="famax-channel-icon"><img src="https://graph.facebook.com/v2.2/'+pageId+'/picture?type=normal&access_token='+famax_global_options.accessToken+'"/></div><div class="famax-channel-title">'+pageTitle+'</div></a>');
		
		$famaxContainer.find('#famax-header-wrapper').append('&nbsp;&nbsp;&nbsp;&nbsp;<div class="famax-subscribe"><iframe src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.facebook.com%2F'+pageId+'&amp;layout=button_count&amp;show_faces=true&amp;action=like&amp;colorscheme=light&amp" style="overflow:hidden;width:100%;height:80px;" scrolling="no" frameborder="0" allowTransparency="true"></iframe></div>');
		 
		$famaxContainer.find('#famax-stat-holder').append('<div class="famax-stat"><span class="famax-stat-count">'+convertViewCount(pageTalkingAbout)+'</span><br/> TALKING </div><div class="famax-stat"><span class="famax-stat-count">'+convertViewCount(pageLikes)+'</span><br/>LIKES</div>');		
		
		
		$famaxContainer.find('#famax-tabs').prepend('<span id="videos_'+pageId+'" class="famax-tab" >Videos</span>');
		$famaxContainer.find('#famax-select').prepend('<option value="videos_'+pageId+'" class="famax-option-highlight" >Videos</span>');
		
		$famaxContainer.find('#famax-tabs').prepend('<span id="albums_'+pageId+'" class="famax-tab" >Albums</span>');
		$famaxContainer.find('#famax-select').prepend('<option value="albums_'+pageId+'" class="famax-option-highlight" >Albums</span>');
		
		$famaxContainer.find('#famax-tabs').prepend('<span id="tagged_'+pageId+'" class="famax-tab" >Tags</span>');
		$famaxContainer.find('#famax-select').prepend('<option value="tagged_'+pageId+'" class="famax-option-highlight" >Tags</span>');

		$famaxContainer.find('#famax-tabs').prepend('<span id="posts_'+pageId+'" class="famax-tab" >Posts</span>');
		$famaxContainer.find('#famax-select').prepend('<option value="posts_'+pageId+'" class="famax-option-highlight" >Posts</span>');
		
		if(famax_global_options.selectedTab.charAt(0)=='p') {
			$('#posts_'+pageId).click();
		} else if(famax_global_options.selectedTab.charAt(0)=='t') {
			$('#tagged_'+pageId).click();
		} else if(famax_global_options.selectedTab.charAt(0)=='l') {
			$('#albums_'+pageId).click();
		} else if(famax_global_options.selectedTab.charAt(0)=='v') {
			$('#videos_'+pageId).click();
		}
		
		famax_global_options.fanPageId = pageId;
		famax_global_options.fanPageTitle = pageTitle;
		
	},
	
	/*TODO: Groups in Famax 5.0
	//display group header
	displayGroupHeader = function(response,$famaxContainer) {
		//console.log(response);
		
		var famax_global_options = $famaxContainer.data('famax_global_options');
		var groupData = response;
		
		//alert(videoArray.length);
		pageId = groupData.id;
		pageTitle = groupData.name;

		if(null!=groupData.cover) {
			pageBackgroundImage = groupData.cover.source;
		} else {
			pageBackgroundImage="";
		}
		//console.log('pageBackgroundImage-'+pageBackgroundImage);
		
		
		$famaxContainer.find('#famax-header').css('background-image',"url("+pageBackgroundImage+")");
		
		$famaxContainer.find('#famax-header-wrapper').append('<a href="https://www.facebook.com/'+pageId+'" target="_blank"><div class="famax-channel-icon"><img src="https://graph.facebook.com/v2.2/'+pageId+'/picture?type=normal&access_token='+famax_global_options.accessToken+'"/></div><div class="famax-channel-title">'+pageTitle+'</div></a>');
		
		//$famaxContainer.find('#famax-header-wrapper').append('&nbsp;&nbsp;&nbsp;&nbsp;<div class="famax-subscribe"><iframe src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.facebook.com%2F'+pageId+'&amp;layout=button_count&amp;show_faces=true&amp;action=like&amp;colorscheme=light&amp" style="overflow:hidden;width:100%;height:80px;" scrolling="no" frameborder="0" allowTransparency="true"></iframe></div>');
		 
		//$famaxContainer.find('#famax-stat-holder').append('<div class="famax-stat"><span class="famax-stat-count">'+convertViewCount(pageTalkingAbout)+'</span><br/> TALKING </div><div class="famax-stat"><span class="famax-stat-count">'+convertViewCount(pageLikes)+'</span><br/>LIKES</div>');		
		
		//Video Tab in the next version
		//$famaxContainer.find('#famax-tabs').prepend('<span id="videos_'+pageId+'" class="famax-tab" >Videos</span>');
		//$famaxContainer.find('#famax-select').prepend('<option value="videos_'+pageId+'" class="famax-option-highlight" >Videos</span>');
		

		$famaxContainer.find('#famax-tabs').prepend('<span id="feed_'+pageId+'" class="famax-tab" >Feed</span>');
		$famaxContainer.find('#famax-select').prepend('<option value="feed_'+pageId+'" class="famax-option-highlight" >Feed</span>');
		
		if(famax_global_options.selectedTab.charAt(0)=='p') {
			$('#feed_'+pageId).click();
		}

		
		//famax_global_options.fanPageId = pageId;
		
	},
	*/
		
	//insert HTML thumbnails into famax grid
	insertPageFeeds = function(response,showFromUser,loadMoreFlag,$famaxContainer) {
		//console.log(response);
		
		//regenerate acceess Token if expired
		if(response.error!=null) {
			if(response.error.code==190 && response.error.message.indexOf('expired')!=-1) {
				alert('Session expired. Please reload the page.');
			}
		}
		
		var famax_global_options = $famaxContainer.data('famax_global_options');
		var postIdArray = [];
		var videoPostIdArray = [];
		var videoIdArray = [];
		//var videoIdArray = [];
		var $famaxContainerList = $famaxContainer.find('ul');
		var likes_shares_comments_string = '';
		var linkStringStart = '';
		var linkStringEnd = '';
		
		//remove all posts if more than maxItemsDisplayed limit
		if($famaxContainerList.find('li').length>famax_global_options.maxItemsDisplayed) {
			showLoader($famaxContainer);
		}

		var feedArray = response.data;
		
		var nextPageApiUrl=null;
		if(null!=response.paging) {
			nextPageApiUrl = response.paging.next;
		}
		
		var $famaxLoadMoreDiv = $famaxContainer.find('#famax-load-more-div');
		if(null!=nextPageApiUrl && nextPageApiUrl!="undefined" && nextPageApiUrl!="") {
			$famaxLoadMoreDiv.data('nextpageapiurl',nextPageApiUrl);
		} else {
			$famaxLoadMoreDiv.data('nextpageapiurl','');
		}

		//alert(videoArray.length);
		for(var i=0; i<feedArray.length; i++) {
		
			postType = feedArray[i].type;
			postId = feedArray[i].id;
			message = getProcessedMessage(feedArray[i].message);
			link = feedArray[i].link;
			
			if($famaxContainerList.find('#'+postId).length>0) {
				continue;
			}
			
			if(famax_global_options.onClickAction=="link") {
				linkStringStart = '<a class="famax-onclick-link" target="_blank" href="'+link+'">';
				linkStringEnd = '</a>';
			} else {
				linkStringStart = '';
				linkStringEnd = '';
			}
		
			//From user ---------------------------------
			if(showFromUser) {
				fromId = feedArray[i].from.id;
				fromImg = 'https://graph.facebook.com/v2.2/'+fromId+'/picture?type=normal&access_token='+famax_global_options.accessToken;
				fromName = feedArray[i].from.name;
				fromString = '<div class="famax-from"><div class="famax-from-img" style="background-image:url(\''+fromImg+'\');"></div><div class="famax-from-name">'+fromName+'</div></div>';
			} else {
				fromString = '';
			}
			
			
			//message-----------------------------
			if(message=="") {
				if(null!=feedArray[i].attachments) {
					//TODO: this will never be found here - push this to insert attachments
					message = feedArray[i].attachments.data[0].title;
				}
				if(null==message||message=="") {
					message = feedArray[i].description;
				}
				if(null==message||message=="") {
					message = feedArray[i].name;
				}		
				if(null==message || message=="") {
					message = "via "+famax_global_options.fanPageTitle;
				}
			}
			
			//Metrics = like + comment --------------------------------
			if((showFromUser && !famax_global_options.displayMetricsForTags) || ((!showFromUser && !famax_global_options.displayMetricsForPosts))){
				//Showing Tags and display Metrics for Tags is false.. OR
				//Showing Posts and display Metrics for Posts is false..
				likes_shares_comments_string = '';
			} else {
			
				if(null!=feedArray[i].likes) {
					post_likes = feedArray[i].likes.summary.total_count;
				} else {
					post_likes = 0;
				}
				
				if(null!=feedArray[i].comments) {
					post_comments = feedArray[i].comments.summary.total_count;
				} else {
					post_comments = 0;
				}
				
				if(null!=feedArray[i].shares) {
					post_shares = feedArray[i].shares.count;
				} else {
					post_shares = 0;
				}
				
				likes_shares_comments_string = '<div class="famax-likes-shares-comments-string"><div class="famax-show-likes"><i class="fa fa-thumbs-up"></i><div class="famax-likes-count">'+convertViewCount(post_likes)+'</div></div><div class="famax-show-comments"><i class="fa fa-comment"></i><div class="famax-comments-count">'+convertViewCount(post_comments)+'</div></div></div>';
				//<div class="famax-show-shares"><i class="fa fa-share"></i><div class="famax-shares-count">'+convertViewCount(post_shares)+'</div></div>			
			}
			
			//post type--------------------------------------
			if(postType=="photo") {
				postIdArray.push(postId);
				objectId = feedArray[i].object_id;
				//Adding low def picture first
				//picture = extractPicture(feedArray[i]);
				picture = feedArray[i].picture;
				/*if(picture==null) {
					picture = 'https://graph.facebook.com/v2.2/'+objectId+'/picture?type=normal&width=500&access_token='+famax_global_options.accessToken;
				}*/
				$famaxContainerList.append('<li id="'+postId+'">'+fromString+linkStringStart+'<img class="mfp-image famax-gallery-item" href="'+picture+'" src="'+picture+'">'+linkStringEnd+'<p><span class="famax-video-list-title">'+message+'</span></p>'+likes_shares_comments_string+'<div class="famax-hover-icon famax-hover-icon-search"><i class="fa fa-search"></div></li>');
				//<span class="famax-video-list-views">'+getDateDiff(videoUploaded)+' ago</span>
			} else if(postType=="link") {
				postIdArray.push(postId);
				//Adding low def picture first
				//picture = extractPicture(feedArray[i]);
				picture = feedArray[i].picture;
				if(null==picture)picture=famax_global_options.imagesFolderPath+"/link.png";
				name = feedArray[i].name;
				if(null==name||name=="undefined")name="";
				description = feedArray[i].description;
				if(null==description)description="";
				link = feedArray[i].link;
				$famaxContainerList.append('<li id="'+postId+'">'+fromString+'<a class="famax-link-post" href="'+link+'" target="_blank"><img src="'+picture+'" href="'+picture+'" class="mfp-image"></a><p><span class="famax-link-title">'+name+'</span><span class="famax-link-description">'+description+'</span><span class="famax-video-list-title">'+message+'</span></p>'+likes_shares_comments_string+'<div class="famax-hover-icon famax-hover-icon-link"><i class="fa fa-link fa-lg"></i></div></li>');
				//<span class="famax-video-list-views">'+getDateDiff(videoUploaded)+' ago</span>
			}  else if(postType=="video") {
				objectId = feedArray[i].object_id;
				if(null!=objectId && objectId!="") {
					videoIdArray.push(objectId);
				} else {
					videoPostIdArray.push(postId);
				}
				picture = extractPicture(feedArray[i]);
				link = feedArray[i].link;
				$famaxContainerList.append('<li id="'+postId+'">'+fromString+linkStringStart+'<img data-lowresimage="'+feedArray[i].picture+'" id="'+objectId+'" class="mfp-iframe famax-gallery-item" href="'+link+'" src="'+picture+'">'+linkStringEnd+'<p><span class="famax-video-list-title">'+message+'</span></p>'+likes_shares_comments_string+'<div class="famax-hover-icon famax-hover-icon-play"><i class="fa fa-play"></div></li>');
				fixLongLink(link,postId);
				//<span class="famax-video-list-views">'+getDateDiff(videoUploaded)+' ago</span>
			} else if(postType=="status") {
				if(null!=message && message!="") {
					$famaxContainerList.append('<li id="'+postId+'">'+fromString+'<p><span class="famax-video-list-title">'+message+'</span></p>'+likes_shares_comments_string+'</li>');
				}
				//<span class="famax-video-list-views">'+getDateDiff(videoUploaded)+' ago</span>
			} else {
				//console.log('new type found -'+type);
			}

		}

		createGrid(loadMoreFlag,$famaxContainer,postIdArray,videoIdArray,videoPostIdArray);
		
		//getAttachments(postIdArray,$famaxContainer);
		//getVideoDetails(videoIdArray,$famaxContainer);
		
	},



	//insert video details
	insertAlbumCoverPhotos = function(response,coverPhotoIdArray,$famaxContainer) {
		//console.log('insertAlbumCoverPhotos');
		//console.log(response);
		
		//regenerate acceess Token if expired
		if(response.error!=null) {
			if(response.error.code==190 && response.error.message.indexOf('expired')!=-1) {
				alert('Session expired. Please reload the page.');
			}
		}

		
		var famax_global_options = $famaxContainer.data('famax_global_options');
		//var $famaxContainerList = $famaxContainer.find('ul');


		//alert(videoArray.length);
		for(var i=0; i<coverPhotoIdArray.length; i++) {
			
			photoId = coverPhotoIdArray[i];		
			
			postMainImage = $famaxContainer.find('#famax-video-list-div .'+photoId);	
			//console.log('postMainImage href-'+postMainImage.attr('href'));
			
			picture = extractAlbumImage(response[photoId]);
			//console.log('picture-'+picture);
			postMainImage.attr('src',picture);

		}
		//alert('done fixing..');
		
		/*famaxRefreshCount++;

		//Added to fix UI in Chrome after attachments are loaded
		var $famaxContainerList = $famaxContainer.find('ul');
		$famaxContainerList.imagesLoaded().always(function() {
			famaxRefreshCount--;
			if(famaxRefreshCount<=0) {
				$famaxContainerList.find('li').trigger('refreshWookmark');
			}			
		});*/

		window.clearTimeout(famaxRefreshTimer);
		famaxRefreshTimer = setTimeout(function(){famaxRefreshGrid($famaxContainer)}, famax_global_options.refreshTimeout);
		
		
	},
	
	


	//insert attachments
	insertAttachments = function(response,postIdArray,$famaxContainer) {
		//console.log('insertAttachments');
		//console.log(response);
		
		//regenerate acceess Token if expired
		if(response.error!=null) {
			if(response.error.code==190 && response.error.message.indexOf('expired')!=-1) {
				alert('Session expired. Please reload the page.');
			}
		}

		
		var famax_global_options = $famaxContainer.data('famax_global_options');
		//var $famaxContainerList = $famaxContainer.find('ul');


		//alert(videoArray.length);
		for(var i=0; i<postIdArray.length; i++) {
			
			postId = postIdArray[i];
			postType = response[postId].type;
			attachmentString = "";
			//console.log('postId-'+postId);
						
			
			//attachments--------------------------
			if(null!=response[postId].attachments) {
				subattachments = response[postId].attachments.data[0].subattachments;
				if(subattachments!=null) {
					subattachments = subattachments.data;
					attachmentString = '<div class="famax-attachment-holder">';
					for(var j=1;j<subattachments.length;j++) {
						attachmentString+='<div class="famax-attachment mfp-image famax-gallery-item" href="'+subattachments[j].media.image.src+'" style="background-image:url(\''+subattachments[j].media.image.src+'\');"></div>';
						//display only 4 max attachments
						if(j>=famax_global_options.maxAttachments) break;
					}
					attachmentString += '</div>';
					//console.log('attachmentString -'+attachmentString);
				}
			}
			
			
			postMainImage = $('#'+postId+' img.mfp-image');
			existingMessage = $('#'+postId+' .famax-video-list-title').text();
			//console.log('existingMessage-'+existingMessage);
			//Message fix-----------------------------
			if(null==existingMessage || existingMessage.trim()=="" || existingMessage.indexOf("via")==0) {
				if(null!=response[postId].attachments) {
					existingMessage = response[postId].attachments.data[0].title;
					$('#'+postId+' .famax-video-list-title').text(existingMessage);
				}
			}
			
			
			//post type--------------------------------------
			if(postType=="photo") {
				objectId = response[postId].object_id;
				picture = extractPicture(response[postId]);
				if(picture==null) {
					picture = 'https://graph.facebook.com/v2.2/'+objectId+'/picture?type=normal&width=500&access_token='+famax_global_options.accessToken;
				}
				//console.log('picture-'+picture);
				postMainImage.attr('src',picture);
				postMainImage.attr('href',picture);
				if(attachmentString!="") {
					postMainImage.after(attachmentString);
				}
			} else if(postType=="link") {
				picture = extractPicture(response[postId]);
				if(null==picture)picture=famax_global_options.imagesFolderPath+"/link.png";
				//console.log('picture-'+picture);
				postMainImage.attr('src',picture);
				//postMainImage.attr('href',picture);				
				if(attachmentString!="") {
					postMainImage.after(attachmentString);
				}
			}  else if(postType=="video") {
				picture = extractPicture(response[postId]);
				postMainImage = $('#'+postId+' img.mfp-iframe');
				postMainImage.attr('src',picture);
				//postMainImage.attr('href',picture);				
				if(attachmentString!="") {
					postMainImage.after(attachmentString);
				}
			} else if(postType=="status") {
			
			} else {
				//console.log('new type found -'+type);
			}

		}
		
		/*
		famaxRefreshCount++;

		//Added to fix UI in Chrome after attachments are loaded
		var $famaxContainerList = $famaxContainer.find('ul');
		$famaxContainerList.imagesLoaded().always(function() {
			famaxRefreshCount--;
			if(famaxRefreshCount<=0) {
				$famaxContainerList.find('li').trigger('refreshWookmark');
			}			
		});
		*/

		window.clearTimeout(famaxRefreshTimer);
		famaxRefreshTimer = setTimeout(function(){famaxRefreshGrid($famaxContainer)}, famax_global_options.refreshTimeout);

		
		
	},
	
	//insert video details
	insertVideoDetails = function(response,videoIdArray,$famaxContainer) {
		//console.log('insertVideoDetails');
		//console.log(response);
		
		//regenerate acceess Token if expired
		if(response.error!=null) {
			if(response.error.code==190 && response.error.message.indexOf('expired')!=-1) {
				alert('Session expired. Please reload the page.');
			}
		}

		
		var famax_global_options = $famaxContainer.data('famax_global_options');
		//var $famaxContainerList = $famaxContainer.find('ul');


		//alert(videoArray.length);
		for(var i=0; i<videoIdArray.length; i++) {
			
			videoId = videoIdArray[i];		
			
			postMainImage = $('#'+videoId);	
			//console.log('postMainImage href-'+postMainImage.attr('href'));
			
			picture = extractVideoThumbnail(response[videoId]);
			//console.log('picture-'+picture);
			postMainImage.attr('src',picture);

		}

		/*
		famaxRefreshCount++;

		//Added to fix UI in Chrome after attachments are loaded
		var $famaxContainerList = $famaxContainer.find('ul');
		$famaxContainerList.imagesLoaded().always(function() {
			famaxRefreshCount--;
			if(famaxRefreshCount<=0) {
				$famaxContainerList.find('li').trigger('refreshWookmark');
			}			
		});
		*/
		
		window.clearTimeout(famaxRefreshTimer);
		famaxRefreshTimer = setTimeout(function(){famaxRefreshGrid($famaxContainer)}, famax_global_options.refreshTimeout);
		
		
		
		/*Removed refresh to improve Performance 
		var $famaxContainerList = $famaxContainer.find('ul');
		$famaxContainerList.imagesLoaded().always(function() {
			$famaxContainerList.find('li').trigger('refreshWookmark');
		}).progress(function(instance, image) {
			if(!image.isLoaded) {
				$img = $('img[src="'+image.img.src+'"]');
				$img.attr('src',famax_global_options.imagesFolderPath+'/unknown.jpg');
				$img.attr('href',famax_global_options.imagesFolderPath+'/unknown.jpg');
				$famaxContainerList.find('li').trigger('refreshWookmark');
			}
		});*/
		
	},
	
	//insert video details
	insertUserDetails = function(response,userIdArray,$famaxContainer,metric) {
		//console.log('insertUserDetails');
		//console.log(response);
		//console.log(userIdArray);
		
		//regenerate acceess Token if expired
		if(response.error!=null) {
			if(response.error.code==190 && response.error.message.indexOf('expired')!=-1) {
				alert('Session expired. Please reload the page.');
			}
		}

		
		var famax_global_options = $famaxContainer.data('famax_global_options');
		//var $famaxContainerList = $famaxContainer.find('ul');


		//alert(videoArray.length);
		for(var i=0; i<userIdArray.length; i++) {
			
			userId = userIdArray[i];		
			
			commentFromUser = $famaxContainer.find('.'+userId+' .famax-'+metric+'-from-img');
			//console.log('postMainImage href-'+postMainImage.attr('href'));
			
			picture = response[userId].picture.data.url;
			//console.log('picture-'+picture);
			commentFromUser.css('background-image','url('+picture+')');

		}
		
	},
	
	
	//insert video thumbnails into famax grid
	insertLikeFeeds = function(response,itemId,loadMoreFlag,$famaxContainer) {
		//console.log('insertLikeFeeds');
		//console.log(response);
		
		//regenerate acceess Token if expired
		if(response.error!=null) {
			if(response.error.code==190 && response.error.message.indexOf('expired')!=-1) {
				alert('Session expired. Please reload the page.');
			}
		}

		
		var famax_global_options = $famaxContainer.data('famax_global_options');
		var $famaxLikeHolder = $famaxContainer.find('#famax-encloser-likes');
		var feedArray = response.data;
		var userIdArray = [];
		
		if(!loadMoreFlag) {
			//empty earlier likes if not load more
			$famaxLikeHolder.empty();
		}

		
		var nextPageApiUrl=null;
		if(null!=response.paging) {
			nextPageApiUrl = response.paging.next;
		}
		
		var $famaxLoadMoreLikesDiv = $famaxContainer.find('.famax-encloser-button.famax-more-likes-button');
		$famaxLoadMoreLikesDiv.data('postid',itemId);
		if(null!=nextPageApiUrl && nextPageApiUrl!="undefined" && nextPageApiUrl!="") {
			$famaxLoadMoreLikesDiv.data('nextpageapiurl',nextPageApiUrl);
		} else {
			$famaxLoadMoreLikesDiv.data('nextpageapiurl','');
		}

		//alert(videoArray.length);
		for(var i=0; i<feedArray.length; i++) {
			
			fromId = feedArray[i].id;
			fromName = feedArray[i].name;
			
			userIdArray.push(fromId);
			
			$famaxLikeHolder.append('<div class="famax-video-like '+fromId+'"><div class="famax-like-from"><div class="famax-like-from-img" style="background-image:url(\''+famax_global_options.imagesFolderPath+'/unknown_person.jpg\');"></div><div class="famax-like-from-name">'+fromName+'</div></div></div>');

			
			//<span class="famax-video-list-views">'+getDateDiff(videoUploaded)+' ago</span>

		}
		
		getUserDetails(userIdArray,$famaxContainer,'like');
		resetLoadMoreLikes($famaxContainer);
		
	},
	
	
	//insert video thumbnails into famax grid
	insertCommentFeeds = function(response,itemId,loadMoreFlag,$famaxContainer) {
		//console.log('insertCommentFeeds');
		//console.log(response);
		
		//regenerate acceess Token if expired
		if(response.error!=null) {
			if(response.error.code==190 && response.error.message.indexOf('expired')!=-1) {
				alert('Session expired. Please reload the page.');
			}
		}

		
		var famax_global_options = $famaxContainer.data('famax_global_options');
		var $famaxCommentHolder = $famaxContainer.find('#famax-encloser-comments');
		var feedArray = response.data;
		var userIdArray = [];
		
		if(!loadMoreFlag) {
			//empty earlier comments if not load more
			$famaxCommentHolder.empty();
		}

		
		var nextPageApiUrl=null;
		if(null!=response.paging) {
			nextPageApiUrl = response.paging.next;
		}
		
		var $famaxLoadMoreCommentsDiv = $famaxContainer.find('.famax-encloser-button.famax-more-comments-button');
		$famaxLoadMoreCommentsDiv.data('postid',itemId);
		if(null!=nextPageApiUrl && nextPageApiUrl!="undefined" && nextPageApiUrl!="") {
			$famaxLoadMoreCommentsDiv.data('nextpageapiurl',nextPageApiUrl);
		} else {
			$famaxLoadMoreCommentsDiv.data('nextpageapiurl','');
		}

		//alert(videoArray.length);
		for(var i=0; i<feedArray.length; i++) {
			
			commentId = feedArray[i].id;
			message = getProcessedMessage(feedArray[i].message,true);
			commentPublished = feedArray[i].created_time;
			fromId = feedArray[i].from.id;
			fromName = feedArray[i].from.name;
			
			userIdArray.push(fromId);
			
			$famaxCommentHolder.append('<div class="famax-video-comment '+fromId+'"><div class="famax-comment-from"><div class="famax-comment-from-img" style="background-image:url(\''+famax_global_options.imagesFolderPath+'/unknown_person.jpg\');"></div><div class="famax-comment-from-name">'+fromName+'</div><div class="famax-published">'+getDateDiff(commentPublished)+' ago</div></div><div class="famax-comment"><span class="famax-comment-content">'+message+'</span><div></div>');

			
			//<span class="famax-video-list-views">'+getDateDiff(videoUploaded)+' ago</span>

		}
		
		getUserDetails(userIdArray,$famaxContainer,'comment');
		resetLoadMoreComments($famaxContainer);
		
	},
		

	
	//insert video thumbnails into famax grid
	insertVideoFeeds = function(response,loadMoreFlag,$famaxContainer) {
		//console.log(response);
		
		//regenerate acceess Token if expired
		if(response.error!=null) {
			if(response.error.code==190 && response.error.message.indexOf('expired')!=-1) {
				alert('Session expired. Please reload the page.');
			}
		}

		
		var famax_global_options = $famaxContainer.data('famax_global_options');
		var $famaxContainerList = $famaxContainer.find('ul');
		var feedArray = response.data;
		var linkStringStart='';
		var linkStringEnd='';
		var likes_shares_comments_string='';
		
		//remove all posts if more than maxItemsDisplayed limit
		if($famaxContainerList.find('li').length>famax_global_options.maxItemsDisplayed) {
			showLoader($famaxContainer);
		}		
		
		var nextPageApiUrl=null;
		if(null!=response.paging) {
			nextPageApiUrl = response.paging.next;
		}
		
		var $famaxLoadMoreDiv = $famaxContainer.find('#famax-load-more-div');
		if(null!=nextPageApiUrl && nextPageApiUrl!="undefined" && nextPageApiUrl!="") {
			$famaxLoadMoreDiv.data('nextpageapiurl',nextPageApiUrl);
		} else {
			$famaxLoadMoreDiv.data('nextpageapiurl','');
		}

		//alert(videoArray.length);
		for(var i=0; i<feedArray.length; i++) {

			//Metrics --------------------------------
			if(!famax_global_options.displayMetricsForPosts) {
				//Display Metrics for Posts is false..
				likes_shares_comments_string = '';
			} else {				
				//4.0 likes-comments-shares
				if(null!=feedArray[i].likes) {
					post_likes = feedArray[i].likes.summary.total_count;
				} else {
					post_likes = 0;
				}
				
				if(null!=feedArray[i].comments) {
					post_comments = feedArray[i].comments.summary.total_count;
				} else {
					post_comments = 0;
				}
				
				if(null!=feedArray[i].shares) {
					post_shares = feedArray[i].shares.count;
				} else {
					post_shares = 0;
				}
				
				likes_shares_comments_string = '<div class="famax-likes-shares-comments-string"><div class="famax-show-likes"><i class="fa fa-thumbs-up"></i><div class="famax-likes-count">'+convertViewCount(post_likes)+'</div></div><div class="famax-show-comments"><i class="fa fa-comment"></i><div class="famax-comments-count">'+convertViewCount(post_comments)+'</div></div></div>';
				//<div class="famax-show-shares"><i class="fa fa-share"></i><div class="famax-shares-count">'+convertViewCount(post_shares)+'</div></div>
			}
			videoId = feedArray[i].id;
			message = getProcessedMessage(feedArray[i].description);
			
			//message-----------------------------
			if(message=="") {				
				if(null==message||message=="") {
					message = feedArray[i].description;
				}
				if(null==message||message=="") {
					message = feedArray[i].name;
				}
				if(null==message || message=="") {
					message = "via "+famax_global_options.fanPageTitle;
				}
			}
			
			picture = extractVideoThumbnail(feedArray[i]);
			link = "https://www.facebook.com/video.php?v="+videoId;
			
			//Link to facebook for Photos
			if(famax_global_options.onClickAction=="link") {
				linkStringStart = '<a class="famax-onclick-link" target="_blank" href="'+link+'">';
				linkStringEnd = '</a>';
			} else {
				linkStringStart = '';
				linkStringEnd = '';
			}
			
			
			$famaxContainerList.append('<li id="'+videoId+'">'+linkStringStart+'<img class="mfp-iframe famax-gallery-item" href="'+link+'" src="'+picture+'">'+linkStringEnd+'<p><span class="famax-video-list-title">'+message+'</span></p>'+likes_shares_comments_string+'<div class="famax-hover-icon famax-hover-icon-play"><i class="fa fa-play"></div></li>');
			
			//<span class="famax-video-list-views">'+getDateDiff(videoUploaded)+' ago</span>

		}
		
		createGrid(loadMoreFlag,$famaxContainer);
		
	},
	
	
	//Insert image thumbnails into famax grid
	insertPhotoFeeds = function(response,loadMoreFlag,$famaxContainer) {
		//console.log('insertPhotoFeeds');
		//console.log(response);
		
		//regenerate acceess Token if expired
		if(response.error!=null) {
			if(response.error.code==190 && response.error.message.indexOf('expired')!=-1) {
				alert('Session expired. Please reload the page.');
			}
		}
		
		//Display Showing Playlist xxx if no Tab is selected
		if(!loadMoreFlag) {
			if($famaxContainer.find('.famax-tab-hover').length==0) {
				$famaxContainer.find('#famax-showing-title').append('<div id="'+$famaxContainer.data('famax_current_playlist_id')+'" class="famax-tab famax-tab-hover">Showing Album - '+$famaxContainer.data('famax_current_playlist_name')+'</div>').show();
			}
		}


		
		var famax_global_options = $famaxContainer.data('famax_global_options');		
		var $famaxContainerList = $famaxContainer.find('ul');
		var feedArray = response.data;
		var linkStringStart = '';
		var linkStringEnd = '';
		var likes_shares_comments_string = '';
		
		//remove all posts if more than maxItemsDisplayed limit
		if($famaxContainerList.find('li').length>famax_global_options.maxItemsDisplayed) {
			showLoader($famaxContainer);
		}		
		
		var nextPageApiUrl=null;
		if(null!=response.paging) {
			nextPageApiUrl = response.paging.next;
		}
		
		var $famaxLoadMoreDiv = $famaxContainer.find('#famax-load-more-div');
		if(null!=nextPageApiUrl && nextPageApiUrl!="undefined" && nextPageApiUrl!="") {
			$famaxLoadMoreDiv.data('nextpageapiurl',nextPageApiUrl);
		} else {
			$famaxLoadMoreDiv.data('nextpageapiurl','');
		}

		//alert(videoArray.length);
		for(var i=0; i<feedArray.length; i++) {
			
			//Link to facebook for Photos
			if(famax_global_options.onClickAction=="link") {
				linkStringStart = '<a class="famax-onclick-link" target="_blank" href="'+feedArray[i].link+'">';
				linkStringEnd = '</a>';
			} else {
				linkStringStart = '';
				linkStringEnd = '';
			}

			
			//Metrics -------------------------------
			if(!famax_global_options.displayMetricsForPosts) {
				//Display Metrics for Posts is false..
				likes_shares_comments_string = '';
			} else {
				//4.0 likes-comments-shares
				if(null!=feedArray[i].likes) {
					post_likes = feedArray[i].likes.summary.total_count;
				} else {
					post_likes = 0;
				}
				
				if(null!=feedArray[i].comments) {
					post_comments = feedArray[i].comments.summary.total_count;
				} else {
					post_comments = 0;
				}
				
				if(null!=feedArray[i].shares) {
					post_shares = feedArray[i].shares.count;
				} else {
					post_shares = 0;
				}
				
				likes_shares_comments_string = '<div class="famax-likes-shares-comments-string"><div class="famax-show-likes"><i class="fa fa-thumbs-up"></i><div class="famax-likes-count">'+convertViewCount(post_likes)+'</div></div><div class="famax-show-comments"><i class="fa fa-comment"></i><div class="famax-comments-count">'+convertViewCount(post_comments)+'</div></div></div>';
				//<div class="famax-show-shares"><i class="fa fa-share"></i><div class="famax-shares-count">'+convertViewCount(post_shares)+'</div></div>
			}
		
			imageId = feedArray[i].id;
			message = getProcessedMessage(feedArray[i].name);
			if(null==message || message=="") {
				message = "via "+famax_global_options.fanPageTitle;
			}
			picture = extractAlbumImage(feedArray[i]);
			$famaxContainerList.append('<li id="'+imageId+'">'+linkStringStart+'<img class="mfp-image famax-gallery-item" href="'+picture+'" src="'+picture+'">'+linkStringEnd+'<p><span class="famax-video-list-title">'+message+'</span></p>'+likes_shares_comments_string+'<div class="famax-hover-icon famax-hover-icon-search"><i class="fa fa-search"></div></li>');
			//<span class="famax-video-list-views">'+getDateDiff(videoUploaded)+' ago</span>

		}
		
		createGrid(loadMoreFlag,$famaxContainer);
		
		//TODO: get likes and share count
		
	},


	//Insert image thumbnails into famax grid
	insertAlbumFeeds = function(response,loadMoreFlag,$famaxContainer) {
		//console.log('insertAlbumFeeds');
		//console.log(response);
		
		//regenerate acceess Token if expired
		if(response.error!=null) {
			if(response.error.code==190 && response.error.message.indexOf('expired')!=-1) {
				alert('Session expired. Please reload the page.');
			}
		}

		
		var famax_global_options = $famaxContainer.data('famax_global_options');
		var coverPhotoIdArray = [];
		var $famaxContainerList = $famaxContainer.find('ul');
		var feedArray = response.data;
		var linkStringStart='';
		var linkStringEnd='';

		//remove all posts if more than maxItemsDisplayed limit
		if($famaxContainerList.find('li').length>famax_global_options.maxItemsDisplayed) {
			showLoader($famaxContainer);
		}
		
		var nextPageApiUrl=null;
		if(null!=response.paging) {
			nextPageApiUrl = response.paging.next;
		}
		
		var $famaxLoadMoreDiv = $famaxContainer.find('#famax-load-more-div');
		if(null!=nextPageApiUrl && nextPageApiUrl!="undefined" && nextPageApiUrl!="") {
			$famaxLoadMoreDiv.data('nextpageapiurl',nextPageApiUrl);
		} else {
			$famaxLoadMoreDiv.data('nextpageapiurl','');
		}

		//alert(videoArray.length);
		for(var i=0; i<feedArray.length; i++) {
			albumId = feedArray[i].id;
			albumName = feedArray[i].name;
			photoCount = feedArray[i].count;
			coverPhotoId = feedArray[i].cover_photo;
			
			if(null==photoCount)
				continue;

			if(famax_global_options.onClickAction=="link") {
				linkStringStart = '<a class="famax-onclick-link" target="_blank" href="'+feedArray[i].link+'">';
				linkStringEnd = '</a>';
			} else {
				linkStringStart = '';
				linkStringEnd = '';
			}

				
			$famaxContainerList.append('<li id="photos_'+albumId+'">'+linkStringStart+'<img class="mfp-image '+coverPhotoId+'" src=""><div class="famax-album-photo-count-wrapper"><div class="famax-album-photo-count-box"><span class="famax-album-photo-count">'+photoCount+'</span><br>PHOTOS<br><div class="famax-album-line-wrapper"><span class="famax-album-line"></span><br><span class="famax-album-line"></span><br><span class="famax-album-line"></span></div></div></div>'+linkStringEnd+'<p><span class="famax-video-list-title">'+albumName+'</span></p></li>');

			if(null!=coverPhotoId && coverPhotoId!="") {
				coverPhotoIdArray.push(coverPhotoId);
			}
		}
		
		createGrid(loadMoreFlag,$famaxContainer,null,null,null,coverPhotoIdArray);
		//getAlbumCoverPhotos(coverPhotoIdArray,$famaxContainer);	
		
	},

	

	
	//convert shortened links to long links
	fixLongLink = function (link, postId) {
		
		
		if(link.indexOf('bit.ly')==-1 && link.indexOf('goo.gl')==-1 && link.indexOf('youtubeshare.com')==-1 && link.indexOf('youtu.be')==-1 && link.indexOf('tinyurl.com')==-1) {
			addLinkToNoEmbedVideos(link, postId);
			return;
		}
		
		
		apiUrl = "http://api.longurl.org/v2/expand?format=json&url="+link;
		
		//console.log('getLongLink apiUrl-'+apiUrl);
		
		$.ajax({
			url: apiUrl,
			type: "GET",
			async: true,
			cache: true,
			dataType: 'jsonp',
			success: function(response) { 
				if(null!=response["long-url"]) {
					$('#'+postId+'>img').attr('href',response["long-url"]);
					addLinkToNoEmbedVideos(response["long-url"], postId);
				}
			},
			error: function(html) { alert(html); },
			beforeSend: setHeader
		});

		
		
	},
	
	//add links over videos that cannot be shown in lightbox
	addLinkToNoEmbedVideos = function(link, postId) {
		//console.log('addLinkToNoEmbedVideos link - '+link);
		//console.log('addLinkToNoEmbedVideos postId - '+postId);
		if(link.indexOf('youtube.com')==-1 && link.indexOf('vimeo.com')==-1 && link.indexOf('facebook.com')==-1) {
			$('#'+postId+'>img').removeClass('famax-gallery-item');
			$('#'+postId+'>img').wrap('<a target="_blank" class="famax-link-post" href="'+link+'">');
		}
		
		if(link.indexOf('vimeo.com/ondemand/')!=-1) {
			//console.log('in wrap');
			$('#'+postId+'>img').removeClass('famax-gallery-item');
			$('#'+postId+'>img').wrap('<a target="_blank" class="famax-link-post" href="'+link+'"></a>');
		}
		
	},
	
	//process message text
	getProcessedMessage = function(message,isComment) {
	
		if(null==message) {
			message = "";
			return message;
		}
		
		if(null==isComment || isComment==false) {
			//wrap links
			spotArray = message.match(/http(s)*:\/\/.+?(\s|\n|$)/g);
			//console.log(message);
			//console.log(spotArray);
			if(null!=spotArray) {
				for(var i=0;i<spotArray.length;i++) {
					spotArray[i] = spotArray[i].trim();
					message = message.replace(spotArray[i],'<a target="_blank" href="'+spotArray[i]+'" class="famax-link">'+spotArray[i]+'</a>');
					//use if hashtags are also being processed
					//replaceText = spotArray[i].replace('#',':hash:');
					//message = message.replace(spotArray[i],'<a target="_blank" href="'+replaceText+'" class="famax-link">'+replaceText+'</a>');
				}
			}
		}
		/*
		//TODO: wrap hashtags in future version
		spotArray = message.match(/#(\w|\d)+/g);
		//console.log(message);
		//console.log(spotArray);
		if(null!=spotArray) {
			for(var i=0;i<spotArray.length;i++) {
				message = message.replace(spotArray[i],'<span class="famax-link">'+spotArray[i]+'</span>');
			}
		}
		*/
		
		
		//message = message.replace(/:hash:/g,'#');
		
		//4.0 added 
		message = message.replace(/\n/g,"<br>");

		return message;
	
	},

	//extract picture for post
	extractPicture = function(feed) {
		
		//console.log('extractPicture-'+picture);
		
		picture = feed.picture;
		if(null!=picture && picture.indexOf("safe_image.php")!=-1) {
			picture = picture.substring(picture.indexOf('url=')+4);
			if(picture.indexOf('&')!=-1) {
				picture = picture.substring(0,picture.indexOf('&'));
			}
			if(picture.indexOf('?')!=-1) {
				picture = picture.substring(0,picture.indexOf('?'));
			}
			picture = decodeURIComponent(picture);
			//console.log('picture-'+picture);
			if(picture.indexOf("http")==0 || picture.indexOf("https")==0) {
				return picture;
			}
		} 
		
		if(null!=feed.attachments && null!=feed.attachments.data[0].subattachments){
			picture = feed.attachments.data[0].subattachments.data[0].media.image.src;
			return picture;
		} 
		
		if(null!=feed.attachments && null!=feed.attachments.data[0].media){
			picture = feed.attachments.data[0].media.image.src;
			return picture;
		}
		

		picture = feed.picture;
		return picture;

	},
	
	//extract picture for album
	extractAlbumImage = function(feed) {
		
		var picture;
		//console.log('extractVideoThumbnail-');
		//console.log(feed);

		for(var k=0,l=feed.images.length-1;k<l;k++) {
			picture = feed.images[k].source;
			width = feed.images[k].width;
			
			if(width<=900) break;
		
		}

		return picture;

		/*
		pictureArray = feed.images;
		picture = pictureArray[0].source;
		return picture;*/

	},
	
	//extract picture for video
	extractVideoThumbnail = function(feed) {
		var picture;
		//console.log('extractVideoThumbnail-');
		//console.log(feed);
		for(var k=feed.format.length-1;k>=0;k--) {
			picture = feed.format[k].picture;
			width = feed.format[k].width;
			
			if(width<800) break;
		
		}

		return picture;

	},
	
	
	//utility function for date time
	getDateDiff = function (timestamp) {
		if(null==timestamp||timestamp==""||timestamp=="undefined")
			return "?";
		//alert(timestamp);
		var splitDate=((timestamp.toString().split('T'))[0]).split('-');
		var d1 = new Date();		
		
		var d1Y = d1.getFullYear();
		var d2Y = parseInt(splitDate[0],10);
		var d1M = d1.getMonth();
		var d2M = parseInt(splitDate[1],10);

		var diffInMonths = (d1M+12*d1Y)-(d2M+12*d2Y);
		/*alert(d1Y);
		alert(d2Y);
		alert(d1M);
		alert(d2M);
		alert(diffInMonths);
		*/
		if(diffInMonths<=1)
			return "1 month";
		else if(diffInMonths<12)
			return  diffInMonths+" months";
		
		var diffInYears = Math.floor(diffInMonths/12);
		
		if(diffInYears<=1)
			return "1 year";
		else if(diffInYears<12)
			return  diffInYears+" years";

	},
	
	//create grid layout using Wookmark plugin
	createGrid = function(loadMoreFlag, $famaxContainer, postIdArray, videoIdArray, videoPostIdArray, coverPhotoIdArray /*,fixedThumbnails*/) {
		var famax_global_options = $famaxContainer.data('famax_global_options');	
		var $famaxContainerList = $famaxContainer.find('ul');
		var minThumbnailWidth,maxThumbnailWidth;
		//clearTimeout(famax_timeout);
		//$famaxContainerList.imagesLoaded().always(function() {
		$famaxContainerList.imagesLoaded().always(function() {
			
			$famaxContainerList.find('.famax-loading-div').remove();
			
			var options = {
			  autoResize: true, // This will auto-update the layout when the browser window is resized.
			  container: $famaxContainer.find('#famax-video-list-div'), // Optional, used for some extra CSS styling
			  offset: famax_global_options.innerOffset, // Optional, the distance between grid items
			  itemWidth: famax_global_options.minItemWidth, // Optional, the width of a grid item
			  flexibleWidth : famax_global_options.maxItemWidth,
			  outerOffset: famax_global_options.outerOffset
			};

			
			var handler = $famaxContainerList.find('li');
			
			// Call the layout function.
			handler.wookmark(options);
			
			//famaxRefreshGrid($famaxContainer);
			
			if(famax_global_options.onClickAction=="popup") {
				registerPopup($famaxContainer);
			}
			
			resetLoadMoreButton($famaxContainer);
			
			getAttachments(postIdArray,$famaxContainer);
			getVideoDetails(videoIdArray,$famaxContainer);
			getAttachments(videoPostIdArray,$famaxContainer);
			getAlbumCoverPhotos(coverPhotoIdArray,$famaxContainer);
		
			//famaxRefreshCount++;
			//window.clearTimeout(famaxRefreshTimer);
			//famaxRefreshTimer = setTimeout(function(){famaxRefreshGrid($famaxContainer)}, famax_global_options.refreshTimeout);
		});
		
	},
	
	famaxRefreshGrid = function($famaxContainer) {
		var $famaxContainerList = $famaxContainer.find('ul');
		var famax_global_options = $famaxContainer.data('famax_global_options');	
		var options = {
		  autoResize: true, // This will auto-update the layout when the browser window is resized.
		  container: $famaxContainer.find('#famax-video-list-div'), // Optional, used for some extra CSS styling
		  offset: famax_global_options.innerOffset, // Optional, the distance between grid items
		  itemWidth: famax_global_options.minItemWidth, // Optional, the width of a grid item
		  flexibleWidth : famax_global_options.maxItemWidth,
		  outerOffset: famax_global_options.outerOffset
		};
		
		$famaxContainerList.imagesLoaded().always(function() {
			//$famaxContainerList.find('li').trigger('refreshWookmark');
			$famaxContainerList.find('li').wookmark(options);
			//console.log('triggered refresh');
		}).progress(function(instance, image) {
			if(!image.isLoaded) {
				$img = $('img[src="'+image.img.src+'"]');
				
				//TODO: replace with a small resolution image
				lowResImage = $img.data("lowresimage");
				if(null!=lowResImage) {
					$img.attr('src',lowResImage);
				} else {
					$img.attr('src',famax_global_options.imagesFolderPath+'/unknown_person.jpg');
				}
				
				//TODO: check if it is an image only then replace the href
				//removed to let video hrefs be unmodified
				//$img.attr('href',famax_global_options.imagesFolderPath+'/unknown_person.jpg');
				
				//TODO: remove to improve performance
				//console.log('triggered refresh');
				$famaxContainerList.find('li').wookmark(options);
			}
		});	
	
	},
	
	resetLoadMoreButton = function($famaxContainer) {
		var $famaxLoadMoreDiv = $famaxContainer.find('#famax-load-more-div');
		$famaxLoadMoreDiv.removeClass('famax-load-more-div-click');
		$famaxLoadMoreDiv.text('LOAD MORE');
	},
	
	//register popup on image and video thumbnails
	registerPopup = function($famaxContainer) {
	
		var famax_global_options = $famaxContainer.data('famax_global_options');
			
			$famaxContainer.find('#famax-video-list-div #tiles').magnificPopup({
				//type:'image',
				delegate: '.famax-gallery-item',
				gallery: {
					enabled:true
				},
				iframe:{
					markup: '<div class="mfp-iframe-scaler">'+
					'<div class="famax-iframe-icon-play"><i class="fa fa-play fa-1x"></i></div>'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
					'</div>',
					patterns: {
							youtube: {
								index: 'youtube.com/',
								id: function(url) { 
									tid=url.split('v=')[1];
									if(tid.indexOf('&')!=-1) {
										tid=tid.substring(0,tid.indexOf('&'));
									}
									return tid; 
								}, 
								src: 'http://www.youtube.com/embed/%id%?rel=0&autoplay=1'
							},
							facebook : {
								index: 'facebook.com/',
								id: 'v=',
								src: 'http://www.facebook.com/video/embed?video_id=%id%'
							},
							/*vimeoondemand : {
								index: 'vimeo.com/ondemand',
								id: function(url) { 
									tid=url.split('/ondemand/')[1];
									if(tid.indexOf('&')!=-1) {
										tid=tid.substring(0,tid.indexOf('&'));
										console.log('vimeo ondemand - '+tid);
									}
									return tid; 
								},
								src: 'http://player.vimeo.com/video/%id%?autoplay=1'
							},*/
							vimeo: {
								index: 'vimeo.com/',
								id: '/',
								src: 'http://player.vimeo.com/video/%id%?autoplay=1'
							}
							
						}
				},
				preloader:false,
				showCloseBtn: true, 
				closeBtnInside: true, 
				closeOnContentClick: false, 
				closeOnBgClick: true, 
				enableEscapeKey: true, 
				modal: false, 
				alignTop: false, 
				removalDelay: 100, 
				mainClass: ' ',
				callbacks: {
					markupParse: function(template, values, item) {
						// Triggers each time when content of popup changes
						//console.log('markupParse:',item);
						$('.famax-fb-fix').remove();
						if(item.src.indexOf("facebook.com/video.php")!=-1 && null!=item.el) {
							//console.log('resizing iframe to width - '+item.el.context.naturalWidth);
							
							var naturalWidth = item.el.context.naturalWidth;
							var naturalHeight = item.el.context.naturalHeight;
							//var aspectRatio = naturalHeight/naturalWidth;
							
							if(naturalWidth<320) {
								naturalWidth=320;
							}
							if(naturalWidth>900) {
								naturalWidth=900;
							}
							
							var style = $('<style class="famax-fb-fix">.mfp-content { max-width: '+naturalWidth+'px !important; } .famax-iframe-icon-play{display: inline-block !important;}</style>');
							$('html > head').append(style);
							//$('.mfp-container>.mfp-content').css('max-width',item.el.context.naturalWidth);
							
						}
					}			
				}
			});	
			
			/* TODO: no need found
			$("body").on("click",".mfp-content",function(){
				$(".famax-iframe-icon-play").css("display","none");
			});*/
				
	
	},
	
	
	//display loading.. text
	showLoader = function($famaxContainer) {
		$famaxContainer.find('#famax-video-list-div>ul').empty();
		//$famaxContainer.find('#famax-video').hide();
		//$famaxContainer.find('#famax-video').attr('src','');
		$famaxContainer.find('#famax-video-list-div>ul').append('<div class="famax-loading-div" style="text-align:center; height:300px; font:14px Calibri;"><br><br><br><br><br><br>loading HD...<br><br><br><br><br><br></div>');
		$famaxContainer.find('#famax-showing-title').empty().hide();
	},
	
	//retrieve access token
	getAccessToken = function(options,$famaxContainer) {
		var apiUrl;
		//added code for WordPress sync
		if(null!=options.accessToken && options.accessToken!="") {
			//assume that we have an access token ready via php
			//WordPress version will us this
			prepareFamax(options.accessToken,$famaxContainer);
			return;
		} else {
			//assume that we have an app id and an app secret
			//jQuery version will use this
			apiUrl = 'https://graph.facebook.com/v2.2/oauth/access_token?client_id='+options.appId+'&client_secret='+options.appSecret+'&grant_type=client_credentials';
		}
		
		//console.log('getAccessToken apiUrl-'+apiUrl);
		
		$.ajax({
			url: apiUrl,
			type: "GET",
			async: true,
			cache: true,
			dataType: 'text',
			success: function(response) {
				var token = response.substring(response.indexOf('=')+1);
				prepareFamax(token,$famaxContainer);
			},
			error: function(html,status) { 
				//using permanent accessToken in case of failure
				if(null!=options.appSecret && options.appSecret!="") {
					prepareFamax(options.appId+'|'+options.appSecret,$famaxContainer);
				} else {
					alert('Cannot find access token'+html)
				}
			},
			beforeSend: setHeader
		});
	
	},
	
	prepareFamax = function(token,$famaxContainer) {
		//console.log(response);
		var famax_global_options = $famaxContainer.data('famax_global_options');
		famax_global_options.accessToken = token;
		$famaxContainer.data('famax_global_options',famax_global_options);
		
		//inititalize Famax 
		initFamax($famaxContainer);
		getPageDetails($famaxContainer);
		/* Groups will be added in 5.0
		if(famax_global_options.type=="group") {
			getGroupDetails($famaxContainer);
		} else {
			getPageDetails($famaxContainer);
		}*/
		getAlbumDetails(famax_global_options.albumIdArray,$famaxContainer);
	},
	
	
	//get details of all playlists mentioned in famax options
	getAlbumDetails = function (albumIdArray,$famaxContainer) {
		//console.log('inside getPlaylistDetails');
		//console.log(playlistIdArray);
		var famax_global_options = $famaxContainer.data('famax_global_options');
		
		apiUrl = "https://graph.facebook.com/v2.2/?ids="+albumIdArray+"&access_token="+famax_global_options.accessToken;

		$.ajax({
			url: apiUrl,
			type: "GET",
			async: true,
			cache: true,
			dataType: 'jsonp',
			success: function(response) { displayTabs(response,$famaxContainer);},
			error: function(html) { alert(html); },
			beforeSend: setHeader
		});
	},
	
	//display tabs for albums
	displayTabs = function(response,$famaxContainer) {
		//console.log(response);
		var famax_global_options = $famaxContainer.data('famax_global_options');
		var albumIdArray = famax_global_options.albumIdArray;
		
		//alert(videoArray.length);
		$famaxTabs = $famaxContainer.find('#famax-tabs');
		$famaxSelect = $famaxContainer.find('#famax-select');
		for(var i=0; i<albumIdArray.length; i++) {
			albumId = albumIdArray[i];
			
			albumTitle = response[albumId].name;
			
			if(albumTitle.length>famax_global_options.maxAlbumNameLength) {
				albumTitleShort = albumTitle.substring(0,famax_global_options.maxAlbumNameLength) + "..";
			} else {
				albumTitleShort = albumTitle;
			}
			
			$famaxTabs.append('<span id="photos_'+albumId+'" class="famax-tab" >'+albumTitleShort+'</span>');
			$famaxSelect.append('<option value="photos_'+albumId+'" >'+albumTitle+'</option>');
		}
		
		//click the selectedTab
		if(famax_global_options.selectedTab.charAt(0)=='a') {
			albumSelect = (famax_global_options.selectedTab.charAt(1)) - 1;
			if(null!=albumIdArray[albumSelect]) {
				$('#photos_'+albumIdArray[albumSelect]).click();
			}
		}
	},
	
	displayTabFeeds = function(tabId, $famaxContainer) {
	
		//console.log('displayTabFeeds tabId-'+tabId);
		var tab_split = tabId.split('_');

		showLoader($famaxContainer);
		action = tab_split[0];
		if(action.indexOf("posts")!=-1) {
			getPagePosts($famaxContainer,null);
		}else if (action.indexOf("tagged")!=-1) {
			getPageTags($famaxContainer,null);
		} else if(action.indexOf("feed")!=-1) {
			//TODO: Groups will be added in 5.0
			//getGroupFeeds(tab_split[0],tab_split[1],$famaxContainer,null);
		} else if(action.indexOf("photos")!=-1) {
			getAlbumPhotos(tab_split[1],$famaxContainer,null);
		} else if(action.indexOf("videos")!=-1) {
			getPageVideos($famaxContainer,null);
		} else if(action.indexOf("albums")!=-1) {
			getPageAlbums($famaxContainer,null);
		}
		
		$famaxContainer.find('.famax-tab').removeClass('famax-tab-hover');	
		$('#'+tabId).addClass('famax-tab-hover');
		$famaxContainer.find('#famax-select').val(tabId);

	};



	//famax plugin definition
    $.fn.famax = function(options) {
		
		var famax_global_options = {};
		var $famaxContainer = this;
		var albumIdArray = [];
		
		//add fontawesome icons
		if (document.createStyleSheet){
			document.createStyleSheet("http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css");
		} else {
			$("head").append("<link rel='stylesheet' href='http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css' type='text/css' />");
		}
		
		//Get CSS for Skins
		if(options.skin=="white" || options.skin=="grey") {
			if (document.createStyleSheet){
                document.createStyleSheet("./css/famax_"+options.skin+".min.css");
            } else {
                $("head").append("<link rel='stylesheet' href='./css/famax_"+options.skin+".min.css' type='text/css' />");
            }
		} else {
			//don't load any styles
			//user will load them manually
		}		
		
		//set local options		
		famax_global_options.maxResults = options.maxResults||6;
		famax_global_options.innerOffset = options.innerOffset||40;
		famax_global_options.outerOffset = options.outerOffset||40;
		famax_global_options.minItemWidth = options.minItemWidth||300;
		famax_global_options.maxItemWidth = options.maxItemWidth||450;
		//famax_global_options.aspectRatio = 360/640;		
		famax_global_options.alwaysUseDropdown = options.alwaysUseDropdown;
		famax_global_options.imagesFolderPath = options.imagesFolderPath||"./images";
		
		//3.0 added options
		famax_global_options.maxAttachments = options.maxAttachments||3;
		famax_global_options.maxAlbumNameLength = 22;
		famax_global_options.selectedTab = options.selectedTab||"p";
		famax_global_options.maxItemsDisplayed = options.maxItemsDisplayed||25;
		
		//4.0 added options
		famax_global_options.displayMetricsForTags = options.displayMetricsForTags||false;
		famax_global_options.displayMetricsForPosts = options.displayMetricsForPosts;
		if(null==famax_global_options.displayMetricsForPosts) famax_global_options.displayMetricsForPosts=true;
		famax_global_options.maxComments = options.maxComments||12;
		famax_global_options.onClickAction = options.onClickAction||"popup";
		famax_global_options.refreshTimeout = options.refreshTimeout||1000;

		//famax_global_options.maxPlaylistNameLength = 22;
		
		if(options.fanPage!=null) {
			s=options.fanPage.lastIndexOf("/");
			//console.log('s-'+s);
			if(s!=-1) {
				fanPageId = options.fanPage.substring(s+1);
				famax_global_options.fanPageId=fanPageId;
			} else {
				//Fan page URL incorrect
				famax_global_options.fanPageId=null;
			}
			
			/* Groups will be added in 5.0
			if(options.fanPage.indexOf("groups/")!=-1) {
				famax_global_options.type="group";
			} else {
				famax_global_options.type="page";
			}
			console.log("Type - "+famax_global_options.type);*/
		}
		
		
		options.maxContainerWidth = options.maxContainerWidth||1000;
		$famaxContainer.css('max-width',(options.maxContainerWidth)+'px');
		
		//adding media queries manually if maxContainerWidth is very low (widget mode)
		if(options.maxContainerWidth<800) {
			$("body").append("<style>#famax-stat-holder {display:none;}.famax-subscribe {left:initial;}#famax-select-box{display:block;}#famax-tabs {display:none;}</style>");
		}

		if(options.maxContainerWidth<500) {
			$("body").append("<style>#famax-stat-holder {display:none;}.famax-subscribe {display:none;}.famax-tab {width: 42%;text-align: center;}</style>");
		}

		if(options.maxContainerWidth<300) {
			$("body").append("<style>.famax-tab {width: 90%;text-align: center;}</style>");
		}
		
		
		//get album details
		if($.isArray(options.album)) {
			for(var i=0; i<options.album.length; i++) {
				s=options.album[i].indexOf("?set=a.");
				//console.log('s-'+s);
				if(s!=-1) {
					e = options.album[i].indexOf(".",s+7);
					albumId = options.album[i].substring(s+7,e);
					//console.log('playlistId-'+playlistId);
					albumIdArray.push(albumId);
				} else {
					//alert("Could Not Find Album..");
				}
			}
		}
		
		famax_global_options.albumIdArray = albumIdArray;

		//attach global options
		$famaxContainer.data('famax_global_options',famax_global_options);

		//get access Token and then display feeds..
		getAccessToken(options,$famaxContainer);
		
		//Facebook Login script
		$.getScript( "http://connect.facebook.net/en_US/sdk.js" )
		.done(function( script, textStatus ) {
			//console.log("Facebook Init called..");
			FB.init({
				appId      : options.appId,
				cookie     : true, 
				xfbml      : false, 
				version    : 'v2.2'
			});
		})
		.fail(function( jqxhr, settings, exception ) {
			//console.log("Facebook Init failed..");
		});
		
		//return this for chaining
		return this;
 
    };
	
 
}( jQuery ));
