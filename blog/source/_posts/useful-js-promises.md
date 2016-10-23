title: Useful JS promises
date: 2014/6/9 00:13:00
categories:
- tech
tags:
- js
- flux
---
I’ve always understood how promises work, but never saw its true light until recently. I always just saw it as a better way to write sequential or parallel asynchronous code.

I was working on an app that required multiple calls to the Facebook API to retrieve user profiles. There were often times when the same profile is retrieved multiple times. I wanted a lightweight cache in the front-end so that we don’t have to do redundant requests.

I wrote this method as part of “dispatcher” that goes off and makes requests to servers. It was important that the cache was completely transparent to the consumer, and, for convenience, supported both callbacks and promises.

I used the Facebook javascript API and jQuery’s $.Deferred object to maintain consistency with the rest of my code. This was my first attempt:

```js
(function() {
  var cache = {};
  Dispatcher.request.fb.user = function(userId, cb) {
    userId = userId.toString(); // so we can use hashmap

    p = new $.Deferred(); // create promise

    if (cache[userId]) { // cache hit
      p.resolve(cache[userId]);
      if (cb) cb(cache[userId]);
    } else {
      FB.api('/' + userId, function(res) {
        cache[userId] = res;
        p.resolve(res);
        if (cb) cb(res);
      });
    }
    return p;
  };
})();
```

This could work well. When a result is returned by the Facebook server, it is cached into an object stored in the function’s closure. If I were to make another request with the same userId, the cached result will be returned.

However, there was a problem. Pages that require profile information often dispatch multiple requests at the same time. Some of these requests may be for the same profile, but these requests will all result in cache misses if they are fired at the same time. This is because the cache is not populated until Facebook replies with a response.

<!-- more -->

Here is when promises become super useful:

```js
(function() {
  var cache = {};
  Dispatcher.request.fb.user = function(userId, cb) {
    userId = userId.toString(); // so we can use hashmap

    var p = cache[userId];
    if (p) { // cache hit
      p.then(cb);
      return p;
    }

    p = new $.Deferred(); // create promise
    cache[userId] = p;
    FB.api('/' + userId, function(res) {
      p.resolve(res);
      if (cb) cb(res);
    });
    return p;
  };
})();
```

Whenever a call to the user dispatcher is made, we immediately populate the cache with a promise. This causes any subsequent calls to the same userId result in a cache hit. Subsequent requests receive the same promise created by the first request that created the cache entry. The promise is resolved when the results arrive, and all callbacks will be called. If the dispatcher is called after the results have returned, it will return a promise that is already resolved, and the callback will be invoked immediately. Neat!
