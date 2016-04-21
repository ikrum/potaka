String.prototype.unicodeToValue = function(){
    var hex, i;

    var result = ""; // hex value
    for (i=0; i<this.length; i++) {
        hex = this.charCodeAt(i).toString(16);
        result += ("000"+hex).slice(-4);
    }

    return parseInt(result, 16); 
}

String.prototype.toEnNumber = function(){
	var mapObj = {"০":0,"১":1,"২":2,"৩":3, "৪": 4,"৫":5,"৬":6,"৭":7, "৮": 8,"৯": 9 };

	for(var ch in this) if(typeof mapObj[ch] == "undefined") throw new Error("ভুল নাম্বার !");

	var re = new RegExp(Object.keys(mapObj).join("|"),"gi");
	var str = this;
	str  = str.replace(re, function(matched){
	  return mapObj[matched];
	});

	return +str;
}

String.prototype.isBanglaNumber = function(){
	var uniValue = this.unicodeToValue();
	return uniValue>2533 && uniValue<2544;
}
