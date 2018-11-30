/* global describe, it, test, expect,jest */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import InputDate from './component/input';
import Enzyme,{ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe("App", () => {
  const wrapper = shallow(<App />);
  test("should render app", () => {
    expect(wrapper.getElements()).toMatchSnapshot();
  });
  
  test('start Date', () => {
  expect(wrapper.state().startDate).toEqual(null);
  });

  test("startDateText", () => {
    expect(wrapper.state().startDateText).toEqual("From Date");
  });

  test('end Date', () => {
     expect(wrapper.state().endDate).toEqual(null);
   });

  test('startDateValid', () => {
    expect(wrapper.state().startDateValid).toEqual(true);
    });
  
  test('endDateValid', () => {
      expect(wrapper.state().endDateValid).toEqual(true);
     });

  test('disabled', () => {
      expect(wrapper.state().disabled).toEqual(true);
    });

  test('message', () => {
      expect(wrapper.state().message).toEqual("Please select to and from dates.");
     });

  test('finalResult', () => {
      expect(wrapper.state().finalResult).toEqual(null);
      });

  test('alert', () => {
       expect(wrapper.state().alert).toEqual("info");
         });
      

   test("always renders a div", () => {
          const divs = wrapper.find(".App");
          expect(divs.length).toBeGreaterThan(0);
        });  
    
        
   test("always renders a button", () => {
      const btn=wrapper.find('Button');
          expect(btn.length).toBe(1);
      });
      
  test("button handler click", () => {
    const clickHandler = jest.fn();
     const butn=shallow(<btn onClick={clickHandler}/>);
      butn.simulate('click');
      expect(clickHandler).toHaveBeenCalled();
    });
  
});

describe("Input Date", () => {
  const wrapper = shallow(<InputDate/>);
  test("should render Input date", () => {
    expect(wrapper.getElements()).toMatchSnapshot();
  });
  
  test(" Input date handler call", () => {
    const changeHandler = jest.fn();
    const pckr=wrapper.find('DatePicker');
    const pcWrpr=shallow(<pckr onChange={changeHandler}/>);
    pcWrpr.simulate('change');
    expect(changeHandler).toHaveBeenCalled();
  });

});
  
