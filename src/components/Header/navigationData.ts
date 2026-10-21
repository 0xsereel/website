import type { TFunction } from "i18next";

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

/** Nav copy is translated; hrefs/badges/asset flags are not (they're routes, not content). */
export function buildNavigationMenus(t: TFunction): NavigationMenu[] {
  return [
    {
      key: "products",
      label: t("nav.products.label"),
      columns: [
        {
          title: t("nav.products.columns.core.title"),
          items: [
            {
              title: t("nav.products.columns.core.items.tokenization.title"),
              description: t("nav.products.columns.core.items.tokenization.description"),
              href: "/#product-tokenization",
            },
            {
              title: t("nav.products.columns.core.items.custody.title"),
              description: t("nav.products.columns.core.items.custody.description"),
              href: "/#product-custody",
            },
            {
              title: t("nav.products.columns.core.items.compliance.title"),
              description: t("nav.products.columns.core.items.compliance.description"),
              href: "/#product-compliance",
            },
          ],
        },
        {
          title: t("nav.products.columns.infrastructure.title"),
          items: [
            {
              title: t("nav.products.columns.infrastructure.items.marketplace.title"),
              description: t("nav.products.columns.infrastructure.items.marketplace.description"),
              href: "/#product-marketplace-settlement",
            },
            {
              title: t("nav.products.columns.infrastructure.items.lifecycle.title"),
              description: t("nav.products.columns.infrastructure.items.lifecycle.description"),
              href: "/#product-lifecycle-reporting",
            },
            {
              title: t("nav.products.columns.infrastructure.items.distribution.title"),
              description: t("nav.products.columns.infrastructure.items.distribution.description"),
              href: "/#product-controlled-distribution",
            },
          ],
        },
        {
          title: t("nav.products.columns.advanced.title"),
          items: [
            {
              title: t("nav.products.columns.advanced.items.lending.title"),
              description: t("nav.products.columns.advanced.items.lending.description"),
              href: "/#product-rwa-lending",
            },
            {
              title: t("nav.products.columns.advanced.items.strategy.title"),
              description: t("nav.products.columns.advanced.items.strategy.description"),
              href: "/#product-strategy",
            },
            {
              title: t("nav.products.columns.advanced.items.standards.title"),
              description: t("nav.products.columns.advanced.items.standards.description"),
              href: "/#standards",
            },
          ],
        },
      ],
      feature: {
        title: t("nav.products.feature.title"),
        copy: t("nav.products.feature.copy"),
        cta: t("nav.products.feature.cta"),
        href: "/contact",
      },
    },
    {
      key: "solutions",
      label: t("nav.solutions.label"),
      columns: [
        {
          title: t("nav.solutions.columns.main.title"),
          items: [
            { title: t("nav.solutions.columns.main.items.assetManagers"), href: "/#solution-asset-managers" },
            { title: t("nav.solutions.columns.main.items.issuers"), href: "/#solution-issuers-arrangers" },
            { title: t("nav.solutions.columns.main.items.banks"), href: "/#solution-banks-custodians" },
            { title: t("nav.solutions.columns.main.items.brokerDealers"), href: "/#solution-broker-dealers-platforms" },
            { title: t("nav.solutions.columns.main.items.familyOffices"), href: "/#solution-family-offices-treasuries" },
            {
              title: t("nav.solutions.columns.main.items.strategyTeams.title"),
              description: t("nav.solutions.columns.main.items.strategyTeams.description"),
              href: "/#solution-institutional-strategy-teams",
            },
          ],
        },
      ],
      feature: {
        title: t("nav.solutions.feature.title"),
        copy: t("nav.solutions.feature.copy"),
        cta: t("nav.solutions.feature.cta"),
        href: "/#served",
      },
    },
    {
      key: "resources",
      label: t("nav.resources.label"),
      compact: true,
      columns: [
        {
          title: t("nav.resources.columns.main.title"),
          items: [
            { title: t("nav.resources.columns.main.items.blog"), href: "/blog" },
            { title: t("nav.resources.columns.main.items.whitepaper"), href: "/whitepapers/sereel-whitepaper.pdf", asset: true },
            { title: t("nav.resources.columns.main.items.standards"), href: "/standards" },
            { title: t("nav.resources.columns.main.items.faq"), href: "/faq" },
            { title: t("nav.resources.columns.main.items.research"), href: "/repositories" },
          ],
        },
      ],
    },
    {
      key: "company",
      label: t("nav.company.label"),
      compact: true,
      columns: [
        {
          title: t("nav.company.columns.main.title"),
          items: [
            { title: t("nav.company.columns.main.items.about"), href: "/about" },
            { title: t("nav.company.columns.main.items.contact"), href: "/contact" },
          ],
        },
      ],
    },
  ];
}
