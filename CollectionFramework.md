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
//생성 
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

#### LinkedList 
> ArrayList와 비교  
ArrayList는 빈번하게 데이터 삽입, 삭제 시 인덱스 조정을 위해 원소를 조정해야하는 작업이 필요하다.  
LinkedList는 각 원소를 링크로 연결하는 이중 연결 리스트로 구현되어있다.  
원소 삽입, 삭제 시 앞에 있는 원소 링크값만 변경하면 된다.  

*인덱스로 원소에 접근하는 연산은 ArrayList, 삽입 및 삭제가 많으면 LinkedList를 사용한다.*

```java 
// 배열을 List로 변경하기 
List<String> list = Arrays.asList(new String[5]);
```

#### Vector
>자바 2부터 제공된 객체 배열 클래스. 멀티 쓰레드 프로그램에서 동기화를 지원한다.
*동기화(synchronization) : 두 개의 쓰레드가 동시에 하나의 리소스에 접근할 때 순서를 맞추어서 데이터의 오류를 방지한다.*
