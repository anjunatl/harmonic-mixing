import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CamelotOutput from './CamelotOutput'

Enzyme.configure({ adapter: new Adapter() })

describe('Camelot output', () => {
  test('renders', () => {
    const wrapper = shallow(<CamelotOutput />)
    expect(wrapper.exists()).toBe(true)
  })

  test('shows empty div when no camelot key is set', () => {
    const wrapper = shallow(<CamelotOutput />)
    expect(wrapper.find("div.CamelotOutput.empty").length).toBe(1)
  })

  test('does not show the empty div when a camelot key is set', () => {
    const wrapper = shallow(<CamelotOutput camelotKey="12A" />)
    expect(wrapper.find("div.CamelotOutput.empty").length).toBe(0)
  })

  test('shows results table when a camelot key is set', () => {
    const wrapper = shallow(<CamelotOutput camelotKey="12A" />)
    expect(wrapper.find("div.CamelotOutput table").length).toBe(1)
  })

  test('has the expected number of results rows when a camelot key is set', () => {
    const wrapper = shallow(<CamelotOutput camelotKey="12A" />)
    expect(wrapper.find("tr.result").length).toBe(7)
  })
})
