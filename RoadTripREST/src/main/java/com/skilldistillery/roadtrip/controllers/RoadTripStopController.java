package com.skilldistillery.roadtrip.controllers;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.roadtrip.entities.Roadtripstop;
import com.skilldistillery.roadtrip.services.RoadTripStopService;


@RestController
@RequestMapping("api")
public class RoadTripStopController {

	@Autowired
	public RoadTripStopService rtsServ;
	
	@RequestMapping(path = "ping", method = RequestMethod.GET)
	public String ping() {
		return "pong";
	}
	@RequestMapping(path="stops", method=RequestMethod.GET)
	public List<Roadtripstop> index(){
	  return rtsServ.index();
	}
	@RequestMapping(path="stops/{id}", method=RequestMethod.GET)
	public Roadtripstop show(@PathVariable int id){
	  return rtsServ.show(id);
	}
	@RequestMapping(path="stops", method=RequestMethod.POST)
	public Roadtripstop create(@RequestBody Roadtripstop rts){
	  return rtsServ.create(rts);
	}
	@RequestMapping(path = "stops/{id}", method = RequestMethod.DELETE)
	public boolean delete(@PathVariable int id) {
		return rtsServ.delete(id);
	}
	@RequestMapping(path = "stops/{id}", method = RequestMethod.PUT)
	public Roadtripstop update(@RequestBody Roadtripstop rts, @PathVariable int id) {
		return rtsServ.update(id, rts);
	}
	@RequestMapping(path = "stops/{id}", method = RequestMethod.PATCH)
	public Roadtripstop replace(@RequestBody Roadtripstop rts, @PathVariable int id) {
		return rtsServ.replace(id, rts);
	}
	

}
