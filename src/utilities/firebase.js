import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAYjsOopQfAApDvY3lgLb4nL9cSOH2QYSY",
    authDomain: "goal-coach-31971.firebaseapp.com",
    databaseURL: "https://goal-coach-31971.firebaseio.com",
    projectId: "goal-coach-31971",
    storageBucket: "goal-coach-31971.appspot.com",
    messagingSenderId: "724887768131"
  };

export default firebase.initializeApp(config);
