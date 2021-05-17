_fcPlayer.canPlayAudio = function() {
	if (document.createElement('audio').canPlayType) {
		if (!document.createElement('audio').canPlayType('audio/mpeg') &&
			!document.createElement('audio').canPlayType('audio/ogg')) {

		} else {
			// HTML5 audio + mp3 support
			document.getElementById('player').style.display = 'block';
		}
	}
}

// **** Audio Element ****
_fcPlayer.removeAudioElement = function() {

	var audio = document.getElementsByTagName("audio")[0];

	if (audio.currentTime) {
		audio.pause();
		audio.currentTime = 0;
	}
	document.body.removeChild(audio);
}

_fcPlayer.audioPlay = function() {
	var audio = document.getElementsByTagName("audio")[0];
	audio.currentTime = 0;
	audio.play();
	document.getElementById("audiop").disabled = false;


}

_fcPlayer.audioPlayDirectly = function () {

	// Create Audio Element
	var audio = document.createElement("audio");

	// Set Audio Files
	if (_fcPlayer.curentCardOnDisplay.currentFace == 1 && !_fcPlayer.allCards["Unit" + _fcPlayer.curentCardOnDisplay.Unit]["Lesson" + _fcPlayer.curentCardOnDisplay.Lesson][_fcPlayer.curentCardOnDisplay.Card][1][_fcPlayer.curentCardOnDisplay.currentFace]) {
		var audioMp3 = _fcPlayer.mediaLocation.audio + (_fcPlayer.allCards["Unit" + _fcPlayer.curentCardOnDisplay.Unit]["Lesson" + _fcPlayer.curentCardOnDisplay.Lesson][_fcPlayer.curentCardOnDisplay.Card][1][0]) + ".mp3"
		var audioOgg = _fcPlayer.mediaLocation.audio + (_fcPlayer.allCards["Unit" + _fcPlayer.curentCardOnDisplay.Unit]["Lesson" + _fcPlayer.curentCardOnDisplay.Lesson][_fcPlayer.curentCardOnDisplay.Card][1][0]) + ".ogg"

	} else {
		var audioMp3 = _fcPlayer.mediaLocation.audio + (_fcPlayer.allCards["Unit" + _fcPlayer.curentCardOnDisplay.Unit]["Lesson" + _fcPlayer.curentCardOnDisplay.Lesson][_fcPlayer.curentCardOnDisplay.Card][1][_fcPlayer.curentCardOnDisplay.currentFace]) + ".mp3"
		var audioOgg = _fcPlayer.mediaLocation.audio + (_fcPlayer.allCards["Unit" + _fcPlayer.curentCardOnDisplay.Unit]["Lesson" + _fcPlayer.curentCardOnDisplay.Lesson][_fcPlayer.curentCardOnDisplay.Card][1][_fcPlayer.curentCardOnDisplay.currentFace]) + ".ogg"
	}

	// Check compatibility
	if (audio.canPlayType('audio/mpeg')) {
		audio.src = audioMp3;
	} else {
		audio.src = audioOgg;
	}

	if (audio.paused) {
		audio.play();
	} else {
		audio.pause();
		audio.currentTime = 0;
	}
}
