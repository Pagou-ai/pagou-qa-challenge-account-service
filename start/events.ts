import Event from '@ioc:Adonis/Core/Event'

Event.on('new:user', 'User.onNewUser')
Event.on('new:company', 'Company.onNewCompany')
