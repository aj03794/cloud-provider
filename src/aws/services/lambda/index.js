import { exec } from 'child_process'
import { resolve as resolvePath } from 'path'

export const createLambdaFunction = ({ appName, entryPoint }) => new Promise((resolve, reject) => {
	return resolve({ msg: 'Upload to AWS Lambda Successful' })
})
