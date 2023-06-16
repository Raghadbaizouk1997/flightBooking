
import { useContext } from 'react';
import { useRouter } from 'next/router';
import AuthContext from './_app';

const Home = () => {
  const router = useRouter();
  const isAuthenticated = useContext(AuthContext);

  // Redirect to login page if the user is not authenticated
  if (!isAuthenticated) {
    router.push('/login');
    return null; // Render nothing while redirecting
  }

  return <h1>Welcome to the Home Page!</h1>;
};

export default Home;
