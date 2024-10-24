// Import signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call the two other functions
  const p1 = signUpUser(firstName, lastName);
  const p2 = uploadPhoto(fileName);
  // Settle both promises returning an array of the status and value of each
  return Promise
    .allSettled([p1, p2])
    // Modify returned array to display status and value
    .then((res) => (
      res.map((o) => ({
        status: o.status,
        value: o.status === 'fulfilled' ? o.value : String(o.reason),
      }))
    ));
}
