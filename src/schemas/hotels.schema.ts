import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class HotelDocument extends AbstractDocument {
  @Prop()
  hotelId: string;

  @Prop()
  hotelName: string;

  @Prop()
  address: string;

  @Prop()
  reservationId: string;

  @Prop()
  booked: boolean;
}

export const HotelSchema = SchemaFactory.createForClass(HotelDocument);
