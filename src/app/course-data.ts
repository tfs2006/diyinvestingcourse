export type Quiz = {
  question: string;
  choices: string[];
  answer: number;
  explanation: string;
};

export type LessonSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Lesson = {
  id: string;
  title: string;
  minutes: number;
  summary: string;
  takeaways: string[];
  sections: LessonSection[];
  quiz: Quiz;
};

export type CourseModule = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  lessons: Lesson[];
};

export const courseModules: CourseModule[] = [
  {
    id: "foundations",
    title: "Start with your why",
    subtitle: "01 · Foundations",
    description: "Build the money and decision-making foundations that make an investing plan worth following.",
    lessons: [
      {
        id: "saving-vs-investing",
        title: "Saving, investing & the long game",
        minutes: 12,
        summary: "Know what investing can do, what it cannot promise, and why your time horizon matters more than a hot tip.",
        takeaways: ["Cash protects near-term spending; investing accepts risk for possible long-term growth.", "Compounding works in both directions: fees and losses compound too.", "A longer horizon can help absorb volatility, but never guarantees a profit."],
        sections: [
          { heading: "Give each dollar a job", paragraphs: ["Saving is setting aside money for a known or unexpected need. A bank savings account is generally designed for access and stability; its purchasing power can still shrink when inflation outpaces its interest rate. Investing means buying assets—such as shares in businesses or bonds—that may grow or produce income, while accepting that their market value can fall.", "A useful order of operations is to cover essential bills, build an accessible emergency reserve suited to your situation, address expensive debt, capture any valuable employer match you are eligible for, and then invest money whose goal and time horizon fit market risk. This is a framework for thinking, not a rigid sequence: circumstances and local rules differ."] },
          { heading: "The math of compounding", paragraphs: ["Compounding means returns can earn returns when gains remain invested. For example, $1,000 growing at a hypothetical 5% per year becomes about $1,629 after 10 years before taxes, fees, and inflation. The 5% is an illustration, not a forecast; real returns arrive unevenly and can be negative.", "A useful real-return approximation is nominal return minus inflation. A 6% nominal gain in a year with 3% inflation is roughly 3% in purchasing-power growth before taxes and costs. The exact relationship is (1 + nominal return) ÷ (1 + inflation) − 1."] },
          { heading: "Risk is part of the price of admission", paragraphs: ["A diversified stock portfolio can lose substantial value—even over several years. Bonds can lose value too, and cash has inflation and reinvestment risk. Investing is not a guaranteed path to wealth. The right first question is not “What will go up next?” but “When will I need this money, and what would I do if it fell?”"], bullets: ["Near-term spending generally needs more stability and liquidity than distant goals.", "Do not invest borrowed money or money needed for rent, bills, or a near-term emergency.", "A sound process improves decisions; it cannot remove uncertainty."] }
        ],
        quiz: { question: "What does a longer time horizon change?", choices: ["It guarantees a positive return", "It can give a portfolio more time to recover, but does not remove risk", "It makes fees irrelevant"], answer: 1, explanation: "Time can help investors ride through volatility, but markets can fall for long periods and outcomes are never guaranteed." }
      },
      {
        id: "goals-and-risk",
        title: "Goals, timelines & your real risk tolerance",
        minutes: 14,
        summary: "Turn vague ambitions into dated goals, then distinguish the risk you can afford from the risk you can emotionally tolerate.",
        takeaways: ["Write the goal, target date, current amount, and contribution plan.", "Risk capacity is financial; risk tolerance is emotional.", "Liquidity needs and a reliable emergency reserve shape a sensible plan."],
        sections: [
          { heading: "Make a goal decision-ready", paragraphs: ["“Invest for the future” is too broad to guide a portfolio. Name the goal, who owns it, when the money may be needed, how much is already set aside, and whether contributions are flexible. Retirement decades away, a home deposit in three years, and a tuition bill next fall are different jobs for money.", "Estimate a target in today's dollars first. If the goal is many years away, think about how inflation might affect its future cost; do not mistake a calculator projection for a promised balance. Revisit assumptions when your timeline, income, or circumstances change."] },
          { heading: "Capacity versus comfort", paragraphs: ["Risk capacity is your practical ability to absorb a loss without derailing the goal: consider time horizon, income stability, debt, liquidity, and flexibility. Risk tolerance is how you feel when prices move against you. A portfolio you abandon in a downturn is not a good behavioral fit even if a spreadsheet calls it optimal.", "Stress-test the plan before investing: imagine a large, prolonged decline in the risky portion of the portfolio. Would you still meet near-term obligations? Could you keep contributing? If not, the allocation or the goal needs another look—not a prediction about the next market move."] },
          { heading: "Protect the foundation", paragraphs: ["Keep emergency savings accessible in an appropriate deposit account. Pay attention to high-interest debt: paying it down provides a known reduction in interest cost, unlike an uncertain investment return. Check any employer retirement match, vesting schedule, fees, and withdrawal rules before making account decisions."] }
        ],
        quiz: { question: "Which is an example of risk capacity?", choices: ["How anxious a daily price chart makes you", "Whether a loss would force you to sell money needed next year", "How exciting a stock story sounds"], answer: 1, explanation: "Risk capacity is about financial circumstances and the ability to withstand a loss; emotional comfort is risk tolerance." }
      },
      {
        id: "investment-policy",
        title: "Write a one-page investing policy",
        minutes: 13,
        summary: "Make the next decision easier by writing down your rules while you feel calm—not in the middle of a market scare.",
        takeaways: ["A useful policy names goals, allocation logic, contribution habits, and review rules.", "Decide in advance what would—and would not—justify a change.", "A written plan is a behavior tool, not a performance guarantee."],
        sections: [
          { heading: "Your personal guardrails", paragraphs: ["A simple investment policy statement (IPS) is a short note to your future self. Include the goal and time horizon; the accounts involved; an allocation range that reflects your circumstances; what you plan to contribute and when; your rebalancing rule; and conditions that warrant a genuine review.", "Also record what is outside the plan: no money needed for near-term bills, no borrowing to speculate, no changing the whole portfolio because of headlines, and no investment you cannot explain in plain language. The guardrails matter more than polished wording."] },
          { heading: "A practical review rule", paragraphs: ["Pick a review cadence that discourages checking prices all day, such as a scheduled annual review or a calendar reminder to check whether your life changed. Some investors rebalance on a calendar; others use predefined allocation bands. Either can work if written down and applied consistently, taking taxes and transaction costs into account.", "A review is for checking the goal, contributions, fees, allocation drift, account beneficiaries, and changes in personal circumstances—not for trying to forecast tomorrow's market. Keep a dated copy so you can see why a change was made."] },
          { heading: "Starter template", bullets: ["My goal and the date I expect to use this money are…", "My emergency and near-term money is kept separate in…", "My target mix / acceptable range and reason are…", "I will contribute… and review this plan…", "I will consider changing the plan only if…"] }
        ],
        quiz: { question: "Why write an investment policy before a market shock?", choices: ["To predict the exact market bottom", "To set calm, repeatable decision rules", "To guarantee an annual return"], answer: 1, explanation: "A written policy helps you follow your goals and process when headlines and emotions are loud; it cannot predict or guarantee returns." }
      }
    ]
  },
  {
    id: "market-toolkit",
    title: "Know the building blocks",
    subtitle: "02 · The market toolkit",
    description: "Understand what you own, who holds it, how orders work, and what a fund's label really means.",
    lessons: [
      {
        id: "assets-and-claims",
        title: "Stocks, bonds, cash & other assets",
        minutes: 15,
        summary: "Learn the economic claim behind each investment before you compare its ticker, chart, or recent performance.",
        takeaways: ["Stocks are ownership claims; bonds are lending claims with credit and interest-rate risk.", "Cash and deposits prioritize access, but purchasing power can erode.", "A ticker or fund name is not enough—read what you actually own."],
        sections: [
          { heading: "Ownership and lending are not the same", paragraphs: ["A common stock represents an ownership interest in a company. Shareholders may benefit if the business grows and may receive dividends if declared, but they are residual claimants: the share price can fall and the company can fail. Ordinary shareholders generally rank behind creditors in liquidation.", "A bond is a debt instrument: an issuer borrows under specified terms. A bond's coupon, maturity, credit quality, call features, and market yield all matter. Bondholders face default risk, interest-rate risk, inflation risk, and sometimes liquidity risk. A higher yield can reflect higher risk—not a free upgrade."] },
          { heading: "Cash-like assets and real assets", paragraphs: ["Bank deposits, Treasury bills, money-market mutual funds, and stable-value products are not interchangeable. Deposit insurance applies to eligible deposits at insured institutions within applicable limits; it does not insure securities or protect against inflation. A money-market mutual fund is an investment fund, not a bank deposit, and is not FDIC-insured.", "Real estate, commodities, and infrastructure can behave differently from stocks and bonds, but prices, costs, leverage, concentration, and access vary widely. A REIT is a company or trust that owns or finances real estate; it is still an equity investment with its own risks, not a substitute for a diversified portfolio by default."] },
          { heading: "Read the wrapper", bullets: ["For a security: identify the issuer, legal structure, seniority, and what could make it lose value.", "For a fund: check the prospectus, index or strategy, holdings, fees, turnover, concentration, and distributions.", "A fund can own risky assets even if its name includes words such as “income,” “balanced,” or “low volatility.”"] }
        ],
        quiz: { question: "Which statement best describes a bond?", choices: ["A deposit with a guaranteed market value", "A lending claim whose price and repayment depend on terms, rates, and credit", "An ownership share in a company"], answer: 1, explanation: "A bond is debt, but its market value can fluctuate and repayment is subject to the issuer's ability and terms." }
      },
      {
        id: "brokerage-orders",
        title: "Brokerages, orders & investor protections",
        minutes: 16,
        summary: "Place orders deliberately, understand settlement and account protections, and separate platform convenience from investment quality.",
        takeaways: ["Market orders prioritize execution; limit orders set a price boundary but may not execute.", "Bid–ask spreads and liquidity are real trading costs.", "SIPC is not insurance against investment losses; FDIC deposit insurance is different."],
        sections: [
          { heading: "Choose a regulated, fit-for-purpose provider", paragraphs: ["Compare account availability, service, cash sweep terms, fees, transfer rules, fractional-share limits, research tools, and how the firm earns revenue. In the United States, check the firm's registration and disciplinary history using SEC / FINRA resources (including FINRA BrokerCheck) and understand which legal entity holds each account.", "A broker's app, account protection, or “zero commission” claim does not make an investment safe. Payment for order flow, spreads, fund expenses, transfer fees, and cash-sweep rates can all matter; check the current disclosure rather than assuming costs are zero."] },
          { heading: "Order types in plain English", paragraphs: ["A market order asks to trade promptly at the best available price. The final price can differ from the quote, especially in fast or thin markets. A limit order sets the most you will pay to buy or the least you will accept to sell; it can remain unfilled or only partially fill. A stop order can become a market order after its trigger and may execute far from the stop price in a gap.", "The bid is what buyers currently offer; the ask is what sellers currently request. The difference is the spread. Use care with thinly traded securities, extended-hours trading, complex order tickets, and volatile openings. Confirm the ticker, order side, quantity, order type, price, duration, and account before submitting."] },
          { heading: "Settlement and protection are different things", paragraphs: ["U.S. securities generally settle on T+1 (one business day after trade date) under the current standard for most broker-dealer transactions; special products and circumstances can differ. Check the broker's current buying-power, cash, and withdrawal rules, and avoid trading on assumptions about unsettled funds.", "SIPC protection concerns missing customer cash and securities if a member brokerage fails, subject to statutory limits and eligibility; it does not reimburse losses from market declines or bad investment choices. FDIC insurance covers eligible deposits at insured banks within applicable limits, not brokerage securities, stocks, bonds, or mutual funds. Verify the precise account and sweep arrangement."] }
        ],
        quiz: { question: "What does a limit order guarantee?", choices: ["Execution", "The price boundary you set, if the order executes", "A profit"], answer: 1, explanation: "A limit order controls the price you accept but may never fill; it does not guarantee execution or profit." }
      },
      {
        id: "funds-and-indexes",
        title: "Index funds, ETFs & mutual funds",
        minutes: 15,
        summary: "Compare a fund's structure, strategy, costs, and holdings—not just whether the label says ETF, index, or passive.",
        takeaways: ["An index is a rules-based measurement; an index fund tries to track one.", "ETFs and mutual funds are wrappers, not strategies or guarantees.", "Costs, diversification, tracking, taxes, and the actual holdings all deserve a look."],
        sections: [
          { heading: "Index versus fund", paragraphs: ["A market index measures a defined group of securities according to published or licensed rules. It cannot usually be bought directly. An index fund seeks to track that index, before fees and tracking differences; replication method, cash, trading, and fund costs can create a gap. An actively managed fund instead follows a manager's selection process. Neither label guarantees a better outcome.", "“The market” is not one universal portfolio. Indexes can be weighted by market capitalization, equal weight, price, or other rules; they can focus on one country, sector, size, or asset class. A market-cap-weighted index can become concentrated in its largest companies. Understand the exposure rather than treating a familiar index name as diversified across every risk."] },
          { heading: "ETF and mutual-fund mechanics", paragraphs: ["An ETF trades on an exchange during the day at market prices, which can be above or below its net asset value. Authorized participants and other market participants can support creation and redemption, but spreads and premiums / discounts still matter. A mutual fund is generally purchased or redeemed at its next calculated net asset value, typically once per business day, subject to its rules.", "An ETF is not necessarily passive, cheap, diversified, tax-efficient, or low-risk. Mutual funds are not necessarily active or expensive. Review the current prospectus and shareholder report: holdings, objective, benchmark, expense ratio, turnover, tracking difference, distribution history, trading liquidity, and tax consequences in your account."] },
          { heading: "A five-minute fund check", bullets: ["What does it own today, and how concentrated is it?", "What index / mandate does it follow, and how does that index select and weight securities?", "What is the expense ratio—and what other trading, spread, or account costs apply?", "How closely has it tracked its stated benchmark after costs, over comparable periods?", "Could the distributions or sale create a tax bill in this account?"] }
        ],
        quiz: { question: "An ETF is best understood as…", choices: ["A guarantee that holdings are diversified", "A trading structure that can hold many kinds of strategies and assets", "A type of bank deposit"], answer: 1, explanation: "ETF describes a fund structure. It does not tell you the fund's holdings, strategy, costs, or risk." }
      }
    ]
  },
  {
    id: "portfolio-design",
    title: "Build a portfolio that fits",
    subtitle: "03 · Portfolio design",
    description: "Turn diversification and allocation into a plan matched to a goal, with rules you can live with.",
    lessons: [
      {
        id: "diversification",
        title: "Diversification without the jargon",
        minutes: 14,
        summary: "Spread exposure across genuinely different risks, and learn why owning many tickers can still mean owning one crowded bet.",
        takeaways: ["Diversification manages company-specific risk; it does not prevent broad market losses.", "Look through funds to their underlying holdings and overlaps.", "Global diversification adds different economies and currencies, not guaranteed protection."],
        sections: [
          { heading: "Avoid putting the whole goal on one outcome", paragraphs: ["Owning one company's stock ties you to that company's business, leadership, financing, regulation, and valuation. Holding many companies can reduce the impact of one failure, especially when exposures are not perfectly correlated. But stocks in the same market can fall together when common risks—rates, recession, geopolitical shocks, or a broad repricing—rise.", "Diversification is about sources of risk, not the number of line items. Five funds that all own the same mega-cap companies may leave you more concentrated than their names suggest. Check top holdings, sector weights, regions, asset classes, and the way positions move together under stress."] },
          { heading: "Look beyond home-market stocks", paragraphs: ["International stocks expose a portfolio to different companies, industries, valuations, currencies, political systems, and accounting environments. They can diversify country-specific risk but introduce currency and foreign-market risks; they do not reliably move opposite domestic stocks. Emerging markets can be more volatile and less liquid.", "Diversification does not mean buying everything blindly. It means deciding consciously which risks you want, what role each holding has, and whether its costs and complexity earn their place. A broad, low-cost fund can be a practical starting point for research, but no fund is automatically right for every investor."] },
          { heading: "Overlap audit", bullets: ["List each holding's asset class, region, sector, and largest underlying positions.", "Separate true asset exposure from multiple share classes of the same exposure.", "Ask what the portfolio would do if its largest sector, country, or holding fell sharply.", "Keep concentrated or speculative positions small enough that a total loss would not derail the goal."] }
        ],
        quiz: { question: "What does diversification primarily help reduce?", choices: ["Every possible source of loss", "The damage one holding or narrow exposure can do to the whole portfolio", "Inflation with certainty"], answer: 1, explanation: "Diversification can reduce concentration and company-specific risk, but it cannot eliminate broad market, inflation, or other risks." }
      },
      {
        id: "asset-allocation",
        title: "Asset allocation & choosing a mix",
        minutes: 16,
        summary: "Choose a stock, bond, and cash mix by connecting a goal's deadline with both financial capacity and emotional comfort.",
        takeaways: ["Asset allocation is a major source of portfolio risk and return variation.", "No single age-based formula fits everyone; goals and circumstances matter.", "A plan should survive a plausible bad outcome, not only look good in a forecast."],
        sections: [
          { heading: "The portfolio's steering wheel", paragraphs: ["Asset allocation is how a portfolio is divided among broad asset classes, such as stocks, bonds, and cash. Stocks have historically offered higher long-run growth potential with substantial volatility; high-quality bonds can provide income and behave differently, but they carry interest-rate, credit, inflation, and liquidity risks. Cash can serve near-term needs while offering little long-term growth potential after inflation in some environments.", "The mix you choose affects how much a portfolio may fluctuate, but the exact outcome is unknowable. Rules like “100 minus your age” are oversimplifications: they ignore goal timing, pensions, debt, income stability, account types, other assets, and how you behave during declines."] },
          { heading: "Match money to its job", paragraphs: ["Separate a goal's near-term spending reserve from its long-term growth pool. For a goal with a fixed near date, a large loss just before spending is especially harmful; for a flexible goal decades away, there may be more room to tolerate market swings. A longer horizon helps only if you have the liquidity and discipline to stay invested.", "Estimate a downside scenario, not just an average-return scenario. Ask how the plan behaves through a prolonged stock decline, a rise in rates that hurts bonds, higher-than-expected inflation, or a loss of income. If the plan only works under optimistic assumptions, revisit the savings rate, goal date, or risk level."] },
          { heading: "Set ranges, not prophecy", paragraphs: ["An allocation range can give you a trigger for review without pretending to know which asset will lead next. Decide the target and acceptable drift while calm. Use consistent definitions for the holdings, and account for bonds of different credit quality, inflation-linked bonds, and cash as distinct exposures when relevant."] }
        ],
        quiz: { question: "What should guide an asset allocation?", choices: ["Last year's winning asset class", "Goal timeline, ability to bear losses, and behavioral comfort", "A universal age formula"], answer: 1, explanation: "Allocation should be designed around the investor's goals and circumstances, not recent performance or a one-size-fits-all rule." }
      },
      {
        id: "contributions-and-rebalancing",
        title: "Contributions, lump sums & rebalancing",
        minutes: 14,
        summary: "Build habits around new contributions and use a written rebalancing rule instead of emotional market timing.",
        takeaways: ["Regular contributions create a habit; they do not guarantee a better return.", "Rebalancing restores chosen risk exposure, not a winning forecast.", "Taxes, spreads, and account rules affect how and where to rebalance."],
        sections: [
          { heading: "Investing money as it becomes available", paragraphs: ["Dollar-cost averaging usually means investing a fixed amount at regular intervals regardless of the market price. It can make contributions easier to automate and may reduce the urge to wait for a perfect entry point. It does not prevent losses, guarantee a lower average cost, or ensure a profit.", "When a lump sum is already available for long-term investment, investing it immediately and spreading it over time are different risk choices. Historically, markets have tended to rise more often than fall, so delaying an available lump sum has often had an opportunity cost—but future returns are uncertain, and phasing in can feel more manageable to some people. Do not call a comfort strategy a guaranteed-return strategy."] },
          { heading: "Bring the mix back to plan", paragraphs: ["Rebalancing means restoring a portfolio toward its target allocation after relative performance or contributions move it away. It is a risk-control process, not a reliable way to outperform. A calendar schedule or pre-set drift bands can both create discipline; frequent tinkering adds costs and can create tax consequences in a taxable account.", "Before selling, consider directing new contributions or distributions toward underweight areas, and compare account location, lot selection, tax rules, spreads, and fees. Rebalance only after confirming that the target itself still matches the goal—not because a recent winner looks exciting."] },
          { heading: "Automate the boring part", bullets: ["Set a contribution amount and a schedule you can sustain.", "Check that automatic purchases go into investments, not just an uninvested cash balance.", "Write down your rebalancing trigger and consider tax-aware actions first.", "Increase savings when circumstances allow; no return assumption can substitute for a realistic savings plan."] }
        ],
        quiz: { question: "What is the main purpose of rebalancing?", choices: ["Guaranteeing outperformance", "Restoring an intentional portfolio risk mix", "Avoiding all taxes"], answer: 1, explanation: "Rebalancing brings weights closer to the policy target; it cannot guarantee better performance and may have tax or trading costs." }
      }
    ]
  },
  {
    id: "stock-research",
    title: "Research a business, not a buzzword",
    subtitle: "04 · Stock research",
    description: "Read primary sources, understand financial statements, and value a business with humility about uncertainty.",
    lessons: [
      {
        id: "read-a-10k",
        title: "How to read an annual report (10-K)",
        minutes: 18,
        summary: "Build a repeatable route through a company's own filings instead of relying on a viral summary or a price chart.",
        takeaways: ["Start with the business, risks, MD&A, statements, and footnotes—not a single headline metric.", "Compare multiple years and identify changes in the business model.", "Company filings are primary sources, not a guarantee that management's view is complete."],
        sections: [
          { heading: "A guided filing walkthrough", paragraphs: ["For a U.S. public company, the Form 10-K is the annual report filed with the SEC; the 10-Q is a quarterly filing. Find filings through SEC EDGAR. Read the business description and segment information, then the risk factors, management's discussion and analysis (MD&A), audited financial statements, and footnotes. Proxy statements (DEF 14A) add detail about governance, compensation, and shareholder matters.", "Ask what the company sells, who pays, how recurring the revenue is, where its bargaining power comes from, and what could make customers leave. Compare today's description with prior filings: acquisitions, a changing segment mix, customer concentration, litigation, and a rewritten risk disclosure can reveal important changes."] },
          { heading: "The MD&A and risk factors", paragraphs: ["Management's discussion explains results, liquidity, known trends, and significant uncertainties as management sees them. It is useful but not an independent verdict. Look for explanations of revenue and margin changes, cash needs, debt maturities, and the gap between reported earnings and operating cash flow.", "Risk factors list material risks, but they are not ranked probability estimates and often contain broad standard language. Connect a risk to the actual business: for example, a large customer, a patent expiry, variable-rate debt, or a regulatory license can matter more than a generic warning. Compare the risk section over time and follow up in the relevant footnotes."] },
          { heading: "Primary-source research routine", bullets: ["Read at least three years of annual filings plus recent quarterly updates.", "Find the audited statements, auditor opinion, critical accounting estimates, and related-party transactions.", "Compare claims in a presentation with filed segment data and cash flows.", "Keep a short thesis, disconfirming evidence, key metrics, and the price assumptions you used."] }
        ],
        quiz: { question: "Why read a company's footnotes?", choices: ["They are decorative legal language", "They explain accounting details, obligations, and context hidden by headline numbers", "They predict next year's share price"], answer: 1, explanation: "Footnotes can clarify revenue recognition, debt, leases, stock compensation, contingencies, and other details essential to interpreting reported results." }
      },
      {
        id: "financial-statements",
        title: "Financial statements & useful ratios",
        minutes: 19,
        summary: "Connect profit, cash, and the balance sheet; use ratios as questions to investigate, not answers by themselves.",
        takeaways: ["Revenue, net income, and cash flow measure different things.", "The cash-flow statement and footnotes test earnings quality and funding needs.", "Ratios depend on accounting, industry, capital structure, and the point in the cycle."],
        sections: [
          { heading: "Three statements, one business", paragraphs: ["The income statement reports revenue and expenses over a period, ending in net income under accounting rules. The balance sheet is a snapshot of assets, liabilities, and equity. The cash-flow statement reconciles cash from operating, investing, and financing activities. Read them together: a fast-growing company can report earnings while consuming cash; a one-time asset sale can temporarily boost cash flow.", "Revenue growth is not automatically healthy growth. Check gross and operating margins, customer retention where disclosed, segment profitability, stock-based compensation, share count, debt, and whether capital spending supports future operations. Free cash flow is commonly approximated as operating cash flow less capital expenditures, but definitions vary and the label is not standardized universally."] },
          { heading: "Ratios are context, not a scoreboard", paragraphs: ["Price-to-earnings (P/E) relates share price to earnings per share; it can be misleading when earnings are negative, unusually high / low, cyclical, or affected by accounting. Enterprise value to EBITDA compares a capital-structure-aware value measure with earnings before interest, tax, depreciation, and amortization, but excludes real costs such as capital spending and can be unsuitable for some industries.", "Return on equity, return on invested capital, debt-to-equity, interest coverage, and operating margin can suggest useful questions. Compare businesses in a similar sector and over a full cycle, understand whether measures are trailing or forecast, and check how goodwill, leases, buybacks, and acquisitions affect them. A cheap-looking multiple may reflect declining economics or hidden risk."] },
          { heading: "Watch the share count", paragraphs: ["Earnings per share can rise or fall differently from total company earnings because the number of shares changes. Stock compensation can dilute owners; buybacks may reduce shares but are not automatically value-creating if done at an excessive price or financed imprudently. Read diluted weighted-average shares and the equity footnotes, not just the buyback headline."] }
        ],
        quiz: { question: "A company reports rising earnings. What else should you examine?", choices: ["Only the ticker's recent chart", "Cash generation, balance sheet, share dilution, accounting notes, and business context", "Nothing; earnings prove the stock is undervalued"], answer: 1, explanation: "Earnings are one piece of evidence. Cash flow, obligations, dilution, accounting, and price all affect the investment case." }
      },
      {
        id: "valuation-and-thesis",
        title: "Valuation, assumptions & a thesis",
        minutes: 20,
        summary: "Separate a great company from a great investment price, and make your assumptions visible enough to challenge.",
        takeaways: ["Valuation estimates depend on uncertain future cash flows, discount rates, and growth.", "Use scenarios and sensitivity analysis instead of a single precise target.", "A thesis needs disconfirming evidence and a reason to update or exit."],
        sections: [
          { heading: "Price is not value", paragraphs: ["A stock price is the market price of a share; valuation is an estimate of what the business or claim may be worth under a set of assumptions. A strong business can be a poor investment at a price that assumes unrealistic growth. A low multiple can signal distress, structural decline, or temporary pessimism—or genuine mispricing. A ratio alone cannot decide which.", "Common methods include comparable-company multiples and discounted cash flow (DCF). A DCF estimates future free cash flows and discounts them back using a rate that reflects time and risk. Small changes in long-term growth, margins, reinvestment, or discount rate can change the result dramatically. Terminal-value assumptions often dominate; show them rather than burying them."] },
          { heading: "Model ranges, not false precision", paragraphs: ["Create a bear, base, and bull case using explicit assumptions: revenue growth, margins, reinvestment, capital needs, dilution, and a reasonable range for the discount rate or valuation multiple. Ask what must go right for today's price to make sense. Compare implied expectations with the business's competitive position and historical performance without assuming the past will repeat.", "A “margin of safety” is a discipline of requiring room for estimation error—not a magic discount that makes a risky investment safe. Avoid presenting an exact fair value as an observable fact. Your model is only as reliable as its inputs, and market prices can stay disconnected from an estimate for a long time."] },
          { heading: "Write a falsifiable thesis", bullets: ["What does the company do, and why might it have durable economics?", "What do you think the market may misunderstand, and what evidence supports that view?", "What could disprove the thesis: a customer loss, margin collapse, dilution, debt, or regulation?", "What valuation range and assumptions make the risk / reward acceptable to you?", "What new fact—not just a price move—would make you revisit the case?"] }
        ],
        quiz: { question: "Why use multiple valuation scenarios?", choices: ["To make an uncertain estimate look exact", "To reveal how sensitive a conclusion is to assumptions", "To remove business risk"], answer: 1, explanation: "Scenarios expose uncertainty and the assumptions driving a valuation; they do not remove risk or establish a guaranteed fair value." }
      }
    ]
  },
  {
    id: "bonds-and-cash",
    title: "The steadier side of the portfolio",
    subtitle: "05 · Bonds & cash",
    description: "Understand why bond prices move, what yield does not promise, and which cash instrument you are actually using.",
    lessons: [
      {
        id: "bond-prices-and-yields",
        title: "Bond prices, yields & duration",
        minutes: 18,
        summary: "See why fixed payments can change in market value and how maturity, duration, inflation, and credit risk interact.",
        takeaways: ["Existing fixed-rate bond prices generally fall when comparable market yields rise.", "Duration estimates interest-rate sensitivity; it is not an exact prediction.", "Yield to maturity depends on assumptions and is not a guaranteed realized return."],
        sections: [
          { heading: "The price–yield relationship", paragraphs: ["A conventional fixed-rate bond promises specified payments if the issuer meets its obligations. When new bonds offer higher yields, an older bond's fixed payments may be less attractive, so its market price generally falls. When comparable yields fall, the older bond's payments may be more attractive, so its price generally rises. Credit spreads, liquidity, embedded options, and changing expectations also affect price.", "Maturity is the scheduled repayment date, not a promise that you can sell at par beforehand. Yield to maturity is a calculation based on price, promised cash flows, and holding-to-maturity assumptions; actual return can differ due to default, calls, reinvestment rates, taxes, transaction costs, or early sale."] },
          { heading: "Duration as a sensitivity tool", paragraphs: ["Macaulay duration is a weighted-average timing measure of bond cash flows; modified duration estimates the approximate percentage price change for a one-percentage-point move in yield, assuming other factors stay broadly constant. A bond with duration of about 5 years might lose roughly 5% for a 1-percentage-point yield rise as a first-order estimate; convexity and other changes mean the actual move can differ. Do not treat duration as a maturity date or precise forecast.", "Longer-duration bonds are usually more sensitive to rate changes. Credit quality adds another axis: a Treasury and a lower-quality corporate bond can have different default, liquidity, and spread risks even at similar durations. Inflation-linked Treasury securities adjust principal using an inflation measure under their terms, but market prices, real yields, taxes, and holding period still matter."] },
          { heading: "Yield is not a safety rating", paragraphs: ["A high quoted yield can reflect default risk, long duration, illiquidity, a falling market price, or a distribution that is not sustainable. Compare yield definitions, maturity, credit quality, call risk, tax treatment, and fund holdings. Bond funds fluctuate; unlike an individual bond held to maturity, a typical open-ended bond fund does not promise a fixed date when investors receive a stated principal amount."] }
        ],
        quiz: { question: "All else equal, what often happens to a fixed-rate bond's price when market yields rise?", choices: ["It rises", "It falls", "It is guaranteed to stay at par"], answer: 1, explanation: "Existing fixed payments are less attractive against newly available yields, so the bond's price generally falls. Other factors also matter." }
      },
      {
        id: "bond-funds-and-ladders",
        title: "Bond funds, individual bonds & ladders",
        minutes: 15,
        summary: "Choose between direct bonds and funds with a clear understanding of cash flows, diversification, liquidity, and maturity.",
        takeaways: ["A bond fund's duration and holdings matter more than the word “bond.”", "A fund generally has no single maturity date or promised return of principal.", "A ladder can spread reinvestment dates, but does not eliminate risk."],
        sections: [
          { heading: "Fund or individual security?", paragraphs: ["An individual bond has stated contractual cash flows and a maturity if the issuer pays as promised. The investor still faces default, call, inflation, tax, liquidity, and opportunity-cost risk; selling before maturity can produce a loss. Direct bonds may have larger minimums, dealer markups, and less transparent pricing than investors expect.", "A bond fund holds a changing portfolio of bonds. It can offer diversification and convenient exposure, but its net asset value moves with rates, credit spreads, and the underlying securities. Most diversified open-end bond funds do not mature on one date and do not promise to return an investor's original principal at a chosen time. Compare duration, credit quality, sector, yield measure, expenses, and distribution policy."] },
          { heading: "What a ladder can and cannot do", paragraphs: ["A bond ladder holds bonds with staggered maturity dates. As bonds mature, proceeds can be spent or reinvested at then-current rates. Staggering dates can reduce the need to reinvest everything at one rate and can align cash flows with planned expenses. It does not eliminate default, inflation, rate, reinvestment, or market-price risk.", "Some funds market a defined maturity or target-date structure; verify the exact legal structure and terms. A traditional open-end bond ETF generally remains invested and does not become an individual bond with a known redemption value on a target date. Read the prospectus and distribution details carefully."] },
          { heading: "Fit the bond to the job", bullets: ["Match duration to when cash may be needed; a short horizon does not make a long bond safe.", "Check issuer, credit rating, seniority, diversification, call features, and liquidity.", "Compare taxable and tax-advantaged treatment under your local rules.", "Do not judge a bond fund solely by recent yield or recent total return."] }
        ],
        quiz: { question: "What is true of most open-end bond funds?", choices: ["They promise par value back on the date you choose", "They hold a portfolio whose value and income can change", "They cannot lose money when rates rise"], answer: 1, explanation: "Bond funds fluctuate and typically have no single maturity date at which your invested principal is guaranteed back." }
      },
      {
        id: "cash-and-inflation",
        title: "Cash, inflation & where to park money",
        minutes: 13,
        summary: "Compare bank deposits, government bills, CDs, and money-market funds without confusing yield, liquidity, and insurance.",
        takeaways: ["Cash products differ in issuer, liquidity, rate resets, taxes, and protections.", "A quoted yield can change; compare terms and net return after taxes and inflation.", "Match the account to the timing and certainty of a planned expense."],
        sections: [
          { heading: "Cash is a role, not a ticker", paragraphs: ["Cash can support emergency needs, planned near-term spending, and psychological stability. In the U.S., options may include insured bank or credit-union deposits, Treasury bills, broker cash-sweep programs, certificates of deposit, and money-market mutual funds. Each has different access, rate, early-withdrawal, tax, counterparty, and protection details. A brokerage “cash” line is not automatically a bank deposit.", "Deposit insurance is subject to eligibility, institution, ownership category, and dollar limits; confirm current rules with the FDIC or NCUA. Money-market mutual funds invest in short-term instruments and aim for stability but are securities and are not FDIC-insured. Government money-market funds and bank deposits are not identical products."] },
          { heading: "A rate today is not a rate forever", paragraphs: ["Savings and money-market deposit rates can change as institutions reprice. Treasury bills mature at a stated date subject to their terms, but selling early means a market price. A CD can impose an early-withdrawal penalty; brokered CDs can have market-value and issuer risks if sold before maturity. Read the actual terms and confirm whether interest is fixed, variable, or promotional.", "Compare the after-tax, after-fee purchasing-power outcome, not only a headline annual percentage yield. Inflation is a general rise in prices, so the same nominal balance can buy less later. No liquid cash option simultaneously guarantees a high rate, immediate access, and inflation-beating returns in every market environment."] },
          { heading: "A simple parking checklist", bullets: ["When exactly might I need the money, and how quickly can I access it?", "Who owes me the money, and which protection—if any—applies?", "Can the rate change, is there a penalty, and what is the term?", "What are the tax, withdrawal, fee, and transfer rules?"] }
        ],
        quiz: { question: "Is a money-market mutual fund an FDIC-insured bank deposit?", choices: ["Yes, always", "No; it is a security, and protections differ from deposit insurance", "Only if it has a high yield"], answer: 1, explanation: "Money-market mutual funds are investment securities, not insured bank deposits. SIPC coverage, where applicable, is not protection against a fund losing value." }
      }
    ]
  },
  {
    id: "accounts-and-taxes",
    title: "Put accounts & taxes in context",
    subtitle: "06 · Accounts & tax awareness",
    description: "Learn the U.S. account landscape and the tax questions to verify before you act.",
    lessons: [
      {
        id: "retirement-account-map",
        title: "401(k)s, IRAs & account types",
        minutes: 18,
        summary: "Choose the account wrapper as thoughtfully as the investment inside it, and verify eligibility and withdrawal rules.",
        takeaways: ["The account's tax treatment is separate from the investment's market risk.", "Employer plans, Traditional and Roth IRAs, HSAs, 529s, and taxable accounts have different rules.", "Contribution limits and eligibility change; verify current IRS and plan rules."],
        sections: [
          { heading: "Separate the wrapper from the investment", paragraphs: ["An account is a legal and tax wrapper; a stock, bond, or fund is what you hold inside. A tax-advantaged account can still lose value, and a good investment can be held in an inappropriate account. In the United States, workplace plans such as 401(k)s and 403(b)s follow plan documents and tax law. Check employer match, vesting, investment menu, fees, loan and withdrawal provisions, and rollover rules.", "Traditional IRAs may offer a tax deduction depending on eligibility and circumstances; withdrawals are generally taxable, and early-distribution rules can apply. Roth IRAs use after-tax contributions and qualified distributions can be tax-free if requirements are met. Income, contribution, conversion, ordering, and distribution rules are detailed and change over time. Verify current IRS guidance and get qualified advice for a specific decision."] },
          { heading: "Other account jobs", paragraphs: ["A Health Savings Account (HSA) is available only with qualifying coverage and other eligibility requirements; its tax treatment and eligible medical uses are specific. A 529 plan is designed for qualified education expenses under applicable rules; state tax benefits, investment menus, ownership, and nonqualified distribution treatment vary. Both can be valuable but are not interchangeable with a general emergency fund.", "A taxable brokerage account can offer flexibility and no retirement-account contribution ceiling, but dividends, interest, and realized gains may have tax consequences. It can also be appropriate for goals that do not fit a restricted account. Compare the whole situation, not a simple “taxable versus tax-free” slogan."] },
          { heading: "A dated U.S. example: 2026 contribution limits", paragraphs: ["For tax year 2026, the IRS lists a $24,500 employee elective-deferral limit for most 401(k), 403(b), governmental 457(b), and federal Thrift Savings Plan participants. The 2026 combined limit for Traditional and Roth IRA contributions is $7,500, or $8,600 for someone age 50 or older under the catch-up rule. The IRA figure is a shared annual limit across an individual's Traditional and Roth IRA contributions—not a limit for each account.", "These are maximums, not suggested savings amounts or eligibility guarantees. Workplace catch-up provisions, plan terms, compensation, IRA earned-income and income limits, deductibility, filing status, and other tax rules can change the amount that applies. Limits are year-specific: verify the official IRS guidance for the tax year in question before contributing. This example is accurate for 2026 and should be updated when the IRS publishes later limits."] },
          { heading: "Verify before contributing or withdrawing", bullets: ["Check the IRS contribution limits, income phase-outs, filing status, and deadlines for the correct tax year.", "Read your employer plan's summary plan description, fees, and investment options.", "Confirm rollover, conversion, required distribution, early withdrawal, and beneficiary rules.", "Rules differ outside the U.S.; use your local tax authority and regulated guidance."] }
        ],
        quiz: { question: "Does a Roth or Traditional label tell you whether the investments can lose value?", choices: ["Yes, Roth investments cannot fall", "No; it describes tax treatment, not market risk", "Yes, Traditional accounts hold only bonds"], answer: 1, explanation: "The tax wrapper and the assets inside it are separate. The holdings determine market exposure." }
      },
      {
        id: "tax-aware-investing",
        title: "Taxes, dividends & capital gains",
        minutes: 18,
        summary: "Understand the tax events investors commonly overlook and build a habit of checking current, jurisdiction-specific rules.",
        takeaways: ["A distribution can be taxable even when reinvested.", "Realized gains, dividends, interest, and retirement withdrawals may be treated differently.", "Tax-loss harvesting has detailed rules; avoid letting taxes dictate a bad investment decision."],
        sections: [
          { heading: "Know what may trigger tax", paragraphs: ["In a U.S. taxable account, interest, dividends, fund capital-gain distributions, and realized gains may be taxable, sometimes even if distributions are automatically reinvested. Tax rates and character can depend on asset type, holding period, income, state, and law. A sale can create a reportable realized gain or loss; an unrealized price change generally is not the same event.", "Qualified dividends and long-term capital gains may receive different federal tax treatment than ordinary income when requirements are met, but not every dividend or gain qualifies, and state rules can differ. Municipal-bond interest can have special federal and sometimes state treatment; it is not automatically tax-free for every buyer or in every situation."] },
          { heading: "Tax-aware is not tax-blind", paragraphs: ["Tax-loss harvesting sells an investment at a loss to realize it for tax purposes and may replace exposure with a suitable alternative. U.S. wash-sale rules can disallow a loss when substantially identical securities are acquired within a specified window, including certain purchases in other accounts; the detailed application is fact-specific. Avoid accidental wash sales through automatic reinvestment, spouse accounts, or retirement plans, and consult current IRS rules or a tax professional.", "Asset location asks which eligible account might hold which investment to improve after-tax outcomes. It depends on the entire portfolio, expected holding period, fees, distribution profile, state and federal rules, withdrawal plan, and rebalancing needs. Do not buy a poor investment merely for a tax deduction or let tax minimization create unwanted concentration."] },
          { heading: "Keep useful records", bullets: ["Save confirmations and track cost basis, purchase lots, reinvestments, and transfers.", "Check the fund's distribution estimates and your year-end tax forms; estimates can change.", "Before selling, compare the tax cost with the risk and opportunity cost of holding.", "Tax rules change. This lesson is general education, not tax advice."] }
        ],
        quiz: { question: "Can a fund distribution be taxable even when automatically reinvested?", choices: ["No, reinvestment always erases tax", "Yes, taxable-account distributions may be taxable whether spent or reinvested", "Only if the fund's price rose that day"], answer: 1, explanation: "Reinvesting a distribution does not generally erase its tax character. Account type and current law matter." }
      },
      {
        id: "fees-and-diligence",
        title: "Fees, fiduciaries & fine print",
        minutes: 15,
        summary: "Make invisible costs visible, compare advice models, and know which questions to ask before trusting a recommendation.",
        takeaways: ["Small recurring costs reduce the dollars left compounding over time.", "“Commission-free” is not the same as cost-free.", "Understand compensation, fiduciary scope, conflicts, and written disclosures."],
        sections: [
          { heading: "Find the full cost", paragraphs: ["An expense ratio is an annual fund operating expense expressed as a percentage of assets; it is deducted within fund returns rather than usually billed as a separate invoice. Other costs may include transaction commissions, bid–ask spreads, account and advisory fees, markups, transfer charges, wire fees, and taxes. A cash sweep can have an opportunity cost if its rate is lower than alternatives.", "A fee compounds too. As an illustration only, a 1% annual fee on a given balance is not just a one-time 1% haircut: the dollars paid and the lost growth on those dollars accumulate. Compare like-for-like services, understand what is included, and check whether a lower-cost option actually fits your needs and behavior."] },
          { heading: "Understand the advice relationship", paragraphs: ["If you use a financial professional, ask whether they are acting as an investment adviser, broker, or in another capacity for this service and moment. Ask how they are compensated, what conflicts exist, whether advice is ongoing or limited, which assets they manage, what costs apply, and how to terminate or transfer. “Fee-based,” “fiduciary,” and “independent” can be used in different contexts—read the actual agreement and regulatory disclosures.", "In the U.S., review Form CRS, an adviser's Form ADV, and broker registration/background using SEC Investment Adviser Public Disclosure and FINRA BrokerCheck as appropriate. Registration is a useful verification step, not an endorsement by regulators or proof of future results. For personalized tax, legal, or financial decisions, seek a properly qualified professional whose scope fits the question."] },
          { heading: "Questions before you sign", bullets: ["What will I pay in dollars in a normal year, including fund and account expenses?", "How are you and your firm compensated, and what conflicts should I know about?", "Are you obligated to act in my best interest for this service? Where is that written?", "What happens to my assets and service if I leave or the firm changes?"] }
        ],
        quiz: { question: "Does a “zero commission” trade mean investing is cost-free?", choices: ["Yes, every cost is zero", "No; spreads, fund expenses, advice, cash yield, and other charges can remain", "Only on ETFs"], answer: 1, explanation: "Commissions are one possible cost. Review spreads, expense ratios, account fees, cash programs, and taxes too." }
      }
    ]
  },
  {
    id: "risk-and-resilience",
    title: "Risk, cycles & investor psychology",
    subtitle: "07 · Risk & resilience",
    description: "Prepare for drawdowns, macro uncertainty, and human biases without pretending to forecast markets.",
    lessons: [
      {
        id: "risk-drawdowns",
        title: "Volatility, drawdowns & hidden risks",
        minutes: 16,
        summary: "Name the different ways an investment can hurt a goal, and distinguish a temporary price decline from permanent impairment.",
        takeaways: ["Volatility is only one kind of risk; liquidity, inflation, leverage, and permanent loss matter too.", "A percentage loss requires a larger percentage gain to recover.", "Sequence-of-returns risk matters when withdrawals begin."],
        sections: [
          { heading: "Different risks need different responses", paragraphs: ["Volatility describes how much prices fluctuate; it is visible but not the whole risk story. Permanent impairment can come from a failed business, default, fraud, or overpaying for a deteriorating asset. Liquidity risk is the chance of not being able to sell promptly at a reasonable price. Inflation risk erodes purchasing power. Currency, political, operational, concentration, leverage, and reinvestment risks matter depending on the holding.", "A 20% loss requires a 25% gain just to return to the starting value; a 50% loss requires a 100% gain. The arithmetic is asymmetric because gains apply to a smaller base. Avoiding a forced sale, leverage, and concentrated bets can matter as much as finding a high expected return."] },
          { heading: "Sequence risk and withdrawals", paragraphs: ["The order of returns matters when an investor is adding or withdrawing money. Two portfolios can have the same average return but different outcomes if large losses arrive just before or during withdrawals. Selling assets after a decline to fund spending can lock in losses and leave fewer shares for a recovery.", "A spending reserve, a flexible withdrawal plan, diversified exposures, and periodic review may help manage this risk, but none makes a retirement plan certain. Test assumptions for longevity, inflation, health costs, fees, taxes, and poor early returns; revisit the plan as circumstances change."] },
          { heading: "Match the risk to the remedy", bullets: ["Concentration → broaden exposure and set position-size limits.", "Liquidity mismatch → reserve near-term cash and avoid forced selling.", "Leverage → understand margin calls, borrow costs, and losses beyond the initial deposit.", "Inflation → evaluate purchasing-power needs across the full goal horizon.", "Behavioral panic → use a written policy, fewer price checks, and a trusted review process."] }
        ],
        quiz: { question: "If an investment falls 50%, what gain is needed to return to the starting value?", choices: ["50%", "75%", "100%"], answer: 2, explanation: "The remaining value is half the starting amount, so it must double—a 100% gain—to get back to the original value." }
      },
      {
        id: "rates-inflation-cycles",
        title: "Rates, inflation & the market cycle",
        minutes: 15,
        summary: "Understand the channels through which economic news can matter, without mistaking a macro story for a trade signal.",
        takeaways: ["Rates and inflation affect discount rates, borrowing costs, and spending—but not in one predictable direction.", "Markets react to expectations and surprises, not only to headlines.", "Economic releases are revised and indicators can conflict."],
        sections: [
          { heading: "One change, many transmission channels", paragraphs: ["Interest rates influence borrowing costs, saving incentives, bond prices, exchange rates, corporate financing, and the present value investors assign to future cash flows. Higher rates can pressure some valuations while benefiting other businesses or cash savers. The impact depends on what was already expected, the pace of change, balance sheets, and how revenues and costs respond.", "Inflation is a broad rise in prices, measured imperfectly through changing baskets of goods and services. It can affect consumers, wages, commodity inputs, bond purchasing power, and central-bank policy. A company may pass costs through—or lose volume and margin. A fixed nominal bond can lose real value during unexpected inflation; inflation-linked securities have their own price and tax risks."] },
          { heading: "Why “the Fed will…” is not a portfolio", paragraphs: ["Central banks influence policy rates and financial conditions, but do not control every market rate or predict every asset price. Bond markets, growth expectations, risk premiums, currency moves, and global conditions all interact. Market prices often incorporate public expectations before a policy announcement, so a widely anticipated event can have little effect—or a different effect than the headline suggests.", "Economic data can be revised, lag the cycle, or send mixed signals. A forecast is a conditional estimate, not a fact. Consistently trading on macro predictions is difficult, can raise taxes and costs, and may cause investors to miss rapid rebounds. Use economic context to understand risk—not to promise the next market move."] },
          { heading: "A healthier news habit", bullets: ["Ask what was expected before deciding whether a headline is genuinely new.", "Separate a market fact, an analyst opinion, and a forecast.", "Check primary data sources such as FRED, BLS, the Treasury, and Federal Reserve releases.", "If the news does not change your goal, cash need, or written investment thesis, consider doing nothing."] }
        ],
        quiz: { question: "Why might markets move differently from a dramatic economic headline?", choices: ["Prices reflect expectations and many forces, not just one headline", "Markets only respond to past data", "All investors have the same forecast"], answer: 0, explanation: "Markets price expectations, uncertainty, and many concurrent factors. A surprise relative to expectations can matter more than a headline alone." }
      },
      {
        id: "behavior-and-scams",
        title: "Behavioral traps, hype & investment scams",
        minutes: 16,
        summary: "Spot common decision biases and high-pressure schemes before they turn attention into an expensive trade.",
        takeaways: ["FOMO, loss aversion, overconfidence, and recency bias can distort decisions.", "Guaranteed high returns, urgency, and secret tips are major warning signs.", "Verify people and offerings independently through official regulators and filings."],
        sections: [
          { heading: "The brain's expensive shortcuts", paragraphs: ["Recency bias makes the latest trend feel permanent. Confirmation bias makes supportive evidence easier to notice. Loss aversion can make a paper loss feel more painful than an equivalent gain feels good; investors may hold a failing position too long yet sell a sound plan in a drawdown. Overconfidence can grow after a winning streak, particularly when luck is mistaken for skill.", "A cooling-off rule helps: write the reason for the trade, wait before acting on a non-urgent tip, check the position size and downside, and ask what evidence would change your mind. Compare your action with the policy you wrote when you were calm."] },
          { heading: "Recognize manipulation and fraud", paragraphs: ["Be skeptical of guaranteed or unusually high returns, “risk-free” trading, secret systems, fake testimonials, celebrity impersonations, pressure to act now, requests to move money to an unknown wallet, and anyone asking for account passwords or one-time codes. Unregistered offerings, affinity fraud, pump-and-dump groups, fake recovery services, and romance / social-media investment schemes can target new and experienced investors alike.", "Verify an investment and the person selling it independently: do not use the phone number or link supplied in a pitch. Use official SEC, FINRA, state regulator, or local equivalents; review filed documents and understand custody. Registration does not mean an investment is approved, safe, or profitable. Never grant remote access to a device or share credentials."] },
          { heading: "A 60-second hype filter", bullets: ["Who earns money if I buy—and how is the promoter paid?", "Can I explain the asset, custody, fees, and exit in plain language?", "Is there audited / regulatory disclosure, and can I verify it independently?", "What is the worst plausible loss, including leverage, lockups, or fraud?", "Would I still buy if I could not tell anyone about the trade today?"] }
        ],
        quiz: { question: "Which is a major investment-scam warning sign?", choices: ["A clear prospectus and time to review", "Guaranteed high returns with pressure to send money immediately", "A diversified portfolio"], answer: 1, explanation: "Guaranteed returns and urgent pressure are classic warning signs. Stop, independently verify the people and offering, and do not send money or credentials." }
      }
    ]
  },
  {
    id: "beyond-the-basics",
    title: "Beyond the basics, responsibly",
    subtitle: "08 · Wider markets & advanced tools",
    description: "Explore global exposure and complex strategies with a clear-eyed view of when more complexity is not more skill.",
    lessons: [
      {
        id: "international-investing",
        title: "International stocks & currency risk",
        minutes: 14,
        summary: "See how geography, currencies, depositary receipts, and foreign rules shape an investment held outside your home market.",
        takeaways: ["Foreign exposure can diversify a home market but adds currency, governance, and political risks.", "A local share-price move and your home-currency return can differ.", "Fund domicile and foreign withholding can affect taxes and access."],
        sections: [
          { heading: "Two markets in one return", paragraphs: ["An overseas investment's return to a home-currency investor includes both the security's local-market performance and the currency exchange-rate change, less costs and taxes. A currency gain can help or hurt. Currency hedging can reduce some foreign-exchange exposure, but it costs money, may be imperfect, and changes the portfolio's risk profile.", "International companies can operate globally, and home-market companies can earn foreign revenues, but company revenue exposure is not a complete substitute for owning foreign markets. Country and sector weights, accounting standards, market hours, liquidity, capital controls, and political or governance risks vary."] },
          { heading: "Global fund details", paragraphs: ["A total-world fund, a developed-markets fund, an emerging-markets fund, and a regional ETF have different coverage and concentration. Check the index methodology, country weights, top companies, foreign-currency exposure, domicile, securities-lending policy, expense ratio, and tracking difference. The label “international” does not guarantee broad global representation.", "Foreign dividends may face withholding taxes, and the ability to claim a credit or treaty benefit depends on account type, fund domicile, country, and personal tax circumstances. American depositary receipts (ADRs) represent foreign shares through a depositary structure; they can involve fees, currency conversion, custody, local-market, and regulatory risks. Read the deposit agreement and disclosures."] },
          { heading: "Keep the exposure intentional", bullets: ["Know which countries and emerging markets the fund includes or excludes.", "Distinguish unhedged currency risk from hedged share classes.", "Check trading hours, spreads, tax treatment, and any foreign ownership restrictions.", "Treat foreign exposure as diversification, not a guaranteed hedge or short-term forecast."] }
        ],
        quiz: { question: "What affects a foreign asset's return measured in your home currency?", choices: ["Only its local share price", "Local asset performance and currency moves, among other costs", "Only the fund's name"], answer: 1, explanation: "Exchange-rate changes can raise or lower the home-currency return in addition to the asset's local performance." }
      },
      {
        id: "alternatives-and-options",
        title: "REITs, commodities, options & crypto",
        minutes: 17,
        summary: "Map the role and failure modes of popular alternatives before adding complexity, leverage, or custody risk.",
        takeaways: ["An alternative can concentrate risk rather than diversify it.", "Options and leveraged products can lose value rapidly and behave non-linearly.", "Crypto assets bring custody, volatility, regulatory, and total-loss risks."],
        sections: [
          { heading: "Know the exposure, not the category label", paragraphs: ["REITs own or finance real estate and may provide property-market exposure, but they can be sensitive to interest rates, debt, property type, tenant concentration, and public-market sentiment. Public REIT prices can fall even when property values move slowly. Private real-estate offerings add valuation, liquidity, fees, conflicts, and redemption risks.", "Commodities can be accessed through physical holdings, futures, companies, or structured products. Futures-based funds can have roll effects, collateral returns, tracking differences, and complex tax treatment; owning a mining company is not the same as holding the commodity. “Alternative” does not mean low-risk or a dependable inflation hedge in every period."] },
          { heading: "Leverage changes the loss math", paragraphs: ["An option's value depends on the underlying price, strike, time, volatility, rates, and other inputs. Buyers can lose the full premium; some option strategies can create losses exceeding the initial amount or obligations to deliver / buy shares. Options are not a simple shortcut to owning a stock. Read the standardized risk disclosure and practice with hypothetical examples before considering any transaction.", "Leveraged and inverse exchange-traded products often target a daily multiple, not a long-period multiple. Compounding and path dependence can make long-period returns differ materially from the stated daily target. Margin borrowing can trigger forced sales and, in some cases, losses greater than the initial capital. Understand the prospectus, collateral rules, and worst-case loss."] },
          { heading: "Digital assets require additional caution", paragraphs: ["Crypto assets can be extremely volatile and may have no claim on company cash flows or legal protections comparable to a regulated security. Risks include irreversible transfers, compromised keys, exchange failure, fraud, protocol vulnerabilities, uncertain valuation, changing law, and custody loss. Token labels and online communities do not establish an asset's legal status, utility, or safe custody.", "Only consider complexity after a diversified, goal-aligned foundation is in place, and only with money whose complete loss would not derail essential plans. This is not an endorsement or recommendation to buy any alternative."] }
        ],
        quiz: { question: "What return does a typical daily leveraged ETF target?", choices: ["A guaranteed multiple of its long-term holding-period return", "A stated multiple for a single day, with path-dependent longer-term results", "A fixed interest rate"], answer: 1, explanation: "Daily rebalancing and compounding mean longer-period returns can differ materially from the daily target multiple." }
      },
      {
        id: "investment-due-diligence",
        title: "A repeatable due-diligence checklist",
        minutes: 15,
        summary: "Run every investment idea through the same questions so confidence, marketing, or urgency do not replace evidence.",
        takeaways: ["Identify the claim, risk, cost, liquidity, and fit with the whole portfolio.", "Check primary documents and credible independent sources.", "Declining an investment you cannot explain is a valid decision."],
        sections: [
          { heading: "The seven-question screen", paragraphs: ["Before investing, be able to answer seven things in ordinary language: What is it? How does it generate return? What can cause a permanent or temporary loss? What does it cost in explicit and less-visible terms? How and when can you sell? What legal, tax, and custody arrangements apply? How does it change your whole portfolio and fit your written goal? A gap in any answer is a reason to pause.", "For a public company, start with SEC filings and the company's audited reports. For a fund, read the prospectus, shareholder report, holdings, and index methodology. For a bond, verify issuer, offering documents, credit, call features, maturity, and dealer pricing. For advice, verify the professional and disclosures. Product marketing is not a substitute for primary documentation."] },
          { heading: "Separate evidence from storytelling", paragraphs: ["Write down the core claim and the strongest counterargument. Label facts, estimates, and opinions separately. Record the date of a data point and the source; numbers change. Test what happens if revenue slows, rates rise, liquidity vanishes, the issuer defaults, a platform fails, or you need to sell earlier than planned.", "The burden of proof should rise with complexity, illiquidity, leverage, concentration, and sales pressure. You do not have to own every popular asset. A plain, understandable investment that fits a goal can be more useful than a sophisticated product you cannot monitor or explain."] },
          { heading: "The go / no-go scorecard", bullets: ["I can explain the asset and source of expected return.", "I verified the legal entity, documents, costs, and custody independently.", "I understand the maximum plausible loss and when I can exit.", "This does not duplicate an existing concentrated exposure or threaten near-term needs.", "The position size and decision fit my written plan—and I can wait before acting."] }
        ],
        quiz: { question: "What is the best response when you cannot explain an investment's custody or exit terms?", choices: ["Buy quickly before it sells out", "Pause and verify; walking away is a valid choice", "Borrow more to reduce the entry price"], answer: 1, explanation: "Unclear custody or exit terms are material unknowns. Verify independently before any commitment; there is no obligation to invest." }
      }
    ]
  },
  {
    id: "your-investing-playbook",
    title: "Build your personal playbook",
    subtitle: "09 · Put it into practice",
    description: "Use a learning-only sample framework, make the next 90 days concrete, and keep improving without chasing perfection.",
    lessons: [
      {
        id: "model-portfolio-frameworks",
        title: "Portfolio examples: frameworks, not prescriptions",
        minutes: 16,
        summary: "Use sample mixes to understand the trade-offs—not as personalized advice or a recommendation to copy a portfolio.",
        takeaways: ["Illustrative allocations are educational and can be unsuitable for a real person.", "Every portfolio needs a goal, liquidity plan, costs, and willingness to stay through losses.", "A simple diversified portfolio is a benchmark for complexity, not a guarantee."],
        sections: [
          { heading: "Compare the job, not the percentage", paragraphs: ["Here are deliberately broad classroom examples, not recommendations: a cash-focused illustration prioritizes liquidity but faces inflation risk; a bond-heavy illustration may fluctuate less than an all-stock portfolio but can lose value to rate, credit, and inflation moves; a balanced stock / bond illustration trades some growth potential for ballast; a stock-heavy illustration has higher exposure to market drawdowns in pursuit of long-term growth potential. None is universally appropriate, and even conservative labels can hide credit or duration risk.", "An often-cited 60% stock / 40% bond mix is a teaching reference—not a timeless ideal, retirement rule, or promised return. Its outcome depends on which stocks and bonds, costs, taxes, starting valuations, inflation, withdrawals, and rebalancing. A global, diversified portfolio can still fall substantially. Never copy a sample without checking your goal, emergency savings, debt, horizon, and ability to bear loss."] },
          { heading: "A useful side-by-side exercise", paragraphs: ["Choose one goal and compare two hypothetical mixes using the same assumptions, contribution schedule, fees, and withdrawal date. Change one variable at a time. Include a poor early-return scenario, high inflation, and a bond-price decline. Note whether the goal still works and what action you would take; do not rank plans only by their most optimistic ending balance.", "A simple fund portfolio is not automatically safe. Broad funds still experience market risk, country and sector concentration, tracking error, and changes in index composition. Check exact fund documents, low-cost availability, account restrictions, tax implications, and how you will stay invested before making a choice."] },
          { heading: "Build a personal decision brief", bullets: ["Goal, owner, amount, and expected spending date.", "Cash reserve and any debt or employer-plan considerations.", "Target allocation rationale and a plausible loss scenario.", "Chosen account(s), investment criteria, total costs, and contribution schedule.", "Review date, rebalancing rule, and facts that would change the plan."] }
        ],
        quiz: { question: "How should you use a sample 60/40 portfolio?", choices: ["Copy it; it works for everyone", "Use it as an educational comparison, then assess goals, holdings, costs, and risk", "Assume it cannot lose money"], answer: 1, explanation: "A sample allocation is not individualized advice, a universal rule, or a guarantee. Its details and fit matter." }
      },
      {
        id: "first-90-days",
        title: "Your first 90 days as a DIY investor",
        minutes: 14,
        summary: "Turn learning into a low-drama sequence: organize, understand, automate, and review before adding complexity.",
        takeaways: ["Start with financial housekeeping and a written goal, not a trade.", "Verify account details, costs, investment choices, and contribution settings.", "A repeatable process is a better milestone than a daily market win."],
        sections: [
          { heading: "Days 1–30: get oriented", paragraphs: ["List goals and dates, essential monthly expenses, cash reserves, debts and their interest rates, employer benefits, current accounts, and beneficiaries. Locate statements and fee disclosures. Decide which money must remain available and which goals have an investing horizon. If a debt, tax, legal, or benefits question is consequential, verify the rules with an appropriate professional.", "Write an initial one-page policy. Learn the account's menu and costs before funding it. Check that the firm is legitimate through independently found official sources, enable strong account security and multifactor authentication, and avoid links in unsolicited messages."] },
          { heading: "Days 31–60: create a deliberate system", paragraphs: ["Compare a few understandable, diversified investment approaches that match the goal. Read primary documents, holdings, fees, tax treatment, and the risks covered in this course. Choose a contribution cadence you can sustain and confirm whether the plan invests automatically or merely transfers cash.", "If you invest, make sure the amount and any concentration fit your policy. There is no requirement to invest all available money immediately. Test your plan against a downturn in a spreadsheet or in writing, not with essential cash in a live experiment."] },
          { heading: "Days 61–90: check the process, not the quote", paragraphs: ["Verify contributions and account settings, save records, and compare holdings with the written plan. Make only evidence-based changes. Set the next scheduled review, note one lesson learned, and share your policy or progress with a trusted person if that helps you stay accountable.", "A sound first 90 days may include doing nothing in the market while you build the foundation. The milestone is understanding why each decision exists, what could go wrong, and how you will respond—not beating a benchmark in three months."] }
        ],
        quiz: { question: "What is a useful first 90-day milestone?", choices: ["Beating the market every week", "Having a documented goal, a verified account, and a repeatable process", "Owning every popular asset class"], answer: 1, explanation: "A robust process and clear goals are meaningful progress. A short performance window does not measure investing skill." }
      },
      {
        id: "annual-investor-checkup",
        title: "Your annual checkup & capstone",
        minutes: 18,
        summary: "Bring every course idea together in a compact review ritual, then test what you can explain and what you still need to learn.",
        takeaways: ["Review personal circumstances, fees, risk, and account settings on a calm schedule.", "Compare results with a suitable benchmark and goal—not a viral screenshot.", "A measured change, or no change, is a valid outcome of a review."],
        sections: [
          { heading: "A calm annual review", paragraphs: ["Start with what changed in your life: income, dependents, health, location, goals, time horizon, and liquidity needs. Revisit emergency savings, debt, insurance, beneficiaries, plan eligibility, and account security. Check current contribution limits and tax rules from official sources rather than relying on an old article.", "Then inspect portfolio weights, diversification, fund costs, cash drag, distributions, tax records, and rebalancing drift. If evaluating performance, use a suitable broad benchmark with comparable asset exposure and include contributions, fees, taxes, and the time period. One year is a noisy measure; do not confuse relative outperformance with meeting your goal or underperformance with a broken plan."] },
          { heading: "Make a change only for a reason", paragraphs: ["A change may be appropriate when the goal or timeline changes, the current portfolio exceeds your ability to bear risk, a fund or provider changes materially, costs are no longer reasonable, or the original thesis is invalidated. A falling price by itself does not prove a thesis is broken; a rising price does not prove a business is sound. Identify the fact, its effect on the whole portfolio, and the alternatives before trading.", "Write down the decision, date, source, expected trade-off, tax and fee impact, and next review. If no meaningful input changed, keeping the plan is a positive, active choice."] },
          { heading: "The capstone: teach it back", bullets: ["Explain how saving differs from investing and name the risk in your next goal.", "Describe what your largest holding owns, how it earns a return, and its largest risks.", "State your allocation logic, costs, contribution habit, and rebalancing trigger.", "Name the account and tax rules you still need to verify from an official source.", "Explain what would change your plan—and what would not."] }
        ],
        quiz: { question: "What is a good reason to change an investing plan?", choices: ["A viral prediction says the market will crash", "A real change in your goal, timeline, risk capacity, or investment facts", "One week of underperformance"], answer: 1, explanation: "Meaningful changes in circumstances or evidence can justify a review. Headlines and short-term noise alone are weak reasons." }
      }
    ]
  }
];

