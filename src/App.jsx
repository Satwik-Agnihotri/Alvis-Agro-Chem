import React from 'react';
import { Helmet } from 'react-helmet';
import bgImage from './assets/20250605_1330_Nature-Inspired Website Background_remix_01jwzhk9fxeywrvyyqhq9myzrc.webp';

function App() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center px-4">
      {/* ✅ Fullscreen Background */}
      <div
        className="fixed inset-0 z-[-1] brightness-[0.75]"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />

      {/* Metadata */}
      <Helmet>
        <title>We'll Be Right Back | Alvis Agro Chem</title>
        <meta name="description" content="Alvis Agro Chem is currently undergoing a refresh. We'll be back soon with something great!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      {/* Coming Soon Message */}
      <div className="max-w-2xl p-8 bg-white/80 rounded-2xl shadow-xl border border-green-500">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">We'll Be Right Back 🌱</h1>
        <p className="text-lg md:text-xl text-green-800">
          Alvis Agro Chem is brewing something organic and powerful. <br />
          Our new website will be live shortly. Thank you for your patience!
        </p>
        <p className="mt-6 text-green-600 text-sm">— Team Alvis</p>
      </div>
    </div>
  );
}

export default App;
