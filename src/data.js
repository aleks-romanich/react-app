

/*
var processJSON = function (json) {
     var result = JSON.parse(json);
     return result;
}

  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/data.json', true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return;

    if (xhr.status !== 200) {
      console.log(xhr.status + ': ' + xhr.statusText);
    } else {
      processJSON(xhr.responseText);
      //console.log(xhr.responseText);
    }
  }
*/

var my_news = [
{
  author: 'Understanding Quantum Computing',
  text: 'Formerly only understood by physicists and mulled by Einstein himself, we are now realizing the ',
  bigText: 'Formerly only understood by physicists and mulled by Einstein himself, we are now realizing the massive potential of quantum computing. '
},
{
  author: 'How do quantum computers work?',
  text: 'Classical computers encode information in bits. Each bit can take the value of 1 or 0.',
  bigText: 'Classical computers encode information in bits. Each bit can take the value of 1 or 0. These 1s and 0s act as on/off switches that ultimately drive computer functions. '
},
{
  author: 'What can quantum computers do?',
  text: 'Quantum systems may untangle the complexity of molecular and chemical interactions leading',
  bigText: 'Quantum systems may untangle the complexity of molecular and chemical interactions leading to the discovery of new medicines and materials. They may enable ultra-efficient logistics and supply chains, such as optimizing fleet operations for deliveries during the holiday season. '
}
];


export {my_news};
