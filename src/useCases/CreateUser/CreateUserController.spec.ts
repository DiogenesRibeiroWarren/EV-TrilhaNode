import 'reflect-metadata'

import { Request, Response } from 'express'

import { CreateUserController } from './CreateUserController'
import { CreateUserService } from './CreateUserService'
import { CreateUserRepository } from '../../repositories/implementations/CreateUserRepository'
import { userData } from '../../domain/userMocked/userMocked'

const mockRequest = {
    body: userData
} as Request;

const mockResponse = {
    json: mockRequest.body,
    status: 201
} as unknown as Response;

const createUserRepository = new CreateUserRepository()
const createUserService = new CreateUserService(createUserRepository)
const createUserController = new CreateUserController(createUserService)

describe('Create User Controller', () => {

    const response = createUserController.handle(mockRequest, mockResponse)

    it('Should return a json', () => {
        expect(response).toHaveProperty('json')
    })

    it('Should have property status code', () => {
        expect(response).toHaveProperty('status')
    })

})