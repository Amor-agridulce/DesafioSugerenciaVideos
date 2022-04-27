const IIFEsetAttribute = (() => {
    function privada (url, id){
        id.setAttribute("src", url)
    }

    return{
        publica(url, id){
            privada(url, id)
        }
    }
})()

class Multimedia {
    constructor(url) {
        let _url = url;

        this.setUrl = (value) => (_url = value);
        this.getUrl = () => _url;
    }

    get url() {
        return this.getUrl();
    }

    set url(value) {
        this.setUrl(value);
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

class Reproductor extends Multimedia{
    constructor(url, id){
        super(url)
        this._id = id
    }

    playMultimedia(){
        IIFEsetAttribute.publica(this.getUrl(), this._id)
    }
    setInicio(tiempo){
        IIFEsetAttribute.publica(`${this.getUrl()}?start=${tiempo}`, this._id)
    }
}

const musica = document.getElementById("musica")
const peliculas = document.getElementById("peliculas")
const series = document.getElementById("series")

const videoUno = new Reproductor("https://www.youtube.com/embed/loOWKm8GW6A", musica)
videoUno.setInicio(20)

const videoDos = new Reproductor("https://www.youtube.com/embed/2OMixTIRQcY", peliculas)
videoDos.playMultimedia()

const videoTres = new Reproductor("https://www.youtube.com/embed/Tm7dFM_v57A", series)
videoTres.playMultimedia()