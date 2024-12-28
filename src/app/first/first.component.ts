import { Component } from '@angular/core';
import { TreeNode } from '../helper/tree-node';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  dropdownData:TreeNode[] = [
    {
      id: 1, name: 'Discover Music', hasChild: true, expanded: true,
      checked: false
    },
    {
      id: 2, pid: 1, name: 'Hot Singles',
      checked: false
    },
    {
      id: 3, pid: 1, name: 'Rising Artists',
      checked: false
    },
    {
      id: 4, pid: 1, name: 'Live Music',
      checked: false
    },
    {
      id: 6, pid: 1, name: 'Best of 2017 So Far',
      checked: false
    },
    {
      id: 7, name: 'Sales and Events', hasChild: true,
      checked: false
    },
    {
      id: 8, pid: 7, name: '100 Albums - $5 Each',
      checked: false
    },
    {
      id: 9, pid: 7, name: 'Hip-Hop and R&B Sale',
      checked: false
    },
    {
      id: 10, pid: 7, name: 'CD Deals',
      checked: false
    },
    {
      id: 11, name: 'Categories', hasChild: true,
      checked: false
    },
    {
      id: 12, pid: 11, name: 'Songs',
      checked: false
    },
    {
      id: 13, pid: 11, name: 'Bestselling Albums',
      checked: false
    },
    {
      id: 14, pid: 11, name: 'New Releases',
      checked: false
    },
    {
      id: 15, pid: 11, name: 'Bestselling Songs',
      checked: false
    },
    {
      id: 16, name: 'MP3 Albums', hasChild: true,
      checked: false
    },
    {
      id: 17, pid: 16, name: 'Rock',
      checked: false
    },
    {
      id: 18, pid: 16, name: 'Gospel',
      checked: false
    },
    {
      id: 19, pid: 16, name: 'Latin Music',
      checked: false
    },
    {
      id: 20, pid: 16, name: 'Jazz',
      checked: false
    },
    {
      id: 21, name: 'More in Music', hasChild: true,
      checked: false
    },
    {
      id: 22, pid: 21, name: 'Music Trade-In',
      checked: false
    },
    {
      id: 23, pid: 21, name: 'Redeem a Gift Card',
      checked: false
    },
    {
      id: 24, pid: 21, name: 'Band T-Shirts',
      checked: false
    },
  ];
}
