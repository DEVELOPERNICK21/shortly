import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import CopyToClipboard from "react-copy-to-clipboard";
import shrtcode from '../pages/api/shrtcode.js'


const HTTP_URL_VALIDATOR_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

const MainSecondry = styled.main`
background : #f4f6f8;
color : #000;
height: 90vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
align-content: center;
flex-wrap: wrap;
`
const LinkInput = styled.div`
/* background-color: red; */
width: 100%;
height : 25%;
display: flex;
flex-direction: row;
justify-content: center;
align-content: center;
top: 50em;
/* z-index: 20; */
`

const SvgArea = styled.div`
background-color: #6efaea;
height: 18vh;
width: 80%;
display: flex;
flex-direction: row;
justify-content: center;
border-radius: 1em;
`

const LinkHistory = styled.div`
/* background-color: yellow; */
width: 100%;
height : 25%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
top: 50em;
`

const HeadLine = styled.div`
/* background-color: skyblue; */
width: 100%;
height : 25%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
top: 50em;
`

const Cards = styled.div`
/* background-color: aqua; */
width: 80%;
height : 25%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
align-content: center;
top: 50em;
`
const PutLink = styled.input`
width: 100%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box`


const ShortButton = styled.button`
width: 100%;
background-color: #4CAF50;
color: white;
padding: 14px 20px;
margin: 8px 0;
border: none;
border-radius: 4px;
cursor: pointer;
`

function ShortLink() {

    const [string, setString] = useState('');
    const [short, setShort] = useState('');
    const [orignal, setOrignal] = useState('');
    const [validLink, setValidLink] = useState('');

    const validatingURL = (item) => {
        return item.match(HTTP_URL_VALIDATOR_REGEX)
    }

    const handelSubmit = (event) => {
        event.preventDefault();
        if(validatingURL(string))
        {
            getLink();
            setString('');
        }else{
            setValidLink("Please Enter A Valid Link")
        }
    }

    const getLink = async () => {
        await shrtcode
        .get(`shorten?url=${string}`)
        .then((response) => {
            setShort(response.data.result.short_link);
            setOrignal(response.data.result.original_link);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    return (
        <MainSecondry>
            <LinkInput>
                <SvgArea>
                    <form onSubmit={(event) => handelSubmit(event)}>
                        <PutLink value={string} onChange={(event) => { 
                            setString(event.target.value);
                        }} type="text" autocomplete="name" required placeholder="Shorten a link here" />
                        <ShortButton onClick={(event) => handelSubmit(event)} type="submit">Shorten it!</ShortButton>
                    </form>
                    <h1>{validLink}</h1>
                </SvgArea>
            </LinkInput>
            <LinkHistory>
                    <h2>{orignal} Here</h2>
                    <h2>{short}</h2>
                <CopyToClipboard text={short}>
                        <button >{short} {console.log(short)} <span>Copy</span></button>
                </CopyToClipboard>

                Link History.....
            </LinkHistory>
            <HeadLine>
                <h1>Advanced Statistics</h1>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </HeadLine>
            <Cards>
                <div>Card1</div>
                <div>Card2</div>
                <div>Card3</div>
            </Cards>
        </MainSecondry>
    )
}

export default ShortLink;
