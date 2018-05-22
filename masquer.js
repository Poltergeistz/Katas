function masquer(){
    var text = prompt ("Text :");
    return "#" .repeat(text.length -4) + text .substring(text.length -4, text.length);
    if (text.lenght < 3)
    return text
  }
  masquer()