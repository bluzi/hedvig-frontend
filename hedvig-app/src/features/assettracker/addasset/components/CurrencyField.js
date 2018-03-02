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

const presentValue = (value, active) => {
  if (!value || active) {
    return value
  }

  return `${value} kr`
}

const CurrencyField = ({
  input,
  meta,
  onSubmit,
  ...props
}) => (
  <View style={styles.textInputContainer}>
    <TextInput
      {...props}
      onChangeText={input.onChange}
      onBlur={input.onBlur}
      onFocus={input.onFocus}
      value={presentValue(input.value, meta.active)}
      placeholder="Vad köpte du den för?"
      underlineColorAndroid="transparent"
      style={styles.textInput}
      onSubmitEditing={onSubmit}
      returnKeyType="done"
      keyboardType="numeric"
    />
  </View>
)

CurrencyField.propTypes = {
  // ...propTypes
}

export default CurrencyField
