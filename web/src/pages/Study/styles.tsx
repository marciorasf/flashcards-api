import styled from "styled-components";

import colors from "../../assets/styles/colors";
import CustomButton from "../../components/CustomButton";
import CustomIconButton from "../../components/CustomIconButton";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: strech;
  width: 100%;
  border-radius: 0.4rem;
  overflow: hidden;
  background-color: ${colors.bgLighter};
`;

export const CardTitle = styled.div`
  display: flex;
  padding: 1.6rem;
  font-weight: 600;
  justify-content: space-between;
`;

export const CardContent = styled.div`
  min-height: 24rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
`;

export const CardText = styled.div`
  cursor: default;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 0.8rem;
  background-color: ${colors.bgLight};
`;

export const LeftIconButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const IconButton = styled(CustomIconButton)`
  + button {
    margin-left: 0.8rem;
  }
`;

export const RightButton = styled(CustomButton)`
  height: initial;
  display: flex;
  align-items: center;
`;

export const NextButton = styled(CustomButton)`
  margin-top: 2.4rem;
  color: ${colors.secondary};
  width: 100%;
  border: 1px solid ${colors.secondary};
`;

export const FilterButton = styled(CustomIconButton)`
  color: white;
`;

export const ModalContent = styled.div`
  background-color: ${colors.primary};
  padding: 3.2rem;
  border-radius: 0.4rem;
`;

export const ModalTitle = styled.h3`
  color: white;
  font-size: 3.2rem;
  font-weight: bold;
`;

export const FiltersForm = styled.form``;

export const OkButton = styled(CustomButton)`
  width: 100%;
  color: ${colors.textInSecondary};
  background-color: ${colors.secondary};
`;
