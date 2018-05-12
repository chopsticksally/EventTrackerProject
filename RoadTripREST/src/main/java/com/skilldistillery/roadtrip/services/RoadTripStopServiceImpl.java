package com.skilldistillery.roadtrip.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.skilldistillery.roadtrip.entities.Roadtripstop;
import com.skilldistillery.roadtrip.repositories.RoadTripStopRepository;
@Service
public class RoadTripStopServiceImpl implements RoadTripStopService {

	@Autowired
	public RoadTripStopRepository rtsRepo;

	

	@Override
	public List<Roadtripstop> index() {
		return rtsRepo.findAll();

	}

	@Override
	public Roadtripstop show(int id) {
		Optional<Roadtripstop> op = rtsRepo.findById(id);
		if (op.isPresent()) {
			return op.get();
		}
		return null;

	}

	@Override
	public boolean delete(int id) {
		try {
			rtsRepo.deleteById(id);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public Roadtripstop create(Roadtripstop rts) {
		return rtsRepo.saveAndFlush(rts);

	}

	@Override
	public Roadtripstop update (int id, Roadtripstop rts) {

		Roadtripstop managedRoadTripStop = rtsRepo.save(rts);

		if (rts.getCity() != null && rts.getCity().equals("")) {
			rts.setCity(rts.getCity());
		}
		if (rts.getState() != null && rts.getState().equals("")) {
			rts.setState(rts.getState());
		}
		if (rts.getMilesDriven() != 0) {
			rts.setMilesDriven(rts.getMilesDriven());
		}
		 if (rts.getTime() != null) {
		 rts.setTime(rts.getTime());
		 }
		if (rts.getTimeElapsed() != null && rts.getTimeElapsed().equals("")) {
			rts.setTimeElapsed(rts.getTimeElapsed());
		}
			return rtsRepo.saveAndFlush(managedRoadTripStop);
		
	}

	@Override
	public Roadtripstop replace(int id, Roadtripstop rts) {
		Roadtripstop managedRoadTripStop = rtsRepo.findById(id).get();

		managedRoadTripStop.setCity(rts.getCity());
		managedRoadTripStop.setState(rts.getState());
		managedRoadTripStop.setMilesDriven(rts.getMilesDriven());
		managedRoadTripStop.setTime(rts.getTime());
		managedRoadTripStop.setTimeElapsed(rts.getTimeElapsed());

		return rtsRepo.saveAndFlush(managedRoadTripStop);
	}

	

}
