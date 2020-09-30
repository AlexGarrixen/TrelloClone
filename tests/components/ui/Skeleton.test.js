import React from 'react';
import { mount } from 'enzyme';
import {
  Skeleton,
  SkeletonCol,
  SkeletonPicture,
  SkeletonRow,
} from '../../../src/components/ui/Skeleton';

describe('<Skeleton />', () => {
  test('Render sucess', () => {
    const wrapper = mount(<Skeleton />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.skeleton').exists()).toBe(true);
  });

  test('Test with prop spacing', () => {
    const wrapper = mount(<Skeleton spacing={3} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.skeleton').hasClass('space-3')).toBe(true);
  });
});

describe('<SkeletonPicture />', () => {
  test('Render sucess', () => {
    const wrapper = mount(<SkeletonPicture />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.skeleton__picture').exists()).toBe(true);
  });

  test('Test with prop cols', () => {
    const wrapper = mount(<SkeletonPicture cols={8} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.skeleton__picture').hasClass('col-8')).toBe(true);
  });
});

describe('<SkeletonRow />', () => {
  test('Render sucess', () => {
    const wrapper = mount(<SkeletonRow />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.skeleton__row').exists()).toBe(true);
  });
});

describe('<SkeletonCol />', () => {
  test('Render sucess', () => {
    const wrapper = mount(<SkeletonCol />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.skeleton__col').exists()).toBe(true);
  });

  test('Test with prop cols', () => {
    const wrapper = mount(<SkeletonCol cols={4} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.skeleton__col').hasClass('col-4')).toBe(true);
  });
});
