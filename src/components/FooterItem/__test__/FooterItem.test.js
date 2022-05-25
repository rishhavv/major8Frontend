import {cleanup, fireEvent, render} from '@testing-library/react';
import FooterItem from '../index'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

afterEach(cleanup)
const Company=[
    {
        value:'About',
        link:'about'
    },
    {
        value:'Legal',
        link:''
    },
    {
        value:'Privacy Policy',
        link:''
    },
    {
        value:'Terms Of Service',
        link:''
    },
    {
        value:'Contact Us',
        link:''
    },

]
it('should render footer correctly',()=>{
    const wrapper=shallow(
        <FooterItem
        title='Company'
        data={Company}
        />
    )

    expect(wrapper).toMatchSnapshot()
})