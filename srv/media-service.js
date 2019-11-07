module.exports = srv => {

	const vcap_services = JSON.parse(process.env.VCAP_SERVICES)
	const AWS = require('aws-sdk')
	const useLocal = process.env.NODE_ENV !== 'production'

	const credentials = new AWS.Credentials(
		vcap_services.objectstore[0].credentials.access_key_id,
		vcap_services.objectstore[0].credentials.secret_access_key)
	AWS.config.update({
		region: vcap_services.objectstore[0].credentials.region,
	})
	const s3 = new AWS.S3({
		credentials: credentials,
		apiVersion: '2006-03-01',
		/*
		https://dev.to/goodidea/how-to-fake-aws-locally-with-localstack-27me
		*/
		endpoint: useLocal ? 'http://localhost:4572' : undefined,
		s3ForcePathStyle: true
	})

	srv.on('UPDATE', 'Pictures', async req => {
		const params = {
			Bucket: vcap_services.objectstore[0].credentials.bucket,
			Key: req.data.ID,
			Body: req.data.content,
			ContentType: "image/png"
		};
		s3.upload(params, function (err, data) {
			console.log(err, data)
		})
	})

	srv.on('READ', 'Pictures', (req, next) => {
		if (!req.data.ID) {
			return next()
		}

		return {
			value: _getObjectStream(req.data.ID)
		}
	})

	/* Get object stream from S3 */
	function _getObjectStream(objectKey) {
		const params = {
			Bucket: vcap_services.objectstore[0].credentials.bucket,
			Key: objectKey
		};
		return s3.getObject(params).createReadStream()
	}
}