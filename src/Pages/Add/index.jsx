import { Container, Form, Input, IsApartament, Select } from "./style";
import GoBack from "../../components/Back";
import Button from "../../components/Button"
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import TagItem from "../../components/TagsItem";
import { useNavigate } from "react-router-dom";
import CheckBox from "../../components/Checkbox";
import Dialog from "../../components/AlertDialog";

export default function Add() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [state, setState] = useState("")
    const [street, setStreet] =  useState("")
    const [newTag, setNewTag] = useState("");
    const [dayOfWeek, setDayOfWeek] = useState("");
    const [time, setTime] = useState("");
    const [timeOut, setTimeOut] = useState("");
    
    
    const [tags, setTags] = useState([]);

    const [job, setJob] = useState("")
    const [isApartament, setIsApartament] = useState(false);

    const [ownerName, setOwnerName] = useState("");
    const [ownerNumber, setOwnerNumber] = useState("");
    const [checkbox, setCheckbox] = useState(false);
    const [referencePoint, setReferencePoint] = useState("");

    const [key, setKey] = useState("")

    const [day, setDay] = useState("");

    const [budget, setBudget] = useState("");

    const navigate = useNavigate()
    

    const checkIfAllInputIsComplete = () => {

    }
    
    const handleEnterJob = async (e) => {
        e.preventDefault()

        const response = checkIfAllInputIsComplete();

        const moreInformation = {
            ownerName,
            ownerNumber,
            job,
            key,
            isApartament

        }

        const convertTime = `${day}T${time}`

        const timestamp = new Date(convertTime).getTime();

        await api.post("/jobs", 
            {
                title,
                description,
                city, 
                district, 
                state, 
                street,
                budget,
                dayOfWeek, 
                timestamp,
                timeOut,
                referencePoint,
                moreInformation,
                tags,
            }, 
            {withCredentials: true})
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

    useEffect(() => {
        if(job === "Apartamento") {
            setIsApartament(!isApartament)
            return;
        }

        setIsApartament(false)
    }, [job])

    console.log(job)

    return (
        <Container>
            <main>

                <GoBack />
                <h1>Vamos criar um novo trabalho</h1>

                <Form>
                    <section>
                        <h2>Título e Descrição:</h2>

                        <div>
                            <label htmlFor="title"> <h3>Título: *</h3> </label>
                            <p>Adicione um título para o seu próximo trabalho.</p>
                            <Input id="title" type="text" placeholder="Nome"  onChange={e => setTitle(e.target.value)}/>
                        </div>

                        <div>
                            <label htmlFor="description"> <h3>Descrição: *</h3> </label>
                            <p>Adicione uma descrição para o trabalho.</p>

                    
                            <textarea name="" id="description" placeholder="Descrição do trabalho" onChange={e => setDescription(e.target.value)}>

                            </textarea>
                        </div>
                    </section>

                    <section> 
                        <h2>Tags: *</h2>

                        <p>Adicione tags para os fotográfos acharem melhor esse trabalho.</p>

                        <div> 
                            <TagItem 
                                placeholder="Nova tag"
                                value={newTag}
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTags}
                            />

                            {
                                tags.map((tag, key) => {
                                    return <TagItem key={key} isNew value={tag} onClick={() => handleRemoveTags(tag)} />
                                })

                            }
                        </div>
                    </section>
                    

                    <section>
                        <h2>Orçamento: *</h2>

                        <div>
                            <label htmlFor="budget"> <h3>Valor do trabalho (R$):</h3> </label>
                            <Input type="number" id="budget" onChange={e => setBudget(e.target.value)} />
                        </div>
                    </section>

                    <section>

                        <h2>Endereço:</h2>

                        <div>
                            <div>
                                <label htmlFor="street"> <h3>Rua: *</h3> </label>
                                <p>Coloque o nome da rua.</p>
                                <Input id="street" placeholder="Coloque o nome da rua" type="text" onChange={e => setStreet(e.target.value)}/>
                            </div>

                            <div>
                                <label htmlFor="city"> <h3>Cidade: *</h3> </label>
                                <p>Coloque o nome da cidade.</p>
                                <Input id="city" placeholder="Exemplo: São Paulo, Campinas..." type="text" onChange={e => setCity(e.target.value)}/>
                            </div>

                            <div>
                                <label htmlFor="district"> <h3>Bairro: *</h3> </label>
                                <p>Coloque o nome do bairro.</p>
                                <Input placeholder="Exemplo: piratininga, etc ..." id="district" type="text" onChange={e => setDistrict(e.target.value)}/>
                            </div>

                            <div>
                                <label htmlFor="state"> <h3>Estado: *</h3> </label>
                                <p>Coloque o nome do estado.</p>
                                <Input id="state" placeholder="Exemplo: São Paulo, Minas gerais..." type="text" onChange={e => setState(e.target.value)} />
                            </div>



                        </div>

                        <div className="full">
                            <label htmlFor="ownersName"><h3>Ponto de referência: *</h3></label>
                            <p>Adicione um ponto de referência para o fotográfo encontrar melhor o lugar</p>
                            <Input type="text" placeholder="Exemplo: perto do mercado" onChange={e => setReferencePoint(e.target.value)}/>
                        </div>
                    </section>


                    <section>
                        <h2>Data e horário:</h2>

                        <div>
                            <div>
                                <label htmlFor="day"><h3>Dia da semana: *</h3></label>
                                <Select id="day" onChange={(e) => setDayOfWeek(e.target.value)}>
                                    <option value="" selected></option>

                                    <option value="Segunda-Feira">
                                        Segunda-Feira
                                    </option>
                                    <option value="Terça-Feira">
                                        Terça-Feira
                                    </option>
                                    <option value="Quarta-Feira">
                                        Quarta-Feira
                                    </option>
                                    <option value="Quinta-Feira">
                                        Quinta-Feira
                                    </option>
                                    <option value="Sexta-Feira">
                                        Sexta-Feira
                                    </option>
                                    <option value="Sábado">
                                        Sábado
                                    </option>
                                    <option value="Domingo">
                                        Domingo
                                    </option>
                                </Select>
                            </div>
                            
                            <div>
                                <label htmlFor="day"><h3>Dia: *</h3></label>
                                <Input type="date" name="" id="day" onChange={(e) => setDay(e.target.value)}/>
                            </div>

                            <div>
                                <label htmlFor="time"><h3>Horário: *</h3></label>
                                <p>Adicione o horário que o fotográfo deve chegar.</p>
                                <Input type="time" name="" id="time" onChange={(e) => setTime(e.target.value)}/>
                            </div>

                            <div>
                                <label htmlFor="time-out"><h3 style={{color: "red"}}>Horário não mais permitido: *</h3> </label>
                                <p>Adicione um horário que o fotográfo não pode mais ir.</p>
                                <Input type="time" name="" id="time" onChange={(e) => setTimeOut(e.target.value)}/>
                            </div>

                        </div>


                    </section>

                    <section>
                        <h2>Informações adicionais:</h2>

                        <div>
                            <label htmlFor="ownersName"><h3>Nome do proprietário: *</h3></label>
                            <Input type="text" placeholder="Digite o nome do proprietário" onChange={e => setOwnerName(e.target.value)}/>
                        </div>

                        <div>
                            <label htmlFor="ownersNumber"><h3>Número do proprietário: *</h3></label>
                            <Input type="text" placeholder="Digite o número do proprietário" onChange={e => setOwnerNumber(e.target.value)}/>
                        </div>

                        <div>
                            <label htmlFor="is"> <h3>Esse trabalho é: *</h3> </label>
                            <Select id="is" onChange={(e) => setJob(e.target.value)}>
                                <option value="" selected></option>
                                <option value="Casa">Casa</option>
                                <option value="Estabelecimento">Estabelecimento</option>
                                <option value="Apartamento">Apartamento</option>
                            </Select>
                        </div>

                        {
                            isApartament && 
                            
                            <IsApartament>
                                <div>
                                    <label htmlFor="keys"> <h3>A chave ficará com:</h3></label>
                                    <Select id="keys" onChange={(e) => setKey(e.target.value) }>
                                        <option value="Porteiro">Porteiro</option>
                                        <option value="Proprietário">O proprietário</option>
                                        <option value="No">Só entrar</option>
                                    </Select>
                                </div>

                                <div>
                                    <label htmlFor="apartmentBlock"> <h3>Bloco do apartamento:</h3></label>
                                    <Input type="text" id="apatmentBlock" />
                                </div>

                                <div>
                                    <label htmlFor="apartmentNumber"> <h3>Número do apartamento:</h3></label>
                                    <Input type="number" name="" id="apartmentNumber" />
                                </div>
                            </IsApartament>
                        }

                    </section>

                    <section>
                        <h2>Finalizando:</h2>

                        <div>
                            <CheckBox isActive={checkbox} onClick={() => setCheckbox(!checkbox)} id="checkbox"/>
                            <label htmlFor="checkbox">Me comprometo em ter colocado todas as informações sobre o trabalho certa para melhor entendimento do fotográfo.</label>
                        </div>
                    </section>

                    
                    <div>
                        <Dialog
                            props={{
                            color: "#4cafd7",
                            colorText: "#fff",
                            colorButton: "#14fd1b",
                            padding: "1rem 0",
                            alignItem: "center",
                            borderRadious: "1rem",
                            fontSize: "1.5rem"
                            }}
                            title={"Enviar esse trabalho"}
                            text={"Enviar"}
                            description="Você terminou de fornecer todas as informações?"
                            action={(e) => handleEnterJob(e)}
                            optionOne="Vou revisar e enviar tudo."
                            optionTwo="Já terminei e vou enviar."
                        />

                    </div>

                </Form>
            </main>
        </Container>
    )
}