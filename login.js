import React, { Component } from 'react';
import { View, Text } from 'react-native';
export default class login extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 10, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontsize: 30 }}>Login screen</Text>
            </View>
        );
    }
}