import React from 'react';
import styled from 'styled-components';

const cardWidth = 400;
const MincardWidth = 350;
const BackImageWidth = 100;
const borderRadius = 8;
const transition = 'all 0.45s ease';

const BackImage = styled.figure`
  z-index: 200;
  position: relative;
  margin: 0;
  padding: 0;
  width: ${BackImageWidth}%;
  height: 200px;
  background: url(${(props) => props.image}) 0 0 no-repeat;
  background-size: cover;
  border-radius: ${borderRadius}px ${borderRadius}px 0 0;
  overflow: hidden;
  backface-visibility: hidden;
  transition: ${transition};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--grey-1);
    transition: ${transition};
  }
`;

const Content = styled.div`
display: flex;
  z-index: 200;
  flex-direction: column;
  position: relative;
  padding: 20px 20px 30px;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 4px;
  font-size: 1.25em;
  font-weight: 500;
  transition: ${transition};
`;

const Description = styled.span`
  display: block;
  font-size: 0.875em;
  color: #999999;
  transition: ${transition};
  transition-delay: 0.04s;
`;

const Block = styled.div`
display: flex;
height: 40px;
width: auto;
`;

const BottomBar = styled.p`
display: block;
  font-size: 0.875em;
  width: 50%;
  color: #999999;
  transition: ${transition};
  transition-delay: 0.04s;
`;
const Authors = styled.a`
  display: block;
  width: 50%;
    background: ${(props) => props.background && props.background};
    border-radius: 0 0 ${borderRadius}px ${borderRadius}px;
    transition: ${transition};
`;
const Style = styled.button`
  position: relative;
  flex-shrink: 0;
  width: ${cardWidth}px;
  min-width: ${MincardWidth}px;
  text-align: left;
  background: #ffffff;
  border-radius: ${borderRadius}px;
  cursor: pointer;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.12), 0 20px 20px -10px rgba(0, 0, 0, 0.125);
  transition: ${transition};

  &:hover {
    transform: scale(1.04);

    ${Title},
    ${Description},
    ${BottomBar} {
      transform: scale(0.92);
    }

    ${Title} {
      transform: translateY(-10px);
    }

    ${Description} {
      transform: translateY(-12px);
    }

    ${BottomBar} {
      border-radius: ${borderRadius - 2}px;
      transform: translateY(-14px) scale(0.9);
    }

    ${BackImage} {
      transform: translateY(4px) scale(0.92);
      border-radius: ${borderRadius - 2}px;

      &::before {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

const posts = ({ author, usedlan, title, description, image }) => (
  <Style>
    <BackImage image={image} />
    <Content>

      <Block>
      <Title className='flex'>{title}</Title>
      <Description>{description}</Description>
      </Block>

      <Block>
      <BottomBar>{usedlan}</BottomBar>
      <Authors>{author}</Authors>
      </Block>
    </Content>
  </Style>
);

export default posts;
