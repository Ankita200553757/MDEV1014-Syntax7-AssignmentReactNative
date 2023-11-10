/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { initializeApp } from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyD6zFm3mxQg4SvlTFB4pFVUa_vKuEWV3bA',
  projectId: 'syntax7-3d24a',
  storageBucket: 'syntax7-3d24a.appspot.com',
  appId: '1:107020145969:android:fd38f7fa33fc204b0fcc10',
  databaseURL: 'https://syntax7-3d24a-default-rtdb.firebaseio.com/', 
  messagingSenderId: '107020145969'
};

initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);