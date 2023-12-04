import Carousel from "../components/Carousel";
import '../App.css'
import DestinoCard from "../components/DestinoCard";
import Slide1 from "../images/slide1.jpg"
import Slide2 from "../images/slide2.jpg"
import Slide3 from "../images/slide3.png"
import Slide4 from "../images/slide4.jpg"
import AlojamentoCard from "../components/AlojamentoCard";
import { IoIosAirplane } from "react-icons/io";
import { FaBuilding } from "react-icons/fa";
import Alojamento1 from '../images/alojamento1.jpg'
import Alojamento2 from '../images/alojamento2.jpg'
import Alojamento3 from '../images/alojamento3.jpg'
import Carro from '../images/carro.jpg'
import Aviao from '../images/aviao.jpg'
import Trem from '../images/trem.jpg'

function Destinos() {
    return (
        <div>
            <div className="row p-0 m-0">
                <div className="col-32 p-0 m-0">
                    <Carousel />
                </div>
            </div>
            <div className="row p-0 m-0 mt-3">
                <div className="col-12 p-0 m-0">
                    <h1 className="display-4 fw-bold text-center" style={{ color: "#4D4D4D", }}> Nossos destinos </h1>
                </div>
            </div>
            <div className="row p-0 m-0 mt-3">
                <div className="col-12 d-md-flex  justify-content-center">
                    <div className="col-md-3 col-12 mt-md-0 mt-3  d-flex justify-content-center">
                        <DestinoCard titulo="Brasil - Rio de Janeiro" descricao="Descubra a magia do Rio de Janeiro em uma jornada única. Explore praias deslumbrantes, marcos icônicos como o Cristo Redentor e experimente a vibrante cultura carioca." img={Slide3} />
                    </div>
                    <div className="col-md-3 col-12  mt-md-0 mt-3 d-flex justify-content-center">
                        <DestinoCard titulo="França - Paris" descricao="Encante-se com a beleza atemporal de Paris, França. Explore a majestosa Torre Eiffel, descubra encantadoras ruas e mergulhe na cultura sofisticada da Cidade Luz. Uma viagem única aguarda você! " img={Slide2} />
                    </div>
                    <div className="col-md-3 col-12  mt-md-0 mt-3 d-flex justify-content-center">
                        <DestinoCard titulo="Reino Unido - Brigton" descricao="Explore a charmosa Brighton, no Reino Unido. Desfrute de praias incríveis, arquitetura única e uma cena cultural vibrante. Uma experiência britânica inesquecível aguarda por você" img={Slide1} />
                    </div>
                    <div className="col-md-3 col-12  mt-md-0 mt-3 d-flex justify-content-center">
                        <DestinoCard titulo="Estados Unidos - Orlando" descricao="Explore a magia em Orlando, EUA! Deixe-se envolver pelo encanto dos parques da Disney, experiências únicas e aventuras emocionantes. Sua jornada dos sonhos começa aqui" img={Slide4} />
                    </div>
                </div>
            </div>

            <div className="row p-0 m-0 mt-5" id="alojamento">
                <div className="col-12 d-md-flex  p-4 justify-content-center">
                    <div className="col-md-6 col-12   d-flex align-items-center justify-content-center ">
                        <h1 className="display-4 fw-bold text-center" style={{ color: "#4D4D4D" }}>
                            Uma seleção de alojamentos <br />
                            para suas férias <FaBuilding />

                        </h1>
                    </div>
                    <div className="col-md-6 col-12  d-md-flex  justify-content-center gap-5">
                        <div className="col-md-2 mt-md-0 mt-3 col-12 d-flex justify-content-center">
                            <AlojamentoCard titulo="Brasil - Apartamento" img={Alojamento1} largura="" />
                        </div>
                        <div className="col-md-2 col-12  mt-md-0 mt-3   d-flex justify-content-center">
                            <AlojamentoCard titulo="Londres - Apartamento" img={Alojamento2} />

                        </div>
                        <div className="col-md-2 col-12  mt-md-0 mt-3   d-flex justify-content-center">
                            <AlojamentoCard titulo="Estados Unidos - Apartamento" img={Alojamento3} />

                        </div>
                    </div>
                </div>
            </div>
            <div className="row p-0 m-0 mt-5">
                <div className="col-12  d-flex flex-column flex-md-row flex-column-reverse   p-4 justify-content-center">
                    <div className="col-md-6 col-12 mt-3  d-md-flex justify-content-center gap-5">
                        <div className="col-md-2 col-12 mt-3 d-flex justify-content-center">
                            <AlojamentoCard titulo="Carro" img={Carro} largura="" />
                        </div>
                        <div className="col-md-2 col-12 mt-3  d-flex justify-content-center">
                            <AlojamentoCard titulo="Avião" img={Aviao} />
                        </div>
                        <div className="col-md-2 col-12 mt-3 d-flex justify-content-center">
                            <AlojamentoCard titulo="Trem" img={Trem} />
                        </div>
                    </div>
                    <div className="col-md-6 col-12    d-flex align-items-center justify-content-center ">
                        <h1 className="display-4 fw-bold text-center" style={{ color: "#4D4D4D" }}>
                            Transporte de maneira <br /> rápida e facil <IoIosAirplane />
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Destinos;