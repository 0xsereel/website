export type Segment = { slug:string; name:string; copy:string; layers:string[] };
export type StackLayer = { slug:string; aliases?:string[]; title:string; detail:string; control:string; record:string; outcome:string };
export type LedgerRow = { id:string; useCase:string; institution:string; layers:string; outcome:string };

export const segments:Segment[] = [
  {slug:"solution-asset-managers",name:"Asset Managers",copy:"Launch tokenized funds with investor gating, custody workflows, subscriptions, redemptions, and controlled secondary transfers.",layers:["Tokenization","Compliance","Subscriptions","Marketplace"]},
  {slug:"solution-issuers-arrangers",name:"Issuers & Arrangers",copy:"Launch tokenized debt, private credit, fixed-income, and structured products through permissioned rails.",layers:["Product rules","Tokenization","Settlement","Reporting"]},
  {slug:"solution-banks-custodians",name:"Banks & Custodians",copy:"Adopt custody, multisig governance, wallet controls, permissions, and reporting before deploying the full tokenization stack.",layers:["Custody","Multisigs","Approvals","Audit trails"]},
  {slug:"solution-fintechs",name:"Fintechs",copy:"Enable access to regulated funds and tokenized products through Sereel's seamless SDK.",layers:["APIs","Investor gating","Settlement","White label"]},
  {slug:"solution-broker-dealers-platforms",name:"Broker-Dealers & Platforms",copy:"Operate permissioned orderbook and transfer workflows with eligibility checks before assets move.",layers:["Orderbook","Transfer rules","Custody","Redemptions"]},
  {slug:"solution-family-offices-treasuries",name:"Family Offices & Treasuries",copy:"Coordinate custody, reporting, controlled transfers, and access to tokenized private-market products.",layers:["Custody","Reporting","Controlled transfers","Strategy rails"]},
  {slug:"solution-institutional-strategy-teams",name:"Institutional Strategy Teams",copy:"Run compliant DeFi strategies with custody controls, risk policies, reporting, and settlement records.",layers:["Custody","DeFi strategy rails","Risk controls","Settlement records"]},
];

export const stackLayers:StackLayer[] = [
  {slug:"product-custody",title:"Custody + Wallet Controls",detail:"Role-based wallets, multisig approval paths, recovery design, and controlled operations for institutional teams.",control:"Multisig approvals, recovery roles, treasury permissions",record:"Wallet policy dossier",outcome:"Teams can operate assets without losing institutional oversight."},
  {slug:"product-compliance",title:"Compliance + Transfer Rules",detail:"Issuer-defined investor eligibility, jurisdiction controls, holding restrictions, and permissioned transfer logic.",control:"Eligibility, jurisdiction, holding, and transfer constraints",record:"Transfer-control log",outcome:"Unqualified transfers fail before ownership records move."},
  {slug:"product-tokenization",title:"Tokenization Engine",detail:"Issuers launch tokenized funds, debt, fixed income, private credit, and structured products with controls their legal, operations, and investor teams can audit.",control:"Product terms, ownership registers, issuer controls",record:"Issuance register",outcome:"Products launch with auditable ownership and lifecycle files."},
  {slug:"product-settlement",aliases:["product-marketplace-settlement","product-lifecycle-reporting"],title:"Subscriptions + Settlement",detail:"Fund managers run primary subscriptions, payment coordination, allocation workflows, settlement records, and lifecycle reporting through Sereel.",control:"Subscriptions, allocations, payment coordination",record:"Subscription book",outcome:"Primary capital movement is traceable from order to record."},
  {slug:"product-marketplace",aliases:["product-controlled-distribution"],title:"Marketplace + Redemptions",detail:"Controlled secondary transfers, redemption workflows, orderbook constraints, and issuer-approved exits.",control:"Issuer-approved exits and secondary-transfer constraints",record:"Redemption queue",outcome:"Liquidity workflows stay permissioned and reviewable."},
  {slug:"product-rwa-lending",title:"Tokenized RWA Lending",detail:"Borrowing and lending rails for eligible tokenized real-world assets with custody, eligibility, collateral, and settlement controls.",control:"Borrower eligibility, lender access, collateral permissions",record:"Tokenized lending activity file",outcome:"Institutions can run RWA credit workflows inside permissioned infrastructure."},
  {slug:"product-strategy",title:"Institutional Strategy Infrastructure",detail:"Institutional strategy workflows governed by custody, reporting, settlement, and risk controls.",control:"Custody policy, risk thresholds, settlement reporting",record:"Strategy operating file",outcome:"On-chain strategies operate inside institutional guardrails."},
];

export const ledgerRows:LedgerRow[] = [
  {id:"01",useCase:"Tokenized Funds",institution:"Asset managers",layers:"Custody, compliance, subscriptions, redemptions",outcome:"Launch fund units with investor eligibility and lifecycle controls."},
  {id:"02",useCase:"Fixed-Income Products",institution:"Issuers and arrangers",layers:"Tokenization, transfer rules, settlement",outcome:"Operate permissioned debt or yield products with auditable ownership records."},
  {id:"03",useCase:"Private Credit Products",institution:"Credit managers",layers:"Product rules, reporting, subscriptions",outcome:"Distribute private credit exposure through controlled investor rails."},
  {id:"04",useCase:"Custody-First Deployments",institution:"Banks and treasury teams",layers:"Wallet controls, multisigs, approvals, audit trails",outcome:"Adopt institutional custody before broader tokenization rollout."},
  {id:"05",useCase:"Controlled Marketplaces",institution:"Broker-dealers and platforms",layers:"Marketplace, eligibility, redemptions",outcome:"Run orderbook workflows where only approved participants can transfer."},
  {id:"06",useCase:"Institutional Strategy Workflows",institution:"Institutions implementing compliant DeFi strategies",layers:"Custody, DeFi strategy controls, settlement",outcome:"Implement compliant DeFi strategies with reporting and operational guardrails."},
];

export const standards = [
  {name:"ERC-3643",role:"Permissioned transfer logic",proof:"Eligibility checks and compliance rules can be enforced before transfer execution.",href:"/standards"},
  {name:"CMTAT",role:"Swiss capital markets token framework",proof:"Recognized token architecture for securities-style products and issuer controls.",href:"/standards"},
  {name:"VASP-ready",role:"Regional regulatory coverage",proof:"Deployment models can align with custody, reporting, and digital-asset service rules.",href:"/standards"},
];

export const issuerResponsibilities=["Asset","Disclosures","Investor relationship","Obligations","Product economics and performance"];
export const sereelResponsibilities=["Custody and multisig controls","Tokenization","Compliance controls","Settlement","Subscriptions / redemptions"];
