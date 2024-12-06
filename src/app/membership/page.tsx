import Link from 'next/link';

interface MembershipTier {
  title: string;
  description: string;
  benefits: string[];
  ctaText: string;
  ctaLink: string;
  featured?: boolean;
}

const membershipTiers: MembershipTier[] = [
  {
    title: "Founding Members/Investors",
    description: "Be part of the core team shaping this unique venture from the ground up. Founding members will have a direct stake in the property and its development.",
    benefits: [
      "Direct ownership stake in the property",
      "Priority access to accommodations",
      "Voting rights on major decisions",
      "Share of wine and olive oil production",
      "Exclusive access to founding member events",
      "Legacy rights for future generations"
    ],
    ctaText: "Express Interest",
    ctaLink: "/join",
    featured: true
  },
  {
    title: "Club Members",
    description: "Join our community with privileged access to the property and its products, without the responsibilities of ownership.",
    benefits: [
      "Regular access to the property",
      "Discounted stays and products",
      "Participation in harvests and events",
      "Annual wine and olive oil allocation",
      "Access to member-only gatherings",
      "Networking opportunities"
    ],
    ctaText: "Join the Club",
    ctaLink: "/join"
  },
  {
    title: "The Friends",
    description: "Stay connected with our community and enjoy special access to events and products without a formal membership commitment.",
    benefits: [
      "Priority purchase rights for products",
      "Invitation to select events",
      "Regular updates on project progress",
      "Opportunity to upgrade membership",
      "Access to community newsletter",
      "Special event pricing"
    ],
    ctaText: "Stay Connected",
    ctaLink: "/join"
  }
];

export default function Membership() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-cream py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-earth-dark mb-6">
            Membership Options
          </h1>
          <p className="text-lg text-dark/80 max-w-2xl mx-auto">
            Choose your level of involvement in our unique Provence vineyard and olive grove community.
            Each tier offers a different way to be part of this extraordinary project.
          </p>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {membershipTiers.map((tier) => (
            <div
              key={tier.title}
              className={`flex flex-col p-8 rounded-lg ${
                tier.featured
                  ? 'bg-olive-light/20 border-2 border-olive'
                  : 'bg-cream/50 border border-cream'
              }`}
            >
              <h2 className="text-2xl font-serif text-earth-dark mb-4">
                {tier.title}
              </h2>
              <p className="text-dark/80 mb-6">
                {tier.description}
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-olive flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-dark/80">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={tier.ctaLink}
                className={`btn-primary w-full text-center ${
                  tier.featured ? 'bg-olive hover:bg-olive-dark' : ''
                }`}
              >
                {tier.ctaText}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-olive-light/10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-earth-dark mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-dark/80 mb-8 max-w-2xl mx-auto">
            Take the first step towards being part of this extraordinary venture in Provence.
            Choose the membership tier that best suits your interests and level of involvement.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us to Learn More
          </Link>
        </div>
      </section>
    </main>
  );
}
