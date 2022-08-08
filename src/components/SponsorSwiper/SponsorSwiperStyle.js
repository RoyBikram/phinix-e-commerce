import styled from "styled-components";
export const SponsorSwiperContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 120px;
    justify-content: space-between;
    overflow: hidden;
    flex-wrap: wrap;
    gap:25px;
    @media only screen and (max-width: 1000px) {
        justify-content: space-around;
    }
    .SponsorContainer {
        height: 130px;
        width: 23%;
        border-radius: 12px;
        background-color: white;
        display: grid;
        place-items: center;
        min-width: 200px;
    }
    .Sponsor {

        height: 27px;
        width: fit-content;
        transition: 0.2s;
    }
    .Sponsor:hover {
    }
    .Sponsor3 {
        height: 31px;
    }
    .Sponsor4 {
        height: 29px;
    }
`;

/* .SponsorSwiper {
    display: flex;
    align-items: center;
    height: 250px;
    margin:100px 0px;
    background-color: rgb(226 226 226);
    border-radius: 24px;
    flex-direction: column;
    justify-content: space-evenly;
    overflow: hidden;
}
.Slide {
    display: grid;
    place-items: center;
}
.Sponsor {
    height: 27px;
    width: fit-content;
    filter: grayscale(1) opacity(0.4);
    transition: 0.2s;
}
.Sponsor:hover {
    filter: grayscale(0) opacity(1);
}
.Sponsor3  {
    height: 31px;
}
.Sponsor4 {
    height: 29px;
}
.Sponsor6 {
    height: 35px;
} */
