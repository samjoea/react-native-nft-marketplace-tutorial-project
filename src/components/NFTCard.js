import { useNavigation } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';

import { SHADOWS, assets } from '../../constants';
import {CircleButton, RectButton} from './Button';
import { SubInfo, EthPrice, NFTTitle } from './SubInfo';

const NFTCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{...SHADOWS.dark}}
      className=' bg-white rounded-xl m-2 mb-6'>
         <View className=' w-full h-[250]'>
            <Image
               resizeMode='cover'
               source={data.image}
               className=' w-full h-full rounded-tl-[14] rounded-tr-[14]'
            />
            <CircleButton
              imgUrl={assets.heart}
              className=' absolute w-[40] h-[40] bg-white rounded-full justify-center items-center right-[10] top-[10]'
            />
         </View>
      <SubInfo />

      <View className=' w-full p-[14]'>
        <NFTTitle title={data.name} subTitle={data.creator} />

        <View className=' mt-[14] flex-row justify-between items-center'>
          <EthPrice price={data.price} />
          <RectButton
            className='min-w-[120] bg-primary text-[14px] rounded-[24px] p-[12]'
            SHADOWS={{...SHADOWS.light}}
            onPress={() => navigation.navigate('Details', data)}
          />
        </View>
      </View>
    </View>
  )
}

export default NFTCard;