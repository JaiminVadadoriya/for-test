import { Component, Input } from '@angular/core';
import { TreeNode } from '../helper/tree-node';

@Component({
  selector: 'app-dropdown-tree',
  templateUrl: './dropdown-tree.component.html',
  styleUrl: './dropdown-tree.component.css'
})
export class DropdownTreeComponent {
  @Input() data: TreeNode[] = [];
  @Input() showCheckBox: boolean = true;
  @Input() showSelectAll: boolean = true;
  @Input() selectAllText: string = 'Select All';
  @Input() unSelectAllText: string = 'Unselect All';

  treeData: TreeNode[] = [];
  selectedItems: string[] = [];

  selectAll: boolean = false;
  isDropdownOpen: boolean = false;

  ngOnInit(): void {
    this.initializeTree();
  }

  initializeTree(): void {
    this.treeData = this.data.map((node) => ({ ...node, checked: false, expanded: false }));
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
    if (!isChild && node.hasChild) {
      this.getChildren(node.id).forEach(child => (child.checked = false));
    }
    // this.updateSelectedItems();
    this.updateSelectAllState();
  }

  toggleSelectAll(): void {
    this.treeData.forEach((node) => (node.checked = this.selectAll));
    this.updateSelectedItems();
  }

  updateSelectAllState(): void {
    this.selectAll = this.treeData.every((node) => node.checked);
  }

  updateSelectedItems(): void {
    this.selectedItems = this.treeData.filter((node) => node.checked).map((node) => node.name);
  }

  clearSelection(event: Event): void {
    event.stopPropagation();
    this.treeData.forEach((node) => (node.checked = false));
    this.updateSelectedItems();
    this.selectAll = false;
  }
}
