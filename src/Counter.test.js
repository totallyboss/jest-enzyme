import React from 'react';
import Counter from './Counter';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';


describe('<Counter />', () => {

  it('matches the snapshot', () => {
    const tree = renderer.create(<Counter />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should have the first be zero', () => {
    const wrapper = shallow(<Counter />);
    const count = wrapper.state().count;

    expect(count).toEqual(0);
  });

  it('should incrememnt the count when the button is clicked', () => {
    const wrapper = shallow(<Counter />);
    const incrementBtn = wrapper.find('button.increment');

    incrementBtn.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('1');
  });

  it('can decrement the count when the decrement button is clicked', () => {
    const wrapper = shallow(<Counter />);
    const decrementBtn = wrapper.find('button.decrement');

    decrementBtn.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('-1');
  });

});
