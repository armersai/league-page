<script>
    import Button, { Group, Label } from '@smui/button';
	import LinearProgress from '@smui/linear-progress';
    import {loadPlayers, getLeagueTransactions} from '$lib/utils/helper';
	import Roster from '../Rosters/Roster.svelte';
	import TransactionsPage from '../Transactions/TransactionsPage.svelte';
    import { goto } from '$app/navigation';
    import ManagerFantasyInfo from './ManagerFantasyInfo.svelte';
    import ManagerAwards from './ManagerAwards.svelte';
    import { onMount } from 'svelte';
	import { getDatesActive, getRosterIDFromManagerID, getTeamNameFromTeamManagers } from '$lib/utils/helperFunctions/universalFunctions';

    export let manager, managers, rostersData, leagueTeamManagers, rosterPositions, transactionsData, awards, records;

    let transactions = transactionsData.transactions;

    $: viewManager = managers[manager];

    $: datesActive = getDatesActive(leagueTeamManagers, viewManager.managerID);

    const  startersAndReserve = rostersData.startersAndReserve;
    let rosters = rostersData.rosters;

    $: ({rosterID, year} = viewManager.managerID ? getRosterIDFromManagerID(leagueTeamManagers, viewManager.managerID) : {rosterID: viewManager.roster, year: null});

    $: teamTransactions = transactions.filter(t => t.rosters.includes(parseInt(rosterID)));

    $: roster = rosters[rosterID];

    $: coOwners = year && rosterID ? leagueTeamManagers.teamManagersMap[year][rosterID].managers.length > 1 : roster.co_owners;

    $: commissioner = viewManager.managerID ? leagueTeamManagers.users[viewManager.managerID].is_owner : false;

    let players, playersInfo;
    let loading = true;
    let images = [];

    const refreshTransactions = async () => {
        const newTransactions = await getLeagueTransactions(false, true);
        transactions = newTransactions.transactions;
    }

    onMount(async () => {
        if(transactionsData.stale) {
            refreshTransactions();
        }
        const playerData = await loadPlayers(null);
        playersInfo = playerData;
        players = playerData.players;
        loading = false;

        if(playerData.stale) {
            const newPlayerData = await loadPlayers(null, true);
            playersInfo = newPlayerData;
            players = newPlayerData.players;
        }
    })

    const changeManager = (newManager, noscroll = false) => {
        if(!newManager) {
            goto(`/managers`);
        }
        manager = newManager;
        goto(`/manager?manager=${newManager}`, {noscroll});
    }

    onMount(() => {
    images = document.querySelectorAll('.jerseyContainer img');
    let maxHeight = 0;
    images.forEach(image => {
        if (image.offsetHeight > maxHeight) {
            maxHeight = image.offsetHeight;
        }
    });
    document.querySelector('.jerseyContainer').style.height = maxHeight + 'px'; // Set container height to tallest image height

    let index = 0;
    setInterval(() => {
        images.forEach(image => image.classList.remove('active'));
        images[index].classList.add('active');
        index = (index + 1) % images.length;
    }, 2500); // Change the interval (in milliseconds) to adjust the rotation speed
});
</script>

