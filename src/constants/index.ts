// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/how-it-works', key: 'how_it_works', label: 'How It Works' },
    { href: '/hubs', key: 'hubs', label: 'Hubs' },
    { href: '/about-us', key: 'about us', label: 'About Us' },
  ];
  
  // CAMP SECTION
  export const PEOPLE_URL = [
    '/person-1.png',
    '/person-2.png',
    '/person-3.png',
    '/person-4.png',
  ];
  
  
  // FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: 'Learn More',
      links: [
        'About Hilink',
        'Press Releases',
        'Environment',
        'Jobs',
        'Privacy Policy',
        'Contact Us',
      ],
    },
    {
      title: 'Our Community',
      links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
    },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Admin Officer', value: '123-456-7890' },
      { label: 'Email Officer', value: 'hilink@akinthil.com' },
    ],
  };
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      '/facebook.svg',
      '/instagram.svg',
      '/twitter.svg',
      '/youtube.svg',
      '/wordpress.svg',
    ],
  };


  export type InvestmentType = {
    Type: string;
    AvgReturn: number;
    Risk: number;
    imgurl: string;
  };
  
  export const investType: InvestmentType[] = [
    {
      Type: "Forex",
      AvgReturn: 15,
      Risk: 85,
      imgurl: "/forex.png"
    },
    {
      Type: "Crypto",
      AvgReturn: 100,
      Risk: 95,
      imgurl: "/cryptocurrency.png"
    },
    {
      Type: "Mutual Funds",
      AvgReturn: 8.5,
      Risk: 40,
      imgurl: "/venture.png"
    },
    {
      Type: "Stocks",
      AvgReturn: 11,
      Risk: 60,
      imgurl: "/stock.png"
    },
    {
      Type: "Gold",
      AvgReturn: 6.5,
      Risk: 30,
      imgurl: "/gold.png"
    },
    {
      Type: "Real Estate",
      AvgReturn: 10,
      Risk: 50,
      imgurl: "/house.png"
    },
    {
      Type: "Fixed Deposit",
      AvgReturn: 4,
      Risk: 10,
      imgurl: "/givemoney.png"
    },
    {
      Type: "Bonds",
      AvgReturn: 3.5,
      Risk: 20,
      imgurl: "/bond.png"
    },
    {
      Type: "Startups",
      AvgReturn: 25,
      Risk: 90,
      imgurl: "/start-up.png"
    },
  ];