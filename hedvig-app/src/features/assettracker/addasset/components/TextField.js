import React from "react"
import { View, TextInput, StyleSheet, Image, Text } from "react-native"
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
  label: {

  },
  validIconContainer: {
    position: "absolute",
    right: 21
  },
  validIcon: {
    width: 24,
    height: 24
  }
})


const TextField = ({
  input,
  meta,
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
    { !meta.active && input.value ? (
      <Text style={styles.label}>
        Pryl
      </Text>
    ) : null}
    { !meta.active && meta.valid ? (
      <View style={styles.validIconContainer}>
        <Image
          source={require("../../../../../assets/icons/list_items/done_edit_list_item.png")}
          style={styles.validIcon}
        />
      </View>
    ) : null }
  </View>
)

TextField.propTypes = {
  // ...propTypes
}

export default TextField
