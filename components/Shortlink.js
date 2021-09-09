import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Image from "next/image";
import CopyToClipboard from "react-copy-to-clipboard";
import shrtcode from "../pages/api/shrtcode.js";
import Grpah from "../images/icon-brand-recognition.svg";
import Record from "../images/icon-detailed-records.svg";
import paint from "../images/icon-fully-customizable.svg";

const HTTP_URL_VALIDATOR_REGEX =
  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

const MainSecondry = styled.main`
  background: #f4f6f8;
  color: #000;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
`;
const LinkInput = styled.div`
  /* background-color: red;    */
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  top: 50em;
  position: relative;
  top: -10vh;
  /* z-index: 20; */
`;

const SvgArea = styled.div`
  background-image: url(${require("../images/bg-shorten-desktop.svg")});
  background-color: #3b3054;
  background-repeat: no-repeat;
  background-size: cover;
  height: 18vh;
  width: 80%;
  margin: 0 0 10vh 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-radius: 1em;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
`;

const FormArea = styled.form`
  /* background-color: pink; */
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
`;
const PutLink = styled.input`
  /* background-color: pink; */
  box-sizing: border-box;
  width: 2vh;
  padding: 12px 20px;
  resize: vertical;
  margin: 8vh 2vh;
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  flex-grow: 3;
  border-radius: 4px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  position: inherit;
`;

const ShortButton = styled.button`
  width: 15vh;
  background-color: #2acfcf;
  color: white;
  padding: 1vh 2vh;
  margin: 8vh 2vh;
  border: none;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  cursor: pointer;
  flex-wrap: wrap;
  /* position: relative; */
`;

const LinkHistory = styled.div`
  /* background-color: yellow; */
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  top: 50em;
`;

const ShowLinkHis = styled.div`
  /* background-color: red; */
  height: 6vh;
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
`;

const Ulist = styled.ul`
  /* background-color: purple; */
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
`;
const List = styled.li`
  background-color: #fff;
  width: 100%;
  margin: 1vh;
  border-radius: 0.5vh;
  padding: 1vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.1);
`;

const OrignalLink = styled.span`
  /* background-color: yellow; */
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
`;

const ShortLinks = styled.span`
  /* background-color: pink; */
  width: 100%;
  color: #2acfcf;
  display: flex;
  padding: 0 3vh 0 0;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
`;

const Copy = styled.span`
  background-color: #2acfcf;
  color: #fff;
  margin-left: 1vh;
  padding: 1vh 2vh;
  font-size: 1vh;
  border-radius: 0.5vh;
`;

const HeadLine = styled.div`
  /* background-color: skyblue; */
  width: 50%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: relative;
  bottom: 2em;
  font-size: 1.2vw;
  color: #333333;
  line-height: 1;
  font-weight: 700;
`;

const SubIntro = styled.div`
  /* background-color: red; */
  justify-content: center;
  color: #333333;
  text-align: center;
  color: #9d9aa7;
  margin: -1em 0 0 0;
  font-size: 1.3vw;
`;

const Cards = styled.div`
  /* background-color: pink; */
  width: 90%;
  height: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  top: 50em;
`;

const Line = styled.div`
  background-color: #2acfcf;
  height: 1vh;
  width: 65%;
  z-index: 0;
  position: absolute;
`;

const CardOne = styled.div`
  z-index: 1;
  background-color: #fff;
  height: 70%;
  width: 30%;
  padding : 4vh;
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
  align-content: center;
  align-items: flex-start;
  border-radius: 1vh;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);

`;

const Cardtwo = styled.div`
  z-index: 1;
  background-color: #fff;
  height: 70%;
  margin: 4vh 0 0 0;
  width: 30%;
  padding : 4vh;
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
  align-content: center;
  align-items: flex-start;
  border-radius: 1vh;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);

`;

const Cardthree = styled.div`
  z-index: 1;
  background-color: #fff;
  height: 70%;
  margin: 8vh 0 0 0;
  width: 30%;
  padding : 4vh;
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
  align-content: center;
  align-items: flex-start;
  border-radius: 1vh;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);

`;

