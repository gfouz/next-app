import styled, { css } from "styled-components";

const zoom = css`
  transition: transform 200ms ease-in;
  &:hover {
    transform: scale(1.2);
  }
  z-index: 10;
`;

const halfSection = css`
  @media (min-width: 750px) {
    width: 50%;
  }
`;
const center = css`
  justify-content: center;
  align-items: center;
`;
const centerTop = css`
  justify-content: flex-start;
  align-items: center;
`;
const centerBottom = css`
  justify-content: flex-end;
  align-items: center;
`;
const leftTop = css`
  justify-content: flex-start;
  align-items: flex-start;
`;
const leftCenter = css`
  justify-content: center;
  align-items: flex-start;
`;
const leftBottom = css`
  justify-content: flex-end;
  align-items: flex-start;
`;
const rightTop = css`
  justify-content: flex-start;
  align-items: flex-start;
`;
const rightCenter = css`
  justify-content: center;
  align-items: flex-end;
`;
const rightBottom = css`
  justify-content: flex-end;
  align-items: flex-end;
`;

interface IProps {
  image: string;
  zoom?: boolean;
  align?: string;
  halfSection?: boolean;
  center?: boolean;
  centerTop?: boolean;
  centerBottom?: boolean;
  leftCenter?: boolean;
  leftTop?: boolean;
  leftBottom?: boolean;
  rightCenter?: boolean;
  rightTop?: boolean;
  rightBottom?: boolean;
  children?: React.ReactNode;
}

const LayersContainer = (props: IProps) => {
  const { children, image, zoom } = props;
  return (
    <PictureContainer {...props}>
      <BackgroundImage image={image} zoom={zoom} />
      <OverlapedContainer {...props}>{children}</OverlapedContainer>
    </PictureContainer>
  );
};

export default LayersContainer;

const PictureContainer = styled.div<IProps>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  ${(props) => props.halfSection && halfSection}
  .background-image {
    max-width: 100%;
    height: auto;
  }
`;
const BackgroundImage = styled.img.attrs<IProps>((props) => ({
  src: `./images/${props.image}`,
  alt: "anyImage",
}))<IProps>`
  max-width: 100%;
  height: auto;
  ${(props) => props.zoom && zoom};
`;
const OverlapedContainer = styled.div<IProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  ${(props) => props.center && center};
  ${(props) => props.centerTop && centerTop};
  ${(props) => props.centerBottom && centerBottom};
  ${(props) => props.leftCenter && leftCenter};
  ${(props) => props.leftTop && leftTop};
  ${(props) => props.leftBottom && leftBottom};
  ${(props) => props.rightCenter && rightCenter};
  ${(props) => props.rightTop && rightTop};
  ${(props) => props.rightBottom && rightBottom};
  flex-direction: column;
`;
