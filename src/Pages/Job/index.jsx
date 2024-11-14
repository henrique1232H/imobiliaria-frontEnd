import { useEffect, useState } from "react";

import { Container, Main, Title, UserInteressed } from "./style";

import responsiveCarousel from "../../components/responsiveCarousel";
import "react-multi-carousel/lib/styles.css";

import { GiConfirmed } from "react-icons/gi";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

import Tags from "../../components/Tags";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import GoBack from "../../components/Back";
import CarouselCard from "../../components/carouselCard";
import SpacingBox from "../../components/SpacingBox";

import { api } from "../../service/api";
import { Link, useNavigate, useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import MenuInteressed from "../../components/MenuInteressed";
import Dialog from "../../components/AlertDialog";
import IconUser from "../../components/IconUser";
import IsActive from "../../components/isActive";
import Accordion from "../../components/Accordion";

export default function Job() {
  const { user } = useAuth();
  const { job_id } = useParams();
  const navigate = useNavigate()


  const [data, setData] = useState({})

  const [videos, setVideos] = useState([]);
  const [isActive, setIsActive] = useState("");

  const [tags, setTags] = useState([]);

  const [userJob, setUserJob] = useState({});

  const [images, setImages] = useState([]);

  const [peopleInteressed, setPeopleInteressed] = useState([]);

  const [isCandidate, setIsCandidate] = useState(false);

  useEffect(() => {
    async function handleJob() {
      const response = await api.get(`/jobs/${job_id}`, {
        withCredentials: true,
      });


      setData(response.data[0])
      setIsActive(response.data[0].situation);
      setUserJob(response.data[1]);
      setTags(response.data[2]);
    }

    async function handleImage() {
      const response = await api.get(`/file/${job_id}`, {
        withCredentials: true,
      });

      setVideos(response.data[0].videos);
      setImages(response.data[0].images);
    }

    async function handlePeopleInteressedInJob() {

      try {
        const response = await api.get(`/jobsInteressed/${job_id}`, {
          withCredentials: true,
        });


        setPeopleInteressed(response.data);
      } catch (err) {
        console.log(err)
      }
    }

    async function checkIfUserIsAlreadyCandidate() {

      try {
        const response = await api.get(`/user/candidate/${job_id}`, {withCredentials: true});
        console.log(response)
        setIsCandidate(response.data)

      } catch (err) {
          console.log(err.data)
      }
      
    }


    checkIfUserIsAlreadyCandidate()
    handleJob();
    handleImage();
    handlePeopleInteressedInJob();
  }, []);

  const handleAddInteressed = async () => {
    await api.post(
      `/jobsInteressed/${job_id}`,
      { user },
      { withCredentials: true }
    );

    navigate(-1)
  };

  const handleRemoveUserInteressed = async (removeUser) => {


    setPeopleInteressed(peopleInteressed.filter(entries => entries.name == removeUser.name))


    // try {
    //     await api.delete(`/jobsInteressed/${removeUser.id}`, {withCredentials: true});
    // } catch (err) {
    //     alert(err)
    // }

  }

  const handleAddCustomerToJob = async (userSelected) => {
    await api.post(`/jobsInteressed/select/${job_id}`, {user_id: userSelected.user_id}, {withCredentials: true})

    navigate(-1)
    
  }
  
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
                {images.length > 0 && (
                  <div>
                    <img
                      src={`${api.defaults.baseURL}${header}`}
                      alt="Banner para mostrar a imagem principal da pagina"
                    />

                    <figcaption>Banner</figcaption>
                  </div>
                )}
              </figure>
            </section>

            <section>

              <div>
                <div>
                  <Title>{data.title} <IsActive active={isActive} /> - R${data.budget} </Title>

                  <div>
                    <h4>
                      Criado por:
                      <span>
                        <IconUser src="http://github.com/henrique1232H.png" />
                        {userJob.name}
                      </span>
                    </h4>
                  </div>

                  <div>
                  {user.role.includes(USER_ROLE.ADMIN) && (
                    <MenuInteressed text="Ver fotográfos interessadas">
                      <div>
                        <h2> Fotografos interessados </h2>

                        {peopleInteressed.length > 0 ? (
                          peopleInteressed.map((entries, key) => {
                            return (
                              <UserInteressed key={key}>

                                  <div>
                                      <div>
                                          <IconUser />
                                      </div>
                                      <div>
                                          <h3> {entries.user_name} </h3>
                                          <h4>{entries.user_email}</h4>
                                      </div>
                                  </div>

                                  <div>
                                      <Dialog
                                          props={{
                                          color: "#4cafd7",
                                          colorButton: "#14fd1b",
                                          fontSize: 20,
                                          }}
                                          title={`Escolher ${entries.user_name}?`}
                                          icon={GiConfirmed}
                                          description="Apenas é permitido escolher 1(um) candidato por trabalho"
                                          action={() => handleAddCustomerToJob(entries)}
                                          optionOne="Vou escolher outro"
                                          optionTwo="Vou escolher esse"
                                      />

                                      <Dialog
                                          props={{
                                          color: "#e83333",
                                          colorButton: "#e83333",
                                          fontSize: 20
                                          }}
                                          title={`Remover ${entries.user_name}?`}
                                          icon={MdOutlineRemoveCircleOutline}
                                          description="Não tem como reverter sua escolha"
                                          action={() => handleRemoveUserInteressed(entries) }
                                          optionOne="Vou excluir outro"
                                          optionTwo="Vou excluir esse"
                                      />
                                  </div>
                              </UserInteressed>
                            );
                          })
                        ) : (
                          <div>
                            <h1>ninguém se candidatou ainda</h1>
                          </div>
                        )}
                      </div>
                    </MenuInteressed>
                  )}
                  </div>

                </div>

                <div>
                  {
                    user.role.includes(USER_ROLE.CUSTOMER) &&
                    ( 
                      isCandidate ?
                        <Dialog
                        props={{ color: "#4cafd7", colorButton: "#14fd1b" }}
                        title="Candidatar a vaga"
                        text={"Candidatar a vaga"}
                        isActive
                        description="Após se candidatar, vocẽ deve esperar que a ímobiliaria o escolha"
                        action={handleAddInteressed}
                        optionOne="Não quero mudar"
                        optionTwo="Quero me candidatar"
                      />
                      :
                      <button disabled>Você já se candidatou a esse trabalho</button>
                    )
                  }
            
                  {userJob.id === user.id ? (
                    <Link to={`/edit/${job_id}`}>Editar trabalho</Link>
                  ) : (
                    <a href="#">Compartilhar</a>
                  )}
                </div>
              </div>


              <p> {data.description} </p>
            </section>

            <section>
              <h2>Tags:</h2>

              {tags.length > 0 ? (
                <div>
                  {tags.map((entries) => {
                    return <Tags key={entries.id} title={entries.name} />;
                  })}
                </div>
              ) : (
                <div>
                  <h4>Não foi adicionado nenhuma tag</h4>

                </div>
              )}
            </section>

            <section>
                <h2>Informações sobre o trabalho:</h2>

                <Accordion  props={data}/>
            </section>

            {
              images.length > 0 && <section>
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
                {images.map((entries, key) => {
                  return <CarouselCard key={key} img={entries} />;
                })}

                {videos.map((entries, key) => {
                  return <CarouselCard key={key} hasVideos videos={entries} />;
                })}
              </Carousel>
            </section>
            }


            {
              images.length > 0 &&  <section>
              <button>Download dos arquivos</button>
            </section>
            }
           
          </div>
        </SpacingBox>
      </Main>

      <Footer />
    </Container>
  );
}
