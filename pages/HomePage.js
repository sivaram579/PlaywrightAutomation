exports.HomePage = class HomePage{

    constructor(page){
        this.page = page;
        this.productsList = '//*[@id="tbodyid"]/div/div/div/h4/a';
        this.addToCartButton = "//a[contains(text(),'Add to cart')]";
        this.cart = '#cartur';
    }

    async addProductToCart(productName)
    {
        const productList = await this.page.$$(this.productsList);

        for(const product of productList)
        {
            if(productName == await product.textContent())
            {
                await product.click();
                break;
            }
        }

        await this.page.on('dialog', async dialog => {
            if(dialog.message().includes('added'))
            {
                await dialog.accept();
            }
        })

        await this.page.locator(this.addToCartButton).click();
    }

    async gotoCart()
    {
        await this.page.locator(this.cart).click();
    }
}