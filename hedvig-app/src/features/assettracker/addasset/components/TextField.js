import React from "react"
import { View, TextInput, StyleSheet } from "react-native"
import { propTypes } from "redux-form"

const styles = StyleSheet.create({
  textInputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#F1F3F7",
    height: 64,
    justifyContent: "center"
  },
  textInput: {
    height: 40,
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "merriweather",
    alignItems: "center",
    marginHorizontal: 24
  },
})


const TextField = ({
  input,
  onNext,
  ...props
}) => (
  <View style={styles.textInputContainer}>
    <TextInput
      {...props}
      onChangeText={input.onChange}
      onBlur={input.onBlur}
      onFocus={input.onFocus}
      value={input.value}
      placeholder="Vad är det för pryl?"
      underlineColorAndroid="transparent"
      style={styles.textInput}
      onSubmitEditing={onNext}
      returnKeyType="next"
    />
  </View>
)

TextField.propTypes = {
  ...propTypes
}

export default TextField
