function DecToDMS (D, lng) {
    return {
        dir : D<0?lng?'W':'S':lng?'E':'N',
        deg : 0|(D<0?D=-D:D),
        min : 0|D%1*60,
        sec : (0|D*60%1*6000)/100,
        DecDegrees: D,
        DMSString: function() { return this.deg + " " + this.min + "'" + this.sec + "\""; }
    };
}

function DMSToDec (D) {
  return Math.sign(D.deg) * (Math.abs(D.deg) + (D.min / 60.0) + (D.sec / 3600.0));
}
  
