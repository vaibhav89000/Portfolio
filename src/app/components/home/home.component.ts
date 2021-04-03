import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var i = 0;
    function change() {
      var doc = document.getElementById("name");
      var color = ["black", "white","#ec7d7d","#60c7ef"];
      doc.style.color = color[i];
      i = (i + 1) % color.length;
    }
    setInterval(change, 1000);


    var j = 0;
    function changecolor() {
      var doc = document.getElementById("about");
      var color = ["black","#60c7ef","white","#ec7d7d"];
      doc.style.color = color[j];
      j = (j + 1) % color.length;
    }
    setInterval(changecolor, 1000);

  }

  onEdit(){
    window.scrollTo(0,0);
  }


 

}
