import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  font-size: 15px;
  margin : 1em;
  display: flex;
  flex-direction: column;
`;

const Image = styled.div`
  flex: 1;
  background-color: pink;
  height: 100px;
  border-radius: 3px;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;


const SongThumbnail = ({ valence,arousal,artist_name,track_name, genre}) => (
    <Container>
      <ImageContainer>
        <Image/>
        <Rating>
            {genre}
        </Rating>
      </ImageContainer>
      <Title>
        {track_name.length > 18 ? `${track_name.substring(0, 18)}...` : track_name}
      </Title>
      <Year>{artist_name}</Year>
    </Container>
);

SongThumbnail.propTypes = {
  artist_name: PropTypes.string.isRequired,
  track_name: PropTypes.string.isRequired,
  valence: PropTypes.number,
  arousal: PropTypes.number,
  genre: PropTypes.string,
};

export default SongThumbnail;