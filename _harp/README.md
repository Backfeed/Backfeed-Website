Backfeed.cc built with Harp.js
==============================


## Getting started

1) Install Harp in your computer

```
$ sudo npm install -g harp
```

2) Clone this repository
```
$ git clone git@github.com:Backfeed/Backfeed-Website.git
```

3) Start Harp server
```
$ harp server _harp/ --port 9966
```

4) Visit [http://localhost:9966/](http://localhost:9966/) in your browser and follow the instructions in the page

> Tip: Comas and quotes are important when writing JSON. Follow the same structure as the sample data to avoid syntax issues.

## Publishing & Deploying

The Backfeed website is deployed to GitHub Pages.
The only requirement is that the website's files will be stored at the root directory of the repository.
To convert this to normalized HTML, JS and CSS, run `harp compile _harp/ .` (notice the trailing dot).
A static website will be created, which you can publish anywhere, even completely independently from Harp.

## License

TBD