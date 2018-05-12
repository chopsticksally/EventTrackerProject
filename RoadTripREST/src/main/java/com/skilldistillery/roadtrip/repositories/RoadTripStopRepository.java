package com.skilldistillery.roadtrip.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.roadtrip.entities.Roadtripstop;

public interface RoadTripStopRepository extends JpaRepository <Roadtripstop, Integer>{
	

}
