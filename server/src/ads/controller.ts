import { JsonController, Get, Param } from 'routing-controllers'
import Ad from './entity'

@JsonController()
export default class AdController {

  //to show all
  @Get('/ads')
  async allAds() {
    const ads = await Ad.find()
    return { ads }
  }
  // show one
  @Get('/ads/:id')
  getAd(
    @Param('id') id: number
  ) {
    return Ad.findOne(id)
  }

  

  /* // to add one
  @Post('/ads') */
}