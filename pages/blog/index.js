import Link from 'next/link';
import Navbar from '../../components/Navbar';
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const index = ({ data }) => {
  return (
    <>
      <Navbar />
      <ul>
        {data.map((cuElm, ind) => {
          return (
            <li key={ind}>
              <Link href={`/blog/${cuElm.id}`}>
                <a> {cuElm.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default index;
