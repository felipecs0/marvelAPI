import { BaseService } from './../../shared/core/base-service/base-service.service';
import { Character } from './../../shared/models/character.model';
import { MarvelService } from '../../service/marvel-service/marvel.service';
import { Component, OnInit } from '@angular/core';
import { CharacterDataContainer, CharactersResponse } from 'src/app/shared/models/characters.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  constructor(
    private marvelService: MarvelService
    ) {}
  public HerosResponse: CharactersResponse = {} as CharactersResponse;
  public HeroList: Character[] = [];
  public CharacterID: any;

  ngOnInit(): void {
    this.marvelService.getCharters().subscribe((marvelAPI: CharactersResponse) => {
      console.log(marvelAPI)
      this.HerosResponse = marvelAPI
      this.HeroList = marvelAPI.data.results;
    })
  }

  selectedHero(id){
    this.CharacterID = id
  }

}
