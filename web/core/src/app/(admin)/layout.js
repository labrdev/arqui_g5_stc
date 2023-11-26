'use client';

import NavBar from '@components/navBar';

export default function RootLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}