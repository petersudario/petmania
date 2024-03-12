import { Link, Head } from '@inertiajs/react';
import Navbar from './Navbar.jsx';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <Head title="homepage" />
      <Navbar />
    </>
  );
} 
