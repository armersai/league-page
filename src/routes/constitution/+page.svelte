<script>
    import { dues } from '$lib/utils/helper';
    let one, oneOne, oneOneOne, oneTwo, oneTwoOne, oneTwoTwo, oneTwoThree, oneTwoFour, oneTwoFive, oneThree;
    let two, twoOne, twoTwo, twoThree;
    let three, threeOne;
    let four, fourOne, fourTwo;
    let five, fiveOne, fiveTwo, fiveThree, fiveFour, fiveFive, fiveSix;
    let six, sixOne, sixTwo, sixThree;
    let seven, sevenOne, sevenTwo, sevenThree;

    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({left: 0, top, behavior: 'smooth'});
    }
</script>

<style>
    .constitution {
        position: relative;
        z-index: 1;
        width: 92%;
        max-width: 800px;
        margin: 2em auto 10em;
    }

    h1 {
        font-size: 2em;
        line-height: 1.2em;
        text-align: center;
        margin: 2em 0 1.5em;
    }

    h2 {
        font-size: 1.5em;
        line-height: 1.2em;
    }

    h3 {
        text-decoration: underline;
        font-size: 1.3em;
        line-height: 1.2em;
    }

    h4 {
        text-decoration: underline;
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }

    h5 {
        margin-left: 6em;
        font-size: 0.8em;
        line-height: 1.1em;
    }

    .subBlock {
        margin-left: 2.4em;
    }

    .sectionHeading {
        margin: 4em 0 1.5em;
    }

    .subSectionHeading {
        margin: 1.5em 0 1.5em;
    }

    .underscore {
        text-decoration: underline;
    }

    .right {
        text-align: right;
    }

    .positionMaximums td {
        min-width: 3em;
    }

    .noUnderscore {
        text-decoration: none;
    }

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        color: #00316b;
    }

    p {
        color: #777;
    }

    img {
        max-width: 500px;
        width: 100%;
    }
</style>

