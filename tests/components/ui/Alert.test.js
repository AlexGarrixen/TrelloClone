import React from 'react';
import Alert from '../../../src/components/ui/Alert';
import { mount } from 'enzyme';

describe('<Alert />', () => {
  test('Render success', () => {
    const wrapper = mount(<Alert>Success</Alert>);
    const alertMessage = wrapper.find('.alert__message');
    const svgElement = wrapper.find('svg');

    expect(wrapper).toMatchSnapshot();
    expect(svgElement.exists()).toBe(true);
    expect(alertMessage.exists()).toBe(true);
    expect(alertMessage.text()).toBe('Success');
  });

  test('Render with prop severity:default', () => {
    const wrapper = mount(<Alert>Success</Alert>);
    const wrapperDiv = wrapper.find('div').at(0);
    const alertMessage = wrapper.find('.alert__message');

    expect(wrapperDiv.hasClass('alert alert--success')).toBe(true);
    expect(alertMessage.exists()).toBe(true);
    expect(alertMessage.text()).toBe('Success');
  });

  test('Render with prop severity:error', () => {
    const wrapper = mount(<Alert severity='error'>Error</Alert>);
    const wrapperDiv = wrapper.find('div').at(0);
    const alertMessage = wrapper.find('.alert__message');

    expect(wrapperDiv.hasClass('alert alert--error')).toBe(true);
    expect(alertMessage.exists()).toBe(true);
    expect(alertMessage.text()).toBe('Error');
  });

  test('Render with prop severity:info', () => {
    const wrapper = mount(<Alert severity='info'>Info</Alert>);
    const wrapperDiv = wrapper.find('div').at(0);
    const alertMessage = wrapper.find('.alert__message');

    expect(wrapperDiv.hasClass('alert alert--info')).toBe(true);
    expect(alertMessage.exists()).toBe(true);
    expect(alertMessage.text()).toBe('Info');
  });

  test('Render with prop severity:warning', () => {
    const wrapper = mount(<Alert severity='warning'>Warning</Alert>);
    const wrapperDiv = wrapper.find('div').at(0);
    const alertMessage = wrapper.find('.alert__message');

    expect(wrapperDiv.hasClass('alert alert--warning')).toBe(true);
    expect(alertMessage.exists()).toBe(true);
    expect(alertMessage.text()).toBe('Warning');
  });
});
