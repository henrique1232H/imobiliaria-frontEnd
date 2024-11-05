/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import ReactPlayer from "react-player";
import { api } from "../../service/api";
import { Container, Player } from "./style";
import { CiCircleRemove } from "react-icons/ci";



export default function CarouselCard({img, remove, hasVideos, videos, name,URLVideo, URLImage,edit = false}) {

    return (
        <Container>

            <figure>

                {
                    !hasVideos 
                    ? 
                    <img src={!URLImage ? `${api.defaults.baseURL}${img}` : img} alt={name} />
                    :

                    <Player>
                        <ReactPlayer
                           url={!URLVideo ? `${api.defaults.baseURL}${videos}` : videos}
                           controls
                           width={`100%`}
                           height={150}
                            
                        
                        />
                    </Player>
                }

                <figCaption>
                    {
                        name
                    }
                </figCaption>

                {
                    edit && <button onClick={remove}> <CiCircleRemove /> </button>
                }
                
            </figure>

        </Container>
    )
}