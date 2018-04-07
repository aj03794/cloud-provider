// Based on a script called by another application
// It will pass that node env to this function and it will
// choose the cloud provider

const cloudProviderName = process.argv[2]

console.log('cloudProviderName', cloudProviderName)

const deployApplication = () => {
	import(`./${cloudProviderName.toLowerCase()}/index.js`).then(cloudProvider => {
		console.log('cloudProvider', cloudProvider)
	})
}

// const deployApplication = () => {
// 	import(`./aws/index.js`).then(myFunction => {
// 		console.log('cloudProvider', myFunction)
// 	})
// }

deployApplication()
