# Notes

I previously compiled the SVG sprite sheet using [Iconizr](https://github.com/jkphl/iconizr/), perhaps using the web interface. Anyhow, I no longer had the source folder or any documentation, so after re-downloading all the individual SVGs, I wanted to write a little Node script inside of my project. But after running into numerous issues with both `node-iconizr` and `gulp-iconizr` (which is just a wrapper around the Node version), I decided to use the official PHP version.

Since this is just a stopgap measure before I look into other SVG icon systems, I didn't want to add PHP or the script as a dependency to my project. Below are instructions for installation and usage.

## Installation

- See [https://github.com/jkphl/iconizr/](https://github.com/jkphl/iconizr/) for installation instructions and api docs.

```bash
# clone the Iconizr repo
npx degit https://github.com/jkphl/iconizr.git iconizr

# make the php script executable
chmod a+x iconizr/iconizr.phps
```

## Usage

```bash
# change into the project root
cd <project-root>

# execute script with current options
~/code/iconizr/iconizr.phps -s -d --height 75 --width 75 -o assets/iconizr iconizr/svg
```
