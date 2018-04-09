export const gcp = (services) => {
	console.log('gcp services', services)
	return import(`./services`).then(gcpServices => {
		return Promise.all(callServices(gcpServices, services))
		.then(() => {
			return {
				cloudProvider: 'gcp'
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
