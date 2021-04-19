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

#### Stack
>Last In First Out (LIFO) : 맨 마지막에 추가된 요소가 가장 먼저 꺼내지는 자료구조  
이미 구현된 클래스가 제공되지만 ArrayList나 LinkedList로 구현할 수 있다.
```java
import java.util.ArrayList; 

class Stack{
	private ArrayList<String> stackList = new ArrayList<String>();
	
	public void push(String data) {
		stackList.add(data);
	}
	
	public String pop() {
		int length = stackList.size();
		if(length == 0) {
			System.out.println("빈 값");
			return null;
		)
		return stackList.remove(length-1);
	}
}

public class StackTest {
	public static void main(String[] args) {
		Stack stack = new Stack();
		stack.push("a");
		stack.push("b");
		stack.push("c");
		
		System.out.println(stack.pop());
		System.out.println(stack.pop());
		System.out.println(stack.pop());
		System.out.println(stack.pop());
	}
}

c
b
a
빈값 
null
```

#### Queue
>First In First Out (FIFO) : 먼저 저장된 자료가 먼저 꺼내지는 자료구조  
ArrayList나 LinkedList로 구현할 수 있다.

```java
// LinkedList로 큐 생성
Queue<Integer> queue = new LinkedList<Integer>();

// 원소 삽입 
queue.add(1);
queue.add(2);

// 원소 삭제
int element = queue.remove();
```


* * *
# Map
![Map interface](https://4.bp.blogspot.com/-4FG1HxW0My4/WVjr8ftH0TI/AAAAAAAAAIA/_y876G2SqvcMF7tws-LVqSV5DhwWD943gCEwYBhgL/s1600/map-interface-1.png)

>Collection interface와는 별개  
json 형식과 유사한 key-value 형식  
Dictionary 자료구조  
중복된 키 못 가지고 오직 하나의 값만 매핑 가능  
클래스 종류: HashMap, TreeMap, LinkedHashMap  
HashMap은 해싱테이블에 데이터 저장  
TreeMap은 탐색트리에 저장  

```java
//Map 생성 
Map<String, Fit> fit = new HashMap<String, Fit>();

//원소 삽입
fit.put("1", new Fit("Nabba"));
fit.put("2", new Fit("WBC"));
fit.put("3", new Fit("Fitness Star"));

//키 값으로 원소 삭제
fit.remove("1");

//모든 원소 출력 
System.out.println(fit);
// {2=WBC, 3=Fitness Star}

// Map을 set으로 변환 
for(Map.Entry<String, Fit> fit: fit.entrySet()){ 
	String key = f.getKey();
	String val = s.getValue();
	
	System.out.println("key=" + key +", value=" + value);
}
```
