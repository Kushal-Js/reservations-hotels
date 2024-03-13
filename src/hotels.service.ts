import { Injectable } from '@nestjs/common';
import { HotelsDto } from './dto/hotels.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
// import { HotelSchema, HotelDocument } from './schemas/hotels.schema';
import { HotelsRepository } from './hotels.repository';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class HotelsService {
  constructor(private readonly hotelsRepository: HotelsRepository) {}

  async getHotelById(hotelId: string) {
    return this.hotelsRepository.findOne({ hotelId });
  }

  async getHotelByName(hotelName: string) {
    return this.hotelsRepository.findOne({ hotelName });
  }

  async getHotelList() {
    return this.hotelsRepository.find({});
  }

  async createHotel(hotelsDto: HotelsDto) {
    hotelsDto.hotelId = uuidv4();
    return this.hotelsRepository.create(hotelsDto);
  }

  async bookHotel(hotelId: string, updateHotelDto: UpdateHotelDto) {
    updateHotelDto.reservationId = uuidv4();
    return this.hotelsRepository.findOneAndUpdate({ hotelId }, updateHotelDto);
  }
}
