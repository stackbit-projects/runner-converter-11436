function milesToMetres(miles){
  var metres=miles*1609;
  return metres;
}

//console.log("1 mile is "+milesToMetres(6)+" metres.");

function minsToSecs(mins){
  var secs = mins*60;
  return secs;
}

//console.log("2 mins is "+minsToSecs(2)+" secs.")

function metresToMiles(metres){
  var miles=metres/1609;
  return miles;
}

function secsToMins(secs){
  var mins = secs*0.0166;
  return mins;
}

function converter(mile1,mins1,secs1,mile2){
  var mile1tometres=milesToMetres(mile1);
  var secs1tomins=secsToMins(secs1);
  var mins1tosecs=minsToSecs(mins1+secs1tomins);
  var mile2tometres=milesToMetres(mile2);

  var secs = (mins1tosecs*mile2tometres)/mile1tometres;

  //var mins2=secsToMins(secs);
  var mins2=convertSeconds(secs);

  return ("\n\nIf "+mile1+" mile(s) is ran in "+mins1+" min(s), and "+secs1+" sec(s), then "+mile2+" mile(s) is ran in "+mins2+", assuming you keep the same pace.");
}

//Convert seconds to hours, minutes and seconds
function convertSeconds(d){
  var hours = Math.floor(d/3600); //3600 seconds in an hour
  var minutes =  Math.floor((d%3600)/60);//60 seconds in a minute
  var seconds = Math.round(d-((hours*3600)+(minutes*60))); //remainder
  return +minutes+ " min(s) and " +seconds+ " sec(s)";
}

converter(1.87,22,0,2);