import React from 'react';
import { mount } from 'enzyme';
import ProgressBarBar from '../../../src/components/ui/ProgressBar';

describe('<ProgressBar />', () => {
  test('Render success', () => {
    const wrapper = mount(<ProgressBarBar />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.progress-bar').exists()).toBe(true);
    expect(wrapper.find('.progress-bar__bar').exists()).toBe(true);
  });

  test('Test with prop percentage', () => {
    const wrapper = mount(<ProgressBarBar percentage={70} />);
    const elementBar = wrapper.find('.progress-bar__bar');

    expect(elementBar.prop('style').width).toBe('70%');
  });
});
