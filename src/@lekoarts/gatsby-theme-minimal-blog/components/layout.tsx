/** @jsx jsx */
import React from 'react';
import { Global } from '@emotion/core';
import { Box, Container, jsx } from 'theme-ui';
import 'typeface-ibm-plex-sans';
import SEO from './seo';
import Header from './header';
import Footer from './footer';
import CodeStyles from '../styles/code';
import SkipNavLink from './skip-nav';
import { MDXProvider } from '@mdx-js/react';

type LayoutProps = { children: React.ReactNode; className?: string };

const Layout = ({ children, className = `` }: LayoutProps) => (
  <MDXProvider
    components={
      {
        //   table: (props) => (
        //     <div style={{ overflow: 'scroll', width: '100%' }}>
        //       <table
        //         {...props}
        //         sx={{
        //           width: '100%',
        //           marginTop: '2rem',
        //           marginBottom: '2rem',
        //           borderCollapse: 'separate',
        //           borderSpacing: '0',
        //         }}
        //       ></table>
        //     </div>
        //   ),
      }
    }
  >
    <Global
      styles={(theme) => ({
        '*': {
          boxSizing: `inherit`,
        },
        html: {
          WebkitTextSizeAdjust: `100%`,
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        '[hidden]': {
          display: `none`,
        },
        '::selection': {
          backgroundColor: theme.colors.text,
          color: theme.colors.background,
        },
        a: {
          transition: `all 0.3s ease-in-out`,
          color: `text`,
        },
      })}
    />
    <SEO />
    <SkipNavLink>Skip to content</SkipNavLink>
    <Container>
      <Header />
      <Box id="skip-nav" sx={{ ...CodeStyles }} className={className}>
        {children}
      </Box>
      <Footer />
    </Container>
  </MDXProvider>
);

export default Layout;
