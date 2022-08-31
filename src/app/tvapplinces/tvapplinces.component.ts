import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: "app-tvapplinces",
  templateUrl: "./tvapplinces.component.html",
  styleUrls: ["./tvapplinces.component.css"],
})
export class TvapplincesComponent implements OnInit {
  searchTerm = '';
  term = '';
  public productInfo: any;
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    const jsonUrl = "../../assets/db.json";
    this.http.get(jsonUrl).subscribe((response) => {
      this.productInfo = response;
    });
  } 
}


