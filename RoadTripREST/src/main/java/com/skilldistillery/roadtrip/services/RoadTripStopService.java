package com.skilldistillery.roadtrip.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.skilldistillery.roadtrip.entities.Roadtripstop;


public interface RoadTripStopService {
	
	public List<Roadtripstop> index();
	
	public Roadtripstop show(int id);
	
	public boolean delete(int id);
	
	public Roadtripstop create(Roadtripstop rts);
	
	public Roadtripstop update(int id, Roadtripstop rts);
	
	public Roadtripstop replace(int id, Roadtripstop rts);
}
