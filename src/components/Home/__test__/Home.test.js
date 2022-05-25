import {cleanup, fireEvent, render} from '@testing-library/react';
import Home from '../index'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'
afterEach(cleanup)


it('Should match snapshot',()=>{
    // const wrapper=shallow(<Home></Home>);

    const wrapper=renderer.create(<Home/>)
    let tree=wrapper.toJSON();
    expect(tree).toMatchSnapshot();
})

it('Should render without crashing',()=>{
    render(<Home/>)
})
