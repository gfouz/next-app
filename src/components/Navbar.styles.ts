import styled, { css } from 'styled-components';

export interface IListProps {
  icon: React.ReactNode;
  option: string;
  comp: React.ReactNode;
}

export interface INavProps {
  color?: string;
  bg?: string;
  top?: string;
  left?: string;
  mixed?: boolean;
  dark?: boolean;
  margin?: string;
  padding?: string;
  column?: boolean;
  options: IListProps[];
}

export const StyledNavbar = styled.div`
  width: 100%;
  background-color: ${(props: INavProps) => props.bg};
  margin: ${(props: INavProps) => props.margin};
  padding: ${(props: INavProps) => props.padding || '1em 0'};

  .nav {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    &__list {
      padding: 1em 0;
    }
    &__item {
      display: flex;
      padding: 0.5em;
    }
    &__item:hover {
      color: violet;
    }
    .nav__icon {
      position: relative;
      top: 2px;
      margin: 0 0.5em 0 0;
    }

    .nav__link {
      color: #222222;
      font-weight: bolder;
      font-size: 0.8em;
      text-transform: uppercase;
    }
    .nav__link:hover {
      color: green;
    }
  }

  .nav__button {
    color: #555555;
    text-transform: uppercase;
  }
  .nav__button:focus {
    color: #000000;
    font-weight: bolder;
  }

  .hidden {
    display: none;
  }
  .visible {
    font-family: inherit;
  }

  ${(props: INavProps) =>
    props.mixed &&
    css`
      background-image: linear-gradient(#808080, #000000);
      .navbar-links {
        a {
          color: #ffffff;
        }
      }
    `}

  ${(props: INavProps) =>
    props.dark &&
    css`
      background-color: #666666;
      .nav__item {
        color: #ffffff;
      }
    `}

  ${(props: INavProps) =>
    props.column &&
    css`
      .nav {
        height: 100%;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
      }
    `}
`;
