#include<iostream>
int y = 23;
namespace std{
	int y = 123;
}
using namespace std;
class test{
private:
	int x = 10;
public:
	int getx(void);
};
int test::getx(){
	return x; 
}
int main(){
	test t;
	int y = 34;
	cout<<t.getx()<<"  "<<::y;
	return 0;
}