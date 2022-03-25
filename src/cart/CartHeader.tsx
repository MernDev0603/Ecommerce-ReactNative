import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {ECText} from '../components/ECText';

const CartHeader = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={{width: '25%'}}>
        <View>
          <TouchableRipple
            borderless
            style={styles.backIcon}
            rippleColor="rgba(0, 0, 0, 0.32)"
            accessibilityRole="button"
            onPress={() => navigate('Products')}>
            <Entypo name="chevron-left" size={30} color="#004666" />
          </TouchableRipple>
        </View>
      </View>
      <View style={{width: '50%'}}>
        <ECText textAlign="center" textColor="black" bold fontSize={25}>
          My Cart
        </ECText>
      </View>
      <View style={{width: '25%'}}></View>
    </View>
  );
};

export default CartHeader;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  backIcon: {
    padding: 5,
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});