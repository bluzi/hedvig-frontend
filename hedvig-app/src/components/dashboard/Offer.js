import React from "react"
import { View } from "react-native"
import Dashboard from "../../containers/dashboard/Dashboard"
import { NavBar } from "../NavBar"
import {
  StyledCtaArea,
  StyledPriceText,
  StyledPriceComment,
  StyledButtonContainer
} from "../styles/offer"
import {
  TurquoiseRoundedInvertedButton,
  RoundedTransparentButton,
  NavigateBackButton
} from "../Button"
import { theme } from "hedvig-style"

class Offer extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignSelf: "stretch" }}>
        <NavBar
          headerLeft={
            <NavigateBackButton
              onPress={() => this.props.navigation.goBack()}
            />
          }
        />
        <Dashboard />
        <StyledCtaArea
          source={require("../../../assets/bgs/gradient-white-rectangle.png")}
          resizeMode="stretch"
        >
          <StyledPriceText>{this.props.newTotalPrice} kr/mån</StyledPriceText>
          <StyledPriceComment>Ingen bidningstid</StyledPriceComment>
          <StyledButtonContainer>
            <TurquoiseRoundedInvertedButton title="Byt till Hedvig" />
          </StyledButtonContainer>
          <StyledButtonContainer>
            <RoundedTransparentButton title="Jag har en fråga" />
          </StyledButtonContainer>
        </StyledCtaArea>
      </View>
    )
  }
}

export default Offer