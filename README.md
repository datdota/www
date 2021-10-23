# datdota frontend

This is a React replacement for the current [datdota](https://www.datdota.com) frontend. Once it reaches parity with the existing frontend, the old frontend will be deprecated, and this will become the only maintained one.

## Installation

You'll need [nodejs installed](https://nodejs.org/en/download/). After cloning this repository, navigate to the project directory and run:

`npm start`

This'll run the app in the development mode. If you're running nodejs in Windows via WSL (Windows Subsystem for 
Linux) then you might need to do some extra steps, like: 
 * [using DrvFs to remount your dev filesystem](https://devblogs.microsoft.com/commandline/chmod-chown-wsl-improvements/) with extra configuration
 * adding `export NODE_OPTIONS=--openssl-legacy-provider` to your .bashrc if you're getting hash errors
 * adding `CHOKIDAR_USEPOLLING=true` to your .env
 
You can dev directly against the production backend (`api.datdota.com`). If you've got requests for that upstream API you can originate them on this project's issue tracker however more extensive discussion might be moved to another platform (another Github repo, Discord, Trello, etc). 
 
 ## Pages
 
 There are five broad categories of pages on the site:
 * '**Queries**': any of the generic looking stats pages where you have a single 'query type' (for example `player/performances`) and a variety of query string parameters related to that query (e.g. defining the patch, time, match duration, etc). A few Queries have not yet been migrated to expose an API endpoint - and just have an endpoint for server-side rendered pages, however these will be migrated. 
 * '**List Pages**': display information about a list of entities (a player, a team, a league, etc), with perhaps simple filtering (like picking a date, or a tier) 
 * '**Show Pages**': display information about a single entity (a player, a league, a match), with perhaps simple filter (like, picking a date)
 * '**Autocomplete**' endpoints which power search boxes for a specific entity type (e.g. `https://api.datdota.com/api/autocomplete/teams?q=secret`)
 * **Custom**: everything else  (home page, help, about, error pages)
 
 An extensive list of pages are at the end of the README, grouped by type.
 
 ## Reusable Components
 There are a few components which will be used very frequently, so it makes a lot of sense to streamline and abstract them as much as possible for re-use:
 * **Filters**: the core component of Queries. Depending on the specific query type, different filters are available - for example when looking at item purchases the frame filters are not visible. An example of how these are implemented in the current server-side rendered views is [here](https://gist.github.com/Noxville/b7a4782746621649c6cf0b300673f5f4). Note that the currently selected value(s) are hydrated from request parameters in the current system, so will need to be extracted from the query string instead.
 * **Players** are often rendered with the player's nickname but and also links to `www.datdota.com/players/$playerId`
 * **Heroes** are rendered as just pictures, but with display:hidden text so that filtering works if they're part of a table. 
 * **Leagues** are mostly rendered with the league logo.
 * **Teams** are rendered with logo, and link to the `www.datdota.com/players/$teamId` page
 * **Tables**: able to represent generic tabular data. 
    * Filtering with a search-box
    * Copy the table contents to the clipboard as a CSV
 * **Charts**: unsure on specifics - but certainly will exist at least as line charts, bar charts, etc.
 
 ## Contribution
 
 It's a pretty massive task to migrate all the pages over a new system, so if you're looking to contribute - then join in the discussion on [Discord](https://discord.gg/datdota). Please keep conversation in there (and on Pull Requests on this repository) civil, and treat other contributors with respect. Feel free to ask questions even if you think they're silly, and don't get disheartened if you don't get an immediate response - this is a passion project and people are not always at their computers.
 
 ## List Of Pages
 
 Queries
- [ ] framesAPI: "/api/frames"
- [ ] matchfinderClassicAPI: "/api/matchfinder/classic"
- [ ] playerPerformancesAPI: "/api/players/performances"
- [ ] singlePlayerPerformanceAPI: "/api/players/single-performance"
- [ ] laneCompositionsAPI: "/api/lanes/compositions"
- [ ] playerUniqueHeroesAPI: "/api/players/unique-heroes"
- [ ] playerSquadsAPI: "/api/players/squads"
- [ ] playerHeroCombosAPI: "/api/players/hero-combos"
- [ ] playerTeamCombosAPI: "/api/players/teams"
- [ ] playerRecordsAPI: "/api/players/records"
- [ ] castersAPI: "/api/casters"
- [ ] itemAveragesAPI: "/api/items/averages"
- [ ] itemProgressionAPI: "/api/items/progression"
- [ ] itemNeutralsAPI: "/api/items/neutrals"
- [ ] itemDistributionAPI: "/api/items/distribution"
- [ ] draftsAPI: "/api/drafts"
- [ ] ratingsIndexAPI: "/api/ratings"
- [ ] ratingsRegionsIndexAPI: "/api/ratings/regions"
- [ ] teamPerformancesAPI: "/api/teams/performances"
- [ ] teamUniqueHeroesAPI: "/api/teams/unique-heroes"
- [ ] heroDeathsAPI: "/api/events/hero-deaths"
- [ ] heroKillsAPI: "/api/events/hero-kills"
- [ ] wardsAPI: "/api/events/wards"
- [ ] wardMapAPI: "/api/events/wardmap"
- [ ] runesAPI: "/api/events/runes"
- [ ] courierDeathsAPI: "/api/events/courier-deaths"
- [ ] heroEloAPI: "/api/heroes/elo"
- [ ] heroEloHeadToHeadAPI: "/api/heroes/head-to-head-elo"
- [ ] heroPhaseShiftAPI: "/api/heroes/elo-by-phase"
- [ ] heroPerformanceAPI: "/api/heroes/performances"
- [ ] heroFrequentPlayersPerformanceAPI: "/api/heroes/frequent-players"
- [ ] factionOverviewAPI: "/api/factions/overviews"
- [ ] bestStreaksAPI: "/api/trivia/streaks/best"
- [ ] worstStreaksAPI: "/api/trivia/streaks/worst"
- [ ] bestRunsAPI: "/api/trivia/best-runs"
- [ ] winExpectancyAPI: "/api/win-expectancy/$feature" 
- [ ] matchDurationsAPI: "/api/match-durations" 
- [ ] abilityBuildsAPI: "/api/ability/builds" 
- [ ] buildingDeathsAPI: "/api/building/deaths"
- [ ] abilityBuildsAPI: "/api/ability/builds/matches" 
- [ ] headToHeadComplexAPI: "/api/head-to-head/complex" 

Unmigrated Queries
- [ ] playerRivalries: "/players/rivalries"
- [ ] akkeAward: "/trivia/akke"
- [ ] ctyAward: "/trivia/cty"
- [ ] maelkAward: "/trivia/maelk"
- [ ] ratingsTop: "/ratings/top"
- [ ] crits: "/crits"

List
- [ ] liveGames: "/api/livegames"
- [ ] splitsAPI: "/api/splits"
- [ ] castersAPI: "/api/casters"
- [ ] leaguesAPI: "/api/leagues/"
- [ ] leaguePedigreesAPI: "/api/leagues/pedigrees"
- [ ] matchesAPI: "/api/matches"

Show
- [ ] teamsWithIdAPI: "/api/teams/$id?"
- [ ] teamsRatingWithIdAPI: "/api/teams/$id/ratings"
- [ ] liveGameWithIdAPI: "/api/livegames/$matchId?"
- [ ] playersWithIdAPI: "/api/players/$id?"
- [ ] castersWithIdAPI: "/api/caster/$id?"
- [ ] leagueWithIDAPI: "/api/leagues/$leagueId?"
- [ ] splitWithIdAPI: "/api/splits/$id?"
- [ ] matchWithIdAPI: "/api/matches/$id?"

Autocomplete
- [ ] autocompleteLeagues: "/api/autocomplete/leagues"
- [ ] autocompleteSplits: "/api/autocomplete/splits"
- [ ] autocompleteItems: "/api/autocomplete/items"
- [ ] autocompleteTeams: "/api/autocomplete/teams"
- [ ] autocompletePlayers: "/api/autocomplete/players"

Custom
- [ ] about: "/about"
- [ ] index: "/"
- [ ] "/robots.txt" 
- [ ] "/500"
- [ ] "/404"
- [ ] "/503"