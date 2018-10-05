import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDvykURBd89wLHzETCaqFBgGdnS6p67tb8",
    authDomain: "livechatapp-7650c.firebaseapp.com",
    databaseURL: "https://livechatapp-7650c.firebaseio.com",
    projectId: "livechatapp-7650c",
    storageBucket: "livechatapp-7650c.appspot.com",
    messagingSenderId: "574424216693"
  };
  firebase.initializeApp(config);

  export default firebase;