const blogsMock = {
  current_page: 1,
  per_page: 5,
  last_page: 3,
  total_count: 10,
  items: [
    {
      id: 101,
      title: "1Gold Prices Reach Record Highs",
      created_at: "2025-10-20T09:15:00Z",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      short_content:
        "Global gold prices surged this week due to market volatility.",
      content:
        '<article><h1>Gold Prices Reach Record Highs</h1><p>Gold prices have reached a new record high this week as investors seek safe-haven assets amid economic uncertainty. <strong>Analysts predict further growth</strong> if inflation continues to rise.</p><p>Read more on the market <a href="https://example.com/markets">here</a>.</p></article>',
    },
    {
      id: 102,
      title: "2Nadir Gold Launches New Mobile App",
      created_at: "2025-10-18T13:42:00Z",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      short_content:
        "Nadir Gold introduces a user-friendly app for seamless trading.",
      content:
        '<article><h1>Nadir Gold Launches New Mobile App</h1><p>Nadir Gold announced the release of its new mobile application that allows users to buy, sell, and monitor gold investments directly from their smartphones with real-time price updates.</p><ul><li>Real-time charts</li><li>Secure authentication</li><li>Push notifications</li></ul><p><img src="https://example.com/images/app-screenshot.png" alt="App screenshot"/></p></article>',
    },
    {
      id: 103,
      title: "3Understanding Gold Purity Levels",
      created_at: "2025-10-15T16:05:00Z",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      short_content:
        "Learn the key differences between 24K, 22K, and 18K gold.",
      content:
        "<article><h1>Understanding Gold Purity Levels</h1><p>Gold purity levels are measured in karats, with <strong>24K</strong> being the purest form. This article explains the differences between <em>24K, 22K, and 18K</em> gold, and how purity affects durability and color.</p><table><thead><tr><th>Karat</th><th>Purity</th><th>Common Use</th></tr></thead><tbody><tr><td>24K</td><td>99.9%</td><td>Investment bars</td></tr><tr><td>22K</td><td>91.6%</td><td>High-end jewelry</td></tr><tr><td>18K</td><td>75%</td><td>Durable jewelry</td></tr></tbody></table></article>",
    },
    {
      id: 104,
      title: "4How to Store Your Gold Safely",
      created_at: "2025-09-30T08:00:00Z",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      short_content: "Best practices for protecting physical gold holdings.",
      content:
        "<article><h1>How to Store Your Gold Safely</h1><p>Proper storage protects the value of your physical gold. Consider these options:</p><ol><li>Bank safe deposit boxes</li><li>Insured private vaults</li><li>Home safes bolted to the structure</li></ol><p>Always keep documentation and receipts in a separate, secure location.</p></article>",
    },
    {
      id: 105,
      title: "5Weekly Market Summary — October 13–19",
      created_at: "2025-10-19T18:30:00Z",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      short_content: "A quick recap of commodities and currency movements.",
      content:
        '<article><h1>Weekly Market Summary — October 13–19</h1><p>This week saw mixed movements across commodities. Gold strengthened while some currencies weakened against the dollar.</p><section><h2>Highlights</h2><p>- Gold: +2.4% this week<br/>- Oil: -1.1% this week<br/>- USD: Slight appreciation vs EUR</p></section><p>Full report and charts available in the <a href="https://example.com/reports/weekly-2025-10-19">weekly report</a>.</p></article>',
    },
    {
      id: 106,
      title: "6Gold Prices Reach Record Highs",
      created_at: "2025-10-20T09:15:00Z",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      short_content:
        "Global gold prices surged this week due to market volatility.",
      content:
        '<article><h1>Gold Prices Reach Record Highs</h1><p>Gold prices have reached a new record high this week as investors seek safe-haven assets amid economic uncertainty. <strong>Analysts predict further growth</strong> if inflation continues to rise.</p><p>Read more on the market <a href="https://example.com/markets">here</a>.</p></article>',
    },
    {
      id: 107,
      title: "7Nadir Gold Launches New Mobile App",
      created_at: "2025-10-18T13:42:00Z",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      short_content:
        "Nadir Gold introduces a user-friendly app for seamless trading.",
      content:
        '<article><h1>Nadir Gold Launches New Mobile App</h1><p>Nadir Gold announced the release of its new mobile application that allows users to buy, sell, and monitor gold investments directly from their smartphones with real-time price updates.</p><ul><li>Real-time charts</li><li>Secure authentication</li><li>Push notifications</li></ul><p><img src="https://example.com/images/app-screenshot.png" alt="App screenshot"/></p></article>',
    },
    {
      id: 108,
      title: "8Understanding Gold Purity Levels",
      created_at: "2025-10-15T16:05:00Z",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      short_content:
        "Learn the key differences between 24K, 22K, and 18K gold.",
      content:
        "<article><h1>Understanding Gold Purity Levels</h1><p>Gold purity levels are measured in karats, with <strong>24K</strong> being the purest form. This article explains the differences between <em>24K, 22K, and 18K</em> gold, and how purity affects durability and color.</p><table><thead><tr><th>Karat</th><th>Purity</th><th>Common Use</th></tr></thead><tbody><tr><td>24K</td><td>99.9%</td><td>Investment bars</td></tr><tr><td>22K</td><td>91.6%</td><td>High-end jewelry</td></tr><tr><td>18K</td><td>75%</td><td>Durable jewelry</td></tr></tbody></table></article>",
    },
    {
      id: 109,
      title: "9How to Store Your Gold Safely",
      created_at: "2025-09-30T08:00:00Z",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      short_content: "Best practices for protecting physical gold holdings.",
      content:
        "<article><h1>How to Store Your Gold Safely</h1><p>Proper storage protects the value of your physical gold. Consider these options:</p><ol><li>Bank safe deposit boxes</li><li>Insured private vaults</li><li>Home safes bolted to the structure</li></ol><p>Always keep documentation and receipts in a separate, secure location.</p></article>",
    },
    {
      id: 110,
      title: "10Weekly Market Summary — October 13–19",
      created_at: "2025-10-19T18:30:00Z",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      short_content: "A quick recap of commodities and currency movements.",
      content:
        '<article><h1>Weekly Market Summary — October 13–19</h1><p>This week saw mixed movements across commodities. Gold strengthened while some currencies weakened against the dollar.</p><section><h2>Highlights</h2><p>- Gold: +2.4% this week<br/>- Oil: -1.1% this week<br/>- USD: Slight appreciation vs EUR</p></section><p>Full report and charts available in the <a href="https://example.com/reports/weekly-2025-10-19">weekly report</a>.</p></article>',
    },
  ],
};

export default blogsMock;
