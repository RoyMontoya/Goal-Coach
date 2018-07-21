import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAYjsOopQfAApDvY3lgLb4nL9cSOH2QYSY",
    authDomain: "goal-coach-31971.firebaseapp.com",
    databaseURL: "https://goal-coach-31971.firebaseio.com",
    projectId: "goal-coach-31971",
    storageBucket: "goal-coach-31971.appspot.com",
    messagingSenderId: "724887768131"
  };

   const firebaseApp = firebase.initializeApp(config);

export const goalRef = firebaseApp.database().ref('goals');
export const completeGoalRef = firebaseApp.database().ref('complete-goals');
export default firebaseApp;
