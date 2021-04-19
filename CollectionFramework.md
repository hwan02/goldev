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
# Set Interface 
> 중복을 허용하지 않는다.  
순거가 없다.  
저장된 순서와 출력 순서가 다를 수 있다.  
get(i) 메서드가 제공되지 않아서 Iterator로 대체한다.  

## HashSet 
> JDK 1.2부터 제공된 HashSet 클래스는 해시 알고리즘(hash algorithm)을 사용하여 검색 속도가 빠르다.
내부적으로 HashMap 인스턴스를 이용하여 요소를 저장한다.  
저장 순서를 유지해야 한다면 JDK 1.4부터 제공하는 LinkedHashSet 클래스를 사용한다.

```java
HashSet<String> hs01 = new HashSet<String>();
HashSet<String> hs02 = new HashSet<String>();

// add() 메소드를 이용한 요소의 저장

hs01.add("홍길동");
hs01.add("이순신");
System.out.println(hs01.add("임꺽정"));
System.out.println(hs01.add("임꺽정")); // 중복된 요소의 저장

for (String e : hs01) {
    System.out.print(e + " ");
}

// add() 메소드를 이용한 요소의 저장
hs02.add("임꺽정");
hs02.add("홍길동");
hs02.add("이순신");

// iterator() 메소드를 이용한 요소의 출력
Iterator<String> iter02 = hs02.iterator();
while (iter02.hasNext()) {
    System.out.print(iter02.next() + " ");
}

// size() 메소드를 이용한 요소의 총 개수
System.out.println("집합의 크기 : " + hs02.size());

//실행결과
true
false
홍길동 이순신 임꺽정
홍길동 이순신 임꺽정
집합의 크기 : 3
```
## TreeSet
> 객체 정렬에 사용되는 클래스  
중복 허용하지 않으면서 오름차순이나 내림차순으로 객체를 정렬한다.  
내부적으로 이진 검색 트리로 구현(binary search tree) 
객체 비교는 Comparable, Comparator 인터페이스를 구현한다. 

> Comparable : 기본 정렬 기준을 구현하는데 사용  
Comparator : 기본 정렬 기준 외에 다른 기준으로 정렬하고자 할 때 사용  

compareTo()의 반환값은 int 지만 실제로는 비교하는 두 객체가 같으면 0, 비교하는 값보다 작으면 음수, 크면 양수를 반환하도록 구현해야 한다.

```java 
public class Member implements Comparable<member> {
    @Override
    public int compareTo(Member member) {
        //내림차순으로 정렬하기 위해 반환 값을 음수로 만듦
        return (this.memberId - member.memberId) * (-1); 
    }
	
public class Member implements Comparator<Member> {
    @Override
    public int compare(Member member1, Member member2) {
	return (member1.memberId - member2.memberId);
    }
}	

TreeSet<Member> treeSet = new TreeSet<Member>(new Member());
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
