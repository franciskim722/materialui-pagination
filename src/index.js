import React from 'react';
import PropTypes from 'prop-types';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import IconButton from 'material-ui/IconButton';

import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const styles = {
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
    fontSize: '1em',
    position: 'relative'
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

class Pagination extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.renderRowsPerPage = this.renderRowsPerPage.bind(this);
    this.renderRowRange = this.renderRowRange.bind(this);

    this.numberOfPages = this.numberOfPages.bind(this);

    this.incrementPage = this.incrementPage.bind(this);
    this.decrementPage = this.decrementPage.bind(this);
  }


  selectRowsPerPage(event, index, value){
    const updatedState =  Object.assign({}, this.props);
    updatedState.numberOfRows = parseInt(value);
    if( updatedState.numberOfRows * this.props.page > this.props.total ) {
      updatedState.page = Math.ceil(this.props.total / updatedState.numberOfRows);
      this.props.updateRows(updatedState);
    } else {
      this.props.updateRows(updatedState);
    }
  }

  selectPageNumber(event, index, value){
    const updatedState =  Object.assign({}, this.props);
    updatedState.page = parseInt(value);
    this.props.updateRows(updatedState);
  }

  numberOfPages(){
    let numArray = [];
    for(let i = 0; i < Math.ceil(this.props.total/this.props.numberOfRows); i++){
      numArray.push(i+1);
    }

    return numArray.map((pageValue, index) => {
      return (
        <MenuItem key={index} value={pageValue} primaryText={pageValue}/>
      );
    });
  }

  incrementPage(){
    let updatedState = Object.assign({}, this.props);
    updatedState.page++;
    this.props.updateRows(updatedState);
  }

  decrementPage(){
    let updatedState = Object.assign({}, this.props);
    updatedState.page--;
    this.props.updateRows(updatedState);
  }

  renderRowsPerPage(){
    return this.props.rowsPerPage.map((rowValue, index) => {
      return (
        <MenuItem key={index} value={rowValue} primaryText={rowValue}/>
      );
    });
  }

  renderRowRange(){
    return (
      <span>
          {this.props.numberOfRows * this.props.page - this.props.numberOfRows + 1} - {this.props.numberOfRows * this.props.page < this.props.total ? this.props.numberOfRows * this.props.page : this.props.total}
        </span>
    );
  }

  render(){

    const { pageTitle, rowsPerPageTitle, prepositionForRowRange } = this.props;

    return (
      <div style={styles.paginationContainer}>

        <div style={styles.paginationSection}>
          <div style={styles.paginationText}>
            {pageTitle}
          </div>
          <SelectField
            style={styles.paginationSelect}
            value={this.props.page}
            onChange={this.selectPageNumber}
          >
            {this.props.total === 1 ? null : this.numberOfPages()}
          </SelectField>
        </div>

        <div style={styles.paginationSection}>
          <div style={styles.paginationText}>
            {rowsPerPageTitle}
          </div>
          <SelectField
            style={styles.paginationSelect}
            value={this.props.numberOfRows}
            onChange={this.selectRowsPerPage}
          >
            {this.renderRowsPerPage()}
          </SelectField>
        </div>

        <div style={styles.paginationSection}>
          <div style={styles.paginationText}>
            {this.renderRowRange()} {prepositionForRowRange} {this.props.total}
          </div>
        </div>

        <div style={styles.paginationSection}>
          <IconButton
            iconStyle={this.props.page <= 1 ?  styles.navigationLeftFirstPage : styles.navigationLeft}
            name={"navigationLeft"}
            disabled={this.props.page <= 1}
            onTouchTap={this.decrementPage}>
            <ChevronLeft
            />
          </IconButton>
          <IconButton
            iconStyle={this.props.page >= this.props.total / this.props.numberOfRows ? styles.navigationRightLastPage: styles.navigationRight}
            name={"navigationRight"}
            disabled={this.props.page >= this.props.total / this.props.numberOfRows}
            onTouchTap={this.incrementPage}>
            <ChevronRight
            />
          </IconButton>
        </div>
      </div>
    );
  }
}

Pagination.defaultProps = {
  total: 0,
  page: 1,
  rowsPerPage: [10, 20, 30],
  numberOfRows: 10,
  pageTitle: 'Page:',
  rowsPerPageTitle: 'Rows Per Page:',
  prepositionForRowRange: 'of'
};

Pagination.propTypes = {
  total: PropTypes.number,
  page: PropTypes.number,
  numberOfRows: PropTypes.number,
  rowsPerPage: PropTypes.array,
  updateRows: PropTypes.func,
  pageTitle: PropTypes.string,
  rowsPerPageTitle: PropTypes.string,
  prepositionForRowRange: PropTypes.string
};

export default Pagination;
