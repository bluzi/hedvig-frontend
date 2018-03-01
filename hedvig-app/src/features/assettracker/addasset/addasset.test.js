import React from "react"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"

import { AddAssetComponent as AddAsset } from "."

describe('<AddAsset />', () => {
  it('Should render correctly', () => {
    const component = shallow(<AddAsset />)

    expect(toJson(component)).toMatchSnapshot()
  })
})
