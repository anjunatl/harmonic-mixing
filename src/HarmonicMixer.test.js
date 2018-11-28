import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import HarmonicMixer from './HarmonicMixer'

Enzyme.configure({ adapter: new Adapter() })

describe('Harmonic mixer', () => {
  test('renders', () => {
    const wrapper = mount(<HarmonicMixer />)
    expect(wrapper.exists()).toBe(true)
  })

  test('picking 1A will show the results for camelot key 1A', () => {
    const wrapper = mount(<HarmonicMixer />)
    wrapper.find('button[camelot-number=1]').simulate('click')
    wrapper.find('button[camelot-letter="A"]').simulate('click')
    expect(wrapper.find('div.CamelotOutput.empty').length).toBe(0)
    expect(wrapper.find("div.CamelotOutput table tr.result").length).toBe(7)
    expect(wrapper.find("tr.mix-type--relative td:last-child").text()).toBe("1B")
    expect(wrapper.find("tr.mix-type--dominant td:last-child").text()).toBe("2A")
    expect(wrapper.find("tr.mix-type--subdominant td:last-child").text()).toBe("12A")
    expect(wrapper.find("tr.mix-type--parallel td:last-child").text()).toBe("10B")
    expect(wrapper.find("tr.mix-type--diagonal td:last-child").text()).toBe("12B")
    expect(wrapper.find("tr.mix-type--gentleBoost td:last-child").text()).toBe("8A")
    expect(wrapper.find("tr.mix-type--rapidBoost td:last-child").text()).toBe("3A")
  })
})
