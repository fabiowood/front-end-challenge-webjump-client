// Main Configurations => we need to import only the auth and the firestore libraries, and thatś why we define firebase/app and then the following two lines of codes.

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// This variable contains the exclusive object generated by Firebase for our project. We have to copy the object and paste here. There is an API Key inside this object.

const config = {
    apiKey: "AIzaSyCjJiObpp1n7tsfzUjUatHp6RpAkCvTRtY",
    authDomain: "front-end-challenge-webjump.firebaseapp.com",
    databaseURL: "https://front-end-challenge-webjump.firebaseio.com",
    projectId: "front-end-challenge-webjump",
    storageBucket: "front-end-challenge-webjump.appspot.com",
    messagingSenderId: "842921454576",
    appId: "1:842921454576:web:c18f3c76bc75c54df70b35",
    measurementId: "G-FFKSJ89LYV"
}

// Configure the database to storage our users in the application => it is importante to know that we can have a document reference object or a snapshot object from a collection of users, for example. The first is always generated, no matter if the user exists or not in our database. With that document in hands, we can access the CRUD methods, including the .get(), to retrieve data, which will return us a snapshot of the user inside the database. 

// At this moment, we will finally have access to the user data, whether they exist or not in the database. If the user does not exists, the document snapshot "exists" property will return "false". 

// This will be a function to get the user Auth Object and then storage it in our firestore database. Ps: the "uid" is a string dinamically generated by firebase at each user's creation.

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  console.log(userRef);
  const snapshot = await userRef.get();
  console.log(snapshot);

  // if the 'exists' property is false, then we will create a new user object into our database, using the documentReference Object. To create this new user, we need to choose the docReference properties that we want to be stored. In our case: displayName and email.

  if (!snapshot.exists) {
    const {
      displayName,
      email
    } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

// Various Configurations => we need to have access to the methods from the auth and the firestore libraries.

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Access to Google Provider, as well as config a message to display whenever we use the Google Sign-In => it is a popup, to select a Google Account (Gmail).

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
})

// Export method signInWithGoogle

export const signInWithGoogle = () => auth.signInWithPopup(provider);


// Export the entire firebase, in case we want to use it into other components of our application

export default firebase;

// The next step is to import the { signInWithGoogle} method to our sign-in component => insert the Google Method inside the button tag, as a function inside onClick. onClick ={signInWithGoogle}