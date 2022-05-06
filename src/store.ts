import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import onboardingReducer from './onboarding/onboardingSlice';
import productsReducer from './products/productsSlice';
import singleProductReducer from './products/single-product/singleProductsSlice';
import cartReducer from './cart/cartSlice';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import favoritesReducer from './favorites/favoritesSlice';
import signInReducer from './account/sign-in/signInSlice';
import orderReducer from './order/ordersSlice';
import myOrdersReducer from './my-orders/myOrdersSlice';

const rootReducer = combineReducers({
  products: productsReducer,
  singleProduct: singleProductReducer,
  onboarding: onboardingReducer,
  cart: cartReducer,
  favorites: favoritesReducer,
  signIn: signInReducer,
  order: orderReducer,
  myOrders: myOrdersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['cart', 'favorites', 'signIn', 'myOrders'],
};

const middleware = [
  ...getDefaultMiddleware({
    // NOTE: Disabled since we use immer
    immutableCheck: false,
    serializableCheck: false,
  }),
];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: false,
});

export const persistor = persistStore(store);
