import * as mongoose from 'mongoose';
import { bus, busDocument } from './bus.model';
import { emit } from "cluster";


interface BookingDocument extends mongoose.Document{
  user: number;
  from: number;
  to: number;
  price: string;
  tripDate:Date;
  createdAt: Date;
}

interface BookingModel extends mongoose.Model<BookingDocument> {
  getCount():any;
  canBook():any;
}

const bookingSchema = new mongoose.Schema({
  user: {
    type: Number,
    required: true,
  },
  from:{
    type: Number,
    required:true,
  },
  to:{
    type: Number,
    required:true,
  },
  price:{
    type: String,
    required: false,
  },
  tripDate:{
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});





// Methods
bookingSchema.method({
});

// Statics
bookingSchema.static({
  getCount:function():Promise<number>{
    return this
      .find({})
      .exec()
      .then((busbooking:BookingModel)=>{
        return busbooking.length
      });
  },
  canBook:function(date:Date): Promise<number>{
    const seatCount: number = bus.getAllSeats();
    const dateSeatCount: number = this
      .find({tripDate: date})
      .exec()
      .then((book:Array<BookingModel>)=>{
        return book.length;
      }
    );
    return Promise.resolve(seatCount - dateSeatCount);
  }
});

const Booking:BookingModel = <BookingModel>mongoose.model('Booking', bookingSchema);

export { Booking, BookingDocument };
