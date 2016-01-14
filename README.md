Backfeed.cc built with Harp.js
==============================


## Getting started

1) Install Harp globally

```
$ sudo npm install -g harp
```

2) Clone this repository
```
$ git clone git@github.com:Backfeed/Backfeed-Website.git
```

3) Start Harp server from within the `_harp` directory
```
$ cd _harp && npm run server
```

4) Visit [http://localhost:9000/](http://localhost:9000/) in your browser and follow the instructions in the page

> Tip: Comas and quotes are important when writing JSON. Follow the same structure as the sample data to avoid syntax issues.

## Publishing & Deploying

The Backfeed website is deployed to GitHub Pages.
The only requirement is that the website's files will be stored at the root directory of the repository.
To convert this to normalized HTML, JS and CSS, run `npm run compile` from within the `_harp` directory.
A static website will be created in the root folder of this repository, which you can publish anywhere, even completely independently from Harp.

## License

TBD