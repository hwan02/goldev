# Collection Framework 컬렉션 프레임워크
>자료구조와 알고리즘  
java.util 패키지



## Collection 컬렉션
![컬렉션 구조](https://static.javatpoint.com/images/java-collection-hierarchy.png)

### List
> index를 가지는 원소들의 모임, 중복값을 가질 수 있다.  
종류: ArrayList, LinkedList, Vector 

#### ArrayList 
> 저장되는 데이터 갯수에 따라 자동으로 크기가 변경되어 배열 대신 자주 사용 

``` java
--생성 
ArrayList<String> list = new ArrayList<String>();

//삽입
list.add("a");
list.add("b");

//특정 인덱스에 삽입
list.add("2", "c");

//특정 인덱스 원소 변경
list.set("0", "d"); 

//특정 인덱스 원소 삭제
list.remove(2);

// 특정 인덱스 원소 가져오기 
list.get(0);

//원소로 인덱스 찾기, 없으면 -1
int index = list.indexOf("b");

// 맨 뒤에서 부터 원소 찾기
int backIndex = list.lastIndexOf("c");
```
