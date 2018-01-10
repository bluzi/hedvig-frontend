import React from "react"
import { Button, Text, Linking } from "react-native"

export const Link = ({ to, title, navigateTo }) => {
  return (
    <Button
      title={title}
      onPress={() => {
        navigateTo(to)
      }}
    />
  )
}

export const TextLink = ({ to, children }) => (
  <Text
    style={{
      color: "#555555",
      textDecorationLine: "underline",
      lineHeight: 24
    }}
    onPress={() => Linking.openURL(to)}
  >
    {children}
  </Text>
)

export const ClaimLink = ({ title, createClaimAndNavigateToChat }) => {
  return (
    <Button
      title={title}
      onPress={() => {
        createClaimAndNavigateToChat()
      }}
    />
  )
}
