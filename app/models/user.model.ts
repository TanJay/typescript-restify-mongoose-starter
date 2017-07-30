import * as mongoose from 'mongoose';

interface userDocument extends mongoose.Document{
  id:number;
  name:string;
  createdAt:Date;
}

interface userModel extends mongoose.Model<userDocument>{
  // findByName(name:String):any;
}

const userSchema = new mongoose.Schema({
  id:{
    type: number,
    default:this.find().Count()+1,
  },
  name:{
    type: String,
    required: true,
    unique:true,
  },
  createdAt:{
    type:Date,
    default: Date.now(),
  }
});
userSchema.method({

});

userSchema.static({
  // findById:function(id:number):Primise<>
  // findByName: function(name: String) : Promise<userDocument>{
  //   return this
  //     .find({name: name })
  //     .exec()
  //     .then((user:Array<userDocument>)=>{
  //       if(user && user.length){
  //         return user[0];
  //       }
  //       return Promise.reject("error")
  //     });
  // }
});
const user = <userModel>mongoose.model("user", userSchema);

export { user, userDocument };


