import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { HotelDocument } from './schemas/hotels.schema';

// @Injectable()
// export class HotelsRepository {
//   constructor(
//     @InjectModel(Hotel.name) private hotelModel: Model<HotelDocument>,
//   ) {}

//   async findOne(hotelFilterQuery: FilterQuery<Hotel>): Promise<Hotel> {
//     return this.hotelModel.findOne(hotelFilterQuery);
//   }

//   async find(hotelsFilterQuery: FilterQuery<Hotel>): Promise<Hotel[]> {
//     return this.hotelModel.find(hotelsFilterQuery);
//   }

//   async create(hotel: Hotel): Promise<Hotel> {
//     const newHotel = new this.hotelModel(hotel);
//     return newHotel.save();
//   }

//   async findOneAndUpdate(_id: string, hotel: Partial<Hotel>): Promise<Hotel> {
//     return this.hotelModel.findOneAndUpdate({ _id }, hotel);
//   }
// }
// import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';

@Injectable()
export class HotelsRepository extends AbstractRepository<HotelDocument> {
  protected readonly logger = new Logger(HotelsRepository.name);

  constructor(
    @InjectModel(HotelDocument.name)
    hotelModel: Model<HotelDocument>,
  ) {
    super(hotelModel);
  }
}
