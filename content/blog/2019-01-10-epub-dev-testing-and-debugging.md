---
title: EPUB Dev Testing and Debugging
tags: EPUB, E-books, Node, JavaScript, Testing, Cypress, CLI, Android, Mobile
abstract: Approaches to testing and debugging scripted EPUBs during development, including in the browser, Apple Books, emulators, and physical devices. Also, introduces two small tools I created to improve development experience.
---

### EPUB Dev Testing

For the past five years or so, many of us have become accustomed to developing websites and web apps using powerful build tools that speed up our workflow and allow us to focus on really interesting features and design decisions without needing to sacrifice performance and usability.

The EPUB specification utilizes the same expansive technologies (HTML/CSS/JS) that we've been using to push the boundaries of the web, but for e-books. Somewhere in between EPUB and PWA (progressive web apps), there is tremendous potential for a new wave of digital publishing which might be welcome by many savy consumers who have come to expect a rich, multimedia reading experience. While PWAs benefit, by way of proximity, from each iteration of the SPA (single page app), EPUB still lags further behind.

Many of the challenges of developing EPUBs have already been solved for the web. The first that usually comes to mind is the concept of using a dev server for rapid prototyping during the development process. It is now almost trivial to launch your website code in a browser with a Node process serving it and reloading each time you make a change. This is true whether this is handled by a plugin for VS Code or Atom, a starter kit cloned from GitHub or installed from NPM, or a customizable build tool like Webpack, Gulp, Grunt, or Parcel combined with a dev server tool like Webpack Dev Server or BrowserSync.

There are literally thousands of solutions when it comes to developing for the web. But I haven't found that's the case for EPUBs. Like websites and web apps, EPUBs need to be tested on a variety of devices. However, unlike these other mediums, EPUBs are not designed for the browser. While the browsers constantly fall in line to meet the demands of web developers, e-book readers applications have not faced the same level of pressure from the relatively small digital publishing community, and are expected only to meet a minimal set of front-end standards set forth by the IDPF. From my experience so far, support for newer CSS and JS features ranges from the browser equivelents of IE8 to the latest version of Chrome. And while it's somewhat easy to install and test a website in different browser versions on almost any device or in a virtual machine, there are not always desktop versions of e-book reader apps, or they're so different when compared with their mobile app counterparts that it's never safe to assume that if the desktop app supports something, it will also be supported by the mobile app of the same name.

We find ourselves in the same situation that web developers were in 5 years ago, with a rich set of front-end features, but no way to implement them confidently without extensive manual device testing. There are many cloud services for testing websites in different browsers on different devices. As far as I know, there's no way to test an EPUB with any of these services, as you would need to launch the EPUB in an e-book reader app, not a browser window. There's nothing like Puppateer or Selenium or Cypress for e-book reader apps. So, beyond building the EPUB and then manually loading and testing, our options are very limited. But this is what I've found so far....

#### In the Browser

