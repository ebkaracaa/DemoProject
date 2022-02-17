import Axios from 'axios';
const axios = Axios.create({
  baseURL: 'https://smapi.eu-west-3.elasticbeanstalk.com',
  timeout: 30000,
});
export default axios;
