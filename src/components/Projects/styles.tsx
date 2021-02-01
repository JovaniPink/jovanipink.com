import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Projects = styled.div`
  ${tw`max-w-screen-sm mx-auto w-full px-0 sm:px-16 mb-4`};
`;

export const Project = styled.div`
  ${tw`flex flex-col items-center text-center mt-4`};
`;

export const Image = styled.figure`
  ${tw`w-16 h-16 mx-auto border border-theme-450 rounded-full`};

  img {
    ${tw`border-4 border-white rounded-full`};
  }
`;

export const Title = styled.h3`
  ${tw`font-semibold my-4`};
`;