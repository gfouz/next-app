import styled from 'styled-components';
import Link from 'next/link';

//const blogLink = "https://gfouz.github.io/next-blog-2023";

const AllLinks = () => {
  return (
    <>
      <ListItem>
        <Link href='/about'>about</Link>
      </ListItem>
      <ListItem>
        <Link href='/contact'>contact</Link>
      </ListItem>
      <ListItem>
        <Link href='/curriculum'>curriculum</Link>
      </ListItem>
    </>
  );
};

export default AllLinks;
export const SimpleNavbar = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const ListItem = styled.li`
  list-style-type: none;
  a {
    text-decoration: none;
    color: #f1f1f1;
  }
`;
