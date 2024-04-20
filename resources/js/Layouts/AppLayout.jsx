import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import React from 'react';

export default function AppLayout({ auth, children }) {
  return (
    <React.Fragment>
      <Navbar auth={auth} />
      <main>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  )
}