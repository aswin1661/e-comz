import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductFeed from "./components/ProductFeed";
import Footer from "./components/Footer";
import CategoryNav from "./components/CategoryNav";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="">
        <Hero />
        <CategoryNav />
        <ProductFeed />
      </main>

      <Footer />
    </div>
  );
}
