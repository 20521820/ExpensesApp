import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";

import Onboarding from "react-native-onboarding-swiper";
import { View } from "react-native-web";

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View
        style={{
            width: 5,
            height: 5,
            marginHorizontal: 3,
            backgroundColor
        }}
        />
    )
}

const Skip = ({ ...props }) => {
    <Button
        title="Skip"
        color='#000000'
    />
}

const Next = ({ ...props }) => {
    <Button
        title='Next'
        color='#000000'
        {...props}
    />
}

const Done = ({ ...props }) => {
    <TouchableOpacity
        style={{ marginHorizontal: 8 }}
        {...props}
        >
        <Text style={{ fontSize: 16 }}>Done</Text>
    </TouchableOpacity>

}
const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dots}
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.navigate("Login")}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/logo.png')} />,
                    title: 'Welcome to Save Money',
                    subtitle: 'Take control of your money and save them by tracking your expenses',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/Onboarding-image-2.jpg')} />,
                    title: 'Save money with ease',
                    subtitle: 'Easily',
                },
            ]}
        />
    )
}

export default OnboardingScreen;