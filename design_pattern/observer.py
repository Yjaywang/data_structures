# pub/sub
from abc import ABC, abstractmethod


class YoutubeChannel:
    def __init__(self, name):
        self.name = name
        self.subscribers = []

    def subscribe(self, sub):
        self.subscribers.append(sub)

    def notify(self, event):
        for sub in self.subscribers:
            sub.sendNotification(self.name, event)


class YoutubeSubscriber(ABC):
    @abstractmethod
    def __init__(self, name):
        self.name = name

    def sendNotification(self, channel, event):
        pass


class YoutubeUser(YoutubeSubscriber):
    def __init__(self, name):
        self.name = name

    def sendNotification(self, channel, event):
        print(f"User {self.name} received notification from {channel}: {event}")


channel = YoutubeChannel('neetcode')

channel.subscribe(YoutubeUser('sub1'))
channel.subscribe(YoutubeUser('sub2'))
channel.subscribe(YoutubeUser('sub3'))

channel.notify('release a new video')

# The Observer pattern is a popular solution.
# We have a Subject (aka Publisher) which will be the source of events.
# And we could have multiple Observers (aka Subscribers) which will recieve events from the Subject in realtime.
