import React from 'react';
import PropTypes from 'prop-types';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
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

class TablePagination extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          page: this.props.page,
          rowsPerPage: this.props.rowsPerPage,
          rowsPerPageSelection: this.props.rowsPerPage[0],
          numberOfRows: this.props.numberOfRows,
          total: this.props.total
        };
        this.selectRowsPerPage = this.selectRowsPerPage.bind(this);
        this.selectPageNumber = this.selectPageNumber.bind(this);

        this.renderRowsPerPage = this.renderRowsPerPage.bind(this);
        this.renderRowRange = this.renderRowRange.bind(this);

        this.numberOfPages = this.numberOfPages.bind(this);
    }

    selectRowsPerPage(){
      this.setState({rowsPerPageSelection: parseInt(event.target.innerText)});
    }

    selectPageNumber(){
      this.setState({page: parseInt(event.target.innerText)});
    }

    numberOfPages(){
      let numArray = [];
      for(let i = 0; i < Math.ceil(this.state.total/15); i++){
        numArray.push(i+1);
      }
      return numArray.map(function(pageValue, index){
        return (
          <MenuItem key={index} value={pageValue} primaryText={pageValue}/>
        );
      });
    }

    renderRowsPerPage(){
      return this.state.rowsPerPage.map(function(rowValue, index){
        return (
          <MenuItem key={index} value={rowValue} primaryText={rowValue}/>
        );
      });
    }

    renderRowRange(){
      console.log(this.state);
    }

    render(){

      return (
          <div style={styles.paginationContainer}>

            <div style={styles.paginationSection}>
              <div style={styles.paginationText}>
              Page:
              </div>
              <SelectField
                  style={styles.paginationSelect}
                  value={this.state.page}
                  onChange={this.selectPageNumber}
              >
                {this.numberOfPages()}
              </SelectField>
            </div>

            <div style={styles.paginationSection}>
              <div style={styles.paginationText}>
                Rows Per Page:
              </div>
              <SelectField
              style={styles.paginationSelect}
              value={this.state.rowsPerPageSelection}
              onChange={this.selectRowsPerPage}
              >
                {this.renderRowsPerPage()}
              </SelectField>
            </div>

            <div style={styles.paginationSection}>
              <div style={styles.paginationText}>
                {this.renderRowRange()}  of {this.state.total}
              </div>
            </div>

            <div style={styles.paginationSection}>
              <ChevronLeft
                name={"navigationLeft"}
                />
              <ChevronRight
              />
            </div>
          </div>
        );
    }
}

TablePagination.defaultProps = {
  total: 0,
  page: 1,
  rowsPerPage: [15, 30, 45],
  numberOfRows: 10
};

TablePagination.propTypes = {
  total: PropTypes.number,
  page: PropTypes.number,
  numberOfRows: PropTypes.number,
  rowsPerPage: PropTypes.array
};

export default TablePagination;
