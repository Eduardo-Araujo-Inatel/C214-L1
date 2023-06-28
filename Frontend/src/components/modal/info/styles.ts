import styled from "styled-components";

export const OpenModal = styled.div`
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ContainerImage = styled.div`
    img {
        width: 300px;
    }
`

export const ContainerInfo = styled.div`
    display: flex;
    height: 230px;
`

export const ContainerAbout = styled.div`
    height: 135px;
    margin-right: 10px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 8px; 
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 20px;
      height: 1px
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #555;
    }
`
export const ContainerPrice = styled.div`
    height: 40px;
`

export const ContainerCategories = styled.div`
    height: 40px;
`