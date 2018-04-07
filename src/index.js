// Based on a script called by another application
// It will pass that node env to this function and it will
// choose the cloud provider

const deployApplication = (process.argv[2]) => {
	import(`./${cloudProvider.toLowerCase()}/index.js`).then(cloudProvider => {
		console.log('cloudProvider', cloudProvider)
	})
}
