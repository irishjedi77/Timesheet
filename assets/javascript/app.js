

var config = {
    apiKey: "AIzaSyAco3iESf7jt4rbO7YHNft48gGgBi_vWWY",
    authDomain: "testproject-72b9a.firebaseapp.com",
    databaseURL: "https://testproject-72b9a.firebaseio.com",
    projectId: "testproject-72b9a",
    storageBucket: "testproject-72b9a.appspot.com",
    messagingSenderId: "1060286575957"
  };
  firebase.initializeApp(config);

  var database = firebase.database(); 


$("#submit").on("click", function (event) {
    event.preventDefault(); 

 var employeeName = $("#employee-name").val().trim(); 
 var employeeRole = $("#employee-role").val().trim(); 
 var startDate = $("#start-date").val().trim(); 
 var rate = $("#rate").val().trim(); 

 database.ref().push({
    name: employeeName,
    email: employeeRole,
    age: startDate,
    comment: rate
  });
 
}); 