export const allLessons = courseModules.flatMap((courseModule) =>
  courseModule.lessons.map((lesson) => ({ ...lesson, moduleId: courseModule.id, moduleTitle: courseModule.title, moduleSubtitle: courseModule.subtitle }))
);

export const totalLessons = allLessons.length;
export const totalMinutes = allLessons.reduce((sum, lesson) => sum + lesson.minutes, 0);

export const glossary: { term: string; definition: string }[] = [
  { term: "Asset allocation", definition: "The mix of broad investment categories—such as stocks, bonds, and cash—in a portfolio." },
  { term: "Bid–ask spread", definition: "The difference between the best displayed purchase bid and sale ask; it is one measure of trading cost." },
  { term: "Capital gain", definition: "A gain generally realized when an asset is sold for more than its tax basis; tax treatment depends on jurisdiction and facts." },
  { term: "Compound return", definition: "Growth on both original capital and prior accumulated returns; fees and losses compound as well." },
  { term: "Diversification", definition: "Spreading exposure across different holdings and risks to reduce dependence on any one outcome; it does not prevent loss." },
  { term: "Dividend", definition: "A distribution a company may declare to shareholders; it is not guaranteed and is not separate from business value." },
  { term: "Duration", definition: "A bond sensitivity measure that can help estimate price response to yield changes; it is not a maturity date." },
  { term: "Expense ratio", definition: "A fund's annual operating expenses expressed as a percentage of assets, generally reflected in fund performance." },
  { term: "Index", definition: "A rules-based measure of a specified set of securities; an investor typically accesses it through a fund." },
  { term: "Inflation", definition: "A broad rise in prices over time that reduces the amount of goods and services a unit of money can buy." },
  { term: "Liquidity", definition: "How readily an asset can be converted to cash near a reasonable market price." },
  { term: "Market capitalization", definition: "A company's current share price multiplied by its outstanding shares, subject to definitions of shares included." },
  { term: "Net asset value (NAV)", definition: "A fund's assets minus liabilities per share; an ETF's exchange price can differ from its NAV." },
  { term: "Rebalancing", definition: "Adjusting a portfolio toward a chosen allocation after weights drift; it does not guarantee higher returns." },
  { term: "Risk tolerance", definition: "An investor's emotional willingness to endure uncertainty and investment losses." },
  { term: "Risk capacity", definition: "An investor's financial ability to absorb loss without jeopardizing a goal or essential need." },
  { term: "SIPC", definition: "A U.S. nonprofit membership corporation that helps protect eligible customer property if a member brokerage fails; not insurance against market losses." },
  { term: "Tracking difference", definition: "The difference between a fund's return and its benchmark's return over a period." },
  { term: "Volatility", definition: "The degree to which prices or returns fluctuate over time; one dimension of risk, not a complete measure of it." },
  { term: "Yield", definition: "An income or return measure calculated in different ways; quoted yield is not always a prediction or guarantee of realized return." }
];

