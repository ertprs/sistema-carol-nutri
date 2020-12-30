import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'

import {toast} from 'react-toastify'
import * as Yup from 'yup'
import { Form, Input, Textarea } from '@rocketseat/unform'

import { FiChevronLeft } from 'react-icons/fi'
import {AiOutlineMail, AiOutlinePhone, AiOutlineBell} from 'react-icons/ai'

import tipo1 from '../../assets/bristol/tipo1.png'
import tipo2 from '../../assets/bristol/tipo2.png'
import tipo3 from '../../assets/bristol/tipo3.png'
import tipo4 from '../../assets/bristol/tipo4.png'
import tipo5 from '../../assets/bristol/tipo5.png'
import tipo6 from '../../assets/bristol/tipo6.png'
import tipo7 from '../../assets/bristol/tipo7.png'

import escala1 from '../../assets/Urina/escala1.png'
import escala2 from '../../assets/Urina/escala2.png'
import escala3 from '../../assets/Urina/escala3.png'
import escala4 from '../../assets/Urina/escala4.png'
import escala5 from '../../assets/Urina/escala5.png'
import escala6 from '../../assets/Urina/escala6.png'
import escala7 from '../../assets/Urina/escala7.png'
import escala8 from '../../assets/Urina/escala8.png'

import api from '../../services/api'

import {Return, UsuarioInfo, Container, MedicalInfo} from './styles'

/*
As informações pessoais, dá para deixar, só para a visualização da nutricionista. Já as
informações do usuário, dá para deixar da mesma forma, porém terá um botão para editar.
Clicando no botão, abrirá um modal para editar as informações deste usuário. Ao lado deste botão,
deve ter um botão em vermelho para deletar o usuário. Este botão, também deverá abrir um modal para
a confirmação da exclusão do usuário.
*/

const schema = Yup.object().shape({


})


