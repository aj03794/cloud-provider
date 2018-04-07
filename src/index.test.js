import { assert } from 'chai'
import { deployApplication } from './'

describe('Should pull in the correct cloud provider', () => {

	it('should return gcp', done => {
		const expectedResult = 'gcp'
		deployApplication({ cloudProviderName: 'gcp' })
		.then(result => {
			assert.equal(result.name, expectedResult)
			done()
		})
	})

	it('should return aws', done => {
		const expectedResult = 'aws'
		deployApplication({ cloudProviderName: 'aws' })
		.then(result => {
			assert.equal(result.name, expectedResult)
			done()
		})
	})

	it('should return azure', done => {
		const expectedResult = 'azure'
		deployApplication({ cloudProviderName: 'azure' })
		.then(result => {
			assert.equal(result.name, expectedResult)
			done()
		})
	})

})