export const faqItems = [
  { question: "Can I take the DIY Investing Course for free?", answer: "Yes. Every lesson, quiz, glossary term, calculator, and progress feature on DIY Investing Course is free to use. No account, email address, or payment details are required." },
  { question: "Do I need investing experience to start?", answer: "No. The course starts with goals, savings, risk, and basic market building blocks, then progresses to statements, valuation, bonds, tax awareness, advanced products, and portfolio reviews." },
  { question: "Is this investing course personalized financial advice?", answer: "No. It is general educational information, not individualized investment, tax, or legal advice and not a recommendation to buy or sell a security. Investing involves risk, including possible loss of principal. Rules vary by country; verify current official guidance and consult a qualified professional for personal advice." },
  { question: "Does the course use live stock prices or predict the market?", answer: "No. It teaches durable investing concepts rather than live quotes, stock picks, or market forecasts. Rates, prices, tax rules, fund terms, and regulations change, so verify current details from primary sources before acting." },
  { question: "How is course progress saved without an account?", answer: "Completed lessons, quiz answers, and your optional practice settings are stored locally in your browser on your device. They are not tied to an account. Clearing browser storage or switching devices can remove or reset that progress." },
  { question: "How long does the investing course take?", answer: `The ${totalLessons}-lesson self-paced course contains about ${Math.round(totalMinutes / 60)} hours of lesson material, plus optional practice and research. You can stop and return at any time on the same browser.` },
  { question: "What are reliable places to verify investing information?", answer: "For U.S. investors, use SEC EDGAR and Investor.gov for company and investor information, FINRA BrokerCheck for broker background, IRS.gov for federal tax rules, FDIC.gov or NCUA.gov for deposit-insurance details, Treasury.gov / TreasuryDirect for government securities, and FRED or official agency releases for economic data. Use your own country's regulators and tax authority elsewhere." }
];
