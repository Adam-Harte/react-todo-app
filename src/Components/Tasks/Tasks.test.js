import React from 'react';

import Tasks from './Tasks';
import Task from './Task/Task';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<Tasks />', () => {
   let wrapper;

   beforeEach(() => {
      wrapper = shallow(<Tasks tasksList={[{id: 1, title: 'first', description: 'desc 1'}, {id: 2, title: 'second', description: 'desc 2'}]} />);
   });

   it('should render 2 Task components when the tasksList array has 2 elements', () => {
      expect(wrapper.find(Task)).toHaveLength(2);
   });
});