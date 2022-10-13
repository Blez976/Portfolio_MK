//---------------------------------
// Menu
//---------------------------------

let titreSection = document.getElementById('titreSection');
let itemMenu = document.querySelectorAll('.selectMenu-hover'); //nodeList 
let section = document.querySelectorAll('section');
let btnBackHome = document.getElementById('btnHautPas');


function activeMemu()
{
   let lengthSection = section.length;

   while(--lengthSection && window.scrollY + 97 < section[lengthSection].offsetTop){}
   itemMenu.forEach(item => item.classList.remove('select-items-nav'));
   itemMenu[lengthSection].classList.add('select-items-nav');
   titreSection.textContent = itemMenu[lengthSection].getAttribute('data-title');

   (window.scrollY > 801)? btnBackHome.style.display = 'block': btnBackHome.style.display = 'none';
};
activeMemu();

window.addEventListener('scroll', activeMemu);




 
 /** Bar de menu version mobile */
  
//methode pour apl la bare de navigation
 document.getElementById('btnOpenMenu').addEventListener('click',function(){
   
   let sidebar = document.querySelector('#sidebar');
    sidebar.classList.toggle('open-menuMob'); // ouvre le menu
   
    
    for(let i=0; i<clickSection.length;i++){
       
       clickSection[i].addEventListener('click',function(){
  

             let j=0;
             while(j<clickSection.length){
                clickSection[j].className= 'selectMenu-hover';
                j++;
             }
             clickSection[i].className='selectMenu-hover seclect-items-nav';
             
      });
    }
    
    
    
 });

 //------------------------------------------------
 // Section Competence
 //------------------------------------------------

 let swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   autoplay: {
      delay: 8000,
      disableOnInteraction: true,
    },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   pagination: {
     el: ".swiper-pagination",
   },
   
 });

//-------------------------------------------------- 
// section portfolio
//--------------------------------------------------

let modal = new bootstrap.Modal(document.getElementById('Modal')); // model pour lire les resumes des realisation
let cardReal = document.querySelectorAll('.card-realisation-info'); // card ralisation
let menuRealisation = document.querySelectorAll('.menu-portfolio a'); // à supprimer


// v2

let contenairRealisation = document.getElementById('containerRealisation');
let btnWeb = document.getElementById('btn-web');
let btnDiy = document.getElementById('btn-diy');
let btnCert = document.getElementById('btn-cert');

// elems : donnees realisation
// typereal : type de realisation (app, site ...)
let ajoutCard = function (elems,typeReal)
{ 
 
  // code html pour rajouter des cards en fonction de la base de donnees
  let html='';
  for(let i= 0; i < Object.keys(elems).length; i++)
  {
   
   html += ' <div class="card-realisation  col-sm-10 col-md-5 col-xl-3 my-3 mx-4  animate__animated animate__zoomIn" style="height: 16rem ;" data-filter="'+typeReal+'">';
   html += '<img src="'+ elems[i]['img']+'" alt="">';
   html += '<div class="card-realisation-info">';
   html += '<h3>'+ elems[i]['titre'] +'</h3>';
   html += '<p>'+ elems[i]['typeReal'] +'</p> </div></div>';
   contenairRealisation.innerHTML = html;
   }

   // jquery pour mettre a jour les information sans charger la page
   
   $(document).ready(function(){

      cardReal = document.querySelectorAll('.card-realisation-info'); // on reselection 

      // afficher les information via un popup
      cardReal.forEach( (real,index) => real.addEventListener('click', function()
      {
         let modalTitre = document.getElementById('ModalLabel'); // titre + type de projet
         let realImage = document.getElementById('modalImg'); // image du projet
         let realDescription = document.getElementById('realDescription'); // description du projet
         let realLanguage = document.getElementById("listLanguage");  // liste des language utiliser
         let lienProjet = document.getElementById('lien-projet');
        
         modalTitre.innerHTML = elems[index]['titre'] + " / "+ elems[index]['typeReal']  ;
         realImage.setAttribute("src",elems[index]['img']);
         realDescription.innerHTML = elems[index]['description'];
         
         realLanguage.innerHTML = "";
         for (let j =0; j < Object.keys(elems[index]['language']).length; j++)
         {
            realLanguage.innerHTML += "<li>"+elems[index]['language'][j] +"</li>";
 
         }
         
         //on verifie si il ya un lien pour acceder au projet
         if( typeof elems[index]['lien'] === 'string' && Object.keys(elems[index]['lien']).length === 0 )
         {
           lienProjet.classList.add('d-none');
         }
         else
         {
            lienProjet.classList.remove('d-none');
            lienProjet.setAttribute('href',elems[index]['lien']);
         } 
         
       
          modal.show();
      }));

     
   })
   
}



