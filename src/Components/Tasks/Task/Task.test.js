import React from 'react';

import Task from './Task';
import Button from '../../UI/Button/Button';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<Task />', () => {
   let wrapper;

   beforeEach(() => {
      wrapper = shallow(<Task />);
   });

   it('should render one Button component when the delete prop is true', () => {
      wrapper.setProps({data: {id: 1, title: 'first', description: 'desc 1'}, delete: true});
      expect(wrapper.find(Button)).toHaveLength(1);
   });
});