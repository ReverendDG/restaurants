import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit {
 
  public restaurants;
  public zipcode = '12345';
   //form data
   searchForm = new FormGroup({
    'searchInput': new FormControl('')
  })

  constructor(private apiService:ApiService, private router: Router, private readonly route: ActivatedRoute) { }

    ngOnInit() {};

    search(zipcode){
        this.apiService.getRestaurants(zipcode).subscribe(results => {
            this.restaurants = results;
            console.log(this.restaurants);
        });

    }

    
}
