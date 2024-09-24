const display = document.getElementById("display");

const buttons = document.querySelectorAll('button');

let currentValue = '';

buttons.forEach((button) =>{
    button.addEventListener('click', (e)=>{
        const buttonText = e.target.textContent;

        if(!isNaN(buttonText)){
            currentValue += buttonText;
            display.value = currentValue;
            // console.log(currentValue);
        }
        else if(['+','-','/','%','.'].includes(buttonText)){
            currentValue+=buttonText;
            display.value = currentValue;
        }
        else if(buttonText==='x')
            {
                currentValue+='*';
                display.value = currentValue;
            }
        else if(buttonText==='AC')
        {
            currentValue = '';
            display.value = currentValue;
        }
        else if(buttonText === 'del')
        {
            currentValue = currentValue.slice(0,-1);
            display.value = currentValue;
        }
        else if(buttonText==='=')
        {
            try
            {
                currentValue = eval(currentValue);
                display.value = currentValue;
            }
            catch(error)
            {
                display.value = 'Error';
            }
        }


    });

});