import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ionic.photo.gallery',
  appName: 'Photo-Gallery',
  webDir: 'www',
  plugins: {
    LiveUpdates: {
      appId: '7a19e700',
      channel: 'a-vn2-sprvn201-website',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  }
};

export default config;
