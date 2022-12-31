import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

photoCover:string= "https://adrenaline.com.br/uploads/chamadas/mortal-shell-gratis.jpg"
contentTitle:string= "TesteTesteTeste"
contentDescription:string="TesteTesteTesteTesteTesteTesteTeste"


  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }

}
