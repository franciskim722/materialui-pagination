# materialui-pagination

A simple pagination component for Material UI.

Based on [Material Design Data Table Guidelines](https://material.io/guidelines/components/data-tables.html#data-tables-structure).

![Demo](http://imgur.com/4dZkuEw.gif)

## Installation
```sh
$ npm install materialui-pagination
```

## Example
```js

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
  import Pagination from 'materialui-pagination';

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

  render(<ExampleTable />, document.querySelector('#app'))
```


## Pagination Properties

| Name | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| rowsPerPage | array | [10, 20, 30] | The number of rows to display per page. |
| numberOfRows | number | 10 | The selected number of rows to display. |
| page | number | 1 | The selected page number. |
| total | number | 0 | The total number of results in the dataset. |
| updateRows | function |  | Callback function fired when the rows array is updated. |
