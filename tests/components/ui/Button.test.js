import React from 'react';
import { mount } from 'enzyme';
import Button from '../../../src/components/ui/Button';

describe('<Button />', () => {
  test('Render success', () => {
    const wrapper = mount(<Button>Example</Button>);

    expect(wrapper).toMatchSnapshot();
  });

  test('Test with default props', () => {
    const wrapper = mount(<Button>Example</Button>);
    const element = wrapper.find('.button');

    expect(element.type()).toBe('button');
    expect(element.text()).toBe('Example');
    expect(element.hasClass('button--contained-default')).toBe(true);
  });

  test('Test with props variant and color', () => {
    const wrapper = mount(
      <Button variant='outlined' color='primary'>
        Example
      </Button>
    );
    const element = wrapper.find('.button');

    expect(element.text()).toBe('Example');
    expect(element.hasClass('button--outlined-primary')).toBe(true);
  });

  test('Test with prop startIcon', () => {
    const wrapper = mount(<Button startIcon={<svg />}>Example</Button>);
    const element = wrapper.find('.button');

    expect(element.find('svg').exists()).toBe(true);
  });

  test('Test with prop endIcon', () => {
    const wrapper = mount(<Button endIcon={<svg />}>Example</Button>);
    const element = wrapper.find('.button');

    expect(element.find('svg').exists()).toBe(true);
  });

  test('Test with prop fullWidth', () => {
    const wrapper = mount(<Button fullWidth>Example</Button>);
    const element = wrapper.find('.button');

    expect(element.hasClass('button--full-width')).toBe(true);
  });

  test('Test with prop component', () => {
    const wrapper = mount(<Button component='a'>Example</Button>);
    const element = wrapper.find('.button');

    expect(element.type()).toBe('a');
  });

  test('Test with prop disabled', () => {
    const wrapper = mount(<Button disabled>Example</Button>);
    const element = wrapper.find('.button');
    const props = element.props();

    expect(element.hasClass('disabled')).toBe(true);
    expect(props.disabled).toBe(true);
  });
});
