import { Component, OnInit } from '@angular/core';
import { RoadtripStop } from '../models/roadtrip-stop';
import { RoadtripStopService } from '../roadtrip-stop.service';

@Component({
  selector: 'app-roadtrip-stop',
  templateUrl: './roadtrip-stop.component.html',
  styleUrls: ['./roadtrip-stop.component.css']
})
export class RoadtripStopComponent implements OnInit {

  title = 'ngEventTracker';

  stops = [];

  editStop = null;
  selected = null;
  newStop = new RoadtripStop();


  constructor(private rtsService: RoadtripStopService) { }

  ngOnInit() {
    this.reload();
  }

  displayStop = function(stop) {
    this.selected = stop;
  };

  displayTable = function() {
    this.cancel();
  };

  save() {
    this.stops[this.editStop.id - 1] = this.editStop;
    this.rtsService.update(this.editStop);
    this.cancel();

}
cancel() {
  this.selected = null;
  this.editStop = null;
}

   reload = function() {
    this.rtsService.index().subscribe(
      stops => this.stops = stops,
      err => console.log(err)
    );
  };

   create = function(newStop) {

     this.rtsService.create(newStop).subscribe(
      stops => this.reload(),
      err => console.log(err)
    );
  };


  setEditStop = function() {
    this.editStop = Object.assign({}, this.selected);
  };

  update = function(stop) {

    this.rtsService.update(stop).subscribe(
      stops => {
        this.reload();
        this.cancel();

      },
      err => console.log(err)
    );


  };

  delete = function(id) {

      this.rtsService.delete(id).subscribe(
        stops => this.reload(),
      err => console.log(err)
    );

  };
}
