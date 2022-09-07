import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgb(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.7rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: #515151;
  }
`;

export const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: #202737;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

export const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

export const Info = styled(motion.div)`
  text-align: center;
`;

export const Platform = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

export const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

export const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

// style haye taarif shode dar home, global-styles, games tadakhol nadarand?
