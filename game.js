$(document).ready(function(){
   var num = Math.floor(Math.random()*100);
   var remaining = 5;
   var scale=1;
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

   }
   $('form').on('submit',function(event){
       scale++;
       $('.panel-title').css({'transform':'scaleY('+scale+')'});
       var guess = $(this).find('input').val();
       var difference = guess-num;
       if(guess==num){
           gameOver(true);

       }


       if(remaining>1){


           if(difference>20){
               $('.panel-title').text("OO TOO HIGH! COLD ! !");

           }
           else if (difference<10 && difference>0){
               $('.panel-title').text("HOY !HOT ! TOO HIGH!");
           }
           else if(difference<-20){
               $('.panel-title').text("BIT COLD! LOWER !");
           }
           else if (difference>-10 && difference<0){
               $('.panel-title').text("TOO LOW! YOUR HOT ! !");
           }

           event.preventDefault();

           console.log(guess);
           remaining--;
           $('.col-xs-2').find('.remaining').text(remaining);

       }
       else{
           gameOver(false);

       }

       $('.play-again').on('click',function(){
            location.reload();
       })



   });
    console.log(num);

});