import Link from 'next/link'
import {SubscribeArea, SubsSvg, SubscribeBut, BoosLine} from "./Subscribe.element"

function Subscribe() {
    return (
        <SubscribeArea>
            <SubsSvg>
                <BoosLine>Boost your links today</BoosLine>
                <SubscribeBut type="submit">Get Started</SubscribeBut>
            </SubsSvg>
        </SubscribeArea>
    )
}

export default Subscribe;
