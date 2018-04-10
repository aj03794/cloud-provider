const manifest = require('../../example-app/manifest.json')
import { callServices } from './utils/call-services'

export const deployApplication = () => {
	const names = Object.keys(manifest)
	return names.map(name => {
		return import(`./${name.toLowerCase()}/index.js`).then(cloudProvider => {
			const { services } = manifest[name]
			console.log(`Manifest defined services for ${name}`, services)
			return cloudProvider[name.toLowerCase()]({ services, callServices })
		})
	})
}

const z = deployApplication()

Promise.all(z).then(result => console.log('result', result))
