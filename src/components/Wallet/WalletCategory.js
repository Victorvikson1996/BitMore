import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {Icons} from '../../assets/Icons';
import {COLORS, SIZES, FONTS} from '../../utils/theme';
import {useNavigation} from '@react-navigation/native';
import BdkRn from 'bdk-rn';

const WalletData = [
  {
    id: 1,
    icon: Icons.bitcoinLogo,
    color: COLORS.tabBarActiveTintColor,
    backgroundColor: COLORS.MainbackgroundColor,
    description: 'Generate Wallet Address',
  },
  {
    id: 2,
    icon: Icons.money,
    color: COLORS.tabBarActiveTintColor,
    backgroundColor: COLORS.MainbackgroundColor,
    description: 'Get Balance',
  },
  {
    id: 3,
    icon: Icons.moneyBag,
    color: COLORS.tabBarActiveTintColor,
    backgroundColor: COLORS.MainbackgroundColor,
    description: 'Sync Wallet',
  },
  {
    id: 4,
    icon: Icons.moneyBag,
    color: COLORS.tabBarActiveTintColor,
    backgroundColor: COLORS.MainbackgroundColor,
    description: 'Transfer',
  },
];

const WalletCategory = ({item, onPress}) => {
  const navigation = useNavigation();
  const [walletFeature, setWalletFeature] = React.useState(WalletData);
  const [displayText, setDisplayText] = useState('');
  const [balance, setBalance] = useState();

  const Header = () => (
    <View style={{marginBottom: SIZES.padding * 2, marginLeft: 20}}>
      <Text style={{color: COLORS.white, fontSize: 20, fontWeight: 'bold'}}>
        Wallet
      </Text>
    </View>
  );

  const renderItem = ({item}) => {
    const onPress = async () => {
      if (item.id === 1) {
        Alert.alert('You Aleardy have a Bitcoin Address');
      } else if (item.id === 3) {
        navigation.navigate('WALLET');
      } else if (item.id === 4) {
        navigation.navigate('SEND');
      } else if (item.id === 2) {
        Alert.alert('Wait a Moment');
      }
    };
    return (
      <TouchableOpacity
        style={{
          marginBottom: SIZES.padding * 2,
          width: 150,
          alignItems: 'center',
          marginHorizontal: 10,
          left: 10,
        }}
        onPress={onPress}>
        <View
          style={{
            height: '100%',
            width: '100%',
            marginBottom: 5,
            borderRadius: 20,
            backgroundColor: item.backgroundColor,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 0.5,
            borderColor: COLORS.tabBarActiveTintColor,
          }}>
          <Image
            source={item.icon}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: item.color,
            }}
          />
          <View>
            <Text
              style={{
                textAlign: 'center',
                flexWrap: 'wrap',
                color: COLORS.white,
                fontSize: 13,
                fontWeight: 'bold',
                top: 30,
              }}>
              {item.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={Header}
      data={walletFeature}
      numColumns={2}
      // columnWrapperStyle={{justifyContent: 'space-between'}}
      keyExtractor={item => `${item.id}`}
      renderItem={renderItem}
      scrollEnabled={false}
    />
  );
};

export default WalletCategory;
