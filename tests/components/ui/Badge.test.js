import React from 'react';
import { mount } from 'enzyme';
import Badge from '../../../src/components/ui/Badge';

describe('<Badge />', () => {
  test('Render Success', () => {
    const wrapper = mount(<Badge>badge</Badge>);

    expect(wrapper).toMatchSnapshot();
  });

  test('Test with props default', () => {
    const wrapper = mount(<Badge>badge</Badge>);
    const element = wrapper.find('.badge');

    expect(element.hasClass('badge badge--blue')).toBe(true);
    expect(element.type()).toBe('span');
    expect(element.text()).toBe('badge');
  });

  test('Test with prop component', () => {
    const wrapper = mount(<Badge component='article'>badge</Badge>);
    const element = wrapper.find('.badge');

    expect(element.type()).toBe('article');
  });

  test('Test with prop color', () => {
    const wrapper = mount(<Badge color='purple'>badge</Badge>);
    const element = wrapper.find('.badge');

    expect(element.hasClass('badge--purple')).toBe(true);
  });
});
