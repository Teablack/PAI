#include <stdio.h>

int main() {
		int i;
#pragma omp parallel  //tworzymy watki
	{

		int i; //zmienna prywatna
		printf("Hello World\n");



		for(i=0;i<6;i++)
			printf("Iter:%d\n",i);

		printf("GoodBye World\n");

	}
}