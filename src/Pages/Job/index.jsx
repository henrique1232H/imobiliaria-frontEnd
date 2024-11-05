import { useEffect, useState } from "react";

import { Container, Main } from "./style";

import responsiveCarousel from "../../components/responsiveCarousel";
import 'react-multi-carousel/lib/styles.css';

import Tags from "../../components/Tags";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import GoBack from "../../components/Back";
import CarouselCard from "../../components/carouselCard";
import SpacingBox from "../../components/SpacingBox";


import { api } from "../../service/api";
import { Link, useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { useAuth } from "../../hooks/auth";

export default function Job() {

    const {user} = useAuth();
    const {job_id} = useParams();

    const [title, setTitle] = useState();
    const [description, setDescription] = useState("");
    
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [state, setState] = useState("");
    const [street, setStreet] =  useState("");
    const [videos, setVideos] = useState([]);

    const [tags, setData] = useState([])

    const [userJob, setUserJob] = useState({});
    
    const [images, setImages] = useState([]);

        
    useEffect(() => {
        console.log(job_id)

    
        async function handleJob() {
            const response = await api.get(`/jobs/${job_id}`, {withCredentials: true})

            setTitle(response.data[0].title);
            setDescription(response.data[0].description);

            setDistrict(response.data[0].district);
            setCity(response.data[0].city);
            setStreet(response.data[0].street);
            setState(response.data[0].state);

            setUserJob(response.data[1]);

            setData(response.data[2]);
            
        }

        async function handleImage() {
            const response = await api.get(`/file/${job_id}`, {withCredentials: true});

            setVideos(response.data[0].videos)
            setImages(response.data[0].images)

        }

        handleJob()
        handleImage()
    }, [])

    const header = images[0];

    return (
        <Container>
            <Header />
            <Main>
                <SpacingBox>
                    <div>

                        <section>
                            <GoBack />
                        </section>

                        <section>
                            <figure>
                                <img src={`${api.defaults.baseURL}${header}`} alt="Banner para mostrar a imagem principal da pagina" />

                                <figcaption>Banner</figcaption>
                                    
                            </figure>
                        </section>

                        <section>
                            <div>
                                <h1>{title}</h1>

                                <div>
                                    <h4>Criado por:
                                        <span>
                                             <img src="http://github.com/henrique1232H.png" />
                                             {userJob.name}
                                        </span> 
                                    
                                    </h4>
                                </div>


                                <p> {description} </p>
                            </div>

                            <div>
                                {
                                    userJob.id === user.id ? 
                                     <Link to={`/edit/${job_id}`}> 
                                        Editar trabalho
                                    </Link>
                                     :
                                    <a href="#">Compartilhar</a>
                                }
                                
                            </div>
                        </section>

                        <section>
                            <h2>Tags:</h2>

                            <div>
                                {
                                    tags.map((entries) =>{
                                        return <Tags key={entries.id} title={entries.name} />
                                    })
                                }
                            </div>

                        </section>

                        <section>
                            <h2>Localização do lugar:</h2>


                            <ul>
                                <li><p> {city} </p></li>
                                <li><p> {state} </p></li>
                                <li><p> {street} </p></li>
                                <li><p> {district} </p></li>
                            </ul>
                        </section>


                        <section>

                            <h2>Imagens:</h2>

                            <Carousel
                                additionalTransfrom={0}
                                arrows
                                autoPlaySpeed={3000}
                                centerMode={false}
                                className="carousel"
                                containerClass="container"
                                dotListClass=""
                                draggable
                                focusOnSelect={false}
                                infinite={false}
                                itemClass=""
                                keyBoardControl
                                minimumTouchDrag={80}
                                pauseOnHover
                                renderArrowsWhenDisabled={false}
                                renderButtonGroupOutside={false}
                                renderDotsOutside={false}
                                responsive={responsiveCarousel}
                                rewind={false}
                                rewindWithAnimation={false}
                                rtl={false}
                                shouldResetAutoplay
                                showDots={false}
                                sliderClass=""
                                slidesToSlide={1}
                                swipeable
                            >

                                {
                                    images.map((entries, key) => {
                                        return <CarouselCard key={key} img={entries} />
                                    })
                                }

                                {
           

                                        videos.map((entries, key) => {
                                        return <CarouselCard  key={key} hasVideos videos={entries}/>
                                    })

                                }


                            </Carousel>

                        </section>

                    </div>
                </SpacingBox>


            </Main>
            

            <Footer />
        </Container>
    )
}