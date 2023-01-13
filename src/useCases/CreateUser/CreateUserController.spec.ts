import 'reflect-metadata'

import { Request, Response } from 'express'

import { CreateUerController } from './CreateUserController'
import { CreateUserService } from './CreateUserService'
import { CreateUserRepository } from '../../repositories/implementations/CreateUserRepository'

const mockRequest = {
    body: {
        fullName: "Diógenes Ribeiro de Oliveira",
        email: "diogenes.ribeiro@gmail.com",
        emailConfirmation: "ok.ribeiro@gmail.com",
        cpf: "872.027.195-65",
        cellphone: "912276462",
        birthdate: "2002-01-19",
        emailSms: false,
        whatsapp: true,
        country: "Brasil",
        city: "POA",
        postalCode: "91450-310",
        address: "Gildo de freitas",
        number: 20
    },
} as Request;

const mockResponse = {
    json: mockRequest.body,
    status: 201
} as unknown as Response;

const createUserRepository = new CreateUserRepository()
const createUserService = new CreateUserService(createUserRepository)
const createUserController = new CreateUerController(createUserService)

describe('Create User Controller', () => {

    const response = createUserController.handle(mockRequest, mockResponse)

    it('Should return a json', () => {
        expect(response).toHaveProperty('json')
    })

    it('Should have property status code', () => {
        expect(response).toHaveProperty('status')
    })

})