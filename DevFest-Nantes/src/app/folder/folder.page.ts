import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FolderServiceService } from '../shared/services/folder-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  // private activatedRoute = inject(ActivatedRoute);
  public activatedRoute = inject(ActivatedRoute);

  
  currentPage$!: Observable<string>;
  
  constructor(private folderService:FolderServiceService) {}

  ngOnInit() {
   this.currentPage$=this.folderService.currentPage;
    
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;

  }
}
