#include<iostream>
using namespace std;
 int main(){
     int a[]={9, 1, 9, 1, 9, 1 ,0 };
     int b[]={9, 8, 7, 6, 5, 4, 3, 2, 1};
     int n = sizeof(a)/sizeof(a[0]);
     int m=sizeof(b)/sizeof(b[0]);
     int c[m+n];
     int count = 0;
     for(int i=0;i<m+n;i++){
         if(i<n){
             c[i]=a[i];
         }
         else{

             c[i]=b[count];
             count++;
         }
     }
int rep = 0;
for(int i=0;i<n+m;i++){
    for(int j=i;j<n+m;j++){
        if(c[i]==c[j+1]){
            rep++;
            break;
        }
    }
}
    cout<<"Intersection of this array is :"<<rep;
     return 0;
 }
