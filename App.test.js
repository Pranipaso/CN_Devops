
const request = require("supertest");
const app = require("./App.js")

describe('GET /', () => {
    it('should return Dev ops demo', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Dev ops demo');
    })
})