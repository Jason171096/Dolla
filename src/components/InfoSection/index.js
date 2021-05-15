import React from 'react'
import { Button } from '../ButtonElement'
import { InfoContainer, InfoWrapper, InfoRow, ColumnText, ColumnImg, TextWrapper, TopLine, Heading, Subtitle, BtnWrapper, ImgWrapper, Img } from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headLines, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <ColumnText>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLines}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrapper>
                                    <Button to='home' smooth={true} duration={true} spy={true} exact={true} offset={-80} primary={primary ? 1:0} dark={dark?1:0} dark2={dark2?1:0} >{buttonLabel}</Button>
                                </BtnWrapper>
                            </TextWrapper>
                        </ColumnText>
                        <ColumnImg>
                            <ImgWrapper>
                                <Img src={img} alt={alt}/>
                            </ImgWrapper>
                        </ColumnImg>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
