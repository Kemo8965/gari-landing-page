import React, { Fragment } from "react";

import styled from "styled-components";
import tw from "twin.macro";

import { ReactComponent as SvgDecoratorBlob1 } from "../assets/icons/dot-pattern.svg";
import { ReactComponent as QuotesLeftIconBase } from "../assets/icons/quotes-l.svg";
import { ReactComponent as CheckboxIcon } from "../assets/icons/check-circle.svg";

const ContentWithVerticalPadding = tw.div`py-20 lg:py-24`;
const Container = tw.div`relative`;
const Row = tw.div`flex flex-col lg:flex-row justify-between items-center lg:pt-16 max-w-screen-xl mx-auto px-8 sm:px-8`;
const TextColumn = tw.div`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`;
const Heading = tw.h2`text-4xl sm:text-5xl font-black text-green-900 leading-snug xl:text-6xl`;
const Description = tw.p`mt-4 sm:text-lg leading-relaxed max-w-xl mt-4 text-gray-700 max-w-lg`;
const FeatureList = tw.ul`mt-6 leading-loose`;
const Feature = tw.li`flex items-center`;
const FeatureIcon = styled(CheckboxIcon)`
    ${tw`w-5 h-5 text-green-900`}
`;
const FeatureText = tw.p`ml-2 text-gray-700`;
const ImageColumn = tw.div`ml-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-32`;
const ImageContainer = tw.div`relative z-40 transform xl:-translate-x-24 xl:-translate-y-16`;
const Image = tw.img`max-w-full w-96 sm:h-96 sm:object-cover rounded-t relative z-20`;
const Offsetbackground = tw.div`absolute inset-0 bg-gray-300 rounded xl:-mb-8`;
const ImageDecoratorBlob = styled(SvgDecoratorBlob1)`
    ${tw`pointer-events-none z-10 absolute right-0 bottom-0 transform translate-x-10 translate-y-10 h-32 w-32 opacity-25 text-gray-900 fill-current`}
`;
const Testimonial = tw.div`sm:text-base max-w-sm rounded-b-lg sm:rounded-t-lg relative sm:absolute sm:translate-y-20 bottom-0 inset-x-0 z-20 px-8 py-6 sm:px-10 sm:py-6 bg-green-900 text-gray-200 transform md:-translate-x-32 text-sm leading-relaxed md:-mr-16 xl:mr-0`;
const QuotesLeftIcon = styled(QuotesLeftIconBase)`
    ${tw`w-16 h-16 md:w-12 md:h-12 absolute top-0 left-0 text-gray-100 md:text-red-500 transform translate-x-1 md:-translate-x-1/2 md:-translate-y-5 opacity-25 md:opacity-100`}
`;
const Quote = tw.blockquote``;
const CustomerName = tw.p`mt-4 font-bold`;
const CustomerCompany = tw.p`mt-1 text-sm text-gray-400`;

interface IHeroProps {
    heading?: string;
    description?: string;
    imageSrc?: string;
    imageDecoratorBlob?: boolean;
    features?: string[];
    testimonial?: {
        quote?: string;
        customerName?: string;
        customerCompany?: string;
    };
}

export const Hero: React.FC<IHeroProps> = ({
    heading = "Zambia's First Online Motor Insurance.",
    description = "We are redefining SMART Car Insurance. Simple, Mobile, Automated, Reliable, and Transparent.",
    imageSrc = "https://images.unsplash.com/photo-1573878585045-4a17c8a39bbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=518&q=80",
    imageDecoratorBlob = true,
    features = [
        "Smart and fast response",
        "Get a quote in seconds",
        "Do everything online",
    ],
    testimonial = {
        quote:
            "With the Gari mobile application, I can buy insurance with comfort.",
        customerName: "Jane Nawila",
        customerCompany: "Hobbiton Investment Services",
    },
}) => {
    return (
        <Fragment>
            <Container>
                <svg
                    className="absolute overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 600 600"
                    style={{ zIndex: -10 }}>
                    <g transform="translate(100,200)">
                        <path
                            d="M108.7,-102.8C139.7,-47.8,163,-2.6,157.3,41.4C151.6,85.4,117,128.3,71.9,150.5C26.8,172.7,-28.9,174.2,-85.4,155.4C-141.9,136.6,-199.1,97.6,-217.2,42.6C-235.3,-12.3,-214.2,-83.2,-171.5,-140.9C-128.7,-198.7,-64.4,-243.3,-12.8,-233.2C38.8,-223,77.7,-157.9,108.7,-102.8Z"
                            fill="#EBF8FF"
                        />
                    </g>
                </svg>
                <ContentWithVerticalPadding>
                    <Row>
                        <TextColumn>
                            <Heading>{heading}</Heading>
                            <Description>{description}</Description>
                            <FeatureList>
                                {features.map((feature, index) => (
                                    <Feature key={index}>
                                        <FeatureIcon />
                                        <FeatureText>{feature}</FeatureText>
                                    </Feature>
                                ))}
                            </FeatureList>
                        </TextColumn>
                        <ImageColumn>
                            <ImageContainer>
                                <Image src={imageSrc} />
                                {imageDecoratorBlob && <ImageDecoratorBlob />}
                                <Testimonial>
                                    <QuotesLeftIcon />
                                    <Quote>{testimonial.quote}</Quote>
                                    <CustomerName>
                                        {testimonial.customerName}
                                    </CustomerName>
                                    <CustomerCompany>
                                        {testimonial.customerCompany}
                                    </CustomerCompany>
                                </Testimonial>
                            </ImageContainer>
                            <Offsetbackground />
                        </ImageColumn>
                    </Row>
                </ContentWithVerticalPadding>
            </Container>
        </Fragment>
    );
};
