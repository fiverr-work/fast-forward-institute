import React, {useState} from 'react'
import styled from "styled-components";

const Thumbnails = ({data}) => {
    const [current, setCurrent] = useState(data[0])

    return (
        <ThumbnailStyle>
            <div className="active">
                <img src={current} alt="Active Thumbanil" />
            </div>
            <div className="thumbnails">
                {data.map((item, i) => (
                    <div key={i}>
                        <img onClick={()=>setCurrent(item)} src={item} alt={"Thumbanil" + i} />
                    </div>
                ))}
            </div>
        </ThumbnailStyle>
    )
}

export default Thumbnails

const ThumbnailStyle = styled.div`
    width: 560px;
    @media (max-width: 992px) {
        width: 100%;
    }
    .active{
        border-radius: 15px;
        overflow: hidden;
        height: 560px;
        margin-bottom: 22px;
        @media (max-width: 992px) {
            height: auto;
        }
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .thumbnails{
        display: flex;
        align-items: center;
        overflow: auto;
        padding: 5px;

        >div{
            width: 125px;
            min-width: 125px;
            height: 125px;
            border-radius: 15px;
            overflow: hidden;
            transition: box-shadow 200ms ease-in;
            cursor: pointer;
            
            :not(:last-child){
                margin-right: 20px;
            }
            :hover{
                box-shadow: 0 0 0 3px #00c896;
                transition: box-shadow 200ms ease-out;
            }
            :focus, :active{
                box-shadow: 0 0 0 5px #00c896;
                transition: box-shadow 200ms ease-out;
            }
            @media (max-width: 576px) {
                width: 100px;
                min-width: 100px;
                height: 100px;
            }
        }
    }
`;
