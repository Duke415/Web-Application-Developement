const text = ['Developer', 'Problem Solver', 'Mentor'];
let wordCount = 0;
let i = 0;
let currentWord = '';
let letter = '';

(function type(){

    if(wordCount === text.length){
        wordCount=0;
    }

    currentWord = text[wordCount];
    letter = currentWord.slice(0, ++i);

    document.querySelector('.typing').textContent = letter;

    if(letter.length === currentWord.length){

        wordCount++;
        i = 0;
    }
    
    setTimeout(type, 400);

}());