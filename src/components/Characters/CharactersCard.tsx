import { useNavigate } from "react-router-dom"

export const CharactersCard = ({ data }: any) => {

    let navigate = useNavigate();

    return (
        <>
            {
                (data) ? 
                    data.map((item: any) => {
                        item.name = item.name.toUpperCase();
                        return (
                            <div className="card" key={item.id} onClick={() => navigate(`/${item.id}`)}>
                                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={`${item.name} face"`} />
                                <div className="title">
                                    <h3>{item.name}</h3>
                                </div>
                            </div>
                        )
                    }) : ""
            }
        </>
    )
}
