import Home from 'icons/Home';
import Blog from 'icons/Blog';
import FileSearch from 'icons/FileSearch';
import Link from 'next/link';

export interface IRoutesProps {
  path: string;
  link: React.ReactNode;
  icon: React.ReactNode;
}

export const Routes: IRoutesProps[] = [
  {
    path: '/',
    icon: <Home color='#ffffff' />,
    link: <Link href='/'>Homepage</Link>,
  },
  {
    path: '/about',
    icon: <FileSearch color='#ffffff' />,
    link: <Link href='/about'>About</Link>,
  },
  {
    path: '/contact',
    icon: <FileSearch color='#ffffff' />,
    link: <Link href='/contact'>Contact</Link>,
  },
  {
    path: '/blog',
    icon: <Blog color='#ffffff' />,
    link: <a href='https://gfouz.github.io/next-blog-2023'>Blog</a>,
  },
  {
    path: '/curriculum',
    icon: <FileSearch color='#ffffff' />,
    link: <Link href='/curriculum'>Curriculum</Link>,
  },
];
