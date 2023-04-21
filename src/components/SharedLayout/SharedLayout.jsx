import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import {
  Box,
  Header,
  TitleBox,
  Heading,
  Nav,
  StyledLink,
} from './SharedLayout.styled';
import { FcFilmReel } from 'react-icons/fc';

const SharedLayout = () => {
  return (
    <Box>
      <Header>
        <TitleBox>
          <FcFilmReel size={40} />
          <Heading>Movie Collection</Heading>
        </TitleBox>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </main>
    </Box>
  );
};

export default SharedLayout;
