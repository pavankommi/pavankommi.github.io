import React from 'react'
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, Linking, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';

export default function Home() {

    const [loaded] = useFonts({
        Montserrat: require('../assets/Montserrat-Bold.otf'),
    });

    const secondaryTextColor = "#808080"

    const playstoreUrl = "https://play.google.com/store/apps/developer?id=fortyoneapostrophes"
    const githubUrl = "https://github.com/pavankommi"
    const mailUrl = 'mailto:pavankommi0503@gmail.com'
    const instagramUrl = "https://www.instagram.com/pavankommi/"
    const linkedinUrl = "https://www.linkedin.com/in/pavankommi"

    if (!loaded) {
        return null;
    }

    return (
        <ScrollView style={styles.container}>

            {/* main */}
            <View style={styles.subContainer}>
                <Text style={styles.mainHeader}>Hi, I'm Pavan</Text >
                <Text style={styles.textStyle}>I'm a software developer,</Text >
                <Text style={styles.textStyle}>My goal is to build beautiful web experiences with passionate people. If you wish to reach out, find me online.</Text >
            </View>

            {/* icons */}
            <View style={styles.iconContainer}>
                <Ionicons onPress={() => Linking.openURL(playstoreUrl)} name="logo-google-playstore" size={24} color="white" />
                <AntDesign onPress={() => Linking.openURL(githubUrl)} name="github" size={24} color="white" />
                <Entypo onPress={() => Linking.openURL(mailUrl)} name="mail" size={26} color="white" />
                <Entypo onPress={() => Linking.openURL(instagramUrl)} name="instagram" size={24} color="white" />
                <AntDesign onPress={() => Linking.openURL(linkedinUrl)} name="linkedin-square" size={24} color="white" />
            </View>

            {/* experience */}
            <View style={styles.subContainer}>
                <Text style={styles.subHeader}>Experience</Text >

                <View style={{ paddingBottom: 10 }}>
                    <Text style={styles.textStyle}>Software Engineer</Text >
                    <View style={styles.rowContainer}>
                        <Text style={[styles.textStyle, { color: secondaryTextColor }]}>Alpha Clinical Systems</Text >
                        <Text style={[styles.textStyle, { color: secondaryTextColor }]}>6/21 - 6/22</Text >
                    </View>
                    <Text style={[styles.textStyle, { color: secondaryTextColor }]}>Developed and enhanced modern software applications, the majority of which are utilised in clinical trials, using React Js and React Native.</Text >
                </View>

                <View >
                    <Text style={styles.textStyle}>Mobile App Developer Trainee</Text >
                    <View style={styles.rowContainer}>
                        <Text style={[styles.textStyle, { color: secondaryTextColor }]}>3Edge Solutions</Text >
                        <Text style={[styles.textStyle, { color: secondaryTextColor }]}>2/21 - 5/21</Text >
                    </View>
                    <Text style={[styles.textStyle, { color: secondaryTextColor }]}>Open Recruiter, an existing web application, was converted into a mobile application with additional functionalities using React Native.</Text >
                </View>

            </View>

            {/* projects */}
            <View style={styles.subContainer}>
                <Text style={styles.subHeader}>Projects</Text >

                <View style={{ paddingBottom: 10 }}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.textStyle}>Note Down.</Text >
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <TouchableOpacity style={styles.sourceButton} onPress={() => Linking.openURL('https://github.com/pavankommi/note_down')}>
                                <Text style={[styles.textStyle, { color: secondaryTextColor }]}>source</Text >
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.liveButton} onPress={() => Linking.openURL('https://play.google.com/store/apps/developer?id=fortyoneapostrophes')}>
                                <Text style={[styles.textStyle, { color: secondaryTextColor }]}>live</Text >
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={[styles.textStyle, { color: secondaryTextColor }]}>An android application that performs user authentication and CRUD operations with Firebase.</Text >
                </View>

                <View style={{ paddingBottom: 10 }}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.textStyle}>expo-filedownload</Text >
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <TouchableOpacity style={styles.sourceButton} onPress={() => Linking.openURL('https://github.com/pavankommi/expo-filedownload')}>
                                <Text style={[styles.textStyle, { color: secondaryTextColor }]}>source</Text >
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.liveButton} onPress={() => Linking.openURL('https://www.npmjs.com/package/expo-filedownload')}>
                                <Text style={[styles.textStyle, { color: secondaryTextColor }]}>live</Text >
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={[styles.textStyle, { color: secondaryTextColor }]}>An Expo React Native package that makes it easy to download and save files to your mobile device's local storage. Currently supported formats include png, jpg, pdf, mp3, mp4, and more.</Text >
                </View>

                <View style={{ paddingBottom: 10 }}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.textStyle}>99* Cricket Scorer</Text >
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <TouchableOpacity style={styles.sourceButton} onPress={() => Linking.openURL('https://github.com/pavankommi/99_notout_cricket_scorer')}>
                                <Text style={[styles.textStyle, { color: secondaryTextColor }]}>source</Text >
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.liveButton} onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.fourone.ninetyninenotout')}>
                                <Text style={[styles.textStyle, { color: secondaryTextColor }]}>live</Text >
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={[styles.textStyle, { color: secondaryTextColor }]}>A score keeper for street cricket, where the number of overs and wickets varies from match to match, and where it is optional to add runs for wides and no-balls.</Text >
                </View>

                <View style={{ paddingBottom: 10 }}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.textStyle}>WhatsApp Direct</Text >
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <TouchableOpacity style={styles.sourceButton} onPress={() => Linking.openURL('https://github.com/pavankommi/whatsappdirect')}>
                                <Text style={[styles.textStyle, { color: secondaryTextColor }]}>source</Text >
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.liveButton} onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.fourone.whatsappdirect')}>
                                <Text style={[styles.textStyle, { color: secondaryTextColor }]}>live</Text >
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={[styles.textStyle, { color: secondaryTextColor }]}>An android application to send a WhatsApp message to ones that are not on your contact list.</Text >
                </View>

                <View >
                    <View style={styles.rowContainer}>
                        <Text style={styles.textStyle}>pavankommi.github.io</Text >
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <TouchableOpacity style={styles.sourceButton}>
                                <Text style={[styles.textStyle, { color: secondaryTextColor }]}>source</Text >
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.liveButton}>
                                <Text style={[styles.textStyle, { color: secondaryTextColor }]}>live</Text >
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={[styles.textStyle, { color: secondaryTextColor }]}>The webpage you're on right now.</Text >
                </View>

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: "10%",
        paddingVertical: 50,
        height: "100%",
        flex: 1
    },
    subContainer: {
        paddingVertical: 10
    },
    textStyle: {
        fontFamily: 'Montserrat',
        // fontSize: "7vw",
        color: "#ffffff",
    },
    mainHeader: {
        fontFamily: 'Montserrat',
        fontSize: 35,
        color: "#ffffff",
        // paddingVertical: 10
    },
    subHeader: {
        fontFamily: 'Montserrat',
        fontSize: 24,
        color: "#ffffff",
        paddingVertical: 10
    },
    iconContainer: {
        flexDirection: "row",
        paddingVertical: 10,
        width: "200px",
        justifyContent: "space-between"
    },
    rowContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    sourceButton: {
        backgroundColor: "#43464b",
        borderRadius: 3,
        paddingHorizontal: 5
    },
    liveButton: {
        backgroundColor: "#43464b",
        borderRadius: 3,
        paddingHorizontal: 5,
        marginLeft: 5
    }
});
