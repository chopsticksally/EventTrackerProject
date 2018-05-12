package com.skilldistillery.roadtrip.tests;

import static org.junit.Assert.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import com.skilldistillery.roadtrip.entities.Roadtripstop;

class RoadTripStopTests {

		private EntityManagerFactory emf;
		private EntityManager em;
		

		@Test
		@DisplayName("Test city entity mappings")
		void test_city_mappings() {
			Roadtripstop rts = em.find(Roadtripstop.class, 1);
			assertNotNull(rts);
			assertEquals("Moab",rts.getCity());
		}
		@Test
		@DisplayName("Test milesDriven entity mappings")
		void test_milesDriven_mappings() {
			Roadtripstop rts = em.find(Roadtripstop.class, 1);
			assertNotNull(rts);
			assertEquals(1400,rts.getMilesDriven());
		}
		


		@BeforeEach
		void setUp() throws Exception {
			emf = Persistence.createEntityManagerFactory("RoadTrip");
			em = emf.createEntityManager();
			
		}

		@AfterEach
		void tearDown() throws Exception {
			em.close();
			emf.close();
		}


	}
