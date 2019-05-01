

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
    

    //calculates months worked
    var date = moment(sv.start).format("MM/DD/YY")
    var difTime = moment().diff(moment(date), "months"); 
    console.log(difTime); 

    var moneyMade = difTime * parseInt(sv.rate); 
    

     var newRow = $("<tr>").append(
        $("<td>").text(snapshot.val().name),
        $("<td>").text(sv.role),
        $("<td>").text(sv.start),
        $("<td>").text(difTime),
        $("<td>").text(sv.rate),
        $("<td>").text(moneyMade)
    );
    // Append the new row to the table
    $("#employees tbody").append(newRow);

    var startDate = start;
    var randomFormat = "MM/DD/YYYY";
    var convertedDate = moment(startDate, randomFormat);

    console.log(convertedDate.format("MM/DD/YY"));
    console.log(convertedDate.format("MMM Do, YYYY hh:mm:ss"));
    console.log(convertedDate.format("w"));
    console.log("----------------------------------------");
    console.log(convertedDate.toNow());


}); 


