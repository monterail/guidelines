## Ionic
## Native Components
### General
Ionic accesses native mobile components using it's own integration with Cordova called `Ionic Native`. Plenty of Cordova plugins have their own corresponding `Ionic Native` plugin and those available can be found [on this documentation page](https://ionicframework.com/docs/native/overview). Every integration has it's own entry with installation guide, plugin's usage example and sometimes (depending on platform) configuration entries that need to be set in order to get appropriate permissions. If you are using Angular remember to add the Ionic Native plugin into `AppModule` providers.

That implementation may soon change, as Ionic's team is working on Capacitor - their own take on Native API. It is very similar to Cordova and it's design supports many Cordova plugins (some are incompatible). It also changes the workflow, as it requires more manual work, i.e. directly modyfing multiple configuration files instead of having single `config.xml` file.
### Camera/Media Library
Camera can be accessed using Cordova's plugin called `cordova-plugin-camera` and `Ionic Native` plugin, which can be installed using package manager from `@ionic-native/camera`.

This plugin also requires two configuration entries to be set (for iOS platform) - `NSCameraUsageDescription` and `NSPhotoLibraryUsageDescription`.
These can be set in `config.xml` file, inside iOS settings section. Example:
```
<platform name="ios">
  <edit-config file="*-Info.plist" mode="merge" target="NSCameraUsageDescription">
      <string>Allow to take pictures</string>
  </edit-config>
  <edit-config file="*-Info.plist" mode="merge" target="NSPhotoLibraryUsageDescription">
      <string>Allow to select pictures from library</string>
  </edit-config>
</platform>
```

Now to use this plugin in any service/component you have to declare it in `constructor` and then:
* Configure the way we want to capture the photo/video
```
async openCamera(): Promise<void> {
  const options: CameraOptions = {
    quality: 75,
    destinationType: this.camera.DestinationType.FILE_URI,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true
  };
```
The configuration options descriptions can be found [on camera plugin github](https://github.com/apache/cordova-plugin-camera#module_camera.CameraOptions)
* Take a photo and read it from device's file system using another Cordova/Ionic Native plugin ([File](https://ionicframework.com/docs/native/file)):
```
  const imageURI = await this.camera.getPicture(options);
  const fileEntry: any = await this.file.resolveLocalFilesystemUrl(imageURI);
  fileEntry.file((file: IFile) => {
    this.readFile(file);
  });
```
Now you can read the file and i.e. attach it to `FormData`
```
readFile(file: IFile): void {
  const reader = new FileReader();
  reader.onloadend = () => {
    const formData = new FormData();
    const imgBlob = new Blob([reader.result], { type: file.type });
    formData.append('file', imgBlob, file.name);

    // perform an action, i.e. upload
  };

  reader.readAsArrayBuffer(file);
}
```

### Background fetch

Background fetch is an plugin, which wakes mobile app every 15 minutes and provides 30s of background running-time.
Due to limitations there is no way to increase the 15 minute interval. The mobile operating system will throttle the rate this process occures based on usage patterns. (i.e. if user didn't use phone for a long time it will perform background fetch less frequent)

To use this plugin you need to install `cordova-plugin-background-fetch` and `@ionic-native/background-fetch`.
And then setup the plugin:
* Configuration
```
const config: BackgroundFetchConfig = {
  stopOnTerminate: false
};
```
The `stopOnTerminate` entry is for Android to continue to run background processes after application is terminated.
* Starting the plugin using the configuration
```
this.backgroundFetch.configure(config)
  .then(() => {
    // Perform any action

    this.backgroundFetch.finish();
  })
  .catch(() => {
    // Failure callback
  });
```
You don't need to call `start()` on the plugin, because the `config()` function does that for us.

It is important to call `finish()` at the end of success callback, because if you exceed 30s of background time the application will be terminated.

### Push notifications
To use Push notifications you need to install Cordova plugin (`phonegap-plugin-push`) and Ionic Native plugin (`@ionic-native/push`) and setup the plugin:
* Ask user for permissions
```
async checkPermissions(): Promise<{ isEnabled: boolean }> {
  return await this.push.hasPermission();
}
```
* Create Notification channel for Android O+
```
async createChannel(): Promise<void> {
  await this.push.createChannel({
    id: 'channel-name',
    description: 'Channel description',
    importance: 2
  });
}
```
* Initialize Push notification with custom configuration - description can be found [on Push plugin github](https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/API.md#pushnotificationinitoptions)
```
async initPush(): Promise<PushObject> {
  const options: PushOptions = {
    android: {},
    ios: {},
  };

  return this.push.init(options);
}
```
* Listen to Push events
```
pushObj.on('registration').subscribe(registration => {

});
```
This event is triggered on successful registration with our push service. You also have access to `registrationId`, which is the ID provided by push service and `registrationType`, which is type of push service (FCM or APNS)
```
pushObj.on('notification').subscribe((notification: NotificationEventResponse) => {

});
```
This event is triggered each time the device receives push notification. You can access this notification and it's parameters that are described [on Push plugin's github](https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/API.md#pushonnotification-callback)
```
pushObj.on('error').subscribe((error: Error) => {

});
```
This event is triggered when an internal error occurs.
