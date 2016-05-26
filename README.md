# Jaguar.js template for JSDoc 3

- [Jaguar.js](http://jaguarjs.com/)
- [Jaguar.js Documentations](http://jaguarjs.com/doc/)
- [JSDoc3](https://github.com/jsdoc3/jsdoc)
- [JSDoc3 API Documentations](http://usejsdoc.org)

## Installation

Install the template using NPM:

```bash
npm install jaguarjs-jsdoc --save-dev
```

## Usage

If you already have JSDoc system, you can use this project as JSDoc template. More information about JSDoc command-line arguments can be found [here](http://usejsdoc.org/about-commandline.html).
 
```bash
jsdoc -c conf.json -R README.md
```

### conf.json

You can set options for customizing your documentations. Notice the `"template"` field for setting the path to **jaguarjs-jsdoc**.

```json
"templates": {
    "applicationName": "Demo",
    "disqus": "",
    "googleAnalytics": "",
    "openGraph": {
        "title": "",
        "type": "website",
        "image": "",
        "site_name": "",
        "url": ""
    },
    "meta": {
        "title": "",
        "description": "",
        "keyword": ""
    },
    "linenums": true,
    "source": {
        "include": [
            "./src/"
        ],
        "includePattern": ".+\\.js(doc)?$",
        "excludePattern": "(^|\\/|\\\\)_"
    },
    "opts": {
        "encoding": "utf8",
        "recurse": true,
        "private": false,
        "lenient": true,
        "destination": "./docs",
        "template": "./node_modules/jaguarjs-jsdoc"
    }
}
```

## License

This project under the MIT License. and this project refered by default template for JSDoc 3.