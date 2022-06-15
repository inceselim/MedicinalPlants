import React from 'react';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import { Platform } from 'react-native';

const adUnitId = Platform.OS === "ios" ?
    "ca-app-pub-1017432203303316/5503538070" :
    "ca-app-pub-1017432203303316/8453953284"


function B3() {
    console.log("B3 ad id:" + adUnitId)
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

export default B3;