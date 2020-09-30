import React from 'react';
import { mount } from 'enzyme';
import IconButton from '../../../src/components/ui/IconButton';

describe('<IconButton />', () => {
  test('Render success', () => {
    const wrapper = mount(
      <IconButton>
        <svg />
      </IconButton>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('svg').exists()).toBe(true);
  });

  test('Test with default props', () => {
    const wrapper = mount(
      <IconButton>
        <svg />
      </IconButton>
    );
    const element = wrapper.find('.icon-button');

    expect(element.type()).toBe('button');
    expect(element.find('svg').exists()).toBe(true);
    expect(element.hasClass('button--contained-default')).toBe(true);
  });

  test('Test with props variant and color', () => {
    const wrapper = mount(
      <IconButton variant='outlined' color='primary'>
        <svg />
      </IconButton>
    );
    const element = wrapper.find('.icon-button');

    expect(element.hasClass('button--outlined-primary')).toBe(true);
  });

  test('Test with prop component', () => {
    const wrapper = mount(
      <IconButton component='a'>
        <svg />
      </IconButton>
    );
    const element = wrapper.find('.icon-button');

    expect(element.type()).toBe('a');
  });
});
