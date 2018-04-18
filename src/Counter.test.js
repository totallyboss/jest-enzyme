import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('<Counter />', () => {

  it('should have the first be zero', () => {
    const wrapper = shallow(<Counter />);
    const count = wrapper.state().count;

    expect(count).toEqual(0);
  });

});
