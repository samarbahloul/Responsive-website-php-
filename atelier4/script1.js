$(function(){ 

//debut exercice1
$("#b1").click(function(){
    	
        var url=$(location).attr("href");
        alert(url);
       
    });
//fin exercice1
//debut exercice2
let b2 = document.getElementById("b2");
let element = document.getElementById("monelement");
b2.addEventListener("click", () => {
  if(getComputedStyle(element).display != "none"){
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }

})
$("#b2").click(function(){
    	
  if ($("h1").is(":visible")){alert ("#monelement est visible");}
if ($("h1").is(":hidden")){alert ("#monelement est caché"); }
       
    });
//fin exercice2
//debut exercice3
let togg1 = document.getElementById("b3");
let d3 = document.getElementById("d3");
togg1.addEventListener("click", () => {
  if(getComputedStyle(d3).display != "none"){
    d3.style.display = "none";
  } else {
    d3.style.display = "block";
  }
})

$("span").show();
    	$("<p>!Je suis les éléments de classe ma_classe!</p>").insertAfter('.ma_classe');
    	$("span").insertAfter('#mon_div');
    	$("Un petit texte à insérer dans le DOM juste avant mon_div").insertBefore('#mon_div');
    	$( "#mon_div" ).append( "<p>** Je mets ça en fin de DIV **</p>" );
		$( "#mon_div" ).prepend( "<p>++ Tiens je rajoute ça en début de div ++</p>" );


//fin exercice3
//debut exercice4
let b4 = document.getElementById("b4");
let d4 = document.getElementById("d4");
b4.addEventListener("click", () => {
  if(getComputedStyle(d4).display != "none"){
    d4.style.display = "none";
  } else {
    d4.style.display = "block";
  }

})

$("#afficher_texte").click(function(){
    alert ("Le texte contenu dans le textarea est " + $("#mon_textarea").val());
});
//fin exercice4
//debut exercice5
let b5 = document.getElementById("b5");
let d5 = document.getElementById("d5");
b5.addEventListener("click", () => {
  if(getComputedStyle(d5).display != "none"){
    d5.style.display = "none";
  } else {
    d5.style.display = "block";
  }

})

$('#no_paste').bind('paste', function (e) {
         e.preventDefault();
      });
//fin exercice5
//debut exercice6
let b6 = document.getElementById("b6");
let d6 = document.getElementById("d6");
b6.addEventListener("click", () => {
  if(getComputedStyle(d6).display != "none"){
    d6.style.display = "none";
  } else {
    d6.style.display = "block";
  }

})

function supprimer_dernier_caractere(elm) {
  var val = $(elm).val();
var cursorPos = elm.selectionStart;
$(elm).val(
   val.substr(0,cursorPos-1) + // before cursor - 1
  val.substr(cursorPos,val.length) // after cursor
)
elm.selectionStart = cursorPos-1; // replace the cursor at the right place
elm.selectionEnd = cursorPos-1;
}
 $('body').delegate('input.only_alpha_num','keyup',function(){
    if(!$(this).val().match(/^[0-9a-z]*$/i)) // a-z et 0-9 uniquement
      supprimer_dernier_caractere(this);
  });
// Annulation du "coller" dans l'input texte auquel on a affecté l'identifiant "no_paste"
document.getElementById('no_paste').addEventListener('keydown', 
  function (foo){
    if (foo.keyCode == 86)
    {
       // alert('Vous avez copié du texte');
foo.preventDefault();
    }
 });
//fin exercice6
//debut exercice7
let b7 = document.getElementById("b7");
let d7 = document.getElementById("d7");
b7.addEventListener("click", () => {
  if(getComputedStyle(d7).display != "none"){
    d7.style.display = "none";
  } else {
    d7.style.display = "block";
  }

})
$("#mon_image").hover(
   function () {
     $(this).attr('src','monimage1.jpg');  
   },
   function () {
      $(this).attr('src','monimage2.jpg');  
   }
); 
//fin exercice7
//debut exercice8
/*
let b8 = document.getElementById("b8");
let d8 = document.getElementById("d8");
b8.addEventListener("click", () => {
  if(getComputedStyle(d8).display != "none"){
    d8.style.display = "none";
  } else {
    d8.style.display = "block";
  }

})
$( "#moncalendrier").datepicker({ showOn: "both",                           
        buttonImage: "../img/b_calendar.png",
        buttonImageOnly: true,
        buttonText:'Cliquer pour choisir une date',
        onClose: function(dateText, inst) {  }, $options });
$('#moncalendrier').focus();
//fin exercice8
*/
//debut exercice9
let b9 = document.getElementById("b9");
let d9 = document.getElementById("d9");
b9.addEventListener("click", () => {
  if(getComputedStyle(d9).display != "none"){
    d9.style.display = "none";
  } else {
    d9.style.display = "block";
  }
})

$("#monimage").hover(
  function(){
   // La souris passe sur l'élément
   $("#temp").remove()
   $(this).append("<div id='temp'></div>"); // Création d'un div temporaire qui va héberger l'image en surimpression
   bgimg = "url(monimage2.png)";
   $(this).find("#temp").css({position:"absolute",background:"transparent "+bgimg+" no-repeat",opacity:0});
   $(this).find("#temp").stop().animate({opacity:1},500);  }, 
function(){
   // La souris sort de l'élément
     $(this).find("#temp").stop().animate({opacity:0},500,function(){$(this).remove()});
  }
);
//fin exercice9
//debut exercice10
let b10 = document.getElementById("b10");
let d10 = document.getElementById("d10");
b10.addEventListener("click", () => {
  if(getComputedStyle(d10).display != "none"){
    d10.style.display = "none";
  } else {
    d10.style.display = "block";
  }

})

$('a img').hover(
   function(){ $(this).animate({ opacity : '.75' }); },
   function(){ $(this).animate({ opacity : '1' }); }
  );
//fin exercice10
//debut exercice11
let b11 = document.getElementById("b11");
let d11 = document.getElementById("d11");
b11.addEventListener("click", () => {
  if(getComputedStyle(d11).display != "none"){
    d11.style.display = "none";
  } else {
    d11.style.display = "block";
  }

})
$('h1').click(function(event){
     if(event.target.id == 'elt') {
       alert ("j'ai cliqué sur mon élément");
     } else {
       alert ("j'ai cliqué à l'extérieur de mon élément");
     }
 });

//fin exercice11
//debut exercice12
let b12 = document.getElementById("b12");
let d12 = document.getElementById("d12");
b12.addEventListener("click", () => {
  if(getComputedStyle(d12).display != "none"){
    d12.style.display = "none";
  } else {
    d12.style.display = "block";
  }

})
var today = new Date();
    var ladate=Date.parse(today);
    var lannee = today.getFullYear();
    var dateprintemps  =Date.parse(new Date(lannee, 2, 21));
    var dateete        =Date.parse(new Date(lannee, 5, 21));
    var dateautomne    =Date.parse(new Date(lannee, 8, 21));
    var datehiver      =Date.parse(new Date(lannee, 11, 21));
    if(ladate>=dateprintemps && ladate<dateete){
      $("#monimage").css({backgroundImage: "url(';/Fond-Printemps.jpg')"}); }
    else if(ladate>=dateete && ladate<dateautomne){
      $("#monimage").css({backgroundImage: "url('./Fond-Ete.jpg')"});  }
    else if(ladate>=dateautomne && ladate<datehiver){
      $("#monimage").css({backgroundImage: "url('./Fond-Automne.jpg')"});  }
    else if(ladate>=datehiver || ladate<dateprintemps){
      $("#monimage").css({backgroundImage: "url('./Fond-Hiver.jpg')"});  }
//fin exercice12
//debut exercice13
let b13 = document.getElementById("b13");
let d13 = document.getElementById("d13");
b13.addEventListener("click", () => {
  if(getComputedStyle(d13).display != "none"){
    d13.style.display = "none";
  } else {
    d13.style.display = "block";
  }

})
$('.maclassegenerale').not(".maclasseaexclure").css({"background":"url('./Fond-Ete.jpg')  no-repeat 5px 5px"});
//fin exercice13
//debut exercice14
let b14 = document.getElementById("b14");
let d14 = document.getElementById("d14");
b14.addEventListener("click", () => {
  if(getComputedStyle(d14).display != "none"){
    d14.style.display = "none";
  } else {
    d14.style.display = "block";
  }
var nb_element_de_class;
nb_element_de_class=$(".ma_classe").length;
alert(nb_element_de_class);
})

//fin exercice14

//debut exercice15

let b15 = document.getElementById("b15");
let d15 = document.getElementById("d15");
b15.addEventListener("click", () => {
  if(getComputedStyle(d15).display != "none"){
    d15.style.display = "none";
  } else {
    d15.style.display = "block";
  }
/*
var mavaleur =parseInt($("#monDiv1").css('height')) - parseInt($("#monDiv2").css('marginTop');
alert(mavaleur);*/
})

//fin exercice15
//debut exercice16
let b16 = document.getElementById("b16");
let d16 = document.getElementById("d16");
b16.addEventListener("click", () => {
  if(getComputedStyle(d16).display != "none"){
    d16.style.display = "none";
  } else {
    d16.style.display = "block";
  }
  })
$(".elementtextarea").attr('readonly','readonly');
//fin exercice16
//debut exercice17
let b17 = document.getElementById("b17");
let d17 = document.getElementById("d17");
b17.addEventListener("click", () => {
  if(getComputedStyle(d17).display != "none"){
    d17.style.display = "none";
  } else {
    d17.style.display = "block";
  }
  })

   $('#redirection').click(function() {
     $('html,body').animate({scrollTop: $("#monancre").offset().top}, 'slow'      );
   });  
   //fin exercice17

//debut exercice18
let b18 = document.getElementById("b18");
let d18 = document.getElementById("d18");
b18.addEventListener("click", () => {
  if(getComputedStyle(d18).display != "none"){
    d18.style.display = "none";
  } else {
    d18.style.display = "block";
  }
  })
  $("#monDiv").append("<p>");
   //fin exercice18
//debut exercice19
/*
let b19 = document.getElementById("b19");
let d19 = document.getElementById("d19");
b19.addEventListener("click", () => {
  if(getComputedStyle(d19).display != "none"){
    d19.style.display = "none";
  } else {
    d19.style.display = "block";
  }
  })
   $(':regex(id,^[aeiou])');
  //fin exercice19
  */
 //debut exercice20
 let b20 = document.getElementById("b20");
let d20 = document.getElementById("d20");
b20.addEventListener("click", () => {
  if(getComputedStyle(d20).display != "none"){
    d20.style.display = "none";
  } else {
    d20.style.display = "block";
  }
  })
$('#titre').keyup(function(e) {    
   if(e.keyCode == 13) { // KeyCode de la touche entrée
          alert('Hey ! Tu as appuyé sur la touche entrée !!'); 
 }
}); 
 //fin exercice20
 //debut exercice21
  let b21 = document.getElementById("b21");
let d21 = document.getElementById("d21");
b21.addEventListener("click", () => {
  if(getComputedStyle(d21).display != "none"){
    d21.style.display = "none";
  } else {
    d21.style.display = "block";
  }
  })
$("#div_pere").click (
     function (){
       alert ('click pere!');
        $(this).children('div:first').click();
     }
   );
  //fin exercice21
  //debut exercice22

  var new_element = jQuery('<div id="new_elt" style="display:none">?</div>');
// On ajoute du style avec la fonction .css()
new_element.css({
    background: 'gray',
    width     : '50px',
    height    : '30px',
    padding   : '3px'
});
$('body').append(new_element);
    let b22 = document.getElementById("b22");
let new_elt = document.getElementById("new_elt");
b22.addEventListener("click", () => {
  if(getComputedStyle(new_elt).display != "none"){
    new_elt.style.display = "none";
  } else {
    new_elt.style.display = "block";
  }
  })
  //fin exercice22
    //debut exercice23
    let b23 = document.getElementById("b23");
let d23 = document.getElementById("d23");
b23.addEventListener("click", () => {
  if(getComputedStyle(d23).display != "none"){
    d23.style.display = "none";
  } else {
    d23.style.display = "block";
  }
  $("#mondiv").siblings('div').each(function(i){
             alert (i +' : '+$(this).html());
});

  })
//fin exercice23
 //debut exercice24
     let b24 = document.getElementById("b24");
let d24 = document.getElementById("d24");
b24.addEventListener("click", () => {
  if(getComputedStyle(d24).display != "none"){
    d24.style.display = "none";
  } else {
    d24.style.display = "block";
  }
  })
$('#element option[value="Marseille"]').attr("selected", "selected");
 //fin exercice24
  //debut exercice25
       let b25 = document.getElementById("b25");
let d25 = document.getElementById("d25");
b25.addEventListener("click", () => {
  if(getComputedStyle(d25).display != "none"){
    d25.style.display = "none";
  } else {
    d25.style.display = "block";
  }
  })
 function FaireClignoterImage (){ $("#image-neon").fadeOut(200).delay(300).fadeIn(200); } 
    setInterval(FaireClignoterImage,700); 
  //fin exercice25
});
