import { PartialType } from '@nestjs/mapped-types';
import { HotelsDto } from './hotels.dto';

export class UpdateHotelDto extends PartialType(HotelsDto) {}
