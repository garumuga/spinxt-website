import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Mesh Aprons",
    price: "₹35",
    description: "High quality Mesh Aprons for textile machinery.",
    image: "https://youquantex.com/Uploads/15579102851557910078153831592515367235025b89fb231cf54.JPG",
  },
  {
    id: 2,
    name: "Nylon Aprons",
    price: "₹30",
    description: "High quality Nylon Aprons for textile machinery.",
    image: "https://www.yamauchi-rubber.com/wp/wp-content/uploads/2024/04/pierced_aprons.webp",
  },
  {
    id: 3,
    name: "Jocaky Pulliy",
    price: "₹45",
    description: "Jocaky Pulliy.",
    image: "https://tiimg.tistatic.com/fp/1/001/881/jockey-pulley-109.jpg   ",
  },
];

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-red-700 text-white p-2 flex justify-between items-center">
        <div className="text-xl font-bold">SpinXT Products</div>
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Parts</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-red-600 text-white p-4 space-y-2">
          <li><a href="#" className="block">Home</a></li>
          <li><a href="#" className="block">Parts</a></li>
          <li><a href="#contact" className="block">Contact</a></li>
        </ul>
      )}

      {/* Hero Section */}
      <section className="text-center py-12 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Reliable Textile Machinery Parts</h1>
        <p className="text-lg">Your trusted source for high-performance textile components.</p>
      </section>

      {/* Products Section */}
      <section className="p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {products.map(product => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <div className="text-lg font-semibold mt-2">{product.price}</div>
              <button className="mt-4 bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="name" type="text" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="message" rows="4" placeholder="Type your message here..."></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-6 rounded" type="button">
                Send Message
              </button>
            </div>
          </form>

          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h3 className="text-xl font-semibold mb-2">Our Office:</h3>
            <p className="text-gray-700 mb-2">No 41 Spoorthi House,</p>
            <p className="text-gray-700 mb-2">Co-operative society,</p>
            <p className="text-gray-700 mb-2">Herohalli, Bangalore North,</p>
            <p className="text-gray-700 mb-2">Bangalore-560091, Karnataka,</p>
             <p className="text-gray-700 mb-2">India</p>
            <p className="text-gray-700 mb-2">Email: spinxt.tech@gmail.com</p>
            <p className="text-gray-700 mb-4">Phone: +91 7259960799</p>
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.643808964547!2d77.48665450826232!3d12.994619014325117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3c6894b80c75%3A0x693dc423198e412b!2s41%2C%20Herohalli%20Main%20Rd%2C%20Sunkadakatte%2C%20Bengaluru%2C%20Karnataka%20560091%2C%20India!5e0!3m2!1sen!2sus!4v1750902137163!5m2!1sen!2sus"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              className="rounded mb-4"
            ></iframe>
            <div className="flex space-x-4 justify-center">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.07C22 6.6 17.5 2 12 2S2 6.6 2 12.07C2 17.1 5.66 21.2 10.44 22v-7h-3v-3h3v-2.3c0-3 1.79-4.6 4.5-4.6 1.3 0 2.64.23 2.64.23v3h-1.49c-1.47 0-1.94.92-1.94 1.87V12h3.3l-.53 3h-2.77v7C18.34 21.2 22 17.1 22 12.07z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.5.58-2.26.69a4.1 4.1 0 001.8-2.27 8.2 8.2 0 01-2.6.98 4.13 4.13 0 00-7.1 3.76A11.7 11.7 0 013 5.13a4.12 4.12 0 001.27 5.5 4.06 4.06 0 01-1.87-.52v.05a4.13 4.13 0 003.3 4.04 4.19 4.19 0 01-1.86.07 4.14 4.14 0 003.86 2.88A8.3 8.3 0 012 19.54 11.6 11.6 0 008.29 21c7.55 0 11.68-6.25 11.68-11.68 0-.18-.01-.35-.02-.53A8.3 8.3 0 0022.46 6z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="w-6 h-6 text-red-700" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-9 19H7v-9h3v9zm-1.5-10.27c-.97 0-1.75-.79-1.75-1.75S7.53 5.23 8.5 5.23c.96 0 1.75.79 1.75 1.75s-.79 1.75-1.75 1.75zm11.5 10.27h-3v-4.5c0-1.08-.92-2-2-2s-2 .92-2 2v4.5h-3v-9h3v1.2c.59-.86 1.57-1.2 2.5-1.2 1.93 0 3.5 1.57 3.5 3.5v5.5z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-700 text-white text-center py-2 mt-8">
        &copy; {new Date().getFullYear()} SpinXT Products Private Limited. All rights reserved.
      </footer>
    </div>
  );
};

export default App;


