
//Function img loop


function rotar_imagen() {
    var tiempo = 170;//tiempo en milisegundos
    var arrImagenes = ["https://images.prismic.io/red-square-site/fdc93bb6-72be-46e1-9a39-a7098faabb64_snickers-thumb.jpg", "https://images.prismic.io/red-square-site/cb3e7330e12dd68d995b4e1fe2735a00949853c1_red-work-thumbs.jpg?auto=compress,format", "https://images.prismic.io/red-square-site/bc411035-c8b0-4ad8-8d57-345b2c74a672_red-case-kovitz-thumbnail.jpg?auto=compress,format", "https://images.prismic.io/red-square-site/f4eb0f86-3bbd-47b9-a105-371ad8f7fd70_UA-Thumbnail.jpg?auto=compress,format", "https://images.prismic.io/red-square-site/5d5746b1-b8a6-4b55-be71-50203021c521_RED_Website_IceBox_Cover.jpg?auto=compress,format", "https://images.prismic.io/red-square-site/3daacb44-40a6-4213-83c2-69c76683ba79_cne-thumb.jpg?auto=compress,format", "https://images.prismic.io/red-square-site/992de052-dc47-4a44-bc24-039288ede276_hibbett-thumb.jpg?auto=compress,format", "https://images.prismic.io/red-square-site/6a1afdaa20e7d4a42952a5594906d6d06542662b_bad-testing-thumb.jpg?auto=compress,format", "https://images.prismic.io/red-square-site/01789f8c-0b69-4ce8-905e-fc1e47d9fbbe_red-work-soco-thumbnail.jpg?auto=compress,format", "https://images.prismic.io/red-square-site/49e012f2-f7b2-418a-a7a5-3db5f4ae3d5c_RED_Website_WaffleStop_Hero.jpg?auto=compress,format", "https://images.prismic.io/red-square-site/57925d5b-543a-4132-9f4a-6032390986f5_reeses-thumbnail.jpg?auto=compress,format"];

    _img = document.getElementById('rotativo');
    console.log(arrImagenes)
    //cargar la 1er imagen
    _img.src = arrImagenes[0];
    var i = 1;
    setInterval(function () {
        _img.src = arrImagenes[i];
        i = (i == arrImagenes.length - 1) ? 0 : (i + 1);
    }, tiempo);
}







/*Text animation*/

function debounce(func, wait = 20, immediate = true) {
    var timeout
    return function () {
        var context = this, args = arguments
        var later = function () {
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        var callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}

const sliderImages = document.querySelectorAll('.slide-in')

//Corre esta funcion cada vez que alguien scrollea.
console.log(sliderImages)
function checkSlide(e) {

    //console.log(window.scrollY) nos dice cuanto scrolleamos para abajo contando desde la parte superior. 

    sliderImages.forEach(sliderImg => {

        //slideInAt = a mitad de camino de la imagen. 
        //Calculo para saber en que posicion tiene que aparecer la imagen Ej: 50%
        const sliderInAt = (window.scrollY + window.innerHeight) - sliderImg.clientHeight / 2
        // Nivel de pixeles, contados desde la parte inferior de nuestra ventana hasta la mitad de las imagenes.

        //El bottom de la imagen. 
        //.offsetTop, nos dira cuantos pixeles hay entre el topMax de la imagen, hasta el principio de la pagina.  

        //Pero como queremos saberlo desde el bottom de la imagen hacemos:
        const imageBottom = sliderImg.offsetTop + sliderImg.clientHeight


        //Si la mitad de la imagen se muestra
        const isHalfShown = sliderInAt > sliderImg.offsetTop
        //Si no nos pasamos mas alla de la imagen.
        const isNotScrolledPast = window.scrollY < imageBottom

        if (isHalfShown && isNotScrolledPast) {
            sliderImg.classList.add('active')
        } else {
            sliderImg.classList.remove('active')
        }




    });

}

window.addEventListener('scroll', debounce(checkSlide))  