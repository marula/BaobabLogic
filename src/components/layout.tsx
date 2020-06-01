import React from 'react';
import './layout.css';

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0 1.0875rem 1.45rem',
      }}
    >
      <main>{children}</main>
      <footer
        style={{
          margin: '1.2rem 0 2.2rem',
          textAlign: 'center',
          fontSize: '0.8rem',
        }}
      >
        Note: If you want to get in touch with anybody from the Baobab Logic
        or Marula teams, feel free to reach out on Twitter
        {' '}
        <a href="https://twitter.com/rickkln">@rickkln</a>
      </footer>
    </div>
  </>
);

export default Layout;
