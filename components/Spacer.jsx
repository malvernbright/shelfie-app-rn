import { Text, View } from 'react-native'
import React, { Component } from 'react'

const Spacer = ({ width = '100%', height = 40 }) => {
    return (
        <View style={{ width, height }} />
    )
}

export default Spacer