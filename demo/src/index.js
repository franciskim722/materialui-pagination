//React
import React  from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';

//Material UI Dependency for touch / tap / click events
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

//Import the pagination component
import Pagination from '../../src';

//Demo API to simulate async actions
import RowApi from './api/rows';

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
      const {rows, total, rowsPerPage, page, numberOfRows} = this.state;
        return (
          <MuiThemeProvider>
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>Row Number</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                {rows.map((row, index) => {
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
                total={total}
                rowsPerPage={rowsPerPage}
                page={page}
                numberOfRows={numberOfRows}
                updateRows={this.updateRows}
              />
            </Card>
          </MuiThemeProvider>
        );
    }
}

render(<ExampleTable />, document.querySelector('#demo'));
