const user =JSON.parse(sessionStorage.getItem("user"))
const usernameElement =document.querySelector('.user-name')
const alertsIndication =document.querySelectorAll('.user-icons .icon-item')
const signOutbtn =document.querySelector('button#sign-out')
const resultMessageBloc =document.querySelector('.user-result-test')
const resultMessage =document.querySelector('.user-result-test p')
hanglingColor(user.testResult)
HandlingMessage(user.testResult)
/*=================*/
/*Pour la gestion message et bloc de texte sur la page resultat en fonction des resultats des test*/
/*=================*/
function HandlingMessage(percentage){
    usernameElement.textContent = user.fullName
    if ( percentage < 40) {
        resultMessage.textContent = "Vous n'êtes pas atteint de la Covid-19"
    } else if(percentage >=40 && percentage <=60){
        resultMessage.textContent = "Vous êtes succeptible d'avoir la Covid-19.Merci d'aller consuter un medecin"
    }else{
        resultMessage.textContent = "Vous êtes atteint de la Covid-19."
    }
}
/*=================*/
/*Pour la gestion des couleurs de la page resultat en fonction des resultas des test*/
/*=================*/
function hanglingColor(percentage){
    if ( percentage< 40) {
        //test negatif
        alertsIndication[0].style.backgroundColor = "red"
        alertsIndication[1].style.backgroundColor = "#7cfc007d"
        
        resultMessageBloc.style.backgroundColor = "rgb(247, 136, 136)"
        
    } else if(percentage >=40 && percentage <=60){
        //test successible positif
        alertsIndication[0].style.backgroundColor = "red"
        alertsIndication[1].style.backgroundColor = "lawngreen"
        
        resultMessageBloc.style.background = "linear-gradient(to right, lawngreen,red)"
        
    }else{
        //test positif
        alertsIndication[0].style.backgroundColor = "rgb(247, 136, 136)"
        alertsIndication[1].style.backgroundColor = "lawngreen"
        
    }
}
// 'essoufflement ou la difficulté à respirer, la fatigue, les douleurs musculaires ou courbatures, les maux de tête, la perte du goût ou de l'odorat, les maux de gorge,
/*=================*/
/*Deconnexion*/
/*=================*/
signOutbtn.addEventListener('click', function(){
    sessionStorage.clear()
    window.location.href = "./connexion.html"
})