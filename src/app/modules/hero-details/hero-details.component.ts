import { Character } from './../../shared/models/character.model';
import { MarvelService } from './../../service/marvel-service/marvel.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  constructor(
    private marvelService: MarvelService,
    private activatedRoute:ActivatedRoute,
  ) {}

  public hero: Character[] = [];

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.paramMap.get('id'))
    this.marvelService.
      getCharterId(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe(res => {
        console.log(res)
        this.hero = res
      })
  }

}
