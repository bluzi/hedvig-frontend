import React from "react"
import PropTypes from "prop-types"
import { View, StyleSheet, TouchableOpacity, Image } from "react-native"

const styles = StyleSheet.create({
  bar: {
    height: 64,
    backgroundColor: "transparent",
    position: "absolute",
    paddingTop: 24,
    paddingLeft: 18,
    zIndex: 10
  },
  backButton: {
    height: 24,
    width: 24,
  }
})

const TransparentNavBar = ({goBack}) => (
  <View style={styles.bar}>
    <TouchableOpacity
      onPress={goBack}
      hitSlop={{top: 20, right: 20, bottom: 20, left: 20}}
    >
      <Image
        source={require("../../../../../assets/icons/navigate_back.png")}
      />
    </TouchableOpacity>
  </View>
)

TransparentNavBar.propTypes = {
  goBack: PropTypes.func.isRequired,
}

export default TransparentNavBar
