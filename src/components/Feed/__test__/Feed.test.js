import {cleanup, fireEvent, render} from '@testing-library/react';
import Feed from '../index.jsx'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({adapter: new Adapter()});

afterEach(cleanup)

export const Posts = [
    {
      id: 1,
      desc: "Love For All, Hatred For None.",
      photo: "assets/post/11.jpeg",
      date: "5 mins ago",
      isMissing:false,
      userId: 1,
      like: 32,
      comment: 9,
    },
    {
      id: 2,
      desc: "Love is dumb.",
      photo: "assets/post/12.jpeg",
      date: "5 mins ago",
      isMissing:false,
      userId: 1,
      like: 2222,
      comment: 2,
    },
    {
      id: 2,
      photo: "assets/post/2.jpeg",
      date: "15 mins ago",
      userId: 2,
      isMissing:false,
      like: 2,
      comment: 1,
    },
    {
      id: 3,
      desc: "Every moment is a fresh beginning.",
      photo: "assets/post/3.jpeg",
      date: "1 hour ago",
      userId: 3,
      isMissing:false,
      like: 61,
      comment: 2,
    },
    {
      id: 4,
      photo: "assets/post/4.jpeg",
      date: "4 hours ago",
      userId: 4,
      isMissing:false,
      like: 7,
      comment: 3,
    },
    {
      id: 5,
      photo: "assets/post/5.jpeg",
      date: "5 hours ago",
      isMissing:false,
      userId: 5,
      like: 23,
      comment: 5,
    },
    {
      id: 6,
      photo: "assets/post/6.jpeg",
      date: "1 day ago",
      userId: 6,
      isMissing:false,
      like: 44,
      comment: 6,
    },
    {
      id: 7,
      desc: "Never regret anything that made you smile.",
      photo: "assets/post/7.jpeg",
      date: "2 days ago",
      userId: 7,
      isMissing:false,
      like: 52,
      comment: 3,
    },
    {
      id: 8,
      photo: "assets/post/8.jpeg",
      date: "3 days ago",
      userId: 8,
      isMissing:false,
      like: 15,
      comment: 1,
    },
    {
      id: 9,
      desc: "Change the world by being yourself.",
      photo: "assets/post/9.jpeg",
      date: "5 days ago",
      isMissing:false,
      userId: 9,
      like: 11,
      comment: 2,
    },
    {
      id: 10,
      photo: "assets/post/10.jpeg",
      date: "1 week ago",
      userId: 10,
      isMissing:false,
      like: 104,
      comment: 12,
    },
  ];

it('should render Feed correctly',()=>{
    const wrapper=shallow(
    <Feed
    />)
    expect(wrapper).toMatchSnapshot()
})