import { View, Text, Image, TextInput } from 'react-native';
import { assets } from '../../constants';

const HomeHeader = ({ onSearch }) => {
  return (
    <View className=' bg-primary p-[14]'>
      <View className=' flex-row justify-between items-center'>
        <Image source={assets.logo} resizeMode='contain' className=' w-[90] h-[25]'/>
        <View className=' w-[45] h-[45]'>
          <Image source={assets.person01} resizeMode='contain' className=' w-full h-full'/>
          <Image source={assets.badge} resizeMode='contain' className=' absolute w-[15] h-[15] bottom-0 right-0'/>
        </View>
      </View>
      <View className=' my-[14]'>
        <Text className=' font-regular text-white text-[12px]'>Hello Vic</Text>
        <Text className=' font-Bold text-white text-[18px] mt-[4]'>Let's find a masterpiece</Text>
      </View>
      <View className=' mt-[14]'>
        <View className=' w-full flex-row bg-gray items-center rounded-[14px] px-[14] py-[10] '>
          <Image
            source={assets.search}
            className=' w-[20] h-[20] mr-[8]'
          />
          <TextInput
            placeholder='Search NFTs'
            className=' flex-1'
            // onChangeText={() => onSearch()}
          />
        </View>
      </View>
    </View>
  );
}

export default HomeHeader;