import React from 'react';

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import Navbar from './Navbar';
import NavItem from '../NavItem/NavItem';

configure({adapter: new Adapter()});

describe('<Navbar />', () => {
   let wrapper;

   beforeEach(() => {
      wrapper = shallow(<Navbar />);
   })

   it('should render 2 NavItem components', () => {
      expect(wrapper.find(NavItem)).toHaveLength(2);
   });
});