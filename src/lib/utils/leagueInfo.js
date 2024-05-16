/*   STEP 1   */
export const leagueID = "1062835930102370304"; // your league ID
export const leagueName = "All-In Dynasty League"; // your league name
export const dues = 50; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
<p>Welcome, poker-faced paragons of pigskin prognostication, to the most thrilling high-stakes showdown this side of the Mississippi—the All-In Dynasty League! Prepare to shuffle up and deal with the gridiron gods as we ante up for a season of strategic bluffs, bold bets, and wild card plays that would make Lady Luck herself blush.</p>
<p>In this digital saloon of fantasy sports, every lineup you craft is a hand you play, every touchdown scored a royal flush in the making. But beware the river card, my friends, for in this game of inches, victory can slip through your fingers faster than a greased pig at a county fair.</p>
<p>So, don your virtual poker visors, polish your best poker face, and may the flop be ever in your favor as you embark on this high-stakes journey to fantasy football glory. Welcome to the league where touchdowns are the ultimate chip stack, rivalries are as fierce as a final table showdown, and the only thing higher than the stakes is the level of trash talk. Let's shuffle up and kick off!</p>
<p>- The Commish</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "managerID": "584494358066139136",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Rik Mersai",
      "location": "San Diego, CA", // (optional)
      "bio": "Age: 31 <br /> Started Fantasy: 2012 <br /> Occupation: The Commissioner <br /> Senior Yearbook: Most likely to be the only one laughing at his own joke. <br /> Guilty Pleasure: Going to orgies just because they have a good caterer. <br /> Personal Mantra: She can take my manhood but she can't take my hairline. <br /> Secret Talent: Being pigeon footed and walking in a straight line.",
      "photo": "/managers/rik.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2012, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "lv", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Cody", // Can be anything (usually your rival's name)
        link: 4, // manager array number within this array, or null to link back to all managers page
        image: "/managers/cody.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6794, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Pain heals, chicks dig scars, glory lasts forever.",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      "teamName": "/teamnames/diegodictators.png", // Team Name 
      "franchiseBanner": "/teambanner/bannerdictators.png", // Franchise Banner
      "jerseyblack1": "/jerseys/dictatorsblack1.png",
      "jerseyblack2": "/jerseys/dictatorsblack2.png",
      "jerseyblack3": "/jerseys/dictatorsblack3.png",
      "jerseywhite1": "/jerseys/dictatorswhite1.png",
      "jerseywhite2": "/jerseys/dictatorswhite2.png",
      "jerseywhite3": "/jerseys/dictatorswhite3.png",
      "jerseyalt1": "/jerseys/dictatorsalt1.png",
      "jerseyalt2": "/jerseys/dictatorsalt2.png",
      "jerseyalt3": "/jerseys/dictatorsalt3.png",
      "stadium": "/stadiums/dictatorsstadium.png", // Team Stadium
      "mascot": "/mascots/supremeleader.png", // Team Mascot
      "bobblehead": "/bobbleheads/dictatorsbobblehead.png", //Team Bobblehead
      "backgroundColor": "#6c7034"
    },
    {
      "managerID": "587811392686424064",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Joe Ventura",
      "location": "Arroyo Grande, CA", // (optional)
      "bio": "Age: 31 <br /> Started Fantasy: 2005 <br /> Occupation: Assistant to the Regional Manager of Dunder Mifflin <br /> Pet Peeve: Losing <br /> Superpower: Invisibility (when turned sideways) <br /> Socializing Preference: E, none of the above",
      "photo": "/managers/joe.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2005, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "lv", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Cody", // Can be anything (usually your rival's name)
        link: 4, // manager array number within this array, or null to link back to all managers page
        image: "/managers/cody.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Try and have a balanced teeam between young and old. Go after the guys you like because it makes it more fun watching them succeed.",
      "tradingScale": 8, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      "teamName": "/teamnames/name.png",
      "franchiseBanner": "/teambanner/bannername.png", // Franchise Banner
      "jerseywhite": "/jerseys/namewhite.png", // White Team Jerseys
      "jerseyblack": "/jerseys/nameblack.png", // Black Team Jerseys
      "stadium": "/stadiums/namestadium.png", // Team Stadium
      "mascot": "/mascots/name.png", // Team Mascot
      "bobblehead": "/bobbleheads/namebobblehead.png", //Team Bobblehead
    },
    {
      "managerID": "588193100476747776",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Drew Summerfield",
      "location": "Arroyo Grande, CA", // (optional)
      "bio": "Age: 30 <br /> Started Fantasty: 2005 <br /> Occupation: Wood Splitter / Assistant Freshman Football Defensive Coordinator <br /> Morning Routine: Wake up at 4am, plan on how I can shit on everyone's day before they wake up. <br /> Weather Preference: Sunny with a chance of raining on your parade. <br /> Personal Mantra: If you're not first, you're me. <br /> Future Aspirations: Having all the QBs in the league.",
      "photo": "/managers/drew.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2005, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "lar", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "CC", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/chrisc.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 2227, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Just my two cents, you already tried this with the Discord, what makes you think this will garner more traction?",
      "tradingScale": 5, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
              {
      "managerID": "588422790617538560",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Morgan Wack",
      "location": "Clemson, SC", // (optional)
      "bio": "Age: 31 <br /> Started Fantasy: 2005 <br /> Occupation: Worldclass Elementary School Teacher <br /> Education: Ph.D in nothing important <br /> Fashion Style: Whatever makes me look smart. <br /> Unlikely Dream: Chargers to win the Super Bowl.",
      "photo": "/managers/morgan.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2005, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "lac", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Drew", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "/managers/drew.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6797, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "My fantasy goal/philosophy is to maximize my enjoyment season-on-season. To me, this means building a team that can compete every year without ever having to tank/go all-in.", // (optional)
      "tradingScale": 9, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      "teamName": "/teamnames/gautenghyenas.png", // Team Name 
      "franchiseBanner": "/teambanner/bannerhyenas.png", // Franchise Banner
      "jerseyblack1": "/jerseys/hyenasblack1.png",
      "jerseyblack2": "/jerseys/hyenasblack2.png",
      "jerseyblack3": "/jerseys/hyenasblack3.png",
      "jerseywhite1": "/jerseys/hyenaswhite1.png",
      "jerseywhite2": "/jerseys/hyenaswhite2.png",
      "jerseywhite3": "/jerseys/hyenaswhite3.png",
      "jerseyalt1": "/jerseys/hyenasalt1.png",
      "jerseyalt2": "/jerseys/hyenasalt2.png",
      "jerseyalt3": "/jerseys/hyenasalt3.png",
      "stadium": "/stadiums/hyenasstadium.png", // Team Stadium
      "mascot": "/mascots/melvin.png", // Team Mascot
      "bobblehead": "/bobbleheads/hyenasbobblehead.png", //Team Bobblehead
      "backgroundColor": "#362B21"
    },
        {
      "managerID": "588754117711671296",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Cody Portwood",
      "location": "Arroyo Grande, CA", // (optional)
      "bio": "Age: 31 <br /> Started Fantasy: 2008 <br /> Occupation: Realtor / Captain of The Flaming Flying Squirrels <br /> Secret Talent: Selling homes to cougars. <br /> Senior Yearbook: Most likely to have an unexpected cougar encounter. <br /> Senior Yearbook Runner-up: Most likely to bring back the word \"retard\" <br /> Guilty Pleasure: Dancing to Cardi B.",
      "photo": "/managers/cody.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2008, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "no", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "I love Jack", // Can be anything (usually your rival's name)
        link: 13, // manager array number within this array, or null to link back to all managers page
        image: "/managers/jack.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 11675, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "\"I'm a nice guy that enjoys a good rape from time to time.\" - Jack ... yikes", // (optional)
      "tradingScale": 10, // 1 - 10 (optional)
      "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
        {
      "managerID": "733463029844455424",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Dominic Delagarza III",
      "location": "Arroyo Grande, CA", // (optional)
      "bio": "Age: 30 <br /> Started Fantasy: 2017 <br /> Occupation: Selling Fake Shoes / Wardrobe Color Matching Professional <br /> Senior Yearbook: Most likely to have to pay child support to a woman he's never slept with. <br /> Fashion Choice: As long as my hat matches my shoes. <br /> Guilty Pleasure: Buying hats that match my shoes. <br /> Pet Peeve: If the carpet doesn't match the drapes.",
      "photo": "/managers/dom.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "sf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Jack", // Can be anything (usually your rival's name)
        link: 13, // manager array number within this array, or null to link back to all managers page
        image: "/managers/jack.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 8183, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Philosophy is obviously you're trying to win now but the future has to be on your mind. The long term has to be your goal.", // (optional)
      "tradingScale": 7, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      "teamName": "/teamnames/golddiggers.png",
      "franchiseBanner": "/teambanner/bannergolddiggers.png", // Franchise Banner
      "jerseyblack1": "/jerseys/golddiggersblack1.png",
      "jerseyblack2": "/jerseys/golddiggersblack2.png",
      "jerseyblack3": "/jerseys/golddiggersblack3.png",
      "jerseywhite1": "/jerseys/golddiggerswhite1.png",
      "jerseywhite2": "/jerseys/golddiggerswhite2.png",
      "jerseywhite3": "/jerseys/golddiggerswhite3.png",
      "jerseyalt1": "/jerseys/golddiggersalt1.png",
      "jerseyalt2": "/jerseys/golddiggersalt2.png",
      "jerseyalt3": "/jerseys/golddiggersalt3.png",
      "stadium": "/stadiums/golddiggersstadium.png", // Team Stadium
      "mascot": "/mascots/Nugg.png", // Team Mascot
      "bobblehead": "/bobbleheads/namebobblehead.png", //Team Bobblehead
      "backgroundColor": "#aa0000"
    },
        {
      "managerID": "965780597627011072",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Christian Crichton",
      "location": "Camp Pendleton", // (optional)
      "bio": "Age: 31 <br /> Started Fantasy: 2008 <br /> Occupation: Firefighter / Prime Minister of Samoa <br /> Senior Yearbook: Most likely to have a theme song when they walk through the door. <br /> Favorite Food: Spam musubis <br /> Favorite Phrase: \"Let's go uce!\"",
      "photo": "/managers/chrisc.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2008, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "den", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Drew", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "/managers/drew.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 11563, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Build young. Superstar players within their first 2-3 years. Sit on the franchise. Hand it to the grandkids with 18 titles. Hit on young rookies and young superstars. Desire to trade - 2-3, unless I get a bone-a-fide superyat proven asset.", // (optional)
      "tradingScale": 3, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      "teamName": "/teamnames/cardiffcruisers.png",
      "franchiseBanner": "/teambanner/bannercruisers.png", // Franchise Banner
      "jerseyblack1": "/jerseys/cruisersblack1.png",
      "jerseyblack2": "/jerseys/cruisersblack2.png",
      "jerseyblack3": "/jerseys/cruisersblack3.png",
      "jerseywhite1": "/jerseys/cruiserswhite1.png",
      "jerseywhite2": "/jerseys/cruiserswhite2.png",
      "jerseywhite3": "/jerseys/cruiserswhite3.png",
      "jerseyalt1": "/jerseys/cruisersalt1.png",
      "jerseyalt2": "/jerseys/cruisersalt2.png",
      "jerseyalt3": "/jerseys/cruisersalt3.png",
      "stadium": "/stadiums/cruisersstadium.png", // Team Stadium
      "mascot": "/mascots/kook.png", // Team Mascot
      "bobblehead": "/bobbleheads/namebobblehead.png", //Team Bobblehead
      "backgroundColor": "#FCD116"
    },
        {
      "managerID": "965821292446375936",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Cid Hernandez",
      "location": "San Diego, CA", // (optional)
      "bio": "Age: 19 <br /> Started Fantasy: 2021 <br /> Occupation: Signal Processing Engineer / Karaoke Star <br /> Senior Yearbook: Most likely to get drunk mixing Gatorade and club soda. <br /> Quirk: Saying \"caramel\" instead of \"caramel\". <br /> Most Meaningful Relationship: My 33-inch black putter.",
      "photo": "/managers/cid.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2021, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "lv", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "The Commish", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rik.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 3173, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "I have no idea what I'm doing.", // (optional)
      "tradingScale": 7, // 1 - 10 (optional)
      "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
        {
      "managerID": "966109800276807680",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Hunter Norton",
      "location": "San Diego, CA", // (optional)
      "bio": "Age: 30 <br /> Started Fantasy: 2014 <br /> Occupation: Assistant U.S. Attorney / Private Assassin <br /> Senior Yearbook: Most likely to be a stay at home dad. <br /> Pet Peeve: My wife is smarter than me. <br /> Morning Routine: Telling myself in the mirror that I'm smarter than my wife.",
      "photo": "/managers/hunter.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "lar", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "That Chris dude", // Can be anything (usually your rival's name)
        link: 9, // manager array number within this array, or null to link back to all managers page
        image: "/managers/chriss.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": null, // (optional)
      "tradingScale": 6, // 1 - 10 (optional)
      "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
        {
      "managerID": "966140145680392192",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Chris Strong",
      "location": "San Diego, CA", // (optional)
      "bio": "Age: 26 <br /> Occupation: Recruiter / Novelist",
      "photo": "/managers/chriss.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 1998, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "bal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Alec", // Can be anything (usually your rival's name)
        link: 10, // manager array number within this array, or null to link back to all managers page
        image: "/managers/alec.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1264, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Eleven players, one heart beat.", // (optional)
      "tradingScale": 10, // 1 - 10 (optional)
      "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      "teamName": "/teamnames/sincitysavages.png",
      "franchiseBanner": "/teambanner/bannersavages.png", // Franchise Banner
      "jerseyblack1": "/jerseys/savagesblack1.png",
      "jerseyblack2": "/jerseys/savagesblack2.png",
      "jerseyblack3": "/jerseys/savagesblack3.png",
      "jerseywhite1": "/jerseys/savageswhite1.png",
      "jerseywhite2": "/jerseys/savageswhite2.png",
      "jerseywhite3": "/jerseys/savageswhite3.png",
      "jerseyalt1": "/jerseys/savagesalt1.png",
      "jerseyalt2": "/jerseys/savagesalt2.png",
      "jerseyalt3": "/jerseys/savagesalt3.png",
      "stadium": "/stadiums/savagesstadium.png", // Team Stadium
      "mascot": "/mascots/kilgore.png", // Team Mascot
      "bobblehead": "/bobbleheads/namebobblehead.png", //Team Bobblehead
      "backgroundColor": "#000000"
    },
        {
      "managerID": "966200372656205824",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Alec Dachs",
      "location": "San Diego, CA", // (optional)
      "bio": "Age: 26 <br /> Occupation: Mechanical Engineer / WSOP Wannabe",
      "photo": "/managers/alec.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2021, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "det", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Joshua", // Can be anything (usually your rival's name)
        link: 12, // manager array number within this array, or null to link back to all managers page
        image: "/managers/josue.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6011, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "My desire to trade is 1000.", // (optional)
      "tradingScale": 10, // 1 - 10 (optional)
      "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
        {
      "managerID": "966209393182212096",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Aaron Ley",
      "location": "Fresno, CA", // (optional)
      "bio": "Age: 31 <br /> Started Fantasy: 2014 <br /> Occupation: Construction Manager / Cat Smasher <br /> Senior Yearbook: Most likely to accidentally send a dick pic to his mother. <br /> Most Embarrassing Moment: Watching my ex-girlfriend butcher the National Anthem at the county fair in front of thousands of people. <br /> Favorite Movie: 2 Girls, 1 Cup <br /> Personal Mantra: None in the pink, all in the stink.",
      "photo": "/managers/aaron.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "no", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Cody", // Can be anything (usually your rival's name)
        link: 4, // manager array number within this array, or null to link back to all managers page
        image: "/managers/cody.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 461, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "I play for keeps.", // (optional)
      "tradingScale": 6, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
        {
      "managerID": "966251318107070464",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Josue Camarena",
      "location": "Riverside, CA", // (optional)
      "bio": "Age: 26 <br /> Started Fantasy: 2018 <br /> Occupation: Manufacturing Engineer / Yugioh Enthusiast <br /> Senior Yearbook: Most likely to have the first car to ever reach 750k miles. <br /> Favorite Store: Costco <br /> Favorite Brand: Kirkland <br /> Annoying Trait: Raising before the flop. <br /> Unlikely Dream: Bryce Young to be inducted into the Hall of Fame.",
      "photo": "/managers/josue.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "car", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Alec", // Can be anything (usually your rival's name)
        link: 10, // manager array number within this array, or null to link back to all managers page
        image: "/managers/alec.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1689, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "My dynasty philosophy is the same as my approach to poker. Be patient, and if you believe in the potential, go all-in.", // (optional)
      "tradingScale": 7, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
        {
      "managerID": "966573099187482624",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Jack Wada",
      "location": "San Diego, CA", // (optional)
      "bio": "Age: 29 <br /> Started Fantasy: 2017 <br /> Occupation: Environmental Scientist / Average Beer Die Player <br /> Senior Yearbook: Most likely to talk about how Freaky Friday was filmed at his high school. <br /> Quirk: Finishes a conversation with the words \"in any case\". <br /> Hobbies: Pretending to be Japanese.",
      "photo": "/managers/jack.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "lar", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "I hate Cody", // Can be anything (usually your rival's name)
        link: 4, // manager array number within this array, or null to link back to all managers page
        image: "/managers/cody.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6794, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "I'm a nice guy who enjoys a good trade rape from time to time.", // (optional)
      "tradingScale": 4, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      "teamName": "/teamnames/bayparkhoopties.png", // Team Logo w/ name
      "franchiseBanner": "/teambanner/bannerhoopties.png", // Franchise Banner
      "jerseyblack1": "/jerseys/hooptiesblack1.png",
      "jerseyblack2": "/jerseys/hooptiesblack2.png",
      "jerseyblack3": "/jerseys/hooptiesblack3.png",
      "jerseywhite1": "/jerseys/hooptieswhite1.png",
      "jerseywhite2": "/jerseys/hooptieswhite2.png",
      "jerseywhite3": "/jerseys/hooptieswhite3.png",
      "jerseyalt1": "/jerseys/hooptiesalt1.png",
      "jerseyalt2": "/jerseys/hooptiesalt2.png",
      "jerseyalt3": "/jerseys/hooptiesalt3.png",
      "stadium": "/stadiums/hooptiesstadium.png", // Team Stadium
      "mascot": "/mascots/oddy.png", // Team Mascot
      "bobblehead": "/bobbleheads/namebobblehead.png", //Team Bobblehead
      "backgroundColor": "#4F2683"
    },

  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
