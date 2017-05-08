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
          rowsPerPage: [5, 10, 15],
          rows: [],
          size: 5,
          page: 1,
          total: 37
          }
    }


    componentWillMount() {
      RowApi.getRows(this.state.size, this.state.page)
      .then((rows) => {
        this.setState({rows});
      });
    }

    //Render Content
    render(){
        return (
          <MuiThemeProvider>
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>Number</TableHeaderColumn>
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
                rowsPerPage={[5, 10, 15]}
                page={this.state.page}
                numberOfRows={this.state.size}
              />
            </Card>
          </MuiThemeProvider>
        );
    }
}

//Prop Type Validation
ExampleTable.propTypes = {

};

//Connect to Redux
export default ExampleTable;
