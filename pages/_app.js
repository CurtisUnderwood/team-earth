import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-blue-purple h-screen">
      <Component {...pageProps} />
    </div>
  );
  
}

export default MyApp
