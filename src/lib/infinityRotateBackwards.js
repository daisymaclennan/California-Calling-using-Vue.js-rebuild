export default function infinityRotateBackwards(titleOne, titleTwo, duration){
  //Gets the width of each title
  const textWidth = titleOne.getBoundingClientRect().width;
  console.log("text width", textWidth)
  titleOne.style.left = "0px";
  titleTwo.style.left = textWidth + 'px';

  //Starts at original position and ends at negative its width
  titleOne.animate([
  { transform: 'translateX(0px)' },
  { transform: 'translateX(-' + textWidth + 'px)' }
], {
  // timing options
  duration: duration,
  iterations: Infinity,
  easing: 'cubic-bezier(0, 0, 0, 0)',//constant speed
})
  //Starts at where the end of the first title would end then returns to its original position
  titleTwo.animate([
    { transform: 'translateX(0px)' },
    { transform: 'translateX(-' + textWidth + 'px)' }
  ], {
    // timing options
    duration: duration,
    iterations: Infinity,
    easing: 'cubic-bezier(0, 0, 0, 0)',//constant speed
  })
}
