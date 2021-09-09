import { useEffect, useState } from "react";
import axios from "axios";
import { MainSecondry, LinkInput, SvgArea, FormArea, PutLink, ShortButton, Validmsg, LinkHistory, ShowLinkHis, Ulist, List, OrignalLink, ShortLinks, Copy, HeadLine,
  SubIntro, Cards, Line, CardOne, Cardtwo, Cardthree, CardSvgone, CardSvgtwo, CardSvgthree, CardHeading, CardPara} from './ShortLink.element'
import Image from "next/image";
import CopyToClipboard from "react-copy-to-clipboard";
import shrtcode from "../../pages/api/shrtcode";
import Grpah from "../../images/icon-brand-recognition.svg";
import Record from "../../images/icon-detailed-records.svg";
import paint from "../../images/icon-fully-customizable.svg";

const HTTP_URL_VALIDATOR_REGEX =
  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

function ShortLink() {
  const [string, setString] = useState("");
  const [short, setShort] = useState("");
  const [orignal, setOrignal] = useState("");
  const [validLink, setValidLink] = useState(false);
  const [items, setItems] = useState([]);

  const validatingURL = (item) => {
    return item.match(HTTP_URL_VALIDATOR_REGEX);
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    if (validatingURL(string)) {
      getLink();
      setString("");
      setValidLink(false);
    } else {
      setValidLink(true);
      // setValidLink("Please Enter A Valid Link");
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
          </FormArea>
          {validLink ?
            <Validmsg>Please Enter A Valid Link</Validmsg> : <Validmsg>{null}</Validmsg>  
          }
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
                  <Copy passHref>Copy</Copy>
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
