import React from 'react';
import { mount } from 'enzyme';
import TextField from '../../../src/components/ui/TextField';

describe('<TextField />', () => {
  test('Render Success', () => {
    const wrapper = mount(<TextField />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.textfield').exists()).toBe(true);
  });

  test('Test with prop textArea', () => {
    const wrapper = mount(<TextField textArea />);
    const element = wrapper.find('.textfield');

    expect(element.type()).toBe('textarea');
  });

  test('Test with prop onChange', () => {
    const onChange = jest.fn();
    const wrapper = mount(<TextField onChange={onChange} />);
    const element = wrapper.find('input');

    element.simulate('change', { target: { value: 'test' } });

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith(expect.any(Object));
  });

  test('Test with prop value', () => {
    const wrapper = mount(<TextField value='test' onChange={() => {}} />);
    const element = wrapper.find('input');

    expect(element.prop('value')).toBe('test');
  });

  test('Test with prop fullWidth', () => {
    const wrapper = mount(<TextField fullWidth />);
    const element = wrapper.find('input');

    expect(element.hasClass('w-full')).toBe(true);
  });
});
