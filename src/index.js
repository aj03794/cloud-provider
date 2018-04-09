const manifest = require('../../example-app/manifest.json')

export const deployApplication = () => {
	// const { name, services } = manifest
	// return import(`./${name.toLowerCase()}/index.js`).then(cloudProvider => {
	// 	// console.log('cloudProvider', cloudProvider[name.toLowerCase()])
	// 	return cloudProvider[name.toLowerCase()](services)
	// })
	const names = Object.keys(manifest)
	return names.map(name => {
		// return import(`./${name.toLowerCase()}/index.js`).then(cloudProvider => {
			// const services = Object.values(manifest[name])
			console.log('name', name)
			console.log('asdfa', manifest[name].services)
			// console.log('services', services)
			// console.log('cloudProvider', cloudProvider[name.toLowerCase()])
			// return cloudProvider[name.toLowerCase()](services)
		// })
	})
	// console.log('names', names)
}

deployApplication()
