import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 450px;
    display: flex;
    flex-direction: column;
    border: 2px solid 	#FFF8DC;
    img {
        width: 100%;
        height: 100%;
    }
    h3, p {
        background-color: #FFE4C4;
        font-weight: bold;
        font-size: 15px;
        padding: 0.5rem;
    }
    h3 {
        text-align: center;
        color: #000;
    }
    p {
        text-align: justify;
        color: 	#1C1C1C;
    }

    @media screen and (max-width: 768px) {
        img {
            width: 100%;
            height: 100%;
        }
        h3, p {
          padding: none;
        }
        h3 {
            text-align: center;
            font-size: 7.5px;
        }
        p {
            text-align: center;
            font-weight: none;
            padding: none;
            font-size: 7px;
        }
        width: 100%;
        height: 280px;
    }
`