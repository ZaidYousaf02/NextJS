import Link from 'next/link';
import styles from '../../styles/Jobs.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    return {
      props: { zaid: data }
    }
  }
  
  const Zaid = ({ zaid }) => {
    console.log(zaid)
  
    return (
      <div>
        <h1>All User list</h1>
        {zaid.map(zaid => (
          <Link href={'/zaid/' + zaid.id} key={zaid.id}>
            <div className={styles.single} >
              <h3>{ zaid.name }</h3>
            </div>
          </Link>
        ))}
      </div>
    );
  }
   
  export default Zaid;