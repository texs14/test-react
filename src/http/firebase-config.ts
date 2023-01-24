import { initializeApp } from 'firebase/app'
// import { getFirestore } from '@firebase/firestore'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD7Vy3j-Yyy4mKFXhrX610NnfZFrGjI5R4',
  authDomain: 'fund-6a996.firebaseapp.com',
  projectId: 'fund-6a996',
  storageBucket: 'fund-6a996.appspot.com',
  messagingSenderId: '978802416449',
  appId: '1:978802416449:web:2e5410e40dafeb3fe01fc0'
}

const app = initializeApp(firebaseConfig)
// const db = getFirestore(app)
const db = getFirestore(app)
export default db
