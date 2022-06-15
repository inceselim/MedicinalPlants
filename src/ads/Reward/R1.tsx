import React, { useEffect, useState } from 'react';
import { Button, Platform } from 'react-native';
import { RewardedAd, RewardedAdEventType, TestIds } from '@react-native-firebase/admob';

const adUnitId = Platform.OS === "ios" ?
  "ca-app-pub-1017432203303316/6814402701" :
  "ca-app-pub-1017432203303316/3421952605"


const rewarded = RewardedAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['Insurance', 'Mortgage', 'Attorney', 'Claim', 'Gas', 'Electicity', 'Gas/Electicity', 'Game', 'Oyun',
    "spotifys", "en iyi online muhasebe programı", "android auto youtube music",
    "adobe acrobat reader gezginler", "adobe acrobat indir gezginler",
    "adobe", "youtube", "sigorta", "böcek ilaçlama", "lawyer", "business software", "software", "yazılım",
    "muhasebe", "asset management", "pest control", "google adwords", "cleanup & restoration services", "casino",
    "mortgages", "commerce", "ecommerce", "kargo", "kira", "sat", "iklim", "burs",
    "hotel", "otel", "strategy", "food", "yemek",
  ],
});

export default function R1() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const eventListener = rewarded.onAdEvent((type, error, reward) => {
      if (type === RewardedAdEventType.LOADED) {
        setLoaded(true);
        console.log("R1 Loaded")
        
        rewarded.show()
      }

      if (type === RewardedAdEventType.EARNED_REWARD) {
        console.log('User earned reward of ', reward);
      }
    });

    // Start loading the rewarded ad straight away
    rewarded.load();

    // Unsubscribe from events on unmount
    return () => {
      eventListener();
    };
  }, []);

  // No advert ready to show yet
  if (!loaded) {
    return null;
  }
  
}