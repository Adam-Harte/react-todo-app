import React from 'react';
import Button from './Button';

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<Button />', () => {
   let wrapper;

   beforeEach(() => {
      wrapper = shallow(<Button />);
   });

   it('should render a button with the Submit class', () => {
      wrapper.setProps({btnType: 'Submit'});
      expect(wrapper.find('.Submit')).toHaveLength(1);
   });

   it('should render a button with the Cancel class', () => {
      wrapper.setProps({btnType: 'Cancel'});
      expect(wrapper.find('.Cancel')).toHaveLength(1);
   });
})