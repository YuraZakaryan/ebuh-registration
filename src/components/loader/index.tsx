import { StyledLoader, StyledLoaderWrapper } from '@styles';

export const Loader = () => {
  return (
    <StyledLoaderWrapper>
      <StyledLoader
        color="blue"
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </StyledLoaderWrapper>
  );
};
