import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AgentApiService } from '../services/agent/agent-api.service';

import { AgentViewComponent } from './agent-view.component';

describe('AgentViewComponent', () => {

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

  let component: AgentViewComponent;
  let fixture: ComponentFixture<AgentViewComponent>;
  const spy = jasmine.createSpyObj('HttpClient', ['get', 'pipe']);
  spy.get.and.returnValue(of(agent));
  spy.pipe.and.returnValue({});

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentViewComponent ],
      imports: [RouterTestingModule],
      providers: [AgentApiService, { provide: HttpClient, useValue: spy}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });       
});

