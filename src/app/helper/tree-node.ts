interface TreeNode {
    id: number;
    pid?: number;
    name: string;
    hasChild?: boolean;
    expanded?: boolean;
    checked: boolean ;
  }
    export { TreeNode };
