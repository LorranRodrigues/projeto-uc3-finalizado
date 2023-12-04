function DestinoCard({titulo,descricao,img,largura}) {
    return (
        <div>
            <div class="card" style={{width: "18rem"}}>
                <img src={img} class="card-img-top" alt="..." height={170} />
                <div class="card-body">
                    <h5 class="card-title">{titulo}</h5>
                    <p class="card-text">{descricao}</p>
                    <a href="#" class="btn btn-primary">Conhecer</a>
                </div>
            </div>
        </div>
    )
}
export default DestinoCard;