import Axios from 'axios';
const axios = Axios.create({
  baseURL:
    'https://deltademo-env.eba-upquwdtp.eu-central-1.elasticbeanstalk.com',
  timeout: 30000,
});
export default axios;
