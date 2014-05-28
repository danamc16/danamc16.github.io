$(document).ready(function(){
    $('#dialogue2').hide();
    $('#dialogue3').hide();
    $('#dialogue4').hide();
    $('#dialogue5').hide();
    $('#dialogue6').hide();
    $('#dialogue7').hide();
    $('#dialogue8').hide();
    $('#dialogue9').hide();
    $('#dialogue10').hide();
    $('#dialogue11').hide();
    $('#dialogue12').hide();
    $('#dialogue13').hide();

  $('#speak1').click(function(){ 
      $('#dialogue1').hide();
      $('#dialogue2').fadeIn();
      var userText = $('#comment_text').val();
      $('#name').html(userText + "!");
  })
    
    $('#answer1').click(function(){ 
      $('#dialogue2').hide();
      $('#dialogue3').fadeIn();
  })
    
    $('#answer2').click(function(){ 
      $('#dialogue2').hide();
      $('#dialogue4').fadeIn();
  })
    
    $('#answer3').click(function(){ 
      $('#dialogue2').hide();
      $('#dialogue5').fadeIn();
  })
     $('#speak3').click(function(){ 
      $('#dialogue3').hide();
      $('#dialogue12').fadeIn();
  });
     $('#speak4').click(function(){ 
      $('#dialogue4').hide();
      $('#dialogue12').fadeIn();
  });
     $('#speak5').click(function(){ 
      $('#dialogue5').hide();
      $('#dialogue12').fadeIn();
  });
    $('#speak12').click(function(){
         var answer = $('#fun').val();
        $('#dialogue12').hide();
        $('#dialogue13').fadeIn()
        $('#funname').html(answer + "," + " " + "too" + "!");
    });
     $('#speak13').click(function(){ 
      $('#dialogue13').hide();
      $('#dialogue6').fadeIn();
  });
     $('#answer4').click(function(){ 
      $('#dialogue6').hide();
      $('#dialogue7').fadeIn();
  });
     $('#answer5').click(function(){ 
      $('#dialogue6').hide();
      $('#dialogue8').fadeIn();
  });
    $('#answer6').click(function(){ 
      $('#dialogue7').hide();
      $('#dialogue9').fadeIn();
  });
    $('#answer7').click(function(){ 
      $('#dialogue7').hide();
      $('#dialogue10').fadeIn();
      var userText = $('#comment_text').val();
      $('#name10').html(userText);
       var userResponse = $('#response_text').val();
        $('#response10').html(userResponse);
       var userAnswer = $('#fun').val();
        $('#fun10').html(userAnswer);
        var userWhy = $('#fun_text').val();
        $('#funwhy10').html(userWhy);
  });
    $('#answer6w').click(function(){ 
      $('#dialogue10').hide();
      $('#dialogue9').fadeIn();
  });
    $('#answer7w').click(function(){ 
      $('#dialogue9').hide();
      $('#dialogue10').fadeIn();
      var userText = $('#comment_text').val();
      $('#name10').html(userText);
       var userResponse = $('#response_text').val();
        $('#response10').html(userResponse);
       var userAnswer = $('#fun').val();
        $('#fun10').html(userAnswer);
        var userWhy = $('#fun_text').val();
        $('#funwhy10').html(userWhy);
  });
      
    $('#answer8').click(function(){ 
      $('#dialogue10').hide();
      $('#dialogue11').fadeIn();
  });
    $('#answer8w').click(function(){ 
      $('#dialogue9').hide();
      $('#dialogue11').fadeIn();
  });
});
