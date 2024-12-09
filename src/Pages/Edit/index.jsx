import { useEffect, useState } from "react";

import { Container, AddImages, Main, EditTags, UploadImages } from "./style";

import "react-multi-carousel/lib/styles.css";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import GoBack from "../../components/Back";
import CarouselCard from "../../components/carouselCard";
import SpacingBox from "../../components/SpacingBox";
import { FaPencil } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";

import { api } from "../../service/api";
import EditInput from "../../components/EditInputs";
import TagItem from "../../components/TagsItem";

import Dialog from "../../components/AlertDialog";
import { useNavigate, useParams } from "react-router-dom";
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";

export default function Edit() {

  const navigate = useNavigate();
  const {job_id} = useParams();
  
  const {user} = useAuth();

  const [title, setTitle] = useState();
  const [description, setDescription] = useState("");

  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [street, setStreet] = useState("");

  const [newTags, setNewTags] = useState("");
  const [tags, setTags] = useState([]);
  const [removeTags, setRemoveTags] = useState([]);

  const [images, setImages] = useState([]);

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newDistrict, setNewDistrict] = useState("");
  const [newState, setNewState] = useState("");
  const [newStreet, setNewStreet] = useState("");

  const [header, setHeader] = useState("");

  const [videos, setVideos] = useState([]);
  const [removeVideos, setRemoveVideos] = useState([]);

  const [newFiles, setNewsFiles] = useState([]);
  const [removeImages, setRemoveImages] = useState([]);

  const [newImages, setNewImages] = useState([]);
  const [newVideos, setNewVideos] = useState([]);

  const [URLVideo, setURLVideo] = useState([]);
  const [URLPhotos, setURLPhotos] = useState([]);


  const [isTitleActive, setIsTitleActive] = useState(false);
  const [isDescriptionActive, setIsDescriptionActive] = useState(false);
  const [isCityActive, setIsCityActive] = useState(false);
  const [isStateActive, setIsStateActive] = useState(false);
  const [isStreetActive, setIsStreetActive] = useState(false);
  const [isDistrictActive, setIsDistrictActive] = useState(false);

  useEffect(() => {

    async function handleJob() {
      const response = await api.get(`/jobs/${job_id}`, { withCredentials: true });

      setTitle(response.data[0].title);
      setDescription(response.data[0].description);

      setDistrict(response.data[0].district);
      setCity(response.data[0].city);
      setStreet(response.data[0].street);
      setState(response.data[0].state);

      setTags(response.data[2]);
    }

    async function handleImage() {
      const response = await api.get(`/file/${job_id}`, { withCredentials: true });


      setHeader(response.data[0].images[0].file)
      setVideos(response.data[0].videos);
      setImages(response.data[0].images);
    }

    handleJob();
    handleImage();
  }, [job_id] );



  const handleEditJob = async () => {

  
    const mapImages = newFiles.map((filename) => {
      const transformArray = Array.from(filename);
      return transformArray;
    });
    
    const formData = new FormData();
    
    formData.append(
      "job",
      JSON.stringify({
        title: newTitle === "" ? title : newTitle,
        description: newDescription === "" ? description : newDescription,
        city: newCity === "" ? city : newCity,
        district: newDistrict === "" ? district : newDistrict,
        state: newState === "" ? state : newState,
        street: newStreet === "" ? street : newStreet,
        job_id: job_id,
        photos: mapImages,
        removeFiles: {removeImages, removeVideos},
        removeTags: removeTags,
        tags: tags,
      })
    );
    
    
    if(mapImages.length > 0) {
      mapImages[0].forEach(files => {
        formData.append("photos", files)
      })
    }
    

    await api.patch("/jobs", formData ,{withCredentials: true} )
    navigate(-1)
    
  };

  const handleDeleteJob = async () => {
    api.delete(`/jobs/${job_id}`, { withCredentials: true });
    navigate("/")

  };

  const handleAddTags = () => {
    setTags((prevState) => [...prevState, { name: newTags }]);
    setNewTags("");
  };

  const handleRemoveTags = (tag) => {
    setTags(tags.filter((entries) => entries !== tag));

    setNewTags("");
  };

  useEffect(() => {
    const checkFiles = () => {
      const mapImages = newFiles.map((filename) => {
        const transformArray = Array.from(filename);
        return transformArray;
      });

      mapImages.forEach((filesToCheck) => {
        filesToCheck.forEach((files) => {
          if (files.type === "image/jpeg") {
            setNewImages((prevState) => [...prevState, files]);
          }

          if (files.type === "video/mp4") {
            setNewVideos((prevState) => [...prevState, files]);
          }
        });
      });
    };
    checkFiles();

  }, [newFiles]);



  useEffect(() => {
    setURLVideo(newVideos.map(video => {
        return {
          name: video.name,
          url: URL.createObjectURL(video)
        }
    }));

  }, [newVideos]);

  useEffect(() => {
    setURLPhotos(newImages.map(photo => {
        return {
          name: photo.name,
          url: URL.createObjectURL(photo)
        }
    }))
  }, [newImages])



  const handleDeleteImage = (imageToRemove) => {
    setImages(images.filter((entries) => entries !== imageToRemove));

    setRemoveImages((prevState) => [
      imageToRemove,
      ...prevState,
    ]);
  };


  const handleDeleteVideos = (videoToRemove) => {
    setVideos(videos.filter((entries) => entries !== videoToRemove));

    setRemoveVideos((prevState) => [
      videoToRemove,
      ...prevState,
    ]);
  };

  const handleDeleteUrlVideos = (videoToRemove) => {
    setURLVideo(URLVideo.filter(entries => entries !== videoToRemove));

    const mapImages = newFiles.map((filename) => {
      const transformArray = Array.from(filename);
      return transformArray;
    });

   const response = mapImages[0].filter(entries => entries.name !== videoToRemove.name);
   setNewsFiles(response);
  }

  const handleDeleteUrlPhotos = (imageToRemove) => {
    setURLPhotos(URLPhotos.filter(entries => entries !== imageToRemove));

    const mapImages = newFiles.map((filename) => {
      const transformArray = Array.from(filename);
      return transformArray;
    });

    const response = mapImages[0].filter(entries => entries.name !== imageToRemove);
    setNewsFiles(response)
  }
  
  console.log(user.role.includes(USER_ROLE.CUSTOMER))

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
              {images.length > 0 && (
                <figure>
                    <img
                      src={`${api.defaults.baseURL}${header}`}
                      alt="Banner para mostrar a imagem principal da pagina"
                    />

                    <figcaption>Banner</figcaption>
                </figure>
                )}
            </section>

            <section>

              {
                user.role.includes(USER_ROLE.ADMIN) ? <div>
                <EditInput
                  text={title}
                  newText={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  onClick={() => setIsTitleActive(!isTitleActive)}
                  onBlur={() => {
                    setIsTitleActive(!isTitleActive);
                    if (newTitle === "") {
                      setNewTitle(title);
                    }
                  }}
                  isActive={isTitleActive}
                />

                <EditInput
                  text={description}
                  newText={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  onClick={() => setIsDescriptionActive(!isDescriptionActive)}
                  onBlur={() => {
                    setIsDescriptionActive(!isDescriptionActive);
                    if (newDescription === "") {
                      setNewDescription(description);
                    }
                  }}
                  paragraphy
                  isActive={isDescriptionActive}
                />
              </div>

              :
              <div>
                <h1> {title} </h1>
                <p>{description}</p>
              </div>
              }
             
            </section>

            <section>

              {
                user.role.includes(USER_ROLE.ADMIN) && <EditTags>
                <h2>
                  Tags: <FaPencil />
                </h2>

                <div>
                  <TagItem
                    placeholder="Nova tag"
                    value={newTags}
                    onChange={(e) => setNewTags(e.target.value)}
                    onClick={handleAddTags}
                  />

                  {tags.map((tag, key) => {
                    return (
                      <TagItem
                        key={key}
                        isNew
                        value={tag.name}
                        onClick={() => handleRemoveTags(tag)}
                      />
                    );
                  })}
                </div>
              </EditTags>
                
              }
            </section>
            {
              user.role.includes(USER_ROLE.ADMIN) && <section>
              <h2>Localização do lugar: </h2>

              <ul>
                <li>
                  <div>
                    <h3>Cidade:</h3>

                    <EditInput
                      text={city}
                      newText={newCity}
                      onChange={(e) => setNewCity(e.target.value)}
                      onClick={() => setIsCityActive(!isCityActive)}
                      onBlur={() => {
                        setIsCityActive(!isCityActive);
                        if (newCity === "") {
                          setNewCity(city);
                        }
                      }}
                      paragraphy
                      isActive={isCityActive}
                    />
                  </div>
                </li>

                <li>
                  <div>
                    <h3>Estado: </h3>

                    <EditInput
                      text={state}
                      newText={newState}
                      onChange={(e) => setNewState(e.target.value)}
                      onClick={() => setIsStateActive(!isStateActive)}
                      onBlur={() => {
                        setIsStateActive(!isStateActive);
                        if (newState === "") {
                          setNewState(state);
                        }
                      }}
                      paragraphy
                      isActive={isStateActive}
                    />
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Rua:</h3>

                    <EditInput
                      text={street}
                      newText={newStreet}
                      onChange={(e) => setNewStreet(e.target.value)}
                      onClick={() => setIsStreetActive(!isStreetActive)}
                      onBlur={() => {
                        setIsStreetActive(!isStreetActive);
                        if (newStreet === "") {
                          setNewStreet(street);
                        }
                      }}
                      paragraphy
                      isActive={isStreetActive}
                    />
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Bairro: </h3>

                    <EditInput
                      text={district}
                      newText={newDistrict}
                      onChange={(e) => setNewDistrict(e.target.value)}
                      onClick={() => setIsDistrictActive(!isDistrictActive)}
                      onBlur={() => {
                        setIsDistrictActive(!isDistrictActive);
                        if (newDistrict === "") {
                          setNewDistrict(district);
                        }
                      }}
                      paragraphy
                      isActive={isDistrictActive}
                    />
                  </div>
                </li>
              </ul>
            </section>
            }


            <UploadImages>

              <h2>Imagens:</h2>              
              {
                  user.role.includes(USER_ROLE.CUSTOMER) &&  <AddImages>
                  <label htmlFor="images">
                    <h3>Adicionar novas fotos ou videos</h3>

                    <IoIosAddCircleOutline />
                  </label>

                  <input
                    type="file"
                    id="images"
                    multiple
                    onChange={(e) =>
                      setNewsFiles((prevState) => [
                        ...prevState,
                        e.target.files,
                      ])
                    }
                    accept="image/* , video/* "
                  />
                </AddImages>
                }
                <div>

              {images.map((entries, key) => {
                return (
                  <CarouselCard
                    key={key}
                    edit
                    img={entries.file}
                    name={entries.name}
                    remove={() => handleDeleteImage(entries)}
                  />
                );
              })}

              {videos.map((entries, key) => {
                return (
                  <CarouselCard
                    key={key}
                    edit
                    hasVideos
                    videos={entries.file}
                    name={entries.name}
                    remove={() => handleDeleteVideos(entries)}
                  />
                );
              })}

              {
                  URLVideo.map((entries, key) => {
                      return (
                          <CarouselCard
                              key={key}
                              edit
                              hasVideos
                              URLVideo
                              videos={entries.url}
                              name={entries.name}
                              remove={() => handleDeleteUrlVideos(entries)}
                          
                          />
                      )
                  })
              }

              {                 
                  URLPhotos.map((entries, key) => {
                      return (
                          <CarouselCard
                              key={key}
                              edit
                              URLImage
                              img={entries.url}
                              name={entries.name}
                              remove={() => handleDeleteUrlPhotos(entries)}
                          
                          />
                      )
                  })
              }
                </div>
            </UploadImages>

            <section>

              <Dialog
                  props={{color: "#14fd1b", colorButton: "#14fd1b" }}
                  title={user.role.includes(USER_ROLE.CUSTOMER) ? "Enviar trabalho?" : "Quer finalizar suas mudanças?"}
                  text={user.role.includes(USER_ROLE.CUSTOMER) ? "Enviar o trabalho" : "Enviar as mudanças"}
                  isActive
                  description={user.role.includes(USER_ROLE.CUSTOMER) ?  "Após enviar o trabalho, a imobiliaria irá analisar as fotos e então aceitar o trabalho." :"Fique tranquilo, você pode mudar depois."}
                  action={handleEditJob}
                  optionOne={user.role.includes(USER_ROLE.CUSTOMER) ? "Desejo revisar o trabalho." :"Não quero mudar."}
                  optionTwo={"Quero mudar"}
              />

            {
              user.role.includes(USER_ROLE.ADMIN) && <Dialog 
                props={{color: "#ff1010", colorButton: "#ff1010"}}
                title="Você quer realmente apagar esse trabalho?"
                text="Apagar o trabalho"
                description="Se você apagar o trabalho, não terá como resgatar ele de volta."
                action={handleDeleteJob}
                isActive
                optionOne="Não quero apagar."
                optionTwo="Entendo e quero apagar."
              />
            }

                
            </section>
          </div>
        </SpacingBox>
      </Main>
      


      <Footer />
    </Container>
  );
}