export default function Paciente(){

    const { params } = useRouteMatch();

    const [paciente, setPaciente] = useState([]);
    const [informacoesMedicas, setInformacoes] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(async () => {
        await api.get(`user/user/${params.paciente}`).then((response) => {
            setPaciente(response.data)
        }).catch((error) => {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        })
        await api.get(`form//list/${params.paciente}`).then((response) => {
            setInformacoes(response.data)
        }).catch((error) => {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        })
    },[params.paciente])

    return (
        <Container>

            <Return>
                <Link to="/pacientes">
                    <FiChevronLeft/>
                    Voltar
                </Link>
            </Return>
    
            <UsuarioInfo>
                <header>
                    <img src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"/>
                    <div>
                        <strong>
                            {paciente.name}
                        </strong>
                        <p>
                            <AiOutlineMail/> {paciente.email}
                        </p>
                        <span>
                        <AiOutlinePhone size={18}/> {paciente.phone}
                        </span>
                        <br/>
                        <span>
                        <AiOutlineBell/> {paciente.status}
                        </span>
                    </div>
                </header>
                <hr/>
            </UsuarioInfo>

            <MedicalInfo>
                <Form schema={schema} initialData={informacoesMedicas}>
                    <h4>1. INFORMAÇÕES PESSOAIS</h4>
                    <div>
                        <div>
                            <label for="dateBirth">Data de nascimento:</label>
                            <Input type="date" name="dateBirth" placeholder="Data de nascimento" />
                        </div>
                        <div>
                            <label for="maritalStatus">Estado civil:</label>
                            <select name="maritalStatus" id="maritalStatus">
                                <option value="Solteiro">Solteiro</option>
                                <option value="Casado">Casado</option>
                                <option value="Divorciado">Divorciado</option>
                            </select>
                        </div>
                        <div>
                            <label for="Weight">Peso:</label>
                            <Input type="Number" max="400" step="0.1" name="Weight" placeholder="Peso em kg" />
                        </div>
                        <div>
                            <label for="height">Altura:</label>
                            <Input type="Number" max="3.00" step="0.01" name="height" placeholder="Altura em metros" />
                        </div>               
                    </div>

                    <div>
                        <div>
                            <label for="profession">Profissão:</label>
                            <Input type="text" name="profession" placeholder="Profissão" />
                        </div>  
                        <div>
                        <label for="IntestinalTransit">Transito intestinal:</label>
                            <select name="IntestinalTransit" id="IntestinalTransit">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                        </div>
                        <div>
                        <label for="UrinaryStaining">Escala urinaria:</label>
                            <select name="UrinaryStaining" id="UrinaryStaining">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </div>
                        <div>
                            <label for="genre">Genero fisiologico:</label>
                            <select name="genre" id="genre">
                                <option value="Solteiro">Mulher</option>
                                <option value="Casado">Homem</option>
                            </select>
                        </div>
                        <div>
                            <label for="sleepQuality">Qualidade do sono:</label>
                            <select name="sleepQuality" id="sleepQuality">
                                <option value="Solteiro">Bom</option>
                                <option value="Casado">Ruin</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <div>
                            <label for="clinicalHistory">Historico clínico:</label>
                            <Textarea id="clinicalHistory" name="clinicalHistory" rows="6" cols="30">
                            </Textarea>
                        </div>

                        <div>
                            <label for="objective">Objetivo:</label>
                            <Textarea id="objective" name="objective" rows="6" cols="30">
                            </Textarea>
                        </div>
                    </div>
                    <hr/>

                    <h4>2. SEMIOLOGIA NUTRICIONAL</h4>

                    <h5>2.1 ALTERAÇÃO DE PESO</h5>
                    <div>
                        <div>
                            <label for="maritalStatus">Tipo:</label>
                            <select name="maritalStatus" id="maritalStatus">
                                <option value="Solteiro">Perda de peso</option>
                                <option value="Casado">Ganho de peso</option>
                            </select>
                        </div>
                        <div>
                            <label for="height">Quantidade:</label>
                            <Input type="Number" max="400" step="0.1" name="height" placeholder="Altura em metros" />
                        </div>               
                    </div>

                    <h5>2.2 EXAME FÍSICO</h5>
                    <div>
                        <div>
                            <Input type="checkbox" id="drySkin" name="drySkin" />
                            <label for="drySkin">Pele Ressecada</label>
                        </div>

                        <div>
                            <Input type="checkbox" id="mucousMoisture" name="mucousMoisture"/>
                            <label for="mucousMoisture">Umidade das mucosas</label>
                        </div>
                        <div>
                            <Input type="checkbox" id="lossOfHair" name="lossOfHair"/>
                            <label for="lossOfHair">Queda de cabelo</label>
                        </div>
                    </div>
                    <div>
                    <div>
                            <Input type="checkbox" id="edema" name="edema"/>
                            <label for="edema">Edema</label>
                        </div>
                        <div>
                            <Input type="checkbox" id="weakness" name="weakness"/>
                            <label for="weakness">Fraqueza</label>
                        </div>
                        <div>
                            <Input type="checkbox" id="conjunctivalPallor" name="conjunctivalPallor"/>
                            <label for="conjunctivalPallor">Palidez conjutival</label>
                        </div>
                        <div>
                            <Input type="checkbox" id="koilonychicNails" name="koilonychicNails"/>
                            <label for="koilonychicNails">Unhas coiloníquas</label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label for="Obs">Observação:</label>
                            <Textarea id="Obs" name="Obs" rows="6" cols="30">
                            </Textarea>
                        </div>
                    </div>

                    <h5>2.3 ALTERAÇÃO NO APARELHO DIGESTIVO</h5>
                    <div>
                        <div>
                            <Input type="checkbox" id="dyspepsia" name="dyspepsia" />
                            <label for="dyspepsia">Dispepsia</label>
                        </div>

                        <div>
                            <Input type="checkbox" id="stomachPains" name="stomachPains"/>
                            <label for="stomachPains">Dores estomacais</label>
                        </div>
                        <div>
                            <Input type="checkbox" id="nausea" name="nausea"/>
                            <label for="nausea">Nauseas</label>
                        </div>

                        <div>
                            <Input type="checkbox" id="vomiting" name="evomitingdema"/>
                            <label for="vomiting">Vômitos</label>
                        </div>
                        <div>
                            <Input type="checkbox" id="dysphagia" name="dysphagia"/>
                            <label for="dysphagia">Disfagia</label>
                        </div>

                    </div>
                    <div>
                        <div>
                            <label for="Obs">Observação:</label>
                            <Textarea id="Obs" name="Obs" rows="6" cols="30">
                            </Textarea>
                        </div>
                    </div>

                    <h5>2.4 ALTERAÇÕES INTESTINAIS</h5>
                    <div>
                        <div>
                            <Input type="checkbox" id="diarrhea" name="diarrhea"/>
                            <label for="diarrhea">Diareeia</label>
                        </div>
                        <div>
                            <Input type="checkbox" id="cold" name="cold"/>
                            <label for="cold">Constipação</label>
                        </div>
                        <div>
                            <label for="Obs">Observação:</label>
                            <Textarea id="Obs" name="Obs" rows="6" cols="30">
                            </Textarea>
                        </div>
                    </div>
                    <hr/>

                    <h4>3. CONSUNO DE ÁGUA</h4>
                    <div>
                        <div>
                            <label for="waterConsumption">Observação:</label>
                            <Textarea id="waterConsumption" name="waterConsumption" rows="6" cols="30">
                            </Textarea>
                        </div>
                    </div>
                    <hr/>
    
                    <h4>4. ALERGIAS E INTOLERÂNCIAS</h4>
                    <div>
                        <div>
                            <label for="foodAllergy">Alergia alimentar:</label>
                            <Textarea id="foodAllergy" name="foodAllergy" rows="6" cols="30">
                            </Textarea>
                        </div>

                        <div>
                            <label for="otherAllergies">Outras alergias:</label>
                            <Textarea id="otherAllergies" name="otherAllergies" rows="6" cols="30">
                            </Textarea>
                        </div>

                        <div>
                            <label for="intolerances">Intolerâncias:</label>
                            <Textarea id="intolerances" name="intolerances" rows="6" cols="30">
                            </Textarea>
                        </div>
                    </div>
                    <hr/>

                    <h4>5. USO DE MEDICAMENTOS/SUPLEMENTOS</h4>
                    <hr/>

                    <h4>6. ATIVIDADE FÍSICA</h4>
                    <div>
                        <div>
                            <Input type="checkbox" id="yesNo" name="yesNo"/>
                            <label for="yesNo">Pratica atividade Física</label>
                        </div>
                        <div>
                            <label for="frequency">Discrição da frenquência:</label>
                            <Textarea id="frequency" name="frequency" rows="6" cols="30">
                            </Textarea>
                        </div>
                    </div>
                    <hr/>

                    <h4>7. BEBIDA ALCOÓLICA</h4>
                    <div>
                        <div>
                            <Input type="checkbox" id="yesNo" name="yesNo"/>
                            <label for="yesNo">Ingere bebida alcoolica</label>
                        </div>
                        <div>
                            <label for="frequency">Discrição da frenquência:</label>
                            <Textarea id="frequency" name="frequency" rows="6" cols="30">
                            </Textarea>
                        </div>
                    </div>
                    <hr/>

                    <h4>8. TABAGISMO</h4>
                    <div>
                        <div>
                            <Input type="checkbox" id="yesNo" name="yesNo"/>
                            <label for="yesNo">Fumante</label>
                        </div>
                    </div>
                    <hr/>

                    <h4>9. HORARIOS</h4>
                    <div>
                        <div>
                            <label for="profession">Acorda às:</label>
                            <Input type="time" name="profession" placeholder="Profissão" />
                        </div>
                        <div>
                            <label for="profession">Dorme às:</label>
                            <Input type="time" name="profession" placeholder="Profissão" />
                        </div>
                        <div>
                            <label for="profession">Atividade física às:</label>
                            <Input type="time" name="profession" placeholder="Profissão" />
                        </div> 
                    </div>
                    <hr/>

                    <h4>10. AVALIAÇÃO DIETÉTICA</h4>

                    <h5>10.1. PREFERÊNCIAS E AVERSÕES</h5>
                    <hr/>


                    <button type="submit">Atualizar dados</button>
                </Form>
            </MedicalInfo>

        </Container>
        )
}