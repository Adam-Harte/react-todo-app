import React from 'react';

import Task from './Task';
import Button from '../../UI/Button/Button';
import Modal from '../../UI/Modal/Modal';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<Task />', () => {
   let wrapper;

   beforeEach(() => {
      wrapper = shallow(<Task data={{id: 1, title: 'first', description: 'desc 1'}} />);
   });

   it('should render one Button component when the delete prop is true', () => {
      wrapper.setProps({delete: true});
      expect(wrapper.find(Button)).toHaveLength(1);
   });

   it('should render three Button component when the complete, edit and delete props are true', () => {
      wrapper.setProps({complete: true, edit: true, delete: true});
      expect(wrapper.find(Button)).toHaveLength(3);
   });

   it('should render a Modal component when the editModal state is true', () => {
      wrapper.setState({editModal: true});
      expect(wrapper.find(Modal)).toHaveLength(1);
   });
});