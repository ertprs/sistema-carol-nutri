import React from 'react'

import {Container} from './styles'

export default function Tooltip(props){
    return (
    <Container><div><p>{props.texto}</p></div></Container>
    )
}
