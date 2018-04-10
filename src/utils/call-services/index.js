export const callServices = (cloudServices, manifestServices) => {
	return manifestServices.filter(service => {
		const serviceName = Object.keys(service)
		return cloudServices[serviceName] ? true : handleNonExistentService(service)
	}).map(service => {
		const serviceName = Object.keys(service)
		const serviceParams = Object.values(service)
		return cloudServices[serviceName](serviceParams)
	})
}

export const handleNonExistentService = (service) => {
	console.log(`Service defined in manifest.json file does not exist: `, service)
	return
}
