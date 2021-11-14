console.log('Specify Travel Time')

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
  const travelTime = travelInformation.destinationDistance / travelInformation.speed;
  function convertH2M(travelTime){
    return Math.floor(travelTime * 60);
  }
  
  const timeInMinutes = convertH2M(travelTime);

  function specifyTime(timeInMinutes) {
  
    const num = timeInMinutes;
    const hours = (num / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
}
    console.log(specifyTime(timeInMinutes));