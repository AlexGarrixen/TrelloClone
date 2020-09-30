import React from 'react';
import { mount } from 'enzyme';
import Card from '../../../src/components/ui/Card';

describe('<Card />', () => {
  test('Render Success', () => {
    const wrapper = mount(<Card>Example</Card>);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.card__picture').exists()).toBe(true);
    expect(wrapper.find('.card__title').exists()).toBe(true);
  });

  test('Test with default props', () => {
    const wrapper = mount(<Card>Example</Card>);
    const element = wrapper.find('.card');
    const elementPicture = wrapper.find('.card__picture');
    const elementTitle = wrapper.find('.card__picture');

    expect(element.text()).toBe('Example');
    expect(element.type()).toBe('article');
    expect(elementTitle.text()).toBe('');
    expect(elementPicture.props().style.backgroundImage).toBe(`url(undefined)`);
  });

  test('Test with prop component', () => {
    const wrapper = mount(<Card component='a'>Example</Card>);
    const element = wrapper.find('.card');

    expect(element.type()).toBe('a');
  });

  test('Test with prop picture', () => {
    const wrapper = mount(<Card picture='https://example.com'>Example</Card>);
    const elementPicture = wrapper.find('.card__picture');
    const backgroundImage = elementPicture.props().style.backgroundImage;

    expect(backgroundImage).toBe('url(https://example.com)');
  });

  test('Test with prop title', () => {
    const wrapper = mount(<Card title='Title example'>Example</Card>);
    const elementTitle = wrapper.find('.card__title');

    expect(elementTitle.text()).toBe('Title example');
  });
});
