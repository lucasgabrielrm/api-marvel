import { useNavigate } from "react-router-dom"

export const ComicsCard = ({ data }: any) => {

    let navigate = useNavigate();

    return (
        <>
            {
                (data) ? 
                    data.map((item: any) => {
                        return (
                            <div className="card" key={item.id} onClick={() => navigate(`/${item.id}`)}>
                                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={`${item.title} cover"`} />
                                <div className="title">
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                        )
                    }) : ""
            }
        </>
    )
}
