import { Map, Toc } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, Container, Stack } from '@mui/material';
import Link from 'next/link';
import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <AppBar position="fixed">
        <Container>
          <Toolbar disableGutters>
            <Typography variant="h6">MUSEUMS</Typography>
            <Stack direction="row" marginLeft={7} gap={3}>
              <Link href="/" style={{ textDecoration: 'none', color: '#fff' }}>
                <Stack direction="row" gap={1} alignItems="center">
                  <Map />
                  <Typography display="inline" variant="body1">
                    Карта
                  </Typography>
                </Stack>
              </Link>
              <Link href="/tables" style={{ textDecoration: 'none', color: '#fff' }}>
                <Stack direction="row" gap={1} alignItems="center">
                  <Toc />
                  <Typography display="inline" variant="body1">
                    Таблицы
                  </Typography>
                </Stack>
              </Link>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Container sx={{ mt: '80px' }}>{children}</Container>
      </main>
    </>
  );
};

export default MainLayout;
