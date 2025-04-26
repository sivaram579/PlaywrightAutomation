import { test, expect} from '@playwright/test';

test('Test1 @smoke', async({page}) => {
    console.log('This is my test1...')
})

test('Test2 @smoke', async({page}) => {
    console.log('This is my test2...')
})

test('Test3 @reg', async({page}) => {
    console.log('This is my test3...')
})

test('Test4 @reg', async({page}) => {
    console.log('This is my test4...')
})

test('Test5 @smoke @reg', async({page}) => {
    console.log('This is my test5...')
})