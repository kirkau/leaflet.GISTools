function getHaversineDistance(point1, point2){	
	var R = 6372.8;

	var dLat = (point2.lat - point1.lat).toRadians();
  var dLon = (point2.lon - point1.lon).toRadians();
  var lat1 = point1.lat.toRadians();
  var lat2 = point2.lat.toRadians();

	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2)
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
	
	return = R * c; 	
}

Number.prototype.toRadians = function() {
   return (this.valueOf() * Math.PI) / 180;
}
