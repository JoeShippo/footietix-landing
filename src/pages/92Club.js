import React from "react";
import LongFormPage from "../components/LongFormPage";

const content = (
    <>
        <p className="text-gray-500 leading-relaxed mb-4">
            Are you a passionate football fan looking for the ultimate bucket list challenge? The 92 Challenge, also known as the Football Ground Challenge, is a rite of passage for football enthusiasts across the UK. It's the dream quest to visit all 92 football league stadiums in England and Wales. Whether you're aiming to complete it in record time or over a lifetime, this journey is steeped in tradition, excitement, and a love for the beautiful game.
        </p>

        <h2 className="text-3xl font-semibold text-gray-700 mb-3">What is the 92 Challenge?</h2>
        <p className="text-gray-500 leading-relaxed">
            The 92 Challenge is the mission of visiting each of the 92 clubs in the top four tiers of
            the English football pyramid:
        </p>
        <ul className="list-disc pl-5 text-gray-500 mb-2">
            <li>Premier League - 20</li>
            <li>Championship - 24</li>
            <li>League One - 24</li>
            <li>League Two - 24</li>
        </ul>
        <p className="  text-gray-500 leading-relaxed mb-4">To join the most exclusive fan group in football: <a href="https://www.ninetytwoclub.org.uk/index.htm" target="_blank" className="hover:underline text-primary">the 92 Club</a> there's only one rule: You must have watched a football match at each current stadium in the top four English leagues.</p>

        <p className="  text-gray-500 leading-relaxed mb-4">While completing the challenge used to involve weeks of planning and scrambling for tickets, the FootieTix app is changing the game. FootieTix connects you directly with last-minute tickets released by clubs at face value, making it simpler to tick off grounds and embrace football culture.</p>

        <h2 className="text-3xl font-semibold text-gray-700 mb-3">The Origin of the Challenge</h2>
        <p className="  text-gray-500 leading-relaxed mb-4">The roots of the 92 Challenge date back to 1974 when a Bristol City fan suggested in the Football League Review that a commemorative tie be awarded to fans who visited all 92 Football League grounds. The idea really caught on in 1977 when two Colchester United fans completed the challenge and garnered local media attention.</p>

        <p className="  text-gray-500 leading-relaxed mb-4">It wasn't until 1978 that the Ninety-Two Club was formally established to recognise fans who had achieved this remarkable feat. With 39 founder members, it became the ultimate badge of honour for the most loyal supporters. As the years have gone by and teams have either moved into new stadiums or entered the Football League, the challenge has adapted, which has kept it exciting to date.</p>

        <p className="  text-gray-500 leading-relaxed mb-4">Today, fans can combine their passion for the challenge with modern tools like FootieTix, making access to games easier and more affordable. No more relying on memberships or resellers—FootieTix brings you closer to your goal.</p>

        <h2 className="text-3xl font-semibold text-gray-700 mb-3">Rules of the 92 Challenge</h2>
        <ol className="list-decimal pl-5 text-gray-500 mb-2">
            <li>
                <strong>Attend an Association Football (Soccer) Match:</strong>
                <p className="  text-gray-500 leading-relaxed mb-4">Watching any other sport at the ground does not count.</p>
            </li>
            <li>
                <strong>Be Inside the Stadium During the Match:</strong>
                <p className="  text-gray-500 leading-relaxed mb-4">Tours, driving past, or photographing from the outside do not count.</p>
            </li>
            <li>
                <strong>Visit the Club's Current Ground:</strong>
                <p className="  text-gray-500 leading-relaxed mb-4">A previous visit to an old stadium doesn't qualify. For example: White Hart Lane no longer counts; you have to visit the Tottenham Hotspur Stadium.</p>
            </li>
            <li>
                <strong>Events Outside Football Do Not Count:</strong>
                <p className="  text-gray-500 leading-relaxed mb-4">Weddings, concerts, or other events that take place at the stadium do not count.</p>
            </li>
            <li>
                <strong>Any Football Match Counts:</strong>
                <p className="  text-gray-500 leading-relaxed mb-4">Pre-season friendlies, cup matches, international games, and league matches count.</p>
            </li>
            <li>
                <strong>You Don't Need to Watch Your Own Team:</strong>
                <p className="  text-gray-500 leading-relaxed mb-4">You can go to watch any two teams.</p>
            </li>
            <li>
                <strong>Any Seat or Standing Counts:</strong>
                <p className="  text-gray-500 leading-relaxed mb-4">You don't have to sit in the away end - any part of the stadium will do.</p>
            </li>
            <li>
                <strong>0-0 Draws Count:</strong>
                <p className="  text-gray-500 leading-relaxed mb-4">You don't need goals for your visit to count.</p>
            </li>
            <li>
                <strong>Non-League Visits Count if Team Joins Football League Later:</strong>
                <p className="  text-gray-500 leading-relaxed mb-4">If you went to watch Salford City before they joined the league, then that counts.</p>
            </li>
            <li>
                <strong>No Timescale:</strong>
                <p className="  text-gray-500 leading-relaxed mb-4">You can do it in a season, over a decade, or over your lifetime - it's entirely up to you.</p>
            </li>
        </ol>

        <h2 className="text-3xl font-semibold text-gray-700 mb-3">How FootieTix Can Help You Complete the 92 Challenge</h2>
        <h3 className="text-xl font-medium text-gray-600 mb-2">Affordable, Last-Minute Tickets:</h3>
        <p className="  text-gray-500 leading-relaxed mb-4">FootieTix teams up with clubs to offer face value tickets a few days before kickoff. No memberships or inflated prices, just simple, fair access to the games you need.</p>

        <h3 className="text-xl font-medium text-gray-600 mb-2">Easy Ground-Hopping Planning:</h3>
        <p className="  text-gray-500 leading-relaxed mb-4">Browse upcoming fixtures with FootieTix and find the ones that work for your 92 Challenge. Plan in visits to grounds that are close to each other and double up on games to get the most out of your journey.</p>

        <h3 className="text-xl font-medium text-gray-600 mb-2">Gamified Progress Tracking:</h3>
        <p className="  text-gray-500 leading-relaxed mb-4">FootieTix has built-in progress tracking, where you can tick off every stadium you visit and unlock achievements for visiting your first 10 grounds, reaching 50 stadiums, and completing all 92.</p>

        <h3 className="text-xl font-medium text-gray-600 mb-2">Learn About New Clubs and Locality:</h3>
        <p className="  text-gray-500 leading-relaxed mb-4">It is not about the stadiums-the challenge is about football throughout the UK. With FootieTix, one can explore clubs they might not have considered, with their special atmosphere and community.</p>

        <p className="text-gray-500 leading-relaxed mb-4">Learn more about FootieTix <a href="https://www.footietix.co.uk" target="_blank" className="hover:underline text-primary">here</a>.</p>

        <h2 className="text-3xl font-semibold text-gray-700 mb-3">Why Take on the 92 Challenge?</h2>
        <ol className="list-decimal pl-5 text-gray-500 mb-2">
            <li>
                <strong>Celebrate Football Culture:</strong>
                <p className="  text-gray-500 leading-relaxed mb-4">
                    From world-famous grounds like Anfield to the smallest, old-school ground of Kenilworth Road, celebrate the variety.
                </p>
            </li>
            <li>
                <strong>Explore the UK:</strong>
                <p className="  text-gray-500 leading-relaxed mb-4">
                    Travel across England and Wales, learning about all the different communities, their pubs, and their traditions.
                </p>
            </li>
            <li>
                <strong>Meet Like-Minded Fans:</strong>
                <p className="  text-gray-500 leading-relaxed mb-4">
                    Enter a community of dedicated football lovers and ground-hoppers who are just as serious as you.
                </p>
            </li>
            <li>
                <strong>A Unique Personal Achievement:</strong>
                <p className="  text-gray-500 leading-relaxed mb-4">
                    Completion is a prestigious milestone recognised by the Ninety-Two Club, which is something every football fan would want to achieve.
                </p>
            </li>
        </ol>
        <h2 className="text-3xl font-semibold text-gray-700 mb-3">Tips to Complete the 92 Challenge</h2>
        <ul className="list-disc pl-5 text-gray-500 mb-2 ">
        <li>
            <strong>Plan in Clusters:</strong>
            <p className="  text-gray-500 leading-relaxed">Group nearby stadiums together to maximise trips. For example:</p>
            <ul className="list-disc pl-5 text-gray-500 mb-2 ">
                <li><strong>North West:</strong> Manchester United, Liverpool, Everton, and Burnley.</li>
                <li><strong>London:</strong> Arsenal, Chelsea, Tottenham, Fulham, and smaller league clubs.</li>
            </ul>
        </li>
        <li>
            <strong>Use the Fixture List:</strong>
            <p className="  text-gray-500 leading-relaxed mb-4">Plan your visits around midweek fixtures and double-game weekends.</p>
        </li>
        <li>
            <strong>Budget Wisely:</strong>
            <p className="  text-gray-500 leading-relaxed mb-4">Seek out ticket bargains, use public transport, and stay in affordable accommodations.</p>
        </li>
        <li>
            <strong>Track Your Progress:</strong>
            <p className="  text-gray-500 leading-relaxed mb-4">Keep a log or map, and collect photos or ticket stubs as proof of your visits.</p>
        </li>
    </ul>

    <h2 className="text-3xl font-semibold text-gray-700 mb-3">Must-Visit Grounds</h2>
    <p className="  text-gray-500 leading-relaxed mb-4">Every ground has its charm, but some are iconic must-visits:</p>
    <ul className="list-disc pl-5 text-gray-500 mb-2 ">
        <li><strong><a href="https://www.manutd.com/en/visit-old-trafford" target="_blank" className="hover:underline text-primary">Old Trafford (Manchester United)</a>:</strong> Known as the “Theatre of Dreams.”</li>
        <li><strong><a href="https://www.liverpoolfc.com/info/anfield" target="_blank" className="hover:underline text-primary">Anfield (Liverpool)</a>:</strong> Feel the chills of 'You'll Never Walk Alone.'</li>
        <li><strong><a href="https://en.wikipedia.org/wiki/Fratton_Park" target="_blank" className="hover:underline text-primary">Fratton Park (Portsmouth)</a>:</strong> A nostalgic throwback to old-school football.</li>
        <li><strong><a href="https://en.wikipedia.org/wiki/Stadium_of_Light" target="_blank" className="hover:underline text-primary">Stadium of Light (Sunderland)</a>:</strong> A ground steeped in history.</li>
        <li><strong><a href="https://en.wikipedia.org/wiki/Kenilworth_Road" target="_blank" className="hover:underline text-primary">Kenilworth Road (Luton Town)</a>:</strong> A quirky and unique matchday experience.</li>
    </ul>
    <p className="  text-gray-500 leading-relaxed mb-4">Don't be put off by smaller clubs—grounds in League One and League Two often provide the purest, most authentic football experiences.</p>

    <h2 className="text-3xl font-semibold text-gray-700 mb-3">Start Your 92 Challenge Today</h2>
    <p className="  text-gray-500 leading-relaxed mb-4">
        The 92 Challenge celebrates the unifying spirit of football—a journey which can be taken by anyone who's a fan. 
        With the <strong>FootieTix app</strong>, you can do just that, with everything you need to visit all 92 grounds without breaking the bank. 
        Track your progress, secure fair-priced tickets, and make unforgettable memories along the way.
    </p>
    <p className="  text-gray-500 leading-relaxed mb-4">
        Time to lace up your boots, plan your journey, and join the Ninety-Two Club!
    </p>
    </>
);

const Challenge92 = () => {
    return (
        <LongFormPage
            title="The 92 Challenge: A Football Fan's Ultimate Ground-Hopping Adventure"
            date="December 9, 2024"
            description="Embark on the 92 Challenge and visit every football stadium in the English Football League. A must for passionate fans!"
            content={content}
        />
    );
};

export default Challenge92;