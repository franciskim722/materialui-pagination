import expect from 'expect';
import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
Enzyme.configure({ adapter: new Adapter() });

import Pagination from 'src/';

const mockProps = {
  total: 0,
  page: 1,
  rowsPerPage: [10, 20, 30],
  numberOfRows: 10,
  pageTitle: 'Page:',
  rowsPerPageTitle: 'Rows Per Page:',
  prepositionForRowRange: 'of',
  updateRows: () => {return "Update Rows"}
};

describe('Component', () => {
  const wrapper = Enzyme.mount(
    <MuiThemeProvider>
      <Pagination
        {...mockProps}
      />
    </MuiThemeProvider>).children();
  it('Maps props and default props correctly', () => {
    console.log()
    expect(wrapper.props().total).toEqual(0);
    expect(wrapper.props().page).toEqual(1);
    expect(wrapper.props().numberOfRows).toEqual(10);
    expect(wrapper.props().pageTitle).toEqual('Page:');
    expect(wrapper.props().rowsPerPageTitle).toEqual('Rows Per Page:');
    expect(wrapper.props().prepositionForRowRange).toEqual('of');
    expect(wrapper.props().updateRows()).toEqual("Update Rows");
  });
});
