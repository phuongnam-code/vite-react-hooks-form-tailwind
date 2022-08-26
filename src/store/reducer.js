import commonSlice from './modules/commonSlice';
import authSlice from './modules/authSlice';

const reducer = {
  common: commonSlice,
  auth: authSlice,
};

export default reducer;
