import Header from '@/components/layoutpage/Header';
import Footer from '@/components/layoutpage/Footer';
import Main from '@/components/layoutpage/Main';

  export default function HomePage() {
    return (
      <div className=" container bg-white">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }


