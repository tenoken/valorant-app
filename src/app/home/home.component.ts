import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AgentApiService } from '../services/agent/agent-api.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

    constructor(private router: Router, 
        //private activatedRoute: ActivatedRoute, 
        private valorantAppService: AgentApiService) { }

    ngOnInit(): void {
        this.valorantAppService.getAgents()
            .subscribe(agents => { 
                this.agents = agents
            });
    }

    viewAgent(agentId: string): any {
        this.router.navigate([`/agents/${agentId}`]);
    }    

    public agents : any = []        
}
