import {cleanup, fireEvent, render} from '@testing-library/react';
import DrawerNavigator from '../index.js'
import renderer from 'react-test-renderer'

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
afterEach(cleanup)
configure({adapter: new Adapter()});


it('Should render About page correctly',()=>{
    const wrapper=shallow(
        <DrawerNavigator/>
    )
    expect(wrapper).toMatchSnapshot()
})
