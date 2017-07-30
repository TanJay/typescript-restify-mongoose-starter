import * as mongoose from 'mongoose';

interface busDocument extends mongoose.Document{
  name: string,
  seatCount: number;
  createdAt:Date;
}


interface busModel extends mongoose.Model<busDocument>{
  getAllSeats():any;
}

const busSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  seatCount: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Methods
busSchema.method({
});

// Statics
busSchema.static({
  getAllSeats:function():Promise<Number>{
    return this.find({})
      .exec()
      .then((bus:Array<busDocument>)=>{
        let sum:number = 0;
          bus.forEach((value:busDocument)=>{sum += value.seatCount });
        return Promise.resolve(sum);
      })
  }
});

const bus = <busModel>mongoose.model('bus', busSchema);

export { bus, busDocument };
