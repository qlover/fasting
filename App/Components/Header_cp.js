import React, { Component } from "react";
import { View, Text } from "react-native";
import Ionicons from 'react-native-vector-icons/Feather'
import { StackHeaderProps } from '@react-navigation/stack'

export function Header(navigation: StackHeaderProps) {
  return (
    <View style={{ flexDirection: 'row', height: 50, backgroundColor: '#0D6ACB', paddingHorizontal: 20, justifyContent: 'space-between', alignItems: 'center' }}>
      <Ionicons name="menu" size={25} color="#fff" />
      <Text>标题</Text>
      <Text>头像</Text>
    </View>
  )
}