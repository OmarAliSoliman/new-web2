
//local storage
var actions=[];
const ac = {
    "getEventType": "",
    "getEventTarget": "",
    "getEventTime": ""
  };
  var ob = Object.create(ac);
  function showEvents()
  {
    for(i=0;i<actions.length;i++){
      $.ajax(
        {
          type: "POST",
          url: "ajax.php",
          data: {"data": JSON.stringify(actions[i])},
          success: function(response)
          {
            actions=[];
            window.localStorage.clear();
          }
        }
        );
      }
    }
  setInterval( showEvents, 5000);
 

window.onload = function (e) {
    var ob = Object.create(ac);
    ob['getEventType'] = e.type;
    ob['getEventTarget'] = e.target;
    ob['getEventTime'] = e.timeStamp;
    
    actions.push(ob);
    
    localStorage.setItem('session', JSON.stringify(actions));  
     
  };
  
  window.onunload = function (e) {
    ob['getEventType'] = e.type;
    ob['getEventTarget'] = e.target;
    ob['getEventTime'] = e.timeStamp;
    actions.push(ob);
    localStorage.setItem('session', JSON.stringify(actions));
    
    
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

  var ob = Object.create(ac);
  ob['getEventType'] = event.type;
  ob['getEventTarget'] = event.target;
  ob['getEventTime'] = event.timeStamp;
  
  
  actions.push(ob);
  
  localStorage.setItem('session', JSON.stringify(actions));

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
      var ob = Object.create(ac);
      ob['getEventType'] = event.type;
      ob['getEventTarget'] = event.target;
      ob['getEventTime'] = event.timeStamp;
      
      actions.push(ob);
      
      localStorage.setItem('session', JSON.stringify(actions));


    });
  });
}

 

var eve = document.querySelector("#events");  
eve.addEventListener("click", function(e)
{
  $.ajax(
    {
      type: "GET",
      url: "ajax.php",
      data: {"data": ""},
      success: function(response)
      {
        if(response)
        {
          var data = JSON.parse(response);
          console.log(data);
        }
      } 
    });
  }); 

      