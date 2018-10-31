---
title: EPUB Dev Testing
tags: EPUB, Android, mobile, testing, terminal
abstract: tbd....
---

### EPUB Dev Testing
For the past five years or so, many of us have become accustomed to developing websites and web apps using powerful build tools that speed up our workflow and allow us to focus on really interesting features and design decisions without needing to sacrifice performance and usability. 

The EPUB specification utilizes the same expansive technologies (HTML/CSS/JS) that we've been using to push the boundaries of the web, but for e-books. Somewhere in between EPUB and PWA (progressive web apps), there is tremendous potential for a new wave of digital publishing which might be welcome by many savy consumers who have come to expect a rich, multimedia reading experience. While PWAs benefit, by way of proximity, from each iteration of the SPA (single page app), EPUB still lags further behind. 

Many of the challenges of developing EPUBs have already been solved for the web. The first that usually comes to mind is the concept of using a dev server for rapid prototyping during the development process. It is now almost trivial to launch your website code in a browser with a Node process serving it and reloading each time you make a change. This is true whether this is handled by a plugin for VS Code or Atom, a starter kit cloned from GitHub or installed from NPM, or a customizable build tool like Webpack, Gulp, Grunt, or Parcel combined with a dev server tool like Webpack Dev Server or BrowserSync.

There are literally thousands of solutions when it comes to developing for the web. But I haven't found that's the case for EPUBs. Like websites and web apps, EPUBs need to be tested on a variety of devices. However, unlike these other mediums, EPUBs are not designed for the browser. While the browsers have responded to the hoards of angry developers to fall in line, e-book readers applications have not faced the same level of pressure from the relatively small digital publishing community, and are expected only to meet a minimal set of front-end standards set forth by the IDPF. From my experience so far, support for newer CSS and JS features ranges from the browser equivelents of IE8 to the latest version of Chrome. And while it's somewhat easy to install and test a website in different browser versions on almost any device or in a virtual machine, there are not always desktop versions of e-book reader apps, or they're so different when compared with their mobile app counterparts that it's never safe to assume that if the desktop app supports something, it will also be supported by the mobile app of the same name.

There are many cloud services for testing websites in different browsers on different devices. As far as I know, there's no way to test an EPUB with any of these services, as you would need to launch the EPUB in an e-book reader app, not a browser window. There's nothing like Puppateer or Selenium or Cypress for e-book reader apps. So, beyond building the EPUB and then manually loading and testing, our options are very limited. 

We find ourselves in the same situation that web developers were in 5 years ago, with a rich set of front-end features, but no way to safely and confidently implement them.

This is what I've found so far....

#### Readium Viewer

There seem to be two segments of the EPUB community that are focused on getting EPUBs to work in the browser. One segment is approaching it as a means of bringing "design once, deploy everywhere" to publishing, the idea being that what if your e-book was your source of truth and everything else, including the print book, was just a rendition of that. The other approach embraces the web as a platform for reading and interacting with the text in ways that are familiar to users of social media. This latter segment is best


#### iOS

If you're developing 


#### Android
