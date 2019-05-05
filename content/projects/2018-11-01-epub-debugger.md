---
title: EPUB-debugger
abstract: A frontend plugin for debugging scripted EPUBs.
category: work
image: https://s3.amazonaws.com/pg-image-host/thepg/screens/epubdebugger.png
tags: JavaScript, CSS, EPUB, E-books, Gulp
published: true
---

When developing scripted EPUBs, you have access to a console in both the browser (when you mount the EPUB in the cloud reader) and when you mount the EPUB in proof mode in Apple Books. However, in both cases, what happens in the web- or desktop-based readers is not always a predictor of what will happen on an actual device. Device e-book reading applications don't have any kind of dev tools, so there's no way to know which function is returning undefined or throwing an error, or what the current values are in state.

To address this, I created [epub-debugger](https://github.com/thephilgray/epub-debugger). It's still more of a proof-of-concept, but you can add this script to any EPUB XHTML page and it will display a little console box over the page. Similar to the console in browser dev tools (but with a much smaller feature set), it will report any errors to you, evaluate any JavaScript you enter, and give you back a list of the properties. There's a button to minimize it on the right side of the header, and you can drag from the left side of the header to move it if it's in the way.

**Link to repo**: [https://github.com/thephilgray/epub-debugger](https://github.com/thephilgray/epub-debugger)
