// Python教程内容数据
const tutorials = {
    basics: {
        title: "Python基础",
        content: `
            <h2>Python基础</h2>
            
            <h3>1. 变量和数据类型</h3>
            <p>Python是一种动态类型语言，不需要声明变量类型。</p>
            
            <pre><code># 整数
age = 25
print(type(age))  # &lt;class 'int'&gt;

# 浮点数
price = 99.99
print(type(price))  # &lt;class 'float'&gt;

# 字符串
name = "芳芳"
message = '欢迎学习Python'
print(type(name))  # &lt;class 'str'&gt;

# 布尔值
is_student = True
is_working = False
print(type(is_student))  # &lt;class 'bool'&gt;

# 空值
data = None
print(type(data))  # &lt;class 'NoneType'&gt;</code></pre>

            <h3>2. 运算符</h3>
            <p>Python支持多种运算符：</p>
            
            <pre><code># 算术运算符
a = 10
b = 3
print(a + b)  # 13 (加法)
print(a - b)  # 7 (减法)
print(a * b)  # 30 (乘法)
print(a / b)  # 3.333... (除法)
print(a // b)  # 3 (整除)
print(a % b)  # 1 (取余)
print(a ** b)  # 1000 (幂运算)

# 比较运算符
print(a == b)  # False (等于)
print(a != b)  # True (不等于)
print(a > b)   # True (大于)
print(a < b)   # False (小于)
print(a >= b)  # True (大于等于)
print(a <= b)  # False (小于等于)

# 逻辑运算符
x = True
y = False
print(x and y)  # False (与)
print(x or y)   # True (或)
print(not x)    # False (非)</code></pre>

            <h3>3. 控制流</h3>
            
            <h4>条件语句 (if/elif/else)</h4>
            <pre><code>score = 85

if score >= 90:
    grade = "优秀"
elif score >= 80:
    grade = "良好"
elif score >= 60:
    grade = "及格"
else:
    grade = "不及格"

print(f"成绩: {score}, 等级: {grade}")</code></pre>

            <h4>循环语句</h4>
            <pre><code># for循环
fruits = ["苹果", "香蕉", "橙子"]
for fruit in fruits:
    print(f"我喜欢{fruit}")

# range函数
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# while循环
count = 0
while count < 5:
    print(f"计数: {count}")
    count += 1

# break和continue
for i in range(10):
    if i == 3:
        continue  # 跳过本次循环
    if i == 7:
        break     # 退出循环
    print(i)</code></pre>
        `
    },
    
    functions: {
        title: "函数与模块",
        content: `
            <h2>函数与模块</h2>
            
            <h3>1. 函数定义</h3>
            <p>函数是组织代码的重要方式，可以提高代码的复用性。</p>
            
            <pre><code># 简单函数
def greet(name):
    """这是一个问候函数"""
    return f"你好, {name}!"

print(greet("芳芳"))  # 你好, 芳芳!

# 带默认参数的函数
def introduce(name, age=18, city="北京"):
    return f"我是{name}, {age}岁, 来自{city}"

print(introduce("芳芳"))  # 我是芳芳, 18岁, 来自北京
print(introduce("小明", 25, "上海"))  # 我是小明, 25岁, 来自上海

# 关键字参数
print(introduce(name="小红", city="广州"))</code></pre>

            <h3>2. 参数类型</h3>
            
            <pre><code># *args - 可变位置参数
def sum_numbers(*args):
    total = 0
    for num in args:
        total += num
    return total

print(sum_numbers(1, 2, 3, 4, 5))  # 15

# **kwargs - 可变关键字参数
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="芳芳", age=25, job="测试工程师")

# 混合使用
def complex_function(a, b, *args, **kwargs):
    print(f"a={a}, b={b}")
    print(f"args={args}")
    print(f"kwargs={kwargs}")

complex_function(1, 2, 3, 4, 5, x=10, y=20)</code></pre>

            <h3>3. Lambda函数</h3>
            <pre><code># Lambda表达式（匿名函数）
square = lambda x: x ** 2
print(square(5))  # 25

# 与内置函数结合使用
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# 过滤
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # [2, 4]</code></pre>

            <h3>4. 模块导入</h3>
            <pre><code># 导入整个模块
import math
print(math.pi)  # 3.141592653589793
print(math.sqrt(16))  # 4.0

# 导入特定函数
from math import sqrt, pow
print(sqrt(25))  # 5.0
print(pow(2, 3))  # 8.0

# 使用别名
import datetime as dt
now = dt.datetime.now()
print(now)

# 导入所有（不推荐）
from math import *
print(pi)</code></pre>

            <h3>5. 创建自定义模块</h3>
            <pre><code># 创建 my_module.py 文件
# def add(a, b):
#     return a + b
#
# def multiply(a, b):
#     return a * b
#
# PI = 3.14159

# 在其他文件中使用
# from my_module import add, multiply, PI
# print(add(2, 3))  # 5
# print(multiply(2, 3))  # 6</code></pre>
        `
    },
    
    oop: {
        title: "面向对象编程",
        content: `
            <h2>面向对象编程 (OOP)</h2>
            
            <h3>1. 类和对象</h3>
            <p>类是对象的模板，对象是类的实例。</p>
            
            <pre><code># 定义类
class Person:
    # 类属性
    species = "人类"
    
    # 构造方法
    def __init__(self, name, age):
        self.name = name  # 实例属性
        self.age = age
    
    # 实例方法
    def introduce(self):
        return f"我是{self.name}, 今年{self.age}岁"
    
    def have_birthday(self):
        self.age += 1
        return f"{self.name}过生日了，现在{self.age}岁"

# 创建对象
person1 = Person("芳芳", 25)
person2 = Person("小明", 30)

print(person1.introduce())  # 我是芳芳, 今年25岁
print(person2.introduce())   # 我是小明, 今年30岁
print(person1.have_birthday())  # 芳芳过生日了，现在26岁</code></pre>

            <h3>2. 继承</h3>
            <pre><code># 父类
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return f"{self.name}发出声音"

# 子类继承父类
class Dog(Animal):
    def speak(self):
        return f"{self.name}汪汪叫"

class Cat(Animal):
    def speak(self):
        return f"{self.name}喵喵叫"

# 使用
dog = Dog("旺财")
cat = Cat("小花")
print(dog.speak())  # 旺财汪汪叫
print(cat.speak())  # 小花喵喵叫</code></pre>

            <h3>3. 封装</h3>
            <pre><code>class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.__balance = balance  # 私有属性（双下划线）
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            return f"存款成功，余额: {self.__balance}"
        return "存款金额必须大于0"
    
    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            return f"取款成功，余额: {self.__balance}"
        return "余额不足或金额无效"
    
    def get_balance(self):
        return self.__balance

account = BankAccount("芳芳", 1000)
print(account.deposit(500))   # 存款成功，余额: 1500
print(account.withdraw(200))  # 取款成功，余额: 1300
print(account.get_balance())  # 1300</code></pre>

            <h3>4. 多态</h3>
            <pre><code>class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14159 * self.radius ** 2

# 多态演示
shapes = [Rectangle(5, 4), Circle(3), Rectangle(2, 2)]
for shape in shapes:
    print(f"面积: {shape.area()}")</code></pre>

            <h3>5. 特殊方法（魔术方法）</h3>
            <pre><code>class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
    
    def __str__(self):
        return f"《{self.title}》- {self.author}"
    
    def __len__(self):
        return self.pages
    
    def __eq__(self, other):
        return self.title == other.title and self.author == other.author

book1 = Book("Python编程", "芳芳", 300)
book2 = Book("Python编程", "芳芳", 300)

print(book1)        # 《Python编程》- 芳芳
print(len(book1))   # 300
print(book1 == book2)  # True</code></pre>
        `
    },
    
    'data-structures': {
        title: "数据结构",
        content: `
            <h2>Python数据结构</h2>
            
            <h3>1. 列表 (List)</h3>
            <p>列表是有序、可变的数据集合。</p>
            
            <pre><code># 创建列表
fruits = ["苹果", "香蕉", "橙子"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]

# 访问元素
print(fruits[0])      # 苹果
print(fruits[-1])     # 橙子（最后一个）
print(fruits[1:3])    # ['香蕉', '橙子']（切片）

# 修改列表
fruits.append("葡萄")  # 添加元素
fruits.insert(1, "草莓")  # 在索引1处插入
fruits.remove("香蕉")  # 删除元素
fruits.pop()          # 删除并返回最后一个元素

# 列表方法
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
print(len(numbers))        # 8
print(numbers.count(1))    # 2
print(numbers.index(4))    # 2
numbers.sort()             # 排序
numbers.reverse()          # 反转

# 列表推导式
squares = [x**2 for x in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

even_squares = [x**2 for x in range(10) if x % 2 == 0]
print(even_squares)  # [0, 4, 16, 36, 64]</code></pre>

            <h3>2. 字典 (Dictionary)</h3>
            <p>字典是键值对的集合，无序但可变。</p>
            
            <pre><code># 创建字典
student = {
    "name": "芳芳",
    "age": 25,
    "grade": "A"
}

# 访问值
print(student["name"])     # 芳芳
print(student.get("age"))  # 25
print(student.get("city", "未知"))  # 未知（默认值）

# 修改字典
student["age"] = 26
student["city"] = "北京"
student.update({"job": "测试工程师", "salary": 10000})

# 删除
del student["grade"]
city = student.pop("city")

# 遍历字典
for key, value in student.items():
    print(f"{key}: {value}")

# 字典推导式
squares_dict = {x: x**2 for x in range(5)}
print(squares_dict)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}</code></pre>

            <h3>3. 元组 (Tuple)</h3>
            <p>元组是有序、不可变的数据集合。</p>
            
            <pre><code># 创建元组
coordinates = (10, 20)
colors = ("红色", "绿色", "蓝色")
single = (42,)  # 单元素元组需要逗号

# 访问元素
print(coordinates[0])  # 10
print(colors[1:])      # ('绿色', '蓝色')

# 元组解包
x, y = coordinates
print(f"x={x}, y={y}")  # x=10, y=20

# 元组不可变（但可以包含可变对象）
# coordinates[0] = 5  # 错误！</code></pre>

            <h3>4. 集合 (Set)</h3>
            <p>集合是无序、不重复的元素集合。</p>
            
            <pre><code># 创建集合
fruits = {"苹果", "香蕉", "橙子"}
numbers = set([1, 2, 3, 4, 5])

# 添加和删除
fruits.add("葡萄")
fruits.remove("香蕉")
fruits.discard("西瓜")  # 安全删除（不存在也不报错）

# 集合运算
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

print(set1 | set2)   # {1, 2, 3, 4, 5, 6} (并集)
print(set1 & set2)   # {3, 4} (交集)
print(set1 - set2)   # {1, 2} (差集)
print(set1 ^ set2)   # {1, 2, 5, 6} (对称差集)

# 集合推导式
even_set = {x for x in range(10) if x % 2 == 0}
print(even_set)  # {0, 2, 4, 6, 8}</code></pre>

            <h3>5. 字符串操作</h3>
            <pre><code># 字符串方法
text = "  Python编程教程  "
print(text.strip())           # "Python编程教程" (去除空格)
print(text.upper())           # "  PYTHON编程教程  "
print(text.lower())           # "  python编程教程  "
print(text.replace("Python", "Java"))  # "  Java编程教程  "

# 字符串分割和连接
words = "apple,banana,orange".split(",")
print(words)  # ['apple', 'banana', 'orange']
result = "-".join(words)
print(result)  # "apple-banana-orange"

# 字符串格式化
name = "芳芳"
age = 25
# f-string (推荐)
message = f"我是{name}, 今年{age}岁"
print(message)

# format方法
message = "我是{}, 今年{}岁".format(name, age)
print(message)</code></pre>
        `
    },
    
    'file-io': {
        title: "文件操作",
        content: `
            <h2>文件操作</h2>
            
            <h3>1. 文件读取</h3>
            <pre><code># 读取整个文件
with open("example.txt", "r", encoding="utf-8") as file:
    content = file.read()
    print(content)

# 逐行读取
with open("example.txt", "r", encoding="utf-8") as file:
    for line in file:
        print(line.strip())  # strip()去除换行符

# 读取所有行到列表
with open("example.txt", "r", encoding="utf-8") as file:
    lines = file.readlines()
    print(lines)

# 读取指定字节数
with open("example.txt", "r", encoding="utf-8") as file:
    chunk = file.read(100)  # 读取前100个字符</code></pre>

            <h3>2. 文件写入</h3>
            <pre><code># 写入文件（覆盖模式）
with open("output.txt", "w", encoding="utf-8") as file:
    file.write("第一行内容\\n")
    file.write("第二行内容\\n")

# 追加模式
with open("output.txt", "a", encoding="utf-8") as file:
    file.write("追加的内容\\n")

# 写入多行
lines = ["第一行", "第二行", "第三行"]
with open("output.txt", "w", encoding="utf-8") as file:
    file.writelines(line + "\\n" for line in lines)</code></pre>

            <h3>3. 异常处理</h3>
            <pre><code># try-except基本用法
try:
    result = 10 / 0
except ZeroDivisionError:
    print("不能除以零！")

# 捕获多个异常
try:
    number = int(input("请输入数字: "))
    result = 10 / number
except ValueError:
    print("输入的不是有效数字")
except ZeroDivisionError:
    print("不能除以零")
except Exception as e:
    print(f"发生错误: {e}")

# try-except-else-finally
try:
    file = open("data.txt", "r")
    data = file.read()
except FileNotFoundError:
    print("文件不存在")
else:
    print("文件读取成功")
    print(data)
finally:
    print("清理工作")
    # file.close()  # 如果文件打开成功，需要关闭</code></pre>

            <h3>4. 上下文管理器</h3>
            <pre><code># with语句自动管理资源
with open("file.txt", "r") as file:
    content = file.read()
# 文件自动关闭，无需手动调用file.close()

# 自定义上下文管理器
class FileManager:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
        self.file = None
    
    def __enter__(self):
        self.file = open(self.filename, self.mode)
        return self.file
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.file:
            self.file.close()

# 使用自定义上下文管理器
with FileManager("test.txt", "w") as f:
    f.write("测试内容")</code></pre>

            <h3>5. JSON文件操作</h3>
            <pre><code>import json

# 写入JSON文件
data = {
    "name": "芳芳",
    "age": 25,
    "skills": ["Python", "测试", "自动化"]
}

with open("data.json", "w", encoding="utf-8") as file:
    json.dump(data, file, ensure_ascii=False, indent=2)

# 读取JSON文件
with open("data.json", "r", encoding="utf-8") as file:
    loaded_data = json.load(file)
    print(loaded_data)

# JSON字符串转换
json_string = json.dumps(data, ensure_ascii=False)
print(json_string)

data_from_string = json.loads(json_string)
print(data_from_string)</code></pre>

            <h3>6. CSV文件操作</h3>
            <pre><code>import csv

# 写入CSV文件
with open("students.csv", "w", newline="", encoding="utf-8") as file:
    writer = csv.writer(file)
    writer.writerow(["姓名", "年龄", "成绩"])
    writer.writerow(["芳芳", 25, 95])
    writer.writerow(["小明", 23, 88])

# 读取CSV文件
with open("students.csv", "r", encoding="utf-8") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)

# 使用字典方式读写
with open("students.csv", "w", newline="", encoding="utf-8") as file:
    fieldnames = ["姓名", "年龄", "成绩"]
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerow({"姓名": "芳芳", "年龄": 25, "成绩": 95})</code></pre>
        `
    },
    
    testing: {
        title: "测试开发",
        content: `
            <h2>Python测试开发</h2>
            
            <h3>1. 单元测试基础</h3>
            <p>使用Python内置的unittest模块进行单元测试。</p>
            
            <pre><code>import unittest

# 被测试的函数
def add(a, b):
    return a + b

def divide(a, b):
    if b == 0:
        raise ValueError("除数不能为零")
    return a / b

# 测试类
class TestMathFunctions(unittest.TestCase):
    
    def setUp(self):
        """每个测试方法执行前的准备工作"""
        self.test_data = [1, 2, 3, 4, 5]
    
    def tearDown(self):
        """每个测试方法执行后的清理工作"""
        pass
    
    def test_add(self):
        """测试加法函数"""
        self.assertEqual(add(2, 3), 5)
        self.assertEqual(add(-1, 1), 0)
        self.assertEqual(add(0, 0), 0)
    
    def test_divide(self):
        """测试除法函数"""
        self.assertEqual(divide(10, 2), 5)
        self.assertAlmostEqual(divide(1, 3), 0.333333, places=5)
        
        # 测试异常
        with self.assertRaises(ValueError):
            divide(10, 0)
    
    def test_list_operations(self):
        """测试列表操作"""
        self.assertIn(3, self.test_data)
        self.assertNotIn(10, self.test_data)

# 运行测试
if __name__ == "__main__":
    unittest.main()</code></pre>

            <h3>2. pytest框架</h3>
            <p>pytest是更现代、更强大的测试框架。</p>
            
            <pre><code># 安装: pip install pytest

# test_calculator.py
def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

# 测试文件 test_calculator.py
def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0

def test_multiply():
    assert multiply(3, 4) == 12
    assert multiply(0, 100) == 0

# 使用fixture
import pytest

@pytest.fixture
def sample_data():
    return {"name": "芳芳", "age": 25}

def test_sample_data(sample_data):
    assert sample_data["name"] == "芳芳"
    assert sample_data["age"] == 25

# 参数化测试
@pytest.mark.parametrize("a, b, expected", [
    (2, 3, 5),
    (0, 0, 0),
    (-1, 1, 0),
])
def test_add_parametrized(a, b, expected):
    assert add(a, b) == expected

# 运行: pytest test_calculator.py</code></pre>

            <h3>3. 测试类和对象</h3>
            <pre><code>import unittest

class Calculator:
    def __init__(self):
        self.history = []
    
    def add(self, a, b):
        result = a + b
        self.history.append(f"{a} + {b} = {result}")
        return result
    
    def get_history(self):
        return self.history

class TestCalculator(unittest.TestCase):
    def setUp(self):
        self.calc = Calculator()
    
    def test_add(self):
        result = self.calc.add(2, 3)
        self.assertEqual(result, 5)
        self.assertEqual(len(self.calc.history), 1)
    
    def test_history(self):
        self.calc.add(1, 2)
        self.calc.add(3, 4)
        history = self.calc.get_history()
        self.assertEqual(len(history), 2)
        self.assertIn("1 + 2 = 3", history)</code></pre>

            <h3>4. Mock和测试替身</h3>
            <pre><code>from unittest.mock import Mock, patch, MagicMock

# Mock对象
mock_obj = Mock()
mock_obj.method.return_value = "mocked result"
print(mock_obj.method())  # "mocked result"

# 使用patch装饰器
@patch('builtins.print')
def test_with_mock(mock_print):
    print("测试")
    mock_print.assert_called_once_with("测试")

# Mock外部API调用
def fetch_data_from_api():
    # 假设这是一个外部API调用
    return {"status": "success"}

@patch('module.fetch_data_from_api')
def test_api_call(mock_fetch):
    mock_fetch.return_value = {"status": "mocked"}
    result = fetch_data_from_api()
    assert result["status"] == "mocked"</code></pre>

            <h3>5. 测试最佳实践</h3>
            <ul>
                <li><span class="highlight">测试命名</span>：使用清晰的测试方法名，如test_add_two_positive_numbers</li>
                <li><span class="highlight">AAA模式</span>：Arrange（准备）、Act（执行）、Assert（断言）</li>
                <li><span class="highlight">独立性</span>：每个测试应该独立，不依赖其他测试</li>
                <li><span class="highlight">覆盖率</span>：尽量提高代码覆盖率，但不要盲目追求100%</li>
                <li><span class="highlight">测试隔离</span>：使用setUp和tearDown确保测试环境干净</li>
            </ul>

            <pre><code># 示例：遵循AAA模式
def test_user_registration():
    # Arrange (准备)
    username = "test_user"
    email = "test@example.com"
    
    # Act (执行)
    result = register_user(username, email)
    
    # Assert (断言)
    assert result.success == True
    assert result.user_id is not None</code></pre>

            <h3>6. 测试报告和覆盖率</h3>
            <pre><code># 生成HTML测试报告
# pytest --html=report.html

# 代码覆盖率
# pip install pytest-cov
# pytest --cov=my_module --cov-report=html

# 运行特定测试
# pytest test_file.py::test_function
# pytest -k "test_add"  # 运行名称包含test_add的测试</code></pre>
        `
    }
};

