import { View, Text, Image } from 'react-native'

import { assets, SHADOWS } from '../../constants';
const persons = [assets.person01, assets.person02, assets.person03, assets.person04];
export const EthPrice = ({ price }) => {
  return (
    <View className=' flex-row justify-center'>
      <Image
        className='w-[20] h-[20] mr-[2]'
        source={assets.eth} />
        <Text className=' font-medium text-[14] text-primary '>{price}</Text>
    </View>
  );
}
export const NFTTitle = ({ title, subTitle }) => {
   return (
     <View>
      <Text className=' font-semiBold text-[18px]'>{title}</Text>
      <Text className=' font-regular text-[12px]'>{subTitle}</Text>
     </View>
   );
 }
 export const ImageCmp = ({ imgUrl, index }) => {
   return (
      <Image
         source={imgUrl}
         resizeMode="contain"
         className={`w-[48] h-[48] ${index === 0 ? 'ml-0' : '-ml-[14]'}`}
      />
   );
 }
 export const People = () => {
   return (
     <View className=' flex-row'>
      {persons.map((person, index) => (
         <ImageCmp index={index} imgUrl={person} key={`${person}-${index}`} />
      ))}
     </View>
   );
 }
 export const EndDate = () => {
   return (
     <View
        style={{...SHADOWS.light, elevation: 1}}
        className=' max-w-[50%] px-[14] py-[8] bg-white justify-center items-center'>
        <Text className=' font-regular text-[12px] text-primary'>Ending</Text>
        <Text className=' font-semiBold text-[16px] text-primary'>12h 34m</Text>
     </View>
   );
 }

 export const SubInfo = () => {
   return (
     <View className=' w-full px-[14] -mt-[24] flex-row justify-between'>
      <People />
      <EndDate />
     </View>
   );
 }