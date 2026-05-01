/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Impact from './components/Impact';
import Services from './components/Services';
import ProductShowcase from './components/ProductShowcase';
import AppIframe from './components/AppIframe';
import Projects from './components/Projects';
import Media from './components/Media';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Impact />
        <Services />
        <ProductShowcase />
        <AppIframe />
        <Projects />
        <Media />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

