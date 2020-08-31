const displayMessage = () => {
  //TODO ponerlo que se llame segun cambio de location
  //useeffect location
  console.clear();
  const msg = `################################################################\n############ If you found my portfolio interesting, ############\n############  Don't hesitate to send me a message!  ############\n################################################################`;
  console.log(msg);
};

window.onload = function () {
  displayMessage();
};
