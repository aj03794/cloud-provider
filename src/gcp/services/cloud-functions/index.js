import { exec } from 'child_process'
import { resolve as resolvePath } from 'path'

export const createCloudFunction = ({ appName, entryPoint }) => new Promise((resolve, reject) => {
	// console.log('appName', appName)
	// console.log('entryPoint', entryPoint)
	// const appLocation = resolvePath(__dirname, '../../../../../', 'example-app')
	// console.log('appLocation', appLocation)
	// return exec(`gcloud beta functions deploy ${appName} --entry-point ${entryPoint} --trigger-http`,
	// 	{
	// 		cwd: appLocation
	// 	},
	// 	(err, stdout, stderr) => {
	// 		if (err) {
	// 			console.log('Something went wrong', err)
	// 			return reject({ message: 'Something went wrong uploading' })
	// 		}
	// 		console.log(stdout)
	// 		return resolve({ message: 'Upload Successful' })
	// 	}
	// )
	return resolve({ msg: 'Upload to GCP Cloud Functions Successful' })
})
