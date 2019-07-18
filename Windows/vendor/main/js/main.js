const ipcRenderer = require('electron').ipcRenderer;

//wait for an updateReady message
ipcRenderer.on('updateReady', function(event, text) {
  // changes the text of the button
  var containeer = document.getElementById('ready');
  containeer.innerHTML = "new version ready!";
})