<style>
    .managerContainer {
        width: 100%;
        margin: 2em 0 5em;
    }

    .managerConstrained {
        width: 97%;
        max-width: 1000px;
        margin: 0 auto 4em;
    }

    .managerPhoto {
        display: block;
        border-radius: 100%;
        width: 70%;
        max-width: 200px;
        height: auto;
        margin: 5em auto 1em;
        box-shadow: 0 0 8px 4px #aaa;
    }

    h2 {
        text-align: center;
        font-size: 2.8em;
        margin: 1em 0 0em;
        line-height: 1em;
        font-family: 'RubensShadow';
    }

    h3 {
        text-align: center;
        font-size: 1.5em;
        margin: 1.5em 0 0.5em;
        font-weight: 200;
        font-family: 'RubensShadow';
    }

    .basicInfo {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 24px;
        margin: 2em 0;
    }

    .basicInfo span {
        color: #888;
        font-size: 0.9em;
    }

    .infoChild {
        font-style: italic;
    }

    .infoContact {
        height: 20px;
        vertical-align: middle;
        padding-left: 1em;
    }

    .infoTeam {
        height: 48px;
    }

    .bio {
        margin: 2em 1.5em 2em;
    }

    .philosophy {
        margin: 2em 1.5em 2em;
        text-indent: 4em;
    }

    .loading {
        display: block;
        width: 85%;
        max-width: 500px;
        margin: 80px auto;
    }

    .teamSub {
        font-size: 0.4em;
        line-height: 1em;
        color: #666;
    }

    .managerNav {
        margin: 4em 0 2em;
        text-align: center;
    }

    .upper {
        margin-top: 0;
    }

    .commissionerBadge {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 25px;
        width: 25px;
        font-weight: 600;
        border-radius: 15px;
        background-color: var(--blueTwo);
        border: 1px solid var(--blueOne);
    }

    .franchiseBanner {
        display: flex;
        justify-content: center;
        width: 100%;
        box-shadow: 0 10px 30px #000000;
    }

    .imageContainer {
        display: flex;
        justify-content: space-evenly; /*adjust as needed */
    }

    .jerseyImage {
        width: 49%; /* Adjust width as needed */
        height: auto; /* Maintain aspect ratio */
    }

    .jerseyContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto; /* Remove fixed height */
        max-width: 200px; /* Set a maximum width */
        position: relative;
        margin: 1em auto 0em;
        min-height: 450px;
        padding: 10px;
    }

    .jerseyContainer img {
        width: 75%;
        height: auto;
        opacity: 0;
        position: absolute;
        transition: opacity 0.5s ease-in-out;
    }

    .jerseyContainer img.active {
        opacity: 1;
    }

    .stadiumImage {
        width: 100%; /*adjust width as needed */
        height: auto; /* maintain aspect ratio */
        box-shadow: 0 0 30px 5px #000000;
        border-radius: 10%;
    }

    .image-blurred-edge {
    width: 50%;
    height: auto;
    /* you need to match the shadow color to your background or image border for the desired effect*/
    box-shadow: 0 0 10px 1px white inset;
    border-radius:125px;
    }

    .mascotImage {
        display: block;
        width: 50%;
        height: auto;
    }

    .bobbleheadImage {
        display: block;
        width: 50%;
        height: auto;
    }

    .teamName {
        display: block;
        width: 70%;
        max-width: 400px;
        height: auto;
        margin: 2.5em auto 1em;
    }

    .commissionerBadge span {
        font-style: normal;
        color: #fff;
    }

    /* media queries */

    @media (max-width: 505px) {
        :global(.selectionButtons span) {
            font-size: 0.8em;
        }
    }

    @media (max-width: 435px) {
        :global(.selectionButtons span) {
            line-height: 1.2em;
            font-size: 0.8em;
        }
    }

	@media (max-width: 450px) {

        .basicInfo {
            height: 20px;
        }

        .basicInfo span {
            font-size: 0.75em;
        }

        .infoTeam {
            height: 30px;
        }
	}

    @media (max-width: 370px) {

        .basicInfo {
            height: 18px;
        }

        .basicInfo span {
            font-size: 0.6em;
        }

        .infoTeam {
            height: 24px;
        }
    }

    /* keyframes queries */

    @keyframes rotateJerseys {
        0% { opacity: 0; }
        25% { opacity: 1; }
        50% { opacity: 0; }
        75% { opacity: 0; }
        100% { opacity: 0; }
    }

    /* font query */

    @font-face {
        font-family: 'RubensShadow';
        src: url(static/fonts/RubensShadow.otf)

    }
</style>

