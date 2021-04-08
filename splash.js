import { Router, Route, Link } from './react-router';
import React, { Component } from 'react';
import { View, ImageBackground, Image } from 'react-native';
var bg = require('./img2.jpg');
var logo = require('./2993fd9c1cfd48d1ae0dba8726d57456.png');
export default class app extends Component {
    render() {
        return (
            <ImageBackground
                source={bg}
                style={{ height: '100%', width: '100%' }}>
                <View
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={logo}
                        style={{ height: 100, width: 100 }}>
                    </Image>

                </View>
            </ImageBackground>
        );
    }
}