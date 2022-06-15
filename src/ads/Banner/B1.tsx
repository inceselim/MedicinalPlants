import React from 'react';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import { Platform } from 'react-native';

const adUnitId = Platform.OS === "ios" ?
    "ca-app-pub-1017432203303316/3868675164" :
    "ca-app-pub-1017432203303316/2564166507"


function B1() {
    console.log("B1 ad id:" + adUnitId)
    return (
        <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.BANNER}
            requestOptions={{
                requestNonPersonalizedAdsOnly: false,
            }}
        />
    );
}

export default B1;