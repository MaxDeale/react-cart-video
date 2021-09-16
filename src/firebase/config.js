import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBQiIErj8yxLbFsCuCKat-CEgg_fTdPHek',
  authDomain: 'ts-cart-tut.firebaseapp.com',
  projectId: 'ts-cart-tut',
  storageBucket: 'ts-cart-tut.appspot.com',
  messagingSenderId: '445840768438',
  appId: '1:445840768438:web:3c67af8f50b9c5032d9517',
  measurementId: 'G-1LWPS9L467'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
