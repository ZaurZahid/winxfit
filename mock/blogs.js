const blogsMock = {
  current_page: 1,
  per_page: 20,
  last_page: 1,
  total_count: 20,
  items: [
    {
      id: 201,
      title: "How WinxFit Turns Everyday Movement into Real Rewards",
      created_at: "2025-10-21T09:00:00Z",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
      short_content:
        "Discover how WinxFit converts verified steps and minutes into points, perks, and cash.",
      content:
        "<article><h1>How WinxFit Turns Everyday Movement into Real Rewards</h1><p>WinxFit is designed to reward the activity you already do. Every verified step, minute, or kilometer adds up to points. Points can be redeemed for perks, discounts, or cash in supported regions. Daily syncing keeps your progress accurate and visible on leaderboards. The app connects with Apple Health, Google Fit, Garmin, Fitbit, and Strava. This ensures your data is reliable and secure. You can join public challenges or create custom competitions with Premium. Transparent rules keep the playing field fair for everyone. Streaks and milestones bring extra bonuses. With WinxFit, moving more becomes a habit that also pays off.</p></article>",
    },
    {
      id: 202,
      title: "A Beginner’s Guide to Earning with Fitness Challenges",
      created_at: "2025-10-20T11:15:00Z",
      image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
      short_content:
        "Start earning by joining step, distance, or active-minute challenges on day one.",
      content:
        "<article><h1>A Beginner’s Guide to Earning with Fitness Challenges</h1><p>Getting started with WinxFit is quick and free. Create an account and connect your preferred fitness source. Pick a challenge that matches your routine and fitness level. Daily, weekly, and monthly events are available. Start with small goals to build confidence. Watch your name climb the leaderboard as you sync daily. Earn points through verified activity and fair rules. Redeem points for rewards when you hit thresholds. Use streaks to keep your momentum high. Over time, consistency becomes your biggest advantage. Winning becomes a by-product of healthy habits.</p></article>",
    },
    {
      id: 203,
      title: "Why Verification Matters in Skill-Based Fitness Apps",
      created_at: "2025-10-19T08:30:00Z",
      image:
        "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
      short_content:
        "Verified data keeps competitions fair, transparent, and trusted by all players.",
      content:
        "<article><h1>Why Verification Matters in Skill-Based Fitness Apps</h1><p>Fair competition is the core of WinxFit. The platform validates activity using trusted sources like Apple Health and Google Fit. Automatic integrity checks flag suspicious data for review. This protects honest participants and legitimate rewards. Verified performance means results reflect skill and effort. It also builds long-term trust in the community. Leaderboards update in real time with reliable metrics. This encourages healthy rivalry and consistent participation. Transparency in rules keeps confusion low. Verification is not an obstacle; it is your shield. It ensures your hard work is counted accurately.</p></article>",
    },
    {
      id: 204,
      title: "From Steps to Streaks: Building Consistency with WinxFit",
      created_at: "2025-10-18T17:45:00Z",
      image:
        "https://images.pexels.com/photos/4140291/pexels-photo-4140291.jpeg",
      short_content:
        "Learn how streaks, milestones, and daily syncs turn movement into a winning routine.",
      content:
        "<article><h1>From Steps to Streaks: Building Consistency with WinxFit</h1><p>Consistency is the easiest way to outperform talent. WinxFit rewards daily effort through streak bonuses. Short sessions compound into big results over time. Syncing daily keeps your streaks intact and visible. Small, regular wins prevent burnout and injuries. Weekly check-ins help you adjust goals and pace. Milestones provide extra motivation and points. Real-time leaderboards show your progress clearly. Sharing results with friends boosts accountability. Consistency also improves your baseline fitness. The longer you stay consistent, the more you earn.</p></article>",
    },
    {
      id: 205,
      title: "Creating Custom Competitions: A Playbook for Premium Hosts",
      created_at: "2025-10-18T10:00:00Z",
      image:
        "https://images.pexels.com/photos/3764012/pexels-photo-3764012.jpeg",
      short_content:
        "Premium users can set rules, entry limits, and prize structures for tailored events.",
      content:
        "<article><h1>Creating Custom Competitions: A Playbook for Premium Hosts</h1><p>Premium unlocks hosting tools for private or public challenges. You can define duration, rules, and entry limits. Pick a metric like steps, distance, or active minutes. Set clear eligibility and scoring to avoid confusion. Decide on prize pools and reward thresholds. Invite friends, colleagues, or community groups easily. Use the live leaderboard to keep energy high. Post updates to celebrate milestones and fair play. Encourage daily syncs to prevent missed data. Close the challenge with timely rewards and feedback. Hosting builds community while reinforcing healthy habits.</p></article>",
    },
    {
      id: 206,
      title: "How Teams Multiply Motivation in Fitness Rewards Apps",
      created_at: "2025-10-17T19:20:00Z",
      image:
        "https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg",
      short_content:
        "Team formats boost accountability, enjoyment, and long-term retention.",
      content:
        "<article><h1>How Teams Multiply Motivation in Fitness Rewards Apps</h1><p>Working as a team makes fitness more social and sustainable. WinxFit supports team leaderboards for friendly rivalry. Individual results still count toward personal rewards. Team goals create shared momentum across the week. Captains can organize schedules and mini-goals. Group chat keeps morale high and focused. Celebrating small wins strengthens community ties. Teams also reduce drop-off during busy weeks. Fair verification ensures each contribution is real. The result is higher engagement and better outcomes. Teams make progress both fun and rewarding.</p></article>",
    },
    {
      id: 207,
      title: "The Psychology of Earning While Exercising",
      created_at: "2025-10-17T07:40:00Z",
      image:
        "https://images.pexels.com/photos/4140293/pexels-photo-4140293.jpeg",
      short_content:
        "Small financial incentives amplify motivation without replacing intrinsic goals.",
      content:
        "<article><h1>The Psychology of Earning While Exercising</h1><p>Monetary rewards can nudge healthy choices. WinxFit adds tangible outcomes to intrinsic goals. Cashouts, perks, and badges reinforce habit loops. Visible progress keeps dopamine levels balanced. Social comparisons provide context and urgency. Streaks transform daily effort into identity. Verified fairness protects motivation from doubt. Micro-rewards reduce the temptation to skip days. Over time, external rewards become less necessary. The habit remains even when incentives rotate. Psychology and design work together to keep you moving.</p></article>",
    },
    {
      id: 208,
      title: "Data Privacy in Fitness Apps: What WinxFit Gets Right",
      created_at: "2025-10-16T15:10:00Z",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      short_content:
        "Encryption, minimal access, and clear purpose make your data safer.",
      content:
        "<article><h1>Data Privacy in Fitness Apps: What WinxFit Gets Right</h1><p>Privacy is non-negotiable in modern fitness tech. WinxFit uses encryption to protect sensitive details. Data is accessed only to calculate results and rewards. The platform never sells personal data to third parties. Integrations follow the permissions you approve. You can disconnect any source at any time. Transparent policies explain how data flows. Security reviews keep systems aligned with best practices. Support is available for privacy questions. Responsible design builds trust across the community. Safer data means more confident participation.</p></article>",
    },
    {
      id: 209,
      title: "Picking the Right Challenge for Your Fitness Level",
      created_at: "2025-10-15T09:35:00Z",
      image:
        "https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg",
      short_content:
        "Match events to your current routine to maximize progress and earnings.",
      content:
        "<article><h1>Picking the Right Challenge for Your Fitness Level</h1><p>Choosing the right event increases your chance of success. Beginners can start with step or active-minute goals. Intermediate users may prefer distance challenges. Advanced athletes can combine multiple metrics. Consider your weekly schedule and recovery needs. Leave margin for unexpected busy days. Track progress after the first few sessions. Adjust goals if stress or soreness grows. Use Premium custom events for tailored rules. Consistency beats intensity in the long run. Smart selection turns effort into reliable rewards.</p></article>",
    },
    {
      id: 210,
      title: "How Real-Time Leaderboards Keep You Engaged",
      created_at: "2025-10-14T18:00:00Z",
      image: "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg",
      short_content:
        "Live rankings create urgency, clarity, and friendly pressure to move.",
      content:
        "<article><h1>How Real-Time Leaderboards Keep You Engaged</h1><p>Leaderboards give instant feedback on performance. Seeing your rank encourages one more walk or ride. WinxFit updates standings as soon as you sync. You can compare progress with friends or teams. Filters let you view local or global rivals. Milestone badges appear alongside your name. Fair verification ensures every score is legit. This reduces frustration and builds respect. Leaderboards also surface inspirational stories. They turn solo exercise into a shared game. Engagement naturally rises when results feel meaningful.</p></article>",
    },
    {
      id: 211,
      title: "Walking, Running, or Cycling: Which Pays You Best?",
      created_at: "2025-10-14T07:30:00Z",
      image:
        "https://images.pexels.com/photos/9602276/pexels-photo-9602276.jpeg",
      short_content:
        "Choose a modality that you’ll sustain and sync daily for reliable rewards.",
      content:
        "<article><h1>Walking, Running, or Cycling: Which Pays You Best?</h1><p>The best modality is the one you repeat. Walking is accessible and easy to sustain. Running offers strong intensity for shorter sessions. Cycling is joint-friendly and great for distance. WinxFit rewards verified effort across all three. Your schedule and environment influence the choice. Try each for two weeks to compare consistency. Watch which activity survives busy days. Pick the winner and build a routine. Long-term adherence outperforms short bursts. Sustainable choices produce steady earnings.</p></article>",
    },
    {
      id: 212,
      title: "Structuring a 30-Day Challenge for Maximum Payout",
      created_at: "2025-10-13T16:10:00Z",
      image: "https://images.pexels.com/photos/267284/pexels-photo-267284.jpeg",
      short_content:
        "Set rules, milestones, and streak targets that keep participants engaged.",
      content:
        "<article><h1>Structuring a 30-Day Challenge for Maximum Payout</h1><p>Thirty days is long enough to build a habit. Choose a single metric to keep things simple. Define daily minimums that most participants can hit. Add weekly milestones for bonus points. Encourage rest days to prevent burnout. Use team options for social accountability. Post mid-challenge updates to maintain excitement. Remind players to sync daily for accuracy. Close with a recap and transparent prize distribution. Invite feedback to refine the next event. Good structure creates fair and exciting outcomes.</p></article>",
    },
    {
      id: 213,
      title: "How to Host a Fair Invite-Only Competition",
      created_at: "2025-10-12T08:25:00Z",
      image: "https://images.pexels.com/photos/375737/pexels-photo-375737.jpeg",
      short_content:
        "Clear rules, verified sources, and transparent rewards build trust quickly.",
      content:
        "<article><h1>How to Host a Fair Invite-Only Competition</h1><p>Invite-only events work best with clear expectations. Share rules and scoring before the start date. Require participants to connect approved data sources. Use WinxFit's integrity checks to prevent abuse. Keep prize structures simple and documented. Cap entries to match your monitoring capacity. Provide a timetable for announcements and payouts. Encourage participants to report issues early. Post weekly standings and highlights publicly. Close with a final audit and thank-you note. Fair hosting turns guests into loyal members.</p></article>",
    },
    {
      id: 214,
      title: "Micro-Habits That Boost Your Daily Points",
      created_at: "2025-10-11T19:50:00Z",
      image:
        "https://images.pexels.com/photos/14921377/pexels-photo-14921377.jpeg",
      short_content:
        "Five-minute walks, staircase choices, and calendar reminders add up fast.",
      content:
        "<article><h1>Micro-Habits That Boost Your Daily Points</h1><p>Small actions accumulate into big totals. Take short walks during calls and breaks. Choose stairs for two floors or less. Schedule reminders to stand and stretch. Park slightly farther from entrances. Add a quick evening stroll before dinner. Sync your device right after activities. Track streaks to maintain momentum. Celebrate small wins with badges or notes. Share tips with your team to multiply impact. Micro-habits make progress automatic and rewarding.</p></article>",
    },
    {
      id: 215,
      title: "The Tech Behind WinxFit’s Device Integrations",
      created_at: "2025-10-11T07:05:00Z",
      image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
      short_content:
        "Apple Health, Google Fit, Garmin, Fitbit, and Strava power accurate tracking.",
      content:
        "<article><h1>The Tech Behind WinxFit’s Device Integrations</h1><p>Integrations are the backbone of reliable tracking. WinxFit connects with major platforms securely. Each source provides verified metrics like steps and distance. Permissions are always user-controlled and revocable. Data flows are minimized to only what's necessary. Automatic syncing reduces manual errors and delays. Integrity checks compare patterns over time. This flags anomalies without punishing genuine effort. The result is fair scoring for all participants. Strong integrations make participation effortless. Technology serves the competition, not the other way around.</p></article>",
    },
    {
      id: 216,
      title: "Cash vs. Perks: Which Reward Motivates You More?",
      created_at: "2025-10-10T13:20:00Z",
      image:
        "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg",
      short_content:
        "Different rewards drive different behaviors; mix them to keep motivation high.",
      content:
        "<article><h1>Cash vs. Perks: Which Reward Motivates You More?</h1><p>People respond to rewards in different ways. Cash is simple and universally useful. Perks can feel special and memorable. WinxFit supports both approaches through points. Hosts can choose mixes that fit their audience. Rotating rewards prevents fatigue over time. Badges and titles add social recognition. Milestones deliver small wins between payouts. Surveys help refine reward structures. The best program is the one you stick to. Variety keeps motivation fresh and sustainable.</p></article>",
    },
    {
      id: 217,
      title: "Office Wellness: Run a Company Challenge That Actually Works",
      created_at: "2025-10-09T18:55:00Z",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      short_content:
        "Use simple rules, inclusive goals, and transparent rewards to engage everyone.",
      content:
        "<article><h1>Office Wellness: Run a Company Challenge That Actually Works</h1><p>Corporate challenges fail when they are complex or exclusive. WinxFit helps admins design inclusive events. Steps and active minutes welcome all fitness levels. Clear rules avoid disputes and confusion. Team formats build camaraderie across departments. Weekly updates keep interest high and focused. Rewards should be visible but not coercive. Provide flexible participation times during the day. Recognize effort, not just top performers. Close with a celebration and summary. Wellness improves when programs are simple and fair.</p></article>",
    },
    {
      id: 218,
      title: "Weekend Warrior: Maximizing Points in Limited Time",
      created_at: "2025-10-08T07:25:00Z",
      image: "https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg",
      short_content:
        "Short on time? Use interval sessions and stacked walks to stay competitive.",
      content:
        "<article><h1>Weekend Warrior: Maximizing Points in Limited Time</h1><p>Busy schedules do not end progress. Interval sessions compress intensity into minutes. Stacked walks add up across errands and chores. Early-morning syncs keep streaks alive. Plan two main efforts on weekends. Use indoor options when weather blocks outdoor plans. Track hydration to sustain energy and focus. Share your plan with teammates for support. Review your leaderboard position Sunday night. Adjust goals for the coming week realistically. Limited time still produces real results with structure.</p></article>",
    },
    {
      id: 219,
      title: "Avoiding Burnout in Competitive Fitness Apps",
      created_at: "2025-10-07T12:10:00Z",
      image:
        "https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg",
      short_content:
        "Balance intensity with recovery and use streaks wisely to stay healthy.",
      content:
        "<article><h1>Avoiding Burnout in Competitive Fitness Apps</h1><p>Ambition can sometimes backfire without rest. WinxFit encourages steady effort over extremes. Schedule recovery days to protect your body. Use cross-training to vary stress and interest. Keep hydration and sleep as non-negotiables. Aim for sustainable streaks rather than perfect ones. Compare with your past self, not only rivals. Track how you feel, not only totals. Reduce goals during demanding weeks at work. Celebrate consistent participation as a win. Burnout prevention leads to better long-term results.</p></article>",
    },
    {
      id: 220,
      title: "From First Cashout to Long-Term Fitness Habit",
      created_at: "2025-10-06T08:40:00Z",
      image:
        "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
      short_content:
        "Turn your first payout into a repeatable routine with simple systems.",
      content:
        "<article><h1>From First Cashout to Long-Term Fitness Habit</h1><p>Your first cashout proves the system works. Use that momentum to set stable routines. Plan recurring times for walking or cycling. Keep gear visible to reduce friction. Join overlapping challenges for continuity. Track streaks and adjust goals monthly. Invite friends to increase accountability. Experiment with rewards that excite you most. Remember that slow progress compounds daily. Review results each Sunday and refine plans. Habits turn rewards into an ongoing lifestyle.</p></article>",
    },
  ],
};

export default blogsMock;
