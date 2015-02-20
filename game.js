$(document).ready(function(){
    var num = Math.floor(Math.random()*100);

    var remaining = 5;
    var scale=1;
    var performance = "";
    var lastDifference = 0;
    var guesses =[];

    //ends the game
    var gameOver = function(winOrLose){
        event.preventDefault();

        //removes warmer and colder panel
        $('.getting-warmer').hide();
        $('.getting-colder').hide();
        $('form').remove();
        $('.play-again').show();
        $('.col-xs-2').find('.remaining').text(0);

        if(winOrLose){
            $('.panel-title').text('WINNER ! !');
        }
        else{
            $('.panel-title').text('LOSER ! !');
        }

    };

    //pop out interface for the answer
    $('.hint').popover();

    //add answer to the hint
    var popover = $('.hint').data('bs.popover');
    popover.options.content = num;

    $('form').on('submit',function(event){

        var guess = $(this).find('input').val();


            if(testInput(guess, guesses)){
                remaining--;
                scale= scale +0.7;
                guesses.push(guess);
                event.preventDefault();

                //status panel is scaled by 0.7 each successful turn
                $('.panel-title').css({'transform':'scaleY('+scale+')'});

                difference = guess-num;

                if(difference ===0){

                    gameOver(true);
                    return false;

                }

                if(remaining==5){

                }
                else{

                    if(Math.abs(difference)<Math.abs(lastDifference)){
                        //warmer
                        $('.getting-warmer').show();
                        $('.getting-colder').hide();

                    }
                    else{
                        $('.getting-colder').show();
                        $('.getting-warmer').hide();

                    }


                }
                if(remaining>0){


                    if(difference>15){
                        $('.panel-title').text("TOO HIGH! COLD ! !");

                    }
                    else if (difference<15 && difference>0){
                        $('.panel-title').text("-TOO HIGH! HOT");
                    }
                    else if(difference<-15){
                        $('.panel-title').text("COLD! TOO LOW !");
                    }
                    else if (difference>-15 && difference<0){
                        $('.panel-title').text("TOO LOW! HOT !");
                    }




                   
                    lastDifference = difference;
                    
                    $('.col-xs-2').find('.remaining').text(remaining);


                }
                else{

                    gameOver(false);
                    return false;

                }


                $('.play-again').on('click',function(){
                    location.reload();
                });
            }
            


   });


});

var testInput = function(guess, guesses){
    var num = Number.parseInt(guess);
    if(guesses.indexOf(guess) != -1){
        alert("You have already used this!");
        return false;
    }

    if(num>0 && num<100){
        return true;
    }
    else{
        alert("Please enter number between 1 and 100");
        return false;
    }


};
