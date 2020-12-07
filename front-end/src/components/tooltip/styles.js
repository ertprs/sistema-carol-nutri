import styled from 'styled-components'

export const Container = styled.div`

div {
    visibility: hidden;
    position: absolute;
    display: inline-block;
    margin-left:10px;
    margin-top:3px;

    p{
        font-size: 13px;
        padding: 10px;
        max-width: 150px;
        color: #fff;
        background: rgba(16,16,16,0.5);
        border-radius: 9px 9px 9px 9px;

        :before{
            content: "";
            position: absolute;
            left: -6px;
            top: 20px;
            width: 15px;
            height: 15px;
            transform: rotateZ(45deg);
            border-width: 6px;  
            border-style: solid;
            border-color: transparent transparent rgba(16,16,16,0.5) rgba(16,16,16,0.5); 
        }

    }
}
`
