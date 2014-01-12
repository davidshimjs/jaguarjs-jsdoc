Jaguar.js template for JSDoc 3
---
[View Jaguar.js Documentations](http://davidshimjs.github.io/jaguarjs/doc/)

Usage
---
1. If you want to create documentations with sample files, you can use commands below.
```
$ npm install
$ grunt demo
```

You can see any output related jsdoc process with a `--debug` flag.

```
$ grunt demo --debug
```

2. If you already have jsdoc system, you can use this project as jsdoc template.
```
$ jsdoc -t `project folder` -c `configuration file` `source files` `README.md file`
```

conf.json
---
You can set options for customizing your documentations.

```
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
    }
}
```

License
---
This project under the MIT License. and this project refered by default template for JSDoc 3.