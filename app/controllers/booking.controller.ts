import * as restify from 'restify';
import { logger } from '../../utils/logger';
import { Booking, BookingDocument } from '../models/booking.model';

function get(req: restify.Request, res: restify.Response, next: restify.Next) {
  logger.info('get booking');
  const booking: BookingDocument = new Booking({
    user: req.params.user,
    from: req.params.from,
    to: req.params.to,
    price: req.params.price,
    tripDate: new Date(req.params.date.split(' ').join('T'))
  });
  return booking
    .save()
    .then((booking: BookingDocument)=>{
      res.json(200, booking);
      return next();
    }).catch((e:any)=>next(e));

}

function create(req: restify.Request, res: restify.Response, next: restify.Next) {
  logger.info('create booking');
  const booking: BookingDocument = new Booking({
    user: req.params.user,
    from: req.params.from,
    to: req.params.to,
    price: req.params.price,
    tripDate: new Date(req.params.date.split(' ').join('T'))
  });
  return booking
    .save()
    .then((booking: BookingDocument)=>{
      res.json(200, booking);
      return next();
    }).catch((e:any)=>next(e));
}

function update(req: restify.Request, res: restify.Response, next: restify.Next) {
  logger.info('update booking');
  res.json(200, 'update booking');
  return next();
}

function remove(req: restify.Request, res: restify.Response, next: restify.Next) {
  logger.info('remove booking');
  res.json(200, 'remove booking');
  return next();
}

export { get, create, update, remove }
