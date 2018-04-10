export const gcp = ({ services, callServices }) => {
	console.log('gcp services', services)
	return import(`./services`).then(gcpServices => {
		return Promise.all(callServices(gcpServices, services))
		.then(results => {
			console.log('GCP result', results)
			return {
				cloudProvider: 'gcp',
				results
			}
		})
	})
}
