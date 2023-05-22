import styled from "styled-components";

export const CardBody = styled.div`
    background: rgb(245, 245, 245);;
    height: 28vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #aaaaaaaa;

    img {
        width: 150px;
    }
`;

export const CardName = styled.h2`
    font-family: 'Share Tech', sans-serif;
    font-variant: small-caps;
    font-size: 20px;
    margin: 0;
`;

export const CardCategory = styled.span`
    font-family: 'Share Tech', sans-serif;
    font-variant: small-caps;
    font-size: 14px;
    margin: 0;
`;

export const CardPrice = styled.h3`
    font-family: 'Share Tech', sans-serif;
    font-variant: small-caps;
    font-size: 16px;
    margin: 0;
`;

export const CardSelect = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    svg {
        cursor: pointer;
        padding: 0 20px;
    }
`;