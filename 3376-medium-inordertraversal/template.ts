interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
// 左中右
type InorderTraversal<T extends TreeNode | null> = [T] extends [TreeNode] ? [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>] : [];