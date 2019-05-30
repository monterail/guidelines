## PWA
## Native components
### Camera/Media
Accessing Camera/Media can be done using regular `input` tag. To access Camera you need to add `capture` attribute with any of two keywords - `user` or `environment`.
* `user` if you want to open front camera
* `environment` if you want to open back camera

I.e.:
```
<input type="file" accept="image/*" capture="user" />
```

To use the Media library all you need to do is remove that `capture` tag and leave the `accept="image/*"` attribute.

### Background sync
Background sync is an API that lets you perform actions when user has stable connectivity. It's useful save the data that user wants to send to API, but has unstable internet connection.

* First you need to register Service Worker and instead of making an fetch request save the data to IndexedDB and register Sync event. If the Service Worker is not available or there was an error while registering the Sync event you should handle the fetch as usual.
It's important to give out `sync` unique name.
```
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('../service-worker.js')
    .then(function () {
      return navigator.serviceWorker.ready
    })
    .then(function (registration) {
      document.getElementById('submit').addEventListener('click', (event) => {
        event.preventDefault();
        saveDataToDB().then(() => {
          registration.sync.register('form-sync')
            .catch(() => {
              // Handle request as you usually would
            })
        });
      })
    })
} else {
  document.getElementById('submit').addEventListener('click', (event) => {
    event.preventDefault();
    // Service worker not available
    // Handle requests normally
  });
}

function saveDataToDB() {
  return new Promise((resolve, reject) => {
    const data = window.indexedDB.open('exampleDB');

    data.onsuccess = () => {
      const store = data.result.transaction('formStore', 'readwrite').objectStore('formStore');
      store.add(getFormData());
      resolve();
    };

    data.onerror = error => {
      reject(error);
    }
  });
}
```
* Now you have to handle that `sync` event in Service Worker, get the data from IndexedDB and perform fetch to your API
```
self.onsync = function (event) {
  if (event.tag == 'form-sync') {
    event.waitUntil(syncForm());
  }
}

function syncForm() {
  return getForm()
    .then(sendFormToApi);
}

function getForm() {
  return new Promise(resolve, reject => {
    const db = indexedDB.open('exampleDB');

    db.onsuccess = () => {
      db.result.transaction('formStore').objectStore('formStore').getAll()
        .onsuccess = event => {
          resolve(event.target.result);
        }
    }

    db.onerror = error => {
      reject(error);
    }
  })
```
#### Alternatively you can use Google's Workbox. Using this toolbox the background sync can be setup in two ways:
* By creating `Background Sync` plugin and then assigning it to any route that matches our regular expression:
```
const postsSyncPlugin = new workbox.backgroundSync.Plugin('postsQueue', {
  maxRetentionTime: 24 * 60
});

workbox.routing.registerRoute(
  /^https:\/\/api-server.com\/posts/,
  new workbox.strategies.NetworkOnly({
    plugins: [postsSyncPlugin]
  }),
  'POST'
);
```
The `maxRetentionTime` parameter tells the plugin for how long it should retry to send this request.
* By listening to every failed fetch and then storing that failed requests in `Queue`. Then the `Queue` awaits for `sync` event and automatically retries failed requests that it stored.
```
const queue = new workbox.backgroundSync.Queue('requestsQueue');

self.addEventListener('fetch', (event) => {
  const request = fetch(event.request.clone())
    .catch((err) => {
      return queue.pushRequest({ request: event.request });
    });

  event.waitUntil(request);
});
```
### Push notifications
To use the Push API, you need to:
* Ask for permissions, i.e. by displaying `Enable notifications` button
```
if ('Notification' in window) {
  const button = document.getElementById('enable-notifications');
  button.style.display = 'block';
  button.addEventListener('click', askForPermissions);
}

function askForPermissions() {
  Notification.requestPermission()
    .then(result => {
      if (result === 'granted') {
        showGrantedNotification();
      }
    })
}
```
* Register Service Worker and get `Subscription` to push notifications, which can be used to send the notification to the browser
```
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(swReg => {
        const applicationServerKey = ''; // VAPID key
        swReg.pushManager.subscribe()
          .then(subscription => {
            if (subscription === null) {
              return swReg.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey
              })
                .then(sendSubscriptionToApi)
            }
          })
      })
      .catch(error => console.log(error))
  });
}
```
The VAPID is used to identify your service. To use VAPID you need to generate `publicKey` and `privateKey` and set up the `Subscription` using the `publicKey`. Then when you will send a Push notification you need to include signed JSON web token along with `publicKey`. The JSON Web token contains the algorithm used for signing:
```
{
  "typ": "JWT",
  "alg": "ES256"
}
```
* Listen and handle push notification in Service Worker
```
self.addEventListener('push', (event) => {
  const title = 'Push Notification';
  const options = {
    body: `${event.data.text()}`
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
```
