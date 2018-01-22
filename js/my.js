


// document.getElementById('butnMenu').onclick=function(){
// 	if (document.getElementById('headerback').style.bottom == '0px') {
// 	document.getElementById('headerback').style.top = '0px'
// 	}
// 	else{
// 		document.getElementById('headerback').style.bottom = '0px'
// 	}
// }

$(document).ready(function(){

	//  menu slide
    $("#butnMenu").click(function(){
        $("#headerback").slideToggle(500);
    });
  // button toggle class
    $("#butnMenu").click(function(){
    $("#butnMenu").toggleClass("flipped");
  });
  

  // menu scrol

     $(document).ready(function(){
     	test()
     	function test(){
     $(window).scroll(function() {    
       if($(document).scrollTop()>400){
        $ ('header').addClass('logo_scroled');
       }
         else{
          $('header').removeClass('logo_scroled');
         };
     });

 }
     });

     

    
   var scropposition=$(document).scrollTop()+window.innerHeight
   var asidebotom=$('#leftAside').offset().top+$('#leftAside').outerHeight()
   var manebotom=$('#main').offset().top+$('#main').outerHeight()

   //  console.log($(document).scrollTop()+window.innerHeight)
    // console.log(manebotom)

     //console.log(scropposition)
     //console.log(asidebotom)
   



      
     
     	



    


});


// content slider 
