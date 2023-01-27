import { View, Text, TouchableOpacity, Image } from 'react-native'
import { SHADOWS } from '../../constants';

export const CircleButton = ({ imgUrl, ...props }) => {
  return (
   <TouchableOpacity
      style={{...SHADOWS.light}}
      {...props}>
      <View>
         <Image source={imgUrl} className=' w-[24] h-[24]' resizeMode='contain' />
      </View>
   </TouchableOpacity>
  );
}

export const RectButton = ({SHADOWS, font, ...props }) => {
   return (
      <TouchableOpacity
         style={SHADOWS}
         {...props}>
       <View>
         <Text className={` font-semiBold text-white text-center ${font ? font : 'text-[14px]'}`}>Place a bid</Text>
       </View>
    </TouchableOpacity>
   );
 }
