## Decription

Utils for node-red @npm-lightcode packages

## Usage

To use this utils package in editor, you must :
  1. setup the editor javascript for your plugin as a module
  2. copy the `src/editor.js` file into your plugin `ressource` folder

### Example

Your plugin file structure should look like this : 
```
├── package.json
├── README.md
├── resources
│   ├── mynode-editor.js
└── src
    ├── mynode.html
    └── mynode.js
```

Write your Node-Red editor plugin `mynode.html` as you would normally, but move the editor javascript from your html file `mynode.html` to a dedicated file `mynode-editor.js` (the name don't have to end in `-editor`, it's just here for a clear example) and import it like this : 
```
<script type="text/x-red" data-template-name="github-octokit">
[Your editor template]
</script>

<script type="text/x-red" data-help-name="github-octokit">
[Your editor help template]
</script>

<script type="module" src="resources/@yourscope/node-red-contrib-my-node/mynode-editor.js"/>
```

{% note %}

**Note:** You can omit the `@yourscope` part if your npm package don't have a scope. Keep in mind that [Node-Red recommends to have one](https://nodered.org/docs/creating-nodes/packaging)

{% endnote %}

This is needed because you must import your editor javascript as a module to be able to use `import`

Finally you need to copy the editor utils file into your ressource directory when you package it, via a `package.json` script :
```
{
  ...
  "scripts": {
    ...
    "prepack": "cp node_modules/@lightcode/node-red-utils/src/editor.js resources/editor-utils.js"
    ...
  }
  ...
}
```

The editor utils classes are now importable from the file `mynode-editor.js` : 

```
import { MultiTypeField } from "./editor-utils.js"
```

## Documentation

See the `doc` folder
