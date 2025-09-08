# Conspect

## Как создать реакт проект ?
1. Запустить команду `npx create-react-app your-app-name`

## Как запустить реакт проект ?
1. Через терминал заходим в папку проекта (например `your-app-name`)
2. Пишем `npm run start`
3. В браузере открываем `localhost:3000`

## Когда React делает ререндер ?
1. когда меняется state (useState) ✅
2. когда меняются props ✅
3. когда меняется context ✅
4. когда ререндерится родитель ✅
5. force rerender

## В случаях когда ваше следующее значение зависит от предыдущего:
В useState нужно использовать callback

```typescript 
setCounter((prevCounter) => {
    return prevCounter + 1;
});
```