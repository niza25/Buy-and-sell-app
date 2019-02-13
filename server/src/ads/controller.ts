import { JsonController, Get } from 'routing-controllers'
import Ad from './entity'

@JsonController()
export default class AdController {

  //to show all
  @Get('/ads')
  async allAds() {
    const ads = await Ad.find()
    return { ads }
  }

  /* // show a single on
  @Get('/ads/:id')
  
  // to add one
  @Post('/ads') */
}