/**
 * @module Node red utils for @lightcode npm modules, editor side
 * */

/**
 * Create a multitype filed
 * @param RED - Node-Red instance
 * @param fieldName - field name
 * @param types - Allowed field type. Default : `['msg','flow','global','jsonata','env', 'cred']`
 * @example
 * const myMultitypeField = new MultiTypeField(RED, 'token')
 * RED.nodes.registerType('mynode', {
 *   defaults: {
 *     ...myMultitypeField.defaults(),
 *     myNormalFiled: {},
 *     myNormalFiled: {}
 *   },
 *    oneditprepare: function() {
 *        myMultitypeField.oneditprepare(this)
 *    },
 *    oneditsave: function() {   
 *        myMultitypeField.oneditsave(this)
 *    }
 *  })
 * */
export class MultiTypeField {
	constructor(RED, fieldName, types=['msg','flow','global','jsonata','env', 'cred']) {
		this.RED = RED
		this.fieldName = fieldName
		this.types = types
	}
 
	/**
	 * Generate defaults option that can be passed to RED.nodes.registerType option
	 * */
	defaults() {
		return {
			[`${this.fieldName}Type`]: {
				value:"msg"
			},
			[`${this.fieldName}`]: {
				value: "payload",
				required: true,
				label: this.RED._("node-red:common.label.payload"),
				validate: this.RED.validators.typedInput(`${this.fieldName}Type`, false)
			}
		}
	}

	/**
	 * Must be called from your oneditprepare function
	 * @param node - Node reference. Sould be `this` when called from oneditprepare
	 * */
	oneditprepare(node) {
		$(`#node-input-${this.fieldName}`).typedInput({
			default: node[`${this.fieldName}Type`] || 'msg',
			types: this.types
		})
	}

	/**
	 * Must be called from your oneditsave function
	 * @param node - Node reference. Sould be `this` when called from oneditsave
	 * */
	oneditsave(node) {
		node[`${this.fieldName}Type`] = $(`#node-input-${this.fieldName}`).typedInput('type')
	}
}
