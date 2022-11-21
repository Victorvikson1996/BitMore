import {handleActions} from 'redux-actions';
import {
  unlockWallet,
  createWallet,
  resetWallet,
  newWallet,
  logout,
} from './Action';

const initialState = {
  walletExists: false,
  walletUnlocked: false,
  seed: '',
};

const Reducer = handleActions({
  [createWallet]: (state, {payload}) => {
    return {...state, walletExists: payload};
  },
  [newWallet]: (state, {payload}) => {
    return {...state, seed: payload};
  },
  [unlockWallet]: (state, {payload}) => {
    return {...state, walletUnlocked: payload};
  },
  [logout]: state => {
    return {...state, walletUnlocked: false, seed: ''};
  },
  [resetWallet]: state => {
    return {...initialState};
  },
});

export default Reducer;
