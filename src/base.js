import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyCKdJoD5rxxKmOzIIXdomwvbXKkM_6mkpI",
    authDomain: "chatbox-148ea.firebaseapp.com",
    databaseURL: "https://chatbox-148ea.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base