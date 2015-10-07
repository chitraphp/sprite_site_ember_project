import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveQuiz() {
      debugger;
      var checkedVals = new Array();
      //Get the checked values into checkedVals array:
      $.each($("input[name='quizChoice']:checked"), function() {
        checkedVals.push($(this).val());
    });
    //Declare the user profile object:
    var aScore = 0, cScore = 0, eScore = 0, nScore = 0, oScore = 0;
    var user = new Profile(aScore, cScore, eScore, nScore, oScore);
    //Add up the user's score:
    getScore(user, checkedVals);

  }//End of saveQuiz()
  }
});

//User profile constructor:
function Profile(aScore, cScore, eScore, nScore, oScore){
  this.aScore = aScore;
  this.cScore = cScore;
  this.eScore = eScore;
  this.nScore = nScore;
  this.oScore = oScore;
}

function getScore(user, checkedVals){
for(var i = 0; i < checkedVals.length; i++){
  if(checkedVals[i] === "plusA"){
    user.aScore += 1;
  }
  if(checkedVals[i] === "minusA"){
    user.aScore -= 1;
  }
  if(checkedVals[i] === "plusC"){
    user.cScore += 1;
  }
  if(checkedVals[i] === "minusC"){
    user.cScore -= 1;
  }

  if(checkedVals[i] === "plusE"){
    user.eScore += 1;
  }
  if(checkedVals[i] === "minusE"){
    user.eScore -= 1;
  }

  if(checkedVals[i] === "plusN"){
    user.nScore += 1;
  }
  if(checkedVals[i] === "minusN"){
    user.nScore -= 1;
  }

  if(checkedVals[i] === "plusO"){
    user.oScore += 1;
  }
  if(checkedVals[i] === "minusO"){
    user.oScore -= 1;
  }
}
}
