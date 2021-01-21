import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer OVHbrag9kLA0yoUH26oodztnO1Xx3HR78YoyNtZqjA7Budpeg5lhYwpmj5nv5j6HlVbP4wpaO1scSL0XmaAx6tnhWcS_dANH_i-OpPrVisqzW9RFnFO7JZStpSAGYHYx'
    }
})