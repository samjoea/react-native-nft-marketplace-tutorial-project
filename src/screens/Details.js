import React, { useLayoutEffect } from 'react';
import { FlashList } from '@shopify/flash-list';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SHADOWS, assets, data } from '../../constants';
import { CircleButton, RectButton, FocusedStatusBar, DetailsDec, DetailsBid } from '../components';
import { useNavigation } from '@react-navigation/native';


const Details = ({ route }) => {
  const data = route.params;
  // console.log(route)

  const navigation = useNavigation();

  useLayoutEffect(() => {
     navigation.setOptions({
        headerShown: false
     })
  }, [])

  return (
    <SafeAreaView className=' flex-1 border'>
      <FocusedStatusBar />
      <View className=' w-full absolute bottom-0 py-[14] justify-center items-center z-[1]'>
        <RectButton
          className=' min-w-[170] bg-primary p-[12] rounded-[24px] text-[18px]'
          font='text-[18px]'
          SHADOWS={{...SHADOWS.dark}} />
      </View>
      <FlashList
        data={data.bids}
        renderItem={({item}) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        estimatedItemSize={32}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 * 3 }}
        ListHeaderComponent={<DetailsHeader data={data} navigation={navigation} />}
      />
    </SafeAreaView>
  );
}


const DetailsHeader = ({ data, navigation }) => {
  return (
    <View className='  w-full h-[373]'>
      <Image source={data.image} resizeMode='cover' className=' w-full h-full' />
      <CircleButton imgUrl={assets.left} className=' p-[8] absolute bg-white rounded-full' />
    </View>
  );
}
export default Details;