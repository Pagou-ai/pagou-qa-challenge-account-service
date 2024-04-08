import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('', 'MakeCreateUserController.create')
  Route.post('auth', 'MakeAuthController.auth')
  Route.put('', 'MakeUpdateUserController.update')
}).prefix('user')
