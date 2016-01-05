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
$ harp server --port 9966
```

4) Visit [http://localhost:9966/](http://localhost:9966/) in your browser and follow the instructions in the page

> Tip: Comas and quotes are important when writing JSON. Follow the same structure as the sample data to avoid syntax issues.

## Publishing & Deploying

To convert this to normalized HTML, JS and CSS, run `harp compile` from the command line and a `www` directory will be created with all your files contained inside it, which you can publish anywhere.

Here are some popular deploying options:

- [Deploying using the Harp Platform](http://harpjs.com/docs/deployment/harp-platform)
- [Deploying to GitHub Pages](http://harpjs.com/docs/deployment/github-pages)
- [Deploying to Heroku](http://harpjs.com/docs/deployment/heroku)

## License

MIT