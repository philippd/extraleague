package ch.squix.extraleague.rest.ranking;

import static com.googlecode.objectify.ObjectifyService.ofy;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.restlet.resource.Get;
import org.restlet.resource.ServerResource;

import ch.squix.extraleague.model.ranking.PlayerRanking;
import ch.squix.extraleague.model.ranking.Ranking;
import ch.squix.extraleague.model.ranking.RankingService;

public class RankingServiceResource extends ServerResource {
	
	@Get(value = "json")
	public String execute() throws UnsupportedEncodingException {
		RankingService.calculateRankings();

		return "OK";
	}


}