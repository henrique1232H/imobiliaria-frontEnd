import { useEffect, useState } from "react";

import { Container, DownloadButton, Main, Title, UserInteressed, JobContainer } from "./style";

import responsiveCarousel from "../../components/responsiveCarousel";
import "react-multi-carousel/lib/styles.css";

import { GiConfirmed } from "react-icons/gi";
import { MdOutlineHideImage, MdOutlineRemoveCircleOutline } from "react-icons/md";

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
import { IoMdArrowBack, IoMdTime } from "react-icons/io";
import TypeOfJob from "../../components/TypeOfJob";

import { ImPriceTag } from "react-icons/im";
import { CiRuler, CiUser } from "react-icons/ci";
import { FaCalendar, FaRegTrashAlt } from "react-icons/fa";
import { FaHouse, FaLocationDot } from "react-icons/fa6";
import { TiPencil } from "react-icons/ti";
import IconSvg from "../../components/iconSvg";


export default function Job() {
  const { user } = useAuth();
  const { job_id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({});

  const [videos, setVideos] = useState([]);
  const [isActive, setIsActive] = useState("");

  const [tags, setTags] = useState([]);

  const [userJob, setUserJob] = useState({});

  const [images, setImages] = useState([]);

  const [header, setHeader] = useState("");

  const [peopleInteressed, setPeopleInteressed] = useState([]);

  const [isCandidate, setIsCandidate] = useState(false);
  const [permitCustomer, setPermitCustomer] = useState(false);

  useEffect(() => {
    async function handleJob() {
      const response = await api.get(`/jobs/${job_id}`, {
        withCredentials: true,
      });

      setData(response.data[0]);
      setIsActive(response.data[0].situation);
      setUserJob(response.data[1]);
      setTags(response.data[2]);
    }

    async function handleImage() {
      const response = await api.get(`/file/${job_id}`, {
        withCredentials: true,
      });

      setHeader(response.data[0].images[0].file);

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
        console.log(err);
      }
    }

    async function checkIfUserIsAlreadyCandidate() {
      try {
        const response = await api.get(`/user/candidate/${job_id}`, {
          withCredentials: true,
        });
        setIsCandidate(response.data);
      } catch (err) {
        console.log(err.data);
      }
    }

    async function checkIfCustomerSelectByJob() {
      try {
        const response = await api.get(`/user/select/${job_id}`, {
          withCredentials: true,
        });
        setPermitCustomer(response.data);
      } catch (err) {
        console.log(err.data);
      }
    }

    checkIfCustomerSelectByJob();
    checkIfUserIsAlreadyCandidate();
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

    navigate(-1);
  };

  const handleRemoveUserInteressed = async (removeUser) => {
    setPeopleInteressed(
      peopleInteressed.filter((entries) => entries.name == removeUser.name)
    );
    // try {
    //     await api.delete(`/jobsInteressed/${removeUser.id}`, {withCredentials: true});
    // } catch (err) {
    //     alert(err)
    // }
  };

  const handleAddCustomerToJob = async (userSelected) => {
    await api.post(
      `/jobsInteressed/select/${job_id}`,
      { user_id: userSelected.user_id },
      { withCredentials: true }
    );

    navigate(-1);
  };

  const handleDoneJob = async () => {
    await api.post(`/jobs/done/${job_id}`, { withCredentials: true });
    navigate(-1);
  };



  return (
    <Container>
      <Header />
      <Main>
        <SpacingBox>
            <div className="options">

              <div className="back" onClick={() => navigate(-1)}>
                <IoMdArrowBack fontSize={20} />
                
                <p>Voltar para a lista de trabalhos</p>
              </div>

              {
                user.role.includes(USER_ROLE.ADMIN) && (
                  <div className="buttonsOptions">

                    <button>
                      <TiPencil fontSize={12}/>
                      Editar Job
                    </button>
                    <button>
                      <FaRegTrashAlt fontSize={12}/>
                      Excluir Job
                    </button>
                  </div>
                )
              }
            </div>
          <JobContainer>

            <section className="banner">
              {images.length > 0 ? (

                <div className="teste">
                  <div>
                    <TypeOfJob props={data.job}/>
                    <IsActive active={isActive} />
                  </div>

                  <figure>
                    <img
                      src={`${api.defaults.baseURL}${header}`}
                      alt="Banner para mostrar a imagem principal da pagina"
                    />

                    <figcaption>Banner</figcaption>
                  </figure>
                </div>
              )
              :
              (
                <div className="no-photo">
                  <MdOutlineHideImage fontSize={20} style={{marginBottom: "1rem"}}/>
                  <span>Aguardando fotos do fotógrafo</span>     
                </div>
              )
            
            
            }
            </section>

            <section>
              <div>
                <div>

                  <div className="title">
                    <h1>{data.title}</h1>
                    <h2 style={{display: "flex", alignItems: "center"}}>
                      <FaLocationDot  fontSize={15} style={{margin: "0 1rem 0 0", color: "#ccc" }}/>

                      {data.street}, {data.district}, {data.city}</h2>
                  </div>

                  <div className="information">
                    <div>

                        <IconSvg icon={ImPriceTag}>
                            <span>
                              <h3>VALOR</h3>
                              <h4>{data.budget}</h4>
                            </span>
                        </IconSvg>
 
                        <IconSvg icon={FaCalendar}>
                          <span>
                            <h3>DATA DE ENTRADA</h3>
                            <h4>asas</h4>
                          </span>
                        </IconSvg>                        
                        
                    </div>

                    <div>
                        <IconSvg icon={CiRuler}>

                          <span>
                            <h3>ÁREA</h3>
                            <h4>asasa</h4>
                          </span>
                        </IconSvg>

                        <IconSvg icon={FaHouse}>

                          <span>
                            <h3>TIPO DO IMÓVEL</h3>
                            <h4>{data.job}</h4>
                          </span>

                        </IconSvg>

                    </div>
                  </div>

                  <div className={"linha"}/>

                  <div className="information">
                    <IconSvg icon={IoMdTime} color={{background: "#7DFF54", svg: "#8ffd6d"}}>
                      <span>
                        <h3 style={{color: "#7DFF54"}}>HORÁRIO PERMITIDO</h3>
                        <h4>asa </h4>
                      </span>
                    </IconSvg>

                     <IconSvg icon={IoMdTime} color={{background: "#FF5454", svg: "#f81f1f"}}>
                      <span>
                        <h3 style={{color: "#FF5454"}}>HORÁRIO NÃO PERMITIDO</h3>
                        <h4>asa </h4>
                      </span>
                    </IconSvg>

                  </div>


                  <div className={"linha"}/>

                  <div className={"contact"}>
                    <h3>Contato do proprietário</h3>
                    
                    <div>
                      <IconSvg icon={CiUser}>
                        <span>
                          <h3>{console.log(data)} {data.ownerName}</h3>
                          <h4>{data.ownerNumber}</h4>
                        </span>
                      </IconSvg>


                      <button>as</button>
                    </div>

                  </div>

                  <div className={"linha"}/>

                  <div>
                    <h3>Candidatura à vaga</h3>
                  </div>


                  <div>
                    {data.situation === "is_active" &&
                
                        (user.role.includes(USER_ROLE.ADMIN) && (
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
                                          action={() =>
                                            handleAddCustomerToJob(entries)
                                          }
                                          optionOne="Vou escolher outro"
                                          optionTwo="Vou escolher esse"
                                        />

                                        <Dialog
                                          props={{
                                            color: "#e83333",
                                            colorButton: "#e83333",
                                            fontSize: 20,
                                          }}
                                          title={`Remover ${entries.user_name}?`}
                                          icon={MdOutlineRemoveCircleOutline}
                                          description="Não tem como reverter sua escolha"
                                          action={() =>
                                            handleRemoveUserInteressed(entries)
                                          }
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
                        ))}
                  </div>
                </div>

                <div>
                  {user.role.includes(USER_ROLE.CUSTOMER) &&
                    (isCandidate ? (
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
                    ) : permitCustomer ? (
                      <Link to={`/edit/${job_id}`}>Enviar trabalho</Link>
                    ) : (
                      <button disabled>
                        {data.situation === "waiting_customer"
                          ? "Espere a imobiliaria aceitar"
                          : "Você já se candidatou a esse trabalho"}
                      </button>
                    ))}

                  {data.situation === "waiting_customer" &&
                    user.role.includes(USER_ROLE.ADMIN) && (
                      <div>
                        <Dialog
                          props={{ color: "#14fd1b", colorButton: "#14fd1b" }}
                          title={"Aceitar o trabalho?"}
                          text={"Aceitar o trabalho"}
                          description={
                            "Após ver as fotos, você pode aceitar as fotos e o trabalho será concluido."
                          }
                          isActive
                          action={handleDoneJob}
                          optionOne={"Excluir as fotos"}
                          optionTwo={"Aceitar as fotos"}
                        />
                      </div>
                    )}

                  {userJob.id === user.id && data.situation !== "is_closed" ? (
                    <Link to={`/edit/${job_id}`}>Editar trabalho</Link>
                  ) : (
                    <a href="#">Compartilhar</a>
                  )}
                </div>
              </div>

              <p> {data.description} </p>
            </section>

            <section>
            
            </section>

            <section>
              <h2>Informações sobre o trabalho:</h2>

              <Accordion props={data} />
            </section>

            {images.length > 0 && (
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
                  {images.map((entries, key) => {
                    return (
                      <CarouselCard
                        key={key}
                        img={entries.file}
                        name={entries.name}
                      />
                    );
                  })}

                  {videos.map((entries, key) => {
                    return (
                      <CarouselCard
                        key={key}
                        hasVideos
                        videos={entries.file}
                        name={entries.name}
                      />
                    );
                  })}
                </Carousel>
              </section>
            )}

            {images.length > 0 && (
              <section>
                <a href={`${api.defaults.baseURL}/file/download/${job_id}`}>
                  <DownloadButton>Download dos Arquivos</DownloadButton>
                </a>
              </section>
            )}
          </JobContainer>
        </SpacingBox>
      </Main>

      <Footer />
    </Container>
  );
}
