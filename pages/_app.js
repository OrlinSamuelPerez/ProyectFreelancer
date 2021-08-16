import '../styles/globals.css';
import Drawers from "../Components/Drawers";
import Head from "next/head";
import {auth} from "../Database/Initialize"
import { useState } from "react";
import Login from "./Login"
function MyApp({ Component, pageProps }) {
  const [userName, setUserName] = useState(null);
  return (
    <>
      <Head>
        <title>Proyect Freelancer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {auth.onAuthStateChanged((user) => setUserName(user))}
      {
        userName?
          <Drawers>
            <Component {...pageProps} />
          </Drawers>
        :<Login/>
      }
    </>
  )
}

export default MyApp
