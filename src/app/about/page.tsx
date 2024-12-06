import Image from 'next/image';

export default function About() {
  return (
    <main className="flex flex-col">
      {/* Banner Image Section */}
      <section className="relative h-[40vh] min-h-[300px]">
        <div className="absolute inset-0">
          <Image
            src="/images/about-banner.jpg"
            alt="Provence vineyard landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark/30" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white text-center font-bold drop-shadow-lg">
            About the Project
          </h1>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif text-earth-dark text-center mb-8">
            Our Vision
          </h2>
          <div className="prose prose-lg mx-auto text-dark/80">
            <p>
              We envision creating a unique community of Stanford GSB alumni centered around a 
              beautiful vineyard and olive grove property in Provence, France. This isn&apos;t just 
              about owning a piece of land—it&apos;s about building a legacy, fostering connections, 
              and sharing extraordinary experiences.
            </p>
            <p>
              Our goal is to acquire and develop a property that will serve as both a productive 
              agricultural venture and a gathering place for our community. Members will have the 
              opportunity to participate in harvests, learn about wine-making and olive cultivation, 
              and enjoy the fruits of our collective labor.
            </p>
          </div>
        </div>
      </section>

      {/* Future Plans Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif text-earth-dark text-center mb-8">
            And Then What?
          </h2>
          <div className="prose prose-lg mx-auto text-dark/80">
            <p>
              Once we&apos;ve established our core community and secured the property, we&apos;ll focus on:
            </p>
            <ul>
              <li>Developing sustainable agricultural practices for both the vineyard and olive grove</li>
              <li>Creating comfortable accommodations for community members</li>
              <li>Organizing regular events and gatherings throughout the year</li>
              <li>Building partnerships with local vintners and agricultural experts</li>
              <li>Establishing our own wine and olive oil production facilities</li>
            </ul>
            <p>
              The property will evolve based on our community&apos;s interests and needs, always 
              maintaining its core purpose as a place for connection, learning, and enjoyment.
            </p>
          </div>
        </div>
      </section>

      {/* Financial Model Section */}
      <section className="py-16 bg-olive-light/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif text-earth-dark text-center mb-8">
            Wait! What is the Financial Model Here?
          </h2>
          <div className="prose prose-lg mx-auto text-dark/80">
            <p>
              We&apos;re currently developing a detailed financial model that will balance 
              accessibility with sustainability. The structure will likely involve:
            </p>
            <ul>
              <li>Initial membership contributions to fund the property acquisition</li>
              <li>Annual dues to cover operational costs and improvements</li>
              <li>Optional participation in special projects or expansions</li>
              <li>Revenue sharing from wine and olive oil production</li>
            </ul>
            <p>
              Our focus is on creating a model that makes this unique opportunity accessible to 
              as many GSB alumni as possible while ensuring the project&apos;s long-term viability. 
              Detailed financial projections and membership options will be shared as we move forward.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
