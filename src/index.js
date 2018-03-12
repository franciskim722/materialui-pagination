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

class Pagination extends React.Component {
    constructor(props, context) {
        super(props, context);


        this.selectRowsPerPage = this.selectRowsPerPage.bind(this);
        this.selectPageNumber = this.selectPageNumber.bind(this);

        this.renderRowsPerPage = this.renderRowsPerPage.bind(this);
        this.renderRowRange = this.renderRowRange.bind(this);

        this.numberOfPages = this.numberOfPages.bind(this);

        this.incrementPage = this.incrementPage.bind(this);
        this.decrementPage = this.decrementPage.bind(this);
    }


    selectRowsPerPage(e){
      const { page,total } = this.props;
      const { innerText } = e.target;
      const updatedState =  Object.assign({}, this.props);
      updatedState.numberOfRows = parseInt(innerText, 10);
      if( updatedState.numberOfRows * page > total ) {
        let updatedPage = Math.ceil(total / updatedState.numberOfRows, 10);
        updatedState.page = updatedPage;
        this.props.updateRows(updatedState);
      } else {
        this.props.updateRows(updatedState);
      }
    }

    selectPageNumber(e){
      const { innerText } = e.target;
      const updatedState =  Object.assign({}, this.props);
      updatedState.page = parseInt(innerText, 10);
      this.props.updateRows(updatedState);
    }

    numberOfPages(){
      const { total, numberOfRows } = this.props;
      let numArray = [];
      for(let i = 0; i < Math.ceil(total/numberOfRows); i++){
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
      const { rowsPerPage } = this.props;
      return rowsPerPage.map((rowValue, index) => {
        return (
          <MenuItem key={index} value={rowValue} primaryText={rowValue}/>
        );
      });
    }

    renderRowRange(){
      const { numberOfRows,page,total } = this.props;
      return (
        <span>
          {numberOfRows * page - numberOfRows + 1} - {numberOfRows * page < total ? numberOfRows * page : total}
        </span>
      );
    }

    render(){

      const { page,pageTitle,rowsPerPageTitle,prepositionForRowRange,numberOfRows,total } = this.props;

      return (
          <div style={styles.paginationContainer}>

            <div style={styles.paginationSection}>
              <div style={styles.paginationText}>
                {pageTitle}
              </div>
              <SelectField
                  style={styles.paginationSelect}
                  value={page}
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
              value={numberOfRows}
              onChange={this.selectRowsPerPage}
              >
                {this.renderRowsPerPage()}
              </SelectField>
            </div>

            <div style={styles.paginationSection}>
              <div style={styles.paginationText}>
                {this.renderRowRange()} {prepositionForRowRange} {total}
              </div>
            </div>

            <div style={styles.paginationSection}>
            <IconButton
            iconStyle={page <= 1 ?  styles.navigationLeftFirstPage : styles.navigationLeft}
            name={"navigationLeft"}
            disabled={page <= 1}
            onTouchTap={this.decrementPage}>
              <ChevronLeft
                />
              </IconButton>
              <IconButton
              iconStyle={page >= total / numberOfRows ? styles.navigationRightLastPage: styles.navigationRight}
              name={"navigationRight"}
              disabled={page >= total / numberOfRows}
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
