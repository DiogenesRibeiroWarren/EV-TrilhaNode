import 'reflect-metadata'
import request from 'supertest'

import { app } from '../../main'
import { userDataMocked } from '../../domain/userDataMocked/userDataMocked'

describe('Integration test /customer', () => {

    it('Should be able create a new User', async () => {

        const response = await request(app)
            .post('/customer')
            .send(userDataMocked)

        expect(response.header['content-type']).toMatch('application/json')
        expect(response.body.email).toEqual(response.body.emailConfirmation)
        expect(response.status).toEqual(200)

    })

    it('Should return a ERROR 404', async () => {

        const response = await request(app)
            .post('/customer')
            .send()

        expect(response.status).toEqual(404)
        expect(response.body).toHaveProperty('erro')

    })

})