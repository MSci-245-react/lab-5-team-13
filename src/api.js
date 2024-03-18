import axios from 'axios';
const client = axios.create({
    baseURL: 'https://api.outsidein.dev/uvwpAng9eQy7tqMMQPh9Q30Izzrb2z2E',
});
const api = {
    async loadRestaurants() {
        const response = await client.get('/restaurants');
        return response.data;
    },
};
export default api;