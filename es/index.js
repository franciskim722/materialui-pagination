function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import IconButton from 'material-ui/IconButton';

import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

var styles = {
  paginationContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: '.5em',
    fontSize: '.75em'
  },
  paginationSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paginationText: {
    margin: '0 1.25em'
  },
  paginationSelect: {
    width: 75,
    fontSize: '1em'
  },
  navigationLeft: {
    marginRight: '.5em',
    cursor: 'pointer'
  },
  navigationLeftFirstPage: {
    marginRight: '.5em',
    color: 'rgba(0,0,0,0.26)'
  },
  navigationRight: {
    margin: '0 .5em',
    cursor: 'pointer'
  },
  navigationRightLastPage: {
    margin: '0 .5em',
    color: 'rgba(0,0,0,0.26)'
  }
};

var Pagination = function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination(props, context) {
    _classCallCheck(this, Pagination);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.selectRowsPerPage = _this.selectRowsPerPage.bind(_this);
    _this.selectPageNumber = _this.selectPageNumber.bind(_this);

    _this.renderRowsPerPage = _this.renderRowsPerPage.bind(_this);
    _this.renderRowRange = _this.renderRowRange.bind(_this);

    _this.numberOfPages = _this.numberOfPages.bind(_this);

    _this.incrementPage = _this.incrementPage.bind(_this);
    _this.decrementPage = _this.decrementPage.bind(_this);
    return _this;
  }

  Pagination.prototype.selectRowsPerPage = function selectRowsPerPage() {
    var updatedState = Object.assign({}, this.props);
    updatedState.numberOfRows = parseInt(event.target.innerText);
    if (updatedState.numberOfRows * this.props.page > this.props.total) {
      var updatedPage = Math.ceil(this.props.total / updatedState.numberOfRows);
      updatedState.page = updatedPage;
      this.props.updateRows(updatedState);
    } else {
      this.props.updateRows(updatedState);
    }
  };

  Pagination.prototype.selectPageNumber = function selectPageNumber() {
    var updatedState = Object.assign({}, this.props);
    updatedState.page = parseInt(event.target.innerText);
    this.props.updateRows(updatedState);
  };

  Pagination.prototype.numberOfPages = function numberOfPages() {
    var numArray = [];
    for (var i = 0; i < Math.ceil(this.props.total / this.props.numberOfRows); i++) {
      numArray.push(i + 1);
    }

    return numArray.map(function (pageValue, index) {
      return React.createElement(MenuItem, { key: index, value: pageValue, primaryText: pageValue });
    });
  };

  Pagination.prototype.incrementPage = function incrementPage() {
    var updatedState = Object.assign({}, this.props);
    updatedState.page++;
    this.props.updateRows(updatedState);
  };

  Pagination.prototype.decrementPage = function decrementPage() {
    var updatedState = Object.assign({}, this.props);
    updatedState.page--;
    this.props.updateRows(updatedState);
  };

  Pagination.prototype.renderRowsPerPage = function renderRowsPerPage() {
    return this.props.rowsPerPage.map(function (rowValue, index) {
      return React.createElement(MenuItem, { key: index, value: rowValue, primaryText: rowValue });
    });
  };

  Pagination.prototype.renderRowRange = function renderRowRange() {
    return React.createElement(
      'span',
      null,
      this.props.numberOfRows * this.props.page - this.props.numberOfRows + 1,
      ' - ',
      this.props.numberOfRows * this.props.page < this.props.total ? this.props.numberOfRows * this.props.page : this.props.total
    );
  };

  Pagination.prototype.render = function render() {

    return React.createElement(
      'div',
      { style: styles.paginationContainer },
      React.createElement(
        'div',
        { style: styles.paginationSection },
        React.createElement(
          'div',
          { style: styles.paginationText },
          'Page:'
        ),
        React.createElement(
          SelectField,
          {
            style: styles.paginationSelect,
            value: this.props.page,
            onChange: this.selectPageNumber
          },
          this.props.total === 1 ? null : this.numberOfPages()
        )
      ),
      React.createElement(
        'div',
        { style: styles.paginationSection },
        React.createElement(
          'div',
          { style: styles.paginationText },
          'Rows Per Page:'
        ),
        React.createElement(
          SelectField,
          {
            style: styles.paginationSelect,
            value: this.props.numberOfRows,
            onChange: this.selectRowsPerPage
          },
          this.renderRowsPerPage()
        )
      ),
      React.createElement(
        'div',
        { style: styles.paginationSection },
        React.createElement(
          'div',
          { style: styles.paginationText },
          this.renderRowRange(),
          '  of ',
          this.props.total
        )
      ),
      React.createElement(
        'div',
        { style: styles.paginationSection },
        React.createElement(
          IconButton,
          {
            iconStyle: this.props.page <= 1 ? styles.navigationLeftFirstPage : styles.navigationLeft,
            name: "navigationLeft",
            disabled: this.props.page <= 1,
            onTouchTap: this.decrementPage },
          React.createElement(ChevronLeft, null)
        ),
        React.createElement(
          IconButton,
          {
            iconStyle: this.props.page >= this.props.total / this.props.numberOfRows ? styles.navigationRightLastPage : styles.navigationRight,
            name: "navigationRight",
            disabled: this.props.page >= this.props.total / this.props.numberOfRows,
            onTouchTap: this.incrementPage },
          React.createElement(ChevronRight, null)
        )
      )
    );
  };

  return Pagination;
}(React.Component);

Pagination.defaultProps = {
  total: 0,
  page: 1,
  rowsPerPage: [10, 20, 30],
  numberOfRows: 10
};

process.env.NODE_ENV !== "production" ? Pagination.propTypes = {
  total: PropTypes.number,
  page: PropTypes.number,
  numberOfRows: PropTypes.number,
  rowsPerPage: PropTypes.array,
  updateRows: PropTypes.func
} : void 0;

export default Pagination;