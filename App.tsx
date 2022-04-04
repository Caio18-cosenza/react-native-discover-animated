import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Details from './src/screens/details';

export default function App() {
  return (
    <>
      <StatusBar style='dark' backgroundColor='#fff' translucent />
      <Details />
    </>
  );
}
