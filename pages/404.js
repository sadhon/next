import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <>
      <h3>404 error page</h3>
      <p>
        This is not exist. go to the
        <br /> <Link href='/'> Homepage</Link>
      </p>
    </>
  );
};

export default error;
