  var config = {
    apiKey: "AIzaSyAI5tfpB5yorMzUz-omr8C750OjgKHTe_Q",
    authDomain: "trainschedule-57c42.firebaseapp.com",
    databaseURL: "https://trainschedule-57c42.firebaseio.com",
    projectId: "trainschedule-57c42",
    storageBucket: "trainschedule-57c42.appspot.com",
    messagingSenderId: "974399855907"
  };

firebase.initializeApp(config);


var trainData = firebase.database();

trainData.ref().on("value" ,function(snapshot){
  console.log(snapshot.val().something);
})

$("#trainBtn").on("click", function(){
  	var trainName = $('#trainName').val().trim();
  	var destination = $('#destination').val().trim();
  	var trainTime = moment($('#trainTime').val().trim(),"HH:mm").subtract(10,'years').format('X');
  	var frequency = $('#frequency').val().trim();
  	var newTrain = {
  		name: trainName,
  		destination: destination,
  		time: trainTime,
  		frequency: frequency 
  	}
  	trainData.ref().push(newTrain);
  	alert('train added');

  	$('#trainName').val("");
  	$('#destination').val("");
  	$('#trainTime').val("");
  	$('#frequency').val("");

  	return false;
  })

  // trainData.ref().on("child_added", function(snapshot){
  //   var name = snapshot.val().name;
  //   var destination = snapshot.val().destination;
  //   var frequency = snapshot.val().frequency;
  //   var firstTrain = snapshot.val().firstTrain;

  //   var remainder = moment().diff(moment.unix(firstTrain), "minutes")%frequency;
  //   var minutes = frequency - remainder;
  //   var arrival = moment().add(minutes,"m").format("hh:mm A");

  //   $('#trainTable > tBody').append("<tr><td>"+name+"</td><td>"+destination+"</td><td>"+frequency+"</td><td>"+arrival+"</td><td>"
  //     +minutes+"</td></tr>");
  // })

