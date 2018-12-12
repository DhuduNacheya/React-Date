/* global describe, it, test, expect,jest */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import InputDate from './component/input';
import Enzyme, { shallow } from 'enzyme';
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
    const btn = wrapper.find('Button');
    expect(btn.length).toBe(1);
  });


  test(" Date handler test 1", () => {
    wrapper.instance().setState({
      startDate: null,
      startDateText: "From Date",
      startDateValid: true,
      endDate: null,
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "info"
    });
    expect(wrapper.instance().state.alert).toMatch("info");
    wrapper.instance().dateStateHandler(null, "startDate");
    expect(wrapper.instance().state.alert).toMatch("danger");


  });

  test("Date handler test  2", () => {
    wrapper.instance().setState({
      startDate: null,
      startDateText: "From Date",
      startDateValid: true,
      endDate: null,
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "info"
    });
    expect(wrapper.instance().state.alert).toMatch("info");
    wrapper.instance().dateStateHandler(null, "endDate");
    expect(wrapper.instance().state.alert).toMatch("danger");


  });
  test("Date handler test 3", () => {
    wrapper.instance().setState({
      startDate: null,
      startDateText: "From Date",
      startDateValid: true,
      endDate: null,
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "info"
    });
    expect(wrapper.instance().state.alert).toMatch("info");
    wrapper.instance().dateStateHandler(null, "endDate");
    expect(wrapper.instance().state.alert).toMatch("danger");


  });


  test("Date handler test 4", () => {
    wrapper.instance().setState({
      startDate: null,
      startDateText: "From Date",
      startDateValid: true,
      endDate: null,
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "info"
    });
    expect(wrapper.instance().state.alert).toMatch("info");
    wrapper.instance().dateStateHandler(new Date(), "endDate");
    expect(wrapper.instance().state.alert).toMatch("danger");


  });
  test("Date handler test 5", () => {
    wrapper.instance().setState({
      startDate: null,
      startDateText: "From Date",
      startDateValid: true,
      endDate: null,
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "info"
    });
    expect(wrapper.instance().state.alert).toMatch("info");
    wrapper.instance().dateStateHandler(new Date(), "startDate");
    expect(wrapper.instance().state.alert).toMatch("danger");


  });

  test("Date handler test 6", () => {
    wrapper.instance().setState({
      startDate: new Date(),
      startDateText: "From Date",
      startDateValid: true,
      endDate: null,
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "danger"
    });
    expect(wrapper.instance().state.alert).toMatch("danger");
    wrapper.instance().dateStateHandler(null, "startDate");
    expect(wrapper.instance().state.alert).toMatch("danger");
  });


  test("Date handler test 7", () => {
    wrapper.instance().setState({
      startDate: new Date(),
      startDateText: "From Date",
      startDateValid: true,
      endDate: null,
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "danger"
    });
    expect(wrapper.instance().state.alert).toMatch("danger");
    wrapper.instance().dateStateHandler(null, "endDate");
    expect(wrapper.instance().state.alert).toMatch("danger");
  });

  test("Date handler test 8", () => {
    wrapper.instance().setState({
      startDate: null,
      startDateText: "From Date",
      startDateValid: true,
      endDate: new Date(),
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "danger"
    });
    expect(wrapper.instance().state.alert).toMatch("danger");
    wrapper.instance().dateStateHandler(null, "startDate");
    expect(wrapper.instance().state.alert).toMatch("danger");
  });


  test("Date handler test 9", () => {
    wrapper.instance().setState({
      startDate: null,
      startDateText: "From Date",
      startDateValid: true,
      endDate: new Date(),
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "danger"
    });
    expect(wrapper.instance().state.alert).toMatch("danger");
    wrapper.instance().dateStateHandler(null, "endDate");
    expect(wrapper.instance().state.alert).toMatch("danger");
  });
  test("Date handler test 10", () => {
    wrapper.instance().setState({
      startDate: new Date(),
      startDateText: "From Date",
      startDateValid: true,
      endDate: null,
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "danger"
    });
    expect(wrapper.instance().state.alert).toMatch("danger");
    wrapper.instance().dateStateHandler(new Date(), "startDate");
    expect(wrapper.instance().state.alert).toMatch("danger");
  });


  test("Date handler test 11", () => {
    wrapper.instance().setState({
      startDate: new Date(),
      startDateText: "From Date",
      startDateValid: true,
      endDate: null,
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "danger"
    });
    expect(wrapper.instance().state.alert).toMatch("danger");
    wrapper.instance().dateStateHandler(new Date(), "endDate");
    expect(wrapper.instance().state.alert).toMatch("info");
  });

  test("Date handler test  12", () => {
    wrapper.instance().setState({
      startDate: null,
      startDateText: "From Date",
      startDateValid: true,
      endDate: new Date(),
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "danger"
    });
    expect(wrapper.instance().state.alert).toMatch("danger");
    wrapper.instance().dateStateHandler(new Date(), "startDate");
    expect(wrapper.instance().state.alert).toMatch("info");
  });


  test("Date handler test 13", () => {
    wrapper.instance().setState({
      startDate: null,
      startDateText: "From Date",
      startDateValid: true,
      endDate: new Date(),
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "danger"
    });
    expect(wrapper.instance().state.alert).toMatch("danger");
    wrapper.instance().dateStateHandler(new Date(), "endDate");
    expect(wrapper.instance().state.alert).toMatch("danger");
  });
  test("Date handler test 14", () => {
    wrapper.instance().setState({
      startDate: new Date(),
      startDateText: "From Date",
      startDateValid: true,
      endDate: new Date(),
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "info"
    });
    expect(wrapper.instance().state.alert).toMatch("info");
    wrapper.instance().dateStateHandler(new Date(), "endDate");
    expect(wrapper.instance().state.alert).toMatch("info");
  });

  test("Date handler test 15", () => {
    wrapper.instance().setState({
      startDate: new Date(),
      startDateText: "From Date",
      startDateValid: true,
      endDate: new Date(),
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "info"
    });
    expect(wrapper.instance().state.alert).toMatch("info");
    wrapper.instance().dateStateHandler(new Date(), "startDate");
    expect(wrapper.instance().state.alert).toMatch("info");
  });
  test("Date handler handler test", () => {
    wrapper.instance().setState({
      startDate: new Date(),
      startDateText: "From Date",
      startDateValid: true,
      endDate: new Date(),
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "info"
    });
    expect(wrapper.instance().state.alert).toMatch("info");
    wrapper.instance().dateStateHandler(null, "startDate");
    expect(wrapper.instance().state.alert).toMatch("danger");
  });
  test("Date handler test 16", () => {
    wrapper.instance().setState({
      startDate: new Date(),
      startDateText: "From Date",
      startDateValid: true,
      endDate: new Date(),
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "info"
    });
    expect(wrapper.instance().state.alert).toMatch("info");
    wrapper.instance().dateStateHandler(null, "endDate");
    expect(wrapper.instance().state.alert).toMatch("danger");
  });
  test("Date handler test  17", () => {
    wrapper.instance().setState({
      startDate: new Date(),
      startDateText: "From Date",
      startDateValid: true,
      endDate: new Date(),
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "info"
    });
    expect(wrapper.instance().state.alert).toMatch("info");
    wrapper.instance().dateStateHandler(null, "endDate");
    expect(wrapper.instance().state.alert).toMatch("danger");
  });


  test("Date handler test 18", () => {
    wrapper.instance().setState({
      startDate: new Date("12/12/2012"),
      startDateText: "From Date",
      startDateValid: true,
      endDate: new Date("12/12/2013"),
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "info"
    });
    expect(wrapper.instance().state.alert).toMatch("info");
    wrapper.instance().dateStateHandler(new Date("12/12/2013"), "endDate");
    expect(wrapper.instance().state.alert).toMatch("info");
  });
  test("Date handler test 19", () => {
    wrapper.instance().setState({
      startDate: new Date("12/12/2012"),
      startDateText: "From Date",
      startDateValid: true,
      endDate: new Date("12/12/2013"),
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "info"
    });
    expect(wrapper.instance().state.alert).toMatch("info");
    wrapper.instance().dateStateHandler(new Date("12/12/2011"), "startDate");
    expect(wrapper.instance().state.alert).toMatch("info");
  });


  test("Date handler test  20", () => {
    wrapper.instance().setState({
      startDate: new Date("12/12/2012"),
      startDateText: "From Date",
      startDateValid: true,
      endDate: new Date("12/12/2013"),
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "info"
    });
    expect(wrapper.instance().state.alert).toMatch("info");
    wrapper.instance().dateStateHandler(new Date("12/12/2014"), "startDate");
    expect(wrapper.instance().state.alert).toMatch("danger");
  });


  test("Date handler test 21", () => {
    wrapper.instance().setState({
      startDate: new Date("12/12/2012"),
      startDateText: "From Date",
      startDateValid: true,
      endDate: new Date("12/12/2013"),
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "info"
    });
    expect(wrapper.instance().state.alert).toMatch("info");
    wrapper.instance().dateStateHandler(new Date("12/12/2011"), "endDate");
    expect(wrapper.instance().state.alert).toMatch("danger");
  });
  test("Date handler test 22", () => {
    wrapper.instance().setState({
      startDate: new Date("12/12/2021"),
      startDateText: "From Date",
      startDateValid: true,
      endDate: new Date("12/12/2013"),
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "danger"
    });
    expect(wrapper.instance().state.alert).toMatch("danger");
    wrapper.instance().dateStateHandler(new Date("12/12/2011"), "endDate");
    expect(wrapper.instance().state.alert).toMatch("danger");
  });
  test("Date handler test 23", () => {
    wrapper.instance().setState({
      startDate: new Date("12/12/2021"),
      startDateText: "From Date",
      startDateValid: true,
      endDate: new Date("12/12/2013"),
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "danger"
    });
    expect(wrapper.instance().state.alert).toMatch("danger");
    wrapper.instance().dateStateHandler(new Date("12/12/2020"), "startDate");
    expect(wrapper.instance().state.alert).toMatch("danger");
  });

  test("Date handler test 24", () => {
    wrapper.instance().setState({
      startDate: new Date("12/12/2021"),
      startDateText: "From Date",
      startDateValid: true,
      endDate: new Date("12/12/2013"),
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "danger"
    });
    expect(wrapper.instance().state.alert).toMatch("danger");
    wrapper.instance().dateStateHandler(new Date("12/12/2010"), "startDate");
    expect(wrapper.instance().state.alert).toMatch("info");
  });

  test("Date handler test 25", () => {
    wrapper.instance().setState({
      startDate: new Date("12/12/2021"),
      startDateText: "From Date",
      startDateValid: true,
      endDate: new Date("12/12/2013"),
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "danger"
    });
    expect(wrapper.instance().state.alert).toMatch("danger");
    wrapper.instance().dateStateHandler(new Date("12/12/2028"), "endDate");
    expect(wrapper.instance().state.alert).toMatch("info");
  });

  test("Click handler test", () => {
    wrapper.instance().setState({
      startDate: new Date("12/12/2012"),
      startDateText: "From Date",
      startDateValid: true,
      endDate: new Date("12/12/2013"),
      endDateText: "To Date",
      endDateValid: true,
      disabled: true,
      message: "Please select to and from dates.",
      finalResult: null,
      alert: "info"
    });
    expect(wrapper.instance().state.message).toMatch("Please select to and from dates.");
    wrapper.instance().calculateHandler();
    expect(wrapper.instance().state.message).toBeNull();
  });

  test("button handler click", () => {
    const clickHandler = jest.fn();
    const butn = shallow(<btn onClick={clickHandler} />);
    butn.simulate('click');
    expect(clickHandler).toHaveBeenCalled();
  });

});

describe("Input Date", () => {
  const wrapper = shallow(<InputDate />);
  test("should render Input date", () => {
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  test(" Input date handler call", () => {
    const changeHandler = jest.fn();
    const pckr = wrapper.find('DatePicker');
    const pcWrpr = shallow(<pckr onChange={changeHandler} />);
    pcWrpr.simulate('change');
    expect(changeHandler).toHaveBeenCalled();
  });

});

