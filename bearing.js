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

function getDirectionToDestination (b) {
    if (b == 0 || b == 360)
    {
      return "W";
    }
    if (b > 0 && b < 45)
    {
      return "NWW";
    }
    if (b == 45)
    {
      return "NW";
    }
    if (b > 45 && b < 90)
    {
      return "NNW";
    }

    if (b == 90)
    {
      return "N";
    }
    if (b > 90 && b < 135)
    {
       return "NNE";
    }
    if (b == 135)
    {
       return "NE";
    }
    if (b > 135 && b < 180)
    {
       return "NEE";
    }
	
    if (b == 180)
    {
       return "E";
    }
    if (b > 180 && b < 225)
    {
       return "SEE";
    }
    if (b == 225)
    {
       return "SE";
    }
    if (b > 225 && b < 270)
    {
       return "SSE";
    }
	
    if (b == 270)
    {
       return "S";
    }
    if (b > 270 && b < 315)
    {
       return "SSW";
    }
    if (b == 315)
    {
       return "SW";
    }
    if (b > 315 && b < 360)
    {
       return "SWW";
    }
}

Number.prototype.toRadians = function() { 
    return (this.valueOf() * Math.PI) / 180; 
} 

Number.prototype.toDegrees = function() { 
    return this.valueOf() * (180 * Math.PI); 
} 
