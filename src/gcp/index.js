export const gcp = ({ services, callServices }) => {
	console.log('gcp services', services)
	return import(`./services`).then(gcpServices => {
		return Promise.all(callServices(gcpServices, services))
		.then(result => {
			console.log('GCP result', result)
			return {
				cloudProvider: 'gcp',
				result
			}
		})
	})
}
