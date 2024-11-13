import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../service/item.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {

  items: any[] = [];
  newItem = { name: '', description: '' };

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  addItem(): void {
    this.itemService.addItem(this.newItem).subscribe(() => {
      this.getItems();
      this.newItem = { name: '', description: '' };
    });
  }

  deleteItem(id: number): void {
    this.itemService.deleteItem(id).subscribe(() => this.getItems());
  }

}
