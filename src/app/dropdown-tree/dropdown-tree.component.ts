import { Component, Input } from '@angular/core';
import { TreeNode } from '../helper/tree-node';

@Component({
  selector: 'app-dropdown-tree',
  templateUrl: './dropdown-tree.component.html',
  styleUrl: './dropdown-tree.component.css'
})
export class DropdownTreeComponent {
  @Input() data: TreeNode[] = [];
  @Input() selectAllChildren: boolean = true;

  treeData: TreeNode[] = [];
  selectedItems: TreeNode[] = [];
  dropdownVisible: boolean = true;

  selectAll: boolean = false;
  isDropdownOpen: boolean = false;

  ngOnInit(): void {
    this.initializeTree();
  }

  initializeTree(): void {
    this.treeData = this.data.map((node) => ({ ...node, checked: node.checked, expanded: false }));
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleNode(node: TreeNode): void {
    node.expanded = !node.expanded;
  }
  

  getChildren(parentId: number): TreeNode[] {
    return this.treeData.filter((node) => node.pid === parentId);
  }

  onNodeCheckChange(node: TreeNode, isChild: boolean): void {
    node.checked = !node.checked; // Ensure the checked state toggles
    if (node.checked) {
      this.addItem(node);
    } else {
      this.removeItem(node);
    }
  
    // Ensure child nodes are handled properly
    if (!isChild && node.hasChild && this.selectAllChildren) {
      this.getChildren(node.id).forEach(child => {
        child.checked = node.checked;
        if (child.checked) {
          this.addItem(child);
        } else {
          this.removeItem(child);
        }
      });
    }
    this.updateSelectAllState();
  }
  


  addItem(node: TreeNode): void {
    if (!this.selectedItems.find(item => item.id === node.id)) {
      this.selectedItems.push(node);
    }
  }
  
  removeItem(node: TreeNode): void {
    this.selectedItems = this.selectedItems.filter(item => item.id !== node.id);
  }
  
  clearAll(): void {
    this.selectedItems.forEach(item => (item.checked = false));
    this.selectedItems = [];
    this.treeData.forEach(node => (node.checked = false));  // Clear checkbox state
    this.updateSelectAllState();
  }

  updateSelectAllState(): void {
    this.selectAll = this.treeData.every((node) => node.checked);
  }

  

}
