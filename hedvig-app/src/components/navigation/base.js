import React from "react"
import { View } from "react-native"
import { StackNavigator } from "react-navigation"
import Dialog from "../../containers/Dialog"

import { FloatingChatButton } from "./floatingButtons"
import Chat from "../../containers/Chat"
import ChatModal from "../../containers/navigation/ChatModal"
import { Carousel } from "../Carousel"
import { MyTabNavigator } from "./tabs"
import AddAsset from "../../features/assettracker/addasset"
import Payment from "../../features/payment"

const HomeBaseNavigator = StackNavigator(
  {
    MyTabNavigator: {
      screen: MyTabNavigator
    },
    Carousel: {
      screen: Carousel
    },
    AddAsset: {
      screen: AddAsset
    },
    Payment: {
      screen: Payment
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
)

/*
NOTE: The order of the floating buttons vs the other components in the
ChatBase and HomeBase below affects whether the floating buttons are visible
on Android!
*/
const HomeBase = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <HomeBaseNavigator navigation={navigation}/>
      <FloatingChatButton />
      <Dialog />
    </View>
  )
}

HomeBase.router = HomeBaseNavigator.router

const ChatBase = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Chat navigation={navigation} />
      <Dialog />
    </View>
  )
}

const ChatModalNavigator = StackNavigator(
  {
    Chat: { screen: ChatBase },
    ChatModal: {
      screen: ChatModal
    },
    Carousel: {
      screen: Carousel
    },
    Payment: {
      screen: Payment
    }
  },
  {
    initialRouteName: "Chat",
    mode: "modal",
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
)

export { HomeBase, ChatModalNavigator }
