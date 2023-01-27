import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';

import { NFTData, COLORS } from '../../constants';
import { HomeHeader, FocusedStatusBar, NFTCard } from '../components';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

const Home = () => {
   const navigation = useNavigation();

   useLayoutEffect(() => {
      navigation.setOptions({
         headerShown: false
      })
   }, []);
  
   return (
      <SafeAreaView  className=' flex-1'>
         <FocusedStatusBar backgroundColor={COLORS.primary} style='light' />
         {/* Container */}
         <View className=' flex-1'>
            <View className=' z-0 flex-1'>
               <FlashList
                  data={NFTData}
                  renderItem={({ item }) => (
                     <NFTCard data={item} />
                     )}
                  keyExtractor={(item) => item.id}
                  showsVerticalScrollIndicator={false}
                  ListHeaderComponent={<HomeHeader />}
                  estimatedItemSize={418}
               />
            </View>
            <View className=' absolute top-0 bottom-0 left-0 right-0 -z-[1]'>
               <View className=' h-[300] bg-primary '  />
               <View className=' flex-1 bg-white '  />
            </View>
         </View>
      </SafeAreaView>
   );
}

export default Home;