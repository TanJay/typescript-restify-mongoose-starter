import * as restify from 'restify';
import { user, userDocument } from '../models/user.model';

/**
 * Search for a student by username, and append it to req.params if successful.
 * @returns {IStudentDocument}
 */
// function load(req: restify.Request, res: restify.Response, next: restify.Next) {
//   Student.findByUsername(req.params.username)
//     .then((student: IStudentDocument) => {
//       req.params.student = student;
//       return next();
//     })
//     .catch((err: any) => next(err));
// }

/**
 * Get a student.
 * @returns {IStudentDocument}
 */
function get(req: restify.Request, res: restify.Response, next: restify.Next) {
  res.json(200, req.params.student);
  return next();
}

/**
 * Create a new student from a username, and return it.
 * @property {string} req.params.username - the GitHub username of the student
 * @returns {IStudentDocument}
 */
function create(req: restify.Request, res: restify.Response, next: restify.Next) {
  const user: userDocument = new user({
    name: req.params.name
  });

  return user
    .save()
    .then((user: userDocument) => {
      res.json(200, user);
      return next();
    })
    .catch((err: any) => next(err));
}

// /**
//  * Update an existing student, and return it.
//  * @property {string} req.params.original - the original username
//  * @property {string} req.params.new - the new username
//  * @returns {IStudentDocument}
//  */
// function update(req: restify.Request, res: restify.Response, next: restify.Next) {
//   const student = req.params.student;
//   student.username = req.params.newUsername;
//
//   return student
//     .save()
//     .then((updatedStudent: IStudentDocument) => {
//       res.json(200, updatedStudent);
//       return next();
//     })
//     .catch((err: any) => next(err));
// }

// /**
//  * Delete a student, and return it. (??)
//  * @returns {IStudentDocument}
//  */
// function remove(req: restify.Request, res: restify.Response, next: restify.Next) {
//   const student = req.params.student;
//
//   return student
//     .remove()
//     .then((deletedStudent: IStudentDocument) => {
//       res.json(200, deletedStudent);
//       return next();
//     })
//     .catch((err: any) => next(err));
// }

export { get, create };
