/**
 * @module Node red utils for @npm-lightcode npm modules, server side
 * */

/**
 * Utils class
 * @param RED - Node-Red instance
 * @param node - node instalce 
 * */
class Utils {
	constructor(RED, node) {
		this.RED = RED
		this.node = node
	}
	/**
	 * Get property from a multi-type field
	 * @param msg - Node Red message
	 * @param property - property field
	 * @param propertyType - property field type
	 * */
	async getProperty(msg, property, propertyType) {
		return new Promise((resolve, reject) => {
			if (this.node.propertyType === 'jsonata') {
				this.RED.util.evaluateJSONataExpression(property, msg, (err,value) => {
					if (err) {
						reject(err)
					} else {
						resolve(value)
					}
				})
			} else {
				this.RED.util.evaluateNodeProperty(property, propertyType, this.node, msg, (err,value) => {
					if (err || value === undefined) {
						reject(new Error(`Unable to resolve ${propertyType}.${property}`))
					} else {
						resolve(value)
					}
				})
			}
		})
	}
}

module.exports = { Utils }
