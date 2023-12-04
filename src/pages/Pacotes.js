import Background2 from "../images/background2.jpg";
import '../App.css';
import { IoAirplaneOutline } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";
import { TbCar } from "react-icons/tb";
import { RiMapPinFill } from "react-icons/ri";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdLoop } from "react-icons/md";
import PacotesSQL from "../components/PacotesSQL";
import PacotesSQL2 from "../components/PacoteSQL+1000";
function Pacotes() {
    return (
        <div>
            <div classname="container-fluid">
                <div className="row  p-0 m-0" id="bg-pacotes">
                    <div className="col-12 text-white p-0 m-0 d-flex justify-content-center ">
                        <div className="col-md-6 col-12 m-auto">
                            <div className="d-md-flex gap-3 d-none p-0 m-0 align-items-center border border-start-0 border-top-0 border-end-0 p-2">
                                <p className="fs-4 fw-bold m-0">Pacotes de viagens</p>
                                <p className="text-black fw-bold p-1 px-3 m-0" style={{ backgroundColor: "yellow", borderRadius: "20px" }}><IoAirplaneOutline />
                                    Voo + <FaRegBuilding />
                                    Hospedagem</p>
                                <p className="text-white fw-bold p-1 px-3 m-0" style={{ border: "1px solid yellow", borderRadius: "20px" }}><IoAirplaneOutline />
                                    Voo + <FaRegBuilding />
                                    2 Hospedagem</p>
                                <p className="text-white fw-bold p-1 px-3 m-0" style={{ border: "1px solid yellow", borderRadius: "20px" }}><IoAirplaneOutline />
                                    Voo + <TbCar />
                                    Carro</p>
                            </div>
                            <div className="col-12 d-md-flex  p-2 gap-2">
                                <div className="col-md-6 col-12  d-flex p-2 bg-white" style={{ borderRadius: "20px" }}>
                                    <div className="col-6 border border-start-0 border-top-0 border-bottom-0">
                                        <div className="px-2">
                                            <p className="m-0  fw-bold" style={{ color: "rgba(0, 0, 0, 0.74)" }}><RiMapPinFill />
                                                Origem</p>
                                        </div>
                                        <div className="px-2">
                                            <p className="m-0 " style={{ color: "rgba(0, 0, 0, 0.336)", textIndent: "8%" }}>Insira o local de origem</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="px-2">
                                            <p className="m-0  fw-bold" style={{ color: "rgba(0, 0, 0, 0.74)" }}><FaMapMarkedAlt />
                                                Destino</p>
                                        </div>
                                        <div className="px-2">
                                            <p className="m-0" style={{ color: "rgba(0, 0, 0, 0.336)", textIndent: "8%" }}>Insira uma cidade</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 border bg-white d-flex mt-2 mt-md-0 p-2" style={{ borderRadius: "20px" }}>
                                    <div className="col-6  border border-start-0 border-top-0 border-bottom-0">
                                        <div className="px-2">
                                            <p className="m-0  fw-bold" style={{ color: "rgba(0, 0, 0, 0.74)" }}><FaCalendarAlt />
                                                Datas</p>
                                        </div>
                                        <div className="px-2">
                                            <p className="m-0" style={{ color: "rgba(0, 0, 0, 0.336)", textIndent: "8%" }}>Ida</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="px-2">
                                            <p className="m-0  fw-bold" style={{ color: "rgba(0, 0, 0, 0.74)" }}><MdLoop />
                                                Retorno</p>
                                        </div>
                                        <div className="px-2">
                                            <p className="m-0" style={{ color: "rgba(0, 0, 0, 0.336)", textIndent: "8%" }}>Volta</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                    <h1 className="fs-1 fw-bold" style={{color: "rgba(0, 0, 0, 0.810)"}}>Pacotes de viagem até R$ 1000</h1>
                    <h2 className="fs-5"style={{color: "rgba(0, 0, 0, 0.603)"}}>Mega descontos por tempo limitado, parcele em até 12x s/juros</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <PacotesSQL/>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                    <h1 className="fs-1 fw-bold" style={{color: "rgba(0, 0, 0, 0.810)"}}>Pacotes de viagem acima de  R$ 1000</h1>
                    <h2 className="fs-5"style={{color: "rgba(0, 0, 0, 0.603)"}}>Mega descontos por tempo limitado, parcele em até 12x s/juros</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <PacotesSQL2/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pacotes;