import React from 'react';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import { Platform } from 'react-native';

const adUnitId = Platform.OS === "ios" ?
    "ca-app-pub-1017432203303316/6211767474" :
    "ca-app-pub-1017432203303316/3968747512"


function B2() {
    console.log("B2 ad id:" + adUnitId)
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

export default B2;