// LINK components
import Header from './components/Header';
import User from './components/User';

export const renderHeader = () => {
  document.getElementById('header')!.innerHTML = Header();
};

export const renderUser = async () => {
  document.getElementById('user')!.innerHTML = await User();
};
