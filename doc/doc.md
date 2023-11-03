## Modules

<dl>
<dt><a href="#Node red utils for @lightcode npm modules,module_ editor side"> editor side</a></dt>
<dd></dd>
<dt><a href="#Node red utils for @lightcode npm modules,module_ server side"> server side</a></dt>
<dd></dd>
</dl>

<a name="Node red utils for @lightcode npm modules,module_ editor side"></a>

##  editor side

* [ editor side](#Node red utils for @lightcode npm modules,module_ editor side)
    * [.MultiTypeField](#Node red utils for @lightcode npm modules,module_ editor side.MultiTypeField)
        * [new exports.MultiTypeField(RED, fieldName, types)](#new_Node red utils for @lightcode npm modules,module_ editor side.MultiTypeField_new)
        * [.defaults()](#Node red utils for @lightcode npm modules,module_ editor side.MultiTypeField+defaults)
        * [.oneditprepare(node)](#Node red utils for @lightcode npm modules,module_ editor side.MultiTypeField+oneditprepare)
        * [.oneditsave(node)](#Node red utils for @lightcode npm modules,module_ editor side.MultiTypeField+oneditsave)

<a name="Node red utils for @lightcode npm modules,module_ editor side.MultiTypeField"></a>

###  editor side.MultiTypeField
Create a multitype filed

**Kind**: static class of [<code> editor side</code>](#Node red utils for @lightcode npm modules,module_ editor side)  

* [.MultiTypeField](#Node red utils for @lightcode npm modules,module_ editor side.MultiTypeField)
    * [new exports.MultiTypeField(RED, fieldName, types)](#new_Node red utils for @lightcode npm modules,module_ editor side.MultiTypeField_new)
    * [.defaults()](#Node red utils for @lightcode npm modules,module_ editor side.MultiTypeField+defaults)
    * [.oneditprepare(node)](#Node red utils for @lightcode npm modules,module_ editor side.MultiTypeField+oneditprepare)
    * [.oneditsave(node)](#Node red utils for @lightcode npm modules,module_ editor side.MultiTypeField+oneditsave)

<a name="new_Node red utils for @lightcode npm modules,module_ editor side.MultiTypeField_new"></a>

#### new exports.MultiTypeField(RED, fieldName, types)

| Param | Description |
| --- | --- |
| RED | Node-Red instance |
| fieldName | field name |
| types | Allowed field type. Default : `['msg','flow','global','jsonata','env', 'cred']` |

**Example**  
```js
const myMultitypeField = new MultiTypeField(RED, 'token')
RED.nodes.registerType('mynode', {
  defaults: {
    ...myMultitypeField.defaults(),
    myNormalFiled: {},
    myNormalFiled: {}
  },
   oneditprepare: function() {
       myMultitypeField.oneditprepare(this)
   },
   oneditsave: function() {   
       myMultitypeField.oneditsave(this)
   }
 })
```
<a name="Node red utils for @lightcode npm modules,module_ editor side.MultiTypeField+defaults"></a>

#### multiTypeField.defaults()
Generate defaults option that can be passed to RED.nodes.registerType option

**Kind**: instance method of [<code>MultiTypeField</code>](#Node red utils for @lightcode npm modules,module_ editor side.MultiTypeField)  
<a name="Node red utils for @lightcode npm modules,module_ editor side.MultiTypeField+oneditprepare"></a>

#### multiTypeField.oneditprepare(node)
Must be called from your oneditprepare function

**Kind**: instance method of [<code>MultiTypeField</code>](#Node red utils for @lightcode npm modules,module_ editor side.MultiTypeField)  

| Param | Description |
| --- | --- |
| node | Node reference. Sould be `this` when called from oneditprepare |

<a name="Node red utils for @lightcode npm modules,module_ editor side.MultiTypeField+oneditsave"></a>

#### multiTypeField.oneditsave(node)
Must be called from your oneditsave function

**Kind**: instance method of [<code>MultiTypeField</code>](#Node red utils for @lightcode npm modules,module_ editor side.MultiTypeField)  

| Param | Description |
| --- | --- |
| node | Node reference. Sould be `this` when called from oneditsave |

<a name="Node red utils for @lightcode npm modules,module_ server side"></a>

##  server side

* [ server side](#Node red utils for @lightcode npm modules,module_ server side)
    * [~Utils](#Node red utils for @lightcode npm modules,module_ server side..Utils)
        * [new Utils(RED, node)](#new_Node red utils for @lightcode npm modules,module_ server side..Utils_new)
        * [.getProperty(msg, property, propertyType)](#Node red utils for @lightcode npm modules,module_ server side..Utils+getProperty)

<a name="Node red utils for @lightcode npm modules,module_ server side..Utils"></a>

###  server side~Utils
Utils class

**Kind**: inner class of [<code> server side</code>](#Node red utils for @lightcode npm modules,module_ server side)  

* [~Utils](#Node red utils for @lightcode npm modules,module_ server side..Utils)
    * [new Utils(RED, node)](#new_Node red utils for @lightcode npm modules,module_ server side..Utils_new)
    * [.getProperty(msg, property, propertyType)](#Node red utils for @lightcode npm modules,module_ server side..Utils+getProperty)

<a name="new_Node red utils for @lightcode npm modules,module_ server side..Utils_new"></a>

#### new Utils(RED, node)

| Param | Description |
| --- | --- |
| RED | Node-Red instance |
| node | node instalce |

<a name="Node red utils for @lightcode npm modules,module_ server side..Utils+getProperty"></a>

#### utils.getProperty(msg, property, propertyType)
Get property from a multi-type field

**Kind**: instance method of [<code>Utils</code>](#Node red utils for @lightcode npm modules,module_ server side..Utils)  

| Param | Description |
| --- | --- |
| msg | Node Red message |
| property | property field |
| propertyType | property field type |

