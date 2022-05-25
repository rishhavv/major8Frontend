import {cleanup, fireEvent, render} from '@testing-library/react';
import Adopt from '../index.js'

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
afterEach(cleanup)

configure({adapter: new Adapter()});

// it('Should render Adopt page correctly',()=>{
//     const wrapper=shallow(
//         <Adopt/>
//     )
//     expect(wrapper).toMatchSnapshot()
// })