humanReadable(45296);
function humanReadable (seconds) {
    let timeLeft = seconds;
    const hours = Math.floor(timeLeft / 3600);
    timeLeft -= hours * 3600;
    const minutes = Math.floor(timeLeft / 60);
    timeLeft -= minutes *60;
    const outputSeconds = timeLeft;

    console.log(hours);
    console.log(minutes);
    console.log(outputSeconds);

    timeArray = [hours.toString(),minutes.toString(),outputSeconds.toString()];
    output = '';
    for(i = 0; i < timeArray.length; i++){
        if(timeArray[i].length < 2) output += '0';
        output += timeArray[i];
        if(i != timeArray.length-1)output += ':';
    }
    console.log(output);
    return output;
  }