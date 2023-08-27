import Head from 'next/head';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const NotFound = () => {

    const router = useRouter()

    useEffect(() => {
        setTimeout(()=>{
            router.push("/")
        },3000)
        
    }, []);
  return (
    <>
    <Head>
    <title>404 Error | Page not found</title>
    </Head>
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found :</h2>
      <p>Go back to the <Link href="/">Homepage</Link></p>
    </div></>
  );
}
 
export default NotFound;