let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)
  
    const link = document.createElement('a')
    link.href = imageURL
    link.download = 'cv_omardiaye'
    document.body.appendChild("https://drive.google.com/file/d/1BIX6S_QfVb0o3EwYLjdeyvbp-YKvuxDc/view?usp=sharing")
    link.click("https://drive.google.com/file/d/1BIX6S_QfVb0o3EwYLjdeyvbp-YKvuxDc/view?usp=sharing")
    document.body.removeChild("https://drive.google.com/file/d/1BIX6S_QfVb0o3EwYLjdeyvbp-YKvuxDc/view?usp=sharing")
  }

  function validateEmail(){
                
    // Get our input reference.
    var emailField = document.getElementById('user-email');
    
    // Define our regular expression.
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    // Using test we can check if the text match the pattern
    if( validEmail.test(emailField.value) ){
        alert('Email is valid, continue with form submission');
        return true;
    }else{
        alert('Email is invalid, skip form submission');
        return false;
    }
} 

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío por defecto del formulario

    // Realizar alguna acción con los datos del formulario
    // Por ejemplo, aquí podrías enviar los datos a un servidor o realizar validaciones

    // Redirigir a la página de agradecimiento
    window.location.href = 'gracias.html';
});