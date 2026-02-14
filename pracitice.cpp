#include <iostream>
#include <climits>
#include <queue>
#include <algorithm>
#include <vector>
#include <stack>

using namespace std;

class Node {
public:
    int data;
    Node* left;
    Node* right;

    // Constructor
    Node(int val) {
        data = val;
        left = NULL;
        right = NULL;
    }
};
void display(Node * root) {
    if (root == NULL) {
        return;
    }
    cout << root->data << " ";
    display(root->left);
    display(root->right);
}
 int size(Node* root) {
    if (root == NULL) {
        return 0;
    }
    return 1 + size(root->left) + size(root->right);
}

int sum(Node * root){
    if(root==NULL)return 0;
    return root->data+sum(root->left)+sum(root->right);
}
int h(Node * root){
    if(root==NULL) return 0;
    return 1+max(h(root->left),h(root->right));
}

int maxv(Node * root){
    if(root==NULL) return INT_MIN;
    return max(root->data,max(maxv(root->left),maxv(root->right)));
}
int p(Node * root){
    if(root==NULL) return 1;
    return root->data*p(root->left)*p(root->right);
}

void bfs(Node * root){
    Node * temp=root;
    if(temp==NULL) return;
    queue<Node*>q;
    q.push(temp);
    while(q.size()>0){
        Node * curr=q.front();
        cout<<q.front()->data<<" ";
        q.pop();
        if(curr->left!=NULL) q.push(curr->left);
        if(curr->right!=NULL) q.push(curr->right);
       
    }

}
void helper(Node * root, vector<int>&ans){
        if(root==NULL) return ;
        ans.push_back(root->data);
        helper(root->left,ans);
        helper(root->right,ans);
     }

int main() {

    // Manually creating the tree
    // Node* root = new Node(1);

    // root->left = new Node(2);
    // root->right = new Node(3);

    // root->left->left = new Node(4);
    // root->left->right = new Node(5);

    // root->right->left = new Node(6);
    // root->right->right = new Node(7);
    Node* root = new Node(5);

    root->left = new Node(4);
    root->right = new Node(5);

    root->left->left = new Node(1);
    root->left->right = new Node(1);

    root->right->right = new Node(5);


    // display(root);
    // cout<<size(root);
//   cout<<sum(root);
// cout<<h(root);
// cout<<maxv(root);
// cout<<p(root);
// bfs(root);
vector<int>ans;
helper(root,ans);
sort(ans.begin(),ans.end());

for(int i=0;i<ans.size();i++){
    cout<<ans[i]<<" ";  
}
    return 0;
}
