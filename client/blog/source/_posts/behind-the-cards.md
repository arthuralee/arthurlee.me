title: "Behind the cards"
date: 2015-05-02 19:45:02
categories:
- tech
tags:
- server
- website
- aws
---
I recently moved my [site](http://arthurlee.me) over to [Amazon S3](https://aws.amazon.com/s3) for high availability and scalability. The downside is that my pages have to be static, but that is hardly an issue given today's frontend technologies.

## Cards
My homepage has a card interface, where each card has a distinct piece of information about me. Because I only have a small number of cards at the moment, cards are stored statically and all cards are retrieved when the website is loaded.

![Card interface](http://files.arthurlee.me/uploads/2015/05/Screen%20Shot%202015-05-03%20at%208.08.17%20PM.png)

As I plan to have over 20-30 cards, some cards are clearly going to be less important than others. I probably want the card about my current job emphasized more than one about, say, my interest in flight simulation. To fix that, I assigned each card an "importance" rating which determines the order in which they appear on the screen. As a visitor chooses to spend more time on my site, they can continue scrolling to learn the lesser known (yet still interesting, I hope) facts about me.

This works, and is what you see on the homepage today. However, I wanted something more dynamic. I want visitors to have a unique and fun experience while browsing, and loading the same cards in the same order every time seems a little boring. I could do better!

<!-- more -->

## Card ordering service
I decided to dive a little deeper and create an intelligent ordering system. The ordering will be determined by a few factors:
![Card ordering](http://files.arthurlee.me/uploads/2015/05/2015-05-02%20diagram.png)

1. **Card importance** This is a value for each card defined manually by me. It will still be a big factor in the ordering.
2. **Engagement** I've always wanted to experiment with rolling out my own engagement tracking. I will attempt to determine engagement by recording the scrolling behavior and interactions with each card.
3. **View history** I will also uniquely identify visitors with cookies or Local Storage to de-emphasize unimportant cards have already been seen.

## Service Oriented Architecture (SOA)
Even though the scale of my personal website is tiny, I could still try to adopt a [Service Oriented Architecture](http://en.wikipedia.org/wiki/Service-oriented_architecture). Because S3 websites are completely static, I can't perform server-side rendering. As a result, I have to write my card ordering backend as a service. The service will run on node.js on my server. On each page load, the site will query the ordering service to obtain the card ordering. If the service is unavailable or if it doesn't respond within a few seconds, the cards will be shown anyway with "unintelligent" ordering. That way, I can still take advantage of S3 and serve the content with high availability.

## Work in progress
The frontend of the website uses React and Flux, and is pretty much complete. Much of the backend is still a work in progress. I will post more updates as progress is made.
