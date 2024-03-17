import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { HotelsService } from './hotels.service';
// import { HotelsDto } from './dto/hotels.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { JwtAuthGuard, Roles } from '@app/common';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @Get()
  @MessagePattern('hotel_list')
  @UsePipes(new ValidationPipe())
  async getHotelList() {
    return this.hotelsService.getHotelList();
  }

  @Post('createhotel')
  @UsePipes(new ValidationPipe())
  @UseGuards(JwtAuthGuard)
  // @Roles('admin')
  async createHotel(@Body() data: any) {
    console.log('------hotel data------', data);
    return this.hotelsService.createHotel(data);
  }

  @MessagePattern('book_hotel')
  @UsePipes(new ValidationPipe())
  async bookHotel(@Payload() updateHotelDto: UpdateHotelDto) {
    return this.hotelsService.bookHotel(updateHotelDto.hotelId, updateHotelDto);
  }

  @Get('hello')
  async getHello() {
    return 'Hello World!';
  }
}
