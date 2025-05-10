import WhatsAppButton from '../components/WhatsAppButton';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <WhatsAppButton />
    </>
  );
}

export default MyApp; 