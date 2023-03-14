import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AgentApiService {

  constructor(private httpClient: HttpClient) {  }

  private readonly BASE_URL: string = "https://valorant-api.com/v1/";

  private readonly METHOD: string = "agents";

  getAgents(){
    return this.httpClient.get(`${this.BASE_URL}${this.METHOD}`)
      .pipe(catchError(this.handleError));      
  }

  getAgent(id: string){
    return this.httpClient.get<AgentResponse>(`${this.BASE_URL}${this.METHOD}/${id}`)
      .pipe(
        map((response: AgentResponse) => {
          return response.data;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse){
    console.log(error.message);
    return throwError(() =>'A data error occurred, please try again.');
  }
}

interface AgentResponse {

  "data": []
}

interface Agent {

  "uuid": string,
  "displayName": string,
  "description": string,
  "developerName": string,
  "characterTags": null,
  "displayIcon": string,
  "displayIconSmall": string,
  "bustPortrait": string,
  "fullPortrait": string,
  "fullPortraitV2": string,
  "killfeedPortrait": string,
  "background": string,
  "backgroundGradientColors": string[],
  "assetPath": string
  "isFullPortraitRightFacing": boolean,
  "isPlayableCharacter": boolean,
  "isAvailableForTest": boolean,
  "isBaseContent": boolean,
  "role": Role,
  "abilities": Ability[],
  "voiceLine": VoiceLine  
}

interface Role {

  "uuid": string,
  "displayName": string,
  "description": string,
  "displayIcon": string,
  "assetPath": string
}

interface Ability {

  "slot": string,
  "displayName": string,
  "description": string,
  "displayIcon": string
}

interface VoiceLine {

  "minDuration": number,
  "maxDuration": number,
  "mediaList": Media[]
}

interface Media {

  "id": number,
  "wwise": string
  "wave": string
}
