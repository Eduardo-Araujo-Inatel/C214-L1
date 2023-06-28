import styled from "styled-components";

export const OpenModal = styled.div`
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const FormNewItem = styled.div`
    h2 {
        font-size: 2rem;
        font-family: "Share Tech", sans-serif;
        font-variant: small-caps;
        width: 100%;
        text-align: center;
    }

    label {
        font-size: 1.2rem;
        font-weight: bold;
        font-family: "Share Tech", sans-serif;
    }


`;

export const ContainerImage = styled.div`
    width: 450px;
    height: 215px;
    border: 1px #000 solid;

    img {
        width: 450px;
        height: 215px;
    }
`