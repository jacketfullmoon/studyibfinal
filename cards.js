/* ---------------------------------------------------------------
   IB Basics — Flashcards
   Source: 400 IB Interview Questions Guide (BreakingIntoWallStreet /
   Mergers & Inquisitions), "Technical Questions & Answers" chapter —
   the six "Basic" Q&A sections: Accounting, Enterprise Value & Equity
   Value, Valuation, DCF, Merger Models, and LBO Models.
   Content below is paraphrased/condensed into study Q&A, not a
   verbatim reproduction of the guide.
----------------------------------------------------------------*/

const CARDS = [
  // ---------------- Accounting ----------------
  {
    number: 1,
    section: "Accounting",
    question: "Walk me through the 3 financial statements.",
    answer:
      "“The 3 major financial statements are the Income Statement, Balance Sheet and Cash Flow Statement.\n\nThe Income Statement gives the company’s revenue and expenses, and goes down to Net Income, the final line on the statement.\n\nThe Balance Sheet shows the company’s Assets – its resources – such as Cash, Inventory and PP&E, as well as its Liabilities – such as Debt and Accounts Payable – and Shareholders’ Equity. Assets must equal Liabilities plus Shareholders’ Equity.\n\nThe Cash Flow Statement begins with Net Income, adjusts for non-cash expenses and working capital changes, and then lists cash flow from investing and financing activities; at the end, you see the company’s net change in cash.”",
  },
  {
    number: 2,
    section: "Accounting",
    question: "Can you give examples of major line items on each of the financial statements?",
    answer:
      "Income Statement: Revenue; Cost of Goods Sold; SG&A (Selling, General & Administrative Expenses); Operating Income; Pretax Income; Net Income.\n\nBalance Sheet: Cash; Accounts Receivable; Inventory; Plants, Property & Equipment (PP&E); Accounts Payable; Accrued Expenses; Debt; Shareholders’ Equity.\n\nCash Flow Statement: Net Income; Depreciation & Amortization; Stock-Based Compensation; Changes in Operating Assets & Liabilities; Cash Flow From Operations; Capital Expenditures; Cash Flow From Investing; Sale/Purchase of Securities; Dividends Issued; Cash Flow From Financing.",
  },
  {
    number: 3,
    section: "Accounting",
    question: "How do the 3 statements link together?",
    answer:
      "“To tie the statements together, Net Income from the Income Statement flows into Shareholders’ Equity on the Balance Sheet, and into the top line of the Cash Flow Statement.\n\nChanges to Balance Sheet items appear as working capital changes on the Cash Flow Statement, and investing and financing activities affect Balance Sheet items such as PP&E, Debt and Shareholders’ Equity. The Cash and Shareholders’ Equity items on the Balance Sheet act as “plugs,” with Cash flowing in from the final line on the Cash Flow Statement.”",
  },
  {
    number: 4,
    section: "Accounting",
    question:
      "If I were stranded on a desert island, only had 1 statement and I wanted to review the overall health of a company – which statement would I use and why?",
    answer:
      "You would use the Cash Flow Statement because it gives a true picture of how much cash the company is actually generating, independent of all the non-cash expenses you might have. And that’s the #1 thing you care about when analyzing the overall financial health of any business – its cash flow.",
  },
  {
    number: 5,
    section: "Accounting",
    question:
      "Let’s say I could only look at 2 statements to assess a company’s prospects – which 2 would I use and why?",
    answer:
      "You would pick the Income Statement and Balance Sheet, because you can create the Cash Flow Statement from both of those (assuming, of course, that you have “before” and “after” versions of the Balance Sheet that correspond to the same period the Income Statement is tracking).",
  },
  {
    number: 6,
    section: "Accounting",
    question: "Walk me through how Depreciation going up by $10 would affect the statements.",
    answer:
      "Income Statement: Operating Income would decline by $10 and assuming a 40% tax rate, Net Income would go down by $6.\n\nCash Flow Statement: The Net Income at the top goes down by $6, but the $10 Depreciation is a non-cash expense that gets added back, so overall Cash Flow from Operations goes up by $4. There are no changes elsewhere, so the overall Net Change in Cash goes up by $4.\n\nBalance Sheet: Plants, Property & Equipment goes down by $10 on the Assets side because of the Depreciation, and Cash is up by $4 from the changes on the Cash Flow Statement.\n\nOverall, Assets is down by $6. Since Net Income fell by $6 as well, Shareholders’ Equity on the Liabilities & Shareholders’ Equity side is down by $6 and both sides of the Balance Sheet balance.\n\nNote: With this type of question, always go in the order Income Statement → Cash Flow Statement → Balance Sheet, so you can check yourself at the end and make sure the Balance Sheet balances. Remember that an Asset going up decreases your Cash Flow, whereas a Liability going up increases your Cash Flow.",
  },
  {
    number: 7,
    section: "Accounting",
    question: "If Depreciation is a non-cash expense, why does it affect the cash balance?",
    answer:
      "Although Depreciation is a non-cash expense, it is tax-deductible. Since taxes are a cash expense, Depreciation affects cash by reducing the amount of taxes you pay.",
  },
  {
    number: 8,
    section: "Accounting",
    question: "Where does Depreciation usually show up on the Income Statement?",
    answer:
      "It could be in a separate line item, or it could be embedded in Cost of Goods Sold or Operating Expenses – every company does it differently. Note that the end result for accounting questions is the same: Depreciation always reduces Pre-Tax Income.",
  },
  {
    number: 9,
    section: "Accounting",
    question: "What happens when Accrued Compensation goes up by $10?",
    answer:
      "For this question, confirm that the accrued compensation is now being recognized as an expense (as opposed to just changing non-accrued to accrued compensation).\n\nAssuming that’s the case, Operating Expenses on the Income Statement go up by $10, Pre-Tax Income falls by $10, and Net Income falls by $6 (assuming a 40% tax rate).\n\nOn the Cash Flow Statement, Net Income is down by $6, and Accrued Compensation will increase Cash Flow by $10, so overall Cash Flow from Operations is up by $4 and the Net Change in Cash at the bottom is up by $4.\n\nOn the Balance Sheet, Cash is up by $4 as a result, so Assets are up by $4. On the Liabilities & Equity side, Accrued Compensation is a liability so Liabilities are up by $10 and Retained Earnings are down by $6 due to the Net Income, so both sides balance.",
  },
  {
    number: 10,
    section: "Accounting",
    question: "What happens when Inventory goes up by $10, assuming you pay for it with cash?",
    answer:
      "No changes to the Income Statement.\n\nOn the Cash Flow Statement, Inventory is an asset so that decreases your Cash Flow from Operations – it goes down by $10, as does the Net Change in Cash at the bottom.\n\nOn the Balance Sheet under Assets, Inventory is up by $10 but Cash is down by $10, so the changes cancel out and Assets still equals Liabilities & Shareholders’ Equity.",
  },
  {
    number: 11,
    section: "Accounting",
    question: "Why is the Income Statement not affected by changes in Inventory?",
    answer:
      "This is a common interview mistake – incorrectly stating that Working Capital changes show up on the Income Statement.\n\nIn the case of Inventory, the expense is only recorded when the goods associated with it are sold – so if it’s just sitting in a warehouse, it does not count as a Cost of Goods Sold or Operating Expense until the company manufactures it into a product and sells it.",
  },
  {
    number: 12,
    section: "Accounting",
    question:
      "Let’s say Apple is buying $100 worth of new iPod factories with debt. How are all 3 statements affected at the start of “Year 1,” before anything else happens?",
    answer:
      "At the start of “Year 1,” before anything else has happened, there would be no changes on Apple’s Income Statement (yet).\n\nOn the Cash Flow Statement, the additional investment in factories would show up under Cash Flow from Investing as a net reduction in Cash Flow (so Cash Flow is down by $100 so far). And the additional $100 worth of debt raised would show up as an addition to Cash Flow, canceling out the investment activity. So the cash number stays the same.\n\nOn the Balance Sheet, there is now an additional $100 worth of factories in the Plants, Property & Equipment line, so PP&E is up by $100 and Assets is therefore up by $100. On the other side, debt is up by $100 as well and so both sides balance.",
  },
  {
    number: 13,
    section: "Accounting",
    question:
      "Now let’s go out 1 year, to the start of Year 2. Assume the debt is high-yield so no principal is paid off, and assume an interest rate of 10%. Also assume the factories depreciate at a rate of 10% per year. What happens?",
    answer:
      "After a year has passed, Apple must pay interest expense and must record the depreciation.\n\nOperating Income would decrease by $10 due to the 10% depreciation charge each year, and the $10 in additional Interest Expense would decrease the Pre-Tax Income by $20 altogether ($10 from the depreciation and $10 from Interest Expense). Assuming a tax rate of 40%, Net Income would fall by $12.\n\nOn the Cash Flow Statement, Net Income at the top is down by $12. Depreciation is a non-cash expense, so you add it back and the end result is that Cash Flow from Operations is down by $2. That’s the only change on the Cash Flow Statement, so overall Cash is down by $2.\n\nOn the Balance Sheet, under Assets, Cash is down by $2 and PP&E is down by $10 due to the depreciation, so overall Assets are down by $12. On the other side, since Net Income was down by $12, Shareholders’ Equity is also down by $12 and both sides balance. Remember, the debt number under Liabilities does not change since none of the debt is actually paid back.",
  },
  {
    number: 14,
    section: "Accounting",
    question:
      "At the start of Year 3, the factories all break down and the value of the equipment is written down to $0. The loan must also be paid back now. Walk me through the 3 statements.",
    answer:
      "After 2 years, the value of the factories is now $80 if we go with the 10% depreciation per year assumption. It is this $80 that we will write down in the 3 statements.\n\nFirst, on the Income Statement, the $80 write-down shows up in the Pre-Tax Income line. With a 40% tax rate, Net Income declines by $48.\n\nOn the Cash Flow Statement, Net Income is down by $48 but the write-down is a non-cash expense, so we add it back – and therefore Cash Flow from Operations increases by $32. There are no changes under Cash Flow from Investing, but under Cash Flow from Financing there is a $100 charge for the loan payback – so Cash Flow from Investing falls by $100. Overall, the Net Change in Cash falls by $68.\n\nOn the Balance Sheet, Cash is now down by $68 and PP&E is down by $80, so Assets have decreased by $148 altogether. On the other side, Debt is down $100 since it was paid off, and since Net Income was down by $48, Shareholders’ Equity is down by $48 as well. Altogether, Liabilities & Shareholders’ Equity are down by $148 and both sides balance.",
  },
  {
    number: 15,
    section: "Accounting",
    question:
      "Now let’s look at a different scenario and assume Apple is ordering $10 of additional iPod inventory, using cash on hand. They order the inventory, but they have not manufactured or sold anything yet – what happens to the 3 statements?",
    answer:
      "No changes to the Income Statement.\n\nCash Flow Statement – Inventory is up by $10, so Cash Flow from Operations decreases by $10. There are no further changes, so overall Cash is down by $10.\n\nOn the Balance Sheet, Inventory is up by $10 and Cash is down by $10 so the Assets number stays the same and the Balance Sheet remains in balance.",
  },
  {
    number: 16,
    section: "Accounting",
    question:
      "Now let’s say they sell the iPods for revenue of $20, at a cost of $10. Walk me through the 3 statements under this scenario.",
    answer:
      "Income Statement: Revenue is up by $20 and COGS is up by $10, so Gross Profit is up by $10 and Operating Income is up by $10 as well. Assuming a 40% tax rate, Net Income is up by $6.\n\nCash Flow Statement: Net Income at the top is up by $6 and Inventory has decreased by $10 (since we just manufactured the inventory into real iPods), which is a net addition to cash flow – so Cash Flow from Operations is up by $16 overall. These are the only changes on the Cash Flow Statement, so Net Change in Cash is up by $16.\n\nOn the Balance Sheet, Cash is up by $16 and Inventory is down by $10, so Assets is up by $6 overall. On the other side, Net Income was up by $6 so Shareholders’ Equity is up by $6 and both sides balance.",
  },
  {
    number: 17,
    section: "Accounting",
    question: "Could you ever end up with negative shareholders’ equity? What does it mean?",
    answer:
      "Yes. It is common to see this in 2 scenarios:\n1. Leveraged Buyouts with dividend recapitalizations – it means that the owner of the company has taken out a large portion of its equity (usually in the form of cash), which can sometimes turn the number negative.\n2. It can also happen if the company has been losing money consistently and therefore has a declining Retained Earnings balance, which is a portion of Shareholders’ Equity.\n\nIt doesn’t “mean” anything in particular, but it can be a cause for concern and possibly demonstrate that the company is struggling (in the second scenario). Note: Shareholders’ equity never turns negative immediately after an LBO – it would only happen following a dividend recap or continued net losses.",
  },
  {
    number: 18,
    section: "Accounting",
    question: "What is working capital? How is it used?",
    answer:
      "Working Capital = Current Assets – Current Liabilities.\n\nIf it’s positive, it means a company can pay off its short-term liabilities with its short-term assets. It is often presented as a financial metric and its magnitude and sign (negative or positive) tells you whether or not the company is “sound.”\n\nBankers look at Operating Working Capital more commonly in models, and that is defined as (Current Assets – Cash & Cash Equivalents) – (Current Liabilities – Debt).",
  },
  {
    number: 19,
    section: "Accounting",
    question: "What does negative Working Capital mean? Is that a bad sign?",
    answer:
      "Not necessarily. It depends on the type of company and the specific situation – here are a few different things it could mean:\n1. Some companies with subscriptions or longer-term contracts often have negative Working Capital because of high Deferred Revenue balances.\n2. Retail and restaurant companies like Amazon, Wal-Mart, and McDonald’s often have negative Working Capital because customers pay upfront – so they can use the cash generated to pay off their Accounts Payable rather than keeping a large cash balance on-hand. This can be a sign of business efficiency.\n3. In other cases, negative Working Capital could point to financial trouble or possible bankruptcy (for example, when customers don’t pay quickly and upfront and the company is carrying a high debt balance).",
  },
  {
    number: 20,
    section: "Accounting",
    question:
      "Recently, banks have been writing down their assets and taking huge quarterly losses. Walk me through what happens on the 3 statements when there’s a write-down of $100.",
    answer:
      "First, on the Income Statement, the $100 write-down shows up in the Pre-Tax Income line. With a 40% tax rate, Net Income declines by $60.\n\nOn the Cash Flow Statement, Net Income is down by $60 but the write-down is a non-cash expense, so we add it back – and therefore Cash Flow from Operations increases by $40. Overall, the Net Change in Cash rises by $40.\n\nOn the Balance Sheet, Cash is now up by $40 and an asset is down by $100 (it’s not clear which asset since the question never stated the specific asset to write down). Overall, the Assets side is down by $60. On the other side, since Net Income was down by $60, Shareholders’ Equity is also down by $60 – and both sides balance.",
  },
  {
    number: 21,
    section: "Accounting",
    question: "Walk me through a $100 “bailout” of a company and how it affects the 3 statements.",
    answer:
      "First, confirm what type of “bailout” this is – Debt? Equity? A combination? The most common scenario here is an equity investment from the government, so here’s what happens:\n\nNo changes to the Income Statement. On the Cash Flow Statement, Cash Flow from Financing goes up by $100 to reflect the government’s investment, so the Net Change in Cash is up by $100.\n\nOn the Balance Sheet, Cash is up by $100 so Assets are up by $100; on the other side, Shareholders’ Equity would go up by $100 to make it balance.",
  },
  {
    number: 22,
    section: "Accounting",
    question:
      "Walk me through a $100 write-down of debt – as in OWED debt, a liability – on a company’s balance sheet and how it affects the 3 statements.",
    answer:
      "This is counter-intuitive. When a liability is written down you record it as a gain on the Income Statement (with an asset write-down, it’s a loss) – so Pre-Tax Income goes up by $100 due to this write-down. Assuming a 40% tax rate, Net Income is up by $60.\n\nOn the Cash Flow Statement, Net Income is up by $60, but we need to subtract that debt write-down – so Cash Flow from Operations is down by $40, and Net Change in Cash is down by $40.\n\nOn the Balance Sheet, Cash is down by $40 so Assets are down by $40. On the other side, Debt is down by $100 but Shareholders’ Equity is up by $60 because the Net Income was up by $60 – so Liabilities & Shareholders’ Equity is down by $40 and it balances.",
  },
  {
    number: 23,
    section: "Accounting",
    question: "When would a company collect cash from a customer and not record it as revenue?",
    answer:
      "Three examples come to mind:\n1. Web-based subscription software\n2. Cell phone carriers that sell annual contracts\n3. Magazine publishers that sell subscriptions\n\nCompanies that agree to services in the future often collect cash upfront to ensure stable revenue – this makes investors happy as well since they can better predict a company’s performance. Per the rules of GAAP (Generally Accepted Accounting Principles), you only record revenue when you actually perform the services – so the company would not record everything as revenue right away.",
  },
  {
    number: 24,
    section: "Accounting",
    question: "If cash collected is not recorded as revenue, what happens to it?",
    answer:
      "Usually it goes into the Deferred Revenue balance on the Balance Sheet under Liabilities. Over time, as the services are performed, the Deferred Revenue balance “turns into” real revenue on the Income Statement.",
  },
  {
    number: 25,
    section: "Accounting",
    question: "What’s the difference between accounts receivable and deferred revenue?",
    answer:
      "Accounts receivable has not yet been collected in cash from customers, whereas deferred revenue has been. Accounts receivable represents how much revenue the company is waiting on, whereas deferred revenue represents how much it is waiting to record as revenue.",
  },
  {
    number: 26,
    section: "Accounting",
    question: "How long does it usually take for a company to collect its accounts receivable balance?",
    answer:
      "Generally the accounts receivable days are in the 40-50 day range, though it’s higher for companies selling high-end items and it might be lower for smaller, lower transaction-value companies.",
  },
  {
    number: 27,
    section: "Accounting",
    question: "What’s the difference between cash-based and accrual accounting?",
    answer:
      "Cash-based accounting recognizes revenue and expenses when cash is actually received or paid out; accrual accounting recognizes revenue when collection is reasonably certain (i.e. after a customer has ordered the product) and recognizes expenses when they are incurred rather than when they are paid out in cash.\n\nMost large companies use accrual accounting because paying with credit cards and lines of credit is so prevalent these days; very small businesses may use cash-based accounting to simplify their financial statements.",
  },
  {
    number: 28,
    section: "Accounting",
    question:
      "Let’s say a customer pays for a TV with a credit card. What would this look like under cash-based vs. accrual accounting?",
    answer:
      "In cash-based accounting, the revenue would not show up until the company charges the customer’s credit card, receives authorization, and deposits the funds in its bank account – at which point it would show up as both Revenue on the Income Statement and Cash on the Balance Sheet.\n\nIn accrual accounting, it would show up as Revenue right away but instead of appearing in Cash on the Balance Sheet, it would go into Accounts Receivable at first. Then, once the cash is actually deposited in the company’s bank account, it would “turn into” Cash.",
  },
  {
    number: 29,
    section: "Accounting",
    question: "How do you decide when to capitalize rather than expense a purchase?",
    answer:
      "If the asset has a useful life of over 1 year, it is capitalized (put on the Balance Sheet rather than shown as an expense on the Income Statement). Then it is depreciated (tangible assets) or amortized (intangible assets) over a certain number of years.\n\nPurchases like factories, equipment and land all last longer than a year and therefore show up on the Balance Sheet. Employee salaries and the cost of manufacturing products (COGS) only cover a short period of operations and therefore show up on the Income Statement as normal expenses instead.",
  },
  {
    number: 30,
    section: "Accounting",
    question: "Why do companies report both GAAP and non-GAAP (or “Pro Forma”) earnings?",
    answer:
      "These days, many companies have “non-cash” charges such as Amortization of Intangibles, Stock-Based Compensation, and Deferred Revenue Write-down in their Income Statements. As a result, some argue that Income Statements under GAAP no longer reflect how profitable most companies truly are. Non-GAAP earnings are almost always higher because these expenses are excluded.",
  },
  {
    number: 31,
    section: "Accounting",
    question: "A company has had positive EBITDA for the past 10 years, but it recently went bankrupt. How could this happen?",
    answer:
      "Several possibilities:\n1. The company is spending too much on Capital Expenditures – these are not reflected at all in EBITDA, but it could still be cash-flow negative.\n2. The company has high interest expense and is no longer able to afford its debt.\n3. The company’s debt all matures on one date and it is unable to refinance it due to a “credit crunch” – and it runs out of cash completely when paying back the debt.\n4. It has significant one-time charges (from litigation, for example) and those are high enough to bankrupt the company.\n\nRemember, EBITDA excludes investment in (and depreciation of) long-term assets, interest and one-time charges – and all of these could end up bankrupting the company.",
  },
  {
    number: 32,
    section: "Accounting",
    question:
      "Normally Goodwill remains constant on the Balance Sheet – why would it be impaired and what does Goodwill Impairment mean?",
    answer:
      "Usually this happens when a company has been acquired and the acquirer re-assesses its intangible assets (such as customers, brand, and intellectual property) and finds that they are worth significantly less than they originally thought.\n\nIt often happens in acquisitions where the buyer “overpaid” for the seller and can result in a large net loss on the Income Statement (see: eBay/Skype). It can also happen when a company discontinues part of its operations and must impair the associated goodwill.",
  },
  {
    number: 33,
    section: "Accounting",
    question: "Under what circumstances would Goodwill increase?",
    answer:
      "Technically Goodwill can increase if the company re-assesses its value and finds that it is worth more, but that is rare. What usually happens is 1 of 2 scenarios:\n1. The company gets acquired or bought out and Goodwill changes as a result, since it’s an accounting “plug” for the purchase price in an acquisition.\n2. The company acquires another company and pays more than what its assets are worth – this is then reflected in the Goodwill number.",
  },

  // ---------------- Enterprise Value & Equity Value ----------------
  {
    number: 34,
    section: "Enterprise Value & Equity Value",
    question: "Why do we look at both Enterprise Value and Equity Value?",
    answer:
      "Enterprise Value represents the value of the company that is attributable to all investors; Equity Value only represents the portion available to shareholders (equity investors). You look at both because Equity Value is the number the public-at-large sees, while Enterprise Value represents its true value.",
  },
  {
    number: 35,
    section: "Enterprise Value & Equity Value",
    question: "When looking at an acquisition of a company, do you pay more attention to Enterprise or Equity Value?",
    answer:
      "Enterprise Value, because that’s how much an acquirer really “pays” and includes the often mandatory debt repayment.",
  },
  {
    number: 36,
    section: "Enterprise Value & Equity Value",
    question: "What’s the formula for Enterprise Value?",
    answer:
      "EV = Equity Value + Debt + Preferred Stock + Minority Interest − Cash\n\n(This formula does not tell the whole story and can get more complex, but most of the time you can get away with stating this formula in an interview.)",
  },
  {
    number: 37,
    section: "Enterprise Value & Equity Value",
    question: "Why do you need to add Minority Interest to Enterprise Value?",
    answer:
      "Whenever a company owns over 50% of another company, it is required to report the financial performance of the other company as part of its own performance.\n\nSo even though it doesn’t own 100%, it reports 100% of the majority-owned subsidiary’s financial performance. In keeping with the “apples-to-apples” theme, you must add Minority Interest to get to Enterprise Value so that your numerator and denominator both reflect 100% of the majority-owned subsidiary.",
  },
  {
    number: 38,
    section: "Enterprise Value & Equity Value",
    question: "How do you calculate fully diluted shares?",
    answer:
      "Take the basic share count and add in the dilutive effect of stock options and any other dilutive securities, such as warrants, convertible debt or convertible preferred stock. To calculate the dilutive effect of options, you use the Treasury Stock Method.",
  },
  {
    number: 39,
    section: "Enterprise Value & Equity Value",
    question:
      "Let’s say a company has 100 shares outstanding, at a share price of $10 each. It also has 10 options outstanding at an exercise price of $5 each – what is its fully diluted equity value?",
    answer:
      "Its basic equity value is $1,000 (100 × $10 = $1,000). To calculate the dilutive effect of the options, first you note that the options are all “in-the-money” – their exercise price is less than the current share price.\n\nWhen these options are exercised, there will be 10 new shares created – so the share count is now 110 rather than 100. However, that doesn’t tell the whole story. In order to exercise the options, we had to “pay” the company $5 for each option (the exercise price). As a result, it now has $50 in additional cash, which it now uses to buy back 5 of the new shares we created.\n\nSo the fully diluted share count is 105, and the fully diluted equity value is $1,050.",
  },
  {
    number: 40,
    section: "Enterprise Value & Equity Value",
    question:
      "Let’s say a company has 100 shares outstanding, at a share price of $10 each. It also has 10 options outstanding at an exercise price of $15 each – what is its fully diluted equity value?",
    answer:
      "$1,000. In this case the options’ exercise price is above the current share price, so they have no dilutive effect.",
  },
  {
    number: 41,
    section: "Enterprise Value & Equity Value",
    question: "Why do you subtract cash in the formula for Enterprise Value? Is that always accurate?",
    answer:
      "The “official” reason: Cash is subtracted because it’s considered a non-operating asset and because Equity Value implicitly accounts for it.\n\nThe way to think about it: In an acquisition, the buyer would “get” the cash of the seller, so it effectively pays less for the company based on how large its cash balance is. Remember, Enterprise Value tells us how much you’d really have to “pay” to acquire another company.\n\nIt’s not always accurate because technically you should be subtracting only excess cash – the amount of cash a company has above the minimum cash it requires to operate.",
  },
  {
    number: 42,
    section: "Enterprise Value & Equity Value",
    question: "Is it always accurate to add Debt to Equity Value when calculating Enterprise Value?",
    answer:
      "In most cases, yes, because the terms of a debt agreement usually say that debt must be refinanced in an acquisition. And in most cases a buyer will pay off a seller’s debt, so it is accurate to say that any debt “adds” to the purchase price.\n\nHowever, there could always be exceptions where the buyer does not pay off the debt. These are rare, but “never say never” applies.",
  },
  {
    number: 43,
    section: "Enterprise Value & Equity Value",
    question: "Could a company have a negative Enterprise Value? What would that mean?",
    answer:
      "Yes. It means that the company has an extremely large cash balance, or an extremely low market capitalization (or both). You see it with:\n1. Companies on the brink of bankruptcy.\n2. Financial institutions, such as banks, that have large cash balances.\n\nThese days, there’s a lot of overlap between these 2 categories.",
  },
  {
    number: 44,
    section: "Enterprise Value & Equity Value",
    question: "Could a company have a negative Equity Value? What would that mean?",
    answer:
      "No. This is not possible because you cannot have a negative share count and you cannot have a negative share price.",
  },
  {
    number: 45,
    section: "Enterprise Value & Equity Value",
    question: "Why do we add Preferred Stock to get to Enterprise Value?",
    answer:
      "Preferred Stock pays out a fixed dividend, and preferred stock holders also have a higher claim to a company’s assets than equity investors do. As a result, it is seen as more similar to debt than common stock.",
  },
  {
    number: 46,
    section: "Enterprise Value & Equity Value",
    question: "How do you account for convertible bonds in the Enterprise Value formula?",
    answer:
      "If the convertible bonds are in-the-money, meaning that the conversion price of the bonds is below the current share price, then you count them as additional dilution to the Equity Value; if they’re out-of-the-money then you count the face value of the convertibles as part of the company’s Debt.",
  },
  {
    number: 47,
    section: "Enterprise Value & Equity Value",
    question:
      "A company has 1 million shares outstanding at a value of $100 per share. It also has $10 million of convertible bonds, with par value of $1,000 and a conversion price of $50. How do I calculate diluted shares outstanding?",
    answer:
      "This gets confusing because of the different units involved. First, note that these convertible bonds are in-the-money because the company’s share price is $100, but the conversion price is $50. So we count them as additional shares rather than debt.\n\nNext, we need to divide the value of the convertible bonds – $10 million – by the par value – $1,000 – to figure out how many individual bonds we get: $10 million / $1,000 = 10,000 convertible bonds.\n\nNext, we need to figure out how many shares this number represents. The number of shares per bond is the par value divided by the conversion price: $1,000 / $50 = 20 shares per bond.\n\nSo we have 200,000 new shares (20 × 10,000) created by the convertibles, giving us 1.2 million diluted shares outstanding. We do not use the Treasury Stock Method with convertibles because the company is not “receiving” any cash from us.",
  },
  {
    number: 48,
    section: "Enterprise Value & Equity Value",
    question: "What’s the difference between Equity Value and Shareholders’ Equity?",
    answer:
      "Equity Value is the market value and Shareholders’ Equity is the book value. Equity Value can never be negative because shares outstanding and share prices can never be negative, whereas Shareholders’ Equity could be any value. For healthy companies, Equity Value usually far exceeds Shareholders’ Equity.",
  },

  // ---------------- Valuation ----------------
  {
    number: 49,
    section: "Valuation",
    question: "What are the 3 major valuation methodologies?",
    answer: "Comparable Companies, Precedent Transactions and Discounted Cash Flow Analysis.",
  },
  {
    number: 50,
    section: "Valuation",
    question: "Rank the 3 valuation methodologies from highest to lowest expected value.",
    answer:
      "Trick question – there is no ranking that always holds. In general, Precedent Transactions will be higher than Comparable Companies due to the Control Premium built into acquisitions.\n\nBeyond that, a DCF could go either way and it’s best to say that it’s more variable than other methodologies. Often it produces the highest value, but it can produce the lowest value as well depending on your assumptions.",
  },
  {
    number: 51,
    section: "Valuation",
    question: "When would you not use a DCF in a Valuation?",
    answer:
      "You do not use a DCF if the company has unstable or unpredictable cash flows (tech or bio-tech startup) or when debt and working capital serve a fundamentally different role. For example, banks and financial institutions do not re-invest debt and working capital is a huge part of their Balance Sheets – so you wouldn’t use a DCF for such companies.",
  },
  {
    number: 52,
    section: "Valuation",
    question: "What other Valuation methodologies are there?",
    answer:
      "Other methodologies include:\n• Liquidation Valuation – Valuing a company’s assets, assuming they are sold off and then subtracting liabilities to determine how much capital, if any, equity investors receive\n• Replacement Value – Valuing a company based on the cost of replacing its assets\n• LBO Analysis – Determining how much a PE firm could pay for a company to hit a “target” IRR, usually in the 20-25% range\n• Sum of the Parts – Valuing each division of a company separately and adding them together at the end\n• M&A Premiums Analysis – Analyzing M&A deals and figuring out the premium that each buyer paid, and using this to establish what your company is worth\n• Future Share Price Analysis – Projecting a company’s share price based on the P/E multiples of the public company comparables, then discounting it back to its present value",
  },
  {
    number: 53,
    section: "Valuation",
    question: "When would you use a Liquidation Valuation?",
    answer:
      "This is most common in bankruptcy scenarios and is used to see whether equity shareholders will receive any capital after the company’s debts have been paid off. It is often used to advise struggling businesses on whether it’s better to sell off assets separately or to try and sell the entire company.",
  },
  {
    number: 54,
    section: "Valuation",
    question: "When would you use Sum of the Parts?",
    answer:
      "This is most often used when a company has completely different, unrelated divisions – a conglomerate like General Electric, for example.\n\nIf you have a plastics division, a TV and entertainment division, an energy division, a consumer financing division and a technology division, you should not use the same set of Comparable Companies and Precedent Transactions for the entire company. Instead, you should use different sets for each division, value each one separately, and then add them together to get the Combined Value.",
  },
  {
    number: 55,
    section: "Valuation",
    question: "When do you use an LBO Analysis as part of your Valuation?",
    answer:
      "Obviously you use this whenever you’re looking at a Leveraged Buyout – but it is also used to establish how much a private equity firm could pay, which is usually lower than what companies will pay. It is often used to set a “floor” on a possible Valuation for the company you’re looking at.",
  },
  {
    number: 56,
    section: "Valuation",
    question: "What are the most common multiples used in Valuation?",
    answer:
      "The most common multiples are EV/Revenue, EV/EBITDA, EV/EBIT, P/E (Share Price / Earnings per Share), and P/BV (Share Price / Book Value).",
  },
  {
    number: 57,
    section: "Valuation",
    question: "What are some examples of industry-specific multiples?",
    answer:
      "Technology (Internet): EV / Unique Visitors, EV / Pageviews\n\nRetail / Airlines: EV / EBITDAR (Earnings Before Interest, Taxes, Depreciation, Amortization & Rent)\n\nEnergy: P / MCFE, P / MCFE/D (MCFE = 1 Million Cubic Foot Equivalent, MCFE/D = MCFE per Day), P / NAV (Share Price / Net Asset Value)\n\nReal Estate Investment Trusts (REITs): Price / FFO, Price / AFFO (Funds From Operations, Adjusted Funds From Operations)\n\nTechnology and Energy are straightforward – you’re looking at traffic and energy reserves as value drivers rather than revenue or profit. For Retail / Airlines, you often remove Rent because it is a major expense that varies significantly between different types of companies. For REITs, Funds From Operations adds back Depreciation and subtracts gains on the sale of property, giving a “normalized” picture of the cash flow the REIT is generating.",
  },
  {
    number: 58,
    section: "Valuation",
    question:
      "When you’re looking at an industry-specific multiple like EV / Scientists or EV / Subscribers, why do you use Enterprise Value rather than Equity Value?",
    answer:
      "You use Enterprise Value because those scientists or subscribers are “available” to all the investors (both debt and equity) in a company. The same logic doesn’t apply to everything, though – you need to think through the multiple and see which investors the particular metric is “available” to.",
  },
  {
    number: 59,
    section: "Valuation",
    question: "Would an LBO or DCF give a higher valuation?",
    answer:
      "Technically it could go either way, but in most cases the LBO will give you a lower valuation.\n\nHere’s the easiest way to think about it: with an LBO, you do not get any value from the cash flows of a company in between Year 1 and the final year – you’re only valuing it based on its terminal value. With a DCF, by contrast, you’re taking into account both the company’s cash flows in between and its terminal value, so values tend to be higher.\n\nNote: Unlike a DCF, an LBO model by itself does not give a specific valuation. Instead, you set a desired IRR and determine how much you could pay for the company (the valuation) based on that.",
  },
  {
    number: 60,
    section: "Valuation",
    question: "How would you present these Valuation methodologies to a company or its investors?",
    answer:
      "Usually you use a “football field” chart where you show the valuation range implied by each methodology. You always show a range rather than one specific number.",
  },
  {
    number: 61,
    section: "Valuation",
    question: "How would you value an apple tree?",
    answer:
      "The same way you would value a company: by looking at what comparable apple trees are worth (relative valuation) and the value of the apple tree’s cash flows (intrinsic valuation). Yes, you could do a DCF for anything – even an apple tree.",
  },
  {
    number: 62,
    section: "Valuation",
    question: "Why can’t you use Equity Value / EBITDA as a multiple rather than Enterprise Value / EBITDA?",
    answer:
      "EBITDA is available to all investors in the company – rather than just equity holders. Similarly, Enterprise Value is also available to all investors so it makes sense to pair them together.\n\nEquity Value / EBITDA, however, is comparing apples to oranges because Equity Value does not reflect the company’s entire capital structure – only the part available to equity investors.",
  },
  {
    number: 63,
    section: "Valuation",
    question: "When would a Liquidation Valuation produce the highest value?",
    answer:
      "This is highly unusual, but it could happen if a company had substantial hard assets but the market was severely undervaluing it for a specific reason (such as an earnings miss or cyclicality).\n\nAs a result, the company’s Comparable Companies and Precedent Transactions would likely produce lower values as well – and if its assets were valued highly enough, Liquidation Valuation might give a higher value than other methodologies.",
  },
  {
    number: 64,
    section: "Valuation",
    question: "Let’s go back to 2004 and look at Facebook back when it had no profit and no revenue. How would you value it?",
    answer:
      "You would use Comparable Companies and Precedent Transactions and look at more “creative” multiples such as EV/Unique Visitors and EV/Pageviews rather than EV/Revenue or EV/EBITDA.\n\nYou would not use a “far in the future DCF” because you can’t reasonably predict cash flows for a company that is not even making money yet. This is a very common wrong answer given by interviewees – when you can’t predict cash flow, use other metrics, don’t try to predict cash flow anyway!",
  },
  {
    number: 65,
    section: "Valuation",
    question: "What would you use in conjunction with Free Cash Flow multiples – Equity Value or Enterprise Value?",
    answer:
      "Trick question. For Unlevered Free Cash Flow, you would use Enterprise Value, but for Levered Free Cash Flow you would use Equity Value.\n\nRemember, Unlevered Free Cash Flow excludes Interest and thus represents money available to all investors, whereas Levered already includes Interest and the money is therefore only available to equity investors. Debt investors have already “been paid” with the interest payments they received.",
  },
  {
    number: 66,
    section: "Valuation",
    question: "You never use Equity Value / EBITDA, but are there any cases where you might use Equity Value / Revenue?",
    answer:
      "Never say never. It’s very rare to see this, but sometimes large financial institutions with big cash balances have negative Enterprise Values – so you might use Equity Value / Revenue instead.\n\nYou might see this if you’ve listed a set of financial and non-financial companies on a slide, you’re showing Revenue multiples for the non-financial companies, and you want to show something similar for the financials. Note, however, that in most cases you would be using other multiples such as P/E and P/BV with banks anyway.",
  },
  {
    number: 67,
    section: "Valuation",
    question: "How do you select Comparable Companies / Precedent Transactions?",
    answer:
      "The 3 main ways to select companies and transactions:\n1. Industry classification\n2. Financial criteria (Revenue, EBITDA, etc.)\n3. Geography\n\nFor Precedent Transactions, you often limit the set based on date and only look at transactions within the past 1-2 years. The most important factor is industry – that is always used to screen for companies/transactions, and the rest may or may not be used depending on how specific you want to be.\n\nExamples: “Oil & gas producers with market caps over $5 billion” (comp screen), “Digital media companies with over $100 million in revenue” (comp screen), “Airline M&A transactions over the past 2 years involving sellers with over $1 billion in revenue” (precedent screen), “Retail M&A transactions over the past year” (precedent screen).",
  },
  {
    number: 68,
    section: "Valuation",
    question: "How do you apply the 3 valuation methodologies to actually get a value for the company you’re looking at?",
    answer:
      "You take the median multiple of a set of companies or transactions, and then multiply it by the relevant metric from the company you’re valuing.\n\nExample: If the median EBITDA multiple from your set of Precedent Transactions is 8x and your company’s EBITDA is $500 million, the implied Enterprise Value would be $4 billion.\n\nTo get the “football field” valuation graph you often see, you look at the minimum, maximum, 25th percentile and 75th percentile in each set as well and create a range of values based on each methodology.",
  },
  {
    number: 69,
    section: "Valuation",
    question: "What do you actually use a valuation for?",
    answer:
      "Usually you use it in pitch books and in client presentations when you’re providing updates and telling them what they should expect for their own valuation.\n\nIt’s also used right before a deal closes in a Fairness Opinion, a document a bank creates that “proves” the value their client is paying or receiving is “fair” from a financial point of view. Valuations can also be used in defense analyses, merger models, LBO models, DCFs (because terminal multiples are based off of comps), and pretty much anything else in finance.",
  },
  {
    number: 70,
    section: "Valuation",
    question: "Why would a company with similar growth and profitability to its Comparable Companies be valued at a premium?",
    answer:
      "This could happen for a number of reasons:\n• The company has just reported earnings well above expectations and its stock price has risen recently.\n• It has some type of competitive advantage not reflected in its financials, such as a key patent or other intellectual property.\n• It has just won a favorable ruling in a major lawsuit.\n• It is the market leader in an industry and has greater market share than its competitors.",
  },
  {
    number: 71,
    section: "Valuation",
    question: "What are the flaws with public company comparables?",
    answer:
      "• No company is 100% comparable to another company.\n• The stock market is “emotional” – your multiples might be dramatically higher or lower on certain dates depending on the market’s movements.\n• Share prices for small companies with thinly-traded stocks may not reflect their full value.",
  },
  {
    number: 72,
    section: "Valuation",
    question: "How do you take into account a company’s competitive advantage in a valuation?",
    answer:
      "1. Look at the 75th percentile or higher for the multiples rather than the medians.\n2. Add in a premium to some of the multiples.\n3. Use more aggressive projections for the company.\n\nIn practice you rarely do all of the above – these are just possibilities.",
  },
  {
    number: 73,
    section: "Valuation",
    question: "Do you ALWAYS use the median multiple of a set of public company comparables or precedent transactions?",
    answer:
      "There’s no “rule” that you have to do this, but in most cases you do because you want to use values from the middle range of the set. But if the company you’re valuing is distressed, is not performing well, or is at a competitive disadvantage, you might use the 25th percentile or something in the lower range instead – and vice versa if it’s doing well.",
  },
  {
    number: 74,
    section: "Valuation",
    question:
      "You mentioned that Precedent Transactions usually produce a higher value than Comparable Companies – can you think of a situation where this is not the case?",
    answer:
      "Sometimes this happens when there is a substantial mismatch between the M&A market and the public market. For example, no public companies have been acquired recently but there have been a lot of small private companies acquired at extremely low valuations. For the most part this generalization is true, but keep in mind there are exceptions to almost every “rule” in finance.",
  },
  {
    number: 75,
    section: "Valuation",
    question: "What are some flaws with precedent transactions?",
    answer:
      "• Past transactions are rarely 100% comparable – the transaction structure, size of the company, and market sentiment all have huge effects.\n• Data on precedent transactions is generally more difficult to find than it is for public company comparables, especially for acquisitions of small private companies.",
  },
  {
    number: 76,
    section: "Valuation",
    question:
      "Two companies have the exact same financial profile and are bought by the same acquirer, but the EBITDA multiple for one transaction is twice the multiple of the other transaction – how could this happen?",
    answer:
      "Possible reasons:\n1. One process was more competitive and had a lot more companies bidding on the target.\n2. One company had recent bad news or a depressed stock price so it was acquired at a discount.\n3. They were in industries with different median multiples.",
  },
  {
    number: 77,
    section: "Valuation",
    question: "Why does Warren Buffett prefer EBIT multiples to EBITDA multiples?",
    answer:
      "Warren Buffett once famously said, “Does management think the tooth fairy pays for capital expenditures?”\n\nHe dislikes EBITDA because it excludes the often sizable Capital Expenditures companies make and hides how much cash they are actually using to finance their operations. In some industries there is also a large gap between EBIT and EBITDA – anything that is very capital-intensive, for example, will show a big disparity.",
  },
  {
    number: 78,
    section: "Valuation",
    question:
      "The EV / EBIT, EV / EBITDA, and P / E multiples all measure a company’s profitability. What’s the difference between them, and when do you use each one?",
    answer:
      "P / E depends on the company’s capital structure whereas EV / EBIT and EV / EBITDA are capital structure-neutral. Therefore, you use P / E for banks, financial institutions, and other companies where interest payments/expenses are critical.\n\nEV / EBIT includes Depreciation & Amortization whereas EV / EBITDA excludes it – you’re more likely to use EV / EBIT in industries where D&A is large and where capital expenditures and fixed assets are important (e.g. manufacturing), and EV / EBITDA in industries where fixed assets are less important and D&A is comparatively smaller (e.g. Internet companies).",
  },
  {
    number: 79,
    section: "Valuation",
    question:
      "If you were buying a vending machine business, would you pay a higher multiple for a business where you owned the machines and they depreciated normally, or one in which you leased the machines? The cost of depreciation and lease are the same dollar amounts and everything else is held constant.",
    answer:
      "You would pay more for the one where you lease the machines. Enterprise Value would be the same for both companies, but with the depreciated situation the charge is not reflected in EBITDA – so EBITDA is higher, and the EV / EBITDA multiple is lower as a result. For the leased situation, the lease would show up in SG&A so it would be reflected in EBITDA, making EBITDA lower and the EV / EBITDA multiple higher.",
  },
  {
    number: 80,
    section: "Valuation",
    question: "How do you value a private company?",
    answer:
      "You use the same methodologies as with public companies: public company comparables, precedent transactions, and DCF. But there are some differences:\n• You might apply a 10-15% (or more) discount to the public company comparable multiples because the private company you’re valuing is not as “liquid” as the public comps.\n• You can’t use a premiums analysis or future share price analysis because a private company doesn’t have a share price.\n• Your valuation shows the Enterprise Value for the company as opposed to the implied per-share price as with public companies.\n• A DCF gets tricky because a private company doesn’t have a market capitalization or Beta – you would probably just estimate WACC based on the public comps’ WACC rather than trying to calculate it.",
  },
  {
    number: 81,
    section: "Valuation",
    question:
      "Let’s say we’re valuing a private company. Why might we discount the public company comparable multiples but not the precedent transaction multiples?",
    answer:
      "There’s no discount because with precedent transactions, you’re acquiring the entire company – and once it’s acquired, the shares immediately become illiquid.\n\nBut shares – the ability to buy individual “pieces” of a company rather than the whole thing – can be either liquid (if it’s public) or illiquid (if it’s private). Since shares of public companies are always more liquid, you would discount public company comparable multiples to account for this.",
  },
  {
    number: 82,
    section: "Valuation",
    question: "Can you use private companies as part of your valuation?",
    answer:
      "Only in the context of precedent transactions – it would make no sense to include them for public company comparables or as part of the Cost of Equity / WACC calculation in a DCF because they are not public and therefore have no values for market cap or Beta.",
  },

  // ---------------- DCF ----------------
  {
    number: 83,
    section: "DCF",
    question: "Walk me through a DCF.",
    answer:
      "“A DCF values a company based on the Present Value of its Cash Flows and the Present Value of its Terminal Value.\n\nFirst, you project out a company’s financials using assumptions for revenue growth, expenses and Working Capital; then you get down to Free Cash Flow for each year, which you then sum up and discount to a Net Present Value, based on your discount rate – usually the Weighted Average Cost of Capital.\n\nOnce you have the present value of the Cash Flows, you determine the company’s Terminal Value, using either the Multiples Method or the Gordon Growth Method, and then also discount that back to its Net Present Value using WACC.\n\nFinally, you add the two together to determine the company’s Enterprise Value.”",
  },
  {
    number: 84,
    section: "DCF",
    question: "Walk me through how you get from Revenue to Free Cash Flow in the projections.",
    answer:
      "Subtract COGS and Operating Expenses to get to Operating Income (EBIT). Then, multiply by (1 – Tax Rate), add back Depreciation and other non-cash charges, and subtract Capital Expenditures and the change in Working Capital.\n\nNote: This gets you to Unlevered Free Cash Flow since you went off EBIT rather than EBT. You might want to confirm that this is what the interviewer is asking for.",
  },
  {
    number: 85,
    section: "DCF",
    question:
      "What’s an alternate way to calculate Free Cash Flow aside from taking Net Income, adding back Depreciation, and subtracting Changes in Operating Assets/Liabilities and CapEx?",
    answer:
      "Take Cash Flow From Operations and subtract CapEx – that gets you to Levered Cash Flow. To get to Unlevered Cash Flow, you then need to add back the tax-adjusted Interest Expense and subtract the tax-adjusted Interest Income.",
  },
  {
    number: 86,
    section: "DCF",
    question: "Why do you use 5 or 10 years for DCF projections?",
    answer:
      "That’s usually about as far as you can reasonably predict into the future. Less than 5 years would be too short to be useful, and over 10 years is too difficult to predict for most companies.",
  },
  {
    number: 87,
    section: "DCF",
    question: "What do you usually use for the discount rate?",
    answer:
      "Normally you use WACC (Weighted Average Cost of Capital), though you might also use Cost of Equity depending on how you’ve set up the DCF.",
  },
  {
    number: 88,
    section: "DCF",
    question: "How do you calculate WACC?",
    answer:
      "The formula is: Cost of Equity × (% Equity) + Cost of Debt × (% Debt) × (1 – Tax Rate) + Cost of Preferred × (% Preferred).\n\nIn all cases, the percentages refer to how much of the company’s capital structure is taken up by each component. For Cost of Equity, you can use the Capital Asset Pricing Model (CAPM), and for the others you usually look at comparable companies/debt issuances and the interest rates and yields issued by similar companies to get estimates.",
  },
  {
    number: 89,
    section: "DCF",
    question: "How do you calculate the Cost of Equity?",
    answer:
      "Cost of Equity = Risk-Free Rate + Beta × Equity Risk Premium\n\nThe risk-free rate represents how much a 10-year or 20-year US Treasury should yield; Beta is calculated based on the “riskiness” of Comparable Companies, and the Equity Risk Premium is the % by which stocks are expected to out-perform “risk-less” assets. Normally you pull the Equity Risk Premium from a publication called Ibbotson’s.\n\nNote: This formula does not tell the whole story. Depending on the bank and how precise you want to be, you could also add in a “size premium” and “industry premium” to account for how much a company is expected to out-perform its peers according to its market cap or industry. Small company stocks are expected to out-perform large company stocks and certain industries are expected to out-perform others, and these premiums reflect these expectations.",
  },
  {
    number: 90,
    section: "DCF",
    question: "How do you get to Beta in the Cost of Equity calculation?",
    answer:
      "You look up the Beta for each Comparable Company (usually on Bloomberg), un-lever each one, take the median of the set and then lever it based on your company’s capital structure. Then you use this Levered Beta in the Cost of Equity calculation.\n\nUn-Levered Beta = Levered Beta / (1 + ((1 - Tax Rate) × (Total Debt/Equity)))\nLevered Beta = Un-Levered Beta × (1 + ((1 - Tax Rate) × (Total Debt/Equity)))",
  },
  {
    number: 91,
    section: "DCF",
    question: "Why do you have to un-lever and re-lever Beta?",
    answer:
      "Again, keep in mind the “apples-to-apples” theme. When you look up the Betas on Bloomberg (or from whatever source you’re using) they will be levered to reflect the debt already assumed by each company.\n\nBut each company’s capital structure is different and we want to look at how “risky” a company is regardless of what % debt or equity it has. To get that, we need to un-lever Beta each time. But at the end of the calculation, we need to re-lever it because we want the Beta used in the Cost of Equity calculation to reflect the true risk of our company, taking into account its capital structure this time.",
  },
  {
    number: 92,
    section: "DCF",
    question: "Would you expect a manufacturing company or a technology company to have a higher Beta?",
    answer: "A technology company, because technology is viewed as a “riskier” industry than manufacturing.",
  },
  {
    number: 93,
    section: "DCF",
    question:
      "Let’s say that you use Levered Free Cash Flow rather than Unlevered Free Cash Flow in your DCF – what is the effect?",
    answer:
      "Levered Free Cash Flow gives you Equity Value rather than Enterprise Value, since the cash flow is only available to equity investors (debt investors have already been “paid” with the interest payments).",
  },
  {
    number: 94,
    section: "DCF",
    question: "If you use Levered Free Cash Flow, what should you use as the Discount Rate?",
    answer:
      "You would use the Cost of Equity rather than WACC since we’re not concerned with Debt or Preferred Stock in this case – we’re calculating Equity Value, not Enterprise Value.",
  },
  {
    number: 95,
    section: "DCF",
    question: "How do you calculate the Terminal Value?",
    answer:
      "You can either apply an exit multiple to the company’s Year 5 EBITDA, EBIT or Free Cash Flow (Multiples Method) or you can use the Gordon Growth method to estimate its value based on its growth rate into perpetuity.\n\nThe formula for Terminal Value using Gordon Growth is: Terminal Value = Year 5 Free Cash Flow × (1 + Growth Rate) / (Discount Rate – Growth Rate).",
  },
  {
    number: 96,
    section: "DCF",
    question: "Why would you use Gordon Growth rather than the Multiples Method to calculate the Terminal Value?",
    answer:
      "In banking, you almost always use the Multiples Method to calculate Terminal Value in a DCF. It’s much easier to get appropriate data for exit multiples since they are based on Comparable Companies – picking a long-term growth rate, by contrast, is always a shot in the dark.\n\nHowever, you might use Gordon Growth if you have no good Comparable Companies or if you have reason to believe that multiples will change significantly in the industry several years down the road. For example, if an industry is very cyclical you might be better off using long-term growth rates rather than exit multiples.",
  },
  {
    number: 97,
    section: "DCF",
    question: "What’s an appropriate growth rate to use when calculating the Terminal Value?",
    answer:
      "Normally you use the country’s long-term GDP growth rate, the rate of inflation, or something similarly conservative. For companies in mature economies, a long-term growth rate over 5% would be quite aggressive since most developed economies are growing at less than 5% per year.",
  },
  {
    number: 98,
    section: "DCF",
    question: "How do you select the appropriate exit multiple when calculating Terminal Value?",
    answer:
      "Normally you look at the Comparable Companies and pick the median of the set, or something close to it. As with almost anything else in finance, you always show a range of exit multiples and what the Terminal Value looks like over that range rather than picking one specific number. So if the median EBITDA multiple of the set were 8x, you might show a range of values using multiples from 6x to 10x.",
  },
  {
    number: 99,
    section: "DCF",
    question: "Which method of calculating Terminal Value will give you a higher valuation?",
    answer:
      "It’s hard to generalize because both are highly dependent on the assumptions you make. In general, the Multiples Method will be more variable than the Gordon Growth method because exit multiples tend to span a wider range than possible long-term growth rates.",
  },
  {
    number: 100,
    section: "DCF",
    question: "What’s the flaw with basing terminal multiples on what public company comparables are trading at?",
    answer:
      "The median multiples may change greatly in the next 5-10 years so it may no longer be accurate by the end of the period you’re looking at. This is why you normally look at a wide range of multiples and do a sensitivity to see how the valuation changes over that range. This method is particularly problematic with cyclical industries (e.g. semiconductors).",
  },
  {
    number: 101,
    section: "DCF",
    question: "How do you know if your DCF is too dependent on future assumptions?",
    answer:
      "The “standard” answer: if significantly more than 50% of the company’s Enterprise Value comes from its Terminal Value, your DCF is probably too dependent on future assumptions.\n\nIn reality, almost all DCFs are “too dependent on future assumptions” – it’s actually quite rare to see a case where the Terminal Value is less than 50% of the Enterprise Value. But when it gets to be in the 80-90% range, you know that you may need to re-think your assumptions.",
  },
  {
    number: 102,
    section: "DCF",
    question: "Should Cost of Equity be higher for a $5 billion or $500 million market cap company?",
    answer:
      "It should be higher for the $500 million company, because all else being equal, smaller companies are expected to outperform large companies in the stock market (and therefore be “more risky”). Using a Size Premium in your calculation would also ensure that Cost of Equity is higher for the $500 million company.",
  },
  {
    number: 103,
    section: "DCF",
    question: "What about WACC – will it be higher for a $5 billion or $500 million company?",
    answer:
      "This is a bit of a trick question because it depends on whether or not the capital structure is the same for both companies. If the capital structure is the same in terms of percentages and interest rates, then WACC should be higher for the $500 million company for the same reasons as above.\n\nIf the capital structure is not the same, then it could go either way depending on how much debt/preferred stock each one has and what the interest rates are.",
  },
  {
    number: 104,
    section: "DCF",
    question: "What’s the relationship between debt and Cost of Equity?",
    answer:
      "More debt means that the company is more risky, so the company’s Levered Beta will be higher – all else being equal, additional debt would raise the Cost of Equity, and less debt would lower the Cost of Equity.",
  },
  {
    number: 105,
    section: "DCF",
    question:
      "Cost of Equity tells us what kind of return an equity investor can expect for investing in a given company – but what about dividends? Shouldn’t we factor dividend yield into the formula?",
    answer:
      "Trick question. Dividend yields are already factored into Beta, because Beta describes returns in excess of the market as a whole – and those returns include dividends.",
  },
  {
    number: 106,
    section: "DCF",
    question: "How can we calculate Cost of Equity WITHOUT using CAPM?",
    answer:
      "There is an alternate formula:\n\nCost of Equity = (Dividends per Share / Share Price) + Growth Rate of Dividends\n\nThis is less common than the “standard” formula but sometimes you use it for companies where dividends are more important or when you lack proper information on Beta and the other variables that go into calculating Cost of Equity with CAPM.",
  },
  {
    number: 107,
    section: "DCF",
    question: "Two companies are exactly the same, but one has debt and one does not – which one will have the higher WACC?",
    answer:
      "This is tricky – the one without debt will have a higher WACC up to a certain point, because debt is “less expensive” than equity. Why?\n• Interest on debt is tax-deductible (hence the (1 – Tax Rate) multiplication in the WACC formula).\n• Debt is senior to equity in a company’s capital structure – debt holders would be paid first in a liquidation or bankruptcy.\n• Intuitively, interest rates on debt are usually lower than the Cost of Equity numbers you see (usually over 10%). As a result, the Cost of Debt portion of WACC will contribute less to the total figure than the Cost of Equity portion will.\n\nHowever, this is true only to a certain point. Once a company’s debt goes up high enough, the interest rate will rise dramatically to reflect the additional risk and so the Cost of Debt would start to increase – if it gets high enough, it might become higher than Cost of Equity and additional debt would increase WACC. It’s a “U-shape” curve where debt decreases WACC to a point, then starts increasing it.",
  },
  {
    number: 108,
    section: "DCF",
    question: "Which has a greater impact on a company’s DCF valuation – a 10% change in revenue or a 1% change in the discount rate?",
    answer:
      "You should start by saying, “it depends,” but most of the time the 10% difference in revenue will have more of an impact. That change in revenue doesn’t affect only the current year’s revenue, but also the revenue/EBITDA far into the future and even the terminal value.",
  },
  {
    number: 109,
    section: "DCF",
    question: "What about a 1% change in revenue vs. a 1% change in the discount rate?",
    answer:
      "In this case the discount rate is likely to have a bigger impact on the valuation, though the correct answer should start with, “It could go either way, but most of the time…”",
  },
  {
    number: 110,
    section: "DCF",
    question: "How do you calculate WACC for a private company?",
    answer:
      "This is problematic because private companies don’t have market caps or Betas. In this case you would most likely just estimate WACC based on work done by auditors or valuation specialists, or based on what WACC for comparable public companies is.",
  },
  {
    number: 111,
    section: "DCF",
    question: "What should you do if you don’t believe management’s projections for a DCF model?",
    answer:
      "You can take a few different approaches:\n• You can create your own projections.\n• You can modify management’s projections downward to make them more conservative.\n• You can show a sensitivity table based on different growth rates and margins and show the values assuming management’s projections and assuming a more conservative set of numbers.\n\nIn reality, you’d probably do all of these if you had unrealistic projections.",
  },
  {
    number: 112,
    section: "DCF",
    question: "Why would you not use a DCF for a bank or other financial institution?",
    answer:
      "Banks use debt differently than other companies and do not re-invest it in the business – they use it to create products instead. Also, interest is a critical part of banks’ business models and working capital takes up a huge part of their Balance Sheets – so a DCF for a financial institution would not make much sense. For financial institutions, it’s more common to use a dividend discount model for valuation purposes.",
  },
  {
    number: 113,
    section: "DCF",
    question: "What types of sensitivity analyses would we look at in a DCF?",
    answer:
      "Example sensitivities:\n• Revenue Growth vs. Terminal Multiple\n• EBITDA Margin vs. Terminal Multiple\n• Terminal Multiple vs. Discount Rate\n• Long-Term Growth Rate vs. Discount Rate\n\nAnd any combination of these (except Terminal Multiple vs. Long-Term Growth Rate, which would make no sense).",
  },
  {
    number: 114,
    section: "DCF",
    question:
      "A company has a high debt load and is paying off a significant portion of its principal each year. How do you account for this in a DCF?",
    answer:
      "Trick question. You don’t account for this at all in a DCF, because paying off debt principal shows up in Cash Flow from Financing on the Cash Flow Statement – but we only go down to Cash Flow from Operations and then subtract Capital Expenditures to get to Free Cash Flow.\n\nIf we were looking at Levered Free Cash Flow, then our interest expense would decline in future years due to the principal being paid off – but we still wouldn’t count the principal repayments themselves anywhere.",
  },

  // ---------------- Merger Models ----------------
  {
    number: 115,
    section: "Merger Models",
    question: "Walk me through a basic merger model.",
    answer:
      "“A merger model is used to analyze the financial profiles of 2 companies, the purchase price and how the purchase is made, and determines whether the buyer’s EPS increases or decreases.\n\nStep 1 is making assumptions about the acquisition – the price and whether it was cash, stock or debt or some combination of those. Next, you determine the valuations and shares outstanding of the buyer and seller and project out an Income Statement for each one.\n\nFinally, you combine the Income Statements, adding up line items such as Revenue and Operating Expenses, and adjusting for Foregone Interest on Cash and Interest Paid on Debt in the Combined Pre-Tax Income line; you apply the buyer’s Tax Rate to get the Combined Net Income, and then divide by the new share count to determine the combined EPS.”",
  },
  {
    number: 116,
    section: "Merger Models",
    question: "What’s the difference between a merger and an acquisition?",
    answer:
      "There’s always a buyer and a seller in any M&A deal – the difference between “merger” and “acquisition” is more semantic than anything. In a merger the companies are close to the same size, whereas in an acquisition the buyer is significantly larger.",
  },
  {
    number: 117,
    section: "Merger Models",
    question: "Why would a company want to acquire another company?",
    answer:
      "Several possible reasons:\n• The buyer wants to gain market share by buying a competitor.\n• The buyer needs to grow more quickly and sees an acquisition as a way to do that.\n• The buyer believes the seller is undervalued.\n• The buyer wants to acquire the seller’s customers so it can up-sell and cross-sell to them.\n• The buyer thinks the seller has a critical technology, intellectual property or some other “secret sauce” it can use to significantly enhance its business.\n• The buyer believes it can achieve significant synergies and therefore make the deal accretive for its shareholders.",
  },
  {
    number: 118,
    section: "Merger Models",
    question: "Why would an acquisition be dilutive?",
    answer:
      "An acquisition is dilutive if the additional amount of Net Income the seller contributes is not enough to offset the buyer’s foregone interest on cash, additional interest paid on debt, and the effects of issuing additional shares. Acquisition effects – such as amortization of intangibles – can also make an acquisition dilutive.",
  },
  {
    number: 119,
    section: "Merger Models",
    question: "Is there a rule of thumb for calculating whether an acquisition will be accretive or dilutive?",
    answer:
      "If the deal involves just cash and debt, you can sum up the interest expense for debt and the foregone interest on cash, then compare it against the seller’s Pre-Tax Income. And if it’s an all-stock deal you can use a shortcut to assess whether it is accretive (see the next question). But if the deal involves cash, stock, and debt, there’s no quick rule-of-thumb you can use unless you’re lightning fast with mental math.",
  },
  {
    number: 120,
    section: "Merger Models",
    question: "A company with a higher P/E acquires one with a lower P/E – is this accretive or dilutive?",
    answer:
      "Trick question. You can’t tell unless you also know that it’s an all-stock deal. If it’s an all-cash or all-debt deal, the P/E multiples of the buyer and seller don’t matter because no stock is being issued.\n\nSure, generally getting more earnings for less is good and is more likely to be accretive, but there’s no hard-and-fast rule unless it’s an all-stock deal.",
  },
  {
    number: 121,
    section: "Merger Models",
    question: "What is the rule of thumb for assessing whether an M&A deal will be accretive or dilutive?",
    answer:
      "In an all-stock deal, if the buyer has a higher P/E than the seller, it will be accretive; if the buyer has a lower P/E, it will be dilutive.\n\nOn an intuitive level, if you’re paying more for earnings than what the market values your own earnings at, you can guess that it will be dilutive; and likewise, if you’re paying less for earnings than what the market values your own earnings at, you can guess that it would be accretive.",
  },
  {
    number: 122,
    section: "Merger Models",
    question: "What are the complete effects of an acquisition?",
    answer:
      "1. Foregone Interest on Cash – The buyer loses the interest it would have otherwise earned if it uses cash for the acquisition.\n2. Additional Interest on Debt – The buyer pays additional Interest Expense if it uses debt.\n3. Additional Shares Outstanding – If the buyer pays with stock, it must issue additional shares.\n4. Combined Financial Statements – After the acquisition, the seller’s financials are added to the buyer’s.\n5. Creation of Goodwill & Other Intangibles – These Balance Sheet items that represent a “premium” paid to a company’s “fair value” also get created.\n\nNote: There’s actually more than this, but this is usually sufficient to mention in interviews.",
  },
  {
    number: 123,
    section: "Merger Models",
    question: "If a company were capable of paying 100% in cash for another company, why would it choose NOT to do so?",
    answer:
      "It might be saving its cash for something else or it might be concerned about running low if business takes a turn for the worse; its stock may also be trading at an all-time high and it might be eager to use that instead (in finance terms this would be “more expensive,” but a lot of executives value having a safety cushion in the form of a large cash balance).",
  },
  {
    number: 124,
    section: "Merger Models",
    question: "Why would a strategic acquirer typically be willing to pay more for a company than a private equity firm would?",
    answer:
      "Because the strategic acquirer can realize revenue and cost synergies that the private equity firm cannot unless it combines the company with a complementary portfolio company. Those synergies boost the effective valuation for the target company.",
  },
  {
    number: 125,
    section: "Merger Models",
    question: "Why do Goodwill & Other Intangibles get created in an acquisition?",
    answer:
      "These represent the value over the “fair market value” of the seller that the buyer has paid. You calculate the number by subtracting the book value of a company from its equity purchase price.\n\nMore specifically, Goodwill and Other Intangibles represent things like the value of customer relationships, brand names and intellectual property – valuable, but not true financial Assets that show up on the Balance Sheet.",
  },
  {
    number: 126,
    section: "Merger Models",
    question: "What is the difference between Goodwill and Other Intangible Assets?",
    answer:
      "Goodwill typically stays the same over many years and is not amortized. It changes only if there’s goodwill impairment (or another acquisition).\n\nOther Intangible Assets, by contrast, are amortized over several years and affect the Income Statement by hitting the Pre-Tax Income line. There’s also a difference in terms of what they each represent, but bankers rarely go into that level of detail – accountants and valuation specialists worry about assigning each one to specific items.",
  },
  {
    number: 127,
    section: "Merger Models",
    question: "Is there anything else “intangible” besides Goodwill & Other Intangibles that could also impact the combined company?",
    answer:
      "Yes. You could also have a Purchased In-Process R&D Write-off and a Deferred Revenue Write-off.\n\nThe first refers to any Research & Development projects that were purchased in the acquisition but which have not been completed yet. The logic is that unfinished R&D projects require significant resources to complete, and as such, the “expense” must be recognized as part of the acquisition.\n\nThe second refers to cases where the seller has collected cash for a service but not yet recorded it as revenue, and the buyer must write down the value of the Deferred Revenue to avoid “double-counting” revenue.",
  },
  {
    number: 128,
    section: "Merger Models",
    question: "What are synergies, and can you provide a few examples?",
    answer:
      "Synergies refer to cases where 2 + 2 = 5 (or 6, or 7…) in an acquisition. Basically, the buyer gets more value out of an acquisition than what the financials would predict. There are 2 types: revenue synergies and cost (or expense) synergies.\n\n• Revenue Synergies: The combined company can cross-sell products to new customers or up-sell new products to existing customers. It might also be able to expand into new geographies as a result of the deal.\n• Cost Synergies: The combined company can consolidate buildings and administrative staff and can lay off redundant employees. It might also be able to shut down redundant stores or locations.",
  },
  {
    number: 129,
    section: "Merger Models",
    question: "How are synergies used in merger models?",
    answer:
      "Revenue Synergies: Normally you add these to the Revenue figure for the combined company and then assume a certain margin on the Revenue – this additional Revenue then flows through the rest of the combined Income Statement.\n\nCost Synergies: Normally you reduce the combined COGS or Operating Expenses by this amount, which in turn boosts the combined Pre-Tax Income and thus Net Income, raising the EPS and making the deal more accretive.",
  },
  {
    number: 130,
    section: "Merger Models",
    question: "Are revenue or cost synergies more important?",
    answer:
      "No one in M&A takes revenue synergies seriously because they’re so hard to predict. Cost synergies are taken a bit more seriously because it’s more straightforward to see how buildings and locations might be consolidated and how many redundant employees might be eliminated. That said, the chances of any synergies actually being realized are almost 0, so few take them seriously at all.",
  },
  {
    number: 131,
    section: "Merger Models",
    question: "All else being equal, which method would a company prefer to use when acquiring another company – cash, stock, or debt?",
    answer:
      "Assuming the buyer had unlimited resources, it would always prefer to use cash when buying another company. Why?\n• Cash is “cheaper” than debt because interest rates on cash are usually under 5% whereas debt interest rates are almost always higher than that. Thus, foregone interest on cash is almost always less than additional interest paid on debt for the same amount of cash/debt.\n• Cash is also less “risky” than debt because there’s no chance the buyer might fail to raise sufficient funds from investors.\n• It’s hard to compare the “cost” directly to stock, but in general stock is the most “expensive” way to finance a transaction – remember how the Cost of Equity is almost always higher than the Cost of Debt? That same principle applies here.\n• Cash is also less risky than stock because the buyer’s share price could change dramatically once the acquisition is announced.",
  },
  {
    number: 132,
    section: "Merger Models",
    question: "How much debt could a company issue in a merger or acquisition?",
    answer:
      "Generally you would look at Comparable Companies / Precedent Transactions to determine this. You would use the combined company’s LTM (Last Twelve Months) EBITDA figure, find the median Debt/EBITDA ratio of whatever companies you’re looking at, and apply that to your own EBITDA figure to get a rough idea of how much debt you could raise.\n\nYou would also look at “Debt Comps” for companies in the same industry and see what types of debt and how many tranches they have used.",
  },
  {
    number: 133,
    section: "Merger Models",
    question: "How do you determine the Purchase Price for the target company in an acquisition?",
    answer:
      "You use the same Valuation methodologies discussed elsewhere. If the seller is a public company, you would pay more attention to the premium paid over the current share price to make sure it’s “sufficient” (generally in the 15-30% range) to win shareholder approval. For private sellers, more weight is placed on the traditional methodologies.",
  },
  {
    number: 134,
    section: "Merger Models",
    question: "Let’s say a company overpays for another company – what typically happens afterwards and can you give any recent examples?",
    answer:
      "There would be an incredibly high amount of Goodwill & Other Intangibles created if the price is far above the fair market value of the company. Depending on how the acquisition goes, there might be a large goodwill impairment charge later on if the company decides it overpaid.\n\nA recent example is the eBay / Skype deal, in which eBay paid a huge premium and extremely high multiple for Skype. It created excess Goodwill & Other Intangibles, and eBay later ended up writing down much of the value and taking a large quarterly loss as a result.",
  },
  {
    number: 135,
    section: "Merger Models",
    question: "A buyer pays $100 million for the seller in an all-stock deal, but a day later the market decides it’s only worth $50 million. What happens?",
    answer:
      "The buyer’s share price would fall by whatever per-share dollar amount corresponds to the $50 million loss in value. Note that it would not necessarily be cut in half.\n\nDepending on how the deal was structured, the seller would effectively only be receiving half of what it had originally negotiated. This illustrates one of the major risks of all-stock deals: sudden changes in share price could dramatically impact valuation.",
  },
  {
    number: 136,
    section: "Merger Models",
    question: "Why do most mergers and acquisitions fail?",
    answer:
      "Like so many things, M&A is “easier said than done.” In practice it’s very difficult to acquire and integrate a different company, actually realize synergies and also turn the acquired company into a profitable division.\n\nMany deals are also done for the wrong reasons, such as CEO ego or pressure from shareholders. Any deal done without both parties’ best interests in mind is likely to fail.",
  },
  {
    number: 137,
    section: "Merger Models",
    question: "What role does a merger model play in deal negotiations?",
    answer:
      "The model is used as a sanity check and is used to test various assumptions. A company would never decide to do a deal based on the output of a model.\n\nIt might say, “Ok, the model tells us this deal could work and be moderately accretive – it’s worth exploring more.” It would never say, “Aha! This model predicts 21% accretion – we should definitely acquire them now!”\n\nEmotions, ego and personalities play a far bigger role in M&A (and any type of negotiation) than numbers do.",
  },
  {
    number: 138,
    section: "Merger Models",
    question: "What types of sensitivities would you look at in a merger model? What variables would you look at?",
    answer:
      "The most common variables to look at are Purchase Price, % Stock/Cash/Debt, Revenue Synergies, and Expense Synergies. Sometimes you also look at different operating sensitivities, like Revenue Growth or EBITDA Margin, but it’s more common to build these into your model as different scenarios instead.\n\nYou might look at sensitivity tables showing the EPS accretion/dilution at different ranges for the Purchase Price vs. Cost Synergies, Purchase Price vs. Revenue Synergies, or Purchase Price vs. % Cash (and so on).",
  },

  // ---------------- LBO Models ----------------
  {
    number: 139,
    section: "LBO Models",
    question: "Walk me through a basic LBO model.",
    answer:
      "“In an LBO Model, Step 1 is making assumptions about the Purchase Price, Debt/Equity ratio, Interest Rate on Debt and other variables; you might also assume something about the company’s operations, such as Revenue Growth or Margins, depending on how much information you have.\n\nStep 2 is to create a Sources & Uses section, which shows how you finance the transaction and what you use the capital for; this also tells you how much Investor Equity is required.\n\nStep 3 is to adjust the company’s Balance Sheet for the new Debt and Equity figures, and also add in Goodwill & Other Intangibles on the Assets side to make everything balance.\n\nIn Step 4, you project out the company’s Income Statement, Balance Sheet and Cash Flow Statement, and determine how much debt is paid off each year, based on the available Cash Flow and the required Interest Payments.\n\nFinally, in Step 5, you make assumptions about the exit after several years, usually assuming an EBITDA Exit Multiple, and calculate the return based on how much equity is returned to the firm.”",
  },
  {
    number: 140,
    section: "LBO Models",
    question: "Why would you use leverage when buying a company?",
    answer:
      "To boost your return.\n\nRemember, any debt you use in an LBO is not “your money” – so if you’re paying $5 billion for a company, it’s easier to earn a high return on $2 billion of your own money and $3 billion borrowed from elsewhere vs. $3 billion of your own money and $2 billion of borrowed money. A secondary benefit is that the firm also has more capital available to purchase other companies because they’ve used leverage.",
  },
  {
    number: 141,
    section: "LBO Models",
    question: "What variables impact an LBO model the most?",
    answer:
      "Purchase and exit multiples have the biggest impact on the returns of a model. After that, the amount of leverage (debt) used also has a significant impact, followed by operational characteristics such as revenue growth and EBITDA margins.",
  },
  {
    number: 142,
    section: "LBO Models",
    question: "How do you pick purchase multiples and exit multiples in an LBO model?",
    answer:
      "The same way you do it anywhere else: you look at what comparable companies are trading at, and what multiples similar LBO transactions have had. As always, you also show a range of purchase and exit multiples using sensitivity tables.\n\nSometimes you set purchase and exit multiples based on a specific IRR target that you’re trying to achieve – but this is just for valuation purposes if you’re using an LBO model to value the company.",
  },
  {
    number: 143,
    section: "LBO Models",
    question: "What is an “ideal” candidate for an LBO?",
    answer:
      "“Ideal” candidates have stable and predictable cash flows, low-risk businesses, not much need for ongoing investments such as Capital Expenditures, as well as an opportunity for expense reductions to boost their margins. A strong management team also helps, as does a base of assets to use as collateral for debt. The most important part is stable cash flow.",
  },
  {
    number: 144,
    section: "LBO Models",
    question: "How do you use an LBO model to value a company, and why do we sometimes say that it sets the “floor valuation” for the company?",
    answer:
      "You use it to value a company by setting a targeted IRR (for example, 25%) and then back-solving in Excel to determine what purchase price the PE firm could pay to achieve that IRR.\n\nThis is sometimes called a “floor valuation” because PE firms almost always pay less for a company than strategic acquirers would.",
  },
  {
    number: 145,
    section: "LBO Models",
    question: "Give an example of a “real-life” LBO.",
    answer:
      "The most common example is taking out a mortgage when you buy a house. Here’s how the analogy works:\n• Down Payment: Investor Equity in an LBO\n• Mortgage: Debt in an LBO\n• Mortgage Interest Payments: Debt Interest in an LBO\n• Mortgage Repayments: Debt Principal Repayments in an LBO\n• Selling the House: Selling the Company / Taking It Public in an LBO",
  },
  {
    number: 146,
    section: "LBO Models",
    question: "Can you explain how the Balance Sheet is adjusted in an LBO model?",
    answer:
      "First, the Liabilities & Equity side is adjusted – the new debt is added on, and the Shareholders’ Equity is “wiped out” and replaced by however much equity the private equity firm is contributing.\n\nOn the Assets side, Cash is adjusted for any cash used to finance the transaction, and then Goodwill & Other Intangibles are used as a “plug” to make the Balance Sheet balance. Depending on the transaction, there could be other effects as well – such as capitalized financing fees added to the Assets side.",
  },
  {
    number: 147,
    section: "LBO Models",
    question: "Why are Goodwill & Other Intangibles created in an LBO?",
    answer:
      "Remember, these both represent the premium paid to the “fair market value” of the company. In an LBO, they act as a “plug” and ensure that the changes to the Liabilities & Equity side are balanced by changes to the Assets side.",
  },
  {
    number: 148,
    section: "LBO Models",
    question: "We saw that a strategic acquirer will usually prefer to pay for another company in cash – if that’s the case, why would a PE firm want to use debt in an LBO?",
    answer:
      "It’s a different scenario because:\n1. The PE firm does not intend to hold the company for the long-term – it usually sells it after a few years, so it is less concerned with the “expense” of cash vs. debt and more concerned about using leverage to boost its returns by reducing the amount of capital it has to contribute upfront.\n2. In an LBO, the debt is “owned” by the company, so it assumes much of the risk. Whereas in a strategic acquisition, the buyer “owns” the debt so it is more risky for them.",
  },
  {
    number: 149,
    section: "LBO Models",
    question: "Do you need to project all 3 statements in an LBO model? Are there any “shortcuts?”",
    answer:
      "Yes, there are shortcuts and you don’t necessarily need to project all 3 statements.\n\nFor example, you do not need to create a full Balance Sheet – bankers sometimes skip this if they are in a rush. You do need some form of Income Statement, something to track how the Debt balances change and some type of Cash Flow Statement to show how much cash is available to repay debt.\n\nBut a full-blown Balance Sheet is not strictly required, because you can just make assumptions on the Net Change in Working Capital rather than looking at each item individually.",
  },
  {
    number: 150,
    section: "LBO Models",
    question: "How would you determine how much debt can be raised in an LBO and how many tranches there would be?",
    answer:
      "Usually you would look at Comparable LBOs and see the terms of the debt and how many tranches each of them used. You would look at companies in a similar size range and industry and use those criteria to determine the debt your company can raise.",
  },
  {
    number: 151,
    section: "LBO Models",
    question: "Let’s say we’re analyzing how much debt a company can take on, and what the terms of the debt should be. What are reasonable leverage and coverage ratios?",
    answer:
      "This is completely dependent on the company, the industry, and the leverage and coverage ratios for comparable LBO transactions. To figure out the numbers, you would look at “debt comps” showing the types, tranches, and terms of debt that similarly sized companies in the industry have used recently.\n\nThere are some general rules: for example, you would never lever a company at 50x EBITDA, and even during the bubble leverage rarely exceeded 5-10x EBITDA.",
  },
  {
    number: 152,
    section: "LBO Models",
    question: "What is the difference between bank debt and high-yield debt?",
    answer:
      "This is a simplification, but broadly speaking there are 2 “types” of debt: “bank debt” and “high-yield debt.” There are many differences, but here are a few of the most important ones:\n• High-yield debt tends to have higher interest rates than bank debt (hence the name “high-yield”).\n• High-yield debt interest rates are usually fixed, whereas bank debt interest rates are “floating” – they change based on LIBOR or the Fed interest rate.\n• High-yield debt has incurrence covenants while bank debt has maintenance covenants. The main difference is that incurrence covenants prevent you from doing something (such as selling an asset, buying a factory, etc.) while maintenance covenants require you to maintain a minimum financial performance (for example, the Debt/EBITDA ratio must be below 5x at all times).\n• Bank debt is usually amortized – the principal must be paid off over time – whereas with high-yield debt, the entire principal is due at the end (bullet maturity).\n\nUsually in a sizable Leveraged Buyout, the PE firm uses both types of debt.",
  },
  {
    number: 153,
    section: "LBO Models",
    question: "Why might you use bank debt rather than high-yield debt in an LBO?",
    answer:
      "If the PE firm or the company is concerned about meeting interest payments and wants a lower-cost option, they might use bank debt; they might also use bank debt if they are planning on major expansion or Capital Expenditures and don’t want to be restricted by incurrence covenants.",
  },
  {
    number: 154,
    section: "LBO Models",
    question: "Why would a PE firm prefer high-yield debt instead?",
    answer:
      "If the PE firm intends to refinance the company at some point or they don’t believe their returns are too sensitive to interest payments, they might use high-yield debt. They might also use the high-yield option if they don’t have plans for major expansion or selling off the company’s assets.",
  },
  {
    number: 155,
    section: "LBO Models",
    question: "Why would a private equity firm buy a company in a “risky” industry, such as technology?",
    answer:
      "Although technology is more “risky” than other markets, remember that there are mature, cash flow-stable companies in almost every industry. There are some PE firms that specialize in very specific goals, such as:\n• Industry consolidation – buying competitors in a similar market and combining them to increase efficiency and win more customers.\n• Turnarounds – taking struggling companies and making them function properly again.\n• Divestitures – selling off divisions of a company or taking a division and turning it into a strong stand-alone entity.\n\nSo even if a company isn’t doing well or seems risky, the firm might buy it if it falls into one of these categories.",
  },
  {
    number: 156,
    section: "LBO Models",
    question: "How could a private equity firm boost its return in an LBO?",
    answer:
      "1. Lower the Purchase Price in the model.\n2. Raise the Exit Multiple / Exit Price.\n3. Increase the Leverage (debt) used.\n4. Increase the company’s growth rate (organically or via acquisitions).\n5. Increase margins by reducing expenses (cutting employees, consolidating buildings, etc.).\n\nNote that these are all “theoretical” and refer to the model rather than reality – in practice it’s hard to actually implement these.",
  },
  {
    number: 157,
    section: "LBO Models",
    question: "What is meant by the “tax shield” in an LBO?",
    answer:
      "This means that the interest a firm pays on debt is tax-deductible – so they save money on taxes and therefore increase their cash flow as a result of having debt from the LBO.\n\nNote, however, that their cash flow is still lower than it would be without the debt – saving on taxes helps, but the added interest expense still reduces Net Income over what it would be for a debt-free company.",
  },
  {
    number: 158,
    section: "LBO Models",
    question: "What is a dividend recapitalization (“dividend recap”)?",
    answer:
      "In a dividend recap, the company takes on new debt solely to pay a special dividend out to the PE firm that bought it.\n\nIt would be like if you made your friend take out a personal loan just so he/she could pay you a lump sum of cash with the loan proceeds. As you might guess, dividend recaps have developed a bad reputation, though they’re still commonly used.",
  },
  {
    number: 159,
    section: "LBO Models",
    question: "Why would a PE firm choose to do a dividend recap of one of its portfolio companies?",
    answer:
      "Primarily to boost returns. Remember, all else being equal, more leverage means a higher return to the firm.\n\nWith a dividend recap, the PE firm is “recovering” some of its equity investment in the company – and as we saw earlier, the lower the equity investment, the better, since it’s easier to earn a higher return on a smaller amount of capital.",
  },
  {
    number: 160,
    section: "LBO Models",
    question: "How would a dividend recap impact the 3 financial statements in an LBO?",
    answer:
      "No changes to the Income Statement. On the Balance Sheet, Debt would go up and Shareholders’ Equity would go down and they would cancel each other out so that everything remained in balance.\n\nOn the Cash Flow Statement, there would be no changes to Cash Flow from Operations or Investing, but under Financing the additional Debt raised would cancel out the Cash paid out to the investors, so Net Change in Cash would not change.",
  },
];
