import styled from 'styled-components'
import {Variables} from '../../variables/variables'

export const ProductImgSliderContainer = styled.div`

  /* margin: 20px; */
/* .carousel-container {
} */

.ImgContainer {
  height: 100%;
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
}
.selected-image {
  margin-bottom: 15px;
  border-radius: 24px;
  height: 400px;
  width: 400px;
  padding: 30px;
  background-color: white;
}

.carousel {
  position: relative;
}

.carousel__images {
  display: flex;
  max-width: 100%;
  overflow-x: hidden;
  justify-content: center;
}

.carousel__image-selected {
  border: 3px solid ${Variables.PrimaryColor} !important;
}

.carousel__image {
  margin-right: 10px;
  height: 90px;
  width: 90px;
  border: 3px solid #e1e1e1;
  /* background-position: center center;
  background-repeat: no-repeat;
  background-size: cover; */
  border-radius: 12px;
  overflow: hidden;
  background-color: white;
  padding: 7px;
}

`