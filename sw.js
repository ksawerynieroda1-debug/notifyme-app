self.addEventListener("install",event=>{self.skipWaiting()});
self.addEventListener("activate",event=>{event.waitUntil(self.clients.claim())});
self.addEventListener("push",event=>{let data={title:"NotifyMe",body:"Masz nowe powiadomienie"};try{data={...data,...event.data.json()}}catch(e){}event.waitUntil(self.registration.showNotification(data.title,{body:data.body,icon:"icon.svg",badge:"icon.svg"}))});
self.addEventListener("notificationclick",event=>{event.notification.close();event.waitUntil(clients.openWindow("./"))});