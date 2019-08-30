import { Link } from "gatsby";
import React from 'react';
import styled from 'styled-components';
import placeholderImage1 from '../images/nordwood-themes-ubIWo074QlU-unsplash.jpg';
import placeholderImage2 from '../images/jose-alejandro-cuffia-_4815u_ACqQ-unsplash.jpg';
import placeholderImage3 from '../images/boxed-water-is-better-IG4hajNkbvM-unsplash.jpg';

const CardsWrapper = styled.section`
    background: ${props => props.theme.offWhite};
    padding: 32px 0;
    .cards {
        margin: 0 auto;
        max-width: 70%;
        display: grid;
        grid-gap: 32px;
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

const Card = styled(Link)`
    background: #FFF;
    width: 100%;
    height: 300px;
    position: relative;
    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
    &:hover {
        &:after {
            opacity: 1;
        }
    }
    &:after {
        transition: opacity .4s;
        transition-timing-function: ${props => props.theme.fadeInTrans};
        content: attr(title);
        color: #fff;
        background: ${props => props.theme.magentaOpacity60};
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &:nth-child(3n-1) {
      &:after {
        background: ${props => props.theme.cyanLightOpacity60};
      }
    }
    &:nth-child(3n) {
      &:after {
        background: ${props => props.theme.yellowOpacity60};
      }
    }
`;

const projectData = [
    {
        title: 'Project 1',
        image: placeholderImage1,
        path: '/'
    },
    {
        title: 'Project 2',
        image: placeholderImage2,
        path: '/'
    },
    {
        title: 'Project 3',
        image: placeholderImage3,
        path: '/'
    },
    {
        title: 'Project 1',
        image: placeholderImage1,
        path: '/'
    },
    {
        title: 'Project 2',
        image: placeholderImage2,
        path: '/'
    },
    {
        title: 'Project 3',
        image: placeholderImage3,
        path: '/'
    },
    {
        title: 'Project 1',
        image: placeholderImage1,
        path: '/'
    },
    {
        title: 'Project 2',
        image: placeholderImage2,
        path: '/'
    },
    {
        title: 'Project 3',
        image: placeholderImage3,
        path: '/'
    },
]

const Cards = () => {
    return (
        <CardsWrapper style={{ minHeight: '700px' }}>
            <div className="cards">
                {projectData.map((project) => (
                    <Card title={project.title} to={project.path} >
                        <img src={project.image} alt={project.title} />
                    </Card>
                ))}
            </div>
        </CardsWrapper>
    );
}
 
export default Cards;