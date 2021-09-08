import styled from "styled-components";
import Link from 'next/link'

const LinkH = styled.div `
height: 25vh;
background : #3b3054;
color : #fff;
display:flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
align-content: center;
`


function LinkData() {



    return (
        <LinkH>
            <h1>Here History Comes</h1>
        </LinkH>
    )
}

export default LinkData;