There seem to be two segments of the EPUB community that are focused on getting EPUBs to work in the browser. One segment is approaching it as a means of bringing "design once, deploy everywhere" to publishing, the idea being that what if your e-book was your source of truth and everything else, including the print book, was just a rendition of that. The other approach embraces the web as a platform, or a cloud provider, that not only hosts the e-books on behalf of users but also allows them to take advantage of features only possible on the web, like synchronizing public and private annotations. This latter group is best represented by [Readium Foundation](https://readium.org/).

We can use [ReadiumJS Viewer](https://github.com/readium/readium-js-viewer) to load EPUBs in the browser, making it possible to use existing dev server tools.

Download the [Readium Cloud Reader Lite](https://github.com/readium/readium-js-viewer/releases) and add it to your develepment workflow. Build your EPUB in its own directory within the `epub_content` directory. It does not need to be compressed or have the `.epub` extension. Configure your dev server tool to launch `index.html?epub=epub_content/` + the name of the EPUB directory on localhost.

To make it simpler, I created a tiny CLI (command line interface), [launch-epub](https://github.com/thephilgray/launch-epub) that wraps the cloud reader in a Node application. Once installed, simply run `launch-epub` from within the EPUB project directory or followed by a path to the EPUB file or directory as the first argument. The program will mount your EPUB in a specially configured instance of `live-server` and launch the cloud reader (with your EPUB) in the browser.

I'm in the process of porting this tool into a larger CLI application that will also provide the option to restrict the cloud reader frame to common device aspect ratios and display it inside of device frames.

One of the nicest things about developing your EPUB with a reader in the browser is that you have full access to your browser's dev tools for inspecting and debugging.

See: [Using the CloudReader to Test EPUB Publications](https://readium.org/technical/technical-notes/_posts/testing-with-cloudreader/).

##### Notes On Automated Testing with Cypress

[Cypress](https://www.cypress.io/) is one of my favorite tools for automated testing. It's similar to `Puppateer` or `Selenium` in that it runs tests in its own Chromium instance. But it's faster, better maintained, has a more robust api, and it's not headless, so you can actually visually confirm your tests in a webFrame, which makes it a little more user-friendly. While I've only used `Cypress` for testing web apps, I was curious if I could get it play nicely with the cloud reader in the browser.

I was able to run some basic tests, but honestly, I haven't found a practical way of incorporating this kind of testing in my workflow yet. But for future reference, here are a couple tips for getting up and running:

- Set `chromeWebSecurity` to `false` in Cypress config (`cypress.json`)

```json
{ "chromeWebSecurity": false }
```

- Refer to this [solution](https://github.com/cypress-io/cypress/issues/715#issuecomment-402314281) for accessing the iframe

```js
// plugins/index.js

module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, args) => {
    console.log(browser, args); // see what all is in here!

    if (browser.name === 'chrome') {
      args.push('--disable-site-isolation-trials');

      // whatever you return here becomes the new args
      return args;
    }
  });
};

// example unit test

/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/index.html?epub=epub_content/test-ebook');
  });

  it('Renders the ebook cover page', () => {
    cy.wait(3000); // allow some time for Readium to load the epub
    cy.get('#epub-reader-frame iframe').then(iframe => {
      const doc = iframe.contents();
      doc.get('#cover');
    });
  });
});
```

See also: [Ace](https://github.com/daisy/ace), an awesome new tool for EPUB accessibility testing.

#### MacOS/iOS

If you're developing EPUBs on MacOS, you have access to Apple's Books app. This is a great tool for development because Books exposes two awesome features for savy users: the [Book Proofing Tool](https://help.apple.com/itc/booksassetguide/#/itc073460726) and [Safari Web Inspector](https://help.apple.com/itc/booksassetguide/#/itc5905301b7). Follow the instructions in the previous links (both to the Apple Books Asset Guide) for setup details.

You can use this tool in combination with a dev server, as well as with Readium Cloud Reader. From my experience so far, it can be a bit laggy and crashes from time to time, but you get access to the web inspector of an actual e-book reader that comes pre-installed on many user devices. Furthermore, if you have an iPad or iPhone connected, you can sync the proof with the device, updating each time you update the code. Again, the synching can be a bit laggy when the e-book is being hosted by a dev server at the end of a complex build workflow, but it's really convenient compared with the alternative of manually loading the compressed, validated EPUB file into iTunes each time you make a change.

To proof a book, you don't need to compress the EPUB but you do need the `.epub` extension. So, I like to add the extension to the name of my EPUB project directory.

Since there is nothing like a detached version of Apple Books for testing and it's closed-source, I'm not sure how you could develop an automated testing suite for MacOS/iOS.

#### Android

For me, Android has been the most elusive target. Though the OS is open source and has more potential for testing, the devices themselves are manufactured by many different vendors and there's nothing like an agreed-upon e-book reader app that comes pre-installed on every Android device. Furthermore, the devices greatly vary in terms of aspect ratio and OS version.

One approach I've been thinking about for a while is to use Android Studio to load the EPUB on different device emulators. If you attempt this, the first thing you'll discover is that the Play Store is not available on any of the emulators. So, there's no e-book reader application, and no way to install one, unless you have the source code. However, there is a one workaround. You can sideload [Open GApps](https://opengapps.org/) on the emulator. This can be kind of tricky if you don't have much experience working with Android Studio, but the tutorial, [Installing Google Play Services on an Android Studio emulator](https://medium.com/@dai_shi/installing-google-play-services-on-an-android-studio-emulator-fffceb2c28a1) got me through it (read the comments, though).

##### Notes on Using Emulators

- Install Android Studio
- Download GApps and extract packages (again, see: [Installing Google Play Services on an Android Studio emulator](https://medium.com/@dai_shi/installing-google-play-services-on-an-android-studio-emulator-fffceb2c28a1))
- (Note: this step is not required but included for consistency with steps below) Add `$ANDROID_HOME` as an environmental variable. Also add `emulator` and `tools` to the path. If you get a missing emulator engine error message, just make sure to add `emulator` first, before `tools`. I’m not sure why.

- Create a new emulator <emulator-name> in Android Studio or use CLI command

- Start emulator in writable mode (may need to wipe user data if emulator was created previously and is not booting or run emulator command with `-no-snapshot` flag)

```bash
emulator @<emulator-name> -writable-system &
```

- Run as root and remount in writable mode

```bash
adb root
adb remount -writable-system
```

- Install GApps (from the directory where you extracted the packages)

```bash
adb push etc /system
adb push framework /system
adb push app /system
adb push priv-app /system
```

- Restart

```bash
adb shell stop
adb shell start
```

- Login to Google through the emulator
- Install the Adobe Digital Editions or other reading app from the Google Play Store
- Push the e-book to the file system

```bash
adb push <e-book-name> /storage/emulated/0/Digital\ Editions/
```

- If you want to push other files to the device and you’re having difficulty navigating adb shell, you can use `adb shell` with `ls` and `grep` as documented here: [https://stackoverflow.com/questions/16796432/how-to-list-all-the-files-in-android-phone-by-using-adb-shell](https://stackoverflow.com/questions/16796432/how-to-list-all-the-files-in-android-phone-by-using-adb-shell)

##### TODOS

- Write custom scripts for quickly spinning up emulators and sideloading GApps and ebooks
- Reasearch automated testing for Android Studio emulators
- Look into possibly using [Genymotion](https://www.genymotion.com/desktop/) for emulation

#### Device Debugging with `epub-debugger`

As I mentioned, you have access to a console in both the browser (when you mount the EPUB in the cloud reader) and when you mount the EPUB in proof mode in Apple Books. However, in both cases, what happens in the web- or desktop-based readers is not always a predictor of what will happen on an actual device. Device e-book reading applications don't have any kind of dev tools, so there's no way to know which function is returning undefined or throwing an error, or what the current values are in state.

To address this, I created [epub-debugger](https://github.com/thephilgray/epub-debugger). It's still more of a proof-of-concept, but you can add this script to any EPUB XHTML page and it will display a little console box over the page. Similar to the console in browser dev tools (but with a much smaller feature set), it will report any errors to you, evaluate any JavaScript you enter, and give you back a list of the properties. There's a button to minimize it on the right side of the header, and you can drag from the left side of the header to move it if it's in the way.
