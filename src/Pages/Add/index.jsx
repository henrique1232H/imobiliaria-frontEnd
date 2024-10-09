import { Container, Form } from "./style";
import GoBack from "../../components/Back";
import Button from "../../components/Button"
import { useState } from "react";
import { api } from "../../service/api";
import TagItem from "../../components/TagsItem";
import { useNavigate } from "react-router-dom";

export default function Add() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [localization, setLocalization] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("")
    const [images, setImages] = useState([]);

    const navigate = useNavigate()
    

    const handleEnterJob = async (e) => {
        e.preventDefault()


        const mapImages = images.map(filename => {
            const transformArray = Array.from(filename);
            return transformArray
        })

        const formData = new FormData();


        mapImages[0].forEach(image => {
            formData.append("photos", image);
        })
        
        formData.append("job", JSON.stringify({
            title,
            description,
            localization,
            tags
        }));

        await api.post("/jobs", formData, {withCredentials: true})

        navigate("/")

    }

    const handleAddTags = () => {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    const handleRemoveTags = (tag) => {
        setTags(tags.filter(entries => entries !== tag))
        setNewTag("")
    }


    return (
        <Container>
            <main>

                <GoBack />
                <h1>Vamos criar um novo trabalho</h1>

                <Form>
                    <div>
                        <label htmlFor="title">Título do Trabalho</label>
                        <input id="title" type="text" placeholder="Nome"  onChange={e => setTitle(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="description">Descrição do Trabalho</label>
                        <input id="description" type="text" placeholder="Descrição do trabalho" onChange={e => setDescription(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="localization">Localização do Trabalho</label>
                        <input id="localization" type="text" placeholder="Localização do lugar onde foi tirado as fotos" onChange={e => setLocalization(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="">Imagens do trabalho</label>
                        <input type="file" name="" id=""  multiple onChange={e => setImages(prevState => [...prevState, e.target.files])}/>
                    </div>

                    <div> 
                        <TagItem 
                            placeholder="Nova tag"
                            value={newTag}
                            onChange={e => setNewTag(e.target.value)}
                            onClick={handleAddTags}
                        />

                        {
                            tags.map((tag, key) => {
                                return <TagItem key={key} isNew value={tag} onClick={e => handleRemoveTags(tag)}/>
                            })

                        }
                    </div>

                    <div>
                        <Button text="Enviar" onClick={e => handleEnterJob(e)}/>
                    </div>

                </Form>
            </main>
        </Container>
    )
}