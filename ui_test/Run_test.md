
1. Предварительно установить allure отсюда https://github.com/allure-framework/allure2/releases/tag/2.33.0 - внизу есть zip файл
2. Добавить папук bin в системную переменную Path
3. Для запуска тестов необходимо попасть в ui_test
4. В ней выполнить команду mvn clean test
5. После прогона тестов выполнить команду mvn allure:serve