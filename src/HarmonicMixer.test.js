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
    wrapper.find('button[camelotnumber=1]').simulate('click')
    wrapper.find('button[camelotletter="A"]').simulate('click')
    expect(wrapper.find('div.CamelotOutput.empty').length).toBe(0)
    expect(wrapper.find("div.CamelotOutput table tr.result").length).toBe(7)
    expect(wrapper.find("tr.mix-type--relative td.mix-type").text()).toBe("1B")
    expect(wrapper.find("tr.mix-type--relative td.mix-notation").text()).toBe("B maj")
    expect(wrapper.find("tr.mix-type--dominant td.mix-type").text()).toBe("2A")
    expect(wrapper.find("tr.mix-type--dominant td.mix-notation").text()).toBe("Eb min")
    expect(wrapper.find("tr.mix-type--subdominant td.mix-type").text()).toBe("12A")
    expect(wrapper.find("tr.mix-type--subdominant td.mix-notation").text()).toBe("Db min")
    expect(wrapper.find("tr.mix-type--parallel td.mix-type").text()).toBe("10B")
    expect(wrapper.find("tr.mix-type--parallel td.mix-notation").text()).toBe("D maj")
    expect(wrapper.find("tr.mix-type--diagonal td.mix-type").text()).toBe("12B")
    expect(wrapper.find("tr.mix-type--diagonal td.mix-notation").text()).toBe("E maj")
    expect(wrapper.find("tr.mix-type--gentleBoost td.mix-type").text()).toBe("8A")
    expect(wrapper.find("tr.mix-type--gentleBoost td.mix-notation").text()).toBe("A min")
    expect(wrapper.find("tr.mix-type--rapidBoost td.mix-type").text()).toBe("3A")
    expect(wrapper.find("tr.mix-type--rapidBoost td.mix-notation").text()).toBe("Bb min")
  })
})
