import { ChangeDetectorRef, ChangeDetectionStrategy, Component, OnInit, NgZone } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { ProjectService } from '../../shared/services/ProjectsService';
import { Observable } from 'rxjs';
import _ from 'lodash';


@Component({
  selector: 'content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.sass'],
  providers: [ProjectService],  
  // changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ContentTable implements OnInit {
  private gridOptions: GridOptions;
  private gridData;  
  private columnDefs = [
    {
      headerName: "Updated",
      field: "updated",
      width: 109,
    },
    {
        headerName: "Pos",
        field: "pos",
        width: 60
    },
    {
        headerName: "Name",
        field: "name",          
        width: 147
    },
      {
        headerName: "Rating",
        field: "rating",          
        width: 80,
        cellStyle: {          
          color: '#2bb673',
          'background-color': '#dff4ea'
        }
    },
    {
      headerName: "Game",
      field: "game",          
      width: 105
    },
    {
      headerName: "Status",
      field: "status",          
      width: 124
    },
    {
      headerName: "Date Back",
      field: "date_back",          
      width: 130
    },
    {
      headerName: "Body Part",
      field: "body_part",          
      width: 120
    },
    {
      headerName: "Injury Details",
      field: "injury_details",
      minWidth: 100,
      maxWidth: 400      
    },
  ];

  constructor(private service: ProjectService, private ref: ChangeDetectorRef) {
    this.gridOptions = <GridOptions>{
      context: {
        componentParent: this
      },
      columnDefs: this.columnDefs,
      rowHeight: 35,
      headerHeight: 30,
      onGridReady: function(params) {
          params.api.sizeColumnsToFit();
      }
    };
  }

  getGridOption() {
    return _.map(this.gridData,(item => ({
      updated: item.updated,
      pos: item.position,
      name: item.name,
      rating: 95,
      game: item.team + 'vs' + item.opponent,
      status: item.status,
      date_back: 'TBD',
      body_part: item.body_part,
      injury_details: item.injury_details
    })));    
  }

  ngOnInit() {
    this.service.getInjuriesData().subscribe(response => {
      this.gridData = JSON.parse(response._body);            
      this.gridOptions.api.setRowData(this.getGridOption());
    })
  }

}