'use strict';

import{emicalculator} from './utilities/project.js';

document.querySelector('button').onclick = function (){
    // console.log(document.getElementById('emicalculatort'));
    // console.log(document.getElementById('emicalculatort').value);

    var p = document.getElementById('AmountInput').value;
    var r = document.getElementById('ROIInput').value;
    var n = document.getElementById('durationInput').value;    
    
    var message = '' ;
    var classContent = '';

    if(p == '' || r == '' || n == ''){
        message = 'Invalid Details';
        classContent = 'alert alert-danger';
    }
    else if(p < 0 || r < 0 || n < 0){
        message = 'Values must be a positive number';
        classContent = 'alert alert-danger';
    }
    else{
        var emi = emicalculator(p, n, r);
        emi = Math.round(emi);
        var totalpayable = emi * n * 12;

        message = ` 
        EMI : &#8377 ${emi} <br />
        Total Amount Paid : &#8377; ${totalpayable} <br />
        Loan Amount : &#8377; ${p} <br />
        Total Interest Paid : &#8377; ${totalpayable - p} <br />
        `;
        classContent = 'alert alert-success'
    }
    document.getElementById('errMsg').innerHTML = message;
    document.getElementById('errMsg').className = classContent;
}