import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AgentApiService } from './agent-api.service';

describe('AgentApiService', () => {
  let service: AgentApiService;

  const agents = {

    "uuid": "1234",
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

  const agentResponse = {

    "data": agents
  }

  const spy = jasmine.createSpyObj('HttpClient', ['get', 'pipe']);
  spy.get.and.returnValue(of(agentResponse));
  spy.pipe.and.returnValue({});


  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [AgentApiService, { provide: HttpClient, useValue: spy}]
    });
    service = TestBed.inject(AgentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  //Unit Tests
  it('should return an agent data by id', () => {
    const response: any = agentResponse;
    service.getAgent("1234").subscribe((data) => {
      expect(data).toEqual(response.data);
    });

    //expect(spy).toHaveBeenCalledWith();
  });

  //Integration Tests

})
