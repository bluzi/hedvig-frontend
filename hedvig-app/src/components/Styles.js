import React from "react"
import styled from "styled-components/native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { Keyboard, Platform, Animated } from "react-native";

export const Placeholder = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: white;
  justify-content: center;
  align-items: center;
`

export const BaseViewStyle = styled.View`
  flex: 1;
  background-color: white;
`

export const BaseScrollViewStyle = styled.ScrollView`
  flex: 1;
  background-color: white;
`

export class StyledKeyboardAwareScrollView extends React.Component {
  state = {
    keyboardHeight: new Animated.Value(0)
  }

  constructor(props) {
    super(props)
    this.extraHeight = Platform.OS === "android" ? 10 : undefined
  }

  componentDidMount() {
    if (Platform.OS === "ios") {
      this.keyboardShow = Keyboard.addListener("keyboardWillShow", this._keyboardShowListener)
      this.keyboardHide = Keyboard.addListener("keyboardWillHide", this._keyboardHideListener)
    } else if (Platform.OS === "android") {
      this.keyboardShow = Keyboard.addListener("keyboardDidShow", this._keyboardShowListener)
      this.keyboardHide = Keyboard.addListener("keyboardDidHide", this._keyboardHideListener)
    }
  }

  componentWillUnmount() {
    this.keyboardShow.remove()
    this.keyboardHide.remove()
  }

  animateKeyboard = (toValue, duration) => {
    Animated.timing(
      this.state.keyboardHeight,
      {
        toValue,
        duration
      }
    ).start()
  }

  _keyboardShowListener = ({endCoordinates}) => {
    this.animateKeyboard(endCoordinates.height, 0)
    this.scroll.props.scrollToEnd()
  }

  _keyboardHideListener = () => {
    this.animateKeyboard(0, 300)
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={{
          backgroundColor: "white",
          flex: 1,
          borderRadius: 1,
          borderWidth: 1,
          borderColor: "red"
        }}
        enabledOnAndroid={true}
        extraHeight={this.extraHeight}
        innerRef={ref => this.scroll = ref}
      >
        <Animated.View style={{
          height: 100 - this.state.keyboardHeight,
          borderRadius: 1,
          borderWidth: 1,
          borderColor: "red"
        }}>
        {this.props.children}
        </Animated.View>
      </KeyboardAwareScrollView>
    )
  }
}

export const TextplainerStyle = styled.Text`
  border-style: solid;
  border-width: 1px;
  border-color: black;
  padding: 40px 20px;
  font-size: 30px;
  align-self: stretch;
  text-align: center;
  margin: 20px;
`
