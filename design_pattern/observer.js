// Publisher
class Video {
  constructor(observable, name, content) {
    this.observable = observable;
    this.name = name;
    this.content = content;
    // publish the ‘video-uploaded’ event
    this.observable.publish("video-uploaded", {
      name,
      content,
    });
  }
}
// Subscriber
class User {
  constructor(observable) {
    this.observable = observable;
    this.intrestedVideos = [];
    // subscribe with the event naame and the call back function
    this.observable.subscribe("video-uploaded", this.addVideo.bind(this));
  }

  addVideo(video) {
    this.intrestedVideos.push(video);
  }
}
// Observer
class Observable {
  constructor() {
    this.handlers = [];
  }

  subscribe(event, handler) {
    this.handlers[event] = this.handlers[event] || [];
    this.handlers[event].push(handler);
  }

  publish(event, eventData) {
    const eventHandlers = this.handlers[event];

    if (eventHandlers) {
      for (var i = 0, l = eventHandlers.length; i < l; ++i) {
        eventHandlers[i].call({}, eventData);
      }
    }
  }
}
// usage
const observable = new Observable();
const user = new User(observable);
const videoFile = "RRRRRRRR";
const video = new Video(observable, "ES6 Design Patterns", videoFile);
