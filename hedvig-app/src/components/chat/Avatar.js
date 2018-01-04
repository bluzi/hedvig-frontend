import React from "react"
import { Animated, Image } from "react-native"
import { DangerZone } from "expo"
const { Lottie } = DangerZone

export class AnimatedAvatar extends React.Component {
  state = {
    progress: new Animated.Value(0)
  }

  play() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: this.props.avatar.duration,
      useNativeDriver: true
    }).start()
  }

  render() {
    if (this.props.avatar.data) {
      return (
        <Lottie
          ref={() => this.play()}
          style={{
            height: this.props.avatar.height,
            width: this.props.avatar.width,
            backgroundColor: "transparent"
          }}
          source={this.props.avatar.data}
          progress={this.state.progress}
        />
      )
    } else {
      return null
    }
  }
}

export class DefaultAvatar extends React.Component {
  render() {
    return (
      <Image
        style={{width: 50, height: 50}}
        source={require("../../../assets/app_icon.png")}
      />
    )
  }
}
