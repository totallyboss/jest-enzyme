import React from 'react';
import Hello from './Hello';
import { shallow } from 'enzyme';

describe('<Hello/>', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Hello name="Joel" />);
    expect(wrapper.find('p').text()).toEqual('Hello Joel');
  });

  it('unless "unknown" if name prop is not passed', () => {
    const wrapper = shallow(<Hello/>);
    expect(wrapper.find('p').text()).toEqual('Hello Unknown');
  });
});
