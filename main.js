
//local storage
const action = {
  "getEventType": "",
  "getEventTarget": "",
  "getEventTime": ""
};

var obj = Object.create(action);
window.onload = function (e) {
  obj['getEventType'] = e.type;
  obj['getEventTarget'] = e.target;
  obj['getEventTime'] = e.timeStamp;
  
  var names=[];
  names.push(obj);
  names.push(JSON.parse(localStorage.getItem('session')));
  localStorage.setItem('session', JSON.stringify(names));  
   
};
window.onunload = function (e) {
  obj['getEventType'] = e.type;
  obj['getEventTarget'] = e.target;
  obj['getEventTime'] = e.timeStamp;
  
  var names=[];
  names.push(obj);
  names.push(JSON.parse(localStorage.getItem('session')));
  localStorage.setItem('session', JSON.stringify(names));
  
  
};

const genrateButton = document.querySelector('.generate');
var textInput = document.querySelector('#letter');
const errorMessage = document.querySelector('.error');
const lettersDiv = document.querySelector('.letters');
const picDiv = document.querySelector('.pic');
var randomNumber;
var textValue;
var letter;
var letters = 'abcdefghijklmnopqrstuvwxyz';
var buutons = [];

function generateRandomNumber() {
  randomNumber = Math.floor(Math.floor(Math.random() * 26) + 1);
  return randomNumber;
}

genrateButton.addEventListener('click', function() {
  textValue = parseInt(textInput.value);
  if (textValue > 26 || textValue <= 0) {
    errorMessage.style.visibility = 'visible';
    errorMessage.innerHTML = 'set number between 1 to 26';
    lettersDiv.innerHTML = '';
    picDiv.innerHTML = '';
  } else {
    generatebuttons(textValue);
    if (errorMessage.innerHTML != '') {
      errorMessage.style.visibility = 'hidden';
    }
  }
  textInput.value = '';

  //local storage 
  obj['getEventType'] = event.type;
  obj['getEventTarget'] = event.target;
  obj['getEventTime'] = event.timeStamp;
  
  var names=[];
  names.push(obj);
  names.push(JSON.parse(localStorage.getItem('session')));
  localStorage.setItem('session', JSON.stringify(names));

});

function generatebuttons(textValue) {
  if (lettersDiv.innerHTML != '') {
    lettersDiv.innerHTML = '';
  }

  var arr = [];
  var num = 26;
  for (var i = 0; i < num; i++) {
    arr.push(false);
  }
  while (textValue != 0) {
    var x = generateRandomNumber();
    if (arr[x - 1] == false) {
      arr[x - 1] = true;
      create(letters.charAt(x - 1), textValue);
      textValue--;
    }
  }
}

function create(char, textValue) {
  var button = document.createElement('button');
  var text = document.createTextNode(char);
  button.appendChild(text);
  lettersDiv.appendChild(button);
  button.setAttribute('class', 'btn');
  buutons[textValue] = button;

  buutons.forEach((bt, index) => {
    bt.addEventListener('click', function() {
      if (picDiv.innerHTML != '') {
        picDiv.innerHTML = '';
      }
      var img = document.createElement('img');
      img.src =
        'images/' +
        `${buutons[index].innerHTML}` +
        '/' +
        `${buutons[index].innerHTML}` +
        '.jpg';
      img.setAttribute('class', 'image');
      picDiv.appendChild(img);

      //local storage
      obj['getEventType'] = event.type;
      obj['getEventTarget'] = event.target;
      obj['getEventTime'] = event.timeStamp;
      
      var names=[];
      names.push(obj);
      names.push(JSON.parse(localStorage.getItem('session')));
      localStorage.setItem('session', JSON.stringify(names));
    });
  });
}


