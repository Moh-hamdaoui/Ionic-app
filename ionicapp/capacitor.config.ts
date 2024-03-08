import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.ionicapp',
  appName: 'ionicapp',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
