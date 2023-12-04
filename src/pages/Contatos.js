function Contatos() {
    return (
        <div className="" style={{backgroundColor: "#EEEEEE"}}>
            <div className="container-fluid   p-5">
                <div className="row d-flex justify-content-center mt-3">
                    <div className="col-12 w-75" id="text-shadow">
                        <p className="display-1 text-center fw-bold" style={{ color: "rgb(77, 77, 77)", fontFamily: 'Roboto Condensed, sans-serif' }}>
                            Me envie uma mensagem
                        </p>
                        <p className="text-center fs-4 fw-bold" style={{ color: "rgb(77, 77, 77)", fontFamily: 'Roboto Condensed, sans-serif' }}>
                            Preencha o formulário abaixo e entraremos em contato
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-center mt-3">
                    <form className="col-12 w-75 d-flex text-md-center flex-wrap" action="">
                        <div className="col-12  d-flex flex-column p-0 m-0">
                            <input className="p-2 border-0 border-bottom  p-0 m-0 " id="name" name="name" type="text" placeholder="Digite seu nome" />
                        </div>
                    </form>
                </div>
                <div className="row d-flex justify-content-center ">
                    <div className="col-12  w-75 d-flex">
                        <div className="col-6 ">
                            <input className="p-2 border-0 border-bottom border-end w-100 p-0 m-0 " id="email" name="email" type="email" placeholder="Email" />
                        </div>
                        <div className="col-6">
                            <input className="p-2 border-0 border-bottom w-100  p-0 m-0 " id="telefone" name="telefone" type="tel" placeholder="Telefone" />
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-3">
                    <div className="col-12 w-75  d-flex justify-content-center text-md-center flex-wrap">
                        <textarea className="p-2 border w-100 rounded" name="mensagem" id="mensagem" cols="88" rows="5" placeholder="Digite sua mensagem"></textarea>
                        <button type="button" id="botao" className="mt-3 btn border w-75 btn-lg">ENVIAR →</button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <h1 className="display-5 fw-bold text-center" style={{ fontFamily: 'Roboto Condensed, sans-serif'}}>Localização e Atendimento</h1>

                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-12 border" style={{height: "50vh"}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2184.875564674493!2d-45.45753710561376!3d-22.93150891408034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1701713110270!5m2!1spt-BR!2sbr"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{width: "100%",height: "100%"}}></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contatos;