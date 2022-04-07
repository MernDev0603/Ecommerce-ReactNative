import {StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECText} from '../../components/ECText';
import {SingleProductDTO} from './singleProductsSlice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {addToFavorites} from '../../favorites/favoritesSlice';
import {ECOMMERCE_THEME} from '../../theme/ecommerce/ecommerceTheme';

interface SingleProductRatingProps {
  product: SingleProductDTO;
}

const {singleProductTextColor} = ECOMMERCE_THEME.colors;

export const SingleProductRating: FunctionComponent<
  SingleProductRatingProps
> = ({product}) => {
  const dispatch = useDispatch();

  const favorites = useSelector(
    (state: RootState) => state.favorites.favoritesItems,
  );

  const isFavorite = favorites.findIndex(item => item.id === product.id);

  const handleAddToFavorites = (item: SingleProductDTO) => {
    dispatch(addToFavorites(item));
  };

  return (
    <View style={styles.favoritesWrapper}>
      <View>
        <ECText fontSize={23} bold textColor={singleProductTextColor}>
          ${product.price}
        </ECText>
        <ECText fontSize={16} textColor={singleProductTextColor}>
          Product Rating: {product.rating.rate.toString()} / 5
        </ECText>
      </View>
      <View style={styles.favoritesIcon}>
        <Ionicons
          name={isFavorite >= 0 ? 'heart' : 'heart-outline'}
          size={38}
          color="#004666"
          onPress={() => handleAddToFavorites(product)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  favoritesWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  favoritesIcon: {
    padding: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#004666',
    borderRadius: 10,
  },
});