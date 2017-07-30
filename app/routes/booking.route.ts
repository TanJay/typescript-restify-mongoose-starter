/**
 * Created by tanushajayasinghe on 7/29/17.
 */
import * as restify from "restify";
import * as controller from "../controllers/booking.controller";


export default(api: restify.Server)=>{
  api.post('/api/book', controller.create);
}
