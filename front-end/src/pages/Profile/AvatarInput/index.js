import React, { useState, useRef, useEffect, useContext } from 'react';
import { useField } from '@rocketseat/unform';
import api from '../../../services/api'
import { Container } from './styles'

import {AuthContext} from '../../../context/AuthContext'

export default function AvatarInput() {

    const { user } = useContext(AuthContext)

    const { defaultValue } = useField("avatar");

    console.log("sls: " + defaultValue)

    const [preview, setPreview] = useState(defaultValue);  
    
    console.log("preview: " + preview)
    // const [file, setFile] = useState(defaultValue);

    const ref = useRef();

    async function handleChange(e) {
        const data = new FormData();

        data.append('file', e.target.files[0]);

        await api.put(`files/${user._id}`, data);

    }

    return (
        <Container>
            <label htmlFor="avatar" >
                <img src={preview || "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"} alt="" />
                <input 
                    type="file" 
                    id="avatar" 
                    accept="image/*"
                    onChange={handleChange}
                    // ref={ref}
                />               
            </label>
        </Container>
    )
}
