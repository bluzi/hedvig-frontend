import React from "react"
import { Text } from "react-native"
import Link from "../containers/Link"
import { Placeholder } from "./Styles"

export default class Dashboard extends React.Component {
  static navigationOptions = {
    title: "Dashboard"
  }

  render() {
    return (
      <Placeholder>
        <Text>Dashboard</Text>
        <Link to="Profile" title="My Profile" />
        <Link to="InventoryList" title="Inventory List" />
        <Link to="InsuranceList" title="Insurance List" />
        <Link to="Claim" title="Claim" />
        <Link to="SignBankid" title="Update insurance" />
      </Placeholder>
    )
  }
}