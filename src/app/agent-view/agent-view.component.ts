import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AgentApiService } from '../services/agent/agent-api.service';


@Component({
    selector: 'app-agent-view',
    templateUrl: './agent-view.component.html',
    styleUrls: ['./agent-view.component.sass']
})
export class AgentViewComponent implements OnInit {

    constructor(private route: ActivatedRoute,
        private router: Router,
        private location: Location,
        private valorantAppService: AgentApiService) { }

    ngOnInit(): void {
        const agentId = this.route.snapshot.paramMap.get('id');

        this.valorantAppService.getAgent(agentId!)
            .subscribe(agent => { this.agent = agent});
    }

    gotoItems(agent: any) {
        const agentId = agent ? agent : null;
        this.router.navigate(['/agents', { id: agentId }]);
    }

    backToPreviousPage() {
        this.location.back();
    }

    public agent: any;
}

