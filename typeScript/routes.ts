import { Request, Response } from 'express'
import createUser from './service/CreateUser'

export function helloWorld(request: Request, response: Response) {
  return response.json({ message: 'Hello Type' })
}