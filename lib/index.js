'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _chevronLeft = require('material-ui/svg-icons/navigation/chevron-left');

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _chevronRight = require('material-ui/svg-icons/navigation/chevron-right');

var _chevronRight2 = _interopRequireDefault(_chevronRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      return _react2.default.createElement(_MenuItem2.default, { key: index, value: pageValue, primaryText: pageValue });
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
      return _react2.default.createElement(_MenuItem2.default, { key: index, value: rowValue, primaryText: rowValue });
    });
  };

  Pagination.prototype.renderRowRange = function renderRowRange() {
    return _react2.default.createElement(
      'span',
      null,
      this.props.numberOfRows * this.props.page - this.props.numberOfRows + 1,
      ' - ',
      this.props.numberOfRows * this.props.page < this.props.total ? this.props.numberOfRows * this.props.page : this.props.total
    );
  };

  Pagination.prototype.render = function render() {

    return _react2.default.createElement(
      'div',
      { style: styles.paginationContainer },
      _react2.default.createElement(
        'div',
        { style: styles.paginationSection },
        _react2.default.createElement(
          'div',
          { style: styles.paginationText },
          'Page:'
        ),
        _react2.default.createElement(
          _SelectField2.default,
          {
            style: styles.paginationSelect,
            value: this.props.page,
            onChange: this.selectPageNumber
          },
          this.props.total === 1 ? null : this.numberOfPages()
        )
      ),
      _react2.default.createElement(
        'div',
        { style: styles.paginationSection },
        _react2.default.createElement(
          'div',
          { style: styles.paginationText },
          'Rows Per Page:'
        ),
        _react2.default.createElement(
          _SelectField2.default,
          {
            style: styles.paginationSelect,
            value: this.props.numberOfRows,
            onChange: this.selectRowsPerPage
          },
          this.renderRowsPerPage()
        )
      ),
      _react2.default.createElement(
        'div',
        { style: styles.paginationSection },
        _react2.default.createElement(
          'div',
          { style: styles.paginationText },
          this.renderRowRange(),
          '  of ',
          this.props.total
        )
      ),
      _react2.default.createElement(
        'div',
        { style: styles.paginationSection },
        _react2.default.createElement(
          _IconButton2.default,
          {
            iconStyle: this.props.page <= 1 ? styles.navigationLeftFirstPage : styles.navigationLeft,
            name: "navigationLeft",
            disabled: this.props.page <= 1,
            onTouchTap: this.decrementPage },
          _react2.default.createElement(_chevronLeft2.default, null)
        ),
        _react2.default.createElement(
          _IconButton2.default,
          {
            iconStyle: this.props.page >= this.props.total / this.props.numberOfRows ? styles.navigationRightLastPage : styles.navigationRight,
            name: "navigationRight",
            disabled: this.props.page >= this.props.total / this.props.numberOfRows,
            onTouchTap: this.incrementPage },
          _react2.default.createElement(_chevronRight2.default, null)
        )
      )
    );
  };

  return Pagination;
}(_react2.default.Component);

Pagination.defaultProps = {
  total: 0,
  page: 1,
  rowsPerPage: [10, 20, 30],
  numberOfRows: 10
};

process.env.NODE_ENV !== "production" ? Pagination.propTypes = {
  total: _propTypes2.default.number,
  page: _propTypes2.default.number,
  numberOfRows: _propTypes2.default.number,
  rowsPerPage: _propTypes2.default.array,
  updateRows: _propTypes2.default.func
} : void 0;

exports.default = Pagination;
module.exports = exports['default'];