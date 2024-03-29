import { useState } from "react";
import { Modal } from "@mui/material";

export const ComicsCard = ({ data }: any) => {

    const [indexClicked, setIndexClicked] = useState<number>(0);
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpen = async (index: number) => {
        setModalOpen(true);
        setIndexClicked(index);
    }

    return (
        <>
            {
                (data) ? 
                    data.map((item: any, index: number) => {
                        item.title = item.title.toUpperCase();
                        return (
                            <div className="card" key={item.id} onClick={() => handleOpen(index)}>
                                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={`${item.title} cover"`} />
                                <div className="title">
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                        )
                    }) : ""
            }

            <Modal
                className="modal-details"
                open={modalOpen}
                onClose={() => setModalOpen(false)}
            >
                <>
                    {
                        (data[indexClicked]) &&
                        <div className="modal-card" key={data[indexClicked]}>
                            <div className="modal-image">
                                <img src={`${data[indexClicked].thumbnail.path}.${data[indexClicked].thumbnail.extension}`} alt={`${data[indexClicked].name} face"`} />
                            </div>
                            <div className="modal-text">
                                <h3>{data[indexClicked].title}</h3>
                                <p>{data[indexClicked].description}</p>
                            </div>
                        </div>
                    }
                </>
            </Modal>
        </>
    )
}
