var firstBlock ='';
var secondBlock = '';
var operator = '';
var result = false;

$(document).ready(function(){
    // clicked buttons will be pushed into the input array
    var input = [];
    $('.num').click(function(){
        input.push($(this).attr('value'))
        console.log(input);
    })
    // when an operator is clicked the array is joined and then parsed
    
    // Need to figure out a way to do the calculation without having to press the operator twice. e.g 5 * 5 should return 25. Currently 5 * 5 * = 25
    
    $('.operator').click(function(){
        if (firstBlock == '') {
            firstBlock = input.join('');
            firstBlock = parseFloat(firstBlock);
            console.log(firstBlock);
            console.log('this is the first block');
            input = [];
            operator = $(this).attr('value');
            console.log(operator);
            


        } 
        
    })

    $('#equals').click(function(){
        if (firstBlock != '') {
            secondBlock = input.join('');
            secondBlock = parseFloat(secondBlock);
            console.log(secondBlock);
            console.log('this is the second block');
            input = [];
        }
        switch(operator){
            case '+':
                console.log(firstBlock + secondBlock);
                firstBlock = firstBlock + secondBlock;
                secondBlock="";
                result = true;
                break;
            case '-':
                console.log(firstBlock - secondBlock);
                firstBlock 
                break;
            case '*':
                console.log(firstBlock * secondBlock);
                break;
            case '/':
                console.log(firstBlock / secondBlock);
                break;

        }
    })

    $('#clear').click(function(){
        input = [];
        firstBlock ="";
        secondBlock="";
    })
    
})