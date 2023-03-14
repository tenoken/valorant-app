import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AgentApiService } from '../services/agent/agent-api.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {

  const agent = {

    "uuid": "",
    "displayName": "string",
    "description": "string",
    "developerName": "string",
    "characterTags": null,
    "displayIcon": "string",
    "displayIconSmall": "string",
    "bustPortrait": "string",
    "fullPortrait": "string",
    "fullPortraitV2": "string",
    "killfeedPortrait": "string",
    "background": "string",
    "backgroundGradientColors": null,
    "assetPath": "string",
    "isFullPortraitRightFacing": false,
    "isPlayableCharacter": false,
    "isAvailableForTest": false,
    "isBaseContent": false,
    "role": null,
    "abilities": null,
    "voiceLine": null
  }

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const spy = jasmine.createSpyObj('HttpClient', ['get', 'pipe']);
  spy.get.and.returnValue(of(agent));
  spy.pipe.and.returnValue({});


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [RouterTestingModule],
      providers: [AgentApiService, { provide: HttpClient, useValue: spy}]
    })
    .compileComponents();
    TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
