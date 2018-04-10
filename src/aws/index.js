export const aws = ({ services, callServices}) => {
	console.log('Manfiest defined aws services', services)
	return import(`./services`).then(awsServices => {
		return Promise.all(callServices(awsServices, services))
		.then(result => {
			console.log('AWS result', result)
			return {
				cloudProvider: 'aws',
				result
			}
		})
	})
}
