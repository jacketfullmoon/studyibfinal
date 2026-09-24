/* ---------------------------------------------------------------
   IB Basics — Flashcards (Advanced deck)
   Source: 400 IB Interview Questions Guide (BreakingIntoWallStreet /
   Mergers & Inquisitions), "Technical Questions & Answers" chapter —
   the six "Advanced" Q&A sections: Accounting, Enterprise Value &
   Equity Value, Valuation, DCF, Merger Models, and LBO Models.
   Numbering continues on from the Basic deck (1-160), so these run
   161-233. Content below is paraphrased/condensed into study Q&A,
   not a verbatim reproduction of the guide.
----------------------------------------------------------------*/

const CARDS_ADVANCED = [
  // ---------------- Accounting ----------------
  {
    number: 161,
    section: "Accounting",
    question: "How is GAAP accounting different from tax accounting?",
    answer:
      "1. GAAP is accrual-based but tax is cash-based.\n\n2. GAAP uses straight-line depreciation or a few other methods whereas tax accounting is different (accelerated depreciation).\n\n3. GAAP is more complex and more accurately tracks assets/liabilities whereas tax accounting is only concerned with revenue/expenses in the current period and what income tax you owe.",
  },
  {
    number: 162,
    section: "Accounting",
    question: "What are deferred tax assets/liabilities and how do they arise?",
    answer:
      "They arise because of temporary differences between what a company can deduct for cash tax purposes vs. what they can deduct for book tax purposes.\n\nDeferred Tax Liabilities arise when you have a tax expense on the Income Statement but haven’t actually paid that tax in cold, hard cash yet; Deferred Tax Assets arise when you pay taxes in cash but haven’t expensed them on the Income Statement yet.\n\nThe most common way they occur is with asset write-ups and write-downs in M&A deals – an asset write-up will produce a deferred tax liability while a write-down will produce a deferred tax asset.",
  },
  {
    number: 163,
    section: "Accounting",
    question: "Walk me through how you create a revenue model for a company.",
    answer:
      "There are 2 ways you could do this: a bottoms-up build and a tops-down build.\n\nBottoms-Up: Start with individual products / customers, estimate the average sale value or customer value, and then the growth rate in sales and sale values to tie everything together.\n\nTops-Down: Start with “big-picture” metrics like overall market size, then estimate the company’s market share and how that will change in coming years, and multiply to get to their revenue.\n\nOf these two methods, bottoms-up is more common and is taken more seriously because estimating “big-picture” numbers is almost impossible.",
  },
  {
    number: 164,
    section: "Accounting",
    question: "Walk me through how you create an expense model for a company.",
    answer:
      "To do a true bottoms-up build, you start with each different department of a company, the # of employees in each, the average salary, bonuses, and benefits, and then make assumptions on those going forward.\n\nUsually you assume that the number of employees is tied to revenue, and then you assume growth rates for salary, bonuses, benefits, and other metrics.\n\nCost of Goods Sold should be tied directly to Revenue and each “unit” produced should incur an expense.\n\nOther items such as rent, Capital Expenditures, and miscellaneous expenses are either linked to the company’s internal plans for building expansion plans (if they have them), or to Revenue for a more simple model.",
  },
  {
    number: 165,
    section: "Accounting",
    question:
      "Let’s say we’re trying to create these models but don’t have enough information or the company doesn’t tell us enough in its filings – what do we do?",
    answer:
      "Use estimates. For the revenue, if you don’t have enough information to look at separate product lines or divisions of the company, you can just assume a simple growth rate into future years.\n\nFor the expenses, if you don’t have employee-level information then you can just assume that major expenses like SG&A are a percent of revenue and carry that assumption forward.",
  },
  {
    number: 166,
    section: "Accounting",
    question: "Walk me through the major items in Shareholders’ Equity.",
    answer:
      "Common items include:\n\nCommon Stock – Simply the par value of however much stock the company has issued.\n\nRetained Earnings – How much of the company’s Net Income it has “saved up” over time.\n\nAdditional Paid in Capital – This keeps track of how much stock-based compensation has been issued and how much new stock employees exercising options have created. It also includes how much over par value a company raises in an IPO or other equity offering.\n\nTreasury Stock – The dollar amount of shares that the company has bought back.\n\nAccumulated Other Comprehensive Income – This is a “catch-all” that includes other items that don’t fit anywhere else, like the effect of foreign currency exchange rates changing.",
  },
  {
    number: 167,
    section: "Accounting",
    question: "Walk me through what flows into Retained Earnings.",
    answer:
      "Retained Earnings = Old Retained Earnings Balance + Net Income – Dividends Issued\n\nIf you’re calculating Retained Earnings for the current year, take last year’s Retained Earnings number, add this year’s Net Income, and subtract however much the company paid out in dividends.",
  },
  {
    number: 168,
    section: "Accounting",
    question: "Walk me through what flows into Additional Paid-In Capital (APIC).",
    answer:
      "APIC = Old APIC + Stock-Based Compensation + Stock Created by Option Exercises\n\nIf you’re calculating it, take the balance from last year, add this year’s stock-based compensation number, and then add in however much new stock was created by employees exercising options this year.",
  },
  {
    number: 169,
    section: "Accounting",
    question: "What is the Statement of Shareholders’ Equity and why do we use it?",
    answer:
      "This statement shows everything we went through above – the major items that comprise Shareholders’ Equity, and how we arrive at each of them using the numbers elsewhere in the statement.\n\nYou don’t use it too much, but it can be helpful for analyzing companies with unusual stock-based compensation and stock option situations.",
  },
  {
    number: 170,
    section: "Accounting",
    question:
      "What are examples of non-recurring charges we need to add back to a company’s EBIT / EBITDA when looking at its financial statements?",
    answer:
      "Restructuring Charges; Goodwill Impairment; Asset Write-Downs; Bad Debt Expenses; Legal Expenses; Disaster Expenses; Change in Accounting Procedures.\n\nNote that to be an “add-back” or “non-recurring” charge for EBITDA / EBIT purposes, it needs to affect Operating Income on the Income Statement. So if you have one of these charges “below the line” then you do not add it back for the EBITDA / EBIT calculation.\n\nAlso note that you do add back Depreciation, Amortization, and sometimes Stock-Based Compensation for EBITDA / EBIT, but that these are not “non-recurring charges” because all companies have them every year – these are just non-cash charges.",
  },
  {
    number: 171,
    section: "Accounting",
    question:
      "How do you project Balance Sheet items like Accounts Receivable and Accrued Expenses in a 3-statement model?",
    answer:
      "Normally you make very simple assumptions here and assume these are percentages of revenue, operating expenses, or cost of goods sold. Examples:\n\nAccounts Receivable: % of revenue.\nDeferred Revenue: % of revenue.\nAccounts Payable: % of COGS.\nAccrued Expenses: % of operating expenses or SG&A.\n\nThen you either carry the same percentages across in future years or assume slight changes depending on the company.",
  },
  {
    number: 172,
    section: "Accounting",
    question: "How should you project Depreciation & Capital Expenditures?",
    answer:
      "The simple way: project each one as a % of revenue or previous PP&E balance.\n\nThe more complex way: create a PP&E schedule that splits out different assets by their useful lives, assumes straight-line depreciation over each asset’s useful life, and then assumes capital expenditures based on what the company has invested historically.",
  },
  {
    number: 173,
    section: "Accounting",
    question: "How do Net Operating Losses (NOLs) affect a company’s 3 statements?",
    answer:
      "The “quick and dirty” way to do this: reduce the Taxable Income by the portion of the NOLs that you can use each year, apply the same tax rate, and then subtract that new Tax number from your old Pretax Income number (which should stay the same).\n\nThe way you should do this: create a book vs. cash tax schedule where you calculate the Taxable Income based on NOLs, and then look at what you would pay in taxes without the NOLs. Then you book the difference as an increase to the Deferred Tax Liability on the Balance Sheet.\n\nThis method reflects the fact that you’re saving on cash flow – since the DTL, a liability, is rising – but correctly separates the NOL impact into book vs. cash taxes.",
  },
  {
    number: 174,
    section: "Accounting",
    question: "What’s the difference between capital leases and operating leases?",
    answer:
      "Operating leases are used for short-term leasing of equipment and property, and do not involve ownership of anything. Operating lease expenses show up as operating expenses on the Income Statement.\n\nCapital leases are used for longer-term items and give the lessee ownership rights; they depreciate and incur interest payments, and are counted as debt.\n\nA lease is a capital lease if any one of the following 4 conditions is true:\n\n1. If there’s a transfer of ownership at the end of the term.\n2. If there’s an option to purchase the asset at a bargain price at the end of the term.\n3. If the term of the lease is greater than 75% of the useful life of the asset.\n4. If the present value of the lease payments is greater than 90% of the asset’s fair market value.",
  },
  {
    number: 175,
    section: "Accounting",
    question:
      "Why would the Depreciation & Amortization number on the Income Statement be different from what’s on the Cash Flow Statement?",
    answer:
      "This happens if D&A is embedded in other Income Statement line items. When this happens, you need to use the Cash Flow Statement number to arrive at EBITDA because otherwise you’re undercounting D&A.",
  },

  // ---------------- Enterprise Value & Equity Value ----------------
  {
    number: 176,
    section: "Enterprise Value & Equity Value",
    question: "Are there any problems with the Enterprise Value formula you just gave me?",
    answer:
      "Yes – it’s too simple. There are lots of other things you need to add into the formula with real companies:\n\nNet Operating Losses – Should be valued and arguably added in, similar to cash.\nLong-Term Investments – These should be counted, similar to cash.\nEquity Investments – Any investments in other companies should also be added in, similar to cash (though they might be discounted).\nCapital Leases – Like debt, these have interest payments – so they should be added in like debt.\n(Some) Operating Leases – Sometimes you need to convert operating leases to capital leases and add them as well.\nPension Obligations – Sometimes these are counted as debt as well.\n\nSo a more “correct” formula would be Enterprise Value = Equity Value – Cash + Debt + Preferred Stock + Minority Interest – NOLs – Investments + Capital Leases + Pension Obligations…\n\nIn interviews, usually you can get away with saying “Enterprise Value = Equity Value – Cash + Debt + Preferred Stock + Minority Interest.”",
  },
  {
    number: 177,
    section: "Enterprise Value & Equity Value",
    question:
      "Should you use the book value or market value of each item when calculating Enterprise Value?",
    answer:
      "Technically, you should use market value for everything. In practice, however, you usually use market value only for the Equity Value portion, because it’s almost impossible to establish market values for the rest of the items in the formula – so you just take the numbers from the company’s Balance Sheet.",
  },
  {
    number: 178,
    section: "Enterprise Value & Equity Value",
    question: "What percentage dilution in Equity Value is “too high?”",
    answer:
      "There’s no strict “rule” here but most bankers would say that anything over 10% is odd. If your basic Equity Value is $100 million and the diluted Equity Value is $115 million, you might want to check your calculations – it’s not necessarily wrong, but over 10% dilution is unusual for most companies.",
  },

  // ---------------- Valuation ----------------
  {
    number: 179,
    section: "Valuation",
    question: "How do you value banks and financial institutions differently from other companies?",
    answer:
      "You mostly use the same methodologies, except:\n\nYou look at P / E and P / BV (Book Value) multiples rather than EV / Revenue, EV / EBITDA, and other “normal” multiples, since banks have unique capital structures.\n\nYou pay more attention to bank-specific metrics like NAV (Net Asset Value) and you might screen companies and precedent transactions based on those instead.\n\nRather than a DCF, you use a Dividend Discount Model (DDM) which is similar but is based on the present value of the company’s dividends rather than its free cash flows.\n\nYou need to use these methodologies and multiples because interest is a critical component of a bank’s revenue and because debt is part of its business model rather than just a way to finance acquisitions or expand the business.",
  },
  {
    number: 180,
    section: "Valuation",
    question: "Walk me through an IPO valuation for a company that’s about to go public.",
    answer:
      "1. Unlike normal valuations, for an IPO valuation we only care about public company comparables.\n2. After picking the public company comparables we decide on the most relevant multiple to use and then estimate our company’s Enterprise Value based on that.\n3. Once we have the Enterprise Value, we work backward to get to Equity Value and also subtract the IPO proceeds because this is “new” cash.\n4. Then we divide by the total number of shares (old and newly created) to get its per-share price. When people say “An IPO priced at…” this is what they’re referring to.\n\nIf you were using P / E or any other “Equity Value-based multiple” for the multiple in step #2 here, then you would get to Equity Value instead and then subtract the IPO proceeds from there.",
  },
  {
    number: 181,
    section: "Valuation",
    question:
      "I’m looking at financial data for a public company comparable, and it’s April (Q2) right now. Walk me through how you would “calendarize” this company’s financial statements to show the Trailing Twelve Months as opposed to just the last Fiscal Year.",
    answer:
      "The “formula” to calendarize financial statements is as follows:\n\nTTM = Most Recent Fiscal Year + New Partial Period – Old Partial Period\n\nSo in the example above, we would take the company’s Q1 numbers, add the most recent fiscal year’s numbers, and then subtract the Q1 numbers from that most recent fiscal year.\n\nFor US companies you can find these quarterly numbers in the 10-Q; for international companies they’re in the “interim” reports.",
  },
  {
    number: 182,
    section: "Valuation",
    question: "Walk me through an M&A premiums analysis.",
    answer:
      "The purpose of this analysis is to look at similar transactions and see the premiums that buyers have paid to sellers’ share prices when acquiring them. For example, if a company is trading at $10.00/share and the buyer acquires it for $15.00/share, that’s a 50% premium.\n\n1. First, select the precedent transactions based on industry, date (past 2-3 years for example), and size (example: over $1 billion market cap).\n2. For each transaction, get the seller’s share price 1 day, 20 days, and 60 days before the transaction was announced (you can also look at even longer intervals, or 30 days, 45 days, etc.).\n3. Then, calculate the 1-day premium, 20-day premium, etc. by dividing the per-share purchase price by the appropriate share prices on each day.\n4. Get the medians for each set, and then apply them to your company’s current share price, share price 20 days ago, etc. to estimate how much of a premium a buyer might pay for it.\n\nNote that you only use this analysis when valuing public companies because private companies don’t have share prices. Sometimes the set of companies here is exactly the same as your set of precedent transactions but typically it is broader.",
  },
  {
    number: 183,
    section: "Valuation",
    question: "Walk me through a future share price analysis.",
    answer:
      "The purpose of this analysis is to project what a company’s share price might be 1 or 2 years from now and then discount it back to its present value.\n\n1. Get the median historical (usually TTM) P / E of your public company comparables.\n2. Apply this P / E multiple to your company’s 1-year forward or 2-year forward projected EPS to get its implied future share price.\n3. Then, discount this back to its present value by using a discount rate in-line with the company’s Cost of Equity figures.\n\nYou normally look at a range of P / E multiples as well as a range of discount rates for this type of analysis, and make a sensitivity table with these as inputs.",
  },
  {
    number: 184,
    section: "Valuation",
    question:
      "Both M&A premiums analysis and precedent transactions involve looking at previous M&A transactions. What’s the difference in how we select them?",
    answer:
      "All the sellers in the M&A premiums analysis must be public.\n\nUsually we use a broader set of transactions for M&A premiums – we might use fewer than 10 precedent transactions but we might have dozens of M&A premiums. The industry and financial screens are usually less stringent.\n\nAside from those, the screening criteria is similar – financial, industry, geography, and date.",
  },
  {
    number: 185,
    section: "Valuation",
    question: "Walk me through a Sum-of-the-Parts analysis.",
    answer:
      "In a Sum-of-the-Parts analysis, you value each division of a company using separate comparables and transactions, get to separate multiples, and then add up each division’s value to get the total for the company. Example:\n\nWe have a manufacturing division with $100 million EBITDA, an entertainment division with $50 million EBITDA and a consumer goods division with $75 million EBITDA. We’ve selected comparable companies and transactions for each division, and the median multiples come out to 5x EBITDA for manufacturing, 8x EBITDA for entertainment, and 4x EBITDA for consumer goods.\n\nOur calculation would be $100 * 5x + $50 * 8x + $75 * 4x = $1.2 billion for the company’s total value.",
  },
  {
    number: 186,
    section: "Valuation",
    question: "How do you value Net Operating Losses and take them into account in a valuation?",
    answer:
      "You value NOLs based on how much they’ll save the company in taxes in future years, and then take the present value of the sum of tax savings in future years. Two ways to assess the tax savings in future years:\n\n1. Assume that a company can use its NOLs to completely offset its taxable income until the NOLs run out.\n2. In an acquisition scenario, use Section 382 and multiply the adjusted long-term rate by the equity purchase price of the seller to determine the maximum allowed NOL usage in each year – and then use that to figure out the offset to taxable income.\n\nYou might look at NOLs in a valuation but you rarely add them in – if you did, they would be similar to cash and you would subtract NOLs to go from Equity Value to Enterprise Value, and vice versa.",
  },
  {
    number: 187,
    section: "Valuation",
    question:
      "I have a set of public company comparables and need to get the projections from equity research. How do I select which report to use?",
    answer:
      "This varies by bank and group, but two common methods:\n\n1. You pick the report with the most detailed information.\n2. You pick the report with numbers in the middle of the range.\n\nNote that you do not pick reports based on which bank they’re coming from. So if you’re at Goldman Sachs, you would not pick all Goldman Sachs equity research – in fact that would be bad because then your valuation would not be objective.",
  },
  {
    number: 188,
    section: "Valuation",
    question:
      "I have a set of precedent transactions but I’m missing information like EBITDA for a lot of the companies – how can I find it if it’s not available via public sources?",
    answer:
      "1. Search online and see if you can find press releases or articles in the financial press with these numbers.\n2. Failing that, look in equity research for the buyer around the time of the transaction and see if any of the analysts estimate the seller’s numbers.\n3. Also look on online sources like Capital IQ and Factset and see if any of them disclose numbers or give estimates.",
  },
  {
    number: 189,
    section: "Valuation",
    question:
      "How far back and forward do we usually go for public company comparable and precedent transaction multiples?",
    answer:
      "Usually you look at the TTM (Trailing Twelve Months) period for both sets, and then you look forward either 1 or 2 years. You’re more likely to look backward more than 1 year and go forward more than 2 years for public company comparables; for precedent transactions it’s odd to go forward more than 1 year because your information is more limited.",
  },
  {
    number: 190,
    section: "Valuation",
    question:
      "I have one company with a 40% EBITDA margin trading at 8x EBITDA, and another company with a 10% EBITDA margin trading at 16x EBITDA. What’s the problem with comparing these two valuations directly?",
    answer:
      "There’s no “rule” that says this is wrong or not allowed, but it can be misleading to compare companies with dramatically different margins. Due to basic arithmetic, the 40% margin company will usually have a lower multiple – whether or not its actual value is lower.\n\nIn this situation, we might consider screening based on margins and remove the outliers – you would never try to “normalize” the EBITDA multiples based on margins.",
  },
  {
    number: 191,
    section: "Valuation",
    question:
      "Walk me through how we might value an oil & gas company and how it’s different from a “standard” company.",
    answer:
      "You use the same methodologies, except:\n\nYou look at industry-specific multiples like P / MCFE and P / NAV in addition to the more standard ones.\n\nYou need to project the prices of commodities like oil and natural gas, and also the company’s reserves to determine its revenue and cash flows in future years.\n\nRather than a DCF, you use a NAV (Net Asset Value) model – it’s similar, but everything flows from the company’s reserves rather than simple revenue growth / EBITDA margin projections.\n\nIn addition to all of the above, there are also some accounting complications with energy companies and you need to think about what a “proven” reserve is vs. what is more speculative.",
  },
  {
    number: 192,
    section: "Valuation",
    question:
      "Walk me through how we would value a REIT (Real Estate Investment Trust) and how it differs from a “normal” company.",
    answer:
      "Similar to energy, real estate is asset-intensive and a company’s value depends on how much cash flow specific properties generate.\n\nYou look at Price / FFO (Funds From Operations) and Price / AFFO (Adjusted Funds From Operations), which add back Depreciation and subtract gains on property sales; NAV (Net Asset Value) is also important.\n\nYou value properties by dividing Net Operating Income (NOI) (Property’s Gross Income – Operating Expenses) by the capitalization rate (based on market data).\n\nReplacement Valuation is more common because you can actually estimate the cost of buying new land and building new properties.\n\nA DCF is still a DCF, but it flows from specific properties and it might be useless depending on what kind of company you’re valuing.",
  },

  // ---------------- DCF ----------------
  {
    number: 193,
    section: "DCF",
    question: "Explain why we would use the mid-year convention in a DCF.",
    answer:
      "You use it to represent the fact that a company’s cash flow does not come 100% at the end of each year – instead, it comes in evenly throughout each year.\n\nIn a DCF without mid-year convention, we would use discount period numbers of 1 for the first year, 2 for the second year, 3 for the third year, and so on.\n\nWith mid-year convention, we would instead use 0.5 for the first year, 1.5 for the second year, 2.5 for the third year, and so on.",
  },
  {
    number: 194,
    section: "DCF",
    question:
      "What discount period numbers would I use for the mid-year convention if I have a stub period – e.g. Q4 of Year 1 – in my DCF?",
    answer:
      "The rule is that you divide the stub discount period by 2, and then you simply subtract 0.5 from the “normal” discount periods for the future years. Example for a Q4 stub, across Q4 and then Years 1 through 5:\n\nNormal Discount Periods with Stub: 0.25, 1.25, 2.25, 3.25, 4.25, 5.25\n\nMid-Year Discount Periods with Stub: 0.125, 0.75, 1.75, 2.75, 3.75, 4.75",
  },
  {
    number: 195,
    section: "DCF",
    question: "How does the terminal value calculation change when we use the mid-year convention?",
    answer:
      "When you’re discounting the terminal value back to the present value, you use different numbers for the discount period depending on whether you’re using the Multiples Method or Gordon Growth Method:\n\nMultiples Method: You add 0.5 to the final year discount number to reflect the fact that you’re assuming the company gets sold at the end of the year.\n\nGordon Growth Method: You use the final year discount number as is, because you’re assuming the cash flows grow into perpetuity and that they are still received throughout the year rather than just at the end.",
  },
  {
    number: 196,
    section: "DCF",
    question: "If I’m working with a public company in a DCF, how do I calculate its per-share value?",
    answer:
      "Once you get to Enterprise Value, ADD cash and then subtract debt, preferred stock, and minority interest (and any other debt-like items) to get to Equity Value.\n\nThen, you need to use a circular calculation that takes into account the basic shares outstanding, options, warrants, convertibles, and other dilutive securities. It’s circular because the dilution from these depends on the per-share price – but the per-share price depends on number of shares outstanding, which depends on the per-share price.\n\nTo resolve this, you need to enable iterative calculations in Excel so that it can cycle through to find an approximate per-share price.",
  },
  {
    number: 197,
    section: "DCF",
    question:
      "Walk me through a Dividend Discount Model (DDM) that you would use in place of a normal DCF for financial institutions.",
    answer:
      "The mechanics are the same as a DCF, but we use dividends rather than free cash flows:\n\n1. Project out the company’s earnings, down to earnings per share (EPS).\n2. Assume a dividend payout ratio – what percentage of the EPS actually gets paid out to shareholders in the form of dividends – based on what the firm has done historically and how much regulatory capital it needs.\n3. Use this to calculate dividends over the next 5-10 years.\n4. Discount each dividend to its present value based on Cost of Equity – NOT WACC – and then sum these up.\n5. Calculate terminal value based on P / E and EPS in the final year, and then discount this to its present value based on Cost of Equity.\n6. Sum the present value of the terminal value and the present values of the dividends to get the company’s net present per-share value.",
  },
  {
    number: 198,
    section: "DCF",
    question:
      "When you’re calculating WACC, let’s say that the company has convertible debt. Do you count this as debt when calculating Levered Beta for the company?",
    answer:
      "Trick question. If the convertible debt is in-the-money then you do not count it as debt but instead assume that it contributes to dilution, so the company’s Equity Value is higher. If it’s out-of-the-money then you count it as debt and use the interest rate on the convertible for Cost of Debt.",
  },
  {
    number: 199,
    section: "DCF",
    question:
      "We’re creating a DCF for a company that is planning to buy a factory for $100 in cash (no debt or other financing) in Year 4. Currently the present value of its Enterprise Value according to the DCF is $200. How would we change the DCF to account for the factory purchase, and what would our new Enterprise Value be?",
    answer:
      "In this scenario, you would add CapEx spending of $100 in year 4 of the DCF, which would reduce Free Cash Flow for that year by $100. The Enterprise Value, in turn, would fall by the present value of that $100 decrease in Free Cash Flow.\n\nThe actual math here is messy but you would calculate the present value by dividing $100 by ((1 + Discount Rate)^4) – the “4” just represents year 4 here. Then you would subtract this amount from the Enterprise Value.",
  },

  // ---------------- Merger Models ----------------
  {
    number: 200,
    section: "Merger Models",
    question: "What’s the difference between Purchase Accounting and Pooling Accounting in an M&A deal?",
    answer:
      "In purchase accounting the seller’s shareholders’ equity number is wiped out and the premium paid over that value is recorded as Goodwill on the combined balance sheet post-acquisition. In pooling accounting, you simply combine the 2 shareholders’ equity numbers rather than worrying about Goodwill and the related items that get created.\n\nThere are specific requirements for using pooling accounting, so in 99% of M&A deals you will use purchase accounting.",
  },
  {
    number: 201,
    section: "Merger Models",
    question: "Walk me through a concrete example of how to calculate revenue synergies.",
    answer:
      "“Let’s say that Microsoft is going to acquire Yahoo. Yahoo makes money from search advertising online, and they make a certain amount of revenue per search (RPS). Let’s say this RPS is $0.10 right now. If Microsoft acquired it, we might assume that they could boost this RPS by $0.01 or $0.02 because of their superior monetization. So to calculate the additional revenue from this synergy, we would multiply this $0.01 or $0.02 by Yahoo’s total # of searches, get the total additional revenue, and then select a margin on it to determine how much flows through to the combined company’s Operating Income.”",
  },
  {
    number: 202,
    section: "Merger Models",
    question: "Walk me through an example of how to calculate expense synergies.",
    answer:
      "“Let’s say that Microsoft still wants to acquire Yahoo!. Microsoft has 5,000 SG&A-related employees, whereas Yahoo has around 1,000. Microsoft calculates that post-transaction, it will only need about 200 of Yahoo’s SG&A employees, and its existing employees can take over the rest of the work. To calculate the Operating Expenses the combined company would save, we would multiply these 800 employees Microsoft is going to fire post-transaction by their average salary.”",
  },
  {
    number: 203,
    section: "Merger Models",
    question: "How do you take into account NOLs in an M&A deal?",
    answer:
      "You apply Section 382 to determine how much of the seller’s NOLs are usable each year.\n\nAllowable NOLs = Equity Purchase Price * Highest of Past 3 Months’ Adjusted Long Term Rates\n\nSo if our equity purchase price were $1 billion and the highest adjusted long-term rate were 5%, then we could use $1 billion * 5% = $50 million of NOLs each year.\n\nIf the seller had $250 million in NOLs, then the combined company could use $50 million of them each year for 5 years to offset its taxable income.",
  },
  {
    number: 204,
    section: "Merger Models",
    question: "Why do deferred tax liabilities (DTLs) and deferred tax assets (DTAs) get created in M&A deals?",
    answer:
      "These get created when you write up assets – both tangible and intangible – and when you write down assets in a transaction. An asset write-up creates a deferred tax liability, and an asset write-down creates a deferred tax asset.\n\nYou write down and write up assets because their book value – what’s on the balance sheet – often differs substantially from their “fair market value.”\n\nAn asset write-up creates a deferred tax liability because you’ll have a higher depreciation expense on the new asset, which means you save on taxes in the short-term – but eventually you’ll have to pay them back, hence the liability. The opposite applies for an asset write-down and a deferred tax asset.",
  },
  {
    number: 205,
    section: "Merger Models",
    question: "How do DTLs and DTAs affect the Balance Sheet Adjustment in an M&A deal?",
    answer:
      "You take them into account with everything else when calculating the amount of Goodwill & Other Intangibles to create on your pro-forma balance sheet. The formulas are as follows:\n\nDeferred Tax Asset = Asset Write-Down * Tax Rate\nDeferred Tax Liability = Asset Write-Up * Tax Rate\n\nSo let’s say you were buying a company for $1 billion with half-cash and half-debt, and you had a $100 million asset write-up and a tax rate of 40%. In addition, the seller has total assets of $200 million, total liabilities of $150 million, and shareholders’ equity of $50 million.\n\nHere’s what would happen to the combined company’s balance sheet (ignoring transaction/financing fees):\n\nFirst, you simply add the seller’s Assets and Liabilities (but NOT Shareholders’ Equity – it is wiped out) to the buyer’s to get your “initial” balance sheet. Assets are up by $200 million and Liabilities are down by $150 million.\n\nThen, Cash on the Assets side goes down by $500 million.\n\nDebt on the Liabilities & Equity side goes up by $500 million.\n\nYou get a new Deferred Tax Liability of $40 million ($100 million * 40%) on the Liabilities & Equity side.\n\nAssets are down by $300 million total and Liabilities & Shareholders’ Equity are up by $690 million ($500 + $40 + $150).\n\nSo you need Goodwill & Intangibles of $990 million on the Assets side to make both sides balance.",
  },
  {
    number: 206,
    section: "Merger Models",
    question: "Could you get DTLs or DTAs in an asset purchase?",
    answer:
      "No, because in an asset purchase the book basis of assets always matches the tax basis. They get created in a stock purchase because the book values of assets are written up or written down, but the tax values are not.",
  },
  {
    number: 207,
    section: "Merger Models",
    question: "How do you account for DTLs in forward projections in a merger model?",
    answer:
      "You create a book vs. cash tax schedule and figure out what the company owes in taxes based on the Pretax Income on its books, and then you determine what it actually pays in cash taxes based on its NOLs and newly created amortization and depreciation expenses (from any asset write-ups).\n\nAnytime the “cash” tax expense exceeds the “book” tax expense you record this as a decrease to the Deferred Tax Liability on the Balance Sheet; if the “book” expense is higher, then you record that as an increase to the DTL.",
  },
  {
    number: 208,
    section: "Merger Models",
    question: "Explain the complete formula for how to calculate Goodwill in an M&A deal.",
    answer:
      "Goodwill = Equity Purchase Price – Seller Book Value + Seller’s Existing Goodwill – Asset Write-Ups – Seller’s Existing Deferred Tax Liability + Write-Down of Seller’s Existing Deferred Tax Asset + Newly Created Deferred Tax Liability\n\nA couple notes here:\n\nSeller Book Value is just the Shareholders’ Equity number.\n\nYou add the Seller’s Existing Goodwill because it gets written down to $0 in an M&A deal.\n\nYou subtract the Asset Write-Ups because these are additions to the Assets side of the Balance Sheet – Goodwill is also an asset, so effectively you need less Goodwill to “plug the hole.”\n\nNormally you assume 100% of the Seller’s existing DTL is written down.\n\nThe seller’s existing DTA may or may not be written down completely.",
  },
  {
    number: 209,
    section: "Merger Models",
    question: "Explain why we would write down the seller’s existing Deferred Tax Asset in an M&A deal.",
    answer:
      "You write it down to reflect the fact that Deferred Tax Assets include NOLs, and that you might use these NOLs post-transaction to offset the combined entity’s taxable income.\n\nIn an asset or 338(h)(10) purchase you assume that the entire NOL balance goes to $0 in the transaction, and then you write down the existing Deferred Tax Asset by this NOL write-down.\n\nIn a stock purchase the formula is:\n\nDTA Write-Down = Buyer Tax Rate * MAX(0, NOL Balance – Allowed Annual NOL Usage * Expiration Period in Years)\n\nThis formula is saying, “If we’re going to use up all these NOLs post transaction, let’s not write anything down. Otherwise, let’s write down the portion that we cannot actually use post-transaction, i.e. whatever our existing NOL balance is minus the amount we can use per year times the number of years.”",
  },
  {
    number: 210,
    section: "Merger Models",
    question: "What’s a Section 338(h)(10) election and why might a company want to use it in an M&A deal?",
    answer:
      "A Section 338(h)(10) election blends the benefits of a stock purchase and an asset purchase:\n\nLegally it is a stock purchase, but accounting-wise it’s treated like an asset purchase.\n\nThe seller is still subject to double-taxation – on its assets that have appreciated and on the proceeds from the sale.\n\nBut the buyer receives a step-up tax basis on the new assets it acquires, and it can depreciate/amortize them so it saves on taxes.\n\nEven though the seller still gets taxed twice, buyers will often pay more in a 338(h)(10) deal because of the tax-savings potential. It’s particularly helpful for:\n\nSellers with high NOL balances (more tax-savings for the buyer because this NOL balance will be written down completely – and so more of the excess purchase price can be allocated to asset write-ups).\n\nIf the company has been an S-corporation for over 10 years – in this case it doesn’t have to pay a tax on the appreciation of its assets.\n\nThe requirements to use 338(h)(10) are complex and bankers don’t deal with this – that is the role of lawyers and tax accountants.",
  },
  {
    number: 211,
    section: "Merger Models",
    question: "What is an exchange ratio and when would companies use it in an M&A deal?",
    answer:
      "An exchange ratio is an alternate way of structuring a 100% stock M&A deal, or any M&A deal with a portion of stock involved.\n\nLet’s say you were going to buy a company for $100 million in an all-stock deal. Normally you would determine how much stock to issue by dividing the $100 million by the buyer’s stock price, and using that to get the new share count.\n\nWith an exchange ratio, by contrast, you would tie the number of new shares to the buyer’s own shares – so the seller might receive 1.5 shares of the buyer’s shares for each of its shares, rather than shares worth a specific dollar amount.\n\nBuyers might prefer to do this if they believe their stock price is going to decline post-transaction – sellers, on the other hand, would prefer a fixed dollar amount in stock unless they believe the buyer’s share price will rise after the transaction.",
  },
  {
    number: 212,
    section: "Merger Models",
    question: "Walk me through the most important terms of a Purchase Agreement in an M&A deal.",
    answer:
      "There are dozens, but here are the most important ones:\n\nPurchase Price: Stated as a per-share amount for public companies.\n\nForm of Consideration: Cash, Stock, Debt…\n\nTransaction Structure: Stock, Asset, or 338(h)(10)\n\nTreatment of Options: Assumed by the buyer? Cashed out? Ignored?\n\nEmployee Retention: Do employees have to sign non-solicit or non-compete agreements? What about management?\n\nReps & Warranties: What must the buyer and seller claim is true about their respective businesses?\n\nNo-Shop / Go-Shop: Can the seller “shop” this offer around and try to get a better deal, or must it stay exclusive to this buyer?",
  },
  {
    number: 213,
    section: "Merger Models",
    question: "What’s an Earnout and why would a buyer offer it to a seller in an M&A deal?",
    answer:
      "An Earnout is a form of “deferred payment” in an M&A deal – it’s most common with private companies and start-ups, and is highly unusual with public sellers.\n\nIt is usually contingent on financial performance or other goals – for example, the buyer might say, “We’ll give you an additional $10 million in 3 years if you can hit $100 million in revenue by then.”\n\nBuyers use it to incentivize sellers to continue to perform well and to discourage management teams from taking the money and running off to an island in the South Pacific once the deal is done.",
  },
  {
    number: 214,
    section: "Merger Models",
    question: "How would an accretion / dilution model be different for a private seller?",
    answer:
      "The mechanics are the same, but the transaction structure is more likely to be an asset purchase or 338(h)(10) election; private sellers also don’t have Earnings Per Share so you would only project down to Net Income on the seller’s Income Statement.\n\nNote that accretion / dilution makes no sense if you have a private buyer because private companies do not have Earnings Per Share.",
  },
  {
    number: 215,
    section: "Merger Models",
    question: "How would I calculate “break-even synergies” in an M&A deal and what does the number mean?",
    answer:
      "To do this, you would set the EPS accretion / dilution to $0.00 and then back-solve in Excel to get the required synergies to make the deal neutral to EPS.\n\nIt’s important because you want an idea of whether or not a deal “works” mathematically, and a high number for the break-even synergies tells you that you’re going to need a lot of cost savings or revenue synergies to make it work.",
  },
  {
    number: 216,
    section: "Merger Models",
    question:
      "Normally in an accretion / dilution model you care most about combining both companies’ Income Statements. But let’s say I want to combine all 3 financial statements – how would I do this?",
    answer:
      "You combine the Income Statements like you normally would, and then you do the following:\n\n1. Combine the buyer’s and seller’s balance sheets (except for the seller’s Shareholders’ Equity number).\n2. Make the necessary Pro-Forma Adjustments (cash, debt, goodwill/intangibles, etc.).\n3. Project the combined Balance Sheet using standard assumptions for each item.\n4. Then project the Cash Flow Statement and link everything together as you normally would with any other 3-statement model.",
  },
  {
    number: 217,
    section: "Merger Models",
    question: "How do you handle options, convertible debt, and other dilutive securities in a merger model?",
    answer:
      "The exact treatment depends on the terms of the Purchase Agreement – the buyer might assume them or it might allow the seller to “cash them out” assuming that the per-share purchase price is above the exercise prices of these dilutive securities.\n\nIf you assume they’re exercised, then you calculate dilution to the equity purchase price in the same way you normally would – Treasury Stock Method for options, and assume that convertibles convert into normal shares using the conversion price.",
  },
  {
    number: 218,
    section: "Merger Models",
    question: "What are the main 3 transaction structures you could use to acquire another company?",
    answer:
      "Stock Purchase, Asset Purchase, and 338(h)(10) Election. The basic differences:\n\nStock Purchase: Buyer acquires all assets and liabilities of the seller as well as off-balance sheet items. The seller is taxed at the capital gains tax rate. The buyer receives no step-up tax basis for the newly acquired assets, and it can’t depreciate/amortize them for tax purposes. A Deferred Tax Liability gets created as a result of the above. Most common for public companies and larger private companies.\n\nAsset Purchase: Buyer acquires only certain assets and assumes only certain liabilities of the seller and gets nothing else. Seller is taxed on the amount its assets have appreciated (what the buyer is paying for each one minus its book value) and also pays a capital gains tax on the proceeds. The buyer receives a step-up tax basis for the newly acquired assets, and it can depreciate/amortize them for tax purposes. No Deferred Tax Liability is created. Most common for private companies, divestitures, and distressed public companies.\n\nSection 338(h)(10) Election: Buyer acquires all assets and liabilities of the seller as well as off-balance sheet items. Seller is taxed on the amount its assets have appreciated and also pays a capital gains tax on the proceeds. The buyer receives a step-up tax basis for the newly acquired assets, and it can depreciate/amortize them for tax purposes. No Deferred Tax Liability is created. Most common for private companies, divestitures, and distressed public companies. To compensate for the buyer’s favorable tax treatment, the buyer usually agrees to pay more than it would in an Asset Purchase.",
  },
  {
    number: 219,
    section: "Merger Models",
    question: "Would a seller prefer a stock purchase or an asset purchase? What about the buyer?",
    answer:
      "A seller almost always prefers a stock purchase to avoid double taxation and to get rid of all its liabilities. The buyer almost always prefers an asset deal so it can be more careful about what it acquires and to get the tax benefit from being able to deduct depreciation and amortization of asset write-ups for tax purposes.",
  },
  {
    number: 220,
    section: "Merger Models",
    question: "Explain what a contribution analysis is and why we might look at it in a merger model.",
    answer:
      "A contribution analysis compares how much revenue, EBITDA, Pre-Tax Income, cash, and possibly other items the buyer and seller are “contributing” to estimate what the ownership of the combined company should be.\n\nFor example, let’s say that the buyer is set to own 50% of the new company and the seller is set to own 50%. But the buyer has $100 million of revenue and the seller has $50 million of revenue – a contribution analysis would tell us that the buyer “should” own 66% instead because it’s contributing 2/3 of the combined revenue.\n\nIt’s most common to look at this with merger of equals scenarios, and less common when the buyer is significantly larger than the seller.",
  },
  {
    number: 221,
    section: "Merger Models",
    question:
      "How do you account for transaction costs, financing fees, and miscellaneous expenses in a merger model?",
    answer:
      "In the “old days” you used to capitalize these expenses and then amortize them; with the new accounting rules, you’re supposed to expense transaction and miscellaneous fees upfront, but capitalize the financing fees and amortize them over the life of the debt.\n\nExpensed transaction fees come out of Retained Earnings when you adjust the Balance Sheet, while capitalized financing fees appear as a new Asset on the Balance Sheet and are amortized each year according to the tenor of the debt.",
  },

  // ---------------- LBO Models ----------------
  {
    number: 222,
    section: "LBO Models",
    question:
      "Tell me about all the different kinds of debt you could use in an LBO and the differences between everything.",
    answer:
      "The main types, in order of rising interest rates: Revolver, Term Loan A, Term Loan B, Senior Notes, Subordinated Notes, and Mezzanine. A revolver has the lowest interest rate, Term Loan A is slightly higher, B is slightly higher, Senior Notes are higher than Term Loan B, and so on.\n\nTenor (“How many years will this loan be outstanding?”): Revolver 3-5 years; Term Loan A 4-6 years; Term Loan B 4-8 years; Senior Notes 7-10 years; Subordinated Notes 8-10 years; Mezzanine 8-12 years.\n\nAmortization: None for the Revolver, Straight Line for Term Loan A, Minimal for Term Loan B, and Bullet for the notes and mezzanine. “Straight line” means the company pays off the principal in equal installments each year, while “bullet” means the entire principal is due at the end of the loan’s lifecycle. “Minimal” just means a low percentage of the principal each year, usually in the 1-5% range.\n\nOther features: bank debt (Revolver, Term Loans) is floating-rate, secured, prepayable, carries maintenance covenants and is held by conservative investors and banks; the notes and mezzanine are fixed-rate, unsecured or subordinated, generally not prepayable, carry call protection and incurrence covenants, and are held by hedge funds, merchant banks and mezzanine funds. Mezzanine can be Cash Pay or PIK.\n\n“Seniority” refers to the order of claims on a company’s assets in a bankruptcy – the Senior Secured holders are first in line, followed by Senior Unsecured, Senior Subordinated, and then Equity Investors.\n\n“Floating” or “Fixed” Interest Rates: A “floating” interest rate is tied to LIBOR. For example, L + 100 means that the interest rate of the loan is whatever LIBOR is at currently, plus 100 basis points (1.0%). A fixed interest rate, on the other hand, would be 11% – it doesn’t “float” with LIBOR or any other rate.\n\nCall Protection: Is the company prohibited from “calling back” – paying off or redeeming – the security for a certain period? This is beneficial for investors because they are guaranteed a certain number of interest payments.",
  },
  {
    number: 223,
    section: "LBO Models",
    question:
      "How would an asset write-up or write-down affect an LBO model? / Walk me through how you adjust the Balance Sheet in an LBO model.",
    answer:
      "All of this is very similar to what you would see in a merger model – you calculate Goodwill, Other Intangibles, and the rest of the write-ups in the same way, and then the Balance Sheet adjustments (e.g. subtracting cash, adding in capitalized financing fees, writing up assets, wiping out goodwill, adjusting the deferred tax assets / liabilities, adding in new debt, etc.) are almost the same.\n\nThe key differences:\n\nIn an LBO model you assume that the existing Shareholders’ Equity is wiped out and replaced by the equity the private equity firm contributes to buy the company; you may also add in Preferred Stock, Management Rollover, or Rollover from Option Holders to this number as well depending on what you’re assuming for transaction financing.\n\nIn an LBO model you’ll usually be adding a lot more tranches of debt vs. what you would see in a merger model.\n\nIn an LBO model you’re not combining two companies’ Balance Sheets.",
  },
  {
    number: 224,
    section: "LBO Models",
    question:
      "Normally we care about the IRR for the equity investors in an LBO – the PE firm that buys the company – but how do we calculate the IRR for the debt investors?",
    answer:
      "For the debt investors, you need to calculate the interest and principal payments they receive from the company each year.\n\nThen you simply use the IRR function in Excel and start with the negative amount of the original debt for “Year 0,” assume that the interest and principal payments each year are your “cash flows” and then assume that the remaining debt balance in the final year is your “exit value.”\n\nMost of the time, returns for debt investors will be lower than returns for the equity investors – but if the deal goes poorly or the PE firm can’t sell the company for a good price, the reverse could easily be true.",
  },
  {
    number: 225,
    section: "LBO Models",
    question:
      "Why might a private equity firm allot some of a company’s new equity in an LBO to a management option pool, and how would this affect the model?",
    answer:
      "This is done for the same reason you have an Earnout in an M&A deal: the PE firm wants to incentivize the management team and keep everyone on-board until they exit the investment.\n\nThe difference is that there’s no technical limit on how much management might receive from such an option pool: if they hit it out of the park, maybe they’ll all become millionaires.\n\nIn your LBO model, you would need to calculate a per-share purchase price when the PE firm exits the investment, and then calculate how much of the proceeds go to the management team based on the Treasury Stock Method.\n\nAn option pool by itself would reduce the PE firm’s return, but this is offset by the fact that the company should perform better with this incentive in place.",
  },
  {
    number: 226,
    section: "LBO Models",
    question:
      "Why would you use PIK (Payment In Kind) debt rather than other types of debt, and how does it affect the debt schedules and the other statements?",
    answer:
      "Unlike “normal” debt, a PIK loan does not require the borrower to make cash interest payments – instead, the interest just accrues to the loan principal, which keeps going up over time. A PIK “toggle” allows the company to choose whether to pay the interest in cash or have it accrue to the principal (these have disappeared since the credit crunch).\n\nPIK is more risky than other forms of debt and carries with it a higher interest rate than traditional bank debt or high yield debt.\n\nAdding it to the debt schedules is similar to adding high-yield debt with a bullet maturity – except instead of assuming cash interest payments, you assume that the interest accrues to the principal instead.\n\nYou should then include this interest on the Income Statement, but you need to add back any PIK interest on the Cash Flow Statement because it’s a non-cash expense.",
  },
  {
    number: 227,
    section: "LBO Models",
    question: "What are some examples of incurrence covenants? Maintenance covenants?",
    answer:
      "Incurrence Covenants:\n\nCompany cannot take on more than $2 billion of total debt.\nProceeds from any asset sales must be earmarked to repay debt.\nCompany cannot make acquisitions of over $200 million in size.\nCompany cannot spend more than $100 million on CapEx each year.\n\nMaintenance Covenants:\n\nTotal Debt / EBITDA cannot exceed 3.0x\nSenior Debt / EBITDA cannot exceed 2.0x\n(Total Cash Payable Debt + Capitalized Leases) / EBITDAR cannot exceed 4.0x\nEBITDA / Interest Expense cannot fall below 5.0x\nEBITDA / Cash Interest Expense cannot fall below 3.0x\n(EBITDA – CapEx) / Interest Expense cannot fall below 2.0x",
  },
  {
    number: 228,
    section: "LBO Models",
    question:
      "Just like a normal M&A deal, you can structure an LBO either as a stock purchase or as an asset purchase. Can you also use Section 338(h)(10) election?",
    answer:
      "In most cases, no – because one of the requirements for Section 338(h)(10) is that the buyer must be a C corporation. Most private equity firms are organized as LLCs or Limited Partnerships, and when they acquire companies in an LBO, they create an LLC shell company that “acquires” the company on paper.",
  },
  {
    number: 229,
    section: "LBO Models",
    question: "Walk me through how you calculate optional repayments on debt in an LBO model.",
    answer:
      "First, note that you only look at optional repayments for Revolvers and Term Loans – high-yield debt doesn’t have a prepayment option, so effectively it’s always $0.\n\nFirst, you check how much cash flow you have available based on your Beginning Cash Balance, Minimum Cash Balance, Cash Flow Available for Debt Repayment from the Cash Flow Statement, and how much you use to make Mandatory Debt Repayments.\n\nThen, if you’ve used your Revolver at all you pay off the maximum amount that you can with the cash flow you have available.\n\nNext, for Term Loan A you assume that you pay off the maximum you can, taking into account that you’ve lost any cash flow you used to pay down the Revolver. You also need to take into account that you might have paid off some of Term Loan A’s principal as part of the Mandatory Repayments.\n\nFinally, you do the same thing for Term Loan B, subtracting from the “cash flow available for debt repayment” what you’ve already used up on the Revolver and Term Loan A. And just like Term Loan A, you need to take into account any Mandatory Repayments you’ve made so that you don’t pay off more than the entire Term Loan B balance.\n\nThe formulas here get very messy and depend on how your model is set up, but this is the basic idea for optional debt repayments.",
  },
  {
    number: 230,
    section: "LBO Models",
    question: "Explain how a Revolver is used in an LBO model.",
    answer:
      "You use a Revolver when the cash required for your Mandatory Debt Repayments exceeds the cash flow you have available to repay them.\n\nThe formula is: Revolver Borrowing = MAX(0, Total Mandatory Debt Repayment – Cash Flow Available to Repay Debt).\n\nThe Revolver starts off “undrawn,” meaning that you don’t actually borrow money and don’t accrue a balance unless you need it – similar to how credit cards work.\n\nYou add any required Revolver Borrowing to your running total for cash flow available for debt repayment before you calculate Mandatory and Optional Debt Repayments.\n\nWithin the debt repayments themselves, you assume that any Revolver Borrowing from previous years is paid off first with excess cash flow before you pay off any Term Loans.",
  },
  {
    number: 231,
    section: "LBO Models",
    question: "How would you adjust the Income Statement in an LBO model?",
    answer:
      "The most common adjustments:\n\nCost Savings – Often you assume the PE firm cuts costs by laying off employees, which could affect COGS, Operating Expenses, or both.\n\nNew Depreciation Expense – This comes from any PP&E write-ups in the transaction.\n\nNew Amortization Expense – This includes both the amortization from written-up intangibles and from capitalized financing fees.\n\nInterest Expense on LBO Debt – You need to include both cash and PIK interest here.\n\nSponsor Management Fees – Sometimes PE firms charge a “management fee” to a company to account for the time and effort they spend managing it.\n\nCommon Stock Dividend – Although private companies don’t pay dividends to shareholders, they could pay out a dividend recap to the PE investors.\n\nPreferred Stock Dividend – If Preferred Stock is used as a form of financing in the transaction, you need to account for Preferred Stock Dividends on the Income Statement.\n\nCost Savings and new Depreciation / Amortization hit the Operating Income line; Interest Expense and Sponsor Management Fees hit Pre-Tax Income; and you need to subtract the dividend items from your Net Income number.",
  },
  {
    number: 232,
    section: "LBO Models",
    question:
      "In an LBO model, is it possible for debt investors to get a higher return than the PE firm? What does it tell us about the company we’re modeling?",
    answer:
      "Yes, and it happens more commonly than you’d think. Remember, high-yield debt investors often get interest rates of 10-15% or more – which effectively guarantees an IRR in that range for them.\n\nSo no matter what happens to the company or the market, that debt gets repaid and the debt investors get the interest payments.\n\nBut let’s say that the median EBITDA multiples contract, or that the company fails to grow or actually shrinks – in these cases the PE firm could easily get an IRR below what the debt investors get.",
  },
  {
    number: 233,
    section: "LBO Models",
    question:
      "Most of the time, increased leverage means an increased IRR. Explain how increasing the leverage could reduce the IRR.",
    answer:
      "This scenario is admittedly rare, but it could happen if the increased leverage increases interest payments or debt repayments to very high levels, preventing the company from using its cash flow for other purposes.\n\nSometimes in LBO models, increasing the leverage increases the IRR up to a certain point – but then after that the IRR starts falling as the interest payments or principal repayments become “too big.”\n\nFor this scenario to happen you would need a “perfect storm” of:\n\n1. Relative lack of cash flow / EBITDA growth.\n2. High interest payments and principal repayments relative to cash flow.\n3. Relatively high purchase premium or purchase multiple to make it more difficult to get a high IRR in the first place.",
  },
];
