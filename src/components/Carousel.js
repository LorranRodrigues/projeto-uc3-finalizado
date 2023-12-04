import Slide1 from "../images/slide1.jpg"
import Slide2 from "../images/slide2.jpg"
import Slide3 from "../images/slide3.png"
import { Carousel } from 'react-bootstrap';
import '../App.css';
import Brasil from '../images/brazil.png'
import Franca from '../images/france.png'
import ReinoUnido from '../images/united-kingdom.png'


function CarouselDestino() {
    return (
        <div className="">
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Slide3}
                        alt="Primeiro slide"
                        height={650}
                        style={{ filter: "brightness(70%)" }}
                    />
                    
                    <Carousel.Caption className="custom-caption text-start">
                        <h3 className="display-1 fw-bold" style={{ textShadow: "1px 1px 1px  rgba(0, 0, 0, 0.568)" }}>Veja o <span className="" style={{ color: "#FFDC2C" }}>mundo</span> <br /> com outros olhos</h3>
                    </Carousel.Caption>
                    <Carousel.Caption className=" justify-content-end d-flex">
                        <h3 className="display-1 fw-bold p-1" style={{ textShadow: "1px 1px 1px  rgba(0, 0, 0, 0.568)" }}>Rio de janeiro</h3>
                        <img src={Brasil} alt="" width={128} />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Slide2}
                        alt="Segundo slide"
                        height={650}
                        style={{ filter: "brightness(70%)" }}


                    />
                    <Carousel.Caption className="custom-caption text-end">
                        <h3 className="display-1 fw-bold" style={{ textShadow: "1px 1px 1px  rgba(0, 0, 0, 0.568)" }}>Descubra por que <br /> somos os<span className="" style={{ color: "#FFDC2C" }}> maiores</span></h3>
                        <button type="button" class="btn btn-outline-warning w-50 fw-bold">Descubra</button>

                    </Carousel.Caption>
                    <Carousel.Caption className=" d-flex justify-content-start">
                        <img src={Franca} alt="" width={128} />
                    <h3 className="display-1 fw-bold p-1" style={{ textShadow: "1px 1px 1px  rgba(0, 0, 0, 0.568)" }}>França</h3>
                    </Carousel.Caption>
                 
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Slide1}
                        alt="Terceiro slide"
                        height={650}
                        style={{ filter: "brightness(70%)" }}


                    />
                   <Carousel.Caption className="custom-caption text-start">
                        <h3 className="display-1 fw-bold" style={{ textShadow: "1px 1px 1px  rgba(0, 0, 0, 0.568)" }}><span className="" style={{ color: "#FFDC2C" }}>Venha</span> conhecer <br /> nossos destinos</h3>
                        <button type="button" class="btn btn-outline-warning w-25 fw-bold">Pacotes</button>

                    </Carousel.Caption>
                    <Carousel.Caption className=" d-flex justify-content-end">
                    <h3 className="display-1 fw-bold p-1" style={{ textShadow: "1px 1px 1px  rgba(0, 0, 0, 0.568)" }}>Reino Unido</h3>
                        <img src={ReinoUnido} alt="" width={128} />
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default CarouselDestino;