// btnAll.addEventListener('click', function(donnees)
// {
   
//    donnees = data;

// //    for (let key in data) {
// //       console.log(data[key]);
// //   }
//    console.log(Object.keys(donnees[0]))
//    // ajoutCard(donnees);

// });

btnWeb.addEventListener('click', function(donnees, realisation)
{
   btnWeb.classList.add("menu-active");
   btnDiy.classList.remove("menu-active");
   btnCert.classList.remove("menu-active");

   donnees = data.web;
   realisation = "web";
   ajoutCard(donnees,realisation);
   
   
});

btnDiy.addEventListener('click', function(donnees,realisation)
{
   
   btnWeb.classList.remove("menu-active");
   btnDiy.classList.add("menu-active");
   btnCert.classList.remove("menu-active");

   donnees = data.diy;
   realisation = "diy";
   ajoutCard(donnees,realisation);

});



btnCert.addEventListener('click', function(donnees,realisation)
{
   btnWeb.classList.remove("menu-active");
   btnDiy.classList.remove("menu-active");
   btnCert.classList.add("menu-active");
   
   donnees = data.certification;
   realisation = "certification";
   ajoutCard(donnees, realisation);

   let cardNonClick = document.querySelectorAll('.card-realisation-info');
   
   for(let i=0; i < cardNonClick.length; i++)
   {
      cardNonClick[i].classList.add('pe-none')
   }

});














// fin v2






// données portfolio
let dataPortefolio =[
      
      {web : [
           [{titre :"La coop des venete"},{ img:"asset/image/coopVenete.jfif"}],//la coop des vente 
           [{titre :"www1 futur"}, {img:"asset/image/web1.jpg"}],// site future
           [{titre :"www2 futur"}, {img:"asset/image/web2.jpg"}],// site future
           [{titre :"www3 futur"}, {img:"asset/image/web1.jpg"}],// site future
           [{titre :"www4 futur"}, {img:"asset/image/web2.jpg"}],// site future
           [{titre :"www5 futur"}, {img:"asset/image/web1.jpg"}],// site future  
          
      ]},

      {app :[
           [{titre :"app1 futur"}, {img:"asset/image/Android-logo-1.jpg"}],// app future 
           [{titre :"app2 futur"}, {img:"asset/image/android.png"}],// app future
           [{titre :"app3 futur"}, {img:"asset/image/appplaysstore.jpg"}],// app future
       
      ]},

      {electronique:[ 
          [{titre :"Petitbote"}, {img:"asset/image/robot.jpg"}],// Petitbote
          [{titre :"Nichoir connecté"}, {img:"asset/image/nie.jpg"}],// Nichoir connecté
          [{titre :"serre connecté"}, {img:"asset/image/serre2.jpg"}],// objet future
          [{titre :"objet1 futur"}, {img:"asset/image/robot-futur1.jpg"}],// objet future
          [{titre :"objet2 futur"}, {img:"asset/image/robot-futur.jpg"}],// objet future
          [{titre :"objet3 futur"}, {img:"asset/image/robot-futur1.jpg"}],// objet future  
          [{titre :"www6 futur"}, {img:"asset/image/Android-logo-1.jpg"}],// objet future  
          [{titre :"www7 futur"}, {img:"asset/image/Android-logo-1.jpg"}],// objet future 
      ]},
     
      {certificat :[ 
          [{titre :"Afpa"}, {img:"asset/image/afpa.jfif"}],// Afpa 
          [{titre :"Pix"}, {img:"asset/image/pix.png"}],// Pix 
          [{titre :"Anssi"}, {img:"asset/image/logo_anssi.svg"}],// Anssi
          [{titre :"Certeficat futur"}, {img:"asset/image/openclass.jpg"}],// Certeficat futur
         
      ]},

];
   

// Animate.css

let dataAnime = [
   'animate__zoomIn',
   'animate__backOutDown',
   'animate__fadeOutTopLeft',
   'animate__fadeOutBottomLeft',
   'animate__flipOutX',
   'animate__flipOutY',
   'animate__rotateOutDownLeft',
   'animate__rotateOutUpLeft',
   'animate__rotateOutUpRight',
   'animate__zoomOutDown',
   'animate__zoomOutRight',
   'animate__zoomOutLeft',

   ];

