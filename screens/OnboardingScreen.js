import React from "react";
import { Image, TouchableOpacity, View, Text, StyleSheet} from "react-native";
import { Button } from "react-native-elements";

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

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
                    backgroundColor: '#ffffff',
                    image: <Image source={require('../assets/on-img1.png')} />,
                    title: 'TRACK INVESTMENTS',
                    subtitle: 'Cum sociis nanoque penatribus et magins dis parturient monter, nascetur ridiculus mus',
                    titleStyles: 'bold'
                },
                {
                    backgroundColor: '#ffffff',
                    image: <Image source={require('../assets/on-img2.jpg')} />,
                    title: 'SCHEDULE PAYMENT',
                    subtitle: 'Cum sociis nanoque penatribus et magins dis parturient monter, nascetur ridiculus mus',
                },
                {
                    backgroundColor: '#ffffff',
                    image: <Image source={require('../assets/on-img3.jpg')} />,
                    title: 'PAYMENT REMINDERS',
                    subtitle: 'Cum sociis nanoque penatribus et magins dis parturient monter, nascetur ridiculus mus',
                },
                {
                    backgroundColor: '#ffffff',
                    image: <Image source={require('../assets/img2.png')} />,
                    title: 'SPENDINGS CONTROL',
                    subtitle: 'Cum sociis nanoque penatribus et magins dis parturient monter, nascetur ridiculus mus',
                },
                {
                    backgroundColor: '#ffffff',
                    image: <Image source={require('../assets/on-img5.jpg')} />,
                    title: 'BUDGET CATEGORY',
                    subtitle: 'Cum sociis nanoque penatribus et magins dis parturient monter, nascetur ridiculus mus',
                },
                {
                    backgroundColor: '#ffffff',
                    image: <Image source={require('../assets/on-img6.jpg')} />,
                    title: 'BALANCED BUDGET',
                    subtitle: 'Cum sociis nanoque penatribus et magins dis parturient monter, nascetur ridiculus mus',
                }
            ]}
        />
    )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
  });