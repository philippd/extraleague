package ch.squix.extraleague.model.ranking;

import static com.googlecode.objectify.ObjectifyService.ofy;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

import ch.squix.extraleague.model.match.Match;
import ch.squix.extraleague.model.match.Matches;
import ch.squix.extraleague.model.ranking.badge.BadgeEnum;
import ch.squix.extraleague.model.ranking.tasks.AverageTimePerMatchTask;
import ch.squix.extraleague.model.ranking.tasks.BestPositionTask;
import ch.squix.extraleague.model.ranking.tasks.CurrentShapeTask;
import ch.squix.extraleague.model.ranking.tasks.IncestuousTask;
import ch.squix.extraleague.model.ranking.tasks.ManualBadgeTask;
import ch.squix.extraleague.model.ranking.tasks.PartnerOpponentTask;
import ch.squix.extraleague.model.ranking.tasks.RankingTask;
import ch.squix.extraleague.model.ranking.tasks.ScoreTask;
import ch.squix.extraleague.model.ranking.tasks.SlamTask;
import ch.squix.extraleague.model.ranking.tasks.SpecialResultPerGameTask;
import ch.squix.extraleague.model.ranking.tasks.StrikeTask;
import ch.squix.extraleague.rest.games.GameResource;

public class RankingService {
	
	private static final Logger log = Logger.getLogger(RankingService.class.getName());

	public static void calculateRankings() {
		Calendar calendar = Calendar.getInstance();
		calendar.add(Calendar.DATE, -30);
		List<Match> matchesList = ofy().load().type(Match.class).filter("startDate > ", calendar.getTime()).list();
		Matches matches = new Matches();
		matches.setMatches(matchesList);
		
		// Initialize player ranking map
		Map<String, PlayerRanking> playerRankingMap = new HashMap<>();
		for (String player : matches.getPlayers()) {
	                PlayerRanking ranking = new PlayerRanking();
	                ranking.setPlayer(player);
	                ranking.setGamesWon(0);
	                ranking.setGamesLost(0);
	                playerRankingMap.put(player, ranking);
		}
		
		List<RankingTask> rankingTasks = new ArrayList<>();
		rankingTasks.add(new ScoreTask());
		rankingTasks.add(new SpecialResultPerGameTask());
		rankingTasks.add(new BestPositionTask());
		rankingTasks.add(new SlamTask());
		rankingTasks.add(new StrikeTask());
		rankingTasks.add(new PartnerOpponentTask());
		rankingTasks.add(new AverageTimePerMatchTask());
		rankingTasks.add(new ManualBadgeTask());
		rankingTasks.add(new CurrentShapeTask());
		rankingTasks.add(new IncestuousTask());
		for (RankingTask task: rankingTasks) {
		    task.rankMatches(playerRankingMap, matches);
		}
		

		//ofy().save().entities(matchesList).now();
		List<PlayerRanking> rankings = filterFirstPlayers(playerRankingMap.values());
		Collections.sort(rankings, new Comparator<PlayerRanking>() {

			@Override
			public int compare(PlayerRanking o1, PlayerRanking o2) {
				int result = o2.getSuccessRate().compareTo(o1.getSuccessRate());
				if (result == 0) {
					return o2.getGoalRate().compareTo(o1.getGoalRate());
				}
				return result;
			}
			
		});
		int index = 1;
		for (PlayerRanking ranking : rankings) {
			ranking.setRanking(index);
			index++;
		}
		calculateBadges(rankings);
		Ranking ranking = new Ranking();
		ranking.setCreatedDate(new Date());
		ranking.setPlayerRankings(rankings);
		ofy().save().entities(ranking);

	}

	private static List<PlayerRanking> filterFirstPlayers(Collection<PlayerRanking> values) {
		List<PlayerRanking> rankings = new ArrayList<>();
		for (PlayerRanking ranking : values) {
			if (ranking.getTotalGames() >=8) {
				rankings.add(ranking);
			}
		}
		return rankings;
	}

	private static void calculateBadges(List<PlayerRanking> rankings) {
		for (PlayerRanking ranking : rankings) {
			if (ranking.getRanking() == 1) {
				ranking.getBadges().add(BadgeEnum.King.name());
			}
			if (ranking.getRanking() == 2) {
				ranking.getBadges().add(BadgeEnum.Queen.name());
			}
			if (ranking.getRanking() == rankings.size()) {
				ranking.getBadges().add(BadgeEnum.Pawn.name());
			}
		}
	}


}
