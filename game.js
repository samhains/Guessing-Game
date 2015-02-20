$(document).ready(function(){
   var num = Math.floor(Math.random()*100);
   var remaining = 5;
   var scale=1;
   var performance = "";
   var lastDifference = 0;

    var gameOver = function(winOrLose){
       event.preventDefault();
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

   

    $('form').on('submit',function(event){
       scale++;
       $('.panel-title').css({'transform':'scaleY('+scale+')'});
       var guess = $(this).find('input').val();


         


       var guesses =[];
       difference = guess-num;
       if(difference ===0){
           gameOver(true);

       }

         if(remaining==5){
            performance = "";



            panelTitle(difference);
          }
          if(remaining>1){
            console.log(num);
            console.log(guess);
            guesses.push(guess);
            
            if(difference>15){
             $('.panel-title').text("TOO HIGH! COLD ! !"+performance);

            }
            else if (difference<15 && difference>0){
             $('.panel-title').text("-TOO HIGH! HOT"+performance);
            }
            else if(difference<-15){
             $('.panel-title').text("COLD! TOO LOW !"+performance);
            }
            else if (difference>-15 && difference<0){
             $('.panel-title').text("TOO LOW! HOT !"+performance);
            }




             


             event.preventDefault();

             remaining--;
             $('.col-xs-2').find('.remaining').text(remaining);


          }
         else{

             gameOver(false);

         }
     

       $('.play-again').on('click',function(){
            location.reload();
       });



   });
    
    

});

