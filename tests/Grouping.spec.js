import {test, expect} from '@playwright/test';

test.beforeAll(async()=>{
    console.log('This is beforeAll Hook...')
})

test.afterAll(async()=>{
    console.log('This is afterAll Hook...')
})

test.beforeEach(async()=>{
    console.log('This is beforeEach Hook...')
})

test.afterEach(async()=>{
    console.log('This is afterEach Hook...')
})

test.describe('Group1', () =>{
    test('Test1', async({page}) => {
        console.log('This is my test1')
    })
    
    test('Test2', async({page}) => {
        console.log('This is my test2')
    })
})

test.describe.skip('Group2', () => {
    test('Test3', async({page}) => {
        console.log('This is my test3')
    })
    
    test('Test4', async({page}) => {
        console.log('This is my test4')
    })
})