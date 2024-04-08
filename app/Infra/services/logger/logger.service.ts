import Logger from '@ioc:Adonis/Core/Logger'
import { LoggerServiceContract } from 'App/Domain/services//logger.service.contract'

export default class LoggerService implements LoggerServiceContract {
  error(message: string): void {
    Logger.error(message)
  }

  warn(message: string): void {
    Logger.warn(message)
  }

  info(message: string): void {
    Logger.info(message)
  }
}