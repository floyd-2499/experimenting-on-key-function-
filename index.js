console.log("Hey Floyd");

// // 1. exp
// const blueBtn = document.querySelector(".btn");
// blueBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log("Hey boss. Button is working");
// });
// yeaa... working

// // 2.exp
// const blueButton = document.querySelector(".btn");
// blueButton.addEventListener('volumeupbutton', (e) => {
//   e.preventDefault();
//   console.log("Yeaaa... Blutooth btn is working");
// });

// document.addEventListener('volumeupbutton', () => {
//  console.log("Yeaaa... Blutooth btn is working");
//   }, false);

// function myFunction() {
//     console.log('Boss ');
// }

//for 2nd btn ok...!!
// function myFunction() {
//      console.log("Yeaaa... btn is working");
//   }

//keypress idea...  Lets try

// 1.try
//below one worked
// window.addEventListener("keyup", checkKeyPress, false);
// function checkKeyPress(key) {
//   if (key.keyCode == "179") {
//     alert("boss congratulations");
//   }
//   // console.log("Hey boss. Button is working");
// }

// 2. exp.1
// const blueBtn = document.querySelector(".btn");
// blueBtn.addEventListener("keypress", checkKeyPress, false);

// function checkKeyPress(key){
//   if (key.keyCode == "97") {
//     alert("boss congratulations");
//   }
//   // console.log("Hey boss. Button is working");
// }
//  above one is flop cz
//  the function is like
// press btn- and press a
// soooo...  gonna try again

// 3.exp2
// window.addEventListener("keypress", checkKeyPress, false);
// function checkKeyPress(key){
//   if (key.keyCode == "20"){
//     alert("boss congratulations");
//   }
//   // console.log("Hey boss. Button is working");
// }

// lets try this out
// $(ready);

// function ready() {
//   $(document).on('keydown', onKeyDown);
// }

// function onKeyDown(ev) {
//   if (ev.code === 'MediaPlayPause') alert('Play/Pause');
//   if (ev.code === 'MediaStop') alert('Stop');
//   if (ev.code === 'MediaTrackPrevious') alert('Previous Track');
//   if (ev.code === 'MediaTrackNext') alert('Next Track');
//   if (ev.code === 'VolumeUp') alert('Volume Up');
//   if (ev.code === 'VolumeDown') alert('Volume Down');
//   if (ev.code === 'VolumeMute') alert('Volume Mute');
// }

window.addEventListener("keyup", checkKeyPress, false);
function checkKeyPress(ev) {
  if (ev.code === "MediaPlayPause") {
    alert("Play/Pause");
  }
  else if (ev.code === "MediaStop") {
    alert("Stop");
  }
  else if (ev.code === "MediaTrackPrevious") {
    alert("Previous Track");
  }
  else if (ev.code === "MediaTrackNext") {
    alert("Next Track");
  }
  else if (ev.code === "VolumeUp") {
    alert("Volume Up");
  }
  else if (ev.code === "VolumeDown") {
    alert("Volume Down");
  }
  else{
    alert("Volume Mute");
  }
  console.log("Hey boss. Button is working");
}
