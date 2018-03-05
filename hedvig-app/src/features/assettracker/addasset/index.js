/* global require */
/* eslint-disable no-console */
import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native"
import { ImagePicker } from "expo"
import { reduxForm, Field } from "redux-form"
import { NavigationActions } from "react-navigation"

import TextField from "./components/TextField"
import CurrencyField from "./components/CurrencyField"
import TransparentNavBar from "./components/TransparentNavbar";

const required = val => val ? undefined : 'required'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-start"
  },
  imageOrAddImageButtonsContainer: {
    paddingTop: 16,
    paddingBottom: 16,
    alignItems: "center",
    justifyContent: "center",
    height: 200
  },
  addImageIcon: {
    width: 56,
    height: 56,
  },
  image: {
    height: 200,
    alignSelf: "stretch",
    resizeMode: "cover",
  },
  formContainer: {
    justifyContent: "flex-start",
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#F1F3F7",
    height: 64,
    justifyContent: "center"
  },
  inputText: {
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "merriweather",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 24,
    color: "#F9FAFC"
  },
  uploadButton: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderRadius: 24,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderColor: "#651EFF",
  },
  uploadButtonText: {
    fontFamily: "circular",
    color: "#651EFF",
    fontSize: 16,
  },
})

class AddAsset extends React.Component {
  static propTypes = {
    imageUri: PropTypes.string,
    imageTaken: PropTypes.func.isRequired,
  }

  static defaultProps = {
    imageUri: undefined,
  }

  _addImage = async () => {
    const res = await ImagePicker.launchCameraAsync({
      aspect: [4, 3],
    })

    if (res.cancelled) {
      return
    }

    this.props.imageTaken(res.uri);
  }

  _upload = () => {
    console.log('Uploading...')
  }

  _focusNumberInput = () => {
    if (this._numberInput) {
      this._numberInput.focus()
    }
  }

  render() {
    const { imageUri, goBack } = this.props;
    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={32}
        style={styles.container}
      >
        <TransparentNavBar
          goBack={goBack}
        />
        <ScrollView>
          <View style={styles.imageOrAddImageButtonsContainer}>
            {imageUri ? (
              <Image
                source={{uri: imageUri}}
                style={styles.image}
                resizeMode="cover"
              />
            ) : (
                <TouchableOpacity onPress={this._addImage}>
                  <Image
                    source={require("../../../../assets/icons/choose_picture.png")}
                    style={styles.addImageIcon}
                  />
                </TouchableOpacity>
              )}
          </View>
          <View style={styles.formContainer}>
            <Field
              name="itemName"
              component={TextField}
              validate={required}
            />
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Select a date</Text>
            </View>
            <Field
              name="itemPrice"
              component={CurrencyField}
              validate={required}
            />
            <TouchableOpacity
              onPress={this._upload}
              style={styles.uploadButton}
            >
              <Text style={styles.uploadButtonText}>
                Spara
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}


export { AddAsset as AddAssetComponent }

export default reduxForm({ form: "addAsset" })(
connect(
  state => ({
    imageUri: state.addAsset.uri
  }),
  dispatch => ({
    imageTaken: uri => dispatch({type: "ADD_ASSET/SET_IMAGE_URI", payload: {uri}}),
    goBack: () => dispatch(NavigationActions.back())
  })
)(AddAsset))
