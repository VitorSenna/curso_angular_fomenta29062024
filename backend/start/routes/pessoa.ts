import router from '@adonisjs/core/services/router'
const PessoasController = () => import('#controllers/pessoas_controller')

router.group(() => {
  router.post('/pessoas', [PessoasController, 'store'])
  router.get('/pessoas', [PessoasController, 'list'])
  router.get('/pessoas/:id', [PessoasController, 'show'])
  router.delete('/pessoas/:id', [PessoasController, 'destroy'])
  router.put('/pessoas/:id', [PessoasController, 'update'])
})
