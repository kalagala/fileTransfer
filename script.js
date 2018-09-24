function checkerr(){
  var file = document.getElementById('thefile').value;
  if(file == null || file == ""){
    document.getElementById('error').innerHTML="please enter a file";
    document.getElementById('error').style.color='red';
  }else {
    fileList.forEach(function (file) {
    	upload(file);
    });
  }
}
function upload(file){
 var form = document.getElementById('theform');
 var formData = new FormData();
 formData.set('kala',file);
 var ajax = new XMLHttpRequest();
 ajax.upload.addEventListener("progress",progressHandler,true);
 ajax.onreadystatechange = function(){
    if (ajax.readyState == 4 && ajax.status == 200) {
      document.getElementById('average').innerHTML="the average speed is "+avgSpeed;
      document.getElementById('error').innerHTML=ajax.responseText;
      console.log(ajax.responseText);
    }
  }
 ajax.open('POST', 'upload.php', true);
 ajax.send(formData);

}
var fileInput;
var fileList = [];
var numFile;
var fileListDisplay ;
function clearStats(){
  document.getElementById('average').innerHTML="";
  document.getElementById('min').innerHTML="";
  document.getElementById('max').innerHTML="";
  document.getElementById('error').innerHTML="";
  document.getElementById('speed').innerHTML="";
  fileList =[];
  fileInput = document.getElementById('thefile');
  numFile = fileInput.files.length;
  for (var i = 0; i < numFile; i++) {
    	fileList.push(fileInput.files[i]);
  }
  renderFileList();

}
renderFileList = function () {
    var kala = document.getElementById('filediplay');
  	kala.innerHTML = '';
    fileList.forEach(function (file, index) {
    	var fileDisplayEl = document.createElement('p');
      fileDisplayEl.innerHTML = (index + 1) + ': ' + file.name;
      kala.appendChild(fileDisplayEl);
    });
  };
var uploaded = 0;
var upSpeed = 0;
var lastUpTime =0;
var progbarG =0;
function progressHandler(event){
  var percentage =(event.loaded/event.total)*100;


  //alert("the percentage is "+percentage);
  document.getElementById('progressbar').value=percentage;
  document.getElementById('current').innerHTML=(event.loaded)/(1024 *1024)+"MB";
  document.getElementById('total').innerHTML=(event.total)/(1024 *1024)+"MB";
  var endTime = (new Date()).getTime();
  upSpeed = ((event.loaded - uploaded) * 1000) / ((endTime - lastUpTime) * 1024)/(1024 );
  upSpeed = +upSpeed.toFixed(2);
  calcAvg(upSpeed);
  //console.log('Up: ' + upSpeed);
  document.getElementById('speed').innerHTML=upSpeed+" MB/s";
  uploaded = event.loaded;
  lastUpTime = endTime;

}
var general =0;
var complete = 0;
function calcProgg(e){

  if(general < 100){
    e - general;
      general = e;
  }else {
    complete++;
  }

  document.getElementById('progressbarGeneral').value=general/numFile;

}
var initialspeed;
var itaration = 0;
var minimum = 0;
var maximum = 0;
var total = 0;
var change= 0;
var avgSpeed;
function calcAvg(speed){
  itaration++;
  if(itaration == 1){
    initialspeed = speed;
    minimum = initialspeed;
    maximum = initialspeed;
    document.getElementById('min').innerHTML="the minimum speed is "+minimum+"MB/s";
  }
if(speed < minimum){
  minimum = speed;
  document.getElementById('min').innerHTML="the minimum speed is "+minimum+"MB/s";
}
if(speed > maximum){
  maximum = speed;
  document.getElementById('max').innerHTML="the maximum speed is "+maximum+"MB/s";
}
total += speed;
avgSpeed = total/itaration;

}
function send(){
  var ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function(){
     if (ajax.readyState == 4 && ajax.status == 200) {
       document.getElementById('content').innerHTML=ajax.responseText;

     }
   }
  ajax.open('POST', 'sending.php', true);
  ajax.send();

}

function receive(){
  var ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function(){
     if (ajax.readyState == 4 && ajax.status == 200) {
       document.getElementById('content').innerHTML=ajax.responseText;
     }
   }
  ajax.open('POST', 'checking.php', true);
  ajax.send();

}

function watch(){
  var ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function(){
     if (ajax.readyState == 4 && ajax.status == 200) {
       document.getElementById('content').innerHTML=ajax.responseText;
     }
   }
  ajax.open('POST', 'checkForWatching.php', true);
  ajax.send();

}
