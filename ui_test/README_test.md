1. Установить Maven отсюда https://maven.apache.org/download.cgi

![alt text](sources/file_maven.png)
2. Добавить папку bin в path в системных переменных

![alt text](sources/path_maven.png)

3. Установить JDK отсюда https://www.oracle.com/java/technologies/downloads/#jdk23-windows

![alt text](sources/file_java.png)

4. Добавить в переменные среды пользователя переменную JAVA_HOME, в которой хранится путь до папки jdk-23

![alt text](sources/java_home.png)

5. Добавить путь до папки jdk-23/bin в path в системных переменных

![alt text](sources/path_java.png)

6. Открываем VSCode

7. В Extensions устанавливаем Extension Pack for Java

![alt text](sources/extesion_pack.png)

8. Проваливаемся в папку D:\Code\Konstr\weather\ui_test

9. Проверяем, что нет ошибок на запросы

mvn --version

java --version

![alt text](sources/check_versions.png)

10. Нажимаем Ctrl + shift + P
Вбиваем Java: Configure Java Runtime

![alt text](sources/configure.png)

Проверяем, что там JavaSE

![alt text](sources/check_configure.png)

11. Ждем, пока прогрузятся все зависимости (около минутки)

12. Запускаем сайт по основной README

13. Заходим в файл AppTest.java и запускаем тест по кнопочке напротив теста

![alt text](sources/start_test.png)
