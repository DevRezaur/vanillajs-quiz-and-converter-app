function convert() {
    currency1 = document.getElementById('currency-from');
    input = document.getElementById('input');
    currency2 = document.getElementById('currency-to');
    output = document.getElementById('output');

    inputAmount = parseInt(input.value);

    if(currency1.value == 'Bangladeshi TK') {
        if(currency2.value == 'Dollar') {
            output.value = (inputAmount / 80).toFixed(4);
        } else if(currency2.value == 'Euro') {
            output.value = (inputAmount / 95).toFixed(4);
        } else if(currency2.value == 'Malaysian Ringgit') {
            output.value = (inputAmount / 21).toFixed(4);
        } else if(currency2.value == 'Indian Rupee') {
            output.value = (inputAmount / 1.16).toFixed(4);
        }     
    } else if(currency1.value == 'Euro') {
        if(currency2.value == 'Dollar') {
            output.value = (inputAmount / 0.82).toFixed(4);
        } else if(currency2.value == 'Malaysian Ringgit') {
            output.value = (inputAmount / 0.20).toFixed(4);
        } else if(currency2.value == 'Indian Rupee') {
            output.value = (inputAmount / 0.011).toFixed(4);
        } else if(currency2.value == 'Bangladeshi TK') {
            output.value = (inputAmount / 0.0097).toFixed(4);
        }    
    } else if(currency1.value == 'Dollar') {
        if(currency2.value == 'Euro') {
            output.value = (inputAmount / 1.22).toFixed(4);
        } else if(currency2.value == 'Malaysian Ringgit') {
            output.value = (inputAmount / 0.25).toFixed(4);
        } else if(currency2.value == 'Indian Rupee') {
            output.value = (inputAmount / 0.014).toFixed(4);
        } else if(currency2.value == 'Bangladeshi TK') {
            output.value = (inputAmount / 0.012).toFixed(4);
        }    
    } else if(currency1.value == 'Indian Rupee') {
        if(currency2.value == 'Dollar') {
            output.value = (inputAmount / 73.22).toFixed(4);
        } else if(currency2.value == 'Euro') {
            output.value = (inputAmount / 88.91).toFixed(4);
        } else if(currency2.value == 'Malaysian Ringgit') {
            output.value = (inputAmount / 18.01).toFixed(4);
        } else if(currency2.value == 'Bangladeshi TK') {
            output.value = (inputAmount / 0.86).toFixed(4);
        }
    } else if(currency1.value == 'Malaysian Ringgit') {   
        if(currency2.value == 'Dollar') {
            output.value = (inputAmount / 4.05).toFixed(4);
        } else if(currency2.value == 'Euro') {
            output.value = (inputAmount / 4.92).toFixed(4);
        } else if(currency2.value == 'Indian Rupee') {
            output.value = (inputAmount / 0.055).toFixed(4);
        } else if(currency2.value == 'Bangladeshi TK') {
            output.value = (inputAmount / 0.048).toFixed(4);
        }  
    }
}