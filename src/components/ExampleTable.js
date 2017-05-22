import React  from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import Pagination from './Pagination';

import RowApi from '../api/rows';

class ExampleTable extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
          rowsPerPage: [5,10,15],
          rows: [],
          numberOfRows: 5,
          page: 1,
          total: undefined
        };

          this.updateRows = this.updateRows.bind(this);
    }


    componentWillMount() {
      RowApi.getRows(this.state)
      .then((updatedState) => {
        this.setState(updatedState);
      });
    }

    updateRows(state){
      RowApi.getRows(state)
      .then((updatedState) => {
        this.setState(updatedState);
      });
    }

    render(){
        return (
          <MuiThemeProvider>
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>Fruit and Vegetables</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                {this.state.rows.map((row, index) => {
                    return (
                      <TableRow key={index}>
                        <TableRowColumn>{row}</TableRowColumn>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
              <Divider />
              <Pagination
                total={this.state.total}
                rowsPerPage={this.state.rowsPerPage}
                page={this.state.page}
                numberOfRows={this.state.numberOfRows}
                updateRows={this.updateRows}
              />
            </Card>
          </MuiThemeProvider>
        );
    }
}

export default ExampleTable;
