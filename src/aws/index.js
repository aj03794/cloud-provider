export const aws = (services) => {
	console.log('aws services', services)
	return import(`./services`).then(awsServices => {
		return Promise.all(callServices(awsServices, services))
		.then(() => {
			return {
				cloudProvider: 'aws'
			}
		})
	})
}

export const callServices = (cloudServices, manifestServices) => {
	return manifestServices.filter(service => {
		const key = Object.keys(service)[0]
		const values = Object.values(service)[0]
		return cloudServices[key]
			? cloudServices[key](values)
			: handleNonExistentService(service)
	})
}

export const handleNonExistentService = (service) => {
	console.log('Service does not exist: ', service)
}
