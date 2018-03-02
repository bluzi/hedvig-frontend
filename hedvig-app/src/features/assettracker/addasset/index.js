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

const styleSheet = StyleSheet.create({
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
        style={styleSheet.container}
      >
        <TransparentNavBar
          goBack={goBack}
        />
        <ScrollView>
          <View style={styleSheet.imageOrAddImageButtonsContainer}>
            {imageUri ? (
              <Image
                source={{uri: imageUri}}
                style={styleSheet.image}
                resizeMode="cover"
              />
            ) : (
                <TouchableOpacity onPress={this._addImage}>
                  <Image
                    source={require("../../../../assets/icons/choose_picture.png")}
                    style={styleSheet.addImageIcon}
                  />
                </TouchableOpacity>
              )}
          </View>
          <View style={styleSheet.formContainer}>
            <Field
              name="itemName"
              component={TextField}
              validate={required}
            />
            <Field
              name="itemPrice"
              component={CurrencyField}
              validate={required}
            />
            <TouchableOpacity
              onPress={this._upload}
              style={styleSheet.uploadButton}
            >
              <Text style={styleSheet.uploadButtonText}>
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
