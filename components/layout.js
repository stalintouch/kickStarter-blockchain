import React, { Component } from 'react';
import Header from './Header';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';

export default (props) =>{
  return (
    <div>
      <Container>
        <Head>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
          <title>Kickstater blockchain</title>
        </Head>
        <style jsx global>{`
          body { 
            background-image: url("https://www.elindependiente.com/wp-content/uploads/2017/07/blockchain-g.gif");
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
            font: 14px menlo;
            color: #fff;

          }
          h1{
            text-align:center;
            font-size: 48px;
            padding: 30px 0 60px 0;
          }
          .render-campaigns .ui.card:hover{
            transform: scale(1.1);
            z-index:999;
            curson:pointer
          }
          .render-campaigns .header{
            word-break: break-all;
          }
          .render-campaigns .meta{
            padding: 15px 0;
          }
        `}</style>
        <Header />

        {/*this childer you get it by placing layout component in every component and then passing everything from that component as props*/}
        {props.children}
      </Container>
    </div>
  )
};