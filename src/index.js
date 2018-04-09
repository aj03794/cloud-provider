// Based on a script called by another application
// It will pass that node env to this function and it will
// choose the cloud provider

const manifest = require('../../example-app/manifest.json')
console.log('manifest', manifest)
// x.then(result => console.log(result))

// const cloudProviderName = process.argv[2]

// console.log('cloudProviderName', cloudProviderName)

// export const deployApplication = ({ cloudProviderName}) => {
// 	return import(`./${cloudProviderName.toLowerCase()}/index.js`).then(cloudProvider => {
// 		console.log('cloudProvider', cloudProvider[cloudProviderName])
// 		return cloudProvider[cloudProviderName]
// 	})
// 	// const x = import (`../../example-app/manifest.json`)
// 	// console.log('x', x)
// }
//
// deployApplication({ cloudProviderName: process.argv[2] })
// .then(result => console.log('result', result))

export const deployApplication = () => {
	const { name, services} = manifest
	return import(`./${name.toLowerCase()}/index.js`).then(cloudProvider => {
		// console.log('cloudProvider', cloudProvider[name.toLowerCase()])
		return cloudProvider[name.toLowerCase()](services)
	})
}

deployApplication()
