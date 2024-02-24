import { useNavigate } from "react-router-dom"

export const CreatorsCard = ({ data }: any) => {

    let navigate = useNavigate();

    return (
        <>
            {
                (data) ? 
                    data.map((item: any) => {
                        item.fullName = item.fullName.toUpperCase();
                        return (
                            <div className="card" key={item.id} onClick={() => navigate(`/${item.id}`)}>
                                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={`${item.fullName}"`} />
                                <div className="title">
                                    <h3>{item.fullName}</h3>
                                </div>
                            </div>
                        )
                    }) : ""
            }
        </>
    )
}
