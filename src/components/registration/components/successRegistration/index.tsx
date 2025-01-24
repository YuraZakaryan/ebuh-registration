import { useAppDispatch } from "../../../../hooks/redux";
import { clearUser } from "../../../../store/reducer/userSlice";
import SuccessIcon from "./../../../../assets/icon/success.svg";

import LeftArrowIcon from "./../../../../assets/icon/left-arrow.svg";
import {
  StyledSuccessIconWrapper,
  StyledSuccessBackButton,
  StyledSuccessMessage,
  StyledSuccessMessageWrapper,
} from "./styles";

export const SuccessRegistration = () => {
  const dispatch = useAppDispatch();

  const handleBack = () => {
    dispatch(clearUser());
  };

  return (
    <StyledSuccessMessageWrapper>
      <StyledSuccessIconWrapper>
        <SuccessIcon />
      </StyledSuccessIconWrapper>
      <StyledSuccessMessage>
        We're preparing your account. Soon, an email verifying your registration
        will be sent to you.
      </StyledSuccessMessage>
      <StyledSuccessBackButton icon={<LeftArrowIcon />} iconPosition="start" onClick={handleBack}>
        Back to Sign In
      </StyledSuccessBackButton>
    </StyledSuccessMessageWrapper>
  );
};
