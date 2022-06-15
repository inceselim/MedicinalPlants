
import React, { useState } from 'react';
import { View, SafeAreaView, Image, Share, Dimensions, Text, Linking, StyleSheet, Alert, Button, ActivityIndicator, TouchableOpacity } from 'react-native';
import I18n from '../languages/index';
import { Dark_Theme, Light_Theme } from '../styles/style';
import YoutubePlayer from 'react-native-youtube-iframe';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('window').height;

import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation, useTheme } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';
import { selectCount, increment } from "../redux/features/themeSlice/themeSlice"

import ActionButton from 'react-native-action-button';
//Import Icon for the ActionButton
import Icon from 'react-native-vector-icons/Ionicons';
import R1 from '../ads/Reward/R1';
import Inter1 from '../ads/Inter/Inter1';
import B3 from '../ads/Banner/B3';


export default function Content(props: any,) {
    R1()
    Inter1()

    const navigation: any = useNavigation();
    const { colors } = useTheme();
    const darkMode = useSelector(selectCount)
    const dispatch = useDispatch()

    const title = props.route.params.title
    const content = props.route.params.content
    const img: any = props.route.params.img
    const video1: any = props.route.params.video1


    const b1 = props.route.params.b1
    const b2 = props.route.params.b2
    const b3 = props.route.params.b3
    const b4 = props.route.params.b4
    const b5 = props.route.params.b5
    const b6 = props.route.params.b6
    const b7 = props.route.params.b7
    const b8 = props.route.params.b8
    const b9 = props.route.params.b9
    const b10 = props.route.params.b10

    const [whatsAppMsg, setWhatsAppMsg] = useState(
        'https://play.google.com/store/apps/details?id=com.softwarelessonsincesoy',
    );

    const initiateWhatsApp = () => {
        // Check for perfect 10 digit length
        let url = 'whatsapp://send?text=' + whatsAppMsg
        Linking.openURL(url)
            .then((data) => {
                console.log('WhatsApp opened...');
            })
            .catch(() => {
                Alert.alert('Whatsapp not installed...');
            });
    };

    const inputValue = title + "\n" + content
    const shareMessage = () => {
        //Here is the Share API
        Share.share({
            message: inputValue.toString(),
        })
            .then((result) => console.log(result))
            .catch((errorMsg) => console.log(errorMsg));
    };
    //
    //Youtube
    const [playing, setPlaying] = useState(false);
    const onStateChange = (state: any) => {
        if (state === 'ended') {
            setPlaying(false);
            Alert.alert('video has finished playing!');
        }
    }
    const togglePlaying = () => {
        setPlaying((prev) => !prev);
    }

    return (
        <SafeAreaView style={darkMode == true ? Dark_Theme.mainContainer : Light_Theme.mainContainer} >
            {/* <TouchableOpacity style={darkMode == true ? Dark_Theme.backButton : Light_Theme.backButton}
                onPress={() => navigation.navigate("Home")}>
                <Text style={darkMode == true ? Dark_Theme.backButtonText : Light_Theme.backButtonText}>
                    {I18n.t("Go_Back")}
                </Text>
                <MaterialCommunityIcons name="less-than"
                    size={17} style={{ marginRight: 18 }} />
            </TouchableOpacity> */}

            <ScrollView>
                <Text style={darkMode == true ? Dark_Theme.mainHeaderText : Light_Theme.mainHeaderText} >
                    {I18n.t(title)}
                </Text>
                <Image style={darkMode == true ? Dark_Theme.contentImg : Light_Theme.contentImg}
                    source={img}
                />
                {!b1 ? (null)
                    : (
                        <Text style={darkMode == true ? Dark_Theme.contentText : Light_Theme.contentText} >
                            {I18n.t(b1)}
                        </Text>
                    )}
                {!b2 ? (null)
                    : (
                        <Text style={darkMode == true ? Dark_Theme.contentText : Light_Theme.contentText} >
                            {I18n.t(b2)}
                        </Text>
                    )}
                {!b3 ? (null)
                    : (
                        <Text style={darkMode == true ? Dark_Theme.contentText : Light_Theme.contentText} >
                            {I18n.t(b3)}
                        </Text>
                    )}
                {!b4 ? (null)
                    : (
                        <Text style={darkMode == true ? Dark_Theme.contentText : Light_Theme.contentText} >
                            {I18n.t(b4)}
                        </Text>
                    )}
                {!b5 ? (null)
                    : (
                        <Text style={darkMode == true ? Dark_Theme.contentText : Light_Theme.contentText} >
                            {I18n.t(b5)}
                        </Text>
                    )}
                {!b6 ? (null)
                    : (
                        <Text style={darkMode == true ? Dark_Theme.contentText : Light_Theme.contentText} >
                            {I18n.t(b6)}
                        </Text>
                    )}
                {!b7 ? (null)
                    : (
                        <Text style={darkMode == true ? Dark_Theme.contentText : Light_Theme.contentText} >
                            {I18n.t(b7)}
                        </Text>
                    )}
                {!b8 ? (null)
                    : (
                        <Text style={darkMode == true ? Dark_Theme.contentText : Light_Theme.contentText} >
                            {I18n.t(b8)}
                        </Text>
                    )}
                {!b9 ? (null)
                    : (
                        <Text style={darkMode == true ? Dark_Theme.contentText : Light_Theme.contentText} >
                            {I18n.t(b9)}
                        </Text>
                    )}
                {!b10 ? (null)
                    : (
                        <Text style={darkMode == true ? Dark_Theme.contentText : Light_Theme.contentText} >
                            {I18n.t(b10)}
                        </Text>
                    )}



                <Text style={darkMode == true ? Dark_Theme.contentText : Light_Theme.contentText} >
                    {I18n.t(content)}
                </Text>

                {!video1 ? (null) :
                    !playing ? (
                        <TouchableOpacity style={darkMode == true ? Dark_Theme.videoButton : Light_Theme.videoButton}
                            onPress={togglePlaying} >
                            <Text style={darkMode == true ? Dark_Theme.videoButtonText : Light_Theme.videoButtonText}>
                                {playing ? I18n.t("Pause") : I18n.t("Play")}
                            </Text>
                            <MaterialCommunityIcons name="greater-than"
                                size={20} style={{ marginRight: 18 }} />
                        </TouchableOpacity>)
                        : (
                            <View>
                                <TouchableOpacity style={darkMode == true ? Dark_Theme.videoButton : Light_Theme.videoButton}
                                    onPress={togglePlaying} >
                                    <Text style={darkMode == true ? Dark_Theme.videoButtonText : Light_Theme.videoButtonText}>
                                        {playing ? I18n.t("Pause") : I18n.t("Play")}
                                    </Text>
                                    <MaterialCommunityIcons name="greater-than"
                                        size={17} style={{ marginRight: 18 }} />
                                </TouchableOpacity>
                                <YoutubePlayer
                                    height={320}
                                    width={windowWidth - 50}
                                    allowWebViewZoom={true}
                                    onReady={() => <ActivityIndicator />}
                                    play={true}
                                    videoId={video1}
                                />
                            </View>
                        )}
            </ScrollView>
            <View style={{ alignItems: "center" }}><B3 /></View>
            <ActionButton buttonColor="rgba(121,6,160,1)" style={{ marginBottom: 60 }}>
                <ActionButton.Item
                    buttonColor="#3498db"
                    title={I18n.t("Share")}
                    onPress={() => shareMessage()}>
                    <Icon
                        name="md-star"
                        style={styles.actionButtonIcon}
                    />
                </ActionButton.Item>
                <ActionButton.Item
                    buttonColor="#1a2c9c"
                    title={I18n.t("Share_On_Whatsapp")}
                    onPress={() => initiateWhatsApp()}>
                    <Icon
                        name="md-share-alt"
                        style={styles.actionButtonIcon}
                    />
                </ActionButton.Item>
            </ActionButton>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    titleStyle: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 14,
    },
    textStyle: {
        fontSize: 22,
        textAlign: 'center',
        padding: 10,
    },
    actionButtonIcon: {
        fontSize: 22,
        height: 22,
        color: 'white',
    },
});