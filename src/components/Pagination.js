import React, {PropTypes} from 'react';
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
        console.log(this.props);

        this.state = {
          pageNumber: 1,
          rowsPerPage: this.props.rowsPerPage,

        };

        this.updateSelectField = this.updateSelectField.bind(this);

        this.numberOfPages = this.numberOfPages.bind(this);
    }

    updateRowsPerPage(){
      console.log("Updating the selectfield");
      console.log(event.target);
      console.log(event);
    }

    updatePageNumber(){

    }
    numberOfPages(total){
      console.log(total);
      let numArray = [];
      for(let i = 0; i < Math.ceil(total/15); i++){
        numArray.push(i+1);
      }
      console.log(numArray);

      return numArray.map(function(pageValue, index){
        console.log(pageValue);
        return (
          <MenuItem key={index} id={"something"} value={pageValue} primaryText={pageValue}/>
        );
      });


    }

    rowsPerPage(rowsPerPage){
      return rowsPerPage.map(function(rowValue, index){
        return (
          <MenuItem key={index} value={rowValue} primaryText={rowValue}/>
        );
      });
    }

    render(){
      const {total, rowsPerPage} = this.props;

        return (
          <div style={styles.paginationContainer}>

            <div style={styles.paginationSection}>
              <div style={styles.paginationText}>
              Page:
              </div>
              <SelectField
                  style={styles.paginationSelect}
                  value={this.state.pageNumber}
                  onChange={this.updateSelectField}
              >
                {this.numberOfPages(total)}
              </SelectField>
            </div>


            <div style={styles.paginationSection}>
              <div style={styles.paginationText}>
                Rows Per Page:
              </div>
              <SelectField
              style={styles.paginationSelect}
              value={rowsPerPage[0]}
              onChange={this.updateSelectField}
              >
                {this.rowsPerPage(rowsPerPage)}
              </SelectField>
            </div>

            <div style={styles.paginationSection}>
              <div style={styles.paginationText}>
                1 - 15 of {total}
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
  rowsPerPage: [10, 20, 30]
};

TablePagination.propTypes = {
  total: PropTypes.number,
  rowsPerPage: PropTypes.array,
  updateSelectField: PropTypes.func,
  numberOfPages: PropTypes.func
};

export default TablePagination;
