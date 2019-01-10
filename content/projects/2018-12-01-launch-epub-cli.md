---
title: Launch-EPUB CLI
abstract: A tiny CLI app to mount an EPUB to a live-server and launch it in Readium in the browser.
category: work
tags: JavaScript, Node, CLI, EPUB, E-books
published: true
---

I created a tiny CLI (command line interface), [launch-epub](https://github.com/thephilgray/launch-epub) that wraps Readium's Cloud Reader in a Node application. Once installed, simply run `launch-epub` from within the EPUB project directory or followed by a path to the EPUB file or project directory as the first argument. The program will mount an EPUB in a specially configured instance of `live-server` and launch the reader (with the EPUB sideloaded) in the browser for development needs.

Using Zeit's [Pkg](https://github.com/zeit/pkg), I packaged it as a self-contained executable for sharing with frontend team members who are not as famililar with the command line or Node.

**Link to repo**: [https://github.com/thephilgray/launch-epub](https://github.com/thephilgray/launch-epub)
