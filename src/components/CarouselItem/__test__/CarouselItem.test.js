import {cleanup, fireEvent, render} from '@testing-library/react';
import CarouselItem from '../index.js'
import renderer from 'react-test-renderer'

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

afterEach(cleanup)


    const url="assets/post/11.jpeg"

    it('Should render image correctly',()=>{
        const wrapper=shallow(
            <CarouselItem
            url={url}
            />
        )
    expect(wrapper).toMatchSnapshot()
    })