const CardSvgone = styled.div`
  background-color: #292531;
  height: 9%;
  width: 5%;
  border-radius: 50%;
  display: flex;
  margin: 0 0 25vh 0 ;
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const CardSvgtwo = styled.div`
  background-color: #292531;
  height: 9%;
  width: 5%;
  border-radius: 50%;
  display: flex;
  margin: 0 0 25vh 0 ;
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const CardSvgthree = styled.div`
  background-color: #292531;
  height: 9%;
  width: 5%;
  border-radius: 50%;
  display: flex;
  margin: 0 0 25vh 0 ;
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
const CardHeading = styled.div`
  /* background-color: yellow; */
  font-size: 3vh;
  font-weight: 700;
  padding: 4vh 0 0 0;
`;
const CardPara = styled.div`
  /* background-color: purple; */
  color: #9d9aa7;
  line-height: 1.3;
  text-align: start;

`;

function ShortLink() {
  const [string, setString] = useState("");
  const [short, setShort] = useState("");
  const [orignal, setOrignal] = useState("");
  const [validLink, setValidLink] = useState("");
  const [items, setItems] = useState([]);

  const validatingURL = (item) => {
    return item.match(HTTP_URL_VALIDATOR_REGEX);
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    if (validatingURL(string)) {
      getLink();
      setString("");
    } else {
      setValidLink("Please Enter A Valid Link");
    }
  };

  const getLink = async () => {
    await shrtcode
      .get(`shorten?url=${string}`)
      .then((response) => {
        setShort(response.data.result.short_link);
        setOrignal(response.data.result.original_link);
        setItems([
          ...items,
          {
            id: items.length,
            value: response.data.result.short_link,
            OriLink: response.data.result.original_link,
          },
        ]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <MainSecondry>
      <LinkInput>
        <SvgArea>
          <FormArea onSubmit={(event) => handelSubmit(event)}>
            <PutLink
              value={string}
              onChange={(event) => {
                setString(event.target.value);
              }}
              type="text"
              required
              placeholder="Shorten a link here"
            />
            <ShortButton onClick={(event) => handelSubmit(event)} type="submit">
              Shorten it!
            </ShortButton>
            <h5>{validLink}</h5>
          </FormArea>
        </SvgArea>
      </LinkInput>
      <LinkHistory>
        <ShowLinkHis>
          <CopyToClipboard text={short}>
            <Ulist>
              {items.map((itemd) => (
                <List key={itemd.id}>
                  <OrignalLink>{itemd.OriLink}</OrignalLink>
                  <ShortLinks>{itemd.value}</ShortLinks>
                  <Copy>Copy</Copy>
                </List>
              ))}
            </Ulist>
          </CopyToClipboard>
        </ShowLinkHis>
      </LinkHistory>
      <HeadLine>
        <h1>Advanced Statistics</h1>
        <SubIntro>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </SubIntro>
      </HeadLine>
      <Cards>
        <Line></Line>
        <CardOne>
          <CardSvgone>
            <Image src={Grpah} height="30vh" width="30vh" alt="Company Graph" />
          </CardSvgone>
          <CardHeading>Brand Recognition</CardHeading>
          <CardPara>
            Boost your brand regonition with each click. Generic links dont
            mean a thing. Brand links help instil confidence in your content.
          </CardPara>
        </CardOne>
        <Cardtwo>
          <CardSvgtwo>
            <Image
              src={Record}
              height="30vh"
              width="30vh"
              alt="Company Graph"
            />
          </CardSvgtwo>
          <CardHeading>Detailed Records</CardHeading>
          <CardPara>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </CardPara>
        </Cardtwo>
        <Cardthree>
          <CardSvgthree>
            <Image src={paint} height="30vh" width="30vh" alt="Company Graph" />
          </CardSvgthree>
          <CardHeading>Fully Customizable</CardHeading>
          <CardPara>
            Improve brand awareness and content discoverability through
            customizable links, supercharing audience engagement.
          </CardPara>
        </Cardthree>
      </Cards>
    </MainSecondry>
  );
}

export default ShortLink;
