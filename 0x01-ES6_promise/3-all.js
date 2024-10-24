// Import uploadPhoto and createUser from utils.js
import { uploadPhoto, createUser } from './utils';
// Collectively resolve all promises
export default function handleProfileSignup() {
  const p1 = uploadPhoto();
  const p2 = createUser();
  return Promise.all([p1, p2])
    // Log body firstName lastName to the console
    .then(([p1, p2]) => {
      console.log(`${p1.body} ${p2.firstName} ${p2.lastName}`);
    })
    // Log Signup system offline to the console
    .catch(() => {
      console.log('Signup system offline');
    });
}
