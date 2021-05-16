import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksWrapper, FooterLinksContainer, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink>How it works</FooterLink>
                            <FooterLink>Testimonials</FooterLink>
                            <FooterLink>Careers</FooterLink>
                            <FooterLink>Investors</FooterLink>
                            <FooterLink>Terms of Service</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink>Submit Video</FooterLink>
                            <FooterLink>Ambassadors</FooterLink>
                            <FooterLink>Agency</FooterLink>
                            <FooterLink>Influencer</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Conctact Us</FooterLinkTitle>
                            <FooterLink>Contact</FooterLink>
                            <FooterLink>Support</FooterLink>
                            <FooterLink>Destinations</FooterLink>
                            <FooterLink>Sponsorships</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink>Instagram</FooterLink>
                            <FooterLink>Facebook</FooterLink>
                            <FooterLink>Youtube</FooterLink>
                            <FooterLink>Twitter</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo>
                            <WebsiteRights>
                                dolla @ {new Date().getFullYear()} All rights reserved.
                            </WebsiteRights>
                        </SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>

                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
