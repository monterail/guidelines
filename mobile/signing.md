## Stores
[Google Play](https://play.google.com/apps/publish/)
[Apple developper account](https://developer.apple.com/account/)
[Itunes connect (AppStore connect)](https://itunesconnect.apple.com)

## App Identifier (applicationId - Android, iOS App ID)
This ID uniquely identifies your app on the device and in Google Play Store/App Store. Also on device you can have installed only one instance of app with particular ID.
[Apple reference](https://developer.android.com/studio/build/application-id)
[Android reference](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/AppID.html)

## Certificates
Apple certificates are used to signing app. Development certificates are created automatically when you build app in xCode. Production certificate are created in apple developer account.

## Keys
Basically most common is Apple Push Notifications service (APNs)

## Provisioning profiles
Provisioning profiles allow you to install apps onto your iOS devices. A provisioning profile includes signing certificates, device identifiers, and an App ID.

## Signing app on iOS

Xcode code signs your app during the build and archive process. If needed, Xcode requests a certificate and adds a signing certificate, the certificate with its public-private key pair, to your keychain. The certificate with the public key is added to your developer account.
Development certificates are to run your app on devices and use app services, and distribution certificates to distribute your app for testing and to upload it to App Store Connect.

[Xcode](https://help.apple.com/xcode/mac/current/#/dev3a05256b8)

[What is provisioning profile](https://medium.com/@abhimuralidharan/what-is-a-provisioning-profile-in-ios-77987a7c54c2)

## Android app signing

When you are ready to publish your app, you need to sign your app and upload it to an app store, such as Google Play. When publishing your app to Google Play, you should also opt in to app signing by Google Play. This section shows you how to properly sign your app for release and opt in to app signing by Google Play. To sign your app you need “release keystore”


[Android signing](https://developer.android.com/studio/publish/app-signing.html#studio)
