const disp = document.getElementById('display');

const btn = Array.from(document.getElementsByClassName('buttons'));
const sciBtn = Array.from(document.getElementsByClassName('sciButtons'));

btn.map(button => {

    button.addEventListener('click', function(event) {

        switch(event.target.innerText){

            case 'AC':
                disp.innerText = '';
                break;

            case 'DEL':
                disp.innerText = disp.innerText.slice(0,-1);
                break;

            case '=':

                try{
                disp.innerText = eval(disp.innerText);
                }

                catch{
                disp.innerText = "Scientific error";
                }

                break;

            case "%":
                disp.innerText = disp.innerText/100;
                break; 

            case "S":

                for (const a of sciBtn) {

                    a.classList.toggle('sciBtnClass');
                    
                }

                for (const b of btn) {
                    
                    b.classList.toggle('btnClass');
                }
               
                disp.innerText = '';
                
                break;
                
            default:
                disp.innerText += event.target.innerText;
        }

        console.log(button);
        
    });
});



sciBtn.map(button => {

    button.addEventListener('click', function(event) {

        switch(event.target.innerText){

            case 'AC':
                disp.innerText = '';
                break;

            case 'DEL':
                disp.innerText = disp.innerText.slice(0,-1);
                break;

            case '=':

                try{
                disp.innerText = eval(disp.innerText);
                }

                catch{
                disp.innerText = "Scientific error";
                }

                break;

            case "%":
                disp.innerText = disp.innerText/100;
                break; 

            case "S":

                for (const a of sciBtn) {

                    a.classList.toggle('sciBtnClass');
                    
                }

                for (const b of btn) {
                    
                    b.classList.toggle('btnClass');
                }
               
                disp.innerText = '';
             
                break;
                
            default:
                disp.innerText += event.target.innerText;
        }

        console.log(button);
        
    });
});
