function switchTheme(theme)
{
    if(theme == 'dark')
    {
        document.querySelector('body').classList.add('dark-theme');
    }
    else
    {
        document.querySelector('body').classList.remove('dark-theme');
    }
}

function calculateString(str) {
    // Remove any whitespace from the string
    str = str.replace(/\s/g, '');

    // Use eval() to evaluate input string as JavaScript expression
    return eval(str);
}

let mainCalculationBox = document.querySelector('.main-calculation');
let lastCalculationBox = document.querySelector('.last-calculation');

let lastCalculations = [];

function makeLastCalculationBoxContent()
{
    lastCalculationBox.innerHTML = '';
    for(let i = 0;i < lastCalculations.length;i++)
    {
        let text = lastCalculations[i];

        lastCalculationBox.innerHTML += text;
        
        if(i < lastCalculations.length)
        {
            lastCalculationBox.innerHTML += '<br>';
        }
    }

    return;
}

function calculator(c)
{
    if(c === 'AC')
    {
        lastCalculationBox.innerHTML = '';
        mainCalculationBox.innerHTML = '';
        lastCalculations = [];
    }
    else if(c === 'C')
    {
        mainCalculationBox.innerHTML = '';
    }
    else if(c === 'back' && lastCalculations.length >= 1)
    {
        mainCalculationBox.innerHTML = lastCalculations[lastCalculations.length - 1].split(' = ')[0];
        if(lastCalculations.length === 1)
        {
            lastCalculations = [];
        }
        else
        {
            lastCalculations = lastCalculations.pop();
        }
        makeLastCalculationBoxContent();
    }
    else if(c === 'submit')
    {
        if(mainCalculationBox.innerHTML === '')
        {
            return;
        }

        let str = mainCalculationBox.innerHTML;
        mainCalculationBox.innerHTML = '';
        
        let str2 = str.replace('×', '*');
        str2 = str2.replace('÷', '/');
        
        let ans = calculateString(str2);
        str2 += ' = ' + ans;
        lastCalculations = [...lastCalculations, str + ' = ' + ans];
        makeLastCalculationBoxContent();

        mainCalculationBox.innerHTML = ans;
    }
    else
    {

        if(!(c >= '0' && c <= '9') && mainCalculationBox.innerHTML === '')
            return;

        let str = mainCalculationBox.innerHTML;
        mainCalculationBox.innerHTML += (str != '' && (str[str.length - 1] <= '9' && str[str.length - 1] >= '0') && (c <= '9' && c >= '0') ? '' : ' ') + c;
    }
}