
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Detail() {
    const navigation: any = useNavigation();
    return (
        <SafeAreaView>
            <Text>Detail</Text>
        </SafeAreaView>
    );
}
