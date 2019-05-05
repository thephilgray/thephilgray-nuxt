---
title: Custom Readaloud Plugin for EPUBs
abstract: A frontend plugin designed as a text and audio synchronization alternative to EPUB Media Overlays.
category: work
image: https://s3.amazonaws.com/pg-image-host/thepg/screens/customreadaloud.png
tags: JavaScript, EPUB, E-books, Webpack
published: true
---

### Overview

The custom-read-aloud plugin is designed as a text and audio
synchronization alternative to EPUB Media Overlays. It is inteded for
use cases where automatic page-turning is not required.

### Background

[EPUB Media Overlays
3.1](http://www.idpf.org/epub/31/spec/epub-mediaoverlays.html) defines a
set of standards for reading systems to provide \"enhanced accessibility
for any user who has difficulty following the text of a traditional
book\". Though a valuable accesibility feature for more traditional
text-heavy ebooks and children\'s literature, the specification does not
directly address second language learning. Further, vendor
implementations vary and provide a less than adequate API for developers
of interactive textbooks, who may want to put more control in the
reader\'s hands and can do without the page-turn feature.

### Solution

This is a purely front-end progressive enhancement approach. It executes
after the page is loaded and creates event listeners on the audio
element and text to be synced. These listeners add a CSS class to a
corresponding markup delimited segment of text as the audio is playing.

To avoid potential conflicts in some reading systems, it should not be
used with Media Overlays or within a book that may be utilizing that
feature.

### How It Works

The plugin provides a JavaScript class \`CustomReadAloud\` on the global
object. This can be instantiated in JS with the \`new\` keyword, passing
in element selectors as arguments for the two HTML elements to sync. The
first argument must be a selector for the element containing the
paragraphs or spans of text to be highlighted while the audio is
playing. The second argument must be a selector for the audio element.
In order to sync text with audio, data-attributes (specifying the start
time in seconds) must be manually added to each chunk of text. Upon
instantiation, the plugin will map the chunks of text with their
specified start times and add event listeners to each chunk and the
audio element. The plugin will also listen for \`timeupdate\` events
emitted from the audio object (about 4 times a second) during playback.
If the audio element\'s currentTime approximately matches (within 500ms)
any of the text chunk start times, a CSS class will be applied to
matching text chunk. A rule for this CSS class can be added to the
stylesheet to create a highlight effect. Each time the class is added to
an element containing a chunk of text, it is removed from any other
elements that may have been previously \"highlighted\".

**Link to repo**: [https://github.com/thephilgray/custom-readaloud-plugin](https://github.com/thephilgray/custom-readaloud-plugin)

**Link to demo**: [https://codepen.io/phillipgray/full/bOmeed](https://codepen.io/phillipgray/full/bOmeed)
