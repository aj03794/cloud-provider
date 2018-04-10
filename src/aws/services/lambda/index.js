export const createLambda = ({ appName, entryPoint }) => new Promise((resolve, reject) => {
	return resolve({ msg: 'Upload to AWS Lambda Successful' })
})

import { exec } from 'child_process'
import { resolve as resolvePath } from 'path'

export const createLambda = ({ appName, entryPoint }) => new Promise((resolve, reject) => {
	console.log('createLambda', arguments)
	const appLocation = resolvePath(__dirname, '../../../../../', 'example-app')
	console.log('appLocation', appLocation)
	return exec(``,
		{
			cwd: appLocation
		},
		(err, stdout, stderr) => {
			if (err) {
				console.log('Something went wrong', err)
				return reject({ message: 'Something went wrong uploading' })
			}
			console.log(stdout)
			return resolve({ msg: 'Upload to AWS Lambda Successful' })
		}
	)
})
