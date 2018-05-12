package com.skilldistillery.roadtrip.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Roadtripstop {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String city;
	
	private String state;
	
	@Column(name = "miles_Driven")
	private double milesDriven;
	
	@Temporal(TemporalType.DATE)
	private Date time;
	
	@Column(name = "time_elapsed")
	private String timeElapsed;
	
	//private List<RoadTripStop>stops;
	
	
	public Roadtripstop() {}
	
	
	
	

	public int getId() {
		return id;
	}

//	public List<RoadTripStop> getStops() {
//		return stops;
//	}
//
//
//
//
//
//	public void setStops(List<RoadTripStop> stops) {
//		this.stops = stops;
//	}





	public void setId(int id) {
		this.id = id;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public double getMilesDriven() {
		return milesDriven;
	}

	public void setMilesDriven(double milesDriven) {
		this.milesDriven = milesDriven;
	}

	public Date getTime() {
		return time;
	}

	public void setTime(Date time) {
		this.time = time;
	}

	public String getTimeElapsed() {
		return timeElapsed;
	}

	public void setTimeElapsed(String timeElapsed) {
		this.timeElapsed = timeElapsed;
	}
	
	
}
