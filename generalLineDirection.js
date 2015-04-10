function getBearing(Lat1, Lon1, Lat2, Lon2) {
  var dLon = Lon2.toRadians() - Lon1.toRadians();
  var dPhi = Math.log(Math.tan(Lat2.toRadians() / 2 + Math.PI/4) / Math.tan(Lat1.toRadians()/2 + Math.PI/4));
  if (Math.abs(dLon) > Math.PI){
    if (dLon > 0.0) {
      dLon = -(2.0 * Math.PI - dLon);
    } else {
      dLon = (2.0 * Math.PI + dLon);
    }
  }
  
  return (Math.atan2(dLon, dPhi)) + 360).toDegrees() % 360;
}

function getGeneralDirection (b) {
    if (b >= 45 && b =< 135) {
      return "N";
    } else if (b >= 136 && b =< 225) {
      return "E";
    } else if (b >= 226 && b =< 315) {
      return "S";
    } else {
      return "w";
    }
}

Number.prototype.toRadians = function() { 
    return (this.valueOf() * Math.PI) / 180; 
} 

Number.prototype.toDegrees = function() { 
    return this.valueOf() * (180 * Math.PI); 
} 