let afficheurRealisation = document.querySelector('.container-realisation');//supprimer
let contenueRealisation = document.querySelectorAll('.card-realisation'); 
let legendeRealisation = document.querySelectorAll('.legende-realissation');
let imageRealisation = document.querySelectorAll('.card-realisation img'); 

let nextSwipe = 0;

let nextRealisation = function(titreRealisation){
   titreRealisation = titreRealisation; 
   
   // mise a jour a chaque click ou swipe, 
   contenueRealisation = document.querySelectorAll('.card-realisation'); 
   legendeRealisation = document.querySelectorAll('.legende-realissation');
   imageRealisation = document.querySelectorAll('.card-realisation img');
   let totalContenu = 6; // 6 card disponible
   
   //verifier si les dataportfolio son mise à jour, il y a 6 card disponible, si le nombre depasse 6 on ajoute les card qu'il faut. 
   if(titreRealisation.length > contenueRealisation.length ){  // ex : realisation electronique = 8 realisation, donc sa depasse 6, 8 < 6
      totalContenu = totalContenu + (titreRealisation.length - totalContenu); // 8
      let x = 6; // 6 cardrealisation disponible
      while(x < totalContenu){  // 6 < 8
        //ajoute les cards manquant "2"
        afficheurRealisation.innerHTML += '<figure class=" col-xl-3 col-lg-3 col-md-5 col-sm-8 col-9 gy-5 mx-3 card-realisation"> <img src="" alt="photo"><figcaption class="legende-realissation col-12"></figcaption></figure>';
        x++;
      }
      // mise a jour a chaque click ou swipe
      contenueRealisation = document.querySelectorAll('.card-realisation'); 
      legendeRealisation = document.querySelectorAll('.legende-realissation');
      imageRealisation = document.querySelectorAll('.card-realisation img');
     
    }

   playAnimation();
   
   // remplisage des cardrealisation
   for(let j = 0; j < contenueRealisation.length; j++){ 

      let k = 0;
       while(k <contenueRealisation.length){ 

         if(k < titreRealisation.length  ){ 
            contenueRealisation[k].classList.remove('hidden-card-realisation'); // afficher les car utiliser
            legendeRealisation[k].textContent = titreRealisation[k][0].titre;
            imageRealisation[k].setAttribute('src',titreRealisation[k][1].img);
             
         }else{contenueRealisation[k].classList.add('hidden-card-realisation');} // supprimer toutce qui n'est pas utiliser
         
         k++;
       };
       
      
    };
}


      //Arreté l'animation au bout de 800 ms 
       let configAnim = function(sup) {
          setTimeout(function(){
             afficheurRealisation.classList.remove(dataAnime[sup]); // supprimer le  nom de class qui vient d'êtres ajouté par playAnimation 
             afficheurRealisation.classList.add(dataAnime[0]); // ajouter l'animation pour l'affichage de contenu
             
             // apres la transition afficher le contenue
             for (let i = 0; i < contenueRealisation.length; i++) {
               contenueRealisation[i].style.opacity ="1";
             }
             
            }, 800);// 800 ms
       };

      //animation aleatoir de l'afficheur de realisation
       let playAnimation = function(){
          
         
         contenueRealisation = document.querySelectorAll('.card-realisation');
         // pendant la transition cacher le contenue
         for (let i = 0; i < contenueRealisation.length; i++) {
            contenueRealisation[i].style.opacity ="0";
            
          }
         
          let nb = Math.floor(Math.random() * 11)+1;//1 à 10
          afficheurRealisation.classList.remove(dataAnime[0]); // supprimer l'animation pour l'affichage de contenu
          afficheurRealisation.classList.add(dataAnime[nb]);
          configAnim(nb); 
       }


for(let i = 0; i < menuRealisation.length; i++){

   // ecouté au click chanque element du menu portfolio 
   menuRealisation[i].addEventListener('click', function(e){ 
       e.preventDefault();

       if(menuRealisation[i] == menuRealisation[0] ){ // Web 
           nextRealisation(dataPortefolio[i].web);
           nextSwipe = [i]; //sysctonitation avec le swipe mobile / tablette
       } 
       else  if(menuRealisation[i] == menuRealisation[1] ){ nextRealisation(dataPortefolio[i].app); nextSwipe = [i]; }// app
       else  if(menuRealisation[i] == menuRealisation[2] ){nextRealisation(dataPortefolio[i].electronique); nextSwipe = [i];}// electdronique
       else  if(menuRealisation[i] == menuRealisation[3] ){ nextRealisation(dataPortefolio[i].certificat);  nextSwipe = [i];};// certificat
   });

};

