// Based on a script called by another application
// It will pass that node env to this function and it will
// choose the cloud provider

// const cloudProviderName = process.argv[2]

// console.log('cloudProviderName', cloudProviderName)

export const deployApplication = ({ cloudProviderName }) => {
	return import(`./${cloudProviderName.toLowerCase()}/index.js`).then(cloudProvider => {
		console.log('cloudProvider', cloudProvider[cloudProviderName])
		return cloudProvider[cloudProviderName]
	})
}

deployApplication({ cloudProviderName: process.argv[2] })
.then(result => console.log('result', result))
// console.log('result', result)
