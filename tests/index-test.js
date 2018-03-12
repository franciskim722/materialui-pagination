import expect from 'expect';
import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
Enzyme.configure({ adapter: new Adapter() });

import Pagination from 'src/';

const updateRows = (mockState) => {
  const updatedState = Object.assign({}, mockState);
  const rows = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  let searchRange = rows.slice(updatedState.numberOfRows * updatedState.page - updatedState.numberOfRows, updatedState.numberOfRows * updatedState.page);

  updatedState.rows = searchRange;
  updatedState.total = rows.length;
  updatedState.numberOfRows = updatedState.numberOfRows;
  return updatedState;
};

const mockProps = {
  total: 0,
  page: 1,  
  rowsPerPage: [10, 20, 30],
  numberOfRows: 10,
  pageTitle: 'Page:',
  rowsPerPageTitle: 'Rows Per Page:',
  prepositionForRowRange: 'of',
  updateRows: updateRows,
};

describe('Component', () => {
  const wrapper = Enzyme.mount(
    <MuiThemeProvider>
      <Pagination
        {...mockProps}
      />
    </MuiThemeProvider>).children();

  it('Maps props / default props correctly', () => {
    expect(wrapper.props().total).toEqual(0);
    expect(wrapper.props().page).toEqual(1);
    expect(wrapper.props().numberOfRows).toEqual(10);
    expect(wrapper.props().rowsPerPage[0]).toEqual(10);
    expect(wrapper.props().rowsPerPage[1]).toEqual(20);
    expect(wrapper.props().rowsPerPage[2]).toEqual(30);
    expect(wrapper.props().pageTitle).toEqual('Page:');
    expect(wrapper.props().rowsPerPageTitle).toEqual('Rows Per Page:');
    expect(wrapper.props().prepositionForRowRange).toEqual('of');
  });

  it('Updates rows correctly', () => {
    const mockState = {
      rowsPerPage: [5,10,15],
      rows: [],
      numberOfRows: 5,
      page: 1,
      total: undefined
    };
    expect(wrapper.props().updateRows(mockState).total).toEqual(15);
  });
});
