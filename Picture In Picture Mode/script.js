let videoElem = document.querySelector('#video');
let startBtn = document.querySelector('#button');

async function selectMediaStream() {
	try {
		let mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoElem.srcObject = mediaStream;

		videoElem.onloadedmetadata = () => {
			videoElem.play();
		};
	} catch (error) {
		// Error handling
		console.log(error);
	}
}

selectMediaStream();
startBtn.addEventListener('click', () => {
	startBtn.disabled = true;

	// await videoElem.requestPictureInPicture();

	if (document.pictureInPictureElement) {
		document.exitPictureInPicture().catch((error) => {
			// Error handling
			console.log(error);
		});
	} else {
		videoElem.requestPictureInPicture().catch((error) => {
			// Error handling
			console.log(error);
		});
	}
	startBtn.disabled = false;
});
