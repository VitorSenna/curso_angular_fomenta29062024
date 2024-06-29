import router from '@adonisjs/core/services/router'
import './routes/pessoa.ts'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
