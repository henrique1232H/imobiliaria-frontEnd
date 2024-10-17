import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { api } from "../../service/api";
import { Container, Images, Main } from "./style";
import GoBack from "../../components/Back";
import SpacingBox from "../../components/SpacingBox";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import responsiveCarousel from "../../components/responsiveCarousel";
import 'react-multi-carousel/lib/styles.css';
import CarouselCard from "../../components/carouselCard";

export default function Job() {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState("");
    
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [state, setState] = useState("")
    const [street, setStreet] =  useState("")

    const [owned, setOwned] = useState(true)

    const [images, setImages] = useState([]);

        
    useEffect(() => {
        const query = window.location.pathname;

    
        async function handleJob() {

            const response = await api.get(`/jobs${query}`, {withCredentials: true})


            setTitle(response.data.title);
            setDescription(response.data.description);

            setDistrict(response.data.district);
            setCity(response.data.city);
            setStreet(response.data.street);
            setState(response.data.state);
            
        }

        async function handleImage() {
            const response = await api.get(`/file${query}`, {withCredentials: true});
            setImages(response.data)
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
                                    <h4>Criado por</h4>
                                    <img src="" alt="" />
                                    <h4> {} </h4>
                                </div>

                                <h2>Criado por {}</h2>

                                <p> {description} </p>
                            </div>

                            <div>
                                {
                                    !owned ? <a href="#">Compartilhar</a> :
                                    <Link to="/edit"> 
                                        Editar trabalho
                                    </Link>
                                }
                                
                            </div>
                        </section>

                        <section>
                            <h2>Tags:</h2>

                        </section>

                        <section>
                            <h2>Localização do lugar:</h2>

                            <p> {city} </p>
                            <p> {state} </p>
                            <p> {street} </p>

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

                            </Carousel>



                            <Images>
                                {
                                    images.map((entries, key) => {
                                        return <img key={key} src={`${api.defaults.baseURL}${entries}`}/>
                                    })
                                }

                            </Images>
                        </section>

                    </div>
                </SpacingBox>


            </Main>

        </Container>
    )
}