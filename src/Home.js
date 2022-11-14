import React from 'react'
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';

export default function Home() {

    const [loaded] = useFonts({
        Montserrat: require('../assets/Montserrat-Bold.otf'),
    });

    const playstoreUrl = "https://play.google.com/store/apps/developer?id=fortyoneapostrophes"
    const githubUrl = "https://github.com/pavankommi"
    const mailUrl = 'mailto:pavankommi0503@gmail.com'
    const instagramUrl = "https://www.instagram.com/pavankommi/"
    const linkedinUrl = "https://www.linkedin.com/in/pavankommi"

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.helloStyle}>Hi,</Text >
                <Text style={styles.textStyle}>I'm Pavan,</Text >
                <Text style={styles.textStyle}>React developer</Text >
            </View>
            <View style={styles.iconContainer}>
                <Ionicons onPress={() => Linking.openURL(playstoreUrl)} name="logo-google-playstore" size={24} color="white" />
                <AntDesign onPress={() => Linking.openURL(githubUrl)} name="github" size={24} color="white" />
                <Entypo onPress={() => Linking.openURL(mailUrl)} name="mail" size={26} color="white" />
                <Entypo onPress={() => Linking.openURL(instagramUrl)} name="instagram" size={24} color="white" />
                <AntDesign onPress={() => Linking.openURL(linkedinUrl)} name="linkedin-square" size={24} color="white" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
        paddingHorizontal: "10%"
    },
    textStyle: {
        fontFamily: 'Montserrat',
        fontSize: "7vw",
        color: "#ffffff",
    },
    helloStyle: {
        fontFamily: 'Montserrat',
        fontSize: "10vw",
        color: "#ffffff",
    },
    iconContainer: {
        flexDirection: "row",
        paddingVertical: 10,
        width: "205px",
        justifyContent: "space-between"
    }
});