//-------------------------------------------------- 
// section portfolio mobile swipe
//--------------------------------------------------
 
let sectionPortfolio = document.getElementById('portfolio');

//console.log(nextRealisation(nextSwipe,dataPortefolio[1].app));
sectionPortfolio.addEventListener('swiped-left', function() {
   var menuRealisation = document.querySelectorAll('.menu-portfolio a');
   
   if (nextSwipe == 0){ // web --> app
      menuRealisation[nextSwipe].classList.remove('select-next-mob');
      menuRealisation[nextSwipe+1].classList.add('select-next-mob');
      nextRealisation(dataPortefolio[1].app);
      nextSwipe++;

   }else if(nextSwipe == 1){ //app --> electronique
      menuRealisation[nextSwipe].classList.remove('select-next-mob');
      menuRealisation[nextSwipe+1].classList.add('select-next-mob');
      nextRealisation(dataPortefolio[2].electronique);
      nextSwipe++;
      
   }else if(nextSwipe == 2){ // electronique --> certificat
      menuRealisation[nextSwipe].classList.remove('select-next-mob');
      menuRealisation[nextSwipe+1].classList.add('select-next-mob');
      nextRealisation(dataPortefolio[3].certificat);
      nextSwipe++;
   }else if(nextSwipe == 3){//certificat --> web
      menuRealisation[nextSwipe].classList.remove('select-next-mob');
      menuRealisation[nextSwipe-3].classList.add('select-next-mob');
      nextRealisation(dataPortefolio[0].web);
      nextSwipe = 0;
   } 
   console.log('swipe-right :'+ nextSwipe);
 });

/*** Swipe droit ***/
 sectionPortfolio.addEventListener('swiped-right', function() {
   var menuRealisation = document.querySelectorAll('.menu-portfolio a');
   
   if (nextSwipe == 0){ // certificat <-- web 
      menuRealisation[nextSwipe].classList.remove('select-next-mob');
      menuRealisation[nextSwipe+3].classList.add('select-next-mob');
      nextRealisation(dataPortefolio[3].certificat);
      nextSwipe = 3;

   }else if(nextSwipe == 1){ // web <-- app
      menuRealisation[nextSwipe].classList.remove('select-next-mob');
      menuRealisation[nextSwipe-1].classList.add('select-next-mob');
      nextRealisation(dataPortefolio[0].web);
      nextSwipe--;
      
   }else if(nextSwipe == 2){ // app <-- electronique
      menuRealisation[nextSwipe].classList.remove('select-next-mob');
      menuRealisation[nextSwipe-1].classList.add('select-next-mob');
      nextRealisation(dataPortefolio[1].app);
      nextSwipe--;
   }else if(nextSwipe == 3){//electronique <-- certificat
      menuRealisation[nextSwipe].classList.remove('select-next-mob');
      menuRealisation[nextSwipe-1].classList.add('select-next-mob');
      nextRealisation(dataPortefolio[2].electronique);
      nextSwipe--;
   } 
   console.log('swipe-right :'+ nextSwipe);
 });
 

/** code fin de chargement de la page */

window.addEventListener('load', function(){

   // section portfolio
    ajoutCard(data.web, "web");

    aosAnimate();
})

//check 
window.addEventListener('resize', aosAnimate);

function aosAnimate()
{
  let animation = document.querySelectorAll('.competence-aos');
   // console.log(window.innerWidth +' ' + animation.length);

   if(window.innerWidth <= 992)
   { 
      for( let i= 0; i <animation.length; i++)
      {
        animation[i].setAttribute('data-aos', 'fade-up');
        
      }
   }
   else
   {
      for( let i= 0; i <animation.length; i++)
      { 
         // on verifie si le nombre est pair
         if(i%2 == 0)
         {
            animation[i].setAttribute('data-aos', 'fade-right');
         }
         else
         {
            animation[i].setAttribute('data-aos', 'fade-left');
         }
        
        
      }
   }
}


// footer
let annee = document.getElementById('annee');
let anneeEncours = (new Date()).getFullYear();
annee.innerHTML = anneeEncours;


function download(fileUrl, fileName) {
   var a = document.createElement("a");
   a.href = fileUrl;
   a.setAttribute("download", fileName);
   a.click();
 }
 
