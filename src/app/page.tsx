import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-provence.jpg"
            alt="Vineyard in Provence"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-dark/35" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 drop-shadow-lg">
            Join the Exclusive GSB Vineyard & Olive Grove Project
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow">
            An exceptional Provence lifestyle experience for the Stanford GSB community.
          </p>
          <Link 
            href="/join"
            className="btn-primary text-lg"
          >
            Join the Community
          </Link>
        </div>
      </section>

      {/* About Project Summary */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-earth-dark text-center mb-8">
            About the Project
          </h2>
          <p className="text-lg text-dark/80 text-center mb-10">
            Experience the essence of Provence through our exclusive vineyard and olive grove project. 
            Nestled in the heart of France&apos;s most celebrated wine region, this unique venture offers 
            GSB community members the opportunity to be part of a distinctive lifestyle investment, 
            combining the pleasures of wine-making with the charm of Provençal living.
          </p>
          <div className="text-center">
            <Link 
              href="/about"
              className="inline-flex items-center text-olive hover:text-olive-dark transition-colors"
            >
              <span className="mr-2">Learn More</span>
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-olive-light/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-earth-dark mb-4">
            Be Part of Something Extraordinary
          </h2>
          <p className="text-lg text-dark/80 mb-8 max-w-2xl mx-auto">
            Join fellow GSB community members in this unique opportunity to own a piece of 
            Provence and create lasting memories together.
          </p>
          <Link 
            href="/join"
            className="btn-primary"
          >
            Learn About Membership
          </Link>
        </div>
      </section>
    </main>
  );
}