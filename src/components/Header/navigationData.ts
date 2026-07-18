export type NavigationMenuKey = "products" | "solutions" | "resources" | "company";

export type NavigationItem = {
  title: string;
  description?: string;
  href?: string;
  badge?: string;
  asset?: boolean;
};

export type NavigationColumn = {
  title: string;
  items: NavigationItem[];
};

export type NavigationFeature = {
  title: string;
  copy: string;
  cta: string;
  href: string;
};

export type NavigationMenu = {
  key: NavigationMenuKey;
  label: string;
  columns: NavigationColumn[];
  feature?: NavigationFeature;
  compact?: boolean;
};

export const navigationMenus: NavigationMenu[] = [
  {
    key: "products",
    label: "Products",
    columns: [
      {
        title: "Core Products",
        items: [
          {
            title: "Tokenization-as-a-Service",
            description: "Launch tokenized financial products on compliant rails.",
            href: "/#product-tokenization",
          },
          {
            title: "Custody",
            description:
              "Safekeeping, wallet controls, and operational permissions for digital assets and tokenized instruments.",
            href: "/#product-custody",
          },
          {
            title: "Compliance Layer",
            description:
              "Investor eligibility, jurisdiction rules, and transfer restrictions enforced at the asset level.",
            href: "/#product-compliance",
          },
        ],
      },
      {
        title: "Market Infrastructure",
        items: [
          {
            title: "Marketplace & Settlement",
            description:
              "Subscriptions, redemptions, controlled transfers, and settlement workflows.",
            href: "/#product-marketplace-settlement",
          },
          {
            title: "Lifecycle & Reporting",
            description:
              "Holder records, audit trails, lifecycle events, and operational reporting.",
            href: "/#product-lifecycle-reporting",
          },
          {
            title: "Controlled Distribution",
            description: "Permissioned access and transfer workflows for eligible investors.",
            href: "/#product-controlled-distribution",
          },
        ],
      },
      {
        title: "Advanced Rails",
        items: [
          {
            title: "Tokenized RWA Lending",
            description:
              "Borrowing and lending infrastructure for eligible tokenized real-world assets.",
            href: "/#product-rwa-lending",
          },
          {
            title: "On-chain Strategy Infrastructure",
            description:
              "Infrastructure for compliant institutional on-chain and DeFi strategies.",
            href: "/#product-strategy",
          },
          {
            title: "Standards-Based Issuance",
            description: "ERC-3643, CMTAT, and regional compliance frameworks.",
            href: "/#standards",
          },
        ],
      },
    ],
    feature: {
      title: "Launch on Sereel rails",
      copy: "Issuer-owned products. Sereel-powered infrastructure.",
      cta: "Schedule consultation",
      href: "/contact",
    },
  },
  {
    key: "solutions",
    label: "Solutions",
    columns: [
      {
        title: "Solutions",
        items: [
          {
            title: "Asset Managers",
            href: "/#solution-asset-managers",
          },
          {
            title: "Issuers & Arrangers",
            href: "/#solution-issuers-arrangers",
          },
          {
            title: "Banks & Custodians",
            href: "/#solution-banks-custodians",
          },
          {
            title: "Broker-Dealers & Platforms",
            href: "/#solution-broker-dealers-platforms",
          },
          {
            title: "Family Offices & Treasuries",
            href: "/#solution-family-offices-treasuries",
          },
          {
            title: "Institutional Strategy Teams",
            description: "For institutions looking to run compliant DeFi strategies.",
            href: "/#solution-institutional-strategy-teams",
          },
        ],
      },
    ],
    feature: {
      title: "Your product. Your investors. Sereel infrastructure.",
      copy: "Sereel powers the infrastructure. Issuers own the asset.",
      cta: "Explore solutions",
      href: "/#served",
    },
  },
  {
    key: "resources",
    label: "Resources",
    compact: true,
    columns: [
      {
        title: "Resources",
        items: [
          { title: "Blog", href: "/blog" },
          {
            title: "Whitepaper",
            href: "/whitepapers/sereel-whitepaper.pdf",
            asset: true,
          },
          { title: "Standards", href: "/standards" },
          { title: "FAQ", href: "/faq" },
          { title: "Research Repository", href: "/repositories" },
        ],
      },
    ],
  },
  {
    key: "company",
    label: "Company",
    compact: true,
    columns: [
      {
        title: "Company",
        items: [
          { title: "About", href: "/about" },
          { title: "Contact", href: "/contact" },
        ],
      },
    ],
  },
];
