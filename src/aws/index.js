export const aws = ({ services, callServices}) => {
	console.log('Manifest defined aws services: ', services)
	return import(`./services`).then(awsServices => {
		return Promise.all(callServices(awsServices, services))
		.then(results => {
			console.log('AWS results', results)
			return {
				cloudProvider: 'aws',
				results
			}
		})
	})
}
