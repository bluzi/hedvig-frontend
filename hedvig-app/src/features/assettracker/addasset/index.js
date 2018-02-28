/* global require */
/* eslint-disable no-console */
import React from "react"
import PropTypes from "prop-types"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from "react-native"
import { ImagePicker } from "expo"

import { NavBar } from "../../../components/NavBar"

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-start"
  },
  imageOrAddImageButtonsContainer: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  addImageIcon: {
    width: 56,
    height: 56,
  },
  formContainer: {
    flex: 4,
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

  render() {
    const { imageUri } = this.props;
    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={32}
        style={styleSheet.container}
      >
        <NavBar />
        <View style={styleSheet.imageOrAddImageButtonsContainer}>
          {imageUri ? (
            <Image source={imageUri} />
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
          <View style={styleSheet.textInputContainer}>
            <TextInput
              placeholder="Vad är det för pryl?"
              underlineColorAndroid="transparent"
              style={styleSheet.textInput}
            />
          </View>
          <View style={styleSheet.textInputContainer}>
            <TextInput
              placeholder="Vad köpte du den för?"
              underlineColorAndroid="transparent"
              style={styleSheet.textInput}
            />
          </View>
          <TouchableOpacity
            onPress={this._upload}
            style={styleSheet.uploadButton}
          >
            <Text style={styleSheet.uploadButtonText}>
              Spara
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

AddAsset.propTypes = {
}

AddAsset.defaultProps = {
}

export default AddAsset
