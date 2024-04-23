describe('My Login application', () => {

    it('should not login with invalid credentials', async () => {
        await browser.url(`http://localhost:3000/#/login`)
        
        await $('input[name="email"]').setValue('admin@test.com')
        await $('input[name="password"]').setValue('password1234')
        await $('button').click()

        const element = await $('.form-group')
        await expect(element).toHaveText('Email Address')
    })
 
 })