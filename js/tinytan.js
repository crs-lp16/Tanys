$(document).ready(function () {

$("#avatarHeaders").on( "click", ".fn-av-head", function() {
  	_ts=$(this);
  	var _lottie = _ts.data("lk");
  	var _act= _ts.data("act");

  	var _apLottie = "";
  	if(_act == 0){

  		$("#avatarHeaders").find(".fn-av-head").removeClass("tn-avatar-sk-it-active");
  		$("#avatarHeaders").find(".fn-av-head").data("act",0);
  		_ts.addClass("tn-avatar-sk-it-active");
  		_ts.data("act", 1);

  		_apLottie = '<lottie-player src="' + _lottie + '"  background="transparent"  speed="1" autoplay loop></lottie-player>';
  	}
  	else{

		$("#avatarHeaders").find(".fn-av-head").removeClass("tn-avatar-sk-it-active");
  		$("#avatarHeaders").find(".fn-av-head").data("act",0);

  		_apLottie = '<lottie-player src="https://assets2.lottiefiles.com/packages/lf20_d3dps70y.json"  background="transparent"  speed="1" autoplay loop></lottie-player>';
  	}

  	$("#divMainAvatarHead").empty();
  	$("#divMainAvatarHead").append(_apLottie);
});

$("#avatarBodys").on( "click", ".fn-av-body", function() {
  	_ts=$(this);
  	var _lottie = _ts.data("lk");
  	var _act= _ts.data("act");

  	var _apLottie = "";
  	if(_act == 0){

  		$("#avatarBodys").find(".fn-av-body").removeClass("tn-avatar-sk-it-active");
  		$("#avatarBodys").find(".fn-av-body").data("act",0);
  		_ts.addClass("tn-avatar-sk-it-active");
  		_ts.data("act", 1);

  		_apLottie = '<lottie-player src="' + _lottie + '"  background="transparent"  speed="1" autoplay loop></lottie-player>';
  	}
  	else{

		$("#avatarBodys").find(".fn-av-body").removeClass("tn-avatar-sk-it-active");
  		$("#avatarBodys").find(".fn-av-body").data("act",0);

  		_apLottie = '<lottie-player src="https://assets6.lottiefiles.com/packages/lf20_ouaykb23.json"  background="transparent"  speed="1" autoplay loop></lottie-player>';
  	}

  	$("#divMainAvatarBody").empty();
  	$("#divMainAvatarBody").append(_apLottie);
});

$("#avatarFooters").on( "click", ".fn-av-foot", function() {
  	_ts=$(this);
  	var _lottie = _ts.data("lk");
  	var _act= _ts.data("act");

  	var _apLottie = "";
  	if(_act == 0){

  		$("#avatarFooters").find(".fn-av-foot").removeClass("tn-avatar-sk-it-active");
  		$("#avatarFooters").find(".fn-av-foot").data("act",0);
  		_ts.addClass("tn-avatar-sk-it-active");
  		_ts.data("act", 1);

  		_apLottie = '<lottie-player src="' + _lottie + '"  background="transparent"  speed="1" autoplay loop></lottie-player>';
  	}
  	else{

		$("#avatarFooters").find(".fn-av-foot").removeClass("tn-avatar-sk-it-active");
  		$("#avatarFooters").find(".fn-av-foot").data("act",0);

  		_apLottie = '<lottie-player src="https://assets7.lottiefiles.com/packages/lf20_1ty1mxi8.json"  background="transparent"  speed="1" autoplay loop></lottie-player>';
  	}

  	$("#divMainAvatarFoot").empty();
  	$("#divMainAvatarFoot").append(_apLottie);
});
	
});