importScripts("https://www.gstatic.com/firebasejs/12.5.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.5.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCA-QlptBTRH-WMI-2YrmvAsjyFqkuur_ps",
  authDomain: "my-weekly-planner-c0d78.firebaseapp.com",
  projectId: "my-weekly-planner-c0d78",
  storageBucket: "my-weekly-planner-c0d78.firebasestorage.app",
  messagingSenderId: "663703597386",
  appId: "1:663703597386:web:a7b01ad5d3896370f2d1b3"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const title = payload.notification?.title || "My Weekly Planner";
  const options = {
    body: payload.notification?.body || "You have a planner reminder!",
    data: payload.data || {}
  };
  self.registration.showNotification(title, options);
});

self.addEventListener("notificationclick", event => {
  event.notification.close();
  event.waitUntil(clients.openWindow("https://anpork.github.io/My-Weekly-Planner/"));
});
