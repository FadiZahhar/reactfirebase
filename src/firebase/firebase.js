  import app from 'firebase/app';
  import 'firebase/auth';
  import firebaseConfig from './config';
  
 

  /*
  * creating a call to work with firebase auth
  *
  */

  class Firebase {
      constructor() {
           // Initialize Firebase
           app.initializeApp(firebaseConfig);
           this.auth = app.auth()
      }

      async register(name,email, password) {
         const newUser = await this.auth.createUserWithEmailAndPassword(
              email,
              password
          )
          return await newUser.user.updateProfile({
              displayName: name
          })
      }

      login(email,password) {
          this.auth.signInWithEmailAndPassword(email,password)
      }
  }
  const firebase = new Firebase();
  export default firebase;