import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import Pagination from './Pagination';

class ExampleTable extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {

        };
    }

    //Render Content
    render(){
        return (
          <MuiThemeProvider>
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Status</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableRowColumn>1</TableRowColumn>
                    <TableRowColumn>John Smith</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>2</TableRowColumn>
                    <TableRowColumn>Randal White</TableRowColumn>
                    <TableRowColumn>Unemployed</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>3</TableRowColumn>
                    <TableRowColumn>Stephanie Sanders</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>4</TableRowColumn>
                    <TableRowColumn>Steve Brown</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
              <Divider />
              <Pagination
                total={1}
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
