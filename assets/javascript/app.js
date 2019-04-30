

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
    role: employeeRole,
    start: startDate,
    rate: rate
  });
 
}); 


database.ref().on("child_added", function(snapshot) { 

    var sv = snapshot.val();
     // Create the new row

     console.log(sv.name)
     console.log(sv.role)
     console.log(sv.start)
     console.log(sv.rate)
     var newRow = $("<tr>").append(
        $("<td>").text(sv.name),
        $("<td>").text(sv.role),
        $("<td>").text(sv.start),
        $("<td>").text(sv.rate)
    );
    // Append the new row to the table
    $("#rowadd").append(newRow);


}); 


