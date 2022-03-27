import {Image, View} from 'react-native';
import React from 'react';

import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../Assets/images/logo.png')}
      />
      <Image
        style={styles.menu}
        source={require('../../Assets/images/menu.png')}
      />
    </View>
  );
};

export default Header;
