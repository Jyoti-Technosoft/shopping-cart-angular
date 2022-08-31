import { Component, OnInit } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  public productInfo: any;

  
  showNavigationArrows: boolean = false;
  showNavigationIndicators = false;
  images = [
    "../../assets/slide1.jpg",
    "../../assets/slide2.jpg",
    "../../assets/slide3.jpg",
    "../../assets/slide4.jpg",
  ];
  constructor(config: NgbCarouselConfig, private http: HttpClient) {
    
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  ngOnInit(): void {
    const jsonUrl = "../../assets/db.json";
    this.http.get(jsonUrl).subscribe((response) => {
      this.productInfo = response;
    });
  }
  category = [
    { image: "../../assets/grocery.webp", name: "Grocery" },
    { image: "../../assets/mobile.webp", name: "Mobile" },
    { image: "../../assets/fashion.webp", name: "Fashion" },
    { image: "../../assets/electronics.webp", name: "Electronics" },
    { image: "../../assets/homeappliances.webp", name: "Home" },
    { image: "../../assets/appliances.webp", name: "Appliances" },
    { image: "../../assets/toys.webp", name: "Toys & Beauty" },
  ];

  electronics = [
    "../../assets/product1.jpg",
    "../../assets/product2.jpg",
    "../../assets/product3.jpg",
    "../../assets/product4.jpg",
    "../../assets/product5.jpg",
  ];
}
