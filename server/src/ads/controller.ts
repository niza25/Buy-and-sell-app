import { JsonController, Get, Param, Post, HttpCode, Body } from 'routing-controllers'
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
  
  @Post('/ads')
  @HttpCode(201)
  createPage(
    @Body() ad: Ad
  ) {
    return ad.save()
  }
  
}