<div class="managerContainer">
    <div class="managerConstrained">
        <img class="managerPhoto" src="{viewManager.photo}" alt="manager"/>
        <h2>
            {viewManager.name}
            <div class="teamSub">{coOwners ? 'Co-' : ''}Manager of the:</div>
        </h2>

        {#if viewManager.teamName}
            <img src="{viewManager.teamName}" alt="Team Name" class="teamName"/>
        {/if}
        
        <div class="basicInfo">
            <span class="infoChild">{viewManager.location || 'Undisclosed Location'}</span>
            {#if viewManager.managerID && datesActive.start}
                <span class="seperator">|</span>
                {#if datesActive.end}
                    <span class="infoChild">In the league from '{datesActive.start.toString().substr(2)} to '{datesActive.end.toString().substr(2)}</span>
                {:else}
                    <span class="infoChild">In the league since '{datesActive.start.toString().substr(2)}</span>
                {/if}
            {:else if viewManager.fantasyStart}
                <!-- fantasyStart is an optional field -->
                <span class="seperator">|</span>
                <span class="infoChild">Playing ff since '{viewManager.fantasyStart.toString().substr(2)}</span>
            {/if}
            {#if viewManager.preferredContact}
                <!-- preferredContact is an optional field -->
                <span class="seperator">|</span>
                <span class="infoChild">{viewManager.preferredContact}<img class="infoChild infoContact" src="/{viewManager.preferredContact}.png" alt="favorite team"/></span>
            {/if}
            <!-- <span class="infoChild">{viewManager.preferredContact}</span> -->
            {#if viewManager.favoriteTeam}
                <!-- favoriteTeam is an optional field -->
                <span class="seperator">|</span>
                <img class="infoChild infoTeam" src="https://sleepercdn.com/images/team_logos/nfl/{viewManager.favoriteTeam}.png" alt="favorite team"/>
            {/if}
            {#if commissioner}
                <span class="seperator">|</span>
                <div class="infoChild commissionerBadge">
                    <span>C</span>
                </div>
            {/if}
        </div>

        <div class="managerNav upper">
            <Group variant="outlined">
                {#if manager == 0}
                    <Button disabled class="selectionButtons" on:click={() => changeManager(parseInt(manager) - 1, true)} variant="outlined">
                        <Label>Previous Manager</Label>
                    </Button>
                {:else}
                    <Button class="selectionButtons" on:click={() => changeManager(parseInt(manager) - 1, true)} variant="outlined">
                        <Label>Previous Manager</Label>
                    </Button>
                {/if}
                <Button class="selectionButtons" on:click={() => goto('/managers')} variant="outlined">
                    <Label>All Managers</Label>
                </Button>
                {#if manager == managers.length - 1}
                    <Button disabled class="selectionButtons" on:click={() => changeManager(parseInt(manager) + 1, true)} variant="outlined">
                        <Label>Next Manager</Label>
                    </Button>
                {:else}
                    <Button class="selectionButtons" on:click={() => changeManager(parseInt(manager) + 1, true)} variant="outlined">
                        <Label>Next Manager</Label>
                    </Button>
                {/if}
            </Group>
        </div>
        <hr>
        <h3>Bio</h3>
        <p class="bio">{@html viewManager.bio}</p>
        
        <hr />

        {#if viewManager.philosophy}
            <!-- philosophy is an optional field -->
            <h3>Team Philosophy</h3>
            <p class="philosophy">{@html viewManager.philosophy}</p>
        {/if}
    </div>

    {#if !loading}
        <!-- Favorite player -->
        <ManagerFantasyInfo {viewManager} {players} {changeManager} />
    {/if}

    <div class="managerConstrained">
        <h3> Franchise </h3>
            {#if viewManager.franchiseBanner}
                <img src="{viewManager.franchiseBanner}" alt="Franchise Banner" class="franchiseBanner"/>
            {/if}

        <div class="jerseyContainer">
                <img src={viewManager.jerseyblack1} alt="Jersey Black1" class="active">
                <img src={viewManager.jerseyblack2} alt="Jersey Black2">
                <img src={viewManager.jerseyblack3} alt="Jersey Black3">
                <img src={viewManager.jerseywhite1} alt="Jersey White1">
                <img src={viewManager.jerseywhite2} alt="Jersey White2">
                <img src={viewManager.jerseywhite3} alt="Jersey White3">
                <img src={viewManager.jerseyalt1} alt="Jersey Alt1">
                <img src={viewManager.jerseyalt2} alt="Jersey Alt2">
                <img src={viewManager.jerseyalt3} alt="Jersey Alt3">
        </div>

            {#if viewManager.stadium}
                <img src="{viewManager.stadium}" alt="Stadium" class="stadiumImage">
            {/if}
        <div style="background-color: {viewManager.backgroundColor}">
            {#if viewManager.mascot}
                <center><img src="{viewManager.mascot}" alt="Mascot" class="mascotImage"></center>
            {/if}
        </div>
    <ManagerAwards {leagueTeamManagers} tookOver={viewManager.tookOver} {awards} {records} {rosterID} managerID={viewManager.managerID} />

        <div style="background-color: {viewManager.backgroundColor}">
        {#if viewManager.bobblehead}
            <center><img src="{viewManager.bobblehead}" alt="Bobblehead" class="bobbleheadImage"></center>
        {/if}
        </div>
    </div>  

    {#if loading}
        <!-- promise is pending -->
        <div class="loading">
            <p>Retrieving players...</p>
            <LinearProgress indeterminate />
        </div>
    {:else}
        <Roster division="1" expanded={false} {rosterPositions} {roster} {leagueTeamManagers} {players} {startersAndReserve} />
    {/if}

    <hr>

    <div class="managerConstrained">
        {#if loading}
            <!-- promise is pending -->
            <div class="loading">
                <p>Retrieving players...</p>
                <LinearProgress indeterminate />
            </div>
        {:else}
            <TransactionsPage {playersInfo} transactions={teamTransactions} {leagueTeamManagers} show='both' query='' page={0} perPage={5} />
        {/if}
    </div>

    <div class="managerNav">
        <Group variant="outlined">
            {#if manager == 0}
                <Button disabled class="selectionButtons" on:click={() => changeManager(parseInt(manager) - 1)} variant="outlined">
                    <Label>Previous Manager</Label>
                </Button>
            {:else}
                <Button class="selectionButtons" on:click={() => changeManager(parseInt(manager) - 1)} variant="outlined">
                    <Label>Previous Manager</Label>
                </Button>
            {/if}
            <Button class="selectionButtons" on:click={() => goto('/managers')} variant="outlined">
                <Label>All Managers</Label>
            </Button>
            {#if manager == managers.length - 1}
                <Button disabled class="selectionButtons" on:click={() => changeManager(parseInt(manager) + 1)} variant="outlined">
                    <Label>Next Manager</Label>
                </Button>
            {:else}
                <Button class="selectionButtons" on:click={() => changeManager(parseInt(manager) + 1)} variant="outlined">
                    <Label>Next Manager</Label>
                </Button>
            {/if}
        </Group>
    </div>

</div>
