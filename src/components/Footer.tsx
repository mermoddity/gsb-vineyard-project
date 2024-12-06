import Link from 'next/link';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Membership', href: '/membership' },
    { name: 'Expertise', href: '/expertise' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/gsb_vineyard',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.355 4.645A9.918 9.918 0 0012.018 2c-5.485 0-9.95 4.464-9.95 9.949 0 1.752.458 3.463 1.329 4.97L2 22l5.233-1.237a9.916 9.916 0 004.738 1.194h.004c5.485 0 9.95-4.464 9.95-9.95 0-2.659-1.035-5.159-2.914-7.038zm-7.337 15.313h-.003a8.234 8.234 0 01-4.197-1.148l-.301-.179-3.123.819.833-3.043-.196-.312a8.234 8.234 0 01-1.26-4.386c0-4.559 3.71-8.269 8.27-8.269 2.209 0 4.283.861 5.842 2.42a8.27 8.27 0 012.42 5.842c0 4.559-3.71 8.269-8.27 8.269zm4.542-6.193c-.249-.124-1.472-.726-1.7-.81-.228-.083-.394-.124-.56.125-.166.248-.643.81-.788.975-.145.166-.29.186-.54.062-.248-.124-1.05-.387-2-1.234-.74-.659-1.239-1.473-1.384-1.722-.145-.248-.015-.382.109-.506.112-.112.249-.29.373-.435.124-.145.166-.248.249-.414.083-.165.041-.31-.021-.434-.062-.124-.56-1.35-.768-1.848-.202-.487-.407-.42-.56-.428-.145-.007-.31-.009-.477-.009-.166 0-.435.062-.663.31-.228.249-.871.852-.871 2.077 0 1.226.891 2.41 1.016 2.576.124.166 1.752 2.677 4.25 3.756.594.256 1.058.41 1.419.526.596.19 1.138.163 1.567.099.478-.071 1.472-.602 1.679-1.184.207-.581.207-1.079.145-1.184-.062-.104-.228-.165-.477-.29z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-cream mt-auto" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-serif text-lavender">
              GSB Vineyard
            </Link>
            <p className="text-sm leading-6 text-gray-600">
              An exclusive vineyard and olive grove project in Provence for the Stanford GSB community.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-lavender"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900">Navigation</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-lavender">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <Link href="/privacy" className="text-sm leading-6 text-gray-600 hover:text-lavender">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm leading-6 text-gray-600 hover:text-lavender">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} GSB Vineyard & Olive Grove Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
