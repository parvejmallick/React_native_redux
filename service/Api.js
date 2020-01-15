const axios = require('axios');

export default class Api {

	static get = async (url) => {
		
		return new Promise((resolve, reject) => {
			var headers = {
				
			};
		    axios.get(url, {headers}).then(function (response) {
			    resolve(response.data);
			}).catch(function (error) {
			    reject(error);
			}).finally(function () {
			    // always executed
			});

		});

	};

	static post = async (url, data) => {

		return new Promise((resolve, reject) => {
			var headers = {
				
			};
			axios.post(url, data, {headers}).then(function (response) {
				resolve(response.data);
			}).catch(function (error) {
				console.log('post api error', JSON.stringify(error));
				reject(error);
			});

		});

	};

}
