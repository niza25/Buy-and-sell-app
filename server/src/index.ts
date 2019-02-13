import 'reflect-metadata'
import {createKoaServer} from 'routing-controllers'
import AdController from './ads/controller'
import setupDb from './db'

const app = createKoaServer({
   controllers: [
     AdController
    ]
})

const port = process.env.PORT || 4000

setupDb()
  .then(_ =>
    app.listen(port, () => console.log('Listening on port 4000'))
  )
  .catch(err => console.error(err))