Template for JSDoc 3
---

This forked is for supporting the automation tools. For original [here](https://github.com/davidshimjs/jaguarjs-jsdoc).

- [JSDoc3](https://github.com/jsdoc3/jsdoc)
- [JSDoc3 API Documentations](http://usejsdoc.org)

Usage
---
1. Before using `grunt` with this demo, running this command first
```
$ npm install
```

2. If you want to create documentations with sample files, you can use commands below.
```
$ grunt demo
```

3. You can see any output related jsdoc process with a `--debug` flag.
```
$ grunt demo --debug
```

4. Using this workspace.
```
$ grunt build
```

5. You can provide external source files or path, its destination path and config file by running this command.
```
$ grunt build --src-`source path` --dst=`destination path` --config=`configuration path`
```

6. You can provide specific Gruntfile.js and combine with options from above.
```
$ grunt build --gruntfile `path of specific Gruntfile.js` --src-`source path` --dst=`destination path` --config=`configuration path`
```

7. If you already have jsdoc system, you can use this project as jsdoc template.
```
$ jsdoc -t `project folder` -c `configuration file` `source files` `README.md file`
```

conf.json
---
You can set options for customizing your documentations.

```
"templates": {
    "applicationName": "",
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
