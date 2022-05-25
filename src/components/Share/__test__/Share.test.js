import {cleanup, fireEvent, render} from '@testing-library/react';
import Share from '../index'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

afterEach(cleanup)

it('should render Share correctly',()=>{
    const wrapper=shallow(
        <Share/>
    )
    expect(wrapper).toMatchSnapshot()
})