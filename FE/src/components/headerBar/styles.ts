import styled from "styled-components";

export const TitleDiv = styled.div`
    width: 100vw;
    height: 17vh;
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #aaaaaaaa;
    border-left: 0px;
    border-right: 0px;
`;

export const Title = styled.h2`
    font-size: 40px;
    background: #f5f5f5;
    font-family: 'Share Tech', sans-serif;
    font-variant: small-caps;
`;

export const NavBar = styled.div`
    width: 80vw;
    height: 35px;
    display: flex;
    justify-content: space-around;
`;

export const NavBarOption = styled.span`
    font-family: 'Share Tech', sans-serif;
    font-variant: small-caps;
    font-size: 22px;
    cursor: pointer;

    :hover {
        text-shadow:
        0 0 7px #aaa,
        0 0 100px #fff;
    }
`;