import styled from 'styled-components';

export const BREAKPOINTS = {
  SP: '480px',
  TABLET: '768px',
  PC: '1024px',
};

export const PcViewOnly = styled.div`
  @media (max-width: ${BREAKPOINTS.PC}) {
    display: none;
  }
`;

export const MobileViewOnly = styled.div`
  @media (min-width: ${BREAKPOINTS.PC}) {
    display: none;
    @media (max-width: ${BREAKPOINTS.PC}) {
      display: block;
    }
  }
`;
