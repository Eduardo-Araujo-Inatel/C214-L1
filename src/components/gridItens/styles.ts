import styled from "styled-components";

export const GridContainer = styled.div`
    padding: 50px auto;
    margin-top: 2.5vh;
    margin-bottom: 2.4vh;
    padding-right: 20px;
    width: 80vw;
    height: 55vh;
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 1.5vw;
`;