<div class="constitution">
    <center><img src="/constitution-banner.png" alt="constitution banner"/></center>
    
    <h2 class="noUnderscore">TABLE OF CONTENTS</h2>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(one)}>Section 1: Roster</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneOne)}>1.1 Positional Breakdown</h4>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneOneOne)}>1.1.1 Position Maximums</h5>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneTwo)}>1.2 Trading</h4>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoOne)}>1.2.1 Trade Collusion</h5>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoTwo)}>1.2.2 Lending Players Prohibition</h5>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoThree)}>1.2.3 Trade Deadline</h5>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoFour)}>1.2.4 Trade Restrictions</h5>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoFive)}>1.2.5 Veto/Trade Process</h5>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneThree)}>1.3 Waiver Wire</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(two)}>Section 2: Drafting</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoOne)}>2.1 Draft Order</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoTwo)}>2.2 Rookie Drafts</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoThree)}>2.3 Draft Day Trades</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(three)}>Section 3: Scoring System</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeOne)}>3.1 Voting on Scoring System</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(four)}>Section 4: Postseason</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourOne)}>4.1 Playoffs</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourTwo)}>4.2 Playoff Tiebreakers</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(five)}>Section 5: Anti-Tanking Clause</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveOne)}>5.1 Purpose</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveTwo)}>5.2 Roster Management</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveThree)}>5.3 Consequences of Tanking</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveFour)}>5.4 Reporting and Enforcement</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveFive)}>5.5 Appeal Process</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveSix)}>5.6 Amendments</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(six)}>Section 6: Replacing Managers</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixOne)}>6.1 Removing Managers</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixTwo)}>6.2 Replacing Managers</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixThree)}>6.3 Replacement Incentive</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Section 7: League Finances</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenOne)}>7.1 League Dues</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixTwo)}>7.2 Payout</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixThree)}>7.3 Raising Dues</h4>
    
    
    <hr />
    
    <h2 class="sectionHeading" bind:this={one}>Section 1: Roster Breakdown</h2>
    
    <h3 class="subSectionHeading" bind:this={oneOne}>1.1 Positional Breakdown</h3>
    
    <p>27 Total Players</p>
    
    <p class="underscore">Starters</p>
    <ul>
        <li>QB</li>
        <li>RB</li>
        <li>WR</li>
        <li>WR</li>
        <li>TE</li>
        <li>FLEX (RB/WR/TE)</li>
        <li>FLEX (RB/WR/TE)</li>
        <li>FLEX (RB/WR/TE/QB)</li>
        <li>DL</li>
        <li>LB</li>
        <li>DB</li>
    </ul>
    
    <p>14 Bench</p>

    <p>2 IR Slots (Player must be labeled as IR or Out in the Sleeper App)</p>

    <p>2 Taxi Squad*</p>

    <p>*Taxi Squad slots are set with a duration of 1 year. Players with more than 1 year of experience in the NFL must be activated from the Taxi Squad. Taxi Squad slots need to be established by the beginning of the regular season of the NFL, at which point they will be locked. Taxi Squad players can be taken out at any time to be used, although, if a player is taken out, they cannot be re-established as a member of the Taxi Squad, and will be activated as a member of the roster.</p>
    
        <h4 bind:this={oneOneOne}>1.1.1 Position Maximums</h4>
        
        <div class="subBlock">
            <p>No limit at this time.</p>
        </div>


    <h3 class="subSectionHeading" bind:this={oneTwo}>1.2 Trading</h3>
    
    <p>Trading of players and draft picks are allowed. Trades will process immediately and will be reversed if vetoed or under investigation for collusion. Tradable assets include players, draft picks, and FAAB $.</p>
    
    <h4 bind:this={oneTwoOne}>1.2.1 Trade Collusion</h4>
    <div class="subBlock">
        <p>If any owners are suspected of accepting bribes/offering bribes to enhance their/another owners team via trade, trading any assets other than fantasy players, draft picks, FAAB $, or otherwise found guilty of engaging in any form of collusion*, all parties involved in the trade will be susceptible to punishment. The punishments will go as followed:</p>
        
        <ul>
            <li>First Offense – Immediate freeze on all transaction types for the next 18 weeks of regular season and playoff fantasy football games, including trades and waiver wire bids.</li>
            <li>Second Offense – A league meeting of all members not involved in any of the improper trades/activity in question will take place to discuss next steps.</li>
        </ul>

        <p>All trades that are found guilty of collusion, will be reversed/denied. If the trade had affected the outcome of previous games, the results of those games will be revised.  </p>

        <p>*Collusion includes the organizing of veto votes against an acceptable trade.</p>

        <p>The commissioner will err on the side of letting owners manage their teams the way they see fit. Any collusion will need to be clear. The commissioner reserves the right to step in and at the very least assess the thinking of any team involved in a heavily lop-sided trade. </p>
    </div>

    <h4 bind:this={oneTwoTwo}>1.2.2 Lending Players Prohibition</h4>
    <div class="subBlock">
        <p>"Lending a player" typically refers to a situation where one team temporarily loans a player to another team.</p>

        <p>Any teams involved in this behavior will be subject to the aforementioned collusion punishments.</p>
    </div>
    
    <h4 bind:this={oneTwoThree}>1.2.3 Trade Deadline</h4>
    <div class="subBlock">
        <p>No trade deadline at this time - trade as you please.</p>
    </div>
    
    <h4 bind:this={oneTwoFour}>1.2.4 Trade Restrictions</h4>
    <div class="subBlock">
        <p>No trade restrictions at this time.</p>
    </div>
    
    <h4 bind:this={oneTwoFive}>1.2.5 Veto/Trade Process</h4>
    <div class="subBlock">
        <p>A total of 10 (~70%) veto votes are required to veto a trade. Vetoes are only appropriate in instances of collusion or an egregious mismatch of value (i.e. CMC for a backup kicker). Not liking a trade does not warrant a veto.</p>
    </div>
    
    
    
    <h3 bind:this={oneThree}>1.3 Waiver Wire</h3>
    
    <p>FAAB Waiver wire system. Each team will begin the season with $1000. $0 bids are allowed. Bids will process Wednesdays at 12am PST.</p>

    <p>FAAB budgets will reset each season in January.</p>
    
    
    <h2 class="sectionHeading" bind:this={two}>Section 2: Drafting</h2>
    
    <h3 bind:this={twoOne}>2.1 Draft Order</h3>
    <p>Each year, the draft order will follow a reverse linear format, beginning with the first six teams eliminated from the playoffs, determined by the previous year's regular season standings.</p>

    <p>Subsequently, the draft order will proceed with the four teams eliminated in the initial playoff round, sorted by total points in reverse order (comprising first round points plus regular season points).</p>

    <p>Finally, the championship round will determine the draft order for the remaining four slots.</p>

    <h3 bind:this={twoTwo}>2.2 Rookie Drafts</h3>
    <p>Rookie drafts will consist of 4 rounds of drafting. The time allotted for each pick will depend on the given year’s flexibility:</p>
    <ul>
        <li>Single Day: 5 minutes per pick</li>
        <li>Multiple Days: Slow draft - 12 hours per pick with a pause from 11pm - 6am PST</li>
    </ul>
    <p>Any spots not filled during the draft, can be filled immediately afterwards from the waiver wire.</p>
    
    <h3 bind:this={twoThree}>2.3 Draft Day Trades</h3>
    <p>If a trade is being made during the draft, one or both parties can alert the commissioner to pause the draft to allow for extra time to negotiate the trade.</p>
    
    <h2 class="sectionHeading" bind:this={three}>Section 3: Scoring System</h2>

    <h3 bind:this={threeOne}>3.1 Scoring System</h3>
    <p>The league scoring system breakdown is listed on the Sleeper fantasy app (for the most part, it follows typical 0.5 PPR Scoring). The scoring system will never change without a majority league vote - 10/14 votes (~70%). In this case, everyone must vote and must take place in the off season before the All-In Dynasty League rookie draft.</p>
    
    <h2 class="sectionHeading" bind:this={four}>Section 4: Postseason</h2>
    
    <h3 bind:this={fourOne}>4.1 Playoffs</h3>
    <p>At the end of the season, 8 teams will make the playoffs. Two week championship format - each round of playoffs is one week (starting in week 14), while the championship spans two weeks (weeks 16 & 17). Week 18 will not be used.</p>
    
    <h3 bind:this={fourTwo}>4.2 Seeding Tiebreakers</h3>
    <p>Default Seeding - Teams are seeded by regular season standings and stay on their initial side of the bracket through playoffs. Tiebreaker will go to the most points for.</p>

    <h2 class="sectionHeading" bind:this={five}>Section 5: Anti-Tanking Clause</h2>
    
    <h3 bind:this={fiveOne}>5.1 Purpose</h3>
    <p>This clause is established to ensure fair play, competitiveness, and integrity within the All-In Dynasty League. It aims to prevent teams from engaging in practices that undermine the spirit of fair competition, including but not limited to tanking, collusion, or roster abandonment.</p>

    <h3 bind:this={fiveTwo}>5.2 Roster Management</h3>
    <p>All teams are expected to actively manage their rosters throughout the season, including setting lineups with eligible players* and managing injured or bye week players.</p>
    <p>Deliberate actions such as benching star players or starting inactive players with the intention of losing games, improving draft position, or benefiting other teams are prohibited.</p>
    <p>*Eligible players include players on a team (not a Free Agent) who are active (not on IR, Out, or Suspended).</p>

    <h3 bind:this={fiveThree}>5.3 Consequences of Tanking</h3>
    <p>Any team found in violation of this clause may face penalties, including but not limited to loss of draft picks*, expulsion from the league, or forfeiture of league dues.</p>
    <p>The league commissioner reserves the right to investigate and determine whether a team has violated this clause based on evidence, league standings, team behavior, and team performance from Sleeper’s Weekly Report.</p>
    <p>*Loss of draft picks - automatically receiving the last position in the following rookie draft (1.14, 2.14, 3.14, 4.14).</p>

    <h3 bind:this={fiveFour}>5.4 Reporting and Enforcement</h3>
    <p>League members are encouraged to report any suspected instances of tanking or unfair play to the commissioner.</p>
    <p>Following the receipt of a report or identification of potential violations, the commissioner will undertake a comprehensive investigation and implement suitable measures consistent with both league regulations and this clause. A majority vote of 10 out of 14 league members is required for passage.</p>

    <h3 bind:this={fiveFive}>5.5 Appeal Process</h3>
    <p>Teams accused of tanking have the right to appeal the league's decision.</p>
    <p>Appeals must be submitted in writing within 48 hours of the league’s decision and will be reviewed by an Appeals Committee appointed at random (four members).</p>
    <p>Each member of the Appeals Committee will vote on whether to uphold or overturn the League’s decision. A simple majority vote is required to make a decision. If there is a tie, the league commissioner will cast the deciding vote.</p>

    <h3 bind:this={fiveSix}>5.6 Amendments</h3>
    <p>The league reserves the right to amend or modify this anti-tanking clause as necessary to address new challenges or unforeseen circumstances. Any amendments will be communicated to league members in a timely manner.</p>

    <h2 class="sectionHeading" bind:this={six}>Section 6: Replacing Managers</h2>
    
    <h3 bind:this={sixOne}>6.1 Removing Managers</h3>
    <p>Short of continuously failing to set a valid lineup, or confirmed collusion, no manager can be removed against their will. Participation, through the league chat, trade offers, and the waiver wire, is strongly encouraged but generally not grounds for removal.</p>
    
    <h3 bind:this={sixTwo}>6.2 Replacing Managers</h3>
    <p>When a manager needs to be replaced, the commisiooners will try to find a suitable candidate with some connection to at least a portion of the existing managers. Priority will be placed on managers who are eager to take on a dynasty commitment and will be very active within the league.</p>
    
    <h3 bind:this={sixThree}>6.3 Replacement Incentive</h3>
    <p>No replacement incentive in place as of yet</p>

    <h2 class="sectionHeading" bind:this={seven}>Section 7: League Finances</h2>
    
    <h3 bind:this={sevenOne}>7.1 League Dues</h3>
    <p>League dues are set at $50. All managers must be fully paid up before the start of the regular season. In the event that a manager fails to pay before the deadline, a 10% penalty will be added to their payment and will go towards the payouts at the end of the year.</p>
    
    <h3 bind:this={sevenTwo}>7.2 Payout</h3>
    <p>League payout is structured as follows:</p>
    <ol>
        <li>Playoff Standings
            <ul>
                <li>1st place: $350</li>
                <li>2nd place: $100</li>
                <li>3rd place: $50</li>
            <ul>
        </li>
        <li>Weekly Top Scorer* - $10</li>
        <li>"Bent Over" Payout** - $20</li>
        <li>Record Against League Median* - $50</li>
    </ol>
    <p>*End of the regular season
    <p>**Highest points against at the end of the regular season
    <p>In the event that a manager was fined due to late payment, their extra fee will be added to the winner's payout. Similarly, if new managers come into the league and the payout is smaller, the difference will come out of the winner's prize.</p>
    
    <h3 bind:this={sevenThree}>7.3 Raising Dues</h3>
    <p>A majority vote, 10/14 (~70%),  is required in order to raise league dues. In the event that a manager is no longer financially comfortable with the buyin, finding a co-manager to split the cost is recommended.</p>

</div>
