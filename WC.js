let textbox = document.getElementById('textbox');

textbox.addEventListener('input', function(){
    var text = this.value;
    let char = text.length;

    document.getElementById('char').innerHTML = char;

    text = text.trim();     //to not count extra spaces
    let word = text.split(" ");

    let cleanList = word.filter(function(elm){
        return elm != "";                          //to not count extra spaces between words
    });

    let word_length = cleanList.length;
    
    document.getElementById('word').innerHTML = word_length;
});